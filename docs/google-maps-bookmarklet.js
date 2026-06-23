(function () {
  "use strict";

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

  function tryRegex(pattern, s) {
    var match = s.match(pattern);
    if (!match) return null;
    return match.slice(1);
  }

  function extractLatLon(url) {
    var precise = tryRegex(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/, url);
    if (precise) {
      return {
        latitude: parseNumber(precise[0]),
        longitude: parseNumber(precise[1])
      };
    }
    var at = tryRegex(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/, url);
    if (at) {
      return {
        latitude: parseNumber(at[0]),
        longitude: parseNumber(at[1])
      };
    }
    return null;
  }

  function decodeName(raw) {
    if (!raw) return null;
    try {
      return nonBlank(decodeURIComponent(raw.replace(/\+/g, " ")));
    } catch (error) {
      return nonBlank(raw);
    }
  }

  function extractPlaceSlug(url) {
    var fromMaps = tryRegex(/\/maps\/place\/([^/?]+)/, url);
    if (fromMaps) return decodeName(fromMaps[0]);
    var fromPlace = tryRegex(/\/place\/([^/?]+)/, url);
    if (fromPlace) return decodeName(fromPlace[0]);
    return null;
  }

  function looksLikeAddress(text) {
    if (!text) return false;
    return /,/.test(text) || /\d{3}\s?\d{2}\b/.test(text);
  }

  function extractName(url) {
    return extractPlaceSlug(url);
  }

  function showCopiedToast() {
    var host = document.createElement("div");
    host.style.cssText =
      "all:initial;position:fixed;top:24px;left:50%;transform:translateX(-50%);z-index:2147483647;";
    var shadow = host.attachShadow({ mode: "open" });
    var el = document.createElement("div");
    el.textContent = "Copied";
    el.style.cssText =
      "font:600 14px/1.2 system-ui,sans-serif;color:#fff;background:#166534;padding:10px 16px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.2);";
    shadow.appendChild(el);
    document.body.appendChild(host);
    window.setTimeout(function () {
      if (host.parentNode) host.parentNode.removeChild(host);
    }, 1000);
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () {
        showCopiedToast();
      });
    }
    window.prompt("Copy this text:", text);
    return Promise.resolve();
  }

  function buildPayload(slug, coords, url) {
    var address = looksLikeAddress(slug) ? slug : null;
    var item = {
      v: 1,
      type: "placesurfer/place",
      source: "google-maps",
      url: url,
      place: {
        name: slug || "Google Maps place",
        address: address,
        latitude: coords.latitude,
        longitude: coords.longitude
      }
    };
    return {v: 1, type: "placesurfer/pin-list", pins: [item]};
  }

  function run() {
    var href = window.location.href;
    if (!/google\.com\/maps/.test(href)) {
      window.alert("Open a place on Google Maps first.");
      return;
    }
    var coords = extractLatLon(href);
    if (!coords || coords.latitude == null || coords.longitude == null) {
      window.alert("Could not extract coordinates from this Google Maps page.");
      return;
    }
    var slug = extractPlaceSlug(href);
    copyToClipboard(JSON.stringify(buildPayload(slug, coords, href)));
  }

  run();
})();
