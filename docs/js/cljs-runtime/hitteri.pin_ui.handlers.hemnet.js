goog.provide('hitteri.pin_ui.handlers.hemnet');
hitteri.pin_ui.handlers.hemnet.start_new_pin_flow_BANG_ = (function hitteri$pin_ui$handlers$hemnet$start_new_pin_flow_BANG_(){
if(hitteri.pin_ui.pure.update_context.update_pins_mode_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state))){
return hitteri.pin_ui.handlers.editor.start_pin_search_BANG_();
} else {
if(hitteri.pin_ui.pure.update_context.update_page_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state))){
return hitteri.app_ui.interface$.effects.run_in_update_pins_mode_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return hitteri.pin_ui.handlers.editor.start_pin_search_BANG_();
})], 0));
} else {
return hitteri.pin_ui.handlers.editor.open_pin_editor_new_BANG_();
}
}
});
hitteri.pin_ui.handlers.hemnet.create_new_pin_BANG_ = (function hitteri$pin_ui$handlers$hemnet$create_new_pin_BANG_(){
return hitteri.pin_ui.handlers.hemnet.start_new_pin_flow_BANG_();
});
/**
 * Backward-compatible alias for create-new-pin!.
 */
hitteri.pin_ui.handlers.hemnet.create_new_pin_from_clipboard_BANG_ = (function hitteri$pin_ui$handlers$hemnet$create_new_pin_from_clipboard_BANG_(){
return hitteri.pin_ui.handlers.hemnet.create_new_pin_BANG_();
});

//# sourceMappingURL=hitteri.pin_ui.handlers.hemnet.js.map
