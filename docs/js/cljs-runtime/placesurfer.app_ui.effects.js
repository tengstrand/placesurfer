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
var len__5749__auto___21838 = arguments.length;
var i__5750__auto___21839 = (0);
while(true){
if((i__5750__auto___21839 < len__5749__auto___21838)){
args__5755__auto__.push((arguments[i__5750__auto___21839]));

var G__21840 = (i__5750__auto___21839 + (1));
i__5750__auto___21839 = G__21840;
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
(placesurfer.app_ui.effects.invoke.cljs$lang$applyTo = (function (seq21804){
var G__21805 = cljs.core.first(seq21804);
var seq21804__$1 = cljs.core.next(seq21804);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21805,seq21804__$1);
}));

placesurfer.app_ui.effects.render_BANG_ = (function placesurfer$app_ui$effects$render_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"render!","render!",-1848688504));
});
placesurfer.app_ui.effects.navigate_BANG_ = (function placesurfer$app_ui$effects$navigate_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21841 = arguments.length;
var i__5750__auto___21842 = (0);
while(true){
if((i__5750__auto___21842 < len__5749__auto___21841)){
args__5755__auto__.push((arguments[i__5750__auto___21842]));

var G__21854 = (i__5750__auto___21842 + (1));
i__5750__auto___21842 = G__21854;
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
(placesurfer.app_ui.effects.navigate_BANG_.cljs$lang$applyTo = (function (seq21812){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21812));
}));

placesurfer.app_ui.effects.navigate_to_pin_BANG_ = (function placesurfer$app_ui$effects$navigate_to_pin_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720));
});
placesurfer.app_ui.effects.navigate_to_update_BANG_ = (function placesurfer$app_ui$effects$navigate_to_update_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757));
});
placesurfer.app_ui.effects.select_country_BANG_ = (function placesurfer$app_ui$effects$select_country_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21857 = arguments.length;
var i__5750__auto___21858 = (0);
while(true){
if((i__5750__auto___21858 < len__5749__auto___21857)){
args__5755__auto__.push((arguments[i__5750__auto___21858]));

var G__21859 = (i__5750__auto___21858 + (1));
i__5750__auto___21858 = G__21859;
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
(placesurfer.app_ui.effects.select_country_BANG_.cljs$lang$applyTo = (function (seq21817){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21817));
}));

placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_ = (function placesurfer$app_ui$effects$resolve_update_location_from_coordinates_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21860 = arguments.length;
var i__5750__auto___21862 = (0);
while(true){
if((i__5750__auto___21862 < len__5749__auto___21860)){
args__5755__auto__.push((arguments[i__5750__auto___21862]));

var G__21864 = (i__5750__auto___21862 + (1));
i__5750__auto___21862 = G__21864;
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
(placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$lang$applyTo = (function (seq21821){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21821));
}));

placesurfer.app_ui.effects.sync_marker_pick_handler_BANG_ = (function placesurfer$app_ui$effects$sync_marker_pick_handler_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"sync-marker-pick-handler!","sync-marker-pick-handler!",-1183388139));
});
placesurfer.app_ui.effects.reload_update_dataset_BANG_ = (function placesurfer$app_ui$effects$reload_update_dataset_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21867 = arguments.length;
var i__5750__auto___21868 = (0);
while(true){
if((i__5750__auto___21868 < len__5749__auto___21867)){
args__5755__auto__.push((arguments[i__5750__auto___21868]));

var G__21869 = (i__5750__auto___21868 + (1));
i__5750__auto___21868 = G__21869;
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
(placesurfer.app_ui.effects.reload_update_dataset_BANG_.cljs$lang$applyTo = (function (seq21823){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21823));
}));

placesurfer.app_ui.effects.sync_update_map_BANG_ = (function placesurfer$app_ui$effects$sync_update_map_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21872 = arguments.length;
var i__5750__auto___21873 = (0);
while(true){
if((i__5750__auto___21873 < len__5749__auto___21872)){
args__5755__auto__.push((arguments[i__5750__auto___21873]));

var G__21874 = (i__5750__auto___21873 + (1));
i__5750__auto___21873 = G__21874;
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
(placesurfer.app_ui.effects.sync_update_map_BANG_.cljs$lang$applyTo = (function (seq21824){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21824));
}));

placesurfer.app_ui.effects.load_topic_positions_BANG_ = (function placesurfer$app_ui$effects$load_topic_positions_BANG_(topic){
return placesurfer.app_ui.effects.invoke.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([topic], 0));
});
placesurfer.app_ui.effects.schedule_update_map_pin_sync_BANG_ = (function placesurfer$app_ui$effects$schedule_update_map_pin_sync_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21875 = arguments.length;
var i__5750__auto___21876 = (0);
while(true){
if((i__5750__auto___21876 < len__5749__auto___21875)){
args__5755__auto__.push((arguments[i__5750__auto___21876]));

var G__21877 = (i__5750__auto___21876 + (1));
i__5750__auto___21876 = G__21877;
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
(placesurfer.app_ui.effects.schedule_update_map_pin_sync_BANG_.cljs$lang$applyTo = (function (seq21827){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21827));
}));

placesurfer.app_ui.effects.schedule_center_on_position_BANG_ = (function placesurfer$app_ui$effects$schedule_center_on_position_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21879 = arguments.length;
var i__5750__auto___21880 = (0);
while(true){
if((i__5750__auto___21880 < len__5749__auto___21879)){
args__5755__auto__.push((arguments[i__5750__auto___21880]));

var G__21881 = (i__5750__auto___21880 + (1));
i__5750__auto___21880 = G__21881;
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
(placesurfer.app_ui.effects.schedule_center_on_position_BANG_.cljs$lang$applyTo = (function (seq21828){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21828));
}));

placesurfer.app_ui.effects.schedule_map_resize_BANG_ = (function placesurfer$app_ui$effects$schedule_map_resize_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251));
});
placesurfer.app_ui.effects.sync_main_map_BANG_ = (function placesurfer$app_ui$effects$sync_main_map_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21882 = arguments.length;
var i__5750__auto___21883 = (0);
while(true){
if((i__5750__auto___21883 < len__5749__auto___21882)){
args__5755__auto__.push((arguments[i__5750__auto___21883]));

var G__21884 = (i__5750__auto___21883 + (1));
i__5750__auto___21883 = G__21884;
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
(placesurfer.app_ui.effects.sync_main_map_BANG_.cljs$lang$applyTo = (function (seq21829){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21829));
}));

placesurfer.app_ui.effects.check_backend_BANG_ = (function placesurfer$app_ui$effects$check_backend_BANG_(var_args){
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
return placesurfer.app_ui.effects.check_backend_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.check_backend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"check-backend!","check-backend!",2001574638),args);
}));

(placesurfer.app_ui.effects.check_backend_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.check_backend_BANG_.cljs$lang$applyTo = (function (seq21833){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21833));
}));

placesurfer.app_ui.effects.track_page_BANG_ = (function placesurfer$app_ui$effects$track_page_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21888 = arguments.length;
var i__5750__auto___21889 = (0);
while(true){
if((i__5750__auto___21889 < len__5749__auto___21888)){
args__5755__auto__.push((arguments[i__5750__auto___21889]));

var G__21890 = (i__5750__auto___21889 + (1));
i__5750__auto___21889 = G__21890;
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
(placesurfer.app_ui.effects.track_page_BANG_.cljs$lang$applyTo = (function (seq21834){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21834));
}));

placesurfer.app_ui.effects.set_update_topic_BANG_ = (function placesurfer$app_ui$effects$set_update_topic_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21893 = arguments.length;
var i__5750__auto___21894 = (0);
while(true){
if((i__5750__auto___21894 < len__5749__auto___21893)){
args__5755__auto__.push((arguments[i__5750__auto___21894]));

var G__21896 = (i__5750__auto___21894 + (1));
i__5750__auto___21894 = G__21896;
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
(placesurfer.app_ui.effects.set_update_topic_BANG_.cljs$lang$applyTo = (function (seq21835){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21835));
}));

placesurfer.app_ui.effects.run_in_update_pins_mode_BANG_ = (function placesurfer$app_ui$effects$run_in_update_pins_mode_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21897 = arguments.length;
var i__5750__auto___21898 = (0);
while(true){
if((i__5750__auto___21898 < len__5749__auto___21897)){
args__5755__auto__.push((arguments[i__5750__auto___21898]));

var G__21899 = (i__5750__auto___21898 + (1));
i__5750__auto___21898 = G__21899;
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
(placesurfer.app_ui.effects.run_in_update_pins_mode_BANG_.cljs$lang$applyTo = (function (seq21837){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21837));
}));


//# sourceMappingURL=placesurfer.app_ui.effects.js.map
