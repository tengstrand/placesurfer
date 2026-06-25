goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38146 = arguments.length;
var i__5750__auto___38147 = (0);
while(true){
if((i__5750__auto___38147 < len__5749__auto___38146)){
args__5755__auto__.push((arguments[i__5750__auto___38147]));

var G__38148 = (i__5750__auto___38147 + (1));
i__5750__auto___38147 = G__38148;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37492){
var G__37493 = cljs.core.first(seq37492);
var seq37492__$1 = cljs.core.next(seq37492);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37493,seq37492__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37498 = cljs.core.seq(sources);
var chunk__37499 = null;
var count__37500 = (0);
var i__37501 = (0);
while(true){
if((i__37501 < count__37500)){
var map__37518 = chunk__37499.cljs$core$IIndexed$_nth$arity$2(null,i__37501);
var map__37518__$1 = cljs.core.__destructure_map(map__37518);
var src = map__37518__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37518__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37518__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37518__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37518__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37520){var e_38149 = e37520;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38149);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38149.message)].join('')));
}

var G__38150 = seq__37498;
var G__38151 = chunk__37499;
var G__38152 = count__37500;
var G__38153 = (i__37501 + (1));
seq__37498 = G__38150;
chunk__37499 = G__38151;
count__37500 = G__38152;
i__37501 = G__38153;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37498);
if(temp__5825__auto__){
var seq__37498__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37498__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37498__$1);
var G__38154 = cljs.core.chunk_rest(seq__37498__$1);
var G__38155 = c__5548__auto__;
var G__38156 = cljs.core.count(c__5548__auto__);
var G__38157 = (0);
seq__37498 = G__38154;
chunk__37499 = G__38155;
count__37500 = G__38156;
i__37501 = G__38157;
continue;
} else {
var map__37521 = cljs.core.first(seq__37498__$1);
var map__37521__$1 = cljs.core.__destructure_map(map__37521);
var src = map__37521__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37521__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37521__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37521__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37521__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37522){var e_38158 = e37522;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38158);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38158.message)].join('')));
}

var G__38159 = cljs.core.next(seq__37498__$1);
var G__38160 = null;
var G__38161 = (0);
var G__38162 = (0);
seq__37498 = G__38159;
chunk__37499 = G__38160;
count__37500 = G__38161;
i__37501 = G__38162;
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
var seq__37525 = cljs.core.seq(js_requires);
var chunk__37526 = null;
var count__37527 = (0);
var i__37528 = (0);
while(true){
if((i__37528 < count__37527)){
var js_ns = chunk__37526.cljs$core$IIndexed$_nth$arity$2(null,i__37528);
var require_str_38163 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38163);


var G__38164 = seq__37525;
var G__38165 = chunk__37526;
var G__38166 = count__37527;
var G__38167 = (i__37528 + (1));
seq__37525 = G__38164;
chunk__37526 = G__38165;
count__37527 = G__38166;
i__37528 = G__38167;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37525);
if(temp__5825__auto__){
var seq__37525__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37525__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37525__$1);
var G__38168 = cljs.core.chunk_rest(seq__37525__$1);
var G__38169 = c__5548__auto__;
var G__38170 = cljs.core.count(c__5548__auto__);
var G__38171 = (0);
seq__37525 = G__38168;
chunk__37526 = G__38169;
count__37527 = G__38170;
i__37528 = G__38171;
continue;
} else {
var js_ns = cljs.core.first(seq__37525__$1);
var require_str_38172 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38172);


var G__38173 = cljs.core.next(seq__37525__$1);
var G__38174 = null;
var G__38175 = (0);
var G__38176 = (0);
seq__37525 = G__38173;
chunk__37526 = G__38174;
count__37527 = G__38175;
i__37528 = G__38176;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37530){
var map__37531 = p__37530;
var map__37531__$1 = cljs.core.__destructure_map(map__37531);
var msg = map__37531__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37531__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37531__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37532(s__37533){
return (new cljs.core.LazySeq(null,(function (){
var s__37533__$1 = s__37533;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37533__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__37538 = cljs.core.first(xs__6385__auto__);
var map__37538__$1 = cljs.core.__destructure_map(map__37538);
var src = map__37538__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37538__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37538__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__37533__$1,map__37538,map__37538__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37531,map__37531__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37532_$_iter__37534(s__37535){
return (new cljs.core.LazySeq(null,((function (s__37533__$1,map__37538,map__37538__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37531,map__37531__$1,msg,info,reload_info){
return (function (){
var s__37535__$1 = s__37535;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37535__$1);
if(temp__5825__auto____$1){
var s__37535__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37535__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37535__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37537 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37536 = (0);
while(true){
if((i__37536 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__37536);
cljs.core.chunk_append(b__37537,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38180 = (i__37536 + (1));
i__37536 = G__38180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37537),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37532_$_iter__37534(cljs.core.chunk_rest(s__37535__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37537),null);
}
} else {
var warning = cljs.core.first(s__37535__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37532_$_iter__37534(cljs.core.rest(s__37535__$2)));
}
} else {
return null;
}
break;
}
});})(s__37533__$1,map__37538,map__37538__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37531,map__37531__$1,msg,info,reload_info))
,null,null));
});})(s__37533__$1,map__37538,map__37538__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37531,map__37531__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37532(cljs.core.rest(s__37533__$1)));
} else {
var G__38182 = cljs.core.rest(s__37533__$1);
s__37533__$1 = G__38182;
continue;
}
} else {
var G__38183 = cljs.core.rest(s__37533__$1);
s__37533__$1 = G__38183;
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
var seq__37540_38184 = cljs.core.seq(warnings);
var chunk__37541_38185 = null;
var count__37542_38186 = (0);
var i__37543_38187 = (0);
while(true){
if((i__37543_38187 < count__37542_38186)){
var map__37546_38188 = chunk__37541_38185.cljs$core$IIndexed$_nth$arity$2(null,i__37543_38187);
var map__37546_38189__$1 = cljs.core.__destructure_map(map__37546_38188);
var w_38190 = map__37546_38189__$1;
var msg_38191__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37546_38189__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37546_38189__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37546_38189__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37546_38189__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38194)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38192),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38193),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38191__$1)].join(''));


var G__38195 = seq__37540_38184;
var G__38196 = chunk__37541_38185;
var G__38197 = count__37542_38186;
var G__38198 = (i__37543_38187 + (1));
seq__37540_38184 = G__38195;
chunk__37541_38185 = G__38196;
count__37542_38186 = G__38197;
i__37543_38187 = G__38198;
continue;
} else {
var temp__5825__auto___38199 = cljs.core.seq(seq__37540_38184);
if(temp__5825__auto___38199){
var seq__37540_38201__$1 = temp__5825__auto___38199;
if(cljs.core.chunked_seq_QMARK_(seq__37540_38201__$1)){
var c__5548__auto___38202 = cljs.core.chunk_first(seq__37540_38201__$1);
var G__38203 = cljs.core.chunk_rest(seq__37540_38201__$1);
var G__38204 = c__5548__auto___38202;
var G__38205 = cljs.core.count(c__5548__auto___38202);
var G__38206 = (0);
seq__37540_38184 = G__38203;
chunk__37541_38185 = G__38204;
count__37542_38186 = G__38205;
i__37543_38187 = G__38206;
continue;
} else {
var map__37547_38207 = cljs.core.first(seq__37540_38201__$1);
var map__37547_38208__$1 = cljs.core.__destructure_map(map__37547_38207);
var w_38209 = map__37547_38208__$1;
var msg_38210__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37547_38208__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37547_38208__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37547_38208__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37547_38208__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38213)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38211),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38212),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38210__$1)].join(''));


var G__38214 = cljs.core.next(seq__37540_38201__$1);
var G__38215 = null;
var G__38216 = (0);
var G__38217 = (0);
seq__37540_38184 = G__38214;
chunk__37541_38185 = G__38215;
count__37542_38186 = G__38216;
i__37543_38187 = G__38217;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37529_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37529_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37568 = node_uri;
G__37568.setQuery(null);

G__37568.setPath(new$);

return G__37568;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37586){
var map__37595 = p__37586;
var map__37595__$1 = cljs.core.__destructure_map(map__37595);
var msg = map__37595__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37595__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37595__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37598 = cljs.core.seq(updates);
var chunk__37600 = null;
var count__37602 = (0);
var i__37603 = (0);
while(true){
if((i__37603 < count__37602)){
var path = chunk__37600.cljs$core$IIndexed$_nth$arity$2(null,i__37603);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37945_38223 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37949_38224 = null;
var count__37950_38225 = (0);
var i__37951_38226 = (0);
while(true){
if((i__37951_38226 < count__37950_38225)){
var node_38227 = chunk__37949_38224.cljs$core$IIndexed$_nth$arity$2(null,i__37951_38226);
if(cljs.core.not(node_38227.shadow$old)){
var path_match_38228 = shadow.cljs.devtools.client.browser.match_paths(node_38227.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38228)){
var new_link_38229 = (function (){var G__37982 = node_38227.cloneNode(true);
G__37982.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38228),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37982;
})();
(node_38227.shadow$old = true);

(new_link_38229.onload = ((function (seq__37945_38223,chunk__37949_38224,count__37950_38225,i__37951_38226,seq__37598,chunk__37600,count__37602,i__37603,new_link_38229,path_match_38228,node_38227,path,map__37595,map__37595__$1,msg,updates,reload_info){
return (function (e){
var seq__37984_38230 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37986_38231 = null;
var count__37987_38232 = (0);
var i__37988_38233 = (0);
while(true){
if((i__37988_38233 < count__37987_38232)){
var map__37998_38234 = chunk__37986_38231.cljs$core$IIndexed$_nth$arity$2(null,i__37988_38233);
var map__37998_38235__$1 = cljs.core.__destructure_map(map__37998_38234);
var task_38236 = map__37998_38235__$1;
var fn_str_38237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_38235__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_38235__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38239 = goog.getObjectByName(fn_str_38237,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38238)].join(''));

(fn_obj_38239.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38239.cljs$core$IFn$_invoke$arity$2(path,new_link_38229) : fn_obj_38239.call(null,path,new_link_38229));


var G__38246 = seq__37984_38230;
var G__38247 = chunk__37986_38231;
var G__38248 = count__37987_38232;
var G__38249 = (i__37988_38233 + (1));
seq__37984_38230 = G__38246;
chunk__37986_38231 = G__38247;
count__37987_38232 = G__38248;
i__37988_38233 = G__38249;
continue;
} else {
var temp__5825__auto___38250 = cljs.core.seq(seq__37984_38230);
if(temp__5825__auto___38250){
var seq__37984_38251__$1 = temp__5825__auto___38250;
if(cljs.core.chunked_seq_QMARK_(seq__37984_38251__$1)){
var c__5548__auto___38252 = cljs.core.chunk_first(seq__37984_38251__$1);
var G__38253 = cljs.core.chunk_rest(seq__37984_38251__$1);
var G__38254 = c__5548__auto___38252;
var G__38255 = cljs.core.count(c__5548__auto___38252);
var G__38256 = (0);
seq__37984_38230 = G__38253;
chunk__37986_38231 = G__38254;
count__37987_38232 = G__38255;
i__37988_38233 = G__38256;
continue;
} else {
var map__37999_38257 = cljs.core.first(seq__37984_38251__$1);
var map__37999_38258__$1 = cljs.core.__destructure_map(map__37999_38257);
var task_38259 = map__37999_38258__$1;
var fn_str_38260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999_38258__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999_38258__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38262 = goog.getObjectByName(fn_str_38260,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38261)].join(''));

(fn_obj_38262.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38262.cljs$core$IFn$_invoke$arity$2(path,new_link_38229) : fn_obj_38262.call(null,path,new_link_38229));


var G__38263 = cljs.core.next(seq__37984_38251__$1);
var G__38264 = null;
var G__38265 = (0);
var G__38266 = (0);
seq__37984_38230 = G__38263;
chunk__37986_38231 = G__38264;
count__37987_38232 = G__38265;
i__37988_38233 = G__38266;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38227);
});})(seq__37945_38223,chunk__37949_38224,count__37950_38225,i__37951_38226,seq__37598,chunk__37600,count__37602,i__37603,new_link_38229,path_match_38228,node_38227,path,map__37595,map__37595__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38228], 0));

goog.dom.insertSiblingAfter(new_link_38229,node_38227);


var G__38267 = seq__37945_38223;
var G__38268 = chunk__37949_38224;
var G__38269 = count__37950_38225;
var G__38270 = (i__37951_38226 + (1));
seq__37945_38223 = G__38267;
chunk__37949_38224 = G__38268;
count__37950_38225 = G__38269;
i__37951_38226 = G__38270;
continue;
} else {
var G__38271 = seq__37945_38223;
var G__38272 = chunk__37949_38224;
var G__38273 = count__37950_38225;
var G__38274 = (i__37951_38226 + (1));
seq__37945_38223 = G__38271;
chunk__37949_38224 = G__38272;
count__37950_38225 = G__38273;
i__37951_38226 = G__38274;
continue;
}
} else {
var G__38275 = seq__37945_38223;
var G__38276 = chunk__37949_38224;
var G__38277 = count__37950_38225;
var G__38278 = (i__37951_38226 + (1));
seq__37945_38223 = G__38275;
chunk__37949_38224 = G__38276;
count__37950_38225 = G__38277;
i__37951_38226 = G__38278;
continue;
}
} else {
var temp__5825__auto___38279 = cljs.core.seq(seq__37945_38223);
if(temp__5825__auto___38279){
var seq__37945_38280__$1 = temp__5825__auto___38279;
if(cljs.core.chunked_seq_QMARK_(seq__37945_38280__$1)){
var c__5548__auto___38281 = cljs.core.chunk_first(seq__37945_38280__$1);
var G__38282 = cljs.core.chunk_rest(seq__37945_38280__$1);
var G__38283 = c__5548__auto___38281;
var G__38284 = cljs.core.count(c__5548__auto___38281);
var G__38285 = (0);
seq__37945_38223 = G__38282;
chunk__37949_38224 = G__38283;
count__37950_38225 = G__38284;
i__37951_38226 = G__38285;
continue;
} else {
var node_38286 = cljs.core.first(seq__37945_38280__$1);
if(cljs.core.not(node_38286.shadow$old)){
var path_match_38287 = shadow.cljs.devtools.client.browser.match_paths(node_38286.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38287)){
var new_link_38288 = (function (){var G__38000 = node_38286.cloneNode(true);
G__38000.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38287),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38000;
})();
(node_38286.shadow$old = true);

(new_link_38288.onload = ((function (seq__37945_38223,chunk__37949_38224,count__37950_38225,i__37951_38226,seq__37598,chunk__37600,count__37602,i__37603,new_link_38288,path_match_38287,node_38286,seq__37945_38280__$1,temp__5825__auto___38279,path,map__37595,map__37595__$1,msg,updates,reload_info){
return (function (e){
var seq__38001_38290 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38003_38291 = null;
var count__38004_38292 = (0);
var i__38005_38293 = (0);
while(true){
if((i__38005_38293 < count__38004_38292)){
var map__38009_38294 = chunk__38003_38291.cljs$core$IIndexed$_nth$arity$2(null,i__38005_38293);
var map__38009_38295__$1 = cljs.core.__destructure_map(map__38009_38294);
var task_38296 = map__38009_38295__$1;
var fn_str_38297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38009_38295__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38009_38295__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38299 = goog.getObjectByName(fn_str_38297,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38298)].join(''));

(fn_obj_38299.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38299.cljs$core$IFn$_invoke$arity$2(path,new_link_38288) : fn_obj_38299.call(null,path,new_link_38288));


var G__38300 = seq__38001_38290;
var G__38301 = chunk__38003_38291;
var G__38302 = count__38004_38292;
var G__38303 = (i__38005_38293 + (1));
seq__38001_38290 = G__38300;
chunk__38003_38291 = G__38301;
count__38004_38292 = G__38302;
i__38005_38293 = G__38303;
continue;
} else {
var temp__5825__auto___38304__$1 = cljs.core.seq(seq__38001_38290);
if(temp__5825__auto___38304__$1){
var seq__38001_38305__$1 = temp__5825__auto___38304__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38001_38305__$1)){
var c__5548__auto___38307 = cljs.core.chunk_first(seq__38001_38305__$1);
var G__38308 = cljs.core.chunk_rest(seq__38001_38305__$1);
var G__38309 = c__5548__auto___38307;
var G__38310 = cljs.core.count(c__5548__auto___38307);
var G__38311 = (0);
seq__38001_38290 = G__38308;
chunk__38003_38291 = G__38309;
count__38004_38292 = G__38310;
i__38005_38293 = G__38311;
continue;
} else {
var map__38011_38312 = cljs.core.first(seq__38001_38305__$1);
var map__38011_38313__$1 = cljs.core.__destructure_map(map__38011_38312);
var task_38314 = map__38011_38313__$1;
var fn_str_38315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38011_38313__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38011_38313__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38317 = goog.getObjectByName(fn_str_38315,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38316)].join(''));

(fn_obj_38317.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38317.cljs$core$IFn$_invoke$arity$2(path,new_link_38288) : fn_obj_38317.call(null,path,new_link_38288));


var G__38318 = cljs.core.next(seq__38001_38305__$1);
var G__38319 = null;
var G__38320 = (0);
var G__38321 = (0);
seq__38001_38290 = G__38318;
chunk__38003_38291 = G__38319;
count__38004_38292 = G__38320;
i__38005_38293 = G__38321;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38286);
});})(seq__37945_38223,chunk__37949_38224,count__37950_38225,i__37951_38226,seq__37598,chunk__37600,count__37602,i__37603,new_link_38288,path_match_38287,node_38286,seq__37945_38280__$1,temp__5825__auto___38279,path,map__37595,map__37595__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38287], 0));

goog.dom.insertSiblingAfter(new_link_38288,node_38286);


var G__38322 = cljs.core.next(seq__37945_38280__$1);
var G__38323 = null;
var G__38324 = (0);
var G__38325 = (0);
seq__37945_38223 = G__38322;
chunk__37949_38224 = G__38323;
count__37950_38225 = G__38324;
i__37951_38226 = G__38325;
continue;
} else {
var G__38326 = cljs.core.next(seq__37945_38280__$1);
var G__38327 = null;
var G__38328 = (0);
var G__38329 = (0);
seq__37945_38223 = G__38326;
chunk__37949_38224 = G__38327;
count__37950_38225 = G__38328;
i__37951_38226 = G__38329;
continue;
}
} else {
var G__38330 = cljs.core.next(seq__37945_38280__$1);
var G__38331 = null;
var G__38332 = (0);
var G__38333 = (0);
seq__37945_38223 = G__38330;
chunk__37949_38224 = G__38331;
count__37950_38225 = G__38332;
i__37951_38226 = G__38333;
continue;
}
}
} else {
}
}
break;
}


var G__38334 = seq__37598;
var G__38335 = chunk__37600;
var G__38336 = count__37602;
var G__38337 = (i__37603 + (1));
seq__37598 = G__38334;
chunk__37600 = G__38335;
count__37602 = G__38336;
i__37603 = G__38337;
continue;
} else {
var G__38338 = seq__37598;
var G__38339 = chunk__37600;
var G__38340 = count__37602;
var G__38341 = (i__37603 + (1));
seq__37598 = G__38338;
chunk__37600 = G__38339;
count__37602 = G__38340;
i__37603 = G__38341;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37598);
if(temp__5825__auto__){
var seq__37598__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37598__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37598__$1);
var G__38342 = cljs.core.chunk_rest(seq__37598__$1);
var G__38343 = c__5548__auto__;
var G__38344 = cljs.core.count(c__5548__auto__);
var G__38345 = (0);
seq__37598 = G__38342;
chunk__37600 = G__38343;
count__37602 = G__38344;
i__37603 = G__38345;
continue;
} else {
var path = cljs.core.first(seq__37598__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38021_38346 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38025_38347 = null;
var count__38026_38348 = (0);
var i__38027_38349 = (0);
while(true){
if((i__38027_38349 < count__38026_38348)){
var node_38350 = chunk__38025_38347.cljs$core$IIndexed$_nth$arity$2(null,i__38027_38349);
if(cljs.core.not(node_38350.shadow$old)){
var path_match_38351 = shadow.cljs.devtools.client.browser.match_paths(node_38350.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38351)){
var new_link_38352 = (function (){var G__38066 = node_38350.cloneNode(true);
G__38066.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38351),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38066;
})();
(node_38350.shadow$old = true);

(new_link_38352.onload = ((function (seq__38021_38346,chunk__38025_38347,count__38026_38348,i__38027_38349,seq__37598,chunk__37600,count__37602,i__37603,new_link_38352,path_match_38351,node_38350,path,seq__37598__$1,temp__5825__auto__,map__37595,map__37595__$1,msg,updates,reload_info){
return (function (e){
var seq__38067_38353 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38069_38354 = null;
var count__38070_38355 = (0);
var i__38071_38356 = (0);
while(true){
if((i__38071_38356 < count__38070_38355)){
var map__38075_38357 = chunk__38069_38354.cljs$core$IIndexed$_nth$arity$2(null,i__38071_38356);
var map__38075_38358__$1 = cljs.core.__destructure_map(map__38075_38357);
var task_38359 = map__38075_38358__$1;
var fn_str_38360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38075_38358__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38075_38358__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38362 = goog.getObjectByName(fn_str_38360,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38361)].join(''));

(fn_obj_38362.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38362.cljs$core$IFn$_invoke$arity$2(path,new_link_38352) : fn_obj_38362.call(null,path,new_link_38352));


var G__38363 = seq__38067_38353;
var G__38364 = chunk__38069_38354;
var G__38365 = count__38070_38355;
var G__38366 = (i__38071_38356 + (1));
seq__38067_38353 = G__38363;
chunk__38069_38354 = G__38364;
count__38070_38355 = G__38365;
i__38071_38356 = G__38366;
continue;
} else {
var temp__5825__auto___38367__$1 = cljs.core.seq(seq__38067_38353);
if(temp__5825__auto___38367__$1){
var seq__38067_38368__$1 = temp__5825__auto___38367__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38067_38368__$1)){
var c__5548__auto___38369 = cljs.core.chunk_first(seq__38067_38368__$1);
var G__38370 = cljs.core.chunk_rest(seq__38067_38368__$1);
var G__38371 = c__5548__auto___38369;
var G__38372 = cljs.core.count(c__5548__auto___38369);
var G__38373 = (0);
seq__38067_38353 = G__38370;
chunk__38069_38354 = G__38371;
count__38070_38355 = G__38372;
i__38071_38356 = G__38373;
continue;
} else {
var map__38076_38374 = cljs.core.first(seq__38067_38368__$1);
var map__38076_38375__$1 = cljs.core.__destructure_map(map__38076_38374);
var task_38376 = map__38076_38375__$1;
var fn_str_38377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38076_38375__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38076_38375__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38379 = goog.getObjectByName(fn_str_38377,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38378)].join(''));

(fn_obj_38379.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38379.cljs$core$IFn$_invoke$arity$2(path,new_link_38352) : fn_obj_38379.call(null,path,new_link_38352));


var G__38380 = cljs.core.next(seq__38067_38368__$1);
var G__38381 = null;
var G__38382 = (0);
var G__38383 = (0);
seq__38067_38353 = G__38380;
chunk__38069_38354 = G__38381;
count__38070_38355 = G__38382;
i__38071_38356 = G__38383;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38350);
});})(seq__38021_38346,chunk__38025_38347,count__38026_38348,i__38027_38349,seq__37598,chunk__37600,count__37602,i__37603,new_link_38352,path_match_38351,node_38350,path,seq__37598__$1,temp__5825__auto__,map__37595,map__37595__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38351], 0));

goog.dom.insertSiblingAfter(new_link_38352,node_38350);


var G__38384 = seq__38021_38346;
var G__38385 = chunk__38025_38347;
var G__38386 = count__38026_38348;
var G__38387 = (i__38027_38349 + (1));
seq__38021_38346 = G__38384;
chunk__38025_38347 = G__38385;
count__38026_38348 = G__38386;
i__38027_38349 = G__38387;
continue;
} else {
var G__38388 = seq__38021_38346;
var G__38389 = chunk__38025_38347;
var G__38390 = count__38026_38348;
var G__38391 = (i__38027_38349 + (1));
seq__38021_38346 = G__38388;
chunk__38025_38347 = G__38389;
count__38026_38348 = G__38390;
i__38027_38349 = G__38391;
continue;
}
} else {
var G__38392 = seq__38021_38346;
var G__38393 = chunk__38025_38347;
var G__38394 = count__38026_38348;
var G__38395 = (i__38027_38349 + (1));
seq__38021_38346 = G__38392;
chunk__38025_38347 = G__38393;
count__38026_38348 = G__38394;
i__38027_38349 = G__38395;
continue;
}
} else {
var temp__5825__auto___38396__$1 = cljs.core.seq(seq__38021_38346);
if(temp__5825__auto___38396__$1){
var seq__38021_38397__$1 = temp__5825__auto___38396__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38021_38397__$1)){
var c__5548__auto___38398 = cljs.core.chunk_first(seq__38021_38397__$1);
var G__38399 = cljs.core.chunk_rest(seq__38021_38397__$1);
var G__38400 = c__5548__auto___38398;
var G__38401 = cljs.core.count(c__5548__auto___38398);
var G__38402 = (0);
seq__38021_38346 = G__38399;
chunk__38025_38347 = G__38400;
count__38026_38348 = G__38401;
i__38027_38349 = G__38402;
continue;
} else {
var node_38403 = cljs.core.first(seq__38021_38397__$1);
if(cljs.core.not(node_38403.shadow$old)){
var path_match_38404 = shadow.cljs.devtools.client.browser.match_paths(node_38403.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38404)){
var new_link_38405 = (function (){var G__38080 = node_38403.cloneNode(true);
G__38080.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38404),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38080;
})();
(node_38403.shadow$old = true);

(new_link_38405.onload = ((function (seq__38021_38346,chunk__38025_38347,count__38026_38348,i__38027_38349,seq__37598,chunk__37600,count__37602,i__37603,new_link_38405,path_match_38404,node_38403,seq__38021_38397__$1,temp__5825__auto___38396__$1,path,seq__37598__$1,temp__5825__auto__,map__37595,map__37595__$1,msg,updates,reload_info){
return (function (e){
var seq__38083_38406 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38085_38407 = null;
var count__38086_38408 = (0);
var i__38087_38409 = (0);
while(true){
if((i__38087_38409 < count__38086_38408)){
var map__38103_38412 = chunk__38085_38407.cljs$core$IIndexed$_nth$arity$2(null,i__38087_38409);
var map__38103_38413__$1 = cljs.core.__destructure_map(map__38103_38412);
var task_38414 = map__38103_38413__$1;
var fn_str_38415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103_38413__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103_38413__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38417 = goog.getObjectByName(fn_str_38415,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38416)].join(''));

(fn_obj_38417.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38417.cljs$core$IFn$_invoke$arity$2(path,new_link_38405) : fn_obj_38417.call(null,path,new_link_38405));


var G__38424 = seq__38083_38406;
var G__38425 = chunk__38085_38407;
var G__38426 = count__38086_38408;
var G__38427 = (i__38087_38409 + (1));
seq__38083_38406 = G__38424;
chunk__38085_38407 = G__38425;
count__38086_38408 = G__38426;
i__38087_38409 = G__38427;
continue;
} else {
var temp__5825__auto___38428__$2 = cljs.core.seq(seq__38083_38406);
if(temp__5825__auto___38428__$2){
var seq__38083_38429__$1 = temp__5825__auto___38428__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38083_38429__$1)){
var c__5548__auto___38430 = cljs.core.chunk_first(seq__38083_38429__$1);
var G__38431 = cljs.core.chunk_rest(seq__38083_38429__$1);
var G__38432 = c__5548__auto___38430;
var G__38433 = cljs.core.count(c__5548__auto___38430);
var G__38434 = (0);
seq__38083_38406 = G__38431;
chunk__38085_38407 = G__38432;
count__38086_38408 = G__38433;
i__38087_38409 = G__38434;
continue;
} else {
var map__38110_38435 = cljs.core.first(seq__38083_38429__$1);
var map__38110_38436__$1 = cljs.core.__destructure_map(map__38110_38435);
var task_38437 = map__38110_38436__$1;
var fn_str_38438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38110_38436__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38110_38436__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38440 = goog.getObjectByName(fn_str_38438,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38439)].join(''));

(fn_obj_38440.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38440.cljs$core$IFn$_invoke$arity$2(path,new_link_38405) : fn_obj_38440.call(null,path,new_link_38405));


var G__38441 = cljs.core.next(seq__38083_38429__$1);
var G__38442 = null;
var G__38443 = (0);
var G__38444 = (0);
seq__38083_38406 = G__38441;
chunk__38085_38407 = G__38442;
count__38086_38408 = G__38443;
i__38087_38409 = G__38444;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38403);
});})(seq__38021_38346,chunk__38025_38347,count__38026_38348,i__38027_38349,seq__37598,chunk__37600,count__37602,i__37603,new_link_38405,path_match_38404,node_38403,seq__38021_38397__$1,temp__5825__auto___38396__$1,path,seq__37598__$1,temp__5825__auto__,map__37595,map__37595__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38404], 0));

goog.dom.insertSiblingAfter(new_link_38405,node_38403);


var G__38445 = cljs.core.next(seq__38021_38397__$1);
var G__38446 = null;
var G__38447 = (0);
var G__38448 = (0);
seq__38021_38346 = G__38445;
chunk__38025_38347 = G__38446;
count__38026_38348 = G__38447;
i__38027_38349 = G__38448;
continue;
} else {
var G__38449 = cljs.core.next(seq__38021_38397__$1);
var G__38450 = null;
var G__38451 = (0);
var G__38452 = (0);
seq__38021_38346 = G__38449;
chunk__38025_38347 = G__38450;
count__38026_38348 = G__38451;
i__38027_38349 = G__38452;
continue;
}
} else {
var G__38453 = cljs.core.next(seq__38021_38397__$1);
var G__38454 = null;
var G__38455 = (0);
var G__38456 = (0);
seq__38021_38346 = G__38453;
chunk__38025_38347 = G__38454;
count__38026_38348 = G__38455;
i__38027_38349 = G__38456;
continue;
}
}
} else {
}
}
break;
}


var G__38457 = cljs.core.next(seq__37598__$1);
var G__38458 = null;
var G__38459 = (0);
var G__38460 = (0);
seq__37598 = G__38457;
chunk__37600 = G__38458;
count__37602 = G__38459;
i__37603 = G__38460;
continue;
} else {
var G__38461 = cljs.core.next(seq__37598__$1);
var G__38462 = null;
var G__38463 = (0);
var G__38464 = (0);
seq__37598 = G__38461;
chunk__37600 = G__38462;
count__37602 = G__38463;
i__37603 = G__38464;
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
try{var G__38114 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38114) : success.call(null,G__38114));
}catch (e38113){var e = e38113;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__38115,success,fail){
var map__38116 = p__38115;
var map__38116__$1 = cljs.core.__destructure_map(map__38116);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38116__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__38118 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38118) : success.call(null,G__38118));
}catch (e38117){var e = e38117;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38119,done,error){
var map__38120 = p__38119;
var map__38120__$1 = cljs.core.__destructure_map(map__38120);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38120__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38122,done,error){
var map__38123 = p__38122;
var map__38123__$1 = cljs.core.__destructure_map(map__38123);
var msg = map__38123__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38123__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38123__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38123__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38124){
var map__38125 = p__38124;
var map__38125__$1 = cljs.core.__destructure_map(map__38125);
var src = map__38125__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38125__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38126 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38126) : done.call(null,G__38126));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38127){
var map__38128 = p__38127;
var map__38128__$1 = cljs.core.__destructure_map(map__38128);
var msg__$1 = map__38128__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38128__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38129){var ex = e38129;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38130){
var map__38131 = p__38130;
var map__38131__$1 = cljs.core.__destructure_map(map__38131);
var env = map__38131__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38131__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38135){
var map__38136 = p__38135;
var map__38136__$1 = cljs.core.__destructure_map(map__38136);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__38140){
var map__38141 = p__38140;
var map__38141__$1 = cljs.core.__destructure_map(map__38141);
var svc = map__38141__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38141__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
