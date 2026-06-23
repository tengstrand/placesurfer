goog.provide('hitteri.web_app.map_country');
hitteri.web_app.map_country.disable_country_pick_BANG_ = (function hitteri$web_app$map_country$disable_country_pick_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hitteri.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"map-country-pick?","map-country-pick?",-197660270),false);

return hitteri.map_ui.interface$.sync_country_pick_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),false], null));
});
hitteri.web_app.map_country.select_country_at_point_BANG_ = (function hitteri$web_app$map_country$select_country_at_point_BANG_(p__50492){
var map__50493 = p__50492;
var map__50493__$1 = cljs.core.__destructure_map(map__50493);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50493__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50493__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
hitteri.app_ui.interface$.load.ensure_countries_loaded_BANG_();

var temp__5825__auto__ = hitteri.country.interface$.slug_for_point(longitude,latitude,new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.web_app.state._BANG_state)));
if(cljs.core.truth_(temp__5825__auto__)){
var slug = temp__5825__auto__;
hitteri.web_app.map_country.disable_country_pick_BANG_();

var temp__5825__auto___50494__$1 = hitteri.map_ui.interface$.map_view_state();
if(cljs.core.truth_(temp__5825__auto___50494__$1)){
var view_50495 = temp__5825__auto___50494__$1;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hitteri.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"map-restore-view","map-restore-view",1509489165),view_50495);
} else {
}

return hitteri.web_app.effects.select_country_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([slug], 0));
} else {
return null;
}
});
hitteri.web_app.map_country.sync_map_country_pick_BANG_ = (function hitteri$web_app$map_country$sync_map_country_pick_BANG_(){
var active_QMARK_ = (function (){var and__5023__auto__ = new cljs.core.Keyword(null,"map-country-pick?","map-country-pick?",-197660270).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.web_app.state._BANG_state));
if(cljs.core.truth_(and__5023__auto__)){
return hitteri.app_ui.interface$.pages.map_page_QMARK_(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.web_app.state._BANG_state)));
} else {
return and__5023__auto__;
}
})();
return hitteri.map_ui.interface$.sync_country_pick_state_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active?","active?",459499776),active_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(active_QMARK_)?hitteri.web_app.map_country.select_country_at_point_BANG_:null)], null));
});
hitteri.web_app.map_country.enable_country_pick_BANG_ = (function hitteri$web_app$map_country$enable_country_pick_BANG_(){
if(hitteri.app_ui.interface$.pages.map_page_QMARK_(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.web_app.state._BANG_state)))){
var temp__5825__auto___50496 = new cljs.core.Keyword(null,"map-restore-view","map-restore-view",1509489165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.web_app.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto___50496)){
var view_50497 = temp__5825__auto___50496;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hitteri.web_app.state._BANG_state,cljs.core.dissoc,new cljs.core.Keyword(null,"map-restore-view","map-restore-view",1509489165));

hitteri.map_ui.interface$.fly_to_view_BANG_(view_50497);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hitteri.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"map-country-pick?","map-country-pick?",-197660270),true);

hitteri.app_ui.interface$.load.ensure_countries_loaded_BANG_();

return hitteri.web_app.effects.render_BANG_();
} else {
return null;
}
});

//# sourceMappingURL=hitteri.web_app.map_country.js.map
