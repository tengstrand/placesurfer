goog.provide('placesurfer.app_ui.effects');
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.app_ui !== 'undefined') && (typeof placesurfer.app_ui.effects !== 'undefined') && (typeof placesurfer.app_ui.effects._BANG_handlers !== 'undefined')){
} else {
placesurfer.app_ui.effects._BANG_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
placesurfer.app_ui.effects.wire_BANG_ = (function placesurfer$app_ui$effects$wire_BANG_(handlers){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects._BANG_handlers,cljs.core.merge,handlers);
});
placesurfer.app_ui.effects.invoke = (function placesurfer$app_ui$effects$invoke(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37235 = arguments.length;
var i__5750__auto___37236 = (0);
while(true){
if((i__5750__auto___37236 < len__5749__auto___37235)){
args__5755__auto__.push((arguments[i__5750__auto___37236]));

var G__37240 = (i__5750__auto___37236 + (1));
i__5750__auto___37236 = G__37240;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return placesurfer.app_ui.effects.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(placesurfer.app_ui.effects.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (k,args){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.app_ui.effects._BANG_handlers),k);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return null;
}
}));

(placesurfer.app_ui.effects.invoke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(placesurfer.app_ui.effects.invoke.cljs$lang$applyTo = (function (seq37094){
var G__37095 = cljs.core.first(seq37094);
var seq37094__$1 = cljs.core.next(seq37094);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37095,seq37094__$1);
}));

placesurfer.app_ui.effects.render_BANG_ = (function placesurfer$app_ui$effects$render_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"render!","render!",-1848688504));
});
placesurfer.app_ui.effects.navigate_BANG_ = (function placesurfer$app_ui$effects$navigate_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37241 = arguments.length;
var i__5750__auto___37242 = (0);
while(true){
if((i__5750__auto___37242 < len__5749__auto___37241)){
args__5755__auto__.push((arguments[i__5750__auto___37242]));

var G__37243 = (i__5750__auto___37242 + (1));
i__5750__auto___37242 = G__37243;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.app_ui.effects.navigate_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.navigate_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"navigate!","navigate!",79998348),args);
}));

(placesurfer.app_ui.effects.navigate_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.navigate_BANG_.cljs$lang$applyTo = (function (seq37108){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37108));
}));

placesurfer.app_ui.effects.navigate_to_pin_BANG_ = (function placesurfer$app_ui$effects$navigate_to_pin_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720));
});
placesurfer.app_ui.effects.navigate_to_update_BANG_ = (function placesurfer$app_ui$effects$navigate_to_update_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757));
});
placesurfer.app_ui.effects.select_country_BANG_ = (function placesurfer$app_ui$effects$select_country_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37244 = arguments.length;
var i__5750__auto___37245 = (0);
while(true){
if((i__5750__auto___37245 < len__5749__auto___37244)){
args__5755__auto__.push((arguments[i__5750__auto___37245]));

var G__37246 = (i__5750__auto___37245 + (1));
i__5750__auto___37245 = G__37246;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.app_ui.effects.select_country_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.select_country_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),args);
}));

(placesurfer.app_ui.effects.select_country_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.select_country_BANG_.cljs$lang$applyTo = (function (seq37113){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37113));
}));

placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_ = (function placesurfer$app_ui$effects$resolve_update_location_from_coordinates_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37250 = arguments.length;
var i__5750__auto___37251 = (0);
while(true){
if((i__5750__auto___37251 < len__5749__auto___37250)){
args__5755__auto__.push((arguments[i__5750__auto___37251]));

var G__37254 = (i__5750__auto___37251 + (1));
i__5750__auto___37251 = G__37254;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),args);
}));

(placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$lang$applyTo = (function (seq37124){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37124));
}));

placesurfer.app_ui.effects.sync_marker_pick_handler_BANG_ = (function placesurfer$app_ui$effects$sync_marker_pick_handler_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139));
});
placesurfer.app_ui.effects.reload_update_dataset_BANG_ = (function placesurfer$app_ui$effects$reload_update_dataset_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37267 = arguments.length;
var i__5750__auto___37268 = (0);
while(true){
if((i__5750__auto___37268 < len__5749__auto___37267)){
args__5755__auto__.push((arguments[i__5750__auto___37268]));

var G__37272 = (i__5750__auto___37268 + (1));
i__5750__auto___37268 = G__37272;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.app_ui.effects.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),args);
}));

(placesurfer.app_ui.effects.reload_update_dataset_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.reload_update_dataset_BANG_.cljs$lang$applyTo = (function (seq37151){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37151));
}));

placesurfer.app_ui.effects.sync_update_map_BANG_ = (function placesurfer$app_ui$effects$sync_update_map_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37275 = arguments.length;
var i__5750__auto___37276 = (0);
while(true){
if((i__5750__auto___37276 < len__5749__auto___37275)){
args__5755__auto__.push((arguments[i__5750__auto___37276]));

var G__37278 = (i__5750__auto___37276 + (1));
i__5750__auto___37276 = G__37278;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.app_ui.effects.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),args);
}));

(placesurfer.app_ui.effects.sync_update_map_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.sync_update_map_BANG_.cljs$lang$applyTo = (function (seq37163){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37163));
}));

placesurfer.app_ui.effects.load_topic_positions_BANG_ = (function placesurfer$app_ui$effects$load_topic_positions_BANG_(topic){
return placesurfer.app_ui.effects.invoke.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([topic], 0));
});
placesurfer.app_ui.effects.schedule_update_map_pin_sync_BANG_ = (function placesurfer$app_ui$effects$schedule_update_map_pin_sync_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37283 = arguments.length;
var i__5750__auto___37284 = (0);
while(true){
if((i__5750__auto___37284 < len__5749__auto___37283)){
args__5755__auto__.push((arguments[i__5750__auto___37284]));

var G__37285 = (i__5750__auto___37284 + (1));
i__5750__auto___37284 = G__37285;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.app_ui.effects.schedule_update_map_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.schedule_update_map_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),args);
}));

(placesurfer.app_ui.effects.schedule_update_map_pin_sync_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.schedule_update_map_pin_sync_BANG_.cljs$lang$applyTo = (function (seq37165){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37165));
}));

placesurfer.app_ui.effects.schedule_center_on_position_BANG_ = (function placesurfer$app_ui$effects$schedule_center_on_position_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37286 = arguments.length;
var i__5750__auto___37287 = (0);
while(true){
if((i__5750__auto___37287 < len__5749__auto___37286)){
args__5755__auto__.push((arguments[i__5750__auto___37287]));

var G__37289 = (i__5750__auto___37287 + (1));
i__5750__auto___37287 = G__37289;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.app_ui.effects.schedule_center_on_position_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.schedule_center_on_position_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),args);
}));

(placesurfer.app_ui.effects.schedule_center_on_position_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.schedule_center_on_position_BANG_.cljs$lang$applyTo = (function (seq37172){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37172));
}));

placesurfer.app_ui.effects.schedule_map_resize_BANG_ = (function placesurfer$app_ui$effects$schedule_map_resize_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251));
});
placesurfer.app_ui.effects.sync_main_map_BANG_ = (function placesurfer$app_ui$effects$sync_main_map_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37297 = arguments.length;
var i__5750__auto___37298 = (0);
while(true){
if((i__5750__auto___37298 < len__5749__auto___37297)){
args__5755__auto__.push((arguments[i__5750__auto___37298]));

var G__37299 = (i__5750__auto___37298 + (1));
i__5750__auto___37298 = G__37299;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.app_ui.effects.sync_main_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.sync_main_map_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),args);
}));

(placesurfer.app_ui.effects.sync_main_map_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.sync_main_map_BANG_.cljs$lang$applyTo = (function (seq37178){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37178));
}));

placesurfer.app_ui.effects.check_backend_BANG_ = (function placesurfer$app_ui$effects$check_backend_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37301 = arguments.length;
var i__5750__auto___37302 = (0);
while(true){
if((i__5750__auto___37302 < len__5749__auto___37301)){
args__5755__auto__.push((arguments[i__5750__auto___37302]));

var G__37303 = (i__5750__auto___37302 + (1));
i__5750__auto___37302 = G__37303;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.app_ui.effects.check_backend_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.check_backend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),args);
}));

(placesurfer.app_ui.effects.check_backend_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.check_backend_BANG_.cljs$lang$applyTo = (function (seq37184){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37184));
}));

placesurfer.app_ui.effects.track_page_BANG_ = (function placesurfer$app_ui$effects$track_page_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37306 = arguments.length;
var i__5750__auto___37307 = (0);
while(true){
if((i__5750__auto___37307 < len__5749__auto___37306)){
args__5755__auto__.push((arguments[i__5750__auto___37307]));

var G__37308 = (i__5750__auto___37307 + (1));
i__5750__auto___37307 = G__37308;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.app_ui.effects.track_page_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.track_page_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),args);
}));

(placesurfer.app_ui.effects.track_page_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.track_page_BANG_.cljs$lang$applyTo = (function (seq37190){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37190));
}));

placesurfer.app_ui.effects.set_update_topic_BANG_ = (function placesurfer$app_ui$effects$set_update_topic_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37310 = arguments.length;
var i__5750__auto___37311 = (0);
while(true){
if((i__5750__auto___37311 < len__5749__auto___37310)){
args__5755__auto__.push((arguments[i__5750__auto___37311]));

var G__37312 = (i__5750__auto___37311 + (1));
i__5750__auto___37311 = G__37312;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.app_ui.effects.set_update_topic_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.set_update_topic_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),args);
}));

(placesurfer.app_ui.effects.set_update_topic_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.set_update_topic_BANG_.cljs$lang$applyTo = (function (seq37230){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37230));
}));

placesurfer.app_ui.effects.run_in_update_pins_mode_BANG_ = (function placesurfer$app_ui$effects$run_in_update_pins_mode_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37313 = arguments.length;
var i__5750__auto___37314 = (0);
while(true){
if((i__5750__auto___37314 < len__5749__auto___37313)){
args__5755__auto__.push((arguments[i__5750__auto___37314]));

var G__37315 = (i__5750__auto___37314 + (1));
i__5750__auto___37314 = G__37315;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.app_ui.effects.run_in_update_pins_mode_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.run_in_update_pins_mode_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759),args);
}));

(placesurfer.app_ui.effects.run_in_update_pins_mode_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.run_in_update_pins_mode_BANG_.cljs$lang$applyTo = (function (seq37232){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37232));
}));


//# sourceMappingURL=placesurfer.app_ui.effects.js.map
