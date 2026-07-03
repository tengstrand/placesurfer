(function () {
  "use strict";

  var PHOTON_REVERSE_URL = "https://photon.komoot.io/reverse";

  if (!/hemkartan\.se/i.test(window.location.hostname)) {
    window.alert("Öppna en plats på hemkartan.se och klicka sedan på Kopiera plats.");
    return;
  }

  var params = new URLSearchParams(window.location.search);
  var placeIdStr = params.get("open");
  if (!placeIdStr) {
    window.alert("Välj en plats på kartan (klicka på en markör) och klicka sedan på Kopiera plats.");
    return;
  }
  var placeId = parseInt(placeIdStr, 10);

  var map = null;
  try {
    var vals = Object.values(window);
    for (var i = 0; i < vals.length; i++) {
      var v = vals[i];
      if (v && typeof v === "object" && typeof v.getCenter === "function" &&
          typeof v.queryRenderedFeatures === "function") {
        map = v;
        break;
      }
    }
  } catch (e) {}

  if (!map) {
    window.alert("Kunde inte hitta kartinstansen på sidan.");
    return;
  }

  var longitude = null;
  var latitude = null;
  try {
    var features = map.queryRenderedFeatures({ layers: ["markers"] });
    for (var j = 0; j < features.length; j++) {
      var f = features[j];
      if (f.id === placeId || String(f.id) === String(placeId)) {
        var coords = f.geometry && f.geometry.coordinates;
        if (coords && coords.length >= 2) {
          longitude = coords[0];
          latitude = coords[1];
        }
        break;
      }
    }
  } catch (e) {}

  if (longitude == null || latitude == null) {
    var center = map.getCenter();
    longitude = center.lng;
    latitude = center.lat;
  }

  function nonBlank(s) {
    if (s == null) return null;
    var t = String(s).trim();
    return t || null;
  }

  function extractBgImageUrl(styleStr) {
    if (!styleStr) return null;
    var m = styleStr.match(/url\(['"]?([^'"()]+)['"]?\)/);
    return m ? nonBlank(m[1]) : null;
  }

  function parseDetails(doc) {
    var result = {};
    var detailDivs = doc.querySelectorAll(".details > div");
    for (var i = 0; i < detailDivs.length; i++) {
      var spans = detailDivs[i].querySelectorAll("span");
      if (spans.length >= 2) {
        var label = (spans[0].textContent || "").trim().toLowerCase();
        var value = nonBlank(spans[1].textContent);
        if (label && value) result[label] = value;
      }
    }
    return result;
  }

  function parseHxHousingHtml(html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, "text/html");

    var nameEl = doc.querySelector("#housing-link > div:first-child") ||
                 doc.querySelector("#marker-modal div");
    var name = nameEl ? nonBlank(nameEl.textContent) : null;

    var link = doc.querySelector("#housing-link");
    var agentListingUrl = link ? nonBlank(link.getAttribute("href")) : null;

    var imgEl = doc.querySelector("#housing-link > div:nth-child(2)");
    var imageUrl = imgEl ? extractBgImageUrl(imgEl.getAttribute("style")) : null;

    var details = parseDetails(doc);

    return { name: name, agentListingUrl: agentListingUrl, imageUrl: imageUrl, details: details };
  }

  function reverseGeocode(lon, lat) {
    return fetch(PHOTON_REVERSE_URL + "?lon=" + lon + "&lat=" + lat)
      .then(function (r) { return r.json(); })
      .then(function (body) {
        var features = body && body.features;
        if (!features || !features.length) return null;
        var props = features[0].properties;
        var street = nonBlank(props.street);
        var housenumber = nonBlank(props.housenumber);
        var streetAddress = (street && housenumber) ? (street + " " + housenumber) : street;
        var city = nonBlank(props.city || props.town || props.village || props.county);
        return { streetAddress: streetAddress, postalCity: city };
      })
      .catch(function () { return null; });
  }

  function parseNumber(s) {
    if (!s) return null;
    var n = parseFloat(String(s).trim().replace(/\s/g, "").replace(",", "."));
    return isNaN(n) ? null : n;
  }

  function formatArea(s) {
    if (!s) return null;
    var t = String(s).trim().replace(/\bkvm\b/gi, "m²").replace(/\bm2\b/g, "m²");
    if (!/m²/.test(t)) {
      var n = parseNumber(t);
      if (n != null) return n.toLocaleString("sv-SE") + " m²";
    }
    return t || null;
  }

  function deepSearch(root, keys, depth) {
    if (!root || typeof root !== "object" || depth > 6) return null;
    for (var i = 0; i < keys.length; i++) {
      var v = root[keys[i]];
      if (v != null && v !== "") return v;
    }
    if (Array.isArray(root)) {
      for (var j = 0; j < root.length; j++) {
        var r = deepSearch(root[j], keys, depth + 1);
        if (r != null) return r;
      }
    } else {
      for (var k in root) {
        if (Object.prototype.hasOwnProperty.call(root, k)) {
          var r2 = deepSearch(root[k], keys, depth + 1);
          if (r2 != null) return r2;
        }
      }
    }
    return null;
  }

  function fetchListingPageInfo(url) {
    if (!url) return Promise.resolve(null);
    return fetch(url)
      .then(function (r) { return r.text(); })
      .then(function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");

        var result = {
          agentName: null, agentUrl: null, ogImage: null,
          plotArea: null, housingForm: null, rooms: null, livingArea: null
        };

        // JSON-LD structured data
        var scripts = doc.querySelectorAll('script[type="application/ld+json"]');
        for (var i = 0; i < scripts.length; i++) {
          try {
            var data = JSON.parse(scripts[i].textContent);
            var nodes = Array.isArray(data) ? data : [data];
            for (var k = 0; k < nodes.length; k++) {
              var node = nodes[k];
              if (!node) continue;
              var type = node["@type"] || "";
              if (/RealEstate|Residence|House|Apartment|Product|Offer/i.test(type)) {
                var agent = node.agent || node.seller || node.offeredBy;
                if (agent && typeof agent === "object") {
                  result.agentName = result.agentName || nonBlank(agent.name);
                  result.agentUrl = result.agentUrl || nonBlank(agent.url);
                }
                result.plotArea = result.plotArea ||
                  formatArea(node.lotSize || (node.landArea && node.landArea.value));
              }
              if (/Organization|RealEstateAgent|Person/i.test(type)) {
                result.agentName = result.agentName || nonBlank(node.name);
                result.agentUrl = result.agentUrl || nonBlank(node.url);
              }
            }
          } catch (e) {}
        }

        // __NEXT_DATA__ (Next.js sites)
        var nextScript = doc.getElementById("__NEXT_DATA__");
        if (nextScript) {
          try {
            var nextData = JSON.parse(nextScript.textContent);
            var pageProps = nextData && nextData.props && nextData.props.pageProps;
            if (pageProps) {
              var plotVal = deepSearch(pageProps,
                ["plotArea", "plot_area", "landArea", "land_area",
                 "tomtarea", "tomtyta", "lotSize", "lot_size"], 0);
              result.plotArea = result.plotArea || formatArea(plotVal);

              var brokerName = deepSearch(pageProps, ["brokerFirmName", "agencyName", "broker_name",
                "brokerName", "firmName", "companyName", "agentName", "broker"], 0);
              result.agentName = result.agentName || nonBlank(
                typeof brokerName === "string" ? brokerName :
                (brokerName && (brokerName.name || brokerName.firmName)) || null
              );
            }
          } catch (e) {}
        }

        // DOM: look for labelled property table rows (common on Swedish listing sites)
        var allText = doc.body ? doc.body.innerText || "" : "";
        if (!result.plotArea) {
          var plotMatch = allText.match(/[Tt]omt(?:area|yta|storlek)?[:\s]+(\d[\d\s]*(?:m²|kvm|m2)?)/);
          if (plotMatch) result.plotArea = formatArea(plotMatch[1].trim());
        }

        // og:site_name as agent name fallback
        if (!result.agentName) {
          var siteMeta = doc.querySelector('meta[property="og:site_name"]');
          if (siteMeta) result.agentName = nonBlank(siteMeta.getAttribute("content"));
        }

        // "Läs mer hos"-style links
        if (!result.agentName || !result.agentUrl) {
          var anchors = doc.querySelectorAll("a");
          for (var a = 0; a < anchors.length; a++) {
            var text = (anchors[a].textContent || "").trim();
            var href = anchors[a].href || "";
            if (/l[äa]s mer hos/i.test(text) && href && /^https?:\/\//.test(href)) {
              result.agentName = result.agentName || nonBlank(text.replace(/^l[äa]s mer hos\s*/i, ""));
              result.agentUrl = result.agentUrl || href.split("?")[0];
              break;
            }
          }
        }

        // og:image fallback
        var ogMeta = doc.querySelector('meta[property="og:image"], meta[name="og:image"]');
        if (ogMeta) result.ogImage = nonBlank(ogMeta.getAttribute("content"));

        return result;
      })
      .catch(function () { return null; });
  }

  function mapDetailLabel(label) {
    if (/^(pris|listpris|utg[åa]ngspris|begärt pris)$/.test(label)) return "askingPrice";
    if (/^(bostadstyp|typ|objekttyp|fastighetstyp|bostads[äa]rende|kategori)$/.test(label)) return "housingForm";
    if (/^(rum|antal rum|sovrum)$/.test(label)) return "rooms";
    if (/^(boarea|bostadsyta|boyta|bostadsstorlek|bo[- ]?yta)$/.test(label)) return "livingArea";
    if (/^(tomtarea|tomtyta|tomt[- ]?yta|tomt)$/.test(label)) return "plotArea";
    return null;
  }

  function formatRooms(value) {
    if (!value) return null;
    var s = String(value).trim();
    if (/rum/i.test(s)) return s;
    if (/^\d+(?:[.,]\d+)?$/.test(s)) return s + " rum";
    return s;
  }

  function housingFormFromUrl(url) {
    if (!url) return null;
    var m = url.match(/\/(villa|bostadsr[äa]tt|radhus|fritidsboende|tomt|l[äa]genhet|kedjehus|parhus|g[åa]rd)\//i);
    if (!m) return null;
    var t = m[1].toLowerCase()
      .replace("bostadsratt", "bostadsrätt")
      .replace("lagenhet", "lägenhet")
      .replace("gard", "gård");
    return t.charAt(0).toUpperCase() + t.slice(1);
  }

  function formatPrice(value) {
    if (!value) return null;
    var s = String(value).trim();
    if (/kr/.test(s)) return s;
    return s + " kr";
  }

  function showCopiedToast() {
    var host = document.createElement("div");
    host.style.cssText =
      "position:fixed;top:24px;left:50%;transform:translateX(-50%);" +
      "z-index:2147483647;pointer-events:none;";
    var shadow = host.attachShadow({ mode: "open" });
    var style = document.createElement("style");
    style.textContent =
      "div{display:inline-block;padding:8px 16px;" +
      "background:#166534;color:#fff;border-radius:6px;" +
      "font:600 14px system-ui,sans-serif;white-space:nowrap;}";
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

  fetch("/karta/hx-housing/" + placeIdStr + "/")
    .then(function (resp) { return resp.text(); })
    .then(function (html) {
      var parsed = parseHxHousingHtml(html);
      if (!parsed.name) {
        window.alert("Kunde inte läsa platsens namn.");
        return;
      }

      var listingFields = {};
      var details = parsed.details || {};
      for (var label in details) {
        if (Object.prototype.hasOwnProperty.call(details, label)) {
          var field = mapDetailLabel(label);
          if (field) listingFields[field] = details[label];
        }
      }

      var askingPrice = formatPrice(listingFields.askingPrice);

      Promise.all([
        reverseGeocode(longitude, latitude),
        fetchListingPageInfo(parsed.agentListingUrl)
      ]).then(function (results) {
        var geo = results[0];
        var listingInfo = results[1];

        var postalCity = geo ? geo.postalCity : null;

        var imageUrl = parsed.imageUrl ||
                       (listingInfo && listingInfo.ogImage) ||
                       null;

        var agentUrl = (listingInfo && listingInfo.agentUrl) ||
                       parsed.agentListingUrl ||
                       null;
        var agentName = (listingInfo && listingInfo.agentName) || null;

        var listing = {
          streetAddress: parsed.name,
          postalCity: postalCity,
          latitude: latitude,
          longitude: longitude,
          imageUrl: imageUrl,
          askingPrice: askingPrice,
          housingForm: listingFields.housingForm ||
                       (listingInfo && listingInfo.housingForm) ||
                       housingFormFromUrl(parsed.agentListingUrl) || null,
          rooms: formatRooms(listingFields.rooms || (listingInfo && listingInfo.rooms)),
          livingArea: listingFields.livingArea || (listingInfo && listingInfo.livingArea) || null,
          plotArea: listingFields.plotArea || (listingInfo && listingInfo.plotArea) || null,
          agentUrl: agentUrl,
          agentName: agentName
        };

        var payload = {
          v: 1,
          type: "placesurfer/hemnet-listing",
          url: window.location.href,
          listing: listing
        };

        copyToClipboard(JSON.stringify(payload));
      });
    })
    .catch(function (e) {
      window.alert("Fel vid hämtning av platsdata: " + e.message);
    });
})();
