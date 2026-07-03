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
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_hover_popup !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_hover_popup = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_marker_pick_handler !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_marker_pick_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
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
}catch (e56409){var _ = e56409;
return false;
}})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
try{return m.isStyleLoaded() === true;
}catch (e56410){var _ = e56410;
return false;
}}

}
}
});
placesurfer.map_ui.core.safe_resize_BANG_ = (function placesurfer$map_ui$core$safe_resize_BANG_(m){
if(cljs.core.truth_(m)){
try{return m.resize();
}catch (e56411){var _ = e56411;
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
}catch (e56412){var _ = e56412;
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
var G__56413 = (function (){try{return marker.getElement();
}catch (e56414){var _ = e56414;
return null;
}})();
if((G__56413 == null)){
return null;
} else {
return placesurfer.map_ui.core.marker_visual_el(G__56413);
}
});
placesurfer.map_ui.core.marker_element = (function placesurfer$map_ui$core$marker_element(var_args){
var G__56416 = arguments.length;
switch (G__56416) {
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
var map__56417 = placesurfer.map_ui.core.marker_style_for(topic);
var map__56417__$1 = cljs.core.__destructure_map(map__56417);
var width_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56417__$1,new cljs.core.Keyword(null,"width-px","width-px",65122451));
var height_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56417__$1,new cljs.core.Keyword(null,"height-px","height-px",-1391665005));
var background_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56417__$1,new cljs.core.Keyword(null,"background-position","background-position",1112702746));
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56417__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
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

(visual.style.transition = "transform 120ms ease-out");

if(img_QMARK_){
(el.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);

var img_56595 = document.createElement("img");
(img_56595.src = image_url);

(img_56595.alt = "");

(img_56595.draggable = false);

(img_56595.style.width = "100%");

(img_56595.style.height = "100%");

(img_56595.style.display = "block");

(img_56595.style.pointerEvents = "none");

visual.appendChild(img_56595);
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

placesurfer.map_ui.core.clear_markers_BANG_ = (function placesurfer$map_ui$core$clear_markers_BANG_(){
var seq__56418_56596 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__56419_56597 = null;
var count__56420_56598 = (0);
var i__56421_56599 = (0);
while(true){
if((i__56421_56599 < count__56420_56598)){
var marker_56600 = chunk__56419_56597.cljs$core$IIndexed$_nth$arity$2(null,i__56421_56599);
try{marker_56600.remove();
}catch (e56424){var __56601 = e56424;
}

var G__56602 = seq__56418_56596;
var G__56603 = chunk__56419_56597;
var G__56604 = count__56420_56598;
var G__56605 = (i__56421_56599 + (1));
seq__56418_56596 = G__56602;
chunk__56419_56597 = G__56603;
count__56420_56598 = G__56604;
i__56421_56599 = G__56605;
continue;
} else {
var temp__5825__auto___56606 = cljs.core.seq(seq__56418_56596);
if(temp__5825__auto___56606){
var seq__56418_56607__$1 = temp__5825__auto___56606;
if(cljs.core.chunked_seq_QMARK_(seq__56418_56607__$1)){
var c__5548__auto___56608 = cljs.core.chunk_first(seq__56418_56607__$1);
var G__56609 = cljs.core.chunk_rest(seq__56418_56607__$1);
var G__56610 = c__5548__auto___56608;
var G__56611 = cljs.core.count(c__5548__auto___56608);
var G__56612 = (0);
seq__56418_56596 = G__56609;
chunk__56419_56597 = G__56610;
count__56420_56598 = G__56611;
i__56421_56599 = G__56612;
continue;
} else {
var marker_56613 = cljs.core.first(seq__56418_56607__$1);
try{marker_56613.remove();
}catch (e56425){var __56614 = e56425;
}

var G__56615 = cljs.core.next(seq__56418_56607__$1);
var G__56616 = null;
var G__56617 = (0);
var G__56618 = (0);
seq__56418_56596 = G__56615;
chunk__56419_56597 = G__56616;
count__56420_56598 = G__56617;
i__56421_56599 = G__56618;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_markers,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_hover_popup,null);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_row_hover_match,null);
});
placesurfer.map_ui.core.draw_src = "placesurfer-draw";
placesurfer.map_ui.core.draw_fill = "placesurfer-draw-fill";
placesurfer.map_ui.core.draw_line = "placesurfer-draw-line";
placesurfer.map_ui.core.draw_vtx = "placesurfer-draw-vertex";
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_draw_active_QMARK_ !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_draw_active_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
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
placesurfer.map_ui.core.draw_fc = (function placesurfer$map_ui$core$draw_fc(){
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ring){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Polygon",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(ring),cljs.core.first(ring))], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
}),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons));
var cur = ((cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"LineString",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring)], null),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wip","wip",-103467282),true], null)], null):null);
var verts = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (ring){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56426){
var vec__56427 = p__56426;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56427,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56427,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
}),ring);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56430){
var vec__56431 = p__56430;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56431,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56431,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wip","wip",-103467282),true], null)], null);
}),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),(function (){var G__56434 = cljs.core.vec(verts);
var G__56434__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__56434,done)
;
if(cljs.core.truth_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56434__$1,cur);
} else {
return G__56434__$1;
}
})()], null);
});
placesurfer.map_ui.core.refresh_draw_BANG_ = (function placesurfer$map_ui$core$refresh_draw_BANG_(m){
var temp__5825__auto__ = (function (){try{return m.getSource(placesurfer.map_ui.core.draw_src);
}catch (e56435){var _ = e56435;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var src = temp__5825__auto__;
return src.setData(cljs.core.clj__GT_js(placesurfer.map_ui.core.draw_fc()));
} else {
return null;
}
});
placesurfer.map_ui.core.ensure_draw_layers_BANG_ = (function placesurfer$map_ui$core$ensure_draw_layers_BANG_(m){
if(cljs.core.truth_((function (){try{return m.getSource(placesurfer.map_ui.core.draw_src);
}catch (e56436){var _ = e56436;
return null;
}})())){
return null;
} else {
m.addSource(placesurfer.map_ui.core.draw_src,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"geojson",new cljs.core.Keyword(null,"data","data",-232669377),placesurfer.map_ui.core.draw_fc()], null)));

m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.draw_fill,new cljs.core.Keyword(null,"type","type",1174270348),"fill",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.draw_src,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["==",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["geometry-type"], null),"Polygon"], null),new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 2, ["fill-color","#ff4500","fill-opacity",0.35], null)], null)));

m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.draw_line,new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.draw_src,new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 3, ["line-color","#cc3300","line-width",(2),"line-dasharray",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], null)], null)));

return m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.draw_vtx,new cljs.core.Keyword(null,"type","type",1174270348),"circle",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.draw_src,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["==",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["geometry-type"], null),"Point"], null),new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 4, ["circle-radius",(5),"circle-color","#cc3300","circle-stroke-width",(2),"circle-stroke-color","#fff"], null)], null)));
}
});
placesurfer.map_ui.core.all_draw_vertices = (function placesurfer$map_ui$core$all_draw_vertices(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (pidx,ring){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (vidx,p__56437){
var vec__56438 = p__56437;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56438,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56438,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"polygon-idx","polygon-idx",1216671533),pidx,new cljs.core.Keyword(null,"vertex-idx","vertex-idx",676111409),vidx,new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"lat","lat",-580793929),lat], null);
}),ring);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)], 0)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (vidx,p__56441){
var vec__56442 = p__56441;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56442,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56442,(1),null);
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
var G__56445 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v);
var G__56445__$1 = (((G__56445 instanceof cljs.core.Keyword))?G__56445.fqn:null);
switch (G__56445__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56445__$1)].join('')));

}
});
placesurfer.map_ui.core.polygons__GT_fc = (function placesurfer$map_ui$core$polygons__GT_fc(rings){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ring){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Polygon",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(ring),cljs.core.first(ring))], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
}),rings)], null);
});
placesurfer.map_ui.core.save_draw_BANG_ = (function placesurfer$map_ui$core$save_draw_BANG_(){
var fc = placesurfer.map_ui.core.polygons__GT_fc(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons));
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_draw_on_save);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_ring,(function (p1__56446_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__56446_SHARP_));
}));
} else {
if(cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons))){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.last(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_polygons,(function (p1__56447_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__56447_SHARP_));
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
var seq__56448 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_click_fn,"click"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_mm_fn,"mousemove"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_md_fn,"mousedown"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_mu_fn,"mouseup"], null)], null));
var chunk__56449 = null;
var count__56450 = (0);
var i__56451 = (0);
while(true){
if((i__56451 < count__56450)){
var vec__56460 = chunk__56449.cljs$core$IIndexed$_nth$arity$2(null,i__56451);
var _BANG_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56460,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56460,(1),null);
var temp__5825__auto___56624 = cljs.core.deref(_BANG_a);
if(cljs.core.truth_(temp__5825__auto___56624)){
var f_56625 = temp__5825__auto___56624;
try{m.off(ev,f_56625);
}catch (e56463){var __56626 = e56463;
}
cljs.core.reset_BANG_(_BANG_a,null);
} else {
}


var G__56627 = seq__56448;
var G__56628 = chunk__56449;
var G__56629 = count__56450;
var G__56630 = (i__56451 + (1));
seq__56448 = G__56627;
chunk__56449 = G__56628;
count__56450 = G__56629;
i__56451 = G__56630;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56448);
if(temp__5825__auto__){
var seq__56448__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56448__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__56448__$1);
var G__56631 = cljs.core.chunk_rest(seq__56448__$1);
var G__56632 = c__5548__auto__;
var G__56633 = cljs.core.count(c__5548__auto__);
var G__56634 = (0);
seq__56448 = G__56631;
chunk__56449 = G__56632;
count__56450 = G__56633;
i__56451 = G__56634;
continue;
} else {
var vec__56464 = cljs.core.first(seq__56448__$1);
var _BANG_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56464,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56464,(1),null);
var temp__5825__auto___56635__$1 = cljs.core.deref(_BANG_a);
if(cljs.core.truth_(temp__5825__auto___56635__$1)){
var f_56636 = temp__5825__auto___56635__$1;
try{m.off(ev,f_56636);
}catch (e56467){var __56637 = e56467;
}
cljs.core.reset_BANG_(_BANG_a,null);
} else {
}


var G__56638 = cljs.core.next(seq__56448__$1);
var G__56639 = null;
var G__56640 = (0);
var G__56641 = (0);
seq__56448 = G__56638;
chunk__56449 = G__56639;
count__56450 = G__56640;
i__56451 = G__56641;
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
var ll_56642 = e.lngLat;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ll_56642.lng,ll_56642.lat], null));

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
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_draw_drag);
if(cljs.core.truth_(temp__5823__auto__)){
var ds = temp__5823__auto__;
var ll_56643 = e.lngLat;
placesurfer.map_ui.core.move_vertex_BANG_(ds,ll_56643.lng,ll_56643.lat);

return placesurfer.map_ui.core.refresh_draw_BANG_(m);
} else {
var v = placesurfer.map_ui.core.vertex_near_screen(m,x,y,(8));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_hover_v,v);

var G__56468 = m;
var G__56469 = (cljs.core.truth_(v)?"pointer":"default");
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(G__56468,G__56469) : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,G__56468,G__56469));
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
}catch (e56470){var __56644 = e56470;
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
}catch (e56471){var __56645 = e56471;
}
var G__56472 = m;
var G__56473 = (cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_hover_v))?"pointer":"default");
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(G__56472,G__56473) : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,G__56472,G__56473));
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

var seq__56474 = cljs.core.seq(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["padding","4px 8px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fontSize","11px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fontWeight","600"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["color","white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginBottom","2px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","3px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textAlign","left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background",bg], null)], null));
var chunk__56475 = null;
var count__56476 = (0);
var i__56477 = (0);
while(true){
if((i__56477 < count__56476)){
var vec__56484 = chunk__56475.cljs$core$IIndexed$_nth$arity$2(null,i__56477);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56484,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56484,(1),null);
(el.style[k] = v);


var G__56646 = seq__56474;
var G__56647 = chunk__56475;
var G__56648 = count__56476;
var G__56649 = (i__56477 + (1));
seq__56474 = G__56646;
chunk__56475 = G__56647;
count__56476 = G__56648;
i__56477 = G__56649;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56474);
if(temp__5825__auto__){
var seq__56474__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56474__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__56474__$1);
var G__56650 = cljs.core.chunk_rest(seq__56474__$1);
var G__56651 = c__5548__auto__;
var G__56652 = cljs.core.count(c__5548__auto__);
var G__56653 = (0);
seq__56474 = G__56650;
chunk__56475 = G__56651;
count__56476 = G__56652;
i__56477 = G__56653;
continue;
} else {
var vec__56487 = cljs.core.first(seq__56474__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56487,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56487,(1),null);
(el.style[k] = v);


var G__56654 = cljs.core.next(seq__56474__$1);
var G__56655 = null;
var G__56656 = (0);
var G__56657 = (0);
seq__56474 = G__56654;
chunk__56475 = G__56655;
count__56476 = G__56656;
i__56477 = G__56657;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.map_ui.core.make_draw_ctrl = (function placesurfer$map_ui$core$make_draw_ctrl(m){
var t = cljs.core.deref(placesurfer.map_ui.core._BANG_draw_t);
var el = document.createElement("div");
var toggle_btn = document.createElement("button");
var close_btn = document.createElement("button");
var undo_btn = document.createElement("button");
var clear_btn = document.createElement("button");
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

placesurfer.map_ui.core.btn_style_BANG_(save_btn,["\uD83D\uDCBE ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","save","common/save",-1048148614)) : t.call(null,new cljs.core.Keyword("common","save","common/save",-1048148614))))].join(''),"#1a365d");

toggle_btn.addEventListener("click",(function (){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_active_QMARK_))){
placesurfer.map_ui.core.detach_draw_handlers_BANG_(m);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_active_QMARK_,false);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_drag,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_hover_v,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_skip_click_QMARK_,false);

try{m.dragPan.enable();
}catch (e56490){var __56658 = e56490;
}
(placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(m,"grab") : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,m,"grab"));

return update_BANG_(false);
} else {
placesurfer.map_ui.core.ensure_draw_layers_BANG_(m);

placesurfer.map_ui.core.attach_draw_handlers_BANG_(m);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_active_QMARK_,true);

(placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(m,"default") : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,m,"default"));

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

save_btn.addEventListener("click",placesurfer.map_ui.core.save_draw_BANG_);

var seq__56491_56659 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [toggle_btn,close_btn,undo_btn,clear_btn,save_btn], null));
var chunk__56492_56660 = null;
var count__56493_56661 = (0);
var i__56494_56662 = (0);
while(true){
if((i__56494_56662 < count__56493_56661)){
var b_56663 = chunk__56492_56660.cljs$core$IIndexed$_nth$arity$2(null,i__56494_56662);
el.appendChild(b_56663);


var G__56664 = seq__56491_56659;
var G__56665 = chunk__56492_56660;
var G__56666 = count__56493_56661;
var G__56667 = (i__56494_56662 + (1));
seq__56491_56659 = G__56664;
chunk__56492_56660 = G__56665;
count__56493_56661 = G__56666;
i__56494_56662 = G__56667;
continue;
} else {
var temp__5825__auto___56668 = cljs.core.seq(seq__56491_56659);
if(temp__5825__auto___56668){
var seq__56491_56669__$1 = temp__5825__auto___56668;
if(cljs.core.chunked_seq_QMARK_(seq__56491_56669__$1)){
var c__5548__auto___56670 = cljs.core.chunk_first(seq__56491_56669__$1);
var G__56671 = cljs.core.chunk_rest(seq__56491_56669__$1);
var G__56672 = c__5548__auto___56670;
var G__56673 = cljs.core.count(c__5548__auto___56670);
var G__56674 = (0);
seq__56491_56659 = G__56671;
chunk__56492_56660 = G__56672;
count__56493_56661 = G__56673;
i__56494_56662 = G__56674;
continue;
} else {
var b_56675 = cljs.core.first(seq__56491_56669__$1);
el.appendChild(b_56675);


var G__56676 = cljs.core.next(seq__56491_56669__$1);
var G__56677 = null;
var G__56678 = (0);
var G__56679 = (0);
seq__56491_56659 = G__56676;
chunk__56492_56660 = G__56677;
count__56493_56661 = G__56678;
i__56494_56662 = G__56679;
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
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_active_QMARK_))){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
placesurfer.map_ui.core.detach_draw_handlers_BANG_(m);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_active_QMARK_,false);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_drag,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_hover_v,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_skip_click_QMARK_,false);

try{m.dragPan.enable();
}catch (e56495){var __56680 = e56495;
}
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(m,"grab") : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,m,"grab"));
} else {
return null;
}
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
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return fetch(["/data/layers/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(layer_id),".geojson"].join('')).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.json();
} else {
return null;
}
})).then((function (geojson){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.PersistentVector.EMPTY);

if(cljs.core.truth_(geojson)){
var features_56681 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(geojson.features,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var rings_56682 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (f){
var coords = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),(0)], null));
if(cljs.core.seq(coords)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__56496){
var vec__56497 = p__56496;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56497,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56497,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null);
}),cljs.core.butlast(coords));
} else {
return null;
}
}),features_56681);
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_polygons,cljs.core.vec(rings_56682));
} else {
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_polygons,cljs.core.PersistentVector.EMPTY);
}

if(cljs.core.truth_(placesurfer.map_ui.core.map_ready_QMARK_(m))){
placesurfer.map_ui.core.ensure_draw_layers_BANG_(m);

return placesurfer.map_ui.core.refresh_draw_BANG_(m);
} else {
return null;
}
})).catch((function (_){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_polygons,cljs.core.PersistentVector.EMPTY);

if(cljs.core.truth_(placesurfer.map_ui.core.map_ready_QMARK_(m))){
placesurfer.map_ui.core.ensure_draw_layers_BANG_(m);

return placesurfer.map_ui.core.refresh_draw_BANG_(m);
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
}catch (e56500){var _ = e56500;
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
}catch (e56501){var _ = e56501;
return null;
}});
/**
 * Show or hide map overlay layers based on the set of active overlay keywords.
 */
placesurfer.map_ui.core.sync_overlay_layers_BANG_ = (function placesurfer$map_ui$core$sync_overlay_layers_BANG_(active_overlays){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
if(cljs.core.truth_(placesurfer.map_ui.core.map_ready_QMARK_(m))){
return placesurfer.map_ui.core.do_sync_overlay_layers_BANG_(m,active_overlays);
} else {
return m.once("load",(function (_){
var temp__5825__auto____$1 = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto____$1)){
var m2 = temp__5825__auto____$1;
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
placesurfer.map_ui.core.area_source_id = "placesurfer-area-circles";
placesurfer.map_ui.core.area_fill_layer_id = "placesurfer-area-fill";
placesurfer.map_ui.core.area_line_layer_id = "placesurfer-area-line";
placesurfer.map_ui.core.remove_area_layers_BANG_ = (function placesurfer$map_ui$core$remove_area_layers_BANG_(m){
try{if(cljs.core.truth_(m.getLayer(placesurfer.map_ui.core.area_fill_layer_id))){
m.removeLayer(placesurfer.map_ui.core.area_fill_layer_id);
} else {
}

if(cljs.core.truth_(m.getLayer(placesurfer.map_ui.core.area_line_layer_id))){
m.removeLayer(placesurfer.map_ui.core.area_line_layer_id);
} else {
}

if(cljs.core.truth_(m.getSource(placesurfer.map_ui.core.area_source_id))){
return m.removeSource(placesurfer.map_ui.core.area_source_id);
} else {
return null;
}
}catch (e56502){var _ = e56502;
return null;
}});
placesurfer.map_ui.core.circle_coords = (function placesurfer$map_ui$core$circle_coords(lng,lat,radius_km){
var steps = (64);
var d = (radius_km / 6371.0);
var lat_r = (lat * (Math.PI / (180)));
var lng_r = (lng * (Math.PI / (180)));
var pts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
var angle = (((i * (2)) * Math.PI) / steps);
var lat2 = Math.asin(((Math.sin(lat_r) * Math.cos(d)) + ((Math.cos(lat_r) * Math.sin(d)) * Math.cos(angle))));
var lng2 = (lng_r + Math.atan2(((Math.sin(angle) * Math.sin(d)) * Math.cos(lat_r)),(Math.cos(d) - (Math.sin(lat_r) * Math.sin(lat2)))));
var lat2d = (lat2 * ((180) / Math.PI));
var lng2d = (lng2 * ((180) / Math.PI));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng2d,lat2d], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(steps));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pts,cljs.core.first(pts));
});
placesurfer.map_ui.core.positions__GT_circle_features = (function placesurfer$map_ui$core$positions__GT_circle_features(positions){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__56503){
var map__56504 = p__56503;
var map__56504__$1 = cljs.core.__destructure_map(map__56504);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var area_radii = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"area-radii","area-radii",1413411485));
if(((cljs.core.seq(area_radii)) && (((typeof longitude === 'number') && (typeof latitude === 'number'))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Polygon",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core.circle_coords(longitude,latitude,r)], null)], null)], null);
}),area_radii);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([positions], 0)));
});
placesurfer.map_ui.core.apply_area_circles_BANG_ = (function placesurfer$map_ui$core$apply_area_circles_BANG_(m,positions){
try{placesurfer.map_ui.core.remove_area_layers_BANG_(m);

var features = placesurfer.map_ui.core.positions__GT_circle_features(positions);
if(cljs.core.seq(features)){
m.addSource(placesurfer.map_ui.core.area_source_id,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"geojson",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),features], null)], null)));

m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.area_fill_layer_id,new cljs.core.Keyword(null,"type","type",1174270348),"fill",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.area_source_id,new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 2, ["fill-color","#3b82f6","fill-opacity",0.08], null)], null)));

return m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.area_line_layer_id,new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.area_source_id,new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 3, ["line-color","#3b82f6","line-width",1.5,"line-opacity",0.5], null)], null)));
} else {
return null;
}
}catch (e56505){var _ = e56505;
return null;
}});
placesurfer.map_ui.core.reset_marker_layering_BANG_ = (function placesurfer$map_ui$core$reset_marker_layering_BANG_(){
var seq__56506 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__56507 = null;
var count__56508 = (0);
var i__56509 = (0);
while(true){
if((i__56509 < count__56508)){
var marker = chunk__56507.cljs$core$IIndexed$_nth$arity$2(null,i__56509);
var temp__5825__auto___56683 = (function (){try{return marker.getElement();
}catch (e56512){var _ = e56512;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___56683)){
var el_56684 = temp__5825__auto___56683;
(el_56684.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__56685 = seq__56506;
var G__56686 = chunk__56507;
var G__56687 = count__56508;
var G__56688 = (i__56509 + (1));
seq__56506 = G__56685;
chunk__56507 = G__56686;
count__56508 = G__56687;
i__56509 = G__56688;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56506);
if(temp__5825__auto__){
var seq__56506__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56506__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__56506__$1);
var G__56689 = cljs.core.chunk_rest(seq__56506__$1);
var G__56690 = c__5548__auto__;
var G__56691 = cljs.core.count(c__5548__auto__);
var G__56692 = (0);
seq__56506 = G__56689;
chunk__56507 = G__56690;
count__56508 = G__56691;
i__56509 = G__56692;
continue;
} else {
var marker = cljs.core.first(seq__56506__$1);
var temp__5825__auto___56693__$1 = (function (){try{return marker.getElement();
}catch (e56513){var _ = e56513;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___56693__$1)){
var el_56694 = temp__5825__auto___56693__$1;
(el_56694.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__56695 = cljs.core.next(seq__56506__$1);
var G__56696 = null;
var G__56697 = (0);
var G__56698 = (0);
seq__56506 = G__56695;
chunk__56507 = G__56696;
count__56508 = G__56697;
i__56509 = G__56698;
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

var temp__5825__auto__ = (function (){try{return marker.getElement();
}catch (e56514){var _ = e56514;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return (el.style.zIndex = placesurfer.map_ui.core.marker_z_index_active);
} else {
return null;
}
});
placesurfer.map_ui.core.elevate_popup_layer_BANG_ = (function placesurfer$map_ui$core$elevate_popup_layer_BANG_(popup){
var temp__5825__auto__ = (function (){try{return popup.getElement();
}catch (e56515){var _ = e56515;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
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
var temp__5825__auto__ = popup.placesurferCloseTimer;
if(cljs.core.truth_(temp__5825__auto__)){
var timer = temp__5825__auto__;
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
var temp__5825__auto__ = (function (){try{return marker.getPopup();
}catch (e56516){var _ = e56516;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var popup = temp__5825__auto__;
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
var G__56517 = (marker["placesurferPosition"]);
if((G__56517 == null)){
return null;
} else {
return placesurfer.map_ui.core.position_map(G__56517);
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
placesurfer.map_ui.core.position_match_QMARK_ = (function placesurfer$map_ui$core$position_match_QMARK_(pos,p__56518){
var map__56519 = p__56518;
var map__56519__$1 = cljs.core.__destructure_map(map__56519);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56519__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56519__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56519__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
}catch (e56520){var _ = e56520;
return null;
}}),cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
});
placesurfer.map_ui.core.refresh_row_hover_emphasis_BANG_ = (function placesurfer$map_ui$core$refresh_row_hover_emphasis_BANG_(){
var seq__56521_56699 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__56522_56700 = null;
var count__56523_56701 = (0);
var i__56524_56702 = (0);
while(true){
if((i__56524_56702 < count__56523_56701)){
var marker_56703 = chunk__56522_56700.cljs$core$IIndexed$_nth$arity$2(null,i__56524_56702);
var temp__5825__auto___56704 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_56703);
if(cljs.core.truth_(temp__5825__auto___56704)){
var visual_56705 = temp__5825__auto___56704;
visual_56705.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}


var G__56706 = seq__56521_56699;
var G__56707 = chunk__56522_56700;
var G__56708 = count__56523_56701;
var G__56709 = (i__56524_56702 + (1));
seq__56521_56699 = G__56706;
chunk__56522_56700 = G__56707;
count__56523_56701 = G__56708;
i__56524_56702 = G__56709;
continue;
} else {
var temp__5825__auto___56710 = cljs.core.seq(seq__56521_56699);
if(temp__5825__auto___56710){
var seq__56521_56711__$1 = temp__5825__auto___56710;
if(cljs.core.chunked_seq_QMARK_(seq__56521_56711__$1)){
var c__5548__auto___56712 = cljs.core.chunk_first(seq__56521_56711__$1);
var G__56713 = cljs.core.chunk_rest(seq__56521_56711__$1);
var G__56714 = c__5548__auto___56712;
var G__56715 = cljs.core.count(c__5548__auto___56712);
var G__56716 = (0);
seq__56521_56699 = G__56713;
chunk__56522_56700 = G__56714;
count__56523_56701 = G__56715;
i__56524_56702 = G__56716;
continue;
} else {
var marker_56717 = cljs.core.first(seq__56521_56711__$1);
var temp__5825__auto___56718__$1 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_56717);
if(cljs.core.truth_(temp__5825__auto___56718__$1)){
var visual_56719 = temp__5825__auto___56718__$1;
visual_56719.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}


var G__56720 = cljs.core.next(seq__56521_56711__$1);
var G__56721 = null;
var G__56722 = (0);
var G__56723 = (0);
seq__56521_56699 = G__56720;
chunk__56522_56700 = G__56721;
count__56523_56701 = G__56722;
i__56524_56702 = G__56723;
continue;
}
} else {
}
}
break;
}

var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_row_hover_match);
if(cljs.core.truth_(temp__5825__auto__)){
var match = temp__5825__auto__;
var temp__5825__auto____$1 = placesurfer.map_ui.core.find_marker_by_match(match);
if(cljs.core.truth_(temp__5825__auto____$1)){
var marker = temp__5825__auto____$1;
var temp__5825__auto____$2 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker);
if(cljs.core.truth_(temp__5825__auto____$2)){
var visual = temp__5825__auto____$2;
return visual.classList.add(placesurfer.map_ui.core.marker_row_hover_class);
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
 * Scale the map marker matching `match` (:id or :longitude/:latitude) while a list row is hovered.
 */
placesurfer.map_ui.core.set_marker_row_emphasis_BANG_ = (function placesurfer$map_ui$core$set_marker_row_emphasis_BANG_(match){
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(match) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(match) === 'number'));
}
})())){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_row_hover_match,match);

return placesurfer.map_ui.core.refresh_row_hover_emphasis_BANG_();
} else {
return null;
}
});
/**
 * Restore map marker size after list row hover ends.
 */
placesurfer.map_ui.core.clear_marker_row_emphasis_BANG_ = (function placesurfer$map_ui$core$clear_marker_row_emphasis_BANG_(){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_row_hover_match,null);

return placesurfer.map_ui.core.refresh_row_hover_emphasis_BANG_();
});
placesurfer.map_ui.core.close_all_popups_BANG_ = (function placesurfer$map_ui$core$close_all_popups_BANG_(){
var seq__56525_56724 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__56526_56725 = null;
var count__56527_56726 = (0);
var i__56528_56727 = (0);
while(true){
if((i__56528_56727 < count__56527_56726)){
var marker_56728 = chunk__56526_56725.cljs$core$IIndexed$_nth$arity$2(null,i__56528_56727);
var temp__5825__auto___56729 = (function (){try{return marker_56728.getPopup();
}catch (e56533){var _ = e56533;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___56729)){
var popup_56730 = temp__5825__auto___56729;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_56730);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_56730,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_56730)){
try{marker_56728.togglePopup();
}catch (e56534){var __56731 = e56534;
}} else {
}
} else {
}


var G__56732 = seq__56525_56724;
var G__56733 = chunk__56526_56725;
var G__56734 = count__56527_56726;
var G__56735 = (i__56528_56727 + (1));
seq__56525_56724 = G__56732;
chunk__56526_56725 = G__56733;
count__56527_56726 = G__56734;
i__56528_56727 = G__56735;
continue;
} else {
var temp__5825__auto___56736 = cljs.core.seq(seq__56525_56724);
if(temp__5825__auto___56736){
var seq__56525_56737__$1 = temp__5825__auto___56736;
if(cljs.core.chunked_seq_QMARK_(seq__56525_56737__$1)){
var c__5548__auto___56738 = cljs.core.chunk_first(seq__56525_56737__$1);
var G__56739 = cljs.core.chunk_rest(seq__56525_56737__$1);
var G__56740 = c__5548__auto___56738;
var G__56741 = cljs.core.count(c__5548__auto___56738);
var G__56742 = (0);
seq__56525_56724 = G__56739;
chunk__56526_56725 = G__56740;
count__56527_56726 = G__56741;
i__56528_56727 = G__56742;
continue;
} else {
var marker_56743 = cljs.core.first(seq__56525_56737__$1);
var temp__5825__auto___56744__$1 = (function (){try{return marker_56743.getPopup();
}catch (e56535){var _ = e56535;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___56744__$1)){
var popup_56745 = temp__5825__auto___56744__$1;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_56745);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_56745,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_56745)){
try{marker_56743.togglePopup();
}catch (e56536){var __56746 = e56536;
}} else {
}
} else {
}


var G__56747 = cljs.core.next(seq__56525_56737__$1);
var G__56748 = null;
var G__56749 = (0);
var G__56750 = (0);
seq__56525_56724 = G__56747;
chunk__56526_56725 = G__56748;
count__56527_56726 = G__56749;
i__56528_56727 = G__56750;
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
}catch (e56537){var __56751 = e56537;
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
}catch (e56538){var __56752 = e56538;
}
placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup,mode);

placesurfer.map_ui.core.elevate_active_marker_BANG_(marker);

placesurfer.map_ui.core.elevate_popup_layer_BANG_(popup);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_hover_popup,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"popup","popup",635890211),popup,new cljs.core.Keyword(null,"root-el","root-el",1068654895),root_el], null));
});
/**
 * Open the click popup on the marker matching `match` (:id or :longitude/:latitude).
 */
placesurfer.map_ui.core.open_marker_popup_BANG_ = (function placesurfer$map_ui$core$open_marker_popup_BANG_(p__56539){
var map__56540 = p__56539;
var map__56540__$1 = cljs.core.__destructure_map(map__56540);
var match = map__56540__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56540__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56540__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56540__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
var temp__5825__auto__ = marker.getPopup();
if(cljs.core.truth_(temp__5825__auto__)){
var popup = temp__5825__auto__;
var temp__5825__auto____$1 = marker.getElement();
if(cljs.core.truth_(temp__5825__auto____$1)){
var root_el = temp__5825__auto____$1;
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
}catch (e56541){var _ = e56541;
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
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup);
if(cljs.core.truth_(temp__5823__auto__)){
var map__56542 = temp__5823__auto__;
var map__56542__$1 = cljs.core.__destructure_map(map__56542);
var root_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56542__$1,new cljs.core.Keyword(null,"root-el","root-el",1068654895));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56542__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56542__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
var marker__$1 = marker;
var popup__$1 = popup;
var or__5025__auto__ = placesurfer.map_ui.core.el_contains_point_QMARK_(root_el,client_x,client_y);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var temp__5825__auto__ = popup__$1.getElement();
if(cljs.core.truth_(temp__5825__auto__)){
var popup_el = temp__5825__auto__;
return placesurfer.map_ui.core.el_contains_point_QMARK_(popup_el,client_x,client_y);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var temp__5825__auto__ = marker__$1.getElement();
if(cljs.core.truth_(temp__5825__auto__)){
var marker_el = temp__5825__auto__;
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
var temp__5825__auto__ = (function (){try{return m.getCanvas();
}catch (e56543){var _ = e56543;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
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
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_country_pick_click_handler);
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
var ll = e.lngLat;
if(cljs.core.truth_((function (){var and__5023__auto__ = ll;
if(cljs.core.truth_(and__5023__auto__)){
return ((typeof ll.lng === 'number') && (typeof ll.lat === 'number'));
} else {
return and__5023__auto__;
}
})())){
var G__56544 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__56544) : handler.call(null,G__56544));
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
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_add_pin_click_handler);
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
var ll = e.lngLat;
if(cljs.core.truth_((function (){var and__5023__auto__ = ll;
if(cljs.core.truth_(and__5023__auto__)){
return ((typeof ll.lng === 'number') && (typeof ll.lat === 'number'));
} else {
return and__5023__auto__;
}
})())){
var G__56545 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__56545) : handler.call(null,G__56545));
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
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup);
if(cljs.core.truth_(temp__5825__auto__)){
var map__56546 = temp__5825__auto__;
var map__56546__$1 = cljs.core.__destructure_map(map__56546);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56546__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56546__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup);
if(cljs.core.truth_(temp__5825__auto__)){
var map__56547 = temp__5825__auto__;
var map__56547__$1 = cljs.core.__destructure_map(map__56547);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56547__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56547__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
var temp__5825__auto__ = (function (){var or__5025__auto__ = placesurfer.map_ui.core.marker_position_data(marker);
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
if(cljs.core.truth_(temp__5825__auto__)){
var pos = temp__5825__auto__;
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
var temp__5825__auto___56753 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5825__auto___56753)){
var visual_56754 = temp__5825__auto___56753;
visual_56754.classList.add(placesurfer.map_ui.core.marker_map_hover_class);
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
var temp__5825__auto___56755 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5825__auto___56755)){
var visual_56756 = temp__5825__auto___56755;
visual_56756.classList.remove(placesurfer.map_ui.core.marker_map_hover_class);
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

var temp__5825__auto__ = popup.getElement();
if(cljs.core.truth_(temp__5825__auto__)){
var popup_el = temp__5825__auto__;
popup_el.addEventListener("mouseenter",(function (){
return placesurfer.map_ui.core.cancel_hover_close_BANG_(popup);
}));

return popup_el.addEventListener("mouseleave",(function (){
return placesurfer.map_ui.core.schedule_hover_close_BANG_(marker,popup);
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
if(placesurfer.map_ui.core.marker_pick_enabled_QMARK_(position)){
var handled_QMARK_ = (function (){var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_marker_pick_handler);
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
var temp__5825__auto____$1 = placesurfer.map_ui.core.marker_click_position(marker,root_el,position);
if(cljs.core.truth_(temp__5825__auto____$1)){
var pos = temp__5825__auto____$1;
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
placesurfer.map_ui.core.add_markers_BANG_ = (function placesurfer$map_ui$core$add_markers_BANG_(m,positions,popup_opts){
var seq__56548 = cljs.core.seq(positions);
var chunk__56549 = null;
var count__56550 = (0);
var i__56551 = (0);
while(true){
if((i__56551 < count__56550)){
var position = chunk__56549.cljs$core$IIndexed$_nth$arity$2(null,i__56551);
var map__56558_56757 = position;
var map__56558_56758__$1 = cljs.core.__destructure_map(map__56558_56757);
var longitude_56759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56558_56758__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_56760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56558_56758__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_56761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56558_56758__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_56762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56558_56758__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var marker_anchor_56763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56558_56758__$1,new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686));
var marker_offset_56764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56558_56758__$1,new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711));
var resolved_topic_56765 = (function (){var or__5025__auto__ = marker_topic_56762;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_56761;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__56559_56766 = placesurfer.map_ui.core.marker_style_for(resolved_topic_56765);
var map__56559_56767__$1 = cljs.core.__destructure_map(map__56559_56766);
var anchor_56768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56559_56767__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var effective_anchor_56769 = (function (){var or__5025__auto__ = marker_anchor_56763;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return anchor_56768;
}
})();
var root_el_56770 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(resolved_topic_56765,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position),effective_anchor_56769);
var marker_opts_56771 = (function (){var G__56560 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_56770,new cljs.core.Keyword(null,"anchor","anchor",1549638489),effective_anchor_56769], null);
if(cljs.core.seq(marker_offset_56764)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56560,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.clj__GT_js(marker_offset_56764));
} else {
return G__56560;
}
})();
var marker_56772 = (new maplibregl.Marker(cljs.core.clj__GT_js(marker_opts_56771)));
var popup_56773 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_56772["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_56772["placesurferPositionClj"] = position);

popup_56773.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_56772.setLngLat([longitude_56759,latitude_56760]);

marker_56772.setPopup(popup_56773);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_56772,popup_56773,root_el_56770,position);

marker_56772.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_markers,cljs.core.conj,marker_56772);


var G__56774 = seq__56548;
var G__56775 = chunk__56549;
var G__56776 = count__56550;
var G__56777 = (i__56551 + (1));
seq__56548 = G__56774;
chunk__56549 = G__56775;
count__56550 = G__56776;
i__56551 = G__56777;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56548);
if(temp__5825__auto__){
var seq__56548__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56548__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__56548__$1);
var G__56778 = cljs.core.chunk_rest(seq__56548__$1);
var G__56779 = c__5548__auto__;
var G__56780 = cljs.core.count(c__5548__auto__);
var G__56781 = (0);
seq__56548 = G__56778;
chunk__56549 = G__56779;
count__56550 = G__56780;
i__56551 = G__56781;
continue;
} else {
var position = cljs.core.first(seq__56548__$1);
var map__56561_56782 = position;
var map__56561_56783__$1 = cljs.core.__destructure_map(map__56561_56782);
var longitude_56784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56561_56783__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_56785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56561_56783__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_56786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56561_56783__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_56787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56561_56783__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var marker_anchor_56788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56561_56783__$1,new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686));
var marker_offset_56789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56561_56783__$1,new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711));
var resolved_topic_56790 = (function (){var or__5025__auto__ = marker_topic_56787;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_56786;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__56562_56791 = placesurfer.map_ui.core.marker_style_for(resolved_topic_56790);
var map__56562_56792__$1 = cljs.core.__destructure_map(map__56562_56791);
var anchor_56793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56562_56792__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var effective_anchor_56794 = (function (){var or__5025__auto__ = marker_anchor_56788;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return anchor_56793;
}
})();
var root_el_56795 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(resolved_topic_56790,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position),effective_anchor_56794);
var marker_opts_56796 = (function (){var G__56563 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_56795,new cljs.core.Keyword(null,"anchor","anchor",1549638489),effective_anchor_56794], null);
if(cljs.core.seq(marker_offset_56789)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56563,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.clj__GT_js(marker_offset_56789));
} else {
return G__56563;
}
})();
var marker_56797 = (new maplibregl.Marker(cljs.core.clj__GT_js(marker_opts_56796)));
var popup_56798 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_56797["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_56797["placesurferPositionClj"] = position);

popup_56798.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_56797.setLngLat([longitude_56784,latitude_56785]);

marker_56797.setPopup(popup_56798);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_56797,popup_56798,root_el_56795,position);

marker_56797.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_markers,cljs.core.conj,marker_56797);


var G__56799 = cljs.core.next(seq__56548__$1);
var G__56800 = null;
var G__56801 = (0);
var G__56802 = (0);
seq__56548 = G__56799;
chunk__56549 = G__56800;
count__56550 = G__56801;
i__56551 = G__56802;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.map_ui.core.fit_mock_map_BANG_ = (function placesurfer$map_ui$core$fit_mock_map_BANG_(m,p__56564){
var map__56565 = p__56564;
var map__56565__$1 = cljs.core.__destructure_map(map__56565);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56565__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56565__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56565__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56565__$1,new cljs.core.Keyword(null,"north","north",651323902));
(m.fitBoundsCalled = true);

var c_56803 = m.getCenter();
(c_56803.lng = ((west + east) / 2.0));

(c_56803.lat = ((south + north) / 2.0));

return m.setZoom(placesurfer.map_ui.core.fit_max_zoom);
});
placesurfer.map_ui.core.fit_lng_lat_box_BANG_ = (function placesurfer$map_ui$core$fit_lng_lat_box_BANG_(m,box,p__56566){
var map__56567 = p__56566;
var map__56567__$1 = cljs.core.__destructure_map(map__56567);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56567__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
if(placesurfer.map_ui.bounds.valid_lng_lat_box_QMARK_(box)){
var map__56568 = placesurfer.map_ui.bounds.pad_degenerate_box(box);
var map__56568__$1 = cljs.core.__destructure_map(map__56568);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56568__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56568__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56568__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56568__$1,new cljs.core.Keyword(null,"north","north",651323902));
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
placesurfer.map_ui.core.fit_bounds_BANG_ = (function placesurfer$map_ui$core$fit_bounds_BANG_(m,positions,p__56569){
var map__56570 = p__56569;
var map__56570__$1 = cljs.core.__destructure_map(map__56570);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var temp__5825__auto__ = placesurfer.map_ui.bounds.fit_lng_lat_bounds(positions);
if(cljs.core.truth_(temp__5825__auto__)){
var box = temp__5825__auto__;
return placesurfer.map_ui.core.fit_lng_lat_box_BANG_(m,box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null));
} else {
return null;
}
});
placesurfer.map_ui.core.normalize_state = (function placesurfer$map_ui$core$normalize_state(p__56571){
var map__56572 = p__56571;
var map__56572__$1 = cljs.core.__destructure_map(map__56572);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56572__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56572__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56572__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56572__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56572__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56572__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56572__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.vec(positions),new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),fit_bounds,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003),draft_marker,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185),open_popup_for,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),(function (){var or__5025__auto__ = popup_opts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"fit?","fit?",1773758200),cljs.core.boolean$(fit_QMARK_),new cljs.core.Keyword(null,"animate?","animate?",-1559039739),(((!((animate_QMARK_ == null))))?cljs.core.boolean$(animate_QMARK_):true)], null);
});
placesurfer.map_ui.core.apply_now_BANG_ = (function placesurfer$map_ui$core$apply_now_BANG_(m,p__56573){
var map__56574 = p__56573;
var map__56574__$1 = cljs.core.__destructure_map(map__56574);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56574__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56574__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56574__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56574__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56574__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56574__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56574__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
if((m === cljs.core.deref(placesurfer.map_ui.core._BANG_map))){
placesurfer.map_ui.core.clear_markers_BANG_();

if(cljs.core.seq(positions)){
placesurfer.map_ui.core.add_markers_BANG_(m,positions,popup_opts);
} else {
}

if(cljs.core.truth_(draft_marker)){
placesurfer.map_ui.core.add_markers_BANG_(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draft_marker], null),popup_opts);
} else {
}

try{placesurfer.map_ui.core.apply_area_circles_BANG_(m,(function (){var G__56576 = cljs.core.vec(positions);
if(cljs.core.truth_(draft_marker)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56576,draft_marker);
} else {
return G__56576;
}
})());
}catch (e56575){var __56804 = e56575;
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
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_pending_state);
if(cljs.core.truth_(temp__5825__auto__)){
var state = temp__5825__auto__;
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_pending_state,null);

return placesurfer.map_ui.core.apply_now_BANG_(m,state);
} else {
return null;
}
});
placesurfer.map_ui.core.schedule_consume_when_ready_BANG_ = (function placesurfer$map_ui$core$schedule_consume_when_ready_BANG_(m){
var seq__56577 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50),(150),(400),(800),(1500)], null));
var chunk__56578 = null;
var count__56579 = (0);
var i__56580 = (0);
while(true){
if((i__56580 < count__56579)){
var delay_ms = chunk__56578.cljs$core$IIndexed$_nth$arity$2(null,i__56580);
setTimeout(((function (seq__56577,chunk__56578,count__56579,i__56580,delay_ms){
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
});})(seq__56577,chunk__56578,count__56579,i__56580,delay_ms))
,delay_ms);


var G__56805 = seq__56577;
var G__56806 = chunk__56578;
var G__56807 = count__56579;
var G__56808 = (i__56580 + (1));
seq__56577 = G__56805;
chunk__56578 = G__56806;
count__56579 = G__56807;
i__56580 = G__56808;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56577);
if(temp__5825__auto__){
var seq__56577__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56577__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__56577__$1);
var G__56809 = cljs.core.chunk_rest(seq__56577__$1);
var G__56810 = c__5548__auto__;
var G__56811 = cljs.core.count(c__5548__auto__);
var G__56812 = (0);
seq__56577 = G__56809;
chunk__56578 = G__56810;
count__56579 = G__56811;
i__56580 = G__56812;
continue;
} else {
var delay_ms = cljs.core.first(seq__56577__$1);
setTimeout(((function (seq__56577,chunk__56578,count__56579,i__56580,delay_ms,seq__56577__$1,temp__5825__auto__){
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
});})(seq__56577,chunk__56578,count__56579,i__56580,delay_ms,seq__56577__$1,temp__5825__auto__))
,delay_ms);


var G__56813 = cljs.core.next(seq__56577__$1);
var G__56814 = null;
var G__56815 = (0);
var G__56816 = (0);
seq__56577 = G__56813;
chunk__56578 = G__56814;
count__56579 = G__56815;
i__56580 = G__56816;
continue;
}
} else {
return null;
}
}
break;
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
 * Toggle country-pick mode: arrow cursor and map clicks invoke `on-click` when active.
 */
placesurfer.map_ui.core.sync_country_pick_state_BANG_ = (function placesurfer$map_ui$core$sync_country_pick_state_BANG_(p__56581){
var map__56582 = p__56581;
var map__56582__$1 = cljs.core.__destructure_map(map__56582);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56582__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56582__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_country_pick_active_QMARK_,cljs.core.boolean$(active_QMARK_));

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_country_pick_click_handler,(cljs.core.truth_(active_QMARK_)?on_click:null));

var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
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
placesurfer.map_ui.core.sync_add_pin_mode_BANG_ = (function placesurfer$map_ui$core$sync_add_pin_mode_BANG_(p__56583){
var map__56584 = p__56583;
var map__56584__$1 = cljs.core.__destructure_map(map__56584);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56584__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56584__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_,cljs.core.boolean$(active_QMARK_));

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_click_handler,(cljs.core.truth_(active_QMARK_)?on_click:null));

var temp__5825__auto___56817 = cljs.core.deref(placesurfer.map_ui.core._BANG_map_container);
if(cljs.core.truth_(temp__5825__auto___56817)){
var el_56818 = temp__5825__auto___56817;
if(cljs.core.truth_(active_QMARK_)){
el_56818.classList.add("map-add-pin-active");
} else {
el_56818.classList.remove("map-add-pin-active");
}
} else {
}

var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
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
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
if(cljs.core.truth_(placesurfer.map_ui.core.map_ready_QMARK_(m))){
var c = m.getCenter();
var zoom = (function (){try{return m.getZoom();
}catch (e56585){var _ = e56585;
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
var temp__5825__auto__ = placesurfer.map_ui.core.map_view_state();
if(cljs.core.truth_(temp__5825__auto__)){
var view = temp__5825__auto__;
return cljs.core.select_keys(view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"latitude","latitude",394867543)], null));
} else {
return null;
}
});
/**
 * Restore a previously captured {:longitude :latitude :zoom} view.
 */
placesurfer.map_ui.core.fly_to_view_BANG_ = (function placesurfer$map_ui$core$fly_to_view_BANG_(p__56586){
var map__56587 = p__56586;
var map__56587__$1 = cljs.core.__destructure_map(map__56587);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56587__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56587__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56587__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56587__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
if(((typeof longitude === 'number') && (((typeof latitude === 'number') && (typeof zoom === 'number'))))){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom,new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null)));
}catch (e56588){var _ = e56588;
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
placesurfer.map_ui.core.center_on_position_BANG_ = (function placesurfer$map_ui$core$center_on_position_BANG_(p__56589){
var map__56590 = p__56589;
var map__56590__$1 = cljs.core.__destructure_map(map__56590);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56590__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56590__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56590__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),placesurfer.map_ui.core.center_default_zoom);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56590__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
var preserve_zoom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56590__$1,new cljs.core.Keyword(null,"preserve-zoom?","preserve-zoom?",-1650190790));
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js((function (){var G__56592 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null);
if(cljs.core.not(preserve_zoom_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56592,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom);
} else {
return G__56592;
}
})()));
}catch (e56591){var _ = e56591;
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

var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
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

var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_draw_on_map_ready);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
placesurfer.map_ui.core.disconnect_resize_observer_BANG_ = (function placesurfer$map_ui$core$disconnect_resize_observer_BANG_(){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_resize_observer);
if(cljs.core.truth_(temp__5825__auto__)){
var ro = temp__5825__auto__;
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

var temp__5825__auto___56819 = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto___56819)){
var m_56820 = temp__5825__auto___56819;
try{m_56820.remove();
}catch (e56593){var __56821 = e56593;
}} else {
}

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_map,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_map_container,null);

return placesurfer.map_ui.core.clear_markers_BANG_();
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
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
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
placesurfer.map_ui.core.marker_element_for_tests_BANG_ = (function placesurfer$map_ui$core$marker_element_for_tests_BANG_(topic){
return placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$1(topic);
});
placesurfer.map_ui.core.marker_row_hover_class_for_tests = (function placesurfer$map_ui$core$marker_row_hover_class_for_tests(){
return placesurfer.map_ui.core.marker_row_hover_class;
});

//# sourceMappingURL=placesurfer.map_ui.core.js.map
