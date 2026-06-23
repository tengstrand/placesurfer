goog.provide('placesurfer.pin_ui.pure.forms');
placesurfer.pin_ui.pure.forms.default_icon = "pin-orange.png";
placesurfer.pin_ui.pure.forms.hemnet_icon = "house2.png";
placesurfer.pin_ui.pure.forms.icon_dir = "/images/pins/";
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
var G__39348 = arguments.length;
switch (G__39348) {
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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259)],["","","","",placesurfer.pin_ui.pure.forms.default_icon,"","","",""]);
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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259)],[clojure.string.trim(placesurfer.pin_ui.pure.forms.sanitize_description(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form))),lon,placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(form)),id,clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(form))),lat,clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(form)))]);
} else {
return null;
}
} else {
return null;
}
});
placesurfer.pin_ui.pure.forms.item__GT_form = (function placesurfer$pin_ui$pure$forms$item__GT_form(item){
if(cljs.core.truth_(item)){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259)],[placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item)),placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(item)),placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)),((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item) === 'number')?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item)):placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item))),placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.pin_ui.pure.forms.default_icon;
}
})()),placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item)),((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item) === 'number')?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item)):placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item))),placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(item)),placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(item))]);
} else {
return placesurfer.pin_ui.pure.forms.default_form();
}
});
placesurfer.pin_ui.pure.forms.form_valid_QMARK_ = (function placesurfer$pin_ui$pure$forms$form_valid_QMARK_(form){
return ((cljs.core.seq(clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form))))) && (((placesurfer.pin_ui.pure.coords.valid_longitude_QMARK_(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form))) && (placesurfer.pin_ui.pure.coords.valid_latitude_QMARK_(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form))))));
});
/**
 * Build edit form values from a Photon result, keeping url/description.
 */
placesurfer.pin_ui.pure.forms.form_from_search_result = (function placesurfer$pin_ui$pure$forms$form_from_search_result(result,pin_form){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259)],[(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(pin_form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(pin_form);
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
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(result)),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(pin_form);
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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259)],[clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form))),placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(form)),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(form))),clojure.string.trim(placesurfer.pin_ui.pure.forms.coerce_text(new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(form)))]);
});
placesurfer.pin_ui.pure.forms.form_edited_from_baseline_QMARK_ = (function placesurfer$pin_ui$pure$forms$form_edited_from_baseline_QMARK_(form,baseline){
return (((!((baseline == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.pure.forms.form_field_values(form),placesurfer.pin_ui.pure.forms.form_field_values(baseline))));
});

//# sourceMappingURL=placesurfer.pin_ui.pure.forms.js.map
