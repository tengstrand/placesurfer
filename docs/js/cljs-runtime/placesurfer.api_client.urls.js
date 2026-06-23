goog.provide('placesurfer.api_client.urls');
placesurfer.api_client.urls.base_url = "";
placesurfer.api_client.urls.health_url = (function placesurfer$api_client$urls$health_url(){
return [placesurfer.api_client.urls.base_url,"/health"].join('');
});
placesurfer.api_client.urls.dataset_url = (function placesurfer$api_client$urls$dataset_url(){
return [placesurfer.api_client.urls.base_url,"/api/backend/dataset"].join('');
});
placesurfer.api_client.urls.save_dataset_url = (function placesurfer$api_client$urls$save_dataset_url(){
return [placesurfer.api_client.urls.base_url,"/api/backend/save-dataset"].join('');
});
placesurfer.api_client.urls.resolve_location_url = (function placesurfer$api_client$urls$resolve_location_url(){
return [placesurfer.api_client.urls.base_url,"/api/backend/resolve-location"].join('');
});
placesurfer.api_client.urls.upsert_row_url = (function placesurfer$api_client$urls$upsert_row_url(){
return [placesurfer.api_client.urls.base_url,"/api/backend/upsert-row"].join('');
});

//# sourceMappingURL=placesurfer.api_client.urls.js.map
