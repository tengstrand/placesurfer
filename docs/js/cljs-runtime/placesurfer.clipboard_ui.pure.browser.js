goog.provide('placesurfer.clipboard_ui.pure.browser');
placesurfer.clipboard_ui.pure.browser.trimmed_text = (function placesurfer$clipboard_ui$pure$browser$trimmed_text(text){
return clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text));
});
placesurfer.clipboard_ui.pure.browser.clipboard_read_available_QMARK_ = (function placesurfer$clipboard_ui$pure$browser$clipboard_read_available_QMARK_(){
return cljs.core.boolean$((function (){var temp__5825__auto__ = (function (){var and__5023__auto__ = navigator;
if(cljs.core.truth_(and__5023__auto__)){
return navigator.clipboard;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
return cb.readText;
} else {
return null;
}
})());
});
placesurfer.clipboard_ui.pure.browser.clipboard_write_available_QMARK_ = (function placesurfer$clipboard_ui$pure$browser$clipboard_write_available_QMARK_(){
return cljs.core.boolean$((function (){var temp__5825__auto__ = (function (){var and__5023__auto__ = navigator;
if(cljs.core.truth_(and__5023__auto__)){
return navigator.clipboard;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
return cb.writeText;
} else {
return null;
}
})());
});
placesurfer.clipboard_ui.pure.browser.clear_clipboard_BANG_ = (function placesurfer$clipboard_ui$pure$browser$clear_clipboard_BANG_(){
if(placesurfer.clipboard_ui.pure.browser.clipboard_write_available_QMARK_()){
return navigator.clipboard.writeText("").catch((function (_){
return null;
}));
} else {
return null;
}
});
/**
 * Read clipboard text, invoking `then!` with trimmed text or nil on failure.
 */
placesurfer.clipboard_ui.pure.browser.read_clipboard_text_BANG_ = (function placesurfer$clipboard_ui$pure$browser$read_clipboard_text_BANG_(then_BANG_){
if((!(placesurfer.clipboard_ui.pure.browser.clipboard_read_available_QMARK_()))){
return (then_BANG_.cljs$core$IFn$_invoke$arity$1 ? then_BANG_.cljs$core$IFn$_invoke$arity$1(null) : then_BANG_.call(null,null));
} else {
return navigator.clipboard.readText().then((function (text){
var G__40225 = placesurfer.clipboard_ui.pure.browser.trimmed_text(text);
return (then_BANG_.cljs$core$IFn$_invoke$arity$1 ? then_BANG_.cljs$core$IFn$_invoke$arity$1(G__40225) : then_BANG_.call(null,G__40225));
})).catch((function (_){
return (then_BANG_.cljs$core$IFn$_invoke$arity$1 ? then_BANG_.cljs$core$IFn$_invoke$arity$1(null) : then_BANG_.call(null,null));
}));
}
});

//# sourceMappingURL=placesurfer.clipboard_ui.pure.browser.js.map
