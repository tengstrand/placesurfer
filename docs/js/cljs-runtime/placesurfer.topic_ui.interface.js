goog.provide('placesurfer.topic_ui.interface$');
/**
 * Topic definition maps from sorted keys and lookup functions.
 */
placesurfer.topic_ui.interface$.definitions = (function placesurfer$topic_ui$interface$definitions(topic_keys,label_fn,marker_url_fn){
return placesurfer.topic_ui.definitions.from_keys(topic_keys,label_fn,marker_url_fn);
});
/**
 * Topic panel/nav row props from active and loading topic sets plus definitions.
 */
placesurfer.topic_ui.interface$.rows = (function placesurfer$topic_ui$interface$rows(active_topics,loading_topics,topic_definitions){
return placesurfer.topic_ui.rows.for_topics(active_topics,loading_topics,topic_definitions);
});
/**
 * When exactly one topic is active, return it; otherwise nil.
 */
placesurfer.topic_ui.interface$.single_active = (function placesurfer$topic_ui$interface$single_active(active_topics){
return placesurfer.topic_ui.selection.single_active(active_topics);
});
/**
 * Update page requires exactly one active topic.
 */
placesurfer.topic_ui.interface$.update_invalid_QMARK_ = (function placesurfer$topic_ui$interface$update_invalid_QMARK_(active_topics){
return placesurfer.topic_ui.selection.update_invalid_QMARK_(active_topics);
});
placesurfer.topic_ui.interface$.nav_tab_row = (function placesurfer$topic_ui$interface$nav_tab_row(topic_rows){
return placesurfer.topic_ui.selection.nav_tab_row(topic_rows);
});
/**
 * Topic sidebar panel Hiccup.
 */
placesurfer.topic_ui.interface$.panel = (function placesurfer$topic_ui$interface$panel(props){
return placesurfer.topic_ui.panel.panel(props);
});
/**
 * Topic nav tab Hiccup.
 */
placesurfer.topic_ui.interface$.nav_tab = (function placesurfer$topic_ui$interface$nav_tab(topic_rows,active_page){
return placesurfer.topic_ui.panel.nav_tab(topic_rows,active_page);
});
placesurfer.topic_ui.interface$.topic_page_QMARK_ = (function placesurfer$topic_ui$interface$topic_page_QMARK_(page){
return placesurfer.topic_ui.pages.topic_page_QMARK_(page);
});
placesurfer.topic_ui.interface$.toggle_plan = (function placesurfer$topic_ui$interface$toggle_plan(active_topics,topic){
return placesurfer.topic_ui.toggle.toggle_plan(active_topics,topic);
});

//# sourceMappingURL=placesurfer.topic_ui.interface.js.map
