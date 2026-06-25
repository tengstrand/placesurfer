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
var len__5749__auto___39220 = arguments.length;
var i__5750__auto___39221 = (0);
while(true){
if((i__5750__auto___39221 < len__5749__auto___39220)){
args__5755__auto__.push((arguments[i__5750__auto___39221]));

var G__39222 = (i__5750__auto___39221 + (1));
i__5750__auto___39221 = G__39222;
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
(placesurfer.googlestreetmap.interface$.build_maps_search_url.cljs$lang$applyTo = (function (seq39194){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39194));
}));

placesurfer.googlestreetmap.interface$.build_maps_location_url = (function placesurfer$googlestreetmap$interface$build_maps_location_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39223 = arguments.length;
var i__5750__auto___39224 = (0);
while(true){
if((i__5750__auto___39224 < len__5749__auto___39223)){
args__5755__auto__.push((arguments[i__5750__auto___39224]));

var G__39225 = (i__5750__auto___39224 + (1));
i__5750__auto___39224 = G__39225;
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
(placesurfer.googlestreetmap.interface$.build_maps_location_url.cljs$lang$applyTo = (function (seq39195){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39195));
}));

placesurfer.googlestreetmap.interface$.build_maps_search_link_html = (function placesurfer$googlestreetmap$interface$build_maps_search_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39226 = arguments.length;
var i__5750__auto___39227 = (0);
while(true){
if((i__5750__auto___39227 < len__5749__auto___39226)){
args__5755__auto__.push((arguments[i__5750__auto___39227]));

var G__39228 = (i__5750__auto___39227 + (1));
i__5750__auto___39227 = G__39228;
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
(placesurfer.googlestreetmap.interface$.build_maps_search_link_html.cljs$lang$applyTo = (function (seq39196){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39196));
}));

placesurfer.googlestreetmap.interface$.build_street_view_url = (function placesurfer$googlestreetmap$interface$build_street_view_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39229 = arguments.length;
var i__5750__auto___39230 = (0);
while(true){
if((i__5750__auto___39230 < len__5749__auto___39229)){
args__5755__auto__.push((arguments[i__5750__auto___39230]));

var G__39231 = (i__5750__auto___39230 + (1));
i__5750__auto___39230 = G__39231;
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
(placesurfer.googlestreetmap.interface$.build_street_view_url.cljs$lang$applyTo = (function (seq39197){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39197));
}));

placesurfer.googlestreetmap.interface$.google_maps_url_QMARK_ = (function placesurfer$googlestreetmap$interface$google_maps_url_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39232 = arguments.length;
var i__5750__auto___39233 = (0);
while(true){
if((i__5750__auto___39233 < len__5749__auto___39232)){
args__5755__auto__.push((arguments[i__5750__auto___39233]));

var G__39234 = (i__5750__auto___39233 + (1));
i__5750__auto___39233 = G__39234;
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
(placesurfer.googlestreetmap.interface$.google_maps_url_QMARK_.cljs$lang$applyTo = (function (seq39198){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39198));
}));

placesurfer.googlestreetmap.interface$.hemnet_listing_url_QMARK_ = (function placesurfer$googlestreetmap$interface$hemnet_listing_url_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39235 = arguments.length;
var i__5750__auto___39236 = (0);
while(true){
if((i__5750__auto___39236 < len__5749__auto___39235)){
args__5755__auto__.push((arguments[i__5750__auto___39236]));

var G__39237 = (i__5750__auto___39236 + (1));
i__5750__auto___39236 = G__39237;
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
(placesurfer.googlestreetmap.interface$.hemnet_listing_url_QMARK_.cljs$lang$applyTo = (function (seq39200){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39200));
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
(placesurfer.googlestreetmap.interface$.complete_address_line_QMARK_.cljs$lang$applyTo = (function (seq39205){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39205));
}));

placesurfer.googlestreetmap.interface$.place_external_links = (function placesurfer$googlestreetmap$interface$place_external_links(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39241 = arguments.length;
var i__5750__auto___39242 = (0);
while(true){
if((i__5750__auto___39242 < len__5749__auto___39241)){
args__5755__auto__.push((arguments[i__5750__auto___39242]));

var G__39243 = (i__5750__auto___39242 + (1));
i__5750__auto___39242 = G__39243;
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
(placesurfer.googlestreetmap.interface$.place_external_links.cljs$lang$applyTo = (function (seq39207){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39207));
}));

placesurfer.googlestreetmap.interface$.build_external_icon_link_html = (function placesurfer$googlestreetmap$interface$build_external_icon_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39244 = arguments.length;
var i__5750__auto___39245 = (0);
while(true){
if((i__5750__auto___39245 < len__5749__auto___39244)){
args__5755__auto__.push((arguments[i__5750__auto___39245]));

var G__39246 = (i__5750__auto___39245 + (1));
i__5750__auto___39245 = G__39246;
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
(placesurfer.googlestreetmap.interface$.build_external_icon_link_html.cljs$lang$applyTo = (function (seq39208){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39208));
}));

placesurfer.googlestreetmap.interface$.build_maps_icon_link_html = (function placesurfer$googlestreetmap$interface$build_maps_icon_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39247 = arguments.length;
var i__5750__auto___39248 = (0);
while(true){
if((i__5750__auto___39248 < len__5749__auto___39247)){
args__5755__auto__.push((arguments[i__5750__auto___39248]));

var G__39249 = (i__5750__auto___39248 + (1));
i__5750__auto___39248 = G__39249;
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
(placesurfer.googlestreetmap.interface$.build_maps_icon_link_html.cljs$lang$applyTo = (function (seq39211){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39211));
}));

placesurfer.googlestreetmap.interface$.build_place_external_link_icons_html = (function placesurfer$googlestreetmap$interface$build_place_external_link_icons_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39250 = arguments.length;
var i__5750__auto___39251 = (0);
while(true){
if((i__5750__auto___39251 < len__5749__auto___39250)){
args__5755__auto__.push((arguments[i__5750__auto___39251]));

var G__39252 = (i__5750__auto___39251 + (1));
i__5750__auto___39251 = G__39252;
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
(placesurfer.googlestreetmap.interface$.build_place_external_link_icons_html.cljs$lang$applyTo = (function (seq39213){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39213));
}));

placesurfer.googlestreetmap.interface$.build_place_external_links_html = (function placesurfer$googlestreetmap$interface$build_place_external_links_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39253 = arguments.length;
var i__5750__auto___39254 = (0);
while(true){
if((i__5750__auto___39254 < len__5749__auto___39253)){
args__5755__auto__.push((arguments[i__5750__auto___39254]));

var G__39255 = (i__5750__auto___39254 + (1));
i__5750__auto___39254 = G__39255;
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
(placesurfer.googlestreetmap.interface$.build_place_external_links_html.cljs$lang$applyTo = (function (seq39214){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39214));
}));


//# sourceMappingURL=placesurfer.googlestreetmap.interface.js.map
