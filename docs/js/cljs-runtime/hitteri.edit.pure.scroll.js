goog.provide('hitteri.edit.pure.scroll');
if((typeof hitteri !== 'undefined') && (typeof hitteri.edit !== 'undefined') && (typeof hitteri.edit.pure !== 'undefined') && (typeof hitteri.edit.pure.scroll !== 'undefined') && (typeof hitteri.edit.pure.scroll.last_scroll_token !== 'undefined')){
} else {
hitteri.edit.pure.scroll.last_scroll_token = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof hitteri !== 'undefined') && (typeof hitteri.edit !== 'undefined') && (typeof hitteri.edit.pure !== 'undefined') && (typeof hitteri.edit.pure.scroll !== 'undefined') && (typeof hitteri.edit.pure.scroll.preserved_scroll_pos !== 'undefined')){
} else {
hitteri.edit.pure.scroll.preserved_scroll_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
hitteri.edit.pure.scroll.scroll_pos = (function hitteri$edit$pure$scroll$scroll_pos(node){
return ({"top": node.scrollTop, "left": node.scrollLeft});
});
hitteri.edit.pure.scroll.mount_table_scroll_preservation_BANG_ = (function hitteri$edit$pure$scroll$mount_table_scroll_preservation_BANG_(node){
if(cljs.core.truth_(node)){
node.addEventListener("scroll",(function (_){
return cljs.core.reset_BANG_(hitteri.edit.pure.scroll.preserved_scroll_pos,hitteri.edit.pure.scroll.scroll_pos(node));
}),({"passive": true}));

return cljs.core.reset_BANG_(hitteri.edit.pure.scroll.preserved_scroll_pos,hitteri.edit.pure.scroll.scroll_pos(node));
} else {
return null;
}
});
/**
 * Scroll to top when the scroll token changes; otherwise restore last position.
 */
hitteri.edit.pure.scroll.sync_table_wrap_scroll_BANG_ = (function hitteri$edit$pure$scroll$sync_table_wrap_scroll_BANG_(node,token){
if(cljs.core.truth_(node)){
if((((!((token == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(token,cljs.core.deref(hitteri.edit.pure.scroll.last_scroll_token))))){
cljs.core.reset_BANG_(hitteri.edit.pure.scroll.last_scroll_token,token);

cljs.core.reset_BANG_(hitteri.edit.pure.scroll.preserved_scroll_pos,null);

(node.scrollTop = (0));

return (node.scrollLeft = (0));
} else {
var temp__5825__auto__ = cljs.core.deref(hitteri.edit.pure.scroll.preserved_scroll_pos);
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

//# sourceMappingURL=hitteri.edit.pure.scroll.js.map
