goog.provide('placesurfer.pin_ui.handlers.hemnet');
placesurfer.pin_ui.handlers.hemnet.start_new_pin_flow_BANG_ = (function placesurfer$pin_ui$handlers$hemnet$start_new_pin_flow_BANG_(){
if(placesurfer.pin_ui.pure.update_context.update_pins_mode_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
return placesurfer.pin_ui.handlers.editor.open_pin_editor_new_empty_BANG_();
} else {
if(placesurfer.pin_ui.pure.update_context.update_page_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
return placesurfer.app_ui.interface$.effects.run_in_update_pins_mode_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return placesurfer.pin_ui.handlers.editor.open_pin_editor_new_empty_BANG_();
})], 0));
} else {
return placesurfer.pin_ui.handlers.editor.open_pin_editor_new_BANG_();
}
}
});
placesurfer.pin_ui.handlers.hemnet.create_new_pin_BANG_ = (function placesurfer$pin_ui$handlers$hemnet$create_new_pin_BANG_(){
return placesurfer.pin_ui.handlers.hemnet.start_new_pin_flow_BANG_();
});
/**
 * Backward-compatible alias for create-new-pin!.
 */
placesurfer.pin_ui.handlers.hemnet.create_new_pin_from_clipboard_BANG_ = (function placesurfer$pin_ui$handlers$hemnet$create_new_pin_from_clipboard_BANG_(){
return placesurfer.pin_ui.handlers.hemnet.create_new_pin_BANG_();
});

//# sourceMappingURL=placesurfer.pin_ui.handlers.hemnet.js.map
