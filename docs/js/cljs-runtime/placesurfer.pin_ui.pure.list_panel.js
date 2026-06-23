goog.provide('placesurfer.pin_ui.pure.list_panel');
placesurfer.pin_ui.pure.list_panel.display_cell = (function placesurfer$pin_ui$pure$list_panel$display_cell(v){
if((v == null)){
return "";
} else {
if(typeof v === 'number'){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
});
placesurfer.pin_ui.pure.list_panel.icon_cell = (function placesurfer$pin_ui$pure$list_panel$icon_cell(values){
var icon_url = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282).cljs$core$IFn$_invoke$arity$1(values);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.pin_ui.pure.forms.icon_url(placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto____$1 = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(values);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return placesurfer.pin_ui.pure.forms.default_icon;
}
})()));
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pin-table-icon-cell","td.pin-table-icon-cell",211361061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.pin-table-icon","img.pin-table-icon",1945489306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),icon_url,new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null);
});
placesurfer.pin_ui.pure.list_panel.drag_handle_cell = (function placesurfer$pin_ui$pure$list_panel$drag_handle_cell(t,show_drag_handle_QMARK_){
if(cljs.core.truth_(show_drag_handle_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pin-table-drag-cell","td.pin-table-drag-cell",2011447549),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pin-row-drag-handle","button.pin-row-drag-handle",1294358474),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","drag-to-reorder","pin/drag-to-reorder",-141996372)) : t.call(null,new cljs.core.Keyword("pin","drag-to-reorder","pin/drag-to-reorder",-141996372))),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","drag-to-reorder","pin/drag-to-reorder",-141996372)) : t.call(null,new cljs.core.Keyword("pin","drag-to-reorder","pin/drag-to-reorder",-141996372)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/dots.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null)], null);
} else {
return null;
}
});
placesurfer.pin_ui.pure.list_panel.drag_handle = (function placesurfer$pin_ui$pure$list_panel$drag_handle(t,show_drag_handle_QMARK_){
if(cljs.core.truth_(show_drag_handle_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pin-row-drag-handle","button.pin-row-drag-handle",1294358474),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","drag-to-reorder","pin/drag-to-reorder",-141996372)) : t.call(null,new cljs.core.Keyword("pin","drag-to-reorder","pin/drag-to-reorder",-141996372))),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","drag-to-reorder","pin/drag-to-reorder",-141996372)) : t.call(null,new cljs.core.Keyword("pin","drag-to-reorder","pin/drag-to-reorder",-141996372)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/dots.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null);
} else {
return null;
}
});
placesurfer.pin_ui.pure.list_panel.table_cell = (function placesurfer$pin_ui$pure$list_panel$table_cell(values,key){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"icon","icon",1679606541))){
return placesurfer.pin_ui.pure.list_panel.icon_cell(values);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),placesurfer.pin_ui.pure.list_panel.display_cell(cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,key))], null);
}
});
placesurfer.pin_ui.pure.list_panel.row_attrs = (function placesurfer$pin_ui$pure$list_panel$row_attrs(var_args){
var args__5755__auto__ = [];
var len__5749__auto___41482 = arguments.length;
var i__5750__auto___41483 = (0);
while(true){
if((i__5750__auto___41483 < len__5749__auto___41482)){
args__5755__auto__.push((arguments[i__5750__auto___41483]));

var G__41484 = (i__5750__auto___41483 + (1));
i__5750__auto___41483 = G__41484;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return placesurfer.pin_ui.pure.list_panel.row_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(placesurfer.pin_ui.pure.list_panel.row_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (id,selected_QMARK_,drag_from_whole_row_QMARK_,p__41366){
var vec__41367 = p__41366;
var map__41370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41367,(0),null);
var map__41370__$1 = cljs.core.__destructure_map(map__41370);
var topic_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41370__$1,new cljs.core.Keyword(null,"topic-row?","topic-row?",755619087));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-pin-row-id","data-pin-row-id",-1547753251),id,new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(selected_QMARK_)?"update-row--selected":null),(cljs.core.truth_(topic_row_QMARK_)?" pin-table-row--topic":null),(cljs.core.truth_(drag_from_whole_row_QMARK_)?" update-row--draggable":null)].join('')], null);
}));

(placesurfer.pin_ui.pure.list_panel.row_attrs.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(placesurfer.pin_ui.pure.list_panel.row_attrs.cljs$lang$applyTo = (function (seq41362){
var G__41363 = cljs.core.first(seq41362);
var seq41362__$1 = cljs.core.next(seq41362);
var G__41364 = cljs.core.first(seq41362__$1);
var seq41362__$2 = cljs.core.next(seq41362__$1);
var G__41365 = cljs.core.first(seq41362__$2);
var seq41362__$3 = cljs.core.next(seq41362__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41363,G__41364,G__41365,seq41362__$3);
}));

placesurfer.pin_ui.pure.list_panel.pin_row_map_hover_handlers = (function placesurfer$pin_ui$pure$list_panel$pin_row_map_hover_handlers(id,values){
var match = ((((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(values) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(values) === 'number')))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(values),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(values)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),(function (_){
return placesurfer.map_ui.interface$.set_marker_row_emphasis_BANG_(match);
}),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),(function (_){
return placesurfer.map_ui.interface$.clear_marker_row_emphasis_BANG_();
})], null);
});
placesurfer.pin_ui.pure.list_panel.topics_toggle_btn = (function placesurfer$pin_ui$pure$list_panel$topics_toggle_btn(p__41373){
var map__41374 = p__41373;
var map__41374__$1 = cljs.core.__destructure_map(map__41374);
var pin_show_topics_on_map_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41374__$1,new cljs.core.Keyword(null,"pin-show-topics-on-map?","pin-show-topics-on-map?",744248117),true);
var toggle_pin_topics_on_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41374__$1,new cljs.core.Keyword(null,"toggle-pin-topics-on-map!","toggle-pin-topics-on-map!",-1030377050));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41374__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pin-topics-toggle-btn","button.pin-topics-toggle-btn",1762396473),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(pin_show_topics_on_map_QMARK_)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","hide-topics-on-map","pin/hide-topics-on-map",1109995972)) : t.call(null,new cljs.core.Keyword("pin","hide-topics-on-map","pin/hide-topics-on-map",1109995972))):(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","show-topics-on-map","pin/show-topics-on-map",1838263441)) : t.call(null,new cljs.core.Keyword("pin","show-topics-on-map","pin/show-topics-on-map",1838263441)))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (toggle_pin_topics_on_map_BANG_.cljs$core$IFn$_invoke$arity$0 ? toggle_pin_topics_on_map_BANG_.cljs$core$IFn$_invoke$arity$0() : toggle_pin_topics_on_map_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(cljs.core.truth_(pin_show_topics_on_map_QMARK_)?"/images/visible.png":"/images/hidden.png"),new cljs.core.Keyword(null,"alt","alt",-3214426),(cljs.core.truth_(pin_show_topics_on_map_QMARK_)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","hide-topics-on-map","pin/hide-topics-on-map",1109995972)) : t.call(null,new cljs.core.Keyword("pin","hide-topics-on-map","pin/hide-topics-on-map",1109995972))):(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","show-topics-on-map","pin/show-topics-on-map",1838263441)) : t.call(null,new cljs.core.Keyword("pin","show-topics-on-map","pin/show-topics-on-map",1838263441))))], null)], null)], null);
});
placesurfer.pin_ui.pure.list_panel.preview_toggle_btn = (function placesurfer$pin_ui$pure$list_panel$preview_toggle_btn(p__41378){
var map__41379 = p__41378;
var map__41379__$1 = cljs.core.__destructure_map(map__41379);
var pin_show_preview_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41379__$1,new cljs.core.Keyword(null,"pin-show-preview?","pin-show-preview?",837912811));
var toggle_pin_preview_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41379__$1,new cljs.core.Keyword(null,"toggle-pin-preview!","toggle-pin-preview!",-1662221897));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41379__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pin-preview-toggle-btn","button.pin-preview-toggle-btn",-940824331),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(pin_show_preview_QMARK_)?"pin-preview-toggle-btn--active":null),new cljs.core.Keyword(null,"aria-pressed","aria-pressed",-1749058631),cljs.core.boolean$(pin_show_preview_QMARK_),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(pin_show_preview_QMARK_)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","preview-show-table","pin/preview-show-table",1365243492)) : t.call(null,new cljs.core.Keyword("pin","preview-show-table","pin/preview-show-table",1365243492))):(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","preview-show-listing","pin/preview-show-listing",1128674996)) : t.call(null,new cljs.core.Keyword("pin","preview-show-listing","pin/preview-show-listing",1128674996)))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (toggle_pin_preview_BANG_.cljs$core$IFn$_invoke$arity$0 ? toggle_pin_preview_BANG_.cljs$core$IFn$_invoke$arity$0() : toggle_pin_preview_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/image.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","preview-show-listing","pin/preview-show-listing",1128674996)) : t.call(null,new cljs.core.Keyword("pin","preview-show-listing","pin/preview-show-listing",1128674996)))], null)], null)], null);
});
placesurfer.pin_ui.pure.list_panel.browse_toolbar_end = (function placesurfer$pin_ui$pure$list_panel$browse_toolbar_end(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-toolbar-end","div.update-table-toolbar-end",1563825925),placesurfer.pin_ui.pure.list_panel.topics_toggle_btn(props),placesurfer.pin_ui.pure.list_panel.preview_toggle_btn(props)], null);
});
placesurfer.pin_ui.pure.list_panel.toolbar = (function placesurfer$pin_ui$pure$list_panel$toolbar(p__41383){
var map__41384 = p__41383;
var map__41384__$1 = cljs.core.__destructure_map(map__41384);
var props = map__41384__$1;
var export_pins_to_clipboard_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"export-pins-to-clipboard!","export-pins-to-clipboard!",-1310589031));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41384__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var delete_selected_pin_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"delete-selected-pin!","delete-selected-pin!",844028443));
var pin_export_copied_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"pin-export-copied?","pin-export-copied?",515928541));
var show_preview_toggle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41384__$1,new cljs.core.Keyword(null,"show-preview-toggle?","show-preview-toggle?",-1748844803),true);
var paste_place_from_clipboard_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"paste-place-from-clipboard!","paste-place-from-clipboard!",-1926398880));
var pin_delete_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"pin-delete-enabled?","pin-delete-enabled?",1115478432));
var pin_edit_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"pin-edit-enabled?","pin-edit-enabled?",-1466005951));
var create_new_pin_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"create-new-pin!","create-new-pin!",490161225));
var open_pin_editor_edit_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"open-pin-editor-edit!","open-pin-editor-edit!",1365408522));
var pin_show_preview_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"pin-show-preview?","pin-show-preview?",837912811));
var pin_editor_inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"pin-editor-inline?","pin-editor-inline?",766617935));
var toggle_pin_preview_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"toggle-pin-preview!","toggle-pin-preview!",-1662221897));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-toolbar-controls","div.update-table-toolbar-controls",-1978219037),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pin-new-btn","button.pin-new-btn",1111220987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","new-title","pin/new-title",-2087273511)) : t.call(null,new cljs.core.Keyword("pin","new-title","pin/new-title",-2087273511))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (create_new_pin_BANG_.cljs$core$IFn$_invoke$arity$0 ? create_new_pin_BANG_.cljs$core$IFn$_invoke$arity$0() : create_new_pin_BANG_.call(null));
})], null)], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","new","pin/new",-2085523213)) : t.call(null,new cljs.core.Keyword("pin","new","pin/new",-2085523213)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pin-edit-btn","button.pin-edit-btn",-22035518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","new-place-title","pin/new-place-title",1781159205)) : t.call(null,new cljs.core.Keyword("pin","new-place-title","pin/new-place-title",1781159205))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (paste_place_from_clipboard_BANG_.cljs$core$IFn$_invoke$arity$0 ? paste_place_from_clipboard_BANG_.cljs$core$IFn$_invoke$arity$0() : paste_place_from_clipboard_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/import.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"inline-flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pin-edit-btn","button.pin-edit-btn",-22035518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","export-title","pin/export-title",1780650259)) : t.call(null,new cljs.core.Keyword("pin","export-title","pin/export-title",1780650259))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (export_pins_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$0 ? export_pins_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$0() : export_pins_to_clipboard_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/export.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),(cljs.core.truth_(pin_export_copied_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"left","left",-399115937)],["translateX(-50%)","white","nowrap","0.75rem","100%","500","0.25rem","rgba(22,163,74,0.92)","9999","0.2rem 0.5rem","absolute","4px","none","50%"])], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","export-copied","pin/export-copied",1587057546)) : t.call(null,new cljs.core.Keyword("pin","export-copied","pin/export-copied",1587057546)))], null):null)], null),(cljs.core.truth_(pin_editor_inline_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pin-edit-btn","button.pin-edit-btn",-22035518),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(pin_edit_enabled_QMARK_),new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","edit-title","pin/edit-title",382543352)) : t.call(null,new cljs.core.Keyword("pin","edit-title","pin/edit-title",382543352))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (open_pin_editor_edit_BANG_.cljs$core$IFn$_invoke$arity$0 ? open_pin_editor_edit_BANG_.cljs$core$IFn$_invoke$arity$0() : open_pin_editor_edit_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/edit.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","edit-alt","pin/edit-alt",-2028968431)) : t.call(null,new cljs.core.Keyword("pin","edit-alt","pin/edit-alt",-2028968431)))], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-delete-btn","button.update-delete-btn",205033335),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(pin_delete_enabled_QMARK_),new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","delete","pin/delete",-1768522691)) : t.call(null,new cljs.core.Keyword("pin","delete","pin/delete",-1768522691))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (delete_selected_pin_BANG_.cljs$core$IFn$_invoke$arity$0 ? delete_selected_pin_BANG_.cljs$core$IFn$_invoke$arity$0() : delete_selected_pin_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/trash.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","delete","pin/delete",-1768522691)) : t.call(null,new cljs.core.Keyword("pin","delete","pin/delete",-1768522691)))], null)], null)], null),(cljs.core.truth_(show_preview_toggle_QMARK_)?placesurfer.pin_ui.pure.list_panel.preview_toggle_btn(props):null)], null);
});
placesurfer.pin_ui.pure.list_panel.table_col = (function placesurfer$pin_ui$pure$list_panel$table_col(key){
var G__41385 = key;
var G__41385__$1 = (((G__41385 instanceof cljs.core.Keyword))?G__41385.fqn:null);
switch (G__41385__$1) {
case "icon":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col.pin-table-icon-col","col.pin-table-icon-col",-520600509)], null);

break;
case "name":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col.pin-table-name-col","col.pin-table-name-col",965303262)], null);

break;
case "address":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col.pin-table-address-col","col.pin-table-address-col",-696552943)], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null);

}
});
placesurfer.pin_ui.pure.list_panel.table_has_header_labels_QMARK_ = (function placesurfer$pin_ui$pure$list_panel$table_has_header_labels_QMARK_(columns){
return cljs.core.boolean$(cljs.core.some((function (p1__41386_SHARP_){
return (!(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__41386_SHARP_))));
}),columns));
});
placesurfer.pin_ui.pure.list_panel.compact_table = (function placesurfer$pin_ui$pure$list_panel$compact_table(p__41387){
var map__41388 = p__41387;
var map__41388__$1 = cljs.core.__destructure_map(map__41388);
var props = map__41388__$1;
var pin_table_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41388__$1,new cljs.core.Keyword(null,"pin-table-rows","pin-table-rows",729424278));
var pin_table_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41388__$1,new cljs.core.Keyword(null,"pin-table-columns","pin-table-columns",1161167915));
var pin_row_click_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41388__$1,new cljs.core.Keyword(null,"pin-row-click!","pin-row-click!",820497426));
var show_drag_handle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41388__$1,new cljs.core.Keyword(null,"show-drag-handle?","show-drag-handle?",1932372815),true);
var drag_from_whole_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41388__$1,new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),false);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41388__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var column_count = cljs.core.count(pin_table_columns);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.update-table","table.update-table",-64080666),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colgroup","colgroup",651118645),(function (){var iter__5503__auto__ = (function placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41390(s__41391){
return (new cljs.core.LazySeq(null,(function (){
var s__41391__$1 = s__41391;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41391__$1);
if(temp__5825__auto__){
var s__41391__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41391__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__41391__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__41393 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__41392 = (0);
while(true){
if((i__41392 < size__5502__auto__)){
var map__41396 = cljs.core._nth(c__5501__auto__,i__41392);
var map__41396__$1 = cljs.core.__destructure_map(map__41396);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41396__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__41393,placesurfer.pin_ui.pure.list_panel.table_col(key));

var G__41503 = (i__41392 + (1));
i__41392 = G__41503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41393),placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41390(cljs.core.chunk_rest(s__41391__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41393),null);
}
} else {
var map__41398 = cljs.core.first(s__41391__$2);
var map__41398__$1 = cljs.core.__destructure_map(map__41398);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41398__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(placesurfer.pin_ui.pure.list_panel.table_col(key),placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41390(cljs.core.rest(s__41391__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(pin_table_columns);
})(),(cljs.core.truth_(show_drag_handle_QMARK_)?cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col.pin-table-drag-col","col.pin-table-drag-col",-133583567)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"col-drag"], null)):null)], null),((placesurfer.pin_ui.pure.list_panel.table_has_header_labels_QMARK_(pin_table_columns))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.update-table-header-row","tr.update-table-header-row",-1584248135),(function (){var iter__5503__auto__ = (function placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41400(s__41401){
return (new cljs.core.LazySeq(null,(function (){
var s__41401__$1 = s__41401;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41401__$1);
if(temp__5825__auto__){
var s__41401__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41401__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__41401__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__41403 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__41402 = (0);
while(true){
if((i__41402 < size__5502__auto__)){
var map__41406 = cljs.core._nth(c__5501__auto__,i__41402);
var map__41406__$1 = cljs.core.__destructure_map(map__41406);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41406__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41406__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__41403,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(key)], null)));

var G__41506 = (i__41402 + (1));
i__41402 = G__41506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41403),placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41400(cljs.core.chunk_rest(s__41401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41403),null);
}
} else {
var map__41408 = cljs.core.first(s__41401__$2);
var map__41408__$1 = cljs.core.__destructure_map(map__41408);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41408__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41408__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(key)], null)),placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41400(cljs.core.rest(s__41401__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(pin_table_columns);
})(),(cljs.core.truth_(show_drag_handle_QMARK_)?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.pin-table-drag-header","th.pin-table-drag-header",1340339678),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"drag-header"], null)):null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41409(s__41410){
return (new cljs.core.LazySeq(null,(function (){
var s__41410__$1 = s__41410;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41410__$1);
if(temp__5825__auto__){
var s__41410__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41410__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__41410__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__41412 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__41411 = (0);
while(true){
if((i__41411 < size__5502__auto__)){
var map__41415 = cljs.core._nth(c__5501__auto__,i__41411);
var map__41415__$1 = cljs.core.__destructure_map(map__41415);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41415__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41415__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41415__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41415__$1,new cljs.core.Keyword(null,"values","values",372645556));
cljs.core.chunk_append(b__41412,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"separator","separator",-1628749125)))?placesurfer.pin_ui.pure.separator_row.table_row(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"id","id",-1388402092),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_,new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count,new cljs.core.Keyword(null,"show-drag-handle?","show-drag-handle?",1932372815),show_drag_handle_QMARK_,new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),false], 0))):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.update-row","tr.update-row",1410940785),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.pin_ui.pure.list_panel.row_attrs.cljs$core$IFn$_invoke$arity$variadic(id,selected_QMARK_,drag_from_whole_row_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic-row?","topic-row?",755619087),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"topic-position","topic-position",-1919966565))], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__41411,map__41415,map__41415__$1,id,kind,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41412,s__41410__$2,temp__5825__auto__,column_count,map__41388,map__41388__$1,props,pin_table_rows,pin_table_columns,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t){
return (function (_){
return (pin_row_click_BANG_.cljs$core$IFn$_invoke$arity$1 ? pin_row_click_BANG_.cljs$core$IFn$_invoke$arity$1(id) : pin_row_click_BANG_.call(null,id));
});})(i__41411,map__41415,map__41415__$1,id,kind,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41412,s__41410__$2,temp__5825__auto__,column_count,map__41388,map__41388__$1,props,pin_table_rows,pin_table_columns,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t))
], null),placesurfer.pin_ui.pure.list_panel.pin_row_map_hover_handlers(id,values)], 0))], null)], 0)),(function (){var iter__5503__auto__ = ((function (i__41411,map__41415,map__41415__$1,id,kind,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41412,s__41410__$2,temp__5825__auto__,column_count,map__41388,map__41388__$1,props,pin_table_rows,pin_table_columns,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t){
return (function placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41409_$_iter__41417(s__41418){
return (new cljs.core.LazySeq(null,((function (i__41411,map__41415,map__41415__$1,id,kind,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41412,s__41410__$2,temp__5825__auto__,column_count,map__41388,map__41388__$1,props,pin_table_rows,pin_table_columns,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t){
return (function (){
var s__41418__$1 = s__41418;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__41418__$1);
if(temp__5825__auto____$1){
var s__41418__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41418__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__41418__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__41420 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__41419 = (0);
while(true){
if((i__41419 < size__5502__auto____$1)){
var map__41424 = cljs.core._nth(c__5501__auto____$1,i__41419);
var map__41424__$1 = cljs.core.__destructure_map(map__41424);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41424__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__41420,placesurfer.pin_ui.pure.list_panel.table_cell(values,key));

var G__41512 = (i__41419 + (1));
i__41419 = G__41512;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41420),placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41409_$_iter__41417(cljs.core.chunk_rest(s__41418__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41420),null);
}
} else {
var map__41431 = cljs.core.first(s__41418__$2);
var map__41431__$1 = cljs.core.__destructure_map(map__41431);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41431__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(placesurfer.pin_ui.pure.list_panel.table_cell(values,key),placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41409_$_iter__41417(cljs.core.rest(s__41418__$2)));
}
} else {
return null;
}
break;
}
});})(i__41411,map__41415,map__41415__$1,id,kind,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41412,s__41410__$2,temp__5825__auto__,column_count,map__41388,map__41388__$1,props,pin_table_rows,pin_table_columns,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t))
,null,null));
});})(i__41411,map__41415,map__41415__$1,id,kind,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41412,s__41410__$2,temp__5825__auto__,column_count,map__41388,map__41388__$1,props,pin_table_rows,pin_table_columns,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t))
;
return iter__5503__auto__(pin_table_columns);
})(),placesurfer.pin_ui.pure.list_panel.drag_handle_cell(t,show_drag_handle_QMARK_)], null)));

var G__41513 = (i__41411 + (1));
i__41411 = G__41513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41412),placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41409(cljs.core.chunk_rest(s__41410__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41412),null);
}
} else {
var map__41432 = cljs.core.first(s__41410__$2);
var map__41432__$1 = cljs.core.__destructure_map(map__41432);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41432__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41432__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41432__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41432__$1,new cljs.core.Keyword(null,"values","values",372645556));
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"separator","separator",-1628749125)))?placesurfer.pin_ui.pure.separator_row.table_row(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"id","id",-1388402092),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_,new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count,new cljs.core.Keyword(null,"show-drag-handle?","show-drag-handle?",1932372815),show_drag_handle_QMARK_,new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),false], 0))):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.update-row","tr.update-row",1410940785),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.pin_ui.pure.list_panel.row_attrs.cljs$core$IFn$_invoke$arity$variadic(id,selected_QMARK_,drag_from_whole_row_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic-row?","topic-row?",755619087),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"topic-position","topic-position",-1919966565))], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__41432,map__41432__$1,id,kind,selected_QMARK_,values,s__41410__$2,temp__5825__auto__,column_count,map__41388,map__41388__$1,props,pin_table_rows,pin_table_columns,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t){
return (function (_){
return (pin_row_click_BANG_.cljs$core$IFn$_invoke$arity$1 ? pin_row_click_BANG_.cljs$core$IFn$_invoke$arity$1(id) : pin_row_click_BANG_.call(null,id));
});})(map__41432,map__41432__$1,id,kind,selected_QMARK_,values,s__41410__$2,temp__5825__auto__,column_count,map__41388,map__41388__$1,props,pin_table_rows,pin_table_columns,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t))
], null),placesurfer.pin_ui.pure.list_panel.pin_row_map_hover_handlers(id,values)], 0))], null)], 0)),(function (){var iter__5503__auto__ = ((function (map__41432,map__41432__$1,id,kind,selected_QMARK_,values,s__41410__$2,temp__5825__auto__,column_count,map__41388,map__41388__$1,props,pin_table_rows,pin_table_columns,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t){
return (function placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41409_$_iter__41436(s__41437){
return (new cljs.core.LazySeq(null,(function (){
var s__41437__$1 = s__41437;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__41437__$1);
if(temp__5825__auto____$1){
var s__41437__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41437__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__41437__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__41439 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__41438 = (0);
while(true){
if((i__41438 < size__5502__auto__)){
var map__41440 = cljs.core._nth(c__5501__auto__,i__41438);
var map__41440__$1 = cljs.core.__destructure_map(map__41440);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41440__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__41439,placesurfer.pin_ui.pure.list_panel.table_cell(values,key));

var G__41517 = (i__41438 + (1));
i__41438 = G__41517;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41439),placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41409_$_iter__41436(cljs.core.chunk_rest(s__41437__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41439),null);
}
} else {
var map__41441 = cljs.core.first(s__41437__$2);
var map__41441__$1 = cljs.core.__destructure_map(map__41441);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41441__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(placesurfer.pin_ui.pure.list_panel.table_cell(values,key),placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41409_$_iter__41436(cljs.core.rest(s__41437__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__41432,map__41432__$1,id,kind,selected_QMARK_,values,s__41410__$2,temp__5825__auto__,column_count,map__41388,map__41388__$1,props,pin_table_rows,pin_table_columns,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t))
;
return iter__5503__auto__(pin_table_columns);
})(),placesurfer.pin_ui.pure.list_panel.drag_handle_cell(t,show_drag_handle_QMARK_)], null)),placesurfer$pin_ui$pure$list_panel$compact_table_$_iter__41409(cljs.core.rest(s__41410__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(pin_table_rows);
})()], null)], null);
});
placesurfer.pin_ui.pure.list_panel.preview_list = (function placesurfer$pin_ui$pure$list_panel$preview_list(p__41442){
var map__41443 = p__41442;
var map__41443__$1 = cljs.core.__destructure_map(map__41443);
var props = map__41443__$1;
var pin_table_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41443__$1,new cljs.core.Keyword(null,"pin-table-rows","pin-table-rows",729424278));
var pin_row_click_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41443__$1,new cljs.core.Keyword(null,"pin-row-click!","pin-row-click!",820497426));
var show_drag_handle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41443__$1,new cljs.core.Keyword(null,"show-drag-handle?","show-drag-handle?",1932372815),true);
var drag_from_whole_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41443__$1,new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),false);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41443__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-preview-list","div.pin-preview-list",1216848616),(function (){var iter__5503__auto__ = (function placesurfer$pin_ui$pure$list_panel$preview_list_$_iter__41444(s__41445){
return (new cljs.core.LazySeq(null,(function (){
var s__41445__$1 = s__41445;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41445__$1);
if(temp__5825__auto__){
var s__41445__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41445__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__41445__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__41447 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__41446 = (0);
while(true){
if((i__41446 < size__5502__auto__)){
var map__41448 = cljs.core._nth(c__5501__auto__,i__41446);
var map__41448__$1 = cljs.core.__destructure_map(map__41448);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41448__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41448__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41448__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41448__$1,new cljs.core.Keyword(null,"values","values",372645556));
cljs.core.chunk_append(b__41447,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"separator","separator",-1628749125)))?placesurfer.pin_ui.pure.separator_row.preview_row(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"id","id",-1388402092),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_,new cljs.core.Keyword(null,"values","values",372645556),values], 0))):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-preview-row.update-row","div.pin-preview-row.update-row",41520848),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.pin_ui.pure.list_panel.row_attrs.cljs$core$IFn$_invoke$arity$variadic(id,selected_QMARK_,drag_from_whole_row_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic-row?","topic-row?",755619087),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"topic-position","topic-position",-1919966565))], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__41446,map__41448,map__41448__$1,id,kind,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41447,s__41445__$2,temp__5825__auto__,map__41443,map__41443__$1,props,pin_table_rows,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t){
return (function (e){
if(cljs.core.truth_(e.target.closest("a"))){
return null;
} else {
return (pin_row_click_BANG_.cljs$core$IFn$_invoke$arity$1 ? pin_row_click_BANG_.cljs$core$IFn$_invoke$arity$1(id) : pin_row_click_BANG_.call(null,id));
}
});})(i__41446,map__41448,map__41448__$1,id,kind,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41447,s__41445__$2,temp__5825__auto__,map__41443,map__41443__$1,props,pin_table_rows,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t))
], null),placesurfer.pin_ui.pure.list_panel.pin_row_map_hover_handlers(id,values)], 0))], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-preview-row-content","div.pin-preview-row-content",1959144822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343),placesurfer.map_ui.interface$.popup_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([values,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-label","source-label",585601639),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("popup","source-label","popup/source-label",1481253299)) : t.call(null,new cljs.core.Keyword("popup","source-label","popup/source-label",1481253299)))], null)], 0))], null)], null),placesurfer.pin_ui.pure.list_panel.drag_handle(t,show_drag_handle_QMARK_)], null)));

var G__41529 = (i__41446 + (1));
i__41446 = G__41529;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41447),placesurfer$pin_ui$pure$list_panel$preview_list_$_iter__41444(cljs.core.chunk_rest(s__41445__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41447),null);
}
} else {
var map__41452 = cljs.core.first(s__41445__$2);
var map__41452__$1 = cljs.core.__destructure_map(map__41452);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"values","values",372645556));
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"separator","separator",-1628749125)))?placesurfer.pin_ui.pure.separator_row.preview_row(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"id","id",-1388402092),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_,new cljs.core.Keyword(null,"values","values",372645556),values], 0))):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-preview-row.update-row","div.pin-preview-row.update-row",41520848),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.pin_ui.pure.list_panel.row_attrs.cljs$core$IFn$_invoke$arity$variadic(id,selected_QMARK_,drag_from_whole_row_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic-row?","topic-row?",755619087),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"topic-position","topic-position",-1919966565))], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__41452,map__41452__$1,id,kind,selected_QMARK_,values,s__41445__$2,temp__5825__auto__,map__41443,map__41443__$1,props,pin_table_rows,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t){
return (function (e){
if(cljs.core.truth_(e.target.closest("a"))){
return null;
} else {
return (pin_row_click_BANG_.cljs$core$IFn$_invoke$arity$1 ? pin_row_click_BANG_.cljs$core$IFn$_invoke$arity$1(id) : pin_row_click_BANG_.call(null,id));
}
});})(map__41452,map__41452__$1,id,kind,selected_QMARK_,values,s__41445__$2,temp__5825__auto__,map__41443,map__41443__$1,props,pin_table_rows,pin_row_click_BANG_,show_drag_handle_QMARK_,drag_from_whole_row_QMARK_,t))
], null),placesurfer.pin_ui.pure.list_panel.pin_row_map_hover_handlers(id,values)], 0))], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-preview-row-content","div.pin-preview-row-content",1959144822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343),placesurfer.map_ui.interface$.popup_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([values,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-label","source-label",585601639),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("popup","source-label","popup/source-label",1481253299)) : t.call(null,new cljs.core.Keyword("popup","source-label","popup/source-label",1481253299)))], null)], 0))], null)], null),placesurfer.pin_ui.pure.list_panel.drag_handle(t,show_drag_handle_QMARK_)], null)),placesurfer$pin_ui$pure$list_panel$preview_list_$_iter__41444(cljs.core.rest(s__41445__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(pin_table_rows);
})()], null);
});
placesurfer.pin_ui.pure.list_panel.list_panel = (function placesurfer$pin_ui$pure$list_panel$list_panel(p__41456){
var map__41457 = p__41456;
var map__41457__$1 = cljs.core.__destructure_map(map__41457);
var props = map__41457__$1;
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41457__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var toolbar_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"toolbar-prefix","toolbar-prefix",-995925094));
var reorder_pin_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"reorder-pin-row!","reorder-pin-row!",-1601654822));
var show_preview_toggle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"show-preview-toggle?","show-preview-toggle?",-1748844803));
var show_toolbar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41457__$1,new cljs.core.Keyword(null,"show-toolbar?","show-toolbar?",1600777437),true);
var clear_pin_table_keyboard_focus_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"clear-pin-table-keyboard-focus!","clear-pin-table-keyboard-focus!",-1772163170));
var show_toolbar_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"show-toolbar-search?","show-toolbar-search?",-1693188066));
var pin_table_keyboard_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"pin-table-keyboard-focus?","pin-table-keyboard-focus?",-1363284319));
var pin_editor_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159));
var show_editor_overlay_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41457__$1,new cljs.core.Keyword(null,"show-editor-overlay?","show-editor-overlay?",-560954009),true);
var pin_table_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"pin-table-columns","pin-table-columns",1161167915));
var pin_show_preview_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"pin-show-preview?","pin-show-preview?",837912811));
var drag_from_whole_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41457__$1,new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),false);
var show_drag_handle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41457__$1,new cljs.core.Keyword(null,"show-drag-handle?","show-drag-handle?",1932372815),true);
var show_topics_toggle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"show-topics-toggle?","show-topics-toggle?",-1672201073));
var pin_row_click_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"pin-row-click!","pin-row-click!",820497426));
var pin_table_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"pin-table-rows","pin-table-rows",729424278));
var show_preview_toggle_QMARK__STAR_ = (((!((show_preview_toggle_QMARK_ == null))))?show_preview_toggle_QMARK_:show_toolbar_QMARK_);
var show_toolbar_search_QMARK___$1 = new cljs.core.Keyword(null,"show-toolbar-search?","show-toolbar-search?",-1693188066).cljs$core$IFn$_invoke$arity$2(props,false);
var toolbar_search_end_QMARK_ = new cljs.core.Keyword(null,"toolbar-search-end?","toolbar-search-end?",932086865).cljs$core$IFn$_invoke$arity$2(props,true);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-wrap","div.update-table-wrap",1469984077),(cljs.core.truth_((function (){var or__5025__auto__ = toolbar_prefix;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = show_toolbar_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = show_preview_toggle_QMARK__STAR_;
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return show_toolbar_search_QMARK___$1;
}
}
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-toolbar","div.update-table-toolbar",-1760505710),toolbar_prefix,(cljs.core.truth_((function (){var and__5023__auto__ = show_toolbar_search_QMARK___$1;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(toolbar_search_end_QMARK_);
} else {
return and__5023__auto__;
}
})())?placesurfer.pin_ui.pure.toolbar_search.pin_search(props):null),(cljs.core.truth_(show_toolbar_QMARK_)?placesurfer.pin_ui.pure.list_panel.toolbar(props):(cljs.core.truth_(show_preview_toggle_QMARK__STAR_)?(cljs.core.truth_(show_topics_toggle_QMARK_)?placesurfer.pin_ui.pure.list_panel.browse_toolbar_end(props):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-toolbar-end","div.update-table-toolbar-end",1563825925),placesurfer.pin_ui.pure.list_panel.preview_toggle_btn(props)], null)):null)),(cljs.core.truth_((function (){var and__5023__auto__ = show_toolbar_search_QMARK___$1;
if(cljs.core.truth_(and__5023__auto__)){
return toolbar_search_end_QMARK_;
} else {
return and__5023__auto__;
}
})())?placesurfer.pin_ui.pure.toolbar_search.pin_search(props):null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-table-scroll","div.pin-table-scroll",1475397552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(pin_table_keyboard_focus_QMARK_)?"pin-table-scroll--keyboard-nav":null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),clear_pin_table_keyboard_focus_BANG_], null),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__41464){
var map__41465 = p__41464;
var map__41465__$1 = cljs.core.__destructure_map(map__41465);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
if(cljs.core.truth_((function (){var and__5023__auto__ = node;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = show_drag_handle_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return drag_from_whole_row_QMARK_;
}
} else {
return and__5023__auto__;
}
})())){
return placesurfer.pin_ui.pure.drag.ensure_pin_row_drag_BANG_(node,reorder_pin_row_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),drag_from_whole_row_QMARK_], null));
} else {
return null;
}
})], null),(cljs.core.truth_(pin_show_preview_QMARK_)?placesurfer.pin_ui.pure.list_panel.preview_list(props):placesurfer.pin_ui.pure.list_panel.compact_table(props))], null),(cljs.core.truth_((function (){var and__5023__auto__ = show_editor_overlay_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return pin_editor_open_QMARK_;
} else {
return and__5023__auto__;
}
})())?placesurfer.pin_ui.pure.editor_overlay.overlay(props):null)], null);
});

//# sourceMappingURL=placesurfer.pin_ui.pure.list_panel.js.map
