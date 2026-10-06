goog.provide('placesurfer.app_ui.ui.view');
placesurfer.app_ui.ui.view.view = (function placesurfer$app_ui$ui$view$view(p__26776){
var map__26777 = p__26776;
var map__26777__$1 = cljs.core.__destructure_map(map__26777);
var props = map__26777__$1;
var disconnect_dropbox_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26777__$1,new cljs.core.Keyword(null,"disconnect-dropbox!","disconnect-dropbox!",324541913),(function (){
return null;
}));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26777__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var dropbox_sync_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26777__$1,new cljs.core.Keyword(null,"dropbox-sync-error","dropbox-sync-error",526332698));
var set_locale_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26777__$1,new cljs.core.Keyword(null,"set-locale!","set-locale!",136598172),(function (_){
return null;
}));
var topic_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26777__$1,new cljs.core.Keyword(null,"topic-rows","topic-rows",1351926944),cljs.core.PersistentVector.EMPTY);
var connect_dropbox_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26777__$1,new cljs.core.Keyword(null,"connect-dropbox!","connect-dropbox!",-1870840475),(function (){
return null;
}));
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26777__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"en","en",88457073));
var backend_online_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26777__$1,new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729),false);
var navigate_to_pin_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26777__$1,new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720));
var dropbox_connected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26777__$1,new cljs.core.Keyword(null,"dropbox-connected?","dropbox-connected?",-1052021943));
var navigate_to_update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26777__$1,new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757));
var dropbox_configured_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26777__$1,new cljs.core.Keyword(null,"dropbox-configured?","dropbox-configured?",-1672215925));
var navigate_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26777__$1,new cljs.core.Keyword(null,"navigate!","navigate!",79998348));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26777__$1,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"pin","pin",-2111774834));
var dropbox_account_email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26777__$1,new cljs.core.Keyword(null,"dropbox-account-email","dropbox-account-email",-1050755345));
var country_iso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26777__$1,new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117));
var app_version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26777__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.app","main.app",-33260583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-page","data-page",798770447),cljs.core.name(page)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.nav-tabs","nav.nav-tabs",-1234066316),placesurfer.nav_ui.interface$.tabs.tabs(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"topic-rows","topic-rows",1351926944),new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729),new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),new cljs.core.Keyword(null,"country-code","country-code",-927451124),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"app-version","app-version",361554836),new cljs.core.Keyword(null,"t","t",-1397832519)],[topic_rows,backend_online_QMARK_,navigate_to_pin_BANG_,navigate_to_update_BANG_,(function (){var or__5025__auto__ = country_iso;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "SE";
}
})(),navigate_BANG_,page,app_version,t]))], null),((placesurfer.app_ui.ui.pages.about_page_QMARK_(page))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.about-page","section.about-page",-1165274803),placesurfer.about_ui.interface$.panel(props)], null):((placesurfer.app_ui.ui.pages.settings_page_QMARK_(page))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.settings-page","section.settings-page",-729540883),placesurfer.settings_ui.interface$.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"connect-dropbox!","connect-dropbox!",-1870840475),new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"dropbox-connected?","dropbox-connected?",-1052021943),new cljs.core.Keyword(null,"dropbox-configured?","dropbox-configured?",-1672215925),new cljs.core.Keyword(null,"dropbox-account-email","dropbox-account-email",-1050755345),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"disconnect-dropbox!","disconnect-dropbox!",324541913),new cljs.core.Keyword(null,"dropbox-sync-error","dropbox-sync-error",526332698),new cljs.core.Keyword(null,"set-locale!","set-locale!",136598172)],[connect_dropbox_BANG_,locale,dropbox_connected_QMARK_,dropbox_configured_QMARK_,dropbox_account_email,t,disconnect_dropbox_BANG_,dropbox_sync_error,set_locale_BANG_])], 0))], null):placesurfer.app_ui.ui.workspace.workspace(props)
))], null);
});

//# sourceMappingURL=placesurfer.app_ui.ui.view.js.map
