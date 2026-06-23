goog.provide('hitteri.load_art.core');
hitteri.load_art.core.countries_url = "data/world-countries.edn";
hitteri.load_art.core.place_counts_url = "data/art/place-counts.edn";
hitteri.load_art.core.gis_url = (function hitteri$load_art$core$gis_url(slug){
return ["data/art/gis/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),".edn"].join('');
});
hitteri.load_art.core.parse_edn = (function hitteri$load_art$core$parse_edn(text){
var data = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(text);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(data)], null);
});
hitteri.load_art.core.fetch_text_BANG_ = (function hitteri$load_art$core$fetch_text_BANG_(url){
return fetch(url).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.text();
} else {
return Promise.reject((new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),", status ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp.status)].join(''))));
}
}));
});
hitteri.load_art.core.merge_country_counts = (function hitteri$load_art$core$merge_country_counts(countries,counts_by_slug){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__22592_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22592_SHARP_,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts_by_slug,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__22592_SHARP_),(0)));
}),countries);
});
hitteri.load_art.core.load_counts_BANG_ = (function hitteri$load_art$core$load_counts_BANG_(){
return hitteri.load_art.core.fetch_text_BANG_(hitteri.load_art.core.place_counts_url).then((function (p1__22596_SHARP_){
return Promise.resolve(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__22596_SHARP_));
})).catch((function (_){
return Promise.resolve(cljs.core.PersistentArrayMap.EMPTY);
}));
});
hitteri.load_art.core.load_countries_BANG_ = (function hitteri$load_art$core$load_countries_BANG_(){
return Promise.all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hitteri.load_art.core.fetch_text_BANG_(hitteri.load_art.core.countries_url),hitteri.load_art.core.load_counts_BANG_()], null)).then((function (p__22598){
var vec__22600 = p__22598;
var countries_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22600,(0),null);
var counts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22600,(1),null);
var countries = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(countries_text);
return Promise.resolve(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),hitteri.load_art.core.merge_country_counts(countries,counts)));
}));
});
hitteri.load_art.core.load_country_BANG_ = (function hitteri$load_art$core$load_country_BANG_(slug){
return fetch(hitteri.load_art.core.gis_url(slug)).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.text().then(hitteri.load_art.core.parse_edn);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),resp.status)){
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"country","country",312965309),slug,new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY], null));
} else {
return Promise.reject((new Error(["Failed to load ",hitteri.load_art.core.gis_url(slug),", status ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp.status)].join(''))));

}
}
}));
});

//# sourceMappingURL=hitteri.load_art.core.js.map
