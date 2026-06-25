goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__43686__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__43686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43687__i = 0, G__43687__a = new Array(arguments.length -  0);
while (G__43687__i < G__43687__a.length) {G__43687__a[G__43687__i] = arguments[G__43687__i + 0]; ++G__43687__i;}
  args = new cljs.core.IndexedSeq(G__43687__a,0,null);
} 
return G__43686__delegate.call(this,args);};
G__43686.cljs$lang$maxFixedArity = 0;
G__43686.cljs$lang$applyTo = (function (arglist__43688){
var args = cljs.core.seq(arglist__43688);
return G__43686__delegate(args);
});
G__43686.cljs$core$IFn$_invoke$arity$variadic = G__43686__delegate;
return G__43686;
})()
,(function() { 
var G__43689__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__43689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43690__i = 0, G__43690__a = new Array(arguments.length -  0);
while (G__43690__i < G__43690__a.length) {G__43690__a[G__43690__i] = arguments[G__43690__i + 0]; ++G__43690__i;}
  args = new cljs.core.IndexedSeq(G__43690__a,0,null);
} 
return G__43689__delegate.call(this,args);};
G__43689.cljs$lang$maxFixedArity = 0;
G__43689.cljs$lang$applyTo = (function (arglist__43691){
var args = cljs.core.seq(arglist__43691);
return G__43689__delegate(args);
});
G__43689.cljs$core$IFn$_invoke$arity$variadic = G__43689__delegate;
return G__43689;
})()
,(function() { 
var G__43692__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__43692 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43693__i = 0, G__43693__a = new Array(arguments.length -  0);
while (G__43693__i < G__43693__a.length) {G__43693__a[G__43693__i] = arguments[G__43693__i + 0]; ++G__43693__i;}
  _ = new cljs.core.IndexedSeq(G__43693__a,0,null);
} 
return G__43692__delegate.call(this,_);};
G__43692.cljs$lang$maxFixedArity = 0;
G__43692.cljs$lang$applyTo = (function (arglist__43694){
var _ = cljs.core.seq(arglist__43694);
return G__43692__delegate(_);
});
G__43692.cljs$core$IFn$_invoke$arity$variadic = G__43692__delegate;
return G__43692;
})()
,(function() { 
var G__43695__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__43695 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43696__i = 0, G__43696__a = new Array(arguments.length -  0);
while (G__43696__i < G__43696__a.length) {G__43696__a[G__43696__i] = arguments[G__43696__i + 0]; ++G__43696__i;}
  _ = new cljs.core.IndexedSeq(G__43696__a,0,null);
} 
return G__43695__delegate.call(this,_);};
G__43695.cljs$lang$maxFixedArity = 0;
G__43695.cljs$lang$applyTo = (function (arglist__43697){
var _ = cljs.core.seq(arglist__43697);
return G__43695__delegate(_);
});
G__43695.cljs$core$IFn$_invoke$arity$variadic = G__43695__delegate;
return G__43695;
})()
,(function() { 
var G__43698__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__43698 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43699__i = 0, G__43699__a = new Array(arguments.length -  0);
while (G__43699__i < G__43699__a.length) {G__43699__a[G__43699__i] = arguments[G__43699__i + 0]; ++G__43699__i;}
  _ = new cljs.core.IndexedSeq(G__43699__a,0,null);
} 
return G__43698__delegate.call(this,_);};
G__43698.cljs$lang$maxFixedArity = 0;
G__43698.cljs$lang$applyTo = (function (arglist__43700){
var _ = cljs.core.seq(arglist__43700);
return G__43698__delegate(_);
});
G__43698.cljs$core$IFn$_invoke$arity$variadic = G__43698__delegate;
return G__43698;
})()
,(function() { 
var G__43701__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__43701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43702__i = 0, G__43702__a = new Array(arguments.length -  0);
while (G__43702__i < G__43702__a.length) {G__43702__a[G__43702__i] = arguments[G__43702__i + 0]; ++G__43702__i;}
  args = new cljs.core.IndexedSeq(G__43702__a,0,null);
} 
return G__43701__delegate.call(this,args);};
G__43701.cljs$lang$maxFixedArity = 0;
G__43701.cljs$lang$applyTo = (function (arglist__43703){
var args = cljs.core.seq(arglist__43703);
return G__43701__delegate(args);
});
G__43701.cljs$core$IFn$_invoke$arity$variadic = G__43701__delegate;
return G__43701;
})()
,(function() { 
var G__43704__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__43704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43705__i = 0, G__43705__a = new Array(arguments.length -  0);
while (G__43705__i < G__43705__a.length) {G__43705__a[G__43705__i] = arguments[G__43705__i + 0]; ++G__43705__i;}
  args = new cljs.core.IndexedSeq(G__43705__a,0,null);
} 
return G__43704__delegate.call(this,args);};
G__43704.cljs$lang$maxFixedArity = 0;
G__43704.cljs$lang$applyTo = (function (arglist__43706){
var args = cljs.core.seq(arglist__43706);
return G__43704__delegate(args);
});
G__43704.cljs$core$IFn$_invoke$arity$variadic = G__43704__delegate;
return G__43704;
})()
,(function() { 
var G__43707__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__43707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43708__i = 0, G__43708__a = new Array(arguments.length -  0);
while (G__43708__i < G__43708__a.length) {G__43708__a[G__43708__i] = arguments[G__43708__i + 0]; ++G__43708__i;}
  args = new cljs.core.IndexedSeq(G__43708__a,0,null);
} 
return G__43707__delegate.call(this,args);};
G__43707.cljs$lang$maxFixedArity = 0;
G__43707.cljs$lang$applyTo = (function (arglist__43709){
var args = cljs.core.seq(arglist__43709);
return G__43707__delegate(args);
});
G__43707.cljs$core$IFn$_invoke$arity$variadic = G__43707__delegate;
return G__43707;
})()
,(function() { 
var G__43710__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__43710 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43711__i = 0, G__43711__a = new Array(arguments.length -  0);
while (G__43711__i < G__43711__a.length) {G__43711__a[G__43711__i] = arguments[G__43711__i + 0]; ++G__43711__i;}
  _ = new cljs.core.IndexedSeq(G__43711__a,0,null);
} 
return G__43710__delegate.call(this,_);};
G__43710.cljs$lang$maxFixedArity = 0;
G__43710.cljs$lang$applyTo = (function (arglist__43712){
var _ = cljs.core.seq(arglist__43712);
return G__43710__delegate(_);
});
G__43710.cljs$core$IFn$_invoke$arity$variadic = G__43710__delegate;
return G__43710;
})()
,(function() { 
var G__43713__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__43713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43714__i = 0, G__43714__a = new Array(arguments.length -  0);
while (G__43714__i < G__43714__a.length) {G__43714__a[G__43714__i] = arguments[G__43714__i + 0]; ++G__43714__i;}
  args = new cljs.core.IndexedSeq(G__43714__a,0,null);
} 
return G__43713__delegate.call(this,args);};
G__43713.cljs$lang$maxFixedArity = 0;
G__43713.cljs$lang$applyTo = (function (arglist__43715){
var args = cljs.core.seq(arglist__43715);
return G__43713__delegate(args);
});
G__43713.cljs$core$IFn$_invoke$arity$variadic = G__43713__delegate;
return G__43713;
})()
,(function() { 
var G__43716__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__43716 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43717__i = 0, G__43717__a = new Array(arguments.length -  0);
while (G__43717__i < G__43717__a.length) {G__43717__a[G__43717__i] = arguments[G__43717__i + 0]; ++G__43717__i;}
  _ = new cljs.core.IndexedSeq(G__43717__a,0,null);
} 
return G__43716__delegate.call(this,_);};
G__43716.cljs$lang$maxFixedArity = 0;
G__43716.cljs$lang$applyTo = (function (arglist__43718){
var _ = cljs.core.seq(arglist__43718);
return G__43716__delegate(_);
});
G__43716.cljs$core$IFn$_invoke$arity$variadic = G__43716__delegate;
return G__43716;
})()
,(function() { 
var G__43719__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__43719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43720__i = 0, G__43720__a = new Array(arguments.length -  0);
while (G__43720__i < G__43720__a.length) {G__43720__a[G__43720__i] = arguments[G__43720__i + 0]; ++G__43720__i;}
  args = new cljs.core.IndexedSeq(G__43720__a,0,null);
} 
return G__43719__delegate.call(this,args);};
G__43719.cljs$lang$maxFixedArity = 0;
G__43719.cljs$lang$applyTo = (function (arglist__43721){
var args = cljs.core.seq(arglist__43721);
return G__43719__delegate(args);
});
G__43719.cljs$core$IFn$_invoke$arity$variadic = G__43719__delegate;
return G__43719;
})()
,(function() { 
var G__43722__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__43722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43723__i = 0, G__43723__a = new Array(arguments.length -  0);
while (G__43723__i < G__43723__a.length) {G__43723__a[G__43723__i] = arguments[G__43723__i + 0]; ++G__43723__i;}
  args = new cljs.core.IndexedSeq(G__43723__a,0,null);
} 
return G__43722__delegate.call(this,args);};
G__43722.cljs$lang$maxFixedArity = 0;
G__43722.cljs$lang$applyTo = (function (arglist__43724){
var args = cljs.core.seq(arglist__43724);
return G__43722__delegate(args);
});
G__43722.cljs$core$IFn$_invoke$arity$variadic = G__43722__delegate;
return G__43722;
})()
,(function() { 
var G__43725__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__43725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43726__i = 0, G__43726__a = new Array(arguments.length -  0);
while (G__43726__i < G__43726__a.length) {G__43726__a[G__43726__i] = arguments[G__43726__i + 0]; ++G__43726__i;}
  args = new cljs.core.IndexedSeq(G__43726__a,0,null);
} 
return G__43725__delegate.call(this,args);};
G__43725.cljs$lang$maxFixedArity = 0;
G__43725.cljs$lang$applyTo = (function (arglist__43727){
var args = cljs.core.seq(arglist__43727);
return G__43725__delegate(args);
});
G__43725.cljs$core$IFn$_invoke$arity$variadic = G__43725__delegate;
return G__43725;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__43728__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__43728 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43729__i = 0, G__43729__a = new Array(arguments.length -  0);
while (G__43729__i < G__43729__a.length) {G__43729__a[G__43729__i] = arguments[G__43729__i + 0]; ++G__43729__i;}
  _ = new cljs.core.IndexedSeq(G__43729__a,0,null);
} 
return G__43728__delegate.call(this,_);};
G__43728.cljs$lang$maxFixedArity = 0;
G__43728.cljs$lang$applyTo = (function (arglist__43730){
var _ = cljs.core.seq(arglist__43730);
return G__43728__delegate(_);
});
G__43728.cljs$core$IFn$_invoke$arity$variadic = G__43728__delegate;
return G__43728;
})()
,(function() { 
var G__43731__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__43731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43732__i = 0, G__43732__a = new Array(arguments.length -  0);
while (G__43732__i < G__43732__a.length) {G__43732__a[G__43732__i] = arguments[G__43732__i + 0]; ++G__43732__i;}
  args = new cljs.core.IndexedSeq(G__43732__a,0,null);
} 
return G__43731__delegate.call(this,args);};
G__43731.cljs$lang$maxFixedArity = 0;
G__43731.cljs$lang$applyTo = (function (arglist__43733){
var args = cljs.core.seq(arglist__43733);
return G__43731__delegate(args);
});
G__43731.cljs$core$IFn$_invoke$arity$variadic = G__43731__delegate;
return G__43731;
})()
,(function() { 
var G__43734__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__43734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43735__i = 0, G__43735__a = new Array(arguments.length -  0);
while (G__43735__i < G__43735__a.length) {G__43735__a[G__43735__i] = arguments[G__43735__i + 0]; ++G__43735__i;}
  args = new cljs.core.IndexedSeq(G__43735__a,0,null);
} 
return G__43734__delegate.call(this,args);};
G__43734.cljs$lang$maxFixedArity = 0;
G__43734.cljs$lang$applyTo = (function (arglist__43736){
var args = cljs.core.seq(arglist__43736);
return G__43734__delegate(args);
});
G__43734.cljs$core$IFn$_invoke$arity$variadic = G__43734__delegate;
return G__43734;
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

var temp__5825__auto___43737 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5825__auto___43737)){
var v_43738 = temp__5825__auto___43737;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_43738);
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
}catch (e43685){var __43739 = e43685;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
