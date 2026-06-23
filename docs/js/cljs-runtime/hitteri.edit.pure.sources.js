goog.provide('hitteri.edit.pure.sources');
hitteri.edit.pure.sources.normalize_update_source = (function hitteri$edit$pure$sources$normalize_update_source(source){
if((source instanceof cljs.core.Keyword)){
return source;
} else {
if((source instanceof cljs.core.Symbol)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(source);
} else {
if(typeof source === 'string'){
var trimmed = clojure.string.trim(source);
if(cljs.core.seq(trimmed)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(trimmed);
} else {
return new cljs.core.Keyword(null,"manual","manual",-237370608);
}
} else {
if(typeof source === 'number'){
return new cljs.core.Keyword(null,"manual","manual",-237370608);
} else {
return new cljs.core.Keyword(null,"manual","manual",-237370608);

}
}
}
}
});
/**
 * Serialize :source for API payloads; never throws on empty/invalid values.
 */
hitteri.edit.pure.sources.source_name_for_save = (function hitteri$edit$pure$sources$source_name_for_save(source){
return cljs.core.name(hitteri.edit.pure.sources.normalize_update_source(source));
});
/**
 * Like clojure.core/name but accepts keywords, symbols, and strings.
 */
hitteri.edit.pure.sources.keyword_name_safe = (function hitteri$edit$pure$sources$keyword_name_safe(x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
if((x instanceof cljs.core.Symbol)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
if((!((x == null)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;

}
}
}
}
});
hitteri.edit.pure.sources.coerce_form_text = (function hitteri$edit$pure$sources$coerce_form_text(v){
if(typeof v === 'string'){
return v;
} else {
if((v == null)){
return "";
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
});

//# sourceMappingURL=hitteri.edit.pure.sources.js.map
