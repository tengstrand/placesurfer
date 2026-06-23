goog.provide('hitteri.web_app.init');
hitteri.web_app.init.wire_effects_BANG_ = (function hitteri$web_app$init$wire_effects_BANG_(){
return hitteri.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__48828__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.web_app.map_sync.sync_map_BANG_,args);
};
var G__48828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48829__i = 0, G__48829__a = new Array(arguments.length -  0);
while (G__48829__i < G__48829__a.length) {G__48829__a[G__48829__i] = arguments[G__48829__i + 0]; ++G__48829__i;}
  args = new cljs.core.IndexedSeq(G__48829__a,0,null);
} 
return G__48828__delegate.call(this,args);};
G__48828.cljs$lang$maxFixedArity = 0;
G__48828.cljs$lang$applyTo = (function (arglist__48830){
var args = cljs.core.seq(arglist__48830);
return G__48828__delegate(args);
});
G__48828.cljs$core$IFn$_invoke$arity$variadic = G__48828__delegate;
return G__48828;
})()
,(function() { 
var G__48831__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__48831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48832__i = 0, G__48832__a = new Array(arguments.length -  0);
while (G__48832__i < G__48832__a.length) {G__48832__a[G__48832__i] = arguments[G__48832__i + 0]; ++G__48832__i;}
  args = new cljs.core.IndexedSeq(G__48832__a,0,null);
} 
return G__48831__delegate.call(this,args);};
G__48831.cljs$lang$maxFixedArity = 0;
G__48831.cljs$lang$applyTo = (function (arglist__48833){
var args = cljs.core.seq(arglist__48833);
return G__48831__delegate(args);
});
G__48831.cljs$core$IFn$_invoke$arity$variadic = G__48831__delegate;
return G__48831;
})()
,(function() { 
var G__48834__delegate = function (_){
return hitteri.web_app.render.render_BANG_();
};
var G__48834 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__48835__i = 0, G__48835__a = new Array(arguments.length -  0);
while (G__48835__i < G__48835__a.length) {G__48835__a[G__48835__i] = arguments[G__48835__i + 0]; ++G__48835__i;}
  _ = new cljs.core.IndexedSeq(G__48835__a,0,null);
} 
return G__48834__delegate.call(this,_);};
G__48834.cljs$lang$maxFixedArity = 0;
G__48834.cljs$lang$applyTo = (function (arglist__48836){
var _ = cljs.core.seq(arglist__48836);
return G__48834__delegate(_);
});
G__48834.cljs$core$IFn$_invoke$arity$variadic = G__48834__delegate;
return G__48834;
})()
,(function() { 
var G__48837__delegate = function (_){
return hitteri.web_app.nav.navigate_to_pin_BANG_();
};
var G__48837 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__48838__i = 0, G__48838__a = new Array(arguments.length -  0);
while (G__48838__i < G__48838__a.length) {G__48838__a[G__48838__i] = arguments[G__48838__i + 0]; ++G__48838__i;}
  _ = new cljs.core.IndexedSeq(G__48838__a,0,null);
} 
return G__48837__delegate.call(this,_);};
G__48837.cljs$lang$maxFixedArity = 0;
G__48837.cljs$lang$applyTo = (function (arglist__48839){
var _ = cljs.core.seq(arglist__48839);
return G__48837__delegate(_);
});
G__48837.cljs$core$IFn$_invoke$arity$variadic = G__48837__delegate;
return G__48837;
})()
,(function() { 
var G__48840__delegate = function (_){
return hitteri.web_app.nav.navigate_to_update_BANG_();
};
var G__48840 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__48841__i = 0, G__48841__a = new Array(arguments.length -  0);
while (G__48841__i < G__48841__a.length) {G__48841__a[G__48841__i] = arguments[G__48841__i + 0]; ++G__48841__i;}
  _ = new cljs.core.IndexedSeq(G__48841__a,0,null);
} 
return G__48840__delegate.call(this,_);};
G__48840.cljs$lang$maxFixedArity = 0;
G__48840.cljs$lang$applyTo = (function (arglist__48842){
var _ = cljs.core.seq(arglist__48842);
return G__48840__delegate(_);
});
G__48840.cljs$core$IFn$_invoke$arity$variadic = G__48840__delegate;
return G__48840;
})()
,(function() { 
var G__48843__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.web_app.nav.select_country_BANG_,args);
};
var G__48843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48844__i = 0, G__48844__a = new Array(arguments.length -  0);
while (G__48844__i < G__48844__a.length) {G__48844__a[G__48844__i] = arguments[G__48844__i + 0]; ++G__48844__i;}
  args = new cljs.core.IndexedSeq(G__48844__a,0,null);
} 
return G__48843__delegate.call(this,args);};
G__48843.cljs$lang$maxFixedArity = 0;
G__48843.cljs$lang$applyTo = (function (arglist__48845){
var args = cljs.core.seq(arglist__48845);
return G__48843__delegate(args);
});
G__48843.cljs$core$IFn$_invoke$arity$variadic = G__48843__delegate;
return G__48843;
})()
,(function() { 
var G__48846__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__48846 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48847__i = 0, G__48847__a = new Array(arguments.length -  0);
while (G__48847__i < G__48847__a.length) {G__48847__a[G__48847__i] = arguments[G__48847__i + 0]; ++G__48847__i;}
  args = new cljs.core.IndexedSeq(G__48847__a,0,null);
} 
return G__48846__delegate.call(this,args);};
G__48846.cljs$lang$maxFixedArity = 0;
G__48846.cljs$lang$applyTo = (function (arglist__48848){
var args = cljs.core.seq(arglist__48848);
return G__48846__delegate(args);
});
G__48846.cljs$core$IFn$_invoke$arity$variadic = G__48846__delegate;
return G__48846;
})()
,(function() { 
var G__48849__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.web_app.nav.navigate_BANG_,args);
};
var G__48849 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48850__i = 0, G__48850__a = new Array(arguments.length -  0);
while (G__48850__i < G__48850__a.length) {G__48850__a[G__48850__i] = arguments[G__48850__i + 0]; ++G__48850__i;}
  args = new cljs.core.IndexedSeq(G__48850__a,0,null);
} 
return G__48849__delegate.call(this,args);};
G__48849.cljs$lang$maxFixedArity = 0;
G__48849.cljs$lang$applyTo = (function (arglist__48851){
var args = cljs.core.seq(arglist__48851);
return G__48849__delegate(args);
});
G__48849.cljs$core$IFn$_invoke$arity$variadic = G__48849__delegate;
return G__48849;
})()
,(function() { 
var G__48852__delegate = function (_){
return hitteri.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__48852 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__48853__i = 0, G__48853__a = new Array(arguments.length -  0);
while (G__48853__i < G__48853__a.length) {G__48853__a[G__48853__i] = arguments[G__48853__i + 0]; ++G__48853__i;}
  _ = new cljs.core.IndexedSeq(G__48853__a,0,null);
} 
return G__48852__delegate.call(this,_);};
G__48852.cljs$lang$maxFixedArity = 0;
G__48852.cljs$lang$applyTo = (function (arglist__48854){
var _ = cljs.core.seq(arglist__48854);
return G__48852__delegate(_);
});
G__48852.cljs$core$IFn$_invoke$arity$variadic = G__48852__delegate;
return G__48852;
})()
,(function() { 
var G__48855__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__48855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48856__i = 0, G__48856__a = new Array(arguments.length -  0);
while (G__48856__i < G__48856__a.length) {G__48856__a[G__48856__i] = arguments[G__48856__i + 0]; ++G__48856__i;}
  args = new cljs.core.IndexedSeq(G__48856__a,0,null);
} 
return G__48855__delegate.call(this,args);};
G__48855.cljs$lang$maxFixedArity = 0;
G__48855.cljs$lang$applyTo = (function (arglist__48857){
var args = cljs.core.seq(arglist__48857);
return G__48855__delegate(args);
});
G__48855.cljs$core$IFn$_invoke$arity$variadic = G__48855__delegate;
return G__48855;
})()
,(function() { 
var G__48858__delegate = function (_){
return hitteri.web_app.backend.check_backend_BANG_();
};
var G__48858 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__48859__i = 0, G__48859__a = new Array(arguments.length -  0);
while (G__48859__i < G__48859__a.length) {G__48859__a[G__48859__i] = arguments[G__48859__i + 0]; ++G__48859__i;}
  _ = new cljs.core.IndexedSeq(G__48859__a,0,null);
} 
return G__48858__delegate.call(this,_);};
G__48858.cljs$lang$maxFixedArity = 0;
G__48858.cljs$lang$applyTo = (function (arglist__48860){
var _ = cljs.core.seq(arglist__48860);
return G__48858__delegate(_);
});
G__48858.cljs$core$IFn$_invoke$arity$variadic = G__48858__delegate;
return G__48858;
})()
,(function() { 
var G__48861__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.web_app.analytics.track_page_BANG_,args);
};
var G__48861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48862__i = 0, G__48862__a = new Array(arguments.length -  0);
while (G__48862__i < G__48862__a.length) {G__48862__a[G__48862__i] = arguments[G__48862__i + 0]; ++G__48862__i;}
  args = new cljs.core.IndexedSeq(G__48862__a,0,null);
} 
return G__48861__delegate.call(this,args);};
G__48861.cljs$lang$maxFixedArity = 0;
G__48861.cljs$lang$applyTo = (function (arglist__48863){
var args = cljs.core.seq(arglist__48863);
return G__48861__delegate(args);
});
G__48861.cljs$core$IFn$_invoke$arity$variadic = G__48861__delegate;
return G__48861;
})()
,(function() { 
var G__48864__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__48864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48865__i = 0, G__48865__a = new Array(arguments.length -  0);
while (G__48865__i < G__48865__a.length) {G__48865__a[G__48865__i] = arguments[G__48865__i + 0]; ++G__48865__i;}
  args = new cljs.core.IndexedSeq(G__48865__a,0,null);
} 
return G__48864__delegate.call(this,args);};
G__48864.cljs$lang$maxFixedArity = 0;
G__48864.cljs$lang$applyTo = (function (arglist__48866){
var args = cljs.core.seq(arglist__48866);
return G__48864__delegate(args);
});
G__48864.cljs$core$IFn$_invoke$arity$variadic = G__48864__delegate;
return G__48864;
})()
,(function() { 
var G__48867__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__48867 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48868__i = 0, G__48868__a = new Array(arguments.length -  0);
while (G__48868__i < G__48868__a.length) {G__48868__a[G__48868__i] = arguments[G__48868__i + 0]; ++G__48868__i;}
  args = new cljs.core.IndexedSeq(G__48868__a,0,null);
} 
return G__48867__delegate.call(this,args);};
G__48867.cljs$lang$maxFixedArity = 0;
G__48867.cljs$lang$applyTo = (function (arglist__48869){
var args = cljs.core.seq(arglist__48869);
return G__48867__delegate(args);
});
G__48867.cljs$core$IFn$_invoke$arity$variadic = G__48867__delegate;
return G__48867;
})()
,(function (topic){
return hitteri.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__48870__delegate = function (_){
return hitteri.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__48870 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__48871__i = 0, G__48871__a = new Array(arguments.length -  0);
while (G__48871__i < G__48871__a.length) {G__48871__a[G__48871__i] = arguments[G__48871__i + 0]; ++G__48871__i;}
  _ = new cljs.core.IndexedSeq(G__48871__a,0,null);
} 
return G__48870__delegate.call(this,_);};
G__48870.cljs$lang$maxFixedArity = 0;
G__48870.cljs$lang$applyTo = (function (arglist__48872){
var _ = cljs.core.seq(arglist__48872);
return G__48870__delegate(_);
});
G__48870.cljs$core$IFn$_invoke$arity$variadic = G__48870__delegate;
return G__48870;
})()
,(function() { 
var G__48873__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__48873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48874__i = 0, G__48874__a = new Array(arguments.length -  0);
while (G__48874__i < G__48874__a.length) {G__48874__a[G__48874__i] = arguments[G__48874__i + 0]; ++G__48874__i;}
  args = new cljs.core.IndexedSeq(G__48874__a,0,null);
} 
return G__48873__delegate.call(this,args);};
G__48873.cljs$lang$maxFixedArity = 0;
G__48873.cljs$lang$applyTo = (function (arglist__48875){
var args = cljs.core.seq(arglist__48875);
return G__48873__delegate(args);
});
G__48873.cljs$core$IFn$_invoke$arity$variadic = G__48873__delegate;
return G__48873;
})()
,(function() { 
var G__48876__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__48876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48877__i = 0, G__48877__a = new Array(arguments.length -  0);
while (G__48877__i < G__48877__a.length) {G__48877__a[G__48877__i] = arguments[G__48877__i + 0]; ++G__48877__i;}
  args = new cljs.core.IndexedSeq(G__48877__a,0,null);
} 
return G__48876__delegate.call(this,args);};
G__48876.cljs$lang$maxFixedArity = 0;
G__48876.cljs$lang$applyTo = (function (arglist__48878){
var args = cljs.core.seq(arglist__48878);
return G__48876__delegate(args);
});
G__48876.cljs$core$IFn$_invoke$arity$variadic = G__48876__delegate;
return G__48876;
})()
]));
});
hitteri.web_app.init.init_BANG_ = (function hitteri$web_app$init$init_BANG_(){
hitteri.web_app.init.wire_effects_BANG_();

hitteri.web_app.locale.init_locale_BANG_();

hitteri.pin_ui.interface$.handlers.form.load_pin_icons_BANG_();

hitteri.pin_ui.interface$.handlers.form.load_pins_from_storage_BANG_();

hitteri.web_app.render.render_BANG_();

hitteri.map_panel_ui.interface$.layout.sync_layout_BANG_();

hitteri.app_ui.interface$.load.init_load_BANG_();

document.addEventListener("keydown",hitteri.web_app.keyboard.on_document_keydown_BANG_);

document.addEventListener("paste",hitteri.web_app.clipboard.on_document_paste_BANG_);

window.addEventListener("resize",(function (){
return hitteri.web_app.map_sync.schedule_map_resize_BANG_();
}));

try{hitteri.web_app.nav.track_page_BANG_(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.web_app.state._BANG_state)));
}catch (e48827){var __48879 = e48827;
}
hitteri.web_app.backend.check_backend_BANG_();

return setInterval(hitteri.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=hitteri.web_app.init.js.map
