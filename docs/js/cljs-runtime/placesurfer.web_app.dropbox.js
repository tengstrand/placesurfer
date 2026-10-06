goog.provide('placesurfer.web_app.dropbox');
/**
 * Reflects the dropbox component's own truth (localStorage) onto the UI state atom.
 */
placesurfer.web_app.dropbox.sync_state_BANG_ = (function placesurfer$web_app$dropbox$sync_state_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"dropbox-configured?","dropbox-configured?",-1672215925),placesurfer.dropbox.interface$.configured_QMARK_(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dropbox-connected?","dropbox-connected?",-1052021943),placesurfer.dropbox.interface$.connected_QMARK_(),new cljs.core.Keyword(null,"dropbox-account-email","dropbox-account-email",-1050755345),placesurfer.dropbox.interface$.account_email()], 0));

return placesurfer.web_app.effects.render_BANG_();
});
placesurfer.web_app.dropbox.show_sync_error_BANG_ = (function placesurfer$web_app$dropbox$show_sync_error_BANG_(err){
console.error("Dropbox sync error",err);

placesurfer.nav_ui.interface$.toast.show_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),new cljs.core.Keyword(null,"en","en",88457073)),new cljs.core.Keyword("settings","dropbox-error","settings/dropbox-error",1243841821)], 0))], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"dropbox-sync-error","dropbox-sync-error",526332698),true);

return placesurfer.web_app.effects.render_BANG_();
});
/**
 * Wires the dropbox component's background-push-failure hook to a user-facing toast,
 * and registers what actually gets synced - one Dropbox file per data type - since the
 * dropbox component itself stays fully agnostic of prefs/pins (see register-sync-doc!).
 */
placesurfer.web_app.dropbox.init_BANG_ = (function placesurfer$web_app$dropbox$init_BANG_(){
placesurfer.dropbox.interface$.set_on_push_error_BANG_(placesurfer.web_app.dropbox.show_sync_error_BANG_);

placesurfer.dropbox.interface$.register_sync_doc_BANG_(new cljs.core.Keyword(null,"prefs","prefs",-1818938470),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote-path","remote-path",-1354459447),"/prefs.edn",new cljs.core.Keyword(null,"read","read",1140058661),(function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-topics","active-topics",1278012558),cljs.core.vec(placesurfer.browser_storage.interface$.read_active_topics(cljs.core.constantly(cljs.core.PersistentHashSet.EMPTY))),new cljs.core.Keyword(null,"country-slug","country-slug",769681844),placesurfer.browser_storage.interface$.read_country_slug(),new cljs.core.Keyword(null,"page","page",849072397),placesurfer.browser_storage.interface$.read_saved_page()], null);
}),new cljs.core.Keyword(null,"write","write",-1857649168),(function (data){
if(cljs.core.seq(new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(data))){
placesurfer.browser_storage.interface$.save_active_topics_BANG_(cljs.core.set(new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(data)));
} else {
}

if(cljs.core.seq(new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(data))){
placesurfer.browser_storage.interface$.save_country_slug_BANG_(new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(data));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(data))){
return placesurfer.browser_storage.interface$.save_page_BANG_(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(data));
} else {
return null;
}
})], null));

placesurfer.dropbox.interface$.register_sync_doc_BANG_(new cljs.core.Keyword(null,"pins","pins",1725193285),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote-path","remote-path",-1354459447),"/pins.edn",new cljs.core.Keyword(null,"read","read",1140058661),placesurfer.pin_ui.interface$.storage.read_pins_BANG_,new cljs.core.Keyword(null,"write","write",-1857649168),(function (pins){
if(cljs.core.seq(pins)){
return placesurfer.pin_ui.interface$.storage.save_pins_BANG_(pins);
} else {
return null;
}
})], null));

return placesurfer.dropbox.interface$.register_sync_doc_BANG_(new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote-path","remote-path",-1354459447),"/search.edn",new cljs.core.Keyword(null,"read","read",1140058661),placesurfer.pin_ui.interface$.storage.read_search_results_BANG_,new cljs.core.Keyword(null,"write","write",-1857649168),placesurfer.pin_ui.interface$.storage.save_search_results_BANG_], null));
});
placesurfer.web_app.dropbox.connect_BANG_ = (function placesurfer$web_app$dropbox$connect_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"dropbox-sync-error","dropbox-sync-error",526332698),null);

return placesurfer.dropbox.interface$.begin_connect_BANG_().catch((function (err){
console.error("Dropbox connect error",err);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"dropbox-sync-error","dropbox-sync-error",526332698),true);

return placesurfer.web_app.effects.render_BANG_();
}));
});
placesurfer.web_app.dropbox.disconnect_BANG_ = (function placesurfer$web_app$dropbox$disconnect_BANG_(){
return placesurfer.dropbox.interface$.disconnect_BANG_().then((function (_){
return placesurfer.web_app.dropbox.sync_state_BANG_();
}));
});

//# sourceMappingURL=placesurfer.web_app.dropbox.js.map
