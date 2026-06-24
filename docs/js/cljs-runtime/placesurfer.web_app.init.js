goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__48832__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__48832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48833__i = 0, G__48833__a = new Array(arguments.length -  0);
while (G__48833__i < G__48833__a.length) {G__48833__a[G__48833__i] = arguments[G__48833__i + 0]; ++G__48833__i;}
  args = new cljs.core.IndexedSeq(G__48833__a,0,null);
} 
return G__48832__delegate.call(this,args);};
G__48832.cljs$lang$maxFixedArity = 0;
G__48832.cljs$lang$applyTo = (function (arglist__48834){
var args = cljs.core.seq(arglist__48834);
return G__48832__delegate(args);
});
G__48832.cljs$core$IFn$_invoke$arity$variadic = G__48832__delegate;
return G__48832;
})()
,(function() { 
var G__48835__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__48835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48836__i = 0, G__48836__a = new Array(arguments.length -  0);
while (G__48836__i < G__48836__a.length) {G__48836__a[G__48836__i] = arguments[G__48836__i + 0]; ++G__48836__i;}
  args = new cljs.core.IndexedSeq(G__48836__a,0,null);
} 
return G__48835__delegate.call(this,args);};
G__48835.cljs$lang$maxFixedArity = 0;
G__48835.cljs$lang$applyTo = (function (arglist__48837){
var args = cljs.core.seq(arglist__48837);
return G__48835__delegate(args);
});
G__48835.cljs$core$IFn$_invoke$arity$variadic = G__48835__delegate;
return G__48835;
})()
,(function() { 
var G__48838__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__48838 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__48839__i = 0, G__48839__a = new Array(arguments.length -  0);
while (G__48839__i < G__48839__a.length) {G__48839__a[G__48839__i] = arguments[G__48839__i + 0]; ++G__48839__i;}
  _ = new cljs.core.IndexedSeq(G__48839__a,0,null);
} 
return G__48838__delegate.call(this,_);};
G__48838.cljs$lang$maxFixedArity = 0;
G__48838.cljs$lang$applyTo = (function (arglist__48840){
var _ = cljs.core.seq(arglist__48840);
return G__48838__delegate(_);
});
G__48838.cljs$core$IFn$_invoke$arity$variadic = G__48838__delegate;
return G__48838;
})()
,(function() { 
var G__48841__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__48841 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__48842__i = 0, G__48842__a = new Array(arguments.length -  0);
while (G__48842__i < G__48842__a.length) {G__48842__a[G__48842__i] = arguments[G__48842__i + 0]; ++G__48842__i;}
  _ = new cljs.core.IndexedSeq(G__48842__a,0,null);
} 
return G__48841__delegate.call(this,_);};
G__48841.cljs$lang$maxFixedArity = 0;
G__48841.cljs$lang$applyTo = (function (arglist__48843){
var _ = cljs.core.seq(arglist__48843);
return G__48841__delegate(_);
});
G__48841.cljs$core$IFn$_invoke$arity$variadic = G__48841__delegate;
return G__48841;
})()
,(function() { 
var G__48844__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__48844 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__48845__i = 0, G__48845__a = new Array(arguments.length -  0);
while (G__48845__i < G__48845__a.length) {G__48845__a[G__48845__i] = arguments[G__48845__i + 0]; ++G__48845__i;}
  _ = new cljs.core.IndexedSeq(G__48845__a,0,null);
} 
return G__48844__delegate.call(this,_);};
G__48844.cljs$lang$maxFixedArity = 0;
G__48844.cljs$lang$applyTo = (function (arglist__48846){
var _ = cljs.core.seq(arglist__48846);
return G__48844__delegate(_);
});
G__48844.cljs$core$IFn$_invoke$arity$variadic = G__48844__delegate;
return G__48844;
})()
,(function() { 
var G__48847__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__48847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48848__i = 0, G__48848__a = new Array(arguments.length -  0);
while (G__48848__i < G__48848__a.length) {G__48848__a[G__48848__i] = arguments[G__48848__i + 0]; ++G__48848__i;}
  args = new cljs.core.IndexedSeq(G__48848__a,0,null);
} 
return G__48847__delegate.call(this,args);};
G__48847.cljs$lang$maxFixedArity = 0;
G__48847.cljs$lang$applyTo = (function (arglist__48849){
var args = cljs.core.seq(arglist__48849);
return G__48847__delegate(args);
});
G__48847.cljs$core$IFn$_invoke$arity$variadic = G__48847__delegate;
return G__48847;
})()
,(function() { 
var G__48850__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__48850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48851__i = 0, G__48851__a = new Array(arguments.length -  0);
while (G__48851__i < G__48851__a.length) {G__48851__a[G__48851__i] = arguments[G__48851__i + 0]; ++G__48851__i;}
  args = new cljs.core.IndexedSeq(G__48851__a,0,null);
} 
return G__48850__delegate.call(this,args);};
G__48850.cljs$lang$maxFixedArity = 0;
G__48850.cljs$lang$applyTo = (function (arglist__48852){
var args = cljs.core.seq(arglist__48852);
return G__48850__delegate(args);
});
G__48850.cljs$core$IFn$_invoke$arity$variadic = G__48850__delegate;
return G__48850;
})()
,(function() { 
var G__48853__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__48853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48854__i = 0, G__48854__a = new Array(arguments.length -  0);
while (G__48854__i < G__48854__a.length) {G__48854__a[G__48854__i] = arguments[G__48854__i + 0]; ++G__48854__i;}
  args = new cljs.core.IndexedSeq(G__48854__a,0,null);
} 
return G__48853__delegate.call(this,args);};
G__48853.cljs$lang$maxFixedArity = 0;
G__48853.cljs$lang$applyTo = (function (arglist__48855){
var args = cljs.core.seq(arglist__48855);
return G__48853__delegate(args);
});
G__48853.cljs$core$IFn$_invoke$arity$variadic = G__48853__delegate;
return G__48853;
})()
,(function() { 
var G__48856__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__48856 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__48857__i = 0, G__48857__a = new Array(arguments.length -  0);
while (G__48857__i < G__48857__a.length) {G__48857__a[G__48857__i] = arguments[G__48857__i + 0]; ++G__48857__i;}
  _ = new cljs.core.IndexedSeq(G__48857__a,0,null);
} 
return G__48856__delegate.call(this,_);};
G__48856.cljs$lang$maxFixedArity = 0;
G__48856.cljs$lang$applyTo = (function (arglist__48858){
var _ = cljs.core.seq(arglist__48858);
return G__48856__delegate(_);
});
G__48856.cljs$core$IFn$_invoke$arity$variadic = G__48856__delegate;
return G__48856;
})()
,(function() { 
var G__48859__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__48859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48860__i = 0, G__48860__a = new Array(arguments.length -  0);
while (G__48860__i < G__48860__a.length) {G__48860__a[G__48860__i] = arguments[G__48860__i + 0]; ++G__48860__i;}
  args = new cljs.core.IndexedSeq(G__48860__a,0,null);
} 
return G__48859__delegate.call(this,args);};
G__48859.cljs$lang$maxFixedArity = 0;
G__48859.cljs$lang$applyTo = (function (arglist__48861){
var args = cljs.core.seq(arglist__48861);
return G__48859__delegate(args);
});
G__48859.cljs$core$IFn$_invoke$arity$variadic = G__48859__delegate;
return G__48859;
})()
,(function() { 
var G__48862__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__48862 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__48863__i = 0, G__48863__a = new Array(arguments.length -  0);
while (G__48863__i < G__48863__a.length) {G__48863__a[G__48863__i] = arguments[G__48863__i + 0]; ++G__48863__i;}
  _ = new cljs.core.IndexedSeq(G__48863__a,0,null);
} 
return G__48862__delegate.call(this,_);};
G__48862.cljs$lang$maxFixedArity = 0;
G__48862.cljs$lang$applyTo = (function (arglist__48864){
var _ = cljs.core.seq(arglist__48864);
return G__48862__delegate(_);
});
G__48862.cljs$core$IFn$_invoke$arity$variadic = G__48862__delegate;
return G__48862;
})()
,(function() { 
var G__48865__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__48865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48866__i = 0, G__48866__a = new Array(arguments.length -  0);
while (G__48866__i < G__48866__a.length) {G__48866__a[G__48866__i] = arguments[G__48866__i + 0]; ++G__48866__i;}
  args = new cljs.core.IndexedSeq(G__48866__a,0,null);
} 
return G__48865__delegate.call(this,args);};
G__48865.cljs$lang$maxFixedArity = 0;
G__48865.cljs$lang$applyTo = (function (arglist__48867){
var args = cljs.core.seq(arglist__48867);
return G__48865__delegate(args);
});
G__48865.cljs$core$IFn$_invoke$arity$variadic = G__48865__delegate;
return G__48865;
})()
,(function() { 
var G__48868__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__48868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48869__i = 0, G__48869__a = new Array(arguments.length -  0);
while (G__48869__i < G__48869__a.length) {G__48869__a[G__48869__i] = arguments[G__48869__i + 0]; ++G__48869__i;}
  args = new cljs.core.IndexedSeq(G__48869__a,0,null);
} 
return G__48868__delegate.call(this,args);};
G__48868.cljs$lang$maxFixedArity = 0;
G__48868.cljs$lang$applyTo = (function (arglist__48870){
var args = cljs.core.seq(arglist__48870);
return G__48868__delegate(args);
});
G__48868.cljs$core$IFn$_invoke$arity$variadic = G__48868__delegate;
return G__48868;
})()
,(function() { 
var G__48871__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__48871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48872__i = 0, G__48872__a = new Array(arguments.length -  0);
while (G__48872__i < G__48872__a.length) {G__48872__a[G__48872__i] = arguments[G__48872__i + 0]; ++G__48872__i;}
  args = new cljs.core.IndexedSeq(G__48872__a,0,null);
} 
return G__48871__delegate.call(this,args);};
G__48871.cljs$lang$maxFixedArity = 0;
G__48871.cljs$lang$applyTo = (function (arglist__48873){
var args = cljs.core.seq(arglist__48873);
return G__48871__delegate(args);
});
G__48871.cljs$core$IFn$_invoke$arity$variadic = G__48871__delegate;
return G__48871;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__48874__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__48874 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__48875__i = 0, G__48875__a = new Array(arguments.length -  0);
while (G__48875__i < G__48875__a.length) {G__48875__a[G__48875__i] = arguments[G__48875__i + 0]; ++G__48875__i;}
  _ = new cljs.core.IndexedSeq(G__48875__a,0,null);
} 
return G__48874__delegate.call(this,_);};
G__48874.cljs$lang$maxFixedArity = 0;
G__48874.cljs$lang$applyTo = (function (arglist__48876){
var _ = cljs.core.seq(arglist__48876);
return G__48874__delegate(_);
});
G__48874.cljs$core$IFn$_invoke$arity$variadic = G__48874__delegate;
return G__48874;
})()
,(function() { 
var G__48877__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__48877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48878__i = 0, G__48878__a = new Array(arguments.length -  0);
while (G__48878__i < G__48878__a.length) {G__48878__a[G__48878__i] = arguments[G__48878__i + 0]; ++G__48878__i;}
  args = new cljs.core.IndexedSeq(G__48878__a,0,null);
} 
return G__48877__delegate.call(this,args);};
G__48877.cljs$lang$maxFixedArity = 0;
G__48877.cljs$lang$applyTo = (function (arglist__48879){
var args = cljs.core.seq(arglist__48879);
return G__48877__delegate(args);
});
G__48877.cljs$core$IFn$_invoke$arity$variadic = G__48877__delegate;
return G__48877;
})()
,(function() { 
var G__48880__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__48880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48881__i = 0, G__48881__a = new Array(arguments.length -  0);
while (G__48881__i < G__48881__a.length) {G__48881__a[G__48881__i] = arguments[G__48881__i + 0]; ++G__48881__i;}
  args = new cljs.core.IndexedSeq(G__48881__a,0,null);
} 
return G__48880__delegate.call(this,args);};
G__48880.cljs$lang$maxFixedArity = 0;
G__48880.cljs$lang$applyTo = (function (arglist__48882){
var args = cljs.core.seq(arglist__48882);
return G__48880__delegate(args);
});
G__48880.cljs$core$IFn$_invoke$arity$variadic = G__48880__delegate;
return G__48880;
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

var temp__5825__auto___48883 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5825__auto___48883)){
var v_48884 = temp__5825__auto___48883;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_48884);
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
}catch (e48831){var __48885 = e48831;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
