goog.provide('placesurfer.googlestreetmap.core');
placesurfer.googlestreetmap.core.parse_number = (function placesurfer$googlestreetmap$core$parse_number(s){
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
placesurfer.googlestreetmap.core.try_regex = (function placesurfer$googlestreetmap$core$try_regex(pattern,s){
var temp__5823__auto__ = cljs.core.re_find(pattern,s);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
if(cljs.core.vector_QMARK_(m)){
return cljs.core.rest(m);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
}
} else {
return null;
}
});
placesurfer.googlestreetmap.core.extract_lat_lon = (function placesurfer$googlestreetmap$core$extract_lat_lon(url){
var or__5025__auto__ = (function (){var temp__5823__auto__ = placesurfer.googlestreetmap.core.try_regex(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/,url);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__21576 = temp__5823__auto__;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21576,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21576,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),placesurfer.googlestreetmap.core.parse_number(lat),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),placesurfer.googlestreetmap.core.parse_number(lon)], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5823__auto__ = placesurfer.googlestreetmap.core.try_regex(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/,url);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__21579 = temp__5823__auto__;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21579,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21579,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),placesurfer.googlestreetmap.core.parse_number(lat),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),placesurfer.googlestreetmap.core.parse_number(lon)], null);
} else {
return null;
}
}
});
placesurfer.googlestreetmap.core.decode = (function placesurfer$googlestreetmap$core$decode(s){
if(cljs.core.seq(s)){
return clojure.string.replace(decodeURIComponent(s),"+"," ");
} else {
return null;
}
});
placesurfer.googlestreetmap.core.extract_name = (function placesurfer$googlestreetmap$core$extract_name(url){
var or__5025__auto__ = (function (){var temp__5823__auto__ = placesurfer.googlestreetmap.core.try_regex(/\/maps\/place\/([^\/?]+)/,url);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__21586 = temp__5823__auto__;
var raw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21586,(0),null);
return placesurfer.googlestreetmap.core.decode(raw);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5823__auto__ = placesurfer.googlestreetmap.core.try_regex(/\/place\/([^\/?]+)/,url);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__21590 = temp__5823__auto__;
var raw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21590,(0),null);
return placesurfer.googlestreetmap.core.decode(raw);
} else {
return null;
}
}
});
placesurfer.googlestreetmap.core.country_code_from_text = (function placesurfer$googlestreetmap$core$country_code_from_text(text,countries){
var text_STAR_ = (function (){var G__21594 = text;
if((G__21594 == null)){
return null;
} else {
return clojure.string.lower_case(G__21594);
}
})();
return cljs.core.some((function (p__21596){
var map__21600 = p__21596;
var map__21600__$1 = cljs.core.__destructure_map(map__21600);
var iso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21600__$1,new cljs.core.Keyword(null,"iso","iso",-1366207543));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21600__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21600__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21600__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var candidates = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,slug], null),aliases));
var found_QMARK_ = cljs.core.some((function (p1__21593_SHARP_){
return clojure.string.includes_QMARK_(text_STAR_,clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21593_SHARP_)));
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
placesurfer.googlestreetmap.core.parse_url = (function placesurfer$googlestreetmap$core$parse_url(url,countries){
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)))){
var coords = placesurfer.googlestreetmap.core.extract_lat_lon(url);
var name = placesurfer.googlestreetmap.core.extract_name(url);
var country_code = placesurfer.googlestreetmap.core.country_code_from_text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)," ",name].join(''),countries);
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
var G__21608 = cljs.core.PersistentArrayMap.EMPTY;
var G__21608__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21608,new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords)):G__21608);
var G__21608__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21608__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords)):G__21608__$1);
var G__21608__$3 = ((cljs.core.seq(name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21608__$2,new cljs.core.Keyword(null,"name","name",1843675177),name):G__21608__$2);
if(cljs.core.seq(country_code)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21608__$3,new cljs.core.Keyword(null,"country-code","country-code",-927451124),country_code);
} else {
return G__21608__$3;
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
placesurfer.googlestreetmap.core.parse_coordinates = (function placesurfer$googlestreetmap$core$parse_coordinates(url){
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)))){
return placesurfer.googlestreetmap.core.extract_lat_lon(url);
} else {
return null;
}
});
/**
 * Extract place name from a Google Maps URL.
 */
placesurfer.googlestreetmap.core.parse_name = (function placesurfer$googlestreetmap$core$parse_name(url){
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)))){
return placesurfer.googlestreetmap.core.extract_name(url);
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
placesurfer.googlestreetmap.core.build_maps_location_url = (function placesurfer$googlestreetmap$core$build_maps_location_url(p__21611){
var map__21612 = p__21611;
var map__21612__$1 = cljs.core.__destructure_map(map__21612);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
if(((typeof latitude === 'number') && (typeof longitude === 'number'))){
return ["https://www.google.com/maps?q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(latitude),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(longitude)].join('');
} else {
var temp__5823__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));
if(cljs.core.truth_(temp__5823__auto__)){
var q = temp__5823__auto__;
return ["https://www.google.com/maps?q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(q))].join('');
} else {
return null;
}

}
});
/**
 * Build a Google Maps search URL for a free-text address query.
 */
placesurfer.googlestreetmap.core.build_maps_search_url = (function placesurfer$googlestreetmap$core$build_maps_search_url(query){
return placesurfer.googlestreetmap.core.build_maps_location_url(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null));
});
placesurfer.googlestreetmap.core.escape_html_text = (function placesurfer$googlestreetmap$core$escape_html_text(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&(?!amp;|lt;|gt;|quot;|#)/,"&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
placesurfer.googlestreetmap.core.maps_icon_src = "/images/google-maps.png";
placesurfer.googlestreetmap.core.maps_icon_class = "description-maps-icon";
placesurfer.googlestreetmap.core.open_icon_src = "/images/open.png";
placesurfer.googlestreetmap.core.open_icon_class = "description-open-icon";
/**
 * Wrap address text in a Google Maps link to the listing location.
 */
placesurfer.googlestreetmap.core.build_maps_search_link_html = (function placesurfer$googlestreetmap$core$build_maps_search_link_html(p__21617){
var map__21618 = p__21617;
var map__21618__$1 = cljs.core.__destructure_map(map__21618);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21618__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21618__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21618__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var temp__5823__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));
if(cljs.core.truth_(temp__5823__auto__)){
var label = temp__5823__auto__;
var temp__5823__auto____$1 = placesurfer.googlestreetmap.core.build_maps_location_url(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),label,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude], null));
if(cljs.core.truth_(temp__5823__auto____$1)){
var url = temp__5823__auto____$1;
return ["<a href=\"",url,"\" target=\"_blank\" rel=\"noopener noreferrer\">",placesurfer.googlestreetmap.core.escape_html_text(label),"</a>","<img class=\"",placesurfer.googlestreetmap.core.open_icon_class,"\" src=\"",placesurfer.googlestreetmap.core.open_icon_src,"\" alt=\"\" />","<img class=\"",placesurfer.googlestreetmap.core.maps_icon_class,"\" src=\"",placesurfer.googlestreetmap.core.maps_icon_src,"\" alt=\"\" />"].join('');
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
placesurfer.googlestreetmap.core.build_street_view_url = (function placesurfer$googlestreetmap$core$build_street_view_url(latitude,longitude){
if(((typeof latitude === 'number') && (typeof longitude === 'number'))){
return ["https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(latitude),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(longitude)].join('');
} else {
return null;
}
});
placesurfer.googlestreetmap.core.hemnet_listing_pattern = /^https?:\/\/(?:www\.)?hemnet\.se\/bostad\/.+-(\d+)\/?$/;
placesurfer.googlestreetmap.core.non_blank = (function placesurfer$googlestreetmap$core$non_blank(s){
var temp__5823__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
if(cljs.core.truth_(temp__5823__auto__)){
var t = temp__5823__auto__;
return t;
} else {
return null;
}
});
placesurfer.googlestreetmap.core.parse_coord = (function placesurfer$googlestreetmap$core$parse_coord(v){
if(typeof v === 'number'){
return v;
} else {
if(typeof v === 'string'){
return placesurfer.googlestreetmap.core.parse_number(v);
} else {
return null;

}
}
});
/**
 * True when `url` points at Google Maps.
 */
placesurfer.googlestreetmap.core.google_maps_url_QMARK_ = (function placesurfer$googlestreetmap$core$google_maps_url_QMARK_(url){
var temp__5823__auto__ = placesurfer.googlestreetmap.core.non_blank(url);
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
var lower = clojure.string.lower_case(s);
return ((clojure.string.includes_QMARK_(lower,"google.com/maps")) || (clojure.string.includes_QMARK_(lower,"maps.google.")));
} else {
return null;
}
});
/**
 * True when `url` is a Hemnet property listing page.
 */
placesurfer.googlestreetmap.core.hemnet_listing_url_QMARK_ = (function placesurfer$googlestreetmap$core$hemnet_listing_url_QMARK_(url){
return cljs.core.boolean$((function (){var temp__5823__auto__ = placesurfer.googlestreetmap.core.non_blank(url);
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
return cljs.core.re_matches(placesurfer.googlestreetmap.core.hemnet_listing_pattern,s);
} else {
return null;
}
})());
});
/**
 * True when `address` has both street and locality (comma-separated parts).
 */
placesurfer.googlestreetmap.core.complete_address_line_QMARK_ = (function placesurfer$googlestreetmap$core$complete_address_line_QMARK_(address){
var temp__5823__auto__ = placesurfer.googlestreetmap.core.non_blank(address);
if(cljs.core.truth_(temp__5823__auto__)){
var line = temp__5823__auto__;
var parts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/)));
return (cljs.core.count(parts) >= (2));
} else {
return null;
}
});
placesurfer.googlestreetmap.core.listing_sites = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"hemnet","hemnet",-84689524),new cljs.core.Keyword(null,"pattern","pattern",242135423),/hemnet\.se\/bostad\//i,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733),"/images/hemnet.png",new cljs.core.Keyword(null,"link-class","link-class",609379382),"place-external-link--hemnet",new cljs.core.Keyword(null,"aria","aria",1737868339),"Hemnet"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"boneo","boneo",-168062074),new cljs.core.Keyword(null,"pattern","pattern",242135423),/boneo\.se\/bostad\//i,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733),"/images/boneo.png",new cljs.core.Keyword(null,"link-class","link-class",609379382),"place-external-link--boneo",new cljs.core.Keyword(null,"aria","aria",1737868339),"Boneo"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"hemkartan","hemkartan",-37562320),new cljs.core.Keyword(null,"pattern","pattern",242135423),/hemkartan\.se\/karta\//i,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733),"/images/hemkartan.png",new cljs.core.Keyword(null,"link-class","link-class",609379382),"place-external-link--hemkartan",new cljs.core.Keyword(null,"aria","aria",1737868339),"Hemkartan"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"booli","booli",-346787874),new cljs.core.Keyword(null,"pattern","pattern",242135423),/booli\.se\/bostad\//i,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733),"/images/booli.png",new cljs.core.Keyword(null,"link-class","link-class",609379382),"place-external-link--booli",new cljs.core.Keyword(null,"aria","aria",1737868339),"Booli"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"notar","notar",13591470),new cljs.core.Keyword(null,"pattern","pattern",242135423),/notar\.se\/kopa-bostad\/objekt\//i,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733),"/images/notar.png",new cljs.core.Keyword(null,"link-class","link-class",609379382),"place-external-link--notar",new cljs.core.Keyword(null,"aria","aria",1737868339),"Notar"], null)], null);
placesurfer.googlestreetmap.core.detect_listing_site = (function placesurfer$googlestreetmap$core$detect_listing_site(url){
var temp__5823__auto__ = placesurfer.googlestreetmap.core.non_blank(url);
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21632_SHARP_){
return cljs.core.re_find(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(p1__21632_SHARP_),s);
}),placesurfer.googlestreetmap.core.listing_sites));
} else {
return null;
}
});
placesurfer.googlestreetmap.core.name_search_topics = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bus-stop","bus-stop",-783311751),null,new cljs.core.Keyword(null,"train-station","train-station",792128606),null], null), null);
/**
 * Resolve listing-site and Google Maps icon link URLs for a pin-like place map.
 *   Returns map with :listing-site, :listing-url, :google-maps-url, :hemnet-url (compat).
 */
placesurfer.googlestreetmap.core.place_external_links = (function placesurfer$googlestreetmap$core$place_external_links(p__21633){
var map__21634 = p__21633;
var map__21634__$1 = cljs.core.__destructure_map(map__21634);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21634__$1,new cljs.core.Keyword(null,"address","address",559499426));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21634__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21634__$1,new cljs.core.Keyword(null,"url","url",276297046));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21634__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21634__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21634__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var marker_topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21634__$1,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154));
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21634__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var address_STAR_ = (function (){var or__5025__auto__ = placesurfer.googlestreetmap.core.non_blank(address);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.googlestreetmap.core.non_blank(location__$1);
}
})();
var url_STAR_ = placesurfer.googlestreetmap.core.non_blank(url);
var lat = placesurfer.googlestreetmap.core.parse_coord(latitude);
var lon = placesurfer.googlestreetmap.core.parse_coord(longitude);
var site = placesurfer.googlestreetmap.core.detect_listing_site(url_STAR_);
var gmaps_source_QMARK_ = placesurfer.googlestreetmap.core.google_maps_url_QMARK_(url_STAR_);
var listing_url = (cljs.core.truth_(site)?url_STAR_:null);
var name_search_topic_QMARK_ = cljs.core.contains_QMARK_(placesurfer.googlestreetmap.core.name_search_topics,(function (){var or__5025__auto__ = marker_topic;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return topic;
}
})());
var google_maps_url = (cljs.core.truth_(gmaps_source_QMARK_)?url_STAR_:(cljs.core.truth_((function (){var and__5023__auto__ = site;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = (function (){var and__5023__auto____$1 = lat;
if(cljs.core.truth_(and__5023__auto____$1)){
return lon;
} else {
return and__5023__auto____$1;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.googlestreetmap.core.complete_address_line_QMARK_(address_STAR_);
}
} else {
return and__5023__auto__;
}
})())?placesurfer.googlestreetmap.core.build_maps_location_url(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),address_STAR_,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon], null)):(cljs.core.truth_((function (){var and__5023__auto__ = name_search_topic_QMARK_;
if(and__5023__auto__){
return placesurfer.googlestreetmap.core.non_blank(name);
} else {
return and__5023__auto__;
}
})())?placesurfer.googlestreetmap.core.build_maps_search_url([cljs.core.str.cljs$core$IFn$_invoke$arity$1(placesurfer.googlestreetmap.core.non_blank(name)),(function (){var temp__5823__auto__ = placesurfer.googlestreetmap.core.non_blank(location__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var loc = temp__5823__auto__;
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc)].join('');
} else {
return null;
}
})()].join('')):null
)));
if(cljs.core.truth_((function (){var or__5025__auto__ = listing_url;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return google_maps_url;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"listing-site","listing-site",-1805219001),site,new cljs.core.Keyword(null,"listing-url","listing-url",-2106536881),listing_url,new cljs.core.Keyword(null,"google-maps-url","google-maps-url",1524070940),google_maps_url,new cljs.core.Keyword(null,"hemnet-url","hemnet-url",-1665312184),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hemnet","hemnet",-84689524),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(site)))?listing_url:null)], null);
} else {
return null;
}
});
placesurfer.googlestreetmap.core.place_external_link_class = "place-external-link";
placesurfer.googlestreetmap.core.place_external_icon_class = "place-external-link-icon";
placesurfer.googlestreetmap.core.google_maps_link_class = "place-external-link--google-maps";
placesurfer.googlestreetmap.core.link_class_attr = (function placesurfer$googlestreetmap$core$link_class_attr(extra_class){
return [placesurfer.googlestreetmap.core.place_external_link_class,(cljs.core.truth_(extra_class)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join(''):null)].join('');
});
/**
 * Icon-only external link HTML.
 */
placesurfer.googlestreetmap.core.build_external_icon_link_html = (function placesurfer$googlestreetmap$core$build_external_icon_link_html(p__21645){
var map__21646 = p__21645;
var map__21646__$1 = cljs.core.__destructure_map(map__21646);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21646__$1,new cljs.core.Keyword(null,"url","url",276297046));
var icon_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21646__$1,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733));
var icon_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21646__$1,new cljs.core.Keyword(null,"icon-class","icon-class",-216197803));
var link_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21646__$1,new cljs.core.Keyword(null,"link-class","link-class",609379382));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21646__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var temp__5823__auto__ = placesurfer.googlestreetmap.core.non_blank(url);
if(cljs.core.truth_(temp__5823__auto__)){
var href = temp__5823__auto__;
return ["<a class=\"",placesurfer.googlestreetmap.core.escape_html_text(placesurfer.googlestreetmap.core.link_class_attr(link_class)),"\" href=\"",placesurfer.googlestreetmap.core.escape_html_text(href),"\" target=\"_blank\" rel=\"noopener noreferrer\"",(cljs.core.truth_(aria_label)?[" aria-label=\"",placesurfer.googlestreetmap.core.escape_html_text(aria_label),"\" title=\"",placesurfer.googlestreetmap.core.escape_html_text(aria_label),"\""].join(''):null),"><img class=\"",placesurfer.googlestreetmap.core.escape_html_text((function (){var or__5025__auto__ = icon_class;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.googlestreetmap.core.place_external_icon_class;
}
})()),"\" src=\"",placesurfer.googlestreetmap.core.escape_html_text(icon_src),"\" alt=\"\" /></a>"].join('');
} else {
return null;
}
});
/**
 * Google Maps icon-only link HTML.
 */
placesurfer.googlestreetmap.core.build_maps_icon_link_html = (function placesurfer$googlestreetmap$core$build_maps_icon_link_html(p__21650){
var map__21651 = p__21650;
var map__21651__$1 = cljs.core.__destructure_map(map__21651);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651__$1,new cljs.core.Keyword(null,"url","url",276297046));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
return placesurfer.googlestreetmap.core.build_external_icon_link_html(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733),placesurfer.googlestreetmap.core.maps_icon_src,new cljs.core.Keyword(null,"icon-class","icon-class",-216197803),placesurfer.googlestreetmap.core.place_external_icon_class,new cljs.core.Keyword(null,"link-class","link-class",609379382),placesurfer.googlestreetmap.core.google_maps_link_class,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(function (){var or__5025__auto__ = aria_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Google Maps";
}
})()], null));
});
/**
 * Icon-only external link HTML fragment (listing site, then Google Maps).
 */
placesurfer.googlestreetmap.core.build_place_external_link_icons_html = (function placesurfer$googlestreetmap$core$build_place_external_link_icons_html(place){
var temp__5823__auto__ = placesurfer.googlestreetmap.core.place_external_links(place);
if(cljs.core.truth_(temp__5823__auto__)){
var map__21677 = temp__5823__auto__;
var map__21677__$1 = cljs.core.__destructure_map(map__21677);
var listing_site = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21677__$1,new cljs.core.Keyword(null,"listing-site","listing-site",-1805219001));
var listing_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21677__$1,new cljs.core.Keyword(null,"listing-url","listing-url",-2106536881));
var google_maps_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21677__$1,new cljs.core.Keyword(null,"google-maps-url","google-maps-url",1524070940));
var parts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__5023__auto__ = listing_site;
if(cljs.core.truth_(and__5023__auto__)){
return listing_url;
} else {
return and__5023__auto__;
}
})())?placesurfer.googlestreetmap.core.build_external_icon_link_html(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),listing_url,new cljs.core.Keyword(null,"icon-src","icon-src",1550418733),new cljs.core.Keyword(null,"icon-src","icon-src",1550418733).cljs$core$IFn$_invoke$arity$1(listing_site),new cljs.core.Keyword(null,"icon-class","icon-class",-216197803),placesurfer.googlestreetmap.core.place_external_icon_class,new cljs.core.Keyword(null,"link-class","link-class",609379382),new cljs.core.Keyword(null,"link-class","link-class",609379382).cljs$core$IFn$_invoke$arity$1(listing_site),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"aria","aria",1737868339).cljs$core$IFn$_invoke$arity$1(listing_site)], null)):null),(cljs.core.truth_(google_maps_url)?placesurfer.googlestreetmap.core.build_maps_icon_link_html(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),google_maps_url], null)):null)], null));
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
placesurfer.googlestreetmap.core.build_place_external_links_html = (function placesurfer$googlestreetmap$core$build_place_external_links_html(place){
var temp__5823__auto__ = placesurfer.googlestreetmap.core.build_place_external_link_icons_html(place);
if(cljs.core.truth_(temp__5823__auto__)){
var icons = temp__5823__auto__;
return ["<div class=\"place-external-links\" contenteditable=\"false\">",icons,"</div>"].join('');
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.googlestreetmap.core.js.map
