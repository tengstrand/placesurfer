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
}catch (e61348){var _ = e61348;
return false;
}})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
try{return m.isStyleLoaded() === true;
}catch (e61349){var _ = e61349;
return false;
}}

}
}
});
placesurfer.map_ui.core.safe_resize_BANG_ = (function placesurfer$map_ui$core$safe_resize_BANG_(m){
if(cljs.core.truth_(m)){
try{return m.resize();
}catch (e61350){var _ = e61350;
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
}catch (e61351){var _ = e61351;
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
var G__61352 = (function (){try{return marker.getElement();
}catch (e61353){var _ = e61353;
return null;
}})();
if((G__61352 == null)){
return null;
} else {
return placesurfer.map_ui.core.marker_visual_el(G__61352);
}
});
placesurfer.map_ui.core.marker_element = (function placesurfer$map_ui$core$marker_element(var_args){
var G__61355 = arguments.length;
switch (G__61355) {
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
var map__61356 = placesurfer.map_ui.core.marker_style_for(topic);
var map__61356__$1 = cljs.core.__destructure_map(map__61356);
var width_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"width-px","width-px",65122451));
var height_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"height-px","height-px",-1391665005));
var background_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"background-position","background-position",1112702746));
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
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

var img_61536 = document.createElement("img");
(img_61536.src = image_url);

(img_61536.alt = "");

(img_61536.draggable = false);

(img_61536.style.width = "100%");

(img_61536.style.height = "100%");

(img_61536.style.display = "block");

(img_61536.style.pointerEvents = "none");

visual.appendChild(img_61536);
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
var seq__61357_61537 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__61358_61538 = null;
var count__61359_61539 = (0);
var i__61360_61540 = (0);
while(true){
if((i__61360_61540 < count__61359_61539)){
var marker_61541 = chunk__61358_61538.cljs$core$IIndexed$_nth$arity$2(null,i__61360_61540);
try{marker_61541.remove();
}catch (e61363){var __61542 = e61363;
}

var G__61543 = seq__61357_61537;
var G__61544 = chunk__61358_61538;
var G__61545 = count__61359_61539;
var G__61546 = (i__61360_61540 + (1));
seq__61357_61537 = G__61543;
chunk__61358_61538 = G__61544;
count__61359_61539 = G__61545;
i__61360_61540 = G__61546;
continue;
} else {
var temp__5825__auto___61547 = cljs.core.seq(seq__61357_61537);
if(temp__5825__auto___61547){
var seq__61357_61548__$1 = temp__5825__auto___61547;
if(cljs.core.chunked_seq_QMARK_(seq__61357_61548__$1)){
var c__5548__auto___61549 = cljs.core.chunk_first(seq__61357_61548__$1);
var G__61550 = cljs.core.chunk_rest(seq__61357_61548__$1);
var G__61551 = c__5548__auto___61549;
var G__61552 = cljs.core.count(c__5548__auto___61549);
var G__61553 = (0);
seq__61357_61537 = G__61550;
chunk__61358_61538 = G__61551;
count__61359_61539 = G__61552;
i__61360_61540 = G__61553;
continue;
} else {
var marker_61554 = cljs.core.first(seq__61357_61548__$1);
try{marker_61554.remove();
}catch (e61364){var __61555 = e61364;
}

var G__61556 = cljs.core.next(seq__61357_61548__$1);
var G__61557 = null;
var G__61558 = (0);
var G__61559 = (0);
seq__61357_61537 = G__61556;
chunk__61358_61538 = G__61557;
count__61359_61539 = G__61558;
i__61360_61540 = G__61559;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61365){
var vec__61366 = p__61365;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61366,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61366,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
}),ring);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61369){
var vec__61370 = p__61369;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61370,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61370,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wip","wip",-103467282),true], null)], null);
}),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_ring)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),(function (){var G__61373 = cljs.core.vec(verts);
var G__61373__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__61373,done)
;
if(cljs.core.truth_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__61373__$1,cur);
} else {
return G__61373__$1;
}
})()], null);
});
placesurfer.map_ui.core.refresh_draw_BANG_ = (function placesurfer$map_ui$core$refresh_draw_BANG_(m){
var temp__5825__auto__ = (function (){try{return m.getSource(placesurfer.map_ui.core.draw_src);
}catch (e61374){var _ = e61374;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var src = temp__5825__auto__;
return src.setData(cljs.core.clj__GT_js(placesurfer.map_ui.core.draw_fc()));
} else {
return null;
}
});
placesurfer.map_ui.core.set_draw_layer_visibility_BANG_ = (function placesurfer$map_ui$core$set_draw_layer_visibility_BANG_(m,layer_id,visible_QMARK_){
try{if(cljs.core.truth_((function (){try{return m.getLayer(layer_id);
}catch (e61376){var _ = e61376;
return null;
}})())){
return m.setLayoutProperty(layer_id,"visibility",(cljs.core.truth_(visible_QMARK_)?"visible":"none"));
} else {
return null;
}
}catch (e61375){var _ = e61375;
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
}catch (e61377){var _ = e61377;
return null;
}})())){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_active_QMARK_))){
return placesurfer.map_ui.core.set_draw_layer_visibility_BANG_(m,placesurfer.map_ui.core.draw_vtx,true);
} else {
return null;
}
} else {
m.addSource(placesurfer.map_ui.core.draw_src,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"geojson",new cljs.core.Keyword(null,"data","data",-232669377),placesurfer.map_ui.core.draw_fc()], null)));

m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.draw_fill,new cljs.core.Keyword(null,"type","type",1174270348),"fill",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.draw_src,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["==",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["geometry-type"], null),"Polygon"], null),new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 2, ["fill-color","#ff4500","fill-opacity",0.35], null)], null)));

m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.draw_line,new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.draw_src,new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 3, ["line-color","#cc3300","line-width",(2),"line-dasharray",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], null)], null)));

m.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.map_ui.core.draw_vtx,new cljs.core.Keyword(null,"type","type",1174270348),"circle",new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.map_ui.core.draw_src,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["==",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["geometry-type"], null),"Point"], null),new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 4, ["circle-radius",(5),"circle-color","#cc3300","circle-stroke-width",(2),"circle-stroke-color","#fff"], null)], null)));

return placesurfer.map_ui.core.set_draw_canvas_visibility_BANG_(m,false);
}
});
placesurfer.map_ui.core.all_draw_vertices = (function placesurfer$map_ui$core$all_draw_vertices(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (pidx,ring){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (vidx,p__61378){
var vec__61379 = p__61378;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61379,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61379,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"polygon-idx","polygon-idx",1216671533),pidx,new cljs.core.Keyword(null,"vertex-idx","vertex-idx",676111409),vidx,new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"lat","lat",-580793929),lat], null);
}),ring);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)], 0)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (vidx,p__61382){
var vec__61383 = p__61382;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61383,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61383,(1),null);
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
var G__61386 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v);
var G__61386__$1 = (((G__61386 instanceof cljs.core.Keyword))?G__61386.fqn:null);
switch (G__61386__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61386__$1)].join('')));

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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_ring,(function (p1__61387_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__61387_SHARP_));
}));
} else {
if(cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons))){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.last(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_polygons)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.core._BANG_draw_polygons,(function (p1__61388_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__61388_SHARP_));
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
var seq__61389 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_click_fn,"click"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_mm_fn,"mousemove"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_md_fn,"mousedown"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.map_ui.core._BANG_draw_mu_fn,"mouseup"], null)], null));
var chunk__61390 = null;
var count__61391 = (0);
var i__61392 = (0);
while(true){
if((i__61392 < count__61391)){
var vec__61401 = chunk__61390.cljs$core$IIndexed$_nth$arity$2(null,i__61392);
var _BANG_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61401,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61401,(1),null);
var temp__5825__auto___61562 = cljs.core.deref(_BANG_a);
if(cljs.core.truth_(temp__5825__auto___61562)){
var f_61563 = temp__5825__auto___61562;
try{m.off(ev,f_61563);
}catch (e61404){var __61564 = e61404;
}
cljs.core.reset_BANG_(_BANG_a,null);
} else {
}


var G__61565 = seq__61389;
var G__61566 = chunk__61390;
var G__61567 = count__61391;
var G__61568 = (i__61392 + (1));
seq__61389 = G__61565;
chunk__61390 = G__61566;
count__61391 = G__61567;
i__61392 = G__61568;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61389);
if(temp__5825__auto__){
var seq__61389__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61389__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__61389__$1);
var G__61569 = cljs.core.chunk_rest(seq__61389__$1);
var G__61570 = c__5548__auto__;
var G__61571 = cljs.core.count(c__5548__auto__);
var G__61572 = (0);
seq__61389 = G__61569;
chunk__61390 = G__61570;
count__61391 = G__61571;
i__61392 = G__61572;
continue;
} else {
var vec__61405 = cljs.core.first(seq__61389__$1);
var _BANG_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61405,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61405,(1),null);
var temp__5825__auto___61573__$1 = cljs.core.deref(_BANG_a);
if(cljs.core.truth_(temp__5825__auto___61573__$1)){
var f_61574 = temp__5825__auto___61573__$1;
try{m.off(ev,f_61574);
}catch (e61408){var __61575 = e61408;
}
cljs.core.reset_BANG_(_BANG_a,null);
} else {
}


var G__61576 = cljs.core.next(seq__61389__$1);
var G__61577 = null;
var G__61578 = (0);
var G__61579 = (0);
seq__61389 = G__61576;
chunk__61390 = G__61577;
count__61391 = G__61578;
i__61392 = G__61579;
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
var ll_61580 = e.lngLat;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_draw_ring,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ll_61580.lng,ll_61580.lat], null));

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
var ll_61581 = e.lngLat;
placesurfer.map_ui.core.move_vertex_BANG_(ds,ll_61581.lng,ll_61581.lat);

return placesurfer.map_ui.core.refresh_draw_BANG_(m);
} else {
var v = placesurfer.map_ui.core.vertex_near_screen(m,x,y,(8));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_hover_v,v);

var G__61409 = m;
var G__61410 = (cljs.core.truth_(v)?"pointer":"default");
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(G__61409,G__61410) : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,G__61409,G__61410));
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
}catch (e61411){var __61582 = e61411;
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
}catch (e61412){var __61583 = e61412;
}
var G__61413 = m;
var G__61414 = (cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_draw_hover_v))?"pointer":"default");
return (placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(G__61413,G__61414) : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,G__61413,G__61414));
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

var seq__61415 = cljs.core.seq(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["padding","4px 8px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display","block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width","100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor","pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fontSize","11px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fontWeight","600"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["color","white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marginBottom","2px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["borderRadius","3px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textAlign","left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background",bg], null)], null));
var chunk__61416 = null;
var count__61417 = (0);
var i__61418 = (0);
while(true){
if((i__61418 < count__61417)){
var vec__61425 = chunk__61416.cljs$core$IIndexed$_nth$arity$2(null,i__61418);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61425,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61425,(1),null);
(el.style[k] = v);


var G__61584 = seq__61415;
var G__61585 = chunk__61416;
var G__61586 = count__61417;
var G__61587 = (i__61418 + (1));
seq__61415 = G__61584;
chunk__61416 = G__61585;
count__61417 = G__61586;
i__61418 = G__61587;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61415);
if(temp__5825__auto__){
var seq__61415__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61415__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__61415__$1);
var G__61588 = cljs.core.chunk_rest(seq__61415__$1);
var G__61589 = c__5548__auto__;
var G__61590 = cljs.core.count(c__5548__auto__);
var G__61591 = (0);
seq__61415 = G__61588;
chunk__61416 = G__61589;
count__61417 = G__61590;
i__61418 = G__61591;
continue;
} else {
var vec__61428 = cljs.core.first(seq__61415__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61428,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61428,(1),null);
(el.style[k] = v);


var G__61595 = cljs.core.next(seq__61415__$1);
var G__61596 = null;
var G__61597 = (0);
var G__61598 = (0);
seq__61415 = G__61595;
chunk__61416 = G__61596;
count__61417 = G__61597;
i__61418 = G__61598;
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
}catch (e61431){var __61599 = e61431;
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

save_btn.addEventListener("click",placesurfer.map_ui.core.save_draw_BANG_);

var seq__61432_61600 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [toggle_btn,close_btn,undo_btn,clear_btn,save_btn], null));
var chunk__61433_61601 = null;
var count__61434_61602 = (0);
var i__61435_61603 = (0);
while(true){
if((i__61435_61603 < count__61434_61602)){
var b_61604 = chunk__61433_61601.cljs$core$IIndexed$_nth$arity$2(null,i__61435_61603);
el.appendChild(b_61604);


var G__61605 = seq__61432_61600;
var G__61606 = chunk__61433_61601;
var G__61607 = count__61434_61602;
var G__61608 = (i__61435_61603 + (1));
seq__61432_61600 = G__61605;
chunk__61433_61601 = G__61606;
count__61434_61602 = G__61607;
i__61435_61603 = G__61608;
continue;
} else {
var temp__5825__auto___61609 = cljs.core.seq(seq__61432_61600);
if(temp__5825__auto___61609){
var seq__61432_61610__$1 = temp__5825__auto___61609;
if(cljs.core.chunked_seq_QMARK_(seq__61432_61610__$1)){
var c__5548__auto___61611 = cljs.core.chunk_first(seq__61432_61610__$1);
var G__61612 = cljs.core.chunk_rest(seq__61432_61610__$1);
var G__61613 = c__5548__auto___61611;
var G__61614 = cljs.core.count(c__5548__auto___61611);
var G__61615 = (0);
seq__61432_61600 = G__61612;
chunk__61433_61601 = G__61613;
count__61434_61602 = G__61614;
i__61435_61603 = G__61615;
continue;
} else {
var b_61616 = cljs.core.first(seq__61432_61610__$1);
el.appendChild(b_61616);


var G__61617 = cljs.core.next(seq__61432_61610__$1);
var G__61618 = null;
var G__61619 = (0);
var G__61620 = (0);
seq__61432_61600 = G__61617;
chunk__61433_61601 = G__61618;
count__61434_61602 = G__61619;
i__61435_61603 = G__61620;
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
}catch (e61436){var __61621 = e61436;
}
(placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 ? placesurfer.map_ui.core.set_map_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(m,"grab") : placesurfer.map_ui.core.set_map_cursor_BANG_.call(null,m,"grab"));
} else {
}

return placesurfer.map_ui.core.set_draw_canvas_visibility_BANG_(m,false);
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
var features_61622 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(geojson.features,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var rings_61623 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (f){
var coords = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),(0)], null));
if(cljs.core.seq(coords)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__61437){
var vec__61438 = p__61437;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61438,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61438,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null);
}),cljs.core.butlast(coords));
} else {
return null;
}
}),features_61622);
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_draw_polygons,cljs.core.vec(rings_61623));
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
}catch (e61441){var _ = e61441;
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
}catch (e61442){var _ = e61442;
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
}catch (e61443){var _ = e61443;
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
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__61444){
var map__61445 = p__61444;
var map__61445__$1 = cljs.core.__destructure_map(map__61445);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61445__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61445__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var area_radii = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61445__$1,new cljs.core.Keyword(null,"area-radii","area-radii",1413411485));
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
}catch (e61446){var _ = e61446;
return null;
}});
placesurfer.map_ui.core.reset_marker_layering_BANG_ = (function placesurfer$map_ui$core$reset_marker_layering_BANG_(){
var seq__61447 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__61448 = null;
var count__61449 = (0);
var i__61450 = (0);
while(true){
if((i__61450 < count__61449)){
var marker = chunk__61448.cljs$core$IIndexed$_nth$arity$2(null,i__61450);
var temp__5825__auto___61624 = (function (){try{return marker.getElement();
}catch (e61453){var _ = e61453;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___61624)){
var el_61625 = temp__5825__auto___61624;
(el_61625.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__61626 = seq__61447;
var G__61627 = chunk__61448;
var G__61628 = count__61449;
var G__61629 = (i__61450 + (1));
seq__61447 = G__61626;
chunk__61448 = G__61627;
count__61449 = G__61628;
i__61450 = G__61629;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61447);
if(temp__5825__auto__){
var seq__61447__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61447__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__61447__$1);
var G__61630 = cljs.core.chunk_rest(seq__61447__$1);
var G__61631 = c__5548__auto__;
var G__61632 = cljs.core.count(c__5548__auto__);
var G__61633 = (0);
seq__61447 = G__61630;
chunk__61448 = G__61631;
count__61449 = G__61632;
i__61450 = G__61633;
continue;
} else {
var marker = cljs.core.first(seq__61447__$1);
var temp__5825__auto___61634__$1 = (function (){try{return marker.getElement();
}catch (e61454){var _ = e61454;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___61634__$1)){
var el_61635 = temp__5825__auto___61634__$1;
(el_61635.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__61636 = cljs.core.next(seq__61447__$1);
var G__61637 = null;
var G__61638 = (0);
var G__61639 = (0);
seq__61447 = G__61636;
chunk__61448 = G__61637;
count__61449 = G__61638;
i__61450 = G__61639;
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
}catch (e61455){var _ = e61455;
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
}catch (e61456){var _ = e61456;
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
}catch (e61457){var _ = e61457;
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
var G__61458 = (marker["placesurferPosition"]);
if((G__61458 == null)){
return null;
} else {
return placesurfer.map_ui.core.position_map(G__61458);
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
placesurfer.map_ui.core.position_match_QMARK_ = (function placesurfer$map_ui$core$position_match_QMARK_(pos,p__61459){
var map__61460 = p__61459;
var map__61460__$1 = cljs.core.__destructure_map(map__61460);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61460__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61460__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61460__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
}catch (e61461){var _ = e61461;
return null;
}}),cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
});
placesurfer.map_ui.core.refresh_row_hover_emphasis_BANG_ = (function placesurfer$map_ui$core$refresh_row_hover_emphasis_BANG_(){
var seq__61462_61640 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__61463_61641 = null;
var count__61464_61642 = (0);
var i__61465_61643 = (0);
while(true){
if((i__61465_61643 < count__61464_61642)){
var marker_61644 = chunk__61463_61641.cljs$core$IIndexed$_nth$arity$2(null,i__61465_61643);
var temp__5825__auto___61645 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_61644);
if(cljs.core.truth_(temp__5825__auto___61645)){
var visual_61646 = temp__5825__auto___61645;
visual_61646.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}


var G__61647 = seq__61462_61640;
var G__61648 = chunk__61463_61641;
var G__61649 = count__61464_61642;
var G__61650 = (i__61465_61643 + (1));
seq__61462_61640 = G__61647;
chunk__61463_61641 = G__61648;
count__61464_61642 = G__61649;
i__61465_61643 = G__61650;
continue;
} else {
var temp__5825__auto___61651 = cljs.core.seq(seq__61462_61640);
if(temp__5825__auto___61651){
var seq__61462_61652__$1 = temp__5825__auto___61651;
if(cljs.core.chunked_seq_QMARK_(seq__61462_61652__$1)){
var c__5548__auto___61653 = cljs.core.chunk_first(seq__61462_61652__$1);
var G__61654 = cljs.core.chunk_rest(seq__61462_61652__$1);
var G__61655 = c__5548__auto___61653;
var G__61656 = cljs.core.count(c__5548__auto___61653);
var G__61657 = (0);
seq__61462_61640 = G__61654;
chunk__61463_61641 = G__61655;
count__61464_61642 = G__61656;
i__61465_61643 = G__61657;
continue;
} else {
var marker_61658 = cljs.core.first(seq__61462_61652__$1);
var temp__5825__auto___61659__$1 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_61658);
if(cljs.core.truth_(temp__5825__auto___61659__$1)){
var visual_61660 = temp__5825__auto___61659__$1;
visual_61660.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}


var G__61661 = cljs.core.next(seq__61462_61652__$1);
var G__61662 = null;
var G__61663 = (0);
var G__61664 = (0);
seq__61462_61640 = G__61661;
chunk__61463_61641 = G__61662;
count__61464_61642 = G__61663;
i__61465_61643 = G__61664;
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
var seq__61466_61665 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__61467_61666 = null;
var count__61468_61667 = (0);
var i__61469_61668 = (0);
while(true){
if((i__61469_61668 < count__61468_61667)){
var marker_61669 = chunk__61467_61666.cljs$core$IIndexed$_nth$arity$2(null,i__61469_61668);
var temp__5825__auto___61670 = (function (){try{return marker_61669.getPopup();
}catch (e61474){var _ = e61474;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___61670)){
var popup_61671 = temp__5825__auto___61670;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_61671);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_61671,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_61671)){
try{marker_61669.togglePopup();
}catch (e61475){var __61672 = e61475;
}} else {
}
} else {
}


var G__61673 = seq__61466_61665;
var G__61674 = chunk__61467_61666;
var G__61675 = count__61468_61667;
var G__61676 = (i__61469_61668 + (1));
seq__61466_61665 = G__61673;
chunk__61467_61666 = G__61674;
count__61468_61667 = G__61675;
i__61469_61668 = G__61676;
continue;
} else {
var temp__5825__auto___61677 = cljs.core.seq(seq__61466_61665);
if(temp__5825__auto___61677){
var seq__61466_61678__$1 = temp__5825__auto___61677;
if(cljs.core.chunked_seq_QMARK_(seq__61466_61678__$1)){
var c__5548__auto___61679 = cljs.core.chunk_first(seq__61466_61678__$1);
var G__61680 = cljs.core.chunk_rest(seq__61466_61678__$1);
var G__61681 = c__5548__auto___61679;
var G__61682 = cljs.core.count(c__5548__auto___61679);
var G__61683 = (0);
seq__61466_61665 = G__61680;
chunk__61467_61666 = G__61681;
count__61468_61667 = G__61682;
i__61469_61668 = G__61683;
continue;
} else {
var marker_61684 = cljs.core.first(seq__61466_61678__$1);
var temp__5825__auto___61685__$1 = (function (){try{return marker_61684.getPopup();
}catch (e61476){var _ = e61476;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___61685__$1)){
var popup_61686 = temp__5825__auto___61685__$1;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_61686);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_61686,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_61686)){
try{marker_61684.togglePopup();
}catch (e61477){var __61687 = e61477;
}} else {
}
} else {
}


var G__61688 = cljs.core.next(seq__61466_61678__$1);
var G__61689 = null;
var G__61690 = (0);
var G__61691 = (0);
seq__61466_61665 = G__61688;
chunk__61467_61666 = G__61689;
count__61468_61667 = G__61690;
i__61469_61668 = G__61691;
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
}catch (e61478){var __61692 = e61478;
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
}catch (e61479){var __61693 = e61479;
}
placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup,mode);

placesurfer.map_ui.core.elevate_active_marker_BANG_(marker);

placesurfer.map_ui.core.elevate_popup_layer_BANG_(popup);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_hover_popup,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"popup","popup",635890211),popup,new cljs.core.Keyword(null,"root-el","root-el",1068654895),root_el], null));
});
/**
 * Open the click popup on the marker matching `match` (:id or :longitude/:latitude).
 */
placesurfer.map_ui.core.open_marker_popup_BANG_ = (function placesurfer$map_ui$core$open_marker_popup_BANG_(p__61480){
var map__61481 = p__61480;
var map__61481__$1 = cljs.core.__destructure_map(map__61481);
var match = map__61481__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61481__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61481__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61481__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
}catch (e61482){var _ = e61482;
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
var map__61483 = temp__5823__auto__;
var map__61483__$1 = cljs.core.__destructure_map(map__61483);
var root_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61483__$1,new cljs.core.Keyword(null,"root-el","root-el",1068654895));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61483__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61483__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
}catch (e61484){var _ = e61484;
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
var G__61485 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__61485) : handler.call(null,G__61485));
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
var G__61486 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__61486) : handler.call(null,G__61486));
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
var map__61487 = temp__5825__auto__;
var map__61487__$1 = cljs.core.__destructure_map(map__61487);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61487__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61487__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
var map__61488 = temp__5825__auto__;
var map__61488__$1 = cljs.core.__destructure_map(map__61488);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61488__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61488__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
var temp__5825__auto___61694 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5825__auto___61694)){
var visual_61695 = temp__5825__auto___61694;
visual_61695.classList.add(placesurfer.map_ui.core.marker_map_hover_class);
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
var temp__5825__auto___61696 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5825__auto___61696)){
var visual_61697 = temp__5825__auto___61696;
visual_61697.classList.remove(placesurfer.map_ui.core.marker_map_hover_class);
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
var seq__61489 = cljs.core.seq(positions);
var chunk__61490 = null;
var count__61491 = (0);
var i__61492 = (0);
while(true){
if((i__61492 < count__61491)){
var position = chunk__61490.cljs$core$IIndexed$_nth$arity$2(null,i__61492);
var map__61499_61698 = position;
var map__61499_61699__$1 = cljs.core.__destructure_map(map__61499_61698);
var longitude_61700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61499_61699__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_61701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61499_61699__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_61702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61499_61699__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_61703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61499_61699__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var marker_anchor_61704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61499_61699__$1,new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686));
var marker_offset_61705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61499_61699__$1,new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711));
var resolved_topic_61706 = (function (){var or__5025__auto__ = marker_topic_61703;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_61702;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__61500_61707 = placesurfer.map_ui.core.marker_style_for(resolved_topic_61706);
var map__61500_61708__$1 = cljs.core.__destructure_map(map__61500_61707);
var anchor_61709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61500_61708__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var effective_anchor_61710 = (function (){var or__5025__auto__ = marker_anchor_61704;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return anchor_61709;
}
})();
var root_el_61711 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(resolved_topic_61706,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position),effective_anchor_61710);
var marker_opts_61712 = (function (){var G__61501 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_61711,new cljs.core.Keyword(null,"anchor","anchor",1549638489),effective_anchor_61710], null);
if(cljs.core.seq(marker_offset_61705)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61501,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.clj__GT_js(marker_offset_61705));
} else {
return G__61501;
}
})();
var marker_61713 = (new maplibregl.Marker(cljs.core.clj__GT_js(marker_opts_61712)));
var popup_61714 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_61713["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_61713["placesurferPositionClj"] = position);

popup_61714.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_61713.setLngLat([longitude_61700,latitude_61701]);

marker_61713.setPopup(popup_61714);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_61713,popup_61714,root_el_61711,position);

marker_61713.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_markers,cljs.core.conj,marker_61713);


var G__61715 = seq__61489;
var G__61716 = chunk__61490;
var G__61717 = count__61491;
var G__61718 = (i__61492 + (1));
seq__61489 = G__61715;
chunk__61490 = G__61716;
count__61491 = G__61717;
i__61492 = G__61718;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61489);
if(temp__5825__auto__){
var seq__61489__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61489__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__61489__$1);
var G__61719 = cljs.core.chunk_rest(seq__61489__$1);
var G__61720 = c__5548__auto__;
var G__61721 = cljs.core.count(c__5548__auto__);
var G__61722 = (0);
seq__61489 = G__61719;
chunk__61490 = G__61720;
count__61491 = G__61721;
i__61492 = G__61722;
continue;
} else {
var position = cljs.core.first(seq__61489__$1);
var map__61502_61723 = position;
var map__61502_61724__$1 = cljs.core.__destructure_map(map__61502_61723);
var longitude_61725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61502_61724__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_61726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61502_61724__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_61727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61502_61724__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_61728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61502_61724__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var marker_anchor_61729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61502_61724__$1,new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686));
var marker_offset_61730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61502_61724__$1,new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711));
var resolved_topic_61731 = (function (){var or__5025__auto__ = marker_topic_61728;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_61727;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__61503_61732 = placesurfer.map_ui.core.marker_style_for(resolved_topic_61731);
var map__61503_61733__$1 = cljs.core.__destructure_map(map__61503_61732);
var anchor_61734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61503_61733__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var effective_anchor_61735 = (function (){var or__5025__auto__ = marker_anchor_61729;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return anchor_61734;
}
})();
var root_el_61736 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$3(resolved_topic_61731,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position),effective_anchor_61735);
var marker_opts_61737 = (function (){var G__61504 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_61736,new cljs.core.Keyword(null,"anchor","anchor",1549638489),effective_anchor_61735], null);
if(cljs.core.seq(marker_offset_61730)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61504,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.clj__GT_js(marker_offset_61730));
} else {
return G__61504;
}
})();
var marker_61738 = (new maplibregl.Marker(cljs.core.clj__GT_js(marker_opts_61737)));
var popup_61739 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_61738["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_61738["placesurferPositionClj"] = position);

popup_61739.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_61738.setLngLat([longitude_61725,latitude_61726]);

marker_61738.setPopup(popup_61739);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_61738,popup_61739,root_el_61736,position);

marker_61738.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_markers,cljs.core.conj,marker_61738);


var G__61740 = cljs.core.next(seq__61489__$1);
var G__61741 = null;
var G__61742 = (0);
var G__61743 = (0);
seq__61489 = G__61740;
chunk__61490 = G__61741;
count__61491 = G__61742;
i__61492 = G__61743;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.map_ui.core.fit_mock_map_BANG_ = (function placesurfer$map_ui$core$fit_mock_map_BANG_(m,p__61505){
var map__61506 = p__61505;
var map__61506__$1 = cljs.core.__destructure_map(map__61506);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61506__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61506__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61506__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61506__$1,new cljs.core.Keyword(null,"north","north",651323902));
(m.fitBoundsCalled = true);

var c_61744 = m.getCenter();
(c_61744.lng = ((west + east) / 2.0));

(c_61744.lat = ((south + north) / 2.0));

return m.setZoom(placesurfer.map_ui.core.fit_max_zoom);
});
placesurfer.map_ui.core.fit_lng_lat_box_BANG_ = (function placesurfer$map_ui$core$fit_lng_lat_box_BANG_(m,box,p__61507){
var map__61508 = p__61507;
var map__61508__$1 = cljs.core.__destructure_map(map__61508);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61508__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
if(placesurfer.map_ui.bounds.valid_lng_lat_box_QMARK_(box)){
var map__61509 = placesurfer.map_ui.bounds.pad_degenerate_box(box);
var map__61509__$1 = cljs.core.__destructure_map(map__61509);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61509__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61509__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61509__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61509__$1,new cljs.core.Keyword(null,"north","north",651323902));
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
placesurfer.map_ui.core.fit_bounds_BANG_ = (function placesurfer$map_ui$core$fit_bounds_BANG_(m,positions,p__61510){
var map__61511 = p__61510;
var map__61511__$1 = cljs.core.__destructure_map(map__61511);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61511__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var temp__5825__auto__ = placesurfer.map_ui.bounds.fit_lng_lat_bounds(positions);
if(cljs.core.truth_(temp__5825__auto__)){
var box = temp__5825__auto__;
return placesurfer.map_ui.core.fit_lng_lat_box_BANG_(m,box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null));
} else {
return null;
}
});
placesurfer.map_ui.core.normalize_state = (function placesurfer$map_ui$core$normalize_state(p__61512){
var map__61513 = p__61512;
var map__61513__$1 = cljs.core.__destructure_map(map__61513);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61513__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61513__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61513__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61513__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61513__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61513__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61513__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.vec(positions),new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),fit_bounds,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003),draft_marker,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185),open_popup_for,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),(function (){var or__5025__auto__ = popup_opts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"fit?","fit?",1773758200),cljs.core.boolean$(fit_QMARK_),new cljs.core.Keyword(null,"animate?","animate?",-1559039739),(((!((animate_QMARK_ == null))))?cljs.core.boolean$(animate_QMARK_):true)], null);
});
placesurfer.map_ui.core.apply_now_BANG_ = (function placesurfer$map_ui$core$apply_now_BANG_(m,p__61514){
var map__61515 = p__61514;
var map__61515__$1 = cljs.core.__destructure_map(map__61515);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61515__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61515__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61515__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61515__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61515__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61515__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61515__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
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

try{placesurfer.map_ui.core.apply_area_circles_BANG_(m,(function (){var G__61517 = cljs.core.vec(positions);
if(cljs.core.truth_(draft_marker)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__61517,draft_marker);
} else {
return G__61517;
}
})());
}catch (e61516){var __61745 = e61516;
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
var seq__61518 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50),(150),(400),(800),(1500)], null));
var chunk__61519 = null;
var count__61520 = (0);
var i__61521 = (0);
while(true){
if((i__61521 < count__61520)){
var delay_ms = chunk__61519.cljs$core$IIndexed$_nth$arity$2(null,i__61521);
setTimeout(((function (seq__61518,chunk__61519,count__61520,i__61521,delay_ms){
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
});})(seq__61518,chunk__61519,count__61520,i__61521,delay_ms))
,delay_ms);


var G__61746 = seq__61518;
var G__61747 = chunk__61519;
var G__61748 = count__61520;
var G__61749 = (i__61521 + (1));
seq__61518 = G__61746;
chunk__61519 = G__61747;
count__61520 = G__61748;
i__61521 = G__61749;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61518);
if(temp__5825__auto__){
var seq__61518__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61518__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__61518__$1);
var G__61750 = cljs.core.chunk_rest(seq__61518__$1);
var G__61751 = c__5548__auto__;
var G__61752 = cljs.core.count(c__5548__auto__);
var G__61753 = (0);
seq__61518 = G__61750;
chunk__61519 = G__61751;
count__61520 = G__61752;
i__61521 = G__61753;
continue;
} else {
var delay_ms = cljs.core.first(seq__61518__$1);
setTimeout(((function (seq__61518,chunk__61519,count__61520,i__61521,delay_ms,seq__61518__$1,temp__5825__auto__){
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
});})(seq__61518,chunk__61519,count__61520,i__61521,delay_ms,seq__61518__$1,temp__5825__auto__))
,delay_ms);


var G__61754 = cljs.core.next(seq__61518__$1);
var G__61755 = null;
var G__61756 = (0);
var G__61757 = (0);
seq__61518 = G__61754;
chunk__61519 = G__61755;
count__61520 = G__61756;
i__61521 = G__61757;
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
placesurfer.map_ui.core.sync_country_pick_state_BANG_ = (function placesurfer$map_ui$core$sync_country_pick_state_BANG_(p__61522){
var map__61523 = p__61522;
var map__61523__$1 = cljs.core.__destructure_map(map__61523);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61523__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61523__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
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
placesurfer.map_ui.core.sync_add_pin_mode_BANG_ = (function placesurfer$map_ui$core$sync_add_pin_mode_BANG_(p__61524){
var map__61525 = p__61524;
var map__61525__$1 = cljs.core.__destructure_map(map__61525);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61525__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61525__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_mode_active_QMARK_,cljs.core.boolean$(active_QMARK_));

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_add_pin_click_handler,(cljs.core.truth_(active_QMARK_)?on_click:null));

var temp__5825__auto___61758 = cljs.core.deref(placesurfer.map_ui.core._BANG_map_container);
if(cljs.core.truth_(temp__5825__auto___61758)){
var el_61759 = temp__5825__auto___61758;
if(cljs.core.truth_(active_QMARK_)){
el_61759.classList.add("map-add-pin-active");
} else {
el_61759.classList.remove("map-add-pin-active");
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
}catch (e61526){var _ = e61526;
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
placesurfer.map_ui.core.fly_to_view_BANG_ = (function placesurfer$map_ui$core$fly_to_view_BANG_(p__61527){
var map__61528 = p__61527;
var map__61528__$1 = cljs.core.__destructure_map(map__61528);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61528__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61528__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61528__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61528__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
if(((typeof longitude === 'number') && (((typeof latitude === 'number') && (typeof zoom === 'number'))))){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom,new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null)));
}catch (e61529){var _ = e61529;
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
placesurfer.map_ui.core.center_on_position_BANG_ = (function placesurfer$map_ui$core$center_on_position_BANG_(p__61530){
var map__61531 = p__61530;
var map__61531__$1 = cljs.core.__destructure_map(map__61531);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61531__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),placesurfer.map_ui.core.center_default_zoom);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61531__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
var preserve_zoom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword(null,"preserve-zoom?","preserve-zoom?",-1650190790));
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js((function (){var G__61533 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null);
if(cljs.core.not(preserve_zoom_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61533,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom);
} else {
return G__61533;
}
})()));
}catch (e61532){var _ = e61532;
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

var temp__5825__auto___61760 = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto___61760)){
var m_61761 = temp__5825__auto___61760;
try{m_61761.remove();
}catch (e61534){var __61762 = e61534;
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
