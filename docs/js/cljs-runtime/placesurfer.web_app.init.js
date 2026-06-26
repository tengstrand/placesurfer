goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__49454__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__49454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49455__i = 0, G__49455__a = new Array(arguments.length -  0);
while (G__49455__i < G__49455__a.length) {G__49455__a[G__49455__i] = arguments[G__49455__i + 0]; ++G__49455__i;}
  args = new cljs.core.IndexedSeq(G__49455__a,0,null);
} 
return G__49454__delegate.call(this,args);};
G__49454.cljs$lang$maxFixedArity = 0;
G__49454.cljs$lang$applyTo = (function (arglist__49456){
var args = cljs.core.seq(arglist__49456);
return G__49454__delegate(args);
});
G__49454.cljs$core$IFn$_invoke$arity$variadic = G__49454__delegate;
return G__49454;
})()
,(function() { 
var G__49457__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__49457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49458__i = 0, G__49458__a = new Array(arguments.length -  0);
while (G__49458__i < G__49458__a.length) {G__49458__a[G__49458__i] = arguments[G__49458__i + 0]; ++G__49458__i;}
  args = new cljs.core.IndexedSeq(G__49458__a,0,null);
} 
return G__49457__delegate.call(this,args);};
G__49457.cljs$lang$maxFixedArity = 0;
G__49457.cljs$lang$applyTo = (function (arglist__49459){
var args = cljs.core.seq(arglist__49459);
return G__49457__delegate(args);
});
G__49457.cljs$core$IFn$_invoke$arity$variadic = G__49457__delegate;
return G__49457;
})()
,(function() { 
var G__49460__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__49460 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__49461__i = 0, G__49461__a = new Array(arguments.length -  0);
while (G__49461__i < G__49461__a.length) {G__49461__a[G__49461__i] = arguments[G__49461__i + 0]; ++G__49461__i;}
  _ = new cljs.core.IndexedSeq(G__49461__a,0,null);
} 
return G__49460__delegate.call(this,_);};
G__49460.cljs$lang$maxFixedArity = 0;
G__49460.cljs$lang$applyTo = (function (arglist__49462){
var _ = cljs.core.seq(arglist__49462);
return G__49460__delegate(_);
});
G__49460.cljs$core$IFn$_invoke$arity$variadic = G__49460__delegate;
return G__49460;
})()
,(function() { 
var G__49463__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__49463 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__49464__i = 0, G__49464__a = new Array(arguments.length -  0);
while (G__49464__i < G__49464__a.length) {G__49464__a[G__49464__i] = arguments[G__49464__i + 0]; ++G__49464__i;}
  _ = new cljs.core.IndexedSeq(G__49464__a,0,null);
} 
return G__49463__delegate.call(this,_);};
G__49463.cljs$lang$maxFixedArity = 0;
G__49463.cljs$lang$applyTo = (function (arglist__49465){
var _ = cljs.core.seq(arglist__49465);
return G__49463__delegate(_);
});
G__49463.cljs$core$IFn$_invoke$arity$variadic = G__49463__delegate;
return G__49463;
})()
,(function() { 
var G__49466__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__49466 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__49467__i = 0, G__49467__a = new Array(arguments.length -  0);
while (G__49467__i < G__49467__a.length) {G__49467__a[G__49467__i] = arguments[G__49467__i + 0]; ++G__49467__i;}
  _ = new cljs.core.IndexedSeq(G__49467__a,0,null);
} 
return G__49466__delegate.call(this,_);};
G__49466.cljs$lang$maxFixedArity = 0;
G__49466.cljs$lang$applyTo = (function (arglist__49468){
var _ = cljs.core.seq(arglist__49468);
return G__49466__delegate(_);
});
G__49466.cljs$core$IFn$_invoke$arity$variadic = G__49466__delegate;
return G__49466;
})()
,(function() { 
var G__49469__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__49469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49470__i = 0, G__49470__a = new Array(arguments.length -  0);
while (G__49470__i < G__49470__a.length) {G__49470__a[G__49470__i] = arguments[G__49470__i + 0]; ++G__49470__i;}
  args = new cljs.core.IndexedSeq(G__49470__a,0,null);
} 
return G__49469__delegate.call(this,args);};
G__49469.cljs$lang$maxFixedArity = 0;
G__49469.cljs$lang$applyTo = (function (arglist__49471){
var args = cljs.core.seq(arglist__49471);
return G__49469__delegate(args);
});
G__49469.cljs$core$IFn$_invoke$arity$variadic = G__49469__delegate;
return G__49469;
})()
,(function() { 
var G__49472__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__49472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49473__i = 0, G__49473__a = new Array(arguments.length -  0);
while (G__49473__i < G__49473__a.length) {G__49473__a[G__49473__i] = arguments[G__49473__i + 0]; ++G__49473__i;}
  args = new cljs.core.IndexedSeq(G__49473__a,0,null);
} 
return G__49472__delegate.call(this,args);};
G__49472.cljs$lang$maxFixedArity = 0;
G__49472.cljs$lang$applyTo = (function (arglist__49474){
var args = cljs.core.seq(arglist__49474);
return G__49472__delegate(args);
});
G__49472.cljs$core$IFn$_invoke$arity$variadic = G__49472__delegate;
return G__49472;
})()
,(function() { 
var G__49475__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__49475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49476__i = 0, G__49476__a = new Array(arguments.length -  0);
while (G__49476__i < G__49476__a.length) {G__49476__a[G__49476__i] = arguments[G__49476__i + 0]; ++G__49476__i;}
  args = new cljs.core.IndexedSeq(G__49476__a,0,null);
} 
return G__49475__delegate.call(this,args);};
G__49475.cljs$lang$maxFixedArity = 0;
G__49475.cljs$lang$applyTo = (function (arglist__49477){
var args = cljs.core.seq(arglist__49477);
return G__49475__delegate(args);
});
G__49475.cljs$core$IFn$_invoke$arity$variadic = G__49475__delegate;
return G__49475;
})()
,(function() { 
var G__49478__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__49478 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__49479__i = 0, G__49479__a = new Array(arguments.length -  0);
while (G__49479__i < G__49479__a.length) {G__49479__a[G__49479__i] = arguments[G__49479__i + 0]; ++G__49479__i;}
  _ = new cljs.core.IndexedSeq(G__49479__a,0,null);
} 
return G__49478__delegate.call(this,_);};
G__49478.cljs$lang$maxFixedArity = 0;
G__49478.cljs$lang$applyTo = (function (arglist__49480){
var _ = cljs.core.seq(arglist__49480);
return G__49478__delegate(_);
});
G__49478.cljs$core$IFn$_invoke$arity$variadic = G__49478__delegate;
return G__49478;
})()
,(function() { 
var G__49481__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__49481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49482__i = 0, G__49482__a = new Array(arguments.length -  0);
while (G__49482__i < G__49482__a.length) {G__49482__a[G__49482__i] = arguments[G__49482__i + 0]; ++G__49482__i;}
  args = new cljs.core.IndexedSeq(G__49482__a,0,null);
} 
return G__49481__delegate.call(this,args);};
G__49481.cljs$lang$maxFixedArity = 0;
G__49481.cljs$lang$applyTo = (function (arglist__49483){
var args = cljs.core.seq(arglist__49483);
return G__49481__delegate(args);
});
G__49481.cljs$core$IFn$_invoke$arity$variadic = G__49481__delegate;
return G__49481;
})()
,(function() { 
var G__49484__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__49484 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__49485__i = 0, G__49485__a = new Array(arguments.length -  0);
while (G__49485__i < G__49485__a.length) {G__49485__a[G__49485__i] = arguments[G__49485__i + 0]; ++G__49485__i;}
  _ = new cljs.core.IndexedSeq(G__49485__a,0,null);
} 
return G__49484__delegate.call(this,_);};
G__49484.cljs$lang$maxFixedArity = 0;
G__49484.cljs$lang$applyTo = (function (arglist__49486){
var _ = cljs.core.seq(arglist__49486);
return G__49484__delegate(_);
});
G__49484.cljs$core$IFn$_invoke$arity$variadic = G__49484__delegate;
return G__49484;
})()
,(function() { 
var G__49487__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__49487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49488__i = 0, G__49488__a = new Array(arguments.length -  0);
while (G__49488__i < G__49488__a.length) {G__49488__a[G__49488__i] = arguments[G__49488__i + 0]; ++G__49488__i;}
  args = new cljs.core.IndexedSeq(G__49488__a,0,null);
} 
return G__49487__delegate.call(this,args);};
G__49487.cljs$lang$maxFixedArity = 0;
G__49487.cljs$lang$applyTo = (function (arglist__49489){
var args = cljs.core.seq(arglist__49489);
return G__49487__delegate(args);
});
G__49487.cljs$core$IFn$_invoke$arity$variadic = G__49487__delegate;
return G__49487;
})()
,(function() { 
var G__49490__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__49490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49491__i = 0, G__49491__a = new Array(arguments.length -  0);
while (G__49491__i < G__49491__a.length) {G__49491__a[G__49491__i] = arguments[G__49491__i + 0]; ++G__49491__i;}
  args = new cljs.core.IndexedSeq(G__49491__a,0,null);
} 
return G__49490__delegate.call(this,args);};
G__49490.cljs$lang$maxFixedArity = 0;
G__49490.cljs$lang$applyTo = (function (arglist__49492){
var args = cljs.core.seq(arglist__49492);
return G__49490__delegate(args);
});
G__49490.cljs$core$IFn$_invoke$arity$variadic = G__49490__delegate;
return G__49490;
})()
,(function() { 
var G__49493__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__49493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49494__i = 0, G__49494__a = new Array(arguments.length -  0);
while (G__49494__i < G__49494__a.length) {G__49494__a[G__49494__i] = arguments[G__49494__i + 0]; ++G__49494__i;}
  args = new cljs.core.IndexedSeq(G__49494__a,0,null);
} 
return G__49493__delegate.call(this,args);};
G__49493.cljs$lang$maxFixedArity = 0;
G__49493.cljs$lang$applyTo = (function (arglist__49495){
var args = cljs.core.seq(arglist__49495);
return G__49493__delegate(args);
});
G__49493.cljs$core$IFn$_invoke$arity$variadic = G__49493__delegate;
return G__49493;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__49496__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__49496 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__49497__i = 0, G__49497__a = new Array(arguments.length -  0);
while (G__49497__i < G__49497__a.length) {G__49497__a[G__49497__i] = arguments[G__49497__i + 0]; ++G__49497__i;}
  _ = new cljs.core.IndexedSeq(G__49497__a,0,null);
} 
return G__49496__delegate.call(this,_);};
G__49496.cljs$lang$maxFixedArity = 0;
G__49496.cljs$lang$applyTo = (function (arglist__49498){
var _ = cljs.core.seq(arglist__49498);
return G__49496__delegate(_);
});
G__49496.cljs$core$IFn$_invoke$arity$variadic = G__49496__delegate;
return G__49496;
})()
,(function() { 
var G__49499__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__49499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49500__i = 0, G__49500__a = new Array(arguments.length -  0);
while (G__49500__i < G__49500__a.length) {G__49500__a[G__49500__i] = arguments[G__49500__i + 0]; ++G__49500__i;}
  args = new cljs.core.IndexedSeq(G__49500__a,0,null);
} 
return G__49499__delegate.call(this,args);};
G__49499.cljs$lang$maxFixedArity = 0;
G__49499.cljs$lang$applyTo = (function (arglist__49501){
var args = cljs.core.seq(arglist__49501);
return G__49499__delegate(args);
});
G__49499.cljs$core$IFn$_invoke$arity$variadic = G__49499__delegate;
return G__49499;
})()
,(function() { 
var G__49502__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__49502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49503__i = 0, G__49503__a = new Array(arguments.length -  0);
while (G__49503__i < G__49503__a.length) {G__49503__a[G__49503__i] = arguments[G__49503__i + 0]; ++G__49503__i;}
  args = new cljs.core.IndexedSeq(G__49503__a,0,null);
} 
return G__49502__delegate.call(this,args);};
G__49502.cljs$lang$maxFixedArity = 0;
G__49502.cljs$lang$applyTo = (function (arglist__49504){
var args = cljs.core.seq(arglist__49504);
return G__49502__delegate(args);
});
G__49502.cljs$core$IFn$_invoke$arity$variadic = G__49502__delegate;
return G__49502;
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
placesurfer.web_app.init.init_BANG_ = (function placesurfer$web_app$init$init_BANG_(){
placesurfer.web_app.init.wire_effects_BANG_();

var temp__5825__auto___49505 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5825__auto___49505)){
var v_49506 = temp__5825__auto___49505;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_49506);
} else {
}

placesurfer.web_app.locale.init_locale_BANG_();

placesurfer.pin_ui.interface$.handlers.form.load_pin_icons_BANG_();

placesurfer.pin_ui.interface$.handlers.form.load_pins_from_storage_BANG_();

placesurfer.web_app.render.render_BANG_();

placesurfer.map_panel_ui.interface$.layout.sync_layout_BANG_();

placesurfer.map_panel_ui.interface$.layout.observe_nav_BANG_(placesurfer.web_app.map_sync.schedule_map_resize_BANG_);

placesurfer.app_ui.interface$.load.init_load_BANG_();

document.addEventListener("keydown",placesurfer.web_app.keyboard.on_document_keydown_BANG_);

document.addEventListener("paste",placesurfer.web_app.clipboard.on_document_paste_BANG_);

window.addEventListener("resize",(function (){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
}));

try{placesurfer.web_app.nav.track_page_BANG_(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)));
}catch (e49453){var __49507 = e49453;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
