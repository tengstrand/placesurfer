goog.provide('placesurfer.clipboard_ui.handlers.apply');
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_hemnet_payload_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40171 = arguments.length;
var i__5750__auto___40172 = (0);
while(true){
if((i__5750__auto___40172 < len__5749__auto___40171)){
args__5755__auto__.push((arguments[i__5750__auto___40172]));

var G__40173 = (i__5750__auto___40172 + (1));
i__5750__auto___40172 = G__40173;
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
(placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$lang$applyTo = (function (seq40072){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40072));
}));

placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_ = (function placesurfer$clipboard_ui$handlers$apply$apply_google_place_payload_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40174 = arguments.length;
var i__5750__auto___40175 = (0);
while(true){
if((i__5750__auto___40175 < len__5749__auto___40174)){
args__5755__auto__.push((arguments[i__5750__auto___40175]));

var G__40176 = (i__5750__auto___40175 + (1));
i__5750__auto___40175 = G__40176;
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
(placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$lang$applyTo = (function (seq40093){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40093));
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
var bookmarklet_items = cljs.core.filterv((function (p1__40118_SHARP_){
return ((cljs.core.map_QMARK_(p1__40118_SHARP_)) && ((!((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__40118_SHARP_) == null)))));
}),all_pins);
if(((cljs.core.seq(pins)) || (cljs.core.seq(groups)))){
var temp__5825__auto___40177 = placesurfer.pin_ui.interface$.handlers.rows.import_pin_items_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pins","pins",1725193285),pins,new cljs.core.Keyword(null,"groups","groups",-136896102),groups], null)], 0));
if(cljs.core.truth_(temp__5825__auto___40177)){
var first_id_40180 = temp__5825__auto___40177;
placesurfer.pin_ui.interface$.handlers.editor.load_pin_into_inline_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([first_id_40180], 0));
} else {
}

placesurfer.clipboard_ui.pure.browser.clear_clipboard_BANG_();
} else {
}

var seq__40141_40181 = cljs.core.seq(bookmarklet_items);
var chunk__40142_40182 = null;
var count__40143_40183 = (0);
var i__40144_40184 = (0);
while(true){
if((i__40144_40184 < count__40143_40183)){
var pin_40185 = chunk__40142_40182.cljs$core$IIndexed$_nth$arity$2(null,i__40144_40184);
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40185], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40185], 0));
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40185], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40185], 0));
} else {
}
}


var G__40187 = seq__40141_40181;
var G__40188 = chunk__40142_40182;
var G__40189 = count__40143_40183;
var G__40190 = (i__40144_40184 + (1));
seq__40141_40181 = G__40187;
chunk__40142_40182 = G__40188;
count__40143_40183 = G__40189;
i__40144_40184 = G__40190;
continue;
} else {
var temp__5825__auto___40191 = cljs.core.seq(seq__40141_40181);
if(temp__5825__auto___40191){
var seq__40141_40192__$1 = temp__5825__auto___40191;
if(cljs.core.chunked_seq_QMARK_(seq__40141_40192__$1)){
var c__5548__auto___40193 = cljs.core.chunk_first(seq__40141_40192__$1);
var G__40194 = cljs.core.chunk_rest(seq__40141_40192__$1);
var G__40195 = c__5548__auto___40193;
var G__40196 = cljs.core.count(c__5548__auto___40193);
var G__40197 = (0);
seq__40141_40181 = G__40194;
chunk__40142_40182 = G__40195;
count__40143_40183 = G__40196;
i__40144_40184 = G__40197;
continue;
} else {
var pin_40198 = cljs.core.first(seq__40141_40192__$1);
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40198], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_hemnet_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40198], 0));
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40198], 0)))){
placesurfer.clipboard_ui.handlers.apply.apply_google_place_payload_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pin_40198], 0));
} else {
}
}


var G__40199 = cljs.core.next(seq__40141_40192__$1);
var G__40200 = null;
var G__40201 = (0);
var G__40202 = (0);
seq__40141_40181 = G__40199;
chunk__40142_40182 = G__40200;
count__40143_40183 = G__40201;
i__40144_40184 = G__40202;
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
