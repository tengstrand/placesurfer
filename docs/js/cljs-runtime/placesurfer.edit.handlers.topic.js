goog.provide('placesurfer.edit.handlers.topic');
placesurfer.edit.handlers.topic.dataset_change_counts_dirty_QMARK_ = (function placesurfer$edit$handlers$topic$dataset_change_counts_dirty_QMARK_(s){
var map__40246 = placesurfer.edit.interface$.model.dataset_change_counts(s);
var map__40246__$1 = cljs.core.__destructure_map(map__40246);
var deleted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40246__$1,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
var edited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40246__$1,new cljs.core.Keyword(null,"edited","edited",-262616624));
var added = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40246__$1,new cljs.core.Keyword(null,"added","added",2057651688));
return (((deleted > (0))) || ((((edited > (0))) || ((added > (0))))));
});
placesurfer.edit.handlers.topic.dataset_draft_in_progress_QMARK_ = (function placesurfer$edit$handlers$topic$dataset_draft_in_progress_QMARK_(s){
return cljs.core.some((function (row){
var and__5023__auto__ = placesurfer.edit.interface$.rows.manual_draft_pending_row_QMARK_(row);
if(cljs.core.truth_(and__5023__auto__)){
return placesurfer.edit.interface$.rows.manual_draft_differs_from_empty_baseline_QMARK_(row);
} else {
return and__5023__auto__;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.handlers.rows.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s)),placesurfer.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s))));
});
placesurfer.edit.handlers.topic.unsaved_dataset_changes_QMARK_ = (function placesurfer$edit$handlers$topic$unsaved_dataset_changes_QMARK_(s){
var or__5025__auto__ = placesurfer.edit.handlers.save.update_dataset_dirty_QMARK_(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.edit.handlers.topic.dataset_change_counts_dirty_QMARK_(s);
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = placesurfer.edit.handlers.topic.dataset_draft_in_progress_QMARK_(s);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = placesurfer.edit.handlers.rows.restore_selected_update_row_enabled_QMARK_(s);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = placesurfer.edit.handlers.description_sync.description_editor_differs_from_baseline_QMARK_(s);
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
return placesurfer.edit.interface$.baseline.form_edited_from_baseline_QMARK_(new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672).cljs$core$IFn$_invoke$arity$1(s));
}
}
}
}
}
});
placesurfer.edit.handlers.topic.unsaved_update_changes_QMARK_ = (function placesurfer$edit$handlers$topic$unsaved_update_changes_QMARK_(s){
if(placesurfer.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s))){
var or__5025__auto__ = placesurfer.pin_ui.interface$.handlers.editor.pin_form_dirty_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"pin-separator-overlay-open?","pin-separator-overlay-open?",-1998521386).cljs$core$IFn$_invoke$arity$2(s,false);
}
} else {
return placesurfer.edit.handlers.topic.unsaved_dataset_changes_QMARK_(s);
}
});
placesurfer.edit.handlers.topic.t_for_state = (function placesurfer$edit$handlers$topic$t_for_state(s){
var locale = new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"en","en",88457073));
return (function() { 
var G__40260__delegate = function (k,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(placesurfer.i18n.interface$.t,locale,k,args);
};
var G__40260 = function (k,var_args){
var args = null;
if (arguments.length > 1) {
var G__40261__i = 0, G__40261__a = new Array(arguments.length -  1);
while (G__40261__i < G__40261__a.length) {G__40261__a[G__40261__i] = arguments[G__40261__i + 1]; ++G__40261__i;}
  args = new cljs.core.IndexedSeq(G__40261__a,0,null);
} 
return G__40260__delegate.call(this,k,args);};
G__40260.cljs$lang$maxFixedArity = 1;
G__40260.cljs$lang$applyTo = (function (arglist__40262){
var k = cljs.core.first(arglist__40262);
var args = cljs.core.rest(arglist__40262);
return G__40260__delegate(k,args);
});
G__40260.cljs$core$IFn$_invoke$arity$variadic = G__40260__delegate;
return G__40260;
})()
;
});
placesurfer.edit.handlers.topic.default_update_topic_for_state = (function placesurfer$edit$handlers$topic$default_update_topic_for_state(s){
return placesurfer.edit.pure.topics.default_update_topic(placesurfer.topic.interface$.topic_keys(),placesurfer.edit.handlers.topic.t_for_state(s));
});
/**
 * Set :update-topic when unset (Pins). Offline update page always uses Pins.
 */
placesurfer.edit.handlers.topic.ensure_update_topic_BANG_ = (function placesurfer$edit$handlers$topic$ensure_update_topic_BANG_(){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
if((new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s) == null)){
return placesurfer.edit.handlers.set_topic.set_update_topic_BANG_(placesurfer.edit.pure.topics.pins_topic);
} else {
if(((cljs.core.not(new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(s))) && ((!(placesurfer.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s))))))){
return placesurfer.edit.handlers.set_topic.set_update_topic_BANG_(placesurfer.edit.pure.topics.pins_topic);
} else {
return null;
}
}
});
placesurfer.edit.handlers.topic.normalize_topic = (function placesurfer$edit$handlers$topic$normalize_topic(topic){
if((topic instanceof cljs.core.Keyword)){
return topic;
} else {
if(typeof topic === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(topic);
} else {
return null;

}
}
});
placesurfer.edit.handlers.topic.finalize_topic_switch_BANG_ = (function placesurfer$edit$handlers$topic$finalize_topic_switch_BANG_(topic){
var continuation = new cljs.core.Keyword(null,"update-topic-switch-continuation","update-topic-switch-continuation",826297338).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.dissoc,new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723),new cljs.core.Keyword(null,"update-topic-switch-continuation","update-topic-switch-continuation",826297338));

placesurfer.edit.handlers.set_topic.set_update_topic_BANG_(topic);

if(cljs.core.truth_(continuation)){
return setTimeout(continuation,(0));
} else {
return null;
}
});
placesurfer.edit.handlers.topic.request_update_topic_change_BANG_ = (function placesurfer$edit$handlers$topic$request_update_topic_change_BANG_(var_args){
var G__40256 = arguments.length;
switch (G__40256) {
case 1:
return placesurfer.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (topic){
return placesurfer.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$2(topic,null);
}));

(placesurfer.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (topic,continuation){
var temp__5825__auto__ = placesurfer.edit.handlers.topic.normalize_topic(topic);
if(cljs.core.truth_(temp__5825__auto__)){
var topic__$1 = temp__5825__auto__;
var current = new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
var dirty_before_flush_QMARK_ = placesurfer.edit.handlers.topic.unsaved_update_changes_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
placesurfer.edit.handlers.description_sync.flush_update_description_from_dom_BANG_();

if(cljs.core.truth_((function (){var and__5023__auto__ = topic__$1;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(topic__$1,current);
} else {
return and__5023__auto__;
}
})())){
var dirty_QMARK_ = (function (){var or__5025__auto__ = dirty_before_flush_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.edit.handlers.topic.unsaved_update_changes_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
}
})();
if(cljs.core.truth_(dirty_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (p1__40254_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__40254_SHARP_,new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723),topic__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-topic-switch-continuation","update-topic-switch-continuation",826297338),continuation], 0)),new cljs.core.Keyword(null,"update-message","update-message",109684659));
}));

return placesurfer.app_ui.interface$.effects.render_BANG_();
} else {
if(cljs.core.truth_(continuation)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-topic-switch-continuation","update-topic-switch-continuation",826297338),continuation);
} else {
}

return placesurfer.edit.handlers.topic.finalize_topic_switch_BANG_(topic__$1);
}
} else {
return null;
}
} else {
return null;
}
}));

(placesurfer.edit.handlers.topic.request_update_topic_change_BANG_.cljs$lang$maxFixedArity = 2);

placesurfer.edit.handlers.topic.switch_to_pins_and_run_BANG_ = (function placesurfer$edit$handlers$topic$switch_to_pins_and_run_BANG_(f){
if(cljs.core.truth_(f)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-topic-switch-continuation","update-topic-switch-continuation",826297338),f);
} else {
}

return placesurfer.edit.handlers.topic.finalize_topic_switch_BANG_(placesurfer.edit.pure.topics.pins_topic);
});
/**
 * On the edit page, ensure Pins topic before running `f`.
 *   Prompts to save/discard/cancel when the current dataset has unsaved changes.
 */
placesurfer.edit.handlers.topic.run_in_update_pins_mode_BANG_ = (function placesurfer$edit$handlers$topic$run_in_update_pins_mode_BANG_(f){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
if(placesurfer.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
if(cljs.core.truth_(placesurfer.edit.handlers.topic.unsaved_dataset_changes_QMARK_(s))){
return placesurfer.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.pure.topics.pins_topic,f);
} else {
return placesurfer.edit.handlers.topic.switch_to_pins_and_run_BANG_(f);

}
}
}
});
/**
 * Switch between Pins and the last dataset topic (or the first in the list).
 */
placesurfer.edit.handlers.topic.toggle_update_pin_topic_BANG_ = (function placesurfer$edit$handlers$topic$toggle_update_pin_topic_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
if(placesurfer.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s))){
return placesurfer.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"update-topic-before-pins","update-topic-before-pins",998758751).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.edit.handlers.topic.default_update_topic_for_state(s);
}
})());
} else {
return placesurfer.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$1(placesurfer.edit.pure.topics.pins_topic);
}
} else {
return null;
}
});
placesurfer.edit.handlers.topic.cancel_update_topic_switch_BANG_ = (function placesurfer$edit$handlers$topic$cancel_update_topic_switch_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.dissoc,new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723),new cljs.core.Keyword(null,"update-topic-switch-continuation","update-topic-switch-continuation",826297338));

return placesurfer.app_ui.interface$.effects.render_BANG_();
});
placesurfer.edit.handlers.topic.discard_pin_form_changes_BANG_ = (function placesurfer$edit$handlers$topic$discard_pin_form_changes_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
var baseline = new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539).cljs$core$IFn$_invoke$arity$2(s,placesurfer.pin_ui.interface$.forms.default_form());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),baseline),new cljs.core.Keyword(null,"pin-separator-overlay-open?","pin-separator-overlay-open?",-1998521386),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),new cljs.core.Keyword(null,"pin-separator-overlay-snapshot","pin-separator-overlay-snapshot",-1756599608)], 0));
}));
});
placesurfer.edit.handlers.topic.discard_update_topic_switch_BANG_ = (function placesurfer$edit$handlers$topic$discard_update_topic_switch_BANG_(){
var temp__5825__auto__ = new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto__)){
var topic = temp__5825__auto__;
var current = new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
var switching_to_pins_QMARK_ = placesurfer.edit.pure.topics.pins_topic_QMARK_(topic);
var on_pins_QMARK_ = placesurfer.edit.pure.topics.pins_topic_QMARK_(current);
var finalize_BANG_ = (function (){
return placesurfer.edit.handlers.topic.finalize_topic_switch_BANG_(topic);
});
if(on_pins_QMARK_){
placesurfer.edit.handlers.topic.discard_pin_form_changes_BANG_();

return finalize_BANG_();
} else {
if(switching_to_pins_QMARK_){
return placesurfer.edit.handlers.save.discard_unsaved_dataset_changes_BANG_(finalize_BANG_);
} else {
return finalize_BANG_();

}
}
} else {
return null;
}
});
placesurfer.edit.handlers.topic.save_and_switch_update_topic_BANG_ = (function placesurfer$edit$handlers$topic$save_and_switch_update_topic_BANG_(){
var temp__5825__auto__ = new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto__)){
var pending = temp__5825__auto__;
if(placesurfer.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var mode = new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_((function (){var or__5025__auto__ = (function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"edit","edit",-1641834166));
if(and__5023__auto__){
return placesurfer.pin_ui.interface$.handlers.rows.save_enabled_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"new","new",-2085437848));
if(and__5023__auto__){
return placesurfer.pin_ui.interface$.forms.form_valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$2(s,placesurfer.pin_ui.interface$.forms.default_form())], 0));
} else {
return and__5023__auto__;
}
}
})())){
var G__40257_40275 = mode;
var G__40257_40276__$1 = (((G__40257_40275 instanceof cljs.core.Keyword))?G__40257_40275.fqn:null);
switch (G__40257_40276__$1) {
case "new":
placesurfer.pin_ui.interface$.handlers.rows.add_pin_BANG_();

break;
case "edit":
placesurfer.pin_ui.interface$.handlers.rows.save_pin_BANG_();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40257_40276__$1)].join('')));

}
} else {
}

return placesurfer.edit.handlers.topic.finalize_topic_switch_BANG_(pending);
} else {
return placesurfer.edit.handlers.save.save_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (_){
return placesurfer.edit.handlers.topic.finalize_topic_switch_BANG_(pending);
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.dissoc,new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723));

return placesurfer.app_ui.interface$.effects.render_BANG_();
})], null));
}
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.edit.handlers.topic.js.map
