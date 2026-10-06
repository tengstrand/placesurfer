goog.provide('placesurfer.web_app.transit');
/**
 * Updates the "Avgångar" destination used to pre-fill the journey planner's
 * Z= param on every "Show departures" popup link (see settings-ui's
 * transit section and map-ui.popup/departures-url-with-destination) -
 * persisted the same way as the locale setting (see web-app.locale), and
 * synced to Dropbox via the :prefs doc (see web-app.dropbox/init!).
 */
placesurfer.web_app.transit.set_transit_destination_BANG_ = (function placesurfer$web_app$transit$set_transit_destination_BANG_(destination){
var destination__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(destination);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"transit-destination","transit-destination",1279718214),destination__$1);

placesurfer.i18n.interface$.save_settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(placesurfer.i18n.interface$.read_settings_BANG_(),new cljs.core.Keyword(null,"transit-destination","transit-destination",1279718214),destination__$1)], 0));

if(placesurfer.dropbox.interface$.connected_QMARK_()){
placesurfer.dropbox.interface$.push_BANG_();
} else {
}

return placesurfer.app_ui.interface$.effects.render_BANG_();
});
placesurfer.web_app.transit.init_transit_destination_BANG_ = (function placesurfer$web_app$transit$init_transit_destination_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"transit-destination","transit-destination",1279718214),new cljs.core.Keyword(null,"transit-destination","transit-destination",1279718214).cljs$core$IFn$_invoke$arity$2(placesurfer.i18n.interface$.read_settings_BANG_(),""));
});

//# sourceMappingURL=placesurfer.web_app.transit.js.map
