goog.provide('placesurfer.map_panel_ui.status');
placesurfer.map_panel_ui.status.display_status_text = (function placesurfer$map_panel_ui$status$display_status_text(v){
if((!((v == null)))){
var s = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
if(cljs.core.seq(s)){
return s;
} else {
return null;
}
} else {
return null;
}
});
placesurfer.map_panel_ui.status.map_status_text = (function placesurfer$map_panel_ui$status$map_status_text(p__40871){
var map__40872 = p__40871;
var map__40872__$1 = cljs.core.__destructure_map(map__40872);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40872__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40872__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var country_loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40872__$1,new cljs.core.Keyword(null,"country-loading?","country-loading?",-144475327));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40872__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = status;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((function (){var or__5025__auto__ = count;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() > (0)))?(function (){var G__40878 = new cljs.core.Keyword("status","places-count","status/places-count",-678144896);
var G__40879 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),count], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__40878,G__40879) : t.call(null,G__40878,G__40879));
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(country_loading_QMARK_)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("status","loading-suffix","status/loading-suffix",-77834109)) : t.call(null,new cljs.core.Keyword("status","loading-suffix","status/loading-suffix",-77834109))):null))].join('');
});

//# sourceMappingURL=placesurfer.map_panel_ui.status.js.map
