goog.provide('placesurfer.clipboard_ui.hemnet.url');
placesurfer.clipboard_ui.hemnet.url.hemnet_listing_pattern = /^https?:\/\/(?:www\.)?hemnet\.se\/bostad\/.+-(\d+)\/?$/;
/**
 * True when `url` looks like a Hemnet property listing page.
 */
placesurfer.clipboard_ui.hemnet.url.valid_hemnet_listing_url_QMARK_ = (function placesurfer$clipboard_ui$hemnet$url$valid_hemnet_listing_url_QMARK_(url){
return cljs.core.boolean$((function (){var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
return cljs.core.re_matches(placesurfer.clipboard_ui.hemnet.url.hemnet_listing_pattern,s);
} else {
return null;
}
})());
});
/**
 * Extract numeric listing id from a Hemnet listing URL.
 */
placesurfer.clipboard_ui.hemnet.url.listing_id_from_url = (function placesurfer$clipboard_ui$hemnet$url$listing_id_from_url(url){
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
var G__40262 = cljs.core.re_matches(placesurfer.clipboard_ui.hemnet.url.hemnet_listing_pattern,s);
if((G__40262 == null)){
return null;
} else {
return cljs.core.second(G__40262);
}
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.url.slug_segment__GT_title_words = (function placesurfer$clipboard_ui$hemnet$url$slug_segment__GT_title_words(segment){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(segment,/-/))));
});
/**
 * Derive estate/listing title from the Hemnet URL slug (fallback when h1 is unavailable).
 */
placesurfer.clipboard_ui.hemnet.url.listing_title_from_url = (function placesurfer$clipboard_ui$hemnet$url$listing_title_from_url(url){
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
var temp__5825__auto____$1 = cljs.core.re_matches(/https?:\/\/(?:www\.)?hemnet\.se\/bostad\/(.+)-(\d+)\/?$/i,s);
if(cljs.core.truth_(temp__5825__auto____$1)){
var vec__40264 = temp__5825__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40264,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40264,(1),null);
var _id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40264,(2),null);
var temp__5825__auto____$2 = cljs.core.re_find(/-kommun-(.+)$/,slug);
if(cljs.core.truth_(temp__5825__auto____$2)){
var vec__40267 = temp__5825__auto____$2;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267,(0),null);
var title_slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267,(1),null);
return cljs.core.not_empty(placesurfer.clipboard_ui.hemnet.url.slug_segment__GT_title_words(title_slug));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.clipboard_ui.hemnet.url.js.map
