goog.provide('placesurfer.edit.pure.rows');
/**
 * Canonical description for row/disk diffing (same round-trip as the rich editor).
 */
placesurfer.edit.pure.rows.description_for_disk_compare = (function placesurfer$edit$pure$rows$description_for_disk_compare(description){
var s = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = description;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()));
if(cljs.core.seq(s)){
return placesurfer.html.interface$.description.description_from_text_editor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.html.interface$.description.description_for_text_display.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0))], 0));
} else {
return "";
}
});
/**
 * Every loaded or new position carries :description (empty string when unset).
 */
placesurfer.edit.pure.rows.ensure_position_description = (function placesurfer$edit$pure$rows$ensure_position_description(position){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(position,new cljs.core.Keyword(null,"description","description",-1428560544),placesurfer.edit.pure.rows.description_for_disk_compare(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(position)));
});
/**
 * Every loaded or new position carries :image (empty string when unset).
 */
placesurfer.edit.pure.rows.ensure_position_image = (function placesurfer$edit$pure$rows$ensure_position_image(position){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(position,new cljs.core.Keyword(null,"image","image",-58725096),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())));
});
placesurfer.edit.pure.rows.row_source_set_QMARK_ = (function placesurfer$edit$pure$rows$row_source_set_QMARK_(row_or_place){
return (!((new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(row_or_place) == null)));
});
placesurfer.edit.pure.rows.pending_place__GT_row = (function placesurfer$edit$pure$rows$pending_place__GT_row(place){
var G__38893 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"locality","locality",842809377),new cljs.core.Keyword(null,"homepage","homepage",-1646828249),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"row-id","row-id",246619473),new cljs.core.Keyword(null,"url-form","url-form",426694546),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"pending?","pending?",-2133618792)],[new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(place,""),new cljs.core.Keyword(null,"locality","locality",842809377).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"homepage","homepage",-1646828249).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"url-form","url-form",426694546).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(place),true]);
var G__38893__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"url-form","url-form",426694546).cljs$core$IFn$_invoke$arity$1(place))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38893,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154),new cljs.core.Keyword(null,"url-pin","url-pin",924738382)):G__38893);
if(cljs.core.truth_(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(place))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38893__$1,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(place));
} else {
return G__38893__$1;
}
});
/**
 * Return keyword action or nil. Blank strings from disk JSON must not reach `keyword`.
 */
placesurfer.edit.pure.rows.coerce_action_keyword = (function placesurfer$edit$pure$rows$coerce_action_keyword(action){
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)))){
if((action instanceof cljs.core.Keyword)){
return action;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)));
}
} else {
return null;
}
});
placesurfer.edit.pure.rows.delete_action_keyword = (function placesurfer$edit$pure$rows$delete_action_keyword(action){
return placesurfer.edit.pure.rows.coerce_action_keyword(action);
});
/**
 * Client-side delete marker before save; saved rows use :deleted on disk.
 */
placesurfer.edit.pure.rows.row_marked_deleted_QMARK_ = (function placesurfer$edit$pure$rows$row_marked_deleted_QMARK_(row){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deleted","deleted",-510100639),placesurfer.edit.pure.rows.delete_action_keyword(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(row)))) && ((!(clojure.string.blank_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row)))))));
});
/**
 * Row persisted on disk (or staged) as deleted.
 */
placesurfer.edit.pure.rows.saved_delete_row_QMARK_ = (function placesurfer$edit$pure$rows$saved_delete_row_QMARK_(row){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null], null), null),placesurfer.edit.pure.rows.delete_action_keyword(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(row)));
});
placesurfer.edit.pure.rows.row_marked_edited_QMARK_ = (function placesurfer$edit$pure$rows$row_marked_edited_QMARK_(row){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"edited","edited",-262616624),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(row));
});
placesurfer.edit.pure.rows.row_marked_added_QMARK_ = (function placesurfer$edit$pure$rows$row_marked_added_QMARK_(row){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(row));
});
/**
 * Legacy disk tombstones without a name.
 */
placesurfer.edit.pure.rows.disk_tombstone_row_QMARK_ = (function placesurfer$edit$pure$rows$disk_tombstone_row_QMARK_(row){
return ((placesurfer.edit.pure.rows.saved_delete_row_QMARK_(row)) && (clojure.string.blank_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row)))));
});
placesurfer.edit.pure.rows.row_save_as_tombstone_QMARK_ = (function placesurfer$edit$pure$rows$row_save_as_tombstone_QMARK_(row){
return ((placesurfer.edit.pure.rows.row_marked_deleted_QMARK_(row)) || (placesurfer.edit.pure.rows.disk_tombstone_row_QMARK_(row)));
});
placesurfer.edit.pure.rows.row_country_code_blank_QMARK_ = (function placesurfer$edit$pure$rows$row_country_code_blank_QMARK_(row){
return clojure.string.blank_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"country-code","country-code",-927451124).cljs$core$IFn$_invoke$arity$2(row,"")));
});
/**
 * Rows loaded from disk often omit per-row :country-code; keep it in client state.
 */
placesurfer.edit.pure.rows.enrich_row_country_code = (function placesurfer$edit$pure$rows$enrich_row_country_code(row,country_code){
if(cljs.core.truth_((function (){var and__5023__auto__ = country_code;
if(cljs.core.truth_(and__5023__auto__)){
return placesurfer.edit.pure.rows.row_country_code_blank_QMARK_(row);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword(null,"country-code","country-code",-927451124),country_code);
} else {
return row;
}
});
placesurfer.edit.pure.rows.mark_row_as_deleted = (function placesurfer$edit$pure$rows$mark_row_as_deleted(row,country_code){
return placesurfer.edit.pure.rows.enrich_row_country_code(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"deleted","deleted",-510100639)),country_code);
});
placesurfer.edit.pure.rows.pending_row_QMARK_ = (function placesurfer$edit$pure$rows$pending_row_QMARK_(row){
var or__5025__auto__ = new cljs.core.Keyword(null,"pending?","pending?",-2133618792).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((function (){var or__5025__auto____$1 = new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return (0);
}
}
})() < (0));
}
});
placesurfer.edit.pure.rows.saved_update_row_id_QMARK_ = (function placesurfer$edit$pure$rows$saved_update_row_id_QMARK_(id){
return ((typeof id === 'number') && ((id >= (0))));
});
placesurfer.edit.pure.rows.vec_rows = (function placesurfer$edit$pure$rows$vec_rows(rows){
if(cljs.core.sequential_QMARK_(rows)){
return cljs.core.vec(rows);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
placesurfer.edit.pure.rows.normalize_disk_baseline_row = (function placesurfer$edit$pure$rows$normalize_disk_baseline_row(row){
var temp__5825__auto__ = placesurfer.edit.pure.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5825__auto__)){
var map__38895 = temp__5825__auto__;
var map__38895__$1 = cljs.core.__destructure_map(map__38895);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38895__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38895__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var map__38898 = row;
var map__38898__$1 = cljs.core.__destructure_map(map__38898);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38898__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var locality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38898__$1,new cljs.core.Keyword(null,"locality","locality",842809377));
var homepage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38898__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38898__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38898__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var holes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38898__$1,new cljs.core.Keyword(null,"holes","holes",188002959));
var layout_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38898__$1,new cljs.core.Keyword(null,"layout-name","layout-name",-861676759));
var src = ((cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(source))))?placesurfer.edit.pure.sources.normalize_update_source(source):null);
var G__38899 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude,new cljs.core.Keyword(null,"description","description",-1428560544),placesurfer.edit.pure.rows.description_for_disk_compare(description)], null);
var G__38899__$1 = ((cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(locality))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38899,new cljs.core.Keyword(null,"locality","locality",842809377),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(locality))):G__38899);
var G__38899__$2 = ((cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38899__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage))):G__38899__$1);
var G__38899__$3 = (cljs.core.truth_(src)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38899__$2,new cljs.core.Keyword(null,"source","source",-433931539),src):G__38899__$2);
var G__38899__$4 = (((!((holes == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38899__$3,new cljs.core.Keyword(null,"holes","holes",188002959),holes):G__38899__$3);
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout_name)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38899__$4,new cljs.core.Keyword(null,"layout-name","layout-name",-861676759),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout_name)));
} else {
return G__38899__$4;
}
} else {
return null;
}
});
/**
 * Disk baseline entries are already normalized; only fill optional keys for legacy shapes.
 */
placesurfer.edit.pure.rows.baseline_entry_for_compare = (function placesurfer$edit$pure$rows$baseline_entry_for_compare(baseline){
if(cljs.core.contains_QMARK_(baseline,new cljs.core.Keyword(null,"description","description",-1428560544))){
return baseline;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(baseline,new cljs.core.Keyword(null,"description","description",-1428560544),"");
}
});
placesurfer.edit.pure.rows.disk_baseline_from_rows = (function placesurfer$edit$pure$rows$disk_baseline_from_rows(rows){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (row){
if(placesurfer.edit.pure.rows.saved_update_row_id_QMARK_(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row))){
var temp__5825__auto__ = placesurfer.edit.pure.rows.normalize_disk_baseline_row(row);
if(cljs.core.truth_(temp__5825__auto__)){
var baseline = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row),baseline], null);
} else {
return null;
}
} else {
return null;
}
}),placesurfer.edit.pure.rows.vec_rows(rows)));
});
placesurfer.edit.pure.rows.row_save_fields_valid_QMARK_ = (function placesurfer$edit$pure$rows$row_save_fields_valid_QMARK_(row){
return ((cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(row,""))))) && ((!((placesurfer.edit.pure.coords.row_lon_lat(row) == null)))));
});
placesurfer.edit.pure.rows.empty_manual_draft_content_snapshot = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"locality","locality",842809377),""], null);
placesurfer.edit.pure.rows.manual_draft_content_snapshot = (function placesurfer$edit$pure$rows$manual_draft_content_snapshot(row_or_place){
var lon = ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row_or_place) === 'number')?new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row_or_place):placesurfer.edit.pure.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row_or_place))
);
var lat = ((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row_or_place) === 'number')?new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row_or_place):placesurfer.edit.pure.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row_or_place))
);
var homepage = (function (){var h = new cljs.core.Keyword(null,"homepage","homepage",-1646828249).cljs$core$IFn$_invoke$arity$1(row_or_place);
if((!((h == null)))){
var s = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(h));
if(cljs.core.seq(s)){
return s;
} else {
return null;
}
} else {
return null;
}
})();
var G__38904 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(row_or_place,""))),new cljs.core.Keyword(null,"locality","locality",842809377),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"locality","locality",842809377).cljs$core$IFn$_invoke$arity$2(row_or_place,"")))], null);
var G__38904__$1 = (cljs.core.truth_(homepage)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38904,new cljs.core.Keyword(null,"homepage","homepage",-1646828249),homepage):G__38904);
var G__38904__$2 = ((typeof lon === 'number')?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38904__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon):G__38904__$1);
if(typeof lat === 'number'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38904__$2,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat);
} else {
return G__38904__$2;
}
});
placesurfer.edit.pure.rows.manual_draft_differs_from_empty_baseline_QMARK_ = (function placesurfer$edit$pure$rows$manual_draft_differs_from_empty_baseline_QMARK_(row_or_place){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.pure.rows.manual_draft_content_snapshot(row_or_place),placesurfer.edit.pure.rows.empty_manual_draft_content_snapshot);
});
placesurfer.edit.pure.rows.manual_draft_pending_row_QMARK_ = (function placesurfer$edit$pure$rows$manual_draft_pending_row_QMARK_(row_or_place){
var and__5023__auto__ = (new cljs.core.Keyword(null,"url-form","url-form",426694546).cljs$core$IFn$_invoke$arity$1(row_or_place) == null);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),placesurfer.edit.pure.sources.normalize_update_source(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(row_or_place)));
if(and__5023__auto____$1){
var or__5025__auto__ = new cljs.core.Keyword(null,"pending?","pending?",-2133618792).cljs$core$IFn$_invoke$arity$1(row_or_place);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((function (){var or__5025__auto____$1 = new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row_or_place);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(row_or_place);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return (0);
}
}
})() < (0));
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
/**
 * Client-only pending row (incl. URL draft) that trash removes entirely.
 */
placesurfer.edit.pure.rows.removable_pending_row_without_url_QMARK_ = (function placesurfer$edit$pure$rows$removable_pending_row_without_url_QMARK_(row_or_place){
return cljs.core.boolean$((function (){var and__5023__auto__ = row_or_place;
if(cljs.core.truth_(and__5023__auto__)){
return placesurfer.edit.pure.rows.pending_row_QMARK_(row_or_place);
} else {
return and__5023__auto__;
}
})());
});
placesurfer.edit.pure.rows.incomplete_manual_draft_QMARK_ = (function placesurfer$edit$pure$rows$incomplete_manual_draft_QMARK_(row_or_place){
var and__5023__auto__ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"pending?","pending?",-2133618792).cljs$core$IFn$_invoke$arity$1(row_or_place);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((function (){var or__5025__auto____$1 = new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row_or_place);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(row_or_place);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return (0);
}
}
})() < (0));
}
})();
if(cljs.core.truth_(and__5023__auto__)){
return (((new cljs.core.Keyword(null,"url-form","url-form",426694546).cljs$core$IFn$_invoke$arity$1(row_or_place) == null)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),placesurfer.edit.pure.sources.normalize_update_source(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(row_or_place)))) && ((!(placesurfer.edit.pure.rows.row_save_fields_valid_QMARK_(row_or_place)))))));
} else {
return and__5023__auto__;
}
});
/**
 * Saved disk row with no coordinates that the client has not modified.
 */
placesurfer.edit.pure.rows.saved_row_unchanged_without_coords_QMARK_ = (function placesurfer$edit$pure$rows$saved_row_unchanged_without_coords_QMARK_(row){
return ((placesurfer.edit.pure.rows.saved_update_row_id_QMARK_(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row))) && ((((placesurfer.edit.pure.coords.row_lon_lat(row) == null)) && ((!(((placesurfer.edit.pure.rows.row_marked_edited_QMARK_(row)) || (((placesurfer.edit.pure.rows.row_marked_added_QMARK_(row)) || (placesurfer.edit.pure.rows.row_marked_deleted_QMARK_(row)))))))))));
});
placesurfer.edit.pure.rows.blank_manual_draft_pending_place_QMARK_ = (function placesurfer$edit$pure$rows$blank_manual_draft_pending_place_QMARK_(place){
var and__5023__auto__ = placesurfer.edit.pure.rows.incomplete_manual_draft_QMARK_(place);
if(cljs.core.truth_(and__5023__auto__)){
return (!(placesurfer.edit.pure.rows.manual_draft_differs_from_empty_baseline_QMARK_(place)));
} else {
return and__5023__auto__;
}
});
placesurfer.edit.pure.rows.empty_draft_pending_place_QMARK_ = (function placesurfer$edit$pure$rows$empty_draft_pending_place_QMARK_(place){
return placesurfer.edit.pure.rows.incomplete_manual_draft_QMARK_(place);
});
placesurfer.edit.pure.rows.blank_empty_draft_pending_place = (function placesurfer$edit$pure$rows$blank_empty_draft_pending_place(place){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(place,new cljs.core.Keyword(null,"name","name",1843675177),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locality","locality",842809377),"",new cljs.core.Keyword(null,"homepage","homepage",-1646828249),null,new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"longitude","longitude",-1268876372),null,new cljs.core.Keyword(null,"latitude","latitude",394867543),null,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"url-form","url-form",426694546),null,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"added","added",2057651688)], 0));
});
placesurfer.edit.pure.rows.row_differs_from_disk_baseline_QMARK_ = (function placesurfer$edit$pure$rows$row_differs_from_disk_baseline_QMARK_(row,disk_baseline){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(disk_baseline,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row));
if(cljs.core.truth_(temp__5825__auto__)){
var baseline = temp__5825__auto__;
var baseline_STAR_ = placesurfer.edit.pure.rows.baseline_entry_for_compare(baseline);
var temp__5823__auto__ = placesurfer.edit.pure.rows.normalize_disk_baseline_row(row);
if(cljs.core.truth_(temp__5823__auto__)){
var normalized = temp__5823__auto__;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(normalized,baseline_STAR_);
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,baseline_STAR_);
}
} else {
return null;
}
});
placesurfer.edit.pure.rows.recompute_row_action = (function placesurfer$edit$pure$rows$recompute_row_action(row,disk_baseline){
if(placesurfer.edit.pure.rows.row_marked_deleted_QMARK_(row)){
return row;
} else {
if(cljs.core.truth_(placesurfer.edit.pure.rows.pending_row_QMARK_(row))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url-form","url-form",426694546).cljs$core$IFn$_invoke$arity$1(row))){
if(placesurfer.edit.pure.rows.row_save_fields_valid_QMARK_(row)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"added","added",2057651688));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"action","action",-811238024));
}
} else {
if(cljs.core.truth_(placesurfer.edit.pure.rows.manual_draft_pending_row_QMARK_(row))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"added","added",2057651688));
} else {
if(placesurfer.edit.pure.rows.row_save_fields_valid_QMARK_(row)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"added","added",2057651688));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"action","action",-811238024));

}
}
}
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = placesurfer.edit.pure.rows.saved_update_row_id_QMARK_(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row));
if(and__5023__auto__){
var and__5023__auto____$1 = placesurfer.edit.pure.rows.row_save_fields_valid_QMARK_(row);
if(and__5023__auto____$1){
return placesurfer.edit.pure.rows.row_differs_from_disk_baseline_QMARK_(row,disk_baseline);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"edited","edited",-262616624));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"action","action",-811238024));

}
}
}
});
placesurfer.edit.pure.rows.pending_place_from_form_baseline = (function placesurfer$edit$pure$rows$pending_place_from_form_baseline(place,baseline){
var lon_str = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$2(baseline,"")));
var lat_str = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$2(baseline,"")));
var homepage_str = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"homepage","homepage",-1646828249).cljs$core$IFn$_invoke$arity$2(baseline,"")));
var description_str = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(baseline,"")));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(place,new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(baseline,""))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locality","locality",842809377),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"locality","locality",842809377).cljs$core$IFn$_invoke$arity$2(baseline,""))),new cljs.core.Keyword(null,"homepage","homepage",-1646828249),((cljs.core.seq(homepage_str))?homepage_str:null),new cljs.core.Keyword(null,"description","description",-1428560544),description_str,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),((cljs.core.seq(lon_str))?placesurfer.edit.pure.coords.parse_decimal(lon_str):null),new cljs.core.Keyword(null,"latitude","latitude",394867543),((cljs.core.seq(lat_str))?placesurfer.edit.pure.coords.parse_decimal(lat_str):null),new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.edit.pure.sources.normalize_update_source(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(baseline)),new cljs.core.Keyword(null,"url-form","url-form",426694546),null,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"added","added",2057651688)], 0));
});
placesurfer.edit.pure.rows.display_rows = (function placesurfer$edit$pure$rows$display_rows(saved_rows,pending_places){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.pure.rows.disk_tombstone_row_QMARK_,placesurfer.edit.pure.rows.vec_rows(saved_rows)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.pure.rows.pending_place__GT_row,((cljs.core.sequential_QMARK_(pending_places))?cljs.core.vec(pending_places):cljs.core.PersistentVector.EMPTY)));
});
placesurfer.edit.pure.rows.row_field_patch_from_form = (function placesurfer$edit$pure$rows$row_field_patch_from_form(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38926 = arguments.length;
var i__5750__auto___38927 = (0);
while(true){
if((i__5750__auto___38927 < len__5749__auto___38926)){
args__5755__auto__.push((arguments[i__5750__auto___38927]));

var G__38928 = (i__5750__auto___38927 + (1));
i__5750__auto___38927 = G__38928;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return placesurfer.edit.pure.rows.row_field_patch_from_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(placesurfer.edit.pure.rows.row_field_patch_from_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,field_errors,p__38918){
var map__38919 = p__38918;
var map__38919__$1 = cljs.core.__destructure_map(map__38919);
var draft_validation_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38919__$1,new cljs.core.Keyword(null,"draft-validation?","draft-validation?",-28998423));
var preserve_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38919__$1,new cljs.core.Keyword(null,"preserve-row","preserve-row",1065640046));
var errors = (function (){var or__5025__auto__ = field_errors;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var description = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(placesurfer.edit.pure.rows.ensure_position_description(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(form,"")], null)));
var G__38920 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"locality","locality",842809377),new cljs.core.Keyword(null,"locality","locality",842809377).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"description","description",-1428560544),description], null);
var G__38920__$1 = (cljs.core.truth_((function (){var or__5025__auto__ = (!(placesurfer.edit.pure.rows.row_source_set_QMARK_(preserve_row)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"url-form","url-form",426694546).cljs$core$IFn$_invoke$arity$1(preserve_row);
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38920,new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.edit.pure.sources.normalize_update_source(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(form))):G__38920);
var G__38920__$2 = (cljs.core.truth_((function (){var or__5025__auto__ = draft_validation_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((cljs.core.not(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(errors))) && (placesurfer.edit.pure.forms.valid_update_name_QMARK_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form))));
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38920__$1,new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.trim(placesurfer.edit.pure.coords.form_field_value_str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form)))):G__38920__$1);
var G__38920__$3 = ((((cljs.core.not(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(errors))) && (placesurfer.edit.pure.coords.valid_longitude_QMARK_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38920__$2,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),placesurfer.edit.pure.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form))):G__38920__$2);
var G__38920__$4 = ((((cljs.core.not(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(errors))) && (placesurfer.edit.pure.coords.valid_latitude_QMARK_(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38920__$3,new cljs.core.Keyword(null,"latitude","latitude",394867543),placesurfer.edit.pure.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form))):G__38920__$3);
if(((cljs.core.not(new cljs.core.Keyword(null,"homepage","homepage",-1646828249).cljs$core$IFn$_invoke$arity$1(errors))) && (placesurfer.edit.pure.forms.valid_homepage_QMARK_(new cljs.core.Keyword(null,"homepage","homepage",-1646828249).cljs$core$IFn$_invoke$arity$1(form))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38920__$4,new cljs.core.Keyword(null,"homepage","homepage",-1646828249),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"homepage","homepage",-1646828249).cljs$core$IFn$_invoke$arity$2(form,""))));
} else {
return G__38920__$4;
}
}));

(placesurfer.edit.pure.rows.row_field_patch_from_form.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(placesurfer.edit.pure.rows.row_field_patch_from_form.cljs$lang$applyTo = (function (seq38915){
var G__38916 = cljs.core.first(seq38915);
var seq38915__$1 = cljs.core.next(seq38915);
var G__38917 = cljs.core.first(seq38915__$1);
var seq38915__$2 = cljs.core.next(seq38915__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38916,G__38917,seq38915__$2);
}));


//# sourceMappingURL=placesurfer.edit.pure.rows.js.map
