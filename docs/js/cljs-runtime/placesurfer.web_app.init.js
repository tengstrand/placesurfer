goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__43687__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__43687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43688__i = 0, G__43688__a = new Array(arguments.length -  0);
while (G__43688__i < G__43688__a.length) {G__43688__a[G__43688__i] = arguments[G__43688__i + 0]; ++G__43688__i;}
  args = new cljs.core.IndexedSeq(G__43688__a,0,null);
} 
return G__43687__delegate.call(this,args);};
G__43687.cljs$lang$maxFixedArity = 0;
G__43687.cljs$lang$applyTo = (function (arglist__43689){
var args = cljs.core.seq(arglist__43689);
return G__43687__delegate(args);
});
G__43687.cljs$core$IFn$_invoke$arity$variadic = G__43687__delegate;
return G__43687;
})()
,(function() { 
var G__43690__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__43690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43691__i = 0, G__43691__a = new Array(arguments.length -  0);
while (G__43691__i < G__43691__a.length) {G__43691__a[G__43691__i] = arguments[G__43691__i + 0]; ++G__43691__i;}
  args = new cljs.core.IndexedSeq(G__43691__a,0,null);
} 
return G__43690__delegate.call(this,args);};
G__43690.cljs$lang$maxFixedArity = 0;
G__43690.cljs$lang$applyTo = (function (arglist__43692){
var args = cljs.core.seq(arglist__43692);
return G__43690__delegate(args);
});
G__43690.cljs$core$IFn$_invoke$arity$variadic = G__43690__delegate;
return G__43690;
})()
,(function() { 
var G__43693__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__43693 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43694__i = 0, G__43694__a = new Array(arguments.length -  0);
while (G__43694__i < G__43694__a.length) {G__43694__a[G__43694__i] = arguments[G__43694__i + 0]; ++G__43694__i;}
  _ = new cljs.core.IndexedSeq(G__43694__a,0,null);
} 
return G__43693__delegate.call(this,_);};
G__43693.cljs$lang$maxFixedArity = 0;
G__43693.cljs$lang$applyTo = (function (arglist__43695){
var _ = cljs.core.seq(arglist__43695);
return G__43693__delegate(_);
});
G__43693.cljs$core$IFn$_invoke$arity$variadic = G__43693__delegate;
return G__43693;
})()
,(function() { 
var G__43696__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__43696 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43697__i = 0, G__43697__a = new Array(arguments.length -  0);
while (G__43697__i < G__43697__a.length) {G__43697__a[G__43697__i] = arguments[G__43697__i + 0]; ++G__43697__i;}
  _ = new cljs.core.IndexedSeq(G__43697__a,0,null);
} 
return G__43696__delegate.call(this,_);};
G__43696.cljs$lang$maxFixedArity = 0;
G__43696.cljs$lang$applyTo = (function (arglist__43698){
var _ = cljs.core.seq(arglist__43698);
return G__43696__delegate(_);
});
G__43696.cljs$core$IFn$_invoke$arity$variadic = G__43696__delegate;
return G__43696;
})()
,(function() { 
var G__43699__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__43699 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43700__i = 0, G__43700__a = new Array(arguments.length -  0);
while (G__43700__i < G__43700__a.length) {G__43700__a[G__43700__i] = arguments[G__43700__i + 0]; ++G__43700__i;}
  _ = new cljs.core.IndexedSeq(G__43700__a,0,null);
} 
return G__43699__delegate.call(this,_);};
G__43699.cljs$lang$maxFixedArity = 0;
G__43699.cljs$lang$applyTo = (function (arglist__43701){
var _ = cljs.core.seq(arglist__43701);
return G__43699__delegate(_);
});
G__43699.cljs$core$IFn$_invoke$arity$variadic = G__43699__delegate;
return G__43699;
})()
,(function() { 
var G__43702__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__43702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43703__i = 0, G__43703__a = new Array(arguments.length -  0);
while (G__43703__i < G__43703__a.length) {G__43703__a[G__43703__i] = arguments[G__43703__i + 0]; ++G__43703__i;}
  args = new cljs.core.IndexedSeq(G__43703__a,0,null);
} 
return G__43702__delegate.call(this,args);};
G__43702.cljs$lang$maxFixedArity = 0;
G__43702.cljs$lang$applyTo = (function (arglist__43704){
var args = cljs.core.seq(arglist__43704);
return G__43702__delegate(args);
});
G__43702.cljs$core$IFn$_invoke$arity$variadic = G__43702__delegate;
return G__43702;
})()
,(function() { 
var G__43705__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__43705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43706__i = 0, G__43706__a = new Array(arguments.length -  0);
while (G__43706__i < G__43706__a.length) {G__43706__a[G__43706__i] = arguments[G__43706__i + 0]; ++G__43706__i;}
  args = new cljs.core.IndexedSeq(G__43706__a,0,null);
} 
return G__43705__delegate.call(this,args);};
G__43705.cljs$lang$maxFixedArity = 0;
G__43705.cljs$lang$applyTo = (function (arglist__43707){
var args = cljs.core.seq(arglist__43707);
return G__43705__delegate(args);
});
G__43705.cljs$core$IFn$_invoke$arity$variadic = G__43705__delegate;
return G__43705;
})()
,(function() { 
var G__43708__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__43708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43709__i = 0, G__43709__a = new Array(arguments.length -  0);
while (G__43709__i < G__43709__a.length) {G__43709__a[G__43709__i] = arguments[G__43709__i + 0]; ++G__43709__i;}
  args = new cljs.core.IndexedSeq(G__43709__a,0,null);
} 
return G__43708__delegate.call(this,args);};
G__43708.cljs$lang$maxFixedArity = 0;
G__43708.cljs$lang$applyTo = (function (arglist__43710){
var args = cljs.core.seq(arglist__43710);
return G__43708__delegate(args);
});
G__43708.cljs$core$IFn$_invoke$arity$variadic = G__43708__delegate;
return G__43708;
})()
,(function() { 
var G__43711__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__43711 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43712__i = 0, G__43712__a = new Array(arguments.length -  0);
while (G__43712__i < G__43712__a.length) {G__43712__a[G__43712__i] = arguments[G__43712__i + 0]; ++G__43712__i;}
  _ = new cljs.core.IndexedSeq(G__43712__a,0,null);
} 
return G__43711__delegate.call(this,_);};
G__43711.cljs$lang$maxFixedArity = 0;
G__43711.cljs$lang$applyTo = (function (arglist__43713){
var _ = cljs.core.seq(arglist__43713);
return G__43711__delegate(_);
});
G__43711.cljs$core$IFn$_invoke$arity$variadic = G__43711__delegate;
return G__43711;
})()
,(function() { 
var G__43714__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__43714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43715__i = 0, G__43715__a = new Array(arguments.length -  0);
while (G__43715__i < G__43715__a.length) {G__43715__a[G__43715__i] = arguments[G__43715__i + 0]; ++G__43715__i;}
  args = new cljs.core.IndexedSeq(G__43715__a,0,null);
} 
return G__43714__delegate.call(this,args);};
G__43714.cljs$lang$maxFixedArity = 0;
G__43714.cljs$lang$applyTo = (function (arglist__43716){
var args = cljs.core.seq(arglist__43716);
return G__43714__delegate(args);
});
G__43714.cljs$core$IFn$_invoke$arity$variadic = G__43714__delegate;
return G__43714;
})()
,(function() { 
var G__43717__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__43717 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43718__i = 0, G__43718__a = new Array(arguments.length -  0);
while (G__43718__i < G__43718__a.length) {G__43718__a[G__43718__i] = arguments[G__43718__i + 0]; ++G__43718__i;}
  _ = new cljs.core.IndexedSeq(G__43718__a,0,null);
} 
return G__43717__delegate.call(this,_);};
G__43717.cljs$lang$maxFixedArity = 0;
G__43717.cljs$lang$applyTo = (function (arglist__43719){
var _ = cljs.core.seq(arglist__43719);
return G__43717__delegate(_);
});
G__43717.cljs$core$IFn$_invoke$arity$variadic = G__43717__delegate;
return G__43717;
})()
,(function() { 
var G__43720__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__43720 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43721__i = 0, G__43721__a = new Array(arguments.length -  0);
while (G__43721__i < G__43721__a.length) {G__43721__a[G__43721__i] = arguments[G__43721__i + 0]; ++G__43721__i;}
  args = new cljs.core.IndexedSeq(G__43721__a,0,null);
} 
return G__43720__delegate.call(this,args);};
G__43720.cljs$lang$maxFixedArity = 0;
G__43720.cljs$lang$applyTo = (function (arglist__43722){
var args = cljs.core.seq(arglist__43722);
return G__43720__delegate(args);
});
G__43720.cljs$core$IFn$_invoke$arity$variadic = G__43720__delegate;
return G__43720;
})()
,(function() { 
var G__43723__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__43723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43724__i = 0, G__43724__a = new Array(arguments.length -  0);
while (G__43724__i < G__43724__a.length) {G__43724__a[G__43724__i] = arguments[G__43724__i + 0]; ++G__43724__i;}
  args = new cljs.core.IndexedSeq(G__43724__a,0,null);
} 
return G__43723__delegate.call(this,args);};
G__43723.cljs$lang$maxFixedArity = 0;
G__43723.cljs$lang$applyTo = (function (arglist__43725){
var args = cljs.core.seq(arglist__43725);
return G__43723__delegate(args);
});
G__43723.cljs$core$IFn$_invoke$arity$variadic = G__43723__delegate;
return G__43723;
})()
,(function() { 
var G__43726__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__43726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43727__i = 0, G__43727__a = new Array(arguments.length -  0);
while (G__43727__i < G__43727__a.length) {G__43727__a[G__43727__i] = arguments[G__43727__i + 0]; ++G__43727__i;}
  args = new cljs.core.IndexedSeq(G__43727__a,0,null);
} 
return G__43726__delegate.call(this,args);};
G__43726.cljs$lang$maxFixedArity = 0;
G__43726.cljs$lang$applyTo = (function (arglist__43728){
var args = cljs.core.seq(arglist__43728);
return G__43726__delegate(args);
});
G__43726.cljs$core$IFn$_invoke$arity$variadic = G__43726__delegate;
return G__43726;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__43729__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__43729 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43730__i = 0, G__43730__a = new Array(arguments.length -  0);
while (G__43730__i < G__43730__a.length) {G__43730__a[G__43730__i] = arguments[G__43730__i + 0]; ++G__43730__i;}
  _ = new cljs.core.IndexedSeq(G__43730__a,0,null);
} 
return G__43729__delegate.call(this,_);};
G__43729.cljs$lang$maxFixedArity = 0;
G__43729.cljs$lang$applyTo = (function (arglist__43731){
var _ = cljs.core.seq(arglist__43731);
return G__43729__delegate(_);
});
G__43729.cljs$core$IFn$_invoke$arity$variadic = G__43729__delegate;
return G__43729;
})()
,(function() { 
var G__43732__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__43732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43733__i = 0, G__43733__a = new Array(arguments.length -  0);
while (G__43733__i < G__43733__a.length) {G__43733__a[G__43733__i] = arguments[G__43733__i + 0]; ++G__43733__i;}
  args = new cljs.core.IndexedSeq(G__43733__a,0,null);
} 
return G__43732__delegate.call(this,args);};
G__43732.cljs$lang$maxFixedArity = 0;
G__43732.cljs$lang$applyTo = (function (arglist__43734){
var args = cljs.core.seq(arglist__43734);
return G__43732__delegate(args);
});
G__43732.cljs$core$IFn$_invoke$arity$variadic = G__43732__delegate;
return G__43732;
})()
,(function() { 
var G__43735__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__43735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43736__i = 0, G__43736__a = new Array(arguments.length -  0);
while (G__43736__i < G__43736__a.length) {G__43736__a[G__43736__i] = arguments[G__43736__i + 0]; ++G__43736__i;}
  args = new cljs.core.IndexedSeq(G__43736__a,0,null);
} 
return G__43735__delegate.call(this,args);};
G__43735.cljs$lang$maxFixedArity = 0;
G__43735.cljs$lang$applyTo = (function (arglist__43737){
var args = cljs.core.seq(arglist__43737);
return G__43735__delegate(args);
});
G__43735.cljs$core$IFn$_invoke$arity$variadic = G__43735__delegate;
return G__43735;
})()
]));
});
placesurfer.web_app.init.init_BANG_ = (function placesurfer$web_app$init$init_BANG_(){
placesurfer.web_app.init.wire_effects_BANG_();

placesurfer.web_app.locale.init_locale_BANG_();

placesurfer.pin_ui.interface$.handlers.form.load_pin_icons_BANG_();

placesurfer.pin_ui.interface$.handlers.form.load_pins_from_storage_BANG_();

placesurfer.web_app.render.render_BANG_();

placesurfer.map_panel_ui.interface$.layout.sync_layout_BANG_();

placesurfer.app_ui.interface$.load.init_load_BANG_();

document.addEventListener("keydown",placesurfer.web_app.keyboard.on_document_keydown_BANG_);

document.addEventListener("paste",placesurfer.web_app.clipboard.on_document_paste_BANG_);

window.addEventListener("resize",(function (){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
}));

try{placesurfer.web_app.nav.track_page_BANG_(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)));
}catch (e43686){var __43738 = e43686;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
