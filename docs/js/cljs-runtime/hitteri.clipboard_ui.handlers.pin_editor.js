goog.provide('hitteri.clipboard_ui.handlers.pin_editor');
hitteri.clipboard_ui.handlers.pin_editor.missing_coords_message = (function hitteri$clipboard_ui$handlers$pin_editor$missing_coords_message(form){
if(cljs.core.truth_(hitteri.pin_ui.interface$.forms.form_valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))){
return null;
} else {
return "Coordinates or address missing from copied place";
}
});
hitteri.clipboard_ui.handlers.pin_editor.apply_form_to_editor_BANG_ = (function hitteri$clipboard_ui$handlers$pin_editor$apply_form_to_editor_BANG_(form){
hitteri.pin_ui.interface$.handlers.state.swap_render_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (s){
return hitteri.app_ui.interface$.state.bump_description_sync_token(hitteri.pin_ui.interface$.handlers.state.clear_search_ui.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),form,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),hitteri.clipboard_ui.handlers.pin_editor.missing_coords_message(form)], 0))], 0)));
})], 0));

return hitteri.pin_ui.interface$.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),cljs.core.not(hitteri.pin_ui.interface$.update_context.update_pins_mode_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)], 0)))], null)], 0));
});
hitteri.clipboard_ui.handlers.pin_editor.form_has_name_QMARK_ = (function hitteri$clipboard_ui$handlers$pin_editor$form_has_name_QMARK_(form){
return cljs.core.seq(clojure.string.trim((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()));
});
hitteri.clipboard_ui.handlers.pin_editor.prepare_new_pin_for_place_paste_BANG_ = (function hitteri$clipboard_ui$handlers$pin_editor$prepare_new_pin_for_place_paste_BANG_(){
var s = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
var current_form = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$2(s,hitteri.pin_ui.interface$.forms.default_form());
if(hitteri.clipboard_ui.handlers.pin_editor.form_has_name_QMARK_(current_form)){
hitteri.pin_ui.interface$.handlers.editor.maybe_save_inline_pin_before_switch_BANG_();

return hitteri.pin_ui.interface$.handlers.state.swap_render_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (state){
return hitteri.pin_ui.interface$.handlers.state.clear_search_ui.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),new cljs.core.Keyword(null,"new","new",-2085437848),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),null], 0))], 0));
})], 0));
} else {
return null;
}
});
hitteri.clipboard_ui.handlers.pin_editor.apply_place_on_update_pins_BANG_ = (function hitteri$clipboard_ui$handlers$pin_editor$apply_place_on_update_pins_BANG_(form){
var create_new_QMARK_ = hitteri.clipboard_ui.handlers.pin_editor.form_has_name_QMARK_(new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state),hitteri.pin_ui.interface$.forms.default_form()));
if(create_new_QMARK_){
hitteri.clipboard_ui.handlers.pin_editor.prepare_new_pin_for_place_paste_BANG_();
} else {
}

hitteri.clipboard_ui.handlers.pin_editor.apply_form_to_editor_BANG_(form);

if(cljs.core.truth_(hitteri.pin_ui.interface$.forms.form_valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))){
hitteri.pin_ui.interface$.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-new?","force-new?",-15330180),create_new_QMARK_], null)], 0));

var temp__5825__auto___48476 = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto___48476)){
var id_48477 = temp__5825__auto___48476;
hitteri.pin_ui.interface$.handlers.editor.load_pin_into_inline_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_48477], 0));
} else {
}

hitteri.clipboard_ui.pure.browser.clear_clipboard_BANG_();

return true;
} else {
return false;
}
});
hitteri.clipboard_ui.handlers.pin_editor.apply_resolved_place_form_BANG_ = (function hitteri$clipboard_ui$handlers$pin_editor$apply_resolved_place_form_BANG_(form){
if(cljs.core.truth_(hitteri.pin_ui.interface$.update_context.update_pins_mode_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)], 0)))){
return hitteri.clipboard_ui.handlers.pin_editor.apply_place_on_update_pins_BANG_(form);
} else {
if(hitteri.clipboard_ui.pure.context.pin_page_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state))){
hitteri.pin_ui.interface$.handlers.editor.open_pin_editor_new_BANG_();

hitteri.clipboard_ui.handlers.pin_editor.apply_form_to_editor_BANG_(form);

hitteri.clipboard_ui.pure.browser.clear_clipboard_BANG_();

return true;
} else {
return false;

}
}
});

//# sourceMappingURL=hitteri.clipboard_ui.handlers.pin_editor.js.map
