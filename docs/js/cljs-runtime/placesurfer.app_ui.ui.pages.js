goog.provide('placesurfer.app_ui.ui.pages');
placesurfer.app_ui.ui.pages.map_page_QMARK_ = (function placesurfer$app_ui$ui$pages$map_page_QMARK_(page){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.Keyword(null,"topic","topic",-1960480691),null,new cljs.core.Keyword(null,"layers","layers",1944875032),null,new cljs.core.Keyword(null,"draw","draw",1358331674),null,new cljs.core.Keyword(null,"country","country",312965309),null], null), null),page);
});
placesurfer.app_ui.ui.pages.draw_page_QMARK_ = (function placesurfer$app_ui$ui$pages$draw_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"draw","draw",1358331674));
});
placesurfer.app_ui.ui.pages.about_page_QMARK_ = (function placesurfer$app_ui$ui$pages$about_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"about","about",1423892543));
});
placesurfer.app_ui.ui.pages.settings_page_QMARK_ = (function placesurfer$app_ui$ui$pages$settings_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"settings","settings",1556144875));
});
placesurfer.app_ui.ui.pages.topic_page_QMARK_ = (function placesurfer$app_ui$ui$pages$topic_page_QMARK_(page){
return placesurfer.topic_ui.interface$.topic_page_QMARK_(page);
});
placesurfer.app_ui.ui.pages.country_page_QMARK_ = (function placesurfer$app_ui$ui$pages$country_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"country","country",312965309));
});
placesurfer.app_ui.ui.pages.update_page_QMARK_ = (function placesurfer$app_ui$ui$pages$update_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"update","update",1045576396));
});
placesurfer.app_ui.ui.pages.pin_page_QMARK_ = (function placesurfer$app_ui$ui$pages$pin_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"pin","pin",-2111774834));
});
placesurfer.app_ui.ui.pages.layers_page_QMARK_ = (function placesurfer$app_ui$ui$pages$layers_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"layers","layers",1944875032));
});
placesurfer.app_ui.ui.pages.groups_page_QMARK_ = (function placesurfer$app_ui$ui$pages$groups_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"groups","groups",-136896102));
});
placesurfer.app_ui.ui.pages.show_main_map_area_QMARK_ = (function placesurfer$app_ui$ui$pages$show_main_map_area_QMARK_(p__44654){
var map__44655 = p__44654;
var map__44655__$1 = cljs.core.__destructure_map(map__44655);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44655__$1,new cljs.core.Keyword(null,"page","page",849072397));
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44655__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
return ((placesurfer.app_ui.ui.pages.map_page_QMARK_(page)) && (cljs.core.not((function (){var and__5023__auto____$1 = mobile_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return ((placesurfer.app_ui.ui.pages.topic_page_QMARK_(page)) || (placesurfer.app_ui.ui.pages.country_page_QMARK_(page)));
} else {
return and__5023__auto____$1;
}
})())));
});

//# sourceMappingURL=placesurfer.app_ui.ui.pages.js.map
