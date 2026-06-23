goog.provide('hitteri.browser_storage.interface$');
hitteri.browser_storage.interface$.read_cookie = (function hitteri$browser_storage$interface$read_cookie(k){
return hitteri.browser_storage.core.read_cookie(k);
});
hitteri.browser_storage.interface$.write_cookie_BANG_ = (function hitteri$browser_storage$interface$write_cookie_BANG_(k,v){
return hitteri.browser_storage.core.write_cookie_BANG_(k,v);
});
hitteri.browser_storage.interface$.clear_cookie_BANG_ = (function hitteri$browser_storage$interface$clear_cookie_BANG_(k){
return hitteri.browser_storage.core.clear_cookie_BANG_(k);
});
hitteri.browser_storage.interface$.read_active_topics = (function hitteri$browser_storage$interface$read_active_topics(default_active_topics){
return hitteri.browser_storage.core.read_active_topics(default_active_topics);
});
hitteri.browser_storage.interface$.save_active_topics_BANG_ = (function hitteri$browser_storage$interface$save_active_topics_BANG_(topics){
return hitteri.browser_storage.core.save_active_topics_BANG_(topics);
});
hitteri.browser_storage.interface$.read_country_slug = (function hitteri$browser_storage$interface$read_country_slug(){
return hitteri.browser_storage.core.read_country_slug();
});
hitteri.browser_storage.interface$.save_country_slug_BANG_ = (function hitteri$browser_storage$interface$save_country_slug_BANG_(slug){
return hitteri.browser_storage.core.save_country_slug_BANG_(slug);
});
hitteri.browser_storage.interface$.read_topic_from_url = (function hitteri$browser_storage$interface$read_topic_from_url(){
return hitteri.browser_storage.core.read_topic_from_url();
});
hitteri.browser_storage.interface$.read_page_from_url = (function hitteri$browser_storage$interface$read_page_from_url(){
return hitteri.browser_storage.core.read_page_from_url();
});

//# sourceMappingURL=hitteri.browser_storage.interface.js.map
