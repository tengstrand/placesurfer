goog.provide('hitteri.api_client.urls');
hitteri.api_client.urls.base_url = "";
hitteri.api_client.urls.health_url = (function hitteri$api_client$urls$health_url(){
return [hitteri.api_client.urls.base_url,"/health"].join('');
});
hitteri.api_client.urls.dataset_url = (function hitteri$api_client$urls$dataset_url(){
return [hitteri.api_client.urls.base_url,"/api/backend/dataset"].join('');
});
hitteri.api_client.urls.save_dataset_url = (function hitteri$api_client$urls$save_dataset_url(){
return [hitteri.api_client.urls.base_url,"/api/backend/save-dataset"].join('');
});
hitteri.api_client.urls.resolve_location_url = (function hitteri$api_client$urls$resolve_location_url(){
return [hitteri.api_client.urls.base_url,"/api/backend/resolve-location"].join('');
});
hitteri.api_client.urls.upsert_row_url = (function hitteri$api_client$urls$upsert_row_url(){
return [hitteri.api_client.urls.base_url,"/api/backend/upsert-row"].join('');
});

//# sourceMappingURL=hitteri.api_client.urls.js.map
