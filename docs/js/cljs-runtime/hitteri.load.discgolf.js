goog.provide('hitteri.load.discgolf');
hitteri.load.discgolf.counts_url = "data/discgolf/course-counts.edn";
hitteri.load.discgolf.gis_url = (function hitteri$load$discgolf$gis_url(slug){
return ["data/discgolf/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),".edn"].join('');
});
hitteri.load.discgolf.load_counts_BANG_ = (function hitteri$load$discgolf$load_counts_BANG_(){
return hitteri.load.gis.load_counts_BANG_(hitteri.load.discgolf.counts_url);
});
hitteri.load.discgolf.load_countries_BANG_ = (function hitteri$load$discgolf$load_countries_BANG_(){
return hitteri.load.gis.load_countries_BANG_(hitteri.load.discgolf.counts_url);
});
hitteri.load.discgolf.load_country_BANG_ = (function hitteri$load$discgolf$load_country_BANG_(slug){
return hitteri.load.gis.load_country_BANG_(hitteri.load.discgolf.gis_url,slug);
});

//# sourceMappingURL=hitteri.load.discgolf.js.map
