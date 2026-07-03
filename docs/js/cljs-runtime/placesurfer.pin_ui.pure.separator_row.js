goog.provide('placesurfer.pin_ui.pure.separator_row');
placesurfer.pin_ui.pure.separator_row.content = (function placesurfer$pin_ui$pure$separator_row$content(label){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-separator-content","div.pin-separator-content",14327724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pin-separator-label","span.pin-separator-label",227633950),label], null)], null);
});
placesurfer.pin_ui.pure.separator_row.table_row = (function placesurfer$pin_ui$pure$separator_row$table_row(p__40906){
var map__40907 = p__40906;
var map__40907__$1 = cljs.core.__destructure_map(map__40907);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40907__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40907__$1,new cljs.core.Keyword(null,"values","values",372645556));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40907__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var show_drag_handle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40907__$1,new cljs.core.Keyword(null,"show-drag-handle?","show-drag-handle?",1932372815),true);
var drag_from_whole_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40907__$1,new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),false);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.pin-separator-row.update-row","tr.pin-separator-row.update-row",-859604652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-pin-row-id","data-pin-row-id",-1547753251),id,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(drag_from_whole_row_QMARK_)?"update-row--draggable":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pin-separator-cell","td.pin-separator-cell",-2085998292),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(cljs.core.truth_(show_drag_handle_QMARK_)?(column_count + (1)):column_count)], null),placesurfer.pin_ui.pure.separator_row.content(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$2(values,""))], null)], null);
});
placesurfer.pin_ui.pure.separator_row.preview_row = (function placesurfer$pin_ui$pure$separator_row$preview_row(p__40908){
var map__40909 = p__40908;
var map__40909__$1 = cljs.core.__destructure_map(map__40909);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40909__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40909__$1,new cljs.core.Keyword(null,"values","values",372645556));
var drag_from_whole_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40909__$1,new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-separator-row.pin-preview-row.update-row","div.pin-separator-row.pin-preview-row.update-row",911285527),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-pin-row-id","data-pin-row-id",-1547753251),id,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(drag_from_whole_row_QMARK_)?"update-row--draggable":null)], null),placesurfer.pin_ui.pure.separator_row.content(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$2(values,""))], null);
});

//# sourceMappingURL=placesurfer.pin_ui.pure.separator_row.js.map
