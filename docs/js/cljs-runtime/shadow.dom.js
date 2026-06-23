goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29226 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_29226(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29231 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_29231(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28302 = coll;
var G__28303 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28302,G__28303) : shadow.dom.lazy_native_coll_seq.call(null,G__28302,G__28303));
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
var G__28322 = arguments.length;
switch (G__28322) {
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
var G__28327 = arguments.length;
switch (G__28327) {
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
var G__28336 = arguments.length;
switch (G__28336) {
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
var G__28344 = arguments.length;
switch (G__28344) {
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
var G__28351 = arguments.length;
switch (G__28351) {
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
var G__28358 = arguments.length;
switch (G__28358) {
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
}catch (e28364){if((e28364 instanceof Object)){
var e = e28364;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28364;

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
var seq__28367 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28368 = null;
var count__28369 = (0);
var i__28370 = (0);
while(true){
if((i__28370 < count__28369)){
var el = chunk__28368.cljs$core$IIndexed$_nth$arity$2(null,i__28370);
var handler_29265__$1 = ((function (seq__28367,chunk__28368,count__28369,i__28370,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28367,chunk__28368,count__28369,i__28370,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29265__$1);


var G__29269 = seq__28367;
var G__29270 = chunk__28368;
var G__29271 = count__28369;
var G__29272 = (i__28370 + (1));
seq__28367 = G__29269;
chunk__28368 = G__29270;
count__28369 = G__29271;
i__28370 = G__29272;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28367);
if(temp__5825__auto__){
var seq__28367__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28367__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28367__$1);
var G__29273 = cljs.core.chunk_rest(seq__28367__$1);
var G__29274 = c__5548__auto__;
var G__29275 = cljs.core.count(c__5548__auto__);
var G__29276 = (0);
seq__28367 = G__29273;
chunk__28368 = G__29274;
count__28369 = G__29275;
i__28370 = G__29276;
continue;
} else {
var el = cljs.core.first(seq__28367__$1);
var handler_29277__$1 = ((function (seq__28367,chunk__28368,count__28369,i__28370,el,seq__28367__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28367,chunk__28368,count__28369,i__28370,el,seq__28367__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29277__$1);


var G__29279 = cljs.core.next(seq__28367__$1);
var G__29280 = null;
var G__29281 = (0);
var G__29282 = (0);
seq__28367 = G__29279;
chunk__28368 = G__29280;
count__28369 = G__29281;
i__28370 = G__29282;
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
var G__28376 = arguments.length;
switch (G__28376) {
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
var seq__28384 = cljs.core.seq(events);
var chunk__28385 = null;
var count__28386 = (0);
var i__28387 = (0);
while(true){
if((i__28387 < count__28386)){
var vec__28394 = chunk__28385.cljs$core$IIndexed$_nth$arity$2(null,i__28387);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28394,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28394,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29287 = seq__28384;
var G__29288 = chunk__28385;
var G__29289 = count__28386;
var G__29290 = (i__28387 + (1));
seq__28384 = G__29287;
chunk__28385 = G__29288;
count__28386 = G__29289;
i__28387 = G__29290;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28384);
if(temp__5825__auto__){
var seq__28384__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28384__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28384__$1);
var G__29293 = cljs.core.chunk_rest(seq__28384__$1);
var G__29294 = c__5548__auto__;
var G__29295 = cljs.core.count(c__5548__auto__);
var G__29296 = (0);
seq__28384 = G__29293;
chunk__28385 = G__29294;
count__28386 = G__29295;
i__28387 = G__29296;
continue;
} else {
var vec__28401 = cljs.core.first(seq__28384__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28401,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28401,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29300 = cljs.core.next(seq__28384__$1);
var G__29301 = null;
var G__29302 = (0);
var G__29303 = (0);
seq__28384 = G__29300;
chunk__28385 = G__29301;
count__28386 = G__29302;
i__28387 = G__29303;
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
var seq__28416 = cljs.core.seq(styles);
var chunk__28417 = null;
var count__28418 = (0);
var i__28419 = (0);
while(true){
if((i__28419 < count__28418)){
var vec__28428 = chunk__28417.cljs$core$IIndexed$_nth$arity$2(null,i__28419);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28428,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28428,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29307 = seq__28416;
var G__29308 = chunk__28417;
var G__29309 = count__28418;
var G__29310 = (i__28419 + (1));
seq__28416 = G__29307;
chunk__28417 = G__29308;
count__28418 = G__29309;
i__28419 = G__29310;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28416);
if(temp__5825__auto__){
var seq__28416__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28416__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28416__$1);
var G__29313 = cljs.core.chunk_rest(seq__28416__$1);
var G__29314 = c__5548__auto__;
var G__29315 = cljs.core.count(c__5548__auto__);
var G__29316 = (0);
seq__28416 = G__29313;
chunk__28417 = G__29314;
count__28418 = G__29315;
i__28419 = G__29316;
continue;
} else {
var vec__28431 = cljs.core.first(seq__28416__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28431,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28431,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29326 = cljs.core.next(seq__28416__$1);
var G__29327 = null;
var G__29328 = (0);
var G__29329 = (0);
seq__28416 = G__29326;
chunk__28417 = G__29327;
count__28418 = G__29328;
i__28419 = G__29329;
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
var G__28435_29330 = key;
var G__28435_29331__$1 = (((G__28435_29330 instanceof cljs.core.Keyword))?G__28435_29330.fqn:null);
switch (G__28435_29331__$1) {
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
var ks_29339 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_29339,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_29339,"aria-");
}
})())){
el.setAttribute(ks_29339,value);
} else {
(el[ks_29339] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28448){
var map__28449 = p__28448;
var map__28449__$1 = cljs.core.__destructure_map(map__28449);
var props = map__28449__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28449__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28450 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28450,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28450,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28450,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28453 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28453,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28453;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28455 = arguments.length;
switch (G__28455) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28462){
var vec__28463 = p__28462;
var seq__28464 = cljs.core.seq(vec__28463);
var first__28465 = cljs.core.first(seq__28464);
var seq__28464__$1 = cljs.core.next(seq__28464);
var nn = first__28465;
var first__28465__$1 = cljs.core.first(seq__28464__$1);
var seq__28464__$2 = cljs.core.next(seq__28464__$1);
var np = first__28465__$1;
var nc = seq__28464__$2;
var node = vec__28463;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28468 = nn;
var G__28469 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28468,G__28469) : create_fn.call(null,G__28468,G__28469));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28471 = nn;
var G__28472 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28471,G__28472) : create_fn.call(null,G__28471,G__28472));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28477 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(1),null);
var seq__28483_29374 = cljs.core.seq(node_children);
var chunk__28484_29375 = null;
var count__28485_29376 = (0);
var i__28486_29377 = (0);
while(true){
if((i__28486_29377 < count__28485_29376)){
var child_struct_29378 = chunk__28484_29375.cljs$core$IIndexed$_nth$arity$2(null,i__28486_29377);
var children_29379 = shadow.dom.dom_node(child_struct_29378);
if(cljs.core.seq_QMARK_(children_29379)){
var seq__28525_29380 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29379));
var chunk__28527_29381 = null;
var count__28528_29382 = (0);
var i__28529_29383 = (0);
while(true){
if((i__28529_29383 < count__28528_29382)){
var child_29384 = chunk__28527_29381.cljs$core$IIndexed$_nth$arity$2(null,i__28529_29383);
if(cljs.core.truth_(child_29384)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29384);


var G__29388 = seq__28525_29380;
var G__29389 = chunk__28527_29381;
var G__29390 = count__28528_29382;
var G__29391 = (i__28529_29383 + (1));
seq__28525_29380 = G__29388;
chunk__28527_29381 = G__29389;
count__28528_29382 = G__29390;
i__28529_29383 = G__29391;
continue;
} else {
var G__29392 = seq__28525_29380;
var G__29393 = chunk__28527_29381;
var G__29394 = count__28528_29382;
var G__29395 = (i__28529_29383 + (1));
seq__28525_29380 = G__29392;
chunk__28527_29381 = G__29393;
count__28528_29382 = G__29394;
i__28529_29383 = G__29395;
continue;
}
} else {
var temp__5825__auto___29396 = cljs.core.seq(seq__28525_29380);
if(temp__5825__auto___29396){
var seq__28525_29397__$1 = temp__5825__auto___29396;
if(cljs.core.chunked_seq_QMARK_(seq__28525_29397__$1)){
var c__5548__auto___29398 = cljs.core.chunk_first(seq__28525_29397__$1);
var G__29400 = cljs.core.chunk_rest(seq__28525_29397__$1);
var G__29401 = c__5548__auto___29398;
var G__29402 = cljs.core.count(c__5548__auto___29398);
var G__29403 = (0);
seq__28525_29380 = G__29400;
chunk__28527_29381 = G__29401;
count__28528_29382 = G__29402;
i__28529_29383 = G__29403;
continue;
} else {
var child_29406 = cljs.core.first(seq__28525_29397__$1);
if(cljs.core.truth_(child_29406)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29406);


var G__29408 = cljs.core.next(seq__28525_29397__$1);
var G__29409 = null;
var G__29410 = (0);
var G__29411 = (0);
seq__28525_29380 = G__29408;
chunk__28527_29381 = G__29409;
count__28528_29382 = G__29410;
i__28529_29383 = G__29411;
continue;
} else {
var G__29412 = cljs.core.next(seq__28525_29397__$1);
var G__29413 = null;
var G__29414 = (0);
var G__29415 = (0);
seq__28525_29380 = G__29412;
chunk__28527_29381 = G__29413;
count__28528_29382 = G__29414;
i__28529_29383 = G__29415;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29379);
}


var G__29417 = seq__28483_29374;
var G__29418 = chunk__28484_29375;
var G__29419 = count__28485_29376;
var G__29420 = (i__28486_29377 + (1));
seq__28483_29374 = G__29417;
chunk__28484_29375 = G__29418;
count__28485_29376 = G__29419;
i__28486_29377 = G__29420;
continue;
} else {
var temp__5825__auto___29421 = cljs.core.seq(seq__28483_29374);
if(temp__5825__auto___29421){
var seq__28483_29423__$1 = temp__5825__auto___29421;
if(cljs.core.chunked_seq_QMARK_(seq__28483_29423__$1)){
var c__5548__auto___29424 = cljs.core.chunk_first(seq__28483_29423__$1);
var G__29426 = cljs.core.chunk_rest(seq__28483_29423__$1);
var G__29427 = c__5548__auto___29424;
var G__29428 = cljs.core.count(c__5548__auto___29424);
var G__29429 = (0);
seq__28483_29374 = G__29426;
chunk__28484_29375 = G__29427;
count__28485_29376 = G__29428;
i__28486_29377 = G__29429;
continue;
} else {
var child_struct_29434 = cljs.core.first(seq__28483_29423__$1);
var children_29435 = shadow.dom.dom_node(child_struct_29434);
if(cljs.core.seq_QMARK_(children_29435)){
var seq__28537_29439 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29435));
var chunk__28539_29440 = null;
var count__28540_29441 = (0);
var i__28541_29442 = (0);
while(true){
if((i__28541_29442 < count__28540_29441)){
var child_29444 = chunk__28539_29440.cljs$core$IIndexed$_nth$arity$2(null,i__28541_29442);
if(cljs.core.truth_(child_29444)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29444);


var G__29445 = seq__28537_29439;
var G__29446 = chunk__28539_29440;
var G__29447 = count__28540_29441;
var G__29448 = (i__28541_29442 + (1));
seq__28537_29439 = G__29445;
chunk__28539_29440 = G__29446;
count__28540_29441 = G__29447;
i__28541_29442 = G__29448;
continue;
} else {
var G__29449 = seq__28537_29439;
var G__29450 = chunk__28539_29440;
var G__29451 = count__28540_29441;
var G__29452 = (i__28541_29442 + (1));
seq__28537_29439 = G__29449;
chunk__28539_29440 = G__29450;
count__28540_29441 = G__29451;
i__28541_29442 = G__29452;
continue;
}
} else {
var temp__5825__auto___29453__$1 = cljs.core.seq(seq__28537_29439);
if(temp__5825__auto___29453__$1){
var seq__28537_29454__$1 = temp__5825__auto___29453__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28537_29454__$1)){
var c__5548__auto___29455 = cljs.core.chunk_first(seq__28537_29454__$1);
var G__29456 = cljs.core.chunk_rest(seq__28537_29454__$1);
var G__29457 = c__5548__auto___29455;
var G__29458 = cljs.core.count(c__5548__auto___29455);
var G__29459 = (0);
seq__28537_29439 = G__29456;
chunk__28539_29440 = G__29457;
count__28540_29441 = G__29458;
i__28541_29442 = G__29459;
continue;
} else {
var child_29461 = cljs.core.first(seq__28537_29454__$1);
if(cljs.core.truth_(child_29461)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29461);


var G__29463 = cljs.core.next(seq__28537_29454__$1);
var G__29464 = null;
var G__29465 = (0);
var G__29466 = (0);
seq__28537_29439 = G__29463;
chunk__28539_29440 = G__29464;
count__28540_29441 = G__29465;
i__28541_29442 = G__29466;
continue;
} else {
var G__29467 = cljs.core.next(seq__28537_29454__$1);
var G__29468 = null;
var G__29469 = (0);
var G__29470 = (0);
seq__28537_29439 = G__29467;
chunk__28539_29440 = G__29468;
count__28540_29441 = G__29469;
i__28541_29442 = G__29470;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29435);
}


var G__29471 = cljs.core.next(seq__28483_29423__$1);
var G__29472 = null;
var G__29473 = (0);
var G__29474 = (0);
seq__28483_29374 = G__29471;
chunk__28484_29375 = G__29472;
count__28485_29376 = G__29473;
i__28486_29377 = G__29474;
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
var seq__28565 = cljs.core.seq(node);
var chunk__28566 = null;
var count__28567 = (0);
var i__28568 = (0);
while(true){
if((i__28568 < count__28567)){
var n = chunk__28566.cljs$core$IIndexed$_nth$arity$2(null,i__28568);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29481 = seq__28565;
var G__29482 = chunk__28566;
var G__29483 = count__28567;
var G__29484 = (i__28568 + (1));
seq__28565 = G__29481;
chunk__28566 = G__29482;
count__28567 = G__29483;
i__28568 = G__29484;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28565);
if(temp__5825__auto__){
var seq__28565__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28565__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28565__$1);
var G__29486 = cljs.core.chunk_rest(seq__28565__$1);
var G__29487 = c__5548__auto__;
var G__29488 = cljs.core.count(c__5548__auto__);
var G__29489 = (0);
seq__28565 = G__29486;
chunk__28566 = G__29487;
count__28567 = G__29488;
i__28568 = G__29489;
continue;
} else {
var n = cljs.core.first(seq__28565__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29491 = cljs.core.next(seq__28565__$1);
var G__29492 = null;
var G__29493 = (0);
var G__29494 = (0);
seq__28565 = G__29491;
chunk__28566 = G__29492;
count__28567 = G__29493;
i__28568 = G__29494;
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
var G__28578 = arguments.length;
switch (G__28578) {
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
var G__28593 = arguments.length;
switch (G__28593) {
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
var G__28617 = arguments.length;
switch (G__28617) {
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
var len__5749__auto___29509 = arguments.length;
var i__5750__auto___29510 = (0);
while(true){
if((i__5750__auto___29510 < len__5749__auto___29509)){
args__5755__auto__.push((arguments[i__5750__auto___29510]));

var G__29512 = (i__5750__auto___29510 + (1));
i__5750__auto___29510 = G__29512;
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
var seq__28650_29514 = cljs.core.seq(nodes);
var chunk__28651_29516 = null;
var count__28652_29517 = (0);
var i__28653_29518 = (0);
while(true){
if((i__28653_29518 < count__28652_29517)){
var node_29519 = chunk__28651_29516.cljs$core$IIndexed$_nth$arity$2(null,i__28653_29518);
fragment.appendChild(shadow.dom._to_dom(node_29519));


var G__29521 = seq__28650_29514;
var G__29522 = chunk__28651_29516;
var G__29523 = count__28652_29517;
var G__29524 = (i__28653_29518 + (1));
seq__28650_29514 = G__29521;
chunk__28651_29516 = G__29522;
count__28652_29517 = G__29523;
i__28653_29518 = G__29524;
continue;
} else {
var temp__5825__auto___29526 = cljs.core.seq(seq__28650_29514);
if(temp__5825__auto___29526){
var seq__28650_29527__$1 = temp__5825__auto___29526;
if(cljs.core.chunked_seq_QMARK_(seq__28650_29527__$1)){
var c__5548__auto___29529 = cljs.core.chunk_first(seq__28650_29527__$1);
var G__29530 = cljs.core.chunk_rest(seq__28650_29527__$1);
var G__29531 = c__5548__auto___29529;
var G__29532 = cljs.core.count(c__5548__auto___29529);
var G__29533 = (0);
seq__28650_29514 = G__29530;
chunk__28651_29516 = G__29531;
count__28652_29517 = G__29532;
i__28653_29518 = G__29533;
continue;
} else {
var node_29534 = cljs.core.first(seq__28650_29527__$1);
fragment.appendChild(shadow.dom._to_dom(node_29534));


var G__29535 = cljs.core.next(seq__28650_29527__$1);
var G__29536 = null;
var G__29537 = (0);
var G__29538 = (0);
seq__28650_29514 = G__29535;
chunk__28651_29516 = G__29536;
count__28652_29517 = G__29537;
i__28653_29518 = G__29538;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28640){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28640));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28689_29539 = cljs.core.seq(scripts);
var chunk__28690_29540 = null;
var count__28691_29541 = (0);
var i__28692_29542 = (0);
while(true){
if((i__28692_29542 < count__28691_29541)){
var vec__28705_29543 = chunk__28690_29540.cljs$core$IIndexed$_nth$arity$2(null,i__28692_29542);
var script_tag_29544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28705_29543,(0),null);
var script_body_29545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28705_29543,(1),null);
eval(script_body_29545);


var G__29547 = seq__28689_29539;
var G__29548 = chunk__28690_29540;
var G__29549 = count__28691_29541;
var G__29550 = (i__28692_29542 + (1));
seq__28689_29539 = G__29547;
chunk__28690_29540 = G__29548;
count__28691_29541 = G__29549;
i__28692_29542 = G__29550;
continue;
} else {
var temp__5825__auto___29551 = cljs.core.seq(seq__28689_29539);
if(temp__5825__auto___29551){
var seq__28689_29552__$1 = temp__5825__auto___29551;
if(cljs.core.chunked_seq_QMARK_(seq__28689_29552__$1)){
var c__5548__auto___29557 = cljs.core.chunk_first(seq__28689_29552__$1);
var G__29558 = cljs.core.chunk_rest(seq__28689_29552__$1);
var G__29559 = c__5548__auto___29557;
var G__29560 = cljs.core.count(c__5548__auto___29557);
var G__29561 = (0);
seq__28689_29539 = G__29558;
chunk__28690_29540 = G__29559;
count__28691_29541 = G__29560;
i__28692_29542 = G__29561;
continue;
} else {
var vec__28710_29563 = cljs.core.first(seq__28689_29552__$1);
var script_tag_29564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28710_29563,(0),null);
var script_body_29565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28710_29563,(1),null);
eval(script_body_29565);


var G__29570 = cljs.core.next(seq__28689_29552__$1);
var G__29571 = null;
var G__29572 = (0);
var G__29573 = (0);
seq__28689_29539 = G__29570;
chunk__28690_29540 = G__29571;
count__28691_29541 = G__29572;
i__28692_29542 = G__29573;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__28713){
var vec__28714 = p__28713;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28714,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28714,(1),null);
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
var G__28722 = arguments.length;
switch (G__28722) {
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
var seq__28752 = cljs.core.seq(style_keys);
var chunk__28753 = null;
var count__28754 = (0);
var i__28755 = (0);
while(true){
if((i__28755 < count__28754)){
var it = chunk__28753.cljs$core$IIndexed$_nth$arity$2(null,i__28755);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29581 = seq__28752;
var G__29582 = chunk__28753;
var G__29583 = count__28754;
var G__29584 = (i__28755 + (1));
seq__28752 = G__29581;
chunk__28753 = G__29582;
count__28754 = G__29583;
i__28755 = G__29584;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28752);
if(temp__5825__auto__){
var seq__28752__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28752__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28752__$1);
var G__29587 = cljs.core.chunk_rest(seq__28752__$1);
var G__29588 = c__5548__auto__;
var G__29589 = cljs.core.count(c__5548__auto__);
var G__29590 = (0);
seq__28752 = G__29587;
chunk__28753 = G__29588;
count__28754 = G__29589;
i__28755 = G__29590;
continue;
} else {
var it = cljs.core.first(seq__28752__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29591 = cljs.core.next(seq__28752__$1);
var G__29592 = null;
var G__29593 = (0);
var G__29594 = (0);
seq__28752 = G__29591;
chunk__28753 = G__29592;
count__28754 = G__29593;
i__28755 = G__29594;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k28788,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__28862 = k28788;
var G__28862__$1 = (((G__28862 instanceof cljs.core.Keyword))?G__28862.fqn:null);
switch (G__28862__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28788,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__28871){
var vec__28874 = p__28871;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28874,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28874,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28787){
var self__ = this;
var G__28787__$1 = this;
return (new cljs.core.RecordIter((0),G__28787__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28789,other28790){
var self__ = this;
var this28789__$1 = this;
return (((!((other28790 == null)))) && ((((this28789__$1.constructor === other28790.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28789__$1.x,other28790.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28789__$1.y,other28790.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28789__$1.__extmap,other28790.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k28788){
var self__ = this;
var this__5330__auto____$1 = this;
var G__28899 = k28788;
var G__28899__$1 = (((G__28899 instanceof cljs.core.Keyword))?G__28899.fqn:null);
switch (G__28899__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28788);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__28787){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__28904 = cljs.core.keyword_identical_QMARK_;
var expr__28905 = k__5332__auto__;
if(cljs.core.truth_((pred__28904.cljs$core$IFn$_invoke$arity$2 ? pred__28904.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__28905) : pred__28904.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__28905)))){
return (new shadow.dom.Coordinate(G__28787,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28904.cljs$core$IFn$_invoke$arity$2 ? pred__28904.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__28905) : pred__28904.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__28905)))){
return (new shadow.dom.Coordinate(self__.x,G__28787,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__28787),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__28787){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28787,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28808){
var extmap__5365__auto__ = (function (){var G__28924 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28808,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28808)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28924);
} else {
return G__28924;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28808),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28808),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k28937,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__28949 = k28937;
var G__28949__$1 = (((G__28949 instanceof cljs.core.Keyword))?G__28949.fqn:null);
switch (G__28949__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28937,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__28954){
var vec__28955 = p__28954;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28955,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28955,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28936){
var self__ = this;
var G__28936__$1 = this;
return (new cljs.core.RecordIter((0),G__28936__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28938,other28939){
var self__ = this;
var this28938__$1 = this;
return (((!((other28939 == null)))) && ((((this28938__$1.constructor === other28939.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28938__$1.w,other28939.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28938__$1.h,other28939.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28938__$1.__extmap,other28939.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k28937){
var self__ = this;
var this__5330__auto____$1 = this;
var G__28978 = k28937;
var G__28978__$1 = (((G__28978 instanceof cljs.core.Keyword))?G__28978.fqn:null);
switch (G__28978__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28937);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__28936){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__28981 = cljs.core.keyword_identical_QMARK_;
var expr__28982 = k__5332__auto__;
if(cljs.core.truth_((pred__28981.cljs$core$IFn$_invoke$arity$2 ? pred__28981.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__28982) : pred__28981.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__28982)))){
return (new shadow.dom.Size(G__28936,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28981.cljs$core$IFn$_invoke$arity$2 ? pred__28981.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__28982) : pred__28981.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__28982)))){
return (new shadow.dom.Size(self__.w,G__28936,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__28936),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__28936){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__28936,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__28942){
var extmap__5365__auto__ = (function (){var G__28994 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28942,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__28942)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28994);
} else {
return G__28994;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__28942),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__28942),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__29675 = (i + (1));
var G__29676 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29675;
ret = G__29676;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29017){
var vec__29018 = p__29017;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29018,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29025 = arguments.length;
switch (G__29025) {
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
var G__29694 = ps;
var G__29695 = (i + (1));
el__$1 = G__29694;
i = G__29695;
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
var vec__29062 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29067_29723 = cljs.core.seq(props);
var chunk__29068_29724 = null;
var count__29070_29725 = (0);
var i__29071_29726 = (0);
while(true){
if((i__29071_29726 < count__29070_29725)){
var vec__29087_29727 = chunk__29068_29724.cljs$core$IIndexed$_nth$arity$2(null,i__29071_29726);
var k_29728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29087_29727,(0),null);
var v_29729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29087_29727,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_29728);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29728),v_29729);


var G__29731 = seq__29067_29723;
var G__29732 = chunk__29068_29724;
var G__29733 = count__29070_29725;
var G__29734 = (i__29071_29726 + (1));
seq__29067_29723 = G__29731;
chunk__29068_29724 = G__29732;
count__29070_29725 = G__29733;
i__29071_29726 = G__29734;
continue;
} else {
var temp__5825__auto___29735 = cljs.core.seq(seq__29067_29723);
if(temp__5825__auto___29735){
var seq__29067_29737__$1 = temp__5825__auto___29735;
if(cljs.core.chunked_seq_QMARK_(seq__29067_29737__$1)){
var c__5548__auto___29738 = cljs.core.chunk_first(seq__29067_29737__$1);
var G__29740 = cljs.core.chunk_rest(seq__29067_29737__$1);
var G__29741 = c__5548__auto___29738;
var G__29742 = cljs.core.count(c__5548__auto___29738);
var G__29743 = (0);
seq__29067_29723 = G__29740;
chunk__29068_29724 = G__29741;
count__29070_29725 = G__29742;
i__29071_29726 = G__29743;
continue;
} else {
var vec__29095_29745 = cljs.core.first(seq__29067_29737__$1);
var k_29746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29095_29745,(0),null);
var v_29747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29095_29745,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_29746);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29746),v_29747);


var G__29749 = cljs.core.next(seq__29067_29737__$1);
var G__29750 = null;
var G__29751 = (0);
var G__29752 = (0);
seq__29067_29723 = G__29749;
chunk__29068_29724 = G__29750;
count__29070_29725 = G__29751;
i__29071_29726 = G__29752;
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
var vec__29116 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29116,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29116,(1),null);
var seq__29121_29753 = cljs.core.seq(node_children);
var chunk__29123_29755 = null;
var count__29124_29756 = (0);
var i__29125_29757 = (0);
while(true){
if((i__29125_29757 < count__29124_29756)){
var child_struct_29758 = chunk__29123_29755.cljs$core$IIndexed$_nth$arity$2(null,i__29125_29757);
if((!((child_struct_29758 == null)))){
if(typeof child_struct_29758 === 'string'){
var text_29760 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29760),child_struct_29758].join(''));
} else {
var children_29761 = shadow.dom.svg_node(child_struct_29758);
if(cljs.core.seq_QMARK_(children_29761)){
var seq__29167_29763 = cljs.core.seq(children_29761);
var chunk__29169_29764 = null;
var count__29170_29765 = (0);
var i__29171_29766 = (0);
while(true){
if((i__29171_29766 < count__29170_29765)){
var child_29767 = chunk__29169_29764.cljs$core$IIndexed$_nth$arity$2(null,i__29171_29766);
if(cljs.core.truth_(child_29767)){
node.appendChild(child_29767);


var G__29768 = seq__29167_29763;
var G__29769 = chunk__29169_29764;
var G__29770 = count__29170_29765;
var G__29771 = (i__29171_29766 + (1));
seq__29167_29763 = G__29768;
chunk__29169_29764 = G__29769;
count__29170_29765 = G__29770;
i__29171_29766 = G__29771;
continue;
} else {
var G__29772 = seq__29167_29763;
var G__29773 = chunk__29169_29764;
var G__29774 = count__29170_29765;
var G__29775 = (i__29171_29766 + (1));
seq__29167_29763 = G__29772;
chunk__29169_29764 = G__29773;
count__29170_29765 = G__29774;
i__29171_29766 = G__29775;
continue;
}
} else {
var temp__5825__auto___29776 = cljs.core.seq(seq__29167_29763);
if(temp__5825__auto___29776){
var seq__29167_29777__$1 = temp__5825__auto___29776;
if(cljs.core.chunked_seq_QMARK_(seq__29167_29777__$1)){
var c__5548__auto___29778 = cljs.core.chunk_first(seq__29167_29777__$1);
var G__29779 = cljs.core.chunk_rest(seq__29167_29777__$1);
var G__29780 = c__5548__auto___29778;
var G__29781 = cljs.core.count(c__5548__auto___29778);
var G__29782 = (0);
seq__29167_29763 = G__29779;
chunk__29169_29764 = G__29780;
count__29170_29765 = G__29781;
i__29171_29766 = G__29782;
continue;
} else {
var child_29783 = cljs.core.first(seq__29167_29777__$1);
if(cljs.core.truth_(child_29783)){
node.appendChild(child_29783);


var G__29784 = cljs.core.next(seq__29167_29777__$1);
var G__29785 = null;
var G__29786 = (0);
var G__29787 = (0);
seq__29167_29763 = G__29784;
chunk__29169_29764 = G__29785;
count__29170_29765 = G__29786;
i__29171_29766 = G__29787;
continue;
} else {
var G__29788 = cljs.core.next(seq__29167_29777__$1);
var G__29789 = null;
var G__29790 = (0);
var G__29791 = (0);
seq__29167_29763 = G__29788;
chunk__29169_29764 = G__29789;
count__29170_29765 = G__29790;
i__29171_29766 = G__29791;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29761);
}
}


var G__29792 = seq__29121_29753;
var G__29793 = chunk__29123_29755;
var G__29794 = count__29124_29756;
var G__29795 = (i__29125_29757 + (1));
seq__29121_29753 = G__29792;
chunk__29123_29755 = G__29793;
count__29124_29756 = G__29794;
i__29125_29757 = G__29795;
continue;
} else {
var G__29798 = seq__29121_29753;
var G__29799 = chunk__29123_29755;
var G__29800 = count__29124_29756;
var G__29801 = (i__29125_29757 + (1));
seq__29121_29753 = G__29798;
chunk__29123_29755 = G__29799;
count__29124_29756 = G__29800;
i__29125_29757 = G__29801;
continue;
}
} else {
var temp__5825__auto___29802 = cljs.core.seq(seq__29121_29753);
if(temp__5825__auto___29802){
var seq__29121_29803__$1 = temp__5825__auto___29802;
if(cljs.core.chunked_seq_QMARK_(seq__29121_29803__$1)){
var c__5548__auto___29804 = cljs.core.chunk_first(seq__29121_29803__$1);
var G__29805 = cljs.core.chunk_rest(seq__29121_29803__$1);
var G__29806 = c__5548__auto___29804;
var G__29807 = cljs.core.count(c__5548__auto___29804);
var G__29808 = (0);
seq__29121_29753 = G__29805;
chunk__29123_29755 = G__29806;
count__29124_29756 = G__29807;
i__29125_29757 = G__29808;
continue;
} else {
var child_struct_29809 = cljs.core.first(seq__29121_29803__$1);
if((!((child_struct_29809 == null)))){
if(typeof child_struct_29809 === 'string'){
var text_29810 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29810),child_struct_29809].join(''));
} else {
var children_29811 = shadow.dom.svg_node(child_struct_29809);
if(cljs.core.seq_QMARK_(children_29811)){
var seq__29197_29812 = cljs.core.seq(children_29811);
var chunk__29199_29813 = null;
var count__29200_29814 = (0);
var i__29201_29815 = (0);
while(true){
if((i__29201_29815 < count__29200_29814)){
var child_29818 = chunk__29199_29813.cljs$core$IIndexed$_nth$arity$2(null,i__29201_29815);
if(cljs.core.truth_(child_29818)){
node.appendChild(child_29818);


var G__29819 = seq__29197_29812;
var G__29820 = chunk__29199_29813;
var G__29821 = count__29200_29814;
var G__29822 = (i__29201_29815 + (1));
seq__29197_29812 = G__29819;
chunk__29199_29813 = G__29820;
count__29200_29814 = G__29821;
i__29201_29815 = G__29822;
continue;
} else {
var G__29823 = seq__29197_29812;
var G__29824 = chunk__29199_29813;
var G__29825 = count__29200_29814;
var G__29826 = (i__29201_29815 + (1));
seq__29197_29812 = G__29823;
chunk__29199_29813 = G__29824;
count__29200_29814 = G__29825;
i__29201_29815 = G__29826;
continue;
}
} else {
var temp__5825__auto___29827__$1 = cljs.core.seq(seq__29197_29812);
if(temp__5825__auto___29827__$1){
var seq__29197_29828__$1 = temp__5825__auto___29827__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29197_29828__$1)){
var c__5548__auto___29829 = cljs.core.chunk_first(seq__29197_29828__$1);
var G__29830 = cljs.core.chunk_rest(seq__29197_29828__$1);
var G__29831 = c__5548__auto___29829;
var G__29832 = cljs.core.count(c__5548__auto___29829);
var G__29833 = (0);
seq__29197_29812 = G__29830;
chunk__29199_29813 = G__29831;
count__29200_29814 = G__29832;
i__29201_29815 = G__29833;
continue;
} else {
var child_29835 = cljs.core.first(seq__29197_29828__$1);
if(cljs.core.truth_(child_29835)){
node.appendChild(child_29835);


var G__29836 = cljs.core.next(seq__29197_29828__$1);
var G__29837 = null;
var G__29838 = (0);
var G__29839 = (0);
seq__29197_29812 = G__29836;
chunk__29199_29813 = G__29837;
count__29200_29814 = G__29838;
i__29201_29815 = G__29839;
continue;
} else {
var G__29840 = cljs.core.next(seq__29197_29828__$1);
var G__29841 = null;
var G__29842 = (0);
var G__29843 = (0);
seq__29197_29812 = G__29840;
chunk__29199_29813 = G__29841;
count__29200_29814 = G__29842;
i__29201_29815 = G__29843;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29811);
}
}


var G__29848 = cljs.core.next(seq__29121_29803__$1);
var G__29849 = null;
var G__29850 = (0);
var G__29851 = (0);
seq__29121_29753 = G__29848;
chunk__29123_29755 = G__29849;
count__29124_29756 = G__29850;
i__29125_29757 = G__29851;
continue;
} else {
var G__29852 = cljs.core.next(seq__29121_29803__$1);
var G__29853 = null;
var G__29854 = (0);
var G__29855 = (0);
seq__29121_29753 = G__29852;
chunk__29123_29755 = G__29853;
count__29124_29756 = G__29854;
i__29125_29757 = G__29855;
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
var len__5749__auto___29861 = arguments.length;
var i__5750__auto___29862 = (0);
while(true){
if((i__5750__auto___29862 < len__5749__auto___29861)){
args__5755__auto__.push((arguments[i__5750__auto___29862]));

var G__29864 = (i__5750__auto___29862 + (1));
i__5750__auto___29862 = G__29864;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29212){
var G__29213 = cljs.core.first(seq29212);
var seq29212__$1 = cljs.core.next(seq29212);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29213,seq29212__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
