goog.provide('hitteri.edit.handlers.description_trace');
hitteri.edit.handlers.description_trace.trace_storage_key = "hitteri.trace-description";
hitteri.edit.handlers.description_trace.listener_data_prop = "__hitteriDescriptionListeners";
hitteri.edit.handlers.description_trace.max_trace_entries = (30);
if((typeof hitteri !== 'undefined') && (typeof hitteri.edit !== 'undefined') && (typeof hitteri.edit.handlers !== 'undefined') && (typeof hitteri.edit.handlers.description_trace !== 'undefined') && (typeof hitteri.edit.handlers.description_trace._BANG_trace_buffer !== 'undefined')){
} else {
hitteri.edit.handlers.description_trace._BANG_trace_buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
hitteri.edit.handlers.description_trace.enabled_QMARK_ = (function hitteri$edit$handlers$description_trace$enabled_QMARK_(){
try{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",localStorage.getItem(hitteri.edit.handlers.description_trace.trace_storage_key));
}catch (e39079){var _ = e39079;
return false;
}});
hitteri.edit.handlers.description_trace.main_js_version = (function hitteri$edit$handlers$description_trace$main_js_version(){
try{var G__39082 = document.querySelector("script[src*=\"js/main.js\"]");
var G__39082__$1 = (((G__39082 == null))?null:G__39082.src);
var G__39082__$2 = (((G__39082__$1 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__39082__$1,/v=/));
if((G__39082__$2 == null)){
return null;
} else {
return cljs.core.second(G__39082__$2);
}
}catch (e39081){var _ = e39081;
return null;
}});
hitteri.edit.handlers.description_trace.selected_row = (function hitteri$edit$handlers$description_trace$selected_row(s){
var temp__5825__auto__ = new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__5825__auto__)){
var row_id = temp__5825__auto__;
return cljs.core.some((function (p1__39085_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(p1__39085_SHARP_),row_id)){
return p1__39085_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
});
hitteri.edit.handlers.description_trace.snapshot = (function hitteri$edit$handlers$description_trace$snapshot(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39143 = arguments.length;
var i__5750__auto___39144 = (0);
while(true){
if((i__5750__auto___39144 < len__5749__auto___39143)){
args__5755__auto__.push((arguments[i__5750__auto___39144]));

var G__39145 = (i__5750__auto___39144 + (1));
i__5750__auto___39144 = G__39145;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return hitteri.edit.handlers.description_trace.snapshot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(hitteri.edit.handlers.description_trace.snapshot.cljs$core$IFn$_invoke$arity$variadic = (function (event,p__39100){
var vec__39102 = p__39100;
var map__39105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39102,(0),null);
var map__39105__$1 = cljs.core.__destructure_map(map__39105);
var form_description_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39105__$1,new cljs.core.Keyword(null,"form-description-before","form-description-before",2140935025));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39105__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var s = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
var el = (cljs.core.truth_(document)?document.getElementById("update-description"):null);
var row = hitteri.edit.handlers.description_trace.selected_row(s);
var disk_baseline = new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529).cljs$core$IFn$_invoke$arity$1(s);
var G__39106 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mainJsVersion","mainJsVersion",478873410),new cljs.core.Keyword(null,"selectedRowId","selectedRowId",840021540),new cljs.core.Keyword(null,"rowDiffers","rowDiffers",915136425),new cljs.core.Keyword(null,"baselineDescription","baselineDescription",-1362373366),new cljs.core.Keyword(null,"domCanonical","domCanonical",1090544911),new cljs.core.Keyword(null,"editedCount","editedCount",-252556433),new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"formDescription","formDescription",-774059503),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"formDescriptionBefore","formDescriptionBefore",-374027437),new cljs.core.Keyword(null,"rowDescription","rowDescription",-1807762284),new cljs.core.Keyword(null,"listenersMounted","listenersMounted",-1714611724),new cljs.core.Keyword(null,"editorFocused","editorFocused",-170477354)],[hitteri.edit.handlers.description_trace.main_js_version(),new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(s),cljs.core.boolean$((function (){var and__5023__auto__ = row;
if(cljs.core.truth_(and__5023__auto__)){
return hitteri.edit.interface$.rows.row_differs_from_disk_baseline_QMARK_(row,disk_baseline);
} else {
return and__5023__auto__;
}
})()),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),new cljs.core.Keyword(null,"description","description",-1428560544)], null)),(cljs.core.truth_(el)?hitteri.html.interface$.description_field.read_editor_canonical.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([el], 0)):null),new cljs.core.Keyword(null,"edited","edited",-262616624).cljs$core$IFn$_invoke$arity$1(hitteri.edit.interface$.model.dataset_change_counts(s)),Date.now(),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(s)),(((event instanceof cljs.core.Keyword))?cljs.core.name(event):cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)),form_description_before,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(row),cljs.core.boolean$((function (){var and__5023__auto__ = el;
if(cljs.core.truth_(and__5023__auto__)){
return (el[hitteri.edit.handlers.description_trace.listener_data_prop]);
} else {
return and__5023__auto__;
}
})()),cljs.core.boolean$((function (){var and__5023__auto__ = el;
if(cljs.core.truth_(and__5023__auto__)){
return hitteri.html.interface$.description_field.editor_contains_focus_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([el], 0));
} else {
return and__5023__auto__;
}
})())]);
if(cljs.core.truth_(extra)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__39106,extra], 0));
} else {
return G__39106;
}
}));

(hitteri.edit.handlers.description_trace.snapshot.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hitteri.edit.handlers.description_trace.snapshot.cljs$lang$applyTo = (function (seq39088){
var G__39089 = cljs.core.first(seq39088);
var seq39088__$1 = cljs.core.next(seq39088);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39089,seq39088__$1);
}));

hitteri.edit.handlers.description_trace.trace_BANG_ = (function hitteri$edit$handlers$description_trace$trace_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39157 = arguments.length;
var i__5750__auto___39158 = (0);
while(true){
if((i__5750__auto___39158 < len__5749__auto___39157)){
args__5755__auto__.push((arguments[i__5750__auto___39158]));

var G__39159 = (i__5750__auto___39158 + (1));
i__5750__auto___39158 = G__39159;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return hitteri.edit.handlers.description_trace.trace_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(hitteri.edit.handlers.description_trace.trace_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (event,p__39123){
var vec__39124 = p__39123;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39124,(0),null);
if(cljs.core.truth_(hitteri.edit.handlers.description_trace.enabled_QMARK_())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.edit.handlers.description_trace._BANG_trace_buffer,(function (buf){
var entry = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hitteri.edit.handlers.description_trace.snapshot,event,opts);
var next = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(buf),entry);
if((cljs.core.count(next) <= hitteri.edit.handlers.description_trace.max_trace_entries)){
return next;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(next,(- hitteri.edit.handlers.description_trace.max_trace_entries));
}
}));
} else {
return null;
}
}));

(hitteri.edit.handlers.description_trace.trace_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hitteri.edit.handlers.description_trace.trace_BANG_.cljs$lang$applyTo = (function (seq39119){
var G__39120 = cljs.core.first(seq39119);
var seq39119__$1 = cljs.core.next(seq39119);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39120,seq39119__$1);
}));

hitteri.edit.handlers.description_trace.trace_buffer = (function hitteri$edit$handlers$description_trace$trace_buffer(){
return cljs.core.deref(hitteri.edit.handlers.description_trace._BANG_trace_buffer);
});
hitteri.edit.handlers.description_trace.clear_trace_BANG_ = (function hitteri$edit$handlers$description_trace$clear_trace_BANG_(){
return cljs.core.reset_BANG_(hitteri.edit.handlers.description_trace._BANG_trace_buffer,cljs.core.PersistentVector.EMPTY);
});
hitteri.edit.handlers.description_trace.diagnostics = (function hitteri$edit$handlers$description_trace$diagnostics(s){
var el = (cljs.core.truth_(document)?document.getElementById("update-description"):null);
var row = hitteri.edit.handlers.description_trace.selected_row(s);
var disk_baseline = new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529).cljs$core$IFn$_invoke$arity$1(s);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"descriptionTrace","descriptionTrace",-152866879),cljs.core.vec(cljs.core.deref(hitteri.edit.handlers.description_trace._BANG_trace_buffer)),new cljs.core.Keyword(null,"updateEditedCount","updateEditedCount",-885511396),new cljs.core.Keyword(null,"edited","edited",-262616624).cljs$core$IFn$_invoke$arity$1(hitteri.edit.interface$.model.dataset_change_counts(s)),new cljs.core.Keyword(null,"updateRowDescription","updateRowDescription",-1013787356),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"updateDescriptionDiffersFromDisk","updateDescriptionDiffersFromDisk",1471024627),cljs.core.boolean$((function (){var and__5023__auto__ = row;
if(cljs.core.truth_(and__5023__auto__)){
return hitteri.edit.interface$.rows.row_differs_from_disk_baseline_QMARK_(row,disk_baseline);
} else {
return and__5023__auto__;
}
})()),new cljs.core.Keyword(null,"descriptionListenersMounted","descriptionListenersMounted",-1651143096),cljs.core.boolean$((function (){var and__5023__auto__ = el;
if(cljs.core.truth_(and__5023__auto__)){
return (el[hitteri.edit.handlers.description_trace.listener_data_prop]);
} else {
return and__5023__auto__;
}
})()),new cljs.core.Keyword(null,"descriptionDomCanonical","descriptionDomCanonical",-158070827),(cljs.core.truth_(el)?hitteri.html.interface$.description_field.read_editor_canonical.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([el], 0)):null),new cljs.core.Keyword(null,"descriptionTraceEnabled","descriptionTraceEnabled",-717507127),hitteri.edit.handlers.description_trace.enabled_QMARK_()], null);
});

//# sourceMappingURL=hitteri.edit.handlers.description_trace.js.map
