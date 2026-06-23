goog.provide('placesurfer.edit.pure.duplicates');
placesurfer.edit.pure.duplicates.vec_rows = (function placesurfer$edit$pure$duplicates$vec_rows(rows){
if(cljs.core.sequential_QMARK_(rows)){
return cljs.core.vec(rows);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
placesurfer.edit.pure.duplicates.normalized_name = (function placesurfer$edit$pure$duplicates$normalized_name(name){
var G__38933 = name;
var G__38933__$1 = (((G__38933 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38933));
var G__38933__$2 = (((G__38933__$1 == null))?null:clojure.string.trim(G__38933__$1));
if((G__38933__$2 == null)){
return null;
} else {
return clojure.string.lower_case(G__38933__$2);
}
});
placesurfer.edit.pure.duplicates.coord_key = (function placesurfer$edit$pure$duplicates$coord_key(row){
var temp__5825__auto__ = placesurfer.edit.pure.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5825__auto__)){
var map__38937 = temp__5825__auto__;
var map__38937__$1 = cljs.core.__destructure_map(map__38937);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38937__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38937__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
var G__39000 = ((cljs.core.seq(name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,name):seen);
var G__39001 = cljs.core.rest(xs);
seen = G__39000;
xs = G__39001;
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
var G__39002 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,key);
var G__39003 = cljs.core.rest(xs);
seen = G__39002;
xs = G__39003;
continue;
}
} else {
var G__39004 = seen;
var G__39005 = cljs.core.rest(xs);
seen = G__39004;
xs = G__39005;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__38949){
var vec__38950 = p__38949;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38950,(0),null);
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38950,(1),null);
if((cljs.core.count(rows) > (1))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),rows);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([groups], 0)));
});
placesurfer.edit.pure.duplicates.normalized_source = (function placesurfer$edit$pure$duplicates$normalized_source(row){
var G__38954 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(row);
if((G__38954 == null)){
return null;
} else {
return placesurfer.edit.pure.sources.normalize_update_source(G__38954);
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
return cljs.core.some((function (p1__38956_SHARP_){
return placesurfer.edit.pure.duplicates.fully_identical_rows_QMARK_(row,p1__38956_SHARP_);
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
var by_name = cljs.core.group_by((function (p1__38965_SHARP_){
return placesurfer.edit.pure.duplicates.normalized_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__38965_SHARP_));
}),filter_rows);
var name_dups = placesurfer.edit.pure.duplicates.duplicate_group_row_ids(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38973){
var vec__38974 = p__38973;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38974,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38974,(1),null);
return cljs.core.seq(name);
}),by_name));
var by_coord = cljs.core.group_by(placesurfer.edit.pure.duplicates.coord_key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38966_SHARP_){
return placesurfer.edit.pure.duplicates.coord_key(p1__38966_SHARP_);
}),filter_rows));
var coord_dups = placesurfer.edit.pure.duplicates.duplicate_group_row_ids(by_coord);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(name_dups,coord_dups);
});
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_ = (function placesurfer$edit$pure$duplicates$union_duplicate_groups_BANG_(parent,find_root,group_rows){
if((cljs.core.count(group_rows) > (1))){
var ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),group_rows);
var seq__38977 = cljs.core.seq(cljs.core.rest(ids));
var chunk__38978 = null;
var count__38979 = (0);
var i__38980 = (0);
while(true){
if((i__38980 < count__38979)){
var id = chunk__38978.cljs$core$IIndexed$_nth$arity$2(null,i__38980);
var ra_39006 = (function (){var G__38986 = cljs.core.first(ids);
return (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(G__38986) : find_root.call(null,G__38986));
})();
var rb_39007 = (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(id) : find_root.call(null,id));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ra_39006,rb_39007)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(parent,cljs.core.assoc,ra_39006,rb_39007);
} else {
}


var G__39010 = seq__38977;
var G__39011 = chunk__38978;
var G__39012 = count__38979;
var G__39013 = (i__38980 + (1));
seq__38977 = G__39010;
chunk__38978 = G__39011;
count__38979 = G__39012;
i__38980 = G__39013;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38977);
if(temp__5825__auto__){
var seq__38977__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38977__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__38977__$1);
var G__39014 = cljs.core.chunk_rest(seq__38977__$1);
var G__39015 = c__5548__auto__;
var G__39016 = cljs.core.count(c__5548__auto__);
var G__39017 = (0);
seq__38977 = G__39014;
chunk__38978 = G__39015;
count__38979 = G__39016;
i__38980 = G__39017;
continue;
} else {
var id = cljs.core.first(seq__38977__$1);
var ra_39019 = (function (){var G__38987 = cljs.core.first(ids);
return (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(G__38987) : find_root.call(null,G__38987));
})();
var rb_39020 = (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(id) : find_root.call(null,id));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ra_39019,rb_39020)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(parent,cljs.core.assoc,ra_39019,rb_39020);
} else {
}


var G__39022 = cljs.core.next(seq__38977__$1);
var G__39023 = null;
var G__39024 = (0);
var G__39025 = (0);
seq__38977 = G__39022;
chunk__38978 = G__39023;
count__38979 = G__39024;
i__38980 = G__39025;
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
var by_name = cljs.core.vals(cljs.core.group_by((function (p1__38988_SHARP_){
return placesurfer.edit.pure.duplicates.normalized_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__38988_SHARP_));
}),filter_rows));
var by_coord = cljs.core.vals(cljs.core.group_by(placesurfer.edit.pure.duplicates.coord_key,cljs.core.filterv(placesurfer.edit.pure.duplicates.coord_key,filter_rows)));
var seq__38989_39032 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(by_name,by_coord));
var chunk__38990_39033 = null;
var count__38991_39034 = (0);
var i__38992_39035 = (0);
while(true){
if((i__38992_39035 < count__38991_39034)){
var group_39037 = chunk__38990_39033.cljs$core$IIndexed$_nth$arity$2(null,i__38992_39035);
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_(parent,find_root,group_39037);


var G__39038 = seq__38989_39032;
var G__39039 = chunk__38990_39033;
var G__39040 = count__38991_39034;
var G__39041 = (i__38992_39035 + (1));
seq__38989_39032 = G__39038;
chunk__38990_39033 = G__39039;
count__38991_39034 = G__39040;
i__38992_39035 = G__39041;
continue;
} else {
var temp__5825__auto___39042 = cljs.core.seq(seq__38989_39032);
if(temp__5825__auto___39042){
var seq__38989_39043__$1 = temp__5825__auto___39042;
if(cljs.core.chunked_seq_QMARK_(seq__38989_39043__$1)){
var c__5548__auto___39044 = cljs.core.chunk_first(seq__38989_39043__$1);
var G__39045 = cljs.core.chunk_rest(seq__38989_39043__$1);
var G__39046 = c__5548__auto___39044;
var G__39047 = cljs.core.count(c__5548__auto___39044);
var G__39048 = (0);
seq__38989_39032 = G__39045;
chunk__38990_39033 = G__39046;
count__38991_39034 = G__39047;
i__38992_39035 = G__39048;
continue;
} else {
var group_39049 = cljs.core.first(seq__38989_39043__$1);
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_(parent,find_root,group_39049);


var G__39050 = cljs.core.next(seq__38989_39043__$1);
var G__39051 = null;
var G__39052 = (0);
var G__39053 = (0);
seq__38989_39032 = G__39050;
chunk__38990_39033 = G__39051;
count__38991_39034 = G__39052;
i__38992_39035 = G__39053;
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
placesurfer.edit.pure.duplicates.duplicate_error_message = (function placesurfer$edit$pure$duplicates$duplicate_error_message(p__38996){
var map__38997 = p__38996;
var map__38997__$1 = cljs.core.__destructure_map(map__38997);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38997__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38997__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var G__38998 = kind;
var G__38998__$1 = (((G__38998 instanceof cljs.core.Keyword))?G__38998.fqn:null);
switch (G__38998__$1) {
case "name":
return ["Duplicate name: \"",clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row))),"\""].join('');

break;
case "coords":
var map__38999 = placesurfer.edit.pure.coords.row_lon_lat(row);
var map__38999__$1 = cljs.core.__destructure_map(map__38999);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38999__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38999__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
