goog.provide('placesurfer.edit.pure.coords');
placesurfer.edit.pure.coords.decimal_input_pattern = /^-?(?:\d+(?:\.\d*)?|\.\d+)$/;
placesurfer.edit.pure.coords.form_field_value_str = (function placesurfer$edit$pure$coords$form_field_value_str(v){
if(typeof v === 'string'){
return v;
} else {
if((v == null)){
return "";
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
});
placesurfer.edit.pure.coords.normalize_decimal_input = (function placesurfer$edit$pure$coords$normalize_decimal_input(v){
return clojure.string.replace(clojure.string.replace(clojure.string.trim(placesurfer.edit.pure.coords.form_field_value_str(v)),/\u2212/,"-"),/,/,".");
});
placesurfer.edit.pure.coords.decimal_input_matches_QMARK_ = (function placesurfer$edit$pure$coords$decimal_input_matches_QMARK_(s){
return cljs.core.boolean$((function (){var and__5023__auto__ = cljs.core.seq(s);
if(and__5023__auto__){
return cljs.core.re_matches(placesurfer.edit.pure.coords.decimal_input_pattern,s);
} else {
return and__5023__auto__;
}
})());
});
placesurfer.edit.pure.coords.parse_decimal = (function placesurfer$edit$pure$coords$parse_decimal(v){
var s = placesurfer.edit.pure.coords.normalize_decimal_input(v);
if(placesurfer.edit.pure.coords.decimal_input_matches_QMARK_(s)){
var n = parseFloat(s);
if(cljs.core.truth_(isNaN(n))){
return null;
} else {
return n;
}
} else {
return null;
}
});
placesurfer.edit.pure.coords.dms_component_re = /(\d+(?:[.,]\d+)?)\s*[°º]\s*(\d+(?:[.,]\d+)?)?\s*['′]?\s*(\d+(?:[.,]\d+)?)?\s*[\"″]?\s*([NnSsEeWw])/;
placesurfer.edit.pure.coords.dms_component__GT_decimal = (function placesurfer$edit$pure$coords$dms_component__GT_decimal(p__38741){
var vec__38742 = p__38741;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38742,(0),null);
var deg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38742,(1),null);
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38742,(2),null);
var sec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38742,(3),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38742,(4),null);
var d = (function (){var or__5025__auto__ = placesurfer.edit.pure.coords.parse_decimal(deg);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var m = (function (){var or__5025__auto__ = placesurfer.edit.pure.coords.parse_decimal(min);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var s = (function (){var or__5025__auto__ = placesurfer.edit.pure.coords.parse_decimal(sec);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var decimal = ((d + (m / 60.0)) + (s / 3600.0));
var direction = clojure.string.upper_case(dir);
var G__38746 = direction;
switch (G__38746) {
case "N":
case "E":
return decimal;

break;
case "S":
case "W":
return (- decimal);

break;
default:
return null;

}
});
placesurfer.edit.pure.coords.coords_from_dms_components = (function placesurfer$edit$pure$coords$coords_from_dms_components(components){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(components))){
var vec__38749 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.pure.coords.dms_component__GT_decimal,components);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38749,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38749,(1),null);
var vec__38752 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38748_SHARP_){
return clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__38748_SHARP_,(4)));
}),components);
var d1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38752,(0),null);
var d2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38752,(1),null);
if(cljs.core.truth_((function (){var and__5023__auto__ = (function (){var fexpr__38755 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["S",null,"N",null], null), null);
return (fexpr__38755.cljs$core$IFn$_invoke$arity$1 ? fexpr__38755.cljs$core$IFn$_invoke$arity$1(d1) : fexpr__38755.call(null,d1));
})();
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = (function (){var fexpr__38756 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["E",null,"W",null], null), null);
return (fexpr__38756.cljs$core$IFn$_invoke$arity$1 ? fexpr__38756.cljs$core$IFn$_invoke$arity$1(d2) : fexpr__38756.call(null,d2));
})();
if(cljs.core.truth_(and__5023__auto____$1)){
return ((typeof c1 === 'number') && (typeof c2 === 'number'));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),c1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),c2], null);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = (function (){var fexpr__38757 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["E",null,"W",null], null), null);
return (fexpr__38757.cljs$core$IFn$_invoke$arity$1 ? fexpr__38757.cljs$core$IFn$_invoke$arity$1(d1) : fexpr__38757.call(null,d1));
})();
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = (function (){var fexpr__38758 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["S",null,"N",null], null), null);
return (fexpr__38758.cljs$core$IFn$_invoke$arity$1 ? fexpr__38758.cljs$core$IFn$_invoke$arity$1(d2) : fexpr__38758.call(null,d2));
})();
if(cljs.core.truth_(and__5023__auto____$1)){
return ((typeof c1 === 'number') && (typeof c2 === 'number'));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),c1,new cljs.core.Keyword(null,"latitude","latitude",394867543),c2], null);
} else {
return null;

}
}
} else {
return null;
}
});
/**
 * Parse strings like 60°23'59.2"N 24°45'29.5"E into decimal :latitude / :longitude.
 */
placesurfer.edit.pure.coords.parse_dms_coordinates = (function placesurfer$edit$pure$coords$parse_dms_coordinates(text){
var temp__5825__auto__ = (function (){var G__38759 = text;
var G__38759__$1 = (((G__38759 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38759));
var G__38759__$2 = (((G__38759__$1 == null))?null:clojure.string.trim(G__38759__$1));
var G__38759__$3 = (((G__38759__$2 == null))?null:cljs.core.re_seq(placesurfer.edit.pure.coords.dms_component_re,G__38759__$2));
var G__38759__$4 = (((G__38759__$3 == null))?null:cljs.core.not_empty(G__38759__$3));
var G__38759__$5 = (((G__38759__$4 == null))?null:cljs.core.vec(G__38759__$4));
if((G__38759__$5 == null)){
return null;
} else {
return placesurfer.edit.pure.coords.coords_from_dms_components(G__38759__$5);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var map__38760 = temp__5825__auto__;
var map__38760__$1 = cljs.core.__destructure_map(map__38760);
var coords = map__38760__$1;
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38760__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38760__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
if(((typeof latitude === 'number') && (((typeof longitude === 'number') && (((((((-90) <= latitude)) && ((latitude <= (90))))) && (((((-180) <= longitude)) && ((longitude <= (180))))))))))){
return coords;
} else {
return null;
}
} else {
return null;
}
});
placesurfer.edit.pure.coords.decimal_pair_parts = (function placesurfer$edit$pure$coords$decimal_pair_parts(text){
var trimmed = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text));
if(clojure.string.includes_QMARK_(trimmed,",")){
var parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$3(trimmed,/,/,(2)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(parts))){
return parts;
} else {
return null;
}
} else {
if(clojure.string.includes_QMARK_(trimmed,";")){
var parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$3(trimmed,/;/,(2)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(parts))){
return parts;
} else {
return null;
}
} else {
var temp__5825__auto__ = cljs.core.seq(cljs.core.re_seq(placesurfer.edit.pure.coords.decimal_input_pattern,trimmed));
if(temp__5825__auto__){
var parts = temp__5825__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(parts))){
return parts;
} else {
return null;
}
} else {
return null;
}

}
}
});
placesurfer.edit.pure.coords.coords_from_decimal_pair = (function placesurfer$edit$pure$coords$coords_from_decimal_pair(v1,v2){
if(((typeof v1 === 'number') && (typeof v2 === 'number'))){
var a = Math.abs(v1);
var b = Math.abs(v2);
var map__38765 = (((a > (90)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),v2,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),v1], null):(((b > (90)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),v1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),v2], null):(((a > b))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),v1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),v2], null):(((a < b))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),v2,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),v1], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),v1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),v2], null)
))));
var map__38765__$1 = cljs.core.__destructure_map(map__38765);
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38765__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38765__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
if(((((((-90) <= latitude)) && ((latitude <= (90))))) && (((((-180) <= longitude)) && ((longitude <= (180))))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude], null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Parse strings like 59.8126, 17.6685 into decimal :latitude / :longitude.
 */
placesurfer.edit.pure.coords.parse_decimal_coordinate_pair = (function placesurfer$edit$pure$coords$parse_decimal_coordinate_pair(text){
var temp__5825__auto__ = placesurfer.edit.pure.coords.decimal_pair_parts(text);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__38766 = temp__5825__auto__;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38766,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38766,(1),null);
var temp__5825__auto____$1 = placesurfer.edit.pure.coords.parse_decimal(p1);
if(cljs.core.truth_(temp__5825__auto____$1)){
var v1 = temp__5825__auto____$1;
var temp__5825__auto____$2 = placesurfer.edit.pure.coords.parse_decimal(p2);
if(cljs.core.truth_(temp__5825__auto____$2)){
var v2 = temp__5825__auto____$2;
return placesurfer.edit.pure.coords.coords_from_decimal_pair(v1,v2);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Parse DMS or decimal coordinate pairs from clipboard/paste text.
 */
placesurfer.edit.pure.coords.parse_pasted_coordinates = (function placesurfer$edit$pure$coords$parse_pasted_coordinates(text){
var or__5025__auto__ = placesurfer.edit.pure.coords.parse_dms_coordinates(text);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.edit.pure.coords.parse_decimal_coordinate_pair(text);
}
});
placesurfer.edit.pure.coords.valid_longitude_QMARK_ = (function placesurfer$edit$pure$coords$valid_longitude_QMARK_(v){
var n = placesurfer.edit.pure.coords.parse_decimal(v);
return ((typeof n === 'number') && (((((-180) <= n)) && ((n <= (180))))));
});
placesurfer.edit.pure.coords.valid_latitude_QMARK_ = (function placesurfer$edit$pure$coords$valid_latitude_QMARK_(v){
var n = placesurfer.edit.pure.coords.parse_decimal(v);
return ((typeof n === 'number') && (((((-90) <= n)) && ((n <= (90))))));
});
/**
 * True when update form longitude and latitude are both valid.
 */
placesurfer.edit.pure.coords.form_has_coords_QMARK_ = (function placesurfer$edit$pure$coords$form_has_coords_QMARK_(form){
return ((placesurfer.edit.pure.coords.valid_longitude_QMARK_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form))) && (placesurfer.edit.pure.coords.valid_latitude_QMARK_(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form))));
});
placesurfer.edit.pure.coords.to_radians = (function placesurfer$edit$pure$coords$to_radians(deg){
return (deg * (Math.PI / (180)));
});
placesurfer.edit.pure.coords.haversine_distance_m = (function placesurfer$edit$pure$coords$haversine_distance_m(lon1,lat1,lon2,lat2){
var r = 6371000.0;
var dlat = (placesurfer.edit.pure.coords.to_radians(lat2) - placesurfer.edit.pure.coords.to_radians(lat1));
var dlon = (placesurfer.edit.pure.coords.to_radians(lon2) - placesurfer.edit.pure.coords.to_radians(lon1));
var a = ((Math.sin((dlat / (2))) * Math.sin((dlat / (2)))) + (((Math.cos(placesurfer.edit.pure.coords.to_radians(lat1)) * Math.cos(placesurfer.edit.pure.coords.to_radians(lat2))) * Math.sin((dlon / (2)))) * Math.sin((dlon / (2)))));
return ((r * (2)) * Math.atan2(Math.sqrt(a),Math.sqrt(((1) - a))));
});
placesurfer.edit.pure.coords.row_lon_lat = (function placesurfer$edit$pure$coords$row_lon_lat(row){
var lon = ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row) === 'number')?new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row):placesurfer.edit.pure.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row)));
var lat = ((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row) === 'number')?new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row):placesurfer.edit.pure.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row)));
if(((typeof lon === 'number') && (typeof lat === 'number'))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat], null);
} else {
return null;
}
});
placesurfer.edit.pure.coords.row_has_coords_QMARK_ = (function placesurfer$edit$pure$coords$row_has_coords_QMARK_(row){
return cljs.core.boolean$(placesurfer.edit.pure.coords.row_lon_lat(row));
});
placesurfer.edit.pure.coords.row_distance_m = (function placesurfer$edit$pure$coords$row_distance_m(reference_row,row){
var temp__5825__auto__ = placesurfer.edit.pure.coords.row_lon_lat(reference_row);
if(cljs.core.truth_(temp__5825__auto__)){
var map__38772 = temp__5825__auto__;
var map__38772__$1 = cljs.core.__destructure_map(map__38772);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38772__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38772__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var temp__5825__auto____$1 = placesurfer.edit.pure.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5825__auto____$1)){
var row_coords = temp__5825__auto____$1;
return Math.round(placesurfer.edit.pure.coords.haversine_distance_m(longitude,latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row_coords),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row_coords)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.edit.pure.coords.js.map
