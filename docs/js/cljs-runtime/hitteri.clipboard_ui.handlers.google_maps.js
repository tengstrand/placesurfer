goog.provide('hitteri.clipboard_ui.handlers.google_maps');
hitteri.clipboard_ui.handlers.google_maps.trimmed_text = (function hitteri$clipboard_ui$handlers$google_maps$trimmed_text(text){
return hitteri.clipboard_ui.pure.browser.trimmed_text(text);
});
/**
 * Apply Google Maps bookmarklet payload to the pin editor.
 */
hitteri.clipboard_ui.handlers.google_maps.apply_payload_BANG_ = (function hitteri$clipboard_ui$handlers$google_maps$apply_payload_BANG_(payload){
var temp__5825__auto__ = hitteri.clipboard_ui.google_maps.payload.payload__GT_place(payload);
if(cljs.core.truth_(temp__5825__auto__)){
var place = temp__5825__auto__;
var source_url = cljs.core.not_empty(hitteri.clipboard_ui.handlers.google_maps.trimmed_text(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(payload)));
var form = hitteri.clipboard_ui.google_maps.place.place__GT_pin_form(place,source_url);
hitteri.clipboard_ui.handlers.pin_editor.apply_resolved_place_form_BANG_(form);

return true;
} else {
return null;
}
});

//# sourceMappingURL=hitteri.clipboard_ui.handlers.google_maps.js.map
