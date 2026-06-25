goog.provide('placesurfer.i18n.pure.storage');
placesurfer.i18n.pure.storage.storage_key = "settings";
placesurfer.i18n.pure.storage.parse_settings = (function placesurfer$i18n$pure$storage$parse_settings(raw){
if(cljs.core.seq(cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw))){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(raw);
}catch (e38747){var _ = e38747;
return null;
}} else {
return null;
}
});
/**
 * Load settings map from localStorage; returns {} when missing/invalid.
 */
placesurfer.i18n.pure.storage.read_settings_BANG_ = (function placesurfer$i18n$pure$storage$read_settings_BANG_(){
try{var temp__5823__auto__ = localStorage.getItem(placesurfer.i18n.pure.storage.storage_key);
if(cljs.core.truth_(temp__5823__auto__)){
var raw = temp__5823__auto__;
var or__5025__auto__ = placesurfer.i18n.pure.storage.parse_settings(raw);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}catch (e38748){var _ = e38748;
return cljs.core.PersistentArrayMap.EMPTY;
}});
/**
 * Persist settings map to localStorage.
 */
placesurfer.i18n.pure.storage.save_settings_BANG_ = (function placesurfer$i18n$pure$storage$save_settings_BANG_(settings){
try{return localStorage.setItem(placesurfer.i18n.pure.storage.storage_key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0)));
}catch (e38753){var _ = e38753;
return null;
}});

//# sourceMappingURL=placesurfer.i18n.pure.storage.js.map
