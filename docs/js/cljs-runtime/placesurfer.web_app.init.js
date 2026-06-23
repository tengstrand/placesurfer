goog.provide('placesurfer.web_app.init');
placesurfer.web_app.init.wire_effects_BANG_ = (function placesurfer$web_app$init$wire_effects_BANG_(){
return placesurfer.web_app.effects.wire_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),new cljs.core.Keyword(null,"render!","render!",-1848688504),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251),new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139),new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759)],[(function() { 
var G__43631__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.map_sync.sync_map_BANG_,args);
};
var G__43631 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43632__i = 0, G__43632__a = new Array(arguments.length -  0);
while (G__43632__i < G__43632__a.length) {G__43632__a[G__43632__i] = arguments[G__43632__i + 0]; ++G__43632__i;}
  args = new cljs.core.IndexedSeq(G__43632__a,0,null);
} 
return G__43631__delegate.call(this,args);};
G__43631.cljs$lang$maxFixedArity = 0;
G__43631.cljs$lang$applyTo = (function (arglist__43633){
var args = cljs.core.seq(arglist__43633);
return G__43631__delegate(args);
});
G__43631.cljs$core$IFn$_invoke$arity$variadic = G__43631__delegate;
return G__43631;
})()
,(function() { 
var G__43634__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.sync_update_map_BANG_,args);
};
var G__43634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43635__i = 0, G__43635__a = new Array(arguments.length -  0);
while (G__43635__i < G__43635__a.length) {G__43635__a[G__43635__i] = arguments[G__43635__i + 0]; ++G__43635__i;}
  args = new cljs.core.IndexedSeq(G__43635__a,0,null);
} 
return G__43634__delegate.call(this,args);};
G__43634.cljs$lang$maxFixedArity = 0;
G__43634.cljs$lang$applyTo = (function (arglist__43636){
var args = cljs.core.seq(arglist__43636);
return G__43634__delegate(args);
});
G__43634.cljs$core$IFn$_invoke$arity$variadic = G__43634__delegate;
return G__43634;
})()
,(function() { 
var G__43637__delegate = function (_){
return placesurfer.web_app.render.render_BANG_();
};
var G__43637 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43638__i = 0, G__43638__a = new Array(arguments.length -  0);
while (G__43638__i < G__43638__a.length) {G__43638__a[G__43638__i] = arguments[G__43638__i + 0]; ++G__43638__i;}
  _ = new cljs.core.IndexedSeq(G__43638__a,0,null);
} 
return G__43637__delegate.call(this,_);};
G__43637.cljs$lang$maxFixedArity = 0;
G__43637.cljs$lang$applyTo = (function (arglist__43639){
var _ = cljs.core.seq(arglist__43639);
return G__43637__delegate(_);
});
G__43637.cljs$core$IFn$_invoke$arity$variadic = G__43637__delegate;
return G__43637;
})()
,(function() { 
var G__43640__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_pin_BANG_();
};
var G__43640 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43641__i = 0, G__43641__a = new Array(arguments.length -  0);
while (G__43641__i < G__43641__a.length) {G__43641__a[G__43641__i] = arguments[G__43641__i + 0]; ++G__43641__i;}
  _ = new cljs.core.IndexedSeq(G__43641__a,0,null);
} 
return G__43640__delegate.call(this,_);};
G__43640.cljs$lang$maxFixedArity = 0;
G__43640.cljs$lang$applyTo = (function (arglist__43642){
var _ = cljs.core.seq(arglist__43642);
return G__43640__delegate(_);
});
G__43640.cljs$core$IFn$_invoke$arity$variadic = G__43640__delegate;
return G__43640;
})()
,(function() { 
var G__43643__delegate = function (_){
return placesurfer.web_app.nav.navigate_to_update_BANG_();
};
var G__43643 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43644__i = 0, G__43644__a = new Array(arguments.length -  0);
while (G__43644__i < G__43644__a.length) {G__43644__a[G__43644__i] = arguments[G__43644__i + 0]; ++G__43644__i;}
  _ = new cljs.core.IndexedSeq(G__43644__a,0,null);
} 
return G__43643__delegate.call(this,_);};
G__43643.cljs$lang$maxFixedArity = 0;
G__43643.cljs$lang$applyTo = (function (arglist__43645){
var _ = cljs.core.seq(arglist__43645);
return G__43643__delegate(_);
});
G__43643.cljs$core$IFn$_invoke$arity$variadic = G__43643__delegate;
return G__43643;
})()
,(function() { 
var G__43646__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.select_country_BANG_,args);
};
var G__43646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43647__i = 0, G__43647__a = new Array(arguments.length -  0);
while (G__43647__i < G__43647__a.length) {G__43647__a[G__43647__i] = arguments[G__43647__i + 0]; ++G__43647__i;}
  args = new cljs.core.IndexedSeq(G__43647__a,0,null);
} 
return G__43646__delegate.call(this,args);};
G__43646.cljs$lang$maxFixedArity = 0;
G__43646.cljs$lang$applyTo = (function (arglist__43648){
var args = cljs.core.seq(arglist__43648);
return G__43646__delegate(args);
});
G__43646.cljs$core$IFn$_invoke$arity$variadic = G__43646__delegate;
return G__43646;
})()
,(function() { 
var G__43649__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.set_update_topic_BANG_,args);
};
var G__43649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43650__i = 0, G__43650__a = new Array(arguments.length -  0);
while (G__43650__i < G__43650__a.length) {G__43650__a[G__43650__i] = arguments[G__43650__i + 0]; ++G__43650__i;}
  args = new cljs.core.IndexedSeq(G__43650__a,0,null);
} 
return G__43649__delegate.call(this,args);};
G__43649.cljs$lang$maxFixedArity = 0;
G__43649.cljs$lang$applyTo = (function (arglist__43651){
var args = cljs.core.seq(arglist__43651);
return G__43649__delegate(args);
});
G__43649.cljs$core$IFn$_invoke$arity$variadic = G__43649__delegate;
return G__43649;
})()
,(function() { 
var G__43652__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.nav.navigate_BANG_,args);
};
var G__43652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43653__i = 0, G__43653__a = new Array(arguments.length -  0);
while (G__43653__i < G__43653__a.length) {G__43653__a[G__43653__i] = arguments[G__43653__i + 0]; ++G__43653__i;}
  args = new cljs.core.IndexedSeq(G__43653__a,0,null);
} 
return G__43652__delegate.call(this,args);};
G__43652.cljs$lang$maxFixedArity = 0;
G__43652.cljs$lang$applyTo = (function (arglist__43654){
var args = cljs.core.seq(arglist__43654);
return G__43652__delegate(args);
});
G__43652.cljs$core$IFn$_invoke$arity$variadic = G__43652__delegate;
return G__43652;
})()
,(function() { 
var G__43655__delegate = function (_){
return placesurfer.web_app.map_sync.schedule_map_resize_BANG_();
};
var G__43655 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43656__i = 0, G__43656__a = new Array(arguments.length -  0);
while (G__43656__i < G__43656__a.length) {G__43656__a[G__43656__i] = arguments[G__43656__i + 0]; ++G__43656__i;}
  _ = new cljs.core.IndexedSeq(G__43656__a,0,null);
} 
return G__43655__delegate.call(this,_);};
G__43655.cljs$lang$maxFixedArity = 0;
G__43655.cljs$lang$applyTo = (function (arglist__43657){
var _ = cljs.core.seq(arglist__43657);
return G__43655__delegate(_);
});
G__43655.cljs$core$IFn$_invoke$arity$variadic = G__43655__delegate;
return G__43655;
})()
,(function() { 
var G__43658__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.form.resolve_update_location_from_coordinates_BANG_,args);
};
var G__43658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43659__i = 0, G__43659__a = new Array(arguments.length -  0);
while (G__43659__i < G__43659__a.length) {G__43659__a[G__43659__i] = arguments[G__43659__i + 0]; ++G__43659__i;}
  args = new cljs.core.IndexedSeq(G__43659__a,0,null);
} 
return G__43658__delegate.call(this,args);};
G__43658.cljs$lang$maxFixedArity = 0;
G__43658.cljs$lang$applyTo = (function (arglist__43660){
var args = cljs.core.seq(arglist__43660);
return G__43658__delegate(args);
});
G__43658.cljs$core$IFn$_invoke$arity$variadic = G__43658__delegate;
return G__43658;
})()
,(function() { 
var G__43661__delegate = function (_){
return placesurfer.web_app.backend.check_backend_BANG_();
};
var G__43661 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43662__i = 0, G__43662__a = new Array(arguments.length -  0);
while (G__43662__i < G__43662__a.length) {G__43662__a[G__43662__i] = arguments[G__43662__i + 0]; ++G__43662__i;}
  _ = new cljs.core.IndexedSeq(G__43662__a,0,null);
} 
return G__43661__delegate.call(this,_);};
G__43661.cljs$lang$maxFixedArity = 0;
G__43661.cljs$lang$applyTo = (function (arglist__43663){
var _ = cljs.core.seq(arglist__43663);
return G__43661__delegate(_);
});
G__43661.cljs$core$IFn$_invoke$arity$variadic = G__43661__delegate;
return G__43661;
})()
,(function() { 
var G__43664__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.analytics.track_page_BANG_,args);
};
var G__43664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43665__i = 0, G__43665__a = new Array(arguments.length -  0);
while (G__43665__i < G__43665__a.length) {G__43665__a[G__43665__i] = arguments[G__43665__i + 0]; ++G__43665__i;}
  args = new cljs.core.IndexedSeq(G__43665__a,0,null);
} 
return G__43664__delegate.call(this,args);};
G__43664.cljs$lang$maxFixedArity = 0;
G__43664.cljs$lang$applyTo = (function (arglist__43666){
var args = cljs.core.seq(arglist__43666);
return G__43664__delegate(args);
});
G__43664.cljs$core$IFn$_invoke$arity$variadic = G__43664__delegate;
return G__43664;
})()
,(function() { 
var G__43667__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_,args);
};
var G__43667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43668__i = 0, G__43668__a = new Array(arguments.length -  0);
while (G__43668__i < G__43668__a.length) {G__43668__a[G__43668__i] = arguments[G__43668__i + 0]; ++G__43668__i;}
  args = new cljs.core.IndexedSeq(G__43668__a,0,null);
} 
return G__43667__delegate.call(this,args);};
G__43667.cljs$lang$maxFixedArity = 0;
G__43667.cljs$lang$applyTo = (function (arglist__43669){
var args = cljs.core.seq(arglist__43669);
return G__43667__delegate(args);
});
G__43667.cljs$core$IFn$_invoke$arity$variadic = G__43667__delegate;
return G__43667;
})()
,(function() { 
var G__43670__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.map.schedule_center_on_position_BANG_,args);
};
var G__43670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43671__i = 0, G__43671__a = new Array(arguments.length -  0);
while (G__43671__i < G__43671__a.length) {G__43671__a[G__43671__i] = arguments[G__43671__i + 0]; ++G__43671__i;}
  args = new cljs.core.IndexedSeq(G__43671__a,0,null);
} 
return G__43670__delegate.call(this,args);};
G__43670.cljs$lang$maxFixedArity = 0;
G__43670.cljs$lang$applyTo = (function (arglist__43672){
var args = cljs.core.seq(arglist__43672);
return G__43670__delegate(args);
});
G__43670.cljs$core$IFn$_invoke$arity$variadic = G__43670__delegate;
return G__43670;
})()
,(function (topic){
return placesurfer.app_ui.interface$.load.load_topic_positions_BANG_(topic);
}),(function() { 
var G__43673__delegate = function (_){
return placesurfer.web_app.render.sync_marker_pick_handler_BANG_();
};
var G__43673 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43674__i = 0, G__43674__a = new Array(arguments.length -  0);
while (G__43674__i < G__43674__a.length) {G__43674__a[G__43674__i] = arguments[G__43674__i + 0]; ++G__43674__i;}
  _ = new cljs.core.IndexedSeq(G__43674__a,0,null);
} 
return G__43673__delegate.call(this,_);};
G__43673.cljs$lang$maxFixedArity = 0;
G__43673.cljs$lang$applyTo = (function (arglist__43675){
var _ = cljs.core.seq(arglist__43675);
return G__43673__delegate(_);
});
G__43673.cljs$core$IFn$_invoke$arity$variadic = G__43673__delegate;
return G__43673;
})()
,(function() { 
var G__43676__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_,args);
};
var G__43676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43677__i = 0, G__43677__a = new Array(arguments.length -  0);
while (G__43677__i < G__43677__a.length) {G__43677__a[G__43677__i] = arguments[G__43677__i + 0]; ++G__43677__i;}
  args = new cljs.core.IndexedSeq(G__43677__a,0,null);
} 
return G__43676__delegate.call(this,args);};
G__43676.cljs$lang$maxFixedArity = 0;
G__43676.cljs$lang$applyTo = (function (arglist__43678){
var args = cljs.core.seq(arglist__43678);
return G__43676__delegate(args);
});
G__43676.cljs$core$IFn$_invoke$arity$variadic = G__43676__delegate;
return G__43676;
})()
,(function() { 
var G__43679__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.handlers.topic.run_in_update_pins_mode_BANG_,args);
};
var G__43679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43680__i = 0, G__43680__a = new Array(arguments.length -  0);
while (G__43680__i < G__43680__a.length) {G__43680__a[G__43680__i] = arguments[G__43680__i + 0]; ++G__43680__i;}
  args = new cljs.core.IndexedSeq(G__43680__a,0,null);
} 
return G__43679__delegate.call(this,args);};
G__43679.cljs$lang$maxFixedArity = 0;
G__43679.cljs$lang$applyTo = (function (arglist__43681){
var args = cljs.core.seq(arglist__43681);
return G__43679__delegate(args);
});
G__43679.cljs$core$IFn$_invoke$arity$variadic = G__43679__delegate;
return G__43679;
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
}catch (e43630){var __43682 = e43630;
}
placesurfer.web_app.backend.check_backend_BANG_();

return setInterval(placesurfer.web_app.backend.check_backend_BANG_,(5000));
});

//# sourceMappingURL=placesurfer.web_app.init.js.map
