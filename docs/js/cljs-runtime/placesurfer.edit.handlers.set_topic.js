goog.provide('placesurfer.edit.handlers.set_topic');
placesurfer.edit.handlers.set_topic.set_update_topic_BANG_ = (function placesurfer$edit$handlers$set_topic$set_update_topic_BANG_(topic){
placesurfer.app_ui.interface$.state.clear_update_status_BANG_();

if(placesurfer.edit.pure.topics.pins_topic_QMARK_(topic)){
placesurfer.edit.handlers.save.save_current_update_dataset_to_cache_if_clean_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
var from_topic = new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s);
var G__51542 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state.clear_update_selection_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688),topic),new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-editor-snapshot","pin-editor-snapshot",-352879376)], 0)),new cljs.core.Keyword(null,"pin-editor-inline?","pin-editor-inline?",766617935),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),null,new cljs.core.Keyword(null,"pin-show-search?","pin-show-search?",-437021687),false], 0))),new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),placesurfer.pin_ui.interface$.forms.default_form(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),placesurfer.pin_ui.interface$.forms.default_form(),new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),null], 0));
if(((placesurfer.edit.pure.topics.pins_topic_QMARK_(topic)) && ((((!(placesurfer.edit.pure.topics.pins_topic_QMARK_(from_topic)))) && ((!((from_topic == null)))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51542,new cljs.core.Keyword(null,"update-topic-before-pins","update-topic-before-pins",998758751),from_topic);
} else {
return G__51542;
}
}));

placesurfer.app_ui.interface$.effects.render_BANG_();

placesurfer.pin_ui.interface$.handlers.rows.refresh_pin_table_BANG_();

return setTimeout((function (){
return placesurfer.edit.handlers.map.schedule_update_map_pin_sync_BANG_();
}),(0));
} else {
placesurfer.edit.handlers.save.save_current_update_dataset_to_cache_if_clean_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688),topic);

placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.edit.handlers.save.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clear-selection?","clear-selection?",624435603),true,new cljs.core.Keyword(null,"reset-client-actions?","reset-client-actions?",1285612005),true], null));
}
});

//# sourceMappingURL=placesurfer.edit.handlers.set_topic.js.map
