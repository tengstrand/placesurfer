goog.provide('hitteri.edit.pure.coords');
hitteri.edit.pure.coords.decimal_input_pattern = /^-?(?:\d+(?:\.\d*)?|\.\d+)$/;
hitteri.edit.pure.coords.form_field_value_str = (function hitteri$edit$pure$coords$form_field_value_str(v){
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
hitteri.edit.pure.coords.normalize_decimal_input = (function hitteri$edit$pure$coords$normalize_decimal_input(v){
return clojure.string.replace(clojure.string.replace(clojure.string.trim(hitteri.edit.pure.coords.form_field_value_str(v)),/\u2212/,"-"),/,/,".");
});
hitteri.edit.pure.coords.decimal_input_matches_QMARK_ = (function hitteri$edit$pure$coords$decimal_input_matches_QMARK_(s){
return cljs.core.boolean$((function (){var and__5023__auto__ = cljs.core.seq(s);
if(and__5023__auto__){
return cljs.core.re_matches(hitteri.edit.pure.coords.decimal_input_pattern,s);
} else {
return and__5023__auto__;
}
})());
});
hitteri.edit.pure.coords.parse_decimal = (function hitteri$edit$pure$coords$parse_decimal(v){
var s = hitteri.edit.pure.coords.normalize_decimal_input(v);
if(hitteri.edit.pure.coords.decimal_input_matches_QMARK_(s)){
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
hitteri.edit.pure.coords.dms_component_re = /(\d+(?:[.,]\d+)?)\s*[°º]\s*(\d+(?:[.,]\d+)?)?\s*['′]?\s*(\d+(?:[.,]\d+)?)?\s*[\"″]?\s*([NnSsEeWw])/;
hitteri.edit.pure.coords.dms_component__GT_decimal = (function hitteri$edit$pure$coords$dms_component__GT_decimal(p__38738){
var vec__38739 = p__38738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38739,(0),null);
var deg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38739,(1),null);
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38739,(2),null);
var sec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38739,(3),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38739,(4),null);
var d = (function (){var or__5025__auto__ = hitteri.edit.pure.coords.parse_decimal(deg);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var m = (function (){var or__5025__auto__ = hitteri.edit.pure.coords.parse_decimal(min);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var s = (function (){var or__5025__auto__ = hitteri.edit.pure.coords.parse_decimal(sec);
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
hitteri.edit.pure.coords.coords_from_dms_components = (function hitteri$edit$pure$coords$coords_from_dms_components(components){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(components))){
var vec__38748 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(hitteri.edit.pure.coords.dms_component__GT_decimal,components);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38748,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38748,(1),null);
var vec__38751 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38747_SHARP_){
return clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__38747_SHARP_,(4)));
}),components);
var d1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38751,(0),null);
var d2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38751,(1),null);
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
hitteri.edit.pure.coords.parse_dms_coordinates = (function hitteri$edit$pure$coords$parse_dms_coordinates(text){
var temp__5825__auto__ = (function (){var G__38761 = text;
var G__38761__$1 = (((G__38761 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38761));
var G__38761__$2 = (((G__38761__$1 == null))?null:clojure.string.trim(G__38761__$1));
var G__38761__$3 = (((G__38761__$2 == null))?null:cljs.core.re_seq(hitteri.edit.pure.coords.dms_component_re,G__38761__$2));
var G__38761__$4 = (((G__38761__$3 == null))?null:cljs.core.not_empty(G__38761__$3));
var G__38761__$5 = (((G__38761__$4 == null))?null:cljs.core.vec(G__38761__$4));
if((G__38761__$5 == null)){
return null;
} else {
return hitteri.edit.pure.coords.coords_from_dms_components(G__38761__$5);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var map__38762 = temp__5825__auto__;
var map__38762__$1 = cljs.core.__destructure_map(map__38762);
var coords = map__38762__$1;
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38762__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38762__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
if(((typeof latitude === 'number') && (((typeof longitude === 'number') && (((((((-90) <= latitude)) && ((latitude <= (90))))) && (((((-180) <= longitude)) && ((longitude <= (180))))))))))){
return coords;
} else {
return null;
}
} else {
return null;
}
});
hitteri.edit.pure.coords.decimal_pair_parts = (function hitteri$edit$pure$coords$decimal_pair_parts(text){
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
var temp__5825__auto__ = cljs.core.seq(cljs.core.re_seq(hitteri.edit.pure.coords.decimal_input_pattern,trimmed));
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
hitteri.edit.pure.coords.coords_from_decimal_pair = (function hitteri$edit$pure$coords$coords_from_decimal_pair(v1,v2){
if(((typeof v1 === 'number') && (typeof v2 === 'number'))){
var a = Math.abs(v1);
var b = Math.abs(v2);
var map__38763 = (((a > (90)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),v2,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),v1], null):(((b > (90)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),v1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),v2], null):(((a > b))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),v1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),v2], null):(((a < b))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),v2,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),v1], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),v1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),v2], null)
))));
var map__38763__$1 = cljs.core.__destructure_map(map__38763);
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38763__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38763__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
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
hitteri.edit.pure.coords.parse_decimal_coordinate_pair = (function hitteri$edit$pure$coords$parse_decimal_coordinate_pair(text){
var temp__5825__auto__ = hitteri.edit.pure.coords.decimal_pair_parts(text);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__38767 = temp__5825__auto__;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38767,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38767,(1),null);
var temp__5825__auto____$1 = hitteri.edit.pure.coords.parse_decimal(p1);
if(cljs.core.truth_(temp__5825__auto____$1)){
var v1 = temp__5825__auto____$1;
var temp__5825__auto____$2 = hitteri.edit.pure.coords.parse_decimal(p2);
if(cljs.core.truth_(temp__5825__auto____$2)){
var v2 = temp__5825__auto____$2;
return hitteri.edit.pure.coords.coords_from_decimal_pair(v1,v2);
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
hitteri.edit.pure.coords.parse_pasted_coordinates = (function hitteri$edit$pure$coords$parse_pasted_coordinates(text){
var or__5025__auto__ = hitteri.edit.pure.coords.parse_dms_coordinates(text);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hitteri.edit.pure.coords.parse_decimal_coordinate_pair(text);
}
});
hitteri.edit.pure.coords.valid_longitude_QMARK_ = (function hitteri$edit$pure$coords$valid_longitude_QMARK_(v){
var n = hitteri.edit.pure.coords.parse_decimal(v);
return ((typeof n === 'number') && (((((-180) <= n)) && ((n <= (180))))));
});
hitteri.edit.pure.coords.valid_latitude_QMARK_ = (function hitteri$edit$pure$coords$valid_latitude_QMARK_(v){
var n = hitteri.edit.pure.coords.parse_decimal(v);
return ((typeof n === 'number') && (((((-90) <= n)) && ((n <= (90))))));
});
/**
 * True when update form longitude and latitude are both valid.
 */
hitteri.edit.pure.coords.form_has_coords_QMARK_ = (function hitteri$edit$pure$coords$form_has_coords_QMARK_(form){
return ((hitteri.edit.pure.coords.valid_longitude_QMARK_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form))) && (hitteri.edit.pure.coords.valid_latitude_QMARK_(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form))));
});
hitteri.edit.pure.coords.to_radians = (function hitteri$edit$pure$coords$to_radians(deg){
return (deg * (Math.PI / (180)));
});
hitteri.edit.pure.coords.haversine_distance_m = (function hitteri$edit$pure$coords$haversine_distance_m(lon1,lat1,lon2,lat2){
var r = 6371000.0;
var dlat = (hitteri.edit.pure.coords.to_radians(lat2) - hitteri.edit.pure.coords.to_radians(lat1));
var dlon = (hitteri.edit.pure.coords.to_radians(lon2) - hitteri.edit.pure.coords.to_radians(lon1));
var a = ((Math.sin((dlat / (2))) * Math.sin((dlat / (2)))) + (((Math.cos(hitteri.edit.pure.coords.to_radians(lat1)) * Math.cos(hitteri.edit.pure.coords.to_radians(lat2))) * Math.sin((dlon / (2)))) * Math.sin((dlon / (2)))));
return ((r * (2)) * Math.atan2(Math.sqrt(a),Math.sqrt(((1) - a))));
});
hitteri.edit.pure.coords.row_lon_lat = (function hitteri$edit$pure$coords$row_lon_lat(row){
var lon = ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row) === 'number')?new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row):hitteri.edit.pure.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row)));
var lat = ((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row) === 'number')?new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row):hitteri.edit.pure.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row)));
if(((typeof lon === 'number') && (typeof lat === 'number'))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat], null);
} else {
return null;
}
});
hitteri.edit.pure.coords.row_has_coords_QMARK_ = (function hitteri$edit$pure$coords$row_has_coords_QMARK_(row){
return cljs.core.boolean$(hitteri.edit.pure.coords.row_lon_lat(row));
});
hitteri.edit.pure.coords.row_distance_m = (function hitteri$edit$pure$coords$row_distance_m(reference_row,row){
var temp__5825__auto__ = hitteri.edit.pure.coords.row_lon_lat(reference_row);
if(cljs.core.truth_(temp__5825__auto__)){
var map__38770 = temp__5825__auto__;
var map__38770__$1 = cljs.core.__destructure_map(map__38770);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38770__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38770__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var temp__5825__auto____$1 = hitteri.edit.pure.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5825__auto____$1)){
var row_coords = temp__5825__auto____$1;
return Math.round(hitteri.edit.pure.coords.haversine_distance_m(longitude,latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row_coords),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row_coords)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=hitteri.edit.pure.coords.js.map
