goog.provide('placesurfer.app_ui.ui.view_props');
placesurfer.app_ui.ui.view_props.topic_props = (function placesurfer$app_ui$ui$view_props$topic_props(state,topic_keys,topic_label_fn,topic_marker_url_fn){
var definitions = placesurfer.topic_ui.interface$.definitions(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(topic_keys),topic_label_fn,topic_marker_url_fn);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic-rows","topic-rows",1351926944),placesurfer.topic_ui.interface$.rows(new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252).cljs$core$IFn$_invoke$arity$1(state),definitions)], null);
});
placesurfer.app_ui.ui.view_props.nav_handler_props = (function placesurfer$app_ui$ui$view_props$nav_handler_props(p__64035){
var map__64036 = p__64035;
var map__64036__$1 = cljs.core.__destructure_map(map__64036);
var ensure_countries_loaded_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"ensure-countries-loaded!","ensure-countries-loaded!",1392756926));
var delete_draw_layer_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"delete-draw-layer!","delete-draw-layer!",1478497155));
var save_draw_layers_config_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"save-draw-layers-config!","save-draw-layers-config!",-277919771));
var toggle_layer_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"toggle-layer!","toggle-layer!",-1435962263));
var select_country_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741));
var add_draw_layer_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"add-draw-layer!","add-draw-layer!",834233035));
var navigate_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"navigate!","navigate!",79998348));
var set_topic_active_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295));
var show_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"show-map!","show-map!",-168806063));
var select_draw_layer_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"select-draw-layer!","select-draw-layer!",1434495314));
var navigate_to_update_tab_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"navigate-to-update-tab!","navigate-to-update-tab!",643684179));
var set_country_filter_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"set-country-filter!","set-country-filter!",-1983545420));
var set_draw_layer_draft_label_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"set-draw-layer-draft-label!","set-draw-layer-draft-label!",-1660996489));
var set_draw_layer_color_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"set-draw-layer-color!","set-draw-layer-color!",838384664));
var set_country_highlight_index_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"set-country-highlight-index!","set-country-highlight-index!",1161345176));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"delete-draw-layer!","delete-draw-layer!",1478497155),new cljs.core.Keyword(null,"save-draw-layers-config!","save-draw-layers-config!",-277919771),new cljs.core.Keyword(null,"toggle-layer!","toggle-layer!",-1435962263),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"add-draw-layer!","add-draw-layer!",834233035),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295),new cljs.core.Keyword(null,"show-map!","show-map!",-168806063),new cljs.core.Keyword(null,"select-draw-layer!","select-draw-layer!",1434495314),new cljs.core.Keyword(null,"navigate-to-update-tab!","navigate-to-update-tab!",643684179),new cljs.core.Keyword(null,"set-country-filter!","set-country-filter!",-1983545420),new cljs.core.Keyword(null,"set-draw-layer-draft-label!","set-draw-layer-draft-label!",-1660996489),new cljs.core.Keyword(null,"set-draw-layer-color!","set-draw-layer-color!",838384664),new cljs.core.Keyword(null,"set-country-highlight-index!","set-country-highlight-index!",1161345176),new cljs.core.Keyword(null,"ensure-countries-loaded!","ensure-countries-loaded!",1392756926)],[delete_draw_layer_BANG_,save_draw_layers_config_BANG_,toggle_layer_BANG_,select_country_BANG_,add_draw_layer_BANG_,navigate_BANG_,set_topic_active_BANG_,show_map_BANG_,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,set_country_filter_BANG_,set_draw_layer_draft_label_BANG_,set_draw_layer_color_BANG_,set_country_highlight_index_BANG_,ensure_countries_loaded_BANG_]);
});
placesurfer.app_ui.ui.view_props.map_status_props = (function placesurfer$app_ui$ui$view_props$map_status_props(state,t){
var status_t = (function (){var or__5025__auto__ = t;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (function (k){
return cljs.core.name(k);
});
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-status","map-status",1191308996),placesurfer.map_panel_ui.interface$.status.map_status_text(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"country-loading?","country-loading?",-144475327),new cljs.core.Keyword(null,"country-loading?","country-loading?",-144475327).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"t","t",-1397832519),status_t], null))], null);
});
placesurfer.app_ui.ui.view_props.view_props = (function placesurfer$app_ui$ui$view_props$view_props(state,p__64037){
var map__64038 = p__64037;
var map__64038__$1 = cljs.core.__destructure_map(map__64038);
var topic_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64038__$1,new cljs.core.Keyword(null,"topic-keys","topic-keys",1815833268));
var topic_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64038__$1,new cljs.core.Keyword(null,"topic-label-fn","topic-label-fn",-15666023));
var topic_marker_url_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64038__$1,new cljs.core.Keyword(null,"topic-marker-url-fn","topic-marker-url-fn",-1547313478));
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64038__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64038__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var map_handler_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64038__$1,new cljs.core.Keyword(null,"map-handler-props","map-handler-props",1190365928));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64038__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,placesurfer.app_ui.ui.view_props.topic_props(state,topic_keys,topic_label_fn,topic_marker_url_fn),placesurfer.app_ui.ui.view_props.nav_handler_props(handlers),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),mobile_QMARK_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null),placesurfer.app_ui.ui.view_props.map_status_props(state,t),map_handler_props], 0));
});

//# sourceMappingURL=placesurfer.app_ui.ui.view_props.js.map
