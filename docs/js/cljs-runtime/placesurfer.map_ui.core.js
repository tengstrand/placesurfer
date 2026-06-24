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
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_pin_pick_active_QMARK_ !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_pin_pick_active_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_pin_pick_click_handler !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_pin_pick_click_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_ui !== 'undefined') && (typeof placesurfer.map_ui.core !== 'undefined') && (typeof placesurfer.map_ui.core._BANG_pin_pick_button !== 'undefined')){
} else {
placesurfer.map_ui.core._BANG_pin_pick_button = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
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
}catch (e48454){var _ = e48454;
return false;
}})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
try{return m.isStyleLoaded() === true;
}catch (e48455){var _ = e48455;
return false;
}}

}
}
});
placesurfer.map_ui.core.safe_resize_BANG_ = (function placesurfer$map_ui$core$safe_resize_BANG_(m){
if(cljs.core.truth_(m)){
try{return m.resize();
}catch (e48456){var _ = e48456;
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
}catch (e48457){var _ = e48457;
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
var G__48458 = (function (){try{return marker.getElement();
}catch (e48459){var _ = e48459;
return null;
}})();
if((G__48458 == null)){
return null;
} else {
return placesurfer.map_ui.core.marker_visual_el(G__48458);
}
});
placesurfer.map_ui.core.marker_element = (function placesurfer$map_ui$core$marker_element(var_args){
var G__48461 = arguments.length;
switch (G__48461) {
case 1:
return placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$1 = (function (topic){
return placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2(topic,null);
}));

(placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2 = (function (topic,image_url_override){
var el = document.createElement("div");
var visual = document.createElement("div");
var map__48462 = placesurfer.map_ui.core.marker_style_for(topic);
var map__48462__$1 = cljs.core.__destructure_map(map__48462);
var width_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48462__$1,new cljs.core.Keyword(null,"width-px","width-px",65122451));
var height_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48462__$1,new cljs.core.Keyword(null,"height-px","height-px",-1391665005));
var background_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48462__$1,new cljs.core.Keyword(null,"background-position","background-position",1112702746));
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48462__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
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

(visual.style.transformOrigin = placesurfer.map_ui.core.marker_transform_origin(anchor));

(visual.style.transition = "transform 120ms ease-out");

if(img_QMARK_){
(el.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);

var img_48555 = document.createElement("img");
(img_48555.src = image_url);

(img_48555.alt = "");

(img_48555.draggable = false);

(img_48555.style.width = "100%");

(img_48555.style.height = "100%");

(img_48555.style.display = "block");

(img_48555.style.pointerEvents = "none");

visual.appendChild(img_48555);
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

(placesurfer.map_ui.core.marker_element.cljs$lang$maxFixedArity = 2);

placesurfer.map_ui.core.clear_markers_BANG_ = (function placesurfer$map_ui$core$clear_markers_BANG_(){
var seq__48463_48556 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__48464_48557 = null;
var count__48465_48558 = (0);
var i__48466_48559 = (0);
while(true){
if((i__48466_48559 < count__48465_48558)){
var marker_48560 = chunk__48464_48557.cljs$core$IIndexed$_nth$arity$2(null,i__48466_48559);
try{marker_48560.remove();
}catch (e48469){var __48561 = e48469;
}

var G__48562 = seq__48463_48556;
var G__48563 = chunk__48464_48557;
var G__48564 = count__48465_48558;
var G__48565 = (i__48466_48559 + (1));
seq__48463_48556 = G__48562;
chunk__48464_48557 = G__48563;
count__48465_48558 = G__48564;
i__48466_48559 = G__48565;
continue;
} else {
var temp__5825__auto___48566 = cljs.core.seq(seq__48463_48556);
if(temp__5825__auto___48566){
var seq__48463_48567__$1 = temp__5825__auto___48566;
if(cljs.core.chunked_seq_QMARK_(seq__48463_48567__$1)){
var c__5548__auto___48568 = cljs.core.chunk_first(seq__48463_48567__$1);
var G__48569 = cljs.core.chunk_rest(seq__48463_48567__$1);
var G__48570 = c__5548__auto___48568;
var G__48571 = cljs.core.count(c__5548__auto___48568);
var G__48572 = (0);
seq__48463_48556 = G__48569;
chunk__48464_48557 = G__48570;
count__48465_48558 = G__48571;
i__48466_48559 = G__48572;
continue;
} else {
var marker_48573 = cljs.core.first(seq__48463_48567__$1);
try{marker_48573.remove();
}catch (e48470){var __48574 = e48470;
}

var G__48575 = cljs.core.next(seq__48463_48567__$1);
var G__48576 = null;
var G__48577 = (0);
var G__48578 = (0);
seq__48463_48556 = G__48575;
chunk__48464_48557 = G__48576;
count__48465_48558 = G__48577;
i__48466_48559 = G__48578;
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
placesurfer.map_ui.core.reset_marker_layering_BANG_ = (function placesurfer$map_ui$core$reset_marker_layering_BANG_(){
var seq__48471 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__48472 = null;
var count__48473 = (0);
var i__48474 = (0);
while(true){
if((i__48474 < count__48473)){
var marker = chunk__48472.cljs$core$IIndexed$_nth$arity$2(null,i__48474);
var temp__5825__auto___48579 = (function (){try{return marker.getElement();
}catch (e48477){var _ = e48477;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___48579)){
var el_48580 = temp__5825__auto___48579;
(el_48580.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__48581 = seq__48471;
var G__48582 = chunk__48472;
var G__48583 = count__48473;
var G__48584 = (i__48474 + (1));
seq__48471 = G__48581;
chunk__48472 = G__48582;
count__48473 = G__48583;
i__48474 = G__48584;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48471);
if(temp__5825__auto__){
var seq__48471__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48471__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__48471__$1);
var G__48585 = cljs.core.chunk_rest(seq__48471__$1);
var G__48586 = c__5548__auto__;
var G__48587 = cljs.core.count(c__5548__auto__);
var G__48588 = (0);
seq__48471 = G__48585;
chunk__48472 = G__48586;
count__48473 = G__48587;
i__48474 = G__48588;
continue;
} else {
var marker = cljs.core.first(seq__48471__$1);
var temp__5825__auto___48589__$1 = (function (){try{return marker.getElement();
}catch (e48478){var _ = e48478;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___48589__$1)){
var el_48590 = temp__5825__auto___48589__$1;
(el_48590.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__48591 = cljs.core.next(seq__48471__$1);
var G__48592 = null;
var G__48593 = (0);
var G__48594 = (0);
seq__48471 = G__48591;
chunk__48472 = G__48592;
count__48473 = G__48593;
i__48474 = G__48594;
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
}catch (e48479){var _ = e48479;
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
}catch (e48480){var _ = e48480;
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
}catch (e48481){var _ = e48481;
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
var G__48482 = (marker["placesurferPosition"]);
if((G__48482 == null)){
return null;
} else {
return placesurfer.map_ui.core.position_map(G__48482);
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
placesurfer.map_ui.core.position_match_QMARK_ = (function placesurfer$map_ui$core$position_match_QMARK_(pos,p__48483){
var map__48484 = p__48483;
var map__48484__$1 = cljs.core.__destructure_map(map__48484);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48484__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48484__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48484__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
}catch (e48485){var _ = e48485;
return null;
}}),cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
});
placesurfer.map_ui.core.refresh_row_hover_emphasis_BANG_ = (function placesurfer$map_ui$core$refresh_row_hover_emphasis_BANG_(){
var seq__48486_48595 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__48487_48596 = null;
var count__48488_48597 = (0);
var i__48489_48598 = (0);
while(true){
if((i__48489_48598 < count__48488_48597)){
var marker_48599 = chunk__48487_48596.cljs$core$IIndexed$_nth$arity$2(null,i__48489_48598);
var temp__5825__auto___48600 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_48599);
if(cljs.core.truth_(temp__5825__auto___48600)){
var visual_48601 = temp__5825__auto___48600;
visual_48601.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}


var G__48602 = seq__48486_48595;
var G__48603 = chunk__48487_48596;
var G__48604 = count__48488_48597;
var G__48605 = (i__48489_48598 + (1));
seq__48486_48595 = G__48602;
chunk__48487_48596 = G__48603;
count__48488_48597 = G__48604;
i__48489_48598 = G__48605;
continue;
} else {
var temp__5825__auto___48606 = cljs.core.seq(seq__48486_48595);
if(temp__5825__auto___48606){
var seq__48486_48607__$1 = temp__5825__auto___48606;
if(cljs.core.chunked_seq_QMARK_(seq__48486_48607__$1)){
var c__5548__auto___48608 = cljs.core.chunk_first(seq__48486_48607__$1);
var G__48609 = cljs.core.chunk_rest(seq__48486_48607__$1);
var G__48610 = c__5548__auto___48608;
var G__48611 = cljs.core.count(c__5548__auto___48608);
var G__48612 = (0);
seq__48486_48595 = G__48609;
chunk__48487_48596 = G__48610;
count__48488_48597 = G__48611;
i__48489_48598 = G__48612;
continue;
} else {
var marker_48613 = cljs.core.first(seq__48486_48607__$1);
var temp__5825__auto___48614__$1 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_48613);
if(cljs.core.truth_(temp__5825__auto___48614__$1)){
var visual_48615 = temp__5825__auto___48614__$1;
visual_48615.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}


var G__48616 = cljs.core.next(seq__48486_48607__$1);
var G__48617 = null;
var G__48618 = (0);
var G__48619 = (0);
seq__48486_48595 = G__48616;
chunk__48487_48596 = G__48617;
count__48488_48597 = G__48618;
i__48489_48598 = G__48619;
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
var seq__48490_48620 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__48491_48621 = null;
var count__48492_48622 = (0);
var i__48493_48623 = (0);
while(true){
if((i__48493_48623 < count__48492_48622)){
var marker_48624 = chunk__48491_48621.cljs$core$IIndexed$_nth$arity$2(null,i__48493_48623);
var temp__5825__auto___48625 = (function (){try{return marker_48624.getPopup();
}catch (e48498){var _ = e48498;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___48625)){
var popup_48626 = temp__5825__auto___48625;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_48626);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_48626,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_48626)){
try{marker_48624.togglePopup();
}catch (e48499){var __48627 = e48499;
}} else {
}
} else {
}


var G__48628 = seq__48490_48620;
var G__48629 = chunk__48491_48621;
var G__48630 = count__48492_48622;
var G__48631 = (i__48493_48623 + (1));
seq__48490_48620 = G__48628;
chunk__48491_48621 = G__48629;
count__48492_48622 = G__48630;
i__48493_48623 = G__48631;
continue;
} else {
var temp__5825__auto___48632 = cljs.core.seq(seq__48490_48620);
if(temp__5825__auto___48632){
var seq__48490_48633__$1 = temp__5825__auto___48632;
if(cljs.core.chunked_seq_QMARK_(seq__48490_48633__$1)){
var c__5548__auto___48634 = cljs.core.chunk_first(seq__48490_48633__$1);
var G__48635 = cljs.core.chunk_rest(seq__48490_48633__$1);
var G__48636 = c__5548__auto___48634;
var G__48637 = cljs.core.count(c__5548__auto___48634);
var G__48638 = (0);
seq__48490_48620 = G__48635;
chunk__48491_48621 = G__48636;
count__48492_48622 = G__48637;
i__48493_48623 = G__48638;
continue;
} else {
var marker_48639 = cljs.core.first(seq__48490_48633__$1);
var temp__5825__auto___48640__$1 = (function (){try{return marker_48639.getPopup();
}catch (e48500){var _ = e48500;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___48640__$1)){
var popup_48641 = temp__5825__auto___48640__$1;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_48641);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_48641,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_48641)){
try{marker_48639.togglePopup();
}catch (e48501){var __48642 = e48501;
}} else {
}
} else {
}


var G__48643 = cljs.core.next(seq__48490_48633__$1);
var G__48644 = null;
var G__48645 = (0);
var G__48646 = (0);
seq__48490_48620 = G__48643;
chunk__48491_48621 = G__48644;
count__48492_48622 = G__48645;
i__48493_48623 = G__48646;
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
}catch (e48502){var __48647 = e48502;
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
}catch (e48503){var __48648 = e48503;
}
placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup,mode);

placesurfer.map_ui.core.elevate_active_marker_BANG_(marker);

placesurfer.map_ui.core.elevate_popup_layer_BANG_(popup);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_hover_popup,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"popup","popup",635890211),popup,new cljs.core.Keyword(null,"root-el","root-el",1068654895),root_el], null));
});
/**
 * Open the click popup on the marker matching `match` (:id or :longitude/:latitude).
 */
placesurfer.map_ui.core.open_marker_popup_BANG_ = (function placesurfer$map_ui$core$open_marker_popup_BANG_(p__48504){
var map__48505 = p__48504;
var map__48505__$1 = cljs.core.__destructure_map(map__48505);
var match = map__48505__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48505__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48505__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48505__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
}catch (e48506){var _ = e48506;
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
var map__48507 = temp__5823__auto__;
var map__48507__$1 = cljs.core.__destructure_map(map__48507);
var root_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48507__$1,new cljs.core.Keyword(null,"root-el","root-el",1068654895));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48507__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48507__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
}catch (e48508){var _ = e48508;
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
var G__48509 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__48509) : handler.call(null,G__48509));
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
placesurfer.map_ui.core.ensure_map_pin_pick_click_BANG_ = (function placesurfer$map_ui$core$ensure_map_pin_pick_click_BANG_(m){
if(cljs.core.truth_(m.placesurferPinPickClick)){
return null;
} else {
(m.placesurferPinPickClick = true);

return m.on("click",(function (e){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_pin_pick_active_QMARK_))){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_pin_pick_click_handler);
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
var G__48510_48649 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),false], null);
(placesurfer.map_ui.core.sync_pin_pick_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? placesurfer.map_ui.core.sync_pin_pick_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__48510_48649) : placesurfer.map_ui.core.sync_pin_pick_state_BANG_.call(null,G__48510_48649));

var G__48511 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__48511) : handler.call(null,G__48511));
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
placesurfer.map_ui.core.ensure_map_popup_guard_BANG_ = (function placesurfer$map_ui$core$ensure_map_popup_guard_BANG_(map){
if(cljs.core.truth_(map.placesurferPopupGuard)){
return null;
} else {
(map.placesurferPopupGuard = true);

map.on("mousemove",(function (e){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup);
if(cljs.core.truth_(temp__5825__auto__)){
var map__48512 = temp__5825__auto__;
var map__48512__$1 = cljs.core.__destructure_map(map__48512);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48512__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48512__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
var map__48513 = temp__5825__auto__;
var map__48513__$1 = cljs.core.__destructure_map(map__48513);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48513__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48513__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
var temp__5825__auto___48651 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5825__auto___48651)){
var visual_48652 = temp__5825__auto___48651;
visual_48652.classList.add(placesurfer.map_ui.core.marker_map_hover_class);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("click",placesurfer.map_ui.core.popup_open_mode(popup))){
return null;
} else {
return placesurfer.map_ui.core.open_popup_BANG_(marker,popup,"hover",root_el);
}
}));

root_el.addEventListener("mouseleave",(function (_){
var temp__5825__auto___48653 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5825__auto___48653)){
var visual_48654 = temp__5825__auto___48653;
visual_48654.classList.remove(placesurfer.map_ui.core.marker_map_hover_class);
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

if(placesurfer.map_ui.core.marker_pick_enabled_QMARK_(position)){
var temp__5823__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_marker_pick_handler);
if(cljs.core.truth_(temp__5823__auto__)){
var handler = temp__5823__auto__;
var temp__5825__auto__ = placesurfer.map_ui.core.marker_click_position(marker,root_el,position);
if(cljs.core.truth_(temp__5825__auto__)){
var pos = temp__5825__auto__;
placesurfer.map_ui.core.close_all_popups_BANG_();

return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(pos) : handler.call(null,pos));
} else {
return null;
}
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
}));
});
placesurfer.map_ui.core.add_markers_BANG_ = (function placesurfer$map_ui$core$add_markers_BANG_(m,positions,popup_opts){
var seq__48514 = cljs.core.seq(positions);
var chunk__48515 = null;
var count__48516 = (0);
var i__48517 = (0);
while(true){
if((i__48517 < count__48516)){
var position = chunk__48515.cljs$core$IIndexed$_nth$arity$2(null,i__48517);
var map__48522_48655 = position;
var map__48522_48656__$1 = cljs.core.__destructure_map(map__48522_48655);
var longitude_48657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48522_48656__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_48658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48522_48656__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_48659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48522_48656__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_48660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48522_48656__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var resolved_topic_48661 = (function (){var or__5025__auto__ = marker_topic_48660;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_48659;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__48523_48662 = placesurfer.map_ui.core.marker_style_for(resolved_topic_48661);
var map__48523_48663__$1 = cljs.core.__destructure_map(map__48523_48662);
var anchor_48664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48523_48663__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var root_el_48665 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2(resolved_topic_48661,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position));
var marker_48666 = (new maplibregl.Marker(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_48665,new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor_48664], null))));
var popup_48667 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_48666["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_48666["placesurferPositionClj"] = position);

popup_48667.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_48666.setLngLat([longitude_48657,latitude_48658]);

marker_48666.setPopup(popup_48667);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_48666,popup_48667,root_el_48665,position);

marker_48666.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_markers,cljs.core.conj,marker_48666);


var G__48671 = seq__48514;
var G__48672 = chunk__48515;
var G__48673 = count__48516;
var G__48674 = (i__48517 + (1));
seq__48514 = G__48671;
chunk__48515 = G__48672;
count__48516 = G__48673;
i__48517 = G__48674;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48514);
if(temp__5825__auto__){
var seq__48514__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48514__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__48514__$1);
var G__48675 = cljs.core.chunk_rest(seq__48514__$1);
var G__48676 = c__5548__auto__;
var G__48677 = cljs.core.count(c__5548__auto__);
var G__48678 = (0);
seq__48514 = G__48675;
chunk__48515 = G__48676;
count__48516 = G__48677;
i__48517 = G__48678;
continue;
} else {
var position = cljs.core.first(seq__48514__$1);
var map__48524_48679 = position;
var map__48524_48680__$1 = cljs.core.__destructure_map(map__48524_48679);
var longitude_48681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48524_48680__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_48682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48524_48680__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_48683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48524_48680__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_48684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48524_48680__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var resolved_topic_48685 = (function (){var or__5025__auto__ = marker_topic_48684;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_48683;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__48525_48686 = placesurfer.map_ui.core.marker_style_for(resolved_topic_48685);
var map__48525_48687__$1 = cljs.core.__destructure_map(map__48525_48686);
var anchor_48688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48525_48687__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var root_el_48689 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2(resolved_topic_48685,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position));
var marker_48690 = (new maplibregl.Marker(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_48689,new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor_48688], null))));
var popup_48691 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_48690["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_48690["placesurferPositionClj"] = position);

popup_48691.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_48690.setLngLat([longitude_48681,latitude_48682]);

marker_48690.setPopup(popup_48691);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_48690,popup_48691,root_el_48689,position);

marker_48690.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_markers,cljs.core.conj,marker_48690);


var G__48692 = cljs.core.next(seq__48514__$1);
var G__48693 = null;
var G__48694 = (0);
var G__48695 = (0);
seq__48514 = G__48692;
chunk__48515 = G__48693;
count__48516 = G__48694;
i__48517 = G__48695;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.map_ui.core.fit_mock_map_BANG_ = (function placesurfer$map_ui$core$fit_mock_map_BANG_(m,p__48526){
var map__48527 = p__48526;
var map__48527__$1 = cljs.core.__destructure_map(map__48527);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48527__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48527__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48527__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48527__$1,new cljs.core.Keyword(null,"north","north",651323902));
(m.fitBoundsCalled = true);

var c_48696 = m.getCenter();
(c_48696.lng = ((west + east) / 2.0));

(c_48696.lat = ((south + north) / 2.0));

return m.setZoom(placesurfer.map_ui.core.fit_max_zoom);
});
placesurfer.map_ui.core.fit_lng_lat_box_BANG_ = (function placesurfer$map_ui$core$fit_lng_lat_box_BANG_(m,box,p__48528){
var map__48529 = p__48528;
var map__48529__$1 = cljs.core.__destructure_map(map__48529);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48529__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
if(placesurfer.map_ui.bounds.valid_lng_lat_box_QMARK_(box)){
var map__48530 = placesurfer.map_ui.bounds.pad_degenerate_box(box);
var map__48530__$1 = cljs.core.__destructure_map(map__48530);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48530__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48530__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48530__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48530__$1,new cljs.core.Keyword(null,"north","north",651323902));
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
placesurfer.map_ui.core.fit_bounds_BANG_ = (function placesurfer$map_ui$core$fit_bounds_BANG_(m,positions,p__48531){
var map__48532 = p__48531;
var map__48532__$1 = cljs.core.__destructure_map(map__48532);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48532__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var temp__5825__auto__ = placesurfer.map_ui.bounds.fit_lng_lat_bounds(positions);
if(cljs.core.truth_(temp__5825__auto__)){
var box = temp__5825__auto__;
return placesurfer.map_ui.core.fit_lng_lat_box_BANG_(m,box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null));
} else {
return null;
}
});
placesurfer.map_ui.core.normalize_state = (function placesurfer$map_ui$core$normalize_state(p__48533){
var map__48534 = p__48533;
var map__48534__$1 = cljs.core.__destructure_map(map__48534);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48534__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48534__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48534__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48534__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48534__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48534__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48534__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.vec(positions),new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),fit_bounds,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003),draft_marker,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185),open_popup_for,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),(function (){var or__5025__auto__ = popup_opts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"fit?","fit?",1773758200),cljs.core.boolean$(fit_QMARK_),new cljs.core.Keyword(null,"animate?","animate?",-1559039739),(((!((animate_QMARK_ == null))))?cljs.core.boolean$(animate_QMARK_):true)], null);
});
placesurfer.map_ui.core.apply_now_BANG_ = (function placesurfer$map_ui$core$apply_now_BANG_(m,p__48535){
var map__48536 = p__48535;
var map__48536__$1 = cljs.core.__destructure_map(map__48536);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48536__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48536__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48536__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48536__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48536__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48536__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48536__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
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
var seq__48537 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50),(150),(400),(800),(1500)], null));
var chunk__48538 = null;
var count__48539 = (0);
var i__48540 = (0);
while(true){
if((i__48540 < count__48539)){
var delay_ms = chunk__48538.cljs$core$IIndexed$_nth$arity$2(null,i__48540);
setTimeout(((function (seq__48537,chunk__48538,count__48539,i__48540,delay_ms){
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
});})(seq__48537,chunk__48538,count__48539,i__48540,delay_ms))
,delay_ms);


var G__48697 = seq__48537;
var G__48698 = chunk__48538;
var G__48699 = count__48539;
var G__48700 = (i__48540 + (1));
seq__48537 = G__48697;
chunk__48538 = G__48698;
count__48539 = G__48699;
i__48540 = G__48700;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48537);
if(temp__5825__auto__){
var seq__48537__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48537__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__48537__$1);
var G__48701 = cljs.core.chunk_rest(seq__48537__$1);
var G__48702 = c__5548__auto__;
var G__48703 = cljs.core.count(c__5548__auto__);
var G__48704 = (0);
seq__48537 = G__48701;
chunk__48538 = G__48702;
count__48539 = G__48703;
i__48540 = G__48704;
continue;
} else {
var delay_ms = cljs.core.first(seq__48537__$1);
setTimeout(((function (seq__48537,chunk__48538,count__48539,i__48540,delay_ms,seq__48537__$1,temp__5825__auto__){
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
});})(seq__48537,chunk__48538,count__48539,i__48540,delay_ms,seq__48537__$1,temp__5825__auto__))
,delay_ms);


var G__48705 = cljs.core.next(seq__48537__$1);
var G__48706 = null;
var G__48707 = (0);
var G__48708 = (0);
seq__48537 = G__48705;
chunk__48538 = G__48706;
count__48539 = G__48707;
i__48540 = G__48708;
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
placesurfer.map_ui.core.sync_country_pick_state_BANG_ = (function placesurfer$map_ui$core$sync_country_pick_state_BANG_(p__48541){
var map__48542 = p__48541;
var map__48542__$1 = cljs.core.__destructure_map(map__48542);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48542__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48542__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_country_pick_active_QMARK_,cljs.core.boolean$(active_QMARK_));

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_country_pick_click_handler,(cljs.core.truth_(active_QMARK_)?on_click:null));

var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return placesurfer.map_ui.core.set_map_cursor_BANG_(m,(cljs.core.truth_(active_QMARK_)?"default":"grab"));
} else {
return null;
}
});
placesurfer.map_ui.core.update_pin_pick_button_state_BANG_ = (function placesurfer$map_ui$core$update_pin_pick_button_state_BANG_(){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_pin_pick_button);
if(cljs.core.truth_(temp__5825__auto__)){
var btn = temp__5825__auto__;
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_pin_pick_active_QMARK_))){
return btn.classList.add("pin-pick-btn--active");
} else {
return btn.classList.remove("pin-pick-btn--active");
}
} else {
return null;
}
});
/**
 * Toggle pin-pick mode: crosshair cursor and map clicks invoke `on-click` when active.
 */
placesurfer.map_ui.core.sync_pin_pick_state_BANG_ = (function placesurfer$map_ui$core$sync_pin_pick_state_BANG_(p__48543){
var map__48544 = p__48543;
var map__48544__$1 = cljs.core.__destructure_map(map__48544);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48544__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48544__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_pin_pick_active_QMARK_,cljs.core.boolean$(active_QMARK_));

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_pin_pick_click_handler,(cljs.core.truth_(active_QMARK_)?on_click:null));

placesurfer.map_ui.core.update_pin_pick_button_state_BANG_();

var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return placesurfer.map_ui.core.set_map_cursor_BANG_(m,(cljs.core.truth_(active_QMARK_)?"default":"grab"));
} else {
return null;
}
});
/**
 * Add a top-left map button that toggles pin-pick mode. `on-pick` is called
 * with {:longitude x :latitude y} when the user clicks the map.
 */
placesurfer.map_ui.core.add_pin_pick_control_BANG_ = (function placesurfer$map_ui$core$add_pin_pick_control_BANG_(on_pick){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
if(cljs.core.truth_(m.placesurferPinPickControl)){
return null;
} else {
var container = document.createElement("div");
var button = document.createElement("button");
var img = document.createElement("img");
(container.className = "maplibregl-ctrl maplibregl-ctrl-group");

(button.type = "button");

(button.className = "maplibregl-ctrl-icon pin-pick-btn");

(img.src = "/images/click.png");

button.appendChild(img);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_pin_pick_button,button);

button.addEventListener("click",(function (){
if(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_pin_pick_active_QMARK_))){
return placesurfer.map_ui.core.sync_pin_pick_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),false], null));
} else {
return placesurfer.map_ui.core.sync_pin_pick_state_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active?","active?",459499776),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_pick], null));
}
}));

container.appendChild(button);

var ctrl = ({"onAdd": (function (_m){
return container;
}), "onRemove": (function (){
cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_pin_pick_button,null);

if(cljs.core.truth_(container.parentNode)){
return container.parentNode.removeChild(container);
} else {
return null;
}
})});
(m.placesurferPinPickControl = ctrl);

return m.addControl(ctrl,"top-left");
}
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
}catch (e48545){var _ = e48545;
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
placesurfer.map_ui.core.fly_to_view_BANG_ = (function placesurfer$map_ui$core$fly_to_view_BANG_(p__48546){
var map__48547 = p__48546;
var map__48547__$1 = cljs.core.__destructure_map(map__48547);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48547__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48547__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48547__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48547__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
if(((typeof longitude === 'number') && (((typeof latitude === 'number') && (typeof zoom === 'number'))))){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom,new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null)));
}catch (e48548){var _ = e48548;
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
placesurfer.map_ui.core.center_on_position_BANG_ = (function placesurfer$map_ui$core$center_on_position_BANG_(p__48549){
var map__48550 = p__48549;
var map__48550__$1 = cljs.core.__destructure_map(map__48550);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48550__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48550__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48550__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),placesurfer.map_ui.core.center_default_zoom);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48550__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
var preserve_zoom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48550__$1,new cljs.core.Keyword(null,"preserve-zoom?","preserve-zoom?",-1650190790));
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js((function (){var G__48552 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null);
if(cljs.core.not(preserve_zoom_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48552,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom);
} else {
return G__48552;
}
})()));
}catch (e48551){var _ = e48551;
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

placesurfer.map_ui.core.ensure_map_pin_pick_click_BANG_(m);

placesurfer.map_ui.core.set_map_cursor_BANG_(m,(cljs.core.truth_(cljs.core.deref(placesurfer.map_ui.core._BANG_country_pick_active_QMARK_))?"default":"grab"));

placesurfer.map_ui.core.safe_resize_BANG_(m);

placesurfer.map_ui.core.consume_pending_BANG_(m);

return placesurfer.map_ui.core.schedule_consume_when_ready_BANG_(m);
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

var temp__5825__auto___48709 = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto___48709)){
var m_48710 = temp__5825__auto___48709;
try{m_48710.remove();
}catch (e48553){var __48711 = e48553;
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

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_pin_pick_active_QMARK_,false);

cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_pin_pick_click_handler,null);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_pin_pick_button,null);
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
