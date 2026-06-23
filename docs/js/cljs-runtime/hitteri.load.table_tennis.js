goog.provide('hitteri.load.table_tennis');
hitteri.load.table_tennis.counts_url = "data/table-tennis/place-counts.edn";
hitteri.load.table_tennis.gis_url = (function hitteri$load$table_tennis$gis_url(slug){
return ["data/table-tennis/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),".edn"].join('');
});
hitteri.load.table_tennis.load_counts_BANG_ = (function hitteri$load$table_tennis$load_counts_BANG_(){
return hitteri.load.gis.load_counts_BANG_(hitteri.load.table_tennis.counts_url);
});
hitteri.load.table_tennis.load_countries_BANG_ = (function hitteri$load$table_tennis$load_countries_BANG_(){
return hitteri.load.gis.load_countries_BANG_(hitteri.load.table_tennis.counts_url);
});
hitteri.load.table_tennis.load_country_BANG_ = (function hitteri$load$table_tennis$load_country_BANG_(slug){
return hitteri.load.gis.load_country_BANG_(hitteri.load.table_tennis.gis_url,slug);
});

//# sourceMappingURL=hitteri.load.table_tennis.js.map
