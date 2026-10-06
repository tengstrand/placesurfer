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
var G__26949 = (i + (1));
i = G__26949;
continue;
}
}
break;
}

}
});
placesurfer.pin_ui.pure.drag.clear_drop_targets_BANG_ = (function placesurfer$pin_ui$pure$drag$clear_drop_targets_BANG_(scroll_node){
var seq__26926 = cljs.core.seq(scroll_node.querySelectorAll(".pin-row--drop-target"));
var chunk__26927 = null;
var count__26928 = (0);
var i__26929 = (0);
while(true){
if((i__26929 < count__26928)){
var row = chunk__26927.cljs$core$IIndexed$_nth$arity$2(null,i__26929);
row.classList.remove("pin-row--drop-target");


var G__26950 = seq__26926;
var G__26951 = chunk__26927;
var G__26952 = count__26928;
var G__26953 = (i__26929 + (1));
seq__26926 = G__26950;
chunk__26927 = G__26951;
count__26928 = G__26952;
i__26929 = G__26953;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__26926);
if(temp__5823__auto__){
var seq__26926__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26926__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26926__$1);
var G__26954 = cljs.core.chunk_rest(seq__26926__$1);
var G__26955 = c__5548__auto__;
var G__26956 = cljs.core.count(c__5548__auto__);
var G__26957 = (0);
seq__26926 = G__26954;
chunk__26927 = G__26955;
count__26928 = G__26956;
i__26929 = G__26957;
continue;
} else {
var row = cljs.core.first(seq__26926__$1);
row.classList.remove("pin-row--drop-target");


var G__26958 = cljs.core.next(seq__26926__$1);
var G__26959 = null;
var G__26960 = (0);
var G__26961 = (0);
seq__26926 = G__26958;
chunk__26927 = G__26959;
count__26928 = G__26960;
i__26929 = G__26961;
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

var temp__5823__auto__ = (rows[to_index]);
if(cljs.core.truth_(temp__5823__auto__)){
var target_row = temp__5823__auto__;
return target_row.classList.add("pin-row--drop-target");
} else {
return null;
}
});
placesurfer.pin_ui.pure.drag.row_id = (function placesurfer$pin_ui$pure$drag$row_id(row){
var G__26930 = row.dataset;
if((G__26930 == null)){
return null;
} else {
return G__26930.pinRowId;
}
});
placesurfer.pin_ui.pure.drag.finish_row_drag_BANG_ = (function placesurfer$pin_ui$pure$drag$finish_row_drag_BANG_(scroll_node,row,from_index,rows,client_y,reorder_pin_row_BANG_,drag_id){
placesurfer.pin_ui.pure.drag.clear_drop_targets_BANG_(scroll_node);

row.classList.remove("pin-row--dragging");

(document.body.userSelect = "");

var to_index = placesurfer.pin_ui.pure.drag.row_final_index_at_y(rows,client_y);
var target_id = (function (){var G__26931 = (rows[to_index]);
if((G__26931 == null)){
return null;
} else {
return placesurfer.pin_ui.pure.drag.row_id(G__26931);
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_index,to_index)){
return (reorder_pin_row_BANG_.cljs$core$IFn$_invoke$arity$3 ? reorder_pin_row_BANG_.cljs$core$IFn$_invoke$arity$3(drag_id,to_index,target_id) : reorder_pin_row_BANG_.call(null,drag_id,to_index,target_id));
} else {
return null;
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
placesurfer.pin_ui.pure.drag.handle_row_drag_mousedown_BANG_ = (function placesurfer$pin_ui$pure$drag$handle_row_drag_mousedown_BANG_(e,scroll_node,reorder_pin_row_BANG_,p__26933){
var map__26935 = p__26933;
var map__26935__$1 = cljs.core.__destructure_map(map__26935);
var drag_from_whole_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26935__$1,new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),false);
var temp__5823__auto__ = placesurfer.pin_ui.pure.drag.drag_handle_from_event(e,drag_from_whole_row_QMARK_);
if(cljs.core.truth_(temp__5823__auto__)){
var handle = temp__5823__auto__;
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
var G__26944 = arguments.length;
switch (G__26944) {
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
return (function (p__26945){
var map__26946 = p__26945;
var map__26946__$1 = cljs.core.__destructure_map(map__26946);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26946__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return placesurfer.pin_ui.pure.drag.ensure_pin_row_drag_BANG_(node,reorder_pin_row_BANG_,opts);
});
}));

(placesurfer.pin_ui.pure.drag.mount_pin_row_drag_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=placesurfer.pin_ui.pure.drag.js.map
