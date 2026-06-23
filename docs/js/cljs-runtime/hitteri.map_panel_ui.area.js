goog.provide('hitteri.map_panel_ui.area');
hitteri.map_panel_ui.area.area = (function hitteri$map_panel_ui$area$area(p__40961){
var map__40962 = p__40961;
var map__40962__$1 = cljs.core.__destructure_map(map__40962);
var map_status = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40962__$1,new cljs.core.Keyword(null,"map-status","map-status",1191308996),"");
var mount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40962__$1,new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372));
var unmount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40962__$1,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-area","div.map-area",1865513234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"map-area"], null),(function (){var temp__5825__auto__ = hitteri.map_panel_ui.status.display_status_text(map_status);
if(cljs.core.truth_(temp__5825__auto__)){
var text = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-status","div.map-status",511178478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-map-status","data-map-status",153631135),"true"], null),text], null);
} else {
return null;
}
})(),hitteri.map_panel_ui.container.container(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element-id","element-id",798606230),"map",new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372),mount_map_BANG_,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601),unmount_map_BANG_], null))], null);
});

//# sourceMappingURL=hitteri.map_panel_ui.area.js.map
