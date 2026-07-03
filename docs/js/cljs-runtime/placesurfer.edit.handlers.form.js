goog.provide('placesurfer.edit.handlers.form');
placesurfer.edit.handlers.form.invalid_google_maps_url_error = "Not a valid Google Maps link";
placesurfer.edit.handlers.form.valid_update_google_maps_url_QMARK_ = (function placesurfer$edit$handlers$form$valid_update_google_maps_url_QMARK_(url){
var s = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
if(cljs.core.seq(s)){
var coords = placesurfer.googlestreetmap.interface$.parse_coordinates(url);
var place_name = placesurfer.googlestreetmap.interface$.parse_name(url);
var or__5025__auto__ = typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords) === 'number';
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords) === 'number';
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = placesurfer.app_ui.interface$.state.non_empty_text_QMARK_(place_name);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return clojure.string.includes_QMARK_(s,"google.com/maps");
}
}
}
} else {
return null;
}
});
placesurfer.edit.handlers.form.country_label_for_code = (function placesurfer$edit$handlers$form$country_label_for_code(iso,countries){
var or__5025__auto__ = cljs.core.some((function (country){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(iso,new cljs.core.Keyword(null,"iso","iso",-1366207543).cljs$core$IFn$_invoke$arity$1(country))){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(country);
} else {
return null;
}
}),countries);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return iso;
}
});
placesurfer.edit.handlers.form.update_url_country_mismatch_error = (function placesurfer$edit$handlers$form$update_url_country_mismatch_error(resolved_iso,selected_iso,countries){
return ["The pasted country (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(placesurfer.edit.handlers.form.country_label_for_code(resolved_iso,countries)),") doesn't match selected country (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(placesurfer.edit.handlers.form.country_label_for_code(selected_iso,countries)),")."].join('');
});
placesurfer.edit.handlers.form.clear_update_url_draft_state = (function placesurfer$edit$handlers$form$clear_update_url_draft_state(s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url-form","url-form",426694546),placesurfer.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s))))], 0));
});
placesurfer.edit.handlers.form.update_url_country_mismatch_QMARK_ = (function placesurfer$edit$handlers$form$update_url_country_mismatch_QMARK_(selected_country,resolved_country){
return ((placesurfer.edit.interface$.model.valid_country_code_QMARK_(selected_country)) && (((placesurfer.edit.interface$.model.valid_country_code_QMARK_(resolved_country)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_country,resolved_country)))));
});
placesurfer.edit.handlers.form.find_blank_manual_draft_pending_place = (function placesurfer$edit$handlers$form$find_blank_manual_draft_pending_place(s){
return cljs.core.some((function (place){
if(cljs.core.truth_(placesurfer.edit.interface$.rows.blank_manual_draft_pending_place_QMARK_(place))){
return place;
} else {
return null;
}
}),placesurfer.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s)));
});
placesurfer.edit.handlers.form.next_pending_row_id_BANG_ = (function placesurfer$edit$handlers$form$next_pending_row_id_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_update_pending_id_seq,cljs.core.dec);
});
placesurfer.edit.handlers.form.ensure_empty_draft_update_row_BANG_ = (function placesurfer$edit$handlers$form$ensure_empty_draft_update_row_BANG_(){
placesurfer.app_ui.interface$.state.clear_update_status_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
var existing = placesurfer.edit.handlers.form.find_blank_manual_draft_pending_place(s);
var place = (cljs.core.truth_(existing)?placesurfer.edit.interface$.rows.blank_empty_draft_pending_place(existing):new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pending-id","pending-id",1999041996),placesurfer.edit.handlers.form.next_pending_row_id_BANG_(),new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"location","location",1815599388),"",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"added","added",2057651688)], null));
var places = (cljs.core.truth_(existing)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__39958_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(p1__39958_SHARP_))){
return place;
} else {
return p1__39958_SHARP_;
}
}),placesurfer.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s))):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(placesurfer.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s))),place));
var form = placesurfer.app_ui.interface$.state.default_update_form();
var row = placesurfer.edit.interface$.rows.pending_place__GT_row(place);
var errors = placesurfer.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2(form,true);
return placesurfer.app_ui.interface$.state.bump_description_sync_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),places,new cljs.core.Keyword(null,"update-form","update-form",475718790),form,new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row,new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),placesurfer.edit.interface$.baseline.row__GT_form_baseline(row),new cljs.core.Keyword(null,"update-sort","update-sort",-1611336622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),null,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"asc","asc",356854569)], null),new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),errors,new cljs.core.Keyword(null,"update-form-reset-token","update-form-reset-token",1427860817),((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"update-form-reset-token","update-form-reset-token",1427860817).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() + (1))], 0)));
}));

placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.edit.handlers.map.schedule_update_map_pin_sync_BANG_();
});
placesurfer.edit.handlers.form.flush_update_description_from_dom_BANG_ = (function placesurfer$edit$handlers$form$flush_update_description_from_dom_BANG_(){
return placesurfer.edit.handlers.description_sync.flush_update_description_from_dom_BANG_();
});
placesurfer.edit.handlers.form.description_editor_differs_from_baseline_QMARK_ = (function placesurfer$edit$handlers$form$description_editor_differs_from_baseline_QMARK_(s){
return placesurfer.edit.handlers.description_sync.description_editor_differs_from_baseline_QMARK_(s);
});
placesurfer.edit.handlers.form.set_update_form_BANG_ = (function placesurfer$edit$handlers$form$set_update_form_BANG_(var_args){
var G__39962 = arguments.length;
switch (G__39962) {
case 2:
return placesurfer.edit.handlers.form.set_update_form_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return placesurfer.edit.handlers.form.set_update_form_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.handlers.form.set_update_form_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (k,v){
return placesurfer.edit.handlers.form.set_update_form_BANG_.cljs$core$IFn$_invoke$arity$3(k,v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sync-display?","sync-display?",1109145044),true], null));
}));

(placesurfer.edit.handlers.form.set_update_form_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (k,v,p__39963){
var map__39964 = p__39963;
var map__39964__$1 = cljs.core.__destructure_map(map__39964);
var sync_display_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39964__$1,new cljs.core.Keyword(null,"sync-display?","sync-display?",1109145044),true);
var form_before = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"description","description",-1428560544)))?new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))):null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"description","description",-1428560544))){
placesurfer.edit.handlers.description_trace.trace_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"set-update-form","set-update-form",237235898),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-description-before","form-description-before",2140935025),form_before], null)], 0));
} else {
}

placesurfer.app_ui.interface$.state.clear_update_status_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
var form = cljs.core.assoc_in(new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
var s__$1 = placesurfer.edit.handlers.rows.select_or_create_empty_draft_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-form","update-form",475718790),form));
var errors = placesurfer.edit.handlers.rows.compute_update_form_field_errors_for_state(s__$1);
var s__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s__$1,new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),errors);
if(cljs.core.truth_(sync_display_QMARK_)){
return placesurfer.edit.handlers.rows.sync_form_into_selected_row(s__$2);
} else {
return s__$2;
}
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"description","description",-1428560544))){
placesurfer.edit.handlers.description_trace.trace_BANG_(new cljs.core.Keyword(null,"set-update-form-after","set-update-form-after",-356737802));
} else {
}

placesurfer.app_ui.interface$.effects.render_BANG_();

if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)));
if(and__5023__auto__){
var and__5023__auto____$1 = sync_display_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"description","description",-1428560544));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return placesurfer.edit.handlers.map.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
}));

(placesurfer.edit.handlers.form.set_update_form_BANG_.cljs$lang$maxFixedArity = 3);

placesurfer.edit.handlers.form.clear_update_form_BANG_ = (function placesurfer$edit$handlers$form$clear_update_form_BANG_(){
placesurfer.app_ui.interface$.state.clear_update_status_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.interface$.state.clear_update_selection_state(s),new cljs.core.Keyword(null,"update-form-reset-token","update-form-reset-token",1427860817),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}));

placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.edit.handlers.map.schedule_update_map_pin_sync_BANG_();
});
placesurfer.edit.handlers.form.apply_parsed_update_url_BANG_ = (function placesurfer$edit$handlers$form$apply_parsed_update_url_BANG_(s,p__39980){
var map__39981 = p__39980;
var map__39981__$1 = cljs.core.__destructure_map(map__39981);
var trimmed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39981__$1,new cljs.core.Keyword(null,"trimmed","trimmed",-689757883));
var coords = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39981__$1,new cljs.core.Keyword(null,"coords","coords",-599429112));
var place_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39981__$1,new cljs.core.Keyword(null,"place-name","place-name",-299302056));
var url_has_coords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39981__$1,new cljs.core.Keyword(null,"url-has-coords?","url-has-coords?",1278558787));
var autofilled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39981__$1,new cljs.core.Keyword(null,"autofilled?","autofilled?",-405060682));
var lon = new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords);
var lat = new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords);
var saved_rows = placesurfer.edit.handlers.rows.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s));
var exact_saved_row = (cljs.core.truth_((function (){var and__5023__auto__ = url_has_coords_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((typeof lon === 'number') && (typeof lat === 'number'));
} else {
return and__5023__auto__;
}
})())?placesurfer.edit.interface$.match.find_saved_row_by_exact_coords(saved_rows,lon,lat):null);
var name_only_saved_row = (cljs.core.truth_((function (){var and__5023__auto__ = url_has_coords_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = placesurfer.app_ui.interface$.state.non_empty_text_QMARK_(place_name);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not(exact_saved_row);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?placesurfer.edit.interface$.match.find_saved_row_by_name_without_coords(saved_rows,place_name):null);
var target_saved_row = (function (){var or__5025__auto__ = exact_saved_row;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return name_only_saved_row;
}
})();
var next_form = (function (){var G__39986 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"google-url","google-url",1168346589),(cljs.core.truth_(autofilled_QMARK_)?"":trimmed)),new cljs.core.Keyword(null,"source","source",-433931539),(cljs.core.truth_((function (){var and__5023__auto__ = target_saved_row;
if(cljs.core.truth_(and__5023__auto__)){
return placesurfer.edit.interface$.rows.row_source_set_QMARK_(target_saved_row);
} else {
return and__5023__auto__;
}
})())?new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(target_saved_row):new cljs.core.Keyword(null,"manual","manual",-237370608)));
var G__39986__$1 = (cljs.core.truth_(target_saved_row)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__39986,new cljs.core.Keyword(null,"name","name",1843675177),placesurfer.edit.interface$.baseline.coerce_form_text(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target_saved_row)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"location","location",1815599388),placesurfer.edit.interface$.baseline.coerce_form_text(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(target_saved_row)),new cljs.core.Keyword(null,"homepage","homepage",-1646828249),placesurfer.edit.interface$.baseline.coerce_form_text(new cljs.core.Keyword(null,"homepage","homepage",-1646828249).cljs$core$IFn$_invoke$arity$1(target_saved_row)),new cljs.core.Keyword(null,"description","description",-1428560544),placesurfer.edit.interface$.baseline.coerce_form_text(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(target_saved_row))], 0)):G__39986);
var G__39986__$2 = (cljs.core.truth_((function (){var and__5023__auto__ = placesurfer.app_ui.interface$.state.non_empty_text_QMARK_(place_name);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(target_saved_row);
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39986__$1,new cljs.core.Keyword(null,"name","name",1843675177),place_name):G__39986__$1);
var G__39986__$3 = (cljs.core.truth_(url_has_coords_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39986__$2,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon)):G__39986__$2);
var G__39986__$4 = (cljs.core.truth_(url_has_coords_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39986__$3,new cljs.core.Keyword(null,"latitude","latitude",394867543),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat)):G__39986__$3);
var G__39986__$5 = (cljs.core.truth_(url_has_coords_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39986__$4,new cljs.core.Keyword(null,"location","location",1815599388),""):G__39986__$4);
if(cljs.core.not(url_has_coords_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39986__$5,new cljs.core.Keyword(null,"homepage","homepage",-1646828249),"");
} else {
return G__39986__$5;
}
})();
var s__$1 = (function (){var G__39987 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-form","update-form",475718790),next_form),new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),placesurfer.edit.handlers.rows.compute_update_form_field_errors_for_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-form","update-form",475718790),next_form)));
if(cljs.core.truth_(url_has_coords_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39987,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),(cljs.core.truth_(target_saved_row)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(next_form,new cljs.core.Keyword(null,"google-url","google-url",1168346589)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(next_form,new cljs.core.Keyword(null,"google-url","google-url",1168346589)),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"manual","manual",-237370608))));
} else {
return G__39987;
}
})();
return placesurfer.edit.handlers.rows.sync_form_into_selected_row((cljs.core.truth_(target_saved_row)?placesurfer.edit.handlers.rows.select_update_display_row(s__$1,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(target_saved_row),target_saved_row):s__$1));
});
placesurfer.edit.handlers.form.apply_resolved_location_BANG_ = (function placesurfer$edit$handlers$form$apply_resolved_location_BANG_(location){
if(cljs.core.truth_(location)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
var G__39994 = cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-form","update-form",475718790),new cljs.core.Keyword(null,"location","location",1815599388)], null),location);
if(cljs.core.truth_(new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673).cljs$core$IFn$_invoke$arity$1(s))){
return cljs.core.assoc_in(G__39994,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),new cljs.core.Keyword(null,"location","location",1815599388)], null),location);
} else {
return G__39994;
}
}));
} else {
return null;
}
});
placesurfer.edit.handlers.form.resolve_update_location_from_coordinates_BANG_ = (function placesurfer$edit$handlers$form$resolve_update_location_from_coordinates_BANG_(var_args){
var G__40003 = arguments.length;
switch (G__40003) {
case 2:
return placesurfer.edit.handlers.form.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return placesurfer.edit.handlers.form.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.handlers.form.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (longitude,latitude){
return placesurfer.edit.handlers.form.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$3(longitude,latitude,cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.edit.handlers.form.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (longitude,latitude,p__40004){
var map__40005 = p__40004;
var map__40005__$1 = cljs.core.__destructure_map(map__40005);
var on_country_match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40005__$1,new cljs.core.Keyword(null,"on-country-match","on-country-match",-630752589));
var on_country_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40005__$1,new cljs.core.Keyword(null,"on-country-mismatch","on-country-mismatch",-1951988278));
var url_paste_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40005__$1,new cljs.core.Keyword(null,"url-paste?","url-paste?",-1003569690),false);
var request_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_resolve_location_request_id,cljs.core.inc);
var selected_country = new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
return fetch(placesurfer.api_client.interface$.resolve_location_url(),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude], null)))], null))).then((function (resp){
return resp.json().then((function (body){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_resolve_location_request_id))){
if(cljs.core.truth_(resp.ok)){
var resolved_country_40049 = (function (){var G__40008 = placesurfer.app_ui.interface$.state.non_empty_js_string_QMARK_((body["country-code"]));
if((G__40008 == null)){
return null;
} else {
return placesurfer.app_ui.interface$.state.normalize_country_code(G__40008);
}
})();
var location_40050__$1 = placesurfer.app_ui.interface$.state.non_empty_js_string_QMARK_((body["location"]));
var city_40051 = placesurfer.app_ui.interface$.state.non_empty_js_string_QMARK_((body["city"]));
if(placesurfer.edit.handlers.form.update_url_country_mismatch_QMARK_(selected_country,resolved_country_40049)){
if(cljs.core.truth_(on_country_mismatch)){
(on_country_mismatch.cljs$core$IFn$_invoke$arity$1 ? on_country_mismatch.cljs$core$IFn$_invoke$arity$1(resolved_country_40049) : on_country_mismatch.call(null,resolved_country_40049));
} else {
if(cljs.core.truth_(url_paste_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
return placesurfer.edit.handlers.form.clear_update_url_draft_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-error","update-error",-572386700),placesurfer.edit.handlers.form.update_url_country_mismatch_error(resolved_country_40049,selected_country,new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s))));
}));

placesurfer.edit.handlers.map.schedule_update_map_pin_sync_BANG_();
} else {
placesurfer.edit.handlers.form.apply_resolved_location_BANG_(location_40050__$1);

}
}
} else {
if(cljs.core.truth_(on_country_match)){
(on_country_match.cljs$core$IFn$_invoke$arity$3 ? on_country_match.cljs$core$IFn$_invoke$arity$3(resolved_country_40049,location_40050__$1,city_40051) : on_country_match.call(null,resolved_country_40049,location_40050__$1,city_40051));
} else {
if(cljs.core.truth_(url_paste_QMARK_)){
placesurfer.edit.handlers.form.apply_resolved_location_BANG_(location_40050__$1);

if(cljs.core.truth_((function (){var and__5023__auto__ = resolved_country_40049;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_country,resolved_country_40049);
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722),resolved_country_40049);
} else {
}

placesurfer.edit.handlers.save.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
placesurfer.edit.handlers.form.apply_resolved_location_BANG_(location_40050__$1);

}
}
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-error","update-error",-572386700),(function (){var or__5025__auto__ = placesurfer.app_ui.interface$.state.update_error_text((body["error"]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Could not resolve location from URL";
}
})());
}

return placesurfer.app_ui.interface$.effects.render_BANG_();
} else {
return null;
}
}));
})).catch((function (_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_resolve_location_request_id))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-error","update-error",-572386700),"Could not resolve location from URL");

return placesurfer.app_ui.interface$.effects.render_BANG_();
} else {
return null;
}
}));
}));

(placesurfer.edit.handlers.form.resolve_update_location_from_coordinates_BANG_.cljs$lang$maxFixedArity = 3);

placesurfer.edit.handlers.form.set_update_url_BANG_ = (function placesurfer$edit$handlers$form$set_update_url_BANG_(url){
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)))){
placesurfer.app_ui.interface$.state.clear_update_status_BANG_();

var trimmed = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
var valid_QMARK_ = cljs.core.boolean$(placesurfer.edit.handlers.form.valid_update_google_maps_url_QMARK_(url));
var on_update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)));
var coords = ((valid_QMARK_)?placesurfer.googlestreetmap.interface$.parse_coordinates(url):null);
var place_name = ((valid_QMARK_)?placesurfer.googlestreetmap.interface$.parse_name(url):null);
var url_has_coords_QMARK_ = ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords) === 'number'));
var autofilled_QMARK_ = ((valid_QMARK_)?(function (){var or__5025__auto__ = placesurfer.app_ui.interface$.state.non_empty_text_QMARK_(place_name);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((url_has_coords_QMARK_) || (clojure.string.includes_QMARK_(trimmed,"google.com/maps/place")));
}
})():null);
var parsed_payload = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"trimmed","trimmed",-689757883),trimmed,new cljs.core.Keyword(null,"coords","coords",-599429112),coords,new cljs.core.Keyword(null,"place-name","place-name",-299302056),place_name,new cljs.core.Keyword(null,"url-has-coords?","url-has-coords?",1278558787),url_has_coords_QMARK_,new cljs.core.Keyword(null,"autofilled?","autofilled?",-405060682),autofilled_QMARK_], null);
var defer_country_check_QMARK_ = ((on_update_QMARK_) && (((placesurfer.edit.interface$.model.valid_country_code_QMARK_(new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))) && (((valid_QMARK_) && (url_has_coords_QMARK_))))));
if((!(valid_QMARK_))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-form","update-form",475718790),new cljs.core.Keyword(null,"google-url","google-url",1168346589)], null),trimmed),new cljs.core.Keyword(null,"update-error","update-error",-572386700),placesurfer.edit.handlers.form.invalid_google_maps_url_error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),null], 0));
}));

if(on_update_QMARK_){
return placesurfer.app_ui.interface$.effects.render_BANG_();
} else {
return placesurfer.app_ui.interface$.effects.navigate_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update","update",1045576396)], 0));
}
} else {
if(defer_country_check_QMARK_){
return placesurfer.edit.handlers.form.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-country-mismatch","on-country-mismatch",-1951988278),(function (resolved_country){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-error","update-error",-572386700),placesurfer.edit.handlers.form.update_url_country_mismatch_error(resolved_country,new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s)));
}));
}),new cljs.core.Keyword(null,"on-country-match","on-country-match",-630752589),(function (_resolved_country,location,_city){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
var s__$1 = placesurfer.edit.handlers.form.apply_parsed_update_url_BANG_(s,parsed_payload);
var G__40013 = s__$1;
var G__40013__$1 = (cljs.core.truth_(location)?cljs.core.assoc_in(G__40013,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-form","update-form",475718790),new cljs.core.Keyword(null,"location","location",1815599388)], null),location):G__40013);
if(cljs.core.truth_((function (){var and__5023__auto__ = location;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673).cljs$core$IFn$_invoke$arity$1(s__$1);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc_in(G__40013__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),new cljs.core.Keyword(null,"location","location",1815599388)], null),location);
} else {
return G__40013__$1;
}
}));

placesurfer.edit.handlers.map.refresh_update_pending_places_BANG_.cljs$core$IFn$_invoke$arity$1(true);

return placesurfer.edit.handlers.save.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$0();
})], null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (p1__40011_SHARP_){
return placesurfer.edit.handlers.form.apply_parsed_update_url_BANG_(p1__40011_SHARP_,parsed_payload);
}));

if(url_has_coords_QMARK_){
placesurfer.edit.handlers.map.refresh_update_pending_places_BANG_.cljs$core$IFn$_invoke$arity$1(true);
} else {
}

if(on_update_QMARK_){
if(url_has_coords_QMARK_){
placesurfer.edit.handlers.form.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url-paste?","url-paste?",-1003569690),true], null));
} else {
}

if(url_has_coords_QMARK_){
return null;
} else {
return placesurfer.app_ui.interface$.effects.render_BANG_();
}
} else {
placesurfer.app_ui.interface$.effects.navigate_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update","update",1045576396)], 0));

if(url_has_coords_QMARK_){
return placesurfer.edit.handlers.form.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url-paste?","url-paste?",-1003569690),true], null));
} else {
return null;
}
}

}
}
} else {
return null;
}
});
placesurfer.edit.handlers.form.set_update_source_BANG_ = (function placesurfer$edit$handlers$form$set_update_source_BANG_(source){
return placesurfer.edit.handlers.form.set_update_form_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),((cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(source))))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(source):null));
});
placesurfer.edit.handlers.form.set_update_topic_BANG_ = (function placesurfer$edit$handlers$form$set_update_topic_BANG_(topic){
return placesurfer.edit.handlers.set_topic.set_update_topic_BANG_(topic);
});
placesurfer.edit.handlers.form.set_update_country_BANG_ = (function placesurfer$edit$handlers$form$set_update_country_BANG_(country_code){
placesurfer.app_ui.interface$.state.clear_update_status_BANG_();

placesurfer.edit.handlers.save.save_current_update_dataset_to_cache_if_clean_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
return placesurfer.app_ui.interface$.state.clear_update_selection_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722),placesurfer.app_ui.interface$.state.normalize_country_code(country_code)));
}));

placesurfer.app_ui.interface$.effects.render_BANG_();

placesurfer.edit.handlers.save.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clear-selection?","clear-selection?",624435603),true,new cljs.core.Keyword(null,"reset-client-actions?","reset-client-actions?",1285612005),true], null));

return placesurfer.edit.handlers.map.schedule_update_map_pin_sync_BANG_();
});
placesurfer.edit.handlers.form.clipboard_read_available_QMARK_ = (function placesurfer$edit$handlers$form$clipboard_read_available_QMARK_(){
return cljs.core.boolean$((function (){var temp__5825__auto__ = (function (){var and__5023__auto__ = navigator;
if(cljs.core.truth_(and__5023__auto__)){
return navigator.clipboard;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
return cb.readText;
} else {
return null;
}
})());
});
placesurfer.edit.handlers.form.clipboard_write_available_QMARK_ = (function placesurfer$edit$handlers$form$clipboard_write_available_QMARK_(){
return cljs.core.boolean$((function (){var temp__5825__auto__ = (function (){var and__5023__auto__ = navigator;
if(cljs.core.truth_(and__5023__auto__)){
return navigator.clipboard;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
return cb.writeText;
} else {
return null;
}
})());
});
placesurfer.edit.handlers.form.clear_update_clipboard_after_paste_BANG_ = (function placesurfer$edit$handlers$form$clear_update_clipboard_after_paste_BANG_(){
if(placesurfer.edit.handlers.form.clipboard_write_available_QMARK_()){
return navigator.clipboard.writeText("").catch((function (_){
return null;
}));
} else {
return null;
}
});
/**
 * Set update form longitude/latitude from decimal degrees.
 */
placesurfer.edit.handlers.form.apply_pasted_decimal_coordinates_BANG_ = (function placesurfer$edit$handlers$form$apply_pasted_decimal_coordinates_BANG_(longitude,latitude){
placesurfer.app_ui.interface$.state.clear_update_status_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
var form = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),cljs.core.str.cljs$core$IFn$_invoke$arity$1(longitude),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"latitude","latitude",394867543),cljs.core.str.cljs$core$IFn$_invoke$arity$1(latitude)], 0));
var s__$1 = placesurfer.edit.handlers.rows.select_or_create_empty_draft_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-form","update-form",475718790),form));
var errors = placesurfer.edit.handlers.rows.compute_update_form_field_errors_for_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790),form));
return placesurfer.edit.handlers.rows.sync_form_into_selected_row(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s__$1,new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),errors));
}));

placesurfer.app_ui.interface$.effects.render_BANG_();

placesurfer.edit.handlers.map.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$0();

return placesurfer.edit.handlers.form.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$3(longitude,latitude,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * When `text` is a DMS or decimal coordinate pair, set longitude and latitude. Returns true if applied.
 */
placesurfer.edit.handlers.form.try_apply_pasted_coordinate_text_BANG_ = (function placesurfer$edit$handlers$form$try_apply_pasted_coordinate_text_BANG_(text){
var temp__5825__auto__ = placesurfer.edit.interface$.coords.parse_pasted_coordinates(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)));
if(cljs.core.truth_(temp__5825__auto__)){
var map__40029 = temp__5825__auto__;
var map__40029__$1 = cljs.core.__destructure_map(map__40029);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40029__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40029__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
placesurfer.edit.handlers.form.apply_pasted_decimal_coordinates_BANG_(longitude,latitude);

return true;
} else {
return null;
}
});
placesurfer.edit.handlers.form.apply_clipboard_text_as_new_update_row_BANG_ = (function placesurfer$edit$handlers$form$apply_clipboard_text_as_new_update_row_BANG_(trimmed){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.seq(trimmed);
if(and__5023__auto__){
return placesurfer.edit.handlers.form.valid_update_google_maps_url_QMARK_(trimmed);
} else {
return and__5023__auto__;
}
})())){
placesurfer.edit.handlers.form.set_update_url_BANG_(trimmed);

return placesurfer.edit.handlers.form.clear_update_clipboard_after_paste_BANG_();
} else {
if(cljs.core.truth_(placesurfer.edit.handlers.form.try_apply_pasted_coordinate_text_BANG_(trimmed))){
return placesurfer.edit.handlers.form.clear_update_clipboard_after_paste_BANG_();
} else {
return placesurfer.edit.handlers.form.ensure_empty_draft_update_row_BANG_();

}
}
});
/**
 * Apply Maps URL or coordinates from pasted text. Returns true when handled.
 */
placesurfer.edit.handlers.form.apply_pasted_update_clipboard_text_BANG_ = (function placesurfer$edit$handlers$form$apply_pasted_update_clipboard_text_BANG_(text){
var trimmed = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text));
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.seq(trimmed);
if(and__5023__auto__){
return placesurfer.edit.handlers.form.valid_update_google_maps_url_QMARK_(trimmed);
} else {
return and__5023__auto__;
}
})())){
placesurfer.edit.handlers.form.set_update_url_BANG_(trimmed);

placesurfer.edit.handlers.form.clear_update_clipboard_after_paste_BANG_();

return true;
} else {
if(cljs.core.truth_(placesurfer.edit.handlers.form.try_apply_pasted_coordinate_text_BANG_(trimmed))){
placesurfer.edit.handlers.form.clear_update_clipboard_after_paste_BANG_();

return true;
} else {
return false;

}
}
});
placesurfer.edit.handlers.form.create_new_update_row_BANG_ = (function placesurfer$edit$handlers$form$create_new_update_row_BANG_(){
if((!(placesurfer.edit.handlers.form.clipboard_read_available_QMARK_()))){
return placesurfer.edit.handlers.form.ensure_empty_draft_update_row_BANG_();
} else {
return navigator.clipboard.readText().then((function (text){
return placesurfer.edit.handlers.form.apply_clipboard_text_as_new_update_row_BANG_(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)));
})).catch((function (_){
return placesurfer.edit.handlers.form.ensure_empty_draft_update_row_BANG_();
}));
}
});

//# sourceMappingURL=placesurfer.edit.handlers.form.js.map
