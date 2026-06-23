goog.provide('hitteri.map_ui.interface$');
hitteri.map_ui.interface$.mount_map_BANG_ = (function hitteri$map_ui$interface$mount_map_BANG_(element){
return hitteri.map_ui.core.mount_map_BANG_(element);
});
hitteri.map_ui.interface$.destroy_map_BANG_ = (function hitteri$map_ui$interface$destroy_map_BANG_(){
return hitteri.map_ui.core.destroy_map_BANG_();
});
hitteri.map_ui.interface$.destroy_map_if_attached_BANG_ = (function hitteri$map_ui$interface$destroy_map_if_attached_BANG_(element){
return hitteri.map_ui.core.destroy_map_if_attached_BANG_(element);
});
hitteri.map_ui.interface$.resize_map_BANG_ = (function hitteri$map_ui$interface$resize_map_BANG_(){
return hitteri.map_ui.core.resize_map_BANG_();
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
hitteri.map_ui.interface$.apply_state_BANG_ = (function hitteri$map_ui$interface$apply_state_BANG_(state){
return hitteri.map_ui.core.apply_state_BANG_(state);
});
hitteri.map_ui.interface$.set_marker_pick_handler_BANG_ = (function hitteri$map_ui$interface$set_marker_pick_handler_BANG_(handler){
return hitteri.map_ui.core.set_marker_pick_handler_BANG_(handler);
});
hitteri.map_ui.interface$.sync_country_pick_state_BANG_ = (function hitteri$map_ui$interface$sync_country_pick_state_BANG_(state){
return hitteri.map_ui.core.sync_country_pick_state_BANG_(state);
});
hitteri.map_ui.interface$.close_all_popups_BANG_ = (function hitteri$map_ui$interface$close_all_popups_BANG_(){
return hitteri.map_ui.core.close_all_popups_BANG_();
});
hitteri.map_ui.interface$.open_marker_popup_BANG_ = (function hitteri$map_ui$interface$open_marker_popup_BANG_(match){
return hitteri.map_ui.core.open_marker_popup_BANG_(match);
});
hitteri.map_ui.interface$.set_marker_row_emphasis_BANG_ = (function hitteri$map_ui$interface$set_marker_row_emphasis_BANG_(match){
return hitteri.map_ui.core.set_marker_row_emphasis_BANG_(match);
});
hitteri.map_ui.interface$.clear_marker_row_emphasis_BANG_ = (function hitteri$map_ui$interface$clear_marker_row_emphasis_BANG_(){
return hitteri.map_ui.core.clear_marker_row_emphasis_BANG_();
});
hitteri.map_ui.interface$.map_center_coords = (function hitteri$map_ui$interface$map_center_coords(){
return hitteri.map_ui.core.map_center_coords();
});
hitteri.map_ui.interface$.map_view_state = (function hitteri$map_ui$interface$map_view_state(){
return hitteri.map_ui.core.map_view_state();
});
hitteri.map_ui.interface$.fly_to_view_BANG_ = (function hitteri$map_ui$interface$fly_to_view_BANG_(view){
return hitteri.map_ui.core.fly_to_view_BANG_(view);
});
hitteri.map_ui.interface$.center_on_position_BANG_ = (function hitteri$map_ui$interface$center_on_position_BANG_(position){
return hitteri.map_ui.core.center_on_position_BANG_(position);
});
hitteri.map_ui.interface$.popup_html = (function hitteri$map_ui$interface$popup_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48137 = arguments.length;
var i__5750__auto___48138 = (0);
while(true){
if((i__5750__auto___48138 < len__5749__auto___48137)){
args__5755__auto__.push((arguments[i__5750__auto___48138]));

var G__48139 = (i__5750__auto___48138 + (1));
i__5750__auto___48138 = G__48139;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.map_ui.interface$.popup_html.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.map_ui.interface$.popup_html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.map_ui.popup.popup_html,args);
}));

(hitteri.map_ui.interface$.popup_html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.map_ui.interface$.popup_html.cljs$lang$applyTo = (function (seq48136){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48136));
}));


//# sourceMappingURL=hitteri.map_ui.interface.js.map
