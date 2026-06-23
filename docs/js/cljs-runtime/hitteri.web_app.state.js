goog.provide('hitteri.web_app.state');
hitteri.web_app.state.default_active_topics = (function hitteri$web_app$state$default_active_topics(){
return hitteri.app_ui.interface$.state.default_active_topics();
});
hitteri.web_app.state.default_update_form = (function hitteri$web_app$state$default_update_form(){
return hitteri.app_ui.interface$.state.default_update_form();
});
hitteri.web_app.state.clear_update_selection_state = (function hitteri$web_app$state$clear_update_selection_state(state){
return hitteri.app_ui.interface$.state.clear_update_selection_state(state);
});
hitteri.web_app.state._BANG_state = hitteri.app_ui.interface$.state._BANG_state;
hitteri.web_app.state._BANG_resolve_location_request_id = hitteri.app_ui.interface$.state._BANG_resolve_location_request_id;
hitteri.web_app.state._BANG_update_load_request_id = hitteri.app_ui.interface$.state._BANG_update_load_request_id;
hitteri.web_app.state._BANG_update_pending_id_seq = hitteri.app_ui.interface$.state._BANG_update_pending_id_seq;
hitteri.web_app.state._BANG_health_check_request_id = hitteri.app_ui.interface$.state._BANG_health_check_request_id;
hitteri.web_app.state._BANG_backend_health_online_QMARK_ = hitteri.app_ui.interface$.state._BANG_backend_health_online_QMARK_;
hitteri.web_app.state._BANG_load_id = hitteri.app_ui.interface$.state._BANG_load_id;
hitteri.web_app.state._BANG_topic_load_ids = hitteri.app_ui.interface$.state._BANG_topic_load_ids;
hitteri.web_app.state._BANG_countries_load_request_id = hitteri.app_ui.interface$.state._BANG_countries_load_request_id;
hitteri.web_app.state._BANG_countries_load_promise = hitteri.app_ui.interface$.state._BANG_countries_load_promise;
hitteri.web_app.state.clear_update_status_BANG_ = (function hitteri$web_app$state$clear_update_status_BANG_(){
return hitteri.app_ui.interface$.state.clear_update_status_BANG_();
});
hitteri.web_app.state.normalize_country_code = (function hitteri$web_app$state$normalize_country_code(s){
return hitteri.app_ui.interface$.state.normalize_country_code(s);
});
hitteri.web_app.state.valid_country_code_QMARK_ = (function hitteri$web_app$state$valid_country_code_QMARK_(s){
return hitteri.edit.interface$.model.valid_country_code_QMARK_(s);
});
hitteri.web_app.state.non_empty_js_string_QMARK_ = (function hitteri$web_app$state$non_empty_js_string_QMARK_(v){
return hitteri.app_ui.interface$.state.non_empty_js_string_QMARK_(v);
});
hitteri.web_app.state.non_empty_text_QMARK_ = (function hitteri$web_app$state$non_empty_text_QMARK_(v){
return hitteri.app_ui.interface$.state.non_empty_text_QMARK_(v);
});
hitteri.web_app.state.update_error_text = (function hitteri$web_app$state$update_error_text(v){
return hitteri.app_ui.interface$.state.update_error_text(v);
});
hitteri.web_app.state.normalize_update_source = (function hitteri$web_app$state$normalize_update_source(source){
return hitteri.edit.interface$.baseline.normalize_update_source(source);
});
hitteri.web_app.state.valid_topic_QMARK_ = (function hitteri$web_app$state$valid_topic_QMARK_(topic){
return hitteri.app_ui.interface$.state.valid_topic_QMARK_(topic);
});
hitteri.web_app.state.visible_positions = (function hitteri$web_app$state$visible_positions(s){
return hitteri.app_ui.interface$.state.visible_positions(s);
});

//# sourceMappingURL=hitteri.web_app.state.js.map
