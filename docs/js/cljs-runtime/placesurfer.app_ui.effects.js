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
var len__5749__auto___37335 = arguments.length;
var i__5750__auto___37336 = (0);
while(true){
if((i__5750__auto___37336 < len__5749__auto___37335)){
args__5755__auto__.push((arguments[i__5750__auto___37336]));

var G__37337 = (i__5750__auto___37336 + (1));
i__5750__auto___37336 = G__37337;
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
(placesurfer.app_ui.effects.invoke.cljs$lang$applyTo = (function (seq37184){
var G__37185 = cljs.core.first(seq37184);
var seq37184__$1 = cljs.core.next(seq37184);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37185,seq37184__$1);
}));

placesurfer.app_ui.effects.render_BANG_ = (function placesurfer$app_ui$effects$render_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"render!","render!",-1848688504));
});
placesurfer.app_ui.effects.navigate_BANG_ = (function placesurfer$app_ui$effects$navigate_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37342 = arguments.length;
var i__5750__auto___37343 = (0);
while(true){
if((i__5750__auto___37343 < len__5749__auto___37342)){
args__5755__auto__.push((arguments[i__5750__auto___37343]));

var G__37345 = (i__5750__auto___37343 + (1));
i__5750__auto___37343 = G__37345;
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
(placesurfer.app_ui.effects.navigate_BANG_.cljs$lang$applyTo = (function (seq37189){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37189));
}));

placesurfer.app_ui.effects.navigate_to_pin_BANG_ = (function placesurfer$app_ui$effects$navigate_to_pin_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720));
});
placesurfer.app_ui.effects.navigate_to_update_BANG_ = (function placesurfer$app_ui$effects$navigate_to_update_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757));
});
placesurfer.app_ui.effects.select_country_BANG_ = (function placesurfer$app_ui$effects$select_country_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37350 = arguments.length;
var i__5750__auto___37351 = (0);
while(true){
if((i__5750__auto___37351 < len__5749__auto___37350)){
args__5755__auto__.push((arguments[i__5750__auto___37351]));

var G__37352 = (i__5750__auto___37351 + (1));
i__5750__auto___37351 = G__37352;
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
(placesurfer.app_ui.effects.select_country_BANG_.cljs$lang$applyTo = (function (seq37201){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37201));
}));

placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_ = (function placesurfer$app_ui$effects$resolve_update_location_from_coordinates_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37356 = arguments.length;
var i__5750__auto___37357 = (0);
while(true){
if((i__5750__auto___37357 < len__5749__auto___37356)){
args__5755__auto__.push((arguments[i__5750__auto___37357]));

var G__37358 = (i__5750__auto___37357 + (1));
i__5750__auto___37357 = G__37358;
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
(placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$lang$applyTo = (function (seq37223){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37223));
}));

placesurfer.app_ui.effects.sync_marker_pick_handler_BANG_ = (function placesurfer$app_ui$effects$sync_marker_pick_handler_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139));
});
placesurfer.app_ui.effects.reload_update_dataset_BANG_ = (function placesurfer$app_ui$effects$reload_update_dataset_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37367 = arguments.length;
var i__5750__auto___37368 = (0);
while(true){
if((i__5750__auto___37368 < len__5749__auto___37367)){
args__5755__auto__.push((arguments[i__5750__auto___37368]));

var G__37369 = (i__5750__auto___37368 + (1));
i__5750__auto___37368 = G__37369;
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
(placesurfer.app_ui.effects.reload_update_dataset_BANG_.cljs$lang$applyTo = (function (seq37251){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37251));
}));

placesurfer.app_ui.effects.sync_update_map_BANG_ = (function placesurfer$app_ui$effects$sync_update_map_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37378 = arguments.length;
var i__5750__auto___37381 = (0);
while(true){
if((i__5750__auto___37381 < len__5749__auto___37378)){
args__5755__auto__.push((arguments[i__5750__auto___37381]));

var G__37382 = (i__5750__auto___37381 + (1));
i__5750__auto___37381 = G__37382;
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
(placesurfer.app_ui.effects.sync_update_map_BANG_.cljs$lang$applyTo = (function (seq37260){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37260));
}));

placesurfer.app_ui.effects.load_topic_positions_BANG_ = (function placesurfer$app_ui$effects$load_topic_positions_BANG_(topic){
return placesurfer.app_ui.effects.invoke.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([topic], 0));
});
placesurfer.app_ui.effects.schedule_update_map_pin_sync_BANG_ = (function placesurfer$app_ui$effects$schedule_update_map_pin_sync_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37388 = arguments.length;
var i__5750__auto___37389 = (0);
while(true){
if((i__5750__auto___37389 < len__5749__auto___37388)){
args__5755__auto__.push((arguments[i__5750__auto___37389]));

var G__37390 = (i__5750__auto___37389 + (1));
i__5750__auto___37389 = G__37390;
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
(placesurfer.app_ui.effects.schedule_update_map_pin_sync_BANG_.cljs$lang$applyTo = (function (seq37267){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37267));
}));

placesurfer.app_ui.effects.schedule_center_on_position_BANG_ = (function placesurfer$app_ui$effects$schedule_center_on_position_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37397 = arguments.length;
var i__5750__auto___37398 = (0);
while(true){
if((i__5750__auto___37398 < len__5749__auto___37397)){
args__5755__auto__.push((arguments[i__5750__auto___37398]));

var G__37400 = (i__5750__auto___37398 + (1));
i__5750__auto___37398 = G__37400;
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
(placesurfer.app_ui.effects.schedule_center_on_position_BANG_.cljs$lang$applyTo = (function (seq37272){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37272));
}));

placesurfer.app_ui.effects.schedule_map_resize_BANG_ = (function placesurfer$app_ui$effects$schedule_map_resize_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251));
});
placesurfer.app_ui.effects.sync_main_map_BANG_ = (function placesurfer$app_ui$effects$sync_main_map_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37412 = arguments.length;
var i__5750__auto___37413 = (0);
while(true){
if((i__5750__auto___37413 < len__5749__auto___37412)){
args__5755__auto__.push((arguments[i__5750__auto___37413]));

var G__37414 = (i__5750__auto___37413 + (1));
i__5750__auto___37413 = G__37414;
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
(placesurfer.app_ui.effects.sync_main_map_BANG_.cljs$lang$applyTo = (function (seq37278){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37278));
}));

placesurfer.app_ui.effects.check_backend_BANG_ = (function placesurfer$app_ui$effects$check_backend_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37462 = arguments.length;
var i__5750__auto___37463 = (0);
while(true){
if((i__5750__auto___37463 < len__5749__auto___37462)){
args__5755__auto__.push((arguments[i__5750__auto___37463]));

var G__37465 = (i__5750__auto___37463 + (1));
i__5750__auto___37463 = G__37465;
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
(placesurfer.app_ui.effects.check_backend_BANG_.cljs$lang$applyTo = (function (seq37279){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37279));
}));

placesurfer.app_ui.effects.track_page_BANG_ = (function placesurfer$app_ui$effects$track_page_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37473 = arguments.length;
var i__5750__auto___37474 = (0);
while(true){
if((i__5750__auto___37474 < len__5749__auto___37473)){
args__5755__auto__.push((arguments[i__5750__auto___37474]));

var G__37475 = (i__5750__auto___37474 + (1));
i__5750__auto___37474 = G__37475;
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
(placesurfer.app_ui.effects.track_page_BANG_.cljs$lang$applyTo = (function (seq37282){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37282));
}));

placesurfer.app_ui.effects.set_update_topic_BANG_ = (function placesurfer$app_ui$effects$set_update_topic_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37478 = arguments.length;
var i__5750__auto___37479 = (0);
while(true){
if((i__5750__auto___37479 < len__5749__auto___37478)){
args__5755__auto__.push((arguments[i__5750__auto___37479]));

var G__37480 = (i__5750__auto___37479 + (1));
i__5750__auto___37479 = G__37480;
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
(placesurfer.app_ui.effects.set_update_topic_BANG_.cljs$lang$applyTo = (function (seq37289){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37289));
}));

placesurfer.app_ui.effects.run_in_update_pins_mode_BANG_ = (function placesurfer$app_ui$effects$run_in_update_pins_mode_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37482 = arguments.length;
var i__5750__auto___37483 = (0);
while(true){
if((i__5750__auto___37483 < len__5749__auto___37482)){
args__5755__auto__.push((arguments[i__5750__auto___37483]));

var G__37484 = (i__5750__auto___37483 + (1));
i__5750__auto___37483 = G__37484;
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
(placesurfer.app_ui.effects.run_in_update_pins_mode_BANG_.cljs$lang$applyTo = (function (seq37324){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37324));
}));


//# sourceMappingURL=placesurfer.app_ui.effects.js.map
