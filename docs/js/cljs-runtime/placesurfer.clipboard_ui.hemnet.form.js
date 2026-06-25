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
var G__40311 = placesurfer.clipboard_ui.hemnet.listing.parse_number(v);
if((G__40311 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40311);
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
placesurfer.clipboard_ui.hemnet.form.plot_area_part = (function placesurfer$clipboard_ui$hemnet$form$plot_area_part(plot_area){
var temp__5825__auto__ = placesurfer.clipboard_ui.hemnet.form.labeled_part(plot_area);
if(cljs.core.truth_(temp__5825__auto__)){
var plot = temp__5825__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(plot)," tomtarea"].join('');
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
/**
 * Format Hemnet listing fields into pin description text.
 * 
 *   Layout:
 *   1. Asking price (e.g. "2 695 000 kr")
 *   2. Comma-separated housing form, rooms, living area, optional plot area
 */
placesurfer.clipboard_ui.hemnet.form.build_description = (function placesurfer$clipboard_ui$hemnet$form$build_description(p__40357){
var map__40358 = p__40357;
var map__40358__$1 = cljs.core.__destructure_map(map__40358);
var housing_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40358__$1,new cljs.core.Keyword(null,"housing-form","housing-form",-1885695809));
var rooms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40358__$1,new cljs.core.Keyword(null,"rooms","rooms",1196158176));
var living_area = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40358__$1,new cljs.core.Keyword(null,"living-area","living-area",1377243120));
var plot_area = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40358__$1,new cljs.core.Keyword(null,"plot-area","plot-area",98036883));
var asking_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40358__$1,new cljs.core.Keyword(null,"asking-price","asking-price",1304329161));
var extra_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40358__$1,new cljs.core.Keyword(null,"extra-values","extra-values",1671557498));
var details = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.clipboard_ui.hemnet.form.labeled_part(housing_form),placesurfer.clipboard_ui.hemnet.form.labeled_part(rooms),placesurfer.clipboard_ui.hemnet.form.labeled_part(living_area),placesurfer.clipboard_ui.hemnet.form.plot_area_part(plot_area)], null));
var extras = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(placesurfer.clipboard_ui.hemnet.form.non_blank,(function (){var or__5025__auto__ = extra_values;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var detail_parts = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(details,extras));
var detail_line = ((cljs.core.seq(detail_parts))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",detail_parts):null);
var header_lines = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.clipboard_ui.hemnet.form.labeled_part(asking_price)], null)));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(cljs.core.truth_(detail_line)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(header_lines,detail_line):header_lines));
});
/**
 * Build a geocoding query from listing address fields.
 */
placesurfer.clipboard_ui.hemnet.form.address_line_for_geocoding = (function placesurfer$clipboard_ui$hemnet$form$address_line_for_geocoding(p__40365){
var map__40366 = p__40365;
var map__40366__$1 = cljs.core.__destructure_map(map__40366);
var street_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40366__$1,new cljs.core.Keyword(null,"street-address","street-address",1974914551));
var postal_city = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40366__$1,new cljs.core.Keyword(null,"postal-city","postal-city",2130329622));
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
placesurfer.clipboard_ui.hemnet.form.listing__GT_pin_form = (function placesurfer$clipboard_ui$hemnet$form$listing__GT_pin_form(listing,source_url){
var map__40368 = listing;
var map__40368__$1 = cljs.core.__destructure_map(map__40368);
var extra_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40368__$1,new cljs.core.Keyword(null,"extra-values","extra-values",1671557498));
var agent_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40368__$1,new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259));
var housing_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40368__$1,new cljs.core.Keyword(null,"housing-form","housing-form",-1885695809));
var image_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40368__$1,new cljs.core.Keyword(null,"image-url","image-url",-1064784064));
var rooms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40368__$1,new cljs.core.Keyword(null,"rooms","rooms",1196158176));
var asking_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40368__$1,new cljs.core.Keyword(null,"asking-price","asking-price",1304329161));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40368__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var living_area = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40368__$1,new cljs.core.Keyword(null,"living-area","living-area",1377243120));
var plot_area = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40368__$1,new cljs.core.Keyword(null,"plot-area","plot-area",98036883));
var postal_city = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40368__$1,new cljs.core.Keyword(null,"postal-city","postal-city",2130329622));
var street_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40368__$1,new cljs.core.Keyword(null,"street-address","street-address",1974914551));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40368__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var address = (function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.format_address_line(street_address,postal_city);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
var description = placesurfer.clipboard_ui.hemnet.form.build_description(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"housing-form","housing-form",-1885695809),housing_form,new cljs.core.Keyword(null,"rooms","rooms",1196158176),rooms,new cljs.core.Keyword(null,"living-area","living-area",1377243120),living_area,new cljs.core.Keyword(null,"plot-area","plot-area",98036883),plot_area,new cljs.core.Keyword(null,"asking-price","asking-price",1304329161),asking_price,new cljs.core.Keyword(null,"extra-values","extra-values",1671557498),extra_values], null));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259)],[(function (){var or__5025__auto__ = description;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),address,(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.resolve_listing_name(listing,source_url);
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
})(),"house2.png",(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.non_blank(source_url);
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
})(),(function (){var or__5025__auto__ = placesurfer.clipboard_ui.hemnet.form.non_blank(agent_url);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()]);
});

//# sourceMappingURL=placesurfer.clipboard_ui.hemnet.form.js.map
