goog.provide('placesurfer.edit.interface$.forms');
placesurfer.edit.interface$.forms.update_form_field_error = (function placesurfer$edit$interface$forms$update_form_field_error(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39059 = arguments.length;
var i__5750__auto___39060 = (0);
while(true){
if((i__5750__auto___39060 < len__5749__auto___39059)){
args__5755__auto__.push((arguments[i__5750__auto___39060]));

var G__39061 = (i__5750__auto___39060 + (1));
i__5750__auto___39060 = G__39061;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return placesurfer.edit.interface$.forms.update_form_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(placesurfer.edit.interface$.forms.update_form_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (k,v,opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(placesurfer.edit.pure.forms.update_form_field_error,k,v,opts);
}));

(placesurfer.edit.interface$.forms.update_form_field_error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(placesurfer.edit.interface$.forms.update_form_field_error.cljs$lang$applyTo = (function (seq39053){
var G__39054 = cljs.core.first(seq39053);
var seq39053__$1 = cljs.core.next(seq39053);
var G__39055 = cljs.core.first(seq39053__$1);
var seq39053__$2 = cljs.core.next(seq39053__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39054,G__39055,seq39053__$2);
}));

placesurfer.edit.interface$.forms.compute_update_form_field_errors = (function placesurfer$edit$interface$forms$compute_update_form_field_errors(var_args){
var G__39057 = arguments.length;
switch (G__39057) {
case 1:
return placesurfer.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return placesurfer.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$1 = (function (form){
return placesurfer.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$1(form);
}));

(placesurfer.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2 = (function (form,require_core_QMARK_){
return placesurfer.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2(form,require_core_QMARK_);
}));

(placesurfer.edit.interface$.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$3 = (function (form,require_core_QMARK_,t){
return placesurfer.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$3(form,require_core_QMARK_,t);
}));

(placesurfer.edit.interface$.forms.compute_update_form_field_errors.cljs$lang$maxFixedArity = 3);

placesurfer.edit.interface$.forms.valid_update_name_QMARK_ = (function placesurfer$edit$interface$forms$valid_update_name_QMARK_(v){
return placesurfer.edit.pure.forms.valid_update_name_QMARK_(v);
});
placesurfer.edit.interface$.forms.valid_homepage_QMARK_ = (function placesurfer$edit$interface$forms$valid_homepage_QMARK_(v){
return placesurfer.edit.pure.forms.valid_homepage_QMARK_(v);
});
placesurfer.edit.interface$.forms.valid_update_form_QMARK_ = (function placesurfer$edit$interface$forms$valid_update_form_QMARK_(form){
return placesurfer.edit.pure.forms.valid_update_form_QMARK_(form);
});

//# sourceMappingURL=placesurfer.edit.interface.forms.js.map
