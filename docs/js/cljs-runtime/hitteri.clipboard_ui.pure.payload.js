goog.provide('hitteri.clipboard_ui.pure.payload');
hitteri.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_ = (function hitteri$clipboard_ui$pure$payload$hemnet_bookmarklet_payload_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48206 = arguments.length;
var i__5750__auto___48207 = (0);
while(true){
if((i__5750__auto___48207 < len__5749__auto___48206)){
args__5755__auto__.push((arguments[i__5750__auto___48207]));

var G__48209 = (i__5750__auto___48207 + (1));
i__5750__auto___48207 = G__48209;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.clipboard_ui.hemnet.payload.hemnet_bookmarklet_payload_QMARK_,args);
}));

(hitteri.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$lang$applyTo = (function (seq48198){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48198));
}));

hitteri.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_ = (function hitteri$clipboard_ui$pure$payload$place_bookmarklet_payload_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48212 = arguments.length;
var i__5750__auto___48213 = (0);
while(true){
if((i__5750__auto___48213 < len__5749__auto___48212)){
args__5755__auto__.push((arguments[i__5750__auto___48213]));

var G__48214 = (i__5750__auto___48213 + (1));
i__5750__auto___48213 = G__48214;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.clipboard_ui.google_maps.payload.place_bookmarklet_payload_QMARK_,args);
}));

(hitteri.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$lang$applyTo = (function (seq48199){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48199));
}));

hitteri.clipboard_ui.pure.payload.google_maps_bookmarklet_payload_QMARK_ = (function hitteri$clipboard_ui$pure$payload$google_maps_bookmarklet_payload_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48216 = arguments.length;
var i__5750__auto___48217 = (0);
while(true){
if((i__5750__auto___48217 < len__5749__auto___48216)){
args__5755__auto__.push((arguments[i__5750__auto___48217]));

var G__48218 = (i__5750__auto___48217 + (1));
i__5750__auto___48217 = G__48218;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.clipboard_ui.pure.payload.google_maps_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.clipboard_ui.pure.payload.google_maps_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.clipboard_ui.google_maps.payload.google_maps_bookmarklet_payload_QMARK_,args);
}));

(hitteri.clipboard_ui.pure.payload.google_maps_bookmarklet_payload_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.clipboard_ui.pure.payload.google_maps_bookmarklet_payload_QMARK_.cljs$lang$applyTo = (function (seq48200){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48200));
}));

/**
 * True when `data` is a hitteri/pin-list payload.
 */
hitteri.clipboard_ui.pure.payload.pin_list_payload_QMARK_ = (function hitteri$clipboard_ui$pure$payload$pin_list_payload_QMARK_(data){
return ((cljs.core.map_QMARK_(data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hitteri/pin-list",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data))) && (cljs.core.sequential_QMARK_(new cljs.core.Keyword(null,"pins","pins",1725193285).cljs$core$IFn$_invoke$arity$1(data))))));
});
/**
 * True when `data` is a supported bookmarklet clipboard payload map.
 */
hitteri.clipboard_ui.pure.payload.bookmarklet_payload_QMARK_ = (function hitteri$clipboard_ui$pure$payload$bookmarklet_payload_QMARK_(data){
var or__5025__auto__ = hitteri.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = hitteri.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return hitteri.clipboard_ui.pure.payload.pin_list_payload_QMARK_(data);
}
}
});
/**
 * Parse clipboard text into a bookmarklet payload map, or nil.
 */
hitteri.clipboard_ui.pure.payload.parse_bookmarklet_text = (function hitteri$clipboard_ui$pure$payload$parse_bookmarklet_text(text){
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)));
if(cljs.core.truth_(temp__5825__auto__)){
var trimmed = temp__5825__auto__;
try{var raw = JSON.parse(trimmed);
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(raw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(hitteri.clipboard_ui.pure.payload.bookmarklet_payload_QMARK_(data))){
return data;
} else {
return null;
}
}catch (e48201){var _ = e48201;
return null;
}} else {
return null;
}
});
hitteri.clipboard_ui.pure.payload.payload__GT_listing = (function hitteri$clipboard_ui$pure$payload$payload__GT_listing(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48221 = arguments.length;
var i__5750__auto___48222 = (0);
while(true){
if((i__5750__auto___48222 < len__5749__auto___48221)){
args__5755__auto__.push((arguments[i__5750__auto___48222]));

var G__48224 = (i__5750__auto___48222 + (1));
i__5750__auto___48222 = G__48224;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.clipboard_ui.pure.payload.payload__GT_listing.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.clipboard_ui.pure.payload.payload__GT_listing.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.clipboard_ui.hemnet.payload.payload__GT_listing,args);
}));

(hitteri.clipboard_ui.pure.payload.payload__GT_listing.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.clipboard_ui.pure.payload.payload__GT_listing.cljs$lang$applyTo = (function (seq48202){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48202));
}));

hitteri.clipboard_ui.pure.payload.payload__GT_place = (function hitteri$clipboard_ui$pure$payload$payload__GT_place(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48225 = arguments.length;
var i__5750__auto___48226 = (0);
while(true){
if((i__5750__auto___48226 < len__5749__auto___48225)){
args__5755__auto__.push((arguments[i__5750__auto___48226]));

var G__48227 = (i__5750__auto___48226 + (1));
i__5750__auto___48226 = G__48227;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.clipboard_ui.pure.payload.payload__GT_place.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.clipboard_ui.pure.payload.payload__GT_place.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.clipboard_ui.google_maps.payload.payload__GT_place,args);
}));

(hitteri.clipboard_ui.pure.payload.payload__GT_place.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.clipboard_ui.pure.payload.payload__GT_place.cljs$lang$applyTo = (function (seq48203){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48203));
}));

/**
 * Extract decimal coordinates from any supported bookmarklet payload.
 */
hitteri.clipboard_ui.pure.payload.payload__GT_coordinates = (function hitteri$clipboard_ui$pure$payload$payload__GT_coordinates(payload){
if(cljs.core.truth_(hitteri.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0)))){
var temp__5825__auto__ = hitteri.clipboard_ui.pure.payload.payload__GT_listing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var listing = temp__5825__auto__;
if(hitteri.clipboard_ui.hemnet.listing.listing_has_coords_QMARK_(listing)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(listing),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(listing)], null);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hitteri.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0)))){
var temp__5825__auto__ = hitteri.clipboard_ui.pure.payload.payload__GT_place.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var place = temp__5825__auto__;
if(hitteri.clipboard_ui.google_maps.place.place_has_coords_QMARK_(place)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(place),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(place)], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * True when clipboard text is a supported place bookmarklet payload.
 */
hitteri.clipboard_ui.pure.payload.clipboard_hint_valid_QMARK_ = (function hitteri$clipboard_ui$pure$payload$clipboard_hint_valid_QMARK_(text){
return (!((hitteri.clipboard_ui.pure.payload.parse_bookmarklet_text(text) == null)));
});

//# sourceMappingURL=hitteri.clipboard_ui.pure.payload.js.map
