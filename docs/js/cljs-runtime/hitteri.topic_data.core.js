goog.provide('hitteri.topic_data.core');
hitteri.topic_data.core.countries_url = "data/world-countries.edn";
hitteri.topic_data.core.topics = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"discgolf","discgolf",416907656),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Disc golf courses",new cljs.core.Keyword(null,"marker-url","marker-url",153262178),"data/discgolf/marker.png",new cljs.core.Keyword(null,"counts-url","counts-url",419801538),"data/discgolf/course-counts.edn",new cljs.core.Keyword(null,"gis-prefix","gis-prefix",-650127745),"data/discgolf/gis/"], null),new cljs.core.Keyword(null,"art","art",335378089),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Art galleries and museums",new cljs.core.Keyword(null,"marker-url","marker-url",153262178),"data/art/marker.png",new cljs.core.Keyword(null,"counts-url","counts-url",419801538),"data/art/place-counts.edn",new cljs.core.Keyword(null,"gis-prefix","gis-prefix",-650127745),"data/art/gis/"], null)], null);
hitteri.topic_data.core.default_active_topics = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"discgolf","discgolf",416907656),null,new cljs.core.Keyword(null,"art","art",335378089),null], null), null);
hitteri.topic_data.core.topic_keys = (function hitteri$topic_data$core$topic_keys(){
return cljs.core.keys(hitteri.topic_data.core.topics);
});
hitteri.topic_data.core.topic_label = (function hitteri$topic_data$core$topic_label(topic){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((hitteri.topic_data.core.topics.cljs$core$IFn$_invoke$arity$1 ? hitteri.topic_data.core.topics.cljs$core$IFn$_invoke$arity$1(topic) : hitteri.topic_data.core.topics.call(null,topic)));
});
hitteri.topic_data.core.topic_marker_url = (function hitteri$topic_data$core$topic_marker_url(topic){
return new cljs.core.Keyword(null,"marker-url","marker-url",153262178).cljs$core$IFn$_invoke$arity$1((hitteri.topic_data.core.topics.cljs$core$IFn$_invoke$arity$1 ? hitteri.topic_data.core.topics.cljs$core$IFn$_invoke$arity$1(topic) : hitteri.topic_data.core.topics.call(null,topic)));
});
hitteri.topic_data.core.gis_url = (function hitteri$topic_data$core$gis_url(topic,slug){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gis-prefix","gis-prefix",-650127745).cljs$core$IFn$_invoke$arity$1((hitteri.topic_data.core.topics.cljs$core$IFn$_invoke$arity$1 ? hitteri.topic_data.core.topics.cljs$core$IFn$_invoke$arity$1(topic) : hitteri.topic_data.core.topics.call(null,topic)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),".edn"].join('');
});
hitteri.topic_data.core.parse_edn = (function hitteri$topic_data$core$parse_edn(text,topic){
var data = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(text);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23152_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23152_SHARP_,new cljs.core.Keyword(null,"topic","topic",-1960480691),topic);
}),new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(data))], null);
});
hitteri.topic_data.core.fetch_text_BANG_ = (function hitteri$topic_data$core$fetch_text_BANG_(url){
return fetch(url).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.text();
} else {
return Promise.reject((new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),", status ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp.status)].join(''))));
}
}));
});
hitteri.topic_data.core.fetch_counts_BANG_ = (function hitteri$topic_data$core$fetch_counts_BANG_(topic){
var url = new cljs.core.Keyword(null,"counts-url","counts-url",419801538).cljs$core$IFn$_invoke$arity$1((hitteri.topic_data.core.topics.cljs$core$IFn$_invoke$arity$1 ? hitteri.topic_data.core.topics.cljs$core$IFn$_invoke$arity$1(topic) : hitteri.topic_data.core.topics.call(null,topic)));
return hitteri.topic_data.core.fetch_text_BANG_(url).then((function (p1__23163_SHARP_){
return Promise.resolve(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__23163_SHARP_));
})).catch((function (_){
return Promise.resolve(cljs.core.PersistentArrayMap.EMPTY);
}));
});
hitteri.topic_data.core.load_topic_country_BANG_ = (function hitteri$topic_data$core$load_topic_country_BANG_(topic,slug){
var url = hitteri.topic_data.core.gis_url(topic,slug);
return fetch(url).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.text().then((function (p1__23175_SHARP_){
return hitteri.topic_data.core.parse_edn(p1__23175_SHARP_,topic);
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),resp.status)){
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"country","country",312965309),slug,new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY], null));
} else {
return Promise.reject((new Error(["Failed to load ",url,", status ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp.status)].join(''))));

}
}
})).catch((function (_){
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"country","country",312965309),slug,new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY], null));
}));
});
hitteri.topic_data.core.sum_counts = (function hitteri$topic_data$core$sum_counts(count_maps,slug,active_topics){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23188_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((count_maps.cljs$core$IFn$_invoke$arity$1 ? count_maps.cljs$core$IFn$_invoke$arity$1(p1__23188_SHARP_) : count_maps.call(null,p1__23188_SHARP_)),slug,(0));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(active_topics,cljs.core.keys(hitteri.topic_data.core.topics))));
});
hitteri.topic_data.core.merge_country_counts = (function hitteri$topic_data$core$merge_country_counts(countries,count_maps,active_topics){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23194_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23194_SHARP_,new cljs.core.Keyword(null,"count","count",2139924085),hitteri.topic_data.core.sum_counts(count_maps,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__23194_SHARP_),active_topics));
}),countries);
});
hitteri.topic_data.core.load_countries_BANG_ = (function hitteri$topic_data$core$load_countries_BANG_(active_topics){
var topics_to_load = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(active_topics,cljs.core.keys(hitteri.topic_data.core.topics)));
return hitteri.topic_data.core.fetch_text_BANG_(hitteri.topic_data.core.countries_url).then((function (countries_text){
var countries = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(countries_text);
if(cljs.core.empty_QMARK_(topics_to_load)){
return Promise.resolve(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),countries));
} else {
return Promise.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hitteri.topic_data.core.fetch_counts_BANG_,topics_to_load)).then((function (count_maps){
return Promise.resolve(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),hitteri.topic_data.core.merge_country_counts(countries,cljs.core.zipmap(topics_to_load,count_maps),active_topics)));
}));
}
}));
});
hitteri.topic_data.core.load_country_topics_BANG_ = (function hitteri$topic_data$core$load_country_topics_BANG_(slug,active_topics){
var topics_to_load = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(active_topics,cljs.core.keys(hitteri.topic_data.core.topics)));
if(cljs.core.empty_QMARK_(topics_to_load)){
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY], null));
} else {
return Promise.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23224_SHARP_){
return hitteri.topic_data.core.load_topic_country_BANG_(p1__23224_SHARP_,slug);
}),topics_to_load)).then((function (results){
var positions = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
var count = cljs.core.count(positions);
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),count,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions], null));
}));
}
});

//# sourceMappingURL=hitteri.topic_data.core.js.map
