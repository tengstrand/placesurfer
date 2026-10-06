goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__29327__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__29327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29328__i = 0, G__29328__a = new Array(arguments.length -  0);
while (G__29328__i < G__29328__a.length) {G__29328__a[G__29328__i] = arguments[G__29328__i + 0]; ++G__29328__i;}
  args = new cljs.core.IndexedSeq(G__29328__a,0,null);
} 
return G__29327__delegate.call(this,args);};
G__29327.cljs$lang$maxFixedArity = 0;
G__29327.cljs$lang$applyTo = (function (arglist__29329){
var args = cljs.core.seq(arglist__29329);
return G__29327__delegate(args);
});
G__29327.cljs$core$IFn$_invoke$arity$variadic = G__29327__delegate;
return G__29327;
})()
,(function() { 
var G__29330__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__29330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29331__i = 0, G__29331__a = new Array(arguments.length -  0);
while (G__29331__i < G__29331__a.length) {G__29331__a[G__29331__i] = arguments[G__29331__i + 0]; ++G__29331__i;}
  args = new cljs.core.IndexedSeq(G__29331__a,0,null);
} 
return G__29330__delegate.call(this,args);};
G__29330.cljs$lang$maxFixedArity = 0;
G__29330.cljs$lang$applyTo = (function (arglist__29332){
var args = cljs.core.seq(arglist__29332);
return G__29330__delegate(args);
});
G__29330.cljs$core$IFn$_invoke$arity$variadic = G__29330__delegate;
return G__29330;
})()
,(function() { 
var G__29333__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__29333 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29334__i = 0, G__29334__a = new Array(arguments.length -  0);
while (G__29334__i < G__29334__a.length) {G__29334__a[G__29334__i] = arguments[G__29334__i + 0]; ++G__29334__i;}
  _ = new cljs.core.IndexedSeq(G__29334__a,0,null);
} 
return G__29333__delegate.call(this,_);};
G__29333.cljs$lang$maxFixedArity = 0;
G__29333.cljs$lang$applyTo = (function (arglist__29335){
var _ = cljs.core.seq(arglist__29335);
return G__29333__delegate(_);
});
G__29333.cljs$core$IFn$_invoke$arity$variadic = G__29333__delegate;
return G__29333;
})()
,(function() { 
var G__29336__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__29336 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29337__i = 0, G__29337__a = new Array(arguments.length -  0);
while (G__29337__i < G__29337__a.length) {G__29337__a[G__29337__i] = arguments[G__29337__i + 0]; ++G__29337__i;}
  _ = new cljs.core.IndexedSeq(G__29337__a,0,null);
} 
return G__29336__delegate.call(this,_);};
G__29336.cljs$lang$maxFixedArity = 0;
G__29336.cljs$lang$applyTo = (function (arglist__29338){
var _ = cljs.core.seq(arglist__29338);
return G__29336__delegate(_);
});
G__29336.cljs$core$IFn$_invoke$arity$variadic = G__29336__delegate;
return G__29336;
})()
,(function() { 
var G__29339__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__29339 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29340__i = 0, G__29340__a = new Array(arguments.length -  0);
while (G__29340__i < G__29340__a.length) {G__29340__a[G__29340__i] = arguments[G__29340__i + 0]; ++G__29340__i;}
  _ = new cljs.core.IndexedSeq(G__29340__a,0,null);
} 
return G__29339__delegate.call(this,_);};
G__29339.cljs$lang$maxFixedArity = 0;
G__29339.cljs$lang$applyTo = (function (arglist__29341){
var _ = cljs.core.seq(arglist__29341);
return G__29339__delegate(_);
});
G__29339.cljs$core$IFn$_invoke$arity$variadic = G__29339__delegate;
return G__29339;
})()
,(function() { 
var G__29342__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__29342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29343__i = 0, G__29343__a = new Array(arguments.length -  0);
while (G__29343__i < G__29343__a.length) {G__29343__a[G__29343__i] = arguments[G__29343__i + 0]; ++G__29343__i;}
  args = new cljs.core.IndexedSeq(G__29343__a,0,null);
} 
return G__29342__delegate.call(this,args);};
G__29342.cljs$lang$maxFixedArity = 0;
G__29342.cljs$lang$applyTo = (function (arglist__29344){
var args = cljs.core.seq(arglist__29344);
return G__29342__delegate(args);
});
G__29342.cljs$core$IFn$_invoke$arity$variadic = G__29342__delegate;
return G__29342;
})()
,(function() { 
var G__29345__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__29345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29346__i = 0, G__29346__a = new Array(arguments.length -  0);
while (G__29346__i < G__29346__a.length) {G__29346__a[G__29346__i] = arguments[G__29346__i + 0]; ++G__29346__i;}
  args = new cljs.core.IndexedSeq(G__29346__a,0,null);
} 
return G__29345__delegate.call(this,args);};
G__29345.cljs$lang$maxFixedArity = 0;
G__29345.cljs$lang$applyTo = (function (arglist__29347){
var args = cljs.core.seq(arglist__29347);
return G__29345__delegate(args);
});
G__29345.cljs$core$IFn$_invoke$arity$variadic = G__29345__delegate;
return G__29345;
})()
,(function() { 
var G__29348__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__29348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29349__i = 0, G__29349__a = new Array(arguments.length -  0);
while (G__29349__i < G__29349__a.length) {G__29349__a[G__29349__i] = arguments[G__29349__i + 0]; ++G__29349__i;}
  args = new cljs.core.IndexedSeq(G__29349__a,0,null);
} 
return G__29348__delegate.call(this,args);};
G__29348.cljs$lang$maxFixedArity = 0;
G__29348.cljs$lang$applyTo = (function (arglist__29350){
var args = cljs.core.seq(arglist__29350);
return G__29348__delegate(args);
});
G__29348.cljs$core$IFn$_invoke$arity$variadic = G__29348__delegate;
return G__29348;
})()
,(function() { 
var G__29351__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__29351 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29352__i = 0, G__29352__a = new Array(arguments.length -  0);
while (G__29352__i < G__29352__a.length) {G__29352__a[G__29352__i] = arguments[G__29352__i + 0]; ++G__29352__i;}
  _ = new cljs.core.IndexedSeq(G__29352__a,0,null);
} 
return G__29351__delegate.call(this,_);};
G__29351.cljs$lang$maxFixedArity = 0;
G__29351.cljs$lang$applyTo = (function (arglist__29353){
var _ = cljs.core.seq(arglist__29353);
return G__29351__delegate(_);
});
G__29351.cljs$core$IFn$_invoke$arity$variadic = G__29351__delegate;
return G__29351;
})()
,(function() { 
var G__29354__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__29354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29355__i = 0, G__29355__a = new Array(arguments.length -  0);
while (G__29355__i < G__29355__a.length) {G__29355__a[G__29355__i] = arguments[G__29355__i + 0]; ++G__29355__i;}
  args = new cljs.core.IndexedSeq(G__29355__a,0,null);
} 
return G__29354__delegate.call(this,args);};
G__29354.cljs$lang$maxFixedArity = 0;
G__29354.cljs$lang$applyTo = (function (arglist__29356){
var args = cljs.core.seq(arglist__29356);
return G__29354__delegate(args);
});
G__29354.cljs$core$IFn$_invoke$arity$variadic = G__29354__delegate;
return G__29354;
})()
,(function() { 
var G__29357__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__29357 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29358__i = 0, G__29358__a = new Array(arguments.length -  0);
while (G__29358__i < G__29358__a.length) {G__29358__a[G__29358__i] = arguments[G__29358__i + 0]; ++G__29358__i;}
  _ = new cljs.core.IndexedSeq(G__29358__a,0,null);
} 
return G__29357__delegate.call(this,_);};
G__29357.cljs$lang$maxFixedArity = 0;
G__29357.cljs$lang$applyTo = (function (arglist__29359){
var _ = cljs.core.seq(arglist__29359);
return G__29357__delegate(_);
});
G__29357.cljs$core$IFn$_invoke$arity$variadic = G__29357__delegate;
return G__29357;
})()
,(function() { 
var G__29360__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__29360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29361__i = 0, G__29361__a = new Array(arguments.length -  0);
while (G__29361__i < G__29361__a.length) {G__29361__a[G__29361__i] = arguments[G__29361__i + 0]; ++G__29361__i;}
  args = new cljs.core.IndexedSeq(G__29361__a,0,null);
} 
return G__29360__delegate.call(this,args);};
G__29360.cljs$lang$maxFixedArity = 0;
G__29360.cljs$lang$applyTo = (function (arglist__29362){
var args = cljs.core.seq(arglist__29362);
return G__29360__delegate(args);
});
G__29360.cljs$core$IFn$_invoke$arity$variadic = G__29360__delegate;
return G__29360;
})()
,(function() { 
var G__29363__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__29363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29364__i = 0, G__29364__a = new Array(arguments.length -  0);
while (G__29364__i < G__29364__a.length) {G__29364__a[G__29364__i] = arguments[G__29364__i + 0]; ++G__29364__i;}
  args = new cljs.core.IndexedSeq(G__29364__a,0,null);
} 
return G__29363__delegate.call(this,args);};
G__29363.cljs$lang$maxFixedArity = 0;
G__29363.cljs$lang$applyTo = (function (arglist__29365){
var args = cljs.core.seq(arglist__29365);
return G__29363__delegate(args);
});
G__29363.cljs$core$IFn$_invoke$arity$variadic = G__29363__delegate;
return G__29363;
})()
,(function() { 
var G__29366__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__29366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29367__i = 0, G__29367__a = new Array(arguments.length -  0);
while (G__29367__i < G__29367__a.length) {G__29367__a[G__29367__i] = arguments[G__29367__i + 0]; ++G__29367__i;}
  args = new cljs.core.IndexedSeq(G__29367__a,0,null);
} 
return G__29366__delegate.call(this,args);};
G__29366.cljs$lang$maxFixedArity = 0;
G__29366.cljs$lang$applyTo = (function (arglist__29368){
var args = cljs.core.seq(arglist__29368);
return G__29366__delegate(args);
});
G__29366.cljs$core$IFn$_invoke$arity$variadic = G__29366__delegate;
return G__29366;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__29369__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__29369 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29370__i = 0, G__29370__a = new Array(arguments.length -  0);
while (G__29370__i < G__29370__a.length) {G__29370__a[G__29370__i] = arguments[G__29370__i + 0]; ++G__29370__i;}
  _ = new cljs.core.IndexedSeq(G__29370__a,0,null);
} 
return G__29369__delegate.call(this,_);};
G__29369.cljs$lang$maxFixedArity = 0;
G__29369.cljs$lang$applyTo = (function (arglist__29371){
var _ = cljs.core.seq(arglist__29371);
return G__29369__delegate(_);
});
G__29369.cljs$core$IFn$_invoke$arity$variadic = G__29369__delegate;
return G__29369;
})()
,(function() { 
var G__29372__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__29372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29373__i = 0, G__29373__a = new Array(arguments.length -  0);
while (G__29373__i < G__29373__a.length) {G__29373__a[G__29373__i] = arguments[G__29373__i + 0]; ++G__29373__i;}
  args = new cljs.core.IndexedSeq(G__29373__a,0,null);
} 
return G__29372__delegate.call(this,args);};
G__29372.cljs$lang$maxFixedArity = 0;
G__29372.cljs$lang$applyTo = (function (arglist__29374){
var args = cljs.core.seq(arglist__29374);
return G__29372__delegate(args);
});
G__29372.cljs$core$IFn$_invoke$arity$variadic = G__29372__delegate;
return G__29372;
})()
,(function() { 
var G__29375__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__29375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29376__i = 0, G__29376__a = new Array(arguments.length -  0);
while (G__29376__i < G__29376__a.length) {G__29376__a[G__29376__i] = arguments[G__29376__i + 0]; ++G__29376__i;}
  args = new cljs.core.IndexedSeq(G__29376__a,0,null);
} 
return G__29375__delegate.call(this,args);};
G__29375.cljs$lang$maxFixedArity = 0;
G__29375.cljs$lang$applyTo = (function (arglist__29377){
var args = cljs.core.seq(arglist__29377);
return G__29375__delegate(args);
});
G__29375.cljs$core$IFn$_invoke$arity$variadic = G__29375__delegate;
return G__29375;
})()
]));
});
placesurfer.web_app.init.read_app_version = (function placesurfer$web_app$init$read_app_version(){
var temp__5823__auto__ = document.querySelector("meta[name=app-version]");
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
return parseInt(el.getAttribute("content"),(10));
} else {
return null;
}
});
placesurfer.web_app.init.load_layers_config_BANG_ = (function placesurfer$web_app$init$load_layers_config_BANG_(){
return fetch("/data/layers/layers.json").then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.json();
} else {
return null;
}
})).then((function (data){
if(cljs.core.truth_(data)){
var layers = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.seq(layers)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771),layers);

return placesurfer.web_app.draw_layers.sync_reference_images_BANG_();
} else {
return null;
}
} else {
return null;
}
})).catch((function (_){
return null;
}));
});
placesurfer.web_app.init.wire_draw_save_BANG_ = (function placesurfer$web_app$init$wire_draw_save_BANG_(){
placesurfer.map_ui.interface$.set_draw_on_save_BANG_((function (fc){
var layer_id = new cljs.core.Keyword(null,"draw-selected-layer-id","draw-selected-layer-id",-1205706411).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state));
var layer = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29322_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29322_SHARP_),layer_id);
}),new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state))));
if(cljs.core.truth_((function (){var and__5023__auto__ = layer_id;
if(cljs.core.truth_(and__5023__auto__)){
return (!(placesurfer.web_app.draw_layers.image_layer_QMARK_(layer)));
} else {
return and__5023__auto__;
}
})())){
return fetch("/api/backend/save-layer",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-id","layer-id",576786958),layer_id,new cljs.core.Keyword(null,"geojson","geojson",-719473398),fc], null)))], null))).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return null;
} else {
return console.error("Kunde inte spara lager",resp.status);
}
})).catch((function (err){
return console.error("Fel vid sparning av lager",err);
}));
} else {
return null;
}
}));

placesurfer.map_ui.interface$.set_draw_on_map_ready_BANG_((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))){
return placesurfer.web_app.draw_layers.enter_draw_page_BANG_();
} else {
return null;
}
}));

placesurfer.map_ui.interface$.set_reference_image_on_paste_BANG_(placesurfer.web_app.draw_layers.add_image_layer_BANG_);

return placesurfer.map_ui.interface$.set_reference_image_on_change_BANG_(placesurfer.web_app.draw_layers.image_bounds_changed_BANG_);
});
/**
 * Trash icon in a map popup, for both saved pins and search-result markers -
 * routes to the same soft-delete (search results) / remove (pin) logic the
 * list's own trash icon per row already uses. Only :pin gets the saved-pin
 * path; every other deletable topic is a search-result marker (Hemnet,
 * Booli, Notar, ...) and routes to discard-result!, which is itself keyed
 * off :id against :search-results - so this stays correct automatically as
 * new sources are added (see map-ui.popup/deletable-marker-topics for which
 * topics even render a trash icon).
 */
placesurfer.web_app.init.handle_marker_delete_BANG_ = (function placesurfer$web_app$init$handle_marker_delete_BANG_(position){
var temp__5823__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154).cljs$core$IFn$_invoke$arity$1(position))){
return placesurfer.pin_ui.interface$.handlers.rows.delete_pin_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
return placesurfer.pin_ui.interface$.handlers.hemnet_search.discard_result_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}
} else {
return null;
}
});
/**
 * Pencil icon in a map popup - only ever rendered for :pin markers (see
 * popup.cljs's editable-marker-topics), so no further dispatch needed here.
 */
placesurfer.web_app.init.handle_marker_edit_BANG_ = (function placesurfer$web_app$init$handle_marker_edit_BANG_(position){
var temp__5823__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return placesurfer.web_app.nav.open_pin_in_editor_BANG_(id);
} else {
return null;
}
});
placesurfer.web_app.init.init_BANG_ = (function placesurfer$web_app$init$init_BANG_(){
placesurfer.web_app.init.wire_effects_BANG_();

placesurfer.web_app.init.wire_draw_save_BANG_();

placesurfer.map_ui.interface$.set_on_marker_click_handler_BANG_(placesurfer.pin_ui.interface$.handlers.hemnet_search.handle_marker_click_BANG_);

placesurfer.map_ui.interface$.set_on_marker_delete_handler_BANG_(placesurfer.web_app.init.handle_marker_delete_BANG_);

placesurfer.map_ui.interface$.set_on_marker_edit_handler_BANG_(placesurfer.web_app.init.handle_marker_edit_BANG_);

placesurfer.web_app.dropbox.init_BANG_();

var temp__5823__auto___29378 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5823__auto___29378)){
var v_29379 = temp__5823__auto___29378;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_29379);
} else {
}

placesurfer.web_app.locale.init_locale_BANG_();

placesurfer.map_ui.interface$.set_draw_t_BANG_(placesurfer.web_app.locale.make_t(cljs.core.deref(placesurfer.web_app.state._BANG_state)));

placesurfer.web_app.init.load_layers_config_BANG_();

placesurfer.pin_ui.interface$.handlers.form.load_pin_icons_BANG_();

placesurfer.pin_ui.interface$.handlers.form.load_pins_from_storage_BANG_();

placesurfer.web_app.render.render_BANG_();

placesurfer.map_panel_ui.interface$.layout.sync_layout_BANG_();

placesurfer.map_panel_ui.interface$.layout.observe_nav_BANG_(placesurfer.web_app.map_sync.schedule_map_resize_BANG_);

placesurfer.web_app.dropbox.sync_state_BANG_();

placesurfer.app_ui.interface$.load.init_load_BANG_().then((function (_){
placesurfer.web_app.dropbox.sync_state_BANG_();

return placesurfer.pin_ui.interface$.handlers.form.load_pins_from_storage_BANG_();
})).catch((function (_){
placesurfer.web_app.dropbox.sync_state_BANG_();

return placesurfer.pin_ui.interface$.handlers.form.load_pins_from_storage_BANG_();
}));

document.addEventListener("keydown",placesurfer.web_app.keyboard.on_document_keydown_BANG_);

document.addEventListener("paste",placesurfer.web_app.clipboard.on_document_paste_BANG_);

document.addEventListener("click",(function (e){
var temp__5823__auto__ = e.target.closest(".map-popup-source-link");
if(cljs.core.truth_(temp__5823__auto__)){
var link = temp__5823__auto__;
e.preventDefault();

var temp__5823__auto___29380__$1 = link.getAttribute("href");
if(cljs.core.truth_(temp__5823__auto___29380__$1)){
var href_29381 = temp__5823__auto___29380__$1;
var temp__5823__auto___29382__$2 = cljs.core.re_find(/(#.+)$/,href_29381);
if(cljs.core.truth_(temp__5823__auto___29382__$2)){
var vec__29323_29383 = temp__5823__auto___29382__$2;
var __29384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29323_29383,(0),null);
var hash_29385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29323_29383,(1),null);
(location.hash = hash_29385);
} else {
}
} else {
}

return placesurfer.web_app.nav.navigate_BANG_(new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}));

window.addEventListener("resize",(function (){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
}));

try{placesurfer.web_app.nav.track_page_BANG_(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)));
}catch (e29326){var __29386 = e29326;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
