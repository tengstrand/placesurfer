goog.provide('placesurfer.load.gis');
placesurfer.load.gis.countries_url = "data/world-countries.edn";
placesurfer.load.gis.ensure_position_description = (function placesurfer$load$gis$ensure_position_description(position){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(position,new cljs.core.Keyword(null,"description","description",-1428560544),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())));
});
placesurfer.load.gis.ensure_position_image = (function placesurfer$load$gis$ensure_position_image(position){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(position,new cljs.core.Keyword(null,"image","image",-58725096),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())));
});
placesurfer.load.gis.parse_edn = (function placesurfer$load$gis$parse_edn(text){
var data = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(text);
var positions = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (position){
return placesurfer.load.gis.ensure_position_description(placesurfer.load.gis.ensure_position_image(position));
}),new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(data));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"positions","positions",-1380538434),positions], null);
});
placesurfer.load.gis.fetch_text_BANG_ = (function placesurfer$load$gis$fetch_text_BANG_(url){
return fetch(url).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.text();
} else {
return Promise.reject((new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),", status ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp.status)].join(''))));
}
}));
});
placesurfer.load.gis.merge_country_counts = (function placesurfer$load$gis$merge_country_counts(countries,counts_by_slug){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38723_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38723_SHARP_,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts_by_slug,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__38723_SHARP_),(0)));
}),countries);
});
placesurfer.load.gis.load_counts_BANG_ = (function placesurfer$load$gis$load_counts_BANG_(counts_url){
return placesurfer.load.gis.fetch_text_BANG_(counts_url).then((function (p1__38724_SHARP_){
return Promise.resolve(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__38724_SHARP_));
})).catch((function (_){
return Promise.resolve(cljs.core.PersistentArrayMap.EMPTY);
}));
});
placesurfer.load.gis.load_countries_BANG_ = (function placesurfer$load$gis$load_countries_BANG_(counts_url){
return Promise.all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.load.gis.fetch_text_BANG_(placesurfer.load.gis.countries_url),placesurfer.load.gis.load_counts_BANG_(counts_url)], null)).then((function (p__38725){
var vec__38726 = p__38725;
var countries_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38726,(0),null);
var counts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38726,(1),null);
var countries = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(countries_text);
return Promise.resolve(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),placesurfer.load.gis.merge_country_counts(countries,counts)));
}));
});
placesurfer.load.gis.load_country_BANG_ = (function placesurfer$load$gis$load_country_BANG_(gis_url_fn,slug){
return fetch((gis_url_fn.cljs$core$IFn$_invoke$arity$1 ? gis_url_fn.cljs$core$IFn$_invoke$arity$1(slug) : gis_url_fn.call(null,slug))).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.text().then(placesurfer.load.gis.parse_edn);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),resp.status)){
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"country","country",312965309),slug,new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY], null));
} else {
return Promise.reject((new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((gis_url_fn.cljs$core$IFn$_invoke$arity$1 ? gis_url_fn.cljs$core$IFn$_invoke$arity$1(slug) : gis_url_fn.call(null,slug))),", status ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp.status)].join(''))));

}
}
}));
});

//# sourceMappingURL=placesurfer.load.gis.js.map
