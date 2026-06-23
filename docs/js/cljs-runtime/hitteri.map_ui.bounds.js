goog.provide('hitteri.map_ui.bounds');
hitteri.map_ui.bounds.valid_position_QMARK_ = (function hitteri$map_ui$bounds$valid_position_QMARK_(p__39075){
var map__39077 = p__39075;
var map__39077__$1 = cljs.core.__destructure_map(map__39077);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39077__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39077__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
return ((typeof longitude === 'number') && (((typeof latitude === 'number') && (((((((-180) <= longitude)) && ((longitude <= (180))))) && (((((-90) <= latitude)) && ((latitude <= (90))))))))));
});
hitteri.map_ui.bounds.quantile = (function hitteri$map_ui$bounds$quantile(sorted_vec,p){
var n = cljs.core.count(sorted_vec);
var idx = (Math.floor((p * (n - (1)))) | (0));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_vec,(function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (function (){var x__5113__auto__ = (n - (1));
var y__5114__auto__ = idx;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})());
});
/**
 * Tukey extreme-outlier fences (Q1 - 3*IQR, Q3 + 3*IQR) for `values`. Wide
 * enough to keep an entire country's spread but tight enough to drop wildly
 * mis-geocoded points that would otherwise stretch the map to the whole
 * world.
 */
hitteri.map_ui.bounds.iqr_fences = (function hitteri$map_ui$bounds$iqr_fences(values){
var sorted = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(values));
var q1 = hitteri.map_ui.bounds.quantile(sorted,0.25);
var q3 = hitteri.map_ui.bounds.quantile(sorted,0.75);
var iqr = (q3 - q1);
var fence = (3.0 * iqr);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q1 - fence),(q3 + fence)], null);
});
/**
 * Drop positions whose coordinates are physically invalid or are extreme
 * outliers per Tukey fences. Conservative: for < 4 positions no filtering
 * is applied.
 */
hitteri.map_ui.bounds.without_outliers = (function hitteri$map_ui$bounds$without_outliers(positions){
var valid = cljs.core.filterv(hitteri.map_ui.bounds.valid_position_QMARK_,positions);
if((cljs.core.count(valid) < (4))){
return valid;
} else {
var vec__39090 = hitteri.map_ui.bounds.iqr_fences(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"longitude","longitude",-1268876372),valid));
var lng_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39090,(0),null);
var lng_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39090,(1),null);
var vec__39093 = hitteri.map_ui.bounds.iqr_fences(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"latitude","latitude",394867543),valid));
var lat_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39093,(0),null);
var lat_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39093,(1),null);
return cljs.core.filterv((function (p__39096){
var map__39097 = p__39096;
var map__39097__$1 = cljs.core.__destructure_map(map__39097);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39097__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39097__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
return (((((lng_min <= longitude)) && ((longitude <= lng_max)))) && ((((lat_min <= latitude)) && ((latitude <= lat_max)))));
}),valid);
}
});
/**
 * Bounding box covering all positions (after dropping invalid coordinates
 * and extreme outliers), or nil if no positions remain.
 */
hitteri.map_ui.bounds.fit_lng_lat_bounds = (function hitteri$map_ui$bounds$fit_lng_lat_bounds(positions){
var temp__5825__auto__ = cljs.core.seq(hitteri.map_ui.bounds.without_outliers(positions));
if(temp__5825__auto__){
var clean = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"west","west",708776677),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"longitude","longitude",-1268876372),clean)),new cljs.core.Keyword(null,"east","east",1189821678),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"longitude","longitude",-1268876372),clean)),new cljs.core.Keyword(null,"south","south",1586796293),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"latitude","latitude",394867543),clean)),new cljs.core.Keyword(null,"north","north",651323902),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"latitude","latitude",394867543),clean))], null);
} else {
return null;
}
});
/**
 * True when the box has numeric corners and is non-inverted. A single-place
 * country yields a degenerate point box (west=east, south=north); that is still
 * valid - MapLibre centers on it at maxZoom - so use <= not <.
 */
hitteri.map_ui.bounds.valid_lng_lat_box_QMARK_ = (function hitteri$map_ui$bounds$valid_lng_lat_box_QMARK_(p__39117){
var map__39118 = p__39117;
var map__39118__$1 = cljs.core.__destructure_map(map__39118);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39118__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39118__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39118__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39118__$1,new cljs.core.Keyword(null,"north","north",651323902));
return ((typeof west === 'number') && (((typeof east === 'number') && (((typeof south === 'number') && (((typeof north === 'number') && ((((west <= east)) && ((south <= north)))))))))));
});
/**
 * Minimum width/height (degrees) a fit box must have. MapLibre `fitBounds`
 * cannot fit a zero-area (single point) box - it produces no camera change - so
 * single-place countries (e.g. China, 1 course) need the point expanded first.
 */
hitteri.map_ui.bounds.min_fit_span_deg = 0.08;
/**
 * Expand `box` symmetrically so each side spans at least `min-fit-span-deg`.
 * The center is unchanged. Boxes already wider than the minimum pass through
 * untouched, so multi-place countries and the country-bounds fallback are
 * unaffected; only single-point boxes get padded into something fitBounds can
 * actually zoom to.
 */
hitteri.map_ui.bounds.pad_degenerate_box = (function hitteri$map_ui$bounds$pad_degenerate_box(p__39128){
var map__39129 = p__39128;
var map__39129__$1 = cljs.core.__destructure_map(map__39129);
var box = map__39129__$1;
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39129__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39129__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39129__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39129__$1,new cljs.core.Keyword(null,"north","north",651323902));
if(hitteri.map_ui.bounds.valid_lng_lat_box_QMARK_(box)){
var pad_lng = (function (){var x__5110__auto__ = 0.0;
var y__5111__auto__ = ((hitteri.map_ui.bounds.min_fit_span_deg - (east - west)) / 2.0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var pad_lat = (function (){var x__5110__auto__ = 0.0;
var y__5111__auto__ = ((hitteri.map_ui.bounds.min_fit_span_deg - (north - south)) / 2.0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"west","west",708776677),(west - pad_lng),new cljs.core.Keyword(null,"east","east",1189821678),(east + pad_lng),new cljs.core.Keyword(null,"south","south",1586796293),(south - pad_lat),new cljs.core.Keyword(null,"north","north",651323902),(north + pad_lat)], null);
} else {
return box;
}
});
hitteri.map_ui.bounds.bounds_center = (function hitteri$map_ui$bounds$bounds_center(p__39130){
var map__39131 = p__39130;
var map__39131__$1 = cljs.core.__destructure_map(map__39131);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39131__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39131__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39131__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39131__$1,new cljs.core.Keyword(null,"north","north",651323902));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lng","lng",1667213918),((west + east) / 2.0),new cljs.core.Keyword(null,"lat","lat",-580793929),((south + north) / 2.0)], null);
});
hitteri.map_ui.bounds.view_center_in_bounds_QMARK_ = (function hitteri$map_ui$bounds$view_center_in_bounds_QMARK_(p__39133,p__39134){
var map__39135 = p__39133;
var map__39135__$1 = cljs.core.__destructure_map(map__39135);
var lng = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39135__$1,new cljs.core.Keyword(null,"lng","lng",1667213918));
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39135__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var map__39136 = p__39134;
var map__39136__$1 = cljs.core.__destructure_map(map__39136);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39136__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39136__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39136__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39136__$1,new cljs.core.Keyword(null,"north","north",651323902));
return (((((west <= lng)) && ((lng <= east)))) && ((((south <= lat)) && ((lat <= north)))));
});
hitteri.map_ui.bounds.sweden_zoomed_view = (function hitteri$map_ui$bounds$sweden_zoomed_view(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lng","lng",1667213918),18.0,new cljs.core.Keyword(null,"lat","lat",-580793929),59.0,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),12.0], null);
});
hitteri.map_ui.bounds.norway_sample_positions = (function hitteri$map_ui$bounds$norway_sample_positions(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),5.3,new cljs.core.Keyword(null,"latitude","latitude",394867543),60.4,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"discgolf","discgolf",416907656)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),10.8,new cljs.core.Keyword(null,"latitude","latitude",394867543),63.4,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"discgolf","discgolf",416907656)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),25.0,new cljs.core.Keyword(null,"latitude","latitude",394867543),71.0,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"discgolf","discgolf",416907656)], null)], null);
});

//# sourceMappingURL=hitteri.map_ui.bounds.js.map
