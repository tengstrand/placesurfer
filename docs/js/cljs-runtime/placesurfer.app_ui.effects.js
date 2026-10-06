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
var len__5749__auto___21862 = arguments.length;
var i__5750__auto___21868 = (0);
while(true){
if((i__5750__auto___21868 < len__5749__auto___21862)){
args__5755__auto__.push((arguments[i__5750__auto___21868]));

var G__21870 = (i__5750__auto___21868 + (1));
i__5750__auto___21868 = G__21870;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return placesurfer.app_ui.effects.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(placesurfer.app_ui.effects.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (k,args){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.app_ui.effects._BANG_handlers),k);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return null;
}
}));

(placesurfer.app_ui.effects.invoke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(placesurfer.app_ui.effects.invoke.cljs$lang$applyTo = (function (seq21821){
var G__21823 = cljs.core.first(seq21821);
var seq21821__$1 = cljs.core.next(seq21821);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21823,seq21821__$1);
}));

placesurfer.app_ui.effects.render_BANG_ = (function placesurfer$app_ui$effects$render_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"render!","render!",-1848688504));
});
placesurfer.app_ui.effects.navigate_BANG_ = (function placesurfer$app_ui$effects$navigate_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21874 = arguments.length;
var i__5750__auto___21875 = (0);
while(true){
if((i__5750__auto___21875 < len__5749__auto___21874)){
args__5755__auto__.push((arguments[i__5750__auto___21875]));

var G__21876 = (i__5750__auto___21875 + (1));
i__5750__auto___21875 = G__21876;
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
(placesurfer.app_ui.effects.navigate_BANG_.cljs$lang$applyTo = (function (seq21827){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21827));
}));

placesurfer.app_ui.effects.navigate_to_pin_BANG_ = (function placesurfer$app_ui$effects$navigate_to_pin_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720));
});
placesurfer.app_ui.effects.navigate_to_update_BANG_ = (function placesurfer$app_ui$effects$navigate_to_update_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757));
});
placesurfer.app_ui.effects.select_country_BANG_ = (function placesurfer$app_ui$effects$select_country_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21877 = arguments.length;
var i__5750__auto___21878 = (0);
while(true){
if((i__5750__auto___21878 < len__5749__auto___21877)){
args__5755__auto__.push((arguments[i__5750__auto___21878]));

var G__21880 = (i__5750__auto___21878 + (1));
i__5750__auto___21878 = G__21880;
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
(placesurfer.app_ui.effects.select_country_BANG_.cljs$lang$applyTo = (function (seq21828){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21828));
}));

placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_ = (function placesurfer$app_ui$effects$resolve_update_location_from_coordinates_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21881 = arguments.length;
var i__5750__auto___21882 = (0);
while(true){
if((i__5750__auto___21882 < len__5749__auto___21881)){
args__5755__auto__.push((arguments[i__5750__auto___21882]));

var G__21883 = (i__5750__auto___21882 + (1));
i__5750__auto___21882 = G__21883;
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
(placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$lang$applyTo = (function (seq21829){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21829));
}));

placesurfer.app_ui.effects.sync_marker_pick_handler_BANG_ = (function placesurfer$app_ui$effects$sync_marker_pick_handler_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139));
});
placesurfer.app_ui.effects.reload_update_dataset_BANG_ = (function placesurfer$app_ui$effects$reload_update_dataset_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21885 = arguments.length;
var i__5750__auto___21886 = (0);
while(true){
if((i__5750__auto___21886 < len__5749__auto___21885)){
args__5755__auto__.push((arguments[i__5750__auto___21886]));

var G__21887 = (i__5750__auto___21886 + (1));
i__5750__auto___21886 = G__21887;
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
(placesurfer.app_ui.effects.reload_update_dataset_BANG_.cljs$lang$applyTo = (function (seq21830){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21830));
}));

placesurfer.app_ui.effects.sync_update_map_BANG_ = (function placesurfer$app_ui$effects$sync_update_map_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21890 = arguments.length;
var i__5750__auto___21891 = (0);
while(true){
if((i__5750__auto___21891 < len__5749__auto___21890)){
args__5755__auto__.push((arguments[i__5750__auto___21891]));

var G__21892 = (i__5750__auto___21891 + (1));
i__5750__auto___21891 = G__21892;
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
(placesurfer.app_ui.effects.sync_update_map_BANG_.cljs$lang$applyTo = (function (seq21836){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21836));
}));

placesurfer.app_ui.effects.load_topic_positions_BANG_ = (function placesurfer$app_ui$effects$load_topic_positions_BANG_(topic){
return placesurfer.app_ui.effects.invoke.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([topic], 0));
});
placesurfer.app_ui.effects.schedule_update_map_pin_sync_BANG_ = (function placesurfer$app_ui$effects$schedule_update_map_pin_sync_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21893 = arguments.length;
var i__5750__auto___21894 = (0);
while(true){
if((i__5750__auto___21894 < len__5749__auto___21893)){
args__5755__auto__.push((arguments[i__5750__auto___21894]));

var G__21895 = (i__5750__auto___21894 + (1));
i__5750__auto___21894 = G__21895;
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
(placesurfer.app_ui.effects.schedule_update_map_pin_sync_BANG_.cljs$lang$applyTo = (function (seq21837){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21837));
}));

placesurfer.app_ui.effects.schedule_center_on_position_BANG_ = (function placesurfer$app_ui$effects$schedule_center_on_position_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21898 = arguments.length;
var i__5750__auto___21899 = (0);
while(true){
if((i__5750__auto___21899 < len__5749__auto___21898)){
args__5755__auto__.push((arguments[i__5750__auto___21899]));

var G__21901 = (i__5750__auto___21899 + (1));
i__5750__auto___21899 = G__21901;
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
(placesurfer.app_ui.effects.schedule_center_on_position_BANG_.cljs$lang$applyTo = (function (seq21842){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21842));
}));

placesurfer.app_ui.effects.schedule_map_resize_BANG_ = (function placesurfer$app_ui$effects$schedule_map_resize_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251));
});
placesurfer.app_ui.effects.sync_main_map_BANG_ = (function placesurfer$app_ui$effects$sync_main_map_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21904 = arguments.length;
var i__5750__auto___21905 = (0);
while(true){
if((i__5750__auto___21905 < len__5749__auto___21904)){
args__5755__auto__.push((arguments[i__5750__auto___21905]));

var G__21906 = (i__5750__auto___21905 + (1));
i__5750__auto___21905 = G__21906;
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
(placesurfer.app_ui.effects.sync_main_map_BANG_.cljs$lang$applyTo = (function (seq21844){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21844));
}));

placesurfer.app_ui.effects.check_backend_BANG_ = (function placesurfer$app_ui$effects$check_backend_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21922 = arguments.length;
var i__5750__auto___21923 = (0);
while(true){
if((i__5750__auto___21923 < len__5749__auto___21922)){
args__5755__auto__.push((arguments[i__5750__auto___21923]));

var G__21924 = (i__5750__auto___21923 + (1));
i__5750__auto___21923 = G__21924;
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
(placesurfer.app_ui.effects.check_backend_BANG_.cljs$lang$applyTo = (function (seq21845){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21845));
}));

placesurfer.app_ui.effects.track_page_BANG_ = (function placesurfer$app_ui$effects$track_page_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21926 = arguments.length;
var i__5750__auto___21927 = (0);
while(true){
if((i__5750__auto___21927 < len__5749__auto___21926)){
args__5755__auto__.push((arguments[i__5750__auto___21927]));

var G__21928 = (i__5750__auto___21927 + (1));
i__5750__auto___21927 = G__21928;
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
(placesurfer.app_ui.effects.track_page_BANG_.cljs$lang$applyTo = (function (seq21851){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21851));
}));

placesurfer.app_ui.effects.set_update_topic_BANG_ = (function placesurfer$app_ui$effects$set_update_topic_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21930 = arguments.length;
var i__5750__auto___21931 = (0);
while(true){
if((i__5750__auto___21931 < len__5749__auto___21930)){
args__5755__auto__.push((arguments[i__5750__auto___21931]));

var G__21932 = (i__5750__auto___21931 + (1));
i__5750__auto___21931 = G__21932;
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
(placesurfer.app_ui.effects.set_update_topic_BANG_.cljs$lang$applyTo = (function (seq21852){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21852));
}));

placesurfer.app_ui.effects.run_in_update_pins_mode_BANG_ = (function placesurfer$app_ui$effects$run_in_update_pins_mode_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21937 = arguments.length;
var i__5750__auto___21941 = (0);
while(true){
if((i__5750__auto___21941 < len__5749__auto___21937)){
args__5755__auto__.push((arguments[i__5750__auto___21941]));

var G__21942 = (i__5750__auto___21941 + (1));
i__5750__auto___21941 = G__21942;
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
(placesurfer.app_ui.effects.run_in_update_pins_mode_BANG_.cljs$lang$applyTo = (function (seq21853){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21853));
}));


//# sourceMappingURL=placesurfer.app_ui.effects.js.map
