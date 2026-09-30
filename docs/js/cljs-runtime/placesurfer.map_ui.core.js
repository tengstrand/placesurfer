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
}catch (e77930){var _ = e77930;
return false;
}})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
try{return m.isStyleLoaded() === true;
}catch (e77931){var _ = e77931;
return false;
}}

}
}
});
placesurfer.map_ui.core.safe_resize_BANG_ = (function placesurfer$map_ui$core$safe_resize_BANG_(m){
if(cljs.core.truth_(m)){
try{return m.resize();
}catch (e77932){var _ = e77932;
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
}catch (e77933){var _ = e77933;
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
var G__77934 = (function (){try{return marker.getElement();
}catch (e77935){var _ = e77935;
return null;
}})();
if((G__77934 == null)){
return null;
} else {
return placesurfer.map_ui.core.marker_visual_el(G__77934);
}
});
placesurfer.map_ui.core.marker_element = (function placesurfer$map_ui$core$marker_element(var_args){
var G__77937 = arguments.length;
switch (G__77937) {
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
var map__77938 = placesurfer.map_ui.core.marker_style_for(topic);
var map__77938__$1 = cljs.core.__destructure_map(map__77938);
var width_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77938__$1,new cljs.core.Keyword(null,"width-px","width-px",65122451));
var height_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77938__$1,new cljs.core.Keyword(null,"height-px","height-px",-1391665005));
var background_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77938__$1,new cljs.core.Keyword(null,"background-position","background-position",1112702746));
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77938__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
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

var img_78322 = document.createElement("img");
(img_78322.src = image_url);

(img_78322.alt = "");

(img_78322.draggable = false);

(img_78322.style.width = "100%");

(img_78322.style.height = "100%");

(img_78322.style.display = "block");

(img_78322.style.pointerEvents = "none");

visual.appendChild(img_78322);
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
var seq__77939_78323 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__77940_78324 = null;
var count__77941_78325 = (0);
var i__77942_78326 = (0);
while(true){
if((i__77942_78326 < count__77941_78325)){
var marker_78327 = chunk__77940_78324.cljs$core$IIndexed$_nth$arity$2(null,i__77942_78326);
try{marker_78327.remove();
}catch (e77945){var __78328 = e77945;
}

var G__78329 = seq__77939_78323;
var G__78330 = chunk__77940_78324;
var G__78331 = count__77941_78325;
var G__78332 = (i__77942_78326 + (1));
seq__77939_78323 = G__78329;
chunk__77940_78324 = G__78330;
count__77941_78325 = G__78331;
i__77942_78326 = G__78332;
continue;
} else {
var temp__5825__auto___78333 = cljs.core.seq(seq__77939_78323);
if(temp__5825__auto___78333){
var seq__77939_78334__$1 = temp__5825__auto___78333;
if(cljs.core.chunked_seq_QMARK_(seq__77939_78334__$1)){
var c__5548__auto___78335 = cljs.core.chunk_first(seq__77939_78334__$1);
var G__78336 = cljs.core.chunk_rest(seq__77939_78334__$1);
var G__78337 = c__5548__auto___78335;
var G__78338 = cljs.core.count(c__5548__auto___78335);
var G__78339 = (0);
seq__77939_78323 = G__78336;
chunk__77940_78324 = G__78337;
count__77941_78325 = G__78338;
i__77942_78326 = G__78339;
continue;
} else {
var marker_78340 = cljs.core.first(seq__77939_78334__$1);
try{marker_78340.remove();
}catch (e77946){var __78341 = e77946;
}

var G__78342 = cljs.core.next(seq__77939_78334__$1);
var G__78343 = null;
var G__78344 = (0);
var G__78345 = (0);
seq__77939_78323 = G__78342;
chunk__77940_78324 = G__78343;
count__77941_78325 = G__78344;
i__77942_78326 = G__78345;
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

var seq__77947_78347 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["overflow","hidden"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pointerEvents","none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zIndex","1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display",(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_visible_QMARK_))?"block":"none")], null)], null));
var chunk__77948_78348 = null;
var count__77949_78349 = (0);
var i__77950_78350 = (0);
while(true){
if((i__77950_78350 < count__77949_78349)){
var vec__77957_78351 = chunk__77948_78348.cljs$core$IIndexed$_nth$arity$2(null,i__77950_78350);
var k_78352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77957_78351,(0),null);
var v_78353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77957_78351,(1),null);
(el.style[k_78352] = v_78353);


var G__78354 = seq__77947_78347;
var G__78355 = chunk__77948_78348;
var G__78356 = count__77949_78349;
var G__78357 = (i__77950_78350 + (1));
seq__77947_78347 = G__78354;
chunk__77948_78348 = G__78355;
count__77949_78349 = G__78356;
i__77950_78350 = G__78357;
continue;
} else {
var temp__5825__auto___78358 = cljs.core.seq(seq__77947_78347);
if(temp__5825__auto___78358){
var seq__77947_78359__$1 = temp__5825__auto___78358;
if(cljs.core.chunked_seq_QMARK_(seq__77947_78359__$1)){
var c__5548__auto___78360 = cljs.core.chunk_first(seq__77947_78359__$1);
var G__78361 = cljs.core.chunk_rest(seq__77947_78359__$1);
var G__78362 = c__5548__auto___78360;
var G__78363 = cljs.core.count(c__5548__auto___78360);
var G__78364 = (0);
seq__77947_78347 = G__78361;
chunk__77948_78348 = G__78362;
count__77949_78349 = G__78363;
i__77950_78350 = G__78364;
continue;
} else {
var vec__77960_78365 = cljs.core.first(seq__77947_78359__$1);
var k_78366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77960_78365,(0),null);
var v_78367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77960_78365,(1),null);
(el.style[k_78366] = v_78367);


var G__78368 = cljs.core.next(seq__77947_78359__$1);
var G__78369 = null;
var G__78370 = (0);
var G__78371 = (0);
seq__77947_78347 = G__78368;
chunk__77948_78348 = G__78369;
count__77949_78349 = G__78370;
i__77950_78350 = G__78371;
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
placesurfer.map_ui.core.ref_bounds__GT_box = (function placesurfer$map_ui$core$ref_bounds__GT_box(m,p__77963){
var map__77964 = p__77963;
var map__77964__$1 = cljs.core.__destructure_map(map__77964);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77964__$1,new cljs.core.Keyword(null,"west","west",708776677));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77964__$1,new cljs.core.Keyword(null,"north","north",651323902));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77964__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77964__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var p1 = m.project(({"lng": west, "lat": north}));
var p2 = m.project(({"lng": east, "lat": south}));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),p1.x,new cljs.core.Keyword(null,"y","y",-1757859776),p1.y,new cljs.core.Keyword(null,"w","w",354169001),Math.max((1),(p2.x - p1.x)),new cljs.core.Keyword(null,"h","h",1109658740),Math.max((1),(p2.y - p1.y))], null);
});
placesurfer.map_ui.core.ref_box__GT_bounds = (function placesurfer$map_ui$core$ref_box__GT_bounds(m,p__77965){
var map__77966 = p__77965;
var map__77966__$1 = cljs.core.__destructure_map(map__77966);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77966__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77966__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77966__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77966__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var ll1 = m.unproject([x,y]);
var ll2 = m.unproject([(x + w),(y + h)]);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"west","west",708776677),ll1.lng,new cljs.core.Keyword(null,"north","north",651323902),ll1.lat,new cljs.core.Keyword(null,"east","east",1189821678),ll2.lng,new cljs.core.Keyword(null,"south","south",1586796293),ll2.lat], null);
});
/**
 * Translate pixel box by a mouse delta.
 */
placesurfer.map_ui.core.moved_box = (function placesurfer$map_ui$core$moved_box(p__77967,dx,dy){
var map__77968 = p__77967;
var map__77968__$1 = cljs.core.__destructure_map(map__77968);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77968__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77968__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77968__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77968__$1,new cljs.core.Keyword(null,"h","h",1109658740));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + dy),new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h], null);
});
/**
 * Scale pixel box by dragging `corner` (:nw :ne :sw :se) with mouse delta,
 * keeping the opposite corner fixed and preserving aspect ratio.
 */
placesurfer.map_ui.core.scaled_box = (function placesurfer$map_ui$core$scaled_box(p__77969,corner,dx,dy){
var map__77970 = p__77969;
var map__77970__$1 = cljs.core.__destructure_map(map__77970);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77970__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77970__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77970__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77970__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var aspect = (h / w);
var vec__77971 = (function (){var G__77974 = corner;
var G__77974__$1 = (((G__77974 instanceof cljs.core.Keyword))?G__77974.fqn:null);
switch (G__77974__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77974__$1)].join('')));

}
})();
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77971,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77971,(1),null);
var cx = (function (){var G__77975 = corner;
var G__77975__$1 = (((G__77975 instanceof cljs.core.Keyword))?G__77975.fqn:null);
switch (G__77975__$1) {
case "nw":
case "sw":
return (x + dx);

break;
case "ne":
case "se":
return ((x + w) + dx);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77975__$1)].join('')));

}
})();
var cy = (function (){var G__77976 = corner;
var G__77976__$1 = (((G__77976 instanceof cljs.core.Keyword))?G__77976.fqn:null);
switch (G__77976__$1) {
case "nw":
case "ne":
return (y + dy);

break;
case "sw":
case "se":
return ((y + h) + dy);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77976__$1)].join('')));

}
})();
var nw_SINGLEQUOTE_ = Math.max((20),Math.abs((cx - ax)),(Math.abs((cy - ay)) / aspect));
var nh_SINGLEQUOTE_ = (nw_SINGLEQUOTE_ * aspect);
var G__77977 = corner;
var G__77977__$1 = (((G__77977 instanceof cljs.core.Keyword))?G__77977.fqn:null);
switch (G__77977__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77977__$1)].join('')));

}
});
/**
 * Resize one dimension by dragging an edge midpoint handle (:n :s :e :w),
 * keeping the opposite edge fixed.
 */
placesurfer.map_ui.core.edge_resized_box = (function placesurfer$map_ui$core$edge_resized_box(p__77978,edge,dx,dy){
var map__77979 = p__77978;
var map__77979__$1 = cljs.core.__destructure_map(map__77979);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77979__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77979__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77979__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77979__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var G__77980 = edge;
var G__77980__$1 = (((G__77980 instanceof cljs.core.Keyword))?G__77980.fqn:null);
switch (G__77980__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77980__$1)].join('')));

}
});
placesurfer.map_ui.core.apply_ref_box_BANG_ = (function placesurfer$map_ui$core$apply_ref_box_BANG_(el,p__77981){
var map__77982 = p__77981;
var map__77982__$1 = cljs.core.__destructure_map(map__77982);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77982__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77982__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77982__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77982__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var style = el.style;
(style.transform = ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join(''));

(style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join(''));

return (style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''));
});
placesurfer.map_ui.core.position_ref_images_BANG_ = (function placesurfer$map_ui$core$position_ref_images_BANG_(m){
var seq__77983 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var chunk__77984 = null;
var count__77985 = (0);
var i__77986 = (0);
while(true){
if((i__77986 < count__77985)){
var map__77989 = chunk__77984.cljs$core$IIndexed$_nth$arity$2(null,i__77986);
var map__77989__$1 = cljs.core.__destructure_map(map__77989);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77989__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77989__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var temp__5825__auto___78380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id);
if(cljs.core.truth_(temp__5825__auto___78380)){
var el_78381 = temp__5825__auto___78380;
placesurfer.map_ui.core.apply_ref_box_BANG_(el_78381,placesurfer.map_ui.core.ref_bounds__GT_box(m,bounds));
} else {
}


var G__78382 = seq__77983;
var G__78383 = chunk__77984;
var G__78384 = count__77985;
var G__78385 = (i__77986 + (1));
seq__77983 = G__78382;
chunk__77984 = G__78383;
count__77985 = G__78384;
i__77986 = G__78385;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__77983);
if(temp__5825__auto__){
var seq__77983__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77983__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__77983__$1);
var G__78386 = cljs.core.chunk_rest(seq__77983__$1);
var G__78387 = c__5548__auto__;
var G__78388 = cljs.core.count(c__5548__auto__);
var G__78389 = (0);
seq__77983 = G__78386;
chunk__77984 = G__78387;
count__77985 = G__78388;
i__77986 = G__78389;
continue;
} else {
var map__77990 = cljs.core.first(seq__77983__$1);
var map__77990__$1 = cljs.core.__destructure_map(map__77990);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77990__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77990__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var temp__5825__auto___78390__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id);
if(cljs.core.truth_(temp__5825__auto___78390__$1)){
var el_78391 = temp__5825__auto___78390__$1;
placesurfer.map_ui.core.apply_ref_box_BANG_(el_78391,placesurfer.map_ui.core.ref_bounds__GT_box(m,bounds));
} else {
}


var G__78392 = cljs.core.next(seq__77983__$1);
var G__78393 = null;
var G__78394 = (0);
var G__78395 = (0);
seq__77983 = G__78392;
chunk__77984 = G__78393;
count__77985 = G__78394;
i__77986 = G__78395;
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
var img = cljs.core.some((function (p1__77991_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__77991_SHARP_),id)){
return p1__77991_SHARP_;
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
var box = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),mode))?placesurfer.map_ui.core.moved_box(box0,dx,dy):(cljs.core.truth_((function (){var fexpr__77993 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"s","s",1705939918),null], null), null);
return (fexpr__77993.cljs$core$IFn$_invoke$arity$1 ? fexpr__77993.cljs$core$IFn$_invoke$arity$1(mode) : fexpr__77993.call(null,mode));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__77992_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__77992_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__77992_SHARP_,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds);
} else {
return p1__77992_SHARP_;
}
}),imgs);
}));

var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_ref_on_change);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(id,bounds) : f.call(null,id,bounds));
} else {
return null;
}
}));

window.addEventListener("mousemove",on_move);

return window.addEventListener("mouseup",cljs.core.deref(on_up));
});
placesurfer.map_ui.core.refresh_ref_el_mode_BANG_ = (function placesurfer$map_ui$core$refresh_ref_el_mode_BANG_(id){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id);
if(cljs.core.truth_(temp__5825__auto__)){
var wrap = temp__5825__auto__;
var adjust_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(placesurfer.map_ui.core._BANG_ref_adjust_id));
var img = cljs.core.some((function (p1__77994_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__77994_SHARP_),id)){
return p1__77994_SHARP_;
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

var temp__5825__auto___78396__$1 = wrap.querySelector("img");
if(cljs.core.truth_(temp__5825__auto___78396__$1)){
var im_78397 = temp__5825__auto___78396__$1;
(im_78397.style.opacity = cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity));
} else {
}

var seq__77995 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(wrap.querySelectorAll(".placesurfer-ref-handle")));
var chunk__77996 = null;
var count__77997 = (0);
var i__77998 = (0);
while(true){
if((i__77998 < count__77997)){
var h = chunk__77996.cljs$core$IIndexed$_nth$arity$2(null,i__77998);
(h.style.display = ((adjust_QMARK_)?"block":"none"));


var G__78398 = seq__77995;
var G__78399 = chunk__77996;
var G__78400 = count__77997;
var G__78401 = (i__77998 + (1));
seq__77995 = G__78398;
chunk__77996 = G__78399;
count__77997 = G__78400;
i__77998 = G__78401;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__77995);
if(temp__5825__auto____$1){
var seq__77995__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__77995__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__77995__$1);
var G__78402 = cljs.core.chunk_rest(seq__77995__$1);
var G__78403 = c__5548__auto__;
var G__78404 = cljs.core.count(c__5548__auto__);
var G__78405 = (0);
seq__77995 = G__78402;
chunk__77996 = G__78403;
count__77997 = G__78404;
i__77998 = G__78405;
continue;
} else {
var h = cljs.core.first(seq__77995__$1);
(h.style.display = ((adjust_QMARK_)?"block":"none"));


var G__78406 = cljs.core.next(seq__77995__$1);
var G__78407 = null;
var G__78408 = (0);
var G__78409 = (0);
seq__77995 = G__78406;
chunk__77996 = G__78407;
count__77997 = G__78408;
i__77998 = G__78409;
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
placesurfer.map_ui.core.make_ref_el_BANG_ = (function placesurfer$map_ui$core$make_ref_el_BANG_(m,p__77999){
var map__78000 = p__77999;
var map__78000__$1 = cljs.core.__destructure_map(map__78000);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78000__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var image_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78000__$1,new cljs.core.Keyword(null,"image-url","image-url",-1064784064));
var wrap = document.createElement("div");
var img = document.createElement("img");
(wrap.className = "placesurfer-ref-image");

var seq__78001_78410 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pointerEvents","none"], null)], null));
var chunk__78002_78411 = null;
var count__78003_78412 = (0);
var i__78004_78413 = (0);
while(true){
if((i__78004_78413 < count__78003_78412)){
var vec__78011_78414 = chunk__78002_78411.cljs$core$IIndexed$_nth$arity$2(null,i__78004_78413);
var k_78415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78011_78414,(0),null);
var v_78416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78011_78414,(1),null);
(wrap.style[k_78415] = v_78416);


var G__78417 = seq__78001_78410;
var G__78418 = chunk__78002_78411;
var G__78419 = count__78003_78412;
var G__78420 = (i__78004_78413 + (1));
seq__78001_78410 = G__78417;
chunk__78002_78411 = G__78418;
count__78003_78412 = G__78419;
i__78004_78413 = G__78420;
continue;
} else {
var temp__5825__auto___78421 = cljs.core.seq(seq__78001_78410);
if(temp__5825__auto___78421){
var seq__78001_78422__$1 = temp__5825__auto___78421;
if(cljs.core.chunked_seq_QMARK_(seq__78001_78422__$1)){
var c__5548__auto___78423 = cljs.core.chunk_first(seq__78001_78422__$1);
var G__78424 = cljs.core.chunk_rest(seq__78001_78422__$1);
var G__78425 = c__5548__auto___78423;
var G__78426 = cljs.core.count(c__5548__auto___78423);
var G__78427 = (0);
seq__78001_78410 = G__78424;
chunk__78002_78411 = G__78425;
count__78003_78412 = G__78426;
i__78004_78413 = G__78427;
continue;
} else {
var vec__78014_78428 = cljs.core.first(seq__78001_78422__$1);
var k_78429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78014_78428,(0),null);
var v_78430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78014_78428,(1),null);
(wrap.style[k_78429] = v_78430);


var G__78431 = cljs.core.next(seq__78001_78422__$1);
var G__78432 = null;
var G__78433 = (0);
var G__78434 = (0);
seq__78001_78410 = G__78431;
chunk__78002_78411 = G__78432;
count__78003_78412 = G__78433;
i__78004_78413 = G__78434;
continue;
}
} else {
}
}
break;
}

(img.src = image_url);

(img.draggable = false);

var seq__78017_78435 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["userSelect","none"], null)], null));
var chunk__78018_78436 = null;
var count__78019_78437 = (0);
var i__78020_78438 = (0);
while(true){
if((i__78020_78438 < count__78019_78437)){
var vec__78027_78439 = chunk__78018_78436.cljs$core$IIndexed$_nth$arity$2(null,i__78020_78438);
var k_78440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78027_78439,(0),null);
var v_78441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78027_78439,(1),null);
(img.style[k_78440] = v_78441);


var G__78442 = seq__78017_78435;
var G__78443 = chunk__78018_78436;
var G__78444 = count__78019_78437;
var G__78445 = (i__78020_78438 + (1));
seq__78017_78435 = G__78442;
chunk__78018_78436 = G__78443;
count__78019_78437 = G__78444;
i__78020_78438 = G__78445;
continue;
} else {
var temp__5825__auto___78446 = cljs.core.seq(seq__78017_78435);
if(temp__5825__auto___78446){
var seq__78017_78447__$1 = temp__5825__auto___78446;
if(cljs.core.chunked_seq_QMARK_(seq__78017_78447__$1)){
var c__5548__auto___78448 = cljs.core.chunk_first(seq__78017_78447__$1);
var G__78449 = cljs.core.chunk_rest(seq__78017_78447__$1);
var G__78450 = c__5548__auto___78448;
var G__78451 = cljs.core.count(c__5548__auto___78448);
var G__78452 = (0);
seq__78017_78435 = G__78449;
chunk__78018_78436 = G__78450;
count__78019_78437 = G__78451;
i__78020_78438 = G__78452;
continue;
} else {
var vec__78030_78453 = cljs.core.first(seq__78017_78447__$1);
var k_78454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78030_78453,(0),null);
var v_78455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78030_78453,(1),null);
(img.style[k_78454] = v_78455);


var G__78456 = cljs.core.next(seq__78017_78447__$1);
var G__78457 = null;
var G__78458 = (0);
var G__78459 = (0);
seq__78017_78435 = G__78456;
chunk__78018_78436 = G__78457;
count__78019_78437 = G__78458;
i__78020_78438 = G__78459;
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

var seq__78033_78460 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null));
var chunk__78034_78461 = null;
var count__78035_78462 = (0);
var i__78036_78463 = (0);
while(true){
if((i__78036_78463 < count__78035_78462)){
var handle_78464 = chunk__78034_78461.cljs$core$IIndexed$_nth$arity$2(null,i__78036_78463);
var h_78465 = document.createElement("div");
(h_78465.className = "placesurfer-ref-handle");

var seq__78073_78466 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background","#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","2px solid #2b6cb0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boxSizing","border-box"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","none"], null)], null),(function (){var G__78084 = handle_78464;
var G__78084__$1 = (((G__78084 instanceof cljs.core.Keyword))?G__78084.fqn:null);
switch (G__78084__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78084__$1)].join('')));

}
})()));
var chunk__78074_78467 = null;
var count__78075_78468 = (0);
var i__78076_78469 = (0);
while(true){
if((i__78076_78469 < count__78075_78468)){
var vec__78085_78471 = chunk__78074_78467.cljs$core$IIndexed$_nth$arity$2(null,i__78076_78469);
var k_78472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78085_78471,(0),null);
var v_78473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78085_78471,(1),null);
(h_78465.style[k_78472] = v_78473);


var G__78474 = seq__78073_78466;
var G__78475 = chunk__78074_78467;
var G__78476 = count__78075_78468;
var G__78477 = (i__78076_78469 + (1));
seq__78073_78466 = G__78474;
chunk__78074_78467 = G__78475;
count__78075_78468 = G__78476;
i__78076_78469 = G__78477;
continue;
} else {
var temp__5825__auto___78478 = cljs.core.seq(seq__78073_78466);
if(temp__5825__auto___78478){
var seq__78073_78479__$1 = temp__5825__auto___78478;
if(cljs.core.chunked_seq_QMARK_(seq__78073_78479__$1)){
var c__5548__auto___78480 = cljs.core.chunk_first(seq__78073_78479__$1);
var G__78481 = cljs.core.chunk_rest(seq__78073_78479__$1);
var G__78482 = c__5548__auto___78480;
var G__78483 = cljs.core.count(c__5548__auto___78480);
var G__78484 = (0);
seq__78073_78466 = G__78481;
chunk__78074_78467 = G__78482;
count__78075_78468 = G__78483;
i__78076_78469 = G__78484;
continue;
} else {
var vec__78088_78485 = cljs.core.first(seq__78073_78479__$1);
var k_78486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78088_78485,(0),null);
var v_78487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78088_78485,(1),null);
(h_78465.style[k_78486] = v_78487);


var G__78488 = cljs.core.next(seq__78073_78479__$1);
var G__78489 = null;
var G__78490 = (0);
var G__78491 = (0);
seq__78073_78466 = G__78488;
chunk__78074_78467 = G__78489;
count__78075_78468 = G__78490;
i__78076_78469 = G__78491;
continue;
}
} else {
}
}
break;
}

h_78465.addEventListener("mousedown",((function (seq__78033_78460,chunk__78034_78461,count__78035_78462,i__78036_78463,h_78465,handle_78464,wrap,img,map__78000,map__78000__$1,id,image_url){
return (function (e){
return placesurfer.map_ui.core.start_ref_drag_BANG_(m,id,e,handle_78464);
});})(seq__78033_78460,chunk__78034_78461,count__78035_78462,i__78036_78463,h_78465,handle_78464,wrap,img,map__78000,map__78000__$1,id,image_url))
);

wrap.appendChild(h_78465);


var G__78492 = seq__78033_78460;
var G__78493 = chunk__78034_78461;
var G__78494 = count__78035_78462;
var G__78495 = (i__78036_78463 + (1));
seq__78033_78460 = G__78492;
chunk__78034_78461 = G__78493;
count__78035_78462 = G__78494;
i__78036_78463 = G__78495;
continue;
} else {
var temp__5825__auto___78496 = cljs.core.seq(seq__78033_78460);
if(temp__5825__auto___78496){
var seq__78033_78497__$1 = temp__5825__auto___78496;
if(cljs.core.chunked_seq_QMARK_(seq__78033_78497__$1)){
var c__5548__auto___78498 = cljs.core.chunk_first(seq__78033_78497__$1);
var G__78499 = cljs.core.chunk_rest(seq__78033_78497__$1);
var G__78500 = c__5548__auto___78498;
var G__78501 = cljs.core.count(c__5548__auto___78498);
var G__78502 = (0);
seq__78033_78460 = G__78499;
chunk__78034_78461 = G__78500;
count__78035_78462 = G__78501;
i__78036_78463 = G__78502;
continue;
} else {
var handle_78503 = cljs.core.first(seq__78033_78497__$1);
var h_78504 = document.createElement("div");
(h_78504.className = "placesurfer-ref-handle");

var seq__78091_78505 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height","14px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background","#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","2px solid #2b6cb0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boxSizing","border-box"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","none"], null)], null),(function (){var G__78102 = handle_78503;
var G__78102__$1 = (((G__78102 instanceof cljs.core.Keyword))?G__78102.fqn:null);
switch (G__78102__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78102__$1)].join('')));

}
})()));
var chunk__78092_78506 = null;
var count__78093_78507 = (0);
var i__78094_78508 = (0);
while(true){
if((i__78094_78508 < count__78093_78507)){
var vec__78103_78510 = chunk__78092_78506.cljs$core$IIndexed$_nth$arity$2(null,i__78094_78508);
var k_78511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78103_78510,(0),null);
var v_78512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78103_78510,(1),null);
(h_78504.style[k_78511] = v_78512);


var G__78513 = seq__78091_78505;
var G__78514 = chunk__78092_78506;
var G__78515 = count__78093_78507;
var G__78516 = (i__78094_78508 + (1));
seq__78091_78505 = G__78513;
chunk__78092_78506 = G__78514;
count__78093_78507 = G__78515;
i__78094_78508 = G__78516;
continue;
} else {
var temp__5825__auto___78517__$1 = cljs.core.seq(seq__78091_78505);
if(temp__5825__auto___78517__$1){
var seq__78091_78518__$1 = temp__5825__auto___78517__$1;
if(cljs.core.chunked_seq_QMARK_(seq__78091_78518__$1)){
var c__5548__auto___78519 = cljs.core.chunk_first(seq__78091_78518__$1);
var G__78520 = cljs.core.chunk_rest(seq__78091_78518__$1);
var G__78521 = c__5548__auto___78519;
var G__78522 = cljs.core.count(c__5548__auto___78519);
var G__78523 = (0);
seq__78091_78505 = G__78520;
chunk__78092_78506 = G__78521;
count__78093_78507 = G__78522;
i__78094_78508 = G__78523;
continue;
} else {
var vec__78106_78524 = cljs.core.first(seq__78091_78518__$1);
var k_78525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78106_78524,(0),null);
var v_78526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78106_78524,(1),null);
(h_78504.style[k_78525] = v_78526);


var G__78527 = cljs.core.next(seq__78091_78518__$1);
var G__78528 = null;
var G__78529 = (0);
var G__78530 = (0);
seq__78091_78505 = G__78527;
chunk__78092_78506 = G__78528;
count__78093_78507 = G__78529;
i__78094_78508 = G__78530;
continue;
}
} else {
}
}
break;
}

h_78504.addEventListener("mousedown",((function (seq__78033_78460,chunk__78034_78461,count__78035_78462,i__78036_78463,h_78504,handle_78503,seq__78033_78497__$1,temp__5825__auto___78496,wrap,img,map__78000,map__78000__$1,id,image_url){
return (function (e){
return placesurfer.map_ui.core.start_ref_drag_BANG_(m,id,e,handle_78503);
});})(seq__78033_78460,chunk__78034_78461,count__78035_78462,i__78036_78463,h_78504,handle_78503,seq__78033_78497__$1,temp__5825__auto___78496,wrap,img,map__78000,map__78000__$1,id,image_url))
);

wrap.appendChild(h_78504);


var G__78531 = cljs.core.next(seq__78033_78497__$1);
var G__78532 = null;
var G__78533 = (0);
var G__78534 = (0);
seq__78033_78460 = G__78531;
chunk__78034_78461 = G__78532;
count__78035_78462 = G__78533;
i__78036_78463 = G__78534;
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
var seq__78109_78535 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els));
var chunk__78110_78536 = null;
var count__78111_78537 = (0);
var i__78112_78538 = (0);
while(true){
if((i__78112_78538 < count__78111_78537)){
var vec__78119_78539 = chunk__78110_78536.cljs$core$IIndexed$_nth$arity$2(null,i__78112_78538);
var id_78540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78119_78539,(0),null);
var el_78541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78119_78539,(1),null);
if(cljs.core.contains_QMARK_(ids,id_78540)){
} else {
el_78541.remove();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_ref_els,cljs.core.dissoc,id_78540);
}


var G__78542 = seq__78109_78535;
var G__78543 = chunk__78110_78536;
var G__78544 = count__78111_78537;
var G__78545 = (i__78112_78538 + (1));
seq__78109_78535 = G__78542;
chunk__78110_78536 = G__78543;
count__78111_78537 = G__78544;
i__78112_78538 = G__78545;
continue;
} else {
var temp__5825__auto___78546 = cljs.core.seq(seq__78109_78535);
if(temp__5825__auto___78546){
var seq__78109_78547__$1 = temp__5825__auto___78546;
if(cljs.core.chunked_seq_QMARK_(seq__78109_78547__$1)){
var c__5548__auto___78548 = cljs.core.chunk_first(seq__78109_78547__$1);
var G__78549 = cljs.core.chunk_rest(seq__78109_78547__$1);
var G__78550 = c__5548__auto___78548;
var G__78551 = cljs.core.count(c__5548__auto___78548);
var G__78552 = (0);
seq__78109_78535 = G__78549;
chunk__78110_78536 = G__78550;
count__78111_78537 = G__78551;
i__78112_78538 = G__78552;
continue;
} else {
var vec__78122_78553 = cljs.core.first(seq__78109_78547__$1);
var id_78554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78122_78553,(0),null);
var el_78555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78122_78553,(1),null);
if(cljs.core.contains_QMARK_(ids,id_78554)){
} else {
el_78555.remove();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_ref_els,cljs.core.dissoc,id_78554);
}


var G__78556 = cljs.core.next(seq__78109_78547__$1);
var G__78557 = null;
var G__78558 = (0);
var G__78559 = (0);
seq__78109_78535 = G__78556;
chunk__78110_78536 = G__78557;
count__78111_78537 = G__78558;
i__78112_78538 = G__78559;
continue;
}
} else {
}
}
break;
}

var seq__78125_78560 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var chunk__78126_78561 = null;
var count__78127_78562 = (0);
var i__78128_78563 = (0);
while(true){
if((i__78128_78563 < count__78127_78562)){
var map__78131_78564 = chunk__78126_78561.cljs$core$IIndexed$_nth$arity$2(null,i__78128_78563);
var map__78131_78565__$1 = cljs.core.__destructure_map(map__78131_78564);
var img_78566 = map__78131_78565__$1;
var id_78567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78131_78565__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id_78567))){
} else {
var el_78568 = placesurfer.map_ui.core.make_ref_el_BANG_(m,img_78566);
cont.appendChild(el_78568);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.map_ui.core._BANG_ref_els,cljs.core.assoc,id_78567,el_78568);
}

placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id_78567);


var G__78569 = seq__78125_78560;
var G__78570 = chunk__78126_78561;
var G__78571 = count__78127_78562;
var G__78572 = (i__78128_78563 + (1));
seq__78125_78560 = G__78569;
chunk__78126_78561 = G__78570;
count__78127_78562 = G__78571;
i__78128_78563 = G__78572;
continue;
} else {
var temp__5825__auto___78573 = cljs.core.seq(seq__78125_78560);
if(temp__5825__auto___78573){
var seq__78125_78574__$1 = temp__5825__auto___78573;
if(cljs.core.chunked_seq_QMARK_(seq__78125_78574__$1)){
var c__5548__auto___78575 = cljs.core.chunk_first(seq__78125_78574__$1);
var G__78576 = cljs.core.chunk_rest(seq__78125_78574__$1);
var G__78577 = c__5548__auto___78575;
var G__78578 = cljs.core.count(c__5548__auto___78575);
var G__78579 = (0);
seq__78125_78560 = G__78576;
chunk__78126_78561 = G__78577;
count__78127_78562 = G__78578;
i__78128_78563 = G__78579;
continue;
} else {
var map__78132_78580 = cljs.core.first(seq__78125_78574__$1);
var map__78132_78581__$1 = cljs.core.__destructure_map(map__78132_78580);
var img_78582 = map__78132_78581__$1;
var id_78583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78132_78581__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_els),id_78583))){
} else {
var el_78584 = placesurfer.map_ui.core.make_ref_el_BANG_(m,img_78582);
cont.appendChild(el_78584);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.map_ui.core._BANG_ref_els,cljs.core.assoc,id_78583,el_78584);
}

placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id_78583);


var G__78585 = cljs.core.next(seq__78125_78574__$1);
var G__78586 = null;
var G__78587 = (0);
var G__78588 = (0);
seq__78125_78560 = G__78585;
chunk__78126_78561 = G__78586;
count__78127_78562 = G__78587;
i__78128_78563 = G__78588;
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

var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_ref_container);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
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
return cljs.core.not_any_QMARK_((function (p1__78133_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__78133_SHARP_),cljs.core.deref(placesurfer.map_ui.core._BANG_ref_adjust_id));
}),images);
} else {
return and__5023__auto__;
}
})())){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_ref_adjust_id,null);
} else {
}

var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
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

var seq__78134 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_ref_images));
var chunk__78135 = null;
var count__78136 = (0);
var i__78137 = (0);
while(true){
if((i__78137 < count__78136)){
var map__78140 = chunk__78135.cljs$core$IIndexed$_nth$arity$2(null,i__78137);
var map__78140__$1 = cljs.core.__destructure_map(map__78140);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78140__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id__$1);


var G__78589 = seq__78134;
var G__78590 = chunk__78135;
var G__78591 = count__78136;
var G__78592 = (i__78137 + (1));
seq__78134 = G__78589;
chunk__78135 = G__78590;
count__78136 = G__78591;
i__78137 = G__78592;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__78134);
if(temp__5825__auto__){
var seq__78134__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78134__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__78134__$1);
var G__78593 = cljs.core.chunk_rest(seq__78134__$1);
var G__78594 = c__5548__auto__;
var G__78595 = cljs.core.count(c__5548__auto__);
var G__78596 = (0);
seq__78134 = G__78593;
chunk__78135 = G__78594;
count__78136 = G__78595;
i__78137 = G__78596;
continue;
} else {
var map__78141 = cljs.core.first(seq__78134__$1);
var map__78141__$1 = cljs.core.__destructure_map(map__78141);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78141__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
placesurfer.map_ui.core.refresh_ref_el_mode_BANG_(id__$1);


var G__78597 = cljs.core.next(seq__78134__$1);
var G__78598 = null;
var G__78599 = (0);
var G__78600 = (0);
seq__78134 = G__78597;
chunk__78135 = G__78598;
count__78136 = G__78599;
i__78137 = G__78600;
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78142_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__78142_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__78142_SHARP_,new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity);
} else {
return p1__78142_SHARP_;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__78143){
var vec__78144 = p__78143;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78144,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78144,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
}),ring);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__78147){
var vec__78148 = p__78147;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78148,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78148,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wip","wip",-103467282),true], null)], null);
}),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),(function (){var G__78151 = cljs.core.vec(verts);
var G__78151__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__78151,done)
;
if(cljs.core.truth_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78151__$1,cur);
} else {
return G__78151__$1;
}
})()], null);
});
placesurfer.map_ui.core.refresh_draw_BANG_ = (function placesurfer$map_ui$core$refresh_draw_BANG_(m){
var temp__5825__auto__ = (function (){try{return m.getSource(placesurfer.map_ui.core.draw_src);
}catch (e78152){var _ = e78152;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var src = temp__5825__auto__;
return src.setData(cljs.core.clj__GT_js(placesurfer.map_ui.core.draw_fc()));
} else {
return null;
}
});
placesurfer.map_ui.core.color__GT_rgb = (function placesurfer$map_ui$core$color__GT_rgb(p__78153){
var map__78154 = p__78153;
var map__78154__$1 = cljs.core.__destructure_map(map__78154);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78154__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78154__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78154__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78154__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var l = ((function (){var or__5025__auto__ = lightness;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() / (100));
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((r + (((255) - r) * l)))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((g + (((255) - g) * l)))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((b + (((255) - b) * l)))),")"].join('');
});
placesurfer.map_ui.core.color__GT_alpha = (function placesurfer$map_ui$core$color__GT_alpha(p__78155){
var map__78156 = p__78155;
var map__78156__$1 = cljs.core.__destructure_map(map__78156);
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78156__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
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

var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var rgb = placesurfer.map_ui.core.color__GT_rgb(color);
var alpha = placesurfer.map_ui.core.color__GT_alpha(color);
try{if(cljs.core.truth_((function (){try{return m.getLayer(placesurfer.map_ui.core.draw_fill);
}catch (e78158){var _ = e78158;
return null;
}})())){
m.setPaintProperty(placesurfer.map_ui.core.draw_fill,"fill-color",rgb);

m.setPaintProperty(placesurfer.map_ui.core.draw_fill,"fill-opacity",alpha);
} else {
}

if(cljs.core.truth_((function (){try{return m.getLayer(placesurfer.map_ui.core.draw_line);
}catch (e78159){var _ = e78159;
return null;
}})())){
return m.setPaintProperty(placesurfer.map_ui.core.draw_line,"line-color",rgb);
} else {
return null;
}
}catch (e78157){var _ = e78157;
return null;
}} else {
return null;
}
});
placesurfer.map_ui.core.set_draw_layer_visibility_BANG_ = (function placesurfer$map_ui$core$set_draw_layer_visibility_BANG_(m,layer_id,visible_QMARK_){
try{if(cljs.core.truth_((function (){try{return m.getLayer(layer_id);
}catch (e78161){var _ = e78161;
return null;
}})())){
return m.setLayoutProperty(layer_id,"visibility",(cljs.core.truth_(visible_QMARK_)?"visible":"none"));
} else {
return null;
}
}catch (e78160){var _ = e78160;
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
}catch (e78162){var _ = e78162;
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
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (vidx,p__78163){
var vec__78164 = p__78163;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78164,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78164,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"polygon-idx","polygon-idx",1216671533),pidx,new cljs.core.Keyword(null,"vertex-idx","vertex-idx",676111409),vidx,new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"lat","lat",-580793929),lat], null);
}),ring);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)], 0)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (vidx,p__78167){
var vec__78168 = p__78167;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78168,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78168,(1),null);
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
var G__78171 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v);
var G__78171__$1 = (((G__78171 instanceof cljs.core.Keyword))?G__78171.fqn:null);
switch (G__78171__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78171__$1)].join('')));

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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_ring,(function (p1__78172_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__78172_SHARP_));
}));
} else {
if(cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons))){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.last(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_polygons,(function (p1__78173_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__78173_SHARP_));
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
var seq__78174 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_click_fn,"click"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_mm_fn,"mousemove"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_md_fn,"mousedown"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_mu_fn,"mouseup"], null)], null));
var chunk__78175 = null;
var count__78176 = (0);
var i__78177 = (0);
while(true){
if((i__78177 < count__78176)){
var vec__78186 = chunk__78175.cljs$core$IIndexed$_nth$arity$2(null,i__78177);
var _BANG_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78186,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78186,(1),null);
var temp__5825__auto___78602 = cljs.core.deref(_BANG_a);
if(cljs.core.truth_(temp__5825__auto___78602)){
var f_78603 = temp__5825__auto___78602;
try{m.off(ev,f_78603);
}catch (e78189){var __78604 = e78189;
}
cljs.core.reset_BANG_(_BANG_a,null);
} else {
}


var G__78605 = seq__78174;
var G__78606 = chunk__78175;
var G__78607 = count__78176;
var G__78608 = (i__78177 + (1));
seq__78174 = G__78605;
chunk__78175 = G__78606;
count__78176 = G__78607;
i__78177 = G__78608;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__78174);
if(temp__5825__auto__){
var seq__78174__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78174__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__78174__$1);
var G__78609 = cljs.core.chunk_rest(seq__78174__$1);
var G__78610 = c__5548__auto__;
var G__78611 = cljs.core.count(c__5548__auto__);
var G__78612 = (0);
seq__78174 = G__78609;
chunk__78175 = G__78610;
count__78176 = G__78611;
i__78177 = G__78612;
continue;
} else {
var vec__78190 = cljs.core.first(seq__78174__$1);
var _BANG_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78190,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78190,(1),null);
var temp__5825__auto___78613__$1 = cljs.core.deref(_BANG_a);
if(cljs.core.truth_(temp__5825__auto___78613__$1)){
var f_78614 = temp__5825__auto___78613__$1;
try{m.off(ev,f_78614);
}catch (e78193){var __78615 = e78193;
}
cljs.core.reset_BANG_(_BANG_a,null);
} else {
}


var G__78616 = cljs.core.next(seq__78174__$1);
var G__78617 = null;
var G__78618 = (0);
var G__78619 = (0);
seq__78174 = G__78616;
chunk__78175 = G__78617;
count__78176 = G__78618;
i__78177 = G__78619;
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
var ll_78620 = e.lngLat;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ll_78620.lng,ll_78620.lat], null));

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
var ll_78621 = e.lngLat;
placesurfer.map_ui.core.move_vertex_BANG_(ds,ll_78621.lng,ll_78621.lat);

return placesurfer.map_ui.core.refresh_draw_BANG_(m);
} else {
var v = placesurfer.map_ui.core.vertex_near_screen(m,x,y,(8));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_hover_v,v);

var G__78194 = m;
var G__78195 = (cljs.core.truth_(v)?"pointer":"default");
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(G__78194,G__78195) : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,G__78194,G__78195));
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
}catch (e78196){var __78622 = e78196;
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
}catch (e78197){var __78623 = e78197;
}
var G__78198 = m;
var G__78199 = (cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_hover_v))?"pointer":"default");
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(G__78198,G__78199) : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,G__78198,G__78199));
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

var seq__78200 = cljs.core.seq(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["padding","4px 8px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fontSize","11px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fontWeight","600"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["color","white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginBottom","2px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","3px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textAlign","left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background",bg], null)], null));
var chunk__78201 = null;
var count__78202 = (0);
var i__78203 = (0);
while(true){
if((i__78203 < count__78202)){
var vec__78210 = chunk__78201.cljs$core$IIndexed$_nth$arity$2(null,i__78203);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78210,(1),null);
(el.style[k] = v);


var G__78624 = seq__78200;
var G__78625 = chunk__78201;
var G__78626 = count__78202;
var G__78627 = (i__78203 + (1));
seq__78200 = G__78624;
chunk__78201 = G__78625;
count__78202 = G__78626;
i__78203 = G__78627;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__78200);
if(temp__5825__auto__){
var seq__78200__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78200__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__78200__$1);
var G__78628 = cljs.core.chunk_rest(seq__78200__$1);
var G__78629 = c__5548__auto__;
var G__78630 = cljs.core.count(c__5548__auto__);
var G__78631 = (0);
seq__78200 = G__78628;
chunk__78201 = G__78629;
count__78202 = G__78630;
i__78203 = G__78631;
continue;
} else {
var vec__78213 = cljs.core.first(seq__78200__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78213,(1),null);
(el.style[k] = v);


var G__78632 = cljs.core.next(seq__78200__$1);
var G__78633 = null;
var G__78634 = (0);
var G__78635 = (0);
seq__78200 = G__78632;
chunk__78201 = G__78633;
count__78202 = G__78634;
i__78203 = G__78635;
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
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_ref_on_paste);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
var G__78216 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__78216) : f.call(null,G__78216));
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
}catch (e78217){var __78636 = e78217;
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

var seq__78218_78637 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [toggle_btn,close_btn,undo_btn,clear_btn,paste_btn,save_btn], null));
var chunk__78219_78638 = null;
var count__78220_78639 = (0);
var i__78221_78640 = (0);
while(true){
if((i__78221_78640 < count__78220_78639)){
var b_78641 = chunk__78219_78638.cljs$core$IIndexed$_nth$arity$2(null,i__78221_78640);
el.appendChild(b_78641);


var G__78642 = seq__78218_78637;
var G__78643 = chunk__78219_78638;
var G__78644 = count__78220_78639;
var G__78645 = (i__78221_78640 + (1));
seq__78218_78637 = G__78642;
chunk__78219_78638 = G__78643;
count__78220_78639 = G__78644;
i__78221_78640 = G__78645;
continue;
} else {
var temp__5825__auto___78646 = cljs.core.seq(seq__78218_78637);
if(temp__5825__auto___78646){
var seq__78218_78647__$1 = temp__5825__auto___78646;
if(cljs.core.chunked_seq_QMARK_(seq__78218_78647__$1)){
var c__5548__auto___78648 = cljs.core.chunk_first(seq__78218_78647__$1);
var G__78649 = cljs.core.chunk_rest(seq__78218_78647__$1);
var G__78650 = c__5548__auto___78648;
var G__78651 = cljs.core.count(c__5548__auto___78648);
var G__78652 = (0);
seq__78218_78637 = G__78649;
chunk__78219_78638 = G__78650;
count__78220_78639 = G__78651;
i__78221_78640 = G__78652;
continue;
} else {
var b_78653 = cljs.core.first(seq__78218_78647__$1);
el.appendChild(b_78653);


var G__78654 = cljs.core.next(seq__78218_78647__$1);
var G__78655 = null;
var G__78656 = (0);
var G__78657 = (0);
seq__78218_78637 = G__78654;
chunk__78219_78638 = G__78655;
count__78220_78639 = G__78656;
i__78221_78640 = G__78657;
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

var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_active_QMARK_))){
placesurfer.map_ui.core.detach_draw_handlers_BANG_(m);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_active_QMARK_,false);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_drag,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_hover_v,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_skip_click_QMARK_,false);

try{m.dragPan.enable();
}catch (e78222){var __78658 = e78222;
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
var features_78659 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(geojson.features,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var rings_78660 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (f){
var coords = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),(0)], null));
if(cljs.core.seq(coords)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__78223){
var vec__78224 = p__78223;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78224,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78224,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null);
}),cljs.core.butlast(coords));
} else {
return null;
}
}),features_78659);
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_polygons,cljs.core.vec(rings_78660));
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
}catch (e78227){var _ = e78227;
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
}catch (e78228){var _ = e78228;
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
}catch (e78229){var _ = e78229;
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
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__78230){
var map__78231 = p__78230;
var map__78231__$1 = cljs.core.__destructure_map(map__78231);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78231__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78231__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var area_radii = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78231__$1,new cljs.core.Keyword(null,"area-radii","area-radii",1413411485));
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
}catch (e78232){var _ = e78232;
return null;
}});
placesurfer.map_ui.core.reset_marker_layering_BANG_ = (function placesurfer$map_ui$core$reset_marker_layering_BANG_(){
var seq__78233 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__78234 = null;
var count__78235 = (0);
var i__78236 = (0);
while(true){
if((i__78236 < count__78235)){
var marker = chunk__78234.cljs$core$IIndexed$_nth$arity$2(null,i__78236);
var temp__5825__auto___78661 = (function (){try{return marker.getElement();
}catch (e78239){var _ = e78239;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___78661)){
var el_78662 = temp__5825__auto___78661;
(el_78662.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__78663 = seq__78233;
var G__78664 = chunk__78234;
var G__78665 = count__78235;
var G__78666 = (i__78236 + (1));
seq__78233 = G__78663;
chunk__78234 = G__78664;
count__78235 = G__78665;
i__78236 = G__78666;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__78233);
if(temp__5825__auto__){
var seq__78233__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78233__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__78233__$1);
var G__78667 = cljs.core.chunk_rest(seq__78233__$1);
var G__78668 = c__5548__auto__;
var G__78669 = cljs.core.count(c__5548__auto__);
var G__78670 = (0);
seq__78233 = G__78667;
chunk__78234 = G__78668;
count__78235 = G__78669;
i__78236 = G__78670;
continue;
} else {
var marker = cljs.core.first(seq__78233__$1);
var temp__5825__auto___78671__$1 = (function (){try{return marker.getElement();
}catch (e78240){var _ = e78240;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___78671__$1)){
var el_78672 = temp__5825__auto___78671__$1;
(el_78672.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__78673 = cljs.core.next(seq__78233__$1);
var G__78674 = null;
var G__78675 = (0);
var G__78676 = (0);
seq__78233 = G__78673;
chunk__78234 = G__78674;
count__78235 = G__78675;
i__78236 = G__78676;
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
}catch (e78241){var _ = e78241;
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
}catch (e78242){var _ = e78242;
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
}catch (e78243){var _ = e78243;
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
var G__78244 = (marker["placesurferPosition"]);
if((G__78244 == null)){
return null;
} else {
return placesurfer.map_ui.core.position_map(G__78244);
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
placesurfer.map_ui.core.position_match_QMARK_ = (function placesurfer$map_ui$core$position_match_QMARK_(pos,p__78245){
var map__78246 = p__78245;
var map__78246__$1 = cljs.core.__destructure_map(map__78246);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78246__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78246__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78246__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
}catch (e78247){var _ = e78247;
return null;
}}),cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
});
placesurfer.map_ui.core.refresh_row_hover_emphasis_BANG_ = (function placesurfer$map_ui$core$refresh_row_hover_emphasis_BANG_(){
var seq__78248_78677 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__78249_78678 = null;
var count__78250_78679 = (0);
var i__78251_78680 = (0);
while(true){
if((i__78251_78680 < count__78250_78679)){
var marker_78681 = chunk__78249_78678.cljs$core$IIndexed$_nth$arity$2(null,i__78251_78680);
var temp__5825__auto___78682 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_78681);
if(cljs.core.truth_(temp__5825__auto___78682)){
var visual_78683 = temp__5825__auto___78682;
visual_78683.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}


var G__78684 = seq__78248_78677;
var G__78685 = chunk__78249_78678;
var G__78686 = count__78250_78679;
var G__78687 = (i__78251_78680 + (1));
seq__78248_78677 = G__78684;
chunk__78249_78678 = G__78685;
count__78250_78679 = G__78686;
i__78251_78680 = G__78687;
continue;
} else {
var temp__5825__auto___78688 = cljs.core.seq(seq__78248_78677);
if(temp__5825__auto___78688){
var seq__78248_78689__$1 = temp__5825__auto___78688;
if(cljs.core.chunked_seq_QMARK_(seq__78248_78689__$1)){
var c__5548__auto___78690 = cljs.core.chunk_first(seq__78248_78689__$1);
var G__78691 = cljs.core.chunk_rest(seq__78248_78689__$1);
var G__78692 = c__5548__auto___78690;
var G__78693 = cljs.core.count(c__5548__auto___78690);
var G__78694 = (0);
seq__78248_78677 = G__78691;
chunk__78249_78678 = G__78692;
count__78250_78679 = G__78693;
i__78251_78680 = G__78694;
continue;
} else {
var marker_78695 = cljs.core.first(seq__78248_78689__$1);
var temp__5825__auto___78696__$1 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_78695);
if(cljs.core.truth_(temp__5825__auto___78696__$1)){
var visual_78697 = temp__5825__auto___78696__$1;
visual_78697.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}


var G__78698 = cljs.core.next(seq__78248_78689__$1);
var G__78699 = null;
var G__78700 = (0);
var G__78701 = (0);
seq__78248_78677 = G__78698;
chunk__78249_78678 = G__78699;
count__78250_78679 = G__78700;
i__78251_78680 = G__78701;
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
var seq__78252_78702 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__78253_78703 = null;
var count__78254_78704 = (0);
var i__78255_78705 = (0);
while(true){
if((i__78255_78705 < count__78254_78704)){
var marker_78706 = chunk__78253_78703.cljs$core$IIndexed$_nth$arity$2(null,i__78255_78705);
var temp__5825__auto___78707 = (function (){try{return marker_78706.getPopup();
}catch (e78260){var _ = e78260;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___78707)){
var popup_78708 = temp__5825__auto___78707;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_78708);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_78708,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_78708)){
try{marker_78706.togglePopup();
}catch (e78261){var __78709 = e78261;
}} else {
}
} else {
}


var G__78710 = seq__78252_78702;
var G__78711 = chunk__78253_78703;
var G__78712 = count__78254_78704;
var G__78713 = (i__78255_78705 + (1));
seq__78252_78702 = G__78710;
chunk__78253_78703 = G__78711;
count__78254_78704 = G__78712;
i__78255_78705 = G__78713;
continue;
} else {
var temp__5825__auto___78714 = cljs.core.seq(seq__78252_78702);
if(temp__5825__auto___78714){
var seq__78252_78715__$1 = temp__5825__auto___78714;
if(cljs.core.chunked_seq_QMARK_(seq__78252_78715__$1)){
var c__5548__auto___78716 = cljs.core.chunk_first(seq__78252_78715__$1);
var G__78717 = cljs.core.chunk_rest(seq__78252_78715__$1);
var G__78718 = c__5548__auto___78716;
var G__78719 = cljs.core.count(c__5548__auto___78716);
var G__78720 = (0);
seq__78252_78702 = G__78717;
chunk__78253_78703 = G__78718;
count__78254_78704 = G__78719;
i__78255_78705 = G__78720;
continue;
} else {
var marker_78721 = cljs.core.first(seq__78252_78715__$1);
var temp__5825__auto___78722__$1 = (function (){try{return marker_78721.getPopup();
}catch (e78262){var _ = e78262;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___78722__$1)){
var popup_78723 = temp__5825__auto___78722__$1;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_78723);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_78723,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_78723)){
try{marker_78721.togglePopup();
}catch (e78263){var __78724 = e78263;
}} else {
}
} else {
}


var G__78725 = cljs.core.next(seq__78252_78715__$1);
var G__78726 = null;
var G__78727 = (0);
var G__78728 = (0);
seq__78252_78702 = G__78725;
chunk__78253_78703 = G__78726;
count__78254_78704 = G__78727;
i__78255_78705 = G__78728;
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
}catch (e78264){var __78729 = e78264;
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
}catch (e78265){var __78730 = e78265;
}
placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup,mode);

placesurfer.map_ui.core.elevate_active_marker_BANG_(marker);

placesurfer.map_ui.core.elevate_popup_layer_BANG_(popup);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_hover_popup,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"popup","popup",635890211),popup,new cljs.core.Keyword(null,"root-el","root-el",1068654895),root_el], null));
});
/**
 * Open the click popup on the marker matching `match` (:id or :longitude/:latitude).
 */
placesurfer.map_ui.core.open_marker_popup_BANG_ = (function placesurfer$map_ui$core$open_marker_popup_BANG_(p__78266){
var map__78267 = p__78266;
var map__78267__$1 = cljs.core.__destructure_map(map__78267);
var match = map__78267__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78267__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78267__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78267__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
}catch (e78268){var _ = e78268;
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
var map__78269 = temp__5823__auto__;
var map__78269__$1 = cljs.core.__destructure_map(map__78269);
var root_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78269__$1,new cljs.core.Keyword(null,"root-el","root-el",1068654895));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78269__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78269__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
}catch (e78270){var _ = e78270;
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
var G__78271 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__78271) : handler.call(null,G__78271));
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
var G__78272 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__78272) : handler.call(null,G__78272));
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
var map__78273 = temp__5825__auto__;
var map__78273__$1 = cljs.core.__destructure_map(map__78273);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78273__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78273__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
var map__78274 = temp__5825__auto__;
var map__78274__$1 = cljs.core.__destructure_map(map__78274);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78274__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78274__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
var temp__5825__auto___78731 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5825__auto___78731)){
var visual_78732 = temp__5825__auto___78731;
visual_78732.classList.add(placesurfer.map_ui.core.marker_map_hover_class);
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
var temp__5825__auto___78733 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5825__auto___78733)){
var visual_78734 = temp__5825__auto___78733;
visual_78734.classList.remove(placesurfer.map_ui.core.marker_map_hover_class);
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
var seq__78275 = cljs.core.seq(positions);
var chunk__78276 = null;
var count__78277 = (0);
var i__78278 = (0);
while(true){
if((i__78278 < count__78277)){
var position = chunk__78276.cljs$core$IIndexed$_nth$arity$2(null,i__78278);
var map__78285_78735 = position;
var map__78285_78736__$1 = cljs.core.__destructure_map(map__78285_78735);
var longitude_78737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78285_78736__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_78738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78285_78736__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_78739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78285_78736__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_78740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78285_78736__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var marker_anchor_78741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78285_78736__$1,new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686));
var marker_offset_78742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78285_78736__$1,new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711));
var resolved_topic_78743 = (function (){var or__5025__auto__ = marker_topic_78740;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_78739;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__78286_78744 = placesurfer.map_ui.core.marker_style_for(resolved_topic_78743);
var map__78286_78745__$1 = cljs.core.__destructure_map(map__78286_78744);
var anchor_78746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78286_78745__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var effective_anchor_78747 = (function (){var or__5025__auto__ = marker_anchor_78741;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return anchor_78746;
}
})();
var root_el_78748 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(resolved_topic_78743,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position),effective_anchor_78747);
var marker_opts_78749 = (function (){var G__78287 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_78748,new cljs.core.Keyword(null,"anchor","anchor",1549638489),effective_anchor_78747], null);
if(cljs.core.seq(marker_offset_78742)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78287,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.clj__GT_js(marker_offset_78742));
} else {
return G__78287;
}
})();
var marker_78750 = (new maplibregl.Marker(cljs.core.clj__GT_js(marker_opts_78749)));
var popup_78751 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_78750["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_78750["placesurferPositionClj"] = position);

popup_78751.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_78750.setLngLat([longitude_78737,latitude_78738]);

marker_78750.setPopup(popup_78751);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_78750,popup_78751,root_el_78748,position);

marker_78750.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_markers,cljs.core.conj,marker_78750);


var G__78752 = seq__78275;
var G__78753 = chunk__78276;
var G__78754 = count__78277;
var G__78755 = (i__78278 + (1));
seq__78275 = G__78752;
chunk__78276 = G__78753;
count__78277 = G__78754;
i__78278 = G__78755;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__78275);
if(temp__5825__auto__){
var seq__78275__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78275__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__78275__$1);
var G__78756 = cljs.core.chunk_rest(seq__78275__$1);
var G__78757 = c__5548__auto__;
var G__78758 = cljs.core.count(c__5548__auto__);
var G__78759 = (0);
seq__78275 = G__78756;
chunk__78276 = G__78757;
count__78277 = G__78758;
i__78278 = G__78759;
continue;
} else {
var position = cljs.core.first(seq__78275__$1);
var map__78288_78760 = position;
var map__78288_78761__$1 = cljs.core.__destructure_map(map__78288_78760);
var longitude_78762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78288_78761__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_78763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78288_78761__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_78764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78288_78761__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_78765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78288_78761__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var marker_anchor_78766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78288_78761__$1,new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686));
var marker_offset_78767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78288_78761__$1,new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711));
var resolved_topic_78768 = (function (){var or__5025__auto__ = marker_topic_78765;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_78764;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__78289_78769 = placesurfer.map_ui.core.marker_style_for(resolved_topic_78768);
var map__78289_78770__$1 = cljs.core.__destructure_map(map__78289_78769);
var anchor_78771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78289_78770__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var effective_anchor_78772 = (function (){var or__5025__auto__ = marker_anchor_78766;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return anchor_78771;
}
})();
var root_el_78773 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(resolved_topic_78768,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position),effective_anchor_78772);
var marker_opts_78774 = (function (){var G__78290 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_78773,new cljs.core.Keyword(null,"anchor","anchor",1549638489),effective_anchor_78772], null);
if(cljs.core.seq(marker_offset_78767)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78290,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.clj__GT_js(marker_offset_78767));
} else {
return G__78290;
}
})();
var marker_78775 = (new maplibregl.Marker(cljs.core.clj__GT_js(marker_opts_78774)));
var popup_78776 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_78775["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_78775["placesurferPositionClj"] = position);

popup_78776.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_78775.setLngLat([longitude_78762,latitude_78763]);

marker_78775.setPopup(popup_78776);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_78775,popup_78776,root_el_78773,position);

marker_78775.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_markers,cljs.core.conj,marker_78775);


var G__78777 = cljs.core.next(seq__78275__$1);
var G__78778 = null;
var G__78779 = (0);
var G__78780 = (0);
seq__78275 = G__78777;
chunk__78276 = G__78778;
count__78277 = G__78779;
i__78278 = G__78780;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.map_ui.core.fit_mock_map_BANG_ = (function placesurfer$map_ui$core$fit_mock_map_BANG_(m,p__78291){
var map__78292 = p__78291;
var map__78292__$1 = cljs.core.__destructure_map(map__78292);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78292__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78292__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78292__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78292__$1,new cljs.core.Keyword(null,"north","north",651323902));
(m.fitBoundsCalled = true);

var c_78781 = m.getCenter();
(c_78781.lng = ((west + east) / 2.0));

(c_78781.lat = ((south + north) / 2.0));

return m.setZoom(placesurfer.map_ui.core.fit_max_zoom);
});
placesurfer.map_ui.core.fit_lng_lat_box_BANG_ = (function placesurfer$map_ui$core$fit_lng_lat_box_BANG_(m,box,p__78293){
var map__78294 = p__78293;
var map__78294__$1 = cljs.core.__destructure_map(map__78294);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78294__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
if(placesurfer.map_ui.bounds.valid_lng_lat_box_QMARK_(box)){
var map__78295 = placesurfer.map_ui.bounds.pad_degenerate_box(box);
var map__78295__$1 = cljs.core.__destructure_map(map__78295);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78295__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78295__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78295__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78295__$1,new cljs.core.Keyword(null,"north","north",651323902));
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
placesurfer.map_ui.core.fit_bounds_BANG_ = (function placesurfer$map_ui$core$fit_bounds_BANG_(m,positions,p__78296){
var map__78297 = p__78296;
var map__78297__$1 = cljs.core.__destructure_map(map__78297);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78297__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var temp__5825__auto__ = placesurfer.map_ui.bounds.fit_lng_lat_bounds(positions);
if(cljs.core.truth_(temp__5825__auto__)){
var box = temp__5825__auto__;
return placesurfer.map_ui.core.fit_lng_lat_box_BANG_(m,box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null));
} else {
return null;
}
});
placesurfer.map_ui.core.normalize_state = (function placesurfer$map_ui$core$normalize_state(p__78298){
var map__78299 = p__78298;
var map__78299__$1 = cljs.core.__destructure_map(map__78299);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78299__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78299__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78299__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78299__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78299__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78299__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78299__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.vec(positions),new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),fit_bounds,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003),draft_marker,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185),open_popup_for,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),(function (){var or__5025__auto__ = popup_opts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"fit?","fit?",1773758200),cljs.core.boolean$(fit_QMARK_),new cljs.core.Keyword(null,"animate?","animate?",-1559039739),(((!((animate_QMARK_ == null))))?cljs.core.boolean$(animate_QMARK_):true)], null);
});
placesurfer.map_ui.core.apply_now_BANG_ = (function placesurfer$map_ui$core$apply_now_BANG_(m,p__78300){
var map__78301 = p__78300;
var map__78301__$1 = cljs.core.__destructure_map(map__78301);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78301__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78301__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78301__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78301__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78301__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78301__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78301__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
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

try{placesurfer.map_ui.core.apply_area_circles_BANG_(m,(function (){var G__78303 = cljs.core.vec(positions);
if(cljs.core.truth_(draft_marker)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78303,draft_marker);
} else {
return G__78303;
}
})());
}catch (e78302){var __78782 = e78302;
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
var seq__78304 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50),(150),(400),(800),(1500)], null));
var chunk__78305 = null;
var count__78306 = (0);
var i__78307 = (0);
while(true){
if((i__78307 < count__78306)){
var delay_ms = chunk__78305.cljs$core$IIndexed$_nth$arity$2(null,i__78307);
setTimeout(((function (seq__78304,chunk__78305,count__78306,i__78307,delay_ms){
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
});})(seq__78304,chunk__78305,count__78306,i__78307,delay_ms))
,delay_ms);


var G__78783 = seq__78304;
var G__78784 = chunk__78305;
var G__78785 = count__78306;
var G__78786 = (i__78307 + (1));
seq__78304 = G__78783;
chunk__78305 = G__78784;
count__78306 = G__78785;
i__78307 = G__78786;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__78304);
if(temp__5825__auto__){
var seq__78304__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78304__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__78304__$1);
var G__78787 = cljs.core.chunk_rest(seq__78304__$1);
var G__78788 = c__5548__auto__;
var G__78789 = cljs.core.count(c__5548__auto__);
var G__78790 = (0);
seq__78304 = G__78787;
chunk__78305 = G__78788;
count__78306 = G__78789;
i__78307 = G__78790;
continue;
} else {
var delay_ms = cljs.core.first(seq__78304__$1);
setTimeout(((function (seq__78304,chunk__78305,count__78306,i__78307,delay_ms,seq__78304__$1,temp__5825__auto__){
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
});})(seq__78304,chunk__78305,count__78306,i__78307,delay_ms,seq__78304__$1,temp__5825__auto__))
,delay_ms);


var G__78791 = cljs.core.next(seq__78304__$1);
var G__78792 = null;
var G__78793 = (0);
var G__78794 = (0);
seq__78304 = G__78791;
chunk__78305 = G__78792;
count__78306 = G__78793;
i__78307 = G__78794;
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
placesurfer.map_ui.core.sync_country_pick_state_BANG_ = (function placesurfer$map_ui$core$sync_country_pick_state_BANG_(p__78308){
var map__78309 = p__78308;
var map__78309__$1 = cljs.core.__destructure_map(map__78309);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78309__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78309__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
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
placesurfer.map_ui.core.sync_add_pin_mode_BANG_ = (function placesurfer$map_ui$core$sync_add_pin_mode_BANG_(p__78310){
var map__78311 = p__78310;
var map__78311__$1 = cljs.core.__destructure_map(map__78311);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78311__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78311__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_,cljs.core.boolean$(active_QMARK_));

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_click_handler,(cljs.core.truth_(active_QMARK_)?on_click:null));

var temp__5825__auto___78795 = cljs.core.deref(placesurfer.map_ui.core._BANG_map_container);
if(cljs.core.truth_(temp__5825__auto___78795)){
var el_78796 = temp__5825__auto___78795;
if(cljs.core.truth_(active_QMARK_)){
el_78796.classList.add("map-add-pin-active");
} else {
el_78796.classList.remove("map-add-pin-active");
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
}catch (e78312){var _ = e78312;
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
placesurfer.map_ui.core.fly_to_view_BANG_ = (function placesurfer$map_ui$core$fly_to_view_BANG_(p__78313){
var map__78314 = p__78313;
var map__78314__$1 = cljs.core.__destructure_map(map__78314);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78314__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78314__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78314__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78314__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
if(((typeof longitude === 'number') && (((typeof latitude === 'number') && (typeof zoom === 'number'))))){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom,new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null)));
}catch (e78315){var _ = e78315;
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
placesurfer.map_ui.core.center_on_position_BANG_ = (function placesurfer$map_ui$core$center_on_position_BANG_(p__78316){
var map__78317 = p__78316;
var map__78317__$1 = cljs.core.__destructure_map(map__78317);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78317__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78317__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78317__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),placesurfer.map_ui.core.center_default_zoom);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78317__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
var preserve_zoom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78317__$1,new cljs.core.Keyword(null,"preserve-zoom?","preserve-zoom?",-1650190790));
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js((function (){var G__78319 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null);
if(cljs.core.not(preserve_zoom_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78319,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom);
} else {
return G__78319;
}
})()));
}catch (e78318){var _ = e78318;
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

var temp__5825__auto___78797 = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto___78797)){
var m_78798 = temp__5825__auto___78797;
try{m_78798.remove();
}catch (e78320){var __78799 = e78320;
}} else {
}

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_map,null);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_map_container,null);

placesurfer.map_ui.core.cleanup_ref_images_BANG_();

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
