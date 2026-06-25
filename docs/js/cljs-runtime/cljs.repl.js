goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35312){
var map__35321 = p__35312;
var map__35321__$1 = cljs.core.__destructure_map(map__35321);
var m = map__35321__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35331_35809 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35332_35810 = null;
var count__35333_35811 = (0);
var i__35334_35812 = (0);
while(true){
if((i__35334_35812 < count__35333_35811)){
var f_35819 = chunk__35332_35810.cljs$core$IIndexed$_nth$arity$2(null,i__35334_35812);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35819], 0));


var G__35820 = seq__35331_35809;
var G__35821 = chunk__35332_35810;
var G__35822 = count__35333_35811;
var G__35823 = (i__35334_35812 + (1));
seq__35331_35809 = G__35820;
chunk__35332_35810 = G__35821;
count__35333_35811 = G__35822;
i__35334_35812 = G__35823;
continue;
} else {
var temp__5825__auto___35825 = cljs.core.seq(seq__35331_35809);
if(temp__5825__auto___35825){
var seq__35331_35827__$1 = temp__5825__auto___35825;
if(cljs.core.chunked_seq_QMARK_(seq__35331_35827__$1)){
var c__5548__auto___35828 = cljs.core.chunk_first(seq__35331_35827__$1);
var G__35829 = cljs.core.chunk_rest(seq__35331_35827__$1);
var G__35830 = c__5548__auto___35828;
var G__35831 = cljs.core.count(c__5548__auto___35828);
var G__35832 = (0);
seq__35331_35809 = G__35829;
chunk__35332_35810 = G__35830;
count__35333_35811 = G__35831;
i__35334_35812 = G__35832;
continue;
} else {
var f_35837 = cljs.core.first(seq__35331_35827__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35837], 0));


var G__35839 = cljs.core.next(seq__35331_35827__$1);
var G__35840 = null;
var G__35841 = (0);
var G__35842 = (0);
seq__35331_35809 = G__35839;
chunk__35332_35810 = G__35840;
count__35333_35811 = G__35841;
i__35334_35812 = G__35842;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35846 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35846], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35846)))?cljs.core.second(arglists_35846):arglists_35846)], 0));
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
var seq__35338_35854 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35339_35855 = null;
var count__35340_35856 = (0);
var i__35341_35857 = (0);
while(true){
if((i__35341_35857 < count__35340_35856)){
var vec__35377_35860 = chunk__35339_35855.cljs$core$IIndexed$_nth$arity$2(null,i__35341_35857);
var name_35861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377_35860,(0),null);
var map__35380_35862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377_35860,(1),null);
var map__35380_35863__$1 = cljs.core.__destructure_map(map__35380_35862);
var doc_35864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35380_35863__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35380_35863__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35861], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35865], 0));

if(cljs.core.truth_(doc_35864)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35864], 0));
} else {
}


var G__35870 = seq__35338_35854;
var G__35871 = chunk__35339_35855;
var G__35872 = count__35340_35856;
var G__35873 = (i__35341_35857 + (1));
seq__35338_35854 = G__35870;
chunk__35339_35855 = G__35871;
count__35340_35856 = G__35872;
i__35341_35857 = G__35873;
continue;
} else {
var temp__5825__auto___35875 = cljs.core.seq(seq__35338_35854);
if(temp__5825__auto___35875){
var seq__35338_35877__$1 = temp__5825__auto___35875;
if(cljs.core.chunked_seq_QMARK_(seq__35338_35877__$1)){
var c__5548__auto___35878 = cljs.core.chunk_first(seq__35338_35877__$1);
var G__35879 = cljs.core.chunk_rest(seq__35338_35877__$1);
var G__35880 = c__5548__auto___35878;
var G__35881 = cljs.core.count(c__5548__auto___35878);
var G__35882 = (0);
seq__35338_35854 = G__35879;
chunk__35339_35855 = G__35880;
count__35340_35856 = G__35881;
i__35341_35857 = G__35882;
continue;
} else {
var vec__35386_35883 = cljs.core.first(seq__35338_35877__$1);
var name_35884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35386_35883,(0),null);
var map__35389_35885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35386_35883,(1),null);
var map__35389_35886__$1 = cljs.core.__destructure_map(map__35389_35885);
var doc_35887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35389_35886__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35389_35886__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35884], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35888], 0));

if(cljs.core.truth_(doc_35887)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35887], 0));
} else {
}


var G__35896 = cljs.core.next(seq__35338_35877__$1);
var G__35897 = null;
var G__35898 = (0);
var G__35899 = (0);
seq__35338_35854 = G__35896;
chunk__35339_35855 = G__35897;
count__35340_35856 = G__35898;
i__35341_35857 = G__35899;
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

var seq__35404 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35405 = null;
var count__35406 = (0);
var i__35407 = (0);
while(true){
if((i__35407 < count__35406)){
var role = chunk__35405.cljs$core$IIndexed$_nth$arity$2(null,i__35407);
var temp__5825__auto___35911__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35911__$1)){
var spec_35912 = temp__5825__auto___35911__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35912)], 0));
} else {
}


var G__35913 = seq__35404;
var G__35914 = chunk__35405;
var G__35915 = count__35406;
var G__35916 = (i__35407 + (1));
seq__35404 = G__35913;
chunk__35405 = G__35914;
count__35406 = G__35915;
i__35407 = G__35916;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__35404);
if(temp__5825__auto____$1){
var seq__35404__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35404__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__35404__$1);
var G__35917 = cljs.core.chunk_rest(seq__35404__$1);
var G__35918 = c__5548__auto__;
var G__35919 = cljs.core.count(c__5548__auto__);
var G__35920 = (0);
seq__35404 = G__35917;
chunk__35405 = G__35918;
count__35406 = G__35919;
i__35407 = G__35920;
continue;
} else {
var role = cljs.core.first(seq__35404__$1);
var temp__5825__auto___35921__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35921__$2)){
var spec_35922 = temp__5825__auto___35921__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35922)], 0));
} else {
}


var G__35923 = cljs.core.next(seq__35404__$1);
var G__35924 = null;
var G__35925 = (0);
var G__35926 = (0);
seq__35404 = G__35923;
chunk__35405 = G__35924;
count__35406 = G__35925;
i__35407 = G__35926;
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
var map__35477 = datafied_throwable;
var map__35477__$1 = cljs.core.__destructure_map(map__35477);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35477__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35477__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35477__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35478 = cljs.core.last(via);
var map__35478__$1 = cljs.core.__destructure_map(map__35478);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35478__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35478__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35478__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35479 = data;
var map__35479__$1 = cljs.core.__destructure_map(map__35479);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35479__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35479__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35479__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35480 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35480__$1 = cljs.core.__destructure_map(map__35480);
var top_data = map__35480__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35480__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35489 = phase;
var G__35489__$1 = (((G__35489 instanceof cljs.core.Keyword))?G__35489.fqn:null);
switch (G__35489__$1) {
case "read-source":
var map__35497 = data;
var map__35497__$1 = cljs.core.__destructure_map(map__35497);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35500 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35500__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35500,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35500);
var G__35500__$2 = (cljs.core.truth_((function (){var fexpr__35502 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35502.cljs$core$IFn$_invoke$arity$1 ? fexpr__35502.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35502.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35500__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35500__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35500__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35500__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35505 = top_data;
var G__35505__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35505,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35505);
var G__35505__$2 = (cljs.core.truth_((function (){var fexpr__35507 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35507.cljs$core$IFn$_invoke$arity$1 ? fexpr__35507.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35507.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35505__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35505__$1);
var G__35505__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35505__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35505__$2);
var G__35505__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35505__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35505__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35505__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35505__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35510 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35510,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35510,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35510,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35510,(3),null);
var G__35513 = top_data;
var G__35513__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35513,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35513);
var G__35513__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35513__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35513__$1);
var G__35513__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35513__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35513__$2);
var G__35513__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35513__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35513__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35513__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35513__$4;
}

break;
case "execution":
var vec__35516 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35474_SHARP_){
var or__5025__auto__ = (p1__35474_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__35543 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35543.cljs$core$IFn$_invoke$arity$1 ? fexpr__35543.cljs$core$IFn$_invoke$arity$1(p1__35474_SHARP_) : fexpr__35543.call(null,p1__35474_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__35555 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35555__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35555,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35555);
var G__35555__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35555__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35555__$1);
var G__35555__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35555__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35555__$2);
var G__35555__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35555__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35555__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35555__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35555__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35489__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35650){
var map__35656 = p__35650;
var map__35656__$1 = cljs.core.__destructure_map(map__35656);
var triage_data = map__35656__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35656__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35656__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35656__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35656__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35656__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35656__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35656__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35656__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35684 = phase;
var G__35684__$1 = (((G__35684 instanceof cljs.core.Keyword))?G__35684.fqn:null);
switch (G__35684__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35686 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35687 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35688 = loc;
var G__35689 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35692_35980 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35693_35981 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35694_35982 = true;
var _STAR_print_fn_STAR__temp_val__35695_35983 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35694_35982);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35695_35983);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35634_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35634_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35693_35981);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35692_35980);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35686,G__35687,G__35688,G__35689) : format.call(null,G__35686,G__35687,G__35688,G__35689));

break;
case "macroexpansion":
var G__35707 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35708 = cause_type;
var G__35709 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35710 = loc;
var G__35711 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35707,G__35708,G__35709,G__35710,G__35711) : format.call(null,G__35707,G__35708,G__35709,G__35710,G__35711));

break;
case "compile-syntax-check":
var G__35716 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35717 = cause_type;
var G__35718 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35719 = loc;
var G__35720 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35716,G__35717,G__35718,G__35719,G__35720) : format.call(null,G__35716,G__35717,G__35718,G__35719,G__35720));

break;
case "compilation":
var G__35721 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35722 = cause_type;
var G__35723 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35724 = loc;
var G__35725 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35721,G__35722,G__35723,G__35724,G__35725) : format.call(null,G__35721,G__35722,G__35723,G__35724,G__35725));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35728 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35729 = symbol;
var G__35730 = loc;
var G__35731 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35733_35993 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35734_35994 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35735_35995 = true;
var _STAR_print_fn_STAR__temp_val__35736_35996 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35735_35995);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35736_35996);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35641_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35641_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35734_35994);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35733_35993);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35728,G__35729,G__35730,G__35731) : format.call(null,G__35728,G__35729,G__35730,G__35731));
} else {
var G__35739 = "Execution error%s at %s(%s).\n%s\n";
var G__35740 = cause_type;
var G__35741 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35742 = loc;
var G__35743 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35739,G__35740,G__35741,G__35742,G__35743) : format.call(null,G__35739,G__35740,G__35741,G__35742,G__35743));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35684__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
