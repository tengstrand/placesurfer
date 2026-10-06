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
var len__5749__auto___21758 = arguments.length;
var i__5750__auto___21759 = (0);
while(true){
if((i__5750__auto___21759 < len__5749__auto___21758)){
args__5755__auto__.push((arguments[i__5750__auto___21759]));

var G__21761 = (i__5750__auto___21759 + (1));
i__5750__auto___21759 = G__21761;
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
(placesurfer.googlestreetmap.interface$.build_maps_search_url.cljs$lang$applyTo = (function (seq21729){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21729));
}));

placesurfer.googlestreetmap.interface$.build_maps_location_url = (function placesurfer$googlestreetmap$interface$build_maps_location_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21768 = arguments.length;
var i__5750__auto___21769 = (0);
while(true){
if((i__5750__auto___21769 < len__5749__auto___21768)){
args__5755__auto__.push((arguments[i__5750__auto___21769]));

var G__21770 = (i__5750__auto___21769 + (1));
i__5750__auto___21769 = G__21770;
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
(placesurfer.googlestreetmap.interface$.build_maps_location_url.cljs$lang$applyTo = (function (seq21739){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21739));
}));

placesurfer.googlestreetmap.interface$.build_maps_search_link_html = (function placesurfer$googlestreetmap$interface$build_maps_search_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21777 = arguments.length;
var i__5750__auto___21779 = (0);
while(true){
if((i__5750__auto___21779 < len__5749__auto___21777)){
args__5755__auto__.push((arguments[i__5750__auto___21779]));

var G__21780 = (i__5750__auto___21779 + (1));
i__5750__auto___21779 = G__21780;
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
(placesurfer.googlestreetmap.interface$.build_maps_search_link_html.cljs$lang$applyTo = (function (seq21740){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21740));
}));

placesurfer.googlestreetmap.interface$.build_street_view_url = (function placesurfer$googlestreetmap$interface$build_street_view_url(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21783 = arguments.length;
var i__5750__auto___21784 = (0);
while(true){
if((i__5750__auto___21784 < len__5749__auto___21783)){
args__5755__auto__.push((arguments[i__5750__auto___21784]));

var G__21785 = (i__5750__auto___21784 + (1));
i__5750__auto___21784 = G__21785;
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
(placesurfer.googlestreetmap.interface$.build_street_view_url.cljs$lang$applyTo = (function (seq21742){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21742));
}));

placesurfer.googlestreetmap.interface$.google_maps_url_QMARK_ = (function placesurfer$googlestreetmap$interface$google_maps_url_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21786 = arguments.length;
var i__5750__auto___21787 = (0);
while(true){
if((i__5750__auto___21787 < len__5749__auto___21786)){
args__5755__auto__.push((arguments[i__5750__auto___21787]));

var G__21789 = (i__5750__auto___21787 + (1));
i__5750__auto___21787 = G__21789;
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
(placesurfer.googlestreetmap.interface$.google_maps_url_QMARK_.cljs$lang$applyTo = (function (seq21745){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21745));
}));

placesurfer.googlestreetmap.interface$.hemnet_listing_url_QMARK_ = (function placesurfer$googlestreetmap$interface$hemnet_listing_url_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21792 = arguments.length;
var i__5750__auto___21793 = (0);
while(true){
if((i__5750__auto___21793 < len__5749__auto___21792)){
args__5755__auto__.push((arguments[i__5750__auto___21793]));

var G__21794 = (i__5750__auto___21793 + (1));
i__5750__auto___21793 = G__21794;
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
(placesurfer.googlestreetmap.interface$.hemnet_listing_url_QMARK_.cljs$lang$applyTo = (function (seq21747){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21747));
}));

placesurfer.googlestreetmap.interface$.complete_address_line_QMARK_ = (function placesurfer$googlestreetmap$interface$complete_address_line_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21795 = arguments.length;
var i__5750__auto___21796 = (0);
while(true){
if((i__5750__auto___21796 < len__5749__auto___21795)){
args__5755__auto__.push((arguments[i__5750__auto___21796]));

var G__21797 = (i__5750__auto___21796 + (1));
i__5750__auto___21796 = G__21797;
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
(placesurfer.googlestreetmap.interface$.complete_address_line_QMARK_.cljs$lang$applyTo = (function (seq21748){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21748));
}));

placesurfer.googlestreetmap.interface$.place_external_links = (function placesurfer$googlestreetmap$interface$place_external_links(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21798 = arguments.length;
var i__5750__auto___21799 = (0);
while(true){
if((i__5750__auto___21799 < len__5749__auto___21798)){
args__5755__auto__.push((arguments[i__5750__auto___21799]));

var G__21800 = (i__5750__auto___21799 + (1));
i__5750__auto___21799 = G__21800;
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
(placesurfer.googlestreetmap.interface$.place_external_links.cljs$lang$applyTo = (function (seq21750){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21750));
}));

placesurfer.googlestreetmap.interface$.build_external_icon_link_html = (function placesurfer$googlestreetmap$interface$build_external_icon_link_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21801 = arguments.length;
var i__5750__auto___21802 = (0);
while(true){
if((i__5750__auto___21802 < len__5749__auto___21801)){
args__5755__auto__.push((arguments[i__5750__auto___21802]));

var G__21803 = (i__5750__auto___21802 + (1));
i__5750__auto___21802 = G__21803;
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
(placesurfer.googlestreetmap.interface$.build_external_icon_link_html.cljs$lang$applyTo = (function (seq21751){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21751));
}));

placesurfer.googlestreetmap.interface$.build_maps_icon_link_html = (function placesurfer$googlestreetmap$interface$build_maps_icon_link_html(var_args){
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
return placesurfer.googlestreetmap.interface$.build_maps_icon_link_html.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.googlestreetmap.interface$.build_maps_icon_link_html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.googlestreetmap.core.build_maps_icon_link_html,args);
}));

(placesurfer.googlestreetmap.interface$.build_maps_icon_link_html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.googlestreetmap.interface$.build_maps_icon_link_html.cljs$lang$applyTo = (function (seq21753){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21753));
}));

placesurfer.googlestreetmap.interface$.build_place_external_link_icons_html = (function placesurfer$googlestreetmap$interface$build_place_external_link_icons_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21809 = arguments.length;
var i__5750__auto___21810 = (0);
while(true){
if((i__5750__auto___21810 < len__5749__auto___21809)){
args__5755__auto__.push((arguments[i__5750__auto___21810]));

var G__21812 = (i__5750__auto___21810 + (1));
i__5750__auto___21810 = G__21812;
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
(placesurfer.googlestreetmap.interface$.build_place_external_link_icons_html.cljs$lang$applyTo = (function (seq21754){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21754));
}));

placesurfer.googlestreetmap.interface$.build_place_external_links_html = (function placesurfer$googlestreetmap$interface$build_place_external_links_html(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21813 = arguments.length;
var i__5750__auto___21814 = (0);
while(true){
if((i__5750__auto___21814 < len__5749__auto___21813)){
args__5755__auto__.push((arguments[i__5750__auto___21814]));

var G__21815 = (i__5750__auto___21814 + (1));
i__5750__auto___21814 = G__21815;
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
(placesurfer.googlestreetmap.interface$.build_place_external_links_html.cljs$lang$applyTo = (function (seq21757){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21757));
}));


//# sourceMappingURL=placesurfer.googlestreetmap.interface.js.map
