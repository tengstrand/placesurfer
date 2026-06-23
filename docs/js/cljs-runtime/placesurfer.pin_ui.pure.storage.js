goog.provide('placesurfer.pin_ui.pure.storage');
placesurfer.pin_ui.pure.storage.storage_key = "placesurfer_pins";
placesurfer.pin_ui.pure.storage.separator_kind_QMARK_ = (function placesurfer$pin_ui$pure$storage$separator_kind_QMARK_(item){
var kind = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(item);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"separator","separator",-1628749125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,"separator")));
});
placesurfer.pin_ui.pure.storage.normalize_separator = (function placesurfer$pin_ui$pure$storage$normalize_separator(item){
if(cljs.core.map_QMARK_(item)){
var id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())], null);
} else {
return null;
}
});
placesurfer.pin_ui.pure.storage.normalize_pin = (function placesurfer$pin_ui$pure$storage$normalize_pin(item){
if(cljs.core.map_QMARK_(item)){
var id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
}
})();
var G__39397 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259)],[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item),placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.pin_ui.pure.forms.default_icon;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())]);
var G__39397__$1 = ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item) === 'string')?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__39397,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),(function (p1__39395_SHARP_){
return parseFloat(p1__39395_SHARP_);
})):G__39397);
if(typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__39397__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543),(function (p1__39396_SHARP_){
return parseFloat(p1__39396_SHARP_);
}));
} else {
return G__39397__$1;
}
} else {
return null;
}
});
placesurfer.pin_ui.pure.storage.normalize_item = (function placesurfer$pin_ui$pure$storage$normalize_item(item){
if(cljs.core.map_QMARK_(item)){
if(placesurfer.pin_ui.pure.storage.separator_kind_QMARK_(item)){
return placesurfer.pin_ui.pure.storage.normalize_separator(item);
} else {
return placesurfer.pin_ui.pure.storage.normalize_pin(item);
}
} else {
return null;
}
});
placesurfer.pin_ui.pure.storage.parse_items = (function placesurfer$pin_ui$pure$storage$parse_items(raw){
try{var parsed = JSON.parse(raw);
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.pure.storage.normalize_item,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
}catch (e39400){var _ = e39400;
return cljs.core.PersistentVector.EMPTY;
}});
/**
 * Load pins from localStorage; returns empty vector on missing/invalid data.
 */
placesurfer.pin_ui.pure.storage.read_pins_BANG_ = (function placesurfer$pin_ui$pure$storage$read_pins_BANG_(){
try{var temp__5823__auto__ = localStorage.getItem(placesurfer.pin_ui.pure.storage.storage_key);
if(cljs.core.truth_(temp__5823__auto__)){
var raw = temp__5823__auto__;
return placesurfer.pin_ui.pure.storage.parse_items(raw);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}catch (e39402){var _ = e39402;
return cljs.core.PersistentVector.EMPTY;
}});
/**
 * Persist pins vector to localStorage.
 */
placesurfer.pin_ui.pure.storage.save_pins_BANG_ = (function placesurfer$pin_ui$pure$storage$save_pins_BANG_(items){
try{return localStorage.setItem(placesurfer.pin_ui.pure.storage.storage_key,JSON.stringify(cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.pure.storage.normalize_item,items))));
}catch (e39403){var _ = e39403;
return null;
}});
placesurfer.pin_ui.pure.storage.new_pin_id = (function placesurfer$pin_ui$pure$storage$new_pin_id(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
});

//# sourceMappingURL=placesurfer.pin_ui.pure.storage.js.map
