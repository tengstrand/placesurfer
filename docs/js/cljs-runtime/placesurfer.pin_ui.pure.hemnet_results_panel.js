goog.provide('placesurfer.pin_ui.pure.hemnet_results_panel');
placesurfer.pin_ui.pure.hemnet_results_panel.hemnet_icon_url = "/images/marker/hemnet.png";
placesurfer.pin_ui.pure.hemnet_results_panel.booli_icon_url = "/images/marker/booli.png";
placesurfer.pin_ui.pure.hemnet_results_panel.notar_icon_url = "/images/marker/notar.png";
/**
 * Which marker icon a search-result row shows, keyed off the item's own
 * :source (see clipboard-ui.hemnet.form) - defaults to Hemnet's for
 * older/plain items with no :source, mirroring
 * pin_ui.handlers.map/search-result-marker-topic.
 */
placesurfer.pin_ui.pure.hemnet_results_panel.result_icon_url = (function placesurfer$pin_ui$pure$hemnet_results_panel$result_icon_url(item){
var G__22111 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(item);
switch (G__22111) {
case "booli":
return placesurfer.pin_ui.pure.hemnet_results_panel.booli_icon_url;

break;
case "notar":
return placesurfer.pin_ui.pure.hemnet_results_panel.notar_icon_url;

break;
default:
return placesurfer.pin_ui.pure.hemnet_results_panel.hemnet_icon_url;

}
});
placesurfer.pin_ui.pure.hemnet_results_panel.table_row_class = (function placesurfer$pin_ui$pure$hemnet_results_panel$table_row_class(selected_QMARK_){
if(cljs.core.truth_(selected_QMARK_)){
return "hemnet-results-row--selected";
} else {
return null;
}
});
placesurfer.pin_ui.pure.hemnet_results_panel.divider_label = (function placesurfer$pin_ui$pure$hemnet_results_panel$divider_label(search_results,t){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","hemnet-results-heading","pin/hemnet-results-heading",1228169322)) : t.call(null,new cljs.core.Keyword("pin","hemnet-results-heading","pin/hemnet-results-heading",1228169322))))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(search_results)),")"].join('');
});
/**
 * Same row-hover -> map-marker-emphasis behaviour as saved-pin rows
 * (list-panel's `pin-row-map-hover-handlers`) - matches by :id, which every
 * Hemnet search-result marker carries (see handlers/map.cljs's
 * `hemnet-search-result-position`).
 */
placesurfer.pin_ui.pure.hemnet_results_panel.row_map_hover_handlers = (function placesurfer$pin_ui$pure$hemnet_results_panel$row_map_hover_handlers(id){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),(function (_){
return placesurfer.map_ui.interface$.set_marker_row_emphasis_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),(function (_){
return placesurfer.map_ui.interface$.clear_marker_row_emphasis_BANG_();
})], null);
});
placesurfer.pin_ui.pure.hemnet_results_panel.clear_btn = (function placesurfer$pin_ui$pure$hemnet_results_panel$clear_btn(clear_hemnet_search_results_BANG_,t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.hemnet-results-clear-btn","button.hemnet-results-clear-btn",99400423),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","hemnet-results-clear","pin/hemnet-results-clear",-442064912)) : t.call(null,new cljs.core.Keyword("pin","hemnet-results-clear","pin/hemnet-results-clear",-442064912))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(clear_hemnet_search_results_BANG_)){
return (clear_hemnet_search_results_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_hemnet_search_results_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_hemnet_search_results_BANG_.call(null));
} else {
return null;
}
})], null)], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","hemnet-results-clear","pin/hemnet-results-clear",-442064912)) : t.call(null,new cljs.core.Keyword("pin","hemnet-results-clear","pin/hemnet-results-clear",-442064912)))], null);
});
placesurfer.pin_ui.pure.hemnet_results_panel.save_button = (function placesurfer$pin_ui$pure$hemnet_results_panel$save_button(id,save_hemnet_result_as_pin_BANG_,t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.hemnet-results-save-btn","button.hemnet-results-save-btn",-563486382),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","hemnet-results-save","pin/hemnet-results-save",-1983932266)) : t.call(null,new cljs.core.Keyword("pin","hemnet-results-save","pin/hemnet-results-save",-1983932266))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

if(cljs.core.truth_(save_hemnet_result_as_pin_BANG_)){
return (save_hemnet_result_as_pin_BANG_.cljs$core$IFn$_invoke$arity$1 ? save_hemnet_result_as_pin_BANG_.cljs$core$IFn$_invoke$arity$1(id) : save_hemnet_result_as_pin_BANG_.call(null,id));
} else {
return null;
}
})], null)], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","hemnet-results-save","pin/hemnet-results-save",-1983932266)) : t.call(null,new cljs.core.Keyword("pin","hemnet-results-save","pin/hemnet-results-save",-1983932266)))], null);
});
placesurfer.pin_ui.pure.hemnet_results_panel.discard_button = (function placesurfer$pin_ui$pure$hemnet_results_panel$discard_button(id,discard_hemnet_result_BANG_,t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.hemnet-results-discard-btn","button.hemnet-results-discard-btn",-635042980),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","hemnet-results-discard","pin/hemnet-results-discard",-126860281)) : t.call(null,new cljs.core.Keyword("pin","hemnet-results-discard","pin/hemnet-results-discard",-126860281))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

if(cljs.core.truth_(discard_hemnet_result_BANG_)){
return (discard_hemnet_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? discard_hemnet_result_BANG_.cljs$core$IFn$_invoke$arity$1(id) : discard_hemnet_result_BANG_.call(null,id));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/trash.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","hemnet-results-discard","pin/hemnet-results-discard",-126860281)) : t.call(null,new cljs.core.Keyword("pin","hemnet-results-discard","pin/hemnet-results-discard",-126860281)))], null)], null)], null);
});
/**
 * Save-as-pin and discard buttons, as flex-row siblings - the preview-mode
 * card's action row (table mode keeps them in separate cells - discard sits
 * in its own rightmost cell there, see `table-rows`).
 */
placesurfer.pin_ui.pure.hemnet_results_panel.action_buttons = (function placesurfer$pin_ui$pure$hemnet_results_panel$action_buttons(id,save_hemnet_result_as_pin_BANG_,discard_hemnet_result_BANG_,t){
return (new cljs.core.List(null,placesurfer.pin_ui.pure.hemnet_results_panel.save_button(id,save_hemnet_result_as_pin_BANG_,t),(new cljs.core.List(null,placesurfer.pin_ui.pure.hemnet_results_panel.discard_button(id,discard_hemnet_result_BANG_,t),null,(1),null)),(2),null));
});
/**
 * The Hemnet marker icon, as a dedicated preview-card button - mirrors
 * list-panel's `pin-preview-marker-btn`: clicking it does exactly what
 * clicking a table-mode row already does (`select-hemnet-result!`: select +
 * scroll/focus the result on the map), as a guaranteed, unambiguous target
 * for that action regardless of how much of the card is covered by
 * popup-html's own image/source links.
 */
placesurfer.pin_ui.pure.hemnet_results_panel.hemnet_map_icon_btn = (function placesurfer$pin_ui$pure$hemnet_results_panel$hemnet_map_icon_btn(item,select_hemnet_result_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pin-preview-marker-btn","button.pin-preview-marker-btn",1912126055),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

if(cljs.core.truth_(select_hemnet_result_BANG_)){
var G__22121 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return (select_hemnet_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_hemnet_result_BANG_.cljs$core$IFn$_invoke$arity$1(G__22121) : select_hemnet_result_BANG_.call(null,G__22121));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),placesurfer.pin_ui.pure.hemnet_results_panel.result_icon_url(item),new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null);
});
/**
 * Name/address only - kept in its own `<td>`, separate from the action
 * buttons, so the buttons don't eat into the text column's flex width and
 * the text gets the full name/group/stars column span to itself.
 */
placesurfer.pin_ui.pure.hemnet_results_panel.row_text = (function placesurfer$pin_ui$pure$hemnet_results_panel$row_text(name,location){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hemnet-results-row-body","div.hemnet-results-row-body",-139667614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hemnet-results-row-name","div.hemnet-results-row-name",1048425215),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hemnet-results-row-address","div.hemnet-results-row-address",944750793),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location)], null)], null);
});
/**
 * Map a raw Hemnet search-result item onto the field names `map-ui/popup-html`
 * expects (it already knows how to render a Hemnet source-link icon for a
 * hemnet.se/bostad/ :url, the same as it does for a saved pin).
 */
placesurfer.pin_ui.pure.hemnet_results_panel.result__GT_popup_position = (function placesurfer$pin_ui$pure$hemnet_results_panel$result__GT_popup_position(p__22133){
var map__22137 = p__22133;
var map__22137__$1 = cljs.core.__destructure_map(map__22137);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22137__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22137__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22137__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22137__$1,new cljs.core.Keyword(null,"url","url",276297046));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22137__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var agent_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22137__$1,new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259));
var agent_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22137__$1,new cljs.core.Keyword(null,"agent-name","agent-name",-916187942));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"address","address",559499426),location__$1,new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259),agent_url,new cljs.core.Keyword(null,"agent-name","agent-name",-916187942),agent_name], null);
});
/**
 * Divider `<tr>` + one `<tr>` per Hemnet result, for `pin-sorted-table`'s
 * `<tbody>`. `column-count` is the pin table's total column count (image,
 * name, stars, area, delete, edit, icon) so the divider/content cells can
 * span the columns that don't apply to Hemnet rows. Save/marker-icon/discard
 * all live together in one trailing cell (spanning every column after the
 * name/address content) rather than split across two cells - keeping them
 * as one flex group that can be right-aligned as a whole, instead of the
 * marker icon overflowing out of a too-narrow actions cell and getting
 * clipped behind the discard button at the panel's scrollable edge.
 */
placesurfer.pin_ui.pure.hemnet_results_panel.table_rows = (function placesurfer$pin_ui$pure$hemnet_results_panel$table_rows(p__22145){
var map__22146 = p__22145;
var map__22146__$1 = cljs.core.__destructure_map(map__22146);
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22146__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));
var save_hemnet_result_as_pin_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22146__$1,new cljs.core.Keyword(null,"save-hemnet-result-as-pin!","save-hemnet-result-as-pin!",-642352910));
var clear_hemnet_search_results_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22146__$1,new cljs.core.Keyword(null,"clear-hemnet-search-results!","clear-hemnet-search-results!",-1853893801));
var select_hemnet_result_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22146__$1,new cljs.core.Keyword(null,"select-hemnet-result!","select-hemnet-result!",-431117201));
var discard_hemnet_result_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22146__$1,new cljs.core.Keyword(null,"discard-hemnet-result!","discard-hemnet-result!",-1386949948));
var hemnet_selected_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22146__$1,new cljs.core.Keyword(null,"hemnet-selected-id","hemnet-selected-id",-673719098));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22146__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22146__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236),(7));
if(cljs.core.seq(search_results)){
var content_colspan = (2);
var actions_colspan = (function (){var x__5110__auto__ = (1);
var y__5111__auto__ = ((column_count - (1)) - content_colspan);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.hemnet-results-divider-row","tr.hemnet-results-divider-row",-2124234056),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.hemnet-results-divider-cell","td.hemnet-results-divider-cell",-487228515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),column_count], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hemnet-results-divider-label","span.hemnet-results-divider-label",-1673443040),placesurfer.pin_ui.pure.hemnet_results_panel.divider_label(search_results,t)], null),placesurfer.pin_ui.pure.hemnet_results_panel.clear_btn(clear_hemnet_search_results_BANG_,t)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"hemnet-divider"], null)),(function (){var iter__5503__auto__ = (function placesurfer$pin_ui$pure$hemnet_results_panel$table_rows_$_iter__22148(s__22149){
return (new cljs.core.LazySeq(null,(function (){
var s__22149__$1 = s__22149;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__22149__$1);
if(temp__5823__auto__){
var s__22149__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22149__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22149__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22151 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22150 = (0);
while(true){
if((i__22150 < size__5502__auto__)){
var map__22154 = cljs.core._nth(c__5501__auto__,i__22150);
var map__22154__$1 = cljs.core.__destructure_map(map__22154);
var result = map__22154__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,hemnet_selected_id);
cljs.core.chunk_append(b__22151,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.hemnet-results-table-row","tr.hemnet-results-table-row",-58303020),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),placesurfer.pin_ui.pure.hemnet_results_panel.table_row_class(selected_QMARK_),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),((function (i__22150,selected_QMARK_,map__22154,map__22154__$1,result,id,name,location__$1,image,c__5501__auto__,size__5502__auto__,b__22151,s__22149__$2,temp__5823__auto__,content_colspan,actions_colspan,map__22146,map__22146__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t,column_count){
return (function (p__22156){
var map__22158 = p__22156;
var map__22158__$1 = cljs.core.__destructure_map(map__22158);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22158__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
if(cljs.core.truth_((function (){var and__5023__auto__ = selected_QMARK_;
if(and__5023__auto__){
return node;
} else {
return and__5023__auto__;
}
})())){
return node.scrollIntoView(({"block": "nearest"}));
} else {
return null;
}
});})(i__22150,selected_QMARK_,map__22154,map__22154__$1,result,id,name,location__$1,image,c__5501__auto__,size__5502__auto__,b__22151,s__22149__$2,temp__5823__auto__,content_colspan,actions_colspan,map__22146,map__22146__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t,column_count))
,new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__22150,selected_QMARK_,map__22154,map__22154__$1,result,id,name,location__$1,image,c__5501__auto__,size__5502__auto__,b__22151,s__22149__$2,temp__5823__auto__,content_colspan,actions_colspan,map__22146,map__22146__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t,column_count){
return (function (_){
if(cljs.core.truth_(select_hemnet_result_BANG_)){
return (select_hemnet_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_hemnet_result_BANG_.cljs$core$IFn$_invoke$arity$1(id) : select_hemnet_result_BANG_.call(null,id));
} else {
return null;
}
});})(i__22150,selected_QMARK_,map__22154,map__22154__$1,result,id,name,location__$1,image,c__5501__auto__,size__5502__auto__,b__22151,s__22149__$2,temp__5823__auto__,content_colspan,actions_colspan,map__22146,map__22146__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t,column_count))
], null),placesurfer.pin_ui.pure.hemnet_results_panel.row_map_hover_handlers(id)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pin-table-image-cell","td.pin-table-image-cell",-525432731),((cljs.core.seq(image))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.pin-table-image","img.pin-table-image",1609093705),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),image,new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.hemnet-results-content-cell","td.hemnet-results-content-cell",968556150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),content_colspan], null),placesurfer.pin_ui.pure.hemnet_results_panel.row_text(name,location__$1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.hemnet-results-actions-cell","td.hemnet-results-actions-cell",-1529079484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),actions_colspan], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hemnet-results-row-actions","div.hemnet-results-row-actions",1416208296),placesurfer.pin_ui.pure.hemnet_results_panel.save_button(id,save_hemnet_result_as_pin_BANG_,t),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.pin-table-icon","img.pin-table-icon",1945489306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),placesurfer.pin_ui.pure.hemnet_results_panel.result_icon_url(result),new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null),placesurfer.pin_ui.pure.hemnet_results_panel.discard_button(id,discard_hemnet_result_BANG_,t)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__22267 = (i__22150 + (1));
i__22150 = G__22267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22151),placesurfer$pin_ui$pure$hemnet_results_panel$table_rows_$_iter__22148(cljs.core.chunk_rest(s__22149__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22151),null);
}
} else {
var map__22164 = cljs.core.first(s__22149__$2);
var map__22164__$1 = cljs.core.__destructure_map(map__22164);
var result = map__22164__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,hemnet_selected_id);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.hemnet-results-table-row","tr.hemnet-results-table-row",-58303020),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),placesurfer.pin_ui.pure.hemnet_results_panel.table_row_class(selected_QMARK_),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),((function (selected_QMARK_,map__22164,map__22164__$1,result,id,name,location__$1,image,s__22149__$2,temp__5823__auto__,content_colspan,actions_colspan,map__22146,map__22146__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t,column_count){
return (function (p__22168){
var map__22169 = p__22168;
var map__22169__$1 = cljs.core.__destructure_map(map__22169);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22169__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
if(cljs.core.truth_((function (){var and__5023__auto__ = selected_QMARK_;
if(and__5023__auto__){
return node;
} else {
return and__5023__auto__;
}
})())){
return node.scrollIntoView(({"block": "nearest"}));
} else {
return null;
}
});})(selected_QMARK_,map__22164,map__22164__$1,result,id,name,location__$1,image,s__22149__$2,temp__5823__auto__,content_colspan,actions_colspan,map__22146,map__22146__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t,column_count))
,new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (selected_QMARK_,map__22164,map__22164__$1,result,id,name,location__$1,image,s__22149__$2,temp__5823__auto__,content_colspan,actions_colspan,map__22146,map__22146__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t,column_count){
return (function (_){
if(cljs.core.truth_(select_hemnet_result_BANG_)){
return (select_hemnet_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_hemnet_result_BANG_.cljs$core$IFn$_invoke$arity$1(id) : select_hemnet_result_BANG_.call(null,id));
} else {
return null;
}
});})(selected_QMARK_,map__22164,map__22164__$1,result,id,name,location__$1,image,s__22149__$2,temp__5823__auto__,content_colspan,actions_colspan,map__22146,map__22146__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t,column_count))
], null),placesurfer.pin_ui.pure.hemnet_results_panel.row_map_hover_handlers(id)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pin-table-image-cell","td.pin-table-image-cell",-525432731),((cljs.core.seq(image))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.pin-table-image","img.pin-table-image",1609093705),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),image,new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.hemnet-results-content-cell","td.hemnet-results-content-cell",968556150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),content_colspan], null),placesurfer.pin_ui.pure.hemnet_results_panel.row_text(name,location__$1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.hemnet-results-actions-cell","td.hemnet-results-actions-cell",-1529079484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),actions_colspan], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hemnet-results-row-actions","div.hemnet-results-row-actions",1416208296),placesurfer.pin_ui.pure.hemnet_results_panel.save_button(id,save_hemnet_result_as_pin_BANG_,t),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.pin-table-icon","img.pin-table-icon",1945489306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),placesurfer.pin_ui.pure.hemnet_results_panel.result_icon_url(result),new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null),placesurfer.pin_ui.pure.hemnet_results_panel.discard_button(id,discard_hemnet_result_BANG_,t)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),placesurfer$pin_ui$pure$hemnet_results_panel$table_rows_$_iter__22148(cljs.core.rest(s__22149__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(search_results);
})());
} else {
return null;
}
});
/**
 * Divider `<div>` + one card per Hemnet result, for `preview-list`
 * (large-image mode) - rendered via the SAME `map-ui/popup-html` pins use
 * there (big image + name/address/description/source-link), so Hemnet
 * results look exactly like pins once big-image mode is on. The
 * save-as-pin/discard buttons (which popup-html knows nothing about) are
 * appended below that content.
 */
placesurfer.pin_ui.pure.hemnet_results_panel.preview_rows = (function placesurfer$pin_ui$pure$hemnet_results_panel$preview_rows(p__22205){
var map__22207 = p__22205;
var map__22207__$1 = cljs.core.__destructure_map(map__22207);
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22207__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));
var save_hemnet_result_as_pin_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22207__$1,new cljs.core.Keyword(null,"save-hemnet-result-as-pin!","save-hemnet-result-as-pin!",-642352910));
var clear_hemnet_search_results_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22207__$1,new cljs.core.Keyword(null,"clear-hemnet-search-results!","clear-hemnet-search-results!",-1853893801));
var select_hemnet_result_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22207__$1,new cljs.core.Keyword(null,"select-hemnet-result!","select-hemnet-result!",-431117201));
var discard_hemnet_result_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22207__$1,new cljs.core.Keyword(null,"discard-hemnet-result!","discard-hemnet-result!",-1386949948));
var hemnet_selected_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22207__$1,new cljs.core.Keyword(null,"hemnet-selected-id","hemnet-selected-id",-673719098));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22207__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
if(cljs.core.seq(search_results)){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hemnet-results-divider-row.hemnet-results-divider-row--preview","div.hemnet-results-divider-row.hemnet-results-divider-row--preview",-1962339955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hemnet-results-divider-label","span.hemnet-results-divider-label",-1673443040),placesurfer.pin_ui.pure.hemnet_results_panel.divider_label(search_results,t)], null),placesurfer.pin_ui.pure.hemnet_results_panel.clear_btn(clear_hemnet_search_results_BANG_,t)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"hemnet-divider"], null)),(function (){var iter__5503__auto__ = (function placesurfer$pin_ui$pure$hemnet_results_panel$preview_rows_$_iter__22220(s__22221){
return (new cljs.core.LazySeq(null,(function (){
var s__22221__$1 = s__22221;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__22221__$1);
if(temp__5823__auto__){
var s__22221__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22221__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22221__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22223 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22222 = (0);
while(true){
if((i__22222 < size__5502__auto__)){
var map__22227 = cljs.core._nth(c__5501__auto__,i__22222);
var map__22227__$1 = cljs.core.__destructure_map(map__22227);
var result = map__22227__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22227__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22227__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22227__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,hemnet_selected_id);
cljs.core.chunk_append(b__22223,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-preview-row.update-row","div.pin-preview-row.update-row",41520848),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"update-row--selected":null),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),((function (i__22222,selected_QMARK_,map__22227,map__22227__$1,result,id,name,location__$1,c__5501__auto__,size__5502__auto__,b__22223,s__22221__$2,temp__5823__auto__,map__22207,map__22207__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t){
return (function (p__22231){
var map__22234 = p__22231;
var map__22234__$1 = cljs.core.__destructure_map(map__22234);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22234__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
if(cljs.core.truth_((function (){var and__5023__auto__ = selected_QMARK_;
if(and__5023__auto__){
return node;
} else {
return and__5023__auto__;
}
})())){
return node.scrollIntoView(({"block": "nearest"}));
} else {
return null;
}
});})(i__22222,selected_QMARK_,map__22227,map__22227__$1,result,id,name,location__$1,c__5501__auto__,size__5502__auto__,b__22223,s__22221__$2,temp__5823__auto__,map__22207,map__22207__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t))
,new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__22222,selected_QMARK_,map__22227,map__22227__$1,result,id,name,location__$1,c__5501__auto__,size__5502__auto__,b__22223,s__22221__$2,temp__5823__auto__,map__22207,map__22207__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t){
return (function (e){
if(cljs.core.truth_(e.target.closest("a"))){
return null;
} else {
if(cljs.core.truth_(select_hemnet_result_BANG_)){
return (select_hemnet_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_hemnet_result_BANG_.cljs$core$IFn$_invoke$arity$1(id) : select_hemnet_result_BANG_.call(null,id));
} else {
return null;
}
}
});})(i__22222,selected_QMARK_,map__22227,map__22227__$1,result,id,name,location__$1,c__5501__auto__,size__5502__auto__,b__22223,s__22221__$2,temp__5823__auto__,map__22207,map__22207__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t))
], null),placesurfer.pin_ui.pure.hemnet_results_panel.row_map_hover_handlers(id)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hemnet-results-preview-card","div.hemnet-results-preview-card",2091149783),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-preview-row-content","div.pin-preview-row-content",1959144822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343),placesurfer.map_ui.interface$.popup_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.pin_ui.pure.hemnet_results_panel.result__GT_popup_position(result),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-label","source-label",585601639),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("popup","source-label","popup/source-label",1481253299)) : t.call(null,new cljs.core.Keyword("popup","source-label","popup/source-label",1481253299)))], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hemnet-results-preview-actions","div.hemnet-results-preview-actions",422541331),placesurfer.pin_ui.pure.hemnet_results_panel.action_buttons(id,save_hemnet_result_as_pin_BANG_,discard_hemnet_result_BANG_,t),placesurfer.pin_ui.pure.hemnet_results_panel.hemnet_map_icon_btn(result,select_hemnet_result_BANG_)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__22280 = (i__22222 + (1));
i__22222 = G__22280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22223),placesurfer$pin_ui$pure$hemnet_results_panel$preview_rows_$_iter__22220(cljs.core.chunk_rest(s__22221__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22223),null);
}
} else {
var map__22242 = cljs.core.first(s__22221__$2);
var map__22242__$1 = cljs.core.__destructure_map(map__22242);
var result = map__22242__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22242__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22242__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22242__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,hemnet_selected_id);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-preview-row.update-row","div.pin-preview-row.update-row",41520848),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"update-row--selected":null),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),((function (selected_QMARK_,map__22242,map__22242__$1,result,id,name,location__$1,s__22221__$2,temp__5823__auto__,map__22207,map__22207__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t){
return (function (p__22246){
var map__22249 = p__22246;
var map__22249__$1 = cljs.core.__destructure_map(map__22249);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22249__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
if(cljs.core.truth_((function (){var and__5023__auto__ = selected_QMARK_;
if(and__5023__auto__){
return node;
} else {
return and__5023__auto__;
}
})())){
return node.scrollIntoView(({"block": "nearest"}));
} else {
return null;
}
});})(selected_QMARK_,map__22242,map__22242__$1,result,id,name,location__$1,s__22221__$2,temp__5823__auto__,map__22207,map__22207__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t))
,new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (selected_QMARK_,map__22242,map__22242__$1,result,id,name,location__$1,s__22221__$2,temp__5823__auto__,map__22207,map__22207__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t){
return (function (e){
if(cljs.core.truth_(e.target.closest("a"))){
return null;
} else {
if(cljs.core.truth_(select_hemnet_result_BANG_)){
return (select_hemnet_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_hemnet_result_BANG_.cljs$core$IFn$_invoke$arity$1(id) : select_hemnet_result_BANG_.call(null,id));
} else {
return null;
}
}
});})(selected_QMARK_,map__22242,map__22242__$1,result,id,name,location__$1,s__22221__$2,temp__5823__auto__,map__22207,map__22207__$1,search_results,save_hemnet_result_as_pin_BANG_,clear_hemnet_search_results_BANG_,select_hemnet_result_BANG_,discard_hemnet_result_BANG_,hemnet_selected_id,t))
], null),placesurfer.pin_ui.pure.hemnet_results_panel.row_map_hover_handlers(id)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hemnet-results-preview-card","div.hemnet-results-preview-card",2091149783),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-preview-row-content","div.pin-preview-row-content",1959144822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343),placesurfer.map_ui.interface$.popup_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.pin_ui.pure.hemnet_results_panel.result__GT_popup_position(result),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-label","source-label",585601639),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("popup","source-label","popup/source-label",1481253299)) : t.call(null,new cljs.core.Keyword("popup","source-label","popup/source-label",1481253299)))], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hemnet-results-preview-actions","div.hemnet-results-preview-actions",422541331),placesurfer.pin_ui.pure.hemnet_results_panel.action_buttons(id,save_hemnet_result_as_pin_BANG_,discard_hemnet_result_BANG_,t),placesurfer.pin_ui.pure.hemnet_results_panel.hemnet_map_icon_btn(result,select_hemnet_result_BANG_)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),placesurfer$pin_ui$pure$hemnet_results_panel$preview_rows_$_iter__22220(cljs.core.rest(s__22221__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(search_results);
})());
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.pin_ui.pure.hemnet_results_panel.js.map
