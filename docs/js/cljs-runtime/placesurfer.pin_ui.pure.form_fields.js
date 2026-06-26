goog.provide('placesurfer.pin_ui.pure.form_fields');
placesurfer.pin_ui.pure.form_fields.name_row = (function placesurfer$pin_ui$pure$form_fields$name_row(place_name,set_pin_name_BANG_,t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"pin-name"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","name","common/name",925592102)) : t.call(null,new cljs.core.Keyword("common","name","common/name",925592102)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#pin-name.update-input","input#pin-name.update-input",49690443),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),placesurfer.pin_ui.pure.forms.coerce_text(place_name),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__47763 = e.target.value;
return (set_pin_name_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pin_name_BANG_.cljs$core$IFn$_invoke$arity$1(G__47763) : set_pin_name_BANG_.call(null,G__47763));
})], null)], null)], null)], null)], null);
});
placesurfer.pin_ui.pure.form_fields.location_row = (function placesurfer$pin_ui$pure$form_fields$location_row(location,set_pin_address_BANG_,t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"pin-address"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","location","common/location",1031174855)) : t.call(null,new cljs.core.Keyword("common","location","common/location",1031174855)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#pin-address.update-input","input#pin-address.update-input",1642884030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),placesurfer.pin_ui.pure.forms.coerce_text(location),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__47764 = e.target.value;
return (set_pin_address_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pin_address_BANG_.cljs$core$IFn$_invoke$arity$1(G__47764) : set_pin_address_BANG_.call(null,G__47764));
})], null)], null)], null)], null)], null);
});
placesurfer.pin_ui.pure.form_fields.close_icon_dropdown_BANG_ = (function placesurfer$pin_ui$pure$form_fields$close_icon_dropdown_BANG_(e){
var temp__5825__auto__ = e.target.closest("details");
if(cljs.core.truth_(temp__5825__auto__)){
var details = temp__5825__auto__;
return details.removeAttribute("open");
} else {
return null;
}
});
placesurfer.pin_ui.pure.form_fields.icon_dropdown_option = (function placesurfer$pin_ui$pure$form_fields$icon_dropdown_option(filename,selected_QMARK_,set_pin_icon_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"pin-icon-dropdown-option pin-icon-dropdown-option--selected":"pin-icon-dropdown-option"),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),filename,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.preventDefault();

(set_pin_icon_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pin_icon_BANG_.cljs$core$IFn$_invoke$arity$1(filename) : set_pin_icon_BANG_.call(null,filename));

return placesurfer.pin_ui.pure.form_fields.close_icon_dropdown_BANG_(e);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),placesurfer.pin_ui.pure.forms.icon_url(filename),new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null);
});
placesurfer.pin_ui.pure.form_fields.icon_row = (function placesurfer$pin_ui$pure$form_fields$icon_row(icon,set_pin_icon_BANG_,t){
var selected_icon = placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1(icon);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","icon","pin/icon",1679759748)) : t.call(null,new cljs.core.Keyword("pin","icon","pin/icon",1679759748)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details.pin-icon-dropdown","details.pin-icon-dropdown",1130622721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary.pin-icon-dropdown-trigger","summary.pin-icon-dropdown-trigger",247169410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),placesurfer.pin_ui.pure.forms.icon_url(selected_icon),new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-icon-dropdown-menu","div.pin-icon-dropdown-menu",144588882),(function (){var iter__5503__auto__ = (function placesurfer$pin_ui$pure$form_fields$icon_row_$_iter__47765(s__47766){
return (new cljs.core.LazySeq(null,(function (){
var s__47766__$1 = s__47766;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47766__$1);
if(temp__5825__auto__){
var s__47766__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47766__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__47766__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__47768 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__47767 = (0);
while(true){
if((i__47767 < size__5502__auto__)){
var filename = cljs.core._nth(c__5501__auto__,i__47767);
cljs.core.chunk_append(b__47768,placesurfer.pin_ui.pure.form_fields.icon_dropdown_option(filename,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filename,selected_icon),set_pin_icon_BANG_));

var G__47780 = (i__47767 + (1));
i__47767 = G__47780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47768),placesurfer$pin_ui$pure$form_fields$icon_row_$_iter__47765(cljs.core.chunk_rest(s__47766__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47768),null);
}
} else {
var filename = cljs.core.first(s__47766__$2);
return cljs.core.cons(placesurfer.pin_ui.pure.form_fields.icon_dropdown_option(filename,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filename,selected_icon),set_pin_icon_BANG_),placesurfer$pin_ui$pure$form_fields$icon_row_$_iter__47765(cljs.core.rest(s__47766__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(placesurfer.pin_ui.pure.forms.icon_options());
})()], null)], null)], null)], null);
});
placesurfer.pin_ui.pure.form_fields.longitude_row = (function placesurfer$pin_ui$pure$form_fields$longitude_row(longitude,set_pin_longitude_BANG_,commit_pin_longitude_BANG_,t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"pin-longitude"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","longitude","common/longitude",-2061610691)) : t.call(null,new cljs.core.Keyword("common","longitude","common/longitude",-2061610691)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#pin-longitude.update-input","input#pin-longitude.update-input",-646842611),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"inputmode","inputmode",118925090),"decimal",new cljs.core.Keyword(null,"value","value",305978217),placesurfer.pin_ui.pure.forms.coerce_text(longitude),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__47769 = e.target.value;
return (set_pin_longitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pin_longitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__47769) : set_pin_longitude_BANG_.call(null,G__47769));
}),new cljs.core.Keyword(null,"blur","blur",-453500461),(function (e){
var G__47770 = e.target.value;
return (commit_pin_longitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? commit_pin_longitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__47770) : commit_pin_longitude_BANG_.call(null,G__47770));
})], null)], null)], null)], null)], null);
});
placesurfer.pin_ui.pure.form_fields.latitude_row = (function placesurfer$pin_ui$pure$form_fields$latitude_row(latitude,set_pin_latitude_BANG_,commit_pin_latitude_BANG_,t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"pin-latitude"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","latitude","common/latitude",742931812)) : t.call(null,new cljs.core.Keyword("common","latitude","common/latitude",742931812)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#pin-latitude.update-input","input#pin-latitude.update-input",1257981005),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"inputmode","inputmode",118925090),"decimal",new cljs.core.Keyword(null,"value","value",305978217),placesurfer.pin_ui.pure.forms.coerce_text(latitude),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__47771 = e.target.value;
return (set_pin_latitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pin_latitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__47771) : set_pin_latitude_BANG_.call(null,G__47771));
}),new cljs.core.Keyword(null,"blur","blur",-453500461),(function (e){
var G__47772 = e.target.value;
return (commit_pin_latitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? commit_pin_latitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__47772) : commit_pin_latitude_BANG_.call(null,G__47772));
})], null)], null)], null)], null)], null);
});
placesurfer.pin_ui.pure.form_fields.url_row = (function placesurfer$pin_ui$pure$form_fields$url_row(url,set_pin_url_BANG_,t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"pin-url"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","url","common/url",1136299937)) : t.call(null,new cljs.core.Keyword("common","url","common/url",1136299937)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#pin-url.update-input","input#pin-url.update-input",1753839589),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),placesurfer.pin_ui.pure.forms.coerce_text(url),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__47773 = e.target.value;
return (set_pin_url_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pin_url_BANG_.cljs$core$IFn$_invoke$arity$1(G__47773) : set_pin_url_BANG_.call(null,G__47773));
})], null)], null)], null)], null)], null);
});
placesurfer.pin_ui.pure.form_fields.image_row = (function placesurfer$pin_ui$pure$form_fields$image_row(image,set_pin_image_BANG_,t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"pin-image"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","image-url","pin/image-url",-1064640565)) : t.call(null,new cljs.core.Keyword("pin","image-url","pin/image-url",-1064640565)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#pin-image.update-input","input#pin-image.update-input",1123890063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),placesurfer.pin_ui.pure.forms.coerce_text(image),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__47774 = e.target.value;
return (set_pin_image_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pin_image_BANG_.cljs$core$IFn$_invoke$arity$1(G__47774) : set_pin_image_BANG_.call(null,G__47774));
})], null)], null)], null)], null)], null);
});
placesurfer.pin_ui.pure.form_fields.agent_url_row = (function placesurfer$pin_ui$pure$form_fields$agent_url_row(agent_url,set_pin_agent_url_BANG_,t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"pin-agent-url"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","agent-url","pin/agent-url",-1203892790)) : t.call(null,new cljs.core.Keyword("pin","agent-url","pin/agent-url",-1203892790)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#pin-agent-url.update-input","input#pin-agent-url.update-input",805383505),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),placesurfer.pin_ui.pure.forms.coerce_text(agent_url),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__47775 = e.target.value;
return (set_pin_agent_url_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pin_agent_url_BANG_.cljs$core$IFn$_invoke$arity$1(G__47775) : set_pin_agent_url_BANG_.call(null,G__47775));
})], null)], null)], null)], null)], null);
});
placesurfer.pin_ui.pure.form_fields.description_row = (function placesurfer$pin_ui$pure$form_fields$description_row(props){
var map__47776 = props;
var map__47776__$1 = cljs.core.__destructure_map(map__47776);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47776__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var description_edit_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47776__$1,new cljs.core.Keyword(null,"description-edit-mode","description-edit-mode",-1941940982));
var description_sync_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47776__$1,new cljs.core.Keyword(null,"description-sync-token","description-sync-token",-1307199437));
var set_pin_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47776__$1,new cljs.core.Keyword(null,"set-pin-description!","set-pin-description!",-891657600));
var toggle_description_edit_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47776__$1,new cljs.core.Keyword(null,"toggle-description-edit-mode!","toggle-description-edit-mode!",-361122656));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47776__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return placesurfer.html.interface$.description_field.description_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"pin-description",new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"mode","mode",654403691),description_edit_mode,new cljs.core.Keyword(null,"sync-token","sync-token",-2023041987),description_sync_token,new cljs.core.Keyword(null,"set-description!","set-description!",-1732307848),set_pin_description_BANG_,new cljs.core.Keyword(null,"toggle-mode!","toggle-mode!",953048551),toggle_description_edit_mode_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null)], 0));
});
placesurfer.pin_ui.pure.form_fields.field_rows = (function placesurfer$pin_ui$pure$form_fields$field_rows(props){
var map__47778 = props;
var map__47778__$1 = cljs.core.__destructure_map(map__47778);
var show_pin_group_field_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"show-pin-group-field?","show-pin-group-field?",2032273049));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47778__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var commit_pin_longitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"commit-pin-longitude!","commit-pin-longitude!",-1228268614));
var pin_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100));
var pin_editor_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186));
var set_pin_url_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"set-pin-url!","set-pin-url!",-248892450));
var set_pin_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"set-pin-description!","set-pin-description!",-891657600));
var toggle_description_edit_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"toggle-description-edit-mode!","toggle-description-edit-mode!",-361122656));
var set_pin_address_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"set-pin-address!","set-pin-address!",943678529));
var set_pin_name_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"set-pin-name!","set-pin-name!",-689410779));
var set_pin_group_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"set-pin-group!","set-pin-group!",928267686));
var set_pin_icon_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"set-pin-icon!","set-pin-icon!",1169299015));
var set_pin_latitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"set-pin-latitude!","set-pin-latitude!",1547178985));
var pin_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130));
var description_edit_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"description-edit-mode","description-edit-mode",-1941940982));
var pin_selected_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228));
var commit_pin_latitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"commit-pin-latitude!","commit-pin-latitude!",-2003886132));
var set_pin_agent_url_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"set-pin-agent-url!","set-pin-agent-url!",1449358350));
var set_pin_longitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"set-pin-longitude!","set-pin-longitude!",1371393039));
var pin_group_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"pin-group-options","pin-group-options",550206512));
var description_sync_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"description-sync-token","description-sync-token",-1307199437));
var pin_group_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"pin-group-id","pin-group-id",-380160105));
var set_pin_image_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"set-pin-image!","set-pin-image!",1564686327));
var map__47779 = pin_form;
var map__47779__$1 = cljs.core.__destructure_map(map__47779);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47779__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47779__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47779__$1,new cljs.core.Keyword(null,"url","url",276297046));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47779__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var agent_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47779__$1,new cljs.core.Keyword(null,"agent-url","agent-url",-1202660259));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47779__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47779__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47779__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var place_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pin_form);
var selected_icon = placesurfer.pin_ui.pure.forms.normalize_icon.cljs$core$IFn$_invoke$arity$1(icon);
var new_mode_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),pin_editor_mode);
var group_label = (cljs.core.truth_(pin_group_id)?(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47777_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pin_group_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47777_SHARP_));
}),pin_group_options)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "-";
}
})():"-");
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [placesurfer.pin_ui.pure.form_fields.name_row(place_name,set_pin_name_BANG_,t),placesurfer.pin_ui.pure.form_fields.location_row(location__$1,set_pin_address_BANG_,t),(cljs.core.truth_((function (){var and__5023__auto__ = show_pin_group_field_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return set_pin_group_BANG_;
} else {
return and__5023__auto__;
}
})())?placesurfer.pin_ui.pure.group_field.group_row(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"group-id","group-id",-1316082778),pin_group_id,new cljs.core.Keyword(null,"group-options","group-options",-1097886023),pin_group_options,new cljs.core.Keyword(null,"selected-label","selected-label",-902280703),group_label,new cljs.core.Keyword(null,"set-pin-group!","set-pin-group!",928267686),set_pin_group_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null)):null),placesurfer.pin_ui.pure.form_fields.icon_row(selected_icon,set_pin_icon_BANG_,t),placesurfer.pin_ui.pure.form_fields.longitude_row(longitude,set_pin_longitude_BANG_,commit_pin_longitude_BANG_,t),placesurfer.pin_ui.pure.form_fields.latitude_row(latitude,set_pin_latitude_BANG_,commit_pin_latitude_BANG_,t),((new_mode_QMARK_)?placesurfer.pin_ui.pure.form_fields.url_row(url,set_pin_url_BANG_,t):null),placesurfer.pin_ui.pure.form_fields.image_row(image,set_pin_image_BANG_,t),placesurfer.pin_ui.pure.form_fields.agent_url_row(agent_url,set_pin_agent_url_BANG_,t),placesurfer.pin_ui.pure.form_fields.description_row(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"description","description",-1428560544),description,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"t","t",-1397832519),t], 0)))], null));
});

//# sourceMappingURL=placesurfer.pin_ui.pure.form_fields.js.map
