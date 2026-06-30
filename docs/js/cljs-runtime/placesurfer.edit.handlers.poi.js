goog.provide('placesurfer.edit.handlers.poi');
placesurfer.edit.handlers.poi.unit_to_meters = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"meter","meter",-187641611),(1),new cljs.core.Keyword(null,"kilometer","kilometer",1608390927),(1000),new cljs.core.Keyword(null,"yard","yard",386111495),0.9144,new cljs.core.Keyword(null,"mile","mile",1312871070),1609.344], null);
placesurfer.edit.handlers.poi.new_id = (function placesurfer$edit$handlers$poi$new_id(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
});
placesurfer.edit.handlers.poi.pin_items = (function placesurfer$edit$handlers$poi$pin_items(s){
return cljs.core.filterv((function (p1__64947_SHARP_){
return (!(cljs.core.contains_QMARK_(p1__64947_SHARP_,new cljs.core.Keyword(null,"separator","separator",-1628749125))));
}),new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY));
});
/**
 * Set default POI state on first activation: kilometer unit, first pin, 20km circle.
 */
placesurfer.edit.handlers.poi.init_poi_BANG_ = (function placesurfer$edit$handlers$poi$init_poi_BANG_(){
var s_64963 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"poi-initialized?","poi-initialized?",-2013326158).cljs$core$IFn$_invoke$arity$1(s_64963))){
} else {
var first_pin_id_64964 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(placesurfer.edit.handlers.poi.pin_items(s_64963)));
var default_circle_64965 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.edit.handlers.poi.new_id(),new cljs.core.Keyword(null,"radius","radius",-2073122258),"20"], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"poi-initialized?","poi-initialized?",-2013326158),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"poi-unit","poi-unit",-75120831),new cljs.core.Keyword(null,"kilometer","kilometer",1608390927),new cljs.core.Keyword(null,"poi-pin-id","poi-pin-id",-587886253),first_pin_id_64964,new cljs.core.Keyword(null,"poi-circles","poi-circles",-1320990364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_circle_64965], null),new cljs.core.Keyword(null,"poi-selected-id","poi-selected-id",-1965194480),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(default_circle_64965)], 0));
}

return (placesurfer.edit.handlers.poi.sync_poi_circles_BANG_.cljs$core$IFn$_invoke$arity$0 ? placesurfer.edit.handlers.poi.sync_poi_circles_BANG_.cljs$core$IFn$_invoke$arity$0() : placesurfer.edit.handlers.poi.sync_poi_circles_BANG_.call(null));
});
/**
 * Redraws POI circles on the current map based on app state.
 */
placesurfer.edit.handlers.poi.sync_poi_circles_BANG_ = (function placesurfer$edit$handlers$poi$sync_poi_circles_BANG_(){
var map__64949 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var map__64949__$1 = cljs.core.__destructure_map(map__64949);
var poi_pin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64949__$1,new cljs.core.Keyword(null,"poi-pin-id","poi-pin-id",-587886253));
var poi_circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64949__$1,new cljs.core.Keyword(null,"poi-circles","poi-circles",-1320990364));
var poi_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64949__$1,new cljs.core.Keyword(null,"poi-unit","poi-unit",-75120831));
var pin_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64949__$1,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100));
var multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(placesurfer.edit.handlers.poi.unit_to_meters,(function (){var or__5025__auto__ = poi_unit;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"meter","meter",-187641611);
}
})(),(1));
var pin = (cljs.core.truth_(poi_pin_id)?cljs.core.some((function (p1__64948_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__64948_SHARP_),poi_pin_id)){
return p1__64948_SHARP_;
} else {
return null;
}
}),pin_items):null);
var lng = new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(pin);
var lat = new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(pin);
if(((typeof lng === 'number') && (((typeof lat === 'number') && (cljs.core.seq(poi_circles)))))){
return placesurfer.map_ui.interface$.apply_poi_circles_BANG_(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__64950){
var map__64951 = p__64950;
var map__64951__$1 = cljs.core.__destructure_map(map__64951);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64951__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var r = parseFloat(cljs.core.str.cljs$core$IFn$_invoke$arity$1(radius));
if(((typeof r === 'number') && ((((r > (0))) && (cljs.core.not(isNaN(r))))))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"radius-meters","radius-meters",-1713314222),(r * multiplier)], null);
} else {
return null;
}
}),poi_circles));
} else {
return placesurfer.map_ui.interface$.clear_poi_circles_BANG_();
}
});
placesurfer.edit.handlers.poi.swap_render_sync_BANG_ = (function placesurfer$edit$handlers$poi$swap_render_sync_BANG_(f){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,f);

placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.edit.handlers.poi.sync_poi_circles_BANG_();
});
placesurfer.edit.handlers.poi.set_poi_unit_BANG_ = (function placesurfer$edit$handlers$poi$set_poi_unit_BANG_(unit){
return placesurfer.edit.handlers.poi.swap_render_sync_BANG_((function (p1__64952_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__64952_SHARP_,new cljs.core.Keyword(null,"poi-unit","poi-unit",-75120831),unit);
}));
});
placesurfer.edit.handlers.poi.set_poi_pin_id_BANG_ = (function placesurfer$edit$handlers$poi$set_poi_pin_id_BANG_(id){
return placesurfer.edit.handlers.poi.swap_render_sync_BANG_((function (p1__64953_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__64953_SHARP_,new cljs.core.Keyword(null,"poi-pin-id","poi-pin-id",-587886253),id);
}));
});
placesurfer.edit.handlers.poi.select_poi_circle_BANG_ = (function placesurfer$edit$handlers$poi$select_poi_circle_BANG_(id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"poi-selected-id","poi-selected-id",-1965194480),id);

return placesurfer.app_ui.interface$.effects.render_BANG_();
});
placesurfer.edit.handlers.poi.set_poi_draft_radius_BANG_ = (function placesurfer$edit$handlers$poi$set_poi_draft_radius_BANG_(s){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"poi-draft-radius","poi-draft-radius",-1102029982),s);

return placesurfer.app_ui.interface$.effects.render_BANG_();
});
placesurfer.edit.handlers.poi.valid_radius_QMARK_ = (function placesurfer$edit$handlers$poi$valid_radius_QMARK_(s){
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
var n = parseFloat(s);
return ((cljs.core.not(isNaN(n))) && ((n > (0))));
}
});
placesurfer.edit.handlers.poi.add_poi_circle_BANG_ = (function placesurfer$edit$handlers$poi$add_poi_circle_BANG_(){
var map__64955 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var map__64955__$1 = cljs.core.__destructure_map(map__64955);
var poi_draft_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64955__$1,new cljs.core.Keyword(null,"poi-draft-radius","poi-draft-radius",-1102029982));
var poi_editing_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64955__$1,new cljs.core.Keyword(null,"poi-editing-id","poi-editing-id",725164771));
if(cljs.core.truth_((function (){var and__5023__auto__ = (poi_editing_id == null);
if(and__5023__auto__){
return placesurfer.edit.handlers.poi.valid_radius_QMARK_(poi_draft_radius);
} else {
return and__5023__auto__;
}
})())){
var new_row = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.edit.handlers.poi.new_id(),new cljs.core.Keyword(null,"radius","radius",-2073122258),clojure.string.trim(poi_draft_radius)], null);
return placesurfer.edit.handlers.poi.swap_render_sync_BANG_((function (p1__64954_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__64954_SHARP_,new cljs.core.Keyword(null,"poi-circles","poi-circles",-1320990364),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new_row),new cljs.core.Keyword(null,"poi-draft-radius","poi-draft-radius",-1102029982),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"poi-selected-id","poi-selected-id",-1965194480),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_row)], 0));
}));
} else {
return null;
}
});
placesurfer.edit.handlers.poi.start_poi_circle_edit_BANG_ = (function placesurfer$edit$handlers$poi$start_poi_circle_edit_BANG_(id){
var circle = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64956_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__64956_SHARP_));
}),new cljs.core.Keyword(null,"poi-circles","poi-circles",-1320990364).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),cljs.core.PersistentVector.EMPTY)));
if(cljs.core.truth_(circle)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"poi-selected-id","poi-selected-id",-1965194480),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"poi-editing-id","poi-editing-id",725164771),id,new cljs.core.Keyword(null,"poi-draft-radius","poi-draft-radius",-1102029982),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$2(circle,"")], 0));

return placesurfer.app_ui.interface$.effects.render_BANG_();
} else {
return null;
}
});
placesurfer.edit.handlers.poi.confirm_poi_circle_edit_BANG_ = (function placesurfer$edit$handlers$poi$confirm_poi_circle_edit_BANG_(){
var map__64958 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var map__64958__$1 = cljs.core.__destructure_map(map__64958);
var poi_editing_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64958__$1,new cljs.core.Keyword(null,"poi-editing-id","poi-editing-id",725164771));
var poi_draft_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64958__$1,new cljs.core.Keyword(null,"poi-draft-radius","poi-draft-radius",-1102029982));
if(cljs.core.truth_((function (){var and__5023__auto__ = poi_editing_id;
if(cljs.core.truth_(and__5023__auto__)){
return placesurfer.edit.handlers.poi.valid_radius_QMARK_(poi_draft_radius);
} else {
return and__5023__auto__;
}
})())){
return placesurfer.edit.handlers.poi.swap_render_sync_BANG_((function (p1__64957_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__64957_SHARP_,new cljs.core.Keyword(null,"poi-circles","poi-circles",-1320990364),(function (rows){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(poi_editing_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"radius","radius",-2073122258),clojure.string.trim(poi_draft_radius));
} else {
return r;
}
}),(function (){var or__5025__auto__ = rows;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
})),new cljs.core.Keyword(null,"poi-draft-radius","poi-draft-radius",-1102029982),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"poi-editing-id","poi-editing-id",725164771),null], 0));
}));
} else {
return null;
}
});
placesurfer.edit.handlers.poi.delete_poi_circle_BANG_ = (function placesurfer$edit$handlers$poi$delete_poi_circle_BANG_(id){
return placesurfer.edit.handlers.poi.swap_render_sync_BANG_((function (p1__64959_SHARP_){
var G__64960 = (function (){var G__64961 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__64959_SHARP_,new cljs.core.Keyword(null,"poi-circles","poi-circles",-1320990364),(function (rows){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(r));
}),(function (){var or__5025__auto__ = rows;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
}));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"poi-selected-id","poi-selected-id",-1965194480).cljs$core$IFn$_invoke$arity$1(p1__64959_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64961,new cljs.core.Keyword(null,"poi-selected-id","poi-selected-id",-1965194480),null);
} else {
return G__64961;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"poi-editing-id","poi-editing-id",725164771).cljs$core$IFn$_invoke$arity$1(p1__64959_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__64960,new cljs.core.Keyword(null,"poi-editing-id","poi-editing-id",725164771),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"poi-draft-radius","poi-draft-radius",-1102029982),""], 0));
} else {
return G__64960;
}
}));
});
placesurfer.edit.handlers.poi.reorder_poi_circle_BANG_ = (function placesurfer$edit$handlers$poi$reorder_poi_circle_BANG_(drag_id,to_index){
var rows = cljs.core.vec(new cljs.core.Keyword(null,"poi-circles","poi-circles",-1320990364).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),cljs.core.PersistentVector.EMPTY));
var from_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(r))){
return i;
} else {
return null;
}
}),rows));
if((((!((from_index == null)))) && ((((!((to_index == null)))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_index,to_index)) && ((((to_index >= (0))) && ((to_index < cljs.core.count(rows))))))))))){
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,from_index);
var without = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(rows,(0),from_index),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(rows,(from_index + (1))));
var next_rows = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(without,(0),to_index),cljs.core.cons(item,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(without,to_index)));
return placesurfer.edit.handlers.poi.swap_render_sync_BANG_((function (p1__64962_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__64962_SHARP_,new cljs.core.Keyword(null,"poi-circles","poi-circles",-1320990364),next_rows);
}));
} else {
return null;
}
});
placesurfer.edit.handlers.poi.submit_poi_draft_BANG_ = (function placesurfer$edit$handlers$poi$submit_poi_draft_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"poi-editing-id","poi-editing-id",725164771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
return placesurfer.edit.handlers.poi.confirm_poi_circle_edit_BANG_();
} else {
return placesurfer.edit.handlers.poi.add_poi_circle_BANG_();
}
});
placesurfer.edit.handlers.poi.poi_submit_enabled_QMARK_ = (function placesurfer$edit$handlers$poi$poi_submit_enabled_QMARK_(state){
return placesurfer.edit.handlers.poi.valid_radius_QMARK_(new cljs.core.Keyword(null,"poi-draft-radius","poi-draft-radius",-1102029982).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=placesurfer.edit.handlers.poi.js.map
