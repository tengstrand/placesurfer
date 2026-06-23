goog.provide('hitteri.clipboard_ui.hemnet.listing');
hitteri.clipboard_ui.hemnet.listing.non_blank = (function hitteri$clipboard_ui$hemnet$listing$non_blank(s){
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
if(cljs.core.truth_(temp__5825__auto__)){
var t = temp__5825__auto__;
return t;
} else {
return null;
}
});
/**
 * Parse coordinate-like numbers from strings or numbers.
 */
hitteri.clipboard_ui.hemnet.listing.parse_number = (function hitteri$clipboard_ui$hemnet$listing$parse_number(v){
return hitteri.clipboard_ui.pure.numbers.parse_number(v);
});
hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_ = (function hitteri$clipboard_ui$hemnet$listing$parse_number_STAR_(v){
return hitteri.clipboard_ui.hemnet.listing.parse_number(v);
});
/**
 * Extract display text from Hemnet formatted objects or scalars.
 */
hitteri.clipboard_ui.hemnet.listing.formatted_value = (function hitteri$clipboard_ui$hemnet$listing$formatted_value(v){
if(typeof v === 'string'){
return hitteri.clipboard_ui.hemnet.listing.non_blank(v);
} else {
if(typeof v === 'number'){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
} else {
if(cljs.core.map_QMARK_(v)){
var or__5025__auto__ = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"formatted","formatted",370157929).cljs$core$IFn$_invoke$arity$1(v));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(v));
if(cljs.core.truth_(temp__5825__auto__)){
var amount = temp__5825__auto__;
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
hitteri.clipboard_ui.hemnet.listing.housing_form_text = (function hitteri$clipboard_ui$hemnet$listing$housing_form_text(v){
if(typeof v === 'string'){
return hitteri.clipboard_ui.hemnet.listing.non_blank(v);
} else {
if(cljs.core.map_QMARK_(v)){
return hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v));
} else {
return null;

}
}
});
hitteri.clipboard_ui.hemnet.listing.rooms_text = (function hitteri$clipboard_ui$hemnet$listing$rooms_text(v){
if(typeof v === 'string'){
return hitteri.clipboard_ui.hemnet.listing.non_blank(v);
} else {
if(typeof v === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," rum"].join('');
} else {
return null;

}
}
});
hitteri.clipboard_ui.hemnet.listing.image_url_from_object = (function hitteri$clipboard_ui$hemnet$listing$image_url_from_object(img){
if(cljs.core.truth_(img)){
if(typeof img === 'string'){
return hitteri.clipboard_ui.hemnet.listing.non_blank(img);
} else {
if(cljs.core.map_QMARK_(img)){
var or__5025__auto__ = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(img));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(img));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"largeUrl","largeUrl",-1029225014).cljs$core$IFn$_invoke$arity$1(img));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"large","large",-196820544).cljs$core$IFn$_invoke$arity$1(img));
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
hitteri.clipboard_ui.hemnet.listing.prefer_large_image_url = (function hitteri$clipboard_ui$hemnet$listing$prefer_large_image_url(url){
var temp__5825__auto__ = hitteri.clipboard_ui.hemnet.listing.non_blank(url);
if(cljs.core.truth_(temp__5825__auto__)){
var u = temp__5825__auto__;
return clojure.string.replace(clojure.string.replace(clojure.string.replace(u,/\/small_/,"/large_"),/\/thumb_/,"/large_"),/\/(?:small|thumb|mini)\./,"/large.");
} else {
return null;
}
});
hitteri.clipboard_ui.hemnet.listing.image_url_width_score = (function hitteri$clipboard_ui$hemnet$listing$image_url_width_score(url){
var or__5025__auto__ = (function (){var G__43616 = cljs.core.re_find(/[?&]w=(\d+)/,url);
var G__43616__$1 = (((G__43616 == null))?null:cljs.core.second(G__43616));
if((G__43616__$1 == null)){
return null;
} else {
return parseInt(G__43616__$1);
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
hitteri.clipboard_ui.hemnet.listing.best_url_from_image_object = (function hitteri$clipboard_ui$hemnet$listing$best_url_from_image_object(img){
if(typeof img === 'string'){
return hitteri.clipboard_ui.hemnet.listing.prefer_large_image_url(img);
} else {
if(cljs.core.map_QMARK_(img)){
var best = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var best_width = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var consider_BANG_ = (function (url,width){
var temp__5825__auto__ = hitteri.clipboard_ui.hemnet.listing.prefer_large_image_url(url);
if(cljs.core.truth_(temp__5825__auto__)){
var u = temp__5825__auto__;
var w = (function (){var or__5025__auto__ = width;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hitteri.clipboard_ui.hemnet.listing.image_url_width_score(u);
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
var seq__43617_43625 = cljs.core.seq(new cljs.core.Keyword(null,"formats","formats",-1397890976).cljs$core$IFn$_invoke$arity$1(img));
var chunk__43618_43626 = null;
var count__43619_43627 = (0);
var i__43620_43628 = (0);
while(true){
if((i__43620_43628 < count__43619_43627)){
var fmt_43629 = chunk__43618_43626.cljs$core$IIndexed$_nth$arity$2(null,i__43620_43628);
var temp__5825__auto___43630 = hitteri.clipboard_ui.hemnet.listing.image_url_from_object(fmt_43629);
if(cljs.core.truth_(temp__5825__auto___43630)){
var url_43631 = temp__5825__auto___43630;
consider_BANG_(url_43631,((typeof new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fmt_43629) === 'number')?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fmt_43629):null));
} else {
}


var G__43632 = seq__43617_43625;
var G__43633 = chunk__43618_43626;
var G__43634 = count__43619_43627;
var G__43635 = (i__43620_43628 + (1));
seq__43617_43625 = G__43632;
chunk__43618_43626 = G__43633;
count__43619_43627 = G__43634;
i__43620_43628 = G__43635;
continue;
} else {
var temp__5825__auto___43636 = cljs.core.seq(seq__43617_43625);
if(temp__5825__auto___43636){
var seq__43617_43637__$1 = temp__5825__auto___43636;
if(cljs.core.chunked_seq_QMARK_(seq__43617_43637__$1)){
var c__5548__auto___43638 = cljs.core.chunk_first(seq__43617_43637__$1);
var G__43639 = cljs.core.chunk_rest(seq__43617_43637__$1);
var G__43640 = c__5548__auto___43638;
var G__43641 = cljs.core.count(c__5548__auto___43638);
var G__43642 = (0);
seq__43617_43625 = G__43639;
chunk__43618_43626 = G__43640;
count__43619_43627 = G__43641;
i__43620_43628 = G__43642;
continue;
} else {
var fmt_43643 = cljs.core.first(seq__43617_43637__$1);
var temp__5825__auto___43644__$1 = hitteri.clipboard_ui.hemnet.listing.image_url_from_object(fmt_43643);
if(cljs.core.truth_(temp__5825__auto___43644__$1)){
var url_43645 = temp__5825__auto___43644__$1;
consider_BANG_(url_43645,((typeof new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fmt_43643) === 'number')?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fmt_43643):null));
} else {
}


var G__43646 = cljs.core.next(seq__43617_43637__$1);
var G__43647 = null;
var G__43648 = (0);
var G__43649 = (0);
seq__43617_43625 = G__43646;
chunk__43618_43626 = G__43647;
count__43619_43627 = G__43648;
i__43620_43628 = G__43649;
continue;
}
} else {
}
}
break;
}

if(cljs.core.map_QMARK_(new cljs.core.Keyword(null,"sizes","sizes",-273528126).cljs$core$IFn$_invoke$arity$1(img))){
var seq__43621_43650 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["original","large","full","medium","small","thumb"], null));
var chunk__43622_43651 = null;
var count__43623_43652 = (0);
var i__43624_43653 = (0);
while(true){
if((i__43624_43653 < count__43623_43652)){
var key_43654 = chunk__43622_43651.cljs$core$IIndexed$_nth$arity$2(null,i__43624_43653);
var temp__5825__auto___43655 = hitteri.clipboard_ui.hemnet.listing.image_url_from_object(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sizes","sizes",-273528126).cljs$core$IFn$_invoke$arity$1(img),key_43654));
if(cljs.core.truth_(temp__5825__auto___43655)){
var url_43656 = temp__5825__auto___43655;
consider_BANG_(url_43656,null);
} else {
}


var G__43657 = seq__43621_43650;
var G__43658 = chunk__43622_43651;
var G__43659 = count__43623_43652;
var G__43660 = (i__43624_43653 + (1));
seq__43621_43650 = G__43657;
chunk__43622_43651 = G__43658;
count__43623_43652 = G__43659;
i__43624_43653 = G__43660;
continue;
} else {
var temp__5825__auto___43661 = cljs.core.seq(seq__43621_43650);
if(temp__5825__auto___43661){
var seq__43621_43662__$1 = temp__5825__auto___43661;
if(cljs.core.chunked_seq_QMARK_(seq__43621_43662__$1)){
var c__5548__auto___43663 = cljs.core.chunk_first(seq__43621_43662__$1);
var G__43664 = cljs.core.chunk_rest(seq__43621_43662__$1);
var G__43665 = c__5548__auto___43663;
var G__43666 = cljs.core.count(c__5548__auto___43663);
var G__43667 = (0);
seq__43621_43650 = G__43664;
chunk__43622_43651 = G__43665;
count__43623_43652 = G__43666;
i__43624_43653 = G__43667;
continue;
} else {
var key_43668 = cljs.core.first(seq__43621_43662__$1);
var temp__5825__auto___43669__$1 = hitteri.clipboard_ui.hemnet.listing.image_url_from_object(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sizes","sizes",-273528126).cljs$core$IFn$_invoke$arity$1(img),key_43668));
if(cljs.core.truth_(temp__5825__auto___43669__$1)){
var url_43670 = temp__5825__auto___43669__$1;
consider_BANG_(url_43670,null);
} else {
}


var G__43671 = cljs.core.next(seq__43621_43662__$1);
var G__43672 = null;
var G__43673 = (0);
var G__43674 = (0);
seq__43621_43650 = G__43671;
chunk__43622_43651 = G__43672;
count__43623_43652 = G__43673;
i__43624_43653 = G__43674;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5825__auto___43675 = hitteri.clipboard_ui.hemnet.listing.image_url_from_object(img);
if(cljs.core.truth_(temp__5825__auto___43675)){
var direct_43676 = temp__5825__auto___43675;
consider_BANG_(direct_43676,((typeof new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(img) === 'number')?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(img):null));
} else {
}

return cljs.core.deref(best);
} else {
return null;

}
}
});
hitteri.clipboard_ui.hemnet.listing.best_image_url_from_node = (function hitteri$clipboard_ui$hemnet$listing$best_image_url_from_node(node){
if(cljs.core.map_QMARK_(node)){
var direct = hitteri.clipboard_ui.hemnet.listing.prefer_large_image_url((function (){var or__5025__auto__ = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"imageUrl","imageUrl",1269643151).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"image-url","image-url",-1064784064).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"primaryImageUrl","primaryImageUrl",226483803).cljs$core$IFn$_invoke$arity$1(node));
}
}
})());
var primary = hitteri.clipboard_ui.hemnet.listing.best_url_from_image_object((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"primaryImage","primaryImage",946536589).cljs$core$IFn$_invoke$arity$1(node);
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
var temp__5825__auto__ = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,coll_key));
if(temp__5825__auto__){
var coll = temp__5825__auto__;
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(hitteri.clipboard_ui.hemnet.listing.best_url_from_image_object,coll);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"images","images",1757475080),new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),new cljs.core.Keyword(null,"gallery","gallery",1782868083),new cljs.core.Keyword(null,"pictures","pictures",516806515)], null)], 0));
var all = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(direct)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [direct], null):null),(cljs.core.truth_(primary)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [primary], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from_collections], 0))));
if(cljs.core.seq(all)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,hitteri.clipboard_ui.hemnet.listing.image_url_width_score,all);
} else {
return null;
}
} else {
return null;
}
});
hitteri.clipboard_ui.hemnet.listing.coords_from_node = (function hitteri$clipboard_ui$hemnet$listing$coords_from_node(node){
if(cljs.core.map_QMARK_(node)){
var coords = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"coordinate","coordinate",-112811209).cljs$core$IFn$_invoke$arity$1(node);
}
})();
var lat = (function (){var or__5025__auto__ = hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = ((cljs.core.map_QMARK_(coords))?hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(coords)):null);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
if(cljs.core.map_QMARK_(coords)){
return hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords));
} else {
return null;
}
}
}
}
})();
var lon = (function (){var or__5025__auto__ = hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"long","long",-171452093).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = ((cljs.core.map_QMARK_(coords))?hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"long","long",-171452093).cljs$core$IFn$_invoke$arity$1(coords)):null);
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
var or__5025__auto____$5 = ((cljs.core.map_QMARK_(coords))?hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(coords)):null);
if(cljs.core.truth_(or__5025__auto____$5)){
return or__5025__auto____$5;
} else {
var or__5025__auto____$6 = ((cljs.core.map_QMARK_(coords))?hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(coords)):null);
if(cljs.core.truth_(or__5025__auto____$6)){
return or__5025__auto____$6;
} else {
if(cljs.core.map_QMARK_(coords)){
return hitteri.clipboard_ui.hemnet.listing.parse_number_STAR_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords));
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
hitteri.clipboard_ui.hemnet.listing.extra_values_from = (function hitteri$clipboard_ui$hemnet$listing$extra_values_from(node){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hitteri.clipboard_ui.hemnet.listing.formatted_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"monthlyFee","monthlyFee",-1637766697).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"fee","fee",-1196176319).cljs$core$IFn$_invoke$arity$1(node);
}
})()),hitteri.clipboard_ui.hemnet.listing.formatted_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"supplementalArea","supplementalArea",-1270629139).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"supplemental_area","supplemental_area",326673892).cljs$core$IFn$_invoke$arity$1(node);
}
})()),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"tenure","tenure",-1232647460).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5825__auto__)){
var tenure = temp__5825__auto__;
if(cljs.core.map_QMARK_(tenure)){
return hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tenure));
} else {
return null;
}
} else {
return null;
}
})(),hitteri.clipboard_ui.hemnet.listing.formatted_value(new cljs.core.Keyword(null,"square_meter_price","square_meter_price",-424972915).cljs$core$IFn$_invoke$arity$1(node))], null)));
});
/**
 * Higher score means a more complete Hemnet listing node.
 */
hitteri.clipboard_ui.hemnet.listing.listing_completeness_score = (function hitteri$clipboard_ui$hemnet$listing$listing_completeness_score(node){
if(cljs.core.map_QMARK_(node)){
var coords = hitteri.clipboard_ui.hemnet.listing.coords_from_node(node);
var score = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
if(cljs.core.truth_((function (){var or__5025__auto__ = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"streetAddress","streetAddress",-1932799156).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"street_address","street_address",1563462487).cljs$core$IFn$_invoke$arity$1(node));
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(score,cljs.core._PLUS_,(1));
} else {
}

if(cljs.core.truth_(coords)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(score,cljs.core._PLUS_,(4));
} else {
}

if(cljs.core.truth_(hitteri.clipboard_ui.hemnet.listing.best_image_url_from_node(node))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(score,cljs.core._PLUS_,(2));
} else {
}

if(cljs.core.truth_(hitteri.clipboard_ui.hemnet.listing.formatted_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"askingPrice","askingPrice",56942313).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"asking_price","asking_price",-848112810).cljs$core$IFn$_invoke$arity$1(node);
}
})()))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(score,cljs.core._PLUS_,(2));
} else {
}

if(cljs.core.truth_(hitteri.clipboard_ui.hemnet.listing.formatted_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"livingArea","livingArea",142736680).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"living_area","living_area",-259473013).cljs$core$IFn$_invoke$arity$1(node);
}
})()))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(score,cljs.core._PLUS_,(1));
} else {
}

if(cljs.core.truth_(hitteri.clipboard_ui.hemnet.listing.housing_form_text((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"housingForm","housingForm",2057149162).cljs$core$IFn$_invoke$arity$1(node);
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
hitteri.clipboard_ui.hemnet.listing.listing_title_from_node = (function hitteri$clipboard_ui$hemnet$listing$listing_title_from_node(node){
var or__5025__auto__ = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"listingTitle","listingTitle",-984873993).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"listing-title","listing-title",1991064421).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(node));
}
}
}
});
hitteri.clipboard_ui.hemnet.listing.municipality_only_QMARK_ = (function hitteri$clipboard_ui$hemnet$listing$municipality_only_QMARK_(s){
return cljs.core.boolean$(cljs.core.re_find(/ kommun$/,clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))));
});
/**
 * Extract postort from Hemnet location text like "Kristdala, Oskarshamns kommun".
 */
hitteri.clipboard_ui.hemnet.listing.postal_city_from_location_description = (function hitteri$clipboard_ui$hemnet$listing$postal_city_from_location_description(s){
var temp__5825__auto__ = hitteri.clipboard_ui.hemnet.listing.non_blank(s);
if(cljs.core.truth_(temp__5825__auto__)){
var t = temp__5825__auto__;
var temp__5825__auto____$1 = hitteri.clipboard_ui.hemnet.listing.non_blank(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(t,/,/)));
if(cljs.core.truth_(temp__5825__auto____$1)){
var first_part = temp__5825__auto____$1;
if(hitteri.clipboard_ui.hemnet.listing.municipality_only_QMARK_(first_part)){
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
hitteri.clipboard_ui.hemnet.listing.locality_from_location = (function hitteri$clipboard_ui$hemnet$listing$locality_from_location(location){
if(cljs.core.map_QMARK_(location)){
var or__5025__auto__ = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"locality","locality",842809377).cljs$core$IFn$_invoke$arity$1(location));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postalCity","postalCity",-657385891).cljs$core$IFn$_invoke$arity$1(location));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postal_city","postal_city",-2006762978).cljs$core$IFn$_invoke$arity$1(location));
}
}
} else {
return null;
}
});
hitteri.clipboard_ui.hemnet.listing.postal_city_from_node = (function hitteri$clipboard_ui$hemnet$listing$postal_city_from_node(node){
var or__5025__auto__ = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postalCity","postalCity",-657385891).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postal_city","postal_city",-2006762978).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postal-city","postal-city",2130329622).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = hitteri.clipboard_ui.hemnet.listing.locality_from_location(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = hitteri.clipboard_ui.hemnet.listing.postal_city_from_location_description((function (){var or__5025__auto____$4 = new cljs.core.Keyword(null,"locationDescription","locationDescription",-1557397157).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
return new cljs.core.Keyword(null,"location_description","location_description",-546590903).cljs$core$IFn$_invoke$arity$1(node);
}
})());
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
var or__5025__auto____$5 = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postalArea","postalArea",800348657).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$5)){
return or__5025__auto____$5;
} else {
return hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postal_area","postal_area",-231010098).cljs$core$IFn$_invoke$arity$1(node));
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
hitteri.clipboard_ui.hemnet.listing.normalize_listing_node = (function hitteri$clipboard_ui$hemnet$listing$normalize_listing_node(node){
if(cljs.core.map_QMARK_(node)){
var coords = hitteri.clipboard_ui.hemnet.listing.coords_from_node(node);
var extras = hitteri.clipboard_ui.hemnet.listing.extra_values_from(node);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rooms","rooms",1196158176),new cljs.core.Keyword(null,"image-url","image-url",-1064784064),new cljs.core.Keyword(null,"listing-title","listing-title",1991064421),new cljs.core.Keyword(null,"asking-price","asking-price",1304329161),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"living-area","living-area",1377243120),new cljs.core.Keyword(null,"plot-area","plot-area",98036883),new cljs.core.Keyword(null,"postal-city","postal-city",2130329622),new cljs.core.Keyword(null,"street-address","street-address",1974914551),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"extra-values","extra-values",1671557498),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259),new cljs.core.Keyword(null,"housing-form","housing-form",-1885695809)],[hitteri.clipboard_ui.hemnet.listing.rooms_text((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"numberOfRooms","numberOfRooms",443726812).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"rooms","rooms",1196158176).cljs$core$IFn$_invoke$arity$1(node);
}
})()),hitteri.clipboard_ui.hemnet.listing.best_image_url_from_node(node),hitteri.clipboard_ui.hemnet.listing.listing_title_from_node(node),hitteri.clipboard_ui.hemnet.listing.formatted_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"askingPrice","askingPrice",56942313).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"asking_price","asking_price",-848112810).cljs$core$IFn$_invoke$arity$1(node);
}
})()),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords),hitteri.clipboard_ui.hemnet.listing.formatted_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"livingArea","livingArea",142736680).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"living_area","living_area",-259473013).cljs$core$IFn$_invoke$arity$1(node);
}
})()),hitteri.clipboard_ui.hemnet.listing.formatted_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"landArea","landArea",-1780399106).cljs$core$IFn$_invoke$arity$1(node);
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
})()),hitteri.clipboard_ui.hemnet.listing.postal_city_from_node(node),(function (){var or__5025__auto__ = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"streetAddress","streetAddress",-1932799156).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"street_address","street_address",1563462487).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return hitteri.clipboard_ui.hemnet.listing.listing_title_from_node(node);
}
}
})(),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords),((cljs.core.seq(extras))?extras:cljs.core.vec(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hitteri.clipboard_ui.hemnet.listing.non_blank,(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"extraValues","extraValues",-1595737138).cljs$core$IFn$_invoke$arity$1(node);
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
})()))),(function (){var or__5025__auto__ = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"agentUrl","agentUrl",523424011).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var temp__5825__auto__ = (function (){var or__5025__auto____$2 = new cljs.core.Keyword(null,"broker","broker",2062144723).cljs$core$IFn$_invoke$arity$1(node);
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
if(cljs.core.truth_(temp__5825__auto__)){
var broker = temp__5825__auto__;
if(cljs.core.map_QMARK_(broker)){
var or__5025__auto____$2 = hitteri.clipboard_ui.hemnet.listing.non_blank(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(broker,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profilePage","profilePage",785839990),new cljs.core.Keyword(null,"href","href",-793805698)], null)));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"profilePageUrl","profilePageUrl",1164972886).cljs$core$IFn$_invoke$arity$1(broker));
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(broker));
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
})(),hitteri.clipboard_ui.hemnet.listing.housing_form_text((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"housingForm","housingForm",2057149162).cljs$core$IFn$_invoke$arity$1(node);
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
hitteri.clipboard_ui.hemnet.listing.normalize_listing_payload = (function hitteri$clipboard_ui$hemnet$listing$normalize_listing_payload(listing){
if(cljs.core.map_QMARK_(listing)){
return hitteri.clipboard_ui.hemnet.listing.normalize_listing_node(listing);
} else {
return null;
}
});
/**
 * True when normalized listing includes latitude and longitude.
 */
hitteri.clipboard_ui.hemnet.listing.listing_has_coords_QMARK_ = (function hitteri$clipboard_ui$hemnet$listing$listing_has_coords_QMARK_(listing){
return ((cljs.core.map_QMARK_(listing)) && (((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(listing) === 'number') && (typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(listing) === 'number'))));
});
/**
 * True when listing has both street address and postal city for geocoding.
 */
hitteri.clipboard_ui.hemnet.listing.listing_complete_address_QMARK_ = (function hitteri$clipboard_ui$hemnet$listing$listing_complete_address_QMARK_(listing){
var and__5023__auto__ = cljs.core.map_QMARK_(listing);
if(and__5023__auto__){
var and__5023__auto____$1 = hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"street-address","street-address",1974914551).cljs$core$IFn$_invoke$arity$1(listing));
if(cljs.core.truth_(and__5023__auto____$1)){
return hitteri.clipboard_ui.hemnet.listing.non_blank(new cljs.core.Keyword(null,"postal-city","postal-city",2130329622).cljs$core$IFn$_invoke$arity$1(listing));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});

//# sourceMappingURL=hitteri.clipboard_ui.hemnet.listing.js.map
