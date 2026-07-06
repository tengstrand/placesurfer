goog.provide('placesurfer.clipboard_ui.hemnet.form');
placesurfer.clipboard_ui.hemnet.form.non_blank = (function placesurfer$clipboard_ui$hemnet$form$non_blank(s){
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
if(cljs.core.truth_(temp__5825__auto__)){
var t = temp__5825__auto__;
return t;
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.form.coord_text = (function placesurfer$clipboard_ui$hemnet$form$coord_text(v){
var G__65424 = placesurfer.clipboard_ui.hemnet.listing.parse_number(v);
if((G__65424 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65424);
}
});
placesurfer.clipboard_ui.hemnet.form.labeled_part = (function placesurfer$clipboard_ui$hemnet$form$labeled_part(v){
var temp__5825__auto__ = placesurfer.clipboard_ui.hemnet.form.non_blank(v);
if(cljs.core.truth_(temp__5825__auto__)){
var t = temp__5825__auto__;
return t;
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.form.normalize_area = (function placesurfer$clipboard_ui$hemnet$form$normalize_area(s){
var temp__5825__auto__ = placesurfer.clipboard_ui.hemnet.form.non_blank(s);
if(cljs.core.truth_(temp__5825__auto__)){
var t = temp__5825__auto__;
var converted = clojure.string.replace(clojure.string.replace(t,/\bkvm\b/i,"m\u00B2"),"m2","m\u00B2");
if(((clojure.string.includes_QMARK_(converted,"m\u00B2")) || (cljs.core.not(cljs.core.re_find(/\d/,converted))))){
return converted;
} else {
return [converted," m\u00B2"].join('');
}
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.form.plot_area_part = (function placesurfer$clipboard_ui$hemnet$form$plot_area_part(plot_area,plot_label){
var temp__5825__auto__ = placesurfer.clipboard_ui.hemnet.form.labeled_part(placesurfer.clipboard_ui.hemnet.form.normalize_area(plot_area));
if(cljs.core.truth_(temp__5825__auto__)){
var plot = temp__5825__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(plot)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plot_label)].join('');
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.form.address_includes_postal_city_QMARK_ = (function placesurfer$clipboard_ui$hemnet$form$address_includes_postal_city_QMARK_(street,postal_city){
var and__5023__auto__ = placesurfer.clipboard_ui.hemnet.form.non_blank(street);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = placesurfer.clipboard_ui.hemnet.form.non_blank(postal_city);
if(cljs.core.truth_(and__5023__auto____$1)){
return clojure.string.includes_QMARK_(clojure.string.lower_case(street),clojure.string.lower_case(postal_city));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
placesurfer.clipboard_ui.hemnet.form.format_address_line = (function placesurfer$clipboard_ui$hemnet$form$format_address_line(street_address,postal_city){
if(((cljs.core.not(placesurfer.clipboard_ui.hemnet.form.non_blank(street_address))) && (cljs.core.not(placesurfer.clipboard_ui.hemnet.form.non_blank(postal_city))))){
return null;
} else {
if(cljs.core.not(placesurfer.clipboard_ui.hemnet.form.non_blank(street_address))){
return placesurfer.clipboard_ui.hemnet.form.non_blank(postal_city);
} else {
if(cljs.core.not(placesurfer.clipboard_ui.hemnet.form.non_blank(postal_city))){
return placesurfer.clipboard_ui.hemnet.form.non_blank(street_address);
} else {
if(cljs.core.truth_(placesurfer.clipboard_ui.hemnet.form.address_includes_postal_city_QMARK_(street_address,postal_city))){
return placesurfer.clipboard_ui.hemnet.form.non_blank(street_address);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(street_address),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(postal_city)].join('');

}
}
}
}
});
placesurfer.clipboard_ui.hemnet.form.resolve_listing_name = (function placesurfer$clipboard_ui$hemnet$form$resolve_listing_name(listing,source_url){
var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.non_blank(new cljs.core.Keyword(null,"listing-title","listing-title",1991064421).cljs$core$IFn$_invoke$arity$1(listing));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = placesurfer.clipboard_ui.hemnet.form.non_blank(new cljs.core.Keyword(null,"street-address","street-address",1974914551).cljs$core$IFn$_invoke$arity$1(listing));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return placesurfer.clipboard_ui.hemnet.url.listing_title_from_url(source_url);
}
}
});
placesurfer.clipboard_ui.hemnet.form.parse_amount = (function placesurfer$clipboard_ui$hemnet$form$parse_amount(s){
var temp__5825__auto__ = placesurfer.clipboard_ui.hemnet.form.non_blank(s);
if(cljs.core.truth_(temp__5825__auto__)){
var t = temp__5825__auto__;
var cleaned = clojure.string.replace(clojure.string.replace(clojure.string.replace(t," ",""),",","."),/[^\d.]/,"");
if(cljs.core.seq(cleaned)){
var n = parseFloat(cleaned);
if(cljs.core.truth_(isNaN(n))){
return null;
} else {
return n;
}
} else {
return null;
}
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.form.format_amount_se = (function placesurfer$clipboard_ui$hemnet$form$format_amount_se(n){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(n));
var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65425_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.reverse(p1__65425_SHARP_));
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((3),cljs.core.reverse(s)));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.reverse(groups));
});
placesurfer.clipboard_ui.hemnet.form.calc_sqm_price = (function placesurfer$clipboard_ui$hemnet$form$calc_sqm_price(asking_price_str,living_area_str){
var temp__5825__auto__ = placesurfer.clipboard_ui.hemnet.form.parse_amount(asking_price_str);
if(cljs.core.truth_(temp__5825__auto__)){
var price = temp__5825__auto__;
var temp__5825__auto____$1 = placesurfer.clipboard_ui.hemnet.form.parse_amount(living_area_str);
if(cljs.core.truth_(temp__5825__auto____$1)){
var area = temp__5825__auto____$1;
if((((price > (0))) && ((area > (1))))){
return [placesurfer.clipboard_ui.hemnet.form.format_amount_se((price / area))," kr/m\u00B2"].join('');
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
placesurfer.clipboard_ui.hemnet.form.kr_per_man_QMARK_ = (function placesurfer$clipboard_ui$hemnet$form$kr_per_man_QMARK_(s){
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),"kr/m\u00E5n");
});
placesurfer.clipboard_ui.hemnet.form.has_sqm_price_QMARK_ = (function placesurfer$clipboard_ui$hemnet$form$has_sqm_price_QMARK_(extras){
return cljs.core.some((function (p1__65428_SHARP_){
var lc = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65428_SHARP_));
return ((clojure.string.includes_QMARK_(lc,"kr/m")) && ((!(clojure.string.includes_QMARK_(lc,"m\u00E5n")))));
}),extras);
});
/**
 * Format listing fields into pin description text.
 * 
 *   Layout:
 *   1. Asking price (e.g. "2 695 000 kr")
 *   2. Housing form, rooms, living area, plot area, monthly fee
 *   3. Square meter price, tenure, build year (when present)
 */
placesurfer.clipboard_ui.hemnet.form.build_description = (function placesurfer$clipboard_ui$hemnet$form$build_description(p__65430){
var map__65431 = p__65430;
var map__65431__$1 = cljs.core.__destructure_map(map__65431);
var housing_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65431__$1,new cljs.core.Keyword(null,"housing-form","housing-form",-1885695809));
var rooms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65431__$1,new cljs.core.Keyword(null,"rooms","rooms",1196158176));
var living_area = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65431__$1,new cljs.core.Keyword(null,"living-area","living-area",1377243120));
var plot_area = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65431__$1,new cljs.core.Keyword(null,"plot-area","plot-area",98036883));
var asking_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65431__$1,new cljs.core.Keyword(null,"asking-price","asking-price",1304329161));
var extra_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65431__$1,new cljs.core.Keyword(null,"extra-values","extra-values",1671557498));
var plot_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65431__$1,new cljs.core.Keyword(null,"plot-label","plot-label",1776911128),"tomt");
var details = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.clipboard_ui.hemnet.form.labeled_part(housing_form),placesurfer.clipboard_ui.hemnet.form.labeled_part(rooms),placesurfer.clipboard_ui.hemnet.form.labeled_part(placesurfer.clipboard_ui.hemnet.form.normalize_area(living_area)),placesurfer.clipboard_ui.hemnet.form.plot_area_part(plot_area,plot_label)], null));
var all_extras = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(placesurfer.clipboard_ui.hemnet.form.non_blank,(function (){var or__5025__auto__ = extra_values;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var line2_ext = cljs.core.filterv(placesurfer.clipboard_ui.hemnet.form.kr_per_man_QMARK_,all_extras);
var other_ext = cljs.core.filterv(cljs.core.complement(placesurfer.clipboard_ui.hemnet.form.kr_per_man_QMARK_),all_extras);
var sqm_calc = (cljs.core.truth_(placesurfer.clipboard_ui.hemnet.form.has_sqm_price_QMARK_(all_extras))?null:placesurfer.clipboard_ui.hemnet.form.calc_sqm_price(asking_price,living_area));
var line3_ext = (cljs.core.truth_(sqm_calc)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sqm_calc], null),other_ext):other_ext);
var line2 = ((cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(details,line2_ext)))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(details,line2_ext)):null);
var line3 = ((cljs.core.seq(line3_ext))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",line3_ext):null);
var lines = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.clipboard_ui.hemnet.form.labeled_part(asking_price),line2,line3], null));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines);
});
/**
 * Build a geocoding query from listing address fields.
 */
placesurfer.clipboard_ui.hemnet.form.address_line_for_geocoding = (function placesurfer$clipboard_ui$hemnet$form$address_line_for_geocoding(p__65433){
var map__65434 = p__65433;
var map__65434__$1 = cljs.core.__destructure_map(map__65434);
var street_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65434__$1,new cljs.core.Keyword(null,"street-address","street-address",1974914551));
var postal_city = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65434__$1,new cljs.core.Keyword(null,"postal-city","postal-city",2130329622));
var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.format_address_line(street_address,postal_city);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
});
/**
 * Map normalized listing + source url to pin editor form.
 */
placesurfer.clipboard_ui.hemnet.form.listing__GT_pin_form = (function placesurfer$clipboard_ui$hemnet$form$listing__GT_pin_form(var_args){
var G__65437 = arguments.length;
switch (G__65437) {
case 2:
return placesurfer.clipboard_ui.hemnet.form.listing__GT_pin_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return placesurfer.clipboard_ui.hemnet.form.listing__GT_pin_form.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.clipboard_ui.hemnet.form.listing__GT_pin_form.cljs$core$IFn$_invoke$arity$2 = (function (listing,source_url){
return placesurfer.clipboard_ui.hemnet.form.listing__GT_pin_form.cljs$core$IFn$_invoke$arity$3(listing,source_url,"tomt");
}));

(placesurfer.clipboard_ui.hemnet.form.listing__GT_pin_form.cljs$core$IFn$_invoke$arity$3 = (function (listing,source_url,plot_label){
var map__65439 = listing;
var map__65439__$1 = cljs.core.__destructure_map(map__65439);
var agent_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"agent-name","agent-name",-916187942));
var extra_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"extra-values","extra-values",1671557498));
var agent_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259));
var housing_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"housing-form","housing-form",-1885695809));
var image_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"image-url","image-url",-1064784064));
var rooms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"rooms","rooms",1196158176));
var asking_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"asking-price","asking-price",1304329161));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var living_area = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"living-area","living-area",1377243120));
var plot_area = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"plot-area","plot-area",98036883));
var postal_city = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"postal-city","postal-city",2130329622));
var street_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"street-address","street-address",1974914551));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var address = (function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.format_address_line(street_address,postal_city);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
var description = placesurfer.clipboard_ui.hemnet.form.build_description(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"housing-form","housing-form",-1885695809),housing_form,new cljs.core.Keyword(null,"rooms","rooms",1196158176),rooms,new cljs.core.Keyword(null,"living-area","living-area",1377243120),living_area,new cljs.core.Keyword(null,"plot-area","plot-area",98036883),plot_area,new cljs.core.Keyword(null,"asking-price","asking-price",1304329161),asking_price,new cljs.core.Keyword(null,"extra-values","extra-values",1671557498),extra_values,new cljs.core.Keyword(null,"plot-label","plot-label",1776911128),plot_label], null));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"agent-name","agent-name",-916187942),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259)],[(function (){var or__5025__auto__ = description;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.resolve_listing_name(listing,source_url);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.coord_text(longitude);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.non_blank(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(listing));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "house2.png";
}
})(),(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.non_blank(source_url);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.coord_text(latitude);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.non_blank(image_url);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.non_blank(agent_name);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),address,(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.non_blank(agent_url);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()]);
}));

(placesurfer.clipboard_ui.hemnet.form.listing__GT_pin_form.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=placesurfer.clipboard_ui.hemnet.form.js.map
