goog.provide('replicant.core');
replicant.core.parse_tag = (function replicant$core$parse_tag(tag){
var ns = cljs.core.namespace(tag);
var tag__$1 = cljs.core.name(tag);
var id_index = (function (){var index = tag__$1.indexOf("#");
if((index > (0))){
return index;
} else {
return null;
}
})();
var class_index = (function (){var index = tag__$1.indexOf(".");
if((index > (0))){
return index;
} else {
return null;
}
})();
var tag_name = (function (){var G__42103 = (cljs.core.truth_(id_index)?tag__$1.substring((0),id_index):(cljs.core.truth_(class_index)?tag__$1.substring((0),class_index):tag__$1
));
if(cljs.core.truth_(ns)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,G__42103);
} else {
return G__42103;
}
})();
var id = (cljs.core.truth_(id_index)?(cljs.core.truth_(class_index)?tag__$1.substring((id_index + (1)),class_index):tag__$1.substring((id_index + (1)))):null);
var classes = (cljs.core.truth_(class_index)?cljs.core.seq(tag__$1.substring((class_index + (1))).split(".")):null);
return [tag_name,id,classes];
});
/**
 * Hiccup symbols can include tag name, id and classes. The argument map is
 *   optional. This function finds the important bits of the hiccup data structure
 *   and returns a "headers" tuple with a stable position for:
 * 
 *   - tag-name
 *   - id from the hiccup symbol
 *   - classes from the hiccup symbol
 *   - key
 *   - attributes
 *   - children
 *   - namespace
 *   - original s-expression
 * 
 *   Attributes and children are completely untouched. Headers can be used to
 *   quickly determine tag name and key, or sent to `get-attrs` and
 *   `get-children` for usable information about those things.
 * 
 *   Returns a tuple (instead of a map) for speed.
 * 
 *   - `sexp` is the hiccup to parse
 * 
 *   - `ns` is the namespace of the elements, used for SVG elements. The SVG
 *   element has an explicit namespace, which needs to be set on all of its
 *   children, so they can all be created with createElementNS etc.
 */
replicant.core.get_hiccup_headers = (function replicant$core$get_hiccup_headers(ns,sexp){
if(cljs.core.truth_(sexp)){
if(replicant.hiccup.hiccup_QMARK_(sexp)){
var sym = cljs.core.first(sexp);
var args = cljs.core.rest(sexp);
var has_args_QMARK_ = cljs.core.map_QMARK_(cljs.core.first(args));
var attrs = ((has_args_QMARK_)?cljs.core.first(args):cljs.core.PersistentArrayMap.EMPTY);
if((!(cljs.core.not(cljs.core.re_find(/#($|\.)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)))))){
var fn__41765__auto___42325 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42326 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42327 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42104 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = sexp;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," contains an empty id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Either complete the id or remove the # character."], null);
var G__42104__$1 = (cljs.core.truth_(fn__41765__auto___42325)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42104,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42325):G__42104);
var G__42104__$2 = (cljs.core.truth_(alias__41766__auto___42326)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42104__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42326):G__42104__$1);
if(cljs.core.truth_(fd__41767__auto___42327)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42104__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42327);
} else {
return G__42104__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/#[^a-zA-Z_\.]/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)))))){
var fn__41765__auto___42330 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42331 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42332 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42105 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = sexp;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," contains an invalid id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"IDs must start with a letter."], null);
var G__42105__$1 = (cljs.core.truth_(fn__41765__auto___42330)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42105,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42330):G__42105);
var G__42105__$2 = (cljs.core.truth_(alias__41766__auto___42331)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42105__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42331):G__42105__$1);
if(cljs.core.truth_(fd__41767__auto___42332)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42105__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42332);
} else {
return G__42105__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/\.$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)))))){
var fn__41765__auto___42337 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42338 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42339 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42106 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = sexp;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," contains an empty class"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"This may cause a DOMException and is considered a coding error. Replicant will not sacrifice performance to work around it."], null);
var G__42106__$1 = (cljs.core.truth_(fn__41765__auto___42337)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42106,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42337):G__42106);
var G__42106__$2 = (cljs.core.truth_(alias__41766__auto___42338)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42106__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42338):G__42106__$1);
if(cljs.core.truth_(fd__41767__auto___42339)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42106__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42339);
} else {
return G__42106__$2;
}
})());
} else {
}

var pt__41576__auto__ = replicant.core.parse_tag(sym);
var G__42107 = pt__41576__auto__;
G__42107.push((function (){var temp__5825__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5825__auto__)){
var k__41570__auto__ = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__41576__auto__[(0)]),k__41570__auto__], null);
} else {
return null;
}
})());

G__42107.push(attrs);

G__42107.push(((has_args_QMARK_)?cljs.core.rest(args):args));

G__42107.push(ns);

G__42107.push(sexp);

G__42107.push(null);

G__42107.push(null);

return G__42107;
} else {
var text__41583__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexp);
return (new Array(null,null,null,null,null,null,null,text__41583__auto__,text__41583__auto__,null));
}
} else {
return null;
}
});
replicant.core.get_classes = (function replicant$core$get_classes(classes){
if((classes instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(classes)], null);
} else {
if((classes instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(classes)], null);
} else {
if(cljs.core.empty_QMARK_(classes)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.coll_QMARK_(classes)){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (class$){
if(cljs.core.truth_(class$)){
if((class$ instanceof cljs.core.Keyword)){
return cljs.core.name(class$);
} else {
if((class$ instanceof cljs.core.Symbol)){
return cljs.core.name(class$);
} else {
if(typeof class$ === 'string'){
return cljs.core.not_empty(class$.trim());
} else {
return null;
}
}
}
} else {
return null;
}
}),classes);
} else {
if(typeof classes === 'string'){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__42108_SHARP_){
return cljs.core.not_empty(p1__42108_SHARP_.trim());
}),classes.split(" "));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("class name is neither string, keyword, or a collection of those",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null));

}
}
}
}
}
});
replicant.core.skip_pixelize_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),null,new cljs.core.Keyword(null,"box-flex-group","box-flex-group",-1468550335),null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"column-count","column-count",1235131236),null,new cljs.core.Keyword(null,"flex-negative","flex-negative",-1543996476),null,new cljs.core.Keyword(null,"tab-size","tab-size",-1265790523),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"flex-order","flex-order",-621251126),null,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),null,new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),null,new cljs.core.Keyword(null,"flex","flex",-1425124628),null,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),null,new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),null,new cljs.core.Keyword(null,"orphans","orphans",1913357231),null,new cljs.core.Keyword(null,"widows","widows",1989591025),null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"box-ordinal-group","box-ordinal-group",201694774),null,new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),null,new cljs.core.Keyword(null,"line-clamp","line-clamp",-1079334403),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null,new cljs.core.Keyword(null,"flex-positive","flex-positive",-239614242),null,new cljs.core.Keyword(null,"box-flex","box-flex",-831196194),null], null), null);
/**
 * Converts string values for the style attribute to a map of keyword keys and
 *   string values.
 */
replicant.core.explode_styles = (function replicant$core$explode_styles(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (kv){
var vec__42110 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42109_SHARP_){
return p1__42109_SHARP_.trim();
}),kv.split(":"));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42110,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42110,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
}),s.split(";")));
});
replicant.core.get_style_val = (function replicant$core$get_style_val(attr,v){
if(typeof v === 'number'){
if(cljs.core.truth_((replicant.core.skip_pixelize_attrs.cljs$core$IFn$_invoke$arity$1 ? replicant.core.skip_pixelize_attrs.cljs$core$IFn$_invoke$arity$1(attr) : replicant.core.skip_pixelize_attrs.call(null,attr)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"px"].join('');
}
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(v);
} else {
return v;

}
}
});
replicant.core.prep_attrs = (function replicant$core$prep_attrs(attrs,id,classes){
var classes__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(replicant.core.get_classes(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs)),classes);
var G__42113 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009)], 0));
var G__42113__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42113,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__42113);
var G__42113__$2 = ((cljs.core.seq(classes__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42113__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes__$1):G__42113__$1);
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__42113__$2,new cljs.core.Keyword(null,"style","style",-496642736),replicant.core.explode_styles);
} else {
return G__42113__$2;
}
});
/**
 * Given `headers` as produced by `get-hiccup-headers`, returns a map of all HTML
 *   attributes.
 */
replicant.core.get_attrs = (function replicant$core$get_attrs(headers){
if((!((!(cljs.core.contains_QMARK_((headers[(4)]),new cljs.core.Keyword(null,"className","className",-1983287057))))))){
var fn__41765__auto___42352 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42353 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42354 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42114 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Use :class, not :className",new cljs.core.Keyword(null,"message","message",-406056002),":className is not supported, please use :class instead. It takes a keyword, a string, or a collection of either of those."], null);
var G__42114__$1 = (cljs.core.truth_(fn__41765__auto___42352)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42114,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42352):G__42114);
var G__42114__$2 = (cljs.core.truth_(alias__41766__auto___42353)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42114__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42353):G__42114__$1);
if(cljs.core.truth_(fd__41767__auto___42354)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42114__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42354);
} else {
return G__42114__$2;
}
})());
} else {
}

if((!((function (){var class__41989__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return (((!(typeof class__41989__auto__ === 'string'))) || ((class__41989__auto__.indexOf(" ") < (0))));
})()))){
var fn__41765__auto___42363 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42364 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42365 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42115 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid space separated :class strings",new cljs.core.Keyword(null,"message","message",-406056002),(function (){var class__41989__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return [":class supports collections of keywords and/or strings as classes. These perform better, and are usually more convenient to work with. Solve by converting ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class__41989__auto__], 0))," to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(class__41989__auto__.split(" "))], 0))].join('');
})()], null);
var G__42115__$1 = (cljs.core.truth_(fn__41765__auto___42363)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42115,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42363):G__42115);
var G__42115__$2 = (cljs.core.truth_(alias__41766__auto___42364)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42115__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42364):G__42115__$1);
if(cljs.core.truth_(fd__41767__auto___42365)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42115__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42365);
} else {
return G__42115__$2;
}
})());
} else {
}

if((!((!(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1((headers[(4)])) === 'string'))))){
var fn__41765__auto___42397 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42398 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42399 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42116 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid string styles",new cljs.core.Keyword(null,"message","message",-406056002),":style supports structured maps of CSS property/value pairs. Strings must be parsed, so they're both slower and harder to read and write."], null);
var G__42116__$1 = (cljs.core.truth_(fn__41765__auto___42397)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42116,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42397):G__42116);
var G__42116__$2 = (cljs.core.truth_(alias__41766__auto___42398)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42116__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42398):G__42116__$1);
if(cljs.core.truth_(fd__41767__auto___42399)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42116__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42399);
} else {
return G__42116__$2;
}
})());
} else {
}

return replicant.core.prep_attrs((headers[(4)]),(headers[(1)]),(headers[(2)]));
});
replicant.core.merge_attrs = (function replicant$core$merge_attrs(attrs,overrides){
var G__42117 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(overrides,new cljs.core.Keyword(null,"style","style",-496642736))], 0));
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides);
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__42117,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides));
} else {
return G__42117;
}
});
replicant.core.get_mounting_attrs = (function replicant$core$get_mounting_attrs(headers){
var temp__5823__auto__ = new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5823__auto__)){
var mounting = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs(headers),(function (){var headers__$1 = (function (){var G__42118 = headers;
if(cljs.core.truth_(mounting)){
var headers__41590__auto__ = G__42118;
(headers__41590__auto__[(4)] = replicant.core.merge_attrs((headers__41590__auto__[(4)]),mounting));

return headers__41590__auto__;
} else {
return G__42118;
}
})();
return replicant.core.prep_attrs((headers__$1[(4)]),(headers__$1[(1)]),(headers__$1[(2)]));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs(headers)], null);
}
});
replicant.core.get_unmounting_attrs = (function replicant$core$get_unmounting_attrs(vdom){
if(cljs.core.truth_((vdom[(6)]))){
return replicant.core.prep_attrs(replicant.core.merge_attrs((vdom[(3)]),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2((vdom[(7)]),(1)))),null,(vdom[(2)]));
} else {
return null;
}
});
replicant.core.flatten_seqs_STAR_ = (function replicant$core$flatten_seqs_STAR_(xs,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.seq_QMARK_(x)){
return (replicant.core.flatten_seqs_STAR_.cljs$core$IFn$_invoke$arity$2 ? replicant.core.flatten_seqs_STAR_.cljs$core$IFn$_invoke$arity$2(x,coll) : replicant.core.flatten_seqs_STAR_.call(null,x,coll));
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(coll,x);

}
}),null,xs);
});
replicant.core.flatten_seqs = (function replicant$core$flatten_seqs(xs){
var coll = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
replicant.core.flatten_seqs_STAR_(xs,coll);

return cljs.core.persistent_BANG_(coll);
});
replicant.core.flatten_map_seqs_STAR_ = (function replicant$core$flatten_map_seqs_STAR_(f,xs,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.seq_QMARK_(x)){
return (replicant.core.flatten_map_seqs_STAR_.cljs$core$IFn$_invoke$arity$3 ? replicant.core.flatten_map_seqs_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,coll) : replicant.core.flatten_map_seqs_STAR_.call(null,f,x,coll));
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(coll,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));

}
}),null,xs);
});
replicant.core.flatten_map_seqs = (function replicant$core$flatten_map_seqs(f,xs){
var coll = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
replicant.core.flatten_map_seqs_STAR_(f,xs,coll);

return cljs.core.persistent_BANG_(coll);
});
/**
 * Given an optional tag namespace `ns` (e.g. for SVG nodes) and `headers`, as
 *   produced by `get-hiccup-headers`, returns a flat collection of children as
 *   "hiccup headers". Children will carry the `ns`, if any.
 */
replicant.core.get_children = (function replicant$core$get_children(headers,ns){
if(cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers[(4)])))){
return null;
} else {
return replicant.core.flatten_map_seqs((function (p1__42119_SHARP_){
var G__42120 = p1__42119_SHARP_;
if((G__42120 == null)){
return null;
} else {
return replicant.core.get_hiccup_headers(ns,G__42120);
}
}),(headers[(5)]));
}
});
/**
 * Like `get-children` but returns a tuple of `[children ks]` where `ks` is a set
 *   of the keys in `children`.
 */
replicant.core.get_children_ks = (function replicant$core$get_children_ks(headers,ns){
var vec__42121 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__42124,hiccup){
var vec__42125 = p__42124;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42125,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42125,(1),null);
if(cljs.core.truth_(hiccup)){
var headers__$1 = replicant.core.get_hiccup_headers(ns,hiccup);
var k = (headers__$1[(3)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,headers__$1),(function (){var G__42128 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__42128,k);
} else {
return G__42128;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY)], null),replicant.core.flatten_seqs((headers[(5)])));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42121,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42121,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks)], null);
});
replicant.core._STAR_dispatch_STAR_ = null;
replicant.core.build_event_map = (function replicant$core$build_event_map(e){
var node = e.target;
var G__42129 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","dom-event","replicant.trigger/dom-event",930136738),new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512),e], null);
var G__42129__$1 = (cljs.core.truth_(node)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42129,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node):G__42129);
if(cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42129__$1,new cljs.core.Keyword("replicant","dispatch","replicant/dispatch",2079272115),replicant.core._STAR_dispatch_STAR_);
} else {
return G__42129__$1;
}
});
/**
 * Returns the function to use for handling DOM events. Uses `handler` directly
 *   when it's a function or a string (assumed to be inline JavaScript, not really
 *   recommended), or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function. 
 */
replicant.core.get_event_handler = (function replicant$core$get_event_handler(handler,event,options){
var or__5025__auto__ = ((((cljs.core.fn_QMARK_(handler)) || (((cljs.core.var_QMARK_(handler)) && (cljs.core.fn_QMARK_(cljs.core.deref(handler)))))))?(cljs.core.truth_(new cljs.core.Keyword("replicant.event","wrap-handler?","replicant.event/wrap-handler?",845655928).cljs$core$IFn$_invoke$arity$1(options))?(function (e){
var G__42130 = replicant.core.build_event_map(e);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__42130) : handler.call(null,G__42130));
}):handler):null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = ((cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_))?(function (e){
return replicant.core._STAR_dispatch_STAR_.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replicant.core.build_event_map(e),new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146),e),handler);
}):null);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = ((typeof handler === 'string')?handler:null);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot use non-function event handler when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
}
}
}
});
/**
 * Returns the function to use to dispatch life-cycle hooks on an element. Uses
 *   `handler` directly when it's a function, or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function.
 */
replicant.core.get_life_cycle_hook = (function replicant$core$get_life_cycle_hook(handler){
var or__5025__auto__ = ((cljs.core.fn_QMARK_(handler))?handler:null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (cljs.core.truth_((function (){var and__5023__auto__ = handler;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_);
} else {
return and__5023__auto__;
}
})())?(function (e){
return replicant.core._STAR_dispatch_STAR_.call(null,e,handler);
}):null);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
if(cljs.core.truth_(handler)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot use non-function life-cycle hook when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
} else {
return null;
}
}
}
});
replicant.core.call_hook = (function replicant$core$call_hook(renderer,p__42131){
var vec__42132 = p__42131;
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42132,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42132,(1),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42132,(2),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42132,(3),null);
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42132,(4),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42132,(5),null);
var f = replicant.core.get_life_cycle_hook(hook);
var life_cycle = (((old == null))?new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865):(((new$ == null))?new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184):new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235)
));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),k)) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235))))))))))){
var G__42135 = (function (){var G__42136 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","life-cycle","replicant.trigger/life-cycle",-205660972),new cljs.core.Keyword("replicant","life-cycle","replicant/life-cycle",1802888458),life_cycle,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node,new cljs.core.Keyword("replicant","remember","replicant/remember",809947829),(function replicant$core$call_hook_$_remember(memory){
return replicant.protocols.remember(renderer,node,memory);
})], null);
var G__42136__$1 = (cljs.core.truth_(details)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42136,new cljs.core.Keyword("replicant","details","replicant/details",-1846218867),details):G__42136);
var G__42136__$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42136__$1,new cljs.core.Keyword("replicant","memory","replicant/memory",-1882688464),replicant.protocols.recall(renderer,node)):G__42136__$1);
if(cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42136__$2,new cljs.core.Keyword("replicant","dispatch","replicant/dispatch",2079272115),replicant.core._STAR_dispatch_STAR_);
} else {
return G__42136__$2;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42135) : f.call(null,G__42135));
} else {
return null;
}
});
/**
 * Register the life-cycle hooks from the corresponding virtual DOM node to call
 *   in `impl`, if any. `details` is a vector of keywords that provide some detail
 *   about why the hook is invoked.
 */
replicant.core.register_hooks = (function replicant$core$register_hooks(var_args){
var args__5755__auto__ = [];
var len__5749__auto___42490 = arguments.length;
var i__5750__auto___42493 = (0);
while(true){
if((i__5750__auto___42493 < len__5749__auto___42490)){
args__5755__auto__.push((arguments[i__5750__auto___42493]));

var G__42496 = (i__5750__auto___42493 + (1));
i__5750__auto___42493 = G__42496;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (p__42141,node,headers,p__42142){
var map__42143 = p__42141;
var map__42143__$1 = cljs.core.__destructure_map(map__42143);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42143__$1,new cljs.core.Keyword(null,"hooks","hooks",-413590103));
var vec__42144 = p__42142;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42144,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42144,(1),null);
var target = (cljs.core.truth_(headers)?(headers[(4)]):(vdom[(3)]));
var new_hooks = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (life_cycle_key){
var temp__5825__auto__ = (life_cycle_key.cljs$core$IFn$_invoke$arity$1 ? life_cycle_key.cljs$core$IFn$_invoke$arity$1(target) : life_cycle_key.call(null,target));
if(cljs.core.truth_(temp__5825__auto__)){
var hook = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [life_cycle_key,hook], null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753),new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394)], null));
if(cljs.core.empty_QMARK_(new_hooks)){
return null;
} else {
var headers_sexp = (function (){var G__42147 = headers;
if((G__42147 == null)){
return null;
} else {
return (G__42147[(7)]);
}
})();
var vdom_sexp = (function (){var G__42148 = vdom;
if((G__42148 == null)){
return null;
} else {
return (G__42148[(7)]);
}
})();
return cljs.core._vreset_BANG_(hooks,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(hooks),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42149){
var vec__42150 = p__42149;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42150,(0),null);
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42150,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook,k,node,headers_sexp,vdom_sexp,details], null);
}),new_hooks)));
}
}));

(replicant.core.register_hooks.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.register_hooks.cljs$lang$applyTo = (function (seq42137){
var G__42138 = cljs.core.first(seq42137);
var seq42137__$1 = cljs.core.next(seq42137);
var G__42139 = cljs.core.first(seq42137__$1);
var seq42137__$2 = cljs.core.next(seq42137__$1);
var G__42140 = cljs.core.first(seq42137__$2);
var seq42137__$3 = cljs.core.next(seq42137__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42138,G__42139,G__42140,seq42137__$3);
}));

replicant.core.register_mount = (function replicant$core$register_mount(p__42153,node,mounting_attrs,attrs){
var map__42154 = p__42153;
var map__42154__$1 = cljs.core.__destructure_map(map__42154);
var mounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42154__$1,new cljs.core.Keyword(null,"mounts","mounts",-791474425));
return cljs.core._vreset_BANG_(mounts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(mounts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,mounting_attrs,attrs], null)));
});
replicant.core.update_styles = (function replicant$core$update_styles(renderer,el,new_styles,old_styles){
var new_ks = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42155_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__42155_SHARP_) == null);
}),cljs.core.keys(new_styles)));
var old_ks = cljs.core.set(cljs.core.keys(old_styles));
cljs.core.run_BANG_((function (p1__42156_SHARP_){
return replicant.protocols.remove_style(renderer,el,p1__42156_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new_ks,old_ks));

return cljs.core.run_BANG_((function (p1__42157_SHARP_){
var new_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__42157_SHARP_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_style,cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_styles,p1__42157_SHARP_))){
if((!((p1__42157_SHARP_ instanceof cljs.core.Keyword)))){
var fn__41765__auto___42543 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42544 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42545 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42158 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42157_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will ","technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42157_SHARP_)," and once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42157_SHARP_)))," may produce undesired results. Your safest option is to always use keywords."].join('')], null);
var G__42158__$1 = (cljs.core.truth_(fn__41765__auto___42543)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42158,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42543):G__42158);
var G__42158__$2 = (cljs.core.truth_(alias__41766__auto___42544)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42158__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42544):G__42158__$1);
if(cljs.core.truth_(fd__41767__auto___42545)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42158__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42545);
} else {
return G__42158__$2;
}
})());
} else {
}

if((!((function (){var name__42028__auto__ = cljs.core.name(p1__42157_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__42028__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__42028__auto__,clojure.string.lower_case(name__42028__auto__))));
})()))){
var fn__41765__auto___42566 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42567 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42568 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42159 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__42157_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42157_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__42159__$1 = (cljs.core.truth_(fn__41765__auto___42566)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42159,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42566):G__42159);
var G__42159__$2 = (cljs.core.truth_(alias__41766__auto___42567)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42159__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42567):G__42159__$1);
if(cljs.core.truth_(fd__41767__auto___42568)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42159__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42568);
} else {
return G__42159__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__42157_SHARP_,replicant.core.get_style_val(p1__42157_SHARP_,new_style));
} else {
return null;
}
}),new_ks);
});
replicant.core.update_classes = (function replicant$core$update_classes(renderer,el,new_classes,old_classes){
cljs.core.run_BANG_((function (p1__42160_SHARP_){
return replicant.protocols.remove_class(renderer,el,p1__42160_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new_classes),old_classes));

return cljs.core.run_BANG_((function (p1__42161_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__42161_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(old_classes),new_classes));
});
replicant.core.get_event_handler_options = (function replicant$core$get_event_handler_options(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,k){
var G__42162 = res;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("replicant.event",cljs.core.namespace(k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42162,cljs.core.name(k),(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(m) : k.call(null,m)));
} else {
return G__42162;
}
}),null,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("replicant.event","wrap-handler?","replicant.event/wrap-handler?",845655928)], 0))));
});
replicant.core.add_event_listeners = (function replicant$core$add_event_listeners(renderer,el,val){
return cljs.core.run_BANG_((function (p__42163){
var vec__42164 = p__42163;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42164,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42164,(1),null);
if((!((function (){var event__42000__auto__ = cljs.core.name(event);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("DOMContentLoaded",event__42000__auto__)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event__42000__auto__,clojure.string.lower_case(event__42000__auto__))));
})()))){
var fn__41765__auto___42599 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42600 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42601 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42167 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(event)))),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Most event names should be in all lower-case. Replicant passes your event names directly to addEventListener, and mis-cased event names will fail silently."], null);
var G__42167__$1 = (cljs.core.truth_(fn__41765__auto___42599)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42167,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42599):G__42167);
var G__42167__$2 = (cljs.core.truth_(alias__41766__auto___42600)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42167__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42600):G__42167__$1);
if(cljs.core.truth_(fd__41767__auto___42601)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42167__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42601);
} else {
return G__42167__$2;
}
})());
} else {
}

var temp__5823__auto__ = new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006).cljs$core$IFn$_invoke$arity$1(handler);
if(cljs.core.truth_(temp__5823__auto__)){
var eh = temp__5823__auto__;
var temp__5825__auto__ = replicant.core.get_event_handler(eh,event,handler);
if(cljs.core.truth_(temp__5825__auto__)){
var eh__$1 = temp__5825__auto__;
return replicant.protocols.set_event_handler(renderer,el,event,eh__$1,replicant.core.get_event_handler_options(handler));
} else {
return null;
}
} else {
var temp__5825__auto__ = replicant.core.get_event_handler(handler,event,null);
if(cljs.core.truth_(temp__5825__auto__)){
var handler__$1 = temp__5825__auto__;
return replicant.protocols.set_event_handler(renderer,el,event,handler__$1,null);
} else {
return null;
}
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),val));
});
replicant.core.update_event_listeners = (function replicant$core$update_event_listeners(renderer,el,new_handlers,old_handlers){
return cljs.core.run_BANG_((function (event){
var new_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_handlers,event);
var old_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_handlers,event);
var old_opts = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_handler,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006)))?cljs.core.not_empty(replicant.core.get_event_handler_options(old_handler)):null);
var new_opts = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_handler,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006)))?cljs.core.not_empty(replicant.core.get_event_handler_options(new_handler)):null);
if(cljs.core.truth_((function (){var and__5023__auto__ = old_handler;
if(cljs.core.truth_(and__5023__auto__)){
return (((new_handler == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_opts,new_opts)));
} else {
return and__5023__auto__;
}
})())){
replicant.protocols.remove_event_handler(renderer,el,event,old_opts);
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = new_handler;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_handler,old_handler);
} else {
return and__5023__auto__;
}
})())){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_handler,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006));
if(cljs.core.truth_(temp__5823__auto__)){
var handler = temp__5823__auto__;
return replicant.protocols.set_event_handler(renderer,el,event,replicant.core.get_event_handler(handler,event,new_handler),new_opts);
} else {
return replicant.protocols.set_event_handler(renderer,el,event,replicant.core.get_event_handler(new_handler,event,null),null);
}
} else {
return null;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_handlers)),cljs.core.keys(old_handlers)));
});
replicant.core.xlinkns = "http://www.w3.org/1999/xlink";
replicant.core.xmlns = "http://www.w3.org/XML/1998/namespace";
replicant.core.stringify = (function replicant$core$stringify(x){
return [(function (){var temp__5825__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return [ns,"/"].join('');
} else {
return null;
}
})(),cljs.core.name(x)].join('');
});
replicant.core.set_attr_val = (function replicant$core$set_attr_val(renderer,el,attr,v){
var an = cljs.core.name(attr);
if((!((!(clojure.string.starts_with_QMARK_(cljs.core.name(attr),"on")))))){
var fn__41765__auto___42658 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42659 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42660 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42168 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Set event listeners in the :on map",new cljs.core.Keyword(null,"message","message",-406056002),["Event handler attributes are not supported. Instead of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," set :on {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash(cljs.core.name(attr).substring((2)))))," ,,,}"].join('')], null);
var G__42168__$1 = (cljs.core.truth_(fn__41765__auto___42658)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42168,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42658):G__42168);
var G__42168__$2 = (cljs.core.truth_(alias__41766__auto___42659)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42168__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42659):G__42168__$1);
if(cljs.core.truth_(fd__41767__auto___42660)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42168__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42660);
} else {
return G__42168__$2;
}
})());
} else {
}

if(cljs.core.not(cljs.core.re_find(/^[a-zA-Z\-:_][a-zA-Z0-9\-:\._]*$/,cljs.core.name(attr)))){
var fn__41765__auto___42681 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42682 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42683 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42169 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Invalid attribute name ",cljs.core.name(attr)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var attr__42039__auto__ = cljs.core.name(attr);
return ["Tried to set attribute ",attr__42039__auto__," to value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),". This will fail","horribly in the browser because ",(cljs.core.truth_(cljs.core.re_find(/^[0-9]/,attr__42039__auto__))?" it starts with a number":(cljs.core.truth_(cljs.core.re_find(/^\./,attr__42039__auto__))?" it starts with a dot":[" it contains the character ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/[^a-zA-Z0-9\-:\._]/,attr__42039__auto__))].join('')
)),", which isn't allowed as per the HTML spec."].join('');
})()], null);
var G__42169__$1 = (cljs.core.truth_(fn__41765__auto___42681)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42169,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42681):G__42169);
var G__42169__$2 = (cljs.core.truth_(alias__41766__auto___42682)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42169__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42682):G__42169__$1);
if(cljs.core.truth_(fd__41767__auto___42683)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42169__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42683);
} else {
return G__42169__$2;
}
})());
} else {
}

return replicant.protocols.set_attribute(renderer,el,an,(function (){var G__42170 = v;
if((((v instanceof cljs.core.Keyword)) || ((v instanceof cljs.core.Symbol)))){
return replicant.core.stringify(G__42170);
} else {
return G__42170;
}
})(),(function (){var G__42171 = cljs.core.PersistentArrayMap.EMPTY;
var G__42171__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xml:")))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42171,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xmlns):G__42171);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xlink:"))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42171__$1,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xlinkns);
} else {
return G__42171__$1;
}
})());
});
replicant.core.update_attr = (function replicant$core$update_attr(renderer,el,attr,new$,old){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__42172 = attr;
var G__42172__$1 = (((G__42172 instanceof cljs.core.Keyword))?G__42172.fqn:null);
switch (G__42172__$1) {
case "style":
return replicant.core.update_styles(renderer,el,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(old));

break;
case "classes":
return replicant.core.update_classes(renderer,el,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(old));

break;
case "on":
return replicant.core.update_event_listeners(renderer,el,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(old));

break;
default:
var temp__5823__auto__ = (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(new$) : attr.call(null,new$));
if(cljs.core.truth_(temp__5823__auto__)){
var v = temp__5823__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,(attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(old) : attr.call(null,old)))){
return replicant.core.set_attr_val(renderer,el,attr,v);
} else {
return null;
}
} else {
return replicant.protocols.remove_attribute(renderer,el,cljs.core.name(attr));
}

}
}
});
replicant.core.update_attributes = (function replicant$core$update_attributes(renderer,el,new_attrs,old_attrs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__42174_SHARP_,p2__42173_SHARP_){
return replicant.core.update_attr(renderer,el,p2__42173_SHARP_,new_attrs,old_attrs);
}),null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_attrs)),cljs.core.keys(old_attrs)));
});
replicant.core.reconcile_attributes = (function replicant$core$reconcile_attributes(renderer,el,new_attrs,old_attrs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_attrs,old_attrs)){
return false;
} else {
replicant.core.update_attributes(renderer,el,new_attrs,old_attrs);

return true;
}
});
replicant.core.set_styles = (function replicant$core$set_styles(renderer,el,new_styles){
return cljs.core.run_BANG_((function (p1__42175_SHARP_){
if((!((p1__42175_SHARP_ instanceof cljs.core.Keyword)))){
var fn__41765__auto___42748 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42749 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42750 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42176 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42175_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will ","technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42175_SHARP_)," and once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42175_SHARP_)))," may produce undesired results. Your safest option is to always use keywords."].join('')], null);
var G__42176__$1 = (cljs.core.truth_(fn__41765__auto___42748)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42176,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42748):G__42176);
var G__42176__$2 = (cljs.core.truth_(alias__41766__auto___42749)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42176__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42749):G__42176__$1);
if(cljs.core.truth_(fd__41767__auto___42750)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42176__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42750);
} else {
return G__42176__$2;
}
})());
} else {
}

if((!((function (){var name__42028__auto__ = cljs.core.name(p1__42175_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__42028__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__42028__auto__,clojure.string.lower_case(name__42028__auto__))));
})()))){
var fn__41765__auto___42770 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42771 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42772 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42177 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__42175_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42175_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__42177__$1 = (cljs.core.truth_(fn__41765__auto___42770)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42177,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42770):G__42177);
var G__42177__$2 = (cljs.core.truth_(alias__41766__auto___42771)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42177__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42771):G__42177__$1);
if(cljs.core.truth_(fd__41767__auto___42772)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42177__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42772);
} else {
return G__42177__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__42175_SHARP_,replicant.core.get_style_val(p1__42175_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__42175_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_styles,cljs.core.keys(new_styles)));
});
replicant.core.set_classes = (function replicant$core$set_classes(renderer,el,new_classes){
return cljs.core.run_BANG_((function (p1__42178_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__42178_SHARP_);
}),new_classes);
});
replicant.core.set_attr = (function replicant$core$set_attr(renderer,el,attr,new$){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__42179 = attr;
var G__42179__$1 = (((G__42179 instanceof cljs.core.Keyword))?G__42179.fqn:null);
switch (G__42179__$1) {
case "style":
return replicant.core.set_styles(renderer,el,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new$));

break;
case "classes":
return replicant.core.set_classes(renderer,el,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(new$));

break;
case "on":
return replicant.core.add_event_listeners(renderer,el,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new$));

break;
default:
return replicant.core.set_attr_val(renderer,el,attr,(attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(new$) : attr.call(null,new$)));

}
}
});
replicant.core.set_attributes = (function replicant$core$set_attributes(renderer,el,new_attrs){
cljs.core.run_BANG_((function (p__42180){
var vec__42181 = p__42180;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42181,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42181,(1),null);
if(cljs.core.truth_(v)){
return replicant.core.set_attr(renderer,el,attr,new_attrs);
} else {
return null;
}
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new_attrs,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-value","default-value",232220170)], 0)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new_attrs))){
replicant.core.set_attr(renderer,el,new cljs.core.Keyword(null,"value","value",305978217),new_attrs);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"default-value","default-value",232220170).cljs$core$IFn$_invoke$arity$1(new_attrs))){
return replicant.core.set_attr(renderer,el,new cljs.core.Keyword(null,"default-value","default-value",232220170),new_attrs);
} else {
return null;
}
});
replicant.core.render_default_alias = (function replicant$core$render_default_alias(tag_name,_attrs,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-replicant-error","data-replicant-error",1583668098),["Undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)].join('')], null),(function (){var iter__5503__auto__ = (function replicant$core$render_default_alias_$_iter__42184(s__42185){
return (new cljs.core.LazySeq(null,(function (){
var s__42185__$1 = s__42185;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__42185__$1);
if(temp__5825__auto__){
var s__42185__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42185__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__42185__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__42187 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__42186 = (0);
while(true){
if((i__42186 < size__5502__auto__)){
var child = cljs.core._nth(c__5501__auto__,i__42186);
cljs.core.chunk_append(b__42187,(function (){var G__42188 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__42188], 0));
} else {
return G__42188;
}
})());

var G__42784 = (i__42186 + (1));
i__42186 = G__42784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42187),replicant$core$render_default_alias_$_iter__42184(cljs.core.chunk_rest(s__42185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42187),null);
}
} else {
var child = cljs.core.first(s__42185__$2);
return cljs.core.cons((function (){var G__42189 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__42189], 0));
} else {
return G__42189;
}
})(),replicant$core$render_default_alias_$_iter__42184(cljs.core.rest(s__42185__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(children);
})()], null);
});
replicant.core.add_classes = (function replicant$core$add_classes(class_attr,classes){
if(cljs.core.coll_QMARK_(class_attr)){
return cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(class_attr,classes));
} else {
if((class_attr == null)){
return cljs.core.set(classes);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(classes),class_attr);

}
}
});
replicant.core.get_alias_headers = (function replicant$core$get_alias_headers(p__42191,headers){
var map__42192 = p__42191;
var map__42192__$1 = cljs.core.__destructure_map(map__42192);
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42192__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42192__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var on_alias_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42192__$1,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043));
var tag_name = (headers[(0)]);
if((tag_name instanceof cljs.core.Keyword)){
var f = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,tag_name);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(replicant.core.render_default_alias,tag_name);
}
})();
var id = (headers[(1)]);
var classes = (headers[(2)]);
var attrs = (headers[(4)]);
var attrs__$1 = (function (){var G__42193 = attrs;
var G__42193__$1 = (cljs.core.truth_(id)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__42193,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__42190_SHARP_){
var or__5025__auto__ = p1__42190_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return id;
}
})):G__42193);
var G__42193__$2 = (cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.seq(classes);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs);
}
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__42193__$1,new cljs.core.Keyword(null,"class","class",-2030961996),replicant.core.add_classes,classes):G__42193__$1);
if(cljs.core.truth_(alias_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42193__$2,new cljs.core.Keyword("replicant","alias-data","replicant/alias-data",1929752572),alias_data);
} else {
return G__42193__$2;
}
})();
var children = cljs.core.seq(replicant.core.flatten_seqs((headers[(5)])));
if((!(cljs.core.fn_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,tag_name))))){
var fn__41765__auto___42787 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42788 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42789 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42194 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)," isn't defined"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["There's no available function to render this alias. Replicant will ","render an empty element with data attributes in its place. Available ","aliases are:\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.keys(aliases))].join('')], null);
var G__42194__$1 = (cljs.core.truth_(fn__41765__auto___42787)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42194,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42787):G__42194);
var G__42194__$2 = (cljs.core.truth_(alias__41766__auto___42788)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42194__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42788):G__42194__$1);
if(cljs.core.truth_(fd__41767__auto___42789)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42194__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42789);
} else {
return G__42194__$2;
}
})());
} else {
}

var alias_hiccup = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(attrs__$1,children) : f.call(null,attrs__$1,children));
if((!(((typeof alias_hiccup === 'string') || (replicant.hiccup.hiccup_QMARK_(alias_hiccup)))))){
var fn__41765__auto___42790 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___42791 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___42792 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42195 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Aliases must return valid hiccup",new cljs.core.Keyword(null,"message","message",-406056002),["Aliases must always represent a node in the document, and ","cannot return ",(((alias_hiccup == null))?"nil":((cljs.core.map_QMARK_(alias_hiccup))?"a map":((cljs.core.coll_QMARK_(alias_hiccup))?"multiple nodes":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alias_hiccup], 0))
))),". Please check the implementation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name),"."].join('')], null);
var G__42195__$1 = (cljs.core.truth_(fn__41765__auto___42790)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42195,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___42790):G__42195);
var G__42195__$2 = (cljs.core.truth_(alias__41766__auto___42791)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42195__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___42791):G__42195__$1);
if(cljs.core.truth_(fd__41767__auto___42792)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42195__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___42792);
} else {
return G__42195__$2;
}
})());
} else {
}

var hh__41596__auto__ = replicant.core.get_hiccup_headers(null,alias_hiccup);
var alias__41597__auto__ = headers;
if(cljs.core.truth_(hh__41596__auto__)){
var G__42196 = hh__41596__auto__;
(G__42196[(3)] = (function (){var or__5025__auto__ = (alias__41597__auto__[(3)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (hh__41596__auto__[(3)]);
}
})());

(G__42196[(6)] = (alias__41597__auto__[(6)]));

(G__42196[(7)] = (hh__41596__auto__[(7)]));

(G__42196[(9)] = (alias__41597__auto__[(7)]));

return G__42196;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Create DOM node according to virtual DOM in `headers`. Register relevant
 *   life-cycle hooks from the new node or its descendants in `impl`. Returns a
 *   tuple of the newly created node and the fully realized vdom.
 */
replicant.core.create_node = (function replicant$core$create_node(p__42197,headers){
var map__42198 = p__42197;
var map__42198__$1 = cljs.core.__destructure_map(map__42198);
var impl = map__42198__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42198__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5825__auto___42806 = (function (){var or__5025__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5825__auto___42806)){
var ctx__41755__auto___42807 = temp__5825__auto___42806;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__41755__auto___42807);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

var or__5025__auto__ = (function (){var temp__5825__auto__ = (headers[(8)]);
if(cljs.core.truth_(temp__5825__auto__)){
var text = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.protocols.create_text_node(renderer,text),(function (){var text__41922__auto__ = text;
return (new Array(null,null,null,null,null,null,false,text__41922__auto__,text__41922__auto__,null,null));
})()], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var temp__5825__auto__ = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(temp__5825__auto__)){
var alias_headers = temp__5825__auto__;
var vec__42199 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,alias_headers) : replicant.core.create_node.call(null,impl,alias_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42199,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42199,(1),null);
var k = (alias_headers[(3)]);
var vdom__$1 = (function (){var headers__41930__auto__ = headers;
return (new Array((headers__41930__auto__[(0)]),(headers__41930__auto__[(3)]),(headers__41930__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom], null),(function (){var G__42202 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__42202,k);
} else {
return G__42202;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__41930__auto__[(4)]))),(headers__41930__auto__[(7)]),null,null,(1)));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_node,vdom__$1], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var tag_name = (headers[(0)]);
var ns = (function (){var or__5025__auto____$2 = (headers[(6)]);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",tag_name)){
return "http://www.w3.org/2000/svg";
} else {
return null;
}
}
})();
var node = replicant.protocols.create_element(renderer,tag_name,(cljs.core.truth_(ns)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns], null):null));
var vec__42203 = replicant.core.get_mounting_attrs(headers);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42203,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42203,(1),null);
var children_ns = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("foreignObject",tag_name))?null:ns);
var _ = replicant.core.set_attributes(renderer,node,(function (){var or__5025__auto____$2 = mounting_attrs;
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return attrs;
}
})());
var vec__42206 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__42209,child_headers){
var vec__42210 = p__42209;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42210,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42210,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42210,(2),null);
if(cljs.core.truth_(child_headers)){
var vec__42213 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,child_headers) : replicant.core.create_node.call(null,impl,child_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42213,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42213,(1),null);
var k = (vdom[(1)]);
replicant.protocols.append_child(renderer,node,child_node);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,vdom),(function (){var G__42216 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__42216,k);
} else {
return G__42216;
}
})(),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks,n], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),(0)], null),replicant.core.get_children(headers,children_ns));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42206,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42206,(1),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42206,(2),null);
replicant.core.register_hooks(impl,node,headers);

if(cljs.core.truth_(mounting_attrs)){
replicant.core.register_mount(impl,node,mounting_attrs,attrs);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,(function (){var headers__41930__auto__ = headers;
return (new Array((headers__41930__auto__[(0)]),(headers__41930__auto__[(3)]),(headers__41930__auto__[(2)]),attrs,cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__41930__auto__[(4)]))),(headers__41930__auto__[(7)]),null,null,n_children));
})()], null);
}
}
});
/**
 * Two elements are considered similar enough for reuse if they are both hiccup
 *   elements with the same tag name and the same key (or both have no key) - or
 *   they are both strings.
 * 
 *   Similarity in this case indicates that the node can be used for reconciliation
 *   instead of creating a new node from scratch.
 */
replicant.core.reusable_QMARK_ = (function replicant$core$reusable_QMARK_(headers,vdom){
var or__5025__auto__ = (function (){var and__5023__auto__ = (headers[(8)]);
if(cljs.core.truth_(and__5023__auto__)){
return (vdom[(8)]);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(0)]),(vdom[(0)]))));
}
});
replicant.core.same_QMARK_ = (function replicant$core$same_QMARK_(headers,vdom){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(0)]),(vdom[(0)]))));
});
replicant.core.index_of = (function replicant$core$index_of(f,xs){
var coll_n = (0);
var dom_n = (0);
var xs__$1 = cljs.core.seq(xs);
while(true){
if((xs__$1 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null);
} else {
if((cljs.core.first(xs__$1) == null)){
var G__42850 = (coll_n + (1));
var G__42851 = dom_n;
var G__42852 = cljs.core.next(xs__$1);
coll_n = G__42850;
dom_n = G__42851;
xs__$1 = G__42852;
continue;
} else {
if(cljs.core.truth_((function (){var G__42218 = cljs.core.first(xs__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42218) : f.call(null,G__42218));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_n,dom_n], null);
} else {
var G__42853 = (coll_n + (1));
var G__42854 = (dom_n + (1));
var G__42855 = cljs.core.next(xs__$1);
coll_n = G__42853;
dom_n = G__42854;
xs__$1 = G__42855;
continue;

}
}
}
break;
}
});
replicant.core.get_ns = (function replicant$core$get_ns(headers){
var or__5025__auto__ = (headers[(6)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",(headers[(0)]))){
return "http://www.w3.org/2000/svg";
} else {
return null;
}
}
});
replicant.core.insert_children = (function replicant$core$insert_children(p__42219,el,children,vdom){
var map__42220 = p__42219;
var map__42220__$1 = cljs.core.__destructure_map(map__42220);
var impl = map__42220__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42220__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__42221,child){
var vec__42222 = p__42221;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42222,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42222,(1),null);
if(cljs.core.truth_(child)){
var vec__42225 = replicant.core.create_node(impl,child);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42225,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42225,(1),null);
replicant.protocols.append_child(renderer,el,node);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,vdom__$1),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,null),n], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom,(0)], null),children);
});
replicant.core.remove_child = (function replicant$core$remove_child(p__42228,unmounts,el,n,vdom){
var map__42229 = p__42228;
var map__42229__$1 = cljs.core.__destructure_map(map__42229);
var impl = map__42229__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42229__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var temp__5823__auto__ = (vdom[(9)]);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
if(cljs.core.truth_((unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(id) : unmounts.call(null,id)))){
return vdom;
} else {
return null;
}
} else {
var res = (function (){var temp__5823__auto____$1 = replicant.core.get_unmounting_attrs(vdom);
if(cljs.core.truth_(temp__5823__auto____$1)){
var attrs = temp__5823__auto____$1;
var vdom__$1 = (function (){var vdom__41914__auto__ = vdom;
(vdom__41914__auto__[(9)] = replicant.vdom.id.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(replicant.vdom.id.cljs$core$IDeref$_deref$arity$1(null) + (1))));

return vdom__41914__auto__;
})();
var child = replicant.protocols.get_child(renderer,el,n);
replicant.core.update_attributes(renderer,child,attrs,(vdom__$1[(3)]));

cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.on_transition_end(renderer,child,(function (){
cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.remove_child(renderer,el,child);

var temp__5825__auto___42860 = new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((vdom__$1[(3)]));
if(cljs.core.truth_(temp__5825__auto___42860)){
var hook_42862 = temp__5825__auto___42860;
replicant.core.call_hook(renderer,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook_42862,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),child,null,vdom__$1], null));
} else {
}

return renderer;
}));

return vdom__$1;
} else {
var child = replicant.protocols.get_child(renderer,el,n);
replicant.protocols.remove_child(renderer,el,child);

replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom], 0));

return null;
}
})();
return res;
}
});
replicant.core.move_node_details = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","move-node","replicant/move-node",-1189251602)], null);
replicant.core.unchanged_QMARK_ = (function replicant$core$unchanged_QMARK_(headers,vdom){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42230 = headers;
if((G__42230 == null)){
return null;
} else {
return (G__42230[(7)]);
}
})(),(function (){var G__42231 = vdom;
if((G__42231 == null)){
return null;
} else {
return (G__42231[(7)]);
}
})());
});
replicant.core.move_nodes = (function replicant$core$move_nodes(p__42234,el,headers,new_children,vdom,old_children,n,n_children){
var map__42235 = p__42234;
var map__42235__$1 = cljs.core.__destructure_map(map__42235);
var impl = map__42235__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42235__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var vec__42236 = (cljs.core.truth_((headers[(3)]))?replicant.core.index_of((function (p1__42232_SHARP_){
return replicant.core.same_QMARK_(headers,p1__42232_SHARP_);
}),old_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var o_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42236,(0),null);
var o_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42236,(1),null);
var vec__42239 = (cljs.core.truth_((vdom[(1)]))?replicant.core.index_of((function (p1__42233_SHARP_){
return replicant.core.same_QMARK_(p1__42233_SHARP_,vdom);
}),new_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var n_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42239,(0),null);
var n_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42239,(1),null);
if((o_idx < n_idx)){
var idx = ((n + n_dom_idx) + (1));
var child = replicant.protocols.get_child(renderer,el,n);
if((idx < n_children)){
replicant.protocols.insert_before(renderer,el,child,replicant.protocols.get_child(renderer,el,idx));
} else {
replicant.protocols.append_child(renderer,el,child);
}

replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_children,n_idx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom,replicant.core.move_node_details], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_idx,cljs.core.next(old_children)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(old_children)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2((n_idx + (1)),old_children)], 0)),n,(idx - (1))], null);
} else {
var idx = (n + o_dom_idx);
var child = replicant.protocols.get_child(renderer,el,idx);
var corresponding_old_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(old_children,o_idx);
replicant.protocols.insert_before(renderer,el,child,replicant.protocols.get_child(renderer,el,n));

(replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,headers,corresponding_old_vdom,n) : replicant.core.reconcile_STAR_.call(null,impl,el,headers,corresponding_old_vdom,n));

if(replicant.core.unchanged_QMARK_(headers,corresponding_old_vdom)){
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([corresponding_old_vdom,replicant.core.move_node_details], 0));
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(new_children),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(o_idx,old_children),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((o_idx + (1)),old_children)),(n + (1)),((n + o_idx) + (1)),corresponding_old_vdom], null);
}
});
replicant.core.insert_node = (function replicant$core$insert_node(r,el,child,n,n_children){
if((n_children <= n)){
return replicant.protocols.append_child(r,el,child);
} else {
return replicant.protocols.insert_before(r,el,child,replicant.protocols.get_child(r,el,n));
}
});
replicant.core.update_children = (function replicant$core$update_children(impl,el,new_children,new_ks,old_children,old_ks,n_children){
var r = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl);
var unmounts = cljs.core.deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl));
var new_c = cljs.core.seq(new_children);
var old_c = cljs.core.seq(old_children);
var n = (0);
var move_n = (0);
var n_children__$1 = (function (){var or__5025__auto__ = n_children;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var changed_QMARK_ = false;
var vdom = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var new_headers = cljs.core.first(new_c);
var old_vdom = cljs.core.first(old_c);
var new_empty_QMARK_ = (new_c == null);
var old_empty_QMARK_ = (old_c == null);
var new_nil_QMARK_ = (new_headers == null);
var old_nil_QMARK_ = (old_vdom == null);
if(((new_empty_QMARK_) && (old_empty_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [changed_QMARK_,cljs.core.persistent_BANG_(vdom),new_ks,n_children__$1], null);
} else {
if(new_empty_QMARK_){
var children = cljs.core.seq(old_c);
var vdom__$1 = vdom;
var n__$1 = n;
var n_children__$2 = n_children__$1;
while(true){
if((children == null)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_(vdom__$1),new_ks,n_children__$2], null);
} else {
if((cljs.core.first(children) == null)){
var G__42884 = cljs.core.next(children);
var G__42885 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,null);
var G__42886 = n__$1;
var G__42887 = n_children__$2;
children = G__42884;
vdom__$1 = G__42885;
n__$1 = G__42886;
n_children__$2 = G__42887;
continue;
} else {
var temp__5823__auto__ = replicant.core.remove_child(impl,unmounts,el,n__$1,cljs.core.first(children));
if(cljs.core.truth_(temp__5823__auto__)){
var pending_vdom = temp__5823__auto__;
var G__42888 = cljs.core.next(children);
var G__42889 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,pending_vdom);
var G__42890 = (n__$1 + (1));
var G__42891 = n_children__$2;
children = G__42888;
vdom__$1 = G__42889;
n__$1 = G__42890;
n_children__$2 = G__42891;
continue;
} else {
var G__42892 = cljs.core.next(children);
var G__42893 = vdom__$1;
var G__42894 = n__$1;
var G__42895 = (n_children__$2 - (1));
children = G__42892;
vdom__$1 = G__42893;
n__$1 = G__42894;
n_children__$2 = G__42895;
continue;
}

}
}
break;
}
} else {
if(old_empty_QMARK_){
var vec__42260 = replicant.core.insert_children(impl,el,new_c,vdom);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42260,(0),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42260,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_(vdom__$1),new_ks,(n_children__$1 + n__$1)], null);
} else {
if(((new_nil_QMARK_) && (old_nil_QMARK_))){
var G__42896 = cljs.core.next(new_c);
var G__42897 = cljs.core.next(old_c);
var G__42898 = n;
var G__42899 = move_n;
var G__42900 = n_children__$1;
var G__42901 = changed_QMARK_;
var G__42902 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__42896;
old_c = G__42897;
n = G__42898;
move_n = G__42899;
n_children__$1 = G__42900;
changed_QMARK_ = G__42901;
vdom = G__42902;
continue;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = old_vdom;
if(cljs.core.truth_(and__5023__auto__)){
return (old_vdom[(9)]);
} else {
return and__5023__auto__;
}
})())){
var vec__42263 = (cljs.core.truth_((function (){var and__5023__auto__ = new_headers;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not((function (){var G__42266 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__42266) : old_ks.call(null,G__42266));
})());
} else {
return and__5023__auto__;
}
})())?(function (){var res = replicant.core.create_node(impl,new_headers);
replicant.core.insert_node(r,el,cljs.core.first(res),n,n_children__$1);

return res;
})():null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42263,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42263,(1),null);
if(cljs.core.truth_((function (){var G__42267 = (old_vdom[(9)]);
return (unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(G__42267) : unmounts.call(null,G__42267));
})())){
if(new_nil_QMARK_){
var G__42906 = cljs.core.next(new_c);
var G__42907 = cljs.core.next(old_c);
var G__42908 = (n + (1));
var G__42909 = move_n;
var G__42910 = n_children__$1;
var G__42911 = changed_QMARK_;
var G__42912 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__42906;
old_c = G__42907;
n = G__42908;
move_n = G__42909;
n_children__$1 = G__42910;
changed_QMARK_ = G__42911;
vdom = G__42912;
continue;
} else {
if(cljs.core.truth_(child)){
var G__42915 = cljs.core.next(new_c);
var G__42916 = cljs.core.next(old_c);
var G__42917 = (n + (2));
var G__42918 = move_n;
var G__42919 = (n_children__$1 + (1));
var G__42920 = true;
var G__42921 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__42915;
old_c = G__42916;
n = G__42917;
move_n = G__42918;
n_children__$1 = G__42919;
changed_QMARK_ = G__42920;
vdom = G__42921;
continue;
} else {
var G__42923 = new_c;
var G__42924 = cljs.core.next(old_c);
var G__42925 = (n + (1));
var G__42926 = move_n;
var G__42927 = n_children__$1;
var G__42928 = changed_QMARK_;
var G__42929 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__42923;
old_c = G__42924;
n = G__42925;
move_n = G__42926;
n_children__$1 = G__42927;
changed_QMARK_ = G__42928;
vdom = G__42929;
continue;

}
}
} else {
if(new_nil_QMARK_){
var G__42930 = cljs.core.next(new_c);
var G__42931 = cljs.core.next(old_c);
var G__42932 = n;
var G__42933 = (move_n - (1));
var G__42934 = (n_children__$1 - (1));
var G__42935 = changed_QMARK_;
var G__42936 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__42930;
old_c = G__42931;
n = G__42932;
move_n = G__42933;
n_children__$1 = G__42934;
changed_QMARK_ = G__42935;
vdom = G__42936;
continue;
} else {
if(cljs.core.truth_(child)){
var G__42937 = cljs.core.next(new_c);
var G__42938 = cljs.core.next(old_c);
var G__42939 = (n + (1));
var G__42940 = move_n;
var G__42941 = n_children__$1;
var G__42942 = true;
var G__42943 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__42937;
old_c = G__42938;
n = G__42939;
move_n = G__42940;
n_children__$1 = G__42941;
changed_QMARK_ = G__42942;
vdom = G__42943;
continue;
} else {
var G__42945 = new_c;
var G__42946 = cljs.core.next(old_c);
var G__42947 = n;
var G__42948 = (move_n - (1));
var G__42949 = (n_children__$1 - (1));
var G__42950 = changed_QMARK_;
var G__42951 = vdom;
new_c = G__42945;
old_c = G__42946;
n = G__42947;
move_n = G__42948;
n_children__$1 = G__42949;
changed_QMARK_ = G__42950;
vdom = G__42951;
continue;

}
}
}
} else {
if(new_nil_QMARK_){
if(cljs.core.contains_QMARK_(new_ks,(old_vdom[(1)]))){
var G__42953 = cljs.core.next(new_c);
var G__42954 = old_c;
var G__42955 = n;
var G__42956 = move_n;
var G__42957 = n_children__$1;
var G__42958 = true;
var G__42959 = vdom;
new_c = G__42953;
old_c = G__42954;
n = G__42955;
move_n = G__42956;
n_children__$1 = G__42957;
changed_QMARK_ = G__42958;
vdom = G__42959;
continue;
} else {
var temp__5823__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5823__auto__)){
var unmounting_node = temp__5823__auto__;
var G__42966 = cljs.core.next(new_c);
var G__42967 = cljs.core.next(old_c);
var G__42968 = (n + (1));
var G__42969 = move_n;
var G__42970 = n_children__$1;
var G__42971 = true;
var G__42972 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__42966;
old_c = G__42967;
n = G__42968;
move_n = G__42969;
n_children__$1 = G__42970;
changed_QMARK_ = G__42971;
vdom = G__42972;
continue;
} else {
var G__42974 = cljs.core.next(new_c);
var G__42975 = cljs.core.next(old_c);
var G__42976 = n;
var G__42977 = move_n;
var G__42978 = (n_children__$1 - (1));
var G__42979 = true;
var G__42980 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__42974;
old_c = G__42975;
n = G__42976;
move_n = G__42977;
n_children__$1 = G__42978;
changed_QMARK_ = G__42979;
vdom = G__42980;
continue;
}
}
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = old_vdom;
if(cljs.core.truth_(and__5023__auto__)){
return replicant.core.reusable_QMARK_(new_headers,old_vdom);
} else {
return and__5023__auto__;
}
})())){
var new_vdom = (replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,new_headers,old_vdom,n) : replicant.core.reconcile_STAR_.call(null,impl,el,new_headers,old_vdom,n));
var node_unchanged_QMARK_ = replicant.core.unchanged_QMARK_(new_headers,old_vdom);
if(((node_unchanged_QMARK_) && ((n < move_n)))){
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,replicant.protocols.get_child(r,el,n),new_headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_vdom,replicant.core.move_node_details], 0));
} else {
}

var G__42982 = cljs.core.next(new_c);
var G__42983 = cljs.core.next(old_c);
var G__42984 = (n + (1));
var G__42985 = move_n;
var G__42986 = n_children__$1;
var G__42987 = (function (){var or__5025__auto__ = changed_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (!(node_unchanged_QMARK_));
}
})();
var G__42988 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,new_vdom);
new_c = G__42982;
old_c = G__42983;
n = G__42984;
move_n = G__42985;
n_children__$1 = G__42986;
changed_QMARK_ = G__42987;
vdom = G__42988;
continue;
} else {
if(cljs.core.not((function (){var G__42268 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__42268) : old_ks.call(null,G__42268));
})())){
var vec__42269 = replicant.core.create_node(impl,new_headers);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42269,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42269,(1),null);
replicant.core.insert_node(r,el,child,n,n_children__$1);

var G__42990 = cljs.core.next(new_c);
var G__42991 = (function (){var G__42272 = old_c;
if((old_vdom == null)){
return cljs.core.next(G__42272);
} else {
return G__42272;
}
})();
var G__42992 = (n + (1));
var G__42993 = move_n;
var G__42994 = (n_children__$1 + (1));
var G__42995 = true;
var G__42996 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__42990;
old_c = G__42991;
n = G__42992;
move_n = G__42993;
n_children__$1 = G__42994;
changed_QMARK_ = G__42995;
vdom = G__42996;
continue;
} else {
if(((old_nil_QMARK_) || (cljs.core.not((function (){var G__42273 = (old_vdom[(1)]);
return (new_ks.cljs$core$IFn$_invoke$arity$1 ? new_ks.cljs$core$IFn$_invoke$arity$1(G__42273) : new_ks.call(null,G__42273));
})())))){
var temp__5823__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5823__auto__)){
var unmounting_node = temp__5823__auto__;
var G__42998 = new_c;
var G__42999 = cljs.core.next(old_c);
var G__43000 = (n + (1));
var G__43001 = move_n;
var G__43002 = n_children__$1;
var G__43003 = true;
var G__43004 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__42998;
old_c = G__42999;
n = G__43000;
move_n = G__43001;
n_children__$1 = G__43002;
changed_QMARK_ = G__43003;
vdom = G__43004;
continue;
} else {
var G__43005 = new_c;
var G__43006 = cljs.core.next(old_c);
var G__43007 = n;
var G__43008 = move_n;
var G__43009 = (n_children__$1 - (1));
var G__43010 = true;
var G__43011 = vdom;
new_c = G__43005;
old_c = G__43006;
n = G__43007;
move_n = G__43008;
n_children__$1 = G__43009;
changed_QMARK_ = G__43010;
vdom = G__43011;
continue;
}
} else {
var vec__42274 = replicant.core.move_nodes(impl,el,new_headers,new_c,old_vdom,old_c,n,n_children__$1);
var nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42274,(0),null);
var oc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42274,(1),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42274,(2),null);
var move_n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42274,(3),null);
var vdom_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42274,(4),null);
var G__43012 = nc;
var G__43013 = oc;
var G__43014 = n__$1;
var G__43015 = move_n__$1;
var G__43016 = n_children__$1;
var G__43017 = true;
var G__43018 = (function (){var G__42277 = vdom;
if(cljs.core.truth_(vdom_node)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__42277,vdom_node);
} else {
return G__42277;
}
})();
new_c = G__43012;
old_c = G__43013;
n = G__43014;
move_n = G__43015;
n_children__$1 = G__43016;
changed_QMARK_ = G__43017;
vdom = G__43018;
continue;

}
}
}
}
}
}
}
}
}
break;
}
});
replicant.core.reconcile_STAR_ = (function replicant$core$reconcile_STAR_(p__42278,el,headers,vdom,index){
var map__42279 = p__42278;
var map__42279__$1 = cljs.core.__destructure_map(map__42279);
var impl = map__42279__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42279__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5825__auto___43020 = (function (){var or__5025__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5825__auto___43020)){
var ctx__41755__auto___43022 = temp__5825__auto___43020;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__41755__auto___43022);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

if((!((!(replicant.asserts.has_bad_conditional_attrs_QMARK_(vdom,headers)))))){
var fn__41765__auto___43023 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41766__auto___43024 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41767__auto___43025 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__42280 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid conditionals around the attribute map",new cljs.core.Keyword(null,"message","message",-406056002),replicant.asserts.convey_bad_conditional_attributes(vdom,headers)], null);
var G__42280__$1 = (cljs.core.truth_(fn__41765__auto___43023)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42280,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41765__auto___43023):G__42280);
var G__42280__$2 = (cljs.core.truth_(alias__41766__auto___43024)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42280__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41766__auto___43024):G__42280__$1);
if(cljs.core.truth_(fd__41767__auto___43025)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42280__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41767__auto___43025);
} else {
return G__42280__$2;
}
})());
} else {
}

var or__5025__auto__ = ((replicant.core.unchanged_QMARK_(headers,vdom))?vdom:null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var temp__5825__auto__ = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(temp__5825__auto__)){
var alias_headers = temp__5825__auto__;
var vdom_child = cljs.core.first((vdom[(4)]));
var updated_vdom = (cljs.core.truth_(replicant.core.reusable_QMARK_(alias_headers,vdom_child))?(replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,alias_headers,vdom_child,index) : replicant.core.reconcile_STAR_.call(null,impl,el,alias_headers,vdom_child,index)):(function (){var vec__42281 = replicant.core.create_node(impl,alias_headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42281,(0),null);
var updated_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42281,(1),null);
replicant.protocols.replace_child(renderer,el,node,replicant.protocols.get_child(renderer,el,index));

return updated_vdom;
})());
var headers__41930__auto__ = headers;
return (new Array((headers__41930__auto__[(0)]),(headers__41930__auto__[(3)]),(headers__41930__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_vdom], null),(function (){var temp__5825__auto____$1 = (updated_vdom[(1)]);
if(cljs.core.truth_(temp__5825__auto____$1)){
var k = temp__5825__auto____$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
} else {
return null;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__41930__auto__[(4)]))),(headers__41930__auto__[(7)]),null,null,(1)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((headers[(8)]),(vdom[(8)])))?(function (){var vec__42284 = replicant.core.create_node(impl,headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42284,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42284,(1),null);
replicant.protocols.replace_child(renderer,el,node,replicant.protocols.get_child(renderer,el,index));

return vdom__$1;
})():null);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var child = replicant.protocols.get_child(renderer,el,index);
var headers__$1 = (function (){var or__5025__auto____$3 = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return headers;
}
})();
var attrs = replicant.core.get_attrs(headers__$1);
var vdom_attrs = (vdom[(3)]);
var attrs_changed_QMARK_ = replicant.core.reconcile_attributes(renderer,child,attrs,vdom_attrs);
var vec__42287 = (cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true], null):replicant.core.get_children_ks(headers__$1,replicant.core.get_ns(headers__$1)));
var new_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42287,(0),null);
var new_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42287,(1),null);
var inner_html_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42287,(2),null);
var vec__42290 = (cljs.core.truth_(new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530).cljs$core$IFn$_invoke$arity$1(vdom_attrs))?(function (){
replicant.protocols.remove_all_children(renderer,child);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null);
})()
:(cljs.core.truth_(inner_html_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vdom[(4)]),(vdom[(5)]),(vdom[(10)])], null)
));
var old_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42290,(0),null);
var old_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42290,(1),null);
var old_nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42290,(2),null);
var vec__42293 = replicant.core.update_children(impl,child,new_children,new_ks,old_children,old_ks,old_nc);
var children_changed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42293,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42293,(1),null);
var child_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42293,(2),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42293,(3),null);
var attrs_changed_QMARK___$1 = ((attrs_changed_QMARK_) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1(vdom_attrs))));
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,headers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom,(cljs.core.truth_((function (){var and__5023__auto__ = attrs_changed_QMARK___$1;
if(and__5023__auto__){
return children_changed_QMARK_;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895),new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null):((attrs_changed_QMARK___$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null)
))], 0));

var headers__41930__auto__ = headers__$1;
return (new Array((headers__41930__auto__[(0)]),(headers__41930__auto__[(3)]),(headers__41930__auto__[(2)]),attrs,children,child_ks,cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__41930__auto__[(4)]))),(headers__41930__auto__[(7)]),null,null,n_children));
}
}
}
});
replicant.core.perform_post_mount_update = (function replicant$core$perform_post_mount_update(renderer,p__42296){
var vec__42297 = p__42296;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42297,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42297,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42297,(2),null);
return replicant.core.update_attributes(renderer,node,attrs,mounting_attrs);
});
/**
 * Reconcile the DOM in `el` by diffing `hiccup` with `vdom`. If there is no
 *   `vdom`, `reconcile` will create the DOM as per `hiccup`. Assumes that the DOM
 *   in `el` is in sync with `vdom` - if not, this will certainly not produce the
 *   desired result.
 */
replicant.core.reconcile = (function replicant$core$reconcile(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43052 = arguments.length;
var i__5750__auto___43053 = (0);
while(true){
if((i__5750__auto___43053 < len__5749__auto___43052)){
args__5755__auto__.push((arguments[i__5750__auto___43053]));

var G__43055 = (i__5750__auto___43053 + (1));
i__5750__auto___43053 = G__43055;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,el,hiccup,p__42309){
var vec__42310 = p__42309;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42310,(0),null);
var map__42313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42310,(1),null);
var map__42313__$1 = cljs.core.__destructure_map(map__42313);
var unmounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42313__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42313__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42313__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var on_alias_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42313__$1,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043));
var impl = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"mounts","mounts",-791474425),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),(function (){var or__5025__auto__ = unmounts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
})(),new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930),alias_data,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043),on_alias_exception], null);
var vdom__$1 = ((cljs.core.seq_QMARK_(hiccup))?(function (){var vec__42314 = replicant.core.get_children_ks((function (){var pt__41576__auto__ = [null,null,null];
var G__42317 = pt__41576__auto__;
G__42317.push((function (){var temp__5825__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(temp__5825__auto__)){
var k__41570__auto__ = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__41576__auto__[(0)]),k__41570__auto__], null);
} else {
return null;
}
})());

G__42317.push(null);

G__42317.push(hiccup);

G__42317.push(null);

G__42317.push(null);

G__42317.push(null);

G__42317.push(null);

return G__42317;
})(),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42314,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42314,(1),null);
return cljs.core.second(replicant.core.update_children(impl,el,children,ks,vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__42300_SHARP_){
return (p1__42300_SHARP_[(1)]);
}),vdom)),cljs.core.count(vdom)));
})():(function (){var headers = replicant.core.get_hiccup_headers(null,hiccup);
if(cljs.core.truth_(headers)){
var temp__5825__auto___43062 = (function (){var or__5025__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5825__auto___43062)){
var ctx__41755__auto___43066 = temp__5825__auto___43062;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__41755__auto___43066);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = headers;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = vdom;
if(cljs.core.truth_(and__5023__auto____$1)){
return ((replicant.core.unchanged_QMARK_(headers,cljs.core.first(vdom))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(vdom))));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return vdom;
} else {
var k = (cljs.core.truth_(headers)?(headers[(3)]):null);
return cljs.core.second(replicant.core.update_children(impl,el,(cljs.core.truth_(headers)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers], null):null),(function (){var G__42318 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__42318,k);
} else {
return G__42318;
}
})(),vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__42301_SHARP_){
return (p1__42301_SHARP_[(1)]);
}),vdom)),(cljs.core.truth_(cljs.core.first(vdom))?(1):(0))));
}
})());
var hooks = cljs.core.deref(new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(impl));
var temp__5823__auto___43071 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"mounts","mounts",-791474425).cljs$core$IFn$_invoke$arity$1(impl)));
if(temp__5823__auto___43071){
var mounts_43072 = temp__5823__auto___43071;
replicant.protocols.next_frame(renderer,(function (){
cljs.core.run_BANG_((function (p1__42302_SHARP_){
return replicant.core.perform_post_mount_update(renderer,p1__42302_SHARP_);
}),mounts_43072);

return cljs.core.run_BANG_((function (p1__42303_SHARP_){
return replicant.core.call_hook(renderer,p1__42303_SHARP_);
}),hooks);
}));
} else {
cljs.core.run_BANG_((function (p1__42304_SHARP_){
return replicant.core.call_hook(renderer,p1__42304_SHARP_);
}),hooks);
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),hooks,new cljs.core.Keyword(null,"vdom","vdom",953162958),vdom__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521),new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)], null);
}));

(replicant.core.reconcile.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.reconcile.cljs$lang$applyTo = (function (seq42305){
var G__42306 = cljs.core.first(seq42305);
var seq42305__$1 = cljs.core.next(seq42305);
var G__42307 = cljs.core.first(seq42305__$1);
var seq42305__$2 = cljs.core.next(seq42305__$1);
var G__42308 = cljs.core.first(seq42305__$2);
var seq42305__$3 = cljs.core.next(seq42305__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42306,G__42307,G__42308,seq42305__$3);
}));

replicant.assert.add_reporter(new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266),replicant.console_logger.report);

//# sourceMappingURL=replicant.core.js.map
