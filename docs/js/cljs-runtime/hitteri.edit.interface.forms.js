goog.provide('hitteri.edit.interface$.forms');
hitteri.edit.interface$.forms.update_form_field_error = (function hitteri$edit$interface$forms$update_form_field_error(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39060 = arguments.length;
var i__5750__auto___39061 = (0);
while(true){
if((i__5750__auto___39061 < len__5749__auto___39060)){
args__5755__auto__.push((arguments[i__5750__auto___39061]));

var G__39062 = (i__5750__auto___39061 + (1));
i__5750__auto___39061 = G__39062;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return hitteri.edit.interface$.forms.update_form_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(hitteri.edit.interface$.forms.update_form_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (k,v,opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(hitteri.edit.pure.forms.update_form_field_error,k,v,opts);
}));

(hitteri.edit.interface$.forms.update_form_field_error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(hitteri.edit.interface$.forms.update_form_field_error.cljs$lang$applyTo = (function (seq39054){
var G__39055 = cljs.core.first(seq39054);
var seq39054__$1 = cljs.core.next(seq39054);
var G__39056 = cljs.core.first(seq39054__$1);
var seq39054__$2 = cljs.core.next(seq39054__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39055,G__39056,seq39054__$2);
}));

hitteri.edit.interface$.forms.compute_update_form_field_errors = (function hitteri$edit$interface$forms$compute_update_form_field_errors(var_args){
var G__39059 = arguments.length;
switch (G__39059) {
case 1:
return hitteri.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hitteri.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hitteri.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$1 = (function (form){
return hitteri.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$1(form);
}));

(hitteri.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2 = (function (form,require_core_QMARK_){
return hitteri.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2(form,require_core_QMARK_);
}));

(hitteri.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$3 = (function (form,require_core_QMARK_,t){
return hitteri.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$3(form,require_core_QMARK_,t);
}));

(hitteri.edit.interface$.forms.compute_update_form_field_errors.cljs$lang$maxFixedArity = 3);

hitteri.edit.interface$.forms.valid_update_name_QMARK_ = (function hitteri$edit$interface$forms$valid_update_name_QMARK_(v){
return hitteri.edit.pure.forms.valid_update_name_QMARK_(v);
});
hitteri.edit.interface$.forms.valid_homepage_QMARK_ = (function hitteri$edit$interface$forms$valid_homepage_QMARK_(v){
return hitteri.edit.pure.forms.valid_homepage_QMARK_(v);
});
hitteri.edit.interface$.forms.valid_update_form_QMARK_ = (function hitteri$edit$interface$forms$valid_update_form_QMARK_(form){
return hitteri.edit.pure.forms.valid_update_form_QMARK_(form);
});

//# sourceMappingURL=hitteri.edit.interface.forms.js.map
