goog.provide('hitteri.googlestreetmap.core');
hitteri.googlestreetmap.core.parse_number = (function hitteri$googlestreetmap$core$parse_number(s){
if(cljs.core.seq(s)){
var n = Number(s);
if(cljs.core.truth_(isNaN(n))){
return null;
} else {
return n;
}
} else {
return null;
}
});
hitteri.googlestreetmap.core.try_regex = (function hitteri$googlestreetmap$core$try_regex(pattern,s){
var temp__5825__auto__ = cljs.core.re_find(pattern,s);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
if(cljs.core.vector_QMARK_(m)){
return cljs.core.rest(m);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
}
} else {
return null;
}
});
hitteri.googlestreetmap.core.extract_lat_lon = (function hitteri$googlestreetmap$core$extract_lat_lon(url){
var or__5025__auto__ = (function (){var temp__5825__auto__ = hitteri.googlestreetmap.core.try_regex(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/,url);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__47112 = temp__5825__auto__;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47112,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47112,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),hitteri.googlestreetmap.core.parse_number(lat),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),hitteri.googlestreetmap.core.parse_number(lon)], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = hitteri.googlestreetmap.core.try_regex(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/,url);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__47115 = temp__5825__auto__;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47115,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47115,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),hitteri.googlestreetmap.core.parse_number(lat),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),hitteri.googlestreetmap.core.parse_number(lon)], null);
} else {
return null;
}
}
});
hitteri.googlestreetmap.core.decode = (function hitteri$googlestreetmap$core$decode(s){
if(cljs.core.seq(s)){
return clojure.string.replace(decodeURIComponent(s),"+"," ");
} else {
return null;
}
});
hitteri.googlestreetmap.core.extract_name = (function hitteri$googlestreetmap$core$extract_name(url){
var or__5025__auto__ = (function (){var temp__5825__auto__ = hitteri.googlestreetmap.core.try_regex(/\/maps\/place\/([^\/?]+)/,url);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__47118 = temp__5825__auto__;
var raw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47118,(0),null);
return hitteri.googlestreetmap.core.decode(raw);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = hitteri.googlestreetmap.core.try_regex(/\/place\/([^\/?]+)/,url);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__47121 = temp__5825__auto__;
var raw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47121,(0),null);
return hitteri.googlestreetmap.core.decode(raw);
} else {
return null;
}
}
});
hitteri.googlestreetmap.core.country_code_from_text = (function hitteri$googlestreetmap$core$country_code_from_text(text,countries){
var text_STAR_ = (function (){var G__47125 = text;
if((G__47125 == null)){
return null;
} else {
return clojure.string.lower_case(G__47125);
}
})();
return cljs.core.some((function (p__47126){
var map__47127 = p__47126;
var map__47127__$1 = cljs.core.__destructure_map(map__47127);
var iso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47127__$1,new cljs.core.Keyword(null,"iso","iso",-1366207543));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47127__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47127__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47127__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var candidates = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,slug], null),aliases));
var found_QMARK_ = cljs.core.some((function (p1__47124_SHARP_){
return clojure.string.includes_QMARK_(text_STAR_,clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47124_SHARP_)));
}),candidates);
if(cljs.core.truth_(found_QMARK_)){
return iso;
} else {
return null;
}
}),countries);
});
/**
 * Parse a Google Maps URL and return map with available fields.
 * Returns nil when URL does not contain useful data.
 */
hitteri.googlestreetmap.core.parse_url = (function hitteri$googlestreetmap$core$parse_url(url,countries){
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)))){
var coords = hitteri.googlestreetmap.core.extract_lat_lon(url);
var name = hitteri.googlestreetmap.core.extract_name(url);
var country_code = hitteri.googlestreetmap.core.country_code_from_text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)," ",name].join(''),countries);
if(cljs.core.truth_((function (){var or__5025__auto__ = coords;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = name;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return country_code;
}
}
})())){
var G__47128 = cljs.core.PersistentArrayMap.EMPTY;
var G__47128__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47128,new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords)):G__47128);
var G__47128__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47128__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords)):G__47128__$1);
var G__47128__$3 = ((cljs.core.seq(name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47128__$2,new cljs.core.Keyword(null,"name","name",1843675177),name):G__47128__$2);
if(cljs.core.seq(country_code)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47128__$3,new cljs.core.Keyword(null,"country-code","country-code",-927451124),country_code);
} else {
return G__47128__$3;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Extract only coordinates from a Google Maps URL.
 */
hitteri.googlestreetmap.core.parse_coordinates = (function hitteri$googlestreetmap$core$parse_coordinates(url){
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)))){
return hitteri.googlestreetmap.core.extract_lat_lon(url);
} else {
return null;
}
});
/**
 * Extract place name from a Google Maps URL.
 */
hitteri.googlestreetmap.core.parse_name = (function hitteri$googlestreetmap$core$parse_name(url){
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)))){
return hitteri.googlestreetmap.core.extract_name(url);
} else {
return null;
}
});
/**
 * Google Maps URL that opens a pinned location.
 * 
 *   Prefers coordinates when available; otherwise searches by address text.
 *   Uses the `?q=` form to avoid `&` in URLs (safer through HTML sanitization).
 */
hitteri.googlestreetmap.core.build_maps_location_url = (function hitteri$googlestreetmap$core$build_maps_location_url(p__47129){
var map__47130 = p__47129;
var map__47130__$1 = cljs.core.__destructure_map(map__47130);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47130__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47130__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47130__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
if(((typeof latitude === 'number') && (typeof longitude === 'number'))){
return ["https://www.google.com/maps?q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(latitude),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(longitude)].join('');
} else {
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));
if(cljs.core.truth_(temp__5825__auto__)){
var q = temp__5825__auto__;
return ["https://www.google.com/maps?q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(q))].join('');
} else {
return null;
}

}
});
/**
 * Build a Google Maps search URL for a free-text address query.
 */
hitteri.googlestreetmap.core.build_maps_search_url = (function hitteri$googlestreetmap$core$build_maps_search_url(query){
return hitteri.googlestreetmap.core.build_maps_location_url(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null));
});
hitteri.googlestreetmap.core.escape_html_text = (function hitteri$googlestreetmap$core$escape_html_text(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&(?!amp;|lt;|gt;|quot;|#)/,"&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
hitteri.googlestreetmap.core.maps_icon_src = "/images/google-maps.png";
hitteri.googlestreetmap.core.maps_icon_class = "description-maps-icon";
hitteri.googlestreetmap.core.open_icon_src = "/images/open.png";
hitteri.googlestreetmap.core.open_icon_class = "description-open-icon";
/**
 * Wrap address text in a Google Maps link to the listing location.
 */
hitteri.googlestreetmap.core.build_maps_search_link_html = (function hitteri$googlestreetmap$core$build_maps_search_link_html(p__47131){
var map__47132 = p__47131;
var map__47132__$1 = cljs.core.__destructure_map(map__47132);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47132__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47132__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47132__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));
if(cljs.core.truth_(temp__5825__auto__)){
var label = temp__5825__auto__;
var temp__5825__auto____$1 = hitteri.googlestreetmap.core.build_maps_location_url(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),label,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude], null));
if(cljs.core.truth_(temp__5825__auto____$1)){
var url = temp__5825__auto____$1;
return ["<a href=\"",url,"\" target=\"_blank\" rel=\"noopener noreferrer\">",hitteri.googlestreetmap.core.escape_html_text(label),"</a>","<img class=\"",hitteri.googlestreetmap.core.open_icon_class,"\" src=\"",hitteri.googlestreetmap.core.open_icon_src,"\" alt=\"\" />","<img class=\"",hitteri.googlestreetmap.core.maps_icon_class,"\" src=\"",hitteri.googlestreetmap.core.maps_icon_src,"\" alt=\"\" />"].join('');
} else {
return null;
}
} else {
return null;
}
});
/**
 * Build a Google Street View URL from coordinates.
 */
hitteri.googlestreetmap.core.build_street_view_url = (function hitteri$googlestreetmap$core$build_street_view_url(latitude,longitude){
if(((typeof latitude === 'number') && (typeof longitude === 'number'))){
return ["https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(latitude),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(longitude)].join('');
} else {
return null;
}
});
hitteri.googlestreetmap.core.hemnet_listing_pattern = /^https?:\/\/(?:www\.)?hemnet\.se\/bostad\/.+-(\d+)\/?$/;
hitteri.googlestreetmap.core.non_blank = (function hitteri$googlestreetmap$core$non_blank(s){
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
if(cljs.core.truth_(temp__5825__auto__)){
var t = temp__5825__auto__;
return t;
} else {
return null;
}
});
hitteri.googlestreetmap.core.parse_coord = (function hitteri$googlestreetmap$core$parse_coord(v){
if(typeof v === 'number'){
return v;
} else {
if(typeof v === 'string'){
return hitteri.googlestreetmap.core.parse_number(v);
} else {
return null;

}
}
});
/**
 * True when `url` points at Google Maps.
 */
hitteri.googlestreetmap.core.google_maps_url_QMARK_ = (function hitteri$googlestreetmap$core$google_maps_url_QMARK_(url){
var temp__5825__auto__ = hitteri.googlestreetmap.core.non_blank(url);
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
var lower = clojure.string.lower_case(s);
return ((clojure.string.includes_QMARK_(lower,"google.com/maps")) || (clojure.string.includes_QMARK_(lower,"maps.google.")));
} else {
return null;
}
});
/**
 * True when `url` is a Hemnet property listing page.
 */
hitteri.googlestreetmap.core.hemnet_listing_url_QMARK_ = (function hitteri$googlestreetmap$core$hemnet_listing_url_QMARK_(url){
return cljs.core.boolean$((function (){var temp__5825__auto__ = hitteri.googlestreetmap.core.non_blank(url);
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
return cljs.core.re_matches(hitteri.googlestreetmap.core.hemnet_listing_pattern,s);
} else {
return null;
}
})());
});
/**
 * True when `address` has both street and locality (comma-separated parts).
 */
hitteri.googlestreetmap.core.complete_address_line_QMARK_ = (function hitteri$googlestreetmap$core$complete_address_line_QMARK_(address){
var temp__5825__auto__ = hitteri.googlestreetmap.core.non_blank(address);
if(cljs.core.truth_(temp__5825__auto__)){
var line = temp__5825__auto__;
var parts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/)));
return (cljs.core.count(parts) >= (2));
} else {
return null;
}
});
/**
 * Resolve Google Maps and Hemnet icon link URLs for a pin-like place map.
 */
hitteri.googlestreetmap.core.place_external_links = (function hitteri$googlestreetmap$core$place_external_links(p__47133){
var map__47134 = p__47133;
var map__47134__$1 = cljs.core.__destructure_map(map__47134);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47134__$1,new cljs.core.Keyword(null,"address","address",559499426));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47134__$1,new cljs.core.Keyword(null,"url","url",276297046));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47134__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47134__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var address_STAR_ = hitteri.googlestreetmap.core.non_blank(address);
var url_STAR_ = hitteri.googlestreetmap.core.non_blank(url);
var lat = hitteri.googlestreetmap.core.parse_coord(latitude);
var lon = hitteri.googlestreetmap.core.parse_coord(longitude);
var hemnet_QMARK_ = hitteri.googlestreetmap.core.hemnet_listing_url_QMARK_(url_STAR_);
var gmaps_source_QMARK_ = hitteri.googlestreetmap.core.google_maps_url_QMARK_(url_STAR_);
var google_maps_url = (cljs.core.truth_(gmaps_source_QMARK_)?url_STAR_:(cljs.core.truth_((function (){var and__5023__auto__ = hemnet_QMARK_;
if(and__5023__auto__){
return hitteri.googlestreetmap.core.complete_address_line_QMARK_(address_STAR_);
} else {
return and__5023__auto__;
}
})())?hitteri.googlestreetmap.core.build_maps_location_url(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),address_STAR_,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon], null)):null
));
var hemnet_url = ((hemnet_QMARK_)?url_STAR_:null);
if(cljs.core.truth_((function (){var or__5025__auto__ = google_maps_url;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hemnet_url;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"google-maps-url","google-maps-url",1524070940),google_maps_url,new cljs.core.Keyword(null,"hemnet-url","hemnet-url",-1665312184),hemnet_url], null);
} else {
return null;
}
});
hitteri.googlestreetmap.core.place_external_link_class = "place-external-link";
hitteri.googlestreetmap.core.place_external_icon_class = "place-external-link-icon";
hitteri.googlestreetmap.core.hemnet_link_class = "place-external-link--hemnet";
hitteri.googlestreetmap.core.google_maps_link_class = "place-external-link--google-maps";
hitteri.googlestreetmap.core.hemnet_icon_src = "/images/hemnet.png";
hitteri.googlestreetmap.core.link_class_attr = (function hitteri$googlestreetmap$core$link_class_attr(extra_class){
return [hitteri.googlestreetmap.core.place_external_link_class,(cljs.core.truth_(extra_class)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join(''):null)].join('');
});
/**
 * Icon-only external link HTML.
 */
hitteri.googlestreetmap.core.build_external_icon_link_html = (function hitteri$googlestreetmap$core$build_external_icon_link_html(p__47135){
var map__47136 = p__47135;
var map__47136__$1 = cljs.core.__destructure_map(map__47136);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47136__$1,new cljs.core.Keyword(null,"url","url",276297046));
var icon_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47136__$1,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733));
var icon_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47136__$1,new cljs.core.Keyword(null,"icon-class","icon-class",-216197803));
var link_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47136__$1,new cljs.core.Keyword(null,"link-class","link-class",609379382));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47136__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var temp__5825__auto__ = hitteri.googlestreetmap.core.non_blank(url);
if(cljs.core.truth_(temp__5825__auto__)){
var href = temp__5825__auto__;
return ["<a class=\"",hitteri.googlestreetmap.core.escape_html_text(hitteri.googlestreetmap.core.link_class_attr(link_class)),"\" href=\"",hitteri.googlestreetmap.core.escape_html_text(href),"\" target=\"_blank\" rel=\"noopener noreferrer\"",(cljs.core.truth_(aria_label)?[" aria-label=\"",hitteri.googlestreetmap.core.escape_html_text(aria_label),"\""].join(''):null),"><img class=\"",hitteri.googlestreetmap.core.escape_html_text((function (){var or__5025__auto__ = icon_class;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hitteri.googlestreetmap.core.place_external_icon_class;
}
})()),"\" src=\"",hitteri.googlestreetmap.core.escape_html_text(icon_src),"\" alt=\"\" /></a>"].join('');
} else {
return null;
}
});
/**
 * Google Maps icon-only link HTML.
 */
hitteri.googlestreetmap.core.build_maps_icon_link_html = (function hitteri$googlestreetmap$core$build_maps_icon_link_html(p__47137){
var map__47138 = p__47137;
var map__47138__$1 = cljs.core.__destructure_map(map__47138);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47138__$1,new cljs.core.Keyword(null,"url","url",276297046));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47138__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
return hitteri.googlestreetmap.core.build_external_icon_link_html(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733),hitteri.googlestreetmap.core.maps_icon_src,new cljs.core.Keyword(null,"icon-class","icon-class",-216197803),hitteri.googlestreetmap.core.place_external_icon_class,new cljs.core.Keyword(null,"link-class","link-class",609379382),hitteri.googlestreetmap.core.google_maps_link_class,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(function (){var or__5025__auto__ = aria_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Google Maps";
}
})()], null));
});
/**
 * Icon-only external link HTML fragment (Hemnet, then Google Maps).
 */
hitteri.googlestreetmap.core.build_place_external_link_icons_html = (function hitteri$googlestreetmap$core$build_place_external_link_icons_html(place){
var temp__5825__auto__ = hitteri.googlestreetmap.core.place_external_links(place);
if(cljs.core.truth_(temp__5825__auto__)){
var map__47139 = temp__5825__auto__;
var map__47139__$1 = cljs.core.__destructure_map(map__47139);
var google_maps_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47139__$1,new cljs.core.Keyword(null,"google-maps-url","google-maps-url",1524070940));
var hemnet_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47139__$1,new cljs.core.Keyword(null,"hemnet-url","hemnet-url",-1665312184));
var parts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(hemnet_url)?hitteri.googlestreetmap.core.build_external_icon_link_html(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),hemnet_url,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733),hitteri.googlestreetmap.core.hemnet_icon_src,new cljs.core.Keyword(null,"icon-class","icon-class",-216197803),hitteri.googlestreetmap.core.place_external_icon_class,new cljs.core.Keyword(null,"link-class","link-class",609379382),hitteri.googlestreetmap.core.hemnet_link_class,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Hemnet"], null)):null),(cljs.core.truth_(google_maps_url)?hitteri.googlestreetmap.core.build_maps_icon_link_html(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),google_maps_url], null)):null)], null));
if(cljs.core.seq(parts)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",parts);
} else {
return null;
}
} else {
return null;
}
});
/**
 * HTML row of external place links (Hemnet, Google Maps) for popups.
 */
hitteri.googlestreetmap.core.build_place_external_links_html = (function hitteri$googlestreetmap$core$build_place_external_links_html(place){
var temp__5825__auto__ = hitteri.googlestreetmap.core.build_place_external_link_icons_html(place);
if(cljs.core.truth_(temp__5825__auto__)){
var icons = temp__5825__auto__;
return ["<div class=\"place-external-links\" contenteditable=\"false\">",icons,"</div>"].join('');
} else {
return null;
}
});

//# sourceMappingURL=hitteri.googlestreetmap.core.js.map
