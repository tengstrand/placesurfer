goog.provide('hitteri.app_ui.description');
hitteri.app_ui.description.toggle_description_edit_mode_BANG_ = (function hitteri$app_ui$description$toggle_description_edit_mode_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.app_ui.interface$.state._BANG_state,(function (s){
return hitteri.app_ui.interface$.state.bump_description_sync_token(cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"description-edit-mode","description-edit-mode",-1941940982),(function (p1__40905_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__40905_SHARP_,new cljs.core.Keyword(null,"html","html",-998796897))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);
}
})));
}));

return hitteri.app_ui.interface$.effects.render_BANG_();
});

//# sourceMappingURL=hitteri.app_ui.description.js.map
