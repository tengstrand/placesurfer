goog.provide('placesurfer.load.honey');
placesurfer.load.honey.counts_url = "data/honey/place-counts.edn";
placesurfer.load.honey.gis_url = (function placesurfer$load$honey$gis_url(slug){
return ["data/honey/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),".edn"].join('');
});
placesurfer.load.honey.load_counts_BANG_ = (function placesurfer$load$honey$load_counts_BANG_(){
return placesurfer.load.gis.load_counts_BANG_(placesurfer.load.honey.counts_url);
});
placesurfer.load.honey.load_countries_BANG_ = (function placesurfer$load$honey$load_countries_BANG_(){
return placesurfer.load.gis.load_countries_BANG_(placesurfer.load.honey.counts_url);
});
placesurfer.load.honey.load_country_BANG_ = (function placesurfer$load$honey$load_country_BANG_(slug){
return placesurfer.load.gis.load_country_BANG_(placesurfer.load.honey.gis_url,slug);
});

//# sourceMappingURL=placesurfer.load.honey.js.map
