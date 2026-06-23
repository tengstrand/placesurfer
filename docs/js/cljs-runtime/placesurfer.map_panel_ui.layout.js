goog.provide('placesurfer.map_panel_ui.layout');
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

//# sourceMappingURL=placesurfer.map_panel_ui.layout.js.map
