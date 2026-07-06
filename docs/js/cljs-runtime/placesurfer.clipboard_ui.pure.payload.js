goog.provide('placesurfer.clipboard_ui.pure.payload');
placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_ = (function placesurfer$clipboard_ui$pure$payload$hemnet_bookmarklet_payload_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65440 = arguments.length;
var i__5750__auto___65441 = (0);
while(true){
if((i__5750__auto___65441 < len__5749__auto___65440)){
args__5755__auto__.push((arguments[i__5750__auto___65441]));

var G__65442 = (i__5750__auto___65441 + (1));
i__5750__auto___65441 = G__65442;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.clipboard_ui.hemnet.payload.hemnet_bookmarklet_payload_QMARK_,args);
}));

(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$lang$applyTo = (function (seq65426){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65426));
}));

placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_ = (function placesurfer$clipboard_ui$pure$payload$place_bookmarklet_payload_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65443 = arguments.length;
var i__5750__auto___65444 = (0);
while(true){
if((i__5750__auto___65444 < len__5749__auto___65443)){
args__5755__auto__.push((arguments[i__5750__auto___65444]));

var G__65445 = (i__5750__auto___65444 + (1));
i__5750__auto___65444 = G__65445;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.clipboard_ui.google_maps.payload.place_bookmarklet_payload_QMARK_,args);
}));

(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$lang$applyTo = (function (seq65427){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65427));
}));

placesurfer.clipboard_ui.pure.payload.google_maps_bookmarklet_payload_QMARK_ = (function placesurfer$clipboard_ui$pure$payload$google_maps_bookmarklet_payload_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65446 = arguments.length;
var i__5750__auto___65447 = (0);
while(true){
if((i__5750__auto___65447 < len__5749__auto___65446)){
args__5755__auto__.push((arguments[i__5750__auto___65447]));

var G__65448 = (i__5750__auto___65447 + (1));
i__5750__auto___65447 = G__65448;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.clipboard_ui.pure.payload.google_maps_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.clipboard_ui.pure.payload.google_maps_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.clipboard_ui.google_maps.payload.google_maps_bookmarklet_payload_QMARK_,args);
}));

(placesurfer.clipboard_ui.pure.payload.google_maps_bookmarklet_payload_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.clipboard_ui.pure.payload.google_maps_bookmarklet_payload_QMARK_.cljs$lang$applyTo = (function (seq65429){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65429));
}));

/**
 * True when `data` is a placesurfer/pin-list payload.
 */
placesurfer.clipboard_ui.pure.payload.pin_list_payload_QMARK_ = (function placesurfer$clipboard_ui$pure$payload$pin_list_payload_QMARK_(data){
return ((cljs.core.map_QMARK_(data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("placesurfer/pin-list",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data))) && (cljs.core.sequential_QMARK_(new cljs.core.Keyword(null,"pins","pins",1725193285).cljs$core$IFn$_invoke$arity$1(data))))));
});
/**
 * True when `data` is a supported bookmarklet clipboard payload map.
 */
placesurfer.clipboard_ui.pure.payload.bookmarklet_payload_QMARK_ = (function placesurfer$clipboard_ui$pure$payload$bookmarklet_payload_QMARK_(data){
var or__5025__auto__ = placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return placesurfer.clipboard_ui.pure.payload.pin_list_payload_QMARK_(data);
}
}
});
/**
 * Parse clipboard text into a bookmarklet payload map, or nil.
 */
placesurfer.clipboard_ui.pure.payload.parse_bookmarklet_text = (function placesurfer$clipboard_ui$pure$payload$parse_bookmarklet_text(text){
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)));
if(cljs.core.truth_(temp__5825__auto__)){
var trimmed = temp__5825__auto__;
try{var raw = JSON.parse(trimmed);
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(raw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.bookmarklet_payload_QMARK_(data))){
return data;
} else {
return null;
}
}catch (e65432){var _ = e65432;
return null;
}} else {
return null;
}
});
placesurfer.clipboard_ui.pure.payload.payload__GT_listing = (function placesurfer$clipboard_ui$pure$payload$payload__GT_listing(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65449 = arguments.length;
var i__5750__auto___65450 = (0);
while(true){
if((i__5750__auto___65450 < len__5749__auto___65449)){
args__5755__auto__.push((arguments[i__5750__auto___65450]));

var G__65451 = (i__5750__auto___65450 + (1));
i__5750__auto___65450 = G__65451;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.clipboard_ui.pure.payload.payload__GT_listing.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.clipboard_ui.pure.payload.payload__GT_listing.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.clipboard_ui.hemnet.payload.payload__GT_listing,args);
}));

(placesurfer.clipboard_ui.pure.payload.payload__GT_listing.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.clipboard_ui.pure.payload.payload__GT_listing.cljs$lang$applyTo = (function (seq65435){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65435));
}));

placesurfer.clipboard_ui.pure.payload.payload__GT_place = (function placesurfer$clipboard_ui$pure$payload$payload__GT_place(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65452 = arguments.length;
var i__5750__auto___65453 = (0);
while(true){
if((i__5750__auto___65453 < len__5749__auto___65452)){
args__5755__auto__.push((arguments[i__5750__auto___65453]));

var G__65454 = (i__5750__auto___65453 + (1));
i__5750__auto___65453 = G__65454;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.clipboard_ui.pure.payload.payload__GT_place.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.clipboard_ui.pure.payload.payload__GT_place.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.clipboard_ui.google_maps.payload.payload__GT_place,args);
}));

(placesurfer.clipboard_ui.pure.payload.payload__GT_place.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.clipboard_ui.pure.payload.payload__GT_place.cljs$lang$applyTo = (function (seq65438){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65438));
}));

/**
 * Extract decimal coordinates from any supported bookmarklet payload.
 */
placesurfer.clipboard_ui.pure.payload.payload__GT_coordinates = (function placesurfer$clipboard_ui$pure$payload$payload__GT_coordinates(payload){
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.hemnet_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0)))){
var temp__5825__auto__ = placesurfer.clipboard_ui.pure.payload.payload__GT_listing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var listing = temp__5825__auto__;
if(placesurfer.clipboard_ui.hemnet.listing.listing_has_coords_QMARK_(listing)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(listing),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(listing)], null);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.pure.payload.place_bookmarklet_payload_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0)))){
var temp__5825__auto__ = placesurfer.clipboard_ui.pure.payload.payload__GT_place.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var place = temp__5825__auto__;
if(placesurfer.clipboard_ui.google_maps.place.place_has_coords_QMARK_(place)){
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
placesurfer.clipboard_ui.pure.payload.clipboard_hint_valid_QMARK_ = (function placesurfer$clipboard_ui$pure$payload$clipboard_hint_valid_QMARK_(text){
return (!((placesurfer.clipboard_ui.pure.payload.parse_bookmarklet_text(text) == null)));
});

//# sourceMappingURL=placesurfer.clipboard_ui.pure.payload.js.map
