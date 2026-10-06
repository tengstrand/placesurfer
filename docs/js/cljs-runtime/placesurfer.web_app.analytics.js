goog.provide('placesurfer.web_app.analytics');
placesurfer.web_app.analytics.track_page_BANG_ = (function placesurfer$web_app$analytics$track_page_BANG_(page){
try{var temp__5823__auto__ = window.gtag;
if(cljs.core.truth_(temp__5823__auto__)){
var gtag = temp__5823__auto__;
return gtag.call(window,"event","page_view",({"page_path": ["/",cljs.core.name(page)].join(''), "page_title": cljs.core.name(page)}));
} else {
return null;
}
}catch (e26309){var _ = e26309;
return null;
}});

//# sourceMappingURL=placesurfer.web_app.analytics.js.map
