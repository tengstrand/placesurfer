goog.provide('placesurfer.app_ui.state');
placesurfer.app_ui.state.default_active_topics = (function placesurfer$app_ui$state$default_active_topics(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"discgolf","discgolf",416907656),null], null), null);
});
placesurfer.app_ui.state.default_layer_color = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"r","r",-471384190),(255),new cljs.core.Keyword(null,"g","g",1738089905),(69),new cljs.core.Keyword(null,"b","b",1482224470),(0),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(0),new cljs.core.Keyword(null,"opacity","opacity",397153780),(35)], null);
placesurfer.app_ui.state.default_update_form = (function placesurfer$app_ui$state$default_update_form(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"google-url","google-url",1168346589),"",new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"location","location",1815599388),"",new cljs.core.Keyword(null,"homepage","homepage",-1646828249),"",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"longitude","longitude",-1268876372),"",new cljs.core.Keyword(null,"latitude","latitude",394867543),"",new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"manual","manual",-237370608)], null);
});
placesurfer.app_ui.state.default_pin_form = (function placesurfer$app_ui$state$default_pin_form(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"location","location",1815599388),"",new cljs.core.Keyword(null,"icon","icon",1679606541),"pin-orange.png",new cljs.core.Keyword(null,"longitude","longitude",-1268876372),"",new cljs.core.Keyword(null,"latitude","latitude",394867543),"",new cljs.core.Keyword(null,"url","url",276297046),"",new cljs.core.Keyword(null,"image","image",-58725096),"",new cljs.core.Keyword(null,"description","description",-1428560544),""], null);
});
placesurfer.app_ui.state.clear_update_selection_state = (function placesurfer$app_ui$state$clear_update_selection_state(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),null,new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),null,new cljs.core.Keyword(null,"update-form","update-form",475718790),placesurfer.app_ui.state.default_update_form(),new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),null,new cljs.core.Keyword(null,"update-sort","update-sort",-1611336622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),null,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], 0));
});
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.app_ui !== 'undefined') && (typeof placesurfer.app_ui.state !== 'undefined') && (typeof placesurfer.app_ui.state._BANG_state !== 'undefined')){
} else {
placesurfer.app_ui.state._BANG_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"update-row-baseline","update-row-baseline",-1034088672),new cljs.core.Keyword(null,"pin-table-keyboard-focus?","pin-table-keyboard-focus?",-1363284319),new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873),new cljs.core.Keyword(null,"country-loading?","country-loading?",-144475327),new cljs.core.Keyword(null,"country-highlight-index","country-highlight-index",-1271997150),new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722),new cljs.core.Keyword(null,"update-search-results","update-search-results",6100547),new cljs.core.Keyword(null,"update-show-duplicates?","update-show-duplicates?",962796900),new cljs.core.Keyword(null,"update-form-field-errors","update-form-field-errors",-1735528956),new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563),new cljs.core.Keyword(null,"update-form","update-form",475718790),new cljs.core.Keyword(null,"update-table-scroll-token","update-table-scroll-token",903188454),new cljs.core.Keyword(null,"pin-editor-open?","pin-editor-open?",1076821159),new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729),new cljs.core.Keyword(null,"update-disk-baseline","update-disk-baseline",-1912505529),new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040),new cljs.core.Keyword(null,"pin-separator-overlay-selected-id","pin-separator-overlay-selected-id",358246088),new cljs.core.Keyword(null,"pin-separator-overlay-snapshot","pin-separator-overlay-snapshot",-1756599608),new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504),new cljs.core.Keyword(null,"pin-show-search?","pin-show-search?",-437021687),new cljs.core.Keyword(null,"pin-separator-overlay-editing-id","pin-separator-overlay-editing-id",1360013865),new cljs.core.Keyword(null,"description-edit-mode","description-edit-mode",-1941940982),new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),new cljs.core.Keyword(null,"update-disk-save-snapshot","update-disk-save-snapshot",-594529398),new cljs.core.Keyword(null,"pin-show-preview?","pin-show-preview?",837912811),new cljs.core.Keyword(null,"update-columns","update-columns",666065227),new cljs.core.Keyword(null,"update-topic-switch-pending","update-topic-switch-pending",1022463723),new cljs.core.Keyword(null,"pin-new-draft-id","pin-new-draft-id",1457124075),new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"map-restore-view","map-restore-view",1509489165),new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147),new cljs.core.Keyword(null,"active-topics","active-topics",1278012558),new cljs.core.Keyword(null,"countries","countries",863192750),new cljs.core.Keyword(null,"update-search-query","update-search-query",761051950),new cljs.core.Keyword(null,"update-topic","update-topic",-406732688),new cljs.core.Keyword(null,"pin-editor-snapshot","pin-editor-snapshot",-352879376),new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288),new cljs.core.Keyword(null,"update-form-reset-token","update-form-reset-token",1427860817),new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191),new cljs.core.Keyword(null,"active-overlays","active-overlays",786029233),new cljs.core.Keyword(null,"update-sort","update-sort",-1611336622),new cljs.core.Keyword(null,"map-country-pick?","map-country-pick?",-197660270),new cljs.core.Keyword(null,"description-sync-token","description-sync-token",-1307199437),new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117),new cljs.core.Keyword(null,"update-message","update-message",109684659),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"country-slug","country-slug",769681844),new cljs.core.Keyword(null,"update-error","update-error",-572386700),new cljs.core.Keyword(null,"app-version","app-version",361554836),new cljs.core.Keyword(null,"draw-selected-layer-id","draw-selected-layer-id",-1205706411),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"pin-show-topics-on-map?","pin-show-topics-on-map?",744248117),new cljs.core.Keyword(null,"pin-table-rows","pin-table-rows",729424278),new cljs.core.Keyword(null,"pin-separator-overlay-open?","pin-separator-overlay-open?",-1998521386),new cljs.core.Keyword(null,"pin-separator-overlay-draft-label","pin-separator-overlay-draft-label",-1116073608),new cljs.core.Keyword(null,"update-pending-places","update-pending-places",-1248905352),new cljs.core.Keyword(null,"update-search-loading?","update-search-loading?",-489958821),new cljs.core.Keyword(null,"draw-layer-draft-label","draw-layer-draft-label",1594615451),new cljs.core.Keyword(null,"pin-items","pin-items",-1214148100),new cljs.core.Keyword(null,"update-dataset-cache","update-dataset-cache",1886215100),new cljs.core.Keyword(null,"loading-topics","loading-topics",-224989252),new cljs.core.Keyword(null,"country-filter","country-filter",-2099038819),new cljs.core.Keyword(null,"countries-loading?","countries-loading?",-1018911139),new cljs.core.Keyword(null,"pin-editor-mode","pin-editor-mode",-577269186),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033),new cljs.core.Keyword(null,"update-url-form","update-url-form",-125092673),new cljs.core.Keyword(null,"update-topic-before-pins","update-topic-before-pins",998758751)],[null,false,"",false,null,"SE",cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,null,placesurfer.app_ui.state.default_update_form(),(0),false,new cljs.core.Keyword(null,"en","en",88457073),false,null,cljs.core.PersistentVector.EMPTY,null,null,false,false,null,new cljs.core.Keyword(null,"text","text",-1790561697),placesurfer.app_ui.state.default_pin_form(),null,false,cljs.core.PersistentVector.EMPTY,null,null,placesurfer.app_ui.state.default_pin_form(),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"flood",new cljs.core.Keyword(null,"label","label",1718410804),"\u00D6versv\u00E4mningsomr\u00E5den",new cljs.core.Keyword(null,"color","color",1011675173),placesurfer.app_ui.state.default_layer_color], null)], null),new cljs.core.Keyword(null,"home","home",-74557309),null,cljs.core.PersistentVector.EMPTY,placesurfer.app_ui.state.default_active_topics(),cljs.core.PersistentVector.EMPTY,"",null,null,cljs.core.PersistentVector.EMPTY,(0),null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),null,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"asc","asc",356854569)], null),false,(0),"SE",null,"Loading","sweden",null,(0),"flood",(0),true,cljs.core.PersistentVector.EMPTY,false,"",cljs.core.PersistentVector.EMPTY,false,"",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,"",false,null,cljs.core.PersistentVector.EMPTY,null,false,null,null]));
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.app_ui !== 'undefined') && (typeof placesurfer.app_ui.state !== 'undefined') && (typeof placesurfer.app_ui.state._BANG_resolve_location_request_id !== 'undefined')){
} else {
placesurfer.app_ui.state._BANG_resolve_location_request_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.app_ui !== 'undefined') && (typeof placesurfer.app_ui.state !== 'undefined') && (typeof placesurfer.app_ui.state._BANG_update_load_request_id !== 'undefined')){
} else {
placesurfer.app_ui.state._BANG_update_load_request_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.app_ui !== 'undefined') && (typeof placesurfer.app_ui.state !== 'undefined') && (typeof placesurfer.app_ui.state._BANG_update_pending_id_seq !== 'undefined')){
} else {
placesurfer.app_ui.state._BANG_update_pending_id_seq = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.app_ui !== 'undefined') && (typeof placesurfer.app_ui.state !== 'undefined') && (typeof placesurfer.app_ui.state._BANG_health_check_request_id !== 'undefined')){
} else {
placesurfer.app_ui.state._BANG_health_check_request_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.app_ui !== 'undefined') && (typeof placesurfer.app_ui.state !== 'undefined') && (typeof placesurfer.app_ui.state._BANG_backend_health_online_QMARK_ !== 'undefined')){
} else {
placesurfer.app_ui.state._BANG_backend_health_online_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.app_ui !== 'undefined') && (typeof placesurfer.app_ui.state !== 'undefined') && (typeof placesurfer.app_ui.state._BANG_load_id !== 'undefined')){
} else {
placesurfer.app_ui.state._BANG_load_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.app_ui !== 'undefined') && (typeof placesurfer.app_ui.state !== 'undefined') && (typeof placesurfer.app_ui.state._BANG_topic_load_ids !== 'undefined')){
} else {
placesurfer.app_ui.state._BANG_topic_load_ids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.app_ui !== 'undefined') && (typeof placesurfer.app_ui.state !== 'undefined') && (typeof placesurfer.app_ui.state._BANG_countries_load_request_id !== 'undefined')){
} else {
placesurfer.app_ui.state._BANG_countries_load_request_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.app_ui !== 'undefined') && (typeof placesurfer.app_ui.state !== 'undefined') && (typeof placesurfer.app_ui.state._BANG_countries_load_promise !== 'undefined')){
} else {
placesurfer.app_ui.state._BANG_countries_load_promise = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
placesurfer.app_ui.state.clear_update_status_BANG_ = (function placesurfer$app_ui$state$clear_update_status_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-error","update-error",-572386700),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-message","update-message",109684659),null], 0));
});
placesurfer.app_ui.state.normalize_country_code = (function placesurfer$app_ui$state$normalize_country_code(s){
var G__61765 = s;
var G__61765__$1 = (((G__61765 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61765));
var G__61765__$2 = (((G__61765__$1 == null))?null:clojure.string.trim(G__61765__$1));
if((G__61765__$2 == null)){
return null;
} else {
return clojure.string.upper_case(G__61765__$2);
}
});
placesurfer.app_ui.state.non_empty_js_string_QMARK_ = (function placesurfer$app_ui$state$non_empty_js_string_QMARK_(v){
if(typeof v === 'string'){
var s = clojure.string.trim(v);
if(cljs.core.seq(s)){
return s;
} else {
return null;
}
} else {
return null;
}
});
placesurfer.app_ui.state.non_empty_text_QMARK_ = (function placesurfer$app_ui$state$non_empty_text_QMARK_(v){
var temp__5825__auto__ = ((typeof v === 'string')?cljs.core.not_empty(clojure.string.trim(v)):(((!((v == null))))?cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))):null
));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
return s;
} else {
return null;
}
});
placesurfer.app_ui.state.update_error_text = (function placesurfer$app_ui$state$update_error_text(v){
var or__5025__auto__ = placesurfer.app_ui.state.non_empty_js_string_QMARK_(v);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if((!((v == null)))){
var s = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
if(cljs.core.seq(s)){
return s;
} else {
return null;
}
} else {
return null;
}
}
});
placesurfer.app_ui.state.valid_topic_QMARK_ = (function placesurfer$app_ui$state$valid_topic_QMARK_(topic){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,new cljs.core.Keyword(null,"pins","pins",1725193285))) || (cljs.core.contains_QMARK_(cljs.core.set(placesurfer.topic.interface$.topic_keys()),topic)));
});
placesurfer.app_ui.state.visible_positions = (function placesurfer$app_ui$state$visible_positions(s){
var active = cljs.core.set(new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(s));
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61766_SHARP_){
return cljs.core.contains_QMARK_(active,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__61766_SHARP_));
}),new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(s)));
});
placesurfer.app_ui.state.bump_description_sync_token = (function placesurfer$app_ui$state$bump_description_sync_token(s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"description-sync-token","description-sync-token",-1307199437),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});
placesurfer.app_ui.state.reset_description_editor_state = (function placesurfer$app_ui$state$reset_description_editor_state(s){
return placesurfer.app_ui.state.bump_description_sync_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"description-edit-mode","description-edit-mode",-1941940982),new cljs.core.Keyword(null,"text","text",-1790561697)));
});

//# sourceMappingURL=placesurfer.app_ui.state.js.map
