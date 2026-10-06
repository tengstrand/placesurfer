goog.provide('placesurfer.pin_ui.handlers.rows');
placesurfer.pin_ui.handlers.rows.persist_items_BANG_ = (function placesurfer$pin_ui$handlers$rows$persist_items_BANG_(items){
placesurfer.pin_ui.pure.storage.save_pins_BANG_(items);

if(placesurfer.dropbox.interface$.connected_QMARK_()){
return placesurfer.dropbox.interface$.push_BANG_();
} else {
return null;
}
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
var G__21365 = arguments.length;
switch (G__21365) {
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
var include_id_STAR_ = (function (){var or__5025__auto__ = include_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"pin-new-draft-id","pin-new-draft-id",1457124075).cljs$core$IFn$_invoke$arity$1(s);
}
})();
var filtered = placesurfer.pin_ui.handlers.rows.list_items_for_page(s);
var filtered__$1 = (cljs.core.truth_(include_id_STAR_)?(function (){var items = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
var temp__5821__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(items,include_id_STAR_);
if(cljs.core.truth_(temp__5821__auto__)){
var item = temp__5821__auto__;
if(cljs.core.truth_(cljs.core.some((function (p1__21363_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(include_id_STAR_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__21363_SHARP_));
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
var item = (function (){var or__5025__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(placesurfer.pin_ui.handlers.rows.selectable_pin_items(s),id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),id);
}
})();
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
var item = (function (){var or__5025__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(placesurfer.pin_ui.handlers.rows.list_items_for_page(s),id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),id);
}
})();
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
var seq__21369 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(60),(140),(260)], null));
var chunk__21370 = null;
var count__21371 = (0);
var i__21372 = (0);
while(true){
if((i__21372 < count__21371)){
var delay_ms = chunk__21370.cljs$core$IIndexed$_nth$arity$2(null,i__21372);
setTimeout(((function (seq__21369,chunk__21370,count__21371,i__21372,delay_ms){
return (function (){
var temp__5823__auto__ = document.getElementById("pin-search");
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
return el.focus();
} else {
return null;
}
});})(seq__21369,chunk__21370,count__21371,i__21372,delay_ms))
,delay_ms);


var G__21481 = seq__21369;
var G__21482 = chunk__21370;
var G__21483 = count__21371;
var G__21484 = (i__21372 + (1));
seq__21369 = G__21481;
chunk__21370 = G__21482;
count__21371 = G__21483;
i__21372 = G__21484;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21369);
if(temp__5823__auto__){
var seq__21369__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21369__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21369__$1);
var G__21485 = cljs.core.chunk_rest(seq__21369__$1);
var G__21486 = c__5548__auto__;
var G__21487 = cljs.core.count(c__5548__auto__);
var G__21488 = (0);
seq__21369 = G__21485;
chunk__21370 = G__21486;
count__21371 = G__21487;
i__21372 = G__21488;
continue;
} else {
var delay_ms = cljs.core.first(seq__21369__$1);
setTimeout(((function (seq__21369,chunk__21370,count__21371,i__21372,delay_ms,seq__21369__$1,temp__5823__auto__){
return (function (){
var temp__5823__auto____$1 = document.getElementById("pin-search");
if(cljs.core.truth_(temp__5823__auto____$1)){
var el = temp__5823__auto____$1;
return el.focus();
} else {
return null;
}
});})(seq__21369,chunk__21370,count__21371,i__21372,delay_ms,seq__21369__$1,temp__5823__auto__))
,delay_ms);


var G__21489 = cljs.core.next(seq__21369__$1);
var G__21490 = null;
var G__21491 = (0);
var G__21492 = (0);
seq__21369 = G__21489;
chunk__21370 = G__21490;
count__21371 = G__21491;
i__21372 = G__21492;
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
var temp__5823__auto__ = placesurfer.pin_ui.pure.forms.form__GT_item(form,"probe");
if(cljs.core.truth_(temp__5823__auto__)){
var probe = temp__5823__auto__;
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
return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.handlers.state.clear_search_ui((function (){var G__21377 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),form,new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),form,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),item_id,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin-new-draft-id","pin-new-draft-id",1457124075).cljs$core$IFn$_invoke$arity$1(s),item_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21377,new cljs.core.Keyword(null,"pin-new-draft-id","pin-new-draft-id",1457124075),null);
} else {
return G__21377;
}
})()),item_id);
});
/**
 * Persist form edits: update matching list item or add a new one.
 */
placesurfer.pin_ui.handlers.rows.save_pin_BANG_ = (function placesurfer$pin_ui$handlers$rows$save_pin_BANG_(var_args){
var G__21387 = arguments.length;
switch (G__21387) {
case 0:
return placesurfer.pin_ui.handlers.rows.save_pin_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return placesurfer.pin_ui.handlers.rows.save_pin_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.pin_ui.handlers.rows.save_pin_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return placesurfer.pin_ui.handlers.rows.save_pin_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.pin_ui.handlers.rows.save_pin_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__21388){
var map__21389 = p__21388;
var map__21389__$1 = cljs.core.__destructure_map(map__21389);
var focus_map_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21389__$1,new cljs.core.Keyword(null,"focus-map?","focus-map?",1367256164),true);
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var saved_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (s){
if((!(placesurfer.pin_ui.handlers.rows.save_enabled_QMARK_(s)))){
return s;
} else {
var form = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$1(s);
var items = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
var temp__5821__auto__ = placesurfer.pin_ui.handlers.rows.save_target_item(items,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s),form);
if(cljs.core.truth_(temp__5821__auto__)){
var target = temp__5821__auto__;
var temp__5821__auto____$1 = placesurfer.pin_ui.pure.forms.form__GT_item(form,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target));
if(cljs.core.truth_(temp__5821__auto____$1)){
var updated = temp__5821__auto____$1;
var next_items = placesurfer.pin_ui.pure.rows.upsert_item(items,updated);
cljs.core.reset_BANG_(saved,next_items);

cljs.core.reset_BANG_(saved_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target));

return placesurfer.pin_ui.handlers.rows.apply_save_BANG_(s,form,next_items,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target));
} else {
return s;
}
} else {
var temp__5821__auto____$1 = placesurfer.pin_ui.pure.forms.form__GT_item(form,placesurfer.pin_ui.pure.storage.new_pin_id());
if(cljs.core.truth_(temp__5821__auto____$1)){
var created = temp__5821__auto____$1;
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

if(cljs.core.truth_(focus_map_QMARK_)){
var temp__5823__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(cljs.core.deref(saved),cljs.core.deref(saved_id));
if(cljs.core.truth_(temp__5823__auto__)){
var item = temp__5823__auto__;
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
}));

(placesurfer.pin_ui.handlers.rows.save_pin_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Add the current form as a pin, or update the existing pin that
 * shares the same longitude/latitude. With `:force-new? true`, always
 * inserts a new pin even when coordinates match an existing one.
 */
placesurfer.pin_ui.handlers.rows.add_pin_BANG_ = (function placesurfer$pin_ui$handlers$rows$add_pin_BANG_(var_args){
var G__21399 = arguments.length;
switch (G__21399) {
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

(placesurfer.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__21401){
var map__21402 = p__21401;
var map__21402__$1 = cljs.core.__destructure_map(map__21402);
var force_new_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21402__$1,new cljs.core.Keyword(null,"force-new?","force-new?",-15330180));
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var saved_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var focus_search_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (s){
var form = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$1(s);
if((!(placesurfer.pin_ui.pure.forms.form_valid_QMARK_(form)))){
return s;
} else {
var temp__5821__auto__ = placesurfer.pin_ui.pure.forms.form__GT_item(form,placesurfer.pin_ui.pure.storage.new_pin_id());
if(cljs.core.truth_(temp__5821__auto__)){
var base = temp__5821__auto__;
var items = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
var existing = (cljs.core.truth_(force_new_QMARK_)?null:placesurfer.pin_ui.pure.rows.find_by_coords(items,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(base)));
var item = (function (){var G__21405 = base;
if(cljs.core.truth_(existing)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21405,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(existing));
} else {
return G__21405;
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

var temp__5823__auto___21495 = placesurfer.pin_ui.pure.rows.find_by_id(cljs.core.deref(saved),cljs.core.deref(saved_id));
if(cljs.core.truth_(temp__5823__auto___21495)){
var item_21496 = temp__5823__auto___21495;
placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_(item_21496);
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
 * When a draft (newly created empty) pin is being edited, sync field k=v
 * into pin-items so the list row updates immediately without waiting for
 * auto-save to fire (which requires valid coordinates).
 */
placesurfer.pin_ui.handlers.rows.update_draft_pin_field_BANG_ = (function placesurfer$pin_ui$handlers$rows$update_draft_pin_field_BANG_(k,v){
var temp__5823__auto__ = new cljs.core.Keyword(null,"pin-new-draft-id","pin-new-draft-id",1457124075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5823__auto__)){
var draft_id = temp__5823__auto__;
return placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(draft_id,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s))){
var temp__5821__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),draft_id);
if(cljs.core.truth_(temp__5821__auto__)){
var item = temp__5821__auto__;
var next_items = placesurfer.pin_ui.pure.rows.upsert_item(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,k,v));
return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items),draft_id);
} else {
return s;
}
} else {
return s;
}
}));
} else {
return null;
}
});
/**
 * Insert a new blank pin with the given coordinates, select it, and return its id.
 */
placesurfer.pin_ui.handlers.rows.add_pin_item_at_coords_BANG_ = (function placesurfer$pin_ui$handlers$rows$add_pin_item_at_coords_BANG_(var_args){
var G__21414 = arguments.length;
switch (G__21414) {
case 2:
return placesurfer.pin_ui.handlers.rows.add_pin_item_at_coords_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return placesurfer.pin_ui.handlers.rows.add_pin_item_at_coords_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.pin_ui.handlers.rows.add_pin_item_at_coords_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (longitude,latitude){
return placesurfer.pin_ui.handlers.rows.add_pin_item_at_coords_BANG_.cljs$core$IFn$_invoke$arity$3(longitude,latitude,cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.pin_ui.handlers.rows.add_pin_item_at_coords_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (longitude,latitude,extra_fields){
var new_id = placesurfer.pin_ui.pure.storage.new_pin_id();
var item = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"address","address",559499426),"",new cljs.core.Keyword(null,"icon","icon",1679606541),placesurfer.pin_ui.pure.forms.default_icon,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude], null),extra_fields], 0));
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (s){
var next_items = placesurfer.pin_ui.pure.rows.upsert_item(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY),item);
cljs.core.reset_BANG_(saved,next_items);

return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-new-draft-id","pin-new-draft-id",1457124075),new_id,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),new_id,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))),new_id);
}));

if(cljs.core.truth_(cljs.core.deref(saved))){
placesurfer.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(saved));

placesurfer.pin_ui.handlers.state.render_BANG_();
} else {
}

return new_id;
}));

(placesurfer.pin_ui.handlers.rows.add_pin_item_at_coords_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Update name and address on the pin item with the given id,
 * and refresh the form if that item is currently selected.
 */
placesurfer.pin_ui.handlers.rows.update_pin_name_address_BANG_ = (function placesurfer$pin_ui$handlers$rows$update_pin_name_address_BANG_(id,name,address){
if(cljs.core.truth_(id)){
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (s){
var item = placesurfer.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY),id);
var updated = (cljs.core.truth_(item)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"address","address",559499426),address], 0)):null);
var next_items = (cljs.core.truth_(updated)?placesurfer.pin_ui.pure.rows.upsert_item(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY),updated):new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY));
cljs.core.reset_BANG_(saved,next_items);

var G__21417 = s;
var G__21417__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21417,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items)
;
var G__21417__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s)))?cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(G__21417__$1,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address], 0)):G__21417__$1);
return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(G__21417__$2,id);

}));

if(cljs.core.truth_(cljs.core.deref(saved))){
placesurfer.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(saved));

return placesurfer.pin_ui.handlers.state.render_BANG_();
} else {
return null;
}
} else {
return null;
}
});
/**
 * Insert a new blank pin at the end of the list, select it, and return its id.
 */
placesurfer.pin_ui.handlers.rows.add_empty_pin_item_BANG_ = (function placesurfer$pin_ui$handlers$rows$add_empty_pin_item_BANG_(){
var new_id = placesurfer.pin_ui.pure.storage.new_pin_id();
var item = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"address","address",559499426),"",new cljs.core.Keyword(null,"icon","icon",1679606541),placesurfer.pin_ui.pure.forms.default_icon], null);
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (s){
var next_items = placesurfer.pin_ui.pure.rows.upsert_item(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY),item);
cljs.core.reset_BANG_(saved,next_items);

return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-new-draft-id","pin-new-draft-id",1457124075),new_id,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),new_id,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))),new_id);
}));

if(cljs.core.truth_(cljs.core.deref(saved))){
placesurfer.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(saved));

placesurfer.pin_ui.handlers.state.render_BANG_();
} else {
}

return new_id;
});
placesurfer.pin_ui.handlers.rows.import_skip_message = (function placesurfer$pin_ui$handlers$rows$import_skip_message(no_coords,no_name){
var total = (no_coords + no_name);
if((total > (0))){
var parts = (function (){var G__21423 = cljs.core.PersistentVector.EMPTY;
var G__21423__$1 = (((no_coords > (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__21423,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(no_coords),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),no_coords))?" entry":" entries")," without coordinates"].join('')):G__21423);
if((no_name > (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__21423__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(no_name),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),no_name))?" entry":" entries")," without name"].join(''));
} else {
return G__21423__$1;
}
})();
return ["Skipped ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",parts)].join('');
} else {
return null;
}
});
/**
 * Append pins that don't already exist (deduped by longitude/latitude) to
 * the end of the list. Any legacy `:group` tag on an imported pin (from an
 * older export) is ignored - groups are no longer a concept here, so
 * imported pins always land ungrouped. Returns id of first imported pin,
 * or nil.
 */
placesurfer.pin_ui.handlers.rows.import_pin_items_BANG_ = (function placesurfer$pin_ui$handlers$rows$import_pin_items_BANG_(p__21436){
var map__21437 = p__21436;
var map__21437__$1 = cljs.core.__destructure_map(map__21437);
var pins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword(null,"pins","pins",1725193285));
var pins__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21428_SHARP_){
return clojure.set.rename_keys(p1__21428_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"address","address",559499426)], null));
}),(function (){var or__5025__auto__ = pins;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var saved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var first_new_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var skipped_no_coords = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var skipped_no_name = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (s){
var current = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY);
var existing_coords = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__21429_SHARP_){
if(((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(p1__21429_SHARP_) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(p1__21429_SHARP_) === 'number'))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(p1__21429_SHARP_),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(p1__21429_SHARP_)], null);
} else {
return null;
}
}),current));
var seen_coords = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(existing_coords);
var make_new_pin = (function (item){
var lon = new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item);
var lat = new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item);
if((!(((placesurfer.pin_ui.pure.coords.valid_longitude_QMARK_(lon)) && (placesurfer.pin_ui.pure.coords.valid_latitude_QMARK_(lat)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(skipped_no_coords,cljs.core.inc);

return null;
} else {
if(clojure.string.blank_QMARK_(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(item,""))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(skipped_no_name,cljs.core.inc);

return null;
} else {
if(cljs.core.truth_((function (){var G__21457 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null);
var fexpr__21456 = cljs.core.deref(seen_coords);
return (fexpr__21456.cljs$core$IFn$_invoke$arity$1 ? fexpr__21456.cljs$core$IFn$_invoke$arity$1(G__21457) : fexpr__21456.call(null,G__21457));
})())){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen_coords,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null));

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

return new_pin;

}
}
}
});
var new_pins = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(make_new_pin,pins__$1);
var next_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(current),new_pins);
cljs.core.reset_BANG_(saved,next_items);

var msg = placesurfer.pin_ui.handlers.rows.import_skip_message(cljs.core.deref(skipped_no_coords),cljs.core.deref(skipped_no_name));
return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.handlers.state.clear_search_ui((function (){var G__21458 = (function (){var G__21459 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items);
if(cljs.core.truth_(cljs.core.deref(first_new_id))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21459,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),cljs.core.deref(first_new_id));
} else {
return G__21459;
}
})();
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.deref(first_new_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return msg;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21458,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),msg);
} else {
return G__21458;
}
})()),cljs.core.deref(first_new_id));
}));

if(cljs.core.truth_(cljs.core.deref(saved))){
placesurfer.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(saved));

placesurfer.pin_ui.handlers.state.render_BANG_();

var temp__5823__auto___21502 = cljs.core.deref(first_new_id);
if(cljs.core.truth_(temp__5823__auto___21502)){
var fid_21503 = temp__5823__auto___21502;
var temp__5823__auto___21504__$1 = placesurfer.pin_ui.pure.rows.find_by_id(cljs.core.deref(saved),fid_21503);
if(cljs.core.truth_(temp__5823__auto___21504__$1)){
var item_21505 = temp__5823__auto___21504__$1;
placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_(item_21505);
} else {
}
} else {
}
} else {
}

return cljs.core.deref(first_new_id);
});
placesurfer.pin_ui.handlers.rows.delete_enabled_QMARK_ = (function placesurfer$pin_ui$handlers$rows$delete_enabled_QMARK_(state){
return cljs.core.boolean$((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return cljs.core.some((function (p1__21460_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__21460_SHARP_));
}),new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY));
} else {
return null;
}
})());
});
placesurfer.pin_ui.handlers.rows.pin_item_exists_QMARK_ = (function placesurfer$pin_ui$handlers$rows$pin_item_exists_QMARK_(state,id){
return cljs.core.boolean$(cljs.core.some((function (p1__21461_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__21461_SHARP_));
}),new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY)));
});
/**
 * Remove the pin `id` from the list, regardless of whether it's currently
 * selected - the trash-icon-per-row counterpart to `delete-selected-pin!`.
 * Only touches :pin-selected-id/the open editor/form when the deleted row
 * WAS the selected one; deleting an unrelated row via its own trash icon
 * must not disturb whatever's currently open. Stashes the removed item and
 * its index in :pin-delete-undo so `undo-pin-delete!` can splice it back
 * into exactly the same spot, not just re-appended at the end.
 */
placesurfer.pin_ui.handlers.rows.delete_pin_BANG_ = (function placesurfer$pin_ui$handlers$rows$delete_pin_BANG_(id){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
if(placesurfer.pin_ui.handlers.rows.pin_item_exists_QMARK_(s,id)){
var table_rows = new cljs.core.Keyword(null,"pin-table-rows","pin-table-rows",729424278).cljs$core$IFn$_invoke$arity$1(s);
var was_selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s));
var next_id = ((was_selected_QMARK_)?placesurfer.pin_ui.pure.rows.selection_id_after_delete(table_rows,id):null);
var items = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (state){
var current_items = cljs.core.vec(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(state));
var deleted_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v))){
return i;
} else {
return null;
}
}),current_items));
var deleted_item = placesurfer.pin_ui.pure.rows.find_by_id(current_items,id);
var next_items = placesurfer.pin_ui.pure.rows.remove_item(current_items,id);
var next_item = (cljs.core.truth_(next_id)?placesurfer.pin_ui.pure.rows.find_by_id(next_items,next_id):null);
var next_form = (cljs.core.truth_(next_item)?placesurfer.pin_ui.pure.forms.item__GT_form(next_item):placesurfer.pin_ui.pure.forms.default_form());
cljs.core.reset_BANG_(items,next_items);

return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1((function (){var G__21462 = placesurfer.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-delete-undo","pin-delete-undo",-1970125853),(cljs.core.truth_(deleted_item)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"item","item",249373802),deleted_item,new cljs.core.Keyword(null,"index","index",-1531685915),deleted_index], null):null)], 0)));
if(was_selected_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__21462,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),next_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),next_form,new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),next_form,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null,new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159),false,new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),null,new cljs.core.Keyword(null,"pin-editor-snapshot","pin-editor-snapshot",-352879376),null,new cljs.core.Keyword(null,"pin-table-keyboard-focus?","pin-table-keyboard-focus?",-1363284319),true], 0));
} else {
return G__21462;
}
})());
}));

if(cljs.core.truth_(cljs.core.deref(items))){
placesurfer.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(items));

placesurfer.pin_ui.handlers.state.render_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
placesurfer.map_ui.interface$.close_all_popups_BANG_();
} else {
}

placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));

if(cljs.core.truth_((function (){var and__5023__auto__ = was_selected_QMARK_;
if(and__5023__auto__){
return next_id;
} else {
return and__5023__auto__;
}
})())){
var temp__5823__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(placesurfer.pin_ui.handlers.rows.list_items_for_page(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)),next_id);
if(cljs.core.truth_(temp__5823__auto__)){
var item = temp__5823__auto__;
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
placesurfer.pin_ui.handlers.rows.delete_selected_pin_BANG_ = (function placesurfer$pin_ui$handlers$rows$delete_selected_pin_BANG_(){
var temp__5823__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return placesurfer.pin_ui.handlers.rows.delete_pin_BANG_(id);
} else {
return null;
}
});
placesurfer.pin_ui.handlers.rows.undo_pin_delete_enabled_QMARK_ = (function placesurfer$pin_ui$handlers$rows$undo_pin_delete_enabled_QMARK_(state){
return cljs.core.boolean$(new cljs.core.Keyword(null,"pin-delete-undo","pin-delete-undo",-1970125853).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Re-insert the most recently deleted pin at the index `delete-pin!` removed
 * it from (see delete-pin!'s docstring).
 */
placesurfer.pin_ui.handlers.rows.undo_pin_item_delete_BANG_ = (function placesurfer$pin_ui$handlers$rows$undo_pin_item_delete_BANG_(p__21463){
var map__21464 = p__21463;
var map__21464__$1 = cljs.core.__destructure_map(map__21464);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464__$1,new cljs.core.Keyword(null,"item","item",249373802));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var items = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (state){
var current = cljs.core.vec(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY));
var idx = (function (){var x__5113__auto__ = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (function (){var or__5025__auto__ = index;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.count(current);
}
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5114__auto__ = cljs.core.count(current);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var next_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(current,(0),idx),item),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(current,idx));
cljs.core.reset_BANG_(items,next_items);

return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1(placesurfer.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"pin-delete-undo","pin-delete-undo",-1970125853),null], 0))));
}));

if(cljs.core.truth_(cljs.core.deref(items))){
placesurfer.pin_ui.handlers.rows.persist_items_BANG_(cljs.core.deref(items));

placesurfer.pin_ui.handlers.state.render_BANG_();

placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));

var temp__5823__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(placesurfer.pin_ui.handlers.rows.list_items_for_page(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
if(cljs.core.truth_(temp__5823__auto__)){
var restored = temp__5823__auto__;
return placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_(restored);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Counterpart to `pin-ui.handlers.hemnet-search/discard-result!`'s soft
 * delete - that handler never actually removes the row (just flags it
 * :deleted), so undo here is just clearing that flag again, re-selecting
 * the row so it's visible where it lands back in the list.
 */
placesurfer.pin_ui.handlers.rows.undo_search_result_discard_BANG_ = (function placesurfer$pin_ui$handlers$rows$undo_search_result_discard_BANG_(id){
var results = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (state){
var updated = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
} else {
return r;
}
}),new cljs.core.Keyword(null,"search-results","search-results",306464634).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY));
cljs.core.reset_BANG_(results,updated);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"search-results","search-results",306464634),updated,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hemnet-selected-id","hemnet-selected-id",-673719098),id,new cljs.core.Keyword(null,"pin-delete-undo","pin-delete-undo",-1970125853),null], 0));
}));

if(cljs.core.truth_(cljs.core.deref(results))){
placesurfer.pin_ui.pure.storage.save_search_results_BANG_(cljs.core.deref(results));

if(placesurfer.dropbox.interface$.connected_QMARK_()){
placesurfer.dropbox.interface$.push_BANG_();
} else {
}

placesurfer.pin_ui.handlers.state.render_BANG_();

return placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));
} else {
return null;
}
});
/**
 * Undo whichever row (a saved pin, or a soft-deleted Hemnet/Booli/Notar
 * search result) was most recently removed from the pin-page list - a
 * single shared undo slot behind the toolbar's one undo button, not a full
 * history: using it, or deleting something else afterwards, clears it.
 */
placesurfer.pin_ui.handlers.rows.undo_pin_delete_BANG_ = (function placesurfer$pin_ui$handlers$rows$undo_pin_delete_BANG_(){
var temp__5823__auto__ = new cljs.core.Keyword(null,"pin-delete-undo","pin-delete-undo",-1970125853).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5823__auto__)){
var undo = temp__5823__auto__;
var G__21465 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(undo);
var G__21465__$1 = (((G__21465 instanceof cljs.core.Keyword))?G__21465.fqn:null);
switch (G__21465__$1) {
case "pin":
return placesurfer.pin_ui.handlers.rows.undo_pin_item_delete_BANG_(undo);

break;
case "search-result":
return placesurfer.pin_ui.handlers.rows.undo_search_result_discard_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(undo));

break;
default:
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
 * Reorder a pin within its star group; updates :stars-order in state and persists it.
 */
placesurfer.pin_ui.handlers.rows.reorder_stars_row_BANG_ = (function placesurfer$pin_ui$handlers$rows$reorder_stars_row_BANG_(stars_val,drag_id,to_index){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var all_in_group = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21466_SHARP_){
return (((!(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(p1__21466_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"ranking","ranking",191056920).cljs$core$IFn$_invoke$arity$1(p1__21466_SHARP_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(p1__21466_SHARP_);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "0-stars.png";
}
}
})(),stars_val)));
}),new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s)));
var current_order = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"stars-order","stars-order",-1078074770).cljs$core$IFn$_invoke$arity$1(s),stars_val,cljs.core.PersistentVector.EMPTY);
var order_set = cljs.core.set(current_order);
var ordered = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(order_set,all_in_group),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(order_set,all_in_group)));
var from_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,drag_id)){
return i;
} else {
return null;
}
}),ordered));
if((((!((from_index == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_index,to_index)))){
var without = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ordered,(0),from_index),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ordered,(from_index + (1)))));
var vec__21467 = cljs.core.split_at(to_index,without);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21467,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21467,(1),null);
var new_order = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_id], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([after], 0)));
return placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (state){
var next_stars_order = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"stars-order","stars-order",-1078074770).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),stars_val,new_order);
placesurfer.pin_ui.pure.storage.save_stars_order_BANG_(next_stars_order);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"stars-order","stars-order",-1078074770),next_stars_order);
}));
} else {
return null;
}
});
/**
 * Move a pin to a (possibly different) star group at local-to-index within that group.
 * Updates :stars on the pin if the group changed, updates :stars-order, persists both.
 */
placesurfer.pin_ui.handlers.rows.reorder_stars_pin_BANG_ = (function placesurfer$pin_ui$handlers$rows$reorder_stars_pin_BANG_(drag_id,to_stars_val,local_to_index){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var drag_item = placesurfer.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),drag_id);
var from_stars_val = placesurfer.pin_ui.pure.forms.normalize_stars((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"ranking","ranking",191056920).cljs$core$IFn$_invoke$arity$1(drag_item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(drag_item);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "0-stars.png";
}
}
})());
var stars_order = new cljs.core.Keyword(null,"stars-order","stars-order",-1078074770).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(drag_item)){
var dest_ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21470_SHARP_){
return (((!(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(p1__21470_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.pure.forms.normalize_stars((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"ranking","ranking",191056920).cljs$core$IFn$_invoke$arity$1(p1__21470_SHARP_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(p1__21470_SHARP_);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "0-stars.png";
}
}
})()),to_stars_val)));
}),new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s)));
var cur_dest_order = cljs.core.get.cljs$core$IFn$_invoke$arity$3(stars_order,to_stars_val,cljs.core.PersistentVector.EMPTY);
var dest_set = cljs.core.set(cur_dest_order);
var ordered_dest = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dest_set,dest_ids),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(dest_set,dest_ids)));
var ordered_dest_without = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([drag_id]),ordered_dest));
var vec__21472 = cljs.core.split_at(local_to_index,ordered_dest_without);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21472,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21472,(1),null);
var new_dest_order = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_id], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([after], 0)));
var new_src_order = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([drag_id]),cljs.core.get.cljs$core$IFn$_invoke$arity$3(stars_order,from_stars_val,cljs.core.PersistentVector.EMPTY)));
var cross_group_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_stars_val,to_stars_val);
var next_stars_order = (function (){var G__21475 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stars_order,to_stars_val,new_dest_order);
if(cross_group_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21475,from_stars_val,new_src_order);
} else {
return G__21475;
}
})();
var next_items = ((cross_group_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21471_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__21471_SHARP_),drag_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21471_SHARP_,new cljs.core.Keyword(null,"ranking","ranking",191056920),to_stars_val);
} else {
return p1__21471_SHARP_;
}
}),new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s)):null);
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (state){
placesurfer.pin_ui.pure.storage.save_stars_order_BANG_(next_stars_order);

var G__21476 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"stars-order","stars-order",-1078074770),next_stars_order);
var G__21476__$1 = ((cross_group_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21476,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),next_items):G__21476);
if(((cross_group_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_id,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(state))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__21476__$1,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),cljs.core.assoc,new cljs.core.Keyword(null,"ranking","ranking",191056920),to_stars_val);
} else {
return G__21476__$1;
}
}));

if(cross_group_QMARK_){
return placesurfer.pin_ui.handlers.rows.persist_items_BANG_(next_items);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Toggle or set the column sort for the pin list.
 * Same column: toggles direction. New column: desc for :stars, asc otherwise.
 */
placesurfer.pin_ui.handlers.rows.set_pin_list_sort_BANG_ = (function placesurfer$pin_ui$handlers$rows$set_pin_list_sort_BANG_(col){
return placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (state){
var map__21477 = new cljs.core.Keyword(null,"pin-list-sort","pin-list-sort",-560539555).cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"ranking","ranking",191056920),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"desc","desc",2093485764)], null));
var map__21477__$1 = cljs.core.__destructure_map(map__21477);
var current = map__21477__$1;
var col__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21477__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21477__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var same_col_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col__$1,new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(current));
var new_dir = ((same_col_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desc","desc",2093485764),dir))?new cljs.core.Keyword(null,"asc","asc",356854569):new cljs.core.Keyword(null,"desc","desc",2093485764)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ranking","ranking",191056920),col__$1))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"pin-list-sort","pin-list-sort",-560539555),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col","col",-1959363084),col__$1,new cljs.core.Keyword(null,"dir","dir",1734754661),new_dir], null));
}));
});
/**
 * Move a visible pin row to just before `target-id` (the id of the row it
 * was dropped on, from pure.drag's finish-row-drag!), falling back to the
 * raw `to-index` DOM position when that can't be resolved - needed because
 * `to-index` alone isn't reliable here: it's a count of rendered rows, which
 * (sorted/grouped for display, separators rendered as headers rather than
 * rows - see pin-ui.pure.list-panel/pin-sorted-table's pin-only filter) don't line up 1:1 with
 * :pin-items' own storage order that the reorder itself operates on.
 */
placesurfer.pin_ui.handlers.rows.reorder_pin_row_BANG_ = (function placesurfer$pin_ui$handlers$rows$reorder_pin_row_BANG_(var_args){
var G__21479 = arguments.length;
switch (G__21479) {
case 2:
return placesurfer.pin_ui.handlers.rows.reorder_pin_row_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return placesurfer.pin_ui.handlers.rows.reorder_pin_row_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.pin_ui.handlers.rows.reorder_pin_row_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (drag_id,to_index){
return placesurfer.pin_ui.handlers.rows.reorder_pin_row_BANG_.cljs$core$IFn$_invoke$arity$3(drag_id,to_index,null);
}));

(placesurfer.pin_ui.handlers.rows.reorder_pin_row_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (drag_id,to_index,target_id){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var drag_item = placesurfer.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),drag_id);
if(cljs.core.truth_((function (){var and__5023__auto__ = drag_item;
if(cljs.core.truth_(and__5023__auto__)){
return (!(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(drag_item)));
} else {
return and__5023__auto__;
}
})())){
var next_items = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s)))?placesurfer.pin_ui.pure.rows.reorder_pin_page_items.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),drag_id,to_index,target_id):placesurfer.pin_ui.pure.rows.reorder_visible_pin.cljs$core$IFn$_invoke$arity$6(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s),placesurfer.pin_ui.pure.rows.country_slug_for_view(s),drag_id,to_index,target_id));
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

var temp__5823__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(next_items,drag_id);
if(cljs.core.truth_(temp__5823__auto__)){
var item = temp__5823__auto__;
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
}));

(placesurfer.pin_ui.handlers.rows.reorder_pin_row_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=placesurfer.pin_ui.handlers.rows.js.map
