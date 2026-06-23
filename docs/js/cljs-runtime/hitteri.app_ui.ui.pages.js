goog.provide('hitteri.app_ui.ui.pages');
hitteri.app_ui.ui.pages.map_page_QMARK_ = (function hitteri$app_ui$ui$pages$map_page_QMARK_(page){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.Keyword(null,"topic","topic",-1960480691),null,new cljs.core.Keyword(null,"country","country",312965309),null], null), null),page);
});
hitteri.app_ui.ui.pages.about_page_QMARK_ = (function hitteri$app_ui$ui$pages$about_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"about","about",1423892543));
});
hitteri.app_ui.ui.pages.settings_page_QMARK_ = (function hitteri$app_ui$ui$pages$settings_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"settings","settings",1556144875));
});
hitteri.app_ui.ui.pages.topic_page_QMARK_ = (function hitteri$app_ui$ui$pages$topic_page_QMARK_(page){
return hitteri.topic_ui.interface$.topic_page_QMARK_(page);
});
hitteri.app_ui.ui.pages.country_page_QMARK_ = (function hitteri$app_ui$ui$pages$country_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"country","country",312965309));
});
hitteri.app_ui.ui.pages.update_page_QMARK_ = (function hitteri$app_ui$ui$pages$update_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"update","update",1045576396));
});
hitteri.app_ui.ui.pages.pin_page_QMARK_ = (function hitteri$app_ui$ui$pages$pin_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"pin","pin",-2111774834));
});
hitteri.app_ui.ui.pages.groups_page_QMARK_ = (function hitteri$app_ui$ui$pages$groups_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"groups","groups",-136896102));
});
hitteri.app_ui.ui.pages.show_main_map_area_QMARK_ = (function hitteri$app_ui$ui$pages$show_main_map_area_QMARK_(p__40512){
var map__40513 = p__40512;
var map__40513__$1 = cljs.core.__destructure_map(map__40513);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40513__$1,new cljs.core.Keyword(null,"page","page",849072397));
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40513__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
return ((hitteri.app_ui.ui.pages.map_page_QMARK_(page)) && (cljs.core.not((function (){var and__5023__auto____$1 = mobile_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return ((hitteri.app_ui.ui.pages.topic_page_QMARK_(page)) || (hitteri.app_ui.ui.pages.country_page_QMARK_(page)));
} else {
return and__5023__auto____$1;
}
})())));
});

//# sourceMappingURL=hitteri.app_ui.ui.pages.js.map
