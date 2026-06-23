goog.provide('hitteri.clipboard_ui.handlers.apply');
hitteri.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_ = (function hitteri$clipboard_ui$handlers$apply$apply_hemnet_payload_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49644 = arguments.length;
var i__5750__auto___49645 = (0);
while(true){
if((i__5750__auto___49645 < len__5749__auto___49644)){
args__5755__auto__.push((arguments[i__5750__auto___49645]));

var G__49646 = (i__5750__auto___49645 + (1));
i__5750__auto___49645 = G__49646;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.clipboard_ui.handlers.hemnet.apply_payload_BANG_,args);
}));

(hitteri.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$lang$applyTo = (function (seq49637){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49637));
}));

hitteri.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_ = (function hitteri$clipboard_ui$handlers$apply$apply_google_place_payload_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49647 = arguments.length;
var i__5750__auto___49648 = (0);
while(true){
if((i__5750__auto___49648 < len__5749__auto___49647)){
args__5755__auto__.push((arguments[i__5750__auto___49648]));

var G__49649 = (i__5750__auto___49648 + (1));
i__5750__auto___49648 = G__49649;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.clipboard_ui.handlers.google_maps.apply_payload_BANG_,args);
}));

(hitteri.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$lang$applyTo = (function (seq49638){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49638));
}));

hitteri.clipboard_ui.handlers.apply.plain_pin_QMARK_ = (function hitteri$clipboard_ui$handlers$apply$plain_pin_QMARK_(item){
return ((cljs.core.map_QMARK_(item)) && ((((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item) == null)) && (((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item) === 'number') && (typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item) === 'number'))))));
});
/**
 * Process a hitteri/pin-list payload.
 */
hitteri.clipboard_ui.handlers.apply.apply_pin_list_payload_BANG_ = (function hitteri$clipboard_ui$handlers$apply$apply_pin_list_payload_BANG_(payload){
var all_pins = new cljs.core.Keyword(null,"pins","pins",1725193285).cljs$core$IFn$_invoke$arity$2(payload,cljs.core.PersistentVector.EMPTY);
var groups = new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$2(payload,cljs.core.PersistentVector.EMPTY);
var pins = cljs.core.filterv(hitteri.clipboard_ui.handlers.apply.plain_pin_QMARK_,all_pins);
var bookmarklet_items = cljs.core.filterv((function (p1__49639_SHARP_){
return ((cljs.core.map_QMARK_(p1__49639_SHARP_)) && ((!((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__49639_SHARP_) == null)))));
}),all_pins);
if(((cljs.core.seq(pins)) || (cljs.core.seq(groups)))){
var temp__5825__auto___49650 = hitteri.pin_ui.interface$.handlers.rows.import_pin_items_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pins","pins",1725193285),pins,new cljs.core.Keyword(null,"groups","groups",-136896102),groups], null)], 0));
if(cljs.core.truth_(temp__5825__auto___49650)){
var first_id_49651 = temp__5825__auto___49650;
hitteri.pin_ui.interface$.handlers.editor.load_pin_into_inline_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([first_id_49651], 0));
} else {
}

hitteri.clipboard_ui.pure.browser.clear_clipboard_BANG_();
} else {
}

var seq__49640_49652 = cljs.core.seq(bookmarklet_items);
var chunk__49641_49653 = null;
var count__49642_49654 = (0);
var i__49643_49655 = (0);
while(true){
if((i__49643_49655 < count__49642_49654)){
var pin_49656 = chunk__49641_49653.cljs$core$IIndexed$_nth$arity$2(null,i__49643_49655);
if(cljs.core.truth_(hitteri.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_49656], 0)))){
hitteri.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_49656], 0));
} else {
if(cljs.core.truth_(hitteri.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_49656], 0)))){
hitteri.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_49656], 0));
} else {
}
}


var G__49657 = seq__49640_49652;
var G__49658 = chunk__49641_49653;
var G__49659 = count__49642_49654;
var G__49660 = (i__49643_49655 + (1));
seq__49640_49652 = G__49657;
chunk__49641_49653 = G__49658;
count__49642_49654 = G__49659;
i__49643_49655 = G__49660;
continue;
} else {
var temp__5825__auto___49661 = cljs.core.seq(seq__49640_49652);
if(temp__5825__auto___49661){
var seq__49640_49662__$1 = temp__5825__auto___49661;
if(cljs.core.chunked_seq_QMARK_(seq__49640_49662__$1)){
var c__5548__auto___49663 = cljs.core.chunk_first(seq__49640_49662__$1);
var G__49664 = cljs.core.chunk_rest(seq__49640_49662__$1);
var G__49665 = c__5548__auto___49663;
var G__49666 = cljs.core.count(c__5548__auto___49663);
var G__49667 = (0);
seq__49640_49652 = G__49664;
chunk__49641_49653 = G__49665;
count__49642_49654 = G__49666;
i__49643_49655 = G__49667;
continue;
} else {
var pin_49668 = cljs.core.first(seq__49640_49662__$1);
if(cljs.core.truth_(hitteri.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_49668], 0)))){
hitteri.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_49668], 0));
} else {
if(cljs.core.truth_(hitteri.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_49668], 0)))){
hitteri.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_49668], 0));
} else {
}
}


var G__49669 = cljs.core.next(seq__49640_49662__$1);
var G__49670 = null;
var G__49671 = (0);
var G__49672 = (0);
seq__49640_49652 = G__49669;
chunk__49641_49653 = G__49670;
count__49642_49654 = G__49671;
i__49643_49655 = G__49672;
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
hitteri.clipboard_ui.handlers.apply.apply_place_payload_BANG_ = (function hitteri$clipboard_ui$handlers$apply$apply_place_payload_BANG_(payload){
if(hitteri.clipboard_ui.pure.payload.pin_list_payload_QMARK_(payload)){
return hitteri.clipboard_ui.handlers.apply.apply_pin_list_payload_BANG_(payload);
} else {
if(cljs.core.truth_(hitteri.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0)))){
return hitteri.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
} else {
if(cljs.core.truth_(hitteri.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0)))){
return hitteri.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
} else {
return false;

}
}
}
});

//# sourceMappingURL=hitteri.clipboard_ui.handlers.apply.js.map
