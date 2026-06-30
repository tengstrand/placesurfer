goog.provide('placesurfer.pin_ui.handlers.separator');
placesurfer.pin_ui.handlers.separator.close_overlay = (function placesurfer$pin_ui$handlers$separator$close_overlay(s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-separator-overlay-open?","pin-separator-overlay-open?",-1998521386),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),null,new cljs.core.Keyword(null,"pin-separator-overlay-snapshot","pin-separator-overlay-snapshot",-1756599608),null,new cljs.core.Keyword(null,"pin-separator-overlay-draft-label","pin-separator-overlay-draft-label",-1116073608),"",new cljs.core.Keyword(null,"pin-separator-overlay-editing-id","pin-separator-overlay-editing-id",1360013865),null], 0));
});
placesurfer.pin_ui.handlers.separator.overlay_snapshot = (function placesurfer$pin_ui$handlers$separator$overlay_snapshot(s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044),new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088).cljs$core$IFn$_invoke$arity$1(s)], null);
});
placesurfer.pin_ui.handlers.separator.restore_overlay_snapshot_BANG_ = (function placesurfer$pin_ui$handlers$separator$restore_overlay_snapshot_BANG_(s,snapshot){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$2(snapshot,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044).cljs$core$IFn$_invoke$arity$1(snapshot)], 0));
});
placesurfer.pin_ui.handlers.separator.cancel_pin_editor_if_open_BANG_ = (function placesurfer$pin_ui$handlers$separator$cancel_pin_editor_if_open_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
return placesurfer.pin_ui.handlers.editor.cancel_pin_editor_BANG_();
} else {
return null;
}
});
placesurfer.pin_ui.handlers.separator.open_pin_separator_overlay_BANG_ = (function placesurfer$pin_ui$handlers$separator$open_pin_separator_overlay_BANG_(){
placesurfer.pin_ui.handlers.separator.cancel_pin_editor_if_open_BANG_();

return placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (s){
var overlay_rows = placesurfer.pin_ui.pure.rows.separator_overlay_rows_from_items(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-separator-overlay-open?","pin-separator-overlay-open?",-1998521386),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),overlay_rows,new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(overlay_rows)),new cljs.core.Keyword(null,"pin-separator-overlay-snapshot","pin-separator-overlay-snapshot",-1756599608),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),overlay_rows,new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(overlay_rows))], null)], 0));
}));
});
placesurfer.pin_ui.handlers.separator.cancel_pin_separator_overlay_BANG_ = (function placesurfer$pin_ui$handlers$separator$cancel_pin_separator_overlay_BANG_(){
return placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (s){
return placesurfer.pin_ui.handlers.separator.close_overlay(placesurfer.pin_ui.handlers.separator.restore_overlay_snapshot_BANG_(s,new cljs.core.Keyword(null,"pin-separator-overlay-snapshot","pin-separator-overlay-snapshot",-1756599608).cljs$core$IFn$_invoke$arity$2(s,placesurfer.pin_ui.handlers.separator.overlay_snapshot(s))));
}));
});
placesurfer.pin_ui.handlers.separator.select_separator_overlay_row_BANG_ = (function placesurfer$pin_ui$handlers$separator$select_separator_overlay_row_BANG_(id){
return placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (p1__95947_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__95947_SHARP_,new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),id);
}));
});
placesurfer.pin_ui.handlers.separator.set_separator_overlay_label_BANG_ = (function placesurfer$pin_ui$handlers$separator$set_separator_overlay_label_BANG_(id,label){
return placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),(function (overlay_rows){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()));
} else {
return row;
}
}),overlay_rows);
}));
}));
});
placesurfer.pin_ui.handlers.separator.focus_separator_overlay_input_BANG_ = (function placesurfer$pin_ui$handlers$separator$focus_separator_overlay_input_BANG_(id){
if(cljs.core.truth_(typeof document !== 'undefined' && document.getElementById)){
var element_id = ["pin-separator-manage-input-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var seq__95955 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(60),(140),(260)], null));
var chunk__95956 = null;
var count__95957 = (0);
var i__95958 = (0);
while(true){
if((i__95958 < count__95957)){
var delay_ms = chunk__95956.cljs$core$IIndexed$_nth$arity$2(null,i__95958);
setTimeout(((function (seq__95955,chunk__95956,count__95957,i__95958,delay_ms,element_id){
return (function (){
var temp__5825__auto__ = document.getElementById(element_id);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return el.focus();
} else {
return null;
}
});})(seq__95955,chunk__95956,count__95957,i__95958,delay_ms,element_id))
,delay_ms);


var G__95966 = seq__95955;
var G__95967 = chunk__95956;
var G__95968 = count__95957;
var G__95969 = (i__95958 + (1));
seq__95955 = G__95966;
chunk__95956 = G__95967;
count__95957 = G__95968;
i__95958 = G__95969;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__95955);
if(temp__5825__auto__){
var seq__95955__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__95955__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__95955__$1);
var G__95970 = cljs.core.chunk_rest(seq__95955__$1);
var G__95971 = c__5548__auto__;
var G__95972 = cljs.core.count(c__5548__auto__);
var G__95973 = (0);
seq__95955 = G__95970;
chunk__95956 = G__95971;
count__95957 = G__95972;
i__95958 = G__95973;
continue;
} else {
var delay_ms = cljs.core.first(seq__95955__$1);
setTimeout(((function (seq__95955,chunk__95956,count__95957,i__95958,delay_ms,seq__95955__$1,temp__5825__auto__,element_id){
return (function (){
var temp__5825__auto____$1 = document.getElementById(element_id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var el = temp__5825__auto____$1;
return el.focus();
} else {
return null;
}
});})(seq__95955,chunk__95956,count__95957,i__95958,delay_ms,seq__95955__$1,temp__5825__auto__,element_id))
,delay_ms);


var G__95974 = cljs.core.next(seq__95955__$1);
var G__95975 = null;
var G__95976 = (0);
var G__95977 = (0);
seq__95955 = G__95974;
chunk__95956 = G__95975;
count__95957 = G__95976;
i__95958 = G__95977;
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
placesurfer.pin_ui.handlers.separator.add_separator_overlay_row_BANG_ = (function placesurfer$pin_ui$handlers$separator$add_separator_overlay_row_BANG_(){
var id = placesurfer.pin_ui.pure.storage.new_pin_id();
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"label","label",1718410804),"",new cljs.core.Keyword(null,"new?","new?",777958557),true], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),id], 0));
}));

return placesurfer.pin_ui.handlers.separator.focus_separator_overlay_input_BANG_(id);
});
placesurfer.pin_ui.handlers.separator.delete_separator_overlay_row_BANG_ = (function placesurfer$pin_ui$handlers$separator$delete_separator_overlay_row_BANG_(id){
return placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (s){
var overlay_rows = cljs.core.vec(new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY));
var remaining = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__95961_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__95961_SHARP_));
}),overlay_rows));
var selected_id = new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088).cljs$core$IFn$_invoke$arity$1(s);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),remaining,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_id,id))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(remaining)):selected_id)], 0));
}));
});
placesurfer.pin_ui.handlers.separator.persist_items_BANG_ = (function placesurfer$pin_ui$handlers$separator$persist_items_BANG_(items){
return placesurfer.pin_ui.pure.storage.save_pins_BANG_(items);
});
placesurfer.pin_ui.handlers.separator.confirm_separator_overlay_BANG_ = (function placesurfer$pin_ui$handlers$separator$confirm_separator_overlay_BANG_(){
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (s){
var next_items = placesurfer.pin_ui.pure.rows.apply_separator_overlay_edits(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY));
cljs.core.reset_BANG_(saved,next_items);

return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1(placesurfer.pin_ui.handlers.separator.close_overlay(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items)));
}));

if(cljs.core.truth_(cljs.core.deref(saved))){
placesurfer.pin_ui.handlers.separator.persist_items_BANG_(cljs.core.deref(saved));

return placesurfer.pin_ui.handlers.state.render_BANG_();
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.pin_ui.handlers.separator.js.map
