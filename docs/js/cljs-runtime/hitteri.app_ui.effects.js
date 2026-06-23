goog.provide('hitteri.app_ui.effects');
if((typeof hitteri !== 'undefined') && (typeof hitteri.app_ui !== 'undefined') && (typeof hitteri.app_ui.effects !== 'undefined') && (typeof hitteri.app_ui.effects._BANG_handlers !== 'undefined')){
} else {
hitteri.app_ui.effects._BANG_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
hitteri.app_ui.effects.wire_BANG_ = (function hitteri$app_ui$effects$wire_BANG_(handlers){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.effects._BANG_handlers,cljs.core.merge,handlers);
});
hitteri.app_ui.effects.invoke = (function hitteri$app_ui$effects$invoke(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37230 = arguments.length;
var i__5750__auto___37231 = (0);
while(true){
if((i__5750__auto___37231 < len__5749__auto___37230)){
args__5755__auto__.push((arguments[i__5750__auto___37231]));

var G__37232 = (i__5750__auto___37231 + (1));
i__5750__auto___37231 = G__37232;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return hitteri.app_ui.effects.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(hitteri.app_ui.effects.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (k,args){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hitteri.app_ui.effects._BANG_handlers),k);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return null;
}
}));

(hitteri.app_ui.effects.invoke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hitteri.app_ui.effects.invoke.cljs$lang$applyTo = (function (seq37098){
var G__37099 = cljs.core.first(seq37098);
var seq37098__$1 = cljs.core.next(seq37098);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37099,seq37098__$1);
}));

hitteri.app_ui.effects.render_BANG_ = (function hitteri$app_ui$effects$render_BANG_(){
return hitteri.app_ui.effects.invoke(new cljs.core.Keyword(null,"render!","render!",-1848688504));
});
hitteri.app_ui.effects.navigate_BANG_ = (function hitteri$app_ui$effects$navigate_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37235 = arguments.length;
var i__5750__auto___37236 = (0);
while(true){
if((i__5750__auto___37236 < len__5749__auto___37235)){
args__5755__auto__.push((arguments[i__5750__auto___37236]));

var G__37237 = (i__5750__auto___37236 + (1));
i__5750__auto___37236 = G__37237;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.app_ui.effects.navigate_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.app_ui.effects.navigate_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.effects.invoke,new cljs.core.Keyword(null,"navigate!","navigate!",79998348),args);
}));

(hitteri.app_ui.effects.navigate_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.app_ui.effects.navigate_BANG_.cljs$lang$applyTo = (function (seq37111){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37111));
}));

hitteri.app_ui.effects.navigate_to_pin_BANG_ = (function hitteri$app_ui$effects$navigate_to_pin_BANG_(){
return hitteri.app_ui.effects.invoke(new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720));
});
hitteri.app_ui.effects.navigate_to_update_BANG_ = (function hitteri$app_ui$effects$navigate_to_update_BANG_(){
return hitteri.app_ui.effects.invoke(new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757));
});
hitteri.app_ui.effects.select_country_BANG_ = (function hitteri$app_ui$effects$select_country_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37238 = arguments.length;
var i__5750__auto___37239 = (0);
while(true){
if((i__5750__auto___37239 < len__5749__auto___37238)){
args__5755__auto__.push((arguments[i__5750__auto___37239]));

var G__37240 = (i__5750__auto___37239 + (1));
i__5750__auto___37239 = G__37240;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.app_ui.effects.select_country_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.app_ui.effects.select_country_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.effects.invoke,new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),args);
}));

(hitteri.app_ui.effects.select_country_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.app_ui.effects.select_country_BANG_.cljs$lang$applyTo = (function (seq37167){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37167));
}));

hitteri.app_ui.effects.resolve_update_location_from_coordinates_BANG_ = (function hitteri$app_ui$effects$resolve_update_location_from_coordinates_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37241 = arguments.length;
var i__5750__auto___37242 = (0);
while(true){
if((i__5750__auto___37242 < len__5749__auto___37241)){
args__5755__auto__.push((arguments[i__5750__auto___37242]));

var G__37244 = (i__5750__auto___37242 + (1));
i__5750__auto___37242 = G__37244;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.effects.invoke,new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),args);
}));

(hitteri.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$lang$applyTo = (function (seq37177){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37177));
}));

hitteri.app_ui.effects.sync_marker_pick_handler_BANG_ = (function hitteri$app_ui$effects$sync_marker_pick_handler_BANG_(){
return hitteri.app_ui.effects.invoke(new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139));
});
hitteri.app_ui.effects.reload_update_dataset_BANG_ = (function hitteri$app_ui$effects$reload_update_dataset_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37249 = arguments.length;
var i__5750__auto___37250 = (0);
while(true){
if((i__5750__auto___37250 < len__5749__auto___37249)){
args__5755__auto__.push((arguments[i__5750__auto___37250]));

var G__37251 = (i__5750__auto___37250 + (1));
i__5750__auto___37250 = G__37251;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.app_ui.effects.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.app_ui.effects.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.effects.invoke,new cljs.core.Keyword(null,"reload-update-dataset!","reload-update-dataset!",2091388789),args);
}));

(hitteri.app_ui.effects.reload_update_dataset_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.app_ui.effects.reload_update_dataset_BANG_.cljs$lang$applyTo = (function (seq37186){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37186));
}));

hitteri.app_ui.effects.sync_update_map_BANG_ = (function hitteri$app_ui$effects$sync_update_map_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37252 = arguments.length;
var i__5750__auto___37253 = (0);
while(true){
if((i__5750__auto___37253 < len__5749__auto___37252)){
args__5755__auto__.push((arguments[i__5750__auto___37253]));

var G__37254 = (i__5750__auto___37253 + (1));
i__5750__auto___37253 = G__37254;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.app_ui.effects.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.app_ui.effects.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.effects.invoke,new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844),args);
}));

(hitteri.app_ui.effects.sync_update_map_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.app_ui.effects.sync_update_map_BANG_.cljs$lang$applyTo = (function (seq37187){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37187));
}));

hitteri.app_ui.effects.load_topic_positions_BANG_ = (function hitteri$app_ui$effects$load_topic_positions_BANG_(topic){
return hitteri.app_ui.effects.invoke.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([topic], 0));
});
hitteri.app_ui.effects.schedule_update_map_pin_sync_BANG_ = (function hitteri$app_ui$effects$schedule_update_map_pin_sync_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37257 = arguments.length;
var i__5750__auto___37258 = (0);
while(true){
if((i__5750__auto___37258 < len__5749__auto___37257)){
args__5755__auto__.push((arguments[i__5750__auto___37258]));

var G__37259 = (i__5750__auto___37258 + (1));
i__5750__auto___37258 = G__37259;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.app_ui.effects.schedule_update_map_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.app_ui.effects.schedule_update_map_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.effects.invoke,new cljs.core.Keyword(null,"schedule-update-map-pin-sync!","schedule-update-map-pin-sync!",-1231704877),args);
}));

(hitteri.app_ui.effects.schedule_update_map_pin_sync_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.app_ui.effects.schedule_update_map_pin_sync_BANG_.cljs$lang$applyTo = (function (seq37191){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37191));
}));

hitteri.app_ui.effects.schedule_center_on_position_BANG_ = (function hitteri$app_ui$effects$schedule_center_on_position_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37265 = arguments.length;
var i__5750__auto___37266 = (0);
while(true){
if((i__5750__auto___37266 < len__5749__auto___37265)){
args__5755__auto__.push((arguments[i__5750__auto___37266]));

var G__37268 = (i__5750__auto___37266 + (1));
i__5750__auto___37266 = G__37268;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.app_ui.effects.schedule_center_on_position_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.app_ui.effects.schedule_center_on_position_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.effects.invoke,new cljs.core.Keyword(null,"schedule-center-on-position!","schedule-center-on-position!",-2028699949),args);
}));

(hitteri.app_ui.effects.schedule_center_on_position_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.app_ui.effects.schedule_center_on_position_BANG_.cljs$lang$applyTo = (function (seq37195){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37195));
}));

hitteri.app_ui.effects.schedule_map_resize_BANG_ = (function hitteri$app_ui$effects$schedule_map_resize_BANG_(){
return hitteri.app_ui.effects.invoke(new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251));
});
hitteri.app_ui.effects.sync_main_map_BANG_ = (function hitteri$app_ui$effects$sync_main_map_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37270 = arguments.length;
var i__5750__auto___37271 = (0);
while(true){
if((i__5750__auto___37271 < len__5749__auto___37270)){
args__5755__auto__.push((arguments[i__5750__auto___37271]));

var G__37273 = (i__5750__auto___37271 + (1));
i__5750__auto___37271 = G__37273;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.app_ui.effects.sync_main_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.app_ui.effects.sync_main_map_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.effects.invoke,new cljs.core.Keyword(null,"sync-main-map!","sync-main-map!",1944084897),args);
}));

(hitteri.app_ui.effects.sync_main_map_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.app_ui.effects.sync_main_map_BANG_.cljs$lang$applyTo = (function (seq37202){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37202));
}));

hitteri.app_ui.effects.check_backend_BANG_ = (function hitteri$app_ui$effects$check_backend_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37278 = arguments.length;
var i__5750__auto___37279 = (0);
while(true){
if((i__5750__auto___37279 < len__5749__auto___37278)){
args__5755__auto__.push((arguments[i__5750__auto___37279]));

var G__37280 = (i__5750__auto___37279 + (1));
i__5750__auto___37279 = G__37280;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.app_ui.effects.check_backend_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.app_ui.effects.check_backend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.effects.invoke,new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),args);
}));

(hitteri.app_ui.effects.check_backend_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.app_ui.effects.check_backend_BANG_.cljs$lang$applyTo = (function (seq37209){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37209));
}));

hitteri.app_ui.effects.track_page_BANG_ = (function hitteri$app_ui$effects$track_page_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37284 = arguments.length;
var i__5750__auto___37285 = (0);
while(true){
if((i__5750__auto___37285 < len__5749__auto___37284)){
args__5755__auto__.push((arguments[i__5750__auto___37285]));

var G__37286 = (i__5750__auto___37285 + (1));
i__5750__auto___37285 = G__37286;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.app_ui.effects.track_page_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.app_ui.effects.track_page_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.effects.invoke,new cljs.core.Keyword(null,"track-page!","track-page!",-116215823),args);
}));

(hitteri.app_ui.effects.track_page_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.app_ui.effects.track_page_BANG_.cljs$lang$applyTo = (function (seq37214){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37214));
}));

hitteri.app_ui.effects.set_update_topic_BANG_ = (function hitteri$app_ui$effects$set_update_topic_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37288 = arguments.length;
var i__5750__auto___37289 = (0);
while(true){
if((i__5750__auto___37289 < len__5749__auto___37288)){
args__5755__auto__.push((arguments[i__5750__auto___37289]));

var G__37290 = (i__5750__auto___37289 + (1));
i__5750__auto___37289 = G__37290;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.app_ui.effects.set_update_topic_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.app_ui.effects.set_update_topic_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.effects.invoke,new cljs.core.Keyword(null,"set-update-topic!","set-update-topic!",-271061205),args);
}));

(hitteri.app_ui.effects.set_update_topic_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.app_ui.effects.set_update_topic_BANG_.cljs$lang$applyTo = (function (seq37222){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37222));
}));

hitteri.app_ui.effects.run_in_update_pins_mode_BANG_ = (function hitteri$app_ui$effects$run_in_update_pins_mode_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37291 = arguments.length;
var i__5750__auto___37292 = (0);
while(true){
if((i__5750__auto___37292 < len__5749__auto___37291)){
args__5755__auto__.push((arguments[i__5750__auto___37292]));

var G__37294 = (i__5750__auto___37292 + (1));
i__5750__auto___37292 = G__37294;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.app_ui.effects.run_in_update_pins_mode_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.app_ui.effects.run_in_update_pins_mode_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.effects.invoke,new cljs.core.Keyword(null,"run-in-update-pins-mode!","run-in-update-pins-mode!",711977759),args);
}));

(hitteri.app_ui.effects.run_in_update_pins_mode_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.app_ui.effects.run_in_update_pins_mode_BANG_.cljs$lang$applyTo = (function (seq37226){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37226));
}));


//# sourceMappingURL=hitteri.app_ui.effects.js.map
