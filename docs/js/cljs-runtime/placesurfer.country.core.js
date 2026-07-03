goog.provide('placesurfer.country.core');
placesurfer.country.core.locale__GT_iso = (function placesurfer$country$core$locale__GT_iso(){
try{var lang = (function (){var or__5025__auto__ = navigator.language;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (navigator.languages[(0)]);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "en-US";
}
}
})();
var parts = lang.split("-");
if((parts.length > (1))){
return (parts[(1)]).toUpperCase();
} else {
return "SE";
}
}catch (e39219){var _ = e39219;
return "SE";
}});
placesurfer.country.core.slug_for_iso = (function placesurfer$country$core$slug_for_iso(iso,countries){
return cljs.core.some((function (p1__39221_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(iso,new cljs.core.Keyword(null,"iso","iso",-1366207543).cljs$core$IFn$_invoke$arity$1(p1__39221_SHARP_))){
return new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__39221_SHARP_);
} else {
return null;
}
}),countries);
});
placesurfer.country.core.iso_for_slug = (function placesurfer$country$core$iso_for_slug(slug,countries){
return cljs.core.some((function (p1__39222_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slug,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__39222_SHARP_))){
return new cljs.core.Keyword(null,"iso","iso",-1366207543).cljs$core$IFn$_invoke$arity$1(p1__39222_SHARP_);
} else {
return null;
}
}),countries);
});
placesurfer.country.core.country_label = (function placesurfer$country$core$country_label(slug,countries){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39226_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slug,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__39226_SHARP_));
}),countries)));
});
/**
 * Bounding box for `slug` from enriched :countries, or nil.
 */
placesurfer.country.core.country_bounds_for_slug = (function placesurfer$country$core$country_bounds_for_slug(slug,countries){
var temp__5825__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39231_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slug,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__39231_SHARP_));
}),countries));
if(cljs.core.truth_(temp__5825__auto__)){
var map__39233 = temp__5825__auto__;
var map__39233__$1 = cljs.core.__destructure_map(map__39233);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword(null,"north","north",651323902));
if(((typeof west === 'number') && (((typeof east === 'number') && (((typeof south === 'number') && (typeof north === 'number'))))))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"west","west",708776677),west,new cljs.core.Keyword(null,"east","east",1189821678),east,new cljs.core.Keyword(null,"south","south",1586796293),south,new cljs.core.Keyword(null,"north","north",651323902),north], null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Map-click bounds; use metropolitan :pick-* boxes when present.
 */
placesurfer.country.core.bounds_for_pick = (function placesurfer$country$core$bounds_for_pick(p__39238){
var map__39239 = p__39238;
var map__39239__$1 = cljs.core.__destructure_map(map__39239);
var pick_west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39239__$1,new cljs.core.Keyword(null,"pick-west","pick-west",122255929));
var pick_east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39239__$1,new cljs.core.Keyword(null,"pick-east","pick-east",2019488979));
var pick_south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39239__$1,new cljs.core.Keyword(null,"pick-south","pick-south",2061199937));
var pick_north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39239__$1,new cljs.core.Keyword(null,"pick-north","pick-north",-345667041));
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39239__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39239__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39239__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39239__$1,new cljs.core.Keyword(null,"north","north",651323902));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"west","west",708776677),(function (){var or__5025__auto__ = pick_west;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return west;
}
})(),new cljs.core.Keyword(null,"east","east",1189821678),(function (){var or__5025__auto__ = pick_east;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return east;
}
})(),new cljs.core.Keyword(null,"south","south",1586796293),(function (){var or__5025__auto__ = pick_south;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return south;
}
})(),new cljs.core.Keyword(null,"north","north",651323902),(function (){var or__5025__auto__ = pick_north;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return north;
}
})()], null);
});
placesurfer.country.core.point_in_bounds_QMARK_ = (function placesurfer$country$core$point_in_bounds_QMARK_(country,lon,lat){
var map__39245 = placesurfer.country.core.bounds_for_pick(country);
var map__39245__$1 = cljs.core.__destructure_map(map__39245);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39245__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39245__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39245__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39245__$1,new cljs.core.Keyword(null,"north","north",651323902));
return ((typeof west === 'number') && (((typeof east === 'number') && (((typeof south === 'number') && (((typeof north === 'number') && ((((((west <= lon)) && ((lon <= east)))) && ((((south <= lat)) && ((lat <= north)))))))))))));
});
placesurfer.country.core.bounds_area = (function placesurfer$country$core$bounds_area(country){
var map__39250 = placesurfer.country.core.bounds_for_pick(country);
var map__39250__$1 = cljs.core.__destructure_map(map__39250);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39250__$1,new cljs.core.Keyword(null,"west","west",708776677));
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39250__$1,new cljs.core.Keyword(null,"east","east",1189821678));
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39250__$1,new cljs.core.Keyword(null,"south","south",1586796293));
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39250__$1,new cljs.core.Keyword(null,"north","north",651323902));
return ((east - west) * (north - south));
});
/**
 * Country slug whose pick bounding box contains `lon`/`lat`, preferring the smallest match.
 */
placesurfer.country.core.slug_for_point = (function placesurfer$country$core$slug_for_point(lon,lat,countries){
var G__39252 = countries;
var G__39252__$1 = (((G__39252 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39251_SHARP_){
return placesurfer.country.core.point_in_bounds_QMARK_(p1__39251_SHARP_,lon,lat);
}),G__39252));
var G__39252__$2 = (((G__39252__$1 == null))?null:cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(placesurfer.country.core.bounds_area,G__39252__$1));
var G__39252__$3 = (((G__39252__$2 == null))?null:cljs.core.first(G__39252__$2));
if((G__39252__$3 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(G__39252__$3);
}
});
placesurfer.country.core.navigate_country_plan = (function placesurfer$country$core$navigate_country_plan(target_page){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-search?","focus-search?",-1381981880),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_page,new cljs.core.Keyword(null,"country","country",312965309))], null);
});
placesurfer.country.core.set_country_filter_plan = (function placesurfer$country$core$set_country_filter_plan(query){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"country-filter","country-filter",-2099038819),(function (){var or__5025__auto__ = query;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()], null);
});
/**
 * Index to highlight after the filter changes, or nil when the list is empty.
 */
placesurfer.country.core.highlight_index_after_filter = (function placesurfer$country$core$highlight_index_after_filter(visible_count){
if((visible_count > (0))){
return (0);
} else {
return null;
}
});
/**
 * Move keyboard highlight by `delta` (+1 down, -1 up) with wrap. Returns nil when
 * `visible-count` is zero. First arrow from `nil` lands on index 0 (down) or last (up).
 */
placesurfer.country.core.step_highlight_index = (function placesurfer$country$core$step_highlight_index(current_index,visible_count,delta){
if((visible_count > (0))){
var idx = (((!((current_index == null))))?current_index:(((delta > (0)))?(-1):visible_count));
return cljs.core.mod((idx + delta),visible_count);
} else {
return null;
}
});
/**
 * Pure plan for selecting a country in the UI.
 */
placesurfer.country.core.select_country_plan = (function placesurfer$country$core$select_country_plan(p__39255,slug){
var map__39256 = p__39255;
var map__39256__$1 = cljs.core.__destructure_map(map__39256);
var current_slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39256__$1,new cljs.core.Keyword(null,"current-slug","current-slug",-1084358059));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39256__$1,new cljs.core.Keyword(null,"page","page",849072397));
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39256__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
var same_country_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slug,current_slug);
var on_country_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"country","country",312965309));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"same-country?","same-country?",2096767045),same_country_QMARK_,new cljs.core.Keyword(null,"clear-filter?","clear-filter?",-1068595548),true,new cljs.core.Keyword(null,"switch-to-country-page?","switch-to-country-page?",1468335198),(((!(same_country_QMARK_))) && ((!(on_country_page_QMARK_)))),new cljs.core.Keyword(null,"focus-search?","focus-search?",-1381981880),(((!(same_country_QMARK_))) && ((!(on_country_page_QMARK_)))),new cljs.core.Keyword(null,"load-country?","load-country?",-2106770458),(!(same_country_QMARK_)),new cljs.core.Keyword(null,"navigate-home?","navigate-home?",-828264994),(function (){var and__5023__auto__ = (!(same_country_QMARK_));
if(and__5023__auto__){
var and__5023__auto____$1 = on_country_page_QMARK_;
if(and__5023__auto____$1){
return mobile_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})(),new cljs.core.Keyword(null,"load-options","load-options",-38528641),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fit?","fit?",1773758200),true,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true], null)], null);
});

//# sourceMappingURL=placesurfer.country.core.js.map
