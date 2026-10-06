goog.provide('placesurfer.map_ui.popup');
placesurfer.map_ui.popup.non_blank_QMARK_ = (function placesurfer$map_ui$popup$non_blank_QMARK_(s){
return (!(((cljs.core.truth_(s)?cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))):null) == null)));
});
placesurfer.map_ui.popup.escape_html = (function placesurfer$map_ui$popup$escape_html(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
placesurfer.map_ui.popup.popup_page_url = (function placesurfer$map_ui$popup$popup_page_url(p__20094){
var map__20095 = p__20094;
var map__20095__$1 = cljs.core.__destructure_map(map__20095);
var homepage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20095__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20095__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(placesurfer.map_ui.popup.non_blank_QMARK_(homepage)){
return homepage;
} else {
if(placesurfer.map_ui.popup.non_blank_QMARK_(url)){
return url;
} else {
return null;

}
}
});
placesurfer.map_ui.popup.popup_image_html = (function placesurfer$map_ui$popup$popup_image_html(position){
var temp__5823__auto__ = (function (){var G__20096 = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(position);
var G__20096__$1 = (((G__20096 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20096));
var G__20096__$2 = (((G__20096__$1 == null))?null:clojure.string.trim(G__20096__$1));
if((G__20096__$2 == null)){
return null;
} else {
return cljs.core.not_empty(G__20096__$2);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var image = temp__5823__auto__;
var img = ["<img src=\"",placesurfer.map_ui.popup.escape_html(image),"\" alt=\"\" loading=\"lazy\">"].join('');
var page_url = placesurfer.map_ui.popup.popup_page_url(position);
if(cljs.core.truth_(page_url)){
return ["<a class=\"map-popup-image-link\" href=\"",placesurfer.map_ui.popup.escape_html(page_url),"\" target=\"_blank\" rel=\"noopener noreferrer\">",img,"</a>"].join('');
} else {
return img;
}
} else {
return null;
}
});
placesurfer.map_ui.popup.popup_address_row_html = (function placesurfer$map_ui$popup$popup_address_row_html(position){
var temp__5823__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(position))));
if(cljs.core.truth_(temp__5823__auto__)){
var address = temp__5823__auto__;
return ["<div class=\"map-popup-address-row\">","<span class=\"map-popup-address\">",placesurfer.map_ui.popup.escape_html(address),"</span>","</div>"].join('');
} else {
return null;
}
});
placesurfer.map_ui.popup.deletable_marker_topics = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"booli-result","booli-result",1812290848),null,new cljs.core.Keyword(null,"pin","pin",-2111774834),null,new cljs.core.Keyword(null,"notar-result","notar-result",-618518378),null,new cljs.core.Keyword(null,"hemnet-result","hemnet-result",1768285020),null], null), null);
placesurfer.map_ui.popup.editable_marker_topics = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pin","pin",-2111774834),null], null), null);
/**
 * Jump-to-edit-page button, shown only for a saved pin marker (not Hemnet/
 * Booli search results, which have no entry on the edit page) and only when
 * the caller says editing is actually reachable right now (`:editable?` -
 * the backend has to be online, see pin_ui.handlers.map/popup-opts). Click
 * handling is wired up in map-ui.core via `set-on-marker-edit-handler!`.
 */
placesurfer.map_ui.popup.popup_edit_btn_html = (function placesurfer$map_ui$popup$popup_edit_btn_html(position,editable_QMARK_,edit_label){
if(cljs.core.truth_((function (){var and__5023__auto__ = editable_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.contains_QMARK_(placesurfer.map_ui.popup.editable_marker_topics,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154).cljs$core$IFn$_invoke$arity$1(position));
if(and__5023__auto____$1){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(position);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return ["<button type=\"button\" class=\"map-popup-edit-btn\" title=\"",placesurfer.map_ui.popup.escape_html(edit_label),"\" aria-label=\"",placesurfer.map_ui.popup.escape_html(edit_label),"\">","<img src=\"/images/edit.png\" alt=\"\" />","</button>"].join('');
} else {
return null;
}
});
/**
 * Trash-icon button, shown only for a saved pin or Hemnet search-result
 * marker (identified by :marker-topic - absent on the plain position maps
 * used for list-preview cards, so this never renders there). The actual
 * click handling (soft-delete for Hemnet, remove for pins, same as the
 * list's own trash icon) is wired up in map-ui.core via
 * `set-on-marker-delete-handler!` - this is just the markup.
 */
placesurfer.map_ui.popup.popup_delete_btn_html = (function placesurfer$map_ui$popup$popup_delete_btn_html(position,delete_label){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.contains_QMARK_(placesurfer.map_ui.popup.deletable_marker_topics,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154).cljs$core$IFn$_invoke$arity$1(position));
if(and__5023__auto__){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(position);
} else {
return and__5023__auto__;
}
})())){
return ["<button type=\"button\" class=\"map-popup-delete-btn\" title=\"",placesurfer.map_ui.popup.escape_html(delete_label),"\" aria-label=\"",placesurfer.map_ui.popup.escape_html(delete_label),"\">","<img src=\"/images/trash.png\" alt=\"\" />","</button>"].join('');
} else {
return null;
}
});
/**
 * Open-house viewing date/time, already formatted ready-to-display text by
 * whichever bookmarklet scraped it (e.g. "Visning: 18 okt. 11:00") - shown
 * at the very bottom of the popup, below the source row.
 */
placesurfer.map_ui.popup.popup_viewing_html = (function placesurfer$map_ui$popup$popup_viewing_html(position){
var temp__5823__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewing","viewing",1058577980).cljs$core$IFn$_invoke$arity$1(position))));
if(cljs.core.truth_(temp__5823__auto__)){
var viewing = temp__5823__auto__;
return ["<div class=\"map-popup-viewing\">",placesurfer.map_ui.popup.escape_html(viewing),"</div>"].join('');
} else {
return null;
}
});
/**
 * Transit lines (from Trafiklab, e.g. "4 mot Uppsala C, 805 mot Enköping")
 * and/or a deep link into Samtrafiken's journey planner pre-filled with this
 * stop as the origin (see scripts/trafiklab) - either or both may be absent:
 * :transit-lines needs a Trafiklab API key at data-generation time, while
 * :transit-departures-url needs only a name+coordinates and is set whenever
 * those are. Neither field exists for non-transit markers (pins, other
 * topics), so this renders nothing for them.
 */
placesurfer.map_ui.popup.popup_transit_html = (function placesurfer$map_ui$popup$popup_transit_html(p__20097,transit_label,departures_label){
var map__20098 = p__20097;
var map__20098__$1 = cljs.core.__destructure_map(map__20098);
var transit_lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20098__$1,new cljs.core.Keyword(null,"transit-lines","transit-lines",1220117948));
var transit_departures_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20098__$1,new cljs.core.Keyword(null,"transit-departures-url","transit-departures-url",367277988));
if(((cljs.core.seq(transit_lines)) || (placesurfer.map_ui.popup.non_blank_QMARK_(transit_departures_url)))){
return ["<div class=\"map-popup-transit\">",((cljs.core.seq(transit_lines))?["<div class=\"map-popup-transit-lines\">",placesurfer.map_ui.popup.escape_html(transit_label),placesurfer.map_ui.popup.escape_html(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",transit_lines)),"</div>"].join(''):null),((placesurfer.map_ui.popup.non_blank_QMARK_(transit_departures_url))?["<a class=\"map-popup-link map-popup-transit-link\" href=\"",placesurfer.map_ui.popup.escape_html(transit_departures_url),"\" target=\"_blank\" rel=\"noopener noreferrer\">",placesurfer.map_ui.popup.escape_html(departures_label),"</a>"].join(''):null),"</div>"].join('');
} else {
return null;
}
});
placesurfer.map_ui.popup.popup_source_html = (function placesurfer$map_ui$popup$popup_source_html(source,source_label){
var temp__5823__auto__ = placesurfer.about_ui.interface$.sources.normalize_source_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source], 0));
if(cljs.core.truth_(temp__5823__auto__)){
var source_id = temp__5823__auto__;
return ["<div class=\"map-popup-source\">","<span class=\"map-popup-source-label\">",placesurfer.map_ui.popup.escape_html(source_label),"</span>","<a class=\"map-popup-source-link\" href=\"",placesurfer.map_ui.popup.escape_html(placesurfer.about_ui.interface$.sources.about_href.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source_id], 0))),"\">","<img class=\"map-popup-link-icon\" src=\"",placesurfer.map_ui.popup.escape_html(placesurfer.about_ui.interface$.sources.icon_src.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source_id], 0))),"\" alt=\"",placesurfer.map_ui.popup.escape_html(cljs.core.name(source_id)),"\" />","</a>","</div>"].join('');
} else {
return null;
}
});
/**
 * HTML for a place popup (map marker or pin list preview).
 */
placesurfer.map_ui.popup.popup_html = (function placesurfer$map_ui$popup$popup_html(var_args){
var G__20100 = arguments.length;
switch (G__20100) {
case 1:
return placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$1 = (function (position){
return placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2 = (function (position,p__20101){
var map__20102 = p__20101;
var map__20102__$1 = cljs.core.__destructure_map(map__20102);
var source_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20102__$1,new cljs.core.Keyword(null,"source-label","source-label",585601639),"Source: ");
var delete_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20102__$1,new cljs.core.Keyword(null,"delete-label","delete-label",-713158574),"Delete");
var edit_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20102__$1,new cljs.core.Keyword(null,"edit-label","edit-label",47275348),"Edit");
var editable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20102__$1,new cljs.core.Keyword(null,"editable?","editable?",-1805477333));
var transit_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20102__$1,new cljs.core.Keyword(null,"transit-label","transit-label",-1378562714),"Lines: ");
var departures_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20102__$1,new cljs.core.Keyword(null,"departures-label","departures-label",632531740),"Show departures");
var map__20103 = position;
var map__20103__$1 = cljs.core.__destructure_map(map__20103);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20103__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20103__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20103__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20103__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var agent_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20103__$1,new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259));
var agent_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20103__$1,new cljs.core.Keyword(null,"agent-name","agent-name",-916187942));
var map__20104 = (function (){var or__5025__auto__ = placesurfer.googlestreetmap.interface$.place_external_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([position], 0));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var map__20104__$1 = cljs.core.__destructure_map(map__20104);
var listing_site = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20104__$1,new cljs.core.Keyword(null,"listing-site","listing-site",-1805219001));
var listing_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20104__$1,new cljs.core.Keyword(null,"listing-url","listing-url",-2106536881));
var google_maps_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20104__$1,new cljs.core.Keyword(null,"google-maps-url","google-maps-url",1524070940));
var edit_btn_html = placesurfer.map_ui.popup.popup_edit_btn_html(position,editable_QMARK_,edit_label);
var delete_btn_html = placesurfer.map_ui.popup.popup_delete_btn_html(position,delete_label);
var source_html = placesurfer.map_ui.popup.popup_source_html(source,source_label);
var viewing_html = placesurfer.map_ui.popup.popup_viewing_html(position);
var address_row_html = placesurfer.map_ui.popup.popup_address_row_html(position);
var transit_html = placesurfer.map_ui.popup.popup_transit_html(position,transit_label,departures_label);
var listing_link_html = (cljs.core.truth_((function (){var and__5023__auto__ = listing_site;
if(cljs.core.truth_(and__5023__auto__)){
return listing_url;
} else {
return and__5023__auto__;
}
})())?placesurfer.googlestreetmap.interface$.build_external_icon_link_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),listing_url,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733),new cljs.core.Keyword(null,"icon-src","icon-src",1550418733).cljs$core$IFn$_invoke$arity$1(listing_site),new cljs.core.Keyword(null,"icon-class","icon-class",-216197803),"place-external-link-icon",new cljs.core.Keyword(null,"link-class","link-class",609379382),new cljs.core.Keyword(null,"link-class","link-class",609379382).cljs$core$IFn$_invoke$arity$1(listing_site),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"aria","aria",1737868339).cljs$core$IFn$_invoke$arity$1(listing_site)], null)], 0)):null);
var agent_link_html = ((placesurfer.map_ui.popup.non_blank_QMARK_(agent_url))?placesurfer.googlestreetmap.interface$.build_external_icon_link_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),agent_url,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733),"/images/agent.png",new cljs.core.Keyword(null,"icon-class","icon-class",-216197803),"place-external-link-icon",new cljs.core.Keyword(null,"link-class","link-class",609379382),"place-external-link--agent",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(function (){var or__5025__auto__ = cljs.core.not_empty(agent_name);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "M\u00E4klare";
}
})()], null)], 0)):null);
var google_maps_link_html = (cljs.core.truth_(google_maps_url)?placesurfer.googlestreetmap.interface$.build_maps_icon_link_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),google_maps_url], null)], 0)):null);
var title_links = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [listing_link_html,agent_link_html,google_maps_link_html,edit_btn_html,delete_btn_html], null));
var name_html = ((cljs.core.seq(title_links))?["<div class=\"map-popup-name-row\">","<div class=\"map-popup-name\">",placesurfer.map_ui.popup.escape_html((function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Place";
}
})()),"</div>",clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title_links),"</div>"].join(''):["<div class=\"map-popup-name\">",placesurfer.map_ui.popup.escape_html((function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Place";
}
})()),"</div>"].join(''));
var parts = (function (){var G__20105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name_html], null);
var G__20105__$1 = ((placesurfer.map_ui.popup.non_blank_QMARK_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(position)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20105,["<div class=\"map-popup-image\">",placesurfer.map_ui.popup.popup_image_html(position),"</div>"].join('')):G__20105);
var G__20105__$2 = (cljs.core.truth_(address_row_html)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20105__$1,address_row_html):G__20105__$1);
var G__20105__$3 = ((placesurfer.map_ui.popup.non_blank_QMARK_(description))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20105__$2,["<div class=\"map-popup-description\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(placesurfer.html.interface$.sanitize.sanitize_description_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([description], 0))),"</div>"].join('')):G__20105__$2);
var G__20105__$4 = ((placesurfer.map_ui.popup.non_blank_QMARK_(location__$1))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20105__$3,["<div class=\"map-popup-location\">",placesurfer.map_ui.popup.escape_html(location__$1),"</div>"].join('')):G__20105__$3);
var G__20105__$5 = (cljs.core.truth_(transit_html)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20105__$4,transit_html):G__20105__$4);
var G__20105__$6 = (cljs.core.truth_(source_html)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20105__$5,source_html):G__20105__$5);
if(cljs.core.truth_(viewing_html)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20105__$6,viewing_html);
} else {
return G__20105__$6;
}
})();
return ["<div class=\"map-popup\">",clojure.string.join.cljs$core$IFn$_invoke$arity$2("",parts),"</div>"].join('');
}));

(placesurfer.map_ui.popup.popup_html.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=placesurfer.map_ui.popup.js.map
