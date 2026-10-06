goog.provide('placesurfer.clipboard_ui.handlers.apply');
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_hemnet_payload_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___20724 = arguments.length;
var i__5750__auto___20725 = (0);
while(true){
if((i__5750__auto___20725 < len__5749__auto___20724)){
args__5755__auto__.push((arguments[i__5750__auto___20725]));

var G__20726 = (i__5750__auto___20725 + (1));
i__5750__auto___20725 = G__20726;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.clipboard_ui.handlers.hemnet.apply_payload_BANG_,args);
}));

(placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$lang$applyTo = (function (seq20696){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20696));
}));

/**
 * Process a placesurfer/hemnet-search-results payload: normalize each item
 * and merge them into the ephemeral, non-persisted search-results list shown
 * on the pin page - never touches :pin-items.
 */
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_search_results_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_hemnet_search_results_payload_BANG_(payload){
var locale = new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state),new cljs.core.Keyword(null,"en","en",88457073));
var results = placesurfer.clipboard_ui.hemnet.search_results.payload__GT_results(payload,locale);
if(cljs.core.seq(results)){
var map__20698_20727 = placesurfer.pin_ui.interface$.handlers.hemnet_search.upsert_results_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0));
var map__20698_20728__$1 = cljs.core.__destructure_map(map__20698_20727);
var total_20729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20698_20728__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var visible_20730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20698_20728__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
placesurfer.clipboard_ui.pure.browser.clear_clipboard_BANG_();

placesurfer.nav_ui.interface$.toast.show_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((visible_20730 < total_20729))?placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locale,new cljs.core.Keyword("pin","search-results-imported-partial","pin/search-results-imported-partial",84713127),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),visible_20730,new cljs.core.Keyword(null,"total","total",1916810418),total_20729], null)], 0)):placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locale,new cljs.core.Keyword("pin","search-results-imported-count","pin/search-results-imported-count",2005605850),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),visible_20730], null)], 0))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"success","success",1890645906)], null)], 0));
} else {
}

return cljs.core.boolean$(cljs.core.seq(results));
});
placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_google_place_payload_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___20734 = arguments.length;
var i__5750__auto___20735 = (0);
while(true){
if((i__5750__auto___20735 < len__5749__auto___20734)){
args__5755__auto__.push((arguments[i__5750__auto___20735]));

var G__20739 = (i__5750__auto___20735 + (1));
i__5750__auto___20735 = G__20739;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.clipboard_ui.handlers.google_maps.apply_payload_BANG_,args);
}));

(placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$lang$applyTo = (function (seq20704){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20704));
}));

placesurfer.clipboard_ui.handlers.apply.plain_pin_QMARK_ = (function placesurfer$clipboard_ui$handlers$apply$plain_pin_QMARK_(item){
return ((cljs.core.map_QMARK_(item)) && ((((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item) == null)) && (((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item) === 'number') && (typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item) === 'number'))))));
});
/**
 * Process a placesurfer/pin-list payload.
 */
placesurfer.clipboard_ui.handlers.apply.apply_pin_list_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_pin_list_payload_BANG_(payload){
var all_pins = new cljs.core.Keyword(null,"pins","pins",1725193285).cljs$core$IFn$_invoke$arity$2(payload,cljs.core.PersistentVector.EMPTY);
var pins = cljs.core.filterv(placesurfer.clipboard_ui.handlers.apply.plain_pin_QMARK_,all_pins);
var bookmarklet_items = cljs.core.filterv((function (p1__20712_SHARP_){
return ((cljs.core.map_QMARK_(p1__20712_SHARP_)) && ((!((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__20712_SHARP_) == null)))));
}),all_pins);
if(cljs.core.seq(pins)){
var temp__5823__auto___20740 = placesurfer.pin_ui.interface$.handlers.rows.import_pin_items_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pins","pins",1725193285),pins], null)], 0));
if(cljs.core.truth_(temp__5823__auto___20740)){
var first_id_20741 = temp__5823__auto___20740;
placesurfer.pin_ui.interface$.handlers.editor.load_pin_into_inline_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([first_id_20741], 0));
} else {
}

placesurfer.clipboard_ui.pure.browser.clear_clipboard_BANG_();
} else {
}

var seq__20714_20742 = cljs.core.seq(bookmarklet_items);
var chunk__20715_20743 = null;
var count__20716_20744 = (0);
var i__20717_20745 = (0);
while(true){
if((i__20717_20745 < count__20716_20744)){
var pin_20746 = chunk__20715_20743.cljs$core$IIndexed$_nth$arity$2(null,i__20717_20745);
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_20746], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_20746], 0));
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_20746], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_20746], 0));
} else {
}
}


var G__20747 = seq__20714_20742;
var G__20748 = chunk__20715_20743;
var G__20749 = count__20716_20744;
var G__20750 = (i__20717_20745 + (1));
seq__20714_20742 = G__20747;
chunk__20715_20743 = G__20748;
count__20716_20744 = G__20749;
i__20717_20745 = G__20750;
continue;
} else {
var temp__5823__auto___20751 = cljs.core.seq(seq__20714_20742);
if(temp__5823__auto___20751){
var seq__20714_20752__$1 = temp__5823__auto___20751;
if(cljs.core.chunked_seq_QMARK_(seq__20714_20752__$1)){
var c__5548__auto___20753 = cljs.core.chunk_first(seq__20714_20752__$1);
var G__20754 = cljs.core.chunk_rest(seq__20714_20752__$1);
var G__20755 = c__5548__auto___20753;
var G__20756 = cljs.core.count(c__5548__auto___20753);
var G__20757 = (0);
seq__20714_20742 = G__20754;
chunk__20715_20743 = G__20755;
count__20716_20744 = G__20756;
i__20717_20745 = G__20757;
continue;
} else {
var pin_20758 = cljs.core.first(seq__20714_20752__$1);
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_20758], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_20758], 0));
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_20758], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_20758], 0));
} else {
}
}


var G__20759 = cljs.core.next(seq__20714_20752__$1);
var G__20760 = null;
var G__20761 = (0);
var G__20762 = (0);
seq__20714_20742 = G__20759;
chunk__20715_20743 = G__20760;
count__20716_20744 = G__20761;
i__20717_20745 = G__20762;
continue;
}
} else {
}
}
break;
}

return cljs.core.boolean$(cljs.core.seq(all_pins));
});
/**
 * Apply supported bookmarklet payload to the pin editor.
 */
placesurfer.clipboard_ui.handlers.apply.apply_place_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_place_payload_BANG_(payload){
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_search_results_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0)))){
return placesurfer.clipboard_ui.handlers.apply.apply_hemnet_search_results_payload_BANG_(payload);
} else {
if(placesurfer.clipboard_ui.pure.payload.pin_list_payload_QMARK_(payload)){
return placesurfer.clipboard_ui.handlers.apply.apply_pin_list_payload_BANG_(payload);
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0)))){
return placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0)))){
return placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
} else {
return false;

}
}
}
}
});

//# sourceMappingURL=placesurfer.clipboard_ui.handlers.apply.js.map
