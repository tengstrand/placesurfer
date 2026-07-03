goog.provide('placesurfer.pin_ui.pure.drag');
placesurfer.pin_ui.pure.drag.drag_threshold_px = (5);
/**
 * Return the target index for a dragged row given pointer Y.
 */
placesurfer.pin_ui.pure.drag.row_final_index_at_y = (function placesurfer$pin_ui$pure$drag$row_final_index_at_y(rows,client_y){
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
var G__41162 = (i + (1));
i = G__41162;
continue;
}
}
break;
}

}
});
placesurfer.pin_ui.pure.drag.clear_drop_targets_BANG_ = (function placesurfer$pin_ui$pure$drag$clear_drop_targets_BANG_(scroll_node){
var seq__41137 = cljs.core.seq(scroll_node.querySelectorAll(".pin-row--drop-target"));
var chunk__41138 = null;
var count__41139 = (0);
var i__41140 = (0);
while(true){
if((i__41140 < count__41139)){
var row = chunk__41138.cljs$core$IIndexed$_nth$arity$2(null,i__41140);
row.classList.remove("pin-row--drop-target");


var G__41163 = seq__41137;
var G__41164 = chunk__41138;
var G__41165 = count__41139;
var G__41166 = (i__41140 + (1));
seq__41137 = G__41163;
chunk__41138 = G__41164;
count__41139 = G__41165;
i__41140 = G__41166;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41137);
if(temp__5825__auto__){
var seq__41137__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41137__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__41137__$1);
var G__41167 = cljs.core.chunk_rest(seq__41137__$1);
var G__41168 = c__5548__auto__;
var G__41169 = cljs.core.count(c__5548__auto__);
var G__41170 = (0);
seq__41137 = G__41167;
chunk__41138 = G__41168;
count__41139 = G__41169;
i__41140 = G__41170;
continue;
} else {
var row = cljs.core.first(seq__41137__$1);
row.classList.remove("pin-row--drop-target");


var G__41171 = cljs.core.next(seq__41137__$1);
var G__41172 = null;
var G__41173 = (0);
var G__41174 = (0);
seq__41137 = G__41171;
chunk__41138 = G__41172;
count__41139 = G__41173;
i__41140 = G__41174;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.pin_ui.pure.drag.update_drop_targets_BANG_ = (function placesurfer$pin_ui$pure$drag$update_drop_targets_BANG_(scroll_node,rows,client_y){
var to_index = placesurfer.pin_ui.pure.drag.row_final_index_at_y(rows,client_y);
placesurfer.pin_ui.pure.drag.clear_drop_targets_BANG_(scroll_node);

var temp__5825__auto__ = (rows[to_index]);
if(cljs.core.truth_(temp__5825__auto__)){
var target_row = temp__5825__auto__;
return target_row.classList.add("pin-row--drop-target");
} else {
return null;
}
});
placesurfer.pin_ui.pure.drag.finish_row_drag_BANG_ = (function placesurfer$pin_ui$pure$drag$finish_row_drag_BANG_(scroll_node,row,from_index,rows,client_y,reorder_pin_row_BANG_,drag_id){
placesurfer.pin_ui.pure.drag.clear_drop_targets_BANG_(scroll_node);

row.classList.remove("pin-row--dragging");

(document.body.userSelect = "");

var to_index = placesurfer.pin_ui.pure.drag.row_final_index_at_y(rows,client_y);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_index,to_index)){
return (reorder_pin_row_BANG_.cljs$core$IFn$_invoke$arity$2 ? reorder_pin_row_BANG_.cljs$core$IFn$_invoke$arity$2(drag_id,to_index) : reorder_pin_row_BANG_.call(null,drag_id,to_index));
} else {
return null;
}
});
placesurfer.pin_ui.pure.drag.row_id = (function placesurfer$pin_ui$pure$drag$row_id(row){
var G__41141 = row.dataset;
if((G__41141 == null)){
return null;
} else {
return G__41141.pinRowId;
}
});
placesurfer.pin_ui.pure.drag.interactive_target_QMARK_ = (function placesurfer$pin_ui$pure$drag$interactive_target_QMARK_(target){
return cljs.core.boolean$(target.closest("a, button, input, textarea, select, label, details, summary"));
});
placesurfer.pin_ui.pure.drag.drag_handle_from_event = (function placesurfer$pin_ui$pure$drag$drag_handle_from_event(e,drag_from_whole_row_QMARK_){
var target = e.target;
var or__5025__auto__ = (cljs.core.truth_(drag_from_whole_row_QMARK_)?((placesurfer.pin_ui.pure.drag.interactive_target_QMARK_(target))?null:target.closest(".update-row")):null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return target.closest(".pin-row-drag-handle");
}
});
placesurfer.pin_ui.pure.drag.attach_row_drag_listeners_BANG_ = (function placesurfer$pin_ui$pure$drag$attach_row_drag_listeners_BANG_(scroll_node,row,rows,drag_id,from_index,reorder_pin_row_BANG_){
row.classList.add("pin-row--dragging");

(document.body.userSelect = "none");

var handle_mousemove = (function placesurfer$pin_ui$pure$drag$attach_row_drag_listeners_BANG__$_handle_mousemove(move_e){
return placesurfer.pin_ui.pure.drag.update_drop_targets_BANG_(scroll_node,rows,move_e.clientY);
});
var handle_mouseup = (function placesurfer$pin_ui$pure$drag$attach_row_drag_listeners_BANG__$_handle_mouseup(up_e){
document.removeEventListener("mousemove",handle_mousemove);

document.removeEventListener("mouseup",placesurfer$pin_ui$pure$drag$attach_row_drag_listeners_BANG__$_handle_mouseup);

return placesurfer.pin_ui.pure.drag.finish_row_drag_BANG_(scroll_node,row,from_index,rows,up_e.clientY,reorder_pin_row_BANG_,drag_id);
});
document.addEventListener("mousemove",handle_mousemove);

return document.addEventListener("mouseup",handle_mouseup);
});
placesurfer.pin_ui.pure.drag.attach_threshold_row_drag_listeners_BANG_ = (function placesurfer$pin_ui$pure$drag$attach_threshold_row_drag_listeners_BANG_(scroll_node,row,rows,drag_id,from_index,reorder_pin_row_BANG_,start_x,start_y){
var drag_started_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handle_mousemove = (function placesurfer$pin_ui$pure$drag$attach_threshold_row_drag_listeners_BANG__$_handle_mousemove(move_e){
if(cljs.core.not(cljs.core.deref(drag_started_QMARK_))){
if((Math.hypot((move_e.clientX - start_x),(move_e.clientY - start_y)) > placesurfer.pin_ui.pure.drag.drag_threshold_px)){
cljs.core.reset_BANG_(drag_started_QMARK_,true);

row.classList.add("pin-row--dragging");

return (document.body.userSelect = "none");
} else {
return null;
}
} else {
return placesurfer.pin_ui.pure.drag.update_drop_targets_BANG_(scroll_node,rows,move_e.clientY);
}
});
var handle_mouseup = (function placesurfer$pin_ui$pure$drag$attach_threshold_row_drag_listeners_BANG__$_handle_mouseup(up_e){
document.removeEventListener("mousemove",handle_mousemove);

document.removeEventListener("mouseup",placesurfer$pin_ui$pure$drag$attach_threshold_row_drag_listeners_BANG__$_handle_mouseup);

if(cljs.core.truth_(cljs.core.deref(drag_started_QMARK_))){
up_e.preventDefault();

up_e.stopPropagation();

return placesurfer.pin_ui.pure.drag.finish_row_drag_BANG_(scroll_node,row,from_index,rows,up_e.clientY,reorder_pin_row_BANG_,drag_id);
} else {
placesurfer.pin_ui.pure.drag.clear_drop_targets_BANG_(scroll_node);

row.classList.remove("pin-row--dragging");

return (document.body.userSelect = "");
}
});
document.addEventListener("mousemove",handle_mousemove);

return document.addEventListener("mouseup",handle_mouseup);
});
placesurfer.pin_ui.pure.drag.handle_row_drag_mousedown_BANG_ = (function placesurfer$pin_ui$pure$drag$handle_row_drag_mousedown_BANG_(e,scroll_node,reorder_pin_row_BANG_,p__41144){
var map__41145 = p__41144;
var map__41145__$1 = cljs.core.__destructure_map(map__41145);
var drag_from_whole_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41145__$1,new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),false);
var temp__5825__auto__ = placesurfer.pin_ui.pure.drag.drag_handle_from_event(e,drag_from_whole_row_QMARK_);
if(cljs.core.truth_(temp__5825__auto__)){
var handle = temp__5825__auto__;
var row = handle.closest(".update-row");
var drag_id = placesurfer.pin_ui.pure.drag.row_id(row);
var rows = scroll_node.querySelectorAll(".update-row");
var from_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_id,placesurfer.pin_ui.pure.drag.row_id(r))){
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
return placesurfer.pin_ui.pure.drag.attach_threshold_row_drag_listeners_BANG_(scroll_node,row,rows,drag_id,from_index,reorder_pin_row_BANG_,e.clientX,e.clientY);
} else {
e.preventDefault();

e.stopPropagation();

return placesurfer.pin_ui.pure.drag.attach_row_drag_listeners_BANG_(scroll_node,row,rows,drag_id,from_index,reorder_pin_row_BANG_);
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
placesurfer.pin_ui.pure.drag.ensure_pin_row_drag_BANG_ = (function placesurfer$pin_ui$pure$drag$ensure_pin_row_drag_BANG_(scroll_node,reorder_pin_row_BANG_,opts){
if(cljs.core.truth_(scroll_node)){
(scroll_node.placesurferPinRowDragReorder = reorder_pin_row_BANG_);

(scroll_node.placesurferPinRowDragOpts = opts);

if(cljs.core.truth_(scroll_node.placesurferPinRowDragMounted)){
return null;
} else {
(scroll_node.placesurferPinRowDragMounted = true);

return scroll_node.addEventListener("mousedown",(function (e){
var reorder = scroll_node.placesurferPinRowDragReorder;
var opts_STAR_ = scroll_node.placesurferPinRowDragOpts;
if(cljs.core.truth_((function (){var and__5023__auto__ = reorder;
if(cljs.core.truth_(and__5023__auto__)){
return opts_STAR_;
} else {
return and__5023__auto__;
}
})())){
return placesurfer.pin_ui.pure.drag.handle_row_drag_mousedown_BANG_(e,scroll_node,reorder,opts_STAR_);
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
placesurfer.pin_ui.pure.drag.mount_pin_row_drag_BANG_ = (function placesurfer$pin_ui$pure$drag$mount_pin_row_drag_BANG_(var_args){
var G__41157 = arguments.length;
switch (G__41157) {
case 1:
return placesurfer.pin_ui.pure.drag.mount_pin_row_drag_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.pin_ui.pure.drag.mount_pin_row_drag_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.pin_ui.pure.drag.mount_pin_row_drag_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reorder_pin_row_BANG_){
return placesurfer.pin_ui.pure.drag.mount_pin_row_drag_BANG_.cljs$core$IFn$_invoke$arity$2(reorder_pin_row_BANG_,cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.pin_ui.pure.drag.mount_pin_row_drag_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reorder_pin_row_BANG_,opts){
return (function (p__41158){
var map__41159 = p__41158;
var map__41159__$1 = cljs.core.__destructure_map(map__41159);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41159__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return placesurfer.pin_ui.pure.drag.ensure_pin_row_drag_BANG_(node,reorder_pin_row_BANG_,opts);
});
}));

(placesurfer.pin_ui.pure.drag.mount_pin_row_drag_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=placesurfer.pin_ui.pure.drag.js.map
