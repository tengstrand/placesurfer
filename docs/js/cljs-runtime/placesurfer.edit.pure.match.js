goog.provide('placesurfer.edit.pure.match');
placesurfer.edit.pure.match.default_coord_match_threshold_m = 300.0;
placesurfer.edit.pure.match.vec_seq = (function placesurfer$edit$pure$match$vec_seq(xs){
if(cljs.core.sequential_QMARK_(xs)){
return xs;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
placesurfer.edit.pure.match.coords_exact_match_QMARK_ = (function placesurfer$edit$pure$match$coords_exact_match_QMARK_(lon_a,lat_a,lon_b,lat_b){
return ((typeof lon_a === 'number') && (((typeof lat_a === 'number') && (((typeof lon_b === 'number') && (((typeof lat_b === 'number') && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lon_a,lon_b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lat_a,lat_b)))))))))));
});
placesurfer.edit.pure.match.coords_match_QMARK_ = (function placesurfer$edit$pure$match$coords_match_QMARK_(var_args){
var G__39079 = arguments.length;
switch (G__39079) {
case 4:
return placesurfer.edit.pure.match.coords_match_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return placesurfer.edit.pure.match.coords_match_QMARK_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.pure.match.coords_match_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (lon_a,lat_a,lon_b,lat_b){
return placesurfer.edit.pure.match.coords_match_QMARK_.cljs$core$IFn$_invoke$arity$5(lon_a,lat_a,lon_b,lat_b,placesurfer.edit.pure.match.default_coord_match_threshold_m);
}));

(placesurfer.edit.pure.match.coords_match_QMARK_.cljs$core$IFn$_invoke$arity$5 = (function (lon_a,lat_a,lon_b,lat_b,threshold_m){
return ((typeof lon_a === 'number') && (((typeof lat_a === 'number') && (((typeof lon_b === 'number') && (((typeof lat_b === 'number') && ((placesurfer.edit.pure.coords.haversine_distance_m(lon_a,lat_a,lon_b,lat_b) <= threshold_m)))))))));
}));

(placesurfer.edit.pure.match.coords_match_QMARK_.cljs$lang$maxFixedArity = 5);

placesurfer.edit.pure.match.coords_exist_in_update_rows_QMARK_ = (function placesurfer$edit$pure$match$coords_exist_in_update_rows_QMARK_(longitude,latitude,rows){
return cljs.core.boolean$(cljs.core.some((function (row){
var temp__5825__auto__ = placesurfer.edit.pure.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5825__auto__)){
var c = temp__5825__auto__;
return placesurfer.edit.pure.match.coords_exact_match_QMARK_(longitude,latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(c));
} else {
return null;
}
}),placesurfer.edit.pure.match.vec_seq(rows)));
});
placesurfer.edit.pure.match.find_saved_row_by_exact_coords = (function placesurfer$edit$pure$match$find_saved_row_by_exact_coords(rows,longitude,latitude){
return cljs.core.some((function (row){
var temp__5825__auto__ = placesurfer.edit.pure.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5825__auto__)){
var c = temp__5825__auto__;
if(placesurfer.edit.pure.match.coords_exact_match_QMARK_(longitude,latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(c))){
return row;
} else {
return null;
}
} else {
return null;
}
}),((cljs.core.sequential_QMARK_(rows))?cljs.core.vec(rows):cljs.core.PersistentVector.EMPTY));
});
placesurfer.edit.pure.match.normalized_place_name = (function placesurfer$edit$pure$match$normalized_place_name(name){
var G__39088 = name;
var G__39088__$1 = (((G__39088 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39088));
var G__39088__$2 = (((G__39088__$1 == null))?null:clojure.string.trim(G__39088__$1));
if((G__39088__$2 == null)){
return null;
} else {
return clojure.string.lower_case(G__39088__$2);
}
});
/**
 * When exactly one saved row matches the place name and has no coordinates.
 */
placesurfer.edit.pure.match.find_saved_row_by_name_without_coords = (function placesurfer$edit$pure$match$find_saved_row_by_name_without_coords(rows,place_name){
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(place_name)))){
var target = placesurfer.edit.pure.match.normalized_place_name(place_name);
var matches = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (row){
return ((placesurfer.edit.pure.rows.saved_update_row_id_QMARK_(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row))) && ((((placesurfer.edit.pure.coords.row_lon_lat(row) == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,placesurfer.edit.pure.match.normalized_place_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row)))))));
}),((cljs.core.sequential_QMARK_(rows))?cljs.core.vec(rows):cljs.core.PersistentVector.EMPTY));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(matches))){
return cljs.core.first(matches);
} else {
return null;
}
} else {
return null;
}
});
placesurfer.edit.pure.match.row_coord_distance_m = (function placesurfer$edit$pure$match$row_coord_distance_m(row,longitude,latitude){
var temp__5825__auto__ = placesurfer.edit.pure.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5825__auto__)){
var c = temp__5825__auto__;
return placesurfer.edit.pure.coords.haversine_distance_m(longitude,latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(c));
} else {
return null;
}
});
placesurfer.edit.pure.match.find_pending_place_index = (function placesurfer$edit$pure$match$find_pending_place_index(places,longitude,latitude){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,place){
if(placesurfer.edit.pure.match.coords_exact_match_QMARK_(longitude,latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(place))){
return idx;
} else {
return null;
}
}),placesurfer.edit.pure.match.vec_seq(places)));
});
placesurfer.edit.pure.match.closest_row_within_coord_threshold = (function placesurfer$edit$pure$match$closest_row_within_coord_threshold(var_args){
var G__39111 = arguments.length;
switch (G__39111) {
case 3:
return placesurfer.edit.pure.match.closest_row_within_coord_threshold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return placesurfer.edit.pure.match.closest_row_within_coord_threshold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.pure.match.closest_row_within_coord_threshold.cljs$core$IFn$_invoke$arity$3 = (function (rows,longitude,latitude){
return placesurfer.edit.pure.match.closest_row_within_coord_threshold.cljs$core$IFn$_invoke$arity$4(rows,longitude,latitude,placesurfer.edit.pure.match.default_coord_match_threshold_m);
}));

(placesurfer.edit.pure.match.closest_row_within_coord_threshold.cljs$core$IFn$_invoke$arity$4 = (function (rows,longitude,latitude,threshold_m){
var G__39119 = rows;
var G__39119__$1 = (((G__39119 == null))?null:cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (row){
var temp__5825__auto__ = placesurfer.edit.pure.match.row_coord_distance_m(row,longitude,latitude);
if(cljs.core.truth_(temp__5825__auto__)){
var distance = temp__5825__auto__;
if((distance <= threshold_m)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"distance","distance",-1671893894),distance], null);
} else {
return null;
}
} else {
return null;
}
}),G__39119));
var G__39119__$2 = (((G__39119__$1 == null))?null:cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"distance","distance",-1671893894),G__39119__$1));
var G__39119__$3 = (((G__39119__$2 == null))?null:cljs.core.first(G__39119__$2));
if((G__39119__$3 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(G__39119__$3);
}
}));

(placesurfer.edit.pure.match.closest_row_within_coord_threshold.cljs$lang$maxFixedArity = 4);

placesurfer.edit.pure.match.coords_match_deleted_row_at_QMARK_ = (function placesurfer$edit$pure$match$coords_match_deleted_row_at_QMARK_(rows,places,longitude,latitude,row_pred_QMARK_){
return cljs.core.boolean$(cljs.core.some((function (row){
if(cljs.core.truth_((row_pred_QMARK_.cljs$core$IFn$_invoke$arity$1 ? row_pred_QMARK_.cljs$core$IFn$_invoke$arity$1(row) : row_pred_QMARK_.call(null,row)))){
var temp__5825__auto__ = placesurfer.edit.pure.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5825__auto__)){
var c = temp__5825__auto__;
return placesurfer.edit.pure.match.coords_match_QMARK_.cljs$core$IFn$_invoke$arity$4(longitude,latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(c));
} else {
return null;
}
} else {
return null;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.pure.match.vec_seq(rows),placesurfer.edit.pure.match.vec_seq(places))));
});
placesurfer.edit.pure.match.find_display_row_by_coords = (function placesurfer$edit$pure$match$find_display_row_by_coords(var_args){
var G__39140 = arguments.length;
switch (G__39140) {
case 4:
return placesurfer.edit.pure.match.find_display_row_by_coords.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return placesurfer.edit.pure.match.find_display_row_by_coords.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.pure.match.find_display_row_by_coords.cljs$core$IFn$_invoke$arity$4 = (function (saved_rows,pending_places,longitude,latitude){
return placesurfer.edit.pure.match.find_display_row_by_coords.cljs$core$IFn$_invoke$arity$5(saved_rows,pending_places,longitude,latitude,true);
}));

(placesurfer.edit.pure.match.find_display_row_by_coords.cljs$core$IFn$_invoke$arity$5 = (function (saved_rows,pending_places,longitude,latitude,use_url_name_QMARK_){
var saved = ((cljs.core.sequential_QMARK_(saved_rows))?cljs.core.vec(saved_rows):cljs.core.PersistentVector.EMPTY);
var pending_rows = cljs.core.map.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.pure.rows.pending_place__GT_row,placesurfer.edit.pure.match.vec_seq(pending_places));
var or__5025__auto__ = placesurfer.edit.pure.match.find_saved_row_by_exact_coords(saved,longitude,latitude);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (cljs.core.truth_(use_url_name_QMARK_)?null:(function (){var or__5025__auto____$1 = placesurfer.edit.pure.match.closest_row_within_coord_threshold.cljs$core$IFn$_invoke$arity$3(saved,longitude,latitude);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return placesurfer.edit.pure.match.find_saved_row_by_exact_coords(pending_rows,longitude,latitude);
}
})());
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return placesurfer.edit.pure.match.find_saved_row_by_exact_coords(pending_rows,longitude,latitude);
}
}
}));

(placesurfer.edit.pure.match.find_display_row_by_coords.cljs$lang$maxFixedArity = 5);


//# sourceMappingURL=placesurfer.edit.pure.match.js.map
