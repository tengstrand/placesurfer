goog.provide('placesurfer.nav_ui.sync');
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.nav_ui !== 'undefined') && (typeof placesurfer.nav_ui.sync !== 'undefined') && (typeof placesurfer.nav_ui.sync._BANG_synced_nav_page !== 'undefined')){
} else {
placesurfer.nav_ui.sync._BANG_synced_nav_page = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.nav_ui !== 'undefined') && (typeof placesurfer.nav_ui.sync !== 'undefined') && (typeof placesurfer.nav_ui.sync._BANG_suppress_tab_show_navigation_QMARK_ !== 'undefined')){
} else {
placesurfer.nav_ui.sync._BANG_suppress_tab_show_navigation_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
placesurfer.nav_ui.sync.show_tab_panel_BANG_ = (function placesurfer$nav_ui$sync$show_tab_panel_BANG_(group,name){
cljs.core.reset_BANG_(placesurfer.nav_ui.sync._BANG_suppress_tab_show_navigation_QMARK_,true);

try{group.show(name);
}catch (e41022){var __41023 = e41022;
}
return setTimeout((function (){
return cljs.core.reset_BANG_(placesurfer.nav_ui.sync._BANG_suppress_tab_show_navigation_QMARK_,false);
}),(0));
});
placesurfer.nav_ui.sync.sync_tab_group_on_page_BANG_ = (function placesurfer$nav_ui$sync$sync_tab_group_on_page_BANG_(group,page){
if(cljs.core.truth_((function (){var and__5023__auto__ = group;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.deref(placesurfer.nav_ui.sync._BANG_synced_nav_page));
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
placesurfer.nav_ui.sync.show_tab_panel_BANG_(group,name);
} else {
}

return cljs.core.reset_BANG_(placesurfer.nav_ui.sync._BANG_synced_nav_page,page);
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
placesurfer.nav_ui.sync.reset_synced_page_BANG_ = (function placesurfer$nav_ui$sync$reset_synced_page_BANG_(page){
return cljs.core.reset_BANG_(placesurfer.nav_ui.sync._BANG_synced_nav_page,page);
});

//# sourceMappingURL=placesurfer.nav_ui.sync.js.map
