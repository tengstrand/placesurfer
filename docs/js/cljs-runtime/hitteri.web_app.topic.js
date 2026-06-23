goog.provide('hitteri.web_app.topic');
hitteri.web_app.topic.topic_page_QMARK_ = (function hitteri$web_app$topic$topic_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"topic","topic",-1960480691));
});
hitteri.web_app.topic.toggle_active_topics = (function hitteri$web_app$topic$toggle_active_topics(active_topics,topic){
if(cljs.core.contains_QMARK_(active_topics,topic)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(active_topics,topic);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(active_topics,topic);
}
});
/**
 * Pure plan for toggling a topic (used by main and tests).
 */
hitteri.web_app.topic.topic_toggle_plan = (function hitteri$web_app$topic$topic_toggle_plan(active_topics,topic){
var next_topics = hitteri.web_app.topic.toggle_active_topics(active_topics,topic);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"active-topics","active-topics",1278012558),next_topics,new cljs.core.Keyword(null,"empty?","empty?",-1564122972),cljs.core.empty_QMARK_(next_topics),new cljs.core.Keyword(null,"reload-countries?","reload-countries?",-1383995397),true,new cljs.core.Keyword(null,"load-map?","load-map?",1661632371),(!(cljs.core.empty_QMARK_(next_topics)))], null);
});
/**
 * Props for topic-panel; topic-keys must be a seq of keywords.
 */
hitteri.web_app.topic.topic_panel_props = (function hitteri$web_app$topic$topic_panel_props(p__22713){
var map__22714 = p__22713;
var map__22714__$1 = cljs.core.__destructure_map(map__22714);
var active_topics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22714__$1,new cljs.core.Keyword(null,"active-topics","active-topics",1278012558));
var topic_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22714__$1,new cljs.core.Keyword(null,"topic-keys","topic-keys",1815833268));
var topic_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22714__$1,new cljs.core.Keyword(null,"topic-label","topic-label",-770638099));
var topic_marker_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22714__$1,new cljs.core.Keyword(null,"topic-marker-url","topic-marker-url",352995501));
var set_topic_active_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22714__$1,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"active-topics","active-topics",1278012558),active_topics,new cljs.core.Keyword(null,"topic-keys","topic-keys",1815833268),cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(topic_keys)),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (topic){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core.contains_QMARK_(active_topics,topic),new cljs.core.Keyword(null,"label","label",1718410804),(topic_label.cljs$core$IFn$_invoke$arity$1 ? topic_label.cljs$core$IFn$_invoke$arity$1(topic) : topic_label.call(null,topic)),new cljs.core.Keyword(null,"marker-url","marker-url",153262178),(topic_marker_url.cljs$core$IFn$_invoke$arity$1 ? topic_marker_url.cljs$core$IFn$_invoke$arity$1(topic) : topic_marker_url.call(null,topic))], null);
}),topic_keys),new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295),set_topic_active_BANG_], null);
});

//# sourceMappingURL=hitteri.web_app.topic.js.map
