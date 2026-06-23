goog.provide('hitteri.map_ui.popup');
hitteri.map_ui.popup.non_blank_QMARK_ = (function hitteri$map_ui$popup$non_blank_QMARK_(s){
return (!(((cljs.core.truth_(s)?cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))):null) == null)));
});
hitteri.map_ui.popup.escape_html = (function hitteri$map_ui$popup$escape_html(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
hitteri.map_ui.popup.popup_page_url = (function hitteri$map_ui$popup$popup_page_url(p__47934){
var map__47935 = p__47934;
var map__47935__$1 = cljs.core.__destructure_map(map__47935);
var homepage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47935__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47935__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(hitteri.map_ui.popup.non_blank_QMARK_(homepage)){
return homepage;
} else {
if(hitteri.map_ui.popup.non_blank_QMARK_(url)){
return url;
} else {
return null;

}
}
});
hitteri.map_ui.popup.popup_image_html = (function hitteri$map_ui$popup$popup_image_html(position){
var temp__5825__auto__ = (function (){var G__47936 = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(position);
var G__47936__$1 = (((G__47936 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47936));
var G__47936__$2 = (((G__47936__$1 == null))?null:clojure.string.trim(G__47936__$1));
if((G__47936__$2 == null)){
return null;
} else {
return cljs.core.not_empty(G__47936__$2);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var image = temp__5825__auto__;
var img = ["<img src=\"",hitteri.map_ui.popup.escape_html(image),"\" alt=\"\" loading=\"lazy\">"].join('');
var page_url = hitteri.map_ui.popup.popup_page_url(position);
if(cljs.core.truth_(page_url)){
return ["<a class=\"map-popup-image-link\" href=\"",hitteri.map_ui.popup.escape_html(page_url),"\" target=\"_blank\" rel=\"noopener noreferrer\">",img,"</a>"].join('');
} else {
return img;
}
} else {
return null;
}
});
hitteri.map_ui.popup.popup_address_row_html = (function hitteri$map_ui$popup$popup_address_row_html(position){
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(position))));
if(cljs.core.truth_(temp__5825__auto__)){
var address = temp__5825__auto__;
return ["<div class=\"map-popup-address-row\">","<span class=\"map-popup-address\">",hitteri.map_ui.popup.escape_html(address),"</span>","</div>"].join('');
} else {
return null;
}
});
hitteri.map_ui.popup.popup_source_html = (function hitteri$map_ui$popup$popup_source_html(source,source_label){
var temp__5825__auto__ = hitteri.about_ui.interface$.sources.normalize_source_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var source_id = temp__5825__auto__;
return ["<div class=\"map-popup-source\">","<span class=\"map-popup-source-label\">",hitteri.map_ui.popup.escape_html(source_label),"</span>","<a class=\"map-popup-source-link\" href=\"",hitteri.map_ui.popup.escape_html(hitteri.about_ui.interface$.sources.about_href.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source_id], 0))),"\">","<img class=\"map-popup-link-icon\" src=\"",hitteri.map_ui.popup.escape_html(hitteri.about_ui.interface$.sources.icon_src.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source_id], 0))),"\" alt=\"",hitteri.map_ui.popup.escape_html(cljs.core.name(source_id)),"\" />","</a>","</div>"].join('');
} else {
return null;
}
});
/**
 * HTML for a place popup (map marker or pin list preview).
 */
hitteri.map_ui.popup.popup_html = (function hitteri$map_ui$popup$popup_html(var_args){
var G__47938 = arguments.length;
switch (G__47938) {
case 1:
return hitteri.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hitteri.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$1 = (function (position){
return hitteri.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2(position,cljs.core.PersistentArrayMap.EMPTY);
}));

(hitteri.map_ui.popup.popup_html.cljs$core$IFn$_invoke$arity$2 = (function (position,p__47939){
var map__47940 = p__47939;
var map__47940__$1 = cljs.core.__destructure_map(map__47940);
var source_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47940__$1,new cljs.core.Keyword(null,"source-label","source-label",585601639),"Source: ");
var map__47941 = position;
var map__47941__$1 = cljs.core.__destructure_map(map__47941);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47941__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47941__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var locality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47941__$1,new cljs.core.Keyword(null,"locality","locality",842809377));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47941__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var agent_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47941__$1,new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259));
var map__47942 = (function (){var or__5025__auto__ = hitteri.googlestreetmap.interface$.place_external_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([position], 0));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var map__47942__$1 = cljs.core.__destructure_map(map__47942);
var google_maps_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47942__$1,new cljs.core.Keyword(null,"google-maps-url","google-maps-url",1524070940));
var hemnet_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47942__$1,new cljs.core.Keyword(null,"hemnet-url","hemnet-url",-1665312184));
var source_html = hitteri.map_ui.popup.popup_source_html(source,source_label);
var address_row_html = hitteri.map_ui.popup.popup_address_row_html(position);
var hemnet_link_html = (cljs.core.truth_(hemnet_url)?hitteri.googlestreetmap.interface$.build_external_icon_link_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),hemnet_url,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733),"/images/hemnet.png",new cljs.core.Keyword(null,"icon-class","icon-class",-216197803),"place-external-link-icon",new cljs.core.Keyword(null,"link-class","link-class",609379382),"place-external-link--hemnet",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Hemnet"], null)], 0)):null);
var agent_link_html = ((hitteri.map_ui.popup.non_blank_QMARK_(agent_url))?hitteri.googlestreetmap.interface$.build_external_icon_link_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),agent_url,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733),"/images/agent.png",new cljs.core.Keyword(null,"icon-class","icon-class",-216197803),"place-external-link-icon",new cljs.core.Keyword(null,"link-class","link-class",609379382),"place-external-link--agent",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"M\u00E4klare"], null)], 0)):null);
var google_maps_link_html = (cljs.core.truth_(google_maps_url)?hitteri.googlestreetmap.interface$.build_maps_icon_link_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),google_maps_url], null)], 0)):null);
var title_links = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hemnet_link_html,agent_link_html,google_maps_link_html], null));
var name_html = ((cljs.core.seq(title_links))?["<div class=\"map-popup-name-row\">","<div class=\"map-popup-name\">",hitteri.map_ui.popup.escape_html((function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Place";
}
})()),"</div>",clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title_links),"</div>"].join(''):["<div class=\"map-popup-name\">",hitteri.map_ui.popup.escape_html((function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Place";
}
})()),"</div>"].join(''));
var parts = (function (){var G__47943 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name_html], null);
var G__47943__$1 = ((hitteri.map_ui.popup.non_blank_QMARK_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(position)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47943,["<div class=\"map-popup-image\">",hitteri.map_ui.popup.popup_image_html(position),"</div>"].join('')):G__47943);
var G__47943__$2 = (cljs.core.truth_(address_row_html)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47943__$1,address_row_html):G__47943__$1);
var G__47943__$3 = ((hitteri.map_ui.popup.non_blank_QMARK_(description))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47943__$2,["<div class=\"map-popup-description\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hitteri.html.interface$.sanitize.sanitize_description_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([description], 0))),"</div>"].join('')):G__47943__$2);
var G__47943__$4 = ((hitteri.map_ui.popup.non_blank_QMARK_(locality))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47943__$3,["<div class=\"map-popup-locality\">",hitteri.map_ui.popup.escape_html(locality),"</div>"].join('')):G__47943__$3);
if(cljs.core.truth_(source_html)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47943__$4,source_html);
} else {
return G__47943__$4;
}
})();
return ["<div class=\"map-popup\">",clojure.string.join.cljs$core$IFn$_invoke$arity$2("",parts),"</div>"].join('');
}));

(hitteri.map_ui.popup.popup_html.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=hitteri.map_ui.popup.js.map
