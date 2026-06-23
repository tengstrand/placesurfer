goog.provide('hitteri.edit.handlers.description_sync');
hitteri.edit.handlers.description_sync.dom_available_QMARK_ = (function hitteri$edit$handlers$description_sync$dom_available_QMARK_(){
try{return cljs.core.boolean$((function (){var and__5023__auto__ = document;
if(cljs.core.truth_(and__5023__auto__)){
return document.getElementById;
} else {
return and__5023__auto__;
}
})());
}catch (e39722){var _ = e39722;
return false;
}});
hitteri.edit.handlers.description_sync.description_baseline_canonical = (function hitteri$edit$handlers$description_sync$description_baseline_canonical(s){
return hitteri.html.interface$.description.description_for_text_display.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),new cljs.core.Keyword(null,"description","description",-1428560544)], null),"")))], 0));
});
hitteri.edit.handlers.description_sync.description_editor_differs_from_baseline_QMARK_ = (function hitteri$edit$handlers$description_sync$description_editor_differs_from_baseline_QMARK_(s){
if(cljs.core.truth_((function (){var and__5023__auto__ = hitteri.edit.handlers.description_sync.dom_available_QMARK_();
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))) && ((!((new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(s) == null)))));
} else {
return and__5023__auto__;
}
})())){
var temp__5825__auto__ = document.getElementById("update-description");
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hitteri.html.interface$.description_field.read_editor_canonical.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([el], 0)),hitteri.edit.handlers.description_sync.description_baseline_canonical(s));
} else {
return null;
}
} else {
return null;
}
});
hitteri.edit.handlers.description_sync.flush_update_description_from_dom_BANG_ = (function hitteri$edit$handlers$description_sync$flush_update_description_from_dom_BANG_(){

if(cljs.core.truth_((function (){var and__5023__auto__ = hitteri.edit.handlers.description_sync.dom_available_QMARK_();
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)))) && ((!((new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)) == null)))));
} else {
return and__5023__auto__;
}
})())){
var temp__5825__auto__ = document.getElementById("update-description");
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
hitteri.edit.handlers.description_trace.trace_BANG_(new cljs.core.Keyword(null,"flush","flush",-1138711199));

hitteri.app_ui.interface$.state.clear_update_status_BANG_();

var canonical = hitteri.html.interface$.description_field.read_editor_canonical.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([el], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.app_ui.interface$.state._BANG_state,(function (s){
var form = cljs.core.assoc_in(new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null),canonical);
var s__$1 = hitteri.edit.handlers.rows.select_or_create_empty_draft_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-form","update-form",475718790),form));
var errors = hitteri.edit.handlers.rows.compute_update_form_field_errors_for_state(s__$1);
var s__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s__$1,new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),errors);
return hitteri.edit.handlers.rows.sync_form_into_selected_row(s__$2);
}));

return hitteri.app_ui.interface$.effects.render_BANG_();
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=hitteri.edit.handlers.description_sync.js.map
