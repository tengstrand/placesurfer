goog.provide('placesurfer.pin_ui.handlers.load');
placesurfer.pin_ui.handlers.load.load_pin_icons_BANG_ = (function placesurfer$pin_ui$handlers$load$load_pin_icons_BANG_(){
return fetch("/data/pin-icons.json").then((function (p1__53534_SHARP_){
return p1__53534_SHARP_.json();
})).then((function (data){
placesurfer.pin_ui.pure.forms.set_icon_options_BANG_(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false], 0)));

return placesurfer.app_ui.interface$.effects.render_BANG_();
})).catch((function (_){
return null;
}));
});
placesurfer.pin_ui.handlers.load.load_pins_from_storage_BANG_ = (function placesurfer$pin_ui$handlers$load$load_pins_from_storage_BANG_(){
return placesurfer.pin_ui.handlers.state.swap_render_BANG_((function (s){
return placesurfer.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1(placesurfer.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),placesurfer.pin_ui.pure.storage.read_pins_BANG_(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),placesurfer.pin_ui.pure.forms.default_form(),new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),placesurfer.pin_ui.pure.forms.default_form(),new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),null], 0))));
}));
});

//# sourceMappingURL=placesurfer.pin_ui.handlers.load.js.map
