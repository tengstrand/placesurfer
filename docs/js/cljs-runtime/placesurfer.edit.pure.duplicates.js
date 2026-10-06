goog.provide('placesurfer.edit.pure.duplicates');
placesurfer.edit.pure.duplicates.vec_rows = (function placesurfer$edit$pure$duplicates$vec_rows(rows){
if(cljs.core.sequential_QMARK_(rows)){
return cljs.core.vec(rows);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
placesurfer.edit.pure.duplicates.normalized_name = (function placesurfer$edit$pure$duplicates$normalized_name(name){
var G__20402 = name;
var G__20402__$1 = (((G__20402 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20402));
var G__20402__$2 = (((G__20402__$1 == null))?null:clojure.string.trim(G__20402__$1));
if((G__20402__$2 == null)){
return null;
} else {
return clojure.string.lower_case(G__20402__$2);
}
});
placesurfer.edit.pure.duplicates.coord_key = (function placesurfer$edit$pure$duplicates$coord_key(row){
var temp__5823__auto__ = placesurfer.edit.pure.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5823__auto__)){
var map__20404 = temp__5823__auto__;
var map__20404__$1 = cljs.core.__destructure_map(map__20404);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20404__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20404__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
var G__20482 = ((cljs.core.seq(name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,name):seen);
var G__20483 = cljs.core.rest(xs);
seen = G__20482;
xs = G__20483;
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
var G__20487 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,key);
var G__20488 = cljs.core.rest(xs);
seen = G__20487;
xs = G__20488;
continue;
}
} else {
var G__20490 = seen;
var G__20491 = cljs.core.rest(xs);
seen = G__20490;
xs = G__20491;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__20418){
var vec__20419 = p__20418;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20419,(0),null);
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20419,(1),null);
if((cljs.core.count(rows) > (1))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),rows);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([groups], 0)));
});
placesurfer.edit.pure.duplicates.normalized_source = (function placesurfer$edit$pure$duplicates$normalized_source(row){
var G__20422 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(row);
if((G__20422 == null)){
return null;
} else {
return placesurfer.edit.pure.sources.normalize_update_source(G__20422);
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
return cljs.core.some((function (p1__20426_SHARP_){
return placesurfer.edit.pure.duplicates.fully_identical_rows_QMARK_(row,p1__20426_SHARP_);
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
var by_name = cljs.core.group_by((function (p1__20428_SHARP_){
return placesurfer.edit.pure.duplicates.normalized_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20428_SHARP_));
}),filter_rows);
var name_dups = placesurfer.edit.pure.duplicates.duplicate_group_row_ids(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__20431){
var vec__20432 = p__20431;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20432,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20432,(1),null);
return cljs.core.seq(name);
}),by_name));
var by_coord = cljs.core.group_by(placesurfer.edit.pure.duplicates.coord_key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20429_SHARP_){
return placesurfer.edit.pure.duplicates.coord_key(p1__20429_SHARP_);
}),filter_rows));
var coord_dups = placesurfer.edit.pure.duplicates.duplicate_group_row_ids(by_coord);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(name_dups,coord_dups);
});
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_ = (function placesurfer$edit$pure$duplicates$union_duplicate_groups_BANG_(parent,find_root,group_rows){
if((cljs.core.count(group_rows) > (1))){
var ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),group_rows);
var seq__20435 = cljs.core.seq(cljs.core.rest(ids));
var chunk__20436 = null;
var count__20437 = (0);
var i__20438 = (0);
while(true){
if((i__20438 < count__20437)){
var id = chunk__20436.cljs$core$IIndexed$_nth$arity$2(null,i__20438);
var ra_20513 = (function (){var G__20444 = cljs.core.first(ids);
return (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(G__20444) : find_root.call(null,G__20444));
})();
var rb_20514 = (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(id) : find_root.call(null,id));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ra_20513,rb_20514)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(parent,cljs.core.assoc,ra_20513,rb_20514);
} else {
}


var G__20516 = seq__20435;
var G__20517 = chunk__20436;
var G__20518 = count__20437;
var G__20519 = (i__20438 + (1));
seq__20435 = G__20516;
chunk__20436 = G__20517;
count__20437 = G__20518;
i__20438 = G__20519;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20435);
if(temp__5823__auto__){
var seq__20435__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20435__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20435__$1);
var G__20522 = cljs.core.chunk_rest(seq__20435__$1);
var G__20523 = c__5548__auto__;
var G__20524 = cljs.core.count(c__5548__auto__);
var G__20525 = (0);
seq__20435 = G__20522;
chunk__20436 = G__20523;
count__20437 = G__20524;
i__20438 = G__20525;
continue;
} else {
var id = cljs.core.first(seq__20435__$1);
var ra_20526 = (function (){var G__20447 = cljs.core.first(ids);
return (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(G__20447) : find_root.call(null,G__20447));
})();
var rb_20527 = (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(id) : find_root.call(null,id));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ra_20526,rb_20527)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(parent,cljs.core.assoc,ra_20526,rb_20527);
} else {
}


var G__20528 = cljs.core.next(seq__20435__$1);
var G__20529 = null;
var G__20530 = (0);
var G__20531 = (0);
seq__20435 = G__20528;
chunk__20436 = G__20529;
count__20437 = G__20530;
i__20438 = G__20531;
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
var by_name = cljs.core.vals(cljs.core.group_by((function (p1__20450_SHARP_){
return placesurfer.edit.pure.duplicates.normalized_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20450_SHARP_));
}),filter_rows));
var by_coord = cljs.core.vals(cljs.core.group_by(placesurfer.edit.pure.duplicates.coord_key,cljs.core.filterv(placesurfer.edit.pure.duplicates.coord_key,filter_rows)));
var seq__20460_20532 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(by_name,by_coord));
var chunk__20461_20533 = null;
var count__20462_20534 = (0);
var i__20463_20535 = (0);
while(true){
if((i__20463_20535 < count__20462_20534)){
var group_20536 = chunk__20461_20533.cljs$core$IIndexed$_nth$arity$2(null,i__20463_20535);
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_(parent,find_root,group_20536);


var G__20537 = seq__20460_20532;
var G__20538 = chunk__20461_20533;
var G__20539 = count__20462_20534;
var G__20540 = (i__20463_20535 + (1));
seq__20460_20532 = G__20537;
chunk__20461_20533 = G__20538;
count__20462_20534 = G__20539;
i__20463_20535 = G__20540;
continue;
} else {
var temp__5823__auto___20541 = cljs.core.seq(seq__20460_20532);
if(temp__5823__auto___20541){
var seq__20460_20542__$1 = temp__5823__auto___20541;
if(cljs.core.chunked_seq_QMARK_(seq__20460_20542__$1)){
var c__5548__auto___20543 = cljs.core.chunk_first(seq__20460_20542__$1);
var G__20544 = cljs.core.chunk_rest(seq__20460_20542__$1);
var G__20545 = c__5548__auto___20543;
var G__20546 = cljs.core.count(c__5548__auto___20543);
var G__20547 = (0);
seq__20460_20532 = G__20544;
chunk__20461_20533 = G__20545;
count__20462_20534 = G__20546;
i__20463_20535 = G__20547;
continue;
} else {
var group_20548 = cljs.core.first(seq__20460_20542__$1);
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_(parent,find_root,group_20548);


var G__20549 = cljs.core.next(seq__20460_20542__$1);
var G__20550 = null;
var G__20551 = (0);
var G__20552 = (0);
seq__20460_20532 = G__20549;
chunk__20461_20533 = G__20550;
count__20462_20534 = G__20551;
i__20463_20535 = G__20552;
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
placesurfer.edit.pure.duplicates.duplicate_error_message = (function placesurfer$edit$pure$duplicates$duplicate_error_message(p__20474){
var map__20475 = p__20474;
var map__20475__$1 = cljs.core.__destructure_map(map__20475);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var G__20476 = kind;
var G__20476__$1 = (((G__20476 instanceof cljs.core.Keyword))?G__20476.fqn:null);
switch (G__20476__$1) {
case "name":
return ["Duplicate name: \"",clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row))),"\""].join('');

break;
case "coords":
var map__20481 = placesurfer.edit.pure.coords.row_lon_lat(row);
var map__20481__$1 = cljs.core.__destructure_map(map__20481);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20481__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20481__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
