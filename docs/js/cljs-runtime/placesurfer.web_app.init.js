goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__66685__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__66685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66686__i = 0, G__66686__a = new Array(arguments.length -  0);
while (G__66686__i < G__66686__a.length) {G__66686__a[G__66686__i] = arguments[G__66686__i + 0]; ++G__66686__i;}
  args = new cljs.core.IndexedSeq(G__66686__a,0,null);
} 
return G__66685__delegate.call(this,args);};
G__66685.cljs$lang$maxFixedArity = 0;
G__66685.cljs$lang$applyTo = (function (arglist__66687){
var args = cljs.core.seq(arglist__66687);
return G__66685__delegate(args);
});
G__66685.cljs$core$IFn$_invoke$arity$variadic = G__66685__delegate;
return G__66685;
})()
,(function() { 
var G__66688__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__66688 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66689__i = 0, G__66689__a = new Array(arguments.length -  0);
while (G__66689__i < G__66689__a.length) {G__66689__a[G__66689__i] = arguments[G__66689__i + 0]; ++G__66689__i;}
  args = new cljs.core.IndexedSeq(G__66689__a,0,null);
} 
return G__66688__delegate.call(this,args);};
G__66688.cljs$lang$maxFixedArity = 0;
G__66688.cljs$lang$applyTo = (function (arglist__66690){
var args = cljs.core.seq(arglist__66690);
return G__66688__delegate(args);
});
G__66688.cljs$core$IFn$_invoke$arity$variadic = G__66688__delegate;
return G__66688;
})()
,(function() { 
var G__66691__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__66691 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__66692__i = 0, G__66692__a = new Array(arguments.length -  0);
while (G__66692__i < G__66692__a.length) {G__66692__a[G__66692__i] = arguments[G__66692__i + 0]; ++G__66692__i;}
  _ = new cljs.core.IndexedSeq(G__66692__a,0,null);
} 
return G__66691__delegate.call(this,_);};
G__66691.cljs$lang$maxFixedArity = 0;
G__66691.cljs$lang$applyTo = (function (arglist__66693){
var _ = cljs.core.seq(arglist__66693);
return G__66691__delegate(_);
});
G__66691.cljs$core$IFn$_invoke$arity$variadic = G__66691__delegate;
return G__66691;
})()
,(function() { 
var G__66694__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__66694 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__66695__i = 0, G__66695__a = new Array(arguments.length -  0);
while (G__66695__i < G__66695__a.length) {G__66695__a[G__66695__i] = arguments[G__66695__i + 0]; ++G__66695__i;}
  _ = new cljs.core.IndexedSeq(G__66695__a,0,null);
} 
return G__66694__delegate.call(this,_);};
G__66694.cljs$lang$maxFixedArity = 0;
G__66694.cljs$lang$applyTo = (function (arglist__66696){
var _ = cljs.core.seq(arglist__66696);
return G__66694__delegate(_);
});
G__66694.cljs$core$IFn$_invoke$arity$variadic = G__66694__delegate;
return G__66694;
})()
,(function() { 
var G__66697__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__66697 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__66698__i = 0, G__66698__a = new Array(arguments.length -  0);
while (G__66698__i < G__66698__a.length) {G__66698__a[G__66698__i] = arguments[G__66698__i + 0]; ++G__66698__i;}
  _ = new cljs.core.IndexedSeq(G__66698__a,0,null);
} 
return G__66697__delegate.call(this,_);};
G__66697.cljs$lang$maxFixedArity = 0;
G__66697.cljs$lang$applyTo = (function (arglist__66699){
var _ = cljs.core.seq(arglist__66699);
return G__66697__delegate(_);
});
G__66697.cljs$core$IFn$_invoke$arity$variadic = G__66697__delegate;
return G__66697;
})()
,(function() { 
var G__66700__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__66700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66701__i = 0, G__66701__a = new Array(arguments.length -  0);
while (G__66701__i < G__66701__a.length) {G__66701__a[G__66701__i] = arguments[G__66701__i + 0]; ++G__66701__i;}
  args = new cljs.core.IndexedSeq(G__66701__a,0,null);
} 
return G__66700__delegate.call(this,args);};
G__66700.cljs$lang$maxFixedArity = 0;
G__66700.cljs$lang$applyTo = (function (arglist__66702){
var args = cljs.core.seq(arglist__66702);
return G__66700__delegate(args);
});
G__66700.cljs$core$IFn$_invoke$arity$variadic = G__66700__delegate;
return G__66700;
})()
,(function() { 
var G__66703__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__66703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66704__i = 0, G__66704__a = new Array(arguments.length -  0);
while (G__66704__i < G__66704__a.length) {G__66704__a[G__66704__i] = arguments[G__66704__i + 0]; ++G__66704__i;}
  args = new cljs.core.IndexedSeq(G__66704__a,0,null);
} 
return G__66703__delegate.call(this,args);};
G__66703.cljs$lang$maxFixedArity = 0;
G__66703.cljs$lang$applyTo = (function (arglist__66705){
var args = cljs.core.seq(arglist__66705);
return G__66703__delegate(args);
});
G__66703.cljs$core$IFn$_invoke$arity$variadic = G__66703__delegate;
return G__66703;
})()
,(function() { 
var G__66706__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__66706 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66707__i = 0, G__66707__a = new Array(arguments.length -  0);
while (G__66707__i < G__66707__a.length) {G__66707__a[G__66707__i] = arguments[G__66707__i + 0]; ++G__66707__i;}
  args = new cljs.core.IndexedSeq(G__66707__a,0,null);
} 
return G__66706__delegate.call(this,args);};
G__66706.cljs$lang$maxFixedArity = 0;
G__66706.cljs$lang$applyTo = (function (arglist__66708){
var args = cljs.core.seq(arglist__66708);
return G__66706__delegate(args);
});
G__66706.cljs$core$IFn$_invoke$arity$variadic = G__66706__delegate;
return G__66706;
})()
,(function() { 
var G__66709__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__66709 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__66710__i = 0, G__66710__a = new Array(arguments.length -  0);
while (G__66710__i < G__66710__a.length) {G__66710__a[G__66710__i] = arguments[G__66710__i + 0]; ++G__66710__i;}
  _ = new cljs.core.IndexedSeq(G__66710__a,0,null);
} 
return G__66709__delegate.call(this,_);};
G__66709.cljs$lang$maxFixedArity = 0;
G__66709.cljs$lang$applyTo = (function (arglist__66711){
var _ = cljs.core.seq(arglist__66711);
return G__66709__delegate(_);
});
G__66709.cljs$core$IFn$_invoke$arity$variadic = G__66709__delegate;
return G__66709;
})()
,(function() { 
var G__66712__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__66712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66713__i = 0, G__66713__a = new Array(arguments.length -  0);
while (G__66713__i < G__66713__a.length) {G__66713__a[G__66713__i] = arguments[G__66713__i + 0]; ++G__66713__i;}
  args = new cljs.core.IndexedSeq(G__66713__a,0,null);
} 
return G__66712__delegate.call(this,args);};
G__66712.cljs$lang$maxFixedArity = 0;
G__66712.cljs$lang$applyTo = (function (arglist__66714){
var args = cljs.core.seq(arglist__66714);
return G__66712__delegate(args);
});
G__66712.cljs$core$IFn$_invoke$arity$variadic = G__66712__delegate;
return G__66712;
})()
,(function() { 
var G__66715__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__66715 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__66716__i = 0, G__66716__a = new Array(arguments.length -  0);
while (G__66716__i < G__66716__a.length) {G__66716__a[G__66716__i] = arguments[G__66716__i + 0]; ++G__66716__i;}
  _ = new cljs.core.IndexedSeq(G__66716__a,0,null);
} 
return G__66715__delegate.call(this,_);};
G__66715.cljs$lang$maxFixedArity = 0;
G__66715.cljs$lang$applyTo = (function (arglist__66717){
var _ = cljs.core.seq(arglist__66717);
return G__66715__delegate(_);
});
G__66715.cljs$core$IFn$_invoke$arity$variadic = G__66715__delegate;
return G__66715;
})()
,(function() { 
var G__66718__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__66718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66719__i = 0, G__66719__a = new Array(arguments.length -  0);
while (G__66719__i < G__66719__a.length) {G__66719__a[G__66719__i] = arguments[G__66719__i + 0]; ++G__66719__i;}
  args = new cljs.core.IndexedSeq(G__66719__a,0,null);
} 
return G__66718__delegate.call(this,args);};
G__66718.cljs$lang$maxFixedArity = 0;
G__66718.cljs$lang$applyTo = (function (arglist__66720){
var args = cljs.core.seq(arglist__66720);
return G__66718__delegate(args);
});
G__66718.cljs$core$IFn$_invoke$arity$variadic = G__66718__delegate;
return G__66718;
})()
,(function() { 
var G__66721__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__66721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66722__i = 0, G__66722__a = new Array(arguments.length -  0);
while (G__66722__i < G__66722__a.length) {G__66722__a[G__66722__i] = arguments[G__66722__i + 0]; ++G__66722__i;}
  args = new cljs.core.IndexedSeq(G__66722__a,0,null);
} 
return G__66721__delegate.call(this,args);};
G__66721.cljs$lang$maxFixedArity = 0;
G__66721.cljs$lang$applyTo = (function (arglist__66723){
var args = cljs.core.seq(arglist__66723);
return G__66721__delegate(args);
});
G__66721.cljs$core$IFn$_invoke$arity$variadic = G__66721__delegate;
return G__66721;
})()
,(function() { 
var G__66724__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__66724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66725__i = 0, G__66725__a = new Array(arguments.length -  0);
while (G__66725__i < G__66725__a.length) {G__66725__a[G__66725__i] = arguments[G__66725__i + 0]; ++G__66725__i;}
  args = new cljs.core.IndexedSeq(G__66725__a,0,null);
} 
return G__66724__delegate.call(this,args);};
G__66724.cljs$lang$maxFixedArity = 0;
G__66724.cljs$lang$applyTo = (function (arglist__66726){
var args = cljs.core.seq(arglist__66726);
return G__66724__delegate(args);
});
G__66724.cljs$core$IFn$_invoke$arity$variadic = G__66724__delegate;
return G__66724;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__66727__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__66727 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__66728__i = 0, G__66728__a = new Array(arguments.length -  0);
while (G__66728__i < G__66728__a.length) {G__66728__a[G__66728__i] = arguments[G__66728__i + 0]; ++G__66728__i;}
  _ = new cljs.core.IndexedSeq(G__66728__a,0,null);
} 
return G__66727__delegate.call(this,_);};
G__66727.cljs$lang$maxFixedArity = 0;
G__66727.cljs$lang$applyTo = (function (arglist__66729){
var _ = cljs.core.seq(arglist__66729);
return G__66727__delegate(_);
});
G__66727.cljs$core$IFn$_invoke$arity$variadic = G__66727__delegate;
return G__66727;
})()
,(function() { 
var G__66730__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__66730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66731__i = 0, G__66731__a = new Array(arguments.length -  0);
while (G__66731__i < G__66731__a.length) {G__66731__a[G__66731__i] = arguments[G__66731__i + 0]; ++G__66731__i;}
  args = new cljs.core.IndexedSeq(G__66731__a,0,null);
} 
return G__66730__delegate.call(this,args);};
G__66730.cljs$lang$maxFixedArity = 0;
G__66730.cljs$lang$applyTo = (function (arglist__66732){
var args = cljs.core.seq(arglist__66732);
return G__66730__delegate(args);
});
G__66730.cljs$core$IFn$_invoke$arity$variadic = G__66730__delegate;
return G__66730;
})()
,(function() { 
var G__66733__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__66733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66734__i = 0, G__66734__a = new Array(arguments.length -  0);
while (G__66734__i < G__66734__a.length) {G__66734__a[G__66734__i] = arguments[G__66734__i + 0]; ++G__66734__i;}
  args = new cljs.core.IndexedSeq(G__66734__a,0,null);
} 
return G__66733__delegate.call(this,args);};
G__66733.cljs$lang$maxFixedArity = 0;
G__66733.cljs$lang$applyTo = (function (arglist__66735){
var args = cljs.core.seq(arglist__66735);
return G__66733__delegate(args);
});
G__66733.cljs$core$IFn$_invoke$arity$variadic = G__66733__delegate;
return G__66733;
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

var temp__5825__auto___66736 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5825__auto___66736)){
var v_66737 = temp__5825__auto___66736;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_66737);
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

var temp__5825__auto___66738__$1 = link.getAttribute("href");
if(cljs.core.truth_(temp__5825__auto___66738__$1)){
var href_66739 = temp__5825__auto___66738__$1;
var temp__5825__auto___66740__$2 = cljs.core.re_find(/(#.+)$/,href_66739);
if(cljs.core.truth_(temp__5825__auto___66740__$2)){
var vec__66681_66741 = temp__5825__auto___66740__$2;
var __66742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66681_66741,(0),null);
var hash_66743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66681_66741,(1),null);
(location.hash = hash_66743);
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
}catch (e66684){var __66744 = e66684;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
