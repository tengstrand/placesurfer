goog.provide('placesurfer.edit.pure.poi_panel');
placesurfer.edit.pure.poi_panel.unit_options = (function placesurfer$edit$pure$poi_panel$unit_options(t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"kilometer","kilometer",1608390927),new cljs.core.Keyword(null,"label","label",1718410804),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("poi","unit-kilometer","poi/unit-kilometer",-738942421)) : t.call(null,new cljs.core.Keyword("poi","unit-kilometer","poi/unit-kilometer",-738942421)))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"yard","yard",386111495),new cljs.core.Keyword(null,"label","label",1718410804),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("poi","unit-yard","poi/unit-yard",-1083839963)) : t.call(null,new cljs.core.Keyword("poi","unit-yard","poi/unit-yard",-1083839963)))], null)], null);
});
placesurfer.edit.pure.poi_panel.unit_select = (function placesurfer$edit$pure$poi_panel$unit_select(p__64523){
var map__64524 = p__64523;
var map__64524__$1 = cljs.core.__destructure_map(map__64524);
var poi_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword(null,"poi-unit","poi-unit",-75120831));
var set_poi_unit_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword(null,"set-poi-unit!","set-poi-unit!",-818039544));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.poi-control-row","div.poi-control-row",2060062874),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.poi-control-label","label.poi-control-label",-1732077457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"poi-unit"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("poi","unit","poi/unit",376662473)) : t.call(null,new cljs.core.Keyword("poi","unit","poi/unit",376662473)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.poi-control-select","select.poi-control-select",-2050271987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"poi-unit",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name((function (){var or__5025__auto__ = poi_unit;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"kilometer","kilometer",1608390927);
}
})()),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",-1163046502),(function (e){
var G__64525 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value);
return (set_poi_unit_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_poi_unit_BANG_.cljs$core$IFn$_invoke$arity$1(G__64525) : set_poi_unit_BANG_.call(null,G__64525));
})], null)], null),(function (){var iter__5503__auto__ = (function placesurfer$edit$pure$poi_panel$unit_select_$_iter__64526(s__64527){
return (new cljs.core.LazySeq(null,(function (){
var s__64527__$1 = s__64527;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__64527__$1);
if(temp__5825__auto__){
var s__64527__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64527__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__64527__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__64529 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__64528 = (0);
while(true){
if((i__64528 < size__5502__auto__)){
var map__64530 = cljs.core._nth(c__5501__auto__,i__64528);
var map__64530__$1 = cljs.core.__destructure_map(map__64530);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64530__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64530__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__64529,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(value)], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(value)], null)));

var G__64555 = (i__64528 + (1));
i__64528 = G__64555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64529),placesurfer$edit$pure$poi_panel$unit_select_$_iter__64526(cljs.core.chunk_rest(s__64527__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64529),null);
}
} else {
var map__64531 = cljs.core.first(s__64527__$2);
var map__64531__$1 = cljs.core.__destructure_map(map__64531);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64531__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64531__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(value)], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(value)], null)),placesurfer$edit$pure$poi_panel$unit_select_$_iter__64526(cljs.core.rest(s__64527__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(placesurfer.edit.pure.poi_panel.unit_options(t));
})()], null)], null);
});
placesurfer.edit.pure.poi_panel.pin_select = (function placesurfer$edit$pure$poi_panel$pin_select(p__64532){
var map__64533 = p__64532;
var map__64533__$1 = cljs.core.__destructure_map(map__64533);
var poi_pin_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64533__$1,new cljs.core.Keyword(null,"poi-pin-items","poi-pin-items",-1873480145));
var poi_pin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64533__$1,new cljs.core.Keyword(null,"poi-pin-id","poi-pin-id",-587886253));
var set_poi_pin_id_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64533__$1,new cljs.core.Keyword(null,"set-poi-pin-id!","set-poi-pin-id!",846355129));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64533__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.poi-control-row","div.poi-control-row",2060062874),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.poi-control-label","label.poi-control-label",-1732077457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"poi-pin"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("poi","interest-point","poi/interest-point",-891777834)) : t.call(null,new cljs.core.Keyword("poi","interest-point","poi/interest-point",-891777834)))], null),((cljs.core.seq(poi_pin_items))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.poi-control-select","select.poi-control-select",-2050271987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"poi-pin",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5025__auto__ = poi_pin_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",-1163046502),(function (e){
var G__64534 = e.target.value;
return (set_poi_pin_id_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_poi_pin_id_BANG_.cljs$core$IFn$_invoke$arity$1(G__64534) : set_poi_pin_id_BANG_.call(null,G__64534));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"\u2014"], null),(function (){var iter__5503__auto__ = (function placesurfer$edit$pure$poi_panel$pin_select_$_iter__64535(s__64536){
return (new cljs.core.LazySeq(null,(function (){
var s__64536__$1 = s__64536;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__64536__$1);
if(temp__5825__auto__){
var s__64536__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64536__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__64536__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__64538 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__64537 = (0);
while(true){
if((i__64537 < size__5502__auto__)){
var map__64539 = cljs.core._nth(c__5501__auto__,i__64537);
var map__64539__$1 = cljs.core.__destructure_map(map__64539);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64539__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64539__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append(b__64538,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__64557 = (i__64537 + (1));
i__64537 = G__64557;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64538),placesurfer$edit$pure$poi_panel$pin_select_$_iter__64535(cljs.core.chunk_rest(s__64536__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64538),null);
}
} else {
var map__64540 = cljs.core.first(s__64536__$2);
var map__64540__$1 = cljs.core.__destructure_map(map__64540);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64540__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64540__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),placesurfer$edit$pure$poi_panel$pin_select_$_iter__64535(cljs.core.rest(s__64536__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(poi_pin_items);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.poi-control-empty","span.poi-control-empty",851996766),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("poi","no-pin","poi/no-pin",-226819747)) : t.call(null,new cljs.core.Keyword("poi","no-pin","poi/no-pin",-226819747)))], null))], null);
});
placesurfer.edit.pure.poi_panel.circle_row = (function placesurfer$edit$pure$poi_panel$circle_row(p__64541){
var map__64542 = p__64541;
var map__64542__$1 = cljs.core.__destructure_map(map__64542);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var select_poi_circle_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword(null,"select-poi-circle!","select-poi-circle!",-1172874822));
var start_poi_circle_edit_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword(null,"start-poi-circle-edit!","start-poi-circle-edit!",-614400781));
var delete_poi_circle_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword(null,"delete-poi-circle!","delete-poi-circle!",-1156031712));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-pin-row-id","data-pin-row-id",-1547753251),id,new cljs.core.Keyword(null,"class","class",-2030961996),["group-row update-row update-row--draggable",(cljs.core.truth_(selected_QMARK_)?" update-row--selected":null)].join(''),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (select_poi_circle_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_poi_circle_BANG_.cljs$core$IFn$_invoke$arity$1(id) : select_poi_circle_BANG_.call(null,id));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.group-row-edit-btn","button.group-row-edit-btn",111390293),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","edit-title","pin/edit-title",382543352)) : t.call(null,new cljs.core.Keyword("pin","edit-title","pin/edit-title",382543352))),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","edit-title","pin/edit-title",382543352)) : t.call(null,new cljs.core.Keyword("pin","edit-title","pin/edit-title",382543352))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (start_poi_circle_edit_BANG_.cljs$core$IFn$_invoke$arity$1 ? start_poi_circle_edit_BANG_.cljs$core$IFn$_invoke$arity$1(id) : start_poi_circle_edit_BANG_.call(null,id));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/edit.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","edit-alt","pin/edit-alt",-2028968431)) : t.call(null,new cljs.core.Keyword("pin","edit-alt","pin/edit-alt",-2028968431)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.group-row-label","span.group-row-label",597444705),radius], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.group-row-delete","button.group-row-delete",1855914512),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","separator-delete","pin/separator-delete",689226782)) : t.call(null,new cljs.core.Keyword("pin","separator-delete","pin/separator-delete",689226782))),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","separator-delete","pin/separator-delete",689226782)) : t.call(null,new cljs.core.Keyword("pin","separator-delete","pin/separator-delete",689226782))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (delete_poi_circle_BANG_.cljs$core$IFn$_invoke$arity$1 ? delete_poi_circle_BANG_.cljs$core$IFn$_invoke$arity$1(id) : delete_poi_circle_BANG_.call(null,id));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/trash.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null)], null);
});
placesurfer.edit.pure.poi_panel.panel = (function placesurfer$edit$pure$poi_panel$panel(p__64543){
var map__64544 = p__64543;
var map__64544__$1 = cljs.core.__destructure_map(map__64544);
var set_poi_pin_id_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"set-poi-pin-id!","set-poi-pin-id!",846355129));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64544__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var select_poi_circle_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"select-poi-circle!","select-poi-circle!",-1172874822));
var delete_poi_circle_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"delete-poi-circle!","delete-poi-circle!",-1156031712));
var reorder_poi_circle_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"reorder-poi-circle!","reorder-poi-circle!",-1386532032));
var poi_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"poi-unit","poi-unit",-75120831));
var poi_draft_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"poi-draft-radius","poi-draft-radius",-1102029982));
var poi_circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"poi-circles","poi-circles",-1320990364));
var set_poi_unit_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"set-poi-unit!","set-poi-unit!",-818039544));
var poi_submit_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"poi-submit-enabled?","poi-submit-enabled?",-2083049044));
var submit_poi_draft_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"submit-poi-draft!","submit-poi-draft!",679309645));
var set_poi_draft_radius_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"set-poi-draft-radius!","set-poi-draft-radius!",-397952242));
var poi_pin_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"poi-pin-items","poi-pin-items",-1873480145));
var poi_selected_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"poi-selected-id","poi-selected-id",-1965194480));
var start_poi_circle_edit_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"start-poi-circle-edit!","start-poi-circle-edit!",-614400781));
var poi_pin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"poi-pin-id","poi-pin-id",-587886253));
var poi_editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64544__$1,new cljs.core.Keyword(null,"poi-editing?","poi-editing?",752299512));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.poi-panel","div.poi-panel",1451277778),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.poi-controls","div.poi-controls",379593662),placesurfer.edit.pure.poi_panel.unit_select(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"poi-unit","poi-unit",-75120831),poi_unit,new cljs.core.Keyword(null,"set-poi-unit!","set-poi-unit!",-818039544),set_poi_unit_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null)),placesurfer.edit.pure.poi_panel.pin_select(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"poi-pin-items","poi-pin-items",-1873480145),poi_pin_items,new cljs.core.Keyword(null,"poi-pin-id","poi-pin-id",-587886253),poi_pin_id,new cljs.core.Keyword(null,"set-poi-pin-id!","set-poi-pin-id!",846355129),set_poi_pin_id_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-wrap","div.update-table-wrap",1469984077),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.group-list","div.group-list",1107441191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__64545){
var map__64546 = p__64545;
var map__64546__$1 = cljs.core.__destructure_map(map__64546);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64546__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
if(cljs.core.truth_((function (){var and__5023__auto__ = node;
if(cljs.core.truth_(and__5023__auto__)){
return reorder_poi_circle_BANG_;
} else {
return and__5023__auto__;
}
})())){
return placesurfer.pin_ui.interface$.drag.ensure_pin_row_drag_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node,reorder_poi_circle_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),true], null)], 0));
} else {
return null;
}
})], null),((cljs.core.seq(poi_circles))?(function (){var iter__5503__auto__ = (function placesurfer$edit$pure$poi_panel$panel_$_iter__64547(s__64548){
return (new cljs.core.LazySeq(null,(function (){
var s__64548__$1 = s__64548;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__64548__$1);
if(temp__5825__auto__){
var s__64548__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64548__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__64548__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__64550 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__64549 = (0);
while(true){
if((i__64549 < size__5502__auto__)){
var map__64551 = cljs.core._nth(c__5501__auto__,i__64549);
var map__64551__$1 = cljs.core.__destructure_map(map__64551);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64551__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64551__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
cljs.core.chunk_append(b__64550,placesurfer.edit.pure.poi_panel.circle_row(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,poi_selected_id),new cljs.core.Keyword(null,"t","t",-1397832519),t,new cljs.core.Keyword(null,"select-poi-circle!","select-poi-circle!",-1172874822),select_poi_circle_BANG_,new cljs.core.Keyword(null,"start-poi-circle-edit!","start-poi-circle-edit!",-614400781),start_poi_circle_edit_BANG_,new cljs.core.Keyword(null,"delete-poi-circle!","delete-poi-circle!",-1156031712),delete_poi_circle_BANG_], null)));

var G__64566 = (i__64549 + (1));
i__64549 = G__64566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64550),placesurfer$edit$pure$poi_panel$panel_$_iter__64547(cljs.core.chunk_rest(s__64548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64550),null);
}
} else {
var map__64552 = cljs.core.first(s__64548__$2);
var map__64552__$1 = cljs.core.__destructure_map(map__64552);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64552__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64552__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
return cljs.core.cons(placesurfer.edit.pure.poi_panel.circle_row(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,poi_selected_id),new cljs.core.Keyword(null,"t","t",-1397832519),t,new cljs.core.Keyword(null,"select-poi-circle!","select-poi-circle!",-1172874822),select_poi_circle_BANG_,new cljs.core.Keyword(null,"start-poi-circle-edit!","start-poi-circle-edit!",-614400781),start_poi_circle_edit_BANG_,new cljs.core.Keyword(null,"delete-poi-circle!","delete-poi-circle!",-1156031712),delete_poi_circle_BANG_], null)),placesurfer$edit$pure$poi_panel$panel_$_iter__64547(cljs.core.rest(s__64548__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(poi_circles);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.group-list-empty","p.group-list-empty",1169101302),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("poi","empty","poi/empty",767989660)) : t.call(null,new cljs.core.Keyword("poi","empty","poi/empty",767989660)))], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.group-draft-row","div.group-draft-row",109324973),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.group-draft-input","input.group-draft-input",-1945888121),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"poi-draft-input",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),"0",new cljs.core.Keyword(null,"step","step",1288888124),"any",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("poi","radius-placeholder","poi/radius-placeholder",446042814)) : t.call(null,new cljs.core.Keyword("poi","radius-placeholder","poi/radius-placeholder",446042814))),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5025__auto__ = poi_draft_radius;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__64553 = e.target.value;
return (set_poi_draft_radius_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_poi_draft_radius_BANG_.cljs$core$IFn$_invoke$arity$1(G__64553) : set_poi_draft_radius_BANG_.call(null,G__64553));
}),new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (e){
if(cljs.core.truth_((function (){var and__5023__auto__ = poi_submit_enabled_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return placesurfer.pin_ui.interface$.search.enter_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
} else {
return and__5023__auto__;
}
})())){
e.preventDefault();

return (submit_poi_draft_BANG_.cljs$core$IFn$_invoke$arity$0 ? submit_poi_draft_BANG_.cljs$core$IFn$_invoke$arity$0() : submit_poi_draft_BANG_.call(null));
} else {
return null;
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.group-draft-submit-btn","button.group-draft-submit-btn",1172080393),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(poi_submit_enabled_QMARK_),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (submit_poi_draft_BANG_.cljs$core$IFn$_invoke$arity$0 ? submit_poi_draft_BANG_.cljs$core$IFn$_invoke$arity$0() : submit_poi_draft_BANG_.call(null));
})], null)], null),(cljs.core.truth_(poi_editing_QMARK_)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","separator-ok","pin/separator-ok",1071484854)) : t.call(null,new cljs.core.Keyword("pin","separator-ok","pin/separator-ok",1071484854))):(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("poi","add","poi/add",234899349)) : t.call(null,new cljs.core.Keyword("poi","add","poi/add",234899349))))], null)], null)], null)], null);
});

//# sourceMappingURL=placesurfer.edit.pure.poi_panel.js.map
