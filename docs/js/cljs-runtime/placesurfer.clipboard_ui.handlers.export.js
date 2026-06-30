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
var groups = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78728_SHARP_){
return cljs.core.select_keys(p1__78728_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78729_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__78729_SHARP_));
}),items));
var pins = cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__78733,item){
var vec__78734 = p__78733;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78734,(0),null);
var current_label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78734,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(item))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(function (){var G__78737 = clojure.set.rename_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"location","location",1815599388)], null));
if(cljs.core.truth_(current_label)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78737,new cljs.core.Keyword(null,"group","group",582596132),current_label);
} else {
return G__78737;
}
})()),current_label], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null], null),items));
var payload = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),(1),new cljs.core.Keyword(null,"type","type",1174270348),"placesurfer/pin-list",new cljs.core.Keyword(null,"pins","pins",1725193285),pins,new cljs.core.Keyword(null,"groups","groups",-136896102),groups], null);
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
