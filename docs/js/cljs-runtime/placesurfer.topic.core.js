goog.provide('placesurfer.topic.core');
placesurfer.topic.core.countries_url = "data/world-countries.edn";
placesurfer.topic.core.country_bounds_url = "data/country-bounds.edn";
placesurfer.topic.core.country_pick_bounds_url = "data/country-pick-bounds.edn";
placesurfer.topic.core.topics = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"discgolf","discgolf",416907656),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Discgolf courses",new cljs.core.Keyword(null,"marker-url","marker-url",153262178),"/images/marker/discgolf.png",new cljs.core.Keyword(null,"count-loader","count-loader",2098845557),placesurfer.load.interface$.discgolf.load_counts_BANG_,new cljs.core.Keyword(null,"country-loader","country-loader",-1848664948),placesurfer.load.interface$.discgolf.load_country_BANG_], null),new cljs.core.Keyword(null,"art","art",335378089),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Museums and art galleries",new cljs.core.Keyword(null,"marker-url","marker-url",153262178),"/images/marker/art.png",new cljs.core.Keyword(null,"count-loader","count-loader",2098845557),placesurfer.load.interface$.art.load_counts_BANG_,new cljs.core.Keyword(null,"country-loader","country-loader",-1848664948),placesurfer.load.interface$.art.load_country_BANG_], null),new cljs.core.Keyword(null,"table-tennis","table-tennis",346499385),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Table tennis clubs",new cljs.core.Keyword(null,"marker-url","marker-url",153262178),"/images/marker/table-tennis.png",new cljs.core.Keyword(null,"count-loader","count-loader",2098845557),placesurfer.load.interface$.table_tennis.load_counts_BANG_,new cljs.core.Keyword(null,"country-loader","country-loader",-1848664948),placesurfer.load.interface$.table_tennis.load_country_BANG_], null)], null);
placesurfer.topic.core.default_active_topics = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"discgolf","discgolf",416907656),null,new cljs.core.Keyword(null,"art","art",335378089),null], null), null);
placesurfer.topic.core.topic_keys = (function placesurfer$topic$core$topic_keys(){
return cljs.core.keys(placesurfer.topic.core.topics);
});
placesurfer.topic.core.topic_label = (function placesurfer$topic$core$topic_label(topic){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((placesurfer.topic.core.topics.cljs$core$IFn$_invoke$arity$1 ? placesurfer.topic.core.topics.cljs$core$IFn$_invoke$arity$1(topic) : placesurfer.topic.core.topics.call(null,topic)));
});
placesurfer.topic.core.topic_marker_url = (function placesurfer$topic$core$topic_marker_url(topic){
return new cljs.core.Keyword(null,"marker-url","marker-url",153262178).cljs$core$IFn$_invoke$arity$1((placesurfer.topic.core.topics.cljs$core$IFn$_invoke$arity$1 ? placesurfer.topic.core.topics.cljs$core$IFn$_invoke$arity$1(topic) : placesurfer.topic.core.topics.call(null,topic)));
});
placesurfer.topic.core.fetch_text_BANG_ = (function placesurfer$topic$core$fetch_text_BANG_(url){
return fetch(url).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.text();
} else {
return Promise.reject((new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),", status ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp.status)].join(''))));
}
}));
});
placesurfer.topic.core.fetch_counts_BANG_ = (function placesurfer$topic$core$fetch_counts_BANG_(topic){
var temp__5823__auto__ = new cljs.core.Keyword(null,"count-loader","count-loader",2098845557).cljs$core$IFn$_invoke$arity$1((placesurfer.topic.core.topics.cljs$core$IFn$_invoke$arity$1 ? placesurfer.topic.core.topics.cljs$core$IFn$_invoke$arity$1(topic) : placesurfer.topic.core.topics.call(null,topic)));
if(cljs.core.truth_(temp__5823__auto__)){
var loader = temp__5823__auto__;
return (loader.cljs$core$IFn$_invoke$arity$0 ? loader.cljs$core$IFn$_invoke$arity$0() : loader.call(null));
} else {
return Promise.resolve(cljs.core.PersistentArrayMap.EMPTY);
}
});
placesurfer.topic.core.disk_deleted_browse_position_QMARK_ = (function placesurfer$topic$core$disk_deleted_browse_position_QMARK_(position){
var action = (function (){var G__38729 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(position);
if((G__38729 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__38729);
}
})();
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null], null), null),action);
});
placesurfer.topic.core.browse_map_positions = (function placesurfer$topic$core$browse_map_positions(positions){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(placesurfer.topic.core.disk_deleted_browse_position_QMARK_,positions));
});
placesurfer.topic.core.load_topic_country_BANG_ = (function placesurfer$topic$core$load_topic_country_BANG_(topic,slug){
var temp__5823__auto__ = new cljs.core.Keyword(null,"country-loader","country-loader",-1848664948).cljs$core$IFn$_invoke$arity$1((placesurfer.topic.core.topics.cljs$core$IFn$_invoke$arity$1 ? placesurfer.topic.core.topics.cljs$core$IFn$_invoke$arity$1(topic) : placesurfer.topic.core.topics.call(null,topic)));
if(cljs.core.truth_(temp__5823__auto__)){
var loader = temp__5823__auto__;
return (loader.cljs$core$IFn$_invoke$arity$1 ? loader.cljs$core$IFn$_invoke$arity$1(slug) : loader.call(null,slug)).then((function (p__38731){
var map__38732 = p__38731;
var map__38732__$1 = cljs.core.__destructure_map(map__38732);
var country = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38732__$1,new cljs.core.Keyword(null,"country","country",312965309));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38732__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38732__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"country","country",312965309),country,new cljs.core.Keyword(null,"count","count",2139924085),count,new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38730_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38730_SHARP_,new cljs.core.Keyword(null,"topic","topic",-1960480691),topic);
}),placesurfer.topic.core.browse_map_positions(positions))], null));
})).catch((function (_){
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"country","country",312965309),slug,new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY], null));
}));
} else {
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"country","country",312965309),slug,new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY], null));
}
});
placesurfer.topic.core.topics_to_load = (function placesurfer$topic$core$topics_to_load(active_topics){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__38733_SHARP_){
if(cljs.core.contains_QMARK_(active_topics,p1__38733_SHARP_)){
return p1__38733_SHARP_;
} else {
return null;
}
}),cljs.core.keys(placesurfer.topic.core.topics)));
});
placesurfer.topic.core.sum_counts = (function placesurfer$topic$core$sum_counts(count_maps,slug,active_topics){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38734_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((count_maps.cljs$core$IFn$_invoke$arity$1 ? count_maps.cljs$core$IFn$_invoke$arity$1(p1__38734_SHARP_) : count_maps.call(null,p1__38734_SHARP_)),slug,(0));
}),placesurfer.topic.core.topics_to_load(active_topics)));
});
placesurfer.topic.core.merge_country_counts = (function placesurfer$topic$core$merge_country_counts(countries,count_maps,active_topics){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38735_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38735_SHARP_,new cljs.core.Keyword(null,"count","count",2139924085),placesurfer.topic.core.sum_counts(count_maps,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__38735_SHARP_),active_topics));
}),countries);
});
placesurfer.topic.core.parse_countries = (function placesurfer$topic$core$parse_countries(countries_text){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(countries_text));
});
placesurfer.topic.core.merge_country_bounds = (function placesurfer$topic$core$merge_country_bounds(countries,bounds_text){
var bounds = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(bounds_text);
var by_iso = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iso","iso",-1366207543),cljs.core.identity),bounds));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (country){
var temp__5823__auto__ = (function (){var G__38736 = new cljs.core.Keyword(null,"iso","iso",-1366207543).cljs$core$IFn$_invoke$arity$1(country);
return (by_iso.cljs$core$IFn$_invoke$arity$1 ? by_iso.cljs$core$IFn$_invoke$arity$1(G__38736) : by_iso.call(null,G__38736));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var map__38737 = temp__5823__auto__;
var map__38737__$1 = cljs.core.__destructure_map(map__38737);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38737__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38737__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38737__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38737__$1,new cljs.core.Keyword(null,"north","north",651323902));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(country,new cljs.core.Keyword(null,"west","west",708776677),west,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"east","east",1189821678),east,new cljs.core.Keyword(null,"south","south",1586796293),south,new cljs.core.Keyword(null,"north","north",651323902),north], 0));
} else {
return country;
}
}),countries);
});
placesurfer.topic.core.merge_country_pick_bounds = (function placesurfer$topic$core$merge_country_pick_bounds(countries,pick_bounds_text){
var bounds = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(pick_bounds_text);
var by_iso = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iso","iso",-1366207543),cljs.core.identity),bounds));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (country){
var temp__5823__auto__ = (function (){var G__38738 = new cljs.core.Keyword(null,"iso","iso",-1366207543).cljs$core$IFn$_invoke$arity$1(country);
return (by_iso.cljs$core$IFn$_invoke$arity$1 ? by_iso.cljs$core$IFn$_invoke$arity$1(G__38738) : by_iso.call(null,G__38738));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var map__38739 = temp__5823__auto__;
var map__38739__$1 = cljs.core.__destructure_map(map__38739);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38739__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38739__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38739__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38739__$1,new cljs.core.Keyword(null,"north","north",651323902));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(country,new cljs.core.Keyword(null,"pick-west","pick-west",122255929),west,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pick-east","pick-east",2019488979),east,new cljs.core.Keyword(null,"pick-south","pick-south",2061199937),south,new cljs.core.Keyword(null,"pick-north","pick-north",-345667041),north], 0));
} else {
return country;
}
}),countries);
});
/**
 * Load the world country list. Does not wait on per-topic count files, so the
 * sidebar can render immediately.
 */
placesurfer.topic.core.load_countries_BANG_ = (function placesurfer$topic$core$load_countries_BANG_(_active_topics){
return Promise.all(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.topic.core.fetch_text_BANG_(placesurfer.topic.core.countries_url),placesurfer.topic.core.fetch_text_BANG_(placesurfer.topic.core.country_bounds_url).catch((function (_){
return null;
})),placesurfer.topic.core.fetch_text_BANG_(placesurfer.topic.core.country_pick_bounds_url).catch((function (_){
return null;
}))], null)).then((function (p__38740){
var vec__38741 = p__38740;
var countries_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38741,(0),null);
var bounds_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38741,(1),null);
var pick_bounds_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38741,(2),null);
var countries = placesurfer.topic.core.parse_countries(countries_text);
var with_bounds = (cljs.core.truth_(bounds_text)?placesurfer.topic.core.merge_country_bounds(countries,bounds_text):countries);
if(cljs.core.truth_(pick_bounds_text)){
return placesurfer.topic.core.merge_country_pick_bounds(with_bounds,pick_bounds_text);
} else {
return with_bounds;
}
}));
});
/**
 * Optional: merge topic course/place counts into an existing country list.
 * Never rejects — returns the original list on failure.
 */
placesurfer.topic.core.enrich_countries_with_counts_BANG_ = (function placesurfer$topic$core$enrich_countries_with_counts_BANG_(active_topics,countries){
var topics_to_load = placesurfer.topic.core.topics_to_load(active_topics);
if(cljs.core.empty_QMARK_(topics_to_load)){
return Promise.resolve(countries);
} else {
return Promise.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(placesurfer.topic.core.fetch_counts_BANG_,topics_to_load)).then((function (count_maps){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),placesurfer.topic.core.merge_country_counts(countries,cljs.core.zipmap(topics_to_load,count_maps),active_topics));
})).catch((function (_){
return Promise.resolve(countries);
}));
}
});
placesurfer.topic.core.load_country_topics_BANG_ = (function placesurfer$topic$core$load_country_topics_BANG_(slug,active_topics){
var topics_to_load = placesurfer.topic.core.topics_to_load(active_topics);
if(cljs.core.empty_QMARK_(topics_to_load)){
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY], null));
} else {
return Promise.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38744_SHARP_){
return placesurfer.topic.core.load_topic_country_BANG_(p1__38744_SHARP_,slug);
}),topics_to_load)).then((function (results){
var positions = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
var count = cljs.core.count(positions);
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),count,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions], null));
}));
}
});
placesurfer.topic.core.load_country_topics_with_progress_BANG_ = (function placesurfer$topic$core$load_country_topics_with_progress_BANG_(slug,active_topics,p__38745){
var map__38746 = p__38745;
var map__38746__$1 = cljs.core.__destructure_map(map__38746);
var on_topic_started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38746__$1,new cljs.core.Keyword(null,"on-topic-started","on-topic-started",394707549));
var on_topic_loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38746__$1,new cljs.core.Keyword(null,"on-topic-loaded","on-topic-loaded",1836923051));
var topics_to_load = placesurfer.topic.core.topics_to_load(active_topics);
var started_BANG_ = (function (){var or__5025__auto__ = on_topic_started;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (function (_){
return null;
});
}
})();
var loaded_BANG_ = (function (){var or__5025__auto__ = on_topic_loaded;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (function (_,___$1){
return null;
});
}
})();
if(cljs.core.empty_QMARK_(topics_to_load)){
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY], null));
} else {
return Promise.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (topic){
(started_BANG_.cljs$core$IFn$_invoke$arity$1 ? started_BANG_.cljs$core$IFn$_invoke$arity$1(topic) : started_BANG_.call(null,topic));

return placesurfer.topic.core.load_topic_country_BANG_(topic,slug).then((function (result){
(loaded_BANG_.cljs$core$IFn$_invoke$arity$2 ? loaded_BANG_.cljs$core$IFn$_invoke$arity$2(topic,result) : loaded_BANG_.call(null,topic,result));

return Promise.resolve(result);
}));
}),topics_to_load)).then((function (results){
var positions = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
var count = cljs.core.count(positions);
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),count,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions], null));
}));
}
});

//# sourceMappingURL=placesurfer.topic.core.js.map
