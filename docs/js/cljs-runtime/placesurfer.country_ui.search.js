goog.provide('placesurfer.country_ui.search');
placesurfer.country_ui.search.sync_input_BANG_ = (function placesurfer$country_ui$search$sync_input_BANG_(node,value){
if(cljs.core.truth_(node)){
var v = (function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node.value,v)) && (((cljs.core.empty_QMARK_(v)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node,document.activeElement)))))){
return (node.value = v);
} else {
return null;
}
} else {
return null;
}
});
placesurfer.country_ui.search.handle_keydown_BANG_ = (function placesurfer$country_ui$search$handle_keydown_BANG_(e,country_highlight_index,visible,n,select_country_BANG_,set_country_highlight_index_BANG_,navigate_BANG_){
var key = e.key;
var trimmed = e.target.value.trim();
var G__41055 = key;
switch (G__41055) {
case "ArrowDown":
e.preventDefault();

var G__41056 = placesurfer.country.interface$.step_highlight_index(country_highlight_index,n,(1));
return (set_country_highlight_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_country_highlight_index_BANG_.cljs$core$IFn$_invoke$arity$1(G__41056) : set_country_highlight_index_BANG_.call(null,G__41056));

break;
case "ArrowUp":
e.preventDefault();

var G__41057 = placesurfer.country.interface$.step_highlight_index(country_highlight_index,n,(-1));
return (set_country_highlight_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_country_highlight_index_BANG_.cljs$core$IFn$_invoke$arity$1(G__41057) : set_country_highlight_index_BANG_.call(null,G__41057));

break;
case "Enter":
e.preventDefault();

if(cljs.core.empty_QMARK_(trimmed)){
return (navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home","home",-74557309)) : navigate_BANG_.call(null,new cljs.core.Keyword(null,"home","home",-74557309)));
} else {
if((n > (0))){
var idx = (function (){var or__5025__auto__ = country_highlight_index;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var slug = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(visible,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"slug","slug",2029314850)], null));
if(cljs.core.truth_(slug)){
return (select_country_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_country_BANG_.cljs$core$IFn$_invoke$arity$1(slug) : select_country_BANG_.call(null,slug));
} else {
return null;
}
} else {
return null;
}
}

break;
default:
return null;

}
});
placesurfer.country_ui.search.search_input = (function placesurfer$country_ui$search$search_input(value,country_slug,countries,country_highlight_index,set_country_filter_BANG_,set_country_highlight_index_BANG_,select_country_BANG_,navigate_BANG_,t){
var visible_for_query = (function (query){
return placesurfer.country_ui.filter.visible_countries(countries,query,country_slug);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.country-search","input.country-search",1269050040),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("country","search-placeholder","country/search-placeholder",-1195805085)) : t.call(null,new cljs.core.Keyword("country","search-placeholder","country/search-placeholder",-1195805085))),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("country","search-aria","country/search-aria",1854596116)) : t.call(null,new cljs.core.Keyword("country","search-aria","country/search-aria",1854596116))),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__41059){
var map__41060 = p__41059;
var map__41060__$1 = cljs.core.__destructure_map(map__41060);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41060__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return placesurfer.country_ui.search.sync_input_BANG_(node,value);
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var query = e.target.value;
var visible = visible_for_query(query);
var G__41061 = query;
var G__41062 = cljs.core.count(visible);
return (set_country_filter_BANG_.cljs$core$IFn$_invoke$arity$2 ? set_country_filter_BANG_.cljs$core$IFn$_invoke$arity$2(G__41061,G__41062) : set_country_filter_BANG_.call(null,G__41061,G__41062));
}),new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (e){
var trimmed = e.target.value.trim();
var visible = visible_for_query(trimmed);
return placesurfer.country_ui.search.handle_keydown_BANG_(e,country_highlight_index,visible,cljs.core.count(visible),select_country_BANG_,set_country_highlight_index_BANG_,navigate_BANG_);
})], null)], null)], null);
});

//# sourceMappingURL=placesurfer.country_ui.search.js.map
