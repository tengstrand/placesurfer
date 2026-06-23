goog.provide('placesurfer.pin_ui.handlers.form');
placesurfer.pin_ui.handlers.form.notify_inline_edit_BANG_ = (function placesurfer$pin_ui$handlers$form$notify_inline_edit_BANG_(){
return placesurfer.pin_ui.handlers.editor.schedule_inline_auto_save_BANG_();
});
placesurfer.pin_ui.handlers.form.set_pin_name_BANG_ = (function placesurfer$pin_ui$handlers$form$set_pin_name_BANG_(v){
placesurfer.pin_ui.handlers.state.update_form_field_BANG_(new cljs.core.Keyword(null,"name","name",1843675177),v);

return placesurfer.pin_ui.handlers.form.notify_inline_edit_BANG_();
});
placesurfer.pin_ui.handlers.form.set_pin_address_BANG_ = (function placesurfer$pin_ui$handlers$form$set_pin_address_BANG_(v){
placesurfer.pin_ui.handlers.state.update_form_field_BANG_(new cljs.core.Keyword(null,"address","address",559499426),v);

return placesurfer.pin_ui.handlers.form.notify_inline_edit_BANG_();
});
placesurfer.pin_ui.handlers.form.set_pin_group_BANG_ = (function placesurfer$pin_ui$handlers$form$set_pin_group_BANG_(group_id){
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (s){
var temp__5823__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__5823__auto__)){
var pin_id = temp__5823__auto__;
var temp__5823__auto____$1 = placesurfer.pin_ui.pure.rows.move_pin_to_group(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),pin_id,group_id);
if(cljs.core.truth_(temp__5823__auto____$1)){
var next_items = temp__5823__auto____$1;
cljs.core.reset_BANG_(saved,next_items);

return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items),pin_id);
} else {
return s;
}
} else {
return s;
}
}));

if(cljs.core.truth_(cljs.core.deref(saved))){
placesurfer.pin_ui.pure.storage.save_pins_BANG_(cljs.core.deref(saved));

placesurfer.pin_ui.handlers.state.render_BANG_();

return placesurfer.pin_ui.handlers.form.notify_inline_edit_BANG_();
} else {
return null;
}
});
placesurfer.pin_ui.handlers.form.set_pin_icon_BANG_ = (function placesurfer$pin_ui$handlers$form$set_pin_icon_BANG_(v){
placesurfer.pin_ui.handlers.state.update_form_field_BANG_(new cljs.core.Keyword(null,"icon","icon",1679606541),placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1(v));

placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));

return placesurfer.pin_ui.handlers.form.notify_inline_edit_BANG_();
});
placesurfer.pin_ui.handlers.form.set_pin_url_BANG_ = (function placesurfer$pin_ui$handlers$form$set_pin_url_BANG_(v){
placesurfer.pin_ui.handlers.state.update_form_field_BANG_(new cljs.core.Keyword(null,"url","url",276297046),v);

return placesurfer.pin_ui.handlers.form.notify_inline_edit_BANG_();
});
placesurfer.pin_ui.handlers.form.set_pin_image_BANG_ = (function placesurfer$pin_ui$handlers$form$set_pin_image_BANG_(v){
placesurfer.pin_ui.handlers.state.update_form_field_BANG_(new cljs.core.Keyword(null,"image","image",-58725096),v);

return placesurfer.pin_ui.handlers.form.notify_inline_edit_BANG_();
});
placesurfer.pin_ui.handlers.form.set_pin_agent_url_BANG_ = (function placesurfer$pin_ui$handlers$form$set_pin_agent_url_BANG_(v){
placesurfer.pin_ui.handlers.state.update_form_field_BANG_(new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259),v);

return placesurfer.pin_ui.handlers.form.notify_inline_edit_BANG_();
});
placesurfer.pin_ui.handlers.form.set_pin_description_BANG_ = (function placesurfer$pin_ui$handlers$form$set_pin_description_BANG_(v){
placesurfer.pin_ui.handlers.state.update_form_field_BANG_(new cljs.core.Keyword(null,"description","description",-1428560544),v);

return placesurfer.pin_ui.handlers.form.notify_inline_edit_BANG_();
});
placesurfer.pin_ui.handlers.form.set_pin_longitude_BANG_ = (function placesurfer$pin_ui$handlers$form$set_pin_longitude_BANG_(v){
placesurfer.pin_ui.handlers.state.update_form_field_BANG_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372),v);

return placesurfer.pin_ui.handlers.form.notify_inline_edit_BANG_();
});
placesurfer.pin_ui.handlers.form.commit_pin_longitude_BANG_ = (function placesurfer$pin_ui$handlers$form$commit_pin_longitude_BANG_(v){
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))){
placesurfer.pin_ui.handlers.state.update_form_field_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"longitude","longitude",-1268876372),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true], null)], 0));

return placesurfer.pin_ui.handlers.form.notify_inline_edit_BANG_();
} else {
return null;
}
});
placesurfer.pin_ui.handlers.form.set_pin_latitude_BANG_ = (function placesurfer$pin_ui$handlers$form$set_pin_latitude_BANG_(v){
placesurfer.pin_ui.handlers.state.update_form_field_BANG_(new cljs.core.Keyword(null,"latitude","latitude",394867543),v);

return placesurfer.pin_ui.handlers.form.notify_inline_edit_BANG_();
});
placesurfer.pin_ui.handlers.form.commit_pin_latitude_BANG_ = (function placesurfer$pin_ui$handlers$form$commit_pin_latitude_BANG_(v){
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))){
placesurfer.pin_ui.handlers.state.update_form_field_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"latitude","latitude",394867543),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true], null)], 0));

return placesurfer.pin_ui.handlers.form.notify_inline_edit_BANG_();
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.pin_ui.handlers.form.js.map
