goog.provide('placesurfer.load.discgolf');
placesurfer.load.discgolf.counts_url = "data/discgolf/course-counts.edn";
placesurfer.load.discgolf.gis_url = (function placesurfer$load$discgolf$gis_url(slug){
return ["data/discgolf/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),".edn"].join('');
});
placesurfer.load.discgolf.load_counts_BANG_ = (function placesurfer$load$discgolf$load_counts_BANG_(){
return placesurfer.load.gis.load_counts_BANG_(placesurfer.load.discgolf.counts_url);
});
placesurfer.load.discgolf.load_countries_BANG_ = (function placesurfer$load$discgolf$load_countries_BANG_(){
return placesurfer.load.gis.load_countries_BANG_(placesurfer.load.discgolf.counts_url);
});
placesurfer.load.discgolf.load_country_BANG_ = (function placesurfer$load$discgolf$load_country_BANG_(slug){
return placesurfer.load.gis.load_country_BANG_(placesurfer.load.discgolf.gis_url,slug);
});

//# sourceMappingURL=placesurfer.load.discgolf.js.map
