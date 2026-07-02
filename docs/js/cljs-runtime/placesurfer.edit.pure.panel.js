goog.provide('placesurfer.edit.pure.panel');
placesurfer.edit.pure.panel.field_error = (function placesurfer$edit$pure$panel$field_error(field_errors,k){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(field_errors,k);
if(cljs.core.truth_(temp__5825__auto__)){
var err = temp__5825__auto__;
var temp__5825__auto____$1 = placesurfer.map_panel_ui.interface$.status.display_status_text(err);
if(cljs.core.truth_(temp__5825__auto____$1)){
var text = temp__5825__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.update-field-error","p.update-field-error",716285421),text], null);
} else {
return null;
}
} else {
return null;
}
});
placesurfer.edit.pure.panel.update_row_map_hover_handlers = (function placesurfer$edit$pure$panel$update_row_map_hover_handlers(values){
var map__96405 = values;
var map__96405__$1 = cljs.core.__destructure_map(map__96405);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96405__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96405__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),(function (_){
return placesurfer.map_ui.interface$.set_marker_row_emphasis_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude], null));
}),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),(function (_){
return placesurfer.map_ui.interface$.clear_marker_row_emphasis_BANG_();
})], null);
} else {
return null;
}
});
placesurfer.edit.pure.panel.change_count_box = (function placesurfer$edit$pure$panel$change_count_box(kind,n,t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.update-change-count","span.update-change-count",1004497295),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["update-change-count--",cljs.core.name(kind)].join(''),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(function (){var G__96406 = kind;
var G__96406__$1 = (((G__96406 instanceof cljs.core.Keyword))?G__96406.fqn:null);
switch (G__96406__$1) {
case "deleted":
var G__96407 = new cljs.core.Keyword("update","changes-deleted","update/changes-deleted",-1822170531);
var G__96408 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),n], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__96407,G__96408) : t.call(null,G__96407,G__96408));

break;
case "edited":
var G__96409 = new cljs.core.Keyword("update","changes-edited","update/changes-edited",-540506408);
var G__96410 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),n], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__96409,G__96410) : t.call(null,G__96409,G__96410));

break;
case "added":
var G__96411 = new cljs.core.Keyword("update","changes-added","update/changes-added",-751062495);
var G__96412 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),n], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__96411,G__96412) : t.call(null,G__96411,G__96412));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__96406__$1)].join('')));

}
})()], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)], null);
});
placesurfer.edit.pure.panel.map_panel = (function placesurfer$edit$pure$panel$map_panel(p__96413){
var map__96414 = p__96413;
var map__96414__$1 = cljs.core.__destructure_map(map__96414);
var props = map__96414__$1;
var mount_update_map_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96414__$1,new cljs.core.Keyword(null,"mount-update-map-fn","mount-update-map-fn",1336367187));
var unmount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96414__$1,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601));
var pins_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96414__$1,new cljs.core.Keyword(null,"pins-mode?","pins-mode?",-1296026234));
var update_add_pin_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96414__$1,new cljs.core.Keyword(null,"update-add-pin-mode?","update-add-pin-mode?",-2058851986));
var toggle_add_pin_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96414__$1,new cljs.core.Keyword(null,"toggle-add-pin-mode!","toggle-add-pin-mode!",1920350064));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96414__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-map-panel","div.update-map-panel",-1655291449),placesurfer.map_panel_ui.interface$.container.container(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element-id","element-id",798606230),"update-map",new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372),mount_update_map_fn,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601),unmount_map_BANG_], null)),(cljs.core.truth_(pins_mode_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-map-pin-controls","div.update-map-pin-controls",1980681183),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-map-add-pin-btn","button.update-map-add-pin-btn",61305421),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(update_add_pin_mode_QMARK_)?"update-map-add-pin-btn--active":null),new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","add-pin-by-click","update/add-pin-by-click",-1960244155)) : t.call(null,new cljs.core.Keyword("update","add-pin-by-click","update/add-pin-by-click",-1960244155))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (toggle_add_pin_mode_BANG_.cljs$core$IFn$_invoke$arity$0 ? toggle_add_pin_mode_BANG_.cljs$core$IFn$_invoke$arity$0() : toggle_add_pin_mode_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/add-pin.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),placesurfer.pin_ui.interface$.toolbar_search.pin_search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))], null):null)], null);
});
placesurfer.edit.pure.panel.dataset_editor_form = (function placesurfer$edit$pure$panel$dataset_editor_form(props){
var map__96415 = props;
var map__96415__$1 = cljs.core.__destructure_map(map__96415);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96415__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var update_form_field_errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96415__$1,new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956));
var update_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96415__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790));
var set_update_longitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96415__$1,new cljs.core.Keyword(null,"set-update-longitude!","set-update-longitude!",657256715));
var set_update_latitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96415__$1,new cljs.core.Keyword(null,"set-update-latitude!","set-update-latitude!",149198125));
var set_update_location_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96415__$1,new cljs.core.Keyword(null,"set-update-location!","set-update-location!",-2117512915));
var set_update_homepage_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96415__$1,new cljs.core.Keyword(null,"set-update-homepage!","set-update-homepage!",-558436914));
var commit_update_latitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96415__$1,new cljs.core.Keyword(null,"commit-update-latitude!","commit-update-latitude!",-765833102));
var set_update_name_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96415__$1,new cljs.core.Keyword(null,"set-update-name!","set-update-name!",1575606643));
var commit_update_longitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96415__$1,new cljs.core.Keyword(null,"commit-update-longitude!","commit-update-longitude!",220547732));
var try_paste_update_coordinates_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96415__$1,new cljs.core.Keyword(null,"try-paste-update-coordinates!","try-paste-update-coordinates!",-547717292));
var map__96416 = update_form;
var map__96416__$1 = cljs.core.__destructure_map(map__96416);
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96416__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var homepage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96416__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96416__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96416__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var place_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(update_form);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-editor-form","div.update-editor-form",-669913820),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-name"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","name","common/name",925592102)) : t.call(null,new cljs.core.Keyword("common","name","common/name",925592102)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-name.update-input","input#update-name.update-input",-192427667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),placesurfer.edit.pure.sources.coerce_form_text(place_name),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__96417 = e.target.value;
return (set_update_name_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_name_BANG_.cljs$core$IFn$_invoke$arity$1(G__96417) : set_update_name_BANG_.call(null,G__96417));
})], null)], null)], null),placesurfer.edit.pure.panel.field_error(update_form_field_errors,new cljs.core.Keyword(null,"name","name",1843675177))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-location"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","location","common/location",1031174855)) : t.call(null,new cljs.core.Keyword("common","location","common/location",1031174855)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-location.update-input","input#update-location.update-input",842775683),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),placesurfer.edit.pure.sources.coerce_form_text(location__$1),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__96418 = e.target.value;
return (set_update_location_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_location_BANG_.cljs$core$IFn$_invoke$arity$1(G__96418) : set_update_location_BANG_.call(null,G__96418));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-longitude"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","longitude","common/longitude",-2061610691)) : t.call(null,new cljs.core.Keyword("common","longitude","common/longitude",-2061610691)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-longitude.update-input","input#update-longitude.update-input",240666201),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"inputmode","inputmode",118925090),"decimal",new cljs.core.Keyword(null,"value","value",305978217),placesurfer.edit.pure.sources.coerce_form_text(longitude),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__96419 = e.target.value;
return (set_update_longitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_longitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__96419) : set_update_longitude_BANG_.call(null,G__96419));
}),new cljs.core.Keyword(null,"blur","blur",-453500461),(function (e){
var G__96420 = e.target.value;
return (commit_update_longitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? commit_update_longitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__96420) : commit_update_longitude_BANG_.call(null,G__96420));
}),new cljs.core.Keyword(null,"paste","paste",1975741548),(function (e){
if(cljs.core.truth_((function (){var G__96421 = e.clipboardData.getData("text");
return (try_paste_update_coordinates_BANG_.cljs$core$IFn$_invoke$arity$1 ? try_paste_update_coordinates_BANG_.cljs$core$IFn$_invoke$arity$1(G__96421) : try_paste_update_coordinates_BANG_.call(null,G__96421));
})())){
return e.preventDefault();
} else {
return null;
}
})], null)], null)], null),placesurfer.edit.pure.panel.field_error(update_form_field_errors,new cljs.core.Keyword(null,"longitude","longitude",-1268876372))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-latitude"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","latitude","common/latitude",742931812)) : t.call(null,new cljs.core.Keyword("common","latitude","common/latitude",742931812)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-latitude.update-input","input#update-latitude.update-input",-1959537749),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"inputmode","inputmode",118925090),"decimal",new cljs.core.Keyword(null,"value","value",305978217),placesurfer.edit.pure.sources.coerce_form_text(latitude),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__96422 = e.target.value;
return (set_update_latitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_latitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__96422) : set_update_latitude_BANG_.call(null,G__96422));
}),new cljs.core.Keyword(null,"blur","blur",-453500461),(function (e){
var G__96423 = e.target.value;
return (commit_update_latitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? commit_update_latitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__96423) : commit_update_latitude_BANG_.call(null,G__96423));
}),new cljs.core.Keyword(null,"paste","paste",1975741548),(function (e){
if(cljs.core.truth_((function (){var G__96424 = e.clipboardData.getData("text");
return (try_paste_update_coordinates_BANG_.cljs$core$IFn$_invoke$arity$1 ? try_paste_update_coordinates_BANG_.cljs$core$IFn$_invoke$arity$1(G__96424) : try_paste_update_coordinates_BANG_.call(null,G__96424));
})())){
return e.preventDefault();
} else {
return null;
}
})], null)], null)], null),placesurfer.edit.pure.panel.field_error(update_form_field_errors,new cljs.core.Keyword(null,"latitude","latitude",394867543))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-homepage"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","homepage","common/homepage",-317319372)) : t.call(null,new cljs.core.Keyword("common","homepage","common/homepage",-317319372)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-homepage.update-input","input#update-homepage.update-input",996962875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),placesurfer.edit.pure.sources.coerce_form_text(homepage),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__96425 = e.target.value;
return (set_update_homepage_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_homepage_BANG_.cljs$core$IFn$_invoke$arity$1(G__96425) : set_update_homepage_BANG_.call(null,G__96425));
})], null)], null)], null),placesurfer.edit.pure.panel.field_error(update_form_field_errors,new cljs.core.Keyword(null,"homepage","homepage",-1646828249))], null)], null)], null);
});
placesurfer.edit.pure.panel.topic_only_dropdown_toolbar = (function placesurfer$edit$pure$panel$topic_only_dropdown_toolbar(props){
if(cljs.core.truth_(new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(props))){
var topic_only_options = placesurfer.edit.pure.topics.dataset_topic_options(new cljs.core.Keyword(null,"update-topic-options","update-topic-options",702207581).cljs$core$IFn$_invoke$arity$2(props,cljs.core.PersistentVector.EMPTY));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-topic-toolbar-group","div.update-topic-toolbar-group",-429145703),placesurfer.edit.pure.topic_dropdown.dropdown(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-topic","update-topic",-406732688),new cljs.core.Keyword(null,"request-update-topic-change!","request-update-topic-change!",248429750)], null)),new cljs.core.Keyword(null,"update-topic-options","update-topic-options",702207581),topic_only_options))], null);
} else {
return null;
}
});
placesurfer.edit.pure.panel.panel_tab_bar = (function placesurfer$edit$pure$panel$panel_tab_bar(p__96426){
var map__96427 = p__96426;
var map__96427__$1 = cljs.core.__destructure_map(map__96427);
var update_panel_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96427__$1,new cljs.core.Keyword(null,"update-panel-tab","update-panel-tab",-1285771940));
var update_topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96427__$1,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
var update_topic_before_pins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96427__$1,new cljs.core.Keyword(null,"update-topic-before-pins","update-topic-before-pins",998758751));
var update_topic_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96427__$1,new cljs.core.Keyword(null,"update-topic-options","update-topic-options",702207581));
var backend_online_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96427__$1,new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729));
var set_update_panel_tab_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96427__$1,new cljs.core.Keyword(null,"set-update-panel-tab!","set-update-panel-tab!",-163304222));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96427__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var tab = (function (){var or__5025__auto__ = update_panel_tab;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"pins","pins",1725193285);
}
})();
var topic_option = ((placesurfer.edit.pure.topics.pins_topic_QMARK_(update_topic))?null:placesurfer.edit.pure.topics.option_for_topic(update_topic_options,update_topic));
var fallback_option = (function (){var or__5025__auto__ = placesurfer.edit.pure.topics.option_for_topic(update_topic_options,update_topic_before_pins);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.first(placesurfer.edit.pure.topics.dataset_topic_options((function (){var or__5025__auto____$1 = update_topic_options;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
}
})();
var topic_icon_url = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"marker-url","marker-url",153262178).cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = topic_option;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return fallback_option;
}
})());
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "/images/marker/table-tennis.png";
}
})();
var topic_label = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = topic_option;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return fallback_option;
}
})());
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-panel-tab-bar","div.update-panel-tab-bar",1107520136),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-panel-tab","button.update-panel-tab",-1255725585),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"pins","pins",1725193285)))?"update-panel-tab--active":null),new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("topic","pins","topic/pins",1613571862)) : t.call(null,new cljs.core.Keyword("topic","pins","topic/pins",1613571862))),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(set_update_panel_tab_BANG_)){
return (set_update_panel_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_panel_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pins","pins",1725193285)) : set_update_panel_tab_BANG_.call(null,new cljs.core.Keyword(null,"pins","pins",1725193285)));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-panel-tab-icon.update-panel-tab-icon--pin","img.update-panel-tab-icon.update-panel-tab-icon--pin",-1909192262),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/pin.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("topic","pins","topic/pins",1613571862)) : t.call(null,new cljs.core.Keyword("topic","pins","topic/pins",1613571862)))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-panel-tab","button.update-panel-tab",-1255725585),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"groups","groups",-136896102)))?"update-panel-tab--active":null),new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","groups-alt","nav/groups-alt",645359531)) : t.call(null,new cljs.core.Keyword("nav","groups-alt","nav/groups-alt",645359531))),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(set_update_panel_tab_BANG_)){
return (set_update_panel_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_panel_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"groups","groups",-136896102)) : set_update_panel_tab_BANG_.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102)));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-panel-tab-icon.update-panel-tab-icon--small","img.update-panel-tab-icon.update-panel-tab-icon--small",23601503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/groups.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","groups-alt","nav/groups-alt",645359531)) : t.call(null,new cljs.core.Keyword("nav","groups-alt","nav/groups-alt",645359531)))], null)], null)], null),(cljs.core.truth_(backend_online_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-panel-tab","button.update-panel-tab",-1255725585),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"topic","topic",-1960480691)))?"update-panel-tab--active":null),new cljs.core.Keyword(null,"title","title",636505583),topic_label,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(set_update_panel_tab_BANG_)){
return (set_update_panel_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_panel_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"topic","topic",-1960480691)) : set_update_panel_tab_BANG_.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691)));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-panel-tab-icon.update-panel-tab-icon--small","img.update-panel-tab-icon.update-panel-tab-icon--small",23601503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),topic_icon_url,new cljs.core.Keyword(null,"alt","alt",-3214426),topic_label], null)], null)], null):null)], null);
});
placesurfer.edit.pure.panel.dataset_table_panel = (function placesurfer$edit$pure$panel$dataset_table_panel(props){
var map__96428 = props;
var map__96428__$1 = cljs.core.__destructure_map(map__96428);
var set_update_sort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"set-update-sort!","set-update-sort!",-289121223));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var update_delete_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"update-delete-enabled?","update-delete-enabled?",1560914137));
var update_row_click_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"update-row-click!","update-row-click!",1826679866));
var save_update_dataset_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"save-update-dataset!","save-update-dataset!",711976314));
var update_save_dataset_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"update-save-dataset-disabled?","update-save-dataset-disabled?",-419809156));
var toggle_update_show_invalid_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"toggle-update-show-invalid!","toggle-update-show-invalid!",-1832847875));
var toggle_update_show_duplicates_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"toggle-update-show-duplicates!","toggle-update-show-duplicates!",1179935198));
var update_loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033));
var update_show_invalid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"update-show-invalid?","update-show-invalid?",593477120));
var update_sort_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"update-sort-field","update-sort-field",455441377));
var toggle_selected_update_row_delete_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"toggle-selected-update-row-delete!","toggle-selected-update-row-delete!",145719074));
var update_show_duplicates_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"update-show-duplicates?","update-show-duplicates?",962796900));
var update_table_scroll_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"update-table-scroll-token","update-table-scroll-token",903188454));
var update_table_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"update-table-rows","update-table-rows",1506557351));
var update_change_counts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"update-change-counts","update-change-counts",521169385));
var update_restore_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"update-restore-enabled?","update-restore-enabled?",-2023554806));
var update_sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"update-sort-dir","update-sort-dir",-62658901));
var restore_selected_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"restore-selected-update-row!","restore-selected-update-row!",134361261));
var create_new_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"create-new-update-row!","create-new-update-row!",-1804891599));
var update_table_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"update-table-columns","update-table-columns",-828256332));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-wrap","div.update-table-wrap",1469984077),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-toolbar","div.update-table-toolbar",-1760505710),placesurfer.edit.pure.panel.topic_only_dropdown_toolbar(props),(cljs.core.truth_(update_loading_QMARK_)?null:new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-toolbar-controls","div.update-table-toolbar-controls",-1978219037),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-restore-btn","button.update-restore-btn",2078951014),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(update_restore_enabled_QMARK_),new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","restore-title","update/restore-title",-1279668499)) : t.call(null,new cljs.core.Keyword("update","restore-title","update/restore-title",-1279668499))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (restore_selected_update_row_BANG_.cljs$core$IFn$_invoke$arity$0 ? restore_selected_update_row_BANG_.cljs$core$IFn$_invoke$arity$0() : restore_selected_update_row_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/restore.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","restore-alt","update/restore-alt",-698117915)) : t.call(null,new cljs.core.Keyword("update","restore-alt","update/restore-alt",-698117915)))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-new-btn","button.update-new-btn",2060373904),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","new","update/new",1504840111)) : t.call(null,new cljs.core.Keyword("update","new","update/new",1504840111))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (create_new_update_row_BANG_.cljs$core$IFn$_invoke$arity$0 ? create_new_update_row_BANG_.cljs$core$IFn$_invoke$arity$0() : create_new_update_row_BANG_.call(null));
})], null)], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","new","update/new",1504840111)) : t.call(null,new cljs.core.Keyword("update","new","update/new",1504840111)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-delete-btn","button.update-delete-btn",205033335),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(update_delete_enabled_QMARK_),new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","delete-title","update/delete-title",1729188532)) : t.call(null,new cljs.core.Keyword("update","delete-title","update/delete-title",1729188532))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (toggle_selected_update_row_delete_BANG_.cljs$core$IFn$_invoke$arity$0 ? toggle_selected_update_row_delete_BANG_.cljs$core$IFn$_invoke$arity$0() : toggle_selected_update_row_delete_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/trash.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","delete-alt","update/delete-alt",1928559376)) : t.call(null,new cljs.core.Keyword("update","delete-alt","update/delete-alt",1928559376)))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-duplicates-btn","button.update-duplicates-btn",-1906638145),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(update_show_duplicates_QMARK_)?"update-duplicates-btn--active":null),new cljs.core.Keyword(null,"aria-pressed","aria-pressed",-1749058631),cljs.core.boolean$(update_show_duplicates_QMARK_),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(update_show_duplicates_QMARK_)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","duplicates-show-all","update/duplicates-show-all",-358543430)) : t.call(null,new cljs.core.Keyword("update","duplicates-show-all","update/duplicates-show-all",-358543430))):(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","duplicates-show","update/duplicates-show",364705490)) : t.call(null,new cljs.core.Keyword("update","duplicates-show","update/duplicates-show",364705490)))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (toggle_update_show_duplicates_BANG_.cljs$core$IFn$_invoke$arity$0 ? toggle_update_show_duplicates_BANG_.cljs$core$IFn$_invoke$arity$0() : toggle_update_show_duplicates_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/duplicate.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","duplicates-show","update/duplicates-show",364705490)) : t.call(null,new cljs.core.Keyword("update","duplicates-show","update/duplicates-show",364705490)))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-invalid-btn","button.update-invalid-btn",-1881964235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(update_show_invalid_QMARK_)?"update-invalid-btn--active":null),new cljs.core.Keyword(null,"aria-pressed","aria-pressed",-1749058631),cljs.core.boolean$(update_show_invalid_QMARK_),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(update_show_invalid_QMARK_)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","invalid-show-all","update/invalid-show-all",708424274)) : t.call(null,new cljs.core.Keyword("update","invalid-show-all","update/invalid-show-all",708424274))):(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","invalid-show","update/invalid-show",820098803)) : t.call(null,new cljs.core.Keyword("update","invalid-show","update/invalid-show",820098803)))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (toggle_update_show_invalid_BANG_.cljs$core$IFn$_invoke$arity$0 ? toggle_update_show_invalid_BANG_.cljs$core$IFn$_invoke$arity$0() : toggle_update_show_invalid_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/warning.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","invalid-show","update/invalid-show",820098803)) : t.call(null,new cljs.core.Keyword("update","invalid-show","update/invalid-show",820098803)))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-change-counts","div.update-change-counts",-974485578),placesurfer.edit.pure.panel.change_count_box(new cljs.core.Keyword(null,"deleted","deleted",-510100639),new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$2(update_change_counts,(0)),t),placesurfer.edit.pure.panel.change_count_box(new cljs.core.Keyword(null,"edited","edited",-262616624),new cljs.core.Keyword(null,"edited","edited",-262616624).cljs$core$IFn$_invoke$arity$2(update_change_counts,(0)),t),placesurfer.edit.pure.panel.change_count_box(new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$2(update_change_counts,(0)),t)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-dataset-save","button.update-dataset-save",414276660),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.boolean$(update_save_dataset_disabled_QMARK_),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (save_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$0 ? save_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$0() : save_update_dataset_BANG_.call(null));
})], null)], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","save","common/save",-1048148614)) : t.call(null,new cljs.core.Keyword("common","save","common/save",-1048148614)))], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-scroll","div.update-table-scroll",-802603243),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),(function (p__96429){
var map__96430 = p__96429;
var map__96430__$1 = cljs.core.__destructure_map(map__96430);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96430__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return placesurfer.edit.pure.scroll.mount_table_scroll_preservation_BANG_(node);
}),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__96431){
var map__96432 = p__96431;
var map__96432__$1 = cljs.core.__destructure_map(map__96432);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96432__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return placesurfer.edit.pure.scroll.sync_table_wrap_scroll_BANG_(node,update_table_scroll_token);
})], null),(cljs.core.truth_(update_loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.update-loading","p.update-loading",-569792983),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","loading-dataset","update/loading-dataset",-2068874911)) : t.call(null,new cljs.core.Keyword("update","loading-dataset","update/loading-dataset",-2068874911)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.update-table","table.update-table",-64080666),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.update-table-header-row","tr.update-table-header-row",-1584248135),(function (){var iter__5503__auto__ = (function placesurfer$edit$pure$panel$dataset_table_panel_$_iter__96433(s__96434){
return (new cljs.core.LazySeq(null,(function (){
var s__96434__$1 = s__96434;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__96434__$1);
if(temp__5825__auto__){
var s__96434__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__96434__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__96434__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__96436 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__96435 = (0);
while(true){
if((i__96435 < size__5502__auto__)){
var map__96437 = cljs.core._nth(c__5501__auto__,i__96435);
var map__96437__$1 = cljs.core.__destructure_map(map__96437);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96437__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96437__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var sortable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96437__$1,new cljs.core.Keyword(null,"sortable?","sortable?",291547474));
cljs.core.chunk_append(b__96436,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"action-icon","action-icon",-355725910)))?"update-action-header":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"source-icon","source-icon",-769874141)))?"update-source-header":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"meters","meters",-1644078545)))?"update-meters-header":(cljs.core.truth_((function (){var and__5023__auto__ = sortable_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(update_show_duplicates_QMARK_);
} else {
return and__5023__auto__;
}
})())?"update-th-sortable":null)))),new cljs.core.Keyword(null,"on","on",173873944),(cljs.core.truth_((function (){var and__5023__auto__ = sortable_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(update_show_duplicates_QMARK_);
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__96435,map__96437,map__96437__$1,key,label,sortable_QMARK_,c__5501__auto__,size__5502__auto__,b__96436,s__96434__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function (_){
return (set_update_sort_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_sort_BANG_.cljs$core$IFn$_invoke$arity$1(key) : set_update_sort_BANG_.call(null,key));
});})(i__96435,map__96437,map__96437__$1,key,label,sortable_QMARK_,c__5501__auto__,size__5502__auto__,b__96436,s__96434__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
], null):null)], null),placesurfer.edit.pure.cells.table_column_header(key,label,update_sort_field,update_sort_dir)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(key)], null)));

var G__96465 = (i__96435 + (1));
i__96435 = G__96465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__96436),placesurfer$edit$pure$panel$dataset_table_panel_$_iter__96433(cljs.core.chunk_rest(s__96434__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__96436),null);
}
} else {
var map__96438 = cljs.core.first(s__96434__$2);
var map__96438__$1 = cljs.core.__destructure_map(map__96438);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96438__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96438__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var sortable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96438__$1,new cljs.core.Keyword(null,"sortable?","sortable?",291547474));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"action-icon","action-icon",-355725910)))?"update-action-header":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"source-icon","source-icon",-769874141)))?"update-source-header":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"meters","meters",-1644078545)))?"update-meters-header":(cljs.core.truth_((function (){var and__5023__auto__ = sortable_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(update_show_duplicates_QMARK_);
} else {
return and__5023__auto__;
}
})())?"update-th-sortable":null)))),new cljs.core.Keyword(null,"on","on",173873944),(cljs.core.truth_((function (){var and__5023__auto__ = sortable_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(update_show_duplicates_QMARK_);
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__96438,map__96438__$1,key,label,sortable_QMARK_,s__96434__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function (_){
return (set_update_sort_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_sort_BANG_.cljs$core$IFn$_invoke$arity$1(key) : set_update_sort_BANG_.call(null,key));
});})(map__96438,map__96438__$1,key,label,sortable_QMARK_,s__96434__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
], null):null)], null),placesurfer.edit.pure.cells.table_column_header(key,label,update_sort_field,update_sort_dir)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(key)], null)),placesurfer$edit$pure$panel$dataset_table_panel_$_iter__96433(cljs.core.rest(s__96434__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(update_table_columns);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function placesurfer$edit$pure$panel$dataset_table_panel_$_iter__96439(s__96440){
return (new cljs.core.LazySeq(null,(function (){
var s__96440__$1 = s__96440;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__96440__$1);
if(temp__5825__auto__){
var s__96440__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__96440__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__96440__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__96442 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__96441 = (0);
while(true){
if((i__96441 < size__5502__auto__)){
var map__96443 = cljs.core._nth(c__5501__auto__,i__96441);
var map__96443__$1 = cljs.core.__destructure_map(map__96443);
var row_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96443__$1,new cljs.core.Keyword(null,"row-id","row-id",246619473));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96443__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96443__$1,new cljs.core.Keyword(null,"values","values",372645556));
cljs.core.chunk_append(b__96442,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.update-row","tr.update-row",1410940785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"update-row--selected":null),new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__96441,map__96443,map__96443__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__96442,s__96440__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function (_){
return (update_row_click_BANG_.cljs$core$IFn$_invoke$arity$1 ? update_row_click_BANG_.cljs$core$IFn$_invoke$arity$1(row_id) : update_row_click_BANG_.call(null,row_id));
});})(i__96441,map__96443,map__96443__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__96442,s__96440__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
], null),(function (){var or__5025__auto__ = placesurfer.edit.pure.panel.update_row_map_hover_handlers(values);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0))], null),(function (){var iter__5503__auto__ = ((function (i__96441,map__96443,map__96443__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__96442,s__96440__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function placesurfer$edit$pure$panel$dataset_table_panel_$_iter__96439_$_iter__96444(s__96445){
return (new cljs.core.LazySeq(null,((function (i__96441,map__96443,map__96443__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__96442,s__96440__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function (){
var s__96445__$1 = s__96445;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__96445__$1);
if(temp__5825__auto____$1){
var s__96445__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__96445__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__96445__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__96447 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__96446 = (0);
while(true){
if((i__96446 < size__5502__auto____$1)){
var map__96448 = cljs.core._nth(c__5501__auto____$1,i__96446);
var map__96448__$1 = cljs.core.__destructure_map(map__96448);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96448__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__96447,placesurfer.edit.pure.cells.table_cell(row_id,values,key));

var G__96466 = (i__96446 + (1));
i__96446 = G__96466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__96447),placesurfer$edit$pure$panel$dataset_table_panel_$_iter__96439_$_iter__96444(cljs.core.chunk_rest(s__96445__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__96447),null);
}
} else {
var map__96449 = cljs.core.first(s__96445__$2);
var map__96449__$1 = cljs.core.__destructure_map(map__96449);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96449__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(placesurfer.edit.pure.cells.table_cell(row_id,values,key),placesurfer$edit$pure$panel$dataset_table_panel_$_iter__96439_$_iter__96444(cljs.core.rest(s__96445__$2)));
}
} else {
return null;
}
break;
}
});})(i__96441,map__96443,map__96443__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__96442,s__96440__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
,null,null));
});})(i__96441,map__96443,map__96443__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__96442,s__96440__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
;
return iter__5503__auto__(update_table_columns);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_id], null)));

var G__96467 = (i__96441 + (1));
i__96441 = G__96467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__96442),placesurfer$edit$pure$panel$dataset_table_panel_$_iter__96439(cljs.core.chunk_rest(s__96440__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__96442),null);
}
} else {
var map__96450 = cljs.core.first(s__96440__$2);
var map__96450__$1 = cljs.core.__destructure_map(map__96450);
var row_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96450__$1,new cljs.core.Keyword(null,"row-id","row-id",246619473));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96450__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96450__$1,new cljs.core.Keyword(null,"values","values",372645556));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.update-row","tr.update-row",1410940785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"update-row--selected":null),new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__96450,map__96450__$1,row_id,selected_QMARK_,values,s__96440__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function (_){
return (update_row_click_BANG_.cljs$core$IFn$_invoke$arity$1 ? update_row_click_BANG_.cljs$core$IFn$_invoke$arity$1(row_id) : update_row_click_BANG_.call(null,row_id));
});})(map__96450,map__96450__$1,row_id,selected_QMARK_,values,s__96440__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
], null),(function (){var or__5025__auto__ = placesurfer.edit.pure.panel.update_row_map_hover_handlers(values);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0))], null),(function (){var iter__5503__auto__ = ((function (map__96450,map__96450__$1,row_id,selected_QMARK_,values,s__96440__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function placesurfer$edit$pure$panel$dataset_table_panel_$_iter__96439_$_iter__96451(s__96452){
return (new cljs.core.LazySeq(null,(function (){
var s__96452__$1 = s__96452;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__96452__$1);
if(temp__5825__auto____$1){
var s__96452__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__96452__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__96452__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__96454 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__96453 = (0);
while(true){
if((i__96453 < size__5502__auto__)){
var map__96455 = cljs.core._nth(c__5501__auto__,i__96453);
var map__96455__$1 = cljs.core.__destructure_map(map__96455);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96455__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__96454,placesurfer.edit.pure.cells.table_cell(row_id,values,key));

var G__96468 = (i__96453 + (1));
i__96453 = G__96468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__96454),placesurfer$edit$pure$panel$dataset_table_panel_$_iter__96439_$_iter__96451(cljs.core.chunk_rest(s__96452__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__96454),null);
}
} else {
var map__96456 = cljs.core.first(s__96452__$2);
var map__96456__$1 = cljs.core.__destructure_map(map__96456);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96456__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(placesurfer.edit.pure.cells.table_cell(row_id,values,key),placesurfer$edit$pure$panel$dataset_table_panel_$_iter__96439_$_iter__96451(cljs.core.rest(s__96452__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__96450,map__96450__$1,row_id,selected_QMARK_,values,s__96440__$2,temp__5825__auto__,map__96428,map__96428__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_invalid_BANG_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_show_invalid_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
;
return iter__5503__auto__(update_table_columns);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_id], null)),placesurfer$edit$pure$panel$dataset_table_panel_$_iter__96439(cljs.core.rest(s__96440__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(update_table_rows);
})()], null)], null))], null)], null);
});
placesurfer.edit.pure.panel.view_props = (function placesurfer$edit$pure$panel$view_props(state,p__96457){
var map__96458 = p__96457;
var map__96458__$1 = cljs.core.__destructure_map(map__96458);
var update_table_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96458__$1,new cljs.core.Keyword(null,"update-table-model","update-table-model",69144242));
var update_restore_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96458__$1,new cljs.core.Keyword(null,"update-restore-enabled?","update-restore-enabled?",-2023554806));
var update_save_dataset_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96458__$1,new cljs.core.Keyword(null,"update-save-dataset-disabled?","update-save-dataset-disabled?",-419809156));
var update_topic_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96458__$1,new cljs.core.Keyword(null,"update-topic-keys","update-topic-keys",1567905828));
var topic_marker_url_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96458__$1,new cljs.core.Keyword(null,"topic-marker-url-fn","topic-marker-url-fn",-1547313478));
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96458__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var map_handler_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96458__$1,new cljs.core.Keyword(null,"map-handler-props","map-handler-props",1190365928));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96458__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var map__96459 = update_table_model;
var map__96459__$1 = cljs.core.__destructure_map(map__96459);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96459__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96459__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var sort_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96459__$1,new cljs.core.Keyword(null,"sort-field","sort-field",-941433793));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96459__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var map__96460 = handlers;
var map__96460__$1 = cljs.core.__destructure_map(map__96460);
var set_update_sort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"set-update-sort!","set-update-sort!",-289121223));
var update_row_click_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"update-row-click!","update-row-click!",1826679866));
var schedule_update_map_resize_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"schedule-update-map-resize!","schedule-update-map-resize!",1506945338));
var save_update_dataset_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"save-update-dataset!","save-update-dataset!",711976314));
var toggle_update_show_invalid_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"toggle-update-show-invalid!","toggle-update-show-invalid!",-1832847875));
var toggle_update_stars_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"toggle-update-stars!","toggle-update-stars!",1753373565));
var toggle_update_show_duplicates_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"toggle-update-show-duplicates!","toggle-update-show-duplicates!",1179935198));
var trace_update_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"trace-update-description!","trace-update-description!",1699816190));
var save_and_switch_update_topic_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"save-and-switch-update-topic!","save-and-switch-update-topic!",482330176));
var toggle_description_edit_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"toggle-description-edit-mode!","toggle-description-edit-mode!",-361122656));
var toggle_selected_update_row_delete_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"toggle-selected-update-row-delete!","toggle-selected-update-row-delete!",145719074));
var select_update_search_result_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"select-update-search-result!","select-update-search-result!",-1924590398));
var set_update_panel_tab_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"set-update-panel-tab!","set-update-panel-tab!",-163304222));
var set_update_search_query_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"set-update-search-query!","set-update-search-query!",-1015134363));
var update_search_keydown_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"update-search-keydown!","update-search-keydown!",1492427909));
var cancel_update_topic_switch_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"cancel-update-topic-switch!","cancel-update-topic-switch!",1929727784));
var toggle_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"toggle-update-row!","toggle-update-row!",230709739));
var set_update_longitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"set-update-longitude!","set-update-longitude!",657256715));
var flush_update_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"flush-update-description!","flush-update-description!",-1134668307));
var restore_selected_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"restore-selected-update-row!","restore-selected-update-row!",134361261));
var set_update_latitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"set-update-latitude!","set-update-latitude!",149198125));
var set_update_location_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"set-update-location!","set-update-location!",-2117512915));
var set_update_homepage_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"set-update-homepage!","set-update-homepage!",-558436914));
var set_update_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"set-update-description!","set-update-description!",15841103));
var discard_update_topic_switch_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"discard-update-topic-switch!","discard-update-topic-switch!",306244655));
var set_update_map_height_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"set-update-map-height!","set-update-map-height!",-1685152657));
var toggle_add_pin_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"toggle-add-pin-mode!","toggle-add-pin-mode!",1920350064));
var create_new_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"create-new-update-row!","create-new-update-row!",-1804891599));
var commit_update_latitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"commit-update-latitude!","commit-update-latitude!",-765833102));
var set_update_name_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"set-update-name!","set-update-name!",1575606643));
var commit_update_longitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"commit-update-longitude!","commit-update-longitude!",220547732));
var try_paste_update_coordinates_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"try-paste-update-coordinates!","try-paste-update-coordinates!",-547717292));
var request_update_topic_change_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"request-update-topic-change!","request-update-topic-change!",248429750));
var toggle_update_pin_topic_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96460__$1,new cljs.core.Keyword(null,"toggle-update-pin-topic!","toggle-update-pin-topic!",-1564443880));
var topic_options = placesurfer.edit.pure.topics.topic_options_for_dropdown.cljs$core$IFn$_invoke$arity$3(update_topic_keys,t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker-url-fn","marker-url-fn",-1040432635),topic_marker_url_fn], null));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"toggle-description-edit-mode!","toggle-description-edit-mode!",-361122656),new cljs.core.Keyword(null,"update-show-invalid?","update-show-invalid?",593477120),new cljs.core.Keyword(null,"save-and-switch-update-topic!","save-and-switch-update-topic!",482330176),new cljs.core.Keyword(null,"update-sort-field","update-sort-field",455441377),new cljs.core.Keyword(null,"select-update-search-result!","select-update-search-result!",-1924590398),new cljs.core.Keyword(null,"set-update-panel-tab!","set-update-panel-tab!",-163304222),new cljs.core.Keyword(null,"toggle-selected-update-row-delete!","toggle-selected-update-row-delete!",145719074),new cljs.core.Keyword(null,"update-search-results","update-search-results",6100547),new cljs.core.Keyword(null,"update-show-duplicates?","update-show-duplicates?",962796900),new cljs.core.Keyword(null,"mount-update-map!","mount-update-map!",881879396),new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),new cljs.core.Keyword(null,"update-search-keydown!","update-search-keydown!",1492427909),new cljs.core.Keyword(null,"set-update-search-query!","set-update-search-query!",-1015134363),new cljs.core.Keyword(null,"update-form","update-form",475718790),new cljs.core.Keyword(null,"update-table-scroll-token","update-table-scroll-token",903188454),new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729),new cljs.core.Keyword(null,"update-table-rows","update-table-rows",1506557351),new cljs.core.Keyword(null,"cancel-update-topic-switch!","cancel-update-topic-switch!",1929727784),new cljs.core.Keyword(null,"update-change-counts","update-change-counts",521169385),new cljs.core.Keyword(null,"update-restore-enabled?","update-restore-enabled?",-2023554806),new cljs.core.Keyword(null,"description-edit-mode","description-edit-mode",-1941940982),new cljs.core.Keyword(null,"set-update-longitude!","set-update-longitude!",657256715),new cljs.core.Keyword(null,"toggle-update-row!","toggle-update-row!",230709739),new cljs.core.Keyword(null,"update-sort-dir","update-sort-dir",-62658901),new cljs.core.Keyword(null,"update-map-height-px","update-map-height-px",-2093540532),new cljs.core.Keyword(null,"restore-selected-update-row!","restore-selected-update-row!",134361261),new cljs.core.Keyword(null,"set-update-latitude!","set-update-latitude!",149198125),new cljs.core.Keyword(null,"set-update-location!","set-update-location!",-2117512915),new cljs.core.Keyword(null,"flush-update-description!","flush-update-description!",-1134668307),new cljs.core.Keyword(null,"update-show-stars?","update-show-stars?",-280328914),new cljs.core.Keyword(null,"update-add-pin-mode?","update-add-pin-mode?",-2058851986),new cljs.core.Keyword(null,"set-update-homepage!","set-update-homepage!",-558436914),new cljs.core.Keyword(null,"update-search-query","update-search-query",761051950),new cljs.core.Keyword(null,"discard-update-topic-switch!","discard-update-topic-switch!",306244655),new cljs.core.Keyword(null,"set-update-map-height!","set-update-map-height!",-1685152657),new cljs.core.Keyword(null,"update-search-highlight-index","update-search-highlight-index",781350351),new cljs.core.Keyword(null,"set-update-description!","set-update-description!",15841103),new cljs.core.Keyword(null,"update-topic","update-topic",-406732688),new cljs.core.Keyword(null,"toggle-add-pin-mode!","toggle-add-pin-mode!",1920350064),new cljs.core.Keyword(null,"create-new-update-row!","create-new-update-row!",-1804891599),new cljs.core.Keyword(null,"update-topic-switch-pending?","update-topic-switch-pending?",-1319259407),new cljs.core.Keyword(null,"commit-update-latitude!","commit-update-latitude!",-765833102),new cljs.core.Keyword(null,"description-sync-token","description-sync-token",-1307199437),new cljs.core.Keyword(null,"set-update-name!","set-update-name!",1575606643),new cljs.core.Keyword(null,"update-message","update-message",109684659),new cljs.core.Keyword(null,"update-error","update-error",-572386700),new cljs.core.Keyword(null,"commit-update-longitude!","commit-update-longitude!",220547732),new cljs.core.Keyword(null,"try-paste-update-coordinates!","try-paste-update-coordinates!",-547717292),new cljs.core.Keyword(null,"update-table-columns","update-table-columns",-828256332),new cljs.core.Keyword(null,"request-update-topic-change!","request-update-topic-change!",248429750),new cljs.core.Keyword(null,"toggle-update-pin-topic!","toggle-update-pin-topic!",-1564443880),new cljs.core.Keyword(null,"set-update-sort!","set-update-sort!",-289121223),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"update-delete-enabled?","update-delete-enabled?",1560914137),new cljs.core.Keyword(null,"update-row-click!","update-row-click!",1826679866),new cljs.core.Keyword(null,"schedule-update-map-resize!","schedule-update-map-resize!",1506945338),new cljs.core.Keyword(null,"save-update-dataset!","save-update-dataset!",711976314),new cljs.core.Keyword(null,"update-search-loading?","update-search-loading?",-489958821),new cljs.core.Keyword(null,"update-save-dataset-disabled?","update-save-dataset-disabled?",-419809156),new cljs.core.Keyword(null,"update-panel-tab","update-panel-tab",-1285771940),new cljs.core.Keyword(null,"toggle-update-show-invalid!","toggle-update-show-invalid!",-1832847875),new cljs.core.Keyword(null,"update-topic-options","update-topic-options",702207581),new cljs.core.Keyword(null,"toggle-update-stars!","toggle-update-stars!",1753373565),new cljs.core.Keyword(null,"toggle-update-show-duplicates!","toggle-update-show-duplicates!",1179935198),new cljs.core.Keyword(null,"trace-update-description!","trace-update-description!",1699816190),new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033),new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601),new cljs.core.Keyword(null,"update-topic-before-pins","update-topic-before-pins",998758751)],[toggle_description_edit_mode_BANG_,new cljs.core.Keyword(null,"update-show-invalid?","update-show-invalid?",593477120).cljs$core$IFn$_invoke$arity$2(state,false),save_and_switch_update_topic_BANG_,sort_field,select_update_search_result_BANG_,set_update_panel_tab_BANG_,toggle_selected_update_row_delete_BANG_,new cljs.core.Keyword(null,"update-search-results","update-search-results",6100547).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"update-show-duplicates?","update-show-duplicates?",962796900).cljs$core$IFn$_invoke$arity$2(state,false),new cljs.core.Keyword(null,"mount-update-map!","mount-update-map!",881879396).cljs$core$IFn$_invoke$arity$1(map_handler_props),new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentArrayMap.EMPTY),update_search_keydown_BANG_,set_update_search_query_BANG_,new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"update-table-scroll-token","update-table-scroll-token",903188454).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(state),rows,cancel_update_topic_switch_BANG_,placesurfer.edit.pure.model.dataset_change_counts(state),update_restore_enabled_QMARK_,new cljs.core.Keyword(null,"description-edit-mode","description-edit-mode",-1941940982).cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"text","text",-1790561697)),set_update_longitude_BANG_,toggle_update_row_BANG_,sort_dir,new cljs.core.Keyword(null,"update-map-height-px","update-map-height-px",-2093540532).cljs$core$IFn$_invoke$arity$1(state),restore_selected_update_row_BANG_,set_update_latitude_BANG_,set_update_location_BANG_,flush_update_description_BANG_,new cljs.core.Keyword(null,"update-show-stars?","update-show-stars?",-280328914).cljs$core$IFn$_invoke$arity$2(state,false),new cljs.core.Keyword(null,"update-add-pin-mode?","update-add-pin-mode?",-2058851986).cljs$core$IFn$_invoke$arity$2(state,false),set_update_homepage_BANG_,new cljs.core.Keyword(null,"update-search-query","update-search-query",761051950).cljs$core$IFn$_invoke$arity$2(state,""),discard_update_topic_switch_BANG_,set_update_map_height_BANG_,new cljs.core.Keyword(null,"update-search-highlight-index","update-search-highlight-index",781350351).cljs$core$IFn$_invoke$arity$1(state),set_update_description_BANG_,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(state),toggle_add_pin_mode_BANG_,create_new_update_row_BANG_,(!((new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723).cljs$core$IFn$_invoke$arity$1(state) == null))),commit_update_latitude_BANG_,new cljs.core.Keyword(null,"description-sync-token","description-sync-token",-1307199437).cljs$core$IFn$_invoke$arity$2(state,(0)),set_update_name_BANG_,new cljs.core.Keyword(null,"update-message","update-message",109684659).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"update-error","update-error",-572386700).cljs$core$IFn$_invoke$arity$1(state),commit_update_longitude_BANG_,try_paste_update_coordinates_BANG_,columns,request_update_topic_change_BANG_,toggle_update_pin_topic_BANG_,set_update_sort_BANG_,t,(!((new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(state) == null))),update_row_click_BANG_,schedule_update_map_resize_BANG_,save_update_dataset_BANG_,new cljs.core.Keyword(null,"update-search-loading?","update-search-loading?",-489958821).cljs$core$IFn$_invoke$arity$2(state,false),update_save_dataset_disabled_QMARK_,new cljs.core.Keyword(null,"update-panel-tab","update-panel-tab",-1285771940).cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"pins","pins",1725193285)),toggle_update_show_invalid_BANG_,topic_options,toggle_update_stars_BANG_,toggle_update_show_duplicates_BANG_,trace_update_description_BANG_,new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601).cljs$core$IFn$_invoke$arity$1(map_handler_props),new cljs.core.Keyword(null,"update-topic-before-pins","update-topic-before-pins",998758751).cljs$core$IFn$_invoke$arity$1(state)]);
});
placesurfer.edit.pure.panel.panel = (function placesurfer$edit$pure$panel$panel(p__96461){
var map__96462 = p__96461;
var map__96462__$1 = cljs.core.__destructure_map(map__96462);
var panel_props = map__96462__$1;
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96462__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var update_panel_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"update-panel-tab","update-panel-tab",-1285771940));
var pin_editor_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186));
var trace_update_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"trace-update-description!","trace-update-description!",1699816190));
var toggle_description_edit_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"toggle-description-edit-mode!","toggle-description-edit-mode!",-361122656));
var update_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790));
var description_edit_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"description-edit-mode","description-edit-mode",-1941940982));
var flush_update_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"flush-update-description!","flush-update-description!",-1134668307));
var render_groups_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"render-groups-panel","render-groups-panel",-1303434801));
var set_update_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"set-update-description!","set-update-description!",15841103));
var update_topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
var update_topic_switch_pending_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"update-topic-switch-pending?","update-topic-switch-pending?",-1319259407));
var update_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"update-message","update-message",109684659));
var description_sync_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"description-sync-token","description-sync-token",-1307199437));
var update_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96462__$1,new cljs.core.Keyword(null,"update-error","update-error",-572386700));
var mount_update_map_fn = new cljs.core.Keyword(null,"mount-update-map!","mount-update-map!",881879396).cljs$core$IFn$_invoke$arity$1(panel_props);
var unmount_map_BANG_ = new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601).cljs$core$IFn$_invoke$arity$1(panel_props);
var panel_tab = (function (){var or__5025__auto__ = update_panel_tab;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(placesurfer.edit.pure.topics.pins_topic_QMARK_(update_topic)){
return new cljs.core.Keyword(null,"pins","pins",1725193285);
} else {
return new cljs.core.Keyword(null,"topic","topic",-1960480691);
}
}
})();
var pins_tab_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(panel_tab,new cljs.core.Keyword(null,"pins","pins",1725193285));
var groups_tab_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(panel_tab,new cljs.core.Keyword(null,"groups","groups",-136896102));
var description_edit_mode_STAR_ = (function (){var or__5025__auto__ = description_edit_mode;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
})();
var description_sync_token_STAR_ = (function (){var or__5025__auto__ = description_sync_token;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var map__96463 = update_form;
var map__96463__$1 = cljs.core.__destructure_map(map__96463);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96463__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.update-section","section.update-section",1226877624),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(update_topic_switch_pending_QMARK_)?"update-section--topic-switch-dialog-open ":null),((pins_tab_QMARK_)?"update-section--pins ":null),((groups_tab_QMARK_)?"update-section--groups":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-layout","div.update-layout",-1595906759),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.update-editor","aside.update-editor",415227631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((groups_tab_QMARK_)?"update-editor--groups":null)], null),placesurfer.edit.pure.panel.panel_tab_bar(panel_props),((groups_tab_QMARK_)?(cljs.core.truth_(render_groups_panel)?(render_groups_panel.cljs$core$IFn$_invoke$arity$1 ? render_groups_panel.cljs$core$IFn$_invoke$arity$1(panel_props) : render_groups_panel.call(null,panel_props)):null):((pins_tab_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-editor-form.update-description-pane","div.update-editor-form.update-description-pane",-1509168342),placesurfer.pin_ui.interface$.editor_pane.editor_pane.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(panel_props,new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),pin_editor_mode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-editor-inline?","pin-editor-inline?",766617935),true], 0))], 0))], null):placesurfer.edit.pure.panel.dataset_editor_form(panel_props)
)),((groups_tab_QMARK_)?null:((pins_tab_QMARK_)?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-description-pane","div.update-description-pane",408898251),placesurfer.html.interface$.description_field.description_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"toggle-mode!","toggle-mode!",953048551),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"trace-description!","trace-description!",-965598387),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"flush-description!","flush-description!",893680917),new cljs.core.Keyword(null,"set-description!","set-description!",-1732307848),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"sync-token","sync-token",-2023041987)],[description,toggle_description_edit_mode_BANG_,description_edit_mode_STAR_,trace_update_description_BANG_,"update-description",flush_update_description_BANG_,set_update_description_BANG_,t,description_sync_token_STAR_])], 0)),(function (){var temp__5825__auto__ = placesurfer.map_panel_ui.interface$.status.display_status_text(update_error);
if(cljs.core.truth_(temp__5825__auto__)){
var err = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.update-error","p.update-error",-646246208),err], null);
} else {
return null;
}
})(),(function (){var temp__5825__auto__ = placesurfer.map_panel_ui.interface$.status.display_status_text(update_message);
if(cljs.core.truth_(temp__5825__auto__)){
var msg = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.update-message","p.update-message",935414982),msg], null);
} else {
return null;
}
})()], null))),((groups_tab_QMARK_)?null:placesurfer.edit.pure.panel.map_panel(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873),new cljs.core.Keyword(null,"pin-search-keydown!","pin-search-keydown!",-1090004063),new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446),new cljs.core.Keyword(null,"select-pin-search-result!","select-pin-search-result!",-1512791515),new cljs.core.Keyword(null,"pins-mode?","pins-mode?",-1296026234),new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504),new cljs.core.Keyword(null,"update-add-pin-mode?","update-add-pin-mode?",-2058851986),new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288),new cljs.core.Keyword(null,"toggle-add-pin-mode!","toggle-add-pin-mode!",1920350064),new cljs.core.Keyword(null,"mount-update-map-fn","mount-update-map-fn",1336367187),new cljs.core.Keyword(null,"set-pin-search-query!","set-pin-search-query!",-442189002),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601)],[new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873).cljs$core$IFn$_invoke$arity$1(panel_props),new cljs.core.Keyword(null,"map-search-keydown!","map-search-keydown!",892221000).cljs$core$IFn$_invoke$arity$1(panel_props),new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446).cljs$core$IFn$_invoke$arity$1(panel_props),new cljs.core.Keyword(null,"select-map-search-result!","select-map-search-result!",-908651586).cljs$core$IFn$_invoke$arity$1(panel_props),pins_tab_QMARK_,new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504).cljs$core$IFn$_invoke$arity$1(panel_props),new cljs.core.Keyword(null,"update-add-pin-mode?","update-add-pin-mode?",-2058851986).cljs$core$IFn$_invoke$arity$1(panel_props),new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288).cljs$core$IFn$_invoke$arity$1(panel_props),new cljs.core.Keyword(null,"toggle-add-pin-mode!","toggle-add-pin-mode!",1920350064).cljs$core$IFn$_invoke$arity$1(panel_props),mount_update_map_fn,new cljs.core.Keyword(null,"set-pin-search-query!","set-pin-search-query!",-442189002).cljs$core$IFn$_invoke$arity$1(panel_props),t,unmount_map_BANG_])))], null),((groups_tab_QMARK_)?null:((pins_tab_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-list-panel","div.pin-list-panel",612331548),placesurfer.pin_ui.interface$.list_panel.list_panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(panel_props,new cljs.core.Keyword(null,"show-preview-toggle?","show-preview-toggle?",-1748844803),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-stars-toggle?","show-stars-toggle?",1089689572),true,new cljs.core.Keyword(null,"show-stars?","show-stars?",1045120497),new cljs.core.Keyword(null,"update-show-stars?","update-show-stars?",-280328914).cljs$core$IFn$_invoke$arity$2(panel_props,false),new cljs.core.Keyword(null,"toggle-stars!","toggle-stars!",1434020979),new cljs.core.Keyword(null,"toggle-update-stars!","toggle-update-stars!",1753373565).cljs$core$IFn$_invoke$arity$1(panel_props),new cljs.core.Keyword(null,"pin-show-preview?","pin-show-preview?",837912811),false,new cljs.core.Keyword(null,"show-drag-handle?","show-drag-handle?",1932372815),false,new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),true], 0))], 0))], null):placesurfer.edit.pure.panel.dataset_table_panel(panel_props)))], null),(cljs.core.truth_(update_topic_switch_pending_QMARK_)?placesurfer.edit.pure.topic_switch_dialog.dialog(panel_props):null)], null);
});

//# sourceMappingURL=placesurfer.edit.pure.panel.js.map
