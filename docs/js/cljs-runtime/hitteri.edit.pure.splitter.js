goog.provide('hitteri.edit.pure.splitter');
hitteri.edit.pure.splitter.min_map_height = (96);
hitteri.edit.pure.splitter.min_description_height = (64);
hitteri.edit.pure.splitter.clamp = (function hitteri$edit$pure$splitter$clamp(n,lo,hi){
var x__5110__auto__ = lo;
var y__5111__auto__ = (function (){var x__5113__auto__ = hi;
var y__5114__auto__ = n;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
});
hitteri.edit.pure.splitter.editor_nodes = (function hitteri$edit$pure$splitter$editor_nodes(splitter_node){
if(cljs.core.truth_(splitter_node)){
var editor = splitter_node.parentElement;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor","editor",-989377770),editor,new cljs.core.Keyword(null,"description-pane","description-pane",1039084608),editor.querySelector(".update-description-pane"),new cljs.core.Keyword(null,"map-panel","map-panel",1786257571),editor.querySelector(".update-map-panel"),new cljs.core.Keyword(null,"form","form",-1624062471),editor.querySelector(".update-editor-form")], null);
} else {
return null;
}
});
hitteri.edit.pure.splitter.fixed_form_height = (function hitteri$edit$pure$splitter$fixed_form_height(p__41061){
var map__41062 = p__41061;
var map__41062__$1 = cljs.core.__destructure_map(map__41062);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41062__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41062__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var description_pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41062__$1,new cljs.core.Keyword(null,"description-pane","description-pane",1039084608));
var map_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41062__$1,new cljs.core.Keyword(null,"map-panel","map-panel",1786257571));
var splitter_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41062__$1,new cljs.core.Keyword(null,"splitter-node","splitter-node",55578606));
return (((editor.clientHeight - description_pane.clientHeight) - splitter_node.clientHeight) - map_panel.clientHeight);
});
hitteri.edit.pure.splitter.apply_map_height_BANG_ = (function hitteri$edit$pure$splitter$apply_map_height_BANG_(map_panel,height_px){
(map_panel.style.flexGrow = "0");

(map_panel.style.flexShrink = "0");

(map_panel.style.flexBasis = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height_px),"px"].join(''));

return (map_panel.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height_px),"px"].join(''));
});
/**
 * Attach drag handlers on the horizontal splitter between description and map.
 */
hitteri.edit.pure.splitter.mount_splitter_BANG_ = (function hitteri$edit$pure$splitter$mount_splitter_BANG_(set_update_map_height_BANG_,schedule_map_resize_BANG_){
return (function (p__41065){
var map__41066 = p__41065;
var map__41066__$1 = cljs.core.__destructure_map(map__41066);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41066__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
var temp__5825__auto__ = node;
if(cljs.core.truth_(temp__5825__auto__)){
var splitter_node = temp__5825__auto__;
var mousedown_handler = (function (e){
e.preventDefault();

var nodes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hitteri.edit.pure.splitter.editor_nodes(splitter_node),new cljs.core.Keyword(null,"splitter-node","splitter-node",55578606),splitter_node);
var map__41067 = nodes;
var map__41067__$1 = cljs.core.__destructure_map(map__41067);
var map_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41067__$1,new cljs.core.Keyword(null,"map-panel","map-panel",1786257571));
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41067__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41067__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var start_y = e.clientY;
var start_map_h = map_panel.clientHeight;
var form_h = (cljs.core.truth_(form)?form.clientHeight:hitteri.edit.pure.splitter.fixed_form_height(nodes));
splitter_node.classList.add("update-editor-splitter--dragging");

(document.body.userSelect = "none");

var handle_mousemove = (function hitteri$edit$pure$splitter$mount_splitter_BANG__$_handle_mousemove(move_e){
var dy = (move_e.clientY - start_y);
var max_h = (((editor.clientHeight - form_h) - hitteri.edit.pure.splitter.min_description_height) - splitter_node.clientHeight);
var new_h = hitteri.edit.pure.splitter.clamp((start_map_h - dy),hitteri.edit.pure.splitter.min_map_height,max_h);
hitteri.edit.pure.splitter.apply_map_height_BANG_(map_panel,new_h);

return (schedule_map_resize_BANG_.cljs$core$IFn$_invoke$arity$0 ? schedule_map_resize_BANG_.cljs$core$IFn$_invoke$arity$0() : schedule_map_resize_BANG_.call(null));
});
var handle_mouseup = (function hitteri$edit$pure$splitter$mount_splitter_BANG__$_handle_mouseup(_){
document.removeEventListener("mousemove",handle_mousemove);

document.removeEventListener("mouseup",hitteri$edit$pure$splitter$mount_splitter_BANG__$_handle_mouseup);

splitter_node.classList.remove("update-editor-splitter--dragging");

(document.body.userSelect = "");

var G__41071 = map_panel.clientHeight;
return (set_update_map_height_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_map_height_BANG_.cljs$core$IFn$_invoke$arity$1(G__41071) : set_update_map_height_BANG_.call(null,G__41071));
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

//# sourceMappingURL=hitteri.edit.pure.splitter.js.map
