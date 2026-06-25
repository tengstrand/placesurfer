goog.provide('placesurfer.country_ui.filter');
placesurfer.country_ui.filter.label_starts_with_QMARK_ = (function placesurfer$country_ui$filter$label_starts_with_QMARK_(label,query){
var q = (function (){var or__5025__auto__ = query;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})().trim();
var label_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var or__5025__auto__ = cljs.core.empty_QMARK_(q);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return label_str.toLowerCase().startsWith(q.toLowerCase());
}
});
placesurfer.country_ui.filter.filter_countries = (function placesurfer$country_ui$filter$filter_countries(countries,query){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41017_SHARP_){
return placesurfer.country_ui.filter.label_starts_with_QMARK_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__41017_SHARP_),query);
}),(function (){var or__5025__auto__ = countries;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
});
placesurfer.country_ui.filter.order_selected_first = (function placesurfer$country_ui$filter$order_selected_first(countries,selected_slug){
var selected = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41019_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_slug,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__41019_SHARP_));
}),countries));
var rest = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41021_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_slug,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__41021_SHARP_));
}),countries));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(selected,rest);
});
placesurfer.country_ui.filter.visible_countries = (function placesurfer$country_ui$filter$visible_countries(countries,query,selected_slug){
return placesurfer.country_ui.filter.order_selected_first(placesurfer.country_ui.filter.filter_countries(countries,query),selected_slug);
});

//# sourceMappingURL=placesurfer.country_ui.filter.js.map
