goog.provide('hitteri.edit.interface$.match');
hitteri.edit.interface$.match.coords_exact_match_QMARK_ = (function hitteri$edit$interface$match$coords_exact_match_QMARK_(lon_a,lat_a,lon_b,lat_b){
return hitteri.edit.pure.match.coords_exact_match_QMARK_(lon_a,lat_a,lon_b,lat_b);
});
hitteri.edit.interface$.match.coords_match_QMARK_ = (function hitteri$edit$interface$match$coords_match_QMARK_(var_args){
var G__39101 = arguments.length;
switch (G__39101) {
case 4:
return hitteri.edit.interface$.match.coords_match_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hitteri.edit.interface$.match.coords_match_QMARK_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.edit.interface$.match.coords_match_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (lon_a,lat_a,lon_b,lat_b){
return hitteri.edit.pure.match.coords_match_QMARK_.cljs$core$IFn$_invoke$arity$4(lon_a,lat_a,lon_b,lat_b);
}));

(hitteri.edit.interface$.match.coords_match_QMARK_.cljs$core$IFn$_invoke$arity$5 = (function (lon_a,lat_a,lon_b,lat_b,threshold_m){
return hitteri.edit.pure.match.coords_match_QMARK_.cljs$core$IFn$_invoke$arity$5(lon_a,lat_a,lon_b,lat_b,threshold_m);
}));

(hitteri.edit.interface$.match.coords_match_QMARK_.cljs$lang$maxFixedArity = 5);

hitteri.edit.interface$.match.coords_exist_in_update_rows_QMARK_ = (function hitteri$edit$interface$match$coords_exist_in_update_rows_QMARK_(longitude,latitude,rows){
return hitteri.edit.pure.match.coords_exist_in_update_rows_QMARK_(longitude,latitude,rows);
});
hitteri.edit.interface$.match.find_saved_row_by_exact_coords = (function hitteri$edit$interface$match$find_saved_row_by_exact_coords(rows,longitude,latitude){
return hitteri.edit.pure.match.find_saved_row_by_exact_coords(rows,longitude,latitude);
});
hitteri.edit.interface$.match.find_saved_row_by_name_without_coords = (function hitteri$edit$interface$match$find_saved_row_by_name_without_coords(rows,place_name){
return hitteri.edit.pure.match.find_saved_row_by_name_without_coords(rows,place_name);
});
hitteri.edit.interface$.match.row_coord_distance_m = (function hitteri$edit$interface$match$row_coord_distance_m(row,longitude,latitude){
return hitteri.edit.pure.match.row_coord_distance_m(row,longitude,latitude);
});
hitteri.edit.interface$.match.find_pending_place_index = (function hitteri$edit$interface$match$find_pending_place_index(places,longitude,latitude){
return hitteri.edit.pure.match.find_pending_place_index(places,longitude,latitude);
});
hitteri.edit.interface$.match.closest_row_within_coord_threshold = (function hitteri$edit$interface$match$closest_row_within_coord_threshold(var_args){
var G__39122 = arguments.length;
switch (G__39122) {
case 3:
return hitteri.edit.interface$.match.closest_row_within_coord_threshold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hitteri.edit.interface$.match.closest_row_within_coord_threshold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.edit.interface$.match.closest_row_within_coord_threshold.cljs$core$IFn$_invoke$arity$3 = (function (rows,longitude,latitude){
return hitteri.edit.pure.match.closest_row_within_coord_threshold.cljs$core$IFn$_invoke$arity$3(rows,longitude,latitude);
}));

(hitteri.edit.interface$.match.closest_row_within_coord_threshold.cljs$core$IFn$_invoke$arity$4 = (function (rows,longitude,latitude,threshold_m){
return hitteri.edit.pure.match.closest_row_within_coord_threshold.cljs$core$IFn$_invoke$arity$4(rows,longitude,latitude,threshold_m);
}));

(hitteri.edit.interface$.match.closest_row_within_coord_threshold.cljs$lang$maxFixedArity = 4);

hitteri.edit.interface$.match.coords_match_deleted_row_at_QMARK_ = (function hitteri$edit$interface$match$coords_match_deleted_row_at_QMARK_(rows,places,longitude,latitude,row_pred_QMARK_){
return hitteri.edit.pure.match.coords_match_deleted_row_at_QMARK_(rows,places,longitude,latitude,row_pred_QMARK_);
});
hitteri.edit.interface$.match.find_display_row_by_coords = (function hitteri$edit$interface$match$find_display_row_by_coords(var_args){
var G__39138 = arguments.length;
switch (G__39138) {
case 4:
return hitteri.edit.interface$.match.find_display_row_by_coords.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hitteri.edit.interface$.match.find_display_row_by_coords.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.edit.interface$.match.find_display_row_by_coords.cljs$core$IFn$_invoke$arity$4 = (function (saved_rows,pending_places,longitude,latitude){
return hitteri.edit.pure.match.find_display_row_by_coords.cljs$core$IFn$_invoke$arity$4(saved_rows,pending_places,longitude,latitude);
}));

(hitteri.edit.interface$.match.find_display_row_by_coords.cljs$core$IFn$_invoke$arity$5 = (function (saved_rows,pending_places,longitude,latitude,use_url_name_QMARK_){
return hitteri.edit.pure.match.find_display_row_by_coords.cljs$core$IFn$_invoke$arity$5(saved_rows,pending_places,longitude,latitude,use_url_name_QMARK_);
}));

(hitteri.edit.interface$.match.find_display_row_by_coords.cljs$lang$maxFixedArity = 5);


//# sourceMappingURL=hitteri.edit.interface.match.js.map
