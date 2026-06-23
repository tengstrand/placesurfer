goog.provide('hitteri.i18n.pure.storage');
hitteri.i18n.pure.storage.storage_key = "settings";
hitteri.i18n.pure.storage.parse_settings = (function hitteri$i18n$pure$storage$parse_settings(raw){
if(cljs.core.seq(cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw))){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(raw);
}catch (e38764){var _ = e38764;
return null;
}} else {
return null;
}
});
/**
 * Load settings map from localStorage; returns {} when missing/invalid.
 */
hitteri.i18n.pure.storage.read_settings_BANG_ = (function hitteri$i18n$pure$storage$read_settings_BANG_(){
try{var temp__5823__auto__ = localStorage.getItem(hitteri.i18n.pure.storage.storage_key);
if(cljs.core.truth_(temp__5823__auto__)){
var raw = temp__5823__auto__;
var or__5025__auto__ = hitteri.i18n.pure.storage.parse_settings(raw);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}catch (e38765){var _ = e38765;
return cljs.core.PersistentArrayMap.EMPTY;
}});
/**
 * Persist settings map to localStorage.
 */
hitteri.i18n.pure.storage.save_settings_BANG_ = (function hitteri$i18n$pure$storage$save_settings_BANG_(settings){
try{return localStorage.setItem(hitteri.i18n.pure.storage.storage_key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0)));
}catch (e38766){var _ = e38766;
return null;
}});

//# sourceMappingURL=hitteri.i18n.pure.storage.js.map
