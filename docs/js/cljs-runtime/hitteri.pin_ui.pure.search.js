goog.provide('hitteri.pin_ui.pure.search');
hitteri.pin_ui.pure.search.highlight_index_for_results = (function hitteri$pin_ui$pure$search$highlight_index_for_results(results){
if(cljs.core.seq(results)){
return (0);
} else {
return null;
}
});
hitteri.pin_ui.pure.search.step_highlight_index = (function hitteri$pin_ui$pure$search$step_highlight_index(current_index,result_count,delta){
return hitteri.country.interface$.step_highlight_index(current_index,result_count,delta);
});
hitteri.pin_ui.pure.search.highlighted_result = (function hitteri$pin_ui$pure$search$highlighted_result(results,highlight_index){
if(((cljs.core.seq(results)) && ((!((highlight_index == null)))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(results,highlight_index,null);
} else {
return null;
}
});
/**
 * True for Enter / NumpadEnter without modifiers.
 */
hitteri.pin_ui.pure.search.enter_key_QMARK_ = (function hitteri$pin_ui$pure$search$enter_key_QMARK_(e){
var and__5023__auto__ = e;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.not(e.repeat);
if(and__5023__auto____$1){
var and__5023__auto____$2 = cljs.core.not(e.ctrlKey);
if(and__5023__auto____$2){
var and__5023__auto____$3 = cljs.core.not(e.metaKey);
if(and__5023__auto____$3){
var and__5023__auto____$4 = cljs.core.not(e.altKey);
if(and__5023__auto____$4){
var G__40740 = e.key;
var fexpr__40739 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NumpadEnter",null,"Enter",null], null), null);
return (fexpr__40739.cljs$core$IFn$_invoke$arity$1 ? fexpr__40739.cljs$core$IFn$_invoke$arity$1(G__40740) : fexpr__40739.call(null,G__40740));
} else {
return and__5023__auto____$4;
}
} else {
return and__5023__auto____$3;
}
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
/**
 * Return [:select index] for Enter in the pin search field when results are open.
 */
hitteri.pin_ui.pure.search.enter_action = (function hitteri$pin_ui$pure$search$enter_action(results,_form_valid_QMARK_,highlight_index){
if(cljs.core.seq(results)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),(function (){var or__5025__auto__ = highlight_index;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})()], null);
} else {
return null;
}
});

//# sourceMappingURL=hitteri.pin_ui.pure.search.js.map
