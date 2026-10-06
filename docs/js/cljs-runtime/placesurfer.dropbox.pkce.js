goog.provide('placesurfer.dropbox.pkce');
placesurfer.dropbox.pkce.bytes__GT_base64url = (function placesurfer$dropbox$pkce$bytes__GT_base64url(typed_array){
var binary = String.fromCharCode.apply(null,Array.from(typed_array));
return clojure.string.replace(clojure.string.replace(clojure.string.replace(btoa(binary),"+","-"),"/","_"),/=+$/,"");
});
/**
 * Base64url-encodes n cryptographically random bytes.
 */
placesurfer.dropbox.pkce.random_bytes_base64url = (function placesurfer$dropbox$pkce$random_bytes_base64url(n){
var arr = (new Uint8Array(n));
crypto.getRandomValues(arr);

return placesurfer.dropbox.pkce.bytes__GT_base64url(arr);
});
/**
 * PKCE code_verifier per RFC 7636: 43-128 chars from the unreserved charset.
 * 64 random bytes -> 86 base64url chars, well within range.
 */
placesurfer.dropbox.pkce.generate_code_verifier = (function placesurfer$dropbox$pkce$generate_code_verifier(){
return placesurfer.dropbox.pkce.random_bytes_base64url((64));
});
placesurfer.dropbox.pkce.generate_state = (function placesurfer$dropbox$pkce$generate_state(){
return placesurfer.dropbox.pkce.random_bytes_base64url((16));
});
/**
 * Returns a Promise<string> of the base64url SHA-256 digest of s's UTF-8 bytes.
 */
placesurfer.dropbox.pkce.sha256_base64url = (function placesurfer$dropbox$pkce$sha256_base64url(s){
var data = (new TextEncoder()).encode(s);
return crypto.subtle.digest("SHA-256",data).then((function (digest){
return placesurfer.dropbox.pkce.bytes__GT_base64url((new Uint8Array(digest)));
}));
});
/**
 * Promise<string> PKCE code_challenge (S256) for the given verifier.
 */
placesurfer.dropbox.pkce.code_challenge_from_verifier = (function placesurfer$dropbox$pkce$code_challenge_from_verifier(verifier){
return placesurfer.dropbox.pkce.sha256_base64url(verifier);
});

//# sourceMappingURL=placesurfer.dropbox.pkce.js.map
