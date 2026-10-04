(function () {
  "use strict";

  // Booli.se is a Next.js app-router site - unlike Hemnet's __NEXT_DATA__
  // (pages-router), its data is embedded two different ways depending on
  // page type:
  //  - Search-results pages hydrate Apollo Client from a dedicated
  //    "(window[Symbol.for('ApolloSSRDataTransport')] ??= []).push({...})"
  //    <script> - a single JS object literal holding the full query cache.
  //  - Single-listing pages only carry the listing inside the React Server
  //    Components "self.__next_f.push([id, \"...\"])" flight payload, which
  //    has no single clean JSON blob - we locate the listing object inside
  //    the concatenated flight text by anchoring on its GraphQL
  //    __typename and scanning outward for its enclosing {...} object.
  var SEARCH_RESULTS_PATH_PATTERN = /^\/sok\/[^/]+\/?$/;
  var APOLLO_SSR_PREFIX =
    '(window[Symbol.for("ApolloSSRDataTransport")] ??= []).push(';
  var IMAGE_URL_PREFIX = "https://bcdn.se/images/cache/";
  var IMAGE_URL_SUFFIX = "_768x0.webp";

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

  function priceText(v) {
    if (v == null) return null;
    if (typeof v === "number") return formatPriceSek(v);
    if (typeof v === "object") {
      return nonBlank(v.formatted) || formatPriceSek(v.raw);
    }
    if (typeof v === "string") {
      // Booli's search cards use this literal placeholder for listings
      // without a published price yet - treat it as "no price" rather
      // than copying the placeholder text itself into the pin.
      if (/ej angivet/i.test(v)) return null;
      return nonBlank(v);
    }
    return null;
  }

  function formattedValue(v) {
    if (v == null) return null;
    if (typeof v === "string") return nonBlank(v);
    if (typeof v === "number") return String(v);
    if (typeof v === "object") {
      // Most of these FormattedValue-shaped fields carry a ready-made
      // "formatted" string, but plotArea only has {value, unit} - fall
      // back to joining those when "formatted" is missing.
      return (
        nonBlank(v.formatted) ||
        (nonBlank(v.value) && nonBlank(v.unit) && v.value + " " + v.unit) ||
        nonBlank(v.value)
      );
    }
    return null;
  }

  function imageUrlFromId(id) {
    return id ? IMAGE_URL_PREFIX + id + IMAGE_URL_SUFFIX : null;
  }

  function absoluteBooliUrl(url) {
    var u = nonBlank(url);
    if (!u) return null;
    return /^https?:\/\//i.test(u) ? u : "https://www.booli.se" + u;
  }

  function showCopiedToast(message) {
    var host = document.createElement("div");
    host.style.cssText =
      "position:fixed;top:24px;left:50%;transform:translateX(-50%);" +
      "z-index:2147483647;pointer-events:none;margin:0;padding:0;border:none;" +
      "background:transparent;width:auto;height:auto;max-width:none;max-height:none;";
    var shadow = host.attachShadow({mode: "open"});
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

  // --- Apollo SSR transport (search-results pages) ---

  function apolloSsrData() {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var text = scripts[i].textContent || "";
      if (text.indexOf(APOLLO_SSR_PREFIX) === 0) {
        var body = text.slice(APOLLO_SSR_PREFIX.length).replace(/\);?\s*$/, "");
        try {
          return new Function("return (" + body + ")")();
        } catch (error) {
          return null;
        }
      }
    }
    return null;
  }

  function findListableProperties(node, depth) {
    if (depth > 14 || node == null || typeof node !== "object") return null;
    if (Array.isArray(node)) {
      if (node.length && node[0] && node[0].__typename === "ListableProperty") {
        return node;
      }
      for (var i = 0; i < node.length; i++) {
        var found = findListableProperties(node[i], depth + 1);
        if (found) return found;
      }
      return null;
    }
    for (var key in node) {
      if (!Object.prototype.hasOwnProperty.call(node, key)) continue;
      var found2 = findListableProperties(node[key], depth + 1);
      if (found2) return found2;
    }
    return null;
  }

  function dataPointTexts(dataPoints, skipKeys) {
    var texts = [];
    if (!dataPoints) return texts;
    for (var i = 0; i < dataPoints.length; i++) {
      var dp = dataPoints[i];
      if (!dp || (skipKeys && skipKeys.indexOf(dp.key) !== -1)) continue;
      var text = dp.value && (dp.value.plainText || dp.value.markdown);
      if (text) texts.push(nonBlank(text));
    }
    return texts;
  }

  // Single-listing dataPoints repeat rooms/livingArea/plotArea, which
  // normalizeSingleListing already reads from their own dedicated fields -
  // skip those keys here so the description doesn't show each one twice.
  var SINGLE_LISTING_DEDICATED_DATA_POINT_KEYS = ["livingArea", "rooms", "plotArea"];

  // Booli's listing objects (single-listing flight payload, and - when
  // present - search-result items) carry a showingsV2 array of
  // PropertyShowing entries with ready-made Swedish displayDate/displayTime
  // strings - no date math needed, unlike Hemnet/Notar's raw timestamps.
  function viewingTextFromShowings(node) {
    var showings = node && node.showingsV2;
    if (!showings || !showings.length) return null;
    var parts = [];
    for (var i = 0; i < showings.length && i < 3; i++) {
      var s = showings[i];
      if (!s) continue;
      var date = nonBlank(s.displayDate);
      var time = nonBlank(s.displayTime);
      var text = date && time ? date + " " + time : date || time;
      if (text) parts.push(text);
    }
    return parts.length ? "Visning: " + parts.join(", ") : null;
  }

  function subtitleToPostalCity(subtitle, objectType) {
    var s = nonBlank(subtitle);
    if (!s) return null;
    var parts = s.split("·").map(function (p) { return p.trim(); }).filter(Boolean);
    if (parts.length && objectType && parts[0] === objectType) parts.shift();
    return parts.length ? parts.join(", ") : null;
  }

  function normalizeSearchResultItem(item) {
    if (!item || typeof item !== "object") return null;
    var pos = item.position || {};
    var lat = typeof pos.latitude === "number" ? pos.latitude : null;
    var lon = typeof pos.longitude === "number" ? pos.longitude : null;
    var street = nonBlank(item.title);
    if (!street || lat == null || lon == null) return null;
    var url = absoluteBooliUrl(item.url);
    if (!url) return null;
    var images = item.images || [];
    var dataPoints = item.displayAttributes && item.displayAttributes.dataPoints;
    return {
      v: 1,
      type: "placesurfer/hemnet-listing",
      url: url,
      listing: {
        source: "booli",
        listingTitle: street,
        streetAddress: street,
        postalCity: subtitleToPostalCity(item.subtitle, item.objectType),
        latitude: lat,
        longitude: lon,
        imageUrl: imageUrlFromId(images.length ? images[0].id : null),
        housingForm: nonBlank(item.objectType),
        extraValues: dataPointTexts(dataPoints),
        askingPrice: priceText(item.displayPrice),
        viewing: viewingTextFromShowings(item)
      }
    };
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
    var data = apolloSsrData();
    if (!data) {
      window.alert("Kunde inte läsa Booli-data. Vänta tills sidan laddat klart och försök igen.");
      return;
    }
    var properties = findListableProperties(data.rehydrate || data, 0);
    if (!properties || !properties.length) {
      window.alert("Hittade inga bostäder i sökningen.");
      return;
    }
    var items = [];
    for (var i = 0; i < properties.length; i++) {
      var normalized = normalizeSearchResultItem(properties[i]);
      if (normalized) items.push(normalized);
    }
    if (!items.length) {
      window.alert("Hittade inga bostäder med koordinater i sökningen.");
      return;
    }
    copyToClipboard(
      JSON.stringify(buildSearchResultsPayload(items, window.location.href)),
      items.length + " listings copied"
    );
  }

  // --- React Server Component flight payload (single-listing pages) ---

  function nextFlightText() {
    var chunks = [];
    var fakeSelf = {
      __next_f: {
        push: function (chunk) { chunks.push(chunk); }
      }
    };
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var text = scripts[i].textContent || "";
      if (text.indexOf("self.__next_f.push(") === 0) {
        try {
          new Function("self", text)(fakeSelf);
        } catch (error) {
          // ignore unparsable chunks
        }
      }
    }
    var parts = [];
    for (var j = 0; j < chunks.length; j++) {
      if (chunks[j] && chunks[j].length > 1) parts.push(chunks[j][1]);
    }
    return parts.join("");
  }

  // Finds the {...} object enclosing `anchorIndex`, by making a single
  // forward pass over the WHOLE text from its start (where we know for
  // certain we begin outside any string) and keeping a stack of currently-
  // open brace positions plus proper string/escape tracking throughout.
  // The previous approach - scanning backward from the anchor for the
  // nearest "{" - looked correct but wasn't: walking backward with no
  // established string context can land inside a string literal (this
  // text embeds an already-escaped nested JSON-LD blob earlier on, whose
  // quotes don't line up with the outer structure), silently desyncing the
  // forward re-scan from that wrong starting point and returning a
  // plausible-looking but wrong (or unparsable) range.
  function findEnclosingObjectRange(text, anchorIndex) {
    var stack = [];
    var inStr = false;
    var esc = false;
    for (var i = 0; i <= anchorIndex && i < text.length; i++) {
      var c = text.charAt(i);
      if (inStr) {
        if (esc) {
          esc = false;
        } else if (c === "\\") {
          esc = true;
        } else if (c === '"') {
          inStr = false;
        }
        continue;
      }
      if (c === '"') {
        inStr = true;
        continue;
      }
      if (c === "{") stack.push(i);
      else if (c === "}") stack.pop();
    }
    if (!stack.length) return null;
    var start = stack[stack.length - 1];
    var depth = 0;
    inStr = false;
    esc = false;
    for (var j = start; j < text.length; j++) {
      var cj = text.charAt(j);
      if (inStr) {
        if (esc) {
          esc = false;
        } else if (cj === "\\") {
          esc = true;
        } else if (cj === '"') {
          inStr = false;
        }
        continue;
      }
      if (cj === '"') {
        inStr = true;
        continue;
      }
      if (cj === "{") {
        depth++;
      } else if (cj === "}") {
        depth--;
        if (depth === 0) return [start, j];
      }
    }
    return null;
  }

  function singleListingNode() {
    var text = nextFlightText();
    // Anchored on the GraphQL __typename rather than a plain field name
    // like "latitude" - schema.org JSON-LD blocks elsewhere on the page
    // never contain __typename, so this can't accidentally match a
    // smaller, unrelated nested object that also happens to parse fine.
    var idx = text.indexOf('"__typename":"Listing"');
    if (idx === -1) return null;
    var range = findEnclosingObjectRange(text, idx);
    if (!range) return null;
    try {
      return JSON.parse(text.slice(range[0], range[1] + 1));
    } catch (error) {
      return null;
    }
  }

  function normalizeSingleListing(node) {
    if (!node || typeof node !== "object") return null;
    var lat = typeof node.latitude === "number" ? node.latitude : null;
    var lon = typeof node.longitude === "number" ? node.longitude : null;
    var street = nonBlank(node.streetAddress);
    if (!street && (lat == null || lon == null)) return null;
    var images = node.images || [];
    var dataPoints = node.displayAttributes && node.displayAttributes.dataPoints;
    return {
      source: "booli",
      listingTitle: street,
      streetAddress: street,
      postalCity: nonBlank(node.descriptiveAreaName),
      latitude: lat,
      longitude: lon,
      imageUrl: imageUrlFromId(images.length ? images[0].id : null),
      housingForm: nonBlank(node.objectType || node.propertyType),
      rooms: formattedValue(node.rooms),
      livingArea: formattedValue(node.livingArea),
      plotArea: formattedValue(node.plotArea),
      askingPrice: priceText(node.listPrice),
      constructionYear: node.constructionYear || null,
      extraValues: dataPointTexts(dataPoints, SINGLE_LISTING_DEDICATED_DATA_POINT_KEYS),
      agentName: node.agency ? nonBlank(node.agency.name) : null,
      agentUrl: null,
      viewing: viewingTextFromShowings(node)
    };
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

  function runSingleListing() {
    var listing = normalizeSingleListing(singleListingNode());
    if (!listing || listing.latitude == null || listing.longitude == null) {
      window.alert("Kunde inte läsa annonsdata från sidan.");
      return;
    }
    copyToClipboard(JSON.stringify(buildPayload(listing)));
  }

  function run() {
    if (SEARCH_RESULTS_PATH_PATTERN.test(window.location.pathname)) {
      runSearchResults();
      return;
    }
    runSingleListing();
  }

  run();
})();
