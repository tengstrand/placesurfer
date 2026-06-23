goog.provide('placesurfer.edit.pure.scroll');
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.edit !== 'undefined') && (typeof placesurfer.edit.pure !== 'undefined') && (typeof placesurfer.edit.pure.scroll !== 'undefined') && (typeof placesurfer.edit.pure.scroll.last_scroll_token !== 'undefined')){
} else {
placesurfer.edit.pure.scroll.last_scroll_token = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.edit !== 'undefined') && (typeof placesurfer.edit.pure !== 'undefined') && (typeof placesurfer.edit.pure.scroll !== 'undefined') && (typeof placesurfer.edit.pure.scroll.preserved_scroll_pos !== 'undefined')){
} else {
placesurfer.edit.pure.scroll.preserved_scroll_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
placesurfer.edit.pure.scroll.scroll_pos = (function placesurfer$edit$pure$scroll$scroll_pos(node){
return ({"top": node.scrollTop, "left": node.scrollLeft});
});
placesurfer.edit.pure.scroll.mount_table_scroll_preservation_BANG_ = (function placesurfer$edit$pure$scroll$mount_table_scroll_preservation_BANG_(node){
if(cljs.core.truth_(node)){
node.addEventListener("scroll",(function (_){
return cljs.core.reset_BANG_(placesurfer.edit.pure.scroll.preserved_scroll_pos,placesurfer.edit.pure.scroll.scroll_pos(node));
}),({"passive": true}));

return cljs.core.reset_BANG_(placesurfer.edit.pure.scroll.preserved_scroll_pos,placesurfer.edit.pure.scroll.scroll_pos(node));
} else {
return null;
}
});
/**
 * Scroll to top when the scroll token changes; otherwise restore last position.
 */
placesurfer.edit.pure.scroll.sync_table_wrap_scroll_BANG_ = (function placesurfer$edit$pure$scroll$sync_table_wrap_scroll_BANG_(node,token){
if(cljs.core.truth_(node)){
if((((!((token == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(token,cljs.core.deref(placesurfer.edit.pure.scroll.last_scroll_token))))){
cljs.core.reset_BANG_(placesurfer.edit.pure.scroll.last_scroll_token,token);

cljs.core.reset_BANG_(placesurfer.edit.pure.scroll.preserved_scroll_pos,null);

(node.scrollTop = (0));

return (node.scrollLeft = (0));
} else {
var temp__5825__auto__ = cljs.core.deref(placesurfer.edit.pure.scroll.preserved_scroll_pos);
if(cljs.core.truth_(temp__5825__auto__)){
var pos = temp__5825__auto__;
(node.scrollTop = pos.top);

return (node.scrollLeft = pos.left);
} else {
return null;
}
}
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.edit.pure.scroll.js.map
