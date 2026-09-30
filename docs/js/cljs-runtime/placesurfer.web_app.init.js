goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__76131__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__76131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76132__i = 0, G__76132__a = new Array(arguments.length -  0);
while (G__76132__i < G__76132__a.length) {G__76132__a[G__76132__i] = arguments[G__76132__i + 0]; ++G__76132__i;}
  args = new cljs.core.IndexedSeq(G__76132__a,0,null);
} 
return G__76131__delegate.call(this,args);};
G__76131.cljs$lang$maxFixedArity = 0;
G__76131.cljs$lang$applyTo = (function (arglist__76133){
var args = cljs.core.seq(arglist__76133);
return G__76131__delegate(args);
});
G__76131.cljs$core$IFn$_invoke$arity$variadic = G__76131__delegate;
return G__76131;
})()
,(function() { 
var G__76134__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__76134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76135__i = 0, G__76135__a = new Array(arguments.length -  0);
while (G__76135__i < G__76135__a.length) {G__76135__a[G__76135__i] = arguments[G__76135__i + 0]; ++G__76135__i;}
  args = new cljs.core.IndexedSeq(G__76135__a,0,null);
} 
return G__76134__delegate.call(this,args);};
G__76134.cljs$lang$maxFixedArity = 0;
G__76134.cljs$lang$applyTo = (function (arglist__76136){
var args = cljs.core.seq(arglist__76136);
return G__76134__delegate(args);
});
G__76134.cljs$core$IFn$_invoke$arity$variadic = G__76134__delegate;
return G__76134;
})()
,(function() { 
var G__76137__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__76137 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__76138__i = 0, G__76138__a = new Array(arguments.length -  0);
while (G__76138__i < G__76138__a.length) {G__76138__a[G__76138__i] = arguments[G__76138__i + 0]; ++G__76138__i;}
  _ = new cljs.core.IndexedSeq(G__76138__a,0,null);
} 
return G__76137__delegate.call(this,_);};
G__76137.cljs$lang$maxFixedArity = 0;
G__76137.cljs$lang$applyTo = (function (arglist__76139){
var _ = cljs.core.seq(arglist__76139);
return G__76137__delegate(_);
});
G__76137.cljs$core$IFn$_invoke$arity$variadic = G__76137__delegate;
return G__76137;
})()
,(function() { 
var G__76140__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__76140 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__76141__i = 0, G__76141__a = new Array(arguments.length -  0);
while (G__76141__i < G__76141__a.length) {G__76141__a[G__76141__i] = arguments[G__76141__i + 0]; ++G__76141__i;}
  _ = new cljs.core.IndexedSeq(G__76141__a,0,null);
} 
return G__76140__delegate.call(this,_);};
G__76140.cljs$lang$maxFixedArity = 0;
G__76140.cljs$lang$applyTo = (function (arglist__76142){
var _ = cljs.core.seq(arglist__76142);
return G__76140__delegate(_);
});
G__76140.cljs$core$IFn$_invoke$arity$variadic = G__76140__delegate;
return G__76140;
})()
,(function() { 
var G__76143__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__76143 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__76144__i = 0, G__76144__a = new Array(arguments.length -  0);
while (G__76144__i < G__76144__a.length) {G__76144__a[G__76144__i] = arguments[G__76144__i + 0]; ++G__76144__i;}
  _ = new cljs.core.IndexedSeq(G__76144__a,0,null);
} 
return G__76143__delegate.call(this,_);};
G__76143.cljs$lang$maxFixedArity = 0;
G__76143.cljs$lang$applyTo = (function (arglist__76145){
var _ = cljs.core.seq(arglist__76145);
return G__76143__delegate(_);
});
G__76143.cljs$core$IFn$_invoke$arity$variadic = G__76143__delegate;
return G__76143;
})()
,(function() { 
var G__76146__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__76146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76147__i = 0, G__76147__a = new Array(arguments.length -  0);
while (G__76147__i < G__76147__a.length) {G__76147__a[G__76147__i] = arguments[G__76147__i + 0]; ++G__76147__i;}
  args = new cljs.core.IndexedSeq(G__76147__a,0,null);
} 
return G__76146__delegate.call(this,args);};
G__76146.cljs$lang$maxFixedArity = 0;
G__76146.cljs$lang$applyTo = (function (arglist__76148){
var args = cljs.core.seq(arglist__76148);
return G__76146__delegate(args);
});
G__76146.cljs$core$IFn$_invoke$arity$variadic = G__76146__delegate;
return G__76146;
})()
,(function() { 
var G__76149__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__76149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76150__i = 0, G__76150__a = new Array(arguments.length -  0);
while (G__76150__i < G__76150__a.length) {G__76150__a[G__76150__i] = arguments[G__76150__i + 0]; ++G__76150__i;}
  args = new cljs.core.IndexedSeq(G__76150__a,0,null);
} 
return G__76149__delegate.call(this,args);};
G__76149.cljs$lang$maxFixedArity = 0;
G__76149.cljs$lang$applyTo = (function (arglist__76151){
var args = cljs.core.seq(arglist__76151);
return G__76149__delegate(args);
});
G__76149.cljs$core$IFn$_invoke$arity$variadic = G__76149__delegate;
return G__76149;
})()
,(function() { 
var G__76152__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__76152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76153__i = 0, G__76153__a = new Array(arguments.length -  0);
while (G__76153__i < G__76153__a.length) {G__76153__a[G__76153__i] = arguments[G__76153__i + 0]; ++G__76153__i;}
  args = new cljs.core.IndexedSeq(G__76153__a,0,null);
} 
return G__76152__delegate.call(this,args);};
G__76152.cljs$lang$maxFixedArity = 0;
G__76152.cljs$lang$applyTo = (function (arglist__76154){
var args = cljs.core.seq(arglist__76154);
return G__76152__delegate(args);
});
G__76152.cljs$core$IFn$_invoke$arity$variadic = G__76152__delegate;
return G__76152;
})()
,(function() { 
var G__76155__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__76155 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__76156__i = 0, G__76156__a = new Array(arguments.length -  0);
while (G__76156__i < G__76156__a.length) {G__76156__a[G__76156__i] = arguments[G__76156__i + 0]; ++G__76156__i;}
  _ = new cljs.core.IndexedSeq(G__76156__a,0,null);
} 
return G__76155__delegate.call(this,_);};
G__76155.cljs$lang$maxFixedArity = 0;
G__76155.cljs$lang$applyTo = (function (arglist__76157){
var _ = cljs.core.seq(arglist__76157);
return G__76155__delegate(_);
});
G__76155.cljs$core$IFn$_invoke$arity$variadic = G__76155__delegate;
return G__76155;
})()
,(function() { 
var G__76158__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__76158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76159__i = 0, G__76159__a = new Array(arguments.length -  0);
while (G__76159__i < G__76159__a.length) {G__76159__a[G__76159__i] = arguments[G__76159__i + 0]; ++G__76159__i;}
  args = new cljs.core.IndexedSeq(G__76159__a,0,null);
} 
return G__76158__delegate.call(this,args);};
G__76158.cljs$lang$maxFixedArity = 0;
G__76158.cljs$lang$applyTo = (function (arglist__76160){
var args = cljs.core.seq(arglist__76160);
return G__76158__delegate(args);
});
G__76158.cljs$core$IFn$_invoke$arity$variadic = G__76158__delegate;
return G__76158;
})()
,(function() { 
var G__76161__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__76161 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__76162__i = 0, G__76162__a = new Array(arguments.length -  0);
while (G__76162__i < G__76162__a.length) {G__76162__a[G__76162__i] = arguments[G__76162__i + 0]; ++G__76162__i;}
  _ = new cljs.core.IndexedSeq(G__76162__a,0,null);
} 
return G__76161__delegate.call(this,_);};
G__76161.cljs$lang$maxFixedArity = 0;
G__76161.cljs$lang$applyTo = (function (arglist__76163){
var _ = cljs.core.seq(arglist__76163);
return G__76161__delegate(_);
});
G__76161.cljs$core$IFn$_invoke$arity$variadic = G__76161__delegate;
return G__76161;
})()
,(function() { 
var G__76164__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__76164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76165__i = 0, G__76165__a = new Array(arguments.length -  0);
while (G__76165__i < G__76165__a.length) {G__76165__a[G__76165__i] = arguments[G__76165__i + 0]; ++G__76165__i;}
  args = new cljs.core.IndexedSeq(G__76165__a,0,null);
} 
return G__76164__delegate.call(this,args);};
G__76164.cljs$lang$maxFixedArity = 0;
G__76164.cljs$lang$applyTo = (function (arglist__76166){
var args = cljs.core.seq(arglist__76166);
return G__76164__delegate(args);
});
G__76164.cljs$core$IFn$_invoke$arity$variadic = G__76164__delegate;
return G__76164;
})()
,(function() { 
var G__76167__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__76167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76168__i = 0, G__76168__a = new Array(arguments.length -  0);
while (G__76168__i < G__76168__a.length) {G__76168__a[G__76168__i] = arguments[G__76168__i + 0]; ++G__76168__i;}
  args = new cljs.core.IndexedSeq(G__76168__a,0,null);
} 
return G__76167__delegate.call(this,args);};
G__76167.cljs$lang$maxFixedArity = 0;
G__76167.cljs$lang$applyTo = (function (arglist__76169){
var args = cljs.core.seq(arglist__76169);
return G__76167__delegate(args);
});
G__76167.cljs$core$IFn$_invoke$arity$variadic = G__76167__delegate;
return G__76167;
})()
,(function() { 
var G__76170__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__76170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76171__i = 0, G__76171__a = new Array(arguments.length -  0);
while (G__76171__i < G__76171__a.length) {G__76171__a[G__76171__i] = arguments[G__76171__i + 0]; ++G__76171__i;}
  args = new cljs.core.IndexedSeq(G__76171__a,0,null);
} 
return G__76170__delegate.call(this,args);};
G__76170.cljs$lang$maxFixedArity = 0;
G__76170.cljs$lang$applyTo = (function (arglist__76172){
var args = cljs.core.seq(arglist__76172);
return G__76170__delegate(args);
});
G__76170.cljs$core$IFn$_invoke$arity$variadic = G__76170__delegate;
return G__76170;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__76173__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__76173 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__76174__i = 0, G__76174__a = new Array(arguments.length -  0);
while (G__76174__i < G__76174__a.length) {G__76174__a[G__76174__i] = arguments[G__76174__i + 0]; ++G__76174__i;}
  _ = new cljs.core.IndexedSeq(G__76174__a,0,null);
} 
return G__76173__delegate.call(this,_);};
G__76173.cljs$lang$maxFixedArity = 0;
G__76173.cljs$lang$applyTo = (function (arglist__76175){
var _ = cljs.core.seq(arglist__76175);
return G__76173__delegate(_);
});
G__76173.cljs$core$IFn$_invoke$arity$variadic = G__76173__delegate;
return G__76173;
})()
,(function() { 
var G__76176__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__76176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76177__i = 0, G__76177__a = new Array(arguments.length -  0);
while (G__76177__i < G__76177__a.length) {G__76177__a[G__76177__i] = arguments[G__76177__i + 0]; ++G__76177__i;}
  args = new cljs.core.IndexedSeq(G__76177__a,0,null);
} 
return G__76176__delegate.call(this,args);};
G__76176.cljs$lang$maxFixedArity = 0;
G__76176.cljs$lang$applyTo = (function (arglist__76178){
var args = cljs.core.seq(arglist__76178);
return G__76176__delegate(args);
});
G__76176.cljs$core$IFn$_invoke$arity$variadic = G__76176__delegate;
return G__76176;
})()
,(function() { 
var G__76179__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__76179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76180__i = 0, G__76180__a = new Array(arguments.length -  0);
while (G__76180__i < G__76180__a.length) {G__76180__a[G__76180__i] = arguments[G__76180__i + 0]; ++G__76180__i;}
  args = new cljs.core.IndexedSeq(G__76180__a,0,null);
} 
return G__76179__delegate.call(this,args);};
G__76179.cljs$lang$maxFixedArity = 0;
G__76179.cljs$lang$applyTo = (function (arglist__76181){
var args = cljs.core.seq(arglist__76181);
return G__76179__delegate(args);
});
G__76179.cljs$core$IFn$_invoke$arity$variadic = G__76179__delegate;
return G__76179;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771),layers);

return placesurfer.web_app.draw_layers.sync_reference_images_BANG_();
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
var layer = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__76126_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__76126_SHARP_),layer_id);
}),new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state))));
if(cljs.core.truth_((function (){var and__5023__auto__ = layer_id;
if(cljs.core.truth_(and__5023__auto__)){
return (!(placesurfer.web_app.draw_layers.image_layer_QMARK_(layer)));
} else {
return and__5023__auto__;
}
})())){
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

placesurfer.map_ui.interface$.set_draw_on_map_ready_BANG_((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))){
return placesurfer.web_app.draw_layers.enter_draw_page_BANG_();
} else {
return null;
}
}));

placesurfer.map_ui.interface$.set_reference_image_on_paste_BANG_(placesurfer.web_app.draw_layers.add_image_layer_BANG_);

return placesurfer.map_ui.interface$.set_reference_image_on_change_BANG_(placesurfer.web_app.draw_layers.image_bounds_changed_BANG_);
});
placesurfer.web_app.init.init_BANG_ = (function placesurfer$web_app$init$init_BANG_(){
placesurfer.web_app.init.wire_effects_BANG_();

placesurfer.web_app.init.wire_draw_save_BANG_();

var temp__5825__auto___76182 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5825__auto___76182)){
var v_76183 = temp__5825__auto___76182;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_76183);
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

var temp__5825__auto___76184__$1 = link.getAttribute("href");
if(cljs.core.truth_(temp__5825__auto___76184__$1)){
var href_76185 = temp__5825__auto___76184__$1;
var temp__5825__auto___76186__$2 = cljs.core.re_find(/(#.+)$/,href_76185);
if(cljs.core.truth_(temp__5825__auto___76186__$2)){
var vec__76127_76187 = temp__5825__auto___76186__$2;
var __76188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76127_76187,(0),null);
var hash_76189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76127_76187,(1),null);
(location.hash = hash_76189);
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
}catch (e76130){var __76190 = e76130;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
