goog.provide('placesurfer.topic_ui.rows');
placesurfer.topic_ui.rows.for_topics = (function placesurfer$topic_ui$rows$for_topics(active_topics,loading_topics,topic_definitions){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__40253){
var map__40254 = p__40253;
var map__40254__$1 = cljs.core.__destructure_map(map__40254);
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40254__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40254__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var marker_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40254__$1,new cljs.core.Keyword(null,"marker-url","marker-url",153262178));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core.contains_QMARK_(active_topics,topic),new cljs.core.Keyword(null,"loading?","loading?",1905707049),cljs.core.contains_QMARK_(loading_topics,topic),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"marker-url","marker-url",153262178),marker_url], null);
}),topic_definitions);
});

//# sourceMappingURL=placesurfer.topic_ui.rows.js.map
