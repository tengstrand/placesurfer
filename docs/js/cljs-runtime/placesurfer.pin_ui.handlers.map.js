goog.provide('placesurfer.pin_ui.handlers.map');
placesurfer.pin_ui.handlers.map.popup_opts = (function placesurfer$pin_ui$handlers$map$popup_opts(s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-label","source-label",585601639),placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"en","en",88457073)),new cljs.core.Keyword("popup","source-label","popup/source-label",1481253299)], 0))], null);
});
placesurfer.pin_ui.handlers.map.pin_map_center_zoom = (9);
placesurfer.pin_ui.handlers.map.pin_focus_popup_delay_ms = (750);
placesurfer.pin_ui.handlers.map.center_on_pin_map_BANG_ = (function placesurfer$pin_ui$handlers$map$center_on_pin_map_BANG_(coords){
return placesurfer.map_ui.interface$.center_on_position_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coords,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),placesurfer.pin_ui.handlers.map.pin_map_center_zoom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true], 0)));
});
placesurfer.pin_ui.handlers.map.pin_popup_match = (function placesurfer$pin_ui$handlers$map$pin_popup_match(item){
var G__63034 = cljs.core.PersistentArrayMap.EMPTY;
var G__63034__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63034,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)):G__63034);
if(((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item) === 'number'))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__63034__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item)], 0));
} else {
return G__63034__$1;
}
});
placesurfer.pin_ui.handlers.map.pin_marker_icon_url = (function placesurfer$pin_ui$handlers$map$pin_marker_icon_url(icon){
return placesurfer.pin_ui.pure.forms.icon_url(icon);
});
placesurfer.pin_ui.handlers.map.pin_item_position = (function placesurfer$pin_ui$handlers$map$pin_item_position(item){
var icon = placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"icon","icon",1679606541),placesurfer.pin_ui.pure.forms.default_icon));
var G__63040 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711),new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154),new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686)],[new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item),placesurfer.pin_ui.handlers.map.pin_marker_icon_url(icon),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item),placesurfer.pin_ui.pure.forms.pin_icon_marker_offset(icon),new cljs.core.Keyword(null,"pin","pin",-2111774834),placesurfer.pin_ui.pure.forms.pin_icon_anchor(icon)]);
var G__63040__$1 = ((cljs.core.seq(clojure.string.trim((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63040,new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(item)):G__63040);
var G__63040__$2 = ((cljs.core.seq(clojure.string.trim((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__63040__$1,new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"agent-name","agent-name",-916187942),new cljs.core.Keyword(null,"agent-name","agent-name",-916187942).cljs$core$IFn$_invoke$arity$1(item)], 0)):G__63040__$1);
if(cljs.core.seq(clojure.string.trim((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"radii","radii",-39552793).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63040__$2,new cljs.core.Keyword(null,"area-radii","area-radii",1413411485),placesurfer.pin_ui.pure.forms.parse_radii(new cljs.core.Keyword(null,"radii","radii",-39552793).cljs$core$IFn$_invoke$arity$1(item)));
} else {
return G__63040__$2;
}
});
placesurfer.pin_ui.handlers.map.stored_pins_for_view = (function placesurfer$pin_ui$handlers$map$stored_pins_for_view(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.pure.rows.separator_item_QMARK_,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s)));
} else {
return placesurfer.pin_ui.pure.rows.pins_for_country(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(s),placesurfer.pin_ui.pure.rows.country_slug_for_view(s));
}
});
placesurfer.pin_ui.handlers.map.saved_pin_positions = (function placesurfer$pin_ui$handlers$map$saved_pin_positions(s){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.handlers.map.pin_item_position,placesurfer.pin_ui.handlers.map.stored_pins_for_view(s));
});
placesurfer.pin_ui.handlers.map.pin_form_position = (function placesurfer$pin_ui$handlers$map$pin_form_position(s){
var temp__5825__auto__ = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__5825__auto__)){
var form = temp__5825__auto__;
var temp__5825__auto____$1 = placesurfer.pin_ui.pure.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.truth_(temp__5825__auto____$1)){
var lon = temp__5825__auto____$1;
var temp__5825__auto____$2 = placesurfer.pin_ui.pure.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.truth_(temp__5825__auto____$2)){
var lat = temp__5825__auto____$2;
var icon = placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(form));
var G__63045 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"marker-icon-url","marker-icon-url",1866421282),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"marker-offset","marker-offset",-2091384711),new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154),new cljs.core.Keyword(null,"marker-anchor","marker-anchor",-1131563686)],[new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(form),placesurfer.pin_ui.handlers.map.pin_marker_icon_url(icon),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form),lon,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(form),lat,placesurfer.pin_ui.pure.forms.pin_icon_marker_offset(icon),new cljs.core.Keyword(null,"pin","pin",-2111774834),placesurfer.pin_ui.pure.forms.pin_icon_anchor(icon)]);
var G__63045__$1 = ((cljs.core.seq(clojure.string.trim((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63045,new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(form)):G__63045);
var G__63045__$2 = ((cljs.core.seq(clojure.string.trim((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})())))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__63045__$1,new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259),new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259).cljs$core$IFn$_invoke$arity$1(form),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"agent-name","agent-name",-916187942),new cljs.core.Keyword(null,"agent-name","agent-name",-916187942).cljs$core$IFn$_invoke$arity$1(form)], 0)):G__63045__$1);
if(cljs.core.seq(clojure.string.trim((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"radii","radii",-39552793).cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63045__$2,new cljs.core.Keyword(null,"area-radii","area-radii",1413411485),placesurfer.pin_ui.pure.forms.parse_radii(new cljs.core.Keyword(null,"radii","radii",-39552793).cljs$core$IFn$_invoke$arity$1(form)));
} else {
return G__63045__$2;
}
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
placesurfer.pin_ui.handlers.map.coords_match_QMARK_ = (function placesurfer$pin_ui$handlers$map$coords_match_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(b))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(b))));
});
placesurfer.pin_ui.handlers.map.merge_editor_form_into_pins = (function placesurfer$pin_ui$handlers$map$merge_editor_form_into_pins(saved,s){
if(cljs.core.not((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"pin-editor-inline?","pin-editor-inline?",766617935).cljs$core$IFn$_invoke$arity$1(s);
}
})())){
return saved;
} else {
var draft = placesurfer.pin_ui.handlers.map.pin_form_position(s);
if(cljs.core.not(draft)){
return saved;
} else {
var G__63050 = new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186).cljs$core$IFn$_invoke$arity$1(s);
var G__63050__$1 = (((G__63050 instanceof cljs.core.Keyword))?G__63050.fqn:null);
switch (G__63050__$1) {
case "edit":
var temp__5823__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
var overlay = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(draft,new cljs.core.Keyword(null,"id","id",-1388402092),id);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63047_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__63047_SHARP_));
}),saved)),overlay);
} else {
return saved;
}

break;
default:
if(cljs.core.truth_(cljs.core.some((function (p1__63048_SHARP_){
return placesurfer.pin_ui.handlers.map.coords_match_QMARK_(draft,p1__63048_SHARP_);
}),saved))){
return saved;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(saved,draft);
}

}
}
}
});
placesurfer.pin_ui.handlers.map.selected_pin_item = (function placesurfer$pin_ui$handlers$map$selected_pin_item(s){
var temp__5825__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return placesurfer.pin_ui.pure.rows.find_by_id(new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100).cljs$core$IFn$_invoke$arity$1(s),id);
} else {
return null;
}
});
placesurfer.pin_ui.handlers.map.pin_already_on_map_QMARK_ = (function placesurfer$pin_ui$handlers$map$pin_already_on_map_QMARK_(positions,pin_pos){
var temp__5825__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pin_pos);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return cljs.core.some((function (p1__63051_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__63051_SHARP_));
}),positions);
} else {
return null;
}
});
/**
 * Topic markers for the current view plus saved pins in the current country.
 */
placesurfer.pin_ui.handlers.map.main_map_positions = (function placesurfer$pin_ui$handlers$map$main_map_positions(s){
var base = cljs.core.vec(placesurfer.app_ui.interface$.state.visible_positions(s));
var pin_overlays = placesurfer.pin_ui.handlers.map.merge_editor_form_into_pins(placesurfer.pin_ui.handlers.map.saved_pin_positions(s),s);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pin_pos){
if(cljs.core.truth_(placesurfer.pin_ui.handlers.map.pin_already_on_map_QMARK_(acc,pin_pos))){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,pin_pos);
}
}),base,pin_overlays);
});
placesurfer.pin_ui.handlers.map.position_matches_click_QMARK_ = (function placesurfer$pin_ui$handlers$map$position_matches_click_QMARK_(click,pin_pos){
var or__5025__auto__ = (function (){var and__5023__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(click);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pin_pos);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(click)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pin_pos)));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(click) === 'number') && (((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(click) === 'number') && (((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(pin_pos) === 'number') && (((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(pin_pos) === 'number') && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(click),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(pin_pos))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(click),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(pin_pos))))))))))));
}
});
placesurfer.pin_ui.handlers.map.normalize_click_position = (function placesurfer$pin_ui$handlers$map$normalize_click_position(raw_position){
var position = ((cljs.core.map_QMARK_(raw_position))?raw_position:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(raw_position,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
var lon = placesurfer.pin_ui.pure.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position));
var lat = placesurfer.pin_ui.pure.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position));
var G__63065 = position;
var G__63065__$1 = (cljs.core.truth_(lon)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63065,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon):G__63065);
if(cljs.core.truth_(lat)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63065__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat);
} else {
return G__63065__$1;
}
});
placesurfer.pin_ui.handlers.map.main_map_pin_positions = (function placesurfer$pin_ui$handlers$map$main_map_pin_positions(s){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63066_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154).cljs$core$IFn$_invoke$arity$1(p1__63066_SHARP_));
}),placesurfer.pin_ui.handlers.map.main_map_positions(s));
});
/**
 * Return the saved pin map overlay matching a marker click, if any.
 */
placesurfer.pin_ui.handlers.map.main_map_pin_for_click = (function placesurfer$pin_ui$handlers$map$main_map_pin_for_click(s,raw_position){
var click = placesurfer.pin_ui.handlers.map.normalize_click_position(raw_position);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63067_SHARP_){
return placesurfer.pin_ui.handlers.map.position_matches_click_QMARK_(click,p1__63067_SHARP_);
}),placesurfer.pin_ui.handlers.map.main_map_pin_positions(s)));
});
/**
 * True when `raw-position` matches a saved pin currently drawn on the main map.
 */
placesurfer.pin_ui.handlers.map.saved_pin_on_main_map_QMARK_ = (function placesurfer$pin_ui$handlers$map$saved_pin_on_main_map_QMARK_(s,raw_position){
return cljs.core.boolean$(placesurfer.pin_ui.handlers.map.main_map_pin_for_click(s,raw_position));
});
/**
 * Saved pins (plus inline editor draft) without topic markers.
 */
placesurfer.pin_ui.handlers.map.pins_only_map_positions = (function placesurfer$pin_ui$handlers$map$pins_only_map_positions(s){
return cljs.core.vec(placesurfer.pin_ui.handlers.map.merge_editor_form_into_pins(placesurfer.pin_ui.handlers.map.saved_pin_positions(s),s));
});
/**
 * Map markers for the dedicated pin page: active topics plus all saved pins.
 */
placesurfer.pin_ui.handlers.map.pin_map_positions = (function placesurfer$pin_ui$handlers$map$pin_map_positions(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pin-show-topics-on-map?","pin-show-topics-on-map?",744248117).cljs$core$IFn$_invoke$arity$2(s,true))){
return placesurfer.pin_ui.handlers.map.main_map_positions(s);
} else {
return placesurfer.pin_ui.handlers.map.pins_only_map_positions(s);
}
} else {
return placesurfer.pin_ui.handlers.map.pins_only_map_positions(s);
}
});
placesurfer.pin_ui.handlers.map.sync_pin_map_BANG_ = (function placesurfer$pin_ui$handlers$map$sync_pin_map_BANG_(var_args){
var G__63069 = arguments.length;
switch (G__63069) {
case 0:
return placesurfer.pin_ui.handlers.map.sync_pin_map_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return placesurfer.pin_ui.handlers.map.sync_pin_map_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.pin_ui.handlers.map.sync_pin_map_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return placesurfer.pin_ui.handlers.map.sync_pin_map_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(placesurfer.pin_ui.handlers.map.sync_pin_map_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__63071){
var map__63072 = p__63071;
var map__63072__$1 = cljs.core.__destructure_map(map__63072);
var recenter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63072__$1,new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true);
var open_popup_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63072__$1,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185));
placesurfer.map_ui.interface$.apply_state_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"positions","positions",-1380538434),placesurfer.pin_ui.handlers.map.pin_map_positions(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)),new cljs.core.Keyword(null,"fit?","fit?",1773758200),false,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),false,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185),open_popup_for,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),placesurfer.pin_ui.handlers.map.popup_opts(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))], null));

if(cljs.core.truth_(recenter_QMARK_)){
var temp__5825__auto__ = new cljs.core.Keyword(null,"pin-form","pin-form",1370425130).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto__)){
var form = temp__5825__auto__;
var temp__5825__auto____$1 = placesurfer.pin_ui.pure.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.truth_(temp__5825__auto____$1)){
var lon = temp__5825__auto____$1;
var temp__5825__auto____$2 = placesurfer.pin_ui.pure.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.truth_(temp__5825__auto____$2)){
var lat = temp__5825__auto____$2;
return placesurfer.pin_ui.handlers.map.center_on_pin_map_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat], null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(placesurfer.pin_ui.handlers.map.sync_pin_map_BANG_.cljs$lang$maxFixedArity = 1);

placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_ = (function placesurfer$pin_ui$handlers$map$schedule_pin_map_sync_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___63181 = arguments.length;
var i__5750__auto___63182 = (0);
while(true){
if((i__5750__auto___63182 < len__5749__auto___63181)){
args__5755__auto__.push((arguments[i__5750__auto___63182]));

var G__63184 = (i__5750__auto___63182 + (1));
i__5750__auto___63182 = G__63184;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__63074){
var vec__63075 = p__63074;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63075,(0),null);
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))){
return placesurfer.pin_ui.handlers.map.sync_pin_map_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true], null),(function (){var or__5025__auto__ = opts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))) && (placesurfer.pin_ui.pure.update_context.update_pins_mode_QMARK_(s)))){
return placesurfer.app_ui.interface$.effects.schedule_update_map_pin_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
} else {
return null;
}
}
}));

(placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$lang$applyTo = (function (seq63073){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63073));
}));

placesurfer.pin_ui.handlers.map.schedule_pin_popup_BANG_ = (function placesurfer$pin_ui$handlers$map$schedule_pin_popup_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___63189 = arguments.length;
var i__5750__auto___63190 = (0);
while(true){
if((i__5750__auto___63190 < len__5749__auto___63189)){
args__5755__auto__.push((arguments[i__5750__auto___63190]));

var G__63191 = (i__5750__auto___63190 + (1));
i__5750__auto___63190 = G__63191;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return placesurfer.pin_ui.handlers.map.schedule_pin_popup_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(placesurfer.pin_ui.handlers.map.schedule_pin_popup_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (match,p__63086){
var vec__63087 = p__63086;
var map__63090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63087,(0),null);
var map__63090__$1 = cljs.core.__destructure_map(map__63090);
var attempt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63090__$1,new cljs.core.Keyword(null,"attempt","attempt",1611761308),(0));
var delay_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63090__$1,new cljs.core.Keyword(null,"delay-ms","delay-ms",-59253516),(150));
if((attempt <= (8))){
if(cljs.core.truth_(placesurfer.map_ui.interface$.open_marker_popup_BANG_(match))){
return null;
} else {
return setTimeout((function (){
return placesurfer.pin_ui.handlers.map.schedule_pin_popup_BANG_.cljs$core$IFn$_invoke$arity$variadic(match,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attempt","attempt",1611761308),(attempt + (1)),new cljs.core.Keyword(null,"delay-ms","delay-ms",-59253516),delay_ms], null)], 0));
}),delay_ms);
}
} else {
return null;
}
}));

(placesurfer.pin_ui.handlers.map.schedule_pin_popup_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(placesurfer.pin_ui.handlers.map.schedule_pin_popup_BANG_.cljs$lang$applyTo = (function (seq63080){
var G__63081 = cljs.core.first(seq63080);
var seq63080__$1 = cljs.core.next(seq63080);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63081,seq63080__$1);
}));

/**
 * Open the popup for `:pin-selected-id` on the current map, retrying until mounted.
 */
placesurfer.pin_ui.handlers.map.schedule_selected_pin_popup_BANG_ = (function placesurfer$pin_ui$handlers$map$schedule_selected_pin_popup_BANG_(){
var temp__5825__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return placesurfer.pin_ui.handlers.map.schedule_pin_popup_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
} else {
return null;
}
});
/**
 * True when `:pin-selected-id` refers to a pin currently drawn on the main map.
 */
placesurfer.pin_ui.handlers.map.selected_pin_on_main_map_QMARK_ = (function placesurfer$pin_ui$handlers$map$selected_pin_on_main_map_QMARK_(s){
return cljs.core.boolean$((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return cljs.core.some((function (p1__63092_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__63092_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154).cljs$core$IFn$_invoke$arity$1(p1__63092_SHARP_))));
}),placesurfer.pin_ui.handlers.map.main_map_positions(s));
} else {
return null;
}
})());
});
/**
 * Fly to the selected pin on the main map and open its popup.
 */
placesurfer.pin_ui.handlers.map.schedule_focus_selected_pin_on_main_map_BANG_ = (function placesurfer$pin_ui$handlers$map$schedule_focus_selected_pin_on_main_map_BANG_(var_args){
var G__63094 = arguments.length;
switch (G__63094) {
case 0:
return placesurfer.pin_ui.handlers.map.schedule_focus_selected_pin_on_main_map_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return placesurfer.pin_ui.handlers.map.schedule_focus_selected_pin_on_main_map_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.pin_ui.handlers.map.schedule_focus_selected_pin_on_main_map_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return placesurfer.pin_ui.handlers.map.schedule_focus_selected_pin_on_main_map_BANG_.cljs$core$IFn$_invoke$arity$1((0));
}));

(placesurfer.pin_ui.handlers.map.schedule_focus_selected_pin_on_main_map_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (attempt){
if((attempt <= (10))){
var temp__5825__auto__ = placesurfer.pin_ui.handlers.map.selected_pin_item(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
if(placesurfer.pin_ui.handlers.map.selected_pin_on_main_map_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state))){
if(((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item) === 'number'))){
var coords = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item)], null);
var match = placesurfer.pin_ui.handlers.map.pin_popup_match(item);
placesurfer.pin_ui.handlers.map.center_on_pin_map_BANG_(coords);

if(cljs.core.truth_(placesurfer.map_ui.interface$.open_marker_popup_BANG_(match))){
return null;
} else {
return setTimeout((function (){
return placesurfer.pin_ui.handlers.map.schedule_focus_selected_pin_on_main_map_BANG_.cljs$core$IFn$_invoke$arity$1((attempt + (1)));
}),(placesurfer.pin_ui.handlers.map.pin_focus_popup_delay_ms + (attempt * (100))));
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(placesurfer.pin_ui.handlers.map.schedule_focus_selected_pin_on_main_map_BANG_.cljs$lang$maxFixedArity = 1);

placesurfer.pin_ui.handlers.map.sync_map_for_current_page_BANG_ = (function placesurfer$pin_ui$handlers$map$sync_map_for_current_page_BANG_(opts){
var s = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),page)){
return placesurfer.pin_ui.handlers.map.sync_pin_map_BANG_.cljs$core$IFn$_invoke$arity$1(opts);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),page)) && (placesurfer.pin_ui.pure.update_context.update_pins_mode_QMARK_(s)))){
return placesurfer.app_ui.interface$.effects.sync_update_map_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null),(function (){var or__5025__auto__ = opts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0))], 0));
} else {
return placesurfer.map_ui.interface$.apply_state_BANG_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"positions","positions",-1380538434),placesurfer.pin_ui.handlers.map.main_map_positions(s),new cljs.core.Keyword(null,"fit?","fit?",1773758200),false,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),false,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),placesurfer.pin_ui.handlers.map.popup_opts(s)], null),cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185)], null))], 0)));

}
}
});
placesurfer.pin_ui.handlers.map.open_popup_on_focus_QMARK_ = (function placesurfer$pin_ui$handlers$map$open_popup_on_focus_QMARK_(s){
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s))) && (placesurfer.pin_ui.pure.update_context.update_pins_mode_QMARK_(s)))));
});
placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_ = (function placesurfer$pin_ui$handlers$map$focus_pin_on_map_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___63207 = arguments.length;
var i__5750__auto___63208 = (0);
while(true){
if((i__5750__auto___63208 < len__5749__auto___63207)){
args__5755__auto__.push((arguments[i__5750__auto___63208]));

var G__63209 = (i__5750__auto___63208 + (1));
i__5750__auto___63208 = G__63209;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (item,p__63102){
var vec__63103 = p__63102;
var map__63106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63103,(0),null);
var map__63106__$1 = cljs.core.__destructure_map(map__63106);
var open_popup_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63106__$1,new cljs.core.Keyword(null,"open-popup?","open-popup?",-511246520));
if(cljs.core.truth_((function (){var and__5023__auto__ = item;
if(cljs.core.truth_(and__5023__auto__)){
return ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item) === 'number'));
} else {
return and__5023__auto__;
}
})())){
var open_popup_QMARK__STAR_ = (((!((open_popup_QMARK_ == null))))?cljs.core.boolean$(open_popup_QMARK_):placesurfer.pin_ui.handlers.map.open_popup_on_focus_QMARK_(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)));
var match = placesurfer.pin_ui.handlers.map.pin_popup_match(item);
placesurfer.pin_ui.handlers.map.sync_map_for_current_page_BANG_((function (){var G__63107 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),false], null);
if(open_popup_QMARK__STAR_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63107,new cljs.core.Keyword(null,"open-popup-for","open-popup-for",1279326185),match);
} else {
return G__63107;
}
})());

placesurfer.pin_ui.handlers.map.center_on_pin_map_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(item)], null));

if(open_popup_QMARK__STAR_){
return setTimeout((function (){
return placesurfer.pin_ui.handlers.map.schedule_pin_popup_BANG_(match);
}),placesurfer.pin_ui.handlers.map.pin_focus_popup_delay_ms);
} else {
return null;
}
} else {
return null;
}
}));

(placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(placesurfer.pin_ui.handlers.map.focus_pin_on_map_BANG_.cljs$lang$applyTo = (function (seq63099){
var G__63100 = cljs.core.first(seq63099);
var seq63099__$1 = cljs.core.next(seq63099);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63100,seq63099__$1);
}));

placesurfer.pin_ui.handlers.map.schedule_center_on_pin_BANG_ = (function placesurfer$pin_ui$handlers$map$schedule_center_on_pin_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___63215 = arguments.length;
var i__5750__auto___63216 = (0);
while(true){
if((i__5750__auto___63216 < len__5749__auto___63215)){
args__5755__auto__.push((arguments[i__5750__auto___63216]));

var G__63218 = (i__5750__auto___63216 + (1));
i__5750__auto___63216 = G__63218;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return placesurfer.pin_ui.handlers.map.schedule_center_on_pin_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(placesurfer.pin_ui.handlers.map.schedule_center_on_pin_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (position,p__63118){
var vec__63123 = p__63118;
var map__63126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63123,(0),null);
var map__63126__$1 = cljs.core.__destructure_map(map__63126);
var delay_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63126__$1,new cljs.core.Keyword(null,"delay-ms","delay-ms",-59253516),(80));
if(((cljs.core.map_QMARK_(position)) && (((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position) === 'number'))))){
return setTimeout((function (){
return placesurfer.pin_ui.handlers.map.center_on_pin_map_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position)], null));
}),delay_ms);
} else {
return null;
}
}));

(placesurfer.pin_ui.handlers.map.schedule_center_on_pin_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(placesurfer.pin_ui.handlers.map.schedule_center_on_pin_BANG_.cljs$lang$applyTo = (function (seq63108){
var G__63109 = cljs.core.first(seq63108);
var seq63108__$1 = cljs.core.next(seq63108);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63109,seq63108__$1);
}));

placesurfer.pin_ui.handlers.map.sync_marker_pick_handler_BANG_ = (function placesurfer$pin_ui$handlers$map$sync_marker_pick_handler_BANG_(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)))){
return placesurfer.map_ui.interface$.set_marker_pick_handler_BANG_(null);
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.pin_ui.handlers.map.js.map
