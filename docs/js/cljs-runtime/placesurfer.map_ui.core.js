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
placesurfer.map_ui.core.dense_topic_min_zoom = 11.34;
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
}catch (e21910){var _ = e21910;
return false;
}})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
try{return m.isStyleLoaded() === true;
}catch (e21911){var _ = e21911;
return false;
}}

}
}
});
placesurfer.map_ui.core.safe_resize_BANG_ = (function placesurfer$map_ui$core$safe_resize_BANG_(m){
if(cljs.core.truth_(m)){
try{return m.resize();
}catch (e21914){var _ = e21914;
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
}catch (e21915){var _ = e21915;
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
var G__21925 = (function (){try{return marker.getElement();
}catch (e21926){var _ = e21926;
return null;
}})();
if((G__21925 == null)){
return null;
} else {
return placesurfer.map_ui.core.marker_visual_el(G__21925);
}
});
placesurfer.map_ui.core.marker_element = (function placesurfer$map_ui$core$marker_element(var_args){
var G__21938 = arguments.length;
switch (G__21938) {
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
var map__21947 = placesurfer.map_ui.core.marker_style_for(topic);
var map__21947__$1 = cljs.core.__destructure_map(map__21947);
var width_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21947__$1,new cljs.core.Keyword(null,"width-px","width-px",65122451));
var height_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21947__$1,new cljs.core.Keyword(null,"height-px","height-px",-1391665005));
var background_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21947__$1,new cljs.core.Keyword(null,"background-position","background-position",1112702746));
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21947__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
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

var img_23045 = document.createElement("img");
(img_23045.src = image_url);

(img_23045.alt = "");

(img_23045.draggable = false);

(img_23045.style.width = "100%");

(img_23045.style.height = "100%");

(img_23045.style.display = "block");

(img_23045.style.pointerEvents = "none");

visual.appendChild(img_23045);
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
var seq__21978_23046 = cljs.core.seq(cljs.core.deref(markers_atom));
var chunk__21979_23047 = null;
var count__21980_23048 = (0);
var i__21981_23049 = (0);
while(true){
if((i__21981_23049 < count__21980_23048)){
var marker_23050 = chunk__21979_23047.cljs$core$IIndexed$_nth$arity$2(null,i__21981_23049);
try{marker_23050.remove();
}catch (e21989){var __23051 = e21989;
}

var G__23052 = seq__21978_23046;
var G__23053 = chunk__21979_23047;
var G__23054 = count__21980_23048;
var G__23055 = (i__21981_23049 + (1));
seq__21978_23046 = G__23052;
chunk__21979_23047 = G__23053;
count__21980_23048 = G__23054;
i__21981_23049 = G__23055;
continue;
} else {
var temp__5823__auto___23056 = cljs.core.seq(seq__21978_23046);
if(temp__5823__auto___23056){
var seq__21978_23057__$1 = temp__5823__auto___23056;
if(cljs.core.chunked_seq_QMARK_(seq__21978_23057__$1)){
var c__5548__auto___23058 = cljs.core.chunk_first(seq__21978_23057__$1);
var G__23059 = cljs.core.chunk_rest(seq__21978_23057__$1);
var G__23060 = c__5548__auto___23058;
var G__23061 = cljs.core.count(c__5548__auto___23058);
var G__23062 = (0);
seq__21978_23046 = G__23059;
chunk__21979_23047 = G__23060;
count__21980_23048 = G__23061;
i__21981_23049 = G__23062;
continue;
} else {
var marker_23063 = cljs.core.first(seq__21978_23057__$1);
try{marker_23063.remove();
}catch (e21990){var __23064 = e21990;
}

var G__23065 = cljs.core.next(seq__21978_23057__$1);
var G__23066 = null;
var G__23067 = (0);
var G__23068 = (0);
seq__21978_23046 = G__23065;
chunk__21979_23047 = G__23066;
count__21980_23048 = G__23067;
i__21981_23049 = G__23068;
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
placesurfer.map_ui.core.position_topic = (function placesurfer$map_ui$core$position_topic(p__21994){
var map__21995 = p__21994;
var map__21995__$1 = cljs.core.__destructure_map(map__21995);
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21995__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21995__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var or__5025__auto__ = marker_topic;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return topic;
}
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
placesurfer.map_ui.core.position_in_bounds_QMARK_ = (function placesurfer$map_ui$core$position_in_bounds_QMARK_(bounds,p__22006){
var map__22007 = p__22006;
var map__22007__$1 = cljs.core.__destructure_map(map__22007);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22007__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22007__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var and__5023__auto__ = typeof longitude === 'number';
if(and__5023__auto__){
var and__5023__auto____$1 = typeof latitude === 'number';
if(and__5023__auto____$1){
try{return bounds.contains([longitude,latitude]) === true;
}catch (e22012){var _ = e22012;
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
 * a marker right now: none at all below `dense-topic-min-zoom` (at that
 * zoom the visible map area is itself large enough to contain thousands of
 * bus stops, so the zoom gate - not just the bounds check below - is what
 * keeps the count down), and otherwise only the ones inside the map's
 * current on-screen bounds.
 */
placesurfer.map_ui.core.dense_positions_for_viewport = (function placesurfer$map_ui$core$dense_positions_for_viewport(m,positions){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.seq(positions);
if(and__5023__auto__){
return placesurfer.map_ui.core.map_ready_QMARK_(m);
} else {
return and__5023__auto__;
}
})())){
var zoom = (function (){try{return m.getZoom();
}catch (e22021){var _ = e22021;
return null;
}})();
if(((typeof zoom === 'number') && ((zoom >= placesurfer.map_ui.core.dense_topic_min_zoom)))){
var temp__5821__auto__ = (function (){try{return m.getBounds();
}catch (e22023){var _ = e22023;
return null;
}})();
if(cljs.core.truth_(temp__5821__auto__)){
var bounds = temp__5821__auto__;
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22014_SHARP_){
return placesurfer.map_ui.core.position_in_bounds_QMARK_(bounds,p1__22014_SHARP_);
}),positions));
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

var seq__22051_23069 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["overflow","hidden"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pointerEvents","none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zIndex","1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display",(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_visible_QMARK_))?"block":"none")], null)], null));
var chunk__22052_23070 = null;
var count__22053_23071 = (0);
var i__22054_23072 = (0);
while(true){
if((i__22054_23072 < count__22053_23071)){
var vec__22064_23074 = chunk__22052_23070.cljs$core$IIndexed$_nth$arity$2(null,i__22054_23072);
var k_23075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22064_23074,(0),null);
var v_23076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22064_23074,(1),null);
(el.style[k_23075] = v_23076);


var G__23077 = seq__22051_23069;
var G__23078 = chunk__22052_23070;
var G__23079 = count__22053_23071;
var G__23080 = (i__22054_23072 + (1));
seq__22051_23069 = G__23077;
chunk__22052_23070 = G__23078;
count__22053_23071 = G__23079;
i__22054_23072 = G__23080;
continue;
} else {
var temp__5823__auto___23081 = cljs.core.seq(seq__22051_23069);
if(temp__5823__auto___23081){
var seq__22051_23082__$1 = temp__5823__auto___23081;
if(cljs.core.chunked_seq_QMARK_(seq__22051_23082__$1)){
var c__5548__auto___23083 = cljs.core.chunk_first(seq__22051_23082__$1);
var G__23084 = cljs.core.chunk_rest(seq__22051_23082__$1);
var G__23085 = c__5548__auto___23083;
var G__23086 = cljs.core.count(c__5548__auto___23083);
var G__23087 = (0);
seq__22051_23069 = G__23084;
chunk__22052_23070 = G__23085;
count__22053_23071 = G__23086;
i__22054_23072 = G__23087;
continue;
} else {
var vec__22070_23088 = cljs.core.first(seq__22051_23082__$1);
var k_23089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22070_23088,(0),null);
var v_23090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22070_23088,(1),null);
(el.style[k_23089] = v_23090);


var G__23091 = cljs.core.next(seq__22051_23082__$1);
var G__23092 = null;
var G__23093 = (0);
var G__23094 = (0);
seq__22051_23069 = G__23091;
chunk__22052_23070 = G__23092;
count__22053_23071 = G__23093;
i__22054_23072 = G__23094;
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
placesurfer.map_ui.core.ref_bounds__GT_box = (function placesurfer$map_ui$core$ref_bounds__GT_box(m,p__22080){
var map__22081 = p__22080;
var map__22081__$1 = cljs.core.__destructure_map(map__22081);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22081__$1,new cljs.core.Keyword(null,"west","west",708776677));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22081__$1,new cljs.core.Keyword(null,"north","north",651323902));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22081__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22081__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var p1 = m.project(({"lng": west, "lat": north}));
var p2 = m.project(({"lng": east, "lat": south}));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),p1.x,new cljs.core.Keyword(null,"y","y",-1757859776),p1.y,new cljs.core.Keyword(null,"w","w",354169001),Math.max((1),(p2.x - p1.x)),new cljs.core.Keyword(null,"h","h",1109658740),Math.max((1),(p2.y - p1.y))], null);
});
placesurfer.map_ui.core.ref_box__GT_bounds = (function placesurfer$map_ui$core$ref_box__GT_bounds(m,p__22083){
var map__22084 = p__22083;
var map__22084__$1 = cljs.core.__destructure_map(map__22084);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22084__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22084__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22084__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22084__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var ll1 = m.unproject([x,y]);
var ll2 = m.unproject([(x + w),(y + h)]);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"west","west",708776677),ll1.lng,new cljs.core.Keyword(null,"north","north",651323902),ll1.lat,new cljs.core.Keyword(null,"east","east",1189821678),ll2.lng,new cljs.core.Keyword(null,"south","south",1586796293),ll2.lat], null);
});
/**
 * Translate pixel box by a mouse delta.
 */
placesurfer.map_ui.core.moved_box = (function placesurfer$map_ui$core$moved_box(p__22093,dx,dy){
var map__22094 = p__22093;
var map__22094__$1 = cljs.core.__destructure_map(map__22094);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22094__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22094__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22094__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22094__$1,new cljs.core.Keyword(null,"h","h",1109658740));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + dy),new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h], null);
});
/**
 * Scale pixel box by dragging `corner` (:nw :ne :sw :se) with mouse delta,
 * keeping the opposite corner fixed and preserving aspect ratio.
 */
placesurfer.map_ui.core.scaled_box = (function placesurfer$map_ui$core$scaled_box(p__22102,corner,dx,dy){
var map__22103 = p__22102;
var map__22103__$1 = cljs.core.__destructure_map(map__22103);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var aspect = (h / w);
var vec__22105 = (function (){var G__22109 = corner;
var G__22109__$1 = (((G__22109 instanceof cljs.core.Keyword))?G__22109.fqn:null);
switch (G__22109__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22109__$1)].join('')));

}
})();
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22105,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22105,(1),null);
var cx = (function (){var G__22111 = corner;
var G__22111__$1 = (((G__22111 instanceof cljs.core.Keyword))?G__22111.fqn:null);
switch (G__22111__$1) {
case "nw":
case "sw":
return (x + dx);

break;
case "ne":
case "se":
return ((x + w) + dx);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22111__$1)].join('')));

}
})();
var cy = (function (){var G__22112 = corner;
var G__22112__$1 = (((G__22112 instanceof cljs.core.Keyword))?G__22112.fqn:null);
switch (G__22112__$1) {
case "nw":
case "ne":
return (y + dy);

break;
case "sw":
case "se":
return ((y + h) + dy);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22112__$1)].join('')));

}
})();
var nw_SINGLEQUOTE_ = Math.max((20),Math.abs((cx - ax)),(Math.abs((cy - ay)) / aspect));
var nh_SINGLEQUOTE_ = (nw_SINGLEQUOTE_ * aspect);
var G__22113 = corner;
var G__22113__$1 = (((G__22113 instanceof cljs.core.Keyword))?G__22113.fqn:null);
switch (G__22113__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22113__$1)].join('')));

}
});
/**
 * Resize one dimension by dragging an edge midpoint handle (:n :s :e :w),
 * keeping the opposite edge fixed.
 */
placesurfer.map_ui.core.edge_resized_box = (function placesurfer$map_ui$core$edge_resized_box(p__22117,edge,dx,dy){
var map__22118 = p__22117;
var map__22118__$1 = cljs.core.__destructure_map(map__22118);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22118__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22118__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22118__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22118__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var G__22120 = edge;
var G__22120__$1 = (((G__22120 instanceof cljs.core.Keyword))?G__22120.fqn:null);
switch (G__22120__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22120__$1)].join('')));

}
});
placesurfer.map_ui.core.apply_ref_box_BANG_ = (function placesurfer$map_ui$core$apply_ref_box_BANG_(el,p__22128){
var map__22129 = p__22128;
var map__22129__$1 = cljs.core.__destructure_map(map__22129);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22129__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22129__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22129__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22129__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var style = el.style;
(style.transform = ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join(''));

(style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join(''));

return (style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''));
});
placesurfer.map_ui.core.position_ref_images_BANG_ = (function placesurfer$map_ui$core$position_ref_images_BANG_(m){
var seq__22130 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var chunk__22131 = null;
var count__22132 = (0);
var i__22133 = (0);
while(true){
if((i__22133 < count__22132)){
var map__22138 = chunk__22131.cljs$core$IIndexed$_nth$arity$2(null,i__22133);
var map__22138__$1 = cljs.core.__destructure_map(map__22138);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22138__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22138__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var temp__5823__auto___23128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id);
if(cljs.core.truth_(temp__5823__auto___23128)){
var el_23129 = temp__5823__auto___23128;
placesurfer.map_ui.core.apply_ref_box_BANG_(el_23129,placesurfer.map_ui.core.ref_bounds__GT_box(m,bounds));
} else {
}


var G__23130 = seq__22130;
var G__23131 = chunk__22131;
var G__23132 = count__22132;
var G__23133 = (i__22133 + (1));
seq__22130 = G__23130;
chunk__22131 = G__23131;
count__22132 = G__23132;
i__22133 = G__23133;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22130);
if(temp__5823__auto__){
var seq__22130__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22130__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22130__$1);
var G__23142 = cljs.core.chunk_rest(seq__22130__$1);
var G__23143 = c__5548__auto__;
var G__23144 = cljs.core.count(c__5548__auto__);
var G__23145 = (0);
seq__22130 = G__23142;
chunk__22131 = G__23143;
count__22132 = G__23144;
i__22133 = G__23145;
continue;
} else {
var map__22139 = cljs.core.first(seq__22130__$1);
var map__22139__$1 = cljs.core.__destructure_map(map__22139);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22139__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22139__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var temp__5823__auto___23149__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id);
if(cljs.core.truth_(temp__5823__auto___23149__$1)){
var el_23154 = temp__5823__auto___23149__$1;
placesurfer.map_ui.core.apply_ref_box_BANG_(el_23154,placesurfer.map_ui.core.ref_bounds__GT_box(m,bounds));
} else {
}


var G__23155 = cljs.core.next(seq__22130__$1);
var G__23156 = null;
var G__23157 = (0);
var G__23158 = (0);
seq__22130 = G__23155;
chunk__22131 = G__23156;
count__22132 = G__23157;
i__22133 = G__23158;
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
var img = cljs.core.some((function (p1__22140_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22140_SHARP_),id)){
return p1__22140_SHARP_;
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
var box = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),mode))?placesurfer.map_ui.core.moved_box(box0,dx,dy):(cljs.core.truth_((function (){var fexpr__22142 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"s","s",1705939918),null], null), null);
return (fexpr__22142.cljs$core$IFn$_invoke$arity$1 ? fexpr__22142.cljs$core$IFn$_invoke$arity$1(mode) : fexpr__22142.call(null,mode));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__22141_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22141_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22141_SHARP_,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds);
} else {
return p1__22141_SHARP_;
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
var img = cljs.core.some((function (p1__22147_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22147_SHARP_),id)){
return p1__22147_SHARP_;
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

var temp__5823__auto___23175__$1 = wrap.querySelector("img");
if(cljs.core.truth_(temp__5823__auto___23175__$1)){
var im_23176 = temp__5823__auto___23175__$1;
(im_23176.style.opacity = cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity));
} else {
}

var seq__22151 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(wrap.querySelectorAll(".placesurfer-ref-handle")));
var chunk__22152 = null;
var count__22153 = (0);
var i__22154 = (0);
while(true){
if((i__22154 < count__22153)){
var h = chunk__22152.cljs$core$IIndexed$_nth$arity$2(null,i__22154);
(h.style.display = ((adjust_QMARK_)?"block":"none"));


var G__23181 = seq__22151;
var G__23182 = chunk__22152;
var G__23183 = count__22153;
var G__23184 = (i__22154 + (1));
seq__22151 = G__23181;
chunk__22152 = G__23182;
count__22153 = G__23183;
i__22154 = G__23184;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__22151);
if(temp__5823__auto____$1){
var seq__22151__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22151__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22151__$1);
var G__23190 = cljs.core.chunk_rest(seq__22151__$1);
var G__23191 = c__5548__auto__;
var G__23192 = cljs.core.count(c__5548__auto__);
var G__23193 = (0);
seq__22151 = G__23190;
chunk__22152 = G__23191;
count__22153 = G__23192;
i__22154 = G__23193;
continue;
} else {
var h = cljs.core.first(seq__22151__$1);
(h.style.display = ((adjust_QMARK_)?"block":"none"));


var G__23196 = cljs.core.next(seq__22151__$1);
var G__23197 = null;
var G__23198 = (0);
var G__23199 = (0);
seq__22151 = G__23196;
chunk__22152 = G__23197;
count__22153 = G__23198;
i__22154 = G__23199;
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
placesurfer.map_ui.core.make_ref_el_BANG_ = (function placesurfer$map_ui$core$make_ref_el_BANG_(m,p__22158){
var map__22159 = p__22158;
var map__22159__$1 = cljs.core.__destructure_map(map__22159);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22159__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var image_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22159__$1,new cljs.core.Keyword(null,"image-url","image-url",-1064784064));
var wrap = document.createElement("div");
var img = document.createElement("img");
(wrap.className = "placesurfer-ref-image");

var seq__22160_23202 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pointerEvents","none"], null)], null));
var chunk__22161_23203 = null;
var count__22162_23204 = (0);
var i__22163_23205 = (0);
while(true){
if((i__22163_23205 < count__22162_23204)){
var vec__22170_23210 = chunk__22161_23203.cljs$core$IIndexed$_nth$arity$2(null,i__22163_23205);
var k_23211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22170_23210,(0),null);
var v_23212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22170_23210,(1),null);
(wrap.style[k_23211] = v_23212);


var G__23213 = seq__22160_23202;
var G__23214 = chunk__22161_23203;
var G__23215 = count__22162_23204;
var G__23216 = (i__22163_23205 + (1));
seq__22160_23202 = G__23213;
chunk__22161_23203 = G__23214;
count__22162_23204 = G__23215;
i__22163_23205 = G__23216;
continue;
} else {
var temp__5823__auto___23218 = cljs.core.seq(seq__22160_23202);
if(temp__5823__auto___23218){
var seq__22160_23219__$1 = temp__5823__auto___23218;
if(cljs.core.chunked_seq_QMARK_(seq__22160_23219__$1)){
var c__5548__auto___23220 = cljs.core.chunk_first(seq__22160_23219__$1);
var G__23221 = cljs.core.chunk_rest(seq__22160_23219__$1);
var G__23222 = c__5548__auto___23220;
var G__23223 = cljs.core.count(c__5548__auto___23220);
var G__23224 = (0);
seq__22160_23202 = G__23221;
chunk__22161_23203 = G__23222;
count__22162_23204 = G__23223;
i__22163_23205 = G__23224;
continue;
} else {
var vec__22173_23226 = cljs.core.first(seq__22160_23219__$1);
var k_23227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22173_23226,(0),null);
var v_23228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22173_23226,(1),null);
(wrap.style[k_23227] = v_23228);


var G__23229 = cljs.core.next(seq__22160_23219__$1);
var G__23230 = null;
var G__23231 = (0);
var G__23232 = (0);
seq__22160_23202 = G__23229;
chunk__22161_23203 = G__23230;
count__22162_23204 = G__23231;
i__22163_23205 = G__23232;
continue;
}
} else {
}
}
break;
}

(img.src = image_url);

(img.draggable = false);

var seq__22176_23234 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["userSelect","none"], null)], null));
var chunk__22177_23235 = null;
var count__22178_23236 = (0);
var i__22179_23237 = (0);
while(true){
if((i__22179_23237 < count__22178_23236)){
var vec__22187_23239 = chunk__22177_23235.cljs$core$IIndexed$_nth$arity$2(null,i__22179_23237);
var k_23240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22187_23239,(0),null);
var v_23241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22187_23239,(1),null);
(img.style[k_23240] = v_23241);


var G__23243 = seq__22176_23234;
var G__23244 = chunk__22177_23235;
var G__23245 = count__22178_23236;
var G__23246 = (i__22179_23237 + (1));
seq__22176_23234 = G__23243;
chunk__22177_23235 = G__23244;
count__22178_23236 = G__23245;
i__22179_23237 = G__23246;
continue;
} else {
var temp__5823__auto___23249 = cljs.core.seq(seq__22176_23234);
if(temp__5823__auto___23249){
var seq__22176_23251__$1 = temp__5823__auto___23249;
if(cljs.core.chunked_seq_QMARK_(seq__22176_23251__$1)){
var c__5548__auto___23252 = cljs.core.chunk_first(seq__22176_23251__$1);
var G__23256 = cljs.core.chunk_rest(seq__22176_23251__$1);
var G__23257 = c__5548__auto___23252;
var G__23258 = cljs.core.count(c__5548__auto___23252);
var G__23259 = (0);
seq__22176_23234 = G__23256;
chunk__22177_23235 = G__23257;
count__22178_23236 = G__23258;
i__22179_23237 = G__23259;
continue;
} else {
var vec__22190_23260 = cljs.core.first(seq__22176_23251__$1);
var k_23261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22190_23260,(0),null);
var v_23262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22190_23260,(1),null);
(img.style[k_23261] = v_23262);


var G__23264 = cljs.core.next(seq__22176_23251__$1);
var G__23265 = null;
var G__23266 = (0);
var G__23267 = (0);
seq__22176_23234 = G__23264;
chunk__22177_23235 = G__23265;
count__22178_23236 = G__23266;
i__22179_23237 = G__23267;
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

var seq__22196_23272 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null));
var chunk__22197_23273 = null;
var count__22198_23274 = (0);
var i__22199_23275 = (0);
while(true){
if((i__22199_23275 < count__22198_23274)){
var handle_23278 = chunk__22197_23273.cljs$core$IIndexed$_nth$arity$2(null,i__22199_23275);
var h_23281 = document.createElement("div");
(h_23281.className = "placesurfer-ref-handle");

var seq__22248_23282 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background","#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","2px solid #2b6cb0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boxSizing","border-box"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","none"], null)], null),(function (){var G__22264 = handle_23278;
var G__22264__$1 = (((G__22264 instanceof cljs.core.Keyword))?G__22264.fqn:null);
switch (G__22264__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22264__$1)].join('')));

}
})()));
var chunk__22249_23283 = null;
var count__22250_23284 = (0);
var i__22251_23285 = (0);
while(true){
if((i__22251_23285 < count__22250_23284)){
var vec__22265_23301 = chunk__22249_23283.cljs$core$IIndexed$_nth$arity$2(null,i__22251_23285);
var k_23302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22265_23301,(0),null);
var v_23303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22265_23301,(1),null);
(h_23281.style[k_23302] = v_23303);


var G__23305 = seq__22248_23282;
var G__23306 = chunk__22249_23283;
var G__23307 = count__22250_23284;
var G__23308 = (i__22251_23285 + (1));
seq__22248_23282 = G__23305;
chunk__22249_23283 = G__23306;
count__22250_23284 = G__23307;
i__22251_23285 = G__23308;
continue;
} else {
var temp__5823__auto___23312 = cljs.core.seq(seq__22248_23282);
if(temp__5823__auto___23312){
var seq__22248_23313__$1 = temp__5823__auto___23312;
if(cljs.core.chunked_seq_QMARK_(seq__22248_23313__$1)){
var c__5548__auto___23316 = cljs.core.chunk_first(seq__22248_23313__$1);
var G__23317 = cljs.core.chunk_rest(seq__22248_23313__$1);
var G__23318 = c__5548__auto___23316;
var G__23319 = cljs.core.count(c__5548__auto___23316);
var G__23320 = (0);
seq__22248_23282 = G__23317;
chunk__22249_23283 = G__23318;
count__22250_23284 = G__23319;
i__22251_23285 = G__23320;
continue;
} else {
var vec__22270_23324 = cljs.core.first(seq__22248_23313__$1);
var k_23325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22270_23324,(0),null);
var v_23326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22270_23324,(1),null);
(h_23281.style[k_23325] = v_23326);


var G__23327 = cljs.core.next(seq__22248_23313__$1);
var G__23328 = null;
var G__23329 = (0);
var G__23330 = (0);
seq__22248_23282 = G__23327;
chunk__22249_23283 = G__23328;
count__22250_23284 = G__23329;
i__22251_23285 = G__23330;
continue;
}
} else {
}
}
break;
}

h_23281.addEventListener("mousedown",((function (seq__22196_23272,chunk__22197_23273,count__22198_23274,i__22199_23275,h_23281,handle_23278,wrap,img,map__22159,map__22159__$1,id,image_url){
return (function (e){
return placesurfer.map_ui.core.start_ref_drag_BANG_(m,id,e,handle_23278);
});})(seq__22196_23272,chunk__22197_23273,count__22198_23274,i__22199_23275,h_23281,handle_23278,wrap,img,map__22159,map__22159__$1,id,image_url))
);

wrap.appendChild(h_23281);


var G__23332 = seq__22196_23272;
var G__23333 = chunk__22197_23273;
var G__23334 = count__22198_23274;
var G__23335 = (i__22199_23275 + (1));
seq__22196_23272 = G__23332;
chunk__22197_23273 = G__23333;
count__22198_23274 = G__23334;
i__22199_23275 = G__23335;
continue;
} else {
var temp__5823__auto___23336 = cljs.core.seq(seq__22196_23272);
if(temp__5823__auto___23336){
var seq__22196_23337__$1 = temp__5823__auto___23336;
if(cljs.core.chunked_seq_QMARK_(seq__22196_23337__$1)){
var c__5548__auto___23338 = cljs.core.chunk_first(seq__22196_23337__$1);
var G__23339 = cljs.core.chunk_rest(seq__22196_23337__$1);
var G__23340 = c__5548__auto___23338;
var G__23341 = cljs.core.count(c__5548__auto___23338);
var G__23342 = (0);
seq__22196_23272 = G__23339;
chunk__22197_23273 = G__23340;
count__22198_23274 = G__23341;
i__22199_23275 = G__23342;
continue;
} else {
var handle_23344 = cljs.core.first(seq__22196_23337__$1);
var h_23345 = document.createElement("div");
(h_23345.className = "placesurfer-ref-handle");

var seq__22274_23346 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background","#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","2px solid #2b6cb0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boxSizing","border-box"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","none"], null)], null),(function (){var G__22287 = handle_23344;
var G__22287__$1 = (((G__22287 instanceof cljs.core.Keyword))?G__22287.fqn:null);
switch (G__22287__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22287__$1)].join('')));

}
})()));
var chunk__22275_23347 = null;
var count__22276_23348 = (0);
var i__22277_23349 = (0);
while(true){
if((i__22277_23349 < count__22276_23348)){
var vec__22288_23358 = chunk__22275_23347.cljs$core$IIndexed$_nth$arity$2(null,i__22277_23349);
var k_23359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22288_23358,(0),null);
var v_23360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22288_23358,(1),null);
(h_23345.style[k_23359] = v_23360);


var G__23362 = seq__22274_23346;
var G__23363 = chunk__22275_23347;
var G__23364 = count__22276_23348;
var G__23365 = (i__22277_23349 + (1));
seq__22274_23346 = G__23362;
chunk__22275_23347 = G__23363;
count__22276_23348 = G__23364;
i__22277_23349 = G__23365;
continue;
} else {
var temp__5823__auto___23366__$1 = cljs.core.seq(seq__22274_23346);
if(temp__5823__auto___23366__$1){
var seq__22274_23367__$1 = temp__5823__auto___23366__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22274_23367__$1)){
var c__5548__auto___23368 = cljs.core.chunk_first(seq__22274_23367__$1);
var G__23369 = cljs.core.chunk_rest(seq__22274_23367__$1);
var G__23370 = c__5548__auto___23368;
var G__23371 = cljs.core.count(c__5548__auto___23368);
var G__23372 = (0);
seq__22274_23346 = G__23369;
chunk__22275_23347 = G__23370;
count__22276_23348 = G__23371;
i__22277_23349 = G__23372;
continue;
} else {
var vec__22291_23373 = cljs.core.first(seq__22274_23367__$1);
var k_23374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22291_23373,(0),null);
var v_23375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22291_23373,(1),null);
(h_23345.style[k_23374] = v_23375);


var G__23377 = cljs.core.next(seq__22274_23367__$1);
var G__23378 = null;
var G__23379 = (0);
var G__23380 = (0);
seq__22274_23346 = G__23377;
chunk__22275_23347 = G__23378;
count__22276_23348 = G__23379;
i__22277_23349 = G__23380;
continue;
}
} else {
}
}
break;
}

h_23345.addEventListener("mousedown",((function (seq__22196_23272,chunk__22197_23273,count__22198_23274,i__22199_23275,h_23345,handle_23344,seq__22196_23337__$1,temp__5823__auto___23336,wrap,img,map__22159,map__22159__$1,id,image_url){
return (function (e){
return placesurfer.map_ui.core.start_ref_drag_BANG_(m,id,e,handle_23344);
});})(seq__22196_23272,chunk__22197_23273,count__22198_23274,i__22199_23275,h_23345,handle_23344,seq__22196_23337__$1,temp__5823__auto___23336,wrap,img,map__22159,map__22159__$1,id,image_url))
);

wrap.appendChild(h_23345);


var G__23385 = cljs.core.next(seq__22196_23337__$1);
var G__23386 = null;
var G__23387 = (0);
var G__23388 = (0);
seq__22196_23272 = G__23385;
chunk__22197_23273 = G__23386;
count__22198_23274 = G__23387;
i__22199_23275 = G__23388;
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
var seq__22301_23390 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els));
var chunk__22302_23391 = null;
var count__22303_23392 = (0);
var i__22304_23393 = (0);
while(true){
if((i__22304_23393 < count__22303_23392)){
var vec__22319_23395 = chunk__22302_23391.cljs$core$IIndexed$_nth$arity$2(null,i__22304_23393);
var id_23396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22319_23395,(0),null);
var el_23397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22319_23395,(1),null);
if(cljs.core.contains_QMARK_(ids,id_23396)){
} else {
el_23397.remove();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_ref_els,cljs.core.dissoc,id_23396);
}


var G__23398 = seq__22301_23390;
var G__23399 = chunk__22302_23391;
var G__23400 = count__22303_23392;
var G__23401 = (i__22304_23393 + (1));
seq__22301_23390 = G__23398;
chunk__22302_23391 = G__23399;
count__22303_23392 = G__23400;
i__22304_23393 = G__23401;
continue;
} else {
var temp__5823__auto___23403 = cljs.core.seq(seq__22301_23390);
if(temp__5823__auto___23403){
var seq__22301_23404__$1 = temp__5823__auto___23403;
if(cljs.core.chunked_seq_QMARK_(seq__22301_23404__$1)){
var c__5548__auto___23405 = cljs.core.chunk_first(seq__22301_23404__$1);
var G__23406 = cljs.core.chunk_rest(seq__22301_23404__$1);
var G__23407 = c__5548__auto___23405;
var G__23408 = cljs.core.count(c__5548__auto___23405);
var G__23409 = (0);
seq__22301_23390 = G__23406;
chunk__22302_23391 = G__23407;
count__22303_23392 = G__23408;
i__22304_23393 = G__23409;
continue;
} else {
var vec__22328_23411 = cljs.core.first(seq__22301_23404__$1);
var id_23412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22328_23411,(0),null);
var el_23413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22328_23411,(1),null);
if(cljs.core.contains_QMARK_(ids,id_23412)){
} else {
el_23413.remove();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_ref_els,cljs.core.dissoc,id_23412);
}


var G__23418 = cljs.core.next(seq__22301_23404__$1);
var G__23419 = null;
var G__23420 = (0);
var G__23421 = (0);
seq__22301_23390 = G__23418;
chunk__22302_23391 = G__23419;
count__22303_23392 = G__23420;
i__22304_23393 = G__23421;
continue;
}
} else {
}
}
break;
}

var seq__22331_23422 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var chunk__22332_23423 = null;
var count__22333_23424 = (0);
var i__22334_23425 = (0);
while(true){
if((i__22334_23425 < count__22333_23424)){
var map__22340_23426 = chunk__22332_23423.cljs$core$IIndexed$_nth$arity$2(null,i__22334_23425);
var map__22340_23427__$1 = cljs.core.__destructure_map(map__22340_23426);
var img_23428 = map__22340_23427__$1;
var id_23429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22340_23427__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id_23429))){
} else {
var el_23432 = placesurfer.map_ui.core.make_ref_el_BANG_(m,img_23428);
cont.appendChild(el_23432);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.map_ui.core._BANG_ref_els,cljs.core.assoc,id_23429,el_23432);
}

placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id_23429);


var G__23434 = seq__22331_23422;
var G__23435 = chunk__22332_23423;
var G__23436 = count__22333_23424;
var G__23437 = (i__22334_23425 + (1));
seq__22331_23422 = G__23434;
chunk__22332_23423 = G__23435;
count__22333_23424 = G__23436;
i__22334_23425 = G__23437;
continue;
} else {
var temp__5823__auto___23438 = cljs.core.seq(seq__22331_23422);
if(temp__5823__auto___23438){
var seq__22331_23439__$1 = temp__5823__auto___23438;
if(cljs.core.chunked_seq_QMARK_(seq__22331_23439__$1)){
var c__5548__auto___23440 = cljs.core.chunk_first(seq__22331_23439__$1);
var G__23441 = cljs.core.chunk_rest(seq__22331_23439__$1);
var G__23442 = c__5548__auto___23440;
var G__23443 = cljs.core.count(c__5548__auto___23440);
var G__23444 = (0);
seq__22331_23422 = G__23441;
chunk__22332_23423 = G__23442;
count__22333_23424 = G__23443;
i__22334_23425 = G__23444;
continue;
} else {
var map__22341_23445 = cljs.core.first(seq__22331_23439__$1);
var map__22341_23446__$1 = cljs.core.__destructure_map(map__22341_23445);
var img_23447 = map__22341_23446__$1;
var id_23448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22341_23446__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id_23448))){
} else {
var el_23449 = placesurfer.map_ui.core.make_ref_el_BANG_(m,img_23447);
cont.appendChild(el_23449);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.map_ui.core._BANG_ref_els,cljs.core.assoc,id_23448,el_23449);
}

placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id_23448);


var G__23450 = cljs.core.next(seq__22331_23439__$1);
var G__23451 = null;
var G__23452 = (0);
var G__23453 = (0);
seq__22331_23422 = G__23450;
chunk__22332_23423 = G__23451;
count__22333_23424 = G__23452;
i__22334_23425 = G__23453;
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
return cljs.core.not_any_QMARK_((function (p1__22342_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22342_SHARP_),cljs.core.deref(placesurfer.map_ui.core._BANG_ref_adjust_id));
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

var seq__22343 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var chunk__22344 = null;
var count__22345 = (0);
var i__22346 = (0);
while(true){
if((i__22346 < count__22345)){
var map__22349 = chunk__22344.cljs$core$IIndexed$_nth$arity$2(null,i__22346);
var map__22349__$1 = cljs.core.__destructure_map(map__22349);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22349__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id__$1);


var G__23460 = seq__22343;
var G__23461 = chunk__22344;
var G__23462 = count__22345;
var G__23463 = (i__22346 + (1));
seq__22343 = G__23460;
chunk__22344 = G__23461;
count__22345 = G__23462;
i__22346 = G__23463;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22343);
if(temp__5823__auto__){
var seq__22343__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22343__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22343__$1);
var G__23465 = cljs.core.chunk_rest(seq__22343__$1);
var G__23466 = c__5548__auto__;
var G__23467 = cljs.core.count(c__5548__auto__);
var G__23468 = (0);
seq__22343 = G__23465;
chunk__22344 = G__23466;
count__22345 = G__23467;
i__22346 = G__23468;
continue;
} else {
var map__22351 = cljs.core.first(seq__22343__$1);
var map__22351__$1 = cljs.core.__destructure_map(map__22351);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22351__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id__$1);


var G__23469 = cljs.core.next(seq__22343__$1);
var G__23470 = null;
var G__23471 = (0);
var G__23472 = (0);
seq__22343 = G__23469;
chunk__22344 = G__23470;
count__22345 = G__23471;
i__22346 = G__23472;
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__22356_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22356_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22356_SHARP_,new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity);
} else {
return p1__22356_SHARP_;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22378){
var vec__22379 = p__22378;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22379,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22379,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
}),ring);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22385){
var vec__22386 = p__22385;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22386,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22386,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wip","wip",-103467282),true], null)], null);
}),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),(function (){var G__22390 = cljs.core.vec(verts);
var G__22390__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__22390,done)
;
if(cljs.core.truth_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22390__$1,cur);
} else {
return G__22390__$1;
}
})()], null);
});
placesurfer.map_ui.core.refresh_draw_BANG_ = (function placesurfer$map_ui$core$refresh_draw_BANG_(m){
var temp__5823__auto__ = (function (){try{return m.getSource(placesurfer.map_ui.core.draw_src);
}catch (e22391){var _ = e22391;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto__)){
var src = temp__5823__auto__;
return src.setData(cljs.core.clj__GT_js(placesurfer.map_ui.core.draw_fc()));
} else {
return null;
}
});
placesurfer.map_ui.core.color__GT_rgb = (function placesurfer$map_ui$core$color__GT_rgb(p__22395){
var map__22396 = p__22395;
var map__22396__$1 = cljs.core.__destructure_map(map__22396);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22396__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22396__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22396__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22396__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var l = ((function (){var or__5025__auto__ = lightness;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() / (100));
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((r + (((255) - r) * l)))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((g + (((255) - g) * l)))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((b + (((255) - b) * l)))),")"].join('');
});
placesurfer.map_ui.core.color__GT_alpha = (function placesurfer$map_ui$core$color__GT_alpha(p__22398){
var map__22399 = p__22398;
var map__22399__$1 = cljs.core.__destructure_map(map__22399);
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22399__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
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
}catch (e22404){var _ = e22404;
return null;
}})())){
m.setPaintProperty(placesurfer.map_ui.core.draw_fill,"fill-color",rgb);

m.setPaintProperty(placesurfer.map_ui.core.draw_fill,"fill-opacity",alpha);
} else {
}

if(cljs.core.truth_((function (){try{return m.getLayer(placesurfer.map_ui.core.draw_line);
}catch (e22405){var _ = e22405;
return null;
}})())){
return m.setPaintProperty(placesurfer.map_ui.core.draw_line,"line-color",rgb);
} else {
return null;
}
}catch (e22403){var _ = e22403;
return null;
}} else {
return null;
}
});
placesurfer.map_ui.core.set_draw_layer_visibility_BANG_ = (function placesurfer$map_ui$core$set_draw_layer_visibility_BANG_(m,layer_id,visible_QMARK_){
try{if(cljs.core.truth_((function (){try{return m.getLayer(layer_id);
}catch (e22407){var _ = e22407;
return null;
}})())){
return m.setLayoutProperty(layer_id,"visibility",(cljs.core.truth_(visible_QMARK_)?"visible":"none"));
} else {
return null;
}
}catch (e22406){var _ = e22406;
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
}catch (e22414){var _ = e22414;
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
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (vidx,p__22424){
var vec__22425 = p__22424;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22425,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22425,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"polygon-idx","polygon-idx",1216671533),pidx,new cljs.core.Keyword(null,"vertex-idx","vertex-idx",676111409),vidx,new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"lat","lat",-580793929),lat], null);
}),ring);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)], 0)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (vidx,p__22431){
var vec__22432 = p__22431;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22432,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22432,(1),null);
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
var G__22436 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v);
var G__22436__$1 = (((G__22436 instanceof cljs.core.Keyword))?G__22436.fqn:null);
switch (G__22436__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22436__$1)].join('')));

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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_ring,(function (p1__22437_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__22437_SHARP_));
}));
} else {
if(cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons))){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.last(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_polygons,(function (p1__22438_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__22438_SHARP_));
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
var seq__22439 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_click_fn,"click"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_mm_fn,"mousemove"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_md_fn,"mousedown"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_mu_fn,"mouseup"], null)], null));
var chunk__22440 = null;
var count__22441 = (0);
var i__22442 = (0);
while(true){
if((i__22442 < count__22441)){
var vec__22451 = chunk__22440.cljs$core$IIndexed$_nth$arity$2(null,i__22442);
var _BANG_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22451,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22451,(1),null);
var temp__5823__auto___23519 = cljs.core.deref(_BANG_a);
if(cljs.core.truth_(temp__5823__auto___23519)){
var f_23520 = temp__5823__auto___23519;
try{m.off(ev,f_23520);
}catch (e22454){var __23521 = e22454;
}
cljs.core.reset_BANG_(_BANG_a,null);
} else {
}


var G__23522 = seq__22439;
var G__23523 = chunk__22440;
var G__23524 = count__22441;
var G__23525 = (i__22442 + (1));
seq__22439 = G__23522;
chunk__22440 = G__23523;
count__22441 = G__23524;
i__22442 = G__23525;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22439);
if(temp__5823__auto__){
var seq__22439__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22439__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22439__$1);
var G__23526 = cljs.core.chunk_rest(seq__22439__$1);
var G__23527 = c__5548__auto__;
var G__23528 = cljs.core.count(c__5548__auto__);
var G__23529 = (0);
seq__22439 = G__23526;
chunk__22440 = G__23527;
count__22441 = G__23528;
i__22442 = G__23529;
continue;
} else {
var vec__22455 = cljs.core.first(seq__22439__$1);
var _BANG_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22455,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22455,(1),null);
var temp__5823__auto___23530__$1 = cljs.core.deref(_BANG_a);
if(cljs.core.truth_(temp__5823__auto___23530__$1)){
var f_23532 = temp__5823__auto___23530__$1;
try{m.off(ev,f_23532);
}catch (e22458){var __23533 = e22458;
}
cljs.core.reset_BANG_(_BANG_a,null);
} else {
}


var G__23534 = cljs.core.next(seq__22439__$1);
var G__23535 = null;
var G__23536 = (0);
var G__23537 = (0);
seq__22439 = G__23534;
chunk__22440 = G__23535;
count__22441 = G__23536;
i__22442 = G__23537;
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
var ll_23539 = e.lngLat;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ll_23539.lng,ll_23539.lat], null));

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
var ll_23542 = e.lngLat;
placesurfer.map_ui.core.move_vertex_BANG_(ds,ll_23542.lng,ll_23542.lat);

return placesurfer.map_ui.core.refresh_draw_BANG_(m);
} else {
var v = placesurfer.map_ui.core.vertex_near_screen(m,x,y,(8));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_hover_v,v);

var G__22462 = m;
var G__22463 = (cljs.core.truth_(v)?"pointer":"default");
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(G__22462,G__22463) : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,G__22462,G__22463));
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
}catch (e22464){var __23543 = e22464;
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
}catch (e22465){var __23544 = e22465;
}
var G__22466 = m;
var G__22467 = (cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_hover_v))?"pointer":"default");
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(G__22466,G__22467) : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,G__22466,G__22467));
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

var seq__22472 = cljs.core.seq(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["padding","4px 8px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fontSize","11px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fontWeight","600"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["color","white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginBottom","2px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","3px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textAlign","left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background",bg], null)], null));
var chunk__22473 = null;
var count__22474 = (0);
var i__22475 = (0);
while(true){
if((i__22475 < count__22474)){
var vec__22485 = chunk__22473.cljs$core$IIndexed$_nth$arity$2(null,i__22475);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22485,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22485,(1),null);
(el.style[k] = v);


var G__23555 = seq__22472;
var G__23556 = chunk__22473;
var G__23557 = count__22474;
var G__23558 = (i__22475 + (1));
seq__22472 = G__23555;
chunk__22473 = G__23556;
count__22474 = G__23557;
i__22475 = G__23558;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22472);
if(temp__5823__auto__){
var seq__22472__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22472__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22472__$1);
var G__23561 = cljs.core.chunk_rest(seq__22472__$1);
var G__23562 = c__5548__auto__;
var G__23563 = cljs.core.count(c__5548__auto__);
var G__23564 = (0);
seq__22472 = G__23561;
chunk__22473 = G__23562;
count__22474 = G__23563;
i__22475 = G__23564;
continue;
} else {
var vec__22488 = cljs.core.first(seq__22472__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22488,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22488,(1),null);
(el.style[k] = v);


var G__23566 = cljs.core.next(seq__22472__$1);
var G__23567 = null;
var G__23568 = (0);
var G__23569 = (0);
seq__22472 = G__23566;
chunk__22473 = G__23567;
count__22474 = G__23568;
i__22475 = G__23569;
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
var G__22504 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22504) : f.call(null,G__22504));
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
}catch (e22515){var __23581 = e22515;
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

var seq__22523_23586 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [toggle_btn,close_btn,undo_btn,clear_btn,paste_btn,save_btn], null));
var chunk__22524_23587 = null;
var count__22525_23588 = (0);
var i__22526_23589 = (0);
while(true){
if((i__22526_23589 < count__22525_23588)){
var b_23590 = chunk__22524_23587.cljs$core$IIndexed$_nth$arity$2(null,i__22526_23589);
el.appendChild(b_23590);


var G__23591 = seq__22523_23586;
var G__23592 = chunk__22524_23587;
var G__23593 = count__22525_23588;
var G__23594 = (i__22526_23589 + (1));
seq__22523_23586 = G__23591;
chunk__22524_23587 = G__23592;
count__22525_23588 = G__23593;
i__22526_23589 = G__23594;
continue;
} else {
var temp__5823__auto___23595 = cljs.core.seq(seq__22523_23586);
if(temp__5823__auto___23595){
var seq__22523_23596__$1 = temp__5823__auto___23595;
if(cljs.core.chunked_seq_QMARK_(seq__22523_23596__$1)){
var c__5548__auto___23597 = cljs.core.chunk_first(seq__22523_23596__$1);
var G__23598 = cljs.core.chunk_rest(seq__22523_23596__$1);
var G__23599 = c__5548__auto___23597;
var G__23600 = cljs.core.count(c__5548__auto___23597);
var G__23601 = (0);
seq__22523_23586 = G__23598;
chunk__22524_23587 = G__23599;
count__22525_23588 = G__23600;
i__22526_23589 = G__23601;
continue;
} else {
var b_23602 = cljs.core.first(seq__22523_23596__$1);
el.appendChild(b_23602);


var G__23603 = cljs.core.next(seq__22523_23596__$1);
var G__23604 = null;
var G__23605 = (0);
var G__23606 = (0);
seq__22523_23586 = G__23603;
chunk__22524_23587 = G__23604;
count__22525_23588 = G__23605;
i__22526_23589 = G__23606;
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
}catch (e22530){var __23607 = e22530;
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
var features_23609 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(geojson.features,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var rings_23610 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (f){
var coords = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),(0)], null));
if(cljs.core.seq(coords)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__22539){
var vec__22541 = p__22539;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22541,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22541,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null);
}),cljs.core.butlast(coords));
} else {
return null;
}
}),features_23609);
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_polygons,cljs.core.vec(rings_23610));
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
}catch (e22549){var _ = e22549;
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
}catch (e22550){var _ = e22550;
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
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__22564){
var map__22565 = p__22564;
var map__22565__$1 = cljs.core.__destructure_map(map__22565);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22565__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22565__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var area_radii = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22565__$1,new cljs.core.Keyword(null,"area-radii","area-radii",1413411485));
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
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__22570){
var map__22571 = p__22570;
var map__22571__$1 = cljs.core.__destructure_map(map__22571);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var area_radii = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571__$1,new cljs.core.Keyword(null,"area-radii","area-radii",1413411485));
if(((cljs.core.seq(area_radii)) && (((typeof longitude === 'number') && (typeof latitude === 'number'))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
var vec__22573 = placesurfer.map_ui.core.north_point(longitude,latitude,r);
var label_lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22573,(0),null);
var label_lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22573,(1),null);
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
}catch (e22584){var _ = e22584;
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
}catch (e22592){var _ = e22592;
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

var temp__5823__auto___23666 = cljs.core.deref(placesurfer.map_ui.core._BANG_area_debounce_timer);
if(cljs.core.truth_(temp__5823__auto___23666)){
var timer_23667 = temp__5823__auto___23666;
clearTimeout(timer_23667);
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
var seq__22612 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__22613 = null;
var count__22614 = (0);
var i__22615 = (0);
while(true){
if((i__22615 < count__22614)){
var marker = chunk__22613.cljs$core$IIndexed$_nth$arity$2(null,i__22615);
var temp__5823__auto___23668 = (function (){try{return marker.getElement();
}catch (e22625){var _ = e22625;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___23668)){
var el_23669 = temp__5823__auto___23668;
(el_23669.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__23670 = seq__22612;
var G__23671 = chunk__22613;
var G__23672 = count__22614;
var G__23673 = (i__22615 + (1));
seq__22612 = G__23670;
chunk__22613 = G__23671;
count__22614 = G__23672;
i__22615 = G__23673;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22612);
if(temp__5823__auto__){
var seq__22612__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22612__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22612__$1);
var G__23675 = cljs.core.chunk_rest(seq__22612__$1);
var G__23676 = c__5548__auto__;
var G__23677 = cljs.core.count(c__5548__auto__);
var G__23678 = (0);
seq__22612 = G__23675;
chunk__22613 = G__23676;
count__22614 = G__23677;
i__22615 = G__23678;
continue;
} else {
var marker = cljs.core.first(seq__22612__$1);
var temp__5823__auto___23679__$1 = (function (){try{return marker.getElement();
}catch (e22635){var _ = e22635;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___23679__$1)){
var el_23680 = temp__5823__auto___23679__$1;
(el_23680.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__23682 = cljs.core.next(seq__22612__$1);
var G__23683 = null;
var G__23684 = (0);
var G__23685 = (0);
seq__22612 = G__23682;
chunk__22613 = G__23683;
count__22614 = G__23684;
i__22615 = G__23685;
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
}catch (e22636){var _ = e22636;
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
}catch (e22637){var _ = e22637;
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
}catch (e22648){var _ = e22648;
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
var G__22653 = (marker["placesurferPosition"]);
if((G__22653 == null)){
return null;
} else {
return placesurfer.map_ui.core.position_map(G__22653);
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
placesurfer.map_ui.core.position_match_QMARK_ = (function placesurfer$map_ui$core$position_match_QMARK_(pos,p__22658){
var map__22659 = p__22658;
var map__22659__$1 = cljs.core.__destructure_map(map__22659);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22659__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22659__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22659__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
}catch (e22664){var _ = e22664;
return null;
}}),cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
});
placesurfer.map_ui.core.refresh_row_hover_emphasis_BANG_ = (function placesurfer$map_ui$core$refresh_row_hover_emphasis_BANG_(){
var seq__22669_23702 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__22670_23703 = null;
var count__22671_23704 = (0);
var i__22672_23705 = (0);
while(true){
if((i__22672_23705 < count__22671_23704)){
var marker_23706 = chunk__22670_23703.cljs$core$IIndexed$_nth$arity$2(null,i__22672_23705);
var temp__5823__auto___23707 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_23706);
if(cljs.core.truth_(temp__5823__auto___23707)){
var visual_23708 = temp__5823__auto___23707;
visual_23708.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}

var temp__5823__auto___23711 = (function (){try{return marker_23706.getElement();
}catch (e22682){var _ = e22682;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___23711)){
var el_23713 = temp__5823__auto___23711;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core.marker_z_index_row_hover,el_23713.style.zIndex)){
(el_23713.style.zIndex = (((marker_23706 === new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup))))?placesurfer.map_ui.core.marker_z_index_active:placesurfer.map_ui.core.marker_z_index_default));
} else {
}
} else {
}


var G__23714 = seq__22669_23702;
var G__23715 = chunk__22670_23703;
var G__23716 = count__22671_23704;
var G__23717 = (i__22672_23705 + (1));
seq__22669_23702 = G__23714;
chunk__22670_23703 = G__23715;
count__22671_23704 = G__23716;
i__22672_23705 = G__23717;
continue;
} else {
var temp__5823__auto___23718 = cljs.core.seq(seq__22669_23702);
if(temp__5823__auto___23718){
var seq__22669_23719__$1 = temp__5823__auto___23718;
if(cljs.core.chunked_seq_QMARK_(seq__22669_23719__$1)){
var c__5548__auto___23721 = cljs.core.chunk_first(seq__22669_23719__$1);
var G__23722 = cljs.core.chunk_rest(seq__22669_23719__$1);
var G__23723 = c__5548__auto___23721;
var G__23724 = cljs.core.count(c__5548__auto___23721);
var G__23725 = (0);
seq__22669_23702 = G__23722;
chunk__22670_23703 = G__23723;
count__22671_23704 = G__23724;
i__22672_23705 = G__23725;
continue;
} else {
var marker_23726 = cljs.core.first(seq__22669_23719__$1);
var temp__5823__auto___23727__$1 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_23726);
if(cljs.core.truth_(temp__5823__auto___23727__$1)){
var visual_23728 = temp__5823__auto___23727__$1;
visual_23728.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}

var temp__5823__auto___23729__$1 = (function (){try{return marker_23726.getElement();
}catch (e22687){var _ = e22687;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___23729__$1)){
var el_23731 = temp__5823__auto___23729__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core.marker_z_index_row_hover,el_23731.style.zIndex)){
(el_23731.style.zIndex = (((marker_23726 === new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup))))?placesurfer.map_ui.core.marker_z_index_active:placesurfer.map_ui.core.marker_z_index_default));
} else {
}
} else {
}


var G__23739 = cljs.core.next(seq__22669_23719__$1);
var G__23740 = null;
var G__23741 = (0);
var G__23742 = (0);
seq__22669_23702 = G__23739;
chunk__22670_23703 = G__23740;
count__22671_23704 = G__23741;
i__22672_23705 = G__23742;
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
var temp__5823__auto___23746__$2 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker);
if(cljs.core.truth_(temp__5823__auto___23746__$2)){
var visual_23747 = temp__5823__auto___23746__$2;
visual_23747.classList.add(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}

var temp__5823__auto____$2 = (function (){try{return marker.getElement();
}catch (e22690){var _ = e22690;
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
var seq__22707_23748 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__22708_23749 = null;
var count__22709_23750 = (0);
var i__22710_23751 = (0);
while(true){
if((i__22710_23751 < count__22709_23750)){
var marker_23752 = chunk__22708_23749.cljs$core$IIndexed$_nth$arity$2(null,i__22710_23751);
var temp__5823__auto___23753 = (function (){try{return marker_23752.getPopup();
}catch (e22726){var _ = e22726;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___23753)){
var popup_23758 = temp__5823__auto___23753;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_23758);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_23758,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_23758)){
try{marker_23752.togglePopup();
}catch (e22731){var __23759 = e22731;
}} else {
}
} else {
}


var G__23760 = seq__22707_23748;
var G__23761 = chunk__22708_23749;
var G__23762 = count__22709_23750;
var G__23763 = (i__22710_23751 + (1));
seq__22707_23748 = G__23760;
chunk__22708_23749 = G__23761;
count__22709_23750 = G__23762;
i__22710_23751 = G__23763;
continue;
} else {
var temp__5823__auto___23764 = cljs.core.seq(seq__22707_23748);
if(temp__5823__auto___23764){
var seq__22707_23765__$1 = temp__5823__auto___23764;
if(cljs.core.chunked_seq_QMARK_(seq__22707_23765__$1)){
var c__5548__auto___23766 = cljs.core.chunk_first(seq__22707_23765__$1);
var G__23768 = cljs.core.chunk_rest(seq__22707_23765__$1);
var G__23769 = c__5548__auto___23766;
var G__23770 = cljs.core.count(c__5548__auto___23766);
var G__23771 = (0);
seq__22707_23748 = G__23768;
chunk__22708_23749 = G__23769;
count__22709_23750 = G__23770;
i__22710_23751 = G__23771;
continue;
} else {
var marker_23772 = cljs.core.first(seq__22707_23765__$1);
var temp__5823__auto___23773__$1 = (function (){try{return marker_23772.getPopup();
}catch (e22732){var _ = e22732;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___23773__$1)){
var popup_23774 = temp__5823__auto___23773__$1;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_23774);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_23774,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_23774)){
try{marker_23772.togglePopup();
}catch (e22734){var __23776 = e22734;
}} else {
}
} else {
}


var G__23777 = cljs.core.next(seq__22707_23765__$1);
var G__23778 = null;
var G__23779 = (0);
var G__23780 = (0);
seq__22707_23748 = G__23777;
chunk__22708_23749 = G__23778;
count__22709_23750 = G__23779;
i__22710_23751 = G__23780;
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
}catch (e22736){var __23781 = e22736;
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
}catch (e22744){var __23782 = e22744;
}
placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup,mode);

placesurfer.map_ui.core.elevate_active_marker_BANG_(marker);

placesurfer.map_ui.core.elevate_popup_layer_BANG_(popup);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_hover_popup,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"popup","popup",635890211),popup,new cljs.core.Keyword(null,"root-el","root-el",1068654895),root_el], null));
});
/**
 * Open the click popup on the marker matching `match` (:id or :longitude/:latitude).
 */
placesurfer.map_ui.core.open_marker_popup_BANG_ = (function placesurfer$map_ui$core$open_marker_popup_BANG_(p__22748){
var map__22749 = p__22748;
var map__22749__$1 = cljs.core.__destructure_map(map__22749);
var match = map__22749__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22749__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22749__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22749__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
}catch (e22755){var _ = e22755;
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
var map__22783 = temp__5821__auto__;
var map__22783__$1 = cljs.core.__destructure_map(map__22783);
var root_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22783__$1,new cljs.core.Keyword(null,"root-el","root-el",1068654895));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22783__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22783__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
}catch (e22799){var _ = e22799;
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
var G__22810 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__22810) : handler.call(null,G__22810));
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
var G__22817 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__22817) : handler.call(null,G__22817));
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
var map__22826 = temp__5823__auto__;
var map__22826__$1 = cljs.core.__destructure_map(map__22826);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22826__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22826__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
var map__22827 = temp__5823__auto__;
var map__22827__$1 = cljs.core.__destructure_map(map__22827);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22827__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22827__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
placesurfer.map_ui.core.attach_marker_interactions_BANG_ = (function placesurfer$map_ui$core$attach_marker_interactions_BANG_(marker,popup,root_el,position){
root_el.addEventListener("mouseenter",(function (_){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_))){
return null;
} else {
var temp__5823__auto___23812 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5823__auto___23812)){
var visual_23813 = temp__5823__auto___23812;
visual_23813.classList.add(placesurfer.map_ui.core.marker_map_hover_class);
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
var temp__5823__auto___23814 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5823__auto___23814)){
var visual_23815 = temp__5823__auto___23814;
visual_23815.classList.remove(placesurfer.map_ui.core.marker_map_hover_class);
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
if(cljs.core.truth_((function (){var G__22838 = e.target;
if((G__22838 == null)){
return null;
} else {
return G__22838.closest(".map-popup-delete-btn");
}
})())){
e.stopPropagation();

e.preventDefault();

var temp__5823__auto___23820__$1 = cljs.core.deref(placesurfer.map_ui.core._BANG_on_marker_delete);
if(cljs.core.truth_(temp__5823__auto___23820__$1)){
var handler_23821 = temp__5823__auto___23820__$1;
var temp__5823__auto___23822__$2 = placesurfer.map_ui.core.marker_position_data(marker);
if(cljs.core.truth_(temp__5823__auto___23822__$2)){
var pos_23823 = temp__5823__auto___23822__$2;
(handler_23821.cljs$core$IFn$_invoke$arity$1 ? handler_23821.cljs$core$IFn$_invoke$arity$1(pos_23823) : handler_23821.call(null,pos_23823));
} else {
}
} else {
}

return placesurfer.map_ui.core.close_popup_BANG_(marker,popup);
} else {
if(cljs.core.truth_((function (){var G__22839 = e.target;
if((G__22839 == null)){
return null;
} else {
return G__22839.closest(".map-popup-edit-btn");
}
})())){
e.stopPropagation();

e.preventDefault();

var temp__5823__auto___23825__$1 = cljs.core.deref(placesurfer.map_ui.core._BANG_on_marker_edit);
if(cljs.core.truth_(temp__5823__auto___23825__$1)){
var handler_23826 = temp__5823__auto___23825__$1;
var temp__5823__auto___23827__$2 = placesurfer.map_ui.core.marker_position_data(marker);
if(cljs.core.truth_(temp__5823__auto___23827__$2)){
var pos_23828 = temp__5823__auto___23827__$2;
(handler_23826.cljs$core$IFn$_invoke$arity$1 ? handler_23826.cljs$core$IFn$_invoke$arity$1(pos_23828) : handler_23826.call(null,pos_23828));
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
var temp__5823__auto___23829 = cljs.core.deref(placesurfer.map_ui.core._BANG_on_marker_click);
if(cljs.core.truth_(temp__5823__auto___23829)){
var handler_23830 = temp__5823__auto___23829;
var temp__5823__auto___23831__$1 = placesurfer.map_ui.core.marker_click_position(marker,root_el,position);
if(cljs.core.truth_(temp__5823__auto___23831__$1)){
var pos_23832 = temp__5823__auto___23831__$1;
(handler_23830.cljs$core$IFn$_invoke$arity$1 ? handler_23830.cljs$core$IFn$_invoke$arity$1(pos_23832) : handler_23830.call(null,pos_23832));
} else {
}
} else {
}

if(placesurfer.map_ui.core.marker_pick_enabled_QMARK_(position)){
var handled_QMARK_ = (function (){var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_marker_pick_handler);
if(cljs.core.truth_(temp__5823__auto__)){
var handler = temp__5823__auto__;
var temp__5823__auto____$1 = placesurfer.map_ui.core.marker_click_position(marker,root_el,position);
if(cljs.core.truth_(temp__5823__auto____$1)){
var pos = temp__5823__auto____$1;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(pos) : handler.call(null,pos));
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(handled_QMARK_)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("click",placesurfer.map_ui.core.popup_open_mode(popup))){
return placesurfer.map_ui.core.close_popup_BANG_(marker,popup);
} else {
return placesurfer.map_ui.core.open_popup_BANG_(marker,popup,"click",root_el);
}
}
} else {
return null;
}
}
}));
});
placesurfer.map_ui.core.add_markers_to_BANG_ = (function placesurfer$map_ui$core$add_markers_to_BANG_(markers_atom,m,positions,popup_opts){
var seq__22862 = cljs.core.seq(positions);
var chunk__22863 = null;
var count__22864 = (0);
var i__22865 = (0);
while(true){
if((i__22865 < count__22864)){
var position = chunk__22863.cljs$core$IIndexed$_nth$arity$2(null,i__22865);
var map__22877_23837 = position;
var map__22877_23838__$1 = cljs.core.__destructure_map(map__22877_23837);
var longitude_23839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877_23838__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_23840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877_23838__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_23841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877_23838__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_23842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877_23838__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var marker_anchor_23843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877_23838__$1,new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686));
var marker_offset_23844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877_23838__$1,new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711));
var resolved_topic_23845 = (function (){var or__5025__auto__ = marker_topic_23842;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_23841;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__22879_23846 = placesurfer.map_ui.core.marker_style_for(resolved_topic_23845);
var map__22879_23847__$1 = cljs.core.__destructure_map(map__22879_23846);
var anchor_23848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22879_23847__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var effective_anchor_23849 = (function (){var or__5025__auto__ = marker_anchor_23843;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return anchor_23848;
}
})();
var root_el_23850 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(resolved_topic_23845,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position),effective_anchor_23849);
var marker_opts_23851 = (function (){var G__22890 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_23850,new cljs.core.Keyword(null,"anchor","anchor",1549638489),effective_anchor_23849], null);
if(cljs.core.seq(marker_offset_23844)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22890,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.clj__GT_js(marker_offset_23844));
} else {
return G__22890;
}
})();
var marker_23852 = (new maplibregl.Marker(cljs.core.clj__GT_js(marker_opts_23851)));
var popup_23853 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_23852["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_23852["placesurferPositionClj"] = position);

popup_23853.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_23852.setLngLat([longitude_23839,latitude_23840]);

marker_23852.setPopup(popup_23853);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_23852,popup_23853,root_el_23850,position);

marker_23852.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(markers_atom,cljs.core.conj,marker_23852);


var G__23859 = seq__22862;
var G__23860 = chunk__22863;
var G__23861 = count__22864;
var G__23862 = (i__22865 + (1));
seq__22862 = G__23859;
chunk__22863 = G__23860;
count__22864 = G__23861;
i__22865 = G__23862;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22862);
if(temp__5823__auto__){
var seq__22862__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22862__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22862__$1);
var G__23863 = cljs.core.chunk_rest(seq__22862__$1);
var G__23864 = c__5548__auto__;
var G__23865 = cljs.core.count(c__5548__auto__);
var G__23866 = (0);
seq__22862 = G__23863;
chunk__22863 = G__23864;
count__22864 = G__23865;
i__22865 = G__23866;
continue;
} else {
var position = cljs.core.first(seq__22862__$1);
var map__22894_23867 = position;
var map__22894_23868__$1 = cljs.core.__destructure_map(map__22894_23867);
var longitude_23869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22894_23868__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_23870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22894_23868__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_23871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22894_23868__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_23872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22894_23868__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var marker_anchor_23873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22894_23868__$1,new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686));
var marker_offset_23874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22894_23868__$1,new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711));
var resolved_topic_23875 = (function (){var or__5025__auto__ = marker_topic_23872;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_23871;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__22895_23876 = placesurfer.map_ui.core.marker_style_for(resolved_topic_23875);
var map__22895_23877__$1 = cljs.core.__destructure_map(map__22895_23876);
var anchor_23878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22895_23877__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var effective_anchor_23879 = (function (){var or__5025__auto__ = marker_anchor_23873;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return anchor_23878;
}
})();
var root_el_23880 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(resolved_topic_23875,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position),effective_anchor_23879);
var marker_opts_23881 = (function (){var G__22898 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_23880,new cljs.core.Keyword(null,"anchor","anchor",1549638489),effective_anchor_23879], null);
if(cljs.core.seq(marker_offset_23874)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22898,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.clj__GT_js(marker_offset_23874));
} else {
return G__22898;
}
})();
var marker_23882 = (new maplibregl.Marker(cljs.core.clj__GT_js(marker_opts_23881)));
var popup_23883 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_23882["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_23882["placesurferPositionClj"] = position);

popup_23883.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_23882.setLngLat([longitude_23869,latitude_23870]);

marker_23882.setPopup(popup_23883);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_23882,popup_23883,root_el_23880,position);

marker_23882.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(markers_atom,cljs.core.conj,marker_23882);


var G__23887 = cljs.core.next(seq__22862__$1);
var G__23888 = null;
var G__23889 = (0);
var G__23890 = (0);
seq__22862 = G__23887;
chunk__22863 = G__23888;
count__22864 = G__23889;
i__22865 = G__23890;
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
var temp__5823__auto___23894 = cljs.core.deref(placesurfer.map_ui.core._BANG_dense_viewport_timer);
if(cljs.core.truth_(temp__5823__auto___23894)){
var timer_23895 = temp__5823__auto___23894;
clearTimeout(timer_23895);
} else {
}

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_viewport_timer,setTimeout((function (){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_viewport_timer,null);

return placesurfer.map_ui.core.rebuild_dense_markers_now_BANG_(m);
}),placesurfer.map_ui.core.dense_viewport_debounce_ms));
});
placesurfer.map_ui.core.fit_mock_map_BANG_ = (function placesurfer$map_ui$core$fit_mock_map_BANG_(m,p__22940){
var map__22943 = p__22940;
var map__22943__$1 = cljs.core.__destructure_map(map__22943);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22943__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22943__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22943__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22943__$1,new cljs.core.Keyword(null,"north","north",651323902));
(m.fitBoundsCalled = true);

var c_23898 = m.getCenter();
(c_23898.lng = ((west + east) / 2.0));

(c_23898.lat = ((south + north) / 2.0));

return m.setZoom(placesurfer.map_ui.core.fit_max_zoom);
});
placesurfer.map_ui.core.fit_lng_lat_box_BANG_ = (function placesurfer$map_ui$core$fit_lng_lat_box_BANG_(m,box,p__22960){
var map__22961 = p__22960;
var map__22961__$1 = cljs.core.__destructure_map(map__22961);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22961__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
if(placesurfer.map_ui.bounds.valid_lng_lat_box_QMARK_(box)){
var map__22962 = placesurfer.map_ui.bounds.pad_degenerate_box(box);
var map__22962__$1 = cljs.core.__destructure_map(map__22962);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,new cljs.core.Keyword(null,"north","north",651323902));
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
placesurfer.map_ui.core.fit_bounds_BANG_ = (function placesurfer$map_ui$core$fit_bounds_BANG_(m,positions,p__22968){
var map__22969 = p__22968;
var map__22969__$1 = cljs.core.__destructure_map(map__22969);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var temp__5823__auto__ = placesurfer.map_ui.bounds.fit_lng_lat_bounds(positions);
if(cljs.core.truth_(temp__5823__auto__)){
var box = temp__5823__auto__;
return placesurfer.map_ui.core.fit_lng_lat_box_BANG_(m,box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null));
} else {
return null;
}
});
placesurfer.map_ui.core.normalize_state = (function placesurfer$map_ui$core$normalize_state(p__22970){
var map__22971 = p__22970;
var map__22971__$1 = cljs.core.__destructure_map(map__22971);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.vec(positions),new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),fit_bounds,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003),draft_marker,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185),open_popup_for,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),(function (){var or__5025__auto__ = popup_opts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"fit?","fit?",1773758200),cljs.core.boolean$(fit_QMARK_),new cljs.core.Keyword(null,"animate?","animate?",-1559039739),(((!((animate_QMARK_ == null))))?cljs.core.boolean$(animate_QMARK_):true)], null);
});
placesurfer.map_ui.core.apply_now_BANG_ = (function placesurfer$map_ui$core$apply_now_BANG_(m,p__22977){
var map__22978 = p__22977;
var map__22978__$1 = cljs.core.__destructure_map(map__22978);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22978__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22978__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22978__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22978__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22978__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22978__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22978__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
if((m === cljs.core.deref(placesurfer.map_ui.core._BANG_map))){
var vec__22979_23906 = placesurfer.map_ui.core.partition_dense_positions(positions);
var stable_positions_23907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22979_23906,(0),null);
var dense_positions_23908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22979_23906,(1),null);
placesurfer.map_ui.core.clear_markers_BANG_();

if(cljs.core.seq(stable_positions_23907)){
placesurfer.map_ui.core.add_markers_BANG_(m,stable_positions_23907,popup_opts);
} else {
}

if(cljs.core.truth_(draft_marker)){
placesurfer.map_ui.core.add_markers_BANG_(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draft_marker], null),popup_opts);
} else {
}

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_positions,dense_positions_23908);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_popup_opts,popup_opts);

placesurfer.map_ui.core.rebuild_dense_markers_now_BANG_(m);

try{placesurfer.map_ui.core.apply_area_circles_BANG_(m,(function (){var G__22984 = cljs.core.vec(positions);
if(cljs.core.truth_(draft_marker)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22984,draft_marker);
} else {
return G__22984;
}
})());
}catch (e22982){var __23911 = e22982;
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
var seq__22988 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50),(150),(400),(800),(1500)], null));
var chunk__22989 = null;
var count__22990 = (0);
var i__22991 = (0);
while(true){
if((i__22991 < count__22990)){
var delay_ms = chunk__22989.cljs$core$IIndexed$_nth$arity$2(null,i__22991);
setTimeout(((function (seq__22988,chunk__22989,count__22990,i__22991,delay_ms){
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
});})(seq__22988,chunk__22989,count__22990,i__22991,delay_ms))
,delay_ms);


var G__23913 = seq__22988;
var G__23914 = chunk__22989;
var G__23915 = count__22990;
var G__23916 = (i__22991 + (1));
seq__22988 = G__23913;
chunk__22989 = G__23914;
count__22990 = G__23915;
i__22991 = G__23916;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22988);
if(temp__5823__auto__){
var seq__22988__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22988__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22988__$1);
var G__23918 = cljs.core.chunk_rest(seq__22988__$1);
var G__23919 = c__5548__auto__;
var G__23920 = cljs.core.count(c__5548__auto__);
var G__23921 = (0);
seq__22988 = G__23918;
chunk__22989 = G__23919;
count__22990 = G__23920;
i__22991 = G__23921;
continue;
} else {
var delay_ms = cljs.core.first(seq__22988__$1);
setTimeout(((function (seq__22988,chunk__22989,count__22990,i__22991,delay_ms,seq__22988__$1,temp__5823__auto__){
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
});})(seq__22988,chunk__22989,count__22990,i__22991,delay_ms,seq__22988__$1,temp__5823__auto__))
,delay_ms);


var G__23925 = cljs.core.next(seq__22988__$1);
var G__23926 = null;
var G__23927 = (0);
var G__23928 = (0);
seq__22988 = G__23925;
chunk__22989 = G__23926;
count__22990 = G__23927;
i__22991 = G__23928;
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
placesurfer.map_ui.core.sync_country_pick_state_BANG_ = (function placesurfer$map_ui$core$sync_country_pick_state_BANG_(p__23005){
var map__23006 = p__23005;
var map__23006__$1 = cljs.core.__destructure_map(map__23006);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
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
placesurfer.map_ui.core.sync_add_pin_mode_BANG_ = (function placesurfer$map_ui$core$sync_add_pin_mode_BANG_(p__23007){
var map__23008 = p__23007;
var map__23008__$1 = cljs.core.__destructure_map(map__23008);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23008__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23008__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_,cljs.core.boolean$(active_QMARK_));

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_click_handler,(cljs.core.truth_(active_QMARK_)?on_click:null));

var temp__5823__auto___23935 = cljs.core.deref(placesurfer.map_ui.core._BANG_map_container);
if(cljs.core.truth_(temp__5823__auto___23935)){
var el_23936 = temp__5823__auto___23935;
if(cljs.core.truth_(active_QMARK_)){
el_23936.classList.add("map-add-pin-active");
} else {
el_23936.classList.remove("map-add-pin-active");
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
}catch (e23009){var _ = e23009;
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
placesurfer.map_ui.core.fly_to_view_BANG_ = (function placesurfer$map_ui$core$fly_to_view_BANG_(p__23010){
var map__23011 = p__23010;
var map__23011__$1 = cljs.core.__destructure_map(map__23011);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23011__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23011__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23011__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23011__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
if(((typeof longitude === 'number') && (((typeof latitude === 'number') && (typeof zoom === 'number'))))){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom,new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null)));
}catch (e23012){var _ = e23012;
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
placesurfer.map_ui.core.center_on_position_BANG_ = (function placesurfer$map_ui$core$center_on_position_BANG_(p__23013){
var map__23014 = p__23013;
var map__23014__$1 = cljs.core.__destructure_map(map__23014);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23014__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),placesurfer.map_ui.core.center_default_zoom);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23014__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
var preserve_zoom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,new cljs.core.Keyword(null,"preserve-zoom?","preserve-zoom?",-1650190790));
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js((function (){var G__23016 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null);
if(cljs.core.not(preserve_zoom_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23016,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom);
} else {
return G__23016;
}
})()));
}catch (e23015){var _ = e23015;
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

var temp__5823__auto___23948 = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto___23948)){
var m_23950 = temp__5823__auto___23948;
try{m_23950.remove();
}catch (e23022){var __23951 = e23022;
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
placesurfer.map_ui.core.dense_topic_min_zoom_for_tests = (function placesurfer$map_ui$core$dense_topic_min_zoom_for_tests(){
return placesurfer.map_ui.core.dense_topic_min_zoom;
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
