(function () {
  "use strict";

  // Notar.se is a Nuxt 3 (Vue) app. A single-listing page embeds the full
  // listing object in a <script id="__NUXT_DATA__"> tag using Nuxt's
  // "devalue" flattened-array format: a JSON array where most entries are
  // indices pointing at other array entries rather than inline values, so it
  // has to be "resolved" (see resolveNuxtData) before it reads like normal
  // nested JSON. Search-results pages fetch their listings from an
  // authenticated data.notar.se/objects API we can't call directly from a
  // bookmarklet (it 401s without the page's own request credentials/headers)
  // - so for search results this scrapes the already-rendered result cards'
  // text instead, then geocodes each address via Photon (same approach as
  // widerlov-bookmarklet.js) since the cards carry no coordinates.
  var SEARCH_RESULTS_PATH_PATTERN = /^\/kopa-bostad\/?$/;
  var SINGLE_LISTING_PATH_PATTERN = /^\/kopa-bostad\/objekt\/[^/?#]+\/?$/;
  var PHOTON_URL = "https://photon.komoot.io/api/";

  function nonBlank(value) {
    if (value == null) return null;
    var trimmed = String(value).trim();
    return trimmed === "" ? null : trimmed;
  }

  function formatPriceSek(n) {
    if (typeof n !== "number" || !isFinite(n)) return null;
    var rounded = Math.round(n);
    var digits = String(Math.abs(rounded));
    var groups = [];
    while (digits.length > 3) {
      groups.unshift(digits.slice(-3));
      digits = digits.slice(0, -3);
    }
    groups.unshift(digits);
    return (rounded < 0 ? "-" : "") + groups.join(" ") + " kr";
  }

  function formatArea(n) {
    if (typeof n !== "number" || !isFinite(n)) return null;
    return n.toLocaleString("sv-SE") + " m²";
  }

  var WEEKDAY_NAMES_SV = ["sön", "mån", "tis", "ons", "tor", "fre", "lör"];
  var MONTH_NAMES_SV = [
    "jan", "feb", "mar", "apr", "maj", "jun",
    "jul", "aug", "sep", "okt", "nov", "dec"
  ];

  function pad2(n) {
    return n < 10 ? "0" + n : String(n);
  }

  // Notar's viewing timestamps look like "2026-07-26 12:00:00" - parsed by
  // hand (not `new Date(string)`) so the displayed weekday/time can't shift
  // due to a browser interpreting the string as UTC.
  function formatNotarViewingDateTime(startText, endText) {
    var m = /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/.exec(nonBlank(startText) || "");
    if (!m) return null;
    var y = +m[1], mo = +m[2], d = +m[3], hh = m[4], mm = m[5];
    var weekday = new Date(Date.UTC(y, mo - 1, d)).getUTCDay();
    var text =
      WEEKDAY_NAMES_SV[weekday] + " " + d + " " + MONTH_NAMES_SV[mo - 1] + " " + hh + ":" + mm;
    var me = /(\d{2}):(\d{2})/.exec((nonBlank(endText) || "").split(/[ T]/)[1] || "");
    if (me) text += "–" + me[1] + ":" + me[2];
    return text;
  }

  function viewingTextFromViewings(viewings) {
    if (!viewings || !viewings.length) return null;
    var parts = [];
    for (var i = 0; i < viewings.length && i < 3; i++) {
      var v = viewings[i];
      if (!v) continue;
      var text = formatNotarViewingDateTime(v.start, v.end);
      if (text) parts.push(text);
    }
    return parts.length ? "Visning: " + parts.join(", ") : null;
  }

  function ogImageFromPage() {
    var meta = document.querySelector('meta[property="og:image"], meta[name="og:image"]');
    return meta ? nonBlank(meta.getAttribute("content")) : null;
  }

  function notarIdFromHref(href) {
    var m = /\/kopa-bostad\/objekt\/([^/?#]+)/.exec(href || "");
    return m ? m[1] : null;
  }

  function absoluteNotarUrl(href) {
    var h = nonBlank(href);
    if (!h) return null;
    return /^https?:\/\//i.test(h) ? h : "https://www.notar.se" + h;
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
      if (host.parentNode) host.parentNode.removeChild(host);
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

  // --- Nuxt __NUXT_DATA__ "devalue" payload (single-listing pages) ---
  //
  // The array is mostly indices: arr[i] is either a plain value, a
  // ["WrapperType", innerIndex] pair (Reactive/ShallowReactive/Ref/...) that
  // resolves to whatever innerIndex resolves to, or a plain array/object
  // whose own values are themselves indices into the same array. Resolving
  // index 0 walks the whole structure back into normal nested JSON.
  function resolveNuxtData(arr) {
    var resolved = [];
    var pending = [];
    function resolve(i) {
      if (pending[i]) return undefined;
      if (resolved[i] !== undefined) return resolved[i];
      var v = arr[i];
      if (v === null || typeof v !== "object") return v;
      pending[i] = true;
      var out;
      if (Array.isArray(v)) {
        if (
          v.length === 2 &&
          typeof v[0] === "string" &&
          /^[A-Z]/.test(v[0]) &&
          typeof v[1] === "number"
        ) {
          out = resolve(v[1]);
        } else {
          out = [];
          for (var j = 0; j < v.length; j++) {
            out.push(typeof v[j] === "number" ? resolve(v[j]) : v[j]);
          }
        }
      } else {
        out = {};
        for (var k in v) {
          if (!Object.prototype.hasOwnProperty.call(v, k)) continue;
          out[k] = typeof v[k] === "number" ? resolve(v[k]) : v[k];
        }
      }
      resolved[i] = out;
      pending[i] = false;
      return out;
    }
    return resolve(0);
  }

  function singleListingNode() {
    var script = document.getElementById("__NUXT_DATA__");
    if (!script) return null;
    var arr;
    try {
      arr = JSON.parse(script.textContent);
    } catch (error) {
      return null;
    }
    if (!Array.isArray(arr)) return null;
    var root = resolveNuxtData(arr);
    if (!root || !root.data || typeof root.data !== "object") return null;
    for (var key in root.data) {
      if (Object.prototype.hasOwnProperty.call(root.data, key) && key.indexOf("object-") === 0) {
        return root.data[key];
      }
    }
    return null;
  }

  function normalizeSingleListing(listing) {
    if (!listing || typeof listing !== "object") return null;
    var lat = typeof listing.latitude === "number" ? listing.latitude : null;
    var lon = typeof listing.longitude === "number" ? listing.longitude : null;
    var street = nonBlank(listing.address);
    if (!street || lat == null || lon == null) return null;
    var residence = listing.residence || {};
    var price = listing.price || {};
    var rooms =
      typeof listing.numberOfRooms === "number"
        ? listing.numberOfRooms
        : typeof residence.numberOfRooms === "number"
        ? residence.numberOfRooms
        : null;
    var plotArea =
      typeof residence.plotArea === "number"
        ? residence.plotArea
        : listing.plot && typeof listing.plot.area === "number"
        ? listing.plot.area
        : null;
    // residence.buildingType is NOT added here even though it's informative
    // ("Parhus, 2-plan") - it's already used as housingForm below, and
    // build-description (clipboard-ui.hemnet.form) would otherwise show it
    // twice (once as the housing-form detail, once as an extra value).
    var extraValues = [];
    if (typeof residence.otherSpaceArea === "number") {
      extraValues.push(formatArea(residence.otherSpaceArea) + " biarea");
    }
    if (typeof price.startingLivingSpacePricePerArea === "number") {
      extraValues.push(formatPriceSek(price.startingLivingSpacePricePerArea) + "/m²");
    }
    return {
      source: "notar",
      listingTitle: street,
      streetAddress: street,
      postalCity: nonBlank(listing.city),
      latitude: lat,
      longitude: lon,
      imageUrl: ogImageFromPage(),
      housingForm: nonBlank(residence.buildingType) || nonBlank(listing.type),
      rooms: rooms != null ? rooms + " rum" : null,
      livingArea: formatArea(listing.livingSpaceArea),
      plotArea: formatArea(plotArea),
      askingPrice:
        typeof price.startingPrice === "number" ? formatPriceSek(price.startingPrice) : null,
      extraValues: extraValues,
      agentName: listing.agent ? nonBlank(listing.agent.name) : null,
      agentUrl: null,
      viewing: viewingTextFromViewings(listing.viewings)
    };
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

  function runSingleListing() {
    var listing = normalizeSingleListing(singleListingNode());
    if (!listing || listing.latitude == null || listing.longitude == null) {
      window.alert("Kunde inte läsa annonsdata från sidan.");
      return;
    }
    copyToClipboard(JSON.stringify(buildPayload(listing)));
  }

  // --- Search-results cards (DOM scrape + Photon geocoding) ---

  function leafTexts(el) {
    var out = [];
    var all = el.querySelectorAll("*");
    for (var i = 0; i < all.length; i++) {
      var node = all[i];
      if (node.children.length === 0) {
        var t = nonBlank(node.textContent);
        if (t) {
          var cls = node.className && typeof node.className === "string" ? node.className : "";
          out.push({ cls: cls, text: t });
        }
      }
    }
    return out;
  }

  // Each result card's leaf text nodes carry little to no useful class
  // naming (a custom Vuetify "ObjectCard" component), so fields are
  // classified by shape/pattern rather than by selector - e.g. "1 850 000
  // kr", "3 rok", "64 + 2 kvm", "Tomt 3 475 kvm", "Visning: 18 okt. 11:00".
  // Only the street address (.v-card-title) has a stable class to key off.
  // Overlay badges rendered as unclassed leaf nodes (same as the "Visning:"
  // badge) with no distinguishing class to key off, unlike the "Till salu"/
  // "Kommande" status badge which does carry text-redesignPrimary - matched
  // by known fixed text instead so they don't get mistaken for the
  // location-name leaf.
  var CARD_BADGE_TEXT_PATTERN = /^(besiktigad|budgivning p[åa]g[åa]r)$/i;

  function cardFields(card) {
    var leaves = leafTexts(card);
    var fields = {
      address: null,
      municipality: null,
      locationName: null,
      price: null,
      rooms: null,
      area: null,
      plot: null,
      viewing: null
    };
    for (var i = 0; i < leaves.length; i++) {
      var t = leaves[i].text;
      var cls = leaves[i].cls;
      if (cls.indexOf("v-card-title") !== -1) {
        fields.address = t;
      } else if (/^Visning:/i.test(t)) {
        fields.viewing = t;
      } else if (/kommun$/i.test(t)) {
        fields.municipality = t.replace(/\s*kommun$/i, "");
      } else if (/^[\d\s]+kr$/.test(t)) {
        fields.price = t;
      } else if (/^\d+(\.\d+)?\s*rok$/i.test(t)) {
        fields.rooms = t.replace(/rok/i, "rum");
      } else if (/^tomt\s+[\d\s]+kvm$/i.test(t)) {
        fields.plot = t.replace(/^tomt\s+/i, "").replace(/kvm/i, "m²");
      } else if (/^\d+(\s*\+\s*\d+)?\s*kvm$/i.test(t)) {
        fields.area = t.replace(/kvm/i, "m²");
      } else if (cls.indexOf("text-redesignPrimary") !== -1 || CARD_BADGE_TEXT_PATTERN.test(t)) {
        // status/inspection badge ("Till salu" / "Kommande" / "Besiktigad" /
        // "Budgivning pågår" / ...) - not used
      } else if (!fields.locationName) {
        fields.locationName = t;
      }
    }
    return fields;
  }

  function cardImageUrl(card) {
    var img = card.querySelector(".image-container img");
    return img ? nonBlank(img.getAttribute("src")) : null;
  }

  // Result cards currently render with no <img> at all in .image-container
  // (confirmed live: true for every card on a fresh search page load, even
  // after waiting and scrolling each into view - not a lazy-load timing
  // issue, the site simply isn't putting photos in the card markup right
  // now even though the listings themselves have photos), so always fall
  // back to fetching that listing's own page and reading its og:image meta
  // tag, the same image the single-listing path already uses via
  // ogImageFromPage().
  function ogImageFromHtml(html) {
    var m = /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i.exec(html);
    if (m) return nonBlank(m[1]);
    m = /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i.exec(html);
    return m ? nonBlank(m[1]) : null;
  }

  function fetchCardImageUrl(url) {
    return fetch(url, { credentials: "include" })
      .then(function (resp) {
        return resp.text();
      })
      .then(ogImageFromHtml)
      .catch(function () {
        return null;
      });
  }

  function normalizeSearchCard(card) {
    var href = card.getAttribute("href");
    var id = notarIdFromHref(href);
    if (!id) return null;
    var url = absoluteNotarUrl(href);
    if (!url) return null;
    var f = cardFields(card);
    if (!f.address) return null;
    var extraValues = [];
    if (f.plot) extraValues.push("Tomt " + f.plot);
    return {
      id: id,
      url: url,
      geocodeQuery: [f.address, f.locationName, f.municipality].filter(Boolean).join(", "),
      listing: {
        source: "notar",
        listingTitle: f.address,
        streetAddress: f.address,
        postalCity: f.locationName || f.municipality,
        imageUrl: cardImageUrl(card),
        rooms: f.rooms,
        livingArea: f.area,
        askingPrice: f.price,
        extraValues: extraValues,
        viewing: f.viewing
      }
    };
  }

  function fetchCoordsFromPhoton(query) {
    // No &lang=sv - Photon's public API now only accepts
    // default/de/en/fr and 400s on any other value (confirmed live; this
    // silently broke Widerlöv's geocoding too, see widerlov-bookmarklet.js).
    var url = PHOTON_URL + "?q=" + encodeURIComponent(query) + "&limit=3";
    return fetch(url)
      .then(function (resp) {
        return resp.json();
      })
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
          if (
            coords &&
            coords.length >= 2 &&
            typeof coords[0] === "number" &&
            typeof coords[1] === "number"
          ) {
            return { longitude: coords[0], latitude: coords[1] };
          }
        }
        return null;
      })
      .catch(function () {
        return null;
      });
  }

  function buildSearchResultsPayload(items, sourceUrl) {
    return {
      v: 1,
      type: "placesurfer/hemnet-search-results",
      sourceUrl: sourceUrl,
      page: 1,
      items: items
    };
  }

  function runSearchResults() {
    var cardEls = document.querySelectorAll('a[href*="/kopa-bostad/objekt/"]');
    var seen = {};
    var raw = [];
    for (var i = 0; i < cardEls.length; i++) {
      var normalized = normalizeSearchCard(cardEls[i]);
      if (!normalized || seen[normalized.id]) continue;
      seen[normalized.id] = true;
      raw.push(normalized);
    }
    if (!raw.length) {
      window.alert("Hittade inga bostäder i sökningen.");
      return;
    }
    Promise.all(
      raw.map(function (r) {
        var coordsPromise = fetchCoordsFromPhoton(r.geocodeQuery);
        var imagePromise = r.listing.imageUrl
          ? Promise.resolve(r.listing.imageUrl)
          : fetchCardImageUrl(r.url);
        return Promise.all([coordsPromise, imagePromise]);
      })
    ).then(function (resultList) {
      var items = [];
      for (var i = 0; i < raw.length; i++) {
        var coords = resultList[i][0];
        var imageUrl = resultList[i][1];
        if (!coords) continue;
        var listing = raw[i].listing;
        listing.latitude = coords.latitude;
        listing.longitude = coords.longitude;
        listing.imageUrl = imageUrl;
        items.push({
          v: 1,
          type: "placesurfer/hemnet-listing",
          url: raw[i].url,
          listing: listing
        });
      }
      if (!items.length) {
        window.alert("Kunde inte hitta koordinater för bostäderna i sökningen.");
        return;
      }
      copyToClipboard(
        JSON.stringify(buildSearchResultsPayload(items, window.location.href)),
        items.length + " listings copied"
      );
    });
  }

  function run() {
    if (!/(^|\.)notar\.se$/i.test(window.location.hostname)) {
      window.alert("Öppna en bostad på notar.se och klicka sedan på Kopiera plats(er).");
      return;
    }
    if (SEARCH_RESULTS_PATH_PATTERN.test(window.location.pathname)) {
      runSearchResults();
      return;
    }
    if (SINGLE_LISTING_PATH_PATTERN.test(window.location.pathname)) {
      runSingleListing();
      return;
    }
    window.alert("Hittade ingen annons eller sökning på den här sidan.");
  }

  run();
})();
