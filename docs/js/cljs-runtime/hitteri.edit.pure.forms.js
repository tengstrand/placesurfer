goog.provide('hitteri.edit.pure.forms');
hitteri.edit.pure.forms.field_has_edge_whitespace_QMARK_ = (function hitteri$edit$pure$forms$field_has_edge_whitespace_QMARK_(v){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
return ((cljs.core.seq(s)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,clojure.string.trim(s))));
});
hitteri.edit.pure.forms.valid_update_name_QMARK_ = (function hitteri$edit$pure$forms$valid_update_name_QMARK_(v){
return cljs.core.boolean$(cljs.core.seq(clojure.string.trim(hitteri.edit.pure.coords.form_field_value_str(v))));
});
hitteri.edit.pure.forms.valid_homepage_QMARK_ = (function hitteri$edit$pure$forms$valid_homepage_QMARK_(v){
var s = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
return ((cljs.core.empty_QMARK_(s)) || (cljs.core.boolean$(cljs.core.re_matches(/^https?:\/\/\S+$/i,s))));
});
hitteri.edit.pure.forms.coordinate_field_error = (function hitteri$edit$pure$forms$coordinate_field_error(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38891 = arguments.length;
var i__5750__auto___38892 = (0);
while(true){
if((i__5750__auto___38892 < len__5749__auto___38891)){
args__5755__auto__.push((arguments[i__5750__auto___38892]));

var G__38893 = (i__5750__auto___38892 + (1));
i__5750__auto___38892 = G__38893;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((5) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((5)),(0),null)):null);
return hitteri.edit.pure.forms.coordinate_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5756__auto__);
});

(hitteri.edit.pure.forms.coordinate_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (v,min,max,label_key,t,p__38864){
var map__38865 = p__38864;
var map__38865__$1 = cljs.core.__destructure_map(map__38865);
var require_core_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38865__$1,new cljs.core.Keyword(null,"require-core?","require-core?",1542814381));
var raw = hitteri.edit.pure.coords.form_field_value_str(v);
var s = hitteri.edit.pure.coords.normalize_decimal_input(v);
var label = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(label_key) : t.call(null,label_key));
if(hitteri.edit.pure.forms.field_has_edge_whitespace_QMARK_(raw)){
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("validation","no-edge-whitespace","validation/no-edge-whitespace",-383316623)) : t.call(null,new cljs.core.Keyword("validation","no-edge-whitespace","validation/no-edge-whitespace",-383316623)));
} else {
if(cljs.core.empty_QMARK_(s)){
if(cljs.core.truth_(require_core_QMARK_)){
var G__38869 = new cljs.core.Keyword("validation","please-enter","validation/please-enter",616258541);
var G__38870 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),label], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__38869,G__38870) : t.call(null,G__38869,G__38870));
} else {
return null;
}
} else {
if((!(hitteri.edit.pure.coords.decimal_input_matches_QMARK_(s)))){
var G__38872 = new cljs.core.Keyword("validation","coordinate-range","validation/coordinate-range",2139002772);
var G__38873 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__38872,G__38873) : t.call(null,G__38872,G__38873));
} else {
var n = parseFloat(s);
if(cljs.core.truth_((function (){var or__5025__auto__ = isNaN(n);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (!((((min <= n)) && ((n <= max)))));
}
})())){
var G__38875 = new cljs.core.Keyword("validation","coordinate-range","validation/coordinate-range",2139002772);
var G__38876 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__38875,G__38876) : t.call(null,G__38875,G__38876));
} else {
return null;
}

}
}
}
}));

(hitteri.edit.pure.forms.coordinate_field_error.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(hitteri.edit.pure.forms.coordinate_field_error.cljs$lang$applyTo = (function (seq38857){
var G__38858 = cljs.core.first(seq38857);
var seq38857__$1 = cljs.core.next(seq38857);
var G__38859 = cljs.core.first(seq38857__$1);
var seq38857__$2 = cljs.core.next(seq38857__$1);
var G__38860 = cljs.core.first(seq38857__$2);
var seq38857__$3 = cljs.core.next(seq38857__$2);
var G__38861 = cljs.core.first(seq38857__$3);
var seq38857__$4 = cljs.core.next(seq38857__$3);
var G__38862 = cljs.core.first(seq38857__$4);
var seq38857__$5 = cljs.core.next(seq38857__$4);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38858,G__38859,G__38860,G__38861,G__38862,seq38857__$5);
}));

hitteri.edit.pure.forms.update_form_field_error = (function hitteri$edit$pure$forms$update_form_field_error(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38894 = arguments.length;
var i__5750__auto___38895 = (0);
while(true){
if((i__5750__auto___38895 < len__5749__auto___38894)){
args__5755__auto__.push((arguments[i__5750__auto___38895]));

var G__38896 = (i__5750__auto___38895 + (1));
i__5750__auto___38895 = G__38896;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return hitteri.edit.pure.forms.update_form_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(hitteri.edit.pure.forms.update_form_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (k,v,p__38880){
var map__38881 = p__38880;
var map__38881__$1 = cljs.core.__destructure_map(map__38881);
var require_core_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38881__$1,new cljs.core.Keyword(null,"require-core?","require-core?",1542814381));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38881__$1,new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hitteri.i18n.interface$.t,new cljs.core.Keyword(null,"en","en",88457073)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"name","name",1843675177))){
if(hitteri.edit.pure.forms.field_has_edge_whitespace_QMARK_(v)){
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("validation","no-edge-whitespace","validation/no-edge-whitespace",-383316623)) : t.call(null,new cljs.core.Keyword("validation","no-edge-whitespace","validation/no-edge-whitespace",-383316623)));
} else {
if((!(hitteri.edit.pure.forms.valid_update_name_QMARK_(v)))){
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("validation","name-required","validation/name-required",1377092510)) : t.call(null,new cljs.core.Keyword("validation","name-required","validation/name-required",1377092510)));
} else {
return null;
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"longitude","longitude",-1268876372))){
return hitteri.edit.pure.forms.coordinate_field_error.cljs$core$IFn$_invoke$arity$variadic(v,(-180),(180),new cljs.core.Keyword("common","longitude","common/longitude",-2061610691),t,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"require-core?","require-core?",1542814381),require_core_QMARK_], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"latitude","latitude",394867543))){
return hitteri.edit.pure.forms.coordinate_field_error.cljs$core$IFn$_invoke$arity$variadic(v,(-90),(90),new cljs.core.Keyword("common","latitude","common/latitude",742931812),t,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"require-core?","require-core?",1542814381),require_core_QMARK_], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"homepage","homepage",-1646828249))){
var raw = hitteri.edit.pure.coords.form_field_value_str(v);
if(hitteri.edit.pure.forms.field_has_edge_whitespace_QMARK_(raw)){
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("validation","no-edge-whitespace","validation/no-edge-whitespace",-383316623)) : t.call(null,new cljs.core.Keyword("validation","no-edge-whitespace","validation/no-edge-whitespace",-383316623)));
} else {
if(cljs.core.seq(clojure.string.trim(raw))){
if(hitteri.edit.pure.forms.valid_homepage_QMARK_(v)){
return null;
} else {
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("validation","homepage-url","validation/homepage-url",-279242684)) : t.call(null,new cljs.core.Keyword("validation","homepage-url","validation/homepage-url",-279242684)));
}
} else {
return null;
}
}
} else {
return null;

}
}
}
}
}));

(hitteri.edit.pure.forms.update_form_field_error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(hitteri.edit.pure.forms.update_form_field_error.cljs$lang$applyTo = (function (seq38877){
var G__38878 = cljs.core.first(seq38877);
var seq38877__$1 = cljs.core.next(seq38877);
var G__38879 = cljs.core.first(seq38877__$1);
var seq38877__$2 = cljs.core.next(seq38877__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38878,G__38879,seq38877__$2);
}));

hitteri.edit.pure.forms.compute_update_form_field_errors = (function hitteri$edit$pure$forms$compute_update_form_field_errors(var_args){
var G__38887 = arguments.length;
switch (G__38887) {
case 1:
return hitteri.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hitteri.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hitteri.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$1 = (function (form){
return hitteri.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2(form,false);
}));

(hitteri.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2 = (function (form,require_core_QMARK_){
return hitteri.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$3(form,require_core_QMARK_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hitteri.i18n.interface$.t,new cljs.core.Keyword(null,"en","en",88457073)));
}));

(hitteri.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$3 = (function (form,require_core_QMARK_,t){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
var temp__5825__auto__ = hitteri.edit.pure.forms.update_form_field_error.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,k),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"require-core?","require-core?",1542814381),require_core_QMARK_,new cljs.core.Keyword(null,"t","t",-1397832519),t], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var err = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,err], null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"homepage","homepage",-1646828249)], null)));
}));

(hitteri.edit.pure.forms.compute_update_form_field_errors.cljs$lang$maxFixedArity = 3);

hitteri.edit.pure.forms.valid_update_form_QMARK_ = (function hitteri$edit$pure$forms$valid_update_form_QMARK_(p__38888){
var map__38889 = p__38888;
var map__38889__$1 = cljs.core.__destructure_map(map__38889);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38889__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38889__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38889__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
return ((hitteri.edit.pure.forms.valid_update_name_QMARK_(name)) && (((hitteri.edit.pure.coords.valid_longitude_QMARK_(longitude)) && (hitteri.edit.pure.coords.valid_latitude_QMARK_(latitude)))));
});
/**
 * Build update form values from a Photon result, keeping homepage/description.
 */
hitteri.edit.pure.forms.form_from_search_result = (function hitteri$edit$pure$forms$form_from_search_result(result,update_form){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"google-url","google-url",1168346589),"",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"locality","locality",842809377),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"locality","locality",842809377).cljs$core$IFn$_invoke$arity$1(update_form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"homepage","homepage",-1646828249),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"homepage","homepage",-1646828249).cljs$core$IFn$_invoke$arity$1(update_form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(update_form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(result)),new cljs.core.Keyword(null,"latitude","latitude",394867543),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(result)),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"manual","manual",-237370608)], null);
});

//# sourceMappingURL=hitteri.edit.pure.forms.js.map
