goog.provide('placesurfer.clipboard_ui.handlers.paste');
/**
 * When `text` is bookmarklet JSON, apply place data in pin/pins context.
 *   Returns true when handled.
 */
placesurfer.clipboard_ui.handlers.paste.apply_place_clipboard_text_BANG_ = (function placesurfer$clipboard_ui$handlers$paste$apply_place_clipboard_text_BANG_(text){
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.context.full_place_paste_context_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
var temp__5823__auto__ = placesurfer.clipboard_ui.pure.payload.parse_bookmarklet_text(placesurfer.clipboard_ui.pure.browser.trimmed_text(text));
if(cljs.core.truth_(temp__5823__auto__)){
var parsed = temp__5823__auto__;
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
