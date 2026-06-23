goog.provide('hitteri.country.interface$');
hitteri.country.interface$.locale__GT_iso = (function hitteri$country$interface$locale__GT_iso(){
return hitteri.country.core.locale__GT_iso();
});
hitteri.country.interface$.slug_for_iso = (function hitteri$country$interface$slug_for_iso(iso,countries){
return hitteri.country.core.slug_for_iso(iso,countries);
});
hitteri.country.interface$.iso_for_slug = (function hitteri$country$interface$iso_for_slug(slug,countries){
return hitteri.country.core.iso_for_slug(slug,countries);
});
hitteri.country.interface$.country_label = (function hitteri$country$interface$country_label(slug,countries){
return hitteri.country.core.country_label(slug,countries);
});
hitteri.country.interface$.country_bounds_for_slug = (function hitteri$country$interface$country_bounds_for_slug(slug,countries){
return hitteri.country.core.country_bounds_for_slug(slug,countries);
});
hitteri.country.interface$.slug_for_point = (function hitteri$country$interface$slug_for_point(lon,lat,countries){
return hitteri.country.core.slug_for_point(lon,lat,countries);
});
hitteri.country.interface$.navigate_country_plan = (function hitteri$country$interface$navigate_country_plan(target_page){
return hitteri.country.core.navigate_country_plan(target_page);
});
hitteri.country.interface$.set_country_filter_plan = (function hitteri$country$interface$set_country_filter_plan(query){
return hitteri.country.core.set_country_filter_plan(query);
});
hitteri.country.interface$.highlight_index_after_filter = (function hitteri$country$interface$highlight_index_after_filter(visible_count){
return hitteri.country.core.highlight_index_after_filter(visible_count);
});
hitteri.country.interface$.step_highlight_index = (function hitteri$country$interface$step_highlight_index(current_index,visible_count,delta){
return hitteri.country.core.step_highlight_index(current_index,visible_count,delta);
});
hitteri.country.interface$.select_country_plan = (function hitteri$country$interface$select_country_plan(context,slug){
return hitteri.country.core.select_country_plan(context,slug);
});

//# sourceMappingURL=hitteri.country.interface.js.map
