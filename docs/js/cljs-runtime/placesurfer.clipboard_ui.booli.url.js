goog.provide('placesurfer.clipboard_ui.booli.url');
placesurfer.clipboard_ui.booli.url.booli_listing_pattern = /^https?:\/\/(?:www\.)?booli\.se\/bostad\/(\d+)\/?$/;
/**
 * True when `url` looks like a Booli property listing page.
 */
placesurfer.clipboard_ui.booli.url.valid_booli_listing_url_QMARK_ = (function placesurfer$clipboard_ui$booli$url$valid_booli_listing_url_QMARK_(url){
return cljs.core.boolean$((function (){var temp__5823__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)));
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
return cljs.core.re_matches(placesurfer.clipboard_ui.booli.url.booli_listing_pattern,s);
} else {
return null;
}
})());
});
/**
 * Extract a namespaced listing id ("booli:<id>") from a Booli listing URL.
 */
placesurfer.clipboard_ui.booli.url.listing_id_from_url = (function placesurfer$clipboard_ui$booli$url$listing_id_from_url(url){
var temp__5823__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)));
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
var G__26000 = cljs.core.re_matches(placesurfer.clipboard_ui.booli.url.booli_listing_pattern,s);
var G__26000__$1 = (((G__26000 == null))?null:cljs.core.second(G__26000));
if((G__26000__$1 == null)){
return null;
} else {
return ["booli:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26000__$1)].join('');
}
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.clipboard_ui.booli.url.js.map
