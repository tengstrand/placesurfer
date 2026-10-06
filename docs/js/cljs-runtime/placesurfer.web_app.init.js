goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__22816__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__22816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22817__i = 0, G__22817__a = new Array(arguments.length -  0);
while (G__22817__i < G__22817__a.length) {G__22817__a[G__22817__i] = arguments[G__22817__i + 0]; ++G__22817__i;}
  args = new cljs.core.IndexedSeq(G__22817__a,0,null);
} 
return G__22816__delegate.call(this,args);};
G__22816.cljs$lang$maxFixedArity = 0;
G__22816.cljs$lang$applyTo = (function (arglist__22818){
var args = cljs.core.seq(arglist__22818);
return G__22816__delegate(args);
});
G__22816.cljs$core$IFn$_invoke$arity$variadic = G__22816__delegate;
return G__22816;
})()
,(function() { 
var G__22819__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__22819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22820__i = 0, G__22820__a = new Array(arguments.length -  0);
while (G__22820__i < G__22820__a.length) {G__22820__a[G__22820__i] = arguments[G__22820__i + 0]; ++G__22820__i;}
  args = new cljs.core.IndexedSeq(G__22820__a,0,null);
} 
return G__22819__delegate.call(this,args);};
G__22819.cljs$lang$maxFixedArity = 0;
G__22819.cljs$lang$applyTo = (function (arglist__22821){
var args = cljs.core.seq(arglist__22821);
return G__22819__delegate(args);
});
G__22819.cljs$core$IFn$_invoke$arity$variadic = G__22819__delegate;
return G__22819;
})()
,(function() { 
var G__22822__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__22822 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__22823__i = 0, G__22823__a = new Array(arguments.length -  0);
while (G__22823__i < G__22823__a.length) {G__22823__a[G__22823__i] = arguments[G__22823__i + 0]; ++G__22823__i;}
  _ = new cljs.core.IndexedSeq(G__22823__a,0,null);
} 
return G__22822__delegate.call(this,_);};
G__22822.cljs$lang$maxFixedArity = 0;
G__22822.cljs$lang$applyTo = (function (arglist__22824){
var _ = cljs.core.seq(arglist__22824);
return G__22822__delegate(_);
});
G__22822.cljs$core$IFn$_invoke$arity$variadic = G__22822__delegate;
return G__22822;
})()
,(function() { 
var G__22825__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__22825 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__22826__i = 0, G__22826__a = new Array(arguments.length -  0);
while (G__22826__i < G__22826__a.length) {G__22826__a[G__22826__i] = arguments[G__22826__i + 0]; ++G__22826__i;}
  _ = new cljs.core.IndexedSeq(G__22826__a,0,null);
} 
return G__22825__delegate.call(this,_);};
G__22825.cljs$lang$maxFixedArity = 0;
G__22825.cljs$lang$applyTo = (function (arglist__22827){
var _ = cljs.core.seq(arglist__22827);
return G__22825__delegate(_);
});
G__22825.cljs$core$IFn$_invoke$arity$variadic = G__22825__delegate;
return G__22825;
})()
,(function() { 
var G__22828__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__22828 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__22829__i = 0, G__22829__a = new Array(arguments.length -  0);
while (G__22829__i < G__22829__a.length) {G__22829__a[G__22829__i] = arguments[G__22829__i + 0]; ++G__22829__i;}
  _ = new cljs.core.IndexedSeq(G__22829__a,0,null);
} 
return G__22828__delegate.call(this,_);};
G__22828.cljs$lang$maxFixedArity = 0;
G__22828.cljs$lang$applyTo = (function (arglist__22830){
var _ = cljs.core.seq(arglist__22830);
return G__22828__delegate(_);
});
G__22828.cljs$core$IFn$_invoke$arity$variadic = G__22828__delegate;
return G__22828;
})()
,(function() { 
var G__22831__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__22831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22832__i = 0, G__22832__a = new Array(arguments.length -  0);
while (G__22832__i < G__22832__a.length) {G__22832__a[G__22832__i] = arguments[G__22832__i + 0]; ++G__22832__i;}
  args = new cljs.core.IndexedSeq(G__22832__a,0,null);
} 
return G__22831__delegate.call(this,args);};
G__22831.cljs$lang$maxFixedArity = 0;
G__22831.cljs$lang$applyTo = (function (arglist__22833){
var args = cljs.core.seq(arglist__22833);
return G__22831__delegate(args);
});
G__22831.cljs$core$IFn$_invoke$arity$variadic = G__22831__delegate;
return G__22831;
})()
,(function() { 
var G__22834__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__22834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22835__i = 0, G__22835__a = new Array(arguments.length -  0);
while (G__22835__i < G__22835__a.length) {G__22835__a[G__22835__i] = arguments[G__22835__i + 0]; ++G__22835__i;}
  args = new cljs.core.IndexedSeq(G__22835__a,0,null);
} 
return G__22834__delegate.call(this,args);};
G__22834.cljs$lang$maxFixedArity = 0;
G__22834.cljs$lang$applyTo = (function (arglist__22836){
var args = cljs.core.seq(arglist__22836);
return G__22834__delegate(args);
});
G__22834.cljs$core$IFn$_invoke$arity$variadic = G__22834__delegate;
return G__22834;
})()
,(function() { 
var G__22837__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__22837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22838__i = 0, G__22838__a = new Array(arguments.length -  0);
while (G__22838__i < G__22838__a.length) {G__22838__a[G__22838__i] = arguments[G__22838__i + 0]; ++G__22838__i;}
  args = new cljs.core.IndexedSeq(G__22838__a,0,null);
} 
return G__22837__delegate.call(this,args);};
G__22837.cljs$lang$maxFixedArity = 0;
G__22837.cljs$lang$applyTo = (function (arglist__22839){
var args = cljs.core.seq(arglist__22839);
return G__22837__delegate(args);
});
G__22837.cljs$core$IFn$_invoke$arity$variadic = G__22837__delegate;
return G__22837;
})()
,(function() { 
var G__22840__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__22840 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__22841__i = 0, G__22841__a = new Array(arguments.length -  0);
while (G__22841__i < G__22841__a.length) {G__22841__a[G__22841__i] = arguments[G__22841__i + 0]; ++G__22841__i;}
  _ = new cljs.core.IndexedSeq(G__22841__a,0,null);
} 
return G__22840__delegate.call(this,_);};
G__22840.cljs$lang$maxFixedArity = 0;
G__22840.cljs$lang$applyTo = (function (arglist__22842){
var _ = cljs.core.seq(arglist__22842);
return G__22840__delegate(_);
});
G__22840.cljs$core$IFn$_invoke$arity$variadic = G__22840__delegate;
return G__22840;
})()
,(function() { 
var G__22843__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__22843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22844__i = 0, G__22844__a = new Array(arguments.length -  0);
while (G__22844__i < G__22844__a.length) {G__22844__a[G__22844__i] = arguments[G__22844__i + 0]; ++G__22844__i;}
  args = new cljs.core.IndexedSeq(G__22844__a,0,null);
} 
return G__22843__delegate.call(this,args);};
G__22843.cljs$lang$maxFixedArity = 0;
G__22843.cljs$lang$applyTo = (function (arglist__22845){
var args = cljs.core.seq(arglist__22845);
return G__22843__delegate(args);
});
G__22843.cljs$core$IFn$_invoke$arity$variadic = G__22843__delegate;
return G__22843;
})()
,(function() { 
var G__22846__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__22846 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__22847__i = 0, G__22847__a = new Array(arguments.length -  0);
while (G__22847__i < G__22847__a.length) {G__22847__a[G__22847__i] = arguments[G__22847__i + 0]; ++G__22847__i;}
  _ = new cljs.core.IndexedSeq(G__22847__a,0,null);
} 
return G__22846__delegate.call(this,_);};
G__22846.cljs$lang$maxFixedArity = 0;
G__22846.cljs$lang$applyTo = (function (arglist__22848){
var _ = cljs.core.seq(arglist__22848);
return G__22846__delegate(_);
});
G__22846.cljs$core$IFn$_invoke$arity$variadic = G__22846__delegate;
return G__22846;
})()
,(function() { 
var G__22849__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__22849 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22850__i = 0, G__22850__a = new Array(arguments.length -  0);
while (G__22850__i < G__22850__a.length) {G__22850__a[G__22850__i] = arguments[G__22850__i + 0]; ++G__22850__i;}
  args = new cljs.core.IndexedSeq(G__22850__a,0,null);
} 
return G__22849__delegate.call(this,args);};
G__22849.cljs$lang$maxFixedArity = 0;
G__22849.cljs$lang$applyTo = (function (arglist__22851){
var args = cljs.core.seq(arglist__22851);
return G__22849__delegate(args);
});
G__22849.cljs$core$IFn$_invoke$arity$variadic = G__22849__delegate;
return G__22849;
})()
,(function() { 
var G__22852__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__22852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22853__i = 0, G__22853__a = new Array(arguments.length -  0);
while (G__22853__i < G__22853__a.length) {G__22853__a[G__22853__i] = arguments[G__22853__i + 0]; ++G__22853__i;}
  args = new cljs.core.IndexedSeq(G__22853__a,0,null);
} 
return G__22852__delegate.call(this,args);};
G__22852.cljs$lang$maxFixedArity = 0;
G__22852.cljs$lang$applyTo = (function (arglist__22854){
var args = cljs.core.seq(arglist__22854);
return G__22852__delegate(args);
});
G__22852.cljs$core$IFn$_invoke$arity$variadic = G__22852__delegate;
return G__22852;
})()
,(function() { 
var G__22855__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__22855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22856__i = 0, G__22856__a = new Array(arguments.length -  0);
while (G__22856__i < G__22856__a.length) {G__22856__a[G__22856__i] = arguments[G__22856__i + 0]; ++G__22856__i;}
  args = new cljs.core.IndexedSeq(G__22856__a,0,null);
} 
return G__22855__delegate.call(this,args);};
G__22855.cljs$lang$maxFixedArity = 0;
G__22855.cljs$lang$applyTo = (function (arglist__22857){
var args = cljs.core.seq(arglist__22857);
return G__22855__delegate(args);
});
G__22855.cljs$core$IFn$_invoke$arity$variadic = G__22855__delegate;
return G__22855;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__22858__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__22858 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__22859__i = 0, G__22859__a = new Array(arguments.length -  0);
while (G__22859__i < G__22859__a.length) {G__22859__a[G__22859__i] = arguments[G__22859__i + 0]; ++G__22859__i;}
  _ = new cljs.core.IndexedSeq(G__22859__a,0,null);
} 
return G__22858__delegate.call(this,_);};
G__22858.cljs$lang$maxFixedArity = 0;
G__22858.cljs$lang$applyTo = (function (arglist__22860){
var _ = cljs.core.seq(arglist__22860);
return G__22858__delegate(_);
});
G__22858.cljs$core$IFn$_invoke$arity$variadic = G__22858__delegate;
return G__22858;
})()
,(function() { 
var G__22861__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__22861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22862__i = 0, G__22862__a = new Array(arguments.length -  0);
while (G__22862__i < G__22862__a.length) {G__22862__a[G__22862__i] = arguments[G__22862__i + 0]; ++G__22862__i;}
  args = new cljs.core.IndexedSeq(G__22862__a,0,null);
} 
return G__22861__delegate.call(this,args);};
G__22861.cljs$lang$maxFixedArity = 0;
G__22861.cljs$lang$applyTo = (function (arglist__22863){
var args = cljs.core.seq(arglist__22863);
return G__22861__delegate(args);
});
G__22861.cljs$core$IFn$_invoke$arity$variadic = G__22861__delegate;
return G__22861;
})()
,(function() { 
var G__22864__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__22864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22865__i = 0, G__22865__a = new Array(arguments.length -  0);
while (G__22865__i < G__22865__a.length) {G__22865__a[G__22865__i] = arguments[G__22865__i + 0]; ++G__22865__i;}
  args = new cljs.core.IndexedSeq(G__22865__a,0,null);
} 
return G__22864__delegate.call(this,args);};
G__22864.cljs$lang$maxFixedArity = 0;
G__22864.cljs$lang$applyTo = (function (arglist__22866){
var args = cljs.core.seq(arglist__22866);
return G__22864__delegate(args);
});
G__22864.cljs$core$IFn$_invoke$arity$variadic = G__22864__delegate;
return G__22864;
})()
]));
});
placesurfer.web_app.init.read_app_version = (function placesurfer$web_app$init$read_app_version(){
var temp__5823__auto__ = document.querySelector("meta[name=app-version]");
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
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
var layer = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22811_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22811_SHARP_),layer_id);
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
/**
 * Trash icon in a map popup, for both saved pins and search-result markers -
 * routes to the same soft-delete (search results) / remove (pin) logic the
 * list's own trash icon per row already uses. Only :pin gets the saved-pin
 * path; every other deletable topic is a search-result marker (Hemnet,
 * Booli, Notar, ...) and routes to discard-result!, which is itself keyed
 * off :id against :search-results - so this stays correct automatically as
 * new sources are added (see map-ui.popup/deletable-marker-topics for which
 * topics even render a trash icon).
 */
placesurfer.web_app.init.handle_marker_delete_BANG_ = (function placesurfer$web_app$init$handle_marker_delete_BANG_(position){
var temp__5823__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154).cljs$core$IFn$_invoke$arity$1(position))){
return placesurfer.pin_ui.interface$.handlers.rows.delete_pin_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
return placesurfer.pin_ui.interface$.handlers.hemnet_search.discard_result_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}
} else {
return null;
}
});
/**
 * Pencil icon in a map popup - only ever rendered for :pin markers (see
 * popup.cljs's editable-marker-topics), so no further dispatch needed here.
 */
placesurfer.web_app.init.handle_marker_edit_BANG_ = (function placesurfer$web_app$init$handle_marker_edit_BANG_(position){
var temp__5823__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return placesurfer.web_app.nav.open_pin_in_editor_BANG_(id);
} else {
return null;
}
});
placesurfer.web_app.init.init_BANG_ = (function placesurfer$web_app$init$init_BANG_(){
placesurfer.web_app.init.wire_effects_BANG_();

placesurfer.web_app.init.wire_draw_save_BANG_();

placesurfer.map_ui.interface$.set_on_marker_click_handler_BANG_(placesurfer.pin_ui.interface$.handlers.hemnet_search.handle_marker_click_BANG_);

placesurfer.map_ui.interface$.set_on_marker_delete_handler_BANG_(placesurfer.web_app.init.handle_marker_delete_BANG_);

placesurfer.map_ui.interface$.set_on_marker_edit_handler_BANG_(placesurfer.web_app.init.handle_marker_edit_BANG_);

placesurfer.web_app.dropbox.init_BANG_();

var temp__5823__auto___22867 = placesurfer.web_app.init.read_app_version();
if(cljs.core.truth_(temp__5823__auto___22867)){
var v_22868 = temp__5823__auto___22867;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-version","app-version",361554836),v_22868);
} else {
}

placesurfer.web_app.locale.init_locale_BANG_();

placesurfer.web_app.transit.init_transit_destination_BANG_();

placesurfer.map_ui.interface$.set_draw_t_BANG_(placesurfer.web_app.locale.make_t(cljs.core.deref(placesurfer.web_app.state._BANG_state)));

placesurfer.web_app.init.load_layers_config_BANG_();

placesurfer.pin_ui.interface$.handlers.form.load_pin_icons_BANG_();

placesurfer.pin_ui.interface$.handlers.form.load_pins_from_storage_BANG_();

placesurfer.web_app.render.render_BANG_();

placesurfer.map_panel_ui.interface$.layout.sync_layout_BANG_();

placesurfer.map_panel_ui.interface$.layout.observe_nav_BANG_(placesurfer.web_app.map_sync.schedule_map_resize_BANG_);

placesurfer.web_app.dropbox.sync_state_BANG_();

placesurfer.app_ui.interface$.load.init_load_BANG_().then((function (_){
placesurfer.web_app.dropbox.sync_state_BANG_();

return placesurfer.pin_ui.interface$.handlers.form.load_pins_from_storage_BANG_();
})).catch((function (_){
placesurfer.web_app.dropbox.sync_state_BANG_();

return placesurfer.pin_ui.interface$.handlers.form.load_pins_from_storage_BANG_();
}));

document.addEventListener("keydown",placesurfer.web_app.keyboard.on_document_keydown_BANG_);

document.addEventListener("paste",placesurfer.web_app.clipboard.on_document_paste_BANG_);

document.addEventListener("click",(function (e){
var temp__5823__auto__ = e.target.closest(".map-popup-source-link");
if(cljs.core.truth_(temp__5823__auto__)){
var link = temp__5823__auto__;
e.preventDefault();

var temp__5823__auto___22869__$1 = link.getAttribute("href");
if(cljs.core.truth_(temp__5823__auto___22869__$1)){
var href_22870 = temp__5823__auto___22869__$1;
var temp__5823__auto___22871__$2 = cljs.core.re_find(/(#.+)$/,href_22870);
if(cljs.core.truth_(temp__5823__auto___22871__$2)){
var vec__22812_22872 = temp__5823__auto___22871__$2;
var __22873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22812_22872,(0),null);
var hash_22874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22812_22872,(1),null);
(location.hash = hash_22874);
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
}catch (e22815){var __22875 = e22815;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
