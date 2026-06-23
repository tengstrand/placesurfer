goog.provide('hitteri.settings_ui.pure.panel');
hitteri.settings_ui.pure.panel.locales = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.Keyword(null,"iso","iso",-1366207543),"GB",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-english","settings/language-english",-477838895)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"sv","sv",-170947079),new cljs.core.Keyword(null,"iso","iso",-1366207543),"SE",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-swedish","settings/language-swedish",-1099408732)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"no","no",-390373634),new cljs.core.Keyword(null,"iso","iso",-1366207543),"NO",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-norwegian","settings/language-norwegian",366913980)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"da","da",-742035943),new cljs.core.Keyword(null,"iso","iso",-1366207543),"DK",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-danish","settings/language-danish",609763650)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"fi","fi",-118863964),new cljs.core.Keyword(null,"iso","iso",-1366207543),"FI",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-finnish","settings/language-finnish",382874752)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"de","de",1547124116),new cljs.core.Keyword(null,"iso","iso",-1366207543),"DE",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-german","settings/language-german",1035567323)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"fr","fr",1577713888),new cljs.core.Keyword(null,"iso","iso",-1366207543),"FR",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-french","settings/language-french",-1041160289)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"es","es",1831673219),new cljs.core.Keyword(null,"iso","iso",-1366207543),"ES",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-spanish","settings/language-spanish",2017977270)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"iso","iso",-1366207543),"PT",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-portuguese","settings/language-portuguese",-1771986557)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"ja","ja",-1704765727),new cljs.core.Keyword(null,"iso","iso",-1366207543),"JP",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-japanese","settings/language-japanese",836798848)], null)], null);
hitteri.settings_ui.pure.panel.row_class = (function hitteri$settings_ui$pure$panel$row_class(selected_QMARK_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(selected_QMARK_)?"settings-language-row--selected":null)], null)));
});
hitteri.settings_ui.pure.panel.language_row = (function hitteri$settings_ui$pure$panel$language_row(p__40977){
var map__40978 = p__40977;
var map__40978__$1 = cljs.core.__destructure_map(map__40978);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40978__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
var iso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40978__$1,new cljs.core.Keyword(null,"iso","iso",-1366207543));
var label_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40978__$1,new cljs.core.Keyword(null,"label-key","label-key",1868394642));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40978__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var set_locale_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40978__$1,new cljs.core.Keyword(null,"set-locale!","set-locale!",136598172));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40978__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.settings-language-row","button.settings-language-row",1834907204),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),hitteri.settings_ui.pure.panel.row_class(active_QMARK_),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (set_locale_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_locale_BANG_.cljs$core$IFn$_invoke$arity$1(locale) : set_locale_BANG_.call(null,locale));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.settings-language-flag","span.settings-language-flag",946964322),hitteri.nav_ui.interface$.flags.iso__GT_flag(iso)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.settings-language-label","span.settings-language-label",1781156339),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(label_key) : t.call(null,label_key))], null)], null);
});
hitteri.settings_ui.pure.panel.sorted_locales = (function hitteri$settings_ui$pure$panel$sorted_locales(t){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__40981_SHARP_){
var G__40982 = new cljs.core.Keyword(null,"label-key","label-key",1868394642).cljs$core$IFn$_invoke$arity$1(p1__40981_SHARP_);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__40982) : t.call(null,G__40982));
}),cljs.core.compare,hitteri.settings_ui.pure.panel.locales);
});
hitteri.settings_ui.pure.panel.panel = (function hitteri$settings_ui$pure$panel$panel(p__40983){
var map__40984 = p__40983;
var map__40984__$1 = cljs.core.__destructure_map(map__40984);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40984__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"en","en",88457073));
var set_locale_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40984__$1,new cljs.core.Keyword(null,"set-locale!","set-locale!",136598172),(function (_){
return null;
}));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40984__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-sections","div.settings-sections",-69580065),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-section","div.settings-section",-990734776),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.settings-heading","h2.settings-heading",-1931125326),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings","language","settings/language",1923544055)) : t.call(null,new cljs.core.Keyword("settings","language","settings/language",1923544055)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-language-list","div.settings-language-list",2081096249),(function (){var iter__5503__auto__ = (function hitteri$settings_ui$pure$panel$panel_$_iter__40987(s__40988){
return (new cljs.core.LazySeq(null,(function (){
var s__40988__$1 = s__40988;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40988__$1);
if(temp__5825__auto__){
var s__40988__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40988__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__40988__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__40990 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__40989 = (0);
while(true){
if((i__40989 < size__5502__auto__)){
var map__40993 = cljs.core._nth(c__5501__auto__,i__40989);
var map__40993__$1 = cljs.core.__destructure_map(map__40993);
var spec = map__40993__$1;
var locale_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40993__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
cljs.core.chunk_append(b__40990,hitteri.settings_ui.pure.panel.language_row(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(spec,new cljs.core.Keyword(null,"locale","locale",-2115712697),locale_code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(locale_code,locale),new cljs.core.Keyword(null,"set-locale!","set-locale!",136598172),set_locale_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], 0))));

var G__41001 = (i__40989 + (1));
i__40989 = G__41001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40990),hitteri$settings_ui$pure$panel$panel_$_iter__40987(cljs.core.chunk_rest(s__40988__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40990),null);
}
} else {
var map__40994 = cljs.core.first(s__40988__$2);
var map__40994__$1 = cljs.core.__destructure_map(map__40994);
var spec = map__40994__$1;
var locale_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40994__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
return cljs.core.cons(hitteri.settings_ui.pure.panel.language_row(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(spec,new cljs.core.Keyword(null,"locale","locale",-2115712697),locale_code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(locale_code,locale),new cljs.core.Keyword(null,"set-locale!","set-locale!",136598172),set_locale_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], 0))),hitteri$settings_ui$pure$panel$panel_$_iter__40987(cljs.core.rest(s__40988__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(hitteri.settings_ui.pure.panel.sorted_locales(t));
})()], null)], null)], null);
});

//# sourceMappingURL=hitteri.settings_ui.pure.panel.js.map
