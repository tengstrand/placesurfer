goog.provide('placesurfer.clipboard_ui.handlers.apply');
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_hemnet_payload_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21904 = arguments.length;
var i__5750__auto___21905 = (0);
while(true){
if((i__5750__auto___21905 < len__5749__auto___21904)){
args__5755__auto__.push((arguments[i__5750__auto___21905]));

var G__21906 = (i__5750__auto___21905 + (1));
i__5750__auto___21905 = G__21906;
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
(placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$lang$applyTo = (function (seq21892){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21892));
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
var map__21893_21909 = placesurfer.pin_ui.interface$.handlers.hemnet_search.upsert_results_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0));
var map__21893_21910__$1 = cljs.core.__destructure_map(map__21893_21909);
var total_21911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21893_21910__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var visible_21912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21893_21910__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
placesurfer.clipboard_ui.pure.browser.clear_clipboard_BANG_();

placesurfer.nav_ui.interface$.toast.show_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((visible_21912 < total_21911))?placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locale,new cljs.core.Keyword("pin","search-results-imported-partial","pin/search-results-imported-partial",84713127),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),visible_21912,new cljs.core.Keyword(null,"total","total",1916810418),total_21911], null)], 0)):placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locale,new cljs.core.Keyword("pin","search-results-imported-count","pin/search-results-imported-count",2005605850),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),visible_21912], null)], 0))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"success","success",1890645906)], null)], 0));
} else {
}

return cljs.core.boolean$(cljs.core.seq(results));
});
placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_google_place_payload_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21913 = arguments.length;
var i__5750__auto___21914 = (0);
while(true){
if((i__5750__auto___21914 < len__5749__auto___21913)){
args__5755__auto__.push((arguments[i__5750__auto___21914]));

var G__21915 = (i__5750__auto___21914 + (1));
i__5750__auto___21914 = G__21915;
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
(placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$lang$applyTo = (function (seq21894){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21894));
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
var bookmarklet_items = cljs.core.filterv((function (p1__21895_SHARP_){
return ((cljs.core.map_QMARK_(p1__21895_SHARP_)) && ((!((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__21895_SHARP_) == null)))));
}),all_pins);
if(cljs.core.seq(pins)){
var temp__5823__auto___21917 = placesurfer.pin_ui.interface$.handlers.rows.import_pin_items_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pins","pins",1725193285),pins], null)], 0));
if(cljs.core.truth_(temp__5823__auto___21917)){
var first_id_21918 = temp__5823__auto___21917;
placesurfer.pin_ui.interface$.handlers.editor.load_pin_into_inline_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([first_id_21918], 0));
} else {
}

placesurfer.clipboard_ui.pure.browser.clear_clipboard_BANG_();
} else {
}

var seq__21898_21919 = cljs.core.seq(bookmarklet_items);
var chunk__21899_21920 = null;
var count__21900_21921 = (0);
var i__21901_21922 = (0);
while(true){
if((i__21901_21922 < count__21900_21921)){
var pin_21923 = chunk__21899_21920.cljs$core$IIndexed$_nth$arity$2(null,i__21901_21922);
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_21923], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_21923], 0));
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_21923], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_21923], 0));
} else {
}
}


var G__21924 = seq__21898_21919;
var G__21925 = chunk__21899_21920;
var G__21926 = count__21900_21921;
var G__21927 = (i__21901_21922 + (1));
seq__21898_21919 = G__21924;
chunk__21899_21920 = G__21925;
count__21900_21921 = G__21926;
i__21901_21922 = G__21927;
continue;
} else {
var temp__5823__auto___21928 = cljs.core.seq(seq__21898_21919);
if(temp__5823__auto___21928){
var seq__21898_21930__$1 = temp__5823__auto___21928;
if(cljs.core.chunked_seq_QMARK_(seq__21898_21930__$1)){
var c__5548__auto___21931 = cljs.core.chunk_first(seq__21898_21930__$1);
var G__21932 = cljs.core.chunk_rest(seq__21898_21930__$1);
var G__21933 = c__5548__auto___21931;
var G__21934 = cljs.core.count(c__5548__auto___21931);
var G__21935 = (0);
seq__21898_21919 = G__21932;
chunk__21899_21920 = G__21933;
count__21900_21921 = G__21934;
i__21901_21922 = G__21935;
continue;
} else {
var pin_21937 = cljs.core.first(seq__21898_21930__$1);
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_21937], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_21937], 0));
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_21937], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_21937], 0));
} else {
}
}


var G__21938 = cljs.core.next(seq__21898_21930__$1);
var G__21939 = null;
var G__21940 = (0);
var G__21941 = (0);
seq__21898_21919 = G__21938;
chunk__21899_21920 = G__21939;
count__21900_21921 = G__21940;
i__21901_21922 = G__21941;
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
