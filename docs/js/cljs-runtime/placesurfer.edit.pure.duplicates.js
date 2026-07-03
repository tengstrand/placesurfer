goog.provide('placesurfer.edit.pure.duplicates');
placesurfer.edit.pure.duplicates.vec_rows = (function placesurfer$edit$pure$duplicates$vec_rows(rows){
if(cljs.core.sequential_QMARK_(rows)){
return cljs.core.vec(rows);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
placesurfer.edit.pure.duplicates.normalized_name = (function placesurfer$edit$pure$duplicates$normalized_name(name){
var G__38900 = name;
var G__38900__$1 = (((G__38900 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38900));
var G__38900__$2 = (((G__38900__$1 == null))?null:clojure.string.trim(G__38900__$1));
if((G__38900__$2 == null)){
return null;
} else {
return clojure.string.lower_case(G__38900__$2);
}
});
placesurfer.edit.pure.duplicates.coord_key = (function placesurfer$edit$pure$duplicates$coord_key(row){
var temp__5825__auto__ = placesurfer.edit.pure.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5825__auto__)){
var map__38901 = temp__5825__auto__;
var map__38901__$1 = cljs.core.__destructure_map(map__38901);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38901__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38901__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [longitude,latitude], null);
} else {
return null;
}
});
placesurfer.edit.pure.duplicates.active_rows = (function placesurfer$edit$pure$duplicates$active_rows(rows){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.pure.rows.row_save_as_tombstone_QMARK_,placesurfer.edit.pure.duplicates.vec_rows(rows));
});
placesurfer.edit.pure.duplicates.duplicate_filter_rows = (function placesurfer$edit$pure$duplicates$duplicate_filter_rows(rows){

return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.pure.rows.disk_tombstone_row_QMARK_,placesurfer.edit.pure.duplicates.vec_rows(rows));
});
/**
 * First row (in list order) whose trimmed name was already seen.
 */
placesurfer.edit.pure.duplicates.find_first_name_duplicate = (function placesurfer$edit$pure$duplicates$find_first_name_duplicate(rows){
var seen = cljs.core.PersistentHashSet.EMPTY;
var xs = cljs.core.seq(placesurfer.edit.pure.duplicates.active_rows(rows));
while(true){
var temp__5823__auto__ = cljs.core.first(xs);
if(cljs.core.truth_(temp__5823__auto__)){
var row = temp__5823__auto__;
var name = placesurfer.edit.pure.duplicates.normalized_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row));
if(((cljs.core.seq(name)) && (cljs.core.contains_QMARK_(seen,name)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row","row",-570139521),row], null);
} else {
var G__38953 = ((cljs.core.seq(name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,name):seen);
var G__38954 = cljs.core.rest(xs);
seen = G__38953;
xs = G__38954;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * First row (in list order) whose longitude/latitude was already seen.
 */
placesurfer.edit.pure.duplicates.find_first_coord_duplicate = (function placesurfer$edit$pure$duplicates$find_first_coord_duplicate(rows){
var seen = cljs.core.PersistentHashSet.EMPTY;
var xs = cljs.core.seq(placesurfer.edit.pure.duplicates.active_rows(rows));
while(true){
var temp__5823__auto__ = cljs.core.first(xs);
if(cljs.core.truth_(temp__5823__auto__)){
var row = temp__5823__auto__;
var temp__5823__auto____$1 = placesurfer.edit.pure.duplicates.coord_key(row);
if(cljs.core.truth_(temp__5823__auto____$1)){
var key = temp__5823__auto____$1;
if(cljs.core.contains_QMARK_(seen,key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.Keyword(null,"row","row",-570139521),row], null);
} else {
var G__38955 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,key);
var G__38956 = cljs.core.rest(xs);
seen = G__38955;
xs = G__38956;
continue;
}
} else {
var G__38957 = seen;
var G__38958 = cljs.core.rest(xs);
seen = G__38957;
xs = G__38958;
continue;
}
} else {
return null;
}
break;
}
});
placesurfer.edit.pure.duplicates.first_duplicate = (function placesurfer$edit$pure$duplicates$first_duplicate(rows){
var or__5025__auto__ = placesurfer.edit.pure.duplicates.find_first_name_duplicate(rows);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.edit.pure.duplicates.find_first_coord_duplicate(rows);
}
});
placesurfer.edit.pure.duplicates.duplicate_group_row_ids = (function placesurfer$edit$pure$duplicates$duplicate_group_row_ids(groups){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__38910){
var vec__38911 = p__38910;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38911,(0),null);
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38911,(1),null);
if((cljs.core.count(rows) > (1))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),rows);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([groups], 0)));
});
placesurfer.edit.pure.duplicates.normalized_source = (function placesurfer$edit$pure$duplicates$normalized_source(row){
var G__38917 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(row);
if((G__38917 == null)){
return null;
} else {
return placesurfer.edit.pure.sources.normalize_update_source(G__38917);
}
});
/**
 * Two rows carry the same longitude/latitude and source.
 */
placesurfer.edit.pure.duplicates.fully_identical_rows_QMARK_ = (function placesurfer$edit$pure$duplicates$fully_identical_rows_QMARK_(a,b){
var and__5023__auto__ = (!((a == null)));
if(and__5023__auto__){
var and__5023__auto____$1 = (!((b == null)));
if(and__5023__auto____$1){
var and__5023__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(b));
if(and__5023__auto____$2){
var ca = placesurfer.edit.pure.duplicates.coord_key(a);
var cb = placesurfer.edit.pure.duplicates.coord_key(b);
var and__5023__auto____$3 = ca;
if(cljs.core.truth_(and__5023__auto____$3)){
var and__5023__auto____$4 = cb;
if(cljs.core.truth_(and__5023__auto____$4)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ca,cb)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.pure.duplicates.normalized_source(a),placesurfer.edit.pure.duplicates.normalized_source(b))));
} else {
return and__5023__auto____$4;
}
} else {
return and__5023__auto____$3;
}
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
placesurfer.edit.pure.duplicates.has_identical_saved_sibling_QMARK_ = (function placesurfer$edit$pure$duplicates$has_identical_saved_sibling_QMARK_(rows,row){
var and__5023__auto__ = placesurfer.edit.pure.rows.saved_update_row_id_QMARK_(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row));
if(and__5023__auto__){
return cljs.core.some((function (p1__38918_SHARP_){
return placesurfer.edit.pure.duplicates.fully_identical_rows_QMARK_(row,p1__38918_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.pure.rows.row_save_as_tombstone_QMARK_,placesurfer.edit.pure.duplicates.active_rows(rows)));
} else {
return and__5023__auto__;
}
});
/**
 * Row ids that share a trimmed name (case-insensitive) and/or coordinates with another row.
 */
placesurfer.edit.pure.duplicates.duplicate_row_id_set = (function placesurfer$edit$pure$duplicates$duplicate_row_id_set(rows){
var filter_rows = placesurfer.edit.pure.duplicates.duplicate_filter_rows(rows);
var by_name = cljs.core.group_by((function (p1__38921_SHARP_){
return placesurfer.edit.pure.duplicates.normalized_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__38921_SHARP_));
}),filter_rows);
var name_dups = placesurfer.edit.pure.duplicates.duplicate_group_row_ids(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38923){
var vec__38924 = p__38923;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38924,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38924,(1),null);
return cljs.core.seq(name);
}),by_name));
var by_coord = cljs.core.group_by(placesurfer.edit.pure.duplicates.coord_key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38922_SHARP_){
return placesurfer.edit.pure.duplicates.coord_key(p1__38922_SHARP_);
}),filter_rows));
var coord_dups = placesurfer.edit.pure.duplicates.duplicate_group_row_ids(by_coord);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(name_dups,coord_dups);
});
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_ = (function placesurfer$edit$pure$duplicates$union_duplicate_groups_BANG_(parent,find_root,group_rows){
if((cljs.core.count(group_rows) > (1))){
var ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),group_rows);
var seq__38927 = cljs.core.seq(cljs.core.rest(ids));
var chunk__38928 = null;
var count__38929 = (0);
var i__38930 = (0);
while(true){
if((i__38930 < count__38929)){
var id = chunk__38928.cljs$core$IIndexed$_nth$arity$2(null,i__38930);
var ra_38959 = (function (){var G__38934 = cljs.core.first(ids);
return (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(G__38934) : find_root.call(null,G__38934));
})();
var rb_38960 = (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(id) : find_root.call(null,id));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ra_38959,rb_38960)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(parent,cljs.core.assoc,ra_38959,rb_38960);
} else {
}


var G__38961 = seq__38927;
var G__38962 = chunk__38928;
var G__38963 = count__38929;
var G__38964 = (i__38930 + (1));
seq__38927 = G__38961;
chunk__38928 = G__38962;
count__38929 = G__38963;
i__38930 = G__38964;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38927);
if(temp__5825__auto__){
var seq__38927__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38927__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__38927__$1);
var G__38965 = cljs.core.chunk_rest(seq__38927__$1);
var G__38966 = c__5548__auto__;
var G__38967 = cljs.core.count(c__5548__auto__);
var G__38968 = (0);
seq__38927 = G__38965;
chunk__38928 = G__38966;
count__38929 = G__38967;
i__38930 = G__38968;
continue;
} else {
var id = cljs.core.first(seq__38927__$1);
var ra_38969 = (function (){var G__38938 = cljs.core.first(ids);
return (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(G__38938) : find_root.call(null,G__38938));
})();
var rb_38970 = (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(id) : find_root.call(null,id));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ra_38969,rb_38970)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(parent,cljs.core.assoc,ra_38969,rb_38970);
} else {
}


var G__38971 = cljs.core.next(seq__38927__$1);
var G__38972 = null;
var G__38973 = (0);
var G__38974 = (0);
seq__38927 = G__38971;
chunk__38928 = G__38972;
count__38929 = G__38973;
i__38930 = G__38974;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Group duplicate rows together (shared name and/or coordinates).
 */
placesurfer.edit.pure.duplicates.sort_rows_by_duplicate_clusters = (function placesurfer$edit$pure$duplicates$sort_rows_by_duplicate_clusters(rows){
var filter_rows = cljs.core.vec(placesurfer.edit.pure.duplicates.duplicate_filter_rows(rows));
var parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(r)], null);
}),filter_rows)));
var find_root = (function placesurfer$edit$pure$duplicates$sort_rows_by_duplicate_clusters_$_find_root(id){
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(parent),id,id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,id)){
return id;
} else {
return placesurfer$edit$pure$duplicates$sort_rows_by_duplicate_clusters_$_find_root(p);
}
});
var by_name = cljs.core.vals(cljs.core.group_by((function (p1__38939_SHARP_){
return placesurfer.edit.pure.duplicates.normalized_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__38939_SHARP_));
}),filter_rows));
var by_coord = cljs.core.vals(cljs.core.group_by(placesurfer.edit.pure.duplicates.coord_key,cljs.core.filterv(placesurfer.edit.pure.duplicates.coord_key,filter_rows)));
var seq__38940_38975 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(by_name,by_coord));
var chunk__38941_38976 = null;
var count__38942_38977 = (0);
var i__38943_38978 = (0);
while(true){
if((i__38943_38978 < count__38942_38977)){
var group_38979 = chunk__38941_38976.cljs$core$IIndexed$_nth$arity$2(null,i__38943_38978);
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_(parent,find_root,group_38979);


var G__38980 = seq__38940_38975;
var G__38981 = chunk__38941_38976;
var G__38982 = count__38942_38977;
var G__38983 = (i__38943_38978 + (1));
seq__38940_38975 = G__38980;
chunk__38941_38976 = G__38981;
count__38942_38977 = G__38982;
i__38943_38978 = G__38983;
continue;
} else {
var temp__5825__auto___38984 = cljs.core.seq(seq__38940_38975);
if(temp__5825__auto___38984){
var seq__38940_38985__$1 = temp__5825__auto___38984;
if(cljs.core.chunked_seq_QMARK_(seq__38940_38985__$1)){
var c__5548__auto___38986 = cljs.core.chunk_first(seq__38940_38985__$1);
var G__38987 = cljs.core.chunk_rest(seq__38940_38985__$1);
var G__38988 = c__5548__auto___38986;
var G__38989 = cljs.core.count(c__5548__auto___38986);
var G__38990 = (0);
seq__38940_38975 = G__38987;
chunk__38941_38976 = G__38988;
count__38942_38977 = G__38989;
i__38943_38978 = G__38990;
continue;
} else {
var group_38991 = cljs.core.first(seq__38940_38985__$1);
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_(parent,find_root,group_38991);


var G__38992 = cljs.core.next(seq__38940_38985__$1);
var G__38993 = null;
var G__38994 = (0);
var G__38995 = (0);
seq__38940_38975 = G__38992;
chunk__38941_38976 = G__38993;
count__38942_38977 = G__38994;
i__38943_38978 = G__38995;
continue;
}
} else {
}
}
break;
}

var cluster_root = (function (row_id){
return find_root(row_id);
});
var root_order = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,root){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,i], null);
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cluster_root,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),filter_rows))))));
var sort_key = (function (row){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(root_order,cluster_root(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row)),Infinity),(function (){var or__5025__auto__ = placesurfer.edit.pure.duplicates.normalized_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),(function (){var or__5025__auto__ = placesurfer.edit.pure.duplicates.coord_key(row);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row)], null);
});
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_key,filter_rows));
});
placesurfer.edit.pure.duplicates.duplicate_error_message = (function placesurfer$edit$pure$duplicates$duplicate_error_message(p__38949){
var map__38950 = p__38949;
var map__38950__$1 = cljs.core.__destructure_map(map__38950);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38950__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38950__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var G__38951 = kind;
var G__38951__$1 = (((G__38951 instanceof cljs.core.Keyword))?G__38951.fqn:null);
switch (G__38951__$1) {
case "name":
return ["Duplicate name: \"",clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row))),"\""].join('');

break;
case "coords":
var map__38952 = placesurfer.edit.pure.coords.row_lon_lat(row);
var map__38952__$1 = cljs.core.__destructure_map(map__38952);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38952__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38952__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
return ["Duplicate coordinates: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(longitude),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(latitude)].join('');

break;
default:
return "Dataset has duplicate names or coordinates";

}
});
placesurfer.edit.pure.duplicates.dataset_has_duplicates_QMARK_ = (function placesurfer$edit$pure$duplicates$dataset_has_duplicates_QMARK_(rows){
return cljs.core.boolean$(placesurfer.edit.pure.duplicates.first_duplicate(rows));
});

//# sourceMappingURL=placesurfer.edit.pure.duplicates.js.map
