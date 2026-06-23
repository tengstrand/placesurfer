goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35245){
var map__35246 = p__35245;
var map__35246__$1 = cljs.core.__destructure_map(map__35246);
var m = map__35246__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35246__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35246__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35255_35653 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35256_35654 = null;
var count__35258_35655 = (0);
var i__35259_35656 = (0);
while(true){
if((i__35259_35656 < count__35258_35655)){
var f_35659 = chunk__35256_35654.cljs$core$IIndexed$_nth$arity$2(null,i__35259_35656);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35659], 0));


var G__35662 = seq__35255_35653;
var G__35663 = chunk__35256_35654;
var G__35664 = count__35258_35655;
var G__35665 = (i__35259_35656 + (1));
seq__35255_35653 = G__35662;
chunk__35256_35654 = G__35663;
count__35258_35655 = G__35664;
i__35259_35656 = G__35665;
continue;
} else {
var temp__5825__auto___35666 = cljs.core.seq(seq__35255_35653);
if(temp__5825__auto___35666){
var seq__35255_35668__$1 = temp__5825__auto___35666;
if(cljs.core.chunked_seq_QMARK_(seq__35255_35668__$1)){
var c__5548__auto___35669 = cljs.core.chunk_first(seq__35255_35668__$1);
var G__35671 = cljs.core.chunk_rest(seq__35255_35668__$1);
var G__35672 = c__5548__auto___35669;
var G__35673 = cljs.core.count(c__5548__auto___35669);
var G__35674 = (0);
seq__35255_35653 = G__35671;
chunk__35256_35654 = G__35672;
count__35258_35655 = G__35673;
i__35259_35656 = G__35674;
continue;
} else {
var f_35677 = cljs.core.first(seq__35255_35668__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35677], 0));


var G__35682 = cljs.core.next(seq__35255_35668__$1);
var G__35683 = null;
var G__35684 = (0);
var G__35685 = (0);
seq__35255_35653 = G__35682;
chunk__35256_35654 = G__35683;
count__35258_35655 = G__35684;
i__35259_35656 = G__35685;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35688 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35688], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35688)))?cljs.core.second(arglists_35688):arglists_35688)], 0));
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
var seq__35330_35710 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35331_35711 = null;
var count__35332_35712 = (0);
var i__35333_35713 = (0);
while(true){
if((i__35333_35713 < count__35332_35712)){
var vec__35381_35718 = chunk__35331_35711.cljs$core$IIndexed$_nth$arity$2(null,i__35333_35713);
var name_35719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35381_35718,(0),null);
var map__35384_35720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35381_35718,(1),null);
var map__35384_35721__$1 = cljs.core.__destructure_map(map__35384_35720);
var doc_35722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384_35721__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384_35721__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35719], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35723], 0));

if(cljs.core.truth_(doc_35722)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35722], 0));
} else {
}


var G__35735 = seq__35330_35710;
var G__35736 = chunk__35331_35711;
var G__35737 = count__35332_35712;
var G__35738 = (i__35333_35713 + (1));
seq__35330_35710 = G__35735;
chunk__35331_35711 = G__35736;
count__35332_35712 = G__35737;
i__35333_35713 = G__35738;
continue;
} else {
var temp__5825__auto___35749 = cljs.core.seq(seq__35330_35710);
if(temp__5825__auto___35749){
var seq__35330_35750__$1 = temp__5825__auto___35749;
if(cljs.core.chunked_seq_QMARK_(seq__35330_35750__$1)){
var c__5548__auto___35751 = cljs.core.chunk_first(seq__35330_35750__$1);
var G__35752 = cljs.core.chunk_rest(seq__35330_35750__$1);
var G__35753 = c__5548__auto___35751;
var G__35754 = cljs.core.count(c__5548__auto___35751);
var G__35755 = (0);
seq__35330_35710 = G__35752;
chunk__35331_35711 = G__35753;
count__35332_35712 = G__35754;
i__35333_35713 = G__35755;
continue;
} else {
var vec__35393_35756 = cljs.core.first(seq__35330_35750__$1);
var name_35757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35393_35756,(0),null);
var map__35396_35758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35393_35756,(1),null);
var map__35396_35759__$1 = cljs.core.__destructure_map(map__35396_35758);
var doc_35760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35396_35759__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35396_35759__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35757], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35761], 0));

if(cljs.core.truth_(doc_35760)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35760], 0));
} else {
}


var G__35769 = cljs.core.next(seq__35330_35750__$1);
var G__35770 = null;
var G__35771 = (0);
var G__35772 = (0);
seq__35330_35710 = G__35769;
chunk__35331_35711 = G__35770;
count__35332_35712 = G__35771;
i__35333_35713 = G__35772;
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

var seq__35400 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35401 = null;
var count__35402 = (0);
var i__35403 = (0);
while(true){
if((i__35403 < count__35402)){
var role = chunk__35401.cljs$core$IIndexed$_nth$arity$2(null,i__35403);
var temp__5825__auto___35797__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35797__$1)){
var spec_35806 = temp__5825__auto___35797__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35806)], 0));
} else {
}


var G__35814 = seq__35400;
var G__35815 = chunk__35401;
var G__35816 = count__35402;
var G__35817 = (i__35403 + (1));
seq__35400 = G__35814;
chunk__35401 = G__35815;
count__35402 = G__35816;
i__35403 = G__35817;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__35400);
if(temp__5825__auto____$1){
var seq__35400__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35400__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__35400__$1);
var G__35821 = cljs.core.chunk_rest(seq__35400__$1);
var G__35822 = c__5548__auto__;
var G__35823 = cljs.core.count(c__5548__auto__);
var G__35824 = (0);
seq__35400 = G__35821;
chunk__35401 = G__35822;
count__35402 = G__35823;
i__35403 = G__35824;
continue;
} else {
var role = cljs.core.first(seq__35400__$1);
var temp__5825__auto___35828__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35828__$2)){
var spec_35829 = temp__5825__auto___35828__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35829)], 0));
} else {
}


var G__35834 = cljs.core.next(seq__35400__$1);
var G__35835 = null;
var G__35836 = (0);
var G__35837 = (0);
seq__35400 = G__35834;
chunk__35401 = G__35835;
count__35402 = G__35836;
i__35403 = G__35837;
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
var map__35480 = datafied_throwable;
var map__35480__$1 = cljs.core.__destructure_map(map__35480);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35480__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35480__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35480__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35481 = cljs.core.last(via);
var map__35481__$1 = cljs.core.__destructure_map(map__35481);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35481__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35481__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35481__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35482 = data;
var map__35482__$1 = cljs.core.__destructure_map(map__35482);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35482__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35482__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35482__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35483 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35483__$1 = cljs.core.__destructure_map(map__35483);
var top_data = map__35483__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35483__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35492 = phase;
var G__35492__$1 = (((G__35492 instanceof cljs.core.Keyword))?G__35492.fqn:null);
switch (G__35492__$1) {
case "read-source":
var map__35496 = data;
var map__35496__$1 = cljs.core.__destructure_map(map__35496);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35496__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35496__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35497 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35497__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35497,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35497);
var G__35497__$2 = (cljs.core.truth_((function (){var fexpr__35499 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35499.cljs$core$IFn$_invoke$arity$1 ? fexpr__35499.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35499.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35497__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35497__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35497__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35497__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35501 = top_data;
var G__35501__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35501,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35501);
var G__35501__$2 = (cljs.core.truth_((function (){var fexpr__35503 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35503.cljs$core$IFn$_invoke$arity$1 ? fexpr__35503.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35503.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35501__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35501__$1);
var G__35501__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35501__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35501__$2);
var G__35501__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35501__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35501__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35501__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35501__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35506 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35506,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35506,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35506,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35506,(3),null);
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
var vec__35522 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35522,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35522,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35522,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35522,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35467_SHARP_){
var or__5025__auto__ = (p1__35467_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__35526 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35526.cljs$core$IFn$_invoke$arity$1 ? fexpr__35526.cljs$core$IFn$_invoke$arity$1(p1__35467_SHARP_) : fexpr__35526.call(null,p1__35467_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__35528 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35528__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35528,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35528);
var G__35528__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35528__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35528__$1);
var G__35528__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35528__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35528__$2);
var G__35528__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35528__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35528__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35528__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35528__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35492__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35546){
var map__35547 = p__35546;
var map__35547__$1 = cljs.core.__destructure_map(map__35547);
var triage_data = map__35547__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35547__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35547__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35547__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35547__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35547__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35547__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35547__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35547__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35569 = phase;
var G__35569__$1 = (((G__35569 instanceof cljs.core.Keyword))?G__35569.fqn:null);
switch (G__35569__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35575 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35576 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35577 = loc;
var G__35578 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35580_35992 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35581_35993 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35582_35994 = true;
var _STAR_print_fn_STAR__temp_val__35583_35995 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35582_35994);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35583_35995);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35537_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35537_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35581_35993);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35580_35992);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35575,G__35576,G__35577,G__35578) : format.call(null,G__35575,G__35576,G__35577,G__35578));

break;
case "macroexpansion":
var G__35587 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35588 = cause_type;
var G__35589 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35590 = loc;
var G__35591 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35587,G__35588,G__35589,G__35590,G__35591) : format.call(null,G__35587,G__35588,G__35589,G__35590,G__35591));

break;
case "compile-syntax-check":
var G__35593 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35594 = cause_type;
var G__35595 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35596 = loc;
var G__35597 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35593,G__35594,G__35595,G__35596,G__35597) : format.call(null,G__35593,G__35594,G__35595,G__35596,G__35597));

break;
case "compilation":
var G__35599 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35600 = cause_type;
var G__35601 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35602 = loc;
var G__35603 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35599,G__35600,G__35601,G__35602,G__35603) : format.call(null,G__35599,G__35600,G__35601,G__35602,G__35603));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35604 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35605 = symbol;
var G__35606 = loc;
var G__35607 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35609_36036 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35610_36037 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35611_36039 = true;
var _STAR_print_fn_STAR__temp_val__35612_36040 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35611_36039);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35612_36040);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35543_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35543_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35610_36037);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35609_36036);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35604,G__35605,G__35606,G__35607) : format.call(null,G__35604,G__35605,G__35606,G__35607));
} else {
var G__35624 = "Execution error%s at %s(%s).\n%s\n";
var G__35625 = cause_type;
var G__35626 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35627 = loc;
var G__35628 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35624,G__35625,G__35626,G__35627,G__35628) : format.call(null,G__35624,G__35625,G__35626,G__35627,G__35628));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35569__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
