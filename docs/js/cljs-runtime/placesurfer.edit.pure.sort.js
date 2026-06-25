goog.provide('placesurfer.edit.pure.sort');
/**
 * Maps UI sort keys to row data keys.
 */
placesurfer.edit.pure.sort.table_sort_data_field = (function placesurfer$edit$pure$sort$table_sort_data_field(sort_key){
var G__38891 = sort_key;
var G__38891__$1 = (((G__38891 instanceof cljs.core.Keyword))?G__38891.fqn:null);
switch (G__38891__$1) {
case "action-icon":
return new cljs.core.Keyword(null,"action","action",-811238024);

break;
case "source-icon":
return new cljs.core.Keyword(null,"source","source",-433931539);

break;
case "distance":
return new cljs.core.Keyword(null,"meters","meters",-1644078545);

break;
default:
return sort_key;

}
});
/**
 * Sort helper: numbers asc, nils last, strings case-insensitive.
 */
placesurfer.edit.pure.sort.compare_field_values = (function placesurfer$edit$pure$sort$compare_field_values(a,b){
if(((typeof a === 'number') && (typeof b === 'number'))){
return cljs.core.compare(a,b);
} else {
if((a == null)){
return (1);
} else {
if((b == null)){
return (-1);
} else {
return cljs.core.compare(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)),clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)));

}
}
}
});

//# sourceMappingURL=placesurfer.edit.pure.sort.js.map
