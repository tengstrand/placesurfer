goog.provide('placesurfer.load.train_station');
placesurfer.load.train_station.counts_url = "data/train-station/place-counts.edn";
placesurfer.load.train_station.gis_url = (function placesurfer$load$train_station$gis_url(slug){
return ["data/train-station/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),".edn"].join('');
});
placesurfer.load.train_station.load_counts_BANG_ = (function placesurfer$load$train_station$load_counts_BANG_(){
return placesurfer.load.gis.load_counts_BANG_(placesurfer.load.train_station.counts_url);
});
placesurfer.load.train_station.load_countries_BANG_ = (function placesurfer$load$train_station$load_countries_BANG_(){
return placesurfer.load.gis.load_countries_BANG_(placesurfer.load.train_station.counts_url);
});
placesurfer.load.train_station.load_country_BANG_ = (function placesurfer$load$train_station$load_country_BANG_(slug){
return placesurfer.load.gis.load_country_BANG_(placesurfer.load.train_station.gis_url,slug);
});

//# sourceMappingURL=placesurfer.load.train_station.js.map
