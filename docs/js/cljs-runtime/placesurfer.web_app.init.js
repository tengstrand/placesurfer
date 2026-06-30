goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__95092__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__95092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95093__i = 0, G__95093__a = new Array(arguments.length -  0);
while (G__95093__i < G__95093__a.length) {G__95093__a[G__95093__i] = arguments[G__95093__i + 0]; ++G__95093__i;}
  args = new cljs.core.IndexedSeq(G__95093__a,0,null);
} 
return G__95092__delegate.call(this,args);};
G__95092.cljs$lang$maxFixedArity = 0;
G__95092.cljs$lang$applyTo = (function (arglist__95094){
var args = cljs.core.seq(arglist__95094);
return G__95092__delegate(args);
});
G__95092.cljs$core$IFn$_invoke$arity$variadic = G__95092__delegate;
return G__95092;
})()
,(function() { 
var G__95095__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__95095 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95096__i = 0, G__95096__a = new Array(arguments.length -  0);
while (G__95096__i < G__95096__a.length) {G__95096__a[G__95096__i] = arguments[G__95096__i + 0]; ++G__95096__i;}
  args = new cljs.core.IndexedSeq(G__95096__a,0,null);
} 
return G__95095__delegate.call(this,args);};
G__95095.cljs$lang$maxFixedArity = 0;
G__95095.cljs$lang$applyTo = (function (arglist__95097){
var args = cljs.core.seq(arglist__95097);
return G__95095__delegate(args);
});
G__95095.cljs$core$IFn$_invoke$arity$variadic = G__95095__delegate;
return G__95095;
})()
,(function() { 
var G__95098__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__95098 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__95099__i = 0, G__95099__a = new Array(arguments.length -  0);
while (G__95099__i < G__95099__a.length) {G__95099__a[G__95099__i] = arguments[G__95099__i + 0]; ++G__95099__i;}
  _ = new cljs.core.IndexedSeq(G__95099__a,0,null);
} 
return G__95098__delegate.call(this,_);};
G__95098.cljs$lang$maxFixedArity = 0;
G__95098.cljs$lang$applyTo = (function (arglist__95100){
var _ = cljs.core.seq(arglist__95100);
return G__95098__delegate(_);
});
G__95098.cljs$core$IFn$_invoke$arity$variadic = G__95098__delegate;
return G__95098;
})()
,(function() { 
var G__95101__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__95101 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__95102__i = 0, G__95102__a = new Array(arguments.length -  0);
while (G__95102__i < G__95102__a.length) {G__95102__a[G__95102__i] = arguments[G__95102__i + 0]; ++G__95102__i;}
  _ = new cljs.core.IndexedSeq(G__95102__a,0,null);
} 
return G__95101__delegate.call(this,_);};
G__95101.cljs$lang$maxFixedArity = 0;
G__95101.cljs$lang$applyTo = (function (arglist__95103){
var _ = cljs.core.seq(arglist__95103);
return G__95101__delegate(_);
});
G__95101.cljs$core$IFn$_invoke$arity$variadic = G__95101__delegate;
return G__95101;
})()
,(function() { 
var G__95104__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__95104 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__95105__i = 0, G__95105__a = new Array(arguments.length -  0);
while (G__95105__i < G__95105__a.length) {G__95105__a[G__95105__i] = arguments[G__95105__i + 0]; ++G__95105__i;}
  _ = new cljs.core.IndexedSeq(G__95105__a,0,null);
} 
return G__95104__delegate.call(this,_);};
G__95104.cljs$lang$maxFixedArity = 0;
G__95104.cljs$lang$applyTo = (function (arglist__95106){
var _ = cljs.core.seq(arglist__95106);
return G__95104__delegate(_);
});
G__95104.cljs$core$IFn$_invoke$arity$variadic = G__95104__delegate;
return G__95104;
})()
,(function() { 
var G__95107__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__95107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95108__i = 0, G__95108__a = new Array(arguments.length -  0);
while (G__95108__i < G__95108__a.length) {G__95108__a[G__95108__i] = arguments[G__95108__i + 0]; ++G__95108__i;}
  args = new cljs.core.IndexedSeq(G__95108__a,0,null);
} 
return G__95107__delegate.call(this,args);};
G__95107.cljs$lang$maxFixedArity = 0;
G__95107.cljs$lang$applyTo = (function (arglist__95109){
var args = cljs.core.seq(arglist__95109);
return G__95107__delegate(args);
});
G__95107.cljs$core$IFn$_invoke$arity$variadic = G__95107__delegate;
return G__95107;
})()
,(function() { 
var G__95110__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__95110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95111__i = 0, G__95111__a = new Array(arguments.length -  0);
while (G__95111__i < G__95111__a.length) {G__95111__a[G__95111__i] = arguments[G__95111__i + 0]; ++G__95111__i;}
  args = new cljs.core.IndexedSeq(G__95111__a,0,null);
} 
return G__95110__delegate.call(this,args);};
G__95110.cljs$lang$maxFixedArity = 0;
G__95110.cljs$lang$applyTo = (function (arglist__95112){
var args = cljs.core.seq(arglist__95112);
return G__95110__delegate(args);
});
G__95110.cljs$core$IFn$_invoke$arity$variadic = G__95110__delegate;
return G__95110;
})()
,(function() { 
var G__95113__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__95113 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95114__i = 0, G__95114__a = new Array(arguments.length -  0);
while (G__95114__i < G__95114__a.length) {G__95114__a[G__95114__i] = arguments[G__95114__i + 0]; ++G__95114__i;}
  args = new cljs.core.IndexedSeq(G__95114__a,0,null);
} 
return G__95113__delegate.call(this,args);};
G__95113.cljs$lang$maxFixedArity = 0;
G__95113.cljs$lang$applyTo = (function (arglist__95115){
var args = cljs.core.seq(arglist__95115);
return G__95113__delegate(args);
});
G__95113.cljs$core$IFn$_invoke$arity$variadic = G__95113__delegate;
return G__95113;
})()
,(function() { 
var G__95116__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__95116 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__95117__i = 0, G__95117__a = new Array(arguments.length -  0);
while (G__95117__i < G__95117__a.length) {G__95117__a[G__95117__i] = arguments[G__95117__i + 0]; ++G__95117__i;}
  _ = new cljs.core.IndexedSeq(G__95117__a,0,null);
} 
return G__95116__delegate.call(this,_);};
G__95116.cljs$lang$maxFixedArity = 0;
G__95116.cljs$lang$applyTo = (function (arglist__95118){
var _ = cljs.core.seq(arglist__95118);
return G__95116__delegate(_);
});
G__95116.cljs$core$IFn$_invoke$arity$variadic = G__95116__delegate;
return G__95116;
})()
,(function() { 
var G__95119__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__95119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95120__i = 0, G__95120__a = new Array(arguments.length -  0);
while (G__95120__i < G__95120__a.length) {G__95120__a[G__95120__i] = arguments[G__95120__i + 0]; ++G__95120__i;}
  args = new cljs.core.IndexedSeq(G__95120__a,0,null);
} 
return G__95119__delegate.call(this,args);};
G__95119.cljs$lang$maxFixedArity = 0;
G__95119.cljs$lang$applyTo = (function (arglist__95121){
var args = cljs.core.seq(arglist__95121);
return G__95119__delegate(args);
});
G__95119.cljs$core$IFn$_invoke$arity$variadic = G__95119__delegate;
return G__95119;
})()
,(function() { 
var G__95122__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__95122 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__95123__i = 0, G__95123__a = new Array(arguments.length -  0);
while (G__95123__i < G__95123__a.length) {G__95123__a[G__95123__i] = arguments[G__95123__i + 0]; ++G__95123__i;}
  _ = new cljs.core.IndexedSeq(G__95123__a,0,null);
} 
return G__95122__delegate.call(this,_);};
G__95122.cljs$lang$maxFixedArity = 0;
G__95122.cljs$lang$applyTo = (function (arglist__95124){
var _ = cljs.core.seq(arglist__95124);
return G__95122__delegate(_);
});
G__95122.cljs$core$IFn$_invoke$arity$variadic = G__95122__delegate;
return G__95122;
})()
,(function() { 
var G__95125__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__95125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95126__i = 0, G__95126__a = new Array(arguments.length -  0);
while (G__95126__i < G__95126__a.length) {G__95126__a[G__95126__i] = arguments[G__95126__i + 0]; ++G__95126__i;}
  args = new cljs.core.IndexedSeq(G__95126__a,0,null);
} 
return G__95125__delegate.call(this,args);};
G__95125.cljs$lang$maxFixedArity = 0;
G__95125.cljs$lang$applyTo = (function (arglist__95127){
var args = cljs.core.seq(arglist__95127);
return G__95125__delegate(args);
});
G__95125.cljs$core$IFn$_invoke$arity$variadic = G__95125__delegate;
return G__95125;
})()
,(function() { 
var G__95128__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__95128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95129__i = 0, G__95129__a = new Array(arguments.length -  0);
while (G__95129__i < G__95129__a.length) {G__95129__a[G__95129__i] = arguments[G__95129__i + 0]; ++G__95129__i;}
  args = new cljs.core.IndexedSeq(G__95129__a,0,null);
} 
return G__95128__delegate.call(this,args);};
G__95128.cljs$lang$maxFixedArity = 0;
G__95128.cljs$lang$applyTo = (function (arglist__95130){
var args = cljs.core.seq(arglist__95130);
return G__95128__delegate(args);
});
G__95128.cljs$core$IFn$_invoke$arity$variadic = G__95128__delegate;
return G__95128;
})()
,(function() { 
var G__95131__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__95131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95132__i = 0, G__95132__a = new Array(arguments.length -  0);
while (G__95132__i < G__95132__a.length) {G__95132__a[G__95132__i] = arguments[G__95132__i + 0]; ++G__95132__i;}
  args = new cljs.core.IndexedSeq(G__95132__a,0,null);
} 
return G__95131__delegate.call(this,args);};
G__95131.cljs$lang$maxFixedArity = 0;
G__95131.cljs$lang$applyTo = (function (arglist__95133){
var args = cljs.core.seq(arglist__95133);
return G__95131__delegate(args);
});
G__95131.cljs$core$IFn$_invoke$arity$variadic = G__95131__delegate;
return G__95131;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__95134__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__95134 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__95135__i = 0, G__95135__a = new Array(arguments.length -  0);
while (G__95135__i < G__95135__a.length) {G__95135__a[G__95135__i] = arguments[G__95135__i + 0]; ++G__95135__i;}
  _ = new cljs.core.IndexedSeq(G__95135__a,0,null);
} 
return G__95134__delegate.call(this,_);};
G__95134.cljs$lang$maxFixedArity = 0;
G__95134.cljs$lang$applyTo = (function (arglist__95136){
var _ = cljs.core.seq(arglist__95136);
return G__95134__delegate(_);
});
G__95134.cljs$core$IFn$_invoke$arity$variadic = G__95134__delegate;
return G__95134;
})()
,(function() { 
var G__95137__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__95137 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95138__i = 0, G__95138__a = new Array(arguments.length -  0);
while (G__95138__i < G__95138__a.length) {G__95138__a[G__95138__i] = arguments[G__95138__i + 0]; ++G__95138__i;}
  args = new cljs.core.IndexedSeq(G__95138__a,0,null);
} 
return G__95137__delegate.call(this,args);};
G__95137.cljs$lang$maxFixedArity = 0;
G__95137.cljs$lang$applyTo = (function (arglist__95139){
var args = cljs.core.seq(arglist__95139);
return G__95137__delegate(args);
});
G__95137.cljs$core$IFn$_invoke$arity$variadic = G__95137__delegate;
return G__95137;
})()
,(function() { 
var G__95140__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__95140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95141__i = 0, G__95141__a = new Array(arguments.length -  0);
while (G__95141__i < G__95141__a.length) {G__95141__a[G__95141__i] = arguments[G__95141__i + 0]; ++G__95141__i;}
  args = new cljs.core.IndexedSeq(G__95141__a,0,null);
} 
return G__95140__delegate.call(this,args);};
G__95140.cljs$lang$maxFixedArity = 0;
G__95140.cljs$lang$applyTo = (function (arglist__95142){
var args = cljs.core.seq(arglist__95142);
return G__95140__delegate(args);
});
G__95140.cljs$core$IFn$_invoke$arity$variadic = G__95140__delegate;
return G__95140;
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

var temp__5825__auto___95143 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5825__auto___95143)){
var v_95144 = temp__5825__auto___95143;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_95144);
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
}catch (e95091){var __95145 = e95091;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
