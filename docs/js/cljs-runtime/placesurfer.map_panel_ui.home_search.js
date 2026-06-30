goog.provide('placesurfer.map_panel_ui.home_search');
placesurfer.map_panel_ui.home_search.coerce_text = (function placesurfer$map_panel_ui$home_search$coerce_text(v){
if(typeof v === 'string'){
return v;
} else {
if((v == null)){
return "";
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
});
placesurfer.map_panel_ui.home_search.home_search = (function placesurfer$map_panel_ui$home_search$home_search(p__62490){
var map__62491 = p__62490;
var map__62491__$1 = cljs.core.__destructure_map(map__62491);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62491__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62491__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62491__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var highlight_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62491__$1,new cljs.core.Keyword(null,"highlight-index","highlight-index",172822010));
var set_query_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62491__$1,new cljs.core.Keyword(null,"set-query!","set-query!",1034991167));
var select_result_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62491__$1,new cljs.core.Keyword(null,"select-result!","select-result!",-1027304474));
var keydown_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62491__$1,new cljs.core.Keyword(null,"keydown!","keydown!",-2130509954));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62491__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-home-search","div.map-home-search",-39934515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-toolbar-search-icon","img.update-toolbar-search-icon",-558242337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/search.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.update-toolbar-search-input","input.update-toolbar-search-input",-1844597392),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"home-search",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","search-place","pin/search-place",-229499657)) : t.call(null,new cljs.core.Keyword("pin","search-place","pin/search-place",-229499657))),new cljs.core.Keyword(null,"aria-autocomplete","aria-autocomplete",860626940),"list",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),cljs.core.boolean$(cljs.core.seq(results)),new cljs.core.Keyword(null,"value","value",305978217),placesurfer.map_panel_ui.home_search.coerce_text(query),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__62492 = e.target.value;
return (set_query_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_query_BANG_.cljs$core$IFn$_invoke$arity$1(G__62492) : set_query_BANG_.call(null,G__62492));
}),new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (e){
return (keydown_BANG_.cljs$core$IFn$_invoke$arity$1 ? keydown_BANG_.cljs$core$IFn$_invoke$arity$1(e) : keydown_BANG_.call(null,e));
})], null)], null)], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.update-toolbar-search-loading","p.update-toolbar-search-loading",895486651),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","searching","pin/searching",1101247042)) : t.call(null,new cljs.core.Keyword("pin","searching","pin/searching",1101247042)))], null):null),((cljs.core.seq(results))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.update-toolbar-search-results","ul.update-toolbar-search-results",-33148561),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"listbox",new cljs.core.Keyword(null,"id","id",-1388402092),"home-search-results"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__62493){
var map__62494 = p__62493;
var map__62494__$1 = cljs.core.__destructure_map(map__62494);
var result = map__62494__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62494__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.update-toolbar-search-result","li.update-toolbar-search-result",-982735694),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["home-search-results-result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"role","role",-736691072),"option",new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,highlight_index),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,highlight_index))?"update-toolbar-search-result--highlighted":null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (select_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_result_BANG_.cljs$core$IFn$_invoke$arity$1(result) : select_result_BANG_.call(null,result));
})], null)], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(result)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(result))].join('')], null));
}),results)], null):null)], null);
});

//# sourceMappingURL=placesurfer.map_panel_ui.home_search.js.map
