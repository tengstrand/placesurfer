goog.provide('hitteri.pin_ui.pure.group_field');
hitteri.pin_ui.pure.group_field.close_group_dropdown_BANG_ = (function hitteri$pin_ui$pure$group_field$close_group_dropdown_BANG_(e){
var temp__5825__auto__ = e.target.closest("details");
if(cljs.core.truth_(temp__5825__auto__)){
var details = temp__5825__auto__;
return details.removeAttribute("open");
} else {
return null;
}
});
hitteri.pin_ui.pure.group_field.group_option = (function hitteri$pin_ui$pure$group_field$group_option(group_id,label,selected_QMARK_,set_pin_group_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"pin-group-dropdown-option pin-group-dropdown-option--selected":"pin-group-dropdown-option"),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.preventDefault();

(set_pin_group_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pin_group_BANG_.cljs$core$IFn$_invoke$arity$1(group_id) : set_pin_group_BANG_.call(null,group_id));

return hitteri.pin_ui.pure.group_field.close_group_dropdown_BANG_(e);
})], null)], null),label], null);
});
hitteri.pin_ui.pure.group_field.group_row = (function hitteri$pin_ui$pure$group_field$group_row(p__50236){
var map__50237 = p__50236;
var map__50237__$1 = cljs.core.__destructure_map(map__50237);
var group_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50237__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var group_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50237__$1,new cljs.core.Keyword(null,"group-options","group-options",-1097886023));
var selected_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50237__$1,new cljs.core.Keyword(null,"selected-label","selected-label",-902280703));
var set_pin_group_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50237__$1,new cljs.core.Keyword(null,"set-pin-group!","set-pin-group!",928267686));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50237__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","group","pin/group",582469813)) : t.call(null,new cljs.core.Keyword("pin","group","pin/group",582469813)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details.pin-group-dropdown","details.pin-group-dropdown",353037055),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary.pin-group-dropdown-trigger","summary.pin-group-dropdown-trigger",902838109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pin-group-dropdown-label","span.pin-group-dropdown-label",1558773940),selected_label], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-group-dropdown-menu","div.pin-group-dropdown-menu",256921007),hitteri.pin_ui.pure.group_field.group_option(null,"-",(group_id == null),set_pin_group_BANG_),(function (){var iter__5503__auto__ = (function hitteri$pin_ui$pure$group_field$group_row_$_iter__50238(s__50239){
return (new cljs.core.LazySeq(null,(function (){
var s__50239__$1 = s__50239;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50239__$1);
if(temp__5825__auto__){
var s__50239__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50239__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__50239__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__50241 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__50240 = (0);
while(true){
if((i__50240 < size__5502__auto__)){
var map__50242 = cljs.core._nth(c__5501__auto__,i__50240);
var map__50242__$1 = cljs.core.__destructure_map(map__50242);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50242__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50242__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__50241,hitteri.pin_ui.pure.group_field.group_option(id,label,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_id,id),set_pin_group_BANG_));

var G__50244 = (i__50240 + (1));
i__50240 = G__50244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50241),hitteri$pin_ui$pure$group_field$group_row_$_iter__50238(cljs.core.chunk_rest(s__50239__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50241),null);
}
} else {
var map__50243 = cljs.core.first(s__50239__$2);
var map__50243__$1 = cljs.core.__destructure_map(map__50243);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50243__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50243__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(hitteri.pin_ui.pure.group_field.group_option(id,label,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_id,id),set_pin_group_BANG_),hitteri$pin_ui$pure$group_field$group_row_$_iter__50238(cljs.core.rest(s__50239__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(group_options);
})()], null)], null)], null)], null);
});

//# sourceMappingURL=hitteri.pin_ui.pure.group_field.js.map
