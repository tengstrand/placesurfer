goog.provide('placesurfer.edit.pure.topic_dropdown');
placesurfer.edit.pure.topic_dropdown.close_dropdown_BANG_ = (function placesurfer$edit$pure$topic_dropdown$close_dropdown_BANG_(e){
var temp__5825__auto__ = e.target.closest("details");
if(cljs.core.truth_(temp__5825__auto__)){
var details = temp__5825__auto__;
return details.removeAttribute("open");
} else {
return null;
}
});
placesurfer.edit.pure.topic_dropdown.selected_option = (function placesurfer$edit$pure$topic_dropdown$selected_option(options,update_topic){
var or__5025__auto__ = cljs.core.some((function (p1__40817_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_topic,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__40817_SHARP_))){
return p1__40817_SHARP_;
} else {
return null;
}
}),options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.first(options);
}
});
placesurfer.edit.pure.topic_dropdown.icon_class = (function placesurfer$edit$pure$topic_dropdown$icon_class(topic){
if(cljs.core.truth_(topic)){
return ["update-topic-dropdown-icon update-topic-dropdown-icon--",cljs.core.name(topic)].join('');
} else {
return null;
}
});
placesurfer.edit.pure.topic_dropdown.topic_option = (function placesurfer$edit$pure$topic_dropdown$topic_option(p__40819){
var map__40821 = p__40819;
var map__40821__$1 = cljs.core.__destructure_map(map__40821);
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40821__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40821__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var marker_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40821__$1,new cljs.core.Keyword(null,"marker-url","marker-url",153262178));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40821__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var request_update_topic_change_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40821__$1,new cljs.core.Keyword(null,"request-update-topic-change!","request-update-topic-change!",248429750));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"update-topic-dropdown-option update-topic-dropdown-option--selected":"update-topic-dropdown-option"),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.preventDefault();

(request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$1 ? request_update_topic_change_BANG_.cljs$core$IFn$_invoke$arity$1(topic) : request_update_topic_change_BANG_.call(null,topic));

return placesurfer.edit.pure.topic_dropdown.close_dropdown_BANG_(e);
})], null)], null),(cljs.core.truth_(marker_url)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),placesurfer.edit.pure.topic_dropdown.icon_class(topic),new cljs.core.Keyword(null,"src","src",-1651076051),marker_url,new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.update-topic-dropdown-label","span.update-topic-dropdown-label",994258887),label], null)], null);
});
placesurfer.edit.pure.topic_dropdown.dropdown = (function placesurfer$edit$pure$topic_dropdown$dropdown(p__40825){
var map__40826 = p__40825;
var map__40826__$1 = cljs.core.__destructure_map(map__40826);
var update_topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40826__$1,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
var update_topic_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40826__$1,new cljs.core.Keyword(null,"update-topic-options","update-topic-options",702207581));
var request_update_topic_change_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40826__$1,new cljs.core.Keyword(null,"request-update-topic-change!","request-update-topic-change!",248429750));
if(cljs.core.seq(update_topic_options)){
var map__40827 = placesurfer.edit.pure.topic_dropdown.selected_option(update_topic_options,update_topic);
var map__40827__$1 = cljs.core.__destructure_map(map__40827);
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40827__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40827__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var marker_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40827__$1,new cljs.core.Keyword(null,"marker-url","marker-url",153262178));
var current_topic = (function (){var or__5025__auto__ = update_topic;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return topic;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details.update-topic-dropdown","details.update-topic-dropdown",-1284832365),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary.update-topic-dropdown-trigger","summary.update-topic-dropdown-trigger",-1391123837),(function (){var G__40828 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(label)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__40828,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),label], 0));
} else {
return G__40828;
}
})(),(cljs.core.truth_(marker_url)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),placesurfer.edit.pure.topic_dropdown.icon_class(current_topic),new cljs.core.Keyword(null,"src","src",-1651076051),marker_url,new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-topic-dropdown-menu","div.update-topic-dropdown-menu",220087815),(function (){var iter__5503__auto__ = (function placesurfer$edit$pure$topic_dropdown$dropdown_$_iter__40829(s__40830){
return (new cljs.core.LazySeq(null,(function (){
var s__40830__$1 = s__40830;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40830__$1);
if(temp__5825__auto__){
var s__40830__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40830__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__40830__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__40832 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__40831 = (0);
while(true){
if((i__40831 < size__5502__auto__)){
var option = cljs.core._nth(c__5501__auto__,i__40831);
cljs.core.chunk_append(b__40832,placesurfer.edit.pure.topic_dropdown.topic_option(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_topic,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(option)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"request-update-topic-change!","request-update-topic-change!",248429750),request_update_topic_change_BANG_], 0))));

var G__40840 = (i__40831 + (1));
i__40831 = G__40840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40832),placesurfer$edit$pure$topic_dropdown$dropdown_$_iter__40829(cljs.core.chunk_rest(s__40830__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40832),null);
}
} else {
var option = cljs.core.first(s__40830__$2);
return cljs.core.cons(placesurfer.edit.pure.topic_dropdown.topic_option(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_topic,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(option)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"request-update-topic-change!","request-update-topic-change!",248429750),request_update_topic_change_BANG_], 0))),placesurfer$edit$pure$topic_dropdown$dropdown_$_iter__40829(cljs.core.rest(s__40830__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(update_topic_options);
})()], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.edit.pure.topic_dropdown.js.map
