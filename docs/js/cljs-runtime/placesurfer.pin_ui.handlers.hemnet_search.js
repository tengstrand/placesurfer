goog.provide('placesurfer.pin_ui.handlers.hemnet_search');
placesurfer.pin_ui.handlers.hemnet_search.persist_and_push_BANG_ = (function placesurfer$pin_ui$handlers$hemnet_search$persist_and_push_BANG_(results){
placesurfer.pin_ui.pure.storage.save_search_results_BANG_(results);

if(placesurfer.dropbox.interface$.connected_QMARK_()){
return placesurfer.dropbox.interface$.push_BANG_();
} else {
return null;
}
});
/**
 * Merge `results` (pin-form-shaped maps, each with :id) into
 * :search-results: an existing entry with the same :id has its data
 * replaced by the freshly-imported version rather than duplicated, but its
 * :deleted flag carries over unchanged - re-importing a search (e.g.
 * re-running/paging the same Hemnet search) must not silently un-delete
 * rows the user already discarded via the trash icon.
 * 
 * Returns {:total (count results) :visible N}, where N excludes any of the
 * incoming results that got carried over as :deleted - callers use this to
 * tell a clean "5 imported" apart from "2 of 5 imported, 3 were already
 * discarded" for the import-count toast (see clipboard-ui.handlers.apply).
 */
placesurfer.pin_ui.handlers.hemnet_search.upsert_results_BANG_ = (function placesurfer$pin_ui$handlers$hemnet_search$upsert_results_BANG_(results){
var total = cljs.core.count(results);
var visible = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(total);
if(cljs.core.seq(results)){
var merged_26083 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (s){
var existing = new cljs.core.Keyword(null,"search-results","search-results",306464634).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY);
var existing_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity)),existing);
var incoming_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),results);
var kept = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26068_SHARP_){
return cljs.core.contains_QMARK_(incoming_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26068_SHARP_));
}),existing);
var updated = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
var G__26073 = r;
if(cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing_by_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(r))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26073,new cljs.core.Keyword(null,"deleted","deleted",-510100639),true);
} else {
return G__26073;
}
}),results);
var next_results = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(kept),updated);
cljs.core.reset_BANG_(merged_26083,next_results);

cljs.core.reset_BANG_(visible,cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deleted","deleted",-510100639),updated)));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"search-results","search-results",306464634),next_results);
}));

placesurfer.pin_ui.handlers.hemnet_search.persist_and_push_BANG_(cljs.core.deref(merged_26083));

placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.deref(visible)], null);
});
placesurfer.pin_ui.handlers.hemnet_search.clear_results_BANG_ = (function placesurfer$pin_ui$handlers$hemnet_search$clear_results_BANG_(){
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (p1__26074_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__26074_SHARP_,new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hemnet-selected-id","hemnet-selected-id",-673719098),null], 0));
}));

placesurfer.pin_ui.handlers.hemnet_search.persist_and_push_BANG_(cljs.core.PersistentVector.EMPTY);

return placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));
});
/**
 * Soft-delete one Hemnet search result: mark it :deleted true rather than
 * removing it, so it disappears from the list and the map (see
 * `pin-ui.handlers.map/hemnet-search-result-positions` and
 * `pin-ui.pure.panel/view-props`) but the data itself is kept - persisted
 * locally and still synced to Dropbox. Re-importing the same listing later
 * via `upsert-results!` refreshes its data but keeps it marked :deleted.
 * Stashes {:kind :search-result :id id} in :pin-delete-undo, same slot
 * `pin-ui.handlers.rows/delete-pin!` uses, so the pin-page toolbar's one
 * undo button works for either kind of row.
 */
placesurfer.pin_ui.handlers.hemnet_search.discard_result_BANG_ = (function placesurfer$pin_ui$handlers$hemnet_search$discard_result_BANG_(id){
var next_results_26088 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (s){
var updated = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"deleted","deleted",-510100639),true);
} else {
return r;
}
}),new cljs.core.Keyword(null,"search-results","search-results",306464634).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY));
cljs.core.reset_BANG_(next_results_26088,updated);

var G__26076 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"search-results","search-results",306464634),updated,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-delete-undo","pin-delete-undo",-1970125853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"search-result","search-result",528142443),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"hemnet-selected-id","hemnet-selected-id",-673719098).cljs$core$IFn$_invoke$arity$1(s))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26076,new cljs.core.Keyword(null,"hemnet-selected-id","hemnet-selected-id",-673719098),null);
} else {
return G__26076;
}
}));

if(cljs.core.truth_(cljs.core.deref(next_results_26088))){
placesurfer.pin_ui.handlers.hemnet_search.persist_and_push_BANG_(cljs.core.deref(next_results_26088));
} else {
}

return placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));
});
placesurfer.pin_ui.handlers.hemnet_search.find_result = (function placesurfer$pin_ui$handlers$hemnet_search$find_result(id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26077_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26077_SHARP_))) && (cljs.core.not(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(p1__26077_SHARP_))));
}),new cljs.core.Keyword(null,"search-results","search-results",306464634).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),cljs.core.PersistentVector.EMPTY)));
});
/**
 * Select a Hemnet search-result row: highlight it in the list and focus the
 * map on it - the row-click mirror of `pin-ui.handlers.rows/select-display-row!`.
 */
placesurfer.pin_ui.handlers.hemnet_search.select_result_row_BANG_ = (function placesurfer$pin_ui$handlers$hemnet_search$select_result_row_BANG_(id){
var temp__5823__auto__ = placesurfer.pin_ui.handlers.hemnet_search.find_result(id);
if(cljs.core.truth_(temp__5823__auto__)){
var item = temp__5823__auto__;
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (p1__26078_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26078_SHARP_,new cljs.core.Keyword(null,"hemnet-selected-id","hemnet-selected-id",-673719098),id);
}));

return placesurfer.pin_ui.handlers.map.focus_hemnet_result_on_map_BANG_(item);
} else {
return null;
}
});
/**
 * Reverse of `select-result-row!`: highlight the list row matching a clicked
 * search-result map marker, without re-centering the map or re-opening the
 * popup (the marker click itself already handled that). Matched by :id
 * against :search-results rather than by :marker-topic, so this works the
 * same regardless of which site the result came from (Hemnet, Booli, Notar,
 * ...) - see `pin-ui.handlers.map/search-result-marker-topic` for how topics
 * get assigned per :source.
 */
placesurfer.pin_ui.handlers.hemnet_search.handle_marker_click_BANG_ = (function placesurfer$pin_ui$handlers$hemnet_search$handle_marker_click_BANG_(position){
var temp__5823__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
if(cljs.core.truth_(placesurfer.pin_ui.handlers.hemnet_search.find_result(id))){
return placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (p1__26079_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26079_SHARP_,new cljs.core.Keyword(null,"hemnet-selected-id","hemnet-selected-id",-673719098),id);
}));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Save one Hemnet search result as a regular saved pin, then drop it from
 * the ephemeral results list.
 */
placesurfer.pin_ui.handlers.hemnet_search.save_result_as_pin_BANG_ = (function placesurfer$pin_ui$handlers$hemnet_search$save_result_as_pin_BANG_(id){
var temp__5823__auto__ = placesurfer.pin_ui.handlers.hemnet_search.find_result(id);
if(cljs.core.truth_(temp__5823__auto__)){
var result = temp__5823__auto__;
placesurfer.pin_ui.handlers.rows.import_pin_items_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pins","pins",1725193285),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"id","id",-1388402092))], null)], null));

var remaining = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (s){
var next_results = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26080_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26080_SHARP_));
}),new cljs.core.Keyword(null,"search-results","search-results",306464634).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY)));
cljs.core.reset_BANG_(remaining,next_results);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"search-results","search-results",306464634),next_results);
}));

return placesurfer.pin_ui.handlers.hemnet_search.persist_and_push_BANG_(cljs.core.deref(remaining));
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.pin_ui.handlers.hemnet_search.js.map
