(function () {
  "use strict";

  var PHOTON_URL = "https://photon.komoot.io/api/";

  function nonBlank(value) {
    if (value == null) return null;
    var trimmed = String(value).trim();
    return trimmed || null;
  }

  function parseNumber(value) {
    if (typeof value === "number" && !isNaN(value)) return value;
    if (typeof value === "string") {
      var n = parseFloat(value.trim().replace(",", "."));
      return isNaN(n) ? null : n;
    }
    return null;
  }

  function formatPrice(amount) {
    if (amount == null) return null;
    var n = typeof amount === "number" ? amount
      : parseFloat(String(amount).replace(/[\s ]/g, "").replace(",", "."));
    if (isNaN(n)) return nonBlank(String(amount));
    return n.toLocaleString("sv-SE") + " kr";
  }

  function formatArea(value) {
    if (value == null) return null;
    if (typeof value === "number") {
      return value.toLocaleString("sv-SE") + " m²";
    }
    var s = String(value).trim()
      .replace(/\bm2\b/g, "m²")
      .replace(/\bkvm\b/gi, "m²");
    if (!/m²/.test(s)) {
      var n = parseFloat(s.replace(/[\s ]/g, "").replace(",", "."));
      if (!isNaN(n)) return n.toLocaleString("sv-SE") + " m²";
    }
    return s || null;
  }

  function formattedField(value) {
    if (!value) return null;
    if (typeof value === "string") return nonBlank(value);
    if (typeof value === "object") {
      if (value.formatted) return nonBlank(value.formatted);
      if (typeof value.amount === "number") return String(value.amount);
      if (value.value) return nonBlank(String(value.value));
    }
    if (typeof value === "number") return String(value);
    return null;
  }

  function housingFormText(value) {
    if (typeof value === "string") return nonBlank(value);
    if (value && typeof value === "object") return nonBlank(value.name || value.label);
    return null;
  }

  function roomsText(value) {
    if (typeof value === "string") {
      var t = nonBlank(value);
      return t && !/rum/.test(t) ? t + " rum" : t;
    }
    if (typeof value === "number") return value + " rum";
    return null;
  }

  function ogImageFromPage() {
    var meta = document.querySelector('meta[property="og:image"], meta[name="og:image"]');
    return meta ? nonBlank(meta.getAttribute("content")) : null;
  }

  function bestImageUrl(node) {
    if (!node || typeof node !== "object") return ogImageFromPage();
    var candidates = [];
    var direct = nonBlank(
      node.imageUrl || node.image_url || node.primaryImageUrl ||
      node.mainImageUrl || node.heroImageUrl
    );
    if (direct) candidates.push(direct);
    var images = node.images || node.pictures || node.gallery;
    if (images && images.length) {
      for (var i = 0; i < images.length; i++) {
        var img = images[i];
        var url = typeof img === "string" ? nonBlank(img) : nonBlank(img && (img.url || img.src));
        if (url) candidates.push(url);
      }
    }
    if (!candidates.length) {
      var og = ogImageFromPage();
      if (og) candidates.push(og);
    }
    return candidates.length ? candidates[0] : null;
  }

  function coordsFromNode(node) {
    if (!node || typeof node !== "object") return null;
    var coords = node.coordinates || node.coordinate || node.geo || node.location;
    var lat =
      parseNumber(node.latitude) ||
      parseNumber(node.lat) ||
      (coords && typeof coords === "object" &&
        (parseNumber(coords.lat) || parseNumber(coords.latitude)));
    var lon =
      parseNumber(node.longitude) ||
      parseNumber(node.lng) ||
      parseNumber(node.lon) ||
      (coords && typeof coords === "object" &&
        (parseNumber(coords.lng) || parseNumber(coords.lon) ||
         parseNumber(coords.longitude) || parseNumber(coords.long)));
    if (typeof lat === "number" && typeof lon === "number") {
      return { latitude: lat, longitude: lon };
    }
    return null;
  }

  function listingIdFromUrl() {
    var match = window.location.pathname.match(/\/bostad\/id-(\d+)-/);
    return match ? match[1] : null;
  }

  function infoFromUrlSlug() {
    var path = window.location.pathname;
    var match = path.match(/\/bostad\/id-\d+-([^-]+)-(\d+)rum-([^?]+)/);
    if (!match) return {};
    var capitalize = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
    var parts = match[3].replace(/\?.*$/, "").split("-");
    var streetAddress = null;
    var postalCity = null;
    if (parts.length >= 2 && /^\d+$/.test(parts[parts.length - 1])) {
      var addrStart = Math.max(0, parts.length - 3);
      streetAddress = parts.slice(addrStart).map(capitalize).join(" ");
      postalCity = parts.slice(0, addrStart).map(capitalize).join(" ") || null;
    } else {
      postalCity = parts.map(capitalize).join(" ");
    }
    return {
      housingForm: capitalize(match[1]),
      rooms: match[2] + " rum",
      streetAddress: streetAddress,
      postalCity: postalCity
    };
  }

  function addressFromPage() {
    var h1 = document.querySelector("h1");
    return h1 ? nonBlank(h1.textContent) : null;
  }

  function cityFromPage() {
    var selectors = [
      '[class*="municipality"]',
      '[class*="postal"]',
      '[class*="location"]',
      '[class*="city"]',
      '[class*="address"]'
    ];
    for (var i = 0; i < selectors.length; i++) {
      var el = document.querySelector(selectors[i]);
      if (el) {
        var text = nonBlank(el.textContent);
        if (text && text.length < 80 && !/^\d/.test(text)) return text;
      }
    }
    var h1 = document.querySelector("h1");
    if (h1 && h1.nextElementSibling) {
      var sib = nonBlank(h1.nextElementSibling.textContent);
      if (sib && sib.length < 80) return sib;
    }
    return null;
  }

  function agentUrlFromPage() {
    var links = document.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      var href = links[i].href;
      if (href && /^https?:\/\//.test(href) && !/boneo\.se/i.test(href)) {
        var text = links[i].textContent || "";
        if (/l[äa]s mer/i.test(text) || /maklare|m\xe4klare/i.test(href)) {
          return href.split("?")[0] || href;
        }
      }
    }
    return null;
  }

  function priceFromPage() {
    var selectors = [
      '[class*="price"]',
      '[class*="asking"]',
      '[class*="pris"]'
    ];
    for (var i = 0; i < selectors.length; i++) {
      var el = document.querySelector(selectors[i]);
      if (el) {
        var text = nonBlank(el.textContent);
        if (text && /\d/.test(text)) return text;
      }
    }
    return null;
  }

  function listingCompletenessScore(node) {
    if (!node || typeof node !== "object") return 0;
    var score = 0;
    if (nonBlank(node.streetAddress || node.street_address || node.address)) score += 1;
    if (coordsFromNode(node)) score += 4;
    if (bestImageUrl(node)) score += 2;
    if (formattedField(node.askingPrice || node.asking_price || node.price || node.listPrice)) score += 2;
    if (formattedField(node.livingArea || node.living_area || node.area)) score += 1;
    if (housingFormText(node.housingForm || node.housing_form || node.propertyType || node.type)) score += 1;
    if (node.numberOfRooms != null || node.rooms != null || node.numRooms != null) score += 1;
    return score;
  }

  function isListingCandidate(node) {
    if (!node || typeof node !== "object") return false;
    return Boolean(
      nonBlank(node.streetAddress || node.street_address || node.address) ||
      coordsFromNode(node) ||
      formattedField(node.askingPrice || node.asking_price || node.price || node.listPrice)
    );
  }

  function collectCandidates(root, out, depth) {
    if (!root || typeof root !== "object" || depth > 6) return;
    if (isListingCandidate(root)) out.push(root);
    if (Array.isArray(root)) {
      for (var i = 0; i < root.length; i++) collectCandidates(root[i], out, depth + 1);
      return;
    }
    for (var key in root) {
      if (Object.prototype.hasOwnProperty.call(root, key)) {
        collectCandidates(root[key], out, depth + 1);
      }
    }
  }

  function normalizeListing(node) {
    if (!node || typeof node !== "object") return null;
    var coords = coordsFromNode(node);
    var streetAddress = nonBlank(
      node.streetAddress || node.street_address ||
      node.address || node.fullAddress
    );
    var postalCity = nonBlank(
      node.postalCity || node.postal_city || node.city ||
      node.municipality || node.municipalityName || node.area
    );
    if (!streetAddress && !coords) return null;
    var brokerNode = node.broker || node.brokerFirm || node.agent;
    var agentUrl = nonBlank(
      node.agentUrl || node.agent_url || node.brokerUrl ||
      (brokerNode && typeof brokerNode === "object" &&
        (brokerNode.url || (brokerNode.profilePage && brokerNode.profilePage.href)))
    );
    return {
      streetAddress: streetAddress,
      postalCity: postalCity,
      latitude: coords ? coords.latitude : null,
      longitude: coords ? coords.longitude : null,
      imageUrl: bestImageUrl(node),
      housingForm: housingFormText(
        node.housingForm || node.housing_form || node.propertyType ||
        node.objectType || node.objecttype
      ),
      rooms: roomsText(node.numberOfRooms || node.rooms || node.numRooms),
      livingArea: formatArea(formattedField(
        node.livingArea || node.living_area || node.livingAreaValue
      )),
      plotArea: formatArea(formattedField(node.plotArea || node.plot_area || node.landArea || node.land_area)),
      askingPrice: formattedField(
        node.askingPrice || node.asking_price || node.price ||
        node.listPrice || node.startingPrice
      ),
      agentUrl: agentUrl,
      extraValues: []
    };
  }

  function normalizeBoneoDetail(detail) {
    if (!detail || typeof detail !== "object") return null;
    var fc = detail.field_coordinates;
    var lat = fc ? parseNumber(fc.lat != null ? fc.lat : fc.latitude) : null;
    var lon = fc ? parseNumber(fc.lon != null ? fc.lon : (fc.lng != null ? fc.lng : fc.longitude)) : null;
    var streetAddress = nonBlank(detail.title_field);
    var city = nonBlank(detail.field_property_city);
    var area = nonBlank(detail.field_property_area);
    var postalCity = [area, city].filter(Boolean).join(" ") || null;
    if (lat == null && lon == null && !streetAddress) return null;
    return {
      streetAddress: streetAddress,
      postalCity: postalCity,
      latitude: lat,
      longitude: lon,
      imageUrl: ogImageFromPage(),
      housingForm: nonBlank(detail.field_property_original_type) || null,
      rooms: roomsText(detail.field_property_rooms),
      livingArea: formatArea(detail.field_property_floor_area || detail.field_property_constructed_area),
      plotArea: formatArea(detail.field_property_lot_size || detail.field_property_tomt_size),
      askingPrice: formatPrice(detail.field_property_converted_price),
      agentUrl: nonBlank(detail.field_url_description),
      extraValues: []
    };
  }

  function findListingInNextData(data) {
    var pageProps = data && data.props && data.props.pageProps;
    var boneoDetail = pageProps && pageProps.property_detail;
    if (boneoDetail) {
      var boneo = normalizeBoneoDetail(boneoDetail);
      if (boneo) return boneo;
    }
    var urlId = listingIdFromUrl();
    var direct = [
      pageProps && pageProps.listing,
      pageProps && pageProps.estate,
      pageProps && pageProps.property,
      pageProps && pageProps.object,
      pageProps && pageProps.ad,
      pageProps && pageProps.initialData && pageProps.initialData.listing,
      pageProps && pageProps.dehydratedState && pageProps.dehydratedState.queries &&
        pageProps.dehydratedState.queries[0] && pageProps.dehydratedState.queries[0].state &&
        pageProps.dehydratedState.queries[0].state.data
    ].filter(Boolean);

    for (var i = 0; i < direct.length; i++) {
      var d = direct[i];
      var normalized = normalizeListing(d);
      if (normalized && listingCompletenessScore(d) >= 4) return normalized;
    }

    var candidates = [];
    collectCandidates(pageProps || data, candidates, 0);
    var best = null, bestScore = -1;
    for (var j = 0; j < candidates.length; j++) {
      var id = candidates[j].id || candidates[j].listingId || candidates[j].estateId;
      if (urlId && id && String(id) === urlId) {
        var matched = normalizeListing(candidates[j]);
        if (matched) return matched;
      }
      var score = listingCompletenessScore(candidates[j]);
      if (score > bestScore) { bestScore = score; best = candidates[j]; }
    }
    return best ? normalizeListing(best) : null;
  }

  function findListingInJsonLd() {
    var scripts = document.querySelectorAll('script[type="application/ld+json"]');
    for (var i = 0; i < scripts.length; i++) {
      try {
        var data = JSON.parse(scripts[i].textContent);
        var nodes = Array.isArray(data) ? data : [data];
        for (var j = 0; j < nodes.length; j++) {
          var node = nodes[j];
          if (!node) continue;
          var type = node["@type"] || "";
          if (/RealEstate|Residence|House|Apartment|Product/i.test(type)) {
            var addr = node.address;
            if (addr && typeof addr === "object") {
              var listing = {
                streetAddress: nonBlank(addr.streetAddress),
                postalCity: nonBlank(addr.addressLocality || addr.addressRegion),
                imageUrl: nonBlank(node.image || (Array.isArray(node.image) && node.image[0])),
                askingPrice: formattedField(node.price || (node.offers && node.offers.price))
              };
              if (node.geo && typeof node.geo === "object") {
                listing.latitude = parseNumber(node.geo.latitude);
                listing.longitude = parseNumber(node.geo.longitude);
              }
              if (listing.streetAddress || (listing.latitude && listing.longitude)) {
                return listing;
              }
            }
          }
        }
      } catch (e) {}
    }
    return null;
  }

  function buildDomListing() {
    var slugInfo = infoFromUrlSlug();
    return {
      streetAddress: addressFromPage() || slugInfo.streetAddress || null,
      postalCity: cityFromPage() || slugInfo.postalCity || null,
      imageUrl: ogImageFromPage(),
      askingPrice: priceFromPage(),
      housingForm: slugInfo.housingForm || null,
      rooms: slugInfo.rooms || null,
      agentUrl: agentUrlFromPage(),
      latitude: null,
      longitude: null,
      extraValues: []
    };
  }

  function mergeListing(base, extra) {
    if (!extra) return base;
    if (!base) return extra;
    return {
      streetAddress: base.streetAddress || extra.streetAddress,
      postalCity: base.postalCity || extra.postalCity,
      imageUrl: base.imageUrl || extra.imageUrl,
      housingForm: base.housingForm || extra.housingForm,
      rooms: base.rooms || extra.rooms,
      livingArea: base.livingArea || extra.livingArea,
      plotArea: base.plotArea || extra.plotArea,
      askingPrice: base.askingPrice || extra.askingPrice,
      agentUrl: base.agentUrl || extra.agentUrl,
      extraValues: (base.extraValues && base.extraValues.length) ? base.extraValues : (extra.extraValues || []),
      latitude: base.latitude != null ? base.latitude : extra.latitude,
      longitude: base.longitude != null ? base.longitude : extra.longitude
    };
  }

  function showCopiedToast() {
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
    el.textContent = "Copied";
    el.setAttribute("role", "status");
    shadow.appendChild(style);
    shadow.appendChild(el);
    document.body.appendChild(host);
    window.setTimeout(function () {
      if (host.parentNode) host.parentNode.removeChild(host);
    }, 1000);
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(showCopiedToast);
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
    return { v: 1, type: "placesurfer/pin-list", pins: [item] };
  }

  function fetchCoordsFromPhoton(street, city) {
    var query = street + (city ? ", " + city : "");
    var url = PHOTON_URL + "?q=" + encodeURIComponent(query) + "&limit=3&lang=sv";
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
          if (typeof coords[0] === "number" && typeof coords[1] === "number") {
            return { longitude: coords[0], latitude: coords[1] };
          }
        }
        return null;
      })
      .catch(function () { return null; });
  }

  function geocodeAndFinish(listing, finish) {
    var hasCoords = listing && listing.latitude != null && listing.longitude != null;
    var hasAddress = listing && nonBlank(listing.streetAddress);
    if (!hasCoords && hasAddress) {
      fetchCoordsFromPhoton(listing.streetAddress, listing.postalCity).then(function (coords) {
        if (coords) {
          listing.latitude = coords.latitude;
          listing.longitude = coords.longitude;
        }
        finish(listing);
      });
    } else {
      finish(listing);
    }
  }

  function run() {
    if (!/boneo\.se/i.test(window.location.hostname)) {
      window.alert("Öppna en bostad på boneo.se och klicka sedan på Kopiera plats.");
      return;
    }

    var listing = null;

    var nextScript = document.getElementById("__NEXT_DATA__");
    if (nextScript) {
      try {
        var nextData = JSON.parse(nextScript.textContent);
        listing = findListingInNextData(nextData);
      } catch (e) {}
    }

    var jsonLd = findListingInJsonLd();
    listing = mergeListing(listing, jsonLd);

    var dom = buildDomListing();
    listing = listing ? mergeListing(listing, dom) : dom;

    if (!listing || (!listing.streetAddress && listing.latitude == null)) {
      window.alert("Kunde inte läsa annonsdata från sidan.");
      return;
    }

    geocodeAndFinish(listing, function (result) {
      var hasCoords = result.latitude != null && result.longitude != null;
      if (!hasCoords && !nonBlank(result.streetAddress)) {
        window.alert("Kunde inte extrahera koordinater eller adress från annonsen.");
        return;
      }
      copyToClipboard(JSON.stringify(buildPayload(result)));
    });
  }

  run();
})();
