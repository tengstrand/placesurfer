goog.provide('placesurfer.edit.pure.duplicates');
placesurfer.edit.pure.duplicates.vec_rows = (function placesurfer$edit$pure$duplicates$vec_rows(rows){
if(cljs.core.sequential_QMARK_(rows)){
return cljs.core.vec(rows);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
placesurfer.edit.pure.duplicates.normalized_name = (function placesurfer$edit$pure$duplicates$normalized_name(name){
var G__20393 = name;
var G__20393__$1 = (((G__20393 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20393));
var G__20393__$2 = (((G__20393__$1 == null))?null:clojure.string.trim(G__20393__$1));
if((G__20393__$2 == null)){
return null;
} else {
return clojure.string.lower_case(G__20393__$2);
}
});
placesurfer.edit.pure.duplicates.coord_key = (function placesurfer$edit$pure$duplicates$coord_key(row){
var temp__5823__auto__ = placesurfer.edit.pure.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5823__auto__)){
var map__20396 = temp__5823__auto__;
var map__20396__$1 = cljs.core.__destructure_map(map__20396);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20396__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20396__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
var temp__5821__auto__ = cljs.core.first(xs);
if(cljs.core.truth_(temp__5821__auto__)){
var row = temp__5821__auto__;
var name = placesurfer.edit.pure.duplicates.normalized_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row));
if(((cljs.core.seq(name)) && (cljs.core.contains_QMARK_(seen,name)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row","row",-570139521),row], null);
} else {
var G__20479 = ((cljs.core.seq(name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,name):seen);
var G__20480 = cljs.core.rest(xs);
seen = G__20479;
xs = G__20480;
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
var temp__5821__auto__ = cljs.core.first(xs);
if(cljs.core.truth_(temp__5821__auto__)){
var row = temp__5821__auto__;
var temp__5821__auto____$1 = placesurfer.edit.pure.duplicates.coord_key(row);
if(cljs.core.truth_(temp__5821__auto____$1)){
var key = temp__5821__auto____$1;
if(cljs.core.contains_QMARK_(seen,key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.Keyword(null,"row","row",-570139521),row], null);
} else {
var G__20483 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,key);
var G__20484 = cljs.core.rest(xs);
seen = G__20483;
xs = G__20484;
continue;
}
} else {
var G__20485 = seen;
var G__20486 = cljs.core.rest(xs);
seen = G__20485;
xs = G__20486;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__20406){
var vec__20407 = p__20406;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20407,(0),null);
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20407,(1),null);
if((cljs.core.count(rows) > (1))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),rows);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([groups], 0)));
});
placesurfer.edit.pure.duplicates.normalized_source = (function placesurfer$edit$pure$duplicates$normalized_source(row){
var G__20413 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(row);
if((G__20413 == null)){
return null;
} else {
return placesurfer.edit.pure.sources.normalize_update_source(G__20413);
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
return cljs.core.some((function (p1__20417_SHARP_){
return placesurfer.edit.pure.duplicates.fully_identical_rows_QMARK_(row,p1__20417_SHARP_);
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
var by_name = cljs.core.group_by((function (p1__20418_SHARP_){
return placesurfer.edit.pure.duplicates.normalized_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20418_SHARP_));
}),filter_rows);
var name_dups = placesurfer.edit.pure.duplicates.duplicate_group_row_ids(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__20420){
var vec__20421 = p__20420;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20421,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20421,(1),null);
return cljs.core.seq(name);
}),by_name));
var by_coord = cljs.core.group_by(placesurfer.edit.pure.duplicates.coord_key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20419_SHARP_){
return placesurfer.edit.pure.duplicates.coord_key(p1__20419_SHARP_);
}),filter_rows));
var coord_dups = placesurfer.edit.pure.duplicates.duplicate_group_row_ids(by_coord);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(name_dups,coord_dups);
});
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_ = (function placesurfer$edit$pure$duplicates$union_duplicate_groups_BANG_(parent,find_root,group_rows){
if((cljs.core.count(group_rows) > (1))){
var ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),group_rows);
var seq__20424 = cljs.core.seq(cljs.core.rest(ids));
var chunk__20425 = null;
var count__20426 = (0);
var i__20427 = (0);
while(true){
if((i__20427 < count__20426)){
var id = chunk__20425.cljs$core$IIndexed$_nth$arity$2(null,i__20427);
var ra_20494 = (function (){var G__20440 = cljs.core.first(ids);
return (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(G__20440) : find_root.call(null,G__20440));
})();
var rb_20495 = (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(id) : find_root.call(null,id));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ra_20494,rb_20495)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(parent,cljs.core.assoc,ra_20494,rb_20495);
} else {
}


var G__20497 = seq__20424;
var G__20498 = chunk__20425;
var G__20499 = count__20426;
var G__20500 = (i__20427 + (1));
seq__20424 = G__20497;
chunk__20425 = G__20498;
count__20426 = G__20499;
i__20427 = G__20500;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20424);
if(temp__5823__auto__){
var seq__20424__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20424__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20424__$1);
var G__20502 = cljs.core.chunk_rest(seq__20424__$1);
var G__20503 = c__5548__auto__;
var G__20504 = cljs.core.count(c__5548__auto__);
var G__20505 = (0);
seq__20424 = G__20502;
chunk__20425 = G__20503;
count__20426 = G__20504;
i__20427 = G__20505;
continue;
} else {
var id = cljs.core.first(seq__20424__$1);
var ra_20508 = (function (){var G__20441 = cljs.core.first(ids);
return (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(G__20441) : find_root.call(null,G__20441));
})();
var rb_20509 = (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(id) : find_root.call(null,id));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ra_20508,rb_20509)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(parent,cljs.core.assoc,ra_20508,rb_20509);
} else {
}


var G__20510 = cljs.core.next(seq__20424__$1);
var G__20511 = null;
var G__20512 = (0);
var G__20513 = (0);
seq__20424 = G__20510;
chunk__20425 = G__20511;
count__20426 = G__20512;
i__20427 = G__20513;
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
var by_name = cljs.core.vals(cljs.core.group_by((function (p1__20447_SHARP_){
return placesurfer.edit.pure.duplicates.normalized_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20447_SHARP_));
}),filter_rows));
var by_coord = cljs.core.vals(cljs.core.group_by(placesurfer.edit.pure.duplicates.coord_key,cljs.core.filterv(placesurfer.edit.pure.duplicates.coord_key,filter_rows)));
var seq__20449_20516 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(by_name,by_coord));
var chunk__20450_20517 = null;
var count__20451_20518 = (0);
var i__20452_20519 = (0);
while(true){
if((i__20452_20519 < count__20451_20518)){
var group_20520 = chunk__20450_20517.cljs$core$IIndexed$_nth$arity$2(null,i__20452_20519);
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_(parent,find_root,group_20520);


var G__20521 = seq__20449_20516;
var G__20522 = chunk__20450_20517;
var G__20523 = count__20451_20518;
var G__20524 = (i__20452_20519 + (1));
seq__20449_20516 = G__20521;
chunk__20450_20517 = G__20522;
count__20451_20518 = G__20523;
i__20452_20519 = G__20524;
continue;
} else {
var temp__5823__auto___20525 = cljs.core.seq(seq__20449_20516);
if(temp__5823__auto___20525){
var seq__20449_20526__$1 = temp__5823__auto___20525;
if(cljs.core.chunked_seq_QMARK_(seq__20449_20526__$1)){
var c__5548__auto___20527 = cljs.core.chunk_first(seq__20449_20526__$1);
var G__20528 = cljs.core.chunk_rest(seq__20449_20526__$1);
var G__20529 = c__5548__auto___20527;
var G__20530 = cljs.core.count(c__5548__auto___20527);
var G__20531 = (0);
seq__20449_20516 = G__20528;
chunk__20450_20517 = G__20529;
count__20451_20518 = G__20530;
i__20452_20519 = G__20531;
continue;
} else {
var group_20532 = cljs.core.first(seq__20449_20526__$1);
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_(parent,find_root,group_20532);


var G__20533 = cljs.core.next(seq__20449_20526__$1);
var G__20534 = null;
var G__20535 = (0);
var G__20536 = (0);
seq__20449_20516 = G__20533;
chunk__20450_20517 = G__20534;
count__20451_20518 = G__20535;
i__20452_20519 = G__20536;
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
placesurfer.edit.pure.duplicates.duplicate_error_message = (function placesurfer$edit$pure$duplicates$duplicate_error_message(p__20458){
var map__20460 = p__20458;
var map__20460__$1 = cljs.core.__destructure_map(map__20460);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var G__20461 = kind;
var G__20461__$1 = (((G__20461 instanceof cljs.core.Keyword))?G__20461.fqn:null);
switch (G__20461__$1) {
case "name":
return ["Duplicate name: \"",clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row))),"\""].join('');

break;
case "coords":
var map__20463 = placesurfer.edit.pure.coords.row_lon_lat(row);
var map__20463__$1 = cljs.core.__destructure_map(map__20463);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
