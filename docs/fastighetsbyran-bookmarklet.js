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

  function ensureKr(s) {
    var t = nonBlank(s);
    if (!t || !/\d/.test(t)) return t;
    return /kr/i.test(t) ? t : t + " kr";
  }

  function ensureKrPerMan(s) {
    var t = nonBlank(s);
    if (!t) return t;
    return /kr\/m[åa]n/i.test(t) ? t : t + " kr/mån";
  }

  function formatArea(value) {
    var t = nonBlank(value);
    if (!t) return null;
    t = t.replace(/\bm2\b/g, "m²").replace(/\bkvm\b/gi, "m²");
    if (!/m²/.test(t) && parseNumber(t) != null) t = t + " m²";
    return t;
  }

  function ogImageFromPage() {
    var meta = document.querySelector('meta[property="og:image"], meta[name="og:image"]');
    return meta ? nonBlank(meta.getAttribute("content")) : null;
  }

  // Fastighetsbyrån renders a base64-encoded redux state into
  // window.__PRELOADED_STATE__; the listing lives under
  // maeklarObjekt.objektInfo[<objektID>].data.maeklarObjekt.
  // The app deletes the window variable after hydration, but the inline
  // script tag that assigned it stays in the DOM, so fall back to that.
  function preloadedStateFromScriptText() {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var text = scripts[i].textContent || "";
      var match = text.match(/__PRELOADED_STATE__\s*=\s*'([^']+)'/);
      if (match) return match[1];
    }
    return null;
  }

  function decodePreloadedState() {
    var raw = window.__PRELOADED_STATE__;
    if (typeof raw !== "string" || !raw) raw = preloadedStateFromScriptText();
    if (!raw) return null;
    try {
      var bin = window.atob(raw);
      var bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      return JSON.parse(new TextDecoder("utf-8").decode(bytes));
    } catch (e) {
      return null;
    }
  }

  function objektIdFromUrl() {
    var match = window.location.search.match(/[?&]objektID=(\d+)/i);
    return match ? match[1] : null;
  }

  function objektNodeFromState(state) {
    var infos = state && state.maeklarObjekt && state.maeklarObjekt.objektInfo;
    if (!infos || typeof infos !== "object") return null;
    var id = objektIdFromUrl();
    var entry;
    if (id) {
      // The state is from the initial page load; after client-side navigation
      // it can describe another listing, so only trust an exact id match.
      entry = infos[id];
    } else {
      var keys = Object.keys(infos);
      if (keys.length === 1) entry = infos[keys[0]];
    }
    var data = entry && entry.data;
    return (data && data.maeklarObjekt) || null;
  }

  function validCoords(lat, lon) {
    return lat != null && lon != null &&
      lat >= 54 && lat <= 70 && lon >= 4 && lon <= 32;
  }

  function coordsFromKarta(karta) {
    if (!karta || typeof karta !== "object") return null;
    var pairs = [
      [karta.kartbildXKoordinat, karta.kartbildYKoordinat],
      [karta.xKoordinat, karta.yKoordinat]
    ];
    for (var i = 0; i < pairs.length; i++) {
      var lat = parseNumber(pairs[i][0]);
      var lon = parseNumber(pairs[i][1]);
      if (validCoords(lat, lon)) return { latitude: lat, longitude: lon };
      if (validCoords(lon, lat)) return { latitude: lon, longitude: lat };
    }
    return null;
  }

  function cityFromNode(node, basfakta) {
    var kommun = nonBlank(node.kommunNamn);
    if (kommun) return kommun.replace(/\s+kommun$/i, "");
    var zon = nonBlank(basfakta.zon);
    if (zon) {
      var parts = zon.split(",");
      return nonBlank(parts[parts.length - 1]);
    }
    return null;
  }

  function areaFromZon(basfakta, city) {
    var zon = nonBlank(basfakta.zon);
    if (!zon) return null;
    var first = nonBlank(zon.split(",")[0]);
    return first && first !== city ? first : null;
  }

  function agentNameFromNode(node) {
    var kontor = node.kontor;
    if (kontor && nonBlank(kontor.namn)) {
      return "Fastighetsbyrån " + nonBlank(kontor.namn);
    }
    var maeklare = node.maeklare;
    if (maeklare && typeof maeklare === "object") {
      return nonBlank([maeklare.foernamn, maeklare.efternamn]
        .filter(Boolean).join(" "));
    }
    return null;
  }

  function agentUrlFromNode(node) {
    var link = node.kontor && nonBlank(node.kontor.laenkTillKontor);
    if (link && link.indexOf("://") === -1) {
      return window.location.origin + link;
    }
    return link || window.location.origin;
  }

  function listingFromNode(node) {
    if (!node || typeof node !== "object") return null;
    var basfakta = node.basfakta || {};
    var coords = coordsFromKarta(node.karta);
    var city = cityFromNode(node, basfakta);
    return {
      streetAddress: nonBlank(basfakta.gatuadress),
      postalCity: city,
      area: areaFromZon(basfakta, city),
      latitude: coords ? coords.latitude : null,
      longitude: coords ? coords.longitude : null,
      askingPrice: ensureKr(basfakta.pris || basfakta.slutpris),
      rooms: nonBlank(basfakta.antalRum),
      livingArea: formatArea(basfakta.area),
      housingForm: nonBlank(basfakta.bostadsTyp || basfakta.boendeform),
      monthlyFee: ensureKrPerMan(basfakta.avgift),
      constructionYear: parseNumber(basfakta.byggnadsAar),
      imageUrl: (node.bild && nonBlank(node.bild.url)) || ogImageFromPage(),
      agentName: agentNameFromNode(node),
      agentUrl: agentUrlFromNode(node)
    };
  }

  function streetAddressFromPage() {
    var h1 = document.querySelector("h1");
    return h1 ? nonBlank(h1.textContent) : null;
  }

  function buildExtraValues(listing) {
    var extras = [];
    if (listing.monthlyFee) extras.push(listing.monthlyFee);
    if (listing.area) extras.push(listing.area);
    if (listing.constructionYear) extras.push("byggår " + listing.constructionYear);
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
        extraValues: buildExtraValues(listing)
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
    if (!/fastighetsbyran\.(com|se)/i.test(window.location.hostname)) {
      window.alert("Öppna en bostad på fastighetsbyran.com och klicka sedan på Kopiera plats.");
      return;
    }

    var node = objektNodeFromState(decodePreloadedState());
    var listing = listingFromNode(node) || {};
    if (!listing.streetAddress) listing.streetAddress = streetAddressFromPage();
    if (!listing.imageUrl) listing.imageUrl = ogImageFromPage();

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
