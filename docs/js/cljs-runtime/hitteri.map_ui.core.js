goog.provide('hitteri.map_ui.core');
hitteri.map_ui.core.style_url = "https://tiles.openfreemap.org/styles/liberty";
hitteri.map_ui.core.default_view = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [15.0,62.0], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(4)], null);
hitteri.map_ui.core.fit_padding = (56);
hitteri.map_ui.core.fit_max_zoom = (8);
hitteri.map_ui.core.fit_animate_duration_ms = (700);
hitteri.map_ui.core.center_fly_duration_ms = (700);
hitteri.map_ui.core.center_default_zoom = (14);
hitteri.map_ui.core.hover_close_delay_ms = (80);
hitteri.map_ui.core.marker_z_index_default = "3";
hitteri.map_ui.core.marker_z_index_active = "5";
hitteri.map_ui.core.popup_z_index = "100";
hitteri.map_ui.core.marker_row_hover_class = "hitteri-marker--row-hover";
hitteri.map_ui.core.marker_map_hover_class = "hitteri-marker--map-hover";
if((typeof hitteri !== 'undefined') && (typeof hitteri.map_ui !== 'undefined') && (typeof hitteri.map_ui.core !== 'undefined') && (typeof hitteri.map_ui.core._BANG_map !== 'undefined')){
} else {
hitteri.map_ui.core._BANG_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof hitteri !== 'undefined') && (typeof hitteri.map_ui !== 'undefined') && (typeof hitteri.map_ui.core !== 'undefined') && (typeof hitteri.map_ui.core._BANG_map_container !== 'undefined')){
} else {
hitteri.map_ui.core._BANG_map_container = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof hitteri !== 'undefined') && (typeof hitteri.map_ui !== 'undefined') && (typeof hitteri.map_ui.core !== 'undefined') && (typeof hitteri.map_ui.core._BANG_resize_observer !== 'undefined')){
} else {
hitteri.map_ui.core._BANG_resize_observer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof hitteri !== 'undefined') && (typeof hitteri.map_ui !== 'undefined') && (typeof hitteri.map_ui.core !== 'undefined') && (typeof hitteri.map_ui.core._BANG_markers !== 'undefined')){
} else {
hitteri.map_ui.core._BANG_markers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof hitteri !== 'undefined') && (typeof hitteri.map_ui !== 'undefined') && (typeof hitteri.map_ui.core !== 'undefined') && (typeof hitteri.map_ui.core._BANG_hover_popup !== 'undefined')){
} else {
hitteri.map_ui.core._BANG_hover_popup = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof hitteri !== 'undefined') && (typeof hitteri.map_ui !== 'undefined') && (typeof hitteri.map_ui.core !== 'undefined') && (typeof hitteri.map_ui.core._BANG_marker_pick_handler !== 'undefined')){
} else {
hitteri.map_ui.core._BANG_marker_pick_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof hitteri !== 'undefined') && (typeof hitteri.map_ui !== 'undefined') && (typeof hitteri.map_ui.core !== 'undefined') && (typeof hitteri.map_ui.core._BANG_country_pick_active_QMARK_ !== 'undefined')){
} else {
hitteri.map_ui.core._BANG_country_pick_active_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof hitteri !== 'undefined') && (typeof hitteri.map_ui !== 'undefined') && (typeof hitteri.map_ui.core !== 'undefined') && (typeof hitteri.map_ui.core._BANG_country_pick_click_handler !== 'undefined')){
} else {
hitteri.map_ui.core._BANG_country_pick_click_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof hitteri !== 'undefined') && (typeof hitteri.map_ui !== 'undefined') && (typeof hitteri.map_ui.core !== 'undefined') && (typeof hitteri.map_ui.core._BANG_pending_state !== 'undefined')){
} else {
hitteri.map_ui.core._BANG_pending_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof hitteri !== 'undefined') && (typeof hitteri.map_ui !== 'undefined') && (typeof hitteri.map_ui.core !== 'undefined') && (typeof hitteri.map_ui.core._BANG_row_hover_match !== 'undefined')){
} else {
hitteri.map_ui.core._BANG_row_hover_match = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}

hitteri.map_ui.core.mock_map_QMARK_ = (function hitteri$map_ui$core$mock_map_QMARK_(m){
return m.hitteriMockMap === true;
});
hitteri.map_ui.core.map_ready_QMARK_ = (function hitteri$map_ui$core$map_ready_QMARK_(m){
if((m == null)){
return false;
} else {
if(hitteri.map_ui.core.mock_map_QMARK_(m)){
return true;
} else {
var or__5025__auto__ = (function (){try{return m.loaded() === true;
}catch (e47945){var _ = e47945;
return false;
}})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
try{return m.isStyleLoaded() === true;
}catch (e47946){var _ = e47946;
return false;
}}

}
}
});
hitteri.map_ui.core.safe_resize_BANG_ = (function hitteri$map_ui$core$safe_resize_BANG_(m){
if(cljs.core.truth_(m)){
try{return m.resize();
}catch (e47947){var _ = e47947;
return null;
}} else {
return null;
}
});
hitteri.map_ui.core.map_attached_QMARK_ = (function hitteri$map_ui$core$map_attached_QMARK_(m,el){
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
}catch (e47948){var _ = e47948;
return false;
}});
hitteri.map_ui.core.marker_style_for = (function hitteri$map_ui$core$marker_style_for(topic){
return hitteri.map_ui.markers.style_for_topic(topic);
});
hitteri.map_ui.core.marker_url_for = (function hitteri$map_ui$core$marker_url_for(topic){
return hitteri.map_ui.markers.url_for_topic(topic);
});
hitteri.map_ui.core.draft_marker_QMARK_ = (function hitteri$map_ui$core$draft_marker_QMARK_(position){
return new cljs.core.Keyword(null,"draft?","draft?",-874288372).cljs$core$IFn$_invoke$arity$1(position) === true;
});
hitteri.map_ui.core.draft_url_pin_QMARK_ = (function hitteri$map_ui$core$draft_url_pin_QMARK_(position){
return ((hitteri.map_ui.core.draft_marker_QMARK_(position)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url-pin","url-pin",924738382),new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154).cljs$core$IFn$_invoke$arity$1(position))));
});
hitteri.map_ui.core.marker_pick_enabled_QMARK_ = (function hitteri$map_ui$core$marker_pick_enabled_QMARK_(position){
return (((!(hitteri.map_ui.core.draft_marker_QMARK_(position)))) || (hitteri.map_ui.core.draft_url_pin_QMARK_(position)));
});
hitteri.map_ui.core.img_marker_QMARK_ = (function hitteri$map_ui$core$img_marker_QMARK_(topic){
return hitteri.map_ui.markers.img_marker_QMARK_(topic);
});
hitteri.map_ui.core.marker_transform_origin = (function hitteri$map_ui$core$marker_transform_origin(anchor){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anchor,"center")){
return "center center";
} else {
return "center bottom";
}
});
hitteri.map_ui.core.marker_visual_el = (function hitteri$map_ui$core$marker_visual_el(root_el){
if(cljs.core.truth_(root_el)){
return root_el.querySelector(".hitteri-marker__visual");
} else {
return null;
}
});
hitteri.map_ui.core.marker_visual_el_from_marker = (function hitteri$map_ui$core$marker_visual_el_from_marker(marker){
var G__47949 = (function (){try{return marker.getElement();
}catch (e47950){var _ = e47950;
return null;
}})();
if((G__47949 == null)){
return null;
} else {
return hitteri.map_ui.core.marker_visual_el(G__47949);
}
});
hitteri.map_ui.core.marker_element = (function hitteri$map_ui$core$marker_element(var_args){
var G__47952 = arguments.length;
switch (G__47952) {
case 1:
return hitteri.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hitteri.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$1 = (function (topic){
return hitteri.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2(topic,null);
}));

(hitteri.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2 = (function (topic,image_url_override){
var el = document.createElement("div");
var visual = document.createElement("div");
var map__47953 = hitteri.map_ui.core.marker_style_for(topic);
var map__47953__$1 = cljs.core.__destructure_map(map__47953);
var width_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47953__$1,new cljs.core.Keyword(null,"width-px","width-px",65122451));
var height_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47953__$1,new cljs.core.Keyword(null,"height-px","height-px",-1391665005));
var background_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47953__$1,new cljs.core.Keyword(null,"background-position","background-position",1112702746));
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47953__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var image_url = (function (){var or__5025__auto__ = image_url_override;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hitteri.map_ui.core.marker_url_for(topic);
}
})();
var img_QMARK_ = hitteri.map_ui.core.img_marker_QMARK_(topic);
el.classList.add("maplibregl-marker","hitteri-marker");

visual.classList.add("hitteri-marker__visual");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"url-pin","url-pin",924738382))){
el.classList.add("hitteri-marker--url-pin");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"location","location",1815599388))){
el.classList.add("hitteri-marker--location");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"pin","pin",-2111774834))){
el.classList.add("hitteri-marker--pin");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"removed","removed",609626430))){
el.classList.add("hitteri-marker--removed");
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

(visual.style.transformOrigin = hitteri.map_ui.core.marker_transform_origin(anchor));

(visual.style.transition = "transform 120ms ease-out");

if(img_QMARK_){
(el.style.zIndex = hitteri.map_ui.core.marker_z_index_default);

var img_48042 = document.createElement("img");
(img_48042.src = image_url);

(img_48042.alt = "");

(img_48042.draggable = false);

(img_48042.style.width = "100%");

(img_48042.style.height = "100%");

(img_48042.style.display = "block");

(img_48042.style.pointerEvents = "none");

visual.appendChild(img_48042);
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

(hitteri.map_ui.core.marker_element.cljs$lang$maxFixedArity = 2);

hitteri.map_ui.core.clear_markers_BANG_ = (function hitteri$map_ui$core$clear_markers_BANG_(){
var seq__47954_48043 = cljs.core.seq(cljs.core.deref(hitteri.map_ui.core._BANG_markers));
var chunk__47955_48044 = null;
var count__47956_48045 = (0);
var i__47957_48046 = (0);
while(true){
if((i__47957_48046 < count__47956_48045)){
var marker_48047 = chunk__47955_48044.cljs$core$IIndexed$_nth$arity$2(null,i__47957_48046);
try{marker_48047.remove();
}catch (e47960){var __48048 = e47960;
}

var G__48049 = seq__47954_48043;
var G__48050 = chunk__47955_48044;
var G__48051 = count__47956_48045;
var G__48052 = (i__47957_48046 + (1));
seq__47954_48043 = G__48049;
chunk__47955_48044 = G__48050;
count__47956_48045 = G__48051;
i__47957_48046 = G__48052;
continue;
} else {
var temp__5825__auto___48053 = cljs.core.seq(seq__47954_48043);
if(temp__5825__auto___48053){
var seq__47954_48054__$1 = temp__5825__auto___48053;
if(cljs.core.chunked_seq_QMARK_(seq__47954_48054__$1)){
var c__5548__auto___48055 = cljs.core.chunk_first(seq__47954_48054__$1);
var G__48056 = cljs.core.chunk_rest(seq__47954_48054__$1);
var G__48057 = c__5548__auto___48055;
var G__48058 = cljs.core.count(c__5548__auto___48055);
var G__48059 = (0);
seq__47954_48043 = G__48056;
chunk__47955_48044 = G__48057;
count__47956_48045 = G__48058;
i__47957_48046 = G__48059;
continue;
} else {
var marker_48060 = cljs.core.first(seq__47954_48054__$1);
try{marker_48060.remove();
}catch (e47961){var __48061 = e47961;
}

var G__48062 = cljs.core.next(seq__47954_48054__$1);
var G__48063 = null;
var G__48064 = (0);
var G__48065 = (0);
seq__47954_48043 = G__48062;
chunk__47955_48044 = G__48063;
count__47956_48045 = G__48064;
i__47957_48046 = G__48065;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_markers,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_hover_popup,null);

return cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_row_hover_match,null);
});
hitteri.map_ui.core.reset_marker_layering_BANG_ = (function hitteri$map_ui$core$reset_marker_layering_BANG_(){
var seq__47962 = cljs.core.seq(cljs.core.deref(hitteri.map_ui.core._BANG_markers));
var chunk__47963 = null;
var count__47964 = (0);
var i__47965 = (0);
while(true){
if((i__47965 < count__47964)){
var marker = chunk__47963.cljs$core$IIndexed$_nth$arity$2(null,i__47965);
var temp__5825__auto___48066 = (function (){try{return marker.getElement();
}catch (e47968){var _ = e47968;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___48066)){
var el_48067 = temp__5825__auto___48066;
(el_48067.style.zIndex = hitteri.map_ui.core.marker_z_index_default);
} else {
}


var G__48068 = seq__47962;
var G__48069 = chunk__47963;
var G__48070 = count__47964;
var G__48071 = (i__47965 + (1));
seq__47962 = G__48068;
chunk__47963 = G__48069;
count__47964 = G__48070;
i__47965 = G__48071;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47962);
if(temp__5825__auto__){
var seq__47962__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47962__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__47962__$1);
var G__48072 = cljs.core.chunk_rest(seq__47962__$1);
var G__48073 = c__5548__auto__;
var G__48074 = cljs.core.count(c__5548__auto__);
var G__48075 = (0);
seq__47962 = G__48072;
chunk__47963 = G__48073;
count__47964 = G__48074;
i__47965 = G__48075;
continue;
} else {
var marker = cljs.core.first(seq__47962__$1);
var temp__5825__auto___48076__$1 = (function (){try{return marker.getElement();
}catch (e47969){var _ = e47969;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___48076__$1)){
var el_48077 = temp__5825__auto___48076__$1;
(el_48077.style.zIndex = hitteri.map_ui.core.marker_z_index_default);
} else {
}


var G__48078 = cljs.core.next(seq__47962__$1);
var G__48079 = null;
var G__48080 = (0);
var G__48081 = (0);
seq__47962 = G__48078;
chunk__47963 = G__48079;
count__47964 = G__48080;
i__47965 = G__48081;
continue;
}
} else {
return null;
}
}
break;
}
});
hitteri.map_ui.core.elevate_active_marker_BANG_ = (function hitteri$map_ui$core$elevate_active_marker_BANG_(marker){
hitteri.map_ui.core.reset_marker_layering_BANG_();

var temp__5825__auto__ = (function (){try{return marker.getElement();
}catch (e47970){var _ = e47970;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return (el.style.zIndex = hitteri.map_ui.core.marker_z_index_active);
} else {
return null;
}
});
hitteri.map_ui.core.elevate_popup_layer_BANG_ = (function hitteri$map_ui$core$elevate_popup_layer_BANG_(popup){
var temp__5825__auto__ = (function (){try{return popup.getElement();
}catch (e47971){var _ = e47971;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return (el.style.zIndex = hitteri.map_ui.core.popup_z_index);
} else {
return null;
}
});
hitteri.map_ui.core.popup_open_mode = (function hitteri$map_ui$core$popup_open_mode(popup){
return popup.hitteriOpenMode;
});
hitteri.map_ui.core.set_popup_open_mode_BANG_ = (function hitteri$map_ui$core$set_popup_open_mode_BANG_(popup,mode){
return (popup.hitteriOpenMode = mode);
});
hitteri.map_ui.core.cancel_hover_close_BANG_ = (function hitteri$map_ui$core$cancel_hover_close_BANG_(popup){
var temp__5825__auto__ = popup.hitteriCloseTimer;
if(cljs.core.truth_(temp__5825__auto__)){
var timer = temp__5825__auto__;
clearTimeout(timer);

return (popup.hitteriCloseTimer = null);
} else {
return null;
}
});
hitteri.map_ui.core.popup_open_QMARK_ = (function hitteri$map_ui$core$popup_open_QMARK_(popup){
return popup.isOpen() === true;
});
hitteri.map_ui.core.marker_popup_open_QMARK_ = (function hitteri$map_ui$core$marker_popup_open_QMARK_(marker){
var temp__5825__auto__ = (function (){try{return marker.getPopup();
}catch (e47972){var _ = e47972;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var popup = temp__5825__auto__;
return hitteri.map_ui.core.popup_open_QMARK_(popup);
} else {
return null;
}
});
hitteri.map_ui.core.any_marker_popup_open_QMARK_ = (function hitteri$map_ui$core$any_marker_popup_open_QMARK_(){
return cljs.core.boolean$(cljs.core.some(hitteri.map_ui.core.marker_popup_open_QMARK_,cljs.core.deref(hitteri.map_ui.core._BANG_markers)));
});
hitteri.map_ui.core.position_map = (function hitteri$map_ui$core$position_map(position){
if(cljs.core.map_QMARK_(position)){
return position;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(position,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
});
hitteri.map_ui.core.marker_position_data = (function hitteri$map_ui$core$marker_position_data(marker){
var or__5025__auto__ = (marker["hitteriPositionClj"]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__47973 = (marker["hitteriPosition"]);
if((G__47973 == null)){
return null;
} else {
return hitteri.map_ui.core.position_map(G__47973);
}
}
});
hitteri.map_ui.core.augment_marker_click_position = (function hitteri$map_ui$core$augment_marker_click_position(root_el,pos){
if(cljs.core.truth_((function (){var and__5023__auto__ = pos;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = root_el;
if(cljs.core.truth_(and__5023__auto____$1)){
return root_el.classList.contains("hitteri-marker--pin");
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
hitteri.map_ui.core.position_match_QMARK_ = (function hitteri$map_ui$core$position_match_QMARK_(pos,p__47974){
var map__47975 = p__47974;
var map__47975__$1 = cljs.core.__destructure_map(map__47975);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
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
hitteri.map_ui.core.find_marker_by_match = (function hitteri$map_ui$core$find_marker_by_match(match){
return cljs.core.some((function (marker){
try{var pos = hitteri.map_ui.core.marker_position_data(marker);
if(cljs.core.truth_((function (){var and__5023__auto__ = pos;
if(cljs.core.truth_(and__5023__auto__)){
return hitteri.map_ui.core.position_match_QMARK_(pos,match);
} else {
return and__5023__auto__;
}
})())){
return marker;
} else {
return null;
}
}catch (e47976){var _ = e47976;
return null;
}}),cljs.core.deref(hitteri.map_ui.core._BANG_markers));
});
hitteri.map_ui.core.refresh_row_hover_emphasis_BANG_ = (function hitteri$map_ui$core$refresh_row_hover_emphasis_BANG_(){
var seq__47977_48082 = cljs.core.seq(cljs.core.deref(hitteri.map_ui.core._BANG_markers));
var chunk__47978_48083 = null;
var count__47979_48084 = (0);
var i__47980_48085 = (0);
while(true){
if((i__47980_48085 < count__47979_48084)){
var marker_48086 = chunk__47978_48083.cljs$core$IIndexed$_nth$arity$2(null,i__47980_48085);
var temp__5825__auto___48087 = hitteri.map_ui.core.marker_visual_el_from_marker(marker_48086);
if(cljs.core.truth_(temp__5825__auto___48087)){
var visual_48088 = temp__5825__auto___48087;
visual_48088.classList.remove(hitteri.map_ui.core.marker_row_hover_class);
} else {
}


var G__48089 = seq__47977_48082;
var G__48090 = chunk__47978_48083;
var G__48091 = count__47979_48084;
var G__48092 = (i__47980_48085 + (1));
seq__47977_48082 = G__48089;
chunk__47978_48083 = G__48090;
count__47979_48084 = G__48091;
i__47980_48085 = G__48092;
continue;
} else {
var temp__5825__auto___48093 = cljs.core.seq(seq__47977_48082);
if(temp__5825__auto___48093){
var seq__47977_48094__$1 = temp__5825__auto___48093;
if(cljs.core.chunked_seq_QMARK_(seq__47977_48094__$1)){
var c__5548__auto___48095 = cljs.core.chunk_first(seq__47977_48094__$1);
var G__48096 = cljs.core.chunk_rest(seq__47977_48094__$1);
var G__48097 = c__5548__auto___48095;
var G__48098 = cljs.core.count(c__5548__auto___48095);
var G__48099 = (0);
seq__47977_48082 = G__48096;
chunk__47978_48083 = G__48097;
count__47979_48084 = G__48098;
i__47980_48085 = G__48099;
continue;
} else {
var marker_48100 = cljs.core.first(seq__47977_48094__$1);
var temp__5825__auto___48101__$1 = hitteri.map_ui.core.marker_visual_el_from_marker(marker_48100);
if(cljs.core.truth_(temp__5825__auto___48101__$1)){
var visual_48102 = temp__5825__auto___48101__$1;
visual_48102.classList.remove(hitteri.map_ui.core.marker_row_hover_class);
} else {
}


var G__48103 = cljs.core.next(seq__47977_48094__$1);
var G__48104 = null;
var G__48105 = (0);
var G__48106 = (0);
seq__47977_48082 = G__48103;
chunk__47978_48083 = G__48104;
count__47979_48084 = G__48105;
i__47980_48085 = G__48106;
continue;
}
} else {
}
}
break;
}

var temp__5825__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_row_hover_match);
if(cljs.core.truth_(temp__5825__auto__)){
var match = temp__5825__auto__;
var temp__5825__auto____$1 = hitteri.map_ui.core.find_marker_by_match(match);
if(cljs.core.truth_(temp__5825__auto____$1)){
var marker = temp__5825__auto____$1;
var temp__5825__auto____$2 = hitteri.map_ui.core.marker_visual_el_from_marker(marker);
if(cljs.core.truth_(temp__5825__auto____$2)){
var visual = temp__5825__auto____$2;
return visual.classList.add(hitteri.map_ui.core.marker_row_hover_class);
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
hitteri.map_ui.core.set_marker_row_emphasis_BANG_ = (function hitteri$map_ui$core$set_marker_row_emphasis_BANG_(match){
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(match) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(match) === 'number'));
}
})())){
cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_row_hover_match,match);

return hitteri.map_ui.core.refresh_row_hover_emphasis_BANG_();
} else {
return null;
}
});
/**
 * Restore map marker size after list row hover ends.
 */
hitteri.map_ui.core.clear_marker_row_emphasis_BANG_ = (function hitteri$map_ui$core$clear_marker_row_emphasis_BANG_(){
cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_row_hover_match,null);

return hitteri.map_ui.core.refresh_row_hover_emphasis_BANG_();
});
hitteri.map_ui.core.close_all_popups_BANG_ = (function hitteri$map_ui$core$close_all_popups_BANG_(){
var seq__47981_48107 = cljs.core.seq(cljs.core.deref(hitteri.map_ui.core._BANG_markers));
var chunk__47982_48108 = null;
var count__47983_48109 = (0);
var i__47984_48110 = (0);
while(true){
if((i__47984_48110 < count__47983_48109)){
var marker_48111 = chunk__47982_48108.cljs$core$IIndexed$_nth$arity$2(null,i__47984_48110);
var temp__5825__auto___48112 = (function (){try{return marker_48111.getPopup();
}catch (e47989){var _ = e47989;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___48112)){
var popup_48113 = temp__5825__auto___48112;
hitteri.map_ui.core.cancel_hover_close_BANG_(popup_48113);

hitteri.map_ui.core.set_popup_open_mode_BANG_(popup_48113,null);

if(hitteri.map_ui.core.popup_open_QMARK_(popup_48113)){
try{marker_48111.togglePopup();
}catch (e47990){var __48114 = e47990;
}} else {
}
} else {
}


var G__48115 = seq__47981_48107;
var G__48116 = chunk__47982_48108;
var G__48117 = count__47983_48109;
var G__48118 = (i__47984_48110 + (1));
seq__47981_48107 = G__48115;
chunk__47982_48108 = G__48116;
count__47983_48109 = G__48117;
i__47984_48110 = G__48118;
continue;
} else {
var temp__5825__auto___48119 = cljs.core.seq(seq__47981_48107);
if(temp__5825__auto___48119){
var seq__47981_48120__$1 = temp__5825__auto___48119;
if(cljs.core.chunked_seq_QMARK_(seq__47981_48120__$1)){
var c__5548__auto___48121 = cljs.core.chunk_first(seq__47981_48120__$1);
var G__48122 = cljs.core.chunk_rest(seq__47981_48120__$1);
var G__48123 = c__5548__auto___48121;
var G__48124 = cljs.core.count(c__5548__auto___48121);
var G__48125 = (0);
seq__47981_48107 = G__48122;
chunk__47982_48108 = G__48123;
count__47983_48109 = G__48124;
i__47984_48110 = G__48125;
continue;
} else {
var marker_48126 = cljs.core.first(seq__47981_48120__$1);
var temp__5825__auto___48127__$1 = (function (){try{return marker_48126.getPopup();
}catch (e47991){var _ = e47991;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto___48127__$1)){
var popup_48128 = temp__5825__auto___48127__$1;
hitteri.map_ui.core.cancel_hover_close_BANG_(popup_48128);

hitteri.map_ui.core.set_popup_open_mode_BANG_(popup_48128,null);

if(hitteri.map_ui.core.popup_open_QMARK_(popup_48128)){
try{marker_48126.togglePopup();
}catch (e47992){var __48129 = e47992;
}} else {
}
} else {
}


var G__48130 = cljs.core.next(seq__47981_48120__$1);
var G__48131 = null;
var G__48132 = (0);
var G__48133 = (0);
seq__47981_48107 = G__48130;
chunk__47982_48108 = G__48131;
count__47983_48109 = G__48132;
i__47984_48110 = G__48133;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_hover_popup,null);

return hitteri.map_ui.core.reset_marker_layering_BANG_();
});
hitteri.map_ui.core.close_popup_BANG_ = (function hitteri$map_ui$core$close_popup_BANG_(marker,popup){
hitteri.map_ui.core.cancel_hover_close_BANG_(popup);

if(hitteri.map_ui.core.popup_open_QMARK_(popup)){
try{marker.togglePopup();
}catch (e47993){var __48134 = e47993;
}} else {
}

hitteri.map_ui.core.set_popup_open_mode_BANG_(popup,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(popup,new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.map_ui.core._BANG_hover_popup)))){
cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_hover_popup,null);
} else {
}

if(hitteri.map_ui.core.any_marker_popup_open_QMARK_()){
return null;
} else {
return hitteri.map_ui.core.reset_marker_layering_BANG_();
}
});
hitteri.map_ui.core.open_popup_BANG_ = (function hitteri$map_ui$core$open_popup_BANG_(marker,popup,mode,root_el){
hitteri.map_ui.core.close_all_popups_BANG_();

try{marker.togglePopup();
}catch (e47994){var __48135 = e47994;
}
hitteri.map_ui.core.set_popup_open_mode_BANG_(popup,mode);

hitteri.map_ui.core.elevate_active_marker_BANG_(marker);

hitteri.map_ui.core.elevate_popup_layer_BANG_(popup);

return cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_hover_popup,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"popup","popup",635890211),popup,new cljs.core.Keyword(null,"root-el","root-el",1068654895),root_el], null));
});
/**
 * Open the click popup on the marker matching `match` (:id or :longitude/:latitude).
 */
hitteri.map_ui.core.open_marker_popup_BANG_ = (function hitteri$map_ui$core$open_marker_popup_BANG_(p__47995){
var map__47996 = p__47995;
var map__47996__$1 = cljs.core.__destructure_map(map__47996);
var match = map__47996__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47996__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47996__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47996__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
if(cljs.core.truth_((function (){var or__5025__auto__ = id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((typeof longitude === 'number') && (typeof latitude === 'number'));
}
})())){
return cljs.core.some((function (marker){
try{var pos = hitteri.map_ui.core.marker_position_data(marker);
if(cljs.core.truth_((function (){var and__5023__auto__ = pos;
if(cljs.core.truth_(and__5023__auto__)){
return hitteri.map_ui.core.position_match_QMARK_(pos,match);
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
hitteri.map_ui.core.open_popup_BANG_(marker,popup,"click",root_el);

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
}catch (e47997){var _ = e47997;
return null;
}}),cljs.core.deref(hitteri.map_ui.core._BANG_markers));
} else {
return null;
}
});
hitteri.map_ui.core.schedule_hover_close_BANG_ = (function hitteri$map_ui$core$schedule_hover_close_BANG_(marker,popup){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hover",hitteri.map_ui.core.popup_open_mode(popup))){
hitteri.map_ui.core.cancel_hover_close_BANG_(popup);

return (popup.hitteriCloseTimer = setTimeout((function (){
(popup.hitteriCloseTimer = null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hover",hitteri.map_ui.core.popup_open_mode(popup))){
return hitteri.map_ui.core.close_popup_BANG_(marker,popup);
} else {
return null;
}
}),hitteri.map_ui.core.hover_close_delay_ms));
} else {
return null;
}
});
hitteri.map_ui.core.el_contains_point_QMARK_ = (function hitteri$map_ui$core$el_contains_point_QMARK_(el,client_x,client_y){
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
hitteri.map_ui.core.map_event_client_point = (function hitteri$map_ui$core$map_event_client_point(e){
var dom = (function (){var or__5025__auto__ = e.originalEvent;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return e;
}
})();
return ({"x": dom.clientX, "y": dom.clientY});
});
hitteri.map_ui.core.pointer_over_hover_zone_QMARK_ = (function hitteri$map_ui$core$pointer_over_hover_zone_QMARK_(client_x,client_y){
var temp__5823__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_hover_popup);
if(cljs.core.truth_(temp__5823__auto__)){
var map__47998 = temp__5823__auto__;
var map__47998__$1 = cljs.core.__destructure_map(map__47998);
var root_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47998__$1,new cljs.core.Keyword(null,"root-el","root-el",1068654895));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47998__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47998__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
var marker__$1 = marker;
var popup__$1 = popup;
var or__5025__auto__ = hitteri.map_ui.core.el_contains_point_QMARK_(root_el,client_x,client_y);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var temp__5825__auto__ = popup__$1.getElement();
if(cljs.core.truth_(temp__5825__auto__)){
var popup_el = temp__5825__auto__;
return hitteri.map_ui.core.el_contains_point_QMARK_(popup_el,client_x,client_y);
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
return hitteri.map_ui.core.el_contains_point_QMARK_(marker_el,client_x,client_y);
} else {
return null;
}
}
}
} else {
return false;
}
});
hitteri.map_ui.core.set_map_cursor_BANG_ = (function hitteri$map_ui$core$set_map_cursor_BANG_(m,cursor){
var temp__5825__auto__ = (function (){try{return m.getCanvas();
}catch (e47999){var _ = e47999;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
return (canvas.style.cursor = cursor);
} else {
return null;
}
});
hitteri.map_ui.core.ensure_map_country_pick_click_BANG_ = (function hitteri$map_ui$core$ensure_map_country_pick_click_BANG_(m){
if(cljs.core.truth_(m.hitteriCountryPickClick)){
return null;
} else {
(m.hitteriCountryPickClick = true);

return m.on("click",(function (e){
if(cljs.core.truth_(cljs.core.deref(hitteri.map_ui.core._BANG_country_pick_active_QMARK_))){
var temp__5825__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_country_pick_click_handler);
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
var G__48000 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ll.lng,new cljs.core.Keyword(null,"latitude","latitude",394867543),ll.lat], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__48000) : handler.call(null,G__48000));
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
hitteri.map_ui.core.click_inside_popup_or_marker_QMARK_ = (function hitteri$map_ui$core$click_inside_popup_or_marker_QMARK_(target){
return cljs.core.boolean$((cljs.core.truth_(target)?(function (){var or__5025__auto__ = target.closest(".maplibregl-popup");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = target.closest(".map-marker-popup");
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = target.closest(".hitteri-marker");
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return target.closest(".maplibregl-marker");
}
}
}
})():null));
});
hitteri.map_ui.core.ensure_map_popup_guard_BANG_ = (function hitteri$map_ui$core$ensure_map_popup_guard_BANG_(map){
if(cljs.core.truth_(map.hitteriPopupGuard)){
return null;
} else {
(map.hitteriPopupGuard = true);

return map.on("mousemove",(function (e){
var temp__5825__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_hover_popup);
if(cljs.core.truth_(temp__5825__auto__)){
var map__48001 = temp__5825__auto__;
var map__48001__$1 = cljs.core.__destructure_map(map__48001);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48001__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48001__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hover",hitteri.map_ui.core.popup_open_mode(popup))){
var pt = hitteri.map_ui.core.map_event_client_point(e);
var x = pt.x;
var y = pt.y;
if(cljs.core.truth_(hitteri.map_ui.core.pointer_over_hover_zone_QMARK_(x,y))){
return null;
} else {
return hitteri.map_ui.core.close_popup_BANG_(marker,popup);
}
} else {
return null;
}
} else {
return null;
}
}),map.on("click",(function (e){
var temp__5825__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_hover_popup);
if(cljs.core.truth_(temp__5825__auto__)){
var map__48002 = temp__5825__auto__;
var map__48002__$1 = cljs.core.__destructure_map(map__48002);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48002__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48002__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
if(hitteri.map_ui.core.popup_open_QMARK_(popup)){
var target = (function (){var or__5025__auto__ = e.originalEvent;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return e;
}
})().target;
if(hitteri.map_ui.core.click_inside_popup_or_marker_QMARK_(target)){
return null;
} else {
return hitteri.map_ui.core.close_popup_BANG_(marker,popup);
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
hitteri.map_ui.core.marker_click_position = (function hitteri$map_ui$core$marker_click_position(marker,root_el,position){
var temp__5825__auto__ = (function (){var or__5025__auto__ = hitteri.map_ui.core.marker_position_data(marker);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = ((cljs.core.map_QMARK_(position))?position:null);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
if(cljs.core.truth_(root_el)){
return (root_el["hitteriPositionClj"]);
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var pos = temp__5825__auto__;
return hitteri.map_ui.core.augment_marker_click_position(root_el,pos);
} else {
return null;
}
});
hitteri.map_ui.core.attach_marker_interactions_BANG_ = (function hitteri$map_ui$core$attach_marker_interactions_BANG_(marker,popup,root_el,position){
root_el.addEventListener("mouseenter",(function (_){
var temp__5825__auto___48140 = hitteri.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5825__auto___48140)){
var visual_48141 = temp__5825__auto___48140;
visual_48141.classList.add(hitteri.map_ui.core.marker_map_hover_class);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("click",hitteri.map_ui.core.popup_open_mode(popup))){
return null;
} else {
return hitteri.map_ui.core.open_popup_BANG_(marker,popup,"hover",root_el);
}
}));

root_el.addEventListener("mouseleave",(function (_){
var temp__5825__auto___48142 = hitteri.map_ui.core.marker_visual_el(root_el);
if(cljs.core.truth_(temp__5825__auto___48142)){
var visual_48143 = temp__5825__auto___48142;
visual_48143.classList.remove(hitteri.map_ui.core.marker_map_hover_class);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hover",hitteri.map_ui.core.popup_open_mode(popup))){
return hitteri.map_ui.core.schedule_hover_close_BANG_(marker,popup);
} else {
return null;
}
}));

if(cljs.core.truth_(popup.hitteriPopupBridge)){
} else {
(popup.hitteriPopupBridge = true);

popup.on("open",(function (_){
hitteri.map_ui.core.elevate_popup_layer_BANG_(popup);

var temp__5825__auto__ = popup.getElement();
if(cljs.core.truth_(temp__5825__auto__)){
var popup_el = temp__5825__auto__;
popup_el.addEventListener("mouseenter",(function (){
return hitteri.map_ui.core.cancel_hover_close_BANG_(popup);
}));

return popup_el.addEventListener("mouseleave",(function (){
return hitteri.map_ui.core.schedule_hover_close_BANG_(marker,popup);
}));
} else {
return null;
}
}));
}

return root_el.addEventListener("click",(function (e){
e.stopPropagation();

if(hitteri.map_ui.core.marker_pick_enabled_QMARK_(position)){
var temp__5823__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_marker_pick_handler);
if(cljs.core.truth_(temp__5823__auto__)){
var handler = temp__5823__auto__;
var temp__5825__auto__ = hitteri.map_ui.core.marker_click_position(marker,root_el,position);
if(cljs.core.truth_(temp__5825__auto__)){
var pos = temp__5825__auto__;
hitteri.map_ui.core.close_all_popups_BANG_();

return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(pos) : handler.call(null,pos));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("click",hitteri.map_ui.core.popup_open_mode(popup))){
return hitteri.map_ui.core.close_popup_BANG_(marker,popup);
} else {
return hitteri.map_ui.core.open_popup_BANG_(marker,popup,"click",root_el);
}
}
} else {
return null;
}
}));
});
hitteri.map_ui.core.add_markers_BANG_ = (function hitteri$map_ui$core$add_markers_BANG_(m,positions,popup_opts){
var seq__48003 = cljs.core.seq(positions);
var chunk__48004 = null;
var count__48005 = (0);
var i__48006 = (0);
while(true){
if((i__48006 < count__48005)){
var position = chunk__48004.cljs$core$IIndexed$_nth$arity$2(null,i__48006);
var map__48011_48144 = position;
var map__48011_48145__$1 = cljs.core.__destructure_map(map__48011_48144);
var longitude_48146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48011_48145__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_48147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48011_48145__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_48148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48011_48145__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_48149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48011_48145__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var resolved_topic_48150 = (function (){var or__5025__auto__ = marker_topic_48149;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_48148;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__48012_48151 = hitteri.map_ui.core.marker_style_for(resolved_topic_48150);
var map__48012_48152__$1 = cljs.core.__destructure_map(map__48012_48151);
var anchor_48153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48012_48152__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var root_el_48154 = hitteri.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2(resolved_topic_48150,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position));
var marker_48155 = (new maplibregl.Marker(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_48154,new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor_48153], null))));
var popup_48156 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_48155["hitteriPosition"] = cljs.core.clj__GT_js(position));

(marker_48155["hitteriPositionClj"] = position);

popup_48156.setHTML(hitteri.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_48155.setLngLat([longitude_48146,latitude_48147]);

marker_48155.setPopup(popup_48156);

hitteri.map_ui.core.attach_marker_interactions_BANG_(marker_48155,popup_48156,root_el_48154,position);

marker_48155.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hitteri.map_ui.core._BANG_markers,cljs.core.conj,marker_48155);


var G__48157 = seq__48003;
var G__48158 = chunk__48004;
var G__48159 = count__48005;
var G__48160 = (i__48006 + (1));
seq__48003 = G__48157;
chunk__48004 = G__48158;
count__48005 = G__48159;
i__48006 = G__48160;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48003);
if(temp__5825__auto__){
var seq__48003__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48003__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__48003__$1);
var G__48161 = cljs.core.chunk_rest(seq__48003__$1);
var G__48162 = c__5548__auto__;
var G__48163 = cljs.core.count(c__5548__auto__);
var G__48164 = (0);
seq__48003 = G__48161;
chunk__48004 = G__48162;
count__48005 = G__48163;
i__48006 = G__48164;
continue;
} else {
var position = cljs.core.first(seq__48003__$1);
var map__48013_48165 = position;
var map__48013_48166__$1 = cljs.core.__destructure_map(map__48013_48165);
var longitude_48167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48013_48166__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude_48168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48013_48166__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var topic_48169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48013_48166__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var marker_topic_48170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48013_48166__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var resolved_topic_48171 = (function (){var or__5025__auto__ = marker_topic_48170;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = topic_48169;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"discgolf","discgolf",416907656);
}
}
})();
var map__48014_48172 = hitteri.map_ui.core.marker_style_for(resolved_topic_48171);
var map__48014_48173__$1 = cljs.core.__destructure_map(map__48014_48172);
var anchor_48174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48014_48173__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var root_el_48175 = hitteri.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$2(resolved_topic_48171,new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(position));
var marker_48176 = (new maplibregl.Marker(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),root_el_48175,new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor_48174], null))));
var popup_48177 = (new maplibregl.Popup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"closeButton","closeButton",1038725049),false,new cljs.core.Keyword(null,"closeOnClick","closeOnClick",174981882),false,new cljs.core.Keyword(null,"offset","offset",296498311),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker-popup"], null))));
(marker_48176["hitteriPosition"] = cljs.core.clj__GT_js(position));

(marker_48176["hitteriPositionClj"] = position);

popup_48177.setHTML(hitteri.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,popup_opts));

marker_48176.setLngLat([longitude_48167,latitude_48168]);

marker_48176.setPopup(popup_48177);

hitteri.map_ui.core.attach_marker_interactions_BANG_(marker_48176,popup_48177,root_el_48175,position);

marker_48176.addTo(m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hitteri.map_ui.core._BANG_markers,cljs.core.conj,marker_48176);


var G__48178 = cljs.core.next(seq__48003__$1);
var G__48179 = null;
var G__48180 = (0);
var G__48181 = (0);
seq__48003 = G__48178;
chunk__48004 = G__48179;
count__48005 = G__48180;
i__48006 = G__48181;
continue;
}
} else {
return null;
}
}
break;
}
});
hitteri.map_ui.core.fit_mock_map_BANG_ = (function hitteri$map_ui$core$fit_mock_map_BANG_(m,p__48015){
var map__48016 = p__48015;
var map__48016__$1 = cljs.core.__destructure_map(map__48016);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48016__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48016__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48016__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48016__$1,new cljs.core.Keyword(null,"north","north",651323902));
(m.fitBoundsCalled = true);

var c_48182 = m.getCenter();
(c_48182.lng = ((west + east) / 2.0));

(c_48182.lat = ((south + north) / 2.0));

return m.setZoom(hitteri.map_ui.core.fit_max_zoom);
});
hitteri.map_ui.core.fit_lng_lat_box_BANG_ = (function hitteri$map_ui$core$fit_lng_lat_box_BANG_(m,box,p__48017){
var map__48018 = p__48017;
var map__48018__$1 = cljs.core.__destructure_map(map__48018);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48018__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
if(hitteri.map_ui.bounds.valid_lng_lat_box_QMARK_(box)){
var map__48019 = hitteri.map_ui.bounds.pad_degenerate_box(box);
var map__48019__$1 = cljs.core.__destructure_map(map__48019);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48019__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48019__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48019__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48019__$1,new cljs.core.Keyword(null,"north","north",651323902));
if(hitteri.map_ui.core.mock_map_QMARK_(m)){
return hitteri.map_ui.core.fit_mock_map_BANG_(m,box);
} else {
var lng_bounds = (new maplibregl.LngLatBounds([west,south],[east,north]));
hitteri.map_ui.core.safe_resize_BANG_(m);

return m.fitBounds(lng_bounds,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),hitteri.map_ui.core.fit_padding,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),hitteri.map_ui.core.fit_max_zoom,new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?hitteri.map_ui.core.fit_animate_duration_ms:(0))], null)));
}
} else {
return null;
}
});
hitteri.map_ui.core.fit_bounds_BANG_ = (function hitteri$map_ui$core$fit_bounds_BANG_(m,positions,p__48020){
var map__48021 = p__48020;
var map__48021__$1 = cljs.core.__destructure_map(map__48021);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48021__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var temp__5825__auto__ = hitteri.map_ui.bounds.fit_lng_lat_bounds(positions);
if(cljs.core.truth_(temp__5825__auto__)){
var box = temp__5825__auto__;
return hitteri.map_ui.core.fit_lng_lat_box_BANG_(m,box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null));
} else {
return null;
}
});
hitteri.map_ui.core.normalize_state = (function hitteri$map_ui$core$normalize_state(p__48022){
var map__48023 = p__48022;
var map__48023__$1 = cljs.core.__destructure_map(map__48023);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.vec(positions),new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),fit_bounds,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003),draft_marker,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185),open_popup_for,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),(function (){var or__5025__auto__ = popup_opts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"fit?","fit?",1773758200),cljs.core.boolean$(fit_QMARK_),new cljs.core.Keyword(null,"animate?","animate?",-1559039739),(((!((animate_QMARK_ == null))))?cljs.core.boolean$(animate_QMARK_):true)], null);
});
hitteri.map_ui.core.apply_now_BANG_ = (function hitteri$map_ui$core$apply_now_BANG_(m,p__48024){
var map__48025 = p__48024;
var map__48025__$1 = cljs.core.__destructure_map(map__48025);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48025__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48025__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200));
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48025__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48025__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739));
var draft_marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48025__$1,new cljs.core.Keyword(null,"draft-marker","draft-marker",1558685003));
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48025__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48025__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
if((m === cljs.core.deref(hitteri.map_ui.core._BANG_map))){
hitteri.map_ui.core.clear_markers_BANG_();

if(cljs.core.seq(positions)){
hitteri.map_ui.core.add_markers_BANG_(m,positions,popup_opts);
} else {
}

if(cljs.core.truth_(draft_marker)){
hitteri.map_ui.core.add_markers_BANG_(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draft_marker], null),popup_opts);
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = fit_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(positions);
} else {
return and__5023__auto__;
}
})())){
hitteri.map_ui.core.fit_bounds_BANG_(m,positions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null));
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = fit_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return fit_bounds;
} else {
return and__5023__auto__;
}
})())){
hitteri.map_ui.core.fit_lng_lat_box_BANG_(m,fit_bounds,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_], null));
} else {
}
}

if(cljs.core.truth_(open_popup_for)){
hitteri.map_ui.core.open_marker_popup_BANG_(open_popup_for);
} else {
}

return hitteri.map_ui.core.refresh_row_hover_emphasis_BANG_();
} else {
return null;
}
});
hitteri.map_ui.core.consume_pending_BANG_ = (function hitteri$map_ui$core$consume_pending_BANG_(m){
var temp__5825__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_pending_state);
if(cljs.core.truth_(temp__5825__auto__)){
var state = temp__5825__auto__;
cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_pending_state,null);

return hitteri.map_ui.core.apply_now_BANG_(m,state);
} else {
return null;
}
});
hitteri.map_ui.core.schedule_consume_when_ready_BANG_ = (function hitteri$map_ui$core$schedule_consume_when_ready_BANG_(m){
var seq__48026 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50),(150),(400),(800),(1500)], null));
var chunk__48027 = null;
var count__48028 = (0);
var i__48029 = (0);
while(true){
if((i__48029 < count__48028)){
var delay_ms = chunk__48027.cljs$core$IIndexed$_nth$arity$2(null,i__48029);
setTimeout(((function (seq__48026,chunk__48027,count__48028,i__48029,delay_ms){
return (function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = (m === cljs.core.deref(hitteri.map_ui.core._BANG_map));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.deref(hitteri.map_ui.core._BANG_pending_state);
if(cljs.core.truth_(and__5023__auto____$1)){
return hitteri.map_ui.core.map_ready_QMARK_(m);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return hitteri.map_ui.core.consume_pending_BANG_(m);
} else {
return null;
}
});})(seq__48026,chunk__48027,count__48028,i__48029,delay_ms))
,delay_ms);


var G__48183 = seq__48026;
var G__48184 = chunk__48027;
var G__48185 = count__48028;
var G__48186 = (i__48029 + (1));
seq__48026 = G__48183;
chunk__48027 = G__48184;
count__48028 = G__48185;
i__48029 = G__48186;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48026);
if(temp__5825__auto__){
var seq__48026__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48026__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__48026__$1);
var G__48187 = cljs.core.chunk_rest(seq__48026__$1);
var G__48188 = c__5548__auto__;
var G__48189 = cljs.core.count(c__5548__auto__);
var G__48190 = (0);
seq__48026 = G__48187;
chunk__48027 = G__48188;
count__48028 = G__48189;
i__48029 = G__48190;
continue;
} else {
var delay_ms = cljs.core.first(seq__48026__$1);
setTimeout(((function (seq__48026,chunk__48027,count__48028,i__48029,delay_ms,seq__48026__$1,temp__5825__auto__){
return (function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = (m === cljs.core.deref(hitteri.map_ui.core._BANG_map));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.deref(hitteri.map_ui.core._BANG_pending_state);
if(cljs.core.truth_(and__5023__auto____$1)){
return hitteri.map_ui.core.map_ready_QMARK_(m);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return hitteri.map_ui.core.consume_pending_BANG_(m);
} else {
return null;
}
});})(seq__48026,chunk__48027,count__48028,i__48029,delay_ms,seq__48026__$1,temp__5825__auto__))
,delay_ms);


var G__48191 = cljs.core.next(seq__48026__$1);
var G__48192 = null;
var G__48193 = (0);
var G__48194 = (0);
seq__48026 = G__48191;
chunk__48027 = G__48192;
count__48028 = G__48193;
i__48029 = G__48194;
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
hitteri.map_ui.core.set_marker_pick_handler_BANG_ = (function hitteri$map_ui$core$set_marker_pick_handler_BANG_(handler){
return cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_marker_pick_handler,handler);
});
/**
 * Toggle country-pick mode: arrow cursor and map clicks invoke `on-click` when active.
 */
hitteri.map_ui.core.sync_country_pick_state_BANG_ = (function hitteri$map_ui$core$sync_country_pick_state_BANG_(p__48030){
var map__48031 = p__48030;
var map__48031__$1 = cljs.core.__destructure_map(map__48031);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48031__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48031__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_country_pick_active_QMARK_,cljs.core.boolean$(active_QMARK_));

cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_country_pick_click_handler,(cljs.core.truth_(active_QMARK_)?on_click:null));

var temp__5825__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return hitteri.map_ui.core.set_map_cursor_BANG_(m,(cljs.core.truth_(active_QMARK_)?"default":"grab"));
} else {
return null;
}
});
/**
 * Return {:longitude :latitude :zoom} for the current map view, or nil.
 */
hitteri.map_ui.core.map_view_state = (function hitteri$map_ui$core$map_view_state(){
var temp__5825__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
if(cljs.core.truth_(hitteri.map_ui.core.map_ready_QMARK_(m))){
var c = m.getCenter();
var zoom = (function (){try{return m.getZoom();
}catch (e48032){var _ = e48032;
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
hitteri.map_ui.core.map_center_coords = (function hitteri$map_ui$core$map_center_coords(){
var temp__5825__auto__ = hitteri.map_ui.core.map_view_state();
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
hitteri.map_ui.core.fly_to_view_BANG_ = (function hitteri$map_ui$core$fly_to_view_BANG_(p__48033){
var map__48034 = p__48033;
var map__48034__$1 = cljs.core.__destructure_map(map__48034);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48034__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48034__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48034__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48034__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
if(((typeof longitude === 'number') && (((typeof latitude === 'number') && (typeof zoom === 'number'))))){
var temp__5825__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom,new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?hitteri.map_ui.core.center_fly_duration_ms:(0))], null)));
}catch (e48035){var _ = e48035;
return null;
}});
if(cljs.core.truth_(hitteri.map_ui.core.map_ready_QMARK_(m))){
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
hitteri.map_ui.core.center_on_position_BANG_ = (function hitteri$map_ui$core$center_on_position_BANG_(p__48036){
var map__48037 = p__48036;
var map__48037__$1 = cljs.core.__destructure_map(map__48037);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48037__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48037__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48037__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),hitteri.map_ui.core.center_default_zoom);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48037__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
var preserve_zoom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48037__$1,new cljs.core.Keyword(null,"preserve-zoom?","preserve-zoom?",-1650190790));
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
var temp__5825__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var fly_BANG_ = (function (){
try{return m.flyTo(cljs.core.clj__GT_js((function (){var G__48039 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),[longitude,latitude],new cljs.core.Keyword(null,"duration","duration",1444101068),(cljs.core.truth_(animate_QMARK_)?hitteri.map_ui.core.center_fly_duration_ms:(0))], null);
if(cljs.core.not(preserve_zoom_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48039,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom);
} else {
return G__48039;
}
})()));
}catch (e48038){var _ = e48038;
return null;
}});
if(cljs.core.truth_(hitteri.map_ui.core.map_ready_QMARK_(m))){
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
hitteri.map_ui.core.apply_state_BANG_ = (function hitteri$map_ui$core$apply_state_BANG_(state){
cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_pending_state,hitteri.map_ui.core.normalize_state(state));

var temp__5825__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
if(cljs.core.truth_(hitteri.map_ui.core.map_ready_QMARK_(m))){
return hitteri.map_ui.core.consume_pending_BANG_(m);
} else {
m.once("load",(function (_){
return hitteri.map_ui.core.consume_pending_BANG_(m);
}));

return hitteri.map_ui.core.schedule_consume_when_ready_BANG_(m);
}
} else {
return null;
}
});
hitteri.map_ui.core.mount_ready_BANG_ = (function hitteri$map_ui$core$mount_ready_BANG_(m){
hitteri.map_ui.core.ensure_map_country_pick_click_BANG_(m);

hitteri.map_ui.core.set_map_cursor_BANG_(m,(cljs.core.truth_(cljs.core.deref(hitteri.map_ui.core._BANG_country_pick_active_QMARK_))?"default":"grab"));

hitteri.map_ui.core.safe_resize_BANG_(m);

hitteri.map_ui.core.consume_pending_BANG_(m);

return hitteri.map_ui.core.schedule_consume_when_ready_BANG_(m);
});
hitteri.map_ui.core.disconnect_resize_observer_BANG_ = (function hitteri$map_ui$core$disconnect_resize_observer_BANG_(){
var temp__5825__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_resize_observer);
if(cljs.core.truth_(temp__5825__auto__)){
var ro = temp__5825__auto__;
ro.disconnect();

return cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_resize_observer,null);
} else {
return null;
}
});
if((typeof hitteri !== 'undefined') && (typeof hitteri.map_ui !== 'undefined') && (typeof hitteri.map_ui.core !== 'undefined') && (typeof hitteri.map_ui.core._BANG_resize_raf !== 'undefined')){
} else {
hitteri.map_ui.core._BANG_resize_raf = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
hitteri.map_ui.core.observe_map_resize_BANG_ = (function hitteri$map_ui$core$observe_map_resize_BANG_(el,m){
hitteri.map_ui.core.disconnect_resize_observer_BANG_();

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
if(cljs.core.truth_(cljs.core.deref(hitteri.map_ui.core._BANG_resize_raf))){
return null;
} else {
return cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_resize_raf,requestAnimationFrame((function (){
cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_resize_raf,null);

return hitteri.map_ui.core.safe_resize_BANG_(m);
})));
}
})));
ro.observe(el);

return cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_resize_observer,ro);
} else {
return null;
}
});
hitteri.map_ui.core.destroy_map_BANG_ = (function hitteri$map_ui$core$destroy_map_BANG_(){
hitteri.map_ui.core.disconnect_resize_observer_BANG_();

var temp__5825__auto___48195 = cljs.core.deref(hitteri.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto___48195)){
var m_48196 = temp__5825__auto___48195;
try{m_48196.remove();
}catch (e48040){var __48197 = e48040;
}} else {
}

cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_map,null);

cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_map_container,null);

return hitteri.map_ui.core.clear_markers_BANG_();
});
hitteri.map_ui.core.destroy_map_if_attached_BANG_ = (function hitteri$map_ui$core$destroy_map_if_attached_BANG_(el){
if(cljs.core.truth_((function (){var and__5023__auto__ = el;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.deref(hitteri.map_ui.core._BANG_map);
if(cljs.core.truth_(and__5023__auto____$1)){
return hitteri.map_ui.core.map_attached_QMARK_(cljs.core.deref(hitteri.map_ui.core._BANG_map),el);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return hitteri.map_ui.core.destroy_map_BANG_();
} else {
return null;
}
});
hitteri.map_ui.core.resize_map_BANG_ = (function hitteri$map_ui$core$resize_map_BANG_(){
var temp__5825__auto__ = cljs.core.deref(hitteri.map_ui.core._BANG_map);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
if(cljs.core.truth_(hitteri.map_ui.core.map_ready_QMARK_(m))){
return hitteri.map_ui.core.safe_resize_BANG_(m);
} else {
return m.once("load",(function (){
return hitteri.map_ui.core.safe_resize_BANG_(m);
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
hitteri.map_ui.core.mount_map_BANG_ = (function hitteri$map_ui$core$mount_map_BANG_(el){
if(cljs.core.truth_(el)){
if(cljs.core.truth_(hitteri.map_ui.core.map_attached_QMARK_(cljs.core.deref(hitteri.map_ui.core._BANG_map),el))){
var m = cljs.core.deref(hitteri.map_ui.core._BANG_map);
hitteri.map_ui.core.mount_ready_BANG_(m);

return m;
} else {
if(cljs.core.truth_(cljs.core.deref(hitteri.map_ui.core._BANG_map))){
hitteri.map_ui.core.destroy_map_BANG_();
} else {
}

var m = (new maplibregl.Map(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"container","container",-1736937707),el,new cljs.core.Keyword(null,"style","style",-496642736),hitteri.map_ui.core.style_url,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(hitteri.map_ui.core.default_view),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(hitteri.map_ui.core.default_view),new cljs.core.Keyword(null,"projection","projection",-412523042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"mercator"], null),new cljs.core.Keyword(null,"renderWorldCopies","renderWorldCopies",-2008107025),false], null))));
m.addControl((new maplibregl.NavigationControl()),"top-right");

hitteri.map_ui.core.ensure_map_popup_guard_BANG_(m);

cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_map_container,el);

cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_map,m);

hitteri.map_ui.core.observe_map_resize_BANG_(el,m);

m.once("load",(function (_){
return hitteri.map_ui.core.mount_ready_BANG_(m);
}));

return m;
}
} else {
return null;
}
});
hitteri.map_ui.core.reset_state_for_tests_BANG_ = (function hitteri$map_ui$core$reset_state_for_tests_BANG_(){
hitteri.map_ui.core.destroy_map_BANG_();

cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_pending_state,null);

cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_row_hover_match,null);

cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_country_pick_active_QMARK_,false);

return cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_country_pick_click_handler,null);
});
hitteri.map_ui.core.set_map_for_tests_BANG_ = (function hitteri$map_ui$core$set_map_for_tests_BANG_(m){
return cljs.core.reset_BANG_(hitteri.map_ui.core._BANG_map,m);
});
hitteri.map_ui.core.pending_state_for_tests = (function hitteri$map_ui$core$pending_state_for_tests(){
return cljs.core.deref(hitteri.map_ui.core._BANG_pending_state);
});
hitteri.map_ui.core.marker_element_for_tests_BANG_ = (function hitteri$map_ui$core$marker_element_for_tests_BANG_(topic){
return hitteri.map_ui.core.marker_element.cljs$core$IFn$_invoke$arity$1(topic);
});
hitteri.map_ui.core.marker_row_hover_class_for_tests = (function hitteri$map_ui$core$marker_row_hover_class_for_tests(){
return hitteri.map_ui.core.marker_row_hover_class;
});

//# sourceMappingURL=hitteri.map_ui.core.js.map
