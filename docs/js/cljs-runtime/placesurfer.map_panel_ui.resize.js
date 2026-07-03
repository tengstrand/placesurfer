goog.provide('placesurfer.map_panel_ui.resize');
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_panel_ui !== 'undefined') && (typeof placesurfer.map_panel_ui.resize !== 'undefined') && (typeof placesurfer.map_panel_ui.resize._BANG_resize_timeout !== 'undefined')){
} else {
placesurfer.map_panel_ui.resize._BANG_resize_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
placesurfer.map_panel_ui.resize.schedule_resize_BANG_ = (function placesurfer$map_panel_ui$resize$schedule_resize_BANG_(resize_map_BANG_){
placesurfer.map_panel_ui.layout.sync_layout_BANG_();

var temp__5825__auto___40297 = cljs.core.deref(placesurfer.map_panel_ui.resize._BANG_resize_timeout);
if(cljs.core.truth_(temp__5825__auto___40297)){
var tid_40298 = temp__5825__auto___40297;
clearTimeout(tid_40298);
} else {
}

return cljs.core.reset_BANG_(placesurfer.map_panel_ui.resize._BANG_resize_timeout,setTimeout((function (){
cljs.core.reset_BANG_(placesurfer.map_panel_ui.resize._BANG_resize_timeout,null);

return (resize_map_BANG_.cljs$core$IFn$_invoke$arity$0 ? resize_map_BANG_.cljs$core$IFn$_invoke$arity$0() : resize_map_BANG_.call(null));
}),(200)));
});

//# sourceMappingURL=placesurfer.map_panel_ui.resize.js.map
