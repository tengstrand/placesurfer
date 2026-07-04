goog.provide('placesurfer.nav_ui.tabs');
placesurfer.nav_ui.tabs.nav_home_tab = (function placesurfer$nav_ui$tabs$nav_home_tab(p__58725){
var map__58726 = p__58725;
var map__58726__$1 = cljs.core.__destructure_map(map__58726);
var active_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword(null,"active-page","active-page",370357330));
var app_version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab.nav-home-tab","sl-tab.nav-home-tab",-1764121453),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slot","slot",240229571),"nav",new cljs.core.Keyword(null,"panel","panel",-558637456),"home",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),active_page)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav-home-icon","img.nav-home-icon",-1832981637),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/logo.webp",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","home","nav/home",-74456664)) : t.call(null,new cljs.core.Keyword("nav","home","nav/home",-74456664))),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(app_version)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","version","nav/version",425368125)) : t.call(null,new cljs.core.Keyword("nav","version","nav/version",425368125))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app_version)].join(''):null)], null)], null)], null);
});
placesurfer.nav_ui.tabs.nav_country_tab = (function placesurfer$nav_ui$tabs$nav_country_tab(country_code,active_page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab.nav-country-tab","sl-tab.nav-country-tab",-564276527),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slot","slot",240229571),"nav",new cljs.core.Keyword(null,"panel","panel",-558637456),"country",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"country","country",312965309),active_page)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nav-country-tab-icon","span.nav-country-tab-icon",-2067141195),placesurfer.nav_ui.flags.iso__GT_flag((function (){var or__5025__auto__ = country_code;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "SE";
}
})())], null)], null);
});
placesurfer.nav_ui.tabs.nav_pin_tab = (function placesurfer$nav_ui$tabs$nav_pin_tab(p__58727){
var map__58728 = p__58727;
var map__58728__$1 = cljs.core.__destructure_map(map__58728);
var active_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58728__$1,new cljs.core.Keyword(null,"active-page","active-page",370357330));
var navigate_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58728__$1,new cljs.core.Keyword(null,"navigate!","navigate!",79998348));
var navigate_to_pin_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58728__$1,new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58728__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab.nav-pin-tab","sl-tab.nav-pin-tab",-1411530415),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"slot","slot",240229571),"nav",new cljs.core.Keyword(null,"panel","panel",-558637456),"pin",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),active_page),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(navigate_to_pin_BANG_)){
return (navigate_to_pin_BANG_.cljs$core$IFn$_invoke$arity$0 ? navigate_to_pin_BANG_.cljs$core$IFn$_invoke$arity$0() : navigate_to_pin_BANG_.call(null));
} else {
if(cljs.core.truth_(navigate_BANG_)){
return (navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pin","pin",-2111774834)) : navigate_BANG_.call(null,new cljs.core.Keyword(null,"pin","pin",-2111774834)));
} else {
return null;
}
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nav-pin-tab-content","span.nav-pin-tab-content",-1407958375),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav-pin-icon","img.nav-pin-icon",-68036173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/pin.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","pins-alt","nav/pins-alt",-355428433)) : t.call(null,new cljs.core.Keyword("nav","pins-alt","nav/pins-alt",-355428433)))], null)], null)], null)], null);
});
placesurfer.nav_ui.tabs.nav_layers_tab = (function placesurfer$nav_ui$tabs$nav_layers_tab(p__58729){
var map__58730 = p__58729;
var map__58730__$1 = cljs.core.__destructure_map(map__58730);
var active_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58730__$1,new cljs.core.Keyword(null,"active-page","active-page",370357330));
var navigate_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58730__$1,new cljs.core.Keyword(null,"navigate!","navigate!",79998348));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58730__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab.nav-layers-tab","sl-tab.nav-layers-tab",1833738504),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"slot","slot",240229571),"nav",new cljs.core.Keyword(null,"panel","panel",-558637456),"layers",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layers","layers",1944875032),active_page),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(navigate_BANG_)){
return (navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layers","layers",1944875032)) : navigate_BANG_.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032)));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav-layers-icon","img.nav-layers-icon",366881438),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/layers.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(cljs.core.truth_(t)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","layers-alt","nav/layers-alt",678588401)) : t.call(null,new cljs.core.Keyword("nav","layers-alt","nav/layers-alt",678588401))):null)], null)], null)], null);
});
placesurfer.nav_ui.tabs.nav_update_tab = (function placesurfer$nav_ui$tabs$nav_update_tab(p__58731){
var map__58732 = p__58731;
var map__58732__$1 = cljs.core.__destructure_map(map__58732);
var active_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword(null,"active-page","active-page",370357330));
var navigate_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword(null,"navigate!","navigate!",79998348));
var navigate_to_update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab.nav-update-tab","sl-tab.nav-update-tab",1487570634),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"slot","slot",240229571),"nav",new cljs.core.Keyword(null,"panel","panel",-558637456),"update",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),active_page),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(navigate_to_update_BANG_)){
return (navigate_to_update_BANG_.cljs$core$IFn$_invoke$arity$0 ? navigate_to_update_BANG_.cljs$core$IFn$_invoke$arity$0() : navigate_to_update_BANG_.call(null));
} else {
if(cljs.core.truth_(navigate_BANG_)){
return (navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"update","update",1045576396)) : navigate_BANG_.call(null,new cljs.core.Keyword(null,"update","update",1045576396)));
} else {
return null;
}
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nav-update-tab-content","span.nav-update-tab-content",1752666858),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav-update-icon","img.nav-update-icon",139664568),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/edit.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","update-alt","nav/update-alt",755641998)) : t.call(null,new cljs.core.Keyword("nav","update-alt","nav/update-alt",755641998)))], null)], null)], null)], null);
});
placesurfer.nav_ui.tabs.nav_about_tab = (function placesurfer$nav_ui$tabs$nav_about_tab(p__58733){
var map__58734 = p__58733;
var map__58734__$1 = cljs.core.__destructure_map(map__58734);
var active_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58734__$1,new cljs.core.Keyword(null,"active-page","active-page",370357330));
var navigate_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58734__$1,new cljs.core.Keyword(null,"navigate!","navigate!",79998348));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58734__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab.nav-about-tab","sl-tab.nav-about-tab",558435029),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"slot","slot",240229571),"nav",new cljs.core.Keyword(null,"panel","panel",-558637456),"about",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"about","about",1423892543),active_page),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(navigate_BANG_)){
return (navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"about","about",1423892543)) : navigate_BANG_.call(null,new cljs.core.Keyword(null,"about","about",1423892543)));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav-about-icon","img.nav-about-icon",-554221042),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/info.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","about-alt","nav/about-alt",1953493354)) : t.call(null,new cljs.core.Keyword("nav","about-alt","nav/about-alt",1953493354)))], null)], null)], null);
});
placesurfer.nav_ui.tabs.nav_settings_tab = (function placesurfer$nav_ui$tabs$nav_settings_tab(p__58735){
var map__58736 = p__58735;
var map__58736__$1 = cljs.core.__destructure_map(map__58736);
var active_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword(null,"active-page","active-page",370357330));
var navigate_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword(null,"navigate!","navigate!",79998348));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab.nav-settings-tab","sl-tab.nav-settings-tab",1496132548),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"slot","slot",240229571),"nav",new cljs.core.Keyword(null,"panel","panel",-558637456),"settings",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"settings","settings",1556144875),active_page),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(navigate_BANG_)){
return (navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings","settings",1556144875)) : navigate_BANG_.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875)));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav-settings-icon","img.nav-settings-icon",1761717034),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/settings.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings","title","settings/title",-630353462)) : t.call(null,new cljs.core.Keyword("settings","title","settings/title",-630353462)))], null)], null)], null);
});
placesurfer.nav_ui.tabs.tabs = (function placesurfer$nav_ui$tabs$tabs(p__58737){
var map__58738 = p__58737;
var map__58738__$1 = cljs.core.__destructure_map(map__58738);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword(null,"page","page",849072397));
var navigate_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword(null,"navigate!","navigate!",79998348));
var navigate_to_pin_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720));
var navigate_to_update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757));
var country_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword(null,"country-code","country-code",-927451124));
var topic_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword(null,"topic-rows","topic-rows",1351926944));
var app_version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58738__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-group.nav-tab-group","sl-tab-group.nav-tab-group",-27913728),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),(function (p__58739){
var map__58740 = p__58739;
var map__58740__$1 = cljs.core.__destructure_map(map__58740);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58740__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return placesurfer.nav_ui.sync.sync_tab_group_on_page_BANG_(node,page);
}),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__58741){
var map__58742 = p__58741;
var map__58742__$1 = cljs.core.__destructure_map(map__58742);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58742__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return placesurfer.nav_ui.sync.sync_tab_group_on_page_BANG_(node,page);
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sl-tab-show","sl-tab-show",1036894026),(function (e){
var name = e.detail.name;
if(cljs.core.seq(name)){
placesurfer.nav_ui.sync.reset_synced_page_BANG_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name));

if(((cljs.core.not(cljs.core.deref(placesurfer.nav_ui.sync._BANG_suppress_tab_show_navigation_QMARK_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name))))){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name),new cljs.core.Keyword(null,"pin","pin",-2111774834));
if(and__5023__auto__){
return navigate_to_pin_BANG_;
} else {
return and__5023__auto__;
}
})())){
return (navigate_to_pin_BANG_.cljs$core$IFn$_invoke$arity$0 ? navigate_to_pin_BANG_.cljs$core$IFn$_invoke$arity$0() : navigate_to_pin_BANG_.call(null));
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name),new cljs.core.Keyword(null,"update","update",1045576396));
if(and__5023__auto__){
return navigate_to_update_BANG_;
} else {
return and__5023__auto__;
}
})())){
return (navigate_to_update_BANG_.cljs$core$IFn$_invoke$arity$0 ? navigate_to_update_BANG_.cljs$core$IFn$_invoke$arity$0() : navigate_to_update_BANG_.call(null));
} else {
var G__58743 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);
return (navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_BANG_.cljs$core$IFn$_invoke$arity$1(G__58743) : navigate_BANG_.call(null,G__58743));

}
}
} else {
return null;
}
} else {
return null;
}
})], null)], null),placesurfer.nav_ui.tabs.nav_home_tab(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-page","active-page",370357330),page,new cljs.core.Keyword(null,"app-version","app-version",361554836),app_version,new cljs.core.Keyword(null,"t","t",-1397832519),t], null)),placesurfer.nav_ui.tabs.nav_pin_tab(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"active-page","active-page",370357330),page,new cljs.core.Keyword(null,"navigate!","navigate!",79998348),navigate_BANG_,new cljs.core.Keyword(null,"navigate-to-pin!","navigate-to-pin!",2100011720),navigate_to_pin_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null)),placesurfer.topic_ui.interface$.nav.nav_tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([topic_rows,page,t], 0)),placesurfer.nav_ui.tabs.nav_update_tab(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"active-page","active-page",370357330),page,new cljs.core.Keyword(null,"navigate!","navigate!",79998348),navigate_BANG_,new cljs.core.Keyword(null,"navigate-to-update!","navigate-to-update!",-1444232757),navigate_to_update_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null)),placesurfer.nav_ui.tabs.nav_country_tab(country_code,page),placesurfer.nav_ui.tabs.nav_about_tab(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-page","active-page",370357330),page,new cljs.core.Keyword(null,"navigate!","navigate!",79998348),navigate_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null)),placesurfer.nav_ui.tabs.nav_settings_tab(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-page","active-page",370357330),page,new cljs.core.Keyword(null,"navigate!","navigate!",79998348),navigate_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-panel","sl-tab-panel",383694507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-panel","sl-tab-panel",383694507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"topic"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-panel","sl-tab-panel",383694507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"country"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-panel","sl-tab-panel",383694507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"pin"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-panel","sl-tab-panel",383694507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"update"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-panel","sl-tab-panel",383694507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"about"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-panel","sl-tab-panel",383694507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"settings"], null)], null)], null);
});

//# sourceMappingURL=placesurfer.nav_ui.tabs.js.map
