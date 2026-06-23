goog.provide('hitteri.pin_ui.handlers.rows');
hitteri.pin_ui.handlers.rows.persist_items_BANG_ = (function hitteri$pin_ui$handlers$rows$persist_items_BANG_(items){
return hitteri.pin_ui.pure.storage.save_pins_BANG_(items);
});
hitteri.pin_ui.handlers.rows.list_items_for_page = (function hitteri$pin_ui$handlers$rows$list_items_for_page(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))){
return hitteri.pin_ui.pure.rows.pin_page_list_items(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s));
} else {
return hitteri.pin_ui.pure.rows.visible_list_items((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s),hitteri.pin_ui.pure.rows.country_slug_for_view(s));
}
});
hitteri.pin_ui.handlers.rows.table_rows_for_state = (function hitteri$pin_ui$handlers$rows$table_rows_for_state(s){
return hitteri.pin_ui.pure.rows.table_rows(cljs.core.vec(hitteri.pin_ui.handlers.rows.list_items_for_page(s)),new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s));
});
hitteri.pin_ui.handlers.rows.find_display_item = (function hitteri$pin_ui$handlers$rows$find_display_item(s,id){
return hitteri.pin_ui.pure.rows.find_by_id(hitteri.pin_ui.handlers.rows.list_items_for_page(s),id);
});
hitteri.pin_ui.handlers.rows.refresh_table_rows = (function hitteri$pin_ui$handlers$rows$refresh_table_rows(var_args){
var G__49675 = arguments.length;
switch (G__49675) {
case 1:
return hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1 = (function (s){
return hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2 = (function (s,include_id){
var filtered = hitteri.pin_ui.handlers.rows.list_items_for_page(s);
var filtered__$1 = (cljs.core.truth_(include_id)?(function (){var items = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
var temp__5823__auto__ = hitteri.pin_ui.pure.rows.find_by_id(items,include_id);
if(cljs.core.truth_(temp__5823__auto__)){
var item = temp__5823__auto__;
if(cljs.core.truth_(cljs.core.some((function (p1__49673_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(include_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49673_SHARP_));
}),filtered))){
return filtered;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(filtered),item);
}
} else {
return filtered;
}
})():filtered);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pin-table-rows","pin-table-rows",729424278),hitteri.pin_ui.pure.rows.table_rows(cljs.core.vec(filtered__$1),new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s)));
}));

(hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$lang$maxFixedArity = 2);

hitteri.pin_ui.handlers.rows.selectable_pin_items = (function hitteri$pin_ui$handlers$rows$selectable_pin_items(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))){
return hitteri.pin_ui.pure.rows.pin_page_list_items(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s));
} else {
return hitteri.pin_ui.pure.rows.visible_list_items((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s),hitteri.pin_ui.pure.rows.country_slug_for_view(s));
}
});
hitteri.pin_ui.handlers.rows.select_pin_row_BANG_ = (function hitteri$pin_ui$handlers$rows$select_pin_row_BANG_(id){
var s = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
var item = hitteri.pin_ui.pure.rows.find_by_id(hitteri.pin_ui.handlers.rows.selectable_pin_items(s),id);
if(cljs.core.truth_((function (){var and__5023__auto__ = item;
if(cljs.core.truth_(and__5023__auto__)){
return (!(hitteri.pin_ui.pure.rows.separator_item_QMARK_(item)));
} else {
return and__5023__auto__;
}
})())){
hitteri.pin_ui.handlers.state.swap_render_BANG_((function (state){
return hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1(hitteri.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))));
}));

return hitteri.pin_ui.handlers.map.focus_pin_on_map_BANG_(item);
} else {
return null;
}
});
hitteri.pin_ui.handlers.rows.select_display_row_BANG_ = (function hitteri$pin_ui$handlers$rows$select_display_row_BANG_(id){
var s = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
var item = hitteri.pin_ui.pure.rows.find_by_id(hitteri.pin_ui.handlers.rows.list_items_for_page(s),id);
if(cljs.core.truth_((function (){var and__5023__auto__ = item;
if(cljs.core.truth_(and__5023__auto__)){
return (!(hitteri.pin_ui.pure.rows.separator_item_QMARK_(item)));
} else {
return and__5023__auto__;
}
})())){
hitteri.pin_ui.handlers.state.swap_render_BANG_((function (state){
return hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1(hitteri.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))));
}));

return hitteri.pin_ui.handlers.map.focus_pin_on_map_BANG_(item);
} else {
return null;
}
});
hitteri.pin_ui.handlers.rows.focus_pin_search_BANG_ = (function hitteri$pin_ui$handlers$rows$focus_pin_search_BANG_(){
if(cljs.core.truth_(typeof document !== 'undefined' && document.getElementById)){
var seq__49676 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(60),(140),(260)], null));
var chunk__49677 = null;
var count__49678 = (0);
var i__49679 = (0);
while(true){
if((i__49679 < count__49678)){
var delay_ms = chunk__49677.cljs$core$IIndexed$_nth$arity$2(null,i__49679);
setTimeout(((function (seq__49676,chunk__49677,count__49678,i__49679,delay_ms){
return (function (){
var temp__5825__auto__ = document.getElementById("pin-search");
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return el.focus();
} else {
return null;
}
});})(seq__49676,chunk__49677,count__49678,i__49679,delay_ms))
,delay_ms);


var G__49702 = seq__49676;
var G__49703 = chunk__49677;
var G__49704 = count__49678;
var G__49705 = (i__49679 + (1));
seq__49676 = G__49702;
chunk__49677 = G__49703;
count__49678 = G__49704;
i__49679 = G__49705;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__49676);
if(temp__5825__auto__){
var seq__49676__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49676__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__49676__$1);
var G__49706 = cljs.core.chunk_rest(seq__49676__$1);
var G__49707 = c__5548__auto__;
var G__49708 = cljs.core.count(c__5548__auto__);
var G__49709 = (0);
seq__49676 = G__49706;
chunk__49677 = G__49707;
count__49678 = G__49708;
i__49679 = G__49709;
continue;
} else {
var delay_ms = cljs.core.first(seq__49676__$1);
setTimeout(((function (seq__49676,chunk__49677,count__49678,i__49679,delay_ms,seq__49676__$1,temp__5825__auto__){
return (function (){
var temp__5825__auto____$1 = document.getElementById("pin-search");
if(cljs.core.truth_(temp__5825__auto____$1)){
var el = temp__5825__auto____$1;
return el.focus();
} else {
return null;
}
});})(seq__49676,chunk__49677,count__49678,i__49679,delay_ms,seq__49676__$1,temp__5825__auto__))
,delay_ms);


var G__49710 = cljs.core.next(seq__49676__$1);
var G__49711 = null;
var G__49712 = (0);
var G__49713 = (0);
seq__49676 = G__49710;
chunk__49677 = G__49711;
count__49678 = G__49712;
i__49679 = G__49713;
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
hitteri.pin_ui.handlers.rows.reset_form_after_add_BANG_ = (function hitteri$pin_ui$handlers$rows$reset_form_after_add_BANG_(state,items,saved_id,existing_QMARK_){
var saved_item = hitteri.pin_ui.pure.rows.find_by_id(items,saved_id);
var next_form = (cljs.core.truth_(existing_QMARK_)?hitteri.pin_ui.pure.forms.item__GT_form(saved_item):hitteri.pin_ui.pure.forms.default_form());
return hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(hitteri.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),saved_id,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),next_form,new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),next_form,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))),saved_id);
});
hitteri.pin_ui.handlers.rows.save_target_item = (function hitteri$pin_ui$handlers$rows$save_target_item(items,selected_id,form){
var or__5025__auto__ = (cljs.core.truth_(selected_id)?hitteri.pin_ui.pure.rows.find_by_id(items,selected_id):null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = hitteri.pin_ui.pure.forms.form__GT_item(form,"probe");
if(cljs.core.truth_(temp__5825__auto__)){
var probe = temp__5825__auto__;
return hitteri.pin_ui.pure.rows.find_by_coords(items,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(probe),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(probe));
} else {
return null;
}
}
});
hitteri.pin_ui.handlers.rows.save_enabled_QMARK_ = (function hitteri$pin_ui$handlers$rows$save_enabled_QMARK_(state){
var form = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$1(state);
var baseline = new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539).cljs$core$IFn$_invoke$arity$2(state,hitteri.pin_ui.pure.forms.default_form());
return ((hitteri.pin_ui.pure.forms.form_valid_QMARK_(form)) && (hitteri.pin_ui.pure.forms.form_edited_from_baseline_QMARK_(form,baseline)));
});
hitteri.pin_ui.handlers.rows.apply_save_BANG_ = (function hitteri$pin_ui$handlers$rows$apply_save_BANG_(s,form,next_items,item_id){
return hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(hitteri.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),form,new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),form,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),item_id,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))),item_id);
});
/**
 * Persist form edits: update matching list item or add a new one.
 */
hitteri.pin_ui.handlers.rows.save_pin_BANG_ = (function hitteri$pin_ui$handlers$rows$save_pin_BANG_(){
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var saved_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
hitteri.pin_ui.handlers.state.swap_state_BANG_((function (s){
if((!(hitteri.pin_ui.handlers.rows.save_enabled_QMARK_(s)))){
return s;
} else {
var form = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$1(s);
var items = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
var temp__5823__auto__ = hitteri.pin_ui.handlers.rows.save_target_item(items,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s),form);
if(cljs.core.truth_(temp__5823__auto__)){
var target = temp__5823__auto__;
var temp__5823__auto____$1 = hitteri.pin_ui.pure.forms.form__GT_item(form,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target));
if(cljs.core.truth_(temp__5823__auto____$1)){
var updated = temp__5823__auto____$1;
var next_items = hitteri.pin_ui.pure.rows.upsert_item(items,updated);
cljs.core.reset_BANG_(saved,next_items);

cljs.core.reset_BANG_(saved_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target));

return hitteri.pin_ui.handlers.rows.apply_save_BANG_(s,form,next_items,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target));
} else {
return s;
}
} else {
var temp__5823__auto____$1 = hitteri.pin_ui.pure.forms.form__GT_item(form,hitteri.pin_ui.pure.storage.new_pin_id());
if(cljs.core.truth_(temp__5823__auto____$1)){
var created = temp__5823__auto____$1;
var next_items = hitteri.pin_ui.pure.rows.upsert_item(items,created);
cljs.core.reset_BANG_(saved,next_items);

cljs.core.reset_BANG_(saved_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(created));

return hitteri.pin_ui.handlers.rows.apply_save_BANG_(s,form,next_items,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(created));
} else {
return s;
}
}
}
}));

if(cljs.core.truth_(cljs.core.deref(saved))){
hitteri.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(saved));

hitteri.pin_ui.handlers.state.render_BANG_();

var temp__5825__auto__ = hitteri.pin_ui.pure.rows.find_by_id(cljs.core.deref(saved),cljs.core.deref(saved_id));
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
return hitteri.pin_ui.handlers.map.focus_pin_on_map_BANG_(item);
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
hitteri.pin_ui.handlers.rows.add_pin_BANG_ = (function hitteri$pin_ui$handlers$rows$add_pin_BANG_(var_args){
var G__49681 = arguments.length;
switch (G__49681) {
case 0:
return hitteri.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return hitteri.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return hitteri.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(hitteri.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__49682){
var map__49683 = p__49682;
var map__49683__$1 = cljs.core.__destructure_map(map__49683);
var force_new_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49683__$1,new cljs.core.Keyword(null,"force-new?","force-new?",-15330180));
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var saved_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var focus_search_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
hitteri.pin_ui.handlers.state.swap_state_BANG_((function (s){
var form = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$1(s);
if((!(hitteri.pin_ui.pure.forms.form_valid_QMARK_(form)))){
return s;
} else {
var temp__5823__auto__ = hitteri.pin_ui.pure.forms.form__GT_item(form,hitteri.pin_ui.pure.storage.new_pin_id());
if(cljs.core.truth_(temp__5823__auto__)){
var base = temp__5823__auto__;
var items = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
var existing = (cljs.core.truth_(force_new_QMARK_)?null:hitteri.pin_ui.pure.rows.find_by_coords(items,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(base)));
var item = (function (){var G__49684 = base;
if(cljs.core.truth_(existing)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49684,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(existing));
} else {
return G__49684;
}
})();
var next_items = hitteri.pin_ui.pure.rows.upsert_item(items,item);
cljs.core.reset_BANG_(saved,next_items);

cljs.core.reset_BANG_(saved_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));

cljs.core.reset_BANG_(focus_search_QMARK_,(((existing == null)) && (cljs.core.not(force_new_QMARK_))));

return hitteri.pin_ui.handlers.rows.reset_form_after_add_BANG_(s,next_items,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),(!((existing == null))));
} else {
return s;
}
}
}));

if(cljs.core.truth_(cljs.core.deref(saved))){
hitteri.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(saved));

hitteri.pin_ui.handlers.state.render_BANG_();

var temp__5825__auto___49718 = hitteri.pin_ui.pure.rows.find_by_id(cljs.core.deref(saved),cljs.core.deref(saved_id));
if(cljs.core.truth_(temp__5825__auto___49718)){
var item_49719 = temp__5825__auto___49718;
hitteri.pin_ui.handlers.map.focus_pin_on_map_BANG_(item_49719);
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(focus_search_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
} else {
return and__5023__auto__;
}
})())){
return hitteri.pin_ui.handlers.rows.focus_pin_search_BANG_();
} else {
return null;
}
} else {
return null;
}
}));

(hitteri.pin_ui.handlers.rows.add_pin_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Add groups and pins that don't already exist. Groups deduped by label,
 * pins deduped by longitude/latitude. Order preserved: ungrouped pins first,
 * then each group (in groups order) with its pins. Returns id of first imported pin, or nil.
 */
hitteri.pin_ui.handlers.rows.import_pin_items_BANG_ = (function hitteri$pin_ui$handlers$rows$import_pin_items_BANG_(p__49688){
var map__49689 = p__49688;
var map__49689__$1 = cljs.core.__destructure_map(map__49689);
var pins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49689__$1,new cljs.core.Keyword(null,"pins","pins",1725193285));
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49689__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var first_new_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
hitteri.pin_ui.handlers.state.swap_state_BANG_((function (s){
var current = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY);
var sep_QMARK_ = (function (p1__49685_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__49685_SHARP_));
});
var existing_labels = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(sep_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__49686_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$2(p1__49686_SHARP_,"")).toLowerCase();
}))),current);
var existing_coords = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(sep_QMARK_),cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__49687_SHARP_){
if(((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(p1__49687_SHARP_) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(p1__49687_SHARP_) === 'number'))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(p1__49687_SHARP_),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(p1__49687_SHARP_)], null);
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
var ordered_items = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ungrouped,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__49693){
var map__49694 = p__49693;
var map__49694__$1 = cljs.core.__destructure_map(map__49694);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49694__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),"separator",new cljs.core.Keyword(null,"label","label",1718410804),label], null),cljs.core.get.cljs$core$IFn$_invoke$arity$3(pins_by_group,label,cljs.core.PersistentVector.EMPTY));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = groups;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], 0)));
var vec__49690 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__49695,item){
var vec__49696 = p__49695;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49696,(0),null);
var seen_labels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49696,(1),null);
var seen_coords = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49696,(2),null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),hitteri.pin_ui.pure.storage.new_pin_id(),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"label","label",1718410804),label], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_labels,lc),seen_coords], null);
}
} else {
if(((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item) === 'number') && (typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item) === 'number'))){
var coord = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item)], null);
if(cljs.core.truth_((seen_coords.cljs$core$IFn$_invoke$arity$1 ? seen_coords.cljs$core$IFn$_invoke$arity$1(coord) : seen_coords.call(null,coord)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,seen_labels,seen_coords], null);
} else {
var new_pin = hitteri.pin_ui.pure.forms.form__GT_item(hitteri.pin_ui.pure.forms.item__GT_form(item),hitteri.pin_ui.pure.storage.new_pin_id());
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
var next_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49690,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49690,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49690,(2),null);
cljs.core.reset_BANG_(saved,next_items);

return hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(hitteri.pin_ui.handlers.state.clear_search_ui((function (){var G__49699 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items);
if(cljs.core.truth_(cljs.core.deref(first_new_id))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__49699,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),cljs.core.deref(first_new_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0));
} else {
return G__49699;
}
})()),cljs.core.deref(first_new_id));
}));

if(cljs.core.truth_(cljs.core.deref(saved))){
hitteri.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(saved));

hitteri.pin_ui.handlers.state.render_BANG_();

var temp__5825__auto___49728 = cljs.core.deref(first_new_id);
if(cljs.core.truth_(temp__5825__auto___49728)){
var fid_49729 = temp__5825__auto___49728;
var temp__5825__auto___49730__$1 = hitteri.pin_ui.pure.rows.find_by_id(cljs.core.deref(saved),fid_49729);
if(cljs.core.truth_(temp__5825__auto___49730__$1)){
var item_49731 = temp__5825__auto___49730__$1;
hitteri.pin_ui.handlers.map.focus_pin_on_map_BANG_(item_49731);
} else {
}
} else {
}
} else {
}

return cljs.core.deref(first_new_id);
});
hitteri.pin_ui.handlers.rows.delete_enabled_QMARK_ = (function hitteri$pin_ui$handlers$rows$delete_enabled_QMARK_(state){
return cljs.core.boolean$((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return cljs.core.some((function (p1__49700_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49700_SHARP_));
}),new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY));
} else {
return null;
}
})());
});
hitteri.pin_ui.handlers.rows.delete_selected_pin_BANG_ = (function hitteri$pin_ui$handlers$rows$delete_selected_pin_BANG_(){
var s = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
var id = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s);
if(hitteri.pin_ui.handlers.rows.delete_enabled_QMARK_(s)){
var table_rows = new cljs.core.Keyword(null,"pin-table-rows","pin-table-rows",729424278).cljs$core$IFn$_invoke$arity$1(s);
var next_id = hitteri.pin_ui.pure.rows.selection_id_after_delete(table_rows,id);
var items = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
hitteri.pin_ui.handlers.state.swap_state_BANG_((function (state){
var next_items = hitteri.pin_ui.pure.rows.remove_item(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(state),id);
cljs.core.reset_BANG_(items,next_items);

return hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1(hitteri.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),next_id,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),hitteri.pin_ui.pure.forms.default_form(),new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),hitteri.pin_ui.pure.forms.default_form(),new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null,new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159),false,new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),null,new cljs.core.Keyword(null,"pin-editor-snapshot","pin-editor-snapshot",-352879376),null,new cljs.core.Keyword(null,"pin-separator-overlay-open?","pin-separator-overlay-open?",-1998521386),false,new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),null,new cljs.core.Keyword(null,"pin-separator-overlay-snapshot","pin-separator-overlay-snapshot",-1756599608),null,new cljs.core.Keyword(null,"pin-table-keyboard-focus?","pin-table-keyboard-focus?",-1363284319),true], 0))));
}));

if(cljs.core.truth_(cljs.core.deref(items))){
hitteri.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(items));

hitteri.pin_ui.handlers.state.render_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)))){
hitteri.map_ui.interface$.close_all_popups_BANG_();
} else {
}

hitteri.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));

if(cljs.core.truth_(next_id)){
var temp__5825__auto__ = hitteri.pin_ui.pure.rows.find_by_id(hitteri.pin_ui.handlers.rows.list_items_for_page(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)),next_id);
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
return hitteri.pin_ui.handlers.map.focus_pin_on_map_BANG_(item);
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
hitteri.pin_ui.handlers.rows.refresh_pin_table_BANG_ = (function hitteri$pin_ui$handlers$rows$refresh_pin_table_BANG_(){
return hitteri.pin_ui.handlers.state.swap_render_BANG_(hitteri.pin_ui.handlers.rows.refresh_table_rows);
});
hitteri.pin_ui.handlers.rows.pin_page_table_rows = (function hitteri$pin_ui$handlers$rows$pin_page_table_rows(s){
return hitteri.pin_ui.handlers.rows.table_rows_for_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"pin","pin",-2111774834)));
});
/**
 * Move a visible pin row to `to-index` and select it.
 */
hitteri.pin_ui.handlers.rows.reorder_pin_row_BANG_ = (function hitteri$pin_ui$handlers$rows$reorder_pin_row_BANG_(drag_id,to_index){
var s = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
var drag_item = hitteri.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),drag_id);
if(cljs.core.truth_((function (){var and__5023__auto__ = drag_item;
if(cljs.core.truth_(and__5023__auto__)){
return (!(hitteri.pin_ui.pure.rows.separator_item_QMARK_(drag_item)));
} else {
return and__5023__auto__;
}
})())){
var next_items = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s)))?hitteri.pin_ui.pure.rows.reorder_pin_page_items(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),drag_id,to_index):hitteri.pin_ui.pure.rows.reorder_visible_pin(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s),hitteri.pin_ui.pure.rows.country_slug_for_view(s),drag_id,to_index));
if(cljs.core.truth_((function (){var and__5023__auto__ = next_items;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_items,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s));
} else {
return and__5023__auto__;
}
})())){
hitteri.pin_ui.handlers.state.swap_render_BANG_((function (state){
return hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1(hitteri.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),drag_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))));
}));

hitteri.pin_ui.handlers.rows.persist_items_BANG_(next_items);

var temp__5825__auto__ = hitteri.pin_ui.pure.rows.find_by_id(next_items,drag_id);
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
return hitteri.pin_ui.handlers.map.focus_pin_on_map_BANG_(item);
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

//# sourceMappingURL=hitteri.pin_ui.handlers.rows.js.map
