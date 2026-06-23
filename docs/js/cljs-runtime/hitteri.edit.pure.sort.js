goog.provide('hitteri.edit.pure.sort');
/**
 * Maps UI sort keys to row data keys.
 */
hitteri.edit.pure.sort.table_sort_data_field = (function hitteri$edit$pure$sort$table_sort_data_field(sort_key){
var G__38824 = sort_key;
var G__38824__$1 = (((G__38824 instanceof cljs.core.Keyword))?G__38824.fqn:null);
switch (G__38824__$1) {
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
hitteri.edit.pure.sort.compare_field_values = (function hitteri$edit$pure$sort$compare_field_values(a,b){
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

//# sourceMappingURL=hitteri.edit.pure.sort.js.map
