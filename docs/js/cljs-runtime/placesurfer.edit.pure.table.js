goog.provide('placesurfer.edit.pure.table');
placesurfer.edit.pure.table.lead_order = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"homepage","homepage",-1646828249)], null);
placesurfer.edit.pure.table.as_update_columns = (function placesurfer$edit$pure$table$as_update_columns(cols){
if(cljs.core.sequential_QMARK_(cols)){
return cljs.core.vec(cols);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
placesurfer.edit.pure.table.distance_sort_active_QMARK_ = (function placesurfer$edit$pure$table$distance_sort_active_QMARK_(selected_row){
return placesurfer.edit.pure.coords.row_has_coords_QMARK_(selected_row);
});
placesurfer.edit.pure.table.visible_data_column_keys = (function placesurfer$edit$pure$table$visible_data_column_keys(update_columns){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),placesurfer.edit.pure.table.as_update_columns(update_columns)));
});
placesurfer.edit.pure.table.preferred_column_keys = (function placesurfer$edit$pure$table$preferred_column_keys(update_columns){
var visible = placesurfer.edit.pure.table.visible_data_column_keys(update_columns);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-icon","action-icon",-355725910),new cljs.core.Keyword(null,"source-icon","source-icon",-769874141),new cljs.core.Keyword(null,"meters","meters",-1644078545)], null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(visible),placesurfer.edit.pure.table.lead_order),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(placesurfer.edit.pure.table.lead_order),visible)], 0)));
});
placesurfer.edit.pure.table.table_columns = (function placesurfer$edit$pure$table$table_columns(var_args){
var G__49579 = arguments.length;
switch (G__49579) {
case 1:
return placesurfer.edit.pure.table.table_columns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.edit.pure.table.table_columns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.pure.table.table_columns.cljs$core$IFn$_invoke$arity$1 = (function (update_columns){
return placesurfer.edit.pure.table.table_columns.cljs$core$IFn$_invoke$arity$2(update_columns,null);
}));

(placesurfer.edit.pure.table.table_columns.cljs$core$IFn$_invoke$arity$2 = (function (update_columns,t){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(t)?placesurfer.edit.pure.columns.column_label.cljs$core$IFn$_invoke$arity$2(k,t):placesurfer.edit.pure.columns.column_label.cljs$core$IFn$_invoke$arity$1(k)),new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null);
}),placesurfer.edit.pure.table.preferred_column_keys(update_columns));
}));

(placesurfer.edit.pure.table.table_columns.cljs$lang$maxFixedArity = 2);

placesurfer.edit.pure.table.resolve_table_sort = (function placesurfer$edit$pure$table$resolve_table_sort(update_sort,distance_sort_QMARK_){
var requested_sort_field = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(update_sort),new cljs.core.Keyword(null,"distance","distance",-1671893894)))?new cljs.core.Keyword(null,"meters","meters",-1644078545):new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(update_sort));
var data_sort_field = placesurfer.edit.pure.sort.table_sort_data_field(requested_sort_field);
var ui_sort_field = (cljs.core.truth_(requested_sort_field)?requested_sort_field:(cljs.core.truth_(distance_sort_QMARK_)?new cljs.core.Keyword(null,"meters","meters",-1644078545):new cljs.core.Keyword(null,"name","name",1843675177)
));
var sort_field = (function (){var or__5025__auto__ = data_sort_field;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ui_sort_field;
}
})();
var sort_dir = (cljs.core.truth_((function (){var and__5023__auto__ = distance_sort_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(requested_sort_field);
} else {
return and__5023__auto__;
}
})())?new cljs.core.Keyword(null,"asc","asc",356854569):(function (){var d = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(update_sort);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),null,new cljs.core.Keyword(null,"asc","asc",356854569),null], null), null),d)){
return d;
} else {
return new cljs.core.Keyword(null,"asc","asc",356854569);
}
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ui-sort-field","ui-sort-field",690376728),ui_sort_field,new cljs.core.Keyword(null,"data-sort-field","data-sort-field",837169189),data_sort_field,new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),sort_field,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757),sort_dir], null);
});
placesurfer.edit.pure.table.update_columns_for_rows = (function placesurfer$edit$pure$table$update_columns_for_rows(rows){
var all_cols = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"meters","meters",-1644078545),null,new cljs.core.Keyword(null,"row-id","row-id",246619473),null,new cljs.core.Keyword(null,"url-form","url-form",426694546),null,new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"pending?","pending?",-2133618792),null,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154),null], null), null),cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rows], 0))))));
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),all_cols))){
return cljs.core.vec(cljs.core.cons(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),all_cols)));
} else {
return all_cols;
}
});
placesurfer.edit.pure.table.sort_update_table_rows = (function placesurfer$edit$pure$table$sort_update_table_rows(rows,p__49581,pin_row_QMARK_){
var map__49582 = p__49581;
var map__49582__$1 = cljs.core.__destructure_map(map__49582);
var sort_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49582__$1,new cljs.core.Keyword(null,"sort-field","sort-field",-941433793));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49582__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var sortable_rows = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pin_row_QMARK_,rows);
var sorted_sortable = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__49580_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__49580_SHARP_,sort_field);
}),(function (a,b){
var cmp = placesurfer.edit.pure.sort.compare_field_values(a,b);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569))){
return cmp;
} else {
return (- cmp);
}
}),sortable_rows);
var pinned_drafts = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pin_row_QMARK_,rows));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(pinned_drafts,sorted_sortable);
});

//# sourceMappingURL=placesurfer.edit.pure.table.js.map
