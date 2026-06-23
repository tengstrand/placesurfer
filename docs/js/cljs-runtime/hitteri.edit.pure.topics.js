goog.provide('hitteri.edit.pure.topics');
hitteri.edit.pure.topics.pins_topic = new cljs.core.Keyword(null,"pins","pins",1725193285);
hitteri.edit.pure.topics.pins_topic_icon_url = "/images/pin.png";
hitteri.edit.pure.topics.pins_topic_QMARK_ = (function hitteri$edit$pure$topics$pins_topic_QMARK_(topic){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hitteri.edit.pure.topics.pins_topic,topic);
});
hitteri.edit.pure.topics.topic_i18n_key = (function hitteri$edit$pure$topics$topic_i18n_key(topic){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("topic",cljs.core.name(topic));
});
hitteri.edit.pure.topics.sorted_topic_options = (function hitteri$edit$pure$topics$sorted_topic_options(var_args){
var G__39274 = arguments.length;
switch (G__39274) {
case 2:
return hitteri.edit.pure.topics.sorted_topic_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hitteri.edit.pure.topics.sorted_topic_options.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.edit.pure.topics.sorted_topic_options.cljs$core$IFn$_invoke$arity$2 = (function (topic_keys,t){
return hitteri.edit.pure.topics.sorted_topic_options.cljs$core$IFn$_invoke$arity$3(topic_keys,t,cljs.core.PersistentArrayMap.EMPTY);
}));

(hitteri.edit.pure.topics.sorted_topic_options.cljs$core$IFn$_invoke$arity$3 = (function (topic_keys,t,p__39275){
var map__39276 = p__39275;
var map__39276__$1 = cljs.core.__destructure_map(map__39276);
var marker_url_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39276__$1,new cljs.core.Keyword(null,"marker-url-fn","marker-url-fn",-1040432635));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"label","label",1718410804),(function (p1__39271_SHARP_,p2__39272_SHARP_){
return cljs.core.compare(clojure.string.lower_case(p1__39271_SHARP_),clojure.string.lower_case(p2__39272_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (topic){
var G__39279 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__39280 = hitteri.edit.pure.topics.topic_i18n_key(topic);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__39280) : t.call(null,G__39280));
})()], null);
if(cljs.core.truth_(marker_url_fn)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39279,new cljs.core.Keyword(null,"marker-url","marker-url",153262178),(marker_url_fn.cljs$core$IFn$_invoke$arity$1 ? marker_url_fn.cljs$core$IFn$_invoke$arity$1(topic) : marker_url_fn.call(null,topic)));
} else {
return G__39279;
}
}),topic_keys));
}));

(hitteri.edit.pure.topics.sorted_topic_options.cljs$lang$maxFixedArity = 3);

hitteri.edit.pure.topics.pins_topic_option = (function hitteri$edit$pure$topics$pins_topic_option(t){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),hitteri.edit.pure.topics.pins_topic,new cljs.core.Keyword(null,"label","label",1718410804),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("topic","pins","topic/pins",1613571862)) : t.call(null,new cljs.core.Keyword("topic","pins","topic/pins",1613571862))),new cljs.core.Keyword(null,"marker-url","marker-url",153262178),hitteri.edit.pure.topics.pins_topic_icon_url], null);
});
hitteri.edit.pure.topics.topic_options_for_dropdown = (function hitteri$edit$pure$topics$topic_options_for_dropdown(var_args){
var G__39284 = arguments.length;
switch (G__39284) {
case 2:
return hitteri.edit.pure.topics.topic_options_for_dropdown.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hitteri.edit.pure.topics.topic_options_for_dropdown.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.edit.pure.topics.topic_options_for_dropdown.cljs$core$IFn$_invoke$arity$2 = (function (topic_keys,t){
return hitteri.edit.pure.topics.topic_options_for_dropdown.cljs$core$IFn$_invoke$arity$3(topic_keys,t,cljs.core.PersistentArrayMap.EMPTY);
}));

(hitteri.edit.pure.topics.topic_options_for_dropdown.cljs$core$IFn$_invoke$arity$3 = (function (topic_keys,t,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hitteri.edit.pure.topics.pins_topic_option(t)], null),hitteri.edit.pure.topics.sorted_topic_options.cljs$core$IFn$_invoke$arity$3(topic_keys,t,opts));
}));

(hitteri.edit.pure.topics.topic_options_for_dropdown.cljs$lang$maxFixedArity = 3);

hitteri.edit.pure.topics.option_for_topic = (function hitteri$edit$pure$topics$option_for_topic(options,topic){
return cljs.core.some((function (p1__39285_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__39285_SHARP_))){
return p1__39285_SHARP_;
} else {
return null;
}
}),options);
});
hitteri.edit.pure.topics.dataset_topic_options = (function hitteri$edit$pure$topics$dataset_topic_options(options){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39286_SHARP_){
return hitteri.edit.pure.topics.pins_topic_QMARK_(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__39286_SHARP_));
}),options));
});
hitteri.edit.pure.topics.first_dataset_topic_option = (function hitteri$edit$pure$topics$first_dataset_topic_option(options){
return cljs.core.first(hitteri.edit.pure.topics.dataset_topic_options(options));
});
hitteri.edit.pure.topics.pin_toggle_target_option = (function hitteri$edit$pure$topics$pin_toggle_target_option(options,before_pins_topic){
var target = (function (){var or__5025__auto__ = before_pins_topic;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(hitteri.edit.pure.topics.first_dataset_topic_option(options));
}
})();
var or__5025__auto__ = hitteri.edit.pure.topics.option_for_topic(options,target);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hitteri.edit.pure.topics.first_dataset_topic_option(options);
}
});
hitteri.edit.pure.topics.topic_marker_icon_class = (function hitteri$edit$pure$topics$topic_marker_icon_class(topic){
if(cljs.core.truth_(topic)){
return ["update-topic-dropdown-icon update-topic-dropdown-icon--",cljs.core.name(topic)].join('');
} else {
return null;
}
});
hitteri.edit.pure.topics.default_update_topic = (function hitteri$edit$pure$topics$default_update_topic(topic_keys,t){
return new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(cljs.core.first(hitteri.edit.pure.topics.sorted_topic_options.cljs$core$IFn$_invoke$arity$2(topic_keys,t)));
});

//# sourceMappingURL=hitteri.edit.pure.topics.js.map
