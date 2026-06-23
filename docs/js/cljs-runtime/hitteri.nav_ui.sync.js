goog.provide('hitteri.nav_ui.sync');
if((typeof hitteri !== 'undefined') && (typeof hitteri.nav_ui !== 'undefined') && (typeof hitteri.nav_ui.sync !== 'undefined') && (typeof hitteri.nav_ui.sync._BANG_synced_nav_page !== 'undefined')){
} else {
hitteri.nav_ui.sync._BANG_synced_nav_page = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof hitteri !== 'undefined') && (typeof hitteri.nav_ui !== 'undefined') && (typeof hitteri.nav_ui.sync !== 'undefined') && (typeof hitteri.nav_ui.sync._BANG_suppress_tab_show_navigation_QMARK_ !== 'undefined')){
} else {
hitteri.nav_ui.sync._BANG_suppress_tab_show_navigation_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
hitteri.nav_ui.sync.show_tab_panel_BANG_ = (function hitteri$nav_ui$sync$show_tab_panel_BANG_(group,name){
cljs.core.reset_BANG_(hitteri.nav_ui.sync._BANG_suppress_tab_show_navigation_QMARK_,true);

try{group.show(name);
}catch (e40970){var __40973 = e40970;
}
return setTimeout((function (){
return cljs.core.reset_BANG_(hitteri.nav_ui.sync._BANG_suppress_tab_show_navigation_QMARK_,false);
}),(0));
});
hitteri.nav_ui.sync.sync_tab_group_on_page_BANG_ = (function hitteri$nav_ui$sync$sync_tab_group_on_page_BANG_(group,page){
if(cljs.core.truth_((function (){var and__5023__auto__ = group;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.deref(hitteri.nav_ui.sync._BANG_synced_nav_page));
} else {
return and__5023__auto__;
}
})())){
var name = cljs.core.name(page);
var run = (function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = group;
if(cljs.core.truth_(and__5023__auto__)){
return group.show;
} else {
return and__5023__auto__;
}
})())){
var active_tab = group.activeTab;
var active_panel = (cljs.core.truth_(active_tab)?active_tab.panel:null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(active_panel,name)){
hitteri.nav_ui.sync.show_tab_panel_BANG_(group,name);
} else {
}

return cljs.core.reset_BANG_(hitteri.nav_ui.sync._BANG_synced_nav_page,page);
} else {
return null;
}
});
if(cljs.core.truth_(group.show)){
return run();
} else {
return setTimeout(run,(0));
}
} else {
return null;
}
});
hitteri.nav_ui.sync.reset_synced_page_BANG_ = (function hitteri$nav_ui$sync$reset_synced_page_BANG_(page){
return cljs.core.reset_BANG_(hitteri.nav_ui.sync._BANG_synced_nav_page,page);
});

//# sourceMappingURL=hitteri.nav_ui.sync.js.map
