goog.provide('placesurfer.pin_ui.pure.forms');
placesurfer.pin_ui.pure.forms.default_icon = "pin-orange.png";
placesurfer.pin_ui.pure.forms.hemnet_icon = "house2.png";
placesurfer.pin_ui.pure.forms.icon_dir = "/images/pins/";
placesurfer.pin_ui.pure.forms.stars_dir = "/images/stars/";
placesurfer.pin_ui.pure.forms.default_stars = "3-stars.png";
placesurfer.pin_ui.pure.forms.stars_options = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5-stars.png","4-stars.png","3-stars.png","2-stars.png","1-star.png","0-stars.png"], null);
placesurfer.pin_ui.pure.forms.stars_url = (function placesurfer$pin_ui$pure$forms$stars_url(stars){
return [placesurfer.pin_ui.pure.forms.stars_dir,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([stars]),placesurfer.pin_ui.pure.forms.stars_options))?stars:placesurfer.pin_ui.pure.forms.default_stars))].join('');
});
placesurfer.pin_ui.pure.forms.normalize_stars = (function placesurfer$pin_ui$pure$forms$normalize_stars(stars){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([stars]),placesurfer.pin_ui.pure.forms.stars_options))){
return stars;
} else {
return "0-stars.png";
}
});
placesurfer.pin_ui.pure.forms.legacy_icon_map = new cljs.core.PersistentArrayMap(null, 3, ["pin2.png",placesurfer.pin_ui.pure.forms.default_icon,"home.png",placesurfer.pin_ui.pure.forms.hemnet_icon,"house.png","house12.png"], null);
placesurfer.pin_ui.pure.forms.fallback_icon_options = cljs.core.PersistentVector.fromArray(["house1.png","house10.png","house11.png","house12.png","house13.png","house14.png","house15.png","house16.png","house17.png","house18.png","house19.png","house2.png","house20.png","house21.png","house22.png","house23.png","house24.png","house25.png","house27.png","house28.png","house29.png","house30.png","house31.png","house32.png","house33.png","house34.png","house3.png","house4.png","house5.png","house6.png","house7.png","house8.png","house9.png",placesurfer.pin_ui.pure.forms.default_icon,"pin-white.png"], true);
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.pin_ui !== 'undefined') && (typeof placesurfer.pin_ui.pure !== 'undefined') && (typeof placesurfer.pin_ui.pure.forms !== 'undefined') && (typeof placesurfer.pin_ui.pure.forms.icon_options_STAR_ !== 'undefined')){
} else {
placesurfer.pin_ui.pure.forms.icon_options_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(placesurfer.pin_ui.pure.forms.fallback_icon_options);
}
placesurfer.pin_ui.pure.forms.icon_options = (function placesurfer$pin_ui$pure$forms$icon_options(){
return cljs.core.deref(placesurfer.pin_ui.pure.forms.icon_options_STAR_);
});
placesurfer.pin_ui.pure.forms.set_icon_options_BANG_ = (function placesurfer$pin_ui$pure$forms$set_icon_options_BANG_(filenames){
if(cljs.core.seq(filenames)){
return cljs.core.reset_BANG_(placesurfer.pin_ui.pure.forms.icon_options_STAR_,cljs.core.vec(filenames));
} else {
return null;
}
});
placesurfer.pin_ui.pure.forms.remap_legacy_icon = (function placesurfer$pin_ui$pure$forms$remap_legacy_icon(v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(placesurfer.pin_ui.pure.forms.legacy_icon_map,v,v);
});
placesurfer.pin_ui.pure.forms.normalize_icon = (function placesurfer$pin_ui$pure$forms$normalize_icon(var_args){
var G__95150 = arguments.length;
switch (G__95150) {
case 1:
return placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1 = (function (icon){
return placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$2(icon,placesurfer.pin_ui.pure.forms.icon_options());
}));

(placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$2 = (function (icon,options){
var v = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon));
var v__$1 = ((cljs.core.empty_QMARK_(v))?placesurfer.pin_ui.pure.forms.default_icon:placesurfer.pin_ui.pure.forms.remap_legacy_icon(v));
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([v__$1]),options))){
return v__$1;
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([placesurfer.pin_ui.pure.forms.default_icon]),options))){
return placesurfer.pin_ui.pure.forms.default_icon;
} else {
if(cljs.core.seq(options)){
return cljs.core.first(options);
} else {
return placesurfer.pin_ui.pure.forms.default_icon;

}
}
}
}));

(placesurfer.pin_ui.pure.forms.normalize_icon.cljs$lang$maxFixedArity = 2);

placesurfer.pin_ui.pure.forms.icon_url = (function placesurfer$pin_ui$pure$forms$icon_url(icon){
return [placesurfer.pin_ui.pure.forms.icon_dir,cljs.core.str.cljs$core$IFn$_invoke$arity$1(placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1(icon))].join('');
});
placesurfer.pin_ui.pure.forms.default_form = (function placesurfer$pin_ui$pure$forms$default_form(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"radii","radii",-39552793),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"ranking","ranking",191056920),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259)],["","","","",placesurfer.pin_ui.pure.forms.default_icon,"","",placesurfer.pin_ui.pure.forms.default_stars,"","",""]);
});
placesurfer.pin_ui.pure.forms.coerce_text = (function placesurfer$pin_ui$pure$forms$coerce_text(v){
if(typeof v === 'string'){
return v;
} else {
if((v == null)){
return "";
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
});
placesurfer.pin_ui.pure.forms.sanitize_description = (function placesurfer$pin_ui$pure$forms$sanitize_description(v){
return placesurfer.html.interface$.sanitize.sanitize_description_html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.pin_ui.pure.forms.coerce_text(v)], 0));
});
/**
 * Build a pin item map from form + id.
 */
placesurfer.pin_ui.pure.forms.form__GT_item = (function placesurfer$pin_ui$pure$forms$form__GT_item(form,id){
var temp__5825__auto__ = placesurfer.pin_ui.pure.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.truth_(temp__5825__auto__)){
var lon = temp__5825__auto__;
var temp__5825__auto____$1 = placesurfer.pin_ui.pure.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.truth_(temp__5825__auto____$1)){
var lat = temp__5825__auto____$1;
var G__95151 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"ranking","ranking",191056920),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259)],[clojure.string.trim(placesurfer.pin_ui.pure.forms.sanitize_description(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form))),lon,placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(form)),id,clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(form))),lat,placesurfer.pin_ui.pure.forms.normalize_stars(new cljs.core.Keyword(null,"ranking","ranking",191056920).cljs$core$IFn$_invoke$arity$1(form)),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(form)))]);
if(cljs.core.seq(clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"radii","radii",-39552793).cljs$core$IFn$_invoke$arity$1(form))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__95151,new cljs.core.Keyword(null,"radii","radii",-39552793),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"radii","radii",-39552793).cljs$core$IFn$_invoke$arity$1(form))));
} else {
return G__95151;
}
} else {
return null;
}
} else {
return null;
}
});
placesurfer.pin_ui.pure.forms.item__GT_form = (function placesurfer$pin_ui$pure$forms$item__GT_form(item){
if(cljs.core.truth_(item)){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"radii","radii",-39552793),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"ranking","ranking",191056920),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259)],[placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item)),placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"radii","radii",-39552793).cljs$core$IFn$_invoke$arity$1(item)),placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)),((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item) === 'number')?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item)):placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item))),placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.pin_ui.pure.forms.default_icon;
}
})()),placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item)),((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item) === 'number')?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item)):placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item))),placesurfer.pin_ui.pure.forms.normalize_stars((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"ranking","ranking",191056920).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "0-stars.png";
}
}
})()),placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(item)),placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(item)),placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(item))]);
} else {
return placesurfer.pin_ui.pure.forms.default_form();
}
});
placesurfer.pin_ui.pure.forms.form_valid_QMARK_ = (function placesurfer$pin_ui$pure$forms$form_valid_QMARK_(form){
var and__5023__auto__ = cljs.core.seq(clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form))));
if(and__5023__auto__){
var and__5023__auto____$1 = placesurfer.pin_ui.pure.coords.valid_longitude_QMARK_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form));
if(and__5023__auto____$1){
var and__5023__auto____$2 = placesurfer.pin_ui.pure.coords.valid_latitude_QMARK_(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form));
if(and__5023__auto____$2){
var G__95152 = new cljs.core.Keyword(null,"radii","radii",-39552793).cljs$core$IFn$_invoke$arity$1(form);
return (placesurfer.pin_ui.pure.forms.radii_valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? placesurfer.pin_ui.pure.forms.radii_valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__95152) : placesurfer.pin_ui.pure.forms.radii_valid_QMARK_.call(null,G__95152));
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
/**
 * Build edit form values from a Photon result, keeping url/description.
 */
placesurfer.pin_ui.pure.forms.form_from_search_result = (function placesurfer$pin_ui$pure$forms$form_from_search_result(result,pin_form){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"radii","radii",-39552793),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"ranking","ranking",191056920),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259)],[(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(pin_form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"radii","radii",-39552793).cljs$core$IFn$_invoke$arity$1(pin_form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(result),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(result)),placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(pin_form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.pin_ui.pure.forms.default_icon;
}
})()),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pin_form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(result)),placesurfer.pin_ui.pure.forms.normalize_stars((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"ranking","ranking",191056920).cljs$core$IFn$_invoke$arity$1(pin_form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.pin_ui.pure.forms.default_stars;
}
})()),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(pin_form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(pin_form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(pin_form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()]);
});
placesurfer.pin_ui.pure.forms.form_field_values = (function placesurfer$pin_ui$pure$forms$form_field_values(form){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"radii","radii",-39552793),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"ranking","ranking",191056920),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259)],[clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"radii","radii",-39552793).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form))),placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(form)),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form))),placesurfer.pin_ui.pure.forms.normalize_stars(new cljs.core.Keyword(null,"ranking","ranking",191056920).cljs$core$IFn$_invoke$arity$1(form)),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(form)))]);
});
placesurfer.pin_ui.pure.forms.form_edited_from_baseline_QMARK_ = (function placesurfer$pin_ui$pure$forms$form_edited_from_baseline_QMARK_(form,baseline){
return (((!((baseline == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.pure.forms.form_field_values(form),placesurfer.pin_ui.pure.forms.form_field_values(baseline))));
});
/**
 * MapLibre anchor point: 'bottom' for pin-shaped icons, 'center' for others.
 */
placesurfer.pin_ui.pure.forms.pin_icon_anchor = (function placesurfer$pin_ui$pure$forms$pin_icon_anchor(icon){
if(clojure.string.starts_with_QMARK_(icon,"pin-")){
return "bottom";
} else {
return "center";
}
});
/**
 * Pixel offset [x y] to compensate for whitespace below the visual tip in pin images.
 */
placesurfer.pin_ui.pure.forms.pin_icon_marker_offset = (function placesurfer$pin_ui$pure$forms$pin_icon_marker_offset(icon){
var G__95153 = icon;
switch (G__95153) {
case "pin-orange.png":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null);

break;
case "pin-white.png":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null);

break;
default:
if(clojure.string.starts_with_QMARK_(icon,"pin-")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}

}
});
/**
 * Parse a comma-separated radii string into a vector of positive km numbers.
 * Returns nil if the string is empty or contains any invalid/out-of-range value.
 */
placesurfer.pin_ui.pure.forms.parse_radii = (function placesurfer$pin_ui$pure$forms$parse_radii(s){
var trimmed = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.seq(trimmed)){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(trimmed,/\s*,\s*/);
var nums = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__95154_SHARP_){
return parseFloat(p1__95154_SHARP_);
}),parts);
if(cljs.core.every_QMARK_((function (p1__95155_SHARP_){
return ((typeof p1__95155_SHARP_ === 'number') && (((cljs.core.not(isNaN(p1__95155_SHARP_))) && ((((p1__95155_SHARP_ > (0))) && ((p1__95155_SHARP_ <= (20000))))))));
}),nums)){
return nums;
} else {
return null;
}
} else {
return null;
}
});
/**
 * True when the radii field is empty (no circles) or contains valid positive km values.
 */
placesurfer.pin_ui.pure.forms.radii_valid_QMARK_ = (function placesurfer$pin_ui$pure$forms$radii_valid_QMARK_(s){
var trimmed = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
return ((cljs.core.empty_QMARK_(trimmed)) || ((!((placesurfer.pin_ui.pure.forms.parse_radii(trimmed) == null)))));
});

//# sourceMappingURL=placesurfer.pin_ui.pure.forms.js.map
