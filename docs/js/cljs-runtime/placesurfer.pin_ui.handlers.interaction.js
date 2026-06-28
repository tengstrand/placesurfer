goog.provide('placesurfer.pin_ui.handlers.interaction');
placesurfer.pin_ui.handlers.interaction.update_pins_mode_QMARK_ = (function placesurfer$pin_ui$handlers$interaction$update_pins_mode_QMARK_(s){
return placesurfer.pin_ui.pure.update_context.update_pins_mode_QMARK_(s);
});
placesurfer.pin_ui.handlers.interaction.pin_browse_mode_QMARK_ = (function placesurfer$pin_ui$handlers$interaction$pin_browse_mode_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s));
});
placesurfer.pin_ui.handlers.interaction.selected_row_index = (function placesurfer$pin_ui$handlers$interaction$selected_row_index(table_rows,selected_id){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__56558){
var map__56559 = p__56558;
var map__56559__$1 = cljs.core.__destructure_map(map__56559);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56559__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,selected_id)){
return idx;
} else {
return null;
}
}),table_rows));
});
placesurfer.pin_ui.handlers.interaction.navigate_pin_row_BANG_ = (function placesurfer$pin_ui$handlers$interaction$navigate_pin_row_BANG_(target_id,editor_open_QMARK_,separator_open_QMARK_){
if(cljs.core.truth_((function (){var and__5023__auto__ = target_id;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target_id,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)));
} else {
return and__5023__auto__;
}
})())){
if(placesurfer.pin_ui.handlers.interaction.update_pins_mode_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
placesurfer.pin_ui.handlers.editor.maybe_save_inline_pin_before_switch_BANG_();
} else {
}

if(cljs.core.truth_(editor_open_QMARK_)){
placesurfer.pin_ui.handlers.editor.cancel_pin_editor_BANG_();
} else {
}

if(cljs.core.truth_(separator_open_QMARK_)){
placesurfer.pin_ui.handlers.separator.cancel_pin_separator_overlay_BANG_();
} else {
}

if(placesurfer.pin_ui.handlers.interaction.pin_browse_mode_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
return placesurfer.pin_ui.handlers.rows.select_display_row_BANG_(target_id);
} else {
placesurfer.pin_ui.handlers.rows.select_pin_row_BANG_(target_id);

if(placesurfer.pin_ui.handlers.interaction.update_pins_mode_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
placesurfer.pin_ui.handlers.editor.load_pin_into_inline_editor_BANG_(target_id);
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = editor_open_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!(placesurfer.pin_ui.handlers.interaction.update_pins_mode_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))));
} else {
return and__5023__auto__;
}
})())){
return placesurfer.pin_ui.handlers.editor.open_pin_editor_edit_BANG_();
} else {
return null;
}
}
} else {
return null;
}
});
placesurfer.pin_ui.handlers.interaction.set_pin_table_keyboard_focus_BANG_ = (function placesurfer$pin_ui$handlers$interaction$set_pin_table_keyboard_focus_BANG_(){
return placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (p1__56560_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56560_SHARP_,new cljs.core.Keyword(null,"pin-table-keyboard-focus?","pin-table-keyboard-focus?",-1363284319),true);
}));
});
placesurfer.pin_ui.handlers.interaction.clear_pin_table_keyboard_focus_BANG_ = (function placesurfer$pin_ui$handlers$interaction$clear_pin_table_keyboard_focus_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pin-table-keyboard-focus?","pin-table-keyboard-focus?",-1363284319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
return placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (p1__56561_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56561_SHARP_,new cljs.core.Keyword(null,"pin-table-keyboard-focus?","pin-table-keyboard-focus?",-1363284319),false);
}));
} else {
return null;
}
});
placesurfer.pin_ui.handlers.interaction.focus_selected_pin_on_map_BANG_ = (function placesurfer$pin_ui$handlers$interaction$focus_selected_pin_on_map_BANG_(item){
if(cljs.core.truth_(item)){
return placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_(item);
} else {
return null;
}
});
placesurfer.pin_ui.handlers.interaction.numeric_coord = (function placesurfer$pin_ui$handlers$interaction$numeric_coord(v){
if(typeof v === 'number'){
return v;
} else {
if(typeof v === 'string'){
return placesurfer.pin_ui.pure.coords.parse_decimal(v);
} else {
return null;

}
}
});
placesurfer.pin_ui.handlers.interaction.explicit_marker_topic = (function placesurfer$pin_ui$handlers$interaction$explicit_marker_topic(position){
return cljs.core.some(position,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154),new cljs.core.Keyword(null,"markerTopic","markerTopic",-2042395107),new cljs.core.Keyword(null,"marker_topic","marker_topic",-2142395731)], null));
});
/**
 * Normalize map marker click data for pin detection.
 */
placesurfer.pin_ui.handlers.interaction.normalize_map_click_position = (function placesurfer$pin_ui$handlers$interaction$normalize_map_click_position(raw_position){
var position = ((cljs.core.map_QMARK_(raw_position))?raw_position:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(raw_position,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
var lon = placesurfer.pin_ui.handlers.interaction.numeric_coord(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position));
var lat = placesurfer.pin_ui.handlers.interaction.numeric_coord(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position));
var G__56562 = position;
var G__56562__$1 = (cljs.core.truth_(lon)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56562,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon):G__56562);
if(cljs.core.truth_(lat)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56562__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat);
} else {
return G__56562__$1;
}
});
placesurfer.pin_ui.handlers.interaction.find_pin_by_id = (function placesurfer$pin_ui$handlers$interaction$find_pin_by_id(items,id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56563_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56563_SHARP_)));
}),items));
});
placesurfer.pin_ui.handlers.interaction.pin_item_for_map_position = (function placesurfer$pin_ui$handlers$interaction$pin_item_for_map_position(position,items){
var or__5025__auto__ = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return placesurfer.pin_ui.handlers.interaction.find_pin_by_id(items,id);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(temp__5825__auto__)){
var lon = temp__5825__auto__;
var temp__5825__auto____$1 = new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(temp__5825__auto____$1)){
var lat = temp__5825__auto____$1;
return placesurfer.pin_ui.pure.rows.find_by_coords(items,lon,lat);
} else {
return null;
}
} else {
return null;
}
}
});
placesurfer.pin_ui.handlers.interaction.pin_marker_position_QMARK_ = (function placesurfer$pin_ui$handlers$interaction$pin_marker_position_QMARK_(position){
var topic = placesurfer.pin_ui.handlers.interaction.explicit_marker_topic(position);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),(((topic instanceof cljs.core.Keyword))?topic:(function (){var G__56564 = topic;
var G__56564__$1 = (((G__56564 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56564));
var G__56564__$2 = (((G__56564__$1 == null))?null:cljs.core.not_empty(G__56564__$1));
if((G__56564__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__56564__$2);
}
})()));
});
/**
 * Select a saved pin from a map marker click without leaving the current page.
 */
placesurfer.pin_ui.handlers.interaction.pick_pin_from_map_BANG_ = (function placesurfer$pin_ui$handlers$interaction$pick_pin_from_map_BANG_(raw_position){
var position = placesurfer.pin_ui.handlers.interaction.normalize_map_click_position(raw_position);
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var items = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s);
var item = (function (){var or__5025__auto__ = (function (){var temp__5825__auto__ = placesurfer.pin_ui.handlers.interaction.pin_item_for_map_position(position,items);
if(cljs.core.truth_(temp__5825__auto__)){
var match = temp__5825__auto__;
if(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(match)){
return null;
} else {
return match;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.pin_ui.handlers.map.main_map_pin_for_click(s,raw_position);
}
})();
if(cljs.core.truth_((function (){var or__5025__auto__ = item;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((placesurfer.pin_ui.handlers.interaction.pin_marker_position_QMARK_(position)) || (placesurfer.pin_ui.handlers.map.saved_pin_on_main_map_QMARK_(s,raw_position)));
}
})())){
placesurfer.map_ui.interface$.close_all_popups_BANG_();

if(cljs.core.truth_(item)){
var id_56567 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var already_selected_QMARK__56568 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_56567,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s));
if(already_selected_QMARK__56568){
} else {
placesurfer.pin_ui.handlers.rows.select_pin_row_BANG_(id_56567);

if(placesurfer.pin_ui.handlers.interaction.update_pins_mode_QMARK_(s)){
placesurfer.pin_ui.handlers.editor.load_pin_into_inline_editor_BANG_(id_56567);
} else {
}
}

placesurfer.pin_ui.handlers.interaction.focus_selected_pin_on_map_BANG_(item);
} else {
}

if(((cljs.core.not(item)) && (((placesurfer.pin_ui.handlers.interaction.pin_marker_position_QMARK_(position)) || (placesurfer.pin_ui.handlers.map.saved_pin_on_main_map_QMARK_(s,raw_position)))))){
return placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_(position);
} else {
return null;
}
} else {
return null;
}
});
/**
 * True when `position` refers to a saved pin (marker topic, id, or coordinates).
 */
placesurfer.pin_ui.handlers.interaction.pin_map_position_QMARK_ = (function placesurfer$pin_ui$handlers$interaction$pin_map_position_QMARK_(raw_position){
var position = placesurfer.pin_ui.handlers.interaction.normalize_map_click_position(raw_position);
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var or__5025__auto__ = placesurfer.pin_ui.handlers.interaction.pin_marker_position_QMARK_(position);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.pin_ui.handlers.map.saved_pin_on_main_map_QMARK_(s,raw_position);
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
var temp__5825__auto__ = placesurfer.pin_ui.handlers.interaction.pin_item_for_map_position(position,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
return (!(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)));
} else {
return null;
}
}
}
});
placesurfer.pin_ui.handlers.interaction.toggle_pin_preview_BANG_ = (function placesurfer$pin_ui$handlers$interaction$toggle_pin_preview_BANG_(){
return placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (p1__56565_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__56565_SHARP_,new cljs.core.Keyword(null,"pin-show-preview?","pin-show-preview?",837912811),cljs.core.not);
}));
});
placesurfer.pin_ui.handlers.interaction.toggle_pin_topics_on_map_BANG_ = (function placesurfer$pin_ui$handlers$interaction$toggle_pin_topics_on_map_BANG_(){
placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (p1__56566_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__56566_SHARP_,new cljs.core.Keyword(null,"pin-show-topics-on-map?","pin-show-topics-on-map?",744248117),cljs.core.not);
}));

if(placesurfer.pin_ui.handlers.interaction.pin_browse_mode_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
return placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));
} else {
return null;
}
});
placesurfer.pin_ui.handlers.interaction.open_selected_pin_row_BANG_ = (function placesurfer$pin_ui$handlers$interaction$open_selected_pin_row_BANG_(){
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)));
} else {
return and__5023__auto__;
}
})())){
return placesurfer.pin_ui.handlers.editor.open_pin_editor_edit_BANG_();
} else {
return null;
}
});
placesurfer.pin_ui.handlers.interaction.pin_row_click_BANG_ = (function placesurfer$pin_ui$handlers$interaction$pin_row_click_BANG_(id){
placesurfer.pin_ui.handlers.interaction.clear_pin_table_keyboard_focus_BANG_();

var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var item = placesurfer.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),id);
var separator_QMARK_ = (function (){var and__5023__auto__ = item;
if(cljs.core.truth_(and__5023__auto__)){
return placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item);
} else {
return and__5023__auto__;
}
})();
var already_selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s));
var editor_open_QMARK_ = new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159).cljs$core$IFn$_invoke$arity$1(s);
var separator_open_QMARK_ = new cljs.core.Keyword(null,"pin-separator-overlay-open?","pin-separator-overlay-open?",-1998521386).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(separator_QMARK_)){
if(cljs.core.truth_(editor_open_QMARK_)){
placesurfer.pin_ui.handlers.editor.cancel_pin_editor_BANG_();
} else {
}

if(cljs.core.truth_(separator_open_QMARK_)){
return placesurfer.pin_ui.handlers.separator.cancel_pin_separator_overlay_BANG_();
} else {
return null;
}
} else {
if(placesurfer.pin_ui.handlers.interaction.pin_browse_mode_QMARK_(s)){
var temp__5825__auto__ = placesurfer.pin_ui.handlers.rows.find_display_item(s,id);
if(cljs.core.truth_(temp__5825__auto__)){
var display_item = temp__5825__auto__;
if(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(display_item)){
return null;
} else {
if(already_selected_QMARK_){
return placesurfer.pin_ui.handlers.interaction.focus_selected_pin_on_map_BANG_(display_item);
} else {
return placesurfer.pin_ui.handlers.rows.select_display_row_BANG_(id);
}
}
} else {
return null;
}
} else {
if(placesurfer.pin_ui.handlers.interaction.update_pins_mode_QMARK_(s)){
if(cljs.core.truth_(separator_QMARK_)){
return null;
} else {
if(cljs.core.truth_(separator_open_QMARK_)){
placesurfer.pin_ui.handlers.separator.cancel_pin_separator_overlay_BANG_();
} else {
}

if(already_selected_QMARK_){
} else {
placesurfer.pin_ui.handlers.editor.maybe_save_inline_pin_before_switch_BANG_();

placesurfer.pin_ui.handlers.rows.select_pin_row_BANG_(id);

placesurfer.pin_ui.handlers.editor.load_pin_into_inline_editor_BANG_(id);
}

var temp__5825__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),id);
if(cljs.core.truth_(temp__5825__auto__)){
var item__$1 = temp__5825__auto__;
return placesurfer.pin_ui.handlers.interaction.focus_selected_pin_on_map_BANG_(item__$1);
} else {
return null;
}
}
} else {
if(already_selected_QMARK_){
if(cljs.core.truth_(editor_open_QMARK_)){
return placesurfer.pin_ui.handlers.editor.cancel_pin_editor_BANG_();
} else {
return placesurfer.pin_ui.handlers.editor.open_pin_editor_edit_BANG_();
}
} else {
if(cljs.core.truth_(editor_open_QMARK_)){
placesurfer.pin_ui.handlers.editor.cancel_pin_editor_BANG_();
} else {
}

if(cljs.core.truth_(separator_open_QMARK_)){
placesurfer.pin_ui.handlers.separator.cancel_pin_separator_overlay_BANG_();
} else {
}

return placesurfer.pin_ui.handlers.rows.select_pin_row_BANG_(id);

}
}
}
}
});
placesurfer.pin_ui.handlers.interaction.select_adjacent_pin_row_BANG_ = (function placesurfer$pin_ui$handlers$interaction$select_adjacent_pin_row_BANG_(delta){
if(typeof delta === 'number'){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var table_rows = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s)))?placesurfer.pin_ui.handlers.rows.table_rows_for_state(s):new cljs.core.Keyword(null,"pin-table-rows","pin-table-rows",729424278).cljs$core$IFn$_invoke$arity$1(s));
var n = cljs.core.count(table_rows);
if((n > (0))){
var selected_id = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s);
var editor_open_QMARK_ = new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159).cljs$core$IFn$_invoke$arity$1(s);
var separator_open_QMARK_ = new cljs.core.Keyword(null,"pin-separator-overlay-open?","pin-separator-overlay-open?",-1998521386).cljs$core$IFn$_invoke$arity$1(s);
var current_idx = (function (){var or__5025__auto__ = placesurfer.pin_ui.handlers.interaction.selected_row_index(table_rows,selected_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if((delta > (0))){
return (-1);
} else {
return n;
}
}
})();
var next_idx = (function (){var x__5113__auto__ = (function (){var x__5110__auto__ = (current_idx + delta);
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5114__auto__ = (n - (1));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var next_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table_rows,next_idx));
placesurfer.pin_ui.handlers.interaction.navigate_pin_row_BANG_(next_id,editor_open_QMARK_,separator_open_QMARK_);

return placesurfer.pin_ui.handlers.interaction.set_pin_table_keyboard_focus_BANG_();
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.pin_ui.handlers.interaction.js.map
