goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__24246__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__24246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24247__i = 0, G__24247__a = new Array(arguments.length -  0);
while (G__24247__i < G__24247__a.length) {G__24247__a[G__24247__i] = arguments[G__24247__i + 0]; ++G__24247__i;}
  args = new cljs.core.IndexedSeq(G__24247__a,0,null);
} 
return G__24246__delegate.call(this,args);};
G__24246.cljs$lang$maxFixedArity = 0;
G__24246.cljs$lang$applyTo = (function (arglist__24248){
var args = cljs.core.seq(arglist__24248);
return G__24246__delegate(args);
});
G__24246.cljs$core$IFn$_invoke$arity$variadic = G__24246__delegate;
return G__24246;
})()
,(function() { 
var G__24249__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__24249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24250__i = 0, G__24250__a = new Array(arguments.length -  0);
while (G__24250__i < G__24250__a.length) {G__24250__a[G__24250__i] = arguments[G__24250__i + 0]; ++G__24250__i;}
  args = new cljs.core.IndexedSeq(G__24250__a,0,null);
} 
return G__24249__delegate.call(this,args);};
G__24249.cljs$lang$maxFixedArity = 0;
G__24249.cljs$lang$applyTo = (function (arglist__24251){
var args = cljs.core.seq(arglist__24251);
return G__24249__delegate(args);
});
G__24249.cljs$core$IFn$_invoke$arity$variadic = G__24249__delegate;
return G__24249;
})()
,(function() { 
var G__24252__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__24252 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__24253__i = 0, G__24253__a = new Array(arguments.length -  0);
while (G__24253__i < G__24253__a.length) {G__24253__a[G__24253__i] = arguments[G__24253__i + 0]; ++G__24253__i;}
  _ = new cljs.core.IndexedSeq(G__24253__a,0,null);
} 
return G__24252__delegate.call(this,_);};
G__24252.cljs$lang$maxFixedArity = 0;
G__24252.cljs$lang$applyTo = (function (arglist__24254){
var _ = cljs.core.seq(arglist__24254);
return G__24252__delegate(_);
});
G__24252.cljs$core$IFn$_invoke$arity$variadic = G__24252__delegate;
return G__24252;
})()
,(function() { 
var G__24255__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__24255 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__24256__i = 0, G__24256__a = new Array(arguments.length -  0);
while (G__24256__i < G__24256__a.length) {G__24256__a[G__24256__i] = arguments[G__24256__i + 0]; ++G__24256__i;}
  _ = new cljs.core.IndexedSeq(G__24256__a,0,null);
} 
return G__24255__delegate.call(this,_);};
G__24255.cljs$lang$maxFixedArity = 0;
G__24255.cljs$lang$applyTo = (function (arglist__24257){
var _ = cljs.core.seq(arglist__24257);
return G__24255__delegate(_);
});
G__24255.cljs$core$IFn$_invoke$arity$variadic = G__24255__delegate;
return G__24255;
})()
,(function() { 
var G__24258__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__24258 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__24259__i = 0, G__24259__a = new Array(arguments.length -  0);
while (G__24259__i < G__24259__a.length) {G__24259__a[G__24259__i] = arguments[G__24259__i + 0]; ++G__24259__i;}
  _ = new cljs.core.IndexedSeq(G__24259__a,0,null);
} 
return G__24258__delegate.call(this,_);};
G__24258.cljs$lang$maxFixedArity = 0;
G__24258.cljs$lang$applyTo = (function (arglist__24260){
var _ = cljs.core.seq(arglist__24260);
return G__24258__delegate(_);
});
G__24258.cljs$core$IFn$_invoke$arity$variadic = G__24258__delegate;
return G__24258;
})()
,(function() { 
var G__24261__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__24261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24262__i = 0, G__24262__a = new Array(arguments.length -  0);
while (G__24262__i < G__24262__a.length) {G__24262__a[G__24262__i] = arguments[G__24262__i + 0]; ++G__24262__i;}
  args = new cljs.core.IndexedSeq(G__24262__a,0,null);
} 
return G__24261__delegate.call(this,args);};
G__24261.cljs$lang$maxFixedArity = 0;
G__24261.cljs$lang$applyTo = (function (arglist__24263){
var args = cljs.core.seq(arglist__24263);
return G__24261__delegate(args);
});
G__24261.cljs$core$IFn$_invoke$arity$variadic = G__24261__delegate;
return G__24261;
})()
,(function() { 
var G__24264__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__24264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24265__i = 0, G__24265__a = new Array(arguments.length -  0);
while (G__24265__i < G__24265__a.length) {G__24265__a[G__24265__i] = arguments[G__24265__i + 0]; ++G__24265__i;}
  args = new cljs.core.IndexedSeq(G__24265__a,0,null);
} 
return G__24264__delegate.call(this,args);};
G__24264.cljs$lang$maxFixedArity = 0;
G__24264.cljs$lang$applyTo = (function (arglist__24266){
var args = cljs.core.seq(arglist__24266);
return G__24264__delegate(args);
});
G__24264.cljs$core$IFn$_invoke$arity$variadic = G__24264__delegate;
return G__24264;
})()
,(function() { 
var G__24267__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__24267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24268__i = 0, G__24268__a = new Array(arguments.length -  0);
while (G__24268__i < G__24268__a.length) {G__24268__a[G__24268__i] = arguments[G__24268__i + 0]; ++G__24268__i;}
  args = new cljs.core.IndexedSeq(G__24268__a,0,null);
} 
return G__24267__delegate.call(this,args);};
G__24267.cljs$lang$maxFixedArity = 0;
G__24267.cljs$lang$applyTo = (function (arglist__24269){
var args = cljs.core.seq(arglist__24269);
return G__24267__delegate(args);
});
G__24267.cljs$core$IFn$_invoke$arity$variadic = G__24267__delegate;
return G__24267;
})()
,(function() { 
var G__24270__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__24270 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__24271__i = 0, G__24271__a = new Array(arguments.length -  0);
while (G__24271__i < G__24271__a.length) {G__24271__a[G__24271__i] = arguments[G__24271__i + 0]; ++G__24271__i;}
  _ = new cljs.core.IndexedSeq(G__24271__a,0,null);
} 
return G__24270__delegate.call(this,_);};
G__24270.cljs$lang$maxFixedArity = 0;
G__24270.cljs$lang$applyTo = (function (arglist__24272){
var _ = cljs.core.seq(arglist__24272);
return G__24270__delegate(_);
});
G__24270.cljs$core$IFn$_invoke$arity$variadic = G__24270__delegate;
return G__24270;
})()
,(function() { 
var G__24273__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__24273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24274__i = 0, G__24274__a = new Array(arguments.length -  0);
while (G__24274__i < G__24274__a.length) {G__24274__a[G__24274__i] = arguments[G__24274__i + 0]; ++G__24274__i;}
  args = new cljs.core.IndexedSeq(G__24274__a,0,null);
} 
return G__24273__delegate.call(this,args);};
G__24273.cljs$lang$maxFixedArity = 0;
G__24273.cljs$lang$applyTo = (function (arglist__24275){
var args = cljs.core.seq(arglist__24275);
return G__24273__delegate(args);
});
G__24273.cljs$core$IFn$_invoke$arity$variadic = G__24273__delegate;
return G__24273;
})()
,(function() { 
var G__24276__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__24276 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__24277__i = 0, G__24277__a = new Array(arguments.length -  0);
while (G__24277__i < G__24277__a.length) {G__24277__a[G__24277__i] = arguments[G__24277__i + 0]; ++G__24277__i;}
  _ = new cljs.core.IndexedSeq(G__24277__a,0,null);
} 
return G__24276__delegate.call(this,_);};
G__24276.cljs$lang$maxFixedArity = 0;
G__24276.cljs$lang$applyTo = (function (arglist__24278){
var _ = cljs.core.seq(arglist__24278);
return G__24276__delegate(_);
});
G__24276.cljs$core$IFn$_invoke$arity$variadic = G__24276__delegate;
return G__24276;
})()
,(function() { 
var G__24279__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__24279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24280__i = 0, G__24280__a = new Array(arguments.length -  0);
while (G__24280__i < G__24280__a.length) {G__24280__a[G__24280__i] = arguments[G__24280__i + 0]; ++G__24280__i;}
  args = new cljs.core.IndexedSeq(G__24280__a,0,null);
} 
return G__24279__delegate.call(this,args);};
G__24279.cljs$lang$maxFixedArity = 0;
G__24279.cljs$lang$applyTo = (function (arglist__24281){
var args = cljs.core.seq(arglist__24281);
return G__24279__delegate(args);
});
G__24279.cljs$core$IFn$_invoke$arity$variadic = G__24279__delegate;
return G__24279;
})()
,(function() { 
var G__24282__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__24282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24283__i = 0, G__24283__a = new Array(arguments.length -  0);
while (G__24283__i < G__24283__a.length) {G__24283__a[G__24283__i] = arguments[G__24283__i + 0]; ++G__24283__i;}
  args = new cljs.core.IndexedSeq(G__24283__a,0,null);
} 
return G__24282__delegate.call(this,args);};
G__24282.cljs$lang$maxFixedArity = 0;
G__24282.cljs$lang$applyTo = (function (arglist__24284){
var args = cljs.core.seq(arglist__24284);
return G__24282__delegate(args);
});
G__24282.cljs$core$IFn$_invoke$arity$variadic = G__24282__delegate;
return G__24282;
})()
,(function() { 
var G__24285__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__24285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24286__i = 0, G__24286__a = new Array(arguments.length -  0);
while (G__24286__i < G__24286__a.length) {G__24286__a[G__24286__i] = arguments[G__24286__i + 0]; ++G__24286__i;}
  args = new cljs.core.IndexedSeq(G__24286__a,0,null);
} 
return G__24285__delegate.call(this,args);};
G__24285.cljs$lang$maxFixedArity = 0;
G__24285.cljs$lang$applyTo = (function (arglist__24287){
var args = cljs.core.seq(arglist__24287);
return G__24285__delegate(args);
});
G__24285.cljs$core$IFn$_invoke$arity$variadic = G__24285__delegate;
return G__24285;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__24288__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__24288 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__24289__i = 0, G__24289__a = new Array(arguments.length -  0);
while (G__24289__i < G__24289__a.length) {G__24289__a[G__24289__i] = arguments[G__24289__i + 0]; ++G__24289__i;}
  _ = new cljs.core.IndexedSeq(G__24289__a,0,null);
} 
return G__24288__delegate.call(this,_);};
G__24288.cljs$lang$maxFixedArity = 0;
G__24288.cljs$lang$applyTo = (function (arglist__24290){
var _ = cljs.core.seq(arglist__24290);
return G__24288__delegate(_);
});
G__24288.cljs$core$IFn$_invoke$arity$variadic = G__24288__delegate;
return G__24288;
})()
,(function() { 
var G__24291__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__24291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24292__i = 0, G__24292__a = new Array(arguments.length -  0);
while (G__24292__i < G__24292__a.length) {G__24292__a[G__24292__i] = arguments[G__24292__i + 0]; ++G__24292__i;}
  args = new cljs.core.IndexedSeq(G__24292__a,0,null);
} 
return G__24291__delegate.call(this,args);};
G__24291.cljs$lang$maxFixedArity = 0;
G__24291.cljs$lang$applyTo = (function (arglist__24293){
var args = cljs.core.seq(arglist__24293);
return G__24291__delegate(args);
});
G__24291.cljs$core$IFn$_invoke$arity$variadic = G__24291__delegate;
return G__24291;
})()
,(function() { 
var G__24294__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__24294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24295__i = 0, G__24295__a = new Array(arguments.length -  0);
while (G__24295__i < G__24295__a.length) {G__24295__a[G__24295__i] = arguments[G__24295__i + 0]; ++G__24295__i;}
  args = new cljs.core.IndexedSeq(G__24295__a,0,null);
} 
return G__24294__delegate.call(this,args);};
G__24294.cljs$lang$maxFixedArity = 0;
G__24294.cljs$lang$applyTo = (function (arglist__24296){
var args = cljs.core.seq(arglist__24296);
return G__24294__delegate(args);
});
G__24294.cljs$core$IFn$_invoke$arity$variadic = G__24294__delegate;
return G__24294;
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
var layer = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24241_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__24241_SHARP_),layer_id);
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

var temp__5823__auto___24297 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5823__auto___24297)){
var v_24298 = temp__5823__auto___24297;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_24298);
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

var temp__5823__auto___24299__$1 = link.getAttribute("href");
if(cljs.core.truth_(temp__5823__auto___24299__$1)){
var href_24300 = temp__5823__auto___24299__$1;
var temp__5823__auto___24301__$2 = cljs.core.re_find(/(#.+)$/,href_24300);
if(cljs.core.truth_(temp__5823__auto___24301__$2)){
var vec__24242_24302 = temp__5823__auto___24301__$2;
var __24303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24242_24302,(0),null);
var hash_24304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24242_24302,(1),null);
(location.hash = hash_24304);
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
}catch (e24245){var __24305 = e24245;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
