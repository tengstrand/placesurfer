goog.provide('placesurfer.topic_ui.definitions');
/**
 * One {:topic :label :marker-url} map per topic key, in key order.
 */
placesurfer.topic_ui.definitions.from_keys = (function placesurfer$topic_ui$definitions$from_keys(topic_keys,label_fn,marker_url_fn){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (topic){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"label","label",1718410804),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(topic) : label_fn.call(null,topic)),new cljs.core.Keyword(null,"marker-url","marker-url",153262178),(marker_url_fn.cljs$core$IFn$_invoke$arity$1 ? marker_url_fn.cljs$core$IFn$_invoke$arity$1(topic) : marker_url_fn.call(null,topic))], null);
}),topic_keys);
});

//# sourceMappingURL=placesurfer.topic_ui.definitions.js.map
