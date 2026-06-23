goog.provide('placesurfer.clipboard_ui.handlers.apply');
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_hemnet_payload_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40491 = arguments.length;
var i__5750__auto___40492 = (0);
while(true){
if((i__5750__auto___40492 < len__5749__auto___40491)){
args__5755__auto__.push((arguments[i__5750__auto___40492]));

var G__40493 = (i__5750__auto___40492 + (1));
i__5750__auto___40492 = G__40493;
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
(placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$lang$applyTo = (function (seq40479){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40479));
}));

placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_google_place_payload_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40494 = arguments.length;
var i__5750__auto___40495 = (0);
while(true){
if((i__5750__auto___40495 < len__5749__auto___40494)){
args__5755__auto__.push((arguments[i__5750__auto___40495]));

var G__40496 = (i__5750__auto___40495 + (1));
i__5750__auto___40495 = G__40496;
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
(placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$lang$applyTo = (function (seq40485){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40485));
}));

placesurfer.clipboard_ui.handlers.apply.plain_pin_QMARK_ = (function placesurfer$clipboard_ui$handlers$apply$plain_pin_QMARK_(item){
return ((cljs.core.map_QMARK_(item)) && ((((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item) == null)) && (((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item) === 'number') && (typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item) === 'number'))))));
});
/**
 * Process a placesurfer/pin-list payload.
 */
placesurfer.clipboard_ui.handlers.apply.apply_pin_list_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_pin_list_payload_BANG_(payload){
var all_pins = new cljs.core.Keyword(null,"pins","pins",1725193285).cljs$core$IFn$_invoke$arity$2(payload,cljs.core.PersistentVector.EMPTY);
var groups = new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$2(payload,cljs.core.PersistentVector.EMPTY);
var pins = cljs.core.filterv(placesurfer.clipboard_ui.handlers.apply.plain_pin_QMARK_,all_pins);
var bookmarklet_items = cljs.core.filterv((function (p1__40486_SHARP_){
return ((cljs.core.map_QMARK_(p1__40486_SHARP_)) && ((!((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__40486_SHARP_) == null)))));
}),all_pins);
if(((cljs.core.seq(pins)) || (cljs.core.seq(groups)))){
var temp__5825__auto___40497 = placesurfer.pin_ui.interface$.handlers.rows.import_pin_items_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pins","pins",1725193285),pins,new cljs.core.Keyword(null,"groups","groups",-136896102),groups], null)], 0));
if(cljs.core.truth_(temp__5825__auto___40497)){
var first_id_40498 = temp__5825__auto___40497;
placesurfer.pin_ui.interface$.handlers.editor.load_pin_into_inline_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([first_id_40498], 0));
} else {
}

placesurfer.clipboard_ui.pure.browser.clear_clipboard_BANG_();
} else {
}

var seq__40487_40499 = cljs.core.seq(bookmarklet_items);
var chunk__40488_40500 = null;
var count__40489_40501 = (0);
var i__40490_40502 = (0);
while(true){
if((i__40490_40502 < count__40489_40501)){
var pin_40503 = chunk__40488_40500.cljs$core$IIndexed$_nth$arity$2(null,i__40490_40502);
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40503], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40503], 0));
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40503], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40503], 0));
} else {
}
}


var G__40504 = seq__40487_40499;
var G__40505 = chunk__40488_40500;
var G__40506 = count__40489_40501;
var G__40507 = (i__40490_40502 + (1));
seq__40487_40499 = G__40504;
chunk__40488_40500 = G__40505;
count__40489_40501 = G__40506;
i__40490_40502 = G__40507;
continue;
} else {
var temp__5825__auto___40508 = cljs.core.seq(seq__40487_40499);
if(temp__5825__auto___40508){
var seq__40487_40509__$1 = temp__5825__auto___40508;
if(cljs.core.chunked_seq_QMARK_(seq__40487_40509__$1)){
var c__5548__auto___40510 = cljs.core.chunk_first(seq__40487_40509__$1);
var G__40511 = cljs.core.chunk_rest(seq__40487_40509__$1);
var G__40512 = c__5548__auto___40510;
var G__40513 = cljs.core.count(c__5548__auto___40510);
var G__40514 = (0);
seq__40487_40499 = G__40511;
chunk__40488_40500 = G__40512;
count__40489_40501 = G__40513;
i__40490_40502 = G__40514;
continue;
} else {
var pin_40515 = cljs.core.first(seq__40487_40509__$1);
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40515], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40515], 0));
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40515], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40515], 0));
} else {
}
}


var G__40516 = cljs.core.next(seq__40487_40509__$1);
var G__40517 = null;
var G__40518 = (0);
var G__40519 = (0);
seq__40487_40499 = G__40516;
chunk__40488_40500 = G__40517;
count__40489_40501 = G__40518;
i__40490_40502 = G__40519;
continue;
}
} else {
}
}
break;
}

return cljs.core.boolean$(((cljs.core.seq(all_pins)) || (cljs.core.seq(groups))));
});
/**
 * Apply supported bookmarklet payload to the pin editor.
 */
placesurfer.clipboard_ui.handlers.apply.apply_place_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_place_payload_BANG_(payload){
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
});

//# sourceMappingURL=placesurfer.clipboard_ui.handlers.apply.js.map
