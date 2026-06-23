goog.provide('hitteri.pin_ui.pure.toolbar_search');
hitteri.pin_ui.pure.toolbar_search.coerce_text = (function hitteri$pin_ui$pure$toolbar_search$coerce_text(v){
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
hitteri.pin_ui.pure.toolbar_search.search_field = (function hitteri$pin_ui$pure$toolbar_search$search_field(p__41159){
var map__41160 = p__41159;
var map__41160__$1 = cljs.core.__destructure_map(map__41160);
var input_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41160__$1,new cljs.core.Keyword(null,"input-id","input-id",1217549113));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41160__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var highlight_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41160__$1,new cljs.core.Keyword(null,"highlight-index","highlight-index",172822010));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41160__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var keydown_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41160__$1,new cljs.core.Keyword(null,"keydown!","keydown!",-2130509954));
var set_query_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41160__$1,new cljs.core.Keyword(null,"set-query!","set-query!",1034991167));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41160__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var select_result_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41160__$1,new cljs.core.Keyword(null,"select-result!","select-result!",-1027304474));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41160__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var toolbar_search_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41160__$1,new cljs.core.Keyword(null,"toolbar-search-end?","toolbar-search-end?",932086865));
var results_list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41160__$1,new cljs.core.Keyword(null,"results-list-id","results-list-id",1934165974));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-toolbar-search","div.update-toolbar-search",-1994646634),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(toolbar_search_end_QMARK_)?"update-toolbar-search--end":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-toolbar-search-icon","img.update-toolbar-search-icon",-558242337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/search.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.update-toolbar-search-input","input.update-toolbar-search-input",-1844597392),(function (){var G__41162 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","search-place","pin/search-place",-229499657)) : t.call(null,new cljs.core.Keyword("pin","search-place","pin/search-place",-229499657))),new cljs.core.Keyword(null,"aria-autocomplete","aria-autocomplete",860626940),"list",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),cljs.core.boolean$(cljs.core.seq(results)),new cljs.core.Keyword(null,"value","value",305978217),hitteri.pin_ui.pure.toolbar_search.coerce_text(query),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__41163 = e.target.value;
return (set_query_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_query_BANG_.cljs$core$IFn$_invoke$arity$1(G__41163) : set_query_BANG_.call(null,G__41163));
}),new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (e){
return (keydown_BANG_.cljs$core$IFn$_invoke$arity$1 ? keydown_BANG_.cljs$core$IFn$_invoke$arity$1(e) : keydown_BANG_.call(null,e));
})], null)], null);
if(cljs.core.truth_(input_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41162,new cljs.core.Keyword(null,"id","id",-1388402092),input_id);
} else {
return G__41162;
}
})()], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.update-toolbar-search-loading","p.update-toolbar-search-loading",895486651),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","searching","pin/searching",1101247042)) : t.call(null,new cljs.core.Keyword("pin","searching","pin/searching",1101247042)))], null):null),((cljs.core.seq(results))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.update-toolbar-search-results","ul.update-toolbar-search-results",-33148561),(function (){var G__41165 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"listbox"], null);
if(cljs.core.truth_(results_list_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41165,new cljs.core.Keyword(null,"id","id",-1388402092),results_list_id);
} else {
return G__41165;
}
})(),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__41166){
var map__41167 = p__41166;
var map__41167__$1 = cljs.core.__destructure_map(map__41167);
var result = map__41167__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41167__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.update-toolbar-search-result","li.update-toolbar-search-result",-982735694),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(cljs.core.truth_(results_list_id)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(results_list_id),"-result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''):null),new cljs.core.Keyword(null,"role","role",-736691072),"option",new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,highlight_index),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,highlight_index))?"update-toolbar-search-result--highlighted":null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (select_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_result_BANG_.cljs$core$IFn$_invoke$arity$1(result) : select_result_BANG_.call(null,result));
})], null)], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(result)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(result))].join('')], null));
}),results)], null):null)], null);
});
hitteri.pin_ui.pure.toolbar_search.pin_search = (function hitteri$pin_ui$pure$toolbar_search$pin_search(props){
return hitteri.pin_ui.pure.toolbar_search.search_field(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"select-result!","select-result!",-1027304474),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"toolbar-search-end?","toolbar-search-end?",932086865),new cljs.core.Keyword(null,"results-list-id","results-list-id",1934165974),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"input-id","input-id",1217549113),new cljs.core.Keyword(null,"highlight-index","highlight-index",172822010),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"keydown!","keydown!",-2130509954),new cljs.core.Keyword(null,"set-query!","set-query!",1034991167),new cljs.core.Keyword(null,"results","results",-1134170113)],[new cljs.core.Keyword(null,"select-pin-search-result!","select-pin-search-result!",-1512791515).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"toolbar-search-end?","toolbar-search-end?",932086865).cljs$core$IFn$_invoke$arity$2(props,true),"pin-toolbar-search-results",new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(props),"pin-toolbar-search",new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pin-search-keydown!","pin-search-keydown!",-1090004063).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"set-pin-search-query!","set-pin-search-query!",-442189002).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288).cljs$core$IFn$_invoke$arity$1(props)]));
});

//# sourceMappingURL=hitteri.pin_ui.pure.toolbar_search.js.map
