goog.provide('placesurfer.country_ui.panel');
placesurfer.country_ui.panel.panel = (function placesurfer$country_ui$panel$panel(p__41069){
var map__41070 = p__41069;
var map__41070__$1 = cljs.core.__destructure_map(map__41070);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41070__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var countries_loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41070__$1,new cljs.core.Keyword(null,"countries-loading?","countries-loading?",-1018911139));
var country_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41070__$1,new cljs.core.Keyword(null,"country-filter","country-filter",-2099038819));
var ensure_countries_loaded_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41070__$1,new cljs.core.Keyword(null,"ensure-countries-loaded!","ensure-countries-loaded!",1392756926));
var country_highlight_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41070__$1,new cljs.core.Keyword(null,"country-highlight-index","country-highlight-index",-1271997150));
var select_country_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41070__$1,new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741));
var navigate_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41070__$1,new cljs.core.Keyword(null,"navigate!","navigate!",79998348));
var countries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41070__$1,new cljs.core.Keyword(null,"countries","countries",863192750));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41070__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var set_country_filter_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41070__$1,new cljs.core.Keyword(null,"set-country-filter!","set-country-filter!",-1983545420));
var country_slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41070__$1,new cljs.core.Keyword(null,"country-slug","country-slug",769681844));
var set_country_highlight_index_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41070__$1,new cljs.core.Keyword(null,"set-country-highlight-index!","set-country-highlight-index!",1161345176));
var countries__$1 = (function (){var or__5025__auto__ = countries;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var filter_q = (function (){var or__5025__auto__ = country_filter;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
var status_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = status;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var load_error_QMARK_ = clojure.string.starts_with_QMARK_(status_str,"Error");
var visible = placesurfer.country_ui.filter.visible_countries(countries__$1,filter_q,country_slug);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.country-section","div.country-section",-1423692646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),(function (_){
if(cljs.core.truth_(ensure_countries_loaded_BANG_)){
return (ensure_countries_loaded_BANG_.cljs$core$IFn$_invoke$arity$0 ? ensure_countries_loaded_BANG_.cljs$core$IFn$_invoke$arity$0() : ensure_countries_loaded_BANG_.call(null));
} else {
return null;
}
})], null),placesurfer.country_ui.search.search_input(filter_q,country_slug,countries__$1,country_highlight_index,set_country_filter_BANG_,set_country_highlight_index_BANG_,select_country_BANG_,navigate_BANG_,t),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.country-list","div.country-list",-1501273171),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["country-list-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(countries__$1))].join('')], null),((load_error_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.country-list-message.country-list-message--error","p.country-list-message.country-list-message--error",1539474927),status_str], null):((cljs.core.empty_QMARK_(countries__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.country-list-message","p.country-list-message",1266904877),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("country","loading","country/loading",217921789)) : t.call(null,new cljs.core.Keyword("country","loading","country/loading",217921789)))], null):((cljs.core.empty_QMARK_(visible))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.country-list-message","p.country-list-message",1266904877),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("country","no-matches","country/no-matches",-1437953925)) : t.call(null,new cljs.core.Keyword("country","no-matches","country/no-matches",-1437953925)))], null):cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__41071){
var map__41072 = p__41071;
var map__41072__$1 = cljs.core.__destructure_map(map__41072);
var country = map__41072__$1;
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41072__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
return placesurfer.country_ui.rows.row(country,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slug,country_slug),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,country_highlight_index),select_country_BANG_);
}),visible)
)))], null)], null);
});

//# sourceMappingURL=placesurfer.country_ui.panel.js.map
