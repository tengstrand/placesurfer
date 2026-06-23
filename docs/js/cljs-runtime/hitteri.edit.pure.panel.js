goog.provide('hitteri.edit.pure.panel');
hitteri.edit.pure.panel.field_error = (function hitteri$edit$pure$panel$field_error(field_errors,k){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(field_errors,k);
if(cljs.core.truth_(temp__5825__auto__)){
var err = temp__5825__auto__;
var temp__5825__auto____$1 = hitteri.map_panel_ui.interface$.status.display_status_text(err);
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
hitteri.edit.pure.panel.update_row_map_hover_handlers = (function hitteri$edit$pure$panel$update_row_map_hover_handlers(values){
var map__41757 = values;
var map__41757__$1 = cljs.core.__destructure_map(map__41757);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41757__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41757__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),(function (_){
return hitteri.map_ui.interface$.set_marker_row_emphasis_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude], null));
}),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),(function (_){
return hitteri.map_ui.interface$.clear_marker_row_emphasis_BANG_();
})], null);
} else {
return null;
}
});
hitteri.edit.pure.panel.change_count_box = (function hitteri$edit$pure$panel$change_count_box(kind,n,t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.update-change-count","span.update-change-count",1004497295),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["update-change-count--",cljs.core.name(kind)].join(''),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(function (){var G__41764 = kind;
var G__41764__$1 = (((G__41764 instanceof cljs.core.Keyword))?G__41764.fqn:null);
switch (G__41764__$1) {
case "deleted":
var G__41765 = new cljs.core.Keyword("update","changes-deleted","update/changes-deleted",-1822170531);
var G__41766 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),n], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__41765,G__41766) : t.call(null,G__41765,G__41766));

break;
case "edited":
var G__41767 = new cljs.core.Keyword("update","changes-edited","update/changes-edited",-540506408);
var G__41768 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),n], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__41767,G__41768) : t.call(null,G__41767,G__41768));

break;
case "added":
var G__41769 = new cljs.core.Keyword("update","changes-added","update/changes-added",-751062495);
var G__41770 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),n], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__41769,G__41770) : t.call(null,G__41769,G__41770));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41764__$1)].join('')));

}
})()], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)], null);
});
hitteri.edit.pure.panel.map_panel_style = (function hitteri$edit$pure$panel$map_panel_style(height_px){
if(cljs.core.truth_(height_px)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height_px),"px"].join(''),new cljs.core.Keyword(null,"flex","flex",-1425124628),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height_px),"px"].join('')], null);
} else {
return null;
}
});
hitteri.edit.pure.panel.map_panel = (function hitteri$edit$pure$panel$map_panel(mount_update_map_fn,unmount_map_BANG_,update_map_height_px){
var map_style = hitteri.edit.pure.panel.map_panel_style(update_map_height_px);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-map-panel","div.update-map-panel",-1655291449),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(update_map_height_px)?"update-map-panel--sized":null),new cljs.core.Keyword(null,"style","style",-496642736),map_style], null),hitteri.map_panel_ui.interface$.container.container(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element-id","element-id",798606230),"update-map",new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372),mount_update_map_fn,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601),unmount_map_BANG_], null))], null);
});
hitteri.edit.pure.panel.editor_splitter = (function hitteri$edit$pure$panel$editor_splitter(set_update_map_height_BANG_,schedule_update_map_resize_BANG_,t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-editor-splitter","div.update-editor-splitter",293461329),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"role","role",-736691072),"separator",new cljs.core.Keyword(null,"aria-orientation","aria-orientation",-218196331),"horizontal",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","splitter-aria","update/splitter-aria",-710359833)) : t.call(null,new cljs.core.Keyword("update","splitter-aria","update/splitter-aria",-710359833))),new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","splitter-title","update/splitter-title",-325917087)) : t.call(null,new cljs.core.Keyword("update","splitter-title","update/splitter-title",-325917087))),new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),hitteri.edit.pure.splitter.mount_splitter_BANG_(set_update_map_height_BANG_,schedule_update_map_resize_BANG_)], null)], null);
});
hitteri.edit.pure.panel.dataset_editor_form = (function hitteri$edit$pure$panel$dataset_editor_form(props){
var map__41777 = props;
var map__41777__$1 = cljs.core.__destructure_map(map__41777);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var update_form_field_errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956));
var set_update_locality_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,new cljs.core.Keyword(null,"set-update-locality!","set-update-locality!",1973239972));
var update_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790));
var set_update_longitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,new cljs.core.Keyword(null,"set-update-longitude!","set-update-longitude!",657256715));
var set_update_latitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,new cljs.core.Keyword(null,"set-update-latitude!","set-update-latitude!",149198125));
var set_update_homepage_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,new cljs.core.Keyword(null,"set-update-homepage!","set-update-homepage!",-558436914));
var commit_update_latitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,new cljs.core.Keyword(null,"commit-update-latitude!","commit-update-latitude!",-765833102));
var set_update_name_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,new cljs.core.Keyword(null,"set-update-name!","set-update-name!",1575606643));
var commit_update_longitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,new cljs.core.Keyword(null,"commit-update-longitude!","commit-update-longitude!",220547732));
var try_paste_update_coordinates_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,new cljs.core.Keyword(null,"try-paste-update-coordinates!","try-paste-update-coordinates!",-547717292));
var map__41778 = update_form;
var map__41778__$1 = cljs.core.__destructure_map(map__41778);
var locality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"locality","locality",842809377));
var homepage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var place_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(update_form);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-editor-form","div.update-editor-form",-669913820),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-name"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","name","common/name",925592102)) : t.call(null,new cljs.core.Keyword("common","name","common/name",925592102)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-name.update-input","input#update-name.update-input",-192427667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),hitteri.edit.pure.sources.coerce_form_text(place_name),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__41779 = e.target.value;
return (set_update_name_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_name_BANG_.cljs$core$IFn$_invoke$arity$1(G__41779) : set_update_name_BANG_.call(null,G__41779));
})], null)], null)], null),hitteri.edit.pure.panel.field_error(update_form_field_errors,new cljs.core.Keyword(null,"name","name",1843675177))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-locality"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","locality","common/locality",1669293502)) : t.call(null,new cljs.core.Keyword("common","locality","common/locality",1669293502)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-locality.update-input","input#update-locality.update-input",-1242412003),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),hitteri.edit.pure.sources.coerce_form_text(locality),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__41780 = e.target.value;
return (set_update_locality_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_locality_BANG_.cljs$core$IFn$_invoke$arity$1(G__41780) : set_update_locality_BANG_.call(null,G__41780));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-longitude"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","longitude","common/longitude",-2061610691)) : t.call(null,new cljs.core.Keyword("common","longitude","common/longitude",-2061610691)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-longitude.update-input","input#update-longitude.update-input",240666201),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"inputmode","inputmode",118925090),"decimal",new cljs.core.Keyword(null,"value","value",305978217),hitteri.edit.pure.sources.coerce_form_text(longitude),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__41782 = e.target.value;
return (set_update_longitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_longitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__41782) : set_update_longitude_BANG_.call(null,G__41782));
}),new cljs.core.Keyword(null,"blur","blur",-453500461),(function (e){
var G__41783 = e.target.value;
return (commit_update_longitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? commit_update_longitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__41783) : commit_update_longitude_BANG_.call(null,G__41783));
}),new cljs.core.Keyword(null,"paste","paste",1975741548),(function (e){
if(cljs.core.truth_((function (){var G__41786 = e.clipboardData.getData("text");
return (try_paste_update_coordinates_BANG_.cljs$core$IFn$_invoke$arity$1 ? try_paste_update_coordinates_BANG_.cljs$core$IFn$_invoke$arity$1(G__41786) : try_paste_update_coordinates_BANG_.call(null,G__41786));
})())){
return e.preventDefault();
} else {
return null;
}
})], null)], null)], null),hitteri.edit.pure.panel.field_error(update_form_field_errors,new cljs.core.Keyword(null,"longitude","longitude",-1268876372))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-latitude"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","latitude","common/latitude",742931812)) : t.call(null,new cljs.core.Keyword("common","latitude","common/latitude",742931812)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-latitude.update-input","input#update-latitude.update-input",-1959537749),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"inputmode","inputmode",118925090),"decimal",new cljs.core.Keyword(null,"value","value",305978217),hitteri.edit.pure.sources.coerce_form_text(latitude),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__41787 = e.target.value;
return (set_update_latitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_latitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__41787) : set_update_latitude_BANG_.call(null,G__41787));
}),new cljs.core.Keyword(null,"blur","blur",-453500461),(function (e){
var G__41789 = e.target.value;
return (commit_update_latitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? commit_update_latitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__41789) : commit_update_latitude_BANG_.call(null,G__41789));
}),new cljs.core.Keyword(null,"paste","paste",1975741548),(function (e){
if(cljs.core.truth_((function (){var G__41790 = e.clipboardData.getData("text");
return (try_paste_update_coordinates_BANG_.cljs$core$IFn$_invoke$arity$1 ? try_paste_update_coordinates_BANG_.cljs$core$IFn$_invoke$arity$1(G__41790) : try_paste_update_coordinates_BANG_.call(null,G__41790));
})())){
return e.preventDefault();
} else {
return null;
}
})], null)], null)], null),hitteri.edit.pure.panel.field_error(update_form_field_errors,new cljs.core.Keyword(null,"latitude","latitude",394867543))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-homepage"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","homepage","common/homepage",-317319372)) : t.call(null,new cljs.core.Keyword("common","homepage","common/homepage",-317319372)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control","div.update-field-control",-1454309640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-homepage.update-input","input#update-homepage.update-input",996962875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),hitteri.edit.pure.sources.coerce_form_text(homepage),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__41791 = e.target.value;
return (set_update_homepage_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_homepage_BANG_.cljs$core$IFn$_invoke$arity$1(G__41791) : set_update_homepage_BANG_.call(null,G__41791));
})], null)], null)], null),hitteri.edit.pure.panel.field_error(update_form_field_errors,new cljs.core.Keyword(null,"homepage","homepage",-1646828249))], null)], null)], null);
});
hitteri.edit.pure.panel.topic_dropdown_toolbar = (function hitteri$edit$pure$panel$topic_dropdown_toolbar(props){
if(cljs.core.truth_(new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(props))){
var map__41794 = props;
var map__41794__$1 = cljs.core.__destructure_map(map__41794);
var update_topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41794__$1,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
var update_topic_before_pins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41794__$1,new cljs.core.Keyword(null,"update-topic-before-pins","update-topic-before-pins",998758751));
var update_topic_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41794__$1,new cljs.core.Keyword(null,"update-topic-options","update-topic-options",702207581));
var toggle_update_pin_topic_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41794__$1,new cljs.core.Keyword(null,"toggle-update-pin-topic!","toggle-update-pin-topic!",-1564443880));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41794__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var pins_mode_QMARK_ = hitteri.edit.pure.topics.pins_topic_QMARK_(update_topic);
var toggle_option = ((pins_mode_QMARK_)?hitteri.edit.pure.topics.pin_toggle_target_option(update_topic_options,update_topic_before_pins):null);
var icon_url = ((pins_mode_QMARK_)?new cljs.core.Keyword(null,"marker-url","marker-url",153262178).cljs$core$IFn$_invoke$arity$1(toggle_option):hitteri.edit.pure.topics.pins_topic_icon_url);
var btn_title = ((pins_mode_QMARK_)?new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(toggle_option):(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("topic","pins","topic/pins",1613571862)) : t.call(null,new cljs.core.Keyword("topic","pins","topic/pins",1613571862))));
var icon_topic = ((pins_mode_QMARK_)?new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(toggle_option):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-topic-toolbar-group","div.update-topic-toolbar-group",-429145703),hitteri.edit.pure.topic_dropdown.dropdown(cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-topic","update-topic",-406732688),new cljs.core.Keyword(null,"update-topic-options","update-topic-options",702207581),new cljs.core.Keyword(null,"request-update-topic-change!","request-update-topic-change!",248429750)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-topic-pin-btn","button.update-topic-pin-btn",-906933877),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),btn_title,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),btn_title,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (toggle_update_pin_topic_BANG_.cljs$core$IFn$_invoke$arity$0 ? toggle_update_pin_topic_BANG_.cljs$core$IFn$_invoke$arity$0() : toggle_update_pin_topic_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),icon_url,new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"class","class",-2030961996),((pins_mode_QMARK_)?["update-topic-pin-btn-icon update-topic-pin-btn-icon--topic",(cljs.core.truth_(icon_topic)?[" update-topic-dropdown-icon--",cljs.core.name(icon_topic)].join(''):null)].join(''):"update-topic-pin-btn-icon update-topic-pin-btn-icon--pin")], null)], null)], null)], null);
} else {
return null;
}
});
hitteri.edit.pure.panel.dataset_table_panel = (function hitteri$edit$pure$panel$dataset_table_panel(props){
var map__41818 = props;
var map__41818__$1 = cljs.core.__destructure_map(map__41818);
var set_update_sort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"set-update-sort!","set-update-sort!",-289121223));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var update_delete_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"update-delete-enabled?","update-delete-enabled?",1560914137));
var update_row_click_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"update-row-click!","update-row-click!",1826679866));
var save_update_dataset_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"save-update-dataset!","save-update-dataset!",711976314));
var update_save_dataset_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"update-save-dataset-disabled?","update-save-dataset-disabled?",-419809156));
var toggle_update_show_duplicates_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"toggle-update-show-duplicates!","toggle-update-show-duplicates!",1179935198));
var update_loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033));
var update_sort_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"update-sort-field","update-sort-field",455441377));
var toggle_selected_update_row_delete_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"toggle-selected-update-row-delete!","toggle-selected-update-row-delete!",145719074));
var update_show_duplicates_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"update-show-duplicates?","update-show-duplicates?",962796900));
var update_table_scroll_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"update-table-scroll-token","update-table-scroll-token",903188454));
var update_table_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"update-table-rows","update-table-rows",1506557351));
var update_change_counts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"update-change-counts","update-change-counts",521169385));
var update_restore_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"update-restore-enabled?","update-restore-enabled?",-2023554806));
var update_sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"update-sort-dir","update-sort-dir",-62658901));
var restore_selected_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"restore-selected-update-row!","restore-selected-update-row!",134361261));
var create_new_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"create-new-update-row!","create-new-update-row!",-1804891599));
var update_table_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41818__$1,new cljs.core.Keyword(null,"update-table-columns","update-table-columns",-828256332));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-wrap","div.update-table-wrap",1469984077),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-toolbar","div.update-table-toolbar",-1760505710),hitteri.edit.pure.panel.topic_dropdown_toolbar(props),(cljs.core.truth_(update_loading_QMARK_)?null:new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-toolbar-controls","div.update-table-toolbar-controls",-1978219037),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-restore-btn","button.update-restore-btn",2078951014),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(update_restore_enabled_QMARK_),new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","restore-title","update/restore-title",-1279668499)) : t.call(null,new cljs.core.Keyword("update","restore-title","update/restore-title",-1279668499))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (restore_selected_update_row_BANG_.cljs$core$IFn$_invoke$arity$0 ? restore_selected_update_row_BANG_.cljs$core$IFn$_invoke$arity$0() : restore_selected_update_row_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/restore.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","restore-alt","update/restore-alt",-698117915)) : t.call(null,new cljs.core.Keyword("update","restore-alt","update/restore-alt",-698117915)))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-new-btn","button.update-new-btn",2060373904),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","new","update/new",1504840111)) : t.call(null,new cljs.core.Keyword("update","new","update/new",1504840111))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (create_new_update_row_BANG_.cljs$core$IFn$_invoke$arity$0 ? create_new_update_row_BANG_.cljs$core$IFn$_invoke$arity$0() : create_new_update_row_BANG_.call(null));
})], null)], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","new","update/new",1504840111)) : t.call(null,new cljs.core.Keyword("update","new","update/new",1504840111)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-delete-btn","button.update-delete-btn",205033335),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(update_delete_enabled_QMARK_),new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","delete-title","update/delete-title",1729188532)) : t.call(null,new cljs.core.Keyword("update","delete-title","update/delete-title",1729188532))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (toggle_selected_update_row_delete_BANG_.cljs$core$IFn$_invoke$arity$0 ? toggle_selected_update_row_delete_BANG_.cljs$core$IFn$_invoke$arity$0() : toggle_selected_update_row_delete_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/trash.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","delete-alt","update/delete-alt",1928559376)) : t.call(null,new cljs.core.Keyword("update","delete-alt","update/delete-alt",1928559376)))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-duplicates-btn","button.update-duplicates-btn",-1906638145),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(update_show_duplicates_QMARK_)?"update-duplicates-btn--active":null),new cljs.core.Keyword(null,"aria-pressed","aria-pressed",-1749058631),cljs.core.boolean$(update_show_duplicates_QMARK_),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(update_show_duplicates_QMARK_)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","duplicates-show-all","update/duplicates-show-all",-358543430)) : t.call(null,new cljs.core.Keyword("update","duplicates-show-all","update/duplicates-show-all",-358543430))):(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","duplicates-show","update/duplicates-show",364705490)) : t.call(null,new cljs.core.Keyword("update","duplicates-show","update/duplicates-show",364705490)))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (toggle_update_show_duplicates_BANG_.cljs$core$IFn$_invoke$arity$0 ? toggle_update_show_duplicates_BANG_.cljs$core$IFn$_invoke$arity$0() : toggle_update_show_duplicates_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/duplicate.png",new cljs.core.Keyword(null,"alt","alt",-3214426),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","duplicates-show","update/duplicates-show",364705490)) : t.call(null,new cljs.core.Keyword("update","duplicates-show","update/duplicates-show",364705490)))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-change-counts","div.update-change-counts",-974485578),hitteri.edit.pure.panel.change_count_box(new cljs.core.Keyword(null,"deleted","deleted",-510100639),new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$2(update_change_counts,(0)),t),hitteri.edit.pure.panel.change_count_box(new cljs.core.Keyword(null,"edited","edited",-262616624),new cljs.core.Keyword(null,"edited","edited",-262616624).cljs$core$IFn$_invoke$arity$2(update_change_counts,(0)),t),hitteri.edit.pure.panel.change_count_box(new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$2(update_change_counts,(0)),t)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-dataset-save","button.update-dataset-save",414276660),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.boolean$(update_save_dataset_disabled_QMARK_),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (save_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$0 ? save_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$0() : save_update_dataset_BANG_.call(null));
})], null)], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","save","common/save",-1048148614)) : t.call(null,new cljs.core.Keyword("common","save","common/save",-1048148614)))], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-scroll","div.update-table-scroll",-802603243),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),(function (p__41827){
var map__41828 = p__41827;
var map__41828__$1 = cljs.core.__destructure_map(map__41828);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41828__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return hitteri.edit.pure.scroll.mount_table_scroll_preservation_BANG_(node);
}),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__41832){
var map__41834 = p__41832;
var map__41834__$1 = cljs.core.__destructure_map(map__41834);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41834__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return hitteri.edit.pure.scroll.sync_table_wrap_scroll_BANG_(node,update_table_scroll_token);
})], null),(cljs.core.truth_(update_loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.update-loading","p.update-loading",-569792983),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("update","loading-dataset","update/loading-dataset",-2068874911)) : t.call(null,new cljs.core.Keyword("update","loading-dataset","update/loading-dataset",-2068874911)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.update-table","table.update-table",-64080666),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.update-table-header-row","tr.update-table-header-row",-1584248135),(function (){var iter__5503__auto__ = (function hitteri$edit$pure$panel$dataset_table_panel_$_iter__41836(s__41837){
return (new cljs.core.LazySeq(null,(function (){
var s__41837__$1 = s__41837;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41837__$1);
if(temp__5825__auto__){
var s__41837__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41837__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__41837__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__41839 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__41838 = (0);
while(true){
if((i__41838 < size__5502__auto__)){
var map__41842 = cljs.core._nth(c__5501__auto__,i__41838);
var map__41842__$1 = cljs.core.__destructure_map(map__41842);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41842__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41842__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var sortable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41842__$1,new cljs.core.Keyword(null,"sortable?","sortable?",291547474));
cljs.core.chunk_append(b__41839,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"action-icon","action-icon",-355725910)))?"update-action-header":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"source-icon","source-icon",-769874141)))?"update-source-header":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"meters","meters",-1644078545)))?"update-meters-header":(cljs.core.truth_((function (){var and__5023__auto__ = sortable_QMARK_;
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
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__41838,map__41842,map__41842__$1,key,label,sortable_QMARK_,c__5501__auto__,size__5502__auto__,b__41839,s__41837__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function (_){
return (set_update_sort_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_sort_BANG_.cljs$core$IFn$_invoke$arity$1(key) : set_update_sort_BANG_.call(null,key));
});})(i__41838,map__41842,map__41842__$1,key,label,sortable_QMARK_,c__5501__auto__,size__5502__auto__,b__41839,s__41837__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
], null):null)], null),hitteri.edit.pure.cells.table_column_header(key,label,update_sort_field,update_sort_dir)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(key)], null)));

var G__41985 = (i__41838 + (1));
i__41838 = G__41985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41839),hitteri$edit$pure$panel$dataset_table_panel_$_iter__41836(cljs.core.chunk_rest(s__41837__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41839),null);
}
} else {
var map__41849 = cljs.core.first(s__41837__$2);
var map__41849__$1 = cljs.core.__destructure_map(map__41849);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41849__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41849__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var sortable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41849__$1,new cljs.core.Keyword(null,"sortable?","sortable?",291547474));
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
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__41849,map__41849__$1,key,label,sortable_QMARK_,s__41837__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function (_){
return (set_update_sort_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_sort_BANG_.cljs$core$IFn$_invoke$arity$1(key) : set_update_sort_BANG_.call(null,key));
});})(map__41849,map__41849__$1,key,label,sortable_QMARK_,s__41837__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
], null):null)], null),hitteri.edit.pure.cells.table_column_header(key,label,update_sort_field,update_sort_dir)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(key)], null)),hitteri$edit$pure$panel$dataset_table_panel_$_iter__41836(cljs.core.rest(s__41837__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(update_table_columns);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function hitteri$edit$pure$panel$dataset_table_panel_$_iter__41855(s__41856){
return (new cljs.core.LazySeq(null,(function (){
var s__41856__$1 = s__41856;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41856__$1);
if(temp__5825__auto__){
var s__41856__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41856__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__41856__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__41858 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__41857 = (0);
while(true){
if((i__41857 < size__5502__auto__)){
var map__41861 = cljs.core._nth(c__5501__auto__,i__41857);
var map__41861__$1 = cljs.core.__destructure_map(map__41861);
var row_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41861__$1,new cljs.core.Keyword(null,"row-id","row-id",246619473));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41861__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41861__$1,new cljs.core.Keyword(null,"values","values",372645556));
cljs.core.chunk_append(b__41858,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.update-row","tr.update-row",1410940785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"update-row--selected":null),new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__41857,map__41861,map__41861__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41858,s__41856__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function (_){
return (update_row_click_BANG_.cljs$core$IFn$_invoke$arity$1 ? update_row_click_BANG_.cljs$core$IFn$_invoke$arity$1(row_id) : update_row_click_BANG_.call(null,row_id));
});})(i__41857,map__41861,map__41861__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41858,s__41856__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
], null),(function (){var or__5025__auto__ = hitteri.edit.pure.panel.update_row_map_hover_handlers(values);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0))], null),(function (){var iter__5503__auto__ = ((function (i__41857,map__41861,map__41861__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41858,s__41856__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function hitteri$edit$pure$panel$dataset_table_panel_$_iter__41855_$_iter__41863(s__41864){
return (new cljs.core.LazySeq(null,((function (i__41857,map__41861,map__41861__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41858,s__41856__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function (){
var s__41864__$1 = s__41864;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__41864__$1);
if(temp__5825__auto____$1){
var s__41864__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41864__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__41864__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__41866 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__41865 = (0);
while(true){
if((i__41865 < size__5502__auto____$1)){
var map__41868 = cljs.core._nth(c__5501__auto____$1,i__41865);
var map__41868__$1 = cljs.core.__destructure_map(map__41868);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41868__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__41866,hitteri.edit.pure.cells.table_cell(row_id,values,key));

var G__41995 = (i__41865 + (1));
i__41865 = G__41995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41866),hitteri$edit$pure$panel$dataset_table_panel_$_iter__41855_$_iter__41863(cljs.core.chunk_rest(s__41864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41866),null);
}
} else {
var map__41870 = cljs.core.first(s__41864__$2);
var map__41870__$1 = cljs.core.__destructure_map(map__41870);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41870__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(hitteri.edit.pure.cells.table_cell(row_id,values,key),hitteri$edit$pure$panel$dataset_table_panel_$_iter__41855_$_iter__41863(cljs.core.rest(s__41864__$2)));
}
} else {
return null;
}
break;
}
});})(i__41857,map__41861,map__41861__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41858,s__41856__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
,null,null));
});})(i__41857,map__41861,map__41861__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__41858,s__41856__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
;
return iter__5503__auto__(update_table_columns);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_id], null)));

var G__42000 = (i__41857 + (1));
i__41857 = G__42000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41858),hitteri$edit$pure$panel$dataset_table_panel_$_iter__41855(cljs.core.chunk_rest(s__41856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41858),null);
}
} else {
var map__41871 = cljs.core.first(s__41856__$2);
var map__41871__$1 = cljs.core.__destructure_map(map__41871);
var row_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41871__$1,new cljs.core.Keyword(null,"row-id","row-id",246619473));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41871__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41871__$1,new cljs.core.Keyword(null,"values","values",372645556));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.update-row","tr.update-row",1410940785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"update-row--selected":null),new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__41871,map__41871__$1,row_id,selected_QMARK_,values,s__41856__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function (_){
return (update_row_click_BANG_.cljs$core$IFn$_invoke$arity$1 ? update_row_click_BANG_.cljs$core$IFn$_invoke$arity$1(row_id) : update_row_click_BANG_.call(null,row_id));
});})(map__41871,map__41871__$1,row_id,selected_QMARK_,values,s__41856__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
], null),(function (){var or__5025__auto__ = hitteri.edit.pure.panel.update_row_map_hover_handlers(values);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0))], null),(function (){var iter__5503__auto__ = ((function (map__41871,map__41871__$1,row_id,selected_QMARK_,values,s__41856__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns){
return (function hitteri$edit$pure$panel$dataset_table_panel_$_iter__41855_$_iter__41872(s__41873){
return (new cljs.core.LazySeq(null,(function (){
var s__41873__$1 = s__41873;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__41873__$1);
if(temp__5825__auto____$1){
var s__41873__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41873__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__41873__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__41875 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__41874 = (0);
while(true){
if((i__41874 < size__5502__auto__)){
var map__41876 = cljs.core._nth(c__5501__auto__,i__41874);
var map__41876__$1 = cljs.core.__destructure_map(map__41876);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41876__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__41875,hitteri.edit.pure.cells.table_cell(row_id,values,key));

var G__42006 = (i__41874 + (1));
i__41874 = G__42006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41875),hitteri$edit$pure$panel$dataset_table_panel_$_iter__41855_$_iter__41872(cljs.core.chunk_rest(s__41873__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41875),null);
}
} else {
var map__41879 = cljs.core.first(s__41873__$2);
var map__41879__$1 = cljs.core.__destructure_map(map__41879);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41879__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(hitteri.edit.pure.cells.table_cell(row_id,values,key),hitteri$edit$pure$panel$dataset_table_panel_$_iter__41855_$_iter__41872(cljs.core.rest(s__41873__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__41871,map__41871__$1,row_id,selected_QMARK_,values,s__41856__$2,temp__5825__auto__,map__41818,map__41818__$1,set_update_sort_BANG_,t,update_delete_enabled_QMARK_,update_row_click_BANG_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,toggle_update_show_duplicates_BANG_,update_loading_QMARK_,update_sort_field,toggle_selected_update_row_delete_BANG_,update_show_duplicates_QMARK_,update_table_scroll_token,update_table_rows,update_change_counts,update_restore_enabled_QMARK_,update_sort_dir,restore_selected_update_row_BANG_,create_new_update_row_BANG_,update_table_columns))
;
return iter__5503__auto__(update_table_columns);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_id], null)),hitteri$edit$pure$panel$dataset_table_panel_$_iter__41855(cljs.core.rest(s__41856__$2)));
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
hitteri.edit.pure.panel.view_props = (function hitteri$edit$pure$panel$view_props(state,p__41884){
var map__41885 = p__41884;
var map__41885__$1 = cljs.core.__destructure_map(map__41885);
var update_table_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41885__$1,new cljs.core.Keyword(null,"update-table-model","update-table-model",69144242));
var update_restore_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41885__$1,new cljs.core.Keyword(null,"update-restore-enabled?","update-restore-enabled?",-2023554806));
var update_save_dataset_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41885__$1,new cljs.core.Keyword(null,"update-save-dataset-disabled?","update-save-dataset-disabled?",-419809156));
var update_topic_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41885__$1,new cljs.core.Keyword(null,"update-topic-keys","update-topic-keys",1567905828));
var topic_marker_url_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41885__$1,new cljs.core.Keyword(null,"topic-marker-url-fn","topic-marker-url-fn",-1547313478));
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41885__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var map_handler_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41885__$1,new cljs.core.Keyword(null,"map-handler-props","map-handler-props",1190365928));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41885__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var map__41886 = update_table_model;
var map__41886__$1 = cljs.core.__destructure_map(map__41886);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41886__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41886__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var sort_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41886__$1,new cljs.core.Keyword(null,"sort-field","sort-field",-941433793));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41886__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var map__41887 = handlers;
var map__41887__$1 = cljs.core.__destructure_map(map__41887);
var set_update_sort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"set-update-sort!","set-update-sort!",-289121223));
var update_row_click_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"update-row-click!","update-row-click!",1826679866));
var schedule_update_map_resize_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"schedule-update-map-resize!","schedule-update-map-resize!",1506945338));
var save_update_dataset_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"save-update-dataset!","save-update-dataset!",711976314));
var toggle_update_show_duplicates_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"toggle-update-show-duplicates!","toggle-update-show-duplicates!",1179935198));
var trace_update_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"trace-update-description!","trace-update-description!",1699816190));
var save_and_switch_update_topic_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"save-and-switch-update-topic!","save-and-switch-update-topic!",482330176));
var toggle_description_edit_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"toggle-description-edit-mode!","toggle-description-edit-mode!",-361122656));
var toggle_selected_update_row_delete_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"toggle-selected-update-row-delete!","toggle-selected-update-row-delete!",145719074));
var select_update_search_result_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"select-update-search-result!","select-update-search-result!",-1924590398));
var set_update_locality_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"set-update-locality!","set-update-locality!",1973239972));
var set_update_search_query_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"set-update-search-query!","set-update-search-query!",-1015134363));
var update_search_keydown_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"update-search-keydown!","update-search-keydown!",1492427909));
var cancel_update_topic_switch_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"cancel-update-topic-switch!","cancel-update-topic-switch!",1929727784));
var toggle_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"toggle-update-row!","toggle-update-row!",230709739));
var set_update_longitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"set-update-longitude!","set-update-longitude!",657256715));
var flush_update_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"flush-update-description!","flush-update-description!",-1134668307));
var restore_selected_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"restore-selected-update-row!","restore-selected-update-row!",134361261));
var set_update_latitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"set-update-latitude!","set-update-latitude!",149198125));
var set_update_homepage_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"set-update-homepage!","set-update-homepage!",-558436914));
var set_update_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"set-update-description!","set-update-description!",15841103));
var discard_update_topic_switch_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"discard-update-topic-switch!","discard-update-topic-switch!",306244655));
var set_update_map_height_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"set-update-map-height!","set-update-map-height!",-1685152657));
var create_new_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"create-new-update-row!","create-new-update-row!",-1804891599));
var commit_update_latitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"commit-update-latitude!","commit-update-latitude!",-765833102));
var set_update_name_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"set-update-name!","set-update-name!",1575606643));
var commit_update_longitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"commit-update-longitude!","commit-update-longitude!",220547732));
var try_paste_update_coordinates_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"try-paste-update-coordinates!","try-paste-update-coordinates!",-547717292));
var request_update_topic_change_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"request-update-topic-change!","request-update-topic-change!",248429750));
var toggle_update_pin_topic_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"toggle-update-pin-topic!","toggle-update-pin-topic!",-1564443880));
var topic_options = hitteri.edit.pure.topics.topic_options_for_dropdown.cljs$core$IFn$_invoke$arity$3(update_topic_keys,t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker-url-fn","marker-url-fn",-1040432635),topic_marker_url_fn], null));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"toggle-description-edit-mode!","toggle-description-edit-mode!",-361122656),new cljs.core.Keyword(null,"save-and-switch-update-topic!","save-and-switch-update-topic!",482330176),new cljs.core.Keyword(null,"update-sort-field","update-sort-field",455441377),new cljs.core.Keyword(null,"select-update-search-result!","select-update-search-result!",-1924590398),new cljs.core.Keyword(null,"toggle-selected-update-row-delete!","toggle-selected-update-row-delete!",145719074),new cljs.core.Keyword(null,"update-search-results","update-search-results",6100547),new cljs.core.Keyword(null,"set-update-locality!","set-update-locality!",1973239972),new cljs.core.Keyword(null,"update-show-duplicates?","update-show-duplicates?",962796900),new cljs.core.Keyword(null,"mount-update-map!","mount-update-map!",881879396),new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),new cljs.core.Keyword(null,"update-search-keydown!","update-search-keydown!",1492427909),new cljs.core.Keyword(null,"set-update-search-query!","set-update-search-query!",-1015134363),new cljs.core.Keyword(null,"update-form","update-form",475718790),new cljs.core.Keyword(null,"update-table-scroll-token","update-table-scroll-token",903188454),new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729),new cljs.core.Keyword(null,"update-table-rows","update-table-rows",1506557351),new cljs.core.Keyword(null,"cancel-update-topic-switch!","cancel-update-topic-switch!",1929727784),new cljs.core.Keyword(null,"update-change-counts","update-change-counts",521169385),new cljs.core.Keyword(null,"update-restore-enabled?","update-restore-enabled?",-2023554806),new cljs.core.Keyword(null,"description-edit-mode","description-edit-mode",-1941940982),new cljs.core.Keyword(null,"set-update-longitude!","set-update-longitude!",657256715),new cljs.core.Keyword(null,"toggle-update-row!","toggle-update-row!",230709739),new cljs.core.Keyword(null,"update-sort-dir","update-sort-dir",-62658901),new cljs.core.Keyword(null,"update-map-height-px","update-map-height-px",-2093540532),new cljs.core.Keyword(null,"restore-selected-update-row!","restore-selected-update-row!",134361261),new cljs.core.Keyword(null,"set-update-latitude!","set-update-latitude!",149198125),new cljs.core.Keyword(null,"flush-update-description!","flush-update-description!",-1134668307),new cljs.core.Keyword(null,"set-update-homepage!","set-update-homepage!",-558436914),new cljs.core.Keyword(null,"update-search-query","update-search-query",761051950),new cljs.core.Keyword(null,"discard-update-topic-switch!","discard-update-topic-switch!",306244655),new cljs.core.Keyword(null,"set-update-map-height!","set-update-map-height!",-1685152657),new cljs.core.Keyword(null,"update-search-highlight-index","update-search-highlight-index",781350351),new cljs.core.Keyword(null,"set-update-description!","set-update-description!",15841103),new cljs.core.Keyword(null,"update-topic","update-topic",-406732688),new cljs.core.Keyword(null,"create-new-update-row!","create-new-update-row!",-1804891599),new cljs.core.Keyword(null,"update-topic-switch-pending?","update-topic-switch-pending?",-1319259407),new cljs.core.Keyword(null,"commit-update-latitude!","commit-update-latitude!",-765833102),new cljs.core.Keyword(null,"description-sync-token","description-sync-token",-1307199437),new cljs.core.Keyword(null,"set-update-name!","set-update-name!",1575606643),new cljs.core.Keyword(null,"update-message","update-message",109684659),new cljs.core.Keyword(null,"update-error","update-error",-572386700),new cljs.core.Keyword(null,"commit-update-longitude!","commit-update-longitude!",220547732),new cljs.core.Keyword(null,"try-paste-update-coordinates!","try-paste-update-coordinates!",-547717292),new cljs.core.Keyword(null,"update-table-columns","update-table-columns",-828256332),new cljs.core.Keyword(null,"request-update-topic-change!","request-update-topic-change!",248429750),new cljs.core.Keyword(null,"toggle-update-pin-topic!","toggle-update-pin-topic!",-1564443880),new cljs.core.Keyword(null,"set-update-sort!","set-update-sort!",-289121223),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"update-delete-enabled?","update-delete-enabled?",1560914137),new cljs.core.Keyword(null,"update-row-click!","update-row-click!",1826679866),new cljs.core.Keyword(null,"schedule-update-map-resize!","schedule-update-map-resize!",1506945338),new cljs.core.Keyword(null,"save-update-dataset!","save-update-dataset!",711976314),new cljs.core.Keyword(null,"update-search-loading?","update-search-loading?",-489958821),new cljs.core.Keyword(null,"update-save-dataset-disabled?","update-save-dataset-disabled?",-419809156),new cljs.core.Keyword(null,"update-topic-options","update-topic-options",702207581),new cljs.core.Keyword(null,"toggle-update-show-duplicates!","toggle-update-show-duplicates!",1179935198),new cljs.core.Keyword(null,"trace-update-description!","trace-update-description!",1699816190),new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033),new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601),new cljs.core.Keyword(null,"update-topic-before-pins","update-topic-before-pins",998758751)],[toggle_description_edit_mode_BANG_,save_and_switch_update_topic_BANG_,sort_field,select_update_search_result_BANG_,toggle_selected_update_row_delete_BANG_,new cljs.core.Keyword(null,"update-search-results","update-search-results",6100547).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY),set_update_locality_BANG_,new cljs.core.Keyword(null,"update-show-duplicates?","update-show-duplicates?",962796900).cljs$core$IFn$_invoke$arity$2(state,false),new cljs.core.Keyword(null,"mount-update-map!","mount-update-map!",881879396).cljs$core$IFn$_invoke$arity$1(map_handler_props),new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentArrayMap.EMPTY),update_search_keydown_BANG_,set_update_search_query_BANG_,new cljs.core.Keyword(null,"update-form","update-form",475718790).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"update-table-scroll-token","update-table-scroll-token",903188454).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(state),rows,cancel_update_topic_switch_BANG_,hitteri.edit.pure.model.dataset_change_counts(state),update_restore_enabled_QMARK_,new cljs.core.Keyword(null,"description-edit-mode","description-edit-mode",-1941940982).cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"text","text",-1790561697)),set_update_longitude_BANG_,toggle_update_row_BANG_,sort_dir,new cljs.core.Keyword(null,"update-map-height-px","update-map-height-px",-2093540532).cljs$core$IFn$_invoke$arity$1(state),restore_selected_update_row_BANG_,set_update_latitude_BANG_,flush_update_description_BANG_,set_update_homepage_BANG_,new cljs.core.Keyword(null,"update-search-query","update-search-query",761051950).cljs$core$IFn$_invoke$arity$2(state,""),discard_update_topic_switch_BANG_,set_update_map_height_BANG_,new cljs.core.Keyword(null,"update-search-highlight-index","update-search-highlight-index",781350351).cljs$core$IFn$_invoke$arity$1(state),set_update_description_BANG_,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(state),create_new_update_row_BANG_,(!((new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723).cljs$core$IFn$_invoke$arity$1(state) == null))),commit_update_latitude_BANG_,new cljs.core.Keyword(null,"description-sync-token","description-sync-token",-1307199437).cljs$core$IFn$_invoke$arity$2(state,(0)),set_update_name_BANG_,new cljs.core.Keyword(null,"update-message","update-message",109684659).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"update-error","update-error",-572386700).cljs$core$IFn$_invoke$arity$1(state),commit_update_longitude_BANG_,try_paste_update_coordinates_BANG_,columns,request_update_topic_change_BANG_,toggle_update_pin_topic_BANG_,set_update_sort_BANG_,t,(!((new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(state) == null))),update_row_click_BANG_,schedule_update_map_resize_BANG_,save_update_dataset_BANG_,new cljs.core.Keyword(null,"update-search-loading?","update-search-loading?",-489958821).cljs$core$IFn$_invoke$arity$2(state,false),update_save_dataset_disabled_QMARK_,topic_options,toggle_update_show_duplicates_BANG_,trace_update_description_BANG_,new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601).cljs$core$IFn$_invoke$arity$1(map_handler_props),new cljs.core.Keyword(null,"update-topic-before-pins","update-topic-before-pins",998758751).cljs$core$IFn$_invoke$arity$1(state)]);
});
hitteri.edit.pure.panel.panel = (function hitteri$edit$pure$panel$panel(p__41895){
var map__41897 = p__41895;
var map__41897__$1 = cljs.core.__destructure_map(map__41897);
var panel_props = map__41897__$1;
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41897__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var schedule_update_map_resize_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"schedule-update-map-resize!","schedule-update-map-resize!",1506945338));
var pin_editor_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186));
var trace_update_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"trace-update-description!","trace-update-description!",1699816190));
var toggle_description_edit_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"toggle-description-edit-mode!","toggle-description-edit-mode!",-361122656));
var update_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790));
var description_edit_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"description-edit-mode","description-edit-mode",-1941940982));
var update_map_height_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"update-map-height-px","update-map-height-px",-2093540532));
var flush_update_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"flush-update-description!","flush-update-description!",-1134668307));
var set_update_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"set-update-description!","set-update-description!",15841103));
var set_update_map_height_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"set-update-map-height!","set-update-map-height!",-1685152657));
var update_topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
var update_topic_switch_pending_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"update-topic-switch-pending?","update-topic-switch-pending?",-1319259407));
var update_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"update-message","update-message",109684659));
var description_sync_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"description-sync-token","description-sync-token",-1307199437));
var update_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"update-error","update-error",-572386700));
var mount_update_map_fn = new cljs.core.Keyword(null,"mount-update-map!","mount-update-map!",881879396).cljs$core$IFn$_invoke$arity$1(panel_props);
var unmount_map_BANG_ = new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601).cljs$core$IFn$_invoke$arity$1(panel_props);
var pins_mode_QMARK_ = hitteri.edit.pure.topics.pins_topic_QMARK_(update_topic);
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
var map__41899 = update_form;
var map__41899__$1 = cljs.core.__destructure_map(map__41899);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41899__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.update-section","section.update-section",1226877624),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(update_topic_switch_pending_QMARK_)?"update-section--topic-switch-dialog-open ":null),((pins_mode_QMARK_)?"update-section--pins":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-layout","div.update-layout",-1595906759),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.update-editor","aside.update-editor",415227631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(update_map_height_px)?"update-editor--split-set ":null)], null),((pins_mode_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-editor-form.update-description-pane","div.update-editor-form.update-description-pane",-1509168342),hitteri.pin_ui.interface$.editor_pane.editor_pane.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(panel_props,new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),pin_editor_mode)], 0))], null):hitteri.edit.pure.panel.dataset_editor_form(panel_props)),((pins_mode_QMARK_)?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-description-pane","div.update-description-pane",408898251),hitteri.html.interface$.description_field.description_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"toggle-mode!","toggle-mode!",953048551),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"trace-description!","trace-description!",-965598387),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"flush-description!","flush-description!",893680917),new cljs.core.Keyword(null,"set-description!","set-description!",-1732307848),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"sync-token","sync-token",-2023041987)],[description,toggle_description_edit_mode_BANG_,description_edit_mode_STAR_,trace_update_description_BANG_,"update-description",flush_update_description_BANG_,set_update_description_BANG_,t,description_sync_token_STAR_])], 0)),(function (){var temp__5825__auto__ = hitteri.map_panel_ui.interface$.status.display_status_text(update_error);
if(cljs.core.truth_(temp__5825__auto__)){
var err = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.update-error","p.update-error",-646246208),err], null);
} else {
return null;
}
})(),(function (){var temp__5825__auto__ = hitteri.map_panel_ui.interface$.status.display_status_text(update_message);
if(cljs.core.truth_(temp__5825__auto__)){
var msg = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.update-message","p.update-message",935414982),msg], null);
} else {
return null;
}
})()], null)),hitteri.edit.pure.panel.editor_splitter(set_update_map_height_BANG_,schedule_update_map_resize_BANG_,t),hitteri.edit.pure.panel.map_panel(mount_update_map_fn,unmount_map_BANG_,update_map_height_px)], null),((pins_mode_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pin-list-panel","div.pin-list-panel",612331548),hitteri.pin_ui.interface$.list_panel.list_panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(panel_props,new cljs.core.Keyword(null,"show-editor-overlay?","show-editor-overlay?",-560954009),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-preview-toggle?","show-preview-toggle?",-1748844803),false,new cljs.core.Keyword(null,"show-drag-handle?","show-drag-handle?",1932372815),false,new cljs.core.Keyword(null,"drag-from-whole-row?","drag-from-whole-row?",-1511920820),true,new cljs.core.Keyword(null,"show-toolbar-search?","show-toolbar-search?",-1693188066),true,new cljs.core.Keyword(null,"toolbar-prefix","toolbar-prefix",-995925094),hitteri.edit.pure.panel.topic_dropdown_toolbar(panel_props)], 0))], 0))], null):hitteri.edit.pure.panel.dataset_table_panel(panel_props))], null),(cljs.core.truth_(update_topic_switch_pending_QMARK_)?hitteri.edit.pure.topic_switch_dialog.dialog(panel_props):null)], null);
});

//# sourceMappingURL=hitteri.edit.pure.panel.js.map
