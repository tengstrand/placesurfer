goog.provide('hitteri.i18n.core');
hitteri.i18n.core.default_locale = new cljs.core.Keyword(null,"en","en",88457073);
hitteri.i18n.core.supported_locales = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"fr","fr",1577713888),null,new cljs.core.Keyword(null,"ja","ja",-1704765727),null,new cljs.core.Keyword(null,"es","es",1831673219),null,new cljs.core.Keyword(null,"pt","pt",556460867),null,new cljs.core.Keyword(null,"fi","fi",-118863964),null,new cljs.core.Keyword(null,"en","en",88457073),null,new cljs.core.Keyword(null,"de","de",1547124116),null,new cljs.core.Keyword(null,"sv","sv",-170947079),null,new cljs.core.Keyword(null,"da","da",-742035943),null,new cljs.core.Keyword(null,"no","no",-390373634),null], null), null);
hitteri.i18n.core.normalize_locale = (function hitteri$i18n$core$normalize_locale(locale){
var k = (((locale instanceof cljs.core.Keyword))?locale:((typeof locale === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(locale)):null
));
if(cljs.core.contains_QMARK_(hitteri.i18n.core.supported_locales,k)){
return k;
} else {
return hitteri.i18n.core.default_locale;
}
});
hitteri.i18n.core.interpolate = (function hitteri$i18n$core$interpolate(text,params){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__50427){
var vec__50428 = p__50427;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50428,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50428,(1),null);
return clojure.string.replace(s,["{",cljs.core.name(k),"}"].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
}),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),params);
});
hitteri.i18n.core.t = (function hitteri$i18n$core$t(var_args){
var G__50432 = arguments.length;
switch (G__50432) {
case 2:
return hitteri.i18n.core.t.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hitteri.i18n.core.t.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hitteri.i18n.core.t.cljs$core$IFn$_invoke$arity$2 = (function (locale,key){
return hitteri.i18n.core.t.cljs$core$IFn$_invoke$arity$3(locale,key,cljs.core.PersistentArrayMap.EMPTY);
}));

(hitteri.i18n.core.t.cljs$core$IFn$_invoke$arity$3 = (function (locale,key,params){
var locale__$1 = hitteri.i18n.core.normalize_locale(locale);
var en_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hitteri.i18n.pure.translations.en,key);
var text = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hitteri.i18n.pure.translations.for_locale(locale__$1),key);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = en_text;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.name(key);
}
}
})();
if(cljs.core.seq(params)){
return hitteri.i18n.core.interpolate(text,params);
} else {
return text;
}
}));

(hitteri.i18n.core.t.cljs$lang$maxFixedArity = 3);

hitteri.i18n.core.read_locale_BANG_ = (function hitteri$i18n$core$read_locale_BANG_(){
return hitteri.i18n.core.normalize_locale(new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(hitteri.i18n.pure.storage.read_settings_BANG_()));
});
hitteri.i18n.core.save_locale_BANG_ = (function hitteri$i18n$core$save_locale_BANG_(locale){
return hitteri.i18n.pure.storage.save_settings_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hitteri.i18n.pure.storage.read_settings_BANG_(),new cljs.core.Keyword(null,"locale","locale",-2115712697),cljs.core.name(hitteri.i18n.core.normalize_locale(locale))));
});
hitteri.i18n.core.topic_label = (function hitteri$i18n$core$topic_label(locale,topic){
return hitteri.i18n.core.t.cljs$core$IFn$_invoke$arity$2(locale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("topic",cljs.core.name(topic)));
});

//# sourceMappingURL=hitteri.i18n.core.js.map
