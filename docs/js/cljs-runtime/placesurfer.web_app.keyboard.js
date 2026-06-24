goog.provide('placesurfer.web_app.keyboard');
placesurfer.web_app.keyboard.typing_in_field_QMARK_ = (function placesurfer$web_app$keyboard$typing_in_field_QMARK_(e){
var el = e.target;
var tag = (function (){var G__47924 = el;
var G__47924__$1 = (((G__47924 == null))?null:G__47924.tagName);
if((G__47924__$1 == null)){
return null;
} else {
return G__47924__$1.toUpperCase();
}
})();
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,"INPUT")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,"TEXTAREA")) || (el.isContentEditable === true))));
});
placesurfer.web_app.keyboard.modifier_key_held_QMARK_ = (function placesurfer$web_app$keyboard$modifier_key_held_QMARK_(e){
var or__5025__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = e.metaKey;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return e.altKey;
}
}
});
placesurfer.web_app.keyboard.update_pins_mode_QMARK_ = (function placesurfer$web_app$keyboard$update_pins_mode_QMARK_(s){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pins","pins",1725193285),new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s))));
});
placesurfer.web_app.keyboard.pin_row_nav_delta = (function placesurfer$web_app$keyboard$pin_row_nav_delta(e){
var G__47925 = e.key;
switch (G__47925) {
case "ArrowDown":
return (1);

break;
case "ArrowUp":
return (-1);

break;
default:
return null;

}
});
placesurfer.web_app.keyboard.pin_row_nav_key_QMARK_ = (function placesurfer$web_app$keyboard$pin_row_nav_key_QMARK_(e){
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))) || (placesurfer.web_app.keyboard.update_pins_mode_QMARK_(cljs.core.deref(placesurfer.web_app.state._BANG_state))))) && ((((!((placesurfer.web_app.keyboard.pin_row_nav_delta(e) == null)))) && ((((!(placesurfer.web_app.keyboard.typing_in_field_QMARK_(e)))) && (cljs.core.not(placesurfer.web_app.keyboard.modifier_key_held_QMARK_(e))))))));
});
placesurfer.web_app.keyboard.group_row_nav_key_QMARK_ = (function placesurfer$web_app$keyboard$group_row_nav_key_QMARK_(e){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"groups","groups",-136896102),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))) && ((((!((placesurfer.web_app.keyboard.pin_row_nav_delta(e) == null)))) && ((((!(placesurfer.web_app.keyboard.typing_in_field_QMARK_(e)))) && (cljs.core.not(placesurfer.web_app.keyboard.modifier_key_held_QMARK_(e))))))));
});
placesurfer.web_app.keyboard.on_document_keydown_BANG_ = (function placesurfer$web_app$keyboard$on_document_keydown_BANG_(e){
if(cljs.core.truth_(e.repeat)){
return null;
} else {
if(placesurfer.web_app.keyboard.pin_row_nav_key_QMARK_(e)){
e.preventDefault();

return placesurfer.pin_ui.interface$.handlers.interaction.select_adjacent_pin_row_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.web_app.keyboard.pin_row_nav_delta(e)], 0));
} else {
if(placesurfer.web_app.keyboard.group_row_nav_key_QMARK_(e)){
e.preventDefault();

return placesurfer.group_ui.interface$.handlers.select_adjacent_group_row_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.web_app.keyboard.pin_row_nav_delta(e)], 0));
} else {
if((((!(placesurfer.web_app.keyboard.typing_in_field_QMARK_(e)))) && (cljs.core.not(placesurfer.web_app.keyboard.modifier_key_held_QMARK_(e))))){
var key = e.key.toLowerCase();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("t",key)){
e.preventDefault();

return placesurfer.web_app.nav.navigate_BANG_(new cljs.core.Keyword(null,"topic","topic",-1960480691));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("h",key)){
e.preventDefault();

return placesurfer.web_app.nav.navigate_BANG_(new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("c",key)){
e.preventDefault();

return placesurfer.web_app.nav.navigate_BANG_(new cljs.core.Keyword(null,"country","country",312965309));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("u",key)) && (cljs.core.not(e.repeat)))){
e.preventDefault();

return placesurfer.web_app.nav.navigate_to_update_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("p",key)){
e.preventDefault();

return placesurfer.web_app.nav.navigate_to_pin_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("g",key)){
e.preventDefault();

return placesurfer.web_app.nav.navigate_BANG_(new cljs.core.Keyword(null,"groups","groups",-136896102));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("a",key)){
e.preventDefault();

return placesurfer.web_app.nav.navigate_BANG_(new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
}
}
}
}
}
} else {
return null;
}
}
}
}
});

//# sourceMappingURL=placesurfer.web_app.keyboard.js.map
