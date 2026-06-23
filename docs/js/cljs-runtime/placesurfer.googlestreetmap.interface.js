goog.provide('placesurfer.googlestreetmap.interface$');
placesurfer.googlestreetmap.interface$.parse_url = (function placesurfer$googlestreetmap$interface$parse_url(url,countries){
return placesurfer.googlestreetmap.core.parse_url(url,countries);
});
placesurfer.googlestreetmap.interface$.parse_coordinates = (function placesurfer$googlestreetmap$interface$parse_coordinates(url){
return placesurfer.googlestreetmap.core.parse_coordinates(url);
});
placesurfer.googlestreetmap.interface$.parse_name = (function placesurfer$googlestreetmap$interface$parse_name(url){
return placesurfer.googlestreetmap.core.parse_name(url);
});
placesurfer.googlestreetmap.interface$.build_maps_search_url = (function placesurfer$googlestreetmap$interface$build_maps_search_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39218 = arguments.length;
var i__5750__auto___39219 = (0);
while(true){
if((i__5750__auto___39219 < len__5749__auto___39218)){
args__5755__auto__.push((arguments[i__5750__auto___39219]));

var G__39220 = (i__5750__auto___39219 + (1));
i__5750__auto___39219 = G__39220;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.googlestreetmap.interface$.build_maps_search_url.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.googlestreetmap.interface$.build_maps_search_url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.googlestreetmap.core.build_maps_search_url,args);
}));

(placesurfer.googlestreetmap.interface$.build_maps_search_url.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.googlestreetmap.interface$.build_maps_search_url.cljs$lang$applyTo = (function (seq39192){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39192));
}));

placesurfer.googlestreetmap.interface$.build_maps_location_url = (function placesurfer$googlestreetmap$interface$build_maps_location_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39221 = arguments.length;
var i__5750__auto___39222 = (0);
while(true){
if((i__5750__auto___39222 < len__5749__auto___39221)){
args__5755__auto__.push((arguments[i__5750__auto___39222]));

var G__39223 = (i__5750__auto___39222 + (1));
i__5750__auto___39222 = G__39223;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.googlestreetmap.interface$.build_maps_location_url.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.googlestreetmap.interface$.build_maps_location_url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.googlestreetmap.core.build_maps_location_url,args);
}));

(placesurfer.googlestreetmap.interface$.build_maps_location_url.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.googlestreetmap.interface$.build_maps_location_url.cljs$lang$applyTo = (function (seq39193){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39193));
}));

placesurfer.googlestreetmap.interface$.build_maps_search_link_html = (function placesurfer$googlestreetmap$interface$build_maps_search_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39224 = arguments.length;
var i__5750__auto___39225 = (0);
while(true){
if((i__5750__auto___39225 < len__5749__auto___39224)){
args__5755__auto__.push((arguments[i__5750__auto___39225]));

var G__39226 = (i__5750__auto___39225 + (1));
i__5750__auto___39225 = G__39226;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.googlestreetmap.interface$.build_maps_search_link_html.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.googlestreetmap.interface$.build_maps_search_link_html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.googlestreetmap.core.build_maps_search_link_html,args);
}));

(placesurfer.googlestreetmap.interface$.build_maps_search_link_html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.googlestreetmap.interface$.build_maps_search_link_html.cljs$lang$applyTo = (function (seq39194){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39194));
}));

placesurfer.googlestreetmap.interface$.build_street_view_url = (function placesurfer$googlestreetmap$interface$build_street_view_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39227 = arguments.length;
var i__5750__auto___39228 = (0);
while(true){
if((i__5750__auto___39228 < len__5749__auto___39227)){
args__5755__auto__.push((arguments[i__5750__auto___39228]));

var G__39229 = (i__5750__auto___39228 + (1));
i__5750__auto___39228 = G__39229;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.googlestreetmap.interface$.build_street_view_url.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.googlestreetmap.interface$.build_street_view_url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.googlestreetmap.core.build_street_view_url,args);
}));

(placesurfer.googlestreetmap.interface$.build_street_view_url.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.googlestreetmap.interface$.build_street_view_url.cljs$lang$applyTo = (function (seq39195){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39195));
}));

placesurfer.googlestreetmap.interface$.google_maps_url_QMARK_ = (function placesurfer$googlestreetmap$interface$google_maps_url_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39230 = arguments.length;
var i__5750__auto___39231 = (0);
while(true){
if((i__5750__auto___39231 < len__5749__auto___39230)){
args__5755__auto__.push((arguments[i__5750__auto___39231]));

var G__39232 = (i__5750__auto___39231 + (1));
i__5750__auto___39231 = G__39232;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.googlestreetmap.interface$.google_maps_url_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.googlestreetmap.interface$.google_maps_url_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.googlestreetmap.core.google_maps_url_QMARK_,args);
}));

(placesurfer.googlestreetmap.interface$.google_maps_url_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.googlestreetmap.interface$.google_maps_url_QMARK_.cljs$lang$applyTo = (function (seq39196){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39196));
}));

placesurfer.googlestreetmap.interface$.hemnet_listing_url_QMARK_ = (function placesurfer$googlestreetmap$interface$hemnet_listing_url_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39233 = arguments.length;
var i__5750__auto___39234 = (0);
while(true){
if((i__5750__auto___39234 < len__5749__auto___39233)){
args__5755__auto__.push((arguments[i__5750__auto___39234]));

var G__39235 = (i__5750__auto___39234 + (1));
i__5750__auto___39234 = G__39235;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.googlestreetmap.interface$.hemnet_listing_url_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.googlestreetmap.interface$.hemnet_listing_url_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.googlestreetmap.core.hemnet_listing_url_QMARK_,args);
}));

(placesurfer.googlestreetmap.interface$.hemnet_listing_url_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.googlestreetmap.interface$.hemnet_listing_url_QMARK_.cljs$lang$applyTo = (function (seq39198){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39198));
}));

placesurfer.googlestreetmap.interface$.complete_address_line_QMARK_ = (function placesurfer$googlestreetmap$interface$complete_address_line_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39238 = arguments.length;
var i__5750__auto___39239 = (0);
while(true){
if((i__5750__auto___39239 < len__5749__auto___39238)){
args__5755__auto__.push((arguments[i__5750__auto___39239]));

var G__39240 = (i__5750__auto___39239 + (1));
i__5750__auto___39239 = G__39240;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.googlestreetmap.interface$.complete_address_line_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.googlestreetmap.interface$.complete_address_line_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.googlestreetmap.core.complete_address_line_QMARK_,args);
}));

(placesurfer.googlestreetmap.interface$.complete_address_line_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.googlestreetmap.interface$.complete_address_line_QMARK_.cljs$lang$applyTo = (function (seq39203){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39203));
}));

placesurfer.googlestreetmap.interface$.place_external_links = (function placesurfer$googlestreetmap$interface$place_external_links(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39242 = arguments.length;
var i__5750__auto___39243 = (0);
while(true){
if((i__5750__auto___39243 < len__5749__auto___39242)){
args__5755__auto__.push((arguments[i__5750__auto___39243]));

var G__39244 = (i__5750__auto___39243 + (1));
i__5750__auto___39243 = G__39244;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.googlestreetmap.interface$.place_external_links.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.googlestreetmap.interface$.place_external_links.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.googlestreetmap.core.place_external_links,args);
}));

(placesurfer.googlestreetmap.interface$.place_external_links.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.googlestreetmap.interface$.place_external_links.cljs$lang$applyTo = (function (seq39205){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39205));
}));

placesurfer.googlestreetmap.interface$.build_external_icon_link_html = (function placesurfer$googlestreetmap$interface$build_external_icon_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39245 = arguments.length;
var i__5750__auto___39246 = (0);
while(true){
if((i__5750__auto___39246 < len__5749__auto___39245)){
args__5755__auto__.push((arguments[i__5750__auto___39246]));

var G__39247 = (i__5750__auto___39246 + (1));
i__5750__auto___39246 = G__39247;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.googlestreetmap.interface$.build_external_icon_link_html.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.googlestreetmap.interface$.build_external_icon_link_html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.googlestreetmap.core.build_external_icon_link_html,args);
}));

(placesurfer.googlestreetmap.interface$.build_external_icon_link_html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.googlestreetmap.interface$.build_external_icon_link_html.cljs$lang$applyTo = (function (seq39206){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39206));
}));

placesurfer.googlestreetmap.interface$.build_maps_icon_link_html = (function placesurfer$googlestreetmap$interface$build_maps_icon_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39248 = arguments.length;
var i__5750__auto___39249 = (0);
while(true){
if((i__5750__auto___39249 < len__5749__auto___39248)){
args__5755__auto__.push((arguments[i__5750__auto___39249]));

var G__39250 = (i__5750__auto___39249 + (1));
i__5750__auto___39249 = G__39250;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.googlestreetmap.interface$.build_maps_icon_link_html.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.googlestreetmap.interface$.build_maps_icon_link_html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.googlestreetmap.core.build_maps_icon_link_html,args);
}));

(placesurfer.googlestreetmap.interface$.build_maps_icon_link_html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.googlestreetmap.interface$.build_maps_icon_link_html.cljs$lang$applyTo = (function (seq39209){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39209));
}));

placesurfer.googlestreetmap.interface$.build_place_external_link_icons_html = (function placesurfer$googlestreetmap$interface$build_place_external_link_icons_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39251 = arguments.length;
var i__5750__auto___39252 = (0);
while(true){
if((i__5750__auto___39252 < len__5749__auto___39251)){
args__5755__auto__.push((arguments[i__5750__auto___39252]));

var G__39253 = (i__5750__auto___39252 + (1));
i__5750__auto___39252 = G__39253;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.googlestreetmap.interface$.build_place_external_link_icons_html.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.googlestreetmap.interface$.build_place_external_link_icons_html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.googlestreetmap.core.build_place_external_link_icons_html,args);
}));

(placesurfer.googlestreetmap.interface$.build_place_external_link_icons_html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.googlestreetmap.interface$.build_place_external_link_icons_html.cljs$lang$applyTo = (function (seq39210){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39210));
}));

placesurfer.googlestreetmap.interface$.build_place_external_links_html = (function placesurfer$googlestreetmap$interface$build_place_external_links_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39254 = arguments.length;
var i__5750__auto___39255 = (0);
while(true){
if((i__5750__auto___39255 < len__5749__auto___39254)){
args__5755__auto__.push((arguments[i__5750__auto___39255]));

var G__39256 = (i__5750__auto___39255 + (1));
i__5750__auto___39255 = G__39256;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.googlestreetmap.interface$.build_place_external_links_html.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.googlestreetmap.interface$.build_place_external_links_html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.googlestreetmap.core.build_place_external_links_html,args);
}));

(placesurfer.googlestreetmap.interface$.build_place_external_links_html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.googlestreetmap.interface$.build_place_external_links_html.cljs$lang$applyTo = (function (seq39212){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39212));
}));


//# sourceMappingURL=placesurfer.googlestreetmap.interface.js.map
