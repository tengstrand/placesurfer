goog.provide('placesurfer.edit.handlers.save');
placesurfer.edit.handlers.save.topic_name_for_api = (function placesurfer$edit$handlers$save$topic_name_for_api(topic){
return placesurfer.edit.interface$.sources.keyword_name_safe(topic);
});
placesurfer.edit.handlers.save.update_display_rows = (function placesurfer$edit$handlers$save$update_display_rows(s){
return placesurfer.edit.interface$.model.display_rows(s);
});
placesurfer.edit.handlers.save.update_table_model = (function placesurfer$edit$handlers$save$update_table_model(s){
return placesurfer.edit.interface$.model.table_model.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"t","t",-1397832519),(function() {
var G__40183 = null;
var G__40183__1 = (function (key){
return placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"en","en",88457073)),key], 0));
});
var G__40183__2 = (function (key,params){
return placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"en","en",88457073)),key,params], 0));
});
G__40183 = function(key,params){
switch(arguments.length){
case 1:
return G__40183__1.call(this,key);
case 2:
return G__40183__2.call(this,key,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40183.cljs$core$IFn$_invoke$arity$1 = G__40183__1;
G__40183.cljs$core$IFn$_invoke$arity$2 = G__40183__2;
return G__40183;
})()
], null));
});
placesurfer.edit.handlers.save.update_dataset_preconditions_met_QMARK_ = (function placesurfer$edit$handlers$save$update_dataset_preconditions_met_QMARK_(s){
return placesurfer.edit.interface$.model.dataset_preconditions_met_QMARK_(s);
});
placesurfer.edit.handlers.save.dataset_positions_for_save = (function placesurfer$edit$handlers$save$dataset_positions_for_save(s){
var country = new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(s);
var rows = placesurfer.edit.handlers.rows.merge_selected_form_into_rows(s,placesurfer.edit.handlers.rows.save_source_rows(s));
var tombstones = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.rows.row_save_as_tombstone_QMARK_,rows));
var unchanged_stubs = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.rows.saved_row_unchanged_without_coords_QMARK_,rows));
var active = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.rows.saved_row_unchanged_without_coords_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.rows.incomplete_manual_draft_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.rows.row_save_as_tombstone_QMARK_,rows))));
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40142_SHARP_){
return placesurfer.edit.interface$.save.row__GT_save_position(country,p1__40142_SHARP_);
}),active),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40143_SHARP_){
return placesurfer.edit.interface$.save.row__GT_save_position(country,p1__40143_SHARP_);
}),tombstones)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40144_SHARP_){
return placesurfer.edit.interface$.save.row__GT_save_position(country,p1__40144_SHARP_);
}),unchanged_stubs))));
});
placesurfer.edit.handlers.save.disk_save_snapshot_from_state = (function placesurfer$edit$handlers$save$disk_save_snapshot_from_state(s){
try{return placesurfer.edit.interface$.save.canonical_save_positions(placesurfer.edit.handlers.save.dataset_positions_for_save(s));
}catch (e40146){var _ = e40146;
return null;
}});
placesurfer.edit.handlers.save.disk_save_snapshot_from_disk_rows = (function placesurfer$edit$handlers$save$disk_save_snapshot_from_disk_rows(country_code,rows){
try{var active = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.rows.row_save_as_tombstone_QMARK_,placesurfer.edit.handlers.rows.as_update_rows(rows));
var deleted = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.rows.row_save_as_tombstone_QMARK_,placesurfer.edit.handlers.rows.as_update_rows(rows));
return placesurfer.edit.interface$.save.canonical_save_positions(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40147_SHARP_){
return placesurfer.edit.interface$.save.row__GT_save_position(country_code,p1__40147_SHARP_);
}),active),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40148_SHARP_){
return placesurfer.edit.interface$.save.row__GT_save_position(country_code,p1__40148_SHARP_);
}),deleted)));
}catch (e40149){var _ = e40149;
return null;
}});
placesurfer.edit.handlers.save.update_dataset_dirty_QMARK_ = (function placesurfer$edit$handlers$save$update_dataset_dirty_QMARK_(s){
var current = placesurfer.edit.handlers.save.disk_save_snapshot_from_state(s);
var temp__5823__auto__ = new cljs.core.Keyword(null,"update-disk-save-snapshot","update-disk-save-snapshot",-594529398).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__5823__auto__)){
var saved = temp__5823__auto__;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current,saved);
} else {
return placesurfer.edit.interface$.model.dataset_dirty_QMARK_(s);
}
});
placesurfer.edit.handlers.save.client_deleted_preserve_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"locality","locality",842809377),null,new cljs.core.Keyword(null,"layout-par","layout-par",-441618202),null,new cljs.core.Keyword(null,"homepage","homepage",-1646828249),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"layout-name","layout-name",-861676759),null,new cljs.core.Keyword(null,"country-code","country-code",-927451124),null,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"holes","holes",188002959),null,new cljs.core.Keyword(null,"layout-holes","layout-holes",-1095137739),null,new cljs.core.Keyword(null,"layout-length-meters","layout-length-meters",-1184590826),null,new cljs.core.Keyword(null,"latitude","latitude",394867543),null,new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"region-code","region-code",-1558201506),null], null), null);
placesurfer.edit.handlers.save.normalize_loaded_server_row = (function placesurfer$edit$handlers$save$normalize_loaded_server_row(row){
var row__$1 = placesurfer.edit.interface$.rows.ensure_position_description(placesurfer.edit.interface$.rows.ensure_position_image(row));
var action = placesurfer.edit.interface$.rows.coerce_action_keyword(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(row__$1));
if(cljs.core.truth_((function (){var fexpr__40152 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null], null), null);
return (fexpr__40152.cljs$core$IFn$_invoke$arity$1 ? fexpr__40152.cljs$core$IFn$_invoke$arity$1(action) : fexpr__40152.call(null,action));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row__$1,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"deleted","deleted",-510100639));
} else {
return row__$1;
}
});
placesurfer.edit.handlers.save.coords_for_post_load_row_selection = (function placesurfer$edit$handlers$save$coords_for_post_load_row_selection(s){
if(cljs.core.truth_(new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673).cljs$core$IFn$_invoke$arity$1(s))){
return placesurfer.edit.handlers.map.coords_from_update_url_form(s);
} else {
return placesurfer.edit.handlers.map.coords_from_update_form(s);
}
});
/**
 * Remember a clean loaded dataset for the current topic and country.
 */
placesurfer.edit.handlers.save.save_current_update_dataset_to_cache_if_clean_BANG_ = (function placesurfer$edit$handlers$save$save_current_update_dataset_to_cache_if_clean_BANG_(){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var topic = new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s);
var country = new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_((function (){var and__5023__auto__ = topic;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = country;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not(placesurfer.edit.handlers.save.update_dataset_dirty_QMARK_(s));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.update,new cljs.core.Keyword(null,"update-dataset-cache","update-dataset-cache",1886215100),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.edit.pure.dataset_cache.cache_key(topic,country),placesurfer.edit.pure.dataset_cache.entry_from_state(s)], 0));
} else {
return null;
}
});
placesurfer.edit.handlers.save.restore_update_dataset_from_cache_BANG_ = (function placesurfer$edit$handlers$save$restore_update_dataset_from_cache_BANG_(p__40153){
var map__40154 = p__40153;
var map__40154__$1 = cljs.core.__destructure_map(map__40154);
var clear_selection_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40154__$1,new cljs.core.Keyword(null,"clear-selection?","clear-selection?",624435603),false);
var recenter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40154__$1,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true);
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var topic = new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s);
var country = new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(s);
var entry = placesurfer.edit.pure.dataset_cache.cached_entry(new cljs.core.Keyword(null,"update-dataset-cache","update-dataset-cache",1886215100).cljs$core$IFn$_invoke$arity$1(s),topic,country);
if(cljs.core.truth_(entry)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (st){
var G__40155 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(st,new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-error","update-error",-572386700),null,new cljs.core.Keyword(null,"update-message","update-message",109684659),null,new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"update-columns","update-columns",666065227),new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529),new cljs.core.Keyword(null,"disk-baseline","disk-baseline",1325029660).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"update-disk-save-snapshot","update-disk-save-snapshot",-594529398),new cljs.core.Keyword(null,"disk-save-snapshot","disk-save-snapshot",136269226).cljs$core$IFn$_invoke$arity$1(entry)], 0));
if(cljs.core.truth_(clear_selection_QMARK_)){
return placesurfer.app_ui.interface$.state.clear_update_selection_state(G__40155);
} else {
return G__40155;
}
}));

placesurfer.edit.handlers.map.schedule_update_map_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),recenter_QMARK_], null)], 0));

placesurfer.app_ui.interface$.effects.render_BANG_();

return true;
} else {
return null;
}
});
placesurfer.edit.handlers.save.save_loaded_dataset_to_cache_BANG_ = (function placesurfer$edit$handlers$save$save_loaded_dataset_to_cache_BANG_(){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var topic = new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s);
var country = new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_((function (){var and__5023__auto__ = topic;
if(cljs.core.truth_(and__5023__auto__)){
return country;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.update,new cljs.core.Keyword(null,"update-dataset-cache","update-dataset-cache",1886215100),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.edit.pure.dataset_cache.cache_key(topic,country),placesurfer.edit.pure.dataset_cache.entry_from_state(s)], 0));
} else {
return null;
}
});
placesurfer.edit.handlers.save.commit_update_dataset_save_BANG_ = (function placesurfer$edit$handlers$save$commit_update_dataset_save_BANG_(){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var country_code = new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(s);
var rows = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40156_SHARP_){
return placesurfer.edit.interface$.rows.enrich_row_country_code(p1__40156_SHARP_,country_code);
}),placesurfer.edit.handlers.rows.merge_selected_form_into_rows(s,placesurfer.edit.handlers.rows.save_source_rows(s)));
var snapshot = placesurfer.edit.handlers.save.disk_save_snapshot_from_state(s);
var selected_id = new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(s);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (st){
var st__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(st,new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040),rows,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),null,new cljs.core.Keyword(null,"update-disk-save-snapshot","update-disk-save-snapshot",-594529398),snapshot,new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529),placesurfer.edit.interface$.rows.disk_baseline_from_rows(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.rows.saved_delete_row_QMARK_,rows))], 0));
var row = (cljs.core.truth_(selected_id)?placesurfer.edit.handlers.rows.find_update_display_row(st__$1,selected_id):null);
if(cljs.core.truth_(row)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st__$1,new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row);
} else {
return st__$1;
}
}));

placesurfer.edit.handlers.save.save_current_update_dataset_to_cache_if_clean_BANG_();

return placesurfer.edit.handlers.map.schedule_update_map_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));
});
placesurfer.edit.handlers.save.apply_update_dataset_rows_BANG_ = (function placesurfer$edit$handlers$save$apply_update_dataset_rows_BANG_(var_args){
var G__40158 = arguments.length;
switch (G__40158) {
case 1:
return placesurfer.edit.handlers.save.apply_update_dataset_rows_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.edit.handlers.save.apply_update_dataset_rows_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.handlers.save.apply_update_dataset_rows_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return placesurfer.edit.handlers.save.apply_update_dataset_rows_BANG_.cljs$core$IFn$_invoke$arity$2(rows,cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.edit.handlers.save.apply_update_dataset_rows_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (rows,p__40159){
var map__40160 = p__40159;
var map__40160__$1 = cljs.core.__destructure_map(map__40160);
var reset_client_actions_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40160__$1,new cljs.core.Keyword(null,"reset-client-actions?","reset-client-actions?",1285612005),false);
var recenter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40160__$1,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true);
var server_rows = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.handlers.save.normalize_loaded_server_row,rows);
var selected_id = new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
var old_rows = placesurfer.edit.handlers.rows.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)));
var baseline_rows = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.rows.saved_delete_row_QMARK_,server_rows);
var disk_baseline = placesurfer.edit.interface$.rows.disk_baseline_from_rows(baseline_rows);
var disk_snapshot_country = new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
var client_actions = (cljs.core.truth_(reset_client_actions_QMARK_)?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (row){
if(cljs.core.truth_((function (){var G__40162 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(row);
var fexpr__40161 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),null,new cljs.core.Keyword(null,"added","added",2057651688),null,new cljs.core.Keyword(null,"edited","edited",-262616624),null], null), null);
return (fexpr__40161.cljs$core$IFn$_invoke$arity$1 ? fexpr__40161.cljs$core$IFn$_invoke$arity$1(G__40162) : fexpr__40161.call(null,G__40162));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(row)], null);
} else {
return null;
}
}),old_rows)));
var client_edited_data = (cljs.core.truth_(reset_client_actions_QMARK_)?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (row){
if(((placesurfer.edit.interface$.rows.row_marked_edited_QMARK_(row)) || (placesurfer.edit.interface$.rows.row_marked_added_QMARK_(row)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"locality","locality",842809377),new cljs.core.Keyword(null,"homepage","homepage",-1646828249),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"action","action",-811238024)], null))], null);
} else {
return null;
}
}),old_rows)));
var client_deleted_data = (cljs.core.truth_(reset_client_actions_QMARK_)?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (row){
if(placesurfer.edit.interface$.rows.row_marked_deleted_QMARK_(row)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row),cljs.core.select_keys(row,placesurfer.edit.handlers.save.client_deleted_preserve_keys)], null);
} else {
return null;
}
}),old_rows)));
var enrich_country = (function (row){
return placesurfer.edit.interface$.rows.enrich_row_country_code(row,disk_snapshot_country);
});
var rows__$1 = (cljs.core.truth_(reset_client_actions_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(enrich_country,cljs.core.vec(server_rows)):cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
var row_id = new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row);
var file_action = placesurfer.edit.interface$.rows.coerce_action_keyword(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(row));
var client_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(client_actions,row_id);
var edited_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(client_edited_data,row_id);
var deleted_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(client_deleted_data,row_id);
var row__$1 = (function (){var G__40163 = (function (){var G__40164 = (function (){var G__40165 = enrich_country(row);
if(cljs.core.truth_((function (){var and__5023__auto__ = file_action;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not((function (){var fexpr__40166 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null], null), null);
return (fexpr__40166.cljs$core$IFn$_invoke$arity$1 ? fexpr__40166.cljs$core$IFn$_invoke$arity$1(file_action) : fexpr__40166.call(null,file_action));
})());
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40165,new cljs.core.Keyword(null,"action","action",-811238024),file_action);
} else {
return G__40165;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = (file_action == null);
if(and__5023__auto__){
return client_action;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40164,new cljs.core.Keyword(null,"action","action",-811238024),client_action);
} else {
return G__40164;
}
})();
if(cljs.core.truth_(edited_data)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40163,edited_data], 0));
} else {
return G__40163;
}
})();
if(cljs.core.truth_(deleted_data)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deleted_data,row__$1], 0));
} else {
return row__$1;
}
}),server_rows));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
var s__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040),rows__$1,new cljs.core.Keyword(null,"update-columns","update-columns",666065227),placesurfer.edit.interface$.table.as_update_columns(placesurfer.edit.interface$.table.update_columns_for_rows(rows__$1)),new cljs.core.Keyword(null,"update-error","update-error",-572386700),null], 0));
var s__$2 = (function (){var temp__5823__auto__ = (cljs.core.truth_(selected_id)?placesurfer.edit.handlers.rows.find_update_display_row(s__$1,selected_id):null);
if(cljs.core.truth_(temp__5823__auto__)){
var row = temp__5823__auto__;
return placesurfer.edit.handlers.rows.select_update_row_in_state(s__$1,row);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = selected_id;
if(cljs.core.truth_(and__5023__auto__)){
return (placesurfer.edit.handlers.rows.find_update_display_row(s__$1,selected_id) == null);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s__$1,new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),null], 0));
} else {
return s__$1;
}
}
})();
var s__$3 = (function (){var temp__5823__auto__ = placesurfer.edit.handlers.save.coords_for_post_load_row_selection(s__$2);
if(cljs.core.truth_(temp__5823__auto__)){
var map__40167 = temp__5823__auto__;
var map__40167__$1 = cljs.core.__destructure_map(map__40167);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40167__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40167__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var matched = placesurfer.edit.handlers.rows.find_display_row_in_state(s__$2,longitude,latitude);
if(cljs.core.truth_((function (){var and__5023__auto__ = matched;
if(cljs.core.truth_(and__5023__auto__)){
return placesurfer.edit.interface$.rows.saved_update_row_id_QMARK_(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(matched));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(placesurfer.edit.handlers.rows.select_update_row_in_state(s__$2,matched),new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = selected_id;
if(cljs.core.truth_(and__5023__auto__)){
return (!((placesurfer.edit.handlers.rows.find_update_display_row(s__$2,selected_id) == null)));
} else {
return and__5023__auto__;
}
})())){
return s__$2;
} else {
return placesurfer.edit.handlers.rows.select_row_for_url_coords(s__$2,longitude,latitude);

}
}
} else {
return s__$2;
}
})();
return s__$3;
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
var from_disk = placesurfer.edit.handlers.save.disk_save_snapshot_from_disk_rows(disk_snapshot_country,server_rows);
var from_state = placesurfer.edit.handlers.save.disk_save_snapshot_from_state(s);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-disk-save-snapshot","update-disk-save-snapshot",-594529398),(cljs.core.truth_(reset_client_actions_QMARK_)?(function (){var or__5025__auto__ = from_state;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return from_disk;
}
})():from_disk),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529),disk_baseline], 0));
}));

placesurfer.edit.handlers.save.save_loaded_dataset_to_cache_BANG_();

return placesurfer.edit.handlers.map.schedule_update_map_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),recenter_QMARK_], null)], 0));
}));

(placesurfer.edit.handlers.save.apply_update_dataset_rows_BANG_.cljs$lang$maxFixedArity = 2);

placesurfer.edit.handlers.save.reload_update_dataset_BANG_ = (function placesurfer$edit$handlers$save$reload_update_dataset_BANG_(var_args){
var G__40169 = arguments.length;
switch (G__40169) {
case 0:
return placesurfer.edit.handlers.save.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return placesurfer.edit.handlers.save.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.handlers.save.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return placesurfer.edit.handlers.save.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.edit.handlers.save.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(placesurfer.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
var temp__5825__auto__ = new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var on_complete = temp__5825__auto__;
return (on_complete.cljs$core$IFn$_invoke$arity$0 ? on_complete.cljs$core$IFn$_invoke$arity$0() : on_complete.call(null));
} else {
return null;
}
} else {
var map__40170 = ((cljs.core.map_QMARK_(opts))?opts:cljs.core.PersistentArrayMap.EMPTY);
var map__40170__$1 = cljs.core.__destructure_map(map__40170);
var clear_selection_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40170__$1,new cljs.core.Keyword(null,"clear-selection?","clear-selection?",624435603),false);
var recenter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40170__$1,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true);
var force_reload_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40170__$1,new cljs.core.Keyword(null,"force-reload?","force-reload?",-1349067446),false);
var on_complete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40170__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var reset_client_actions_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40170__$1,new cljs.core.Keyword(null,"reset-client-actions?","reset-client-actions?",1285612005),false);
var map__40171 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var map__40171__$1 = cljs.core.__destructure_map(map__40171);
var update_topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40171__$1,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
var update_country_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40171__$1,new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722));
var backend_online_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40171__$1,new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729));
var invoke_complete_BANG_ = (function (){
if(cljs.core.truth_(on_complete)){
return (on_complete.cljs$core$IFn$_invoke$arity$0 ? on_complete.cljs$core$IFn$_invoke$arity$0() : on_complete.call(null));
} else {
return null;
}
});
var can_load_QMARK_ = (function (){var and__5023__auto__ = backend_online_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (((!((update_topic == null)))) && (placesurfer.edit.interface$.model.valid_country_code_QMARK_(update_country_code)));
} else {
return and__5023__auto__;
}
})();
var load_error = ((cljs.core.not(backend_online_QMARK_))?null:(((!((!((update_topic == null))))))?null:(((!(placesurfer.edit.interface$.model.valid_country_code_QMARK_(update_country_code))))?"Select a valid country":null
)));
if(cljs.core.not(can_load_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-columns","update-columns",666065227),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033),false,new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),null,new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),null,new cljs.core.Keyword(null,"update-disk-save-snapshot","update-disk-save-snapshot",-594529398),null,new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529),null,new cljs.core.Keyword(null,"update-error","update-error",-572386700),load_error], 0));
}));

placesurfer.app_ui.interface$.effects.render_BANG_();

return invoke_complete_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(force_reload_QMARK_);
if(and__5023__auto__){
return placesurfer.edit.handlers.save.restore_update_dataset_from_cache_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clear-selection?","clear-selection?",624435603),clear_selection_QMARK_,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),recenter_QMARK_], null));
} else {
return and__5023__auto__;
}
})())){
return invoke_complete_BANG_();
} else {
var request_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_update_load_request_id,cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
var G__40173 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-error","update-error",-572386700),null,new cljs.core.Keyword(null,"update-message","update-message",109684659),null], 0));
if(cljs.core.truth_(clear_selection_QMARK_)){
return placesurfer.app_ui.interface$.state.clear_update_selection_state(G__40173);
} else {
return G__40173;
}
}));

placesurfer.app_ui.interface$.effects.render_BANG_();

var finish_load_BANG_ = (function (thunk){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_update_load_request_id))){
try{(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
}catch (e40174){var e_40195 = e40174;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-error","update-error",-572386700),(function (){var or__5025__auto__ = (((!((e_40195 == null))))?e_40195.message:null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Failed to load dataset";
}
})()], 0));
}
placesurfer.app_ui.interface$.effects.render_BANG_();

return invoke_complete_BANG_();
} else {
return null;
}
});
var on_body = (function (resp,body){
return finish_load_BANG_((function (){
if(cljs.core.truth_(resp.ok)){
return placesurfer.edit.handlers.save.apply_update_dataset_rows_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((body["rows"]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset-client-actions?","reset-client-actions?",1285612005),reset_client_actions_QMARK_,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),recenter_QMARK_], null));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-error","update-error",-572386700),(function (){var or__5025__auto__ = placesurfer.app_ui.interface$.state.update_error_text((body["error"]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Failed to load dataset";
}
})()], 0));
}
}));
});
var on_error = (function (error){
return finish_load_BANG_((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-error","update-error",-572386700),(function (){var or__5025__auto__ = error.message;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Failed to load dataset";
}
})()], 0));
}));
});
var p = fetch(placesurfer.api_client.interface$.dataset_url(),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),placesurfer.edit.handlers.save.topic_name_for_api(update_topic),new cljs.core.Keyword(null,"country-code","country-code",-927451124),update_country_code], null)))], null)));
var p__$1 = p.then((function (resp){
return resp.json().then((function (body){
return on_body(resp,body);
}));
}));
return p__$1.catch(on_error);
}
}
}
}));

(placesurfer.edit.handlers.save.reload_update_dataset_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Reload the current dataset topic from cache or server, discarding client edits.
 */
placesurfer.edit.handlers.save.discard_unsaved_dataset_changes_BANG_ = (function placesurfer$edit$handlers$save$discard_unsaved_dataset_changes_BANG_(on_complete){
return placesurfer.edit.handlers.save.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clear-selection?","clear-selection?",624435603),true,new cljs.core.Keyword(null,"reset-client-actions?","reset-client-actions?",1285612005),true,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),on_complete], null));
});
placesurfer.edit.handlers.save.save_update_dataset_BANG_ = (function placesurfer$edit$handlers$save$save_update_dataset_BANG_(var_args){
var G__40176 = arguments.length;
switch (G__40176) {
case 0:
return placesurfer.edit.handlers.save.save_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return placesurfer.edit.handlers.save.save_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.handlers.save.save_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return placesurfer.edit.handlers.save.save_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.edit.handlers.save.save_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__40177){
var map__40178 = p__40177;
var map__40178__$1 = cljs.core.__destructure_map(map__40178);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40178__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40178__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
placesurfer.edit.handlers.description_sync.flush_update_description_from_dom_BANG_();

placesurfer.app_ui.interface$.state.clear_update_status_BANG_();

var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
if(cljs.core.not(placesurfer.edit.handlers.save.update_dataset_preconditions_met_QMARK_(s))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-error","update-error",-572386700),((cljs.core.not(new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(s)))?"Backend service is not running":"Select a topic and a valid country"
));

placesurfer.app_ui.interface$.effects.render_BANG_();

if(cljs.core.truth_(on_failure)){
return (on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null));
} else {
return null;
}
} else {
try{var positions = placesurfer.edit.handlers.save.dataset_positions_for_save(s);
var topic = new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s);
var complete_success = (function (body){
var count = (body["count"]);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (st){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(st,new cljs.core.Keyword(null,"update-message","update-message",109684659),["Saved ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = count;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (count.cljs$core$IFn$_invoke$arity$1 ? count.cljs$core$IFn$_invoke$arity$1(positions) : count.call(null,positions));
}
})())," places"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-error","update-error",-572386700),null], 0));
}));

placesurfer.edit.handlers.save.commit_update_dataset_save_BANG_();

placesurfer.app_ui.interface$.effects.load_topic_positions_BANG_(topic);

placesurfer.app_ui.interface$.effects.render_BANG_();

if(cljs.core.truth_(on_success)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(body) : on_success.call(null,body));
} else {
return null;
}
});
var complete_failure = (function (message){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-error","update-error",-572386700),message);

placesurfer.app_ui.interface$.effects.render_BANG_();

if(cljs.core.truth_(on_failure)){
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(message) : on_failure.call(null,message));
} else {
return null;
}
});
return fetch(placesurfer.api_client.interface$.save_dataset_url(),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),placesurfer.edit.handlers.save.topic_name_for_api(topic),new cljs.core.Keyword(null,"country-code","country-code",-927451124),new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.clj__GT_js(positions)], null)))], null))).then((function (resp){
return resp.json().then((function (body){
if(cljs.core.truth_(resp.ok)){
return complete_success(body);
} else {
return complete_failure((function (){var or__5025__auto__ = placesurfer.app_ui.interface$.state.update_error_text((body["error"]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Failed to save dataset";
}
})());
}
}));
})).catch((function (error){
return complete_failure((function (){var or__5025__auto__ = error.message;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Failed to save dataset";
}
})());
}));
}catch (e40179){var e = e40179;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-error","update-error",-572386700),(function (){var or__5025__auto__ = (((!((e == null))))?e.message:null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Cannot save dataset";
}
})());

placesurfer.app_ui.interface$.effects.render_BANG_();

if(cljs.core.truth_(on_failure)){
return (on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null));
} else {
return null;
}
}}
}));

(placesurfer.edit.handlers.save.save_update_dataset_BANG_.cljs$lang$maxFixedArity = 1);

placesurfer.edit.handlers.save.save_update_BANG_ = (function placesurfer$edit$handlers$save$save_update_BANG_(){
placesurfer.app_ui.interface$.state.clear_update_status_BANG_();

var map__40180 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var map__40180__$1 = cljs.core.__destructure_map(map__40180);
var backend_online_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180__$1,new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729));
var update_topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180__$1,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
var update_country_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180__$1,new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722));
var update_selected_row_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180__$1,new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563));
var update_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180__$1,new cljs.core.Keyword(null,"update-columns","update-columns",666065227));
var update_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790));
var map__40181 = update_form;
var map__40181__$1 = cljs.core.__destructure_map(map__40181);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var locality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181__$1,new cljs.core.Keyword(null,"locality","locality",842809377));
var homepage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lon = placesurfer.edit.interface$.coords.parse_decimal(longitude);
var lat = placesurfer.edit.interface$.coords.parse_decimal(latitude);
var backend_row_id = (((((!((update_selected_row_id == null)))) && (placesurfer.edit.interface$.rows.saved_update_row_id_QMARK_(update_selected_row_id))))?update_selected_row_id:null);
var update_QMARK_ = (!((backend_row_id == null)));
var payload = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"topic","topic",-1960480691),(cljs.core.truth_(update_topic)?placesurfer.edit.handlers.save.topic_name_for_api(update_topic):null),new cljs.core.Keyword(null,"country-code","country-code",-927451124),update_country_code,new cljs.core.Keyword(null,"row-id","row-id",246619473),backend_row_id,new cljs.core.Keyword(null,"known-columns","known-columns",927843579),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.interface$.sources.keyword_name_safe,update_columns),new cljs.core.Keyword(null,"entry","entry",505168823),(function (){var G__40182 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"locality","locality",842809377),locality,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat,new cljs.core.Keyword(null,"country-code","country-code",-927451124),update_country_code,new cljs.core.Keyword(null,"source","source",-433931539),(function (){var or__5025__auto__ = placesurfer.edit.interface$.sources.source_name_for_save(source);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = ((update_QMARK_)?null:"manual");
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "manual";
}
}
})()], null);
var G__40182__$1 = ((cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40182,new cljs.core.Keyword(null,"homepage","homepage",-1646828249),clojure.string.trim(homepage)):G__40182);
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40182__$1,new cljs.core.Keyword(null,"description","description",-1428560544),clojure.string.trim(description));
} else {
return G__40182__$1;
}
})()], null);
if(cljs.core.not(backend_online_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-error","update-error",-572386700),"Backend service is not running");

return placesurfer.app_ui.interface$.effects.render_BANG_();
} else {
if((((update_topic == null)) || ((((!(placesurfer.edit.interface$.model.valid_country_code_QMARK_(update_country_code)))) || ((!(placesurfer.edit.interface$.forms.valid_update_form_QMARK_(update_form)))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-error","update-error",-572386700),"Topic, country, name, longitude and latitude are required");

return placesurfer.app_ui.interface$.effects.render_BANG_();
} else {
return fetch(placesurfer.api_client.interface$.upsert_row_url(),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(payload))], null))).then((function (resp){
return resp.json().then((function (body){
if(cljs.core.truth_(resp.ok)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-message","update-message",109684659),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((body["action"]),"updated"))?"Information updated":"Information added"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-error","update-error",-572386700),null], 0));

placesurfer.edit.handlers.save.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false,new cljs.core.Keyword(null,"force-reload?","force-reload?",-1349067446),true], null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-error","update-error",-572386700),(function (){var or__5025__auto__ = placesurfer.app_ui.interface$.state.update_error_text((body["error"]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Failed to save";
}
})());
}

return placesurfer.app_ui.interface$.effects.render_BANG_();
}));
})).catch((function (error){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-error","update-error",-572386700),(function (){var or__5025__auto__ = error.message;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Failed to save";
}
})());

return placesurfer.app_ui.interface$.effects.render_BANG_();
}));

}
}
});

//# sourceMappingURL=placesurfer.edit.handlers.save.js.map
