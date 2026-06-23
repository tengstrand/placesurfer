goog.provide('hitteri.clipboard_ui.google_maps.place');
hitteri.clipboard_ui.google_maps.place.non_blank = (function hitteri$clipboard_ui$google_maps$place$non_blank(s){
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
if(cljs.core.truth_(temp__5825__auto__)){
var t = temp__5825__auto__;
return t;
} else {
return null;
}
});
hitteri.clipboard_ui.google_maps.place.coord_text = (function hitteri$clipboard_ui$google_maps$place$coord_text(v){
var G__40123 = hitteri.clipboard_ui.pure.numbers.parse_number(v);
if((G__40123 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40123);
}
});
/**
 * Normalize bookmarklet `place` map (Google Maps) to kebab-case fields.
 */
hitteri.clipboard_ui.google_maps.place.normalize_place_payload = (function hitteri$clipboard_ui$google_maps$place$normalize_place_payload(place){
if(cljs.core.map_QMARK_(place)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5025__auto__ = hitteri.clipboard_ui.google_maps.place.non_blank(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hitteri.clipboard_ui.google_maps.place.non_blank(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(place));
}
})(),new cljs.core.Keyword(null,"address","address",559499426),hitteri.clipboard_ui.google_maps.place.non_blank(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(place)),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),hitteri.clipboard_ui.pure.numbers.parse_number((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(place);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(place);
}
}
})()),new cljs.core.Keyword(null,"latitude","latitude",394867543),hitteri.clipboard_ui.pure.numbers.parse_number((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(place);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place);
}
})())], null);
} else {
return null;
}
});
hitteri.clipboard_ui.google_maps.place.place_has_coords_QMARK_ = (function hitteri$clipboard_ui$google_maps$place$place_has_coords_QMARK_(place){
return ((cljs.core.map_QMARK_(place)) && (((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(place) === 'number') && (typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(place) === 'number'))));
});
/**
 * Map normalized Google Maps place + source url to pin editor form.
 */
hitteri.clipboard_ui.google_maps.place.place__GT_pin_form = (function hitteri$clipboard_ui$google_maps$place$place__GT_pin_form(place,source_url){
var map__40127 = place;
var map__40127__$1 = cljs.core.__destructure_map(map__40127);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40127__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40127__$1,new cljs.core.Keyword(null,"address","address",559499426));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40127__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40127__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"address","address",559499426),(function (){var or__5025__auto__ = address;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),"pin-orange.png",new cljs.core.Keyword(null,"longitude","longitude",-1268876372),(function (){var or__5025__auto__ = hitteri.clipboard_ui.google_maps.place.coord_text(longitude);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"latitude","latitude",394867543),(function (){var or__5025__auto__ = hitteri.clipboard_ui.google_maps.place.coord_text(latitude);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"url","url",276297046),(function (){var or__5025__auto__ = hitteri.clipboard_ui.google_maps.place.non_blank(source_url);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"image","image",-58725096),"",new cljs.core.Keyword(null,"description","description",-1428560544),""], null);
});

//# sourceMappingURL=hitteri.clipboard_ui.google_maps.place.js.map
