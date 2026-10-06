goog.provide('placesurfer.clipboard_ui.hemnet.listing');
placesurfer.clipboard_ui.hemnet.listing.non_blank = (function placesurfer$clipboard_ui$hemnet$listing$non_blank(s){
var temp__5823__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
if(cljs.core.truth_(temp__5823__auto__)){
var t = temp__5823__auto__;
return t;
} else {
return null;
}
});
/**
 * Parse coordinate-like numbers from strings or numbers.
 */
placesurfer.clipboard_ui.hemnet.listing.parse_number = (function placesurfer$clipboard_ui$hemnet$listing$parse_number(v){
return placesurfer.clipboard_ui.pure.numbers.parse_number(v);
});
placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_ = (function placesurfer$clipboard_ui$hemnet$listing$parse_number_STAR_(v){
return placesurfer.clipboard_ui.hemnet.listing.parse_number(v);
});
/**
 * Extract display text from Hemnet formatted objects or scalars.
 */
placesurfer.clipboard_ui.hemnet.listing.formatted_value = (function placesurfer$clipboard_ui$hemnet$listing$formatted_value(v){
if(typeof v === 'string'){
return placesurfer.clipboard_ui.hemnet.listing.non_blank(v);
} else {
if(typeof v === 'number'){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
} else {
if(cljs.core.map_QMARK_(v)){
var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"formatted","formatted",370157929).cljs$core$IFn$_invoke$arity$1(v));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5823__auto__ = placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(v));
if(cljs.core.truth_(temp__5823__auto__)){
var amount = temp__5823__auto__;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount);
} else {
return null;
}
}
} else {
return null;

}
}
}
});
placesurfer.clipboard_ui.hemnet.listing.housing_form_text = (function placesurfer$clipboard_ui$hemnet$listing$housing_form_text(v){
if(typeof v === 'string'){
return placesurfer.clipboard_ui.hemnet.listing.non_blank(v);
} else {
if(cljs.core.map_QMARK_(v)){
return placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v));
} else {
return null;

}
}
});
placesurfer.clipboard_ui.hemnet.listing.rooms_text = (function placesurfer$clipboard_ui$hemnet$listing$rooms_text(v){
if(typeof v === 'string'){
return placesurfer.clipboard_ui.hemnet.listing.non_blank(v);
} else {
if(typeof v === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," rum"].join('');
} else {
return null;

}
}
});
placesurfer.clipboard_ui.hemnet.listing.image_url_from_object = (function placesurfer$clipboard_ui$hemnet$listing$image_url_from_object(img){
if(cljs.core.truth_(img)){
if(typeof img === 'string'){
return placesurfer.clipboard_ui.hemnet.listing.non_blank(img);
} else {
if(cljs.core.map_QMARK_(img)){
var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(img));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(img));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"largeUrl","largeUrl",-1029225014).cljs$core$IFn$_invoke$arity$1(img));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"large","large",-196820544).cljs$core$IFn$_invoke$arity$1(img));
}
}
}
} else {
return null;

}
}
} else {
return null;
}
});
/**
 * Prefer Hemnet's large image variant when the URL encodes a thumbnail size.
 */
placesurfer.clipboard_ui.hemnet.listing.prefer_large_image_url = (function placesurfer$clipboard_ui$hemnet$listing$prefer_large_image_url(url){
var temp__5823__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(url);
if(cljs.core.truth_(temp__5823__auto__)){
var u = temp__5823__auto__;
return clojure.string.replace(clojure.string.replace(clojure.string.replace(u,/\/small_/,"/large_"),/\/thumb_/,"/large_"),/\/(?:small|thumb|mini)\./,"/large.");
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.listing.image_url_width_score = (function placesurfer$clipboard_ui$hemnet$listing$image_url_width_score(url){
var or__5025__auto__ = (function (){var G__25908 = cljs.core.re_find(/[?&]w=(\d+)/,url);
var G__25908__$1 = (((G__25908 == null))?null:cljs.core.second(G__25908));
if((G__25908__$1 == null)){
return null;
} else {
return parseInt(G__25908__$1);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.truth_(cljs.core.re_find(/\/large/,clojure.string.lower_case(url)))){
return (2000);
} else {
if(cljs.core.truth_(cljs.core.re_find(/\/(?:small|thumb|mini)/,clojure.string.lower_case(url)))){
return (100);
} else {
return (500);

}
}
}
});
placesurfer.clipboard_ui.hemnet.listing.best_url_from_image_object = (function placesurfer$clipboard_ui$hemnet$listing$best_url_from_image_object(img){
if(typeof img === 'string'){
return placesurfer.clipboard_ui.hemnet.listing.prefer_large_image_url(img);
} else {
if(cljs.core.map_QMARK_(img)){
var best = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var best_width = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var consider_BANG_ = (function (url,width){
var temp__5823__auto__ = placesurfer.clipboard_ui.hemnet.listing.prefer_large_image_url(url);
if(cljs.core.truth_(temp__5823__auto__)){
var u = temp__5823__auto__;
var w = (function (){var or__5025__auto__ = width;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.clipboard_ui.hemnet.listing.image_url_width_score(u);
}
})();
if((w >= cljs.core.deref(best_width))){
cljs.core.reset_BANG_(best_width,w);

return cljs.core.reset_BANG_(best,u);
} else {
return null;
}
} else {
return null;
}
});
var seq__25909_26004 = cljs.core.seq(new cljs.core.Keyword(null,"formats","formats",-1397890976).cljs$core$IFn$_invoke$arity$1(img));
var chunk__25910_26005 = null;
var count__25911_26006 = (0);
var i__25912_26007 = (0);
while(true){
if((i__25912_26007 < count__25911_26006)){
var fmt_26008 = chunk__25910_26005.cljs$core$IIndexed$_nth$arity$2(null,i__25912_26007);
var temp__5823__auto___26010 = placesurfer.clipboard_ui.hemnet.listing.image_url_from_object(fmt_26008);
if(cljs.core.truth_(temp__5823__auto___26010)){
var url_26011 = temp__5823__auto___26010;
consider_BANG_(url_26011,((typeof new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fmt_26008) === 'number')?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fmt_26008):null));
} else {
}


var G__26015 = seq__25909_26004;
var G__26016 = chunk__25910_26005;
var G__26017 = count__25911_26006;
var G__26018 = (i__25912_26007 + (1));
seq__25909_26004 = G__26015;
chunk__25910_26005 = G__26016;
count__25911_26006 = G__26017;
i__25912_26007 = G__26018;
continue;
} else {
var temp__5823__auto___26019 = cljs.core.seq(seq__25909_26004);
if(temp__5823__auto___26019){
var seq__25909_26020__$1 = temp__5823__auto___26019;
if(cljs.core.chunked_seq_QMARK_(seq__25909_26020__$1)){
var c__5548__auto___26021 = cljs.core.chunk_first(seq__25909_26020__$1);
var G__26022 = cljs.core.chunk_rest(seq__25909_26020__$1);
var G__26023 = c__5548__auto___26021;
var G__26024 = cljs.core.count(c__5548__auto___26021);
var G__26025 = (0);
seq__25909_26004 = G__26022;
chunk__25910_26005 = G__26023;
count__25911_26006 = G__26024;
i__25912_26007 = G__26025;
continue;
} else {
var fmt_26026 = cljs.core.first(seq__25909_26020__$1);
var temp__5823__auto___26027__$1 = placesurfer.clipboard_ui.hemnet.listing.image_url_from_object(fmt_26026);
if(cljs.core.truth_(temp__5823__auto___26027__$1)){
var url_26028 = temp__5823__auto___26027__$1;
consider_BANG_(url_26028,((typeof new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fmt_26026) === 'number')?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fmt_26026):null));
} else {
}


var G__26029 = cljs.core.next(seq__25909_26020__$1);
var G__26030 = null;
var G__26031 = (0);
var G__26032 = (0);
seq__25909_26004 = G__26029;
chunk__25910_26005 = G__26030;
count__25911_26006 = G__26031;
i__25912_26007 = G__26032;
continue;
}
} else {
}
}
break;
}

if(cljs.core.map_QMARK_(new cljs.core.Keyword(null,"sizes","sizes",-273528126).cljs$core$IFn$_invoke$arity$1(img))){
var seq__25915_26034 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["original","large","full","medium","small","thumb"], null));
var chunk__25916_26035 = null;
var count__25917_26036 = (0);
var i__25918_26037 = (0);
while(true){
if((i__25918_26037 < count__25917_26036)){
var key_26038 = chunk__25916_26035.cljs$core$IIndexed$_nth$arity$2(null,i__25918_26037);
var temp__5823__auto___26039 = placesurfer.clipboard_ui.hemnet.listing.image_url_from_object(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sizes","sizes",-273528126).cljs$core$IFn$_invoke$arity$1(img),key_26038));
if(cljs.core.truth_(temp__5823__auto___26039)){
var url_26040 = temp__5823__auto___26039;
consider_BANG_(url_26040,null);
} else {
}


var G__26041 = seq__25915_26034;
var G__26042 = chunk__25916_26035;
var G__26043 = count__25917_26036;
var G__26044 = (i__25918_26037 + (1));
seq__25915_26034 = G__26041;
chunk__25916_26035 = G__26042;
count__25917_26036 = G__26043;
i__25918_26037 = G__26044;
continue;
} else {
var temp__5823__auto___26045 = cljs.core.seq(seq__25915_26034);
if(temp__5823__auto___26045){
var seq__25915_26046__$1 = temp__5823__auto___26045;
if(cljs.core.chunked_seq_QMARK_(seq__25915_26046__$1)){
var c__5548__auto___26047 = cljs.core.chunk_first(seq__25915_26046__$1);
var G__26048 = cljs.core.chunk_rest(seq__25915_26046__$1);
var G__26049 = c__5548__auto___26047;
var G__26050 = cljs.core.count(c__5548__auto___26047);
var G__26051 = (0);
seq__25915_26034 = G__26048;
chunk__25916_26035 = G__26049;
count__25917_26036 = G__26050;
i__25918_26037 = G__26051;
continue;
} else {
var key_26052 = cljs.core.first(seq__25915_26046__$1);
var temp__5823__auto___26053__$1 = placesurfer.clipboard_ui.hemnet.listing.image_url_from_object(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sizes","sizes",-273528126).cljs$core$IFn$_invoke$arity$1(img),key_26052));
if(cljs.core.truth_(temp__5823__auto___26053__$1)){
var url_26054 = temp__5823__auto___26053__$1;
consider_BANG_(url_26054,null);
} else {
}


var G__26055 = cljs.core.next(seq__25915_26046__$1);
var G__26056 = null;
var G__26057 = (0);
var G__26058 = (0);
seq__25915_26034 = G__26055;
chunk__25916_26035 = G__26056;
count__25917_26036 = G__26057;
i__25918_26037 = G__26058;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5823__auto___26059 = placesurfer.clipboard_ui.hemnet.listing.image_url_from_object(img);
if(cljs.core.truth_(temp__5823__auto___26059)){
var direct_26060 = temp__5823__auto___26059;
consider_BANG_(direct_26060,((typeof new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(img) === 'number')?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(img):null));
} else {
}

return cljs.core.deref(best);
} else {
return null;

}
}
});
placesurfer.clipboard_ui.hemnet.listing.best_image_url_from_node = (function placesurfer$clipboard_ui$hemnet$listing$best_image_url_from_node(node){
if(cljs.core.map_QMARK_(node)){
var direct = placesurfer.clipboard_ui.hemnet.listing.prefer_large_image_url((function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"imageUrl","imageUrl",1269643151).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"image-url","image-url",-1064784064).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"primaryImageUrl","primaryImageUrl",226483803).cljs$core$IFn$_invoke$arity$1(node));
}
}
})());
var primary = placesurfer.clipboard_ui.hemnet.listing.best_url_from_image_object((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"primaryImage","primaryImage",946536589).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"primary_image","primary_image",-2145227621).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"mainImage","mainImage",-1491867916).cljs$core$IFn$_invoke$arity$1(node);
}
}
})());
var from_collections = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (coll_key){
var temp__5823__auto__ = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,coll_key));
if(temp__5823__auto__){
var coll = temp__5823__auto__;
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(placesurfer.clipboard_ui.hemnet.listing.best_url_from_image_object,coll);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"images","images",1757475080),new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),new cljs.core.Keyword(null,"gallery","gallery",1782868083),new cljs.core.Keyword(null,"pictures","pictures",516806515)], null)], 0));
var all = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(direct)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [direct], null):null),(cljs.core.truth_(primary)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [primary], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from_collections], 0))));
if(cljs.core.seq(all)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,placesurfer.clipboard_ui.hemnet.listing.image_url_width_score,all);
} else {
return null;
}
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.listing.coords_from_node = (function placesurfer$clipboard_ui$hemnet$listing$coords_from_node(node){
if(cljs.core.map_QMARK_(node)){
var coords = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"coordinate","coordinate",-112811209).cljs$core$IFn$_invoke$arity$1(node);
}
})();
var lat = (function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = ((cljs.core.map_QMARK_(coords))?placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(coords)):null);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
if(cljs.core.map_QMARK_(coords)){
return placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords));
} else {
return null;
}
}
}
}
})();
var lon = (function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"long","long",-171452093).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = ((cljs.core.map_QMARK_(coords))?placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"long","long",-171452093).cljs$core$IFn$_invoke$arity$1(coords)):null);
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
var or__5025__auto____$5 = ((cljs.core.map_QMARK_(coords))?placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(coords)):null);
if(cljs.core.truth_(or__5025__auto____$5)){
return or__5025__auto____$5;
} else {
var or__5025__auto____$6 = ((cljs.core.map_QMARK_(coords))?placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(coords)):null);
if(cljs.core.truth_(or__5025__auto____$6)){
return or__5025__auto____$6;
} else {
if(cljs.core.map_QMARK_(coords)){
return placesurfer.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords));
} else {
return null;
}
}
}
}
}
}
}
}
})();
if(((typeof lat === 'number') && (typeof lon === 'number'))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),lat,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon], null);
} else {
return null;
}
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.listing.with_suffix = (function placesurfer$clipboard_ui$hemnet$listing$with_suffix(s,suffix,check_str){
var temp__5823__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(s);
if(cljs.core.truth_(temp__5823__auto__)){
var t = temp__5823__auto__;
if(clojure.string.includes_QMARK_(clojure.string.lower_case(t),check_str)){
return t;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.listing.monthly_fee_text = (function placesurfer$clipboard_ui$hemnet$listing$monthly_fee_text(v){
return placesurfer.clipboard_ui.hemnet.listing.with_suffix(placesurfer.clipboard_ui.hemnet.listing.formatted_value(v),"kr/m\u00E5n","kr/m\u00E5n");
});
placesurfer.clipboard_ui.hemnet.listing.sqm_price_text = (function placesurfer$clipboard_ui$hemnet$listing$sqm_price_text(v){
return placesurfer.clipboard_ui.hemnet.listing.with_suffix(placesurfer.clipboard_ui.hemnet.listing.formatted_value(v),"kr/m\u00B2","kr/m");
});
placesurfer.clipboard_ui.hemnet.listing.construction_year_text = (function placesurfer$clipboard_ui$hemnet$listing$construction_year_text(node){
var temp__5823__auto__ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"constructionYear","constructionYear",-1667156466).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"construction_year","construction_year",-1510676701).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = new cljs.core.Keyword(null,"yearBuilt","yearBuilt",1683051401).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = new cljs.core.Keyword(null,"year_built","year_built",-1978799348).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = new cljs.core.Keyword(null,"buildYear","buildYear",-775469357).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
return new cljs.core.Keyword(null,"build_year","build_year",1949943666).cljs$core$IFn$_invoke$arity$1(node);
}
}
}
}
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var raw = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.re_find(/\d{4}/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw));
if(cljs.core.truth_(temp__5823__auto____$1)){
var year = temp__5823__auto____$1;
return ["bygg\u00E5r ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
} else {
return null;
}
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.listing.extra_values_from = (function placesurfer$clipboard_ui$hemnet$listing$extra_values_from(node){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.clipboard_ui.hemnet.listing.monthly_fee_text((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"monthlyFee","monthlyFee",-1637766697).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"fee","fee",-1196176319).cljs$core$IFn$_invoke$arity$1(node);
}
})()),placesurfer.clipboard_ui.hemnet.listing.formatted_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"supplementalArea","supplementalArea",-1270629139).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"supplemental_area","supplemental_area",326673892).cljs$core$IFn$_invoke$arity$1(node);
}
})()),placesurfer.clipboard_ui.hemnet.listing.sqm_price_text(new cljs.core.Keyword(null,"square_meter_price","square_meter_price",-424972915).cljs$core$IFn$_invoke$arity$1(node)),(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"tenure","tenure",-1232647460).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5823__auto__)){
var tenure = temp__5823__auto__;
if(cljs.core.map_QMARK_(tenure)){
return placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tenure));
} else {
return null;
}
} else {
return null;
}
})(),placesurfer.clipboard_ui.hemnet.listing.construction_year_text(node)], null)));
});
/**
 * Higher score means a more complete Hemnet listing node.
 */
placesurfer.clipboard_ui.hemnet.listing.listing_completeness_score = (function placesurfer$clipboard_ui$hemnet$listing$listing_completeness_score(node){
if(cljs.core.map_QMARK_(node)){
var coords = placesurfer.clipboard_ui.hemnet.listing.coords_from_node(node);
var score = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
if(cljs.core.truth_((function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"streetAddress","streetAddress",-1932799156).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"street_address","street_address",1563462487).cljs$core$IFn$_invoke$arity$1(node));
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(score,cljs.core._PLUS_,(1));
} else {
}

if(cljs.core.truth_(coords)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(score,cljs.core._PLUS_,(4));
} else {
}

if(cljs.core.truth_(placesurfer.clipboard_ui.hemnet.listing.best_image_url_from_node(node))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(score,cljs.core._PLUS_,(2));
} else {
}

if(cljs.core.truth_(placesurfer.clipboard_ui.hemnet.listing.formatted_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"askingPrice","askingPrice",56942313).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"asking_price","asking_price",-848112810).cljs$core$IFn$_invoke$arity$1(node);
}
})()))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(score,cljs.core._PLUS_,(2));
} else {
}

if(cljs.core.truth_(placesurfer.clipboard_ui.hemnet.listing.formatted_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"livingArea","livingArea",142736680).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"living_area","living_area",-259473013).cljs$core$IFn$_invoke$arity$1(node);
}
})()))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(score,cljs.core._PLUS_,(1));
} else {
}

if(cljs.core.truth_(placesurfer.clipboard_ui.hemnet.listing.housing_form_text((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"housingForm","housingForm",2057149162).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"housing_form","housing_form",-899216415).cljs$core$IFn$_invoke$arity$1(node);
}
})()))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(score,cljs.core._PLUS_,(1));
} else {
}

if((!(((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"numberOfRooms","numberOfRooms",443726812).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"rooms","rooms",1196158176).cljs$core$IFn$_invoke$arity$1(node);
}
})() == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(score,cljs.core._PLUS_,(1));
} else {
}

return cljs.core.deref(score);
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.listing.listing_title_from_node = (function placesurfer$clipboard_ui$hemnet$listing$listing_title_from_node(node){
var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"listingTitle","listingTitle",-984873993).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"listing-title","listing-title",1991064421).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(node));
}
}
}
});
placesurfer.clipboard_ui.hemnet.listing.municipality_only_QMARK_ = (function placesurfer$clipboard_ui$hemnet$listing$municipality_only_QMARK_(s){
return cljs.core.boolean$(cljs.core.re_find(/ kommun$/,clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))));
});
/**
 * Extract postort from Hemnet location text like "Kristdala, Oskarshamns kommun".
 */
placesurfer.clipboard_ui.hemnet.listing.postal_city_from_location_description = (function placesurfer$clipboard_ui$hemnet$listing$postal_city_from_location_description(s){
var temp__5823__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(s);
if(cljs.core.truth_(temp__5823__auto__)){
var t = temp__5823__auto__;
var temp__5823__auto____$1 = placesurfer.clipboard_ui.hemnet.listing.non_blank(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(t,/,/)));
if(cljs.core.truth_(temp__5823__auto____$1)){
var first_part = temp__5823__auto____$1;
if(placesurfer.clipboard_ui.hemnet.listing.municipality_only_QMARK_(first_part)){
return null;
} else {
return first_part;
}
} else {
return null;
}
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.listing.locality_from_location = (function placesurfer$clipboard_ui$hemnet$listing$locality_from_location(location){
if(cljs.core.map_QMARK_(location)){
var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"locality","locality",842809377).cljs$core$IFn$_invoke$arity$1(location));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postalCity","postalCity",-657385891).cljs$core$IFn$_invoke$arity$1(location));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postal_city","postal_city",-2006762978).cljs$core$IFn$_invoke$arity$1(location));
}
}
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.listing.postal_city_from_node = (function placesurfer$clipboard_ui$hemnet$listing$postal_city_from_node(node){
var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postalCity","postalCity",-657385891).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postal_city","postal_city",-2006762978).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postal-city","postal-city",2130329622).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = placesurfer.clipboard_ui.hemnet.listing.locality_from_location(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = placesurfer.clipboard_ui.hemnet.listing.postal_city_from_location_description((function (){var or__5025__auto____$4 = new cljs.core.Keyword(null,"locationDescription","locationDescription",-1557397157).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
return new cljs.core.Keyword(null,"location_description","location_description",-546590903).cljs$core$IFn$_invoke$arity$1(node);
}
})());
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
var or__5025__auto____$5 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postalArea","postalArea",800348657).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$5)){
return or__5025__auto____$5;
} else {
return placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postal_area","postal_area",-231010098).cljs$core$IFn$_invoke$arity$1(node));
}
}
}
}
}
}
});
/**
 * Map a raw Hemnet listing node (GraphQL or bookmarklet flat) to kebab-case fields.
 */
placesurfer.clipboard_ui.hemnet.listing.normalize_listing_node = (function placesurfer$clipboard_ui$hemnet$listing$normalize_listing_node(node){
if(cljs.core.map_QMARK_(node)){
var coords = placesurfer.clipboard_ui.hemnet.listing.coords_from_node(node);
var extras = placesurfer.clipboard_ui.hemnet.listing.extra_values_from(node);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rooms","rooms",1196158176),new cljs.core.Keyword(null,"image-url","image-url",-1064784064),new cljs.core.Keyword(null,"listing-title","listing-title",1991064421),new cljs.core.Keyword(null,"asking-price","asking-price",1304329161),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"living-area","living-area",1377243120),new cljs.core.Keyword(null,"plot-area","plot-area",98036883),new cljs.core.Keyword(null,"postal-city","postal-city",2130329622),new cljs.core.Keyword(null,"street-address","street-address",1974914551),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"agent-name","agent-name",-916187942),new cljs.core.Keyword(null,"extra-values","extra-values",1671557498),new cljs.core.Keyword(null,"viewing","viewing",1058577980),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259),new cljs.core.Keyword(null,"housing-form","housing-form",-1885695809)],[placesurfer.clipboard_ui.hemnet.listing.rooms_text((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"numberOfRooms","numberOfRooms",443726812).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"rooms","rooms",1196158176).cljs$core$IFn$_invoke$arity$1(node);
}
})()),placesurfer.clipboard_ui.hemnet.listing.best_image_url_from_node(node),placesurfer.clipboard_ui.hemnet.listing.listing_title_from_node(node),placesurfer.clipboard_ui.hemnet.listing.formatted_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"askingPrice","askingPrice",56942313).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"asking_price","asking_price",-848112810).cljs$core$IFn$_invoke$arity$1(node);
}
})()),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords),placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(node)),placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(node)),placesurfer.clipboard_ui.hemnet.listing.formatted_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"livingArea","livingArea",142736680).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"living_area","living_area",-259473013).cljs$core$IFn$_invoke$arity$1(node);
}
})()),placesurfer.clipboard_ui.hemnet.listing.formatted_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"landArea","landArea",-1780399106).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"land_area","land_area",-815627476).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"plotArea","plotArea",948730983).cljs$core$IFn$_invoke$arity$1(node);
}
}
})()),placesurfer.clipboard_ui.hemnet.listing.postal_city_from_node(node),(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"streetAddress","streetAddress",-1932799156).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"street_address","street_address",1563462487).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return placesurfer.clipboard_ui.hemnet.listing.listing_title_from_node(node);
}
}
})(),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords),(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"agentName","agentName",-1757435198).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"agent-name","agent-name",-916187942).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var temp__5823__auto__ = (function (){var or__5025__auto____$2 = new cljs.core.Keyword(null,"broker","broker",2062144723).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = new cljs.core.Keyword(null,"brokerFirm","brokerFirm",-927410704).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return new cljs.core.Keyword(null,"agent","agent",-766455027).cljs$core$IFn$_invoke$arity$1(node);
}
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var broker = temp__5823__auto__;
if(cljs.core.map_QMARK_(broker)){
var or__5025__auto____$2 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(broker));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"fullName","fullName",-202600044).cljs$core$IFn$_invoke$arity$1(broker));
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = placesurfer.clipboard_ui.hemnet.listing.non_blank(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"givenName","givenName",84890966).cljs$core$IFn$_invoke$arity$1(broker),new cljs.core.Keyword(null,"familyName","familyName",1608126223).cljs$core$IFn$_invoke$arity$1(broker)], null))));
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
return placesurfer.clipboard_ui.hemnet.listing.non_blank(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"firstName","firstName",-935151957).cljs$core$IFn$_invoke$arity$1(broker),new cljs.core.Keyword(null,"lastName","lastName",-240536395).cljs$core$IFn$_invoke$arity$1(broker)], null))));
}
}
}
} else {
return null;
}
} else {
return null;
}
}
}
})(),((cljs.core.seq(extras))?extras:cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__25970_SHARP_){
var temp__5823__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(p1__25970_SHARP_);
if(cljs.core.truth_(temp__5823__auto__)){
var t = temp__5823__auto__;
if(cljs.core.truth_(cljs.core.re_matches(/\d[\d\s]*kr/,clojure.string.trim(t)))){
return [clojure.string.trim(t),"/m\u00E5n"].join('');
} else {
return t;
}
} else {
return null;
}
}),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"extraValues","extraValues",-1595737138).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"extra-values","extra-values",1671557498).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
})()))),placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"viewing","viewing",1058577980).cljs$core$IFn$_invoke$arity$1(node)),(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"agentUrl","agentUrl",523424011).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var temp__5823__auto__ = (function (){var or__5025__auto____$2 = new cljs.core.Keyword(null,"broker","broker",2062144723).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = new cljs.core.Keyword(null,"brokerFirm","brokerFirm",-927410704).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return new cljs.core.Keyword(null,"agent","agent",-766455027).cljs$core$IFn$_invoke$arity$1(node);
}
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var broker = temp__5823__auto__;
if(cljs.core.map_QMARK_(broker)){
var or__5025__auto____$2 = placesurfer.clipboard_ui.hemnet.listing.non_blank(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(broker,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profilePage","profilePage",785839990),new cljs.core.Keyword(null,"href","href",-793805698)], null)));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"profilePageUrl","profilePageUrl",1164972886).cljs$core$IFn$_invoke$arity$1(broker));
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(broker));
}
}
} else {
return null;
}
} else {
return null;
}
}
}
})(),placesurfer.clipboard_ui.hemnet.listing.housing_form_text((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"housingForm","housingForm",2057149162).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"housing_form","housing_form",-899216415).cljs$core$IFn$_invoke$arity$1(node);
}
})())]);
} else {
return null;
}
});
/**
 * Normalize bookmarklet `listing` map, including nested GraphQL shapes.
 */
placesurfer.clipboard_ui.hemnet.listing.normalize_listing_payload = (function placesurfer$clipboard_ui$hemnet$listing$normalize_listing_payload(listing){
if(cljs.core.map_QMARK_(listing)){
return placesurfer.clipboard_ui.hemnet.listing.normalize_listing_node(listing);
} else {
return null;
}
});
/**
 * True when normalized listing includes latitude and longitude.
 */
placesurfer.clipboard_ui.hemnet.listing.listing_has_coords_QMARK_ = (function placesurfer$clipboard_ui$hemnet$listing$listing_has_coords_QMARK_(listing){
return ((cljs.core.map_QMARK_(listing)) && (((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(listing) === 'number') && (typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(listing) === 'number'))));
});
/**
 * True when listing has both street address and postal city for geocoding.
 */
placesurfer.clipboard_ui.hemnet.listing.listing_complete_address_QMARK_ = (function placesurfer$clipboard_ui$hemnet$listing$listing_complete_address_QMARK_(listing){
var and__5023__auto__ = cljs.core.map_QMARK_(listing);
if(and__5023__auto__){
var and__5023__auto____$1 = placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"street-address","street-address",1974914551).cljs$core$IFn$_invoke$arity$1(listing));
if(cljs.core.truth_(and__5023__auto____$1)){
return placesurfer.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postal-city","postal-city",2130329622).cljs$core$IFn$_invoke$arity$1(listing));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});

//# sourceMappingURL=placesurfer.clipboard_ui.hemnet.listing.js.map
