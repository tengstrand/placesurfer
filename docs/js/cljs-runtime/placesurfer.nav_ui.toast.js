goog.provide('placesurfer.nav_ui.toast');
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.nav_ui !== 'undefined') && (typeof placesurfer.nav_ui.toast !== 'undefined') && (typeof placesurfer.nav_ui.toast._BANG_toast_el !== 'undefined')){
} else {
placesurfer.nav_ui.toast._BANG_toast_el = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.nav_ui !== 'undefined') && (typeof placesurfer.nav_ui.toast !== 'undefined') && (typeof placesurfer.nav_ui.toast._BANG_hide_timer !== 'undefined')){
} else {
placesurfer.nav_ui.toast._BANG_hide_timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
placesurfer.nav_ui.toast.toast_element_BANG_ = (function placesurfer$nav_ui$toast$toast_element_BANG_(){
var or__5025__auto__ = cljs.core.deref(placesurfer.nav_ui.toast._BANG_toast_el);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var el = document.createElement("div");
el.setAttribute("class","nav-toast");

el.setAttribute("role","status");

el.setAttribute("aria-live","polite");

(el.style.display = "none");

document.body.appendChild(el);

cljs.core.reset_BANG_(placesurfer.nav_ui.toast._BANG_toast_el,el);

return el;
}
});
placesurfer.nav_ui.toast.edit_tab_anchor = (function placesurfer$nav_ui$toast$edit_tab_anchor(){
var or__5025__auto__ = document.querySelector("sl-tab.nav-update-tab");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = document.querySelector(".nav-update-icon");
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return document.querySelector(".nav-update-tab");
}
}
});
placesurfer.nav_ui.toast.position_under_edit_tab_BANG_ = (function placesurfer$nav_ui$toast$position_under_edit_tab_BANG_(toast_node){
if(cljs.core.truth_(toast_node)){
var temp__5823__auto__ = placesurfer.nav_ui.toast.edit_tab_anchor();
if(cljs.core.truth_(temp__5823__auto__)){
var anchor = temp__5823__auto__;
var rect = anchor.getBoundingClientRect();
var style = toast_node.style;
(style.position = "fixed");

(style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((rect.bottom + (4))),"px"].join(''));

(style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((rect.left + (rect.width / (2)))),"px"].join(''));

(style.transform = "translateX(-50%)");

return (style.display = "block");
} else {
return (toast_node.style.display = "none");
}
} else {
return null;
}
});
placesurfer.nav_ui.toast.show_BANG_ = (function placesurfer$nav_ui$toast$show_BANG_(var_args){
var G__40362 = arguments.length;
switch (G__40362) {
case 1:
return placesurfer.nav_ui.toast.show_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.nav_ui.toast.show_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.nav_ui.toast.show_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (message){
return placesurfer.nav_ui.toast.show_BANG_.cljs$core$IFn$_invoke$arity$2(message,cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.nav_ui.toast.show_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (message,p__40364){
var map__40365 = p__40364;
var map__40365__$1 = cljs.core.__destructure_map(map__40365);
var duration_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40365__$1,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055),(3200));
var el = placesurfer.nav_ui.toast.toast_element_BANG_();
(el.textContent = cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));

var temp__5825__auto___40370 = cljs.core.deref(placesurfer.nav_ui.toast._BANG_hide_timer);
if(cljs.core.truth_(temp__5825__auto___40370)){
var timer_40371 = temp__5825__auto___40370;
clearTimeout(timer_40371);
} else {
}

placesurfer.nav_ui.toast.position_under_edit_tab_BANG_(el);

requestAnimationFrame((function (){
return placesurfer.nav_ui.toast.position_under_edit_tab_BANG_(el);
}));

return cljs.core.reset_BANG_(placesurfer.nav_ui.toast._BANG_hide_timer,setTimeout((function (){
return (el.style.display = "none");
}),duration_ms));
}));

(placesurfer.nav_ui.toast.show_BANG_.cljs$lang$maxFixedArity = 2);

placesurfer.nav_ui.toast.hide_BANG_ = (function placesurfer$nav_ui$toast$hide_BANG_(){
var temp__5825__auto__ = cljs.core.deref(placesurfer.nav_ui.toast._BANG_toast_el);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
var temp__5825__auto___40372__$1 = cljs.core.deref(placesurfer.nav_ui.toast._BANG_hide_timer);
if(cljs.core.truth_(temp__5825__auto___40372__$1)){
var timer_40373 = temp__5825__auto___40372__$1;
clearTimeout(timer_40373);
} else {
}

return (el.style.display = "none");
} else {
return null;
}
});
placesurfer.nav_ui.toast.toast = (function placesurfer$nav_ui$toast$toast(message){
var temp__5825__auto__ = (function (){var G__40367 = message;
var G__40367__$1 = (((G__40367 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40367));
if((G__40367__$1 == null)){
return null;
} else {
return cljs.core.not_empty(G__40367__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var text = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-toast","div.nav-toast",248479023),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"status",new cljs.core.Keyword(null,"aria-live","aria-live",-467182502),"polite"], null),text], null);
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.nav_ui.toast.js.map
