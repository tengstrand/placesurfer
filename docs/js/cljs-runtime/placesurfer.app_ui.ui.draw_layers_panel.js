goog.provide('placesurfer.app_ui.ui.draw_layers_panel');
placesurfer.app_ui.ui.draw_layers_panel.enter_key_QMARK_ = (function placesurfer$app_ui$ui$draw_layers_panel$enter_key_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key);
});
placesurfer.app_ui.ui.draw_layers_panel.submit_BANG_ = (function placesurfer$app_ui$ui$draw_layers_panel$submit_BANG_(draw_layer_draft_label,add_draw_layer_BANG_){
if(cljs.core.truth_((function (){var and__5023__auto__ = add_draw_layer_BANG_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(clojure.string.trim((function (){var or__5025__auto__ = draw_layer_draft_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()));
} else {
return and__5023__auto__;
}
})())){
return (add_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$0 ? add_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$0() : add_draw_layer_BANG_.call(null));
} else {
return null;
}
});
placesurfer.app_ui.ui.draw_layers_panel.panel = (function placesurfer$app_ui$ui$draw_layers_panel$panel(p__51571){
var map__51572 = p__51571;
var map__51572__$1 = cljs.core.__destructure_map(map__51572);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51572__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var draw_layer_draft_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51572__$1,new cljs.core.Keyword(null,"draw-layer-draft-label","draw-layer-draft-label",1594615451));
var update_topic_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51572__$1,new cljs.core.Keyword(null,"update-topic-options","update-topic-options",702207581));
var delete_draw_layer_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51572__$1,new cljs.core.Keyword(null,"delete-draw-layer!","delete-draw-layer!",1478497155));
var backend_online_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51572__$1,new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729));
var add_draw_layer_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51572__$1,new cljs.core.Keyword(null,"add-draw-layer!","add-draw-layer!",834233035));
var draw_layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51572__$1,new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771));
var select_draw_layer_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51572__$1,new cljs.core.Keyword(null,"select-draw-layer!","select-draw-layer!",1434495314));
var navigate_to_update_tab_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51572__$1,new cljs.core.Keyword(null,"navigate-to-update-tab!","navigate-to-update-tab!",643684179));
var draw_selected_layer_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51572__$1,new cljs.core.Keyword(null,"draw-selected-layer-id","draw-selected-layer-id",-1205706411));
var set_draw_layer_draft_label_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51572__$1,new cljs.core.Keyword(null,"set-draw-layer-draft-label!","set-draw-layer-draft-label!",-1660996489));
var topic_opt = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51570_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("pins",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__51570_SHARP_));
}),(function (){var or__5025__auto__ = update_topic_options;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.draw-layers-panel","aside.draw-layers-panel",793677151),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-panel-tab-bar","div.update-panel-tab-bar",1107520136),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-panel-tab.update-panel-tab--active","button.update-panel-tab.update-panel-tab--active",2076728555),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Lager"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-panel-tab-icon.update-panel-tab-icon--small","img.update-panel-tab-icon.update-panel-tab-icon--small",23601503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/layers.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Lager"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-panel-tab","button.update-panel-tab",-1255725585),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("topic","pins","topic/pins",1613571862)) : t.call(null,new cljs.core.Keyword("topic","pins","topic/pins",1613571862))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(navigate_to_update_tab_BANG_)){
return (navigate_to_update_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_to_update_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pins","pins",1725193285)) : navigate_to_update_tab_BANG_.call(null,new cljs.core.Keyword(null,"pins","pins",1725193285)));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-panel-tab-icon","img.update-panel-tab-icon",55759235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/pin.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-panel-tab","button.update-panel-tab",-1255725585),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","groups-alt","nav/groups-alt",645359531)) : t.call(null,new cljs.core.Keyword("nav","groups-alt","nav/groups-alt",645359531))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(navigate_to_update_tab_BANG_)){
return (navigate_to_update_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_to_update_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"groups","groups",-136896102)) : navigate_to_update_tab_BANG_.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102)));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-panel-tab-icon.update-panel-tab-icon--small","img.update-panel-tab-icon.update-panel-tab-icon--small",23601503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/groups.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),(cljs.core.truth_((function (){var and__5023__auto__ = backend_online_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return topic_opt;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-panel-tab","button.update-panel-tab",-1255725585),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$2(topic_opt,""),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(navigate_to_update_tab_BANG_)){
return (navigate_to_update_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_to_update_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"topic","topic",-1960480691)) : navigate_to_update_tab_BANG_.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691)));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-panel-tab-icon.update-panel-tab-icon--small","img.update-panel-tab-icon.update-panel-tab-icon--small",23601503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"marker-url","marker-url",153262178).cljs$core$IFn$_invoke$arity$1(topic_opt),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$2(topic_opt,"")], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-wrap","div.update-table-wrap",1469984077),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-layer-list","div.draw-layer-list",1018325577),((cljs.core.seq(draw_layers))?(function (){var iter__5503__auto__ = (function placesurfer$app_ui$ui$draw_layers_panel$panel_$_iter__51573(s__51574){
return (new cljs.core.LazySeq(null,(function (){
var s__51574__$1 = s__51574;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__51574__$1);
if(temp__5825__auto__){
var s__51574__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51574__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__51574__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__51576 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__51575 = (0);
while(true){
if((i__51575 < size__5502__auto__)){
var map__51577 = cljs.core._nth(c__5501__auto__,i__51575);
var map__51577__$1 = cljs.core.__destructure_map(map__51577);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51577__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51577__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__51576,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-layer-row.update-row","div.draw-layer-row.update-row",147832531),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,draw_selected_layer_id))?"update-row--selected":null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__51575,map__51577,map__51577__$1,id,label,c__5501__auto__,size__5502__auto__,b__51576,s__51574__$2,temp__5825__auto__,topic_opt,map__51572,map__51572__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_){
return (function (_){
if(cljs.core.truth_(select_draw_layer_BANG_)){
return (select_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1(id) : select_draw_layer_BANG_.call(null,id));
} else {
return null;
}
});})(i__51575,map__51577,map__51577__$1,id,label,c__5501__auto__,size__5502__auto__,b__51576,s__51574__$2,temp__5825__auto__,topic_opt,map__51572,map__51572__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.draw-layer-label","span.draw-layer-label",1299617197),label], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,draw_selected_layer_id))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.draw-layer-delete-btn","button.draw-layer-delete-btn",-1150905939),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Ta bort",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__51575,map__51577,map__51577__$1,id,label,c__5501__auto__,size__5502__auto__,b__51576,s__51574__$2,temp__5825__auto__,topic_opt,map__51572,map__51572__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_){
return (function (e){
e.stopPropagation();

if(cljs.core.truth_(delete_draw_layer_BANG_)){
return (delete_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1 ? delete_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1(id) : delete_draw_layer_BANG_.call(null,id));
} else {
return null;
}
});})(i__51575,map__51577,map__51577__$1,id,label,c__5501__auto__,size__5502__auto__,b__51576,s__51574__$2,temp__5825__auto__,topic_opt,map__51572,map__51572__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/trash.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Ta bort"], null)], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__51580 = (i__51575 + (1));
i__51575 = G__51580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51576),placesurfer$app_ui$ui$draw_layers_panel$panel_$_iter__51573(cljs.core.chunk_rest(s__51574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51576),null);
}
} else {
var map__51578 = cljs.core.first(s__51574__$2);
var map__51578__$1 = cljs.core.__destructure_map(map__51578);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51578__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51578__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-layer-row.update-row","div.draw-layer-row.update-row",147832531),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,draw_selected_layer_id))?"update-row--selected":null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__51578,map__51578__$1,id,label,s__51574__$2,temp__5825__auto__,topic_opt,map__51572,map__51572__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_){
return (function (_){
if(cljs.core.truth_(select_draw_layer_BANG_)){
return (select_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1(id) : select_draw_layer_BANG_.call(null,id));
} else {
return null;
}
});})(map__51578,map__51578__$1,id,label,s__51574__$2,temp__5825__auto__,topic_opt,map__51572,map__51572__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.draw-layer-label","span.draw-layer-label",1299617197),label], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,draw_selected_layer_id))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.draw-layer-delete-btn","button.draw-layer-delete-btn",-1150905939),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Ta bort",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__51578,map__51578__$1,id,label,s__51574__$2,temp__5825__auto__,topic_opt,map__51572,map__51572__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_){
return (function (e){
e.stopPropagation();

if(cljs.core.truth_(delete_draw_layer_BANG_)){
return (delete_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1 ? delete_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1(id) : delete_draw_layer_BANG_.call(null,id));
} else {
return null;
}
});})(map__51578,map__51578__$1,id,label,s__51574__$2,temp__5825__auto__,topic_opt,map__51572,map__51572__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/trash.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Ta bort"], null)], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),placesurfer$app_ui$ui$draw_layers_panel$panel_$_iter__51573(cljs.core.rest(s__51574__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(draw_layers);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.draw-layer-empty","p.draw-layer-empty",393303893),"Inga lager"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-layer-draft-row","div.draw-layer-draft-row",644996259),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.group-draft-input","input.group-draft-input",-1945888121),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Namn p\u00E5 nytt lager",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5025__auto__ = draw_layer_draft_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
if(cljs.core.truth_(set_draw_layer_draft_label_BANG_)){
var G__51579 = e.target.value;
return (set_draw_layer_draft_label_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_draw_layer_draft_label_BANG_.cljs$core$IFn$_invoke$arity$1(G__51579) : set_draw_layer_draft_label_BANG_.call(null,G__51579));
} else {
return null;
}
}),new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (e){
if(placesurfer.app_ui.ui.draw_layers_panel.enter_key_QMARK_(e)){
e.preventDefault();

return placesurfer.app_ui.ui.draw_layers_panel.submit_BANG_(draw_layer_draft_label,add_draw_layer_BANG_);
} else {
return null;
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.group-draft-submit-btn","button.group-draft-submit-btn",1172080393),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(cljs.core.seq(clojure.string.trim((function (){var or__5025__auto__ = draw_layer_draft_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return placesurfer.app_ui.ui.draw_layers_panel.submit_BANG_(draw_layer_draft_label,add_draw_layer_BANG_);
})], null)], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","new","pin/new",-2085523213)) : t.call(null,new cljs.core.Keyword("pin","new","pin/new",-2085523213)))], null)], null)], null)], null);
});

//# sourceMappingURL=placesurfer.app_ui.ui.draw_layers_panel.js.map
