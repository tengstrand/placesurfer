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
}catch (e20108){var _ = e20108;
return false;
}})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
try{return m.isStyleLoaded() === true;
}catch (e20109){var _ = e20109;
return false;
}}

}
}
});
placesurfer.map_ui.core.safe_resize_BANG_ = (function placesurfer$map_ui$core$safe_resize_BANG_(m){
if(cljs.core.truth_(m)){
try{return m.resize();
}catch (e20110){var _ = e20110;
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
}catch (e20111){var _ = e20111;
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
var G__20112 = (function (){try{return marker.getElement();
}catch (e20113){var _ = e20113;
return null;
}})();
if((G__20112 == null)){
return null;
} else {
return placesurfer.map_ui.core.marker_visual_el(G__20112);
}
});
placesurfer.map_ui.core.marker_element = (function placesurfer$map_ui$core$marker_element(var_args){
var G__20115 = arguments.length;
switch (G__20115) {
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
var map__20120 = placesurfer.map_ui.core.marker_style_for(topic);
var map__20120__$1 = cljs.core.__destructure_map(map__20120);
var width_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20120__$1,new cljs.core.Keyword(null,"width-px","width-px",65122451));
var height_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20120__$1,new cljs.core.Keyword(null,"height-px","height-px",-1391665005));
var background_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20120__$1,new cljs.core.Keyword(null,"background-position","background-position",1112702746));
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20120__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
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

var img_20762 = document.createElement("img");
(img_20762.src = image_url);

(img_20762.alt = "");

(img_20762.draggable = false);

(img_20762.style.width = "100%");

(img_20762.style.height = "100%");

(img_20762.style.display = "block");

(img_20762.style.pointerEvents = "none");

visual.appendChild(img_20762);
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
var seq__20124_20763 = cljs.core.seq(cljs.core.deref(markers_atom));
var chunk__20125_20764 = null;
var count__20126_20765 = (0);
var i__20127_20766 = (0);
while(true){
if((i__20127_20766 < count__20126_20765)){
var marker_20767 = chunk__20125_20764.cljs$core$IIndexed$_nth$arity$2(null,i__20127_20766);
try{marker_20767.remove();
}catch (e20130){var __20768 = e20130;
}

var G__20769 = seq__20124_20763;
var G__20770 = chunk__20125_20764;
var G__20771 = count__20126_20765;
var G__20772 = (i__20127_20766 + (1));
seq__20124_20763 = G__20769;
chunk__20125_20764 = G__20770;
count__20126_20765 = G__20771;
i__20127_20766 = G__20772;
continue;
} else {
var temp__5823__auto___20773 = cljs.core.seq(seq__20124_20763);
if(temp__5823__auto___20773){
var seq__20124_20774__$1 = temp__5823__auto___20773;
if(cljs.core.chunked_seq_QMARK_(seq__20124_20774__$1)){
var c__5548__auto___20775 = cljs.core.chunk_first(seq__20124_20774__$1);
var G__20776 = cljs.core.chunk_rest(seq__20124_20774__$1);
var G__20777 = c__5548__auto___20775;
var G__20778 = cljs.core.count(c__5548__auto___20775);
var G__20779 = (0);
seq__20124_20763 = G__20776;
chunk__20125_20764 = G__20777;
count__20126_20765 = G__20778;
i__20127_20766 = G__20779;
continue;
} else {
var marker_20781 = cljs.core.first(seq__20124_20774__$1);
try{marker_20781.remove();
}catch (e20131){var __20782 = e20131;
}

var G__20783 = cljs.core.next(seq__20124_20774__$1);
var G__20784 = null;
var G__20785 = (0);
var G__20786 = (0);
seq__20124_20763 = G__20783;
chunk__20125_20764 = G__20784;
count__20126_20765 = G__20785;
i__20127_20766 = G__20786;
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
placesurfer.map_ui.core.position_topic = (function placesurfer$map_ui$core$position_topic(p__20132){
var map__20133 = p__20132;
var map__20133__$1 = cljs.core.__destructure_map(map__20133);
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20133__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20133__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
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
placesurfer.map_ui.core.position_in_bounds_QMARK_ = (function placesurfer$map_ui$core$position_in_bounds_QMARK_(bounds,p__20134){
var map__20135 = p__20134;
var map__20135__$1 = cljs.core.__destructure_map(map__20135);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20135__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20135__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var and__5023__auto__ = typeof longitude === 'number';
if(and__5023__auto__){
var and__5023__auto____$1 = typeof latitude === 'number';
if(and__5023__auto____$1){
try{return bounds.contains([longitude,latitude]) === true;
}catch (e20136){var _ = e20136;
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
}catch (e20138){var _ = e20138;
return null;
}})();
if(((typeof zoom === 'number') && ((zoom >= placesurfer.map_ui.core.dense_topic_min_zoom)))){
var temp__5821__auto__ = (function (){try{return m.getBounds();
}catch (e20139){var _ = e20139;
return null;
}})();
if(cljs.core.truth_(temp__5821__auto__)){
var bounds = temp__5821__auto__;
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20137_SHARP_){
return placesurfer.map_ui.core.position_in_bounds_QMARK_(bounds,p1__20137_SHARP_);
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

var seq__20154_20790 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["overflow","hidden"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pointerEvents","none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zIndex","1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display",(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_visible_QMARK_))?"block":"none")], null)], null));
var chunk__20155_20791 = null;
var count__20156_20792 = (0);
var i__20157_20793 = (0);
while(true){
if((i__20157_20793 < count__20156_20792)){
var vec__20167_20794 = chunk__20155_20791.cljs$core$IIndexed$_nth$arity$2(null,i__20157_20793);
var k_20795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20167_20794,(0),null);
var v_20796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20167_20794,(1),null);
(el.style[k_20795] = v_20796);


var G__20797 = seq__20154_20790;
var G__20798 = chunk__20155_20791;
var G__20799 = count__20156_20792;
var G__20800 = (i__20157_20793 + (1));
seq__20154_20790 = G__20797;
chunk__20155_20791 = G__20798;
count__20156_20792 = G__20799;
i__20157_20793 = G__20800;
continue;
} else {
var temp__5823__auto___20801 = cljs.core.seq(seq__20154_20790);
if(temp__5823__auto___20801){
var seq__20154_20802__$1 = temp__5823__auto___20801;
if(cljs.core.chunked_seq_QMARK_(seq__20154_20802__$1)){
var c__5548__auto___20804 = cljs.core.chunk_first(seq__20154_20802__$1);
var G__20806 = cljs.core.chunk_rest(seq__20154_20802__$1);
var G__20808 = c__5548__auto___20804;
var G__20809 = cljs.core.count(c__5548__auto___20804);
var G__20810 = (0);
seq__20154_20790 = G__20806;
chunk__20155_20791 = G__20808;
count__20156_20792 = G__20809;
i__20157_20793 = G__20810;
continue;
} else {
var vec__20171_20811 = cljs.core.first(seq__20154_20802__$1);
var k_20812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171_20811,(0),null);
var v_20813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171_20811,(1),null);
(el.style[k_20812] = v_20813);


var G__20815 = cljs.core.next(seq__20154_20802__$1);
var G__20816 = null;
var G__20817 = (0);
var G__20818 = (0);
seq__20154_20790 = G__20815;
chunk__20155_20791 = G__20816;
count__20156_20792 = G__20817;
i__20157_20793 = G__20818;
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
placesurfer.map_ui.core.ref_bounds__GT_box = (function placesurfer$map_ui$core$ref_bounds__GT_box(m,p__20176){
var map__20177 = p__20176;
var map__20177__$1 = cljs.core.__destructure_map(map__20177);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20177__$1,new cljs.core.Keyword(null,"west","west",708776677));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20177__$1,new cljs.core.Keyword(null,"north","north",651323902));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20177__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20177__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var p1 = m.project(({"lng": west, "lat": north}));
var p2 = m.project(({"lng": east, "lat": south}));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),p1.x,new cljs.core.Keyword(null,"y","y",-1757859776),p1.y,new cljs.core.Keyword(null,"w","w",354169001),Math.max((1),(p2.x - p1.x)),new cljs.core.Keyword(null,"h","h",1109658740),Math.max((1),(p2.y - p1.y))], null);
});
placesurfer.map_ui.core.ref_box__GT_bounds = (function placesurfer$map_ui$core$ref_box__GT_bounds(m,p__20178){
var map__20179 = p__20178;
var map__20179__$1 = cljs.core.__destructure_map(map__20179);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20179__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20179__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20179__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20179__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var ll1 = m.unproject([x,y]);
var ll2 = m.unproject([(x + w),(y + h)]);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"west","west",708776677),ll1.lng,new cljs.core.Keyword(null,"north","north",651323902),ll1.lat,new cljs.core.Keyword(null,"east","east",1189821678),ll2.lng,new cljs.core.Keyword(null,"south","south",1586796293),ll2.lat], null);
});
/**
 * Translate pixel box by a mouse delta.
 */
placesurfer.map_ui.core.moved_box = (function placesurfer$map_ui$core$moved_box(p__20186,dx,dy){
var map__20187 = p__20186;
var map__20187__$1 = cljs.core.__destructure_map(map__20187);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20187__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20187__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20187__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20187__$1,new cljs.core.Keyword(null,"h","h",1109658740));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + dy),new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h], null);
});
/**
 * Scale pixel box by dragging `corner` (:nw :ne :sw :se) with mouse delta,
 * keeping the opposite corner fixed and preserving aspect ratio.
 */
placesurfer.map_ui.core.scaled_box = (function placesurfer$map_ui$core$scaled_box(p__20192,corner,dx,dy){
var map__20193 = p__20192;
var map__20193__$1 = cljs.core.__destructure_map(map__20193);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20193__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20193__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20193__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20193__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var aspect = (h / w);
var vec__20196 = (function (){var G__20199 = corner;
var G__20199__$1 = (((G__20199 instanceof cljs.core.Keyword))?G__20199.fqn:null);
switch (G__20199__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20199__$1)].join('')));

}
})();
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20196,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20196,(1),null);
var cx = (function (){var G__20202 = corner;
var G__20202__$1 = (((G__20202 instanceof cljs.core.Keyword))?G__20202.fqn:null);
switch (G__20202__$1) {
case "nw":
case "sw":
return (x + dx);

break;
case "ne":
case "se":
return ((x + w) + dx);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20202__$1)].join('')));

}
})();
var cy = (function (){var G__20203 = corner;
var G__20203__$1 = (((G__20203 instanceof cljs.core.Keyword))?G__20203.fqn:null);
switch (G__20203__$1) {
case "nw":
case "ne":
return (y + dy);

break;
case "sw":
case "se":
return ((y + h) + dy);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20203__$1)].join('')));

}
})();
var nw_SINGLEQUOTE_ = Math.max((20),Math.abs((cx - ax)),(Math.abs((cy - ay)) / aspect));
var nh_SINGLEQUOTE_ = (nw_SINGLEQUOTE_ * aspect);
var G__20207 = corner;
var G__20207__$1 = (((G__20207 instanceof cljs.core.Keyword))?G__20207.fqn:null);
switch (G__20207__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20207__$1)].join('')));

}
});
/**
 * Resize one dimension by dragging an edge midpoint handle (:n :s :e :w),
 * keeping the opposite edge fixed.
 */
placesurfer.map_ui.core.edge_resized_box = (function placesurfer$map_ui$core$edge_resized_box(p__20210,edge,dx,dy){
var map__20211 = p__20210;
var map__20211__$1 = cljs.core.__destructure_map(map__20211);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20211__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20211__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20211__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20211__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var G__20212 = edge;
var G__20212__$1 = (((G__20212 instanceof cljs.core.Keyword))?G__20212.fqn:null);
switch (G__20212__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20212__$1)].join('')));

}
});
placesurfer.map_ui.core.apply_ref_box_BANG_ = (function placesurfer$map_ui$core$apply_ref_box_BANG_(el,p__20215){
var map__20216 = p__20215;
var map__20216__$1 = cljs.core.__destructure_map(map__20216);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20216__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20216__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20216__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20216__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var style = el.style;
(style.transform = ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join(''));

(style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join(''));

return (style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''));
});
placesurfer.map_ui.core.position_ref_images_BANG_ = (function placesurfer$map_ui$core$position_ref_images_BANG_(m){
var seq__20217 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var chunk__20218 = null;
var count__20219 = (0);
var i__20220 = (0);
while(true){
if((i__20220 < count__20219)){
var map__20228 = chunk__20218.cljs$core$IIndexed$_nth$arity$2(null,i__20220);
var map__20228__$1 = cljs.core.__destructure_map(map__20228);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20228__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20228__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var temp__5823__auto___20829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id);
if(cljs.core.truth_(temp__5823__auto___20829)){
var el_20830 = temp__5823__auto___20829;
placesurfer.map_ui.core.apply_ref_box_BANG_(el_20830,placesurfer.map_ui.core.ref_bounds__GT_box(m,bounds));
} else {
}


var G__20831 = seq__20217;
var G__20832 = chunk__20218;
var G__20833 = count__20219;
var G__20834 = (i__20220 + (1));
seq__20217 = G__20831;
chunk__20218 = G__20832;
count__20219 = G__20833;
i__20220 = G__20834;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20217);
if(temp__5823__auto__){
var seq__20217__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20217__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20217__$1);
var G__20835 = cljs.core.chunk_rest(seq__20217__$1);
var G__20836 = c__5548__auto__;
var G__20837 = cljs.core.count(c__5548__auto__);
var G__20838 = (0);
seq__20217 = G__20835;
chunk__20218 = G__20836;
count__20219 = G__20837;
i__20220 = G__20838;
continue;
} else {
var map__20232 = cljs.core.first(seq__20217__$1);
var map__20232__$1 = cljs.core.__destructure_map(map__20232);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20232__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20232__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var temp__5823__auto___20839__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id);
if(cljs.core.truth_(temp__5823__auto___20839__$1)){
var el_20840 = temp__5823__auto___20839__$1;
placesurfer.map_ui.core.apply_ref_box_BANG_(el_20840,placesurfer.map_ui.core.ref_bounds__GT_box(m,bounds));
} else {
}


var G__20841 = cljs.core.next(seq__20217__$1);
var G__20842 = null;
var G__20843 = (0);
var G__20844 = (0);
seq__20217 = G__20841;
chunk__20218 = G__20842;
count__20219 = G__20843;
i__20220 = G__20844;
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
var img = cljs.core.some((function (p1__20234_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20234_SHARP_),id)){
return p1__20234_SHARP_;
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
var box = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),mode))?placesurfer.map_ui.core.moved_box(box0,dx,dy):(cljs.core.truth_((function (){var fexpr__20238 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"s","s",1705939918),null], null), null);
return (fexpr__20238.cljs$core$IFn$_invoke$arity$1 ? fexpr__20238.cljs$core$IFn$_invoke$arity$1(mode) : fexpr__20238.call(null,mode));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20235_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20235_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20235_SHARP_,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds);
} else {
return p1__20235_SHARP_;
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
var img = cljs.core.some((function (p1__20239_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20239_SHARP_),id)){
return p1__20239_SHARP_;
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

var temp__5823__auto___20848__$1 = wrap.querySelector("img");
if(cljs.core.truth_(temp__5823__auto___20848__$1)){
var im_20849 = temp__5823__auto___20848__$1;
(im_20849.style.opacity = cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity));
} else {
}

var seq__20240 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(wrap.querySelectorAll(".placesurfer-ref-handle")));
var chunk__20241 = null;
var count__20242 = (0);
var i__20243 = (0);
while(true){
if((i__20243 < count__20242)){
var h = chunk__20241.cljs$core$IIndexed$_nth$arity$2(null,i__20243);
(h.style.display = ((adjust_QMARK_)?"block":"none"));


var G__20852 = seq__20240;
var G__20853 = chunk__20241;
var G__20854 = count__20242;
var G__20855 = (i__20243 + (1));
seq__20240 = G__20852;
chunk__20241 = G__20853;
count__20242 = G__20854;
i__20243 = G__20855;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__20240);
if(temp__5823__auto____$1){
var seq__20240__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20240__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20240__$1);
var G__20857 = cljs.core.chunk_rest(seq__20240__$1);
var G__20858 = c__5548__auto__;
var G__20859 = cljs.core.count(c__5548__auto__);
var G__20860 = (0);
seq__20240 = G__20857;
chunk__20241 = G__20858;
count__20242 = G__20859;
i__20243 = G__20860;
continue;
} else {
var h = cljs.core.first(seq__20240__$1);
(h.style.display = ((adjust_QMARK_)?"block":"none"));


var G__20861 = cljs.core.next(seq__20240__$1);
var G__20862 = null;
var G__20863 = (0);
var G__20864 = (0);
seq__20240 = G__20861;
chunk__20241 = G__20862;
count__20242 = G__20863;
i__20243 = G__20864;
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
placesurfer.map_ui.core.make_ref_el_BANG_ = (function placesurfer$map_ui$core$make_ref_el_BANG_(m,p__20246){
var map__20247 = p__20246;
var map__20247__$1 = cljs.core.__destructure_map(map__20247);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20247__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var image_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20247__$1,new cljs.core.Keyword(null,"image-url","image-url",-1064784064));
var wrap = document.createElement("div");
var img = document.createElement("img");
(wrap.className = "placesurfer-ref-image");

var seq__20249_20865 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pointerEvents","none"], null)], null));
var chunk__20250_20866 = null;
var count__20251_20867 = (0);
var i__20252_20868 = (0);
while(true){
if((i__20252_20868 < count__20251_20867)){
var vec__20259_20869 = chunk__20250_20866.cljs$core$IIndexed$_nth$arity$2(null,i__20252_20868);
var k_20870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20259_20869,(0),null);
var v_20871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20259_20869,(1),null);
(wrap.style[k_20870] = v_20871);


var G__20872 = seq__20249_20865;
var G__20873 = chunk__20250_20866;
var G__20874 = count__20251_20867;
var G__20875 = (i__20252_20868 + (1));
seq__20249_20865 = G__20872;
chunk__20250_20866 = G__20873;
count__20251_20867 = G__20874;
i__20252_20868 = G__20875;
continue;
} else {
var temp__5823__auto___20876 = cljs.core.seq(seq__20249_20865);
if(temp__5823__auto___20876){
var seq__20249_20877__$1 = temp__5823__auto___20876;
if(cljs.core.chunked_seq_QMARK_(seq__20249_20877__$1)){
var c__5548__auto___20878 = cljs.core.chunk_first(seq__20249_20877__$1);
var G__20879 = cljs.core.chunk_rest(seq__20249_20877__$1);
var G__20880 = c__5548__auto___20878;
var G__20881 = cljs.core.count(c__5548__auto___20878);
var G__20882 = (0);
seq__20249_20865 = G__20879;
chunk__20250_20866 = G__20880;
count__20251_20867 = G__20881;
i__20252_20868 = G__20882;
continue;
} else {
var vec__20262_20883 = cljs.core.first(seq__20249_20877__$1);
var k_20884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20262_20883,(0),null);
var v_20885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20262_20883,(1),null);
(wrap.style[k_20884] = v_20885);


var G__20886 = cljs.core.next(seq__20249_20877__$1);
var G__20887 = null;
var G__20888 = (0);
var G__20889 = (0);
seq__20249_20865 = G__20886;
chunk__20250_20866 = G__20887;
count__20251_20867 = G__20888;
i__20252_20868 = G__20889;
continue;
}
} else {
}
}
break;
}

(img.src = image_url);

(img.draggable = false);

var seq__20265_20890 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["userSelect","none"], null)], null));
var chunk__20266_20891 = null;
var count__20267_20892 = (0);
var i__20268_20893 = (0);
while(true){
if((i__20268_20893 < count__20267_20892)){
var vec__20276_20894 = chunk__20266_20891.cljs$core$IIndexed$_nth$arity$2(null,i__20268_20893);
var k_20895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20276_20894,(0),null);
var v_20896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20276_20894,(1),null);
(img.style[k_20895] = v_20896);


var G__20897 = seq__20265_20890;
var G__20898 = chunk__20266_20891;
var G__20899 = count__20267_20892;
var G__20900 = (i__20268_20893 + (1));
seq__20265_20890 = G__20897;
chunk__20266_20891 = G__20898;
count__20267_20892 = G__20899;
i__20268_20893 = G__20900;
continue;
} else {
var temp__5823__auto___20901 = cljs.core.seq(seq__20265_20890);
if(temp__5823__auto___20901){
var seq__20265_20902__$1 = temp__5823__auto___20901;
if(cljs.core.chunked_seq_QMARK_(seq__20265_20902__$1)){
var c__5548__auto___20903 = cljs.core.chunk_first(seq__20265_20902__$1);
var G__20904 = cljs.core.chunk_rest(seq__20265_20902__$1);
var G__20905 = c__5548__auto___20903;
var G__20906 = cljs.core.count(c__5548__auto___20903);
var G__20907 = (0);
seq__20265_20890 = G__20904;
chunk__20266_20891 = G__20905;
count__20267_20892 = G__20906;
i__20268_20893 = G__20907;
continue;
} else {
var vec__20279_20908 = cljs.core.first(seq__20265_20902__$1);
var k_20909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20279_20908,(0),null);
var v_20910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20279_20908,(1),null);
(img.style[k_20909] = v_20910);


var G__20911 = cljs.core.next(seq__20265_20902__$1);
var G__20912 = null;
var G__20913 = (0);
var G__20914 = (0);
seq__20265_20890 = G__20911;
chunk__20266_20891 = G__20912;
count__20267_20892 = G__20913;
i__20268_20893 = G__20914;
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

var seq__20282_20915 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null));
var chunk__20283_20916 = null;
var count__20284_20917 = (0);
var i__20285_20918 = (0);
while(true){
if((i__20285_20918 < count__20284_20917)){
var handle_20919 = chunk__20283_20916.cljs$core$IIndexed$_nth$arity$2(null,i__20285_20918);
var h_20920 = document.createElement("div");
(h_20920.className = "placesurfer-ref-handle");

var seq__20322_20921 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background","#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","2px solid #2b6cb0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boxSizing","border-box"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","none"], null)], null),(function (){var G__20338 = handle_20919;
var G__20338__$1 = (((G__20338 instanceof cljs.core.Keyword))?G__20338.fqn:null);
switch (G__20338__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20338__$1)].join('')));

}
})()));
var chunk__20323_20922 = null;
var count__20324_20923 = (0);
var i__20325_20924 = (0);
while(true){
if((i__20325_20924 < count__20324_20923)){
var vec__20340_20931 = chunk__20323_20922.cljs$core$IIndexed$_nth$arity$2(null,i__20325_20924);
var k_20932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20340_20931,(0),null);
var v_20933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20340_20931,(1),null);
(h_20920.style[k_20932] = v_20933);


var G__20934 = seq__20322_20921;
var G__20935 = chunk__20323_20922;
var G__20936 = count__20324_20923;
var G__20937 = (i__20325_20924 + (1));
seq__20322_20921 = G__20934;
chunk__20323_20922 = G__20935;
count__20324_20923 = G__20936;
i__20325_20924 = G__20937;
continue;
} else {
var temp__5823__auto___20938 = cljs.core.seq(seq__20322_20921);
if(temp__5823__auto___20938){
var seq__20322_20939__$1 = temp__5823__auto___20938;
if(cljs.core.chunked_seq_QMARK_(seq__20322_20939__$1)){
var c__5548__auto___20940 = cljs.core.chunk_first(seq__20322_20939__$1);
var G__20941 = cljs.core.chunk_rest(seq__20322_20939__$1);
var G__20942 = c__5548__auto___20940;
var G__20943 = cljs.core.count(c__5548__auto___20940);
var G__20944 = (0);
seq__20322_20921 = G__20941;
chunk__20323_20922 = G__20942;
count__20324_20923 = G__20943;
i__20325_20924 = G__20944;
continue;
} else {
var vec__20343_20945 = cljs.core.first(seq__20322_20939__$1);
var k_20946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20343_20945,(0),null);
var v_20947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20343_20945,(1),null);
(h_20920.style[k_20946] = v_20947);


var G__20948 = cljs.core.next(seq__20322_20939__$1);
var G__20949 = null;
var G__20950 = (0);
var G__20951 = (0);
seq__20322_20921 = G__20948;
chunk__20323_20922 = G__20949;
count__20324_20923 = G__20950;
i__20325_20924 = G__20951;
continue;
}
} else {
}
}
break;
}

h_20920.addEventListener("mousedown",((function (seq__20282_20915,chunk__20283_20916,count__20284_20917,i__20285_20918,h_20920,handle_20919,wrap,img,map__20247,map__20247__$1,id,image_url){
return (function (e){
return placesurfer.map_ui.core.start_ref_drag_BANG_(m,id,e,handle_20919);
});})(seq__20282_20915,chunk__20283_20916,count__20284_20917,i__20285_20918,h_20920,handle_20919,wrap,img,map__20247,map__20247__$1,id,image_url))
);

wrap.appendChild(h_20920);


var G__20956 = seq__20282_20915;
var G__20957 = chunk__20283_20916;
var G__20958 = count__20284_20917;
var G__20959 = (i__20285_20918 + (1));
seq__20282_20915 = G__20956;
chunk__20283_20916 = G__20957;
count__20284_20917 = G__20958;
i__20285_20918 = G__20959;
continue;
} else {
var temp__5823__auto___20960 = cljs.core.seq(seq__20282_20915);
if(temp__5823__auto___20960){
var seq__20282_20961__$1 = temp__5823__auto___20960;
if(cljs.core.chunked_seq_QMARK_(seq__20282_20961__$1)){
var c__5548__auto___20962 = cljs.core.chunk_first(seq__20282_20961__$1);
var G__20963 = cljs.core.chunk_rest(seq__20282_20961__$1);
var G__20964 = c__5548__auto___20962;
var G__20965 = cljs.core.count(c__5548__auto___20962);
var G__20966 = (0);
seq__20282_20915 = G__20963;
chunk__20283_20916 = G__20964;
count__20284_20917 = G__20965;
i__20285_20918 = G__20966;
continue;
} else {
var handle_20967 = cljs.core.first(seq__20282_20961__$1);
var h_20968 = document.createElement("div");
(h_20968.className = "placesurfer-ref-handle");

var seq__20346_20969 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background","#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","2px solid #2b6cb0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boxSizing","border-box"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","none"], null)], null),(function (){var G__20360 = handle_20967;
var G__20360__$1 = (((G__20360 instanceof cljs.core.Keyword))?G__20360.fqn:null);
switch (G__20360__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20360__$1)].join('')));

}
})()));
var chunk__20347_20970 = null;
var count__20348_20971 = (0);
var i__20349_20972 = (0);
while(true){
if((i__20349_20972 < count__20348_20971)){
var vec__20361_20974 = chunk__20347_20970.cljs$core$IIndexed$_nth$arity$2(null,i__20349_20972);
var k_20975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20361_20974,(0),null);
var v_20976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20361_20974,(1),null);
(h_20968.style[k_20975] = v_20976);


var G__20977 = seq__20346_20969;
var G__20978 = chunk__20347_20970;
var G__20979 = count__20348_20971;
var G__20980 = (i__20349_20972 + (1));
seq__20346_20969 = G__20977;
chunk__20347_20970 = G__20978;
count__20348_20971 = G__20979;
i__20349_20972 = G__20980;
continue;
} else {
var temp__5823__auto___20981__$1 = cljs.core.seq(seq__20346_20969);
if(temp__5823__auto___20981__$1){
var seq__20346_20982__$1 = temp__5823__auto___20981__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20346_20982__$1)){
var c__5548__auto___20983 = cljs.core.chunk_first(seq__20346_20982__$1);
var G__20984 = cljs.core.chunk_rest(seq__20346_20982__$1);
var G__20985 = c__5548__auto___20983;
var G__20986 = cljs.core.count(c__5548__auto___20983);
var G__20987 = (0);
seq__20346_20969 = G__20984;
chunk__20347_20970 = G__20985;
count__20348_20971 = G__20986;
i__20349_20972 = G__20987;
continue;
} else {
var vec__20365_20988 = cljs.core.first(seq__20346_20982__$1);
var k_20989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20365_20988,(0),null);
var v_20990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20365_20988,(1),null);
(h_20968.style[k_20989] = v_20990);


var G__20991 = cljs.core.next(seq__20346_20982__$1);
var G__20992 = null;
var G__20993 = (0);
var G__20994 = (0);
seq__20346_20969 = G__20991;
chunk__20347_20970 = G__20992;
count__20348_20971 = G__20993;
i__20349_20972 = G__20994;
continue;
}
} else {
}
}
break;
}

h_20968.addEventListener("mousedown",((function (seq__20282_20915,chunk__20283_20916,count__20284_20917,i__20285_20918,h_20968,handle_20967,seq__20282_20961__$1,temp__5823__auto___20960,wrap,img,map__20247,map__20247__$1,id,image_url){
return (function (e){
return placesurfer.map_ui.core.start_ref_drag_BANG_(m,id,e,handle_20967);
});})(seq__20282_20915,chunk__20283_20916,count__20284_20917,i__20285_20918,h_20968,handle_20967,seq__20282_20961__$1,temp__5823__auto___20960,wrap,img,map__20247,map__20247__$1,id,image_url))
);

wrap.appendChild(h_20968);


var G__20995 = cljs.core.next(seq__20282_20961__$1);
var G__20996 = null;
var G__20997 = (0);
var G__20998 = (0);
seq__20282_20915 = G__20995;
chunk__20283_20916 = G__20996;
count__20284_20917 = G__20997;
i__20285_20918 = G__20998;
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
var seq__20369_21000 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els));
var chunk__20370_21001 = null;
var count__20371_21002 = (0);
var i__20372_21003 = (0);
while(true){
if((i__20372_21003 < count__20371_21002)){
var vec__20379_21004 = chunk__20370_21001.cljs$core$IIndexed$_nth$arity$2(null,i__20372_21003);
var id_21005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20379_21004,(0),null);
var el_21006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20379_21004,(1),null);
if(cljs.core.contains_QMARK_(ids,id_21005)){
} else {
el_21006.remove();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_ref_els,cljs.core.dissoc,id_21005);
}


var G__21007 = seq__20369_21000;
var G__21008 = chunk__20370_21001;
var G__21009 = count__20371_21002;
var G__21010 = (i__20372_21003 + (1));
seq__20369_21000 = G__21007;
chunk__20370_21001 = G__21008;
count__20371_21002 = G__21009;
i__20372_21003 = G__21010;
continue;
} else {
var temp__5823__auto___21011 = cljs.core.seq(seq__20369_21000);
if(temp__5823__auto___21011){
var seq__20369_21012__$1 = temp__5823__auto___21011;
if(cljs.core.chunked_seq_QMARK_(seq__20369_21012__$1)){
var c__5548__auto___21013 = cljs.core.chunk_first(seq__20369_21012__$1);
var G__21014 = cljs.core.chunk_rest(seq__20369_21012__$1);
var G__21015 = c__5548__auto___21013;
var G__21016 = cljs.core.count(c__5548__auto___21013);
var G__21017 = (0);
seq__20369_21000 = G__21014;
chunk__20370_21001 = G__21015;
count__20371_21002 = G__21016;
i__20372_21003 = G__21017;
continue;
} else {
var vec__20385_21018 = cljs.core.first(seq__20369_21012__$1);
var id_21019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20385_21018,(0),null);
var el_21020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20385_21018,(1),null);
if(cljs.core.contains_QMARK_(ids,id_21019)){
} else {
el_21020.remove();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_ref_els,cljs.core.dissoc,id_21019);
}


var G__21021 = cljs.core.next(seq__20369_21012__$1);
var G__21022 = null;
var G__21023 = (0);
var G__21024 = (0);
seq__20369_21000 = G__21021;
chunk__20370_21001 = G__21022;
count__20371_21002 = G__21023;
i__20372_21003 = G__21024;
continue;
}
} else {
}
}
break;
}

var seq__20388_21025 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var chunk__20389_21026 = null;
var count__20390_21027 = (0);
var i__20391_21028 = (0);
while(true){
if((i__20391_21028 < count__20390_21027)){
var map__20397_21029 = chunk__20389_21026.cljs$core$IIndexed$_nth$arity$2(null,i__20391_21028);
var map__20397_21030__$1 = cljs.core.__destructure_map(map__20397_21029);
var img_21031 = map__20397_21030__$1;
var id_21032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20397_21030__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id_21032))){
} else {
var el_21033 = placesurfer.map_ui.core.make_ref_el_BANG_(m,img_21031);
cont.appendChild(el_21033);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.map_ui.core._BANG_ref_els,cljs.core.assoc,id_21032,el_21033);
}

placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id_21032);


var G__21034 = seq__20388_21025;
var G__21035 = chunk__20389_21026;
var G__21036 = count__20390_21027;
var G__21037 = (i__20391_21028 + (1));
seq__20388_21025 = G__21034;
chunk__20389_21026 = G__21035;
count__20390_21027 = G__21036;
i__20391_21028 = G__21037;
continue;
} else {
var temp__5823__auto___21038 = cljs.core.seq(seq__20388_21025);
if(temp__5823__auto___21038){
var seq__20388_21039__$1 = temp__5823__auto___21038;
if(cljs.core.chunked_seq_QMARK_(seq__20388_21039__$1)){
var c__5548__auto___21040 = cljs.core.chunk_first(seq__20388_21039__$1);
var G__21041 = cljs.core.chunk_rest(seq__20388_21039__$1);
var G__21042 = c__5548__auto___21040;
var G__21043 = cljs.core.count(c__5548__auto___21040);
var G__21044 = (0);
seq__20388_21025 = G__21041;
chunk__20389_21026 = G__21042;
count__20390_21027 = G__21043;
i__20391_21028 = G__21044;
continue;
} else {
var map__20398_21045 = cljs.core.first(seq__20388_21039__$1);
var map__20398_21046__$1 = cljs.core.__destructure_map(map__20398_21045);
var img_21047 = map__20398_21046__$1;
var id_21048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20398_21046__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id_21048))){
} else {
var el_21049 = placesurfer.map_ui.core.make_ref_el_BANG_(m,img_21047);
cont.appendChild(el_21049);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.map_ui.core._BANG_ref_els,cljs.core.assoc,id_21048,el_21049);
}

placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id_21048);


var G__21050 = cljs.core.next(seq__20388_21039__$1);
var G__21051 = null;
var G__21052 = (0);
var G__21053 = (0);
seq__20388_21025 = G__21050;
chunk__20389_21026 = G__21051;
count__20390_21027 = G__21052;
i__20391_21028 = G__21053;
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
return cljs.core.not_any_QMARK_((function (p1__20399_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20399_SHARP_),cljs.core.deref(placesurfer.map_ui.core._BANG_ref_adjust_id));
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

var seq__20400 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var chunk__20401 = null;
var count__20402 = (0);
var i__20403 = (0);
while(true){
if((i__20403 < count__20402)){
var map__20410 = chunk__20401.cljs$core$IIndexed$_nth$arity$2(null,i__20403);
var map__20410__$1 = cljs.core.__destructure_map(map__20410);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20410__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id__$1);


var G__21054 = seq__20400;
var G__21055 = chunk__20401;
var G__21056 = count__20402;
var G__21057 = (i__20403 + (1));
seq__20400 = G__21054;
chunk__20401 = G__21055;
count__20402 = G__21056;
i__20403 = G__21057;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20400);
if(temp__5823__auto__){
var seq__20400__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20400__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20400__$1);
var G__21059 = cljs.core.chunk_rest(seq__20400__$1);
var G__21060 = c__5548__auto__;
var G__21061 = cljs.core.count(c__5548__auto__);
var G__21062 = (0);
seq__20400 = G__21059;
chunk__20401 = G__21060;
count__20402 = G__21061;
i__20403 = G__21062;
continue;
} else {
var map__20415 = cljs.core.first(seq__20400__$1);
var map__20415__$1 = cljs.core.__destructure_map(map__20415);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20415__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id__$1);


var G__21064 = cljs.core.next(seq__20400__$1);
var G__21065 = null;
var G__21066 = (0);
var G__21067 = (0);
seq__20400 = G__21064;
chunk__20401 = G__21065;
count__20402 = G__21066;
i__20403 = G__21067;
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20416_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20416_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20416_SHARP_,new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity);
} else {
return p1__20416_SHARP_;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20436){
var vec__20437 = p__20436;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20437,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20437,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
}),ring);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20442){
var vec__20443 = p__20442;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20443,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20443,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wip","wip",-103467282),true], null)], null);
}),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),(function (){var G__20446 = cljs.core.vec(verts);
var G__20446__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__20446,done)
;
if(cljs.core.truth_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20446__$1,cur);
} else {
return G__20446__$1;
}
})()], null);
});
placesurfer.map_ui.core.refresh_draw_BANG_ = (function placesurfer$map_ui$core$refresh_draw_BANG_(m){
var temp__5823__auto__ = (function (){try{return m.getSource(placesurfer.map_ui.core.draw_src);
}catch (e20448){var _ = e20448;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto__)){
var src = temp__5823__auto__;
return src.setData(cljs.core.clj__GT_js(placesurfer.map_ui.core.draw_fc()));
} else {
return null;
}
});
placesurfer.map_ui.core.color__GT_rgb = (function placesurfer$map_ui$core$color__GT_rgb(p__20453){
var map__20454 = p__20453;
var map__20454__$1 = cljs.core.__destructure_map(map__20454);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20454__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20454__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20454__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20454__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var l = ((function (){var or__5025__auto__ = lightness;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() / (100));
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((r + (((255) - r) * l)))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((g + (((255) - g) * l)))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((b + (((255) - b) * l)))),")"].join('');
});
placesurfer.map_ui.core.color__GT_alpha = (function placesurfer$map_ui$core$color__GT_alpha(p__20457){
var map__20459 = p__20457;
var map__20459__$1 = cljs.core.__destructure_map(map__20459);
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20459__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
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
}catch (e20464){var _ = e20464;
return null;
}})())){
m.setPaintProperty(placesurfer.map_ui.core.draw_fill,"fill-color",rgb);

m.setPaintProperty(placesurfer.map_ui.core.draw_fill,"fill-opacity",alpha);
} else {
}

if(cljs.core.truth_((function (){try{return m.getLayer(placesurfer.map_ui.core.draw_line);
}catch (e20465){var _ = e20465;
return null;
}})())){
return m.setPaintProperty(placesurfer.map_ui.core.draw_line,"line-color",rgb);
} else {
return null;
}
}catch (e20462){var _ = e20462;
return null;
}} else {
return null;
}
});
placesurfer.map_ui.core.set_draw_layer_visibility_BANG_ = (function placesurfer$map_ui$core$set_draw_layer_visibility_BANG_(m,layer_id,visible_QMARK_){
try{if(cljs.core.truth_((function (){try{return m.getLayer(layer_id);
}catch (e20467){var _ = e20467;
return null;
}})())){
return m.setLayoutProperty(layer_id,"visibility",(cljs.core.truth_(visible_QMARK_)?"visible":"none"));
} else {
return null;
}
}catch (e20466){var _ = e20466;
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
}catch (e20469){var _ = e20469;
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
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (vidx,p__20470){
var vec__20471 = p__20470;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"polygon-idx","polygon-idx",1216671533),pidx,new cljs.core.Keyword(null,"vertex-idx","vertex-idx",676111409),vidx,new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"lat","lat",-580793929),lat], null);
}),ring);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)], 0)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (vidx,p__20474){
var vec__20475 = p__20474;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(1),null);
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
var G__20482 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v);
var G__20482__$1 = (((G__20482 instanceof cljs.core.Keyword))?G__20482.fqn:null);
switch (G__20482__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20482__$1)].join('')));

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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_ring,(function (p1__20514_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__20514_SHARP_));
}));
} else {
if(cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons))){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.last(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_polygons,(function (p1__20515_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__20515_SHARP_));
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
var seq__20538 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_click_fn,"click"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_mm_fn,"mousemove"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_md_fn,"mousedown"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_mu_fn,"mouseup"], null)], null));
var chunk__20539 = null;
var count__20540 = (0);
var i__20541 = (0);
while(true){
if((i__20541 < count__20540)){
var vec__20553 = chunk__20539.cljs$core$IIndexed$_nth$arity$2(null,i__20541);
var _BANG_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20553,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20553,(1),null);
var temp__5823__auto___21082 = cljs.core.deref(_BANG_a);
if(cljs.core.truth_(temp__5823__auto___21082)){
var f_21083 = temp__5823__auto___21082;
try{m.off(ev,f_21083);
}catch (e20556){var __21084 = e20556;
}
cljs.core.reset_BANG_(_BANG_a,null);
} else {
}


var G__21085 = seq__20538;
var G__21086 = chunk__20539;
var G__21087 = count__20540;
var G__21088 = (i__20541 + (1));
seq__20538 = G__21085;
chunk__20539 = G__21086;
count__20540 = G__21087;
i__20541 = G__21088;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20538);
if(temp__5823__auto__){
var seq__20538__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20538__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20538__$1);
var G__21090 = cljs.core.chunk_rest(seq__20538__$1);
var G__21091 = c__5548__auto__;
var G__21092 = cljs.core.count(c__5548__auto__);
var G__21093 = (0);
seq__20538 = G__21090;
chunk__20539 = G__21091;
count__20540 = G__21092;
i__20541 = G__21093;
continue;
} else {
var vec__20557 = cljs.core.first(seq__20538__$1);
var _BANG_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20557,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20557,(1),null);
var temp__5823__auto___21095__$1 = cljs.core.deref(_BANG_a);
if(cljs.core.truth_(temp__5823__auto___21095__$1)){
var f_21096 = temp__5823__auto___21095__$1;
try{m.off(ev,f_21096);
}catch (e20560){var __21097 = e20560;
}
cljs.core.reset_BANG_(_BANG_a,null);
} else {
}


var G__21098 = cljs.core.next(seq__20538__$1);
var G__21099 = null;
var G__21100 = (0);
var G__21101 = (0);
seq__20538 = G__21098;
chunk__20539 = G__21099;
count__20540 = G__21100;
i__20541 = G__21101;
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
var ll_21102 = e.lngLat;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ll_21102.lng,ll_21102.lat], null));

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
var ll_21104 = e.lngLat;
placesurfer.map_ui.core.move_vertex_BANG_(ds,ll_21104.lng,ll_21104.lat);

return placesurfer.map_ui.core.refresh_draw_BANG_(m);
} else {
var v = placesurfer.map_ui.core.vertex_near_screen(m,x,y,(8));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_hover_v,v);

var G__20564 = m;
var G__20565 = (cljs.core.truth_(v)?"pointer":"default");
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(G__20564,G__20565) : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,G__20564,G__20565));
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
}catch (e20566){var __21106 = e20566;
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
}catch (e20569){var __21111 = e20569;
}
var G__20570 = m;
var G__20571 = (cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_hover_v))?"pointer":"default");
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(G__20570,G__20571) : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,G__20570,G__20571));
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

var seq__20572 = cljs.core.seq(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["padding","4px 8px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fontSize","11px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fontWeight","600"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["color","white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginBottom","2px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","3px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textAlign","left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background",bg], null)], null));
var chunk__20573 = null;
var count__20574 = (0);
var i__20575 = (0);
while(true){
if((i__20575 < count__20574)){
var vec__20582 = chunk__20573.cljs$core$IIndexed$_nth$arity$2(null,i__20575);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20582,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20582,(1),null);
(el.style[k] = v);


var G__21120 = seq__20572;
var G__21121 = chunk__20573;
var G__21122 = count__20574;
var G__21123 = (i__20575 + (1));
seq__20572 = G__21120;
chunk__20573 = G__21121;
count__20574 = G__21122;
i__20575 = G__21123;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20572);
if(temp__5823__auto__){
var seq__20572__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20572__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20572__$1);
var G__21124 = cljs.core.chunk_rest(seq__20572__$1);
var G__21125 = c__5548__auto__;
var G__21126 = cljs.core.count(c__5548__auto__);
var G__21127 = (0);
seq__20572 = G__21124;
chunk__20573 = G__21125;
count__20574 = G__21126;
i__20575 = G__21127;
continue;
} else {
var vec__20585 = cljs.core.first(seq__20572__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20585,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20585,(1),null);
(el.style[k] = v);


var G__21128 = cljs.core.next(seq__20572__$1);
var G__21129 = null;
var G__21130 = (0);
var G__21131 = (0);
seq__20572 = G__21128;
chunk__20573 = G__21129;
count__20574 = G__21130;
i__20575 = G__21131;
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
var G__20588 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20588) : f.call(null,G__20588));
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
}catch (e20596){var __21140 = e20596;
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

var seq__20597_21141 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [toggle_btn,close_btn,undo_btn,clear_btn,paste_btn,save_btn], null));
var chunk__20598_21142 = null;
var count__20599_21143 = (0);
var i__20600_21144 = (0);
while(true){
if((i__20600_21144 < count__20599_21143)){
var b_21145 = chunk__20598_21142.cljs$core$IIndexed$_nth$arity$2(null,i__20600_21144);
el.appendChild(b_21145);


var G__21146 = seq__20597_21141;
var G__21147 = chunk__20598_21142;
var G__21148 = count__20599_21143;
var G__21149 = (i__20600_21144 + (1));
seq__20597_21141 = G__21146;
chunk__20598_21142 = G__21147;
count__20599_21143 = G__21148;
i__20600_21144 = G__21149;
continue;
} else {
var temp__5823__auto___21150 = cljs.core.seq(seq__20597_21141);
if(temp__5823__auto___21150){
var seq__20597_21151__$1 = temp__5823__auto___21150;
if(cljs.core.chunked_seq_QMARK_(seq__20597_21151__$1)){
var c__5548__auto___21153 = cljs.core.chunk_first(seq__20597_21151__$1);
var G__21155 = cljs.core.chunk_rest(seq__20597_21151__$1);
var G__21156 = c__5548__auto___21153;
var G__21157 = cljs.core.count(c__5548__auto___21153);
var G__21158 = (0);
seq__20597_21141 = G__21155;
chunk__20598_21142 = G__21156;
count__20599_21143 = G__21157;
i__20600_21144 = G__21158;
continue;
} else {
var b_21159 = cljs.core.first(seq__20597_21151__$1);
el.appendChild(b_21159);


var G__21160 = cljs.core.next(seq__20597_21151__$1);
var G__21161 = null;
var G__21162 = (0);
var G__21163 = (0);
seq__20597_21141 = G__21160;
chunk__20598_21142 = G__21161;
count__20599_21143 = G__21162;
i__20600_21144 = G__21163;
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
}catch (e20602){var __21165 = e20602;
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
var features_21168 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(geojson.features,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var rings_21169 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (f){
var coords = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),(0)], null));
if(cljs.core.seq(coords)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__20616){
var vec__20617 = p__20616;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20617,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20617,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null);
}),cljs.core.butlast(coords));
} else {
return null;
}
}),features_21168);
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_polygons,cljs.core.vec(rings_21169));
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
}catch (e20631){var _ = e20631;
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
}catch (e20635){var _ = e20635;
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
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__20644){
var map__20645 = p__20644;
var map__20645__$1 = cljs.core.__destructure_map(map__20645);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20645__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20645__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var area_radii = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20645__$1,new cljs.core.Keyword(null,"area-radii","area-radii",1413411485));
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
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__20652){
var map__20653 = p__20652;
var map__20653__$1 = cljs.core.__destructure_map(map__20653);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20653__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20653__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var area_radii = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20653__$1,new cljs.core.Keyword(null,"area-radii","area-radii",1413411485));
if(((cljs.core.seq(area_radii)) && (((typeof longitude === 'number') && (typeof latitude === 'number'))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
var vec__20658 = placesurfer.map_ui.core.north_point(longitude,latitude,r);
var label_lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20658,(0),null);
var label_lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20658,(1),null);
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
}catch (e20661){var _ = e20661;
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
}catch (e20662){var _ = e20662;
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

var temp__5823__auto___21181 = cljs.core.deref(placesurfer.map_ui.core._BANG_area_debounce_timer);
if(cljs.core.truth_(temp__5823__auto___21181)){
var timer_21182 = temp__5823__auto___21181;
clearTimeout(timer_21182);
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
var seq__20663 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__20664 = null;
var count__20665 = (0);
var i__20666 = (0);
while(true){
if((i__20666 < count__20665)){
var marker = chunk__20664.cljs$core$IIndexed$_nth$arity$2(null,i__20666);
var temp__5823__auto___21183 = (function (){try{return marker.getElement();
}catch (e20669){var _ = e20669;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___21183)){
var el_21184 = temp__5823__auto___21183;
(el_21184.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__21185 = seq__20663;
var G__21186 = chunk__20664;
var G__21187 = count__20665;
var G__21188 = (i__20666 + (1));
seq__20663 = G__21185;
chunk__20664 = G__21186;
count__20665 = G__21187;
i__20666 = G__21188;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20663);
if(temp__5823__auto__){
var seq__20663__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20663__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20663__$1);
var G__21190 = cljs.core.chunk_rest(seq__20663__$1);
var G__21191 = c__5548__auto__;
var G__21192 = cljs.core.count(c__5548__auto__);
var G__21193 = (0);
seq__20663 = G__21190;
chunk__20664 = G__21191;
count__20665 = G__21192;
i__20666 = G__21193;
continue;
} else {
var marker = cljs.core.first(seq__20663__$1);
var temp__5823__auto___21195__$1 = (function (){try{return marker.getElement();
}catch (e20670){var _ = e20670;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___21195__$1)){
var el_21200 = temp__5823__auto___21195__$1;
(el_21200.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__21201 = cljs.core.next(seq__20663__$1);
var G__21202 = null;
var G__21203 = (0);
var G__21204 = (0);
seq__20663 = G__21201;
chunk__20664 = G__21202;
count__20665 = G__21203;
i__20666 = G__21204;
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
}catch (e20671){var _ = e20671;
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
}catch (e20672){var _ = e20672;
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
}catch (e20673){var _ = e20673;
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
var G__20674 = (marker["placesurferPosition"]);
if((G__20674 == null)){
return null;
} else {
return placesurfer.map_ui.core.position_map(G__20674);
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
placesurfer.map_ui.core.position_match_QMARK_ = (function placesurfer$map_ui$core$position_match_QMARK_(pos,p__20675){
var map__20676 = p__20675;
var map__20676__$1 = cljs.core.__destructure_map(map__20676);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20676__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20676__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20676__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
}catch (e20677){var _ = e20677;
return null;
}}),cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
});
placesurfer.map_ui.core.refresh_row_hover_emphasis_BANG_ = (function placesurfer$map_ui$core$refresh_row_hover_emphasis_BANG_(){
var seq__20678_21205 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__20679_21206 = null;
var count__20680_21207 = (0);
var i__20681_21208 = (0);
while(true){
if((i__20681_21208 < count__20680_21207)){
var marker_21209 = chunk__20679_21206.cljs$core$IIndexed$_nth$arity$2(null,i__20681_21208);
var temp__5823__auto___21210 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_21209);
if(cljs.core.truth_(temp__5823__auto___21210)){
var visual_21211 = temp__5823__auto___21210;
visual_21211.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}

var temp__5823__auto___21212 = (function (){try{return marker_21209.getElement();
}catch (e20684){var _ = e20684;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___21212)){
var el_21213 = temp__5823__auto___21212;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core.marker_z_index_row_hover,el_21213.style.zIndex)){
(el_21213.style.zIndex = (((marker_21209 === new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup))))?placesurfer.map_ui.core.marker_z_index_active:placesurfer.map_ui.core.marker_z_index_default));
} else {
}
} else {
}


var G__21214 = seq__20678_21205;
var G__21215 = chunk__20679_21206;
var G__21216 = count__20680_21207;
var G__21217 = (i__20681_21208 + (1));
seq__20678_21205 = G__21214;
chunk__20679_21206 = G__21215;
count__20680_21207 = G__21216;
i__20681_21208 = G__21217;
continue;
} else {
var temp__5823__auto___21218 = cljs.core.seq(seq__20678_21205);
if(temp__5823__auto___21218){
var seq__20678_21219__$1 = temp__5823__auto___21218;
if(cljs.core.chunked_seq_QMARK_(seq__20678_21219__$1)){
var c__5548__auto___21220 = cljs.core.chunk_first(seq__20678_21219__$1);
var G__21221 = cljs.core.chunk_rest(seq__20678_21219__$1);
var G__21222 = c__5548__auto___21220;
var G__21223 = cljs.core.count(c__5548__auto___21220);
var G__21224 = (0);
seq__20678_21205 = G__21221;
chunk__20679_21206 = G__21222;
count__20680_21207 = G__21223;
i__20681_21208 = G__21224;
continue;
} else {
var marker_21225 = cljs.core.first(seq__20678_21219__$1);
var temp__5823__auto___21226__$1 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_21225);
if(cljs.core.truth_(temp__5823__auto___21226__$1)){
var visual_21227 = temp__5823__auto___21226__$1;
visual_21227.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}

var temp__5823__auto___21228__$1 = (function (){try{return marker_21225.getElement();
}catch (e20685){var _ = e20685;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___21228__$1)){
var el_21229 = temp__5823__auto___21228__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core.marker_z_index_row_hover,el_21229.style.zIndex)){
(el_21229.style.zIndex = (((marker_21225 === new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup))))?placesurfer.map_ui.core.marker_z_index_active:placesurfer.map_ui.core.marker_z_index_default));
} else {
}
} else {
}


var G__21230 = cljs.core.next(seq__20678_21219__$1);
var G__21231 = null;
var G__21232 = (0);
var G__21233 = (0);
seq__20678_21205 = G__21230;
chunk__20679_21206 = G__21231;
count__20680_21207 = G__21232;
i__20681_21208 = G__21233;
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
var temp__5823__auto___21234__$2 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker);
if(cljs.core.truth_(temp__5823__auto___21234__$2)){
var visual_21235 = temp__5823__auto___21234__$2;
visual_21235.classList.add(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}

var temp__5823__auto____$2 = (function (){try{return marker.getElement();
}catch (e20686){var _ = e20686;
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
var seq__20687_21237 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__20688_21238 = null;
var count__20689_21239 = (0);
var i__20690_21240 = (0);
while(true){
if((i__20690_21240 < count__20689_21239)){
var marker_21241 = chunk__20688_21238.cljs$core$IIndexed$_nth$arity$2(null,i__20690_21240);
var temp__5823__auto___21242 = (function (){try{return marker_21241.getPopup();
}catch (e20695){var _ = e20695;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___21242)){
var popup_21243 = temp__5823__auto___21242;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_21243);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_21243,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_21243)){
try{marker_21241.togglePopup();
}catch (e20696){var __21245 = e20696;
}} else {
}
} else {
}


var G__21246 = seq__20687_21237;
var G__21247 = chunk__20688_21238;
var G__21248 = count__20689_21239;
var G__21249 = (i__20690_21240 + (1));
seq__20687_21237 = G__21246;
chunk__20688_21238 = G__21247;
count__20689_21239 = G__21248;
i__20690_21240 = G__21249;
continue;
} else {
var temp__5823__auto___21250 = cljs.core.seq(seq__20687_21237);
if(temp__5823__auto___21250){
var seq__20687_21251__$1 = temp__5823__auto___21250;
if(cljs.core.chunked_seq_QMARK_(seq__20687_21251__$1)){
var c__5548__auto___21252 = cljs.core.chunk_first(seq__20687_21251__$1);
var G__21253 = cljs.core.chunk_rest(seq__20687_21251__$1);
var G__21254 = c__5548__auto___21252;
var G__21255 = cljs.core.count(c__5548__auto___21252);
var G__21256 = (0);
seq__20687_21237 = G__21253;
chunk__20688_21238 = G__21254;
count__20689_21239 = G__21255;
i__20690_21240 = G__21256;
continue;
} else {
var marker_21257 = cljs.core.first(seq__20687_21251__$1);
var temp__5823__auto___21258__$1 = (function (){try{return marker_21257.getPopup();
}catch (e20697){var _ = e20697;
return null;
}})();
if(cljs.core.truth_(temp__5823__auto___21258__$1)){
var popup_21259 = temp__5823__auto___21258__$1;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_21259);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_21259,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_21259)){
try{marker_21257.togglePopup();
}catch (e20698){var __21260 = e20698;
}} else {
}
} else {
}


var G__21261 = cljs.core.next(seq__20687_21251__$1);
var G__21262 = null;
var G__21263 = (0);
var G__21264 = (0);
seq__20687_21237 = G__21261;
chunk__20688_21238 = G__21262;
count__20689_21239 = G__21263;
i__20690_21240 = G__21264;
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
}catch (e20699){var __21265 = e20699;
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
}catch (e20700){var __21266 = e20700;
}
placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup,mode);

placesurfer.map_ui.core.elevate_active_marker_BANG_(marker);

placesurfer.map_ui.core.elevate_popup_layer_BANG_(popup);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_hover_popup,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"popup","popup",635890211),popup,new cljs.core.Keyword(null,"root-el","root-el",1068654895),root_el], null));
});
/**
 * Open the click popup on the marker matching `match` (:id or :longitude/:latitude).
 */
placesurfer.map_ui.core.open_marker_popup_BANG_ = (function placesurfer$map_ui$core$open_marker_popup_BANG_(p__20701){
var map__20702 = p__20701;
var map__20702__$1 = cljs.core.__destructure_map(map__20702);
var match = map__20702__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20702__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20702__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20702__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
}catch (e20703){var _ = e20703;
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
var map__20704 = temp__5821__auto__;
var map__20704__$1 = cljs.core.__destructure_map(map__20704);
var root_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20704__$1,new cljs.core.Keyword(null,"root-el","root-el",1068654895));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20704__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20704__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
}catch (e20705){var _ = e20705;
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
var G__20706 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__20706) : handler.call(null,G__20706));
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
var G__20707 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__20707) : handler.call(null,G__20707));
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
var map__20708 = temp__5823__auto__;
var map__20708__$1 = cljs.core.__destructure_map(map__20708);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20708__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20708__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
var map__20709 = temp__5823__auto__;
var map__20709__$1 = cljs.core.__destructure_map(map__20709);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20709__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20709__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
var temp__5823__auto___21278 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5823__auto___21278)){
var visual_21279 = temp__5823__auto___21278;
visual_21279.classList.add(placesurfer.map_ui.core.marker_map_hover_class);
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
var temp__5823__auto___21280 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5823__auto___21280)){
var visual_21281 = temp__5823__auto___21280;
visual_21281.classList.remove(placesurfer.map_ui.core.marker_map_hover_class);
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
if(cljs.core.truth_((function (){var G__20710 = e.target;
if((G__20710 == null)){
return null;
} else {
return G__20710.closest(".map-popup-delete-btn");
}
})())){
e.stopPropagation();

e.preventDefault();

var temp__5823__auto___21286__$1 = cljs.core.deref(placesurfer.map_ui.core._BANG_on_marker_delete);
if(cljs.core.truth_(temp__5823__auto___21286__$1)){
var handler_21287 = temp__5823__auto___21286__$1;
var temp__5823__auto___21288__$2 = placesurfer.map_ui.core.marker_position_data(marker);
if(cljs.core.truth_(temp__5823__auto___21288__$2)){
var pos_21289 = temp__5823__auto___21288__$2;
(handler_21287.cljs$core$IFn$_invoke$arity$1 ? handler_21287.cljs$core$IFn$_invoke$arity$1(pos_21289) : handler_21287.call(null,pos_21289));
} else {
}
} else {
}

return placesurfer.map_ui.core.close_popup_BANG_(marker,popup);
} else {
if(cljs.core.truth_((function (){var G__20711 = e.target;
if((G__20711 == null)){
return null;
} else {
return G__20711.closest(".map-popup-edit-btn");
}
})())){
e.stopPropagation();

e.preventDefault();

var temp__5823__auto___21293__$1 = cljs.core.deref(placesurfer.map_ui.core._BANG_on_marker_edit);
if(cljs.core.truth_(temp__5823__auto___21293__$1)){
var handler_21294 = temp__5823__auto___21293__$1;
var temp__5823__auto___21295__$2 = placesurfer.map_ui.core.marker_position_data(marker);
if(cljs.core.truth_(temp__5823__auto___21295__$2)){
var pos_21296 = temp__5823__auto___21295__$2;
(handler_21294.cljs$core$IFn$_invoke$arity$1 ? handler_21294.cljs$core$IFn$_invoke$arity$1(pos_21296) : handler_21294.call(null,pos_21296));
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
var temp__5823__auto___21297 = cljs.core.deref(placesurfer.map_ui.core._BANG_on_marker_click);
if(cljs.core.truth_(temp__5823__auto___21297)){
var handler_21298 = temp__5823__auto___21297;
var temp__5823__auto___21299__$1 = placesurfer.map_ui.core.marker_click_position(marker,root_el,position);
if(cljs.core.truth_(temp__5823__auto___21299__$1)){
var pos_21300 = temp__5823__auto___21299__$1;
(handler_21298.cljs$core$IFn$_invoke$arity$1 ? handler_21298.cljs$core$IFn$_invoke$arity$1(pos_21300) : handler_21298.call(null,pos_21300));
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
var seq__20712 = cljs.core.seq(positions);
var chunk__20713 = null;
var count__20714 = (0);
var i__20715 = (0);
while(true){
if((i__20715 < count__20714)){
var position = chunk__20713.cljs$core$IIndexed$_nth$arity$2(null,i__20715);
var map__20722_21301 = position;
var map__20722_21302__$1 = cljs.core.__destructure_map(map__20722_21301);
var longitude_21303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722_21302__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_21304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722_21302__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_21305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722_21302__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_21306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722_21302__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var marker_anchor_21307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722_21302__$1,new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686));
var marker_offset_21308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722_21302__$1,new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711));
var resolved_topic_21309 = (function (){var or__5025__auto__ = marker_topic_21306;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_21305;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__20723_21310 = placesurfer.map_ui.core.marker_style_for(resolved_topic_21309);
var map__20723_21311__$1 = cljs.core.__destructure_map(map__20723_21310);
var anchor_21312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20723_21311__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var effective_anchor_21313 = (function (){var or__5025__auto__ = marker_anchor_21307;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return anchor_21312;
}
})();
var root_el_21314 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(resolved_topic_21309,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position),effective_anchor_21313);
var marker_opts_21315 = (function (){var G__20724 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_21314,new cljs.core.Keyword(null,"anchor","anchor",1549638489),effective_anchor_21313], null);
if(cljs.core.seq(marker_offset_21308)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20724,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.clj__GT_js(marker_offset_21308));
} else {
return G__20724;
}
})();
var marker_21316 = (new maplibregl.Marker(cljs.core.clj__GT_js(marker_opts_21315)));
var popup_21317 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_21316["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_21316["placesurferPositionClj"] = position);

popup_21317.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_21316.setLngLat([longitude_21303,latitude_21304]);

marker_21316.setPopup(popup_21317);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_21316,popup_21317,root_el_21314,position);

marker_21316.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(markers_atom,cljs.core.conj,marker_21316);


var G__21327 = seq__20712;
var G__21328 = chunk__20713;
var G__21329 = count__20714;
var G__21330 = (i__20715 + (1));
seq__20712 = G__21327;
chunk__20713 = G__21328;
count__20714 = G__21329;
i__20715 = G__21330;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20712);
if(temp__5823__auto__){
var seq__20712__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20712__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20712__$1);
var G__21331 = cljs.core.chunk_rest(seq__20712__$1);
var G__21332 = c__5548__auto__;
var G__21333 = cljs.core.count(c__5548__auto__);
var G__21334 = (0);
seq__20712 = G__21331;
chunk__20713 = G__21332;
count__20714 = G__21333;
i__20715 = G__21334;
continue;
} else {
var position = cljs.core.first(seq__20712__$1);
var map__20725_21335 = position;
var map__20725_21336__$1 = cljs.core.__destructure_map(map__20725_21335);
var longitude_21337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20725_21336__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_21338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20725_21336__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_21339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20725_21336__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_21340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20725_21336__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var marker_anchor_21341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20725_21336__$1,new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686));
var marker_offset_21342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20725_21336__$1,new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711));
var resolved_topic_21343 = (function (){var or__5025__auto__ = marker_topic_21340;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_21339;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__20726_21344 = placesurfer.map_ui.core.marker_style_for(resolved_topic_21343);
var map__20726_21345__$1 = cljs.core.__destructure_map(map__20726_21344);
var anchor_21346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20726_21345__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var effective_anchor_21347 = (function (){var or__5025__auto__ = marker_anchor_21341;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return anchor_21346;
}
})();
var root_el_21348 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(resolved_topic_21343,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position),effective_anchor_21347);
var marker_opts_21349 = (function (){var G__20727 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_21348,new cljs.core.Keyword(null,"anchor","anchor",1549638489),effective_anchor_21347], null);
if(cljs.core.seq(marker_offset_21342)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20727,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.clj__GT_js(marker_offset_21342));
} else {
return G__20727;
}
})();
var marker_21350 = (new maplibregl.Marker(cljs.core.clj__GT_js(marker_opts_21349)));
var popup_21351 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_21350["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_21350["placesurferPositionClj"] = position);

popup_21351.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_21350.setLngLat([longitude_21337,latitude_21338]);

marker_21350.setPopup(popup_21351);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_21350,popup_21351,root_el_21348,position);

marker_21350.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(markers_atom,cljs.core.conj,marker_21350);


var G__21356 = cljs.core.next(seq__20712__$1);
var G__21357 = null;
var G__21358 = (0);
var G__21359 = (0);
seq__20712 = G__21356;
chunk__20713 = G__21357;
count__20714 = G__21358;
i__20715 = G__21359;
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
var temp__5823__auto___21360 = cljs.core.deref(placesurfer.map_ui.core._BANG_dense_viewport_timer);
if(cljs.core.truth_(temp__5823__auto___21360)){
var timer_21361 = temp__5823__auto___21360;
clearTimeout(timer_21361);
} else {
}

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_viewport_timer,setTimeout((function (){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_viewport_timer,null);

return placesurfer.map_ui.core.rebuild_dense_markers_now_BANG_(m);
}),placesurfer.map_ui.core.dense_viewport_debounce_ms));
});
placesurfer.map_ui.core.fit_mock_map_BANG_ = (function placesurfer$map_ui$core$fit_mock_map_BANG_(m,p__20728){
var map__20729 = p__20728;
var map__20729__$1 = cljs.core.__destructure_map(map__20729);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20729__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20729__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20729__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20729__$1,new cljs.core.Keyword(null,"north","north",651323902));
(m.fitBoundsCalled = true);

var c_21362 = m.getCenter();
(c_21362.lng = ((west + east) / 2.0));

(c_21362.lat = ((south + north) / 2.0));

return m.setZoom(placesurfer.map_ui.core.fit_max_zoom);
});
placesurfer.map_ui.core.fit_lng_lat_box_BANG_ = (function placesurfer$map_ui$core$fit_lng_lat_box_BANG_(m,box,p__20730){
var map__20731 = p__20730;
var map__20731__$1 = cljs.core.__destructure_map(map__20731);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20731__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
if(placesurfer.map_ui.bounds.valid_lng_lat_box_QMARK_(box)){
var map__20732 = placesurfer.map_ui.bounds.pad_degenerate_box(box);
var map__20732__$1 = cljs.core.__destructure_map(map__20732);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20732__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20732__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20732__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20732__$1,new cljs.core.Keyword(null,"north","north",651323902));
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
placesurfer.map_ui.core.fit_bounds_BANG_ = (function placesurfer$map_ui$core$fit_bounds_BANG_(m,positions,p__20733){
var map__20734 = p__20733;
var map__20734__$1 = cljs.core.__destructure_map(map__20734);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20734__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var temp__5823__auto__ = placesurfer.map_ui.bounds.fit_lng_lat_bounds(positions);
if(cljs.core.truth_(temp__5823__auto__)){
var box = temp__5823__auto__;
return placesurfer.map_ui.core.fit_lng_lat_box_BANG_(m,box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null));
} else {
return null;
}
});
placesurfer.map_ui.core.normalize_state = (function placesurfer$map_ui$core$normalize_state(p__20735){
var map__20736 = p__20735;
var map__20736__$1 = cljs.core.__destructure_map(map__20736);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20736__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20736__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20736__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20736__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20736__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20736__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20736__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.vec(positions),new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),fit_bounds,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003),draft_marker,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185),open_popup_for,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),(function (){var or__5025__auto__ = popup_opts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"fit?","fit?",1773758200),cljs.core.boolean$(fit_QMARK_),new cljs.core.Keyword(null,"animate?","animate?",-1559039739),(((!((animate_QMARK_ == null))))?cljs.core.boolean$(animate_QMARK_):true)], null);
});
placesurfer.map_ui.core.apply_now_BANG_ = (function placesurfer$map_ui$core$apply_now_BANG_(m,p__20737){
var map__20738 = p__20737;
var map__20738__$1 = cljs.core.__destructure_map(map__20738);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
if((m === cljs.core.deref(placesurfer.map_ui.core._BANG_map))){
var vec__20739_21373 = placesurfer.map_ui.core.partition_dense_positions(positions);
var stable_positions_21374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20739_21373,(0),null);
var dense_positions_21375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20739_21373,(1),null);
placesurfer.map_ui.core.clear_markers_BANG_();

if(cljs.core.seq(stable_positions_21374)){
placesurfer.map_ui.core.add_markers_BANG_(m,stable_positions_21374,popup_opts);
} else {
}

if(cljs.core.truth_(draft_marker)){
placesurfer.map_ui.core.add_markers_BANG_(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draft_marker], null),popup_opts);
} else {
}

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_positions,dense_positions_21375);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_dense_popup_opts,popup_opts);

placesurfer.map_ui.core.rebuild_dense_markers_now_BANG_(m);

try{placesurfer.map_ui.core.apply_area_circles_BANG_(m,(function (){var G__20743 = cljs.core.vec(positions);
if(cljs.core.truth_(draft_marker)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20743,draft_marker);
} else {
return G__20743;
}
})());
}catch (e20742){var __21376 = e20742;
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
var seq__20744 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50),(150),(400),(800),(1500)], null));
var chunk__20745 = null;
var count__20746 = (0);
var i__20747 = (0);
while(true){
if((i__20747 < count__20746)){
var delay_ms = chunk__20745.cljs$core$IIndexed$_nth$arity$2(null,i__20747);
setTimeout(((function (seq__20744,chunk__20745,count__20746,i__20747,delay_ms){
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
});})(seq__20744,chunk__20745,count__20746,i__20747,delay_ms))
,delay_ms);


var G__21378 = seq__20744;
var G__21379 = chunk__20745;
var G__21380 = count__20746;
var G__21381 = (i__20747 + (1));
seq__20744 = G__21378;
chunk__20745 = G__21379;
count__20746 = G__21380;
i__20747 = G__21381;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20744);
if(temp__5823__auto__){
var seq__20744__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20744__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20744__$1);
var G__21383 = cljs.core.chunk_rest(seq__20744__$1);
var G__21384 = c__5548__auto__;
var G__21385 = cljs.core.count(c__5548__auto__);
var G__21386 = (0);
seq__20744 = G__21383;
chunk__20745 = G__21384;
count__20746 = G__21385;
i__20747 = G__21386;
continue;
} else {
var delay_ms = cljs.core.first(seq__20744__$1);
setTimeout(((function (seq__20744,chunk__20745,count__20746,i__20747,delay_ms,seq__20744__$1,temp__5823__auto__){
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
});})(seq__20744,chunk__20745,count__20746,i__20747,delay_ms,seq__20744__$1,temp__5823__auto__))
,delay_ms);


var G__21391 = cljs.core.next(seq__20744__$1);
var G__21392 = null;
var G__21393 = (0);
var G__21394 = (0);
seq__20744 = G__21391;
chunk__20745 = G__21392;
count__20746 = G__21393;
i__20747 = G__21394;
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
placesurfer.map_ui.core.sync_country_pick_state_BANG_ = (function placesurfer$map_ui$core$sync_country_pick_state_BANG_(p__20748){
var map__20749 = p__20748;
var map__20749__$1 = cljs.core.__destructure_map(map__20749);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20749__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20749__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
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
placesurfer.map_ui.core.sync_add_pin_mode_BANG_ = (function placesurfer$map_ui$core$sync_add_pin_mode_BANG_(p__20750){
var map__20751 = p__20750;
var map__20751__$1 = cljs.core.__destructure_map(map__20751);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20751__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20751__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_,cljs.core.boolean$(active_QMARK_));

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_click_handler,(cljs.core.truth_(active_QMARK_)?on_click:null));

var temp__5823__auto___21396 = cljs.core.deref(placesurfer.map_ui.core._BANG_map_container);
if(cljs.core.truth_(temp__5823__auto___21396)){
var el_21397 = temp__5823__auto___21396;
if(cljs.core.truth_(active_QMARK_)){
el_21397.classList.add("map-add-pin-active");
} else {
el_21397.classList.remove("map-add-pin-active");
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
}catch (e20752){var _ = e20752;
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
placesurfer.map_ui.core.fly_to_view_BANG_ = (function placesurfer$map_ui$core$fly_to_view_BANG_(p__20753){
var map__20754 = p__20753;
var map__20754__$1 = cljs.core.__destructure_map(map__20754);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20754__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20754__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20754__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20754__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
if(((typeof longitude === 'number') && (((typeof latitude === 'number') && (typeof zoom === 'number'))))){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom,new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null)));
}catch (e20755){var _ = e20755;
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
placesurfer.map_ui.core.center_on_position_BANG_ = (function placesurfer$map_ui$core$center_on_position_BANG_(p__20756){
var map__20757 = p__20756;
var map__20757__$1 = cljs.core.__destructure_map(map__20757);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20757__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20757__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20757__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),placesurfer.map_ui.core.center_default_zoom);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20757__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
var preserve_zoom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20757__$1,new cljs.core.Keyword(null,"preserve-zoom?","preserve-zoom?",-1650190790));
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js((function (){var G__20759 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null);
if(cljs.core.not(preserve_zoom_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20759,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom);
} else {
return G__20759;
}
})()));
}catch (e20758){var _ = e20758;
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

var temp__5823__auto___21409 = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5823__auto___21409)){
var m_21410 = temp__5823__auto___21409;
try{m_21410.remove();
}catch (e20760){var __21411 = e20760;
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
