goog.provide('placesurfer.group_ui.handlers.groups');
placesurfer.group_ui.handlers.groups.clear_draft = (function placesurfer$group_ui$handlers$groups$clear_draft(s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-separator-overlay-draft-label","pin-separator-overlay-draft-label",-1116073608),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-editing-id","pin-separator-overlay-editing-id",1360013865),null], 0));
});
placesurfer.group_ui.handlers.groups.focus_group_draft_input_BANG_ = (function placesurfer$group_ui$handlers$groups$focus_group_draft_input_BANG_(){
if(cljs.core.truth_(typeof document !== 'undefined' && document.getElementById)){
var seq__94870 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(60),(140),(260)], null));
var chunk__94871 = null;
var count__94872 = (0);
var i__94873 = (0);
while(true){
if((i__94873 < count__94872)){
var delay_ms = chunk__94871.cljs$core$IIndexed$_nth$arity$2(null,i__94873);
setTimeout(((function (seq__94870,chunk__94871,count__94872,i__94873,delay_ms){
return (function (){
var temp__5825__auto__ = document.getElementById("group-draft-input");
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return el.focus();
} else {
return null;
}
});})(seq__94870,chunk__94871,count__94872,i__94873,delay_ms))
,delay_ms);


var G__94952 = seq__94870;
var G__94953 = chunk__94871;
var G__94954 = count__94872;
var G__94955 = (i__94873 + (1));
seq__94870 = G__94952;
chunk__94871 = G__94953;
count__94872 = G__94954;
i__94873 = G__94955;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__94870);
if(temp__5825__auto__){
var seq__94870__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__94870__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__94870__$1);
var G__94956 = cljs.core.chunk_rest(seq__94870__$1);
var G__94957 = c__5548__auto__;
var G__94958 = cljs.core.count(c__5548__auto__);
var G__94959 = (0);
seq__94870 = G__94956;
chunk__94871 = G__94957;
count__94872 = G__94958;
i__94873 = G__94959;
continue;
} else {
var delay_ms = cljs.core.first(seq__94870__$1);
setTimeout(((function (seq__94870,chunk__94871,count__94872,i__94873,delay_ms,seq__94870__$1,temp__5825__auto__){
return (function (){
var temp__5825__auto____$1 = document.getElementById("group-draft-input");
if(cljs.core.truth_(temp__5825__auto____$1)){
var el = temp__5825__auto____$1;
return el.focus();
} else {
return null;
}
});})(seq__94870,chunk__94871,count__94872,i__94873,delay_ms,seq__94870__$1,temp__5825__auto__))
,delay_ms);


var G__94961 = cljs.core.next(seq__94870__$1);
var G__94962 = null;
var G__94963 = (0);
var G__94964 = (0);
seq__94870 = G__94961;
chunk__94871 = G__94962;
count__94872 = G__94963;
i__94873 = G__94964;
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
placesurfer.group_ui.handlers.groups.sync_groups_from_items = (function placesurfer$group_ui$handlers$groups$sync_groups_from_items(s,items){
var overlay_rows = placesurfer.pin_ui.interface$.rows.separator_overlay_rows_from_items.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items], 0));
var selected_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(overlay_rows));
return placesurfer.pin_ui.interface$.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.group_ui.handlers.groups.clear_draft(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),overlay_rows,new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),selected_id,new cljs.core.Keyword(null,"pin-separator-overlay-snapshot","pin-separator-overlay-snapshot",-1756599608),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),overlay_rows,new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044),selected_id], null)], 0)))], 0));
});
placesurfer.group_ui.handlers.groups.cancel_pin_editor_if_open_BANG_ = (function placesurfer$group_ui$handlers$groups$cancel_pin_editor_if_open_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
return placesurfer.pin_ui.interface$.handlers.editor.cancel_pin_editor_BANG_();
} else {
return null;
}
});
placesurfer.group_ui.handlers.groups.persist_overlay_rows_BANG_ = (function placesurfer$group_ui$handlers$groups$persist_overlay_rows_BANG_(overlay_rows){
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.interface$.handlers.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (s){
var next_items = placesurfer.pin_ui.interface$.rows.apply_separator_overlay_edits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),overlay_rows], 0));
cljs.core.reset_BANG_(saved,next_items);

return placesurfer.group_ui.handlers.groups.sync_groups_from_items(s,next_items);
})], 0));

if(cljs.core.truth_(cljs.core.deref(saved))){
placesurfer.pin_ui.interface$.storage.save_pins_BANG_(cljs.core.deref(saved));

placesurfer.pin_ui.interface$.handlers.state.render_BANG_();
} else {
}

return placesurfer.group_ui.handlers.groups.focus_group_draft_input_BANG_();
});
placesurfer.group_ui.handlers.groups.init_groups_edit_BANG_ = (function placesurfer$group_ui$handlers$groups$init_groups_edit_BANG_(){
placesurfer.group_ui.handlers.groups.cancel_pin_editor_if_open_BANG_();

placesurfer.pin_ui.interface$.handlers.state.swap_render_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (s){
var overlay_rows = placesurfer.pin_ui.interface$.rows.separator_overlay_rows_from_items.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s)], 0));
var selected_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(overlay_rows));
return placesurfer.group_ui.handlers.groups.clear_draft(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),overlay_rows,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),selected_id,new cljs.core.Keyword(null,"pin-separator-overlay-snapshot","pin-separator-overlay-snapshot",-1756599608),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),overlay_rows,new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044),selected_id], null)], 0)));
})], 0));

return placesurfer.group_ui.handlers.groups.focus_group_draft_input_BANG_();
});
placesurfer.group_ui.handlers.groups.leave_groups_page_BANG_ = (function placesurfer$group_ui$handlers$groups$leave_groups_page_BANG_(){
return placesurfer.pin_ui.interface$.handlers.state.swap_render_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(placesurfer.group_ui.handlers.groups.clear_draft(s),new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),null,new cljs.core.Keyword(null,"pin-separator-overlay-snapshot","pin-separator-overlay-snapshot",-1756599608),null], 0));
})], 0));
});
placesurfer.group_ui.handlers.groups.select_group_row_BANG_ = (function placesurfer$group_ui$handlers$groups$select_group_row_BANG_(id){
var editing_id = new cljs.core.Keyword(null,"pin-separator-overlay-editing-id","pin-separator-overlay-editing-id",1360013865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
placesurfer.pin_ui.interface$.handlers.state.swap_render_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (s){
var G__94907 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),id);
if(cljs.core.truth_((function (){var and__5023__auto__ = editing_id;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,editing_id);
} else {
return and__5023__auto__;
}
})())){
return placesurfer.group_ui.handlers.groups.clear_draft(G__94907);
} else {
return G__94907;
}
})], 0));

return placesurfer.group_ui.handlers.groups.focus_group_draft_input_BANG_();
});
placesurfer.group_ui.handlers.groups.set_group_draft_label_BANG_ = (function placesurfer$group_ui$handlers$groups$set_group_draft_label_BANG_(label){
return placesurfer.pin_ui.interface$.handlers.state.swap_render_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__94909_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__94909_SHARP_,new cljs.core.Keyword(null,"pin-separator-overlay-draft-label","pin-separator-overlay-draft-label",-1116073608),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()));
})], 0));
});
placesurfer.group_ui.handlers.groups.start_group_row_edit_BANG_ = (function placesurfer$group_ui$handlers$groups$start_group_row_edit_BANG_(id){
var temp__5825__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__94910_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__94910_SHARP_));
}),new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),cljs.core.PersistentVector.EMPTY)));
if(cljs.core.truth_(temp__5825__auto__)){
var row = temp__5825__auto__;
return placesurfer.pin_ui.interface$.handlers.state.swap_render_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-separator-overlay-draft-label","pin-separator-overlay-draft-label",-1116073608),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$2(row,""),new cljs.core.Keyword(null,"pin-separator-overlay-editing-id","pin-separator-overlay-editing-id",1360013865),id], 0));
})], 0));
} else {
return null;
}
});
placesurfer.group_ui.handlers.groups.add_group_BANG_ = (function placesurfer$group_ui$handlers$groups$add_group_BANG_(){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var draft = clojure.string.trim(new cljs.core.Keyword(null,"pin-separator-overlay-draft-label","pin-separator-overlay-draft-label",-1116073608).cljs$core$IFn$_invoke$arity$2(s,""));
if((((new cljs.core.Keyword(null,"pin-separator-overlay-editing-id","pin-separator-overlay-editing-id",1360013865).cljs$core$IFn$_invoke$arity$1(s) == null)) && ((!(clojure.string.blank_QMARK_(draft)))))){
var next_rows = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.pin_ui.interface$.storage.new_pin_id(),new cljs.core.Keyword(null,"label","label",1718410804),draft,new cljs.core.Keyword(null,"new?","new?",777958557),true], null));
return placesurfer.group_ui.handlers.groups.persist_overlay_rows_BANG_(next_rows);
} else {
return null;
}
});
placesurfer.group_ui.handlers.groups.confirm_group_edit_BANG_ = (function placesurfer$group_ui$handlers$groups$confirm_group_edit_BANG_(){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var editing_id = new cljs.core.Keyword(null,"pin-separator-overlay-editing-id","pin-separator-overlay-editing-id",1360013865).cljs$core$IFn$_invoke$arity$1(s);
var draft = clojure.string.trim(new cljs.core.Keyword(null,"pin-separator-overlay-draft-label","pin-separator-overlay-draft-label",-1116073608).cljs$core$IFn$_invoke$arity$2(s,""));
if(cljs.core.truth_((function (){var and__5023__auto__ = editing_id;
if(cljs.core.truth_(and__5023__auto__)){
return (!(clojure.string.blank_QMARK_(draft)));
} else {
return and__5023__auto__;
}
})())){
var next_rows = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword(null,"label","label",1718410804),draft);
} else {
return row;
}
}),new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY));
return placesurfer.group_ui.handlers.groups.persist_overlay_rows_BANG_(next_rows);
} else {
return null;
}
});
placesurfer.group_ui.handlers.groups.delete_group_row_BANG_ = (function placesurfer$group_ui$handlers$groups$delete_group_row_BANG_(id){
var current_rows = new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),cljs.core.PersistentVector.EMPTY);
var overlay_rows = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__94916_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__94916_SHARP_));
}),current_rows));
if((cljs.core.count(overlay_rows) < cljs.core.count(current_rows))){
return placesurfer.group_ui.handlers.groups.persist_overlay_rows_BANG_(overlay_rows);
} else {
return null;
}
});
placesurfer.group_ui.handlers.groups.select_adjacent_group_row_BANG_ = (function placesurfer$group_ui$handlers$groups$select_adjacent_group_row_BANG_(delta){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var rows = new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY);
var selected_id = new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088).cljs$core$IFn$_invoke$arity$1(s);
var idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,row){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row))){
return i;
} else {
return null;
}
}),rows));
var next_idx = (((!((idx == null))))?(idx + delta):null);
if((((!((next_idx == null)))) && ((((next_idx >= (0))) && ((next_idx < cljs.core.count(rows))))))){
return placesurfer.group_ui.handlers.groups.select_group_row_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,next_idx)));
} else {
return null;
}
});
placesurfer.group_ui.handlers.groups.reorder_group_row_BANG_ = (function placesurfer$group_ui$handlers$groups$reorder_group_row_BANG_(drag_id,to_index){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var overlay_rows = cljs.core.vec(new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY));
var from_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row))){
return idx;
} else {
return null;
}
}),overlay_rows));
if((((!((from_index == null)))) && ((!((to_index == null)))))){
var temp__5825__auto__ = placesurfer.pin_ui.interface$.rows.move_item_to_index.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([overlay_rows,from_index,to_index], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var next_rows = temp__5825__auto__;
return placesurfer.group_ui.handlers.groups.persist_overlay_rows_BANG_(next_rows);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.group_ui.handlers.groups.js.map
