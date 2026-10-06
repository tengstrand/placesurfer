goog.provide('placesurfer.dropbox.auth_storage');
placesurfer.dropbox.auth_storage.auth_storage_key = "placesurfer_dropbox_auth";
placesurfer.dropbox.auth_storage.pkce_session_key = "placesurfer_dropbox_pkce";
placesurfer.dropbox.auth_storage.local_storage = (function placesurfer$dropbox$auth_storage$local_storage(){
if((typeof localStorage !== 'undefined')){
return localStorage;
} else {
return null;
}
});
placesurfer.dropbox.auth_storage.session_storage = (function placesurfer$dropbox$auth_storage$session_storage(){
if((typeof sessionStorage !== 'undefined')){
return sessionStorage;
} else {
return null;
}
});
placesurfer.dropbox.auth_storage.read_edn_BANG_ = (function placesurfer$dropbox$auth_storage$read_edn_BANG_(storage,k){
if(cljs.core.truth_(storage)){
try{var temp__5823__auto__ = storage.getItem(k);
if(cljs.core.truth_(temp__5823__auto__)){
var raw = temp__5823__auto__;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(raw);
} else {
return null;
}
}catch (e24681){var _ = e24681;
return null;
}} else {
return null;
}
});
placesurfer.dropbox.auth_storage.write_edn_BANG_ = (function placesurfer$dropbox$auth_storage$write_edn_BANG_(storage,k,v){
if(cljs.core.truth_(storage)){
try{return storage.setItem(k,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
}catch (e24682){var _ = e24682;
return null;
}} else {
return null;
}
});
placesurfer.dropbox.auth_storage.clear_BANG_ = (function placesurfer$dropbox$auth_storage$clear_BANG_(storage,k){
if(cljs.core.truth_(storage)){
try{return storage.removeItem(k);
}catch (e24683){var _ = e24683;
return null;
}} else {
return null;
}
});
/**
 * {:access-token :refresh-token :expires-at :account-email} or nil.
 */
placesurfer.dropbox.auth_storage.read_auth_BANG_ = (function placesurfer$dropbox$auth_storage$read_auth_BANG_(){
return placesurfer.dropbox.auth_storage.read_edn_BANG_(placesurfer.dropbox.auth_storage.local_storage(),placesurfer.dropbox.auth_storage.auth_storage_key);
});
placesurfer.dropbox.auth_storage.write_auth_BANG_ = (function placesurfer$dropbox$auth_storage$write_auth_BANG_(auth_map){
return placesurfer.dropbox.auth_storage.write_edn_BANG_(placesurfer.dropbox.auth_storage.local_storage(),placesurfer.dropbox.auth_storage.auth_storage_key,auth_map);
});
placesurfer.dropbox.auth_storage.clear_auth_BANG_ = (function placesurfer$dropbox$auth_storage$clear_auth_BANG_(){
return placesurfer.dropbox.auth_storage.clear_BANG_(placesurfer.dropbox.auth_storage.local_storage(),placesurfer.dropbox.auth_storage.auth_storage_key);
});
/**
 * Transient {:verifier :state} kept only across the redirect round-trip.
 */
placesurfer.dropbox.auth_storage.write_pkce_session_BANG_ = (function placesurfer$dropbox$auth_storage$write_pkce_session_BANG_(session){
return placesurfer.dropbox.auth_storage.write_edn_BANG_(placesurfer.dropbox.auth_storage.session_storage(),placesurfer.dropbox.auth_storage.pkce_session_key,session);
});
placesurfer.dropbox.auth_storage.read_pkce_session_BANG_ = (function placesurfer$dropbox$auth_storage$read_pkce_session_BANG_(){
return placesurfer.dropbox.auth_storage.read_edn_BANG_(placesurfer.dropbox.auth_storage.session_storage(),placesurfer.dropbox.auth_storage.pkce_session_key);
});
placesurfer.dropbox.auth_storage.clear_pkce_session_BANG_ = (function placesurfer$dropbox$auth_storage$clear_pkce_session_BANG_(){
return placesurfer.dropbox.auth_storage.clear_BANG_(placesurfer.dropbox.auth_storage.session_storage(),placesurfer.dropbox.auth_storage.pkce_session_key);
});

//# sourceMappingURL=placesurfer.dropbox.auth_storage.js.map
