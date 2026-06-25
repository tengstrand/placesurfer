goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30974 = (function (f,blockable,meta30975){
this.f = f;
this.blockable = blockable;
this.meta30975 = meta30975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30976,meta30975__$1){
var self__ = this;
var _30976__$1 = this;
return (new cljs.core.async.t_cljs$core$async30974(self__.f,self__.blockable,meta30975__$1));
}));

(cljs.core.async.t_cljs$core$async30974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30976){
var self__ = this;
var _30976__$1 = this;
return self__.meta30975;
}));

(cljs.core.async.t_cljs$core$async30974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30975","meta30975",1239781277,null)], null);
}));

(cljs.core.async.t_cljs$core$async30974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30974");

(cljs.core.async.t_cljs$core$async30974.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async30974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30974.
 */
cljs.core.async.__GT_t_cljs$core$async30974 = (function cljs$core$async$__GT_t_cljs$core$async30974(f,blockable,meta30975){
return (new cljs.core.async.t_cljs$core$async30974(f,blockable,meta30975));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30961 = arguments.length;
switch (G__30961) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async30974(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31033 = arguments.length;
switch (G__31033) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31055 = arguments.length;
switch (G__31055) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31096 = arguments.length;
switch (G__31096) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34263 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34263) : fn1.call(null,val_34263));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34263) : fn1.call(null,val_34263));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31122 = arguments.length;
switch (G__31122) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___34276 = n;
var x_34277 = (0);
while(true){
if((x_34277 < n__5616__auto___34276)){
(a[x_34277] = x_34277);

var G__34278 = (x_34277 + (1));
x_34277 = G__34278;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31140 = (function (flag,meta31141){
this.flag = flag;
this.meta31141 = meta31141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31142,meta31141__$1){
var self__ = this;
var _31142__$1 = this;
return (new cljs.core.async.t_cljs$core$async31140(self__.flag,meta31141__$1));
}));

(cljs.core.async.t_cljs$core$async31140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31142){
var self__ = this;
var _31142__$1 = this;
return self__.meta31141;
}));

(cljs.core.async.t_cljs$core$async31140.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31140.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31141","meta31141",-1261675707,null)], null);
}));

(cljs.core.async.t_cljs$core$async31140.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31140");

(cljs.core.async.t_cljs$core$async31140.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31140");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31140.
 */
cljs.core.async.__GT_t_cljs$core$async31140 = (function cljs$core$async$__GT_t_cljs$core$async31140(flag,meta31141){
return (new cljs.core.async.t_cljs$core$async31140(flag,meta31141));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31140(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31154 = (function (flag,cb,meta31155){
this.flag = flag;
this.cb = cb;
this.meta31155 = meta31155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31156,meta31155__$1){
var self__ = this;
var _31156__$1 = this;
return (new cljs.core.async.t_cljs$core$async31154(self__.flag,self__.cb,meta31155__$1));
}));

(cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31156){
var self__ = this;
var _31156__$1 = this;
return self__.meta31155;
}));

(cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31155","meta31155",582160174,null)], null);
}));

(cljs.core.async.t_cljs$core$async31154.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31154");

(cljs.core.async.t_cljs$core$async31154.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31154");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31154.
 */
cljs.core.async.__GT_t_cljs$core$async31154 = (function cljs$core$async$__GT_t_cljs$core$async31154(flag,cb,meta31155){
return (new cljs.core.async.t_cljs$core$async31154(flag,cb,meta31155));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31154(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_34284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34284)){
if((!(((port_34284.cljs$core$IFn$_invoke$arity$1 ? port_34284.cljs$core$IFn$_invoke$arity$1((1)) : port_34284.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34285 = (i + (1));
i = G__34285;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31195_SHARP_){
var G__31214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31195_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31214) : fret.call(null,G__31214));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31201_SHARP_){
var G__31215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31201_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31215) : fret.call(null,G__31215));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34292 = (i + (1));
i = G__34292;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34293 = arguments.length;
var i__5750__auto___34294 = (0);
while(true){
if((i__5750__auto___34294 < len__5749__auto___34293)){
args__5755__auto__.push((arguments[i__5750__auto___34294]));

var G__34295 = (i__5750__auto___34294 + (1));
i__5750__auto___34294 = G__34295;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31231){
var map__31232 = p__31231;
var map__31232__$1 = cljs.core.__destructure_map(map__31232);
var opts = map__31232__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31224){
var G__31225 = cljs.core.first(seq31224);
var seq31224__$1 = cljs.core.next(seq31224);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31225,seq31224__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31240 = arguments.length;
switch (G__31240) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30866__auto___34308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_31463){
var state_val_31468 = (state_31463[(1)]);
if((state_val_31468 === (7))){
var inst_31410 = (state_31463[(2)]);
var state_31463__$1 = state_31463;
var statearr_31500_34309 = state_31463__$1;
(statearr_31500_34309[(2)] = inst_31410);

(statearr_31500_34309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (1))){
var state_31463__$1 = state_31463;
var statearr_31501_34310 = state_31463__$1;
(statearr_31501_34310[(2)] = null);

(statearr_31501_34310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (4))){
var inst_31354 = (state_31463[(7)]);
var inst_31354__$1 = (state_31463[(2)]);
var inst_31376 = (inst_31354__$1 == null);
var state_31463__$1 = (function (){var statearr_31506 = state_31463;
(statearr_31506[(7)] = inst_31354__$1);

return statearr_31506;
})();
if(cljs.core.truth_(inst_31376)){
var statearr_31507_34311 = state_31463__$1;
(statearr_31507_34311[(1)] = (5));

} else {
var statearr_31508_34312 = state_31463__$1;
(statearr_31508_34312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (13))){
var state_31463__$1 = state_31463;
var statearr_31511_34314 = state_31463__$1;
(statearr_31511_34314[(2)] = null);

(statearr_31511_34314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (6))){
var inst_31354 = (state_31463[(7)]);
var state_31463__$1 = state_31463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31463__$1,(11),to,inst_31354);
} else {
if((state_val_31468 === (3))){
var inst_31414 = (state_31463[(2)]);
var state_31463__$1 = state_31463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31463__$1,inst_31414);
} else {
if((state_val_31468 === (12))){
var state_31463__$1 = state_31463;
var statearr_31517_34316 = state_31463__$1;
(statearr_31517_34316[(2)] = null);

(statearr_31517_34316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (2))){
var state_31463__$1 = state_31463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31463__$1,(4),from);
} else {
if((state_val_31468 === (11))){
var inst_31396 = (state_31463[(2)]);
var state_31463__$1 = state_31463;
if(cljs.core.truth_(inst_31396)){
var statearr_31520_34317 = state_31463__$1;
(statearr_31520_34317[(1)] = (12));

} else {
var statearr_31521_34318 = state_31463__$1;
(statearr_31521_34318[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (9))){
var state_31463__$1 = state_31463;
var statearr_31522_34319 = state_31463__$1;
(statearr_31522_34319[(2)] = null);

(statearr_31522_34319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (5))){
var state_31463__$1 = state_31463;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31526_34320 = state_31463__$1;
(statearr_31526_34320[(1)] = (8));

} else {
var statearr_31527_34321 = state_31463__$1;
(statearr_31527_34321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (14))){
var inst_31408 = (state_31463[(2)]);
var state_31463__$1 = state_31463;
var statearr_31528_34322 = state_31463__$1;
(statearr_31528_34322[(2)] = inst_31408);

(statearr_31528_34322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (10))){
var inst_31391 = (state_31463[(2)]);
var state_31463__$1 = state_31463;
var statearr_31530_34325 = state_31463__$1;
(statearr_31530_34325[(2)] = inst_31391);

(statearr_31530_34325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (8))){
var inst_31388 = cljs.core.async.close_BANG_(to);
var state_31463__$1 = state_31463;
var statearr_31531_34326 = state_31463__$1;
(statearr_31531_34326[(2)] = inst_31388);

(statearr_31531_34326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30668__auto__ = null;
var cljs$core$async$state_machine__30668__auto____0 = (function (){
var statearr_31533 = [null,null,null,null,null,null,null,null];
(statearr_31533[(0)] = cljs$core$async$state_machine__30668__auto__);

(statearr_31533[(1)] = (1));

return statearr_31533;
});
var cljs$core$async$state_machine__30668__auto____1 = (function (state_31463){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_31463);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e31535){var ex__30671__auto__ = e31535;
var statearr_31537_34339 = state_31463;
(statearr_31537_34339[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_31463[(4)]))){
var statearr_31538_34343 = state_31463;
(statearr_31538_34343[(1)] = cljs.core.first((state_31463[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34347 = state_31463;
state_31463 = G__34347;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$state_machine__30668__auto__ = function(state_31463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30668__auto____1.call(this,state_31463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30668__auto____0;
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30668__auto____1;
return cljs$core$async$state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_31541 = f__30867__auto__();
(statearr_31541[(6)] = c__30866__auto___34308);

return statearr_31541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__31546){
var vec__31547 = p__31546;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31547,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31547,(1),null);
var job = vec__31547;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30866__auto___34355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_31557){
var state_val_31558 = (state_31557[(1)]);
if((state_val_31558 === (1))){
var state_31557__$1 = state_31557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31557__$1,(2),res,v);
} else {
if((state_val_31558 === (2))){
var inst_31554 = (state_31557[(2)]);
var inst_31555 = cljs.core.async.close_BANG_(res);
var state_31557__$1 = (function (){var statearr_31561 = state_31557;
(statearr_31561[(7)] = inst_31554);

return statearr_31561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31557__$1,inst_31555);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0 = (function (){
var statearr_31563 = [null,null,null,null,null,null,null,null];
(statearr_31563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__);

(statearr_31563[(1)] = (1));

return statearr_31563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1 = (function (state_31557){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_31557);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e31564){var ex__30671__auto__ = e31564;
var statearr_31565_34361 = state_31557;
(statearr_31565_34361[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_31557[(4)]))){
var statearr_31566_34362 = state_31557;
(statearr_31566_34362[(1)] = cljs.core.first((state_31557[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34364 = state_31557;
state_31557 = G__34364;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__ = function(state_31557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1.call(this,state_31557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_31569 = f__30867__auto__();
(statearr_31569[(6)] = c__30866__auto___34355);

return statearr_31569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31570){
var vec__31571 = p__31570;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31571,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31571,(1),null);
var job = vec__31571;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___34365 = n;
var __34366 = (0);
while(true){
if((__34366 < n__5616__auto___34365)){
var G__31585_34369 = type;
var G__31585_34370__$1 = (((G__31585_34369 instanceof cljs.core.Keyword))?G__31585_34369.fqn:null);
switch (G__31585_34370__$1) {
case "compute":
var c__30866__auto___34374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34366,c__30866__auto___34374,G__31585_34369,G__31585_34370__$1,n__5616__auto___34365,jobs,results,process__$1,async){
return (function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = ((function (__34366,c__30866__auto___34374,G__31585_34369,G__31585_34370__$1,n__5616__auto___34365,jobs,results,process__$1,async){
return (function (state_31604){
var state_val_31605 = (state_31604[(1)]);
if((state_val_31605 === (1))){
var state_31604__$1 = state_31604;
var statearr_31610_34375 = state_31604__$1;
(statearr_31610_34375[(2)] = null);

(statearr_31610_34375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (2))){
var state_31604__$1 = state_31604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31604__$1,(4),jobs);
} else {
if((state_val_31605 === (3))){
var inst_31602 = (state_31604[(2)]);
var state_31604__$1 = state_31604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31604__$1,inst_31602);
} else {
if((state_val_31605 === (4))){
var inst_31592 = (state_31604[(2)]);
var inst_31593 = process__$1(inst_31592);
var state_31604__$1 = state_31604;
if(cljs.core.truth_(inst_31593)){
var statearr_31612_34376 = state_31604__$1;
(statearr_31612_34376[(1)] = (5));

} else {
var statearr_31613_34377 = state_31604__$1;
(statearr_31613_34377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (5))){
var state_31604__$1 = state_31604;
var statearr_31614_34378 = state_31604__$1;
(statearr_31614_34378[(2)] = null);

(statearr_31614_34378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (6))){
var state_31604__$1 = state_31604;
var statearr_31615_34379 = state_31604__$1;
(statearr_31615_34379[(2)] = null);

(statearr_31615_34379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (7))){
var inst_31600 = (state_31604[(2)]);
var state_31604__$1 = state_31604;
var statearr_31616_34380 = state_31604__$1;
(statearr_31616_34380[(2)] = inst_31600);

(statearr_31616_34380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34366,c__30866__auto___34374,G__31585_34369,G__31585_34370__$1,n__5616__auto___34365,jobs,results,process__$1,async))
;
return ((function (__34366,switch__30667__auto__,c__30866__auto___34374,G__31585_34369,G__31585_34370__$1,n__5616__auto___34365,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0 = (function (){
var statearr_31617 = [null,null,null,null,null,null,null];
(statearr_31617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__);

(statearr_31617[(1)] = (1));

return statearr_31617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1 = (function (state_31604){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_31604);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e31619){var ex__30671__auto__ = e31619;
var statearr_31621_34385 = state_31604;
(statearr_31621_34385[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_31604[(4)]))){
var statearr_31622_34386 = state_31604;
(statearr_31622_34386[(1)] = cljs.core.first((state_31604[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34387 = state_31604;
state_31604 = G__34387;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__ = function(state_31604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1.call(this,state_31604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__;
})()
;})(__34366,switch__30667__auto__,c__30866__auto___34374,G__31585_34369,G__31585_34370__$1,n__5616__auto___34365,jobs,results,process__$1,async))
})();
var state__30868__auto__ = (function (){var statearr_31624 = f__30867__auto__();
(statearr_31624[(6)] = c__30866__auto___34374);

return statearr_31624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
});})(__34366,c__30866__auto___34374,G__31585_34369,G__31585_34370__$1,n__5616__auto___34365,jobs,results,process__$1,async))
);


break;
case "async":
var c__30866__auto___34388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34366,c__30866__auto___34388,G__31585_34369,G__31585_34370__$1,n__5616__auto___34365,jobs,results,process__$1,async){
return (function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = ((function (__34366,c__30866__auto___34388,G__31585_34369,G__31585_34370__$1,n__5616__auto___34365,jobs,results,process__$1,async){
return (function (state_31639){
var state_val_31640 = (state_31639[(1)]);
if((state_val_31640 === (1))){
var state_31639__$1 = state_31639;
var statearr_31641_34389 = state_31639__$1;
(statearr_31641_34389[(2)] = null);

(statearr_31641_34389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (2))){
var state_31639__$1 = state_31639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31639__$1,(4),jobs);
} else {
if((state_val_31640 === (3))){
var inst_31636 = (state_31639[(2)]);
var state_31639__$1 = state_31639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31639__$1,inst_31636);
} else {
if((state_val_31640 === (4))){
var inst_31628 = (state_31639[(2)]);
var inst_31629 = async(inst_31628);
var state_31639__$1 = state_31639;
if(cljs.core.truth_(inst_31629)){
var statearr_31643_34391 = state_31639__$1;
(statearr_31643_34391[(1)] = (5));

} else {
var statearr_31647_34392 = state_31639__$1;
(statearr_31647_34392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (5))){
var state_31639__$1 = state_31639;
var statearr_31651_34393 = state_31639__$1;
(statearr_31651_34393[(2)] = null);

(statearr_31651_34393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (6))){
var state_31639__$1 = state_31639;
var statearr_31653_34400 = state_31639__$1;
(statearr_31653_34400[(2)] = null);

(statearr_31653_34400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (7))){
var inst_31634 = (state_31639[(2)]);
var state_31639__$1 = state_31639;
var statearr_31658_34401 = state_31639__$1;
(statearr_31658_34401[(2)] = inst_31634);

(statearr_31658_34401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34366,c__30866__auto___34388,G__31585_34369,G__31585_34370__$1,n__5616__auto___34365,jobs,results,process__$1,async))
;
return ((function (__34366,switch__30667__auto__,c__30866__auto___34388,G__31585_34369,G__31585_34370__$1,n__5616__auto___34365,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0 = (function (){
var statearr_31666 = [null,null,null,null,null,null,null];
(statearr_31666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__);

(statearr_31666[(1)] = (1));

return statearr_31666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1 = (function (state_31639){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_31639);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e31670){var ex__30671__auto__ = e31670;
var statearr_31671_34402 = state_31639;
(statearr_31671_34402[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_31639[(4)]))){
var statearr_31672_34403 = state_31639;
(statearr_31672_34403[(1)] = cljs.core.first((state_31639[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34404 = state_31639;
state_31639 = G__34404;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__ = function(state_31639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1.call(this,state_31639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__;
})()
;})(__34366,switch__30667__auto__,c__30866__auto___34388,G__31585_34369,G__31585_34370__$1,n__5616__auto___34365,jobs,results,process__$1,async))
})();
var state__30868__auto__ = (function (){var statearr_31684 = f__30867__auto__();
(statearr_31684[(6)] = c__30866__auto___34388);

return statearr_31684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
});})(__34366,c__30866__auto___34388,G__31585_34369,G__31585_34370__$1,n__5616__auto___34365,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31585_34370__$1)].join('')));

}

var G__34405 = (__34366 + (1));
__34366 = G__34405;
continue;
} else {
}
break;
}

var c__30866__auto___34406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_31735){
var state_val_31736 = (state_31735[(1)]);
if((state_val_31736 === (7))){
var inst_31727 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31743_34407 = state_31735__$1;
(statearr_31743_34407[(2)] = inst_31727);

(statearr_31743_34407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (1))){
var state_31735__$1 = state_31735;
var statearr_31745_34408 = state_31735__$1;
(statearr_31745_34408[(2)] = null);

(statearr_31745_34408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (4))){
var inst_31697 = (state_31735[(7)]);
var inst_31697__$1 = (state_31735[(2)]);
var inst_31704 = (inst_31697__$1 == null);
var state_31735__$1 = (function (){var statearr_31747 = state_31735;
(statearr_31747[(7)] = inst_31697__$1);

return statearr_31747;
})();
if(cljs.core.truth_(inst_31704)){
var statearr_31748_34410 = state_31735__$1;
(statearr_31748_34410[(1)] = (5));

} else {
var statearr_31749_34411 = state_31735__$1;
(statearr_31749_34411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (6))){
var inst_31697 = (state_31735[(7)]);
var inst_31709 = (state_31735[(8)]);
var inst_31709__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31718 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31719 = [inst_31697,inst_31709__$1];
var inst_31720 = (new cljs.core.PersistentVector(null,2,(5),inst_31718,inst_31719,null));
var state_31735__$1 = (function (){var statearr_31750 = state_31735;
(statearr_31750[(8)] = inst_31709__$1);

return statearr_31750;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31735__$1,(8),jobs,inst_31720);
} else {
if((state_val_31736 === (3))){
var inst_31729 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31735__$1,inst_31729);
} else {
if((state_val_31736 === (2))){
var state_31735__$1 = state_31735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31735__$1,(4),from);
} else {
if((state_val_31736 === (9))){
var inst_31724 = (state_31735[(2)]);
var state_31735__$1 = (function (){var statearr_31751 = state_31735;
(statearr_31751[(9)] = inst_31724);

return statearr_31751;
})();
var statearr_31752_34413 = state_31735__$1;
(statearr_31752_34413[(2)] = null);

(statearr_31752_34413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (5))){
var inst_31707 = cljs.core.async.close_BANG_(jobs);
var state_31735__$1 = state_31735;
var statearr_31753_34414 = state_31735__$1;
(statearr_31753_34414[(2)] = inst_31707);

(statearr_31753_34414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (8))){
var inst_31709 = (state_31735[(8)]);
var inst_31722 = (state_31735[(2)]);
var state_31735__$1 = (function (){var statearr_31755 = state_31735;
(statearr_31755[(10)] = inst_31722);

return statearr_31755;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31735__$1,(9),results,inst_31709);
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
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0 = (function (){
var statearr_31756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__);

(statearr_31756[(1)] = (1));

return statearr_31756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1 = (function (state_31735){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_31735);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e31757){var ex__30671__auto__ = e31757;
var statearr_31758_34419 = state_31735;
(statearr_31758_34419[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_31735[(4)]))){
var statearr_31759_34420 = state_31735;
(statearr_31759_34420[(1)] = cljs.core.first((state_31735[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34423 = state_31735;
state_31735 = G__34423;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__ = function(state_31735){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1.call(this,state_31735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_31762 = f__30867__auto__();
(statearr_31762[(6)] = c__30866__auto___34406);

return statearr_31762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));


var c__30866__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_31803){
var state_val_31804 = (state_31803[(1)]);
if((state_val_31804 === (7))){
var inst_31799 = (state_31803[(2)]);
var state_31803__$1 = state_31803;
var statearr_31805_34425 = state_31803__$1;
(statearr_31805_34425[(2)] = inst_31799);

(statearr_31805_34425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (20))){
var state_31803__$1 = state_31803;
var statearr_31812_34427 = state_31803__$1;
(statearr_31812_34427[(2)] = null);

(statearr_31812_34427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (1))){
var state_31803__$1 = state_31803;
var statearr_31815_34428 = state_31803__$1;
(statearr_31815_34428[(2)] = null);

(statearr_31815_34428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (4))){
var inst_31766 = (state_31803[(7)]);
var inst_31766__$1 = (state_31803[(2)]);
var inst_31769 = (inst_31766__$1 == null);
var state_31803__$1 = (function (){var statearr_31822 = state_31803;
(statearr_31822[(7)] = inst_31766__$1);

return statearr_31822;
})();
if(cljs.core.truth_(inst_31769)){
var statearr_31823_34430 = state_31803__$1;
(statearr_31823_34430[(1)] = (5));

} else {
var statearr_31826_34431 = state_31803__$1;
(statearr_31826_34431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (15))){
var inst_31781 = (state_31803[(8)]);
var state_31803__$1 = state_31803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31803__$1,(18),to,inst_31781);
} else {
if((state_val_31804 === (21))){
var inst_31794 = (state_31803[(2)]);
var state_31803__$1 = state_31803;
var statearr_31833_34433 = state_31803__$1;
(statearr_31833_34433[(2)] = inst_31794);

(statearr_31833_34433[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (13))){
var inst_31796 = (state_31803[(2)]);
var state_31803__$1 = (function (){var statearr_31838 = state_31803;
(statearr_31838[(9)] = inst_31796);

return statearr_31838;
})();
var statearr_31839_34441 = state_31803__$1;
(statearr_31839_34441[(2)] = null);

(statearr_31839_34441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (6))){
var inst_31766 = (state_31803[(7)]);
var state_31803__$1 = state_31803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31803__$1,(11),inst_31766);
} else {
if((state_val_31804 === (17))){
var inst_31789 = (state_31803[(2)]);
var state_31803__$1 = state_31803;
if(cljs.core.truth_(inst_31789)){
var statearr_31847_34442 = state_31803__$1;
(statearr_31847_34442[(1)] = (19));

} else {
var statearr_31849_34443 = state_31803__$1;
(statearr_31849_34443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (3))){
var inst_31801 = (state_31803[(2)]);
var state_31803__$1 = state_31803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31803__$1,inst_31801);
} else {
if((state_val_31804 === (12))){
var inst_31778 = (state_31803[(10)]);
var state_31803__$1 = state_31803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31803__$1,(14),inst_31778);
} else {
if((state_val_31804 === (2))){
var state_31803__$1 = state_31803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31803__$1,(4),results);
} else {
if((state_val_31804 === (19))){
var state_31803__$1 = state_31803;
var statearr_31854_34447 = state_31803__$1;
(statearr_31854_34447[(2)] = null);

(statearr_31854_34447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (11))){
var inst_31778 = (state_31803[(2)]);
var state_31803__$1 = (function (){var statearr_31856 = state_31803;
(statearr_31856[(10)] = inst_31778);

return statearr_31856;
})();
var statearr_31860_34455 = state_31803__$1;
(statearr_31860_34455[(2)] = null);

(statearr_31860_34455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (9))){
var state_31803__$1 = state_31803;
var statearr_31861_34456 = state_31803__$1;
(statearr_31861_34456[(2)] = null);

(statearr_31861_34456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (5))){
var state_31803__$1 = state_31803;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31862_34457 = state_31803__$1;
(statearr_31862_34457[(1)] = (8));

} else {
var statearr_31863_34462 = state_31803__$1;
(statearr_31863_34462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (14))){
var inst_31781 = (state_31803[(8)]);
var inst_31783 = (state_31803[(11)]);
var inst_31781__$1 = (state_31803[(2)]);
var inst_31782 = (inst_31781__$1 == null);
var inst_31783__$1 = cljs.core.not(inst_31782);
var state_31803__$1 = (function (){var statearr_31868 = state_31803;
(statearr_31868[(8)] = inst_31781__$1);

(statearr_31868[(11)] = inst_31783__$1);

return statearr_31868;
})();
if(inst_31783__$1){
var statearr_31872_34463 = state_31803__$1;
(statearr_31872_34463[(1)] = (15));

} else {
var statearr_31873_34464 = state_31803__$1;
(statearr_31873_34464[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (16))){
var inst_31783 = (state_31803[(11)]);
var state_31803__$1 = state_31803;
var statearr_31880_34474 = state_31803__$1;
(statearr_31880_34474[(2)] = inst_31783);

(statearr_31880_34474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (10))){
var inst_31775 = (state_31803[(2)]);
var state_31803__$1 = state_31803;
var statearr_31885_34475 = state_31803__$1;
(statearr_31885_34475[(2)] = inst_31775);

(statearr_31885_34475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (18))){
var inst_31786 = (state_31803[(2)]);
var state_31803__$1 = state_31803;
var statearr_31888_34480 = state_31803__$1;
(statearr_31888_34480[(2)] = inst_31786);

(statearr_31888_34480[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (8))){
var inst_31772 = cljs.core.async.close_BANG_(to);
var state_31803__$1 = state_31803;
var statearr_31889_34481 = state_31803__$1;
(statearr_31889_34481[(2)] = inst_31772);

(statearr_31889_34481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0 = (function (){
var statearr_31894 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__);

(statearr_31894[(1)] = (1));

return statearr_31894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1 = (function (state_31803){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_31803);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e31898){var ex__30671__auto__ = e31898;
var statearr_31899_34487 = state_31803;
(statearr_31899_34487[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_31803[(4)]))){
var statearr_31900_34495 = state_31803;
(statearr_31900_34495[(1)] = cljs.core.first((state_31803[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34496 = state_31803;
state_31803 = G__34496;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__ = function(state_31803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1.call(this,state_31803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_31905 = f__30867__auto__();
(statearr_31905[(6)] = c__30866__auto__);

return statearr_31905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));

return c__30866__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31907 = arguments.length;
switch (G__31907) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31917 = arguments.length;
switch (G__31917) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31923 = arguments.length;
switch (G__31923) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30866__auto___34528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_31950){
var state_val_31951 = (state_31950[(1)]);
if((state_val_31951 === (7))){
var inst_31946 = (state_31950[(2)]);
var state_31950__$1 = state_31950;
var statearr_31953_34529 = state_31950__$1;
(statearr_31953_34529[(2)] = inst_31946);

(statearr_31953_34529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (1))){
var state_31950__$1 = state_31950;
var statearr_31954_34535 = state_31950__$1;
(statearr_31954_34535[(2)] = null);

(statearr_31954_34535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (4))){
var inst_31927 = (state_31950[(7)]);
var inst_31927__$1 = (state_31950[(2)]);
var inst_31928 = (inst_31927__$1 == null);
var state_31950__$1 = (function (){var statearr_31955 = state_31950;
(statearr_31955[(7)] = inst_31927__$1);

return statearr_31955;
})();
if(cljs.core.truth_(inst_31928)){
var statearr_31956_34538 = state_31950__$1;
(statearr_31956_34538[(1)] = (5));

} else {
var statearr_31957_34539 = state_31950__$1;
(statearr_31957_34539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (13))){
var state_31950__$1 = state_31950;
var statearr_31958_34540 = state_31950__$1;
(statearr_31958_34540[(2)] = null);

(statearr_31958_34540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (6))){
var inst_31927 = (state_31950[(7)]);
var inst_31933 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31927) : p.call(null,inst_31927));
var state_31950__$1 = state_31950;
if(cljs.core.truth_(inst_31933)){
var statearr_31960_34542 = state_31950__$1;
(statearr_31960_34542[(1)] = (9));

} else {
var statearr_31961_34546 = state_31950__$1;
(statearr_31961_34546[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (3))){
var inst_31948 = (state_31950[(2)]);
var state_31950__$1 = state_31950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31950__$1,inst_31948);
} else {
if((state_val_31951 === (12))){
var state_31950__$1 = state_31950;
var statearr_31962_34555 = state_31950__$1;
(statearr_31962_34555[(2)] = null);

(statearr_31962_34555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (2))){
var state_31950__$1 = state_31950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31950__$1,(4),ch);
} else {
if((state_val_31951 === (11))){
var inst_31927 = (state_31950[(7)]);
var inst_31937 = (state_31950[(2)]);
var state_31950__$1 = state_31950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31950__$1,(8),inst_31937,inst_31927);
} else {
if((state_val_31951 === (9))){
var state_31950__$1 = state_31950;
var statearr_31967_34562 = state_31950__$1;
(statearr_31967_34562[(2)] = tc);

(statearr_31967_34562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (5))){
var inst_31930 = cljs.core.async.close_BANG_(tc);
var inst_31931 = cljs.core.async.close_BANG_(fc);
var state_31950__$1 = (function (){var statearr_31969 = state_31950;
(statearr_31969[(8)] = inst_31930);

return statearr_31969;
})();
var statearr_31970_34569 = state_31950__$1;
(statearr_31970_34569[(2)] = inst_31931);

(statearr_31970_34569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (14))){
var inst_31944 = (state_31950[(2)]);
var state_31950__$1 = state_31950;
var statearr_31971_34570 = state_31950__$1;
(statearr_31971_34570[(2)] = inst_31944);

(statearr_31971_34570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (10))){
var state_31950__$1 = state_31950;
var statearr_31973_34572 = state_31950__$1;
(statearr_31973_34572[(2)] = fc);

(statearr_31973_34572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31951 === (8))){
var inst_31939 = (state_31950[(2)]);
var state_31950__$1 = state_31950;
if(cljs.core.truth_(inst_31939)){
var statearr_31974_34573 = state_31950__$1;
(statearr_31974_34573[(1)] = (12));

} else {
var statearr_31975_34574 = state_31950__$1;
(statearr_31975_34574[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30668__auto__ = null;
var cljs$core$async$state_machine__30668__auto____0 = (function (){
var statearr_31976 = [null,null,null,null,null,null,null,null,null];
(statearr_31976[(0)] = cljs$core$async$state_machine__30668__auto__);

(statearr_31976[(1)] = (1));

return statearr_31976;
});
var cljs$core$async$state_machine__30668__auto____1 = (function (state_31950){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_31950);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e31978){var ex__30671__auto__ = e31978;
var statearr_31979_34575 = state_31950;
(statearr_31979_34575[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_31950[(4)]))){
var statearr_31980_34576 = state_31950;
(statearr_31980_34576[(1)] = cljs.core.first((state_31950[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34577 = state_31950;
state_31950 = G__34577;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$state_machine__30668__auto__ = function(state_31950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30668__auto____1.call(this,state_31950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30668__auto____0;
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30668__auto____1;
return cljs$core$async$state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_31981 = f__30867__auto__();
(statearr_31981[(6)] = c__30866__auto___34528);

return statearr_31981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30866__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_32005){
var state_val_32006 = (state_32005[(1)]);
if((state_val_32006 === (7))){
var inst_32001 = (state_32005[(2)]);
var state_32005__$1 = state_32005;
var statearr_32007_34578 = state_32005__$1;
(statearr_32007_34578[(2)] = inst_32001);

(statearr_32007_34578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (1))){
var inst_31983 = init;
var inst_31984 = inst_31983;
var state_32005__$1 = (function (){var statearr_32008 = state_32005;
(statearr_32008[(7)] = inst_31984);

return statearr_32008;
})();
var statearr_32009_34580 = state_32005__$1;
(statearr_32009_34580[(2)] = null);

(statearr_32009_34580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (4))){
var inst_31987 = (state_32005[(8)]);
var inst_31987__$1 = (state_32005[(2)]);
var inst_31988 = (inst_31987__$1 == null);
var state_32005__$1 = (function (){var statearr_32011 = state_32005;
(statearr_32011[(8)] = inst_31987__$1);

return statearr_32011;
})();
if(cljs.core.truth_(inst_31988)){
var statearr_32012_34581 = state_32005__$1;
(statearr_32012_34581[(1)] = (5));

} else {
var statearr_32013_34582 = state_32005__$1;
(statearr_32013_34582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (6))){
var inst_31984 = (state_32005[(7)]);
var inst_31987 = (state_32005[(8)]);
var inst_31991 = (state_32005[(9)]);
var inst_31991__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31984,inst_31987) : f.call(null,inst_31984,inst_31987));
var inst_31992 = cljs.core.reduced_QMARK_(inst_31991__$1);
var state_32005__$1 = (function (){var statearr_32018 = state_32005;
(statearr_32018[(9)] = inst_31991__$1);

return statearr_32018;
})();
if(inst_31992){
var statearr_32019_34592 = state_32005__$1;
(statearr_32019_34592[(1)] = (8));

} else {
var statearr_32020_34593 = state_32005__$1;
(statearr_32020_34593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (3))){
var inst_32003 = (state_32005[(2)]);
var state_32005__$1 = state_32005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32005__$1,inst_32003);
} else {
if((state_val_32006 === (2))){
var state_32005__$1 = state_32005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32005__$1,(4),ch);
} else {
if((state_val_32006 === (9))){
var inst_31991 = (state_32005[(9)]);
var inst_31984 = inst_31991;
var state_32005__$1 = (function (){var statearr_32021 = state_32005;
(statearr_32021[(7)] = inst_31984);

return statearr_32021;
})();
var statearr_32023_34608 = state_32005__$1;
(statearr_32023_34608[(2)] = null);

(statearr_32023_34608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (5))){
var inst_31984 = (state_32005[(7)]);
var state_32005__$1 = state_32005;
var statearr_32024_34611 = state_32005__$1;
(statearr_32024_34611[(2)] = inst_31984);

(statearr_32024_34611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (10))){
var inst_31999 = (state_32005[(2)]);
var state_32005__$1 = state_32005;
var statearr_32025_34612 = state_32005__$1;
(statearr_32025_34612[(2)] = inst_31999);

(statearr_32025_34612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (8))){
var inst_31991 = (state_32005[(9)]);
var inst_31995 = cljs.core.deref(inst_31991);
var state_32005__$1 = state_32005;
var statearr_32026_34613 = state_32005__$1;
(statearr_32026_34613[(2)] = inst_31995);

(statearr_32026_34613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30668__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30668__auto____0 = (function (){
var statearr_32029 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32029[(0)] = cljs$core$async$reduce_$_state_machine__30668__auto__);

(statearr_32029[(1)] = (1));

return statearr_32029;
});
var cljs$core$async$reduce_$_state_machine__30668__auto____1 = (function (state_32005){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_32005);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e32030){var ex__30671__auto__ = e32030;
var statearr_32031_34614 = state_32005;
(statearr_32031_34614[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_32005[(4)]))){
var statearr_32033_34615 = state_32005;
(statearr_32033_34615[(1)] = cljs.core.first((state_32005[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34616 = state_32005;
state_32005 = G__34616;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30668__auto__ = function(state_32005){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30668__auto____1.call(this,state_32005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30668__auto____0;
cljs$core$async$reduce_$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30668__auto____1;
return cljs$core$async$reduce_$_state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_32034 = f__30867__auto__();
(statearr_32034[(6)] = c__30866__auto__);

return statearr_32034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));

return c__30866__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30866__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_32042){
var state_val_32043 = (state_32042[(1)]);
if((state_val_32043 === (1))){
var inst_32037 = cljs.core.async.reduce(f__$1,init,ch);
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32042__$1,(2),inst_32037);
} else {
if((state_val_32043 === (2))){
var inst_32039 = (state_32042[(2)]);
var inst_32040 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32039) : f__$1.call(null,inst_32039));
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32042__$1,inst_32040);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30668__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30668__auto____0 = (function (){
var statearr_32051 = [null,null,null,null,null,null,null];
(statearr_32051[(0)] = cljs$core$async$transduce_$_state_machine__30668__auto__);

(statearr_32051[(1)] = (1));

return statearr_32051;
});
var cljs$core$async$transduce_$_state_machine__30668__auto____1 = (function (state_32042){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_32042);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e32052){var ex__30671__auto__ = e32052;
var statearr_32053_34619 = state_32042;
(statearr_32053_34619[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_32042[(4)]))){
var statearr_32054_34620 = state_32042;
(statearr_32054_34620[(1)] = cljs.core.first((state_32042[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34621 = state_32042;
state_32042 = G__34621;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30668__auto__ = function(state_32042){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30668__auto____1.call(this,state_32042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30668__auto____0;
cljs$core$async$transduce_$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30668__auto____1;
return cljs$core$async$transduce_$_state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_32055 = f__30867__auto__();
(statearr_32055[(6)] = c__30866__auto__);

return statearr_32055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));

return c__30866__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32059 = arguments.length;
switch (G__32059) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30866__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_32090){
var state_val_32091 = (state_32090[(1)]);
if((state_val_32091 === (7))){
var inst_32069 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
var statearr_32098_34647 = state_32090__$1;
(statearr_32098_34647[(2)] = inst_32069);

(statearr_32098_34647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (1))){
var inst_32063 = cljs.core.seq(coll);
var inst_32064 = inst_32063;
var state_32090__$1 = (function (){var statearr_32099 = state_32090;
(statearr_32099[(7)] = inst_32064);

return statearr_32099;
})();
var statearr_32100_34648 = state_32090__$1;
(statearr_32100_34648[(2)] = null);

(statearr_32100_34648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (4))){
var inst_32064 = (state_32090[(7)]);
var inst_32067 = cljs.core.first(inst_32064);
var state_32090__$1 = state_32090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32090__$1,(7),ch,inst_32067);
} else {
if((state_val_32091 === (13))){
var inst_32083 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
var statearr_32102_34654 = state_32090__$1;
(statearr_32102_34654[(2)] = inst_32083);

(statearr_32102_34654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (6))){
var inst_32072 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
if(cljs.core.truth_(inst_32072)){
var statearr_32103_34655 = state_32090__$1;
(statearr_32103_34655[(1)] = (8));

} else {
var statearr_32104_34656 = state_32090__$1;
(statearr_32104_34656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (3))){
var inst_32087 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32090__$1,inst_32087);
} else {
if((state_val_32091 === (12))){
var state_32090__$1 = state_32090;
var statearr_32105_34661 = state_32090__$1;
(statearr_32105_34661[(2)] = null);

(statearr_32105_34661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (2))){
var inst_32064 = (state_32090[(7)]);
var state_32090__$1 = state_32090;
if(cljs.core.truth_(inst_32064)){
var statearr_32106_34671 = state_32090__$1;
(statearr_32106_34671[(1)] = (4));

} else {
var statearr_32107_34672 = state_32090__$1;
(statearr_32107_34672[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (11))){
var inst_32080 = cljs.core.async.close_BANG_(ch);
var state_32090__$1 = state_32090;
var statearr_32108_34676 = state_32090__$1;
(statearr_32108_34676[(2)] = inst_32080);

(statearr_32108_34676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (9))){
var state_32090__$1 = state_32090;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32109_34677 = state_32090__$1;
(statearr_32109_34677[(1)] = (11));

} else {
var statearr_32110_34678 = state_32090__$1;
(statearr_32110_34678[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (5))){
var inst_32064 = (state_32090[(7)]);
var state_32090__$1 = state_32090;
var statearr_32111_34679 = state_32090__$1;
(statearr_32111_34679[(2)] = inst_32064);

(statearr_32111_34679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (10))){
var inst_32085 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
var statearr_32112_34684 = state_32090__$1;
(statearr_32112_34684[(2)] = inst_32085);

(statearr_32112_34684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (8))){
var inst_32064 = (state_32090[(7)]);
var inst_32075 = cljs.core.next(inst_32064);
var inst_32064__$1 = inst_32075;
var state_32090__$1 = (function (){var statearr_32113 = state_32090;
(statearr_32113[(7)] = inst_32064__$1);

return statearr_32113;
})();
var statearr_32114_34688 = state_32090__$1;
(statearr_32114_34688[(2)] = null);

(statearr_32114_34688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30668__auto__ = null;
var cljs$core$async$state_machine__30668__auto____0 = (function (){
var statearr_32116 = [null,null,null,null,null,null,null,null];
(statearr_32116[(0)] = cljs$core$async$state_machine__30668__auto__);

(statearr_32116[(1)] = (1));

return statearr_32116;
});
var cljs$core$async$state_machine__30668__auto____1 = (function (state_32090){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_32090);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e32117){var ex__30671__auto__ = e32117;
var statearr_32118_34689 = state_32090;
(statearr_32118_34689[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_32090[(4)]))){
var statearr_32119_34696 = state_32090;
(statearr_32119_34696[(1)] = cljs.core.first((state_32090[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34697 = state_32090;
state_32090 = G__34697;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$state_machine__30668__auto__ = function(state_32090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30668__auto____1.call(this,state_32090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30668__auto____0;
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30668__auto____1;
return cljs$core$async$state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_32120 = f__30867__auto__();
(statearr_32120[(6)] = c__30866__auto__);

return statearr_32120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));

return c__30866__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32124 = arguments.length;
switch (G__32124) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34711 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34711(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34716 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34716(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34720 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34720(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34721 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34721(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32157 = (function (ch,cs,meta32158){
this.ch = ch;
this.cs = cs;
this.meta32158 = meta32158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32159,meta32158__$1){
var self__ = this;
var _32159__$1 = this;
return (new cljs.core.async.t_cljs$core$async32157(self__.ch,self__.cs,meta32158__$1));
}));

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32159){
var self__ = this;
var _32159__$1 = this;
return self__.meta32158;
}));

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32158","meta32158",373017174,null)], null);
}));

(cljs.core.async.t_cljs$core$async32157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32157");

(cljs.core.async.t_cljs$core$async32157.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32157.
 */
cljs.core.async.__GT_t_cljs$core$async32157 = (function cljs$core$async$__GT_t_cljs$core$async32157(ch,cs,meta32158){
return (new cljs.core.async.t_cljs$core$async32157(ch,cs,meta32158));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async32157(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30866__auto___34729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_32334){
var state_val_32335 = (state_32334[(1)]);
if((state_val_32335 === (7))){
var inst_32325 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32341_34738 = state_32334__$1;
(statearr_32341_34738[(2)] = inst_32325);

(statearr_32341_34738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (20))){
var inst_32217 = (state_32334[(7)]);
var inst_32232 = cljs.core.first(inst_32217);
var inst_32233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32232,(0),null);
var inst_32234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32232,(1),null);
var state_32334__$1 = (function (){var statearr_32345 = state_32334;
(statearr_32345[(8)] = inst_32233);

return statearr_32345;
})();
if(cljs.core.truth_(inst_32234)){
var statearr_32346_34739 = state_32334__$1;
(statearr_32346_34739[(1)] = (22));

} else {
var statearr_32347_34740 = state_32334__$1;
(statearr_32347_34740[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (27))){
var inst_32267 = (state_32334[(9)]);
var inst_32269 = (state_32334[(10)]);
var inst_32274 = (state_32334[(11)]);
var inst_32180 = (state_32334[(12)]);
var inst_32274__$1 = cljs.core._nth(inst_32267,inst_32269);
var inst_32275 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32274__$1,inst_32180,done);
var state_32334__$1 = (function (){var statearr_32351 = state_32334;
(statearr_32351[(11)] = inst_32274__$1);

return statearr_32351;
})();
if(cljs.core.truth_(inst_32275)){
var statearr_32354_34745 = state_32334__$1;
(statearr_32354_34745[(1)] = (30));

} else {
var statearr_32356_34746 = state_32334__$1;
(statearr_32356_34746[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (1))){
var state_32334__$1 = state_32334;
var statearr_32359_34749 = state_32334__$1;
(statearr_32359_34749[(2)] = null);

(statearr_32359_34749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (24))){
var inst_32217 = (state_32334[(7)]);
var inst_32240 = (state_32334[(2)]);
var inst_32243 = cljs.core.next(inst_32217);
var inst_32193 = inst_32243;
var inst_32194 = null;
var inst_32195 = (0);
var inst_32196 = (0);
var state_32334__$1 = (function (){var statearr_32360 = state_32334;
(statearr_32360[(13)] = inst_32240);

(statearr_32360[(14)] = inst_32193);

(statearr_32360[(15)] = inst_32194);

(statearr_32360[(16)] = inst_32195);

(statearr_32360[(17)] = inst_32196);

return statearr_32360;
})();
var statearr_32362_34751 = state_32334__$1;
(statearr_32362_34751[(2)] = null);

(statearr_32362_34751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (39))){
var state_32334__$1 = state_32334;
var statearr_32368_34752 = state_32334__$1;
(statearr_32368_34752[(2)] = null);

(statearr_32368_34752[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (4))){
var inst_32180 = (state_32334[(12)]);
var inst_32180__$1 = (state_32334[(2)]);
var inst_32182 = (inst_32180__$1 == null);
var state_32334__$1 = (function (){var statearr_32372 = state_32334;
(statearr_32372[(12)] = inst_32180__$1);

return statearr_32372;
})();
if(cljs.core.truth_(inst_32182)){
var statearr_32373_34753 = state_32334__$1;
(statearr_32373_34753[(1)] = (5));

} else {
var statearr_32376_34754 = state_32334__$1;
(statearr_32376_34754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (15))){
var inst_32196 = (state_32334[(17)]);
var inst_32193 = (state_32334[(14)]);
var inst_32194 = (state_32334[(15)]);
var inst_32195 = (state_32334[(16)]);
var inst_32212 = (state_32334[(2)]);
var inst_32213 = (inst_32196 + (1));
var tmp32364 = inst_32195;
var tmp32365 = inst_32193;
var tmp32366 = inst_32194;
var inst_32193__$1 = tmp32365;
var inst_32194__$1 = tmp32366;
var inst_32195__$1 = tmp32364;
var inst_32196__$1 = inst_32213;
var state_32334__$1 = (function (){var statearr_32379 = state_32334;
(statearr_32379[(18)] = inst_32212);

(statearr_32379[(14)] = inst_32193__$1);

(statearr_32379[(15)] = inst_32194__$1);

(statearr_32379[(16)] = inst_32195__$1);

(statearr_32379[(17)] = inst_32196__$1);

return statearr_32379;
})();
var statearr_32382_34758 = state_32334__$1;
(statearr_32382_34758[(2)] = null);

(statearr_32382_34758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (21))){
var inst_32246 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32390_34759 = state_32334__$1;
(statearr_32390_34759[(2)] = inst_32246);

(statearr_32390_34759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (31))){
var inst_32274 = (state_32334[(11)]);
var inst_32279 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32274);
var state_32334__$1 = state_32334;
var statearr_32391_34760 = state_32334__$1;
(statearr_32391_34760[(2)] = inst_32279);

(statearr_32391_34760[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (32))){
var inst_32269 = (state_32334[(10)]);
var inst_32266 = (state_32334[(19)]);
var inst_32267 = (state_32334[(9)]);
var inst_32268 = (state_32334[(20)]);
var inst_32281 = (state_32334[(2)]);
var inst_32282 = (inst_32269 + (1));
var tmp32384 = inst_32266;
var tmp32385 = inst_32267;
var tmp32386 = inst_32268;
var inst_32266__$1 = tmp32384;
var inst_32267__$1 = tmp32385;
var inst_32268__$1 = tmp32386;
var inst_32269__$1 = inst_32282;
var state_32334__$1 = (function (){var statearr_32395 = state_32334;
(statearr_32395[(21)] = inst_32281);

(statearr_32395[(19)] = inst_32266__$1);

(statearr_32395[(9)] = inst_32267__$1);

(statearr_32395[(20)] = inst_32268__$1);

(statearr_32395[(10)] = inst_32269__$1);

return statearr_32395;
})();
var statearr_32398_34761 = state_32334__$1;
(statearr_32398_34761[(2)] = null);

(statearr_32398_34761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (40))){
var inst_32297 = (state_32334[(22)]);
var inst_32302 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32297);
var state_32334__$1 = state_32334;
var statearr_32401_34767 = state_32334__$1;
(statearr_32401_34767[(2)] = inst_32302);

(statearr_32401_34767[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (33))){
var inst_32285 = (state_32334[(23)]);
var inst_32290 = cljs.core.chunked_seq_QMARK_(inst_32285);
var state_32334__$1 = state_32334;
if(inst_32290){
var statearr_32406_34768 = state_32334__$1;
(statearr_32406_34768[(1)] = (36));

} else {
var statearr_32407_34769 = state_32334__$1;
(statearr_32407_34769[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (13))){
var inst_32205 = (state_32334[(24)]);
var inst_32209 = cljs.core.async.close_BANG_(inst_32205);
var state_32334__$1 = state_32334;
var statearr_32408_34770 = state_32334__$1;
(statearr_32408_34770[(2)] = inst_32209);

(statearr_32408_34770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (22))){
var inst_32233 = (state_32334[(8)]);
var inst_32237 = cljs.core.async.close_BANG_(inst_32233);
var state_32334__$1 = state_32334;
var statearr_32410_34771 = state_32334__$1;
(statearr_32410_34771[(2)] = inst_32237);

(statearr_32410_34771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (36))){
var inst_32285 = (state_32334[(23)]);
var inst_32292 = cljs.core.chunk_first(inst_32285);
var inst_32293 = cljs.core.chunk_rest(inst_32285);
var inst_32294 = cljs.core.count(inst_32292);
var inst_32266 = inst_32293;
var inst_32267 = inst_32292;
var inst_32268 = inst_32294;
var inst_32269 = (0);
var state_32334__$1 = (function (){var statearr_32411 = state_32334;
(statearr_32411[(19)] = inst_32266);

(statearr_32411[(9)] = inst_32267);

(statearr_32411[(20)] = inst_32268);

(statearr_32411[(10)] = inst_32269);

return statearr_32411;
})();
var statearr_32412_34779 = state_32334__$1;
(statearr_32412_34779[(2)] = null);

(statearr_32412_34779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (41))){
var inst_32285 = (state_32334[(23)]);
var inst_32304 = (state_32334[(2)]);
var inst_32305 = cljs.core.next(inst_32285);
var inst_32266 = inst_32305;
var inst_32267 = null;
var inst_32268 = (0);
var inst_32269 = (0);
var state_32334__$1 = (function (){var statearr_32414 = state_32334;
(statearr_32414[(25)] = inst_32304);

(statearr_32414[(19)] = inst_32266);

(statearr_32414[(9)] = inst_32267);

(statearr_32414[(20)] = inst_32268);

(statearr_32414[(10)] = inst_32269);

return statearr_32414;
})();
var statearr_32416_34781 = state_32334__$1;
(statearr_32416_34781[(2)] = null);

(statearr_32416_34781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (43))){
var state_32334__$1 = state_32334;
var statearr_32420_34782 = state_32334__$1;
(statearr_32420_34782[(2)] = null);

(statearr_32420_34782[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (29))){
var inst_32313 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32430_34783 = state_32334__$1;
(statearr_32430_34783[(2)] = inst_32313);

(statearr_32430_34783[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (44))){
var inst_32322 = (state_32334[(2)]);
var state_32334__$1 = (function (){var statearr_32432 = state_32334;
(statearr_32432[(26)] = inst_32322);

return statearr_32432;
})();
var statearr_32433_34784 = state_32334__$1;
(statearr_32433_34784[(2)] = null);

(statearr_32433_34784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (6))){
var inst_32257 = (state_32334[(27)]);
var inst_32256 = cljs.core.deref(cs);
var inst_32257__$1 = cljs.core.keys(inst_32256);
var inst_32259 = cljs.core.count(inst_32257__$1);
var inst_32260 = cljs.core.reset_BANG_(dctr,inst_32259);
var inst_32265 = cljs.core.seq(inst_32257__$1);
var inst_32266 = inst_32265;
var inst_32267 = null;
var inst_32268 = (0);
var inst_32269 = (0);
var state_32334__$1 = (function (){var statearr_32440 = state_32334;
(statearr_32440[(27)] = inst_32257__$1);

(statearr_32440[(28)] = inst_32260);

(statearr_32440[(19)] = inst_32266);

(statearr_32440[(9)] = inst_32267);

(statearr_32440[(20)] = inst_32268);

(statearr_32440[(10)] = inst_32269);

return statearr_32440;
})();
var statearr_32445_34787 = state_32334__$1;
(statearr_32445_34787[(2)] = null);

(statearr_32445_34787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (28))){
var inst_32266 = (state_32334[(19)]);
var inst_32285 = (state_32334[(23)]);
var inst_32285__$1 = cljs.core.seq(inst_32266);
var state_32334__$1 = (function (){var statearr_32450 = state_32334;
(statearr_32450[(23)] = inst_32285__$1);

return statearr_32450;
})();
if(inst_32285__$1){
var statearr_32451_34795 = state_32334__$1;
(statearr_32451_34795[(1)] = (33));

} else {
var statearr_32452_34798 = state_32334__$1;
(statearr_32452_34798[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (25))){
var inst_32269 = (state_32334[(10)]);
var inst_32268 = (state_32334[(20)]);
var inst_32271 = (inst_32269 < inst_32268);
var inst_32272 = inst_32271;
var state_32334__$1 = state_32334;
if(cljs.core.truth_(inst_32272)){
var statearr_32453_34799 = state_32334__$1;
(statearr_32453_34799[(1)] = (27));

} else {
var statearr_32454_34800 = state_32334__$1;
(statearr_32454_34800[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (34))){
var state_32334__$1 = state_32334;
var statearr_32456_34801 = state_32334__$1;
(statearr_32456_34801[(2)] = null);

(statearr_32456_34801[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (17))){
var state_32334__$1 = state_32334;
var statearr_32460_34802 = state_32334__$1;
(statearr_32460_34802[(2)] = null);

(statearr_32460_34802[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (3))){
var inst_32327 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32334__$1,inst_32327);
} else {
if((state_val_32335 === (12))){
var inst_32251 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32461_34807 = state_32334__$1;
(statearr_32461_34807[(2)] = inst_32251);

(statearr_32461_34807[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (2))){
var state_32334__$1 = state_32334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32334__$1,(4),ch);
} else {
if((state_val_32335 === (23))){
var state_32334__$1 = state_32334;
var statearr_32462_34809 = state_32334__$1;
(statearr_32462_34809[(2)] = null);

(statearr_32462_34809[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (35))){
var inst_32311 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32463_34811 = state_32334__$1;
(statearr_32463_34811[(2)] = inst_32311);

(statearr_32463_34811[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (19))){
var inst_32217 = (state_32334[(7)]);
var inst_32222 = cljs.core.chunk_first(inst_32217);
var inst_32224 = cljs.core.chunk_rest(inst_32217);
var inst_32226 = cljs.core.count(inst_32222);
var inst_32193 = inst_32224;
var inst_32194 = inst_32222;
var inst_32195 = inst_32226;
var inst_32196 = (0);
var state_32334__$1 = (function (){var statearr_32464 = state_32334;
(statearr_32464[(14)] = inst_32193);

(statearr_32464[(15)] = inst_32194);

(statearr_32464[(16)] = inst_32195);

(statearr_32464[(17)] = inst_32196);

return statearr_32464;
})();
var statearr_32465_34812 = state_32334__$1;
(statearr_32465_34812[(2)] = null);

(statearr_32465_34812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (11))){
var inst_32193 = (state_32334[(14)]);
var inst_32217 = (state_32334[(7)]);
var inst_32217__$1 = cljs.core.seq(inst_32193);
var state_32334__$1 = (function (){var statearr_32466 = state_32334;
(statearr_32466[(7)] = inst_32217__$1);

return statearr_32466;
})();
if(inst_32217__$1){
var statearr_32468_34813 = state_32334__$1;
(statearr_32468_34813[(1)] = (16));

} else {
var statearr_32470_34814 = state_32334__$1;
(statearr_32470_34814[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (9))){
var inst_32253 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32471_34817 = state_32334__$1;
(statearr_32471_34817[(2)] = inst_32253);

(statearr_32471_34817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (5))){
var inst_32188 = cljs.core.deref(cs);
var inst_32189 = cljs.core.seq(inst_32188);
var inst_32193 = inst_32189;
var inst_32194 = null;
var inst_32195 = (0);
var inst_32196 = (0);
var state_32334__$1 = (function (){var statearr_32472 = state_32334;
(statearr_32472[(14)] = inst_32193);

(statearr_32472[(15)] = inst_32194);

(statearr_32472[(16)] = inst_32195);

(statearr_32472[(17)] = inst_32196);

return statearr_32472;
})();
var statearr_32473_34818 = state_32334__$1;
(statearr_32473_34818[(2)] = null);

(statearr_32473_34818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (14))){
var state_32334__$1 = state_32334;
var statearr_32474_34823 = state_32334__$1;
(statearr_32474_34823[(2)] = null);

(statearr_32474_34823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (45))){
var inst_32319 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32475_34824 = state_32334__$1;
(statearr_32475_34824[(2)] = inst_32319);

(statearr_32475_34824[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (26))){
var inst_32257 = (state_32334[(27)]);
var inst_32315 = (state_32334[(2)]);
var inst_32316 = cljs.core.seq(inst_32257);
var state_32334__$1 = (function (){var statearr_32476 = state_32334;
(statearr_32476[(29)] = inst_32315);

return statearr_32476;
})();
if(inst_32316){
var statearr_32477_34825 = state_32334__$1;
(statearr_32477_34825[(1)] = (42));

} else {
var statearr_32478_34826 = state_32334__$1;
(statearr_32478_34826[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (16))){
var inst_32217 = (state_32334[(7)]);
var inst_32220 = cljs.core.chunked_seq_QMARK_(inst_32217);
var state_32334__$1 = state_32334;
if(inst_32220){
var statearr_32480_34827 = state_32334__$1;
(statearr_32480_34827[(1)] = (19));

} else {
var statearr_32481_34828 = state_32334__$1;
(statearr_32481_34828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (38))){
var inst_32308 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32482_34834 = state_32334__$1;
(statearr_32482_34834[(2)] = inst_32308);

(statearr_32482_34834[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (30))){
var state_32334__$1 = state_32334;
var statearr_32485_34835 = state_32334__$1;
(statearr_32485_34835[(2)] = null);

(statearr_32485_34835[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (10))){
var inst_32194 = (state_32334[(15)]);
var inst_32196 = (state_32334[(17)]);
var inst_32204 = cljs.core._nth(inst_32194,inst_32196);
var inst_32205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32204,(0),null);
var inst_32206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32204,(1),null);
var state_32334__$1 = (function (){var statearr_32487 = state_32334;
(statearr_32487[(24)] = inst_32205);

return statearr_32487;
})();
if(cljs.core.truth_(inst_32206)){
var statearr_32488_34839 = state_32334__$1;
(statearr_32488_34839[(1)] = (13));

} else {
var statearr_32489_34840 = state_32334__$1;
(statearr_32489_34840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (18))){
var inst_32249 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32490_34841 = state_32334__$1;
(statearr_32490_34841[(2)] = inst_32249);

(statearr_32490_34841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (42))){
var state_32334__$1 = state_32334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32334__$1,(45),dchan);
} else {
if((state_val_32335 === (37))){
var inst_32285 = (state_32334[(23)]);
var inst_32297 = (state_32334[(22)]);
var inst_32180 = (state_32334[(12)]);
var inst_32297__$1 = cljs.core.first(inst_32285);
var inst_32298 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32297__$1,inst_32180,done);
var state_32334__$1 = (function (){var statearr_32491 = state_32334;
(statearr_32491[(22)] = inst_32297__$1);

return statearr_32491;
})();
if(cljs.core.truth_(inst_32298)){
var statearr_32492_34845 = state_32334__$1;
(statearr_32492_34845[(1)] = (39));

} else {
var statearr_32493_34846 = state_32334__$1;
(statearr_32493_34846[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (8))){
var inst_32196 = (state_32334[(17)]);
var inst_32195 = (state_32334[(16)]);
var inst_32198 = (inst_32196 < inst_32195);
var inst_32199 = inst_32198;
var state_32334__$1 = state_32334;
if(cljs.core.truth_(inst_32199)){
var statearr_32494_34847 = state_32334__$1;
(statearr_32494_34847[(1)] = (10));

} else {
var statearr_32495_34849 = state_32334__$1;
(statearr_32495_34849[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30668__auto__ = null;
var cljs$core$async$mult_$_state_machine__30668__auto____0 = (function (){
var statearr_32498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32498[(0)] = cljs$core$async$mult_$_state_machine__30668__auto__);

(statearr_32498[(1)] = (1));

return statearr_32498;
});
var cljs$core$async$mult_$_state_machine__30668__auto____1 = (function (state_32334){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_32334);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e32499){var ex__30671__auto__ = e32499;
var statearr_32501_34860 = state_32334;
(statearr_32501_34860[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_32334[(4)]))){
var statearr_32503_34864 = state_32334;
(statearr_32503_34864[(1)] = cljs.core.first((state_32334[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34872 = state_32334;
state_32334 = G__34872;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30668__auto__ = function(state_32334){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30668__auto____1.call(this,state_32334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30668__auto____0;
cljs$core$async$mult_$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30668__auto____1;
return cljs$core$async$mult_$_state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_32510 = f__30867__auto__();
(statearr_32510[(6)] = c__30866__auto___34729);

return statearr_32510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32512 = arguments.length;
switch (G__32512) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34881 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34881(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34883 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34883(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34884 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34884(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34889 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34889(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34890 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34890(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34893 = arguments.length;
var i__5750__auto___34894 = (0);
while(true){
if((i__5750__auto___34894 < len__5749__auto___34893)){
args__5755__auto__.push((arguments[i__5750__auto___34894]));

var G__34895 = (i__5750__auto___34894 + (1));
i__5750__auto___34894 = G__34895;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32675){
var map__32677 = p__32675;
var map__32677__$1 = cljs.core.__destructure_map(map__32677);
var opts = map__32677__$1;
var statearr_32678_34897 = state;
(statearr_32678_34897[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32688_34898 = state;
(statearr_32688_34898[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_32690_34899 = state;
(statearr_32690_34899[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32662){
var G__32663 = cljs.core.first(seq32662);
var seq32662__$1 = cljs.core.next(seq32662);
var G__32664 = cljs.core.first(seq32662__$1);
var seq32662__$2 = cljs.core.next(seq32662__$1);
var G__32665 = cljs.core.first(seq32662__$2);
var seq32662__$3 = cljs.core.next(seq32662__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32663,G__32664,G__32665,seq32662__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32716 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32717){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32717 = meta32717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32718,meta32717__$1){
var self__ = this;
var _32718__$1 = this;
return (new cljs.core.async.t_cljs$core$async32716(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32717__$1));
}));

(cljs.core.async.t_cljs$core$async32716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32718){
var self__ = this;
var _32718__$1 = this;
return self__.meta32717;
}));

(cljs.core.async.t_cljs$core$async32716.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32716.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32716.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32716.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32716.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32716.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32716.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32717","meta32717",-1343833990,null)], null);
}));

(cljs.core.async.t_cljs$core$async32716.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32716");

(cljs.core.async.t_cljs$core$async32716.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32716");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32716.
 */
cljs.core.async.__GT_t_cljs$core$async32716 = (function cljs$core$async$__GT_t_cljs$core$async32716(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32717){
return (new cljs.core.async.t_cljs$core$async32716(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32717));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async32716(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__30866__auto___34921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_32817){
var state_val_32818 = (state_32817[(1)]);
if((state_val_32818 === (7))){
var inst_32771 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
if(cljs.core.truth_(inst_32771)){
var statearr_32826_34937 = state_32817__$1;
(statearr_32826_34937[(1)] = (8));

} else {
var statearr_32827_34938 = state_32817__$1;
(statearr_32827_34938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (20))){
var inst_32762 = (state_32817[(7)]);
var state_32817__$1 = state_32817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32817__$1,(23),out,inst_32762);
} else {
if((state_val_32818 === (1))){
var inst_32744 = calc_state();
var inst_32745 = cljs.core.__destructure_map(inst_32744);
var inst_32746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32745,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32745,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32745,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32749 = inst_32744;
var state_32817__$1 = (function (){var statearr_32834 = state_32817;
(statearr_32834[(8)] = inst_32746);

(statearr_32834[(9)] = inst_32747);

(statearr_32834[(10)] = inst_32748);

(statearr_32834[(11)] = inst_32749);

return statearr_32834;
})();
var statearr_32836_34941 = state_32817__$1;
(statearr_32836_34941[(2)] = null);

(statearr_32836_34941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (24))){
var inst_32752 = (state_32817[(12)]);
var inst_32749 = inst_32752;
var state_32817__$1 = (function (){var statearr_32837 = state_32817;
(statearr_32837[(11)] = inst_32749);

return statearr_32837;
})();
var statearr_32838_34942 = state_32817__$1;
(statearr_32838_34942[(2)] = null);

(statearr_32838_34942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (4))){
var inst_32762 = (state_32817[(7)]);
var inst_32764 = (state_32817[(13)]);
var inst_32761 = (state_32817[(2)]);
var inst_32762__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32761,(0),null);
var inst_32763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32761,(1),null);
var inst_32764__$1 = (inst_32762__$1 == null);
var state_32817__$1 = (function (){var statearr_32840 = state_32817;
(statearr_32840[(7)] = inst_32762__$1);

(statearr_32840[(14)] = inst_32763);

(statearr_32840[(13)] = inst_32764__$1);

return statearr_32840;
})();
if(cljs.core.truth_(inst_32764__$1)){
var statearr_32843_34947 = state_32817__$1;
(statearr_32843_34947[(1)] = (5));

} else {
var statearr_32846_34948 = state_32817__$1;
(statearr_32846_34948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (15))){
var inst_32753 = (state_32817[(15)]);
var inst_32787 = (state_32817[(16)]);
var inst_32787__$1 = cljs.core.empty_QMARK_(inst_32753);
var state_32817__$1 = (function (){var statearr_32852 = state_32817;
(statearr_32852[(16)] = inst_32787__$1);

return statearr_32852;
})();
if(inst_32787__$1){
var statearr_32853_34950 = state_32817__$1;
(statearr_32853_34950[(1)] = (17));

} else {
var statearr_32854_34951 = state_32817__$1;
(statearr_32854_34951[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (21))){
var inst_32752 = (state_32817[(12)]);
var inst_32749 = inst_32752;
var state_32817__$1 = (function (){var statearr_32857 = state_32817;
(statearr_32857[(11)] = inst_32749);

return statearr_32857;
})();
var statearr_32858_34952 = state_32817__$1;
(statearr_32858_34952[(2)] = null);

(statearr_32858_34952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (13))){
var inst_32778 = (state_32817[(2)]);
var inst_32779 = calc_state();
var inst_32749 = inst_32779;
var state_32817__$1 = (function (){var statearr_32859 = state_32817;
(statearr_32859[(17)] = inst_32778);

(statearr_32859[(11)] = inst_32749);

return statearr_32859;
})();
var statearr_32860_34953 = state_32817__$1;
(statearr_32860_34953[(2)] = null);

(statearr_32860_34953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (22))){
var inst_32807 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32863_34954 = state_32817__$1;
(statearr_32863_34954[(2)] = inst_32807);

(statearr_32863_34954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (6))){
var inst_32763 = (state_32817[(14)]);
var inst_32769 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32763,change);
var state_32817__$1 = state_32817;
var statearr_32866_34955 = state_32817__$1;
(statearr_32866_34955[(2)] = inst_32769);

(statearr_32866_34955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (25))){
var state_32817__$1 = state_32817;
var statearr_32867_34956 = state_32817__$1;
(statearr_32867_34956[(2)] = null);

(statearr_32867_34956[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (17))){
var inst_32755 = (state_32817[(18)]);
var inst_32763 = (state_32817[(14)]);
var inst_32789 = (inst_32755.cljs$core$IFn$_invoke$arity$1 ? inst_32755.cljs$core$IFn$_invoke$arity$1(inst_32763) : inst_32755.call(null,inst_32763));
var inst_32790 = cljs.core.not(inst_32789);
var state_32817__$1 = state_32817;
var statearr_32875_34957 = state_32817__$1;
(statearr_32875_34957[(2)] = inst_32790);

(statearr_32875_34957[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (3))){
var inst_32811 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32817__$1,inst_32811);
} else {
if((state_val_32818 === (12))){
var state_32817__$1 = state_32817;
var statearr_32877_34958 = state_32817__$1;
(statearr_32877_34958[(2)] = null);

(statearr_32877_34958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (2))){
var inst_32749 = (state_32817[(11)]);
var inst_32752 = (state_32817[(12)]);
var inst_32752__$1 = cljs.core.__destructure_map(inst_32749);
var inst_32753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32752__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32752__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32752__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32817__$1 = (function (){var statearr_32878 = state_32817;
(statearr_32878[(12)] = inst_32752__$1);

(statearr_32878[(15)] = inst_32753);

(statearr_32878[(18)] = inst_32755);

return statearr_32878;
})();
return cljs.core.async.ioc_alts_BANG_(state_32817__$1,(4),inst_32756);
} else {
if((state_val_32818 === (23))){
var inst_32798 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
if(cljs.core.truth_(inst_32798)){
var statearr_32879_34963 = state_32817__$1;
(statearr_32879_34963[(1)] = (24));

} else {
var statearr_32880_34964 = state_32817__$1;
(statearr_32880_34964[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (19))){
var inst_32793 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32882_34965 = state_32817__$1;
(statearr_32882_34965[(2)] = inst_32793);

(statearr_32882_34965[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (11))){
var inst_32763 = (state_32817[(14)]);
var inst_32775 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32763);
var state_32817__$1 = state_32817;
var statearr_32885_34970 = state_32817__$1;
(statearr_32885_34970[(2)] = inst_32775);

(statearr_32885_34970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (9))){
var inst_32753 = (state_32817[(15)]);
var inst_32763 = (state_32817[(14)]);
var inst_32782 = (state_32817[(19)]);
var inst_32782__$1 = (inst_32753.cljs$core$IFn$_invoke$arity$1 ? inst_32753.cljs$core$IFn$_invoke$arity$1(inst_32763) : inst_32753.call(null,inst_32763));
var state_32817__$1 = (function (){var statearr_32886 = state_32817;
(statearr_32886[(19)] = inst_32782__$1);

return statearr_32886;
})();
if(cljs.core.truth_(inst_32782__$1)){
var statearr_32888_34983 = state_32817__$1;
(statearr_32888_34983[(1)] = (14));

} else {
var statearr_32889_34984 = state_32817__$1;
(statearr_32889_34984[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (5))){
var inst_32764 = (state_32817[(13)]);
var state_32817__$1 = state_32817;
var statearr_32892_34985 = state_32817__$1;
(statearr_32892_34985[(2)] = inst_32764);

(statearr_32892_34985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (14))){
var inst_32782 = (state_32817[(19)]);
var state_32817__$1 = state_32817;
var statearr_32896_34987 = state_32817__$1;
(statearr_32896_34987[(2)] = inst_32782);

(statearr_32896_34987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (26))){
var inst_32803 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32897_34989 = state_32817__$1;
(statearr_32897_34989[(2)] = inst_32803);

(statearr_32897_34989[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (16))){
var inst_32795 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
if(cljs.core.truth_(inst_32795)){
var statearr_32901_34990 = state_32817__$1;
(statearr_32901_34990[(1)] = (20));

} else {
var statearr_32902_34992 = state_32817__$1;
(statearr_32902_34992[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (10))){
var inst_32809 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32903_34994 = state_32817__$1;
(statearr_32903_34994[(2)] = inst_32809);

(statearr_32903_34994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (18))){
var inst_32787 = (state_32817[(16)]);
var state_32817__$1 = state_32817;
var statearr_32904_34995 = state_32817__$1;
(statearr_32904_34995[(2)] = inst_32787);

(statearr_32904_34995[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (8))){
var inst_32762 = (state_32817[(7)]);
var inst_32773 = (inst_32762 == null);
var state_32817__$1 = state_32817;
if(cljs.core.truth_(inst_32773)){
var statearr_32906_34996 = state_32817__$1;
(statearr_32906_34996[(1)] = (11));

} else {
var statearr_32907_34997 = state_32817__$1;
(statearr_32907_34997[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30668__auto__ = null;
var cljs$core$async$mix_$_state_machine__30668__auto____0 = (function (){
var statearr_32909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32909[(0)] = cljs$core$async$mix_$_state_machine__30668__auto__);

(statearr_32909[(1)] = (1));

return statearr_32909;
});
var cljs$core$async$mix_$_state_machine__30668__auto____1 = (function (state_32817){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_32817);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e32912){var ex__30671__auto__ = e32912;
var statearr_32913_35000 = state_32817;
(statearr_32913_35000[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_32817[(4)]))){
var statearr_32916_35002 = state_32817;
(statearr_32916_35002[(1)] = cljs.core.first((state_32817[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35003 = state_32817;
state_32817 = G__35003;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30668__auto__ = function(state_32817){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30668__auto____1.call(this,state_32817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30668__auto____0;
cljs$core$async$mix_$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30668__auto____1;
return cljs$core$async$mix_$_state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_32921 = f__30867__auto__();
(statearr_32921[(6)] = c__30866__auto___34921);

return statearr_32921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35005 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35005(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35006 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35006(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35009 = (function() {
var G__35010 = null;
var G__35010__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35010__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35010 = function(p,v){
switch(arguments.length){
case 1:
return G__35010__1.call(this,p);
case 2:
return G__35010__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35010.cljs$core$IFn$_invoke$arity$1 = G__35010__1;
G__35010.cljs$core$IFn$_invoke$arity$2 = G__35010__2;
return G__35010;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32946 = arguments.length;
switch (G__32946) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35009(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35009(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32982 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32983){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32983 = meta32983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32984,meta32983__$1){
var self__ = this;
var _32984__$1 = this;
return (new cljs.core.async.t_cljs$core$async32982(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32983__$1));
}));

(cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32984){
var self__ = this;
var _32984__$1 = this;
return self__.meta32983;
}));

(cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32983","meta32983",337754917,null)], null);
}));

(cljs.core.async.t_cljs$core$async32982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32982");

(cljs.core.async.t_cljs$core$async32982.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32982.
 */
cljs.core.async.__GT_t_cljs$core$async32982 = (function cljs$core$async$__GT_t_cljs$core$async32982(ch,topic_fn,buf_fn,mults,ensure_mult,meta32983){
return (new cljs.core.async.t_cljs$core$async32982(ch,topic_fn,buf_fn,mults,ensure_mult,meta32983));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32959 = arguments.length;
switch (G__32959) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32952_SHARP_){
if(cljs.core.truth_((p1__32952_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32952_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32952_SHARP_.call(null,topic)))){
return p1__32952_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32952_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async32982(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__30866__auto___35041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_33111){
var state_val_33112 = (state_33111[(1)]);
if((state_val_33112 === (7))){
var inst_33106 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33118_35048 = state_33111__$1;
(statearr_33118_35048[(2)] = inst_33106);

(statearr_33118_35048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (20))){
var state_33111__$1 = state_33111;
var statearr_33120_35049 = state_33111__$1;
(statearr_33120_35049[(2)] = null);

(statearr_33120_35049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (1))){
var state_33111__$1 = state_33111;
var statearr_33122_35050 = state_33111__$1;
(statearr_33122_35050[(2)] = null);

(statearr_33122_35050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (24))){
var inst_33086 = (state_33111[(7)]);
var inst_33098 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33086);
var state_33111__$1 = state_33111;
var statearr_33127_35051 = state_33111__$1;
(statearr_33127_35051[(2)] = inst_33098);

(statearr_33127_35051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (4))){
var inst_33029 = (state_33111[(8)]);
var inst_33029__$1 = (state_33111[(2)]);
var inst_33030 = (inst_33029__$1 == null);
var state_33111__$1 = (function (){var statearr_33128 = state_33111;
(statearr_33128[(8)] = inst_33029__$1);

return statearr_33128;
})();
if(cljs.core.truth_(inst_33030)){
var statearr_33129_35052 = state_33111__$1;
(statearr_33129_35052[(1)] = (5));

} else {
var statearr_33130_35053 = state_33111__$1;
(statearr_33130_35053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (15))){
var inst_33076 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33135_35055 = state_33111__$1;
(statearr_33135_35055[(2)] = inst_33076);

(statearr_33135_35055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (21))){
var inst_33103 = (state_33111[(2)]);
var state_33111__$1 = (function (){var statearr_33137 = state_33111;
(statearr_33137[(9)] = inst_33103);

return statearr_33137;
})();
var statearr_33138_35056 = state_33111__$1;
(statearr_33138_35056[(2)] = null);

(statearr_33138_35056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (13))){
var inst_33057 = (state_33111[(10)]);
var inst_33060 = cljs.core.chunked_seq_QMARK_(inst_33057);
var state_33111__$1 = state_33111;
if(inst_33060){
var statearr_33140_35059 = state_33111__$1;
(statearr_33140_35059[(1)] = (16));

} else {
var statearr_33141_35061 = state_33111__$1;
(statearr_33141_35061[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (22))){
var inst_33092 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
if(cljs.core.truth_(inst_33092)){
var statearr_33142_35067 = state_33111__$1;
(statearr_33142_35067[(1)] = (23));

} else {
var statearr_33143_35068 = state_33111__$1;
(statearr_33143_35068[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (6))){
var inst_33029 = (state_33111[(8)]);
var inst_33086 = (state_33111[(7)]);
var inst_33088 = (state_33111[(11)]);
var inst_33086__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33029) : topic_fn.call(null,inst_33029));
var inst_33087 = cljs.core.deref(mults);
var inst_33088__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33087,inst_33086__$1);
var state_33111__$1 = (function (){var statearr_33144 = state_33111;
(statearr_33144[(7)] = inst_33086__$1);

(statearr_33144[(11)] = inst_33088__$1);

return statearr_33144;
})();
if(cljs.core.truth_(inst_33088__$1)){
var statearr_33145_35069 = state_33111__$1;
(statearr_33145_35069[(1)] = (19));

} else {
var statearr_33146_35070 = state_33111__$1;
(statearr_33146_35070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (25))){
var inst_33100 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33151_35073 = state_33111__$1;
(statearr_33151_35073[(2)] = inst_33100);

(statearr_33151_35073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (17))){
var inst_33057 = (state_33111[(10)]);
var inst_33067 = cljs.core.first(inst_33057);
var inst_33068 = cljs.core.async.muxch_STAR_(inst_33067);
var inst_33069 = cljs.core.async.close_BANG_(inst_33068);
var inst_33070 = cljs.core.next(inst_33057);
var inst_33041 = inst_33070;
var inst_33042 = null;
var inst_33043 = (0);
var inst_33044 = (0);
var state_33111__$1 = (function (){var statearr_33157 = state_33111;
(statearr_33157[(12)] = inst_33069);

(statearr_33157[(13)] = inst_33041);

(statearr_33157[(14)] = inst_33042);

(statearr_33157[(15)] = inst_33043);

(statearr_33157[(16)] = inst_33044);

return statearr_33157;
})();
var statearr_33158_35077 = state_33111__$1;
(statearr_33158_35077[(2)] = null);

(statearr_33158_35077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (3))){
var inst_33108 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33111__$1,inst_33108);
} else {
if((state_val_33112 === (12))){
var inst_33078 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33163_35081 = state_33111__$1;
(statearr_33163_35081[(2)] = inst_33078);

(statearr_33163_35081[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (2))){
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33111__$1,(4),ch);
} else {
if((state_val_33112 === (23))){
var state_33111__$1 = state_33111;
var statearr_33164_35082 = state_33111__$1;
(statearr_33164_35082[(2)] = null);

(statearr_33164_35082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (19))){
var inst_33088 = (state_33111[(11)]);
var inst_33029 = (state_33111[(8)]);
var inst_33090 = cljs.core.async.muxch_STAR_(inst_33088);
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33111__$1,(22),inst_33090,inst_33029);
} else {
if((state_val_33112 === (11))){
var inst_33041 = (state_33111[(13)]);
var inst_33057 = (state_33111[(10)]);
var inst_33057__$1 = cljs.core.seq(inst_33041);
var state_33111__$1 = (function (){var statearr_33169 = state_33111;
(statearr_33169[(10)] = inst_33057__$1);

return statearr_33169;
})();
if(inst_33057__$1){
var statearr_33170_35088 = state_33111__$1;
(statearr_33170_35088[(1)] = (13));

} else {
var statearr_33171_35089 = state_33111__$1;
(statearr_33171_35089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (9))){
var inst_33080 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33175_35090 = state_33111__$1;
(statearr_33175_35090[(2)] = inst_33080);

(statearr_33175_35090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (5))){
var inst_33038 = cljs.core.deref(mults);
var inst_33039 = cljs.core.vals(inst_33038);
var inst_33040 = cljs.core.seq(inst_33039);
var inst_33041 = inst_33040;
var inst_33042 = null;
var inst_33043 = (0);
var inst_33044 = (0);
var state_33111__$1 = (function (){var statearr_33178 = state_33111;
(statearr_33178[(13)] = inst_33041);

(statearr_33178[(14)] = inst_33042);

(statearr_33178[(15)] = inst_33043);

(statearr_33178[(16)] = inst_33044);

return statearr_33178;
})();
var statearr_33179_35091 = state_33111__$1;
(statearr_33179_35091[(2)] = null);

(statearr_33179_35091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (14))){
var state_33111__$1 = state_33111;
var statearr_33183_35092 = state_33111__$1;
(statearr_33183_35092[(2)] = null);

(statearr_33183_35092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (16))){
var inst_33057 = (state_33111[(10)]);
var inst_33062 = cljs.core.chunk_first(inst_33057);
var inst_33063 = cljs.core.chunk_rest(inst_33057);
var inst_33064 = cljs.core.count(inst_33062);
var inst_33041 = inst_33063;
var inst_33042 = inst_33062;
var inst_33043 = inst_33064;
var inst_33044 = (0);
var state_33111__$1 = (function (){var statearr_33186 = state_33111;
(statearr_33186[(13)] = inst_33041);

(statearr_33186[(14)] = inst_33042);

(statearr_33186[(15)] = inst_33043);

(statearr_33186[(16)] = inst_33044);

return statearr_33186;
})();
var statearr_33187_35094 = state_33111__$1;
(statearr_33187_35094[(2)] = null);

(statearr_33187_35094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (10))){
var inst_33042 = (state_33111[(14)]);
var inst_33044 = (state_33111[(16)]);
var inst_33041 = (state_33111[(13)]);
var inst_33043 = (state_33111[(15)]);
var inst_33049 = cljs.core._nth(inst_33042,inst_33044);
var inst_33050 = cljs.core.async.muxch_STAR_(inst_33049);
var inst_33051 = cljs.core.async.close_BANG_(inst_33050);
var inst_33053 = (inst_33044 + (1));
var tmp33180 = inst_33042;
var tmp33181 = inst_33041;
var tmp33182 = inst_33043;
var inst_33041__$1 = tmp33181;
var inst_33042__$1 = tmp33180;
var inst_33043__$1 = tmp33182;
var inst_33044__$1 = inst_33053;
var state_33111__$1 = (function (){var statearr_33191 = state_33111;
(statearr_33191[(17)] = inst_33051);

(statearr_33191[(13)] = inst_33041__$1);

(statearr_33191[(14)] = inst_33042__$1);

(statearr_33191[(15)] = inst_33043__$1);

(statearr_33191[(16)] = inst_33044__$1);

return statearr_33191;
})();
var statearr_33196_35095 = state_33111__$1;
(statearr_33196_35095[(2)] = null);

(statearr_33196_35095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (18))){
var inst_33073 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33200_35096 = state_33111__$1;
(statearr_33200_35096[(2)] = inst_33073);

(statearr_33200_35096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (8))){
var inst_33044 = (state_33111[(16)]);
var inst_33043 = (state_33111[(15)]);
var inst_33046 = (inst_33044 < inst_33043);
var inst_33047 = inst_33046;
var state_33111__$1 = state_33111;
if(cljs.core.truth_(inst_33047)){
var statearr_33202_35097 = state_33111__$1;
(statearr_33202_35097[(1)] = (10));

} else {
var statearr_33203_35098 = state_33111__$1;
(statearr_33203_35098[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30668__auto__ = null;
var cljs$core$async$state_machine__30668__auto____0 = (function (){
var statearr_33207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33207[(0)] = cljs$core$async$state_machine__30668__auto__);

(statearr_33207[(1)] = (1));

return statearr_33207;
});
var cljs$core$async$state_machine__30668__auto____1 = (function (state_33111){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_33111);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e33209){var ex__30671__auto__ = e33209;
var statearr_33210_35099 = state_33111;
(statearr_33210_35099[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_33111[(4)]))){
var statearr_33211_35100 = state_33111;
(statearr_33211_35100[(1)] = cljs.core.first((state_33111[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35101 = state_33111;
state_33111 = G__35101;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$state_machine__30668__auto__ = function(state_33111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30668__auto____1.call(this,state_33111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30668__auto____0;
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30668__auto____1;
return cljs$core$async$state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_33216 = f__30867__auto__();
(statearr_33216[(6)] = c__30866__auto___35041);

return statearr_33216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33222 = arguments.length;
switch (G__33222) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33229 = arguments.length;
switch (G__33229) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33233 = arguments.length;
switch (G__33233) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__30866__auto___35113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_33283){
var state_val_33284 = (state_33283[(1)]);
if((state_val_33284 === (7))){
var state_33283__$1 = state_33283;
var statearr_33286_35114 = state_33283__$1;
(statearr_33286_35114[(2)] = null);

(statearr_33286_35114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (1))){
var state_33283__$1 = state_33283;
var statearr_33290_35115 = state_33283__$1;
(statearr_33290_35115[(2)] = null);

(statearr_33290_35115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (4))){
var inst_33241 = (state_33283[(7)]);
var inst_33240 = (state_33283[(8)]);
var inst_33243 = (inst_33241 < inst_33240);
var state_33283__$1 = state_33283;
if(cljs.core.truth_(inst_33243)){
var statearr_33291_35119 = state_33283__$1;
(statearr_33291_35119[(1)] = (6));

} else {
var statearr_33292_35120 = state_33283__$1;
(statearr_33292_35120[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (15))){
var inst_33267 = (state_33283[(9)]);
var inst_33274 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33267);
var state_33283__$1 = state_33283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33283__$1,(17),out,inst_33274);
} else {
if((state_val_33284 === (13))){
var inst_33267 = (state_33283[(9)]);
var inst_33267__$1 = (state_33283[(2)]);
var inst_33268 = cljs.core.some(cljs.core.nil_QMARK_,inst_33267__$1);
var state_33283__$1 = (function (){var statearr_33299 = state_33283;
(statearr_33299[(9)] = inst_33267__$1);

return statearr_33299;
})();
if(cljs.core.truth_(inst_33268)){
var statearr_33300_35122 = state_33283__$1;
(statearr_33300_35122[(1)] = (14));

} else {
var statearr_33301_35123 = state_33283__$1;
(statearr_33301_35123[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (6))){
var state_33283__$1 = state_33283;
var statearr_33302_35124 = state_33283__$1;
(statearr_33302_35124[(2)] = null);

(statearr_33302_35124[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (17))){
var inst_33276 = (state_33283[(2)]);
var state_33283__$1 = (function (){var statearr_33307 = state_33283;
(statearr_33307[(10)] = inst_33276);

return statearr_33307;
})();
var statearr_33308_35125 = state_33283__$1;
(statearr_33308_35125[(2)] = null);

(statearr_33308_35125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (3))){
var inst_33281 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33283__$1,inst_33281);
} else {
if((state_val_33284 === (12))){
var _ = (function (){var statearr_33312 = state_33283;
(statearr_33312[(4)] = cljs.core.rest((state_33283[(4)])));

return statearr_33312;
})();
var state_33283__$1 = state_33283;
var ex33305 = (state_33283__$1[(2)]);
var statearr_33313_35133 = state_33283__$1;
(statearr_33313_35133[(5)] = ex33305);


if((ex33305 instanceof Object)){
var statearr_33314_35134 = state_33283__$1;
(statearr_33314_35134[(1)] = (11));

(statearr_33314_35134[(5)] = null);

} else {
throw ex33305;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (2))){
var inst_33239 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33240 = cnt;
var inst_33241 = (0);
var state_33283__$1 = (function (){var statearr_33317 = state_33283;
(statearr_33317[(11)] = inst_33239);

(statearr_33317[(8)] = inst_33240);

(statearr_33317[(7)] = inst_33241);

return statearr_33317;
})();
var statearr_33318_35135 = state_33283__$1;
(statearr_33318_35135[(2)] = null);

(statearr_33318_35135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (11))){
var inst_33246 = (state_33283[(2)]);
var inst_33247 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33283__$1 = (function (){var statearr_33319 = state_33283;
(statearr_33319[(12)] = inst_33246);

return statearr_33319;
})();
var statearr_33320_35142 = state_33283__$1;
(statearr_33320_35142[(2)] = inst_33247);

(statearr_33320_35142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (9))){
var inst_33241 = (state_33283[(7)]);
var _ = (function (){var statearr_33321 = state_33283;
(statearr_33321[(4)] = cljs.core.cons((12),(state_33283[(4)])));

return statearr_33321;
})();
var inst_33253 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33241) : chs__$1.call(null,inst_33241));
var inst_33254 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33241) : done.call(null,inst_33241));
var inst_33255 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33253,inst_33254);
var ___$1 = (function (){var statearr_33322 = state_33283;
(statearr_33322[(4)] = cljs.core.rest((state_33283[(4)])));

return statearr_33322;
})();
var state_33283__$1 = state_33283;
var statearr_33323_35143 = state_33283__$1;
(statearr_33323_35143[(2)] = inst_33255);

(statearr_33323_35143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (5))){
var inst_33265 = (state_33283[(2)]);
var state_33283__$1 = (function (){var statearr_33326 = state_33283;
(statearr_33326[(13)] = inst_33265);

return statearr_33326;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33283__$1,(13),dchan);
} else {
if((state_val_33284 === (14))){
var inst_33270 = cljs.core.async.close_BANG_(out);
var state_33283__$1 = state_33283;
var statearr_33327_35145 = state_33283__$1;
(statearr_33327_35145[(2)] = inst_33270);

(statearr_33327_35145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (16))){
var inst_33279 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33328_35146 = state_33283__$1;
(statearr_33328_35146[(2)] = inst_33279);

(statearr_33328_35146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (10))){
var inst_33241 = (state_33283[(7)]);
var inst_33258 = (state_33283[(2)]);
var inst_33259 = (inst_33241 + (1));
var inst_33241__$1 = inst_33259;
var state_33283__$1 = (function (){var statearr_33333 = state_33283;
(statearr_33333[(14)] = inst_33258);

(statearr_33333[(7)] = inst_33241__$1);

return statearr_33333;
})();
var statearr_33334_35151 = state_33283__$1;
(statearr_33334_35151[(2)] = null);

(statearr_33334_35151[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (8))){
var inst_33263 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33335_35152 = state_33283__$1;
(statearr_33335_35152[(2)] = inst_33263);

(statearr_33335_35152[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30668__auto__ = null;
var cljs$core$async$state_machine__30668__auto____0 = (function (){
var statearr_33336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33336[(0)] = cljs$core$async$state_machine__30668__auto__);

(statearr_33336[(1)] = (1));

return statearr_33336;
});
var cljs$core$async$state_machine__30668__auto____1 = (function (state_33283){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_33283);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e33337){var ex__30671__auto__ = e33337;
var statearr_33338_35156 = state_33283;
(statearr_33338_35156[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_33283[(4)]))){
var statearr_33339_35157 = state_33283;
(statearr_33339_35157[(1)] = cljs.core.first((state_33283[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35158 = state_33283;
state_33283 = G__35158;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$state_machine__30668__auto__ = function(state_33283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30668__auto____1.call(this,state_33283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30668__auto____0;
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30668__auto____1;
return cljs$core$async$state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_33340 = f__30867__auto__();
(statearr_33340[(6)] = c__30866__auto___35113);

return statearr_33340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33344 = arguments.length;
switch (G__33344) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30866__auto___35163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_33381){
var state_val_33382 = (state_33381[(1)]);
if((state_val_33382 === (7))){
var inst_33360 = (state_33381[(7)]);
var inst_33361 = (state_33381[(8)]);
var inst_33360__$1 = (state_33381[(2)]);
var inst_33361__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33360__$1,(0),null);
var inst_33362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33360__$1,(1),null);
var inst_33363 = (inst_33361__$1 == null);
var state_33381__$1 = (function (){var statearr_33384 = state_33381;
(statearr_33384[(7)] = inst_33360__$1);

(statearr_33384[(8)] = inst_33361__$1);

(statearr_33384[(9)] = inst_33362);

return statearr_33384;
})();
if(cljs.core.truth_(inst_33363)){
var statearr_33386_35175 = state_33381__$1;
(statearr_33386_35175[(1)] = (8));

} else {
var statearr_33387_35176 = state_33381__$1;
(statearr_33387_35176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33382 === (1))){
var inst_33346 = cljs.core.vec(chs);
var inst_33347 = inst_33346;
var state_33381__$1 = (function (){var statearr_33389 = state_33381;
(statearr_33389[(10)] = inst_33347);

return statearr_33389;
})();
var statearr_33393_35181 = state_33381__$1;
(statearr_33393_35181[(2)] = null);

(statearr_33393_35181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33382 === (4))){
var inst_33347 = (state_33381[(10)]);
var state_33381__$1 = state_33381;
return cljs.core.async.ioc_alts_BANG_(state_33381__$1,(7),inst_33347);
} else {
if((state_val_33382 === (6))){
var inst_33377 = (state_33381[(2)]);
var state_33381__$1 = state_33381;
var statearr_33395_35182 = state_33381__$1;
(statearr_33395_35182[(2)] = inst_33377);

(statearr_33395_35182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33382 === (3))){
var inst_33379 = (state_33381[(2)]);
var state_33381__$1 = state_33381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33381__$1,inst_33379);
} else {
if((state_val_33382 === (2))){
var inst_33347 = (state_33381[(10)]);
var inst_33350 = cljs.core.count(inst_33347);
var inst_33351 = (inst_33350 > (0));
var state_33381__$1 = state_33381;
if(cljs.core.truth_(inst_33351)){
var statearr_33402_35183 = state_33381__$1;
(statearr_33402_35183[(1)] = (4));

} else {
var statearr_33403_35184 = state_33381__$1;
(statearr_33403_35184[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33382 === (11))){
var inst_33347 = (state_33381[(10)]);
var inst_33370 = (state_33381[(2)]);
var tmp33397 = inst_33347;
var inst_33347__$1 = tmp33397;
var state_33381__$1 = (function (){var statearr_33407 = state_33381;
(statearr_33407[(11)] = inst_33370);

(statearr_33407[(10)] = inst_33347__$1);

return statearr_33407;
})();
var statearr_33408_35185 = state_33381__$1;
(statearr_33408_35185[(2)] = null);

(statearr_33408_35185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33382 === (9))){
var inst_33361 = (state_33381[(8)]);
var state_33381__$1 = state_33381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33381__$1,(11),out,inst_33361);
} else {
if((state_val_33382 === (5))){
var inst_33375 = cljs.core.async.close_BANG_(out);
var state_33381__$1 = state_33381;
var statearr_33409_35193 = state_33381__$1;
(statearr_33409_35193[(2)] = inst_33375);

(statearr_33409_35193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33382 === (10))){
var inst_33373 = (state_33381[(2)]);
var state_33381__$1 = state_33381;
var statearr_33410_35198 = state_33381__$1;
(statearr_33410_35198[(2)] = inst_33373);

(statearr_33410_35198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33382 === (8))){
var inst_33347 = (state_33381[(10)]);
var inst_33360 = (state_33381[(7)]);
var inst_33361 = (state_33381[(8)]);
var inst_33362 = (state_33381[(9)]);
var inst_33365 = (function (){var cs = inst_33347;
var vec__33356 = inst_33360;
var v = inst_33361;
var c = inst_33362;
return (function (p1__33341_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33341_SHARP_);
});
})();
var inst_33366 = cljs.core.filterv(inst_33365,inst_33347);
var inst_33347__$1 = inst_33366;
var state_33381__$1 = (function (){var statearr_33411 = state_33381;
(statearr_33411[(10)] = inst_33347__$1);

return statearr_33411;
})();
var statearr_33412_35207 = state_33381__$1;
(statearr_33412_35207[(2)] = null);

(statearr_33412_35207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30668__auto__ = null;
var cljs$core$async$state_machine__30668__auto____0 = (function (){
var statearr_33413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33413[(0)] = cljs$core$async$state_machine__30668__auto__);

(statearr_33413[(1)] = (1));

return statearr_33413;
});
var cljs$core$async$state_machine__30668__auto____1 = (function (state_33381){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_33381);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e33414){var ex__30671__auto__ = e33414;
var statearr_33415_35219 = state_33381;
(statearr_33415_35219[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_33381[(4)]))){
var statearr_33418_35220 = state_33381;
(statearr_33418_35220[(1)] = cljs.core.first((state_33381[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35221 = state_33381;
state_33381 = G__35221;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$state_machine__30668__auto__ = function(state_33381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30668__auto____1.call(this,state_33381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30668__auto____0;
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30668__auto____1;
return cljs$core$async$state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_33422 = f__30867__auto__();
(statearr_33422[(6)] = c__30866__auto___35163);

return statearr_33422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33428 = arguments.length;
switch (G__33428) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30866__auto___35226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_33452){
var state_val_33453 = (state_33452[(1)]);
if((state_val_33453 === (7))){
var inst_33434 = (state_33452[(7)]);
var inst_33434__$1 = (state_33452[(2)]);
var inst_33435 = (inst_33434__$1 == null);
var inst_33436 = cljs.core.not(inst_33435);
var state_33452__$1 = (function (){var statearr_33468 = state_33452;
(statearr_33468[(7)] = inst_33434__$1);

return statearr_33468;
})();
if(inst_33436){
var statearr_33475_35227 = state_33452__$1;
(statearr_33475_35227[(1)] = (8));

} else {
var statearr_33479_35228 = state_33452__$1;
(statearr_33479_35228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (1))){
var inst_33429 = (0);
var state_33452__$1 = (function (){var statearr_33480 = state_33452;
(statearr_33480[(8)] = inst_33429);

return statearr_33480;
})();
var statearr_33482_35229 = state_33452__$1;
(statearr_33482_35229[(2)] = null);

(statearr_33482_35229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (4))){
var state_33452__$1 = state_33452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33452__$1,(7),ch);
} else {
if((state_val_33453 === (6))){
var inst_33447 = (state_33452[(2)]);
var state_33452__$1 = state_33452;
var statearr_33491_35237 = state_33452__$1;
(statearr_33491_35237[(2)] = inst_33447);

(statearr_33491_35237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (3))){
var inst_33449 = (state_33452[(2)]);
var inst_33450 = cljs.core.async.close_BANG_(out);
var state_33452__$1 = (function (){var statearr_33495 = state_33452;
(statearr_33495[(9)] = inst_33449);

return statearr_33495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33452__$1,inst_33450);
} else {
if((state_val_33453 === (2))){
var inst_33429 = (state_33452[(8)]);
var inst_33431 = (inst_33429 < n);
var state_33452__$1 = state_33452;
if(cljs.core.truth_(inst_33431)){
var statearr_33501_35250 = state_33452__$1;
(statearr_33501_35250[(1)] = (4));

} else {
var statearr_33504_35251 = state_33452__$1;
(statearr_33504_35251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (11))){
var inst_33429 = (state_33452[(8)]);
var inst_33439 = (state_33452[(2)]);
var inst_33440 = (inst_33429 + (1));
var inst_33429__$1 = inst_33440;
var state_33452__$1 = (function (){var statearr_33505 = state_33452;
(statearr_33505[(10)] = inst_33439);

(statearr_33505[(8)] = inst_33429__$1);

return statearr_33505;
})();
var statearr_33506_35256 = state_33452__$1;
(statearr_33506_35256[(2)] = null);

(statearr_33506_35256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (9))){
var state_33452__$1 = state_33452;
var statearr_33507_35257 = state_33452__$1;
(statearr_33507_35257[(2)] = null);

(statearr_33507_35257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (5))){
var state_33452__$1 = state_33452;
var statearr_33508_35258 = state_33452__$1;
(statearr_33508_35258[(2)] = null);

(statearr_33508_35258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (10))){
var inst_33444 = (state_33452[(2)]);
var state_33452__$1 = state_33452;
var statearr_33509_35259 = state_33452__$1;
(statearr_33509_35259[(2)] = inst_33444);

(statearr_33509_35259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (8))){
var inst_33434 = (state_33452[(7)]);
var state_33452__$1 = state_33452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33452__$1,(11),out,inst_33434);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30668__auto__ = null;
var cljs$core$async$state_machine__30668__auto____0 = (function (){
var statearr_33511 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33511[(0)] = cljs$core$async$state_machine__30668__auto__);

(statearr_33511[(1)] = (1));

return statearr_33511;
});
var cljs$core$async$state_machine__30668__auto____1 = (function (state_33452){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_33452);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e33515){var ex__30671__auto__ = e33515;
var statearr_33516_35272 = state_33452;
(statearr_33516_35272[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_33452[(4)]))){
var statearr_33517_35274 = state_33452;
(statearr_33517_35274[(1)] = cljs.core.first((state_33452[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35281 = state_33452;
state_33452 = G__35281;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$state_machine__30668__auto__ = function(state_33452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30668__auto____1.call(this,state_33452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30668__auto____0;
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30668__auto____1;
return cljs$core$async$state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_33518 = f__30867__auto__();
(statearr_33518[(6)] = c__30866__auto___35226);

return statearr_33518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33536 = (function (f,ch,meta33522,_,fn1,meta33537){
this.f = f;
this.ch = ch;
this.meta33522 = meta33522;
this._ = _;
this.fn1 = fn1;
this.meta33537 = meta33537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33538,meta33537__$1){
var self__ = this;
var _33538__$1 = this;
return (new cljs.core.async.t_cljs$core$async33536(self__.f,self__.ch,self__.meta33522,self__._,self__.fn1,meta33537__$1));
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33538){
var self__ = this;
var _33538__$1 = this;
return self__.meta33537;
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33520_SHARP_){
var G__33556 = (((p1__33520_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33520_SHARP_) : self__.f.call(null,p1__33520_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33556) : f1.call(null,G__33556));
});
}));

(cljs.core.async.t_cljs$core$async33536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33522","meta33522",1465786459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33521","cljs.core.async/t_cljs$core$async33521",2064150132,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33537","meta33537",-1533601650,null)], null);
}));

(cljs.core.async.t_cljs$core$async33536.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33536");

(cljs.core.async.t_cljs$core$async33536.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33536");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33536.
 */
cljs.core.async.__GT_t_cljs$core$async33536 = (function cljs$core$async$__GT_t_cljs$core$async33536(f,ch,meta33522,_,fn1,meta33537){
return (new cljs.core.async.t_cljs$core$async33536(f,ch,meta33522,_,fn1,meta33537));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33521 = (function (f,ch,meta33522){
this.f = f;
this.ch = ch;
this.meta33522 = meta33522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33523,meta33522__$1){
var self__ = this;
var _33523__$1 = this;
return (new cljs.core.async.t_cljs$core$async33521(self__.f,self__.ch,meta33522__$1));
}));

(cljs.core.async.t_cljs$core$async33521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33523){
var self__ = this;
var _33523__$1 = this;
return self__.meta33522;
}));

(cljs.core.async.t_cljs$core$async33521.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33521.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33521.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33521.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33521.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33536(self__.f,self__.ch,self__.meta33522,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33588 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33588) : self__.f.call(null,G__33588));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33521.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33521.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33522","meta33522",1465786459,null)], null);
}));

(cljs.core.async.t_cljs$core$async33521.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33521");

(cljs.core.async.t_cljs$core$async33521.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33521");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33521.
 */
cljs.core.async.__GT_t_cljs$core$async33521 = (function cljs$core$async$__GT_t_cljs$core$async33521(f,ch,meta33522){
return (new cljs.core.async.t_cljs$core$async33521(f,ch,meta33522));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33521(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33591 = (function (f,ch,meta33592){
this.f = f;
this.ch = ch;
this.meta33592 = meta33592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33593,meta33592__$1){
var self__ = this;
var _33593__$1 = this;
return (new cljs.core.async.t_cljs$core$async33591(self__.f,self__.ch,meta33592__$1));
}));

(cljs.core.async.t_cljs$core$async33591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33593){
var self__ = this;
var _33593__$1 = this;
return self__.meta33592;
}));

(cljs.core.async.t_cljs$core$async33591.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33591.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33591.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33592","meta33592",-173014433,null)], null);
}));

(cljs.core.async.t_cljs$core$async33591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33591");

(cljs.core.async.t_cljs$core$async33591.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33591.
 */
cljs.core.async.__GT_t_cljs$core$async33591 = (function cljs$core$async$__GT_t_cljs$core$async33591(f,ch,meta33592){
return (new cljs.core.async.t_cljs$core$async33591(f,ch,meta33592));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33591(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33618 = (function (p,ch,meta33619){
this.p = p;
this.ch = ch;
this.meta33619 = meta33619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33620,meta33619__$1){
var self__ = this;
var _33620__$1 = this;
return (new cljs.core.async.t_cljs$core$async33618(self__.p,self__.ch,meta33619__$1));
}));

(cljs.core.async.t_cljs$core$async33618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33620){
var self__ = this;
var _33620__$1 = this;
return self__.meta33619;
}));

(cljs.core.async.t_cljs$core$async33618.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33618.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33618.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33618.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33618.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33618.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33618.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33619","meta33619",654345067,null)], null);
}));

(cljs.core.async.t_cljs$core$async33618.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33618");

(cljs.core.async.t_cljs$core$async33618.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33618");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33618.
 */
cljs.core.async.__GT_t_cljs$core$async33618 = (function cljs$core$async$__GT_t_cljs$core$async33618(p,ch,meta33619){
return (new cljs.core.async.t_cljs$core$async33618(p,ch,meta33619));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33618(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33634 = arguments.length;
switch (G__33634) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30866__auto___35359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_33656){
var state_val_33657 = (state_33656[(1)]);
if((state_val_33657 === (7))){
var inst_33652 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
var statearr_33658_35362 = state_33656__$1;
(statearr_33658_35362[(2)] = inst_33652);

(statearr_33658_35362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (1))){
var state_33656__$1 = state_33656;
var statearr_33664_35363 = state_33656__$1;
(statearr_33664_35363[(2)] = null);

(statearr_33664_35363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (4))){
var inst_33637 = (state_33656[(7)]);
var inst_33637__$1 = (state_33656[(2)]);
var inst_33639 = (inst_33637__$1 == null);
var state_33656__$1 = (function (){var statearr_33665 = state_33656;
(statearr_33665[(7)] = inst_33637__$1);

return statearr_33665;
})();
if(cljs.core.truth_(inst_33639)){
var statearr_33667_35364 = state_33656__$1;
(statearr_33667_35364[(1)] = (5));

} else {
var statearr_33668_35365 = state_33656__$1;
(statearr_33668_35365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (6))){
var inst_33637 = (state_33656[(7)]);
var inst_33643 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33637) : p.call(null,inst_33637));
var state_33656__$1 = state_33656;
if(cljs.core.truth_(inst_33643)){
var statearr_33669_35369 = state_33656__$1;
(statearr_33669_35369[(1)] = (8));

} else {
var statearr_33670_35370 = state_33656__$1;
(statearr_33670_35370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (3))){
var inst_33654 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33656__$1,inst_33654);
} else {
if((state_val_33657 === (2))){
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33656__$1,(4),ch);
} else {
if((state_val_33657 === (11))){
var inst_33646 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
var statearr_33673_35375 = state_33656__$1;
(statearr_33673_35375[(2)] = inst_33646);

(statearr_33673_35375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (9))){
var state_33656__$1 = state_33656;
var statearr_33674_35376 = state_33656__$1;
(statearr_33674_35376[(2)] = null);

(statearr_33674_35376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (5))){
var inst_33641 = cljs.core.async.close_BANG_(out);
var state_33656__$1 = state_33656;
var statearr_33675_35383 = state_33656__$1;
(statearr_33675_35383[(2)] = inst_33641);

(statearr_33675_35383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (10))){
var inst_33649 = (state_33656[(2)]);
var state_33656__$1 = (function (){var statearr_33676 = state_33656;
(statearr_33676[(8)] = inst_33649);

return statearr_33676;
})();
var statearr_33677_35385 = state_33656__$1;
(statearr_33677_35385[(2)] = null);

(statearr_33677_35385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (8))){
var inst_33637 = (state_33656[(7)]);
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33656__$1,(11),out,inst_33637);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30668__auto__ = null;
var cljs$core$async$state_machine__30668__auto____0 = (function (){
var statearr_33684 = [null,null,null,null,null,null,null,null,null];
(statearr_33684[(0)] = cljs$core$async$state_machine__30668__auto__);

(statearr_33684[(1)] = (1));

return statearr_33684;
});
var cljs$core$async$state_machine__30668__auto____1 = (function (state_33656){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_33656);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e33687){var ex__30671__auto__ = e33687;
var statearr_33688_35390 = state_33656;
(statearr_33688_35390[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_33656[(4)]))){
var statearr_33689_35391 = state_33656;
(statearr_33689_35391[(1)] = cljs.core.first((state_33656[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35393 = state_33656;
state_33656 = G__35393;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$state_machine__30668__auto__ = function(state_33656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30668__auto____1.call(this,state_33656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30668__auto____0;
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30668__auto____1;
return cljs$core$async$state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_33690 = f__30867__auto__();
(statearr_33690[(6)] = c__30866__auto___35359);

return statearr_33690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33692 = arguments.length;
switch (G__33692) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30866__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_33765){
var state_val_33766 = (state_33765[(1)]);
if((state_val_33766 === (7))){
var inst_33757 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
var statearr_33769_35403 = state_33765__$1;
(statearr_33769_35403[(2)] = inst_33757);

(statearr_33769_35403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (20))){
var inst_33724 = (state_33765[(7)]);
var inst_33736 = (state_33765[(2)]);
var inst_33737 = cljs.core.next(inst_33724);
var inst_33706 = inst_33737;
var inst_33707 = null;
var inst_33708 = (0);
var inst_33709 = (0);
var state_33765__$1 = (function (){var statearr_33770 = state_33765;
(statearr_33770[(8)] = inst_33736);

(statearr_33770[(9)] = inst_33706);

(statearr_33770[(10)] = inst_33707);

(statearr_33770[(11)] = inst_33708);

(statearr_33770[(12)] = inst_33709);

return statearr_33770;
})();
var statearr_33772_35408 = state_33765__$1;
(statearr_33772_35408[(2)] = null);

(statearr_33772_35408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (1))){
var state_33765__$1 = state_33765;
var statearr_33779_35413 = state_33765__$1;
(statearr_33779_35413[(2)] = null);

(statearr_33779_35413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (4))){
var inst_33695 = (state_33765[(13)]);
var inst_33695__$1 = (state_33765[(2)]);
var inst_33696 = (inst_33695__$1 == null);
var state_33765__$1 = (function (){var statearr_33780 = state_33765;
(statearr_33780[(13)] = inst_33695__$1);

return statearr_33780;
})();
if(cljs.core.truth_(inst_33696)){
var statearr_33781_35415 = state_33765__$1;
(statearr_33781_35415[(1)] = (5));

} else {
var statearr_33782_35417 = state_33765__$1;
(statearr_33782_35417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (15))){
var state_33765__$1 = state_33765;
var statearr_33786_35420 = state_33765__$1;
(statearr_33786_35420[(2)] = null);

(statearr_33786_35420[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (21))){
var state_33765__$1 = state_33765;
var statearr_33787_35421 = state_33765__$1;
(statearr_33787_35421[(2)] = null);

(statearr_33787_35421[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (13))){
var inst_33709 = (state_33765[(12)]);
var inst_33706 = (state_33765[(9)]);
var inst_33707 = (state_33765[(10)]);
var inst_33708 = (state_33765[(11)]);
var inst_33716 = (state_33765[(2)]);
var inst_33718 = (inst_33709 + (1));
var tmp33783 = inst_33708;
var tmp33784 = inst_33706;
var tmp33785 = inst_33707;
var inst_33706__$1 = tmp33784;
var inst_33707__$1 = tmp33785;
var inst_33708__$1 = tmp33783;
var inst_33709__$1 = inst_33718;
var state_33765__$1 = (function (){var statearr_33788 = state_33765;
(statearr_33788[(14)] = inst_33716);

(statearr_33788[(9)] = inst_33706__$1);

(statearr_33788[(10)] = inst_33707__$1);

(statearr_33788[(11)] = inst_33708__$1);

(statearr_33788[(12)] = inst_33709__$1);

return statearr_33788;
})();
var statearr_33789_35433 = state_33765__$1;
(statearr_33789_35433[(2)] = null);

(statearr_33789_35433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (22))){
var state_33765__$1 = state_33765;
var statearr_33790_35434 = state_33765__$1;
(statearr_33790_35434[(2)] = null);

(statearr_33790_35434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (6))){
var inst_33695 = (state_33765[(13)]);
var inst_33704 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33695) : f.call(null,inst_33695));
var inst_33705 = cljs.core.seq(inst_33704);
var inst_33706 = inst_33705;
var inst_33707 = null;
var inst_33708 = (0);
var inst_33709 = (0);
var state_33765__$1 = (function (){var statearr_33792 = state_33765;
(statearr_33792[(9)] = inst_33706);

(statearr_33792[(10)] = inst_33707);

(statearr_33792[(11)] = inst_33708);

(statearr_33792[(12)] = inst_33709);

return statearr_33792;
})();
var statearr_33793_35444 = state_33765__$1;
(statearr_33793_35444[(2)] = null);

(statearr_33793_35444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (17))){
var inst_33724 = (state_33765[(7)]);
var inst_33729 = cljs.core.chunk_first(inst_33724);
var inst_33730 = cljs.core.chunk_rest(inst_33724);
var inst_33731 = cljs.core.count(inst_33729);
var inst_33706 = inst_33730;
var inst_33707 = inst_33729;
var inst_33708 = inst_33731;
var inst_33709 = (0);
var state_33765__$1 = (function (){var statearr_33794 = state_33765;
(statearr_33794[(9)] = inst_33706);

(statearr_33794[(10)] = inst_33707);

(statearr_33794[(11)] = inst_33708);

(statearr_33794[(12)] = inst_33709);

return statearr_33794;
})();
var statearr_33795_35461 = state_33765__$1;
(statearr_33795_35461[(2)] = null);

(statearr_33795_35461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (3))){
var inst_33759 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33765__$1,inst_33759);
} else {
if((state_val_33766 === (12))){
var inst_33746 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
var statearr_33799_35468 = state_33765__$1;
(statearr_33799_35468[(2)] = inst_33746);

(statearr_33799_35468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (2))){
var state_33765__$1 = state_33765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33765__$1,(4),in$);
} else {
if((state_val_33766 === (23))){
var inst_33755 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
var statearr_33800_35470 = state_33765__$1;
(statearr_33800_35470[(2)] = inst_33755);

(statearr_33800_35470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (19))){
var inst_33741 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
var statearr_33801_35471 = state_33765__$1;
(statearr_33801_35471[(2)] = inst_33741);

(statearr_33801_35471[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (11))){
var inst_33706 = (state_33765[(9)]);
var inst_33724 = (state_33765[(7)]);
var inst_33724__$1 = cljs.core.seq(inst_33706);
var state_33765__$1 = (function (){var statearr_33802 = state_33765;
(statearr_33802[(7)] = inst_33724__$1);

return statearr_33802;
})();
if(inst_33724__$1){
var statearr_33803_35472 = state_33765__$1;
(statearr_33803_35472[(1)] = (14));

} else {
var statearr_33804_35475 = state_33765__$1;
(statearr_33804_35475[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (9))){
var inst_33748 = (state_33765[(2)]);
var inst_33749 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33765__$1 = (function (){var statearr_33806 = state_33765;
(statearr_33806[(15)] = inst_33748);

return statearr_33806;
})();
if(cljs.core.truth_(inst_33749)){
var statearr_33810_35481 = state_33765__$1;
(statearr_33810_35481[(1)] = (21));

} else {
var statearr_33811_35482 = state_33765__$1;
(statearr_33811_35482[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (5))){
var inst_33698 = cljs.core.async.close_BANG_(out);
var state_33765__$1 = state_33765;
var statearr_33812_35483 = state_33765__$1;
(statearr_33812_35483[(2)] = inst_33698);

(statearr_33812_35483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (14))){
var inst_33724 = (state_33765[(7)]);
var inst_33726 = cljs.core.chunked_seq_QMARK_(inst_33724);
var state_33765__$1 = state_33765;
if(inst_33726){
var statearr_33816_35484 = state_33765__$1;
(statearr_33816_35484[(1)] = (17));

} else {
var statearr_33817_35485 = state_33765__$1;
(statearr_33817_35485[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (16))){
var inst_33744 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
var statearr_33818_35490 = state_33765__$1;
(statearr_33818_35490[(2)] = inst_33744);

(statearr_33818_35490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (10))){
var inst_33707 = (state_33765[(10)]);
var inst_33709 = (state_33765[(12)]);
var inst_33714 = cljs.core._nth(inst_33707,inst_33709);
var state_33765__$1 = state_33765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33765__$1,(13),out,inst_33714);
} else {
if((state_val_33766 === (18))){
var inst_33724 = (state_33765[(7)]);
var inst_33734 = cljs.core.first(inst_33724);
var state_33765__$1 = state_33765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33765__$1,(20),out,inst_33734);
} else {
if((state_val_33766 === (8))){
var inst_33709 = (state_33765[(12)]);
var inst_33708 = (state_33765[(11)]);
var inst_33711 = (inst_33709 < inst_33708);
var inst_33712 = inst_33711;
var state_33765__$1 = state_33765;
if(cljs.core.truth_(inst_33712)){
var statearr_33821_35498 = state_33765__$1;
(statearr_33821_35498[(1)] = (10));

} else {
var statearr_33822_35499 = state_33765__$1;
(statearr_33822_35499[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30668__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30668__auto____0 = (function (){
var statearr_33823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33823[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30668__auto__);

(statearr_33823[(1)] = (1));

return statearr_33823;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30668__auto____1 = (function (state_33765){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_33765);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e33824){var ex__30671__auto__ = e33824;
var statearr_33829_35504 = state_33765;
(statearr_33829_35504[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_33765[(4)]))){
var statearr_33830_35506 = state_33765;
(statearr_33830_35506[(1)] = cljs.core.first((state_33765[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35508 = state_33765;
state_33765 = G__35508;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30668__auto__ = function(state_33765){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30668__auto____1.call(this,state_33765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30668__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30668__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_33832 = f__30867__auto__();
(statearr_33832[(6)] = c__30866__auto__);

return statearr_33832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));

return c__30866__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33834 = arguments.length;
switch (G__33834) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33867 = arguments.length;
switch (G__33867) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33891 = arguments.length;
switch (G__33891) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30866__auto___35528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_33918){
var state_val_33919 = (state_33918[(1)]);
if((state_val_33919 === (7))){
var inst_33913 = (state_33918[(2)]);
var state_33918__$1 = state_33918;
var statearr_33921_35538 = state_33918__$1;
(statearr_33921_35538[(2)] = inst_33913);

(statearr_33921_35538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (1))){
var inst_33894 = null;
var state_33918__$1 = (function (){var statearr_33925 = state_33918;
(statearr_33925[(7)] = inst_33894);

return statearr_33925;
})();
var statearr_33926_35542 = state_33918__$1;
(statearr_33926_35542[(2)] = null);

(statearr_33926_35542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (4))){
var inst_33898 = (state_33918[(8)]);
var inst_33898__$1 = (state_33918[(2)]);
var inst_33899 = (inst_33898__$1 == null);
var inst_33900 = cljs.core.not(inst_33899);
var state_33918__$1 = (function (){var statearr_33927 = state_33918;
(statearr_33927[(8)] = inst_33898__$1);

return statearr_33927;
})();
if(inst_33900){
var statearr_33928_35544 = state_33918__$1;
(statearr_33928_35544[(1)] = (5));

} else {
var statearr_33929_35549 = state_33918__$1;
(statearr_33929_35549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (6))){
var state_33918__$1 = state_33918;
var statearr_33930_35554 = state_33918__$1;
(statearr_33930_35554[(2)] = null);

(statearr_33930_35554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (3))){
var inst_33915 = (state_33918[(2)]);
var inst_33916 = cljs.core.async.close_BANG_(out);
var state_33918__$1 = (function (){var statearr_33931 = state_33918;
(statearr_33931[(9)] = inst_33915);

return statearr_33931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33918__$1,inst_33916);
} else {
if((state_val_33919 === (2))){
var state_33918__$1 = state_33918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33918__$1,(4),ch);
} else {
if((state_val_33919 === (11))){
var inst_33898 = (state_33918[(8)]);
var inst_33907 = (state_33918[(2)]);
var inst_33894 = inst_33898;
var state_33918__$1 = (function (){var statearr_33932 = state_33918;
(statearr_33932[(10)] = inst_33907);

(statearr_33932[(7)] = inst_33894);

return statearr_33932;
})();
var statearr_33933_35558 = state_33918__$1;
(statearr_33933_35558[(2)] = null);

(statearr_33933_35558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (9))){
var inst_33898 = (state_33918[(8)]);
var state_33918__$1 = state_33918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33918__$1,(11),out,inst_33898);
} else {
if((state_val_33919 === (5))){
var inst_33898 = (state_33918[(8)]);
var inst_33894 = (state_33918[(7)]);
var inst_33902 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33898,inst_33894);
var state_33918__$1 = state_33918;
if(inst_33902){
var statearr_33935_35565 = state_33918__$1;
(statearr_33935_35565[(1)] = (8));

} else {
var statearr_33936_35568 = state_33918__$1;
(statearr_33936_35568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (10))){
var inst_33910 = (state_33918[(2)]);
var state_33918__$1 = state_33918;
var statearr_33937_35570 = state_33918__$1;
(statearr_33937_35570[(2)] = inst_33910);

(statearr_33937_35570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (8))){
var inst_33894 = (state_33918[(7)]);
var tmp33934 = inst_33894;
var inst_33894__$1 = tmp33934;
var state_33918__$1 = (function (){var statearr_33939 = state_33918;
(statearr_33939[(7)] = inst_33894__$1);

return statearr_33939;
})();
var statearr_33940_35577 = state_33918__$1;
(statearr_33940_35577[(2)] = null);

(statearr_33940_35577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30668__auto__ = null;
var cljs$core$async$state_machine__30668__auto____0 = (function (){
var statearr_33942 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33942[(0)] = cljs$core$async$state_machine__30668__auto__);

(statearr_33942[(1)] = (1));

return statearr_33942;
});
var cljs$core$async$state_machine__30668__auto____1 = (function (state_33918){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_33918);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e33944){var ex__30671__auto__ = e33944;
var statearr_33946_35585 = state_33918;
(statearr_33946_35585[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_33918[(4)]))){
var statearr_33948_35586 = state_33918;
(statearr_33948_35586[(1)] = cljs.core.first((state_33918[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35590 = state_33918;
state_33918 = G__35590;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$state_machine__30668__auto__ = function(state_33918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30668__auto____1.call(this,state_33918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30668__auto____0;
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30668__auto____1;
return cljs$core$async$state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_33950 = f__30867__auto__();
(statearr_33950[(6)] = c__30866__auto___35528);

return statearr_33950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33957 = arguments.length;
switch (G__33957) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30866__auto___35609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_34010){
var state_val_34011 = (state_34010[(1)]);
if((state_val_34011 === (7))){
var inst_34006 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34012_35623 = state_34010__$1;
(statearr_34012_35623[(2)] = inst_34006);

(statearr_34012_35623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (1))){
var inst_33966 = (new Array(n));
var inst_33968 = inst_33966;
var inst_33969 = (0);
var state_34010__$1 = (function (){var statearr_34013 = state_34010;
(statearr_34013[(7)] = inst_33968);

(statearr_34013[(8)] = inst_33969);

return statearr_34013;
})();
var statearr_34014_35635 = state_34010__$1;
(statearr_34014_35635[(2)] = null);

(statearr_34014_35635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (4))){
var inst_33975 = (state_34010[(9)]);
var inst_33975__$1 = (state_34010[(2)]);
var inst_33976 = (inst_33975__$1 == null);
var inst_33977 = cljs.core.not(inst_33976);
var state_34010__$1 = (function (){var statearr_34015 = state_34010;
(statearr_34015[(9)] = inst_33975__$1);

return statearr_34015;
})();
if(inst_33977){
var statearr_34016_35654 = state_34010__$1;
(statearr_34016_35654[(1)] = (5));

} else {
var statearr_34017_35655 = state_34010__$1;
(statearr_34017_35655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (15))){
var inst_34000 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34018_35657 = state_34010__$1;
(statearr_34018_35657[(2)] = inst_34000);

(statearr_34018_35657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (13))){
var state_34010__$1 = state_34010;
var statearr_34019_35658 = state_34010__$1;
(statearr_34019_35658[(2)] = null);

(statearr_34019_35658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (6))){
var inst_33969 = (state_34010[(8)]);
var inst_33996 = (inst_33969 > (0));
var state_34010__$1 = state_34010;
if(cljs.core.truth_(inst_33996)){
var statearr_34021_35659 = state_34010__$1;
(statearr_34021_35659[(1)] = (12));

} else {
var statearr_34022_35660 = state_34010__$1;
(statearr_34022_35660[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (3))){
var inst_34008 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34010__$1,inst_34008);
} else {
if((state_val_34011 === (12))){
var inst_33968 = (state_34010[(7)]);
var inst_33998 = cljs.core.vec(inst_33968);
var state_34010__$1 = state_34010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34010__$1,(15),out,inst_33998);
} else {
if((state_val_34011 === (2))){
var state_34010__$1 = state_34010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34010__$1,(4),ch);
} else {
if((state_val_34011 === (11))){
var inst_33990 = (state_34010[(2)]);
var inst_33991 = (new Array(n));
var inst_33968 = inst_33991;
var inst_33969 = (0);
var state_34010__$1 = (function (){var statearr_34030 = state_34010;
(statearr_34030[(10)] = inst_33990);

(statearr_34030[(7)] = inst_33968);

(statearr_34030[(8)] = inst_33969);

return statearr_34030;
})();
var statearr_34031_35673 = state_34010__$1;
(statearr_34031_35673[(2)] = null);

(statearr_34031_35673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (9))){
var inst_33968 = (state_34010[(7)]);
var inst_33988 = cljs.core.vec(inst_33968);
var state_34010__$1 = state_34010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34010__$1,(11),out,inst_33988);
} else {
if((state_val_34011 === (5))){
var inst_33968 = (state_34010[(7)]);
var inst_33969 = (state_34010[(8)]);
var inst_33975 = (state_34010[(9)]);
var inst_33980 = (state_34010[(11)]);
var inst_33979 = (inst_33968[inst_33969] = inst_33975);
var inst_33980__$1 = (inst_33969 + (1));
var inst_33981 = (inst_33980__$1 < n);
var state_34010__$1 = (function (){var statearr_34037 = state_34010;
(statearr_34037[(12)] = inst_33979);

(statearr_34037[(11)] = inst_33980__$1);

return statearr_34037;
})();
if(cljs.core.truth_(inst_33981)){
var statearr_34038_35696 = state_34010__$1;
(statearr_34038_35696[(1)] = (8));

} else {
var statearr_34039_35697 = state_34010__$1;
(statearr_34039_35697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (14))){
var inst_34003 = (state_34010[(2)]);
var inst_34004 = cljs.core.async.close_BANG_(out);
var state_34010__$1 = (function (){var statearr_34042 = state_34010;
(statearr_34042[(13)] = inst_34003);

return statearr_34042;
})();
var statearr_34043_35700 = state_34010__$1;
(statearr_34043_35700[(2)] = inst_34004);

(statearr_34043_35700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (10))){
var inst_33994 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34044_35701 = state_34010__$1;
(statearr_34044_35701[(2)] = inst_33994);

(statearr_34044_35701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (8))){
var inst_33968 = (state_34010[(7)]);
var inst_33980 = (state_34010[(11)]);
var tmp34040 = inst_33968;
var inst_33968__$1 = tmp34040;
var inst_33969 = inst_33980;
var state_34010__$1 = (function (){var statearr_34046 = state_34010;
(statearr_34046[(7)] = inst_33968__$1);

(statearr_34046[(8)] = inst_33969);

return statearr_34046;
})();
var statearr_34047_35703 = state_34010__$1;
(statearr_34047_35703[(2)] = null);

(statearr_34047_35703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30668__auto__ = null;
var cljs$core$async$state_machine__30668__auto____0 = (function (){
var statearr_34055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34055[(0)] = cljs$core$async$state_machine__30668__auto__);

(statearr_34055[(1)] = (1));

return statearr_34055;
});
var cljs$core$async$state_machine__30668__auto____1 = (function (state_34010){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_34010);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e34056){var ex__30671__auto__ = e34056;
var statearr_34057_35704 = state_34010;
(statearr_34057_35704[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_34010[(4)]))){
var statearr_34068_35705 = state_34010;
(statearr_34068_35705[(1)] = cljs.core.first((state_34010[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35712 = state_34010;
state_34010 = G__35712;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$state_machine__30668__auto__ = function(state_34010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30668__auto____1.call(this,state_34010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30668__auto____0;
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30668__auto____1;
return cljs$core$async$state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_34078 = f__30867__auto__();
(statearr_34078[(6)] = c__30866__auto___35609);

return statearr_34078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34083 = arguments.length;
switch (G__34083) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30866__auto___35737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30867__auto__ = (function (){var switch__30667__auto__ = (function (state_34133){
var state_val_34134 = (state_34133[(1)]);
if((state_val_34134 === (7))){
var inst_34127 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34137_35738 = state_34133__$1;
(statearr_34137_35738[(2)] = inst_34127);

(statearr_34137_35738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (1))){
var inst_34084 = [];
var inst_34085 = inst_34084;
var inst_34086 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34133__$1 = (function (){var statearr_34139 = state_34133;
(statearr_34139[(7)] = inst_34085);

(statearr_34139[(8)] = inst_34086);

return statearr_34139;
})();
var statearr_34140_35745 = state_34133__$1;
(statearr_34140_35745[(2)] = null);

(statearr_34140_35745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (4))){
var inst_34089 = (state_34133[(9)]);
var inst_34089__$1 = (state_34133[(2)]);
var inst_34090 = (inst_34089__$1 == null);
var inst_34091 = cljs.core.not(inst_34090);
var state_34133__$1 = (function (){var statearr_34148 = state_34133;
(statearr_34148[(9)] = inst_34089__$1);

return statearr_34148;
})();
if(inst_34091){
var statearr_34152_35746 = state_34133__$1;
(statearr_34152_35746[(1)] = (5));

} else {
var statearr_34153_35747 = state_34133__$1;
(statearr_34153_35747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (15))){
var inst_34085 = (state_34133[(7)]);
var inst_34119 = cljs.core.vec(inst_34085);
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34133__$1,(18),out,inst_34119);
} else {
if((state_val_34134 === (13))){
var inst_34114 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34160_35752 = state_34133__$1;
(statearr_34160_35752[(2)] = inst_34114);

(statearr_34160_35752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (6))){
var inst_34085 = (state_34133[(7)]);
var inst_34116 = inst_34085.length;
var inst_34117 = (inst_34116 > (0));
var state_34133__$1 = state_34133;
if(cljs.core.truth_(inst_34117)){
var statearr_34161_35754 = state_34133__$1;
(statearr_34161_35754[(1)] = (15));

} else {
var statearr_34162_35755 = state_34133__$1;
(statearr_34162_35755[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (17))){
var inst_34124 = (state_34133[(2)]);
var inst_34125 = cljs.core.async.close_BANG_(out);
var state_34133__$1 = (function (){var statearr_34163 = state_34133;
(statearr_34163[(10)] = inst_34124);

return statearr_34163;
})();
var statearr_34164_35760 = state_34133__$1;
(statearr_34164_35760[(2)] = inst_34125);

(statearr_34164_35760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (3))){
var inst_34129 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34133__$1,inst_34129);
} else {
if((state_val_34134 === (12))){
var inst_34085 = (state_34133[(7)]);
var inst_34107 = cljs.core.vec(inst_34085);
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34133__$1,(14),out,inst_34107);
} else {
if((state_val_34134 === (2))){
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34133__$1,(4),ch);
} else {
if((state_val_34134 === (11))){
var inst_34085 = (state_34133[(7)]);
var inst_34089 = (state_34133[(9)]);
var inst_34093 = (state_34133[(11)]);
var inst_34104 = inst_34085.push(inst_34089);
var tmp34172 = inst_34085;
var inst_34085__$1 = tmp34172;
var inst_34086 = inst_34093;
var state_34133__$1 = (function (){var statearr_34176 = state_34133;
(statearr_34176[(12)] = inst_34104);

(statearr_34176[(7)] = inst_34085__$1);

(statearr_34176[(8)] = inst_34086);

return statearr_34176;
})();
var statearr_34177_35775 = state_34133__$1;
(statearr_34177_35775[(2)] = null);

(statearr_34177_35775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (9))){
var inst_34086 = (state_34133[(8)]);
var inst_34097 = cljs.core.keyword_identical_QMARK_(inst_34086,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34133__$1 = state_34133;
var statearr_34183_35780 = state_34133__$1;
(statearr_34183_35780[(2)] = inst_34097);

(statearr_34183_35780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (5))){
var inst_34089 = (state_34133[(9)]);
var inst_34093 = (state_34133[(11)]);
var inst_34086 = (state_34133[(8)]);
var inst_34094 = (state_34133[(13)]);
var inst_34093__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34089) : f.call(null,inst_34089));
var inst_34094__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34093__$1,inst_34086);
var state_34133__$1 = (function (){var statearr_34191 = state_34133;
(statearr_34191[(11)] = inst_34093__$1);

(statearr_34191[(13)] = inst_34094__$1);

return statearr_34191;
})();
if(inst_34094__$1){
var statearr_34196_35791 = state_34133__$1;
(statearr_34196_35791[(1)] = (8));

} else {
var statearr_34197_35795 = state_34133__$1;
(statearr_34197_35795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (14))){
var inst_34089 = (state_34133[(9)]);
var inst_34093 = (state_34133[(11)]);
var inst_34109 = (state_34133[(2)]);
var inst_34110 = [];
var inst_34111 = inst_34110.push(inst_34089);
var inst_34085 = inst_34110;
var inst_34086 = inst_34093;
var state_34133__$1 = (function (){var statearr_34202 = state_34133;
(statearr_34202[(14)] = inst_34109);

(statearr_34202[(15)] = inst_34111);

(statearr_34202[(7)] = inst_34085);

(statearr_34202[(8)] = inst_34086);

return statearr_34202;
})();
var statearr_34203_35806 = state_34133__$1;
(statearr_34203_35806[(2)] = null);

(statearr_34203_35806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (16))){
var state_34133__$1 = state_34133;
var statearr_34204_35813 = state_34133__$1;
(statearr_34204_35813[(2)] = null);

(statearr_34204_35813[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (10))){
var inst_34099 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
if(cljs.core.truth_(inst_34099)){
var statearr_34205_35817 = state_34133__$1;
(statearr_34205_35817[(1)] = (11));

} else {
var statearr_34206_35818 = state_34133__$1;
(statearr_34206_35818[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (18))){
var inst_34121 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34209_35824 = state_34133__$1;
(statearr_34209_35824[(2)] = inst_34121);

(statearr_34209_35824[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (8))){
var inst_34094 = (state_34133[(13)]);
var state_34133__$1 = state_34133;
var statearr_34210_35826 = state_34133__$1;
(statearr_34210_35826[(2)] = inst_34094);

(statearr_34210_35826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30668__auto__ = null;
var cljs$core$async$state_machine__30668__auto____0 = (function (){
var statearr_34211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34211[(0)] = cljs$core$async$state_machine__30668__auto__);

(statearr_34211[(1)] = (1));

return statearr_34211;
});
var cljs$core$async$state_machine__30668__auto____1 = (function (state_34133){
while(true){
var ret_value__30669__auto__ = (function (){try{while(true){
var result__30670__auto__ = switch__30667__auto__(state_34133);
if(cljs.core.keyword_identical_QMARK_(result__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30670__auto__;
}
break;
}
}catch (e34213){var ex__30671__auto__ = e34213;
var statearr_34217_35845 = state_34133;
(statearr_34217_35845[(2)] = ex__30671__auto__);


if(cljs.core.seq((state_34133[(4)]))){
var statearr_34223_35847 = state_34133;
(statearr_34223_35847[(1)] = cljs.core.first((state_34133[(4)])));

} else {
throw ex__30671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35848 = state_34133;
state_34133 = G__35848;
continue;
} else {
return ret_value__30669__auto__;
}
break;
}
});
cljs$core$async$state_machine__30668__auto__ = function(state_34133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30668__auto____1.call(this,state_34133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30668__auto____0;
cljs$core$async$state_machine__30668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30668__auto____1;
return cljs$core$async$state_machine__30668__auto__;
})()
})();
var state__30868__auto__ = (function (){var statearr_34226 = f__30867__auto__();
(statearr_34226[(6)] = c__30866__auto___35737);

return statearr_34226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30868__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
