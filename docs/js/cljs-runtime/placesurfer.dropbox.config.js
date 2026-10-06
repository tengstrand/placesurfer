goog.provide('placesurfer.dropbox.config');
/**
 * Dropbox App key (OAuth2 PKCE client_id), read from the dropbox-app-key meta tag.
 * Injected into index.html at build time from the DROPBOX_APP_KEY env var
 * (scripts/placesurfer_root.clj) - never hardcoded/committed here, so each
 * deployment can use its own Dropbox app without touching version control.
 */
placesurfer.dropbox.config.app_key = (function placesurfer$dropbox$config$app_key(){
var temp__5823__auto__ = document.querySelector("meta[name=dropbox-app-key]");
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
return cljs.core.not_empty(el.getAttribute("content"));
} else {
return null;
}
});
placesurfer.dropbox.config.configured_QMARK_ = (function placesurfer$dropbox$config$configured_QMARK_(){
return (!((placesurfer.dropbox.config.app_key() == null)));
});
placesurfer.dropbox.config.token_url = "https://api.dropboxapi.com/oauth2/token";
placesurfer.dropbox.config.authorize_url = "https://www.dropbox.com/oauth2/authorize";
placesurfer.dropbox.config.upload_url = "https://content.dropboxapi.com/2/files/upload";
placesurfer.dropbox.config.download_url = "https://content.dropboxapi.com/2/files/download";
placesurfer.dropbox.config.revoke_url = "https://api.dropboxapi.com/2/auth/token/revoke";
placesurfer.dropbox.config.account_url = "https://api.dropboxapi.com/2/users/get_current_account";
placesurfer.dropbox.config.push_debounce_ms = (700);
placesurfer.dropbox.config.pull_timeout_ms = (4000);
placesurfer.dropbox.config.token_expiry_margin_ms = (60000);

//# sourceMappingURL=placesurfer.dropbox.config.js.map
