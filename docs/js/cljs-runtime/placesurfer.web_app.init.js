goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__60458__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__60458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60459__i = 0, G__60459__a = new Array(arguments.length -  0);
while (G__60459__i < G__60459__a.length) {G__60459__a[G__60459__i] = arguments[G__60459__i + 0]; ++G__60459__i;}
  args = new cljs.core.IndexedSeq(G__60459__a,0,null);
} 
return G__60458__delegate.call(this,args);};
G__60458.cljs$lang$maxFixedArity = 0;
G__60458.cljs$lang$applyTo = (function (arglist__60460){
var args = cljs.core.seq(arglist__60460);
return G__60458__delegate(args);
});
G__60458.cljs$core$IFn$_invoke$arity$variadic = G__60458__delegate;
return G__60458;
})()
,(function() { 
var G__60461__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__60461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60462__i = 0, G__60462__a = new Array(arguments.length -  0);
while (G__60462__i < G__60462__a.length) {G__60462__a[G__60462__i] = arguments[G__60462__i + 0]; ++G__60462__i;}
  args = new cljs.core.IndexedSeq(G__60462__a,0,null);
} 
return G__60461__delegate.call(this,args);};
G__60461.cljs$lang$maxFixedArity = 0;
G__60461.cljs$lang$applyTo = (function (arglist__60463){
var args = cljs.core.seq(arglist__60463);
return G__60461__delegate(args);
});
G__60461.cljs$core$IFn$_invoke$arity$variadic = G__60461__delegate;
return G__60461;
})()
,(function() { 
var G__60464__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__60464 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__60465__i = 0, G__60465__a = new Array(arguments.length -  0);
while (G__60465__i < G__60465__a.length) {G__60465__a[G__60465__i] = arguments[G__60465__i + 0]; ++G__60465__i;}
  _ = new cljs.core.IndexedSeq(G__60465__a,0,null);
} 
return G__60464__delegate.call(this,_);};
G__60464.cljs$lang$maxFixedArity = 0;
G__60464.cljs$lang$applyTo = (function (arglist__60466){
var _ = cljs.core.seq(arglist__60466);
return G__60464__delegate(_);
});
G__60464.cljs$core$IFn$_invoke$arity$variadic = G__60464__delegate;
return G__60464;
})()
,(function() { 
var G__60467__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__60467 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__60468__i = 0, G__60468__a = new Array(arguments.length -  0);
while (G__60468__i < G__60468__a.length) {G__60468__a[G__60468__i] = arguments[G__60468__i + 0]; ++G__60468__i;}
  _ = new cljs.core.IndexedSeq(G__60468__a,0,null);
} 
return G__60467__delegate.call(this,_);};
G__60467.cljs$lang$maxFixedArity = 0;
G__60467.cljs$lang$applyTo = (function (arglist__60469){
var _ = cljs.core.seq(arglist__60469);
return G__60467__delegate(_);
});
G__60467.cljs$core$IFn$_invoke$arity$variadic = G__60467__delegate;
return G__60467;
})()
,(function() { 
var G__60470__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__60470 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__60471__i = 0, G__60471__a = new Array(arguments.length -  0);
while (G__60471__i < G__60471__a.length) {G__60471__a[G__60471__i] = arguments[G__60471__i + 0]; ++G__60471__i;}
  _ = new cljs.core.IndexedSeq(G__60471__a,0,null);
} 
return G__60470__delegate.call(this,_);};
G__60470.cljs$lang$maxFixedArity = 0;
G__60470.cljs$lang$applyTo = (function (arglist__60472){
var _ = cljs.core.seq(arglist__60472);
return G__60470__delegate(_);
});
G__60470.cljs$core$IFn$_invoke$arity$variadic = G__60470__delegate;
return G__60470;
})()
,(function() { 
var G__60473__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__60473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60474__i = 0, G__60474__a = new Array(arguments.length -  0);
while (G__60474__i < G__60474__a.length) {G__60474__a[G__60474__i] = arguments[G__60474__i + 0]; ++G__60474__i;}
  args = new cljs.core.IndexedSeq(G__60474__a,0,null);
} 
return G__60473__delegate.call(this,args);};
G__60473.cljs$lang$maxFixedArity = 0;
G__60473.cljs$lang$applyTo = (function (arglist__60475){
var args = cljs.core.seq(arglist__60475);
return G__60473__delegate(args);
});
G__60473.cljs$core$IFn$_invoke$arity$variadic = G__60473__delegate;
return G__60473;
})()
,(function() { 
var G__60476__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__60476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60477__i = 0, G__60477__a = new Array(arguments.length -  0);
while (G__60477__i < G__60477__a.length) {G__60477__a[G__60477__i] = arguments[G__60477__i + 0]; ++G__60477__i;}
  args = new cljs.core.IndexedSeq(G__60477__a,0,null);
} 
return G__60476__delegate.call(this,args);};
G__60476.cljs$lang$maxFixedArity = 0;
G__60476.cljs$lang$applyTo = (function (arglist__60478){
var args = cljs.core.seq(arglist__60478);
return G__60476__delegate(args);
});
G__60476.cljs$core$IFn$_invoke$arity$variadic = G__60476__delegate;
return G__60476;
})()
,(function() { 
var G__60479__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__60479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60480__i = 0, G__60480__a = new Array(arguments.length -  0);
while (G__60480__i < G__60480__a.length) {G__60480__a[G__60480__i] = arguments[G__60480__i + 0]; ++G__60480__i;}
  args = new cljs.core.IndexedSeq(G__60480__a,0,null);
} 
return G__60479__delegate.call(this,args);};
G__60479.cljs$lang$maxFixedArity = 0;
G__60479.cljs$lang$applyTo = (function (arglist__60481){
var args = cljs.core.seq(arglist__60481);
return G__60479__delegate(args);
});
G__60479.cljs$core$IFn$_invoke$arity$variadic = G__60479__delegate;
return G__60479;
})()
,(function() { 
var G__60482__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__60482 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__60483__i = 0, G__60483__a = new Array(arguments.length -  0);
while (G__60483__i < G__60483__a.length) {G__60483__a[G__60483__i] = arguments[G__60483__i + 0]; ++G__60483__i;}
  _ = new cljs.core.IndexedSeq(G__60483__a,0,null);
} 
return G__60482__delegate.call(this,_);};
G__60482.cljs$lang$maxFixedArity = 0;
G__60482.cljs$lang$applyTo = (function (arglist__60484){
var _ = cljs.core.seq(arglist__60484);
return G__60482__delegate(_);
});
G__60482.cljs$core$IFn$_invoke$arity$variadic = G__60482__delegate;
return G__60482;
})()
,(function() { 
var G__60485__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__60485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60486__i = 0, G__60486__a = new Array(arguments.length -  0);
while (G__60486__i < G__60486__a.length) {G__60486__a[G__60486__i] = arguments[G__60486__i + 0]; ++G__60486__i;}
  args = new cljs.core.IndexedSeq(G__60486__a,0,null);
} 
return G__60485__delegate.call(this,args);};
G__60485.cljs$lang$maxFixedArity = 0;
G__60485.cljs$lang$applyTo = (function (arglist__60487){
var args = cljs.core.seq(arglist__60487);
return G__60485__delegate(args);
});
G__60485.cljs$core$IFn$_invoke$arity$variadic = G__60485__delegate;
return G__60485;
})()
,(function() { 
var G__60488__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__60488 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__60489__i = 0, G__60489__a = new Array(arguments.length -  0);
while (G__60489__i < G__60489__a.length) {G__60489__a[G__60489__i] = arguments[G__60489__i + 0]; ++G__60489__i;}
  _ = new cljs.core.IndexedSeq(G__60489__a,0,null);
} 
return G__60488__delegate.call(this,_);};
G__60488.cljs$lang$maxFixedArity = 0;
G__60488.cljs$lang$applyTo = (function (arglist__60490){
var _ = cljs.core.seq(arglist__60490);
return G__60488__delegate(_);
});
G__60488.cljs$core$IFn$_invoke$arity$variadic = G__60488__delegate;
return G__60488;
})()
,(function() { 
var G__60491__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__60491 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60492__i = 0, G__60492__a = new Array(arguments.length -  0);
while (G__60492__i < G__60492__a.length) {G__60492__a[G__60492__i] = arguments[G__60492__i + 0]; ++G__60492__i;}
  args = new cljs.core.IndexedSeq(G__60492__a,0,null);
} 
return G__60491__delegate.call(this,args);};
G__60491.cljs$lang$maxFixedArity = 0;
G__60491.cljs$lang$applyTo = (function (arglist__60493){
var args = cljs.core.seq(arglist__60493);
return G__60491__delegate(args);
});
G__60491.cljs$core$IFn$_invoke$arity$variadic = G__60491__delegate;
return G__60491;
})()
,(function() { 
var G__60494__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__60494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60495__i = 0, G__60495__a = new Array(arguments.length -  0);
while (G__60495__i < G__60495__a.length) {G__60495__a[G__60495__i] = arguments[G__60495__i + 0]; ++G__60495__i;}
  args = new cljs.core.IndexedSeq(G__60495__a,0,null);
} 
return G__60494__delegate.call(this,args);};
G__60494.cljs$lang$maxFixedArity = 0;
G__60494.cljs$lang$applyTo = (function (arglist__60496){
var args = cljs.core.seq(arglist__60496);
return G__60494__delegate(args);
});
G__60494.cljs$core$IFn$_invoke$arity$variadic = G__60494__delegate;
return G__60494;
})()
,(function() { 
var G__60497__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__60497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60498__i = 0, G__60498__a = new Array(arguments.length -  0);
while (G__60498__i < G__60498__a.length) {G__60498__a[G__60498__i] = arguments[G__60498__i + 0]; ++G__60498__i;}
  args = new cljs.core.IndexedSeq(G__60498__a,0,null);
} 
return G__60497__delegate.call(this,args);};
G__60497.cljs$lang$maxFixedArity = 0;
G__60497.cljs$lang$applyTo = (function (arglist__60499){
var args = cljs.core.seq(arglist__60499);
return G__60497__delegate(args);
});
G__60497.cljs$core$IFn$_invoke$arity$variadic = G__60497__delegate;
return G__60497;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__60500__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__60500 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__60501__i = 0, G__60501__a = new Array(arguments.length -  0);
while (G__60501__i < G__60501__a.length) {G__60501__a[G__60501__i] = arguments[G__60501__i + 0]; ++G__60501__i;}
  _ = new cljs.core.IndexedSeq(G__60501__a,0,null);
} 
return G__60500__delegate.call(this,_);};
G__60500.cljs$lang$maxFixedArity = 0;
G__60500.cljs$lang$applyTo = (function (arglist__60502){
var _ = cljs.core.seq(arglist__60502);
return G__60500__delegate(_);
});
G__60500.cljs$core$IFn$_invoke$arity$variadic = G__60500__delegate;
return G__60500;
})()
,(function() { 
var G__60503__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__60503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60504__i = 0, G__60504__a = new Array(arguments.length -  0);
while (G__60504__i < G__60504__a.length) {G__60504__a[G__60504__i] = arguments[G__60504__i + 0]; ++G__60504__i;}
  args = new cljs.core.IndexedSeq(G__60504__a,0,null);
} 
return G__60503__delegate.call(this,args);};
G__60503.cljs$lang$maxFixedArity = 0;
G__60503.cljs$lang$applyTo = (function (arglist__60505){
var args = cljs.core.seq(arglist__60505);
return G__60503__delegate(args);
});
G__60503.cljs$core$IFn$_invoke$arity$variadic = G__60503__delegate;
return G__60503;
})()
,(function() { 
var G__60506__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__60506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60507__i = 0, G__60507__a = new Array(arguments.length -  0);
while (G__60507__i < G__60507__a.length) {G__60507__a[G__60507__i] = arguments[G__60507__i + 0]; ++G__60507__i;}
  args = new cljs.core.IndexedSeq(G__60507__a,0,null);
} 
return G__60506__delegate.call(this,args);};
G__60506.cljs$lang$maxFixedArity = 0;
G__60506.cljs$lang$applyTo = (function (arglist__60508){
var args = cljs.core.seq(arglist__60508);
return G__60506__delegate(args);
});
G__60506.cljs$core$IFn$_invoke$arity$variadic = G__60506__delegate;
return G__60506;
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

var temp__5825__auto___60509 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5825__auto___60509)){
var v_60510 = temp__5825__auto___60509;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_60510);
} else {
}

placesurfer.web_app.locale.init_locale_BANG_();

placesurfer.map_ui.interface$.set_draw_t_BANG_(placesurfer.web_app.locale.make_t(cljs.core.deref(placesurfer.web_app.state._BANG_state)));

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

var temp__5825__auto___60511__$1 = link.getAttribute("href");
if(cljs.core.truth_(temp__5825__auto___60511__$1)){
var href_60512 = temp__5825__auto___60511__$1;
var temp__5825__auto___60513__$2 = cljs.core.re_find(/(#.+)$/,href_60512);
if(cljs.core.truth_(temp__5825__auto___60513__$2)){
var vec__60454_60514 = temp__5825__auto___60513__$2;
var __60515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60454_60514,(0),null);
var hash_60516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60454_60514,(1),null);
(location.hash = hash_60516);
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
}catch (e60457){var __60517 = e60457;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
