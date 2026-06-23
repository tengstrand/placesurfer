goog.provide('hitteri.map_panel_ui.resize');
if((typeof hitteri !== 'undefined') && (typeof hitteri.map_panel_ui !== 'undefined') && (typeof hitteri.map_panel_ui.resize !== 'undefined') && (typeof hitteri.map_panel_ui.resize._BANG_resize_timeout !== 'undefined')){
} else {
hitteri.map_panel_ui.resize._BANG_resize_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
hitteri.map_panel_ui.resize.schedule_resize_BANG_ = (function hitteri$map_panel_ui$resize$schedule_resize_BANG_(resize_map_BANG_){
hitteri.map_panel_ui.layout.sync_layout_BANG_();

var temp__5825__auto___40521 = cljs.core.deref(hitteri.map_panel_ui.resize._BANG_resize_timeout);
if(cljs.core.truth_(temp__5825__auto___40521)){
var tid_40522 = temp__5825__auto___40521;
clearTimeout(tid_40522);
} else {
}

return cljs.core.reset_BANG_(hitteri.map_panel_ui.resize._BANG_resize_timeout,setTimeout((function (){
cljs.core.reset_BANG_(hitteri.map_panel_ui.resize._BANG_resize_timeout,null);

return (resize_map_BANG_.cljs$core$IFn$_invoke$arity$0 ? resize_map_BANG_.cljs$core$IFn$_invoke$arity$0() : resize_map_BANG_.call(null));
}),(200)));
});

//# sourceMappingURL=hitteri.map_panel_ui.resize.js.map
