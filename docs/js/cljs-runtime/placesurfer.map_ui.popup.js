goog.provide('placesurfer.map_ui.popup');
placesurfer.map_ui.popup.non_blank_QMARK_ = (function placesurfer$map_ui$popup$non_blank_QMARK_(s){
return (!(((cljs.core.truth_(s)?cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))):null) == null)));
});
placesurfer.map_ui.popup.escape_html = (function placesurfer$map_ui$popup$escape_html(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
placesurfer.map_ui.popup.popup_page_url = (function placesurfer$map_ui$popup$popup_page_url(p__39160){
var map__39161 = p__39160;
var map__39161__$1 = cljs.core.__destructure_map(map__39161);
var homepage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39161__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39161__$1,new cljs.core.Keyword(null,"url","url",276297046));
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
var temp__5825__auto__ = (function (){var G__39163 = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(position);
var G__39163__$1 = (((G__39163 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39163));
var G__39163__$2 = (((G__39163__$1 == null))?null:clojure.string.trim(G__39163__$1));
if((G__39163__$2 == null)){
return null;
} else {
return cljs.core.not_empty(G__39163__$2);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var image = temp__5825__auto__;
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
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(position))));
if(cljs.core.truth_(temp__5825__auto__)){
var address = temp__5825__auto__;
return ["<div class=\"map-popup-address-row\">","<span class=\"map-popup-address\">",placesurfer.map_ui.popup.escape_html(address),"</span>","</div>"].join('');
} else {
return null;
}
});
placesurfer.map_ui.popup.popup_source_html = (function placesurfer$map_ui$popup$popup_source_html(source,source_label){
var temp__5825__auto__ = placesurfer.about_ui.interface$.sources.normalize_source_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var source_id = temp__5825__auto__;
return ["<div class=\"map-popup-source\">","<span class=\"map-popup-source-label\">",placesurfer.map_ui.popup.escape_html(source_label),"</span>","<a class=\"map-popup-source-link\" href=\"",placesurfer.map_ui.popup.escape_html(placesurfer.about_ui.interface$.sources.about_href.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source_id], 0))),"\">","<img class=\"map-popup-link-icon\" src=\"",placesurfer.map_ui.popup.escape_html(placesurfer.about_ui.interface$.sources.icon_src.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source_id], 0))),"\" alt=\"",placesurfer.map_ui.popup.escape_html(cljs.core.name(source_id)),"\" />","</a>","</div>"].join('');
} else {
return null;
}
});
/**
 * HTML for a place popup (map marker or pin list preview).
 */
placesurfer.map_ui.popup.popup_html = (function placesurfer$map_ui$popup$popup_html(var_args){
var G__39168 = arguments.length;
switch (G__39168) {
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

(placesurfer.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2 = (function (position,p__39169){
var map__39170 = p__39169;
var map__39170__$1 = cljs.core.__destructure_map(map__39170);
var source_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39170__$1,new cljs.core.Keyword(null,"source-label","source-label",585601639),"Source: ");
var map__39171 = position;
var map__39171__$1 = cljs.core.__destructure_map(map__39171);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var agent_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259));
var agent_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,new cljs.core.Keyword(null,"agent-name","agent-name",-916187942));
var map__39172 = (function (){var or__5025__auto__ = placesurfer.googlestreetmap.interface$.place_external_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([position], 0));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var map__39172__$1 = cljs.core.__destructure_map(map__39172);
var listing_site = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39172__$1,new cljs.core.Keyword(null,"listing-site","listing-site",-1805219001));
var listing_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39172__$1,new cljs.core.Keyword(null,"listing-url","listing-url",-2106536881));
var google_maps_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39172__$1,new cljs.core.Keyword(null,"google-maps-url","google-maps-url",1524070940));
var source_html = placesurfer.map_ui.popup.popup_source_html(source,source_label);
var address_row_html = placesurfer.map_ui.popup.popup_address_row_html(position);
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
var title_links = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [listing_link_html,agent_link_html,google_maps_link_html], null));
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
var parts = (function (){var G__39178 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name_html], null);
var G__39178__$1 = ((placesurfer.map_ui.popup.non_blank_QMARK_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(position)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__39178,["<div class=\"map-popup-image\">",placesurfer.map_ui.popup.popup_image_html(position),"</div>"].join('')):G__39178);
var G__39178__$2 = (cljs.core.truth_(address_row_html)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__39178__$1,address_row_html):G__39178__$1);
var G__39178__$3 = ((placesurfer.map_ui.popup.non_blank_QMARK_(description))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__39178__$2,["<div class=\"map-popup-description\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(placesurfer.html.interface$.sanitize.sanitize_description_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([description], 0))),"</div>"].join('')):G__39178__$2);
var G__39178__$4 = ((placesurfer.map_ui.popup.non_blank_QMARK_(location__$1))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__39178__$3,["<div class=\"map-popup-location\">",placesurfer.map_ui.popup.escape_html(location__$1),"</div>"].join('')):G__39178__$3);
if(cljs.core.truth_(source_html)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__39178__$4,source_html);
} else {
return G__39178__$4;
}
})();
return ["<div class=\"map-popup\">",clojure.string.join.cljs$core$IFn$_invoke$arity$2("",parts),"</div>"].join('');
}));

(placesurfer.map_ui.popup.popup_html.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=placesurfer.map_ui.popup.js.map
