goog.provide('placesurfer.web_app.map_sync');
placesurfer.web_app.map_sync.popup_opts = (function placesurfer$web_app$map_sync$popup_opts(s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-label","source-label",585601639),placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"en","en",88457073)),new cljs.core.Keyword("popup","source-label","popup/source-label",1481253299)], 0))], null);
});
placesurfer.web_app.map_sync.sync_map_BANG_ = (function placesurfer$web_app$map_sync$sync_map_BANG_(var_args){
var G__63033 = arguments.length;
switch (G__63033) {
case 0:
return placesurfer.web_app.map_sync.sync_map_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return placesurfer.web_app.map_sync.sync_map_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.web_app.map_sync.sync_map_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return placesurfer.web_app.map_sync.sync_map_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.web_app.map_sync.sync_map_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__63035){
var map__63036 = p__63035;
var map__63036__$1 = cljs.core.__destructure_map(map__63036);
var fit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63036__$1,new cljs.core.Keyword(null,"fit?","fit?",1773758200),false);
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63036__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854));
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63036__$1,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))){
placesurfer.map_ui.interface$.apply_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY], null));

var temp__5825__auto__ = new cljs.core.Keyword(null,"draw-selected-layer-id","draw-selected-layer-id",-1205706411).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto__)){
var layer_id = temp__5825__auto__;
return placesurfer.map_ui.interface$.load_draw_layer_BANG_(layer_id);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))){
placesurfer.edit.interface$.handlers.map.refresh_update_pending_places_BANG_();

return placesurfer.map_ui.interface$.apply_state_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"positions","positions",-1380538434),placesurfer.edit.interface$.handlers.map.update_map_positions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(placesurfer.web_app.state._BANG_state)], 0)),new cljs.core.Keyword(null,"fit?","fit?",1773758200),fit_QMARK_,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),placesurfer.web_app.map_sync.popup_opts(cljs.core.deref(placesurfer.web_app.state._BANG_state))], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))){
return placesurfer.pin_ui.interface$.handlers.map.sync_pin_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null)], 0));
} else {
var s = cljs.core.deref(placesurfer.web_app.state._BANG_state);
var pin_selected_QMARK_ = (!((new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s) == null)));
var effective_fit_QMARK_ = (function (){var and__5023__auto__ = fit_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!(pin_selected_QMARK_));
} else {
return and__5023__auto__;
}
})();
placesurfer.map_ui.interface$.sync_overlay_layers_BANG_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"active-overlays","active-overlays",786029233).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})());

placesurfer.map_ui.interface$.apply_state_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"positions","positions",-1380538434),placesurfer.pin_ui.interface$.handlers.map.main_map_positions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)),new cljs.core.Keyword(null,"fit?","fit?",1773758200),effective_fit_QMARK_,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),fit_bounds,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),animate_QMARK_,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),placesurfer.web_app.map_sync.popup_opts(s)], null));

if(cljs.core.truth_((function (){var and__5023__auto__ = pin_selected_QMARK_;
if(and__5023__auto__){
return placesurfer.pin_ui.interface$.handlers.map.selected_pin_on_main_map_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
} else {
return and__5023__auto__;
}
})())){
return placesurfer.pin_ui.interface$.handlers.map.schedule_focus_selected_pin_on_main_map_BANG_();
} else {
return null;
}

}
}
}
}));

(placesurfer.web_app.map_sync.sync_map_BANG_.cljs$lang$maxFixedArity = 1);

placesurfer.web_app.map_sync.schedule_map_resize_BANG_ = (function placesurfer$web_app$map_sync$schedule_map_resize_BANG_(){
return placesurfer.map_panel_ui.interface$.resize.schedule_resize_BANG_(placesurfer.map_ui.interface$.resize_map_BANG_);
});

//# sourceMappingURL=placesurfer.web_app.map_sync.js.map
