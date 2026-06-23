goog.provide('hitteri.web_app.backend');
if((typeof hitteri !== 'undefined') && (typeof hitteri.web_app !== 'undefined') && (typeof hitteri.web_app.backend !== 'undefined') && (typeof hitteri.web_app.backend._BANG_consecutive_health_failures !== 'undefined')){
} else {
hitteri.web_app.backend._BANG_consecutive_health_failures = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
hitteri.web_app.backend.update_page_QMARK_ = (function hitteri$web_app$backend$update_page_QMARK_(page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"update","update",1045576396));
});
hitteri.web_app.backend.abort_error_QMARK_ = (function hitteri$web_app$backend$abort_error_QMARK_(err){
var name = err.name;
var msg = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(err.message),""].join(''));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"AbortError")) || (clojure.string.includes_QMARK_(msg,"abort")));
});
hitteri.web_app.backend.mark_backend_offline_BANG_ = (function hitteri$web_app$backend$mark_backend_offline_BANG_(s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729),false);
});
hitteri.web_app.backend.apply_health_check_success_BANG_ = (function hitteri$web_app$backend$apply_health_check_success_BANG_(request_id,was_offline_QMARK_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(hitteri.web_app.state._BANG_health_check_request_id))){
cljs.core.reset_BANG_(hitteri.web_app.backend._BANG_consecutive_health_failures,(0));

cljs.core.reset_BANG_(hitteri.web_app.state._BANG_backend_health_online_QMARK_,true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.web_app.state._BANG_state,(function (s){
var G__50498 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729),true);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Backend service is not running",new cljs.core.Keyword(null,"update-error","update-error",-572386700).cljs$core$IFn$_invoke$arity$1(s))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50498,new cljs.core.Keyword(null,"update-error","update-error",-572386700),null);
} else {
return G__50498;
}
}));

hitteri.web_app.effects.render_BANG_();

if(cljs.core.truth_((function (){var and__5023__auto__ = was_offline_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.web_app.state._BANG_state)));
} else {
return and__5023__auto__;
}
})())){
hitteri.web_app.effects.reload_update_dataset_BANG_();
} else {
}

return hitteri.web_app.effects.sync_marker_pick_handler_BANG_();
} else {
return null;
}
});
hitteri.web_app.backend.apply_health_check_failure_BANG_ = (function hitteri$web_app$backend$apply_health_check_failure_BANG_(request_id,err,was_online_QMARK_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_id,cljs.core.deref(hitteri.web_app.state._BANG_health_check_request_id))) && ((!(hitteri.web_app.backend.abort_error_QMARK_(err)))))){
var failures = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.web_app.backend._BANG_consecutive_health_failures,cljs.core.inc);
if((failures >= (2))){
cljs.core.reset_BANG_(hitteri.web_app.state._BANG_backend_health_online_QMARK_,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.web_app.state._BANG_state,(function (s){
var G__50499 = hitteri.web_app.backend.mark_backend_offline_BANG_(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Backend service is not running",new cljs.core.Keyword(null,"update-error","update-error",-572386700).cljs$core$IFn$_invoke$arity$1(s))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50499,new cljs.core.Keyword(null,"update-error","update-error",-572386700),null);
} else {
return G__50499;
}
}));

if(cljs.core.truth_((function (){var and__5023__auto__ = was_online_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return hitteri.web_app.backend.update_page_QMARK_(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hitteri.web_app.state._BANG_state)));
} else {
return and__5023__auto__;
}
})())){
hitteri.edit.interface$.handlers.topic.ensure_update_topic_BANG_();
} else {
}

hitteri.web_app.effects.sync_marker_pick_handler_BANG_();

return hitteri.web_app.effects.render_BANG_();
} else {
return null;
}
} else {
return null;
}
});
hitteri.web_app.backend.check_backend_BANG_ = (function hitteri$web_app$backend$check_backend_BANG_(){
var request_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hitteri.web_app.state._BANG_health_check_request_id,cljs.core.inc);
var was_offline_QMARK_ = cljs.core.not(cljs.core.deref(hitteri.web_app.state._BANG_backend_health_online_QMARK_));
var was_online_QMARK_ = cljs.core.deref(hitteri.web_app.state._BANG_backend_health_online_QMARK_);
var p = fetch(hitteri.api_client.interface$.health_url(),({"cache": "no-store"}));
return p.then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.json();
} else {
return Promise.reject((new Error(["Backend not reachable, status ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp.status)].join(''))));
}
})).then((function (_){
return hitteri.web_app.backend.apply_health_check_success_BANG_(request_id,was_offline_QMARK_);
})).catch((function (err){
return hitteri.web_app.backend.apply_health_check_failure_BANG_(request_id,err,was_online_QMARK_);
}));
});

//# sourceMappingURL=hitteri.web_app.backend.js.map
