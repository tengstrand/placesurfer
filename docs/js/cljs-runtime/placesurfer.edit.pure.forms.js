goog.provide('placesurfer.edit.pure.forms');
placesurfer.edit.pure.forms.field_has_edge_whitespace_QMARK_ = (function placesurfer$edit$pure$forms$field_has_edge_whitespace_QMARK_(v){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
return ((cljs.core.seq(s)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,clojure.string.trim(s))));
});
placesurfer.edit.pure.forms.valid_update_name_QMARK_ = (function placesurfer$edit$pure$forms$valid_update_name_QMARK_(v){
return cljs.core.boolean$(cljs.core.seq(clojure.string.trim(placesurfer.edit.pure.coords.form_field_value_str(v))));
});
placesurfer.edit.pure.forms.valid_homepage_QMARK_ = (function placesurfer$edit$pure$forms$valid_homepage_QMARK_(v){
var s = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
return ((cljs.core.empty_QMARK_(s)) || (cljs.core.boolean$(cljs.core.re_matches(/^https?:\/\/\S+$/i,s))));
});
placesurfer.edit.pure.forms.coordinate_field_error = (function placesurfer$edit$pure$forms$coordinate_field_error(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38874 = arguments.length;
var i__5750__auto___38875 = (0);
while(true){
if((i__5750__auto___38875 < len__5749__auto___38874)){
args__5755__auto__.push((arguments[i__5750__auto___38875]));

var G__38876 = (i__5750__auto___38875 + (1));
i__5750__auto___38875 = G__38876;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((5) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((5)),(0),null)):null);
return placesurfer.edit.pure.forms.coordinate_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5756__auto__);
});

(placesurfer.edit.pure.forms.coordinate_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (v,min,max,label_key,t,p__38826){
var map__38827 = p__38826;
var map__38827__$1 = cljs.core.__destructure_map(map__38827);
var require_core_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38827__$1,new cljs.core.Keyword(null,"require-core?","require-core?",1542814381));
var raw = placesurfer.edit.pure.coords.form_field_value_str(v);
var s = placesurfer.edit.pure.coords.normalize_decimal_input(v);
var label = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(label_key) : t.call(null,label_key));
if(placesurfer.edit.pure.forms.field_has_edge_whitespace_QMARK_(raw)){
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("validation","no-edge-whitespace","validation/no-edge-whitespace",-383316623)) : t.call(null,new cljs.core.Keyword("validation","no-edge-whitespace","validation/no-edge-whitespace",-383316623)));
} else {
if(cljs.core.empty_QMARK_(s)){
if(cljs.core.truth_(require_core_QMARK_)){
var G__38828 = new cljs.core.Keyword("validation","please-enter","validation/please-enter",616258541);
var G__38829 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),label], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__38828,G__38829) : t.call(null,G__38828,G__38829));
} else {
return null;
}
} else {
if((!(placesurfer.edit.pure.coords.decimal_input_matches_QMARK_(s)))){
var G__38831 = new cljs.core.Keyword("validation","coordinate-range","validation/coordinate-range",2139002772);
var G__38832 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__38831,G__38832) : t.call(null,G__38831,G__38832));
} else {
var n = parseFloat(s);
if(cljs.core.truth_((function (){var or__5025__auto__ = isNaN(n);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (!((((min <= n)) && ((n <= max)))));
}
})())){
var G__38834 = new cljs.core.Keyword("validation","coordinate-range","validation/coordinate-range",2139002772);
var G__38835 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__38834,G__38835) : t.call(null,G__38834,G__38835));
} else {
return null;
}

}
}
}
}));

(placesurfer.edit.pure.forms.coordinate_field_error.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(placesurfer.edit.pure.forms.coordinate_field_error.cljs$lang$applyTo = (function (seq38818){
var G__38819 = cljs.core.first(seq38818);
var seq38818__$1 = cljs.core.next(seq38818);
var G__38820 = cljs.core.first(seq38818__$1);
var seq38818__$2 = cljs.core.next(seq38818__$1);
var G__38821 = cljs.core.first(seq38818__$2);
var seq38818__$3 = cljs.core.next(seq38818__$2);
var G__38822 = cljs.core.first(seq38818__$3);
var seq38818__$4 = cljs.core.next(seq38818__$3);
var G__38823 = cljs.core.first(seq38818__$4);
var seq38818__$5 = cljs.core.next(seq38818__$4);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38819,G__38820,G__38821,G__38822,G__38823,seq38818__$5);
}));

placesurfer.edit.pure.forms.update_form_field_error = (function placesurfer$edit$pure$forms$update_form_field_error(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38879 = arguments.length;
var i__5750__auto___38880 = (0);
while(true){
if((i__5750__auto___38880 < len__5749__auto___38879)){
args__5755__auto__.push((arguments[i__5750__auto___38880]));

var G__38881 = (i__5750__auto___38880 + (1));
i__5750__auto___38880 = G__38881;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return placesurfer.edit.pure.forms.update_form_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(placesurfer.edit.pure.forms.update_form_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (k,v,p__38840){
var map__38841 = p__38840;
var map__38841__$1 = cljs.core.__destructure_map(map__38841);
var require_core_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38841__$1,new cljs.core.Keyword(null,"require-core?","require-core?",1542814381));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38841__$1,new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(placesurfer.i18n.interface$.t,new cljs.core.Keyword(null,"en","en",88457073)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"name","name",1843675177))){
if(placesurfer.edit.pure.forms.field_has_edge_whitespace_QMARK_(v)){
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("validation","no-edge-whitespace","validation/no-edge-whitespace",-383316623)) : t.call(null,new cljs.core.Keyword("validation","no-edge-whitespace","validation/no-edge-whitespace",-383316623)));
} else {
if((!(placesurfer.edit.pure.forms.valid_update_name_QMARK_(v)))){
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("validation","name-required","validation/name-required",1377092510)) : t.call(null,new cljs.core.Keyword("validation","name-required","validation/name-required",1377092510)));
} else {
return null;
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"longitude","longitude",-1268876372))){
return placesurfer.edit.pure.forms.coordinate_field_error.cljs$core$IFn$_invoke$arity$variadic(v,(-180),(180),new cljs.core.Keyword("common","longitude","common/longitude",-2061610691),t,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"require-core?","require-core?",1542814381),require_core_QMARK_], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"latitude","latitude",394867543))){
return placesurfer.edit.pure.forms.coordinate_field_error.cljs$core$IFn$_invoke$arity$variadic(v,(-90),(90),new cljs.core.Keyword("common","latitude","common/latitude",742931812),t,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"require-core?","require-core?",1542814381),require_core_QMARK_], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"homepage","homepage",-1646828249))){
var raw = placesurfer.edit.pure.coords.form_field_value_str(v);
if(placesurfer.edit.pure.forms.field_has_edge_whitespace_QMARK_(raw)){
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("validation","no-edge-whitespace","validation/no-edge-whitespace",-383316623)) : t.call(null,new cljs.core.Keyword("validation","no-edge-whitespace","validation/no-edge-whitespace",-383316623)));
} else {
if(cljs.core.seq(clojure.string.trim(raw))){
if(placesurfer.edit.pure.forms.valid_homepage_QMARK_(v)){
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

(placesurfer.edit.pure.forms.update_form_field_error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(placesurfer.edit.pure.forms.update_form_field_error.cljs$lang$applyTo = (function (seq38837){
var G__38838 = cljs.core.first(seq38837);
var seq38837__$1 = cljs.core.next(seq38837);
var G__38839 = cljs.core.first(seq38837__$1);
var seq38837__$2 = cljs.core.next(seq38837__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38838,G__38839,seq38837__$2);
}));

placesurfer.edit.pure.forms.compute_update_form_field_errors = (function placesurfer$edit$pure$forms$compute_update_form_field_errors(var_args){
var G__38851 = arguments.length;
switch (G__38851) {
case 1:
return placesurfer.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return placesurfer.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$1 = (function (form){
return placesurfer.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2(form,false);
}));

(placesurfer.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$2 = (function (form,require_core_QMARK_){
return placesurfer.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$3(form,require_core_QMARK_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(placesurfer.i18n.interface$.t,new cljs.core.Keyword(null,"en","en",88457073)));
}));

(placesurfer.edit.pure.forms.compute_update_form_field_errors.cljs$core$IFn$_invoke$arity$3 = (function (form,require_core_QMARK_,t){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
var temp__5825__auto__ = placesurfer.edit.pure.forms.update_form_field_error.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,k),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"require-core?","require-core?",1542814381),require_core_QMARK_,new cljs.core.Keyword(null,"t","t",-1397832519),t], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var err = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,err], null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"homepage","homepage",-1646828249)], null)));
}));

(placesurfer.edit.pure.forms.compute_update_form_field_errors.cljs$lang$maxFixedArity = 3);

placesurfer.edit.pure.forms.valid_update_form_QMARK_ = (function placesurfer$edit$pure$forms$valid_update_form_QMARK_(p__38866){
var map__38867 = p__38866;
var map__38867__$1 = cljs.core.__destructure_map(map__38867);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38867__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38867__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38867__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
return ((placesurfer.edit.pure.forms.valid_update_name_QMARK_(name)) && (((placesurfer.edit.pure.coords.valid_longitude_QMARK_(longitude)) && (placesurfer.edit.pure.coords.valid_latitude_QMARK_(latitude)))));
});
/**
 * Build update form values from a Photon result, keeping homepage/description.
 */
placesurfer.edit.pure.forms.form_from_search_result = (function placesurfer$edit$pure$forms$form_from_search_result(result,update_form){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"google-url","google-url",1168346589),"",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"location","location",1815599388),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(update_form);
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

//# sourceMappingURL=placesurfer.edit.pure.forms.js.map
