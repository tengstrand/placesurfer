goog.provide('placesurfer.topic_ui.panel');
placesurfer.topic_ui.panel.sync_checkbox_BANG_ = (function placesurfer$topic_ui$panel$sync_checkbox_BANG_(node,active_QMARK_){
if(cljs.core.truth_((function (){var and__5023__auto__ = node;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node.checked,active_QMARK_);
} else {
return and__5023__auto__;
}
})())){
(node.placesurferSyncing = true);

(node.checked = active_QMARK_);

return setTimeout((function (){
return (node.placesurferSyncing = false);
}),(0));
} else {
return null;
}
});
placesurfer.topic_ui.panel.topic_row = (function placesurfer$topic_ui$panel$topic_row(p__40635){
var map__40636 = p__40635;
var map__40636__$1 = cljs.core.__destructure_map(map__40636);
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40636__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40636__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40636__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40636__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var marker_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40636__$1,new cljs.core.Keyword(null,"marker-url","marker-url",153262178));
var set_topic_active_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40636__$1,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion.topic-row","motion.topic-row",-516771302),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-checkbox","sl-checkbox",-675865475),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"checked","checked",-50955819),active_QMARK_,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__40637){
var map__40639 = p__40637;
var map__40639__$1 = cljs.core.__destructure_map(map__40639);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40639__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return placesurfer.topic_ui.panel.sync_checkbox_BANG_(node,active_QMARK_);
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sl-change","sl-change",-760726964),(function (e){
var target = e.target;
if(((cljs.core.not(target.placesurferSyncing)) && (cljs.core.not(window.placesurferTopicBatchSync)))){
var G__40641 = topic;
var G__40642 = target.checked;
return (set_topic_active_BANG_.cljs$core$IFn$_invoke$arity$2 ? set_topic_active_BANG_.cljs$core$IFn$_invoke$arity$2(G__40641,G__40642) : set_topic_active_BANG_.call(null,G__40641,G__40642));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.topic-row-content","span.topic-row-content",1922928974),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.topic-icon-wrap","span.topic-icon-wrap",1147837364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["topic-icon topic-icon--",cljs.core.name(topic)].join(''),new cljs.core.Keyword(null,"src","src",-1651076051),marker_url,new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.topic-label","span.topic-label",-216123895),label], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.country-loading-spinner.topic-loading-spinner","span.country-loading-spinner.topic-loading-spinner",1102008128),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null):null)], null)], null)], null);
});
placesurfer.topic_ui.panel.panel = (function placesurfer$topic_ui$panel$panel(p__40643){
var map__40644 = p__40643;
var map__40644__$1 = cljs.core.__destructure_map(map__40644);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40644__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var set_topic_active_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40644__$1,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295));
var show_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40644__$1,new cljs.core.Keyword(null,"show-map!","show-map!",-168806063));
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40644__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion.topic-section","motion.topic-section",998234609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion.topic-list","motion.topic-list",-375323255),(function (){var iter__5503__auto__ = (function placesurfer$topic_ui$panel$panel_$_iter__40646(s__40647){
return (new cljs.core.LazySeq(null,(function (){
var s__40647__$1 = s__40647;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40647__$1);
if(temp__5825__auto__){
var s__40647__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40647__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__40647__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__40649 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__40648 = (0);
while(true){
if((i__40648 < size__5502__auto__)){
var map__40653 = cljs.core._nth(c__5501__auto__,i__40648);
var map__40653__$1 = cljs.core.__destructure_map(map__40653);
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40653__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40653__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40653__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40653__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var marker_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40653__$1,new cljs.core.Keyword(null,"marker-url","marker-url",153262178));
cljs.core.chunk_append(b__40649,placesurfer.topic_ui.panel.topic_row(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"active?","active?",459499776),active_QMARK_,new cljs.core.Keyword(null,"loading?","loading?",1905707049),loading_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"marker-url","marker-url",153262178),marker_url,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295),set_topic_active_BANG_], null)));

var G__40683 = (i__40648 + (1));
i__40648 = G__40683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40649),placesurfer$topic_ui$panel$panel_$_iter__40646(cljs.core.chunk_rest(s__40647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40649),null);
}
} else {
var map__40654 = cljs.core.first(s__40647__$2);
var map__40654__$1 = cljs.core.__destructure_map(map__40654);
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40654__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40654__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40654__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40654__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var marker_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40654__$1,new cljs.core.Keyword(null,"marker-url","marker-url",153262178));
return cljs.core.cons(placesurfer.topic_ui.panel.topic_row(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"active?","active?",459499776),active_QMARK_,new cljs.core.Keyword(null,"loading?","loading?",1905707049),loading_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"marker-url","marker-url",153262178),marker_url,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295),set_topic_active_BANG_], null)),placesurfer$topic_ui$panel$panel_$_iter__40646(cljs.core.rest(s__40647__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(rows);
})()], null),(cljs.core.truth_(mobile_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topic-actions","div.topic-actions",-688800070),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.topic-show","button.topic-show",-1628462498),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (show_map_BANG_.cljs$core$IFn$_invoke$arity$0 ? show_map_BANG_.cljs$core$IFn$_invoke$arity$0() : show_map_BANG_.call(null));
})], null)], null),"Show"], null)], null):null)], null);
});
placesurfer.topic_ui.panel.nav_tab = (function placesurfer$topic_ui$panel$nav_tab(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40690 = arguments.length;
var i__5750__auto___40691 = (0);
while(true){
if((i__5750__auto___40691 < len__5749__auto___40690)){
args__5755__auto__.push((arguments[i__5750__auto___40691]));

var G__40693 = (i__5750__auto___40691 + (1));
i__5750__auto___40691 = G__40693;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return placesurfer.topic_ui.panel.nav_tab.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(placesurfer.topic_ui.panel.nav_tab.cljs$core$IFn$_invoke$arity$variadic = (function (_topic_rows,active_page,p__40660){
var vec__40662 = p__40660;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40662,(0),null);
var label = (cljs.core.truth_(t)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","topics-alt","nav/topics-alt",-190191500)) : t.call(null,new cljs.core.Keyword("nav","topics-alt","nav/topics-alt",-190191500))):"Topics");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab.nav-topic-tab","sl-tab.nav-topic-tab",1645937818),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slot","slot",240229571),"nav",new cljs.core.Keyword(null,"panel","panel",-558637456),"topic",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topic","topic",-1960480691),active_page)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nav-topic-tab-icons","span.nav-topic-tab-icons",710963712),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nav-topic-icon-wrap","span.nav-topic-icon-wrap",1616011716),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav-topic-icon","img.nav-topic-icon",-1402102908),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/check.png",new cljs.core.Keyword(null,"alt","alt",-3214426),label], null)], null)], null)], null)], null);
}));

(placesurfer.topic_ui.panel.nav_tab.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(placesurfer.topic_ui.panel.nav_tab.cljs$lang$applyTo = (function (seq40655){
var G__40656 = cljs.core.first(seq40655);
var seq40655__$1 = cljs.core.next(seq40655);
var G__40657 = cljs.core.first(seq40655__$1);
var seq40655__$2 = cljs.core.next(seq40655__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40656,G__40657,seq40655__$2);
}));


//# sourceMappingURL=placesurfer.topic_ui.panel.js.map
