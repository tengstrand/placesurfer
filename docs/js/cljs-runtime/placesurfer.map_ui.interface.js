goog.provide('placesurfer.map_ui.interface$');
placesurfer.map_ui.interface$.mount_map_BANG_ = (function placesurfer$map_ui$interface$mount_map_BANG_(element){
return placesurfer.map_ui.core.mount_map_BANG_(element);
});
placesurfer.map_ui.interface$.destroy_map_BANG_ = (function placesurfer$map_ui$interface$destroy_map_BANG_(){
return placesurfer.map_ui.core.destroy_map_BANG_();
});
placesurfer.map_ui.interface$.destroy_map_if_attached_BANG_ = (function placesurfer$map_ui$interface$destroy_map_if_attached_BANG_(element){
return placesurfer.map_ui.core.destroy_map_if_attached_BANG_(element);
});
placesurfer.map_ui.interface$.resize_map_BANG_ = (function placesurfer$map_ui$interface$resize_map_BANG_(){
return placesurfer.map_ui.core.resize_map_BANG_();
});
/**
 * Replace map markers and optionally fit bounds.
 * 
 * Options:
 *   :positions     collection of {:longitude :latitude :topic ...}
 *   :fit-bounds    optional {:west :east :south :north} when fitting without positions
 *   :draft-marker  optional {:longitude :latitude :marker-topic :url-pin ...}
 *   :fit?          fit bounds to positions or :fit-bounds (default false)
 *   :animate?      animate the fit (default true)
 *   :popup-opts    optional map passed to popup-html (e.g. {:source-label "Source: "})
 */
placesurfer.map_ui.interface$.apply_state_BANG_ = (function placesurfer$map_ui$interface$apply_state_BANG_(state){
return placesurfer.map_ui.core.apply_state_BANG_(state);
});
placesurfer.map_ui.interface$.set_marker_pick_handler_BANG_ = (function placesurfer$map_ui$interface$set_marker_pick_handler_BANG_(handler){
return placesurfer.map_ui.core.set_marker_pick_handler_BANG_(handler);
});
placesurfer.map_ui.interface$.sync_country_pick_state_BANG_ = (function placesurfer$map_ui$interface$sync_country_pick_state_BANG_(state){
return placesurfer.map_ui.core.sync_country_pick_state_BANG_(state);
});
placesurfer.map_ui.interface$.sync_add_pin_mode_BANG_ = (function placesurfer$map_ui$interface$sync_add_pin_mode_BANG_(state){
return placesurfer.map_ui.core.sync_add_pin_mode_BANG_(state);
});
placesurfer.map_ui.interface$.close_all_popups_BANG_ = (function placesurfer$map_ui$interface$close_all_popups_BANG_(){
return placesurfer.map_ui.core.close_all_popups_BANG_();
});
placesurfer.map_ui.interface$.open_marker_popup_BANG_ = (function placesurfer$map_ui$interface$open_marker_popup_BANG_(match){
return placesurfer.map_ui.core.open_marker_popup_BANG_(match);
});
placesurfer.map_ui.interface$.set_marker_row_emphasis_BANG_ = (function placesurfer$map_ui$interface$set_marker_row_emphasis_BANG_(match){
return placesurfer.map_ui.core.set_marker_row_emphasis_BANG_(match);
});
placesurfer.map_ui.interface$.clear_marker_row_emphasis_BANG_ = (function placesurfer$map_ui$interface$clear_marker_row_emphasis_BANG_(){
return placesurfer.map_ui.core.clear_marker_row_emphasis_BANG_();
});
placesurfer.map_ui.interface$.map_center_coords = (function placesurfer$map_ui$interface$map_center_coords(){
return placesurfer.map_ui.core.map_center_coords();
});
placesurfer.map_ui.interface$.map_view_state = (function placesurfer$map_ui$interface$map_view_state(){
return placesurfer.map_ui.core.map_view_state();
});
placesurfer.map_ui.interface$.fly_to_view_BANG_ = (function placesurfer$map_ui$interface$fly_to_view_BANG_(view){
return placesurfer.map_ui.core.fly_to_view_BANG_(view);
});
placesurfer.map_ui.interface$.center_on_position_BANG_ = (function placesurfer$map_ui$interface$center_on_position_BANG_(position){
return placesurfer.map_ui.core.center_on_position_BANG_(position);
});
placesurfer.map_ui.interface$.popup_html = (function placesurfer$map_ui$interface$popup_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___86171 = arguments.length;
var i__5750__auto___86172 = (0);
while(true){
if((i__5750__auto___86172 < len__5749__auto___86171)){
args__5755__auto__.push((arguments[i__5750__auto___86172]));

var G__86173 = (i__5750__auto___86172 + (1));
i__5750__auto___86172 = G__86173;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.map_ui.interface$.popup_html.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.map_ui.interface$.popup_html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.map_ui.popup.popup_html,args);
}));

(placesurfer.map_ui.interface$.popup_html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.map_ui.interface$.popup_html.cljs$lang$applyTo = (function (seq86124){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq86124));
}));


//# sourceMappingURL=placesurfer.map_ui.interface.js.map
