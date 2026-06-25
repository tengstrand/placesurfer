goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29206 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_29206(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29210 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_29210(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28300 = coll;
var G__28301 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28300,G__28301) : shadow.dom.lazy_native_coll_seq.call(null,G__28300,G__28301));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28320 = arguments.length;
switch (G__28320) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28338 = arguments.length;
switch (G__28338) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28342 = arguments.length;
switch (G__28342) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28361 = arguments.length;
switch (G__28361) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__28430 = arguments.length;
switch (G__28430) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__28442 = arguments.length;
switch (G__28442) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e28443){if((e28443 instanceof Object)){
var e = e28443;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28443;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28446 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28447 = null;
var count__28448 = (0);
var i__28449 = (0);
while(true){
if((i__28449 < count__28448)){
var el = chunk__28447.cljs$core$IIndexed$_nth$arity$2(null,i__28449);
var handler_29258__$1 = ((function (seq__28446,chunk__28447,count__28448,i__28449,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28446,chunk__28447,count__28448,i__28449,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29258__$1);


var G__29262 = seq__28446;
var G__29263 = chunk__28447;
var G__29264 = count__28448;
var G__29265 = (i__28449 + (1));
seq__28446 = G__29262;
chunk__28447 = G__29263;
count__28448 = G__29264;
i__28449 = G__29265;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28446);
if(temp__5825__auto__){
var seq__28446__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28446__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28446__$1);
var G__29266 = cljs.core.chunk_rest(seq__28446__$1);
var G__29267 = c__5548__auto__;
var G__29268 = cljs.core.count(c__5548__auto__);
var G__29269 = (0);
seq__28446 = G__29266;
chunk__28447 = G__29267;
count__28448 = G__29268;
i__28449 = G__29269;
continue;
} else {
var el = cljs.core.first(seq__28446__$1);
var handler_29270__$1 = ((function (seq__28446,chunk__28447,count__28448,i__28449,el,seq__28446__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28446,chunk__28447,count__28448,i__28449,el,seq__28446__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29270__$1);


var G__29273 = cljs.core.next(seq__28446__$1);
var G__29274 = null;
var G__29275 = (0);
var G__29276 = (0);
seq__28446 = G__29273;
chunk__28447 = G__29274;
count__28448 = G__29275;
i__28449 = G__29276;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28453 = arguments.length;
switch (G__28453) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__28467 = cljs.core.seq(events);
var chunk__28468 = null;
var count__28469 = (0);
var i__28470 = (0);
while(true){
if((i__28470 < count__28469)){
var vec__28477 = chunk__28468.cljs$core$IIndexed$_nth$arity$2(null,i__28470);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29286 = seq__28467;
var G__29287 = chunk__28468;
var G__29288 = count__28469;
var G__29289 = (i__28470 + (1));
seq__28467 = G__29286;
chunk__28468 = G__29287;
count__28469 = G__29288;
i__28470 = G__29289;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28467);
if(temp__5825__auto__){
var seq__28467__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28467__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28467__$1);
var G__29291 = cljs.core.chunk_rest(seq__28467__$1);
var G__29292 = c__5548__auto__;
var G__29293 = cljs.core.count(c__5548__auto__);
var G__29294 = (0);
seq__28467 = G__29291;
chunk__28468 = G__29292;
count__28469 = G__29293;
i__28470 = G__29294;
continue;
} else {
var vec__28491 = cljs.core.first(seq__28467__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28491,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28491,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29295 = cljs.core.next(seq__28467__$1);
var G__29296 = null;
var G__29297 = (0);
var G__29298 = (0);
seq__28467 = G__29295;
chunk__28468 = G__29296;
count__28469 = G__29297;
i__28470 = G__29298;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__28499 = cljs.core.seq(styles);
var chunk__28500 = null;
var count__28501 = (0);
var i__28502 = (0);
while(true){
if((i__28502 < count__28501)){
var vec__28518 = chunk__28500.cljs$core$IIndexed$_nth$arity$2(null,i__28502);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28518,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28518,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29309 = seq__28499;
var G__29310 = chunk__28500;
var G__29311 = count__28501;
var G__29312 = (i__28502 + (1));
seq__28499 = G__29309;
chunk__28500 = G__29310;
count__28501 = G__29311;
i__28502 = G__29312;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28499);
if(temp__5825__auto__){
var seq__28499__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28499__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28499__$1);
var G__29313 = cljs.core.chunk_rest(seq__28499__$1);
var G__29314 = c__5548__auto__;
var G__29315 = cljs.core.count(c__5548__auto__);
var G__29316 = (0);
seq__28499 = G__29313;
chunk__28500 = G__29314;
count__28501 = G__29315;
i__28502 = G__29316;
continue;
} else {
var vec__28527 = cljs.core.first(seq__28499__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28527,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28527,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29319 = cljs.core.next(seq__28499__$1);
var G__29320 = null;
var G__29321 = (0);
var G__29322 = (0);
seq__28499 = G__29319;
chunk__28500 = G__29320;
count__28501 = G__29321;
i__28502 = G__29322;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__28535_29323 = key;
var G__28535_29324__$1 = (((G__28535_29323 instanceof cljs.core.Keyword))?G__28535_29323.fqn:null);
switch (G__28535_29324__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29334 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_29334,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_29334,"aria-");
}
})())){
el.setAttribute(ks_29334,value);
} else {
(el[ks_29334] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28542){
var map__28543 = p__28542;
var map__28543__$1 = cljs.core.__destructure_map(map__28543);
var props = map__28543__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28543__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28544 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28544,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28544,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28544,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28547 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28547,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28547;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28549 = arguments.length;
switch (G__28549) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28551){
var vec__28553 = p__28551;
var seq__28554 = cljs.core.seq(vec__28553);
var first__28555 = cljs.core.first(seq__28554);
var seq__28554__$1 = cljs.core.next(seq__28554);
var nn = first__28555;
var first__28555__$1 = cljs.core.first(seq__28554__$1);
var seq__28554__$2 = cljs.core.next(seq__28554__$1);
var np = first__28555__$1;
var nc = seq__28554__$2;
var node = vec__28553;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28556 = nn;
var G__28557 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28556,G__28557) : create_fn.call(null,G__28556,G__28557));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28558 = nn;
var G__28559 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28558,G__28559) : create_fn.call(null,G__28558,G__28559));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28564 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28564,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28564,(1),null);
var seq__28568_29367 = cljs.core.seq(node_children);
var chunk__28569_29368 = null;
var count__28570_29369 = (0);
var i__28571_29370 = (0);
while(true){
if((i__28571_29370 < count__28570_29369)){
var child_struct_29371 = chunk__28569_29368.cljs$core$IIndexed$_nth$arity$2(null,i__28571_29370);
var children_29372 = shadow.dom.dom_node(child_struct_29371);
if(cljs.core.seq_QMARK_(children_29372)){
var seq__28597_29376 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29372));
var chunk__28599_29377 = null;
var count__28600_29378 = (0);
var i__28601_29379 = (0);
while(true){
if((i__28601_29379 < count__28600_29378)){
var child_29380 = chunk__28599_29377.cljs$core$IIndexed$_nth$arity$2(null,i__28601_29379);
if(cljs.core.truth_(child_29380)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29380);


var G__29381 = seq__28597_29376;
var G__29382 = chunk__28599_29377;
var G__29383 = count__28600_29378;
var G__29384 = (i__28601_29379 + (1));
seq__28597_29376 = G__29381;
chunk__28599_29377 = G__29382;
count__28600_29378 = G__29383;
i__28601_29379 = G__29384;
continue;
} else {
var G__29386 = seq__28597_29376;
var G__29387 = chunk__28599_29377;
var G__29388 = count__28600_29378;
var G__29389 = (i__28601_29379 + (1));
seq__28597_29376 = G__29386;
chunk__28599_29377 = G__29387;
count__28600_29378 = G__29388;
i__28601_29379 = G__29389;
continue;
}
} else {
var temp__5825__auto___29391 = cljs.core.seq(seq__28597_29376);
if(temp__5825__auto___29391){
var seq__28597_29393__$1 = temp__5825__auto___29391;
if(cljs.core.chunked_seq_QMARK_(seq__28597_29393__$1)){
var c__5548__auto___29394 = cljs.core.chunk_first(seq__28597_29393__$1);
var G__29396 = cljs.core.chunk_rest(seq__28597_29393__$1);
var G__29397 = c__5548__auto___29394;
var G__29398 = cljs.core.count(c__5548__auto___29394);
var G__29399 = (0);
seq__28597_29376 = G__29396;
chunk__28599_29377 = G__29397;
count__28600_29378 = G__29398;
i__28601_29379 = G__29399;
continue;
} else {
var child_29401 = cljs.core.first(seq__28597_29393__$1);
if(cljs.core.truth_(child_29401)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29401);


var G__29402 = cljs.core.next(seq__28597_29393__$1);
var G__29403 = null;
var G__29404 = (0);
var G__29405 = (0);
seq__28597_29376 = G__29402;
chunk__28599_29377 = G__29403;
count__28600_29378 = G__29404;
i__28601_29379 = G__29405;
continue;
} else {
var G__29406 = cljs.core.next(seq__28597_29393__$1);
var G__29407 = null;
var G__29408 = (0);
var G__29409 = (0);
seq__28597_29376 = G__29406;
chunk__28599_29377 = G__29407;
count__28600_29378 = G__29408;
i__28601_29379 = G__29409;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29372);
}


var G__29411 = seq__28568_29367;
var G__29412 = chunk__28569_29368;
var G__29413 = count__28570_29369;
var G__29414 = (i__28571_29370 + (1));
seq__28568_29367 = G__29411;
chunk__28569_29368 = G__29412;
count__28570_29369 = G__29413;
i__28571_29370 = G__29414;
continue;
} else {
var temp__5825__auto___29415 = cljs.core.seq(seq__28568_29367);
if(temp__5825__auto___29415){
var seq__28568_29417__$1 = temp__5825__auto___29415;
if(cljs.core.chunked_seq_QMARK_(seq__28568_29417__$1)){
var c__5548__auto___29420 = cljs.core.chunk_first(seq__28568_29417__$1);
var G__29423 = cljs.core.chunk_rest(seq__28568_29417__$1);
var G__29424 = c__5548__auto___29420;
var G__29425 = cljs.core.count(c__5548__auto___29420);
var G__29426 = (0);
seq__28568_29367 = G__29423;
chunk__28569_29368 = G__29424;
count__28570_29369 = G__29425;
i__28571_29370 = G__29426;
continue;
} else {
var child_struct_29430 = cljs.core.first(seq__28568_29417__$1);
var children_29432 = shadow.dom.dom_node(child_struct_29430);
if(cljs.core.seq_QMARK_(children_29432)){
var seq__28607_29433 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29432));
var chunk__28609_29434 = null;
var count__28610_29435 = (0);
var i__28611_29436 = (0);
while(true){
if((i__28611_29436 < count__28610_29435)){
var child_29437 = chunk__28609_29434.cljs$core$IIndexed$_nth$arity$2(null,i__28611_29436);
if(cljs.core.truth_(child_29437)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29437);


var G__29438 = seq__28607_29433;
var G__29439 = chunk__28609_29434;
var G__29440 = count__28610_29435;
var G__29441 = (i__28611_29436 + (1));
seq__28607_29433 = G__29438;
chunk__28609_29434 = G__29439;
count__28610_29435 = G__29440;
i__28611_29436 = G__29441;
continue;
} else {
var G__29442 = seq__28607_29433;
var G__29443 = chunk__28609_29434;
var G__29444 = count__28610_29435;
var G__29445 = (i__28611_29436 + (1));
seq__28607_29433 = G__29442;
chunk__28609_29434 = G__29443;
count__28610_29435 = G__29444;
i__28611_29436 = G__29445;
continue;
}
} else {
var temp__5825__auto___29448__$1 = cljs.core.seq(seq__28607_29433);
if(temp__5825__auto___29448__$1){
var seq__28607_29449__$1 = temp__5825__auto___29448__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28607_29449__$1)){
var c__5548__auto___29450 = cljs.core.chunk_first(seq__28607_29449__$1);
var G__29452 = cljs.core.chunk_rest(seq__28607_29449__$1);
var G__29453 = c__5548__auto___29450;
var G__29454 = cljs.core.count(c__5548__auto___29450);
var G__29455 = (0);
seq__28607_29433 = G__29452;
chunk__28609_29434 = G__29453;
count__28610_29435 = G__29454;
i__28611_29436 = G__29455;
continue;
} else {
var child_29457 = cljs.core.first(seq__28607_29449__$1);
if(cljs.core.truth_(child_29457)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29457);


var G__29458 = cljs.core.next(seq__28607_29449__$1);
var G__29459 = null;
var G__29460 = (0);
var G__29461 = (0);
seq__28607_29433 = G__29458;
chunk__28609_29434 = G__29459;
count__28610_29435 = G__29460;
i__28611_29436 = G__29461;
continue;
} else {
var G__29463 = cljs.core.next(seq__28607_29449__$1);
var G__29464 = null;
var G__29465 = (0);
var G__29466 = (0);
seq__28607_29433 = G__29463;
chunk__28609_29434 = G__29464;
count__28610_29435 = G__29465;
i__28611_29436 = G__29466;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29432);
}


var G__29468 = cljs.core.next(seq__28568_29417__$1);
var G__29469 = null;
var G__29470 = (0);
var G__29471 = (0);
seq__28568_29367 = G__29468;
chunk__28569_29368 = G__29469;
count__28570_29369 = G__29470;
i__28571_29370 = G__29471;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__28670 = cljs.core.seq(node);
var chunk__28671 = null;
var count__28672 = (0);
var i__28673 = (0);
while(true){
if((i__28673 < count__28672)){
var n = chunk__28671.cljs$core$IIndexed$_nth$arity$2(null,i__28673);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29476 = seq__28670;
var G__29477 = chunk__28671;
var G__29478 = count__28672;
var G__29479 = (i__28673 + (1));
seq__28670 = G__29476;
chunk__28671 = G__29477;
count__28672 = G__29478;
i__28673 = G__29479;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28670);
if(temp__5825__auto__){
var seq__28670__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28670__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28670__$1);
var G__29480 = cljs.core.chunk_rest(seq__28670__$1);
var G__29481 = c__5548__auto__;
var G__29482 = cljs.core.count(c__5548__auto__);
var G__29483 = (0);
seq__28670 = G__29480;
chunk__28671 = G__29481;
count__28672 = G__29482;
i__28673 = G__29483;
continue;
} else {
var n = cljs.core.first(seq__28670__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29487 = cljs.core.next(seq__28670__$1);
var G__29488 = null;
var G__29489 = (0);
var G__29490 = (0);
seq__28670 = G__29487;
chunk__28671 = G__29488;
count__28672 = G__29489;
i__28673 = G__29490;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__28731 = arguments.length;
switch (G__28731) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__28746 = arguments.length;
switch (G__28746) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__28751 = arguments.length;
switch (G__28751) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___29507 = arguments.length;
var i__5750__auto___29508 = (0);
while(true){
if((i__5750__auto___29508 < len__5749__auto___29507)){
args__5755__auto__.push((arguments[i__5750__auto___29508]));

var G__29513 = (i__5750__auto___29508 + (1));
i__5750__auto___29508 = G__29513;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__28782_29520 = cljs.core.seq(nodes);
var chunk__28783_29521 = null;
var count__28784_29522 = (0);
var i__28785_29523 = (0);
while(true){
if((i__28785_29523 < count__28784_29522)){
var node_29524 = chunk__28783_29521.cljs$core$IIndexed$_nth$arity$2(null,i__28785_29523);
fragment.appendChild(shadow.dom._to_dom(node_29524));


var G__29525 = seq__28782_29520;
var G__29526 = chunk__28783_29521;
var G__29527 = count__28784_29522;
var G__29528 = (i__28785_29523 + (1));
seq__28782_29520 = G__29525;
chunk__28783_29521 = G__29526;
count__28784_29522 = G__29527;
i__28785_29523 = G__29528;
continue;
} else {
var temp__5825__auto___29529 = cljs.core.seq(seq__28782_29520);
if(temp__5825__auto___29529){
var seq__28782_29530__$1 = temp__5825__auto___29529;
if(cljs.core.chunked_seq_QMARK_(seq__28782_29530__$1)){
var c__5548__auto___29531 = cljs.core.chunk_first(seq__28782_29530__$1);
var G__29532 = cljs.core.chunk_rest(seq__28782_29530__$1);
var G__29533 = c__5548__auto___29531;
var G__29534 = cljs.core.count(c__5548__auto___29531);
var G__29535 = (0);
seq__28782_29520 = G__29532;
chunk__28783_29521 = G__29533;
count__28784_29522 = G__29534;
i__28785_29523 = G__29535;
continue;
} else {
var node_29536 = cljs.core.first(seq__28782_29530__$1);
fragment.appendChild(shadow.dom._to_dom(node_29536));


var G__29538 = cljs.core.next(seq__28782_29530__$1);
var G__29539 = null;
var G__29540 = (0);
var G__29541 = (0);
seq__28782_29520 = G__29538;
chunk__28783_29521 = G__29539;
count__28784_29522 = G__29540;
i__28785_29523 = G__29541;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28775){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28775));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28808_29544 = cljs.core.seq(scripts);
var chunk__28809_29545 = null;
var count__28810_29546 = (0);
var i__28811_29547 = (0);
while(true){
if((i__28811_29547 < count__28810_29546)){
var vec__28831_29549 = chunk__28809_29545.cljs$core$IIndexed$_nth$arity$2(null,i__28811_29547);
var script_tag_29550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28831_29549,(0),null);
var script_body_29552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28831_29549,(1),null);
eval(script_body_29552);


var G__29553 = seq__28808_29544;
var G__29554 = chunk__28809_29545;
var G__29555 = count__28810_29546;
var G__29556 = (i__28811_29547 + (1));
seq__28808_29544 = G__29553;
chunk__28809_29545 = G__29554;
count__28810_29546 = G__29555;
i__28811_29547 = G__29556;
continue;
} else {
var temp__5825__auto___29558 = cljs.core.seq(seq__28808_29544);
if(temp__5825__auto___29558){
var seq__28808_29559__$1 = temp__5825__auto___29558;
if(cljs.core.chunked_seq_QMARK_(seq__28808_29559__$1)){
var c__5548__auto___29561 = cljs.core.chunk_first(seq__28808_29559__$1);
var G__29562 = cljs.core.chunk_rest(seq__28808_29559__$1);
var G__29563 = c__5548__auto___29561;
var G__29564 = cljs.core.count(c__5548__auto___29561);
var G__29565 = (0);
seq__28808_29544 = G__29562;
chunk__28809_29545 = G__29563;
count__28810_29546 = G__29564;
i__28811_29547 = G__29565;
continue;
} else {
var vec__28840_29566 = cljs.core.first(seq__28808_29559__$1);
var script_tag_29567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840_29566,(0),null);
var script_body_29568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840_29566,(1),null);
eval(script_body_29568);


var G__29570 = cljs.core.next(seq__28808_29559__$1);
var G__29571 = null;
var G__29572 = (0);
var G__29573 = (0);
seq__28808_29544 = G__29570;
chunk__28809_29545 = G__29571;
count__28810_29546 = G__29572;
i__28811_29547 = G__29573;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__28846){
var vec__28849 = p__28846;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28849,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28849,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__28857 = arguments.length;
switch (G__28857) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__28872 = cljs.core.seq(style_keys);
var chunk__28873 = null;
var count__28874 = (0);
var i__28875 = (0);
while(true){
if((i__28875 < count__28874)){
var it = chunk__28873.cljs$core$IIndexed$_nth$arity$2(null,i__28875);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29590 = seq__28872;
var G__29591 = chunk__28873;
var G__29592 = count__28874;
var G__29593 = (i__28875 + (1));
seq__28872 = G__29590;
chunk__28873 = G__29591;
count__28874 = G__29592;
i__28875 = G__29593;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28872);
if(temp__5825__auto__){
var seq__28872__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28872__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28872__$1);
var G__29596 = cljs.core.chunk_rest(seq__28872__$1);
var G__29597 = c__5548__auto__;
var G__29598 = cljs.core.count(c__5548__auto__);
var G__29599 = (0);
seq__28872 = G__29596;
chunk__28873 = G__29597;
count__28874 = G__29598;
i__28875 = G__29599;
continue;
} else {
var it = cljs.core.first(seq__28872__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29605 = cljs.core.next(seq__28872__$1);
var G__29606 = null;
var G__29607 = (0);
var G__29608 = (0);
seq__28872 = G__29605;
chunk__28873 = G__29606;
count__28874 = G__29607;
i__28875 = G__29608;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k28896,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__28963 = k28896;
var G__28963__$1 = (((G__28963 instanceof cljs.core.Keyword))?G__28963.fqn:null);
switch (G__28963__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28896,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__28968){
var vec__28969 = p__28968;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28969,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28969,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28895){
var self__ = this;
var G__28895__$1 = this;
return (new cljs.core.RecordIter((0),G__28895__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28898,other28899){
var self__ = this;
var this28898__$1 = this;
return (((!((other28899 == null)))) && ((((this28898__$1.constructor === other28899.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28898__$1.x,other28899.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28898__$1.y,other28899.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28898__$1.__extmap,other28899.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k28896){
var self__ = this;
var this__5330__auto____$1 = this;
var G__28990 = k28896;
var G__28990__$1 = (((G__28990 instanceof cljs.core.Keyword))?G__28990.fqn:null);
switch (G__28990__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28896);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__28895){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__28992 = cljs.core.keyword_identical_QMARK_;
var expr__28993 = k__5332__auto__;
if(cljs.core.truth_((pred__28992.cljs$core$IFn$_invoke$arity$2 ? pred__28992.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__28993) : pred__28992.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__28993)))){
return (new shadow.dom.Coordinate(G__28895,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28992.cljs$core$IFn$_invoke$arity$2 ? pred__28992.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__28993) : pred__28992.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__28993)))){
return (new shadow.dom.Coordinate(self__.x,G__28895,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__28895),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__28895){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28895,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28927){
var extmap__5365__auto__ = (function (){var G__28997 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28927,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28927)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28997);
} else {
return G__28997;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28927),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28927),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k29001,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__29006 = k29001;
var G__29006__$1 = (((G__29006 instanceof cljs.core.Keyword))?G__29006.fqn:null);
switch (G__29006__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29001,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__29009){
var vec__29010 = p__29009;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29010,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29010,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29000){
var self__ = this;
var G__29000__$1 = this;
return (new cljs.core.RecordIter((0),G__29000__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29002,other29003){
var self__ = this;
var this29002__$1 = this;
return (((!((other29003 == null)))) && ((((this29002__$1.constructor === other29003.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29002__$1.w,other29003.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29002__$1.h,other29003.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29002__$1.__extmap,other29003.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k29001){
var self__ = this;
var this__5330__auto____$1 = this;
var G__29023 = k29001;
var G__29023__$1 = (((G__29023 instanceof cljs.core.Keyword))?G__29023.fqn:null);
switch (G__29023__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29001);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__29000){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__29024 = cljs.core.keyword_identical_QMARK_;
var expr__29025 = k__5332__auto__;
if(cljs.core.truth_((pred__29024.cljs$core$IFn$_invoke$arity$2 ? pred__29024.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29025) : pred__29024.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__29025)))){
return (new shadow.dom.Size(G__29000,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29024.cljs$core$IFn$_invoke$arity$2 ? pred__29024.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29025) : pred__29024.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__29025)))){
return (new shadow.dom.Size(self__.w,G__29000,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__29000),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__29000){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29000,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29004){
var extmap__5365__auto__ = (function (){var G__29033 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29004,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29004)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29033);
} else {
return G__29033;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29004),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29004),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__29711 = (i + (1));
var G__29712 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29711;
ret = G__29712;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29048){
var vec__29050 = p__29048;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29050,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29050,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29055 = arguments.length;
switch (G__29055) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__29726 = ps;
var G__29727 = (i + (1));
el__$1 = G__29726;
i = G__29727;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__29080 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29080,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29080,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29080,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29086_29738 = cljs.core.seq(props);
var chunk__29087_29739 = null;
var count__29088_29740 = (0);
var i__29089_29741 = (0);
while(true){
if((i__29089_29741 < count__29088_29740)){
var vec__29098_29745 = chunk__29087_29739.cljs$core$IIndexed$_nth$arity$2(null,i__29089_29741);
var k_29746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29098_29745,(0),null);
var v_29747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29098_29745,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_29746);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29746),v_29747);


var G__29748 = seq__29086_29738;
var G__29749 = chunk__29087_29739;
var G__29750 = count__29088_29740;
var G__29751 = (i__29089_29741 + (1));
seq__29086_29738 = G__29748;
chunk__29087_29739 = G__29749;
count__29088_29740 = G__29750;
i__29089_29741 = G__29751;
continue;
} else {
var temp__5825__auto___29753 = cljs.core.seq(seq__29086_29738);
if(temp__5825__auto___29753){
var seq__29086_29754__$1 = temp__5825__auto___29753;
if(cljs.core.chunked_seq_QMARK_(seq__29086_29754__$1)){
var c__5548__auto___29756 = cljs.core.chunk_first(seq__29086_29754__$1);
var G__29757 = cljs.core.chunk_rest(seq__29086_29754__$1);
var G__29758 = c__5548__auto___29756;
var G__29759 = cljs.core.count(c__5548__auto___29756);
var G__29760 = (0);
seq__29086_29738 = G__29757;
chunk__29087_29739 = G__29758;
count__29088_29740 = G__29759;
i__29089_29741 = G__29760;
continue;
} else {
var vec__29101_29762 = cljs.core.first(seq__29086_29754__$1);
var k_29763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29101_29762,(0),null);
var v_29764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29101_29762,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_29763);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29763),v_29764);


var G__29767 = cljs.core.next(seq__29086_29754__$1);
var G__29768 = null;
var G__29769 = (0);
var G__29770 = (0);
seq__29086_29738 = G__29767;
chunk__29087_29739 = G__29768;
count__29088_29740 = G__29769;
i__29089_29741 = G__29770;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__29109 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29109,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29109,(1),null);
var seq__29113_29773 = cljs.core.seq(node_children);
var chunk__29115_29774 = null;
var count__29116_29775 = (0);
var i__29117_29776 = (0);
while(true){
if((i__29117_29776 < count__29116_29775)){
var child_struct_29779 = chunk__29115_29774.cljs$core$IIndexed$_nth$arity$2(null,i__29117_29776);
if((!((child_struct_29779 == null)))){
if(typeof child_struct_29779 === 'string'){
var text_29783 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29783),child_struct_29779].join(''));
} else {
var children_29784 = shadow.dom.svg_node(child_struct_29779);
if(cljs.core.seq_QMARK_(children_29784)){
var seq__29149_29785 = cljs.core.seq(children_29784);
var chunk__29151_29786 = null;
var count__29152_29787 = (0);
var i__29153_29788 = (0);
while(true){
if((i__29153_29788 < count__29152_29787)){
var child_29790 = chunk__29151_29786.cljs$core$IIndexed$_nth$arity$2(null,i__29153_29788);
if(cljs.core.truth_(child_29790)){
node.appendChild(child_29790);


var G__29791 = seq__29149_29785;
var G__29792 = chunk__29151_29786;
var G__29793 = count__29152_29787;
var G__29794 = (i__29153_29788 + (1));
seq__29149_29785 = G__29791;
chunk__29151_29786 = G__29792;
count__29152_29787 = G__29793;
i__29153_29788 = G__29794;
continue;
} else {
var G__29796 = seq__29149_29785;
var G__29797 = chunk__29151_29786;
var G__29798 = count__29152_29787;
var G__29799 = (i__29153_29788 + (1));
seq__29149_29785 = G__29796;
chunk__29151_29786 = G__29797;
count__29152_29787 = G__29798;
i__29153_29788 = G__29799;
continue;
}
} else {
var temp__5825__auto___29800 = cljs.core.seq(seq__29149_29785);
if(temp__5825__auto___29800){
var seq__29149_29803__$1 = temp__5825__auto___29800;
if(cljs.core.chunked_seq_QMARK_(seq__29149_29803__$1)){
var c__5548__auto___29808 = cljs.core.chunk_first(seq__29149_29803__$1);
var G__29809 = cljs.core.chunk_rest(seq__29149_29803__$1);
var G__29810 = c__5548__auto___29808;
var G__29811 = cljs.core.count(c__5548__auto___29808);
var G__29812 = (0);
seq__29149_29785 = G__29809;
chunk__29151_29786 = G__29810;
count__29152_29787 = G__29811;
i__29153_29788 = G__29812;
continue;
} else {
var child_29813 = cljs.core.first(seq__29149_29803__$1);
if(cljs.core.truth_(child_29813)){
node.appendChild(child_29813);


var G__29814 = cljs.core.next(seq__29149_29803__$1);
var G__29815 = null;
var G__29816 = (0);
var G__29817 = (0);
seq__29149_29785 = G__29814;
chunk__29151_29786 = G__29815;
count__29152_29787 = G__29816;
i__29153_29788 = G__29817;
continue;
} else {
var G__29818 = cljs.core.next(seq__29149_29803__$1);
var G__29819 = null;
var G__29820 = (0);
var G__29821 = (0);
seq__29149_29785 = G__29818;
chunk__29151_29786 = G__29819;
count__29152_29787 = G__29820;
i__29153_29788 = G__29821;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29784);
}
}


var G__29825 = seq__29113_29773;
var G__29826 = chunk__29115_29774;
var G__29827 = count__29116_29775;
var G__29828 = (i__29117_29776 + (1));
seq__29113_29773 = G__29825;
chunk__29115_29774 = G__29826;
count__29116_29775 = G__29827;
i__29117_29776 = G__29828;
continue;
} else {
var G__29829 = seq__29113_29773;
var G__29830 = chunk__29115_29774;
var G__29831 = count__29116_29775;
var G__29832 = (i__29117_29776 + (1));
seq__29113_29773 = G__29829;
chunk__29115_29774 = G__29830;
count__29116_29775 = G__29831;
i__29117_29776 = G__29832;
continue;
}
} else {
var temp__5825__auto___29833 = cljs.core.seq(seq__29113_29773);
if(temp__5825__auto___29833){
var seq__29113_29834__$1 = temp__5825__auto___29833;
if(cljs.core.chunked_seq_QMARK_(seq__29113_29834__$1)){
var c__5548__auto___29835 = cljs.core.chunk_first(seq__29113_29834__$1);
var G__29836 = cljs.core.chunk_rest(seq__29113_29834__$1);
var G__29837 = c__5548__auto___29835;
var G__29838 = cljs.core.count(c__5548__auto___29835);
var G__29839 = (0);
seq__29113_29773 = G__29836;
chunk__29115_29774 = G__29837;
count__29116_29775 = G__29838;
i__29117_29776 = G__29839;
continue;
} else {
var child_struct_29840 = cljs.core.first(seq__29113_29834__$1);
if((!((child_struct_29840 == null)))){
if(typeof child_struct_29840 === 'string'){
var text_29841 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29841),child_struct_29840].join(''));
} else {
var children_29842 = shadow.dom.svg_node(child_struct_29840);
if(cljs.core.seq_QMARK_(children_29842)){
var seq__29161_29843 = cljs.core.seq(children_29842);
var chunk__29163_29844 = null;
var count__29164_29845 = (0);
var i__29165_29846 = (0);
while(true){
if((i__29165_29846 < count__29164_29845)){
var child_29847 = chunk__29163_29844.cljs$core$IIndexed$_nth$arity$2(null,i__29165_29846);
if(cljs.core.truth_(child_29847)){
node.appendChild(child_29847);


var G__29848 = seq__29161_29843;
var G__29849 = chunk__29163_29844;
var G__29850 = count__29164_29845;
var G__29851 = (i__29165_29846 + (1));
seq__29161_29843 = G__29848;
chunk__29163_29844 = G__29849;
count__29164_29845 = G__29850;
i__29165_29846 = G__29851;
continue;
} else {
var G__29853 = seq__29161_29843;
var G__29854 = chunk__29163_29844;
var G__29855 = count__29164_29845;
var G__29856 = (i__29165_29846 + (1));
seq__29161_29843 = G__29853;
chunk__29163_29844 = G__29854;
count__29164_29845 = G__29855;
i__29165_29846 = G__29856;
continue;
}
} else {
var temp__5825__auto___29857__$1 = cljs.core.seq(seq__29161_29843);
if(temp__5825__auto___29857__$1){
var seq__29161_29858__$1 = temp__5825__auto___29857__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29161_29858__$1)){
var c__5548__auto___29859 = cljs.core.chunk_first(seq__29161_29858__$1);
var G__29860 = cljs.core.chunk_rest(seq__29161_29858__$1);
var G__29861 = c__5548__auto___29859;
var G__29862 = cljs.core.count(c__5548__auto___29859);
var G__29863 = (0);
seq__29161_29843 = G__29860;
chunk__29163_29844 = G__29861;
count__29164_29845 = G__29862;
i__29165_29846 = G__29863;
continue;
} else {
var child_29864 = cljs.core.first(seq__29161_29858__$1);
if(cljs.core.truth_(child_29864)){
node.appendChild(child_29864);


var G__29865 = cljs.core.next(seq__29161_29858__$1);
var G__29866 = null;
var G__29867 = (0);
var G__29868 = (0);
seq__29161_29843 = G__29865;
chunk__29163_29844 = G__29866;
count__29164_29845 = G__29867;
i__29165_29846 = G__29868;
continue;
} else {
var G__29869 = cljs.core.next(seq__29161_29858__$1);
var G__29870 = null;
var G__29871 = (0);
var G__29872 = (0);
seq__29161_29843 = G__29869;
chunk__29163_29844 = G__29870;
count__29164_29845 = G__29871;
i__29165_29846 = G__29872;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29842);
}
}


var G__29875 = cljs.core.next(seq__29113_29834__$1);
var G__29876 = null;
var G__29877 = (0);
var G__29878 = (0);
seq__29113_29773 = G__29875;
chunk__29115_29774 = G__29876;
count__29116_29775 = G__29877;
i__29117_29776 = G__29878;
continue;
} else {
var G__29879 = cljs.core.next(seq__29113_29834__$1);
var G__29880 = null;
var G__29881 = (0);
var G__29882 = (0);
seq__29113_29773 = G__29879;
chunk__29115_29774 = G__29880;
count__29116_29775 = G__29881;
i__29117_29776 = G__29882;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___29903 = arguments.length;
var i__5750__auto___29904 = (0);
while(true){
if((i__5750__auto___29904 < len__5749__auto___29903)){
args__5755__auto__.push((arguments[i__5750__auto___29904]));

var G__29905 = (i__5750__auto___29904 + (1));
i__5750__auto___29904 = G__29905;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29180){
var G__29181 = cljs.core.first(seq29180);
var seq29180__$1 = cljs.core.next(seq29180);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29181,seq29180__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
