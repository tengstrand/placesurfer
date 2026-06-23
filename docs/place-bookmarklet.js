(function () {
  "use strict";

  function scriptBase() {
    var script = document.currentScript;
    if (script && script.src) {
      return script.src.replace(/\/[^/]+$/, "");
    }
    var scripts = document.getElementsByTagName("script");
    for (var i = scripts.length - 1; i >= 0; i--) {
      var src = scripts[i].src;
      if (src && /place-bookmarklet\.js/.test(src)) {
        return src.replace(/\/[^/]+$/, "");
      }
    }
    return "";
  }

  function loadImplementation(name) {
    var base = scriptBase();
    if (!base) {
      window.alert("Could not resolve bookmarklet base URL.");
      return;
    }
    var s = document.createElement("script");
    s.src = base + "/" + name;
    document.body.appendChild(s);
  }

  var href = window.location.href;
  if (/google\.com\/maps/.test(href)) {
    loadImplementation("google-maps-bookmarklet.js");
    return;
  }
  if (/hemnet\.se/i.test(href)) {
    loadImplementation("hemnet-bookmarklet.js");
    return;
  }
  window.alert(
    "Open a listing on Hemnet or a place on Google Maps, then click Copy place."
  );
})();
