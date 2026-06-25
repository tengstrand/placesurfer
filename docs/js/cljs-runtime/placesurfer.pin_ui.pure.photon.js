goog.provide('placesurfer.pin_ui.pure.photon');
placesurfer.pin_ui.pure.photon.api_base = "https://photon.komoot.io/api/";
placesurfer.pin_ui.pure.photon.feature__GT_result = (function placesurfer$pin_ui$pure$photon$feature__GT_result(feature){
if(cljs.core.truth_(feature)){
var props = feature.properties;
var geometry = feature.geometry;
var coords = geometry.coordinates;
var lon = (coords[(0)]);
var lat = (coords[(1)]);
var place_name = (function (){var or__5025__auto__ = props.name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = props.street;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = props.city;
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return "";
}
}
}
})();
if(((typeof lon === 'number') && (((typeof lat === 'number') && (cljs.core.seq(clojure.string.trim(place_name))))))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.trim(place_name),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat,new cljs.core.Keyword(null,"countrycode","countrycode",-1191088449),(function (){var G__40322 = props.countrycode;
if((G__40322 == null)){
return null;
} else {
return clojure.string.upper_case(G__40322);
}
})(),new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(place_name),(function (){var temp__5825__auto__ = props.city;
if(cljs.core.truth_(temp__5825__auto__)){
var city = temp__5825__auto__;
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(city)].join('');
} else {
return null;
}
})(),(function (){var temp__5825__auto__ = props.countrycode;
if(cljs.core.truth_(temp__5825__auto__)){
var cc = temp__5825__auto__;
return [" (",clojure.string.upper_case(cc),")"].join('');
} else {
return null;
}
})()].join('')], null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Parse Photon GeoJSON FeatureCollection into result maps.
 */
placesurfer.pin_ui.pure.photon.parse_response = (function placesurfer$pin_ui$pure$photon$parse_response(body){
if(cljs.core.truth_(body)){
var features = body.features;
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.pure.photon.feature__GT_result,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(features)));
} else {
return null;
}
});
placesurfer.pin_ui.pure.photon.min_search_chars = (1);
placesurfer.pin_ui.pure.photon.build_search_url = (function placesurfer$pin_ui$pure$photon$build_search_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40405 = arguments.length;
var i__5750__auto___40406 = (0);
while(true){
if((i__5750__auto___40406 < len__5749__auto___40405)){
args__5755__auto__.push((arguments[i__5750__auto___40406]));

var G__40407 = (i__5750__auto___40406 + (1));
i__5750__auto___40406 = G__40407;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return placesurfer.pin_ui.pure.photon.build_search_url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(placesurfer.pin_ui.pure.photon.build_search_url.cljs$core$IFn$_invoke$arity$variadic = (function (query,limit,p__40382){
var map__40383 = p__40382;
var map__40383__$1 = cljs.core.__destructure_map(map__40383);
var countries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40383__$1,new cljs.core.Keyword(null,"countries","countries",863192750));
var country_slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40383__$1,new cljs.core.Keyword(null,"country-slug","country-slug",769681844));
var trimmed = clojure.string.trim(query);
var base = [placesurfer.pin_ui.pure.photon.api_base,"?q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(trimmed)),"&limit=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit),"&lang=en"].join('');
var bbox = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.seq(countries);
if(and__5023__auto__){
return country_slug;
} else {
return and__5023__auto__;
}
})())?(function (){var temp__5825__auto__ = placesurfer.country.interface$.country_bounds_for_slug(country_slug,countries);
if(cljs.core.truth_(temp__5825__auto__)){
var bounds = temp__5825__auto__;
var map__40384 = bounds;
var map__40384__$1 = cljs.core.__destructure_map(map__40384);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40384__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40384__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40384__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40384__$1,new cljs.core.Keyword(null,"north","north",651323902));
return ["&bbox=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(west),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(south),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(east),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(north)].join('');
} else {
return null;
}
})():null);
return [base,(function (){var or__5025__auto__ = bbox;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()].join('');
}));

(placesurfer.pin_ui.pure.photon.build_search_url.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(placesurfer.pin_ui.pure.photon.build_search_url.cljs$lang$applyTo = (function (seq40378){
var G__40379 = cljs.core.first(seq40378);
var seq40378__$1 = cljs.core.next(seq40378);
var G__40380 = cljs.core.first(seq40378__$1);
var seq40378__$2 = cljs.core.next(seq40378__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40379,G__40380,seq40378__$2);
}));

placesurfer.pin_ui.pure.photon.point_in_country_bounds_QMARK_ = (function placesurfer$pin_ui$pure$photon$point_in_country_bounds_QMARK_(lon,lat,countries,country_slug){
var temp__5823__auto__ = placesurfer.country.interface$.country_bounds_for_slug(country_slug,countries);
if(cljs.core.truth_(temp__5823__auto__)){
var bounds = temp__5823__auto__;
var map__40386 = bounds;
var map__40386__$1 = cljs.core.__destructure_map(map__40386);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40386__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40386__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40386__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40386__$1,new cljs.core.Keyword(null,"north","north",651323902));
return ((typeof west === 'number') && (((typeof east === 'number') && (((typeof south === 'number') && (((typeof north === 'number') && ((((((west <= lon)) && ((lon <= east)))) && ((((south <= lat)) && ((lat <= north)))))))))))));
} else {
return true;
}
});
/**
 * Relaxed filter for Photon suggestions: ISO match plus in-country bounds when known.
 */
placesurfer.pin_ui.pure.photon.result_in_search_country_QMARK_ = (function placesurfer$pin_ui$pure$photon$result_in_search_country_QMARK_(p__40388,country_iso,countries,country_slug){
var map__40389 = p__40388;
var map__40389__$1 = cljs.core.__destructure_map(map__40389);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40389__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40389__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var countrycode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40389__$1,new cljs.core.Keyword(null,"countrycode","countrycode",-1191088449));
var and__5023__auto__ = country_iso;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(countrycode,country_iso)) && (((cljs.core.not(cljs.core.seq(countries))) || (((cljs.core.not(country_slug)) || (placesurfer.pin_ui.pure.photon.point_in_country_bounds_QMARK_(longitude,latitude,countries,country_slug)))))));
} else {
return and__5023__auto__;
}
});
placesurfer.pin_ui.pure.photon.result_in_current_country_QMARK_ = (function placesurfer$pin_ui$pure$photon$result_in_current_country_QMARK_(p__40396,country_iso,countries,country_slug){
var map__40398 = p__40396;
var map__40398__$1 = cljs.core.__destructure_map(map__40398);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40398__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40398__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var countrycode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40398__$1,new cljs.core.Keyword(null,"countrycode","countrycode",-1191088449));
return placesurfer.pin_ui.pure.photon.result_in_search_country_QMARK_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude,new cljs.core.Keyword(null,"countrycode","countrycode",-1191088449),countrycode], null),country_iso,countries,country_slug);
});
placesurfer.pin_ui.pure.photon.filter_results_for_country = (function placesurfer$pin_ui$pure$photon$filter_results_for_country(results,country_iso,countries,country_slug){
if(cljs.core.truth_(country_iso)){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40400_SHARP_){
return placesurfer.pin_ui.pure.photon.result_in_search_country_QMARK_(p1__40400_SHARP_,country_iso,countries,country_slug);
}),results));
} else {
return cljs.core.vec(results);
}
});

//# sourceMappingURL=placesurfer.pin_ui.pure.photon.js.map
