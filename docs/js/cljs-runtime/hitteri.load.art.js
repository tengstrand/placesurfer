goog.provide('hitteri.load.art');
hitteri.load.art.counts_url = "data/art/place-counts.edn";
hitteri.load.art.gis_url = (function hitteri$load$art$gis_url(slug){
return ["data/art/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),".edn"].join('');
});
hitteri.load.art.load_counts_BANG_ = (function hitteri$load$art$load_counts_BANG_(){
return hitteri.load.gis.load_counts_BANG_(hitteri.load.art.counts_url);
});
hitteri.load.art.load_countries_BANG_ = (function hitteri$load$art$load_countries_BANG_(){
return hitteri.load.gis.load_countries_BANG_(hitteri.load.art.counts_url);
});
hitteri.load.art.load_country_BANG_ = (function hitteri$load$art$load_country_BANG_(slug){
return hitteri.load.gis.load_country_BANG_(hitteri.load.art.gis_url,slug);
});

//# sourceMappingURL=hitteri.load.art.js.map
