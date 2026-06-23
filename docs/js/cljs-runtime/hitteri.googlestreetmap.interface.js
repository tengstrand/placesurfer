goog.provide('hitteri.googlestreetmap.interface$');
hitteri.googlestreetmap.interface$.parse_url = (function hitteri$googlestreetmap$interface$parse_url(url,countries){
return hitteri.googlestreetmap.core.parse_url(url,countries);
});
hitteri.googlestreetmap.interface$.parse_coordinates = (function hitteri$googlestreetmap$interface$parse_coordinates(url){
return hitteri.googlestreetmap.core.parse_coordinates(url);
});
hitteri.googlestreetmap.interface$.parse_name = (function hitteri$googlestreetmap$interface$parse_name(url){
return hitteri.googlestreetmap.core.parse_name(url);
});
hitteri.googlestreetmap.interface$.build_maps_search_url = (function hitteri$googlestreetmap$interface$build_maps_search_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47152 = arguments.length;
var i__5750__auto___47153 = (0);
while(true){
if((i__5750__auto___47153 < len__5749__auto___47152)){
args__5755__auto__.push((arguments[i__5750__auto___47153]));

var G__47154 = (i__5750__auto___47153 + (1));
i__5750__auto___47153 = G__47154;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.googlestreetmap.interface$.build_maps_search_url.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.googlestreetmap.interface$.build_maps_search_url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.googlestreetmap.core.build_maps_search_url,args);
}));

(hitteri.googlestreetmap.interface$.build_maps_search_url.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.googlestreetmap.interface$.build_maps_search_url.cljs$lang$applyTo = (function (seq47140){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47140));
}));

hitteri.googlestreetmap.interface$.build_maps_location_url = (function hitteri$googlestreetmap$interface$build_maps_location_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47155 = arguments.length;
var i__5750__auto___47156 = (0);
while(true){
if((i__5750__auto___47156 < len__5749__auto___47155)){
args__5755__auto__.push((arguments[i__5750__auto___47156]));

var G__47157 = (i__5750__auto___47156 + (1));
i__5750__auto___47156 = G__47157;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.googlestreetmap.interface$.build_maps_location_url.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.googlestreetmap.interface$.build_maps_location_url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.googlestreetmap.core.build_maps_location_url,args);
}));

(hitteri.googlestreetmap.interface$.build_maps_location_url.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.googlestreetmap.interface$.build_maps_location_url.cljs$lang$applyTo = (function (seq47141){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47141));
}));

hitteri.googlestreetmap.interface$.build_maps_search_link_html = (function hitteri$googlestreetmap$interface$build_maps_search_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47158 = arguments.length;
var i__5750__auto___47159 = (0);
while(true){
if((i__5750__auto___47159 < len__5749__auto___47158)){
args__5755__auto__.push((arguments[i__5750__auto___47159]));

var G__47160 = (i__5750__auto___47159 + (1));
i__5750__auto___47159 = G__47160;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.googlestreetmap.interface$.build_maps_search_link_html.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.googlestreetmap.interface$.build_maps_search_link_html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.googlestreetmap.core.build_maps_search_link_html,args);
}));

(hitteri.googlestreetmap.interface$.build_maps_search_link_html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.googlestreetmap.interface$.build_maps_search_link_html.cljs$lang$applyTo = (function (seq47142){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47142));
}));

hitteri.googlestreetmap.interface$.build_street_view_url = (function hitteri$googlestreetmap$interface$build_street_view_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47161 = arguments.length;
var i__5750__auto___47162 = (0);
while(true){
if((i__5750__auto___47162 < len__5749__auto___47161)){
args__5755__auto__.push((arguments[i__5750__auto___47162]));

var G__47163 = (i__5750__auto___47162 + (1));
i__5750__auto___47162 = G__47163;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.googlestreetmap.interface$.build_street_view_url.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.googlestreetmap.interface$.build_street_view_url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.googlestreetmap.core.build_street_view_url,args);
}));

(hitteri.googlestreetmap.interface$.build_street_view_url.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.googlestreetmap.interface$.build_street_view_url.cljs$lang$applyTo = (function (seq47143){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47143));
}));

hitteri.googlestreetmap.interface$.google_maps_url_QMARK_ = (function hitteri$googlestreetmap$interface$google_maps_url_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47164 = arguments.length;
var i__5750__auto___47165 = (0);
while(true){
if((i__5750__auto___47165 < len__5749__auto___47164)){
args__5755__auto__.push((arguments[i__5750__auto___47165]));

var G__47166 = (i__5750__auto___47165 + (1));
i__5750__auto___47165 = G__47166;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.googlestreetmap.interface$.google_maps_url_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.googlestreetmap.interface$.google_maps_url_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.googlestreetmap.core.google_maps_url_QMARK_,args);
}));

(hitteri.googlestreetmap.interface$.google_maps_url_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.googlestreetmap.interface$.google_maps_url_QMARK_.cljs$lang$applyTo = (function (seq47144){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47144));
}));

hitteri.googlestreetmap.interface$.hemnet_listing_url_QMARK_ = (function hitteri$googlestreetmap$interface$hemnet_listing_url_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47167 = arguments.length;
var i__5750__auto___47168 = (0);
while(true){
if((i__5750__auto___47168 < len__5749__auto___47167)){
args__5755__auto__.push((arguments[i__5750__auto___47168]));

var G__47169 = (i__5750__auto___47168 + (1));
i__5750__auto___47168 = G__47169;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.googlestreetmap.interface$.hemnet_listing_url_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.googlestreetmap.interface$.hemnet_listing_url_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.googlestreetmap.core.hemnet_listing_url_QMARK_,args);
}));

(hitteri.googlestreetmap.interface$.hemnet_listing_url_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.googlestreetmap.interface$.hemnet_listing_url_QMARK_.cljs$lang$applyTo = (function (seq47145){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47145));
}));

hitteri.googlestreetmap.interface$.complete_address_line_QMARK_ = (function hitteri$googlestreetmap$interface$complete_address_line_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47170 = arguments.length;
var i__5750__auto___47171 = (0);
while(true){
if((i__5750__auto___47171 < len__5749__auto___47170)){
args__5755__auto__.push((arguments[i__5750__auto___47171]));

var G__47172 = (i__5750__auto___47171 + (1));
i__5750__auto___47171 = G__47172;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.googlestreetmap.interface$.complete_address_line_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.googlestreetmap.interface$.complete_address_line_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.googlestreetmap.core.complete_address_line_QMARK_,args);
}));

(hitteri.googlestreetmap.interface$.complete_address_line_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.googlestreetmap.interface$.complete_address_line_QMARK_.cljs$lang$applyTo = (function (seq47146){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47146));
}));

hitteri.googlestreetmap.interface$.place_external_links = (function hitteri$googlestreetmap$interface$place_external_links(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47173 = arguments.length;
var i__5750__auto___47174 = (0);
while(true){
if((i__5750__auto___47174 < len__5749__auto___47173)){
args__5755__auto__.push((arguments[i__5750__auto___47174]));

var G__47175 = (i__5750__auto___47174 + (1));
i__5750__auto___47174 = G__47175;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.googlestreetmap.interface$.place_external_links.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.googlestreetmap.interface$.place_external_links.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.googlestreetmap.core.place_external_links,args);
}));

(hitteri.googlestreetmap.interface$.place_external_links.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.googlestreetmap.interface$.place_external_links.cljs$lang$applyTo = (function (seq47147){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47147));
}));

hitteri.googlestreetmap.interface$.build_external_icon_link_html = (function hitteri$googlestreetmap$interface$build_external_icon_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47176 = arguments.length;
var i__5750__auto___47177 = (0);
while(true){
if((i__5750__auto___47177 < len__5749__auto___47176)){
args__5755__auto__.push((arguments[i__5750__auto___47177]));

var G__47178 = (i__5750__auto___47177 + (1));
i__5750__auto___47177 = G__47178;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.googlestreetmap.interface$.build_external_icon_link_html.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.googlestreetmap.interface$.build_external_icon_link_html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.googlestreetmap.core.build_external_icon_link_html,args);
}));

(hitteri.googlestreetmap.interface$.build_external_icon_link_html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.googlestreetmap.interface$.build_external_icon_link_html.cljs$lang$applyTo = (function (seq47148){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47148));
}));

hitteri.googlestreetmap.interface$.build_maps_icon_link_html = (function hitteri$googlestreetmap$interface$build_maps_icon_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47179 = arguments.length;
var i__5750__auto___47180 = (0);
while(true){
if((i__5750__auto___47180 < len__5749__auto___47179)){
args__5755__auto__.push((arguments[i__5750__auto___47180]));

var G__47181 = (i__5750__auto___47180 + (1));
i__5750__auto___47180 = G__47181;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.googlestreetmap.interface$.build_maps_icon_link_html.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.googlestreetmap.interface$.build_maps_icon_link_html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.googlestreetmap.core.build_maps_icon_link_html,args);
}));

(hitteri.googlestreetmap.interface$.build_maps_icon_link_html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.googlestreetmap.interface$.build_maps_icon_link_html.cljs$lang$applyTo = (function (seq47149){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47149));
}));

hitteri.googlestreetmap.interface$.build_place_external_link_icons_html = (function hitteri$googlestreetmap$interface$build_place_external_link_icons_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47182 = arguments.length;
var i__5750__auto___47183 = (0);
while(true){
if((i__5750__auto___47183 < len__5749__auto___47182)){
args__5755__auto__.push((arguments[i__5750__auto___47183]));

var G__47184 = (i__5750__auto___47183 + (1));
i__5750__auto___47183 = G__47184;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.googlestreetmap.interface$.build_place_external_link_icons_html.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.googlestreetmap.interface$.build_place_external_link_icons_html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.googlestreetmap.core.build_place_external_link_icons_html,args);
}));

(hitteri.googlestreetmap.interface$.build_place_external_link_icons_html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.googlestreetmap.interface$.build_place_external_link_icons_html.cljs$lang$applyTo = (function (seq47150){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47150));
}));

hitteri.googlestreetmap.interface$.build_place_external_links_html = (function hitteri$googlestreetmap$interface$build_place_external_links_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47185 = arguments.length;
var i__5750__auto___47186 = (0);
while(true){
if((i__5750__auto___47186 < len__5749__auto___47185)){
args__5755__auto__.push((arguments[i__5750__auto___47186]));

var G__47187 = (i__5750__auto___47186 + (1));
i__5750__auto___47186 = G__47187;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.googlestreetmap.interface$.build_place_external_links_html.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.googlestreetmap.interface$.build_place_external_links_html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.googlestreetmap.core.build_place_external_links_html,args);
}));

(hitteri.googlestreetmap.interface$.build_place_external_links_html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.googlestreetmap.interface$.build_place_external_links_html.cljs$lang$applyTo = (function (seq47151){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47151));
}));


//# sourceMappingURL=hitteri.googlestreetmap.interface.js.map
