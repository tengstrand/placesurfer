goog.provide('placesurfer.country_ui.rows');
placesurfer.country_ui.rows.row_class = (function placesurfer$country_ui$rows$row_class(selected_QMARK_,keyboard_highlight_QMARK_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(selected_QMARK_)?"country-row--selected":null),(cljs.core.truth_(keyboard_highlight_QMARK_)?"country-row--keyboard-focus":null)], null)));
});
placesurfer.country_ui.rows.row = (function placesurfer$country_ui$rows$row(p__41009,selected_QMARK_,keyboard_highlight_QMARK_,select_country_BANG_){
var map__41011 = p__41009;
var map__41011__$1 = cljs.core.__destructure_map(map__41011);
var iso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41011__$1,new cljs.core.Keyword(null,"iso","iso",-1366207543));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41011__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41011__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.country-row","button.country-row",-827615663),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),placesurfer.country_ui.rows.row_class(selected_QMARK_,keyboard_highlight_QMARK_),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__41012){
var map__41013 = p__41012;
var map__41013__$1 = cljs.core.__destructure_map(map__41013);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41013__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
if(cljs.core.truth_((function (){var and__5023__auto__ = keyboard_highlight_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return node;
} else {
return and__5023__auto__;
}
})())){
return node.scrollIntoView(({"block": "nearest"}));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (select_country_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_country_BANG_.cljs$core$IFn$_invoke$arity$1(slug) : select_country_BANG_.call(null,slug));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.country-flag","span.country-flag",776084503),placesurfer.nav_ui.interface$.flags.iso__GT_flag(iso)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.country-label","span.country-label",18884761),label], null)], null);
});

//# sourceMappingURL=placesurfer.country_ui.rows.js.map
