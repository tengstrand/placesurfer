goog.provide('placesurfer.edit.interface$.table');
/**
 * Display label for an update-table column key.
 */
placesurfer.edit.interface$.table.column_label = (function placesurfer$edit$interface$table$column_label(var_args){
var G__39266 = arguments.length;
switch (G__39266) {
case 1:
return placesurfer.edit.interface$.table.column_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.edit.interface$.table.column_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.interface$.table.column_label.cljs$core$IFn$_invoke$arity$1 = (function (k){
return placesurfer.edit.pure.columns.column_label.cljs$core$IFn$_invoke$arity$1(k);
}));

(placesurfer.edit.interface$.table.column_label.cljs$core$IFn$_invoke$arity$2 = (function (k,t){
return placesurfer.edit.pure.columns.column_label.cljs$core$IFn$_invoke$arity$2(k,t);
}));

(placesurfer.edit.interface$.table.column_label.cljs$lang$maxFixedArity = 2);

/**
 * Maps UI sort keys to row data keys.
 */
placesurfer.edit.interface$.table.table_sort_data_field = (function placesurfer$edit$interface$table$table_sort_data_field(sort_key){
return placesurfer.edit.pure.sort.table_sort_data_field(sort_key);
});
/**
 * Sort helper: numbers asc, nils last, strings case-insensitive.
 */
placesurfer.edit.interface$.table.compare_field_values = (function placesurfer$edit$interface$table$compare_field_values(a,b){
return placesurfer.edit.pure.sort.compare_field_values(a,b);
});
placesurfer.edit.interface$.table.as_update_columns = (function placesurfer$edit$interface$table$as_update_columns(cols){
return placesurfer.edit.pure.table.as_update_columns(cols);
});
placesurfer.edit.interface$.table.distance_sort_active_QMARK_ = (function placesurfer$edit$interface$table$distance_sort_active_QMARK_(selected_row){
return placesurfer.edit.pure.table.distance_sort_active_QMARK_(selected_row);
});
placesurfer.edit.interface$.table.preferred_column_keys = (function placesurfer$edit$interface$table$preferred_column_keys(update_columns){
return placesurfer.edit.pure.table.preferred_column_keys(update_columns);
});
placesurfer.edit.interface$.table.table_columns = (function placesurfer$edit$interface$table$table_columns(var_args){
var G__39270 = arguments.length;
switch (G__39270) {
case 1:
return placesurfer.edit.interface$.table.table_columns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.edit.interface$.table.table_columns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.interface$.table.table_columns.cljs$core$IFn$_invoke$arity$1 = (function (update_columns){
return placesurfer.edit.pure.table.table_columns.cljs$core$IFn$_invoke$arity$1(update_columns);
}));

(placesurfer.edit.interface$.table.table_columns.cljs$core$IFn$_invoke$arity$2 = (function (update_columns,t){
return placesurfer.edit.pure.table.table_columns.cljs$core$IFn$_invoke$arity$2(update_columns,t);
}));

(placesurfer.edit.interface$.table.table_columns.cljs$lang$maxFixedArity = 2);

placesurfer.edit.interface$.table.resolve_table_sort = (function placesurfer$edit$interface$table$resolve_table_sort(update_sort,distance_sort_QMARK_){
return placesurfer.edit.pure.table.resolve_table_sort(update_sort,distance_sort_QMARK_);
});
placesurfer.edit.interface$.table.update_columns_for_rows = (function placesurfer$edit$interface$table$update_columns_for_rows(rows){
return placesurfer.edit.pure.table.update_columns_for_rows(rows);
});
placesurfer.edit.interface$.table.sort_update_table_rows = (function placesurfer$edit$interface$table$sort_update_table_rows(rows,sort_params,pin_row_QMARK_){
return placesurfer.edit.pure.table.sort_update_table_rows(rows,sort_params,pin_row_QMARK_);
});

//# sourceMappingURL=placesurfer.edit.interface.table.js.map
