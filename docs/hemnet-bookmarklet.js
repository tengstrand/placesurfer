(function () {
  "use strict";

  var GRAPHQL_URL = "https://www.hemnet.se/graphql";
  var PHOTON_URL = "https://photon.komoot.io/api/";
  var SEARCH_RESULTS_PATH_PATTERN = /^\/bostader(?:\/karta)?\/?$/;
  var GRAPHQL_QUERY =
    "query PropertyListing($id: ID!) {" +
    " listing(id: $id) {" +
    " streetAddress" +
    " postalCity" +
    " postalArea" +
    " locationDescription" +
    " location { locality }" +
    " coordinates { lat long }" +
    " askingPrice { formatted amount }" +
    " housingForm { name }" +
    " numberOfRooms" +
    " livingArea { formatted value }" +
    " landArea { formatted value }" +
    " supplementalArea { formatted value }" +
    " monthlyFee { formatted amount }" +
    " tenure { name }" +
    " constructionYear" +
    " images { url }" +
    " upcomingOpenHouses { start end description isOnlyDate }" +
    " } }";

  function nonBlank(value) {
    if (value == null) return null;
    var trimmed = String(value).trim();
    return trimmed || null;
  }

  function parseNumber(value) {
    if (typeof value === "number" && !isNaN(value)) return value;
    if (typeof value === "string") {
      var n = parseFloat(value.trim());
      return isNaN(n) ? null : n;
    }
    return null;
  }

  function formattedField(value) {
    if (!value) return null;
    if (typeof value === "string") return nonBlank(value);
    if (typeof value === "object") {
      if (value.formatted) return nonBlank(value.formatted);
      if (typeof value.amount === "number") return String(value.amount);
    }
    if (typeof value === "number") return String(value);
    return null;
  }

  function housingFormText(value) {
    if (typeof value === "string") return nonBlank(value);
    if (value && typeof value === "object") return nonBlank(value.name);
    return null;
  }

  function roomsText(value) {
    if (typeof value === "string") return nonBlank(value);
    if (typeof value === "number") return value + " rum";
    return null;
  }

  function preferLargeImageUrl(url) {
    if (!url) return null;
    return url
      .replace(/\/small_/g, "/large_")
      .replace(/\/thumb_/g, "/large_")
      .replace(/\/(?:small|thumb|mini)\./g, "/large.");
  }

  function imageUrlFromObject(image) {
    if (!image) return null;
    if (typeof image === "string") return nonBlank(image);
    if (typeof image !== "object") return null;
    return nonBlank(image.url || image.src || image.largeUrl || image.large);
  }

  function imageUrlWidthScore(url) {
    if (!url) return 0;
    var match = url.match(/[?&]w=(\d+)/);
    if (match) return parseInt(match[1], 10);
    if (/\/large/i.test(url)) return 2000;
    if (/\/(?:small|thumb|mini)/i.test(url)) return 100;
    return 500;
  }

  function bestUrlFromImageObject(image) {
    if (!image || typeof image !== "object") return imageUrlFromObject(image);
    var best = null;
    var bestWidth = -1;
    if (image.formats && image.formats.length) {
      for (var i = 0; i < image.formats.length; i++) {
        var format = image.formats[i];
        var formatUrl = imageUrlFromObject(format);
        if (!formatUrl) continue;
        var width =
          format && typeof format.width === "number"
            ? format.width
            : imageUrlWidthScore(formatUrl);
        if (width >= bestWidth) {
          bestWidth = width;
          best = formatUrl;
        }
      }
    }
    if (image.sizes && typeof image.sizes === "object") {
      var sizeKeys = ["original", "large", "full", "medium", "small", "thumb"];
      for (var j = 0; j < sizeKeys.length; j++) {
        var sizeUrl = imageUrlFromObject(image.sizes[sizeKeys[j]]);
        if (sizeUrl) {
          return preferLargeImageUrl(sizeUrl);
        }
      }
    }
    var direct = imageUrlFromObject(image);
    if (direct) {
      var directWidth =
        typeof image.width === "number" ? image.width : imageUrlWidthScore(direct);
      if (!best || directWidth >= bestWidth) {
        best = direct;
        bestWidth = directWidth;
      }
    }
    return best ? preferLargeImageUrl(best) : null;
  }

  function ogImageFromPage() {
    var meta = document.querySelector('meta[property="og:image"], meta[name="og:image"]');
    return meta ? nonBlank(meta.getAttribute("content")) : null;
  }

  function bestImageUrl(node) {
    if (!node || typeof node !== "object") return null;
    var candidates = [];
    var direct = nonBlank(node.imageUrl || node.image_url || node.primaryImageUrl);
    if (direct) candidates.push(preferLargeImageUrl(direct));
    var primary = node.primaryImage || node.primary_image || node.mainImage;
    var primaryUrl = bestUrlFromImageObject(primary);
    if (primaryUrl) candidates.push(primaryUrl);
    var collections = [node.images, node.thumbnails, node.gallery, node.pictures];
    for (var c = 0; c < collections.length; c++) {
      var images = collections[c];
      if (!images || !images.length) continue;
      for (var i = 0; i < images.length; i++) {
        var url = bestUrlFromImageObject(images[i]);
        if (url) candidates.push(url);
      }
    }
    if (!candidates.length) {
      var og = ogImageFromPage();
      if (og) candidates.push(og);
    }
    if (!candidates.length) return null;
    var best = candidates[0];
    var bestScore = imageUrlWidthScore(best);
    for (var j = 1; j < candidates.length; j++) {
      var score = imageUrlWidthScore(candidates[j]);
      if (score > bestScore) {
        best = candidates[j];
        bestScore = score;
      }
    }
    return best;
  }

  function coordsFromNode(node) {
    if (!node || typeof node !== "object") return null;
    var coords = node.coordinates || node.coordinate;
    var lat =
      parseNumber(node.latitude) ||
      parseNumber(node.lat) ||
      (coords && (parseNumber(coords.lat) || parseNumber(coords.latitude)));
    var lon =
      parseNumber(node.longitude) ||
      parseNumber(node.long) ||
      parseNumber(node.lon) ||
      parseNumber(node.lng) ||
      (coords && (parseNumber(coords.long) || parseNumber(coords.lon) || parseNumber(coords.lng) || parseNumber(coords.longitude)));
    if (typeof lat === "number" && typeof lon === "number") {
      return { latitude: lat, longitude: lon };
    }
    return null;
  }

  var _apolloState = null;

  function resolveRef(val) {
    if (val && typeof val === "object" && val.__ref && _apolloState) {
      return _apolloState[val.__ref] || val;
    }
    return val;
  }

  var WEEKDAY_NAMES_SV = ["sön", "mån", "tis", "ons", "tor", "fre", "lör"];
  var MONTH_NAMES_SV = [
    "jan", "feb", "mar", "apr", "maj", "jun",
    "jul", "aug", "sep", "okt", "nov", "dec"
  ];

  function pad2(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function formatViewingDateTime(startSeconds, endSeconds, isOnlyDate) {
    var start = new Date(startSeconds * 1000);
    var datePart =
      WEEKDAY_NAMES_SV[start.getDay()] + " " + start.getDate() + " " +
      MONTH_NAMES_SV[start.getMonth()];
    if (isOnlyDate) return datePart;
    var text = datePart + " " + pad2(start.getHours()) + ":" + pad2(start.getMinutes());
    if (typeof endSeconds === "number" && !isNaN(endSeconds)) {
      var end = new Date(endSeconds * 1000);
      text += "–" + pad2(end.getHours()) + ":" + pad2(end.getMinutes());
    }
    return text;
  }

  // Hemnet's listing/ListingCard entities carry upcomingOpenHouses as either
  // plain objects (GraphQL response) or Apollo-cache refs (page-scrape path,
  // resolved via resolveRef) pointing at an OpenHouse{start end isOnlyDate}.
  function openHouseEntries(node) {
    var raw = node && (node.upcomingOpenHouses || node.upcoming_open_houses);
    if (!raw || !raw.length) return [];
    var out = [];
    for (var i = 0; i < raw.length; i++) {
      var oh = resolveRef(raw[i]);
      if (!oh || typeof oh !== "object") continue;
      var start = parseNumber(oh.start);
      if (start == null) continue;
      out.push({ start: start, end: parseNumber(oh.end), isOnlyDate: !!oh.isOnlyDate });
    }
    out.sort(function (a, b) { return a.start - b.start; });
    return out;
  }

  function viewingTextFromNode(node) {
    var entries = openHouseEntries(node);
    if (!entries.length) return null;
    var parts = [];
    for (var i = 0; i < entries.length && i < 3; i++) {
      parts.push(formatViewingDateTime(entries[i].start, entries[i].end, entries[i].isOnlyDate));
    }
    return "Visning: " + parts.join(", ");
  }

  function agentUrlFromNode(node) {
    var broker = resolveRef(node.broker || node.brokerFirm || node.brokerAgency || node.agent);
    if (!broker || typeof broker !== "object") return null;
    return nonBlank(
      (broker.profilePage && broker.profilePage.href) ||
        broker.profilePageUrl ||
        broker.url
    );
  }

  function isGenericAgentName(name) {
    return !name || /^mäklaren$/i.test(name.trim());
  }

  function nameFromBrokerObject(val) {
    var broker = resolveRef(val);
    if (!broker || typeof broker !== "object") return null;
    var joined = [broker.givenName || broker.firstName, broker.familyName || broker.lastName]
      .filter(Boolean).join(" ");
    var name = nonBlank(broker.name || broker.fullName || joined);
    return isGenericAgentName(name) ? null : name;
  }

  function agentNameFromNode(node) {
    // brokerAgency/brokerFirm holds the agency name; prefer over individual broker
    return nameFromBrokerObject(node.brokerAgency)
      || nameFromBrokerObject(node.brokerFirm)
      || nameFromBrokerObject(node.broker)
      || nameFromBrokerObject(node.agent);
  }

  function agentUrlFromPage() {
    var anchors = document.querySelectorAll("a");
    for (var i = 0; i < anchors.length; i++) {
      var text = (anchors[i].textContent || "").trim();
      if (text.indexOf("Läs mer hos") !== -1) {
        var href = nonBlank(anchors[i].getAttribute("href"));
        if (!href) continue;
        if (href.indexOf("://") === -1) {
          href = href.charAt(0) === "/" ? "https://www.hemnet.se" + href : null;
        }
        if (href) return href;
      }
    }
    return null;
  }

  function agentNameFromPage() {
    var anchors = document.querySelectorAll("a");
    for (var i = 0; i < anchors.length; i++) {
      var text = (anchors[i].textContent || "").trim();
      if (text.indexOf("Läs mer hos") !== -1) {
        var name = text.replace(/^Läs mer hos\s*/i, "").trim();
        if (name && !isGenericAgentName(name)) return name;
      }
    }
    return null;
  }

  function ensureKrPerMan(s) {
    if (!s) return s;
    return /kr\/mån/i.test(s) ? s : s + " kr/mån";
  }

  function ensureKrPerM2(s) {
    if (!s) return s;
    return /kr\/m/i.test(s) ? s : s + " kr/m²";
  }

  function extraValuesFrom(node) {
    var extras = [];
    var monthly = formattedField(node.monthlyFee || node.fee);
    if (monthly) extras.push(ensureKrPerMan(monthly));
    var supplemental = formattedField(node.supplementalArea || node.supplemental_area);
    if (supplemental) extras.push(supplemental);
    var sqm = formattedField(node.square_meter_price);
    if (sqm) extras.push(ensureKrPerM2(sqm));
    var tenure = node.tenure;
    if (tenure && tenure.name) {
      var tenureName = nonBlank(tenure.name);
      if (tenureName) extras.push(tenureName);
    }
    var year = node.constructionYear;
    if (year) extras.push("byggår " + year);
    return extras;
  }

  function listingCompletenessScore(node) {
    if (!node || typeof node !== "object") return 0;
    var score = 0;
    if (nonBlank(node.streetAddress || node.street_address)) score += 1;
    if (coordsFromNode(node)) score += 4;
    if (bestImageUrl(node)) score += 2;
    if (formattedField(node.askingPrice || node.asking_price)) score += 2;
    if (formattedField(node.livingArea || node.living_area)) score += 1;
    if (housingFormText(node.housingForm || node.housing_form)) score += 1;
    if (node.numberOfRooms != null || node.rooms != null) score += 1;
    return score;
  }

  function listingTitleFromPage() {
    var h1 = document.querySelector("h1");
    return h1 ? nonBlank(h1.textContent) : null;
  }

  function postalCityFromLocationDescription(value) {
    var text = nonBlank(value);
    if (!text) return null;
    var first = text.split(",")[0];
    first = first ? first.trim() : null;
    if (!first) return null;
    if (/ kommun$/i.test(first)) return null;
    return first;
  }

  function localityFromLocation(location) {
    if (!location || typeof location !== "object") return null;
    return nonBlank(location.locality || location.postalCity || location.postal_city);
  }

  function municipalityNameFromNode(node) {
    // Hemnet's current listing objects carry no flat postalCity - only a
    // municipality __ref (e.g. "Arboga kommun"). Strip the "kommun" suffix so it
    // reads like a normal place name and works as a Photon geocoding anchor.
    if (!node || typeof node !== "object") return null;
    var municipality = resolveRef(node.municipality);
    var name =
      municipality && typeof municipality === "object"
        ? nonBlank(municipality.fullName || municipality.name)
        : null;
    if (!name) return null;
    return nonBlank(name.replace(/\s+kommun$/i, ""));
  }

  function postalCityFromNode(node) {
    if (!node || typeof node !== "object") return null;
    return (
      nonBlank(node.postalCity || node.postal_city) ||
      localityFromLocation(node.location) ||
      postalCityFromLocationDescription(node.locationDescription || node.location_description) ||
      nonBlank(node.postalArea || node.postal_area) ||
      municipalityNameFromNode(node)
    );
  }

  function postalCityFromPage() {
    var h1 = document.querySelector("h1");
    if (!h1) return null;
    var sibling = h1.nextElementSibling;
    while (sibling) {
      var text = nonBlank(sibling.textContent);
      if (text && text.length < 100 && !/^\d[\d\s]*\s*kr$/i.test(text)) {
        var city = postalCityFromLocationDescription(text);
        if (city) return city;
      }
      sibling = sibling.nextElementSibling;
    }
    var parent = h1.parentElement;
    if (parent) {
      var children = parent.children;
      for (var i = 0; i < children.length; i++) {
        if (children[i] === h1) continue;
        var childText = nonBlank(children[i].textContent);
        if (childText && childText.length < 100 && !/^\d[\d\s]*\s*kr$/i.test(childText)) {
          var parsed = postalCityFromLocationDescription(childText);
          if (parsed) return parsed;
        }
      }
    }
    return null;
  }

  function resolvePostalCity(node) {
    return postalCityFromNode(node) || postalCityFromPage();
  }

  function listingCompleteAddress(listing) {
    return (
      listing &&
      nonBlank(listing.streetAddress) &&
      nonBlank(listing.postalCity)
    );
  }

  function listingTitleFromUrl(url) {
    if (!url) return null;
    var match = url.match(/\/bostad\/(.+)-(\d+)\/?$/);
    if (!match) return null;
    var kommunMatch = match[1].match(/-kommun-(.+)$/);
    if (!kommunMatch) return null;
    return kommunMatch[1]
      .split("-")
      .filter(Boolean)
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  function listingIdFromNode(node) {
    if (!node || typeof node !== "object") return null;
    var id =
      node.id != null ? node.id : node.listingId != null ? node.listingId : node.listing_id;
    return id != null ? String(id) : null;
  }

  function resolveStreetAddress(node, listingTitle) {
    return nonBlank(node.streetAddress || node.street_address) || listingTitle;
  }

  function resolveListingTitle(node, pageUrl) {
    return (
      nonBlank(node.listingTitle || node.listing_title || node.title || node.heading) ||
      listingTitleFromPage() ||
      listingTitleFromUrl(pageUrl || window.location.href)
    );
  }

  function normalizeListing(node, pageUrl) {
    if (!node || typeof node !== "object") return null;
    var pageUrlResolved = pageUrl || window.location.href;
    var coords = coordsFromNode(node);
    var listingTitle = resolveListingTitle(node, pageUrlResolved);
    var streetAddress = resolveStreetAddress(node, listingTitle);
    if (!streetAddress && !coords) return null;

    return {
      listingTitle: listingTitle,
      streetAddress: streetAddress,
      postalCity: resolvePostalCity(node),
      latitude: coords ? coords.latitude : null,
      longitude: coords ? coords.longitude : null,
      imageUrl: bestImageUrl(node),
      housingForm: housingFormText(node.housingForm || node.housing_form),
      rooms: roomsText(node.numberOfRooms != null ? node.numberOfRooms : node.rooms),
      livingArea: formattedField(node.livingArea || node.living_area),
      plotArea: formattedField(node.landArea || node.land_area || node.plotArea),
      askingPrice: formattedField(node.askingPrice || node.asking_price),
      constructionYear: node.constructionYear || null,
      extraValues: extraValuesFrom(node),
      agentUrl: agentUrlFromNode(node) || agentUrlFromPage(),
      agentName: agentNameFromNode(node) || agentNameFromPage(),
      viewing: viewingTextFromNode(node)
    };
  }

  function isListingCandidate(node) {
    if (!node || typeof node !== "object") return false;
    return Boolean(
      nonBlank(node.streetAddress || node.street_address) ||
        coordsFromNode(node) ||
        formattedField(node.askingPrice || node.asking_price)
    );
  }

  function collectListingCandidates(root, out) {
    if (!root || typeof root !== "object") return;
    if (isListingCandidate(root)) out.push(root);
    if (Array.isArray(root)) {
      for (var i = 0; i < root.length; i++) collectListingCandidates(root[i], out);
      return;
    }
    for (var key in root) {
      if (Object.prototype.hasOwnProperty.call(root, key)) {
        collectListingCandidates(root[key], out);
      }
    }
  }

  function bestListingFromCandidates(candidates, urlId) {
    if (urlId) {
      for (var i = 0; i < candidates.length; i++) {
        if (listingIdFromNode(candidates[i]) === urlId) {
          return candidates[i];
        }
      }
    }
    var best = null;
    var bestScore = -1;
    for (var i = 0; i < candidates.length; i++) {
      var score = listingCompletenessScore(candidates[i]);
      if (score > bestScore) {
        bestScore = score;
        best = candidates[i];
      }
    }
    return best;
  }

  function directListingPaths(pageProps) {
    if (!pageProps || typeof pageProps !== "object") return [];
    return [
      pageProps.listing,
      pageProps.initialListing,
      pageProps.propertyListing,
      pageProps.sale,
      pageProps.data && pageProps.data.listing
    ].filter(Boolean);
  }

  function findListingInNextData(data) {
    var pageProps = data && data.props && data.props.pageProps;
    _apolloState = (pageProps && pageProps.__APOLLO_STATE__) || null;
    var urlId = listingIdFromUrl();
    var direct = directListingPaths(pageProps);
    for (var i = 0; i < direct.length; i++) {
      if (urlId && listingIdFromNode(direct[i]) === urlId) {
        var matched = normalizeListing(direct[i]);
        if (matched) return matched;
      }
      var normalized = normalizeListing(direct[i]);
      if (normalized && listingCompletenessScore(direct[i]) >= 4) {
        return normalized;
      }
    }
    var candidates = [];
    collectListingCandidates(pageProps || data, candidates);
    var best = bestListingFromCandidates(candidates, urlId);
    return best ? normalizeListing(best) : null;
  }

  function listingIdFromUrl() {
    var match = window.location.pathname.match(/-(\d+)\/?$/);
    return match && match[1];
  }

  function fetchListingFromGraphql(id) {
    return fetch(GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      credentials: "include",
      body: JSON.stringify({
        operationName: "PropertyListing",
        variables: { id: String(id) },
        query: GRAPHQL_QUERY
      })
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (payload) {
        var listing = payload && payload.data && payload.data.listing;
        return listing ? normalizeListing(listing, window.location.href) : null;
      })
      .catch(function () {
        return null;
      });
  }

  function mergeListings(pageListing, graphqlListing) {
    if (!graphqlListing) return pageListing;
    if (!pageListing) return graphqlListing;
    // GraphQL is keyed by listing id from the URL and is authoritative for this ad.
    // Page-scraped __NEXT_DATA__ can include similar listings with wrong prices.
    return {
      listingTitle: graphqlListing.listingTitle || pageListing.listingTitle,
      streetAddress:
        graphqlListing.streetAddress ||
        graphqlListing.listingTitle ||
        pageListing.streetAddress ||
        pageListing.listingTitle,
      postalCity: graphqlListing.postalCity || pageListing.postalCity,
      latitude:
        graphqlListing.latitude != null ? graphqlListing.latitude : pageListing.latitude,
      longitude:
        graphqlListing.longitude != null ? graphqlListing.longitude : pageListing.longitude,
      imageUrl: graphqlListing.imageUrl || pageListing.imageUrl,
      housingForm: graphqlListing.housingForm || pageListing.housingForm,
      rooms: graphqlListing.rooms || pageListing.rooms,
      livingArea: graphqlListing.livingArea || pageListing.livingArea,
      plotArea: graphqlListing.plotArea || pageListing.plotArea,
      askingPrice: graphqlListing.askingPrice || pageListing.askingPrice,
      constructionYear: graphqlListing.constructionYear || pageListing.constructionYear || null,
      extraValues:
        graphqlListing.extraValues && graphqlListing.extraValues.length
          ? graphqlListing.extraValues
          : pageListing.extraValues || [],
      agentUrl: graphqlListing.agentUrl || pageListing.agentUrl,
      agentName: graphqlListing.agentName || pageListing.agentName,
      viewing: graphqlListing.viewing || pageListing.viewing || null
    };
  }

  function listingMissingDescriptionFields(listing) {
    if (!listing) return true;
    if (
      listing.housingForm ||
      listing.rooms ||
      listing.livingArea ||
      listing.askingPrice
    ) {
      return false;
    }
    return !(listing.extraValues && listing.extraValues.length);
  }

  function listingNeedsGraphqlFallback(listing) {
    if (!listing) return true;
    if (listing.latitude == null || listing.longitude == null) return true;
    if (!listing.imageUrl) return true;
    if (listingMissingDescriptionFields(listing)) return true;
    return listingCompletenessScore({
      streetAddress: listing.streetAddress,
      coordinates: { lat: listing.latitude, long: listing.longitude },
      askingPrice: listing.askingPrice ? { formatted: listing.askingPrice } : null,
      livingArea: listing.livingArea ? { formatted: listing.livingArea } : null,
      housingForm: listing.housingForm ? { name: listing.housingForm } : null,
      numberOfRooms: listing.rooms,
      images: listing.imageUrl ? [{ url: listing.imageUrl }] : null
    }) < 4;
  }

  function showCopiedToast(message) {
    var host = document.createElement("div");
    host.style.cssText =
      "position:fixed;top:24px;left:50%;transform:translateX(-50%);" +
      "z-index:2147483647;pointer-events:none;margin:0;padding:0;border:none;" +
      "background:transparent;width:auto;height:auto;max-width:none;max-height:none;";
    var shadow = host.attachShadow({ mode: "open" });
    var style = document.createElement("style");
    style.textContent =
      "div{display:inline-block;margin:0;padding:8px 16px;" +
      "background:#166534;color:#fff;border-radius:6px;" +
      "font:600 14px system-ui,sans-serif;white-space:nowrap;" +
      "width:max-content;max-width:none;height:auto;max-height:none;" +
      "box-sizing:border-box;line-height:1.2;}";
    var el = document.createElement("div");
    el.textContent = message || "Copied";
    el.setAttribute("role", "status");
    shadow.appendChild(style);
    shadow.appendChild(el);
    document.body.appendChild(host);
    window.setTimeout(function () {
      if (host.parentNode) {
        host.parentNode.removeChild(host);
      }
    }, 1000);
  }

  function copyToClipboard(text, message) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () {
        showCopiedToast(message);
      });
    }
    window.prompt("Kopiera denna text:", text);
    return Promise.resolve();
  }

  function buildPayload(listing) {
    var item = {
      v: 1,
      type: "placesurfer/hemnet-listing",
      url: window.location.href,
      listing: listing
    };
    return {v: 1, type: "placesurfer/pin-list", pins: [item]};
  }

  // --- Hemnet search-results (map/list) pages ---
  // A search page (/bostader or /bostader/karta, any query string) lists many
  // listings at once instead of one. The map view only fetches sparse
  // coordinate/id data client-side, but the list view's own __NEXT_DATA__
  // already embeds full ListingCard entries in its Apollo state - so on a map
  // view we transparently fetch the equivalent list URL (same session cookies)
  // instead of navigating the user away from the map they're looking at.

  function searchResultsListUrl() {
    if (!SEARCH_RESULTS_PATH_PATTERN.test(window.location.pathname)) return null;
    var path = window.location.pathname.replace(/\/karta\/?$/, "");
    if (!path) path = "/bostader";
    return window.location.origin + path + window.location.search;
  }

  function nextDataFromHtml(html) {
    var match = html && html.match(
      /<script[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/
    );
    if (!match) return null;
    try {
      return JSON.parse(match[1]);
    } catch (error) {
      return null;
    }
  }

  function thumbnailsKey(card) {
    for (var key in card) {
      if (Object.prototype.hasOwnProperty.call(card, key) && key.indexOf("thumbnails(") === 0) {
        return key;
      }
    }
    return null;
  }

  function listingCardToNode(card) {
    var node = {
      id: card.id,
      streetAddress: card.streetAddress,
      locationDescription: card.locationDescription,
      coordinates: card.coordinates,
      askingPrice: card.askingPrice,
      housingForm: card.housingForm,
      rooms: card.rooms,
      // ListingCard has no plain livingArea field - livingAndSupplementalAreas
      // (e.g. "150+16 m²") is the closest equivalent shown on the card.
      livingArea: card.livingAndSupplementalAreas,
      landArea: card.landArea,
      fee: card.fee,
      upcomingOpenHouses: card.upcomingOpenHouses
    };
    var thumbKey = thumbnailsKey(card);
    if (thumbKey && card[thumbKey] && card[thumbKey].length) node.thumbnails = card[thumbKey];
    var agencyName = nonBlank(card.brokerAgencyName) || nonBlank(card.brokerName);
    if (agencyName) node.brokerAgency = {name: agencyName};
    return node;
  }

  function extractSearchResultItems(data) {
    var pageProps = data && data.props && data.props.pageProps;
    var apollo = (pageProps && pageProps.__APOLLO_STATE__) || {};
    _apolloState = apollo;
    var items = [];
    for (var key in apollo) {
      if (!Object.prototype.hasOwnProperty.call(apollo, key)) continue;
      if (key.indexOf("ListingCard:") !== 0) continue;
      var card = apollo[key];
      if (!card || !card.slug) continue;
      var listingUrl = "https://www.hemnet.se/bostad/" + card.slug;
      var listing = normalizeListing(listingCardToNode(card), listingUrl);
      if (!listing || listing.latitude == null || listing.longitude == null) continue;
      items.push({v: 1, type: "placesurfer/hemnet-listing", url: listingUrl, listing: listing});
    }
    return items;
  }

  function buildSearchResultsPayload(items, sourceUrl, page) {
    return {
      v: 1,
      type: "placesurfer/hemnet-search-results",
      sourceUrl: sourceUrl,
      page: page || 1,
      items: items
    };
  }

  function runSearchResults(listUrl) {
    var onListPage = window.location.pathname.indexOf("/karta") === -1;

    function withData(data) {
      if (!data) {
        window.alert("Kunde inte läsa Hemnet-data.");
        return;
      }
      var items = extractSearchResultItems(data);
      if (!items.length) {
        window.alert("Hittade inga bostäder i sökningen.");
        return;
      }
      var page = data.props && data.props.pageProps && data.props.pageProps.page;
      copyToClipboard(
        JSON.stringify(buildSearchResultsPayload(items, listUrl, page)),
        items.length + " listings copied"
      );
    }

    if (onListPage) {
      var script = document.getElementById("__NEXT_DATA__");
      if (!script) {
        window.alert("Hittade inte Hemnet-data på sidan.");
        return;
      }
      try {
        withData(JSON.parse(script.textContent));
      } catch (error) {
        window.alert("Kunde inte läsa Hemnet-data.");
      }
      return;
    }

    fetch(listUrl, {credentials: "include"})
      .then(function (resp) { return resp.text(); })
      .then(function (html) { withData(nextDataFromHtml(html)); })
      .catch(function () { window.alert("Kunde inte hämta sökresultaten."); });
  }

  function fetchCoordsFromPhoton(street, city) {
    var query = street ? (city ? street + ", " + city : street) : (city || "");
    if (!query) return Promise.resolve(null);
    var url = PHOTON_URL + "?q=" + encodeURIComponent(query) + "&limit=3";
    return fetch(url)
      .then(function (resp) { return resp.json(); })
      .then(function (body) {
        var features = body && body.features;
        if (!features || !features.length) return null;
        for (var i = 0; i < features.length; i++) {
          var feature = features[i];
          var props = feature && feature.properties;
          var geom = feature && feature.geometry;
          if (!props || !geom) continue;
          if (!props.countrycode || props.countrycode.toLowerCase() !== "se") continue;
          var coords = geom.coordinates;
          if (!coords || coords.length < 2) continue;
          var lon = coords[0];
          var lat = coords[1];
          if (typeof lon === "number" && typeof lat === "number") {
            return { longitude: lon, latitude: lat };
          }
        }
        return null;
      })
      .catch(function () { return null; });
  }

  function geocodeAndFinish(merged, finish) {
    var hasCoords = merged && merged.latitude != null && merged.longitude != null;
    if (!hasCoords && merged && listingCompleteAddress(merged)) {
      fetchCoordsFromPhoton(merged.streetAddress, merged.postalCity).then(function (coords) {
        if (coords) return coords;
        // Full address not geocoded; fall back to city-level for approximate location
        return fetchCoordsFromPhoton(null, merged.postalCity);
      }).then(function (coords) {
        if (coords) {
          merged.latitude = coords.latitude;
          merged.longitude = coords.longitude;
        }
        finish(merged);
      });
    } else {
      finish(merged);
    }
  }

  function run() {
    var searchUrl = searchResultsListUrl();
    if (searchUrl) {
      runSearchResults(searchUrl);
      return;
    }

    var script = document.getElementById("__NEXT_DATA__");
    if (!script) {
      window.alert("Hittade inte Hemnet-data på sidan.");
      return;
    }

    var data;
    try {
      data = JSON.parse(script.textContent);
    } catch (error) {
      window.alert("Kunde inte läsa Hemnet-data.");
      return;
    }

    var listing = findListingInNextData(data);
    var id = listingIdFromUrl();

    function finish(listingResult) {
      if (!listingResult) {
        window.alert("Kunde inte läsa annonsdata från sidan.");
        return;
      }
      var hasCoords =
        listingResult.latitude != null && listingResult.longitude != null;
      if (!hasCoords && !listingCompleteAddress(listingResult)) {
        window.alert(
          "Kunde inte extrahera koordinater eller fullständig adress från annonsen."
        );
        return;
      }
      copyToClipboard(JSON.stringify(buildPayload(listingResult)));
    }

    if (!id) {
      geocodeAndFinish(listing, finish);
      return;
    }

    fetchListingFromGraphql(id).then(function (graphqlListing) {
      geocodeAndFinish(mergeListings(listing, graphqlListing), finish);
    });
  }

  run();
})();
