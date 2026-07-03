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
var tag_name = (function (){var G__41791 = (cljs.core.truth_(id_index)?tag__$1.substring((0),id_index):(cljs.core.truth_(class_index)?tag__$1.substring((0),class_index):tag__$1
));
if(cljs.core.truth_(ns)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,G__41791);
} else {
return G__41791;
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
var fn__41615__auto___42013 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42014 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42015 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41792 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = sexp;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," contains an empty id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Either complete the id or remove the # character."], null);
var G__41792__$1 = (cljs.core.truth_(fn__41615__auto___42013)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41792,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42013):G__41792);
var G__41792__$2 = (cljs.core.truth_(alias__41616__auto___42014)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41792__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42014):G__41792__$1);
if(cljs.core.truth_(fd__41617__auto___42015)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41792__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42015);
} else {
return G__41792__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/#[^a-zA-Z_\.]/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)))))){
var fn__41615__auto___42016 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42017 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42018 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41793 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = sexp;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," contains an invalid id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"IDs must start with a letter."], null);
var G__41793__$1 = (cljs.core.truth_(fn__41615__auto___42016)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41793,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42016):G__41793);
var G__41793__$2 = (cljs.core.truth_(alias__41616__auto___42017)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41793__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42017):G__41793__$1);
if(cljs.core.truth_(fd__41617__auto___42018)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41793__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42018);
} else {
return G__41793__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/\.$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)))))){
var fn__41615__auto___42021 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42022 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42023 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41794 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = sexp;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," contains an empty class"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"This may cause a DOMException and is considered a coding error. Replicant will not sacrifice performance to work around it."], null);
var G__41794__$1 = (cljs.core.truth_(fn__41615__auto___42021)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41794,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42021):G__41794);
var G__41794__$2 = (cljs.core.truth_(alias__41616__auto___42022)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41794__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42022):G__41794__$1);
if(cljs.core.truth_(fd__41617__auto___42023)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41794__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42023);
} else {
return G__41794__$2;
}
})());
} else {
}

var pt__41325__auto__ = replicant.core.parse_tag(sym);
var G__41795 = pt__41325__auto__;
G__41795.push((function (){var temp__5825__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5825__auto__)){
var k__41319__auto__ = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__41325__auto__[(0)]),k__41319__auto__], null);
} else {
return null;
}
})());

G__41795.push(attrs);

G__41795.push(((has_args_QMARK_)?cljs.core.rest(args):args));

G__41795.push(ns);

G__41795.push(sexp);

G__41795.push(null);

G__41795.push(null);

return G__41795;
} else {
var text__41332__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexp);
return (new Array(null,null,null,null,null,null,null,text__41332__auto__,text__41332__auto__,null));
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
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__41796_SHARP_){
return cljs.core.not_empty(p1__41796_SHARP_.trim());
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
var vec__41798 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41797_SHARP_){
return p1__41797_SHARP_.trim();
}),kv.split(":"));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41798,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41798,(1),null);
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
var G__41801 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009)], 0));
var G__41801__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41801,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__41801);
var G__41801__$2 = ((cljs.core.seq(classes__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41801__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes__$1):G__41801__$1);
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__41801__$2,new cljs.core.Keyword(null,"style","style",-496642736),replicant.core.explode_styles);
} else {
return G__41801__$2;
}
});
/**
 * Given `headers` as produced by `get-hiccup-headers`, returns a map of all HTML
 *   attributes.
 */
replicant.core.get_attrs = (function replicant$core$get_attrs(headers){
if((!((!(cljs.core.contains_QMARK_((headers[(4)]),new cljs.core.Keyword(null,"className","className",-1983287057))))))){
var fn__41615__auto___42036 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42037 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42038 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41802 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Use :class, not :className",new cljs.core.Keyword(null,"message","message",-406056002),":className is not supported, please use :class instead. It takes a keyword, a string, or a collection of either of those."], null);
var G__41802__$1 = (cljs.core.truth_(fn__41615__auto___42036)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41802,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42036):G__41802);
var G__41802__$2 = (cljs.core.truth_(alias__41616__auto___42037)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41802__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42037):G__41802__$1);
if(cljs.core.truth_(fd__41617__auto___42038)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41802__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42038);
} else {
return G__41802__$2;
}
})());
} else {
}

if((!((function (){var class__41677__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return (((!(typeof class__41677__auto__ === 'string'))) || ((class__41677__auto__.indexOf(" ") < (0))));
})()))){
var fn__41615__auto___42040 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42041 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42042 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41803 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid space separated :class strings",new cljs.core.Keyword(null,"message","message",-406056002),(function (){var class__41677__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return [":class supports collections of keywords and/or strings as classes. These perform better, and are usually more convenient to work with. Solve by converting ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class__41677__auto__], 0))," to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(class__41677__auto__.split(" "))], 0))].join('');
})()], null);
var G__41803__$1 = (cljs.core.truth_(fn__41615__auto___42040)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41803,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42040):G__41803);
var G__41803__$2 = (cljs.core.truth_(alias__41616__auto___42041)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41803__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42041):G__41803__$1);
if(cljs.core.truth_(fd__41617__auto___42042)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41803__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42042);
} else {
return G__41803__$2;
}
})());
} else {
}

if((!((!(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1((headers[(4)])) === 'string'))))){
var fn__41615__auto___42046 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42047 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42048 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41804 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid string styles",new cljs.core.Keyword(null,"message","message",-406056002),":style supports structured maps of CSS property/value pairs. Strings must be parsed, so they're both slower and harder to read and write."], null);
var G__41804__$1 = (cljs.core.truth_(fn__41615__auto___42046)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41804,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42046):G__41804);
var G__41804__$2 = (cljs.core.truth_(alias__41616__auto___42047)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41804__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42047):G__41804__$1);
if(cljs.core.truth_(fd__41617__auto___42048)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41804__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42048);
} else {
return G__41804__$2;
}
})());
} else {
}

return replicant.core.prep_attrs((headers[(4)]),(headers[(1)]),(headers[(2)]));
});
replicant.core.merge_attrs = (function replicant$core$merge_attrs(attrs,overrides){
var G__41805 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(overrides,new cljs.core.Keyword(null,"style","style",-496642736))], 0));
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides);
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41805,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides));
} else {
return G__41805;
}
});
replicant.core.get_mounting_attrs = (function replicant$core$get_mounting_attrs(headers){
var temp__5823__auto__ = new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5823__auto__)){
var mounting = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs(headers),(function (){var headers__$1 = (function (){var G__41806 = headers;
if(cljs.core.truth_(mounting)){
var headers__41339__auto__ = G__41806;
(headers__41339__auto__[(4)] = replicant.core.merge_attrs((headers__41339__auto__[(4)]),mounting));

return headers__41339__auto__;
} else {
return G__41806;
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
return replicant.core.flatten_map_seqs((function (p1__41807_SHARP_){
var G__41808 = p1__41807_SHARP_;
if((G__41808 == null)){
return null;
} else {
return replicant.core.get_hiccup_headers(ns,G__41808);
}
}),(headers[(5)]));
}
});
/**
 * Like `get-children` but returns a tuple of `[children ks]` where `ks` is a set
 *   of the keys in `children`.
 */
replicant.core.get_children_ks = (function replicant$core$get_children_ks(headers,ns){
var vec__41809 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__41812,hiccup){
var vec__41813 = p__41812;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41813,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41813,(1),null);
if(cljs.core.truth_(hiccup)){
var headers__$1 = replicant.core.get_hiccup_headers(ns,hiccup);
var k = (headers__$1[(3)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,headers__$1),(function (){var G__41816 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__41816,k);
} else {
return G__41816;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY)], null),replicant.core.flatten_seqs((headers[(5)])));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41809,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41809,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks)], null);
});
replicant.core._STAR_dispatch_STAR_ = null;
replicant.core.build_event_map = (function replicant$core$build_event_map(e){
var node = e.target;
var G__41817 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","dom-event","replicant.trigger/dom-event",930136738),new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512),e], null);
var G__41817__$1 = (cljs.core.truth_(node)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41817,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node):G__41817);
if(cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41817__$1,new cljs.core.Keyword("replicant","dispatch","replicant/dispatch",2079272115),replicant.core._STAR_dispatch_STAR_);
} else {
return G__41817__$1;
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
var G__41818 = replicant.core.build_event_map(e);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__41818) : handler.call(null,G__41818));
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
replicant.core.call_hook = (function replicant$core$call_hook(renderer,p__41819){
var vec__41820 = p__41819;
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41820,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41820,(1),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41820,(2),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41820,(3),null);
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41820,(4),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41820,(5),null);
var f = replicant.core.get_life_cycle_hook(hook);
var life_cycle = (((old == null))?new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865):(((new$ == null))?new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184):new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235)
));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),k)) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235))))))))))){
var G__41823 = (function (){var G__41824 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","life-cycle","replicant.trigger/life-cycle",-205660972),new cljs.core.Keyword("replicant","life-cycle","replicant/life-cycle",1802888458),life_cycle,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node,new cljs.core.Keyword("replicant","remember","replicant/remember",809947829),(function replicant$core$call_hook_$_remember(memory){
return replicant.protocols.remember(renderer,node,memory);
})], null);
var G__41824__$1 = (cljs.core.truth_(details)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41824,new cljs.core.Keyword("replicant","details","replicant/details",-1846218867),details):G__41824);
var G__41824__$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41824__$1,new cljs.core.Keyword("replicant","memory","replicant/memory",-1882688464),replicant.protocols.recall(renderer,node)):G__41824__$1);
if(cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41824__$2,new cljs.core.Keyword("replicant","dispatch","replicant/dispatch",2079272115),replicant.core._STAR_dispatch_STAR_);
} else {
return G__41824__$2;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41823) : f.call(null,G__41823));
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
var len__5749__auto___42167 = arguments.length;
var i__5750__auto___42170 = (0);
while(true){
if((i__5750__auto___42170 < len__5749__auto___42167)){
args__5755__auto__.push((arguments[i__5750__auto___42170]));

var G__42175 = (i__5750__auto___42170 + (1));
i__5750__auto___42170 = G__42175;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (p__41829,node,headers,p__41830){
var map__41831 = p__41829;
var map__41831__$1 = cljs.core.__destructure_map(map__41831);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41831__$1,new cljs.core.Keyword(null,"hooks","hooks",-413590103));
var vec__41832 = p__41830;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41832,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41832,(1),null);
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
var headers_sexp = (function (){var G__41835 = headers;
if((G__41835 == null)){
return null;
} else {
return (G__41835[(7)]);
}
})();
var vdom_sexp = (function (){var G__41836 = vdom;
if((G__41836 == null)){
return null;
} else {
return (G__41836[(7)]);
}
})();
return cljs.core._vreset_BANG_(hooks,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(hooks),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41837){
var vec__41838 = p__41837;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41838,(0),null);
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41838,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook,k,node,headers_sexp,vdom_sexp,details], null);
}),new_hooks)));
}
}));

(replicant.core.register_hooks.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.register_hooks.cljs$lang$applyTo = (function (seq41825){
var G__41826 = cljs.core.first(seq41825);
var seq41825__$1 = cljs.core.next(seq41825);
var G__41827 = cljs.core.first(seq41825__$1);
var seq41825__$2 = cljs.core.next(seq41825__$1);
var G__41828 = cljs.core.first(seq41825__$2);
var seq41825__$3 = cljs.core.next(seq41825__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41826,G__41827,G__41828,seq41825__$3);
}));

replicant.core.register_mount = (function replicant$core$register_mount(p__41841,node,mounting_attrs,attrs){
var map__41842 = p__41841;
var map__41842__$1 = cljs.core.__destructure_map(map__41842);
var mounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41842__$1,new cljs.core.Keyword(null,"mounts","mounts",-791474425));
return cljs.core._vreset_BANG_(mounts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(mounts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,mounting_attrs,attrs], null)));
});
replicant.core.update_styles = (function replicant$core$update_styles(renderer,el,new_styles,old_styles){
var new_ks = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41843_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__41843_SHARP_) == null);
}),cljs.core.keys(new_styles)));
var old_ks = cljs.core.set(cljs.core.keys(old_styles));
cljs.core.run_BANG_((function (p1__41844_SHARP_){
return replicant.protocols.remove_style(renderer,el,p1__41844_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new_ks,old_ks));

return cljs.core.run_BANG_((function (p1__41845_SHARP_){
var new_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__41845_SHARP_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_style,cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_styles,p1__41845_SHARP_))){
if((!((p1__41845_SHARP_ instanceof cljs.core.Keyword)))){
var fn__41615__auto___42222 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42223 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42224 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41846 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41845_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will ","technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41845_SHARP_)," and once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41845_SHARP_)))," may produce undesired results. Your safest option is to always use keywords."].join('')], null);
var G__41846__$1 = (cljs.core.truth_(fn__41615__auto___42222)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41846,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42222):G__41846);
var G__41846__$2 = (cljs.core.truth_(alias__41616__auto___42223)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41846__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42223):G__41846__$1);
if(cljs.core.truth_(fd__41617__auto___42224)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41846__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42224);
} else {
return G__41846__$2;
}
})());
} else {
}

if((!((function (){var name__41716__auto__ = cljs.core.name(p1__41845_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__41716__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__41716__auto__,clojure.string.lower_case(name__41716__auto__))));
})()))){
var fn__41615__auto___42252 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42253 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42254 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41847 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__41845_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41845_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__41847__$1 = (cljs.core.truth_(fn__41615__auto___42252)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41847,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42252):G__41847);
var G__41847__$2 = (cljs.core.truth_(alias__41616__auto___42253)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41847__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42253):G__41847__$1);
if(cljs.core.truth_(fd__41617__auto___42254)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41847__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42254);
} else {
return G__41847__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__41845_SHARP_,replicant.core.get_style_val(p1__41845_SHARP_,new_style));
} else {
return null;
}
}),new_ks);
});
replicant.core.update_classes = (function replicant$core$update_classes(renderer,el,new_classes,old_classes){
cljs.core.run_BANG_((function (p1__41848_SHARP_){
return replicant.protocols.remove_class(renderer,el,p1__41848_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new_classes),old_classes));

return cljs.core.run_BANG_((function (p1__41849_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__41849_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(old_classes),new_classes));
});
replicant.core.get_event_handler_options = (function replicant$core$get_event_handler_options(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,k){
var G__41850 = res;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("replicant.event",cljs.core.namespace(k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41850,cljs.core.name(k),(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(m) : k.call(null,m)));
} else {
return G__41850;
}
}),null,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("replicant.event","wrap-handler?","replicant.event/wrap-handler?",845655928)], 0))));
});
replicant.core.add_event_listeners = (function replicant$core$add_event_listeners(renderer,el,val){
return cljs.core.run_BANG_((function (p__41851){
var vec__41852 = p__41851;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41852,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41852,(1),null);
if((!((function (){var event__41688__auto__ = cljs.core.name(event);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("DOMContentLoaded",event__41688__auto__)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event__41688__auto__,clojure.string.lower_case(event__41688__auto__))));
})()))){
var fn__41615__auto___42294 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42295 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42296 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41855 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(event)))),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Most event names should be in all lower-case. Replicant passes your event names directly to addEventListener, and mis-cased event names will fail silently."], null);
var G__41855__$1 = (cljs.core.truth_(fn__41615__auto___42294)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41855,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42294):G__41855);
var G__41855__$2 = (cljs.core.truth_(alias__41616__auto___42295)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41855__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42295):G__41855__$1);
if(cljs.core.truth_(fd__41617__auto___42296)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41855__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42296);
} else {
return G__41855__$2;
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
var fn__41615__auto___42355 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42356 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42357 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41856 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Set event listeners in the :on map",new cljs.core.Keyword(null,"message","message",-406056002),["Event handler attributes are not supported. Instead of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," set :on {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash(cljs.core.name(attr).substring((2)))))," ,,,}"].join('')], null);
var G__41856__$1 = (cljs.core.truth_(fn__41615__auto___42355)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41856,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42355):G__41856);
var G__41856__$2 = (cljs.core.truth_(alias__41616__auto___42356)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41856__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42356):G__41856__$1);
if(cljs.core.truth_(fd__41617__auto___42357)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41856__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42357);
} else {
return G__41856__$2;
}
})());
} else {
}

if(cljs.core.not(cljs.core.re_find(/^[a-zA-Z\-:_][a-zA-Z0-9\-:\._]*$/,cljs.core.name(attr)))){
var fn__41615__auto___42379 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42380 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42381 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41857 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Invalid attribute name ",cljs.core.name(attr)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var attr__41727__auto__ = cljs.core.name(attr);
return ["Tried to set attribute ",attr__41727__auto__," to value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),". This will fail","horribly in the browser because ",(cljs.core.truth_(cljs.core.re_find(/^[0-9]/,attr__41727__auto__))?" it starts with a number":(cljs.core.truth_(cljs.core.re_find(/^\./,attr__41727__auto__))?" it starts with a dot":[" it contains the character ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/[^a-zA-Z0-9\-:\._]/,attr__41727__auto__))].join('')
)),", which isn't allowed as per the HTML spec."].join('');
})()], null);
var G__41857__$1 = (cljs.core.truth_(fn__41615__auto___42379)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41857,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42379):G__41857);
var G__41857__$2 = (cljs.core.truth_(alias__41616__auto___42380)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41857__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42380):G__41857__$1);
if(cljs.core.truth_(fd__41617__auto___42381)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41857__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42381);
} else {
return G__41857__$2;
}
})());
} else {
}

return replicant.protocols.set_attribute(renderer,el,an,(function (){var G__41858 = v;
if((((v instanceof cljs.core.Keyword)) || ((v instanceof cljs.core.Symbol)))){
return replicant.core.stringify(G__41858);
} else {
return G__41858;
}
})(),(function (){var G__41859 = cljs.core.PersistentArrayMap.EMPTY;
var G__41859__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xml:")))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41859,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xmlns):G__41859);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xlink:"))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41859__$1,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xlinkns);
} else {
return G__41859__$1;
}
})());
});
replicant.core.update_attr = (function replicant$core$update_attr(renderer,el,attr,new$,old){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__41860 = attr;
var G__41860__$1 = (((G__41860 instanceof cljs.core.Keyword))?G__41860.fqn:null);
switch (G__41860__$1) {
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__41862_SHARP_,p2__41861_SHARP_){
return replicant.core.update_attr(renderer,el,p2__41861_SHARP_,new_attrs,old_attrs);
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
return cljs.core.run_BANG_((function (p1__41863_SHARP_){
if((!((p1__41863_SHARP_ instanceof cljs.core.Keyword)))){
var fn__41615__auto___42443 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42444 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42445 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41864 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41863_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will ","technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41863_SHARP_)," and once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41863_SHARP_)))," may produce undesired results. Your safest option is to always use keywords."].join('')], null);
var G__41864__$1 = (cljs.core.truth_(fn__41615__auto___42443)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41864,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42443):G__41864);
var G__41864__$2 = (cljs.core.truth_(alias__41616__auto___42444)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41864__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42444):G__41864__$1);
if(cljs.core.truth_(fd__41617__auto___42445)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41864__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42445);
} else {
return G__41864__$2;
}
})());
} else {
}

if((!((function (){var name__41716__auto__ = cljs.core.name(p1__41863_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__41716__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__41716__auto__,clojure.string.lower_case(name__41716__auto__))));
})()))){
var fn__41615__auto___42465 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42466 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42467 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41865 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__41863_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41863_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__41865__$1 = (cljs.core.truth_(fn__41615__auto___42465)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41865,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42465):G__41865);
var G__41865__$2 = (cljs.core.truth_(alias__41616__auto___42466)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41865__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42466):G__41865__$1);
if(cljs.core.truth_(fd__41617__auto___42467)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41865__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42467);
} else {
return G__41865__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__41863_SHARP_,replicant.core.get_style_val(p1__41863_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__41863_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_styles,cljs.core.keys(new_styles)));
});
replicant.core.set_classes = (function replicant$core$set_classes(renderer,el,new_classes){
return cljs.core.run_BANG_((function (p1__41866_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__41866_SHARP_);
}),new_classes);
});
replicant.core.set_attr = (function replicant$core$set_attr(renderer,el,attr,new$){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__41867 = attr;
var G__41867__$1 = (((G__41867 instanceof cljs.core.Keyword))?G__41867.fqn:null);
switch (G__41867__$1) {
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
cljs.core.run_BANG_((function (p__41868){
var vec__41869 = p__41868;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41869,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41869,(1),null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-replicant-error","data-replicant-error",1583668098),["Undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)].join('')], null),(function (){var iter__5503__auto__ = (function replicant$core$render_default_alias_$_iter__41872(s__41873){
return (new cljs.core.LazySeq(null,(function (){
var s__41873__$1 = s__41873;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41873__$1);
if(temp__5825__auto__){
var s__41873__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41873__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__41873__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__41875 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__41874 = (0);
while(true){
if((i__41874 < size__5502__auto__)){
var child = cljs.core._nth(c__5501__auto__,i__41874);
cljs.core.chunk_append(b__41875,(function (){var G__41876 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__41876], 0));
} else {
return G__41876;
}
})());

var G__42472 = (i__41874 + (1));
i__41874 = G__42472;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41875),replicant$core$render_default_alias_$_iter__41872(cljs.core.chunk_rest(s__41873__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41875),null);
}
} else {
var child = cljs.core.first(s__41873__$2);
return cljs.core.cons((function (){var G__41877 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__41877], 0));
} else {
return G__41877;
}
})(),replicant$core$render_default_alias_$_iter__41872(cljs.core.rest(s__41873__$2)));
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
replicant.core.get_alias_headers = (function replicant$core$get_alias_headers(p__41879,headers){
var map__41880 = p__41879;
var map__41880__$1 = cljs.core.__destructure_map(map__41880);
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41880__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41880__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var on_alias_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41880__$1,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043));
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
var attrs__$1 = (function (){var G__41881 = attrs;
var G__41881__$1 = (cljs.core.truth_(id)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__41881,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__41878_SHARP_){
var or__5025__auto__ = p1__41878_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return id;
}
})):G__41881);
var G__41881__$2 = (cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.seq(classes);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs);
}
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41881__$1,new cljs.core.Keyword(null,"class","class",-2030961996),replicant.core.add_classes,classes):G__41881__$1);
if(cljs.core.truth_(alias_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41881__$2,new cljs.core.Keyword("replicant","alias-data","replicant/alias-data",1929752572),alias_data);
} else {
return G__41881__$2;
}
})();
var children = cljs.core.seq(replicant.core.flatten_seqs((headers[(5)])));
if((!(cljs.core.fn_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,tag_name))))){
var fn__41615__auto___42475 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42476 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42477 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41882 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)," isn't defined"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["There's no available function to render this alias. Replicant will ","render an empty element with data attributes in its place. Available ","aliases are:\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.keys(aliases))].join('')], null);
var G__41882__$1 = (cljs.core.truth_(fn__41615__auto___42475)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41882,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42475):G__41882);
var G__41882__$2 = (cljs.core.truth_(alias__41616__auto___42476)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41882__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42476):G__41882__$1);
if(cljs.core.truth_(fd__41617__auto___42477)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41882__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42477);
} else {
return G__41882__$2;
}
})());
} else {
}

var alias_hiccup = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(attrs__$1,children) : f.call(null,attrs__$1,children));
if((!(((typeof alias_hiccup === 'string') || (replicant.hiccup.hiccup_QMARK_(alias_hiccup)))))){
var fn__41615__auto___42480 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42481 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42482 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41883 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Aliases must return valid hiccup",new cljs.core.Keyword(null,"message","message",-406056002),["Aliases must always represent a node in the document, and ","cannot return ",(((alias_hiccup == null))?"nil":((cljs.core.map_QMARK_(alias_hiccup))?"a map":((cljs.core.coll_QMARK_(alias_hiccup))?"multiple nodes":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alias_hiccup], 0))
))),". Please check the implementation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name),"."].join('')], null);
var G__41883__$1 = (cljs.core.truth_(fn__41615__auto___42480)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41883,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42480):G__41883);
var G__41883__$2 = (cljs.core.truth_(alias__41616__auto___42481)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41883__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42481):G__41883__$1);
if(cljs.core.truth_(fd__41617__auto___42482)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41883__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42482);
} else {
return G__41883__$2;
}
})());
} else {
}

var hh__41345__auto__ = replicant.core.get_hiccup_headers(null,alias_hiccup);
var alias__41346__auto__ = headers;
if(cljs.core.truth_(hh__41345__auto__)){
var G__41884 = hh__41345__auto__;
(G__41884[(3)] = (function (){var or__5025__auto__ = (alias__41346__auto__[(3)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (hh__41345__auto__[(3)]);
}
})());

(G__41884[(6)] = (alias__41346__auto__[(6)]));

(G__41884[(7)] = (hh__41345__auto__[(7)]));

(G__41884[(9)] = (alias__41346__auto__[(7)]));

return G__41884;
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
replicant.core.create_node = (function replicant$core$create_node(p__41885,headers){
var map__41886 = p__41885;
var map__41886__$1 = cljs.core.__destructure_map(map__41886);
var impl = map__41886__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41886__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5825__auto___42492 = (function (){var or__5025__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5825__auto___42492)){
var ctx__41609__auto___42495 = temp__5825__auto___42492;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__41609__auto___42495);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

var or__5025__auto__ = (function (){var temp__5825__auto__ = (headers[(8)]);
if(cljs.core.truth_(temp__5825__auto__)){
var text = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.protocols.create_text_node(renderer,text),(function (){var text__41550__auto__ = text;
return (new Array(null,null,null,null,null,null,false,text__41550__auto__,text__41550__auto__,null,null));
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
var vec__41887 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,alias_headers) : replicant.core.create_node.call(null,impl,alias_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41887,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41887,(1),null);
var k = (alias_headers[(3)]);
var vdom__$1 = (function (){var headers__41557__auto__ = headers;
return (new Array((headers__41557__auto__[(0)]),(headers__41557__auto__[(3)]),(headers__41557__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom], null),(function (){var G__41890 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41890,k);
} else {
return G__41890;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__41557__auto__[(4)]))),(headers__41557__auto__[(7)]),null,null,(1)));
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
var vec__41891 = replicant.core.get_mounting_attrs(headers);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41891,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41891,(1),null);
var children_ns = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("foreignObject",tag_name))?null:ns);
var _ = replicant.core.set_attributes(renderer,node,(function (){var or__5025__auto____$2 = mounting_attrs;
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return attrs;
}
})());
var vec__41894 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__41897,child_headers){
var vec__41898 = p__41897;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41898,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41898,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41898,(2),null);
if(cljs.core.truth_(child_headers)){
var vec__41901 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,child_headers) : replicant.core.create_node.call(null,impl,child_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41901,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41901,(1),null);
var k = (vdom[(1)]);
replicant.protocols.append_child(renderer,node,child_node);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,vdom),(function (){var G__41904 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__41904,k);
} else {
return G__41904;
}
})(),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks,n], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),(0)], null),replicant.core.get_children(headers,children_ns));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41894,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41894,(1),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41894,(2),null);
replicant.core.register_hooks(impl,node,headers);

if(cljs.core.truth_(mounting_attrs)){
replicant.core.register_mount(impl,node,mounting_attrs,attrs);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,(function (){var headers__41557__auto__ = headers;
return (new Array((headers__41557__auto__[(0)]),(headers__41557__auto__[(3)]),(headers__41557__auto__[(2)]),attrs,cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__41557__auto__[(4)]))),(headers__41557__auto__[(7)]),null,null,n_children));
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
var G__42538 = (coll_n + (1));
var G__42539 = dom_n;
var G__42540 = cljs.core.next(xs__$1);
coll_n = G__42538;
dom_n = G__42539;
xs__$1 = G__42540;
continue;
} else {
if(cljs.core.truth_((function (){var G__41906 = cljs.core.first(xs__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41906) : f.call(null,G__41906));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_n,dom_n], null);
} else {
var G__42541 = (coll_n + (1));
var G__42542 = (dom_n + (1));
var G__42543 = cljs.core.next(xs__$1);
coll_n = G__42541;
dom_n = G__42542;
xs__$1 = G__42543;
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
replicant.core.insert_children = (function replicant$core$insert_children(p__41907,el,children,vdom){
var map__41908 = p__41907;
var map__41908__$1 = cljs.core.__destructure_map(map__41908);
var impl = map__41908__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41908__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__41909,child){
var vec__41910 = p__41909;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41910,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41910,(1),null);
if(cljs.core.truth_(child)){
var vec__41913 = replicant.core.create_node(impl,child);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41913,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41913,(1),null);
replicant.protocols.append_child(renderer,el,node);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,vdom__$1),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,null),n], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom,(0)], null),children);
});
replicant.core.remove_child = (function replicant$core$remove_child(p__41916,unmounts,el,n,vdom){
var map__41917 = p__41916;
var map__41917__$1 = cljs.core.__destructure_map(map__41917);
var impl = map__41917__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41917__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
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
var vdom__$1 = (function (){var vdom__41544__auto__ = vdom;
(vdom__41544__auto__[(9)] = replicant.vdom.id.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(replicant.vdom.id.cljs$core$IDeref$_deref$arity$1(null) + (1))));

return vdom__41544__auto__;
})();
var child = replicant.protocols.get_child(renderer,el,n);
replicant.core.update_attributes(renderer,child,attrs,(vdom__$1[(3)]));

cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.on_transition_end(renderer,child,(function (){
cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.remove_child(renderer,el,child);

var temp__5825__auto___42548 = new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((vdom__$1[(3)]));
if(cljs.core.truth_(temp__5825__auto___42548)){
var hook_42549 = temp__5825__auto___42548;
replicant.core.call_hook(renderer,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook_42549,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),child,null,vdom__$1], null));
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__41918 = headers;
if((G__41918 == null)){
return null;
} else {
return (G__41918[(7)]);
}
})(),(function (){var G__41919 = vdom;
if((G__41919 == null)){
return null;
} else {
return (G__41919[(7)]);
}
})());
});
replicant.core.move_nodes = (function replicant$core$move_nodes(p__41922,el,headers,new_children,vdom,old_children,n,n_children){
var map__41923 = p__41922;
var map__41923__$1 = cljs.core.__destructure_map(map__41923);
var impl = map__41923__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41923__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var vec__41924 = (cljs.core.truth_((headers[(3)]))?replicant.core.index_of((function (p1__41920_SHARP_){
return replicant.core.same_QMARK_(headers,p1__41920_SHARP_);
}),old_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var o_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41924,(0),null);
var o_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41924,(1),null);
var vec__41927 = (cljs.core.truth_((vdom[(1)]))?replicant.core.index_of((function (p1__41921_SHARP_){
return replicant.core.same_QMARK_(p1__41921_SHARP_,vdom);
}),new_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var n_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41927,(0),null);
var n_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41927,(1),null);
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
var G__42572 = cljs.core.next(children);
var G__42573 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,null);
var G__42574 = n__$1;
var G__42575 = n_children__$2;
children = G__42572;
vdom__$1 = G__42573;
n__$1 = G__42574;
n_children__$2 = G__42575;
continue;
} else {
var temp__5823__auto__ = replicant.core.remove_child(impl,unmounts,el,n__$1,cljs.core.first(children));
if(cljs.core.truth_(temp__5823__auto__)){
var pending_vdom = temp__5823__auto__;
var G__42576 = cljs.core.next(children);
var G__42577 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,pending_vdom);
var G__42578 = (n__$1 + (1));
var G__42579 = n_children__$2;
children = G__42576;
vdom__$1 = G__42577;
n__$1 = G__42578;
n_children__$2 = G__42579;
continue;
} else {
var G__42580 = cljs.core.next(children);
var G__42581 = vdom__$1;
var G__42582 = n__$1;
var G__42583 = (n_children__$2 - (1));
children = G__42580;
vdom__$1 = G__42581;
n__$1 = G__42582;
n_children__$2 = G__42583;
continue;
}

}
}
break;
}
} else {
if(old_empty_QMARK_){
var vec__41948 = replicant.core.insert_children(impl,el,new_c,vdom);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41948,(0),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41948,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_(vdom__$1),new_ks,(n_children__$1 + n__$1)], null);
} else {
if(((new_nil_QMARK_) && (old_nil_QMARK_))){
var G__42584 = cljs.core.next(new_c);
var G__42585 = cljs.core.next(old_c);
var G__42586 = n;
var G__42587 = move_n;
var G__42588 = n_children__$1;
var G__42589 = changed_QMARK_;
var G__42590 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__42584;
old_c = G__42585;
n = G__42586;
move_n = G__42587;
n_children__$1 = G__42588;
changed_QMARK_ = G__42589;
vdom = G__42590;
continue;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = old_vdom;
if(cljs.core.truth_(and__5023__auto__)){
return (old_vdom[(9)]);
} else {
return and__5023__auto__;
}
})())){
var vec__41951 = (cljs.core.truth_((function (){var and__5023__auto__ = new_headers;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not((function (){var G__41954 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__41954) : old_ks.call(null,G__41954));
})());
} else {
return and__5023__auto__;
}
})())?(function (){var res = replicant.core.create_node(impl,new_headers);
replicant.core.insert_node(r,el,cljs.core.first(res),n,n_children__$1);

return res;
})():null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41951,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41951,(1),null);
if(cljs.core.truth_((function (){var G__41955 = (old_vdom[(9)]);
return (unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(G__41955) : unmounts.call(null,G__41955));
})())){
if(new_nil_QMARK_){
var G__42592 = cljs.core.next(new_c);
var G__42593 = cljs.core.next(old_c);
var G__42594 = (n + (1));
var G__42595 = move_n;
var G__42596 = n_children__$1;
var G__42597 = changed_QMARK_;
var G__42598 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__42592;
old_c = G__42593;
n = G__42594;
move_n = G__42595;
n_children__$1 = G__42596;
changed_QMARK_ = G__42597;
vdom = G__42598;
continue;
} else {
if(cljs.core.truth_(child)){
var G__42601 = cljs.core.next(new_c);
var G__42602 = cljs.core.next(old_c);
var G__42603 = (n + (2));
var G__42604 = move_n;
var G__42605 = (n_children__$1 + (1));
var G__42606 = true;
var G__42607 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__42601;
old_c = G__42602;
n = G__42603;
move_n = G__42604;
n_children__$1 = G__42605;
changed_QMARK_ = G__42606;
vdom = G__42607;
continue;
} else {
var G__42609 = new_c;
var G__42610 = cljs.core.next(old_c);
var G__42611 = (n + (1));
var G__42612 = move_n;
var G__42613 = n_children__$1;
var G__42614 = changed_QMARK_;
var G__42615 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__42609;
old_c = G__42610;
n = G__42611;
move_n = G__42612;
n_children__$1 = G__42613;
changed_QMARK_ = G__42614;
vdom = G__42615;
continue;

}
}
} else {
if(new_nil_QMARK_){
var G__42618 = cljs.core.next(new_c);
var G__42619 = cljs.core.next(old_c);
var G__42620 = n;
var G__42621 = (move_n - (1));
var G__42622 = (n_children__$1 - (1));
var G__42623 = changed_QMARK_;
var G__42624 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__42618;
old_c = G__42619;
n = G__42620;
move_n = G__42621;
n_children__$1 = G__42622;
changed_QMARK_ = G__42623;
vdom = G__42624;
continue;
} else {
if(cljs.core.truth_(child)){
var G__42625 = cljs.core.next(new_c);
var G__42626 = cljs.core.next(old_c);
var G__42627 = (n + (1));
var G__42628 = move_n;
var G__42629 = n_children__$1;
var G__42630 = true;
var G__42631 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__42625;
old_c = G__42626;
n = G__42627;
move_n = G__42628;
n_children__$1 = G__42629;
changed_QMARK_ = G__42630;
vdom = G__42631;
continue;
} else {
var G__42632 = new_c;
var G__42633 = cljs.core.next(old_c);
var G__42634 = n;
var G__42635 = (move_n - (1));
var G__42636 = (n_children__$1 - (1));
var G__42637 = changed_QMARK_;
var G__42638 = vdom;
new_c = G__42632;
old_c = G__42633;
n = G__42634;
move_n = G__42635;
n_children__$1 = G__42636;
changed_QMARK_ = G__42637;
vdom = G__42638;
continue;

}
}
}
} else {
if(new_nil_QMARK_){
if(cljs.core.contains_QMARK_(new_ks,(old_vdom[(1)]))){
var G__42640 = cljs.core.next(new_c);
var G__42641 = old_c;
var G__42642 = n;
var G__42643 = move_n;
var G__42644 = n_children__$1;
var G__42645 = true;
var G__42646 = vdom;
new_c = G__42640;
old_c = G__42641;
n = G__42642;
move_n = G__42643;
n_children__$1 = G__42644;
changed_QMARK_ = G__42645;
vdom = G__42646;
continue;
} else {
var temp__5823__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5823__auto__)){
var unmounting_node = temp__5823__auto__;
var G__42648 = cljs.core.next(new_c);
var G__42649 = cljs.core.next(old_c);
var G__42650 = (n + (1));
var G__42651 = move_n;
var G__42652 = n_children__$1;
var G__42653 = true;
var G__42654 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__42648;
old_c = G__42649;
n = G__42650;
move_n = G__42651;
n_children__$1 = G__42652;
changed_QMARK_ = G__42653;
vdom = G__42654;
continue;
} else {
var G__42660 = cljs.core.next(new_c);
var G__42661 = cljs.core.next(old_c);
var G__42662 = n;
var G__42663 = move_n;
var G__42664 = (n_children__$1 - (1));
var G__42665 = true;
var G__42666 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__42660;
old_c = G__42661;
n = G__42662;
move_n = G__42663;
n_children__$1 = G__42664;
changed_QMARK_ = G__42665;
vdom = G__42666;
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

var G__42669 = cljs.core.next(new_c);
var G__42670 = cljs.core.next(old_c);
var G__42671 = (n + (1));
var G__42672 = move_n;
var G__42673 = n_children__$1;
var G__42674 = (function (){var or__5025__auto__ = changed_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (!(node_unchanged_QMARK_));
}
})();
var G__42675 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,new_vdom);
new_c = G__42669;
old_c = G__42670;
n = G__42671;
move_n = G__42672;
n_children__$1 = G__42673;
changed_QMARK_ = G__42674;
vdom = G__42675;
continue;
} else {
if(cljs.core.not((function (){var G__41956 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__41956) : old_ks.call(null,G__41956));
})())){
var vec__41957 = replicant.core.create_node(impl,new_headers);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41957,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41957,(1),null);
replicant.core.insert_node(r,el,child,n,n_children__$1);

var G__42677 = cljs.core.next(new_c);
var G__42678 = (function (){var G__41960 = old_c;
if((old_vdom == null)){
return cljs.core.next(G__41960);
} else {
return G__41960;
}
})();
var G__42679 = (n + (1));
var G__42680 = move_n;
var G__42681 = (n_children__$1 + (1));
var G__42682 = true;
var G__42683 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__42677;
old_c = G__42678;
n = G__42679;
move_n = G__42680;
n_children__$1 = G__42681;
changed_QMARK_ = G__42682;
vdom = G__42683;
continue;
} else {
if(((old_nil_QMARK_) || (cljs.core.not((function (){var G__41961 = (old_vdom[(1)]);
return (new_ks.cljs$core$IFn$_invoke$arity$1 ? new_ks.cljs$core$IFn$_invoke$arity$1(G__41961) : new_ks.call(null,G__41961));
})())))){
var temp__5823__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5823__auto__)){
var unmounting_node = temp__5823__auto__;
var G__42686 = new_c;
var G__42687 = cljs.core.next(old_c);
var G__42688 = (n + (1));
var G__42689 = move_n;
var G__42690 = n_children__$1;
var G__42691 = true;
var G__42692 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__42686;
old_c = G__42687;
n = G__42688;
move_n = G__42689;
n_children__$1 = G__42690;
changed_QMARK_ = G__42691;
vdom = G__42692;
continue;
} else {
var G__42693 = new_c;
var G__42694 = cljs.core.next(old_c);
var G__42695 = n;
var G__42696 = move_n;
var G__42697 = (n_children__$1 - (1));
var G__42698 = true;
var G__42699 = vdom;
new_c = G__42693;
old_c = G__42694;
n = G__42695;
move_n = G__42696;
n_children__$1 = G__42697;
changed_QMARK_ = G__42698;
vdom = G__42699;
continue;
}
} else {
var vec__41962 = replicant.core.move_nodes(impl,el,new_headers,new_c,old_vdom,old_c,n,n_children__$1);
var nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41962,(0),null);
var oc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41962,(1),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41962,(2),null);
var move_n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41962,(3),null);
var vdom_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41962,(4),null);
var G__42700 = nc;
var G__42701 = oc;
var G__42702 = n__$1;
var G__42703 = move_n__$1;
var G__42704 = n_children__$1;
var G__42705 = true;
var G__42706 = (function (){var G__41965 = vdom;
if(cljs.core.truth_(vdom_node)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__41965,vdom_node);
} else {
return G__41965;
}
})();
new_c = G__42700;
old_c = G__42701;
n = G__42702;
move_n = G__42703;
n_children__$1 = G__42704;
changed_QMARK_ = G__42705;
vdom = G__42706;
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
replicant.core.reconcile_STAR_ = (function replicant$core$reconcile_STAR_(p__41966,el,headers,vdom,index){
var map__41967 = p__41966;
var map__41967__$1 = cljs.core.__destructure_map(map__41967);
var impl = map__41967__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41967__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5825__auto___42708 = (function (){var or__5025__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5825__auto___42708)){
var ctx__41609__auto___42709 = temp__5825__auto___42708;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__41609__auto___42709);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

if((!((!(replicant.asserts.has_bad_conditional_attrs_QMARK_(vdom,headers)))))){
var fn__41615__auto___42710 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__41616__auto___42711 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__41617__auto___42712 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__41968 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid conditionals around the attribute map",new cljs.core.Keyword(null,"message","message",-406056002),replicant.asserts.convey_bad_conditional_attributes(vdom,headers)], null);
var G__41968__$1 = (cljs.core.truth_(fn__41615__auto___42710)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41968,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__41615__auto___42710):G__41968);
var G__41968__$2 = (cljs.core.truth_(alias__41616__auto___42711)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41968__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__41616__auto___42711):G__41968__$1);
if(cljs.core.truth_(fd__41617__auto___42712)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41968__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__41617__auto___42712);
} else {
return G__41968__$2;
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
var updated_vdom = (cljs.core.truth_(replicant.core.reusable_QMARK_(alias_headers,vdom_child))?(replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,alias_headers,vdom_child,index) : replicant.core.reconcile_STAR_.call(null,impl,el,alias_headers,vdom_child,index)):(function (){var vec__41969 = replicant.core.create_node(impl,alias_headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41969,(0),null);
var updated_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41969,(1),null);
replicant.protocols.replace_child(renderer,el,node,replicant.protocols.get_child(renderer,el,index));

return updated_vdom;
})());
var headers__41557__auto__ = headers;
return (new Array((headers__41557__auto__[(0)]),(headers__41557__auto__[(3)]),(headers__41557__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_vdom], null),(function (){var temp__5825__auto____$1 = (updated_vdom[(1)]);
if(cljs.core.truth_(temp__5825__auto____$1)){
var k = temp__5825__auto____$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
} else {
return null;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__41557__auto__[(4)]))),(headers__41557__auto__[(7)]),null,null,(1)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((headers[(8)]),(vdom[(8)])))?(function (){var vec__41972 = replicant.core.create_node(impl,headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41972,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41972,(1),null);
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
var vec__41975 = (cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true], null):replicant.core.get_children_ks(headers__$1,replicant.core.get_ns(headers__$1)));
var new_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41975,(0),null);
var new_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41975,(1),null);
var inner_html_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41975,(2),null);
var vec__41978 = (cljs.core.truth_(new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530).cljs$core$IFn$_invoke$arity$1(vdom_attrs))?(function (){
replicant.protocols.remove_all_children(renderer,child);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null);
})()
:(cljs.core.truth_(inner_html_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vdom[(4)]),(vdom[(5)]),(vdom[(10)])], null)
));
var old_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41978,(0),null);
var old_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41978,(1),null);
var old_nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41978,(2),null);
var vec__41981 = replicant.core.update_children(impl,child,new_children,new_ks,old_children,old_ks,old_nc);
var children_changed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41981,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41981,(1),null);
var child_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41981,(2),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41981,(3),null);
var attrs_changed_QMARK___$1 = ((attrs_changed_QMARK_) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1(vdom_attrs))));
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,headers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom,(cljs.core.truth_((function (){var and__5023__auto__ = attrs_changed_QMARK___$1;
if(and__5023__auto__){
return children_changed_QMARK_;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895),new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null):((attrs_changed_QMARK___$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null)
))], 0));

var headers__41557__auto__ = headers__$1;
return (new Array((headers__41557__auto__[(0)]),(headers__41557__auto__[(3)]),(headers__41557__auto__[(2)]),attrs,children,child_ks,cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__41557__auto__[(4)]))),(headers__41557__auto__[(7)]),null,null,n_children));
}
}
}
});
replicant.core.perform_post_mount_update = (function replicant$core$perform_post_mount_update(renderer,p__41984){
var vec__41985 = p__41984;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41985,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41985,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41985,(2),null);
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
var len__5749__auto___42738 = arguments.length;
var i__5750__auto___42739 = (0);
while(true){
if((i__5750__auto___42739 < len__5749__auto___42738)){
args__5755__auto__.push((arguments[i__5750__auto___42739]));

var G__42740 = (i__5750__auto___42739 + (1));
i__5750__auto___42739 = G__42740;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,el,hiccup,p__41997){
var vec__41998 = p__41997;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41998,(0),null);
var map__42001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41998,(1),null);
var map__42001__$1 = cljs.core.__destructure_map(map__42001);
var unmounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42001__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42001__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42001__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var on_alias_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42001__$1,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043));
var impl = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"mounts","mounts",-791474425),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),(function (){var or__5025__auto__ = unmounts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
})(),new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930),alias_data,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043),on_alias_exception], null);
var vdom__$1 = ((cljs.core.seq_QMARK_(hiccup))?(function (){var vec__42002 = replicant.core.get_children_ks((function (){var pt__41325__auto__ = [null,null,null];
var G__42005 = pt__41325__auto__;
G__42005.push((function (){var temp__5825__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(temp__5825__auto__)){
var k__41319__auto__ = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__41325__auto__[(0)]),k__41319__auto__], null);
} else {
return null;
}
})());

G__42005.push(null);

G__42005.push(hiccup);

G__42005.push(null);

G__42005.push(null);

G__42005.push(null);

G__42005.push(null);

return G__42005;
})(),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42002,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42002,(1),null);
return cljs.core.second(replicant.core.update_children(impl,el,children,ks,vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__41988_SHARP_){
return (p1__41988_SHARP_[(1)]);
}),vdom)),cljs.core.count(vdom)));
})():(function (){var headers = replicant.core.get_hiccup_headers(null,hiccup);
if(cljs.core.truth_(headers)){
var temp__5825__auto___42749 = (function (){var or__5025__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5825__auto___42749)){
var ctx__41609__auto___42751 = temp__5825__auto___42749;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__41609__auto___42751);
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
return cljs.core.second(replicant.core.update_children(impl,el,(cljs.core.truth_(headers)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers], null):null),(function (){var G__42006 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__42006,k);
} else {
return G__42006;
}
})(),vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__41989_SHARP_){
return (p1__41989_SHARP_[(1)]);
}),vdom)),(cljs.core.truth_(cljs.core.first(vdom))?(1):(0))));
}
})());
var hooks = cljs.core.deref(new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(impl));
var temp__5823__auto___42756 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"mounts","mounts",-791474425).cljs$core$IFn$_invoke$arity$1(impl)));
if(temp__5823__auto___42756){
var mounts_42757 = temp__5823__auto___42756;
replicant.protocols.next_frame(renderer,(function (){
cljs.core.run_BANG_((function (p1__41990_SHARP_){
return replicant.core.perform_post_mount_update(renderer,p1__41990_SHARP_);
}),mounts_42757);

return cljs.core.run_BANG_((function (p1__41991_SHARP_){
return replicant.core.call_hook(renderer,p1__41991_SHARP_);
}),hooks);
}));
} else {
cljs.core.run_BANG_((function (p1__41992_SHARP_){
return replicant.core.call_hook(renderer,p1__41992_SHARP_);
}),hooks);
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),hooks,new cljs.core.Keyword(null,"vdom","vdom",953162958),vdom__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521),new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)], null);
}));

(replicant.core.reconcile.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.reconcile.cljs$lang$applyTo = (function (seq41993){
var G__41994 = cljs.core.first(seq41993);
var seq41993__$1 = cljs.core.next(seq41993);
var G__41995 = cljs.core.first(seq41993__$1);
var seq41993__$2 = cljs.core.next(seq41993__$1);
var G__41996 = cljs.core.first(seq41993__$2);
var seq41993__$3 = cljs.core.next(seq41993__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41994,G__41995,G__41996,seq41993__$3);
}));

replicant.assert.add_reporter(new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266),replicant.console_logger.report);

//# sourceMappingURL=replicant.core.js.map
