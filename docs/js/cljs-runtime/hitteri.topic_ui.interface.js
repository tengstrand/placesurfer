goog.provide('hitteri.topic_ui.interface$');
/**
 * Topic definition maps from sorted keys and lookup functions.
 */
hitteri.topic_ui.interface$.definitions = (function hitteri$topic_ui$interface$definitions(topic_keys,label_fn,marker_url_fn){
return hitteri.topic_ui.definitions.from_keys(topic_keys,label_fn,marker_url_fn);
});
/**
 * Topic panel/nav row props from active and loading topic sets plus definitions.
 */
hitteri.topic_ui.interface$.rows = (function hitteri$topic_ui$interface$rows(active_topics,loading_topics,topic_definitions){
return hitteri.topic_ui.rows.for_topics(active_topics,loading_topics,topic_definitions);
});
/**
 * When exactly one topic is active, return it; otherwise nil.
 */
hitteri.topic_ui.interface$.single_active = (function hitteri$topic_ui$interface$single_active(active_topics){
return hitteri.topic_ui.selection.single_active(active_topics);
});
/**
 * Update page requires exactly one active topic.
 */
hitteri.topic_ui.interface$.update_invalid_QMARK_ = (function hitteri$topic_ui$interface$update_invalid_QMARK_(active_topics){
return hitteri.topic_ui.selection.update_invalid_QMARK_(active_topics);
});
hitteri.topic_ui.interface$.nav_tab_row = (function hitteri$topic_ui$interface$nav_tab_row(topic_rows){
return hitteri.topic_ui.selection.nav_tab_row(topic_rows);
});
/**
 * Topic sidebar panel Hiccup.
 */
hitteri.topic_ui.interface$.panel = (function hitteri$topic_ui$interface$panel(props){
return hitteri.topic_ui.panel.panel(props);
});
/**
 * Topic nav tab Hiccup.
 */
hitteri.topic_ui.interface$.nav_tab = (function hitteri$topic_ui$interface$nav_tab(topic_rows,active_page){
return hitteri.topic_ui.panel.nav_tab(topic_rows,active_page);
});
hitteri.topic_ui.interface$.topic_page_QMARK_ = (function hitteri$topic_ui$interface$topic_page_QMARK_(page){
return hitteri.topic_ui.pages.topic_page_QMARK_(page);
});
hitteri.topic_ui.interface$.toggle_plan = (function hitteri$topic_ui$interface$toggle_plan(active_topics,topic){
return hitteri.topic_ui.toggle.toggle_plan(active_topics,topic);
});

//# sourceMappingURL=hitteri.topic_ui.interface.js.map
