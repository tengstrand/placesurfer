goog.provide('placesurfer.edit.pure.splitter');
placesurfer.edit.pure.splitter.min_map_height = (96);
placesurfer.edit.pure.splitter.min_description_height = (64);
placesurfer.edit.pure.splitter.clamp = (function placesurfer$edit$pure$splitter$clamp(n,lo,hi){
var x__5110__auto__ = lo;
var y__5111__auto__ = (function (){var x__5113__auto__ = hi;
var y__5114__auto__ = n;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
});
placesurfer.edit.pure.splitter.editor_nodes = (function placesurfer$edit$pure$splitter$editor_nodes(splitter_node){
if(cljs.core.truth_(splitter_node)){
var editor = splitter_node.parentElement;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor","editor",-989377770),editor,new cljs.core.Keyword(null,"description-pane","description-pane",1039084608),editor.querySelector(".update-description-pane"),new cljs.core.Keyword(null,"map-panel","map-panel",1786257571),editor.querySelector(".update-map-panel"),new cljs.core.Keyword(null,"form","form",-1624062471),editor.querySelector(".update-editor-form")], null);
} else {
return null;
}
});
placesurfer.edit.pure.splitter.fixed_form_height = (function placesurfer$edit$pure$splitter$fixed_form_height(p__41131){
var map__41132 = p__41131;
var map__41132__$1 = cljs.core.__destructure_map(map__41132);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var description_pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132__$1,new cljs.core.Keyword(null,"description-pane","description-pane",1039084608));
var map_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132__$1,new cljs.core.Keyword(null,"map-panel","map-panel",1786257571));
var splitter_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132__$1,new cljs.core.Keyword(null,"splitter-node","splitter-node",55578606));
return (((editor.clientHeight - description_pane.clientHeight) - splitter_node.clientHeight) - map_panel.clientHeight);
});
placesurfer.edit.pure.splitter.apply_map_height_BANG_ = (function placesurfer$edit$pure$splitter$apply_map_height_BANG_(map_panel,height_px){
(map_panel.style.flexGrow = "0");

(map_panel.style.flexShrink = "0");

(map_panel.style.flexBasis = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height_px),"px"].join(''));

return (map_panel.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height_px),"px"].join(''));
});
/**
 * Attach drag handlers on the horizontal splitter between description and map.
 */
placesurfer.edit.pure.splitter.mount_splitter_BANG_ = (function placesurfer$edit$pure$splitter$mount_splitter_BANG_(set_update_map_height_BANG_,schedule_map_resize_BANG_){
return (function (p__41149){
var map__41150 = p__41149;
var map__41150__$1 = cljs.core.__destructure_map(map__41150);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41150__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
var temp__5825__auto__ = node;
if(cljs.core.truth_(temp__5825__auto__)){
var splitter_node = temp__5825__auto__;
var mousedown_handler = (function (e){
e.preventDefault();

var nodes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(placesurfer.edit.pure.splitter.editor_nodes(splitter_node),new cljs.core.Keyword(null,"splitter-node","splitter-node",55578606),splitter_node);
var map__41152 = nodes;
var map__41152__$1 = cljs.core.__destructure_map(map__41152);
var map_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41152__$1,new cljs.core.Keyword(null,"map-panel","map-panel",1786257571));
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41152__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41152__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var start_y = e.clientY;
var start_map_h = map_panel.clientHeight;
var form_h = (cljs.core.truth_(form)?form.clientHeight:placesurfer.edit.pure.splitter.fixed_form_height(nodes));
splitter_node.classList.add("update-editor-splitter--dragging");

(document.body.userSelect = "none");

var handle_mousemove = (function placesurfer$edit$pure$splitter$mount_splitter_BANG__$_handle_mousemove(move_e){
var dy = (move_e.clientY - start_y);
var max_h = (((editor.clientHeight - form_h) - placesurfer.edit.pure.splitter.min_description_height) - splitter_node.clientHeight);
var new_h = placesurfer.edit.pure.splitter.clamp((start_map_h - dy),placesurfer.edit.pure.splitter.min_map_height,max_h);
placesurfer.edit.pure.splitter.apply_map_height_BANG_(map_panel,new_h);

return (schedule_map_resize_BANG_.cljs$core$IFn$_invoke$arity$0 ? schedule_map_resize_BANG_.cljs$core$IFn$_invoke$arity$0() : schedule_map_resize_BANG_.call(null));
});
var handle_mouseup = (function placesurfer$edit$pure$splitter$mount_splitter_BANG__$_handle_mouseup(_){
document.removeEventListener("mousemove",handle_mousemove);

document.removeEventListener("mouseup",placesurfer$edit$pure$splitter$mount_splitter_BANG__$_handle_mouseup);

splitter_node.classList.remove("update-editor-splitter--dragging");

(document.body.userSelect = "");

var G__41159 = map_panel.clientHeight;
return (set_update_map_height_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_map_height_BANG_.cljs$core$IFn$_invoke$arity$1(G__41159) : set_update_map_height_BANG_.call(null,G__41159));
});
document.addEventListener("mousemove",handle_mousemove);

return document.addEventListener("mouseup",handle_mouseup);
});
return splitter_node.addEventListener("mousedown",mousedown_handler);
} else {
return null;
}
});
});

//# sourceMappingURL=placesurfer.edit.pure.splitter.js.map
