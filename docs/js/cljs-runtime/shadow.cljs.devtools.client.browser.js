goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38070 = arguments.length;
var i__5750__auto___38071 = (0);
while(true){
if((i__5750__auto___38071 < len__5749__auto___38070)){
args__5755__auto__.push((arguments[i__5750__auto___38071]));

var G__38072 = (i__5750__auto___38071 + (1));
i__5750__auto___38071 = G__38072;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37273){
var G__37274 = cljs.core.first(seq37273);
var seq37273__$1 = cljs.core.next(seq37273);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37274,seq37273__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37290 = cljs.core.seq(sources);
var chunk__37291 = null;
var count__37292 = (0);
var i__37293 = (0);
while(true){
if((i__37293 < count__37292)){
var map__37327 = chunk__37291.cljs$core$IIndexed$_nth$arity$2(null,i__37293);
var map__37327__$1 = cljs.core.__destructure_map(map__37327);
var src = map__37327__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37327__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37327__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37327__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37327__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37333){var e_38079 = e37333;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38079);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38079.message)].join('')));
}

var G__38080 = seq__37290;
var G__38081 = chunk__37291;
var G__38082 = count__37292;
var G__38083 = (i__37293 + (1));
seq__37290 = G__38080;
chunk__37291 = G__38081;
count__37292 = G__38082;
i__37293 = G__38083;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37290);
if(temp__5825__auto__){
var seq__37290__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37290__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37290__$1);
var G__38084 = cljs.core.chunk_rest(seq__37290__$1);
var G__38085 = c__5548__auto__;
var G__38086 = cljs.core.count(c__5548__auto__);
var G__38087 = (0);
seq__37290 = G__38084;
chunk__37291 = G__38085;
count__37292 = G__38086;
i__37293 = G__38087;
continue;
} else {
var map__37339 = cljs.core.first(seq__37290__$1);
var map__37339__$1 = cljs.core.__destructure_map(map__37339);
var src = map__37339__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37339__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37339__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37339__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37339__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37341){var e_38088 = e37341;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38088);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38088.message)].join('')));
}

var G__38089 = cljs.core.next(seq__37290__$1);
var G__38090 = null;
var G__38091 = (0);
var G__38092 = (0);
seq__37290 = G__38089;
chunk__37291 = G__38090;
count__37292 = G__38091;
i__37293 = G__38092;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37360 = cljs.core.seq(js_requires);
var chunk__37361 = null;
var count__37362 = (0);
var i__37363 = (0);
while(true){
if((i__37363 < count__37362)){
var js_ns = chunk__37361.cljs$core$IIndexed$_nth$arity$2(null,i__37363);
var require_str_38093 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38093);


var G__38094 = seq__37360;
var G__38095 = chunk__37361;
var G__38096 = count__37362;
var G__38097 = (i__37363 + (1));
seq__37360 = G__38094;
chunk__37361 = G__38095;
count__37362 = G__38096;
i__37363 = G__38097;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37360);
if(temp__5825__auto__){
var seq__37360__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37360__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37360__$1);
var G__38098 = cljs.core.chunk_rest(seq__37360__$1);
var G__38099 = c__5548__auto__;
var G__38100 = cljs.core.count(c__5548__auto__);
var G__38101 = (0);
seq__37360 = G__38098;
chunk__37361 = G__38099;
count__37362 = G__38100;
i__37363 = G__38101;
continue;
} else {
var js_ns = cljs.core.first(seq__37360__$1);
var require_str_38102 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38102);


var G__38103 = cljs.core.next(seq__37360__$1);
var G__38104 = null;
var G__38105 = (0);
var G__38106 = (0);
seq__37360 = G__38103;
chunk__37361 = G__38104;
count__37362 = G__38105;
i__37363 = G__38106;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37394){
var map__37396 = p__37394;
var map__37396__$1 = cljs.core.__destructure_map(map__37396);
var msg = map__37396__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37396__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37396__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37402(s__37403){
return (new cljs.core.LazySeq(null,(function (){
var s__37403__$1 = s__37403;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37403__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__37411 = cljs.core.first(xs__6385__auto__);
var map__37411__$1 = cljs.core.__destructure_map(map__37411);
var src = map__37411__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37411__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37411__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__37403__$1,map__37411,map__37411__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37396,map__37396__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37402_$_iter__37404(s__37405){
return (new cljs.core.LazySeq(null,((function (s__37403__$1,map__37411,map__37411__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37396,map__37396__$1,msg,info,reload_info){
return (function (){
var s__37405__$1 = s__37405;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37405__$1);
if(temp__5825__auto____$1){
var s__37405__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37405__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37405__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37407 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37406 = (0);
while(true){
if((i__37406 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__37406);
cljs.core.chunk_append(b__37407,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38109 = (i__37406 + (1));
i__37406 = G__38109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37407),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37402_$_iter__37404(cljs.core.chunk_rest(s__37405__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37407),null);
}
} else {
var warning = cljs.core.first(s__37405__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37402_$_iter__37404(cljs.core.rest(s__37405__$2)));
}
} else {
return null;
}
break;
}
});})(s__37403__$1,map__37411,map__37411__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37396,map__37396__$1,msg,info,reload_info))
,null,null));
});})(s__37403__$1,map__37411,map__37411__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37396,map__37396__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37402(cljs.core.rest(s__37403__$1)));
} else {
var G__38110 = cljs.core.rest(s__37403__$1);
s__37403__$1 = G__38110;
continue;
}
} else {
var G__38111 = cljs.core.rest(s__37403__$1);
s__37403__$1 = G__38111;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37418_38112 = cljs.core.seq(warnings);
var chunk__37419_38113 = null;
var count__37420_38114 = (0);
var i__37421_38115 = (0);
while(true){
if((i__37421_38115 < count__37420_38114)){
var map__37425_38116 = chunk__37419_38113.cljs$core$IIndexed$_nth$arity$2(null,i__37421_38115);
var map__37425_38117__$1 = cljs.core.__destructure_map(map__37425_38116);
var w_38118 = map__37425_38117__$1;
var msg_38119__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37425_38117__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37425_38117__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37425_38117__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37425_38117__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38122)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38120),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38121),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38119__$1)].join(''));


var G__38123 = seq__37418_38112;
var G__38124 = chunk__37419_38113;
var G__38125 = count__37420_38114;
var G__38126 = (i__37421_38115 + (1));
seq__37418_38112 = G__38123;
chunk__37419_38113 = G__38124;
count__37420_38114 = G__38125;
i__37421_38115 = G__38126;
continue;
} else {
var temp__5825__auto___38127 = cljs.core.seq(seq__37418_38112);
if(temp__5825__auto___38127){
var seq__37418_38128__$1 = temp__5825__auto___38127;
if(cljs.core.chunked_seq_QMARK_(seq__37418_38128__$1)){
var c__5548__auto___38129 = cljs.core.chunk_first(seq__37418_38128__$1);
var G__38130 = cljs.core.chunk_rest(seq__37418_38128__$1);
var G__38131 = c__5548__auto___38129;
var G__38132 = cljs.core.count(c__5548__auto___38129);
var G__38133 = (0);
seq__37418_38112 = G__38130;
chunk__37419_38113 = G__38131;
count__37420_38114 = G__38132;
i__37421_38115 = G__38133;
continue;
} else {
var map__37426_38134 = cljs.core.first(seq__37418_38128__$1);
var map__37426_38135__$1 = cljs.core.__destructure_map(map__37426_38134);
var w_38136 = map__37426_38135__$1;
var msg_38137__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37426_38135__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37426_38135__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37426_38135__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37426_38135__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38140)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38138),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38139),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38137__$1)].join(''));


var G__38142 = cljs.core.next(seq__37418_38128__$1);
var G__38143 = null;
var G__38144 = (0);
var G__38145 = (0);
seq__37418_38112 = G__38142;
chunk__37419_38113 = G__38143;
count__37420_38114 = G__38144;
i__37421_38115 = G__38145;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37391_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37391_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37440 = node_uri;
G__37440.setQuery(null);

G__37440.setPath(new$);

return G__37440;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37443){
var map__37444 = p__37443;
var map__37444__$1 = cljs.core.__destructure_map(map__37444);
var msg = map__37444__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37444__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37444__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37446 = cljs.core.seq(updates);
var chunk__37448 = null;
var count__37449 = (0);
var i__37450 = (0);
while(true){
if((i__37450 < count__37449)){
var path = chunk__37448.cljs$core$IIndexed$_nth$arity$2(null,i__37450);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37726_38146 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37730_38147 = null;
var count__37731_38148 = (0);
var i__37732_38149 = (0);
while(true){
if((i__37732_38149 < count__37731_38148)){
var node_38150 = chunk__37730_38147.cljs$core$IIndexed$_nth$arity$2(null,i__37732_38149);
if(cljs.core.not(node_38150.shadow$old)){
var path_match_38151 = shadow.cljs.devtools.client.browser.match_paths(node_38150.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38151)){
var new_link_38152 = (function (){var G__37797 = node_38150.cloneNode(true);
G__37797.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38151),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37797;
})();
(node_38150.shadow$old = true);

(new_link_38152.onload = ((function (seq__37726_38146,chunk__37730_38147,count__37731_38148,i__37732_38149,seq__37446,chunk__37448,count__37449,i__37450,new_link_38152,path_match_38151,node_38150,path,map__37444,map__37444__$1,msg,updates,reload_info){
return (function (e){
var seq__37798_38153 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37800_38154 = null;
var count__37801_38155 = (0);
var i__37802_38156 = (0);
while(true){
if((i__37802_38156 < count__37801_38155)){
var map__37812_38157 = chunk__37800_38154.cljs$core$IIndexed$_nth$arity$2(null,i__37802_38156);
var map__37812_38158__$1 = cljs.core.__destructure_map(map__37812_38157);
var task_38159 = map__37812_38158__$1;
var fn_str_38160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37812_38158__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37812_38158__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38162 = goog.getObjectByName(fn_str_38160,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38161)].join(''));

(fn_obj_38162.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38162.cljs$core$IFn$_invoke$arity$2(path,new_link_38152) : fn_obj_38162.call(null,path,new_link_38152));


var G__38166 = seq__37798_38153;
var G__38167 = chunk__37800_38154;
var G__38168 = count__37801_38155;
var G__38169 = (i__37802_38156 + (1));
seq__37798_38153 = G__38166;
chunk__37800_38154 = G__38167;
count__37801_38155 = G__38168;
i__37802_38156 = G__38169;
continue;
} else {
var temp__5825__auto___38170 = cljs.core.seq(seq__37798_38153);
if(temp__5825__auto___38170){
var seq__37798_38172__$1 = temp__5825__auto___38170;
if(cljs.core.chunked_seq_QMARK_(seq__37798_38172__$1)){
var c__5548__auto___38175 = cljs.core.chunk_first(seq__37798_38172__$1);
var G__38176 = cljs.core.chunk_rest(seq__37798_38172__$1);
var G__38177 = c__5548__auto___38175;
var G__38178 = cljs.core.count(c__5548__auto___38175);
var G__38179 = (0);
seq__37798_38153 = G__38176;
chunk__37800_38154 = G__38177;
count__37801_38155 = G__38178;
i__37802_38156 = G__38179;
continue;
} else {
var map__37816_38180 = cljs.core.first(seq__37798_38172__$1);
var map__37816_38181__$1 = cljs.core.__destructure_map(map__37816_38180);
var task_38182 = map__37816_38181__$1;
var fn_str_38183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37816_38181__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37816_38181__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38185 = goog.getObjectByName(fn_str_38183,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38184)].join(''));

(fn_obj_38185.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38185.cljs$core$IFn$_invoke$arity$2(path,new_link_38152) : fn_obj_38185.call(null,path,new_link_38152));


var G__38186 = cljs.core.next(seq__37798_38172__$1);
var G__38187 = null;
var G__38188 = (0);
var G__38189 = (0);
seq__37798_38153 = G__38186;
chunk__37800_38154 = G__38187;
count__37801_38155 = G__38188;
i__37802_38156 = G__38189;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38150);
});})(seq__37726_38146,chunk__37730_38147,count__37731_38148,i__37732_38149,seq__37446,chunk__37448,count__37449,i__37450,new_link_38152,path_match_38151,node_38150,path,map__37444,map__37444__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38151], 0));

goog.dom.insertSiblingAfter(new_link_38152,node_38150);


var G__38190 = seq__37726_38146;
var G__38191 = chunk__37730_38147;
var G__38192 = count__37731_38148;
var G__38193 = (i__37732_38149 + (1));
seq__37726_38146 = G__38190;
chunk__37730_38147 = G__38191;
count__37731_38148 = G__38192;
i__37732_38149 = G__38193;
continue;
} else {
var G__38194 = seq__37726_38146;
var G__38195 = chunk__37730_38147;
var G__38196 = count__37731_38148;
var G__38197 = (i__37732_38149 + (1));
seq__37726_38146 = G__38194;
chunk__37730_38147 = G__38195;
count__37731_38148 = G__38196;
i__37732_38149 = G__38197;
continue;
}
} else {
var G__38198 = seq__37726_38146;
var G__38199 = chunk__37730_38147;
var G__38200 = count__37731_38148;
var G__38201 = (i__37732_38149 + (1));
seq__37726_38146 = G__38198;
chunk__37730_38147 = G__38199;
count__37731_38148 = G__38200;
i__37732_38149 = G__38201;
continue;
}
} else {
var temp__5825__auto___38202 = cljs.core.seq(seq__37726_38146);
if(temp__5825__auto___38202){
var seq__37726_38203__$1 = temp__5825__auto___38202;
if(cljs.core.chunked_seq_QMARK_(seq__37726_38203__$1)){
var c__5548__auto___38204 = cljs.core.chunk_first(seq__37726_38203__$1);
var G__38205 = cljs.core.chunk_rest(seq__37726_38203__$1);
var G__38206 = c__5548__auto___38204;
var G__38207 = cljs.core.count(c__5548__auto___38204);
var G__38208 = (0);
seq__37726_38146 = G__38205;
chunk__37730_38147 = G__38206;
count__37731_38148 = G__38207;
i__37732_38149 = G__38208;
continue;
} else {
var node_38209 = cljs.core.first(seq__37726_38203__$1);
if(cljs.core.not(node_38209.shadow$old)){
var path_match_38210 = shadow.cljs.devtools.client.browser.match_paths(node_38209.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38210)){
var new_link_38211 = (function (){var G__37820 = node_38209.cloneNode(true);
G__37820.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38210),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37820;
})();
(node_38209.shadow$old = true);

(new_link_38211.onload = ((function (seq__37726_38146,chunk__37730_38147,count__37731_38148,i__37732_38149,seq__37446,chunk__37448,count__37449,i__37450,new_link_38211,path_match_38210,node_38209,seq__37726_38203__$1,temp__5825__auto___38202,path,map__37444,map__37444__$1,msg,updates,reload_info){
return (function (e){
var seq__37822_38212 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37824_38213 = null;
var count__37825_38214 = (0);
var i__37826_38215 = (0);
while(true){
if((i__37826_38215 < count__37825_38214)){
var map__37842_38216 = chunk__37824_38213.cljs$core$IIndexed$_nth$arity$2(null,i__37826_38215);
var map__37842_38217__$1 = cljs.core.__destructure_map(map__37842_38216);
var task_38218 = map__37842_38217__$1;
var fn_str_38219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37842_38217__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37842_38217__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38221 = goog.getObjectByName(fn_str_38219,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38220)].join(''));

(fn_obj_38221.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38221.cljs$core$IFn$_invoke$arity$2(path,new_link_38211) : fn_obj_38221.call(null,path,new_link_38211));


var G__38222 = seq__37822_38212;
var G__38223 = chunk__37824_38213;
var G__38224 = count__37825_38214;
var G__38225 = (i__37826_38215 + (1));
seq__37822_38212 = G__38222;
chunk__37824_38213 = G__38223;
count__37825_38214 = G__38224;
i__37826_38215 = G__38225;
continue;
} else {
var temp__5825__auto___38226__$1 = cljs.core.seq(seq__37822_38212);
if(temp__5825__auto___38226__$1){
var seq__37822_38227__$1 = temp__5825__auto___38226__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37822_38227__$1)){
var c__5548__auto___38228 = cljs.core.chunk_first(seq__37822_38227__$1);
var G__38229 = cljs.core.chunk_rest(seq__37822_38227__$1);
var G__38230 = c__5548__auto___38228;
var G__38231 = cljs.core.count(c__5548__auto___38228);
var G__38232 = (0);
seq__37822_38212 = G__38229;
chunk__37824_38213 = G__38230;
count__37825_38214 = G__38231;
i__37826_38215 = G__38232;
continue;
} else {
var map__37845_38233 = cljs.core.first(seq__37822_38227__$1);
var map__37845_38234__$1 = cljs.core.__destructure_map(map__37845_38233);
var task_38235 = map__37845_38234__$1;
var fn_str_38236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37845_38234__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37845_38234__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38238 = goog.getObjectByName(fn_str_38236,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38237)].join(''));

(fn_obj_38238.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38238.cljs$core$IFn$_invoke$arity$2(path,new_link_38211) : fn_obj_38238.call(null,path,new_link_38211));


var G__38239 = cljs.core.next(seq__37822_38227__$1);
var G__38240 = null;
var G__38241 = (0);
var G__38242 = (0);
seq__37822_38212 = G__38239;
chunk__37824_38213 = G__38240;
count__37825_38214 = G__38241;
i__37826_38215 = G__38242;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38209);
});})(seq__37726_38146,chunk__37730_38147,count__37731_38148,i__37732_38149,seq__37446,chunk__37448,count__37449,i__37450,new_link_38211,path_match_38210,node_38209,seq__37726_38203__$1,temp__5825__auto___38202,path,map__37444,map__37444__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38210], 0));

goog.dom.insertSiblingAfter(new_link_38211,node_38209);


var G__38243 = cljs.core.next(seq__37726_38203__$1);
var G__38244 = null;
var G__38245 = (0);
var G__38246 = (0);
seq__37726_38146 = G__38243;
chunk__37730_38147 = G__38244;
count__37731_38148 = G__38245;
i__37732_38149 = G__38246;
continue;
} else {
var G__38247 = cljs.core.next(seq__37726_38203__$1);
var G__38248 = null;
var G__38249 = (0);
var G__38250 = (0);
seq__37726_38146 = G__38247;
chunk__37730_38147 = G__38248;
count__37731_38148 = G__38249;
i__37732_38149 = G__38250;
continue;
}
} else {
var G__38251 = cljs.core.next(seq__37726_38203__$1);
var G__38252 = null;
var G__38253 = (0);
var G__38254 = (0);
seq__37726_38146 = G__38251;
chunk__37730_38147 = G__38252;
count__37731_38148 = G__38253;
i__37732_38149 = G__38254;
continue;
}
}
} else {
}
}
break;
}


var G__38255 = seq__37446;
var G__38256 = chunk__37448;
var G__38257 = count__37449;
var G__38258 = (i__37450 + (1));
seq__37446 = G__38255;
chunk__37448 = G__38256;
count__37449 = G__38257;
i__37450 = G__38258;
continue;
} else {
var G__38259 = seq__37446;
var G__38260 = chunk__37448;
var G__38261 = count__37449;
var G__38262 = (i__37450 + (1));
seq__37446 = G__38259;
chunk__37448 = G__38260;
count__37449 = G__38261;
i__37450 = G__38262;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37446);
if(temp__5825__auto__){
var seq__37446__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37446__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37446__$1);
var G__38263 = cljs.core.chunk_rest(seq__37446__$1);
var G__38264 = c__5548__auto__;
var G__38265 = cljs.core.count(c__5548__auto__);
var G__38266 = (0);
seq__37446 = G__38263;
chunk__37448 = G__38264;
count__37449 = G__38265;
i__37450 = G__38266;
continue;
} else {
var path = cljs.core.first(seq__37446__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37866_38267 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37870_38268 = null;
var count__37871_38269 = (0);
var i__37872_38270 = (0);
while(true){
if((i__37872_38270 < count__37871_38269)){
var node_38273 = chunk__37870_38268.cljs$core$IIndexed$_nth$arity$2(null,i__37872_38270);
if(cljs.core.not(node_38273.shadow$old)){
var path_match_38274 = shadow.cljs.devtools.client.browser.match_paths(node_38273.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38274)){
var new_link_38275 = (function (){var G__37989 = node_38273.cloneNode(true);
G__37989.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38274),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37989;
})();
(node_38273.shadow$old = true);

(new_link_38275.onload = ((function (seq__37866_38267,chunk__37870_38268,count__37871_38269,i__37872_38270,seq__37446,chunk__37448,count__37449,i__37450,new_link_38275,path_match_38274,node_38273,path,seq__37446__$1,temp__5825__auto__,map__37444,map__37444__$1,msg,updates,reload_info){
return (function (e){
var seq__37990_38278 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37992_38279 = null;
var count__37993_38280 = (0);
var i__37994_38281 = (0);
while(true){
if((i__37994_38281 < count__37993_38280)){
var map__37998_38283 = chunk__37992_38279.cljs$core$IIndexed$_nth$arity$2(null,i__37994_38281);
var map__37998_38284__$1 = cljs.core.__destructure_map(map__37998_38283);
var task_38285 = map__37998_38284__$1;
var fn_str_38286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_38284__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_38284__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38289 = goog.getObjectByName(fn_str_38286,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38287)].join(''));

(fn_obj_38289.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38289.cljs$core$IFn$_invoke$arity$2(path,new_link_38275) : fn_obj_38289.call(null,path,new_link_38275));


var G__38290 = seq__37990_38278;
var G__38291 = chunk__37992_38279;
var G__38292 = count__37993_38280;
var G__38293 = (i__37994_38281 + (1));
seq__37990_38278 = G__38290;
chunk__37992_38279 = G__38291;
count__37993_38280 = G__38292;
i__37994_38281 = G__38293;
continue;
} else {
var temp__5825__auto___38294__$1 = cljs.core.seq(seq__37990_38278);
if(temp__5825__auto___38294__$1){
var seq__37990_38295__$1 = temp__5825__auto___38294__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37990_38295__$1)){
var c__5548__auto___38296 = cljs.core.chunk_first(seq__37990_38295__$1);
var G__38297 = cljs.core.chunk_rest(seq__37990_38295__$1);
var G__38298 = c__5548__auto___38296;
var G__38299 = cljs.core.count(c__5548__auto___38296);
var G__38300 = (0);
seq__37990_38278 = G__38297;
chunk__37992_38279 = G__38298;
count__37993_38280 = G__38299;
i__37994_38281 = G__38300;
continue;
} else {
var map__37999_38301 = cljs.core.first(seq__37990_38295__$1);
var map__37999_38302__$1 = cljs.core.__destructure_map(map__37999_38301);
var task_38303 = map__37999_38302__$1;
var fn_str_38304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999_38302__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999_38302__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38306 = goog.getObjectByName(fn_str_38304,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38305)].join(''));

(fn_obj_38306.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38306.cljs$core$IFn$_invoke$arity$2(path,new_link_38275) : fn_obj_38306.call(null,path,new_link_38275));


var G__38307 = cljs.core.next(seq__37990_38295__$1);
var G__38308 = null;
var G__38309 = (0);
var G__38310 = (0);
seq__37990_38278 = G__38307;
chunk__37992_38279 = G__38308;
count__37993_38280 = G__38309;
i__37994_38281 = G__38310;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38273);
});})(seq__37866_38267,chunk__37870_38268,count__37871_38269,i__37872_38270,seq__37446,chunk__37448,count__37449,i__37450,new_link_38275,path_match_38274,node_38273,path,seq__37446__$1,temp__5825__auto__,map__37444,map__37444__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38274], 0));

goog.dom.insertSiblingAfter(new_link_38275,node_38273);


var G__38312 = seq__37866_38267;
var G__38313 = chunk__37870_38268;
var G__38314 = count__37871_38269;
var G__38315 = (i__37872_38270 + (1));
seq__37866_38267 = G__38312;
chunk__37870_38268 = G__38313;
count__37871_38269 = G__38314;
i__37872_38270 = G__38315;
continue;
} else {
var G__38317 = seq__37866_38267;
var G__38318 = chunk__37870_38268;
var G__38319 = count__37871_38269;
var G__38320 = (i__37872_38270 + (1));
seq__37866_38267 = G__38317;
chunk__37870_38268 = G__38318;
count__37871_38269 = G__38319;
i__37872_38270 = G__38320;
continue;
}
} else {
var G__38322 = seq__37866_38267;
var G__38323 = chunk__37870_38268;
var G__38324 = count__37871_38269;
var G__38325 = (i__37872_38270 + (1));
seq__37866_38267 = G__38322;
chunk__37870_38268 = G__38323;
count__37871_38269 = G__38324;
i__37872_38270 = G__38325;
continue;
}
} else {
var temp__5825__auto___38327__$1 = cljs.core.seq(seq__37866_38267);
if(temp__5825__auto___38327__$1){
var seq__37866_38328__$1 = temp__5825__auto___38327__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37866_38328__$1)){
var c__5548__auto___38329 = cljs.core.chunk_first(seq__37866_38328__$1);
var G__38330 = cljs.core.chunk_rest(seq__37866_38328__$1);
var G__38331 = c__5548__auto___38329;
var G__38332 = cljs.core.count(c__5548__auto___38329);
var G__38333 = (0);
seq__37866_38267 = G__38330;
chunk__37870_38268 = G__38331;
count__37871_38269 = G__38332;
i__37872_38270 = G__38333;
continue;
} else {
var node_38334 = cljs.core.first(seq__37866_38328__$1);
if(cljs.core.not(node_38334.shadow$old)){
var path_match_38335 = shadow.cljs.devtools.client.browser.match_paths(node_38334.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38335)){
var new_link_38336 = (function (){var G__38000 = node_38334.cloneNode(true);
G__38000.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38335),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38000;
})();
(node_38334.shadow$old = true);

(new_link_38336.onload = ((function (seq__37866_38267,chunk__37870_38268,count__37871_38269,i__37872_38270,seq__37446,chunk__37448,count__37449,i__37450,new_link_38336,path_match_38335,node_38334,seq__37866_38328__$1,temp__5825__auto___38327__$1,path,seq__37446__$1,temp__5825__auto__,map__37444,map__37444__$1,msg,updates,reload_info){
return (function (e){
var seq__38001_38337 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38003_38338 = null;
var count__38004_38339 = (0);
var i__38005_38340 = (0);
while(true){
if((i__38005_38340 < count__38004_38339)){
var map__38009_38342 = chunk__38003_38338.cljs$core$IIndexed$_nth$arity$2(null,i__38005_38340);
var map__38009_38343__$1 = cljs.core.__destructure_map(map__38009_38342);
var task_38344 = map__38009_38343__$1;
var fn_str_38345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38009_38343__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38009_38343__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38347 = goog.getObjectByName(fn_str_38345,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38346)].join(''));

(fn_obj_38347.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38347.cljs$core$IFn$_invoke$arity$2(path,new_link_38336) : fn_obj_38347.call(null,path,new_link_38336));


var G__38348 = seq__38001_38337;
var G__38349 = chunk__38003_38338;
var G__38350 = count__38004_38339;
var G__38351 = (i__38005_38340 + (1));
seq__38001_38337 = G__38348;
chunk__38003_38338 = G__38349;
count__38004_38339 = G__38350;
i__38005_38340 = G__38351;
continue;
} else {
var temp__5825__auto___38352__$2 = cljs.core.seq(seq__38001_38337);
if(temp__5825__auto___38352__$2){
var seq__38001_38355__$1 = temp__5825__auto___38352__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38001_38355__$1)){
var c__5548__auto___38356 = cljs.core.chunk_first(seq__38001_38355__$1);
var G__38357 = cljs.core.chunk_rest(seq__38001_38355__$1);
var G__38358 = c__5548__auto___38356;
var G__38359 = cljs.core.count(c__5548__auto___38356);
var G__38360 = (0);
seq__38001_38337 = G__38357;
chunk__38003_38338 = G__38358;
count__38004_38339 = G__38359;
i__38005_38340 = G__38360;
continue;
} else {
var map__38014_38363 = cljs.core.first(seq__38001_38355__$1);
var map__38014_38364__$1 = cljs.core.__destructure_map(map__38014_38363);
var task_38365 = map__38014_38364__$1;
var fn_str_38366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38014_38364__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38014_38364__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38368 = goog.getObjectByName(fn_str_38366,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38367)].join(''));

(fn_obj_38368.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38368.cljs$core$IFn$_invoke$arity$2(path,new_link_38336) : fn_obj_38368.call(null,path,new_link_38336));


var G__38369 = cljs.core.next(seq__38001_38355__$1);
var G__38370 = null;
var G__38371 = (0);
var G__38372 = (0);
seq__38001_38337 = G__38369;
chunk__38003_38338 = G__38370;
count__38004_38339 = G__38371;
i__38005_38340 = G__38372;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38334);
});})(seq__37866_38267,chunk__37870_38268,count__37871_38269,i__37872_38270,seq__37446,chunk__37448,count__37449,i__37450,new_link_38336,path_match_38335,node_38334,seq__37866_38328__$1,temp__5825__auto___38327__$1,path,seq__37446__$1,temp__5825__auto__,map__37444,map__37444__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38335], 0));

goog.dom.insertSiblingAfter(new_link_38336,node_38334);


var G__38373 = cljs.core.next(seq__37866_38328__$1);
var G__38374 = null;
var G__38375 = (0);
var G__38376 = (0);
seq__37866_38267 = G__38373;
chunk__37870_38268 = G__38374;
count__37871_38269 = G__38375;
i__37872_38270 = G__38376;
continue;
} else {
var G__38377 = cljs.core.next(seq__37866_38328__$1);
var G__38378 = null;
var G__38379 = (0);
var G__38380 = (0);
seq__37866_38267 = G__38377;
chunk__37870_38268 = G__38378;
count__37871_38269 = G__38379;
i__37872_38270 = G__38380;
continue;
}
} else {
var G__38381 = cljs.core.next(seq__37866_38328__$1);
var G__38382 = null;
var G__38383 = (0);
var G__38384 = (0);
seq__37866_38267 = G__38381;
chunk__37870_38268 = G__38382;
count__37871_38269 = G__38383;
i__37872_38270 = G__38384;
continue;
}
}
} else {
}
}
break;
}


var G__38385 = cljs.core.next(seq__37446__$1);
var G__38386 = null;
var G__38387 = (0);
var G__38388 = (0);
seq__37446 = G__38385;
chunk__37448 = G__38386;
count__37449 = G__38387;
i__37450 = G__38388;
continue;
} else {
var G__38389 = cljs.core.next(seq__37446__$1);
var G__38390 = null;
var G__38391 = (0);
var G__38392 = (0);
seq__37446 = G__38389;
chunk__37448 = G__38390;
count__37449 = G__38391;
i__37450 = G__38392;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__38032 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38032) : success.call(null,G__38032));
}catch (e38031){var e = e38031;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__38035,success,fail){
var map__38037 = p__38035;
var map__38037__$1 = cljs.core.__destructure_map(map__38037);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38037__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__38039 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38039) : success.call(null,G__38039));
}catch (e38038){var e = e38038;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38040,done,error){
var map__38041 = p__38040;
var map__38041__$1 = cljs.core.__destructure_map(map__38041);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38041__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38045,done,error){
var map__38046 = p__38045;
var map__38046__$1 = cljs.core.__destructure_map(map__38046);
var msg = map__38046__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38047){
var map__38049 = p__38047;
var map__38049__$1 = cljs.core.__destructure_map(map__38049);
var src = map__38049__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38049__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38052 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38052) : done.call(null,G__38052));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38054){
var map__38056 = p__38054;
var map__38056__$1 = cljs.core.__destructure_map(map__38056);
var msg__$1 = map__38056__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38056__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38058){var ex = e38058;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38059){
var map__38060 = p__38059;
var map__38060__$1 = cljs.core.__destructure_map(map__38060);
var env = map__38060__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38060__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38065){
var map__38066 = p__38065;
var map__38066__$1 = cljs.core.__destructure_map(map__38066);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38066__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38066__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38068){
var map__38069 = p__38068;
var map__38069__$1 = cljs.core.__destructure_map(map__38069);
var svc = map__38069__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38069__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
