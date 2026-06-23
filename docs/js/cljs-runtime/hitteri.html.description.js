goog.provide('hitteri.html.description');
hitteri.html.description.url_pattern = /(https?:\/\/[^\s<&\"']+|mailto:[^\s<&\"']+)/;
hitteri.html.description.linkify_text_segment = (function hitteri$html$description$linkify_text_segment(text){
return clojure.string.replace(text,hitteri.html.description.url_pattern,(function (match){
var url = cljs.core.first(match);
return ["<a href=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"</a>"].join('');
}));
});
/**
 * Wrap bare URLs in anchor tags; leave existing HTML tags untouched.
 */
hitteri.html.description.linkify_bare_urls = (function hitteri$html$description$linkify_bare_urls(s){
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
var G__38806 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(after,(tag_end + (1)));
var G__38808 = [out,hitteri.html.description.linkify_text_segment(text),tag].join('');
remaining = G__38806;
out = G__38808;
continue;
} else {
return [out,hitteri.html.description.linkify_text_segment(text),after].join('');
}
} else {
return [out,hitteri.html.description.linkify_text_segment(remaining)].join('');
}
break;
}
});
/**
 * Normalize contenteditable HTML before sanitization.
 */
hitteri.html.description.normalize_editor_html = (function hitteri$html$description$normalize_editor_html(html){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(html),/\r\n/,"\n"),/&nbsp;/," "),/<\/div>\s*<div[^>]*>/i,"<br>"),/<\/div>/i,""),/<div[^>]*>/i,"<br>"),/<br\s*\/?>/i,"<br>"),/(?:<br>)+$/i,""),/^(?:<br>)+/i,"");
});
hitteri.html.description.place_external_links_suffix_pattern = /(?:<br\s*\/?>\s*)*<div class=\"place-external-links\"[^>]*>.*?<\/div>\s*$/is;
/**
 * Remove auto-appended place link row from editor HTML before saving.
 */
hitteri.html.description.strip_place_external_links_suffix = (function hitteri$html$description$strip_place_external_links_suffix(html){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(html),hitteri.html.description.place_external_links_suffix_pattern,"");
});
/**
 * Sanitized HTML safe to assign to a contenteditable div.
 */
hitteri.html.description.description_for_text_display = (function hitteri$html$description$description_for_text_display(description){
return hitteri.html.sanitize.sanitize_description_html(description);
});
/**
 * Read contenteditable HTML and return canonical sanitized description.
 */
hitteri.html.description.description_from_text_editor = (function hitteri$html$description$description_from_text_editor(inner_html){
return hitteri.html.sanitize.sanitize_description_html(hitteri.html.description.linkify_bare_urls(hitteri.html.description.normalize_editor_html(hitteri.html.description.strip_place_external_links_suffix(inner_html))));
});
/**
 * Convert plain text (newlines, bare URLs) to canonical description HTML.
 */
hitteri.html.description.plain_text__GT_description = (function hitteri$html$description$plain_text__GT_description(text){
return hitteri.html.sanitize.sanitize_description_html(hitteri.html.description.linkify_bare_urls(text));
});

//# sourceMappingURL=hitteri.html.description.js.map
