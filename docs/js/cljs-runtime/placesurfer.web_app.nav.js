goog.provide('placesurfer.web_app.nav');
placesurfer.web_app.nav.show_update_topic_hint_BANG_ = (function placesurfer$web_app$nav$show_update_topic_hint_BANG_(){
placesurfer.nav_ui.interface$.toast.show_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.web_app.state._BANG_state),new cljs.core.Keyword(null,"en","en",88457073)),new cljs.core.Keyword("nav","update-topic-hint","nav/update-topic-hint",1451152859)], 0))], 0));

return placesurfer.web_app.effects.render_BANG_();
});
placesurfer.web_app.nav.small_screen_QMARK_ = (function placesurfer$web_app$nav$small_screen_QMARK_(){
try{return (window.innerWidth <= (767));
}catch (e44999){var _ = e44999;
return false;
}});
placesurfer.web_app.nav.focus_country_search_BANG_ = (function placesurfer$web_app$nav$focus_country_search_BANG_(){
var seq__45000 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(60),(140),(260)], null));
var chunk__45001 = null;
var count__45002 = (0);
var i__45003 = (0);
while(true){
if((i__45003 < count__45002)){
var delay_ms = chunk__45001.cljs$core$IIndexed$_nth$arity$2(null,i__45003);
setTimeout(((function (seq__45000,chunk__45001,count__45002,i__45003,delay_ms){
return (function (){
var temp__5825__auto__ = document.querySelector(".country-search");
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return el.focus();
} else {
return null;
}
});})(seq__45000,chunk__45001,count__45002,i__45003,delay_ms))
,delay_ms);


var G__45010 = seq__45000;
var G__45011 = chunk__45001;
var G__45012 = count__45002;
var G__45013 = (i__45003 + (1));
seq__45000 = G__45010;
chunk__45001 = G__45011;
count__45002 = G__45012;
i__45003 = G__45013;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__45000);
if(temp__5825__auto__){
var seq__45000__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45000__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__45000__$1);
var G__45014 = cljs.core.chunk_rest(seq__45000__$1);
var G__45015 = c__5548__auto__;
var G__45016 = cljs.core.count(c__5548__auto__);
var G__45017 = (0);
seq__45000 = G__45014;
chunk__45001 = G__45015;
count__45002 = G__45016;
i__45003 = G__45017;
continue;
} else {
var delay_ms = cljs.core.first(seq__45000__$1);
setTimeout(((function (seq__45000,chunk__45001,count__45002,i__45003,delay_ms,seq__45000__$1,temp__5825__auto__){
return (function (){
var temp__5825__auto____$1 = document.querySelector(".country-search");
if(cljs.core.truth_(temp__5825__auto____$1)){
var el = temp__5825__auto____$1;
return el.focus();
} else {
return null;
}
});})(seq__45000,chunk__45001,count__45002,i__45003,delay_ms,seq__45000__$1,temp__5825__auto__))
,delay_ms);


var G__45018 = cljs.core.next(seq__45000__$1);
var G__45019 = null;
var G__45020 = (0);
var G__45021 = (0);
seq__45000 = G__45018;
chunk__45001 = G__45019;
count__45002 = G__45020;
i__45003 = G__45021;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.web_app.nav.track_page_BANG_ = (function placesurfer$web_app$nav$track_page_BANG_(page){
return placesurfer.web_app.analytics.track_page_BANG_(page);
});
placesurfer.web_app.nav.navigate_to_pin_BANG_ = (function placesurfer$web_app$nav$navigate_to_pin_BANG_(){
return (placesurfer.web_app.nav.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? placesurfer.web_app.nav.navigate_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pin","pin",-2111774834)) : placesurfer.web_app.nav.navigate_BANG_.call(null,new cljs.core.Keyword(null,"pin","pin",-2111774834)));
});
placesurfer.web_app.nav.navigate_to_update_BANG_ = (function placesurfer$web_app$nav$navigate_to_update_BANG_(){
var s = cljs.core.deref(placesurfer.web_app.state._BANG_state);
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(s));
if(and__5023__auto____$1){
return placesurfer.edit.interface$.topics.pins_topic_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s)], 0));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return placesurfer.edit.interface$.handlers.topic.toggle_update_pin_topic_BANG_();
} else {
return (placesurfer.web_app.nav.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? placesurfer.web_app.nav.navigate_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"update","update",1045576396)) : placesurfer.web_app.nav.navigate_BANG_.call(null,new cljs.core.Keyword(null,"update","update",1045576396)));
}
});
placesurfer.web_app.nav.navigate_BANG_ = (function placesurfer$web_app$nav$navigate_BANG_(page){
var prev_page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state));
var target_page = page;
var leaving_update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),prev_page);
var leaving_groups_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"groups","groups",-136896102),prev_page);
var map__45004 = placesurfer.country.interface$.navigate_country_plan(target_page);
var map__45004__$1 = cljs.core.__destructure_map(map__45004);
var focus_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45004__$1,new cljs.core.Keyword(null,"focus-search?","focus-search?",-1381981880));
if(((leaving_update_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target_page,new cljs.core.Keyword(null,"update","update",1045576396))))){
placesurfer.edit.interface$.handlers.save.save_current_update_dataset_to_cache_if_clean_BANG_();
} else {
}

if(((leaving_groups_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target_page,new cljs.core.Keyword(null,"groups","groups",-136896102))))){
placesurfer.group_ui.interface$.handlers.leave_groups_page_BANG_();
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.state._BANG_state,(function (s){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"page","page",849072397),target_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"map-country-pick?","map-country-pick?",-197660270),false], 0)),new cljs.core.Keyword(null,"map-restore-view","map-restore-view",1509489165));
}));

placesurfer.web_app.effects.render_BANG_();

if(placesurfer.app_ui.interface$.pages.map_page_QMARK_(target_page)){
setTimeout((function (){
return placesurfer.map_ui.interface$.resize_map_BANG_();
}),(50));
} else {
}

if(cljs.core.truth_(focus_search_QMARK_)){
placesurfer.web_app.nav.focus_country_search_BANG_();
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_page,new cljs.core.Keyword(null,"update","update",1045576396))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.state._BANG_state,(function (s){
var G__45005 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "SE";
}
}
})());
if((new cljs.core.Keyword(null,"update-selected-row-id","update-selected-row-id",-407969563).cljs$core$IFn$_invoke$arity$1(s) == null)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__45005,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-form","update-form",475718790),new cljs.core.Keyword(null,"source","source",-433931539)], null),placesurfer.edit.interface$.baseline.normalize_update_source);
} else {
return G__45005;
}
}));

placesurfer.edit.interface$.handlers.topic.ensure_update_topic_BANG_();

placesurfer.web_app.backend.check_backend_BANG_();

if(cljs.core.truth_(placesurfer.edit.interface$.topics.pins_topic_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state))], 0)))){
placesurfer.pin_ui.interface$.handlers.rows.refresh_pin_table_BANG_();

placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_();
} else {
placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_();

placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_();
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_page,new cljs.core.Keyword(null,"pin","pin",-2111774834))){
placesurfer.pin_ui.interface$.handlers.rows.refresh_pin_table_BANG_();

placesurfer.pin_ui.interface$.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true], null)], 0));

placesurfer.pin_ui.interface$.handlers.editor.focus_pin_toolbar_search_BANG_();
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_page,new cljs.core.Keyword(null,"groups","groups",-136896102))){
placesurfer.group_ui.interface$.handlers.init_groups_edit_BANG_();
} else {
}

if(placesurfer.app_ui.interface$.pages.map_page_QMARK_(target_page)){
placesurfer.web_app.map_sync.schedule_map_resize_BANG_();

placesurfer.web_app.map_sync.sync_map_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fit?","fit?",1773758200),false,new cljs.core.Keyword(null,"animate?","animate?",-1559039739),false], null));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_page,new cljs.core.Keyword(null,"topic","topic",-1960480691))){
placesurfer.app_ui.interface$.load.ensure_active_topic_positions_BANG_();
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_page,new cljs.core.Keyword(null,"country","country",312965309))){
placesurfer.app_ui.interface$.load.ensure_countries_loaded_BANG_();
} else {
}

placesurfer.web_app.effects.sync_marker_pick_handler_BANG_();

placesurfer.web_app.map_country.sync_map_country_pick_BANG_();

return placesurfer.web_app.nav.track_page_BANG_(target_page);
});
placesurfer.web_app.nav.select_country_BANG_ = (function placesurfer$web_app$nav$select_country_BANG_(slug){
placesurfer.web_app.map_country.disable_country_pick_BANG_();

var map__45006 = placesurfer.country.interface$.select_country_plan(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-slug","current-slug",-1084358059),new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)),new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),placesurfer.web_app.nav.small_screen_QMARK_()], null),slug);
var map__45006__$1 = cljs.core.__destructure_map(map__45006);
var same_country_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45006__$1,new cljs.core.Keyword(null,"same-country?","same-country?",2096767045));
var clear_filter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45006__$1,new cljs.core.Keyword(null,"clear-filter?","clear-filter?",-1068595548));
var switch_to_country_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45006__$1,new cljs.core.Keyword(null,"switch-to-country-page?","switch-to-country-page?",1468335198));
var focus_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45006__$1,new cljs.core.Keyword(null,"focus-search?","focus-search?",-1381981880));
var load_country_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45006__$1,new cljs.core.Keyword(null,"load-country?","load-country?",-2106770458));
var navigate_home_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45006__$1,new cljs.core.Keyword(null,"navigate-home?","navigate-home?",-828264994));
var load_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45006__$1,new cljs.core.Keyword(null,"load-options","load-options",-38528641));
if(cljs.core.truth_(clear_filter_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"country-filter","country-filter",-2099038819),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"country-highlight-index","country-highlight-index",-1271997150),null], 0));
} else {
}

if(cljs.core.truth_(same_country_QMARK_)){
return placesurfer.web_app.effects.render_BANG_();
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.state._BANG_state,(function (s){
return placesurfer.web_app.state.clear_update_selection_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722),(function (){var or__5025__auto__ = placesurfer.country.interface$.iso_for_slug(slug,new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "SE";
}
}
})()));
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))){
if(cljs.core.truth_(placesurfer.edit.interface$.topics.pins_topic_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state))], 0)))){
placesurfer.pin_ui.interface$.handlers.rows.refresh_pin_table_BANG_();

placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_();
} else {
placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-selection?","clear-selection?",624435603),true], null)], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))){
placesurfer.pin_ui.interface$.handlers.rows.refresh_pin_table_BANG_();
} else {
}

if(cljs.core.truth_(switch_to_country_page_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"country","country",312965309));

placesurfer.web_app.effects.render_BANG_();

if(cljs.core.truth_(focus_search_QMARK_)){
placesurfer.web_app.nav.focus_country_search_BANG_();
} else {
}
} else {
}

if(cljs.core.truth_(load_country_QMARK_)){
placesurfer.app_ui.interface$.load.load_country_BANG_(slug,load_options);
} else {
}

if(cljs.core.truth_(navigate_home_QMARK_)){
return placesurfer.web_app.nav.navigate_BANG_(new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}

}
});
placesurfer.web_app.nav.set_country_filter_BANG_ = (function placesurfer$web_app$nav$set_country_filter_BANG_(var_args){
var G__45008 = arguments.length;
switch (G__45008) {
case 1:
return placesurfer.web_app.nav.set_country_filter_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return placesurfer.web_app.nav.set_country_filter_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(placesurfer.web_app.nav.set_country_filter_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (query){
return placesurfer.web_app.nav.set_country_filter_BANG_.cljs$core$IFn$_invoke$arity$2(query,null);
}));

(placesurfer.web_app.nav.set_country_filter_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (query,visible_count){
var map__45009_45023 = placesurfer.country.interface$.set_country_filter_plan(query);
var map__45009_45024__$1 = cljs.core.__destructure_map(map__45009_45023);
var country_filter_45025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45009_45024__$1,new cljs.core.Keyword(null,"country-filter","country-filter",-2099038819));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"country-filter","country-filter",-2099038819),country_filter_45025,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"country-highlight-index","country-highlight-index",-1271997150),(((!((visible_count == null))))?placesurfer.country.interface$.highlight_index_after_filter(visible_count):new cljs.core.Keyword(null,"country-highlight-index","country-highlight-index",-1271997150).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))], 0));

return placesurfer.web_app.effects.render_BANG_();
}));

(placesurfer.web_app.nav.set_country_filter_BANG_.cljs$lang$maxFixedArity = 2);

placesurfer.web_app.nav.set_country_highlight_index_BANG_ = (function placesurfer$web_app$nav$set_country_highlight_index_BANG_(idx){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"country-highlight-index","country-highlight-index",-1271997150),idx);

return placesurfer.web_app.effects.render_BANG_();
});
placesurfer.web_app.nav.show_map_BANG_ = (function placesurfer$web_app$nav$show_map_BANG_(){
return placesurfer.web_app.nav.navigate_BANG_(new cljs.core.Keyword(null,"home","home",-74557309));
});

//# sourceMappingURL=placesurfer.web_app.nav.js.map
