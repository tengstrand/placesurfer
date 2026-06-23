goog.provide('placesurfer.load.table_tennis');
placesurfer.load.table_tennis.counts_url = "data/table-tennis/place-counts.edn";
placesurfer.load.table_tennis.gis_url = (function placesurfer$load$table_tennis$gis_url(slug){
return ["data/table-tennis/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),".edn"].join('');
});
placesurfer.load.table_tennis.load_counts_BANG_ = (function placesurfer$load$table_tennis$load_counts_BANG_(){
return placesurfer.load.gis.load_counts_BANG_(placesurfer.load.table_tennis.counts_url);
});
placesurfer.load.table_tennis.load_countries_BANG_ = (function placesurfer$load$table_tennis$load_countries_BANG_(){
return placesurfer.load.gis.load_countries_BANG_(placesurfer.load.table_tennis.counts_url);
});
placesurfer.load.table_tennis.load_country_BANG_ = (function placesurfer$load$table_tennis$load_country_BANG_(slug){
return placesurfer.load.gis.load_country_BANG_(placesurfer.load.table_tennis.gis_url,slug);
});

//# sourceMappingURL=placesurfer.load.table_tennis.js.map
