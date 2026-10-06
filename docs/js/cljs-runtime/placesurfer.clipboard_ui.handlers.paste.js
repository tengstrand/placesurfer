goog.provide('placesurfer.clipboard_ui.handlers.paste');
/**
 * When `text` is bookmarklet JSON, apply place data in pin/pins context.
 *   Returns true when handled.
 */
placesurfer.clipboard_ui.handlers.paste.apply_place_clipboard_text_BANG_ = (function placesurfer$clipboard_ui$handlers$paste$apply_place_clipboard_text_BANG_(text){
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.context.full_place_paste_context_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
var temp__5821__auto__ = placesurfer.clipboard_ui.pure.payload.parse_bookmarklet_text(placesurfer.clipboard_ui.pure.browser.trimmed_text(text));
if(cljs.core.truth_(temp__5821__auto__)){
var parsed = temp__5821__auto__;
return cljs.core.boolean$(placesurfer.clipboard_ui.handlers.apply.apply_place_payload_BANG_(parsed));
} else {
return false;
}
} else {
return false;
}
});
/**
 * Backward-compatible alias for apply-place-clipboard-text!.
 */
placesurfer.clipboard_ui.handlers.paste.apply_hemnet_clipboard_text_BANG_ = (function placesurfer$clipboard_ui$handlers$paste$apply_hemnet_clipboard_text_BANG_(text){
return placesurfer.clipboard_ui.handlers.paste.apply_place_clipboard_text_BANG_(text);
});
/**
 * Ensure we're viewing a context that shows Hemnet search results (the pin
 * page, or the edit page's Pins topic) before invoking `f` - switching page
 * or topic first when we're currently somewhere else.
 */
placesurfer.clipboard_ui.handlers.paste.ensure_search_results_context_then_BANG_ = (function placesurfer$clipboard_ui$handlers$paste$ensure_search_results_context_then_BANG_(f){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
if(placesurfer.clipboard_ui.pure.context.pin_page_QMARK_(s)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
if(cljs.core.truth_(placesurfer.pin_ui.interface$.update_context.update_pins_mode_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
if(cljs.core.truth_(placesurfer.pin_ui.interface$.update_context.update_page_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)))){
return placesurfer.app_ui.interface$.effects.run_in_update_pins_mode_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0));
} else {
placesurfer.app_ui.interface$.effects.navigate_to_pin_BANG_();

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

}
}
}
});
/**
 * When `text` is a Hemnet search-results bookmarklet payload, apply it
 * regardless of which page/tab is currently active - switching to the pin
 * page (or the edit page's Pins topic) first when needed. Returns true when
 * handled.
 */
placesurfer.clipboard_ui.handlers.paste.apply_search_results_clipboard_text_BANG_ = (function placesurfer$clipboard_ui$handlers$paste$apply_search_results_clipboard_text_BANG_(text){
return cljs.core.boolean$((function (){var temp__5823__auto__ = placesurfer.clipboard_ui.pure.payload.parse_bookmarklet_text(placesurfer.clipboard_ui.pure.browser.trimmed_text(text));
if(cljs.core.truth_(temp__5823__auto__)){
var parsed = temp__5823__auto__;
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_search_results_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parsed], 0)))){
placesurfer.clipboard_ui.handlers.paste.ensure_search_results_context_then_BANG_((function (){
return placesurfer.clipboard_ui.handlers.apply.apply_place_payload_BANG_(parsed);
}));

return true;
} else {
return null;
}
} else {
return null;
}
})());
});
placesurfer.clipboard_ui.handlers.paste.paste_place_from_clipboard_BANG_ = (function placesurfer$clipboard_ui$handlers$paste$paste_place_from_clipboard_BANG_(){
return placesurfer.clipboard_ui.pure.browser.read_clipboard_text_BANG_((function (text){
if(cljs.core.truth_((function (){var and__5023__auto__ = text;
if(cljs.core.truth_(and__5023__auto__)){
return placesurfer.clipboard_ui.pure.payload.clipboard_hint_valid_QMARK_(text);
} else {
return and__5023__auto__;
}
})())){
return placesurfer.clipboard_ui.handlers.paste.apply_place_clipboard_text_BANG_(text);
} else {
return null;
}
}));
});

//# sourceMappingURL=placesurfer.clipboard_ui.handlers.paste.js.map
