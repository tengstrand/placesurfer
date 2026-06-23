goog.provide('placesurfer.load.art');
placesurfer.load.art.counts_url = "data/art/place-counts.edn";
placesurfer.load.art.gis_url = (function placesurfer$load$art$gis_url(slug){
return ["data/art/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),".edn"].join('');
});
placesurfer.load.art.load_counts_BANG_ = (function placesurfer$load$art$load_counts_BANG_(){
return placesurfer.load.gis.load_counts_BANG_(placesurfer.load.art.counts_url);
});
placesurfer.load.art.load_countries_BANG_ = (function placesurfer$load$art$load_countries_BANG_(){
return placesurfer.load.gis.load_countries_BANG_(placesurfer.load.art.counts_url);
});
placesurfer.load.art.load_country_BANG_ = (function placesurfer$load$art$load_country_BANG_(slug){
return placesurfer.load.gis.load_country_BANG_(placesurfer.load.art.gis_url,slug);
});

//# sourceMappingURL=placesurfer.load.art.js.map
