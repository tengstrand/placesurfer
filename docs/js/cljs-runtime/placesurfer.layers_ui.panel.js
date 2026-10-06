goog.provide('placesurfer.layers_ui.panel');
placesurfer.layers_ui.panel.sync_checkbox_BANG_ = (function placesurfer$layers_ui$panel$sync_checkbox_BANG_(node,active_QMARK_){
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
placesurfer.layers_ui.panel.layer_row = (function placesurfer$layers_ui$panel$layer_row(p__26696){
var map__26697 = p__26696;
var map__26697__$1 = cljs.core.__destructure_map(map__26697);
var layer_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26697__$1,new cljs.core.Keyword(null,"layer-id","layer-id",576786958));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26697__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26697__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var toggle_layer_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26697__$1,new cljs.core.Keyword(null,"toggle-layer!","toggle-layer!",-1435962263));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layer-row","div.layer-row",-239294090),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-checkbox","sl-checkbox",-675865475),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"checked","checked",-50955819),active_QMARK_,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__26698){
var map__26699 = p__26698;
var map__26699__$1 = cljs.core.__destructure_map(map__26699);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26699__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return placesurfer.layers_ui.panel.sync_checkbox_BANG_(node,active_QMARK_);
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sl-change","sl-change",-760726964),(function (e){
var target = e.target;
if(cljs.core.truth_(target.placesurferSyncing)){
return null;
} else {
var G__26700 = layer_id;
var G__26701 = target.checked;
return (toggle_layer_BANG_.cljs$core$IFn$_invoke$arity$2 ? toggle_layer_BANG_.cljs$core$IFn$_invoke$arity$2(G__26700,G__26701) : toggle_layer_BANG_.call(null,G__26700,G__26701));
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.layer-row-label","span.layer-row-label",893394775),label], null)], null)], null);
});
placesurfer.layers_ui.panel.panel = (function placesurfer$layers_ui$panel$panel(p__26704){
var map__26705 = p__26704;
var map__26705__$1 = cljs.core.__destructure_map(map__26705);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26705__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var toggle_layer_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26705__$1,new cljs.core.Keyword(null,"toggle-layer!","toggle-layer!",-1435962263));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layers-section","div.layers-section",-1012302634),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layers-list","div.layers-list",1626169006),(function (){var iter__5503__auto__ = (function placesurfer$layers_ui$panel$panel_$_iter__26706(s__26707){
return (new cljs.core.LazySeq(null,(function (){
var s__26707__$1 = s__26707;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__26707__$1);
if(temp__5823__auto__){
var s__26707__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26707__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__26707__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__26709 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__26708 = (0);
while(true){
if((i__26708 < size__5502__auto__)){
var map__26710 = cljs.core._nth(c__5501__auto__,i__26708);
var map__26710__$1 = cljs.core.__destructure_map(map__26710);
var layer_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26710__$1,new cljs.core.Keyword(null,"layer-id","layer-id",576786958));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26710__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26710__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__26709,placesurfer.layers_ui.panel.layer_row(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"layer-id","layer-id",576786958),layer_id,new cljs.core.Keyword(null,"active?","active?",459499776),active_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"toggle-layer!","toggle-layer!",-1435962263),toggle_layer_BANG_], null)));

var G__26729 = (i__26708 + (1));
i__26708 = G__26729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26709),placesurfer$layers_ui$panel$panel_$_iter__26706(cljs.core.chunk_rest(s__26707__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26709),null);
}
} else {
var map__26711 = cljs.core.first(s__26707__$2);
var map__26711__$1 = cljs.core.__destructure_map(map__26711);
var layer_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26711__$1,new cljs.core.Keyword(null,"layer-id","layer-id",576786958));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26711__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26711__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(placesurfer.layers_ui.panel.layer_row(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"layer-id","layer-id",576786958),layer_id,new cljs.core.Keyword(null,"active?","active?",459499776),active_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"toggle-layer!","toggle-layer!",-1435962263),toggle_layer_BANG_], null)),placesurfer$layers_ui$panel$panel_$_iter__26706(cljs.core.rest(s__26707__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(rows);
})()], null)], null);
});

//# sourceMappingURL=placesurfer.layers_ui.panel.js.map
