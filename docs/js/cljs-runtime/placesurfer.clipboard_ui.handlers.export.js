goog.provide('placesurfer.clipboard_ui.handlers.export$');
placesurfer.clipboard_ui.handlers.export$.export_pins_to_clipboard_BANG_ = (function placesurfer$clipboard_ui$handlers$export$export_pins_to_clipboard_BANG_(){
if(placesurfer.clipboard_ui.pure.browser.clipboard_write_available_QMARK_()){
var items = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var pins = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21741_SHARP_){
return clojure.set.rename_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21741_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"location","location",1815599388)], null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21740_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__21740_SHARP_));
}),items));
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),(1),new cljs.core.Keyword(null,"type","type",1174270348),"placesurfer/pin-list",new cljs.core.Keyword(null,"pins","pins",1725193285),pins], null);
var json = JSON.stringify(cljs.core.clj__GT_js(payload));
return navigator.clipboard.writeText(json).then((function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"pin-export-copied?","pin-export-copied?",515928541),true);

placesurfer.app_ui.interface$.effects.render_BANG_();

return setTimeout((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.dissoc,new cljs.core.Keyword(null,"pin-export-copied?","pin-export-copied?",515928541));

return placesurfer.app_ui.interface$.effects.render_BANG_();
}),(1000));
})).catch((function (_){
return null;
}));
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.clipboard_ui.handlers.export.js.map
