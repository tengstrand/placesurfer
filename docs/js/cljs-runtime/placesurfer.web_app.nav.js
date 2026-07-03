goog.provide('placesurfer.web_app.nav');
placesurfer.web_app.nav.show_update_topic_hint_BANG_ = (function placesurfer$web_app$nav$show_update_topic_hint_BANG_(){
placesurfer.nav_ui.interface$.toast.show_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.i18n.interface$.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.web_app.state._BANG_state),new cljs.core.Keyword(null,"en","en",88457073)),new cljs.core.Keyword("nav","update-topic-hint","nav/update-topic-hint",1451152859)], 0))], 0));

return placesurfer.web_app.effects.render_BANG_();
});
placesurfer.web_app.nav.small_screen_QMARK_ = (function placesurfer$web_app$nav$small_screen_QMARK_(){
try{return (window.innerWidth <= (767));
}catch (e56850){var _ = e56850;
return false;
}});
placesurfer.web_app.nav.focus_country_search_BANG_ = (function placesurfer$web_app$nav$focus_country_search_BANG_(){
var seq__56851 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(60),(140),(260)], null));
var chunk__56852 = null;
var count__56853 = (0);
var i__56854 = (0);
while(true){
if((i__56854 < count__56853)){
var delay_ms = chunk__56852.cljs$core$IIndexed$_nth$arity$2(null,i__56854);
setTimeout(((function (seq__56851,chunk__56852,count__56853,i__56854,delay_ms){
return (function (){
var temp__5825__auto__ = document.querySelector(".country-search");
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return el.focus();
} else {
return null;
}
});})(seq__56851,chunk__56852,count__56853,i__56854,delay_ms))
,delay_ms);


var G__56908 = seq__56851;
var G__56909 = chunk__56852;
var G__56910 = count__56853;
var G__56911 = (i__56854 + (1));
seq__56851 = G__56908;
chunk__56852 = G__56909;
count__56853 = G__56910;
i__56854 = G__56911;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56851);
if(temp__5825__auto__){
var seq__56851__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56851__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__56851__$1);
var G__56912 = cljs.core.chunk_rest(seq__56851__$1);
var G__56913 = c__5548__auto__;
var G__56914 = cljs.core.count(c__5548__auto__);
var G__56915 = (0);
seq__56851 = G__56912;
chunk__56852 = G__56913;
count__56853 = G__56914;
i__56854 = G__56915;
continue;
} else {
var delay_ms = cljs.core.first(seq__56851__$1);
setTimeout(((function (seq__56851,chunk__56852,count__56853,i__56854,delay_ms,seq__56851__$1,temp__5825__auto__){
return (function (){
var temp__5825__auto____$1 = document.querySelector(".country-search");
if(cljs.core.truth_(temp__5825__auto____$1)){
var el = temp__5825__auto____$1;
return el.focus();
} else {
return null;
}
});})(seq__56851,chunk__56852,count__56853,i__56854,delay_ms,seq__56851__$1,temp__5825__auto__))
,delay_ms);


var G__56916 = cljs.core.next(seq__56851__$1);
var G__56917 = null;
var G__56918 = (0);
var G__56919 = (0);
seq__56851 = G__56916;
chunk__56852 = G__56917;
count__56853 = G__56918;
i__56854 = G__56919;
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
placesurfer.web_app.nav.set_update_panel_tab_BANG_ = (function placesurfer$web_app$nav$set_update_panel_tab_BANG_(tab){
var s = cljs.core.deref(placesurfer.web_app.state._BANG_state);
var pins_topic_QMARK_ = placesurfer.edit.interface$.topics.pins_topic_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(s)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-panel-tab","update-panel-tab",-1285771940),tab);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"groups","groups",-136896102))){
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"pin-separator-overlay-rows","pin-separator-overlay-rows",-65364147).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))){
placesurfer.group_ui.interface$.handlers.init_groups_edit_BANG_();
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"topic","topic",-1960480691))){
if(cljs.core.truth_(pins_topic_QMARK_)){
placesurfer.edit.interface$.handlers.topic.toggle_update_pin_topic_BANG_();
} else {
if(cljs.core.seq(new cljs.core.Keyword(null,"update-rows","update-rows",-1638458040).cljs$core$IFn$_invoke$arity$1(s))){
} else {
placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_();

placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_();

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"pins","pins",1725193285))){
if(cljs.core.truth_(pins_topic_QMARK_)){
} else {
placesurfer.edit.interface$.handlers.topic.toggle_update_pin_topic_BANG_();
}
} else {
}
}
}

return placesurfer.web_app.effects.render_BANG_();
});
placesurfer.web_app.nav.navigate_BANG_ = (function placesurfer$web_app$nav$navigate_BANG_(page){
var prev_page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state));
var target_page = page;
var leaving_draw_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw","draw",1358331674),prev_page);
var leaving_update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),prev_page);
var leaving_groups_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"groups","groups",-136896102),prev_page);
var leaving_update_groups_QMARK_ = ((leaving_update_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"groups","groups",-136896102),new cljs.core.Keyword(null,"update-panel-tab","update-panel-tab",-1285771940).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))));
var map__56881 = placesurfer.country.interface$.navigate_country_plan(target_page);
var map__56881__$1 = cljs.core.__destructure_map(map__56881);
var focus_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56881__$1,new cljs.core.Keyword(null,"focus-search?","focus-search?",-1381981880));
var update_row_coords = ((leaving_update_QMARK_)?(function (){var map__56882 = new cljs.core.Keyword(null,"update-selected-row","update-selected-row",-1179126191).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state));
var map__56882__$1 = cljs.core.__destructure_map(map__56882);
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56882__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56882__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude], null);
} else {
return null;
}
})():null);
if(leaving_draw_QMARK_){
placesurfer.map_ui.interface$.deactivate_draw_mode_BANG_();
} else {
}

if(((leaving_update_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target_page,new cljs.core.Keyword(null,"update","update",1045576396))))){
placesurfer.edit.interface$.handlers.save.save_current_update_dataset_to_cache_if_clean_BANG_();
} else {
}

if(leaving_update_groups_QMARK_){
placesurfer.group_ui.interface$.handlers.leave_groups_page_BANG_();
} else {
}

if(((leaving_groups_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target_page,new cljs.core.Keyword(null,"groups","groups",-136896102))))){
placesurfer.group_ui.interface$.handlers.leave_groups_page_BANG_();
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.state._BANG_state,(function (s){
var G__56890 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"page","page",849072397),target_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"map-country-pick?","map-country-pick?",-197660270),false], 0)),new cljs.core.Keyword(null,"map-restore-view","map-restore-view",1509489165));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target_page,new cljs.core.Keyword(null,"update","update",1045576396))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56890,new cljs.core.Keyword(null,"pin-editor-inline?","pin-editor-inline?",766617935),false);
} else {
return G__56890;
}
}));

placesurfer.browser_storage.interface$.save_page_BANG_(target_page);

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
var G__56891 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117).cljs$core$IFn$_invoke$arity$1(s);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__56891,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-form","update-form",475718790),new cljs.core.Keyword(null,"source","source",-433931539)], null),placesurfer.edit.interface$.baseline.normalize_update_source);
} else {
return G__56891;
}
}));

placesurfer.edit.interface$.handlers.topic.ensure_update_topic_BANG_();

placesurfer.web_app.backend.check_backend_BANG_();

var pins_QMARK__56923 = placesurfer.edit.interface$.topics.pins_topic_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-topic","update-topic",-406732688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state))], 0));
var prev_tab_56924 = new cljs.core.Keyword(null,"update-panel-tab","update-panel-tab",-1285771940).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state));
var tab_56925 = (function (){var or__5025__auto__ = prev_tab_56924;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.truth_(pins_QMARK__56923)){
return new cljs.core.Keyword(null,"pins","pins",1725193285);
} else {
return new cljs.core.Keyword(null,"topic","topic",-1960480691);
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"update-panel-tab","update-panel-tab",-1285771940),tab_56925);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab_56925,new cljs.core.Keyword(null,"groups","groups",-136896102))){
placesurfer.group_ui.interface$.handlers.init_groups_edit_BANG_();
} else {
if(cljs.core.truth_(pins_QMARK__56923)){
placesurfer.pin_ui.interface$.handlers.rows.refresh_pin_table_BANG_();

placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_();
} else {
placesurfer.edit.interface$.handlers.save.reload_update_dataset_BANG_();

placesurfer.edit.interface$.handlers.map.schedule_update_map_pin_sync_BANG_();

}
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

if(cljs.core.truth_(update_row_coords)){
setTimeout((function (){
return placesurfer.map_ui.interface$.center_on_position_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(update_row_coords,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(9),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true], 0)));
}),(100));
} else {
}
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

var map__56894 = placesurfer.country.interface$.select_country_plan(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-slug","current-slug",-1084358059),new cljs.core.Keyword(null,"country-slug","country-slug",769681844).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)),new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),placesurfer.web_app.nav.small_screen_QMARK_()], null),slug);
var map__56894__$1 = cljs.core.__destructure_map(map__56894);
var same_country_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56894__$1,new cljs.core.Keyword(null,"same-country?","same-country?",2096767045));
var clear_filter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56894__$1,new cljs.core.Keyword(null,"clear-filter?","clear-filter?",-1068595548));
var switch_to_country_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56894__$1,new cljs.core.Keyword(null,"switch-to-country-page?","switch-to-country-page?",1468335198));
var focus_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56894__$1,new cljs.core.Keyword(null,"focus-search?","focus-search?",-1381981880));
var load_country_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56894__$1,new cljs.core.Keyword(null,"load-country?","load-country?",-2106770458));
var navigate_home_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56894__$1,new cljs.core.Keyword(null,"navigate-home?","navigate-home?",-828264994));
var load_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56894__$1,new cljs.core.Keyword(null,"load-options","load-options",-38528641));
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
var G__56903 = arguments.length;
switch (G__56903) {
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
var map__56906_56938 = placesurfer.country.interface$.set_country_filter_plan(query);
var map__56906_56939__$1 = cljs.core.__destructure_map(map__56906_56938);
var country_filter_56940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56906_56939__$1,new cljs.core.Keyword(null,"country-filter","country-filter",-2099038819));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"country-filter","country-filter",-2099038819),country_filter_56940,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"country-highlight-index","country-highlight-index",-1271997150),(((!((visible_count == null))))?placesurfer.country.interface$.highlight_index_after_filter(visible_count):new cljs.core.Keyword(null,"country-highlight-index","country-highlight-index",-1271997150).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state)))], 0));

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
