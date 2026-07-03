goog.provide('placesurfer.pin_ui.pure.editor_pane');
placesurfer.pin_ui.pure.editor_pane.form_content = (function placesurfer$pin_ui$pure$editor_pane$form_content(props){
var edit_mode_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186).cljs$core$IFn$_invoke$arity$1(props));
var new_mode_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186).cljs$core$IFn$_invoke$arity$1(props));
var inline_QMARK_ = new cljs.core.Keyword(null,"pin-editor-inline?","pin-editor-inline?",766617935).cljs$core$IFn$_invoke$arity$2(props,false);
var show_search_QMARK_ = (function (){var and__5023__auto__ = cljs.core.not(inline_QMARK_);
if(and__5023__auto__){
var or__5025__auto__ = new cljs.core.Keyword(null,"pin-show-search?","pin-show-search?",-437021687).cljs$core$IFn$_invoke$arity$2(props,false);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((new_mode_QMARK_) && (cljs.core.not(inline_QMARK_)));
}
} else {
return and__5023__auto__;
}
})();
var show_form_fields_QMARK_ = (function (){var or__5025__auto__ = inline_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((edit_mode_QMARK_) || (((new_mode_QMARK_) && (cljs.core.not(inline_QMARK_)))));
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-editor-form","div.pin-editor-form",452772928)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(show_form_fields_QMARK_)?placesurfer.pin_ui.pure.form_fields.field_rows(props):null),(cljs.core.truth_(show_search_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.pin_ui.pure.search_field.search(props)], null):null)));
});
placesurfer.pin_ui.pure.editor_pane.editor_pane = (function placesurfer$pin_ui$pure$editor_pane$editor_pane(p__41077){
var map__41078 = p__41077;
var map__41078__$1 = cljs.core.__destructure_map(map__41078);
var props = map__41078__$1;
var pin_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41078__$1,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41078__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-editor-pane","div.pin-editor-pane",646930437),placesurfer.pin_ui.pure.editor_pane.form_content(props),(function (){var temp__5825__auto__ = placesurfer.map_panel_ui.interface$.status.display_status_text(pin_message);
if(cljs.core.truth_(temp__5825__auto__)){
var msg = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pin-editor-message","p.pin-editor-message",2098237684),msg], null);
} else {
return null;
}
})()], null);
});

//# sourceMappingURL=placesurfer.pin_ui.pure.editor_pane.js.map
