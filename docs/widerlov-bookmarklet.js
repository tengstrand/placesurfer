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
      var n = parseFloat(value.trim().replace(/\s/g, "").replace(",", "."));
      return isNaN(n) ? null : n;
    }
    return null;
  }

  function formatPrice(amount) {
    var n = parseNumber(amount);
    if (n == null) return nonBlank(amount);
    return n.toLocaleString("sv-SE") + " kr";
  }

  function formatArea(value) {
    if (value == null) return null;
    var n = parseNumber(value);
    if (n != null && !/m²|m2|kvm/i.test(String(value))) {
      return n.toLocaleString("sv-SE") + " m²";
    }
    return nonBlank(String(value).replace(/\bm2\b/g, "m²").replace(/\bkvm\b/gi, "m²"));
  }

  function ensureKrPerMan(s) {
    if (!s) return s;
    return /kr\/m[åa]n/i.test(s) ? s : s + " kr/mån";
  }

  var HOME_TYPES = {
    housingcooperative: "Bostadsrätt",
    apartment: "Lägenhet",
    house: "Villa",
    villa: "Villa",
    rowhouse: "Radhus",
    terracedhouse: "Radhus",
    chainhouse: "Kedjehus",
    twinhouse: "Parhus",
    cottage: "Fritidshus",
    vacationhome: "Fritidshus",
    plot: "Tomt",
    farm: "Gård"
  };

  function housingFormFromHomeType(value) {
    var key = nonBlank(value);
    if (!key) return null;
    return HOME_TYPES[key.toLowerCase()] || key;
  }

  function ogImageFromPage() {
    var meta = document.querySelector('meta[property="og:image"], meta[name="og:image"]');
    return meta ? nonBlank(meta.getAttribute("content")) : null;
  }

  // Widerlöv pushes listing facts to the GTM dataLayer in a script that may be
  // lazy-loaded (type="rocketlazyloadscript"), so read window.dataLayer when it
  // has run and fall back to parsing the script text when it has not.
  function entryLooksLikeListing(entry) {
    return entry && typeof entry === "object" &&
      (entry.latitude != null || entry.listing_price != null || entry.city != null);
  }

  function dataLayerFromWindow() {
    var layer = window.dataLayer;
    if (!layer || !layer.length) return null;
    for (var i = layer.length - 1; i >= 0; i--) {
      if (entryLooksLikeListing(layer[i])) return layer[i];
    }
    return null;
  }

  function dataLayerFromScriptText() {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var text = scripts[i].textContent || "";
      if (text.indexOf("dataLayer.push") === -1 || text.indexOf("latitude") === -1) {
        continue;
      }
      var entry = {};
      var re = /['"]([a-zA-Z_]+)['"]\s*:\s*['"]([^'"]*)['"]/g;
      var match;
      while ((match = re.exec(text))) {
        entry[match[1]] = match[2];
      }
      if (entryLooksLikeListing(entry)) return entry;
    }
    return null;
  }

  function listingFromDataLayer() {
    var entry = dataLayerFromWindow() || dataLayerFromScriptText();
    if (!entry) return null;
    var rooms = parseNumber(entry.rooms);
    return {
      postalCity: nonBlank(entry.city),
      area: nonBlank(entry.area),
      latitude: parseNumber(entry.latitude),
      longitude: parseNumber(entry.longitude),
      askingPrice: entry.listing_price != null ? formatPrice(entry.listing_price) : null,
      rooms: rooms != null ? rooms + " rum" : nonBlank(entry.rooms),
      livingArea: entry.square_meters != null ? formatArea(entry.square_meters) : null,
      housingForm: housingFormFromHomeType(entry.home_type),
      agentName: nonBlank(entry.office_name) || nonBlank(entry.agent)
    };
  }

  function streetAddressFromPage() {
    var h1 = document.querySelector("h1");
    return h1 ? nonBlank(h1.textContent) : null;
  }

  // Facts are rendered as .item-container blocks with a bold label span
  // ("Månadsavgift", "Våning", ...) followed by a value span.
  function factFromPage(label) {
    var labels = document.querySelectorAll(".item-container .block.font-bold, .item-container span.font-bold");
    for (var i = 0; i < labels.length; i++) {
      var text = nonBlank(labels[i].textContent);
      if (!text || text.toLowerCase().indexOf(label) === -1) continue;
      var container = labels[i].closest(".item-container");
      if (!container) continue;
      var spans = container.querySelectorAll("span");
      for (var j = 0; j < spans.length; j++) {
        var value = nonBlank(spans[j].textContent);
        if (value && value !== text && !spans[j].hasAttribute("data-tippy-content")) {
          return value;
        }
      }
    }
    return null;
  }

  function buildExtraValues(listing, monthlyFee) {
    var extras = [];
    if (monthlyFee) extras.push(ensureKrPerMan(monthlyFee));
    if (listing.area && listing.postalCity && listing.area !== listing.postalCity) {
      extras.push(listing.area);
    }
    var year = factFromPage("byggår");
    if (year) {
      var yearMatch = year.match(/\d{4}/);
      if (yearMatch) extras.push("byggår " + yearMatch[0]);
    }
    return extras;
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
      if (host.parentNode) {
        host.parentNode.removeChild(host);
      }
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
      listing: {
        streetAddress: listing.streetAddress,
        postalCity: listing.postalCity,
        askingPrice: listing.askingPrice,
        livingArea: listing.livingArea,
        rooms: listing.rooms,
        housingForm: listing.housingForm,
        latitude: listing.latitude,
        longitude: listing.longitude,
        imageUrl: listing.imageUrl,
        agentName: listing.agentName,
        agentUrl: listing.agentUrl,
        extraValues: listing.extraValues
      }
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
          if (coords && coords.length >= 2 &&
              typeof coords[0] === "number" && typeof coords[1] === "number") {
            return { longitude: coords[0], latitude: coords[1] };
          }
        }
        return null;
      })
      .catch(function () { return null; });
  }

  function geocodeAndFinish(listing, finish) {
    var hasCoords = listing.latitude != null && listing.longitude != null;
    if (!hasCoords && nonBlank(listing.streetAddress)) {
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
    if (!/widerlov\.se/i.test(window.location.hostname)) {
      window.alert("Öppna en bostad på widerlov.se och klicka sedan på Kopiera plats.");
      return;
    }

    var listing = listingFromDataLayer() || {};
    listing.streetAddress = streetAddressFromPage();
    listing.imageUrl = ogImageFromPage();
    listing.agentUrl = window.location.origin;
    var monthlyFee = factFromPage("månadsavgift") || factFromPage("avgift");
    listing.extraValues = buildExtraValues(listing, monthlyFee);

    if (!listing.streetAddress && listing.latitude == null) {
      window.alert("Kunde inte läsa annonsdata från sidan.");
      return;
    }

    geocodeAndFinish(listing, function (result) {
      if (result.latitude == null || result.longitude == null) {
        window.alert("Kunde inte extrahera koordinater eller adress från annonsen.");
        return;
      }
      copyToClipboard(JSON.stringify(buildPayload(result)));
    });
  }

  run();
})();
