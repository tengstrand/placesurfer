goog.provide('placesurfer.edit.pure.columns');
placesurfer.edit.pure.columns.data_column_label = (function placesurfer$edit$pure$columns$data_column_label(k,t){
var G__38811 = k;
var G__38811__$1 = (((G__38811 instanceof cljs.core.Keyword))?G__38811.fqn:null);
switch (G__38811__$1) {
case "name":
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","name","common/name",925592102)) : t.call(null,new cljs.core.Keyword("common","name","common/name",925592102)));

break;
case "locality":
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","locality","common/locality",1669293502)) : t.call(null,new cljs.core.Keyword("common","locality","common/locality",1669293502)));

break;
case "homepage":
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","homepage","common/homepage",-317319372)) : t.call(null,new cljs.core.Keyword("common","homepage","common/homepage",-317319372)));

break;
case "longitude":
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","longitude","common/longitude",-2061610691)) : t.call(null,new cljs.core.Keyword("common","longitude","common/longitude",-2061610691)));

break;
case "latitude":
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","latitude","common/latitude",742931812)) : t.call(null,new cljs.core.Keyword("common","latitude","common/latitude",742931812)));

break;
case "description":
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","description","common/description",-1682657429)) : t.call(null,new cljs.core.Keyword("common","description","common/description",-1682657429)));

break;
default:
return clojure.string.capitalize(cljs.core.name(k));

}
});
placesurfer.edit.pure.columns.column_label = (function placesurfer$edit$pure$columns$column_label(var_args){
var G__38814 = arguments.length;
switch (G__38814) {
case 1:
return placesurfer.edit.pure.columns.column_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.edit.pure.columns.column_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.edit.pure.columns.column_label.cljs$core$IFn$_invoke$arity$1 = (function (k){
return placesurfer.edit.pure.columns.column_label.cljs$core$IFn$_invoke$arity$2(k,null);
}));

(placesurfer.edit.pure.columns.column_label.cljs$core$IFn$_invoke$arity$2 = (function (k,t){
var G__38817 = k;
var G__38817__$1 = (((G__38817 instanceof cljs.core.Keyword))?G__38817.fqn:null);
switch (G__38817__$1) {
case "action-icon":
return "";

break;
case "source-icon":
if(cljs.core.truth_(t)){
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","column-source","update/column-source",806467838)) : t.call(null,new cljs.core.Keyword("update","column-source","update/column-source",806467838)));
} else {
return "Source";
}

break;
case "meters":
if(cljs.core.truth_(t)){
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","column-meters","update/column-meters",308940481)) : t.call(null,new cljs.core.Keyword("update","column-meters","update/column-meters",308940481)));
} else {
return "Meters";
}

break;
default:
if(cljs.core.truth_(t)){
return placesurfer.edit.pure.columns.data_column_label(k,t);
} else {
return clojure.string.capitalize(cljs.core.name(k));
}

}
}));

(placesurfer.edit.pure.columns.column_label.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=placesurfer.edit.pure.columns.js.map
