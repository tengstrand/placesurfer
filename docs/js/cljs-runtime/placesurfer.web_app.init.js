goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__57395__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__57395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57396__i = 0, G__57396__a = new Array(arguments.length -  0);
while (G__57396__i < G__57396__a.length) {G__57396__a[G__57396__i] = arguments[G__57396__i + 0]; ++G__57396__i;}
  args = new cljs.core.IndexedSeq(G__57396__a,0,null);
} 
return G__57395__delegate.call(this,args);};
G__57395.cljs$lang$maxFixedArity = 0;
G__57395.cljs$lang$applyTo = (function (arglist__57397){
var args = cljs.core.seq(arglist__57397);
return G__57395__delegate(args);
});
G__57395.cljs$core$IFn$_invoke$arity$variadic = G__57395__delegate;
return G__57395;
})()
,(function() { 
var G__57398__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__57398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57399__i = 0, G__57399__a = new Array(arguments.length -  0);
while (G__57399__i < G__57399__a.length) {G__57399__a[G__57399__i] = arguments[G__57399__i + 0]; ++G__57399__i;}
  args = new cljs.core.IndexedSeq(G__57399__a,0,null);
} 
return G__57398__delegate.call(this,args);};
G__57398.cljs$lang$maxFixedArity = 0;
G__57398.cljs$lang$applyTo = (function (arglist__57400){
var args = cljs.core.seq(arglist__57400);
return G__57398__delegate(args);
});
G__57398.cljs$core$IFn$_invoke$arity$variadic = G__57398__delegate;
return G__57398;
})()
,(function() { 
var G__57401__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__57401 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__57402__i = 0, G__57402__a = new Array(arguments.length -  0);
while (G__57402__i < G__57402__a.length) {G__57402__a[G__57402__i] = arguments[G__57402__i + 0]; ++G__57402__i;}
  _ = new cljs.core.IndexedSeq(G__57402__a,0,null);
} 
return G__57401__delegate.call(this,_);};
G__57401.cljs$lang$maxFixedArity = 0;
G__57401.cljs$lang$applyTo = (function (arglist__57403){
var _ = cljs.core.seq(arglist__57403);
return G__57401__delegate(_);
});
G__57401.cljs$core$IFn$_invoke$arity$variadic = G__57401__delegate;
return G__57401;
})()
,(function() { 
var G__57404__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__57404 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__57405__i = 0, G__57405__a = new Array(arguments.length -  0);
while (G__57405__i < G__57405__a.length) {G__57405__a[G__57405__i] = arguments[G__57405__i + 0]; ++G__57405__i;}
  _ = new cljs.core.IndexedSeq(G__57405__a,0,null);
} 
return G__57404__delegate.call(this,_);};
G__57404.cljs$lang$maxFixedArity = 0;
G__57404.cljs$lang$applyTo = (function (arglist__57406){
var _ = cljs.core.seq(arglist__57406);
return G__57404__delegate(_);
});
G__57404.cljs$core$IFn$_invoke$arity$variadic = G__57404__delegate;
return G__57404;
})()
,(function() { 
var G__57407__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__57407 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__57408__i = 0, G__57408__a = new Array(arguments.length -  0);
while (G__57408__i < G__57408__a.length) {G__57408__a[G__57408__i] = arguments[G__57408__i + 0]; ++G__57408__i;}
  _ = new cljs.core.IndexedSeq(G__57408__a,0,null);
} 
return G__57407__delegate.call(this,_);};
G__57407.cljs$lang$maxFixedArity = 0;
G__57407.cljs$lang$applyTo = (function (arglist__57409){
var _ = cljs.core.seq(arglist__57409);
return G__57407__delegate(_);
});
G__57407.cljs$core$IFn$_invoke$arity$variadic = G__57407__delegate;
return G__57407;
})()
,(function() { 
var G__57410__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__57410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57411__i = 0, G__57411__a = new Array(arguments.length -  0);
while (G__57411__i < G__57411__a.length) {G__57411__a[G__57411__i] = arguments[G__57411__i + 0]; ++G__57411__i;}
  args = new cljs.core.IndexedSeq(G__57411__a,0,null);
} 
return G__57410__delegate.call(this,args);};
G__57410.cljs$lang$maxFixedArity = 0;
G__57410.cljs$lang$applyTo = (function (arglist__57412){
var args = cljs.core.seq(arglist__57412);
return G__57410__delegate(args);
});
G__57410.cljs$core$IFn$_invoke$arity$variadic = G__57410__delegate;
return G__57410;
})()
,(function() { 
var G__57413__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__57413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57414__i = 0, G__57414__a = new Array(arguments.length -  0);
while (G__57414__i < G__57414__a.length) {G__57414__a[G__57414__i] = arguments[G__57414__i + 0]; ++G__57414__i;}
  args = new cljs.core.IndexedSeq(G__57414__a,0,null);
} 
return G__57413__delegate.call(this,args);};
G__57413.cljs$lang$maxFixedArity = 0;
G__57413.cljs$lang$applyTo = (function (arglist__57415){
var args = cljs.core.seq(arglist__57415);
return G__57413__delegate(args);
});
G__57413.cljs$core$IFn$_invoke$arity$variadic = G__57413__delegate;
return G__57413;
})()
,(function() { 
var G__57416__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__57416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57417__i = 0, G__57417__a = new Array(arguments.length -  0);
while (G__57417__i < G__57417__a.length) {G__57417__a[G__57417__i] = arguments[G__57417__i + 0]; ++G__57417__i;}
  args = new cljs.core.IndexedSeq(G__57417__a,0,null);
} 
return G__57416__delegate.call(this,args);};
G__57416.cljs$lang$maxFixedArity = 0;
G__57416.cljs$lang$applyTo = (function (arglist__57418){
var args = cljs.core.seq(arglist__57418);
return G__57416__delegate(args);
});
G__57416.cljs$core$IFn$_invoke$arity$variadic = G__57416__delegate;
return G__57416;
})()
,(function() { 
var G__57419__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__57419 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__57420__i = 0, G__57420__a = new Array(arguments.length -  0);
while (G__57420__i < G__57420__a.length) {G__57420__a[G__57420__i] = arguments[G__57420__i + 0]; ++G__57420__i;}
  _ = new cljs.core.IndexedSeq(G__57420__a,0,null);
} 
return G__57419__delegate.call(this,_);};
G__57419.cljs$lang$maxFixedArity = 0;
G__57419.cljs$lang$applyTo = (function (arglist__57421){
var _ = cljs.core.seq(arglist__57421);
return G__57419__delegate(_);
});
G__57419.cljs$core$IFn$_invoke$arity$variadic = G__57419__delegate;
return G__57419;
})()
,(function() { 
var G__57422__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__57422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57423__i = 0, G__57423__a = new Array(arguments.length -  0);
while (G__57423__i < G__57423__a.length) {G__57423__a[G__57423__i] = arguments[G__57423__i + 0]; ++G__57423__i;}
  args = new cljs.core.IndexedSeq(G__57423__a,0,null);
} 
return G__57422__delegate.call(this,args);};
G__57422.cljs$lang$maxFixedArity = 0;
G__57422.cljs$lang$applyTo = (function (arglist__57424){
var args = cljs.core.seq(arglist__57424);
return G__57422__delegate(args);
});
G__57422.cljs$core$IFn$_invoke$arity$variadic = G__57422__delegate;
return G__57422;
})()
,(function() { 
var G__57425__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__57425 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__57426__i = 0, G__57426__a = new Array(arguments.length -  0);
while (G__57426__i < G__57426__a.length) {G__57426__a[G__57426__i] = arguments[G__57426__i + 0]; ++G__57426__i;}
  _ = new cljs.core.IndexedSeq(G__57426__a,0,null);
} 
return G__57425__delegate.call(this,_);};
G__57425.cljs$lang$maxFixedArity = 0;
G__57425.cljs$lang$applyTo = (function (arglist__57427){
var _ = cljs.core.seq(arglist__57427);
return G__57425__delegate(_);
});
G__57425.cljs$core$IFn$_invoke$arity$variadic = G__57425__delegate;
return G__57425;
})()
,(function() { 
var G__57428__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__57428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57429__i = 0, G__57429__a = new Array(arguments.length -  0);
while (G__57429__i < G__57429__a.length) {G__57429__a[G__57429__i] = arguments[G__57429__i + 0]; ++G__57429__i;}
  args = new cljs.core.IndexedSeq(G__57429__a,0,null);
} 
return G__57428__delegate.call(this,args);};
G__57428.cljs$lang$maxFixedArity = 0;
G__57428.cljs$lang$applyTo = (function (arglist__57430){
var args = cljs.core.seq(arglist__57430);
return G__57428__delegate(args);
});
G__57428.cljs$core$IFn$_invoke$arity$variadic = G__57428__delegate;
return G__57428;
})()
,(function() { 
var G__57431__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__57431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57432__i = 0, G__57432__a = new Array(arguments.length -  0);
while (G__57432__i < G__57432__a.length) {G__57432__a[G__57432__i] = arguments[G__57432__i + 0]; ++G__57432__i;}
  args = new cljs.core.IndexedSeq(G__57432__a,0,null);
} 
return G__57431__delegate.call(this,args);};
G__57431.cljs$lang$maxFixedArity = 0;
G__57431.cljs$lang$applyTo = (function (arglist__57433){
var args = cljs.core.seq(arglist__57433);
return G__57431__delegate(args);
});
G__57431.cljs$core$IFn$_invoke$arity$variadic = G__57431__delegate;
return G__57431;
})()
,(function() { 
var G__57434__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__57434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57435__i = 0, G__57435__a = new Array(arguments.length -  0);
while (G__57435__i < G__57435__a.length) {G__57435__a[G__57435__i] = arguments[G__57435__i + 0]; ++G__57435__i;}
  args = new cljs.core.IndexedSeq(G__57435__a,0,null);
} 
return G__57434__delegate.call(this,args);};
G__57434.cljs$lang$maxFixedArity = 0;
G__57434.cljs$lang$applyTo = (function (arglist__57436){
var args = cljs.core.seq(arglist__57436);
return G__57434__delegate(args);
});
G__57434.cljs$core$IFn$_invoke$arity$variadic = G__57434__delegate;
return G__57434;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__57437__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__57437 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__57438__i = 0, G__57438__a = new Array(arguments.length -  0);
while (G__57438__i < G__57438__a.length) {G__57438__a[G__57438__i] = arguments[G__57438__i + 0]; ++G__57438__i;}
  _ = new cljs.core.IndexedSeq(G__57438__a,0,null);
} 
return G__57437__delegate.call(this,_);};
G__57437.cljs$lang$maxFixedArity = 0;
G__57437.cljs$lang$applyTo = (function (arglist__57439){
var _ = cljs.core.seq(arglist__57439);
return G__57437__delegate(_);
});
G__57437.cljs$core$IFn$_invoke$arity$variadic = G__57437__delegate;
return G__57437;
})()
,(function() { 
var G__57440__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__57440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57441__i = 0, G__57441__a = new Array(arguments.length -  0);
while (G__57441__i < G__57441__a.length) {G__57441__a[G__57441__i] = arguments[G__57441__i + 0]; ++G__57441__i;}
  args = new cljs.core.IndexedSeq(G__57441__a,0,null);
} 
return G__57440__delegate.call(this,args);};
G__57440.cljs$lang$maxFixedArity = 0;
G__57440.cljs$lang$applyTo = (function (arglist__57442){
var args = cljs.core.seq(arglist__57442);
return G__57440__delegate(args);
});
G__57440.cljs$core$IFn$_invoke$arity$variadic = G__57440__delegate;
return G__57440;
})()
,(function() { 
var G__57443__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__57443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57444__i = 0, G__57444__a = new Array(arguments.length -  0);
while (G__57444__i < G__57444__a.length) {G__57444__a[G__57444__i] = arguments[G__57444__i + 0]; ++G__57444__i;}
  args = new cljs.core.IndexedSeq(G__57444__a,0,null);
} 
return G__57443__delegate.call(this,args);};
G__57443.cljs$lang$maxFixedArity = 0;
G__57443.cljs$lang$applyTo = (function (arglist__57445){
var args = cljs.core.seq(arglist__57445);
return G__57443__delegate(args);
});
G__57443.cljs$core$IFn$_invoke$arity$variadic = G__57443__delegate;
return G__57443;
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

var temp__5825__auto___57446 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5825__auto___57446)){
var v_57447 = temp__5825__auto___57446;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_57447);
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

var temp__5825__auto___57448__$1 = link.getAttribute("href");
if(cljs.core.truth_(temp__5825__auto___57448__$1)){
var href_57449 = temp__5825__auto___57448__$1;
var temp__5825__auto___57450__$2 = cljs.core.re_find(/(#.+)$/,href_57449);
if(cljs.core.truth_(temp__5825__auto___57450__$2)){
var vec__57391_57451 = temp__5825__auto___57450__$2;
var __57452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57391_57451,(0),null);
var hash_57453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57391_57451,(1),null);
(location.hash = hash_57453);
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
}catch (e57394){var __57454 = e57394;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
