goog.provide('placesurfer.map_panel_ui.container');
placesurfer.map_panel_ui.container.container = (function placesurfer$map_panel_ui$container$container(p__40989){
var map__40990 = p__40989;
var map__40990__$1 = cljs.core.__destructure_map(map__40990);
var element_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40990__$1,new cljs.core.Keyword(null,"element-id","element-id",798606230));
var mount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40990__$1,new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372));
var unmount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40990__$1,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-root","div.map-root",-1183173812),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),["map-container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_id)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),element_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd"], null),new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),(function (p__40991){
var map__40992 = p__40991;
var map__40992__$1 = cljs.core.__destructure_map(map__40992);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40992__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return setTimeout((function (){
if(cljs.core.truth_(mount_map_BANG_)){
return (mount_map_BANG_.cljs$core$IFn$_invoke$arity$1 ? mount_map_BANG_.cljs$core$IFn$_invoke$arity$1(node) : mount_map_BANG_.call(null,node));
} else {
return null;
}
}),(0));
}),new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753),(function (_){
if(cljs.core.truth_(unmount_map_BANG_)){
return (unmount_map_BANG_.cljs$core$IFn$_invoke$arity$0 ? unmount_map_BANG_.cljs$core$IFn$_invoke$arity$0() : unmount_map_BANG_.call(null));
} else {
return null;
}
})], null)], null);
});

//# sourceMappingURL=placesurfer.map_panel_ui.container.js.map
