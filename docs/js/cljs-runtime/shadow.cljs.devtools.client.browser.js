goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38110 = arguments.length;
var i__5750__auto___38111 = (0);
while(true){
if((i__5750__auto___38111 < len__5749__auto___38110)){
args__5755__auto__.push((arguments[i__5750__auto___38111]));

var G__38112 = (i__5750__auto___38111 + (1));
i__5750__auto___38111 = G__38112;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37501){
var G__37502 = cljs.core.first(seq37501);
var seq37501__$1 = cljs.core.next(seq37501);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37502,seq37501__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37513 = cljs.core.seq(sources);
var chunk__37514 = null;
var count__37515 = (0);
var i__37516 = (0);
while(true){
if((i__37516 < count__37515)){
var map__37527 = chunk__37514.cljs$core$IIndexed$_nth$arity$2(null,i__37516);
var map__37527__$1 = cljs.core.__destructure_map(map__37527);
var src = map__37527__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37527__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37527__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37527__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37527__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37528){var e_38113 = e37528;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38113);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38113.message)].join('')));
}

var G__38114 = seq__37513;
var G__38115 = chunk__37514;
var G__38116 = count__37515;
var G__38117 = (i__37516 + (1));
seq__37513 = G__38114;
chunk__37514 = G__38115;
count__37515 = G__38116;
i__37516 = G__38117;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37513);
if(temp__5825__auto__){
var seq__37513__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37513__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37513__$1);
var G__38118 = cljs.core.chunk_rest(seq__37513__$1);
var G__38119 = c__5548__auto__;
var G__38120 = cljs.core.count(c__5548__auto__);
var G__38121 = (0);
seq__37513 = G__38118;
chunk__37514 = G__38119;
count__37515 = G__38120;
i__37516 = G__38121;
continue;
} else {
var map__37529 = cljs.core.first(seq__37513__$1);
var map__37529__$1 = cljs.core.__destructure_map(map__37529);
var src = map__37529__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37529__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37529__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37529__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37529__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37530){var e_38125 = e37530;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38125);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38125.message)].join('')));
}

var G__38126 = cljs.core.next(seq__37513__$1);
var G__38127 = null;
var G__38128 = (0);
var G__38129 = (0);
seq__37513 = G__38126;
chunk__37514 = G__38127;
count__37515 = G__38128;
i__37516 = G__38129;
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
var seq__37533 = cljs.core.seq(js_requires);
var chunk__37534 = null;
var count__37535 = (0);
var i__37536 = (0);
while(true){
if((i__37536 < count__37535)){
var js_ns = chunk__37534.cljs$core$IIndexed$_nth$arity$2(null,i__37536);
var require_str_38130 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38130);


var G__38131 = seq__37533;
var G__38132 = chunk__37534;
var G__38133 = count__37535;
var G__38134 = (i__37536 + (1));
seq__37533 = G__38131;
chunk__37534 = G__38132;
count__37535 = G__38133;
i__37536 = G__38134;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37533);
if(temp__5825__auto__){
var seq__37533__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37533__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37533__$1);
var G__38135 = cljs.core.chunk_rest(seq__37533__$1);
var G__38136 = c__5548__auto__;
var G__38137 = cljs.core.count(c__5548__auto__);
var G__38138 = (0);
seq__37533 = G__38135;
chunk__37534 = G__38136;
count__37535 = G__38137;
i__37536 = G__38138;
continue;
} else {
var js_ns = cljs.core.first(seq__37533__$1);
var require_str_38139 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38139);


var G__38140 = cljs.core.next(seq__37533__$1);
var G__38141 = null;
var G__38142 = (0);
var G__38143 = (0);
seq__37533 = G__38140;
chunk__37534 = G__38141;
count__37535 = G__38142;
i__37536 = G__38143;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37540){
var map__37541 = p__37540;
var map__37541__$1 = cljs.core.__destructure_map(map__37541);
var msg = map__37541__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37541__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37541__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37543(s__37544){
return (new cljs.core.LazySeq(null,(function (){
var s__37544__$1 = s__37544;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37544__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__37549 = cljs.core.first(xs__6385__auto__);
var map__37549__$1 = cljs.core.__destructure_map(map__37549);
var src = map__37549__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37549__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37549__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__37544__$1,map__37549,map__37549__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37541,map__37541__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37543_$_iter__37545(s__37546){
return (new cljs.core.LazySeq(null,((function (s__37544__$1,map__37549,map__37549__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37541,map__37541__$1,msg,info,reload_info){
return (function (){
var s__37546__$1 = s__37546;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37546__$1);
if(temp__5825__auto____$1){
var s__37546__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37546__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37546__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37548 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37547 = (0);
while(true){
if((i__37547 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__37547);
cljs.core.chunk_append(b__37548,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38146 = (i__37547 + (1));
i__37547 = G__38146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37548),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37543_$_iter__37545(cljs.core.chunk_rest(s__37546__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37548),null);
}
} else {
var warning = cljs.core.first(s__37546__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37543_$_iter__37545(cljs.core.rest(s__37546__$2)));
}
} else {
return null;
}
break;
}
});})(s__37544__$1,map__37549,map__37549__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37541,map__37541__$1,msg,info,reload_info))
,null,null));
});})(s__37544__$1,map__37549,map__37549__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37541,map__37541__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37543(cljs.core.rest(s__37544__$1)));
} else {
var G__38147 = cljs.core.rest(s__37544__$1);
s__37544__$1 = G__38147;
continue;
}
} else {
var G__38148 = cljs.core.rest(s__37544__$1);
s__37544__$1 = G__38148;
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
var seq__37550_38149 = cljs.core.seq(warnings);
var chunk__37551_38150 = null;
var count__37552_38151 = (0);
var i__37553_38152 = (0);
while(true){
if((i__37553_38152 < count__37552_38151)){
var map__37570_38153 = chunk__37551_38150.cljs$core$IIndexed$_nth$arity$2(null,i__37553_38152);
var map__37570_38154__$1 = cljs.core.__destructure_map(map__37570_38153);
var w_38155 = map__37570_38154__$1;
var msg_38156__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37570_38154__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37570_38154__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37570_38154__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37570_38154__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38159)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38157),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38158),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38156__$1)].join(''));


var G__38160 = seq__37550_38149;
var G__38161 = chunk__37551_38150;
var G__38162 = count__37552_38151;
var G__38163 = (i__37553_38152 + (1));
seq__37550_38149 = G__38160;
chunk__37551_38150 = G__38161;
count__37552_38151 = G__38162;
i__37553_38152 = G__38163;
continue;
} else {
var temp__5825__auto___38164 = cljs.core.seq(seq__37550_38149);
if(temp__5825__auto___38164){
var seq__37550_38165__$1 = temp__5825__auto___38164;
if(cljs.core.chunked_seq_QMARK_(seq__37550_38165__$1)){
var c__5548__auto___38166 = cljs.core.chunk_first(seq__37550_38165__$1);
var G__38173 = cljs.core.chunk_rest(seq__37550_38165__$1);
var G__38174 = c__5548__auto___38166;
var G__38175 = cljs.core.count(c__5548__auto___38166);
var G__38176 = (0);
seq__37550_38149 = G__38173;
chunk__37551_38150 = G__38174;
count__37552_38151 = G__38175;
i__37553_38152 = G__38176;
continue;
} else {
var map__37577_38177 = cljs.core.first(seq__37550_38165__$1);
var map__37577_38178__$1 = cljs.core.__destructure_map(map__37577_38177);
var w_38179 = map__37577_38178__$1;
var msg_38180__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37577_38178__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37577_38178__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37577_38178__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37577_38178__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38183)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38181),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38182),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38180__$1)].join(''));


var G__38184 = cljs.core.next(seq__37550_38165__$1);
var G__38185 = null;
var G__38186 = (0);
var G__38187 = (0);
seq__37550_38149 = G__38184;
chunk__37551_38150 = G__38185;
count__37552_38151 = G__38186;
i__37553_38152 = G__38187;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37537_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37537_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37599 = node_uri;
G__37599.setQuery(null);

G__37599.setPath(new$);

return G__37599;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37604){
var map__37608 = p__37604;
var map__37608__$1 = cljs.core.__destructure_map(map__37608);
var msg = map__37608__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37608__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37608__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37609 = cljs.core.seq(updates);
var chunk__37611 = null;
var count__37612 = (0);
var i__37613 = (0);
while(true){
if((i__37613 < count__37612)){
var path = chunk__37611.cljs$core$IIndexed$_nth$arity$2(null,i__37613);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37872_38194 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37876_38195 = null;
var count__37877_38196 = (0);
var i__37878_38197 = (0);
while(true){
if((i__37878_38197 < count__37877_38196)){
var node_38198 = chunk__37876_38195.cljs$core$IIndexed$_nth$arity$2(null,i__37878_38197);
if(cljs.core.not(node_38198.shadow$old)){
var path_match_38199 = shadow.cljs.devtools.client.browser.match_paths(node_38198.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38199)){
var new_link_38200 = (function (){var G__37940 = node_38198.cloneNode(true);
G__37940.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38199),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37940;
})();
(node_38198.shadow$old = true);

(new_link_38200.onload = ((function (seq__37872_38194,chunk__37876_38195,count__37877_38196,i__37878_38197,seq__37609,chunk__37611,count__37612,i__37613,new_link_38200,path_match_38199,node_38198,path,map__37608,map__37608__$1,msg,updates,reload_info){
return (function (e){
var seq__37943_38207 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37945_38208 = null;
var count__37946_38209 = (0);
var i__37947_38210 = (0);
while(true){
if((i__37947_38210 < count__37946_38209)){
var map__37955_38211 = chunk__37945_38208.cljs$core$IIndexed$_nth$arity$2(null,i__37947_38210);
var map__37955_38212__$1 = cljs.core.__destructure_map(map__37955_38211);
var task_38213 = map__37955_38212__$1;
var fn_str_38214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955_38212__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955_38212__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38216 = goog.getObjectByName(fn_str_38214,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38215)].join(''));

(fn_obj_38216.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38216.cljs$core$IFn$_invoke$arity$2(path,new_link_38200) : fn_obj_38216.call(null,path,new_link_38200));


var G__38217 = seq__37943_38207;
var G__38218 = chunk__37945_38208;
var G__38219 = count__37946_38209;
var G__38220 = (i__37947_38210 + (1));
seq__37943_38207 = G__38217;
chunk__37945_38208 = G__38218;
count__37946_38209 = G__38219;
i__37947_38210 = G__38220;
continue;
} else {
var temp__5825__auto___38221 = cljs.core.seq(seq__37943_38207);
if(temp__5825__auto___38221){
var seq__37943_38222__$1 = temp__5825__auto___38221;
if(cljs.core.chunked_seq_QMARK_(seq__37943_38222__$1)){
var c__5548__auto___38223 = cljs.core.chunk_first(seq__37943_38222__$1);
var G__38224 = cljs.core.chunk_rest(seq__37943_38222__$1);
var G__38225 = c__5548__auto___38223;
var G__38226 = cljs.core.count(c__5548__auto___38223);
var G__38227 = (0);
seq__37943_38207 = G__38224;
chunk__37945_38208 = G__38225;
count__37946_38209 = G__38226;
i__37947_38210 = G__38227;
continue;
} else {
var map__37956_38228 = cljs.core.first(seq__37943_38222__$1);
var map__37956_38229__$1 = cljs.core.__destructure_map(map__37956_38228);
var task_38230 = map__37956_38229__$1;
var fn_str_38231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956_38229__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956_38229__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38233 = goog.getObjectByName(fn_str_38231,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38232)].join(''));

(fn_obj_38233.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38233.cljs$core$IFn$_invoke$arity$2(path,new_link_38200) : fn_obj_38233.call(null,path,new_link_38200));


var G__38234 = cljs.core.next(seq__37943_38222__$1);
var G__38235 = null;
var G__38236 = (0);
var G__38237 = (0);
seq__37943_38207 = G__38234;
chunk__37945_38208 = G__38235;
count__37946_38209 = G__38236;
i__37947_38210 = G__38237;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38198);
});})(seq__37872_38194,chunk__37876_38195,count__37877_38196,i__37878_38197,seq__37609,chunk__37611,count__37612,i__37613,new_link_38200,path_match_38199,node_38198,path,map__37608,map__37608__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38199], 0));

goog.dom.insertSiblingAfter(new_link_38200,node_38198);


var G__38238 = seq__37872_38194;
var G__38239 = chunk__37876_38195;
var G__38240 = count__37877_38196;
var G__38241 = (i__37878_38197 + (1));
seq__37872_38194 = G__38238;
chunk__37876_38195 = G__38239;
count__37877_38196 = G__38240;
i__37878_38197 = G__38241;
continue;
} else {
var G__38242 = seq__37872_38194;
var G__38243 = chunk__37876_38195;
var G__38244 = count__37877_38196;
var G__38245 = (i__37878_38197 + (1));
seq__37872_38194 = G__38242;
chunk__37876_38195 = G__38243;
count__37877_38196 = G__38244;
i__37878_38197 = G__38245;
continue;
}
} else {
var G__38246 = seq__37872_38194;
var G__38247 = chunk__37876_38195;
var G__38248 = count__37877_38196;
var G__38249 = (i__37878_38197 + (1));
seq__37872_38194 = G__38246;
chunk__37876_38195 = G__38247;
count__37877_38196 = G__38248;
i__37878_38197 = G__38249;
continue;
}
} else {
var temp__5825__auto___38250 = cljs.core.seq(seq__37872_38194);
if(temp__5825__auto___38250){
var seq__37872_38251__$1 = temp__5825__auto___38250;
if(cljs.core.chunked_seq_QMARK_(seq__37872_38251__$1)){
var c__5548__auto___38252 = cljs.core.chunk_first(seq__37872_38251__$1);
var G__38253 = cljs.core.chunk_rest(seq__37872_38251__$1);
var G__38254 = c__5548__auto___38252;
var G__38255 = cljs.core.count(c__5548__auto___38252);
var G__38256 = (0);
seq__37872_38194 = G__38253;
chunk__37876_38195 = G__38254;
count__37877_38196 = G__38255;
i__37878_38197 = G__38256;
continue;
} else {
var node_38257 = cljs.core.first(seq__37872_38251__$1);
if(cljs.core.not(node_38257.shadow$old)){
var path_match_38258 = shadow.cljs.devtools.client.browser.match_paths(node_38257.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38258)){
var new_link_38259 = (function (){var G__37959 = node_38257.cloneNode(true);
G__37959.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38258),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37959;
})();
(node_38257.shadow$old = true);

(new_link_38259.onload = ((function (seq__37872_38194,chunk__37876_38195,count__37877_38196,i__37878_38197,seq__37609,chunk__37611,count__37612,i__37613,new_link_38259,path_match_38258,node_38257,seq__37872_38251__$1,temp__5825__auto___38250,path,map__37608,map__37608__$1,msg,updates,reload_info){
return (function (e){
var seq__37960_38260 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37962_38261 = null;
var count__37963_38263 = (0);
var i__37964_38264 = (0);
while(true){
if((i__37964_38264 < count__37963_38263)){
var map__37980_38265 = chunk__37962_38261.cljs$core$IIndexed$_nth$arity$2(null,i__37964_38264);
var map__37980_38266__$1 = cljs.core.__destructure_map(map__37980_38265);
var task_38267 = map__37980_38266__$1;
var fn_str_38268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37980_38266__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37980_38266__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38270 = goog.getObjectByName(fn_str_38268,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38269)].join(''));

(fn_obj_38270.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38270.cljs$core$IFn$_invoke$arity$2(path,new_link_38259) : fn_obj_38270.call(null,path,new_link_38259));


var G__38271 = seq__37960_38260;
var G__38272 = chunk__37962_38261;
var G__38273 = count__37963_38263;
var G__38274 = (i__37964_38264 + (1));
seq__37960_38260 = G__38271;
chunk__37962_38261 = G__38272;
count__37963_38263 = G__38273;
i__37964_38264 = G__38274;
continue;
} else {
var temp__5825__auto___38275__$1 = cljs.core.seq(seq__37960_38260);
if(temp__5825__auto___38275__$1){
var seq__37960_38276__$1 = temp__5825__auto___38275__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37960_38276__$1)){
var c__5548__auto___38277 = cljs.core.chunk_first(seq__37960_38276__$1);
var G__38278 = cljs.core.chunk_rest(seq__37960_38276__$1);
var G__38279 = c__5548__auto___38277;
var G__38280 = cljs.core.count(c__5548__auto___38277);
var G__38281 = (0);
seq__37960_38260 = G__38278;
chunk__37962_38261 = G__38279;
count__37963_38263 = G__38280;
i__37964_38264 = G__38281;
continue;
} else {
var map__37983_38282 = cljs.core.first(seq__37960_38276__$1);
var map__37983_38283__$1 = cljs.core.__destructure_map(map__37983_38282);
var task_38284 = map__37983_38283__$1;
var fn_str_38285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983_38283__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983_38283__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38288 = goog.getObjectByName(fn_str_38285,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38286)].join(''));

(fn_obj_38288.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38288.cljs$core$IFn$_invoke$arity$2(path,new_link_38259) : fn_obj_38288.call(null,path,new_link_38259));


var G__38289 = cljs.core.next(seq__37960_38276__$1);
var G__38290 = null;
var G__38291 = (0);
var G__38292 = (0);
seq__37960_38260 = G__38289;
chunk__37962_38261 = G__38290;
count__37963_38263 = G__38291;
i__37964_38264 = G__38292;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38257);
});})(seq__37872_38194,chunk__37876_38195,count__37877_38196,i__37878_38197,seq__37609,chunk__37611,count__37612,i__37613,new_link_38259,path_match_38258,node_38257,seq__37872_38251__$1,temp__5825__auto___38250,path,map__37608,map__37608__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38258], 0));

goog.dom.insertSiblingAfter(new_link_38259,node_38257);


var G__38293 = cljs.core.next(seq__37872_38251__$1);
var G__38294 = null;
var G__38295 = (0);
var G__38296 = (0);
seq__37872_38194 = G__38293;
chunk__37876_38195 = G__38294;
count__37877_38196 = G__38295;
i__37878_38197 = G__38296;
continue;
} else {
var G__38297 = cljs.core.next(seq__37872_38251__$1);
var G__38298 = null;
var G__38299 = (0);
var G__38300 = (0);
seq__37872_38194 = G__38297;
chunk__37876_38195 = G__38298;
count__37877_38196 = G__38299;
i__37878_38197 = G__38300;
continue;
}
} else {
var G__38301 = cljs.core.next(seq__37872_38251__$1);
var G__38302 = null;
var G__38303 = (0);
var G__38304 = (0);
seq__37872_38194 = G__38301;
chunk__37876_38195 = G__38302;
count__37877_38196 = G__38303;
i__37878_38197 = G__38304;
continue;
}
}
} else {
}
}
break;
}


var G__38305 = seq__37609;
var G__38306 = chunk__37611;
var G__38307 = count__37612;
var G__38308 = (i__37613 + (1));
seq__37609 = G__38305;
chunk__37611 = G__38306;
count__37612 = G__38307;
i__37613 = G__38308;
continue;
} else {
var G__38309 = seq__37609;
var G__38310 = chunk__37611;
var G__38311 = count__37612;
var G__38312 = (i__37613 + (1));
seq__37609 = G__38309;
chunk__37611 = G__38310;
count__37612 = G__38311;
i__37613 = G__38312;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37609);
if(temp__5825__auto__){
var seq__37609__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37609__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37609__$1);
var G__38314 = cljs.core.chunk_rest(seq__37609__$1);
var G__38315 = c__5548__auto__;
var G__38316 = cljs.core.count(c__5548__auto__);
var G__38317 = (0);
seq__37609 = G__38314;
chunk__37611 = G__38315;
count__37612 = G__38316;
i__37613 = G__38317;
continue;
} else {
var path = cljs.core.first(seq__37609__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37985_38318 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37989_38319 = null;
var count__37990_38320 = (0);
var i__37991_38321 = (0);
while(true){
if((i__37991_38321 < count__37990_38320)){
var node_38322 = chunk__37989_38319.cljs$core$IIndexed$_nth$arity$2(null,i__37991_38321);
if(cljs.core.not(node_38322.shadow$old)){
var path_match_38323 = shadow.cljs.devtools.client.browser.match_paths(node_38322.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38323)){
var new_link_38324 = (function (){var G__38053 = node_38322.cloneNode(true);
G__38053.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38323),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38053;
})();
(node_38322.shadow$old = true);

(new_link_38324.onload = ((function (seq__37985_38318,chunk__37989_38319,count__37990_38320,i__37991_38321,seq__37609,chunk__37611,count__37612,i__37613,new_link_38324,path_match_38323,node_38322,path,seq__37609__$1,temp__5825__auto__,map__37608,map__37608__$1,msg,updates,reload_info){
return (function (e){
var seq__38055_38326 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38057_38327 = null;
var count__38058_38328 = (0);
var i__38059_38329 = (0);
while(true){
if((i__38059_38329 < count__38058_38328)){
var map__38065_38331 = chunk__38057_38327.cljs$core$IIndexed$_nth$arity$2(null,i__38059_38329);
var map__38065_38332__$1 = cljs.core.__destructure_map(map__38065_38331);
var task_38333 = map__38065_38332__$1;
var fn_str_38334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38065_38332__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38065_38332__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38337 = goog.getObjectByName(fn_str_38334,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38335)].join(''));

(fn_obj_38337.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38337.cljs$core$IFn$_invoke$arity$2(path,new_link_38324) : fn_obj_38337.call(null,path,new_link_38324));


var G__38338 = seq__38055_38326;
var G__38339 = chunk__38057_38327;
var G__38340 = count__38058_38328;
var G__38341 = (i__38059_38329 + (1));
seq__38055_38326 = G__38338;
chunk__38057_38327 = G__38339;
count__38058_38328 = G__38340;
i__38059_38329 = G__38341;
continue;
} else {
var temp__5825__auto___38342__$1 = cljs.core.seq(seq__38055_38326);
if(temp__5825__auto___38342__$1){
var seq__38055_38343__$1 = temp__5825__auto___38342__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38055_38343__$1)){
var c__5548__auto___38344 = cljs.core.chunk_first(seq__38055_38343__$1);
var G__38345 = cljs.core.chunk_rest(seq__38055_38343__$1);
var G__38346 = c__5548__auto___38344;
var G__38347 = cljs.core.count(c__5548__auto___38344);
var G__38348 = (0);
seq__38055_38326 = G__38345;
chunk__38057_38327 = G__38346;
count__38058_38328 = G__38347;
i__38059_38329 = G__38348;
continue;
} else {
var map__38067_38349 = cljs.core.first(seq__38055_38343__$1);
var map__38067_38350__$1 = cljs.core.__destructure_map(map__38067_38349);
var task_38351 = map__38067_38350__$1;
var fn_str_38352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38067_38350__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38067_38350__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38354 = goog.getObjectByName(fn_str_38352,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38353)].join(''));

(fn_obj_38354.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38354.cljs$core$IFn$_invoke$arity$2(path,new_link_38324) : fn_obj_38354.call(null,path,new_link_38324));


var G__38358 = cljs.core.next(seq__38055_38343__$1);
var G__38359 = null;
var G__38360 = (0);
var G__38361 = (0);
seq__38055_38326 = G__38358;
chunk__38057_38327 = G__38359;
count__38058_38328 = G__38360;
i__38059_38329 = G__38361;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38322);
});})(seq__37985_38318,chunk__37989_38319,count__37990_38320,i__37991_38321,seq__37609,chunk__37611,count__37612,i__37613,new_link_38324,path_match_38323,node_38322,path,seq__37609__$1,temp__5825__auto__,map__37608,map__37608__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38323], 0));

goog.dom.insertSiblingAfter(new_link_38324,node_38322);


var G__38362 = seq__37985_38318;
var G__38363 = chunk__37989_38319;
var G__38364 = count__37990_38320;
var G__38365 = (i__37991_38321 + (1));
seq__37985_38318 = G__38362;
chunk__37989_38319 = G__38363;
count__37990_38320 = G__38364;
i__37991_38321 = G__38365;
continue;
} else {
var G__38366 = seq__37985_38318;
var G__38367 = chunk__37989_38319;
var G__38368 = count__37990_38320;
var G__38369 = (i__37991_38321 + (1));
seq__37985_38318 = G__38366;
chunk__37989_38319 = G__38367;
count__37990_38320 = G__38368;
i__37991_38321 = G__38369;
continue;
}
} else {
var G__38370 = seq__37985_38318;
var G__38371 = chunk__37989_38319;
var G__38372 = count__37990_38320;
var G__38373 = (i__37991_38321 + (1));
seq__37985_38318 = G__38370;
chunk__37989_38319 = G__38371;
count__37990_38320 = G__38372;
i__37991_38321 = G__38373;
continue;
}
} else {
var temp__5825__auto___38374__$1 = cljs.core.seq(seq__37985_38318);
if(temp__5825__auto___38374__$1){
var seq__37985_38375__$1 = temp__5825__auto___38374__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37985_38375__$1)){
var c__5548__auto___38376 = cljs.core.chunk_first(seq__37985_38375__$1);
var G__38377 = cljs.core.chunk_rest(seq__37985_38375__$1);
var G__38378 = c__5548__auto___38376;
var G__38379 = cljs.core.count(c__5548__auto___38376);
var G__38380 = (0);
seq__37985_38318 = G__38377;
chunk__37989_38319 = G__38378;
count__37990_38320 = G__38379;
i__37991_38321 = G__38380;
continue;
} else {
var node_38381 = cljs.core.first(seq__37985_38375__$1);
if(cljs.core.not(node_38381.shadow$old)){
var path_match_38382 = shadow.cljs.devtools.client.browser.match_paths(node_38381.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38382)){
var new_link_38383 = (function (){var G__38069 = node_38381.cloneNode(true);
G__38069.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38382),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38069;
})();
(node_38381.shadow$old = true);

(new_link_38383.onload = ((function (seq__37985_38318,chunk__37989_38319,count__37990_38320,i__37991_38321,seq__37609,chunk__37611,count__37612,i__37613,new_link_38383,path_match_38382,node_38381,seq__37985_38375__$1,temp__5825__auto___38374__$1,path,seq__37609__$1,temp__5825__auto__,map__37608,map__37608__$1,msg,updates,reload_info){
return (function (e){
var seq__38070_38384 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38072_38385 = null;
var count__38073_38386 = (0);
var i__38074_38387 = (0);
while(true){
if((i__38074_38387 < count__38073_38386)){
var map__38079_38388 = chunk__38072_38385.cljs$core$IIndexed$_nth$arity$2(null,i__38074_38387);
var map__38079_38389__$1 = cljs.core.__destructure_map(map__38079_38388);
var task_38390 = map__38079_38389__$1;
var fn_str_38391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38079_38389__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38079_38389__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38396 = goog.getObjectByName(fn_str_38391,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38392)].join(''));

(fn_obj_38396.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38396.cljs$core$IFn$_invoke$arity$2(path,new_link_38383) : fn_obj_38396.call(null,path,new_link_38383));


var G__38398 = seq__38070_38384;
var G__38399 = chunk__38072_38385;
var G__38400 = count__38073_38386;
var G__38401 = (i__38074_38387 + (1));
seq__38070_38384 = G__38398;
chunk__38072_38385 = G__38399;
count__38073_38386 = G__38400;
i__38074_38387 = G__38401;
continue;
} else {
var temp__5825__auto___38402__$2 = cljs.core.seq(seq__38070_38384);
if(temp__5825__auto___38402__$2){
var seq__38070_38403__$1 = temp__5825__auto___38402__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38070_38403__$1)){
var c__5548__auto___38404 = cljs.core.chunk_first(seq__38070_38403__$1);
var G__38405 = cljs.core.chunk_rest(seq__38070_38403__$1);
var G__38406 = c__5548__auto___38404;
var G__38407 = cljs.core.count(c__5548__auto___38404);
var G__38408 = (0);
seq__38070_38384 = G__38405;
chunk__38072_38385 = G__38406;
count__38073_38386 = G__38407;
i__38074_38387 = G__38408;
continue;
} else {
var map__38080_38409 = cljs.core.first(seq__38070_38403__$1);
var map__38080_38410__$1 = cljs.core.__destructure_map(map__38080_38409);
var task_38411 = map__38080_38410__$1;
var fn_str_38412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38080_38410__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38080_38410__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38414 = goog.getObjectByName(fn_str_38412,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38413)].join(''));

(fn_obj_38414.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38414.cljs$core$IFn$_invoke$arity$2(path,new_link_38383) : fn_obj_38414.call(null,path,new_link_38383));


var G__38415 = cljs.core.next(seq__38070_38403__$1);
var G__38416 = null;
var G__38417 = (0);
var G__38418 = (0);
seq__38070_38384 = G__38415;
chunk__38072_38385 = G__38416;
count__38073_38386 = G__38417;
i__38074_38387 = G__38418;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38381);
});})(seq__37985_38318,chunk__37989_38319,count__37990_38320,i__37991_38321,seq__37609,chunk__37611,count__37612,i__37613,new_link_38383,path_match_38382,node_38381,seq__37985_38375__$1,temp__5825__auto___38374__$1,path,seq__37609__$1,temp__5825__auto__,map__37608,map__37608__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38382], 0));

goog.dom.insertSiblingAfter(new_link_38383,node_38381);


var G__38419 = cljs.core.next(seq__37985_38375__$1);
var G__38420 = null;
var G__38421 = (0);
var G__38422 = (0);
seq__37985_38318 = G__38419;
chunk__37989_38319 = G__38420;
count__37990_38320 = G__38421;
i__37991_38321 = G__38422;
continue;
} else {
var G__38423 = cljs.core.next(seq__37985_38375__$1);
var G__38424 = null;
var G__38425 = (0);
var G__38426 = (0);
seq__37985_38318 = G__38423;
chunk__37989_38319 = G__38424;
count__37990_38320 = G__38425;
i__37991_38321 = G__38426;
continue;
}
} else {
var G__38427 = cljs.core.next(seq__37985_38375__$1);
var G__38428 = null;
var G__38429 = (0);
var G__38430 = (0);
seq__37985_38318 = G__38427;
chunk__37989_38319 = G__38428;
count__37990_38320 = G__38429;
i__37991_38321 = G__38430;
continue;
}
}
} else {
}
}
break;
}


var G__38431 = cljs.core.next(seq__37609__$1);
var G__38432 = null;
var G__38433 = (0);
var G__38434 = (0);
seq__37609 = G__38431;
chunk__37611 = G__38432;
count__37612 = G__38433;
i__37613 = G__38434;
continue;
} else {
var G__38435 = cljs.core.next(seq__37609__$1);
var G__38436 = null;
var G__38437 = (0);
var G__38438 = (0);
seq__37609 = G__38435;
chunk__37611 = G__38436;
count__37612 = G__38437;
i__37613 = G__38438;
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
try{var G__38087 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38087) : success.call(null,G__38087));
}catch (e38086){var e = e38086;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__38088,success,fail){
var map__38089 = p__38088;
var map__38089__$1 = cljs.core.__destructure_map(map__38089);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38089__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__38091 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38091) : success.call(null,G__38091));
}catch (e38090){var e = e38090;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38092,done,error){
var map__38093 = p__38092;
var map__38093__$1 = cljs.core.__destructure_map(map__38093);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38093__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38094,done,error){
var map__38095 = p__38094;
var map__38095__$1 = cljs.core.__destructure_map(map__38095);
var msg = map__38095__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38095__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38095__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38095__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38096){
var map__38097 = p__38096;
var map__38097__$1 = cljs.core.__destructure_map(map__38097);
var src = map__38097__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38097__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38100 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38100) : done.call(null,G__38100));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38101){
var map__38102 = p__38101;
var map__38102__$1 = cljs.core.__destructure_map(map__38102);
var msg__$1 = map__38102__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38102__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38103){var ex = e38103;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38104){
var map__38105 = p__38104;
var map__38105__$1 = cljs.core.__destructure_map(map__38105);
var env = map__38105__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38105__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38106){
var map__38107 = p__38106;
var map__38107__$1 = cljs.core.__destructure_map(map__38107);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__38108){
var map__38109 = p__38108;
var map__38109__$1 = cljs.core.__destructure_map(map__38109);
var svc = map__38109__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38109__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
