goog.provide('placesurfer.group_ui.pure.panel');
placesurfer.group_ui.pure.panel.submit_draft_BANG_ = (function placesurfer$group_ui$pure$panel$submit_draft_BANG_(p__41497){
var map__41498 = p__41497;
var map__41498__$1 = cljs.core.__destructure_map(map__41498);
var group_editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41498__$1,new cljs.core.Keyword(null,"group-editing?","group-editing?",1804475002));
var add_group_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41498__$1,new cljs.core.Keyword(null,"add-group!","add-group!",999555200));
var confirm_group_edit_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41498__$1,new cljs.core.Keyword(null,"confirm-group-edit!","confirm-group-edit!",-1845117146));
if(cljs.core.truth_(group_editing_QMARK_)){
return (confirm_group_edit_BANG_.cljs$core$IFn$_invoke$arity$0 ? confirm_group_edit_BANG_.cljs$core$IFn$_invoke$arity$0() : confirm_group_edit_BANG_.call(null));
} else {
return (add_group_BANG_.cljs$core$IFn$_invoke$arity$0 ? add_group_BANG_.cljs$core$IFn$_invoke$arity$0() : add_group_BANG_.call(null));
}
});
placesurfer.group_ui.pure.panel.panel = (function placesurfer$group_ui$pure$panel$panel(p__41503){
var map__41504 = p__41503;
var map__41504__$1 = cljs.core.__destructure_map(map__41504);
var props = map__41504__$1;
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41504__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var group_editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504__$1,new cljs.core.Keyword(null,"group-editing?","group-editing?",1804475002));
var add_group_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504__$1,new cljs.core.Keyword(null,"add-group!","add-group!",999555200));
var group_submit_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504__$1,new cljs.core.Keyword(null,"group-submit-enabled?","group-submit-enabled?",1270018337));
var start_group_row_edit_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504__$1,new cljs.core.Keyword(null,"start-group-row-edit!","start-group-row-edit!",548705731));
var confirm_group_edit_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504__$1,new cljs.core.Keyword(null,"confirm-group-edit!","confirm-group-edit!",-1845117146));
var group_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504__$1,new cljs.core.Keyword(null,"group-rows","group-rows",-2004148090));
var delete_group_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504__$1,new cljs.core.Keyword(null,"delete-group-row!","delete-group-row!",-2100724118));
var reorder_group_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504__$1,new cljs.core.Keyword(null,"reorder-group-row!","reorder-group-row!",1704126287));
var select_group_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504__$1,new cljs.core.Keyword(null,"select-group-row!","select-group-row!",-743191727));
var group_selected_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504__$1,new cljs.core.Keyword(null,"group-selected-id","group-selected-id",-1090861711));
var set_group_draft_label_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504__$1,new cljs.core.Keyword(null,"set-group-draft-label!","set-group-draft-label!",-1968101997));
var group_draft_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504__$1,new cljs.core.Keyword(null,"group-draft-label","group-draft-label",1424877336));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.groups-page","section.groups-page",-1204429162),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.group-ui-panel","div.group-ui-panel",1670990604),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-wrap","div.update-table-wrap",1469984077),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.group-list","div.group-list",1107441191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__41507){
var map__41508 = p__41507;
var map__41508__$1 = cljs.core.__destructure_map(map__41508);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41508__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
if(cljs.core.truth_((function (){var and__5023__auto__ = node;
if(cljs.core.truth_(and__5023__auto__)){
return reorder_group_row_BANG_;
} else {
return and__5023__auto__;
}
})())){
return placesurfer.pin_ui.interface$.drag.ensure_pin_row_drag_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node,reorder_group_row_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),true], null)], 0));
} else {
return null;
}
})], null),((cljs.core.seq(group_rows))?(function (){var iter__5503__auto__ = (function placesurfer$group_ui$pure$panel$panel_$_iter__41510(s__41511){
return (new cljs.core.LazySeq(null,(function (){
var s__41511__$1 = s__41511;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41511__$1);
if(temp__5825__auto__){
var s__41511__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41511__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__41511__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__41513 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__41512 = (0);
while(true){
if((i__41512 < size__5502__auto__)){
var map__41518 = cljs.core._nth(c__5501__auto__,i__41512);
var map__41518__$1 = cljs.core.__destructure_map(map__41518);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41518__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41518__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__41513,placesurfer.group_ui.pure.row.row(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,group_selected_id),new cljs.core.Keyword(null,"select-group-row!","select-group-row!",-743191727),select_group_row_BANG_,new cljs.core.Keyword(null,"start-group-row-edit!","start-group-row-edit!",548705731),start_group_row_edit_BANG_,new cljs.core.Keyword(null,"delete-group-row!","delete-group-row!",-2100724118),delete_group_row_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null)));

var G__41532 = (i__41512 + (1));
i__41512 = G__41532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41513),placesurfer$group_ui$pure$panel$panel_$_iter__41510(cljs.core.chunk_rest(s__41511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41513),null);
}
} else {
var map__41520 = cljs.core.first(s__41511__$2);
var map__41520__$1 = cljs.core.__destructure_map(map__41520);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41520__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41520__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(placesurfer.group_ui.pure.row.row(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,group_selected_id),new cljs.core.Keyword(null,"select-group-row!","select-group-row!",-743191727),select_group_row_BANG_,new cljs.core.Keyword(null,"start-group-row-edit!","start-group-row-edit!",548705731),start_group_row_edit_BANG_,new cljs.core.Keyword(null,"delete-group-row!","delete-group-row!",-2100724118),delete_group_row_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null)),placesurfer$group_ui$pure$panel$panel_$_iter__41510(cljs.core.rest(s__41511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(group_rows);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.group-list-empty","p.group-list-empty",1169101302),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","separator-manage-empty","pin/separator-manage-empty",66813482)) : t.call(null,new cljs.core.Keyword("pin","separator-manage-empty","pin/separator-manage-empty",66813482)))], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.group-draft-row","div.group-draft-row",109324973),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.group-draft-input","input.group-draft-input",-1945888121),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"group-draft-input",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5025__auto__ = group_draft_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__41522 = e.target.value;
return (set_group_draft_label_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_group_draft_label_BANG_.cljs$core$IFn$_invoke$arity$1(G__41522) : set_group_draft_label_BANG_.call(null,G__41522));
}),new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (e){
if(cljs.core.truth_((function (){var and__5023__auto__ = group_submit_enabled_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return placesurfer.pin_ui.interface$.search.enter_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
} else {
return and__5023__auto__;
}
})())){
e.preventDefault();

return placesurfer.group_ui.pure.panel.submit_draft_BANG_(props);
} else {
return null;
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.group-draft-submit-btn","button.group-draft-submit-btn",1172080393),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(group_submit_enabled_QMARK_),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return placesurfer.group_ui.pure.panel.submit_draft_BANG_(props);
})], null)], null),(cljs.core.truth_(group_editing_QMARK_)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","separator-ok","pin/separator-ok",1071484854)) : t.call(null,new cljs.core.Keyword("pin","separator-ok","pin/separator-ok",1071484854))):(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","new","pin/new",-2085523213)) : t.call(null,new cljs.core.Keyword("pin","new","pin/new",-2085523213))))], null)], null)], null)], null)], null);
});

//# sourceMappingURL=placesurfer.group_ui.pure.panel.js.map
