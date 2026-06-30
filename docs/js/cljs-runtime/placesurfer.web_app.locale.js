goog.provide('placesurfer.web_app.locale');
placesurfer.web_app.locale.set_locale_BANG_ = (function placesurfer$web_app$locale$set_locale_BANG_(locale){
var locale__$1 = placesurfer.i18n.interface$.normalize_locale.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locale], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"locale","locale",-2115712697),locale__$1);

placesurfer.i18n.interface$.save_locale_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locale__$1], 0));

return placesurfer.app_ui.interface$.effects.render_BANG_();
});
placesurfer.web_app.locale.init_locale_BANG_ = (function placesurfer$web_app$locale$init_locale_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"locale","locale",-2115712697),placesurfer.i18n.interface$.read_locale_BANG_());
});
placesurfer.web_app.locale.t_for_state = (function placesurfer$web_app$locale$t_for_state(var_args){
var G__78534 = arguments.length;
switch (G__78534) {
case 2:
return placesurfer.web_app.locale.t_for_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return placesurfer.web_app.locale.t_for_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.web_app.locale.t_for_state.cljs$core$IFn$_invoke$arity$2 = (function (state,key){
return placesurfer.web_app.locale.t_for_state.cljs$core$IFn$_invoke$arity$3(state,key,cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.web_app.locale.t_for_state.cljs$core$IFn$_invoke$arity$3 = (function (state,key,params){
return placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(state,placesurfer.i18n.interface$.default_locale),key,params], 0));
}));

(placesurfer.web_app.locale.t_for_state.cljs$lang$maxFixedArity = 3);

placesurfer.web_app.locale.make_t = (function placesurfer$web_app$locale$make_t(state){
return (function() {
var G__78540 = null;
var G__78540__1 = (function (key){
return placesurfer.web_app.locale.t_for_state.cljs$core$IFn$_invoke$arity$2(state,key);
});
var G__78540__2 = (function (key,params){
return placesurfer.web_app.locale.t_for_state.cljs$core$IFn$_invoke$arity$3(state,key,params);
});
G__78540 = function(key,params){
switch(arguments.length){
case 1:
return G__78540__1.call(this,key);
case 2:
return G__78540__2.call(this,key,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__78540.cljs$core$IFn$_invoke$arity$1 = G__78540__1;
G__78540.cljs$core$IFn$_invoke$arity$2 = G__78540__2;
return G__78540;
})()
});

//# sourceMappingURL=placesurfer.web_app.locale.js.map
