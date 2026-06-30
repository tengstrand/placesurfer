goog.provide('placesurfer.web_app.home_search');
placesurfer.web_app.home_search.search_debounce_ms = (400);
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.web_app !== 'undefined') && (typeof placesurfer.web_app.home_search !== 'undefined') && (typeof placesurfer.web_app.home_search._BANG_search_request_id !== 'undefined')){
} else {
placesurfer.web_app.home_search._BANG_search_request_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.web_app !== 'undefined') && (typeof placesurfer.web_app.home_search !== 'undefined') && (typeof placesurfer.web_app.home_search._BANG_search_timeout !== 'undefined')){
} else {
placesurfer.web_app.home_search._BANG_search_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
placesurfer.web_app.home_search.clear_home_search_ui = (function placesurfer$web_app$home_search$clear_home_search_ui(s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"home-search-query","home-search-query",1117256691),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"home-search-results","home-search-results",556485744),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home-search-highlight-index","home-search-highlight-index",-1709760590),null,new cljs.core.Keyword(null,"home-search-loading?","home-search-loading?",-536758452),false], 0));
});
placesurfer.web_app.home_search.finish_search_BANG_ = (function placesurfer$web_app$home_search$finish_search_BANG_(request_id,results){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(placesurfer.web_app.home_search._BANG_search_request_id))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"home-search-results","home-search-results",556485744),results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"home-search-loading?","home-search-loading?",-536758452),false,new cljs.core.Keyword(null,"home-search-highlight-index","home-search-highlight-index",-1709760590),placesurfer.pin_ui.interface$.search.highlight_index_for_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0))], 0));

return placesurfer.app_ui.interface$.effects.render_BANG_();
} else {
return null;
}
});
placesurfer.web_app.home_search.run_photon_search_BANG_ = (function placesurfer$web_app$home_search$run_photon_search_BANG_(query){
var request_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.home_search._BANG_search_request_id,cljs.core.inc);
var trimmed = clojure.string.trim(query);
if((((trimmed).length) < placesurfer.pin_ui.interface$.photon.min_search_chars)){
return placesurfer.web_app.home_search.finish_search_BANG_(request_id,cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"home-search-loading?","home-search-loading?",-536758452),true);

placesurfer.app_ui.interface$.effects.render_BANG_();

var map__78630 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var map__78630__$1 = cljs.core.__destructure_map(map__78630);
var countries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78630__$1,new cljs.core.Keyword(null,"countries","countries",863192750));
var country_slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78630__$1,new cljs.core.Keyword(null,"country-slug","country-slug",769681844));
var url = placesurfer.pin_ui.interface$.photon.build_search_url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([trimmed,(8),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"countries","countries",863192750),countries,new cljs.core.Keyword(null,"country-slug","country-slug",769681844),country_slug], null)], 0));
return fetch(url).then((function (resp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(placesurfer.web_app.home_search._BANG_search_request_id))){
if(cljs.core.truth_(resp.ok)){
return resp.json().then((function (body){
return placesurfer.web_app.home_search.finish_search_BANG_(request_id,placesurfer.pin_ui.interface$.photon.parse_response(body));
})).catch((function (_){
return placesurfer.web_app.home_search.finish_search_BANG_(request_id,cljs.core.PersistentVector.EMPTY);
}));
} else {
return placesurfer.web_app.home_search.finish_search_BANG_(request_id,cljs.core.PersistentVector.EMPTY);
}
} else {
return null;
}
})).catch((function (_){
return placesurfer.web_app.home_search.finish_search_BANG_(request_id,cljs.core.PersistentVector.EMPTY);
}));
}
});
placesurfer.web_app.home_search.set_home_search_query_BANG_ = (function placesurfer$web_app$home_search$set_home_search_query_BANG_(query){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"home-search-query","home-search-query",1117256691),query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"home-search-highlight-index","home-search-highlight-index",-1709760590),null], 0));

var temp__5825__auto___78644 = cljs.core.deref(placesurfer.web_app.home_search._BANG_search_timeout);
if(cljs.core.truth_(temp__5825__auto___78644)){
var t_78645 = temp__5825__auto___78644;
clearTimeout(t_78645);
} else {
}

cljs.core.reset_BANG_(placesurfer.web_app.home_search._BANG_search_timeout,setTimeout((function (){
return placesurfer.web_app.home_search.run_photon_search_BANG_(new cljs.core.Keyword(null,"home-search-query","home-search-query",1117256691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state)));
}),placesurfer.web_app.home_search.search_debounce_ms));

return placesurfer.app_ui.interface$.effects.render_BANG_();
});
placesurfer.web_app.home_search.set_highlight_index_BANG_ = (function placesurfer$web_app$home_search$set_highlight_index_BANG_(idx){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.app_ui.interface$.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"home-search-highlight-index","home-search-highlight-index",-1709760590),idx);

return placesurfer.app_ui.interface$.effects.render_BANG_();
});
placesurfer.web_app.home_search.select_home_search_result_BANG_ = (function placesurfer$web_app$home_search$select_home_search_result_BANG_(result){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.app_ui.interface$.state._BANG_state,placesurfer.web_app.home_search.clear_home_search_ui);

placesurfer.app_ui.interface$.effects.render_BANG_();

return placesurfer.map_ui.interface$.center_on_position_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(12),new cljs.core.Keyword(null,"animate?","animate?",-1559039739),true], null));
});
placesurfer.web_app.home_search.home_search_enter_BANG_ = (function placesurfer$web_app$home_search$home_search_enter_BANG_(){
var map__78632 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var map__78632__$1 = cljs.core.__destructure_map(map__78632);
var home_search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78632__$1,new cljs.core.Keyword(null,"home-search-results","home-search-results",556485744));
var home_search_highlight_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78632__$1,new cljs.core.Keyword(null,"home-search-highlight-index","home-search-highlight-index",-1709760590));
var action = placesurfer.pin_ui.interface$.search.enter_action.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([home_search_results,null,home_search_highlight_index], 0));
if(cljs.core.vector_QMARK_(action)){
var temp__5825__auto__ = placesurfer.pin_ui.interface$.search.highlighted_result.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([home_search_results,cljs.core.second(action)], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var result = temp__5825__auto__;
return placesurfer.web_app.home_search.select_home_search_result_BANG_(result);
} else {
return null;
}
} else {
return null;
}
});
placesurfer.web_app.home_search.home_search_keydown_BANG_ = (function placesurfer$web_app$home_search$home_search_keydown_BANG_(e){
var map__78634 = cljs.core.deref(placesurfer.app_ui.interface$.state._BANG_state);
var map__78634__$1 = cljs.core.__destructure_map(map__78634);
var home_search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78634__$1,new cljs.core.Keyword(null,"home-search-results","home-search-results",556485744));
var home_search_highlight_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78634__$1,new cljs.core.Keyword(null,"home-search-highlight-index","home-search-highlight-index",-1709760590));
var n = cljs.core.count(home_search_results);
var key = e.key;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ArrowDown",key)){
if((n > (0))){
e.preventDefault();

return placesurfer.web_app.home_search.set_highlight_index_BANG_(placesurfer.pin_ui.interface$.search.step_highlight_index.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([home_search_highlight_index,n,(1)], 0)));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ArrowUp",key)){
if((n > (0))){
e.preventDefault();

return placesurfer.web_app.home_search.set_highlight_index_BANG_(placesurfer.pin_ui.interface$.search.step_highlight_index.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([home_search_highlight_index,n,(-1)], 0)));
} else {
return null;
}
} else {
if(cljs.core.truth_(placesurfer.pin_ui.interface$.search.enter_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)))){
e.preventDefault();

e.stopPropagation();

return placesurfer.web_app.home_search.home_search_enter_BANG_();
} else {
return null;

}
}
}
});

//# sourceMappingURL=placesurfer.web_app.home_search.js.map
