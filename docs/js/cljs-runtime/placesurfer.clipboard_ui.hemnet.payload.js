goog.provide('placesurfer.clipboard_ui.hemnet.payload');
placesurfer.clipboard_ui.hemnet.payload.payload_type = "placesurfer/hemnet-listing";
/**
 * True when `data` is a Hemnet bookmarklet clipboard payload map.
 */
placesurfer.clipboard_ui.hemnet.payload.hemnet_bookmarklet_payload_QMARK_ = (function placesurfer$clipboard_ui$hemnet$payload$hemnet_bookmarklet_payload_QMARK_(data){
return ((cljs.core.map_QMARK_(data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placesurfer.clipboard_ui.hemnet.payload.payload_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data))) && (cljs.core.map_QMARK_(new cljs.core.Keyword(null,"listing","listing",74104033).cljs$core$IFn$_invoke$arity$1(data))))));
});
/**
 * Extract normalized listing map (kebab-case keys) from Hemnet bookmarklet payload.
 */
placesurfer.clipboard_ui.hemnet.payload.payload__GT_listing = (function placesurfer$clipboard_ui$hemnet$payload$payload__GT_listing(payload){
if(placesurfer.clipboard_ui.hemnet.payload.hemnet_bookmarklet_payload_QMARK_(payload)){
return placesurfer.clipboard_ui.hemnet.listing.normalize_listing_payload(new cljs.core.Keyword(null,"listing","listing",74104033).cljs$core$IFn$_invoke$arity$1(payload));
} else {
return null;
}
});

//# sourceMappingURL=placesurfer.clipboard_ui.hemnet.payload.js.map
