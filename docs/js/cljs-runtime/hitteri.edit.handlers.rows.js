goog.provide('hitteri.edit.handlers.rows');
hitteri.edit.handlers.rows.as_update_pending_places = (function hitteri$edit$handlers$rows$as_update_pending_places(places){
if(cljs.core.sequential_QMARK_(places)){
return cljs.core.vec(places);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
hitteri.edit.handlers.rows.as_update_rows = (function hitteri$edit$handlers$rows$as_update_rows(rows){
if(cljs.core.sequential_QMARK_(rows)){
return cljs.core.vec(rows);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
hitteri.edit.handlers.rows.find_update_row = (function hitteri$edit$handlers$rows$find_update_row(rows,row_id){
if((!((row_id == null)))){
return cljs.core.some((function (p1__39587_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(p1__39587_SHARP_))){
return p1__39587_SHARP_;
} else {
return null;
}
}),hitteri.edit.handlers.rows.as_update_rows(rows));
} else {
return null;
}
});
hitteri.edit.handlers.rows.find_pending_display_row_by_id = (function hitteri$edit$handlers$rows$find_pending_display_row_by_id(s,row_id){
return cljs.core.some((function (p1__39609_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(p1__39609_SHARP_))){
return hitteri.edit.interface$.rows.pending_place__GT_row(p1__39609_SHARP_);
} else {
return null;
}
}),hitteri.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s)));
});
hitteri.edit.handlers.rows.find_update_display_row = (function hitteri$edit$handlers$rows$find_update_display_row(s,row_id){
var or__5025__auto__ = hitteri.edit.handlers.rows.find_update_row(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s),row_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hitteri.edit.handlers.rows.find_pending_display_row_by_id(s,row_id);
}
});
hitteri.edit.handlers.rows.resolve_update_display_row = (function hitteri$edit$handlers$rows$resolve_update_display_row(s,row_id){
var or__5025__auto__ = hitteri.edit.handlers.rows.find_update_display_row(s,row_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var selected = new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_((function (){var and__5023__auto__ = selected;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(selected));
} else {
return and__5023__auto__;
}
})())){
return selected;
} else {
return null;
}
}
});
hitteri.edit.handlers.rows.next_pending_row_id_BANG_ = (function hitteri$edit$handlers$rows$next_pending_row_id_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.app_ui.interface$.state._BANG_update_pending_id_seq,cljs.core.dec);
});
hitteri.edit.handlers.rows.find_blank_manual_draft_pending_place = (function hitteri$edit$handlers$rows$find_blank_manual_draft_pending_place(s){
return cljs.core.some((function (place){
if(cljs.core.truth_(hitteri.edit.interface$.rows.blank_manual_draft_pending_place_QMARK_(place))){
return place;
} else {
return null;
}
}),hitteri.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s)));
});
hitteri.edit.handlers.rows.draft_row_validation_active_QMARK_ = (function hitteri$edit$handlers$rows$draft_row_validation_active_QMARK_(s){
var selected_id = new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(s);
return cljs.core.boolean$((((((!((selected_id == null)))) && ((selected_id < (0)))))?cljs.core.some((function (place){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_id,new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(place))){
return hitteri.edit.interface$.rows.empty_draft_pending_place_QMARK_(place);
} else {
return null;
}
}),hitteri.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s))):null));
});
hitteri.edit.handlers.rows.compute_update_form_field_errors_for_state = (function hitteri$edit$handlers$rows$compute_update_form_field_errors_for_state(s){
var t = (function() {
var G__39703 = null;
var G__39703__1 = (function (key){
return hitteri.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"en","en",88457073)),key], 0));
});
var G__39703__2 = (function (key,params){
return hitteri.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"en","en",88457073)),key,params], 0));
});
G__39703 = function(key,params){
switch(arguments.length){
case 1:
return G__39703__1.call(this,key);
case 2:
return G__39703__2.call(this,key,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39703.cljs$core$IFn$_invoke$arity$1 = G__39703__1;
G__39703.cljs$core$IFn$_invoke$arity$2 = G__39703__2;
return G__39703;
})()
;
return hitteri.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(s),hitteri.edit.handlers.rows.draft_row_validation_active_QMARK_(s),t);
});
hitteri.edit.handlers.rows.update_form_field_errors_QMARK_ = (function hitteri$edit$handlers$rows$update_form_field_errors_QMARK_(s){
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956).cljs$core$IFn$_invoke$arity$1(s)));
});
hitteri.edit.handlers.rows.select_or_create_empty_draft_state = (function hitteri$edit$handlers$rows$select_or_create_empty_draft_state(s){
if((!((new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(s) == null)))){
return s;
} else {
var existing = hitteri.edit.handlers.rows.find_blank_manual_draft_pending_place(s);
var place = (function (){var or__5025__auto__ = existing;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pending-id","pending-id",1999041996),hitteri.edit.handlers.rows.next_pending_row_id_BANG_(),new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"locality","locality",842809377),"",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"added","added",2057651688)], null);
}
})();
var places = (cljs.core.truth_(existing)?cljs.core.vec(hitteri.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s))):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(hitteri.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s))),place));
var row = hitteri.edit.interface$.rows.pending_place__GT_row(place);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),places,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row,new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),hitteri.edit.interface$.baseline.row__GT_form_baseline(row)], 0));
}
});
hitteri.edit.handlers.rows.apply_edited_action_to_row = (function hitteri$edit$handlers$rows$apply_edited_action_to_row(row,form,disk_baseline,field_errors){
return hitteri.edit.interface$.rows.recompute_row_action(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,hitteri.edit.interface$.rows.row_field_patch_from_form.cljs$core$IFn$_invoke$arity$variadic(form,field_errors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"preserve-row","preserve-row",1065640046),row], 0))], 0)),disk_baseline);
});
hitteri.edit.handlers.rows.apply_edited_action_to_pending = (function hitteri$edit$handlers$rows$apply_edited_action_to_pending(place,form,disk_baseline,field_errors,draft_validation_QMARK_){
return hitteri.edit.interface$.rows.recompute_row_action(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([place,hitteri.edit.interface$.rows.row_field_patch_from_form.cljs$core$IFn$_invoke$arity$variadic(form,field_errors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"draft-validation?","draft-validation?",-28998423),draft_validation_QMARK_,new cljs.core.Keyword(null,"preserve-row","preserve-row",1065640046),place], 0))], 0)),disk_baseline);
});
hitteri.edit.handlers.rows.sync_form_into_selected_row = (function hitteri$edit$handlers$rows$sync_form_into_selected_row(s){
var row_id = new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(s);
var form = new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(s);
var field_errors = new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
var disk_baseline = new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529).cljs$core$IFn$_invoke$arity$1(s);
var draft_validation_QMARK_ = hitteri.edit.handlers.rows.draft_row_validation_active_QMARK_(s);
if((!((!((row_id == null)))))){
return s;
} else {
if(hitteri.edit.interface$.rows.saved_update_row_id_QMARK_(row_id)){
var s__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040),(function (rows){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__39616_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(p1__39616_SHARP_))){
return hitteri.edit.handlers.rows.apply_edited_action_to_row(p1__39616_SHARP_,form,disk_baseline,field_errors);
} else {
return p1__39616_SHARP_;
}
}),rows);
}));
var row = hitteri.edit.handlers.rows.find_update_row(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s__$1),row_id);
if(cljs.core.truth_(row)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s__$1,new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row);
} else {
return s__$1;
}
} else {
var s__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),(function (places){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__39617_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(p1__39617_SHARP_))){
return hitteri.edit.handlers.rows.apply_edited_action_to_pending(p1__39617_SHARP_,form,disk_baseline,field_errors,draft_validation_QMARK_);
} else {
return p1__39617_SHARP_;
}
}),places);
}));
var row = hitteri.edit.handlers.rows.find_update_display_row(s__$1,row_id);
if(cljs.core.truth_(row)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s__$1,new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row);
} else {
return s__$1;
}
}
}
});
hitteri.edit.handlers.rows.select_update_display_row = (function hitteri$edit$handlers$rows$select_update_display_row(s,row_id,row){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),row_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row], 0));
});
/**
 * Select a table row and sync the detail form (used after dataset load).
 */
hitteri.edit.handlers.rows.select_update_row_in_state = (function hitteri$edit$handlers$rows$select_update_row_in_state(s,row){
if(cljs.core.truth_(row)){
var row_id = new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row);
var form = hitteri.edit.interface$.baseline.row__GT_form_baseline(row);
var s1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-form","update-form",475718790),form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),row_id,new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row], 0));
var errors = hitteri.edit.handlers.rows.compute_update_form_field_errors_for_state(s1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(hitteri.app_ui.interface$.state.bump_description_sync_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hitteri.edit.handlers.rows.select_update_display_row(s1,row_id,row),new cljs.core.Keyword(null,"update-form","update-form",475718790),form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),errors,new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),hitteri.edit.interface$.baseline.row__GT_form_baseline(row),new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),(cljs.core.truth_(new cljs.core.Keyword(null,"url-form","url-form",426694546).cljs$core$IFn$_invoke$arity$1(row))?new cljs.core.Keyword(null,"url-form","url-form",426694546).cljs$core$IFn$_invoke$arity$1(row):null)], 0))),new cljs.core.Keyword(null,"update-table-scroll-token","update-table-scroll-token",903188454),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
} else {
return s;
}
});
hitteri.edit.handlers.rows.find_display_row_in_state = (function hitteri$edit$handlers$rows$find_display_row_in_state(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39711 = arguments.length;
var i__5750__auto___39712 = (0);
while(true){
if((i__5750__auto___39712 < len__5749__auto___39711)){
args__5755__auto__.push((arguments[i__5750__auto___39712]));

var G__39713 = (i__5750__auto___39712 + (1));
i__5750__auto___39712 = G__39713;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return hitteri.edit.handlers.rows.find_display_row_in_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(hitteri.edit.handlers.rows.find_display_row_in_state.cljs$core$IFn$_invoke$arity$variadic = (function (s,longitude,latitude,p__39635){
var vec__39636 = p__39635;
var use_url_name_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39636,(0),null);
return hitteri.edit.interface$.match.find_display_row_by_coords.cljs$core$IFn$_invoke$arity$5(hitteri.edit.handlers.rows.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s)),hitteri.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s)),longitude,latitude,(((!((use_url_name_QMARK_ == null))))?use_url_name_QMARK_:true));
}));

(hitteri.edit.handlers.rows.find_display_row_in_state.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hitteri.edit.handlers.rows.find_display_row_in_state.cljs$lang$applyTo = (function (seq39631){
var G__39632 = cljs.core.first(seq39631);
var seq39631__$1 = cljs.core.next(seq39631);
var G__39633 = cljs.core.first(seq39631__$1);
var seq39631__$2 = cljs.core.next(seq39631__$1);
var G__39634 = cljs.core.first(seq39631__$2);
var seq39631__$3 = cljs.core.next(seq39631__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39632,G__39633,G__39634,seq39631__$3);
}));

hitteri.edit.handlers.rows.select_row_for_url_coords = (function hitteri$edit$handlers$rows$select_row_for_url_coords(s,longitude,latitude){
var temp__5823__auto__ = hitteri.edit.handlers.rows.find_display_row_in_state(s,longitude,latitude);
if(cljs.core.truth_(temp__5823__auto__)){
var row = temp__5823__auto__;
return hitteri.edit.handlers.rows.select_update_display_row(s,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row),row);
} else {
return s;
}
});
hitteri.edit.handlers.rows.select_saved_row_for_exact_url_coords = (function hitteri$edit$handlers$rows$select_saved_row_for_exact_url_coords(s,longitude,latitude){
var temp__5823__auto__ = hitteri.edit.interface$.match.find_saved_row_by_exact_coords(hitteri.edit.handlers.rows.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s)),longitude,latitude);
if(cljs.core.truth_(temp__5823__auto__)){
var row = temp__5823__auto__;
return hitteri.edit.handlers.rows.select_update_display_row(s,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row),row);
} else {
return s;
}
});
hitteri.edit.handlers.rows.restore_selected_update_row_enabled_QMARK_ = (function hitteri$edit$handlers$rows$restore_selected_update_row_enabled_QMARK_(s){
var row_id = new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_((function (){var and__5023__auto__ = row_id;
if(cljs.core.truth_(and__5023__auto__)){
return hitteri.edit.interface$.rows.saved_update_row_id_QMARK_(row_id);
} else {
return and__5023__auto__;
}
})())){
var disk_baseline = new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529).cljs$core$IFn$_invoke$arity$1(s);
var row = cljs.core.some((function (p1__39639_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(p1__39639_SHARP_))){
return p1__39639_SHARP_;
} else {
return null;
}
}),hitteri.edit.handlers.rows.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s)));
var and__5023__auto__ = row;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.contains_QMARK_(disk_baseline,row_id);
if(and__5023__auto____$1){
var or__5025__auto__ = hitteri.edit.interface$.rows.row_marked_deleted_QMARK_(row);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return hitteri.edit.interface$.rows.row_differs_from_disk_baseline_QMARK_(row,disk_baseline);
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = row_id;
if(cljs.core.truth_(and__5023__auto__)){
return (row_id < (0));
} else {
return and__5023__auto__;
}
})())){
var baseline = new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672).cljs$core$IFn$_invoke$arity$1(s);
var row = hitteri.edit.handlers.rows.find_pending_display_row_by_id(s,row_id);
var and__5023__auto__ = row;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = hitteri.edit.interface$.rows.manual_draft_pending_row_QMARK_(row);
if(cljs.core.truth_(and__5023__auto____$1)){
return (((!((baseline == null)))) && (hitteri.edit.interface$.baseline.form_edited_from_baseline_QMARK_(new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(s),baseline)));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
} else {
return false;

}
}
});
hitteri.edit.handlers.rows.row_from_disk_baseline_entry = (function hitteri$edit$handlers$rows$row_from_disk_baseline_entry(row,baseline,disk_baseline){
return hitteri.edit.interface$.rows.recompute_row_action(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-id","row-id",246619473),new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row)], null),baseline], 0)),disk_baseline);
});
hitteri.edit.handlers.rows.after_restore_selected_update_row_BANG_ = (function hitteri$edit$handlers$rows$after_restore_selected_update_row_BANG_(){
hitteri.app_ui.interface$.effects.render_BANG_();

hitteri.app_ui.interface$.effects.schedule_update_map_pin_sync_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)))){
return hitteri.app_ui.interface$.effects.sync_update_map_BANG_();
} else {
return null;
}
});
hitteri.edit.handlers.rows.restore_saved_update_row_from_disk_BANG_ = (function hitteri$edit$handlers$rows$restore_saved_update_row_from_disk_BANG_(row_id,baseline){
hitteri.app_ui.interface$.state.clear_update_status_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.app_ui.interface$.state._BANG_state,(function (s){
var disk_baseline = new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529).cljs$core$IFn$_invoke$arity$1(s);
var s__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040),(function (rows){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__39641_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(p1__39641_SHARP_))){
return hitteri.edit.handlers.rows.row_from_disk_baseline_entry(p1__39641_SHARP_,baseline,disk_baseline);
} else {
return p1__39641_SHARP_;
}
}),rows);
}));
var row = cljs.core.some((function (p1__39642_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(p1__39642_SHARP_))){
return p1__39642_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s__$1));
var form = hitteri.edit.interface$.baseline.row__GT_form_baseline(row);
var errors = hitteri.edit.handlers.rows.compute_update_form_field_errors_for_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790),form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),row_id,new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row], 0)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790),form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),errors,new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row,new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),hitteri.edit.interface$.baseline.row__GT_form_baseline(row),new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),null], 0)),new cljs.core.Keyword(null,"update-form-reset-token","update-form-reset-token",1427860817),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}));

return hitteri.edit.handlers.rows.after_restore_selected_update_row_BANG_();
});
hitteri.edit.handlers.rows.restore_pending_manual_update_row_from_baseline_BANG_ = (function hitteri$edit$handlers$rows$restore_pending_manual_update_row_from_baseline_BANG_(row_id,baseline){
hitteri.app_ui.interface$.state.clear_update_status_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.app_ui.interface$.state._BANG_state,(function (s){
var disk_baseline = new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529).cljs$core$IFn$_invoke$arity$1(s);
var s__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),(function (places){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__39643_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(p1__39643_SHARP_))){
return hitteri.edit.interface$.rows.recompute_row_action(hitteri.edit.interface$.rows.pending_place_from_form_baseline(p1__39643_SHARP_,baseline),disk_baseline);
} else {
return p1__39643_SHARP_;
}
}),places);
}));
var row = hitteri.edit.handlers.rows.find_pending_display_row_by_id(s__$1,row_id);
var errors = hitteri.edit.handlers.rows.compute_update_form_field_errors_for_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790),baseline,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),row_id,new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row], 0)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790),baseline,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),errors,new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),null], 0)),new cljs.core.Keyword(null,"update-form-reset-token","update-form-reset-token",1427860817),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}));

return hitteri.edit.handlers.rows.after_restore_selected_update_row_BANG_();
});
hitteri.edit.handlers.rows.restore_selected_update_row_BANG_ = (function hitteri$edit$handlers$rows$restore_selected_update_row_BANG_(){
var row_id = new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
if((((!((row_id == null)))) && (hitteri.edit.interface$.rows.saved_update_row_id_QMARK_(row_id)))){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)),row_id);
if(cljs.core.truth_(temp__5825__auto__)){
var baseline = temp__5825__auto__;
return hitteri.edit.handlers.rows.restore_saved_update_row_from_disk_BANG_(row_id,baseline);
} else {
return null;
}
} else {
if((((!((row_id == null)))) && ((row_id < (0))))){
var baseline = new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
var row = hitteri.edit.handlers.rows.find_pending_display_row_by_id(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state),row_id);
if(cljs.core.truth_((function (){var and__5023__auto__ = row;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = hitteri.edit.interface$.rows.manual_draft_pending_row_QMARK_(row);
if(cljs.core.truth_(and__5023__auto____$1)){
return baseline;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return hitteri.edit.handlers.rows.restore_pending_manual_update_row_from_baseline_BANG_(row_id,baseline);
} else {
return null;
}
} else {
return null;

}
}
});
hitteri.edit.handlers.rows.toggle_row_delete_action_BANG_ = (function hitteri$edit$handlers$rows$toggle_row_delete_action_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39728 = arguments.length;
var i__5750__auto___39729 = (0);
while(true){
if((i__5750__auto___39729 < len__5749__auto___39728)){
args__5755__auto__.push((arguments[i__5750__auto___39729]));

var G__39730 = (i__5750__auto___39729 + (1));
i__5750__auto___39729 = G__39730;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return hitteri.edit.handlers.rows.toggle_row_delete_action_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(hitteri.edit.handlers.rows.toggle_row_delete_action_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (row,disk_baseline,p__39653){
var map__39654 = p__39653;
var map__39654__$1 = cljs.core.__destructure_map(map__39654);
var country_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39654__$1,new cljs.core.Keyword(null,"country-code","country-code",-927451124));
return hitteri.edit.interface$.rows.recompute_row_action(((hitteri.edit.interface$.rows.row_marked_deleted_QMARK_(row))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"action","action",-811238024)):hitteri.edit.interface$.rows.mark_row_as_deleted(row,country_code)),disk_baseline);
}));

(hitteri.edit.handlers.rows.toggle_row_delete_action_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(hitteri.edit.handlers.rows.toggle_row_delete_action_BANG_.cljs$lang$applyTo = (function (seq39650){
var G__39651 = cljs.core.first(seq39650);
var seq39650__$1 = cljs.core.next(seq39650);
var G__39652 = cljs.core.first(seq39650__$1);
var seq39650__$2 = cljs.core.next(seq39650__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39651,G__39652,seq39650__$2);
}));

hitteri.edit.handlers.rows.remove_unsaved_pending_row_from_state = (function hitteri$edit$handlers$rows$remove_unsaved_pending_row_from_state(s,row_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),(function (places){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39656_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(p1__39656_SHARP_));
}),places));
})),new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040),(function (rows){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39657_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(p1__39657_SHARP_));
}),rows));
})),new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),null,new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),null,new cljs.core.Keyword(null,"update-form","update-form",475718790),hitteri.app_ui.interface$.state.default_update_form(),new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),null], 0)),new cljs.core.Keyword(null,"update-form-reset-token","update-form-reset-token",1427860817),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});
hitteri.edit.handlers.rows.remove_identical_duplicate_row_from_state = (function hitteri$edit$handlers$rows$remove_identical_duplicate_row_from_state(s,row_id){
var rows = hitteri.edit.handlers.rows.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s));
var row = hitteri.edit.handlers.rows.find_update_row(rows,row_id);
var sibling = cljs.core.some((function (other){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(other));
if(and__5023__auto__){
return hitteri.edit.interface$.duplicates.fully_identical_rows_QMARK_(row,other);
} else {
return and__5023__auto__;
}
})())){
return other;
} else {
return null;
}
}),rows);
var kept_id = new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(sibling);
var form = (cljs.core.truth_(sibling)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hitteri.edit.interface$.baseline.row__GT_form_baseline(sibling),new cljs.core.Keyword(null,"google-url","google-url",1168346589),""):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040),(function (rs){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39658_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(p1__39658_SHARP_));
}),rs));
})),new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),kept_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),sibling,new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),(cljs.core.truth_(sibling)?hitteri.edit.interface$.baseline.row__GT_form_baseline(sibling):null),new cljs.core.Keyword(null,"update-form","update-form",475718790),(function (){var or__5025__auto__ = form;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hitteri.app_ui.interface$.state.default_update_form();
}
})(),new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),null], 0));
});
hitteri.edit.handlers.rows.focus_update_row_on_map_BANG_ = (function hitteri$edit$handlers$rows$focus_update_row_on_map_BANG_(row){
if(cljs.core.truth_((function (){var and__5023__auto__ = row;
if(cljs.core.truth_(and__5023__auto__)){
return ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row) === 'number'));
} else {
return and__5023__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)))){
return setTimeout((function (){
return hitteri.map_ui.interface$.center_on_position_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"preserve-zoom?","preserve-zoom?",-1650190790),true,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true], null));
}),(80));
} else {
return null;
}
} else {
return null;
}
});
hitteri.edit.handlers.rows.toggle_update_row_BANG_ = (function hitteri$edit$handlers$rows$toggle_update_row_BANG_(row_id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)))){
return null;
} else {
var temp__5825__auto__ = hitteri.edit.handlers.rows.find_update_display_row(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state),row_id);
if(cljs.core.truth_(temp__5825__auto__)){
var row = temp__5825__auto__;
var saved_url_draft_39734 = new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
var saved_pending_39735 = new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
var form_39736 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hitteri.edit.interface$.baseline.row__GT_form_baseline(row),new cljs.core.Keyword(null,"google-url","google-url",1168346589),"");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.app_ui.interface$.state._BANG_state,(function (s){
return hitteri.app_ui.interface$.state.bump_description_sync_token((function (){var G__39662 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),row_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row,new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),hitteri.edit.interface$.baseline.row__GT_form_baseline(row),new cljs.core.Keyword(null,"update-form","update-form",475718790),form_39736,new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),hitteri.edit.handlers.rows.compute_update_form_field_errors_for_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-form","update-form",475718790),form_39736,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),row_id,new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row], 0)))], 0));
var G__39662__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"url-form","url-form",426694546).cljs$core$IFn$_invoke$arity$1(row))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39662,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),new cljs.core.Keyword(null,"url-form","url-form",426694546).cljs$core$IFn$_invoke$arity$1(row)):G__39662);
if(cljs.core.truth_((function (){var and__5023__auto__ = saved_url_draft_39734;
if(cljs.core.truth_(and__5023__auto__)){
return hitteri.edit.interface$.rows.saved_update_row_id_QMARK_(row_id);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__39662__$1,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),saved_url_draft_39734,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),saved_pending_39735], 0));
} else {
return G__39662__$1;
}
})());
}));

hitteri.app_ui.interface$.effects.render_BANG_();

return hitteri.edit.handlers.rows.focus_update_row_on_map_BANG_(row);
} else {
return null;
}
}
});
hitteri.edit.handlers.rows.update_row_click_BANG_ = (function hitteri$edit$handlers$rows$update_row_click_BANG_(row_id){
var s = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
var already_selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(s));
if(already_selected_QMARK_){
var temp__5825__auto__ = hitteri.edit.handlers.rows.find_update_display_row(s,row_id);
if(cljs.core.truth_(temp__5825__auto__)){
var row = temp__5825__auto__;
return hitteri.edit.handlers.rows.focus_update_row_on_map_BANG_(row);
} else {
return null;
}
} else {
return hitteri.edit.handlers.rows.toggle_update_row_BANG_(row_id);
}
});
hitteri.edit.handlers.rows.toggle_selected_update_row_delete_BANG_ = (function hitteri$edit$handlers$rows$toggle_selected_update_row_delete_BANG_(){
var row_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)));
}
})();
if((!((row_id == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.app_ui.interface$.state._BANG_state,(function (s){
var rows = hitteri.edit.handlers.rows.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s));
var disk_row = hitteri.edit.handlers.rows.find_update_row(rows,row_id);
var row = (function (){var or__5025__auto__ = disk_row;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = hitteri.edit.handlers.rows.find_pending_display_row_by_id(s,row_id);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return hitteri.edit.handlers.rows.resolve_update_display_row(s,row_id);
}
}
})();
if(cljs.core.truth_(hitteri.edit.interface$.rows.pending_row_QMARK_(row))){
return hitteri.edit.handlers.rows.remove_unsaved_pending_row_from_state(s,row_id);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = disk_row;
if(cljs.core.truth_(and__5023__auto__)){
return hitteri.edit.interface$.duplicates.has_identical_saved_sibling_QMARK_(rows,disk_row);
} else {
return and__5023__auto__;
}
})())){
return hitteri.edit.handlers.rows.remove_identical_duplicate_row_from_state(s,row_id);
} else {
var disk_baseline = new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529).cljs$core$IFn$_invoke$arity$1(s);
var country_code = new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(s);
var s__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040),(function (rows__$1){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__39667_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_id,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(p1__39667_SHARP_))){
return hitteri.edit.handlers.rows.toggle_row_delete_action_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__39667_SHARP_,disk_baseline,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"country-code","country-code",-927451124),country_code], 0));
} else {
return p1__39667_SHARP_;
}
}),rows__$1);
}));
var row__$1 = hitteri.edit.handlers.rows.find_update_row(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s__$1),row_id);
if(cljs.core.truth_(row__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s__$1,new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),row__$1);
} else {
return s__$1;
}

}
}
}));

hitteri.app_ui.interface$.effects.render_BANG_();

return hitteri.app_ui.interface$.effects.schedule_update_map_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));
} else {
return null;
}
});
hitteri.edit.handlers.rows.set_update_sort_BANG_ = (function hitteri$edit$handlers$rows$set_update_sort_BANG_(sort_key){
if(cljs.core.truth_(new cljs.core.Keyword(null,"update-show-duplicates?","update-show-duplicates?",962796900).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hitteri.app_ui.interface$.state._BANG_state,cljs.core.update,new cljs.core.Keyword(null,"update-sort","update-sort",-1611336622),(function (p__39680){
var map__39681 = p__39680;
var map__39681__$1 = cljs.core.__destructure_map(map__39681);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39681__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39681__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,sort_key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),sort_key,new cljs.core.Keyword(null,"dir","dir",1734754661),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),sort_key,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"asc","asc",356854569)], null);
}
}));
}

return hitteri.app_ui.interface$.effects.render_BANG_();
});
hitteri.edit.handlers.rows.toggle_update_show_duplicates_BANG_ = (function hitteri$edit$handlers$rows$toggle_update_show_duplicates_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.app_ui.interface$.state._BANG_state,(function (s){
var enabling_QMARK_ = cljs.core.not(new cljs.core.Keyword(null,"update-show-duplicates?","update-show-duplicates?",962796900).cljs$core$IFn$_invoke$arity$1(s));
var G__39685 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-show-duplicates?","update-show-duplicates?",962796900),cljs.core.not),new cljs.core.Keyword(null,"update-table-scroll-token","update-table-scroll-token",903188454),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
var G__39685__$1 = ((enabling_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39685,new cljs.core.Keyword(null,"update-sort-before-duplicates","update-sort-before-duplicates",-192409059),new cljs.core.Keyword(null,"update-sort","update-sort",-1611336622).cljs$core$IFn$_invoke$arity$1(s)):G__39685);
if((!(enabling_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39685__$1,new cljs.core.Keyword(null,"update-sort","update-sort",-1611336622),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"update-sort-before-duplicates","update-sort-before-duplicates",-192409059).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),null,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"asc","asc",356854569)], null);
}
})()),new cljs.core.Keyword(null,"update-sort-before-duplicates","update-sort-before-duplicates",-192409059));
} else {
return G__39685__$1;
}
}));

return hitteri.app_ui.interface$.effects.render_BANG_();
});
hitteri.edit.handlers.rows.set_update_map_height_BANG_ = (function hitteri$edit$handlers$rows$set_update_map_height_BANG_(height_px){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hitteri.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-map-height-px","update-map-height-px",-2093540532),height_px);

hitteri.app_ui.interface$.effects.render_BANG_();

return hitteri.app_ui.interface$.effects.schedule_map_resize_BANG_();
});
hitteri.edit.handlers.rows.merge_selected_form_into_rows = (function hitteri$edit$handlers$rows$merge_selected_form_into_rows(s,rows){
var map__39693 = s;
var map__39693__$1 = cljs.core.__destructure_map(map__39693);
var update_selected_row_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39693__$1,new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563));
var update_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39693__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790));
if((((!((update_selected_row_id == null)))) && (((hitteri.edit.interface$.forms.valid_update_form_QMARK_(update_form)) && ((!(hitteri.edit.handlers.rows.update_form_field_errors_QMARK_(s)))))))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row),update_selected_row_id)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(update_form),new cljs.core.Keyword(null,"locality","locality",842809377),new cljs.core.Keyword(null,"locality","locality",842809377).cljs$core$IFn$_invoke$arity$1(update_form),new cljs.core.Keyword(null,"homepage","homepage",-1646828249),new cljs.core.Keyword(null,"homepage","homepage",-1646828249).cljs$core$IFn$_invoke$arity$1(update_form),new cljs.core.Keyword(null,"description","description",-1428560544),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(update_form,""))),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),hitteri.edit.interface$.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(update_form)),new cljs.core.Keyword(null,"latitude","latitude",394867543),hitteri.edit.interface$.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(update_form))], null),(cljs.core.truth_((function (){var or__5025__auto__ = (!(hitteri.edit.interface$.rows.row_source_set_QMARK_(row)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"url-form","url-form",426694546).cljs$core$IFn$_invoke$arity$1(row);
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),hitteri.edit.interface$.baseline.normalize_update_source(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(update_form))], null):null)], 0));
} else {
return row;
}
}),rows);
} else {
return rows;
}
});
hitteri.edit.handlers.rows.save_source_rows = (function hitteri$edit$handlers$rows$save_source_rows(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(hitteri.edit.handlers.rows.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(hitteri.edit.interface$.rows.pending_place__GT_row,hitteri.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s))));
});

//# sourceMappingURL=hitteri.edit.handlers.rows.js.map
