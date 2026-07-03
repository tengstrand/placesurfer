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
var len__5749__auto___102130 = arguments.length;
var i__5750__auto___102131 = (0);
while(true){
if((i__5750__auto___102131 < len__5749__auto___102130)){
args__5755__auto__.push((arguments[i__5750__auto___102131]));

var G__102132 = (i__5750__auto___102131 + (1));
i__5750__auto___102131 = G__102132;
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
(placesurfer.googlestreetmap.interface$.build_maps_search_url.cljs$lang$applyTo = (function (seq102118){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq102118));
}));

placesurfer.googlestreetmap.interface$.build_maps_location_url = (function placesurfer$googlestreetmap$interface$build_maps_location_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___102133 = arguments.length;
var i__5750__auto___102134 = (0);
while(true){
if((i__5750__auto___102134 < len__5749__auto___102133)){
args__5755__auto__.push((arguments[i__5750__auto___102134]));

var G__102135 = (i__5750__auto___102134 + (1));
i__5750__auto___102134 = G__102135;
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
(placesurfer.googlestreetmap.interface$.build_maps_location_url.cljs$lang$applyTo = (function (seq102119){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq102119));
}));

placesurfer.googlestreetmap.interface$.build_maps_search_link_html = (function placesurfer$googlestreetmap$interface$build_maps_search_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___102136 = arguments.length;
var i__5750__auto___102137 = (0);
while(true){
if((i__5750__auto___102137 < len__5749__auto___102136)){
args__5755__auto__.push((arguments[i__5750__auto___102137]));

var G__102138 = (i__5750__auto___102137 + (1));
i__5750__auto___102137 = G__102138;
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
(placesurfer.googlestreetmap.interface$.build_maps_search_link_html.cljs$lang$applyTo = (function (seq102120){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq102120));
}));

placesurfer.googlestreetmap.interface$.build_street_view_url = (function placesurfer$googlestreetmap$interface$build_street_view_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___102139 = arguments.length;
var i__5750__auto___102140 = (0);
while(true){
if((i__5750__auto___102140 < len__5749__auto___102139)){
args__5755__auto__.push((arguments[i__5750__auto___102140]));

var G__102141 = (i__5750__auto___102140 + (1));
i__5750__auto___102140 = G__102141;
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
(placesurfer.googlestreetmap.interface$.build_street_view_url.cljs$lang$applyTo = (function (seq102121){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq102121));
}));

placesurfer.googlestreetmap.interface$.google_maps_url_QMARK_ = (function placesurfer$googlestreetmap$interface$google_maps_url_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___102142 = arguments.length;
var i__5750__auto___102143 = (0);
while(true){
if((i__5750__auto___102143 < len__5749__auto___102142)){
args__5755__auto__.push((arguments[i__5750__auto___102143]));

var G__102144 = (i__5750__auto___102143 + (1));
i__5750__auto___102143 = G__102144;
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
(placesurfer.googlestreetmap.interface$.google_maps_url_QMARK_.cljs$lang$applyTo = (function (seq102122){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq102122));
}));

placesurfer.googlestreetmap.interface$.hemnet_listing_url_QMARK_ = (function placesurfer$googlestreetmap$interface$hemnet_listing_url_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___102145 = arguments.length;
var i__5750__auto___102146 = (0);
while(true){
if((i__5750__auto___102146 < len__5749__auto___102145)){
args__5755__auto__.push((arguments[i__5750__auto___102146]));

var G__102147 = (i__5750__auto___102146 + (1));
i__5750__auto___102146 = G__102147;
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
(placesurfer.googlestreetmap.interface$.hemnet_listing_url_QMARK_.cljs$lang$applyTo = (function (seq102123){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq102123));
}));

placesurfer.googlestreetmap.interface$.complete_address_line_QMARK_ = (function placesurfer$googlestreetmap$interface$complete_address_line_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___102148 = arguments.length;
var i__5750__auto___102149 = (0);
while(true){
if((i__5750__auto___102149 < len__5749__auto___102148)){
args__5755__auto__.push((arguments[i__5750__auto___102149]));

var G__102150 = (i__5750__auto___102149 + (1));
i__5750__auto___102149 = G__102150;
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
(placesurfer.googlestreetmap.interface$.complete_address_line_QMARK_.cljs$lang$applyTo = (function (seq102124){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq102124));
}));

placesurfer.googlestreetmap.interface$.place_external_links = (function placesurfer$googlestreetmap$interface$place_external_links(var_args){
var args__5755__auto__ = [];
var len__5749__auto___102151 = arguments.length;
var i__5750__auto___102152 = (0);
while(true){
if((i__5750__auto___102152 < len__5749__auto___102151)){
args__5755__auto__.push((arguments[i__5750__auto___102152]));

var G__102153 = (i__5750__auto___102152 + (1));
i__5750__auto___102152 = G__102153;
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
(placesurfer.googlestreetmap.interface$.place_external_links.cljs$lang$applyTo = (function (seq102125){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq102125));
}));

placesurfer.googlestreetmap.interface$.build_external_icon_link_html = (function placesurfer$googlestreetmap$interface$build_external_icon_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___102154 = arguments.length;
var i__5750__auto___102155 = (0);
while(true){
if((i__5750__auto___102155 < len__5749__auto___102154)){
args__5755__auto__.push((arguments[i__5750__auto___102155]));

var G__102156 = (i__5750__auto___102155 + (1));
i__5750__auto___102155 = G__102156;
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
(placesurfer.googlestreetmap.interface$.build_external_icon_link_html.cljs$lang$applyTo = (function (seq102126){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq102126));
}));

placesurfer.googlestreetmap.interface$.build_maps_icon_link_html = (function placesurfer$googlestreetmap$interface$build_maps_icon_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___102157 = arguments.length;
var i__5750__auto___102158 = (0);
while(true){
if((i__5750__auto___102158 < len__5749__auto___102157)){
args__5755__auto__.push((arguments[i__5750__auto___102158]));

var G__102159 = (i__5750__auto___102158 + (1));
i__5750__auto___102158 = G__102159;
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
(placesurfer.googlestreetmap.interface$.build_maps_icon_link_html.cljs$lang$applyTo = (function (seq102127){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq102127));
}));

placesurfer.googlestreetmap.interface$.build_place_external_link_icons_html = (function placesurfer$googlestreetmap$interface$build_place_external_link_icons_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___102160 = arguments.length;
var i__5750__auto___102161 = (0);
while(true){
if((i__5750__auto___102161 < len__5749__auto___102160)){
args__5755__auto__.push((arguments[i__5750__auto___102161]));

var G__102162 = (i__5750__auto___102161 + (1));
i__5750__auto___102161 = G__102162;
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
(placesurfer.googlestreetmap.interface$.build_place_external_link_icons_html.cljs$lang$applyTo = (function (seq102128){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq102128));
}));

placesurfer.googlestreetmap.interface$.build_place_external_links_html = (function placesurfer$googlestreetmap$interface$build_place_external_links_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___102163 = arguments.length;
var i__5750__auto___102164 = (0);
while(true){
if((i__5750__auto___102164 < len__5749__auto___102163)){
args__5755__auto__.push((arguments[i__5750__auto___102164]));

var G__102165 = (i__5750__auto___102164 + (1));
i__5750__auto___102164 = G__102165;
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
(placesurfer.googlestreetmap.interface$.build_place_external_links_html.cljs$lang$applyTo = (function (seq102129){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq102129));
}));


//# sourceMappingURL=placesurfer.googlestreetmap.interface.js.map
