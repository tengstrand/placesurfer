goog.provide('placesurfer.web_app.debug');
placesurfer.web_app.debug.publish_debug_status_BANG_ = (function placesurfer$web_app$debug$publish_debug_status_BANG_(){
var state = cljs.core.deref(placesurfer.web_app.state._BANG_state);
var map__41089 = state;
var map__41089__$1 = cljs.core.__destructure_map(map__41089);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41089__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41089__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var country_slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41089__$1,new cljs.core.Keyword(null,"country-slug","country-slug",769681844));
var active_topics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41089__$1,new cljs.core.Keyword(null,"active-topics","active-topics",1278012558));
var country_loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41089__$1,new cljs.core.Keyword(null,"country-loading?","country-loading?",-144475327));
var update_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41089__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790));
var update_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41089__$1,new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040));
var update_selected_row_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41089__$1,new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563));
var place_count = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(state);
var discgolf_n = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41086_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"discgolf","discgolf",416907656),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__41086_SHARP_));
}),positions));
var art_n = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41087_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"art","art",335378089),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__41087_SHARP_));
}),positions));
var selected_row = (cljs.core.truth_(update_selected_row_id)?cljs.core.some((function (p1__41088_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(p1__41088_SHARP_),update_selected_row_id)){
return p1__41088_SHARP_;
} else {
return null;
}
}),update_rows):null);
var first_row_index_with_description = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(row,""))))){
return idx;
} else {
return null;
}
}),update_rows));
return (window.placesurferDebug = cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"updateSelectedRowAction","updateSelectedRowAction",1263952770),new cljs.core.Keyword(null,"updateUrlForm","updateUrlForm",-1244297532),new cljs.core.Keyword(null,"updateSelectedRowId","updateSelectedRowId",894870535),new cljs.core.Keyword(null,"discgolf","discgolf",416907656),new cljs.core.Keyword(null,"activeTopics","activeTopics",-1520322391),new cljs.core.Keyword(null,"boot","boot",2007860585),new cljs.core.Keyword(null,"art","art",335378089),new cljs.core.Keyword(null,"updateRowCount","updateRowCount",-236388503),new cljs.core.Keyword(null,"countryLoading","countryLoading",-523781298),new cljs.core.Keyword(null,"updateFormDescription","updateFormDescription",-1863086286),new cljs.core.Keyword(null,"updateFirstRowIndexWithDescription","updateFirstRowIndexWithDescription",801556083),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"updatePendingPlaces","updatePendingPlaces",1964379935)],[placesurfer.edit.interface$.sources.keyword_name_safe(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(selected_row)),new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673).cljs$core$IFn$_invoke$arity$1(state),update_selected_row_id,discgolf_n,cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(active_topics)),(function (){var or__5025__auto__ = window.placesurferBoot;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "unknown";
}
})(),art_n,cljs.core.count(update_rows),country_loading_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(update_form),first_row_index_with_description,status,place_count,country_slug,new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352).cljs$core$IFn$_invoke$arity$1(state)]),placesurfer.edit.interface$.handlers.description_trace.diagnostics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"updateTopic","updateTopic",2116519879),new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"updateTopicSwitchPending","updateTopicSwitchPending",-278969126),new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723).cljs$core$IFn$_invoke$arity$1(state)], null)], 0)));
});

//# sourceMappingURL=placesurfer.web_app.debug.js.map
