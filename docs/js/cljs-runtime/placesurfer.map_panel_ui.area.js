goog.provide('placesurfer.map_panel_ui.area');
placesurfer.map_panel_ui.area.area = (function placesurfer$map_panel_ui$area$area(p__40728){
var map__40729 = p__40728;
var map__40729__$1 = cljs.core.__destructure_map(map__40729);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var unmount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601));
var set_home_search_query_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,new cljs.core.Keyword(null,"set-home-search-query!","set-home-search-query!",-103712286));
var map_status = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40729__$1,new cljs.core.Keyword(null,"map-status","map-status",1191308996),"");
var home_search_loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,new cljs.core.Keyword(null,"home-search-loading?","home-search-loading?",-536758452));
var select_home_search_result_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,new cljs.core.Keyword(null,"select-home-search-result!","select-home-search-result!",16333422));
var home_search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,new cljs.core.Keyword(null,"home-search-results","home-search-results",556485744));
var home_search_highlight_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,new cljs.core.Keyword(null,"home-search-highlight-index","home-search-highlight-index",-1709760590));
var home_search_keydown_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,new cljs.core.Keyword(null,"home-search-keydown!","home-search-keydown!",1476326163));
var home_search_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,new cljs.core.Keyword(null,"home-search-query","home-search-query",1117256691));
var mount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-area","div.map-area",1865513234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"map-area"], null),(cljs.core.truth_(set_home_search_query_BANG_)?placesurfer.map_panel_ui.home_search.home_search(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"query","query",-1288509510),home_search_query,new cljs.core.Keyword(null,"results","results",-1134170113),home_search_results,new cljs.core.Keyword(null,"loading?","loading?",1905707049),home_search_loading_QMARK_,new cljs.core.Keyword(null,"highlight-index","highlight-index",172822010),home_search_highlight_index,new cljs.core.Keyword(null,"set-query!","set-query!",1034991167),set_home_search_query_BANG_,new cljs.core.Keyword(null,"select-result!","select-result!",-1027304474),select_home_search_result_BANG_,new cljs.core.Keyword(null,"keydown!","keydown!",-2130509954),home_search_keydown_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null)):(function (){var temp__5825__auto__ = placesurfer.map_panel_ui.status.display_status_text(map_status);
if(cljs.core.truth_(temp__5825__auto__)){
var text = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-status","div.map-status",511178478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-map-status","data-map-status",153631135),"true"], null),text], null);
} else {
return null;
}
})()),placesurfer.map_panel_ui.container.container(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element-id","element-id",798606230),"map",new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372),mount_map_BANG_,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601),unmount_map_BANG_], null))], null);
});

//# sourceMappingURL=placesurfer.map_panel_ui.area.js.map
