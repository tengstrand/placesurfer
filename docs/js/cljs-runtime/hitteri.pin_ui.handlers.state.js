goog.provide('hitteri.pin_ui.handlers.state');
hitteri.pin_ui.handlers.state.render_BANG_ = (function hitteri$pin_ui$handlers$state$render_BANG_(){
return hitteri.app_ui.interface$.effects.render_BANG_();
});
hitteri.pin_ui.handlers.state.swap_state_BANG_ = (function hitteri$pin_ui$handlers$state$swap_state_BANG_(f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.app_ui.interface$.state._BANG_state,f);
});
hitteri.pin_ui.handlers.state.swap_render_BANG_ = (function hitteri$pin_ui$handlers$state$swap_render_BANG_(f){
hitteri.pin_ui.handlers.state.swap_state_BANG_(f);

return hitteri.pin_ui.handlers.state.render_BANG_();
});
hitteri.pin_ui.handlers.state.update_form_field_BANG_ = (function hitteri$pin_ui$handlers$state$update_form_field_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47452 = arguments.length;
var i__5750__auto___47453 = (0);
while(true){
if((i__5750__auto___47453 < len__5749__auto___47452)){
args__5755__auto__.push((arguments[i__5750__auto___47453]));

var G__47455 = (i__5750__auto___47453 + (1));
i__5750__auto___47453 = G__47455;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return hitteri.pin_ui.handlers.state.update_form_field_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(hitteri.pin_ui.handlers.state.update_form_field_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,v,p__47449){
var map__47450 = p__47449;
var map__47450__$1 = cljs.core.__destructure_map(map__47450);
var recenter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47450__$1,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false);
hitteri.pin_ui.handlers.state.swap_state_BANG_((function (p1__47445_SHARP_){
return cljs.core.assoc_in(p1__47445_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),k], null),v);
}));

hitteri.pin_ui.handlers.state.render_BANG_();

if(cljs.core.truth_(recenter_QMARK_)){
return hitteri.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true], null)], 0));
} else {
return null;
}
}));

(hitteri.pin_ui.handlers.state.update_form_field_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(hitteri.pin_ui.handlers.state.update_form_field_BANG_.cljs$lang$applyTo = (function (seq47446){
var G__47447 = cljs.core.first(seq47446);
var seq47446__$1 = cljs.core.next(seq47446);
var G__47448 = cljs.core.first(seq47446__$1);
var seq47446__$2 = cljs.core.next(seq47446__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47447,G__47448,seq47446__$2);
}));

/**
 * Return state with search field and dropdown cleared.
 */
hitteri.pin_ui.handlers.state.clear_search_ui = (function hitteri$pin_ui$handlers$state$clear_search_ui(s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446),null,new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504),false], 0));
});

//# sourceMappingURL=hitteri.pin_ui.handlers.state.js.map
