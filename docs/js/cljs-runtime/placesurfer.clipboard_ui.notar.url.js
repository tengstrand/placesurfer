goog.provide('placesurfer.clipboard_ui.notar.url');
placesurfer.clipboard_ui.notar.url.notar_listing_pattern = /^https?:\/\/(?:www\.)?notar\.se\/kopa-bostad\/objekt\/([A-Za-z0-9]+)\/?$/;
/**
 * True when `url` looks like a Notar property listing page.
 */
placesurfer.clipboard_ui.notar.url.valid_notar_listing_url_QMARK_ = (function placesurfer$clipboard_ui$notar$url$valid_notar_listing_url_QMARK_(url){
return cljs.core.boolean$((function (){var temp__5823__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)));
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
return cljs.core.re_matches(placesurfer.clipboard_ui.notar.url.notar_listing_pattern,s);
} else {
return null;
}
})());
});
/**
 * Extract a namespaced listing id ("notar:<id>") from a Notar listing URL.
 */
placesurfer.clipboard_ui.notar.url.listing_id_from_url = (function placesurfer$clipboard_ui$notar$url$listing_id_from_url(url){
var temp__5823__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)));
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
var G__26003 = cljs.core.re_matches(placesurfer.clipboard_ui.notar.url.notar_listing_pattern,s);
var G__26003__$1 = (((G__26003 == null))?null:cljs.core.second(G__26003));
if((G__26003__$1 == null)){
return null;
} else {
return ["notar:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26003__$1)].join('');
}
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.clipboard_ui.notar.url.js.map
