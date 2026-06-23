goog.provide('hitteri.html.sanitize');
hitteri.html.sanitize.allowed_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["br",null,"img",null,"p",null,"em",null,"ol",null,"a",null,"i",null,"b",null,"ul",null,"strong",null,"li",null], null), null);
hitteri.html.sanitize.allowed_img_classes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["description-maps-icon",null,"description-open-icon",null], null), null);
hitteri.html.sanitize.blocked_with_content = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["object",null,"form",null,"svg",null,"style",null,"script",null,"iframe",null,"embed",null], null), null);
hitteri.html.sanitize.br_placeholder = "[[[BR]]]";
hitteri.html.sanitize.preprocess_br_tags = (function hitteri$html$sanitize$preprocess_br_tags(s){
return clojure.string.replace(s,/<br\s*\/?>/i,hitteri.html.sanitize.br_placeholder);
});
hitteri.html.sanitize.postprocess_br_tags = (function hitteri$html$sanitize$postprocess_br_tags(s){
return clojure.string.replace(s,hitteri.html.sanitize.br_placeholder,"<br>");
});
hitteri.html.sanitize.escape_text = (function hitteri$html$sanitize$escape_text(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&(?!amp;|lt;|gt;|quot;|#)/,"&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
hitteri.html.sanitize.text_with_breaks = (function hitteri$html$sanitize$text_with_breaks(s){
var normalized = clojure.string.replace(s,"\r\n","\n");
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$3(normalized,/\n/,(-1));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("<br>",cljs.core.map.cljs$core$IFn$_invoke$arity$2(hitteri.html.sanitize.escape_text,parts));
});
hitteri.html.sanitize.plain_text_QMARK_ = (function hitteri$html$sanitize$plain_text_QMARK_(s){
return cljs.core.not(cljs.core.re_find(/</,s));
});
hitteri.html.sanitize.safe_href_QMARK_ = (function hitteri$html$sanitize$safe_href_QMARK_(href){
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(href)));
if(cljs.core.truth_(temp__5825__auto__)){
var h = temp__5825__auto__;
var lower = clojure.string.lower_case(h);
return ((clojure.string.starts_with_QMARK_(lower,"http://")) || (((clojure.string.starts_with_QMARK_(lower,"https://")) || (((clojure.string.starts_with_QMARK_(lower,"mailto:")) || (((clojure.string.starts_with_QMARK_(lower,"/")) && ((!(clojure.string.starts_with_QMARK_(lower,"//")))))))))));
} else {
return null;
}
});
hitteri.html.sanitize.strip_dangerous_blocks = (function hitteri$html$sanitize$strip_dangerous_blocks(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tag){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(acc,cljs.core.re_pattern(["(?is)<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"\\b[^>]*>.*?</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),">"].join('')),""),cljs.core.re_pattern(["(?is)<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"\\b[^>]*/>"].join('')),""),cljs.core.re_pattern(["(?is)<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),">.*?</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),">"].join('')),"");
}),s,hitteri.html.sanitize.blocked_with_content);
});
hitteri.html.sanitize.remove_comments = (function hitteri$html$sanitize$remove_comments(s){
return clojure.string.replace(s,/<!--.*?-->/s,"");
});
hitteri.html.sanitize.strip_void_blocked_tags = (function hitteri$html$sanitize$strip_void_blocked_tags(s){
return clojure.string.replace(s,/<(input|link|meta|base|iframe|object|embed|svg|form)\b[^>]*\/?>/i,"");
});
hitteri.html.sanitize.extract_attr = (function hitteri$html$sanitize$extract_attr(attrs,attr_name){
var temp__5825__auto__ = cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_name),"\\s*=\\s*(\"([^\"]*)\"|'([^']*)'|([^\\s>]+))"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrs));
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var or__5025__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(2));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(3));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(4));
}
}
} else {
return null;
}
});
hitteri.html.sanitize.extract_href = (function hitteri$html$sanitize$extract_href(attrs){
return hitteri.html.sanitize.extract_attr(attrs,"href");
});
hitteri.html.sanitize.safe_img_src_QMARK_ = (function hitteri$html$sanitize$safe_img_src_QMARK_(src){
var temp__5825__auto__ = cljs.core.not_empty(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
var lower = clojure.string.lower_case(s);
return ((clojure.string.starts_with_QMARK_(lower,"/images/")) && ((((!(clojure.string.includes_QMARK_(lower,"javascript:")))) && ((!(clojure.string.includes_QMARK_(lower,"data:")))))));
} else {
return null;
}
});
hitteri.html.sanitize.safe_img_class_QMARK_ = (function hitteri$html$sanitize$safe_img_class_QMARK_(class_name){
return cljs.core.contains_QMARK_(hitteri.html.sanitize.allowed_img_classes,clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)));
});
hitteri.html.sanitize.strip_event_attrs = (function hitteri$html$sanitize$strip_event_attrs(attrs){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrs),/\s+on\w+\s*=\s*(\"[^\"]*\"|'[^']*'|[^\s>]+)/i,"");
});
hitteri.html.sanitize.strip_unsafe_url_attrs = (function hitteri$html$sanitize$strip_unsafe_url_attrs(attrs){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrs),/\s+(href|src)\s*=\s*(\"|')?\s*javascript:[^\"'\s>]*(\"|')?/i,""),/\s+(href|src)\s*=\s*(\"|')?\s*data:[^\"'\s>]*(\"|')?/i,""),/\s+(href|src)\s*=\s*(\"|')?\s*vbscript:[^\"'\s>]*(\"|')?/i,"");
});
hitteri.html.sanitize.parse_open_tag = (function hitteri$html$sanitize$parse_open_tag(s){
var temp__5825__auto__ = cljs.core.re_find(/^<(?!br\b)(\w+)([^>]*?)(\/?)>/,s);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var tag = clojure.string.lower_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(1)));
var attrs = hitteri.html.sanitize.strip_unsafe_url_attrs(hitteri.html.sanitize.strip_event_attrs(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(2))));
var self_close = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(3)));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"void","void",-2084626863),((self_close) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("img",tag))),new cljs.core.Keyword(null,"href","href",-793805698),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("a",tag))?hitteri.html.sanitize.extract_href(attrs):null),new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("img",tag))?hitteri.html.sanitize.extract_attr(attrs,"src"):null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("img",tag))?hitteri.html.sanitize.extract_attr(attrs,"class"):null),new cljs.core.Keyword(null,"len","len",1423657078),cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0)))], null);
} else {
return null;
}
});
hitteri.html.sanitize.parse_close_tag = (function hitteri$html$sanitize$parse_close_tag(s){
var temp__5825__auto__ = cljs.core.re_find(/^<\/(\w+)\s*>/,s);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),clojure.string.lower_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(1))),new cljs.core.Keyword(null,"len","len",1423657078),cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0)))], null);
} else {
return null;
}
});
hitteri.html.sanitize.parse_nodes = (function hitteri$html$sanitize$parse_nodes(var_args){
var G__38775 = arguments.length;
switch (G__38775) {
case 1:
return hitteri.html.sanitize.parse_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hitteri.html.sanitize.parse_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.html.sanitize.parse_nodes.cljs$core$IFn$_invoke$arity$1 = (function (s){
return hitteri.html.sanitize.parse_nodes.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(hitteri.html.sanitize.parse_nodes.cljs$core$IFn$_invoke$arity$2 = (function (s,parent_tag){
var remaining = s;
var nodes = cljs.core.PersistentVector.EMPTY;
while(true){
if(clojure.string.blank_QMARK_(remaining)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes,new cljs.core.Keyword(null,"rest","rest",-1241696419),remaining], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remaining,(0)))){
var rest = remaining;
if(cljs.core.truth_(cljs.core.re_find(/^<!--/,rest))){
var end = (function (){var or__5025__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(rest,"-->");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.count(rest);
}
})();
var after = (end + (3));
var G__38790 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest,after);
var G__38791 = nodes;
remaining = G__38790;
nodes = G__38791;
continue;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = parent_tag;
if(cljs.core.truth_(and__5023__auto__)){
var temp__5825__auto__ = hitteri.html.sanitize.parse_close_tag(rest);
if(cljs.core.truth_(temp__5825__auto__)){
var close = temp__5825__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(close),parent_tag);
} else {
return null;
}
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes,new cljs.core.Keyword(null,"rest","rest",-1241696419),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest,new cljs.core.Keyword(null,"len","len",1423657078).cljs$core$IFn$_invoke$arity$1(hitteri.html.sanitize.parse_close_tag(rest)))], null);
} else {
var temp__5823__auto__ = hitteri.html.sanitize.parse_open_tag(rest);
if(cljs.core.truth_(temp__5823__auto__)){
var map__38778 = temp__5823__auto__;
var map__38778__$1 = cljs.core.__destructure_map(map__38778);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38778__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var void$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38778__$1,new cljs.core.Keyword(null,"void","void",-2084626863));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38778__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38778__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38778__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38778__$1,new cljs.core.Keyword(null,"len","len",1423657078));
if(cljs.core.contains_QMARK_(hitteri.html.sanitize.blocked_with_content,tag)){
var inner = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest,len);
var close_match = cljs.core.re_find(cljs.core.re_pattern(["(?i)</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"\\s*>"].join('')),inner);
if(cljs.core.truth_(close_match)){
var close_start = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(inner,cljs.core.first(close_match));
var after = ((len + close_start) + cljs.core.count(cljs.core.first(close_match)));
var G__38792 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest,after);
var G__38793 = nodes;
remaining = G__38792;
nodes = G__38793;
continue;
} else {
var G__38794 = "";
var G__38795 = nodes;
remaining = G__38794;
nodes = G__38795;
continue;
}
} else {
if(cljs.core.truth_(void$)){
var G__38796 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest,len);
var G__38797 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null));
remaining = G__38796;
nodes = G__38797;
continue;
} else {
var inner = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest,len);
var parsed = hitteri.html.sanitize.parse_nodes.cljs$core$IFn$_invoke$arity$2(inner,tag);
var child_nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(parsed);
var child_rest = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(parsed);
var G__38798 = child_rest;
var G__38799 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"children","children",-940561982),child_nodes], null));
remaining = G__38798;
nodes = G__38799;
continue;

}
}
} else {
var G__38800 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest,(1));
var G__38801 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"content","content",15833224),"<"], null));
remaining = G__38800;
nodes = G__38801;
continue;
}

}
}
} else {
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(remaining,"<");
var text = (cljs.core.truth_(idx)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(remaining,(0),idx):remaining);
var after = (cljs.core.truth_(idx)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remaining,idx):"");
var G__38803 = after;
var G__38804 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"content","content",15833224),text], null));
remaining = G__38803;
nodes = G__38804;
continue;

}
}
break;
}
}));

(hitteri.html.sanitize.parse_nodes.cljs$lang$maxFixedArity = 2);

hitteri.html.sanitize.render_node = (function hitteri$html$sanitize$render_node(p__38779){
var map__38780 = p__38779;
var map__38780__$1 = cljs.core.__destructure_map(map__38780);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38780__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38780__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38780__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38780__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38780__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38780__$1,new cljs.core.Keyword(null,"content","content",15833224));
var G__38781 = type;
var G__38781__$1 = (((G__38781 instanceof cljs.core.Keyword))?G__38781.fqn:null);
switch (G__38781__$1) {
case "text":
return hitteri.html.sanitize.postprocess_br_tags(hitteri.html.sanitize.text_with_breaks(content));

break;
case "element":
var inner = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(hitteri.html.sanitize.render_node,children));
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("a",tag);
if(and__5023__auto__){
return hitteri.html.sanitize.safe_href_QMARK_(href);
} else {
return and__5023__auto__;
}
})())){
return ["<a href=\"",hitteri.html.sanitize.escape_text(href),"\" target=\"_blank\" rel=\"noopener noreferrer\">",inner,"</a>"].join('');
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("img",tag);
if(and__5023__auto__){
var and__5023__auto____$1 = hitteri.html.sanitize.safe_img_src_QMARK_(src);
if(cljs.core.truth_(and__5023__auto____$1)){
return hitteri.html.sanitize.safe_img_class_QMARK_(class$);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return ["<img class=\"",hitteri.html.sanitize.escape_text(class$),"\" src=\"",hitteri.html.sanitize.escape_text(src),"\" alt=\"\" />"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("a",tag)){
return inner;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("img",tag)){
return "";
} else {
if(cljs.core.contains_QMARK_(hitteri.html.sanitize.allowed_tags,tag)){
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),">",inner,"</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),">"].join('');
} else {
return inner;

}
}
}
}
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38781__$1)].join('')));

}
});
hitteri.html.sanitize.sanitize_html_content = (function hitteri$html$sanitize$sanitize_html_content(s){
var cleaned = hitteri.html.sanitize.strip_void_blocked_tags(hitteri.html.sanitize.strip_dangerous_blocks(hitteri.html.sanitize.remove_comments(hitteri.html.sanitize.preprocess_br_tags(s))));
var map__38786 = hitteri.html.sanitize.parse_nodes.cljs$core$IFn$_invoke$arity$1(cleaned);
var map__38786__$1 = cljs.core.__destructure_map(map__38786);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38786__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(hitteri.html.sanitize.render_node,nodes));
});
/**
 * Sanitize user-authored description HTML for safe popup rendering.
 * 
 *   Allows a small tag whitelist, strips scripts/event handlers/unsafe URLs,
 *   and converts plain-text newlines to <br>.
 */
hitteri.html.sanitize.sanitize_description_html = (function hitteri$html$sanitize$sanitize_description_html(s){
var text = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = s;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()));
if(cljs.core.empty_QMARK_(text)){
return "";
} else {
return hitteri.html.sanitize.postprocess_br_tags(((hitteri.html.sanitize.plain_text_QMARK_(text))?hitteri.html.sanitize.text_with_breaks(hitteri.html.sanitize.preprocess_br_tags(text)):hitteri.html.sanitize.sanitize_html_content(text)));
}
});

//# sourceMappingURL=hitteri.html.sanitize.js.map
