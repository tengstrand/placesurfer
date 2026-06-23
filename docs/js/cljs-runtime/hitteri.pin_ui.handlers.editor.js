goog.provide('hitteri.pin_ui.handlers.editor');
hitteri.pin_ui.handlers.editor.inline_auto_save_ms = (400);
if((typeof hitteri !== 'undefined') && (typeof hitteri.pin_ui !== 'undefined') && (typeof hitteri.pin_ui.handlers !== 'undefined') && (typeof hitteri.pin_ui.handlers.editor !== 'undefined') && (typeof hitteri.pin_ui.handlers.editor._BANG_inline_auto_save_timeout !== 'undefined')){
} else {
hitteri.pin_ui.handlers.editor._BANG_inline_auto_save_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
hitteri.pin_ui.handlers.editor.update_pins_mode_QMARK_ = (function hitteri$pin_ui$handlers$editor$update_pins_mode_QMARK_(s){
return hitteri.pin_ui.pure.update_context.update_pins_mode_QMARK_(s);
});
hitteri.pin_ui.handlers.editor.inline_edit_active_QMARK_ = (function hitteri$pin_ui$handlers$editor$inline_edit_active_QMARK_(s){
var and__5023__auto__ = hitteri.pin_ui.handlers.editor.update_pins_mode_QMARK_(s);
if(and__5023__auto__){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"pin-editor-inline?","pin-editor-inline?",766617935).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186).cljs$core$IFn$_invoke$arity$1(s));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
hitteri.pin_ui.handlers.editor.editor_snapshot = (function hitteri$pin_ui$handlers$editor$editor_snapshot(s){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$2(s,hitteri.pin_ui.pure.forms.default_form()),new cljs.core.Keyword(null,"baseline","baseline",1151033280),new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539).cljs$core$IFn$_invoke$arity$2(s,hitteri.pin_ui.pure.forms.default_form()),new cljs.core.Keyword(null,"search-query","search-query",-1077556709),new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873).cljs$core$IFn$_invoke$arity$2(s,""),new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"search-highlight-index","search-highlight-index",-1690344065),new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"search-loading?","search-loading?",2066737865),new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504).cljs$core$IFn$_invoke$arity$2(s,false),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154).cljs$core$IFn$_invoke$arity$1(s)], null);
});
hitteri.pin_ui.handlers.editor.restore_snapshot_BANG_ = (function hitteri$pin_ui$handlers$editor$restore_snapshot_BANG_(s,snapshot){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hitteri.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(snapshot),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),new cljs.core.Keyword(null,"baseline","baseline",1151033280).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873),new cljs.core.Keyword(null,"search-query","search-query",-1077556709).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288),new cljs.core.Keyword(null,"search-results","search-results",306464634).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446),new cljs.core.Keyword(null,"search-highlight-index","search-highlight-index",-1690344065).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504),new cljs.core.Keyword(null,"search-loading?","search-loading?",2066737865).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(snapshot)], 0))),new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873),new cljs.core.Keyword(null,"search-query","search-query",-1077556709).cljs$core$IFn$_invoke$arity$1(snapshot),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288),new cljs.core.Keyword(null,"search-results","search-results",306464634).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446),new cljs.core.Keyword(null,"search-highlight-index","search-highlight-index",-1690344065).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504),new cljs.core.Keyword(null,"search-loading?","search-loading?",2066737865).cljs$core$IFn$_invoke$arity$1(snapshot)], 0));
});
hitteri.pin_ui.handlers.editor.close_editor_BANG_ = (function hitteri$pin_ui$handlers$editor$close_editor_BANG_(s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-editor-inline?","pin-editor-inline?",766617935),false,new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),null,new cljs.core.Keyword(null,"pin-show-search?","pin-show-search?",-437021687),false,new cljs.core.Keyword(null,"pin-editor-snapshot","pin-editor-snapshot",-352879376),null], 0));
});
hitteri.pin_ui.handlers.editor.focus_pin_field_BANG_ = (function hitteri$pin_ui$handlers$editor$focus_pin_field_BANG_(element_id){
if(cljs.core.truth_(typeof document !== 'undefined' && document.getElementById)){
var seq__49722 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(60),(140),(260)], null));
var chunk__49723 = null;
var count__49724 = (0);
var i__49725 = (0);
while(true){
if((i__49725 < count__49724)){
var delay_ms = chunk__49723.cljs$core$IIndexed$_nth$arity$2(null,i__49725);
setTimeout(((function (seq__49722,chunk__49723,count__49724,i__49725,delay_ms){
return (function (){
var temp__5825__auto__ = document.getElementById(element_id);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return el.focus();
} else {
return null;
}
});})(seq__49722,chunk__49723,count__49724,i__49725,delay_ms))
,delay_ms);


var G__49783 = seq__49722;
var G__49784 = chunk__49723;
var G__49785 = count__49724;
var G__49786 = (i__49725 + (1));
seq__49722 = G__49783;
chunk__49723 = G__49784;
count__49724 = G__49785;
i__49725 = G__49786;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__49722);
if(temp__5825__auto__){
var seq__49722__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49722__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__49722__$1);
var G__49788 = cljs.core.chunk_rest(seq__49722__$1);
var G__49789 = c__5548__auto__;
var G__49790 = cljs.core.count(c__5548__auto__);
var G__49791 = (0);
seq__49722 = G__49788;
chunk__49723 = G__49789;
count__49724 = G__49790;
i__49725 = G__49791;
continue;
} else {
var delay_ms = cljs.core.first(seq__49722__$1);
setTimeout(((function (seq__49722,chunk__49723,count__49724,i__49725,delay_ms,seq__49722__$1,temp__5825__auto__){
return (function (){
var temp__5825__auto____$1 = document.getElementById(element_id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var el = temp__5825__auto____$1;
return el.focus();
} else {
return null;
}
});})(seq__49722,chunk__49723,count__49724,i__49725,delay_ms,seq__49722__$1,temp__5825__auto__))
,delay_ms);


var G__49795 = cljs.core.next(seq__49722__$1);
var G__49796 = null;
var G__49797 = (0);
var G__49798 = (0);
seq__49722 = G__49795;
chunk__49723 = G__49796;
count__49724 = G__49797;
i__49725 = G__49798;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
hitteri.pin_ui.handlers.editor.focus_pin_toolbar_search_BANG_ = (function hitteri$pin_ui$handlers$editor$focus_pin_toolbar_search_BANG_(){
return hitteri.pin_ui.handlers.editor.focus_pin_field_BANG_("pin-toolbar-search");
});
hitteri.pin_ui.handlers.editor.focus_pin_search_BANG_ = (function hitteri$pin_ui$handlers$editor$focus_pin_search_BANG_(){
return hitteri.pin_ui.handlers.editor.focus_pin_field_BANG_("pin-search");
});
hitteri.pin_ui.handlers.editor.focus_pin_name_BANG_ = (function hitteri$pin_ui$handlers$editor$focus_pin_name_BANG_(){
return hitteri.pin_ui.handlers.editor.focus_pin_field_BANG_("pin-name");
});
hitteri.pin_ui.handlers.editor.close_separator_overlay = (function hitteri$pin_ui$handlers$editor$close_separator_overlay(s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-separator-overlay-open?","pin-separator-overlay-open?",-1998521386),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),null,new cljs.core.Keyword(null,"pin-separator-overlay-snapshot","pin-separator-overlay-snapshot",-1756599608),null], 0));
});
hitteri.pin_ui.handlers.editor.reset_inline_idle_BANG_ = (function hitteri$pin_ui$handlers$editor$reset_inline_idle_BANG_(){
hitteri.pin_ui.handlers.state.swap_render_BANG_((function (p1__49737_SHARP_){
return hitteri.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__49737_SHARP_,new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-show-search?","pin-show-search?",-437021687),false,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),hitteri.pin_ui.pure.forms.default_form(),new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),hitteri.pin_ui.pure.forms.default_form(),new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0)));
}));

return hitteri.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));
});
hitteri.pin_ui.handlers.editor.maybe_save_inline_pin_BANG_ = (function hitteri$pin_ui$handlers$editor$maybe_save_inline_pin_BANG_(){
if(cljs.core.truth_(hitteri.pin_ui.handlers.editor.inline_edit_active_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)))){
if(hitteri.pin_ui.handlers.rows.save_enabled_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state))){
return hitteri.pin_ui.handlers.rows.save_pin_BANG_();
} else {
return null;
}
} else {
return null;
}
});
hitteri.pin_ui.handlers.editor.schedule_inline_auto_save_BANG_ = (function hitteri$pin_ui$handlers$editor$schedule_inline_auto_save_BANG_(){
if(cljs.core.truth_(hitteri.pin_ui.handlers.editor.inline_edit_active_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)))){
var temp__5825__auto___49801 = cljs.core.deref(hitteri.pin_ui.handlers.editor._BANG_inline_auto_save_timeout);
if(cljs.core.truth_(temp__5825__auto___49801)){
var timeout_49802 = temp__5825__auto___49801;
clearTimeout(timeout_49802);
} else {
}

return cljs.core.reset_BANG_(hitteri.pin_ui.handlers.editor._BANG_inline_auto_save_timeout,setTimeout((function (){
cljs.core.reset_BANG_(hitteri.pin_ui.handlers.editor._BANG_inline_auto_save_timeout,null);

return hitteri.pin_ui.handlers.editor.maybe_save_inline_pin_BANG_();
}),hitteri.pin_ui.handlers.editor.inline_auto_save_ms));
} else {
return null;
}
});
hitteri.pin_ui.handlers.editor.maybe_save_inline_pin_before_switch_BANG_ = (function hitteri$pin_ui$handlers$editor$maybe_save_inline_pin_before_switch_BANG_(){
var temp__5825__auto___49805 = cljs.core.deref(hitteri.pin_ui.handlers.editor._BANG_inline_auto_save_timeout);
if(cljs.core.truth_(temp__5825__auto___49805)){
var timeout_49806 = temp__5825__auto___49805;
clearTimeout(timeout_49806);

cljs.core.reset_BANG_(hitteri.pin_ui.handlers.editor._BANG_inline_auto_save_timeout,null);
} else {
}

return hitteri.pin_ui.handlers.editor.maybe_save_inline_pin_BANG_();
});
hitteri.pin_ui.handlers.editor.open_editor_BANG_ = (function hitteri$pin_ui$handlers$editor$open_editor_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49807 = arguments.length;
var i__5750__auto___49808 = (0);
while(true){
if((i__5750__auto___49808 < len__5749__auto___49807)){
args__5755__auto__.push((arguments[i__5750__auto___49808]));

var G__49809 = (i__5750__auto___49808 + (1));
i__5750__auto___49808 = G__49809;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return hitteri.pin_ui.handlers.editor.open_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(hitteri.pin_ui.handlers.editor.open_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (mode,form,p__49759){
var map__49760 = p__49759;
var map__49760__$1 = cljs.core.__destructure_map(map__49760);
var show_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49760__$1,new cljs.core.Keyword(null,"show-search?","show-search?",684663920),false);
var focus_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49760__$1,new cljs.core.Keyword(null,"focus-search?","focus-search?",-1381981880),false);
var focus_name_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49760__$1,new cljs.core.Keyword(null,"focus-name?","focus-name?",-1683047612),true);
var inline_QMARK_ = hitteri.pin_ui.handlers.editor.update_pins_mode_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
hitteri.pin_ui.handlers.state.swap_render_BANG_((function (s){
return hitteri.pin_ui.handlers.state.clear_search_ui(hitteri.app_ui.interface$.state.reset_description_editor_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hitteri.pin_ui.handlers.editor.close_separator_overlay(s),new cljs.core.Keyword(null,"pin-editor-snapshot","pin-editor-snapshot",-352879376),hitteri.pin_ui.handlers.editor.editor_snapshot(s),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),mode,new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159),(!(inline_QMARK_)),new cljs.core.Keyword(null,"pin-editor-inline?","pin-editor-inline?",766617935),inline_QMARK_,new cljs.core.Keyword(null,"pin-show-search?","pin-show-search?",-437021687),cljs.core.boolean$((function (){var and__5023__auto__ = inline_QMARK_;
if(and__5023__auto__){
return show_search_QMARK_;
} else {
return and__5023__auto__;
}
})()),new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),form,new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),form,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))));
}));

hitteri.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),(!(inline_QMARK_))], null)], 0));

if(cljs.core.truth_(focus_search_QMARK_)){
return hitteri.pin_ui.handlers.editor.focus_pin_search_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"edit","edit",-1641834166));
if(and__5023__auto__){
return focus_name_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return hitteri.pin_ui.handlers.editor.focus_pin_name_BANG_();
} else {
return null;

}
}
}));

(hitteri.pin_ui.handlers.editor.open_editor_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(hitteri.pin_ui.handlers.editor.open_editor_BANG_.cljs$lang$applyTo = (function (seq49753){
var G__49754 = cljs.core.first(seq49753);
var seq49753__$1 = cljs.core.next(seq49753);
var G__49755 = cljs.core.first(seq49753__$1);
var seq49753__$2 = cljs.core.next(seq49753__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49754,G__49755,seq49753__$2);
}));

hitteri.pin_ui.handlers.editor.start_pin_search_BANG_ = (function hitteri$pin_ui$handlers$editor$start_pin_search_BANG_(){
if(hitteri.pin_ui.handlers.editor.update_pins_mode_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state))){
hitteri.pin_ui.handlers.editor.open_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new","new",-2085437848),hitteri.pin_ui.pure.forms.default_form(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-search?","show-search?",684663920),false,new cljs.core.Keyword(null,"focus-name?","focus-name?",-1683047612),false], null)], 0));

return hitteri.pin_ui.handlers.editor.focus_pin_toolbar_search_BANG_();
} else {
return hitteri.pin_ui.handlers.editor.open_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new","new",-2085437848),hitteri.pin_ui.pure.forms.default_form(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-search?","show-search?",684663920),true,new cljs.core.Keyword(null,"focus-search?","focus-search?",-1381981880),true], null)], 0));
}
});
hitteri.pin_ui.handlers.editor.open_pin_editor_new_BANG_ = (function hitteri$pin_ui$handlers$editor$open_pin_editor_new_BANG_(){
if(hitteri.pin_ui.handlers.editor.update_pins_mode_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state))){
return hitteri.pin_ui.handlers.editor.start_pin_search_BANG_();
} else {
return hitteri.pin_ui.handlers.editor.open_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new","new",-2085437848),hitteri.pin_ui.pure.forms.default_form(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-search?","focus-search?",-1381981880),true], null)], 0));
}
});
hitteri.pin_ui.handlers.editor.open_pin_editor_edit_BANG_ = (function hitteri$pin_ui$handlers$editor$open_pin_editor_edit_BANG_(){
var temp__5825__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
var temp__5825__auto____$1 = hitteri.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)),id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var item = temp__5825__auto____$1;
if(hitteri.pin_ui.pure.rows.separator_item_QMARK_(item)){
return null;
} else {
return hitteri.pin_ui.handlers.editor.open_editor_BANG_(new cljs.core.Keyword(null,"edit","edit",-1641834166),hitteri.pin_ui.pure.forms.item__GT_form(item));
}
} else {
return null;
}
} else {
return null;
}
});
hitteri.pin_ui.handlers.editor.load_pin_into_inline_editor_BANG_ = (function hitteri$pin_ui$handlers$editor$load_pin_into_inline_editor_BANG_(id){
if(hitteri.pin_ui.handlers.editor.update_pins_mode_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state))){
hitteri.pin_ui.handlers.editor.maybe_save_inline_pin_before_switch_BANG_();

var temp__5825__auto__ = hitteri.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)),id);
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
if(hitteri.pin_ui.pure.rows.separator_item_QMARK_(item)){
return null;
} else {
return hitteri.pin_ui.handlers.editor.open_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"edit","edit",-1641834166),hitteri.pin_ui.pure.forms.item__GT_form(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-name?","focus-name?",-1683047612),false], null)], 0));
}
} else {
return null;
}
} else {
return null;
}
});
hitteri.pin_ui.handlers.editor.cancel_pin_editor_BANG_ = (function hitteri$pin_ui$handlers$editor$cancel_pin_editor_BANG_(){
hitteri.pin_ui.handlers.state.swap_render_BANG_((function (s){
return hitteri.pin_ui.handlers.editor.close_editor_BANG_(hitteri.pin_ui.handlers.editor.restore_snapshot_BANG_(s,new cljs.core.Keyword(null,"pin-editor-snapshot","pin-editor-snapshot",-352879376).cljs$core$IFn$_invoke$arity$2(s,hitteri.pin_ui.handlers.editor.editor_snapshot(s))));
}));

hitteri.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)))){
return hitteri.map_ui.interface$.close_all_popups_BANG_();
} else {
return null;
}
});
hitteri.pin_ui.handlers.editor.confirm_pin_editor_BANG_ = (function hitteri$pin_ui$handlers$editor$confirm_pin_editor_BANG_(){
var mode = new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
var G__49776_49816 = mode;
var G__49776_49817__$1 = (((G__49776_49816 instanceof cljs.core.Keyword))?G__49776_49816.fqn:null);
switch (G__49776_49817__$1) {
case "new":
hitteri.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case "edit":
hitteri.pin_ui.handlers.rows.save_pin_BANG_();

break;
default:

}

if(hitteri.pin_ui.handlers.editor.update_pins_mode_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state))){
return null;
} else {
return hitteri.pin_ui.handlers.state.swap_render_BANG_(hitteri.pin_ui.handlers.editor.close_editor_BANG_);
}
});
hitteri.pin_ui.handlers.editor.edit_enabled_QMARK_ = (function hitteri$pin_ui$handlers$editor$edit_enabled_QMARK_(state){
return cljs.core.boolean$((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
var temp__5825__auto____$1 = hitteri.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY),id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var item = temp__5825__auto____$1;
var and__5023__auto__ = (!(hitteri.pin_ui.pure.rows.separator_item_QMARK_(item)));
if(and__5023__auto__){
return cljs.core.some((function (p1__49777_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49777_SHARP_));
}),new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY));
} else {
return and__5023__auto__;
}
} else {
return null;
}
} else {
return null;
}
})());
});
hitteri.pin_ui.handlers.editor.ok_enabled_QMARK_ = (function hitteri$pin_ui$handlers$editor$ok_enabled_QMARK_(state){
var G__49778 = new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186).cljs$core$IFn$_invoke$arity$1(state);
var G__49778__$1 = (((G__49778 instanceof cljs.core.Keyword))?G__49778.fqn:null);
switch (G__49778__$1) {
case "new":
return hitteri.pin_ui.pure.forms.form_valid_QMARK_(new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$2(state,hitteri.pin_ui.pure.forms.default_form()));

break;
case "edit":
return hitteri.pin_ui.handlers.rows.save_enabled_QMARK_(state);

break;
default:
return false;

}
});
hitteri.pin_ui.handlers.editor.pin_form_dirty_QMARK_ = (function hitteri$pin_ui$handlers$editor$pin_form_dirty_QMARK_(state){
var form = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$2(state,hitteri.pin_ui.pure.forms.default_form());
var baseline = new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539).cljs$core$IFn$_invoke$arity$2(state,hitteri.pin_ui.pure.forms.default_form());
return hitteri.pin_ui.pure.forms.form_edited_from_baseline_QMARK_(form,baseline);
});

//# sourceMappingURL=hitteri.pin_ui.handlers.editor.js.map
