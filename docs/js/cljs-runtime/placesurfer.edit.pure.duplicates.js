goog.provide('placesurfer.edit.pure.duplicates');
placesurfer.edit.pure.duplicates.vec_rows = (function placesurfer$edit$pure$duplicates$vec_rows(rows){
if(cljs.core.sequential_QMARK_(rows)){
return cljs.core.vec(rows);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
placesurfer.edit.pure.duplicates.normalized_name = (function placesurfer$edit$pure$duplicates$normalized_name(name){
var G__24584 = name;
var G__24584__$1 = (((G__24584 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24584));
var G__24584__$2 = (((G__24584__$1 == null))?null:clojure.string.trim(G__24584__$1));
if((G__24584__$2 == null)){
return null;
} else {
return clojure.string.lower_case(G__24584__$2);
}
});
placesurfer.edit.pure.duplicates.coord_key = (function placesurfer$edit$pure$duplicates$coord_key(row){
var temp__5823__auto__ = placesurfer.edit.pure.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5823__auto__)){
var map__24586 = temp__5823__auto__;
var map__24586__$1 = cljs.core.__destructure_map(map__24586);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24586__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24586__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
var G__24669 = ((cljs.core.seq(name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,name):seen);
var G__24670 = cljs.core.rest(xs);
seen = G__24669;
xs = G__24670;
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
var G__24672 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,key);
var G__24673 = cljs.core.rest(xs);
seen = G__24672;
xs = G__24673;
continue;
}
} else {
var G__24674 = seen;
var G__24675 = cljs.core.rest(xs);
seen = G__24674;
xs = G__24675;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__24605){
var vec__24606 = p__24605;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24606,(0),null);
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24606,(1),null);
if((cljs.core.count(rows) > (1))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),rows);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([groups], 0)));
});
placesurfer.edit.pure.duplicates.normalized_source = (function placesurfer$edit$pure$duplicates$normalized_source(row){
var G__24612 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(row);
if((G__24612 == null)){
return null;
} else {
return placesurfer.edit.pure.sources.normalize_update_source(G__24612);
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
return cljs.core.some((function (p1__24613_SHARP_){
return placesurfer.edit.pure.duplicates.fully_identical_rows_QMARK_(row,p1__24613_SHARP_);
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
var by_name = cljs.core.group_by((function (p1__24615_SHARP_){
return placesurfer.edit.pure.duplicates.normalized_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__24615_SHARP_));
}),filter_rows);
var name_dups = placesurfer.edit.pure.duplicates.duplicate_group_row_ids(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__24617){
var vec__24618 = p__24617;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24618,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24618,(1),null);
return cljs.core.seq(name);
}),by_name));
var by_coord = cljs.core.group_by(placesurfer.edit.pure.duplicates.coord_key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24616_SHARP_){
return placesurfer.edit.pure.duplicates.coord_key(p1__24616_SHARP_);
}),filter_rows));
var coord_dups = placesurfer.edit.pure.duplicates.duplicate_group_row_ids(by_coord);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(name_dups,coord_dups);
});
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_ = (function placesurfer$edit$pure$duplicates$union_duplicate_groups_BANG_(parent,find_root,group_rows){
if((cljs.core.count(group_rows) > (1))){
var ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),group_rows);
var seq__24625 = cljs.core.seq(cljs.core.rest(ids));
var chunk__24626 = null;
var count__24627 = (0);
var i__24628 = (0);
while(true){
if((i__24628 < count__24627)){
var id = chunk__24626.cljs$core$IIndexed$_nth$arity$2(null,i__24628);
var ra_24678 = (function (){var G__24638 = cljs.core.first(ids);
return (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(G__24638) : find_root.call(null,G__24638));
})();
var rb_24679 = (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(id) : find_root.call(null,id));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ra_24678,rb_24679)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(parent,cljs.core.assoc,ra_24678,rb_24679);
} else {
}


var G__24680 = seq__24625;
var G__24681 = chunk__24626;
var G__24682 = count__24627;
var G__24683 = (i__24628 + (1));
seq__24625 = G__24680;
chunk__24626 = G__24681;
count__24627 = G__24682;
i__24628 = G__24683;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24625);
if(temp__5823__auto__){
var seq__24625__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24625__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24625__$1);
var G__24684 = cljs.core.chunk_rest(seq__24625__$1);
var G__24685 = c__5548__auto__;
var G__24686 = cljs.core.count(c__5548__auto__);
var G__24687 = (0);
seq__24625 = G__24684;
chunk__24626 = G__24685;
count__24627 = G__24686;
i__24628 = G__24687;
continue;
} else {
var id = cljs.core.first(seq__24625__$1);
var ra_24688 = (function (){var G__24643 = cljs.core.first(ids);
return (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(G__24643) : find_root.call(null,G__24643));
})();
var rb_24689 = (find_root.cljs$core$IFn$_invoke$arity$1 ? find_root.cljs$core$IFn$_invoke$arity$1(id) : find_root.call(null,id));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ra_24688,rb_24689)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(parent,cljs.core.assoc,ra_24688,rb_24689);
} else {
}


var G__24690 = cljs.core.next(seq__24625__$1);
var G__24691 = null;
var G__24692 = (0);
var G__24693 = (0);
seq__24625 = G__24690;
chunk__24626 = G__24691;
count__24627 = G__24692;
i__24628 = G__24693;
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
var by_name = cljs.core.vals(cljs.core.group_by((function (p1__24644_SHARP_){
return placesurfer.edit.pure.duplicates.normalized_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__24644_SHARP_));
}),filter_rows));
var by_coord = cljs.core.vals(cljs.core.group_by(placesurfer.edit.pure.duplicates.coord_key,cljs.core.filterv(placesurfer.edit.pure.duplicates.coord_key,filter_rows)));
var seq__24649_24696 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(by_name,by_coord));
var chunk__24650_24697 = null;
var count__24651_24698 = (0);
var i__24652_24699 = (0);
while(true){
if((i__24652_24699 < count__24651_24698)){
var group_24700 = chunk__24650_24697.cljs$core$IIndexed$_nth$arity$2(null,i__24652_24699);
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_(parent,find_root,group_24700);


var G__24701 = seq__24649_24696;
var G__24702 = chunk__24650_24697;
var G__24703 = count__24651_24698;
var G__24704 = (i__24652_24699 + (1));
seq__24649_24696 = G__24701;
chunk__24650_24697 = G__24702;
count__24651_24698 = G__24703;
i__24652_24699 = G__24704;
continue;
} else {
var temp__5823__auto___24705 = cljs.core.seq(seq__24649_24696);
if(temp__5823__auto___24705){
var seq__24649_24706__$1 = temp__5823__auto___24705;
if(cljs.core.chunked_seq_QMARK_(seq__24649_24706__$1)){
var c__5548__auto___24707 = cljs.core.chunk_first(seq__24649_24706__$1);
var G__24708 = cljs.core.chunk_rest(seq__24649_24706__$1);
var G__24709 = c__5548__auto___24707;
var G__24710 = cljs.core.count(c__5548__auto___24707);
var G__24711 = (0);
seq__24649_24696 = G__24708;
chunk__24650_24697 = G__24709;
count__24651_24698 = G__24710;
i__24652_24699 = G__24711;
continue;
} else {
var group_24712 = cljs.core.first(seq__24649_24706__$1);
placesurfer.edit.pure.duplicates.union_duplicate_groups_BANG_(parent,find_root,group_24712);


var G__24714 = cljs.core.next(seq__24649_24706__$1);
var G__24715 = null;
var G__24716 = (0);
var G__24717 = (0);
seq__24649_24696 = G__24714;
chunk__24650_24697 = G__24715;
count__24651_24698 = G__24716;
i__24652_24699 = G__24717;
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
placesurfer.edit.pure.duplicates.duplicate_error_message = (function placesurfer$edit$pure$duplicates$duplicate_error_message(p__24659){
var map__24661 = p__24659;
var map__24661__$1 = cljs.core.__destructure_map(map__24661);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24661__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24661__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var G__24663 = kind;
var G__24663__$1 = (((G__24663 instanceof cljs.core.Keyword))?G__24663.fqn:null);
switch (G__24663__$1) {
case "name":
return ["Duplicate name: \"",clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row))),"\""].join('');

break;
case "coords":
var map__24664 = placesurfer.edit.pure.coords.row_lon_lat(row);
var map__24664__$1 = cljs.core.__destructure_map(map__24664);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24664__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24664__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
