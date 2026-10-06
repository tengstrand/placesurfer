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
var len__5749__auto___21778 = arguments.length;
var i__5750__auto___21779 = (0);
while(true){
if((i__5750__auto___21779 < len__5749__auto___21778)){
args__5755__auto__.push((arguments[i__5750__auto___21779]));

var G__21780 = (i__5750__auto___21779 + (1));
i__5750__auto___21779 = G__21780;
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
(placesurfer.googlestreetmap.interface$.build_maps_search_url.cljs$lang$applyTo = (function (seq21744){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21744));
}));

placesurfer.googlestreetmap.interface$.build_maps_location_url = (function placesurfer$googlestreetmap$interface$build_maps_location_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21781 = arguments.length;
var i__5750__auto___21782 = (0);
while(true){
if((i__5750__auto___21782 < len__5749__auto___21781)){
args__5755__auto__.push((arguments[i__5750__auto___21782]));

var G__21783 = (i__5750__auto___21782 + (1));
i__5750__auto___21782 = G__21783;
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
(placesurfer.googlestreetmap.interface$.build_maps_location_url.cljs$lang$applyTo = (function (seq21764){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21764));
}));

placesurfer.googlestreetmap.interface$.build_maps_search_link_html = (function placesurfer$googlestreetmap$interface$build_maps_search_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21784 = arguments.length;
var i__5750__auto___21785 = (0);
while(true){
if((i__5750__auto___21785 < len__5749__auto___21784)){
args__5755__auto__.push((arguments[i__5750__auto___21785]));

var G__21786 = (i__5750__auto___21785 + (1));
i__5750__auto___21785 = G__21786;
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
(placesurfer.googlestreetmap.interface$.build_maps_search_link_html.cljs$lang$applyTo = (function (seq21765){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21765));
}));

placesurfer.googlestreetmap.interface$.build_street_view_url = (function placesurfer$googlestreetmap$interface$build_street_view_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21787 = arguments.length;
var i__5750__auto___21788 = (0);
while(true){
if((i__5750__auto___21788 < len__5749__auto___21787)){
args__5755__auto__.push((arguments[i__5750__auto___21788]));

var G__21789 = (i__5750__auto___21788 + (1));
i__5750__auto___21788 = G__21789;
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
(placesurfer.googlestreetmap.interface$.build_street_view_url.cljs$lang$applyTo = (function (seq21767){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21767));
}));

placesurfer.googlestreetmap.interface$.google_maps_url_QMARK_ = (function placesurfer$googlestreetmap$interface$google_maps_url_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21790 = arguments.length;
var i__5750__auto___21791 = (0);
while(true){
if((i__5750__auto___21791 < len__5749__auto___21790)){
args__5755__auto__.push((arguments[i__5750__auto___21791]));

var G__21792 = (i__5750__auto___21791 + (1));
i__5750__auto___21791 = G__21792;
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
(placesurfer.googlestreetmap.interface$.google_maps_url_QMARK_.cljs$lang$applyTo = (function (seq21768){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21768));
}));

placesurfer.googlestreetmap.interface$.hemnet_listing_url_QMARK_ = (function placesurfer$googlestreetmap$interface$hemnet_listing_url_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21793 = arguments.length;
var i__5750__auto___21794 = (0);
while(true){
if((i__5750__auto___21794 < len__5749__auto___21793)){
args__5755__auto__.push((arguments[i__5750__auto___21794]));

var G__21795 = (i__5750__auto___21794 + (1));
i__5750__auto___21794 = G__21795;
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
(placesurfer.googlestreetmap.interface$.hemnet_listing_url_QMARK_.cljs$lang$applyTo = (function (seq21769){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21769));
}));

placesurfer.googlestreetmap.interface$.complete_address_line_QMARK_ = (function placesurfer$googlestreetmap$interface$complete_address_line_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21796 = arguments.length;
var i__5750__auto___21797 = (0);
while(true){
if((i__5750__auto___21797 < len__5749__auto___21796)){
args__5755__auto__.push((arguments[i__5750__auto___21797]));

var G__21798 = (i__5750__auto___21797 + (1));
i__5750__auto___21797 = G__21798;
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
(placesurfer.googlestreetmap.interface$.complete_address_line_QMARK_.cljs$lang$applyTo = (function (seq21770){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21770));
}));

placesurfer.googlestreetmap.interface$.place_external_links = (function placesurfer$googlestreetmap$interface$place_external_links(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21799 = arguments.length;
var i__5750__auto___21800 = (0);
while(true){
if((i__5750__auto___21800 < len__5749__auto___21799)){
args__5755__auto__.push((arguments[i__5750__auto___21800]));

var G__21801 = (i__5750__auto___21800 + (1));
i__5750__auto___21800 = G__21801;
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
(placesurfer.googlestreetmap.interface$.place_external_links.cljs$lang$applyTo = (function (seq21771){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21771));
}));

placesurfer.googlestreetmap.interface$.build_external_icon_link_html = (function placesurfer$googlestreetmap$interface$build_external_icon_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21804 = arguments.length;
var i__5750__auto___21805 = (0);
while(true){
if((i__5750__auto___21805 < len__5749__auto___21804)){
args__5755__auto__.push((arguments[i__5750__auto___21805]));

var G__21806 = (i__5750__auto___21805 + (1));
i__5750__auto___21805 = G__21806;
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
(placesurfer.googlestreetmap.interface$.build_external_icon_link_html.cljs$lang$applyTo = (function (seq21772){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21772));
}));

placesurfer.googlestreetmap.interface$.build_maps_icon_link_html = (function placesurfer$googlestreetmap$interface$build_maps_icon_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21808 = arguments.length;
var i__5750__auto___21809 = (0);
while(true){
if((i__5750__auto___21809 < len__5749__auto___21808)){
args__5755__auto__.push((arguments[i__5750__auto___21809]));

var G__21810 = (i__5750__auto___21809 + (1));
i__5750__auto___21809 = G__21810;
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
(placesurfer.googlestreetmap.interface$.build_maps_icon_link_html.cljs$lang$applyTo = (function (seq21773){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21773));
}));

placesurfer.googlestreetmap.interface$.build_place_external_link_icons_html = (function placesurfer$googlestreetmap$interface$build_place_external_link_icons_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21811 = arguments.length;
var i__5750__auto___21812 = (0);
while(true){
if((i__5750__auto___21812 < len__5749__auto___21811)){
args__5755__auto__.push((arguments[i__5750__auto___21812]));

var G__21813 = (i__5750__auto___21812 + (1));
i__5750__auto___21812 = G__21813;
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
(placesurfer.googlestreetmap.interface$.build_place_external_link_icons_html.cljs$lang$applyTo = (function (seq21775){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21775));
}));

placesurfer.googlestreetmap.interface$.build_place_external_links_html = (function placesurfer$googlestreetmap$interface$build_place_external_links_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21814 = arguments.length;
var i__5750__auto___21815 = (0);
while(true){
if((i__5750__auto___21815 < len__5749__auto___21814)){
args__5755__auto__.push((arguments[i__5750__auto___21815]));

var G__21818 = (i__5750__auto___21815 + (1));
i__5750__auto___21815 = G__21818;
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
(placesurfer.googlestreetmap.interface$.build_place_external_links_html.cljs$lang$applyTo = (function (seq21776){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21776));
}));


//# sourceMappingURL=placesurfer.googlestreetmap.interface.js.map
