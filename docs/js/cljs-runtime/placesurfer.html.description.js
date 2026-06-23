goog.provide('placesurfer.html.description');
placesurfer.html.description.url_pattern = /(https?:\/\/[^\s<&\"']+|mailto:[^\s<&\"']+)/;
placesurfer.html.description.linkify_text_segment = (function placesurfer$html$description$linkify_text_segment(text){
return clojure.string.replace(text,placesurfer.html.description.url_pattern,(function (match){
var url = cljs.core.first(match);
return ["<a href=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"</a>"].join('');
}));
});
/**
 * Wrap bare URLs in anchor tags; leave existing HTML tags untouched.
 */
placesurfer.html.description.linkify_bare_urls = (function placesurfer$html$description$linkify_bare_urls(s){
var remaining = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
var out = "";
while(true){
var temp__5823__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(remaining,"<");
if(cljs.core.truth_(temp__5823__auto__)){
var idx = temp__5823__auto__;
var text = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(remaining,(0),idx);
var after = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remaining,idx);
var tag_end = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(after,">");
if(cljs.core.truth_(tag_end)){
var tag = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(after,(0),(tag_end + (1)));
var G__38809 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(after,(tag_end + (1)));
var G__38810 = [out,placesurfer.html.description.linkify_text_segment(text),tag].join('');
remaining = G__38809;
out = G__38810;
continue;
} else {
return [out,placesurfer.html.description.linkify_text_segment(text),after].join('');
}
} else {
return [out,placesurfer.html.description.linkify_text_segment(remaining)].join('');
}
break;
}
});
/**
 * Normalize contenteditable HTML before sanitization.
 */
placesurfer.html.description.normalize_editor_html = (function placesurfer$html$description$normalize_editor_html(html){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(html),/\r\n/,"\n"),/&nbsp;/," "),/<\/div>\s*<div[^>]*>/i,"<br>"),/<\/div>/i,""),/<div[^>]*>/i,"<br>"),/<br\s*\/?>/i,"<br>"),/(?:<br>)+$/i,""),/^(?:<br>)+/i,"");
});
placesurfer.html.description.place_external_links_suffix_pattern = /(?:<br\s*\/?>\s*)*<div class=\"place-external-links\"[^>]*>.*?<\/div>\s*$/is;
/**
 * Remove auto-appended place link row from editor HTML before saving.
 */
placesurfer.html.description.strip_place_external_links_suffix = (function placesurfer$html$description$strip_place_external_links_suffix(html){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(html),placesurfer.html.description.place_external_links_suffix_pattern,"");
});
/**
 * Sanitized HTML safe to assign to a contenteditable div.
 */
placesurfer.html.description.description_for_text_display = (function placesurfer$html$description$description_for_text_display(description){
return placesurfer.html.sanitize.sanitize_description_html(description);
});
/**
 * Read contenteditable HTML and return canonical sanitized description.
 */
placesurfer.html.description.description_from_text_editor = (function placesurfer$html$description$description_from_text_editor(inner_html){
return placesurfer.html.sanitize.sanitize_description_html(placesurfer.html.description.linkify_bare_urls(placesurfer.html.description.normalize_editor_html(placesurfer.html.description.strip_place_external_links_suffix(inner_html))));
});
/**
 * Convert plain text (newlines, bare URLs) to canonical description HTML.
 */
placesurfer.html.description.plain_text__GT_description = (function placesurfer$html$description$plain_text__GT_description(text){
return placesurfer.html.sanitize.sanitize_description_html(placesurfer.html.description.linkify_bare_urls(text));
});

//# sourceMappingURL=placesurfer.html.description.js.map
