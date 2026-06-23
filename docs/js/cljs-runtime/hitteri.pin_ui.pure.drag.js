goog.provide('hitteri.pin_ui.pure.drag');
hitteri.pin_ui.pure.drag.drag_threshold_px = (5);
/**
 * Return the target index for a dragged row given pointer Y.
 */
hitteri.pin_ui.pure.drag.row_final_index_at_y = (function hitteri$pin_ui$pure$drag$row_final_index_at_y(rows,client_y){
var n = rows.length;
if((n === (0))){
return (0);
} else {
var i = (0);
while(true){
if((i >= n)){
return (n - (1));
} else {
var row = (rows[i]);
var rect = row.getBoundingClientRect();
var mid = (rect.top + (rect.height / (2)));
if((client_y < mid)){
return i;
} else {
var G__41281 = (i + (1));
i = G__41281;
continue;
}
}
break;
}

}
});
hitteri.pin_ui.pure.drag.clear_drop_targets_BANG_ = (function hitteri$pin_ui$pure$drag$clear_drop_targets_BANG_(scroll_node){
var seq__41172 = cljs.core.seq(scroll_node.querySelectorAll(".pin-row--drop-target"));
var chunk__41173 = null;
var count__41174 = (0);
var i__41175 = (0);
while(true){
if((i__41175 < count__41174)){
var row = chunk__41173.cljs$core$IIndexed$_nth$arity$2(null,i__41175);
row.classList.remove("pin-row--drop-target");


var G__41282 = seq__41172;
var G__41283 = chunk__41173;
var G__41284 = count__41174;
var G__41285 = (i__41175 + (1));
seq__41172 = G__41282;
chunk__41173 = G__41283;
count__41174 = G__41284;
i__41175 = G__41285;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41172);
if(temp__5825__auto__){
var seq__41172__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41172__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__41172__$1);
var G__41286 = cljs.core.chunk_rest(seq__41172__$1);
var G__41287 = c__5548__auto__;
var G__41288 = cljs.core.count(c__5548__auto__);
var G__41289 = (0);
seq__41172 = G__41286;
chunk__41173 = G__41287;
count__41174 = G__41288;
i__41175 = G__41289;
continue;
} else {
var row = cljs.core.first(seq__41172__$1);
row.classList.remove("pin-row--drop-target");


var G__41290 = cljs.core.next(seq__41172__$1);
var G__41291 = null;
var G__41292 = (0);
var G__41293 = (0);
seq__41172 = G__41290;
chunk__41173 = G__41291;
count__41174 = G__41292;
i__41175 = G__41293;
continue;
}
} else {
return null;
}
}
break;
}
});
hitteri.pin_ui.pure.drag.update_drop_targets_BANG_ = (function hitteri$pin_ui$pure$drag$update_drop_targets_BANG_(scroll_node,rows,client_y){
var to_index = hitteri.pin_ui.pure.drag.row_final_index_at_y(rows,client_y);
hitteri.pin_ui.pure.drag.clear_drop_targets_BANG_(scroll_node);

var temp__5825__auto__ = (rows[to_index]);
if(cljs.core.truth_(temp__5825__auto__)){
var target_row = temp__5825__auto__;
return target_row.classList.add("pin-row--drop-target");
} else {
return null;
}
});
hitteri.pin_ui.pure.drag.finish_row_drag_BANG_ = (function hitteri$pin_ui$pure$drag$finish_row_drag_BANG_(scroll_node,row,from_index,rows,client_y,reorder_pin_row_BANG_,drag_id){
hitteri.pin_ui.pure.drag.clear_drop_targets_BANG_(scroll_node);

row.classList.remove("pin-row--dragging");

(document.body.userSelect = "");

var to_index = hitteri.pin_ui.pure.drag.row_final_index_at_y(rows,client_y);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_index,to_index)){
return (reorder_pin_row_BANG_.cljs$core$IFn$_invoke$arity$2 ? reorder_pin_row_BANG_.cljs$core$IFn$_invoke$arity$2(drag_id,to_index) : reorder_pin_row_BANG_.call(null,drag_id,to_index));
} else {
return null;
}
});
hitteri.pin_ui.pure.drag.row_id = (function hitteri$pin_ui$pure$drag$row_id(row){
var G__41179 = row.dataset;
if((G__41179 == null)){
return null;
} else {
return G__41179.pinRowId;
}
});
hitteri.pin_ui.pure.drag.interactive_target_QMARK_ = (function hitteri$pin_ui$pure$drag$interactive_target_QMARK_(target){
return cljs.core.boolean$(target.closest("a, button, input, textarea, select, label, details, summary"));
});
hitteri.pin_ui.pure.drag.drag_handle_from_event = (function hitteri$pin_ui$pure$drag$drag_handle_from_event(e,drag_from_whole_row_QMARK_){
var target = e.target;
var or__5025__auto__ = (cljs.core.truth_(drag_from_whole_row_QMARK_)?((hitteri.pin_ui.pure.drag.interactive_target_QMARK_(target))?null:target.closest(".update-row")):null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return target.closest(".pin-row-drag-handle");
}
});
hitteri.pin_ui.pure.drag.attach_row_drag_listeners_BANG_ = (function hitteri$pin_ui$pure$drag$attach_row_drag_listeners_BANG_(scroll_node,row,rows,drag_id,from_index,reorder_pin_row_BANG_){
row.classList.add("pin-row--dragging");

(document.body.userSelect = "none");

var handle_mousemove = (function hitteri$pin_ui$pure$drag$attach_row_drag_listeners_BANG__$_handle_mousemove(move_e){
return hitteri.pin_ui.pure.drag.update_drop_targets_BANG_(scroll_node,rows,move_e.clientY);
});
var handle_mouseup = (function hitteri$pin_ui$pure$drag$attach_row_drag_listeners_BANG__$_handle_mouseup(up_e){
document.removeEventListener("mousemove",handle_mousemove);

document.removeEventListener("mouseup",hitteri$pin_ui$pure$drag$attach_row_drag_listeners_BANG__$_handle_mouseup);

return hitteri.pin_ui.pure.drag.finish_row_drag_BANG_(scroll_node,row,from_index,rows,up_e.clientY,reorder_pin_row_BANG_,drag_id);
});
document.addEventListener("mousemove",handle_mousemove);

return document.addEventListener("mouseup",handle_mouseup);
});
hitteri.pin_ui.pure.drag.attach_threshold_row_drag_listeners_BANG_ = (function hitteri$pin_ui$pure$drag$attach_threshold_row_drag_listeners_BANG_(scroll_node,row,rows,drag_id,from_index,reorder_pin_row_BANG_,start_x,start_y){
var drag_started_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handle_mousemove = (function hitteri$pin_ui$pure$drag$attach_threshold_row_drag_listeners_BANG__$_handle_mousemove(move_e){
if(cljs.core.not(cljs.core.deref(drag_started_QMARK_))){
if((Math.hypot((move_e.clientX - start_x),(move_e.clientY - start_y)) > hitteri.pin_ui.pure.drag.drag_threshold_px)){
cljs.core.reset_BANG_(drag_started_QMARK_,true);

row.classList.add("pin-row--dragging");

return (document.body.userSelect = "none");
} else {
return null;
}
} else {
return hitteri.pin_ui.pure.drag.update_drop_targets_BANG_(scroll_node,rows,move_e.clientY);
}
});
var handle_mouseup = (function hitteri$pin_ui$pure$drag$attach_threshold_row_drag_listeners_BANG__$_handle_mouseup(up_e){
document.removeEventListener("mousemove",handle_mousemove);

document.removeEventListener("mouseup",hitteri$pin_ui$pure$drag$attach_threshold_row_drag_listeners_BANG__$_handle_mouseup);

if(cljs.core.truth_(cljs.core.deref(drag_started_QMARK_))){
up_e.preventDefault();

up_e.stopPropagation();

return hitteri.pin_ui.pure.drag.finish_row_drag_BANG_(scroll_node,row,from_index,rows,up_e.clientY,reorder_pin_row_BANG_,drag_id);
} else {
hitteri.pin_ui.pure.drag.clear_drop_targets_BANG_(scroll_node);

row.classList.remove("pin-row--dragging");

return (document.body.userSelect = "");
}
});
document.addEventListener("mousemove",handle_mousemove);

return document.addEventListener("mouseup",handle_mouseup);
});
hitteri.pin_ui.pure.drag.handle_row_drag_mousedown_BANG_ = (function hitteri$pin_ui$pure$drag$handle_row_drag_mousedown_BANG_(e,scroll_node,reorder_pin_row_BANG_,p__41253){
var map__41254 = p__41253;
var map__41254__$1 = cljs.core.__destructure_map(map__41254);
var drag_from_whole_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41254__$1,new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),false);
var temp__5825__auto__ = hitteri.pin_ui.pure.drag.drag_handle_from_event(e,drag_from_whole_row_QMARK_);
if(cljs.core.truth_(temp__5825__auto__)){
var handle = temp__5825__auto__;
var row = handle.closest(".update-row");
var drag_id = hitteri.pin_ui.pure.drag.row_id(row);
var rows = scroll_node.querySelectorAll(".update-row");
var from_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_id,hitteri.pin_ui.pure.drag.row_id(r))){
return idx;
} else {
return null;
}
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(rows)));
var whole_row_QMARK_ = (function (){var and__5023__auto__ = drag_from_whole_row_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handle,row);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = drag_id;
if(cljs.core.truth_(and__5023__auto__)){
return (!((from_index == null)));
} else {
return and__5023__auto__;
}
})())){
if(cljs.core.truth_(whole_row_QMARK_)){
return hitteri.pin_ui.pure.drag.attach_threshold_row_drag_listeners_BANG_(scroll_node,row,rows,drag_id,from_index,reorder_pin_row_BANG_,e.clientX,e.clientY);
} else {
e.preventDefault();

e.stopPropagation();

return hitteri.pin_ui.pure.drag.attach_row_drag_listeners_BANG_(scroll_node,row,rows,drag_id,from_index,reorder_pin_row_BANG_);
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Attach or refresh drag-to-reorder on `scroll-node`.
 */
hitteri.pin_ui.pure.drag.ensure_pin_row_drag_BANG_ = (function hitteri$pin_ui$pure$drag$ensure_pin_row_drag_BANG_(scroll_node,reorder_pin_row_BANG_,opts){
if(cljs.core.truth_(scroll_node)){
(scroll_node.hitteriPinRowDragReorder = reorder_pin_row_BANG_);

(scroll_node.hitteriPinRowDragOpts = opts);

if(cljs.core.truth_(scroll_node.hitteriPinRowDragMounted)){
return null;
} else {
(scroll_node.hitteriPinRowDragMounted = true);

return scroll_node.addEventListener("mousedown",(function (e){
var reorder = scroll_node.hitteriPinRowDragReorder;
var opts_STAR_ = scroll_node.hitteriPinRowDragOpts;
if(cljs.core.truth_((function (){var and__5023__auto__ = reorder;
if(cljs.core.truth_(and__5023__auto__)){
return opts_STAR_;
} else {
return and__5023__auto__;
}
})())){
return hitteri.pin_ui.pure.drag.handle_row_drag_mousedown_BANG_(e,scroll_node,reorder,opts_STAR_);
} else {
return null;
}
}));
}
} else {
return null;
}
});
/**
 * Replicant hook: keep drag handlers in sync with current props.
 */
hitteri.pin_ui.pure.drag.mount_pin_row_drag_BANG_ = (function hitteri$pin_ui$pure$drag$mount_pin_row_drag_BANG_(var_args){
var G__41275 = arguments.length;
switch (G__41275) {
case 1:
return hitteri.pin_ui.pure.drag.mount_pin_row_drag_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hitteri.pin_ui.pure.drag.mount_pin_row_drag_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.pin_ui.pure.drag.mount_pin_row_drag_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reorder_pin_row_BANG_){
return hitteri.pin_ui.pure.drag.mount_pin_row_drag_BANG_.cljs$core$IFn$_invoke$arity$2(reorder_pin_row_BANG_,cljs.core.PersistentArrayMap.EMPTY);
}));

(hitteri.pin_ui.pure.drag.mount_pin_row_drag_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reorder_pin_row_BANG_,opts){
return (function (p__41279){
var map__41280 = p__41279;
var map__41280__$1 = cljs.core.__destructure_map(map__41280);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41280__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return hitteri.pin_ui.pure.drag.ensure_pin_row_drag_BANG_(node,reorder_pin_row_BANG_,opts);
});
}));

(hitteri.pin_ui.pure.drag.mount_pin_row_drag_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=hitteri.pin_ui.pure.drag.js.map
