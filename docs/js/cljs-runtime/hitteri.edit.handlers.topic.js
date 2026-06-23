goog.provide('hitteri.edit.handlers.topic');
hitteri.edit.handlers.topic.dataset_change_counts_dirty_QMARK_ = (function hitteri$edit$handlers$topic$dataset_change_counts_dirty_QMARK_(s){
var map__48478 = hitteri.edit.interface$.model.dataset_change_counts(s);
var map__48478__$1 = cljs.core.__destructure_map(map__48478);
var deleted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48478__$1,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
var edited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48478__$1,new cljs.core.Keyword(null,"edited","edited",-262616624));
var added = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48478__$1,new cljs.core.Keyword(null,"added","added",2057651688));
return (((deleted > (0))) || ((((edited > (0))) || ((added > (0))))));
});
hitteri.edit.handlers.topic.dataset_draft_in_progress_QMARK_ = (function hitteri$edit$handlers$topic$dataset_draft_in_progress_QMARK_(s){
return cljs.core.some((function (row){
var and__5023__auto__ = hitteri.edit.interface$.rows.manual_draft_pending_row_QMARK_(row);
if(cljs.core.truth_(and__5023__auto__)){
return hitteri.edit.interface$.rows.manual_draft_differs_from_empty_baseline_QMARK_(row);
} else {
return and__5023__auto__;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(hitteri.edit.handlers.rows.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s)),hitteri.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s))));
});
hitteri.edit.handlers.topic.unsaved_dataset_changes_QMARK_ = (function hitteri$edit$handlers$topic$unsaved_dataset_changes_QMARK_(s){
var or__5025__auto__ = hitteri.edit.handlers.save.update_dataset_dirty_QMARK_(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = hitteri.edit.handlers.topic.dataset_change_counts_dirty_QMARK_(s);
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = hitteri.edit.handlers.topic.dataset_draft_in_progress_QMARK_(s);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = hitteri.edit.handlers.rows.restore_selected_update_row_enabled_QMARK_(s);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = hitteri.edit.handlers.description_sync.description_editor_differs_from_baseline_QMARK_(s);
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
return hitteri.edit.interface$.baseline.form_edited_from_baseline_QMARK_(new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672).cljs$core$IFn$_invoke$arity$1(s));
}
}
}
}
}
});
hitteri.edit.handlers.topic.unsaved_update_changes_QMARK_ = (function hitteri$edit$handlers$topic$unsaved_update_changes_QMARK_(s){
if(hitteri.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s))){
var or__5025__auto__ = hitteri.pin_ui.interface$.handlers.editor.pin_form_dirty_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"pin-separator-overlay-open?","pin-separator-overlay-open?",-1998521386).cljs$core$IFn$_invoke$arity$2(s,false);
}
} else {
return hitteri.edit.handlers.topic.unsaved_dataset_changes_QMARK_(s);
}
});
hitteri.edit.handlers.topic.t_for_state = (function hitteri$edit$handlers$topic$t_for_state(s){
var locale = new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"en","en",88457073));
return (function() { 
var G__48529__delegate = function (k,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(hitteri.i18n.interface$.t,locale,k,args);
};
var G__48529 = function (k,var_args){
var args = null;
if (arguments.length > 1) {
var G__48530__i = 0, G__48530__a = new Array(arguments.length -  1);
while (G__48530__i < G__48530__a.length) {G__48530__a[G__48530__i] = arguments[G__48530__i + 1]; ++G__48530__i;}
  args = new cljs.core.IndexedSeq(G__48530__a,0,null);
} 
return G__48529__delegate.call(this,k,args);};
G__48529.cljs$lang$maxFixedArity = 1;
G__48529.cljs$lang$applyTo = (function (arglist__48531){
var k = cljs.core.first(arglist__48531);
var args = cljs.core.rest(arglist__48531);
return G__48529__delegate(k,args);
});
G__48529.cljs$core$IFn$_invoke$arity$variadic = G__48529__delegate;
return G__48529;
})()
;
});
hitteri.edit.handlers.topic.default_update_topic_for_state = (function hitteri$edit$handlers$topic$default_update_topic_for_state(s){
return hitteri.edit.pure.topics.default_update_topic(hitteri.topic.interface$.topic_keys(),hitteri.edit.handlers.topic.t_for_state(s));
});
/**
 * Set :update-topic when unset (Pins). Offline update page always uses Pins.
 */
hitteri.edit.handlers.topic.ensure_update_topic_BANG_ = (function hitteri$edit$handlers$topic$ensure_update_topic_BANG_(){
var s = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
if((new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s) == null)){
return hitteri.edit.handlers.set_topic.set_update_topic_BANG_(hitteri.edit.pure.topics.pins_topic);
} else {
if(((cljs.core.not(new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(s))) && ((!(hitteri.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s))))))){
return hitteri.edit.handlers.set_topic.set_update_topic_BANG_(hitteri.edit.pure.topics.pins_topic);
} else {
return null;
}
}
});
hitteri.edit.handlers.topic.normalize_topic = (function hitteri$edit$handlers$topic$normalize_topic(topic){
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
hitteri.edit.handlers.topic.finalize_topic_switch_BANG_ = (function hitteri$edit$handlers$topic$finalize_topic_switch_BANG_(topic){
var continuation = new cljs.core.Keyword(null,"update-topic-switch-continuation","update-topic-switch-continuation",826297338).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hitteri.app_ui.interface$.state._BANG_state,cljs.core.dissoc,new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723),new cljs.core.Keyword(null,"update-topic-switch-continuation","update-topic-switch-continuation",826297338));

hitteri.edit.handlers.set_topic.set_update_topic_BANG_(topic);

if(cljs.core.truth_(continuation)){
return setTimeout(continuation,(0));
} else {
return null;
}
});
hitteri.edit.handlers.topic.request_update_topic_change_BANG_ = (function hitteri$edit$handlers$topic$request_update_topic_change_BANG_(var_args){
var G__48503 = arguments.length;
switch (G__48503) {
case 1:
return hitteri.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hitteri.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (topic){
return hitteri.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$2(topic,null);
}));

(hitteri.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (topic,continuation){
var temp__5825__auto__ = hitteri.edit.handlers.topic.normalize_topic(topic);
if(cljs.core.truth_(temp__5825__auto__)){
var topic__$1 = temp__5825__auto__;
var current = new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
var dirty_before_flush_QMARK_ = hitteri.edit.handlers.topic.unsaved_update_changes_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
hitteri.edit.handlers.description_sync.flush_update_description_from_dom_BANG_();

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
return hitteri.edit.handlers.topic.unsaved_update_changes_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
}
})();
if(cljs.core.truth_(dirty_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.app_ui.interface$.state._BANG_state,(function (p1__48501_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__48501_SHARP_,new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723),topic__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-topic-switch-continuation","update-topic-switch-continuation",826297338),continuation], 0)),new cljs.core.Keyword(null,"update-message","update-message",109684659));
}));

return hitteri.app_ui.interface$.effects.render_BANG_();
} else {
if(cljs.core.truth_(continuation)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hitteri.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-topic-switch-continuation","update-topic-switch-continuation",826297338),continuation);
} else {
}

return hitteri.edit.handlers.topic.finalize_topic_switch_BANG_(topic__$1);
}
} else {
return null;
}
} else {
return null;
}
}));

(hitteri.edit.handlers.topic.request_update_topic_change_BANG_.cljs$lang$maxFixedArity = 2);

hitteri.edit.handlers.topic.switch_to_pins_and_run_BANG_ = (function hitteri$edit$handlers$topic$switch_to_pins_and_run_BANG_(f){
if(cljs.core.truth_(f)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hitteri.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-topic-switch-continuation","update-topic-switch-continuation",826297338),f);
} else {
}

return hitteri.edit.handlers.topic.finalize_topic_switch_BANG_(hitteri.edit.pure.topics.pins_topic);
});
/**
 * On the edit page, ensure Pins topic before running `f`.
 *   Prompts to save/discard/cancel when the current dataset has unsaved changes.
 */
hitteri.edit.handlers.topic.run_in_update_pins_mode_BANG_ = (function hitteri$edit$handlers$topic$run_in_update_pins_mode_BANG_(f){
var s = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
if(hitteri.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
if(cljs.core.truth_(hitteri.edit.handlers.topic.unsaved_dataset_changes_QMARK_(s))){
return hitteri.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.edit.pure.topics.pins_topic,f);
} else {
return hitteri.edit.handlers.topic.switch_to_pins_and_run_BANG_(f);

}
}
}
});
/**
 * Switch between Pins and the last dataset topic (or the first in the list).
 */
hitteri.edit.handlers.topic.toggle_update_pin_topic_BANG_ = (function hitteri$edit$handlers$topic$toggle_update_pin_topic_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)))){
var s = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
if(hitteri.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s))){
return hitteri.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"update-topic-before-pins","update-topic-before-pins",998758751).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hitteri.edit.handlers.topic.default_update_topic_for_state(s);
}
})());
} else {
return hitteri.edit.handlers.topic.request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$1(hitteri.edit.pure.topics.pins_topic);
}
} else {
return null;
}
});
hitteri.edit.handlers.topic.cancel_update_topic_switch_BANG_ = (function hitteri$edit$handlers$topic$cancel_update_topic_switch_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hitteri.app_ui.interface$.state._BANG_state,cljs.core.dissoc,new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723),new cljs.core.Keyword(null,"update-topic-switch-continuation","update-topic-switch-continuation",826297338));

return hitteri.app_ui.interface$.effects.render_BANG_();
});
hitteri.edit.handlers.topic.discard_pin_form_changes_BANG_ = (function hitteri$edit$handlers$topic$discard_pin_form_changes_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.app_ui.interface$.state._BANG_state,(function (s){
var baseline = new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539).cljs$core$IFn$_invoke$arity$2(s,hitteri.pin_ui.interface$.forms.default_form());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),baseline),new cljs.core.Keyword(null,"pin-separator-overlay-open?","pin-separator-overlay-open?",-1998521386),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),new cljs.core.Keyword(null,"pin-separator-overlay-snapshot","pin-separator-overlay-snapshot",-1756599608)], 0));
}));
});
hitteri.edit.handlers.topic.discard_update_topic_switch_BANG_ = (function hitteri$edit$handlers$topic$discard_update_topic_switch_BANG_(){
var temp__5825__auto__ = new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto__)){
var topic = temp__5825__auto__;
var current = new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
var switching_to_pins_QMARK_ = hitteri.edit.pure.topics.pins_topic_QMARK_(topic);
var on_pins_QMARK_ = hitteri.edit.pure.topics.pins_topic_QMARK_(current);
var finalize_BANG_ = (function (){
return hitteri.edit.handlers.topic.finalize_topic_switch_BANG_(topic);
});
if(on_pins_QMARK_){
hitteri.edit.handlers.topic.discard_pin_form_changes_BANG_();

return finalize_BANG_();
} else {
if(switching_to_pins_QMARK_){
return hitteri.edit.handlers.save.discard_unsaved_dataset_changes_BANG_(finalize_BANG_);
} else {
return finalize_BANG_();

}
}
} else {
return null;
}
});
hitteri.edit.handlers.topic.save_and_switch_update_topic_BANG_ = (function hitteri$edit$handlers$topic$save_and_switch_update_topic_BANG_(){
var temp__5825__auto__ = new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto__)){
var pending = temp__5825__auto__;
if(hitteri.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)))){
var s = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
var mode = new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_((function (){var or__5025__auto__ = (function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"edit","edit",-1641834166));
if(and__5023__auto__){
return hitteri.pin_ui.interface$.handlers.rows.save_enabled_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"new","new",-2085437848));
if(and__5023__auto__){
return hitteri.pin_ui.interface$.forms.form_valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$2(s,hitteri.pin_ui.interface$.forms.default_form())], 0));
} else {
return and__5023__auto__;
}
}
})())){
var G__48520_48533 = mode;
var G__48520_48534__$1 = (((G__48520_48533 instanceof cljs.core.Keyword))?G__48520_48533.fqn:null);
switch (G__48520_48534__$1) {
case "new":
hitteri.pin_ui.interface$.handlers.rows.add_pin_BANG_();

break;
case "edit":
hitteri.pin_ui.interface$.handlers.rows.save_pin_BANG_();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48520_48534__$1)].join('')));

}
} else {
}

return hitteri.edit.handlers.topic.finalize_topic_switch_BANG_(pending);
} else {
return hitteri.edit.handlers.save.save_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (_){
return hitteri.edit.handlers.topic.finalize_topic_switch_BANG_(pending);
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.interface$.state._BANG_state,cljs.core.dissoc,new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723));

return hitteri.app_ui.interface$.effects.render_BANG_();
})], null));
}
} else {
return null;
}
});

//# sourceMappingURL=hitteri.edit.handlers.topic.js.map
