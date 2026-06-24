goog.provide('placesurfer.map_panel_ui.mount');
placesurfer.map_panel_ui.mount.create_main_mount_BANG_ = (function placesurfer$map_panel_ui$mount$create_main_mount_BANG_(p__48810){
var map__48811 = p__48810;
var map__48811__$1 = cljs.core.__destructure_map(map__48811);
var map_ui_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48811__$1,new cljs.core.Keyword(null,"map-ui-mount","map-ui-mount",47514862));
var sync_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48811__$1,new cljs.core.Keyword(null,"sync-map!","sync-map!",-1184263338));
var schedule_resize_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48811__$1,new cljs.core.Keyword(null,"schedule-resize!","schedule-resize!",260676051));
return (function (node){
(map_ui_mount.cljs$core$IFn$_invoke$arity$1 ? map_ui_mount.cljs$core$IFn$_invoke$arity$1(node) : map_ui_mount.call(null,node));

var G__48812_48819 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fit?","fit?",1773758200),true,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),false], null);
(sync_map_BANG_.cljs$core$IFn$_invoke$arity$1 ? sync_map_BANG_.cljs$core$IFn$_invoke$arity$1(G__48812_48819) : sync_map_BANG_.call(null,G__48812_48819));

return (schedule_resize_BANG_.cljs$core$IFn$_invoke$arity$0 ? schedule_resize_BANG_.cljs$core$IFn$_invoke$arity$0() : schedule_resize_BANG_.call(null));
});
});
placesurfer.map_panel_ui.mount.create_update_mount_BANG_ = (function placesurfer$map_panel_ui$mount$create_update_mount_BANG_(p__48813){
var map__48814 = p__48813;
var map__48814__$1 = cljs.core.__destructure_map(map__48814);
var map_ui_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48814__$1,new cljs.core.Keyword(null,"map-ui-mount","map-ui-mount",47514862));
var add_pin_pick_control_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48814__$1,new cljs.core.Keyword(null,"add-pin-pick-control!","add-pin-pick-control!",-1060873192));
var refresh_pending_places_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48814__$1,new cljs.core.Keyword(null,"refresh-pending-places!","refresh-pending-places!",1393552839));
var sync_update_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48814__$1,new cljs.core.Keyword(null,"sync-update-map!","sync-update-map!",-202838844));
var schedule_pin_sync_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48814__$1,new cljs.core.Keyword(null,"schedule-pin-sync!","schedule-pin-sync!",-999181801));
var schedule_resize_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48814__$1,new cljs.core.Keyword(null,"schedule-resize!","schedule-resize!",260676051));
return (function (node){
(map_ui_mount.cljs$core$IFn$_invoke$arity$1 ? map_ui_mount.cljs$core$IFn$_invoke$arity$1(node) : map_ui_mount.call(null,node));

if(cljs.core.truth_(add_pin_pick_control_BANG_)){
(add_pin_pick_control_BANG_.cljs$core$IFn$_invoke$arity$0 ? add_pin_pick_control_BANG_.cljs$core$IFn$_invoke$arity$0() : add_pin_pick_control_BANG_.call(null));
} else {
}

(refresh_pending_places_BANG_.cljs$core$IFn$_invoke$arity$0 ? refresh_pending_places_BANG_.cljs$core$IFn$_invoke$arity$0() : refresh_pending_places_BANG_.call(null));

(sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$0 ? sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$0() : sync_update_map_BANG_.call(null));

(schedule_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$0 ? schedule_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$0() : schedule_pin_sync_BANG_.call(null));

return (schedule_resize_BANG_.cljs$core$IFn$_invoke$arity$0 ? schedule_resize_BANG_.cljs$core$IFn$_invoke$arity$0() : schedule_resize_BANG_.call(null));
});
});
placesurfer.map_panel_ui.mount.create_pin_mount_BANG_ = (function placesurfer$map_panel_ui$mount$create_pin_mount_BANG_(p__48815){
var map__48816 = p__48815;
var map__48816__$1 = cljs.core.__destructure_map(map__48816);
var map_ui_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48816__$1,new cljs.core.Keyword(null,"map-ui-mount","map-ui-mount",47514862));
var add_pin_pick_control_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48816__$1,new cljs.core.Keyword(null,"add-pin-pick-control!","add-pin-pick-control!",-1060873192));
var sync_pin_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48816__$1,new cljs.core.Keyword(null,"sync-pin-map!","sync-pin-map!",-1608172302));
var schedule_pin_sync_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48816__$1,new cljs.core.Keyword(null,"schedule-pin-sync!","schedule-pin-sync!",-999181801));
var schedule_resize_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48816__$1,new cljs.core.Keyword(null,"schedule-resize!","schedule-resize!",260676051));
return (function (node){
(map_ui_mount.cljs$core$IFn$_invoke$arity$1 ? map_ui_mount.cljs$core$IFn$_invoke$arity$1(node) : map_ui_mount.call(null,node));

if(cljs.core.truth_(add_pin_pick_control_BANG_)){
(add_pin_pick_control_BANG_.cljs$core$IFn$_invoke$arity$0 ? add_pin_pick_control_BANG_.cljs$core$IFn$_invoke$arity$0() : add_pin_pick_control_BANG_.call(null));
} else {
}

(sync_pin_map_BANG_.cljs$core$IFn$_invoke$arity$0 ? sync_pin_map_BANG_.cljs$core$IFn$_invoke$arity$0() : sync_pin_map_BANG_.call(null));

(schedule_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$0 ? schedule_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$0() : schedule_pin_sync_BANG_.call(null));

return (schedule_resize_BANG_.cljs$core$IFn$_invoke$arity$0 ? schedule_resize_BANG_.cljs$core$IFn$_invoke$arity$0() : schedule_resize_BANG_.call(null));
});
});
placesurfer.map_panel_ui.mount.create_unmount_BANG_ = (function placesurfer$map_panel_ui$mount$create_unmount_BANG_(destroy_map_BANG_){
return (function (){
return (destroy_map_BANG_.cljs$core$IFn$_invoke$arity$0 ? destroy_map_BANG_.cljs$core$IFn$_invoke$arity$0() : destroy_map_BANG_.call(null));
});
});
placesurfer.map_panel_ui.mount.handler_props = (function placesurfer$map_panel_ui$mount$handler_props(p__48817){
var map__48818 = p__48817;
var map__48818__$1 = cljs.core.__destructure_map(map__48818);
var mount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48818__$1,new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372));
var mount_update_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48818__$1,new cljs.core.Keyword(null,"mount-update-map!","mount-update-map!",881879396));
var mount_pin_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48818__$1,new cljs.core.Keyword(null,"mount-pin-map!","mount-pin-map!",627497755));
var unmount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48818__$1,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372),mount_map_BANG_,new cljs.core.Keyword(null,"mount-update-map!","mount-update-map!",881879396),mount_update_map_BANG_,new cljs.core.Keyword(null,"mount-pin-map!","mount-pin-map!",627497755),mount_pin_map_BANG_,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601),unmount_map_BANG_], null);
});

//# sourceMappingURL=placesurfer.map_panel_ui.mount.js.map
