goog.provide('hitteri.edit.pure.cells');
hitteri.edit.pure.cells.display_cell_value = (function hitteri$edit$pure$cells$display_cell_value(v){
if((v == null)){
return "";
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(v);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
});
hitteri.edit.pure.cells.source_label = (function hitteri$edit$pure$cells$source_label(source){
if((source instanceof cljs.core.Keyword)){
return cljs.core.name(source);
} else {
if((source instanceof cljs.core.Symbol)){
return cljs.core.name(source);
} else {
if(typeof source === 'string'){
return source;
} else {
return null;

}
}
}
});
hitteri.edit.pure.cells.source_icon_src = (function hitteri$edit$pure$cells$source_icon_src(source){
var temp__5825__auto__ = (function (){var G__41058 = hitteri.edit.pure.cells.source_label(source);
var G__41058__$1 = (((G__41058 == null))?null:clojure.string.lower_case(G__41058));
if((G__41058__$1 == null)){
return null;
} else {
return cljs.core.not_empty(G__41058__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var source_name = temp__5825__auto__;
return ["/images/source/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_name),".png"].join('');
} else {
return null;
}
});
hitteri.edit.pure.cells.row_marker_icon_src = (function hitteri$edit$pure$cells$row_marker_icon_src(values){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url-pin","url-pin",924738382),new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154).cljs$core$IFn$_invoke$arity$1(values))){
return "/images/edit.png";
} else {
return null;
}
});
/**
 * Prefer persisted source icon; fall back to URL-draft pin icon when source is unset.
 */
hitteri.edit.pure.cells.source_cell_icon_src = (function hitteri$edit$pure$cells$source_cell_icon_src(values){
var or__5025__auto__ = hitteri.edit.pure.cells.source_icon_src(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(values));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hitteri.edit.pure.cells.row_marker_icon_src(values);
}
});
hitteri.edit.pure.cells.source_display_name = (function hitteri$edit$pure$cells$source_display_name(source){
return hitteri.edit.pure.cells.source_label(source);
});
hitteri.edit.pure.cells.sort_indicator = (function hitteri$edit$pure$cells$sort_indicator(sort_field,sort_dir,column_key){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_field,column_key)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569))){
return " \u2191";
} else {
return " \u2193";
}
} else {
return null;
}
});
hitteri.edit.pure.cells.table_column_header = (function hitteri$edit$pure$cells$table_column_header(key,label,sort_field,sort_dir){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"action-icon","action-icon",-355725910))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.update-action-header-label","span.update-action-header-label",-63597784),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-action-header-icon","img.update-action-header-icon",691410403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/flash.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Action"], null)], null),hitteri.edit.pure.cells.sort_indicator(sort_field,sort_dir,key)], null);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),(function (){var or__5025__auto__ = hitteri.edit.pure.cells.sort_indicator(sort_field,sort_dir,key);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()].join('');
}
});
hitteri.edit.pure.cells.table_cell = (function hitteri$edit$pure$cells$table_cell(row_id,values,key){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"action-icon","action-icon",-355725910))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.update-action-cell","td.update-action-cell",-1989597990),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deleted","deleted",-510100639),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(values)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-row-action-icon","img.update-row-action-icon",-921848571),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/removed.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"deleted"], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(values)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-row-action-icon","img.update-row-action-icon",-921848571),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/added.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"added"], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"edited","edited",-262616624),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(values)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-row-action-icon","img.update-row-action-icon",-921848571),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/edited.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"edited"], null)], null):(cljs.core.truth_(new cljs.core.Keyword(null,"form-validation-warning?","form-validation-warning?",1321400166).cljs$core$IFn$_invoke$arity$1(values))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-row-action-icon","img.update-row-action-icon",-921848571),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/warning.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"validation warning"], null)], null):null))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"source-icon","source-icon",-769874141))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.update-source-cell","td.update-source-cell",-441082677),(function (){var temp__5825__auto__ = hitteri.edit.pure.cells.source_cell_icon_src(values);
if(cljs.core.truth_(temp__5825__auto__)){
var src = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-source-icon","img.update-source-icon",1825880713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"alt","alt",-3214426),hitteri.edit.pure.cells.display_cell_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(values);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "place";
}
})()),new cljs.core.Keyword(null,"title","title",636505583),hitteri.edit.pure.cells.display_cell_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(values);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "place";
}
})())], null)], null);
} else {
return null;
}
})()], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"meters","meters",-1644078545))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.update-meters-cell","td.update-meters-cell",-712102261),hitteri.edit.pure.cells.display_cell_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,key))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),hitteri.edit.pure.cells.display_cell_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,key))], null);

}
}
}
});

//# sourceMappingURL=hitteri.edit.pure.cells.js.map
