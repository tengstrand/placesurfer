goog.provide('placesurfer.app_ui.ui.view_props');
placesurfer.app_ui.ui.view_props.topic_props = (function placesurfer$app_ui$ui$view_props$topic_props(state,topic_keys,topic_label_fn,topic_marker_url_fn){
var definitions = placesurfer.topic_ui.interface$.definitions(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(topic_keys),topic_label_fn,topic_marker_url_fn);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic-rows","topic-rows",1351926944),placesurfer.topic_ui.interface$.rows(new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252).cljs$core$IFn$_invoke$arity$1(state),definitions)], null);
});
placesurfer.app_ui.ui.view_props.nav_handler_props = (function placesurfer$app_ui$ui$view_props$nav_handler_props(p__40889){
var map__40890 = p__40889;
var map__40890__$1 = cljs.core.__destructure_map(map__40890);
var navigate_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40890__$1,new cljs.core.Keyword(null,"navigate!","navigate!",79998348));
var select_country_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40890__$1,new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741));
var set_country_filter_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40890__$1,new cljs.core.Keyword(null,"set-country-filter!","set-country-filter!",-1983545420));
var set_country_highlight_index_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40890__$1,new cljs.core.Keyword(null,"set-country-highlight-index!","set-country-highlight-index!",1161345176));
var set_topic_active_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40890__$1,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295));
var ensure_countries_loaded_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40890__$1,new cljs.core.Keyword(null,"ensure-countries-loaded!","ensure-countries-loaded!",1392756926));
var show_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40890__$1,new cljs.core.Keyword(null,"show-map!","show-map!",-168806063));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"navigate!","navigate!",79998348),navigate_BANG_,new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),select_country_BANG_,new cljs.core.Keyword(null,"set-country-filter!","set-country-filter!",-1983545420),set_country_filter_BANG_,new cljs.core.Keyword(null,"set-country-highlight-index!","set-country-highlight-index!",1161345176),set_country_highlight_index_BANG_,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295),set_topic_active_BANG_,new cljs.core.Keyword(null,"ensure-countries-loaded!","ensure-countries-loaded!",1392756926),ensure_countries_loaded_BANG_,new cljs.core.Keyword(null,"show-map!","show-map!",-168806063),show_map_BANG_], null);
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
placesurfer.app_ui.ui.view_props.view_props = (function placesurfer$app_ui$ui$view_props$view_props(state,p__40893){
var map__40895 = p__40893;
var map__40895__$1 = cljs.core.__destructure_map(map__40895);
var topic_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"topic-keys","topic-keys",1815833268));
var topic_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"topic-label-fn","topic-label-fn",-15666023));
var topic_marker_url_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"topic-marker-url-fn","topic-marker-url-fn",-1547313478));
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var map_handler_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"map-handler-props","map-handler-props",1190365928));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,placesurfer.app_ui.ui.view_props.topic_props(state,topic_keys,topic_label_fn,topic_marker_url_fn),placesurfer.app_ui.ui.view_props.nav_handler_props(handlers),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),mobile_QMARK_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null),placesurfer.app_ui.ui.view_props.map_status_props(state,t),map_handler_props], 0));
});

//# sourceMappingURL=placesurfer.app_ui.ui.view_props.js.map
