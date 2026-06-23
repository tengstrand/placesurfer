goog.provide('hitteri.pin_ui.handlers.load');
hitteri.pin_ui.handlers.load.load_pin_icons_BANG_ = (function hitteri$pin_ui$handlers$load$load_pin_icons_BANG_(){
return fetch("/data/pin-icons.json").then((function (p1__49715_SHARP_){
return p1__49715_SHARP_.json();
})).then((function (data){
hitteri.pin_ui.pure.forms.set_icon_options_BANG_(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false], 0)));

return hitteri.app_ui.interface$.effects.render_BANG_();
})).catch((function (_){
return null;
}));
});
hitteri.pin_ui.handlers.load.load_pins_from_storage_BANG_ = (function hitteri$pin_ui$handlers$load$load_pins_from_storage_BANG_(){
return hitteri.pin_ui.handlers.state.swap_render_BANG_((function (s){
return hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1(hitteri.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),hitteri.pin_ui.pure.storage.read_pins_BANG_(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),hitteri.pin_ui.pure.forms.default_form(),new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),hitteri.pin_ui.pure.forms.default_form(),new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),null], 0))));
}));
});

//# sourceMappingURL=hitteri.pin_ui.handlers.load.js.map
