goog.provide('placesurfer.browser_storage.core');
placesurfer.browser_storage.core.topics_cookie_key = "placesurfer_active_topics";
placesurfer.browser_storage.core.country_cookie_key = "placesurfer_country_slug";
placesurfer.browser_storage.core.cookie_max_age_seconds = (((((60) * (60)) * (24)) * (365)) * (2));
placesurfer.browser_storage.core.read_cookie = (function placesurfer$browser_storage$core$read_cookie(k){
try{var pairs = (function (){var or__5025__auto__ = document.cookie;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})().split(";");
return cljs.core.some((function (pair){
var trimmed = clojure.string.trim(pair);
var idx = trimmed.indexOf("=");
if((((idx > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(trimmed,(0),idx),k)))){
return decodeURIComponent(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(trimmed,(idx + (1))));
} else {
return null;
}
}),pairs);
}catch (e40563){var _ = e40563;
return null;
}});
placesurfer.browser_storage.core.write_cookie_BANG_ = (function placesurfer$browser_storage$core$write_cookie_BANG_(k,v){
return (document.cookie = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))),"; path=/; max-age=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(placesurfer.browser_storage.core.cookie_max_age_seconds),"; samesite=lax"].join(''));
});
placesurfer.browser_storage.core.clear_cookie_BANG_ = (function placesurfer$browser_storage$core$clear_cookie_BANG_(k){
return (document.cookie = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"=; path=/; max-age=0; samesite=lax"].join(''));
});
placesurfer.browser_storage.core.read_active_topics = (function placesurfer$browser_storage$core$read_active_topics(default_active_topics){
var raw = placesurfer.browser_storage.core.read_cookie(placesurfer.browser_storage.core.topics_cookie_key);
var allowed = cljs.core.set(placesurfer.topic.interface$.topic_keys());
if(cljs.core.seq(raw)){
var parsed = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (v){
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.contains_QMARK_(allowed,k)){
return k;
} else {
return null;
}
}),raw.split(",")));
if(cljs.core.seq(parsed)){
return parsed;
} else {
return (default_active_topics.cljs$core$IFn$_invoke$arity$0 ? default_active_topics.cljs$core$IFn$_invoke$arity$0() : default_active_topics.call(null));
}
} else {
return (default_active_topics.cljs$core$IFn$_invoke$arity$0 ? default_active_topics.cljs$core$IFn$_invoke$arity$0() : default_active_topics.call(null));
}
});
placesurfer.browser_storage.core.save_active_topics_BANG_ = (function placesurfer$browser_storage$core$save_active_topics_BANG_(topics){
if(cljs.core.empty_QMARK_(topics)){
return placesurfer.browser_storage.core.clear_cookie_BANG_(placesurfer.browser_storage.core.topics_cookie_key);
} else {
return placesurfer.browser_storage.core.write_cookie_BANG_(placesurfer.browser_storage.core.topics_cookie_key,clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(topics))));
}
});
placesurfer.browser_storage.core.read_country_slug = (function placesurfer$browser_storage$core$read_country_slug(){
var G__40564 = placesurfer.browser_storage.core.read_cookie(placesurfer.browser_storage.core.country_cookie_key);
var G__40564__$1 = (((G__40564 == null))?null:clojure.string.trim(G__40564));
if((G__40564__$1 == null)){
return null;
} else {
return cljs.core.not_empty(G__40564__$1);
}
});
placesurfer.browser_storage.core.save_country_slug_BANG_ = (function placesurfer$browser_storage$core$save_country_slug_BANG_(slug){
if(cljs.core.seq(slug)){
return placesurfer.browser_storage.core.write_cookie_BANG_(placesurfer.browser_storage.core.country_cookie_key,slug);
} else {
return placesurfer.browser_storage.core.clear_cookie_BANG_(placesurfer.browser_storage.core.country_cookie_key);
}
});
placesurfer.browser_storage.core.read_topic_from_url = (function placesurfer$browser_storage$core$read_topic_from_url(){
try{var params = (new URLSearchParams((function (){var or__5025__auto__ = location.search;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()));
var raw = params.get("topic");
var topic = (function (){var G__40566 = raw;
var G__40566__$1 = (((G__40566 == null))?null:clojure.string.trim(G__40566));
var G__40566__$2 = (((G__40566__$1 == null))?null:clojure.string.lower_case(G__40566__$1));
if((G__40566__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__40566__$2);
}
})();
var allowed = cljs.core.set(placesurfer.topic.interface$.topic_keys());
if(cljs.core.contains_QMARK_(allowed,topic)){
return topic;
} else {
return null;
}
}catch (e40565){var _ = e40565;
return null;
}});
placesurfer.browser_storage.core.allowed_url_pages = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.Keyword(null,"settings","settings",1556144875),null,new cljs.core.Keyword(null,"update","update",1045576396),null,new cljs.core.Keyword(null,"topic","topic",-1960480691),null,new cljs.core.Keyword(null,"pin","pin",-2111774834),null,new cljs.core.Keyword(null,"country","country",312965309),null,new cljs.core.Keyword(null,"about","about",1423892543),null], null), null);
placesurfer.browser_storage.core.read_page_from_url = (function placesurfer$browser_storage$core$read_page_from_url(){
try{var params = (new URLSearchParams((function (){var or__5025__auto__ = location.search;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()));
var raw = params.get("page");
var page = (function (){var G__40568 = raw;
var G__40568__$1 = (((G__40568 == null))?null:clojure.string.trim(G__40568));
var G__40568__$2 = (((G__40568__$1 == null))?null:clojure.string.lower_case(G__40568__$1));
if((G__40568__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__40568__$2);
}
})();
if(cljs.core.contains_QMARK_(placesurfer.browser_storage.core.allowed_url_pages,page)){
return page;
} else {
return null;
}
}catch (e40567){var _ = e40567;
return null;
}});

//# sourceMappingURL=placesurfer.browser_storage.core.js.map
