goog.provide('placesurfer.pin_ui.pure.rows');
placesurfer.pin_ui.pure.rows.separator_item_QMARK_ = (function placesurfer$pin_ui$pure$rows$separator_item_QMARK_(item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(item));
});
placesurfer.pin_ui.pure.rows.topic_position_item_QMARK_ = (function placesurfer$pin_ui$pure$rows$topic_position_item_QMARK_(item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topic-position","topic-position",-1919966565),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(item));
});
placesurfer.pin_ui.pure.rows.synthetic_id_prefix = "__pin-page-";
/**
 * True for pin-page separators and topic rows that are not persisted pins.
 */
placesurfer.pin_ui.pure.rows.synthetic_display_item_QMARK_ = (function placesurfer$pin_ui$pure$rows$synthetic_display_item_QMARK_(item){
return ((placesurfer.pin_ui.pure.rows.topic_position_item_QMARK_(item)) || (((placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)) && (clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),placesurfer.pin_ui.pure.rows.synthetic_id_prefix)))));
});
placesurfer.pin_ui.pure.rows.item_in_country_QMARK_ = (function placesurfer$pin_ui$pure$rows$item_in_country_QMARK_(item,countries,country_slug){
var map__65869 = item;
var map__65869__$1 = cljs.core.__destructure_map(map__65869);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65869__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65869__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
if(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)){
return false;
} else {
if((!(((typeof longitude === 'number') && (typeof latitude === 'number'))))){
return false;
} else {
if(((cljs.core.not(country_slug)) || (cljs.core.not(cljs.core.seq(countries))))){
return true;
} else {
var temp__5823__auto__ = placesurfer.country.interface$.country_bounds_for_slug(country_slug,countries);
if(cljs.core.truth_(temp__5823__auto__)){
var map__65870 = temp__5823__auto__;
var map__65870__$1 = cljs.core.__destructure_map(map__65870);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65870__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65870__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65870__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65870__$1,new cljs.core.Keyword(null,"north","north",651323902));
return (((((west <= longitude)) && ((longitude <= east)))) && ((((south <= latitude)) && ((latitude <= north)))));
} else {
return true;
}

}
}
}
});
/**
 * Pins whose coordinates fall within `country-slug` bounds.
 */
placesurfer.pin_ui.pure.rows.pins_for_country = (function placesurfer$pin_ui$pure$rows$pins_for_country(items,countries,country_slug){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65871_SHARP_){
return (((!(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(p1__65871_SHARP_)))) && (placesurfer.pin_ui.pure.rows.item_in_country_QMARK_(p1__65871_SHARP_,countries,country_slug)));
}),items));
});
/**
 * Country slug used to filter pins in the list and on the edit map.
 */
placesurfer.pin_ui.pure.rows.country_slug_for_view = (function placesurfer$pin_ui$pure$rows$country_slug_for_view(s){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))) && (placesurfer.pin_ui.pure.update_context.update_pins_mode_QMARK_(s)))){
var or__5025__auto__ = placesurfer.country.interface$.slug_for_iso(new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(s);
}
} else {
return new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(s);
}
});
placesurfer.pin_ui.pure.rows.pin_visible_in_country_QMARK_ = (function placesurfer$pin_ui$pure$rows$pin_visible_in_country_QMARK_(item,countries,country_slug){
return (((!(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)))) && (placesurfer.pin_ui.pure.rows.item_in_country_QMARK_(item,countries,country_slug)));
});
/**
 * Pins in `country-slug` plus separators adjacent to at least one such pin.
 */
placesurfer.pin_ui.pure.rows.visible_list_items = (function placesurfer$pin_ui$pure$rows$visible_list_items(items,countries,country_slug){
var items_STAR_ = cljs.core.vec(items);
var pin_visible_QMARK_ = (function (p1__65875_SHARP_){
return placesurfer.pin_ui.pure.rows.pin_visible_in_country_QMARK_(p1__65875_SHARP_,countries,country_slug);
});
return cljs.core.vec(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
if(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)){
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.some(pin_visible_QMARK_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(items_STAR_,(0),idx));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.some(pin_visible_QMARK_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(items_STAR_,(idx + (1))));
}
})())){
return item;
} else {
return null;
}
} else {
if(pin_visible_QMARK_(item)){
return item;
} else {
return null;
}
}
}),items_STAR_));
});
/**
 * All pins and separators in storage order (no country filter).
 */
placesurfer.pin_ui.pure.rows.all_list_items = (function placesurfer$pin_ui$pure$rows$all_list_items(items){
return cljs.core.vec((function (){var or__5025__auto__ = items;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
});
/**
 * Saved pins and groups for the browse pin page (no topic positions).
 */
placesurfer.pin_ui.pure.rows.pin_page_list_items = (function placesurfer$pin_ui$pure$rows$pin_page_list_items(items){
return placesurfer.pin_ui.pure.rows.all_list_items(items);
});
placesurfer.pin_ui.pure.rows.pin_sort_key = (function placesurfer$pin_ui$pure$rows$pin_sort_key(p__65879){
var map__65880 = p__65879;
var map__65880__$1 = cljs.core.__destructure_map(map__65880);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65880__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((clojure.string.blank_QMARK_(name))?(1):(0)),clojure.string.lower_case((function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())], null);
});
/**
 * Return pins sorted alphabetically by name (case-insensitive).
 */
placesurfer.pin_ui.pure.rows.sort_pins = (function placesurfer$pin_ui$pure$rows$sort_pins(items){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.pure.rows.pin_sort_key,items));
});
/**
 * After removing `deleted-id` from `table-rows`, return the id to select next.
 *   Prefers the row below; falls back to the row above for the last item.
 *   Returns nil only when there is no other row.
 */
placesurfer.pin_ui.pure.rows.selection_id_after_delete = (function placesurfer$pin_ui$pure$rows$selection_id_after_delete(table_rows,deleted_id){
if(cljs.core.seq(table_rows)){
var idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__65881){
var map__65882 = p__65881;
var map__65882__$1 = cljs.core.__destructure_map(map__65882);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,deleted_id)){
return i;
} else {
return null;
}
}),table_rows));
var n = cljs.core.count(table_rows);
if((!((idx == null)))){
if((idx < (n - (1)))){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table_rows,(idx + (1))));
} else {
if((idx > (0))){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table_rows,(idx - (1))));
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});
placesurfer.pin_ui.pure.rows.table_rows = (function placesurfer$pin_ui$pure$rows$table_rows(items,selected_id){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),new cljs.core.Keyword(null,"kind","kind",-717265803),((placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item))?new cljs.core.Keyword(null,"separator","separator",-1628749125):((placesurfer.pin_ui.pure.rows.topic_position_item_QMARK_(item))?new cljs.core.Keyword(null,"topic-position","topic-position",-1919966565):new cljs.core.Keyword(null,"pin","pin",-2111774834)
)),new cljs.core.Keyword(null,"values","values",372645556),item], null);
}),cljs.core.vec(items));
});
placesurfer.pin_ui.pure.rows.make_separator = (function placesurfer$pin_ui$pure$rows$make_separator(id,label){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())], null);
});
placesurfer.pin_ui.pure.rows.last_item_separator_QMARK_ = (function placesurfer$pin_ui$pure$rows$last_item_separator_QMARK_(items){
if(cljs.core.seq(items)){
return placesurfer.pin_ui.pure.rows.separator_item_QMARK_(cljs.core.last(items));
} else {
return null;
}
});
placesurfer.pin_ui.pure.rows.synthetic_separator_id = (function placesurfer$pin_ui$pure$rows$synthetic_separator_id(suffix){
return [placesurfer.pin_ui.pure.rows.synthetic_id_prefix,"sep-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
});
placesurfer.pin_ui.pure.rows.topic_position_id = (function placesurfer$pin_ui$pure$rows$topic_position_id(topic,idx){
return [placesurfer.pin_ui.pure.rows.synthetic_id_prefix,"topic-",cljs.core.name(topic),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('');
});
placesurfer.pin_ui.pure.rows.position_address = (function placesurfer$pin_ui$pure$rows$position_address(position){
return clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "";
}
}
})()));
});
placesurfer.pin_ui.pure.rows.position__GT_topic_item = (function placesurfer$pin_ui$pure$rows$position__GT_topic_item(position,idx,topic,marker_icon_url){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"location","location",1815599388)],[new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(position),marker_icon_url,placesurfer.pin_ui.pure.rows.position_address(position),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position),topic,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(position),placesurfer.pin_ui.pure.rows.topic_position_id(topic,idx),new cljs.core.Keyword(null,"topic-position","topic-position",-1919966565),new cljs.core.Keyword(null,"homepage","homepage",-1646828249).cljs$core$IFn$_invoke$arity$1(position),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(position)]);
});
placesurfer.pin_ui.pure.rows.positions_for_topic = (function placesurfer$pin_ui$pure$rows$positions_for_topic(positions,topic){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65883_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__65883_SHARP_));
}),positions));
});
placesurfer.pin_ui.pure.rows.sorted_active_topics = (function placesurfer$pin_ui$pure$rows$sorted_active_topics(active_topics,topic_label_fn){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topic","topic",-1960480691),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"label","label",1718410804),(function (p1__65884_SHARP_,p2__65885_SHARP_){
return cljs.core.compare(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65884_SHARP_)),clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__65885_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (topic){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"label","label",1718410804),(topic_label_fn.cljs$core$IFn$_invoke$arity$1 ? topic_label_fn.cljs$core$IFn$_invoke$arity$1(topic) : topic_label_fn.call(null,topic))], null);
}),cljs.core.seq(active_topics))));
});
/**
 * Pin list items for the dedicated pin page: saved pins, optional Pins separator,
 *   then each active topic's positions followed by a topic-name separator.
 */
placesurfer.pin_ui.pure.rows.pin_page_display_items = (function placesurfer$pin_ui$pure$rows$pin_page_display_items(p__65886){
var map__65887 = p__65886;
var map__65887__$1 = cljs.core.__destructure_map(map__65887);
var pin_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65887__$1,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100));
var active_topics = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65887__$1,new cljs.core.Keyword(null,"active-topics","active-topics",1278012558),cljs.core.PersistentHashSet.EMPTY);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65887__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY);
var pins_section_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65887__$1,new cljs.core.Keyword(null,"pins-section-label","pins-section-label",1812353668));
var topic_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65887__$1,new cljs.core.Keyword(null,"topic-label-fn","topic-label-fn",-15666023));
var topic_marker_url_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65887__$1,new cljs.core.Keyword(null,"topic-marker-url-fn","topic-marker-url-fn",-1547313478));
var base = placesurfer.pin_ui.pure.rows.all_list_items(pin_items);
var with_pins_separator = (cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.empty_QMARK_(base);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return placesurfer.pin_ui.pure.rows.last_item_separator_QMARK_(base);
}
})())?base:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base,placesurfer.pin_ui.pure.rows.make_separator(placesurfer.pin_ui.pure.rows.synthetic_separator_id("pins"),pins_section_label)));
var active = placesurfer.pin_ui.pure.rows.sorted_active_topics(active_topics,topic_label_fn);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,topic){
var topic_positions = placesurfer.pin_ui.pure.rows.positions_for_topic(positions,topic);
var label = (topic_label_fn.cljs$core$IFn$_invoke$arity$1 ? topic_label_fn.cljs$core$IFn$_invoke$arity$1(topic) : topic_label_fn.call(null,topic));
var marker_url = (topic_marker_url_fn.cljs$core$IFn$_invoke$arity$1 ? topic_marker_url_fn.cljs$core$IFn$_invoke$arity$1(topic) : topic_marker_url_fn.call(null,topic));
var topic_items = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__65889){
var vec__65890 = p__65889;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65890,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65890,(1),null);
return placesurfer.pin_ui.pure.rows.position__GT_topic_item(pos,idx,topic,marker_url);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,topic_positions));
if(cljs.core.seq(topic_items)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,topic_items),placesurfer.pin_ui.pure.rows.make_separator(placesurfer.pin_ui.pure.rows.synthetic_separator_id(cljs.core.name(topic)),label));
} else {
return acc;
}
}),with_pins_separator,active);
});
placesurfer.pin_ui.pure.rows.visible_id_set = (function placesurfer$pin_ui$pure$rows$visible_id_set(items){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),items));
});
/**
 * Rebuild `all-items` keeping non-visible items in place while
 * replacing visible items with `reordered-visible` in list order.
 */
placesurfer.pin_ui.pure.rows.merge_visible_order = (function placesurfer$pin_ui$pure$rows$merge_visible_order(all_items,reordered_visible){
var visible_ids = placesurfer.pin_ui.pure.rows.visible_id_set(reordered_visible);
var reordered = cljs.core.vec(reordered_visible);
var remaining = cljs.core.seq(all_items);
var result = cljs.core.PersistentVector.EMPTY;
var visible_queue = reordered;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return cljs.core.vec(result);
} else {
var item = cljs.core.first(remaining);
if(cljs.core.truth_((function (){var G__65895 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return (visible_ids.cljs$core$IFn$_invoke$arity$1 ? visible_ids.cljs$core$IFn$_invoke$arity$1(G__65895) : visible_ids.call(null,G__65895));
})())){
var G__65991 = cljs.core.rest(remaining);
var G__65992 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.first(visible_queue));
var G__65993 = cljs.core.rest(visible_queue);
remaining = G__65991;
result = G__65992;
visible_queue = G__65993;
continue;
} else {
var G__65994 = cljs.core.rest(remaining);
var G__65995 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,item);
var G__65996 = visible_queue;
remaining = G__65994;
result = G__65995;
visible_queue = G__65996;
continue;
}
}
break;
}
});
/**
 * Move the item at `from-index` to `to-index` in `items`.
 */
placesurfer.pin_ui.pure.rows.move_item_to_index = (function placesurfer$pin_ui$pure$rows$move_item_to_index(items,from_index,to_index){
if(((((((0) <= from_index)) && ((from_index <= (cljs.core.count(items) - (1)))))) && (((((((0) <= to_index)) && ((to_index <= cljs.core.count(items))))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_index,to_index)))))){
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,from_index);
var without = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(items,(0),from_index),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(items,(from_index + (1)))));
var to_index_STAR_ = (function (){var x__5113__auto__ = to_index;
var y__5114__auto__ = cljs.core.count(without);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(without,(0),to_index_STAR_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(without,to_index_STAR_)], 0)));
} else {
return null;
}
});
/**
 * Reorder `list-items` by moving `drag-id` to `to-index`, merged back into `all-items`.
 */
placesurfer.pin_ui.pure.rows.reorder_list_items = (function placesurfer$pin_ui$pure$rows$reorder_list_items(all_items,list_items,drag_id,to_index){
var from_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))){
return idx;
} else {
return null;
}
}),list_items));
if((((!((from_index == null)))) && ((!((to_index == null)))))){
var temp__5825__auto__ = placesurfer.pin_ui.pure.rows.move_item_to_index(list_items,from_index,to_index);
if(cljs.core.truth_(temp__5825__auto__)){
var reordered = temp__5825__auto__;
return placesurfer.pin_ui.pure.rows.merge_visible_order(all_items,reordered);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Reorder visible list items by moving `drag-id` to `to-index` in the visible list.
 */
placesurfer.pin_ui.pure.rows.reorder_visible_pin = (function placesurfer$pin_ui$pure$rows$reorder_visible_pin(all_items,countries,country_slug,drag_id,to_index){
return placesurfer.pin_ui.pure.rows.reorder_list_items(all_items,placesurfer.pin_ui.pure.rows.visible_list_items(all_items,countries,country_slug),drag_id,to_index);
});
/**
 * Reorder saved pins and groups on the browse pin page.
 */
placesurfer.pin_ui.pure.rows.reorder_pin_page_items = (function placesurfer$pin_ui$pure$rows$reorder_pin_page_items(all_items,drag_id,to_index){
return placesurfer.pin_ui.pure.rows.reorder_list_items(all_items,placesurfer.pin_ui.pure.rows.pin_page_list_items(all_items),drag_id,to_index);
});
/**
 * Insert `new-item` after the item with `id`, or append when `id` is missing.
 */
placesurfer.pin_ui.pure.rows.insert_item_after_id = (function placesurfer$pin_ui$pure$rows$insert_item_after_id(items,id,new_item){
var temp__5823__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v))){
return i;
} else {
return null;
}
}),items));
if(cljs.core.truth_(temp__5823__auto__)){
var idx = temp__5823__auto__;
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(items),(0),(idx + (1))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_item], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(items),(idx + (1)))], 0)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(items),new_item);
}
});
placesurfer.pin_ui.pure.rows.upsert_item = (function placesurfer$pin_ui$pure$rows$upsert_item(items,item){
var temp__5823__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v))){
return i;
} else {
return null;
}
}),items));
if(cljs.core.truth_(temp__5823__auto__)){
var idx = temp__5823__auto__;
return cljs.core.assoc_in(cljs.core.vec(items),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),item);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(items),item);
}
});
placesurfer.pin_ui.pure.rows.remove_item = (function placesurfer$pin_ui$pure$rows$remove_item(items,id){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__65910_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__65910_SHARP_));
}),items));
});
placesurfer.pin_ui.pure.rows.find_by_id = (function placesurfer$pin_ui$pure$rows$find_by_id(items,id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65913_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__65913_SHARP_)));
}),items));
});
/**
 * All separator items in `items`, preserving list order.
 */
placesurfer.pin_ui.pure.rows.separators_in_order = (function placesurfer$pin_ui$pure$rows$separators_in_order(items){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.pure.rows.separator_item_QMARK_,items));
});
placesurfer.pin_ui.pure.rows.partition_items_by_separator = (function placesurfer$pin_ui$pure$rows$partition_items_by_separator(items){
var remaining = cljs.core.seq(items);
var ungrouped = cljs.core.PersistentVector.EMPTY;
var sections = cljs.core.PersistentVector.EMPTY;
var current_sep = null;
var current_pins = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
var sections_STAR_ = (cljs.core.truth_(current_sep)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sections,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_sep),new cljs.core.Keyword(null,"separator","separator",-1628749125),current_sep,new cljs.core.Keyword(null,"pins","pins",1725193285),cljs.core.vec(current_pins)], null)):sections);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ungrouped","ungrouped",-339184006),cljs.core.vec(ungrouped),new cljs.core.Keyword(null,"sections","sections",-886710106),cljs.core.vec(sections_STAR_)], null);
} else {
var item = cljs.core.first(remaining);
if(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)){
if(cljs.core.truth_(current_sep)){
var G__65999 = cljs.core.rest(remaining);
var G__66000 = ungrouped;
var G__66001 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sections,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_sep),new cljs.core.Keyword(null,"separator","separator",-1628749125),current_sep,new cljs.core.Keyword(null,"pins","pins",1725193285),cljs.core.vec(current_pins)], null));
var G__66002 = item;
var G__66003 = cljs.core.PersistentVector.EMPTY;
remaining = G__65999;
ungrouped = G__66000;
sections = G__66001;
current_sep = G__66002;
current_pins = G__66003;
continue;
} else {
var G__66004 = cljs.core.rest(remaining);
var G__66005 = ungrouped;
var G__66006 = sections;
var G__66007 = item;
var G__66008 = cljs.core.PersistentVector.EMPTY;
remaining = G__66004;
ungrouped = G__66005;
sections = G__66006;
current_sep = G__66007;
current_pins = G__66008;
continue;
}
} else {
if(cljs.core.truth_(current_sep)){
var G__66009 = cljs.core.rest(remaining);
var G__66010 = ungrouped;
var G__66011 = sections;
var G__66012 = current_sep;
var G__66013 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_pins,item);
remaining = G__66009;
ungrouped = G__66010;
sections = G__66011;
current_sep = G__66012;
current_pins = G__66013;
continue;
} else {
var G__66014 = cljs.core.rest(remaining);
var G__66015 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ungrouped,item);
var G__66016 = sections;
var G__66017 = null;
var G__66018 = cljs.core.PersistentVector.EMPTY;
remaining = G__66014;
ungrouped = G__66015;
sections = G__66016;
current_sep = G__66017;
current_pins = G__66018;
continue;
}
}
}
break;
}
});
placesurfer.pin_ui.pure.rows.index_of_id = (function placesurfer$pin_ui$pure$rows$index_of_id(items,id){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)))){
return idx;
} else {
return null;
}
}),items));
});
/**
 * Return the separator id directly above `item-id` in `items`, if any.
 */
placesurfer.pin_ui.pure.rows.group_id_for_item = (function placesurfer$pin_ui$pure$rows$group_id_for_item(items,item_id){
var temp__5825__auto__ = placesurfer.pin_ui.pure.rows.index_of_id(items,item_id);
if(cljs.core.truth_(temp__5825__auto__)){
var idx = temp__5825__auto__;
return cljs.core.some((function (i){
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,i);
if(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
} else {
return null;
}
}),cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),idx)));
} else {
return null;
}
});
/**
 * Separator rows as {:id :label} for group pickers.
 */
placesurfer.pin_ui.pure.rows.group_options = (function placesurfer$pin_ui$pure$rows$group_options(items){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__65927){
var map__65928 = p__65927;
var map__65928__$1 = cljs.core.__destructure_map(map__65928);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())], null);
}),placesurfer.pin_ui.pure.rows.separators_in_order(items));
});
/**
 * Move pin `pin-id` to sit directly after separator `group-id`, or before first separator when nil.
 */
placesurfer.pin_ui.pure.rows.move_pin_to_group = (function placesurfer$pin_ui$pure$rows$move_pin_to_group(items,pin_id,group_id){
var temp__5825__auto__ = placesurfer.pin_ui.pure.rows.find_by_id(items,pin_id);
if(cljs.core.truth_(temp__5825__auto__)){
var pin = temp__5825__auto__;
if(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(pin)){
return null;
} else {
var without = placesurfer.pin_ui.pure.rows.remove_item(items,pin_id);
var insert_at = (((!((group_id == null))))?(function (){var temp__5825__auto____$1 = placesurfer.pin_ui.pure.rows.index_of_id(without,group_id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var sep_idx = temp__5825__auto____$1;
return (sep_idx + (1));
} else {
return null;
}
})():cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
if(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)){
return idx;
} else {
return null;
}
}),without)));
if(typeof insert_at === 'number'){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(without,(0),insert_at),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pin], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(without,insert_at)], 0)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(without,pin);
}
}
} else {
return null;
}
});
placesurfer.pin_ui.pure.rows.coord_key = (function placesurfer$pin_ui$pure$rows$coord_key(p__65932){
var map__65933 = p__65932;
var map__65933__$1 = cljs.core.__destructure_map(map__65933);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65933__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65933__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [longitude,latitude], null);
} else {
return null;
}
});
/**
 * Return the first pin with the same longitude/latitude.
 */
placesurfer.pin_ui.pure.rows.find_by_coords = (function placesurfer$pin_ui$pure$rows$find_by_coords(items,longitude,latitude){
var temp__5825__auto__ = placesurfer.pin_ui.pure.rows.coord_key(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude], null));
if(cljs.core.truth_(temp__5825__auto__)){
var key = temp__5825__auto__;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65934_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,placesurfer.pin_ui.pure.rows.coord_key(p1__65934_SHARP_));
}),items));
} else {
return null;
}
});
/**
 * Draft rows for the separator manage overlay.
 */
placesurfer.pin_ui.pure.rows.separator_overlay_rows_from_items = (function placesurfer$pin_ui$pure$rows$separator_overlay_rows_from_items(items){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__65935){
var map__65936 = p__65935;
var map__65936__$1 = cljs.core.__destructure_map(map__65936);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65936__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65936__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())], null);
}),placesurfer.pin_ui.pure.rows.separators_in_order(items));
});
/**
 * Apply overlay draft rows to `items`: remove missing separators, update labels,
 * reorder groups (with their pins), append new separators at the end.
 */
placesurfer.pin_ui.pure.rows.apply_separator_overlay_edits = (function placesurfer$pin_ui$pure$rows$apply_separator_overlay_edits(items,draft_rows){
var draft_rows__$1 = cljs.core.vec(draft_rows);
var draft_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),draft_rows__$1));
var labels_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65963){
var map__65964 = p__65963;
var map__65964__$1 = cljs.core.__destructure_map(map__65964);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65964__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65964__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())], null);
}),draft_rows__$1));
var without_removed = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__65937_SHARP_){
return ((placesurfer.pin_ui.pure.rows.separator_item_QMARK_(p1__65937_SHARP_)) && (cljs.core.not((function (){var G__65965 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__65937_SHARP_);
return (draft_ids.cljs$core$IFn$_invoke$arity$1 ? draft_ids.cljs$core$IFn$_invoke$arity$1(G__65965) : draft_ids.call(null,G__65965));
})())));
}),items));
var with_labels = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
var temp__5823__auto__ = (function (){var G__65967 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return (labels_by_id.cljs$core$IFn$_invoke$arity$1 ? labels_by_id.cljs$core$IFn$_invoke$arity$1(G__65967) : labels_by_id.call(null,G__65967));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var label = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"label","label",1718410804),label);
} else {
return item;
}
}),without_removed);
var map__65962 = placesurfer.pin_ui.pure.rows.partition_items_by_separator(with_labels);
var map__65962__$1 = cljs.core.__destructure_map(map__65962);
var ungrouped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65962__$1,new cljs.core.Keyword(null,"ungrouped","ungrouped",-339184006));
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65962__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
var section_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (section){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section),section], null);
}),sections));
var ordered_sections = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__65959_SHARP_){
var G__65968 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__65959_SHARP_);
return (section_by_id.cljs$core$IFn$_invoke$arity$1 ? section_by_id.cljs$core$IFn$_invoke$arity$1(G__65968) : section_by_id.call(null,G__65968));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new?","new?",777958557),draft_rows__$1)));
var new_sections = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__65971){
var map__65972 = p__65971;
var map__65972__$1 = cljs.core.__destructure_map(map__65972);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65972__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65972__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"separator","separator",-1628749125),placesurfer.pin_ui.pure.rows.make_separator(id,label),new cljs.core.Keyword(null,"pins","pins",1725193285),cljs.core.PersistentVector.EMPTY], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65960_SHARP_){
var and__5023__auto__ = new cljs.core.Keyword(null,"new?","new?",777958557).cljs$core$IFn$_invoke$arity$1(p1__65960_SHARP_);
if(cljs.core.truth_(and__5023__auto__)){
return (!(clojure.string.blank_QMARK_(clojure.string.trim(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__65960_SHARP_)))));
} else {
return and__5023__auto__;
}
}),draft_rows__$1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(ungrouped),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65973){
var map__65974 = p__65973;
var map__65974__$1 = cljs.core.__destructure_map(map__65974);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65974__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125));
var pins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65974__$1,new cljs.core.Keyword(null,"pins","pins",1725193285));
return cljs.core.cons(separator,pins);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(ordered_sections,new_sections)], 0)));
});

//# sourceMappingURL=placesurfer.pin_ui.pure.rows.js.map
