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
}catch (e39265){var _ = e39265;
return false;
}})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
try{return m.isStyleLoaded() === true;
}catch (e39266){var _ = e39266;
return false;
}}

}
}
});
placesurfer.map_ui.core.safe_resize_BANG_ = (function placesurfer$map_ui$core$safe_resize_BANG_(m){
if(cljs.core.truth_(m)){
try{return m.resize();
}catch (e39267){var _ = e39267;
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
}catch (e39268){var _ = e39268;
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
var G__39270 = (function (){try{return marker.getElement();
}catch (e39272){var _ = e39272;
return null;
}})();
if((G__39270 == null)){
return null;
} else {
return placesurfer.map_ui.core.marker_visual_el(G__39270);
}
});
placesurfer.map_ui.core.marker_element = (function placesurfer$map_ui$core$marker_element(var_args){
var G__39274 = arguments.length;
switch (G__39274) {
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
var map__39275 = placesurfer.map_ui.core.marker_style_for(topic);
var map__39275__$1 = cljs.core.__destructure_map(map__39275);
var width_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39275__$1,new cljs.core.Keyword(null,"width-px","width-px",65122451));
var height_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39275__$1,new cljs.core.Keyword(null,"height-px","height-px",-1391665005));
var background_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39275__$1,new cljs.core.Keyword(null,"background-position","background-position",1112702746));
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39275__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
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

var img_39447 = document.createElement("img");
(img_39447.src = image_url);

(img_39447.alt = "");

(img_39447.draggable = false);

(img_39447.style.width = "100%");

(img_39447.style.height = "100%");

(img_39447.style.display = "block");

(img_39447.style.pointerEvents = "none");

visual.appendChild(img_39447);
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
var seq__39278_39448 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__39279_39449 = null;
var count__39280_39450 = (0);
var i__39281_39451 = (0);
while(true){
if((i__39281_39451 < count__39280_39450)){
var marker_39452 = chunk__39279_39449.cljs$core$IIndexed$_nth$arity$2(null,i__39281_39451);
try{marker_39452.remove();
}catch (e39287){var __39453 = e39287;
}

var G__39454 = seq__39278_39448;
var G__39455 = chunk__39279_39449;
var G__39456 = count__39280_39450;
var G__39457 = (i__39281_39451 + (1));
seq__39278_39448 = G__39454;
chunk__39279_39449 = G__39455;
count__39280_39450 = G__39456;
i__39281_39451 = G__39457;
continue;
} else {
var temp__5825__auto___39458 = cljs.core.seq(seq__39278_39448);
if(temp__5825__auto___39458){
var seq__39278_39459__$1 = temp__5825__auto___39458;
if(cljs.core.chunked_seq_QMARK_(seq__39278_39459__$1)){
var c__5548__auto___39460 = cljs.core.chunk_first(seq__39278_39459__$1);
var G__39461 = cljs.core.chunk_rest(seq__39278_39459__$1);
var G__39462 = c__5548__auto___39460;
var G__39463 = cljs.core.count(c__5548__auto___39460);
var G__39464 = (0);
seq__39278_39448 = G__39461;
chunk__39279_39449 = G__39462;
count__39280_39450 = G__39463;
i__39281_39451 = G__39464;
continue;
} else {
var marker_39465 = cljs.core.first(seq__39278_39459__$1);
try{marker_39465.remove();
}catch (e39291){var __39466 = e39291;
}

var G__39467 = cljs.core.next(seq__39278_39459__$1);
var G__39468 = null;
var G__39469 = (0);
var G__39470 = (0);
seq__39278_39448 = G__39467;
chunk__39279_39449 = G__39468;
count__39280_39450 = G__39469;
i__39281_39451 = G__39470;
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
var seq__39292 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__39293 = null;
var count__39294 = (0);
var i__39295 = (0);
while(true){
if((i__39295 < count__39294)){
var marker = chunk__39293.cljs$core$IIndexed$_nth$arity$2(null,i__39295);
var temp__5825__auto___39471 = (function (){try{return marker.getElement();
}catch (e39300){var _ = e39300;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___39471)){
var el_39472 = temp__5825__auto___39471;
(el_39472.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__39473 = seq__39292;
var G__39474 = chunk__39293;
var G__39475 = count__39294;
var G__39476 = (i__39295 + (1));
seq__39292 = G__39473;
chunk__39293 = G__39474;
count__39294 = G__39475;
i__39295 = G__39476;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39292);
if(temp__5825__auto__){
var seq__39292__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39292__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__39292__$1);
var G__39477 = cljs.core.chunk_rest(seq__39292__$1);
var G__39478 = c__5548__auto__;
var G__39479 = cljs.core.count(c__5548__auto__);
var G__39480 = (0);
seq__39292 = G__39477;
chunk__39293 = G__39478;
count__39294 = G__39479;
i__39295 = G__39480;
continue;
} else {
var marker = cljs.core.first(seq__39292__$1);
var temp__5825__auto___39481__$1 = (function (){try{return marker.getElement();
}catch (e39301){var _ = e39301;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___39481__$1)){
var el_39482 = temp__5825__auto___39481__$1;
(el_39482.style.zIndex = placesurfer.map_ui.core.marker_z_index_default);
} else {
}


var G__39483 = cljs.core.next(seq__39292__$1);
var G__39484 = null;
var G__39485 = (0);
var G__39486 = (0);
seq__39292 = G__39483;
chunk__39293 = G__39484;
count__39294 = G__39485;
i__39295 = G__39486;
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
}catch (e39304){var _ = e39304;
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
}catch (e39305){var _ = e39305;
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
}catch (e39310){var _ = e39310;
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
var G__39311 = (marker["placesurferPosition"]);
if((G__39311 == null)){
return null;
} else {
return placesurfer.map_ui.core.position_map(G__39311);
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
placesurfer.map_ui.core.position_match_QMARK_ = (function placesurfer$map_ui$core$position_match_QMARK_(pos,p__39312){
var map__39313 = p__39312;
var map__39313__$1 = cljs.core.__destructure_map(map__39313);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39313__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39313__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39313__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
}catch (e39314){var _ = e39314;
return null;
}}),cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
});
placesurfer.map_ui.core.refresh_row_hover_emphasis_BANG_ = (function placesurfer$map_ui$core$refresh_row_hover_emphasis_BANG_(){
var seq__39315_39499 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__39316_39500 = null;
var count__39317_39501 = (0);
var i__39318_39502 = (0);
while(true){
if((i__39318_39502 < count__39317_39501)){
var marker_39503 = chunk__39316_39500.cljs$core$IIndexed$_nth$arity$2(null,i__39318_39502);
var temp__5825__auto___39504 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_39503);
if(cljs.core.truth_(temp__5825__auto___39504)){
var visual_39506 = temp__5825__auto___39504;
visual_39506.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}


var G__39507 = seq__39315_39499;
var G__39508 = chunk__39316_39500;
var G__39509 = count__39317_39501;
var G__39510 = (i__39318_39502 + (1));
seq__39315_39499 = G__39507;
chunk__39316_39500 = G__39508;
count__39317_39501 = G__39509;
i__39318_39502 = G__39510;
continue;
} else {
var temp__5825__auto___39512 = cljs.core.seq(seq__39315_39499);
if(temp__5825__auto___39512){
var seq__39315_39513__$1 = temp__5825__auto___39512;
if(cljs.core.chunked_seq_QMARK_(seq__39315_39513__$1)){
var c__5548__auto___39514 = cljs.core.chunk_first(seq__39315_39513__$1);
var G__39515 = cljs.core.chunk_rest(seq__39315_39513__$1);
var G__39516 = c__5548__auto___39514;
var G__39517 = cljs.core.count(c__5548__auto___39514);
var G__39518 = (0);
seq__39315_39499 = G__39515;
chunk__39316_39500 = G__39516;
count__39317_39501 = G__39517;
i__39318_39502 = G__39518;
continue;
} else {
var marker_39519 = cljs.core.first(seq__39315_39513__$1);
var temp__5825__auto___39525__$1 = placesurfer.map_ui.core.marker_visual_el_from_marker(marker_39519);
if(cljs.core.truth_(temp__5825__auto___39525__$1)){
var visual_39526 = temp__5825__auto___39525__$1;
visual_39526.classList.remove(placesurfer.map_ui.core.marker_row_hover_class);
} else {
}


var G__39542 = cljs.core.next(seq__39315_39513__$1);
var G__39543 = null;
var G__39544 = (0);
var G__39545 = (0);
seq__39315_39499 = G__39542;
chunk__39316_39500 = G__39543;
count__39317_39501 = G__39544;
i__39318_39502 = G__39545;
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
var seq__39321_39549 = cljs.core.seq(cljs.core.deref(placesurfer.map_ui.core._BANG_markers));
var chunk__39322_39550 = null;
var count__39323_39551 = (0);
var i__39324_39552 = (0);
while(true){
if((i__39324_39552 < count__39323_39551)){
var marker_39553 = chunk__39322_39550.cljs$core$IIndexed$_nth$arity$2(null,i__39324_39552);
var temp__5825__auto___39554 = (function (){try{return marker_39553.getPopup();
}catch (e39329){var _ = e39329;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___39554)){
var popup_39555 = temp__5825__auto___39554;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_39555);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_39555,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_39555)){
try{marker_39553.togglePopup();
}catch (e39331){var __39556 = e39331;
}} else {
}
} else {
}


var G__39557 = seq__39321_39549;
var G__39558 = chunk__39322_39550;
var G__39559 = count__39323_39551;
var G__39560 = (i__39324_39552 + (1));
seq__39321_39549 = G__39557;
chunk__39322_39550 = G__39558;
count__39323_39551 = G__39559;
i__39324_39552 = G__39560;
continue;
} else {
var temp__5825__auto___39561 = cljs.core.seq(seq__39321_39549);
if(temp__5825__auto___39561){
var seq__39321_39562__$1 = temp__5825__auto___39561;
if(cljs.core.chunked_seq_QMARK_(seq__39321_39562__$1)){
var c__5548__auto___39563 = cljs.core.chunk_first(seq__39321_39562__$1);
var G__39564 = cljs.core.chunk_rest(seq__39321_39562__$1);
var G__39565 = c__5548__auto___39563;
var G__39566 = cljs.core.count(c__5548__auto___39563);
var G__39567 = (0);
seq__39321_39549 = G__39564;
chunk__39322_39550 = G__39565;
count__39323_39551 = G__39566;
i__39324_39552 = G__39567;
continue;
} else {
var marker_39568 = cljs.core.first(seq__39321_39562__$1);
var temp__5825__auto___39569__$1 = (function (){try{return marker_39568.getPopup();
}catch (e39333){var _ = e39333;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___39569__$1)){
var popup_39570 = temp__5825__auto___39569__$1;
placesurfer.map_ui.core.cancel_hover_close_BANG_(popup_39570);

placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup_39570,null);

if(placesurfer.map_ui.core.popup_open_QMARK_(popup_39570)){
try{marker_39568.togglePopup();
}catch (e39334){var __39571 = e39334;
}} else {
}
} else {
}


var G__39572 = cljs.core.next(seq__39321_39562__$1);
var G__39573 = null;
var G__39574 = (0);
var G__39575 = (0);
seq__39321_39549 = G__39572;
chunk__39322_39550 = G__39573;
count__39323_39551 = G__39574;
i__39324_39552 = G__39575;
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
}catch (e39337){var __39576 = e39337;
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
}catch (e39340){var __39578 = e39340;
}
placesurfer.map_ui.core.set_popup_open_mode_BANG_(popup,mode);

placesurfer.map_ui.core.elevate_active_marker_BANG_(marker);

placesurfer.map_ui.core.elevate_popup_layer_BANG_(popup);

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_hover_popup,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"popup","popup",635890211),popup,new cljs.core.Keyword(null,"root-el","root-el",1068654895),root_el], null));
});
/**
 * Open the click popup on the marker matching `match` (:id or :longitude/:latitude).
 */
placesurfer.map_ui.core.open_marker_popup_BANG_ = (function placesurfer$map_ui$core$open_marker_popup_BANG_(p__39341){
var map__39342 = p__39341;
var map__39342__$1 = cljs.core.__destructure_map(map__39342);
var match = map__39342__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39342__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39342__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39342__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
}catch (e39345){var _ = e39345;
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
var map__39349 = temp__5823__auto__;
var map__39349__$1 = cljs.core.__destructure_map(map__39349);
var root_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39349__$1,new cljs.core.Keyword(null,"root-el","root-el",1068654895));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39349__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39349__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
}catch (e39353){var _ = e39353;
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
var G__39354 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__39354) : handler.call(null,G__39354));
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

return map.on("mousemove",(function (e){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup);
if(cljs.core.truth_(temp__5825__auto__)){
var map__39357 = temp__5825__auto__;
var map__39357__$1 = cljs.core.__destructure_map(map__39357);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
}),map.on("click",(function (e){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_hover_popup);
if(cljs.core.truth_(temp__5825__auto__)){
var map__39358 = temp__5825__auto__;
var map__39358__$1 = cljs.core.__destructure_map(map__39358);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
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
})));
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
var temp__5825__auto___39594 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5825__auto___39594)){
var visual_39598 = temp__5825__auto___39594;
visual_39598.classList.add(placesurfer.map_ui.core.marker_map_hover_class);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("click",placesurfer.map_ui.core.popup_open_mode(popup))){
return null;
} else {
return placesurfer.map_ui.core.open_popup_BANG_(marker,popup,"hover",root_el);
}
}));

root_el.addEventListener("mouseleave",(function (_){
var temp__5825__auto___39599 = placesurfer.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5825__auto___39599)){
var visual_39600 = temp__5825__auto___39599;
visual_39600.classList.remove(placesurfer.map_ui.core.marker_map_hover_class);
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
var seq__39359 = cljs.core.seq(positions);
var chunk__39360 = null;
var count__39361 = (0);
var i__39362 = (0);
while(true){
if((i__39362 < count__39361)){
var position = chunk__39360.cljs$core$IIndexed$_nth$arity$2(null,i__39362);
var map__39368_39606 = position;
var map__39368_39607__$1 = cljs.core.__destructure_map(map__39368_39606);
var longitude_39608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39368_39607__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_39609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39368_39607__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_39610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39368_39607__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_39611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39368_39607__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var resolved_topic_39612 = (function (){var or__5025__auto__ = marker_topic_39611;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_39610;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__39369_39613 = placesurfer.map_ui.core.marker_style_for(resolved_topic_39612);
var map__39369_39614__$1 = cljs.core.__destructure_map(map__39369_39613);
var anchor_39615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39369_39614__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var root_el_39616 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2(resolved_topic_39612,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position));
var marker_39617 = (new maplibregl.Marker(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_39616,new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor_39615], null))));
var popup_39618 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_39617["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_39617["placesurferPositionClj"] = position);

popup_39618.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_39617.setLngLat([longitude_39608,latitude_39609]);

marker_39617.setPopup(popup_39618);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_39617,popup_39618,root_el_39616,position);

marker_39617.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_markers,cljs.core.conj,marker_39617);


var G__39628 = seq__39359;
var G__39629 = chunk__39360;
var G__39630 = count__39361;
var G__39631 = (i__39362 + (1));
seq__39359 = G__39628;
chunk__39360 = G__39629;
count__39361 = G__39630;
i__39362 = G__39631;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39359);
if(temp__5825__auto__){
var seq__39359__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39359__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__39359__$1);
var G__39632 = cljs.core.chunk_rest(seq__39359__$1);
var G__39633 = c__5548__auto__;
var G__39634 = cljs.core.count(c__5548__auto__);
var G__39635 = (0);
seq__39359 = G__39632;
chunk__39360 = G__39633;
count__39361 = G__39634;
i__39362 = G__39635;
continue;
} else {
var position = cljs.core.first(seq__39359__$1);
var map__39370_39636 = position;
var map__39370_39637__$1 = cljs.core.__destructure_map(map__39370_39636);
var longitude_39638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39370_39637__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_39639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39370_39637__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_39640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39370_39637__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_39641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39370_39637__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var resolved_topic_39642 = (function (){var or__5025__auto__ = marker_topic_39641;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_39640;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__39371_39643 = placesurfer.map_ui.core.marker_style_for(resolved_topic_39642);
var map__39371_39644__$1 = cljs.core.__destructure_map(map__39371_39643);
var anchor_39645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39371_39644__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var root_el_39646 = placesurfer.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2(resolved_topic_39642,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position));
var marker_39647 = (new maplibregl.Marker(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_39646,new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor_39645], null))));
var popup_39648 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_39647["placesurferPosition"] = cljs.core.clj__GT_js(position));

(marker_39647["placesurferPositionClj"] = position);

popup_39648.setHTML(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_39647.setLngLat([longitude_39638,latitude_39639]);

marker_39647.setPopup(popup_39648);

placesurfer.map_ui.core.attach_marker_interactions_BANG_(marker_39647,popup_39648,root_el_39646,position);

marker_39647.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.map_ui.core._BANG_markers,cljs.core.conj,marker_39647);


var G__39651 = cljs.core.next(seq__39359__$1);
var G__39652 = null;
var G__39653 = (0);
var G__39654 = (0);
seq__39359 = G__39651;
chunk__39360 = G__39652;
count__39361 = G__39653;
i__39362 = G__39654;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.map_ui.core.fit_mock_map_BANG_ = (function placesurfer$map_ui$core$fit_mock_map_BANG_(m,p__39372){
var map__39373 = p__39372;
var map__39373__$1 = cljs.core.__destructure_map(map__39373);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39373__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39373__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39373__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39373__$1,new cljs.core.Keyword(null,"north","north",651323902));
(m.fitBoundsCalled = true);

var c_39655 = m.getCenter();
(c_39655.lng = ((west + east) / 2.0));

(c_39655.lat = ((south + north) / 2.0));

return m.setZoom(placesurfer.map_ui.core.fit_max_zoom);
});
placesurfer.map_ui.core.fit_lng_lat_box_BANG_ = (function placesurfer$map_ui$core$fit_lng_lat_box_BANG_(m,box,p__39374){
var map__39375 = p__39374;
var map__39375__$1 = cljs.core.__destructure_map(map__39375);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39375__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
if(placesurfer.map_ui.bounds.valid_lng_lat_box_QMARK_(box)){
var map__39376 = placesurfer.map_ui.bounds.pad_degenerate_box(box);
var map__39376__$1 = cljs.core.__destructure_map(map__39376);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39376__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39376__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39376__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39376__$1,new cljs.core.Keyword(null,"north","north",651323902));
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
placesurfer.map_ui.core.fit_bounds_BANG_ = (function placesurfer$map_ui$core$fit_bounds_BANG_(m,positions,p__39377){
var map__39378 = p__39377;
var map__39378__$1 = cljs.core.__destructure_map(map__39378);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39378__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var temp__5825__auto__ = placesurfer.map_ui.bounds.fit_lng_lat_bounds(positions);
if(cljs.core.truth_(temp__5825__auto__)){
var box = temp__5825__auto__;
return placesurfer.map_ui.core.fit_lng_lat_box_BANG_(m,box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null));
} else {
return null;
}
});
placesurfer.map_ui.core.normalize_state = (function placesurfer$map_ui$core$normalize_state(p__39379){
var map__39380 = p__39379;
var map__39380__$1 = cljs.core.__destructure_map(map__39380);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39380__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39380__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39380__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39380__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39380__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39380__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39380__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.vec(positions),new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),fit_bounds,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003),draft_marker,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185),open_popup_for,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),(function (){var or__5025__auto__ = popup_opts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"fit?","fit?",1773758200),cljs.core.boolean$(fit_QMARK_),new cljs.core.Keyword(null,"animate?","animate?",-1559039739),(((!((animate_QMARK_ == null))))?cljs.core.boolean$(animate_QMARK_):true)], null);
});
placesurfer.map_ui.core.apply_now_BANG_ = (function placesurfer$map_ui$core$apply_now_BANG_(m,p__39383){
var map__39384 = p__39383;
var map__39384__$1 = cljs.core.__destructure_map(map__39384);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39384__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39384__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39384__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39384__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39384__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39384__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39384__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
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
var seq__39391 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50),(150),(400),(800),(1500)], null));
var chunk__39392 = null;
var count__39393 = (0);
var i__39394 = (0);
while(true){
if((i__39394 < count__39393)){
var delay_ms = chunk__39392.cljs$core$IIndexed$_nth$arity$2(null,i__39394);
setTimeout(((function (seq__39391,chunk__39392,count__39393,i__39394,delay_ms){
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
});})(seq__39391,chunk__39392,count__39393,i__39394,delay_ms))
,delay_ms);


var G__39674 = seq__39391;
var G__39675 = chunk__39392;
var G__39676 = count__39393;
var G__39677 = (i__39394 + (1));
seq__39391 = G__39674;
chunk__39392 = G__39675;
count__39393 = G__39676;
i__39394 = G__39677;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39391);
if(temp__5825__auto__){
var seq__39391__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39391__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__39391__$1);
var G__39680 = cljs.core.chunk_rest(seq__39391__$1);
var G__39681 = c__5548__auto__;
var G__39682 = cljs.core.count(c__5548__auto__);
var G__39683 = (0);
seq__39391 = G__39680;
chunk__39392 = G__39681;
count__39393 = G__39682;
i__39394 = G__39683;
continue;
} else {
var delay_ms = cljs.core.first(seq__39391__$1);
setTimeout(((function (seq__39391,chunk__39392,count__39393,i__39394,delay_ms,seq__39391__$1,temp__5825__auto__){
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
});})(seq__39391,chunk__39392,count__39393,i__39394,delay_ms,seq__39391__$1,temp__5825__auto__))
,delay_ms);


var G__39684 = cljs.core.next(seq__39391__$1);
var G__39685 = null;
var G__39686 = (0);
var G__39687 = (0);
seq__39391 = G__39684;
chunk__39392 = G__39685;
count__39393 = G__39686;
i__39394 = G__39687;
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
placesurfer.map_ui.core.sync_country_pick_state_BANG_ = (function placesurfer$map_ui$core$sync_country_pick_state_BANG_(p__39398){
var map__39399 = p__39398;
var map__39399__$1 = cljs.core.__destructure_map(map__39399);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39399__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39399__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
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
}catch (e39401){var _ = e39401;
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
placesurfer.map_ui.core.fly_to_view_BANG_ = (function placesurfer$map_ui$core$fly_to_view_BANG_(p__39405){
var map__39406 = p__39405;
var map__39406__$1 = cljs.core.__destructure_map(map__39406);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39406__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39406__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39406__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39406__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
if(((typeof longitude === 'number') && (((typeof latitude === 'number') && (typeof zoom === 'number'))))){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom,new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null)));
}catch (e39409){var _ = e39409;
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
placesurfer.map_ui.core.center_on_position_BANG_ = (function placesurfer$map_ui$core$center_on_position_BANG_(p__39412){
var map__39413 = p__39412;
var map__39413__$1 = cljs.core.__destructure_map(map__39413);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39413__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39413__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39413__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),placesurfer.map_ui.core.center_default_zoom);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39413__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
var preserve_zoom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39413__$1,new cljs.core.Keyword(null,"preserve-zoom?","preserve-zoom?",-1650190790));
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
var temp__5825__auto__ = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js((function (){var G__39415 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?placesurfer.map_ui.core.center_fly_duration_ms:(0))], null);
if(cljs.core.not(preserve_zoom_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39415,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom);
} else {
return G__39415;
}
})()));
}catch (e39414){var _ = e39414;
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

var temp__5825__auto___39695 = cljs.core.deref(placesurfer.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto___39695)){
var m_39696 = temp__5825__auto___39695;
try{m_39696.remove();
}catch (e39422){var __39697 = e39422;
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

return cljs.core.reset_BANG_(placesurfer.map_ui.core._BANG_country_pick_click_handler,null);
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
