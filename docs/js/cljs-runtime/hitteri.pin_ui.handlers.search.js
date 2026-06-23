goog.provide('hitteri.pin_ui.handlers.search');
hitteri.pin_ui.handlers.search.search_debounce_ms = (400);
hitteri.pin_ui.handlers.search.outside_country_message = "Location is outside current country";
if((typeof hitteri !== 'undefined') && (typeof hitteri.pin_ui !== 'undefined') && (typeof hitteri.pin_ui.handlers !== 'undefined') && (typeof hitteri.pin_ui.handlers.search !== 'undefined') && (typeof hitteri.pin_ui.handlers.search._BANG_search_request_id !== 'undefined')){
} else {
hitteri.pin_ui.handlers.search._BANG_search_request_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof hitteri !== 'undefined') && (typeof hitteri.pin_ui !== 'undefined') && (typeof hitteri.pin_ui.handlers !== 'undefined') && (typeof hitteri.pin_ui.handlers.search !== 'undefined') && (typeof hitteri.pin_ui.handlers.search._BANG_search_timeout !== 'undefined')){
} else {
hitteri.pin_ui.handlers.search._BANG_search_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
hitteri.pin_ui.handlers.search.update_pins_mode_QMARK_ = (function hitteri$pin_ui$handlers$search$update_pins_mode_QMARK_(s){
return hitteri.pin_ui.pure.update_context.update_pins_mode_QMARK_(s);
});
hitteri.pin_ui.handlers.search.finish_search_BANG_ = (function hitteri$pin_ui$handlers$search$finish_search_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49838 = arguments.length;
var i__5750__auto___49839 = (0);
while(true){
if((i__5750__auto___49839 < len__5749__auto___49838)){
args__5755__auto__.push((arguments[i__5750__auto___49839]));

var G__49840 = (i__5750__auto___49839 + (1));
i__5750__auto___49839 = G__49840;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return hitteri.pin_ui.handlers.search.finish_search_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(hitteri.pin_ui.handlers.search.finish_search_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,results,p__49787){
var vec__49792 = p__49787;
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49792,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(hitteri.pin_ui.handlers.search._BANG_search_request_id))){
hitteri.pin_ui.handlers.state.swap_render_BANG_((function (p1__49779_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__49779_SHARP_,new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288),results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504),false,new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446),hitteri.pin_ui.pure.search.highlight_index_for_results(results)], 0));
}));

if(cljs.core.truth_(on_success)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(results) : on_success.call(null,results));
} else {
return null;
}
} else {
return null;
}
}));

(hitteri.pin_ui.handlers.search.finish_search_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(hitteri.pin_ui.handlers.search.finish_search_BANG_.cljs$lang$applyTo = (function (seq49780){
var G__49781 = cljs.core.first(seq49780);
var seq49780__$1 = cljs.core.next(seq49780);
var G__49782 = cljs.core.first(seq49780__$1);
var seq49780__$2 = cljs.core.next(seq49780__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49781,G__49782,seq49780__$2);
}));

hitteri.pin_ui.handlers.search.run_photon_search_BANG_ = (function hitteri$pin_ui$handlers$search$run_photon_search_BANG_(var_args){
var G__49804 = arguments.length;
switch (G__49804) {
case 1:
return hitteri.pin_ui.handlers.search.run_photon_search_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hitteri.pin_ui.handlers.search.run_photon_search_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.pin_ui.handlers.search.run_photon_search_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (query){
return hitteri.pin_ui.handlers.search.run_photon_search_BANG_.cljs$core$IFn$_invoke$arity$2(query,null);
}));

(hitteri.pin_ui.handlers.search.run_photon_search_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (query,on_success){
var request_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.pin_ui.handlers.search._BANG_search_request_id,cljs.core.inc);
var trimmed = clojure.string.trim(query);
if((((trimmed).length) < hitteri.pin_ui.pure.photon.min_search_chars)){
return hitteri.pin_ui.handlers.search.finish_search_BANG_.cljs$core$IFn$_invoke$arity$variadic(request_id,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_success], 0));
} else {
hitteri.pin_ui.handlers.state.swap_state_BANG_((function (p1__49800_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49800_SHARP_,new cljs.core.Keyword(null,"pin-search-loading?","pin-search-loading?",-1824660504),true);
}));

hitteri.pin_ui.handlers.state.render_BANG_();

var map__49810 = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
var map__49810__$1 = cljs.core.__destructure_map(map__49810);
var countries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49810__$1,new cljs.core.Keyword(null,"countries","countries",863192750));
var country_slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49810__$1,new cljs.core.Keyword(null,"country-slug","country-slug",769681844));
var country_iso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49810__$1,new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117));
var url = hitteri.pin_ui.pure.photon.build_search_url.cljs$core$IFn$_invoke$arity$variadic(trimmed,(8),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"countries","countries",863192750),countries,new cljs.core.Keyword(null,"country-slug","country-slug",769681844),country_slug], null)], 0));
return fetch(url).then((function (resp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(hitteri.pin_ui.handlers.search._BANG_search_request_id))){
if(cljs.core.truth_(resp.ok)){
return resp.json().then((function (body){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(hitteri.pin_ui.handlers.search._BANG_search_request_id))){
return hitteri.pin_ui.handlers.search.finish_search_BANG_.cljs$core$IFn$_invoke$arity$variadic(request_id,hitteri.pin_ui.pure.photon.filter_results_for_country(hitteri.pin_ui.pure.photon.parse_response(body),country_iso,countries,country_slug),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_success], 0));
} else {
return null;
}
})).catch((function (_){
return hitteri.pin_ui.handlers.search.finish_search_BANG_.cljs$core$IFn$_invoke$arity$variadic(request_id,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_success], 0));
}));
} else {
return hitteri.pin_ui.handlers.search.finish_search_BANG_.cljs$core$IFn$_invoke$arity$variadic(request_id,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_success], 0));
}
} else {
return null;
}
})).catch((function (_){
return hitteri.pin_ui.handlers.search.finish_search_BANG_.cljs$core$IFn$_invoke$arity$variadic(request_id,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_success], 0));
}));
}
}));

(hitteri.pin_ui.handlers.search.run_photon_search_BANG_.cljs$lang$maxFixedArity = 2);

hitteri.pin_ui.handlers.search.set_pin_search_query_BANG_ = (function hitteri$pin_ui$handlers$search$set_pin_search_query_BANG_(query){
hitteri.pin_ui.handlers.state.swap_state_BANG_((function (p1__49815_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49815_SHARP_,new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873),query),new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446),null);
}));

var temp__5825__auto___49842 = cljs.core.deref(hitteri.pin_ui.handlers.search._BANG_search_timeout);
if(cljs.core.truth_(temp__5825__auto___49842)){
var timeout_49843 = temp__5825__auto___49842;
clearTimeout(timeout_49843);
} else {
}

cljs.core.reset_BANG_(hitteri.pin_ui.handlers.search._BANG_search_timeout,setTimeout((function (){
return hitteri.pin_ui.handlers.search.run_photon_search_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pin-search-query","pin-search-query",2003843873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state)));
}),hitteri.pin_ui.handlers.search.search_debounce_ms));

return hitteri.pin_ui.handlers.state.render_BANG_();
});
hitteri.pin_ui.handlers.search.apply_search_result_on_update_pins_BANG_ = (function hitteri$pin_ui$handlers$search$apply_search_result_on_update_pins_BANG_(form){
hitteri.pin_ui.handlers.rows.add_pin_BANG_.cljs$core$IFn$_invoke$arity$0();

var temp__5825__auto__ = new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return hitteri.pin_ui.handlers.editor.load_pin_into_inline_editor_BANG_(id);
} else {
return null;
}
});
hitteri.pin_ui.handlers.search.apply_search_result_BANG_ = (function hitteri$pin_ui$handlers$search$apply_search_result_BANG_(result){
var map__49821 = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
var map__49821__$1 = cljs.core.__destructure_map(map__49821);
var country_iso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49821__$1,new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117));
var countries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49821__$1,new cljs.core.Keyword(null,"countries","countries",863192750));
var country_slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49821__$1,new cljs.core.Keyword(null,"country-slug","country-slug",769681844));
var pin_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49821__$1,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49821__$1,new cljs.core.Keyword(null,"page","page",849072397));
if(cljs.core.truth_(hitteri.pin_ui.pure.photon.result_in_current_country_QMARK_(result,country_iso,countries,country_slug))){
var form = hitteri.pin_ui.pure.forms.form_from_search_result(result,pin_form);
hitteri.pin_ui.handlers.state.swap_render_BANG_((function (s){
return hitteri.pin_ui.handlers.rows.refresh_table_rows.cljs$core$IFn$_invoke$arity$1(hitteri.pin_ui.handlers.state.clear_search_ui(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"pin-form","pin-form",1370425130),form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pin-form-baseline","pin-form-baseline",552218539),form,new cljs.core.Keyword(null,"pin-selected-id","pin-selected-id",261877228),null,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),null], 0))));
}));

if(hitteri.pin_ui.handlers.search.update_pins_mode_QMARK_(cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state))){
return hitteri.pin_ui.handlers.search.apply_search_result_on_update_pins_BANG_(form);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),page)){
return hitteri.app_ui.interface$.effects.run_in_update_pins_mode_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return hitteri.pin_ui.handlers.search.apply_search_result_on_update_pins_BANG_(form);
})], 0));
} else {
return hitteri.pin_ui.handlers.map.schedule_pin_map_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recenter?","recenter?",-1643219315),true], null)], 0));

}
}
} else {
return hitteri.pin_ui.handlers.state.swap_render_BANG_((function (p1__49819_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49819_SHARP_,new cljs.core.Keyword(null,"pin-message","pin-message",-1508485154),hitteri.pin_ui.handlers.search.outside_country_message);
}));
}
});
hitteri.pin_ui.handlers.search.select_pin_search_result_BANG_ = (function hitteri$pin_ui$handlers$search$select_pin_search_result_BANG_(result){
return hitteri.pin_ui.handlers.search.apply_search_result_BANG_(result);
});
hitteri.pin_ui.handlers.search.set_pin_search_highlight_index_BANG_ = (function hitteri$pin_ui$handlers$search$set_pin_search_highlight_index_BANG_(idx){
return hitteri.pin_ui.handlers.state.swap_render_BANG_((function (p1__49823_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49823_SHARP_,new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446),idx);
}));
});
hitteri.pin_ui.handlers.search.pin_search_enter_BANG_ = (function hitteri$pin_ui$handlers$search$pin_search_enter_BANG_(){
var map__49824 = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
var map__49824__$1 = cljs.core.__destructure_map(map__49824);
var pin_search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49824__$1,new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288));
var pin_search_highlight_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49824__$1,new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446));
var action = hitteri.pin_ui.pure.search.enter_action(pin_search_results,null,pin_search_highlight_index);
if(cljs.core.vector_QMARK_(action)){
var temp__5825__auto__ = hitteri.pin_ui.pure.search.highlighted_result(pin_search_results,cljs.core.second(action));
if(cljs.core.truth_(temp__5825__auto__)){
var result = temp__5825__auto__;
return hitteri.pin_ui.handlers.search.select_pin_search_result_BANG_(result);
} else {
return null;
}
} else {
return null;
}
});
hitteri.pin_ui.handlers.search.pin_search_keydown_BANG_ = (function hitteri$pin_ui$handlers$search$pin_search_keydown_BANG_(e){
var map__49825 = cljs.core.deref(hitteri.app_ui.interface$.state._BANG_state);
var map__49825__$1 = cljs.core.__destructure_map(map__49825);
var pin_search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49825__$1,new cljs.core.Keyword(null,"pin-search-results","pin-search-results",-242118288));
var pin_search_highlight_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49825__$1,new cljs.core.Keyword(null,"pin-search-highlight-index","pin-search-highlight-index",-712696446));
var n = cljs.core.count(pin_search_results);
var key = e.key;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ArrowDown",key)){
if((n > (0))){
e.preventDefault();

return hitteri.pin_ui.handlers.search.set_pin_search_highlight_index_BANG_(hitteri.pin_ui.pure.search.step_highlight_index(pin_search_highlight_index,n,(1)));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ArrowUp",key)){
if((n > (0))){
e.preventDefault();

return hitteri.pin_ui.handlers.search.set_pin_search_highlight_index_BANG_(hitteri.pin_ui.pure.search.step_highlight_index(pin_search_highlight_index,n,(-1)));
} else {
return null;
}
} else {
if(cljs.core.truth_(hitteri.pin_ui.pure.search.enter_key_QMARK_(e))){
e.preventDefault();

e.stopPropagation();

return hitteri.pin_ui.handlers.search.pin_search_enter_BANG_();
} else {
return null;

}
}
}
});

//# sourceMappingURL=hitteri.pin_ui.handlers.search.js.map
