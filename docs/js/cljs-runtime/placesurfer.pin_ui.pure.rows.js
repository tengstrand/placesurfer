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
var map__20308 = item;
var map__20308__$1 = cljs.core.__destructure_map(map__20308);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20308__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20308__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
if(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(item)){
return false;
} else {
if((!(((typeof longitude === 'number') && (typeof latitude === 'number'))))){
return false;
} else {
if(((cljs.core.not(country_slug)) || (cljs.core.not(cljs.core.seq(countries))))){
return true;
} else {
var temp__5821__auto__ = placesurfer.country.interface$.country_bounds_for_slug(country_slug,countries);
if(cljs.core.truth_(temp__5821__auto__)){
var map__20310 = temp__5821__auto__;
var map__20310__$1 = cljs.core.__destructure_map(map__20310);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20310__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20310__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20310__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20310__$1,new cljs.core.Keyword(null,"north","north",651323902));
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
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20316_SHARP_){
return (((!(placesurfer.pin_ui.pure.rows.separator_item_QMARK_(p1__20316_SHARP_)))) && (placesurfer.pin_ui.pure.rows.item_in_country_QMARK_(p1__20316_SHARP_,countries,country_slug)));
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
var pin_visible_QMARK_ = (function (p1__20319_SHARP_){
return placesurfer.pin_ui.pure.rows.pin_visible_in_country_QMARK_(p1__20319_SHARP_,countries,country_slug);
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
placesurfer.pin_ui.pure.rows.pin_sort_key = (function placesurfer$pin_ui$pure$rows$pin_sort_key(p__20324){
var map__20325 = p__20324;
var map__20325__$1 = cljs.core.__destructure_map(map__20325);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20325__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__20330){
var map__20331 = p__20330;
var map__20331__$1 = cljs.core.__destructure_map(map__20331);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20331__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20335_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__20335_SHARP_));
}),positions));
});
placesurfer.pin_ui.pure.rows.sorted_active_topics = (function placesurfer$pin_ui$pure$rows$sorted_active_topics(active_topics,topic_label_fn){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topic","topic",-1960480691),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"label","label",1718410804),(function (p1__20336_SHARP_,p2__20337_SHARP_){
return cljs.core.compare(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20336_SHARP_)),clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__20337_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (topic){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"label","label",1718410804),(topic_label_fn.cljs$core$IFn$_invoke$arity$1 ? topic_label_fn.cljs$core$IFn$_invoke$arity$1(topic) : topic_label_fn.call(null,topic))], null);
}),cljs.core.seq(active_topics))));
});
/**
 * Pin list items for the dedicated pin page: saved pins, optional Pins separator,
 *   then each active topic's positions followed by a topic-name separator.
 */
placesurfer.pin_ui.pure.rows.pin_page_display_items = (function placesurfer$pin_ui$pure$rows$pin_page_display_items(p__20339){
var map__20340 = p__20339;
var map__20340__$1 = cljs.core.__destructure_map(map__20340);
var pin_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20340__$1,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100));
var active_topics = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20340__$1,new cljs.core.Keyword(null,"active-topics","active-topics",1278012558),cljs.core.PersistentHashSet.EMPTY);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20340__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY);
var pins_section_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20340__$1,new cljs.core.Keyword(null,"pins-section-label","pins-section-label",1812353668));
var topic_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20340__$1,new cljs.core.Keyword(null,"topic-label-fn","topic-label-fn",-15666023));
var topic_marker_url_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20340__$1,new cljs.core.Keyword(null,"topic-marker-url-fn","topic-marker-url-fn",-1547313478));
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
var topic_items = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__20341){
var vec__20342 = p__20341;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20342,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20342,(1),null);
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
if(cljs.core.truth_((function (){var G__20349 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return (visible_ids.cljs$core$IFn$_invoke$arity$1 ? visible_ids.cljs$core$IFn$_invoke$arity$1(G__20349) : visible_ids.call(null,G__20349));
})())){
var G__20378 = cljs.core.rest(remaining);
var G__20379 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.first(visible_queue));
var G__20380 = cljs.core.rest(visible_queue);
remaining = G__20378;
result = G__20379;
visible_queue = G__20380;
continue;
} else {
var G__20381 = cljs.core.rest(remaining);
var G__20382 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,item);
var G__20383 = visible_queue;
remaining = G__20381;
result = G__20382;
visible_queue = G__20383;
continue;
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
 * Reorder `list-items` by moving `drag-id` to just before whichever item has
 * `target-id`, merged back into `all-items`. Falls back to the raw `to-index`
 * position when `target-id` is nil or isn't found in `list-items`.
 * Resolving by id (rather than trusting `to-index` as-is) matters because
 * the caller (pure.drag) computes `to-index` by counting the RENDERED rows,
 * which don't always line up 1:1 with `list-items`'s own order - pin-ui's
 * pin-table sorts/groups rows for display and renders separators as headers
 * rather than rows (see pin-ui.pure.list-panel/pin-sorted-table's pin-only filter), so a drop at
 * rendered-row-index N can land on a different item, or even a different
 * absolute index, than `list-items`'s own position N.
 * `move-item-to-index`'s `to-index` is a position counted AFTER `drag-id` has
 * already been removed - so when the target sits AFTER `drag-id` in
 * `list-items`, removing `drag-id` first shifts the target one slot earlier,
 * and that shift has to be subtracted here, or the dragged item ends up one
 * slot past (i.e. just after, not just before) the row it was dropped on.
 * EXCEPT when the target is `drag-id`'s own immediate next neighbor: 'just
 * before the neighbor' is where the dragged item already sits, so the
 * subtracted index is a no-op there - dropping anywhere on that one
 * adjacent row (not just its lower half) is treated as swapping places with
 * it instead, since a drag the user visibly performed should never
 * silently do nothing.
 */
placesurfer.pin_ui.pure.rows.reorder_list_items = (function placesurfer$pin_ui$pure$rows$reorder_list_items(var_args){
var G__20356 = arguments.length;
switch (G__20356) {
case 4:
return placesurfer.pin_ui.pure.rows.reorder_list_items.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return placesurfer.pin_ui.pure.rows.reorder_list_items.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.pin_ui.pure.rows.reorder_list_items.cljs$core$IFn$_invoke$arity$4 = (function (all_items,list_items,drag_id,to_index){
return placesurfer.pin_ui.pure.rows.reorder_list_items.cljs$core$IFn$_invoke$arity$5(all_items,list_items,drag_id,to_index,null);
}));

(placesurfer.pin_ui.pure.rows.reorder_list_items.cljs$core$IFn$_invoke$arity$5 = (function (all_items,list_items,drag_id,to_index,target_id){
var from_index = placesurfer.pin_ui.pure.rows.index_of_id(list_items,drag_id);
var target_index = (cljs.core.truth_(target_id)?placesurfer.pin_ui.pure.rows.index_of_id(list_items,target_id):null);
var resolved_to_index = (((target_index == null))?to_index:(cljs.core.truth_((function (){var and__5023__auto__ = from_index;
if(cljs.core.truth_(and__5023__auto__)){
return (target_index > from_index);
} else {
return and__5023__auto__;
}
})())?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_index,(from_index + (1))))?target_index:(target_index - (1))):target_index
));
if((((!((from_index == null)))) && ((!((resolved_to_index == null)))))){
var temp__5823__auto__ = placesurfer.pin_ui.pure.rows.move_item_to_index(list_items,from_index,resolved_to_index);
if(cljs.core.truth_(temp__5823__auto__)){
var reordered = temp__5823__auto__;
return placesurfer.pin_ui.pure.rows.merge_visible_order(all_items,reordered);
} else {
return null;
}
} else {
return null;
}
}));

(placesurfer.pin_ui.pure.rows.reorder_list_items.cljs$lang$maxFixedArity = 5);

/**
 * Reorder visible list items by moving `drag-id` to just before `target-id`
 * (or `to-index` when that can't be resolved) in the visible list.
 */
placesurfer.pin_ui.pure.rows.reorder_visible_pin = (function placesurfer$pin_ui$pure$rows$reorder_visible_pin(var_args){
var G__20358 = arguments.length;
switch (G__20358) {
case 5:
return placesurfer.pin_ui.pure.rows.reorder_visible_pin.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return placesurfer.pin_ui.pure.rows.reorder_visible_pin.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.pin_ui.pure.rows.reorder_visible_pin.cljs$core$IFn$_invoke$arity$5 = (function (all_items,countries,country_slug,drag_id,to_index){
return placesurfer.pin_ui.pure.rows.reorder_visible_pin.cljs$core$IFn$_invoke$arity$6(all_items,countries,country_slug,drag_id,to_index,null);
}));

(placesurfer.pin_ui.pure.rows.reorder_visible_pin.cljs$core$IFn$_invoke$arity$6 = (function (all_items,countries,country_slug,drag_id,to_index,target_id){
return placesurfer.pin_ui.pure.rows.reorder_list_items.cljs$core$IFn$_invoke$arity$5(all_items,placesurfer.pin_ui.pure.rows.visible_list_items(all_items,countries,country_slug),drag_id,to_index,target_id);
}));

(placesurfer.pin_ui.pure.rows.reorder_visible_pin.cljs$lang$maxFixedArity = 6);

/**
 * Reorder saved pins and groups on the browse pin page.
 */
placesurfer.pin_ui.pure.rows.reorder_pin_page_items = (function placesurfer$pin_ui$pure$rows$reorder_pin_page_items(var_args){
var G__20361 = arguments.length;
switch (G__20361) {
case 3:
return placesurfer.pin_ui.pure.rows.reorder_pin_page_items.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return placesurfer.pin_ui.pure.rows.reorder_pin_page_items.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.pin_ui.pure.rows.reorder_pin_page_items.cljs$core$IFn$_invoke$arity$3 = (function (all_items,drag_id,to_index){
return placesurfer.pin_ui.pure.rows.reorder_pin_page_items.cljs$core$IFn$_invoke$arity$4(all_items,drag_id,to_index,null);
}));

(placesurfer.pin_ui.pure.rows.reorder_pin_page_items.cljs$core$IFn$_invoke$arity$4 = (function (all_items,drag_id,to_index,target_id){
return placesurfer.pin_ui.pure.rows.reorder_list_items.cljs$core$IFn$_invoke$arity$5(all_items,placesurfer.pin_ui.pure.rows.pin_page_list_items(all_items),drag_id,to_index,target_id);
}));

(placesurfer.pin_ui.pure.rows.reorder_pin_page_items.cljs$lang$maxFixedArity = 4);

/**
 * Insert `new-item` after the item with `id`, or append when `id` is missing.
 */
placesurfer.pin_ui.pure.rows.insert_item_after_id = (function placesurfer$pin_ui$pure$rows$insert_item_after_id(items,id,new_item){
var temp__5821__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v))){
return i;
} else {
return null;
}
}),items));
if(cljs.core.truth_(temp__5821__auto__)){
var idx = temp__5821__auto__;
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(items),(0),(idx + (1))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_item], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(items),(idx + (1)))], 0)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(items),new_item);
}
});
placesurfer.pin_ui.pure.rows.upsert_item = (function placesurfer$pin_ui$pure$rows$upsert_item(items,item){
var temp__5821__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v))){
return i;
} else {
return null;
}
}),items));
if(cljs.core.truth_(temp__5821__auto__)){
var idx = temp__5821__auto__;
return cljs.core.assoc_in(cljs.core.vec(items),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),item);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(items),item);
}
});
placesurfer.pin_ui.pure.rows.remove_item = (function placesurfer$pin_ui$pure$rows$remove_item(items,id){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20367_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20367_SHARP_));
}),items));
});
placesurfer.pin_ui.pure.rows.find_by_id = (function placesurfer$pin_ui$pure$rows$find_by_id(items,id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20368_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20368_SHARP_)));
}),items));
});
placesurfer.pin_ui.pure.rows.coord_key = (function placesurfer$pin_ui$pure$rows$coord_key(p__20369){
var map__20370 = p__20369;
var map__20370__$1 = cljs.core.__destructure_map(map__20370);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20370__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20370__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
var temp__5823__auto__ = placesurfer.pin_ui.pure.rows.coord_key(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude], null));
if(cljs.core.truth_(temp__5823__auto__)){
var key = temp__5823__auto__;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20373_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,placesurfer.pin_ui.pure.rows.coord_key(p1__20373_SHARP_));
}),items));
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.pin_ui.pure.rows.js.map
