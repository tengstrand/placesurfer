goog.provide('placesurfer.edit.handlers.search');
placesurfer.edit.handlers.search.search_debounce_ms = (400);
placesurfer.edit.handlers.search.outside_country_message = "Location is outside current country";
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.edit !== 'undefined') && (typeof placesurfer.edit.handlers !== 'undefined') && (typeof placesurfer.edit.handlers.search !== 'undefined') && (typeof placesurfer.edit.handlers.search._BANG_search_request_id !== 'undefined')){
} else {
placesurfer.edit.handlers.search._BANG_search_request_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.edit !== 'undefined') && (typeof placesurfer.edit.handlers !== 'undefined') && (typeof placesurfer.edit.handlers.search !== 'undefined') && (typeof placesurfer.edit.handlers.search._BANG_search_timeout !== 'undefined')){
} else {
placesurfer.edit.handlers.search._BANG_search_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Return state with search field and dropdown cleared.
 */
placesurfer.edit.handlers.search.clear_update_search_ui = (function placesurfer$edit$handlers$search$clear_update_search_ui(s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-search-query","update-search-query",761051950),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-search-results","update-search-results",6100547),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"update-search-highlight-index","update-search-highlight-index",781350351),null,new cljs.core.Keyword(null,"update-search-loading?","update-search-loading?",-489958821),false], 0));
});
placesurfer.edit.handlers.search.render_BANG_ = (function placesurfer$edit$handlers$search$render_BANG_(){
return placesurfer.app_ui.interface$.effects.render_BANG_();
});
placesurfer.edit.handlers.search.swap_render_BANG_ = (function placesurfer$edit$handlers$search$swap_render_BANG_(f){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,f);

return placesurfer.edit.handlers.search.render_BANG_();
});
placesurfer.edit.handlers.search.finish_search_BANG_ = (function placesurfer$edit$handlers$search$finish_search_BANG_(request_id,results){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(placesurfer.edit.handlers.search._BANG_search_request_id))){
return placesurfer.edit.handlers.search.swap_render_BANG_((function (p1__55020_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__55020_SHARP_,new cljs.core.Keyword(null,"update-search-results","update-search-results",6100547),results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-search-loading?","update-search-loading?",-489958821),false,new cljs.core.Keyword(null,"update-search-highlight-index","update-search-highlight-index",781350351),placesurfer.pin_ui.interface$.search.highlight_index_for_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0))], 0));
}));
} else {
return null;
}
});
placesurfer.edit.handlers.search.run_photon_search_BANG_ = (function placesurfer$edit$handlers$search$run_photon_search_BANG_(query){
var request_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.handlers.search._BANG_search_request_id,cljs.core.inc);
var trimmed = clojure.string.trim(query);
if((((trimmed).length) < placesurfer.pin_ui.interface$.photon.min_search_chars)){
return placesurfer.edit.handlers.search.finish_search_BANG_(request_id,cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-search-loading?","update-search-loading?",-489958821),true);

placesurfer.edit.handlers.search.render_BANG_();

var map__55022 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var map__55022__$1 = cljs.core.__destructure_map(map__55022);
var countries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55022__$1,new cljs.core.Keyword(null,"countries","countries",863192750));
var country_slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55022__$1,new cljs.core.Keyword(null,"country-slug","country-slug",769681844));
var country_iso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55022__$1,new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117));
var url = placesurfer.pin_ui.interface$.photon.build_search_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([trimmed,(8),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"countries","countries",863192750),countries,new cljs.core.Keyword(null,"country-slug","country-slug",769681844),country_slug], null)], 0));
return fetch(url).then((function (resp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(placesurfer.edit.handlers.search._BANG_search_request_id))){
if(cljs.core.truth_(resp.ok)){
return resp.json().then((function (body){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(placesurfer.edit.handlers.search._BANG_search_request_id))){
return placesurfer.edit.handlers.search.finish_search_BANG_(request_id,placesurfer.pin_ui.interface$.photon.filter_results_for_country.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.pin_ui.interface$.photon.parse_response(body),country_iso,countries,country_slug], 0)));
} else {
return null;
}
})).catch((function (_){
return placesurfer.edit.handlers.search.finish_search_BANG_(request_id,cljs.core.PersistentVector.EMPTY);
}));
} else {
return placesurfer.edit.handlers.search.finish_search_BANG_(request_id,cljs.core.PersistentVector.EMPTY);
}
} else {
return null;
}
})).catch((function (_){
return placesurfer.edit.handlers.search.finish_search_BANG_(request_id,cljs.core.PersistentVector.EMPTY);
}));
}
});
placesurfer.edit.handlers.search.set_update_search_query_BANG_ = (function placesurfer$edit$handlers$search$set_update_search_query_BANG_(query){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (p1__55023_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55023_SHARP_,new cljs.core.Keyword(null,"update-search-query","update-search-query",761051950),query),new cljs.core.Keyword(null,"update-search-highlight-index","update-search-highlight-index",781350351),null);
}));

var temp__5825__auto___55034 = cljs.core.deref(placesurfer.edit.handlers.search._BANG_search_timeout);
if(cljs.core.truth_(temp__5825__auto___55034)){
var timeout_55035 = temp__5825__auto___55034;
clearTimeout(timeout_55035);
} else {
}

cljs.core.reset_BANG_(placesurfer.edit.handlers.search._BANG_search_timeout,setTimeout((function (){
return placesurfer.edit.handlers.search.run_photon_search_BANG_(new cljs.core.Keyword(null,"update-search-query","update-search-query",761051950).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)));
}),placesurfer.edit.handlers.search.search_debounce_ms));

return placesurfer.edit.handlers.search.render_BANG_();
});
placesurfer.edit.handlers.search.select_existing_row_BANG_ = (function placesurfer$edit$handlers$search$select_existing_row_BANG_(row,form){
var form_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),placesurfer.edit.interface$.baseline.coerce_form_text(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row)),new cljs.core.Keyword(null,"location","location",1815599388),placesurfer.edit.interface$.baseline.coerce_form_text(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(row)),new cljs.core.Keyword(null,"homepage","homepage",-1646828249),placesurfer.edit.interface$.baseline.coerce_form_text(new cljs.core.Keyword(null,"homepage","homepage",-1646828249).cljs$core$IFn$_invoke$arity$1(row)),new cljs.core.Keyword(null,"description","description",-1428560544),placesurfer.edit.interface$.baseline.coerce_form_text(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(row))], null)], 0));
return placesurfer.edit.handlers.search.swap_render_BANG_((function (s){
var s__$1 = placesurfer.edit.handlers.search.clear_update_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(placesurfer.edit.handlers.rows.select_update_display_row(s,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row),row),new cljs.core.Keyword(null,"update-form","update-form",475718790),form_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),placesurfer.edit.handlers.rows.compute_update_form_field_errors_for_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-form","update-form",475718790),form_STAR_)),new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),placesurfer.edit.interface$.baseline.row__GT_form_baseline(row)], 0)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.interface$.state.bump_description_sync_token(s__$1),new cljs.core.Keyword(null,"update-table-scroll-token","update-table-scroll-token",903188454),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}));
});
placesurfer.edit.handlers.search.create_pending_row_from_search_BANG_ = (function placesurfer$edit$handlers$search$create_pending_row_from_search_BANG_(result,form){
var existing = placesurfer.edit.handlers.rows.find_blank_manual_draft_pending_place(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
var place = (cljs.core.truth_(existing)?placesurfer.edit.interface$.rows.blank_empty_draft_pending_place(existing):new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pending-id","pending-id",1999041996),placesurfer.edit.handlers.rows.next_pending_row_id_BANG_(),new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"location","location",1815599388),"",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"added","added",2057651688)], null));
var place__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([place,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"added","added",2057651688)], null)], 0));
var places = (cljs.core.truth_(existing)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55028_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(place__$1),new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(p1__55028_SHARP_))){
return place__$1;
} else {
return p1__55028_SHARP_;
}
}),placesurfer.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(placesurfer.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))),place__$1));
var row = placesurfer.edit.interface$.rows.pending_place__GT_row(place__$1);
var errors = placesurfer.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2(form,true);
return placesurfer.edit.handlers.search.swap_render_BANG_((function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.interface$.state.bump_description_sync_token(placesurfer.edit.handlers.search.clear_update_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(placesurfer.edit.handlers.rows.select_update_display_row(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),places,new cljs.core.Keyword(null,"update-form","update-form",475718790),form,new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),errors,new cljs.core.Keyword(null,"update-sort","update-sort",-1611336622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),null,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], 0)),new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(place__$1),row),new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),placesurfer.edit.interface$.baseline.row__GT_form_baseline(row)))),new cljs.core.Keyword(null,"update-table-scroll-token","update-table-scroll-token",903188454),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}));
});
placesurfer.edit.handlers.search.apply_search_result_BANG_ = (function placesurfer$edit$handlers$search$apply_search_result_BANG_(result){
var map__55030 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var map__55030__$1 = cljs.core.__destructure_map(map__55030);
var country_iso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55030__$1,new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117));
var countries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55030__$1,new cljs.core.Keyword(null,"countries","countries",863192750));
var country_slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55030__$1,new cljs.core.Keyword(null,"country-slug","country-slug",769681844));
var update_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55030__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790));
var update_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55030__$1,new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040));
if(cljs.core.truth_(placesurfer.pin_ui.interface$.photon.result_in_current_country_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,country_iso,countries,country_slug], 0)))){
var lon = new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(result);
var lat = new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(result);
var form = placesurfer.edit.pure.forms.form_from_search_result(result,update_form);
var existing = placesurfer.edit.interface$.match.find_saved_row_by_exact_coords(placesurfer.edit.handlers.rows.as_update_rows(update_rows),lon,lat);
placesurfer.app_ui.interface$.state.clear_update_status_BANG_();

if(cljs.core.truth_(existing)){
placesurfer.edit.handlers.search.select_existing_row_BANG_(existing,form);
} else {
placesurfer.edit.handlers.search.create_pending_row_from_search_BANG_(result,form);
}

placesurfer.edit.handlers.form.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$3(lon,lat,cljs.core.PersistentArrayMap.EMPTY);

return placesurfer.edit.handlers.map.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return placesurfer.edit.handlers.search.swap_render_BANG_((function (p1__55029_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55029_SHARP_,new cljs.core.Keyword(null,"update-message","update-message",109684659),placesurfer.edit.handlers.search.outside_country_message);
}));
}
});
placesurfer.edit.handlers.search.select_update_search_result_BANG_ = (function placesurfer$edit$handlers$search$select_update_search_result_BANG_(result){
return placesurfer.edit.handlers.search.apply_search_result_BANG_(result);
});
placesurfer.edit.handlers.search.set_update_search_highlight_index_BANG_ = (function placesurfer$edit$handlers$search$set_update_search_highlight_index_BANG_(idx){
return placesurfer.edit.handlers.search.swap_render_BANG_((function (p1__55031_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55031_SHARP_,new cljs.core.Keyword(null,"update-search-highlight-index","update-search-highlight-index",781350351),idx);
}));
});
placesurfer.edit.handlers.search.update_search_enter_BANG_ = (function placesurfer$edit$handlers$search$update_search_enter_BANG_(){
var map__55032 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var map__55032__$1 = cljs.core.__destructure_map(map__55032);
var update_search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55032__$1,new cljs.core.Keyword(null,"update-search-results","update-search-results",6100547));
var update_search_highlight_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55032__$1,new cljs.core.Keyword(null,"update-search-highlight-index","update-search-highlight-index",781350351));
var action = placesurfer.pin_ui.interface$.search.enter_action.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_search_results,null,update_search_highlight_index], 0));
if(cljs.core.vector_QMARK_(action)){
var temp__5825__auto__ = placesurfer.pin_ui.interface$.search.highlighted_result.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_search_results,cljs.core.second(action)], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var result = temp__5825__auto__;
return placesurfer.edit.handlers.search.select_update_search_result_BANG_(result);
} else {
return null;
}
} else {
return null;
}
});
placesurfer.edit.handlers.search.update_search_keydown_BANG_ = (function placesurfer$edit$handlers$search$update_search_keydown_BANG_(e){
var map__55033 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var map__55033__$1 = cljs.core.__destructure_map(map__55033);
var update_search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55033__$1,new cljs.core.Keyword(null,"update-search-results","update-search-results",6100547));
var update_search_highlight_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55033__$1,new cljs.core.Keyword(null,"update-search-highlight-index","update-search-highlight-index",781350351));
var n = cljs.core.count(update_search_results);
var key = e.key;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ArrowDown",key)){
if((n > (0))){
e.preventDefault();

return placesurfer.edit.handlers.search.set_update_search_highlight_index_BANG_(placesurfer.pin_ui.interface$.search.step_highlight_index.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_search_highlight_index,n,(1)], 0)));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ArrowUp",key)){
if((n > (0))){
e.preventDefault();

return placesurfer.edit.handlers.search.set_update_search_highlight_index_BANG_(placesurfer.pin_ui.interface$.search.step_highlight_index.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_search_highlight_index,n,(-1)], 0)));
} else {
return null;
}
} else {
if(cljs.core.truth_(placesurfer.pin_ui.interface$.search.enter_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)))){
e.preventDefault();

e.stopPropagation();

return placesurfer.edit.handlers.search.update_search_enter_BANG_();
} else {
return null;

}
}
}
});

//# sourceMappingURL=placesurfer.edit.handlers.search.js.map
