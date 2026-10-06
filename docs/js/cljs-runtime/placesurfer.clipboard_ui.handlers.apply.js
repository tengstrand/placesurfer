goog.provide('placesurfer.clipboard_ui.handlers.apply');
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_hemnet_payload_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___26157 = arguments.length;
var i__5750__auto___26158 = (0);
while(true){
if((i__5750__auto___26158 < len__5749__auto___26157)){
args__5755__auto__.push((arguments[i__5750__auto___26158]));

var G__26159 = (i__5750__auto___26158 + (1));
i__5750__auto___26158 = G__26159;
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
(placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$lang$applyTo = (function (seq26147){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26147));
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
var map__26148_26161 = placesurfer.pin_ui.interface$.handlers.hemnet_search.upsert_results_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0));
var map__26148_26162__$1 = cljs.core.__destructure_map(map__26148_26161);
var total_26163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26148_26162__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var visible_26164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26148_26162__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
placesurfer.clipboard_ui.pure.browser.clear_clipboard_BANG_();

placesurfer.nav_ui.interface$.toast.show_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((visible_26164 < total_26163))?placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locale,new cljs.core.Keyword("pin","search-results-imported-partial","pin/search-results-imported-partial",84713127),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),visible_26164,new cljs.core.Keyword(null,"total","total",1916810418),total_26163], null)], 0)):placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locale,new cljs.core.Keyword("pin","search-results-imported-count","pin/search-results-imported-count",2005605850),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),visible_26164], null)], 0))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"success","success",1890645906)], null)], 0));
} else {
}

return cljs.core.boolean$(cljs.core.seq(results));
});
placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_google_place_payload_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___26166 = arguments.length;
var i__5750__auto___26167 = (0);
while(true){
if((i__5750__auto___26167 < len__5749__auto___26166)){
args__5755__auto__.push((arguments[i__5750__auto___26167]));

var G__26168 = (i__5750__auto___26167 + (1));
i__5750__auto___26167 = G__26168;
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
(placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$lang$applyTo = (function (seq26149){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26149));
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
var bookmarklet_items = cljs.core.filterv((function (p1__26150_SHARP_){
return ((cljs.core.map_QMARK_(p1__26150_SHARP_)) && ((!((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__26150_SHARP_) == null)))));
}),all_pins);
if(cljs.core.seq(pins)){
var temp__5823__auto___26176 = placesurfer.pin_ui.interface$.handlers.rows.import_pin_items_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pins","pins",1725193285),pins], null)], 0));
if(cljs.core.truth_(temp__5823__auto___26176)){
var first_id_26177 = temp__5823__auto___26176;
placesurfer.pin_ui.interface$.handlers.editor.load_pin_into_inline_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([first_id_26177], 0));
} else {
}

placesurfer.clipboard_ui.pure.browser.clear_clipboard_BANG_();
} else {
}

var seq__26151_26178 = cljs.core.seq(bookmarklet_items);
var chunk__26152_26179 = null;
var count__26153_26180 = (0);
var i__26154_26181 = (0);
while(true){
if((i__26154_26181 < count__26153_26180)){
var pin_26182 = chunk__26152_26179.cljs$core$IIndexed$_nth$arity$2(null,i__26154_26181);
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_26182], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_26182], 0));
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_26182], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_26182], 0));
} else {
}
}


var G__26183 = seq__26151_26178;
var G__26184 = chunk__26152_26179;
var G__26185 = count__26153_26180;
var G__26186 = (i__26154_26181 + (1));
seq__26151_26178 = G__26183;
chunk__26152_26179 = G__26184;
count__26153_26180 = G__26185;
i__26154_26181 = G__26186;
continue;
} else {
var temp__5823__auto___26187 = cljs.core.seq(seq__26151_26178);
if(temp__5823__auto___26187){
var seq__26151_26188__$1 = temp__5823__auto___26187;
if(cljs.core.chunked_seq_QMARK_(seq__26151_26188__$1)){
var c__5548__auto___26189 = cljs.core.chunk_first(seq__26151_26188__$1);
var G__26190 = cljs.core.chunk_rest(seq__26151_26188__$1);
var G__26191 = c__5548__auto___26189;
var G__26192 = cljs.core.count(c__5548__auto___26189);
var G__26193 = (0);
seq__26151_26178 = G__26190;
chunk__26152_26179 = G__26191;
count__26153_26180 = G__26192;
i__26154_26181 = G__26193;
continue;
} else {
var pin_26195 = cljs.core.first(seq__26151_26188__$1);
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_26195], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_26195], 0));
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_26195], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_26195], 0));
} else {
}
}


var G__26196 = cljs.core.next(seq__26151_26188__$1);
var G__26197 = null;
var G__26198 = (0);
var G__26199 = (0);
seq__26151_26178 = G__26196;
chunk__26152_26179 = G__26197;
count__26153_26180 = G__26198;
i__26154_26181 = G__26199;
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
