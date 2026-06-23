goog.provide('placesurfer.pin_ui.handlers.rows');
placesurfer.pin_ui.handlers.rows.persist_items_BANG_ = (function placesurfer$pin_ui$handlers$rows$persist_items_BANG_(items){
return placesurfer.pin_ui.pure.storage.save_pins_BANG_(items);
});
placesurfer.pin_ui.handlers.rows.list_items_for_page = (function placesurfer$pin_ui$handlers$rows$list_items_for_page(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))){
return placesurfer.pin_ui.pure.rows.pin_page_list_items(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s));
} else {
return placesurfer.pin_ui.pure.rows.visible_list_items((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s),placesurfer.pin_ui.pure.rows.country_slug_for_view(s));
}
});
placesurfer.pin_ui.handlers.rows.table_rows_for_state = (function placesurfer$pin_ui$handlers$rows$table_rows_for_state(s){
return placesurfer.pin_ui.pure.rows.table_rows(cljs.core.vec(placesurfer.pin_ui.handlers.rows.list_items_for_page(s)),new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s));
});
placesurfer.pin_ui.handlers.rows.find_display_item = (function placesurfer$pin_ui$handlers$rows$find_display_item(s,id){
return placesurfer.pin_ui.pure.rows.find_by_id(placesurfer.pin_ui.handlers.rows.list_items_for_page(s),id);
});
placesurfer.pin_ui.handlers.rows.refresh_table_rows = (function placesurfer$pin_ui$handlers$rows$refresh_table_rows(var_args){
var G__39728 = arguments.length;
switch (G__39728) {
case 1:
return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1 = (function (s){
return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2 = (function (s,include_id){
var filtered = placesurfer.pin_ui.handlers.rows.list_items_for_page(s);
var filtered__$1 = (cljs.core.truth_(include_id)?(function (){var items = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
var temp__5823__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(items,include_id);
if(cljs.core.truth_(temp__5823__auto__)){
var item = temp__5823__auto__;
if(cljs.core.truth_(cljs.core.some((function (p1__39726_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(include_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__39726_SHARP_));
}),filtered))){
return filtered;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(filtered),item);
}
} else {
return filtered;
}
})():filtered);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pin-table-rows","pin-table-rows",729424278),placesurfer.pin_ui.pure.rows.table_rows(cljs.core.vec(filtered__$1),new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s)));
}));

(placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$lang$maxFixedArity = 2);

placesurfer.pin_ui.handlers.rows.selectable_pin_items = (function placesurfer$pin_ui$handlers$rows$selectable_pin_items(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))){
return placesurfer.pin_ui.pure.rows.pin_page_list_items(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s));
} else {
return placesurfer.pin_ui.pure.rows.visible_list_items((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s),placesurfer.pin_ui.pure.rows.country_slug_for_view(s));
}
});
placesurfer.pin_ui.handlers.rows.select_pin_row_BANG_ = (function placesurfer$pin_ui$handlers$rows$select_pin_row_BANG_(id){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var item = placesurfer.pin_ui.pure.rows.find_by_id(placesurfer.pin_ui.handlers.rows.selectable_pin_items(s),id);
if(cljs.core.truth_((function (){var and__5023__auto__ = item;
if(cljs.core.truth_(and__5023__auto__)){
return (!(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)));
} else {
return and__5023__auto__;
}
})())){
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (state){
return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1(placesurfer.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))));
}));

return placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_(item);
} else {
return null;
}
});
placesurfer.pin_ui.handlers.rows.select_display_row_BANG_ = (function placesurfer$pin_ui$handlers$rows$select_display_row_BANG_(id){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var item = placesurfer.pin_ui.pure.rows.find_by_id(placesurfer.pin_ui.handlers.rows.list_items_for_page(s),id);
if(cljs.core.truth_((function (){var and__5023__auto__ = item;
if(cljs.core.truth_(and__5023__auto__)){
return (!(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)));
} else {
return and__5023__auto__;
}
})())){
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (state){
return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1(placesurfer.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))));
}));

return placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_(item);
} else {
return null;
}
});
placesurfer.pin_ui.handlers.rows.focus_pin_search_BANG_ = (function placesurfer$pin_ui$handlers$rows$focus_pin_search_BANG_(){
if(cljs.core.truth_(typeof document !== 'undefined' && document.getElementById)){
var seq__39730 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(60),(140),(260)], null));
var chunk__39731 = null;
var count__39732 = (0);
var i__39733 = (0);
while(true){
if((i__39733 < count__39732)){
var delay_ms = chunk__39731.cljs$core$IIndexed$_nth$arity$2(null,i__39733);
setTimeout(((function (seq__39730,chunk__39731,count__39732,i__39733,delay_ms){
return (function (){
var temp__5825__auto__ = document.getElementById("pin-search");
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return el.focus();
} else {
return null;
}
});})(seq__39730,chunk__39731,count__39732,i__39733,delay_ms))
,delay_ms);


var G__39766 = seq__39730;
var G__39767 = chunk__39731;
var G__39768 = count__39732;
var G__39769 = (i__39733 + (1));
seq__39730 = G__39766;
chunk__39731 = G__39767;
count__39732 = G__39768;
i__39733 = G__39769;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39730);
if(temp__5825__auto__){
var seq__39730__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39730__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__39730__$1);
var G__39770 = cljs.core.chunk_rest(seq__39730__$1);
var G__39771 = c__5548__auto__;
var G__39772 = cljs.core.count(c__5548__auto__);
var G__39773 = (0);
seq__39730 = G__39770;
chunk__39731 = G__39771;
count__39732 = G__39772;
i__39733 = G__39773;
continue;
} else {
var delay_ms = cljs.core.first(seq__39730__$1);
setTimeout(((function (seq__39730,chunk__39731,count__39732,i__39733,delay_ms,seq__39730__$1,temp__5825__auto__){
return (function (){
var temp__5825__auto____$1 = document.getElementById("pin-search");
if(cljs.core.truth_(temp__5825__auto____$1)){
var el = temp__5825__auto____$1;
return el.focus();
} else {
return null;
}
});})(seq__39730,chunk__39731,count__39732,i__39733,delay_ms,seq__39730__$1,temp__5825__auto__))
,delay_ms);


var G__39774 = cljs.core.next(seq__39730__$1);
var G__39775 = null;
var G__39776 = (0);
var G__39777 = (0);
seq__39730 = G__39774;
chunk__39731 = G__39775;
count__39732 = G__39776;
i__39733 = G__39777;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
placesurfer.pin_ui.handlers.rows.reset_form_after_add_BANG_ = (function placesurfer$pin_ui$handlers$rows$reset_form_after_add_BANG_(state,items,saved_id,existing_QMARK_){
var saved_item = placesurfer.pin_ui.pure.rows.find_by_id(items,saved_id);
var next_form = (cljs.core.truth_(existing_QMARK_)?placesurfer.pin_ui.pure.forms.item__GT_form(saved_item):placesurfer.pin_ui.pure.forms.default_form());
return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),saved_id,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),next_form,new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),next_form,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))),saved_id);
});
placesurfer.pin_ui.handlers.rows.save_target_item = (function placesurfer$pin_ui$handlers$rows$save_target_item(items,selected_id,form){
var or__5025__auto__ = (cljs.core.truth_(selected_id)?placesurfer.pin_ui.pure.rows.find_by_id(items,selected_id):null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = placesurfer.pin_ui.pure.forms.form__GT_item(form,"probe");
if(cljs.core.truth_(temp__5825__auto__)){
var probe = temp__5825__auto__;
return placesurfer.pin_ui.pure.rows.find_by_coords(items,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(probe),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(probe));
} else {
return null;
}
}
});
placesurfer.pin_ui.handlers.rows.save_enabled_QMARK_ = (function placesurfer$pin_ui$handlers$rows$save_enabled_QMARK_(state){
var form = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$1(state);
var baseline = new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539).cljs$core$IFn$_invoke$arity$2(state,placesurfer.pin_ui.pure.forms.default_form());
return ((placesurfer.pin_ui.pure.forms.form_valid_QMARK_(form)) && (placesurfer.pin_ui.pure.forms.form_edited_from_baseline_QMARK_(form,baseline)));
});
placesurfer.pin_ui.handlers.rows.apply_save_BANG_ = (function placesurfer$pin_ui$handlers$rows$apply_save_BANG_(s,form,next_items,item_id){
return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),form,new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),form,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),item_id,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))),item_id);
});
/**
 * Persist form edits: update matching list item or add a new one.
 */
placesurfer.pin_ui.handlers.rows.save_pin_BANG_ = (function placesurfer$pin_ui$handlers$rows$save_pin_BANG_(){
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var saved_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (s){
if((!(placesurfer.pin_ui.handlers.rows.save_enabled_QMARK_(s)))){
return s;
} else {
var form = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$1(s);
var items = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
var temp__5823__auto__ = placesurfer.pin_ui.handlers.rows.save_target_item(items,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s),form);
if(cljs.core.truth_(temp__5823__auto__)){
var target = temp__5823__auto__;
var temp__5823__auto____$1 = placesurfer.pin_ui.pure.forms.form__GT_item(form,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target));
if(cljs.core.truth_(temp__5823__auto____$1)){
var updated = temp__5823__auto____$1;
var next_items = placesurfer.pin_ui.pure.rows.upsert_item(items,updated);
cljs.core.reset_BANG_(saved,next_items);

cljs.core.reset_BANG_(saved_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target));

return placesurfer.pin_ui.handlers.rows.apply_save_BANG_(s,form,next_items,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target));
} else {
return s;
}
} else {
var temp__5823__auto____$1 = placesurfer.pin_ui.pure.forms.form__GT_item(form,placesurfer.pin_ui.pure.storage.new_pin_id());
if(cljs.core.truth_(temp__5823__auto____$1)){
var created = temp__5823__auto____$1;
var next_items = placesurfer.pin_ui.pure.rows.upsert_item(items,created);
cljs.core.reset_BANG_(saved,next_items);

cljs.core.reset_BANG_(saved_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(created));

return placesurfer.pin_ui.handlers.rows.apply_save_BANG_(s,form,next_items,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(created));
} else {
return s;
}
}
}
}));

if(cljs.core.truth_(cljs.core.deref(saved))){
placesurfer.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(saved));

placesurfer.pin_ui.handlers.state.render_BANG_();

var temp__5825__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(cljs.core.deref(saved),cljs.core.deref(saved_id));
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
return placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_(item);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Add the current form as a pin, or update the existing pin that
 * shares the same longitude/latitude. With `:force-new? true`, always
 * inserts a new pin even when coordinates match an existing one.
 */
placesurfer.pin_ui.handlers.rows.add_pin_BANG_ = (function placesurfer$pin_ui$handlers$rows$add_pin_BANG_(var_args){
var G__39742 = arguments.length;
switch (G__39742) {
case 0:
return placesurfer.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return placesurfer.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return placesurfer.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__39743){
var map__39744 = p__39743;
var map__39744__$1 = cljs.core.__destructure_map(map__39744);
var force_new_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39744__$1,new cljs.core.Keyword(null,"force-new?","force-new?",-15330180));
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var saved_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var focus_search_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (s){
var form = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$1(s);
if((!(placesurfer.pin_ui.pure.forms.form_valid_QMARK_(form)))){
return s;
} else {
var temp__5823__auto__ = placesurfer.pin_ui.pure.forms.form__GT_item(form,placesurfer.pin_ui.pure.storage.new_pin_id());
if(cljs.core.truth_(temp__5823__auto__)){
var base = temp__5823__auto__;
var items = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
var existing = (cljs.core.truth_(force_new_QMARK_)?null:placesurfer.pin_ui.pure.rows.find_by_coords(items,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(base)));
var item = (function (){var G__39745 = base;
if(cljs.core.truth_(existing)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39745,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(existing));
} else {
return G__39745;
}
})();
var next_items = placesurfer.pin_ui.pure.rows.upsert_item(items,item);
cljs.core.reset_BANG_(saved,next_items);

cljs.core.reset_BANG_(saved_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));

cljs.core.reset_BANG_(focus_search_QMARK_,(((existing == null)) && (cljs.core.not(force_new_QMARK_))));

return placesurfer.pin_ui.handlers.rows.reset_form_after_add_BANG_(s,next_items,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),(!((existing == null))));
} else {
return s;
}
}
}));

if(cljs.core.truth_(cljs.core.deref(saved))){
placesurfer.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(saved));

placesurfer.pin_ui.handlers.state.render_BANG_();

var temp__5825__auto___39779 = placesurfer.pin_ui.pure.rows.find_by_id(cljs.core.deref(saved),cljs.core.deref(saved_id));
if(cljs.core.truth_(temp__5825__auto___39779)){
var item_39780 = temp__5825__auto___39779;
placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_(item_39780);
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(focus_search_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
} else {
return and__5023__auto__;
}
})())){
return placesurfer.pin_ui.handlers.rows.focus_pin_search_BANG_();
} else {
return null;
}
} else {
return null;
}
}));

(placesurfer.pin_ui.handlers.rows.add_pin_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Add groups and pins that don't already exist. Groups deduped by label,
 * pins deduped by longitude/latitude. Order preserved: ungrouped pins first,
 * then each group (in groups order) with its pins. Returns id of first imported pin, or nil.
 */
placesurfer.pin_ui.handlers.rows.import_pin_items_BANG_ = (function placesurfer$pin_ui$handlers$rows$import_pin_items_BANG_(p__39752){
var map__39753 = p__39752;
var map__39753__$1 = cljs.core.__destructure_map(map__39753);
var pins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39753__$1,new cljs.core.Keyword(null,"pins","pins",1725193285));
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39753__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var first_new_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (s){
var current = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY);
var sep_QMARK_ = (function (p1__39749_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__39749_SHARP_));
});
var existing_labels = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(sep_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__39750_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$2(p1__39750_SHARP_,"")).toLowerCase();
}))),current);
var existing_coords = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(sep_QMARK_),cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__39751_SHARP_){
if(((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(p1__39751_SHARP_) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(p1__39751_SHARP_) === 'number'))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(p1__39751_SHARP_),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(p1__39751_SHARP_)], null);
} else {
return null;
}
}))),current);
var pins_by_group = cljs.core.group_by(new cljs.core.Keyword(null,"group","group",582596132),(function (){var or__5025__auto__ = pins;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var ungrouped = cljs.core.get.cljs$core$IFn$_invoke$arity$3(pins_by_group,null,cljs.core.PersistentVector.EMPTY);
var ordered_items = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ungrouped,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__39757){
var map__39758 = p__39757;
var map__39758__$1 = cljs.core.__destructure_map(map__39758);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39758__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),"separator",new cljs.core.Keyword(null,"label","label",1718410804),label], null),cljs.core.get.cljs$core$IFn$_invoke$arity$3(pins_by_group,label,cljs.core.PersistentVector.EMPTY));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = groups;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], 0)));
var vec__39754 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__39759,item){
var vec__39760 = p__39759;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39760,(0),null);
var seen_labels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39760,(1),null);
var seen_coords = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39760,(2),null);
var kind = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(item);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"separator","separator",-1628749125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,"separator")))){
var label = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$2(item,"")).trim();
var lc = label.toLowerCase();
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",label);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return (seen_labels.cljs$core$IFn$_invoke$arity$1 ? seen_labels.cljs$core$IFn$_invoke$arity$1(lc) : seen_labels.call(null,lc));
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,seen_labels,seen_coords], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.pin_ui.pure.storage.new_pin_id(),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"label","label",1718410804),label], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_labels,lc),seen_coords], null);
}
} else {
if(((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item) === 'number') && (typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item) === 'number'))){
var coord = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item)], null);
if(cljs.core.truth_((seen_coords.cljs$core$IFn$_invoke$arity$1 ? seen_coords.cljs$core$IFn$_invoke$arity$1(coord) : seen_coords.call(null,coord)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,seen_labels,seen_coords], null);
} else {
var new_pin = placesurfer.pin_ui.pure.forms.form__GT_item(placesurfer.pin_ui.pure.forms.item__GT_form(item),placesurfer.pin_ui.pure.storage.new_pin_id());
if(cljs.core.truth_((function (){var and__5023__auto__ = (cljs.core.deref(first_new_id) == null);
if(and__5023__auto__){
return new_pin;
} else {
return and__5023__auto__;
}
})())){
cljs.core.reset_BANG_(first_new_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_pin));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new_pin)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_pin):acc),seen_labels,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_coords,coord)], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,seen_labels,seen_coords], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,existing_labels,existing_coords], null),ordered_items);
var next_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39754,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39754,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39754,(2),null);
cljs.core.reset_BANG_(saved,next_items);

return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.handlers.state.clear_search_ui((function (){var G__39763 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items);
if(cljs.core.truth_(cljs.core.deref(first_new_id))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__39763,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),cljs.core.deref(first_new_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0));
} else {
return G__39763;
}
})()),cljs.core.deref(first_new_id));
}));

if(cljs.core.truth_(cljs.core.deref(saved))){
placesurfer.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(saved));

placesurfer.pin_ui.handlers.state.render_BANG_();

var temp__5825__auto___39781 = cljs.core.deref(first_new_id);
if(cljs.core.truth_(temp__5825__auto___39781)){
var fid_39782 = temp__5825__auto___39781;
var temp__5825__auto___39783__$1 = placesurfer.pin_ui.pure.rows.find_by_id(cljs.core.deref(saved),fid_39782);
if(cljs.core.truth_(temp__5825__auto___39783__$1)){
var item_39784 = temp__5825__auto___39783__$1;
placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_(item_39784);
} else {
}
} else {
}
} else {
}

return cljs.core.deref(first_new_id);
});
placesurfer.pin_ui.handlers.rows.delete_enabled_QMARK_ = (function placesurfer$pin_ui$handlers$rows$delete_enabled_QMARK_(state){
return cljs.core.boolean$((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return cljs.core.some((function (p1__39764_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__39764_SHARP_));
}),new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY));
} else {
return null;
}
})());
});
placesurfer.pin_ui.handlers.rows.delete_selected_pin_BANG_ = (function placesurfer$pin_ui$handlers$rows$delete_selected_pin_BANG_(){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var id = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s);
if(placesurfer.pin_ui.handlers.rows.delete_enabled_QMARK_(s)){
var table_rows = new cljs.core.Keyword(null,"pin-table-rows","pin-table-rows",729424278).cljs$core$IFn$_invoke$arity$1(s);
var next_id = placesurfer.pin_ui.pure.rows.selection_id_after_delete(table_rows,id);
var items = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (state){
var next_items = placesurfer.pin_ui.pure.rows.remove_item(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(state),id);
cljs.core.reset_BANG_(items,next_items);

return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1(placesurfer.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),next_id,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),placesurfer.pin_ui.pure.forms.default_form(),new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),placesurfer.pin_ui.pure.forms.default_form(),new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null,new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159),false,new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),null,new cljs.core.Keyword(null,"pin-editor-snapshot","pin-editor-snapshot",-352879376),null,new cljs.core.Keyword(null,"pin-separator-overlay-open?","pin-separator-overlay-open?",-1998521386),false,new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),null,new cljs.core.Keyword(null,"pin-separator-overlay-snapshot","pin-separator-overlay-snapshot",-1756599608),null,new cljs.core.Keyword(null,"pin-table-keyboard-focus?","pin-table-keyboard-focus?",-1363284319),true], 0))));
}));

if(cljs.core.truth_(cljs.core.deref(items))){
placesurfer.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(items));

placesurfer.pin_ui.handlers.state.render_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
placesurfer.map_ui.interface$.close_all_popups_BANG_();
} else {
}

placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));

if(cljs.core.truth_(next_id)){
var temp__5825__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(placesurfer.pin_ui.handlers.rows.list_items_for_page(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)),next_id);
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
return placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_(item);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
placesurfer.pin_ui.handlers.rows.refresh_pin_table_BANG_ = (function placesurfer$pin_ui$handlers$rows$refresh_pin_table_BANG_(){
return placesurfer.pin_ui.handlers.state.swap_render_BANG_(placesurfer.pin_ui.handlers.rows.refresh_table_rows);
});
placesurfer.pin_ui.handlers.rows.pin_page_table_rows = (function placesurfer$pin_ui$handlers$rows$pin_page_table_rows(s){
return placesurfer.pin_ui.handlers.rows.table_rows_for_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"pin","pin",-2111774834)));
});
/**
 * Move a visible pin row to `to-index` and select it.
 */
placesurfer.pin_ui.handlers.rows.reorder_pin_row_BANG_ = (function placesurfer$pin_ui$handlers$rows$reorder_pin_row_BANG_(drag_id,to_index){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var drag_item = placesurfer.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),drag_id);
if(cljs.core.truth_((function (){var and__5023__auto__ = drag_item;
if(cljs.core.truth_(and__5023__auto__)){
return (!(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(drag_item)));
} else {
return and__5023__auto__;
}
})())){
var next_items = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s)))?placesurfer.pin_ui.pure.rows.reorder_pin_page_items(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),drag_id,to_index):placesurfer.pin_ui.pure.rows.reorder_visible_pin(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s),placesurfer.pin_ui.pure.rows.country_slug_for_view(s),drag_id,to_index));
if(cljs.core.truth_((function (){var and__5023__auto__ = next_items;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_items,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s));
} else {
return and__5023__auto__;
}
})())){
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (state){
return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1(placesurfer.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),drag_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))));
}));

placesurfer.pin_ui.handlers.rows.persist_items_BANG_(next_items);

var temp__5825__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(next_items,drag_id);
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
return placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_(item);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.pin_ui.handlers.rows.js.map
