goog.provide('placesurfer.pin_ui.handlers.state');
placesurfer.pin_ui.handlers.state.render_BANG_ = (function placesurfer$pin_ui$handlers$state$render_BANG_(){
return placesurfer.app_ui.interface$.effects.render_BANG_();
});
placesurfer.pin_ui.handlers.state.swap_state_BANG_ = (function placesurfer$pin_ui$handlers$state$swap_state_BANG_(f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,f);
});
placesurfer.pin_ui.handlers.state.swap_render_BANG_ = (function placesurfer$pin_ui$handlers$state$swap_render_BANG_(f){
placesurfer.pin_ui.handlers.state.swap_state_BANG_(f);

return placesurfer.pin_ui.handlers.state.render_BANG_();
});
placesurfer.pin_ui.handlers.state.update_form_field_BANG_ = (function placesurfer$pin_ui$handlers$state$update_form_field_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53768 = arguments.length;
var i__5750__auto___53769 = (0);
while(true){
if((i__5750__auto___53769 < len__5749__auto___53768)){
args__5755__auto__.push((arguments[i__5750__auto___53769]));

var G__53770 = (i__5750__auto___53769 + (1));
i__5750__auto___53769 = G__53770;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return placesurfer.pin_ui.handlers.state.update_form_field_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(placesurfer.pin_ui.handlers.state.update_form_field_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,v,p__53760){
var map__53761 = p__53760;
var map__53761__$1 = cljs.core.__destructure_map(map__53761);
var recenter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53761__$1,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false);
placesurfer.pin_ui.handlers.state.swap_state_BANG_((function (p1__53750_SHARP_){
return cljs.core.assoc_in(p1__53750_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),k], null),v);
}));

placesurfer.pin_ui.handlers.state.render_BANG_();

if(cljs.core.truth_(recenter_QMARK_)){
return placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true], null)], 0));
} else {
return null;
}
}));

(placesurfer.pin_ui.handlers.state.update_form_field_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(placesurfer.pin_ui.handlers.state.update_form_field_BANG_.cljs$lang$applyTo = (function (seq53751){
var G__53752 = cljs.core.first(seq53751);
var seq53751__$1 = cljs.core.next(seq53751);
var G__53753 = cljs.core.first(seq53751__$1);
var seq53751__$2 = cljs.core.next(seq53751__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53752,G__53753,seq53751__$2);
}));

/**
 * Return state with search field and dropdown cleared.
 */
placesurfer.pin_ui.handlers.state.clear_search_ui = (function placesurfer$pin_ui$handlers$state$clear_search_ui(s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446),null,new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504),false], 0));
});

//# sourceMappingURL=placesurfer.pin_ui.handlers.state.js.map
