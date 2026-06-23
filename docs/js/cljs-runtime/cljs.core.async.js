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
cljs.core.async.t_cljs$core$async30991 = (function (f,blockable,meta30992){
this.f = f;
this.blockable = blockable;
this.meta30992 = meta30992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30993,meta30992__$1){
var self__ = this;
var _30993__$1 = this;
return (new cljs.core.async.t_cljs$core$async30991(self__.f,self__.blockable,meta30992__$1));
}));

(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30993){
var self__ = this;
var _30993__$1 = this;
return self__.meta30992;
}));

(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30992","meta30992",-142435253,null)], null);
}));

(cljs.core.async.t_cljs$core$async30991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30991");

(cljs.core.async.t_cljs$core$async30991.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async30991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30991.
 */
cljs.core.async.__GT_t_cljs$core$async30991 = (function cljs$core$async$__GT_t_cljs$core$async30991(f,blockable,meta30992){
return (new cljs.core.async.t_cljs$core$async30991(f,blockable,meta30992));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30990 = arguments.length;
switch (G__30990) {
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
return (new cljs.core.async.t_cljs$core$async30991(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31014 = arguments.length;
switch (G__31014) {
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
var G__31023 = arguments.length;
switch (G__31023) {
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
var G__31043 = arguments.length;
switch (G__31043) {
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
var val_34370 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34370) : fn1.call(null,val_34370));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34370) : fn1.call(null,val_34370));
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
var G__31069 = arguments.length;
switch (G__31069) {
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
var n__5616__auto___34378 = n;
var x_34379 = (0);
while(true){
if((x_34379 < n__5616__auto___34378)){
(a[x_34379] = x_34379);

var G__34380 = (x_34379 + (1));
x_34379 = G__34380;
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
cljs.core.async.t_cljs$core$async31113 = (function (flag,meta31114){
this.flag = flag;
this.meta31114 = meta31114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31115,meta31114__$1){
var self__ = this;
var _31115__$1 = this;
return (new cljs.core.async.t_cljs$core$async31113(self__.flag,meta31114__$1));
}));

(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31115){
var self__ = this;
var _31115__$1 = this;
return self__.meta31114;
}));

(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31114","meta31114",802595479,null)], null);
}));

(cljs.core.async.t_cljs$core$async31113.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31113");

(cljs.core.async.t_cljs$core$async31113.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31113");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31113.
 */
cljs.core.async.__GT_t_cljs$core$async31113 = (function cljs$core$async$__GT_t_cljs$core$async31113(flag,meta31114){
return (new cljs.core.async.t_cljs$core$async31113(flag,meta31114));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31113(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31161 = (function (flag,cb,meta31162){
this.flag = flag;
this.cb = cb;
this.meta31162 = meta31162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31164,meta31162__$1){
var self__ = this;
var _31164__$1 = this;
return (new cljs.core.async.t_cljs$core$async31161(self__.flag,self__.cb,meta31162__$1));
}));

(cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31164){
var self__ = this;
var _31164__$1 = this;
return self__.meta31162;
}));

(cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31162","meta31162",-961393003,null)], null);
}));

(cljs.core.async.t_cljs$core$async31161.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31161");

(cljs.core.async.t_cljs$core$async31161.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31161");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31161.
 */
cljs.core.async.__GT_t_cljs$core$async31161 = (function cljs$core$async$__GT_t_cljs$core$async31161(flag,cb,meta31162){
return (new cljs.core.async.t_cljs$core$async31161(flag,cb,meta31162));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31161(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_34397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34397)){
if((!(((port_34397.cljs$core$IFn$_invoke$arity$1 ? port_34397.cljs$core$IFn$_invoke$arity$1((1)) : port_34397.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34398 = (i + (1));
i = G__34398;
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
return (function (p1__31288_SHARP_){
var G__31319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31288_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31319) : fret.call(null,G__31319));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31293_SHARP_){
var G__31327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31293_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31327) : fret.call(null,G__31327));
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
var G__34401 = (i + (1));
i = G__34401;
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
var len__5749__auto___34402 = arguments.length;
var i__5750__auto___34403 = (0);
while(true){
if((i__5750__auto___34403 < len__5749__auto___34402)){
args__5755__auto__.push((arguments[i__5750__auto___34403]));

var G__34404 = (i__5750__auto___34403 + (1));
i__5750__auto___34403 = G__34404;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31345){
var map__31346 = p__31345;
var map__31346__$1 = cljs.core.__destructure_map(map__31346);
var opts = map__31346__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31337){
var G__31338 = cljs.core.first(seq31337);
var seq31337__$1 = cljs.core.next(seq31337);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31338,seq31337__$1);
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
var G__31357 = arguments.length;
switch (G__31357) {
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
var c__30881__auto___34430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_31441){
var state_val_31444 = (state_31441[(1)]);
if((state_val_31444 === (7))){
var inst_31423 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
var statearr_31447_34432 = state_31441__$1;
(statearr_31447_34432[(2)] = inst_31423);

(statearr_31447_34432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (1))){
var state_31441__$1 = state_31441;
var statearr_31449_34433 = state_31441__$1;
(statearr_31449_34433[(2)] = null);

(statearr_31449_34433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (4))){
var inst_31398 = (state_31441[(7)]);
var inst_31398__$1 = (state_31441[(2)]);
var inst_31404 = (inst_31398__$1 == null);
var state_31441__$1 = (function (){var statearr_31454 = state_31441;
(statearr_31454[(7)] = inst_31398__$1);

return statearr_31454;
})();
if(cljs.core.truth_(inst_31404)){
var statearr_31455_34437 = state_31441__$1;
(statearr_31455_34437[(1)] = (5));

} else {
var statearr_31456_34439 = state_31441__$1;
(statearr_31456_34439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (13))){
var state_31441__$1 = state_31441;
var statearr_31461_34441 = state_31441__$1;
(statearr_31461_34441[(2)] = null);

(statearr_31461_34441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (6))){
var inst_31398 = (state_31441[(7)]);
var state_31441__$1 = state_31441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31441__$1,(11),to,inst_31398);
} else {
if((state_val_31444 === (3))){
var inst_31429 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31441__$1,inst_31429);
} else {
if((state_val_31444 === (12))){
var state_31441__$1 = state_31441;
var statearr_31468_34442 = state_31441__$1;
(statearr_31468_34442[(2)] = null);

(statearr_31468_34442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (2))){
var state_31441__$1 = state_31441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31441__$1,(4),from);
} else {
if((state_val_31444 === (11))){
var inst_31413 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
if(cljs.core.truth_(inst_31413)){
var statearr_31474_34454 = state_31441__$1;
(statearr_31474_34454[(1)] = (12));

} else {
var statearr_31475_34455 = state_31441__$1;
(statearr_31475_34455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (9))){
var state_31441__$1 = state_31441;
var statearr_31477_34456 = state_31441__$1;
(statearr_31477_34456[(2)] = null);

(statearr_31477_34456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (5))){
var state_31441__$1 = state_31441;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31480_34457 = state_31441__$1;
(statearr_31480_34457[(1)] = (8));

} else {
var statearr_31483_34459 = state_31441__$1;
(statearr_31483_34459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (14))){
var inst_31421 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
var statearr_31484_34460 = state_31441__$1;
(statearr_31484_34460[(2)] = inst_31421);

(statearr_31484_34460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (10))){
var inst_31410 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
var statearr_31485_34461 = state_31441__$1;
(statearr_31485_34461[(2)] = inst_31410);

(statearr_31485_34461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (8))){
var inst_31407 = cljs.core.async.close_BANG_(to);
var state_31441__$1 = state_31441;
var statearr_31487_34462 = state_31441__$1;
(statearr_31487_34462[(2)] = inst_31407);

(statearr_31487_34462[(1)] = (10));


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
var cljs$core$async$state_machine__30687__auto__ = null;
var cljs$core$async$state_machine__30687__auto____0 = (function (){
var statearr_31495 = [null,null,null,null,null,null,null,null];
(statearr_31495[(0)] = cljs$core$async$state_machine__30687__auto__);

(statearr_31495[(1)] = (1));

return statearr_31495;
});
var cljs$core$async$state_machine__30687__auto____1 = (function (state_31441){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_31441);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e31496){var ex__30690__auto__ = e31496;
var statearr_31500_34466 = state_31441;
(statearr_31500_34466[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_31441[(4)]))){
var statearr_31501_34468 = state_31441;
(statearr_31501_34468[(1)] = cljs.core.first((state_31441[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34469 = state_31441;
state_31441 = G__34469;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$state_machine__30687__auto__ = function(state_31441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30687__auto____1.call(this,state_31441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30687__auto____0;
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30687__auto____1;
return cljs$core$async$state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_31502 = f__30882__auto__();
(statearr_31502[(6)] = c__30881__auto___34430);

return statearr_31502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
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
var process__$1 = (function (p__31522){
var vec__31523 = p__31522;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31523,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31523,(1),null);
var job = vec__31523;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30881__auto___34471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_31530){
var state_val_31531 = (state_31530[(1)]);
if((state_val_31531 === (1))){
var state_31530__$1 = state_31530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31530__$1,(2),res,v);
} else {
if((state_val_31531 === (2))){
var inst_31527 = (state_31530[(2)]);
var inst_31528 = cljs.core.async.close_BANG_(res);
var state_31530__$1 = (function (){var statearr_31560 = state_31530;
(statearr_31560[(7)] = inst_31527);

return statearr_31560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31530__$1,inst_31528);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0 = (function (){
var statearr_31576 = [null,null,null,null,null,null,null,null];
(statearr_31576[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__);

(statearr_31576[(1)] = (1));

return statearr_31576;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1 = (function (state_31530){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_31530);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e31581){var ex__30690__auto__ = e31581;
var statearr_31583_34475 = state_31530;
(statearr_31583_34475[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_31530[(4)]))){
var statearr_31590_34479 = state_31530;
(statearr_31590_34479[(1)] = cljs.core.first((state_31530[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34484 = state_31530;
state_31530 = G__34484;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__ = function(state_31530){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1.call(this,state_31530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_31593 = f__30882__auto__();
(statearr_31593[(6)] = c__30881__auto___34471);

return statearr_31593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31597){
var vec__31598 = p__31597;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31598,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31598,(1),null);
var job = vec__31598;
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
var n__5616__auto___34490 = n;
var __34491 = (0);
while(true){
if((__34491 < n__5616__auto___34490)){
var G__31607_34492 = type;
var G__31607_34493__$1 = (((G__31607_34492 instanceof cljs.core.Keyword))?G__31607_34492.fqn:null);
switch (G__31607_34493__$1) {
case "compute":
var c__30881__auto___34499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34491,c__30881__auto___34499,G__31607_34492,G__31607_34493__$1,n__5616__auto___34490,jobs,results,process__$1,async){
return (function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = ((function (__34491,c__30881__auto___34499,G__31607_34492,G__31607_34493__$1,n__5616__auto___34490,jobs,results,process__$1,async){
return (function (state_31623){
var state_val_31624 = (state_31623[(1)]);
if((state_val_31624 === (1))){
var state_31623__$1 = state_31623;
var statearr_31626_34501 = state_31623__$1;
(statearr_31626_34501[(2)] = null);

(statearr_31626_34501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (2))){
var state_31623__$1 = state_31623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31623__$1,(4),jobs);
} else {
if((state_val_31624 === (3))){
var inst_31619 = (state_31623[(2)]);
var state_31623__$1 = state_31623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31623__$1,inst_31619);
} else {
if((state_val_31624 === (4))){
var inst_31611 = (state_31623[(2)]);
var inst_31612 = process__$1(inst_31611);
var state_31623__$1 = state_31623;
if(cljs.core.truth_(inst_31612)){
var statearr_31629_34510 = state_31623__$1;
(statearr_31629_34510[(1)] = (5));

} else {
var statearr_31631_34512 = state_31623__$1;
(statearr_31631_34512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (5))){
var state_31623__$1 = state_31623;
var statearr_31633_34517 = state_31623__$1;
(statearr_31633_34517[(2)] = null);

(statearr_31633_34517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (6))){
var state_31623__$1 = state_31623;
var statearr_31638_34526 = state_31623__$1;
(statearr_31638_34526[(2)] = null);

(statearr_31638_34526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (7))){
var inst_31617 = (state_31623[(2)]);
var state_31623__$1 = state_31623;
var statearr_31639_34529 = state_31623__$1;
(statearr_31639_34529[(2)] = inst_31617);

(statearr_31639_34529[(1)] = (3));


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
});})(__34491,c__30881__auto___34499,G__31607_34492,G__31607_34493__$1,n__5616__auto___34490,jobs,results,process__$1,async))
;
return ((function (__34491,switch__30686__auto__,c__30881__auto___34499,G__31607_34492,G__31607_34493__$1,n__5616__auto___34490,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0 = (function (){
var statearr_31644 = [null,null,null,null,null,null,null];
(statearr_31644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__);

(statearr_31644[(1)] = (1));

return statearr_31644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1 = (function (state_31623){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_31623);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e31646){var ex__30690__auto__ = e31646;
var statearr_31647_34546 = state_31623;
(statearr_31647_34546[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_31623[(4)]))){
var statearr_31648_34547 = state_31623;
(statearr_31648_34547[(1)] = cljs.core.first((state_31623[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34551 = state_31623;
state_31623 = G__34551;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__ = function(state_31623){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1.call(this,state_31623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__;
})()
;})(__34491,switch__30686__auto__,c__30881__auto___34499,G__31607_34492,G__31607_34493__$1,n__5616__auto___34490,jobs,results,process__$1,async))
})();
var state__30883__auto__ = (function (){var statearr_31654 = f__30882__auto__();
(statearr_31654[(6)] = c__30881__auto___34499);

return statearr_31654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
});})(__34491,c__30881__auto___34499,G__31607_34492,G__31607_34493__$1,n__5616__auto___34490,jobs,results,process__$1,async))
);


break;
case "async":
var c__30881__auto___34559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34491,c__30881__auto___34559,G__31607_34492,G__31607_34493__$1,n__5616__auto___34490,jobs,results,process__$1,async){
return (function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = ((function (__34491,c__30881__auto___34559,G__31607_34492,G__31607_34493__$1,n__5616__auto___34490,jobs,results,process__$1,async){
return (function (state_31669){
var state_val_31670 = (state_31669[(1)]);
if((state_val_31670 === (1))){
var state_31669__$1 = state_31669;
var statearr_31672_34565 = state_31669__$1;
(statearr_31672_34565[(2)] = null);

(statearr_31672_34565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31670 === (2))){
var state_31669__$1 = state_31669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31669__$1,(4),jobs);
} else {
if((state_val_31670 === (3))){
var inst_31667 = (state_31669[(2)]);
var state_31669__$1 = state_31669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31669__$1,inst_31667);
} else {
if((state_val_31670 === (4))){
var inst_31659 = (state_31669[(2)]);
var inst_31660 = async(inst_31659);
var state_31669__$1 = state_31669;
if(cljs.core.truth_(inst_31660)){
var statearr_31679_34573 = state_31669__$1;
(statearr_31679_34573[(1)] = (5));

} else {
var statearr_31680_34574 = state_31669__$1;
(statearr_31680_34574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31670 === (5))){
var state_31669__$1 = state_31669;
var statearr_31684_34575 = state_31669__$1;
(statearr_31684_34575[(2)] = null);

(statearr_31684_34575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31670 === (6))){
var state_31669__$1 = state_31669;
var statearr_31689_34576 = state_31669__$1;
(statearr_31689_34576[(2)] = null);

(statearr_31689_34576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31670 === (7))){
var inst_31665 = (state_31669[(2)]);
var state_31669__$1 = state_31669;
var statearr_31690_34577 = state_31669__$1;
(statearr_31690_34577[(2)] = inst_31665);

(statearr_31690_34577[(1)] = (3));


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
});})(__34491,c__30881__auto___34559,G__31607_34492,G__31607_34493__$1,n__5616__auto___34490,jobs,results,process__$1,async))
;
return ((function (__34491,switch__30686__auto__,c__30881__auto___34559,G__31607_34492,G__31607_34493__$1,n__5616__auto___34490,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0 = (function (){
var statearr_31698 = [null,null,null,null,null,null,null];
(statearr_31698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__);

(statearr_31698[(1)] = (1));

return statearr_31698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1 = (function (state_31669){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_31669);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e31701){var ex__30690__auto__ = e31701;
var statearr_31703_34580 = state_31669;
(statearr_31703_34580[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_31669[(4)]))){
var statearr_31704_34581 = state_31669;
(statearr_31704_34581[(1)] = cljs.core.first((state_31669[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34582 = state_31669;
state_31669 = G__34582;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__ = function(state_31669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1.call(this,state_31669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__;
})()
;})(__34491,switch__30686__auto__,c__30881__auto___34559,G__31607_34492,G__31607_34493__$1,n__5616__auto___34490,jobs,results,process__$1,async))
})();
var state__30883__auto__ = (function (){var statearr_31707 = f__30882__auto__();
(statearr_31707[(6)] = c__30881__auto___34559);

return statearr_31707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
});})(__34491,c__30881__auto___34559,G__31607_34492,G__31607_34493__$1,n__5616__auto___34490,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31607_34493__$1)].join('')));

}

var G__34584 = (__34491 + (1));
__34491 = G__34584;
continue;
} else {
}
break;
}

var c__30881__auto___34585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_31736){
var state_val_31737 = (state_31736[(1)]);
if((state_val_31737 === (7))){
var inst_31728 = (state_31736[(2)]);
var state_31736__$1 = state_31736;
var statearr_31750_34588 = state_31736__$1;
(statearr_31750_34588[(2)] = inst_31728);

(statearr_31750_34588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (1))){
var state_31736__$1 = state_31736;
var statearr_31755_34589 = state_31736__$1;
(statearr_31755_34589[(2)] = null);

(statearr_31755_34589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (4))){
var inst_31710 = (state_31736[(7)]);
var inst_31710__$1 = (state_31736[(2)]);
var inst_31711 = (inst_31710__$1 == null);
var state_31736__$1 = (function (){var statearr_31758 = state_31736;
(statearr_31758[(7)] = inst_31710__$1);

return statearr_31758;
})();
if(cljs.core.truth_(inst_31711)){
var statearr_31760_34590 = state_31736__$1;
(statearr_31760_34590[(1)] = (5));

} else {
var statearr_31761_34591 = state_31736__$1;
(statearr_31761_34591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (6))){
var inst_31710 = (state_31736[(7)]);
var inst_31715 = (state_31736[(8)]);
var inst_31715__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31717 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31720 = [inst_31710,inst_31715__$1];
var inst_31721 = (new cljs.core.PersistentVector(null,2,(5),inst_31717,inst_31720,null));
var state_31736__$1 = (function (){var statearr_31766 = state_31736;
(statearr_31766[(8)] = inst_31715__$1);

return statearr_31766;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31736__$1,(8),jobs,inst_31721);
} else {
if((state_val_31737 === (3))){
var inst_31732 = (state_31736[(2)]);
var state_31736__$1 = state_31736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31736__$1,inst_31732);
} else {
if((state_val_31737 === (2))){
var state_31736__$1 = state_31736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31736__$1,(4),from);
} else {
if((state_val_31737 === (9))){
var inst_31725 = (state_31736[(2)]);
var state_31736__$1 = (function (){var statearr_31771 = state_31736;
(statearr_31771[(9)] = inst_31725);

return statearr_31771;
})();
var statearr_31772_34597 = state_31736__$1;
(statearr_31772_34597[(2)] = null);

(statearr_31772_34597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (5))){
var inst_31713 = cljs.core.async.close_BANG_(jobs);
var state_31736__$1 = state_31736;
var statearr_31777_34598 = state_31736__$1;
(statearr_31777_34598[(2)] = inst_31713);

(statearr_31777_34598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (8))){
var inst_31715 = (state_31736[(8)]);
var inst_31723 = (state_31736[(2)]);
var state_31736__$1 = (function (){var statearr_31778 = state_31736;
(statearr_31778[(10)] = inst_31723);

return statearr_31778;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31736__$1,(9),results,inst_31715);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0 = (function (){
var statearr_31780 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__);

(statearr_31780[(1)] = (1));

return statearr_31780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1 = (function (state_31736){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_31736);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e31782){var ex__30690__auto__ = e31782;
var statearr_31784_34601 = state_31736;
(statearr_31784_34601[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_31736[(4)]))){
var statearr_31785_34602 = state_31736;
(statearr_31785_34602[(1)] = cljs.core.first((state_31736[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34603 = state_31736;
state_31736 = G__34603;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__ = function(state_31736){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1.call(this,state_31736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_31789 = f__30882__auto__();
(statearr_31789[(6)] = c__30881__auto___34585);

return statearr_31789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
}));


var c__30881__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_31829){
var state_val_31830 = (state_31829[(1)]);
if((state_val_31830 === (7))){
var inst_31825 = (state_31829[(2)]);
var state_31829__$1 = state_31829;
var statearr_31831_34604 = state_31829__$1;
(statearr_31831_34604[(2)] = inst_31825);

(statearr_31831_34604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (20))){
var state_31829__$1 = state_31829;
var statearr_31833_34609 = state_31829__$1;
(statearr_31833_34609[(2)] = null);

(statearr_31833_34609[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (1))){
var state_31829__$1 = state_31829;
var statearr_31834_34610 = state_31829__$1;
(statearr_31834_34610[(2)] = null);

(statearr_31834_34610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (4))){
var inst_31792 = (state_31829[(7)]);
var inst_31792__$1 = (state_31829[(2)]);
var inst_31793 = (inst_31792__$1 == null);
var state_31829__$1 = (function (){var statearr_31835 = state_31829;
(statearr_31835[(7)] = inst_31792__$1);

return statearr_31835;
})();
if(cljs.core.truth_(inst_31793)){
var statearr_31836_34611 = state_31829__$1;
(statearr_31836_34611[(1)] = (5));

} else {
var statearr_31837_34612 = state_31829__$1;
(statearr_31837_34612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (15))){
var inst_31807 = (state_31829[(8)]);
var state_31829__$1 = state_31829;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31829__$1,(18),to,inst_31807);
} else {
if((state_val_31830 === (21))){
var inst_31820 = (state_31829[(2)]);
var state_31829__$1 = state_31829;
var statearr_31839_34613 = state_31829__$1;
(statearr_31839_34613[(2)] = inst_31820);

(statearr_31839_34613[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (13))){
var inst_31822 = (state_31829[(2)]);
var state_31829__$1 = (function (){var statearr_31840 = state_31829;
(statearr_31840[(9)] = inst_31822);

return statearr_31840;
})();
var statearr_31841_34615 = state_31829__$1;
(statearr_31841_34615[(2)] = null);

(statearr_31841_34615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (6))){
var inst_31792 = (state_31829[(7)]);
var state_31829__$1 = state_31829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31829__$1,(11),inst_31792);
} else {
if((state_val_31830 === (17))){
var inst_31815 = (state_31829[(2)]);
var state_31829__$1 = state_31829;
if(cljs.core.truth_(inst_31815)){
var statearr_31843_34616 = state_31829__$1;
(statearr_31843_34616[(1)] = (19));

} else {
var statearr_31844_34617 = state_31829__$1;
(statearr_31844_34617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (3))){
var inst_31827 = (state_31829[(2)]);
var state_31829__$1 = state_31829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31829__$1,inst_31827);
} else {
if((state_val_31830 === (12))){
var inst_31804 = (state_31829[(10)]);
var state_31829__$1 = state_31829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31829__$1,(14),inst_31804);
} else {
if((state_val_31830 === (2))){
var state_31829__$1 = state_31829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31829__$1,(4),results);
} else {
if((state_val_31830 === (19))){
var state_31829__$1 = state_31829;
var statearr_31845_34625 = state_31829__$1;
(statearr_31845_34625[(2)] = null);

(statearr_31845_34625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (11))){
var inst_31804 = (state_31829[(2)]);
var state_31829__$1 = (function (){var statearr_31846 = state_31829;
(statearr_31846[(10)] = inst_31804);

return statearr_31846;
})();
var statearr_31848_34626 = state_31829__$1;
(statearr_31848_34626[(2)] = null);

(statearr_31848_34626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (9))){
var state_31829__$1 = state_31829;
var statearr_31853_34627 = state_31829__$1;
(statearr_31853_34627[(2)] = null);

(statearr_31853_34627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (5))){
var state_31829__$1 = state_31829;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31854_34628 = state_31829__$1;
(statearr_31854_34628[(1)] = (8));

} else {
var statearr_31855_34629 = state_31829__$1;
(statearr_31855_34629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (14))){
var inst_31807 = (state_31829[(8)]);
var inst_31809 = (state_31829[(11)]);
var inst_31807__$1 = (state_31829[(2)]);
var inst_31808 = (inst_31807__$1 == null);
var inst_31809__$1 = cljs.core.not(inst_31808);
var state_31829__$1 = (function (){var statearr_31857 = state_31829;
(statearr_31857[(8)] = inst_31807__$1);

(statearr_31857[(11)] = inst_31809__$1);

return statearr_31857;
})();
if(inst_31809__$1){
var statearr_31858_34637 = state_31829__$1;
(statearr_31858_34637[(1)] = (15));

} else {
var statearr_31859_34638 = state_31829__$1;
(statearr_31859_34638[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (16))){
var inst_31809 = (state_31829[(11)]);
var state_31829__$1 = state_31829;
var statearr_31860_34645 = state_31829__$1;
(statearr_31860_34645[(2)] = inst_31809);

(statearr_31860_34645[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (10))){
var inst_31800 = (state_31829[(2)]);
var state_31829__$1 = state_31829;
var statearr_31862_34653 = state_31829__$1;
(statearr_31862_34653[(2)] = inst_31800);

(statearr_31862_34653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (18))){
var inst_31812 = (state_31829[(2)]);
var state_31829__$1 = state_31829;
var statearr_31864_34655 = state_31829__$1;
(statearr_31864_34655[(2)] = inst_31812);

(statearr_31864_34655[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (8))){
var inst_31796 = cljs.core.async.close_BANG_(to);
var state_31829__$1 = state_31829;
var statearr_31865_34658 = state_31829__$1;
(statearr_31865_34658[(2)] = inst_31796);

(statearr_31865_34658[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0 = (function (){
var statearr_31867 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__);

(statearr_31867[(1)] = (1));

return statearr_31867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1 = (function (state_31829){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_31829);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e31871){var ex__30690__auto__ = e31871;
var statearr_31872_34673 = state_31829;
(statearr_31872_34673[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_31829[(4)]))){
var statearr_31873_34675 = state_31829;
(statearr_31873_34675[(1)] = cljs.core.first((state_31829[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34684 = state_31829;
state_31829 = G__34684;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__ = function(state_31829){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1.call(this,state_31829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_31875 = f__30882__auto__();
(statearr_31875[(6)] = c__30881__auto__);

return statearr_31875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
}));

return c__30881__auto__;
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
var G__31877 = arguments.length;
switch (G__31877) {
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
var G__31882 = arguments.length;
switch (G__31882) {
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
var G__31887 = arguments.length;
switch (G__31887) {
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
var c__30881__auto___34717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_31917){
var state_val_31918 = (state_31917[(1)]);
if((state_val_31918 === (7))){
var inst_31913 = (state_31917[(2)]);
var state_31917__$1 = state_31917;
var statearr_31919_34718 = state_31917__$1;
(statearr_31919_34718[(2)] = inst_31913);

(statearr_31919_34718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31918 === (1))){
var state_31917__$1 = state_31917;
var statearr_31920_34723 = state_31917__$1;
(statearr_31920_34723[(2)] = null);

(statearr_31920_34723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31918 === (4))){
var inst_31893 = (state_31917[(7)]);
var inst_31893__$1 = (state_31917[(2)]);
var inst_31894 = (inst_31893__$1 == null);
var state_31917__$1 = (function (){var statearr_31922 = state_31917;
(statearr_31922[(7)] = inst_31893__$1);

return statearr_31922;
})();
if(cljs.core.truth_(inst_31894)){
var statearr_31924_34735 = state_31917__$1;
(statearr_31924_34735[(1)] = (5));

} else {
var statearr_31925_34738 = state_31917__$1;
(statearr_31925_34738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31918 === (13))){
var state_31917__$1 = state_31917;
var statearr_31926_34739 = state_31917__$1;
(statearr_31926_34739[(2)] = null);

(statearr_31926_34739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31918 === (6))){
var inst_31893 = (state_31917[(7)]);
var inst_31899 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31893) : p.call(null,inst_31893));
var state_31917__$1 = state_31917;
if(cljs.core.truth_(inst_31899)){
var statearr_31927_34741 = state_31917__$1;
(statearr_31927_34741[(1)] = (9));

} else {
var statearr_31928_34745 = state_31917__$1;
(statearr_31928_34745[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31918 === (3))){
var inst_31915 = (state_31917[(2)]);
var state_31917__$1 = state_31917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31917__$1,inst_31915);
} else {
if((state_val_31918 === (12))){
var state_31917__$1 = state_31917;
var statearr_31929_34746 = state_31917__$1;
(statearr_31929_34746[(2)] = null);

(statearr_31929_34746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31918 === (2))){
var state_31917__$1 = state_31917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31917__$1,(4),ch);
} else {
if((state_val_31918 === (11))){
var inst_31893 = (state_31917[(7)]);
var inst_31904 = (state_31917[(2)]);
var state_31917__$1 = state_31917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31917__$1,(8),inst_31904,inst_31893);
} else {
if((state_val_31918 === (9))){
var state_31917__$1 = state_31917;
var statearr_31935_34747 = state_31917__$1;
(statearr_31935_34747[(2)] = tc);

(statearr_31935_34747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31918 === (5))){
var inst_31896 = cljs.core.async.close_BANG_(tc);
var inst_31897 = cljs.core.async.close_BANG_(fc);
var state_31917__$1 = (function (){var statearr_31937 = state_31917;
(statearr_31937[(8)] = inst_31896);

return statearr_31937;
})();
var statearr_31938_34748 = state_31917__$1;
(statearr_31938_34748[(2)] = inst_31897);

(statearr_31938_34748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31918 === (14))){
var inst_31911 = (state_31917[(2)]);
var state_31917__$1 = state_31917;
var statearr_31939_34749 = state_31917__$1;
(statearr_31939_34749[(2)] = inst_31911);

(statearr_31939_34749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31918 === (10))){
var state_31917__$1 = state_31917;
var statearr_31940_34750 = state_31917__$1;
(statearr_31940_34750[(2)] = fc);

(statearr_31940_34750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31918 === (8))){
var inst_31906 = (state_31917[(2)]);
var state_31917__$1 = state_31917;
if(cljs.core.truth_(inst_31906)){
var statearr_31941_34751 = state_31917__$1;
(statearr_31941_34751[(1)] = (12));

} else {
var statearr_31943_34752 = state_31917__$1;
(statearr_31943_34752[(1)] = (13));

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
var cljs$core$async$state_machine__30687__auto__ = null;
var cljs$core$async$state_machine__30687__auto____0 = (function (){
var statearr_31945 = [null,null,null,null,null,null,null,null,null];
(statearr_31945[(0)] = cljs$core$async$state_machine__30687__auto__);

(statearr_31945[(1)] = (1));

return statearr_31945;
});
var cljs$core$async$state_machine__30687__auto____1 = (function (state_31917){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_31917);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e31947){var ex__30690__auto__ = e31947;
var statearr_31948_34758 = state_31917;
(statearr_31948_34758[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_31917[(4)]))){
var statearr_31952_34759 = state_31917;
(statearr_31952_34759[(1)] = cljs.core.first((state_31917[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34760 = state_31917;
state_31917 = G__34760;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$state_machine__30687__auto__ = function(state_31917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30687__auto____1.call(this,state_31917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30687__auto____0;
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30687__auto____1;
return cljs$core$async$state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_31956 = f__30882__auto__();
(statearr_31956[(6)] = c__30881__auto___34717);

return statearr_31956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
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
var c__30881__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_31985){
var state_val_31986 = (state_31985[(1)]);
if((state_val_31986 === (7))){
var inst_31980 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
var statearr_31988_34771 = state_31985__$1;
(statearr_31988_34771[(2)] = inst_31980);

(statearr_31988_34771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (1))){
var inst_31961 = init;
var inst_31962 = inst_31961;
var state_31985__$1 = (function (){var statearr_31989 = state_31985;
(statearr_31989[(7)] = inst_31962);

return statearr_31989;
})();
var statearr_31990_34780 = state_31985__$1;
(statearr_31990_34780[(2)] = null);

(statearr_31990_34780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (4))){
var inst_31965 = (state_31985[(8)]);
var inst_31965__$1 = (state_31985[(2)]);
var inst_31967 = (inst_31965__$1 == null);
var state_31985__$1 = (function (){var statearr_31991 = state_31985;
(statearr_31991[(8)] = inst_31965__$1);

return statearr_31991;
})();
if(cljs.core.truth_(inst_31967)){
var statearr_31992_34781 = state_31985__$1;
(statearr_31992_34781[(1)] = (5));

} else {
var statearr_31993_34782 = state_31985__$1;
(statearr_31993_34782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (6))){
var inst_31962 = (state_31985[(7)]);
var inst_31965 = (state_31985[(8)]);
var inst_31970 = (state_31985[(9)]);
var inst_31970__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31962,inst_31965) : f.call(null,inst_31962,inst_31965));
var inst_31971 = cljs.core.reduced_QMARK_(inst_31970__$1);
var state_31985__$1 = (function (){var statearr_31994 = state_31985;
(statearr_31994[(9)] = inst_31970__$1);

return statearr_31994;
})();
if(inst_31971){
var statearr_31995_34783 = state_31985__$1;
(statearr_31995_34783[(1)] = (8));

} else {
var statearr_31996_34784 = state_31985__$1;
(statearr_31996_34784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (3))){
var inst_31982 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31985__$1,inst_31982);
} else {
if((state_val_31986 === (2))){
var state_31985__$1 = state_31985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31985__$1,(4),ch);
} else {
if((state_val_31986 === (9))){
var inst_31970 = (state_31985[(9)]);
var inst_31962 = inst_31970;
var state_31985__$1 = (function (){var statearr_31999 = state_31985;
(statearr_31999[(7)] = inst_31962);

return statearr_31999;
})();
var statearr_32000_34785 = state_31985__$1;
(statearr_32000_34785[(2)] = null);

(statearr_32000_34785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (5))){
var inst_31962 = (state_31985[(7)]);
var state_31985__$1 = state_31985;
var statearr_32001_34786 = state_31985__$1;
(statearr_32001_34786[(2)] = inst_31962);

(statearr_32001_34786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (10))){
var inst_31978 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
var statearr_32002_34787 = state_31985__$1;
(statearr_32002_34787[(2)] = inst_31978);

(statearr_32002_34787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (8))){
var inst_31970 = (state_31985[(9)]);
var inst_31973 = cljs.core.deref(inst_31970);
var state_31985__$1 = state_31985;
var statearr_32003_34791 = state_31985__$1;
(statearr_32003_34791[(2)] = inst_31973);

(statearr_32003_34791[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30687__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30687__auto____0 = (function (){
var statearr_32004 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32004[(0)] = cljs$core$async$reduce_$_state_machine__30687__auto__);

(statearr_32004[(1)] = (1));

return statearr_32004;
});
var cljs$core$async$reduce_$_state_machine__30687__auto____1 = (function (state_31985){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_31985);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e32006){var ex__30690__auto__ = e32006;
var statearr_32007_34792 = state_31985;
(statearr_32007_34792[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_31985[(4)]))){
var statearr_32008_34797 = state_31985;
(statearr_32008_34797[(1)] = cljs.core.first((state_31985[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34798 = state_31985;
state_31985 = G__34798;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30687__auto__ = function(state_31985){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30687__auto____1.call(this,state_31985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30687__auto____0;
cljs$core$async$reduce_$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30687__auto____1;
return cljs$core$async$reduce_$_state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_32009 = f__30882__auto__();
(statearr_32009[(6)] = c__30881__auto__);

return statearr_32009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
}));

return c__30881__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30881__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_32015){
var state_val_32016 = (state_32015[(1)]);
if((state_val_32016 === (1))){
var inst_32010 = cljs.core.async.reduce(f__$1,init,ch);
var state_32015__$1 = state_32015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32015__$1,(2),inst_32010);
} else {
if((state_val_32016 === (2))){
var inst_32012 = (state_32015[(2)]);
var inst_32013 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32012) : f__$1.call(null,inst_32012));
var state_32015__$1 = state_32015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32015__$1,inst_32013);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30687__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30687__auto____0 = (function (){
var statearr_32017 = [null,null,null,null,null,null,null];
(statearr_32017[(0)] = cljs$core$async$transduce_$_state_machine__30687__auto__);

(statearr_32017[(1)] = (1));

return statearr_32017;
});
var cljs$core$async$transduce_$_state_machine__30687__auto____1 = (function (state_32015){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_32015);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e32019){var ex__30690__auto__ = e32019;
var statearr_32020_34804 = state_32015;
(statearr_32020_34804[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_32015[(4)]))){
var statearr_32021_34805 = state_32015;
(statearr_32021_34805[(1)] = cljs.core.first((state_32015[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34806 = state_32015;
state_32015 = G__34806;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30687__auto__ = function(state_32015){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30687__auto____1.call(this,state_32015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30687__auto____0;
cljs$core$async$transduce_$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30687__auto____1;
return cljs$core$async$transduce_$_state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_32023 = f__30882__auto__();
(statearr_32023[(6)] = c__30881__auto__);

return statearr_32023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
}));

return c__30881__auto__;
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
var G__32026 = arguments.length;
switch (G__32026) {
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
var c__30881__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_32051){
var state_val_32052 = (state_32051[(1)]);
if((state_val_32052 === (7))){
var inst_32033 = (state_32051[(2)]);
var state_32051__$1 = state_32051;
var statearr_32056_34813 = state_32051__$1;
(statearr_32056_34813[(2)] = inst_32033);

(statearr_32056_34813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (1))){
var inst_32027 = cljs.core.seq(coll);
var inst_32028 = inst_32027;
var state_32051__$1 = (function (){var statearr_32057 = state_32051;
(statearr_32057[(7)] = inst_32028);

return statearr_32057;
})();
var statearr_32058_34817 = state_32051__$1;
(statearr_32058_34817[(2)] = null);

(statearr_32058_34817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (4))){
var inst_32028 = (state_32051[(7)]);
var inst_32031 = cljs.core.first(inst_32028);
var state_32051__$1 = state_32051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32051__$1,(7),ch,inst_32031);
} else {
if((state_val_32052 === (13))){
var inst_32045 = (state_32051[(2)]);
var state_32051__$1 = state_32051;
var statearr_32059_34818 = state_32051__$1;
(statearr_32059_34818[(2)] = inst_32045);

(statearr_32059_34818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (6))){
var inst_32036 = (state_32051[(2)]);
var state_32051__$1 = state_32051;
if(cljs.core.truth_(inst_32036)){
var statearr_32063_34819 = state_32051__$1;
(statearr_32063_34819[(1)] = (8));

} else {
var statearr_32064_34820 = state_32051__$1;
(statearr_32064_34820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (3))){
var inst_32049 = (state_32051[(2)]);
var state_32051__$1 = state_32051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32051__$1,inst_32049);
} else {
if((state_val_32052 === (12))){
var state_32051__$1 = state_32051;
var statearr_32065_34822 = state_32051__$1;
(statearr_32065_34822[(2)] = null);

(statearr_32065_34822[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (2))){
var inst_32028 = (state_32051[(7)]);
var state_32051__$1 = state_32051;
if(cljs.core.truth_(inst_32028)){
var statearr_32067_34823 = state_32051__$1;
(statearr_32067_34823[(1)] = (4));

} else {
var statearr_32068_34824 = state_32051__$1;
(statearr_32068_34824[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (11))){
var inst_32042 = cljs.core.async.close_BANG_(ch);
var state_32051__$1 = state_32051;
var statearr_32072_34825 = state_32051__$1;
(statearr_32072_34825[(2)] = inst_32042);

(statearr_32072_34825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (9))){
var state_32051__$1 = state_32051;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32073_34826 = state_32051__$1;
(statearr_32073_34826[(1)] = (11));

} else {
var statearr_32074_34827 = state_32051__$1;
(statearr_32074_34827[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (5))){
var inst_32028 = (state_32051[(7)]);
var state_32051__$1 = state_32051;
var statearr_32075_34830 = state_32051__$1;
(statearr_32075_34830[(2)] = inst_32028);

(statearr_32075_34830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (10))){
var inst_32047 = (state_32051[(2)]);
var state_32051__$1 = state_32051;
var statearr_32077_34834 = state_32051__$1;
(statearr_32077_34834[(2)] = inst_32047);

(statearr_32077_34834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (8))){
var inst_32028 = (state_32051[(7)]);
var inst_32038 = cljs.core.next(inst_32028);
var inst_32028__$1 = inst_32038;
var state_32051__$1 = (function (){var statearr_32080 = state_32051;
(statearr_32080[(7)] = inst_32028__$1);

return statearr_32080;
})();
var statearr_32081_34838 = state_32051__$1;
(statearr_32081_34838[(2)] = null);

(statearr_32081_34838[(1)] = (2));


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
var cljs$core$async$state_machine__30687__auto__ = null;
var cljs$core$async$state_machine__30687__auto____0 = (function (){
var statearr_32085 = [null,null,null,null,null,null,null,null];
(statearr_32085[(0)] = cljs$core$async$state_machine__30687__auto__);

(statearr_32085[(1)] = (1));

return statearr_32085;
});
var cljs$core$async$state_machine__30687__auto____1 = (function (state_32051){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_32051);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e32086){var ex__30690__auto__ = e32086;
var statearr_32087_34839 = state_32051;
(statearr_32087_34839[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_32051[(4)]))){
var statearr_32088_34840 = state_32051;
(statearr_32088_34840[(1)] = cljs.core.first((state_32051[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34841 = state_32051;
state_32051 = G__34841;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$state_machine__30687__auto__ = function(state_32051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30687__auto____1.call(this,state_32051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30687__auto____0;
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30687__auto____1;
return cljs$core$async$state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_32089 = f__30882__auto__();
(statearr_32089[(6)] = c__30881__auto__);

return statearr_32089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
}));

return c__30881__auto__;
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
var G__32096 = arguments.length;
switch (G__32096) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34843 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34843(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34844 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34844(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34848 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34848(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34861 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34861(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32224 = (function (ch,cs,meta32225){
this.ch = ch;
this.cs = cs;
this.meta32225 = meta32225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32226,meta32225__$1){
var self__ = this;
var _32226__$1 = this;
return (new cljs.core.async.t_cljs$core$async32224(self__.ch,self__.cs,meta32225__$1));
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32226){
var self__ = this;
var _32226__$1 = this;
return self__.meta32225;
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32225","meta32225",-1519303991,null)], null);
}));

(cljs.core.async.t_cljs$core$async32224.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32224");

(cljs.core.async.t_cljs$core$async32224.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32224");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32224.
 */
cljs.core.async.__GT_t_cljs$core$async32224 = (function cljs$core$async$__GT_t_cljs$core$async32224(ch,cs,meta32225){
return (new cljs.core.async.t_cljs$core$async32224(ch,cs,meta32225));
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
var m = (new cljs.core.async.t_cljs$core$async32224(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30881__auto___34869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_32423){
var state_val_32429 = (state_32423[(1)]);
if((state_val_32429 === (7))){
var inst_32418 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32432_34870 = state_32423__$1;
(statearr_32432_34870[(2)] = inst_32418);

(statearr_32432_34870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (20))){
var inst_32320 = (state_32423[(7)]);
var inst_32333 = cljs.core.first(inst_32320);
var inst_32334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32333,(0),null);
var inst_32335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32333,(1),null);
var state_32423__$1 = (function (){var statearr_32433 = state_32423;
(statearr_32433[(8)] = inst_32334);

return statearr_32433;
})();
if(cljs.core.truth_(inst_32335)){
var statearr_32434_34871 = state_32423__$1;
(statearr_32434_34871[(1)] = (22));

} else {
var statearr_32435_34872 = state_32423__$1;
(statearr_32435_34872[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (27))){
var inst_32363 = (state_32423[(9)]);
var inst_32365 = (state_32423[(10)]);
var inst_32370 = (state_32423[(11)]);
var inst_32281 = (state_32423[(12)]);
var inst_32370__$1 = cljs.core._nth(inst_32363,inst_32365);
var inst_32371 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32370__$1,inst_32281,done);
var state_32423__$1 = (function (){var statearr_32437 = state_32423;
(statearr_32437[(11)] = inst_32370__$1);

return statearr_32437;
})();
if(cljs.core.truth_(inst_32371)){
var statearr_32438_34873 = state_32423__$1;
(statearr_32438_34873[(1)] = (30));

} else {
var statearr_32439_34874 = state_32423__$1;
(statearr_32439_34874[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (1))){
var state_32423__$1 = state_32423;
var statearr_32441_34875 = state_32423__$1;
(statearr_32441_34875[(2)] = null);

(statearr_32441_34875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (24))){
var inst_32320 = (state_32423[(7)]);
var inst_32340 = (state_32423[(2)]);
var inst_32341 = cljs.core.next(inst_32320);
var inst_32290 = inst_32341;
var inst_32291 = null;
var inst_32292 = (0);
var inst_32293 = (0);
var state_32423__$1 = (function (){var statearr_32446 = state_32423;
(statearr_32446[(13)] = inst_32340);

(statearr_32446[(14)] = inst_32290);

(statearr_32446[(15)] = inst_32291);

(statearr_32446[(16)] = inst_32292);

(statearr_32446[(17)] = inst_32293);

return statearr_32446;
})();
var statearr_32448_34876 = state_32423__$1;
(statearr_32448_34876[(2)] = null);

(statearr_32448_34876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (39))){
var state_32423__$1 = state_32423;
var statearr_32453_34877 = state_32423__$1;
(statearr_32453_34877[(2)] = null);

(statearr_32453_34877[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (4))){
var inst_32281 = (state_32423[(12)]);
var inst_32281__$1 = (state_32423[(2)]);
var inst_32282 = (inst_32281__$1 == null);
var state_32423__$1 = (function (){var statearr_32455 = state_32423;
(statearr_32455[(12)] = inst_32281__$1);

return statearr_32455;
})();
if(cljs.core.truth_(inst_32282)){
var statearr_32457_34881 = state_32423__$1;
(statearr_32457_34881[(1)] = (5));

} else {
var statearr_32458_34888 = state_32423__$1;
(statearr_32458_34888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (15))){
var inst_32293 = (state_32423[(17)]);
var inst_32290 = (state_32423[(14)]);
var inst_32291 = (state_32423[(15)]);
var inst_32292 = (state_32423[(16)]);
var inst_32315 = (state_32423[(2)]);
var inst_32317 = (inst_32293 + (1));
var tmp32449 = inst_32291;
var tmp32450 = inst_32292;
var tmp32451 = inst_32290;
var inst_32290__$1 = tmp32451;
var inst_32291__$1 = tmp32449;
var inst_32292__$1 = tmp32450;
var inst_32293__$1 = inst_32317;
var state_32423__$1 = (function (){var statearr_32459 = state_32423;
(statearr_32459[(18)] = inst_32315);

(statearr_32459[(14)] = inst_32290__$1);

(statearr_32459[(15)] = inst_32291__$1);

(statearr_32459[(16)] = inst_32292__$1);

(statearr_32459[(17)] = inst_32293__$1);

return statearr_32459;
})();
var statearr_32460_34889 = state_32423__$1;
(statearr_32460_34889[(2)] = null);

(statearr_32460_34889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (21))){
var inst_32344 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32464_34891 = state_32423__$1;
(statearr_32464_34891[(2)] = inst_32344);

(statearr_32464_34891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (31))){
var inst_32370 = (state_32423[(11)]);
var inst_32374 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32370);
var state_32423__$1 = state_32423;
var statearr_32466_34892 = state_32423__$1;
(statearr_32466_34892[(2)] = inst_32374);

(statearr_32466_34892[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (32))){
var inst_32365 = (state_32423[(10)]);
var inst_32362 = (state_32423[(19)]);
var inst_32363 = (state_32423[(9)]);
var inst_32364 = (state_32423[(20)]);
var inst_32376 = (state_32423[(2)]);
var inst_32377 = (inst_32365 + (1));
var tmp32461 = inst_32363;
var tmp32462 = inst_32364;
var tmp32463 = inst_32362;
var inst_32362__$1 = tmp32463;
var inst_32363__$1 = tmp32461;
var inst_32364__$1 = tmp32462;
var inst_32365__$1 = inst_32377;
var state_32423__$1 = (function (){var statearr_32467 = state_32423;
(statearr_32467[(21)] = inst_32376);

(statearr_32467[(19)] = inst_32362__$1);

(statearr_32467[(9)] = inst_32363__$1);

(statearr_32467[(20)] = inst_32364__$1);

(statearr_32467[(10)] = inst_32365__$1);

return statearr_32467;
})();
var statearr_32468_34895 = state_32423__$1;
(statearr_32468_34895[(2)] = null);

(statearr_32468_34895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (40))){
var inst_32391 = (state_32423[(22)]);
var inst_32395 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32391);
var state_32423__$1 = state_32423;
var statearr_32470_34897 = state_32423__$1;
(statearr_32470_34897[(2)] = inst_32395);

(statearr_32470_34897[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (33))){
var inst_32381 = (state_32423[(23)]);
var inst_32383 = cljs.core.chunked_seq_QMARK_(inst_32381);
var state_32423__$1 = state_32423;
if(inst_32383){
var statearr_32473_34900 = state_32423__$1;
(statearr_32473_34900[(1)] = (36));

} else {
var statearr_32474_34901 = state_32423__$1;
(statearr_32474_34901[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (13))){
var inst_32308 = (state_32423[(24)]);
var inst_32312 = cljs.core.async.close_BANG_(inst_32308);
var state_32423__$1 = state_32423;
var statearr_32477_34903 = state_32423__$1;
(statearr_32477_34903[(2)] = inst_32312);

(statearr_32477_34903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (22))){
var inst_32334 = (state_32423[(8)]);
var inst_32337 = cljs.core.async.close_BANG_(inst_32334);
var state_32423__$1 = state_32423;
var statearr_32478_34904 = state_32423__$1;
(statearr_32478_34904[(2)] = inst_32337);

(statearr_32478_34904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (36))){
var inst_32381 = (state_32423[(23)]);
var inst_32386 = cljs.core.chunk_first(inst_32381);
var inst_32387 = cljs.core.chunk_rest(inst_32381);
var inst_32388 = cljs.core.count(inst_32386);
var inst_32362 = inst_32387;
var inst_32363 = inst_32386;
var inst_32364 = inst_32388;
var inst_32365 = (0);
var state_32423__$1 = (function (){var statearr_32481 = state_32423;
(statearr_32481[(19)] = inst_32362);

(statearr_32481[(9)] = inst_32363);

(statearr_32481[(20)] = inst_32364);

(statearr_32481[(10)] = inst_32365);

return statearr_32481;
})();
var statearr_32485_34906 = state_32423__$1;
(statearr_32485_34906[(2)] = null);

(statearr_32485_34906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (41))){
var inst_32381 = (state_32423[(23)]);
var inst_32397 = (state_32423[(2)]);
var inst_32398 = cljs.core.next(inst_32381);
var inst_32362 = inst_32398;
var inst_32363 = null;
var inst_32364 = (0);
var inst_32365 = (0);
var state_32423__$1 = (function (){var statearr_32486 = state_32423;
(statearr_32486[(25)] = inst_32397);

(statearr_32486[(19)] = inst_32362);

(statearr_32486[(9)] = inst_32363);

(statearr_32486[(20)] = inst_32364);

(statearr_32486[(10)] = inst_32365);

return statearr_32486;
})();
var statearr_32487_34911 = state_32423__$1;
(statearr_32487_34911[(2)] = null);

(statearr_32487_34911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (43))){
var state_32423__$1 = state_32423;
var statearr_32488_34914 = state_32423__$1;
(statearr_32488_34914[(2)] = null);

(statearr_32488_34914[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (29))){
var inst_32406 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32490_34918 = state_32423__$1;
(statearr_32490_34918[(2)] = inst_32406);

(statearr_32490_34918[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (44))){
var inst_32415 = (state_32423[(2)]);
var state_32423__$1 = (function (){var statearr_32493 = state_32423;
(statearr_32493[(26)] = inst_32415);

return statearr_32493;
})();
var statearr_32494_34926 = state_32423__$1;
(statearr_32494_34926[(2)] = null);

(statearr_32494_34926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (6))){
var inst_32354 = (state_32423[(27)]);
var inst_32353 = cljs.core.deref(cs);
var inst_32354__$1 = cljs.core.keys(inst_32353);
var inst_32355 = cljs.core.count(inst_32354__$1);
var inst_32356 = cljs.core.reset_BANG_(dctr,inst_32355);
var inst_32361 = cljs.core.seq(inst_32354__$1);
var inst_32362 = inst_32361;
var inst_32363 = null;
var inst_32364 = (0);
var inst_32365 = (0);
var state_32423__$1 = (function (){var statearr_32496 = state_32423;
(statearr_32496[(27)] = inst_32354__$1);

(statearr_32496[(28)] = inst_32356);

(statearr_32496[(19)] = inst_32362);

(statearr_32496[(9)] = inst_32363);

(statearr_32496[(20)] = inst_32364);

(statearr_32496[(10)] = inst_32365);

return statearr_32496;
})();
var statearr_32497_34934 = state_32423__$1;
(statearr_32497_34934[(2)] = null);

(statearr_32497_34934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (28))){
var inst_32362 = (state_32423[(19)]);
var inst_32381 = (state_32423[(23)]);
var inst_32381__$1 = cljs.core.seq(inst_32362);
var state_32423__$1 = (function (){var statearr_32498 = state_32423;
(statearr_32498[(23)] = inst_32381__$1);

return statearr_32498;
})();
if(inst_32381__$1){
var statearr_32499_34940 = state_32423__$1;
(statearr_32499_34940[(1)] = (33));

} else {
var statearr_32500_34941 = state_32423__$1;
(statearr_32500_34941[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (25))){
var inst_32365 = (state_32423[(10)]);
var inst_32364 = (state_32423[(20)]);
var inst_32367 = (inst_32365 < inst_32364);
var inst_32368 = inst_32367;
var state_32423__$1 = state_32423;
if(cljs.core.truth_(inst_32368)){
var statearr_32503_34942 = state_32423__$1;
(statearr_32503_34942[(1)] = (27));

} else {
var statearr_32504_34943 = state_32423__$1;
(statearr_32504_34943[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (34))){
var state_32423__$1 = state_32423;
var statearr_32505_34944 = state_32423__$1;
(statearr_32505_34944[(2)] = null);

(statearr_32505_34944[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (17))){
var state_32423__$1 = state_32423;
var statearr_32506_34952 = state_32423__$1;
(statearr_32506_34952[(2)] = null);

(statearr_32506_34952[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (3))){
var inst_32420 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32423__$1,inst_32420);
} else {
if((state_val_32429 === (12))){
var inst_32349 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32508_34954 = state_32423__$1;
(statearr_32508_34954[(2)] = inst_32349);

(statearr_32508_34954[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (2))){
var state_32423__$1 = state_32423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32423__$1,(4),ch);
} else {
if((state_val_32429 === (23))){
var state_32423__$1 = state_32423;
var statearr_32512_34958 = state_32423__$1;
(statearr_32512_34958[(2)] = null);

(statearr_32512_34958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (35))){
var inst_32404 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32514_34960 = state_32423__$1;
(statearr_32514_34960[(2)] = inst_32404);

(statearr_32514_34960[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (19))){
var inst_32320 = (state_32423[(7)]);
var inst_32325 = cljs.core.chunk_first(inst_32320);
var inst_32326 = cljs.core.chunk_rest(inst_32320);
var inst_32327 = cljs.core.count(inst_32325);
var inst_32290 = inst_32326;
var inst_32291 = inst_32325;
var inst_32292 = inst_32327;
var inst_32293 = (0);
var state_32423__$1 = (function (){var statearr_32516 = state_32423;
(statearr_32516[(14)] = inst_32290);

(statearr_32516[(15)] = inst_32291);

(statearr_32516[(16)] = inst_32292);

(statearr_32516[(17)] = inst_32293);

return statearr_32516;
})();
var statearr_32517_34972 = state_32423__$1;
(statearr_32517_34972[(2)] = null);

(statearr_32517_34972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (11))){
var inst_32290 = (state_32423[(14)]);
var inst_32320 = (state_32423[(7)]);
var inst_32320__$1 = cljs.core.seq(inst_32290);
var state_32423__$1 = (function (){var statearr_32518 = state_32423;
(statearr_32518[(7)] = inst_32320__$1);

return statearr_32518;
})();
if(inst_32320__$1){
var statearr_32519_34974 = state_32423__$1;
(statearr_32519_34974[(1)] = (16));

} else {
var statearr_32520_34975 = state_32423__$1;
(statearr_32520_34975[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (9))){
var inst_32351 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32523_34979 = state_32423__$1;
(statearr_32523_34979[(2)] = inst_32351);

(statearr_32523_34979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (5))){
var inst_32288 = cljs.core.deref(cs);
var inst_32289 = cljs.core.seq(inst_32288);
var inst_32290 = inst_32289;
var inst_32291 = null;
var inst_32292 = (0);
var inst_32293 = (0);
var state_32423__$1 = (function (){var statearr_32524 = state_32423;
(statearr_32524[(14)] = inst_32290);

(statearr_32524[(15)] = inst_32291);

(statearr_32524[(16)] = inst_32292);

(statearr_32524[(17)] = inst_32293);

return statearr_32524;
})();
var statearr_32525_34995 = state_32423__$1;
(statearr_32525_34995[(2)] = null);

(statearr_32525_34995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (14))){
var state_32423__$1 = state_32423;
var statearr_32526_34996 = state_32423__$1;
(statearr_32526_34996[(2)] = null);

(statearr_32526_34996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (45))){
var inst_32412 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32530_34997 = state_32423__$1;
(statearr_32530_34997[(2)] = inst_32412);

(statearr_32530_34997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (26))){
var inst_32354 = (state_32423[(27)]);
var inst_32408 = (state_32423[(2)]);
var inst_32409 = cljs.core.seq(inst_32354);
var state_32423__$1 = (function (){var statearr_32531 = state_32423;
(statearr_32531[(29)] = inst_32408);

return statearr_32531;
})();
if(inst_32409){
var statearr_32533_34998 = state_32423__$1;
(statearr_32533_34998[(1)] = (42));

} else {
var statearr_32535_34999 = state_32423__$1;
(statearr_32535_34999[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (16))){
var inst_32320 = (state_32423[(7)]);
var inst_32322 = cljs.core.chunked_seq_QMARK_(inst_32320);
var state_32423__$1 = state_32423;
if(inst_32322){
var statearr_32539_35004 = state_32423__$1;
(statearr_32539_35004[(1)] = (19));

} else {
var statearr_32541_35005 = state_32423__$1;
(statearr_32541_35005[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (38))){
var inst_32401 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32542_35006 = state_32423__$1;
(statearr_32542_35006[(2)] = inst_32401);

(statearr_32542_35006[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (30))){
var state_32423__$1 = state_32423;
var statearr_32543_35007 = state_32423__$1;
(statearr_32543_35007[(2)] = null);

(statearr_32543_35007[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (10))){
var inst_32291 = (state_32423[(15)]);
var inst_32293 = (state_32423[(17)]);
var inst_32307 = cljs.core._nth(inst_32291,inst_32293);
var inst_32308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32307,(0),null);
var inst_32309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32307,(1),null);
var state_32423__$1 = (function (){var statearr_32544 = state_32423;
(statearr_32544[(24)] = inst_32308);

return statearr_32544;
})();
if(cljs.core.truth_(inst_32309)){
var statearr_32545_35014 = state_32423__$1;
(statearr_32545_35014[(1)] = (13));

} else {
var statearr_32546_35015 = state_32423__$1;
(statearr_32546_35015[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (18))){
var inst_32347 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32548_35016 = state_32423__$1;
(statearr_32548_35016[(2)] = inst_32347);

(statearr_32548_35016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (42))){
var state_32423__$1 = state_32423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32423__$1,(45),dchan);
} else {
if((state_val_32429 === (37))){
var inst_32381 = (state_32423[(23)]);
var inst_32391 = (state_32423[(22)]);
var inst_32281 = (state_32423[(12)]);
var inst_32391__$1 = cljs.core.first(inst_32381);
var inst_32392 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32391__$1,inst_32281,done);
var state_32423__$1 = (function (){var statearr_32551 = state_32423;
(statearr_32551[(22)] = inst_32391__$1);

return statearr_32551;
})();
if(cljs.core.truth_(inst_32392)){
var statearr_32552_35025 = state_32423__$1;
(statearr_32552_35025[(1)] = (39));

} else {
var statearr_32553_35026 = state_32423__$1;
(statearr_32553_35026[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (8))){
var inst_32293 = (state_32423[(17)]);
var inst_32292 = (state_32423[(16)]);
var inst_32301 = (inst_32293 < inst_32292);
var inst_32302 = inst_32301;
var state_32423__$1 = state_32423;
if(cljs.core.truth_(inst_32302)){
var statearr_32554_35027 = state_32423__$1;
(statearr_32554_35027[(1)] = (10));

} else {
var statearr_32556_35028 = state_32423__$1;
(statearr_32556_35028[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30687__auto__ = null;
var cljs$core$async$mult_$_state_machine__30687__auto____0 = (function (){
var statearr_32566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32566[(0)] = cljs$core$async$mult_$_state_machine__30687__auto__);

(statearr_32566[(1)] = (1));

return statearr_32566;
});
var cljs$core$async$mult_$_state_machine__30687__auto____1 = (function (state_32423){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_32423);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e32567){var ex__30690__auto__ = e32567;
var statearr_32568_35029 = state_32423;
(statearr_32568_35029[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_32423[(4)]))){
var statearr_32571_35030 = state_32423;
(statearr_32571_35030[(1)] = cljs.core.first((state_32423[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35043 = state_32423;
state_32423 = G__35043;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30687__auto__ = function(state_32423){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30687__auto____1.call(this,state_32423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30687__auto____0;
cljs$core$async$mult_$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30687__auto____1;
return cljs$core$async$mult_$_state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_32573 = f__30882__auto__();
(statearr_32573[(6)] = c__30881__auto___34869);

return statearr_32573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
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
var G__32576 = arguments.length;
switch (G__32576) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35049 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35049(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35050 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35050(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35052 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35052(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35057 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35057(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35063 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35063(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35067 = arguments.length;
var i__5750__auto___35068 = (0);
while(true){
if((i__5750__auto___35068 < len__5749__auto___35067)){
args__5755__auto__.push((arguments[i__5750__auto___35068]));

var G__35072 = (i__5750__auto___35068 + (1));
i__5750__auto___35068 = G__35072;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32602){
var map__32604 = p__32602;
var map__32604__$1 = cljs.core.__destructure_map(map__32604);
var opts = map__32604__$1;
var statearr_32606_35076 = state;
(statearr_32606_35076[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32608_35078 = state;
(statearr_32608_35078[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_32613_35079 = state;
(statearr_32613_35079[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32594){
var G__32595 = cljs.core.first(seq32594);
var seq32594__$1 = cljs.core.next(seq32594);
var G__32596 = cljs.core.first(seq32594__$1);
var seq32594__$2 = cljs.core.next(seq32594__$1);
var G__32597 = cljs.core.first(seq32594__$2);
var seq32594__$3 = cljs.core.next(seq32594__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32595,G__32596,G__32597,seq32594__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32646 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32647){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32647 = meta32647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32648,meta32647__$1){
var self__ = this;
var _32648__$1 = this;
return (new cljs.core.async.t_cljs$core$async32646(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32647__$1));
}));

(cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32648){
var self__ = this;
var _32648__$1 = this;
return self__.meta32647;
}));

(cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32647","meta32647",1371879281,null)], null);
}));

(cljs.core.async.t_cljs$core$async32646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32646");

(cljs.core.async.t_cljs$core$async32646.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32646.
 */
cljs.core.async.__GT_t_cljs$core$async32646 = (function cljs$core$async$__GT_t_cljs$core$async32646(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32647){
return (new cljs.core.async.t_cljs$core$async32646(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32647));
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
var m = (new cljs.core.async.t_cljs$core$async32646(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__30881__auto___35110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_32758){
var state_val_32759 = (state_32758[(1)]);
if((state_val_32759 === (7))){
var inst_32706 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
if(cljs.core.truth_(inst_32706)){
var statearr_32778_35111 = state_32758__$1;
(statearr_32778_35111[(1)] = (8));

} else {
var statearr_32779_35112 = state_32758__$1;
(statearr_32779_35112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (20))){
var inst_32698 = (state_32758[(7)]);
var state_32758__$1 = state_32758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32758__$1,(23),out,inst_32698);
} else {
if((state_val_32759 === (1))){
var inst_32677 = calc_state();
var inst_32678 = cljs.core.__destructure_map(inst_32677);
var inst_32679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32678,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32678,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32678,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32685 = inst_32677;
var state_32758__$1 = (function (){var statearr_32792 = state_32758;
(statearr_32792[(8)] = inst_32679);

(statearr_32792[(9)] = inst_32680);

(statearr_32792[(10)] = inst_32681);

(statearr_32792[(11)] = inst_32685);

return statearr_32792;
})();
var statearr_32800_35118 = state_32758__$1;
(statearr_32800_35118[(2)] = null);

(statearr_32800_35118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (24))){
var inst_32688 = (state_32758[(12)]);
var inst_32685 = inst_32688;
var state_32758__$1 = (function (){var statearr_32805 = state_32758;
(statearr_32805[(11)] = inst_32685);

return statearr_32805;
})();
var statearr_32806_35119 = state_32758__$1;
(statearr_32806_35119[(2)] = null);

(statearr_32806_35119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (4))){
var inst_32698 = (state_32758[(7)]);
var inst_32700 = (state_32758[(13)]);
var inst_32697 = (state_32758[(2)]);
var inst_32698__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32697,(0),null);
var inst_32699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32697,(1),null);
var inst_32700__$1 = (inst_32698__$1 == null);
var state_32758__$1 = (function (){var statearr_32821 = state_32758;
(statearr_32821[(7)] = inst_32698__$1);

(statearr_32821[(14)] = inst_32699);

(statearr_32821[(13)] = inst_32700__$1);

return statearr_32821;
})();
if(cljs.core.truth_(inst_32700__$1)){
var statearr_32824_35122 = state_32758__$1;
(statearr_32824_35122[(1)] = (5));

} else {
var statearr_32825_35123 = state_32758__$1;
(statearr_32825_35123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (15))){
var inst_32689 = (state_32758[(15)]);
var inst_32724 = (state_32758[(16)]);
var inst_32724__$1 = cljs.core.empty_QMARK_(inst_32689);
var state_32758__$1 = (function (){var statearr_32832 = state_32758;
(statearr_32832[(16)] = inst_32724__$1);

return statearr_32832;
})();
if(inst_32724__$1){
var statearr_32833_35125 = state_32758__$1;
(statearr_32833_35125[(1)] = (17));

} else {
var statearr_32836_35127 = state_32758__$1;
(statearr_32836_35127[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (21))){
var inst_32688 = (state_32758[(12)]);
var inst_32685 = inst_32688;
var state_32758__$1 = (function (){var statearr_32841 = state_32758;
(statearr_32841[(11)] = inst_32685);

return statearr_32841;
})();
var statearr_32842_35128 = state_32758__$1;
(statearr_32842_35128[(2)] = null);

(statearr_32842_35128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (13))){
var inst_32713 = (state_32758[(2)]);
var inst_32717 = calc_state();
var inst_32685 = inst_32717;
var state_32758__$1 = (function (){var statearr_32844 = state_32758;
(statearr_32844[(17)] = inst_32713);

(statearr_32844[(11)] = inst_32685);

return statearr_32844;
})();
var statearr_32845_35129 = state_32758__$1;
(statearr_32845_35129[(2)] = null);

(statearr_32845_35129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (22))){
var inst_32748 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
var statearr_32846_35130 = state_32758__$1;
(statearr_32846_35130[(2)] = inst_32748);

(statearr_32846_35130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (6))){
var inst_32699 = (state_32758[(14)]);
var inst_32704 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32699,change);
var state_32758__$1 = state_32758;
var statearr_32849_35133 = state_32758__$1;
(statearr_32849_35133[(2)] = inst_32704);

(statearr_32849_35133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (25))){
var state_32758__$1 = state_32758;
var statearr_32858_35134 = state_32758__$1;
(statearr_32858_35134[(2)] = null);

(statearr_32858_35134[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (17))){
var inst_32691 = (state_32758[(18)]);
var inst_32699 = (state_32758[(14)]);
var inst_32726 = (inst_32691.cljs$core$IFn$_invoke$arity$1 ? inst_32691.cljs$core$IFn$_invoke$arity$1(inst_32699) : inst_32691.call(null,inst_32699));
var inst_32727 = cljs.core.not(inst_32726);
var state_32758__$1 = state_32758;
var statearr_32871_35138 = state_32758__$1;
(statearr_32871_35138[(2)] = inst_32727);

(statearr_32871_35138[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (3))){
var inst_32752 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32758__$1,inst_32752);
} else {
if((state_val_32759 === (12))){
var state_32758__$1 = state_32758;
var statearr_32875_35139 = state_32758__$1;
(statearr_32875_35139[(2)] = null);

(statearr_32875_35139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (2))){
var inst_32685 = (state_32758[(11)]);
var inst_32688 = (state_32758[(12)]);
var inst_32688__$1 = cljs.core.__destructure_map(inst_32685);
var inst_32689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32688__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32688__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32688__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32758__$1 = (function (){var statearr_32877 = state_32758;
(statearr_32877[(12)] = inst_32688__$1);

(statearr_32877[(15)] = inst_32689);

(statearr_32877[(18)] = inst_32691);

return statearr_32877;
})();
return cljs.core.async.ioc_alts_BANG_(state_32758__$1,(4),inst_32692);
} else {
if((state_val_32759 === (23))){
var inst_32738 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
if(cljs.core.truth_(inst_32738)){
var statearr_32879_35140 = state_32758__$1;
(statearr_32879_35140[(1)] = (24));

} else {
var statearr_32882_35141 = state_32758__$1;
(statearr_32882_35141[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (19))){
var inst_32730 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
var statearr_32885_35142 = state_32758__$1;
(statearr_32885_35142[(2)] = inst_32730);

(statearr_32885_35142[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (11))){
var inst_32699 = (state_32758[(14)]);
var inst_32710 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32699);
var state_32758__$1 = state_32758;
var statearr_32888_35143 = state_32758__$1;
(statearr_32888_35143[(2)] = inst_32710);

(statearr_32888_35143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (9))){
var inst_32689 = (state_32758[(15)]);
var inst_32699 = (state_32758[(14)]);
var inst_32720 = (state_32758[(19)]);
var inst_32720__$1 = (inst_32689.cljs$core$IFn$_invoke$arity$1 ? inst_32689.cljs$core$IFn$_invoke$arity$1(inst_32699) : inst_32689.call(null,inst_32699));
var state_32758__$1 = (function (){var statearr_32890 = state_32758;
(statearr_32890[(19)] = inst_32720__$1);

return statearr_32890;
})();
if(cljs.core.truth_(inst_32720__$1)){
var statearr_32891_35150 = state_32758__$1;
(statearr_32891_35150[(1)] = (14));

} else {
var statearr_32894_35151 = state_32758__$1;
(statearr_32894_35151[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (5))){
var inst_32700 = (state_32758[(13)]);
var state_32758__$1 = state_32758;
var statearr_32897_35152 = state_32758__$1;
(statearr_32897_35152[(2)] = inst_32700);

(statearr_32897_35152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (14))){
var inst_32720 = (state_32758[(19)]);
var state_32758__$1 = state_32758;
var statearr_32899_35156 = state_32758__$1;
(statearr_32899_35156[(2)] = inst_32720);

(statearr_32899_35156[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (26))){
var inst_32744 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
var statearr_32900_35157 = state_32758__$1;
(statearr_32900_35157[(2)] = inst_32744);

(statearr_32900_35157[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (16))){
var inst_32732 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
if(cljs.core.truth_(inst_32732)){
var statearr_32902_35161 = state_32758__$1;
(statearr_32902_35161[(1)] = (20));

} else {
var statearr_32904_35162 = state_32758__$1;
(statearr_32904_35162[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (10))){
var inst_32750 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
var statearr_32906_35163 = state_32758__$1;
(statearr_32906_35163[(2)] = inst_32750);

(statearr_32906_35163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (18))){
var inst_32724 = (state_32758[(16)]);
var state_32758__$1 = state_32758;
var statearr_32909_35164 = state_32758__$1;
(statearr_32909_35164[(2)] = inst_32724);

(statearr_32909_35164[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (8))){
var inst_32698 = (state_32758[(7)]);
var inst_32708 = (inst_32698 == null);
var state_32758__$1 = state_32758;
if(cljs.core.truth_(inst_32708)){
var statearr_32913_35173 = state_32758__$1;
(statearr_32913_35173[(1)] = (11));

} else {
var statearr_32918_35175 = state_32758__$1;
(statearr_32918_35175[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__30687__auto__ = null;
var cljs$core$async$mix_$_state_machine__30687__auto____0 = (function (){
var statearr_32934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32934[(0)] = cljs$core$async$mix_$_state_machine__30687__auto__);

(statearr_32934[(1)] = (1));

return statearr_32934;
});
var cljs$core$async$mix_$_state_machine__30687__auto____1 = (function (state_32758){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_32758);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e32936){var ex__30690__auto__ = e32936;
var statearr_32937_35185 = state_32758;
(statearr_32937_35185[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_32758[(4)]))){
var statearr_32938_35186 = state_32758;
(statearr_32938_35186[(1)] = cljs.core.first((state_32758[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35190 = state_32758;
state_32758 = G__35190;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30687__auto__ = function(state_32758){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30687__auto____1.call(this,state_32758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30687__auto____0;
cljs$core$async$mix_$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30687__auto____1;
return cljs$core$async$mix_$_state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_32945 = f__30882__auto__();
(statearr_32945[(6)] = c__30881__auto___35110);

return statearr_32945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35205 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35205(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35208 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35208(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35214 = (function() {
var G__35215 = null;
var G__35215__1 = (function (p){
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
var G__35215__2 = (function (p,v){
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
G__35215 = function(p,v){
switch(arguments.length){
case 1:
return G__35215__1.call(this,p);
case 2:
return G__35215__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35215.cljs$core$IFn$_invoke$arity$1 = G__35215__1;
G__35215.cljs$core$IFn$_invoke$arity$2 = G__35215__2;
return G__35215;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32981 = arguments.length;
switch (G__32981) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35214(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35214(p,v);
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
cljs.core.async.t_cljs$core$async33006 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33007){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33007 = meta33007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33008,meta33007__$1){
var self__ = this;
var _33008__$1 = this;
return (new cljs.core.async.t_cljs$core$async33006(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33007__$1));
}));

(cljs.core.async.t_cljs$core$async33006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33008){
var self__ = this;
var _33008__$1 = this;
return self__.meta33007;
}));

(cljs.core.async.t_cljs$core$async33006.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33006.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33006.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33006.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33006.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33006.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33007","meta33007",-828193618,null)], null);
}));

(cljs.core.async.t_cljs$core$async33006.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33006");

(cljs.core.async.t_cljs$core$async33006.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33006");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33006.
 */
cljs.core.async.__GT_t_cljs$core$async33006 = (function cljs$core$async$__GT_t_cljs$core$async33006(ch,topic_fn,buf_fn,mults,ensure_mult,meta33007){
return (new cljs.core.async.t_cljs$core$async33006(ch,topic_fn,buf_fn,mults,ensure_mult,meta33007));
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
var G__33000 = arguments.length;
switch (G__33000) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32997_SHARP_){
if(cljs.core.truth_((p1__32997_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32997_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32997_SHARP_.call(null,topic)))){
return p1__32997_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32997_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33006(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__30881__auto___35248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_33088){
var state_val_33089 = (state_33088[(1)]);
if((state_val_33089 === (7))){
var inst_33083 = (state_33088[(2)]);
var state_33088__$1 = state_33088;
var statearr_33091_35249 = state_33088__$1;
(statearr_33091_35249[(2)] = inst_33083);

(statearr_33091_35249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (20))){
var state_33088__$1 = state_33088;
var statearr_33092_35252 = state_33088__$1;
(statearr_33092_35252[(2)] = null);

(statearr_33092_35252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (1))){
var state_33088__$1 = state_33088;
var statearr_33095_35254 = state_33088__$1;
(statearr_33095_35254[(2)] = null);

(statearr_33095_35254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (24))){
var inst_33066 = (state_33088[(7)]);
var inst_33075 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33066);
var state_33088__$1 = state_33088;
var statearr_33100_35257 = state_33088__$1;
(statearr_33100_35257[(2)] = inst_33075);

(statearr_33100_35257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (4))){
var inst_33016 = (state_33088[(8)]);
var inst_33016__$1 = (state_33088[(2)]);
var inst_33017 = (inst_33016__$1 == null);
var state_33088__$1 = (function (){var statearr_33101 = state_33088;
(statearr_33101[(8)] = inst_33016__$1);

return statearr_33101;
})();
if(cljs.core.truth_(inst_33017)){
var statearr_33102_35262 = state_33088__$1;
(statearr_33102_35262[(1)] = (5));

} else {
var statearr_33103_35263 = state_33088__$1;
(statearr_33103_35263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (15))){
var inst_33060 = (state_33088[(2)]);
var state_33088__$1 = state_33088;
var statearr_33105_35264 = state_33088__$1;
(statearr_33105_35264[(2)] = inst_33060);

(statearr_33105_35264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (21))){
var inst_33080 = (state_33088[(2)]);
var state_33088__$1 = (function (){var statearr_33108 = state_33088;
(statearr_33108[(9)] = inst_33080);

return statearr_33108;
})();
var statearr_33110_35265 = state_33088__$1;
(statearr_33110_35265[(2)] = null);

(statearr_33110_35265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (13))){
var inst_33040 = (state_33088[(10)]);
var inst_33042 = cljs.core.chunked_seq_QMARK_(inst_33040);
var state_33088__$1 = state_33088;
if(inst_33042){
var statearr_33113_35272 = state_33088__$1;
(statearr_33113_35272[(1)] = (16));

} else {
var statearr_33114_35273 = state_33088__$1;
(statearr_33114_35273[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (22))){
var inst_33072 = (state_33088[(2)]);
var state_33088__$1 = state_33088;
if(cljs.core.truth_(inst_33072)){
var statearr_33115_35275 = state_33088__$1;
(statearr_33115_35275[(1)] = (23));

} else {
var statearr_33116_35276 = state_33088__$1;
(statearr_33116_35276[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (6))){
var inst_33016 = (state_33088[(8)]);
var inst_33066 = (state_33088[(7)]);
var inst_33068 = (state_33088[(11)]);
var inst_33066__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33016) : topic_fn.call(null,inst_33016));
var inst_33067 = cljs.core.deref(mults);
var inst_33068__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33067,inst_33066__$1);
var state_33088__$1 = (function (){var statearr_33120 = state_33088;
(statearr_33120[(7)] = inst_33066__$1);

(statearr_33120[(11)] = inst_33068__$1);

return statearr_33120;
})();
if(cljs.core.truth_(inst_33068__$1)){
var statearr_33135_35285 = state_33088__$1;
(statearr_33135_35285[(1)] = (19));

} else {
var statearr_33148_35286 = state_33088__$1;
(statearr_33148_35286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (25))){
var inst_33077 = (state_33088[(2)]);
var state_33088__$1 = state_33088;
var statearr_33149_35287 = state_33088__$1;
(statearr_33149_35287[(2)] = inst_33077);

(statearr_33149_35287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (17))){
var inst_33040 = (state_33088[(10)]);
var inst_33050 = cljs.core.first(inst_33040);
var inst_33052 = cljs.core.async.muxch_STAR_(inst_33050);
var inst_33053 = cljs.core.async.close_BANG_(inst_33052);
var inst_33054 = cljs.core.next(inst_33040);
var inst_33026 = inst_33054;
var inst_33027 = null;
var inst_33028 = (0);
var inst_33029 = (0);
var state_33088__$1 = (function (){var statearr_33150 = state_33088;
(statearr_33150[(12)] = inst_33053);

(statearr_33150[(13)] = inst_33026);

(statearr_33150[(14)] = inst_33027);

(statearr_33150[(15)] = inst_33028);

(statearr_33150[(16)] = inst_33029);

return statearr_33150;
})();
var statearr_33151_35297 = state_33088__$1;
(statearr_33151_35297[(2)] = null);

(statearr_33151_35297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (3))){
var inst_33085 = (state_33088[(2)]);
var state_33088__$1 = state_33088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33088__$1,inst_33085);
} else {
if((state_val_33089 === (12))){
var inst_33062 = (state_33088[(2)]);
var state_33088__$1 = state_33088;
var statearr_33153_35302 = state_33088__$1;
(statearr_33153_35302[(2)] = inst_33062);

(statearr_33153_35302[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (2))){
var state_33088__$1 = state_33088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33088__$1,(4),ch);
} else {
if((state_val_33089 === (23))){
var state_33088__$1 = state_33088;
var statearr_33157_35304 = state_33088__$1;
(statearr_33157_35304[(2)] = null);

(statearr_33157_35304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (19))){
var inst_33068 = (state_33088[(11)]);
var inst_33016 = (state_33088[(8)]);
var inst_33070 = cljs.core.async.muxch_STAR_(inst_33068);
var state_33088__$1 = state_33088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33088__$1,(22),inst_33070,inst_33016);
} else {
if((state_val_33089 === (11))){
var inst_33026 = (state_33088[(13)]);
var inst_33040 = (state_33088[(10)]);
var inst_33040__$1 = cljs.core.seq(inst_33026);
var state_33088__$1 = (function (){var statearr_33163 = state_33088;
(statearr_33163[(10)] = inst_33040__$1);

return statearr_33163;
})();
if(inst_33040__$1){
var statearr_33164_35308 = state_33088__$1;
(statearr_33164_35308[(1)] = (13));

} else {
var statearr_33167_35309 = state_33088__$1;
(statearr_33167_35309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (9))){
var inst_33064 = (state_33088[(2)]);
var state_33088__$1 = state_33088;
var statearr_33168_35311 = state_33088__$1;
(statearr_33168_35311[(2)] = inst_33064);

(statearr_33168_35311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (5))){
var inst_33023 = cljs.core.deref(mults);
var inst_33024 = cljs.core.vals(inst_33023);
var inst_33025 = cljs.core.seq(inst_33024);
var inst_33026 = inst_33025;
var inst_33027 = null;
var inst_33028 = (0);
var inst_33029 = (0);
var state_33088__$1 = (function (){var statearr_33197 = state_33088;
(statearr_33197[(13)] = inst_33026);

(statearr_33197[(14)] = inst_33027);

(statearr_33197[(15)] = inst_33028);

(statearr_33197[(16)] = inst_33029);

return statearr_33197;
})();
var statearr_33199_35315 = state_33088__$1;
(statearr_33199_35315[(2)] = null);

(statearr_33199_35315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (14))){
var state_33088__$1 = state_33088;
var statearr_33204_35316 = state_33088__$1;
(statearr_33204_35316[(2)] = null);

(statearr_33204_35316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (16))){
var inst_33040 = (state_33088[(10)]);
var inst_33044 = cljs.core.chunk_first(inst_33040);
var inst_33046 = cljs.core.chunk_rest(inst_33040);
var inst_33047 = cljs.core.count(inst_33044);
var inst_33026 = inst_33046;
var inst_33027 = inst_33044;
var inst_33028 = inst_33047;
var inst_33029 = (0);
var state_33088__$1 = (function (){var statearr_33217 = state_33088;
(statearr_33217[(13)] = inst_33026);

(statearr_33217[(14)] = inst_33027);

(statearr_33217[(15)] = inst_33028);

(statearr_33217[(16)] = inst_33029);

return statearr_33217;
})();
var statearr_33222_35325 = state_33088__$1;
(statearr_33222_35325[(2)] = null);

(statearr_33222_35325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (10))){
var inst_33027 = (state_33088[(14)]);
var inst_33029 = (state_33088[(16)]);
var inst_33026 = (state_33088[(13)]);
var inst_33028 = (state_33088[(15)]);
var inst_33034 = cljs.core._nth(inst_33027,inst_33029);
var inst_33035 = cljs.core.async.muxch_STAR_(inst_33034);
var inst_33036 = cljs.core.async.close_BANG_(inst_33035);
var inst_33037 = (inst_33029 + (1));
var tmp33200 = inst_33026;
var tmp33201 = inst_33028;
var tmp33202 = inst_33027;
var inst_33026__$1 = tmp33200;
var inst_33027__$1 = tmp33202;
var inst_33028__$1 = tmp33201;
var inst_33029__$1 = inst_33037;
var state_33088__$1 = (function (){var statearr_33231 = state_33088;
(statearr_33231[(17)] = inst_33036);

(statearr_33231[(13)] = inst_33026__$1);

(statearr_33231[(14)] = inst_33027__$1);

(statearr_33231[(15)] = inst_33028__$1);

(statearr_33231[(16)] = inst_33029__$1);

return statearr_33231;
})();
var statearr_33250_35350 = state_33088__$1;
(statearr_33250_35350[(2)] = null);

(statearr_33250_35350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (18))){
var inst_33057 = (state_33088[(2)]);
var state_33088__$1 = state_33088;
var statearr_33259_35353 = state_33088__$1;
(statearr_33259_35353[(2)] = inst_33057);

(statearr_33259_35353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33089 === (8))){
var inst_33029 = (state_33088[(16)]);
var inst_33028 = (state_33088[(15)]);
var inst_33031 = (inst_33029 < inst_33028);
var inst_33032 = inst_33031;
var state_33088__$1 = state_33088;
if(cljs.core.truth_(inst_33032)){
var statearr_33276_35354 = state_33088__$1;
(statearr_33276_35354[(1)] = (10));

} else {
var statearr_33280_35355 = state_33088__$1;
(statearr_33280_35355[(1)] = (11));

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
var cljs$core$async$state_machine__30687__auto__ = null;
var cljs$core$async$state_machine__30687__auto____0 = (function (){
var statearr_33296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33296[(0)] = cljs$core$async$state_machine__30687__auto__);

(statearr_33296[(1)] = (1));

return statearr_33296;
});
var cljs$core$async$state_machine__30687__auto____1 = (function (state_33088){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_33088);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e33298){var ex__30690__auto__ = e33298;
var statearr_33302_35362 = state_33088;
(statearr_33302_35362[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_33088[(4)]))){
var statearr_33303_35363 = state_33088;
(statearr_33303_35363[(1)] = cljs.core.first((state_33088[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35364 = state_33088;
state_33088 = G__35364;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$state_machine__30687__auto__ = function(state_33088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30687__auto____1.call(this,state_33088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30687__auto____0;
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30687__auto____1;
return cljs$core$async$state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_33304 = f__30882__auto__();
(statearr_33304[(6)] = c__30881__auto___35248);

return statearr_33304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
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
var G__33307 = arguments.length;
switch (G__33307) {
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
var G__33314 = arguments.length;
switch (G__33314) {
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
var G__33319 = arguments.length;
switch (G__33319) {
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
var c__30881__auto___35420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_33386){
var state_val_33387 = (state_33386[(1)]);
if((state_val_33387 === (7))){
var state_33386__$1 = state_33386;
var statearr_33394_35423 = state_33386__$1;
(statearr_33394_35423[(2)] = null);

(statearr_33394_35423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (1))){
var state_33386__$1 = state_33386;
var statearr_33396_35424 = state_33386__$1;
(statearr_33396_35424[(2)] = null);

(statearr_33396_35424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (4))){
var inst_33334 = (state_33386[(7)]);
var inst_33333 = (state_33386[(8)]);
var inst_33336 = (inst_33334 < inst_33333);
var state_33386__$1 = state_33386;
if(cljs.core.truth_(inst_33336)){
var statearr_33397_35428 = state_33386__$1;
(statearr_33397_35428[(1)] = (6));

} else {
var statearr_33398_35429 = state_33386__$1;
(statearr_33398_35429[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (15))){
var inst_33368 = (state_33386[(9)]);
var inst_33373 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33368);
var state_33386__$1 = state_33386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33386__$1,(17),out,inst_33373);
} else {
if((state_val_33387 === (13))){
var inst_33368 = (state_33386[(9)]);
var inst_33368__$1 = (state_33386[(2)]);
var inst_33369 = cljs.core.some(cljs.core.nil_QMARK_,inst_33368__$1);
var state_33386__$1 = (function (){var statearr_33400 = state_33386;
(statearr_33400[(9)] = inst_33368__$1);

return statearr_33400;
})();
if(cljs.core.truth_(inst_33369)){
var statearr_33402_35438 = state_33386__$1;
(statearr_33402_35438[(1)] = (14));

} else {
var statearr_33403_35439 = state_33386__$1;
(statearr_33403_35439[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (6))){
var state_33386__$1 = state_33386;
var statearr_33404_35440 = state_33386__$1;
(statearr_33404_35440[(2)] = null);

(statearr_33404_35440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (17))){
var inst_33375 = (state_33386[(2)]);
var state_33386__$1 = (function (){var statearr_33413 = state_33386;
(statearr_33413[(10)] = inst_33375);

return statearr_33413;
})();
var statearr_33414_35443 = state_33386__$1;
(statearr_33414_35443[(2)] = null);

(statearr_33414_35443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (3))){
var inst_33382 = (state_33386[(2)]);
var state_33386__$1 = state_33386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33386__$1,inst_33382);
} else {
if((state_val_33387 === (12))){
var _ = (function (){var statearr_33418 = state_33386;
(statearr_33418[(4)] = cljs.core.rest((state_33386[(4)])));

return statearr_33418;
})();
var state_33386__$1 = state_33386;
var ex33412 = (state_33386__$1[(2)]);
var statearr_33420_35446 = state_33386__$1;
(statearr_33420_35446[(5)] = ex33412);


if((ex33412 instanceof Object)){
var statearr_33423_35448 = state_33386__$1;
(statearr_33423_35448[(1)] = (11));

(statearr_33423_35448[(5)] = null);

} else {
throw ex33412;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (2))){
var inst_33332 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33333 = cnt;
var inst_33334 = (0);
var state_33386__$1 = (function (){var statearr_33426 = state_33386;
(statearr_33426[(11)] = inst_33332);

(statearr_33426[(8)] = inst_33333);

(statearr_33426[(7)] = inst_33334);

return statearr_33426;
})();
var statearr_33427_35457 = state_33386__$1;
(statearr_33427_35457[(2)] = null);

(statearr_33427_35457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (11))){
var inst_33345 = (state_33386[(2)]);
var inst_33348 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33386__$1 = (function (){var statearr_33428 = state_33386;
(statearr_33428[(12)] = inst_33345);

return statearr_33428;
})();
var statearr_33430_35463 = state_33386__$1;
(statearr_33430_35463[(2)] = inst_33348);

(statearr_33430_35463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (9))){
var inst_33334 = (state_33386[(7)]);
var _ = (function (){var statearr_33431 = state_33386;
(statearr_33431[(4)] = cljs.core.cons((12),(state_33386[(4)])));

return statearr_33431;
})();
var inst_33354 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33334) : chs__$1.call(null,inst_33334));
var inst_33355 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33334) : done.call(null,inst_33334));
var inst_33356 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33354,inst_33355);
var ___$1 = (function (){var statearr_33433 = state_33386;
(statearr_33433[(4)] = cljs.core.rest((state_33386[(4)])));

return statearr_33433;
})();
var state_33386__$1 = state_33386;
var statearr_33435_35490 = state_33386__$1;
(statearr_33435_35490[(2)] = inst_33356);

(statearr_33435_35490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (5))){
var inst_33366 = (state_33386[(2)]);
var state_33386__$1 = (function (){var statearr_33440 = state_33386;
(statearr_33440[(13)] = inst_33366);

return statearr_33440;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33386__$1,(13),dchan);
} else {
if((state_val_33387 === (14))){
var inst_33371 = cljs.core.async.close_BANG_(out);
var state_33386__$1 = state_33386;
var statearr_33441_35495 = state_33386__$1;
(statearr_33441_35495[(2)] = inst_33371);

(statearr_33441_35495[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (16))){
var inst_33380 = (state_33386[(2)]);
var state_33386__$1 = state_33386;
var statearr_33442_35498 = state_33386__$1;
(statearr_33442_35498[(2)] = inst_33380);

(statearr_33442_35498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (10))){
var inst_33334 = (state_33386[(7)]);
var inst_33359 = (state_33386[(2)]);
var inst_33360 = (inst_33334 + (1));
var inst_33334__$1 = inst_33360;
var state_33386__$1 = (function (){var statearr_33443 = state_33386;
(statearr_33443[(14)] = inst_33359);

(statearr_33443[(7)] = inst_33334__$1);

return statearr_33443;
})();
var statearr_33444_35500 = state_33386__$1;
(statearr_33444_35500[(2)] = null);

(statearr_33444_35500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (8))){
var inst_33364 = (state_33386[(2)]);
var state_33386__$1 = state_33386;
var statearr_33447_35504 = state_33386__$1;
(statearr_33447_35504[(2)] = inst_33364);

(statearr_33447_35504[(1)] = (5));


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
var cljs$core$async$state_machine__30687__auto__ = null;
var cljs$core$async$state_machine__30687__auto____0 = (function (){
var statearr_33451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33451[(0)] = cljs$core$async$state_machine__30687__auto__);

(statearr_33451[(1)] = (1));

return statearr_33451;
});
var cljs$core$async$state_machine__30687__auto____1 = (function (state_33386){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_33386);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e33456){var ex__30690__auto__ = e33456;
var statearr_33459_35514 = state_33386;
(statearr_33459_35514[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_33386[(4)]))){
var statearr_33461_35520 = state_33386;
(statearr_33461_35520[(1)] = cljs.core.first((state_33386[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35521 = state_33386;
state_33386 = G__35521;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$state_machine__30687__auto__ = function(state_33386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30687__auto____1.call(this,state_33386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30687__auto____0;
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30687__auto____1;
return cljs$core$async$state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_33468 = f__30882__auto__();
(statearr_33468[(6)] = c__30881__auto___35420);

return statearr_33468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
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
var G__33486 = arguments.length;
switch (G__33486) {
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
var c__30881__auto___35527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_33535){
var state_val_33536 = (state_33535[(1)]);
if((state_val_33536 === (7))){
var inst_33512 = (state_33535[(7)]);
var inst_33513 = (state_33535[(8)]);
var inst_33512__$1 = (state_33535[(2)]);
var inst_33513__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33512__$1,(0),null);
var inst_33515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33512__$1,(1),null);
var inst_33516 = (inst_33513__$1 == null);
var state_33535__$1 = (function (){var statearr_33537 = state_33535;
(statearr_33537[(7)] = inst_33512__$1);

(statearr_33537[(8)] = inst_33513__$1);

(statearr_33537[(9)] = inst_33515);

return statearr_33537;
})();
if(cljs.core.truth_(inst_33516)){
var statearr_33538_35529 = state_33535__$1;
(statearr_33538_35529[(1)] = (8));

} else {
var statearr_33539_35530 = state_33535__$1;
(statearr_33539_35530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (1))){
var inst_33493 = cljs.core.vec(chs);
var inst_33498 = inst_33493;
var state_33535__$1 = (function (){var statearr_33543 = state_33535;
(statearr_33543[(10)] = inst_33498);

return statearr_33543;
})();
var statearr_33544_35535 = state_33535__$1;
(statearr_33544_35535[(2)] = null);

(statearr_33544_35535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (4))){
var inst_33498 = (state_33535[(10)]);
var state_33535__$1 = state_33535;
return cljs.core.async.ioc_alts_BANG_(state_33535__$1,(7),inst_33498);
} else {
if((state_val_33536 === (6))){
var inst_33531 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33545_35536 = state_33535__$1;
(statearr_33545_35536[(2)] = inst_33531);

(statearr_33545_35536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (3))){
var inst_33533 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33535__$1,inst_33533);
} else {
if((state_val_33536 === (2))){
var inst_33498 = (state_33535[(10)]);
var inst_33501 = cljs.core.count(inst_33498);
var inst_33502 = (inst_33501 > (0));
var state_33535__$1 = state_33535;
if(cljs.core.truth_(inst_33502)){
var statearr_33548_35542 = state_33535__$1;
(statearr_33548_35542[(1)] = (4));

} else {
var statearr_33552_35544 = state_33535__$1;
(statearr_33552_35544[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (11))){
var inst_33498 = (state_33535[(10)]);
var inst_33524 = (state_33535[(2)]);
var tmp33546 = inst_33498;
var inst_33498__$1 = tmp33546;
var state_33535__$1 = (function (){var statearr_33554 = state_33535;
(statearr_33554[(11)] = inst_33524);

(statearr_33554[(10)] = inst_33498__$1);

return statearr_33554;
})();
var statearr_33555_35548 = state_33535__$1;
(statearr_33555_35548[(2)] = null);

(statearr_33555_35548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (9))){
var inst_33513 = (state_33535[(8)]);
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33535__$1,(11),out,inst_33513);
} else {
if((state_val_33536 === (5))){
var inst_33529 = cljs.core.async.close_BANG_(out);
var state_33535__$1 = state_33535;
var statearr_33567_35554 = state_33535__$1;
(statearr_33567_35554[(2)] = inst_33529);

(statearr_33567_35554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (10))){
var inst_33527 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33568_35568 = state_33535__$1;
(statearr_33568_35568[(2)] = inst_33527);

(statearr_33568_35568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (8))){
var inst_33498 = (state_33535[(10)]);
var inst_33512 = (state_33535[(7)]);
var inst_33513 = (state_33535[(8)]);
var inst_33515 = (state_33535[(9)]);
var inst_33518 = (function (){var cs = inst_33498;
var vec__33505 = inst_33512;
var v = inst_33513;
var c = inst_33515;
return (function (p1__33477_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33477_SHARP_);
});
})();
var inst_33519 = cljs.core.filterv(inst_33518,inst_33498);
var inst_33498__$1 = inst_33519;
var state_33535__$1 = (function (){var statearr_33570 = state_33535;
(statearr_33570[(10)] = inst_33498__$1);

return statearr_33570;
})();
var statearr_33571_35584 = state_33535__$1;
(statearr_33571_35584[(2)] = null);

(statearr_33571_35584[(1)] = (2));


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
var cljs$core$async$state_machine__30687__auto__ = null;
var cljs$core$async$state_machine__30687__auto____0 = (function (){
var statearr_33572 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33572[(0)] = cljs$core$async$state_machine__30687__auto__);

(statearr_33572[(1)] = (1));

return statearr_33572;
});
var cljs$core$async$state_machine__30687__auto____1 = (function (state_33535){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_33535);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e33576){var ex__30690__auto__ = e33576;
var statearr_33577_35586 = state_33535;
(statearr_33577_35586[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_33535[(4)]))){
var statearr_33578_35592 = state_33535;
(statearr_33578_35592[(1)] = cljs.core.first((state_33535[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35598 = state_33535;
state_33535 = G__35598;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$state_machine__30687__auto__ = function(state_33535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30687__auto____1.call(this,state_33535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30687__auto____0;
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30687__auto____1;
return cljs$core$async$state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_33581 = f__30882__auto__();
(statearr_33581[(6)] = c__30881__auto___35527);

return statearr_33581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
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
var G__33587 = arguments.length;
switch (G__33587) {
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
var c__30881__auto___35629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_33612){
var state_val_33613 = (state_33612[(1)]);
if((state_val_33613 === (7))){
var inst_33593 = (state_33612[(7)]);
var inst_33593__$1 = (state_33612[(2)]);
var inst_33594 = (inst_33593__$1 == null);
var inst_33595 = cljs.core.not(inst_33594);
var state_33612__$1 = (function (){var statearr_33619 = state_33612;
(statearr_33619[(7)] = inst_33593__$1);

return statearr_33619;
})();
if(inst_33595){
var statearr_33620_35641 = state_33612__$1;
(statearr_33620_35641[(1)] = (8));

} else {
var statearr_33621_35642 = state_33612__$1;
(statearr_33621_35642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (1))){
var inst_33588 = (0);
var state_33612__$1 = (function (){var statearr_33622 = state_33612;
(statearr_33622[(8)] = inst_33588);

return statearr_33622;
})();
var statearr_33623_35644 = state_33612__$1;
(statearr_33623_35644[(2)] = null);

(statearr_33623_35644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (4))){
var state_33612__$1 = state_33612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33612__$1,(7),ch);
} else {
if((state_val_33613 === (6))){
var inst_33607 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
var statearr_33625_35645 = state_33612__$1;
(statearr_33625_35645[(2)] = inst_33607);

(statearr_33625_35645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (3))){
var inst_33609 = (state_33612[(2)]);
var inst_33610 = cljs.core.async.close_BANG_(out);
var state_33612__$1 = (function (){var statearr_33629 = state_33612;
(statearr_33629[(9)] = inst_33609);

return statearr_33629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33612__$1,inst_33610);
} else {
if((state_val_33613 === (2))){
var inst_33588 = (state_33612[(8)]);
var inst_33590 = (inst_33588 < n);
var state_33612__$1 = state_33612;
if(cljs.core.truth_(inst_33590)){
var statearr_33630_35651 = state_33612__$1;
(statearr_33630_35651[(1)] = (4));

} else {
var statearr_33631_35652 = state_33612__$1;
(statearr_33631_35652[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (11))){
var inst_33588 = (state_33612[(8)]);
var inst_33598 = (state_33612[(2)]);
var inst_33600 = (inst_33588 + (1));
var inst_33588__$1 = inst_33600;
var state_33612__$1 = (function (){var statearr_33632 = state_33612;
(statearr_33632[(10)] = inst_33598);

(statearr_33632[(8)] = inst_33588__$1);

return statearr_33632;
})();
var statearr_33633_35660 = state_33612__$1;
(statearr_33633_35660[(2)] = null);

(statearr_33633_35660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (9))){
var state_33612__$1 = state_33612;
var statearr_33634_35667 = state_33612__$1;
(statearr_33634_35667[(2)] = null);

(statearr_33634_35667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (5))){
var state_33612__$1 = state_33612;
var statearr_33636_35675 = state_33612__$1;
(statearr_33636_35675[(2)] = null);

(statearr_33636_35675[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (10))){
var inst_33604 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
var statearr_33637_35686 = state_33612__$1;
(statearr_33637_35686[(2)] = inst_33604);

(statearr_33637_35686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (8))){
var inst_33593 = (state_33612[(7)]);
var state_33612__$1 = state_33612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33612__$1,(11),out,inst_33593);
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
var cljs$core$async$state_machine__30687__auto__ = null;
var cljs$core$async$state_machine__30687__auto____0 = (function (){
var statearr_33641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33641[(0)] = cljs$core$async$state_machine__30687__auto__);

(statearr_33641[(1)] = (1));

return statearr_33641;
});
var cljs$core$async$state_machine__30687__auto____1 = (function (state_33612){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_33612);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e33642){var ex__30690__auto__ = e33642;
var statearr_33643_35707 = state_33612;
(statearr_33643_35707[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_33612[(4)]))){
var statearr_33644_35708 = state_33612;
(statearr_33644_35708[(1)] = cljs.core.first((state_33612[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35709 = state_33612;
state_33612 = G__35709;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$state_machine__30687__auto__ = function(state_33612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30687__auto____1.call(this,state_33612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30687__auto____0;
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30687__auto____1;
return cljs$core$async$state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_33645 = f__30882__auto__();
(statearr_33645[(6)] = c__30881__auto___35629);

return statearr_33645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
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
cljs.core.async.t_cljs$core$async33650 = (function (f,ch,meta33648,_,fn1,meta33651){
this.f = f;
this.ch = ch;
this.meta33648 = meta33648;
this._ = _;
this.fn1 = fn1;
this.meta33651 = meta33651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33652,meta33651__$1){
var self__ = this;
var _33652__$1 = this;
return (new cljs.core.async.t_cljs$core$async33650(self__.f,self__.ch,self__.meta33648,self__._,self__.fn1,meta33651__$1));
}));

(cljs.core.async.t_cljs$core$async33650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33652){
var self__ = this;
var _33652__$1 = this;
return self__.meta33651;
}));

(cljs.core.async.t_cljs$core$async33650.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33650.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33646_SHARP_){
var G__33659 = (((p1__33646_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33646_SHARP_) : self__.f.call(null,p1__33646_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33659) : f1.call(null,G__33659));
});
}));

(cljs.core.async.t_cljs$core$async33650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33648","meta33648",-1952878592,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33647","cljs.core.async/t_cljs$core$async33647",508540532,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33651","meta33651",971268175,null)], null);
}));

(cljs.core.async.t_cljs$core$async33650.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33650");

(cljs.core.async.t_cljs$core$async33650.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33650");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33650.
 */
cljs.core.async.__GT_t_cljs$core$async33650 = (function cljs$core$async$__GT_t_cljs$core$async33650(f,ch,meta33648,_,fn1,meta33651){
return (new cljs.core.async.t_cljs$core$async33650(f,ch,meta33648,_,fn1,meta33651));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33647 = (function (f,ch,meta33648){
this.f = f;
this.ch = ch;
this.meta33648 = meta33648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33649,meta33648__$1){
var self__ = this;
var _33649__$1 = this;
return (new cljs.core.async.t_cljs$core$async33647(self__.f,self__.ch,meta33648__$1));
}));

(cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33649){
var self__ = this;
var _33649__$1 = this;
return self__.meta33648;
}));

(cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33650(self__.f,self__.ch,self__.meta33648,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33660 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33660) : self__.f.call(null,G__33660));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33648","meta33648",-1952878592,null)], null);
}));

(cljs.core.async.t_cljs$core$async33647.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33647");

(cljs.core.async.t_cljs$core$async33647.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33647");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33647.
 */
cljs.core.async.__GT_t_cljs$core$async33647 = (function cljs$core$async$__GT_t_cljs$core$async33647(f,ch,meta33648){
return (new cljs.core.async.t_cljs$core$async33647(f,ch,meta33648));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33647(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33672 = (function (f,ch,meta33673){
this.f = f;
this.ch = ch;
this.meta33673 = meta33673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33674,meta33673__$1){
var self__ = this;
var _33674__$1 = this;
return (new cljs.core.async.t_cljs$core$async33672(self__.f,self__.ch,meta33673__$1));
}));

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33674){
var self__ = this;
var _33674__$1 = this;
return self__.meta33673;
}));

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33673","meta33673",1270866256,null)], null);
}));

(cljs.core.async.t_cljs$core$async33672.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33672");

(cljs.core.async.t_cljs$core$async33672.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33672");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33672.
 */
cljs.core.async.__GT_t_cljs$core$async33672 = (function cljs$core$async$__GT_t_cljs$core$async33672(f,ch,meta33673){
return (new cljs.core.async.t_cljs$core$async33672(f,ch,meta33673));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33672(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33682 = (function (p,ch,meta33683){
this.p = p;
this.ch = ch;
this.meta33683 = meta33683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33684,meta33683__$1){
var self__ = this;
var _33684__$1 = this;
return (new cljs.core.async.t_cljs$core$async33682(self__.p,self__.ch,meta33683__$1));
}));

(cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33684){
var self__ = this;
var _33684__$1 = this;
return self__.meta33683;
}));

(cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33683","meta33683",1392601863,null)], null);
}));

(cljs.core.async.t_cljs$core$async33682.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33682");

(cljs.core.async.t_cljs$core$async33682.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33682");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33682.
 */
cljs.core.async.__GT_t_cljs$core$async33682 = (function cljs$core$async$__GT_t_cljs$core$async33682(p,ch,meta33683){
return (new cljs.core.async.t_cljs$core$async33682(p,ch,meta33683));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33682(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33735 = arguments.length;
switch (G__33735) {
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
var c__30881__auto___35856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_33759){
var state_val_33760 = (state_33759[(1)]);
if((state_val_33760 === (7))){
var inst_33755 = (state_33759[(2)]);
var state_33759__$1 = state_33759;
var statearr_33761_35857 = state_33759__$1;
(statearr_33761_35857[(2)] = inst_33755);

(statearr_33761_35857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (1))){
var state_33759__$1 = state_33759;
var statearr_33765_35860 = state_33759__$1;
(statearr_33765_35860[(2)] = null);

(statearr_33765_35860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (4))){
var inst_33740 = (state_33759[(7)]);
var inst_33740__$1 = (state_33759[(2)]);
var inst_33741 = (inst_33740__$1 == null);
var state_33759__$1 = (function (){var statearr_33766 = state_33759;
(statearr_33766[(7)] = inst_33740__$1);

return statearr_33766;
})();
if(cljs.core.truth_(inst_33741)){
var statearr_33767_35861 = state_33759__$1;
(statearr_33767_35861[(1)] = (5));

} else {
var statearr_33768_35863 = state_33759__$1;
(statearr_33768_35863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (6))){
var inst_33740 = (state_33759[(7)]);
var inst_33746 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33740) : p.call(null,inst_33740));
var state_33759__$1 = state_33759;
if(cljs.core.truth_(inst_33746)){
var statearr_33769_35865 = state_33759__$1;
(statearr_33769_35865[(1)] = (8));

} else {
var statearr_33770_35866 = state_33759__$1;
(statearr_33770_35866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (3))){
var inst_33757 = (state_33759[(2)]);
var state_33759__$1 = state_33759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33759__$1,inst_33757);
} else {
if((state_val_33760 === (2))){
var state_33759__$1 = state_33759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33759__$1,(4),ch);
} else {
if((state_val_33760 === (11))){
var inst_33749 = (state_33759[(2)]);
var state_33759__$1 = state_33759;
var statearr_33781_35869 = state_33759__$1;
(statearr_33781_35869[(2)] = inst_33749);

(statearr_33781_35869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (9))){
var state_33759__$1 = state_33759;
var statearr_33784_35871 = state_33759__$1;
(statearr_33784_35871[(2)] = null);

(statearr_33784_35871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (5))){
var inst_33743 = cljs.core.async.close_BANG_(out);
var state_33759__$1 = state_33759;
var statearr_33787_35873 = state_33759__$1;
(statearr_33787_35873[(2)] = inst_33743);

(statearr_33787_35873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (10))){
var inst_33752 = (state_33759[(2)]);
var state_33759__$1 = (function (){var statearr_33788 = state_33759;
(statearr_33788[(8)] = inst_33752);

return statearr_33788;
})();
var statearr_33789_35874 = state_33759__$1;
(statearr_33789_35874[(2)] = null);

(statearr_33789_35874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (8))){
var inst_33740 = (state_33759[(7)]);
var state_33759__$1 = state_33759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33759__$1,(11),out,inst_33740);
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
var cljs$core$async$state_machine__30687__auto__ = null;
var cljs$core$async$state_machine__30687__auto____0 = (function (){
var statearr_33799 = [null,null,null,null,null,null,null,null,null];
(statearr_33799[(0)] = cljs$core$async$state_machine__30687__auto__);

(statearr_33799[(1)] = (1));

return statearr_33799;
});
var cljs$core$async$state_machine__30687__auto____1 = (function (state_33759){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_33759);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e33800){var ex__30690__auto__ = e33800;
var statearr_33801_35876 = state_33759;
(statearr_33801_35876[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_33759[(4)]))){
var statearr_33802_35877 = state_33759;
(statearr_33802_35877[(1)] = cljs.core.first((state_33759[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35881 = state_33759;
state_33759 = G__35881;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$state_machine__30687__auto__ = function(state_33759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30687__auto____1.call(this,state_33759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30687__auto____0;
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30687__auto____1;
return cljs$core$async$state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_33804 = f__30882__auto__();
(statearr_33804[(6)] = c__30881__auto___35856);

return statearr_33804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33806 = arguments.length;
switch (G__33806) {
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
var c__30881__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_33886){
var state_val_33887 = (state_33886[(1)]);
if((state_val_33887 === (7))){
var inst_33880 = (state_33886[(2)]);
var state_33886__$1 = state_33886;
var statearr_33901_35893 = state_33886__$1;
(statearr_33901_35893[(2)] = inst_33880);

(statearr_33901_35893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (20))){
var inst_33850 = (state_33886[(7)]);
var inst_33861 = (state_33886[(2)]);
var inst_33862 = cljs.core.next(inst_33850);
var inst_33833 = inst_33862;
var inst_33834 = null;
var inst_33835 = (0);
var inst_33836 = (0);
var state_33886__$1 = (function (){var statearr_33902 = state_33886;
(statearr_33902[(8)] = inst_33861);

(statearr_33902[(9)] = inst_33833);

(statearr_33902[(10)] = inst_33834);

(statearr_33902[(11)] = inst_33835);

(statearr_33902[(12)] = inst_33836);

return statearr_33902;
})();
var statearr_33903_35907 = state_33886__$1;
(statearr_33903_35907[(2)] = null);

(statearr_33903_35907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (1))){
var state_33886__$1 = state_33886;
var statearr_33904_35916 = state_33886__$1;
(statearr_33904_35916[(2)] = null);

(statearr_33904_35916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (4))){
var inst_33822 = (state_33886[(13)]);
var inst_33822__$1 = (state_33886[(2)]);
var inst_33823 = (inst_33822__$1 == null);
var state_33886__$1 = (function (){var statearr_33905 = state_33886;
(statearr_33905[(13)] = inst_33822__$1);

return statearr_33905;
})();
if(cljs.core.truth_(inst_33823)){
var statearr_33906_35930 = state_33886__$1;
(statearr_33906_35930[(1)] = (5));

} else {
var statearr_33907_35931 = state_33886__$1;
(statearr_33907_35931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (15))){
var state_33886__$1 = state_33886;
var statearr_33911_35936 = state_33886__$1;
(statearr_33911_35936[(2)] = null);

(statearr_33911_35936[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (21))){
var state_33886__$1 = state_33886;
var statearr_33912_35945 = state_33886__$1;
(statearr_33912_35945[(2)] = null);

(statearr_33912_35945[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (13))){
var inst_33836 = (state_33886[(12)]);
var inst_33833 = (state_33886[(9)]);
var inst_33834 = (state_33886[(10)]);
var inst_33835 = (state_33886[(11)]);
var inst_33846 = (state_33886[(2)]);
var inst_33847 = (inst_33836 + (1));
var tmp33908 = inst_33834;
var tmp33909 = inst_33835;
var tmp33910 = inst_33833;
var inst_33833__$1 = tmp33910;
var inst_33834__$1 = tmp33908;
var inst_33835__$1 = tmp33909;
var inst_33836__$1 = inst_33847;
var state_33886__$1 = (function (){var statearr_33916 = state_33886;
(statearr_33916[(14)] = inst_33846);

(statearr_33916[(9)] = inst_33833__$1);

(statearr_33916[(10)] = inst_33834__$1);

(statearr_33916[(11)] = inst_33835__$1);

(statearr_33916[(12)] = inst_33836__$1);

return statearr_33916;
})();
var statearr_33918_35966 = state_33886__$1;
(statearr_33918_35966[(2)] = null);

(statearr_33918_35966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (22))){
var state_33886__$1 = state_33886;
var statearr_33919_35968 = state_33886__$1;
(statearr_33919_35968[(2)] = null);

(statearr_33919_35968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (6))){
var inst_33822 = (state_33886[(13)]);
var inst_33831 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33822) : f.call(null,inst_33822));
var inst_33832 = cljs.core.seq(inst_33831);
var inst_33833 = inst_33832;
var inst_33834 = null;
var inst_33835 = (0);
var inst_33836 = (0);
var state_33886__$1 = (function (){var statearr_33921 = state_33886;
(statearr_33921[(9)] = inst_33833);

(statearr_33921[(10)] = inst_33834);

(statearr_33921[(11)] = inst_33835);

(statearr_33921[(12)] = inst_33836);

return statearr_33921;
})();
var statearr_33922_35978 = state_33886__$1;
(statearr_33922_35978[(2)] = null);

(statearr_33922_35978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (17))){
var inst_33850 = (state_33886[(7)]);
var inst_33854 = cljs.core.chunk_first(inst_33850);
var inst_33855 = cljs.core.chunk_rest(inst_33850);
var inst_33856 = cljs.core.count(inst_33854);
var inst_33833 = inst_33855;
var inst_33834 = inst_33854;
var inst_33835 = inst_33856;
var inst_33836 = (0);
var state_33886__$1 = (function (){var statearr_33926 = state_33886;
(statearr_33926[(9)] = inst_33833);

(statearr_33926[(10)] = inst_33834);

(statearr_33926[(11)] = inst_33835);

(statearr_33926[(12)] = inst_33836);

return statearr_33926;
})();
var statearr_33927_35986 = state_33886__$1;
(statearr_33927_35986[(2)] = null);

(statearr_33927_35986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (3))){
var inst_33882 = (state_33886[(2)]);
var state_33886__$1 = state_33886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33886__$1,inst_33882);
} else {
if((state_val_33887 === (12))){
var inst_33870 = (state_33886[(2)]);
var state_33886__$1 = state_33886;
var statearr_33928_35996 = state_33886__$1;
(statearr_33928_35996[(2)] = inst_33870);

(statearr_33928_35996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (2))){
var state_33886__$1 = state_33886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33886__$1,(4),in$);
} else {
if((state_val_33887 === (23))){
var inst_33878 = (state_33886[(2)]);
var state_33886__$1 = state_33886;
var statearr_33929_36001 = state_33886__$1;
(statearr_33929_36001[(2)] = inst_33878);

(statearr_33929_36001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (19))){
var inst_33865 = (state_33886[(2)]);
var state_33886__$1 = state_33886;
var statearr_33930_36004 = state_33886__$1;
(statearr_33930_36004[(2)] = inst_33865);

(statearr_33930_36004[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (11))){
var inst_33833 = (state_33886[(9)]);
var inst_33850 = (state_33886[(7)]);
var inst_33850__$1 = cljs.core.seq(inst_33833);
var state_33886__$1 = (function (){var statearr_33931 = state_33886;
(statearr_33931[(7)] = inst_33850__$1);

return statearr_33931;
})();
if(inst_33850__$1){
var statearr_33932_36009 = state_33886__$1;
(statearr_33932_36009[(1)] = (14));

} else {
var statearr_33933_36013 = state_33886__$1;
(statearr_33933_36013[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (9))){
var inst_33872 = (state_33886[(2)]);
var inst_33873 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33886__$1 = (function (){var statearr_33934 = state_33886;
(statearr_33934[(15)] = inst_33872);

return statearr_33934;
})();
if(cljs.core.truth_(inst_33873)){
var statearr_33935_36017 = state_33886__$1;
(statearr_33935_36017[(1)] = (21));

} else {
var statearr_33936_36018 = state_33886__$1;
(statearr_33936_36018[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (5))){
var inst_33825 = cljs.core.async.close_BANG_(out);
var state_33886__$1 = state_33886;
var statearr_33938_36025 = state_33886__$1;
(statearr_33938_36025[(2)] = inst_33825);

(statearr_33938_36025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (14))){
var inst_33850 = (state_33886[(7)]);
var inst_33852 = cljs.core.chunked_seq_QMARK_(inst_33850);
var state_33886__$1 = state_33886;
if(inst_33852){
var statearr_33939_36031 = state_33886__$1;
(statearr_33939_36031[(1)] = (17));

} else {
var statearr_33940_36032 = state_33886__$1;
(statearr_33940_36032[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (16))){
var inst_33868 = (state_33886[(2)]);
var state_33886__$1 = state_33886;
var statearr_33941_36035 = state_33886__$1;
(statearr_33941_36035[(2)] = inst_33868);

(statearr_33941_36035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (10))){
var inst_33834 = (state_33886[(10)]);
var inst_33836 = (state_33886[(12)]);
var inst_33844 = cljs.core._nth(inst_33834,inst_33836);
var state_33886__$1 = state_33886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33886__$1,(13),out,inst_33844);
} else {
if((state_val_33887 === (18))){
var inst_33850 = (state_33886[(7)]);
var inst_33859 = cljs.core.first(inst_33850);
var state_33886__$1 = state_33886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33886__$1,(20),out,inst_33859);
} else {
if((state_val_33887 === (8))){
var inst_33836 = (state_33886[(12)]);
var inst_33835 = (state_33886[(11)]);
var inst_33838 = (inst_33836 < inst_33835);
var inst_33839 = inst_33838;
var state_33886__$1 = state_33886;
if(cljs.core.truth_(inst_33839)){
var statearr_33942_36044 = state_33886__$1;
(statearr_33942_36044[(1)] = (10));

} else {
var statearr_33943_36045 = state_33886__$1;
(statearr_33943_36045[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30687__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30687__auto____0 = (function (){
var statearr_33944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33944[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30687__auto__);

(statearr_33944[(1)] = (1));

return statearr_33944;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30687__auto____1 = (function (state_33886){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_33886);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e33946){var ex__30690__auto__ = e33946;
var statearr_33947_36046 = state_33886;
(statearr_33947_36046[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_33886[(4)]))){
var statearr_33949_36047 = state_33886;
(statearr_33949_36047[(1)] = cljs.core.first((state_33886[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36049 = state_33886;
state_33886 = G__36049;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30687__auto__ = function(state_33886){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30687__auto____1.call(this,state_33886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30687__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30687__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_33950 = f__30882__auto__();
(statearr_33950[(6)] = c__30881__auto__);

return statearr_33950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
}));

return c__30881__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33969 = arguments.length;
switch (G__33969) {
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
var G__33972 = arguments.length;
switch (G__33972) {
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
var G__33978 = arguments.length;
switch (G__33978) {
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
var c__30881__auto___36072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_34006){
var state_val_34007 = (state_34006[(1)]);
if((state_val_34007 === (7))){
var inst_34001 = (state_34006[(2)]);
var state_34006__$1 = state_34006;
var statearr_34008_36073 = state_34006__$1;
(statearr_34008_36073[(2)] = inst_34001);

(statearr_34008_36073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (1))){
var inst_33981 = null;
var state_34006__$1 = (function (){var statearr_34009 = state_34006;
(statearr_34009[(7)] = inst_33981);

return statearr_34009;
})();
var statearr_34010_36076 = state_34006__$1;
(statearr_34010_36076[(2)] = null);

(statearr_34010_36076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (4))){
var inst_33984 = (state_34006[(8)]);
var inst_33984__$1 = (state_34006[(2)]);
var inst_33987 = (inst_33984__$1 == null);
var inst_33988 = cljs.core.not(inst_33987);
var state_34006__$1 = (function (){var statearr_34011 = state_34006;
(statearr_34011[(8)] = inst_33984__$1);

return statearr_34011;
})();
if(inst_33988){
var statearr_34012_36088 = state_34006__$1;
(statearr_34012_36088[(1)] = (5));

} else {
var statearr_34013_36090 = state_34006__$1;
(statearr_34013_36090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (6))){
var state_34006__$1 = state_34006;
var statearr_34014_36091 = state_34006__$1;
(statearr_34014_36091[(2)] = null);

(statearr_34014_36091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (3))){
var inst_34003 = (state_34006[(2)]);
var inst_34004 = cljs.core.async.close_BANG_(out);
var state_34006__$1 = (function (){var statearr_34015 = state_34006;
(statearr_34015[(9)] = inst_34003);

return statearr_34015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34006__$1,inst_34004);
} else {
if((state_val_34007 === (2))){
var state_34006__$1 = state_34006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34006__$1,(4),ch);
} else {
if((state_val_34007 === (11))){
var inst_33984 = (state_34006[(8)]);
var inst_33995 = (state_34006[(2)]);
var inst_33981 = inst_33984;
var state_34006__$1 = (function (){var statearr_34016 = state_34006;
(statearr_34016[(10)] = inst_33995);

(statearr_34016[(7)] = inst_33981);

return statearr_34016;
})();
var statearr_34020_36094 = state_34006__$1;
(statearr_34020_36094[(2)] = null);

(statearr_34020_36094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (9))){
var inst_33984 = (state_34006[(8)]);
var state_34006__$1 = state_34006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34006__$1,(11),out,inst_33984);
} else {
if((state_val_34007 === (5))){
var inst_33984 = (state_34006[(8)]);
var inst_33981 = (state_34006[(7)]);
var inst_33990 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33984,inst_33981);
var state_34006__$1 = state_34006;
if(inst_33990){
var statearr_34029_36098 = state_34006__$1;
(statearr_34029_36098[(1)] = (8));

} else {
var statearr_34034_36099 = state_34006__$1;
(statearr_34034_36099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (10))){
var inst_33998 = (state_34006[(2)]);
var state_34006__$1 = state_34006;
var statearr_34035_36100 = state_34006__$1;
(statearr_34035_36100[(2)] = inst_33998);

(statearr_34035_36100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (8))){
var inst_33981 = (state_34006[(7)]);
var tmp34028 = inst_33981;
var inst_33981__$1 = tmp34028;
var state_34006__$1 = (function (){var statearr_34039 = state_34006;
(statearr_34039[(7)] = inst_33981__$1);

return statearr_34039;
})();
var statearr_34040_36101 = state_34006__$1;
(statearr_34040_36101[(2)] = null);

(statearr_34040_36101[(1)] = (2));


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
var cljs$core$async$state_machine__30687__auto__ = null;
var cljs$core$async$state_machine__30687__auto____0 = (function (){
var statearr_34041 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34041[(0)] = cljs$core$async$state_machine__30687__auto__);

(statearr_34041[(1)] = (1));

return statearr_34041;
});
var cljs$core$async$state_machine__30687__auto____1 = (function (state_34006){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_34006);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e34042){var ex__30690__auto__ = e34042;
var statearr_34043_36106 = state_34006;
(statearr_34043_36106[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_34006[(4)]))){
var statearr_34044_36107 = state_34006;
(statearr_34044_36107[(1)] = cljs.core.first((state_34006[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36108 = state_34006;
state_34006 = G__36108;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$state_machine__30687__auto__ = function(state_34006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30687__auto____1.call(this,state_34006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30687__auto____0;
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30687__auto____1;
return cljs$core$async$state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_34045 = f__30882__auto__();
(statearr_34045[(6)] = c__30881__auto___36072);

return statearr_34045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34048 = arguments.length;
switch (G__34048) {
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
var c__30881__auto___36116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_34087){
var state_val_34088 = (state_34087[(1)]);
if((state_val_34088 === (7))){
var inst_34083 = (state_34087[(2)]);
var state_34087__$1 = state_34087;
var statearr_34089_36117 = state_34087__$1;
(statearr_34089_36117[(2)] = inst_34083);

(statearr_34089_36117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (1))){
var inst_34050 = (new Array(n));
var inst_34051 = inst_34050;
var inst_34052 = (0);
var state_34087__$1 = (function (){var statearr_34090 = state_34087;
(statearr_34090[(7)] = inst_34051);

(statearr_34090[(8)] = inst_34052);

return statearr_34090;
})();
var statearr_34097_36119 = state_34087__$1;
(statearr_34097_36119[(2)] = null);

(statearr_34097_36119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (4))){
var inst_34055 = (state_34087[(9)]);
var inst_34055__$1 = (state_34087[(2)]);
var inst_34056 = (inst_34055__$1 == null);
var inst_34057 = cljs.core.not(inst_34056);
var state_34087__$1 = (function (){var statearr_34098 = state_34087;
(statearr_34098[(9)] = inst_34055__$1);

return statearr_34098;
})();
if(inst_34057){
var statearr_34101_36121 = state_34087__$1;
(statearr_34101_36121[(1)] = (5));

} else {
var statearr_34103_36125 = state_34087__$1;
(statearr_34103_36125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (15))){
var inst_34077 = (state_34087[(2)]);
var state_34087__$1 = state_34087;
var statearr_34104_36126 = state_34087__$1;
(statearr_34104_36126[(2)] = inst_34077);

(statearr_34104_36126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (13))){
var state_34087__$1 = state_34087;
var statearr_34105_36127 = state_34087__$1;
(statearr_34105_36127[(2)] = null);

(statearr_34105_36127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (6))){
var inst_34052 = (state_34087[(8)]);
var inst_34073 = (inst_34052 > (0));
var state_34087__$1 = state_34087;
if(cljs.core.truth_(inst_34073)){
var statearr_34106_36129 = state_34087__$1;
(statearr_34106_36129[(1)] = (12));

} else {
var statearr_34107_36130 = state_34087__$1;
(statearr_34107_36130[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (3))){
var inst_34085 = (state_34087[(2)]);
var state_34087__$1 = state_34087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34087__$1,inst_34085);
} else {
if((state_val_34088 === (12))){
var inst_34051 = (state_34087[(7)]);
var inst_34075 = cljs.core.vec(inst_34051);
var state_34087__$1 = state_34087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34087__$1,(15),out,inst_34075);
} else {
if((state_val_34088 === (2))){
var state_34087__$1 = state_34087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34087__$1,(4),ch);
} else {
if((state_val_34088 === (11))){
var inst_34067 = (state_34087[(2)]);
var inst_34068 = (new Array(n));
var inst_34051 = inst_34068;
var inst_34052 = (0);
var state_34087__$1 = (function (){var statearr_34108 = state_34087;
(statearr_34108[(10)] = inst_34067);

(statearr_34108[(7)] = inst_34051);

(statearr_34108[(8)] = inst_34052);

return statearr_34108;
})();
var statearr_34109_36132 = state_34087__$1;
(statearr_34109_36132[(2)] = null);

(statearr_34109_36132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (9))){
var inst_34051 = (state_34087[(7)]);
var inst_34065 = cljs.core.vec(inst_34051);
var state_34087__$1 = state_34087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34087__$1,(11),out,inst_34065);
} else {
if((state_val_34088 === (5))){
var inst_34051 = (state_34087[(7)]);
var inst_34052 = (state_34087[(8)]);
var inst_34055 = (state_34087[(9)]);
var inst_34060 = (state_34087[(11)]);
var inst_34059 = (inst_34051[inst_34052] = inst_34055);
var inst_34060__$1 = (inst_34052 + (1));
var inst_34061 = (inst_34060__$1 < n);
var state_34087__$1 = (function (){var statearr_34119 = state_34087;
(statearr_34119[(12)] = inst_34059);

(statearr_34119[(11)] = inst_34060__$1);

return statearr_34119;
})();
if(cljs.core.truth_(inst_34061)){
var statearr_34120_36134 = state_34087__$1;
(statearr_34120_36134[(1)] = (8));

} else {
var statearr_34121_36135 = state_34087__$1;
(statearr_34121_36135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (14))){
var inst_34080 = (state_34087[(2)]);
var inst_34081 = cljs.core.async.close_BANG_(out);
var state_34087__$1 = (function (){var statearr_34123 = state_34087;
(statearr_34123[(13)] = inst_34080);

return statearr_34123;
})();
var statearr_34124_36136 = state_34087__$1;
(statearr_34124_36136[(2)] = inst_34081);

(statearr_34124_36136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (10))){
var inst_34071 = (state_34087[(2)]);
var state_34087__$1 = state_34087;
var statearr_34125_36137 = state_34087__$1;
(statearr_34125_36137[(2)] = inst_34071);

(statearr_34125_36137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (8))){
var inst_34051 = (state_34087[(7)]);
var inst_34060 = (state_34087[(11)]);
var tmp34122 = inst_34051;
var inst_34051__$1 = tmp34122;
var inst_34052 = inst_34060;
var state_34087__$1 = (function (){var statearr_34126 = state_34087;
(statearr_34126[(7)] = inst_34051__$1);

(statearr_34126[(8)] = inst_34052);

return statearr_34126;
})();
var statearr_34127_36139 = state_34087__$1;
(statearr_34127_36139[(2)] = null);

(statearr_34127_36139[(1)] = (2));


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
var cljs$core$async$state_machine__30687__auto__ = null;
var cljs$core$async$state_machine__30687__auto____0 = (function (){
var statearr_34128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34128[(0)] = cljs$core$async$state_machine__30687__auto__);

(statearr_34128[(1)] = (1));

return statearr_34128;
});
var cljs$core$async$state_machine__30687__auto____1 = (function (state_34087){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_34087);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e34129){var ex__30690__auto__ = e34129;
var statearr_34130_36143 = state_34087;
(statearr_34130_36143[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_34087[(4)]))){
var statearr_34131_36144 = state_34087;
(statearr_34131_36144[(1)] = cljs.core.first((state_34087[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36145 = state_34087;
state_34087 = G__36145;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$state_machine__30687__auto__ = function(state_34087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30687__auto____1.call(this,state_34087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30687__auto____0;
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30687__auto____1;
return cljs$core$async$state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_34135 = f__30882__auto__();
(statearr_34135[(6)] = c__30881__auto___36116);

return statearr_34135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34139 = arguments.length;
switch (G__34139) {
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
var c__30881__auto___36147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30882__auto__ = (function (){var switch__30686__auto__ = (function (state_34206){
var state_val_34207 = (state_34206[(1)]);
if((state_val_34207 === (7))){
var inst_34202 = (state_34206[(2)]);
var state_34206__$1 = state_34206;
var statearr_34211_36151 = state_34206__$1;
(statearr_34211_36151[(2)] = inst_34202);

(statearr_34211_36151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (1))){
var inst_34149 = [];
var inst_34150 = inst_34149;
var inst_34151 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34206__$1 = (function (){var statearr_34212 = state_34206;
(statearr_34212[(7)] = inst_34150);

(statearr_34212[(8)] = inst_34151);

return statearr_34212;
})();
var statearr_34213_36155 = state_34206__$1;
(statearr_34213_36155[(2)] = null);

(statearr_34213_36155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (4))){
var inst_34157 = (state_34206[(9)]);
var inst_34157__$1 = (state_34206[(2)]);
var inst_34158 = (inst_34157__$1 == null);
var inst_34160 = cljs.core.not(inst_34158);
var state_34206__$1 = (function (){var statearr_34214 = state_34206;
(statearr_34214[(9)] = inst_34157__$1);

return statearr_34214;
})();
if(inst_34160){
var statearr_34215_36160 = state_34206__$1;
(statearr_34215_36160[(1)] = (5));

} else {
var statearr_34216_36161 = state_34206__$1;
(statearr_34216_36161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (15))){
var inst_34150 = (state_34206[(7)]);
var inst_34188 = cljs.core.vec(inst_34150);
var state_34206__$1 = state_34206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34206__$1,(18),out,inst_34188);
} else {
if((state_val_34207 === (13))){
var inst_34183 = (state_34206[(2)]);
var state_34206__$1 = state_34206;
var statearr_34224_36162 = state_34206__$1;
(statearr_34224_36162[(2)] = inst_34183);

(statearr_34224_36162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (6))){
var inst_34150 = (state_34206[(7)]);
var inst_34185 = inst_34150.length;
var inst_34186 = (inst_34185 > (0));
var state_34206__$1 = state_34206;
if(cljs.core.truth_(inst_34186)){
var statearr_34228_36163 = state_34206__$1;
(statearr_34228_36163[(1)] = (15));

} else {
var statearr_34229_36164 = state_34206__$1;
(statearr_34229_36164[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (17))){
var inst_34194 = (state_34206[(2)]);
var inst_34200 = cljs.core.async.close_BANG_(out);
var state_34206__$1 = (function (){var statearr_34230 = state_34206;
(statearr_34230[(10)] = inst_34194);

return statearr_34230;
})();
var statearr_34231_36165 = state_34206__$1;
(statearr_34231_36165[(2)] = inst_34200);

(statearr_34231_36165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (3))){
var inst_34204 = (state_34206[(2)]);
var state_34206__$1 = state_34206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34206__$1,inst_34204);
} else {
if((state_val_34207 === (12))){
var inst_34150 = (state_34206[(7)]);
var inst_34176 = cljs.core.vec(inst_34150);
var state_34206__$1 = state_34206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34206__$1,(14),out,inst_34176);
} else {
if((state_val_34207 === (2))){
var state_34206__$1 = state_34206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34206__$1,(4),ch);
} else {
if((state_val_34207 === (11))){
var inst_34150 = (state_34206[(7)]);
var inst_34157 = (state_34206[(9)]);
var inst_34162 = (state_34206[(11)]);
var inst_34173 = inst_34150.push(inst_34157);
var tmp34235 = inst_34150;
var inst_34150__$1 = tmp34235;
var inst_34151 = inst_34162;
var state_34206__$1 = (function (){var statearr_34246 = state_34206;
(statearr_34246[(12)] = inst_34173);

(statearr_34246[(7)] = inst_34150__$1);

(statearr_34246[(8)] = inst_34151);

return statearr_34246;
})();
var statearr_34247_36170 = state_34206__$1;
(statearr_34247_36170[(2)] = null);

(statearr_34247_36170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (9))){
var inst_34151 = (state_34206[(8)]);
var inst_34166 = cljs.core.keyword_identical_QMARK_(inst_34151,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34206__$1 = state_34206;
var statearr_34253_36178 = state_34206__$1;
(statearr_34253_36178[(2)] = inst_34166);

(statearr_34253_36178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (5))){
var inst_34157 = (state_34206[(9)]);
var inst_34162 = (state_34206[(11)]);
var inst_34151 = (state_34206[(8)]);
var inst_34163 = (state_34206[(13)]);
var inst_34162__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34157) : f.call(null,inst_34157));
var inst_34163__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34162__$1,inst_34151);
var state_34206__$1 = (function (){var statearr_34261 = state_34206;
(statearr_34261[(11)] = inst_34162__$1);

(statearr_34261[(13)] = inst_34163__$1);

return statearr_34261;
})();
if(inst_34163__$1){
var statearr_34262_36182 = state_34206__$1;
(statearr_34262_36182[(1)] = (8));

} else {
var statearr_34263_36183 = state_34206__$1;
(statearr_34263_36183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (14))){
var inst_34157 = (state_34206[(9)]);
var inst_34162 = (state_34206[(11)]);
var inst_34178 = (state_34206[(2)]);
var inst_34179 = [];
var inst_34180 = inst_34179.push(inst_34157);
var inst_34150 = inst_34179;
var inst_34151 = inst_34162;
var state_34206__$1 = (function (){var statearr_34266 = state_34206;
(statearr_34266[(14)] = inst_34178);

(statearr_34266[(15)] = inst_34180);

(statearr_34266[(7)] = inst_34150);

(statearr_34266[(8)] = inst_34151);

return statearr_34266;
})();
var statearr_34267_36185 = state_34206__$1;
(statearr_34267_36185[(2)] = null);

(statearr_34267_36185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (16))){
var state_34206__$1 = state_34206;
var statearr_34274_36189 = state_34206__$1;
(statearr_34274_36189[(2)] = null);

(statearr_34274_36189[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (10))){
var inst_34168 = (state_34206[(2)]);
var state_34206__$1 = state_34206;
if(cljs.core.truth_(inst_34168)){
var statearr_34275_36192 = state_34206__$1;
(statearr_34275_36192[(1)] = (11));

} else {
var statearr_34276_36196 = state_34206__$1;
(statearr_34276_36196[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (18))){
var inst_34190 = (state_34206[(2)]);
var state_34206__$1 = state_34206;
var statearr_34278_36198 = state_34206__$1;
(statearr_34278_36198[(2)] = inst_34190);

(statearr_34278_36198[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (8))){
var inst_34163 = (state_34206[(13)]);
var state_34206__$1 = state_34206;
var statearr_34279_36200 = state_34206__$1;
(statearr_34279_36200[(2)] = inst_34163);

(statearr_34279_36200[(1)] = (10));


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
var cljs$core$async$state_machine__30687__auto__ = null;
var cljs$core$async$state_machine__30687__auto____0 = (function (){
var statearr_34280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34280[(0)] = cljs$core$async$state_machine__30687__auto__);

(statearr_34280[(1)] = (1));

return statearr_34280;
});
var cljs$core$async$state_machine__30687__auto____1 = (function (state_34206){
while(true){
var ret_value__30688__auto__ = (function (){try{while(true){
var result__30689__auto__ = switch__30686__auto__(state_34206);
if(cljs.core.keyword_identical_QMARK_(result__30689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30689__auto__;
}
break;
}
}catch (e34281){var ex__30690__auto__ = e34281;
var statearr_34282_36203 = state_34206;
(statearr_34282_36203[(2)] = ex__30690__auto__);


if(cljs.core.seq((state_34206[(4)]))){
var statearr_34283_36204 = state_34206;
(statearr_34283_36204[(1)] = cljs.core.first((state_34206[(4)])));

} else {
throw ex__30690__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36205 = state_34206;
state_34206 = G__36205;
continue;
} else {
return ret_value__30688__auto__;
}
break;
}
});
cljs$core$async$state_machine__30687__auto__ = function(state_34206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30687__auto____1.call(this,state_34206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30687__auto____0;
cljs$core$async$state_machine__30687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30687__auto____1;
return cljs$core$async$state_machine__30687__auto__;
})()
})();
var state__30883__auto__ = (function (){var statearr_34284 = f__30882__auto__();
(statearr_34284[(6)] = c__30881__auto___36147);

return statearr_34284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30883__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
