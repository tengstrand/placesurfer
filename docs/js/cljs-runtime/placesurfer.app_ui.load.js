goog.provide('placesurfer.app_ui.load');
placesurfer.app_ui.load.locale = (function placesurfer$app_ui$load$locale(s){
return new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"en","en",88457073));
});
placesurfer.app_ui.load.t_for = (function placesurfer$app_ui$load$t_for(var_args){
var G__40294 = arguments.length;
switch (G__40294) {
case 2:
return placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$2 = (function (s,key){
return placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$3(s,key,cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$3 = (function (s,key,params){
return placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.app_ui.load.locale(s),key,params], 0));
}));

(placesurfer.app_ui.load.t_for.cljs$lang$maxFixedArity = 3);

placesurfer.app_ui.load.positions_for_topic_QMARK_ = (function placesurfer$app_ui$load$positions_for_topic_QMARK_(positions,topic){
return cljs.core.boolean$(cljs.core.some((function (p1__40295_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__40295_SHARP_));
}),positions));
});
placesurfer.app_ui.load.missing_active_topics = (function placesurfer$app_ui$load$missing_active_topics(active_topics,positions){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40296_SHARP_){
return placesurfer.app_ui.load.positions_for_topic_QMARK_(positions,p1__40296_SHARP_);
}),active_topics));
});
placesurfer.app_ui.load.coords_in_slug_bounds_QMARK_ = (function placesurfer$app_ui$load$coords_in_slug_bounds_QMARK_(lon,lat,slug,countries){
var temp__5823__auto__ = placesurfer.country.interface$.country_bounds_for_slug(slug,countries);
if(cljs.core.truth_(temp__5823__auto__)){
var map__40299 = temp__5823__auto__;
var map__40299__$1 = cljs.core.__destructure_map(map__40299);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40299__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40299__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40299__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40299__$1,new cljs.core.Keyword(null,"north","north",651323902));
return ((typeof lon === 'number') && (((typeof lat === 'number') && ((((((west <= lon)) && ((lon <= east)))) && ((((south <= lat)) && ((lat <= north)))))))));
} else {
return true;
}
});
placesurfer.app_ui.load.pin_in_slug_country_QMARK_ = (function placesurfer$app_ui$load$pin_in_slug_country_QMARK_(pin,slug,countries){
if(cljs.core.truth_(pin)){
return placesurfer.app_ui.load.coords_in_slug_bounds_QMARK_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(pin),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(pin),slug,countries);
} else {
return null;
}
});
placesurfer.app_ui.load.clear_pin_selection_outside_slug = (function placesurfer$app_ui$load$clear_pin_selection_outside_slug(s,slug){
var temp__5823__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
var pin = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40301_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__40301_SHARP_));
}),new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s)));
if(cljs.core.truth_(placesurfer.app_ui.load.pin_in_slug_country_QMARK_(pin,slug,new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s)))){
return s;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),null);
}
} else {
return s;
}
});
placesurfer.app_ui.load.merge_topic_positions_BANG_ = (function placesurfer$app_ui$load$merge_topic_positions_BANG_(topic,positions){
var merged = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40302_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__40302_SHARP_));
}),new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))),cljs.core.vec(positions));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"positions","positions",-1380538434),merged,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(merged)], 0));

placesurfer.app_ui.interface$.effects.render_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
return placesurfer.app_ui.interface$.effects.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));
} else {
return placesurfer.app_ui.interface$.effects.sync_main_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fit?","fit?",1773758200),false,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),false], null)], 0));
}
});
placesurfer.app_ui.load.country_label_for_state = (function placesurfer$app_ui$load$country_label_for_state(s){
var or__5025__auto__ = placesurfer.country.interface$.country_label(new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "";
}
}
});
placesurfer.app_ui.load.empty_topics_status = (function placesurfer$app_ui$load$empty_topics_status(s){
return placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("load","no-places","load/no-places",-1347500165),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),placesurfer.app_ui.load.country_label_for_state(s)], null));
});
placesurfer.app_ui.load.set_error_BANG_ = (function placesurfer$app_ui$load$set_error_BANG_(message){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"country-loading?","country-loading?",-144475327),false,new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252),cljs.core.PersistentHashSet.EMPTY], 0));

placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.app_ui.interface$.effects.sync_main_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fit?","fit?",1773758200),false], null)], 0));
});
placesurfer.app_ui.load.handle_country_data_BANG_ = (function placesurfer$app_ui$load$handle_country_data_BANG_(load_id,slug,label,fit_QMARK_,animate_QMARK_,p__40305){
var map__40306 = p__40305;
var map__40306__$1 = cljs.core.__destructure_map(map__40306);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40306__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(load_id,cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_load_id))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slug,new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))))){
var active = new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
var positions__$1 = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40304_SHARP_){
return cljs.core.contains_QMARK_(active,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__40304_SHARP_));
}),positions));
var n = cljs.core.count(positions__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),(((n > (0)))?placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),new cljs.core.Keyword("load","loaded","load/loaded",-1251414611),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)):placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),new cljs.core.Keyword("load","no-places","load/no-places",-1347500165),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),label], null))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"count","count",2139924085),n,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions__$1,new cljs.core.Keyword(null,"country-loading?","country-loading?",-144475327),false,new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252),cljs.core.PersistentHashSet.EMPTY], 0));

(window.placesurferBoot = ["ready:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

placesurfer.app_ui.interface$.effects.render_BANG_();

var fit_bounds = (cljs.core.truth_((function (){var and__5023__auto__ = fit_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (n === (0));
} else {
return and__5023__auto__;
}
})())?placesurfer.country.interface$.country_bounds_for_slug(slug,new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))):null);
return placesurfer.app_ui.interface$.effects.sync_main_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fit?","fit?",1773758200),(((n > (0))) || ((!((fit_bounds == null))))),new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),fit_bounds,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null)], 0));
} else {
return null;
}
});
placesurfer.app_ui.load.load_country_BANG_ = (function placesurfer$app_ui$load$load_country_BANG_(slug,p__40314){
var map__40315 = p__40314;
var map__40315__$1 = cljs.core.__destructure_map(map__40315);
var active_topics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40315__$1,new cljs.core.Keyword(null,"active-topics","active-topics",1278012558));
var indicator_topics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40315__$1,new cljs.core.Keyword(null,"indicator-topics","indicator-topics",-605996794));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40315__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200),false);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40315__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
var load_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_load_id,cljs.core.inc);
var active = cljs.core.set((function (){var or__5025__auto__ = active_topics;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
}
})());
var spinner_topics = cljs.core.set((function (){var or__5025__auto__ = indicator_topics;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return active;
}
})());
var label = (function (){var or__5025__auto__ = placesurfer.country.interface$.country_label(slug,new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return slug;
}
})();
placesurfer.browser_storage.interface$.save_country_slug_BANG_(slug);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
return placesurfer.app_ui.load.clear_pin_selection_outside_slug(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"status","status",-1997798413),placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("load","loading","load/loading",-731857971),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"country-slug","country-slug",769681844),slug,new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117),(function (){var or__5025__auto__ = placesurfer.country.interface$.iso_for_slug(slug,new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117).cljs$core$IFn$_invoke$arity$1(s);
}
})(),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"country-loading?","country-loading?",-144475327),true,new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252),cljs.core.PersistentHashSet.EMPTY], 0)),slug);
}));

placesurfer.app_ui.interface$.effects.render_BANG_();

var fit_bounds_40420 = (cljs.core.truth_(fit_QMARK_)?placesurfer.country.interface$.country_bounds_for_slug(slug,new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))):null);
placesurfer.app_ui.interface$.effects.sync_main_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fit?","fit?",1773758200),(!((fit_bounds_40420 == null))),new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),fit_bounds_40420,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null)], 0));

if(cljs.core.empty_QMARK_(active)){
var fit_bounds = (cljs.core.truth_(fit_QMARK_)?placesurfer.country.interface$.country_bounds_for_slug(slug,new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))):null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),placesurfer.app_ui.load.empty_topics_status(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"country-loading?","country-loading?",-144475327),false,new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252),cljs.core.PersistentHashSet.EMPTY], 0));

placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.app_ui.interface$.effects.sync_main_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fit?","fit?",1773758200),(!((fit_bounds == null))),new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),fit_bounds,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null)], 0));
} else {
return placesurfer.topic.interface$.load_country_topics_with_progress_BANG_(slug,active,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-topic-started","on-topic-started",394707549),(function (loading_topic){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(load_id,cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_load_id))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slug,new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))) && (cljs.core.contains_QMARK_(spinner_topics,loading_topic)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.update,new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loading_topic], 0));

return placesurfer.app_ui.interface$.effects.render_BANG_();
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-topic-loaded","on-topic-loaded",1836923051),(function (loaded_topic,p__40337){
var map__40339 = p__40337;
var map__40339__$1 = cljs.core.__destructure_map(map__40339);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40339__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(load_id,cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_load_id))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slug,new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))) && (cljs.core.contains_QMARK_(active,loaded_topic)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.update,new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_topic], 0));

return placesurfer.app_ui.load.merge_topic_positions_BANG_(loaded_topic,positions);
} else {
return null;
}
})], null)).then((function (p1__40310_SHARP_){
return placesurfer.app_ui.load.handle_country_data_BANG_(load_id,slug,label,fit_QMARK_,animate_QMARK_,p1__40310_SHARP_);
})).catch((function (error){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(load_id,cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_load_id))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slug,new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))))){
return placesurfer.app_ui.load.set_error_BANG_(placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),new cljs.core.Keyword("load","error","load/error",-984916742),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null)));
} else {
return null;
}
}));
}
});
placesurfer.app_ui.load.load_countries_into_state_BANG_ = (function placesurfer$app_ui$load$load_countries_into_state_BANG_(){
var temp__5823__auto__ = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_countries_load_promise);
if(cljs.core.truth_(temp__5823__auto__)){
var in_flight = temp__5823__auto__;
return in_flight;
} else {
var request_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_countries_load_request_id,cljs.core.inc);
var active = new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"countries-loading?","countries-loading?",-1018911139),true);

placesurfer.app_ui.interface$.effects.render_BANG_();

var p = placesurfer.topic.interface$.load_countries_BANG_(active).then((function (countries){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_countries_load_request_id))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"countries","countries",863192750),countries,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"countries-loading?","countries-loading?",-1018911139),false], 0));

placesurfer.app_ui.interface$.effects.render_BANG_();

placesurfer.topic.interface$.enrich_countries_with_counts_BANG_(active,countries).then((function (enriched){
if(cljs.core.truth_((function (){var and__5023__auto__ = enriched;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_countries_load_request_id));
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"countries","countries",863192750),enriched);

return placesurfer.app_ui.interface$.effects.render_BANG_();
} else {
return null;
}
}));

return countries;
} else {
return Promise.resolve(null);
}
})).catch((function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_countries_load_request_id))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"countries-loading?","countries-loading?",-1018911139),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"status","status",-1997798413),placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),new cljs.core.Keyword("load","error","load/error",-984916742),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null))], 0));

placesurfer.app_ui.interface$.effects.render_BANG_();
} else {
}

return Promise.reject(error);
})).finally((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_countries_load_request_id))){
return cljs.core.reset_BANG_(placesurfer.app_ui.interface$.state._BANG_countries_load_promise,null);
} else {
return null;
}
}));
cljs.core.reset_BANG_(placesurfer.app_ui.interface$.state._BANG_countries_load_promise,p);

return p;
}
});
placesurfer.app_ui.load.reload_countries_BANG_ = (function placesurfer$app_ui$load$reload_countries_BANG_(){
cljs.core.reset_BANG_(placesurfer.app_ui.interface$.state._BANG_countries_load_promise,null);

return placesurfer.app_ui.load.load_countries_into_state_BANG_();
});
placesurfer.app_ui.load.ensure_countries_loaded_BANG_ = (function placesurfer$app_ui$load$ensure_countries_loaded_BANG_(){
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
return placesurfer.app_ui.load.load_countries_into_state_BANG_();
} else {
return null;
}
});
placesurfer.app_ui.load.remove_topic_positions_BANG_ = (function placesurfer$app_ui$load$remove_topic_positions_BANG_(topic){
var positions = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40345_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__40345_SHARP_));
}),new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(positions)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.update,new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([topic], 0));

placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.app_ui.interface$.effects.sync_main_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fit?","fit?",1773758200),false,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),false], null)], 0));
});
placesurfer.app_ui.load.load_topic_positions_BANG_ = (function placesurfer$app_ui$load$load_topic_positions_BANG_(topic){
var load_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_topic_load_ids,cljs.core.update,topic,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),topic);
var slug = new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.update,new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([topic], 0));

placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.topic.interface$.load_topic_country_BANG_(topic,slug).then((function (p__40346){
var map__40347 = p__40346;
var map__40347__$1 = cljs.core.__destructure_map(map__40347);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40347__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(load_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_topic_load_ids),topic))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slug,new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.update,new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([topic], 0));

return placesurfer.app_ui.load.merge_topic_positions_BANG_(topic,positions);
} else {
return null;
}
})).catch((function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(load_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_topic_load_ids),topic))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.update,new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([topic], 0));

return placesurfer.app_ui.load.set_error_BANG_(placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),new cljs.core.Keyword("load","error","load/error",-984916742),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null)));
} else {
return null;
}
}));
});
placesurfer.app_ui.load.ensure_active_topic_positions_BANG_ = (function placesurfer$app_ui$load$ensure_active_topic_positions_BANG_(){
var map__40349 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var map__40349__$1 = cljs.core.__destructure_map(map__40349);
var active_topics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40349__$1,new cljs.core.Keyword(null,"active-topics","active-topics",1278012558));
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40349__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
if(cljs.core.seq(active_topics)){
var seq__40350 = cljs.core.seq(placesurfer.app_ui.load.missing_active_topics(active_topics,positions));
var chunk__40351 = null;
var count__40352 = (0);
var i__40353 = (0);
while(true){
if((i__40353 < count__40352)){
var topic = chunk__40351.cljs$core$IIndexed$_nth$arity$2(null,i__40353);
placesurfer.app_ui.load.load_topic_positions_BANG_(topic);


var G__40433 = seq__40350;
var G__40434 = chunk__40351;
var G__40435 = count__40352;
var G__40436 = (i__40353 + (1));
seq__40350 = G__40433;
chunk__40351 = G__40434;
count__40352 = G__40435;
i__40353 = G__40436;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__40350);
if(temp__5825__auto__){
var seq__40350__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40350__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__40350__$1);
var G__40438 = cljs.core.chunk_rest(seq__40350__$1);
var G__40439 = c__5548__auto__;
var G__40440 = cljs.core.count(c__5548__auto__);
var G__40441 = (0);
seq__40350 = G__40438;
chunk__40351 = G__40439;
count__40352 = G__40440;
i__40353 = G__40441;
continue;
} else {
var topic = cljs.core.first(seq__40350__$1);
placesurfer.app_ui.load.load_topic_positions_BANG_(topic);


var G__40442 = cljs.core.next(seq__40350__$1);
var G__40443 = null;
var G__40444 = (0);
var G__40445 = (0);
seq__40350 = G__40442;
chunk__40351 = G__40443;
count__40352 = G__40444;
i__40353 = G__40445;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
placesurfer.app_ui.load.after_active_topics_change_BANG_ = (function placesurfer$app_ui$load$after_active_topics_change_BANG_(topic,active_QMARK_){
if(cljs.core.truth_(active_QMARK_)){
} else {
placesurfer.app_ui.load.remove_topic_positions_BANG_(topic);
}

return placesurfer.app_ui.load.reload_countries_BANG_().then((function (_){
if(cljs.core.truth_(active_QMARK_)){
return placesurfer.app_ui.load.load_topic_positions_BANG_(topic);
} else {
return null;
}
}));
});
placesurfer.app_ui.load.clear_topic_batch_sync_BANG_ = (function placesurfer$app_ui$load$clear_topic_batch_sync_BANG_(){
return (window.placesurferTopicBatchSync = false);
});
placesurfer.app_ui.load.set_topic_active_BANG_ = (function placesurfer$app_ui$load$set_topic_active_BANG_(topic,active_QMARK_){
(window.placesurferTopicBatchSync = true);

var next_active = (cljs.core.truth_(active_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))),topic):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))),topic));
placesurfer.browser_storage.interface$.save_active_topics_BANG_(next_active);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"active-topics","active-topics",1278012558),next_active);

placesurfer.app_ui.interface$.effects.render_BANG_();

if(cljs.core.empty_QMARK_(next_active)){
var positions = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40357_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__40357_SHARP_));
}),new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),placesurfer.app_ui.load.empty_topics_status(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(positions),new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,new cljs.core.Keyword(null,"country-loading?","country-loading?",-144475327),false,new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252),cljs.core.PersistentHashSet.EMPTY], 0));

placesurfer.app_ui.interface$.effects.sync_main_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fit?","fit?",1773758200),false,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),false], null)], 0));

placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.app_ui.load.reload_countries_BANG_().then((function (_){
placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.app_ui.load.clear_topic_batch_sync_BANG_();
})).catch((function (_){
return placesurfer.app_ui.load.clear_topic_batch_sync_BANG_();
}));
} else {
return placesurfer.app_ui.load.after_active_topics_change_BANG_(topic,active_QMARK_).then((function (_){
placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.app_ui.load.clear_topic_batch_sync_BANG_();
})).catch((function (_){
return placesurfer.app_ui.load.clear_topic_batch_sync_BANG_();
}));
}
});
placesurfer.app_ui.load.toggle_topic_BANG_ = (function placesurfer$app_ui$load$toggle_topic_BANG_(topic){
return placesurfer.app_ui.load.set_topic_active_BANG_(topic,(!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)),topic))));
});
placesurfer.app_ui.load.apply_url_page_BANG_ = (function placesurfer$app_ui$load$apply_url_page_BANG_(){
var temp__5825__auto__ = (function (){var or__5025__auto__ = placesurfer.browser_storage.interface$.read_page_from_url();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.browser_storage.interface$.read_saved_page();
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"pin","pin",-2111774834))){
return placesurfer.app_ui.interface$.effects.navigate_to_pin_BANG_();
} else {
return placesurfer.app_ui.interface$.effects.navigate_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page], 0));
}
} else {
return null;
}
});
placesurfer.app_ui.load.init_after_countries_loaded_BANG_ = (function placesurfer$app_ui$load$init_after_countries_loaded_BANG_(countries){
if(cljs.core.seq(countries)){
var countries__$1 = countries;
var active = new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
var iso = placesurfer.country.interface$.locale__GT_iso();
var cookie_slug = placesurfer.browser_storage.interface$.read_country_slug();
var slug = (function (){var or__5025__auto__ = (cljs.core.truth_(cljs.core.some((function (p1__40363_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cookie_slug,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__40363_SHARP_));
}),countries__$1))?cookie_slug:null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.country.interface$.slug_for_iso(iso,countries__$1);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "sweden";
}
}
})();
var resolved_iso = (function (){var or__5025__auto__ = placesurfer.country.interface$.iso_for_slug(slug,countries__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = iso;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "SE";
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"country-slug","country-slug",769681844),slug,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117),resolved_iso,new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722),resolved_iso], 0));

(window.placesurferBoot = "countries");

placesurfer.app_ui.interface$.effects.render_BANG_();

placesurfer.app_ui.interface$.effects.check_backend_BANG_();

if(cljs.core.seq(active)){
return placesurfer.app_ui.load.load_country_BANG_(slug,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fit?","fit?",1773758200),true,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),false], null)).then((function (_){
placesurfer.app_ui.load.ensure_active_topic_positions_BANG_();

return placesurfer.app_ui.load.apply_url_page_BANG_();
})).catch((function (error){
(window.placesurferBoot = "error");

return placesurfer.app_ui.load.set_error_BANG_(placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),new cljs.core.Keyword("load","error","load/error",-984916742),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null)));
}));
} else {
return placesurfer.app_ui.load.apply_url_page_BANG_();
}
} else {
return null;
}
});
placesurfer.app_ui.load.init_load_BANG_ = (function placesurfer$app_ui$load$init_load_BANG_(){
(window.placesurferBoot = "loading");

var url_topic = placesurfer.browser_storage.interface$.read_topic_from_url();
var url_page = placesurfer.browser_storage.interface$.read_page_from_url();
var active = (cljs.core.truth_(url_topic)?cljs.core.PersistentHashSet.createAsIfByAssoc([url_topic]):placesurfer.browser_storage.interface$.read_active_topics(placesurfer.app_ui.interface$.state.default_active_topics));
var default_page = ((cljs.core.empty_QMARK_(active))?new cljs.core.Keyword(null,"topic","topic",-1960480691):new cljs.core.Keyword(null,"home","home",-74557309));
var initial_page = (function (){var or__5025__auto__ = url_page;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.browser_storage.interface$.read_saved_page();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return default_page;
}
}
})();
if(cljs.core.truth_(url_topic)){
placesurfer.browser_storage.interface$.save_active_topics_BANG_(active);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"active-topics","active-topics",1278012558),active,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page","page",849072397),initial_page], 0));

placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.app_ui.load.load_countries_into_state_BANG_().then(placesurfer.app_ui.load.init_after_countries_loaded_BANG_).catch((function (error){
(window.placesurferBoot = "error");

return placesurfer.app_ui.load.set_error_BANG_(placesurfer.app_ui.load.t_for.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),new cljs.core.Keyword("load","error","load/error",-984916742),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null)));
}));
});

//# sourceMappingURL=placesurfer.app_ui.load.js.map
