goog.provide('placesurfer.map_panel_ui.layout');
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.map_panel_ui !== 'undefined') && (typeof placesurfer.map_panel_ui.layout !== 'undefined') && (typeof placesurfer.map_panel_ui.layout._BANG_nav_observer !== 'undefined')){
} else {
placesurfer.map_panel_ui.layout._BANG_nav_observer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
placesurfer.map_panel_ui.layout.sync_layout_BANG_ = (function placesurfer$map_panel_ui$layout$sync_layout_BANG_(){
var temp__5825__auto__ = document.querySelector(".nav-tabs");
if(cljs.core.truth_(temp__5825__auto__)){
var nav = temp__5825__auto__;
var root_style = document.documentElement.style;
var app = document.querySelector(".app");
var nav_bottom = nav.getBoundingClientRect().bottom;
var nav_style = getComputedStyle(nav);
var nav_margin_bottom = parseFloat(nav_style.marginBottom);
var app_style = (cljs.core.truth_(app)?getComputedStyle(app):null);
var pad_bottom = (cljs.core.truth_(app_style)?parseFloat(app_style.paddingBottom):(12));
var pad_side = (cljs.core.truth_(app_style)?parseFloat(app_style.paddingLeft):(12));
root_style.setProperty("--map-nav-bottom",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((nav_bottom + nav_margin_bottom)),"px"].join(''));

root_style.setProperty("--map-bottom",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad_bottom),"px"].join(''));

return root_style.setProperty("--map-side",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad_side),"px"].join(''));
} else {
return null;
}
});
/**
 * Watch the nav element for size changes (e.g. when Shoelace upgrades custom
 *   elements after first paint) and re-run sync-layout! + the provided callback.
 */
placesurfer.map_panel_ui.layout.observe_nav_BANG_ = (function placesurfer$map_panel_ui$layout$observe_nav_BANG_(on_resize_BANG_){
var temp__5825__auto__ = document.querySelector(".nav-tabs");
if(cljs.core.truth_(temp__5825__auto__)){
var nav = temp__5825__auto__;
var temp__5825__auto___37048__$1 = cljs.core.deref(placesurfer.map_panel_ui.layout._BANG_nav_observer);
if(cljs.core.truth_(temp__5825__auto___37048__$1)){
var old_37049 = temp__5825__auto___37048__$1;
old_37049.disconnect();
} else {
}

var observer = (new ResizeObserver((function (_){
placesurfer.map_panel_ui.layout.sync_layout_BANG_();

return (on_resize_BANG_.cljs$core$IFn$_invoke$arity$0 ? on_resize_BANG_.cljs$core$IFn$_invoke$arity$0() : on_resize_BANG_.call(null));
})));
observer.observe(nav);

return cljs.core.reset_BANG_(placesurfer.map_panel_ui.layout._BANG_nav_observer,observer);
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.map_panel_ui.layout.js.map
