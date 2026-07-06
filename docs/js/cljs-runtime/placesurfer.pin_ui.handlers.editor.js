goog.provide('placesurfer.pin_ui.handlers.editor');
placesurfer.pin_ui.handlers.editor.inline_auto_save_ms = (400);
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.pin_ui !== 'undefined') && (typeof placesurfer.pin_ui.handlers !== 'undefined') && (typeof placesurfer.pin_ui.handlers.editor !== 'undefined') && (typeof placesurfer.pin_ui.handlers.editor._BANG_inline_auto_save_timeout !== 'undefined')){
} else {
placesurfer.pin_ui.handlers.editor._BANG_inline_auto_save_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
placesurfer.pin_ui.handlers.editor.update_pins_mode_QMARK_ = (function placesurfer$pin_ui$handlers$editor$update_pins_mode_QMARK_(s){
return placesurfer.pin_ui.pure.update_context.update_pins_mode_QMARK_(s);
});
placesurfer.pin_ui.handlers.editor.inline_edit_active_QMARK_ = (function placesurfer$pin_ui$handlers$editor$inline_edit_active_QMARK_(s){
var and__5023__auto__ = placesurfer.pin_ui.handlers.editor.update_pins_mode_QMARK_(s);
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
placesurfer.pin_ui.handlers.editor.editor_snapshot = (function placesurfer$pin_ui$handlers$editor$editor_snapshot(s){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$2(s,placesurfer.pin_ui.pure.forms.default_form()),new cljs.core.Keyword(null,"baseline","baseline",1151033280),new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539).cljs$core$IFn$_invoke$arity$2(s,placesurfer.pin_ui.pure.forms.default_form()),new cljs.core.Keyword(null,"search-query","search-query",-1077556709),new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873).cljs$core$IFn$_invoke$arity$2(s,""),new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"search-highlight-index","search-highlight-index",-1690344065),new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"search-loading?","search-loading?",2066737865),new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504).cljs$core$IFn$_invoke$arity$2(s,false),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154).cljs$core$IFn$_invoke$arity$1(s)], null);
});
placesurfer.pin_ui.handlers.editor.restore_snapshot_BANG_ = (function placesurfer$pin_ui$handlers$editor$restore_snapshot_BANG_(s,snapshot){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(placesurfer.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(snapshot),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),new cljs.core.Keyword(null,"baseline","baseline",1151033280).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873),new cljs.core.Keyword(null,"search-query","search-query",-1077556709).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288),new cljs.core.Keyword(null,"search-results","search-results",306464634).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446),new cljs.core.Keyword(null,"search-highlight-index","search-highlight-index",-1690344065).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504),new cljs.core.Keyword(null,"search-loading?","search-loading?",2066737865).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(snapshot)], 0))),new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873),new cljs.core.Keyword(null,"search-query","search-query",-1077556709).cljs$core$IFn$_invoke$arity$1(snapshot),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288),new cljs.core.Keyword(null,"search-results","search-results",306464634).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446),new cljs.core.Keyword(null,"search-highlight-index","search-highlight-index",-1690344065).cljs$core$IFn$_invoke$arity$1(snapshot),new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504),new cljs.core.Keyword(null,"search-loading?","search-loading?",2066737865).cljs$core$IFn$_invoke$arity$1(snapshot)], 0));
});
placesurfer.pin_ui.handlers.editor.close_editor_BANG_ = (function placesurfer$pin_ui$handlers$editor$close_editor_BANG_(s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-editor-inline?","pin-editor-inline?",766617935),false,new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),null,new cljs.core.Keyword(null,"pin-show-search?","pin-show-search?",-437021687),false,new cljs.core.Keyword(null,"pin-editor-snapshot","pin-editor-snapshot",-352879376),null], 0));
});
placesurfer.pin_ui.handlers.editor.focus_pin_field_BANG_ = (function placesurfer$pin_ui$handlers$editor$focus_pin_field_BANG_(element_id){
if(cljs.core.truth_(typeof document !== 'undefined' && document.getElementById)){
var seq__66154 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(60),(140),(260)], null));
var chunk__66155 = null;
var count__66156 = (0);
var i__66157 = (0);
while(true){
if((i__66157 < count__66156)){
var delay_ms = chunk__66155.cljs$core$IIndexed$_nth$arity$2(null,i__66157);
setTimeout(((function (seq__66154,chunk__66155,count__66156,i__66157,delay_ms){
return (function (){
var temp__5825__auto__ = document.getElementById(element_id);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return el.focus();
} else {
return null;
}
});})(seq__66154,chunk__66155,count__66156,i__66157,delay_ms))
,delay_ms);


var G__66192 = seq__66154;
var G__66193 = chunk__66155;
var G__66194 = count__66156;
var G__66195 = (i__66157 + (1));
seq__66154 = G__66192;
chunk__66155 = G__66193;
count__66156 = G__66194;
i__66157 = G__66195;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66154);
if(temp__5825__auto__){
var seq__66154__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66154__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__66154__$1);
var G__66196 = cljs.core.chunk_rest(seq__66154__$1);
var G__66197 = c__5548__auto__;
var G__66198 = cljs.core.count(c__5548__auto__);
var G__66199 = (0);
seq__66154 = G__66196;
chunk__66155 = G__66197;
count__66156 = G__66198;
i__66157 = G__66199;
continue;
} else {
var delay_ms = cljs.core.first(seq__66154__$1);
setTimeout(((function (seq__66154,chunk__66155,count__66156,i__66157,delay_ms,seq__66154__$1,temp__5825__auto__){
return (function (){
var temp__5825__auto____$1 = document.getElementById(element_id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var el = temp__5825__auto____$1;
return el.focus();
} else {
return null;
}
});})(seq__66154,chunk__66155,count__66156,i__66157,delay_ms,seq__66154__$1,temp__5825__auto__))
,delay_ms);


var G__66200 = cljs.core.next(seq__66154__$1);
var G__66201 = null;
var G__66202 = (0);
var G__66203 = (0);
seq__66154 = G__66200;
chunk__66155 = G__66201;
count__66156 = G__66202;
i__66157 = G__66203;
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
placesurfer.pin_ui.handlers.editor.focus_pin_toolbar_search_BANG_ = (function placesurfer$pin_ui$handlers$editor$focus_pin_toolbar_search_BANG_(){
return placesurfer.pin_ui.handlers.editor.focus_pin_field_BANG_("pin-toolbar-search");
});
placesurfer.pin_ui.handlers.editor.focus_pin_search_BANG_ = (function placesurfer$pin_ui$handlers$editor$focus_pin_search_BANG_(){
return placesurfer.pin_ui.handlers.editor.focus_pin_field_BANG_("pin-search");
});
placesurfer.pin_ui.handlers.editor.focus_pin_name_BANG_ = (function placesurfer$pin_ui$handlers$editor$focus_pin_name_BANG_(){
return placesurfer.pin_ui.handlers.editor.focus_pin_field_BANG_("pin-name");
});
placesurfer.pin_ui.handlers.editor.close_separator_overlay = (function placesurfer$pin_ui$handlers$editor$close_separator_overlay(s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-separator-overlay-open?","pin-separator-overlay-open?",-1998521386),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),null,new cljs.core.Keyword(null,"pin-separator-overlay-snapshot","pin-separator-overlay-snapshot",-1756599608),null], 0));
});
placesurfer.pin_ui.handlers.editor.reset_inline_idle_BANG_ = (function placesurfer$pin_ui$handlers$editor$reset_inline_idle_BANG_(){
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (p1__66162_SHARP_){
return placesurfer.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__66162_SHARP_,new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-show-search?","pin-show-search?",-437021687),false,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),placesurfer.pin_ui.pure.forms.default_form(),new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),placesurfer.pin_ui.pure.forms.default_form(),new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0)));
}));

return placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));
});
placesurfer.pin_ui.handlers.editor.maybe_save_inline_pin_BANG_ = (function placesurfer$pin_ui$handlers$editor$maybe_save_inline_pin_BANG_(){
if(cljs.core.truth_(placesurfer.pin_ui.handlers.editor.inline_edit_active_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
if(placesurfer.pin_ui.handlers.rows.save_enabled_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
return placesurfer.pin_ui.handlers.rows.save_pin_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-map?","focus-map?",1367256164),false], null));
} else {
return null;
}
} else {
return null;
}
});
placesurfer.pin_ui.handlers.editor.schedule_inline_auto_save_BANG_ = (function placesurfer$pin_ui$handlers$editor$schedule_inline_auto_save_BANG_(){
if(cljs.core.truth_(placesurfer.pin_ui.handlers.editor.inline_edit_active_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
var temp__5825__auto___66204 = cljs.core.deref(placesurfer.pin_ui.handlers.editor._BANG_inline_auto_save_timeout);
if(cljs.core.truth_(temp__5825__auto___66204)){
var timeout_66205 = temp__5825__auto___66204;
clearTimeout(timeout_66205);
} else {
}

return cljs.core.reset_BANG_(placesurfer.pin_ui.handlers.editor._BANG_inline_auto_save_timeout,setTimeout((function (){
cljs.core.reset_BANG_(placesurfer.pin_ui.handlers.editor._BANG_inline_auto_save_timeout,null);

return placesurfer.pin_ui.handlers.editor.maybe_save_inline_pin_BANG_();
}),placesurfer.pin_ui.handlers.editor.inline_auto_save_ms));
} else {
return null;
}
});
placesurfer.pin_ui.handlers.editor.maybe_save_inline_pin_before_switch_BANG_ = (function placesurfer$pin_ui$handlers$editor$maybe_save_inline_pin_before_switch_BANG_(){
var temp__5825__auto___66206 = cljs.core.deref(placesurfer.pin_ui.handlers.editor._BANG_inline_auto_save_timeout);
if(cljs.core.truth_(temp__5825__auto___66206)){
var timeout_66207 = temp__5825__auto___66206;
clearTimeout(timeout_66207);

cljs.core.reset_BANG_(placesurfer.pin_ui.handlers.editor._BANG_inline_auto_save_timeout,null);
} else {
}

return placesurfer.pin_ui.handlers.editor.maybe_save_inline_pin_BANG_();
});
placesurfer.pin_ui.handlers.editor.open_editor_BANG_ = (function placesurfer$pin_ui$handlers$editor$open_editor_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___66208 = arguments.length;
var i__5750__auto___66209 = (0);
while(true){
if((i__5750__auto___66209 < len__5749__auto___66208)){
args__5755__auto__.push((arguments[i__5750__auto___66209]));

var G__66210 = (i__5750__auto___66209 + (1));
i__5750__auto___66209 = G__66210;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return placesurfer.pin_ui.handlers.editor.open_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(placesurfer.pin_ui.handlers.editor.open_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (mode,form,p__66180){
var map__66182 = p__66180;
var map__66182__$1 = cljs.core.__destructure_map(map__66182);
var show_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66182__$1,new cljs.core.Keyword(null,"show-search?","show-search?",684663920),false);
var focus_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66182__$1,new cljs.core.Keyword(null,"focus-search?","focus-search?",-1381981880),false);
var focus_name_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66182__$1,new cljs.core.Keyword(null,"focus-name?","focus-name?",-1683047612),true);
var inline_QMARK_ = placesurfer.pin_ui.handlers.editor.update_pins_mode_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (s){
return placesurfer.pin_ui.handlers.state.clear_search_ui(placesurfer.app_ui.interface$.state.reset_description_editor_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(placesurfer.pin_ui.handlers.editor.close_separator_overlay(s),new cljs.core.Keyword(null,"pin-editor-snapshot","pin-editor-snapshot",-352879376),placesurfer.pin_ui.handlers.editor.editor_snapshot(s),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),mode,new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159),(!(inline_QMARK_)),new cljs.core.Keyword(null,"pin-editor-inline?","pin-editor-inline?",766617935),inline_QMARK_,new cljs.core.Keyword(null,"pin-show-search?","pin-show-search?",-437021687),cljs.core.boolean$((function (){var and__5023__auto__ = inline_QMARK_;
if(and__5023__auto__){
return show_search_QMARK_;
} else {
return and__5023__auto__;
}
})()),new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),form,new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),form,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))));
}));

placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),(!(inline_QMARK_))], null)], 0));

if(cljs.core.truth_(focus_search_QMARK_)){
return placesurfer.pin_ui.handlers.editor.focus_pin_search_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"edit","edit",-1641834166));
if(and__5023__auto__){
return focus_name_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return placesurfer.pin_ui.handlers.editor.focus_pin_name_BANG_();
} else {
return null;

}
}
}));

(placesurfer.pin_ui.handlers.editor.open_editor_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(placesurfer.pin_ui.handlers.editor.open_editor_BANG_.cljs$lang$applyTo = (function (seq66163){
var G__66164 = cljs.core.first(seq66163);
var seq66163__$1 = cljs.core.next(seq66163);
var G__66165 = cljs.core.first(seq66163__$1);
var seq66163__$2 = cljs.core.next(seq66163__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66164,G__66165,seq66163__$2);
}));

placesurfer.pin_ui.handlers.editor.start_pin_search_BANG_ = (function placesurfer$pin_ui$handlers$editor$start_pin_search_BANG_(){
if(placesurfer.pin_ui.handlers.editor.update_pins_mode_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
placesurfer.pin_ui.handlers.editor.open_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new","new",-2085437848),placesurfer.pin_ui.pure.forms.default_form(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-search?","show-search?",684663920),false,new cljs.core.Keyword(null,"focus-name?","focus-name?",-1683047612),false], null)], 0));

return placesurfer.pin_ui.handlers.editor.focus_pin_toolbar_search_BANG_();
} else {
return placesurfer.pin_ui.handlers.editor.open_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new","new",-2085437848),placesurfer.pin_ui.pure.forms.default_form(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-search?","show-search?",684663920),true,new cljs.core.Keyword(null,"focus-search?","focus-search?",-1381981880),true], null)], 0));
}
});
placesurfer.pin_ui.handlers.editor.open_pin_editor_new_BANG_ = (function placesurfer$pin_ui$handlers$editor$open_pin_editor_new_BANG_(){
if(placesurfer.pin_ui.handlers.editor.update_pins_mode_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
return placesurfer.pin_ui.handlers.editor.start_pin_search_BANG_();
} else {
return placesurfer.pin_ui.handlers.editor.open_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new","new",-2085437848),placesurfer.pin_ui.pure.forms.default_form(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-search?","focus-search?",-1381981880),true], null)], 0));
}
});
placesurfer.pin_ui.handlers.editor.open_pin_editor_edit_BANG_ = (function placesurfer$pin_ui$handlers$editor$open_pin_editor_edit_BANG_(){
var temp__5825__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
var temp__5825__auto____$1 = placesurfer.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)),id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var item = temp__5825__auto____$1;
if(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)){
return null;
} else {
return placesurfer.pin_ui.handlers.editor.open_editor_BANG_(new cljs.core.Keyword(null,"edit","edit",-1641834166),placesurfer.pin_ui.pure.forms.item__GT_form(item));
}
} else {
return null;
}
} else {
return null;
}
});
placesurfer.pin_ui.handlers.editor.load_pin_into_inline_editor_BANG_ = (function placesurfer$pin_ui$handlers$editor$load_pin_into_inline_editor_BANG_(id){
if(placesurfer.pin_ui.handlers.editor.update_pins_mode_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
placesurfer.pin_ui.handlers.editor.maybe_save_inline_pin_before_switch_BANG_();

var temp__5825__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)),id);
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
if(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)){
return null;
} else {
return placesurfer.pin_ui.handlers.editor.open_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"edit","edit",-1641834166),placesurfer.pin_ui.pure.forms.item__GT_form(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-name?","focus-name?",-1683047612),false], null)], 0));
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Add a blank pin row to the list and open it in the inline editor.
 */
placesurfer.pin_ui.handlers.editor.open_pin_editor_new_empty_BANG_ = (function placesurfer$pin_ui$handlers$editor$open_pin_editor_new_empty_BANG_(){
if(placesurfer.pin_ui.handlers.editor.update_pins_mode_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
var new_id = placesurfer.pin_ui.handlers.rows.add_empty_pin_item_BANG_();
return placesurfer.pin_ui.handlers.editor.load_pin_into_inline_editor_BANG_(new_id);
} else {
return null;
}
});
/**
 * Add a blank pin at the given coordinates, select it, open the inline editor,
 * and return the new pin's id.
 */
placesurfer.pin_ui.handlers.editor.open_pin_editor_at_coords_BANG_ = (function placesurfer$pin_ui$handlers$editor$open_pin_editor_at_coords_BANG_(var_args){
var G__66188 = arguments.length;
switch (G__66188) {
case 2:
return placesurfer.pin_ui.handlers.editor.open_pin_editor_at_coords_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return placesurfer.pin_ui.handlers.editor.open_pin_editor_at_coords_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.pin_ui.handlers.editor.open_pin_editor_at_coords_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (longitude,latitude){
return placesurfer.pin_ui.handlers.editor.open_pin_editor_at_coords_BANG_.cljs$core$IFn$_invoke$arity$3(longitude,latitude,cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.pin_ui.handlers.editor.open_pin_editor_at_coords_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (longitude,latitude,extra_fields){
if(placesurfer.pin_ui.handlers.editor.update_pins_mode_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
placesurfer.pin_ui.handlers.editor.maybe_save_inline_pin_before_switch_BANG_();

var new_id = placesurfer.pin_ui.handlers.rows.add_pin_item_at_coords_BANG_.cljs$core$IFn$_invoke$arity$3(longitude,latitude,extra_fields);
placesurfer.pin_ui.handlers.editor.load_pin_into_inline_editor_BANG_(new_id);

return new_id;
} else {
return null;
}
}));

(placesurfer.pin_ui.handlers.editor.open_pin_editor_at_coords_BANG_.cljs$lang$maxFixedArity = 3);

placesurfer.pin_ui.handlers.editor.cancel_pin_editor_BANG_ = (function placesurfer$pin_ui$handlers$editor$cancel_pin_editor_BANG_(){
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (s){
return placesurfer.pin_ui.handlers.editor.close_editor_BANG_(placesurfer.pin_ui.handlers.editor.restore_snapshot_BANG_(s,new cljs.core.Keyword(null,"pin-editor-snapshot","pin-editor-snapshot",-352879376).cljs$core$IFn$_invoke$arity$2(s,placesurfer.pin_ui.handlers.editor.editor_snapshot(s))));
}));

placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
return placesurfer.map_ui.interface$.close_all_popups_BANG_();
} else {
return null;
}
});
placesurfer.pin_ui.handlers.editor.confirm_pin_editor_BANG_ = (function placesurfer$pin_ui$handlers$editor$confirm_pin_editor_BANG_(){
var mode = new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
var G__66189_66212 = mode;
var G__66189_66213__$1 = (((G__66189_66212 instanceof cljs.core.Keyword))?G__66189_66212.fqn:null);
switch (G__66189_66213__$1) {
case "new":
placesurfer.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case "edit":
placesurfer.pin_ui.handlers.rows.save_pin_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
default:

}

if(placesurfer.pin_ui.handlers.editor.update_pins_mode_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
return null;
} else {
return placesurfer.pin_ui.handlers.state.swap_render_BANG_(placesurfer.pin_ui.handlers.editor.close_editor_BANG_);
}
});
placesurfer.pin_ui.handlers.editor.edit_enabled_QMARK_ = (function placesurfer$pin_ui$handlers$editor$edit_enabled_QMARK_(state){
return cljs.core.boolean$((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
var temp__5825__auto____$1 = placesurfer.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY),id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var item = temp__5825__auto____$1;
var and__5023__auto__ = (!(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)));
if(and__5023__auto__){
return cljs.core.some((function (p1__66190_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__66190_SHARP_));
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
placesurfer.pin_ui.handlers.editor.ok_enabled_QMARK_ = (function placesurfer$pin_ui$handlers$editor$ok_enabled_QMARK_(state){
var G__66191 = new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186).cljs$core$IFn$_invoke$arity$1(state);
var G__66191__$1 = (((G__66191 instanceof cljs.core.Keyword))?G__66191.fqn:null);
switch (G__66191__$1) {
case "new":
return placesurfer.pin_ui.pure.forms.form_valid_QMARK_(new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$2(state,placesurfer.pin_ui.pure.forms.default_form()));

break;
case "edit":
return placesurfer.pin_ui.handlers.rows.save_enabled_QMARK_(state);

break;
default:
return false;

}
});
placesurfer.pin_ui.handlers.editor.pin_form_dirty_QMARK_ = (function placesurfer$pin_ui$handlers$editor$pin_form_dirty_QMARK_(state){
var form = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$2(state,placesurfer.pin_ui.pure.forms.default_form());
var baseline = new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539).cljs$core$IFn$_invoke$arity$2(state,placesurfer.pin_ui.pure.forms.default_form());
return placesurfer.pin_ui.pure.forms.form_edited_from_baseline_QMARK_(form,baseline);
});

//# sourceMappingURL=placesurfer.pin_ui.handlers.editor.js.map
