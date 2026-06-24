goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__45157__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__45157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45158__i = 0, G__45158__a = new Array(arguments.length -  0);
while (G__45158__i < G__45158__a.length) {G__45158__a[G__45158__i] = arguments[G__45158__i + 0]; ++G__45158__i;}
  args = new cljs.core.IndexedSeq(G__45158__a,0,null);
} 
return G__45157__delegate.call(this,args);};
G__45157.cljs$lang$maxFixedArity = 0;
G__45157.cljs$lang$applyTo = (function (arglist__45159){
var args = cljs.core.seq(arglist__45159);
return G__45157__delegate(args);
});
G__45157.cljs$core$IFn$_invoke$arity$variadic = G__45157__delegate;
return G__45157;
})()
,(function() { 
var G__45160__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__45160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45161__i = 0, G__45161__a = new Array(arguments.length -  0);
while (G__45161__i < G__45161__a.length) {G__45161__a[G__45161__i] = arguments[G__45161__i + 0]; ++G__45161__i;}
  args = new cljs.core.IndexedSeq(G__45161__a,0,null);
} 
return G__45160__delegate.call(this,args);};
G__45160.cljs$lang$maxFixedArity = 0;
G__45160.cljs$lang$applyTo = (function (arglist__45162){
var args = cljs.core.seq(arglist__45162);
return G__45160__delegate(args);
});
G__45160.cljs$core$IFn$_invoke$arity$variadic = G__45160__delegate;
return G__45160;
})()
,(function() { 
var G__45163__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__45163 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__45164__i = 0, G__45164__a = new Array(arguments.length -  0);
while (G__45164__i < G__45164__a.length) {G__45164__a[G__45164__i] = arguments[G__45164__i + 0]; ++G__45164__i;}
  _ = new cljs.core.IndexedSeq(G__45164__a,0,null);
} 
return G__45163__delegate.call(this,_);};
G__45163.cljs$lang$maxFixedArity = 0;
G__45163.cljs$lang$applyTo = (function (arglist__45165){
var _ = cljs.core.seq(arglist__45165);
return G__45163__delegate(_);
});
G__45163.cljs$core$IFn$_invoke$arity$variadic = G__45163__delegate;
return G__45163;
})()
,(function() { 
var G__45166__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__45166 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__45167__i = 0, G__45167__a = new Array(arguments.length -  0);
while (G__45167__i < G__45167__a.length) {G__45167__a[G__45167__i] = arguments[G__45167__i + 0]; ++G__45167__i;}
  _ = new cljs.core.IndexedSeq(G__45167__a,0,null);
} 
return G__45166__delegate.call(this,_);};
G__45166.cljs$lang$maxFixedArity = 0;
G__45166.cljs$lang$applyTo = (function (arglist__45168){
var _ = cljs.core.seq(arglist__45168);
return G__45166__delegate(_);
});
G__45166.cljs$core$IFn$_invoke$arity$variadic = G__45166__delegate;
return G__45166;
})()
,(function() { 
var G__45169__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__45169 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__45170__i = 0, G__45170__a = new Array(arguments.length -  0);
while (G__45170__i < G__45170__a.length) {G__45170__a[G__45170__i] = arguments[G__45170__i + 0]; ++G__45170__i;}
  _ = new cljs.core.IndexedSeq(G__45170__a,0,null);
} 
return G__45169__delegate.call(this,_);};
G__45169.cljs$lang$maxFixedArity = 0;
G__45169.cljs$lang$applyTo = (function (arglist__45171){
var _ = cljs.core.seq(arglist__45171);
return G__45169__delegate(_);
});
G__45169.cljs$core$IFn$_invoke$arity$variadic = G__45169__delegate;
return G__45169;
})()
,(function() { 
var G__45172__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__45172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45173__i = 0, G__45173__a = new Array(arguments.length -  0);
while (G__45173__i < G__45173__a.length) {G__45173__a[G__45173__i] = arguments[G__45173__i + 0]; ++G__45173__i;}
  args = new cljs.core.IndexedSeq(G__45173__a,0,null);
} 
return G__45172__delegate.call(this,args);};
G__45172.cljs$lang$maxFixedArity = 0;
G__45172.cljs$lang$applyTo = (function (arglist__45174){
var args = cljs.core.seq(arglist__45174);
return G__45172__delegate(args);
});
G__45172.cljs$core$IFn$_invoke$arity$variadic = G__45172__delegate;
return G__45172;
})()
,(function() { 
var G__45175__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__45175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45176__i = 0, G__45176__a = new Array(arguments.length -  0);
while (G__45176__i < G__45176__a.length) {G__45176__a[G__45176__i] = arguments[G__45176__i + 0]; ++G__45176__i;}
  args = new cljs.core.IndexedSeq(G__45176__a,0,null);
} 
return G__45175__delegate.call(this,args);};
G__45175.cljs$lang$maxFixedArity = 0;
G__45175.cljs$lang$applyTo = (function (arglist__45177){
var args = cljs.core.seq(arglist__45177);
return G__45175__delegate(args);
});
G__45175.cljs$core$IFn$_invoke$arity$variadic = G__45175__delegate;
return G__45175;
})()
,(function() { 
var G__45178__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__45178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45179__i = 0, G__45179__a = new Array(arguments.length -  0);
while (G__45179__i < G__45179__a.length) {G__45179__a[G__45179__i] = arguments[G__45179__i + 0]; ++G__45179__i;}
  args = new cljs.core.IndexedSeq(G__45179__a,0,null);
} 
return G__45178__delegate.call(this,args);};
G__45178.cljs$lang$maxFixedArity = 0;
G__45178.cljs$lang$applyTo = (function (arglist__45180){
var args = cljs.core.seq(arglist__45180);
return G__45178__delegate(args);
});
G__45178.cljs$core$IFn$_invoke$arity$variadic = G__45178__delegate;
return G__45178;
})()
,(function() { 
var G__45181__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__45181 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__45182__i = 0, G__45182__a = new Array(arguments.length -  0);
while (G__45182__i < G__45182__a.length) {G__45182__a[G__45182__i] = arguments[G__45182__i + 0]; ++G__45182__i;}
  _ = new cljs.core.IndexedSeq(G__45182__a,0,null);
} 
return G__45181__delegate.call(this,_);};
G__45181.cljs$lang$maxFixedArity = 0;
G__45181.cljs$lang$applyTo = (function (arglist__45183){
var _ = cljs.core.seq(arglist__45183);
return G__45181__delegate(_);
});
G__45181.cljs$core$IFn$_invoke$arity$variadic = G__45181__delegate;
return G__45181;
})()
,(function() { 
var G__45184__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__45184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45185__i = 0, G__45185__a = new Array(arguments.length -  0);
while (G__45185__i < G__45185__a.length) {G__45185__a[G__45185__i] = arguments[G__45185__i + 0]; ++G__45185__i;}
  args = new cljs.core.IndexedSeq(G__45185__a,0,null);
} 
return G__45184__delegate.call(this,args);};
G__45184.cljs$lang$maxFixedArity = 0;
G__45184.cljs$lang$applyTo = (function (arglist__45186){
var args = cljs.core.seq(arglist__45186);
return G__45184__delegate(args);
});
G__45184.cljs$core$IFn$_invoke$arity$variadic = G__45184__delegate;
return G__45184;
})()
,(function() { 
var G__45187__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__45187 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__45188__i = 0, G__45188__a = new Array(arguments.length -  0);
while (G__45188__i < G__45188__a.length) {G__45188__a[G__45188__i] = arguments[G__45188__i + 0]; ++G__45188__i;}
  _ = new cljs.core.IndexedSeq(G__45188__a,0,null);
} 
return G__45187__delegate.call(this,_);};
G__45187.cljs$lang$maxFixedArity = 0;
G__45187.cljs$lang$applyTo = (function (arglist__45189){
var _ = cljs.core.seq(arglist__45189);
return G__45187__delegate(_);
});
G__45187.cljs$core$IFn$_invoke$arity$variadic = G__45187__delegate;
return G__45187;
})()
,(function() { 
var G__45190__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__45190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45191__i = 0, G__45191__a = new Array(arguments.length -  0);
while (G__45191__i < G__45191__a.length) {G__45191__a[G__45191__i] = arguments[G__45191__i + 0]; ++G__45191__i;}
  args = new cljs.core.IndexedSeq(G__45191__a,0,null);
} 
return G__45190__delegate.call(this,args);};
G__45190.cljs$lang$maxFixedArity = 0;
G__45190.cljs$lang$applyTo = (function (arglist__45192){
var args = cljs.core.seq(arglist__45192);
return G__45190__delegate(args);
});
G__45190.cljs$core$IFn$_invoke$arity$variadic = G__45190__delegate;
return G__45190;
})()
,(function() { 
var G__45193__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__45193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45194__i = 0, G__45194__a = new Array(arguments.length -  0);
while (G__45194__i < G__45194__a.length) {G__45194__a[G__45194__i] = arguments[G__45194__i + 0]; ++G__45194__i;}
  args = new cljs.core.IndexedSeq(G__45194__a,0,null);
} 
return G__45193__delegate.call(this,args);};
G__45193.cljs$lang$maxFixedArity = 0;
G__45193.cljs$lang$applyTo = (function (arglist__45195){
var args = cljs.core.seq(arglist__45195);
return G__45193__delegate(args);
});
G__45193.cljs$core$IFn$_invoke$arity$variadic = G__45193__delegate;
return G__45193;
})()
,(function() { 
var G__45196__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__45196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45197__i = 0, G__45197__a = new Array(arguments.length -  0);
while (G__45197__i < G__45197__a.length) {G__45197__a[G__45197__i] = arguments[G__45197__i + 0]; ++G__45197__i;}
  args = new cljs.core.IndexedSeq(G__45197__a,0,null);
} 
return G__45196__delegate.call(this,args);};
G__45196.cljs$lang$maxFixedArity = 0;
G__45196.cljs$lang$applyTo = (function (arglist__45198){
var args = cljs.core.seq(arglist__45198);
return G__45196__delegate(args);
});
G__45196.cljs$core$IFn$_invoke$arity$variadic = G__45196__delegate;
return G__45196;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__45199__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__45199 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__45200__i = 0, G__45200__a = new Array(arguments.length -  0);
while (G__45200__i < G__45200__a.length) {G__45200__a[G__45200__i] = arguments[G__45200__i + 0]; ++G__45200__i;}
  _ = new cljs.core.IndexedSeq(G__45200__a,0,null);
} 
return G__45199__delegate.call(this,_);};
G__45199.cljs$lang$maxFixedArity = 0;
G__45199.cljs$lang$applyTo = (function (arglist__45201){
var _ = cljs.core.seq(arglist__45201);
return G__45199__delegate(_);
});
G__45199.cljs$core$IFn$_invoke$arity$variadic = G__45199__delegate;
return G__45199;
})()
,(function() { 
var G__45202__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__45202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45203__i = 0, G__45203__a = new Array(arguments.length -  0);
while (G__45203__i < G__45203__a.length) {G__45203__a[G__45203__i] = arguments[G__45203__i + 0]; ++G__45203__i;}
  args = new cljs.core.IndexedSeq(G__45203__a,0,null);
} 
return G__45202__delegate.call(this,args);};
G__45202.cljs$lang$maxFixedArity = 0;
G__45202.cljs$lang$applyTo = (function (arglist__45204){
var args = cljs.core.seq(arglist__45204);
return G__45202__delegate(args);
});
G__45202.cljs$core$IFn$_invoke$arity$variadic = G__45202__delegate;
return G__45202;
})()
,(function() { 
var G__45205__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__45205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45206__i = 0, G__45206__a = new Array(arguments.length -  0);
while (G__45206__i < G__45206__a.length) {G__45206__a[G__45206__i] = arguments[G__45206__i + 0]; ++G__45206__i;}
  args = new cljs.core.IndexedSeq(G__45206__a,0,null);
} 
return G__45205__delegate.call(this,args);};
G__45205.cljs$lang$maxFixedArity = 0;
G__45205.cljs$lang$applyTo = (function (arglist__45207){
var args = cljs.core.seq(arglist__45207);
return G__45205__delegate(args);
});
G__45205.cljs$core$IFn$_invoke$arity$variadic = G__45205__delegate;
return G__45205;
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

var temp__5825__auto___45208 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5825__auto___45208)){
var v_45209 = temp__5825__auto___45208;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_45209);
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
}catch (e45156){var __45210 = e45156;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
