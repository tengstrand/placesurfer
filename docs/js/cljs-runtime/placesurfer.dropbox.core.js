goog.provide('placesurfer.dropbox.core');
placesurfer.dropbox.core.connected_QMARK_ = (function placesurfer$dropbox$core$connected_QMARK_(){
return (!((new cljs.core.Keyword(null,"refresh-token","refresh-token",-1032003584).cljs$core$IFn$_invoke$arity$1(placesurfer.dropbox.auth_storage.read_auth_BANG_()) == null)));
});
placesurfer.dropbox.core.configured_QMARK_ = (function placesurfer$dropbox$core$configured_QMARK_(){
return placesurfer.dropbox.config.configured_QMARK_();
});
placesurfer.dropbox.core.account_email = (function placesurfer$dropbox$core$account_email(){
return new cljs.core.Keyword(null,"account-email","account-email",-668420057).cljs$core$IFn$_invoke$arity$1(placesurfer.dropbox.auth_storage.read_auth_BANG_());
});
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.dropbox !== 'undefined') && (typeof placesurfer.dropbox.core !== 'undefined') && (typeof placesurfer.dropbox.core._BANG_on_push_error !== 'undefined')){
} else {
placesurfer.dropbox.core._BANG_on_push_error = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Registers a callback (fn [error]) invoked when a background push! fails.
 * Keeps this component UI-agnostic - the caller decides how to surface it (e.g. a toast).
 */
placesurfer.dropbox.core.set_on_push_error_BANG_ = (function placesurfer$dropbox$core$set_on_push_error_BANG_(f){
return cljs.core.reset_BANG_(placesurfer.dropbox.core._BANG_on_push_error,f);
});
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.dropbox !== 'undefined') && (typeof placesurfer.dropbox.core !== 'undefined') && (typeof placesurfer.dropbox.core._BANG_sync_docs !== 'undefined')){
} else {
placesurfer.dropbox.core._BANG_sync_docs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Registers a named EDN document to sync to/from Dropbox, at its own remote path
 * (e.g. "/prefs.edn"). `read` is a (fn [] -> edn-value) called on push! to produce
 * what gets uploaded; `write` is a (fn [edn-value]) called on pull! with whatever was
 * downloaded. Keeps this component fully agnostic of what it's syncing (prefs, pins,
 * anything else) - the caller owns the data and the storage it lives in.
 */
placesurfer.dropbox.core.register_sync_doc_BANG_ = (function placesurfer$dropbox$core$register_sync_doc_BANG_(doc_key,p__25128){
var map__25131 = p__25128;
var map__25131__$1 = cljs.core.__destructure_map(map__25131);
var remote_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25131__$1,new cljs.core.Keyword(null,"remote-path","remote-path",-1354459447));
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25131__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25131__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.dropbox.core._BANG_sync_docs,cljs.core.assoc,doc_key,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote-path","remote-path",-1354459447),remote_path,new cljs.core.Keyword(null,"read","read",1140058661),read,new cljs.core.Keyword(null,"write","write",-1857649168),write], null));
});
placesurfer.dropbox.core.redirect_uri = (function placesurfer$dropbox$core$redirect_uri(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname)].join('');
});
placesurfer.dropbox.core.search_params = (function placesurfer$dropbox$core$search_params(m){
return (new URLSearchParams(cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__25135){
var vec__25136 = p__25135;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25136,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)], null);
})),m))));
});
placesurfer.dropbox.core.post_form_BANG_ = (function placesurfer$dropbox$core$post_form_BANG_(url,params){
return fetch(url,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/x-www-form-urlencoded"], null),new cljs.core.Keyword(null,"body","body",-2049205669),placesurfer.dropbox.core.search_params(params).toString()], null)));
});
placesurfer.dropbox.core.store_token_response_BANG_ = (function placesurfer$dropbox$core$store_token_response_BANG_(json){
var expires_in = (function (){var or__5025__auto__ = (json["expires_in"]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var expires_at = (Date.now() + ((1000) * expires_in));
var current = placesurfer.dropbox.auth_storage.read_auth_BANG_();
var refresh_token = (function (){var or__5025__auto__ = (json["refresh_token"]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"refresh-token","refresh-token",-1032003584).cljs$core$IFn$_invoke$arity$1(current);
}
})();
return placesurfer.dropbox.auth_storage.write_auth_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"access-token","access-token",-654201199),(json["access_token"]),new cljs.core.Keyword(null,"refresh-token","refresh-token",-1032003584),refresh_token,new cljs.core.Keyword(null,"expires-at","expires-at",1654982210),expires_at,new cljs.core.Keyword(null,"account-email","account-email",-668420057),new cljs.core.Keyword(null,"account-email","account-email",-668420057).cljs$core$IFn$_invoke$arity$1(current)], null));
});
/**
 * Redirects the browser to Dropbox's OAuth2 PKCE authorize screen.
 * Rejects without redirecting if this deployment has no DROPBOX_APP_KEY configured.
 */
placesurfer.dropbox.core.begin_connect_BANG_ = (function placesurfer$dropbox$core$begin_connect_BANG_(){
if((!(placesurfer.dropbox.config.configured_QMARK_()))){
return Promise.reject((new Error("dropbox-not-configured")));
} else {
var verifier = placesurfer.dropbox.pkce.generate_code_verifier();
var state = placesurfer.dropbox.pkce.generate_state();
return placesurfer.dropbox.pkce.code_challenge_from_verifier(verifier).then((function (challenge){
placesurfer.dropbox.auth_storage.write_pkce_session_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"verifier","verifier",-1268009181),verifier,new cljs.core.Keyword(null,"state","state",-1988618099),state], null));

var query = placesurfer.dropbox.core.search_params(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"response_type","response_type",-858403602),"code",new cljs.core.Keyword(null,"client_id","client_id",48809273),placesurfer.dropbox.config.app_key(),new cljs.core.Keyword(null,"code_challenge","code_challenge",1712568924),challenge,new cljs.core.Keyword(null,"code_challenge_method","code_challenge_method",1363103199),"S256",new cljs.core.Keyword(null,"redirect_uri","redirect_uri",-1479457764),placesurfer.dropbox.core.redirect_uri(),new cljs.core.Keyword(null,"token_access_type","token_access_type",904662859),"offline",new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
return (location.href = [placesurfer.dropbox.config.authorize_url,"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query.toString())].join(''));
}));
}
});
/**
 * Pure: extracts {:code :state} from a location.search-style string, or nil when no code is present.
 */
placesurfer.dropbox.core.parse_callback_params = (function placesurfer$dropbox$core$parse_callback_params(search_string){
var params = (new URLSearchParams((function (){var or__5025__auto__ = search_string;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()));
var code = params.get("code");
if(cljs.core.seq(code)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"state","state",-1988618099),params.get("state")], null);
} else {
return null;
}
});
placesurfer.dropbox.core.oauth_callback_params = (function placesurfer$dropbox$core$oauth_callback_params(){
return placesurfer.dropbox.core.parse_callback_params(location.search);
});
placesurfer.dropbox.core.strip_oauth_params_BANG_ = (function placesurfer$dropbox$core$strip_oauth_params_BANG_(){
try{var url = (new URL(location.href));
url.searchParams.delete("code");

url.searchParams.delete("state");

return history.replaceState(null,"",url.toString());
}catch (e25155){var _ = e25155;
return null;
}});
placesurfer.dropbox.core.exchange_code_BANG_ = (function placesurfer$dropbox$core$exchange_code_BANG_(code,verifier){
return placesurfer.dropbox.core.post_form_BANG_(placesurfer.dropbox.config.token_url,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grant_type","grant_type",-293641122),"authorization_code",new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"client_id","client_id",48809273),placesurfer.dropbox.config.app_key(),new cljs.core.Keyword(null,"code_verifier","code_verifier",888121813),verifier,new cljs.core.Keyword(null,"redirect_uri","redirect_uri",-1479457764),placesurfer.dropbox.core.redirect_uri()], null)).then((function (resp){
return resp.json().then((function (json){
if(cljs.core.truth_(resp.ok)){
return placesurfer.dropbox.core.store_token_response_BANG_(json);
} else {
return Promise.reject((new Error("dropbox-token-exchange-failed")));
}
}));
}));
});
/**
 * If the current URL carries an OAuth redirect (?code=&state=), validates it (CSRF guard),
 * exchanges the code for tokens, and strips the query params. Resolves true if a callback
 * was handled (successfully or not), false if there was nothing to handle.
 */
placesurfer.dropbox.core.handle_oauth_callback_BANG_ = (function placesurfer$dropbox$core$handle_oauth_callback_BANG_(){
var temp__5821__auto__ = placesurfer.dropbox.core.oauth_callback_params();
if(cljs.core.truth_(temp__5821__auto__)){
var map__25167 = temp__5821__auto__;
var map__25167__$1 = cljs.core.__destructure_map(map__25167);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25167__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25167__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var session = placesurfer.dropbox.auth_storage.read_pkce_session_BANG_();
if(cljs.core.truth_((function (){var and__5023__auto__ = session;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(session));
} else {
return and__5023__auto__;
}
})())){
return placesurfer.dropbox.core.exchange_code_BANG_(code,new cljs.core.Keyword(null,"verifier","verifier",-1268009181).cljs$core$IFn$_invoke$arity$1(session)).then((function (_){
placesurfer.dropbox.auth_storage.clear_pkce_session_BANG_();

placesurfer.dropbox.core.strip_oauth_params_BANG_();

return true;
})).catch((function (_){
placesurfer.dropbox.auth_storage.clear_pkce_session_BANG_();

placesurfer.dropbox.core.strip_oauth_params_BANG_();

return false;
}));
} else {
placesurfer.dropbox.auth_storage.clear_pkce_session_BANG_();

placesurfer.dropbox.core.strip_oauth_params_BANG_();

return Promise.resolve(false);
}
} else {
return Promise.resolve(false);
}
});
placesurfer.dropbox.core.expired_QMARK_ = (function placesurfer$dropbox$core$expired_QMARK_(auth){
return (new cljs.core.Keyword(null,"expires-at","expires-at",1654982210).cljs$core$IFn$_invoke$arity$2(auth,(0)) < (Date.now() + placesurfer.dropbox.config.token_expiry_margin_ms));
});
placesurfer.dropbox.core.refresh_access_token_BANG_ = (function placesurfer$dropbox$core$refresh_access_token_BANG_(){
var auth = placesurfer.dropbox.auth_storage.read_auth_BANG_();
if((new cljs.core.Keyword(null,"refresh-token","refresh-token",-1032003584).cljs$core$IFn$_invoke$arity$1(auth) == null)){
return Promise.resolve(null);
} else {
if((!(placesurfer.dropbox.core.expired_QMARK_(auth)))){
return Promise.resolve(new cljs.core.Keyword(null,"access-token","access-token",-654201199).cljs$core$IFn$_invoke$arity$1(auth));
} else {
return placesurfer.dropbox.core.post_form_BANG_(placesurfer.dropbox.config.token_url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grant_type","grant_type",-293641122),"refresh_token",new cljs.core.Keyword(null,"refresh_token","refresh_token",-162233815),new cljs.core.Keyword(null,"refresh-token","refresh-token",-1032003584).cljs$core$IFn$_invoke$arity$1(auth),new cljs.core.Keyword(null,"client_id","client_id",48809273),placesurfer.dropbox.config.app_key()], null)).then((function (resp){
return resp.json().then((function (json){
if(cljs.core.truth_(resp.ok)){
placesurfer.dropbox.core.store_token_response_BANG_(json);

return new cljs.core.Keyword(null,"access-token","access-token",-654201199).cljs$core$IFn$_invoke$arity$1(placesurfer.dropbox.auth_storage.read_auth_BANG_());
} else {
placesurfer.dropbox.auth_storage.clear_auth_BANG_();

return null;
}
}));
})).catch((function (_){
placesurfer.dropbox.auth_storage.clear_auth_BANG_();

return null;
}));

}
}
});
placesurfer.dropbox.core.with_access_token = (function placesurfer$dropbox$core$with_access_token(f){
return placesurfer.dropbox.core.refresh_access_token_BANG_().then((function (token){
if(cljs.core.truth_(token)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(token) : f.call(null,token));
} else {
return Promise.reject((new Error("dropbox-not-connected")));
}
}));
});
placesurfer.dropbox.core.pad = (function placesurfer$dropbox$core$pad(n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n," "));
});
placesurfer.dropbox.core.format_map_entries = (function placesurfer$dropbox$core$format_map_entries(m,indent){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(placesurfer.dropbox.core.pad(indent))].join(''),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25175){
var vec__25176 = p__25175;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25176,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25176,(1),null);
return [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join('');
}),m));
});
/**
 * Pretty-prints edn-value one entry per line, but always keeps a key and its value
 * together on that same line regardless of length - unlike cljs.pprint's generic
 * dispatch, which happily wraps a long value onto its own line. Tailored to exactly
 * the two shapes this component ever writes (a flat map, or a vector of flat maps);
 * anything else just falls back to a plain pr-str.
 */
placesurfer.dropbox.core.format_edn = (function placesurfer$dropbox$core$format_edn(v){
if(cljs.core.map_QMARK_(v)){
return ["{",placesurfer.dropbox.core.format_map_entries(v,(1)),"}"].join('');
} else {
if(((cljs.core.vector_QMARK_(v)) && (((cljs.core.seq(v)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,v)))))){
return ["[",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return ["{",placesurfer.dropbox.core.format_map_entries(m,(2)),"}"].join('');
}),v)),"]"].join('');
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));

}
}
});
placesurfer.dropbox.core.upload_doc_BANG_ = (function placesurfer$dropbox$core$upload_doc_BANG_(token,remote_path,edn_value){
return fetch(placesurfer.dropbox.config.upload_url,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 3, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''),"Dropbox-API-Arg",JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),remote_path,new cljs.core.Keyword(null,"mode","mode",654403691),"overwrite"], null))),"Content-Type","application/octet-stream"], null),new cljs.core.Keyword(null,"body","body",-2049205669),placesurfer.dropbox.core.format_edn(edn_value)], null))).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return null;
} else {
return resp.text().then((function (body){
return Promise.reject((new Error(["dropbox-push-failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(remote_path)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp.status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)].join(''))));
}));
}
}));
});
placesurfer.dropbox.core.do_push_BANG_ = (function placesurfer$dropbox$core$do_push_BANG_(){
return placesurfer.dropbox.core.with_access_token((function (token){
return Promise.all(cljs.core.clj__GT_js((function (){var iter__5503__auto__ = (function placesurfer$dropbox$core$do_push_BANG__$_iter__25207(s__25208){
return (new cljs.core.LazySeq(null,(function (){
var s__25208__$1 = s__25208;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__25208__$1);
if(temp__5823__auto__){
var s__25208__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25208__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__25208__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__25210 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__25209 = (0);
while(true){
if((i__25209 < size__5502__auto__)){
var vec__25215 = cljs.core._nth(c__5501__auto__,i__25209);
var _doc_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25215,(0),null);
var map__25218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25215,(1),null);
var map__25218__$1 = cljs.core.__destructure_map(map__25218);
var remote_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25218__$1,new cljs.core.Keyword(null,"remote-path","remote-path",-1354459447));
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25218__$1,new cljs.core.Keyword(null,"read","read",1140058661));
cljs.core.chunk_append(b__25210,placesurfer.dropbox.core.upload_doc_BANG_(token,remote_path,(read.cljs$core$IFn$_invoke$arity$0 ? read.cljs$core$IFn$_invoke$arity$0() : read.call(null))));

var G__25261 = (i__25209 + (1));
i__25209 = G__25261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25210),placesurfer$dropbox$core$do_push_BANG__$_iter__25207(cljs.core.chunk_rest(s__25208__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25210),null);
}
} else {
var vec__25220 = cljs.core.first(s__25208__$2);
var _doc_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25220,(0),null);
var map__25223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25220,(1),null);
var map__25223__$1 = cljs.core.__destructure_map(map__25223);
var remote_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25223__$1,new cljs.core.Keyword(null,"remote-path","remote-path",-1354459447));
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25223__$1,new cljs.core.Keyword(null,"read","read",1140058661));
return cljs.core.cons(placesurfer.dropbox.core.upload_doc_BANG_(token,remote_path,(read.cljs$core$IFn$_invoke$arity$0 ? read.cljs$core$IFn$_invoke$arity$0() : read.call(null))),placesurfer$dropbox$core$do_push_BANG__$_iter__25207(cljs.core.rest(s__25208__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.deref(placesurfer.dropbox.core._BANG_sync_docs));
})()));
})).then((function (_){
return null;
}));
});
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.dropbox !== 'undefined') && (typeof placesurfer.dropbox.core !== 'undefined') && (typeof placesurfer.dropbox.core._BANG_push_timer !== 'undefined')){
} else {
placesurfer.dropbox.core._BANG_push_timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Debounced upload of every registered sync doc's current value to Dropbox.
 * No-op unless connected, and a no-op with nothing registered.
 */
placesurfer.dropbox.core.push_BANG_ = (function placesurfer$dropbox$core$push_BANG_(){
if(placesurfer.dropbox.core.connected_QMARK_()){
var temp__5823__auto___25263 = cljs.core.deref(placesurfer.dropbox.core._BANG_push_timer);
if(cljs.core.truth_(temp__5823__auto___25263)){
var t_25264 = temp__5823__auto___25263;
clearTimeout(t_25264);
} else {
}

return cljs.core.reset_BANG_(placesurfer.dropbox.core._BANG_push_timer,setTimeout((function (){
cljs.core.reset_BANG_(placesurfer.dropbox.core._BANG_push_timer,null);

return placesurfer.dropbox.core.do_push_BANG_().catch((function (err){
var temp__5823__auto__ = cljs.core.deref(placesurfer.dropbox.core._BANG_on_push_error);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(err) : f.call(null,err));
} else {
return null;
}
}));
}),placesurfer.dropbox.config.push_debounce_ms));
} else {
return null;
}
});
placesurfer.dropbox.core.not_found_response_QMARK_ = (function placesurfer$dropbox$core$not_found_response_QMARK_(resp){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((409),resp.status);
});
placesurfer.dropbox.core.download_doc_BANG_ = (function placesurfer$dropbox$core$download_doc_BANG_(token,remote_path){
return fetch(placesurfer.dropbox.config.download_url,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''),"Dropbox-API-Arg",JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),remote_path], null)))], null)], null))).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.text();
} else {
if(placesurfer.dropbox.core.not_found_response_QMARK_(resp)){
return null;
} else {
return Promise.reject((new Error(["dropbox-pull-failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(remote_path)].join(''))));

}
}
})).then((function (body){
if(cljs.core.seq(body)){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(body);
}catch (e25228){var _ = e25228;
return null;
}} else {
return null;
}
}));
});
/**
 * Downloads every registered sync doc and hydrates it via that doc's `write` fn.
 * Resolves nil (gracefully) when not connected; a doc that doesn't exist yet on
 * Dropbox (first-time user) is skipped rather than treated as an error.
 */
placesurfer.dropbox.core.pull_BANG_ = (function placesurfer$dropbox$core$pull_BANG_(){
if((!(placesurfer.dropbox.core.connected_QMARK_()))){
return Promise.resolve(null);
} else {
return placesurfer.dropbox.core.with_access_token((function (token){
return Promise.all(cljs.core.clj__GT_js((function (){var iter__5503__auto__ = (function placesurfer$dropbox$core$pull_BANG__$_iter__25229(s__25230){
return (new cljs.core.LazySeq(null,(function (){
var s__25230__$1 = s__25230;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__25230__$1);
if(temp__5823__auto__){
var s__25230__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25230__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__25230__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__25232 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__25231 = (0);
while(true){
if((i__25231 < size__5502__auto__)){
var vec__25233 = cljs.core._nth(c__5501__auto__,i__25231);
var _doc_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25233,(0),null);
var map__25236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25233,(1),null);
var map__25236__$1 = cljs.core.__destructure_map(map__25236);
var remote_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25236__$1,new cljs.core.Keyword(null,"remote-path","remote-path",-1354459447));
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25236__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
cljs.core.chunk_append(b__25232,placesurfer.dropbox.core.download_doc_BANG_(token,remote_path).then(((function (i__25231,vec__25233,_doc_key,map__25236,map__25236__$1,remote_path,write,c__5501__auto__,size__5502__auto__,b__25232,s__25230__$2,temp__5823__auto__){
return (function (edn_value){
if((!((edn_value == null)))){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(edn_value) : write.call(null,edn_value));
} else {
return null;
}
});})(i__25231,vec__25233,_doc_key,map__25236,map__25236__$1,remote_path,write,c__5501__auto__,size__5502__auto__,b__25232,s__25230__$2,temp__5823__auto__))
));

var G__25267 = (i__25231 + (1));
i__25231 = G__25267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25232),placesurfer$dropbox$core$pull_BANG__$_iter__25229(cljs.core.chunk_rest(s__25230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25232),null);
}
} else {
var vec__25238 = cljs.core.first(s__25230__$2);
var _doc_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25238,(0),null);
var map__25241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25238,(1),null);
var map__25241__$1 = cljs.core.__destructure_map(map__25241);
var remote_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25241__$1,new cljs.core.Keyword(null,"remote-path","remote-path",-1354459447));
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25241__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
return cljs.core.cons(placesurfer.dropbox.core.download_doc_BANG_(token,remote_path).then(((function (vec__25238,_doc_key,map__25241,map__25241__$1,remote_path,write,s__25230__$2,temp__5823__auto__){
return (function (edn_value){
if((!((edn_value == null)))){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(edn_value) : write.call(null,edn_value));
} else {
return null;
}
});})(vec__25238,_doc_key,map__25241,map__25241__$1,remote_path,write,s__25230__$2,temp__5823__auto__))
),placesurfer$dropbox$core$pull_BANG__$_iter__25229(cljs.core.rest(s__25230__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.deref(placesurfer.dropbox.core._BANG_sync_docs));
})()));
}));
}
});
/**
 * Best-effort token revoke, then always clears local auth state.
 */
placesurfer.dropbox.core.disconnect_BANG_ = (function placesurfer$dropbox$core$disconnect_BANG_(){
var auth = placesurfer.dropbox.auth_storage.read_auth_BANG_();
var token = new cljs.core.Keyword(null,"access-token","access-token",-654201199).cljs$core$IFn$_invoke$arity$1(auth);
return (cljs.core.truth_(token)?fetch(placesurfer.dropbox.config.revoke_url,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null)], null))).catch((function (_){
return null;
})):Promise.resolve(null)).then((function (_){
placesurfer.dropbox.auth_storage.clear_auth_BANG_();

placesurfer.dropbox.auth_storage.clear_pkce_session_BANG_();

return null;
}));
});
placesurfer.dropbox.core.fetch_account_email_BANG_ = (function placesurfer$dropbox$core$fetch_account_email_BANG_(){
return placesurfer.dropbox.core.with_access_token((function (token){
return fetch(placesurfer.dropbox.config.account_url,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''),"Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),"null"], null)));
})).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.json();
} else {
return null;
}
})).then((function (json){
if(cljs.core.truth_(json)){
var email = (json["email"]);
if(cljs.core.truth_(email)){
placesurfer.dropbox.auth_storage.write_auth_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(placesurfer.dropbox.auth_storage.read_auth_BANG_(),new cljs.core.Keyword(null,"account-email","account-email",-668420057),email));
} else {
}

return email;
} else {
return null;
}
})).catch((function (_){
return null;
}));
});

//# sourceMappingURL=placesurfer.dropbox.core.js.map
