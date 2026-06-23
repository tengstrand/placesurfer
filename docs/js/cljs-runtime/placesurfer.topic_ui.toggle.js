goog.provide('placesurfer.topic_ui.toggle');
placesurfer.topic_ui.toggle.toggle_active = (function placesurfer$topic_ui$toggle$toggle_active(active_topics,topic){
if(cljs.core.contains_QMARK_(active_topics,topic)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(active_topics,topic);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(active_topics,topic);
}
});
/**
 * Pure plan for toggling a topic (used by main and tests).
 */
placesurfer.topic_ui.toggle.toggle_plan = (function placesurfer$topic_ui$toggle$toggle_plan(active_topics,topic){
var next_topics = placesurfer.topic_ui.toggle.toggle_active(active_topics,topic);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"active-topics","active-topics",1278012558),next_topics,new cljs.core.Keyword(null,"empty?","empty?",-1564122972),cljs.core.empty_QMARK_(next_topics),new cljs.core.Keyword(null,"reload-countries?","reload-countries?",-1383995397),true,new cljs.core.Keyword(null,"load-map?","load-map?",1661632371),(!(cljs.core.empty_QMARK_(next_topics)))], null);
});

//# sourceMappingURL=placesurfer.topic_ui.toggle.js.map
