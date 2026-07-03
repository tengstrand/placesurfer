goog.provide('placesurfer.edit.pure.dataset_cache');
/**
 * Stable cache key for a loaded update dataset.
 */
placesurfer.edit.pure.dataset_cache.cache_key = (function placesurfer$edit$pure$dataset_cache$cache_key(topic,country_code){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(topic),(function (){var G__39511 = country_code;
var G__39511__$1 = (((G__39511 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39511));
if((G__39511__$1 == null)){
return null;
} else {
return clojure.string.upper_case(G__39511__$1);
}
})()], null);
});
/**
 * Snapshot update dataset fields worth restoring later.
 */
placesurfer.edit.pure.dataset_cache.entry_from_state = (function placesurfer$edit$pure$dataset_cache$entry_from_state(s){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"update-columns","update-columns",666065227).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"disk-baseline","disk-baseline",1325029660),new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"disk-save-snapshot","disk-save-snapshot",136269226),new cljs.core.Keyword(null,"update-disk-save-snapshot","update-disk-save-snapshot",-594529398).cljs$core$IFn$_invoke$arity$1(s)], null);
});
placesurfer.edit.pure.dataset_cache.cached_entry = (function placesurfer$edit$pure$dataset_cache$cached_entry(cache,topic,country_code){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,placesurfer.edit.pure.dataset_cache.cache_key(topic,country_code));
});
placesurfer.edit.pure.dataset_cache.has_cached_entry_QMARK_ = (function placesurfer$edit$pure$dataset_cache$has_cached_entry_QMARK_(cache,topic,country_code){
return (!((placesurfer.edit.pure.dataset_cache.cached_entry(cache,topic,country_code) == null)));
});

//# sourceMappingURL=placesurfer.edit.pure.dataset_cache.js.map
