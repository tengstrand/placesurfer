goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35108){
var map__35110 = p__35108;
var map__35110__$1 = cljs.core.__destructure_map(map__35110);
var m = map__35110__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35110__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35110__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35115_35488 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35116_35489 = null;
var count__35117_35490 = (0);
var i__35118_35491 = (0);
while(true){
if((i__35118_35491 < count__35117_35490)){
var f_35493 = chunk__35116_35489.cljs$core$IIndexed$_nth$arity$2(null,i__35118_35491);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35493], 0));


var G__35494 = seq__35115_35488;
var G__35495 = chunk__35116_35489;
var G__35496 = count__35117_35490;
var G__35497 = (i__35118_35491 + (1));
seq__35115_35488 = G__35494;
chunk__35116_35489 = G__35495;
count__35117_35490 = G__35496;
i__35118_35491 = G__35497;
continue;
} else {
var temp__5825__auto___35498 = cljs.core.seq(seq__35115_35488);
if(temp__5825__auto___35498){
var seq__35115_35500__$1 = temp__5825__auto___35498;
if(cljs.core.chunked_seq_QMARK_(seq__35115_35500__$1)){
var c__5548__auto___35501 = cljs.core.chunk_first(seq__35115_35500__$1);
var G__35502 = cljs.core.chunk_rest(seq__35115_35500__$1);
var G__35503 = c__5548__auto___35501;
var G__35504 = cljs.core.count(c__5548__auto___35501);
var G__35505 = (0);
seq__35115_35488 = G__35502;
chunk__35116_35489 = G__35503;
count__35117_35490 = G__35504;
i__35118_35491 = G__35505;
continue;
} else {
var f_35507 = cljs.core.first(seq__35115_35500__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35507], 0));


var G__35508 = cljs.core.next(seq__35115_35500__$1);
var G__35509 = null;
var G__35510 = (0);
var G__35511 = (0);
seq__35115_35488 = G__35508;
chunk__35116_35489 = G__35509;
count__35117_35490 = G__35510;
i__35118_35491 = G__35511;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35512 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35512], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35512)))?cljs.core.second(arglists_35512):arglists_35512)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35149_35527 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35150_35528 = null;
var count__35151_35529 = (0);
var i__35152_35530 = (0);
while(true){
if((i__35152_35530 < count__35151_35529)){
var vec__35189_35535 = chunk__35150_35528.cljs$core$IIndexed$_nth$arity$2(null,i__35152_35530);
var name_35536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35189_35535,(0),null);
var map__35192_35537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35189_35535,(1),null);
var map__35192_35538__$1 = cljs.core.__destructure_map(map__35192_35537);
var doc_35539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35192_35538__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35192_35538__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35536], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35540], 0));

if(cljs.core.truth_(doc_35539)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35539], 0));
} else {
}


var G__35559 = seq__35149_35527;
var G__35560 = chunk__35150_35528;
var G__35561 = count__35151_35529;
var G__35562 = (i__35152_35530 + (1));
seq__35149_35527 = G__35559;
chunk__35150_35528 = G__35560;
count__35151_35529 = G__35561;
i__35152_35530 = G__35562;
continue;
} else {
var temp__5825__auto___35571 = cljs.core.seq(seq__35149_35527);
if(temp__5825__auto___35571){
var seq__35149_35572__$1 = temp__5825__auto___35571;
if(cljs.core.chunked_seq_QMARK_(seq__35149_35572__$1)){
var c__5548__auto___35575 = cljs.core.chunk_first(seq__35149_35572__$1);
var G__35576 = cljs.core.chunk_rest(seq__35149_35572__$1);
var G__35577 = c__5548__auto___35575;
var G__35578 = cljs.core.count(c__5548__auto___35575);
var G__35579 = (0);
seq__35149_35527 = G__35576;
chunk__35150_35528 = G__35577;
count__35151_35529 = G__35578;
i__35152_35530 = G__35579;
continue;
} else {
var vec__35204_35580 = cljs.core.first(seq__35149_35572__$1);
var name_35581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35204_35580,(0),null);
var map__35207_35582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35204_35580,(1),null);
var map__35207_35583__$1 = cljs.core.__destructure_map(map__35207_35582);
var doc_35584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35207_35583__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35207_35583__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35581], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35585], 0));

if(cljs.core.truth_(doc_35584)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35584], 0));
} else {
}


var G__35590 = cljs.core.next(seq__35149_35572__$1);
var G__35591 = null;
var G__35592 = (0);
var G__35593 = (0);
seq__35149_35527 = G__35590;
chunk__35150_35528 = G__35591;
count__35151_35529 = G__35592;
i__35152_35530 = G__35593;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35209 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35210 = null;
var count__35211 = (0);
var i__35212 = (0);
while(true){
if((i__35212 < count__35211)){
var role = chunk__35210.cljs$core$IIndexed$_nth$arity$2(null,i__35212);
var temp__5825__auto___35603__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35603__$1)){
var spec_35604 = temp__5825__auto___35603__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35604)], 0));
} else {
}


var G__35605 = seq__35209;
var G__35606 = chunk__35210;
var G__35607 = count__35211;
var G__35608 = (i__35212 + (1));
seq__35209 = G__35605;
chunk__35210 = G__35606;
count__35211 = G__35607;
i__35212 = G__35608;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__35209);
if(temp__5825__auto____$1){
var seq__35209__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35209__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__35209__$1);
var G__35614 = cljs.core.chunk_rest(seq__35209__$1);
var G__35615 = c__5548__auto__;
var G__35616 = cljs.core.count(c__5548__auto__);
var G__35617 = (0);
seq__35209 = G__35614;
chunk__35210 = G__35615;
count__35211 = G__35616;
i__35212 = G__35617;
continue;
} else {
var role = cljs.core.first(seq__35209__$1);
var temp__5825__auto___35618__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35618__$2)){
var spec_35623 = temp__5825__auto___35618__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35623)], 0));
} else {
}


var G__35627 = cljs.core.next(seq__35209__$1);
var G__35628 = null;
var G__35629 = (0);
var G__35630 = (0);
seq__35209 = G__35627;
chunk__35210 = G__35628;
count__35211 = G__35629;
i__35212 = G__35630;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35275 = datafied_throwable;
var map__35275__$1 = cljs.core.__destructure_map(map__35275);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35275__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35276 = cljs.core.last(via);
var map__35276__$1 = cljs.core.__destructure_map(map__35276);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35277 = data;
var map__35277__$1 = cljs.core.__destructure_map(map__35277);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35277__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35277__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35277__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35278 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35278__$1 = cljs.core.__destructure_map(map__35278);
var top_data = map__35278__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35278__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35303 = phase;
var G__35303__$1 = (((G__35303 instanceof cljs.core.Keyword))?G__35303.fqn:null);
switch (G__35303__$1) {
case "read-source":
var map__35304 = data;
var map__35304__$1 = cljs.core.__destructure_map(map__35304);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35304__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35304__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35305 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35305__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35305,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35305);
var G__35305__$2 = (cljs.core.truth_((function (){var fexpr__35307 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35307.cljs$core$IFn$_invoke$arity$1 ? fexpr__35307.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35307.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35305__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35305__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35305__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35305__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35312 = top_data;
var G__35312__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35312,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35312);
var G__35312__$2 = (cljs.core.truth_((function (){var fexpr__35318 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35318.cljs$core$IFn$_invoke$arity$1 ? fexpr__35318.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35318.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35312__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35312__$1);
var G__35312__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35312__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35312__$2);
var G__35312__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35312__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35312__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35312__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35312__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35326 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326,(3),null);
var G__35330 = top_data;
var G__35330__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35330,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35330);
var G__35330__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35330__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35330__$1);
var G__35330__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35330__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35330__$2);
var G__35330__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35330__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35330__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35330__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35330__$4;
}

break;
case "execution":
var vec__35340 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35340,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35340,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35340,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35340,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35270_SHARP_){
var or__5025__auto__ = (p1__35270_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__35344 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35344.cljs$core$IFn$_invoke$arity$1 ? fexpr__35344.cljs$core$IFn$_invoke$arity$1(p1__35270_SHARP_) : fexpr__35344.call(null,p1__35270_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__35346 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35346__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35346,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35346);
var G__35346__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35346__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35346__$1);
var G__35346__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35346__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35346__$2);
var G__35346__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35346__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35346__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35346__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35346__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35303__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35383){
var map__35384 = p__35383;
var map__35384__$1 = cljs.core.__destructure_map(map__35384);
var triage_data = map__35384__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = source;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35390 = phase;
var G__35390__$1 = (((G__35390 instanceof cljs.core.Keyword))?G__35390.fqn:null);
switch (G__35390__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35391 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35392 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35393 = loc;
var G__35394 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35400_35710 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35401_35711 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35402_35712 = true;
var _STAR_print_fn_STAR__temp_val__35403_35713 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35402_35712);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35403_35713);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35366_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35366_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35401_35711);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35400_35710);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35391,G__35392,G__35393,G__35394) : format.call(null,G__35391,G__35392,G__35393,G__35394));

break;
case "macroexpansion":
var G__35418 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35419 = cause_type;
var G__35420 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35421 = loc;
var G__35422 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35418,G__35419,G__35420,G__35421,G__35422) : format.call(null,G__35418,G__35419,G__35420,G__35421,G__35422));

break;
case "compile-syntax-check":
var G__35423 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35424 = cause_type;
var G__35425 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35426 = loc;
var G__35427 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35423,G__35424,G__35425,G__35426,G__35427) : format.call(null,G__35423,G__35424,G__35425,G__35426,G__35427));

break;
case "compilation":
var G__35434 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35435 = cause_type;
var G__35436 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35437 = loc;
var G__35438 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35434,G__35435,G__35436,G__35437,G__35438) : format.call(null,G__35434,G__35435,G__35436,G__35437,G__35438));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35442 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35443 = symbol;
var G__35444 = loc;
var G__35445 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35446_35732 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35447_35733 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35448_35734 = true;
var _STAR_print_fn_STAR__temp_val__35449_35735 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35448_35734);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35449_35735);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35375_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35375_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35447_35733);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35446_35732);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35442,G__35443,G__35444,G__35445) : format.call(null,G__35442,G__35443,G__35444,G__35445));
} else {
var G__35456 = "Execution error%s at %s(%s).\n%s\n";
var G__35457 = cause_type;
var G__35458 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35459 = loc;
var G__35460 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35456,G__35457,G__35458,G__35459,G__35460) : format.call(null,G__35456,G__35457,G__35458,G__35459,G__35460));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35390__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
