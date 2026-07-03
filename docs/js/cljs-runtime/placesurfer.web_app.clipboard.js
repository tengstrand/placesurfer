goog.provide('placesurfer.web_app.clipboard');
placesurfer.web_app.clipboard.typing_in_field_element_QMARK_ = (function placesurfer$web_app$clipboard$typing_in_field_element_QMARK_(el){
if(cljs.core.truth_(el)){
var tag = (function (){var G__40244 = el;
var G__40244__$1 = (((G__40244 == null))?null:G__40244.tagName);
if((G__40244__$1 == null)){
return null;
} else {
return G__40244__$1.toUpperCase();
}
})();
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,"INPUT")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,"TEXTAREA")) || (el.isContentEditable === true))));
} else {
return null;
}
});
placesurfer.web_app.clipboard.update_pins_mode_QMARK_ = (function placesurfer$web_app$clipboard$update_pins_mode_QMARK_(s){
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s));
if(and__5023__auto__){
return placesurfer.edit.interface$.topics.pins_topic_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s)], 0));
} else {
return and__5023__auto__;
}
});
placesurfer.web_app.clipboard.full_place_paste_context_QMARK_ = (function placesurfer$web_app$clipboard$full_place_paste_context_QMARK_(s){
var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return placesurfer.web_app.clipboard.update_pins_mode_QMARK_(s);
}
});
placesurfer.web_app.clipboard.clear_clipboard_BANG_ = (function placesurfer$web_app$clipboard$clear_clipboard_BANG_(){
var temp__5825__auto__ = (function (){var G__40260 = navigator;
var G__40260__$1 = (((G__40260 == null))?null:G__40260.clipboard);
if((G__40260__$1 == null)){
return null;
} else {
return G__40260__$1.writeText;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var write_text = temp__5825__auto__;
return (write_text.cljs$core$IFn$_invoke$arity$1 ? write_text.cljs$core$IFn$_invoke$arity$1("") : write_text.call(null,"")).catch((function (_){
return null;
}));
} else {
return null;
}
});
placesurfer.web_app.clipboard.apply_topic_place_coords_from_text_BANG_ = (function placesurfer$web_app$clipboard$apply_topic_place_coords_from_text_BANG_(text){
var temp__5825__auto__ = placesurfer.clipboard_ui.interface$.payload.parse_bookmarklet_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text))], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var payload = temp__5825__auto__;
var temp__5825__auto____$1 = placesurfer.clipboard_ui.interface$.payload.payload__GT_coordinates.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
if(cljs.core.truth_(temp__5825__auto____$1)){
var map__40265 = temp__5825__auto____$1;
var map__40265__$1 = cljs.core.__destructure_map(map__40265);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40265__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40265__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
placesurfer.edit.interface$.handlers.form.apply_pasted_decimal_coordinates_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([longitude,latitude], 0));

placesurfer.web_app.clipboard.clear_clipboard_BANG_();

return true;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Route paste to place clipboard (pin / pins) or update URL/coords (dataset edit).
 */
placesurfer.web_app.clipboard.on_document_paste_BANG_ = (function placesurfer$web_app$clipboard$on_document_paste_BANG_(e){
var s = cljs.core.deref(placesurfer.web_app.state._BANG_state);
var text = e.clipboardData.getData("text");
var in_field_QMARK_ = placesurfer.web_app.clipboard.typing_in_field_element_QMARK_(e.target);
if(cljs.core.truth_((function (){var and__5023__auto__ = placesurfer.web_app.clipboard.full_place_paste_context_QMARK_(s);
if(cljs.core.truth_(and__5023__auto__)){
return placesurfer.clipboard_ui.interface$.handlers.paste.apply_place_clipboard_text_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));
} else {
return and__5023__auto__;
}
})())){
return e.preventDefault();
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(in_field_QMARK_);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s));
if(and__5023__auto____$1){
var and__5023__auto____$2 = cljs.core.not(placesurfer.web_app.clipboard.update_pins_mode_QMARK_(s));
if(and__5023__auto____$2){
return placesurfer.web_app.clipboard.apply_topic_place_coords_from_text_BANG_(text);
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return e.preventDefault();
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(in_field_QMARK_);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s));
if(and__5023__auto____$1){
var and__5023__auto____$2 = cljs.core.not(placesurfer.web_app.clipboard.update_pins_mode_QMARK_(s));
if(and__5023__auto____$2){
return placesurfer.edit.interface$.handlers.form.apply_pasted_update_clipboard_text_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return e.preventDefault();
} else {
return null;

}
}
}
});

//# sourceMappingURL=placesurfer.web_app.clipboard.js.map
