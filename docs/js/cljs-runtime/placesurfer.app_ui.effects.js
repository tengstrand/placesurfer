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
var len__5749__auto___21864 = arguments.length;
var i__5750__auto___21865 = (0);
while(true){
if((i__5750__auto___21865 < len__5749__auto___21864)){
args__5755__auto__.push((arguments[i__5750__auto___21865]));

var G__21870 = (i__5750__auto___21865 + (1));
i__5750__auto___21865 = G__21870;
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
(placesurfer.app_ui.effects.invoke.cljs$lang$applyTo = (function (seq21816){
var G__21817 = cljs.core.first(seq21816);
var seq21816__$1 = cljs.core.next(seq21816);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21817,seq21816__$1);
}));

placesurfer.app_ui.effects.render_BANG_ = (function placesurfer$app_ui$effects$render_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"render!","render!",-1848688504));
});
placesurfer.app_ui.effects.navigate_BANG_ = (function placesurfer$app_ui$effects$navigate_BANG_(var_args){
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
return placesurfer.app_ui.effects.navigate_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.navigate_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"navigate!","navigate!",79998348),args);
}));

(placesurfer.app_ui.effects.navigate_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.navigate_BANG_.cljs$lang$applyTo = (function (seq21819){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21819));
}));

placesurfer.app_ui.effects.navigate_to_pin_BANG_ = (function placesurfer$app_ui$effects$navigate_to_pin_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720));
});
placesurfer.app_ui.effects.navigate_to_update_BANG_ = (function placesurfer$app_ui$effects$navigate_to_update_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757));
});
placesurfer.app_ui.effects.select_country_BANG_ = (function placesurfer$app_ui$effects$select_country_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21876 = arguments.length;
var i__5750__auto___21877 = (0);
while(true){
if((i__5750__auto___21877 < len__5749__auto___21876)){
args__5755__auto__.push((arguments[i__5750__auto___21877]));

var G__21878 = (i__5750__auto___21877 + (1));
i__5750__auto___21877 = G__21878;
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
(placesurfer.app_ui.effects.select_country_BANG_.cljs$lang$applyTo = (function (seq21822){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21822));
}));

placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_ = (function placesurfer$app_ui$effects$resolve_update_location_from_coordinates_BANG_(var_args){
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
return placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.effects.invoke,new cljs.core.Keyword(null,"resolve-update-location-from-coordinates!","resolve-update-location-from-coordinates!",-887382291),args);
}));

(placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.app_ui.effects.resolve_update_location_from_coordinates_BANG_.cljs$lang$applyTo = (function (seq21825){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21825));
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
(placesurfer.app_ui.effects.reload_update_dataset_BANG_.cljs$lang$applyTo = (function (seq21840){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21840));
}));

placesurfer.app_ui.effects.sync_update_map_BANG_ = (function placesurfer$app_ui$effects$sync_update_map_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21893 = arguments.length;
var i__5750__auto___21895 = (0);
while(true){
if((i__5750__auto___21895 < len__5749__auto___21893)){
args__5755__auto__.push((arguments[i__5750__auto___21895]));

var G__21897 = (i__5750__auto___21895 + (1));
i__5750__auto___21895 = G__21897;
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
(placesurfer.app_ui.effects.sync_update_map_BANG_.cljs$lang$applyTo = (function (seq21841){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21841));
}));

placesurfer.app_ui.effects.load_topic_positions_BANG_ = (function placesurfer$app_ui$effects$load_topic_positions_BANG_(topic){
return placesurfer.app_ui.effects.invoke.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"load-topic-positions!","load-topic-positions!",-1656731853),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([topic], 0));
});
placesurfer.app_ui.effects.schedule_update_map_pin_sync_BANG_ = (function placesurfer$app_ui$effects$schedule_update_map_pin_sync_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21901 = arguments.length;
var i__5750__auto___21902 = (0);
while(true){
if((i__5750__auto___21902 < len__5749__auto___21901)){
args__5755__auto__.push((arguments[i__5750__auto___21902]));

var G__21903 = (i__5750__auto___21902 + (1));
i__5750__auto___21902 = G__21903;
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
(placesurfer.app_ui.effects.schedule_update_map_pin_sync_BANG_.cljs$lang$applyTo = (function (seq21849){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21849));
}));

placesurfer.app_ui.effects.schedule_center_on_position_BANG_ = (function placesurfer$app_ui$effects$schedule_center_on_position_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21906 = arguments.length;
var i__5750__auto___21907 = (0);
while(true){
if((i__5750__auto___21907 < len__5749__auto___21906)){
args__5755__auto__.push((arguments[i__5750__auto___21907]));

var G__21909 = (i__5750__auto___21907 + (1));
i__5750__auto___21907 = G__21909;
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
(placesurfer.app_ui.effects.schedule_center_on_position_BANG_.cljs$lang$applyTo = (function (seq21853){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21853));
}));

placesurfer.app_ui.effects.schedule_map_resize_BANG_ = (function placesurfer$app_ui$effects$schedule_map_resize_BANG_(){
return placesurfer.app_ui.effects.invoke(new cljs.core.Keyword(null,"schedule-map-resize!","schedule-map-resize!",-472131251));
});
placesurfer.app_ui.effects.sync_main_map_BANG_ = (function placesurfer$app_ui$effects$sync_main_map_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21917 = arguments.length;
var i__5750__auto___21918 = (0);
while(true){
if((i__5750__auto___21918 < len__5749__auto___21917)){
args__5755__auto__.push((arguments[i__5750__auto___21918]));

var G__21919 = (i__5750__auto___21918 + (1));
i__5750__auto___21918 = G__21919;
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
(placesurfer.app_ui.effects.sync_main_map_BANG_.cljs$lang$applyTo = (function (seq21854){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21854));
}));

placesurfer.app_ui.effects.check_backend_BANG_ = (function placesurfer$app_ui$effects$check_backend_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21922 = arguments.length;
var i__5750__auto___21924 = (0);
while(true){
if((i__5750__auto___21924 < len__5749__auto___21922)){
args__5755__auto__.push((arguments[i__5750__auto___21924]));

var G__21927 = (i__5750__auto___21924 + (1));
i__5750__auto___21924 = G__21927;
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
(placesurfer.app_ui.effects.check_backend_BANG_.cljs$lang$applyTo = (function (seq21855){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21855));
}));

placesurfer.app_ui.effects.track_page_BANG_ = (function placesurfer$app_ui$effects$track_page_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21939 = arguments.length;
var i__5750__auto___21940 = (0);
while(true){
if((i__5750__auto___21940 < len__5749__auto___21939)){
args__5755__auto__.push((arguments[i__5750__auto___21940]));

var G__21942 = (i__5750__auto___21940 + (1));
i__5750__auto___21940 = G__21942;
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
(placesurfer.app_ui.effects.track_page_BANG_.cljs$lang$applyTo = (function (seq21857){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21857));
}));

placesurfer.app_ui.effects.set_update_topic_BANG_ = (function placesurfer$app_ui$effects$set_update_topic_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21956 = arguments.length;
var i__5750__auto___21957 = (0);
while(true){
if((i__5750__auto___21957 < len__5749__auto___21956)){
args__5755__auto__.push((arguments[i__5750__auto___21957]));

var G__21958 = (i__5750__auto___21957 + (1));
i__5750__auto___21957 = G__21958;
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
(placesurfer.app_ui.effects.set_update_topic_BANG_.cljs$lang$applyTo = (function (seq21858){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21858));
}));

placesurfer.app_ui.effects.run_in_update_pins_mode_BANG_ = (function placesurfer$app_ui$effects$run_in_update_pins_mode_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21959 = arguments.length;
var i__5750__auto___21960 = (0);
while(true){
if((i__5750__auto___21960 < len__5749__auto___21959)){
args__5755__auto__.push((arguments[i__5750__auto___21960]));

var G__21963 = (i__5750__auto___21960 + (1));
i__5750__auto___21960 = G__21963;
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
(placesurfer.app_ui.effects.run_in_update_pins_mode_BANG_.cljs$lang$applyTo = (function (seq21861){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21861));
}));


//# sourceMappingURL=placesurfer.app_ui.effects.js.map
