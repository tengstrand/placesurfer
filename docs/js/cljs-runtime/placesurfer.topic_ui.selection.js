goog.provide('placesurfer.topic_ui.selection');
/**
 * When exactly one topic is active, return it; otherwise nil.
 */
placesurfer.topic_ui.selection.single_active = (function placesurfer$topic_ui$selection$single_active(active_topics){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(active_topics))){
return cljs.core.first(active_topics);
} else {
return null;
}
});
/**
 * Update page requires exactly one active topic.
 */
placesurfer.topic_ui.selection.update_invalid_QMARK_ = (function placesurfer$topic_ui$selection$update_invalid_QMARK_(active_topics){
return (placesurfer.topic_ui.selection.single_active(active_topics) == null);
});
placesurfer.topic_ui.selection.default_discgolf_fallback = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"discgolf","discgolf",416907656),new cljs.core.Keyword(null,"marker-url","marker-url",153262178),"/images/marker/discgolf.png"], null);
/**
 * Row props for the topic nav tab icon: single active row, else discgolf fallback.
 */
placesurfer.topic_ui.selection.nav_tab_row = (function placesurfer$topic_ui$selection$nav_tab_row(topic_rows){
var active_rows = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"active?","active?",459499776),topic_rows));
var fallback_discgolf = cljs.core.some((function (p1__40266_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"discgolf","discgolf",416907656),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__40266_SHARP_))){
return p1__40266_SHARP_;
} else {
return null;
}
}),topic_rows);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(active_rows))){
return cljs.core.first(active_rows);
} else {
var or__5025__auto__ = fallback_discgolf;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.topic_ui.selection.default_discgolf_fallback;
}
}
});

//# sourceMappingURL=placesurfer.topic_ui.selection.js.map
