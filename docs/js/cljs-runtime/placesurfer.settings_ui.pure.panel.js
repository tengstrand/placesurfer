goog.provide('placesurfer.settings_ui.pure.panel');
placesurfer.settings_ui.pure.panel.locales = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.Keyword(null,"iso","iso",-1366207543),"GB",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-english","settings/language-english",-477838895)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"sv","sv",-170947079),new cljs.core.Keyword(null,"iso","iso",-1366207543),"SE",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-swedish","settings/language-swedish",-1099408732)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"no","no",-390373634),new cljs.core.Keyword(null,"iso","iso",-1366207543),"NO",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-norwegian","settings/language-norwegian",366913980)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"da","da",-742035943),new cljs.core.Keyword(null,"iso","iso",-1366207543),"DK",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-danish","settings/language-danish",609763650)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"fi","fi",-118863964),new cljs.core.Keyword(null,"iso","iso",-1366207543),"FI",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-finnish","settings/language-finnish",382874752)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"de","de",1547124116),new cljs.core.Keyword(null,"iso","iso",-1366207543),"DE",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-german","settings/language-german",1035567323)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"fr","fr",1577713888),new cljs.core.Keyword(null,"iso","iso",-1366207543),"FR",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-french","settings/language-french",-1041160289)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"es","es",1831673219),new cljs.core.Keyword(null,"iso","iso",-1366207543),"ES",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-spanish","settings/language-spanish",2017977270)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"iso","iso",-1366207543),"PT",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-portuguese","settings/language-portuguese",-1771986557)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"ja","ja",-1704765727),new cljs.core.Keyword(null,"iso","iso",-1366207543),"JP",new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("settings","language-japanese","settings/language-japanese",836798848)], null)], null);
placesurfer.settings_ui.pure.panel.row_class = (function placesurfer$settings_ui$pure$panel$row_class(selected_QMARK_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(selected_QMARK_)?"settings-language-row--selected":null)], null)));
});
placesurfer.settings_ui.pure.panel.language_row = (function placesurfer$settings_ui$pure$panel$language_row(p__26752){
var map__26753 = p__26752;
var map__26753__$1 = cljs.core.__destructure_map(map__26753);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26753__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
var iso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26753__$1,new cljs.core.Keyword(null,"iso","iso",-1366207543));
var label_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26753__$1,new cljs.core.Keyword(null,"label-key","label-key",1868394642));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26753__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var set_locale_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26753__$1,new cljs.core.Keyword(null,"set-locale!","set-locale!",136598172));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26753__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.settings-language-row","button.settings-language-row",1834907204),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),placesurfer.settings_ui.pure.panel.row_class(active_QMARK_),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (set_locale_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_locale_BANG_.cljs$core$IFn$_invoke$arity$1(locale) : set_locale_BANG_.call(null,locale));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.settings-language-flag","span.settings-language-flag",946964322),placesurfer.nav_ui.interface$.flags.iso__GT_flag(iso)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.settings-language-label","span.settings-language-label",1781156339),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(label_key) : t.call(null,label_key))], null)], null);
});
placesurfer.settings_ui.pure.panel.sorted_locales = (function placesurfer$settings_ui$pure$panel$sorted_locales(t){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__26756_SHARP_){
var G__26757 = new cljs.core.Keyword(null,"label-key","label-key",1868394642).cljs$core$IFn$_invoke$arity$1(p1__26756_SHARP_);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__26757) : t.call(null,G__26757));
}),cljs.core.compare,placesurfer.settings_ui.pure.panel.locales);
});
placesurfer.settings_ui.pure.panel.dropbox_section = (function placesurfer$settings_ui$pure$panel$dropbox_section(p__26758){
var map__26759 = p__26758;
var map__26759__$1 = cljs.core.__destructure_map(map__26759);
var dropbox_configured_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26759__$1,new cljs.core.Keyword(null,"dropbox-configured?","dropbox-configured?",-1672215925));
var dropbox_connected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26759__$1,new cljs.core.Keyword(null,"dropbox-connected?","dropbox-connected?",-1052021943));
var dropbox_account_email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26759__$1,new cljs.core.Keyword(null,"dropbox-account-email","dropbox-account-email",-1050755345));
var dropbox_sync_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26759__$1,new cljs.core.Keyword(null,"dropbox-sync-error","dropbox-sync-error",526332698));
var connect_dropbox_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26759__$1,new cljs.core.Keyword(null,"connect-dropbox!","connect-dropbox!",-1870840475));
var disconnect_dropbox_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26759__$1,new cljs.core.Keyword(null,"disconnect-dropbox!","disconnect-dropbox!",324541913));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26759__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-section","div.settings-section",-990734776),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.settings-heading","h2.settings-heading",-1931125326),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings","dropbox-heading","settings/dropbox-heading",-4508629)) : t.call(null,new cljs.core.Keyword("settings","dropbox-heading","settings/dropbox-heading",-4508629)))], null),((cljs.core.not(dropbox_configured_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.settings-dropbox-status","p.settings-dropbox-status",925357184),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings","dropbox-not-configured","settings/dropbox-not-configured",-395245474)) : t.call(null,new cljs.core.Keyword("settings","dropbox-not-configured","settings/dropbox-not-configured",-395245474)))], null):(cljs.core.truth_(dropbox_connected_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-dropbox-connected","div.settings-dropbox-connected",1079441264),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.settings-dropbox-status","p.settings-dropbox-status",925357184),(cljs.core.truth_(dropbox_account_email)?(function (){var G__26760 = new cljs.core.Keyword("settings","dropbox-connected-as","settings/dropbox-connected-as",1338592409);
var G__26761 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),dropbox_account_email], null);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__26760,G__26761) : t.call(null,G__26760,G__26761));
})():(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings","dropbox-connected","settings/dropbox-connected",1400683233)) : t.call(null,new cljs.core.Keyword("settings","dropbox-connected","settings/dropbox-connected",1400683233))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.settings-dropbox-disconnect","button.settings-dropbox-disconnect",-1297865210),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (disconnect_dropbox_BANG_.cljs$core$IFn$_invoke$arity$0 ? disconnect_dropbox_BANG_.cljs$core$IFn$_invoke$arity$0() : disconnect_dropbox_BANG_.call(null));
})], null)], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings","dropbox-disconnect","settings/dropbox-disconnect",-776086756)) : t.call(null,new cljs.core.Keyword("settings","dropbox-disconnect","settings/dropbox-disconnect",-776086756)))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-dropbox-disconnected","div.settings-dropbox-disconnected",-1578518148),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.settings-dropbox-status","p.settings-dropbox-status",925357184),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings","dropbox-not-connected","settings/dropbox-not-connected",2002335829)) : t.call(null,new cljs.core.Keyword("settings","dropbox-not-connected","settings/dropbox-not-connected",2002335829)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.settings-dropbox-connect","button.settings-dropbox-connect",804222957),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (connect_dropbox_BANG_.cljs$core$IFn$_invoke$arity$0 ? connect_dropbox_BANG_.cljs$core$IFn$_invoke$arity$0() : connect_dropbox_BANG_.call(null));
})], null)], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings","dropbox-connect","settings/dropbox-connect",272531532)) : t.call(null,new cljs.core.Keyword("settings","dropbox-connect","settings/dropbox-connect",272531532)))], null)], null)
)),(cljs.core.truth_(dropbox_sync_error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.settings-dropbox-error","p.settings-dropbox-error",-83620746),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings","dropbox-error","settings/dropbox-error",1243841821)) : t.call(null,new cljs.core.Keyword("settings","dropbox-error","settings/dropbox-error",1243841821)))], null):null)], null);
});
placesurfer.settings_ui.pure.panel.panel = (function placesurfer$settings_ui$pure$panel$panel(p__26763){
var map__26764 = p__26763;
var map__26764__$1 = cljs.core.__destructure_map(map__26764);
var disconnect_dropbox_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26764__$1,new cljs.core.Keyword(null,"disconnect-dropbox!","disconnect-dropbox!",324541913),(function (){
return null;
}));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26764__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var dropbox_sync_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26764__$1,new cljs.core.Keyword(null,"dropbox-sync-error","dropbox-sync-error",526332698));
var set_locale_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26764__$1,new cljs.core.Keyword(null,"set-locale!","set-locale!",136598172),(function (_){
return null;
}));
var connect_dropbox_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26764__$1,new cljs.core.Keyword(null,"connect-dropbox!","connect-dropbox!",-1870840475),(function (){
return null;
}));
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26764__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"en","en",88457073));
var dropbox_connected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26764__$1,new cljs.core.Keyword(null,"dropbox-connected?","dropbox-connected?",-1052021943));
var dropbox_configured_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26764__$1,new cljs.core.Keyword(null,"dropbox-configured?","dropbox-configured?",-1672215925));
var dropbox_account_email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26764__$1,new cljs.core.Keyword(null,"dropbox-account-email","dropbox-account-email",-1050755345));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-sections","div.settings-sections",-69580065),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-section","div.settings-section",-990734776),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.settings-heading","h2.settings-heading",-1931125326),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings","language","settings/language",1923544055)) : t.call(null,new cljs.core.Keyword("settings","language","settings/language",1923544055)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-language-list","div.settings-language-list",2081096249),(function (){var iter__5503__auto__ = (function placesurfer$settings_ui$pure$panel$panel_$_iter__26765(s__26766){
return (new cljs.core.LazySeq(null,(function (){
var s__26766__$1 = s__26766;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__26766__$1);
if(temp__5823__auto__){
var s__26766__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26766__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__26766__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__26768 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__26767 = (0);
while(true){
if((i__26767 < size__5502__auto__)){
var map__26769 = cljs.core._nth(c__5501__auto__,i__26767);
var map__26769__$1 = cljs.core.__destructure_map(map__26769);
var spec = map__26769__$1;
var locale_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26769__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
cljs.core.chunk_append(b__26768,placesurfer.settings_ui.pure.panel.language_row(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(spec,new cljs.core.Keyword(null,"locale","locale",-2115712697),locale_code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(locale_code,locale),new cljs.core.Keyword(null,"set-locale!","set-locale!",136598172),set_locale_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], 0))));

var G__26771 = (i__26767 + (1));
i__26767 = G__26771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26768),placesurfer$settings_ui$pure$panel$panel_$_iter__26765(cljs.core.chunk_rest(s__26766__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26768),null);
}
} else {
var map__26770 = cljs.core.first(s__26766__$2);
var map__26770__$1 = cljs.core.__destructure_map(map__26770);
var spec = map__26770__$1;
var locale_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26770__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
return cljs.core.cons(placesurfer.settings_ui.pure.panel.language_row(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(spec,new cljs.core.Keyword(null,"locale","locale",-2115712697),locale_code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(locale_code,locale),new cljs.core.Keyword(null,"set-locale!","set-locale!",136598172),set_locale_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], 0))),placesurfer$settings_ui$pure$panel$panel_$_iter__26765(cljs.core.rest(s__26766__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(placesurfer.settings_ui.pure.panel.sorted_locales(t));
})()], null)], null),placesurfer.settings_ui.pure.panel.dropbox_section(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"dropbox-configured?","dropbox-configured?",-1672215925),dropbox_configured_QMARK_,new cljs.core.Keyword(null,"dropbox-connected?","dropbox-connected?",-1052021943),dropbox_connected_QMARK_,new cljs.core.Keyword(null,"dropbox-account-email","dropbox-account-email",-1050755345),dropbox_account_email,new cljs.core.Keyword(null,"dropbox-sync-error","dropbox-sync-error",526332698),dropbox_sync_error,new cljs.core.Keyword(null,"connect-dropbox!","connect-dropbox!",-1870840475),connect_dropbox_BANG_,new cljs.core.Keyword(null,"disconnect-dropbox!","disconnect-dropbox!",324541913),disconnect_dropbox_BANG_,new cljs.core.Keyword(null,"t","t",-1397832519),t], null))], null);
});

//# sourceMappingURL=placesurfer.settings_ui.pure.panel.js.map
