goog.provide('placesurfer.edit.handlers.map');
placesurfer.edit.handlers.map.popup_opts = (function placesurfer$edit$handlers$map$popup_opts(s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-label","source-label",585601639),placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"en","en",88457073)),new cljs.core.Keyword("popup","source-label","popup/source-label",1481253299)], 0))], null);
});
placesurfer.edit.handlers.map.update_map_center_zoom = (9);
placesurfer.edit.handlers.map.map_page_QMARK_ = (function placesurfer$edit$handlers$map$map_page_QMARK_(page){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.Keyword(null,"topic","topic",-1960480691),null,new cljs.core.Keyword(null,"country","country",312965309),null], null), null),page);
});
placesurfer.edit.handlers.map.valid_topic_QMARK_ = (function placesurfer$edit$handlers$map$valid_topic_QMARK_(topic){
return cljs.core.contains_QMARK_(cljs.core.set(placesurfer.topic.interface$.topic_keys()),topic);
});
placesurfer.edit.handlers.map.coords_from_update_form = (function placesurfer$edit$handlers$map$coords_from_update_form(s){
var form = new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(s);
var lon = placesurfer.edit.interface$.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form));
var lat = placesurfer.edit.interface$.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form));
if(((typeof lon === 'number') && (typeof lat === 'number'))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat], null);
} else {
return null;
}
});
placesurfer.edit.handlers.map.coords_from_update_url_form = (function placesurfer$edit$handlers$map$coords_from_update_url_form(s){
var temp__5825__auto__ = new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__5825__auto__)){
var form = temp__5825__auto__;
var lon = placesurfer.edit.interface$.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form));
var lat = placesurfer.edit.interface$.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form));
if(((typeof lon === 'number') && (typeof lat === 'number'))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat], null);
} else {
return null;
}
} else {
return null;
}
});
placesurfer.edit.handlers.map.coords_for_pending_pin = (function placesurfer$edit$handlers$map$coords_for_pending_pin(s){
if(cljs.core.truth_(new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673).cljs$core$IFn$_invoke$arity$1(s))){
var or__5025__auto__ = placesurfer.edit.handlers.map.coords_from_update_url_form(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.edit.handlers.map.coords_from_update_form(s);
}
} else {
return null;
}
});
placesurfer.edit.handlers.map.next_pending_row_id_BANG_ = (function placesurfer$edit$handlers$map$next_pending_row_id_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_update_pending_id_seq,cljs.core.dec);
});
placesurfer.edit.handlers.map.pending_place__GT_map_position = (function placesurfer$edit$handlers$map$pending_place__GT_map_position(place,update_topic){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"topic","topic",-1960480691),update_topic,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154),new cljs.core.Keyword(null,"url-pin","url-pin",924738382),new cljs.core.Keyword(null,"pending-id","pending-id",1999041996),new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(place)], null);
});
placesurfer.edit.handlers.map.deleted_row__GT_map_position = (function placesurfer$edit$handlers$map$deleted_row__GT_map_position(row,update_topic){
var temp__5825__auto__ = placesurfer.edit.interface$.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5825__auto__)){
var map__94904 = temp__5825__auto__;
var map__94904__$1 = cljs.core.__destructure_map(map__94904);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94904__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94904__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var G__94905 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"topic","topic",-1960480691),update_topic,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154),new cljs.core.Keyword(null,"removed","removed",609626430)], null);
var G__94905__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94905,new cljs.core.Keyword(null,"row-id","row-id",246619473),new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row)):G__94905);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(row))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94905__$1,new cljs.core.Keyword(null,"pending-id","pending-id",1999041996),new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(row));
} else {
return G__94905__$1;
}
} else {
return null;
}
});
placesurfer.edit.handlers.map.client_deleted_at_coords_QMARK_ = (function placesurfer$edit$handlers$map$client_deleted_at_coords_QMARK_(s,longitude,latitude){
return placesurfer.edit.interface$.match.coords_match_deleted_row_at_QMARK_(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s),longitude,latitude,placesurfer.edit.interface$.rows.row_marked_deleted_QMARK_);
});
placesurfer.edit.handlers.map.disk_tombstone_at_coords_QMARK_ = (function placesurfer$edit$handlers$map$disk_tombstone_at_coords_QMARK_(s,longitude,latitude){
return placesurfer.edit.interface$.match.coords_match_deleted_row_at_QMARK_(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s),longitude,latitude,placesurfer.edit.interface$.rows.saved_delete_row_QMARK_);
});
placesurfer.edit.handlers.map.position_hidden_on_update_map_QMARK_ = (function placesurfer$edit$handlers$map$position_hidden_on_update_map_QMARK_(s,position){
var map__94911 = position;
var map__94911__$1 = cljs.core.__destructure_map(map__94911);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94911__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94911__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
return ((typeof longitude === 'number') && (((typeof latitude === 'number') && (((placesurfer.edit.handlers.map.disk_tombstone_at_coords_QMARK_(s,longitude,latitude)) || (placesurfer.edit.handlers.map.client_deleted_at_coords_QMARK_(s,longitude,latitude)))))));
});
placesurfer.edit.handlers.map.client_deleted_map_positions = (function placesurfer$edit$handlers$map$client_deleted_map_positions(s){
var topic = new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(topic)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,row){
if(((placesurfer.edit.interface$.rows.row_marked_deleted_QMARK_(row)) && ((!((placesurfer.edit.interface$.coords.row_lon_lat(row) == null)))))){
var pos = placesurfer.edit.handlers.map.deleted_row__GT_map_position(row,topic);
var dup_QMARK_ = cljs.core.some((function (existing){
return placesurfer.edit.interface$.match.coords_exact_match_QMARK_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(existing),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(existing));
}),acc);
if(cljs.core.truth_(dup_QMARK_)){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,pos);
}
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.handlers.rows.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s)),placesurfer.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s))));
} else {
return null;
}
});
placesurfer.edit.handlers.map.pending_map_positions = (function placesurfer$edit$handlers$map$pending_map_positions(s){
var topic = new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(topic)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__94920_SHARP_){
return placesurfer.edit.handlers.map.pending_place__GT_map_position(p1__94920_SHARP_,topic);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (place){
return (((!((placesurfer.edit.interface$.coords.row_lon_lat(place) == null)))) && ((!(placesurfer.edit.interface$.rows.row_marked_deleted_QMARK_(place)))));
}),placesurfer.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s))));
} else {
return null;
}
});
placesurfer.edit.handlers.map.saved_row__GT_map_position = (function placesurfer$edit$handlers$map$saved_row__GT_map_position(row,update_topic){
var temp__5825__auto__ = placesurfer.edit.interface$.coords.row_lon_lat(row);
if(cljs.core.truth_(temp__5825__auto__)){
var map__94930 = temp__5825__auto__;
var map__94930__$1 = cljs.core.__destructure_map(map__94930);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94930__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94930__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
if((((!(placesurfer.edit.interface$.rows.row_marked_deleted_QMARK_(row)))) && ((!(placesurfer.edit.interface$.rows.saved_delete_row_QMARK_(row)))))){
var G__94932 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"topic","topic",-1960480691),update_topic], null);
var G__94932__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94932,new cljs.core.Keyword(null,"row-id","row-id",246619473),new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row)):G__94932);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(row))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94932__$1,new cljs.core.Keyword(null,"pending-id","pending-id",1999041996),new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(row));
} else {
return G__94932__$1;
}
} else {
return null;
}
} else {
return null;
}
});
placesurfer.edit.handlers.map.update_topic_positions = (function placesurfer$edit$handlers$map$update_topic_positions(s){
var temp__5825__auto__ = new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__5825__auto__)){
var topic = temp__5825__auto__;
if(placesurfer.edit.pure.topics.pins_topic_QMARK_(topic)){
return null;
} else {
var rows = placesurfer.edit.handlers.rows.as_update_rows(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.seq(rows)){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__94933_SHARP_){
return placesurfer.edit.handlers.map.saved_row__GT_map_position(p1__94933_SHARP_,topic);
}),rows));
} else {
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__94934_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__94934_SHARP_));
}),new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(s)));
}
}
} else {
return null;
}
});
placesurfer.edit.handlers.map.update_map_positions = (function placesurfer$edit$handlers$map$update_map_positions(s){
if(placesurfer.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s))){
return placesurfer.pin_ui.interface$.handlers.map.pins_only_map_positions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__94951_SHARP_){
return placesurfer.edit.handlers.map.position_hidden_on_update_map_QMARK_(s,p1__94951_SHARP_);
}),(function (){var or__5025__auto__ = placesurfer.edit.handlers.map.update_topic_positions(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())),(function (){var or__5025__auto__ = placesurfer.edit.handlers.map.pending_map_positions(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()),(function (){var or__5025__auto__ = placesurfer.edit.handlers.map.client_deleted_map_positions(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
}
});
placesurfer.edit.handlers.map.register_current_url_pending_place = (function placesurfer$edit$handlers$map$register_current_url_pending_place(s){
if(cljs.core.not(new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673).cljs$core$IFn$_invoke$arity$1(s))){
return s;
} else {
var temp__5823__auto__ = placesurfer.edit.handlers.map.coords_for_pending_pin(s);
if(cljs.core.truth_(temp__5823__auto__)){
var map__94960 = temp__5823__auto__;
var map__94960__$1 = cljs.core.__destructure_map(map__94960);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94960__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94960__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
if(placesurfer.edit.interface$.match.coords_exist_in_update_rows_QMARK_(longitude,latitude,new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),cljs.core.PersistentVector.EMPTY);
} else {
var url_form = new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673).cljs$core$IFn$_invoke$arity$1(s);
var place = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(url_form),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(url_form),new cljs.core.Keyword(null,"homepage","homepage",-1646828249),new cljs.core.Keyword(null,"homepage","homepage",-1646828249).cljs$core$IFn$_invoke$arity$1(url_form),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(url_form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"url-form","url-form",426694546),url_form], null);
var places = placesurfer.edit.handlers.rows.as_update_pending_places(new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(s));
var idx = placesurfer.edit.interface$.match.find_pending_place_index(places,longitude,latitude);
var pending_id = (((!((idx == null))))?new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(places,idx)):placesurfer.edit.handlers.rows.next_pending_row_id_BANG_());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(place,new cljs.core.Keyword(null,"pending-id","pending-id",1999041996),pending_id),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"added","added",2057651688))], null));
}
} else {
return s;
}
}
});
placesurfer.edit.handlers.map.prune_pending_places_matching_rows = (function placesurfer$edit$handlers$map$prune_pending_places_matching_rows(s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),(function (places){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (place){
return placesurfer.edit.interface$.match.coords_exist_in_update_rows_QMARK_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s));
}),placesurfer.edit.handlers.rows.as_update_pending_places(places)));
}));
});
placesurfer.edit.handlers.map.clear_orphaned_pending_selection = (function placesurfer$edit$handlers$map$clear_orphaned_pending_selection(s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),null,new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),null,new cljs.core.Keyword(null,"update-form","update-form",475718790),placesurfer.app_ui.interface$.state.default_update_form(),new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),null], 0)),new cljs.core.Keyword(null,"update-form-reset-token","update-form-reset-token",1427860817),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});
placesurfer.edit.handlers.map.reconcile_orphaned_pending_selection = (function placesurfer$edit$handlers$map$reconcile_orphaned_pending_selection(s){
var selected_id = new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(s);
if((((!((selected_id == null)))) && ((((selected_id < (0))) && ((placesurfer.edit.handlers.rows.find_update_display_row(s,selected_id) == null)))))){
var temp__5823__auto__ = placesurfer.edit.handlers.map.coords_from_update_form(s);
if(cljs.core.truth_(temp__5823__auto__)){
var coords = temp__5823__auto__;
if(placesurfer.edit.interface$.match.coords_exist_in_update_rows_QMARK_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s))){
return placesurfer.edit.handlers.rows.select_saved_row_for_exact_url_coords(s,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords));
} else {
return placesurfer.edit.handlers.map.clear_orphaned_pending_selection(s);
}
} else {
return placesurfer.edit.handlers.map.clear_orphaned_pending_selection(s);
}
} else {
return s;
}
});
placesurfer.edit.handlers.map.refresh_update_pending_places_STAR_ = (function placesurfer$edit$handlers$map$refresh_update_pending_places_STAR_(reselect_row_QMARK_,p__94969){
var map__94970 = p__94969;
var map__94970__$1 = cljs.core.__destructure_map(map__94970);
var recenter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94970__$1,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
var selected_id = new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(s);
var s__$1 = placesurfer.edit.handlers.map.reconcile_orphaned_pending_selection(placesurfer.edit.handlers.map.prune_pending_places_matching_rows(placesurfer.edit.handlers.map.register_current_url_pending_place(s)));
var temp__5823__auto__ = placesurfer.edit.handlers.map.coords_for_pending_pin(s__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var map__94974 = temp__5823__auto__;
var map__94974__$1 = cljs.core.__destructure_map(map__94974);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94974__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94974__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(reselect_row_QMARK_);
if(and__5023__auto__){
var and__5023__auto____$1 = selected_id;
if(cljs.core.truth_(and__5023__auto____$1)){
return placesurfer.edit.interface$.rows.saved_update_row_id_QMARK_(selected_id);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return s__$1;
} else {
return placesurfer.edit.handlers.rows.select_row_for_url_coords(s__$1,longitude,latitude);
}
} else {
return s__$1;
}
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
placesurfer.app_ui.interface$.effects.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),recenter_QMARK_], null)], 0));

return placesurfer.app_ui.interface$.effects.render_BANG_();
} else {
return null;
}
});
placesurfer.edit.handlers.map.refresh_update_pending_places_BANG_ = (function placesurfer$edit$handlers$map$refresh_update_pending_places_BANG_(var_args){
var G__94977 = arguments.length;
switch (G__94977) {
case 0:
return placesurfer.edit.handlers.map.refresh_update_pending_places_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return placesurfer.edit.handlers.map.refresh_update_pending_places_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.edit.handlers.map.refresh_update_pending_places_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.handlers.map.refresh_update_pending_places_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return placesurfer.edit.handlers.map.refresh_update_pending_places_BANG_.cljs$core$IFn$_invoke$arity$2(false,null);
}));

(placesurfer.edit.handlers.map.refresh_update_pending_places_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reselect_row_QMARK_){
if(cljs.core.map_QMARK_(reselect_row_QMARK_)){
return placesurfer.edit.handlers.map.refresh_update_pending_places_STAR_(false,reselect_row_QMARK_);
} else {
return placesurfer.edit.handlers.map.refresh_update_pending_places_BANG_.cljs$core$IFn$_invoke$arity$2(reselect_row_QMARK_,null);
}
}));

(placesurfer.edit.handlers.map.refresh_update_pending_places_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reselect_row_QMARK_,opts){
var map__94978 = (function (){var or__5025__auto__ = opts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var map__94978__$1 = cljs.core.__destructure_map(map__94978);
var recenter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94978__$1,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true);
return placesurfer.edit.handlers.map.refresh_update_pending_places_STAR_(reselect_row_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),recenter_QMARK_], null));
}));

(placesurfer.edit.handlers.map.refresh_update_pending_places_BANG_.cljs$lang$maxFixedArity = 2);

placesurfer.edit.handlers.map.run_update_map_pin_sync_BANG_ = (function placesurfer$edit$handlers$map$run_update_map_pin_sync_BANG_(p__94979){
var map__94980 = p__94979;
var map__94980__$1 = cljs.core.__destructure_map(map__94980);
var recenter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94980__$1,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
if(placesurfer.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
return placesurfer.app_ui.interface$.effects.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),recenter_QMARK_], null)], 0));
} else {
placesurfer.edit.handlers.map.refresh_update_pending_places_STAR_(false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),recenter_QMARK_], null));

var seq__94981 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(80),(200),(500)], null));
var chunk__94982 = null;
var count__94983 = (0);
var i__94984 = (0);
while(true){
if((i__94984 < count__94983)){
var delay_ms = chunk__94982.cljs$core$IIndexed$_nth$arity$2(null,i__94984);
setTimeout(((function (seq__94981,chunk__94982,count__94983,i__94984,delay_ms,map__94980,map__94980__$1,recenter_QMARK_){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
if(placesurfer.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
return null;
} else {
return placesurfer.edit.handlers.map.refresh_update_pending_places_STAR_(false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),recenter_QMARK_], null));
}
} else {
return null;
}
});})(seq__94981,chunk__94982,count__94983,i__94984,delay_ms,map__94980,map__94980__$1,recenter_QMARK_))
,delay_ms);


var G__95047 = seq__94981;
var G__95048 = chunk__94982;
var G__95049 = count__94983;
var G__95050 = (i__94984 + (1));
seq__94981 = G__95047;
chunk__94982 = G__95048;
count__94983 = G__95049;
i__94984 = G__95050;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__94981);
if(temp__5825__auto__){
var seq__94981__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__94981__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__94981__$1);
var G__95051 = cljs.core.chunk_rest(seq__94981__$1);
var G__95052 = c__5548__auto__;
var G__95053 = cljs.core.count(c__5548__auto__);
var G__95054 = (0);
seq__94981 = G__95051;
chunk__94982 = G__95052;
count__94983 = G__95053;
i__94984 = G__95054;
continue;
} else {
var delay_ms = cljs.core.first(seq__94981__$1);
setTimeout(((function (seq__94981,chunk__94982,count__94983,i__94984,delay_ms,seq__94981__$1,temp__5825__auto__,map__94980,map__94980__$1,recenter_QMARK_){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
if(placesurfer.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
return null;
} else {
return placesurfer.edit.handlers.map.refresh_update_pending_places_STAR_(false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),recenter_QMARK_], null));
}
} else {
return null;
}
});})(seq__94981,chunk__94982,count__94983,i__94984,delay_ms,seq__94981__$1,temp__5825__auto__,map__94980,map__94980__$1,recenter_QMARK_))
,delay_ms);


var G__95056 = cljs.core.next(seq__94981__$1);
var G__95057 = null;
var G__95058 = (0);
var G__95059 = (0);
seq__94981 = G__95056;
chunk__94982 = G__95057;
count__94983 = G__95058;
i__94984 = G__95059;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
/**
 * Optional opts: {:recenter? true|false}. Called with no args from legacy call sites.
 */
placesurfer.edit.handlers.map.schedule_update_map_pin_sync_BANG_ = (function placesurfer$edit$handlers$map$schedule_update_map_pin_sync_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___95060 = arguments.length;
var i__5750__auto___95061 = (0);
while(true){
if((i__5750__auto___95061 < len__5749__auto___95060)){
args__5755__auto__.push((arguments[i__5750__auto___95061]));

var G__95062 = (i__5750__auto___95061 + (1));
i__5750__auto___95061 = G__95062;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.edit.handlers.map.schedule_update_map_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.edit.handlers.map.schedule_update_map_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__94998){
var vec__94999 = p__94998;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94999,(0),null);
var map__95002 = (function (){var or__5025__auto__ = opts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var map__95002__$1 = cljs.core.__destructure_map(map__95002);
var recenter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__95002__$1,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true);
return placesurfer.edit.handlers.map.run_update_map_pin_sync_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),recenter_QMARK_], null));
}));

(placesurfer.edit.handlers.map.schedule_update_map_pin_sync_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.edit.handlers.map.schedule_update_map_pin_sync_BANG_.cljs$lang$applyTo = (function (seq94997){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94997));
}));

placesurfer.edit.handlers.map.center_on_update_map_BANG_ = (function placesurfer$edit$handlers$map$center_on_update_map_BANG_(coords){
return placesurfer.map_ui.interface$.center_on_position_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coords,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),placesurfer.edit.handlers.map.update_map_center_zoom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true], 0)));
});
placesurfer.edit.handlers.map.sync_update_map_BANG_ = (function placesurfer$edit$handlers$map$sync_update_map_BANG_(var_args){
var G__95004 = arguments.length;
switch (G__95004) {
case 0:
return placesurfer.edit.handlers.map.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return placesurfer.edit.handlers.map.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.handlers.map.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return placesurfer.edit.handlers.map.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.edit.handlers.map.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__95008){
var map__95009 = p__95008;
var map__95009__$1 = cljs.core.__destructure_map(map__95009);
var recenter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__95009__$1,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true);
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var positions = placesurfer.edit.handlers.map.update_map_positions(s);
var pins_topic_QMARK_ = placesurfer.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s));
var pin_form_coords = ((pins_topic_QMARK_)?(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__5825__auto__)){
var form = temp__5825__auto__;
var temp__5825__auto____$1 = placesurfer.edit.interface$.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.truth_(temp__5825__auto____$1)){
var lon = temp__5825__auto____$1;
var temp__5825__auto____$2 = placesurfer.edit.interface$.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.truth_(temp__5825__auto____$2)){
var lat = temp__5825__auto____$2;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
var fit_pins_QMARK_ = ((pins_topic_QMARK_) && (((cljs.core.not(pin_form_coords)) && (cljs.core.seq(positions)))));
placesurfer.map_ui.interface$.apply_state_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,new cljs.core.Keyword(null,"fit?","fit?",1773758200),fit_pins_QMARK_,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),fit_pins_QMARK_,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),placesurfer.edit.handlers.map.popup_opts(s)], null));

if(cljs.core.truth_(recenter_QMARK_)){
if(cljs.core.truth_((function (){var and__5023__auto__ = pins_topic_QMARK_;
if(and__5023__auto__){
return pin_form_coords;
} else {
return and__5023__auto__;
}
})())){
return placesurfer.edit.handlers.map.center_on_update_map_BANG_(pin_form_coords);
} else {
if((((!(pins_topic_QMARK_))) && ((!((placesurfer.edit.handlers.map.coords_from_update_form(s) == null)))))){
return placesurfer.edit.handlers.map.center_on_update_map_BANG_(placesurfer.edit.handlers.map.coords_from_update_form(s));
} else {
return null;
}
}
} else {
return null;
}
}));

(placesurfer.edit.handlers.map.sync_update_map_BANG_.cljs$lang$maxFixedArity = 1);

placesurfer.edit.handlers.map.schedule_center_on_position_BANG_ = (function placesurfer$edit$handlers$map$schedule_center_on_position_BANG_(var_args){
var G__95016 = arguments.length;
switch (G__95016) {
case 1:
return placesurfer.edit.handlers.map.schedule_center_on_position_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.edit.handlers.map.schedule_center_on_position_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.handlers.map.schedule_center_on_position_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (position){
return placesurfer.edit.handlers.map.schedule_center_on_position_BANG_.cljs$core$IFn$_invoke$arity$2(position,cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.edit.handlers.map.schedule_center_on_position_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (position,p__95024){
var map__95025 = p__95024;
var map__95025__$1 = cljs.core.__destructure_map(map__95025);
var delay_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__95025__$1,new cljs.core.Keyword(null,"delay-ms","delay-ms",-59253516),(80));
var preserve_zoom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95025__$1,new cljs.core.Keyword(null,"preserve-zoom?","preserve-zoom?",-1650190790));
if(((cljs.core.map_QMARK_(position)) && (((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position) === 'number'))))){
return setTimeout((function (){
if(cljs.core.truth_(preserve_zoom_QMARK_)){
return placesurfer.map_ui.interface$.center_on_position_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position),new cljs.core.Keyword(null,"preserve-zoom?","preserve-zoom?",-1650190790),true,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true], null));
} else {
return placesurfer.edit.handlers.map.center_on_update_map_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position)], null));
}
}),delay_ms);
} else {
return null;
}
}));

(placesurfer.edit.handlers.map.schedule_center_on_position_BANG_.cljs$lang$maxFixedArity = 2);

placesurfer.edit.handlers.map.retry_update_row_popup_BANG_ = (function placesurfer$edit$handlers$map$retry_update_row_popup_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___95065 = arguments.length;
var i__5750__auto___95066 = (0);
while(true){
if((i__5750__auto___95066 < len__5749__auto___95065)){
args__5755__auto__.push((arguments[i__5750__auto___95066]));

var G__95067 = (i__5750__auto___95066 + (1));
i__5750__auto___95066 = G__95067;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return placesurfer.edit.handlers.map.retry_update_row_popup_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(placesurfer.edit.handlers.map.retry_update_row_popup_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (match,p__95028){
var vec__95029 = p__95028;
var map__95032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95029,(0),null);
var map__95032__$1 = cljs.core.__destructure_map(map__95032);
var attempt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__95032__$1,new cljs.core.Keyword(null,"attempt","attempt",1611761308),(0));
var delay_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__95032__$1,new cljs.core.Keyword(null,"delay-ms","delay-ms",-59253516),(150));
if((attempt <= (8))){
if(cljs.core.truth_(placesurfer.map_ui.interface$.open_marker_popup_BANG_(match))){
return null;
} else {
return setTimeout((function (){
return placesurfer.edit.handlers.map.retry_update_row_popup_BANG_.cljs$core$IFn$_invoke$arity$variadic(match,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attempt","attempt",1611761308),(attempt + (1)),new cljs.core.Keyword(null,"delay-ms","delay-ms",-59253516),delay_ms], null)], 0));
}),delay_ms);
}
} else {
return null;
}
}));

(placesurfer.edit.handlers.map.retry_update_row_popup_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(placesurfer.edit.handlers.map.retry_update_row_popup_BANG_.cljs$lang$applyTo = (function (seq95026){
var G__95027 = cljs.core.first(seq95026);
var seq95026__$1 = cljs.core.next(seq95026);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95027,seq95026__$1);
}));

/**
 * Open the popup for an update table row, retrying until the marker is mounted.
 */
placesurfer.edit.handlers.map.schedule_update_row_popup_BANG_ = (function placesurfer$edit$handlers$map$schedule_update_row_popup_BANG_(row){
if(cljs.core.truth_((function (){var and__5023__auto__ = row;
if(cljs.core.truth_(and__5023__auto__)){
return ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row) === 'number'));
} else {
return and__5023__auto__;
}
})())){
return placesurfer.edit.handlers.map.retry_update_row_popup_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row)], null));
} else {
return null;
}
});
placesurfer.edit.handlers.map.normalize_map_position = (function placesurfer$edit$handlers$map$normalize_map_position(raw){
var p = ((cljs.core.map_QMARK_(raw))?raw:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(raw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
var topic_raw = new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p);
var topic = (((topic_raw instanceof cljs.core.Keyword))?topic_raw:(((!((topic_raw == null))))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(topic_raw)):null
));
var source_raw = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(p);
var source = (((source_raw instanceof cljs.core.Keyword))?source_raw:(((!((source_raw == null))))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_raw)):null
));
var lon = new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(p);
var lat = new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(p);
var G__95033 = p;
var G__95033__$1 = ((placesurfer.edit.handlers.map.valid_topic_QMARK_(topic))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__95033,new cljs.core.Keyword(null,"topic","topic",-1960480691),topic):G__95033);
var G__95033__$2 = (((!(placesurfer.edit.handlers.map.valid_topic_QMARK_(topic))))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__95033__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691)):G__95033__$1);
var G__95033__$3 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__95033__$2,new cljs.core.Keyword(null,"source","source",-433931539),source):G__95033__$2);
var G__95033__$4 = ((typeof lon === 'string')?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__95033__$3,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),placesurfer.edit.interface$.coords.parse_decimal(lon)):G__95033__$3);
if(typeof lat === 'string'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__95033__$4,new cljs.core.Keyword(null,"latitude","latitude",394867543),placesurfer.edit.interface$.coords.parse_decimal(lat));
} else {
return G__95033__$4;
}
});
placesurfer.edit.handlers.map.position__GT_update_form = (function placesurfer$edit$handlers$map$position__GT_update_form(position){
var map__95034 = position;
var map__95034__$1 = cljs.core.__destructure_map(map__95034);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95034__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95034__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var homepage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95034__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95034__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95034__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95034__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"google-url","google-url",1168346589),"",new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"location","location",1815599388),(function (){var or__5025__auto__ = location__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"homepage","homepage",-1646828249),(function (){var or__5025__auto__ = homepage;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),((typeof longitude === 'number')?cljs.core.str.cljs$core$IFn$_invoke$arity$1(longitude):(function (){var or__5025__auto__ = longitude;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()),new cljs.core.Keyword(null,"latitude","latitude",394867543),((typeof latitude === 'number')?cljs.core.str.cljs$core$IFn$_invoke$arity$1(latitude):(function (){var or__5025__auto__ = latitude;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()),new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.edit.interface$.baseline.normalize_update_source(source)], null);
});
placesurfer.edit.handlers.map.apply_update_from_map_position_BANG_ = (function placesurfer$edit$handlers$map$apply_update_from_map_position_BANG_(var_args){
var G__95036 = arguments.length;
switch (G__95036) {
case 1:
return placesurfer.edit.handlers.map.apply_update_from_map_position_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.edit.handlers.map.apply_update_from_map_position_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.handlers.map.apply_update_from_map_position_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (position){
return placesurfer.edit.handlers.map.apply_update_from_map_position_BANG_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url-draft?","url-draft?",-1516200338),true,new cljs.core.Keyword(null,"select-existing-row?","select-existing-row?",1789681293),true], null));
}));

(placesurfer.edit.handlers.map.apply_update_from_map_position_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (position,p__95037){
var map__95038 = p__95037;
var map__95038__$1 = cljs.core.__destructure_map(map__95038);
var url_draft_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__95038__$1,new cljs.core.Keyword(null,"url-draft?","url-draft?",-1516200338),true);
var select_existing_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__95038__$1,new cljs.core.Keyword(null,"select-existing-row?","select-existing-row?",1789681293),true);
placesurfer.app_ui.interface$.state.clear_update_status_BANG_();

var topic = new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(position);
var form = placesurfer.edit.handlers.map.position__GT_update_form(position);
var url_form = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword(null,"google-url","google-url",1168346589));
var lon = ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position) === 'number')?new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position):placesurfer.edit.interface$.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position)));
var lat = ((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position) === 'number')?new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position):placesurfer.edit.interface$.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,(function (s){
var country = placesurfer.app_ui.interface$.state.normalize_country_code((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"country-code","country-code",-927451124).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))) && ((!((new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(s) == null))))))?new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(s):null);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return "SE";
}
}
}
})());
var s__$1 = (function (){var G__95039 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688),topic),new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722),country),new cljs.core.Keyword(null,"update-form","update-form",475718790),form),new cljs.core.Keyword(null,"update-form-reset-token","update-form-reset-token",1427860817),cljs.core.inc);
var G__95039__$1 = (cljs.core.truth_(url_draft_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__95039,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),url_form):G__95039);
if(cljs.core.not(url_draft_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__95039__$1,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),null);
} else {
return G__95039__$1;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = select_existing_row_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((typeof lon === 'number') && (typeof lat === 'number'));
} else {
return and__5023__auto__;
}
})())){
var temp__5823__auto__ = placesurfer.edit.handlers.rows.find_display_row_in_state(s__$1,lon,lat);
if(cljs.core.truth_(temp__5823__auto__)){
var row = temp__5823__auto__;
return placesurfer.edit.handlers.rows.select_update_display_row(s__$1,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row),row);
} else {
return s__$1;
}
} else {
return s__$1;
}
}));

if(((typeof lon === 'number') && (((typeof lat === 'number') && (clojure.string.blank_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(position)))))))){
placesurfer.app_ui.interface$.effects.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lon,lat], 0));
} else {
}

return position;
}));

(placesurfer.edit.handlers.map.apply_update_from_map_position_BANG_.cljs$lang$maxFixedArity = 2);

placesurfer.edit.handlers.map.pick_update_position_from_map_BANG_ = (function placesurfer$edit$handlers$map$pick_update_position_from_map_BANG_(raw_position){
if(cljs.core.truth_(new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
var normalized = placesurfer.edit.handlers.map.normalize_map_position(raw_position);
var position = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(normalized,new cljs.core.Keyword(null,"topic","topic",-1960480691),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(normalized);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
}
})());
var lon = ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position) === 'number')?new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position):placesurfer.edit.interface$.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position)));
var lat = ((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position) === 'number')?new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position):placesurfer.edit.interface$.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(position))){
placesurfer.map_ui.interface$.close_all_popups_BANG_();

var temp__5823__auto__ = ((((typeof lon === 'number') && (typeof lat === 'number')))?placesurfer.edit.handlers.rows.find_display_row_in_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),lon,lat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)):null);
if(cljs.core.truth_(temp__5823__auto__)){
var row = temp__5823__auto__;
return placesurfer.edit.handlers.rows.toggle_update_row_BANG_(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row));
} else {
placesurfer.edit.handlers.map.apply_update_from_map_position_BANG_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url-draft?","url-draft?",-1516200338),false,new cljs.core.Keyword(null,"select-existing-row?","select-existing-row?",1789681293),false], null));

placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.edit.handlers.map.schedule_center_on_position_BANG_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delay-ms","delay-ms",-59253516),(0),new cljs.core.Keyword(null,"preserve-zoom?","preserve-zoom?",-1650190790),true], null));
}
} else {
return null;
}
} else {
return null;
}
});
placesurfer.edit.handlers.map.open_update_from_map_position_BANG_ = (function placesurfer$edit$handlers$map$open_update_from_map_position_BANG_(raw_position){
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(and__5023__auto__)){
return ((placesurfer.edit.handlers.map.map_page_QMARK_(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))) && (cljs.core.not(placesurfer.pin_ui.interface$.handlers.interaction.pin_map_position_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw_position], 0)))));
} else {
return and__5023__auto__;
}
})())){
var position = placesurfer.edit.handlers.map.normalize_map_position(raw_position);
if(cljs.core.truth_(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(position))){
placesurfer.map_ui.interface$.close_all_popups_BANG_();

var was_update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)));
placesurfer.edit.handlers.map.apply_update_from_map_position_BANG_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url-draft?","url-draft?",-1516200338),false,new cljs.core.Keyword(null,"select-existing-row?","select-existing-row?",1789681293),false], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"update","update",1045576396));

(placesurfer.edit.handlers.map.sync_marker_pick_handler_BANG_.cljs$core$IFn$_invoke$arity$0 ? placesurfer.edit.handlers.map.sync_marker_pick_handler_BANG_.cljs$core$IFn$_invoke$arity$0() : placesurfer.edit.handlers.map.sync_marker_pick_handler_BANG_.call(null));

placesurfer.app_ui.interface$.effects.render_BANG_();

if(was_update_QMARK_){
} else {
placesurfer.app_ui.interface$.effects.track_page_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update","update",1045576396)], 0));
}

placesurfer.app_ui.interface$.effects.reload_update_dataset_BANG_();

if(was_update_QMARK_){
return placesurfer.edit.handlers.map.schedule_center_on_position_BANG_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delay-ms","delay-ms",-59253516),(0)], null));
} else {
return placesurfer.edit.handlers.map.schedule_center_on_position_BANG_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delay-ms","delay-ms",-59253516),(120)], null));
}
} else {
return null;
}
} else {
return null;
}
});
placesurfer.edit.handlers.map.pick_map_position_from_map_BANG_ = (function placesurfer$edit$handlers$map$pick_map_position_from_map_BANG_(raw_position){
if(cljs.core.truth_(placesurfer.pin_ui.interface$.handlers.interaction.pin_map_position_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw_position], 0)))){
placesurfer.pin_ui.interface$.handlers.interaction.pick_pin_from_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw_position], 0));

return true;
} else {
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
var backend_QMARK_ = new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_((function (){var and__5023__auto__ = backend_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),page);
} else {
return and__5023__auto__;
}
})())){
placesurfer.edit.handlers.map.pick_update_position_from_map_BANG_(raw_position);

return true;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = backend_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((placesurfer.edit.handlers.map.map_page_QMARK_(page)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),page)));
} else {
return and__5023__auto__;
}
})())){
placesurfer.edit.handlers.map.open_update_from_map_position_BANG_(raw_position);

return true;
} else {
return false;

}
}
}
});
placesurfer.edit.handlers.map.exit_add_pin_mode_BANG_ = (function placesurfer$edit$handlers$map$exit_add_pin_mode_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-add-pin-mode?","update-add-pin-mode?",-2058851986),false);

return placesurfer.map_ui.interface$.sync_add_pin_mode_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),false], null));
});
placesurfer.edit.handlers.map.google_maps_search_url = (function placesurfer$edit$handlers$map$google_maps_search_url(latitude,longitude){
return ["https://www.google.com/maps/search/?api=1&query=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(latitude),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(longitude)].join('');
});
placesurfer.edit.handlers.map.add_pin_from_map_click_BANG_ = (function placesurfer$edit$handlers$map$add_pin_from_map_click_BANG_(p__95043){
var map__95044 = p__95043;
var map__95044__$1 = cljs.core.__destructure_map(map__95044);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95044__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95044__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
placesurfer.edit.handlers.map.exit_add_pin_mode_BANG_();

var new_id = placesurfer.pin_ui.interface$.handlers.editor.open_pin_editor_at_coords_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([longitude,latitude,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),placesurfer.edit.handlers.map.google_maps_search_url(latitude,longitude)], null)], 0));
return placesurfer.app_ui.interface$.effects.resolve_update_location_from_coordinates_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([longitude,latitude,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-country-match","on-country-match",-630752589),(function (_country,location,city){
var name = (function (){var or__5025__auto__ = ((cljs.core.seq(city))?city:null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.seq(location)){
return location;
} else {
return null;
}
}
})();
if(cljs.core.truth_(name)){
return placesurfer.pin_ui.interface$.handlers.rows.update_pin_name_address_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_id,name,location], 0));
} else {
return null;
}
})], null)], 0));
});
placesurfer.edit.handlers.map.toggle_add_pin_mode_BANG_ = (function placesurfer$edit$handlers$map$toggle_add_pin_mode_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"update-add-pin-mode?","update-add-pin-mode?",-2058851986).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
return placesurfer.edit.handlers.map.exit_add_pin_mode_BANG_();
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-add-pin-mode?","update-add-pin-mode?",-2058851986),true);

return placesurfer.map_ui.interface$.sync_add_pin_mode_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active?","active?",459499776),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),placesurfer.edit.handlers.map.add_pin_from_map_click_BANG_], null));
}
});
placesurfer.edit.handlers.map.sync_marker_pick_handler_BANG_ = (function placesurfer$edit$handlers$map$sync_marker_pick_handler_BANG_(){
return placesurfer.map_ui.interface$.set_marker_pick_handler_BANG_(placesurfer.edit.handlers.map.pick_map_position_from_map_BANG_);
});

//# sourceMappingURL=placesurfer.edit.handlers.map.js.map
