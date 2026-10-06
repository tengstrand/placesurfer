goog.provide('placesurfer.clipboard_ui.hemnet.search_results');
/**
 * Try each known site's URL id pattern in turn - Hemnet's bare numeric id is
 * kept unprefixed for backward compatibility with already-stored results;
 * Booli's and Notar's are namespaced (see booli.url/notar.url) so none of
 * them can ever collide.
 */
placesurfer.clipboard_ui.hemnet.search_results.listing_id_from_url = (function placesurfer$clipboard_ui$hemnet$search_results$listing_id_from_url(url){
var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.url.listing_id_from_url(url);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.clipboard_ui.booli.url.listing_id_from_url(url);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return placesurfer.clipboard_ui.notar.url.listing_id_from_url(url);
}
}
});
placesurfer.clipboard_ui.hemnet.search_results.item__GT_result = (function placesurfer$clipboard_ui$hemnet$search_results$item__GT_result(item,locale){
var temp__5823__auto__ = placesurfer.clipboard_ui.hemnet.payload.payload__GT_listing(item);
if(cljs.core.truth_(temp__5823__auto__)){
var listing = temp__5823__auto__;
if(placesurfer.clipboard_ui.hemnet.listing.listing_has_coords_QMARK_(listing)){
var source_url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item);
var id = placesurfer.clipboard_ui.hemnet.search_results.listing_id_from_url(source_url);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(placesurfer.clipboard_ui.hemnet.form.listing__GT_pin_form.cljs$core$IFn$_invoke$arity$3(listing,source_url,placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locale,new cljs.core.Keyword("common","plot","common/plot",-811602436)], 0))),new cljs.core.Keyword(null,"id","id",-1388402092),id);
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
/**
 * Normalize a hemnet-search-results payload's :items into a vector of
 * pin-form-shaped maps (each tagged with :id), skipping items without a
 * resolvable listing id or coordinates.
 */
placesurfer.clipboard_ui.hemnet.search_results.payload__GT_results = (function placesurfer$clipboard_ui$hemnet$search_results$payload__GT_results(payload,locale){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__26110_SHARP_){
return placesurfer.clipboard_ui.hemnet.search_results.item__GT_result(p1__26110_SHARP_,locale);
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$2(payload,cljs.core.PersistentVector.EMPTY)));
});

//# sourceMappingURL=placesurfer.clipboard_ui.hemnet.search_results.js.map
