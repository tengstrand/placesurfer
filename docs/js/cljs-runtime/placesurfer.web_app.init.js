goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__64279__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__64279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64280__i = 0, G__64280__a = new Array(arguments.length -  0);
while (G__64280__i < G__64280__a.length) {G__64280__a[G__64280__i] = arguments[G__64280__i + 0]; ++G__64280__i;}
  args = new cljs.core.IndexedSeq(G__64280__a,0,null);
} 
return G__64279__delegate.call(this,args);};
G__64279.cljs$lang$maxFixedArity = 0;
G__64279.cljs$lang$applyTo = (function (arglist__64281){
var args = cljs.core.seq(arglist__64281);
return G__64279__delegate(args);
});
G__64279.cljs$core$IFn$_invoke$arity$variadic = G__64279__delegate;
return G__64279;
})()
,(function() { 
var G__64282__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__64282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64283__i = 0, G__64283__a = new Array(arguments.length -  0);
while (G__64283__i < G__64283__a.length) {G__64283__a[G__64283__i] = arguments[G__64283__i + 0]; ++G__64283__i;}
  args = new cljs.core.IndexedSeq(G__64283__a,0,null);
} 
return G__64282__delegate.call(this,args);};
G__64282.cljs$lang$maxFixedArity = 0;
G__64282.cljs$lang$applyTo = (function (arglist__64284){
var args = cljs.core.seq(arglist__64284);
return G__64282__delegate(args);
});
G__64282.cljs$core$IFn$_invoke$arity$variadic = G__64282__delegate;
return G__64282;
})()
,(function() { 
var G__64285__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__64285 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__64286__i = 0, G__64286__a = new Array(arguments.length -  0);
while (G__64286__i < G__64286__a.length) {G__64286__a[G__64286__i] = arguments[G__64286__i + 0]; ++G__64286__i;}
  _ = new cljs.core.IndexedSeq(G__64286__a,0,null);
} 
return G__64285__delegate.call(this,_);};
G__64285.cljs$lang$maxFixedArity = 0;
G__64285.cljs$lang$applyTo = (function (arglist__64287){
var _ = cljs.core.seq(arglist__64287);
return G__64285__delegate(_);
});
G__64285.cljs$core$IFn$_invoke$arity$variadic = G__64285__delegate;
return G__64285;
})()
,(function() { 
var G__64288__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__64288 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__64289__i = 0, G__64289__a = new Array(arguments.length -  0);
while (G__64289__i < G__64289__a.length) {G__64289__a[G__64289__i] = arguments[G__64289__i + 0]; ++G__64289__i;}
  _ = new cljs.core.IndexedSeq(G__64289__a,0,null);
} 
return G__64288__delegate.call(this,_);};
G__64288.cljs$lang$maxFixedArity = 0;
G__64288.cljs$lang$applyTo = (function (arglist__64290){
var _ = cljs.core.seq(arglist__64290);
return G__64288__delegate(_);
});
G__64288.cljs$core$IFn$_invoke$arity$variadic = G__64288__delegate;
return G__64288;
})()
,(function() { 
var G__64291__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__64291 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__64292__i = 0, G__64292__a = new Array(arguments.length -  0);
while (G__64292__i < G__64292__a.length) {G__64292__a[G__64292__i] = arguments[G__64292__i + 0]; ++G__64292__i;}
  _ = new cljs.core.IndexedSeq(G__64292__a,0,null);
} 
return G__64291__delegate.call(this,_);};
G__64291.cljs$lang$maxFixedArity = 0;
G__64291.cljs$lang$applyTo = (function (arglist__64293){
var _ = cljs.core.seq(arglist__64293);
return G__64291__delegate(_);
});
G__64291.cljs$core$IFn$_invoke$arity$variadic = G__64291__delegate;
return G__64291;
})()
,(function() { 
var G__64294__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__64294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64295__i = 0, G__64295__a = new Array(arguments.length -  0);
while (G__64295__i < G__64295__a.length) {G__64295__a[G__64295__i] = arguments[G__64295__i + 0]; ++G__64295__i;}
  args = new cljs.core.IndexedSeq(G__64295__a,0,null);
} 
return G__64294__delegate.call(this,args);};
G__64294.cljs$lang$maxFixedArity = 0;
G__64294.cljs$lang$applyTo = (function (arglist__64296){
var args = cljs.core.seq(arglist__64296);
return G__64294__delegate(args);
});
G__64294.cljs$core$IFn$_invoke$arity$variadic = G__64294__delegate;
return G__64294;
})()
,(function() { 
var G__64297__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__64297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64298__i = 0, G__64298__a = new Array(arguments.length -  0);
while (G__64298__i < G__64298__a.length) {G__64298__a[G__64298__i] = arguments[G__64298__i + 0]; ++G__64298__i;}
  args = new cljs.core.IndexedSeq(G__64298__a,0,null);
} 
return G__64297__delegate.call(this,args);};
G__64297.cljs$lang$maxFixedArity = 0;
G__64297.cljs$lang$applyTo = (function (arglist__64299){
var args = cljs.core.seq(arglist__64299);
return G__64297__delegate(args);
});
G__64297.cljs$core$IFn$_invoke$arity$variadic = G__64297__delegate;
return G__64297;
})()
,(function() { 
var G__64300__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__64300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64301__i = 0, G__64301__a = new Array(arguments.length -  0);
while (G__64301__i < G__64301__a.length) {G__64301__a[G__64301__i] = arguments[G__64301__i + 0]; ++G__64301__i;}
  args = new cljs.core.IndexedSeq(G__64301__a,0,null);
} 
return G__64300__delegate.call(this,args);};
G__64300.cljs$lang$maxFixedArity = 0;
G__64300.cljs$lang$applyTo = (function (arglist__64302){
var args = cljs.core.seq(arglist__64302);
return G__64300__delegate(args);
});
G__64300.cljs$core$IFn$_invoke$arity$variadic = G__64300__delegate;
return G__64300;
})()
,(function() { 
var G__64303__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__64303 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__64304__i = 0, G__64304__a = new Array(arguments.length -  0);
while (G__64304__i < G__64304__a.length) {G__64304__a[G__64304__i] = arguments[G__64304__i + 0]; ++G__64304__i;}
  _ = new cljs.core.IndexedSeq(G__64304__a,0,null);
} 
return G__64303__delegate.call(this,_);};
G__64303.cljs$lang$maxFixedArity = 0;
G__64303.cljs$lang$applyTo = (function (arglist__64305){
var _ = cljs.core.seq(arglist__64305);
return G__64303__delegate(_);
});
G__64303.cljs$core$IFn$_invoke$arity$variadic = G__64303__delegate;
return G__64303;
})()
,(function() { 
var G__64306__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__64306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64307__i = 0, G__64307__a = new Array(arguments.length -  0);
while (G__64307__i < G__64307__a.length) {G__64307__a[G__64307__i] = arguments[G__64307__i + 0]; ++G__64307__i;}
  args = new cljs.core.IndexedSeq(G__64307__a,0,null);
} 
return G__64306__delegate.call(this,args);};
G__64306.cljs$lang$maxFixedArity = 0;
G__64306.cljs$lang$applyTo = (function (arglist__64308){
var args = cljs.core.seq(arglist__64308);
return G__64306__delegate(args);
});
G__64306.cljs$core$IFn$_invoke$arity$variadic = G__64306__delegate;
return G__64306;
})()
,(function() { 
var G__64309__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__64309 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__64310__i = 0, G__64310__a = new Array(arguments.length -  0);
while (G__64310__i < G__64310__a.length) {G__64310__a[G__64310__i] = arguments[G__64310__i + 0]; ++G__64310__i;}
  _ = new cljs.core.IndexedSeq(G__64310__a,0,null);
} 
return G__64309__delegate.call(this,_);};
G__64309.cljs$lang$maxFixedArity = 0;
G__64309.cljs$lang$applyTo = (function (arglist__64311){
var _ = cljs.core.seq(arglist__64311);
return G__64309__delegate(_);
});
G__64309.cljs$core$IFn$_invoke$arity$variadic = G__64309__delegate;
return G__64309;
})()
,(function() { 
var G__64312__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__64312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64313__i = 0, G__64313__a = new Array(arguments.length -  0);
while (G__64313__i < G__64313__a.length) {G__64313__a[G__64313__i] = arguments[G__64313__i + 0]; ++G__64313__i;}
  args = new cljs.core.IndexedSeq(G__64313__a,0,null);
} 
return G__64312__delegate.call(this,args);};
G__64312.cljs$lang$maxFixedArity = 0;
G__64312.cljs$lang$applyTo = (function (arglist__64314){
var args = cljs.core.seq(arglist__64314);
return G__64312__delegate(args);
});
G__64312.cljs$core$IFn$_invoke$arity$variadic = G__64312__delegate;
return G__64312;
})()
,(function() { 
var G__64315__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__64315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64316__i = 0, G__64316__a = new Array(arguments.length -  0);
while (G__64316__i < G__64316__a.length) {G__64316__a[G__64316__i] = arguments[G__64316__i + 0]; ++G__64316__i;}
  args = new cljs.core.IndexedSeq(G__64316__a,0,null);
} 
return G__64315__delegate.call(this,args);};
G__64315.cljs$lang$maxFixedArity = 0;
G__64315.cljs$lang$applyTo = (function (arglist__64317){
var args = cljs.core.seq(arglist__64317);
return G__64315__delegate(args);
});
G__64315.cljs$core$IFn$_invoke$arity$variadic = G__64315__delegate;
return G__64315;
})()
,(function() { 
var G__64318__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__64318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64319__i = 0, G__64319__a = new Array(arguments.length -  0);
while (G__64319__i < G__64319__a.length) {G__64319__a[G__64319__i] = arguments[G__64319__i + 0]; ++G__64319__i;}
  args = new cljs.core.IndexedSeq(G__64319__a,0,null);
} 
return G__64318__delegate.call(this,args);};
G__64318.cljs$lang$maxFixedArity = 0;
G__64318.cljs$lang$applyTo = (function (arglist__64320){
var args = cljs.core.seq(arglist__64320);
return G__64318__delegate(args);
});
G__64318.cljs$core$IFn$_invoke$arity$variadic = G__64318__delegate;
return G__64318;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__64321__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__64321 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__64322__i = 0, G__64322__a = new Array(arguments.length -  0);
while (G__64322__i < G__64322__a.length) {G__64322__a[G__64322__i] = arguments[G__64322__i + 0]; ++G__64322__i;}
  _ = new cljs.core.IndexedSeq(G__64322__a,0,null);
} 
return G__64321__delegate.call(this,_);};
G__64321.cljs$lang$maxFixedArity = 0;
G__64321.cljs$lang$applyTo = (function (arglist__64323){
var _ = cljs.core.seq(arglist__64323);
return G__64321__delegate(_);
});
G__64321.cljs$core$IFn$_invoke$arity$variadic = G__64321__delegate;
return G__64321;
})()
,(function() { 
var G__64324__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__64324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64325__i = 0, G__64325__a = new Array(arguments.length -  0);
while (G__64325__i < G__64325__a.length) {G__64325__a[G__64325__i] = arguments[G__64325__i + 0]; ++G__64325__i;}
  args = new cljs.core.IndexedSeq(G__64325__a,0,null);
} 
return G__64324__delegate.call(this,args);};
G__64324.cljs$lang$maxFixedArity = 0;
G__64324.cljs$lang$applyTo = (function (arglist__64326){
var args = cljs.core.seq(arglist__64326);
return G__64324__delegate(args);
});
G__64324.cljs$core$IFn$_invoke$arity$variadic = G__64324__delegate;
return G__64324;
})()
,(function() { 
var G__64327__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__64327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64328__i = 0, G__64328__a = new Array(arguments.length -  0);
while (G__64328__i < G__64328__a.length) {G__64328__a[G__64328__i] = arguments[G__64328__i + 0]; ++G__64328__i;}
  args = new cljs.core.IndexedSeq(G__64328__a,0,null);
} 
return G__64327__delegate.call(this,args);};
G__64327.cljs$lang$maxFixedArity = 0;
G__64327.cljs$lang$applyTo = (function (arglist__64329){
var args = cljs.core.seq(arglist__64329);
return G__64327__delegate(args);
});
G__64327.cljs$core$IFn$_invoke$arity$variadic = G__64327__delegate;
return G__64327;
})()
]));
});
placesurfer.web_app.init.read_app_version = (function placesurfer$web_app$init$read_app_version(){
var temp__5825__auto__ = document.querySelector("meta[name=app-version]");
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771),layers);
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
if(cljs.core.truth_(layer_id)){
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

return placesurfer.map_ui.interface$.set_draw_on_map_ready_BANG_((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))){
var temp__5825__auto__ = new cljs.core.Keyword(null,"draw-selected-layer-id","draw-selected-layer-id",-1205706411).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto__)){
var layer_id = temp__5825__auto__;
return placesurfer.map_ui.interface$.load_draw_layer_BANG_(layer_id);
} else {
return null;
}
} else {
return null;
}
}));
});
placesurfer.web_app.init.init_BANG_ = (function placesurfer$web_app$init$init_BANG_(){
placesurfer.web_app.init.wire_effects_BANG_();

placesurfer.web_app.init.wire_draw_save_BANG_();

var temp__5825__auto___64330 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5825__auto___64330)){
var v_64331 = temp__5825__auto___64330;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_64331);
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

placesurfer.app_ui.interface$.load.init_load_BANG_();

document.addEventListener("keydown",placesurfer.web_app.keyboard.on_document_keydown_BANG_);

document.addEventListener("paste",placesurfer.web_app.clipboard.on_document_paste_BANG_);

document.addEventListener("click",(function (e){
var temp__5825__auto__ = e.target.closest(".map-popup-source-link");
if(cljs.core.truth_(temp__5825__auto__)){
var link = temp__5825__auto__;
e.preventDefault();

var temp__5825__auto___64332__$1 = link.getAttribute("href");
if(cljs.core.truth_(temp__5825__auto___64332__$1)){
var href_64333 = temp__5825__auto___64332__$1;
var temp__5825__auto___64334__$2 = cljs.core.re_find(/(#.+)$/,href_64333);
if(cljs.core.truth_(temp__5825__auto___64334__$2)){
var vec__64275_64335 = temp__5825__auto___64334__$2;
var __64336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64275_64335,(0),null);
var hash_64337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64275_64335,(1),null);
(location.hash = hash_64337);
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
}catch (e64278){var __64338 = e64278;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
