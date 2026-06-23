goog.provide('hitteri.clipboard_ui.handlers.hemnet');
hitteri.clipboard_ui.handlers.hemnet.trimmed_text = (function hitteri$clipboard_ui$handlers$hemnet$trimmed_text(text){
return hitteri.clipboard_ui.pure.browser.trimmed_text(text);
});
hitteri.clipboard_ui.handlers.hemnet.guess_coords_from_address_BANG_ = (function hitteri$clipboard_ui$handlers$hemnet$guess_coords_from_address_BANG_(address,then_BANG_){
var trimmed = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(address));
if(clojure.string.blank_QMARK_(trimmed)){
return (then_BANG_.cljs$core$IFn$_invoke$arity$1 ? then_BANG_.cljs$core$IFn$_invoke$arity$1(null) : then_BANG_.call(null,null));
} else {
var s = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
var countries = new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY);
var country_slug = new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$2(s,"sweden");
var country_iso = new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117).cljs$core$IFn$_invoke$arity$2(s,"SE");
return fetch(hitteri.pin_ui.interface$.photon.build_search_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([trimmed,(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"countries","countries",863192750),countries,new cljs.core.Keyword(null,"country-slug","country-slug",769681844),country_slug], null)], 0))).then((function (p1__43712_SHARP_){
return p1__43712_SHARP_.json();
})).then((function (body){
return cljs.core.first(hitteri.pin_ui.interface$.photon.filter_results_for_country.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hitteri.pin_ui.interface$.photon.parse_response(body),country_iso,countries,country_slug], 0)));
})).catch((function (_){
return null;
})).then(then_BANG_);
}
});
hitteri.clipboard_ui.handlers.hemnet.listing__GT_form_with_geocode_BANG_ = (function hitteri$clipboard_ui$handlers$hemnet$listing__GT_form_with_geocode_BANG_(listing,source_url,done_BANG_){
var form = hitteri.clipboard_ui.hemnet.form.listing__GT_pin_form(listing,source_url);
if(cljs.core.truth_(hitteri.pin_ui.interface$.forms.form_valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))){
return (done_BANG_.cljs$core$IFn$_invoke$arity$1 ? done_BANG_.cljs$core$IFn$_invoke$arity$1(form) : done_BANG_.call(null,form));
} else {
if(cljs.core.truth_(hitteri.clipboard_ui.hemnet.listing.listing_complete_address_QMARK_(listing))){
return hitteri.clipboard_ui.handlers.hemnet.guess_coords_from_address_BANG_(hitteri.clipboard_ui.hemnet.form.address_line_for_geocoding(listing),(function (result){
var G__43713 = (cljs.core.truth_(result)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(result)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"latitude","latitude",394867543),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(result))], 0)):form);
return (done_BANG_.cljs$core$IFn$_invoke$arity$1 ? done_BANG_.cljs$core$IFn$_invoke$arity$1(G__43713) : done_BANG_.call(null,G__43713));
}));
} else {
return (done_BANG_.cljs$core$IFn$_invoke$arity$1 ? done_BANG_.cljs$core$IFn$_invoke$arity$1(form) : done_BANG_.call(null,form));

}
}
});
/**
 * Apply Hemnet bookmarklet payload to the pin editor.
 */
hitteri.clipboard_ui.handlers.hemnet.apply_payload_BANG_ = (function hitteri$clipboard_ui$handlers$hemnet$apply_payload_BANG_(payload){
var temp__5825__auto__ = hitteri.clipboard_ui.hemnet.payload.payload__GT_listing(payload);
if(cljs.core.truth_(temp__5825__auto__)){
var listing = temp__5825__auto__;
var source_url = (function (){var or__5025__auto__ = cljs.core.not_empty(hitteri.clipboard_ui.handlers.hemnet.trimmed_text(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(payload)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.not_empty(hitteri.clipboard_ui.handlers.hemnet.trimmed_text(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(listing)));
}
})();
hitteri.clipboard_ui.handlers.hemnet.listing__GT_form_with_geocode_BANG_(listing,source_url,hitteri.clipboard_ui.handlers.pin_editor.apply_resolved_place_form_BANG_);

return true;
} else {
return null;
}
});

//# sourceMappingURL=hitteri.clipboard_ui.handlers.hemnet.js.map
