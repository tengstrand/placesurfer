goog.provide('placesurfer.map_ui.core');
placesurfer.map_ui.core.style_url = "https://tiles.openfreemap.org/styles/liberty";
placesurfer.map_ui.core.default_view = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [15.0,62.0], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(4)], null);
placesurfer.map_ui.core.fit_padding = (56);
placesurfer.map_ui.core.fit_max_zoom = (8);
placesurfer.map_ui.core.fit_animate_duration_ms = (700);
placesurfer.map_ui.core.center_fly_duration_ms = (700);
placesurfer.map_ui.core.center_default_zoom = (14);
placesurfer.map_ui.core.hover_close_delay_ms = (80);
placesurfer.map_ui.core.marker_z_index_default = "3";
placesurfer.map_ui.core.marker_z_index_active = "5";
placesurfer.map_ui.core.marker_z_index_row_hover = "6";
placesurfer.map_ui.core.popup_z_index = "100";
placesurfer.map_ui.core.marker_row_hover_class = "placesurfer-marker--row-hover";
placesurfer.map_ui.core.marker_map_hover_class = "placesurfer-marker--map-hover";
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_map !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_map_container !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_map_container = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_resize_observer !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_resize_observer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_markers !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_markers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_dense_markers !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_dense_markers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_dense_positions !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_dense_positions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_dense_popup_opts !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_dense_popup_opts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_dense_viewport_timer !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_dense_viewport_timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
placesurfer.map_ui.core.dense_topics = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bus-stop","bus-stop",-783311751),null], null), null);
placesurfer.map_ui.core.dense_topic_max_count = (1000);
placesurfer.map_ui.core.dense_viewport_debounce_ms = (200);
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_hover_popup !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_hover_popup = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_marker_pick_handler !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_marker_pick_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_on_marker_click !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_on_marker_click = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_on_marker_delete !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_on_marker_delete = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_on_marker_edit !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_on_marker_edit = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_country_pick_active_QMARK_ !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_country_pick_active_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_country_pick_click_handler !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_country_pick_click_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_ !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_add_pin_click_handler !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_add_pin_click_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_pending_state !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_pending_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_row_hover_match !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_row_hover_match = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_row_hover_debounce_timer !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_row_hover_debounce_timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
placesurfer.map_ui.core.row_hover_debounce_ms = (120);

placesurfer.map_ui.core.mock_map_QMARK_ = (function placesurfer$map_ui$core$mock_map_QMARK_(m){
return m.placesurferMockMap === true;
});
placesurfer.map_ui.core.map_ready_QMARK_ = (function placesurfer$map_ui$core$map_ready_QMARK_(m){
if((m == null)){
return false;
} else {
if(placesurfer.map_ui.core.mock_map_QMARK_(m)){
return true;
} else {
var or__5025__auto__ = (function (){try{return m.loaded() === true;
}catch (e20048){var _ = e20048;
return false;
}})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
try{return m.isStyleLoaded() === true;
}catch (e20055){var _ = e20055;
return false;
}}

}
}
});
placesurfer.map_ui.core.safe_resize_BANG_ = (function placesurfer$map_ui$core$safe_resize_BANG_(m){
if(cljs.core.truth_(m)){
try{return m.resize();
}catch (e20060){var _ = e20060;
return null;
}} else {
return null;
}
});
placesurfer.map_ui.core.map_attached_QMARK_ = (function placesurfer$map_ui$core$map_attached_QMARK_(m,el){
try{var and__5023__auto__ = m;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = el;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,m.getContainer());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}catch (e20067){var _ = e20067;
return false;
}});
placesurfer.map_ui.core.marker_style_for = (function placesurfer$map_ui$core$marker_style_for(topic){
return placesurfer.map_ui.markers.style_for_topic(topic);
});
placesurfer.map_ui.core.marker_url_for = (function placesurfer$map_ui$core$marker_url_for(topic){
return placesurfer.map_ui.markers.url_for_topic(topic);
});
placesurfer.map_ui.core.draft_marker_QMARK_ = (function placesurfer$map_ui$core$draft_marker_QMARK_(position){
return new cljs.core.Keyword(null,"draft?","draft?",-874288372).cljs$core$IFn$_invoke$arity$1(position) === true;
});
placesurfer.map_ui.core.draft_url_pin_QMARK_ = (function placesurfer$map_ui$core$draft_url_pin_QMARK_(position){
return ((placesurfer.map_ui.core.draft_marker_QMARK_(position)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url-pin","url-pin",924738382),new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154).cljs$core$IFn$_invoke$arity$1(position))));
});
placesurfer.map_ui.core.marker_pick_enabled_QMARK_ = (function placesurfer$map_ui$core$marker_pick_enabled_QMARK_(position){
return (((!(placesurfer.map_ui.core.draft_marker_QMARK_(position)))) || (placesurfer.map_ui.core.draft_url_pin_QMARK_(position)));
});
placesurfer.map_ui.core.img_marker_QMARK_ = (function placesurfer$map_ui$core$img_marker_QMARK_(topic){
return placesurfer.map_ui.markers.img_marker_QMARK_(topic);
});
placesurfer.map_ui.core.marker_transform_origin = (function placesurfer$map_ui$core$marker_transform_origin(anchor){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anchor,"center")){
return "center center";
} else {
return "center bottom";
}
});
placesurfer.map_ui.core.marker_visual_el = (function placesurfer$map_ui$core$marker_visual_el(root_el){
if(cljs.core.truth_(root_el)){
return root_el.querySelector(".placesurfer-marker__visual");
} else {
return null;
}
});
placesurfer.map_ui.core.marker_visual_el_from_marker = (function placesurfer$map_ui$core$marker_visual_el_from_marker(marker){
var G__20074 = (function (){try{return marker.getElement();
}catch (e20075){var _ = e20075;
return null;
}})();
if((G__20074 == null)){
return null;
} else {
return placesurfer.map_ui.core.marker_visual_el(G__20074);
}
});
placesurfer.map_ui.core.marker_element = (function placesurfer$map_ui$core$marker_element(var_args){
var G__20077 = arguments.length;
switch (G__20077) {
case 1:
return placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$1 = (function (topic){
return placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(topic,null,null);
}));

(placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2 = (function (topic,image_url_override){
return placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(topic,image_url_override,null);
}));

(placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3 = (function (topic,image_url_override,anchor_override){
var el = document.createElement("div");
var visual = document.createElement("div");
var map__20078 = placesurfer.map_ui.core.marker_style_for(topic);
var map__20078__$1 = cljs.core.__destructure_map(map__20078);
var width_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20078__$1,new cljs.core.Keyword(null,"width-px","width-px",65122451));
var height_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20078__$1,new cljs.core.Keyword(null,"height-px","height-px",-1391665005));
var background_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20078__$1,new cljs.core.Keyword(null,"background-position","background-position",1112702746));
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20078__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var anchor__$1 = (function (){var or__5025__auto__ = anchor_override;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return anchor;
}
})();
var image_url = (function (){var or__5025__auto__ = image_url_override;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.map_ui.core.marker_url_for(topic);
}
})();
var img_QMARK_ = placesurfer.map_ui.core.img_marker_QMARK_(topic);
el.classList.add("maplibregl-marker","placesurfer-marker");

visual.classList.add("placesurfer-marker__visual");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"url-pin","url-pin",924738382))){
el.classList.add("placesurfer-marker--url-pin");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"location","location",1815599388))){
el.classList.add("placesurfer-marker--location");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"pin","pin",-2111774834))){
el.classList.add("placesurfer-marker--pin");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"removed","removed",609626430))){
el.classList.add("placesurfer-marker--removed");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"hemnet-result","hemnet-result",1768285020))){
el.classList.add("placesurfer-marker--hemnet-result");
} else {
}

(el.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width_px),"px"].join(''));

(el.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height_px),"px"].join(''));

(el.style.lineHeight = "0");

(el.style.backgroundColor = "transparent");

(el.style.cursor = "pointer");

(el.style.overflow = "visible");

(visual.style.width = "100%");

(visual.style.height = "100%");

(visual.style.lineHeight = "0");

(visual.style.transformOrigin = placesurfer.map_ui.core.marker_transform_origin(anchor__$1));

(visual.style.transition = "transform 120ms ease-out, opacity 120ms ease-out");

if(img_QMARK_){
(el.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);

var img_20489 = document.createElement("img");
(img_20489.src = image_url);

(img_20489.alt = "");

(img_20489.draggable = false);

(img_20489.style.width = "100%");

(img_20489.style.height = "100%");

(img_20489.style.display = "block");

(img_20489.style.pointerEvents = "none");

visual.appendChild(img_20489);
} else {
}

if(img_QMARK_){
} else {
(visual.style.backgroundImage = ["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_url),"')"].join(''));

(visual.style.backgroundSize = "contain");

(visual.style.backgroundRepeat = "no-repeat");

(visual.style.backgroundPosition = background_position);
}

el.appendChild(visual);

return el;
}));

(placesurfer.map_ui.core.marker_element.cljs$lang$maxFixedArity = 3);

placesurfer.map_ui.core.clear_markers_in_BANG_ = (function placesurfer$map_ui$core$clear_markers_in_BANG_(markers_atom){
var seq__20079_20491 = cljs.core.seq(cljs.core.deref(markers_atom));
var chunk__20080_20492 = null;
var count__20081_20493 = (0);
var i__20082_20494 = (0);
while(true){
if((i__20082_20494 < count__20081_20493)){
var marker_20495 = chunk__20080_20492.cljs$core$IIndexed$_nth$arity$2(null,i__20082_20494);
try{marker_20495.remove();
}catch (e20085){var __20496 = e20085;
}

var G__20497 = seq__20079_20491;
var G__20498 = chunk__20080_20492;
var G__20499 = count__20081_20493;
var G__20500 = (i__20082_20494 + (1));
seq__20079_20491 = G__20497;
chunk__20080_20492 = G__20498;
count__20081_20493 = G__20499;
i__20082_20494 = G__20500;
continue;
} else {
var temp__5823__auto___20501 = cljs.core.seq(seq__20079_20491);
if(temp__5823__auto___20501){
var seq__20079_20502__$1 = temp__5823__auto___20501;
if(cljs.core.chunked_seq_QMARK_(seq__20079_20502__$1)){
var c__5548__auto___20503 = cljs.core.chunk_first(seq__20079_20502__$1);
var G__20504 = cljs.core.chunk_rest(seq__20079_20502__$1);
var G__20505 = c__5548__auto___20503;
var G__20506 = cljs.core.count(c__5548__auto___20503);
var G__20507 = (0);
seq__20079_20491 = G__20504;
chunk__20080_20492 = G__20505;
count__20081_20493 = G__20506;
i__20082_20494 = G__20507;
continue;
} else {
var marker_20508 = cljs.core.first(seq__20079_20502__$1);
try{marker_20508.remove();
}catch (e20086){var __20509 = e20086;
}

var G__20510 = cljs.core.next(seq__20079_20502__$1);
var G__20511 = null;
var G__20512 = (0);
var G__20513 = (0);
seq__20079_20491 = G__20510;
chunk__20080_20492 = G__20511;
count__20081_20493 = G__20512;
i__20082_20494 = G__20513;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(markers_atom,cljs.core.PersistentVector.EMPTY);
});
placesurfer.map_ui.core.clear_markers_BANG_ = (function placesurfer$map_ui$core$clear_markers_BANG_(){
placesurfer.map_ui.core.clear_markers_in_BANG_(placesurfer.map_ui.core._BANG_markers);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_hover_popup,null);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_row_hover_match,null);
});
placesurfer.map_ui.core.clear_dense_markers_BANG_ = (function placesurfer$map_ui$core$clear_dense_markers_BANG_(){
return placesurfer.map_ui.core.clear_markers_in_BANG_(placesurfer.map_ui.core._BANG_dense_markers);
});
placesurfer.map_ui.core.position_topic = (function placesurfer$map_ui$core$position_topic(p__20087){
var map__20088 = p__20087;
var map__20088__$1 = cljs.core.__destructure_map(map__20088);
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20088__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20088__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var or__5025__auto__ = marker_topic;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return topic;
}
});
placesurfer.map_ui.core.transit_marker_topics = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bus-stop","bus-stop",-783311751),null,new cljs.core.Keyword(null,"train-station","train-station",792128606),null], null), null);
placesurfer.map_ui.core.open_transit_departures_BANG_ = (function placesurfer$map_ui$core$open_transit_departures_BANG_(departures_url,transit_destination){
return window.open(placesurfer.map_ui.popup.departures_url_with_destination(departures_url,transit_destination),"_blank","noopener,noreferrer");
});
placesurfer.map_ui.core.dense_topic_position_QMARK_ = (function placesurfer$map_ui$core$dense_topic_position_QMARK_(position){
return cljs.core.contains_QMARK_(placesurfer.map_ui.core.dense_topics,placesurfer.map_ui.core.position_topic(position));
});
/**
 * Split `positions` into [stable dense], where dense is whatever belongs to
 * a topic in `dense-topics`. Order within each group is preserved.
 */
placesurfer.map_ui.core.partition_dense_positions = (function placesurfer$map_ui$core$partition_dense_positions(positions){
var grouped = cljs.core.group_by(placesurfer.map_ui.core.dense_topic_position_QMARK_,positions);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(grouped,false,cljs.core.PersistentVector.EMPTY),cljs.core.get.cljs$core$IFn$_invoke$arity$3(grouped,true,cljs.core.PersistentVector.EMPTY)], null);
});
placesurfer.map_ui.core.position_in_bounds_QMARK_ = (function placesurfer$map_ui$core$position_in_bounds_QMARK_(bounds,p__20089){
var map__20090 = p__20089;
var map__20090__$1 = cljs.core.__destructure_map(map__20090);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20090__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20090__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var and__5023__auto__ = typeof longitude === 'number';
if(and__5023__auto__){
var and__5023__auto____$1 = typeof latitude === 'number';
if(and__5023__auto____$1){
try{return bounds.contains([longitude,latitude]) === true;
}catch (e20091){var _ = e20091;
return false;
}} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
/**
 * Which of `positions` (all belonging to a dense topic) should actually get
 * a marker right now: the ones inside the map's current on-screen bounds,
 * but only when that in-bounds count is at or below
 * `dense-topic-max-count` - above it, none render at all (rather than some
 * arbitrary subset), so panning/zooming to actually bring the count down is
 * what reveals them, not a silent partial render.
 */
placesurfer.map_ui.core.dense_positions_for_viewport = (function placesurfer$map_ui$core$dense_positions_for_viewport(m,positions){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.seq(positions);
if(and__5023__auto__){
return placesurfer.map_ui.core.map_ready_QMARK_(m);
} else {
return and__5023__auto__;
}
})())){
var temp__5821__auto__ = (function (){try{return m.getBounds();
}catch (e20093){var _ = e20093;
return null;
}})();
if(cljs.core.truth_(temp__5821__auto__)){
var bounds = temp__5821__auto__;
var in_bounds = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20092_SHARP_){
return placesurfer.map_ui.core.position_in_bounds_QMARK_(bounds,p1__20092_SHARP_);
}),positions);
if((cljs.core.count(in_bounds) <= placesurfer.map_ui.core.dense_topic_max_count)){
return cljs.core.vec(in_bounds);
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
placesurfer.map_ui.core.draw_src = "placesurfer-draw";
placesurfer.map_ui.core.draw_fill = "placesurfer-draw-fill";
placesurfer.map_ui.core.draw_line = "placesurfer-draw-line";
placesurfer.map_ui.core.draw_vtx = "placesurfer-draw-vertex";
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_active_QMARK_ !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_active_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_page_active_QMARK_ !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_page_active_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_color !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_color = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"r","r",-471384190),(255),new cljs.core.Keyword(null,"g","g",1738089905),(69),new cljs.core.Keyword(null,"b","b",1482224470),(0),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(0),new cljs.core.Keyword(null,"opacity","opacity",397153780),(35)], null));
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_ring !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_ring = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_polygons !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_polygons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_drag !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_drag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_hover_v !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_hover_v = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_skip_click_QMARK_ !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_skip_click_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_click_fn !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_click_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_mm_fn !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_mm_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_md_fn !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_md_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_mu_fn !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_mu_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_on_save !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_on_save = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_on_map_ready !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_on_map_ready = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_t !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_t = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (k){
return cljs.core.name(k);
}));
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_ref_images !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_ref_images = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_ref_els !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_ref_els = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_ref_adjust_id !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_ref_adjust_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_ref_visible_QMARK_ !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_ref_visible_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_ref_container !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_ref_container = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_ref_move_fn !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_ref_move_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_ref_on_change !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_ref_on_change = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_ref_on_paste !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_ref_on_paste = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
placesurfer.map_ui.core.ref_container_BANG_ = (function placesurfer$map_ui$core$ref_container_BANG_(m){
var or__5025__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_ref_container);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var el = document.createElement("div");
(el.className = "placesurfer-ref-images");

var seq__20094_20521 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["overflow","hidden"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pointerEvents","none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zIndex","1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display",(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_visible_QMARK_))?"block":"none")], null)], null));
var chunk__20095_20522 = null;
var count__20096_20523 = (0);
var i__20097_20524 = (0);
while(true){
if((i__20097_20524 < count__20096_20523)){
var vec__20104_20525 = chunk__20095_20522.cljs$core$IIndexed$_nth$arity$2(null,i__20097_20524);
var k_20526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20104_20525,(0),null);
var v_20527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20104_20525,(1),null);
(el.style[k_20526] = v_20527);


var G__20528 = seq__20094_20521;
var G__20529 = chunk__20095_20522;
var G__20530 = count__20096_20523;
var G__20531 = (i__20097_20524 + (1));
seq__20094_20521 = G__20528;
chunk__20095_20522 = G__20529;
count__20096_20523 = G__20530;
i__20097_20524 = G__20531;
continue;
} else {
var temp__5823__auto___20532 = cljs.core.seq(seq__20094_20521);
if(temp__5823__auto___20532){
var seq__20094_20533__$1 = temp__5823__auto___20532;
if(cljs.core.chunked_seq_QMARK_(seq__20094_20533__$1)){
var c__5548__auto___20535 = cljs.core.chunk_first(seq__20094_20533__$1);
var G__20536 = cljs.core.chunk_rest(seq__20094_20533__$1);
var G__20537 = c__5548__auto___20535;
var G__20538 = cljs.core.count(c__5548__auto___20535);
var G__20539 = (0);
seq__20094_20521 = G__20536;
chunk__20095_20522 = G__20537;
count__20096_20523 = G__20538;
i__20097_20524 = G__20539;
continue;
} else {
var vec__20107_20540 = cljs.core.first(seq__20094_20533__$1);
var k_20541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20107_20540,(0),null);
var v_20542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20107_20540,(1),null);
(el.style[k_20541] = v_20542);


var G__20546 = cljs.core.next(seq__20094_20533__$1);
var G__20547 = null;
var G__20549 = (0);
var G__20550 = (0);
seq__20094_20521 = G__20546;
chunk__20095_20522 = G__20547;
count__20096_20523 = G__20549;
i__20097_20524 = G__20550;
continue;
}
} else {
}
}
break;
}

m.getContainer().appendChild(el);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_ref_container,el);

return el;
}
});
/**
 * Project geographic bounds to a pixel box {:x :y :w :h} on map `m`.
 */
placesurfer.map_ui.core.ref_bounds__GT_box = (function placesurfer$map_ui$core$ref_bounds__GT_box(m,p__20110){
var map__20111 = p__20110;
var map__20111__$1 = cljs.core.__destructure_map(map__20111);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20111__$1,new cljs.core.Keyword(null,"west","west",708776677));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20111__$1,new cljs.core.Keyword(null,"north","north",651323902));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20111__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20111__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var p1 = m.project(({"lng": west, "lat": north}));
var p2 = m.project(({"lng": east, "lat": south}));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),p1.x,new cljs.core.Keyword(null,"y","y",-1757859776),p1.y,new cljs.core.Keyword(null,"w","w",354169001),Math.max((1),(p2.x - p1.x)),new cljs.core.Keyword(null,"h","h",1109658740),Math.max((1),(p2.y - p1.y))], null);
});
placesurfer.map_ui.core.ref_box__GT_bounds = (function placesurfer$map_ui$core$ref_box__GT_bounds(m,p__20112){
var map__20113 = p__20112;
var map__20113__$1 = cljs.core.__destructure_map(map__20113);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20113__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20113__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20113__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20113__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var ll1 = m.unproject([x,y]);
var ll2 = m.unproject([(x + w),(y + h)]);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"west","west",708776677),ll1.lng,new cljs.core.Keyword(null,"north","north",651323902),ll1.lat,new cljs.core.Keyword(null,"east","east",1189821678),ll2.lng,new cljs.core.Keyword(null,"south","south",1586796293),ll2.lat], null);
});
/**
 * Translate pixel box by a mouse delta.
 */
placesurfer.map_ui.core.moved_box = (function placesurfer$map_ui$core$moved_box(p__20114,dx,dy){
var map__20115 = p__20114;
var map__20115__$1 = cljs.core.__destructure_map(map__20115);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20115__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20115__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20115__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20115__$1,new cljs.core.Keyword(null,"h","h",1109658740));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + dy),new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h], null);
});
/**
 * Scale pixel box by dragging `corner` (:nw :ne :sw :se) with mouse delta,
 * keeping the opposite corner fixed and preserving aspect ratio.
 */
placesurfer.map_ui.core.scaled_box = (function placesurfer$map_ui$core$scaled_box(p__20116,corner,dx,dy){
var map__20117 = p__20116;
var map__20117__$1 = cljs.core.__destructure_map(map__20117);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20117__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20117__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20117__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20117__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var aspect = (h / w);
var vec__20118 = (function (){var G__20121 = corner;
var G__20121__$1 = (((G__20121 instanceof cljs.core.Keyword))?G__20121.fqn:null);
switch (G__20121__$1) {
case "nw":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),(y + h)], null);

break;
case "ne":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null);

break;
case "sw":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null);

break;
case "se":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20121__$1)].join('')));

}
})();
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20118,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20118,(1),null);
var cx = (function (){var G__20122 = corner;
var G__20122__$1 = (((G__20122 instanceof cljs.core.Keyword))?G__20122.fqn:null);
switch (G__20122__$1) {
case "nw":
case "sw":
return (x + dx);

break;
case "ne":
case "se":
return ((x + w) + dx);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20122__$1)].join('')));

}
})();
var cy = (function (){var G__20123 = corner;
var G__20123__$1 = (((G__20123 instanceof cljs.core.Keyword))?G__20123.fqn:null);
switch (G__20123__$1) {
case "nw":
case "ne":
return (y + dy);

break;
case "sw":
case "se":
return ((y + h) + dy);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20123__$1)].join('')));

}
})();
var nw_SINGLEQUOTE_ = Math.max((20),Math.abs((cx - ax)),(Math.abs((cy - ay)) / aspect));
var nh_SINGLEQUOTE_ = (nw_SINGLEQUOTE_ * aspect);
var G__20124 = corner;
var G__20124__$1 = (((G__20124 instanceof cljs.core.Keyword))?G__20124.fqn:null);
switch (G__20124__$1) {
case "nw":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(ax - nw_SINGLEQUOTE_),new cljs.core.Keyword(null,"y","y",-1757859776),(ay - nh_SINGLEQUOTE_),new cljs.core.Keyword(null,"w","w",354169001),nw_SINGLEQUOTE_,new cljs.core.Keyword(null,"h","h",1109658740),nh_SINGLEQUOTE_], null);

break;
case "ne":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),ax,new cljs.core.Keyword(null,"y","y",-1757859776),(ay - nh_SINGLEQUOTE_),new cljs.core.Keyword(null,"w","w",354169001),nw_SINGLEQUOTE_,new cljs.core.Keyword(null,"h","h",1109658740),nh_SINGLEQUOTE_], null);

break;
case "sw":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(ax - nw_SINGLEQUOTE_),new cljs.core.Keyword(null,"y","y",-1757859776),ay,new cljs.core.Keyword(null,"w","w",354169001),nw_SINGLEQUOTE_,new cljs.core.Keyword(null,"h","h",1109658740),nh_SINGLEQUOTE_], null);

break;
case "se":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),ax,new cljs.core.Keyword(null,"y","y",-1757859776),ay,new cljs.core.Keyword(null,"w","w",354169001),nw_SINGLEQUOTE_,new cljs.core.Keyword(null,"h","h",1109658740),nh_SINGLEQUOTE_], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20124__$1)].join('')));

}
});
/**
 * Resize one dimension by dragging an edge midpoint handle (:n :s :e :w),
 * keeping the opposite edge fixed.
 */
placesurfer.map_ui.core.edge_resized_box = (function placesurfer$map_ui$core$edge_resized_box(p__20125,edge,dx,dy){
var map__20126 = p__20125;
var map__20126__$1 = cljs.core.__destructure_map(map__20126);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20126__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20126__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20126__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20126__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var G__20127 = edge;
var G__20127__$1 = (((G__20127 instanceof cljs.core.Keyword))?G__20127.fqn:null);
switch (G__20127__$1) {
case "n":
var nh = Math.max((20),(h - dy));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + h) - nh),new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),nh], null);

break;
case "s":
var nh = Math.max((20),(h + dy));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),nh], null);

break;
case "w":
var nw_SINGLEQUOTE_ = Math.max((20),(w - dx));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((x + w) - nw_SINGLEQUOTE_),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),nw_SINGLEQUOTE_,new cljs.core.Keyword(null,"h","h",1109658740),h], null);

break;
case "e":
var nw_SINGLEQUOTE_ = Math.max((20),(w + dx));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),nw_SINGLEQUOTE_,new cljs.core.Keyword(null,"h","h",1109658740),h], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20127__$1)].join('')));

}
});
placesurfer.map_ui.core.apply_ref_box_BANG_ = (function placesurfer$map_ui$core$apply_ref_box_BANG_(el,p__20128){
var map__20129 = p__20128;
var map__20129__$1 = cljs.core.__destructure_map(map__20129);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20129__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20129__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20129__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20129__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var style = el.style;
(style.transform = ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join(''));

(style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join(''));

return (style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''));
});
placesurfer.map_ui.core.position_ref_images_BANG_ = (function placesurfer$map_ui$core$position_ref_images_BANG_(m){
var seq__20130 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var chunk__20131 = null;
var count__20132 = (0);
var i__20133 = (0);
while(true){
if((i__20133 < count__20132)){
var map__20136 = chunk__20131.cljs$core$IIndexed$_nth$arity$2(null,i__20133);
var map__20136__$1 = cljs.core.__destructure_map(map__20136);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20136__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20136__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var temp__5823__auto___20565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id);
if(cljs.core.truth_(temp__5823__auto___20565)){
var el_20566 = temp__5823__auto___20565;
placesurfer.map_ui.core.apply_ref_box_BANG_(el_20566,placesurfer.map_ui.core.ref_bounds__GT_box(m,bounds));
} else {
}


var G__20567 = seq__20130;
var G__20568 = chunk__20131;
var G__20569 = count__20132;
var G__20570 = (i__20133 + (1));
seq__20130 = G__20567;
chunk__20131 = G__20568;
count__20132 = G__20569;
i__20133 = G__20570;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20130);
if(temp__5823__auto__){
var seq__20130__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20130__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20130__$1);
var G__20572 = cljs.core.chunk_rest(seq__20130__$1);
var G__20573 = c__5548__auto__;
var G__20574 = cljs.core.count(c__5548__auto__);
var G__20575 = (0);
seq__20130 = G__20572;
chunk__20131 = G__20573;
count__20132 = G__20574;
i__20133 = G__20575;
continue;
} else {
var map__20137 = cljs.core.first(seq__20130__$1);
var map__20137__$1 = cljs.core.__destructure_map(map__20137);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20137__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20137__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var temp__5823__auto___20576__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id);
if(cljs.core.truth_(temp__5823__auto___20576__$1)){
var el_20577 = temp__5823__auto___20576__$1;
placesurfer.map_ui.core.apply_ref_box_BANG_(el_20577,placesurfer.map_ui.core.ref_bounds__GT_box(m,bounds));
} else {
}


var G__20583 = cljs.core.next(seq__20130__$1);
var G__20584 = null;
var G__20585 = (0);
var G__20586 = (0);
seq__20130 = G__20583;
chunk__20131 = G__20584;
count__20132 = G__20585;
i__20133 = G__20586;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.map_ui.core.ensure_ref_move_listener_BANG_ = (function placesurfer$map_ui$core$ensure_ref_move_listener_BANG_(m){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_move_fn))){
return null;
} else {
var f = (function (_){
return placesurfer.map_ui.core.position_ref_images_BANG_(m);
});
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_ref_move_fn,f);

m.on("move",f);

return m.on("resize",f);
}
});
placesurfer.map_ui.core.start_ref_drag_BANG_ = (function placesurfer$map_ui$core$start_ref_drag_BANG_(m,id,e,mode){
e.preventDefault();

e.stopPropagation();

var start_x = e.clientX;
var start_y = e.clientY;
var img = cljs.core.some((function (p1__20138_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20138_SHARP_),id)){
return p1__20138_SHARP_;
} else {
return null;
}
}),cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id);
var box0 = placesurfer.map_ui.core.ref_bounds__GT_box(m,new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(img));
var _BANG_last = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(box0);
var on_move = (function (ev){
ev.preventDefault();

var dx = (ev.clientX - start_x);
var dy = (ev.clientY - start_y);
var box = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),mode))?placesurfer.map_ui.core.moved_box(box0,dx,dy):(cljs.core.truth_((function (){var fexpr__20140 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"s","s",1705939918),null], null), null);
return (fexpr__20140.cljs$core$IFn$_invoke$arity$1 ? fexpr__20140.cljs$core$IFn$_invoke$arity$1(mode) : fexpr__20140.call(null,mode));
})())?placesurfer.map_ui.core.edge_resized_box(box0,mode,dx,dy):placesurfer.map_ui.core.scaled_box(box0,mode,dx,dy)
));
cljs.core.reset_BANG_(_BANG_last,box);

return placesurfer.map_ui.core.apply_ref_box_BANG_(el,box);
});
var on_up = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.reset_BANG_(on_up,(function (_){
window.removeEventListener("mousemove",on_move);

window.removeEventListener("mouseup",cljs.core.deref(on_up));

var bounds = placesurfer.map_ui.core.ref_box__GT_bounds(m,cljs.core.deref(_BANG_last));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_ref_images,(function (imgs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20139_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20139_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20139_SHARP_,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds);
} else {
return p1__20139_SHARP_;
}
}),imgs);
}));

var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_ref_on_change);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(id,bounds) : f.call(null,id,bounds));
} else {
return null;
}
}));

window.addEventListener("mousemove",on_move);

return window.addEventListener("mouseup",cljs.core.deref(on_up));
});
placesurfer.map_ui.core.refresh_ref_el_mode_BANG_ = (function placesurfer$map_ui$core$refresh_ref_el_mode_BANG_(id){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id);
if(cljs.core.truth_(temp__5823__auto__)){
var wrap = temp__5823__auto__;
var adjust_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(placesurfer.map_ui.core._BANG_ref_adjust_id));
var img = cljs.core.some((function (p1__20141_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20141_SHARP_),id)){
return p1__20141_SHARP_;
} else {
return null;
}
}),cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var opacity = ((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(img);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (50);
}
})() / (100));
(wrap.style.pointerEvents = ((adjust_QMARK_)?"auto":"none"));

(wrap.style.cursor = ((adjust_QMARK_)?"move":""));

(wrap.style.outline = ((adjust_QMARK_)?"2px dashed #2b6cb0":""));

var temp__5823__auto___20597__$1 = wrap.querySelector("img");
if(cljs.core.truth_(temp__5823__auto___20597__$1)){
var im_20598 = temp__5823__auto___20597__$1;
(im_20598.style.opacity = cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity));
} else {
}

var seq__20142 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(wrap.querySelectorAll(".placesurfer-ref-handle")));
var chunk__20143 = null;
var count__20144 = (0);
var i__20145 = (0);
while(true){
if((i__20145 < count__20144)){
var h = chunk__20143.cljs$core$IIndexed$_nth$arity$2(null,i__20145);
(h.style.display = ((adjust_QMARK_)?"block":"none"));


var G__20599 = seq__20142;
var G__20600 = chunk__20143;
var G__20601 = count__20144;
var G__20602 = (i__20145 + (1));
seq__20142 = G__20599;
chunk__20143 = G__20600;
count__20144 = G__20601;
i__20145 = G__20602;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__20142);
if(temp__5823__auto____$1){
var seq__20142__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20142__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20142__$1);
var G__20603 = cljs.core.chunk_rest(seq__20142__$1);
var G__20604 = c__5548__auto__;
var G__20605 = cljs.core.count(c__5548__auto__);
var G__20606 = (0);
seq__20142 = G__20603;
chunk__20143 = G__20604;
count__20144 = G__20605;
i__20145 = G__20606;
continue;
} else {
var h = cljs.core.first(seq__20142__$1);
(h.style.display = ((adjust_QMARK_)?"block":"none"));


var G__20607 = cljs.core.next(seq__20142__$1);
var G__20608 = null;
var G__20609 = (0);
var G__20610 = (0);
seq__20142 = G__20607;
chunk__20143 = G__20608;
count__20144 = G__20609;
i__20145 = G__20610;
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
placesurfer.map_ui.core.make_ref_el_BANG_ = (function placesurfer$map_ui$core$make_ref_el_BANG_(m,p__20146){
var map__20147 = p__20146;
var map__20147__$1 = cljs.core.__destructure_map(map__20147);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20147__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var image_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20147__$1,new cljs.core.Keyword(null,"image-url","image-url",-1064784064));
var wrap = document.createElement("div");
var img = document.createElement("img");
(wrap.className = "placesurfer-ref-image");

var seq__20148_20616 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pointerEvents","none"], null)], null));
var chunk__20149_20617 = null;
var count__20150_20618 = (0);
var i__20151_20619 = (0);
while(true){
if((i__20151_20619 < count__20150_20618)){
var vec__20158_20621 = chunk__20149_20617.cljs$core$IIndexed$_nth$arity$2(null,i__20151_20619);
var k_20622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20158_20621,(0),null);
var v_20623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20158_20621,(1),null);
(wrap.style[k_20622] = v_20623);


var G__20624 = seq__20148_20616;
var G__20625 = chunk__20149_20617;
var G__20626 = count__20150_20618;
var G__20627 = (i__20151_20619 + (1));
seq__20148_20616 = G__20624;
chunk__20149_20617 = G__20625;
count__20150_20618 = G__20626;
i__20151_20619 = G__20627;
continue;
} else {
var temp__5823__auto___20628 = cljs.core.seq(seq__20148_20616);
if(temp__5823__auto___20628){
var seq__20148_20629__$1 = temp__5823__auto___20628;
if(cljs.core.chunked_seq_QMARK_(seq__20148_20629__$1)){
var c__5548__auto___20630 = cljs.core.chunk_first(seq__20148_20629__$1);
var G__20631 = cljs.core.chunk_rest(seq__20148_20629__$1);
var G__20632 = c__5548__auto___20630;
var G__20633 = cljs.core.count(c__5548__auto___20630);
var G__20634 = (0);
seq__20148_20616 = G__20631;
chunk__20149_20617 = G__20632;
count__20150_20618 = G__20633;
i__20151_20619 = G__20634;
continue;
} else {
var vec__20161_20635 = cljs.core.first(seq__20148_20629__$1);
var k_20636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20161_20635,(0),null);
var v_20637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20161_20635,(1),null);
(wrap.style[k_20636] = v_20637);


var G__20638 = cljs.core.next(seq__20148_20629__$1);
var G__20639 = null;
var G__20640 = (0);
var G__20641 = (0);
seq__20148_20616 = G__20638;
chunk__20149_20617 = G__20639;
count__20150_20618 = G__20640;
i__20151_20619 = G__20641;
continue;
}
} else {
}
}
break;
}

(img.src = image_url);

(img.draggable = false);

var seq__20164_20642 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["userSelect","none"], null)], null));
var chunk__20165_20644 = null;
var count__20166_20645 = (0);
var i__20167_20646 = (0);
while(true){
if((i__20167_20646 < count__20166_20645)){
var vec__20174_20648 = chunk__20165_20644.cljs$core$IIndexed$_nth$arity$2(null,i__20167_20646);
var k_20649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20174_20648,(0),null);
var v_20650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20174_20648,(1),null);
(img.style[k_20649] = v_20650);


var G__20652 = seq__20164_20642;
var G__20653 = chunk__20165_20644;
var G__20654 = count__20166_20645;
var G__20655 = (i__20167_20646 + (1));
seq__20164_20642 = G__20652;
chunk__20165_20644 = G__20653;
count__20166_20645 = G__20654;
i__20167_20646 = G__20655;
continue;
} else {
var temp__5823__auto___20656 = cljs.core.seq(seq__20164_20642);
if(temp__5823__auto___20656){
var seq__20164_20657__$1 = temp__5823__auto___20656;
if(cljs.core.chunked_seq_QMARK_(seq__20164_20657__$1)){
var c__5548__auto___20659 = cljs.core.chunk_first(seq__20164_20657__$1);
var G__20660 = cljs.core.chunk_rest(seq__20164_20657__$1);
var G__20661 = c__5548__auto___20659;
var G__20662 = cljs.core.count(c__5548__auto___20659);
var G__20663 = (0);
seq__20164_20642 = G__20660;
chunk__20165_20644 = G__20661;
count__20166_20645 = G__20662;
i__20167_20646 = G__20663;
continue;
} else {
var vec__20177_20665 = cljs.core.first(seq__20164_20657__$1);
var k_20666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20177_20665,(0),null);
var v_20667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20177_20665,(1),null);
(img.style[k_20666] = v_20667);


var G__20668 = cljs.core.next(seq__20164_20657__$1);
var G__20669 = null;
var G__20670 = (0);
var G__20671 = (0);
seq__20164_20642 = G__20668;
chunk__20165_20644 = G__20669;
count__20166_20645 = G__20670;
i__20167_20646 = G__20671;
continue;
}
} else {
}
}
break;
}

wrap.appendChild(img);

wrap.addEventListener("mousedown",(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(placesurfer.map_ui.core._BANG_ref_adjust_id))){
return placesurfer.map_ui.core.start_ref_drag_BANG_(m,id,e,new cljs.core.Keyword(null,"move","move",-2110884309));
} else {
return null;
}
}));

var seq__20180_20673 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null));
var chunk__20181_20674 = null;
var count__20182_20675 = (0);
var i__20183_20676 = (0);
while(true){
if((i__20183_20676 < count__20182_20675)){
var handle_20677 = chunk__20181_20674.cljs$core$IIndexed$_nth$arity$2(null,i__20183_20676);
var h_20679 = document.createElement("div");
(h_20679.className = "placesurfer-ref-handle");

var seq__20220_20680 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background","#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","2px solid #2b6cb0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boxSizing","border-box"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","none"], null)], null),(function (){var G__20231 = handle_20677;
var G__20231__$1 = (((G__20231 instanceof cljs.core.Keyword))?G__20231.fqn:null);
switch (G__20231__$1) {
case "nw":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","nwse-resize"], null)], null);

break;
case "ne":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","nesw-resize"], null)], null);

break;
case "sw":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","nesw-resize"], null)], null);

break;
case "se":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","nwse-resize"], null)], null);

break;
case "n":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginLeft","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","ns-resize"], null)], null);

break;
case "s":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginLeft","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","ns-resize"], null)], null);

break;
case "w":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginTop","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","ew-resize"], null)], null);

break;
case "e":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginTop","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","ew-resize"], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20231__$1)].join('')));

}
})()));
var chunk__20221_20681 = null;
var count__20222_20682 = (0);
var i__20223_20683 = (0);
while(true){
if((i__20223_20683 < count__20222_20682)){
var vec__20232_20689 = chunk__20221_20681.cljs$core$IIndexed$_nth$arity$2(null,i__20223_20683);
var k_20690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20232_20689,(0),null);
var v_20691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20232_20689,(1),null);
(h_20679.style[k_20690] = v_20691);


var G__20692 = seq__20220_20680;
var G__20693 = chunk__20221_20681;
var G__20694 = count__20222_20682;
var G__20695 = (i__20223_20683 + (1));
seq__20220_20680 = G__20692;
chunk__20221_20681 = G__20693;
count__20222_20682 = G__20694;
i__20223_20683 = G__20695;
continue;
} else {
var temp__5823__auto___20696 = cljs.core.seq(seq__20220_20680);
if(temp__5823__auto___20696){
var seq__20220_20697__$1 = temp__5823__auto___20696;
if(cljs.core.chunked_seq_QMARK_(seq__20220_20697__$1)){
var c__5548__auto___20698 = cljs.core.chunk_first(seq__20220_20697__$1);
var G__20699 = cljs.core.chunk_rest(seq__20220_20697__$1);
var G__20700 = c__5548__auto___20698;
var G__20701 = cljs.core.count(c__5548__auto___20698);
var G__20702 = (0);
seq__20220_20680 = G__20699;
chunk__20221_20681 = G__20700;
count__20222_20682 = G__20701;
i__20223_20683 = G__20702;
continue;
} else {
var vec__20235_20703 = cljs.core.first(seq__20220_20697__$1);
var k_20704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235_20703,(0),null);
var v_20705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235_20703,(1),null);
(h_20679.style[k_20704] = v_20705);


var G__20710 = cljs.core.next(seq__20220_20697__$1);
var G__20711 = null;
var G__20712 = (0);
var G__20713 = (0);
seq__20220_20680 = G__20710;
chunk__20221_20681 = G__20711;
count__20222_20682 = G__20712;
i__20223_20683 = G__20713;
continue;
}
} else {
}
}
break;
}

h_20679.addEventListener("mousedown",((function (seq__20180_20673,chunk__20181_20674,count__20182_20675,i__20183_20676,h_20679,handle_20677,wrap,img,map__20147,map__20147__$1,id,image_url){
return (function (e){
return placesurfer.map_ui.core.start_ref_drag_BANG_(m,id,e,handle_20677);
});})(seq__20180_20673,chunk__20181_20674,count__20182_20675,i__20183_20676,h_20679,handle_20677,wrap,img,map__20147,map__20147__$1,id,image_url))
);

wrap.appendChild(h_20679);


var G__20714 = seq__20180_20673;
var G__20715 = chunk__20181_20674;
var G__20716 = count__20182_20675;
var G__20717 = (i__20183_20676 + (1));
seq__20180_20673 = G__20714;
chunk__20181_20674 = G__20715;
count__20182_20675 = G__20716;
i__20183_20676 = G__20717;
continue;
} else {
var temp__5823__auto___20718 = cljs.core.seq(seq__20180_20673);
if(temp__5823__auto___20718){
var seq__20180_20719__$1 = temp__5823__auto___20718;
if(cljs.core.chunked_seq_QMARK_(seq__20180_20719__$1)){
var c__5548__auto___20720 = cljs.core.chunk_first(seq__20180_20719__$1);
var G__20721 = cljs.core.chunk_rest(seq__20180_20719__$1);
var G__20722 = c__5548__auto___20720;
var G__20723 = cljs.core.count(c__5548__auto___20720);
var G__20724 = (0);
seq__20180_20673 = G__20721;
chunk__20181_20674 = G__20722;
count__20182_20675 = G__20723;
i__20183_20676 = G__20724;
continue;
} else {
var handle_20725 = cljs.core.first(seq__20180_20719__$1);
var h_20726 = document.createElement("div");
(h_20726.className = "placesurfer-ref-handle");

var seq__20238_20727 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background","#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","2px solid #2b6cb0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boxSizing","border-box"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","none"], null)], null),(function (){var G__20249 = handle_20725;
var G__20249__$1 = (((G__20249 instanceof cljs.core.Keyword))?G__20249.fqn:null);
switch (G__20249__$1) {
case "nw":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","nwse-resize"], null)], null);

break;
case "ne":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","nesw-resize"], null)], null);

break;
case "sw":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","nesw-resize"], null)], null);

break;
case "se":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","nwse-resize"], null)], null);

break;
case "n":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginLeft","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","ns-resize"], null)], null);

break;
case "s":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginLeft","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","ns-resize"], null)], null);

break;
case "w":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginTop","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","ew-resize"], null)], null);

break;
case "e":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginTop","-7px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","ew-resize"], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20249__$1)].join('')));

}
})()));
var chunk__20239_20728 = null;
var count__20240_20729 = (0);
var i__20241_20730 = (0);
while(true){
if((i__20241_20730 < count__20240_20729)){
var vec__20250_20739 = chunk__20239_20728.cljs$core$IIndexed$_nth$arity$2(null,i__20241_20730);
var k_20740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20250_20739,(0),null);
var v_20741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20250_20739,(1),null);
(h_20726.style[k_20740] = v_20741);


var G__20742 = seq__20238_20727;
var G__20743 = chunk__20239_20728;
var G__20744 = count__20240_20729;
var G__20745 = (i__20241_20730 + (1));
seq__20238_20727 = G__20742;
chunk__20239_20728 = G__20743;
count__20240_20729 = G__20744;
i__20241_20730 = G__20745;
continue;
} else {
var temp__5823__auto___20746__$1 = cljs.core.seq(seq__20238_20727);
if(temp__5823__auto___20746__$1){
var seq__20238_20747__$1 = temp__5823__auto___20746__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20238_20747__$1)){
var c__5548__auto___20748 = cljs.core.chunk_first(seq__20238_20747__$1);
var G__20749 = cljs.core.chunk_rest(seq__20238_20747__$1);
var G__20750 = c__5548__auto___20748;
var G__20751 = cljs.core.count(c__5548__auto___20748);
var G__20752 = (0);
seq__20238_20727 = G__20749;
chunk__20239_20728 = G__20750;
count__20240_20729 = G__20751;
i__20241_20730 = G__20752;
continue;
} else {
var vec__20253_20753 = cljs.core.first(seq__20238_20747__$1);
var k_20754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20253_20753,(0),null);
var v_20755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20253_20753,(1),null);
(h_20726.style[k_20754] = v_20755);


var G__20756 = cljs.core.next(seq__20238_20747__$1);
var G__20757 = null;
var G__20758 = (0);
var G__20759 = (0);
seq__20238_20727 = G__20756;
chunk__20239_20728 = G__20757;
count__20240_20729 = G__20758;
i__20241_20730 = G__20759;
continue;
}
} else {
}
}
break;
}

h_20726.addEventListener("mousedown",((function (seq__20180_20673,chunk__20181_20674,count__20182_20675,i__20183_20676,h_20726,handle_20725,seq__20180_20719__$1,temp__5823__auto___20718,wrap,img,map__20147,map__20147__$1,id,image_url){
return (function (e){
return placesurfer.map_ui.core.start_ref_drag_BANG_(m,id,e,handle_20725);
});})(seq__20180_20673,chunk__20181_20674,count__20182_20675,i__20183_20676,h_20726,handle_20725,seq__20180_20719__$1,temp__5823__auto___20718,wrap,img,map__20147,map__20147__$1,id,image_url))
);

wrap.appendChild(h_20726);


var G__20760 = cljs.core.next(seq__20180_20719__$1);
var G__20761 = null;
var G__20762 = (0);
var G__20763 = (0);
seq__20180_20673 = G__20760;
chunk__20181_20674 = G__20761;
count__20182_20675 = G__20762;
i__20183_20676 = G__20763;
continue;
}
} else {
}
}
break;
}

return wrap;
});
placesurfer.map_ui.core.sync_ref_elements_BANG_ = (function placesurfer$map_ui$core$sync_ref_elements_BANG_(m){
var cont = placesurfer.map_ui.core.ref_container_BANG_(m);
var ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images)));
var seq__20256_20765 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els));
var chunk__20257_20766 = null;
var count__20258_20767 = (0);
var i__20259_20768 = (0);
while(true){
if((i__20259_20768 < count__20258_20767)){
var vec__20266_20769 = chunk__20257_20766.cljs$core$IIndexed$_nth$arity$2(null,i__20259_20768);
var id_20770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20266_20769,(0),null);
var el_20771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20266_20769,(1),null);
if(cljs.core.contains_QMARK_(ids,id_20770)){
} else {
el_20771.remove();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_ref_els,cljs.core.dissoc,id_20770);
}


var G__20772 = seq__20256_20765;
var G__20773 = chunk__20257_20766;
var G__20774 = count__20258_20767;
var G__20775 = (i__20259_20768 + (1));
seq__20256_20765 = G__20772;
chunk__20257_20766 = G__20773;
count__20258_20767 = G__20774;
i__20259_20768 = G__20775;
continue;
} else {
var temp__5823__auto___20776 = cljs.core.seq(seq__20256_20765);
if(temp__5823__auto___20776){
var seq__20256_20777__$1 = temp__5823__auto___20776;
if(cljs.core.chunked_seq_QMARK_(seq__20256_20777__$1)){
var c__5548__auto___20779 = cljs.core.chunk_first(seq__20256_20777__$1);
var G__20780 = cljs.core.chunk_rest(seq__20256_20777__$1);
var G__20781 = c__5548__auto___20779;
var G__20782 = cljs.core.count(c__5548__auto___20779);
var G__20783 = (0);
seq__20256_20765 = G__20780;
chunk__20257_20766 = G__20781;
count__20258_20767 = G__20782;
i__20259_20768 = G__20783;
continue;
} else {
var vec__20269_20785 = cljs.core.first(seq__20256_20777__$1);
var id_20786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20269_20785,(0),null);
var el_20787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20269_20785,(1),null);
if(cljs.core.contains_QMARK_(ids,id_20786)){
} else {
el_20787.remove();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_ref_els,cljs.core.dissoc,id_20786);
}


var G__20788 = cljs.core.next(seq__20256_20777__$1);
var G__20789 = null;
var G__20790 = (0);
var G__20791 = (0);
seq__20256_20765 = G__20788;
chunk__20257_20766 = G__20789;
count__20258_20767 = G__20790;
i__20259_20768 = G__20791;
continue;
}
} else {
}
}
break;
}

var seq__20272_20792 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var chunk__20273_20793 = null;
var count__20274_20794 = (0);
var i__20275_20795 = (0);
while(true){
if((i__20275_20795 < count__20274_20794)){
var map__20278_20796 = chunk__20273_20793.cljs$core$IIndexed$_nth$arity$2(null,i__20275_20795);
var map__20278_20797__$1 = cljs.core.__destructure_map(map__20278_20796);
var img_20798 = map__20278_20797__$1;
var id_20799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20278_20797__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id_20799))){
} else {
var el_20800 = placesurfer.map_ui.core.make_ref_el_BANG_(m,img_20798);
cont.appendChild(el_20800);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.map_ui.core._BANG_ref_els,cljs.core.assoc,id_20799,el_20800);
}

placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id_20799);


var G__20801 = seq__20272_20792;
var G__20802 = chunk__20273_20793;
var G__20803 = count__20274_20794;
var G__20804 = (i__20275_20795 + (1));
seq__20272_20792 = G__20801;
chunk__20273_20793 = G__20802;
count__20274_20794 = G__20803;
i__20275_20795 = G__20804;
continue;
} else {
var temp__5823__auto___20806 = cljs.core.seq(seq__20272_20792);
if(temp__5823__auto___20806){
var seq__20272_20807__$1 = temp__5823__auto___20806;
if(cljs.core.chunked_seq_QMARK_(seq__20272_20807__$1)){
var c__5548__auto___20808 = cljs.core.chunk_first(seq__20272_20807__$1);
var G__20809 = cljs.core.chunk_rest(seq__20272_20807__$1);
var G__20810 = c__5548__auto___20808;
var G__20811 = cljs.core.count(c__5548__auto___20808);
var G__20812 = (0);
seq__20272_20792 = G__20809;
chunk__20273_20793 = G__20810;
count__20274_20794 = G__20811;
i__20275_20795 = G__20812;
continue;
} else {
var map__20279_20813 = cljs.core.first(seq__20272_20807__$1);
var map__20279_20814__$1 = cljs.core.__destructure_map(map__20279_20813);
var img_20815 = map__20279_20814__$1;
var id_20816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20279_20814__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id_20816))){
} else {
var el_20817 = placesurfer.map_ui.core.make_ref_el_BANG_(m,img_20815);
cont.appendChild(el_20817);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.map_ui.core._BANG_ref_els,cljs.core.assoc,id_20816,el_20817);
}

placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id_20816);


var G__20818 = cljs.core.next(seq__20272_20807__$1);
var G__20819 = null;
var G__20820 = (0);
var G__20821 = (0);
seq__20272_20792 = G__20818;
chunk__20273_20793 = G__20819;
count__20274_20794 = G__20820;
i__20275_20795 = G__20821;
continue;
}
} else {
}
}
break;
}

placesurfer.map_ui.core.position_ref_images_BANG_(m);

return placesurfer.map_ui.core.ensure_ref_move_listener_BANG_(m);
});
placesurfer.map_ui.core.set_ref_images_visibility_BANG_ = (function placesurfer$map_ui$core$set_ref_images_visibility_BANG_(visible_QMARK_){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_ref_visible_QMARK_,visible_QMARK_);

var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_ref_container);
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
return (el.style.display = (cljs.core.truth_(visible_QMARK_)?"block":"none"));
} else {
return null;
}
});
/**
 * Replace the reference images shown on the draw page.
 * `images`: [{:id :image-url :bounds {:west :north :east :south} :opacity}].
 */
placesurfer.map_ui.core.set_reference_images_BANG_ = (function placesurfer$map_ui$core$set_reference_images_BANG_(images){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_ref_images,cljs.core.vec(images));

if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_ref_adjust_id);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_any_QMARK_((function (p1__20280_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20280_SHARP_),cljs.core.deref(placesurfer.map_ui.core._BANG_ref_adjust_id));
}),images);
} else {
return and__5023__auto__;
}
})())){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_ref_adjust_id,null);
} else {
}

var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return placesurfer.map_ui.core.sync_ref_elements_BANG_(m);
} else {
return null;
}
});
/**
 * Enable move/scale handles for image `id`; nil locks all images.
 */
placesurfer.map_ui.core.set_reference_image_adjust_BANG_ = (function placesurfer$map_ui$core$set_reference_image_adjust_BANG_(id){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_ref_adjust_id,id);

var seq__20281 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var chunk__20282 = null;
var count__20283 = (0);
var i__20284 = (0);
while(true){
if((i__20284 < count__20283)){
var map__20287 = chunk__20282.cljs$core$IIndexed$_nth$arity$2(null,i__20284);
var map__20287__$1 = cljs.core.__destructure_map(map__20287);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20287__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id__$1);


var G__20822 = seq__20281;
var G__20823 = chunk__20282;
var G__20824 = count__20283;
var G__20825 = (i__20284 + (1));
seq__20281 = G__20822;
chunk__20282 = G__20823;
count__20283 = G__20824;
i__20284 = G__20825;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20281);
if(temp__5823__auto__){
var seq__20281__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20281__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20281__$1);
var G__20826 = cljs.core.chunk_rest(seq__20281__$1);
var G__20827 = c__5548__auto__;
var G__20828 = cljs.core.count(c__5548__auto__);
var G__20829 = (0);
seq__20281 = G__20826;
chunk__20282 = G__20827;
count__20283 = G__20828;
i__20284 = G__20829;
continue;
} else {
var map__20288 = cljs.core.first(seq__20281__$1);
var map__20288__$1 = cljs.core.__destructure_map(map__20288);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20288__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id__$1);


var G__20830 = cljs.core.next(seq__20281__$1);
var G__20831 = null;
var G__20832 = (0);
var G__20833 = (0);
seq__20281 = G__20830;
chunk__20282 = G__20831;
count__20283 = G__20832;
i__20284 = G__20833;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.map_ui.core.set_reference_image_opacity_BANG_ = (function placesurfer$map_ui$core$set_reference_image_opacity_BANG_(id,opacity){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_ref_images,(function (imgs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20289_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20289_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20289_SHARP_,new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity);
} else {
return p1__20289_SHARP_;
}
}),imgs);
}));

return placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id);
});
placesurfer.map_ui.core.set_reference_image_on_change_BANG_ = (function placesurfer$map_ui$core$set_reference_image_on_change_BANG_(f){
return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_ref_on_change,f);
});
placesurfer.map_ui.core.set_reference_image_on_paste_BANG_ = (function placesurfer$map_ui$core$set_reference_image_on_paste_BANG_(f){
return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_ref_on_paste,f);
});
/**
 * Pixel box for a pasted image, centered and fit within 60% of the viewport.
 */
placesurfer.map_ui.core.centered_image_box = (function placesurfer$map_ui$core$centered_image_box(cw,ch,iw,ih){
var scale = (function (){var x__5113__auto__ = ((0.6 * cw) / iw);
var y__5114__auto__ = ((0.6 * ch) / ih);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var w = (iw * scale);
var h = (ih * scale);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((cw - w) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),((ch - h) / (2)),new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h], null);
});
placesurfer.map_ui.core.cleanup_ref_images_BANG_ = (function placesurfer$map_ui$core$cleanup_ref_images_BANG_(){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_ref_els,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_ref_container,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_ref_move_fn,null);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_ref_adjust_id,null);
});
placesurfer.map_ui.core.draw_fc = (function placesurfer$map_ui$core$draw_fc(){
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ring){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Polygon",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(ring),cljs.core.first(ring))], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
}),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons));
var cur = ((cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"LineString",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring)], null),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wip","wip",-103467282),true], null)], null):null);
var verts = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (ring){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20290){
var vec__20291 = p__20290;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20291,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20291,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
}),ring);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20294){
var vec__20295 = p__20294;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20295,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20295,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wip","wip",-103467282),true], null)], null);
}),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),(function (){var G__20298 = cljs.core.vec(verts);
var G__20298__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__20298,done)
;
if(cljs.core.truth_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20298__$1,cur);
} else {
return G__20298__$1;
}
})()], null);
});
placesurfer.map_ui.core.refresh_draw_BANG_ = (function placesurfer$map_ui$core$refresh_draw_BANG_(m){
var temp__5823__auto__ = (function (){try{return m.getSource(placesurfer.map_ui.core.draw_src);
}catch (e20299){var _ = e20299;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto__)){
var src = temp__5823__auto__;
return src.setData(cljs.core.clj__GT_js(placesurfer.map_ui.core.draw_fc()));
} else {
return null;
}
});
placesurfer.map_ui.core.color__GT_rgb = (function placesurfer$map_ui$core$color__GT_rgb(p__20300){
var map__20301 = p__20300;
var map__20301__$1 = cljs.core.__destructure_map(map__20301);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20301__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20301__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20301__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20301__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var l = ((function (){var or__5025__auto__ = lightness;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() / (100));
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((r + (((255) - r) * l)))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((g + (((255) - g) * l)))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((b + (((255) - b) * l)))),")"].join('');
});
placesurfer.map_ui.core.color__GT_alpha = (function placesurfer$map_ui$core$color__GT_alpha(p__20302){
var map__20303 = p__20302;
var map__20303__$1 = cljs.core.__destructure_map(map__20303);
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20303__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
return ((function (){var or__5025__auto__ = opacity;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (35);
}
})() / (100));
});
/**
 * Apply a {:r :g :b :lightness :opacity} color map to the draw canvas layers.
 */
placesurfer.map_ui.core.set_draw_canvas_color_BANG_ = (function placesurfer$map_ui$core$set_draw_canvas_color_BANG_(color){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_color,color);

var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var rgb = placesurfer.map_ui.core.color__GT_rgb(color);
var alpha = placesurfer.map_ui.core.color__GT_alpha(color);
try{if(cljs.core.truth_((function (){try{return m.getLayer(placesurfer.map_ui.core.draw_fill);
}catch (e20305){var _ = e20305;
return null;
}})())){
m.setPaintProperty(placesurfer.map_ui.core.draw_fill,"fill-color",rgb);

m.setPaintProperty(placesurfer.map_ui.core.draw_fill,"fill-opacity",alpha);
} else {
}

if(cljs.core.truth_((function (){try{return m.getLayer(placesurfer.map_ui.core.draw_line);
}catch (e20306){var _ = e20306;
return null;
}})())){
return m.setPaintProperty(placesurfer.map_ui.core.draw_line,"line-color",rgb);
} else {
return null;
}
}catch (e20304){var _ = e20304;
return null;
}} else {
return null;
}
});
placesurfer.map_ui.core.set_draw_layer_visibility_BANG_ = (function placesurfer$map_ui$core$set_draw_layer_visibility_BANG_(m,layer_id,visible_QMARK_){
try{if(cljs.core.truth_((function (){try{return m.getLayer(layer_id);
}catch (e20308){var _ = e20308;
return null;
}})())){
return m.setLayoutProperty(layer_id,"visibility",(cljs.core.truth_(visible_QMARK_)?"visible":"none"));
} else {
return null;
}
}catch (e20307){var _ = e20307;
return null;
}});
placesurfer.map_ui.core.set_draw_canvas_visibility_BANG_ = (function placesurfer$map_ui$core$set_draw_canvas_visibility_BANG_(m,visible_QMARK_){
placesurfer.map_ui.core.set_draw_layer_visibility_BANG_(m,placesurfer.map_ui.core.draw_fill,visible_QMARK_);

placesurfer.map_ui.core.set_draw_layer_visibility_BANG_(m,placesurfer.map_ui.core.draw_line,visible_QMARK_);

return placesurfer.map_ui.core.set_draw_layer_visibility_BANG_(m,placesurfer.map_ui.core.draw_vtx,(function (){var and__5023__auto__ = visible_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.deref(placesurfer.map_ui.core._BANG_draw_active_QMARK_);
} else {
return and__5023__auto__;
}
})());
});
placesurfer.map_ui.core.ensure_draw_layers_BANG_ = (function placesurfer$map_ui$core$ensure_draw_layers_BANG_(m){
if(cljs.core.truth_((function (){try{return m.getSource(placesurfer.map_ui.core.draw_src);
}catch (e20309){var _ = e20309;
return null;
}})())){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_active_QMARK_))){
return placesurfer.map_ui.core.set_draw_layer_visibility_BANG_(m,placesurfer.map_ui.core.draw_vtx,true);
} else {
return null;
}
} else {
m.addSource(placesurfer.map_ui.core.draw_src,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"geojson",new cljs.core.Keyword(null,"data","data",-232669377),placesurfer.map_ui.core.draw_fc()], null)));

m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.draw_fill,new cljs.core.Keyword(null,"type","type",1174270348),"fill",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.draw_src,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["==",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["geometry-type"], null),"Polygon"], null),new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 2, ["fill-color",placesurfer.map_ui.core.color__GT_rgb(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_color)),"fill-opacity",placesurfer.map_ui.core.color__GT_alpha(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_color))], null)], null)));

m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.draw_line,new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.draw_src,new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 3, ["line-color",placesurfer.map_ui.core.color__GT_rgb(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_color)),"line-width",(2),"line-dasharray",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], null)], null)));

m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.draw_vtx,new cljs.core.Keyword(null,"type","type",1174270348),"circle",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.draw_src,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["==",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["geometry-type"], null),"Point"], null),new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 4, ["circle-radius",(5),"circle-color","#cc3300","circle-stroke-width",(2),"circle-stroke-color","#fff"], null)], null)));

return placesurfer.map_ui.core.set_draw_canvas_visibility_BANG_(m,false);
}
});
placesurfer.map_ui.core.all_draw_vertices = (function placesurfer$map_ui$core$all_draw_vertices(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (pidx,ring){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (vidx,p__20310){
var vec__20311 = p__20310;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20311,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20311,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"polygon-idx","polygon-idx",1216671533),pidx,new cljs.core.Keyword(null,"vertex-idx","vertex-idx",676111409),vidx,new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"lat","lat",-580793929),lat], null);
}),ring);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)], 0)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (vidx,p__20314){
var vec__20315 = p__20314;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20315,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20315,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"vertex-idx","vertex-idx",676111409),vidx,new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"lat","lat",-580793929),lat], null);
}),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring)));
});
placesurfer.map_ui.core.vertex_near_screen = (function placesurfer$map_ui$core$vertex_near_screen(m,x,y,px){
return cljs.core.some((function (v){
var pt = m.project(({"lng": new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(v), "lat": new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(v)}));
var d = Math.hypot((x - pt.x),(y - pt.y));
if((d < px)){
return v;
} else {
return null;
}
}),placesurfer.map_ui.core.all_draw_vertices());
});
placesurfer.map_ui.core.move_vertex_BANG_ = (function placesurfer$map_ui$core$move_vertex_BANG_(v,lng,lat){
var G__20318 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v);
var G__20318__$1 = (((G__20318 instanceof cljs.core.Keyword))?G__20318.fqn:null);
switch (G__20318__$1) {
case "polygon":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_polygons,(function (ps){
return cljs.core.assoc_in(ps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon-idx","polygon-idx",1216671533).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"vertex-idx","vertex-idx",676111409).cljs$core$IFn$_invoke$arity$1(v)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null));
}));

break;
case "current":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_ring,(function (r){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(r),new cljs.core.Keyword(null,"vertex-idx","vertex-idx",676111409).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null));
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20318__$1)].join('')));

}
});
placesurfer.map_ui.core.polygons__GT_fc = (function placesurfer$map_ui$core$polygons__GT_fc(rings){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ring){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Polygon",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(ring),cljs.core.first(ring))], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
}),rings)], null);
});
placesurfer.map_ui.core.save_draw_BANG_ = (function placesurfer$map_ui$core$save_draw_BANG_(){
var fc = placesurfer.map_ui.core.polygons__GT_fc(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons));
var temp__5821__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_draw_on_save);
if(cljs.core.truth_(temp__5821__auto__)){
var f = temp__5821__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(fc) : f.call(null,fc));
} else {
var json = JSON.stringify(cljs.core.clj__GT_js(fc));
var blob = (new Blob([json],({"type": "application/json"})));
var url = URL.createObjectURL(blob);
var a = document.createElement("a");
(a.href = url);

(a.download = "flood.geojson");

a.click();

return setTimeout((function (){
return URL.revokeObjectURL(url);
}),(1000));
}
});
placesurfer.map_ui.core.close_polygon_BANG_ = (function placesurfer$map_ui$core$close_polygon_BANG_(m){
if((cljs.core.count(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring)) >= (3))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_draw_polygons,cljs.core.conj,cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring));

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.PersistentVector.EMPTY);

placesurfer.map_ui.core.refresh_draw_BANG_(m);

return placesurfer.map_ui.core.save_draw_BANG_();
} else {
return null;
}
});
placesurfer.map_ui.core.undo_point_BANG_ = (function placesurfer$map_ui$core$undo_point_BANG_(m){
if(cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_ring,(function (p1__20319_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__20319_SHARP_));
}));
} else {
if(cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons))){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.last(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_polygons,(function (p1__20320_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__20320_SHARP_));
}));
} else {
}
}

return placesurfer.map_ui.core.refresh_draw_BANG_(m);
});
placesurfer.map_ui.core.clear_draw_BANG_ = (function placesurfer$map_ui$core$clear_draw_BANG_(m){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_polygons,cljs.core.PersistentVector.EMPTY);

placesurfer.map_ui.core.refresh_draw_BANG_(m);

return placesurfer.map_ui.core.save_draw_BANG_();
});
placesurfer.map_ui.core.detach_draw_handlers_BANG_ = (function placesurfer$map_ui$core$detach_draw_handlers_BANG_(m){
var seq__20321 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_click_fn,"click"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_mm_fn,"mousemove"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_md_fn,"mousedown"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_mu_fn,"mouseup"], null)], null));
var chunk__20322 = null;
var count__20323 = (0);
var i__20324 = (0);
while(true){
if((i__20324 < count__20323)){
var vec__20333 = chunk__20322.cljs$core$IIndexed$_nth$arity$2(null,i__20324);
var _BANG_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20333,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20333,(1),null);
var temp__5823__auto___20858 = cljs.core.deref(_BANG_a);
if(cljs.core.truth_(temp__5823__auto___20858)){
var f_20859 = temp__5823__auto___20858;
try{m.off(ev,f_20859);
}catch (e20336){var __20860 = e20336;
}
cljs.core.reset_BANG_(_BANG_a,null);
} else {
}


var G__20861 = seq__20321;
var G__20862 = chunk__20322;
var G__20863 = count__20323;
var G__20864 = (i__20324 + (1));
seq__20321 = G__20861;
chunk__20322 = G__20862;
count__20323 = G__20863;
i__20324 = G__20864;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20321);
if(temp__5823__auto__){
var seq__20321__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20321__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20321__$1);
var G__20865 = cljs.core.chunk_rest(seq__20321__$1);
var G__20866 = c__5548__auto__;
var G__20867 = cljs.core.count(c__5548__auto__);
var G__20868 = (0);
seq__20321 = G__20865;
chunk__20322 = G__20866;
count__20323 = G__20867;
i__20324 = G__20868;
continue;
} else {
var vec__20337 = cljs.core.first(seq__20321__$1);
var _BANG_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20337,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20337,(1),null);
var temp__5823__auto___20869__$1 = cljs.core.deref(_BANG_a);
if(cljs.core.truth_(temp__5823__auto___20869__$1)){
var f_20870 = temp__5823__auto___20869__$1;
try{m.off(ev,f_20870);
}catch (e20340){var __20871 = e20340;
}
cljs.core.reset_BANG_(_BANG_a,null);
} else {
}


var G__20872 = cljs.core.next(seq__20321__$1);
var G__20873 = null;
var G__20874 = (0);
var G__20875 = (0);
seq__20321 = G__20872;
chunk__20322 = G__20873;
count__20323 = G__20874;
i__20324 = G__20875;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.map_ui.core.attach_draw_handlers_BANG_ = (function placesurfer$map_ui$core$attach_draw_handlers_BANG_(m){
var click_fn = (function (e){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_active_QMARK_))){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_skip_click_QMARK_))){
} else {
var ll_20876 = e.lngLat;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ll_20876.lng,ll_20876.lat], null));

placesurfer.map_ui.core.refresh_draw_BANG_(m);
}

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_skip_click_QMARK_,false);
} else {
return null;
}
});
var mm_fn = (function (e){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_active_QMARK_))){
var pt = e.point;
var x = pt.x;
var y = pt.y;
var temp__5821__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_draw_drag);
if(cljs.core.truth_(temp__5821__auto__)){
var ds = temp__5821__auto__;
var ll_20877 = e.lngLat;
placesurfer.map_ui.core.move_vertex_BANG_(ds,ll_20877.lng,ll_20877.lat);

return placesurfer.map_ui.core.refresh_draw_BANG_(m);
} else {
var v = placesurfer.map_ui.core.vertex_near_screen(m,x,y,(8));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_hover_v,v);

var G__20341 = m;
var G__20342 = (cljs.core.truth_(v)?"pointer":"default");
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(G__20341,G__20342) : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,G__20341,G__20342));
}
} else {
return null;
}
});
var md_fn = (function (_e){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_draw_active_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.deref(placesurfer.map_ui.core._BANG_draw_hover_v);
} else {
return and__5023__auto__;
}
})())){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_drag,cljs.core.deref(placesurfer.map_ui.core._BANG_draw_hover_v));

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_skip_click_QMARK_,true);

try{m.dragPan.disable();
}catch (e20343){var __20882 = e20343;
}
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(m,"grabbing") : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,m,"grabbing"));
} else {
return null;
}
});
var mu_fn = (function (_e){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_drag))){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_drag,null);

try{m.dragPan.enable();
}catch (e20344){var __20886 = e20344;
}
var G__20345 = m;
var G__20346 = (cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_hover_v))?"pointer":"default");
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(G__20345,G__20346) : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,G__20345,G__20346));
} else {
return null;
}
});
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_click_fn,click_fn);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_mm_fn,mm_fn);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_md_fn,md_fn);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_mu_fn,mu_fn);

m.on("click",click_fn);

m.on("mousemove",mm_fn);

m.on("mousedown",md_fn);

return m.on("mouseup",mu_fn);
});
placesurfer.map_ui.core.btn_style_BANG_ = (function placesurfer$map_ui$core$btn_style_BANG_(el,text,bg){
(el.textContent = text);

var seq__20347 = cljs.core.seq(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["padding","4px 8px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fontSize","11px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fontWeight","600"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["color","white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginBottom","2px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","3px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textAlign","left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background",bg], null)], null));
var chunk__20348 = null;
var count__20349 = (0);
var i__20350 = (0);
while(true){
if((i__20350 < count__20349)){
var vec__20357 = chunk__20348.cljs$core$IIndexed$_nth$arity$2(null,i__20350);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20357,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20357,(1),null);
(el.style[k] = v);


var G__20889 = seq__20347;
var G__20890 = chunk__20348;
var G__20891 = count__20349;
var G__20892 = (i__20350 + (1));
seq__20347 = G__20889;
chunk__20348 = G__20890;
count__20349 = G__20891;
i__20350 = G__20892;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20347);
if(temp__5823__auto__){
var seq__20347__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20347__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20347__$1);
var G__20893 = cljs.core.chunk_rest(seq__20347__$1);
var G__20894 = c__5548__auto__;
var G__20895 = cljs.core.count(c__5548__auto__);
var G__20896 = (0);
seq__20347 = G__20893;
chunk__20348 = G__20894;
count__20349 = G__20895;
i__20350 = G__20896;
continue;
} else {
var vec__20360 = cljs.core.first(seq__20347__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20360,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20360,(1),null);
(el.style[k] = v);


var G__20898 = cljs.core.next(seq__20347__$1);
var G__20899 = null;
var G__20900 = (0);
var G__20901 = (0);
seq__20347 = G__20898;
chunk__20348 = G__20899;
count__20349 = G__20900;
i__20350 = G__20901;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.map_ui.core.paste_reference_image_BANG_ = (function placesurfer$map_ui$core$paste_reference_image_BANG_(m){
var t = cljs.core.deref(placesurfer.map_ui.core._BANG_draw_t);
var url = window.prompt((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("draw","image-url-prompt","draw/image-url-prompt",-1959464100)) : t.call(null,new cljs.core.Keyword("draw","image-url-prompt","draw/image-url-prompt",-1959464100))),"");
if(cljs.core.seq(clojure.string.trim((function (){var or__5025__auto__ = url;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()))){
var url__$1 = clojure.string.trim(url);
var im = (new Image());
(im.onload = (function (){
var cont = m.getContainer();
var box = placesurfer.map_ui.core.centered_image_box(cont.clientWidth,cont.clientHeight,im.naturalWidth,im.naturalHeight);
var bounds = placesurfer.map_ui.core.ref_box__GT_bounds(m,box);
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_ref_on_paste);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
var G__20363 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20363) : f.call(null,G__20363));
} else {
return null;
}
}));

(im.onerror = (function (){
return window.alert((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("draw","image-load-error","draw/image-load-error",1338362715)) : t.call(null,new cljs.core.Keyword("draw","image-load-error","draw/image-load-error",1338362715))));
}));

return (im.src = url__$1);
} else {
return null;
}
});
placesurfer.map_ui.core.make_draw_ctrl = (function placesurfer$map_ui$core$make_draw_ctrl(m){
var t = cljs.core.deref(placesurfer.map_ui.core._BANG_draw_t);
var el = document.createElement("div");
var toggle_btn = document.createElement("button");
var close_btn = document.createElement("button");
var undo_btn = document.createElement("button");
var clear_btn = document.createElement("button");
var paste_btn = document.createElement("button");
var save_btn = document.createElement("button");
var update_BANG_ = (function (active_QMARK_){
return placesurfer.map_ui.core.btn_style_BANG_(toggle_btn,(cljs.core.truth_(active_QMARK_)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("draw","stop","draw/stop",-2143611050)) : t.call(null,new cljs.core.Keyword("draw","stop","draw/stop",-2143611050))):(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("draw","start","draw/start",-351986641)) : t.call(null,new cljs.core.Keyword("draw","start","draw/start",-351986641)))),(cljs.core.truth_(active_QMARK_)?"#9b2c2c":"#2b6cb0"));
});
el.classList.add("maplibregl-ctrl","maplibregl-ctrl-group","placesurfer-draw-ctrl");

(el.style.padding = "6px");

(el.style.minWidth = "128px");

(el.style.margin = "10px 0 0 10px");

placesurfer.map_ui.core.btn_style_BANG_(toggle_btn,(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("draw","start","draw/start",-351986641)) : t.call(null,new cljs.core.Keyword("draw","start","draw/start",-351986641))),"#2b6cb0");

placesurfer.map_ui.core.btn_style_BANG_(close_btn,(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("draw","close-polygon","draw/close-polygon",809679083)) : t.call(null,new cljs.core.Keyword("draw","close-polygon","draw/close-polygon",809679083))),"#276749");

placesurfer.map_ui.core.btn_style_BANG_(undo_btn,(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("draw","undo-point","draw/undo-point",486120815)) : t.call(null,new cljs.core.Keyword("draw","undo-point","draw/undo-point",486120815))),"#744210");

placesurfer.map_ui.core.btn_style_BANG_(clear_btn,(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("draw","clear-all","draw/clear-all",-580265284)) : t.call(null,new cljs.core.Keyword("draw","clear-all","draw/clear-all",-580265284))),"#822727");

placesurfer.map_ui.core.btn_style_BANG_(paste_btn,(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("draw","paste-image","draw/paste-image",-1492297322)) : t.call(null,new cljs.core.Keyword("draw","paste-image","draw/paste-image",-1492297322))),"#553c9a");

placesurfer.map_ui.core.btn_style_BANG_(save_btn,["\uD83D\uDCBE ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","save","common/save",-1048148614)) : t.call(null,new cljs.core.Keyword("common","save","common/save",-1048148614))))].join(''),"#1a365d");

toggle_btn.addEventListener("click",(function (){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_active_QMARK_))){
placesurfer.map_ui.core.detach_draw_handlers_BANG_(m);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_active_QMARK_,false);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_drag,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_hover_v,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_skip_click_QMARK_,false);

try{m.dragPan.enable();
}catch (e20364){var __20905 = e20364;
}
(placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(m,"grab") : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,m,"grab"));

placesurfer.map_ui.core.set_draw_layer_visibility_BANG_(m,placesurfer.map_ui.core.draw_vtx,false);

return update_BANG_(false);
} else {
placesurfer.map_ui.core.ensure_draw_layers_BANG_(m);

placesurfer.map_ui.core.attach_draw_handlers_BANG_(m);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_active_QMARK_,true);

(placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(m,"default") : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,m,"default"));

placesurfer.map_ui.core.set_draw_layer_visibility_BANG_(m,placesurfer.map_ui.core.draw_vtx,true);

return update_BANG_(true);
}
}));

close_btn.addEventListener("click",(function (){
return placesurfer.map_ui.core.close_polygon_BANG_(m);
}));

undo_btn.addEventListener("click",(function (){
return placesurfer.map_ui.core.undo_point_BANG_(m);
}));

clear_btn.addEventListener("click",(function (){
return placesurfer.map_ui.core.clear_draw_BANG_(m);
}));

paste_btn.addEventListener("click",(function (){
return placesurfer.map_ui.core.paste_reference_image_BANG_(m);
}));

save_btn.addEventListener("click",placesurfer.map_ui.core.save_draw_BANG_);

var seq__20365_20906 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [toggle_btn,close_btn,undo_btn,clear_btn,paste_btn,save_btn], null));
var chunk__20366_20907 = null;
var count__20367_20908 = (0);
var i__20368_20909 = (0);
while(true){
if((i__20368_20909 < count__20367_20908)){
var b_20910 = chunk__20366_20907.cljs$core$IIndexed$_nth$arity$2(null,i__20368_20909);
el.appendChild(b_20910);


var G__20911 = seq__20365_20906;
var G__20912 = chunk__20366_20907;
var G__20913 = count__20367_20908;
var G__20914 = (i__20368_20909 + (1));
seq__20365_20906 = G__20911;
chunk__20366_20907 = G__20912;
count__20367_20908 = G__20913;
i__20368_20909 = G__20914;
continue;
} else {
var temp__5823__auto___20915 = cljs.core.seq(seq__20365_20906);
if(temp__5823__auto___20915){
var seq__20365_20916__$1 = temp__5823__auto___20915;
if(cljs.core.chunked_seq_QMARK_(seq__20365_20916__$1)){
var c__5548__auto___20917 = cljs.core.chunk_first(seq__20365_20916__$1);
var G__20918 = cljs.core.chunk_rest(seq__20365_20916__$1);
var G__20919 = c__5548__auto___20917;
var G__20920 = cljs.core.count(c__5548__auto___20917);
var G__20921 = (0);
seq__20365_20906 = G__20918;
chunk__20366_20907 = G__20919;
count__20367_20908 = G__20920;
i__20368_20909 = G__20921;
continue;
} else {
var b_20922 = cljs.core.first(seq__20365_20916__$1);
el.appendChild(b_20922);


var G__20923 = cljs.core.next(seq__20365_20916__$1);
var G__20924 = null;
var G__20925 = (0);
var G__20926 = (0);
seq__20365_20906 = G__20923;
chunk__20366_20907 = G__20924;
count__20367_20908 = G__20925;
i__20368_20909 = G__20926;
continue;
}
} else {
}
}
break;
}

return ({"onAdd": (function (_){
return el;
}), "onRemove": (function (){
return null;
})});
});
placesurfer.map_ui.core.deactivate_draw_mode_BANG_ = (function placesurfer$map_ui$core$deactivate_draw_mode_BANG_(){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_page_active_QMARK_,false);

var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_active_QMARK_))){
placesurfer.map_ui.core.detach_draw_handlers_BANG_(m);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_active_QMARK_,false);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_drag,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_hover_v,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_skip_click_QMARK_,false);

try{m.dragPan.enable();
}catch (e20369){var __20927 = e20369;
}
(placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(m,"grab") : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,m,"grab"));
} else {
}

placesurfer.map_ui.core.set_draw_canvas_visibility_BANG_(m,false);

return placesurfer.map_ui.core.set_ref_images_visibility_BANG_(false);
} else {
return null;
}
});
/**
 * Register a callback (fn [geojson-clj-map]) called when user clicks Spara.
 */
placesurfer.map_ui.core.set_draw_on_save_BANG_ = (function placesurfer$map_ui$core$set_draw_on_save_BANG_(f){
return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_on_save,f);
});
/**
 * Register a (fn []) called once after the map finishes loading.
 * Used to load the initial draw layer if the map wasn't ready on first navigation.
 */
placesurfer.map_ui.core.set_draw_on_map_ready_BANG_ = (function placesurfer$map_ui$core$set_draw_on_map_ready_BANG_(f){
return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_on_map_ready,f);
});
/**
 * Set the translation function (fn [key]) used for draw toolbar labels.
 */
placesurfer.map_ui.core.set_draw_t_BANG_ = (function placesurfer$map_ui$core$set_draw_t_BANG_(f){
return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_t,f);
});
/**
 * Load a layer by fetching its GeoJSON and populating the draw canvas.
 */
placesurfer.map_ui.core.load_draw_layer_BANG_ = (function placesurfer$map_ui$core$load_draw_layer_BANG_(layer_id){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_page_active_QMARK_,true);

placesurfer.map_ui.core.set_ref_images_visibility_BANG_(true);

var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return fetch(["/data/layers/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(layer_id),".geojson"].join('')).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.json();
} else {
return null;
}
})).then((function (geojson){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.PersistentVector.EMPTY);

if(cljs.core.truth_(geojson)){
var features_20931 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(geojson.features,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var rings_20932 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (f){
var coords = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),(0)], null));
if(cljs.core.seq(coords)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__20370){
var vec__20371 = p__20370;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20371,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20371,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null);
}),cljs.core.butlast(coords));
} else {
return null;
}
}),features_20931);
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_polygons,cljs.core.vec(rings_20932));
} else {
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_polygons,cljs.core.PersistentVector.EMPTY);
}

if(cljs.core.truth_((function (){var and__5023__auto__ = placesurfer.map_ui.core.map_ready_QMARK_(m);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.deref(placesurfer.map_ui.core._BANG_draw_page_active_QMARK_);
} else {
return and__5023__auto__;
}
})())){
placesurfer.map_ui.core.ensure_draw_layers_BANG_(m);

placesurfer.map_ui.core.refresh_draw_BANG_(m);

return placesurfer.map_ui.core.set_draw_canvas_visibility_BANG_(m,true);
} else {
return null;
}
})).catch((function (_){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_polygons,cljs.core.PersistentVector.EMPTY);

if(cljs.core.truth_((function (){var and__5023__auto__ = placesurfer.map_ui.core.map_ready_QMARK_(m);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.deref(placesurfer.map_ui.core._BANG_draw_page_active_QMARK_);
} else {
return and__5023__auto__;
}
})())){
placesurfer.map_ui.core.ensure_draw_layers_BANG_(m);

placesurfer.map_ui.core.refresh_draw_BANG_(m);

return placesurfer.map_ui.core.set_draw_canvas_visibility_BANG_(m,true);
} else {
return null;
}
}));
} else {
return null;
}
});
placesurfer.map_ui.core.add_draw_toolbar_BANG_ = (function placesurfer$map_ui$core$add_draw_toolbar_BANG_(m){
if(cljs.core.truth_(m.placesurferDrawAdded)){
return null;
} else {
(m.placesurferDrawAdded = true);

return m.addControl(placesurfer.map_ui.core.make_draw_ctrl(m),"top-left");
}
});
placesurfer.map_ui.core.flood_source_id = "placesurfer-flood-zones";
placesurfer.map_ui.core.flood_fill_layer_id = "placesurfer-flood-fill";
placesurfer.map_ui.core.flood_data_url = "/data/layers/flood.geojson";
placesurfer.map_ui.core.remove_flood_layers_BANG_ = (function placesurfer$map_ui$core$remove_flood_layers_BANG_(m){
try{if(cljs.core.truth_(m.getLayer(placesurfer.map_ui.core.flood_fill_layer_id))){
m.removeLayer(placesurfer.map_ui.core.flood_fill_layer_id);
} else {
}

if(cljs.core.truth_(m.getSource(placesurfer.map_ui.core.flood_source_id))){
return m.removeSource(placesurfer.map_ui.core.flood_source_id);
} else {
return null;
}
}catch (e20374){var _ = e20374;
return null;
}});
placesurfer.map_ui.core.add_flood_layers_BANG_ = (function placesurfer$map_ui$core$add_flood_layers_BANG_(m){
if(cljs.core.truth_(m.getSource(placesurfer.map_ui.core.flood_source_id))){
return null;
} else {
m.addSource(placesurfer.map_ui.core.flood_source_id,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"geojson",new cljs.core.Keyword(null,"data","data",-232669377),placesurfer.map_ui.core.flood_data_url], null)));

return m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.flood_fill_layer_id,new cljs.core.Keyword(null,"type","type",1174270348),"fill",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.flood_source_id,new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 2, ["fill-color","#ff0000","fill-opacity",0.25], null)], null)));
}
});
placesurfer.map_ui.core.do_sync_overlay_layers_BANG_ = (function placesurfer$map_ui$core$do_sync_overlay_layers_BANG_(m,active_overlays){
try{if(cljs.core.contains_QMARK_(active_overlays,new cljs.core.Keyword(null,"flood","flood",557419261))){
return placesurfer.map_ui.core.add_flood_layers_BANG_(m);
} else {
return placesurfer.map_ui.core.remove_flood_layers_BANG_(m);
}
}catch (e20375){var _ = e20375;
return null;
}});
/**
 * Show or hide map overlay layers based on the set of active overlay keywords.
 */
placesurfer.map_ui.core.sync_overlay_layers_BANG_ = (function placesurfer$map_ui$core$sync_overlay_layers_BANG_(active_overlays){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
if(cljs.core.truth_(placesurfer.map_ui.core.map_ready_QMARK_(m))){
return placesurfer.map_ui.core.do_sync_overlay_layers_BANG_(m,active_overlays);
} else {
return m.once("load",(function (_){
var temp__5823__auto____$1 = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto____$1)){
var m2 = temp__5823__auto____$1;
return placesurfer.map_ui.core.do_sync_overlay_layers_BANG_(m2,active_overlays);
} else {
return null;
}
}));
}
} else {
return null;
}
});
placesurfer.map_ui.core.area_circle_source_id = "placesurfer-area-circles";
placesurfer.map_ui.core.area_label_source_id = "placesurfer-area-circle-labels";
placesurfer.map_ui.core.area_circle_layer_id = "placesurfer-area-circle";
placesurfer.map_ui.core.area_label_layer_id = "placesurfer-area-label";
placesurfer.map_ui.core.earth_radius_km = 6371.0;
placesurfer.map_ui.core.web_mercator_zoom0_resolution = 78271.51696402048;
/**
 * Point `radius-km` due north of [lng lat] - moving due north along a great
 * circle simply adds the angular distance to the latitude.
 */
placesurfer.map_ui.core.north_point = (function placesurfer$map_ui$core$north_point(lng,lat,radius_km){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,(lat + ((radius_km / placesurfer.map_ui.core.earth_radius_km) * ((180) / Math.PI)))], null);
});
/**
 * One Point feature per radius at the circle's center, carrying :radius-m/
 * :cos-lat properties that drive a data-driven circle-radius expression.
 * Circles are rendered via MapLibre's native `circle` layer type (a
 * screen-space radius computed straight from point geometry) rather than as
 * a filled polygon ring.
 */
placesurfer.map_ui.core.positions__GT_circle_features = (function placesurfer$map_ui$core$positions__GT_circle_features(positions){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__20376){
var map__20377 = p__20376;
var map__20377__$1 = cljs.core.__destructure_map(map__20377);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20377__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20377__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var area_radii = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20377__$1,new cljs.core.Keyword(null,"area-radii","area-radii",1413411485));
if(((cljs.core.seq(area_radii)) && (((typeof longitude === 'number') && (typeof latitude === 'number'))))){
var cos_lat = Math.cos((latitude * (Math.PI / (180))));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [longitude,latitude], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius-m","radius-m",-1490686729),(r * (1000)),new cljs.core.Keyword(null,"cos-lat","cos-lat",2052950682),cos_lat], null)], null);
}),area_radii);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([positions], 0)));
});
/**
 * One Point feature per radius label, anchored due north of the circle's
 * center - kept on its own source, separate from the circle points; see the
 * `area-circle-source-id` comment for why that separation matters.
 */
placesurfer.map_ui.core.positions__GT_label_features = (function placesurfer$map_ui$core$positions__GT_label_features(positions){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__20378){
var map__20379 = p__20378;
var map__20379__$1 = cljs.core.__destructure_map(map__20379);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20379__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20379__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var area_radii = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20379__$1,new cljs.core.Keyword(null,"area-radii","area-radii",1413411485));
if(((cljs.core.seq(area_radii)) && (((typeof longitude === 'number') && (typeof latitude === 'number'))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
var vec__20380 = placesurfer.map_ui.core.north_point(longitude,latitude,r);
var label_lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20380,(0),null);
var label_lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20380,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label_lng,label_lat], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)," km"].join('')], null)], null);
}),area_radii);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([positions], 0)));
});
placesurfer.map_ui.core.add_area_layers_BANG_ = (function placesurfer$map_ui$core$add_area_layers_BANG_(m){
m.addSource(placesurfer.map_ui.core.area_circle_source_id,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"geojson",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),cljs.core.PersistentVector.EMPTY], null)], null)));

m.addSource(placesurfer.map_ui.core.area_label_source_id,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"geojson",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),cljs.core.PersistentVector.EMPTY], null)], null)));

m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.area_circle_layer_id,new cljs.core.Keyword(null,"type","type",1174270348),"circle",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.area_circle_source_id,new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 6, ["circle-radius",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["interpolate",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exponential",(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zoom"], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get","radius-m"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",placesurfer.map_ui.core.web_mercator_zoom0_resolution,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get","cos-lat"], null)], null)], null),(20),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get","radius-m"], null),(1048576)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",placesurfer.map_ui.core.web_mercator_zoom0_resolution,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get","cos-lat"], null)], null)], null)], null),"circle-color","#3b82f6","circle-opacity",0.08,"circle-stroke-color","#3b82f6","circle-stroke-width",1.5,"circle-stroke-opacity",0.5], null)], null)));

return m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.area_label_layer_id,new cljs.core.Keyword(null,"type","type",1174270348),"symbol",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.area_label_source_id,new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 7, ["text-font",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Noto Sans Regular"], null),"text-field",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get","label"], null),"text-size",(11),"text-anchor","bottom","text-offset",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.3], null),"text-allow-overlap",true,"text-ignore-placement",true], null),new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 3, ["text-color","#3b82f6","text-halo-color","#ffffff","text-halo-width",1.5], null)], null)));
});
placesurfer.map_ui.core.remove_area_layers_BANG_ = (function placesurfer$map_ui$core$remove_area_layers_BANG_(m){
try{if(cljs.core.truth_(m.getLayer(placesurfer.map_ui.core.area_label_layer_id))){
m.removeLayer(placesurfer.map_ui.core.area_label_layer_id);
} else {
}

if(cljs.core.truth_(m.getLayer(placesurfer.map_ui.core.area_circle_layer_id))){
m.removeLayer(placesurfer.map_ui.core.area_circle_layer_id);
} else {
}

if(cljs.core.truth_(m.getSource(placesurfer.map_ui.core.area_label_source_id))){
m.removeSource(placesurfer.map_ui.core.area_label_source_id);
} else {
}

if(cljs.core.truth_(m.getSource(placesurfer.map_ui.core.area_circle_source_id))){
return m.removeSource(placesurfer.map_ui.core.area_circle_source_id);
} else {
return null;
}
}catch (e20383){var _ = e20383;
return null;
}});
placesurfer.map_ui.core.ensure_area_layers_BANG_ = (function placesurfer$map_ui$core$ensure_area_layers_BANG_(m){
if(cljs.core.truth_(m.getSource(placesurfer.map_ui.core.area_circle_source_id))){
return null;
} else {
return placesurfer.map_ui.core.add_area_layers_BANG_(m);
}
});
placesurfer.map_ui.core.apply_area_data_now_BANG_ = (function placesurfer$map_ui$core$apply_area_data_now_BANG_(m,positions){
try{placesurfer.map_ui.core.ensure_area_layers_BANG_(m);

var circle_source = m.getSource(placesurfer.map_ui.core.area_circle_source_id);
var label_source = m.getSource(placesurfer.map_ui.core.area_label_source_id);
if(cljs.core.truth_(circle_source)){
circle_source.setData(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),placesurfer.map_ui.core.positions__GT_circle_features(positions)], null)));
} else {
}

if(cljs.core.truth_(label_source)){
return label_source.setData(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),placesurfer.map_ui.core.positions__GT_label_features(positions)], null)));
} else {
return null;
}
}catch (e20384){var _ = e20384;
return null;
}});
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_area_debounce_timer !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_area_debounce_timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_area_pending_map !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_area_pending_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_area_pending_positions !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_area_pending_positions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
placesurfer.map_ui.core.area_debounce_ms = (250);
placesurfer.map_ui.core.apply_area_circles_BANG_ = (function placesurfer$map_ui$core$apply_area_circles_BANG_(m,positions){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_area_pending_map,m);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_area_pending_positions,positions);

var temp__5823__auto___20947 = cljs.core.deref(placesurfer.map_ui.core._BANG_area_debounce_timer);
if(cljs.core.truth_(temp__5823__auto___20947)){
var timer_20949 = temp__5823__auto___20947;
clearTimeout(timer_20949);
} else {
}

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_area_debounce_timer,setTimeout((function (){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_area_debounce_timer,null);

if((cljs.core.deref(placesurfer.map_ui.core._BANG_area_pending_map) === cljs.core.deref(placesurfer.map_ui.core._BANG_map))){
return placesurfer.map_ui.core.apply_area_data_now_BANG_(cljs.core.deref(placesurfer.map_ui.core._BANG_area_pending_map),cljs.core.deref(placesurfer.map_ui.core._BANG_area_pending_positions));
} else {
return null;
}
}),placesurfer.map_ui.core.area_debounce_ms));
});
placesurfer.map_ui.core.reset_marker_layering_BANG_ = (function placesurfer$map_ui$core$reset_marker_layering_BANG_(){
var seq__20385 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__20386 = null;
var count__20387 = (0);
var i__20388 = (0);
while(true){
if((i__20388 < count__20387)){
var marker = chunk__20386.cljs$core$IIndexed$_nth$arity$2(null,i__20388);
var temp__5823__auto___20952 = (function (){try{return marker.getElement();
}catch (e20391){var _ = e20391;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___20952)){
var el_20954 = temp__5823__auto___20952;
(el_20954.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__20955 = seq__20385;
var G__20956 = chunk__20386;
var G__20957 = count__20387;
var G__20958 = (i__20388 + (1));
seq__20385 = G__20955;
chunk__20386 = G__20956;
count__20387 = G__20957;
i__20388 = G__20958;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20385);
if(temp__5823__auto__){
var seq__20385__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20385__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20385__$1);
var G__20960 = cljs.core.chunk_rest(seq__20385__$1);
var G__20961 = c__5548__auto__;
var G__20962 = cljs.core.count(c__5548__auto__);
var G__20963 = (0);
seq__20385 = G__20960;
chunk__20386 = G__20961;
count__20387 = G__20962;
i__20388 = G__20963;
continue;
} else {
var marker = cljs.core.first(seq__20385__$1);
var temp__5823__auto___20964__$1 = (function (){try{return marker.getElement();
}catch (e20392){var _ = e20392;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___20964__$1)){
var el_20965 = temp__5823__auto___20964__$1;
(el_20965.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__20966 = cljs.core.next(seq__20385__$1);
var G__20967 = null;
var G__20968 = (0);
var G__20969 = (0);
seq__20385 = G__20966;
chunk__20386 = G__20967;
count__20387 = G__20968;
i__20388 = G__20969;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.map_ui.core.elevate_active_marker_BANG_ = (function placesurfer$map_ui$core$elevate_active_marker_BANG_(marker){
placesurfer.map_ui.core.reset_marker_layering_BANG_();

var temp__5823__auto__ = (function (){try{return marker.getElement();
}catch (e20393){var _ = e20393;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
return (el.style.zIndex = placesurfer.map_ui.core.marker_z_index_active);
} else {
return null;
}
});
placesurfer.map_ui.core.elevate_popup_layer_BANG_ = (function placesurfer$map_ui$core$elevate_popup_layer_BANG_(popup){
var temp__5823__auto__ = (function (){try{return popup.getElement();
}catch (e20394){var _ = e20394;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
return (el.style.zIndex = placesurfer.map_ui.core.popup_z_index);
} else {
return null;
}
});
placesurfer.map_ui.core.popup_open_mode = (function placesurfer$map_ui$core$popup_open_mode(popup){
return popup.placesurferOpenMode;
});
placesurfer.map_ui.core.set_popup_open_mode_BANG_ = (function placesurfer$map_ui$core$set_popup_open_mode_BANG_(popup,mode){
return (popup.placesurferOpenMode = mode);
});
placesurfer.map_ui.core.cancel_hover_close_BANG_ = (function placesurfer$map_ui$core$cancel_hover_close_BANG_(popup){
var temp__5823__auto__ = popup.placesurferCloseTimer;
if(cljs.core.truth_(temp__5823__auto__)){
var timer = temp__5823__auto__;
clearTimeout(timer);

return (popup.placesurferCloseTimer = null);
} else {
return null;
}
});
placesurfer.map_ui.core.popup_open_QMARK_ = (function placesurfer$map_ui$core$popup_open_QMARK_(popup){
return popup.isOpen() === true;
});
placesurfer.map_ui.core.marker_popup_open_QMARK_ = (function placesurfer$map_ui$core$marker_popup_open_QMARK_(marker){
var temp__5823__auto__ = (function (){try{return marker.getPopup();
}catch (e20395){var _ = e20395;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto__)){
var popup = temp__5823__auto__;
return placesurfer.map_ui.core.popup_open_QMARK_(popup);
} else {
return null;
}
});
placesurfer.map_ui.core.any_marker_popup_open_QMARK_ = (function placesurfer$map_ui$core$any_marker_popup_open_QMARK_(){
return cljs.core.boolean$(cljs.core.some(placesurfer.map_ui.core.marker_popup_open_QMARK_,cljs.core.deref(placesurfer.map_ui.core._BANG_markers)));
});
placesurfer.map_ui.core.position_map = (function placesurfer$map_ui$core$position_map(position){
if(cljs.core.map_QMARK_(position)){
return position;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(position,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
});
placesurfer.map_ui.core.marker_position_data = (function placesurfer$map_ui$core$marker_position_data(marker){
var or__5025__auto__ = (marker["placesurferPositionClj"]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__20396 = (marker["placesurferPosition"]);
if((G__20396 == null)){
return null;
} else {
return placesurfer.map_ui.core.position_map(G__20396);
}
}
});
placesurfer.map_ui.core.augment_marker_click_position = (function placesurfer$map_ui$core$augment_marker_click_position(root_el,pos){
if(cljs.core.truth_((function (){var and__5023__auto__ = pos;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = root_el;
if(cljs.core.truth_(and__5023__auto____$1)){
return root_el.classList.contains("placesurfer-marker--pin");
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pos,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154),new cljs.core.Keyword(null,"pin","pin",-2111774834));
} else {
return pos;
}
});
placesurfer.map_ui.core.position_match_QMARK_ = (function placesurfer$map_ui$core$position_match_QMARK_(pos,p__20397){
var map__20398 = p__20397;
var map__20398__$1 = cljs.core.__destructure_map(map__20398);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20398__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20398__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20398__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var or__5025__auto__ = (function (){var and__5023__auto__ = id;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pos));
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((typeof longitude === 'number') && (((typeof latitude === 'number') && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(longitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(pos))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(latitude,new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(pos))))))));
}
});
placesurfer.map_ui.core.find_marker_by_match = (function placesurfer$map_ui$core$find_marker_by_match(match){
return cljs.core.some((function (marker){
try{var pos = placesurfer.map_ui.core.marker_position_data(marker);
if(cljs.core.truth_((function (){var and__5023__auto__ = pos;
if(cljs.core.truth_(and__5023__auto__)){
return placesurfer.map_ui.core.position_match_QMARK_(pos,match);
} else {
return and__5023__auto__;
}
})())){
return marker;
} else {
return null;
}
}catch (e20399){var _ = e20399;
return null;
}}),cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
});
placesurfer.map_ui.core.refresh_row_hover_emphasis_BANG_ = (function placesurfer$map_ui$core$refresh_row_hover_emphasis_BANG_(){
var seq__20400_20978 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__20401_20979 = null;
var count__20402_20980 = (0);
var i__20403_20981 = (0);
while(true){
if((i__20403_20981 < count__20402_20980)){
var marker_20983 = chunk__20401_20979.cljs$core$IIndexed$_nth$arity$2(null,i__20403_20981);
var temp__5823__auto___20984 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_20983);
if(cljs.core.truth_(temp__5823__auto___20984)){
var visual_20985 = temp__5823__auto___20984;
visual_20985.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}

var temp__5823__auto___20986 = (function (){try{return marker_20983.getElement();
}catch (e20406){var _ = e20406;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___20986)){
var el_20987 = temp__5823__auto___20986;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core.marker_z_index_row_hover,el_20987.style.zIndex)){
(el_20987.style.zIndex = (((marker_20983 === new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup))))?placesurfer.map_ui.core.marker_z_index_active:placesurfer.map_ui.core.marker_z_index_default));
} else {
}
} else {
}


var G__20989 = seq__20400_20978;
var G__20990 = chunk__20401_20979;
var G__20991 = count__20402_20980;
var G__20992 = (i__20403_20981 + (1));
seq__20400_20978 = G__20989;
chunk__20401_20979 = G__20990;
count__20402_20980 = G__20991;
i__20403_20981 = G__20992;
continue;
} else {
var temp__5823__auto___20994 = cljs.core.seq(seq__20400_20978);
if(temp__5823__auto___20994){
var seq__20400_20995__$1 = temp__5823__auto___20994;
if(cljs.core.chunked_seq_QMARK_(seq__20400_20995__$1)){
var c__5548__auto___20996 = cljs.core.chunk_first(seq__20400_20995__$1);
var G__20997 = cljs.core.chunk_rest(seq__20400_20995__$1);
var G__20998 = c__5548__auto___20996;
var G__20999 = cljs.core.count(c__5548__auto___20996);
var G__21000 = (0);
seq__20400_20978 = G__20997;
chunk__20401_20979 = G__20998;
count__20402_20980 = G__20999;
i__20403_20981 = G__21000;
continue;
} else {
var marker_21001 = cljs.core.first(seq__20400_20995__$1);
var temp__5823__auto___21002__$1 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_21001);
if(cljs.core.truth_(temp__5823__auto___21002__$1)){
var visual_21003 = temp__5823__auto___21002__$1;
visual_21003.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}

var temp__5823__auto___21005__$1 = (function (){try{return marker_21001.getElement();
}catch (e20407){var _ = e20407;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___21005__$1)){
var el_21007 = temp__5823__auto___21005__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core.marker_z_index_row_hover,el_21007.style.zIndex)){
(el_21007.style.zIndex = (((marker_21001 === new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup))))?placesurfer.map_ui.core.marker_z_index_active:placesurfer.map_ui.core.marker_z_index_default));
} else {
}
} else {
}


var G__21009 = cljs.core.next(seq__20400_20995__$1);
var G__21010 = null;
var G__21011 = (0);
var G__21012 = (0);
seq__20400_20978 = G__21009;
chunk__20401_20979 = G__21010;
count__20402_20980 = G__21011;
i__20403_20981 = G__21012;
continue;
}
} else {
}
}
break;
}

var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_row_hover_match);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
var temp__5823__auto____$1 = placesurfer.map_ui.core.find_marker_by_match(match);
if(cljs.core.truth_(temp__5823__auto____$1)){
var marker = temp__5823__auto____$1;
var temp__5823__auto___21017__$2 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker);
if(cljs.core.truth_(temp__5823__auto___21017__$2)){
var visual_21018 = temp__5823__auto___21017__$2;
visual_21018.classList.add(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}

var temp__5823__auto____$2 = (function (){try{return marker.getElement();
}catch (e20408){var _ = e20408;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto____$2)){
var el = temp__5823__auto____$2;
return (el.style.zIndex = placesurfer.map_ui.core.marker_z_index_row_hover);
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
placesurfer.map_ui.core.cancel_row_hover_debounce_BANG_ = (function placesurfer$map_ui$core$cancel_row_hover_debounce_BANG_(){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_row_hover_debounce_timer);
if(cljs.core.truth_(temp__5823__auto__)){
var timer = temp__5823__auto__;
clearTimeout(timer);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_row_hover_debounce_timer,null);
} else {
return null;
}
});
/**
 * Scale the map marker matching `match` (:id or :longitude/:latitude) once a
 * list row has been hovered for `row-hover-debounce-ms` - see that def for
 * why this is debounced rather than immediate.
 */
placesurfer.map_ui.core.set_marker_row_emphasis_BANG_ = (function placesurfer$map_ui$core$set_marker_row_emphasis_BANG_(match){
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(match) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(match) === 'number'));
}
})())){
placesurfer.map_ui.core.cancel_row_hover_debounce_BANG_();

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_row_hover_debounce_timer,setTimeout((function (){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_row_hover_debounce_timer,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_row_hover_match,match);

return placesurfer.map_ui.core.refresh_row_hover_emphasis_BANG_();
}),placesurfer.map_ui.core.row_hover_debounce_ms));
} else {
return null;
}
});
/**
 * Restore map marker size after list row hover ends - also cancels any
 * not-yet-applied debounced emphasis, so a row the cursor only brushed past
 * (e.g. while scrolling) never touches a marker at all.
 */
placesurfer.map_ui.core.clear_marker_row_emphasis_BANG_ = (function placesurfer$map_ui$core$clear_marker_row_emphasis_BANG_(){
placesurfer.map_ui.core.cancel_row_hover_debounce_BANG_();

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_row_hover_match,null);

return placesurfer.map_ui.core.refresh_row_hover_emphasis_BANG_();
});
placesurfer.map_ui.core.close_all_popups_BANG_ = (function placesurfer$map_ui$core$close_all_popups_BANG_(){
var seq__20409_21025 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__20410_21026 = null;
var count__20411_21027 = (0);
var i__20412_21028 = (0);
while(true){
if((i__20412_21028 < count__20411_21027)){
var marker_21031 = chunk__20410_21026.cljs$core$IIndexed$_nth$arity$2(null,i__20412_21028);
var temp__5823__auto___21032 = (function (){try{return marker_21031.getPopup();
}catch (e20417){var _ = e20417;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___21032)){
var popup_21036 = temp__5823__auto___21032;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_21036);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_21036,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_21036)){
try{marker_21031.togglePopup();
}catch (e20418){var __21039 = e20418;
}} else {
}
} else {
}


var G__21041 = seq__20409_21025;
var G__21042 = chunk__20410_21026;
var G__21043 = count__20411_21027;
var G__21044 = (i__20412_21028 + (1));
seq__20409_21025 = G__21041;
chunk__20410_21026 = G__21042;
count__20411_21027 = G__21043;
i__20412_21028 = G__21044;
continue;
} else {
var temp__5823__auto___21046 = cljs.core.seq(seq__20409_21025);
if(temp__5823__auto___21046){
var seq__20409_21047__$1 = temp__5823__auto___21046;
if(cljs.core.chunked_seq_QMARK_(seq__20409_21047__$1)){
var c__5548__auto___21051 = cljs.core.chunk_first(seq__20409_21047__$1);
var G__21054 = cljs.core.chunk_rest(seq__20409_21047__$1);
var G__21055 = c__5548__auto___21051;
var G__21056 = cljs.core.count(c__5548__auto___21051);
var G__21057 = (0);
seq__20409_21025 = G__21054;
chunk__20410_21026 = G__21055;
count__20411_21027 = G__21056;
i__20412_21028 = G__21057;
continue;
} else {
var marker_21060 = cljs.core.first(seq__20409_21047__$1);
var temp__5823__auto___21061__$1 = (function (){try{return marker_21060.getPopup();
}catch (e20419){var _ = e20419;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___21061__$1)){
var popup_21062 = temp__5823__auto___21061__$1;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_21062);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_21062,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_21062)){
try{marker_21060.togglePopup();
}catch (e20420){var __21066 = e20420;
}} else {
}
} else {
}


var G__21067 = cljs.core.next(seq__20409_21047__$1);
var G__21068 = null;
var G__21069 = (0);
var G__21070 = (0);
seq__20409_21025 = G__21067;
chunk__20410_21026 = G__21068;
count__20411_21027 = G__21069;
i__20412_21028 = G__21070;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_hover_popup,null);

return placesurfer.map_ui.core.reset_marker_layering_BANG_();
});
placesurfer.map_ui.core.close_popup_BANG_ = (function placesurfer$map_ui$core$close_popup_BANG_(marker,popup){
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup)){
try{marker.togglePopup();
}catch (e20421){var __21075 = e20421;
}} else {
}

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(popup,new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup)))){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_hover_popup,null);
} else {
}

if(placesurfer.map_ui.core.any_marker_popup_open_QMARK_()){
return null;
} else {
return placesurfer.map_ui.core.reset_marker_layering_BANG_();
}
});
placesurfer.map_ui.core.open_popup_BANG_ = (function placesurfer$map_ui$core$open_popup_BANG_(marker,popup,mode,root_el){
placesurfer.map_ui.core.close_all_popups_BANG_();

try{marker.togglePopup();
}catch (e20422){var __21081 = e20422;
}
placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup,mode);

placesurfer.map_ui.core.elevate_active_marker_BANG_(marker);

placesurfer.map_ui.core.elevate_popup_layer_BANG_(popup);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_hover_popup,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"popup","popup",635890211),popup,new cljs.core.Keyword(null,"root-el","root-el",1068654895),root_el], null));
});
/**
 * Open the click popup on the marker matching `match` (:id or :longitude/:latitude).
 */
placesurfer.map_ui.core.open_marker_popup_BANG_ = (function placesurfer$map_ui$core$open_marker_popup_BANG_(p__20423){
var map__20424 = p__20423;
var map__20424__$1 = cljs.core.__destructure_map(map__20424);
var match = map__20424__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20424__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20424__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20424__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
if(cljs.core.truth_((function (){var or__5025__auto__ = id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((typeof longitude === 'number') && (typeof latitude === 'number'));
}
})())){
return cljs.core.some((function (marker){
try{var pos = placesurfer.map_ui.core.marker_position_data(marker);
if(cljs.core.truth_((function (){var and__5023__auto__ = pos;
if(cljs.core.truth_(and__5023__auto__)){
return placesurfer.map_ui.core.position_match_QMARK_(pos,match);
} else {
return and__5023__auto__;
}
})())){
var temp__5823__auto__ = marker.getPopup();
if(cljs.core.truth_(temp__5823__auto__)){
var popup = temp__5823__auto__;
var temp__5823__auto____$1 = marker.getElement();
if(cljs.core.truth_(temp__5823__auto____$1)){
var root_el = temp__5823__auto____$1;
placesurfer.map_ui.core.open_popup_BANG_(marker,popup,"click",root_el);

return true;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}catch (e20425){var _ = e20425;
return null;
}}),cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
} else {
return null;
}
});
placesurfer.map_ui.core.schedule_hover_close_BANG_ = (function placesurfer$map_ui$core$schedule_hover_close_BANG_(marker,popup){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hover",placesurfer.map_ui.core.popup_open_mode(popup))){
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup);

return (popup.placesurferCloseTimer = setTimeout((function (){
(popup.placesurferCloseTimer = null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hover",placesurfer.map_ui.core.popup_open_mode(popup))){
return placesurfer.map_ui.core.close_popup_BANG_(marker,popup);
} else {
return null;
}
}),placesurfer.map_ui.core.hover_close_delay_ms));
} else {
return null;
}
});
placesurfer.map_ui.core.el_contains_point_QMARK_ = (function placesurfer$map_ui$core$el_contains_point_QMARK_(el,client_x,client_y){
if(cljs.core.truth_((function (){var and__5023__auto__ = el;
if(cljs.core.truth_(and__5023__auto__)){
return ((typeof client_x === 'number') && (typeof client_y === 'number'));
} else {
return and__5023__auto__;
}
})())){
var rect = el.getBoundingClientRect();
return (((((rect.left <= client_x)) && ((client_x <= rect.right)))) && ((((rect.top <= client_y)) && ((client_y <= rect.bottom)))));
} else {
return null;
}
});
placesurfer.map_ui.core.map_event_client_point = (function placesurfer$map_ui$core$map_event_client_point(e){
var dom = (function (){var or__5025__auto__ = e.originalEvent;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return e;
}
})();
return ({"x": dom.clientX, "y": dom.clientY});
});
placesurfer.map_ui.core.pointer_over_hover_zone_QMARK_ = (function placesurfer$map_ui$core$pointer_over_hover_zone_QMARK_(client_x,client_y){
var temp__5821__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup);
if(cljs.core.truth_(temp__5821__auto__)){
var map__20426 = temp__5821__auto__;
var map__20426__$1 = cljs.core.__destructure_map(map__20426);
var root_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20426__$1,new cljs.core.Keyword(null,"root-el","root-el",1068654895));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20426__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20426__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
var marker__$1 = marker;
var popup__$1 = popup;
var or__5025__auto__ = placesurfer.map_ui.core.el_contains_point_QMARK_(root_el,client_x,client_y);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var temp__5823__auto__ = popup__$1.getElement();
if(cljs.core.truth_(temp__5823__auto__)){
var popup_el = temp__5823__auto__;
return placesurfer.map_ui.core.el_contains_point_QMARK_(popup_el,client_x,client_y);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var temp__5823__auto__ = marker__$1.getElement();
if(cljs.core.truth_(temp__5823__auto__)){
var marker_el = temp__5823__auto__;
return placesurfer.map_ui.core.el_contains_point_QMARK_(marker_el,client_x,client_y);
} else {
return null;
}
}
}
} else {
return false;
}
});
placesurfer.map_ui.core.set_map_cursor_BANG_ = (function placesurfer$map_ui$core$set_map_cursor_BANG_(m,cursor){
var temp__5823__auto__ = (function (){try{return m.getCanvas();
}catch (e20427){var _ = e20427;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto__)){
var canvas = temp__5823__auto__;
return (canvas.style.cursor = cursor);
} else {
return null;
}
});
placesurfer.map_ui.core.ensure_map_country_pick_click_BANG_ = (function placesurfer$map_ui$core$ensure_map_country_pick_click_BANG_(m){
if(cljs.core.truth_(m.placesurferCountryPickClick)){
return null;
} else {
(m.placesurferCountryPickClick = true);

return m.on("click",(function (e){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_country_pick_active_QMARK_))){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_country_pick_click_handler);
if(cljs.core.truth_(temp__5823__auto__)){
var handler = temp__5823__auto__;
var ll = e.lngLat;
if(cljs.core.truth_((function (){var and__5023__auto__ = ll;
if(cljs.core.truth_(and__5023__auto__)){
return ((typeof ll.lng === 'number') && (typeof ll.lat === 'number'));
} else {
return and__5023__auto__;
}
})())){
var G__20428 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__20428) : handler.call(null,G__20428));
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
}
});
placesurfer.map_ui.core.click_inside_popup_or_marker_QMARK_ = (function placesurfer$map_ui$core$click_inside_popup_or_marker_QMARK_(target){
return cljs.core.boolean$((cljs.core.truth_(target)?(function (){var or__5025__auto__ = target.closest(".maplibregl-popup");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = target.closest(".map-marker-popup");
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = target.closest(".placesurfer-marker");
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return target.closest(".maplibregl-marker");
}
}
}
})():null));
});
placesurfer.map_ui.core.ensure_map_add_pin_click_BANG_ = (function placesurfer$map_ui$core$ensure_map_add_pin_click_BANG_(m){
if(cljs.core.truth_(m.placesurferAddPinClick)){
return null;
} else {
(m.placesurferAddPinClick = true);

return m.on("click",(function (e){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_))){
var target = (function (){var or__5025__auto__ = e.originalEvent;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return e;
}
})().target;
if(placesurfer.map_ui.core.click_inside_popup_or_marker_QMARK_(target)){
return null;
} else {
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_add_pin_click_handler);
if(cljs.core.truth_(temp__5823__auto__)){
var handler = temp__5823__auto__;
var ll = e.lngLat;
if(cljs.core.truth_((function (){var and__5023__auto__ = ll;
if(cljs.core.truth_(and__5023__auto__)){
return ((typeof ll.lng === 'number') && (typeof ll.lat === 'number'));
} else {
return and__5023__auto__;
}
})())){
var G__20429 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__20429) : handler.call(null,G__20429));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
}));
}
});
placesurfer.map_ui.core.ensure_map_popup_guard_BANG_ = (function placesurfer$map_ui$core$ensure_map_popup_guard_BANG_(map){
if(cljs.core.truth_(map.placesurferPopupGuard)){
return null;
} else {
(map.placesurferPopupGuard = true);

map.on("mousemove",(function (e){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup);
if(cljs.core.truth_(temp__5823__auto__)){
var map__20430 = temp__5823__auto__;
var map__20430__$1 = cljs.core.__destructure_map(map__20430);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20430__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20430__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hover",placesurfer.map_ui.core.popup_open_mode(popup))){
var pt = placesurfer.map_ui.core.map_event_client_point(e);
var x = pt.x;
var y = pt.y;
if(cljs.core.truth_(placesurfer.map_ui.core.pointer_over_hover_zone_QMARK_(x,y))){
return null;
} else {
return placesurfer.map_ui.core.close_popup_BANG_(marker,popup);
}
} else {
return null;
}
} else {
return null;
}
}));

return map.on("click",(function (e){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup);
if(cljs.core.truth_(temp__5823__auto__)){
var map__20431 = temp__5823__auto__;
var map__20431__$1 = cljs.core.__destructure_map(map__20431);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20431__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20431__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
if(placesurfer.map_ui.core.popup_open_QMARK_(popup)){
var target = (function (){var or__5025__auto__ = e.originalEvent;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return e;
}
})().target;
if(placesurfer.map_ui.core.click_inside_popup_or_marker_QMARK_(target)){
return null;
} else {
return placesurfer.map_ui.core.close_popup_BANG_(marker,popup);
}
} else {
return null;
}
} else {
return null;
}
}));
}
});
placesurfer.map_ui.core.marker_click_position = (function placesurfer$map_ui$core$marker_click_position(marker,root_el,position){
var temp__5823__auto__ = (function (){var or__5025__auto__ = placesurfer.map_ui.core.marker_position_data(marker);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = ((cljs.core.map_QMARK_(position))?position:null);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
if(cljs.core.truth_(root_el)){
return (root_el["placesurferPositionClj"]);
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var pos = temp__5823__auto__;
return placesurfer.map_ui.core.augment_marker_click_position(root_el,pos);
} else {
return null;
}
});
placesurfer.map_ui.core.attach_marker_interactions_BANG_ = (function placesurfer$map_ui$core$attach_marker_interactions_BANG_(marker,popup,root_el,position,popup_opts){
root_el.addEventListener("mouseenter",(function (_){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_))){
return null;
} else {
var temp__5823__auto___21106 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5823__auto___21106)){
var visual_21107 = temp__5823__auto___21106;
visual_21107.classList.add(placesurfer.map_ui.core.marker_map_hover_class);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("click",placesurfer.map_ui.core.popup_open_mode(popup))){
return null;
} else {
return placesurfer.map_ui.core.open_popup_BANG_(marker,popup,"hover",root_el);
}
}
}));

root_el.addEventListener("mouseleave",(function (_){
var temp__5823__auto___21109 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5823__auto___21109)){
var visual_21110 = temp__5823__auto___21109;
visual_21110.classList.remove(placesurfer.map_ui.core.marker_map_hover_class);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hover",placesurfer.map_ui.core.popup_open_mode(popup))){
return placesurfer.map_ui.core.schedule_hover_close_BANG_(marker,popup);
} else {
return null;
}
}));

if(cljs.core.truth_(popup.placesurferPopupBridge)){
} else {
(popup.placesurferPopupBridge = true);

popup.on("open",(function (_){
placesurfer.map_ui.core.elevate_popup_layer_BANG_(popup);

var temp__5823__auto__ = popup.getElement();
if(cljs.core.truth_(temp__5823__auto__)){
var popup_el = temp__5823__auto__;
popup_el.addEventListener("mouseenter",(function (){
return placesurfer.map_ui.core.cancel_hover_close_BANG_(popup);
}));

popup_el.addEventListener("mouseleave",(function (){
return placesurfer.map_ui.core.schedule_hover_close_BANG_(marker,popup);
}));

return popup_el.addEventListener("click",(function (e){
if(cljs.core.truth_((function (){var G__20432 = e.target;
if((G__20432 == null)){
return null;
} else {
return G__20432.closest(".map-popup-delete-btn");
}
})())){
e.stopPropagation();

e.preventDefault();

var temp__5823__auto___21112__$1 = cljs.core.deref(placesurfer.map_ui.core._BANG_on_marker_delete);
if(cljs.core.truth_(temp__5823__auto___21112__$1)){
var handler_21113 = temp__5823__auto___21112__$1;
var temp__5823__auto___21114__$2 = placesurfer.map_ui.core.marker_position_data(marker);
if(cljs.core.truth_(temp__5823__auto___21114__$2)){
var pos_21115 = temp__5823__auto___21114__$2;
(handler_21113.cljs$core$IFn$_invoke$arity$1 ? handler_21113.cljs$core$IFn$_invoke$arity$1(pos_21115) : handler_21113.call(null,pos_21115));
} else {
}
} else {
}

return placesurfer.map_ui.core.close_popup_BANG_(marker,popup);
} else {
if(cljs.core.truth_((function (){var G__20433 = e.target;
if((G__20433 == null)){
return null;
} else {
return G__20433.closest(".map-popup-edit-btn");
}
})())){
e.stopPropagation();

e.preventDefault();

var temp__5823__auto___21119__$1 = cljs.core.deref(placesurfer.map_ui.core._BANG_on_marker_edit);
if(cljs.core.truth_(temp__5823__auto___21119__$1)){
var handler_21120 = temp__5823__auto___21119__$1;
var temp__5823__auto___21121__$2 = placesurfer.map_ui.core.marker_position_data(marker);
if(cljs.core.truth_(temp__5823__auto___21121__$2)){
var pos_21122 = temp__5823__auto___21121__$2;
(handler_21120.cljs$core$IFn$_invoke$arity$1 ? handler_21120.cljs$core$IFn$_invoke$arity$1(pos_21122) : handler_21120.call(null,pos_21122));
} else {
}
} else {
}

return placesurfer.map_ui.core.close_popup_BANG_(marker,popup);
} else {
return null;
}
}
}));
} else {
return null;
}
}));
}

return root_el.addEventListener("click",(function (e){
e.stopPropagation();

if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_))){
return null;
} else {
var temp__5823__auto___21123 = cljs.core.deref(placesurfer.map_ui.core._BANG_on_marker_click);
if(cljs.core.truth_(temp__5823__auto___21123)){
var handler_21124 = temp__5823__auto___21123;
var temp__5823__auto___21125__$1 = placesurfer.map_ui.core.marker_click_position(marker,root_el,position);
if(cljs.core.truth_(temp__5823__auto___21125__$1)){
var pos_21126 = temp__5823__auto___21125__$1;
(handler_21124.cljs$core$IFn$_invoke$arity$1 ? handler_21124.cljs$core$IFn$_invoke$arity$1(pos_21126) : handler_21124.call(null,pos_21126));
} else {
}
} else {
}

if(placesurfer.map_ui.core.marker_pick_enabled_QMARK_(position)){
var pick_handler = cljs.core.deref(placesurfer.map_ui.core._BANG_marker_pick_handler);
var pos = placesurfer.map_ui.core.marker_click_position(marker,root_el,position);
var handled_QMARK_ = (cljs.core.truth_((function (){var and__5023__auto__ = pick_handler;
if(cljs.core.truth_(and__5023__auto__)){
return pos;
} else {
return and__5023__auto__;
}
})())?(pick_handler.cljs$core$IFn$_invoke$arity$1 ? pick_handler.cljs$core$IFn$_invoke$arity$1(pos) : pick_handler.call(null,pos)):null);
var departures_url = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(pick_handler);
if(and__5023__auto__){
var and__5023__auto____$1 = pos;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.contains_QMARK_(placesurfer.map_ui.core.transit_marker_topics,placesurfer.map_ui.core.position_topic(pos));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transit-departures-url","transit-departures-url",367277988).cljs$core$IFn$_invoke$arity$1(pos)))):null);
if(cljs.core.truth_(handled_QMARK_)){
return null;
} else {
if(cljs.core.truth_(departures_url)){
return placesurfer.map_ui.core.open_transit_departures_BANG_(departures_url,new cljs.core.Keyword(null,"transit-destination","transit-destination",1279718214).cljs$core$IFn$_invoke$arity$1(popup_opts));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("click",placesurfer.map_ui.core.popup_open_mode(popup))){
return placesurfer.map_ui.core.close_popup_BANG_(marker,popup);
} else {
return placesurfer.map_ui.core.open_popup_BANG_(marker,popup,"click",root_el);

}
}
}
} else {
return null;
}
}
}));
});
placesurfer.map_ui.core.add_markers_to_BANG_ = (function placesurfer$map_ui$core$add_markers_to_BANG_(markers_atom,m,positions,popup_opts){
var seq__20434 = cljs.core.seq(positions);
var chunk__20435 = null;
var count__20436 = (0);
var i__20437 = (0);
while(true){
if((i__20437 < count__20436)){
var position = chunk__20435.cljs$core$IIndexed$_nth$arity$2(null,i__20437);
var map__20444_21129 = position;
var map__20444_21130__$1 = cljs.core.__destructure_map(map__20444_21129);
var longitude_21131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20444_21130__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_21132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20444_21130__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_21133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20444_21130__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_21134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20444_21130__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var marker_anchor_21135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20444_21130__$1,new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686));
var marker_offset_21136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20444_21130__$1,new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711));
var resolved_topic_21137 = (function (){var or__5025__auto__ = marker_topic_21134;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_21133;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__20445_21138 = placesurfer.map_ui.core.marker_style_for(resolved_topic_21137);
var map__20445_21139__$1 = cljs.core.__destructure_map(map__20445_21138);
var anchor_21140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20445_21139__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var effective_anchor_21141 = (function (){var or__5025__auto__ = marker_anchor_21135;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return anchor_21140;
}
})();
var root_el_21142 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(resolved_topic_21137,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position),effective_anchor_21141);
var marker_opts_21143 = (function (){var G__20446 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_21142,new cljs.core.Keyword(null,"anchor","anchor",1549638489),effective_anchor_21141], null);
if(cljs.core.seq(marker_offset_21136)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20446,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.clj__GT_js(marker_offset_21136));
} else {
return G__20446;
}
})();
var marker_21144 = (new maplibregl.Marker(cljs.core.clj__GT_js(marker_opts_21143)));
var popup_21145 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_21144["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_21144["placesurferPositionClj"] = position);

popup_21145.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_21144.setLngLat([longitude_21131,latitude_21132]);

marker_21144.setPopup(popup_21145);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_21144,popup_21145,root_el_21142,position,popup_opts);

marker_21144.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(markers_atom,cljs.core.conj,marker_21144);


var G__21149 = seq__20434;
var G__21150 = chunk__20435;
var G__21151 = count__20436;
var G__21152 = (i__20437 + (1));
seq__20434 = G__21149;
chunk__20435 = G__21150;
count__20436 = G__21151;
i__20437 = G__21152;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20434);
if(temp__5823__auto__){
var seq__20434__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20434__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20434__$1);
var G__21153 = cljs.core.chunk_rest(seq__20434__$1);
var G__21154 = c__5548__auto__;
var G__21155 = cljs.core.count(c__5548__auto__);
var G__21156 = (0);
seq__20434 = G__21153;
chunk__20435 = G__21154;
count__20436 = G__21155;
i__20437 = G__21156;
continue;
} else {
var position = cljs.core.first(seq__20434__$1);
var map__20447_21157 = position;
var map__20447_21158__$1 = cljs.core.__destructure_map(map__20447_21157);
var longitude_21159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447_21158__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_21160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447_21158__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_21161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447_21158__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_21162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447_21158__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var marker_anchor_21163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447_21158__$1,new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686));
var marker_offset_21164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447_21158__$1,new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711));
var resolved_topic_21165 = (function (){var or__5025__auto__ = marker_topic_21162;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_21161;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__20448_21166 = placesurfer.map_ui.core.marker_style_for(resolved_topic_21165);
var map__20448_21167__$1 = cljs.core.__destructure_map(map__20448_21166);
var anchor_21168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20448_21167__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var effective_anchor_21169 = (function (){var or__5025__auto__ = marker_anchor_21163;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return anchor_21168;
}
})();
var root_el_21170 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(resolved_topic_21165,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position),effective_anchor_21169);
var marker_opts_21171 = (function (){var G__20449 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_21170,new cljs.core.Keyword(null,"anchor","anchor",1549638489),effective_anchor_21169], null);
if(cljs.core.seq(marker_offset_21164)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20449,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.clj__GT_js(marker_offset_21164));
} else {
return G__20449;
}
})();
var marker_21172 = (new maplibregl.Marker(cljs.core.clj__GT_js(marker_opts_21171)));
var popup_21173 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_21172["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_21172["placesurferPositionClj"] = position);

popup_21173.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_21172.setLngLat([longitude_21159,latitude_21160]);

marker_21172.setPopup(popup_21173);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_21172,popup_21173,root_el_21170,position,popup_opts);

marker_21172.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(markers_atom,cljs.core.conj,marker_21172);


var G__21174 = cljs.core.next(seq__20434__$1);
var G__21175 = null;
var G__21176 = (0);
var G__21177 = (0);
seq__20434 = G__21174;
chunk__20435 = G__21175;
count__20436 = G__21176;
i__20437 = G__21177;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.map_ui.core.add_markers_BANG_ = (function placesurfer$map_ui$core$add_markers_BANG_(m,positions,popup_opts){
return placesurfer.map_ui.core.add_markers_to_BANG_(placesurfer.map_ui.core._BANG_markers,m,positions,popup_opts);
});
placesurfer.map_ui.core.rebuild_dense_markers_now_BANG_ = (function placesurfer$map_ui$core$rebuild_dense_markers_now_BANG_(m){
if((m === cljs.core.deref(placesurfer.map_ui.core._BANG_map))){
placesurfer.map_ui.core.clear_dense_markers_BANG_();

var visible = placesurfer.map_ui.core.dense_positions_for_viewport(m,cljs.core.deref(placesurfer.map_ui.core._BANG_dense_positions));
if(cljs.core.seq(visible)){
return placesurfer.map_ui.core.add_markers_to_BANG_(placesurfer.map_ui.core._BANG_dense_markers,m,visible,cljs.core.deref(placesurfer.map_ui.core._BANG_dense_popup_opts));
} else {
return null;
}
} else {
return null;
}
});
placesurfer.map_ui.core.schedule_dense_viewport_refresh_BANG_ = (function placesurfer$map_ui$core$schedule_dense_viewport_refresh_BANG_(m){
var temp__5823__auto___21178 = cljs.core.deref(placesurfer.map_ui.core._BANG_dense_viewport_timer);
if(cljs.core.truth_(temp__5823__auto___21178)){
var timer_21179 = temp__5823__auto___21178;
clearTimeout(timer_21179);
} else {
}

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_viewport_timer,setTimeout((function (){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_viewport_timer,null);

return placesurfer.map_ui.core.rebuild_dense_markers_now_BANG_(m);
}),placesurfer.map_ui.core.dense_viewport_debounce_ms));
});
placesurfer.map_ui.core.fit_mock_map_BANG_ = (function placesurfer$map_ui$core$fit_mock_map_BANG_(m,p__20450){
var map__20451 = p__20450;
var map__20451__$1 = cljs.core.__destructure_map(map__20451);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20451__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20451__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20451__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20451__$1,new cljs.core.Keyword(null,"north","north",651323902));
(m.fitBoundsCalled = true);

var c_21180 = m.getCenter();
(c_21180.lng = ((west + east) / 2.0));

(c_21180.lat = ((south + north) / 2.0));

return m.setZoom(placesurfer.map_ui.core.fit_max_zoom);
});
placesurfer.map_ui.core.fit_lng_lat_box_BANG_ = (function placesurfer$map_ui$core$fit_lng_lat_box_BANG_(m,box,p__20452){
var map__20453 = p__20452;
var map__20453__$1 = cljs.core.__destructure_map(map__20453);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20453__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
if(placesurfer.map_ui.bounds.valid_lng_lat_box_QMARK_(box)){
var map__20454 = placesurfer.map_ui.bounds.pad_degenerate_box(box);
var map__20454__$1 = cljs.core.__destructure_map(map__20454);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20454__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20454__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20454__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20454__$1,new cljs.core.Keyword(null,"north","north",651323902));
if(placesurfer.map_ui.core.mock_map_QMARK_(m)){
return placesurfer.map_ui.core.fit_mock_map_BANG_(m,box);
} else {
var lng_bounds = (new maplibregl.LngLatBounds([west,south],[east,north]));
placesurfer.map_ui.core.safe_resize_BANG_(m);

return m.fitBounds(lng_bounds,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),placesurfer.map_ui.core.fit_padding,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),placesurfer.map_ui.core.fit_max_zoom,new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.fit_animate_duration_ms:(0))], null)));
}
} else {
return null;
}
});
placesurfer.map_ui.core.fit_bounds_BANG_ = (function placesurfer$map_ui$core$fit_bounds_BANG_(m,positions,p__20455){
var map__20456 = p__20455;
var map__20456__$1 = cljs.core.__destructure_map(map__20456);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20456__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var temp__5823__auto__ = placesurfer.map_ui.bounds.fit_lng_lat_bounds(positions);
if(cljs.core.truth_(temp__5823__auto__)){
var box = temp__5823__auto__;
return placesurfer.map_ui.core.fit_lng_lat_box_BANG_(m,box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null));
} else {
return null;
}
});
placesurfer.map_ui.core.normalize_state = (function placesurfer$map_ui$core$normalize_state(p__20457){
var map__20458 = p__20457;
var map__20458__$1 = cljs.core.__destructure_map(map__20458);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20458__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20458__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20458__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20458__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20458__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20458__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20458__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.vec(positions),new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),fit_bounds,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003),draft_marker,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185),open_popup_for,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),(function (){var or__5025__auto__ = popup_opts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"fit?","fit?",1773758200),cljs.core.boolean$(fit_QMARK_),new cljs.core.Keyword(null,"animate?","animate?",-1559039739),(((!((animate_QMARK_ == null))))?cljs.core.boolean$(animate_QMARK_):true)], null);
});
placesurfer.map_ui.core.apply_now_BANG_ = (function placesurfer$map_ui$core$apply_now_BANG_(m,p__20459){
var map__20460 = p__20459;
var map__20460__$1 = cljs.core.__destructure_map(map__20460);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
if((m === cljs.core.deref(placesurfer.map_ui.core._BANG_map))){
var vec__20461_21181 = placesurfer.map_ui.core.partition_dense_positions(positions);
var stable_positions_21182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20461_21181,(0),null);
var dense_positions_21183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20461_21181,(1),null);
placesurfer.map_ui.core.clear_markers_BANG_();

if(cljs.core.seq(stable_positions_21182)){
placesurfer.map_ui.core.add_markers_BANG_(m,stable_positions_21182,popup_opts);
} else {
}

if(cljs.core.truth_(draft_marker)){
placesurfer.map_ui.core.add_markers_BANG_(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draft_marker], null),popup_opts);
} else {
}

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_positions,dense_positions_21183);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_popup_opts,popup_opts);

placesurfer.map_ui.core.rebuild_dense_markers_now_BANG_(m);

try{placesurfer.map_ui.core.apply_area_circles_BANG_(m,(function (){var G__20465 = cljs.core.vec(positions);
if(cljs.core.truth_(draft_marker)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20465,draft_marker);
} else {
return G__20465;
}
})());
}catch (e20464){var __21184 = e20464;
}
if(cljs.core.truth_((function (){var and__5023__auto__ = fit_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(positions);
} else {
return and__5023__auto__;
}
})())){
placesurfer.map_ui.core.fit_bounds_BANG_(m,positions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null));
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = fit_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return fit_bounds;
} else {
return and__5023__auto__;
}
})())){
placesurfer.map_ui.core.fit_lng_lat_box_BANG_(m,fit_bounds,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null));
} else {
}
}

if(cljs.core.truth_(open_popup_for)){
placesurfer.map_ui.core.open_marker_popup_BANG_(open_popup_for);
} else {
}

return placesurfer.map_ui.core.refresh_row_hover_emphasis_BANG_();
} else {
return null;
}
});
placesurfer.map_ui.core.consume_pending_BANG_ = (function placesurfer$map_ui$core$consume_pending_BANG_(m){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_pending_state);
if(cljs.core.truth_(temp__5823__auto__)){
var state = temp__5823__auto__;
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_pending_state,null);

return placesurfer.map_ui.core.apply_now_BANG_(m,state);
} else {
return null;
}
});
placesurfer.map_ui.core.schedule_consume_when_ready_BANG_ = (function placesurfer$map_ui$core$schedule_consume_when_ready_BANG_(m){
var seq__20466 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50),(150),(400),(800),(1500)], null));
var chunk__20467 = null;
var count__20468 = (0);
var i__20469 = (0);
while(true){
if((i__20469 < count__20468)){
var delay_ms = chunk__20467.cljs$core$IIndexed$_nth$arity$2(null,i__20469);
setTimeout(((function (seq__20466,chunk__20467,count__20468,i__20469,delay_ms){
return (function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = (m === cljs.core.deref(placesurfer.map_ui.core._BANG_map));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.deref(placesurfer.map_ui.core._BANG_pending_state);
if(cljs.core.truth_(and__5023__auto____$1)){
return placesurfer.map_ui.core.map_ready_QMARK_(m);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return placesurfer.map_ui.core.consume_pending_BANG_(m);
} else {
return null;
}
});})(seq__20466,chunk__20467,count__20468,i__20469,delay_ms))
,delay_ms);


var G__21185 = seq__20466;
var G__21186 = chunk__20467;
var G__21187 = count__20468;
var G__21188 = (i__20469 + (1));
seq__20466 = G__21185;
chunk__20467 = G__21186;
count__20468 = G__21187;
i__20469 = G__21188;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20466);
if(temp__5823__auto__){
var seq__20466__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20466__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20466__$1);
var G__21189 = cljs.core.chunk_rest(seq__20466__$1);
var G__21190 = c__5548__auto__;
var G__21191 = cljs.core.count(c__5548__auto__);
var G__21192 = (0);
seq__20466 = G__21189;
chunk__20467 = G__21190;
count__20468 = G__21191;
i__20469 = G__21192;
continue;
} else {
var delay_ms = cljs.core.first(seq__20466__$1);
setTimeout(((function (seq__20466,chunk__20467,count__20468,i__20469,delay_ms,seq__20466__$1,temp__5823__auto__){
return (function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = (m === cljs.core.deref(placesurfer.map_ui.core._BANG_map));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.deref(placesurfer.map_ui.core._BANG_pending_state);
if(cljs.core.truth_(and__5023__auto____$1)){
return placesurfer.map_ui.core.map_ready_QMARK_(m);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return placesurfer.map_ui.core.consume_pending_BANG_(m);
} else {
return null;
}
});})(seq__20466,chunk__20467,count__20468,i__20469,delay_ms,seq__20466__$1,temp__5823__auto__))
,delay_ms);


var G__21193 = cljs.core.next(seq__20466__$1);
var G__21194 = null;
var G__21195 = (0);
var G__21196 = (0);
seq__20466 = G__21193;
chunk__20467 = G__21194;
count__20468 = G__21195;
i__20469 = G__21196;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.map_ui.core.consume_pending_if_ready_BANG_ = (function placesurfer$map_ui$core$consume_pending_if_ready_BANG_(m){
if(cljs.core.truth_((function (){var and__5023__auto__ = (m === cljs.core.deref(placesurfer.map_ui.core._BANG_map));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.deref(placesurfer.map_ui.core._BANG_pending_state);
if(cljs.core.truth_(and__5023__auto____$1)){
return placesurfer.map_ui.core.map_ready_QMARK_(m);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return placesurfer.map_ui.core.consume_pending_BANG_(m);
} else {
return null;
}
});
/**
 * When set, marker clicks invoke `handler` with a keywordized position map
 * instead of toggling the hover/click popup.
 */
placesurfer.map_ui.core.set_marker_pick_handler_BANG_ = (function placesurfer$map_ui$core$set_marker_pick_handler_BANG_(handler){
return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_marker_pick_handler,handler);
});
/**
 * When set, `handler` is invoked with a keywordized position map on every
 * marker click, regardless of pick-mode, in addition to (not instead of)
 * the normal hover/click popup toggle - used to cross-highlight a topic
 * marker's corresponding list row (e.g. Hemnet search results).
 */
placesurfer.map_ui.core.set_on_marker_click_handler_BANG_ = (function placesurfer$map_ui$core$set_on_marker_click_handler_BANG_(handler){
return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_on_marker_click,handler);
});
/**
 * When set, `handler` is invoked with a keywordized position map when the
 * trash icon inside a :pin/:hemnet-result marker's popup is clicked (see
 * `popup/popup-html`'s `.map-popup-delete-btn` - only rendered for those two
 * marker topics). The popup is closed right after.
 */
placesurfer.map_ui.core.set_on_marker_delete_handler_BANG_ = (function placesurfer$map_ui$core$set_on_marker_delete_handler_BANG_(handler){
return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_on_marker_delete,handler);
});
/**
 * When set, `handler` is invoked with a keywordized position map when the
 * pencil icon inside a :pin marker's popup is clicked (see
 * `popup/popup-html`'s `.map-popup-edit-btn` - only rendered for that
 * topic, and only when the caller passed `:editable? true`). The popup is
 * closed right after.
 */
placesurfer.map_ui.core.set_on_marker_edit_handler_BANG_ = (function placesurfer$map_ui$core$set_on_marker_edit_handler_BANG_(handler){
return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_on_marker_edit,handler);
});
/**
 * Toggle country-pick mode: arrow cursor and map clicks invoke `on-click` when active.
 */
placesurfer.map_ui.core.sync_country_pick_state_BANG_ = (function placesurfer$map_ui$core$sync_country_pick_state_BANG_(p__20470){
var map__20471 = p__20470;
var map__20471__$1 = cljs.core.__destructure_map(map__20471);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20471__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20471__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_country_pick_active_QMARK_,cljs.core.boolean$(active_QMARK_));

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_country_pick_click_handler,(cljs.core.truth_(active_QMARK_)?on_click:null));

var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return placesurfer.map_ui.core.set_map_cursor_BANG_(m,(cljs.core.truth_(active_QMARK_)?"default":(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_))?"default":"grab"
)));
} else {
return null;
}
});
/**
 * Toggle add-pin mode: arrow cursor, map canvas clicks invoke `on-click` once,
 * and marker hover/click interactions are suppressed while active.
 */
placesurfer.map_ui.core.sync_add_pin_mode_BANG_ = (function placesurfer$map_ui$core$sync_add_pin_mode_BANG_(p__20472){
var map__20473 = p__20472;
var map__20473__$1 = cljs.core.__destructure_map(map__20473);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20473__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20473__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_,cljs.core.boolean$(active_QMARK_));

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_click_handler,(cljs.core.truth_(active_QMARK_)?on_click:null));

var temp__5823__auto___21198 = cljs.core.deref(placesurfer.map_ui.core._BANG_map_container);
if(cljs.core.truth_(temp__5823__auto___21198)){
var el_21199 = temp__5823__auto___21198;
if(cljs.core.truth_(active_QMARK_)){
el_21199.classList.add("map-add-pin-active");
} else {
el_21199.classList.remove("map-add-pin-active");
}
} else {
}

var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return placesurfer.map_ui.core.set_map_cursor_BANG_(m,(cljs.core.truth_(active_QMARK_)?"default":(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_country_pick_active_QMARK_))?"default":"grab"
)));
} else {
return null;
}
});
/**
 * Return {:longitude :latitude :zoom} for the current map view, or nil.
 */
placesurfer.map_ui.core.map_view_state = (function placesurfer$map_ui$core$map_view_state(){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
if(cljs.core.truth_(placesurfer.map_ui.core.map_ready_QMARK_(m))){
var c = m.getCenter();
var zoom = (function (){try{return m.getZoom();
}catch (e20474){var _ = e20474;
return null;
}})();
if(cljs.core.truth_((function (){var and__5023__auto__ = c;
if(cljs.core.truth_(and__5023__auto__)){
return ((typeof c.lng === 'number') && (((typeof c.lat === 'number') && (typeof zoom === 'number'))));
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),c.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),c.lat,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom], null);
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
/**
 * Return {:longitude :latitude} for the current map center, or nil.
 */
placesurfer.map_ui.core.map_center_coords = (function placesurfer$map_ui$core$map_center_coords(){
var temp__5823__auto__ = placesurfer.map_ui.core.map_view_state();
if(cljs.core.truth_(temp__5823__auto__)){
var view = temp__5823__auto__;
return cljs.core.select_keys(view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"latitude","latitude",394867543)], null));
} else {
return null;
}
});
/**
 * Restore a previously captured {:longitude :latitude :zoom} view.
 */
placesurfer.map_ui.core.fly_to_view_BANG_ = (function placesurfer$map_ui$core$fly_to_view_BANG_(p__20475){
var map__20476 = p__20475;
var map__20476__$1 = cljs.core.__destructure_map(map__20476);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20476__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20476__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20476__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20476__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
if(((typeof longitude === 'number') && (((typeof latitude === 'number') && (typeof zoom === 'number'))))){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom,new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null)));
}catch (e20477){var _ = e20477;
return null;
}});
if(cljs.core.truth_(placesurfer.map_ui.core.map_ready_QMARK_(m))){
return fly_BANG_();
} else {
return m.once("load",(function (_){
return fly_BANG_();
}));
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Fly the map to `longitude` / `latitude`. No-op when the map is not mounted.
 * With `:preserve-zoom? true`, only pans — current zoom is unchanged.
 */
placesurfer.map_ui.core.center_on_position_BANG_ = (function placesurfer$map_ui$core$center_on_position_BANG_(p__20478){
var map__20479 = p__20478;
var map__20479__$1 = cljs.core.__destructure_map(map__20479);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20479__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20479__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20479__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),placesurfer.map_ui.core.center_default_zoom);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20479__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
var preserve_zoom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20479__$1,new cljs.core.Keyword(null,"preserve-zoom?","preserve-zoom?",-1650190790));
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js((function (){var G__20481 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null);
if(cljs.core.not(preserve_zoom_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20481,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom);
} else {
return G__20481;
}
})()));
}catch (e20480){var _ = e20480;
return null;
}});
if(cljs.core.truth_(placesurfer.map_ui.core.map_ready_QMARK_(m))){
return fly_BANG_();
} else {
return m.once("load",(function (_){
return fly_BANG_();
}));
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Replace markers and optionally fit bounds. Latest call always wins, even
 * when several calls arrive before the map is ready. Safe to call before
 * mount-map!.
 */
placesurfer.map_ui.core.apply_state_BANG_ = (function placesurfer$map_ui$core$apply_state_BANG_(state){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_pending_state,placesurfer.map_ui.core.normalize_state(state));

var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
if(cljs.core.truth_(placesurfer.map_ui.core.map_ready_QMARK_(m))){
return placesurfer.map_ui.core.consume_pending_BANG_(m);
} else {
m.once("load",(function (_){
return placesurfer.map_ui.core.consume_pending_BANG_(m);
}));

return placesurfer.map_ui.core.schedule_consume_when_ready_BANG_(m);
}
} else {
return null;
}
});
placesurfer.map_ui.core.mount_ready_BANG_ = (function placesurfer$map_ui$core$mount_ready_BANG_(m){
placesurfer.map_ui.core.ensure_map_country_pick_click_BANG_(m);

placesurfer.map_ui.core.ensure_map_add_pin_click_BANG_(m);

placesurfer.map_ui.core.set_map_cursor_BANG_(m,(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_))?"default":(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_country_pick_active_QMARK_))?"default":"grab"
)));

placesurfer.map_ui.core.add_draw_toolbar_BANG_(m);

placesurfer.map_ui.core.safe_resize_BANG_(m);

placesurfer.map_ui.core.consume_pending_BANG_(m);

placesurfer.map_ui.core.schedule_consume_when_ready_BANG_(m);

var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_draw_on_map_ready);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
placesurfer.map_ui.core.disconnect_resize_observer_BANG_ = (function placesurfer$map_ui$core$disconnect_resize_observer_BANG_(){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_resize_observer);
if(cljs.core.truth_(temp__5823__auto__)){
var ro = temp__5823__auto__;
ro.disconnect();

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_resize_observer,null);
} else {
return null;
}
});
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_resize_raf !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_resize_raf = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
placesurfer.map_ui.core.observe_map_resize_BANG_ = (function placesurfer$map_ui$core$observe_map_resize_BANG_(el,m){
placesurfer.map_ui.core.disconnect_resize_observer_BANG_();

if(cljs.core.truth_((function (){var and__5023__auto__ = el;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = m;
if(cljs.core.truth_(and__5023__auto____$1)){
return (typeof ResizeObserver !== 'undefined');
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var ro = (new ResizeObserver((function (_){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_resize_raf))){
return null;
} else {
return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_resize_raf,requestAnimationFrame((function (){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_resize_raf,null);

return placesurfer.map_ui.core.safe_resize_BANG_(m);
})));
}
})));
ro.observe(el);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_resize_observer,ro);
} else {
return null;
}
});
placesurfer.map_ui.core.destroy_map_BANG_ = (function placesurfer$map_ui$core$destroy_map_BANG_(){
placesurfer.map_ui.core.disconnect_resize_observer_BANG_();

var temp__5823__auto___21206 = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto___21206)){
var m_21207 = temp__5823__auto___21206;
try{m_21207.remove();
}catch (e20482){var __21208 = e20482;
}} else {
}

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_map,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_map_container,null);

placesurfer.map_ui.core.cleanup_ref_images_BANG_();

placesurfer.map_ui.core.clear_markers_BANG_();

placesurfer.map_ui.core.clear_dense_markers_BANG_();

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_positions,cljs.core.PersistentVector.EMPTY);

var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_dense_viewport_timer);
if(cljs.core.truth_(temp__5823__auto__)){
var timer = temp__5823__auto__;
clearTimeout(timer);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_viewport_timer,null);
} else {
return null;
}
});
placesurfer.map_ui.core.destroy_map_if_attached_BANG_ = (function placesurfer$map_ui$core$destroy_map_if_attached_BANG_(el){
if(cljs.core.truth_((function (){var and__5023__auto__ = el;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(and__5023__auto____$1)){
return placesurfer.map_ui.core.map_attached_QMARK_(cljs.core.deref(placesurfer.map_ui.core._BANG_map),el);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return placesurfer.map_ui.core.destroy_map_BANG_();
} else {
return null;
}
});
placesurfer.map_ui.core.resize_map_BANG_ = (function placesurfer$map_ui$core$resize_map_BANG_(){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
if(cljs.core.truth_(placesurfer.map_ui.core.map_ready_QMARK_(m))){
return placesurfer.map_ui.core.safe_resize_BANG_(m);
} else {
return m.once("load",(function (){
return placesurfer.map_ui.core.safe_resize_BANG_(m);
}));
}
} else {
return null;
}
});
/**
 * Create a MapLibre map and attach it to `el`. Idempotent: if the map is
 * already attached to the same element, returns the existing instance.
 */
placesurfer.map_ui.core.mount_map_BANG_ = (function placesurfer$map_ui$core$mount_map_BANG_(el){
if(cljs.core.truth_(el)){
if(cljs.core.truth_(placesurfer.map_ui.core.map_attached_QMARK_(cljs.core.deref(placesurfer.map_ui.core._BANG_map),el))){
var m = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
placesurfer.map_ui.core.mount_ready_BANG_(m);

return m;
} else {
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_map))){
placesurfer.map_ui.core.destroy_map_BANG_();
} else {
}

var m = (new maplibregl.Map(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"container","container",-1736937707),el,new cljs.core.Keyword(null,"style","style",-496642736),placesurfer.map_ui.core.style_url,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(placesurfer.map_ui.core.default_view),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(placesurfer.map_ui.core.default_view),new cljs.core.Keyword(null,"projection","projection",-412523042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"mercator"], null),new cljs.core.Keyword(null,"renderWorldCopies","renderWorldCopies",-2008107025),false], null))));
m.addControl((new maplibregl.NavigationControl()),"top-right");

placesurfer.map_ui.core.ensure_map_popup_guard_BANG_(m);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_map_container,el);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_map,m);

placesurfer.map_ui.core.observe_map_resize_BANG_(el,m);

m.on("moveend",(function (_){
return placesurfer.map_ui.core.schedule_dense_viewport_refresh_BANG_(m);
}));

m.on("idle",(function (_){
return placesurfer.map_ui.core.consume_pending_if_ready_BANG_(m);
}));

m.once("load",(function (_){
return placesurfer.map_ui.core.mount_ready_BANG_(m);
}));

return m;
}
} else {
return null;
}
});
placesurfer.map_ui.core.reset_state_for_tests_BANG_ = (function placesurfer$map_ui$core$reset_state_for_tests_BANG_(){
placesurfer.map_ui.core.destroy_map_BANG_();

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_pending_state,null);

placesurfer.map_ui.core.cancel_row_hover_debounce_BANG_();

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_row_hover_match,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_country_pick_active_QMARK_,false);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_country_pick_click_handler,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_,false);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_click_handler,null);
});
placesurfer.map_ui.core.set_map_for_tests_BANG_ = (function placesurfer$map_ui$core$set_map_for_tests_BANG_(m){
return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_map,m);
});
placesurfer.map_ui.core.pending_state_for_tests = (function placesurfer$map_ui$core$pending_state_for_tests(){
return cljs.core.deref(placesurfer.map_ui.core._BANG_pending_state);
});
placesurfer.map_ui.core.rebuild_dense_markers_for_tests_BANG_ = (function placesurfer$map_ui$core$rebuild_dense_markers_for_tests_BANG_(){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return placesurfer.map_ui.core.rebuild_dense_markers_now_BANG_(m);
} else {
return null;
}
});
placesurfer.map_ui.core.dense_topic_max_count_for_tests = (function placesurfer$map_ui$core$dense_topic_max_count_for_tests(){
return placesurfer.map_ui.core.dense_topic_max_count;
});
placesurfer.map_ui.core.consume_pending_if_ready_for_tests_BANG_ = (function placesurfer$map_ui$core$consume_pending_if_ready_for_tests_BANG_(){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return placesurfer.map_ui.core.consume_pending_if_ready_BANG_(m);
} else {
return null;
}
});
placesurfer.map_ui.core.marker_element_for_tests_BANG_ = (function placesurfer$map_ui$core$marker_element_for_tests_BANG_(topic){
return placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$1(topic);
});
placesurfer.map_ui.core.marker_row_hover_class_for_tests = (function placesurfer$map_ui$core$marker_row_hover_class_for_tests(){
return placesurfer.map_ui.core.marker_row_hover_class;
});
placesurfer.map_ui.core.row_hover_debounce_ms_for_tests = (function placesurfer$map_ui$core$row_hover_debounce_ms_for_tests(){
return placesurfer.map_ui.core.row_hover_debounce_ms;
});

//# sourceMappingURL=placesurfer.map_ui.core.js.map
