goog.provide('hitteri.i18n.interface$');
hitteri.i18n.interface$.default_locale = (function hitteri$i18n$interface$default_locale(){
return hitteri.i18n.core.default_locale;
});
hitteri.i18n.interface$.supported_locales = (function hitteri$i18n$interface$supported_locales(){
return hitteri.i18n.core.supported_locales;
});
hitteri.i18n.interface$.normalize_locale = (function hitteri$i18n$interface$normalize_locale(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38826 = arguments.length;
var i__5750__auto___38828 = (0);
while(true){
if((i__5750__auto___38828 < len__5749__auto___38826)){
args__5755__auto__.push((arguments[i__5750__auto___38828]));

var G__38829 = (i__5750__auto___38828 + (1));
i__5750__auto___38828 = G__38829;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.i18n.interface$.normalize_locale.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.i18n.interface$.normalize_locale.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.i18n.core.normalize_locale,args);
}));

(hitteri.i18n.interface$.normalize_locale.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.i18n.interface$.normalize_locale.cljs$lang$applyTo = (function (seq38807){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38807));
}));

hitteri.i18n.interface$.t = (function hitteri$i18n$interface$t(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38830 = arguments.length;
var i__5750__auto___38831 = (0);
while(true){
if((i__5750__auto___38831 < len__5749__auto___38830)){
args__5755__auto__.push((arguments[i__5750__auto___38831]));

var G__38832 = (i__5750__auto___38831 + (1));
i__5750__auto___38831 = G__38832;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.i18n.core.t,args);
}));

(hitteri.i18n.interface$.t.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.i18n.interface$.t.cljs$lang$applyTo = (function (seq38809){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38809));
}));

hitteri.i18n.interface$.read_locale_BANG_ = (function hitteri$i18n$interface$read_locale_BANG_(){
return hitteri.i18n.core.read_locale_BANG_();
});
hitteri.i18n.interface$.save_locale_BANG_ = (function hitteri$i18n$interface$save_locale_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38834 = arguments.length;
var i__5750__auto___38835 = (0);
while(true){
if((i__5750__auto___38835 < len__5749__auto___38834)){
args__5755__auto__.push((arguments[i__5750__auto___38835]));

var G__38836 = (i__5750__auto___38835 + (1));
i__5750__auto___38835 = G__38836;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.i18n.interface$.save_locale_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.i18n.interface$.save_locale_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.i18n.core.save_locale_BANG_,args);
}));

(hitteri.i18n.interface$.save_locale_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.i18n.interface$.save_locale_BANG_.cljs$lang$applyTo = (function (seq38811){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38811));
}));

hitteri.i18n.interface$.read_settings_BANG_ = (function hitteri$i18n$interface$read_settings_BANG_(){
return hitteri.i18n.pure.storage.read_settings_BANG_();
});
hitteri.i18n.interface$.save_settings_BANG_ = (function hitteri$i18n$interface$save_settings_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38837 = arguments.length;
var i__5750__auto___38838 = (0);
while(true){
if((i__5750__auto___38838 < len__5749__auto___38837)){
args__5755__auto__.push((arguments[i__5750__auto___38838]));

var G__38839 = (i__5750__auto___38838 + (1));
i__5750__auto___38838 = G__38839;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.i18n.interface$.save_settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.i18n.interface$.save_settings_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.i18n.pure.storage.save_settings_BANG_,args);
}));

(hitteri.i18n.interface$.save_settings_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.i18n.interface$.save_settings_BANG_.cljs$lang$applyTo = (function (seq38818){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38818));
}));

hitteri.i18n.interface$.topic_label = (function hitteri$i18n$interface$topic_label(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38840 = arguments.length;
var i__5750__auto___38841 = (0);
while(true){
if((i__5750__auto___38841 < len__5749__auto___38840)){
args__5755__auto__.push((arguments[i__5750__auto___38841]));

var G__38844 = (i__5750__auto___38841 + (1));
i__5750__auto___38841 = G__38844;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.i18n.interface$.topic_label.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.i18n.interface$.topic_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.i18n.core.topic_label,args);
}));

(hitteri.i18n.interface$.topic_label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.i18n.interface$.topic_label.cljs$lang$applyTo = (function (seq38822){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38822));
}));


//# sourceMappingURL=hitteri.i18n.interface.js.map
