goog.provide('placesurfer.load.bus_stop');
placesurfer.load.bus_stop.counts_url = "data/bus-stop/place-counts.edn";
placesurfer.load.bus_stop.gis_url = (function placesurfer$load$bus_stop$gis_url(slug){
return ["data/bus-stop/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),".edn"].join('');
});
placesurfer.load.bus_stop.load_counts_BANG_ = (function placesurfer$load$bus_stop$load_counts_BANG_(){
return placesurfer.load.gis.load_counts_BANG_(placesurfer.load.bus_stop.counts_url);
});
placesurfer.load.bus_stop.load_countries_BANG_ = (function placesurfer$load$bus_stop$load_countries_BANG_(){
return placesurfer.load.gis.load_countries_BANG_(placesurfer.load.bus_stop.counts_url);
});
placesurfer.load.bus_stop.load_country_BANG_ = (function placesurfer$load$bus_stop$load_country_BANG_(slug){
return placesurfer.load.gis.load_country_BANG_(placesurfer.load.bus_stop.gis_url,slug);
});

//# sourceMappingURL=placesurfer.load.bus_stop.js.map
