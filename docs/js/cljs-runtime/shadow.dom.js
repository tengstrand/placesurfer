goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29378 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_29378(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29380 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_29380(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28339 = coll;
var G__28340 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28339,G__28340) : shadow.dom.lazy_native_coll_seq.call(null,G__28339,G__28340));
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
var G__28360 = arguments.length;
switch (G__28360) {
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
var G__28366 = arguments.length;
switch (G__28366) {
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
var G__28378 = arguments.length;
switch (G__28378) {
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
var G__28381 = arguments.length;
switch (G__28381) {
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
var G__28393 = arguments.length;
switch (G__28393) {
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
var G__28425 = arguments.length;
switch (G__28425) {
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
}catch (e28430){if((e28430 instanceof Object)){
var e = e28430;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28430;

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
var seq__28447 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28448 = null;
var count__28449 = (0);
var i__28450 = (0);
while(true){
if((i__28450 < count__28449)){
var el = chunk__28448.cljs$core$IIndexed$_nth$arity$2(null,i__28450);
var handler_29411__$1 = ((function (seq__28447,chunk__28448,count__28449,i__28450,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28447,chunk__28448,count__28449,i__28450,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29411__$1);


var G__29416 = seq__28447;
var G__29417 = chunk__28448;
var G__29418 = count__28449;
var G__29419 = (i__28450 + (1));
seq__28447 = G__29416;
chunk__28448 = G__29417;
count__28449 = G__29418;
i__28450 = G__29419;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28447);
if(temp__5825__auto__){
var seq__28447__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28447__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28447__$1);
var G__29421 = cljs.core.chunk_rest(seq__28447__$1);
var G__29422 = c__5548__auto__;
var G__29423 = cljs.core.count(c__5548__auto__);
var G__29424 = (0);
seq__28447 = G__29421;
chunk__28448 = G__29422;
count__28449 = G__29423;
i__28450 = G__29424;
continue;
} else {
var el = cljs.core.first(seq__28447__$1);
var handler_29425__$1 = ((function (seq__28447,chunk__28448,count__28449,i__28450,el,seq__28447__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28447,chunk__28448,count__28449,i__28450,el,seq__28447__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29425__$1);


var G__29426 = cljs.core.next(seq__28447__$1);
var G__29427 = null;
var G__29428 = (0);
var G__29429 = (0);
seq__28447 = G__29426;
chunk__28448 = G__29427;
count__28449 = G__29428;
i__28450 = G__29429;
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
var G__28483 = arguments.length;
switch (G__28483) {
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
var seq__28498 = cljs.core.seq(events);
var chunk__28499 = null;
var count__28500 = (0);
var i__28501 = (0);
while(true){
if((i__28501 < count__28500)){
var vec__28512 = chunk__28499.cljs$core$IIndexed$_nth$arity$2(null,i__28501);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28512,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28512,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29432 = seq__28498;
var G__29433 = chunk__28499;
var G__29434 = count__28500;
var G__29435 = (i__28501 + (1));
seq__28498 = G__29432;
chunk__28499 = G__29433;
count__28500 = G__29434;
i__28501 = G__29435;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28498);
if(temp__5825__auto__){
var seq__28498__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28498__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28498__$1);
var G__29437 = cljs.core.chunk_rest(seq__28498__$1);
var G__29438 = c__5548__auto__;
var G__29439 = cljs.core.count(c__5548__auto__);
var G__29440 = (0);
seq__28498 = G__29437;
chunk__28499 = G__29438;
count__28500 = G__29439;
i__28501 = G__29440;
continue;
} else {
var vec__28516 = cljs.core.first(seq__28498__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28516,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28516,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29443 = cljs.core.next(seq__28498__$1);
var G__29444 = null;
var G__29445 = (0);
var G__29446 = (0);
seq__28498 = G__29443;
chunk__28499 = G__29444;
count__28500 = G__29445;
i__28501 = G__29446;
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
var seq__28521 = cljs.core.seq(styles);
var chunk__28522 = null;
var count__28523 = (0);
var i__28524 = (0);
while(true){
if((i__28524 < count__28523)){
var vec__28544 = chunk__28522.cljs$core$IIndexed$_nth$arity$2(null,i__28524);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28544,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28544,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29448 = seq__28521;
var G__29449 = chunk__28522;
var G__29450 = count__28523;
var G__29451 = (i__28524 + (1));
seq__28521 = G__29448;
chunk__28522 = G__29449;
count__28523 = G__29450;
i__28524 = G__29451;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28521);
if(temp__5825__auto__){
var seq__28521__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28521__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28521__$1);
var G__29454 = cljs.core.chunk_rest(seq__28521__$1);
var G__29455 = c__5548__auto__;
var G__29456 = cljs.core.count(c__5548__auto__);
var G__29457 = (0);
seq__28521 = G__29454;
chunk__28522 = G__29455;
count__28523 = G__29456;
i__28524 = G__29457;
continue;
} else {
var vec__28553 = cljs.core.first(seq__28521__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28553,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28553,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29458 = cljs.core.next(seq__28521__$1);
var G__29459 = null;
var G__29460 = (0);
var G__29461 = (0);
seq__28521 = G__29458;
chunk__28522 = G__29459;
count__28523 = G__29460;
i__28524 = G__29461;
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
var G__28575_29464 = key;
var G__28575_29465__$1 = (((G__28575_29464 instanceof cljs.core.Keyword))?G__28575_29464.fqn:null);
switch (G__28575_29465__$1) {
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
var ks_29481 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_29481,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_29481,"aria-");
}
})())){
el.setAttribute(ks_29481,value);
} else {
(el[ks_29481] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28652){
var map__28653 = p__28652;
var map__28653__$1 = cljs.core.__destructure_map(map__28653);
var props = map__28653__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28653__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28657 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28657,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28657,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28657,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28660 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28660,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28660;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28665 = arguments.length;
switch (G__28665) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28681){
var vec__28683 = p__28681;
var seq__28684 = cljs.core.seq(vec__28683);
var first__28685 = cljs.core.first(seq__28684);
var seq__28684__$1 = cljs.core.next(seq__28684);
var nn = first__28685;
var first__28685__$1 = cljs.core.first(seq__28684__$1);
var seq__28684__$2 = cljs.core.next(seq__28684__$1);
var np = first__28685__$1;
var nc = seq__28684__$2;
var node = vec__28683;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28687 = nn;
var G__28688 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28687,G__28688) : create_fn.call(null,G__28687,G__28688));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28689 = nn;
var G__28690 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28689,G__28690) : create_fn.call(null,G__28689,G__28690));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28694 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28694,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28694,(1),null);
var seq__28697_29511 = cljs.core.seq(node_children);
var chunk__28698_29512 = null;
var count__28699_29513 = (0);
var i__28700_29514 = (0);
while(true){
if((i__28700_29514 < count__28699_29513)){
var child_struct_29517 = chunk__28698_29512.cljs$core$IIndexed$_nth$arity$2(null,i__28700_29514);
var children_29518 = shadow.dom.dom_node(child_struct_29517);
if(cljs.core.seq_QMARK_(children_29518)){
var seq__28765_29519 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29518));
var chunk__28767_29520 = null;
var count__28768_29521 = (0);
var i__28769_29522 = (0);
while(true){
if((i__28769_29522 < count__28768_29521)){
var child_29523 = chunk__28767_29520.cljs$core$IIndexed$_nth$arity$2(null,i__28769_29522);
if(cljs.core.truth_(child_29523)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29523);


var G__29524 = seq__28765_29519;
var G__29525 = chunk__28767_29520;
var G__29526 = count__28768_29521;
var G__29527 = (i__28769_29522 + (1));
seq__28765_29519 = G__29524;
chunk__28767_29520 = G__29525;
count__28768_29521 = G__29526;
i__28769_29522 = G__29527;
continue;
} else {
var G__29528 = seq__28765_29519;
var G__29529 = chunk__28767_29520;
var G__29530 = count__28768_29521;
var G__29531 = (i__28769_29522 + (1));
seq__28765_29519 = G__29528;
chunk__28767_29520 = G__29529;
count__28768_29521 = G__29530;
i__28769_29522 = G__29531;
continue;
}
} else {
var temp__5825__auto___29532 = cljs.core.seq(seq__28765_29519);
if(temp__5825__auto___29532){
var seq__28765_29533__$1 = temp__5825__auto___29532;
if(cljs.core.chunked_seq_QMARK_(seq__28765_29533__$1)){
var c__5548__auto___29535 = cljs.core.chunk_first(seq__28765_29533__$1);
var G__29536 = cljs.core.chunk_rest(seq__28765_29533__$1);
var G__29537 = c__5548__auto___29535;
var G__29538 = cljs.core.count(c__5548__auto___29535);
var G__29539 = (0);
seq__28765_29519 = G__29536;
chunk__28767_29520 = G__29537;
count__28768_29521 = G__29538;
i__28769_29522 = G__29539;
continue;
} else {
var child_29541 = cljs.core.first(seq__28765_29533__$1);
if(cljs.core.truth_(child_29541)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29541);


var G__29542 = cljs.core.next(seq__28765_29533__$1);
var G__29543 = null;
var G__29544 = (0);
var G__29545 = (0);
seq__28765_29519 = G__29542;
chunk__28767_29520 = G__29543;
count__28768_29521 = G__29544;
i__28769_29522 = G__29545;
continue;
} else {
var G__29546 = cljs.core.next(seq__28765_29533__$1);
var G__29547 = null;
var G__29548 = (0);
var G__29549 = (0);
seq__28765_29519 = G__29546;
chunk__28767_29520 = G__29547;
count__28768_29521 = G__29548;
i__28769_29522 = G__29549;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29518);
}


var G__29550 = seq__28697_29511;
var G__29551 = chunk__28698_29512;
var G__29552 = count__28699_29513;
var G__29553 = (i__28700_29514 + (1));
seq__28697_29511 = G__29550;
chunk__28698_29512 = G__29551;
count__28699_29513 = G__29552;
i__28700_29514 = G__29553;
continue;
} else {
var temp__5825__auto___29554 = cljs.core.seq(seq__28697_29511);
if(temp__5825__auto___29554){
var seq__28697_29556__$1 = temp__5825__auto___29554;
if(cljs.core.chunked_seq_QMARK_(seq__28697_29556__$1)){
var c__5548__auto___29557 = cljs.core.chunk_first(seq__28697_29556__$1);
var G__29558 = cljs.core.chunk_rest(seq__28697_29556__$1);
var G__29559 = c__5548__auto___29557;
var G__29560 = cljs.core.count(c__5548__auto___29557);
var G__29561 = (0);
seq__28697_29511 = G__29558;
chunk__28698_29512 = G__29559;
count__28699_29513 = G__29560;
i__28700_29514 = G__29561;
continue;
} else {
var child_struct_29563 = cljs.core.first(seq__28697_29556__$1);
var children_29564 = shadow.dom.dom_node(child_struct_29563);
if(cljs.core.seq_QMARK_(children_29564)){
var seq__28784_29565 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29564));
var chunk__28786_29566 = null;
var count__28787_29567 = (0);
var i__28788_29568 = (0);
while(true){
if((i__28788_29568 < count__28787_29567)){
var child_29569 = chunk__28786_29566.cljs$core$IIndexed$_nth$arity$2(null,i__28788_29568);
if(cljs.core.truth_(child_29569)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29569);


var G__29570 = seq__28784_29565;
var G__29571 = chunk__28786_29566;
var G__29572 = count__28787_29567;
var G__29573 = (i__28788_29568 + (1));
seq__28784_29565 = G__29570;
chunk__28786_29566 = G__29571;
count__28787_29567 = G__29572;
i__28788_29568 = G__29573;
continue;
} else {
var G__29574 = seq__28784_29565;
var G__29575 = chunk__28786_29566;
var G__29576 = count__28787_29567;
var G__29577 = (i__28788_29568 + (1));
seq__28784_29565 = G__29574;
chunk__28786_29566 = G__29575;
count__28787_29567 = G__29576;
i__28788_29568 = G__29577;
continue;
}
} else {
var temp__5825__auto___29578__$1 = cljs.core.seq(seq__28784_29565);
if(temp__5825__auto___29578__$1){
var seq__28784_29579__$1 = temp__5825__auto___29578__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28784_29579__$1)){
var c__5548__auto___29580 = cljs.core.chunk_first(seq__28784_29579__$1);
var G__29581 = cljs.core.chunk_rest(seq__28784_29579__$1);
var G__29582 = c__5548__auto___29580;
var G__29583 = cljs.core.count(c__5548__auto___29580);
var G__29584 = (0);
seq__28784_29565 = G__29581;
chunk__28786_29566 = G__29582;
count__28787_29567 = G__29583;
i__28788_29568 = G__29584;
continue;
} else {
var child_29591 = cljs.core.first(seq__28784_29579__$1);
if(cljs.core.truth_(child_29591)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29591);


var G__29592 = cljs.core.next(seq__28784_29579__$1);
var G__29593 = null;
var G__29594 = (0);
var G__29595 = (0);
seq__28784_29565 = G__29592;
chunk__28786_29566 = G__29593;
count__28787_29567 = G__29594;
i__28788_29568 = G__29595;
continue;
} else {
var G__29596 = cljs.core.next(seq__28784_29579__$1);
var G__29597 = null;
var G__29598 = (0);
var G__29599 = (0);
seq__28784_29565 = G__29596;
chunk__28786_29566 = G__29597;
count__28787_29567 = G__29598;
i__28788_29568 = G__29599;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29564);
}


var G__29602 = cljs.core.next(seq__28697_29556__$1);
var G__29603 = null;
var G__29604 = (0);
var G__29605 = (0);
seq__28697_29511 = G__29602;
chunk__28698_29512 = G__29603;
count__28699_29513 = G__29604;
i__28700_29514 = G__29605;
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
var seq__28838 = cljs.core.seq(node);
var chunk__28839 = null;
var count__28840 = (0);
var i__28841 = (0);
while(true){
if((i__28841 < count__28840)){
var n = chunk__28839.cljs$core$IIndexed$_nth$arity$2(null,i__28841);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29631 = seq__28838;
var G__29632 = chunk__28839;
var G__29633 = count__28840;
var G__29634 = (i__28841 + (1));
seq__28838 = G__29631;
chunk__28839 = G__29632;
count__28840 = G__29633;
i__28841 = G__29634;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28838);
if(temp__5825__auto__){
var seq__28838__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28838__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28838__$1);
var G__29638 = cljs.core.chunk_rest(seq__28838__$1);
var G__29639 = c__5548__auto__;
var G__29640 = cljs.core.count(c__5548__auto__);
var G__29641 = (0);
seq__28838 = G__29638;
chunk__28839 = G__29639;
count__28840 = G__29640;
i__28841 = G__29641;
continue;
} else {
var n = cljs.core.first(seq__28838__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29643 = cljs.core.next(seq__28838__$1);
var G__29644 = null;
var G__29645 = (0);
var G__29646 = (0);
seq__28838 = G__29643;
chunk__28839 = G__29644;
count__28840 = G__29645;
i__28841 = G__29646;
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
var G__28847 = arguments.length;
switch (G__28847) {
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
var G__28861 = arguments.length;
switch (G__28861) {
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
var G__28868 = arguments.length;
switch (G__28868) {
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
var len__5749__auto___29676 = arguments.length;
var i__5750__auto___29677 = (0);
while(true){
if((i__5750__auto___29677 < len__5749__auto___29676)){
args__5755__auto__.push((arguments[i__5750__auto___29677]));

var G__29680 = (i__5750__auto___29677 + (1));
i__5750__auto___29677 = G__29680;
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
var seq__28888_29685 = cljs.core.seq(nodes);
var chunk__28889_29686 = null;
var count__28890_29687 = (0);
var i__28891_29688 = (0);
while(true){
if((i__28891_29688 < count__28890_29687)){
var node_29690 = chunk__28889_29686.cljs$core$IIndexed$_nth$arity$2(null,i__28891_29688);
fragment.appendChild(shadow.dom._to_dom(node_29690));


var G__29692 = seq__28888_29685;
var G__29693 = chunk__28889_29686;
var G__29694 = count__28890_29687;
var G__29695 = (i__28891_29688 + (1));
seq__28888_29685 = G__29692;
chunk__28889_29686 = G__29693;
count__28890_29687 = G__29694;
i__28891_29688 = G__29695;
continue;
} else {
var temp__5825__auto___29698 = cljs.core.seq(seq__28888_29685);
if(temp__5825__auto___29698){
var seq__28888_29703__$1 = temp__5825__auto___29698;
if(cljs.core.chunked_seq_QMARK_(seq__28888_29703__$1)){
var c__5548__auto___29707 = cljs.core.chunk_first(seq__28888_29703__$1);
var G__29708 = cljs.core.chunk_rest(seq__28888_29703__$1);
var G__29709 = c__5548__auto___29707;
var G__29710 = cljs.core.count(c__5548__auto___29707);
var G__29711 = (0);
seq__28888_29685 = G__29708;
chunk__28889_29686 = G__29709;
count__28890_29687 = G__29710;
i__28891_29688 = G__29711;
continue;
} else {
var node_29712 = cljs.core.first(seq__28888_29703__$1);
fragment.appendChild(shadow.dom._to_dom(node_29712));


var G__29714 = cljs.core.next(seq__28888_29703__$1);
var G__29715 = null;
var G__29716 = (0);
var G__29717 = (0);
seq__28888_29685 = G__29714;
chunk__28889_29686 = G__29715;
count__28890_29687 = G__29716;
i__28891_29688 = G__29717;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28885){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28885));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28904_29728 = cljs.core.seq(scripts);
var chunk__28905_29729 = null;
var count__28906_29730 = (0);
var i__28907_29731 = (0);
while(true){
if((i__28907_29731 < count__28906_29730)){
var vec__28923_29733 = chunk__28905_29729.cljs$core$IIndexed$_nth$arity$2(null,i__28907_29731);
var script_tag_29734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28923_29733,(0),null);
var script_body_29735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28923_29733,(1),null);
eval(script_body_29735);


var G__29743 = seq__28904_29728;
var G__29744 = chunk__28905_29729;
var G__29745 = count__28906_29730;
var G__29746 = (i__28907_29731 + (1));
seq__28904_29728 = G__29743;
chunk__28905_29729 = G__29744;
count__28906_29730 = G__29745;
i__28907_29731 = G__29746;
continue;
} else {
var temp__5825__auto___29749 = cljs.core.seq(seq__28904_29728);
if(temp__5825__auto___29749){
var seq__28904_29750__$1 = temp__5825__auto___29749;
if(cljs.core.chunked_seq_QMARK_(seq__28904_29750__$1)){
var c__5548__auto___29752 = cljs.core.chunk_first(seq__28904_29750__$1);
var G__29753 = cljs.core.chunk_rest(seq__28904_29750__$1);
var G__29754 = c__5548__auto___29752;
var G__29755 = cljs.core.count(c__5548__auto___29752);
var G__29756 = (0);
seq__28904_29728 = G__29753;
chunk__28905_29729 = G__29754;
count__28906_29730 = G__29755;
i__28907_29731 = G__29756;
continue;
} else {
var vec__28933_29757 = cljs.core.first(seq__28904_29750__$1);
var script_tag_29758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28933_29757,(0),null);
var script_body_29759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28933_29757,(1),null);
eval(script_body_29759);


var G__29761 = cljs.core.next(seq__28904_29750__$1);
var G__29762 = null;
var G__29763 = (0);
var G__29764 = (0);
seq__28904_29728 = G__29761;
chunk__28905_29729 = G__29762;
count__28906_29730 = G__29763;
i__28907_29731 = G__29764;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__28942){
var vec__28948 = p__28942;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28948,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28948,(1),null);
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
var G__28958 = arguments.length;
switch (G__28958) {
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
var seq__28961 = cljs.core.seq(style_keys);
var chunk__28962 = null;
var count__28963 = (0);
var i__28964 = (0);
while(true){
if((i__28964 < count__28963)){
var it = chunk__28962.cljs$core$IIndexed$_nth$arity$2(null,i__28964);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29783 = seq__28961;
var G__29784 = chunk__28962;
var G__29785 = count__28963;
var G__29786 = (i__28964 + (1));
seq__28961 = G__29783;
chunk__28962 = G__29784;
count__28963 = G__29785;
i__28964 = G__29786;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28961);
if(temp__5825__auto__){
var seq__28961__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28961__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28961__$1);
var G__29791 = cljs.core.chunk_rest(seq__28961__$1);
var G__29792 = c__5548__auto__;
var G__29793 = cljs.core.count(c__5548__auto__);
var G__29794 = (0);
seq__28961 = G__29791;
chunk__28962 = G__29792;
count__28963 = G__29793;
i__28964 = G__29794;
continue;
} else {
var it = cljs.core.first(seq__28961__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29796 = cljs.core.next(seq__28961__$1);
var G__29797 = null;
var G__29798 = (0);
var G__29799 = (0);
seq__28961 = G__29796;
chunk__28962 = G__29797;
count__28963 = G__29798;
i__28964 = G__29799;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k28972,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__28989 = k28972;
var G__28989__$1 = (((G__28989 instanceof cljs.core.Keyword))?G__28989.fqn:null);
switch (G__28989__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28972,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__28992){
var vec__28993 = p__28992;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28993,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28993,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28971){
var self__ = this;
var G__28971__$1 = this;
return (new cljs.core.RecordIter((0),G__28971__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28973,other28974){
var self__ = this;
var this28973__$1 = this;
return (((!((other28974 == null)))) && ((((this28973__$1.constructor === other28974.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28973__$1.x,other28974.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28973__$1.y,other28974.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28973__$1.__extmap,other28974.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k28972){
var self__ = this;
var this__5330__auto____$1 = this;
var G__29012 = k28972;
var G__29012__$1 = (((G__29012 instanceof cljs.core.Keyword))?G__29012.fqn:null);
switch (G__29012__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28972);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__28971){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__29014 = cljs.core.keyword_identical_QMARK_;
var expr__29015 = k__5332__auto__;
if(cljs.core.truth_((pred__29014.cljs$core$IFn$_invoke$arity$2 ? pred__29014.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__29015) : pred__29014.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__29015)))){
return (new shadow.dom.Coordinate(G__28971,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29014.cljs$core$IFn$_invoke$arity$2 ? pred__29014.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__29015) : pred__29014.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__29015)))){
return (new shadow.dom.Coordinate(self__.x,G__28971,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__28971),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__28971){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28971,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28984){
var extmap__5365__auto__ = (function (){var G__29033 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28984,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28984)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29033);
} else {
return G__29033;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28984),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28984),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k29046,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__29055 = k29046;
var G__29055__$1 = (((G__29055 instanceof cljs.core.Keyword))?G__29055.fqn:null);
switch (G__29055__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29046,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__29058){
var vec__29060 = p__29058;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29060,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29060,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29045){
var self__ = this;
var G__29045__$1 = this;
return (new cljs.core.RecordIter((0),G__29045__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29047,other29048){
var self__ = this;
var this29047__$1 = this;
return (((!((other29048 == null)))) && ((((this29047__$1.constructor === other29048.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29047__$1.w,other29048.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29047__$1.h,other29048.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29047__$1.__extmap,other29048.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k29046){
var self__ = this;
var this__5330__auto____$1 = this;
var G__29080 = k29046;
var G__29080__$1 = (((G__29080 instanceof cljs.core.Keyword))?G__29080.fqn:null);
switch (G__29080__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29046);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__29045){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__29082 = cljs.core.keyword_identical_QMARK_;
var expr__29083 = k__5332__auto__;
if(cljs.core.truth_((pred__29082.cljs$core$IFn$_invoke$arity$2 ? pred__29082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29083) : pred__29082.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__29083)))){
return (new shadow.dom.Size(G__29045,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29082.cljs$core$IFn$_invoke$arity$2 ? pred__29082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29083) : pred__29082.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__29083)))){
return (new shadow.dom.Size(self__.w,G__29045,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__29045),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__29045){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29045,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29051){
var extmap__5365__auto__ = (function (){var G__29093 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29051,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29051)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29093);
} else {
return G__29093;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29051),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29051),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__30054 = (i + (1));
var G__30055 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__30054;
ret = G__30055;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29123){
var vec__29124 = p__29123;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29124,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29124,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29131 = arguments.length;
switch (G__29131) {
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
var G__30166 = ps;
var G__30167 = (i + (1));
el__$1 = G__30166;
i = G__30167;
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
var vec__29171 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29171,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29171,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29171,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29176_30216 = cljs.core.seq(props);
var chunk__29177_30217 = null;
var count__29178_30218 = (0);
var i__29179_30219 = (0);
while(true){
if((i__29179_30219 < count__29178_30218)){
var vec__29192_30220 = chunk__29177_30217.cljs$core$IIndexed$_nth$arity$2(null,i__29179_30219);
var k_30221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29192_30220,(0),null);
var v_30222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29192_30220,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_30221);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30221),v_30222);


var G__30226 = seq__29176_30216;
var G__30227 = chunk__29177_30217;
var G__30228 = count__29178_30218;
var G__30229 = (i__29179_30219 + (1));
seq__29176_30216 = G__30226;
chunk__29177_30217 = G__30227;
count__29178_30218 = G__30228;
i__29179_30219 = G__30229;
continue;
} else {
var temp__5825__auto___30230 = cljs.core.seq(seq__29176_30216);
if(temp__5825__auto___30230){
var seq__29176_30231__$1 = temp__5825__auto___30230;
if(cljs.core.chunked_seq_QMARK_(seq__29176_30231__$1)){
var c__5548__auto___30232 = cljs.core.chunk_first(seq__29176_30231__$1);
var G__30235 = cljs.core.chunk_rest(seq__29176_30231__$1);
var G__30236 = c__5548__auto___30232;
var G__30237 = cljs.core.count(c__5548__auto___30232);
var G__30238 = (0);
seq__29176_30216 = G__30235;
chunk__29177_30217 = G__30236;
count__29178_30218 = G__30237;
i__29179_30219 = G__30238;
continue;
} else {
var vec__29203_30240 = cljs.core.first(seq__29176_30231__$1);
var k_30241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29203_30240,(0),null);
var v_30242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29203_30240,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_30241);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30241),v_30242);


var G__30245 = cljs.core.next(seq__29176_30231__$1);
var G__30246 = null;
var G__30247 = (0);
var G__30248 = (0);
seq__29176_30216 = G__30245;
chunk__29177_30217 = G__30246;
count__29178_30218 = G__30247;
i__29179_30219 = G__30248;
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
var vec__29229 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29229,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29229,(1),null);
var seq__29233_30254 = cljs.core.seq(node_children);
var chunk__29235_30255 = null;
var count__29236_30256 = (0);
var i__29238_30257 = (0);
while(true){
if((i__29238_30257 < count__29236_30256)){
var child_struct_30259 = chunk__29235_30255.cljs$core$IIndexed$_nth$arity$2(null,i__29238_30257);
if((!((child_struct_30259 == null)))){
if(typeof child_struct_30259 === 'string'){
var text_30287 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30287),child_struct_30259].join(''));
} else {
var children_30288 = shadow.dom.svg_node(child_struct_30259);
if(cljs.core.seq_QMARK_(children_30288)){
var seq__29329_30289 = cljs.core.seq(children_30288);
var chunk__29331_30290 = null;
var count__29332_30291 = (0);
var i__29333_30292 = (0);
while(true){
if((i__29333_30292 < count__29332_30291)){
var child_30293 = chunk__29331_30290.cljs$core$IIndexed$_nth$arity$2(null,i__29333_30292);
if(cljs.core.truth_(child_30293)){
node.appendChild(child_30293);


var G__30294 = seq__29329_30289;
var G__30295 = chunk__29331_30290;
var G__30296 = count__29332_30291;
var G__30297 = (i__29333_30292 + (1));
seq__29329_30289 = G__30294;
chunk__29331_30290 = G__30295;
count__29332_30291 = G__30296;
i__29333_30292 = G__30297;
continue;
} else {
var G__30299 = seq__29329_30289;
var G__30300 = chunk__29331_30290;
var G__30301 = count__29332_30291;
var G__30302 = (i__29333_30292 + (1));
seq__29329_30289 = G__30299;
chunk__29331_30290 = G__30300;
count__29332_30291 = G__30301;
i__29333_30292 = G__30302;
continue;
}
} else {
var temp__5825__auto___30303 = cljs.core.seq(seq__29329_30289);
if(temp__5825__auto___30303){
var seq__29329_30305__$1 = temp__5825__auto___30303;
if(cljs.core.chunked_seq_QMARK_(seq__29329_30305__$1)){
var c__5548__auto___30306 = cljs.core.chunk_first(seq__29329_30305__$1);
var G__30307 = cljs.core.chunk_rest(seq__29329_30305__$1);
var G__30308 = c__5548__auto___30306;
var G__30309 = cljs.core.count(c__5548__auto___30306);
var G__30310 = (0);
seq__29329_30289 = G__30307;
chunk__29331_30290 = G__30308;
count__29332_30291 = G__30309;
i__29333_30292 = G__30310;
continue;
} else {
var child_30312 = cljs.core.first(seq__29329_30305__$1);
if(cljs.core.truth_(child_30312)){
node.appendChild(child_30312);


var G__30314 = cljs.core.next(seq__29329_30305__$1);
var G__30315 = null;
var G__30316 = (0);
var G__30317 = (0);
seq__29329_30289 = G__30314;
chunk__29331_30290 = G__30315;
count__29332_30291 = G__30316;
i__29333_30292 = G__30317;
continue;
} else {
var G__30320 = cljs.core.next(seq__29329_30305__$1);
var G__30321 = null;
var G__30322 = (0);
var G__30323 = (0);
seq__29329_30289 = G__30320;
chunk__29331_30290 = G__30321;
count__29332_30291 = G__30322;
i__29333_30292 = G__30323;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30288);
}
}


var G__30325 = seq__29233_30254;
var G__30326 = chunk__29235_30255;
var G__30327 = count__29236_30256;
var G__30328 = (i__29238_30257 + (1));
seq__29233_30254 = G__30325;
chunk__29235_30255 = G__30326;
count__29236_30256 = G__30327;
i__29238_30257 = G__30328;
continue;
} else {
var G__30330 = seq__29233_30254;
var G__30331 = chunk__29235_30255;
var G__30332 = count__29236_30256;
var G__30333 = (i__29238_30257 + (1));
seq__29233_30254 = G__30330;
chunk__29235_30255 = G__30331;
count__29236_30256 = G__30332;
i__29238_30257 = G__30333;
continue;
}
} else {
var temp__5825__auto___30334 = cljs.core.seq(seq__29233_30254);
if(temp__5825__auto___30334){
var seq__29233_30335__$1 = temp__5825__auto___30334;
if(cljs.core.chunked_seq_QMARK_(seq__29233_30335__$1)){
var c__5548__auto___30336 = cljs.core.chunk_first(seq__29233_30335__$1);
var G__30337 = cljs.core.chunk_rest(seq__29233_30335__$1);
var G__30338 = c__5548__auto___30336;
var G__30339 = cljs.core.count(c__5548__auto___30336);
var G__30340 = (0);
seq__29233_30254 = G__30337;
chunk__29235_30255 = G__30338;
count__29236_30256 = G__30339;
i__29238_30257 = G__30340;
continue;
} else {
var child_struct_30342 = cljs.core.first(seq__29233_30335__$1);
if((!((child_struct_30342 == null)))){
if(typeof child_struct_30342 === 'string'){
var text_30343 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30343),child_struct_30342].join(''));
} else {
var children_30344 = shadow.dom.svg_node(child_struct_30342);
if(cljs.core.seq_QMARK_(children_30344)){
var seq__29345_30345 = cljs.core.seq(children_30344);
var chunk__29347_30346 = null;
var count__29348_30347 = (0);
var i__29349_30348 = (0);
while(true){
if((i__29349_30348 < count__29348_30347)){
var child_30349 = chunk__29347_30346.cljs$core$IIndexed$_nth$arity$2(null,i__29349_30348);
if(cljs.core.truth_(child_30349)){
node.appendChild(child_30349);


var G__30350 = seq__29345_30345;
var G__30351 = chunk__29347_30346;
var G__30352 = count__29348_30347;
var G__30353 = (i__29349_30348 + (1));
seq__29345_30345 = G__30350;
chunk__29347_30346 = G__30351;
count__29348_30347 = G__30352;
i__29349_30348 = G__30353;
continue;
} else {
var G__30355 = seq__29345_30345;
var G__30356 = chunk__29347_30346;
var G__30357 = count__29348_30347;
var G__30358 = (i__29349_30348 + (1));
seq__29345_30345 = G__30355;
chunk__29347_30346 = G__30356;
count__29348_30347 = G__30357;
i__29349_30348 = G__30358;
continue;
}
} else {
var temp__5825__auto___30360__$1 = cljs.core.seq(seq__29345_30345);
if(temp__5825__auto___30360__$1){
var seq__29345_30361__$1 = temp__5825__auto___30360__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29345_30361__$1)){
var c__5548__auto___30362 = cljs.core.chunk_first(seq__29345_30361__$1);
var G__30363 = cljs.core.chunk_rest(seq__29345_30361__$1);
var G__30364 = c__5548__auto___30362;
var G__30365 = cljs.core.count(c__5548__auto___30362);
var G__30366 = (0);
seq__29345_30345 = G__30363;
chunk__29347_30346 = G__30364;
count__29348_30347 = G__30365;
i__29349_30348 = G__30366;
continue;
} else {
var child_30367 = cljs.core.first(seq__29345_30361__$1);
if(cljs.core.truth_(child_30367)){
node.appendChild(child_30367);


var G__30368 = cljs.core.next(seq__29345_30361__$1);
var G__30369 = null;
var G__30370 = (0);
var G__30371 = (0);
seq__29345_30345 = G__30368;
chunk__29347_30346 = G__30369;
count__29348_30347 = G__30370;
i__29349_30348 = G__30371;
continue;
} else {
var G__30372 = cljs.core.next(seq__29345_30361__$1);
var G__30373 = null;
var G__30374 = (0);
var G__30375 = (0);
seq__29345_30345 = G__30372;
chunk__29347_30346 = G__30373;
count__29348_30347 = G__30374;
i__29349_30348 = G__30375;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30344);
}
}


var G__30377 = cljs.core.next(seq__29233_30335__$1);
var G__30378 = null;
var G__30379 = (0);
var G__30380 = (0);
seq__29233_30254 = G__30377;
chunk__29235_30255 = G__30378;
count__29236_30256 = G__30379;
i__29238_30257 = G__30380;
continue;
} else {
var G__30381 = cljs.core.next(seq__29233_30335__$1);
var G__30382 = null;
var G__30383 = (0);
var G__30384 = (0);
seq__29233_30254 = G__30381;
chunk__29235_30255 = G__30382;
count__29236_30256 = G__30383;
i__29238_30257 = G__30384;
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
var len__5749__auto___30414 = arguments.length;
var i__5750__auto___30415 = (0);
while(true){
if((i__5750__auto___30415 < len__5749__auto___30414)){
args__5755__auto__.push((arguments[i__5750__auto___30415]));

var G__30416 = (i__5750__auto___30415 + (1));
i__5750__auto___30415 = G__30416;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29368){
var G__29369 = cljs.core.first(seq29368);
var seq29368__$1 = cljs.core.next(seq29368);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29369,seq29368__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
