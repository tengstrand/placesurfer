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
var tag_name = (function (){var G__28055 = (cljs.core.truth_(id_index)?tag__$1.substring((0),id_index):(cljs.core.truth_(class_index)?tag__$1.substring((0),class_index):tag__$1
));
if(cljs.core.truth_(ns)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,G__28055);
} else {
return G__28055;
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
var fn__27759__auto___28271 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28272 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28273 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28056 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = sexp;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," contains an empty id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Either complete the id or remove the # character."], null);
var G__28056__$1 = (cljs.core.truth_(fn__27759__auto___28271)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28056,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28271):G__28056);
var G__28056__$2 = (cljs.core.truth_(alias__27760__auto___28272)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28056__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28272):G__28056__$1);
if(cljs.core.truth_(fd__27761__auto___28273)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28056__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28273);
} else {
return G__28056__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/#[^a-zA-Z_\.]/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)))))){
var fn__27759__auto___28274 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28275 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28276 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28057 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = sexp;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," contains an invalid id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"IDs must start with a letter."], null);
var G__28057__$1 = (cljs.core.truth_(fn__27759__auto___28274)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28057,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28274):G__28057);
var G__28057__$2 = (cljs.core.truth_(alias__27760__auto___28275)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28057__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28275):G__28057__$1);
if(cljs.core.truth_(fd__27761__auto___28276)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28057__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28276);
} else {
return G__28057__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/\.$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)))))){
var fn__27759__auto___28277 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28278 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28279 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28058 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = sexp;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," contains an empty class"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"This may cause a DOMException and is considered a coding error. Replicant will not sacrifice performance to work around it."], null);
var G__28058__$1 = (cljs.core.truth_(fn__27759__auto___28277)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28058,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28277):G__28058);
var G__28058__$2 = (cljs.core.truth_(alias__27760__auto___28278)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28058__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28278):G__28058__$1);
if(cljs.core.truth_(fd__27761__auto___28279)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28058__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28279);
} else {
return G__28058__$2;
}
})());
} else {
}

var pt__27573__auto__ = replicant.core.parse_tag(sym);
var G__28059 = pt__27573__auto__;
G__28059.push((function (){var temp__5823__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5823__auto__)){
var k__27567__auto__ = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__27573__auto__[(0)]),k__27567__auto__], null);
} else {
return null;
}
})());

G__28059.push(attrs);

G__28059.push(((has_args_QMARK_)?cljs.core.rest(args):args));

G__28059.push(ns);

G__28059.push(sexp);

G__28059.push(null);

G__28059.push(null);

return G__28059;
} else {
var text__27584__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexp);
return (new Array(null,null,null,null,null,null,null,text__27584__auto__,text__27584__auto__,null));
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
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__28060_SHARP_){
return cljs.core.not_empty(p1__28060_SHARP_.trim());
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
var vec__28062 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28061_SHARP_){
return p1__28061_SHARP_.trim();
}),kv.split(":"));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28062,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28062,(1),null);
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
var G__28065 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009)], 0));
var G__28065__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28065,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__28065);
var G__28065__$2 = ((cljs.core.seq(classes__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28065__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes__$1):G__28065__$1);
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__28065__$2,new cljs.core.Keyword(null,"style","style",-496642736),replicant.core.explode_styles);
} else {
return G__28065__$2;
}
});
/**
 * Given `headers` as produced by `get-hiccup-headers`, returns a map of all HTML
 *   attributes.
 */
replicant.core.get_attrs = (function replicant$core$get_attrs(headers){
if((!((!(cljs.core.contains_QMARK_((headers[(4)]),new cljs.core.Keyword(null,"className","className",-1983287057))))))){
var fn__27759__auto___28280 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28281 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28282 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28066 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Use :class, not :className",new cljs.core.Keyword(null,"message","message",-406056002),":className is not supported, please use :class instead. It takes a keyword, a string, or a collection of either of those."], null);
var G__28066__$1 = (cljs.core.truth_(fn__27759__auto___28280)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28066,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28280):G__28066);
var G__28066__$2 = (cljs.core.truth_(alias__27760__auto___28281)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28066__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28281):G__28066__$1);
if(cljs.core.truth_(fd__27761__auto___28282)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28066__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28282);
} else {
return G__28066__$2;
}
})());
} else {
}

if((!((function (){var class__27941__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return (((!(typeof class__27941__auto__ === 'string'))) || ((class__27941__auto__.indexOf(" ") < (0))));
})()))){
var fn__27759__auto___28283 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28284 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28285 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28067 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid space separated :class strings",new cljs.core.Keyword(null,"message","message",-406056002),(function (){var class__27941__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return [":class supports collections of keywords and/or strings as classes. These perform better, and are usually more convenient to work with. Solve by converting ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class__27941__auto__], 0))," to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(class__27941__auto__.split(" "))], 0))].join('');
})()], null);
var G__28067__$1 = (cljs.core.truth_(fn__27759__auto___28283)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28067,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28283):G__28067);
var G__28067__$2 = (cljs.core.truth_(alias__27760__auto___28284)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28067__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28284):G__28067__$1);
if(cljs.core.truth_(fd__27761__auto___28285)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28067__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28285);
} else {
return G__28067__$2;
}
})());
} else {
}

if((!((!(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1((headers[(4)])) === 'string'))))){
var fn__27759__auto___28286 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28287 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28288 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28068 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid string styles",new cljs.core.Keyword(null,"message","message",-406056002),":style supports structured maps of CSS property/value pairs. Strings must be parsed, so they're both slower and harder to read and write."], null);
var G__28068__$1 = (cljs.core.truth_(fn__27759__auto___28286)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28068,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28286):G__28068);
var G__28068__$2 = (cljs.core.truth_(alias__27760__auto___28287)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28068__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28287):G__28068__$1);
if(cljs.core.truth_(fd__27761__auto___28288)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28068__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28288);
} else {
return G__28068__$2;
}
})());
} else {
}

return replicant.core.prep_attrs((headers[(4)]),(headers[(1)]),(headers[(2)]));
});
replicant.core.merge_attrs = (function replicant$core$merge_attrs(attrs,overrides){
var G__28069 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(overrides,new cljs.core.Keyword(null,"style","style",-496642736))], 0));
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides);
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__28069,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides));
} else {
return G__28069;
}
});
replicant.core.get_mounting_attrs = (function replicant$core$get_mounting_attrs(headers){
var temp__5821__auto__ = new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5821__auto__)){
var mounting = temp__5821__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs(headers),(function (){var headers__$1 = (function (){var G__28070 = headers;
if(cljs.core.truth_(mounting)){
var headers__27591__auto__ = G__28070;
(headers__27591__auto__[(4)] = replicant.core.merge_attrs((headers__27591__auto__[(4)]),mounting));

return headers__27591__auto__;
} else {
return G__28070;
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
return replicant.core.flatten_map_seqs((function (p1__28071_SHARP_){
var G__28072 = p1__28071_SHARP_;
if((G__28072 == null)){
return null;
} else {
return replicant.core.get_hiccup_headers(ns,G__28072);
}
}),(headers[(5)]));
}
});
/**
 * Like `get-children` but returns a tuple of `[children ks]` where `ks` is a set
 *   of the keys in `children`.
 */
replicant.core.get_children_ks = (function replicant$core$get_children_ks(headers,ns){
var vec__28073 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__28076,hiccup){
var vec__28077 = p__28076;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28077,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28077,(1),null);
if(cljs.core.truth_(hiccup)){
var headers__$1 = replicant.core.get_hiccup_headers(ns,hiccup);
var k = (headers__$1[(3)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,headers__$1),(function (){var G__28080 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__28080,k);
} else {
return G__28080;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY)], null),replicant.core.flatten_seqs((headers[(5)])));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28073,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28073,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks)], null);
});
replicant.core._STAR_dispatch_STAR_ = null;
replicant.core.build_event_map = (function replicant$core$build_event_map(e){
var node = e.target;
var G__28081 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","dom-event","replicant.trigger/dom-event",930136738),new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512),e], null);
var G__28081__$1 = (cljs.core.truth_(node)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28081,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node):G__28081);
if(cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28081__$1,new cljs.core.Keyword("replicant","dispatch","replicant/dispatch",2079272115),replicant.core._STAR_dispatch_STAR_);
} else {
return G__28081__$1;
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
var G__28082 = replicant.core.build_event_map(e);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__28082) : handler.call(null,G__28082));
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
replicant.core.call_hook = (function replicant$core$call_hook(renderer,p__28083){
var vec__28084 = p__28083;
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28084,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28084,(1),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28084,(2),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28084,(3),null);
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28084,(4),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28084,(5),null);
var f = replicant.core.get_life_cycle_hook(hook);
var life_cycle = (((old == null))?new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865):(((new$ == null))?new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184):new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235)
));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),k)) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235))))))))))){
var G__28087 = (function (){var G__28088 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","life-cycle","replicant.trigger/life-cycle",-205660972),new cljs.core.Keyword("replicant","life-cycle","replicant/life-cycle",1802888458),life_cycle,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node,new cljs.core.Keyword("replicant","remember","replicant/remember",809947829),(function replicant$core$call_hook_$_remember(memory){
return replicant.protocols.remember(renderer,node,memory);
})], null);
var G__28088__$1 = (cljs.core.truth_(details)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28088,new cljs.core.Keyword("replicant","details","replicant/details",-1846218867),details):G__28088);
var G__28088__$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28088__$1,new cljs.core.Keyword("replicant","memory","replicant/memory",-1882688464),replicant.protocols.recall(renderer,node)):G__28088__$1);
if(cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28088__$2,new cljs.core.Keyword("replicant","dispatch","replicant/dispatch",2079272115),replicant.core._STAR_dispatch_STAR_);
} else {
return G__28088__$2;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28087) : f.call(null,G__28087));
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
var len__5749__auto___28295 = arguments.length;
var i__5750__auto___28296 = (0);
while(true){
if((i__5750__auto___28296 < len__5749__auto___28295)){
args__5755__auto__.push((arguments[i__5750__auto___28296]));

var G__28297 = (i__5750__auto___28296 + (1));
i__5750__auto___28296 = G__28297;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (p__28093,node,headers,p__28094){
var map__28095 = p__28093;
var map__28095__$1 = cljs.core.__destructure_map(map__28095);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28095__$1,new cljs.core.Keyword(null,"hooks","hooks",-413590103));
var vec__28096 = p__28094;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28096,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28096,(1),null);
var target = (cljs.core.truth_(headers)?(headers[(4)]):(vdom[(3)]));
var new_hooks = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (life_cycle_key){
var temp__5823__auto__ = (life_cycle_key.cljs$core$IFn$_invoke$arity$1 ? life_cycle_key.cljs$core$IFn$_invoke$arity$1(target) : life_cycle_key.call(null,target));
if(cljs.core.truth_(temp__5823__auto__)){
var hook = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [life_cycle_key,hook], null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753),new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394)], null));
if(cljs.core.empty_QMARK_(new_hooks)){
return null;
} else {
var headers_sexp = (function (){var G__28099 = headers;
if((G__28099 == null)){
return null;
} else {
return (G__28099[(7)]);
}
})();
var vdom_sexp = (function (){var G__28100 = vdom;
if((G__28100 == null)){
return null;
} else {
return (G__28100[(7)]);
}
})();
return cljs.core._vreset_BANG_(hooks,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(hooks),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28101){
var vec__28102 = p__28101;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28102,(0),null);
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28102,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook,k,node,headers_sexp,vdom_sexp,details], null);
}),new_hooks)));
}
}));

(replicant.core.register_hooks.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.register_hooks.cljs$lang$applyTo = (function (seq28089){
var G__28090 = cljs.core.first(seq28089);
var seq28089__$1 = cljs.core.next(seq28089);
var G__28091 = cljs.core.first(seq28089__$1);
var seq28089__$2 = cljs.core.next(seq28089__$1);
var G__28092 = cljs.core.first(seq28089__$2);
var seq28089__$3 = cljs.core.next(seq28089__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28090,G__28091,G__28092,seq28089__$3);
}));

replicant.core.register_mount = (function replicant$core$register_mount(p__28105,node,mounting_attrs,attrs){
var map__28106 = p__28105;
var map__28106__$1 = cljs.core.__destructure_map(map__28106);
var mounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28106__$1,new cljs.core.Keyword(null,"mounts","mounts",-791474425));
return cljs.core._vreset_BANG_(mounts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(mounts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,mounting_attrs,attrs], null)));
});
replicant.core.update_styles = (function replicant$core$update_styles(renderer,el,new_styles,old_styles){
var new_ks = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28107_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__28107_SHARP_) == null);
}),cljs.core.keys(new_styles)));
var old_ks = cljs.core.set(cljs.core.keys(old_styles));
cljs.core.run_BANG_((function (p1__28108_SHARP_){
return replicant.protocols.remove_style(renderer,el,p1__28108_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new_ks,old_ks));

return cljs.core.run_BANG_((function (p1__28109_SHARP_){
var new_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__28109_SHARP_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_style,cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_styles,p1__28109_SHARP_))){
if((!((p1__28109_SHARP_ instanceof cljs.core.Keyword)))){
var fn__27759__auto___28304 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28305 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28306 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28110 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28109_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will ","technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28109_SHARP_)," and once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28109_SHARP_)))," may produce undesired results. Your safest option is to always use keywords."].join('')], null);
var G__28110__$1 = (cljs.core.truth_(fn__27759__auto___28304)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28110,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28304):G__28110);
var G__28110__$2 = (cljs.core.truth_(alias__27760__auto___28305)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28110__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28305):G__28110__$1);
if(cljs.core.truth_(fd__27761__auto___28306)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28110__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28306);
} else {
return G__28110__$2;
}
})());
} else {
}

if((!((function (){var name__27980__auto__ = cljs.core.name(p1__28109_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__27980__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__27980__auto__,clojure.string.lower_case(name__27980__auto__))));
})()))){
var fn__27759__auto___28309 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28310 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28311 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28111 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__28109_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28109_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__28111__$1 = (cljs.core.truth_(fn__27759__auto___28309)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28111,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28309):G__28111);
var G__28111__$2 = (cljs.core.truth_(alias__27760__auto___28310)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28111__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28310):G__28111__$1);
if(cljs.core.truth_(fd__27761__auto___28311)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28111__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28311);
} else {
return G__28111__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__28109_SHARP_,replicant.core.get_style_val(p1__28109_SHARP_,new_style));
} else {
return null;
}
}),new_ks);
});
replicant.core.update_classes = (function replicant$core$update_classes(renderer,el,new_classes,old_classes){
cljs.core.run_BANG_((function (p1__28112_SHARP_){
return replicant.protocols.remove_class(renderer,el,p1__28112_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new_classes),old_classes));

return cljs.core.run_BANG_((function (p1__28113_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__28113_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(old_classes),new_classes));
});
replicant.core.get_event_handler_options = (function replicant$core$get_event_handler_options(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,k){
var G__28114 = res;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("replicant.event",cljs.core.namespace(k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28114,cljs.core.name(k),(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(m) : k.call(null,m)));
} else {
return G__28114;
}
}),null,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("replicant.event","wrap-handler?","replicant.event/wrap-handler?",845655928)], 0))));
});
replicant.core.add_event_listeners = (function replicant$core$add_event_listeners(renderer,el,val){
return cljs.core.run_BANG_((function (p__28115){
var vec__28116 = p__28115;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28116,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28116,(1),null);
if((!((function (){var event__27952__auto__ = cljs.core.name(event);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("DOMContentLoaded",event__27952__auto__)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event__27952__auto__,clojure.string.lower_case(event__27952__auto__))));
})()))){
var fn__27759__auto___28318 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28319 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28320 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28119 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(event)))),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Most event names should be in all lower-case. Replicant passes your event names directly to addEventListener, and mis-cased event names will fail silently."], null);
var G__28119__$1 = (cljs.core.truth_(fn__27759__auto___28318)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28119,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28318):G__28119);
var G__28119__$2 = (cljs.core.truth_(alias__27760__auto___28319)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28119__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28319):G__28119__$1);
if(cljs.core.truth_(fd__27761__auto___28320)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28119__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28320);
} else {
return G__28119__$2;
}
})());
} else {
}

var temp__5821__auto__ = new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006).cljs$core$IFn$_invoke$arity$1(handler);
if(cljs.core.truth_(temp__5821__auto__)){
var eh = temp__5821__auto__;
var temp__5823__auto__ = replicant.core.get_event_handler(eh,event,handler);
if(cljs.core.truth_(temp__5823__auto__)){
var eh__$1 = temp__5823__auto__;
return replicant.protocols.set_event_handler(renderer,el,event,eh__$1,replicant.core.get_event_handler_options(handler));
} else {
return null;
}
} else {
var temp__5823__auto__ = replicant.core.get_event_handler(handler,event,null);
if(cljs.core.truth_(temp__5823__auto__)){
var handler__$1 = temp__5823__auto__;
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
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_handler,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006));
if(cljs.core.truth_(temp__5821__auto__)){
var handler = temp__5821__auto__;
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
return [(function (){var temp__5823__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [ns,"/"].join('');
} else {
return null;
}
})(),cljs.core.name(x)].join('');
});
replicant.core.set_attr_val = (function replicant$core$set_attr_val(renderer,el,attr,v){
var an = cljs.core.name(attr);
if((!((!(clojure.string.starts_with_QMARK_(cljs.core.name(attr),"on")))))){
var fn__27759__auto___28364 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28365 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28366 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28120 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Set event listeners in the :on map",new cljs.core.Keyword(null,"message","message",-406056002),["Event handler attributes are not supported. Instead of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," set :on {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash(cljs.core.name(attr).substring((2)))))," ,,,}"].join('')], null);
var G__28120__$1 = (cljs.core.truth_(fn__27759__auto___28364)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28120,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28364):G__28120);
var G__28120__$2 = (cljs.core.truth_(alias__27760__auto___28365)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28120__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28365):G__28120__$1);
if(cljs.core.truth_(fd__27761__auto___28366)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28120__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28366);
} else {
return G__28120__$2;
}
})());
} else {
}

if(cljs.core.not(cljs.core.re_find(/^[a-zA-Z\-:_][a-zA-Z0-9\-:\._]*$/,cljs.core.name(attr)))){
var fn__27759__auto___28371 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28372 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28373 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28121 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Invalid attribute name ",cljs.core.name(attr)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var attr__27991__auto__ = cljs.core.name(attr);
return ["Tried to set attribute ",attr__27991__auto__," to value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),". This will fail","horribly in the browser because ",(cljs.core.truth_(cljs.core.re_find(/^[0-9]/,attr__27991__auto__))?" it starts with a number":(cljs.core.truth_(cljs.core.re_find(/^\./,attr__27991__auto__))?" it starts with a dot":[" it contains the character ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/[^a-zA-Z0-9\-:\._]/,attr__27991__auto__))].join('')
)),", which isn't allowed as per the HTML spec."].join('');
})()], null);
var G__28121__$1 = (cljs.core.truth_(fn__27759__auto___28371)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28121,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28371):G__28121);
var G__28121__$2 = (cljs.core.truth_(alias__27760__auto___28372)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28121__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28372):G__28121__$1);
if(cljs.core.truth_(fd__27761__auto___28373)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28121__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28373);
} else {
return G__28121__$2;
}
})());
} else {
}

return replicant.protocols.set_attribute(renderer,el,an,(function (){var G__28122 = v;
if((((v instanceof cljs.core.Keyword)) || ((v instanceof cljs.core.Symbol)))){
return replicant.core.stringify(G__28122);
} else {
return G__28122;
}
})(),(function (){var G__28123 = cljs.core.PersistentArrayMap.EMPTY;
var G__28123__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xml:")))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28123,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xmlns):G__28123);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xlink:"))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28123__$1,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xlinkns);
} else {
return G__28123__$1;
}
})());
});
replicant.core.update_attr = (function replicant$core$update_attr(renderer,el,attr,new$,old){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__28124 = attr;
var G__28124__$1 = (((G__28124 instanceof cljs.core.Keyword))?G__28124.fqn:null);
switch (G__28124__$1) {
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
var temp__5821__auto__ = (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(new$) : attr.call(null,new$));
if(cljs.core.truth_(temp__5821__auto__)){
var v = temp__5821__auto__;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28126_SHARP_,p2__28125_SHARP_){
return replicant.core.update_attr(renderer,el,p2__28125_SHARP_,new_attrs,old_attrs);
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
return cljs.core.run_BANG_((function (p1__28127_SHARP_){
if((!((p1__28127_SHARP_ instanceof cljs.core.Keyword)))){
var fn__27759__auto___28397 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28398 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28399 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28128 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28127_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will ","technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28127_SHARP_)," and once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28127_SHARP_)))," may produce undesired results. Your safest option is to always use keywords."].join('')], null);
var G__28128__$1 = (cljs.core.truth_(fn__27759__auto___28397)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28128,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28397):G__28128);
var G__28128__$2 = (cljs.core.truth_(alias__27760__auto___28398)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28128__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28398):G__28128__$1);
if(cljs.core.truth_(fd__27761__auto___28399)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28128__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28399);
} else {
return G__28128__$2;
}
})());
} else {
}

if((!((function (){var name__27980__auto__ = cljs.core.name(p1__28127_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__27980__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__27980__auto__,clojure.string.lower_case(name__27980__auto__))));
})()))){
var fn__27759__auto___28412 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28413 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28414 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28129 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__28127_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28127_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__28129__$1 = (cljs.core.truth_(fn__27759__auto___28412)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28129,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28412):G__28129);
var G__28129__$2 = (cljs.core.truth_(alias__27760__auto___28413)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28129__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28413):G__28129__$1);
if(cljs.core.truth_(fd__27761__auto___28414)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28129__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28414);
} else {
return G__28129__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__28127_SHARP_,replicant.core.get_style_val(p1__28127_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__28127_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_styles,cljs.core.keys(new_styles)));
});
replicant.core.set_classes = (function replicant$core$set_classes(renderer,el,new_classes){
return cljs.core.run_BANG_((function (p1__28130_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__28130_SHARP_);
}),new_classes);
});
replicant.core.set_attr = (function replicant$core$set_attr(renderer,el,attr,new$){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__28131 = attr;
var G__28131__$1 = (((G__28131 instanceof cljs.core.Keyword))?G__28131.fqn:null);
switch (G__28131__$1) {
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
cljs.core.run_BANG_((function (p__28132){
var vec__28133 = p__28132;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28133,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28133,(1),null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-replicant-error","data-replicant-error",1583668098),["Undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)].join('')], null),(function (){var iter__5503__auto__ = (function replicant$core$render_default_alias_$_iter__28136(s__28137){
return (new cljs.core.LazySeq(null,(function (){
var s__28137__$1 = s__28137;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__28137__$1);
if(temp__5823__auto__){
var s__28137__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28137__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28137__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28139 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28138 = (0);
while(true){
if((i__28138 < size__5502__auto__)){
var child = cljs.core._nth(c__5501__auto__,i__28138);
cljs.core.chunk_append(b__28139,(function (){var G__28140 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__28140], 0));
} else {
return G__28140;
}
})());

var G__28472 = (i__28138 + (1));
i__28138 = G__28472;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28139),replicant$core$render_default_alias_$_iter__28136(cljs.core.chunk_rest(s__28137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28139),null);
}
} else {
var child = cljs.core.first(s__28137__$2);
return cljs.core.cons((function (){var G__28141 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__28141], 0));
} else {
return G__28141;
}
})(),replicant$core$render_default_alias_$_iter__28136(cljs.core.rest(s__28137__$2)));
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
replicant.core.get_alias_headers = (function replicant$core$get_alias_headers(p__28143,headers){
var map__28144 = p__28143;
var map__28144__$1 = cljs.core.__destructure_map(map__28144);
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28144__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28144__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var on_alias_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28144__$1,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043));
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
var attrs__$1 = (function (){var G__28145 = attrs;
var G__28145__$1 = (cljs.core.truth_(id)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__28145,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__28142_SHARP_){
var or__5025__auto__ = p1__28142_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return id;
}
})):G__28145);
var G__28145__$2 = (cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.seq(classes);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs);
}
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__28145__$1,new cljs.core.Keyword(null,"class","class",-2030961996),replicant.core.add_classes,classes):G__28145__$1);
if(cljs.core.truth_(alias_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28145__$2,new cljs.core.Keyword("replicant","alias-data","replicant/alias-data",1929752572),alias_data);
} else {
return G__28145__$2;
}
})();
var children = cljs.core.seq(replicant.core.flatten_seqs((headers[(5)])));
if((!(cljs.core.fn_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,tag_name))))){
var fn__27759__auto___28506 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28507 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28508 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28146 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)," isn't defined"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["There's no available function to render this alias. Replicant will ","render an empty element with data attributes in its place. Available ","aliases are:\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.keys(aliases))].join('')], null);
var G__28146__$1 = (cljs.core.truth_(fn__27759__auto___28506)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28146,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28506):G__28146);
var G__28146__$2 = (cljs.core.truth_(alias__27760__auto___28507)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28146__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28507):G__28146__$1);
if(cljs.core.truth_(fd__27761__auto___28508)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28146__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28508);
} else {
return G__28146__$2;
}
})());
} else {
}

var alias_hiccup = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(attrs__$1,children) : f.call(null,attrs__$1,children));
if((!(((typeof alias_hiccup === 'string') || (replicant.hiccup.hiccup_QMARK_(alias_hiccup)))))){
var fn__27759__auto___28532 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28533 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28534 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28147 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Aliases must return valid hiccup",new cljs.core.Keyword(null,"message","message",-406056002),["Aliases must always represent a node in the document, and ","cannot return ",(((alias_hiccup == null))?"nil":((cljs.core.map_QMARK_(alias_hiccup))?"a map":((cljs.core.coll_QMARK_(alias_hiccup))?"multiple nodes":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alias_hiccup], 0))
))),". Please check the implementation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name),"."].join('')], null);
var G__28147__$1 = (cljs.core.truth_(fn__27759__auto___28532)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28147,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28532):G__28147);
var G__28147__$2 = (cljs.core.truth_(alias__27760__auto___28533)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28147__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28533):G__28147__$1);
if(cljs.core.truth_(fd__27761__auto___28534)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28147__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28534);
} else {
return G__28147__$2;
}
})());
} else {
}

var hh__27597__auto__ = replicant.core.get_hiccup_headers(null,alias_hiccup);
var alias__27598__auto__ = headers;
if(cljs.core.truth_(hh__27597__auto__)){
var G__28148 = hh__27597__auto__;
(G__28148[(3)] = (function (){var or__5025__auto__ = (alias__27598__auto__[(3)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (hh__27597__auto__[(3)]);
}
})());

(G__28148[(6)] = (alias__27598__auto__[(6)]));

(G__28148[(7)] = (hh__27597__auto__[(7)]));

(G__28148[(9)] = (alias__27598__auto__[(7)]));

return G__28148;
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
replicant.core.create_node = (function replicant$core$create_node(p__28149,headers){
var map__28150 = p__28149;
var map__28150__$1 = cljs.core.__destructure_map(map__28150);
var impl = map__28150__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28150__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5823__auto___28565 = (function (){var or__5025__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5823__auto___28565)){
var ctx__27753__auto___28570 = temp__5823__auto___28565;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__27753__auto___28570);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

var or__5025__auto__ = (function (){var temp__5823__auto__ = (headers[(8)]);
if(cljs.core.truth_(temp__5823__auto__)){
var text = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.protocols.create_text_node(renderer,text),(function (){var text__27882__auto__ = text;
return (new Array(null,null,null,null,null,null,false,text__27882__auto__,text__27882__auto__,null,null));
})()], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var temp__5823__auto__ = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(temp__5823__auto__)){
var alias_headers = temp__5823__auto__;
var vec__28151 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,alias_headers) : replicant.core.create_node.call(null,impl,alias_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(1),null);
var k = (alias_headers[(3)]);
var vdom__$1 = (function (){var headers__27889__auto__ = headers;
return (new Array((headers__27889__auto__[(0)]),(headers__27889__auto__[(3)]),(headers__27889__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom], null),(function (){var G__28154 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__28154,k);
} else {
return G__28154;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__27889__auto__[(4)]))),(headers__27889__auto__[(7)]),null,null,(1)));
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
var vec__28155 = replicant.core.get_mounting_attrs(headers);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28155,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28155,(1),null);
var children_ns = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("foreignObject",tag_name))?null:ns);
var _ = replicant.core.set_attributes(renderer,node,(function (){var or__5025__auto____$2 = mounting_attrs;
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return attrs;
}
})());
var vec__28158 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__28161,child_headers){
var vec__28162 = p__28161;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28162,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28162,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28162,(2),null);
if(cljs.core.truth_(child_headers)){
var vec__28165 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,child_headers) : replicant.core.create_node.call(null,impl,child_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28165,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28165,(1),null);
var k = (vdom[(1)]);
replicant.protocols.append_child(renderer,node,child_node);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,vdom),(function (){var G__28168 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__28168,k);
} else {
return G__28168;
}
})(),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks,n], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),(0)], null),replicant.core.get_children(headers,children_ns));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28158,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28158,(1),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28158,(2),null);
replicant.core.register_hooks(impl,node,headers);

if(cljs.core.truth_(mounting_attrs)){
replicant.core.register_mount(impl,node,mounting_attrs,attrs);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,(function (){var headers__27889__auto__ = headers;
return (new Array((headers__27889__auto__[(0)]),(headers__27889__auto__[(3)]),(headers__27889__auto__[(2)]),attrs,cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__27889__auto__[(4)]))),(headers__27889__auto__[(7)]),null,null,n_children));
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
var G__28653 = (coll_n + (1));
var G__28654 = dom_n;
var G__28655 = cljs.core.next(xs__$1);
coll_n = G__28653;
dom_n = G__28654;
xs__$1 = G__28655;
continue;
} else {
if(cljs.core.truth_((function (){var G__28170 = cljs.core.first(xs__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28170) : f.call(null,G__28170));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_n,dom_n], null);
} else {
var G__28656 = (coll_n + (1));
var G__28657 = (dom_n + (1));
var G__28658 = cljs.core.next(xs__$1);
coll_n = G__28656;
dom_n = G__28657;
xs__$1 = G__28658;
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
replicant.core.insert_children = (function replicant$core$insert_children(p__28171,el,children,vdom){
var map__28172 = p__28171;
var map__28172__$1 = cljs.core.__destructure_map(map__28172);
var impl = map__28172__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28172__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__28173,child){
var vec__28174 = p__28173;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28174,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28174,(1),null);
if(cljs.core.truth_(child)){
var vec__28177 = replicant.core.create_node(impl,child);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28177,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28177,(1),null);
replicant.protocols.append_child(renderer,el,node);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,vdom__$1),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,null),n], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom,(0)], null),children);
});
replicant.core.remove_child = (function replicant$core$remove_child(p__28180,unmounts,el,n,vdom){
var map__28181 = p__28180;
var map__28181__$1 = cljs.core.__destructure_map(map__28181);
var impl = map__28181__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28181__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var temp__5821__auto__ = (vdom[(9)]);
if(cljs.core.truth_(temp__5821__auto__)){
var id = temp__5821__auto__;
if(cljs.core.truth_((unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(id) : unmounts.call(null,id)))){
return vdom;
} else {
return null;
}
} else {
var res = (function (){var temp__5821__auto____$1 = replicant.core.get_unmounting_attrs(vdom);
if(cljs.core.truth_(temp__5821__auto____$1)){
var attrs = temp__5821__auto____$1;
var vdom__$1 = (function (){var vdom__27876__auto__ = vdom;
(vdom__27876__auto__[(9)] = replicant.vdom.id.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(replicant.vdom.id.cljs$core$IDeref$_deref$arity$1(null) + (1))));

return vdom__27876__auto__;
})();
var child = replicant.protocols.get_child(renderer,el,n);
replicant.core.update_attributes(renderer,child,attrs,(vdom__$1[(3)]));

cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.on_transition_end(renderer,child,(function (){
cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.remove_child(renderer,el,child);

var temp__5823__auto___28703 = new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((vdom__$1[(3)]));
if(cljs.core.truth_(temp__5823__auto___28703)){
var hook_28704 = temp__5823__auto___28703;
replicant.core.call_hook(renderer,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook_28704,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),child,null,vdom__$1], null));
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__28182 = headers;
if((G__28182 == null)){
return null;
} else {
return (G__28182[(7)]);
}
})(),(function (){var G__28183 = vdom;
if((G__28183 == null)){
return null;
} else {
return (G__28183[(7)]);
}
})());
});
replicant.core.move_nodes = (function replicant$core$move_nodes(p__28186,el,headers,new_children,vdom,old_children,n,n_children){
var map__28187 = p__28186;
var map__28187__$1 = cljs.core.__destructure_map(map__28187);
var impl = map__28187__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28187__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var vec__28188 = (cljs.core.truth_((headers[(3)]))?replicant.core.index_of((function (p1__28184_SHARP_){
return replicant.core.same_QMARK_(headers,p1__28184_SHARP_);
}),old_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var o_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28188,(0),null);
var o_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28188,(1),null);
var vec__28191 = (cljs.core.truth_((vdom[(1)]))?replicant.core.index_of((function (p1__28185_SHARP_){
return replicant.core.same_QMARK_(p1__28185_SHARP_,vdom);
}),new_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var n_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28191,(0),null);
var n_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28191,(1),null);
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
var G__28753 = cljs.core.next(children);
var G__28754 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,null);
var G__28755 = n__$1;
var G__28756 = n_children__$2;
children = G__28753;
vdom__$1 = G__28754;
n__$1 = G__28755;
n_children__$2 = G__28756;
continue;
} else {
var temp__5821__auto__ = replicant.core.remove_child(impl,unmounts,el,n__$1,cljs.core.first(children));
if(cljs.core.truth_(temp__5821__auto__)){
var pending_vdom = temp__5821__auto__;
var G__28757 = cljs.core.next(children);
var G__28758 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,pending_vdom);
var G__28759 = (n__$1 + (1));
var G__28760 = n_children__$2;
children = G__28757;
vdom__$1 = G__28758;
n__$1 = G__28759;
n_children__$2 = G__28760;
continue;
} else {
var G__28761 = cljs.core.next(children);
var G__28762 = vdom__$1;
var G__28763 = n__$1;
var G__28764 = (n_children__$2 - (1));
children = G__28761;
vdom__$1 = G__28762;
n__$1 = G__28763;
n_children__$2 = G__28764;
continue;
}

}
}
break;
}
} else {
if(old_empty_QMARK_){
var vec__28212 = replicant.core.insert_children(impl,el,new_c,vdom);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28212,(0),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28212,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_(vdom__$1),new_ks,(n_children__$1 + n__$1)], null);
} else {
if(((new_nil_QMARK_) && (old_nil_QMARK_))){
var G__28765 = cljs.core.next(new_c);
var G__28766 = cljs.core.next(old_c);
var G__28767 = n;
var G__28768 = move_n;
var G__28769 = n_children__$1;
var G__28770 = changed_QMARK_;
var G__28771 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__28765;
old_c = G__28766;
n = G__28767;
move_n = G__28768;
n_children__$1 = G__28769;
changed_QMARK_ = G__28770;
vdom = G__28771;
continue;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = old_vdom;
if(cljs.core.truth_(and__5023__auto__)){
return (old_vdom[(9)]);
} else {
return and__5023__auto__;
}
})())){
var vec__28215 = (cljs.core.truth_((function (){var and__5023__auto__ = new_headers;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not((function (){var G__28218 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__28218) : old_ks.call(null,G__28218));
})());
} else {
return and__5023__auto__;
}
})())?(function (){var res = replicant.core.create_node(impl,new_headers);
replicant.core.insert_node(r,el,cljs.core.first(res),n,n_children__$1);

return res;
})():null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28215,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28215,(1),null);
if(cljs.core.truth_((function (){var G__28219 = (old_vdom[(9)]);
return (unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(G__28219) : unmounts.call(null,G__28219));
})())){
if(new_nil_QMARK_){
var G__28772 = cljs.core.next(new_c);
var G__28773 = cljs.core.next(old_c);
var G__28774 = (n + (1));
var G__28775 = move_n;
var G__28776 = n_children__$1;
var G__28777 = changed_QMARK_;
var G__28778 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__28772;
old_c = G__28773;
n = G__28774;
move_n = G__28775;
n_children__$1 = G__28776;
changed_QMARK_ = G__28777;
vdom = G__28778;
continue;
} else {
if(cljs.core.truth_(child)){
var G__28779 = cljs.core.next(new_c);
var G__28780 = cljs.core.next(old_c);
var G__28781 = (n + (2));
var G__28782 = move_n;
var G__28783 = (n_children__$1 + (1));
var G__28784 = true;
var G__28785 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__28779;
old_c = G__28780;
n = G__28781;
move_n = G__28782;
n_children__$1 = G__28783;
changed_QMARK_ = G__28784;
vdom = G__28785;
continue;
} else {
var G__28786 = new_c;
var G__28787 = cljs.core.next(old_c);
var G__28788 = (n + (1));
var G__28789 = move_n;
var G__28790 = n_children__$1;
var G__28791 = changed_QMARK_;
var G__28792 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__28786;
old_c = G__28787;
n = G__28788;
move_n = G__28789;
n_children__$1 = G__28790;
changed_QMARK_ = G__28791;
vdom = G__28792;
continue;

}
}
} else {
if(new_nil_QMARK_){
var G__28793 = cljs.core.next(new_c);
var G__28794 = cljs.core.next(old_c);
var G__28795 = n;
var G__28796 = (move_n - (1));
var G__28797 = (n_children__$1 - (1));
var G__28798 = changed_QMARK_;
var G__28799 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__28793;
old_c = G__28794;
n = G__28795;
move_n = G__28796;
n_children__$1 = G__28797;
changed_QMARK_ = G__28798;
vdom = G__28799;
continue;
} else {
if(cljs.core.truth_(child)){
var G__28800 = cljs.core.next(new_c);
var G__28801 = cljs.core.next(old_c);
var G__28802 = (n + (1));
var G__28803 = move_n;
var G__28804 = n_children__$1;
var G__28805 = true;
var G__28806 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__28800;
old_c = G__28801;
n = G__28802;
move_n = G__28803;
n_children__$1 = G__28804;
changed_QMARK_ = G__28805;
vdom = G__28806;
continue;
} else {
var G__28807 = new_c;
var G__28808 = cljs.core.next(old_c);
var G__28809 = n;
var G__28810 = (move_n - (1));
var G__28811 = (n_children__$1 - (1));
var G__28812 = changed_QMARK_;
var G__28813 = vdom;
new_c = G__28807;
old_c = G__28808;
n = G__28809;
move_n = G__28810;
n_children__$1 = G__28811;
changed_QMARK_ = G__28812;
vdom = G__28813;
continue;

}
}
}
} else {
if(new_nil_QMARK_){
if(cljs.core.contains_QMARK_(new_ks,(old_vdom[(1)]))){
var G__28814 = cljs.core.next(new_c);
var G__28815 = old_c;
var G__28816 = n;
var G__28817 = move_n;
var G__28818 = n_children__$1;
var G__28819 = true;
var G__28820 = vdom;
new_c = G__28814;
old_c = G__28815;
n = G__28816;
move_n = G__28817;
n_children__$1 = G__28818;
changed_QMARK_ = G__28819;
vdom = G__28820;
continue;
} else {
var temp__5821__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5821__auto__)){
var unmounting_node = temp__5821__auto__;
var G__28823 = cljs.core.next(new_c);
var G__28824 = cljs.core.next(old_c);
var G__28825 = (n + (1));
var G__28826 = move_n;
var G__28827 = n_children__$1;
var G__28828 = true;
var G__28829 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__28823;
old_c = G__28824;
n = G__28825;
move_n = G__28826;
n_children__$1 = G__28827;
changed_QMARK_ = G__28828;
vdom = G__28829;
continue;
} else {
var G__28830 = cljs.core.next(new_c);
var G__28831 = cljs.core.next(old_c);
var G__28832 = n;
var G__28833 = move_n;
var G__28834 = (n_children__$1 - (1));
var G__28835 = true;
var G__28836 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__28830;
old_c = G__28831;
n = G__28832;
move_n = G__28833;
n_children__$1 = G__28834;
changed_QMARK_ = G__28835;
vdom = G__28836;
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

var G__28837 = cljs.core.next(new_c);
var G__28838 = cljs.core.next(old_c);
var G__28839 = (n + (1));
var G__28840 = move_n;
var G__28841 = n_children__$1;
var G__28842 = (function (){var or__5025__auto__ = changed_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (!(node_unchanged_QMARK_));
}
})();
var G__28843 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,new_vdom);
new_c = G__28837;
old_c = G__28838;
n = G__28839;
move_n = G__28840;
n_children__$1 = G__28841;
changed_QMARK_ = G__28842;
vdom = G__28843;
continue;
} else {
if(cljs.core.not((function (){var G__28220 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__28220) : old_ks.call(null,G__28220));
})())){
var vec__28221 = replicant.core.create_node(impl,new_headers);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28221,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28221,(1),null);
replicant.core.insert_node(r,el,child,n,n_children__$1);

var G__28844 = cljs.core.next(new_c);
var G__28845 = (function (){var G__28224 = old_c;
if((old_vdom == null)){
return cljs.core.next(G__28224);
} else {
return G__28224;
}
})();
var G__28846 = (n + (1));
var G__28847 = move_n;
var G__28848 = (n_children__$1 + (1));
var G__28849 = true;
var G__28850 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__28844;
old_c = G__28845;
n = G__28846;
move_n = G__28847;
n_children__$1 = G__28848;
changed_QMARK_ = G__28849;
vdom = G__28850;
continue;
} else {
if(((old_nil_QMARK_) || (cljs.core.not((function (){var G__28225 = (old_vdom[(1)]);
return (new_ks.cljs$core$IFn$_invoke$arity$1 ? new_ks.cljs$core$IFn$_invoke$arity$1(G__28225) : new_ks.call(null,G__28225));
})())))){
var temp__5821__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5821__auto__)){
var unmounting_node = temp__5821__auto__;
var G__28853 = new_c;
var G__28854 = cljs.core.next(old_c);
var G__28855 = (n + (1));
var G__28856 = move_n;
var G__28857 = n_children__$1;
var G__28858 = true;
var G__28859 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__28853;
old_c = G__28854;
n = G__28855;
move_n = G__28856;
n_children__$1 = G__28857;
changed_QMARK_ = G__28858;
vdom = G__28859;
continue;
} else {
var G__28860 = new_c;
var G__28861 = cljs.core.next(old_c);
var G__28862 = n;
var G__28863 = move_n;
var G__28864 = (n_children__$1 - (1));
var G__28865 = true;
var G__28866 = vdom;
new_c = G__28860;
old_c = G__28861;
n = G__28862;
move_n = G__28863;
n_children__$1 = G__28864;
changed_QMARK_ = G__28865;
vdom = G__28866;
continue;
}
} else {
var vec__28226 = replicant.core.move_nodes(impl,el,new_headers,new_c,old_vdom,old_c,n,n_children__$1);
var nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28226,(0),null);
var oc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28226,(1),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28226,(2),null);
var move_n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28226,(3),null);
var vdom_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28226,(4),null);
var G__28874 = nc;
var G__28875 = oc;
var G__28876 = n__$1;
var G__28877 = move_n__$1;
var G__28878 = n_children__$1;
var G__28879 = true;
var G__28880 = (function (){var G__28229 = vdom;
if(cljs.core.truth_(vdom_node)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__28229,vdom_node);
} else {
return G__28229;
}
})();
new_c = G__28874;
old_c = G__28875;
n = G__28876;
move_n = G__28877;
n_children__$1 = G__28878;
changed_QMARK_ = G__28879;
vdom = G__28880;
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
replicant.core.reconcile_STAR_ = (function replicant$core$reconcile_STAR_(p__28230,el,headers,vdom,index){
var map__28231 = p__28230;
var map__28231__$1 = cljs.core.__destructure_map(map__28231);
var impl = map__28231__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28231__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5823__auto___28883 = (function (){var or__5025__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5823__auto___28883)){
var ctx__27753__auto___28884 = temp__5823__auto___28883;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__27753__auto___28884);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

if((!((!(replicant.asserts.has_bad_conditional_attrs_QMARK_(vdom,headers)))))){
var fn__27759__auto___28887 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__27760__auto___28888 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__27761__auto___28889 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__28232 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid conditionals around the attribute map",new cljs.core.Keyword(null,"message","message",-406056002),replicant.asserts.convey_bad_conditional_attributes(vdom,headers)], null);
var G__28232__$1 = (cljs.core.truth_(fn__27759__auto___28887)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28232,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__27759__auto___28887):G__28232);
var G__28232__$2 = (cljs.core.truth_(alias__27760__auto___28888)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28232__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__27760__auto___28888):G__28232__$1);
if(cljs.core.truth_(fd__27761__auto___28889)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28232__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__27761__auto___28889);
} else {
return G__28232__$2;
}
})());
} else {
}

var or__5025__auto__ = ((replicant.core.unchanged_QMARK_(headers,vdom))?vdom:null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var temp__5823__auto__ = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(temp__5823__auto__)){
var alias_headers = temp__5823__auto__;
var vdom_child = cljs.core.first((vdom[(4)]));
var updated_vdom = (cljs.core.truth_(replicant.core.reusable_QMARK_(alias_headers,vdom_child))?(replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,alias_headers,vdom_child,index) : replicant.core.reconcile_STAR_.call(null,impl,el,alias_headers,vdom_child,index)):(function (){var vec__28233 = replicant.core.create_node(impl,alias_headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28233,(0),null);
var updated_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28233,(1),null);
replicant.protocols.replace_child(renderer,el,node,replicant.protocols.get_child(renderer,el,index));

return updated_vdom;
})());
var headers__27889__auto__ = headers;
return (new Array((headers__27889__auto__[(0)]),(headers__27889__auto__[(3)]),(headers__27889__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_vdom], null),(function (){var temp__5823__auto____$1 = (updated_vdom[(1)]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var k = temp__5823__auto____$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
} else {
return null;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__27889__auto__[(4)]))),(headers__27889__auto__[(7)]),null,null,(1)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((headers[(8)]),(vdom[(8)])))?(function (){var vec__28236 = replicant.core.create_node(impl,headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28236,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28236,(1),null);
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
var vec__28239 = (cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true], null):replicant.core.get_children_ks(headers__$1,replicant.core.get_ns(headers__$1)));
var new_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28239,(0),null);
var new_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28239,(1),null);
var inner_html_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28239,(2),null);
var vec__28242 = (cljs.core.truth_(new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530).cljs$core$IFn$_invoke$arity$1(vdom_attrs))?(function (){
replicant.protocols.remove_all_children(renderer,child);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null);
})()
:(cljs.core.truth_(inner_html_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vdom[(4)]),(vdom[(5)]),(vdom[(10)])], null)
));
var old_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(0),null);
var old_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(1),null);
var old_nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(2),null);
var vec__28245 = replicant.core.update_children(impl,child,new_children,new_ks,old_children,old_ks,old_nc);
var children_changed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28245,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28245,(1),null);
var child_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28245,(2),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28245,(3),null);
var attrs_changed_QMARK___$1 = ((attrs_changed_QMARK_) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1(vdom_attrs))));
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,headers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom,(cljs.core.truth_((function (){var and__5023__auto__ = attrs_changed_QMARK___$1;
if(and__5023__auto__){
return children_changed_QMARK_;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895),new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null):((attrs_changed_QMARK___$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null)
))], 0));

var headers__27889__auto__ = headers__$1;
return (new Array((headers__27889__auto__[(0)]),(headers__27889__auto__[(3)]),(headers__27889__auto__[(2)]),attrs,children,child_ks,cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__27889__auto__[(4)]))),(headers__27889__auto__[(7)]),null,null,n_children));
}
}
}
});
replicant.core.perform_post_mount_update = (function replicant$core$perform_post_mount_update(renderer,p__28248){
var vec__28249 = p__28248;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28249,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28249,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28249,(2),null);
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
var len__5749__auto___28932 = arguments.length;
var i__5750__auto___28933 = (0);
while(true){
if((i__5750__auto___28933 < len__5749__auto___28932)){
args__5755__auto__.push((arguments[i__5750__auto___28933]));

var G__28934 = (i__5750__auto___28933 + (1));
i__5750__auto___28933 = G__28934;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,el,hiccup,p__28261){
var vec__28262 = p__28261;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28262,(0),null);
var map__28265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28262,(1),null);
var map__28265__$1 = cljs.core.__destructure_map(map__28265);
var unmounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28265__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28265__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28265__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var on_alias_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28265__$1,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043));
var impl = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"mounts","mounts",-791474425),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),(function (){var or__5025__auto__ = unmounts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
})(),new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930),alias_data,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043),on_alias_exception], null);
var vdom__$1 = ((cljs.core.seq_QMARK_(hiccup))?(function (){var vec__28266 = replicant.core.get_children_ks((function (){var pt__27573__auto__ = [null,null,null];
var G__28269 = pt__27573__auto__;
G__28269.push((function (){var temp__5823__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(temp__5823__auto__)){
var k__27567__auto__ = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__27573__auto__[(0)]),k__27567__auto__], null);
} else {
return null;
}
})());

G__28269.push(null);

G__28269.push(hiccup);

G__28269.push(null);

G__28269.push(null);

G__28269.push(null);

G__28269.push(null);

return G__28269;
})(),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28266,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28266,(1),null);
return cljs.core.second(replicant.core.update_children(impl,el,children,ks,vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__28252_SHARP_){
return (p1__28252_SHARP_[(1)]);
}),vdom)),cljs.core.count(vdom)));
})():(function (){var headers = replicant.core.get_hiccup_headers(null,hiccup);
if(cljs.core.truth_(headers)){
var temp__5823__auto___28939 = (function (){var or__5025__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5823__auto___28939)){
var ctx__27753__auto___28940 = temp__5823__auto___28939;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__27753__auto___28940);
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
return cljs.core.second(replicant.core.update_children(impl,el,(cljs.core.truth_(headers)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers], null):null),(function (){var G__28270 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__28270,k);
} else {
return G__28270;
}
})(),vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__28253_SHARP_){
return (p1__28253_SHARP_[(1)]);
}),vdom)),(cljs.core.truth_(cljs.core.first(vdom))?(1):(0))));
}
})());
var hooks = cljs.core.deref(new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(impl));
var temp__5821__auto___28943 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"mounts","mounts",-791474425).cljs$core$IFn$_invoke$arity$1(impl)));
if(temp__5821__auto___28943){
var mounts_28944 = temp__5821__auto___28943;
replicant.protocols.next_frame(renderer,(function (){
cljs.core.run_BANG_((function (p1__28254_SHARP_){
return replicant.core.perform_post_mount_update(renderer,p1__28254_SHARP_);
}),mounts_28944);

return cljs.core.run_BANG_((function (p1__28255_SHARP_){
return replicant.core.call_hook(renderer,p1__28255_SHARP_);
}),hooks);
}));
} else {
cljs.core.run_BANG_((function (p1__28256_SHARP_){
return replicant.core.call_hook(renderer,p1__28256_SHARP_);
}),hooks);
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),hooks,new cljs.core.Keyword(null,"vdom","vdom",953162958),vdom__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521),new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)], null);
}));

(replicant.core.reconcile.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.reconcile.cljs$lang$applyTo = (function (seq28257){
var G__28258 = cljs.core.first(seq28257);
var seq28257__$1 = cljs.core.next(seq28257);
var G__28259 = cljs.core.first(seq28257__$1);
var seq28257__$2 = cljs.core.next(seq28257__$1);
var G__28260 = cljs.core.first(seq28257__$2);
var seq28257__$3 = cljs.core.next(seq28257__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28258,G__28259,G__28260,seq28257__$3);
}));

replicant.assert.add_reporter(new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266),replicant.console_logger.report);

//# sourceMappingURL=replicant.core.js.map
