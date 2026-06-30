goog.provide('placesurfer.web_app.area');
placesurfer.web_app.area.set_area_radius_BANG_ = (function placesurfer$web_app$area$set_area_radius_BANG_(v){
var n = parseFloat(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
if(cljs.core.truth_(isNaN(n))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"area-radius","area-radius",1076136006),n);

placesurfer.i18n.interface$.save_area_settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,new cljs.core.Keyword(null,"area-unit","area-unit",-553475487).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.web_app.state._BANG_state),new cljs.core.Keyword(null,"km","km",1377787512))], 0));

placesurfer.web_app.map_sync.sync_area_circles_BANG_();

return placesurfer.app_ui.interface$.effects.render_BANG_();
}
});
placesurfer.web_app.area.set_area_unit_BANG_ = (function placesurfer$web_app$area$set_area_unit_BANG_(unit){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"area-unit","area-unit",-553475487),unit);

placesurfer.i18n.interface$.save_area_settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"area-radius","area-radius",1076136006).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.web_app.state._BANG_state),(20)),unit], 0));

placesurfer.web_app.map_sync.sync_area_circles_BANG_();

return placesurfer.app_ui.interface$.effects.render_BANG_();
});

//# sourceMappingURL=placesurfer.web_app.area.js.map
