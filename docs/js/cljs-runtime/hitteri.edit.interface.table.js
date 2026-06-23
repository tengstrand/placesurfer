goog.provide('hitteri.edit.interface$.table');
/**
 * Display label for an update-table column key.
 */
hitteri.edit.interface$.table.column_label = (function hitteri$edit$interface$table$column_label(var_args){
var G__39258 = arguments.length;
switch (G__39258) {
case 1:
return hitteri.edit.interface$.table.column_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hitteri.edit.interface$.table.column_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.edit.interface$.table.column_label.cljs$core$IFn$_invoke$arity$1 = (function (k){
return hitteri.edit.pure.columns.column_label.cljs$core$IFn$_invoke$arity$1(k);
}));

(hitteri.edit.interface$.table.column_label.cljs$core$IFn$_invoke$arity$2 = (function (k,t){
return hitteri.edit.pure.columns.column_label.cljs$core$IFn$_invoke$arity$2(k,t);
}));

(hitteri.edit.interface$.table.column_label.cljs$lang$maxFixedArity = 2);

/**
 * Maps UI sort keys to row data keys.
 */
hitteri.edit.interface$.table.table_sort_data_field = (function hitteri$edit$interface$table$table_sort_data_field(sort_key){
return hitteri.edit.pure.sort.table_sort_data_field(sort_key);
});
/**
 * Sort helper: numbers asc, nils last, strings case-insensitive.
 */
hitteri.edit.interface$.table.compare_field_values = (function hitteri$edit$interface$table$compare_field_values(a,b){
return hitteri.edit.pure.sort.compare_field_values(a,b);
});
hitteri.edit.interface$.table.as_update_columns = (function hitteri$edit$interface$table$as_update_columns(cols){
return hitteri.edit.pure.table.as_update_columns(cols);
});
hitteri.edit.interface$.table.distance_sort_active_QMARK_ = (function hitteri$edit$interface$table$distance_sort_active_QMARK_(selected_row){
return hitteri.edit.pure.table.distance_sort_active_QMARK_(selected_row);
});
hitteri.edit.interface$.table.preferred_column_keys = (function hitteri$edit$interface$table$preferred_column_keys(update_columns){
return hitteri.edit.pure.table.preferred_column_keys(update_columns);
});
hitteri.edit.interface$.table.table_columns = (function hitteri$edit$interface$table$table_columns(var_args){
var G__39268 = arguments.length;
switch (G__39268) {
case 1:
return hitteri.edit.interface$.table.table_columns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hitteri.edit.interface$.table.table_columns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.edit.interface$.table.table_columns.cljs$core$IFn$_invoke$arity$1 = (function (update_columns){
return hitteri.edit.pure.table.table_columns.cljs$core$IFn$_invoke$arity$1(update_columns);
}));

(hitteri.edit.interface$.table.table_columns.cljs$core$IFn$_invoke$arity$2 = (function (update_columns,t){
return hitteri.edit.pure.table.table_columns.cljs$core$IFn$_invoke$arity$2(update_columns,t);
}));

(hitteri.edit.interface$.table.table_columns.cljs$lang$maxFixedArity = 2);

hitteri.edit.interface$.table.resolve_table_sort = (function hitteri$edit$interface$table$resolve_table_sort(update_sort,distance_sort_QMARK_){
return hitteri.edit.pure.table.resolve_table_sort(update_sort,distance_sort_QMARK_);
});
hitteri.edit.interface$.table.update_columns_for_rows = (function hitteri$edit$interface$table$update_columns_for_rows(rows){
return hitteri.edit.pure.table.update_columns_for_rows(rows);
});
hitteri.edit.interface$.table.sort_update_table_rows = (function hitteri$edit$interface$table$sort_update_table_rows(rows,sort_params,pin_row_QMARK_){
return hitteri.edit.pure.table.sort_update_table_rows(rows,sort_params,pin_row_QMARK_);
});

//# sourceMappingURL=hitteri.edit.interface.table.js.map
