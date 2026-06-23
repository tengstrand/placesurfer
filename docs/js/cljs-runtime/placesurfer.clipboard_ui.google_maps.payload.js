goog.provide('placesurfer.clipboard_ui.google_maps.payload');
placesurfer.clipboard_ui.google_maps.payload.payload_type = "placesurfer/place";
placesurfer.clipboard_ui.google_maps.payload.source = "google-maps";
/**
 * True when `data` is a Google Maps place bookmarklet clipboard payload map.
 */
placesurfer.clipboard_ui.google_maps.payload.google_maps_bookmarklet_payload_QMARK_ = (function placesurfer$clipboard_ui$google_maps$payload$google_maps_bookmarklet_payload_QMARK_(data){
return ((cljs.core.map_QMARK_(data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placesurfer.clipboard_ui.google_maps.payload.payload_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data))) && (cljs.core.map_QMARK_(new cljs.core.Keyword(null,"place","place",-819689466).cljs$core$IFn$_invoke$arity$1(data))))));
});
/**
 * Alias for google-maps-bookmarklet-payload?.
 */
placesurfer.clipboard_ui.google_maps.payload.place_bookmarklet_payload_QMARK_ = (function placesurfer$clipboard_ui$google_maps$payload$place_bookmarklet_payload_QMARK_(data){
return placesurfer.clipboard_ui.google_maps.payload.google_maps_bookmarklet_payload_QMARK_(data);
});
/**
 * Extract normalized place map from a Google Maps bookmarklet payload.
 */
placesurfer.clipboard_ui.google_maps.payload.payload__GT_place = (function placesurfer$clipboard_ui$google_maps$payload$payload__GT_place(payload){
if(placesurfer.clipboard_ui.google_maps.payload.google_maps_bookmarklet_payload_QMARK_(payload)){
return placesurfer.clipboard_ui.google_maps.place.normalize_place_payload(new cljs.core.Keyword(null,"place","place",-819689466).cljs$core$IFn$_invoke$arity$1(payload));
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.clipboard_ui.google_maps.payload.js.map
