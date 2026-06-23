goog.provide('hitteri.edit.pure.model');
hitteri.edit.pure.model.as_update_rows = (function hitteri$edit$pure$model$as_update_rows(rows){
if(cljs.core.sequential_QMARK_(rows)){
return cljs.core.vec(rows);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
hitteri.edit.pure.model.as_update_pending_places = (function hitteri$edit$pure$model$as_update_pending_places(places){
if(cljs.core.sequential_QMARK_(places)){
return cljs.core.vec(places);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
hitteri.edit.pure.model.form_field_errors_QMARK_ = (function hitteri$edit$pure$model$form_field_errors_QMARK_(state){
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956).cljs$core$IFn$_invoke$arity$1(state)));
});
hitteri.edit.pure.model.valid_country_code_QMARK_ = (function hitteri$edit$pure$model$valid_country_code_QMARK_(s){
return cljs.core.boolean$(cljs.core.re_matches(/^[A-Z]{2}$/,clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))));
});
hitteri.edit.pure.model.display_rows = (function hitteri$edit$pure$model$display_rows(state){
return hitteri.edit.pure.rows.display_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(state));
});
hitteri.edit.pure.model.meter_calculation_active_QMARK_ = (function hitteri$edit$pure$model$meter_calculation_active_QMARK_(p__39044){
var map__39045 = p__39044;
var map__39045__$1 = cljs.core.__destructure_map(map__39045);
var update_sort = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39045__$1,new cljs.core.Keyword(null,"update-sort","update-sort",-1611336622));
var update_show_duplicates_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39045__$1,new cljs.core.Keyword(null,"update-show-duplicates?","update-show-duplicates?",962796900));
var or__5025__auto__ = update_show_duplicates_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(update_sort);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"meters","meters",-1644078545))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"distance","distance",-1671893894))));
}
});
hitteri.edit.pure.model.table_model = (function hitteri$edit$pure$model$table_model(var_args){
var G__39049 = arguments.length;
switch (G__39049) {
case 1:
return hitteri.edit.pure.model.table_model.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hitteri.edit.pure.model.table_model.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.edit.pure.model.table_model.cljs$core$IFn$_invoke$arity$1 = (function (state){
return hitteri.edit.pure.model.table_model.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentArrayMap.EMPTY);
}));

(hitteri.edit.pure.model.table_model.cljs$core$IFn$_invoke$arity$2 = (function (state,p__39050){
var map__39051 = p__39050;
var map__39051__$1 = cljs.core.__destructure_map(map__39051);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39051__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var map__39052 = state;
var map__39052__$1 = cljs.core.__destructure_map(map__39052);
var update_selected_row_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39052__$1,new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563));
var update_sort = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39052__$1,new cljs.core.Keyword(null,"update-sort","update-sort",-1611336622));
var update_show_duplicates_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39052__$1,new cljs.core.Keyword(null,"update-show-duplicates?","update-show-duplicates?",962796900));
var all_rows = hitteri.edit.pure.model.display_rows(state);
var duplicate_filter_QMARK_ = cljs.core.boolean$(update_show_duplicates_QMARK_);
var meter_calc_QMARK_ = hitteri.edit.pure.model.meter_calculation_active_QMARK_(state);
var reference_row = (cljs.core.truth_(meter_calc_QMARK_)?(function (){var or__5025__auto__ = (cljs.core.truth_(update_selected_row_id)?cljs.core.some((function (p1__39046_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_selected_row_id,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(p1__39046_SHARP_))){
return p1__39046_SHARP_;
} else {
return null;
}
}),all_rows):null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191).cljs$core$IFn$_invoke$arity$1(state);
}
})():null);
var with_meters = (cljs.core.truth_(meter_calc_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword(null,"meters","meters",-1644078545),hitteri.edit.pure.coords.row_distance_m(reference_row,row));
}),all_rows):all_rows);
var map__39053 = ((duplicate_filter_QMARK_)?(function (){var dup_ids = hitteri.edit.pure.duplicates.duplicate_row_id_set(all_rows);
var dup_rows = cljs.core.filterv((function (p1__39047_SHARP_){
return cljs.core.contains_QMARK_(dup_ids,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(p1__39047_SHARP_));
}),with_meters);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visible-rows","visible-rows",1032226164),hitteri.edit.pure.duplicates.sort_rows_by_duplicate_clusters(dup_rows),new cljs.core.Keyword(null,"ui-sort-field","ui-sort-field",690376728),new cljs.core.Keyword(null,"duplicates","duplicates",1265485699),new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757),new cljs.core.Keyword(null,"asc","asc",356854569)], null);
})():(function (){var map__39057 = hitteri.edit.pure.table.resolve_table_sort(update_sort,false);
var map__39057__$1 = cljs.core.__destructure_map(map__39057);
var ui_sort_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39057__$1,new cljs.core.Keyword(null,"ui-sort-field","ui-sort-field",690376728));
var sort_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39057__$1,new cljs.core.Keyword(null,"sort-field","sort-field",-941433793));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39057__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var sorted_rows = hitteri.edit.pure.table.sort_update_table_rows(with_meters,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),sort_field,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757),sort_dir], null),hitteri.edit.pure.rows.incomplete_manual_draft_QMARK_);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visible-rows","visible-rows",1032226164),sorted_rows,new cljs.core.Keyword(null,"ui-sort-field","ui-sort-field",690376728),ui_sort_field,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757),sort_dir], null);
})());
var map__39053__$1 = cljs.core.__destructure_map(map__39053);
var visible_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39053__$1,new cljs.core.Keyword(null,"visible-rows","visible-rows",1032226164));
var ui_sort_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39053__$1,new cljs.core.Keyword(null,"ui-sort-field","ui-sort-field",690376728));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39053__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var table_columns = hitteri.edit.pure.table.table_columns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-columns","update-columns",666065227).cljs$core$IFn$_invoke$arity$1(state),t);
var field_errors_QMARK_ = hitteri.edit.pure.model.form_field_errors_QMARK_(state);
var table_rows = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-id","row-id",246619473),new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row),update_selected_row_id),new cljs.core.Keyword(null,"values","values",372645556),((((field_errors_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row),update_selected_row_id))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword(null,"form-validation-warning?","form-validation-warning?",1321400166),true):row)], null);
}),visible_rows);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"columns","columns",1998437288),table_columns,new cljs.core.Keyword(null,"rows","rows",850049680),table_rows,new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),ui_sort_field,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757),sort_dir], null);
}));

(hitteri.edit.pure.model.table_model.cljs$lang$maxFixedArity = 2);

hitteri.edit.pure.model.row_client_save_pending_QMARK_ = (function hitteri$edit$pure$model$row_client_save_pending_QMARK_(row,disk_baseline){
if(hitteri.edit.pure.rows.row_marked_deleted_QMARK_(row)){
return true;
} else {
if(hitteri.edit.pure.rows.row_marked_added_QMARK_(row)){
return true;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = hitteri.edit.pure.rows.pending_row_QMARK_(row);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(row));
} else {
return and__5023__auto__;
}
})())){
return true;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = hitteri.edit.pure.rows.row_marked_edited_QMARK_(row);
if(and__5023__auto__){
var and__5023__auto____$1 = hitteri.edit.pure.rows.saved_update_row_id_QMARK_(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row));
if(and__5023__auto____$1){
return hitteri.edit.pure.rows.row_differs_from_disk_baseline_QMARK_(row,disk_baseline);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return true;
} else {
return false;

}
}
}
}
});
hitteri.edit.pure.model.active_saved_row_ids = (function hitteri$edit$pure$model$active_saved_row_ids(rows){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(hitteri.edit.pure.rows.saved_update_row_id_QMARK_,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(hitteri.edit.pure.rows.row_save_as_tombstone_QMARK_,hitteri.edit.pure.model.as_update_rows(rows)))));
});
hitteri.edit.pure.model.disk_saved_row_ids_changed_QMARK_ = (function hitteri$edit$pure$model$disk_saved_row_ids_changed_QMARK_(state){
var temp__5825__auto__ = new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var disk_baseline = temp__5825__auto__;
var baseline_ids = cljs.core.set(cljs.core.keys(disk_baseline));
var current_ids = hitteri.edit.pure.model.active_saved_row_ids(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(state));
return ((cljs.core.seq(baseline_ids)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(baseline_ids,current_ids)));
} else {
return null;
}
});
hitteri.edit.pure.model.row_unsaved_added_QMARK_ = (function hitteri$edit$pure$model$row_unsaved_added_QMARK_(row){
if(hitteri.edit.pure.rows.row_marked_added_QMARK_(row)){
return true;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = hitteri.edit.pure.rows.pending_row_QMARK_(row);
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(row))) && (hitteri.edit.pure.rows.row_save_fields_valid_QMARK_(row)));
} else {
return and__5023__auto__;
}
})())){
return true;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = hitteri.edit.pure.rows.pending_row_QMARK_(row);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"url-form","url-form",426694546).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(and__5023__auto____$1)){
return hitteri.edit.pure.rows.row_save_fields_valid_QMARK_(row);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return true;
} else {
return false;

}
}
}
});
hitteri.edit.pure.model.row_unsaved_edited_QMARK_ = (function hitteri$edit$pure$model$row_unsaved_edited_QMARK_(row,disk_baseline){
var and__5023__auto__ = hitteri.edit.pure.rows.saved_update_row_id_QMARK_(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row));
if(and__5023__auto__){
var and__5023__auto____$1 = (!(hitteri.edit.pure.rows.row_save_as_tombstone_QMARK_(row)));
if(and__5023__auto____$1){
var and__5023__auto____$2 = cljs.core.not(hitteri.edit.pure.rows.pending_row_QMARK_(row));
if(and__5023__auto____$2){
return hitteri.edit.pure.rows.row_differs_from_disk_baseline_QMARK_(row,disk_baseline);
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
hitteri.edit.pure.model.work_rows_for_change_counts = (function hitteri$edit$pure$model$work_rows_for_change_counts(state){
var rows = hitteri.edit.pure.model.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(state));
var places = hitteri.edit.pure.model.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(state));
var row_pending_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(hitteri.edit.pure.rows.pending_row_QMARK_,rows)));
var orphan_places = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39064_SHARP_){
return cljs.core.contains_QMARK_(row_pending_ids,new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(p1__39064_SHARP_));
}),places);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(rows,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hitteri.edit.pure.rows.pending_place__GT_row,orphan_places));
});
/**
 * Unsaved row changes relative to disk baseline: deleted, edited, added.
 */
hitteri.edit.pure.model.dataset_change_counts = (function hitteri$edit$pure$model$dataset_change_counts(state){
var disk_baseline = new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529).cljs$core$IFn$_invoke$arity$1(state);
var rows = hitteri.edit.pure.model.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(state));
var all_rows = hitteri.edit.pure.model.work_rows_for_change_counts(state);
var baseline_ids = cljs.core.set(cljs.core.keys(disk_baseline));
var current_ids = hitteri.edit.pure.model.active_saved_row_ids(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(state));
var client_tombstone_ids = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(baseline_ids,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(hitteri.edit.pure.rows.row_marked_deleted_QMARK_,rows))));
var removed_ids = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(baseline_ids,current_ids);
var deleted = cljs.core.count(clojure.set.union.cljs$core$IFn$_invoke$arity$2(client_tombstone_ids,removed_ids));
var edited = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39065_SHARP_){
return hitteri.edit.pure.model.row_unsaved_edited_QMARK_(p1__39065_SHARP_,disk_baseline);
}),rows));
var added = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(hitteri.edit.pure.model.row_unsaved_added_QMARK_,all_rows));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),deleted,new cljs.core.Keyword(null,"edited","edited",-262616624),edited,new cljs.core.Keyword(null,"added","added",2057651688),added], null);
});
hitteri.edit.pure.model.dataset_dirty_QMARK_ = (function hitteri$edit$pure$model$dataset_dirty_QMARK_(state){
var disk_baseline = new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529).cljs$core$IFn$_invoke$arity$1(state);
var or__5025__auto__ = hitteri.edit.pure.model.disk_saved_row_ids_changed_QMARK_(state);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.some((function (p1__39066_SHARP_){
return hitteri.edit.pure.model.row_client_save_pending_QMARK_(p1__39066_SHARP_,disk_baseline);
}),hitteri.edit.pure.model.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.some((function (p1__39067_SHARP_){
return hitteri.edit.pure.model.row_client_save_pending_QMARK_(p1__39067_SHARP_,disk_baseline);
}),hitteri.edit.pure.model.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(state)));
}
}
});
hitteri.edit.pure.model.dataset_preconditions_met_QMARK_ = (function hitteri$edit$pure$model$dataset_preconditions_met_QMARK_(state){
var and__5023__auto__ = new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__5023__auto__)){
return (((!((new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(state) == null)))) && (hitteri.edit.pure.model.valid_country_code_QMARK_(new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(state))));
} else {
return and__5023__auto__;
}
});

//# sourceMappingURL=hitteri.edit.pure.model.js.map
