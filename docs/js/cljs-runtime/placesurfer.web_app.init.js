goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__57788__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__57788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57789__i = 0, G__57789__a = new Array(arguments.length -  0);
while (G__57789__i < G__57789__a.length) {G__57789__a[G__57789__i] = arguments[G__57789__i + 0]; ++G__57789__i;}
  args = new cljs.core.IndexedSeq(G__57789__a,0,null);
} 
return G__57788__delegate.call(this,args);};
G__57788.cljs$lang$maxFixedArity = 0;
G__57788.cljs$lang$applyTo = (function (arglist__57790){
var args = cljs.core.seq(arglist__57790);
return G__57788__delegate(args);
});
G__57788.cljs$core$IFn$_invoke$arity$variadic = G__57788__delegate;
return G__57788;
})()
,(function() { 
var G__57791__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__57791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57792__i = 0, G__57792__a = new Array(arguments.length -  0);
while (G__57792__i < G__57792__a.length) {G__57792__a[G__57792__i] = arguments[G__57792__i + 0]; ++G__57792__i;}
  args = new cljs.core.IndexedSeq(G__57792__a,0,null);
} 
return G__57791__delegate.call(this,args);};
G__57791.cljs$lang$maxFixedArity = 0;
G__57791.cljs$lang$applyTo = (function (arglist__57793){
var args = cljs.core.seq(arglist__57793);
return G__57791__delegate(args);
});
G__57791.cljs$core$IFn$_invoke$arity$variadic = G__57791__delegate;
return G__57791;
})()
,(function() { 
var G__57794__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__57794 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__57795__i = 0, G__57795__a = new Array(arguments.length -  0);
while (G__57795__i < G__57795__a.length) {G__57795__a[G__57795__i] = arguments[G__57795__i + 0]; ++G__57795__i;}
  _ = new cljs.core.IndexedSeq(G__57795__a,0,null);
} 
return G__57794__delegate.call(this,_);};
G__57794.cljs$lang$maxFixedArity = 0;
G__57794.cljs$lang$applyTo = (function (arglist__57796){
var _ = cljs.core.seq(arglist__57796);
return G__57794__delegate(_);
});
G__57794.cljs$core$IFn$_invoke$arity$variadic = G__57794__delegate;
return G__57794;
})()
,(function() { 
var G__57797__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__57797 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__57798__i = 0, G__57798__a = new Array(arguments.length -  0);
while (G__57798__i < G__57798__a.length) {G__57798__a[G__57798__i] = arguments[G__57798__i + 0]; ++G__57798__i;}
  _ = new cljs.core.IndexedSeq(G__57798__a,0,null);
} 
return G__57797__delegate.call(this,_);};
G__57797.cljs$lang$maxFixedArity = 0;
G__57797.cljs$lang$applyTo = (function (arglist__57799){
var _ = cljs.core.seq(arglist__57799);
return G__57797__delegate(_);
});
G__57797.cljs$core$IFn$_invoke$arity$variadic = G__57797__delegate;
return G__57797;
})()
,(function() { 
var G__57800__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__57800 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__57801__i = 0, G__57801__a = new Array(arguments.length -  0);
while (G__57801__i < G__57801__a.length) {G__57801__a[G__57801__i] = arguments[G__57801__i + 0]; ++G__57801__i;}
  _ = new cljs.core.IndexedSeq(G__57801__a,0,null);
} 
return G__57800__delegate.call(this,_);};
G__57800.cljs$lang$maxFixedArity = 0;
G__57800.cljs$lang$applyTo = (function (arglist__57802){
var _ = cljs.core.seq(arglist__57802);
return G__57800__delegate(_);
});
G__57800.cljs$core$IFn$_invoke$arity$variadic = G__57800__delegate;
return G__57800;
})()
,(function() { 
var G__57803__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__57803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57804__i = 0, G__57804__a = new Array(arguments.length -  0);
while (G__57804__i < G__57804__a.length) {G__57804__a[G__57804__i] = arguments[G__57804__i + 0]; ++G__57804__i;}
  args = new cljs.core.IndexedSeq(G__57804__a,0,null);
} 
return G__57803__delegate.call(this,args);};
G__57803.cljs$lang$maxFixedArity = 0;
G__57803.cljs$lang$applyTo = (function (arglist__57805){
var args = cljs.core.seq(arglist__57805);
return G__57803__delegate(args);
});
G__57803.cljs$core$IFn$_invoke$arity$variadic = G__57803__delegate;
return G__57803;
})()
,(function() { 
var G__57806__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__57806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57807__i = 0, G__57807__a = new Array(arguments.length -  0);
while (G__57807__i < G__57807__a.length) {G__57807__a[G__57807__i] = arguments[G__57807__i + 0]; ++G__57807__i;}
  args = new cljs.core.IndexedSeq(G__57807__a,0,null);
} 
return G__57806__delegate.call(this,args);};
G__57806.cljs$lang$maxFixedArity = 0;
G__57806.cljs$lang$applyTo = (function (arglist__57808){
var args = cljs.core.seq(arglist__57808);
return G__57806__delegate(args);
});
G__57806.cljs$core$IFn$_invoke$arity$variadic = G__57806__delegate;
return G__57806;
})()
,(function() { 
var G__57809__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__57809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57810__i = 0, G__57810__a = new Array(arguments.length -  0);
while (G__57810__i < G__57810__a.length) {G__57810__a[G__57810__i] = arguments[G__57810__i + 0]; ++G__57810__i;}
  args = new cljs.core.IndexedSeq(G__57810__a,0,null);
} 
return G__57809__delegate.call(this,args);};
G__57809.cljs$lang$maxFixedArity = 0;
G__57809.cljs$lang$applyTo = (function (arglist__57811){
var args = cljs.core.seq(arglist__57811);
return G__57809__delegate(args);
});
G__57809.cljs$core$IFn$_invoke$arity$variadic = G__57809__delegate;
return G__57809;
})()
,(function() { 
var G__57812__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__57812 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__57813__i = 0, G__57813__a = new Array(arguments.length -  0);
while (G__57813__i < G__57813__a.length) {G__57813__a[G__57813__i] = arguments[G__57813__i + 0]; ++G__57813__i;}
  _ = new cljs.core.IndexedSeq(G__57813__a,0,null);
} 
return G__57812__delegate.call(this,_);};
G__57812.cljs$lang$maxFixedArity = 0;
G__57812.cljs$lang$applyTo = (function (arglist__57814){
var _ = cljs.core.seq(arglist__57814);
return G__57812__delegate(_);
});
G__57812.cljs$core$IFn$_invoke$arity$variadic = G__57812__delegate;
return G__57812;
})()
,(function() { 
var G__57815__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__57815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57816__i = 0, G__57816__a = new Array(arguments.length -  0);
while (G__57816__i < G__57816__a.length) {G__57816__a[G__57816__i] = arguments[G__57816__i + 0]; ++G__57816__i;}
  args = new cljs.core.IndexedSeq(G__57816__a,0,null);
} 
return G__57815__delegate.call(this,args);};
G__57815.cljs$lang$maxFixedArity = 0;
G__57815.cljs$lang$applyTo = (function (arglist__57817){
var args = cljs.core.seq(arglist__57817);
return G__57815__delegate(args);
});
G__57815.cljs$core$IFn$_invoke$arity$variadic = G__57815__delegate;
return G__57815;
})()
,(function() { 
var G__57818__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__57818 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__57819__i = 0, G__57819__a = new Array(arguments.length -  0);
while (G__57819__i < G__57819__a.length) {G__57819__a[G__57819__i] = arguments[G__57819__i + 0]; ++G__57819__i;}
  _ = new cljs.core.IndexedSeq(G__57819__a,0,null);
} 
return G__57818__delegate.call(this,_);};
G__57818.cljs$lang$maxFixedArity = 0;
G__57818.cljs$lang$applyTo = (function (arglist__57820){
var _ = cljs.core.seq(arglist__57820);
return G__57818__delegate(_);
});
G__57818.cljs$core$IFn$_invoke$arity$variadic = G__57818__delegate;
return G__57818;
})()
,(function() { 
var G__57821__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__57821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57822__i = 0, G__57822__a = new Array(arguments.length -  0);
while (G__57822__i < G__57822__a.length) {G__57822__a[G__57822__i] = arguments[G__57822__i + 0]; ++G__57822__i;}
  args = new cljs.core.IndexedSeq(G__57822__a,0,null);
} 
return G__57821__delegate.call(this,args);};
G__57821.cljs$lang$maxFixedArity = 0;
G__57821.cljs$lang$applyTo = (function (arglist__57823){
var args = cljs.core.seq(arglist__57823);
return G__57821__delegate(args);
});
G__57821.cljs$core$IFn$_invoke$arity$variadic = G__57821__delegate;
return G__57821;
})()
,(function() { 
var G__57824__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__57824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57825__i = 0, G__57825__a = new Array(arguments.length -  0);
while (G__57825__i < G__57825__a.length) {G__57825__a[G__57825__i] = arguments[G__57825__i + 0]; ++G__57825__i;}
  args = new cljs.core.IndexedSeq(G__57825__a,0,null);
} 
return G__57824__delegate.call(this,args);};
G__57824.cljs$lang$maxFixedArity = 0;
G__57824.cljs$lang$applyTo = (function (arglist__57826){
var args = cljs.core.seq(arglist__57826);
return G__57824__delegate(args);
});
G__57824.cljs$core$IFn$_invoke$arity$variadic = G__57824__delegate;
return G__57824;
})()
,(function() { 
var G__57827__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__57827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57828__i = 0, G__57828__a = new Array(arguments.length -  0);
while (G__57828__i < G__57828__a.length) {G__57828__a[G__57828__i] = arguments[G__57828__i + 0]; ++G__57828__i;}
  args = new cljs.core.IndexedSeq(G__57828__a,0,null);
} 
return G__57827__delegate.call(this,args);};
G__57827.cljs$lang$maxFixedArity = 0;
G__57827.cljs$lang$applyTo = (function (arglist__57829){
var args = cljs.core.seq(arglist__57829);
return G__57827__delegate(args);
});
G__57827.cljs$core$IFn$_invoke$arity$variadic = G__57827__delegate;
return G__57827;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__57830__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__57830 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__57831__i = 0, G__57831__a = new Array(arguments.length -  0);
while (G__57831__i < G__57831__a.length) {G__57831__a[G__57831__i] = arguments[G__57831__i + 0]; ++G__57831__i;}
  _ = new cljs.core.IndexedSeq(G__57831__a,0,null);
} 
return G__57830__delegate.call(this,_);};
G__57830.cljs$lang$maxFixedArity = 0;
G__57830.cljs$lang$applyTo = (function (arglist__57832){
var _ = cljs.core.seq(arglist__57832);
return G__57830__delegate(_);
});
G__57830.cljs$core$IFn$_invoke$arity$variadic = G__57830__delegate;
return G__57830;
})()
,(function() { 
var G__57833__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__57833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57834__i = 0, G__57834__a = new Array(arguments.length -  0);
while (G__57834__i < G__57834__a.length) {G__57834__a[G__57834__i] = arguments[G__57834__i + 0]; ++G__57834__i;}
  args = new cljs.core.IndexedSeq(G__57834__a,0,null);
} 
return G__57833__delegate.call(this,args);};
G__57833.cljs$lang$maxFixedArity = 0;
G__57833.cljs$lang$applyTo = (function (arglist__57835){
var args = cljs.core.seq(arglist__57835);
return G__57833__delegate(args);
});
G__57833.cljs$core$IFn$_invoke$arity$variadic = G__57833__delegate;
return G__57833;
})()
,(function() { 
var G__57836__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__57836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57837__i = 0, G__57837__a = new Array(arguments.length -  0);
while (G__57837__i < G__57837__a.length) {G__57837__a[G__57837__i] = arguments[G__57837__i + 0]; ++G__57837__i;}
  args = new cljs.core.IndexedSeq(G__57837__a,0,null);
} 
return G__57836__delegate.call(this,args);};
G__57836.cljs$lang$maxFixedArity = 0;
G__57836.cljs$lang$applyTo = (function (arglist__57838){
var args = cljs.core.seq(arglist__57838);
return G__57836__delegate(args);
});
G__57836.cljs$core$IFn$_invoke$arity$variadic = G__57836__delegate;
return G__57836;
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

var temp__5825__auto___57839 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5825__auto___57839)){
var v_57840 = temp__5825__auto___57839;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_57840);
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
}catch (e57787){var __57841 = e57787;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
