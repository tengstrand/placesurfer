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
cljs.core.async.t_cljs$core$async31052 = (function (f,blockable,meta31053){
this.f = f;
this.blockable = blockable;
this.meta31053 = meta31053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31054,meta31053__$1){
var self__ = this;
var _31054__$1 = this;
return (new cljs.core.async.t_cljs$core$async31052(self__.f,self__.blockable,meta31053__$1));
}));

(cljs.core.async.t_cljs$core$async31052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31054){
var self__ = this;
var _31054__$1 = this;
return self__.meta31053;
}));

(cljs.core.async.t_cljs$core$async31052.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31052.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31053","meta31053",524817150,null)], null);
}));

(cljs.core.async.t_cljs$core$async31052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31052");

(cljs.core.async.t_cljs$core$async31052.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31052.
 */
cljs.core.async.__GT_t_cljs$core$async31052 = (function cljs$core$async$__GT_t_cljs$core$async31052(f,blockable,meta31053){
return (new cljs.core.async.t_cljs$core$async31052(f,blockable,meta31053));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31046 = arguments.length;
switch (G__31046) {
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
return (new cljs.core.async.t_cljs$core$async31052(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31064 = arguments.length;
switch (G__31064) {
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
var G__31075 = arguments.length;
switch (G__31075) {
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
var G__31101 = arguments.length;
switch (G__31101) {
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
var val_34556 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34556) : fn1.call(null,val_34556));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34556) : fn1.call(null,val_34556));
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
var G__31110 = arguments.length;
switch (G__31110) {
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
var n__5616__auto___34561 = n;
var x_34562 = (0);
while(true){
if((x_34562 < n__5616__auto___34561)){
(a[x_34562] = x_34562);

var G__34563 = (x_34562 + (1));
x_34562 = G__34563;
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
cljs.core.async.t_cljs$core$async31178 = (function (flag,meta31179){
this.flag = flag;
this.meta31179 = meta31179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31180,meta31179__$1){
var self__ = this;
var _31180__$1 = this;
return (new cljs.core.async.t_cljs$core$async31178(self__.flag,meta31179__$1));
}));

(cljs.core.async.t_cljs$core$async31178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31180){
var self__ = this;
var _31180__$1 = this;
return self__.meta31179;
}));

(cljs.core.async.t_cljs$core$async31178.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31178.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31179","meta31179",-1889229100,null)], null);
}));

(cljs.core.async.t_cljs$core$async31178.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31178");

(cljs.core.async.t_cljs$core$async31178.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31178");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31178.
 */
cljs.core.async.__GT_t_cljs$core$async31178 = (function cljs$core$async$__GT_t_cljs$core$async31178(flag,meta31179){
return (new cljs.core.async.t_cljs$core$async31178(flag,meta31179));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31178(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31208 = (function (flag,cb,meta31209){
this.flag = flag;
this.cb = cb;
this.meta31209 = meta31209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31210,meta31209__$1){
var self__ = this;
var _31210__$1 = this;
return (new cljs.core.async.t_cljs$core$async31208(self__.flag,self__.cb,meta31209__$1));
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31210){
var self__ = this;
var _31210__$1 = this;
return self__.meta31209;
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31209","meta31209",577914476,null)], null);
}));

(cljs.core.async.t_cljs$core$async31208.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31208");

(cljs.core.async.t_cljs$core$async31208.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31208");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31208.
 */
cljs.core.async.__GT_t_cljs$core$async31208 = (function cljs$core$async$__GT_t_cljs$core$async31208(flag,cb,meta31209){
return (new cljs.core.async.t_cljs$core$async31208(flag,cb,meta31209));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31208(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_34571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34571)){
if((!(((port_34571.cljs$core$IFn$_invoke$arity$1 ? port_34571.cljs$core$IFn$_invoke$arity$1((1)) : port_34571.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34572 = (i + (1));
i = G__34572;
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
return (function (p1__31229_SHARP_){
var G__31235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31229_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31235) : fret.call(null,G__31235));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31230_SHARP_){
var G__31236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31230_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31236) : fret.call(null,G__31236));
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
var G__34583 = (i + (1));
i = G__34583;
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
var len__5749__auto___34584 = arguments.length;
var i__5750__auto___34585 = (0);
while(true){
if((i__5750__auto___34585 < len__5749__auto___34584)){
args__5755__auto__.push((arguments[i__5750__auto___34585]));

var G__34586 = (i__5750__auto___34585 + (1));
i__5750__auto___34585 = G__34586;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31254){
var map__31255 = p__31254;
var map__31255__$1 = cljs.core.__destructure_map(map__31255);
var opts = map__31255__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31248){
var G__31249 = cljs.core.first(seq31248);
var seq31248__$1 = cljs.core.next(seq31248);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31249,seq31248__$1);
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
var G__31271 = arguments.length;
switch (G__31271) {
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
var c__30949__auto___34588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_31428){
var state_val_31432 = (state_31428[(1)]);
if((state_val_31432 === (7))){
var inst_31411 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31479_34589 = state_31428__$1;
(statearr_31479_34589[(2)] = inst_31411);

(statearr_31479_34589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (1))){
var state_31428__$1 = state_31428;
var statearr_31481_34590 = state_31428__$1;
(statearr_31481_34590[(2)] = null);

(statearr_31481_34590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (4))){
var inst_31370 = (state_31428[(7)]);
var inst_31370__$1 = (state_31428[(2)]);
var inst_31378 = (inst_31370__$1 == null);
var state_31428__$1 = (function (){var statearr_31489 = state_31428;
(statearr_31489[(7)] = inst_31370__$1);

return statearr_31489;
})();
if(cljs.core.truth_(inst_31378)){
var statearr_31490_34591 = state_31428__$1;
(statearr_31490_34591[(1)] = (5));

} else {
var statearr_31491_34592 = state_31428__$1;
(statearr_31491_34592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (13))){
var state_31428__$1 = state_31428;
var statearr_31507_34593 = state_31428__$1;
(statearr_31507_34593[(2)] = null);

(statearr_31507_34593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (6))){
var inst_31370 = (state_31428[(7)]);
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31428__$1,(11),to,inst_31370);
} else {
if((state_val_31432 === (3))){
var inst_31418 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31428__$1,inst_31418);
} else {
if((state_val_31432 === (12))){
var state_31428__$1 = state_31428;
var statearr_31527_34597 = state_31428__$1;
(statearr_31527_34597[(2)] = null);

(statearr_31527_34597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (2))){
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31428__$1,(4),from);
} else {
if((state_val_31432 === (11))){
var inst_31395 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
if(cljs.core.truth_(inst_31395)){
var statearr_31531_34601 = state_31428__$1;
(statearr_31531_34601[(1)] = (12));

} else {
var statearr_31532_34602 = state_31428__$1;
(statearr_31532_34602[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (9))){
var state_31428__$1 = state_31428;
var statearr_31537_34603 = state_31428__$1;
(statearr_31537_34603[(2)] = null);

(statearr_31537_34603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (5))){
var state_31428__$1 = state_31428;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31540_34604 = state_31428__$1;
(statearr_31540_34604[(1)] = (8));

} else {
var statearr_31542_34605 = state_31428__$1;
(statearr_31542_34605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (14))){
var inst_31409 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31543_34606 = state_31428__$1;
(statearr_31543_34606[(2)] = inst_31409);

(statearr_31543_34606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (10))){
var inst_31392 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31548_34607 = state_31428__$1;
(statearr_31548_34607[(2)] = inst_31392);

(statearr_31548_34607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (8))){
var inst_31387 = cljs.core.async.close_BANG_(to);
var state_31428__$1 = state_31428;
var statearr_31556_34609 = state_31428__$1;
(statearr_31556_34609[(2)] = inst_31387);

(statearr_31556_34609[(1)] = (10));


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
var cljs$core$async$state_machine__30671__auto__ = null;
var cljs$core$async$state_machine__30671__auto____0 = (function (){
var statearr_31564 = [null,null,null,null,null,null,null,null];
(statearr_31564[(0)] = cljs$core$async$state_machine__30671__auto__);

(statearr_31564[(1)] = (1));

return statearr_31564;
});
var cljs$core$async$state_machine__30671__auto____1 = (function (state_31428){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_31428);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e31573){var ex__30674__auto__ = e31573;
var statearr_31575_34610 = state_31428;
(statearr_31575_34610[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_31428[(4)]))){
var statearr_31577_34611 = state_31428;
(statearr_31577_34611[(1)] = cljs.core.first((state_31428[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34612 = state_31428;
state_31428 = G__34612;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$state_machine__30671__auto__ = function(state_31428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30671__auto____1.call(this,state_31428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30671__auto____0;
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30671__auto____1;
return cljs$core$async$state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_31579 = f__30950__auto__();
(statearr_31579[(6)] = c__30949__auto___34588);

return statearr_31579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
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
var process__$1 = (function (p__31612){
var vec__31614 = p__31612;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31614,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31614,(1),null);
var job = vec__31614;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30949__auto___34613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_31627){
var state_val_31628 = (state_31627[(1)]);
if((state_val_31628 === (1))){
var state_31627__$1 = state_31627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31627__$1,(2),res,v);
} else {
if((state_val_31628 === (2))){
var inst_31623 = (state_31627[(2)]);
var inst_31624 = cljs.core.async.close_BANG_(res);
var state_31627__$1 = (function (){var statearr_31636 = state_31627;
(statearr_31636[(7)] = inst_31623);

return statearr_31636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31627__$1,inst_31624);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0 = (function (){
var statearr_31637 = [null,null,null,null,null,null,null,null];
(statearr_31637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__);

(statearr_31637[(1)] = (1));

return statearr_31637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1 = (function (state_31627){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_31627);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e31638){var ex__30674__auto__ = e31638;
var statearr_31639_34620 = state_31627;
(statearr_31639_34620[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_31627[(4)]))){
var statearr_31640_34623 = state_31627;
(statearr_31640_34623[(1)] = cljs.core.first((state_31627[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34624 = state_31627;
state_31627 = G__34624;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__ = function(state_31627){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1.call(this,state_31627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_31642 = f__30950__auto__();
(statearr_31642[(6)] = c__30949__auto___34613);

return statearr_31642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31644){
var vec__31645 = p__31644;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31645,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31645,(1),null);
var job = vec__31645;
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
var n__5616__auto___34631 = n;
var __34632 = (0);
while(true){
if((__34632 < n__5616__auto___34631)){
var G__31650_34633 = type;
var G__31650_34634__$1 = (((G__31650_34633 instanceof cljs.core.Keyword))?G__31650_34633.fqn:null);
switch (G__31650_34634__$1) {
case "compute":
var c__30949__auto___34636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34632,c__30949__auto___34636,G__31650_34633,G__31650_34634__$1,n__5616__auto___34631,jobs,results,process__$1,async){
return (function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = ((function (__34632,c__30949__auto___34636,G__31650_34633,G__31650_34634__$1,n__5616__auto___34631,jobs,results,process__$1,async){
return (function (state_31665){
var state_val_31666 = (state_31665[(1)]);
if((state_val_31666 === (1))){
var state_31665__$1 = state_31665;
var statearr_31667_34642 = state_31665__$1;
(statearr_31667_34642[(2)] = null);

(statearr_31667_34642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (2))){
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31665__$1,(4),jobs);
} else {
if((state_val_31666 === (3))){
var inst_31663 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31665__$1,inst_31663);
} else {
if((state_val_31666 === (4))){
var inst_31655 = (state_31665[(2)]);
var inst_31656 = process__$1(inst_31655);
var state_31665__$1 = state_31665;
if(cljs.core.truth_(inst_31656)){
var statearr_31668_34646 = state_31665__$1;
(statearr_31668_34646[(1)] = (5));

} else {
var statearr_31669_34649 = state_31665__$1;
(statearr_31669_34649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (5))){
var state_31665__$1 = state_31665;
var statearr_31670_34650 = state_31665__$1;
(statearr_31670_34650[(2)] = null);

(statearr_31670_34650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (6))){
var state_31665__$1 = state_31665;
var statearr_31674_34660 = state_31665__$1;
(statearr_31674_34660[(2)] = null);

(statearr_31674_34660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (7))){
var inst_31661 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31675_34661 = state_31665__$1;
(statearr_31675_34661[(2)] = inst_31661);

(statearr_31675_34661[(1)] = (3));


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
});})(__34632,c__30949__auto___34636,G__31650_34633,G__31650_34634__$1,n__5616__auto___34631,jobs,results,process__$1,async))
;
return ((function (__34632,switch__30670__auto__,c__30949__auto___34636,G__31650_34633,G__31650_34634__$1,n__5616__auto___34631,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0 = (function (){
var statearr_31681 = [null,null,null,null,null,null,null];
(statearr_31681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__);

(statearr_31681[(1)] = (1));

return statearr_31681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1 = (function (state_31665){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_31665);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e31684){var ex__30674__auto__ = e31684;
var statearr_31685_34673 = state_31665;
(statearr_31685_34673[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_31665[(4)]))){
var statearr_31686_34688 = state_31665;
(statearr_31686_34688[(1)] = cljs.core.first((state_31665[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34693 = state_31665;
state_31665 = G__34693;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__ = function(state_31665){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1.call(this,state_31665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__;
})()
;})(__34632,switch__30670__auto__,c__30949__auto___34636,G__31650_34633,G__31650_34634__$1,n__5616__auto___34631,jobs,results,process__$1,async))
})();
var state__30951__auto__ = (function (){var statearr_31693 = f__30950__auto__();
(statearr_31693[(6)] = c__30949__auto___34636);

return statearr_31693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
});})(__34632,c__30949__auto___34636,G__31650_34633,G__31650_34634__$1,n__5616__auto___34631,jobs,results,process__$1,async))
);


break;
case "async":
var c__30949__auto___34694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34632,c__30949__auto___34694,G__31650_34633,G__31650_34634__$1,n__5616__auto___34631,jobs,results,process__$1,async){
return (function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = ((function (__34632,c__30949__auto___34694,G__31650_34633,G__31650_34634__$1,n__5616__auto___34631,jobs,results,process__$1,async){
return (function (state_31713){
var state_val_31714 = (state_31713[(1)]);
if((state_val_31714 === (1))){
var state_31713__$1 = state_31713;
var statearr_31722_34699 = state_31713__$1;
(statearr_31722_34699[(2)] = null);

(statearr_31722_34699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (2))){
var state_31713__$1 = state_31713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31713__$1,(4),jobs);
} else {
if((state_val_31714 === (3))){
var inst_31711 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31713__$1,inst_31711);
} else {
if((state_val_31714 === (4))){
var inst_31702 = (state_31713[(2)]);
var inst_31704 = async(inst_31702);
var state_31713__$1 = state_31713;
if(cljs.core.truth_(inst_31704)){
var statearr_31731_34703 = state_31713__$1;
(statearr_31731_34703[(1)] = (5));

} else {
var statearr_31732_34704 = state_31713__$1;
(statearr_31732_34704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (5))){
var state_31713__$1 = state_31713;
var statearr_31733_34705 = state_31713__$1;
(statearr_31733_34705[(2)] = null);

(statearr_31733_34705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (6))){
var state_31713__$1 = state_31713;
var statearr_31741_34706 = state_31713__$1;
(statearr_31741_34706[(2)] = null);

(statearr_31741_34706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (7))){
var inst_31709 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31742_34707 = state_31713__$1;
(statearr_31742_34707[(2)] = inst_31709);

(statearr_31742_34707[(1)] = (3));


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
});})(__34632,c__30949__auto___34694,G__31650_34633,G__31650_34634__$1,n__5616__auto___34631,jobs,results,process__$1,async))
;
return ((function (__34632,switch__30670__auto__,c__30949__auto___34694,G__31650_34633,G__31650_34634__$1,n__5616__auto___34631,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0 = (function (){
var statearr_31745 = [null,null,null,null,null,null,null];
(statearr_31745[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__);

(statearr_31745[(1)] = (1));

return statearr_31745;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1 = (function (state_31713){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_31713);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e31754){var ex__30674__auto__ = e31754;
var statearr_31755_34715 = state_31713;
(statearr_31755_34715[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_31713[(4)]))){
var statearr_31756_34716 = state_31713;
(statearr_31756_34716[(1)] = cljs.core.first((state_31713[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34717 = state_31713;
state_31713 = G__34717;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__ = function(state_31713){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1.call(this,state_31713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__;
})()
;})(__34632,switch__30670__auto__,c__30949__auto___34694,G__31650_34633,G__31650_34634__$1,n__5616__auto___34631,jobs,results,process__$1,async))
})();
var state__30951__auto__ = (function (){var statearr_31767 = f__30950__auto__();
(statearr_31767[(6)] = c__30949__auto___34694);

return statearr_31767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
});})(__34632,c__30949__auto___34694,G__31650_34633,G__31650_34634__$1,n__5616__auto___34631,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31650_34634__$1)].join('')));

}

var G__34718 = (__34632 + (1));
__34632 = G__34718;
continue;
} else {
}
break;
}

var c__30949__auto___34719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_31810){
var state_val_31811 = (state_31810[(1)]);
if((state_val_31811 === (7))){
var inst_31802 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
var statearr_31821_34723 = state_31810__$1;
(statearr_31821_34723[(2)] = inst_31802);

(statearr_31821_34723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (1))){
var state_31810__$1 = state_31810;
var statearr_31823_34724 = state_31810__$1;
(statearr_31823_34724[(2)] = null);

(statearr_31823_34724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (4))){
var inst_31774 = (state_31810[(7)]);
var inst_31774__$1 = (state_31810[(2)]);
var inst_31775 = (inst_31774__$1 == null);
var state_31810__$1 = (function (){var statearr_31825 = state_31810;
(statearr_31825[(7)] = inst_31774__$1);

return statearr_31825;
})();
if(cljs.core.truth_(inst_31775)){
var statearr_31826_34728 = state_31810__$1;
(statearr_31826_34728[(1)] = (5));

} else {
var statearr_31827_34729 = state_31810__$1;
(statearr_31827_34729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (6))){
var inst_31774 = (state_31810[(7)]);
var inst_31779 = (state_31810[(8)]);
var inst_31779__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31786 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31794 = [inst_31774,inst_31779__$1];
var inst_31795 = (new cljs.core.PersistentVector(null,2,(5),inst_31786,inst_31794,null));
var state_31810__$1 = (function (){var statearr_31829 = state_31810;
(statearr_31829[(8)] = inst_31779__$1);

return statearr_31829;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31810__$1,(8),jobs,inst_31795);
} else {
if((state_val_31811 === (3))){
var inst_31804 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31810__$1,inst_31804);
} else {
if((state_val_31811 === (2))){
var state_31810__$1 = state_31810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31810__$1,(4),from);
} else {
if((state_val_31811 === (9))){
var inst_31799 = (state_31810[(2)]);
var state_31810__$1 = (function (){var statearr_31831 = state_31810;
(statearr_31831[(9)] = inst_31799);

return statearr_31831;
})();
var statearr_31832_34730 = state_31810__$1;
(statearr_31832_34730[(2)] = null);

(statearr_31832_34730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (5))){
var inst_31777 = cljs.core.async.close_BANG_(jobs);
var state_31810__$1 = state_31810;
var statearr_31833_34734 = state_31810__$1;
(statearr_31833_34734[(2)] = inst_31777);

(statearr_31833_34734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (8))){
var inst_31779 = (state_31810[(8)]);
var inst_31797 = (state_31810[(2)]);
var state_31810__$1 = (function (){var statearr_31834 = state_31810;
(statearr_31834[(10)] = inst_31797);

return statearr_31834;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31810__$1,(9),results,inst_31779);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0 = (function (){
var statearr_31838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__);

(statearr_31838[(1)] = (1));

return statearr_31838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1 = (function (state_31810){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_31810);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e31842){var ex__30674__auto__ = e31842;
var statearr_31844_34738 = state_31810;
(statearr_31844_34738[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_31810[(4)]))){
var statearr_31847_34739 = state_31810;
(statearr_31847_34739[(1)] = cljs.core.first((state_31810[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34743 = state_31810;
state_31810 = G__34743;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__ = function(state_31810){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1.call(this,state_31810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_31853 = f__30950__auto__();
(statearr_31853[(6)] = c__30949__auto___34719);

return statearr_31853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
}));


var c__30949__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_31901){
var state_val_31906 = (state_31901[(1)]);
if((state_val_31906 === (7))){
var inst_31896 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
var statearr_31919_34747 = state_31901__$1;
(statearr_31919_34747[(2)] = inst_31896);

(statearr_31919_34747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (20))){
var state_31901__$1 = state_31901;
var statearr_31920_34748 = state_31901__$1;
(statearr_31920_34748[(2)] = null);

(statearr_31920_34748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (1))){
var state_31901__$1 = state_31901;
var statearr_31921_34749 = state_31901__$1;
(statearr_31921_34749[(2)] = null);

(statearr_31921_34749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (4))){
var inst_31856 = (state_31901[(7)]);
var inst_31856__$1 = (state_31901[(2)]);
var inst_31857 = (inst_31856__$1 == null);
var state_31901__$1 = (function (){var statearr_31922 = state_31901;
(statearr_31922[(7)] = inst_31856__$1);

return statearr_31922;
})();
if(cljs.core.truth_(inst_31857)){
var statearr_31923_34750 = state_31901__$1;
(statearr_31923_34750[(1)] = (5));

} else {
var statearr_31924_34751 = state_31901__$1;
(statearr_31924_34751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (15))){
var inst_31878 = (state_31901[(8)]);
var state_31901__$1 = state_31901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31901__$1,(18),to,inst_31878);
} else {
if((state_val_31906 === (21))){
var inst_31891 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
var statearr_31925_34752 = state_31901__$1;
(statearr_31925_34752[(2)] = inst_31891);

(statearr_31925_34752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (13))){
var inst_31893 = (state_31901[(2)]);
var state_31901__$1 = (function (){var statearr_31926 = state_31901;
(statearr_31926[(9)] = inst_31893);

return statearr_31926;
})();
var statearr_31927_34753 = state_31901__$1;
(statearr_31927_34753[(2)] = null);

(statearr_31927_34753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (6))){
var inst_31856 = (state_31901[(7)]);
var state_31901__$1 = state_31901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31901__$1,(11),inst_31856);
} else {
if((state_val_31906 === (17))){
var inst_31886 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
if(cljs.core.truth_(inst_31886)){
var statearr_31929_34756 = state_31901__$1;
(statearr_31929_34756[(1)] = (19));

} else {
var statearr_31930_34757 = state_31901__$1;
(statearr_31930_34757[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (3))){
var inst_31898 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31901__$1,inst_31898);
} else {
if((state_val_31906 === (12))){
var inst_31867 = (state_31901[(10)]);
var state_31901__$1 = state_31901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31901__$1,(14),inst_31867);
} else {
if((state_val_31906 === (2))){
var state_31901__$1 = state_31901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31901__$1,(4),results);
} else {
if((state_val_31906 === (19))){
var state_31901__$1 = state_31901;
var statearr_31931_34758 = state_31901__$1;
(statearr_31931_34758[(2)] = null);

(statearr_31931_34758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (11))){
var inst_31867 = (state_31901[(2)]);
var state_31901__$1 = (function (){var statearr_31934 = state_31901;
(statearr_31934[(10)] = inst_31867);

return statearr_31934;
})();
var statearr_31936_34762 = state_31901__$1;
(statearr_31936_34762[(2)] = null);

(statearr_31936_34762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (9))){
var state_31901__$1 = state_31901;
var statearr_31938_34763 = state_31901__$1;
(statearr_31938_34763[(2)] = null);

(statearr_31938_34763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (5))){
var state_31901__$1 = state_31901;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31939_34766 = state_31901__$1;
(statearr_31939_34766[(1)] = (8));

} else {
var statearr_31940_34767 = state_31901__$1;
(statearr_31940_34767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (14))){
var inst_31878 = (state_31901[(8)]);
var inst_31880 = (state_31901[(11)]);
var inst_31878__$1 = (state_31901[(2)]);
var inst_31879 = (inst_31878__$1 == null);
var inst_31880__$1 = cljs.core.not(inst_31879);
var state_31901__$1 = (function (){var statearr_31942 = state_31901;
(statearr_31942[(8)] = inst_31878__$1);

(statearr_31942[(11)] = inst_31880__$1);

return statearr_31942;
})();
if(inst_31880__$1){
var statearr_31943_34768 = state_31901__$1;
(statearr_31943_34768[(1)] = (15));

} else {
var statearr_31944_34769 = state_31901__$1;
(statearr_31944_34769[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (16))){
var inst_31880 = (state_31901[(11)]);
var state_31901__$1 = state_31901;
var statearr_31945_34770 = state_31901__$1;
(statearr_31945_34770[(2)] = inst_31880);

(statearr_31945_34770[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (10))){
var inst_31864 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
var statearr_31946_34772 = state_31901__$1;
(statearr_31946_34772[(2)] = inst_31864);

(statearr_31946_34772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (18))){
var inst_31883 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
var statearr_31947_34773 = state_31901__$1;
(statearr_31947_34773[(2)] = inst_31883);

(statearr_31947_34773[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (8))){
var inst_31861 = cljs.core.async.close_BANG_(to);
var state_31901__$1 = state_31901;
var statearr_31948_34774 = state_31901__$1;
(statearr_31948_34774[(2)] = inst_31861);

(statearr_31948_34774[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0 = (function (){
var statearr_31949 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__);

(statearr_31949[(1)] = (1));

return statearr_31949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1 = (function (state_31901){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_31901);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e31951){var ex__30674__auto__ = e31951;
var statearr_31952_34782 = state_31901;
(statearr_31952_34782[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_31901[(4)]))){
var statearr_31953_34783 = state_31901;
(statearr_31953_34783[(1)] = cljs.core.first((state_31901[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34784 = state_31901;
state_31901 = G__34784;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__ = function(state_31901){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1.call(this,state_31901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_31955 = f__30950__auto__();
(statearr_31955[(6)] = c__30949__auto__);

return statearr_31955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
}));

return c__30949__auto__;
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
var G__31965 = arguments.length;
switch (G__31965) {
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
var G__31971 = arguments.length;
switch (G__31971) {
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
var G__32000 = arguments.length;
switch (G__32000) {
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
var c__30949__auto___34808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_32033){
var state_val_32036 = (state_32033[(1)]);
if((state_val_32036 === (7))){
var inst_32029 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
var statearr_32045_34815 = state_32033__$1;
(statearr_32045_34815[(2)] = inst_32029);

(statearr_32045_34815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (1))){
var state_32033__$1 = state_32033;
var statearr_32046_34819 = state_32033__$1;
(statearr_32046_34819[(2)] = null);

(statearr_32046_34819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (4))){
var inst_32010 = (state_32033[(7)]);
var inst_32010__$1 = (state_32033[(2)]);
var inst_32011 = (inst_32010__$1 == null);
var state_32033__$1 = (function (){var statearr_32048 = state_32033;
(statearr_32048[(7)] = inst_32010__$1);

return statearr_32048;
})();
if(cljs.core.truth_(inst_32011)){
var statearr_32049_34823 = state_32033__$1;
(statearr_32049_34823[(1)] = (5));

} else {
var statearr_32050_34827 = state_32033__$1;
(statearr_32050_34827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (13))){
var state_32033__$1 = state_32033;
var statearr_32051_34835 = state_32033__$1;
(statearr_32051_34835[(2)] = null);

(statearr_32051_34835[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (6))){
var inst_32010 = (state_32033[(7)]);
var inst_32016 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32010) : p.call(null,inst_32010));
var state_32033__$1 = state_32033;
if(cljs.core.truth_(inst_32016)){
var statearr_32055_34851 = state_32033__$1;
(statearr_32055_34851[(1)] = (9));

} else {
var statearr_32056_34855 = state_32033__$1;
(statearr_32056_34855[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (3))){
var inst_32031 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32033__$1,inst_32031);
} else {
if((state_val_32036 === (12))){
var state_32033__$1 = state_32033;
var statearr_32058_34856 = state_32033__$1;
(statearr_32058_34856[(2)] = null);

(statearr_32058_34856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (2))){
var state_32033__$1 = state_32033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32033__$1,(4),ch);
} else {
if((state_val_32036 === (11))){
var inst_32010 = (state_32033[(7)]);
var inst_32020 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32033__$1,(8),inst_32020,inst_32010);
} else {
if((state_val_32036 === (9))){
var state_32033__$1 = state_32033;
var statearr_32059_34857 = state_32033__$1;
(statearr_32059_34857[(2)] = tc);

(statearr_32059_34857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (5))){
var inst_32013 = cljs.core.async.close_BANG_(tc);
var inst_32014 = cljs.core.async.close_BANG_(fc);
var state_32033__$1 = (function (){var statearr_32060 = state_32033;
(statearr_32060[(8)] = inst_32013);

return statearr_32060;
})();
var statearr_32061_34858 = state_32033__$1;
(statearr_32061_34858[(2)] = inst_32014);

(statearr_32061_34858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (14))){
var inst_32027 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
var statearr_32064_34859 = state_32033__$1;
(statearr_32064_34859[(2)] = inst_32027);

(statearr_32064_34859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (10))){
var state_32033__$1 = state_32033;
var statearr_32065_34860 = state_32033__$1;
(statearr_32065_34860[(2)] = fc);

(statearr_32065_34860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (8))){
var inst_32022 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
if(cljs.core.truth_(inst_32022)){
var statearr_32067_34861 = state_32033__$1;
(statearr_32067_34861[(1)] = (12));

} else {
var statearr_32068_34862 = state_32033__$1;
(statearr_32068_34862[(1)] = (13));

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
var cljs$core$async$state_machine__30671__auto__ = null;
var cljs$core$async$state_machine__30671__auto____0 = (function (){
var statearr_32070 = [null,null,null,null,null,null,null,null,null];
(statearr_32070[(0)] = cljs$core$async$state_machine__30671__auto__);

(statearr_32070[(1)] = (1));

return statearr_32070;
});
var cljs$core$async$state_machine__30671__auto____1 = (function (state_32033){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_32033);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e32073){var ex__30674__auto__ = e32073;
var statearr_32074_34863 = state_32033;
(statearr_32074_34863[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_32033[(4)]))){
var statearr_32075_34864 = state_32033;
(statearr_32075_34864[(1)] = cljs.core.first((state_32033[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34866 = state_32033;
state_32033 = G__34866;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$state_machine__30671__auto__ = function(state_32033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30671__auto____1.call(this,state_32033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30671__auto____0;
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30671__auto____1;
return cljs$core$async$state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_32079 = f__30950__auto__();
(statearr_32079[(6)] = c__30949__auto___34808);

return statearr_32079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
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
var c__30949__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_32130){
var state_val_32131 = (state_32130[(1)]);
if((state_val_32131 === (7))){
var inst_32124 = (state_32130[(2)]);
var state_32130__$1 = state_32130;
var statearr_32134_34867 = state_32130__$1;
(statearr_32134_34867[(2)] = inst_32124);

(statearr_32134_34867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (1))){
var inst_32101 = init;
var inst_32103 = inst_32101;
var state_32130__$1 = (function (){var statearr_32137 = state_32130;
(statearr_32137[(7)] = inst_32103);

return statearr_32137;
})();
var statearr_32138_34869 = state_32130__$1;
(statearr_32138_34869[(2)] = null);

(statearr_32138_34869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (4))){
var inst_32108 = (state_32130[(8)]);
var inst_32108__$1 = (state_32130[(2)]);
var inst_32109 = (inst_32108__$1 == null);
var state_32130__$1 = (function (){var statearr_32140 = state_32130;
(statearr_32140[(8)] = inst_32108__$1);

return statearr_32140;
})();
if(cljs.core.truth_(inst_32109)){
var statearr_32142_34875 = state_32130__$1;
(statearr_32142_34875[(1)] = (5));

} else {
var statearr_32145_34876 = state_32130__$1;
(statearr_32145_34876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (6))){
var inst_32103 = (state_32130[(7)]);
var inst_32108 = (state_32130[(8)]);
var inst_32112 = (state_32130[(9)]);
var inst_32112__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32103,inst_32108) : f.call(null,inst_32103,inst_32108));
var inst_32115 = cljs.core.reduced_QMARK_(inst_32112__$1);
var state_32130__$1 = (function (){var statearr_32154 = state_32130;
(statearr_32154[(9)] = inst_32112__$1);

return statearr_32154;
})();
if(inst_32115){
var statearr_32160_34879 = state_32130__$1;
(statearr_32160_34879[(1)] = (8));

} else {
var statearr_32162_34882 = state_32130__$1;
(statearr_32162_34882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (3))){
var inst_32127 = (state_32130[(2)]);
var state_32130__$1 = state_32130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32130__$1,inst_32127);
} else {
if((state_val_32131 === (2))){
var state_32130__$1 = state_32130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32130__$1,(4),ch);
} else {
if((state_val_32131 === (9))){
var inst_32112 = (state_32130[(9)]);
var inst_32103 = inst_32112;
var state_32130__$1 = (function (){var statearr_32169 = state_32130;
(statearr_32169[(7)] = inst_32103);

return statearr_32169;
})();
var statearr_32170_34887 = state_32130__$1;
(statearr_32170_34887[(2)] = null);

(statearr_32170_34887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (5))){
var inst_32103 = (state_32130[(7)]);
var state_32130__$1 = state_32130;
var statearr_32172_34891 = state_32130__$1;
(statearr_32172_34891[(2)] = inst_32103);

(statearr_32172_34891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (10))){
var inst_32122 = (state_32130[(2)]);
var state_32130__$1 = state_32130;
var statearr_32173_34892 = state_32130__$1;
(statearr_32173_34892[(2)] = inst_32122);

(statearr_32173_34892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (8))){
var inst_32112 = (state_32130[(9)]);
var inst_32117 = cljs.core.deref(inst_32112);
var state_32130__$1 = state_32130;
var statearr_32174_34893 = state_32130__$1;
(statearr_32174_34893[(2)] = inst_32117);

(statearr_32174_34893[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30671__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30671__auto____0 = (function (){
var statearr_32175 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32175[(0)] = cljs$core$async$reduce_$_state_machine__30671__auto__);

(statearr_32175[(1)] = (1));

return statearr_32175;
});
var cljs$core$async$reduce_$_state_machine__30671__auto____1 = (function (state_32130){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_32130);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e32180){var ex__30674__auto__ = e32180;
var statearr_32181_34898 = state_32130;
(statearr_32181_34898[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_32130[(4)]))){
var statearr_32183_34899 = state_32130;
(statearr_32183_34899[(1)] = cljs.core.first((state_32130[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34904 = state_32130;
state_32130 = G__34904;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30671__auto__ = function(state_32130){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30671__auto____1.call(this,state_32130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30671__auto____0;
cljs$core$async$reduce_$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30671__auto____1;
return cljs$core$async$reduce_$_state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_32185 = f__30950__auto__();
(statearr_32185[(6)] = c__30949__auto__);

return statearr_32185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
}));

return c__30949__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30949__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_32192){
var state_val_32193 = (state_32192[(1)]);
if((state_val_32193 === (1))){
var inst_32186 = cljs.core.async.reduce(f__$1,init,ch);
var state_32192__$1 = state_32192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32192__$1,(2),inst_32186);
} else {
if((state_val_32193 === (2))){
var inst_32188 = (state_32192[(2)]);
var inst_32189 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32188) : f__$1.call(null,inst_32188));
var state_32192__$1 = state_32192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32192__$1,inst_32189);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30671__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30671__auto____0 = (function (){
var statearr_32198 = [null,null,null,null,null,null,null];
(statearr_32198[(0)] = cljs$core$async$transduce_$_state_machine__30671__auto__);

(statearr_32198[(1)] = (1));

return statearr_32198;
});
var cljs$core$async$transduce_$_state_machine__30671__auto____1 = (function (state_32192){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_32192);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e32200){var ex__30674__auto__ = e32200;
var statearr_32201_34913 = state_32192;
(statearr_32201_34913[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_32192[(4)]))){
var statearr_32203_34914 = state_32192;
(statearr_32203_34914[(1)] = cljs.core.first((state_32192[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34917 = state_32192;
state_32192 = G__34917;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30671__auto__ = function(state_32192){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30671__auto____1.call(this,state_32192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30671__auto____0;
cljs$core$async$transduce_$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30671__auto____1;
return cljs$core$async$transduce_$_state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_32204 = f__30950__auto__();
(statearr_32204[(6)] = c__30949__auto__);

return statearr_32204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
}));

return c__30949__auto__;
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
var G__32207 = arguments.length;
switch (G__32207) {
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
var c__30949__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_32233){
var state_val_32234 = (state_32233[(1)]);
if((state_val_32234 === (7))){
var inst_32214 = (state_32233[(2)]);
var state_32233__$1 = state_32233;
var statearr_32235_34919 = state_32233__$1;
(statearr_32235_34919[(2)] = inst_32214);

(statearr_32235_34919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (1))){
var inst_32208 = cljs.core.seq(coll);
var inst_32209 = inst_32208;
var state_32233__$1 = (function (){var statearr_32237 = state_32233;
(statearr_32237[(7)] = inst_32209);

return statearr_32237;
})();
var statearr_32238_34920 = state_32233__$1;
(statearr_32238_34920[(2)] = null);

(statearr_32238_34920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (4))){
var inst_32209 = (state_32233[(7)]);
var inst_32212 = cljs.core.first(inst_32209);
var state_32233__$1 = state_32233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32233__$1,(7),ch,inst_32212);
} else {
if((state_val_32234 === (13))){
var inst_32226 = (state_32233[(2)]);
var state_32233__$1 = state_32233;
var statearr_32240_34921 = state_32233__$1;
(statearr_32240_34921[(2)] = inst_32226);

(statearr_32240_34921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (6))){
var inst_32217 = (state_32233[(2)]);
var state_32233__$1 = state_32233;
if(cljs.core.truth_(inst_32217)){
var statearr_32244_34922 = state_32233__$1;
(statearr_32244_34922[(1)] = (8));

} else {
var statearr_32246_34923 = state_32233__$1;
(statearr_32246_34923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (3))){
var inst_32230 = (state_32233[(2)]);
var state_32233__$1 = state_32233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32233__$1,inst_32230);
} else {
if((state_val_32234 === (12))){
var state_32233__$1 = state_32233;
var statearr_32247_34924 = state_32233__$1;
(statearr_32247_34924[(2)] = null);

(statearr_32247_34924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (2))){
var inst_32209 = (state_32233[(7)]);
var state_32233__$1 = state_32233;
if(cljs.core.truth_(inst_32209)){
var statearr_32248_34925 = state_32233__$1;
(statearr_32248_34925[(1)] = (4));

} else {
var statearr_32249_34926 = state_32233__$1;
(statearr_32249_34926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (11))){
var inst_32223 = cljs.core.async.close_BANG_(ch);
var state_32233__$1 = state_32233;
var statearr_32250_34927 = state_32233__$1;
(statearr_32250_34927[(2)] = inst_32223);

(statearr_32250_34927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (9))){
var state_32233__$1 = state_32233;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32251_34928 = state_32233__$1;
(statearr_32251_34928[(1)] = (11));

} else {
var statearr_32253_34929 = state_32233__$1;
(statearr_32253_34929[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (5))){
var inst_32209 = (state_32233[(7)]);
var state_32233__$1 = state_32233;
var statearr_32256_34930 = state_32233__$1;
(statearr_32256_34930[(2)] = inst_32209);

(statearr_32256_34930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (10))){
var inst_32228 = (state_32233[(2)]);
var state_32233__$1 = state_32233;
var statearr_32258_34932 = state_32233__$1;
(statearr_32258_34932[(2)] = inst_32228);

(statearr_32258_34932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (8))){
var inst_32209 = (state_32233[(7)]);
var inst_32219 = cljs.core.next(inst_32209);
var inst_32209__$1 = inst_32219;
var state_32233__$1 = (function (){var statearr_32259 = state_32233;
(statearr_32259[(7)] = inst_32209__$1);

return statearr_32259;
})();
var statearr_32260_34933 = state_32233__$1;
(statearr_32260_34933[(2)] = null);

(statearr_32260_34933[(1)] = (2));


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
var cljs$core$async$state_machine__30671__auto__ = null;
var cljs$core$async$state_machine__30671__auto____0 = (function (){
var statearr_32261 = [null,null,null,null,null,null,null,null];
(statearr_32261[(0)] = cljs$core$async$state_machine__30671__auto__);

(statearr_32261[(1)] = (1));

return statearr_32261;
});
var cljs$core$async$state_machine__30671__auto____1 = (function (state_32233){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_32233);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e32262){var ex__30674__auto__ = e32262;
var statearr_32263_34937 = state_32233;
(statearr_32263_34937[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_32233[(4)]))){
var statearr_32268_34938 = state_32233;
(statearr_32268_34938[(1)] = cljs.core.first((state_32233[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34939 = state_32233;
state_32233 = G__34939;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$state_machine__30671__auto__ = function(state_32233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30671__auto____1.call(this,state_32233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30671__auto____0;
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30671__auto____1;
return cljs$core$async$state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_32277 = f__30950__auto__();
(statearr_32277[(6)] = c__30949__auto__);

return statearr_32277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
}));

return c__30949__auto__;
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
var G__32283 = arguments.length;
switch (G__32283) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34953 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34953(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34954 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34954(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34961 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34961(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34964 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34964(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32313 = (function (ch,cs,meta32314){
this.ch = ch;
this.cs = cs;
this.meta32314 = meta32314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32315,meta32314__$1){
var self__ = this;
var _32315__$1 = this;
return (new cljs.core.async.t_cljs$core$async32313(self__.ch,self__.cs,meta32314__$1));
}));

(cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32315){
var self__ = this;
var _32315__$1 = this;
return self__.meta32314;
}));

(cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32314","meta32314",-1709701151,null)], null);
}));

(cljs.core.async.t_cljs$core$async32313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32313");

(cljs.core.async.t_cljs$core$async32313.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32313.
 */
cljs.core.async.__GT_t_cljs$core$async32313 = (function cljs$core$async$__GT_t_cljs$core$async32313(ch,cs,meta32314){
return (new cljs.core.async.t_cljs$core$async32313(ch,cs,meta32314));
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
var m = (new cljs.core.async.t_cljs$core$async32313(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30949__auto___34974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_32480){
var state_val_32481 = (state_32480[(1)]);
if((state_val_32481 === (7))){
var inst_32476 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32485_34976 = state_32480__$1;
(statearr_32485_34976[(2)] = inst_32476);

(statearr_32485_34976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (20))){
var inst_32370 = (state_32480[(7)]);
var inst_32388 = cljs.core.first(inst_32370);
var inst_32389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32388,(0),null);
var inst_32390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32388,(1),null);
var state_32480__$1 = (function (){var statearr_32489 = state_32480;
(statearr_32489[(8)] = inst_32389);

return statearr_32489;
})();
if(cljs.core.truth_(inst_32390)){
var statearr_32490_34980 = state_32480__$1;
(statearr_32490_34980[(1)] = (22));

} else {
var statearr_32491_34981 = state_32480__$1;
(statearr_32491_34981[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (27))){
var inst_32418 = (state_32480[(9)]);
var inst_32420 = (state_32480[(10)]);
var inst_32426 = (state_32480[(11)]);
var inst_32325 = (state_32480[(12)]);
var inst_32426__$1 = cljs.core._nth(inst_32418,inst_32420);
var inst_32427 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32426__$1,inst_32325,done);
var state_32480__$1 = (function (){var statearr_32494 = state_32480;
(statearr_32494[(11)] = inst_32426__$1);

return statearr_32494;
})();
if(cljs.core.truth_(inst_32427)){
var statearr_32496_34984 = state_32480__$1;
(statearr_32496_34984[(1)] = (30));

} else {
var statearr_32497_34985 = state_32480__$1;
(statearr_32497_34985[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (1))){
var state_32480__$1 = state_32480;
var statearr_32498_34988 = state_32480__$1;
(statearr_32498_34988[(2)] = null);

(statearr_32498_34988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (24))){
var inst_32370 = (state_32480[(7)]);
var inst_32395 = (state_32480[(2)]);
var inst_32396 = cljs.core.next(inst_32370);
var inst_32342 = inst_32396;
var inst_32343 = null;
var inst_32344 = (0);
var inst_32345 = (0);
var state_32480__$1 = (function (){var statearr_32500 = state_32480;
(statearr_32500[(13)] = inst_32395);

(statearr_32500[(14)] = inst_32342);

(statearr_32500[(15)] = inst_32343);

(statearr_32500[(16)] = inst_32344);

(statearr_32500[(17)] = inst_32345);

return statearr_32500;
})();
var statearr_32505_34999 = state_32480__$1;
(statearr_32505_34999[(2)] = null);

(statearr_32505_34999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (39))){
var state_32480__$1 = state_32480;
var statearr_32511_35000 = state_32480__$1;
(statearr_32511_35000[(2)] = null);

(statearr_32511_35000[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (4))){
var inst_32325 = (state_32480[(12)]);
var inst_32325__$1 = (state_32480[(2)]);
var inst_32326 = (inst_32325__$1 == null);
var state_32480__$1 = (function (){var statearr_32513 = state_32480;
(statearr_32513[(12)] = inst_32325__$1);

return statearr_32513;
})();
if(cljs.core.truth_(inst_32326)){
var statearr_32516_35001 = state_32480__$1;
(statearr_32516_35001[(1)] = (5));

} else {
var statearr_32518_35002 = state_32480__$1;
(statearr_32518_35002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (15))){
var inst_32345 = (state_32480[(17)]);
var inst_32342 = (state_32480[(14)]);
var inst_32343 = (state_32480[(15)]);
var inst_32344 = (state_32480[(16)]);
var inst_32364 = (state_32480[(2)]);
var inst_32365 = (inst_32345 + (1));
var tmp32508 = inst_32344;
var tmp32509 = inst_32343;
var tmp32510 = inst_32342;
var inst_32342__$1 = tmp32510;
var inst_32343__$1 = tmp32509;
var inst_32344__$1 = tmp32508;
var inst_32345__$1 = inst_32365;
var state_32480__$1 = (function (){var statearr_32519 = state_32480;
(statearr_32519[(18)] = inst_32364);

(statearr_32519[(14)] = inst_32342__$1);

(statearr_32519[(15)] = inst_32343__$1);

(statearr_32519[(16)] = inst_32344__$1);

(statearr_32519[(17)] = inst_32345__$1);

return statearr_32519;
})();
var statearr_32520_35005 = state_32480__$1;
(statearr_32520_35005[(2)] = null);

(statearr_32520_35005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (21))){
var inst_32399 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32524_35006 = state_32480__$1;
(statearr_32524_35006[(2)] = inst_32399);

(statearr_32524_35006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (31))){
var inst_32426 = (state_32480[(11)]);
var inst_32430 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32426);
var state_32480__$1 = state_32480;
var statearr_32531_35011 = state_32480__$1;
(statearr_32531_35011[(2)] = inst_32430);

(statearr_32531_35011[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (32))){
var inst_32420 = (state_32480[(10)]);
var inst_32417 = (state_32480[(19)]);
var inst_32418 = (state_32480[(9)]);
var inst_32419 = (state_32480[(20)]);
var inst_32432 = (state_32480[(2)]);
var inst_32433 = (inst_32420 + (1));
var tmp32521 = inst_32417;
var tmp32522 = inst_32418;
var tmp32523 = inst_32419;
var inst_32417__$1 = tmp32521;
var inst_32418__$1 = tmp32522;
var inst_32419__$1 = tmp32523;
var inst_32420__$1 = inst_32433;
var state_32480__$1 = (function (){var statearr_32536 = state_32480;
(statearr_32536[(21)] = inst_32432);

(statearr_32536[(19)] = inst_32417__$1);

(statearr_32536[(9)] = inst_32418__$1);

(statearr_32536[(20)] = inst_32419__$1);

(statearr_32536[(10)] = inst_32420__$1);

return statearr_32536;
})();
var statearr_32539_35013 = state_32480__$1;
(statearr_32539_35013[(2)] = null);

(statearr_32539_35013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (40))){
var inst_32449 = (state_32480[(22)]);
var inst_32453 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32449);
var state_32480__$1 = state_32480;
var statearr_32542_35014 = state_32480__$1;
(statearr_32542_35014[(2)] = inst_32453);

(statearr_32542_35014[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (33))){
var inst_32437 = (state_32480[(23)]);
var inst_32440 = cljs.core.chunked_seq_QMARK_(inst_32437);
var state_32480__$1 = state_32480;
if(inst_32440){
var statearr_32543_35016 = state_32480__$1;
(statearr_32543_35016[(1)] = (36));

} else {
var statearr_32545_35017 = state_32480__$1;
(statearr_32545_35017[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (13))){
var inst_32355 = (state_32480[(24)]);
var inst_32361 = cljs.core.async.close_BANG_(inst_32355);
var state_32480__$1 = state_32480;
var statearr_32550_35018 = state_32480__$1;
(statearr_32550_35018[(2)] = inst_32361);

(statearr_32550_35018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (22))){
var inst_32389 = (state_32480[(8)]);
var inst_32392 = cljs.core.async.close_BANG_(inst_32389);
var state_32480__$1 = state_32480;
var statearr_32551_35023 = state_32480__$1;
(statearr_32551_35023[(2)] = inst_32392);

(statearr_32551_35023[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (36))){
var inst_32437 = (state_32480[(23)]);
var inst_32444 = cljs.core.chunk_first(inst_32437);
var inst_32445 = cljs.core.chunk_rest(inst_32437);
var inst_32446 = cljs.core.count(inst_32444);
var inst_32417 = inst_32445;
var inst_32418 = inst_32444;
var inst_32419 = inst_32446;
var inst_32420 = (0);
var state_32480__$1 = (function (){var statearr_32558 = state_32480;
(statearr_32558[(19)] = inst_32417);

(statearr_32558[(9)] = inst_32418);

(statearr_32558[(20)] = inst_32419);

(statearr_32558[(10)] = inst_32420);

return statearr_32558;
})();
var statearr_32559_35027 = state_32480__$1;
(statearr_32559_35027[(2)] = null);

(statearr_32559_35027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (41))){
var inst_32437 = (state_32480[(23)]);
var inst_32455 = (state_32480[(2)]);
var inst_32456 = cljs.core.next(inst_32437);
var inst_32417 = inst_32456;
var inst_32418 = null;
var inst_32419 = (0);
var inst_32420 = (0);
var state_32480__$1 = (function (){var statearr_32577 = state_32480;
(statearr_32577[(25)] = inst_32455);

(statearr_32577[(19)] = inst_32417);

(statearr_32577[(9)] = inst_32418);

(statearr_32577[(20)] = inst_32419);

(statearr_32577[(10)] = inst_32420);

return statearr_32577;
})();
var statearr_32578_35028 = state_32480__$1;
(statearr_32578_35028[(2)] = null);

(statearr_32578_35028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (43))){
var state_32480__$1 = state_32480;
var statearr_32579_35029 = state_32480__$1;
(statearr_32579_35029[(2)] = null);

(statearr_32579_35029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (29))){
var inst_32464 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32580_35030 = state_32480__$1;
(statearr_32580_35030[(2)] = inst_32464);

(statearr_32580_35030[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (44))){
var inst_32473 = (state_32480[(2)]);
var state_32480__$1 = (function (){var statearr_32581 = state_32480;
(statearr_32581[(26)] = inst_32473);

return statearr_32581;
})();
var statearr_32582_35031 = state_32480__$1;
(statearr_32582_35031[(2)] = null);

(statearr_32582_35031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (6))){
var inst_32409 = (state_32480[(27)]);
var inst_32408 = cljs.core.deref(cs);
var inst_32409__$1 = cljs.core.keys(inst_32408);
var inst_32410 = cljs.core.count(inst_32409__$1);
var inst_32411 = cljs.core.reset_BANG_(dctr,inst_32410);
var inst_32416 = cljs.core.seq(inst_32409__$1);
var inst_32417 = inst_32416;
var inst_32418 = null;
var inst_32419 = (0);
var inst_32420 = (0);
var state_32480__$1 = (function (){var statearr_32583 = state_32480;
(statearr_32583[(27)] = inst_32409__$1);

(statearr_32583[(28)] = inst_32411);

(statearr_32583[(19)] = inst_32417);

(statearr_32583[(9)] = inst_32418);

(statearr_32583[(20)] = inst_32419);

(statearr_32583[(10)] = inst_32420);

return statearr_32583;
})();
var statearr_32584_35032 = state_32480__$1;
(statearr_32584_35032[(2)] = null);

(statearr_32584_35032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (28))){
var inst_32417 = (state_32480[(19)]);
var inst_32437 = (state_32480[(23)]);
var inst_32437__$1 = cljs.core.seq(inst_32417);
var state_32480__$1 = (function (){var statearr_32585 = state_32480;
(statearr_32585[(23)] = inst_32437__$1);

return statearr_32585;
})();
if(inst_32437__$1){
var statearr_32586_35034 = state_32480__$1;
(statearr_32586_35034[(1)] = (33));

} else {
var statearr_32587_35035 = state_32480__$1;
(statearr_32587_35035[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (25))){
var inst_32420 = (state_32480[(10)]);
var inst_32419 = (state_32480[(20)]);
var inst_32422 = (inst_32420 < inst_32419);
var inst_32423 = inst_32422;
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32423)){
var statearr_32591_35039 = state_32480__$1;
(statearr_32591_35039[(1)] = (27));

} else {
var statearr_32592_35040 = state_32480__$1;
(statearr_32592_35040[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (34))){
var state_32480__$1 = state_32480;
var statearr_32593_35041 = state_32480__$1;
(statearr_32593_35041[(2)] = null);

(statearr_32593_35041[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (17))){
var state_32480__$1 = state_32480;
var statearr_32594_35042 = state_32480__$1;
(statearr_32594_35042[(2)] = null);

(statearr_32594_35042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (3))){
var inst_32478 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32480__$1,inst_32478);
} else {
if((state_val_32481 === (12))){
var inst_32404 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32598_35043 = state_32480__$1;
(statearr_32598_35043[(2)] = inst_32404);

(statearr_32598_35043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (2))){
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32480__$1,(4),ch);
} else {
if((state_val_32481 === (23))){
var state_32480__$1 = state_32480;
var statearr_32602_35048 = state_32480__$1;
(statearr_32602_35048[(2)] = null);

(statearr_32602_35048[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (35))){
var inst_32462 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32603_35049 = state_32480__$1;
(statearr_32603_35049[(2)] = inst_32462);

(statearr_32603_35049[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (19))){
var inst_32370 = (state_32480[(7)]);
var inst_32376 = cljs.core.chunk_first(inst_32370);
var inst_32377 = cljs.core.chunk_rest(inst_32370);
var inst_32379 = cljs.core.count(inst_32376);
var inst_32342 = inst_32377;
var inst_32343 = inst_32376;
var inst_32344 = inst_32379;
var inst_32345 = (0);
var state_32480__$1 = (function (){var statearr_32604 = state_32480;
(statearr_32604[(14)] = inst_32342);

(statearr_32604[(15)] = inst_32343);

(statearr_32604[(16)] = inst_32344);

(statearr_32604[(17)] = inst_32345);

return statearr_32604;
})();
var statearr_32605_35055 = state_32480__$1;
(statearr_32605_35055[(2)] = null);

(statearr_32605_35055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (11))){
var inst_32342 = (state_32480[(14)]);
var inst_32370 = (state_32480[(7)]);
var inst_32370__$1 = cljs.core.seq(inst_32342);
var state_32480__$1 = (function (){var statearr_32607 = state_32480;
(statearr_32607[(7)] = inst_32370__$1);

return statearr_32607;
})();
if(inst_32370__$1){
var statearr_32608_35056 = state_32480__$1;
(statearr_32608_35056[(1)] = (16));

} else {
var statearr_32609_35057 = state_32480__$1;
(statearr_32609_35057[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (9))){
var inst_32406 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32613_35058 = state_32480__$1;
(statearr_32613_35058[(2)] = inst_32406);

(statearr_32613_35058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (5))){
var inst_32337 = cljs.core.deref(cs);
var inst_32338 = cljs.core.seq(inst_32337);
var inst_32342 = inst_32338;
var inst_32343 = null;
var inst_32344 = (0);
var inst_32345 = (0);
var state_32480__$1 = (function (){var statearr_32614 = state_32480;
(statearr_32614[(14)] = inst_32342);

(statearr_32614[(15)] = inst_32343);

(statearr_32614[(16)] = inst_32344);

(statearr_32614[(17)] = inst_32345);

return statearr_32614;
})();
var statearr_32616_35061 = state_32480__$1;
(statearr_32616_35061[(2)] = null);

(statearr_32616_35061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (14))){
var state_32480__$1 = state_32480;
var statearr_32617_35062 = state_32480__$1;
(statearr_32617_35062[(2)] = null);

(statearr_32617_35062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (45))){
var inst_32470 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32618_35064 = state_32480__$1;
(statearr_32618_35064[(2)] = inst_32470);

(statearr_32618_35064[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (26))){
var inst_32409 = (state_32480[(27)]);
var inst_32466 = (state_32480[(2)]);
var inst_32467 = cljs.core.seq(inst_32409);
var state_32480__$1 = (function (){var statearr_32622 = state_32480;
(statearr_32622[(29)] = inst_32466);

return statearr_32622;
})();
if(inst_32467){
var statearr_32624_35065 = state_32480__$1;
(statearr_32624_35065[(1)] = (42));

} else {
var statearr_32625_35066 = state_32480__$1;
(statearr_32625_35066[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (16))){
var inst_32370 = (state_32480[(7)]);
var inst_32374 = cljs.core.chunked_seq_QMARK_(inst_32370);
var state_32480__$1 = state_32480;
if(inst_32374){
var statearr_32629_35067 = state_32480__$1;
(statearr_32629_35067[(1)] = (19));

} else {
var statearr_32631_35068 = state_32480__$1;
(statearr_32631_35068[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (38))){
var inst_32459 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32635_35069 = state_32480__$1;
(statearr_32635_35069[(2)] = inst_32459);

(statearr_32635_35069[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (30))){
var state_32480__$1 = state_32480;
var statearr_32637_35070 = state_32480__$1;
(statearr_32637_35070[(2)] = null);

(statearr_32637_35070[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (10))){
var inst_32343 = (state_32480[(15)]);
var inst_32345 = (state_32480[(17)]);
var inst_32354 = cljs.core._nth(inst_32343,inst_32345);
var inst_32355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32354,(0),null);
var inst_32356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32354,(1),null);
var state_32480__$1 = (function (){var statearr_32645 = state_32480;
(statearr_32645[(24)] = inst_32355);

return statearr_32645;
})();
if(cljs.core.truth_(inst_32356)){
var statearr_32647_35074 = state_32480__$1;
(statearr_32647_35074[(1)] = (13));

} else {
var statearr_32650_35075 = state_32480__$1;
(statearr_32650_35075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (18))){
var inst_32402 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32656_35076 = state_32480__$1;
(statearr_32656_35076[(2)] = inst_32402);

(statearr_32656_35076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (42))){
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32480__$1,(45),dchan);
} else {
if((state_val_32481 === (37))){
var inst_32437 = (state_32480[(23)]);
var inst_32449 = (state_32480[(22)]);
var inst_32325 = (state_32480[(12)]);
var inst_32449__$1 = cljs.core.first(inst_32437);
var inst_32450 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32449__$1,inst_32325,done);
var state_32480__$1 = (function (){var statearr_32665 = state_32480;
(statearr_32665[(22)] = inst_32449__$1);

return statearr_32665;
})();
if(cljs.core.truth_(inst_32450)){
var statearr_32669_35083 = state_32480__$1;
(statearr_32669_35083[(1)] = (39));

} else {
var statearr_32672_35084 = state_32480__$1;
(statearr_32672_35084[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (8))){
var inst_32345 = (state_32480[(17)]);
var inst_32344 = (state_32480[(16)]);
var inst_32348 = (inst_32345 < inst_32344);
var inst_32349 = inst_32348;
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32349)){
var statearr_32676_35085 = state_32480__$1;
(statearr_32676_35085[(1)] = (10));

} else {
var statearr_32677_35086 = state_32480__$1;
(statearr_32677_35086[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30671__auto__ = null;
var cljs$core$async$mult_$_state_machine__30671__auto____0 = (function (){
var statearr_32689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32689[(0)] = cljs$core$async$mult_$_state_machine__30671__auto__);

(statearr_32689[(1)] = (1));

return statearr_32689;
});
var cljs$core$async$mult_$_state_machine__30671__auto____1 = (function (state_32480){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_32480);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e32691){var ex__30674__auto__ = e32691;
var statearr_32692_35092 = state_32480;
(statearr_32692_35092[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_32480[(4)]))){
var statearr_32693_35094 = state_32480;
(statearr_32693_35094[(1)] = cljs.core.first((state_32480[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35096 = state_32480;
state_32480 = G__35096;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30671__auto__ = function(state_32480){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30671__auto____1.call(this,state_32480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30671__auto____0;
cljs$core$async$mult_$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30671__auto____1;
return cljs$core$async$mult_$_state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_32699 = f__30950__auto__();
(statearr_32699[(6)] = c__30949__auto___34974);

return statearr_32699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
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
var G__32707 = arguments.length;
switch (G__32707) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35102 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35102(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35107 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35107(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35111 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35111(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35113 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35113(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35122 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35122(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35130 = arguments.length;
var i__5750__auto___35132 = (0);
while(true){
if((i__5750__auto___35132 < len__5749__auto___35130)){
args__5755__auto__.push((arguments[i__5750__auto___35132]));

var G__35133 = (i__5750__auto___35132 + (1));
i__5750__auto___35132 = G__35133;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32837){
var map__32843 = p__32837;
var map__32843__$1 = cljs.core.__destructure_map(map__32843);
var opts = map__32843__$1;
var statearr_32856_35137 = state;
(statearr_32856_35137[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32860_35139 = state;
(statearr_32860_35139[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_32867_35144 = state;
(statearr_32867_35144[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32818){
var G__32819 = cljs.core.first(seq32818);
var seq32818__$1 = cljs.core.next(seq32818);
var G__32820 = cljs.core.first(seq32818__$1);
var seq32818__$2 = cljs.core.next(seq32818__$1);
var G__32821 = cljs.core.first(seq32818__$2);
var seq32818__$3 = cljs.core.next(seq32818__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32819,G__32820,G__32821,seq32818__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32909 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32910){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32910 = meta32910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32911,meta32910__$1){
var self__ = this;
var _32911__$1 = this;
return (new cljs.core.async.t_cljs$core$async32909(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32910__$1));
}));

(cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32911){
var self__ = this;
var _32911__$1 = this;
return self__.meta32910;
}));

(cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32910","meta32910",-550998729,null)], null);
}));

(cljs.core.async.t_cljs$core$async32909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32909");

(cljs.core.async.t_cljs$core$async32909.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32909.
 */
cljs.core.async.__GT_t_cljs$core$async32909 = (function cljs$core$async$__GT_t_cljs$core$async32909(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32910){
return (new cljs.core.async.t_cljs$core$async32909(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32910));
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
var m = (new cljs.core.async.t_cljs$core$async32909(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__30949__auto___35306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_33063){
var state_val_33064 = (state_33063[(1)]);
if((state_val_33064 === (7))){
var inst_33018 = (state_33063[(2)]);
var state_33063__$1 = state_33063;
if(cljs.core.truth_(inst_33018)){
var statearr_33065_35329 = state_33063__$1;
(statearr_33065_35329[(1)] = (8));

} else {
var statearr_33069_35335 = state_33063__$1;
(statearr_33069_35335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (20))){
var inst_33007 = (state_33063[(7)]);
var state_33063__$1 = state_33063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33063__$1,(23),out,inst_33007);
} else {
if((state_val_33064 === (1))){
var inst_32985 = calc_state();
var inst_32986 = cljs.core.__destructure_map(inst_32985);
var inst_32987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32986,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32986,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32986,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32992 = inst_32985;
var state_33063__$1 = (function (){var statearr_33071 = state_33063;
(statearr_33071[(8)] = inst_32987);

(statearr_33071[(9)] = inst_32989);

(statearr_33071[(10)] = inst_32990);

(statearr_33071[(11)] = inst_32992);

return statearr_33071;
})();
var statearr_33075_35347 = state_33063__$1;
(statearr_33075_35347[(2)] = null);

(statearr_33075_35347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (24))){
var inst_32998 = (state_33063[(12)]);
var inst_32992 = inst_32998;
var state_33063__$1 = (function (){var statearr_33077 = state_33063;
(statearr_33077[(11)] = inst_32992);

return statearr_33077;
})();
var statearr_33078_35352 = state_33063__$1;
(statearr_33078_35352[(2)] = null);

(statearr_33078_35352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (4))){
var inst_33007 = (state_33063[(7)]);
var inst_33009 = (state_33063[(13)]);
var inst_33006 = (state_33063[(2)]);
var inst_33007__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33006,(0),null);
var inst_33008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33006,(1),null);
var inst_33009__$1 = (inst_33007__$1 == null);
var state_33063__$1 = (function (){var statearr_33082 = state_33063;
(statearr_33082[(7)] = inst_33007__$1);

(statearr_33082[(14)] = inst_33008);

(statearr_33082[(13)] = inst_33009__$1);

return statearr_33082;
})();
if(cljs.core.truth_(inst_33009__$1)){
var statearr_33084_35360 = state_33063__$1;
(statearr_33084_35360[(1)] = (5));

} else {
var statearr_33085_35361 = state_33063__$1;
(statearr_33085_35361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (15))){
var inst_32999 = (state_33063[(15)]);
var inst_33032 = (state_33063[(16)]);
var inst_33032__$1 = cljs.core.empty_QMARK_(inst_32999);
var state_33063__$1 = (function (){var statearr_33086 = state_33063;
(statearr_33086[(16)] = inst_33032__$1);

return statearr_33086;
})();
if(inst_33032__$1){
var statearr_33087_35367 = state_33063__$1;
(statearr_33087_35367[(1)] = (17));

} else {
var statearr_33088_35370 = state_33063__$1;
(statearr_33088_35370[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (21))){
var inst_32998 = (state_33063[(12)]);
var inst_32992 = inst_32998;
var state_33063__$1 = (function (){var statearr_33090 = state_33063;
(statearr_33090[(11)] = inst_32992);

return statearr_33090;
})();
var statearr_33091_35385 = state_33063__$1;
(statearr_33091_35385[(2)] = null);

(statearr_33091_35385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (13))){
var inst_33025 = (state_33063[(2)]);
var inst_33026 = calc_state();
var inst_32992 = inst_33026;
var state_33063__$1 = (function (){var statearr_33092 = state_33063;
(statearr_33092[(17)] = inst_33025);

(statearr_33092[(11)] = inst_32992);

return statearr_33092;
})();
var statearr_33093_35399 = state_33063__$1;
(statearr_33093_35399[(2)] = null);

(statearr_33093_35399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (22))){
var inst_33055 = (state_33063[(2)]);
var state_33063__$1 = state_33063;
var statearr_33094_35417 = state_33063__$1;
(statearr_33094_35417[(2)] = inst_33055);

(statearr_33094_35417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (6))){
var inst_33008 = (state_33063[(14)]);
var inst_33016 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33008,change);
var state_33063__$1 = state_33063;
var statearr_33096_35441 = state_33063__$1;
(statearr_33096_35441[(2)] = inst_33016);

(statearr_33096_35441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (25))){
var state_33063__$1 = state_33063;
var statearr_33100_35455 = state_33063__$1;
(statearr_33100_35455[(2)] = null);

(statearr_33100_35455[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (17))){
var inst_33000 = (state_33063[(18)]);
var inst_33008 = (state_33063[(14)]);
var inst_33037 = (inst_33000.cljs$core$IFn$_invoke$arity$1 ? inst_33000.cljs$core$IFn$_invoke$arity$1(inst_33008) : inst_33000.call(null,inst_33008));
var inst_33038 = cljs.core.not(inst_33037);
var state_33063__$1 = state_33063;
var statearr_33105_35481 = state_33063__$1;
(statearr_33105_35481[(2)] = inst_33038);

(statearr_33105_35481[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (3))){
var inst_33059 = (state_33063[(2)]);
var state_33063__$1 = state_33063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33063__$1,inst_33059);
} else {
if((state_val_33064 === (12))){
var state_33063__$1 = state_33063;
var statearr_33106_35486 = state_33063__$1;
(statearr_33106_35486[(2)] = null);

(statearr_33106_35486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (2))){
var inst_32992 = (state_33063[(11)]);
var inst_32998 = (state_33063[(12)]);
var inst_32998__$1 = cljs.core.__destructure_map(inst_32992);
var inst_32999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32998__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32998__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32998__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33063__$1 = (function (){var statearr_33111 = state_33063;
(statearr_33111[(12)] = inst_32998__$1);

(statearr_33111[(15)] = inst_32999);

(statearr_33111[(18)] = inst_33000);

return statearr_33111;
})();
return cljs.core.async.ioc_alts_BANG_(state_33063__$1,(4),inst_33001);
} else {
if((state_val_33064 === (23))){
var inst_33046 = (state_33063[(2)]);
var state_33063__$1 = state_33063;
if(cljs.core.truth_(inst_33046)){
var statearr_33115_35515 = state_33063__$1;
(statearr_33115_35515[(1)] = (24));

} else {
var statearr_33118_35520 = state_33063__$1;
(statearr_33118_35520[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (19))){
var inst_33041 = (state_33063[(2)]);
var state_33063__$1 = state_33063;
var statearr_33119_35521 = state_33063__$1;
(statearr_33119_35521[(2)] = inst_33041);

(statearr_33119_35521[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (11))){
var inst_33008 = (state_33063[(14)]);
var inst_33022 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33008);
var state_33063__$1 = state_33063;
var statearr_33123_35522 = state_33063__$1;
(statearr_33123_35522[(2)] = inst_33022);

(statearr_33123_35522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (9))){
var inst_32999 = (state_33063[(15)]);
var inst_33008 = (state_33063[(14)]);
var inst_33029 = (state_33063[(19)]);
var inst_33029__$1 = (inst_32999.cljs$core$IFn$_invoke$arity$1 ? inst_32999.cljs$core$IFn$_invoke$arity$1(inst_33008) : inst_32999.call(null,inst_33008));
var state_33063__$1 = (function (){var statearr_33125 = state_33063;
(statearr_33125[(19)] = inst_33029__$1);

return statearr_33125;
})();
if(cljs.core.truth_(inst_33029__$1)){
var statearr_33126_35525 = state_33063__$1;
(statearr_33126_35525[(1)] = (14));

} else {
var statearr_33127_35526 = state_33063__$1;
(statearr_33127_35526[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (5))){
var inst_33009 = (state_33063[(13)]);
var state_33063__$1 = state_33063;
var statearr_33128_35531 = state_33063__$1;
(statearr_33128_35531[(2)] = inst_33009);

(statearr_33128_35531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (14))){
var inst_33029 = (state_33063[(19)]);
var state_33063__$1 = state_33063;
var statearr_33129_35534 = state_33063__$1;
(statearr_33129_35534[(2)] = inst_33029);

(statearr_33129_35534[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (26))){
var inst_33051 = (state_33063[(2)]);
var state_33063__$1 = state_33063;
var statearr_33130_35541 = state_33063__$1;
(statearr_33130_35541[(2)] = inst_33051);

(statearr_33130_35541[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (16))){
var inst_33043 = (state_33063[(2)]);
var state_33063__$1 = state_33063;
if(cljs.core.truth_(inst_33043)){
var statearr_33131_35546 = state_33063__$1;
(statearr_33131_35546[(1)] = (20));

} else {
var statearr_33133_35550 = state_33063__$1;
(statearr_33133_35550[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (10))){
var inst_33057 = (state_33063[(2)]);
var state_33063__$1 = state_33063;
var statearr_33134_35557 = state_33063__$1;
(statearr_33134_35557[(2)] = inst_33057);

(statearr_33134_35557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (18))){
var inst_33032 = (state_33063[(16)]);
var state_33063__$1 = state_33063;
var statearr_33135_35563 = state_33063__$1;
(statearr_33135_35563[(2)] = inst_33032);

(statearr_33135_35563[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (8))){
var inst_33007 = (state_33063[(7)]);
var inst_33020 = (inst_33007 == null);
var state_33063__$1 = state_33063;
if(cljs.core.truth_(inst_33020)){
var statearr_33140_35573 = state_33063__$1;
(statearr_33140_35573[(1)] = (11));

} else {
var statearr_33141_35574 = state_33063__$1;
(statearr_33141_35574[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__30671__auto__ = null;
var cljs$core$async$mix_$_state_machine__30671__auto____0 = (function (){
var statearr_33145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33145[(0)] = cljs$core$async$mix_$_state_machine__30671__auto__);

(statearr_33145[(1)] = (1));

return statearr_33145;
});
var cljs$core$async$mix_$_state_machine__30671__auto____1 = (function (state_33063){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_33063);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e33147){var ex__30674__auto__ = e33147;
var statearr_33148_35587 = state_33063;
(statearr_33148_35587[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_33063[(4)]))){
var statearr_33149_35588 = state_33063;
(statearr_33149_35588[(1)] = cljs.core.first((state_33063[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35595 = state_33063;
state_33063 = G__35595;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30671__auto__ = function(state_33063){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30671__auto____1.call(this,state_33063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30671__auto____0;
cljs$core$async$mix_$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30671__auto____1;
return cljs$core$async$mix_$_state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_33151 = f__30950__auto__();
(statearr_33151[(6)] = c__30949__auto___35306);

return statearr_33151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35613 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35613(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35635 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35635(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35652 = (function() {
var G__35653 = null;
var G__35653__1 = (function (p){
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
var G__35653__2 = (function (p,v){
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
G__35653 = function(p,v){
switch(arguments.length){
case 1:
return G__35653__1.call(this,p);
case 2:
return G__35653__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35653.cljs$core$IFn$_invoke$arity$1 = G__35653__1;
G__35653.cljs$core$IFn$_invoke$arity$2 = G__35653__2;
return G__35653;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33186 = arguments.length;
switch (G__33186) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35652(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35652(p,v);
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
cljs.core.async.t_cljs$core$async33199 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33200){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33200 = meta33200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33201,meta33200__$1){
var self__ = this;
var _33201__$1 = this;
return (new cljs.core.async.t_cljs$core$async33199(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33200__$1));
}));

(cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33201){
var self__ = this;
var _33201__$1 = this;
return self__.meta33200;
}));

(cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33200","meta33200",1803901695,null)], null);
}));

(cljs.core.async.t_cljs$core$async33199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33199");

(cljs.core.async.t_cljs$core$async33199.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33199.
 */
cljs.core.async.__GT_t_cljs$core$async33199 = (function cljs$core$async$__GT_t_cljs$core$async33199(ch,topic_fn,buf_fn,mults,ensure_mult,meta33200){
return (new cljs.core.async.t_cljs$core$async33199(ch,topic_fn,buf_fn,mults,ensure_mult,meta33200));
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
var G__33197 = arguments.length;
switch (G__33197) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33195_SHARP_){
if(cljs.core.truth_((p1__33195_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33195_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33195_SHARP_.call(null,topic)))){
return p1__33195_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33195_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33199(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__30949__auto___35695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_33321){
var state_val_33323 = (state_33321[(1)]);
if((state_val_33323 === (7))){
var inst_33317 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
var statearr_33324_35696 = state_33321__$1;
(statearr_33324_35696[(2)] = inst_33317);

(statearr_33324_35696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (20))){
var state_33321__$1 = state_33321;
var statearr_33325_35698 = state_33321__$1;
(statearr_33325_35698[(2)] = null);

(statearr_33325_35698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (1))){
var state_33321__$1 = state_33321;
var statearr_33326_35704 = state_33321__$1;
(statearr_33326_35704[(2)] = null);

(statearr_33326_35704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (24))){
var inst_33297 = (state_33321[(7)]);
var inst_33309 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33297);
var state_33321__$1 = state_33321;
var statearr_33329_35706 = state_33321__$1;
(statearr_33329_35706[(2)] = inst_33309);

(statearr_33329_35706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (4))){
var inst_33234 = (state_33321[(8)]);
var inst_33234__$1 = (state_33321[(2)]);
var inst_33236 = (inst_33234__$1 == null);
var state_33321__$1 = (function (){var statearr_33330 = state_33321;
(statearr_33330[(8)] = inst_33234__$1);

return statearr_33330;
})();
if(cljs.core.truth_(inst_33236)){
var statearr_33331_35715 = state_33321__$1;
(statearr_33331_35715[(1)] = (5));

} else {
var statearr_33332_35716 = state_33321__$1;
(statearr_33332_35716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (15))){
var inst_33291 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
var statearr_33333_35720 = state_33321__$1;
(statearr_33333_35720[(2)] = inst_33291);

(statearr_33333_35720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (21))){
var inst_33314 = (state_33321[(2)]);
var state_33321__$1 = (function (){var statearr_33334 = state_33321;
(statearr_33334[(9)] = inst_33314);

return statearr_33334;
})();
var statearr_33335_35725 = state_33321__$1;
(statearr_33335_35725[(2)] = null);

(statearr_33335_35725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (13))){
var inst_33273 = (state_33321[(10)]);
var inst_33275 = cljs.core.chunked_seq_QMARK_(inst_33273);
var state_33321__$1 = state_33321;
if(inst_33275){
var statearr_33336_35731 = state_33321__$1;
(statearr_33336_35731[(1)] = (16));

} else {
var statearr_33337_35736 = state_33321__$1;
(statearr_33337_35736[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (22))){
var inst_33303 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
if(cljs.core.truth_(inst_33303)){
var statearr_33338_35742 = state_33321__$1;
(statearr_33338_35742[(1)] = (23));

} else {
var statearr_33339_35743 = state_33321__$1;
(statearr_33339_35743[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (6))){
var inst_33234 = (state_33321[(8)]);
var inst_33297 = (state_33321[(7)]);
var inst_33299 = (state_33321[(11)]);
var inst_33297__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33234) : topic_fn.call(null,inst_33234));
var inst_33298 = cljs.core.deref(mults);
var inst_33299__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33298,inst_33297__$1);
var state_33321__$1 = (function (){var statearr_33347 = state_33321;
(statearr_33347[(7)] = inst_33297__$1);

(statearr_33347[(11)] = inst_33299__$1);

return statearr_33347;
})();
if(cljs.core.truth_(inst_33299__$1)){
var statearr_33348_35758 = state_33321__$1;
(statearr_33348_35758[(1)] = (19));

} else {
var statearr_33355_35759 = state_33321__$1;
(statearr_33355_35759[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (25))){
var inst_33311 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
var statearr_33356_35760 = state_33321__$1;
(statearr_33356_35760[(2)] = inst_33311);

(statearr_33356_35760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (17))){
var inst_33273 = (state_33321[(10)]);
var inst_33282 = cljs.core.first(inst_33273);
var inst_33283 = cljs.core.async.muxch_STAR_(inst_33282);
var inst_33284 = cljs.core.async.close_BANG_(inst_33283);
var inst_33285 = cljs.core.next(inst_33273);
var inst_33246 = inst_33285;
var inst_33247 = null;
var inst_33248 = (0);
var inst_33249 = (0);
var state_33321__$1 = (function (){var statearr_33363 = state_33321;
(statearr_33363[(12)] = inst_33284);

(statearr_33363[(13)] = inst_33246);

(statearr_33363[(14)] = inst_33247);

(statearr_33363[(15)] = inst_33248);

(statearr_33363[(16)] = inst_33249);

return statearr_33363;
})();
var statearr_33364_35763 = state_33321__$1;
(statearr_33364_35763[(2)] = null);

(statearr_33364_35763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (3))){
var inst_33319 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33321__$1,inst_33319);
} else {
if((state_val_33323 === (12))){
var inst_33293 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
var statearr_33365_35765 = state_33321__$1;
(statearr_33365_35765[(2)] = inst_33293);

(statearr_33365_35765[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (2))){
var state_33321__$1 = state_33321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33321__$1,(4),ch);
} else {
if((state_val_33323 === (23))){
var state_33321__$1 = state_33321;
var statearr_33366_35768 = state_33321__$1;
(statearr_33366_35768[(2)] = null);

(statearr_33366_35768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (19))){
var inst_33299 = (state_33321[(11)]);
var inst_33234 = (state_33321[(8)]);
var inst_33301 = cljs.core.async.muxch_STAR_(inst_33299);
var state_33321__$1 = state_33321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33321__$1,(22),inst_33301,inst_33234);
} else {
if((state_val_33323 === (11))){
var inst_33246 = (state_33321[(13)]);
var inst_33273 = (state_33321[(10)]);
var inst_33273__$1 = cljs.core.seq(inst_33246);
var state_33321__$1 = (function (){var statearr_33378 = state_33321;
(statearr_33378[(10)] = inst_33273__$1);

return statearr_33378;
})();
if(inst_33273__$1){
var statearr_33379_35773 = state_33321__$1;
(statearr_33379_35773[(1)] = (13));

} else {
var statearr_33380_35778 = state_33321__$1;
(statearr_33380_35778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (9))){
var inst_33295 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
var statearr_33381_35783 = state_33321__$1;
(statearr_33381_35783[(2)] = inst_33295);

(statearr_33381_35783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (5))){
var inst_33243 = cljs.core.deref(mults);
var inst_33244 = cljs.core.vals(inst_33243);
var inst_33245 = cljs.core.seq(inst_33244);
var inst_33246 = inst_33245;
var inst_33247 = null;
var inst_33248 = (0);
var inst_33249 = (0);
var state_33321__$1 = (function (){var statearr_33385 = state_33321;
(statearr_33385[(13)] = inst_33246);

(statearr_33385[(14)] = inst_33247);

(statearr_33385[(15)] = inst_33248);

(statearr_33385[(16)] = inst_33249);

return statearr_33385;
})();
var statearr_33386_35810 = state_33321__$1;
(statearr_33386_35810[(2)] = null);

(statearr_33386_35810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (14))){
var state_33321__$1 = state_33321;
var statearr_33390_35816 = state_33321__$1;
(statearr_33390_35816[(2)] = null);

(statearr_33390_35816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (16))){
var inst_33273 = (state_33321[(10)]);
var inst_33277 = cljs.core.chunk_first(inst_33273);
var inst_33278 = cljs.core.chunk_rest(inst_33273);
var inst_33279 = cljs.core.count(inst_33277);
var inst_33246 = inst_33278;
var inst_33247 = inst_33277;
var inst_33248 = inst_33279;
var inst_33249 = (0);
var state_33321__$1 = (function (){var statearr_33392 = state_33321;
(statearr_33392[(13)] = inst_33246);

(statearr_33392[(14)] = inst_33247);

(statearr_33392[(15)] = inst_33248);

(statearr_33392[(16)] = inst_33249);

return statearr_33392;
})();
var statearr_33394_35829 = state_33321__$1;
(statearr_33394_35829[(2)] = null);

(statearr_33394_35829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (10))){
var inst_33247 = (state_33321[(14)]);
var inst_33249 = (state_33321[(16)]);
var inst_33246 = (state_33321[(13)]);
var inst_33248 = (state_33321[(15)]);
var inst_33255 = cljs.core._nth(inst_33247,inst_33249);
var inst_33256 = cljs.core.async.muxch_STAR_(inst_33255);
var inst_33257 = cljs.core.async.close_BANG_(inst_33256);
var inst_33258 = (inst_33249 + (1));
var tmp33387 = inst_33246;
var tmp33388 = inst_33248;
var tmp33389 = inst_33247;
var inst_33246__$1 = tmp33387;
var inst_33247__$1 = tmp33389;
var inst_33248__$1 = tmp33388;
var inst_33249__$1 = inst_33258;
var state_33321__$1 = (function (){var statearr_33399 = state_33321;
(statearr_33399[(17)] = inst_33257);

(statearr_33399[(13)] = inst_33246__$1);

(statearr_33399[(14)] = inst_33247__$1);

(statearr_33399[(15)] = inst_33248__$1);

(statearr_33399[(16)] = inst_33249__$1);

return statearr_33399;
})();
var statearr_33400_35836 = state_33321__$1;
(statearr_33400_35836[(2)] = null);

(statearr_33400_35836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (18))){
var inst_33288 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
var statearr_33401_35837 = state_33321__$1;
(statearr_33401_35837[(2)] = inst_33288);

(statearr_33401_35837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (8))){
var inst_33249 = (state_33321[(16)]);
var inst_33248 = (state_33321[(15)]);
var inst_33252 = (inst_33249 < inst_33248);
var inst_33253 = inst_33252;
var state_33321__$1 = state_33321;
if(cljs.core.truth_(inst_33253)){
var statearr_33405_35841 = state_33321__$1;
(statearr_33405_35841[(1)] = (10));

} else {
var statearr_33406_35842 = state_33321__$1;
(statearr_33406_35842[(1)] = (11));

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
var cljs$core$async$state_machine__30671__auto__ = null;
var cljs$core$async$state_machine__30671__auto____0 = (function (){
var statearr_33408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33408[(0)] = cljs$core$async$state_machine__30671__auto__);

(statearr_33408[(1)] = (1));

return statearr_33408;
});
var cljs$core$async$state_machine__30671__auto____1 = (function (state_33321){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_33321);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e33409){var ex__30674__auto__ = e33409;
var statearr_33410_35846 = state_33321;
(statearr_33410_35846[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_33321[(4)]))){
var statearr_33411_35847 = state_33321;
(statearr_33411_35847[(1)] = cljs.core.first((state_33321[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35848 = state_33321;
state_33321 = G__35848;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$state_machine__30671__auto__ = function(state_33321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30671__auto____1.call(this,state_33321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30671__auto____0;
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30671__auto____1;
return cljs$core$async$state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_33412 = f__30950__auto__();
(statearr_33412[(6)] = c__30949__auto___35695);

return statearr_33412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
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
var G__33418 = arguments.length;
switch (G__33418) {
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
var G__33424 = arguments.length;
switch (G__33424) {
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
var G__33439 = arguments.length;
switch (G__33439) {
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
var c__30949__auto___35878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_33506){
var state_val_33507 = (state_33506[(1)]);
if((state_val_33507 === (7))){
var state_33506__$1 = state_33506;
var statearr_33511_35879 = state_33506__$1;
(statearr_33511_35879[(2)] = null);

(statearr_33511_35879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (1))){
var state_33506__$1 = state_33506;
var statearr_33512_35880 = state_33506__$1;
(statearr_33512_35880[(2)] = null);

(statearr_33512_35880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (4))){
var inst_33461 = (state_33506[(7)]);
var inst_33460 = (state_33506[(8)]);
var inst_33463 = (inst_33461 < inst_33460);
var state_33506__$1 = state_33506;
if(cljs.core.truth_(inst_33463)){
var statearr_33516_35881 = state_33506__$1;
(statearr_33516_35881[(1)] = (6));

} else {
var statearr_33517_35882 = state_33506__$1;
(statearr_33517_35882[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (15))){
var inst_33490 = (state_33506[(9)]);
var inst_33495 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33490);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33506__$1,(17),out,inst_33495);
} else {
if((state_val_33507 === (13))){
var inst_33490 = (state_33506[(9)]);
var inst_33490__$1 = (state_33506[(2)]);
var inst_33491 = cljs.core.some(cljs.core.nil_QMARK_,inst_33490__$1);
var state_33506__$1 = (function (){var statearr_33524 = state_33506;
(statearr_33524[(9)] = inst_33490__$1);

return statearr_33524;
})();
if(cljs.core.truth_(inst_33491)){
var statearr_33531_35886 = state_33506__$1;
(statearr_33531_35886[(1)] = (14));

} else {
var statearr_33533_35887 = state_33506__$1;
(statearr_33533_35887[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (6))){
var state_33506__$1 = state_33506;
var statearr_33540_35888 = state_33506__$1;
(statearr_33540_35888[(2)] = null);

(statearr_33540_35888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (17))){
var inst_33497 = (state_33506[(2)]);
var state_33506__$1 = (function (){var statearr_33550 = state_33506;
(statearr_33550[(10)] = inst_33497);

return statearr_33550;
})();
var statearr_33551_35895 = state_33506__$1;
(statearr_33551_35895[(2)] = null);

(statearr_33551_35895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (3))){
var inst_33502 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33506__$1,inst_33502);
} else {
if((state_val_33507 === (12))){
var _ = (function (){var statearr_33556 = state_33506;
(statearr_33556[(4)] = cljs.core.rest((state_33506[(4)])));

return statearr_33556;
})();
var state_33506__$1 = state_33506;
var ex33546 = (state_33506__$1[(2)]);
var statearr_33564_35897 = state_33506__$1;
(statearr_33564_35897[(5)] = ex33546);


if((ex33546 instanceof Object)){
var statearr_33565_35898 = state_33506__$1;
(statearr_33565_35898[(1)] = (11));

(statearr_33565_35898[(5)] = null);

} else {
throw ex33546;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (2))){
var inst_33459 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33460 = cnt;
var inst_33461 = (0);
var state_33506__$1 = (function (){var statearr_33567 = state_33506;
(statearr_33567[(11)] = inst_33459);

(statearr_33567[(8)] = inst_33460);

(statearr_33567[(7)] = inst_33461);

return statearr_33567;
})();
var statearr_33568_35899 = state_33506__$1;
(statearr_33568_35899[(2)] = null);

(statearr_33568_35899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (11))){
var inst_33469 = (state_33506[(2)]);
var inst_33470 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33506__$1 = (function (){var statearr_33570 = state_33506;
(statearr_33570[(12)] = inst_33469);

return statearr_33570;
})();
var statearr_33571_35904 = state_33506__$1;
(statearr_33571_35904[(2)] = inst_33470);

(statearr_33571_35904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (9))){
var inst_33461 = (state_33506[(7)]);
var _ = (function (){var statearr_33572 = state_33506;
(statearr_33572[(4)] = cljs.core.cons((12),(state_33506[(4)])));

return statearr_33572;
})();
var inst_33476 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33461) : chs__$1.call(null,inst_33461));
var inst_33477 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33461) : done.call(null,inst_33461));
var inst_33478 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33476,inst_33477);
var ___$1 = (function (){var statearr_33573 = state_33506;
(statearr_33573[(4)] = cljs.core.rest((state_33506[(4)])));

return statearr_33573;
})();
var state_33506__$1 = state_33506;
var statearr_33574_35907 = state_33506__$1;
(statearr_33574_35907[(2)] = inst_33478);

(statearr_33574_35907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (5))){
var inst_33488 = (state_33506[(2)]);
var state_33506__$1 = (function (){var statearr_33575 = state_33506;
(statearr_33575[(13)] = inst_33488);

return statearr_33575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33506__$1,(13),dchan);
} else {
if((state_val_33507 === (14))){
var inst_33493 = cljs.core.async.close_BANG_(out);
var state_33506__$1 = state_33506;
var statearr_33577_35909 = state_33506__$1;
(statearr_33577_35909[(2)] = inst_33493);

(statearr_33577_35909[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (16))){
var inst_33500 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33578_35910 = state_33506__$1;
(statearr_33578_35910[(2)] = inst_33500);

(statearr_33578_35910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (10))){
var inst_33461 = (state_33506[(7)]);
var inst_33481 = (state_33506[(2)]);
var inst_33482 = (inst_33461 + (1));
var inst_33461__$1 = inst_33482;
var state_33506__$1 = (function (){var statearr_33581 = state_33506;
(statearr_33581[(14)] = inst_33481);

(statearr_33581[(7)] = inst_33461__$1);

return statearr_33581;
})();
var statearr_33582_35912 = state_33506__$1;
(statearr_33582_35912[(2)] = null);

(statearr_33582_35912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (8))){
var inst_33486 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33583_35913 = state_33506__$1;
(statearr_33583_35913[(2)] = inst_33486);

(statearr_33583_35913[(1)] = (5));


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
var cljs$core$async$state_machine__30671__auto__ = null;
var cljs$core$async$state_machine__30671__auto____0 = (function (){
var statearr_33585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33585[(0)] = cljs$core$async$state_machine__30671__auto__);

(statearr_33585[(1)] = (1));

return statearr_33585;
});
var cljs$core$async$state_machine__30671__auto____1 = (function (state_33506){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_33506);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e33589){var ex__30674__auto__ = e33589;
var statearr_33590_35916 = state_33506;
(statearr_33590_35916[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_33506[(4)]))){
var statearr_33596_35917 = state_33506;
(statearr_33596_35917[(1)] = cljs.core.first((state_33506[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35918 = state_33506;
state_33506 = G__35918;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$state_machine__30671__auto__ = function(state_33506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30671__auto____1.call(this,state_33506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30671__auto____0;
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30671__auto____1;
return cljs$core$async$state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_33597 = f__30950__auto__();
(statearr_33597[(6)] = c__30949__auto___35878);

return statearr_33597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
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
var G__33602 = arguments.length;
switch (G__33602) {
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
var c__30949__auto___35924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_33635){
var state_val_33636 = (state_33635[(1)]);
if((state_val_33636 === (7))){
var inst_33614 = (state_33635[(7)]);
var inst_33615 = (state_33635[(8)]);
var inst_33614__$1 = (state_33635[(2)]);
var inst_33615__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33614__$1,(0),null);
var inst_33616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33614__$1,(1),null);
var inst_33617 = (inst_33615__$1 == null);
var state_33635__$1 = (function (){var statearr_33639 = state_33635;
(statearr_33639[(7)] = inst_33614__$1);

(statearr_33639[(8)] = inst_33615__$1);

(statearr_33639[(9)] = inst_33616);

return statearr_33639;
})();
if(cljs.core.truth_(inst_33617)){
var statearr_33640_35925 = state_33635__$1;
(statearr_33640_35925[(1)] = (8));

} else {
var statearr_33641_35926 = state_33635__$1;
(statearr_33641_35926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (1))){
var inst_33604 = cljs.core.vec(chs);
var inst_33605 = inst_33604;
var state_33635__$1 = (function (){var statearr_33642 = state_33635;
(statearr_33642[(10)] = inst_33605);

return statearr_33642;
})();
var statearr_33643_35928 = state_33635__$1;
(statearr_33643_35928[(2)] = null);

(statearr_33643_35928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (4))){
var inst_33605 = (state_33635[(10)]);
var state_33635__$1 = state_33635;
return cljs.core.async.ioc_alts_BANG_(state_33635__$1,(7),inst_33605);
} else {
if((state_val_33636 === (6))){
var inst_33631 = (state_33635[(2)]);
var state_33635__$1 = state_33635;
var statearr_33644_35932 = state_33635__$1;
(statearr_33644_35932[(2)] = inst_33631);

(statearr_33644_35932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (3))){
var inst_33633 = (state_33635[(2)]);
var state_33635__$1 = state_33635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33635__$1,inst_33633);
} else {
if((state_val_33636 === (2))){
var inst_33605 = (state_33635[(10)]);
var inst_33607 = cljs.core.count(inst_33605);
var inst_33608 = (inst_33607 > (0));
var state_33635__$1 = state_33635;
if(cljs.core.truth_(inst_33608)){
var statearr_33646_35937 = state_33635__$1;
(statearr_33646_35937[(1)] = (4));

} else {
var statearr_33647_35938 = state_33635__$1;
(statearr_33647_35938[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (11))){
var inst_33605 = (state_33635[(10)]);
var inst_33624 = (state_33635[(2)]);
var tmp33645 = inst_33605;
var inst_33605__$1 = tmp33645;
var state_33635__$1 = (function (){var statearr_33648 = state_33635;
(statearr_33648[(11)] = inst_33624);

(statearr_33648[(10)] = inst_33605__$1);

return statearr_33648;
})();
var statearr_33649_35940 = state_33635__$1;
(statearr_33649_35940[(2)] = null);

(statearr_33649_35940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (9))){
var inst_33615 = (state_33635[(8)]);
var state_33635__$1 = state_33635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33635__$1,(11),out,inst_33615);
} else {
if((state_val_33636 === (5))){
var inst_33629 = cljs.core.async.close_BANG_(out);
var state_33635__$1 = state_33635;
var statearr_33650_35951 = state_33635__$1;
(statearr_33650_35951[(2)] = inst_33629);

(statearr_33650_35951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (10))){
var inst_33627 = (state_33635[(2)]);
var state_33635__$1 = state_33635;
var statearr_33652_35953 = state_33635__$1;
(statearr_33652_35953[(2)] = inst_33627);

(statearr_33652_35953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (8))){
var inst_33605 = (state_33635[(10)]);
var inst_33614 = (state_33635[(7)]);
var inst_33615 = (state_33635[(8)]);
var inst_33616 = (state_33635[(9)]);
var inst_33619 = (function (){var cs = inst_33605;
var vec__33610 = inst_33614;
var v = inst_33615;
var c = inst_33616;
return (function (p1__33599_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33599_SHARP_);
});
})();
var inst_33620 = cljs.core.filterv(inst_33619,inst_33605);
var inst_33605__$1 = inst_33620;
var state_33635__$1 = (function (){var statearr_33653 = state_33635;
(statearr_33653[(10)] = inst_33605__$1);

return statearr_33653;
})();
var statearr_33654_35959 = state_33635__$1;
(statearr_33654_35959[(2)] = null);

(statearr_33654_35959[(1)] = (2));


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
var cljs$core$async$state_machine__30671__auto__ = null;
var cljs$core$async$state_machine__30671__auto____0 = (function (){
var statearr_33655 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33655[(0)] = cljs$core$async$state_machine__30671__auto__);

(statearr_33655[(1)] = (1));

return statearr_33655;
});
var cljs$core$async$state_machine__30671__auto____1 = (function (state_33635){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_33635);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e33656){var ex__30674__auto__ = e33656;
var statearr_33657_35966 = state_33635;
(statearr_33657_35966[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_33635[(4)]))){
var statearr_33658_35967 = state_33635;
(statearr_33658_35967[(1)] = cljs.core.first((state_33635[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35970 = state_33635;
state_33635 = G__35970;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$state_machine__30671__auto__ = function(state_33635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30671__auto____1.call(this,state_33635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30671__auto____0;
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30671__auto____1;
return cljs$core$async$state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_33665 = f__30950__auto__();
(statearr_33665[(6)] = c__30949__auto___35924);

return statearr_33665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
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
var G__33672 = arguments.length;
switch (G__33672) {
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
var c__30949__auto___35972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_33696){
var state_val_33697 = (state_33696[(1)]);
if((state_val_33697 === (7))){
var inst_33678 = (state_33696[(7)]);
var inst_33678__$1 = (state_33696[(2)]);
var inst_33679 = (inst_33678__$1 == null);
var inst_33680 = cljs.core.not(inst_33679);
var state_33696__$1 = (function (){var statearr_33698 = state_33696;
(statearr_33698[(7)] = inst_33678__$1);

return statearr_33698;
})();
if(inst_33680){
var statearr_33699_35973 = state_33696__$1;
(statearr_33699_35973[(1)] = (8));

} else {
var statearr_33700_35974 = state_33696__$1;
(statearr_33700_35974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (1))){
var inst_33673 = (0);
var state_33696__$1 = (function (){var statearr_33701 = state_33696;
(statearr_33701[(8)] = inst_33673);

return statearr_33701;
})();
var statearr_33702_35975 = state_33696__$1;
(statearr_33702_35975[(2)] = null);

(statearr_33702_35975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (4))){
var state_33696__$1 = state_33696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33696__$1,(7),ch);
} else {
if((state_val_33697 === (6))){
var inst_33691 = (state_33696[(2)]);
var state_33696__$1 = state_33696;
var statearr_33703_35976 = state_33696__$1;
(statearr_33703_35976[(2)] = inst_33691);

(statearr_33703_35976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (3))){
var inst_33693 = (state_33696[(2)]);
var inst_33694 = cljs.core.async.close_BANG_(out);
var state_33696__$1 = (function (){var statearr_33712 = state_33696;
(statearr_33712[(9)] = inst_33693);

return statearr_33712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33696__$1,inst_33694);
} else {
if((state_val_33697 === (2))){
var inst_33673 = (state_33696[(8)]);
var inst_33675 = (inst_33673 < n);
var state_33696__$1 = state_33696;
if(cljs.core.truth_(inst_33675)){
var statearr_33719_35977 = state_33696__$1;
(statearr_33719_35977[(1)] = (4));

} else {
var statearr_33729_35978 = state_33696__$1;
(statearr_33729_35978[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (11))){
var inst_33673 = (state_33696[(8)]);
var inst_33683 = (state_33696[(2)]);
var inst_33684 = (inst_33673 + (1));
var inst_33673__$1 = inst_33684;
var state_33696__$1 = (function (){var statearr_33744 = state_33696;
(statearr_33744[(10)] = inst_33683);

(statearr_33744[(8)] = inst_33673__$1);

return statearr_33744;
})();
var statearr_33751_35979 = state_33696__$1;
(statearr_33751_35979[(2)] = null);

(statearr_33751_35979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (9))){
var state_33696__$1 = state_33696;
var statearr_33752_35981 = state_33696__$1;
(statearr_33752_35981[(2)] = null);

(statearr_33752_35981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (5))){
var state_33696__$1 = state_33696;
var statearr_33755_35982 = state_33696__$1;
(statearr_33755_35982[(2)] = null);

(statearr_33755_35982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (10))){
var inst_33688 = (state_33696[(2)]);
var state_33696__$1 = state_33696;
var statearr_33760_35984 = state_33696__$1;
(statearr_33760_35984[(2)] = inst_33688);

(statearr_33760_35984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (8))){
var inst_33678 = (state_33696[(7)]);
var state_33696__$1 = state_33696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33696__$1,(11),out,inst_33678);
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
var cljs$core$async$state_machine__30671__auto__ = null;
var cljs$core$async$state_machine__30671__auto____0 = (function (){
var statearr_33764 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33764[(0)] = cljs$core$async$state_machine__30671__auto__);

(statearr_33764[(1)] = (1));

return statearr_33764;
});
var cljs$core$async$state_machine__30671__auto____1 = (function (state_33696){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_33696);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e33766){var ex__30674__auto__ = e33766;
var statearr_33767_35985 = state_33696;
(statearr_33767_35985[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_33696[(4)]))){
var statearr_33769_35988 = state_33696;
(statearr_33769_35988[(1)] = cljs.core.first((state_33696[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35994 = state_33696;
state_33696 = G__35994;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$state_machine__30671__auto__ = function(state_33696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30671__auto____1.call(this,state_33696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30671__auto____0;
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30671__auto____1;
return cljs$core$async$state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_33774 = f__30950__auto__();
(statearr_33774[(6)] = c__30949__auto___35972);

return statearr_33774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
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
cljs.core.async.t_cljs$core$async33799 = (function (f,ch,meta33785,_,fn1,meta33800){
this.f = f;
this.ch = ch;
this.meta33785 = meta33785;
this._ = _;
this.fn1 = fn1;
this.meta33800 = meta33800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33801,meta33800__$1){
var self__ = this;
var _33801__$1 = this;
return (new cljs.core.async.t_cljs$core$async33799(self__.f,self__.ch,self__.meta33785,self__._,self__.fn1,meta33800__$1));
}));

(cljs.core.async.t_cljs$core$async33799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33801){
var self__ = this;
var _33801__$1 = this;
return self__.meta33800;
}));

(cljs.core.async.t_cljs$core$async33799.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33780_SHARP_){
var G__33803 = (((p1__33780_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33780_SHARP_) : self__.f.call(null,p1__33780_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33803) : f1.call(null,G__33803));
});
}));

(cljs.core.async.t_cljs$core$async33799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33785","meta33785",1054714799,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33784","cljs.core.async/t_cljs$core$async33784",501576697,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33800","meta33800",178372390,null)], null);
}));

(cljs.core.async.t_cljs$core$async33799.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33799");

(cljs.core.async.t_cljs$core$async33799.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33799");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33799.
 */
cljs.core.async.__GT_t_cljs$core$async33799 = (function cljs$core$async$__GT_t_cljs$core$async33799(f,ch,meta33785,_,fn1,meta33800){
return (new cljs.core.async.t_cljs$core$async33799(f,ch,meta33785,_,fn1,meta33800));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33784 = (function (f,ch,meta33785){
this.f = f;
this.ch = ch;
this.meta33785 = meta33785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33786,meta33785__$1){
var self__ = this;
var _33786__$1 = this;
return (new cljs.core.async.t_cljs$core$async33784(self__.f,self__.ch,meta33785__$1));
}));

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33786){
var self__ = this;
var _33786__$1 = this;
return self__.meta33785;
}));

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33799(self__.f,self__.ch,self__.meta33785,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33806 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33806) : self__.f.call(null,G__33806));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33785","meta33785",1054714799,null)], null);
}));

(cljs.core.async.t_cljs$core$async33784.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33784");

(cljs.core.async.t_cljs$core$async33784.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33784");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33784.
 */
cljs.core.async.__GT_t_cljs$core$async33784 = (function cljs$core$async$__GT_t_cljs$core$async33784(f,ch,meta33785){
return (new cljs.core.async.t_cljs$core$async33784(f,ch,meta33785));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33784(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33807 = (function (f,ch,meta33808){
this.f = f;
this.ch = ch;
this.meta33808 = meta33808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33809,meta33808__$1){
var self__ = this;
var _33809__$1 = this;
return (new cljs.core.async.t_cljs$core$async33807(self__.f,self__.ch,meta33808__$1));
}));

(cljs.core.async.t_cljs$core$async33807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33809){
var self__ = this;
var _33809__$1 = this;
return self__.meta33808;
}));

(cljs.core.async.t_cljs$core$async33807.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33807.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33807.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33807.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33807.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33807.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33808","meta33808",1095367037,null)], null);
}));

(cljs.core.async.t_cljs$core$async33807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33807");

(cljs.core.async.t_cljs$core$async33807.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33807.
 */
cljs.core.async.__GT_t_cljs$core$async33807 = (function cljs$core$async$__GT_t_cljs$core$async33807(f,ch,meta33808){
return (new cljs.core.async.t_cljs$core$async33807(f,ch,meta33808));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33807(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33827 = (function (p,ch,meta33828){
this.p = p;
this.ch = ch;
this.meta33828 = meta33828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33829,meta33828__$1){
var self__ = this;
var _33829__$1 = this;
return (new cljs.core.async.t_cljs$core$async33827(self__.p,self__.ch,meta33828__$1));
}));

(cljs.core.async.t_cljs$core$async33827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33829){
var self__ = this;
var _33829__$1 = this;
return self__.meta33828;
}));

(cljs.core.async.t_cljs$core$async33827.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33827.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33827.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33827.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33827.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33827.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33827.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33828","meta33828",-1530047866,null)], null);
}));

(cljs.core.async.t_cljs$core$async33827.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33827");

(cljs.core.async.t_cljs$core$async33827.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33827");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33827.
 */
cljs.core.async.__GT_t_cljs$core$async33827 = (function cljs$core$async$__GT_t_cljs$core$async33827(p,ch,meta33828){
return (new cljs.core.async.t_cljs$core$async33827(p,ch,meta33828));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33827(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33852 = arguments.length;
switch (G__33852) {
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
var c__30949__auto___36144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_33882){
var state_val_33883 = (state_33882[(1)]);
if((state_val_33883 === (7))){
var inst_33878 = (state_33882[(2)]);
var state_33882__$1 = state_33882;
var statearr_33891_36157 = state_33882__$1;
(statearr_33891_36157[(2)] = inst_33878);

(statearr_33891_36157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (1))){
var state_33882__$1 = state_33882;
var statearr_33895_36159 = state_33882__$1;
(statearr_33895_36159[(2)] = null);

(statearr_33895_36159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (4))){
var inst_33864 = (state_33882[(7)]);
var inst_33864__$1 = (state_33882[(2)]);
var inst_33865 = (inst_33864__$1 == null);
var state_33882__$1 = (function (){var statearr_33901 = state_33882;
(statearr_33901[(7)] = inst_33864__$1);

return statearr_33901;
})();
if(cljs.core.truth_(inst_33865)){
var statearr_33902_36181 = state_33882__$1;
(statearr_33902_36181[(1)] = (5));

} else {
var statearr_33903_36190 = state_33882__$1;
(statearr_33903_36190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (6))){
var inst_33864 = (state_33882[(7)]);
var inst_33869 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33864) : p.call(null,inst_33864));
var state_33882__$1 = state_33882;
if(cljs.core.truth_(inst_33869)){
var statearr_33905_36202 = state_33882__$1;
(statearr_33905_36202[(1)] = (8));

} else {
var statearr_33907_36203 = state_33882__$1;
(statearr_33907_36203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (3))){
var inst_33880 = (state_33882[(2)]);
var state_33882__$1 = state_33882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33882__$1,inst_33880);
} else {
if((state_val_33883 === (2))){
var state_33882__$1 = state_33882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33882__$1,(4),ch);
} else {
if((state_val_33883 === (11))){
var inst_33872 = (state_33882[(2)]);
var state_33882__$1 = state_33882;
var statearr_33911_36217 = state_33882__$1;
(statearr_33911_36217[(2)] = inst_33872);

(statearr_33911_36217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (9))){
var state_33882__$1 = state_33882;
var statearr_33912_36224 = state_33882__$1;
(statearr_33912_36224[(2)] = null);

(statearr_33912_36224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (5))){
var inst_33867 = cljs.core.async.close_BANG_(out);
var state_33882__$1 = state_33882;
var statearr_33915_36241 = state_33882__$1;
(statearr_33915_36241[(2)] = inst_33867);

(statearr_33915_36241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (10))){
var inst_33875 = (state_33882[(2)]);
var state_33882__$1 = (function (){var statearr_33916 = state_33882;
(statearr_33916[(8)] = inst_33875);

return statearr_33916;
})();
var statearr_33917_36248 = state_33882__$1;
(statearr_33917_36248[(2)] = null);

(statearr_33917_36248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (8))){
var inst_33864 = (state_33882[(7)]);
var state_33882__$1 = state_33882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33882__$1,(11),out,inst_33864);
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
var cljs$core$async$state_machine__30671__auto__ = null;
var cljs$core$async$state_machine__30671__auto____0 = (function (){
var statearr_33926 = [null,null,null,null,null,null,null,null,null];
(statearr_33926[(0)] = cljs$core$async$state_machine__30671__auto__);

(statearr_33926[(1)] = (1));

return statearr_33926;
});
var cljs$core$async$state_machine__30671__auto____1 = (function (state_33882){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_33882);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e33929){var ex__30674__auto__ = e33929;
var statearr_33930_36271 = state_33882;
(statearr_33930_36271[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_33882[(4)]))){
var statearr_33932_36276 = state_33882;
(statearr_33932_36276[(1)] = cljs.core.first((state_33882[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36278 = state_33882;
state_33882 = G__36278;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$state_machine__30671__auto__ = function(state_33882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30671__auto____1.call(this,state_33882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30671__auto____0;
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30671__auto____1;
return cljs$core$async$state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_33937 = f__30950__auto__();
(statearr_33937[(6)] = c__30949__auto___36144);

return statearr_33937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33939 = arguments.length;
switch (G__33939) {
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
var c__30949__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_34024){
var state_val_34025 = (state_34024[(1)]);
if((state_val_34025 === (7))){
var inst_34016 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
var statearr_34034_36297 = state_34024__$1;
(statearr_34034_36297[(2)] = inst_34016);

(statearr_34034_36297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (20))){
var inst_33985 = (state_34024[(7)]);
var inst_33997 = (state_34024[(2)]);
var inst_33998 = cljs.core.next(inst_33985);
var inst_33956 = inst_33998;
var inst_33957 = null;
var inst_33958 = (0);
var inst_33959 = (0);
var state_34024__$1 = (function (){var statearr_34039 = state_34024;
(statearr_34039[(8)] = inst_33997);

(statearr_34039[(9)] = inst_33956);

(statearr_34039[(10)] = inst_33957);

(statearr_34039[(11)] = inst_33958);

(statearr_34039[(12)] = inst_33959);

return statearr_34039;
})();
var statearr_34043_36306 = state_34024__$1;
(statearr_34043_36306[(2)] = null);

(statearr_34043_36306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (1))){
var state_34024__$1 = state_34024;
var statearr_34044_36307 = state_34024__$1;
(statearr_34044_36307[(2)] = null);

(statearr_34044_36307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (4))){
var inst_33944 = (state_34024[(13)]);
var inst_33944__$1 = (state_34024[(2)]);
var inst_33945 = (inst_33944__$1 == null);
var state_34024__$1 = (function (){var statearr_34055 = state_34024;
(statearr_34055[(13)] = inst_33944__$1);

return statearr_34055;
})();
if(cljs.core.truth_(inst_33945)){
var statearr_34056_36310 = state_34024__$1;
(statearr_34056_36310[(1)] = (5));

} else {
var statearr_34057_36311 = state_34024__$1;
(statearr_34057_36311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (15))){
var state_34024__$1 = state_34024;
var statearr_34074_36313 = state_34024__$1;
(statearr_34074_36313[(2)] = null);

(statearr_34074_36313[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (21))){
var state_34024__$1 = state_34024;
var statearr_34082_36314 = state_34024__$1;
(statearr_34082_36314[(2)] = null);

(statearr_34082_36314[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (13))){
var inst_33959 = (state_34024[(12)]);
var inst_33956 = (state_34024[(9)]);
var inst_33957 = (state_34024[(10)]);
var inst_33958 = (state_34024[(11)]);
var inst_33979 = (state_34024[(2)]);
var inst_33980 = (inst_33959 + (1));
var tmp34068 = inst_33957;
var tmp34069 = inst_33956;
var tmp34070 = inst_33958;
var inst_33956__$1 = tmp34069;
var inst_33957__$1 = tmp34068;
var inst_33958__$1 = tmp34070;
var inst_33959__$1 = inst_33980;
var state_34024__$1 = (function (){var statearr_34100 = state_34024;
(statearr_34100[(14)] = inst_33979);

(statearr_34100[(9)] = inst_33956__$1);

(statearr_34100[(10)] = inst_33957__$1);

(statearr_34100[(11)] = inst_33958__$1);

(statearr_34100[(12)] = inst_33959__$1);

return statearr_34100;
})();
var statearr_34103_36319 = state_34024__$1;
(statearr_34103_36319[(2)] = null);

(statearr_34103_36319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (22))){
var state_34024__$1 = state_34024;
var statearr_34106_36321 = state_34024__$1;
(statearr_34106_36321[(2)] = null);

(statearr_34106_36321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (6))){
var inst_33944 = (state_34024[(13)]);
var inst_33953 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33944) : f.call(null,inst_33944));
var inst_33954 = cljs.core.seq(inst_33953);
var inst_33956 = inst_33954;
var inst_33957 = null;
var inst_33958 = (0);
var inst_33959 = (0);
var state_34024__$1 = (function (){var statearr_34107 = state_34024;
(statearr_34107[(9)] = inst_33956);

(statearr_34107[(10)] = inst_33957);

(statearr_34107[(11)] = inst_33958);

(statearr_34107[(12)] = inst_33959);

return statearr_34107;
})();
var statearr_34108_36324 = state_34024__$1;
(statearr_34108_36324[(2)] = null);

(statearr_34108_36324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (17))){
var inst_33985 = (state_34024[(7)]);
var inst_33989 = cljs.core.chunk_first(inst_33985);
var inst_33991 = cljs.core.chunk_rest(inst_33985);
var inst_33992 = cljs.core.count(inst_33989);
var inst_33956 = inst_33991;
var inst_33957 = inst_33989;
var inst_33958 = inst_33992;
var inst_33959 = (0);
var state_34024__$1 = (function (){var statearr_34109 = state_34024;
(statearr_34109[(9)] = inst_33956);

(statearr_34109[(10)] = inst_33957);

(statearr_34109[(11)] = inst_33958);

(statearr_34109[(12)] = inst_33959);

return statearr_34109;
})();
var statearr_34110_36333 = state_34024__$1;
(statearr_34110_36333[(2)] = null);

(statearr_34110_36333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (3))){
var inst_34018 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34024__$1,inst_34018);
} else {
if((state_val_34025 === (12))){
var inst_34006 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
var statearr_34111_36343 = state_34024__$1;
(statearr_34111_36343[(2)] = inst_34006);

(statearr_34111_36343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (2))){
var state_34024__$1 = state_34024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34024__$1,(4),in$);
} else {
if((state_val_34025 === (23))){
var inst_34014 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
var statearr_34112_36351 = state_34024__$1;
(statearr_34112_36351[(2)] = inst_34014);

(statearr_34112_36351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (19))){
var inst_34001 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
var statearr_34113_36352 = state_34024__$1;
(statearr_34113_36352[(2)] = inst_34001);

(statearr_34113_36352[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (11))){
var inst_33956 = (state_34024[(9)]);
var inst_33985 = (state_34024[(7)]);
var inst_33985__$1 = cljs.core.seq(inst_33956);
var state_34024__$1 = (function (){var statearr_34114 = state_34024;
(statearr_34114[(7)] = inst_33985__$1);

return statearr_34114;
})();
if(inst_33985__$1){
var statearr_34115_36361 = state_34024__$1;
(statearr_34115_36361[(1)] = (14));

} else {
var statearr_34116_36363 = state_34024__$1;
(statearr_34116_36363[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (9))){
var inst_34008 = (state_34024[(2)]);
var inst_34009 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34024__$1 = (function (){var statearr_34117 = state_34024;
(statearr_34117[(15)] = inst_34008);

return statearr_34117;
})();
if(cljs.core.truth_(inst_34009)){
var statearr_34118_36369 = state_34024__$1;
(statearr_34118_36369[(1)] = (21));

} else {
var statearr_34119_36374 = state_34024__$1;
(statearr_34119_36374[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (5))){
var inst_33947 = cljs.core.async.close_BANG_(out);
var state_34024__$1 = state_34024;
var statearr_34120_36378 = state_34024__$1;
(statearr_34120_36378[(2)] = inst_33947);

(statearr_34120_36378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (14))){
var inst_33985 = (state_34024[(7)]);
var inst_33987 = cljs.core.chunked_seq_QMARK_(inst_33985);
var state_34024__$1 = state_34024;
if(inst_33987){
var statearr_34121_36386 = state_34024__$1;
(statearr_34121_36386[(1)] = (17));

} else {
var statearr_34122_36387 = state_34024__$1;
(statearr_34122_36387[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (16))){
var inst_34004 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
var statearr_34123_36388 = state_34024__$1;
(statearr_34123_36388[(2)] = inst_34004);

(statearr_34123_36388[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (10))){
var inst_33957 = (state_34024[(10)]);
var inst_33959 = (state_34024[(12)]);
var inst_33977 = cljs.core._nth(inst_33957,inst_33959);
var state_34024__$1 = state_34024;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34024__$1,(13),out,inst_33977);
} else {
if((state_val_34025 === (18))){
var inst_33985 = (state_34024[(7)]);
var inst_33995 = cljs.core.first(inst_33985);
var state_34024__$1 = state_34024;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34024__$1,(20),out,inst_33995);
} else {
if((state_val_34025 === (8))){
var inst_33959 = (state_34024[(12)]);
var inst_33958 = (state_34024[(11)]);
var inst_33974 = (inst_33959 < inst_33958);
var inst_33975 = inst_33974;
var state_34024__$1 = state_34024;
if(cljs.core.truth_(inst_33975)){
var statearr_34124_36400 = state_34024__$1;
(statearr_34124_36400[(1)] = (10));

} else {
var statearr_34125_36401 = state_34024__$1;
(statearr_34125_36401[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30671__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30671__auto____0 = (function (){
var statearr_34126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34126[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30671__auto__);

(statearr_34126[(1)] = (1));

return statearr_34126;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30671__auto____1 = (function (state_34024){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_34024);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e34133){var ex__30674__auto__ = e34133;
var statearr_34134_36402 = state_34024;
(statearr_34134_36402[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_34024[(4)]))){
var statearr_34135_36403 = state_34024;
(statearr_34135_36403[(1)] = cljs.core.first((state_34024[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36404 = state_34024;
state_34024 = G__36404;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30671__auto__ = function(state_34024){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30671__auto____1.call(this,state_34024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30671__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30671__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_34136 = f__30950__auto__();
(statearr_34136[(6)] = c__30949__auto__);

return statearr_34136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
}));

return c__30949__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34140 = arguments.length;
switch (G__34140) {
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
var G__34153 = arguments.length;
switch (G__34153) {
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
var G__34157 = arguments.length;
switch (G__34157) {
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
var c__30949__auto___36421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_34186){
var state_val_34187 = (state_34186[(1)]);
if((state_val_34187 === (7))){
var inst_34181 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
var statearr_34194_36422 = state_34186__$1;
(statearr_34194_36422[(2)] = inst_34181);

(statearr_34194_36422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (1))){
var inst_34163 = null;
var state_34186__$1 = (function (){var statearr_34203 = state_34186;
(statearr_34203[(7)] = inst_34163);

return statearr_34203;
})();
var statearr_34204_36423 = state_34186__$1;
(statearr_34204_36423[(2)] = null);

(statearr_34204_36423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (4))){
var inst_34166 = (state_34186[(8)]);
var inst_34166__$1 = (state_34186[(2)]);
var inst_34167 = (inst_34166__$1 == null);
var inst_34168 = cljs.core.not(inst_34167);
var state_34186__$1 = (function (){var statearr_34208 = state_34186;
(statearr_34208[(8)] = inst_34166__$1);

return statearr_34208;
})();
if(inst_34168){
var statearr_34209_36425 = state_34186__$1;
(statearr_34209_36425[(1)] = (5));

} else {
var statearr_34210_36426 = state_34186__$1;
(statearr_34210_36426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (6))){
var state_34186__$1 = state_34186;
var statearr_34211_36427 = state_34186__$1;
(statearr_34211_36427[(2)] = null);

(statearr_34211_36427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (3))){
var inst_34183 = (state_34186[(2)]);
var inst_34184 = cljs.core.async.close_BANG_(out);
var state_34186__$1 = (function (){var statearr_34213 = state_34186;
(statearr_34213[(9)] = inst_34183);

return statearr_34213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34186__$1,inst_34184);
} else {
if((state_val_34187 === (2))){
var state_34186__$1 = state_34186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34186__$1,(4),ch);
} else {
if((state_val_34187 === (11))){
var inst_34166 = (state_34186[(8)]);
var inst_34175 = (state_34186[(2)]);
var inst_34163 = inst_34166;
var state_34186__$1 = (function (){var statearr_34215 = state_34186;
(statearr_34215[(10)] = inst_34175);

(statearr_34215[(7)] = inst_34163);

return statearr_34215;
})();
var statearr_34216_36437 = state_34186__$1;
(statearr_34216_36437[(2)] = null);

(statearr_34216_36437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (9))){
var inst_34166 = (state_34186[(8)]);
var state_34186__$1 = state_34186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34186__$1,(11),out,inst_34166);
} else {
if((state_val_34187 === (5))){
var inst_34166 = (state_34186[(8)]);
var inst_34163 = (state_34186[(7)]);
var inst_34170 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34166,inst_34163);
var state_34186__$1 = state_34186;
if(inst_34170){
var statearr_34224_36438 = state_34186__$1;
(statearr_34224_36438[(1)] = (8));

} else {
var statearr_34225_36439 = state_34186__$1;
(statearr_34225_36439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (10))){
var inst_34178 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
var statearr_34226_36440 = state_34186__$1;
(statearr_34226_36440[(2)] = inst_34178);

(statearr_34226_36440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (8))){
var inst_34163 = (state_34186[(7)]);
var tmp34223 = inst_34163;
var inst_34163__$1 = tmp34223;
var state_34186__$1 = (function (){var statearr_34227 = state_34186;
(statearr_34227[(7)] = inst_34163__$1);

return statearr_34227;
})();
var statearr_34228_36447 = state_34186__$1;
(statearr_34228_36447[(2)] = null);

(statearr_34228_36447[(1)] = (2));


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
var cljs$core$async$state_machine__30671__auto__ = null;
var cljs$core$async$state_machine__30671__auto____0 = (function (){
var statearr_34229 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34229[(0)] = cljs$core$async$state_machine__30671__auto__);

(statearr_34229[(1)] = (1));

return statearr_34229;
});
var cljs$core$async$state_machine__30671__auto____1 = (function (state_34186){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_34186);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e34230){var ex__30674__auto__ = e34230;
var statearr_34231_36454 = state_34186;
(statearr_34231_36454[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_34186[(4)]))){
var statearr_34232_36455 = state_34186;
(statearr_34232_36455[(1)] = cljs.core.first((state_34186[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36461 = state_34186;
state_34186 = G__36461;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$state_machine__30671__auto__ = function(state_34186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30671__auto____1.call(this,state_34186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30671__auto____0;
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30671__auto____1;
return cljs$core$async$state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_34233 = f__30950__auto__();
(statearr_34233[(6)] = c__30949__auto___36421);

return statearr_34233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34241 = arguments.length;
switch (G__34241) {
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
var c__30949__auto___36466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_34282){
var state_val_34283 = (state_34282[(1)]);
if((state_val_34283 === (7))){
var inst_34278 = (state_34282[(2)]);
var state_34282__$1 = state_34282;
var statearr_34288_36467 = state_34282__$1;
(statearr_34288_36467[(2)] = inst_34278);

(statearr_34288_36467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (1))){
var inst_34244 = (new Array(n));
var inst_34245 = inst_34244;
var inst_34246 = (0);
var state_34282__$1 = (function (){var statearr_34298 = state_34282;
(statearr_34298[(7)] = inst_34245);

(statearr_34298[(8)] = inst_34246);

return statearr_34298;
})();
var statearr_34299_36468 = state_34282__$1;
(statearr_34299_36468[(2)] = null);

(statearr_34299_36468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (4))){
var inst_34249 = (state_34282[(9)]);
var inst_34249__$1 = (state_34282[(2)]);
var inst_34251 = (inst_34249__$1 == null);
var inst_34252 = cljs.core.not(inst_34251);
var state_34282__$1 = (function (){var statearr_34300 = state_34282;
(statearr_34300[(9)] = inst_34249__$1);

return statearr_34300;
})();
if(inst_34252){
var statearr_34301_36470 = state_34282__$1;
(statearr_34301_36470[(1)] = (5));

} else {
var statearr_34302_36471 = state_34282__$1;
(statearr_34302_36471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (15))){
var inst_34272 = (state_34282[(2)]);
var state_34282__$1 = state_34282;
var statearr_34304_36475 = state_34282__$1;
(statearr_34304_36475[(2)] = inst_34272);

(statearr_34304_36475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (13))){
var state_34282__$1 = state_34282;
var statearr_34305_36476 = state_34282__$1;
(statearr_34305_36476[(2)] = null);

(statearr_34305_36476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (6))){
var inst_34246 = (state_34282[(8)]);
var inst_34268 = (inst_34246 > (0));
var state_34282__$1 = state_34282;
if(cljs.core.truth_(inst_34268)){
var statearr_34306_36477 = state_34282__$1;
(statearr_34306_36477[(1)] = (12));

} else {
var statearr_34307_36478 = state_34282__$1;
(statearr_34307_36478[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (3))){
var inst_34280 = (state_34282[(2)]);
var state_34282__$1 = state_34282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34282__$1,inst_34280);
} else {
if((state_val_34283 === (12))){
var inst_34245 = (state_34282[(7)]);
var inst_34270 = cljs.core.vec(inst_34245);
var state_34282__$1 = state_34282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34282__$1,(15),out,inst_34270);
} else {
if((state_val_34283 === (2))){
var state_34282__$1 = state_34282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34282__$1,(4),ch);
} else {
if((state_val_34283 === (11))){
var inst_34262 = (state_34282[(2)]);
var inst_34263 = (new Array(n));
var inst_34245 = inst_34263;
var inst_34246 = (0);
var state_34282__$1 = (function (){var statearr_34308 = state_34282;
(statearr_34308[(10)] = inst_34262);

(statearr_34308[(7)] = inst_34245);

(statearr_34308[(8)] = inst_34246);

return statearr_34308;
})();
var statearr_34309_36484 = state_34282__$1;
(statearr_34309_36484[(2)] = null);

(statearr_34309_36484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (9))){
var inst_34245 = (state_34282[(7)]);
var inst_34260 = cljs.core.vec(inst_34245);
var state_34282__$1 = state_34282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34282__$1,(11),out,inst_34260);
} else {
if((state_val_34283 === (5))){
var inst_34245 = (state_34282[(7)]);
var inst_34246 = (state_34282[(8)]);
var inst_34249 = (state_34282[(9)]);
var inst_34255 = (state_34282[(11)]);
var inst_34254 = (inst_34245[inst_34246] = inst_34249);
var inst_34255__$1 = (inst_34246 + (1));
var inst_34256 = (inst_34255__$1 < n);
var state_34282__$1 = (function (){var statearr_34311 = state_34282;
(statearr_34311[(12)] = inst_34254);

(statearr_34311[(11)] = inst_34255__$1);

return statearr_34311;
})();
if(cljs.core.truth_(inst_34256)){
var statearr_34312_36486 = state_34282__$1;
(statearr_34312_36486[(1)] = (8));

} else {
var statearr_34313_36488 = state_34282__$1;
(statearr_34313_36488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (14))){
var inst_34275 = (state_34282[(2)]);
var inst_34276 = cljs.core.async.close_BANG_(out);
var state_34282__$1 = (function (){var statearr_34315 = state_34282;
(statearr_34315[(13)] = inst_34275);

return statearr_34315;
})();
var statearr_34316_36489 = state_34282__$1;
(statearr_34316_36489[(2)] = inst_34276);

(statearr_34316_36489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (10))){
var inst_34266 = (state_34282[(2)]);
var state_34282__$1 = state_34282;
var statearr_34317_36492 = state_34282__$1;
(statearr_34317_36492[(2)] = inst_34266);

(statearr_34317_36492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (8))){
var inst_34245 = (state_34282[(7)]);
var inst_34255 = (state_34282[(11)]);
var tmp34314 = inst_34245;
var inst_34245__$1 = tmp34314;
var inst_34246 = inst_34255;
var state_34282__$1 = (function (){var statearr_34318 = state_34282;
(statearr_34318[(7)] = inst_34245__$1);

(statearr_34318[(8)] = inst_34246);

return statearr_34318;
})();
var statearr_34321_36501 = state_34282__$1;
(statearr_34321_36501[(2)] = null);

(statearr_34321_36501[(1)] = (2));


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
var cljs$core$async$state_machine__30671__auto__ = null;
var cljs$core$async$state_machine__30671__auto____0 = (function (){
var statearr_34322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34322[(0)] = cljs$core$async$state_machine__30671__auto__);

(statearr_34322[(1)] = (1));

return statearr_34322;
});
var cljs$core$async$state_machine__30671__auto____1 = (function (state_34282){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_34282);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e34323){var ex__30674__auto__ = e34323;
var statearr_34324_36509 = state_34282;
(statearr_34324_36509[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_34282[(4)]))){
var statearr_34325_36510 = state_34282;
(statearr_34325_36510[(1)] = cljs.core.first((state_34282[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36514 = state_34282;
state_34282 = G__36514;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$state_machine__30671__auto__ = function(state_34282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30671__auto____1.call(this,state_34282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30671__auto____0;
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30671__auto____1;
return cljs$core$async$state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_34328 = f__30950__auto__();
(statearr_34328[(6)] = c__30949__auto___36466);

return statearr_34328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34336 = arguments.length;
switch (G__34336) {
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
var c__30949__auto___36534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30950__auto__ = (function (){var switch__30670__auto__ = (function (state_34408){
var state_val_34409 = (state_34408[(1)]);
if((state_val_34409 === (7))){
var inst_34395 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34420_36541 = state_34408__$1;
(statearr_34420_36541[(2)] = inst_34395);

(statearr_34420_36541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (1))){
var inst_34337 = [];
var inst_34338 = inst_34337;
var inst_34339 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34408__$1 = (function (){var statearr_34426 = state_34408;
(statearr_34426[(7)] = inst_34338);

(statearr_34426[(8)] = inst_34339);

return statearr_34426;
})();
var statearr_34427_36558 = state_34408__$1;
(statearr_34427_36558[(2)] = null);

(statearr_34427_36558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (4))){
var inst_34342 = (state_34408[(9)]);
var inst_34342__$1 = (state_34408[(2)]);
var inst_34343 = (inst_34342__$1 == null);
var inst_34344 = cljs.core.not(inst_34343);
var state_34408__$1 = (function (){var statearr_34439 = state_34408;
(statearr_34439[(9)] = inst_34342__$1);

return statearr_34439;
})();
if(inst_34344){
var statearr_34442_36561 = state_34408__$1;
(statearr_34442_36561[(1)] = (5));

} else {
var statearr_34444_36562 = state_34408__$1;
(statearr_34444_36562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (15))){
var inst_34338 = (state_34408[(7)]);
var inst_34387 = cljs.core.vec(inst_34338);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34408__$1,(18),out,inst_34387);
} else {
if((state_val_34409 === (13))){
var inst_34382 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34447_36563 = state_34408__$1;
(statearr_34447_36563[(2)] = inst_34382);

(statearr_34447_36563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (6))){
var inst_34338 = (state_34408[(7)]);
var inst_34384 = inst_34338.length;
var inst_34385 = (inst_34384 > (0));
var state_34408__$1 = state_34408;
if(cljs.core.truth_(inst_34385)){
var statearr_34451_36572 = state_34408__$1;
(statearr_34451_36572[(1)] = (15));

} else {
var statearr_34452_36573 = state_34408__$1;
(statearr_34452_36573[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (17))){
var inst_34392 = (state_34408[(2)]);
var inst_34393 = cljs.core.async.close_BANG_(out);
var state_34408__$1 = (function (){var statearr_34454 = state_34408;
(statearr_34454[(10)] = inst_34392);

return statearr_34454;
})();
var statearr_34455_36580 = state_34408__$1;
(statearr_34455_36580[(2)] = inst_34393);

(statearr_34455_36580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (3))){
var inst_34397 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34408__$1,inst_34397);
} else {
if((state_val_34409 === (12))){
var inst_34338 = (state_34408[(7)]);
var inst_34366 = cljs.core.vec(inst_34338);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34408__$1,(14),out,inst_34366);
} else {
if((state_val_34409 === (2))){
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34408__$1,(4),ch);
} else {
if((state_val_34409 === (11))){
var inst_34338 = (state_34408[(7)]);
var inst_34342 = (state_34408[(9)]);
var inst_34346 = (state_34408[(11)]);
var inst_34363 = inst_34338.push(inst_34342);
var tmp34456 = inst_34338;
var inst_34338__$1 = tmp34456;
var inst_34339 = inst_34346;
var state_34408__$1 = (function (){var statearr_34464 = state_34408;
(statearr_34464[(12)] = inst_34363);

(statearr_34464[(7)] = inst_34338__$1);

(statearr_34464[(8)] = inst_34339);

return statearr_34464;
})();
var statearr_34466_36586 = state_34408__$1;
(statearr_34466_36586[(2)] = null);

(statearr_34466_36586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (9))){
var inst_34339 = (state_34408[(8)]);
var inst_34358 = cljs.core.keyword_identical_QMARK_(inst_34339,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34408__$1 = state_34408;
var statearr_34467_36587 = state_34408__$1;
(statearr_34467_36587[(2)] = inst_34358);

(statearr_34467_36587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (5))){
var inst_34342 = (state_34408[(9)]);
var inst_34346 = (state_34408[(11)]);
var inst_34339 = (state_34408[(8)]);
var inst_34355 = (state_34408[(13)]);
var inst_34346__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34342) : f.call(null,inst_34342));
var inst_34355__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34346__$1,inst_34339);
var state_34408__$1 = (function (){var statearr_34468 = state_34408;
(statearr_34468[(11)] = inst_34346__$1);

(statearr_34468[(13)] = inst_34355__$1);

return statearr_34468;
})();
if(inst_34355__$1){
var statearr_34469_36590 = state_34408__$1;
(statearr_34469_36590[(1)] = (8));

} else {
var statearr_34470_36591 = state_34408__$1;
(statearr_34470_36591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (14))){
var inst_34342 = (state_34408[(9)]);
var inst_34346 = (state_34408[(11)]);
var inst_34368 = (state_34408[(2)]);
var inst_34369 = [];
var inst_34379 = inst_34369.push(inst_34342);
var inst_34338 = inst_34369;
var inst_34339 = inst_34346;
var state_34408__$1 = (function (){var statearr_34474 = state_34408;
(statearr_34474[(14)] = inst_34368);

(statearr_34474[(15)] = inst_34379);

(statearr_34474[(7)] = inst_34338);

(statearr_34474[(8)] = inst_34339);

return statearr_34474;
})();
var statearr_34475_36592 = state_34408__$1;
(statearr_34475_36592[(2)] = null);

(statearr_34475_36592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (16))){
var state_34408__$1 = state_34408;
var statearr_34476_36593 = state_34408__$1;
(statearr_34476_36593[(2)] = null);

(statearr_34476_36593[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (10))){
var inst_34360 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
if(cljs.core.truth_(inst_34360)){
var statearr_34481_36594 = state_34408__$1;
(statearr_34481_36594[(1)] = (11));

} else {
var statearr_34482_36595 = state_34408__$1;
(statearr_34482_36595[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (18))){
var inst_34389 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34483_36597 = state_34408__$1;
(statearr_34483_36597[(2)] = inst_34389);

(statearr_34483_36597[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (8))){
var inst_34355 = (state_34408[(13)]);
var state_34408__$1 = state_34408;
var statearr_34484_36598 = state_34408__$1;
(statearr_34484_36598[(2)] = inst_34355);

(statearr_34484_36598[(1)] = (10));


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
var cljs$core$async$state_machine__30671__auto__ = null;
var cljs$core$async$state_machine__30671__auto____0 = (function (){
var statearr_34485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34485[(0)] = cljs$core$async$state_machine__30671__auto__);

(statearr_34485[(1)] = (1));

return statearr_34485;
});
var cljs$core$async$state_machine__30671__auto____1 = (function (state_34408){
while(true){
var ret_value__30672__auto__ = (function (){try{while(true){
var result__30673__auto__ = switch__30670__auto__(state_34408);
if(cljs.core.keyword_identical_QMARK_(result__30673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30673__auto__;
}
break;
}
}catch (e34486){var ex__30674__auto__ = e34486;
var statearr_34487_36599 = state_34408;
(statearr_34487_36599[(2)] = ex__30674__auto__);


if(cljs.core.seq((state_34408[(4)]))){
var statearr_34488_36602 = state_34408;
(statearr_34488_36602[(1)] = cljs.core.first((state_34408[(4)])));

} else {
throw ex__30674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36604 = state_34408;
state_34408 = G__36604;
continue;
} else {
return ret_value__30672__auto__;
}
break;
}
});
cljs$core$async$state_machine__30671__auto__ = function(state_34408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30671__auto____1.call(this,state_34408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30671__auto____0;
cljs$core$async$state_machine__30671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30671__auto____1;
return cljs$core$async$state_machine__30671__auto__;
})()
})();
var state__30951__auto__ = (function (){var statearr_34490 = f__30950__auto__();
(statearr_34490[(6)] = c__30949__auto___36534);

return statearr_34490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30951__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
