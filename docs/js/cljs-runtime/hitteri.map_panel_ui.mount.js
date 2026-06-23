goog.provide('hitteri.map_panel_ui.mount');
hitteri.map_panel_ui.mount.create_main_mount_BANG_ = (function hitteri$map_panel_ui$mount$create_main_mount_BANG_(p__41009){
var map__41010 = p__41009;
var map__41010__$1 = cljs.core.__destructure_map(map__41010);
var map_ui_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41010__$1,new cljs.core.Keyword(null,"map-ui-mount","map-ui-mount",47514862));
var sync_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41010__$1,new cljs.core.Keyword(null,"sync-map!","sync-map!",-1184263338));
var schedule_resize_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41010__$1,new cljs.core.Keyword(null,"schedule-resize!","schedule-resize!",260676051));
return (function (node){
(map_ui_mount.cljs$core$IFn$_invoke$arity$1 ? map_ui_mount.cljs$core$IFn$_invoke$arity$1(node) : map_ui_mount.call(null,node));

var G__41012_41022 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fit?","fit?",1773758200),true,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),false], null);
(sync_map_BANG_.cljs$core$IFn$_invoke$arity$1 ? sync_map_BANG_.cljs$core$IFn$_invoke$arity$1(G__41012_41022) : sync_map_BANG_.call(null,G__41012_41022));

return (schedule_resize_BANG_.cljs$core$IFn$_invoke$arity$0 ? schedule_resize_BANG_.cljs$core$IFn$_invoke$arity$0() : schedule_resize_BANG_.call(null));
});
});
hitteri.map_panel_ui.mount.create_update_mount_BANG_ = (function hitteri$map_panel_ui$mount$create_update_mount_BANG_(p__41013){
var map__41014 = p__41013;
var map__41014__$1 = cljs.core.__destructure_map(map__41014);
var map_ui_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41014__$1,new cljs.core.Keyword(null,"map-ui-mount","map-ui-mount",47514862));
var refresh_pending_places_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41014__$1,new cljs.core.Keyword(null,"refresh-pending-places!","refresh-pending-places!",1393552839));
var sync_update_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41014__$1,new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844));
var schedule_pin_sync_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41014__$1,new cljs.core.Keyword(null,"schedule-pin-sync!","schedule-pin-sync!",-999181801));
var schedule_resize_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41014__$1,new cljs.core.Keyword(null,"schedule-resize!","schedule-resize!",260676051));
return (function (node){
(map_ui_mount.cljs$core$IFn$_invoke$arity$1 ? map_ui_mount.cljs$core$IFn$_invoke$arity$1(node) : map_ui_mount.call(null,node));

(refresh_pending_places_BANG_.cljs$core$IFn$_invoke$arity$0 ? refresh_pending_places_BANG_.cljs$core$IFn$_invoke$arity$0() : refresh_pending_places_BANG_.call(null));

(sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$0 ? sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$0() : sync_update_map_BANG_.call(null));

(schedule_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$0 ? schedule_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$0() : schedule_pin_sync_BANG_.call(null));

return (schedule_resize_BANG_.cljs$core$IFn$_invoke$arity$0 ? schedule_resize_BANG_.cljs$core$IFn$_invoke$arity$0() : schedule_resize_BANG_.call(null));
});
});
hitteri.map_panel_ui.mount.create_pin_mount_BANG_ = (function hitteri$map_panel_ui$mount$create_pin_mount_BANG_(p__41015){
var map__41016 = p__41015;
var map__41016__$1 = cljs.core.__destructure_map(map__41016);
var map_ui_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41016__$1,new cljs.core.Keyword(null,"map-ui-mount","map-ui-mount",47514862));
var sync_pin_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41016__$1,new cljs.core.Keyword(null,"sync-pin-map!","sync-pin-map!",-1608172302));
var schedule_pin_sync_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41016__$1,new cljs.core.Keyword(null,"schedule-pin-sync!","schedule-pin-sync!",-999181801));
var schedule_resize_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41016__$1,new cljs.core.Keyword(null,"schedule-resize!","schedule-resize!",260676051));
return (function (node){
(map_ui_mount.cljs$core$IFn$_invoke$arity$1 ? map_ui_mount.cljs$core$IFn$_invoke$arity$1(node) : map_ui_mount.call(null,node));

(sync_pin_map_BANG_.cljs$core$IFn$_invoke$arity$0 ? sync_pin_map_BANG_.cljs$core$IFn$_invoke$arity$0() : sync_pin_map_BANG_.call(null));

(schedule_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$0 ? schedule_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$0() : schedule_pin_sync_BANG_.call(null));

return (schedule_resize_BANG_.cljs$core$IFn$_invoke$arity$0 ? schedule_resize_BANG_.cljs$core$IFn$_invoke$arity$0() : schedule_resize_BANG_.call(null));
});
});
hitteri.map_panel_ui.mount.create_unmount_BANG_ = (function hitteri$map_panel_ui$mount$create_unmount_BANG_(destroy_map_BANG_){
return (function (){
return (destroy_map_BANG_.cljs$core$IFn$_invoke$arity$0 ? destroy_map_BANG_.cljs$core$IFn$_invoke$arity$0() : destroy_map_BANG_.call(null));
});
});
hitteri.map_panel_ui.mount.handler_props = (function hitteri$map_panel_ui$mount$handler_props(p__41019){
var map__41020 = p__41019;
var map__41020__$1 = cljs.core.__destructure_map(map__41020);
var mount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41020__$1,new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372));
var mount_update_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41020__$1,new cljs.core.Keyword(null,"mount-update-map!","mount-update-map!",881879396));
var mount_pin_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41020__$1,new cljs.core.Keyword(null,"mount-pin-map!","mount-pin-map!",627497755));
var unmount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41020__$1,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372),mount_map_BANG_,new cljs.core.Keyword(null,"mount-update-map!","mount-update-map!",881879396),mount_update_map_BANG_,new cljs.core.Keyword(null,"mount-pin-map!","mount-pin-map!",627497755),mount_pin_map_BANG_,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601),unmount_map_BANG_], null);
});

//# sourceMappingURL=hitteri.map_panel_ui.mount.js.map
