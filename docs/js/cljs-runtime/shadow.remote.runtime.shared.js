goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31050){
var map__31051 = p__31050;
var map__31051__$1 = cljs.core.__destructure_map(map__31051);
var runtime = map__31051__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31051__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_31431 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_31431)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__31060 = runtime;
var G__31061 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_31431);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__31060,G__31061) : shadow.remote.runtime.shared.process.call(null,G__31060,G__31061));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31065,res){
var map__31067 = p__31065;
var map__31067__$1 = cljs.core.__destructure_map(map__31067);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31067__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31067__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31069 = res;
var G__31069__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31069,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31069);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31069__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31069__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31102 = arguments.length;
switch (G__31102) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31112,msg,handlers,timeout_after_ms){
var map__31113 = p__31112;
var map__31113__$1 = cljs.core.__destructure_map(map__31113);
var runtime = map__31113__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31113__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___31438 = arguments.length;
var i__5750__auto___31439 = (0);
while(true){
if((i__5750__auto___31439 < len__5749__auto___31438)){
args__5755__auto__.push((arguments[i__5750__auto___31439]));

var G__31441 = (i__5750__auto___31439 + (1));
i__5750__auto___31439 = G__31441;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31194,ev,args){
var map__31195 = p__31194;
var map__31195__$1 = cljs.core.__destructure_map(map__31195);
var runtime = map__31195__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31195__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31197 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31200 = null;
var count__31201 = (0);
var i__31202 = (0);
while(true){
if((i__31202 < count__31201)){
var ext = chunk__31200.cljs$core$IIndexed$_nth$arity$2(null,i__31202);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31449 = seq__31197;
var G__31450 = chunk__31200;
var G__31451 = count__31201;
var G__31452 = (i__31202 + (1));
seq__31197 = G__31449;
chunk__31200 = G__31450;
count__31201 = G__31451;
i__31202 = G__31452;
continue;
} else {
var G__31453 = seq__31197;
var G__31454 = chunk__31200;
var G__31455 = count__31201;
var G__31456 = (i__31202 + (1));
seq__31197 = G__31453;
chunk__31200 = G__31454;
count__31201 = G__31455;
i__31202 = G__31456;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__31197);
if(temp__5825__auto__){
var seq__31197__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31197__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__31197__$1);
var G__31458 = cljs.core.chunk_rest(seq__31197__$1);
var G__31459 = c__5548__auto__;
var G__31460 = cljs.core.count(c__5548__auto__);
var G__31461 = (0);
seq__31197 = G__31458;
chunk__31200 = G__31459;
count__31201 = G__31460;
i__31202 = G__31461;
continue;
} else {
var ext = cljs.core.first(seq__31197__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31462 = cljs.core.next(seq__31197__$1);
var G__31463 = null;
var G__31464 = (0);
var G__31465 = (0);
seq__31197 = G__31462;
chunk__31200 = G__31463;
count__31201 = G__31464;
i__31202 = G__31465;
continue;
} else {
var G__31466 = cljs.core.next(seq__31197__$1);
var G__31467 = null;
var G__31468 = (0);
var G__31469 = (0);
seq__31197 = G__31466;
chunk__31200 = G__31467;
count__31201 = G__31468;
i__31202 = G__31469;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31188){
var G__31190 = cljs.core.first(seq31188);
var seq31188__$1 = cljs.core.next(seq31188);
var G__31191 = cljs.core.first(seq31188__$1);
var seq31188__$2 = cljs.core.next(seq31188__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31190,G__31191,seq31188__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31238,p__31239){
var map__31240 = p__31238;
var map__31240__$1 = cljs.core.__destructure_map(map__31240);
var runtime = map__31240__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31241 = p__31239;
var map__31241__$1 = cljs.core.__destructure_map(map__31241);
var msg = map__31241__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31241__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__31251 = cljs.core.deref(state_ref);
var map__31251__$1 = cljs.core.__destructure_map(map__31251);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31251__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31251__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31281,msg){
var map__31285 = p__31281;
var map__31285__$1 = cljs.core.__destructure_map(map__31285);
var runtime = map__31285__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31285__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31314,key,p__31315){
var map__31316 = p__31314;
var map__31316__$1 = cljs.core.__destructure_map(map__31316);
var state = map__31316__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31316__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31318 = p__31315;
var map__31318__$1 = cljs.core.__destructure_map(map__31318);
var spec = map__31318__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31318__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31318__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31326,key,spec){
var map__31327 = p__31326;
var map__31327__$1 = cljs.core.__destructure_map(map__31327);
var runtime = map__31327__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31327__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___31484 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___31484 == null)){
} else {
var on_welcome_31485 = temp__5829__auto___31484;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_31485.cljs$core$IFn$_invoke$arity$0 ? on_welcome_31485.cljs$core$IFn$_invoke$arity$0() : on_welcome_31485.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31339_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31339_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31348_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31348_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31351_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31351_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31356_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31356_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31360_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31360_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31371,key){
var map__31372 = p__31371;
var map__31372__$1 = cljs.core.__destructure_map(map__31372);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31372__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31374,msg){
var map__31375 = p__31374;
var map__31375__$1 = cljs.core.__destructure_map(map__31375);
var runtime = map__31375__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31375__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31382,p__31383){
var map__31385 = p__31382;
var map__31385__$1 = cljs.core.__destructure_map(map__31385);
var runtime = map__31385__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31385__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31386 = p__31383;
var map__31386__$1 = cljs.core.__destructure_map(map__31386);
var msg = map__31386__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31386__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31386__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31397 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31399 = null;
var count__31400 = (0);
var i__31401 = (0);
while(true){
if((i__31401 < count__31400)){
var map__31415 = chunk__31399.cljs$core$IIndexed$_nth$arity$2(null,i__31401);
var map__31415__$1 = cljs.core.__destructure_map(map__31415);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31415__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31499 = seq__31397;
var G__31500 = chunk__31399;
var G__31501 = count__31400;
var G__31502 = (i__31401 + (1));
seq__31397 = G__31499;
chunk__31399 = G__31500;
count__31400 = G__31501;
i__31401 = G__31502;
continue;
} else {
var G__31503 = seq__31397;
var G__31504 = chunk__31399;
var G__31505 = count__31400;
var G__31506 = (i__31401 + (1));
seq__31397 = G__31503;
chunk__31399 = G__31504;
count__31400 = G__31505;
i__31401 = G__31506;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__31397);
if(temp__5825__auto__){
var seq__31397__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31397__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__31397__$1);
var G__31509 = cljs.core.chunk_rest(seq__31397__$1);
var G__31510 = c__5548__auto__;
var G__31511 = cljs.core.count(c__5548__auto__);
var G__31512 = (0);
seq__31397 = G__31509;
chunk__31399 = G__31510;
count__31400 = G__31511;
i__31401 = G__31512;
continue;
} else {
var map__31420 = cljs.core.first(seq__31397__$1);
var map__31420__$1 = cljs.core.__destructure_map(map__31420);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31420__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31514 = cljs.core.next(seq__31397__$1);
var G__31515 = null;
var G__31516 = (0);
var G__31517 = (0);
seq__31397 = G__31514;
chunk__31399 = G__31515;
count__31400 = G__31516;
i__31401 = G__31517;
continue;
} else {
var G__31518 = cljs.core.next(seq__31397__$1);
var G__31519 = null;
var G__31520 = (0);
var G__31521 = (0);
seq__31397 = G__31518;
chunk__31399 = G__31519;
count__31400 = G__31520;
i__31401 = G__31521;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
