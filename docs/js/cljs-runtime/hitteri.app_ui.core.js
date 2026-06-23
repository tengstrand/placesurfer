goog.provide('hitteri.app_ui.core');
hitteri.app_ui.core.coerce_form_field = (function hitteri$app_ui$core$coerce_form_field(v){
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
hitteri.app_ui.core.map_page_QMARK_ = (function hitteri$app_ui$core$map_page_QMARK_(page){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.Keyword(null,"topic","topic",-1960480691),null,new cljs.core.Keyword(null,"country","country",312965309),null], null), null),page);
});
hitteri.app_ui.core.iso__GT_flag = (function hitteri$app_ui$core$iso__GT_flag(iso){
if(cljs.core.truth_((function (){var and__5023__auto__ = iso;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(iso));
} else {
return and__5023__auto__;
}
})())){
var upper = iso.toUpperCase();
var base = ((127462) - (65));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(String.fromCodePoint((base + upper.charCodeAt((0))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(String.fromCodePoint((base + upper.charCodeAt((1)))))].join('');
} else {
return null;
}
});
hitteri.app_ui.core.nav_tab = (function hitteri$app_ui$core$nav_tab(label,tab_page,active_page){
var panel_name = cljs.core.name(tab_page);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab_page,active_page);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab","sl-tab",1308914428),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slot","slot",240229571),"nav",new cljs.core.Keyword(null,"panel","panel",-558637456),panel_name,new cljs.core.Keyword(null,"active","active",1895962068),active_QMARK_], null),label], null);
});
hitteri.app_ui.core.nav_country_tab = (function hitteri$app_ui$core$nav_country_tab(country_code,active_page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab.nav-country-tab","sl-tab.nav-country-tab",-564276527),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slot","slot",240229571),"nav",new cljs.core.Keyword(null,"panel","panel",-558637456),"country",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"country","country",312965309),active_page)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nav-country-tab-icon","span.nav-country-tab-icon",-2067141195),hitteri.app_ui.core.iso__GT_flag((function (){var or__5025__auto__ = country_code;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "SE";
}
})())], null)], null);
});
hitteri.app_ui.core.nav_update_tab = (function hitteri$app_ui$core$nav_update_tab(p__21599){
var map__21600 = p__21599;
var map__21600__$1 = cljs.core.__destructure_map(map__21600);
var active_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21600__$1,new cljs.core.Keyword(null,"active-page","active-page",370357330));
var navigate_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21600__$1,new cljs.core.Keyword(null,"navigate!","navigate!",79998348));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab.nav-update-tab","sl-tab.nav-update-tab",1487570634),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"slot","slot",240229571),"nav",new cljs.core.Keyword(null,"panel","panel",-558637456),"update",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),active_page),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(navigate_BANG_)){
return (navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"update","update",1045576396)) : navigate_BANG_.call(null,new cljs.core.Keyword(null,"update","update",1045576396)));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nav-update-tab-content","span.nav-update-tab-content",1752666858),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav-update-icon","img.nav-update-icon",139664568),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/edit.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"update"], null)], null)], null)], null);
});
hitteri.app_ui.core.nav_topic_tab = (function hitteri$app_ui$core$nav_topic_tab(topic_rows,active_page){
var active_topics = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"active?","active?",459499776),topic_rows));
var fallback_discgolf = cljs.core.some((function (p1__21601_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"discgolf","discgolf",416907656),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__21601_SHARP_))){
return p1__21601_SHARP_;
} else {
return null;
}
}),topic_rows);
var selected_topic = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(active_topics)))?cljs.core.first(active_topics):(function (){var or__5025__auto__ = fallback_discgolf;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"discgolf","discgolf",416907656),new cljs.core.Keyword(null,"marker-url","marker-url",153262178),"data/discgolf/marker.png"], null);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab.nav-topic-tab","sl-tab.nav-topic-tab",1645937818),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slot","slot",240229571),"nav",new cljs.core.Keyword(null,"panel","panel",-558637456),"topic",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topic","topic",-1960480691),active_page)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nav-topic-tab-icons","span.nav-topic-tab-icons",710963712),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nav-topic-icon-wrap","span.nav-topic-icon-wrap",1616011716),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["nav-topic-icon nav-topic-icon--",cljs.core.name(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(selected_topic))].join(''),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"marker-url","marker-url",153262178).cljs$core$IFn$_invoke$arity$1(selected_topic),new cljs.core.Keyword(null,"alt","alt",-3214426),cljs.core.name(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(selected_topic))], null)], null)], null)], null)], null);
});
if((typeof hitteri !== 'undefined') && (typeof hitteri.app_ui !== 'undefined') && (typeof hitteri.app_ui.core !== 'undefined') && (typeof hitteri.app_ui.core._BANG_synced_nav_page !== 'undefined')){
} else {
hitteri.app_ui.core._BANG_synced_nav_page = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
hitteri.app_ui.core.sync_tab_group_on_page_BANG_ = (function hitteri$app_ui$core$sync_tab_group_on_page_BANG_(group,page){
if(cljs.core.truth_((function (){var and__5023__auto__ = group;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.deref(hitteri.app_ui.core._BANG_synced_nav_page));
} else {
return and__5023__auto__;
}
})())){
var name = cljs.core.name(page);
var run = (function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = group;
if(cljs.core.truth_(and__5023__auto__)){
return group.show;
} else {
return and__5023__auto__;
}
})())){
var active_tab = group.activeTab;
var active_panel = (cljs.core.truth_(active_tab)?active_tab.panel:null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(active_panel,name)){
group.show(name);
} else {
}

return cljs.core.reset_BANG_(hitteri.app_ui.core._BANG_synced_nav_page,page);
} else {
return null;
}
});
if(cljs.core.truth_(group.show)){
return run();
} else {
return setTimeout(run,(0));
}
} else {
return null;
}
});
hitteri.app_ui.core.nav_tabs = (function hitteri$app_ui$core$nav_tabs(page,navigate_BANG_,backend_online_QMARK_,country_code,topic_rows){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-group.nav-tab-group","sl-tab-group.nav-tab-group",-27913728),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__21615){
var map__21616 = p__21615;
var map__21616__$1 = cljs.core.__destructure_map(map__21616);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21616__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return hitteri.app_ui.core.sync_tab_group_on_page_BANG_(node,page);
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sl-tab-show","sl-tab-show",1036894026),(function (e){
var name = e.detail.name;
if(cljs.core.seq(name)){
cljs.core.reset_BANG_(hitteri.app_ui.core._BANG_synced_nav_page,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name))){
var G__21618 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);
return (navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_BANG_.cljs$core$IFn$_invoke$arity$1(G__21618) : navigate_BANG_.call(null,G__21618));
} else {
return null;
}
} else {
return null;
}
})], null)], null),hitteri.app_ui.core.nav_tab("home",new cljs.core.Keyword(null,"home","home",-74557309),page),hitteri.app_ui.core.nav_tab("about",new cljs.core.Keyword(null,"about","about",1423892543),page),hitteri.app_ui.core.nav_country_tab(country_code,page),hitteri.app_ui.core.nav_topic_tab(topic_rows,page),hitteri.app_ui.core.nav_update_tab(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-page","active-page",370357330),page,new cljs.core.Keyword(null,"navigate!","navigate!",79998348),navigate_BANG_], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-panel","sl-tab-panel",383694507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-panel","sl-tab-panel",383694507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"topic"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-panel","sl-tab-panel",383694507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"country"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-panel","sl-tab-panel",383694507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"update"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-tab-panel","sl-tab-panel",383694507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"about"], null)], null)], null);
});
hitteri.app_ui.core.github_sponsors_url = "https://github.com/sponsors/tengstrand";
hitteri.app_ui.core.external_link = (function hitteri$app_ui$core$external_link(href,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.about-link","a.about-link",790916619),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),label], null);
});
hitteri.app_ui.core.about_panel = (function hitteri$app_ui$core$about_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion.about-section","motion.about-section",758415243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.about-heading","h2.about-heading",349183154),"Sponsor me"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.about-author","div.about-author",-1108472498),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.about-avatar","img.about-avatar",1974704248),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://github.com/tengstrand.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Joakim Tengstrand",new cljs.core.Keyword(null,"width","width",-384071477),"48",new cljs.core.Keyword(null,"height","height",1025178622),"48"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.about-bio","p.about-bio",-388237785),"My name is Joakim Tengstrand, and I'm the author of this site. If you would like to sponsor me, please visit my ",hitteri.app_ui.core.external_link(hitteri.app_ui.core.github_sponsors_url,"GitHub Sponsors page"),"."], null)], null)], null);
});
hitteri.app_ui.core.country_row_class = (function hitteri$app_ui$core$country_row_class(selected_QMARK_,keyboard_highlight_QMARK_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(selected_QMARK_)?"country-row--selected":null),(cljs.core.truth_(keyboard_highlight_QMARK_)?"country-row--keyboard-focus":null)], null)));
});
hitteri.app_ui.core.country_row = (function hitteri$app_ui$core$country_row(p__21627,selected_QMARK_,keyboard_highlight_QMARK_,select_country_BANG_){
var map__21628 = p__21627;
var map__21628__$1 = cljs.core.__destructure_map(map__21628);
var iso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21628__$1,new cljs.core.Keyword(null,"iso","iso",-1366207543));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21628__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21628__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.country-row","button.country-row",-827615663),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),hitteri.app_ui.core.country_row_class(selected_QMARK_,keyboard_highlight_QMARK_),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__21629){
var map__21630 = p__21629;
var map__21630__$1 = cljs.core.__destructure_map(map__21630);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21630__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
if(cljs.core.truth_((function (){var and__5023__auto__ = keyboard_highlight_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return node;
} else {
return and__5023__auto__;
}
})())){
return node.scrollIntoView(({"block": "nearest"}));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (select_country_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_country_BANG_.cljs$core$IFn$_invoke$arity$1(slug) : select_country_BANG_.call(null,slug));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.country-flag","span.country-flag",776084503),hitteri.app_ui.core.iso__GT_flag(iso)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.country-label","span.country-label",18884761),label], null)], null);
});
hitteri.app_ui.core.label_starts_with_QMARK_ = (function hitteri$app_ui$core$label_starts_with_QMARK_(label,query){
var q = (function (){var or__5025__auto__ = query;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})().trim();
var label_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var or__5025__auto__ = cljs.core.empty_QMARK_(q);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return label_str.toLowerCase().startsWith(q.toLowerCase());
}
});
hitteri.app_ui.core.filter_countries = (function hitteri$app_ui$core$filter_countries(countries,query){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21636_SHARP_){
return hitteri.app_ui.core.label_starts_with_QMARK_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__21636_SHARP_),query);
}),(function (){var or__5025__auto__ = countries;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
});
hitteri.app_ui.core.order_selected_first = (function hitteri$app_ui$core$order_selected_first(countries,selected_slug){
var selected = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21646_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_slug,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__21646_SHARP_));
}),countries));
var rest = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21647_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_slug,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__21647_SHARP_));
}),countries));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(selected,rest);
});
hitteri.app_ui.core.sync_country_search_BANG_ = (function hitteri$app_ui$core$sync_country_search_BANG_(node,value){
if(cljs.core.truth_(node)){
var v = (function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node.value,v)) && (((cljs.core.empty_QMARK_(v)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node,document.activeElement)))))){
return (node.value = v);
} else {
return null;
}
} else {
return null;
}
});
hitteri.app_ui.core.handle_country_search_keydown_BANG_ = (function hitteri$app_ui$core$handle_country_search_keydown_BANG_(e,country_highlight_index,visible,n,select_country_BANG_,set_country_highlight_index_BANG_,navigate_BANG_){
var key = e.key;
var trimmed = e.target.value.trim();
var G__21657 = key;
switch (G__21657) {
case "ArrowDown":
e.preventDefault();

var G__21658 = hitteri.country.interface$.step_highlight_index(country_highlight_index,n,(1));
return (set_country_highlight_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_country_highlight_index_BANG_.cljs$core$IFn$_invoke$arity$1(G__21658) : set_country_highlight_index_BANG_.call(null,G__21658));

break;
case "ArrowUp":
e.preventDefault();

var G__21659 = hitteri.country.interface$.step_highlight_index(country_highlight_index,n,(-1));
return (set_country_highlight_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_country_highlight_index_BANG_.cljs$core$IFn$_invoke$arity$1(G__21659) : set_country_highlight_index_BANG_.call(null,G__21659));

break;
case "Enter":
e.preventDefault();

if(cljs.core.empty_QMARK_(trimmed)){
return (navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home","home",-74557309)) : navigate_BANG_.call(null,new cljs.core.Keyword(null,"home","home",-74557309)));
} else {
if((n > (0))){
var idx = (function (){var or__5025__auto__ = country_highlight_index;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var slug = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(visible,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"slug","slug",2029314850)], null));
if(cljs.core.truth_(slug)){
return (select_country_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_country_BANG_.cljs$core$IFn$_invoke$arity$1(slug) : select_country_BANG_.call(null,slug));
} else {
return null;
}
} else {
return null;
}
}

break;
default:
return null;

}
});
hitteri.app_ui.core.country_search = (function hitteri$app_ui$core$country_search(value,country_slug,countries,country_highlight_index,set_country_filter_BANG_,set_country_highlight_index_BANG_,select_country_BANG_,navigate_BANG_){
var visible_for_keys = (function (query){
return hitteri.app_ui.core.order_selected_first(hitteri.app_ui.core.filter_countries(countries,query),country_slug);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.country-search","input.country-search",1269050040),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search country\u2026",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Search country",new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__21662){
var map__21663 = p__21662;
var map__21663__$1 = cljs.core.__destructure_map(map__21663);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21663__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return hitteri.app_ui.core.sync_country_search_BANG_(node,value);
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var query = e.target.value;
var visible = visible_for_keys(query);
var G__21666 = query;
var G__21667 = cljs.core.count(visible);
return (set_country_filter_BANG_.cljs$core$IFn$_invoke$arity$2 ? set_country_filter_BANG_.cljs$core$IFn$_invoke$arity$2(G__21666,G__21667) : set_country_filter_BANG_.call(null,G__21666,G__21667));
}),new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (e){
var trimmed = e.target.value.trim();
var visible = visible_for_keys(trimmed);
return hitteri.app_ui.core.handle_country_search_keydown_BANG_(e,country_highlight_index,visible,cljs.core.count(visible),select_country_BANG_,set_country_highlight_index_BANG_,navigate_BANG_);
})], null)], null)], null);
});
hitteri.app_ui.core.sync_checkbox_BANG_ = (function hitteri$app_ui$core$sync_checkbox_BANG_(node,active_QMARK_){
if(cljs.core.truth_((function (){var and__5023__auto__ = node;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node.checked,active_QMARK_);
} else {
return and__5023__auto__;
}
})())){
(node.hitteriSyncing = true);

(node.checked = active_QMARK_);

return setTimeout((function (){
return (node.hitteriSyncing = false);
}),(0));
} else {
return null;
}
});
hitteri.app_ui.core.topic_row = (function hitteri$app_ui$core$topic_row(p__21683){
var map__21684 = p__21683;
var map__21684__$1 = cljs.core.__destructure_map(map__21684);
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21684__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21684__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21684__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21684__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var marker_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21684__$1,new cljs.core.Keyword(null,"marker-url","marker-url",153262178));
var set_topic_active_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21684__$1,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion.topic-row","motion.topic-row",-516771302),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sl-checkbox","sl-checkbox",-675865475),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"checked","checked",-50955819),active_QMARK_,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__21700){
var map__21701 = p__21700;
var map__21701__$1 = cljs.core.__destructure_map(map__21701);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21701__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return hitteri.app_ui.core.sync_checkbox_BANG_(node,active_QMARK_);
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sl-change","sl-change",-760726964),(function (e){
var target = e.target;
if(((cljs.core.not(target.hitteriSyncing)) && (cljs.core.not(window.hitteriTopicBatchSync)))){
var G__21725 = topic;
var G__21726 = target.checked;
return (set_topic_active_BANG_.cljs$core$IFn$_invoke$arity$2 ? set_topic_active_BANG_.cljs$core$IFn$_invoke$arity$2(G__21725,G__21726) : set_topic_active_BANG_.call(null,G__21725,G__21726));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.topic-row-content","span.topic-row-content",1922928974),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.topic-icon-wrap","span.topic-icon-wrap",1147837364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["topic-icon topic-icon--",cljs.core.name(topic)].join(''),new cljs.core.Keyword(null,"src","src",-1651076051),marker_url,new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.topic-label","span.topic-label",-216123895),label], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.country-loading-spinner.topic-loading-spinner","span.country-loading-spinner.topic-loading-spinner",1102008128),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null):null)], null)], null)], null);
});
hitteri.app_ui.core.map_container = (function hitteri$app_ui$core$map_container(p__21737){
var map__21738 = p__21737;
var map__21738__$1 = cljs.core.__destructure_map(map__21738);
var element_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21738__$1,new cljs.core.Keyword(null,"element-id","element-id",798606230));
var mount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21738__$1,new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372));
var unmount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21738__$1,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-root","div.map-root",-1183173812),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),["map-container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_id)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),element_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd"], null),new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),(function (p__21739){
var map__21740 = p__21739;
var map__21740__$1 = cljs.core.__destructure_map(map__21740);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21740__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return setTimeout((function (){
if(cljs.core.truth_(mount_map_BANG_)){
return (mount_map_BANG_.cljs$core$IFn$_invoke$arity$1 ? mount_map_BANG_.cljs$core$IFn$_invoke$arity$1(node) : mount_map_BANG_.call(null,node));
} else {
return null;
}
}),(0));
}),new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753),(function (_){
if(cljs.core.truth_(unmount_map_BANG_)){
return (unmount_map_BANG_.cljs$core$IFn$_invoke$arity$0 ? unmount_map_BANG_.cljs$core$IFn$_invoke$arity$0() : unmount_map_BANG_.call(null));
} else {
return null;
}
})], null)], null);
});
hitteri.app_ui.core.topic_panel = (function hitteri$app_ui$core$topic_panel(p__21742){
var map__21743 = p__21742;
var map__21743__$1 = cljs.core.__destructure_map(map__21743);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21743__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var set_topic_active_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21743__$1,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295));
var show_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21743__$1,new cljs.core.Keyword(null,"show-map!","show-map!",-168806063));
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21743__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
var has_topics_QMARK_ = cljs.core.some(new cljs.core.Keyword(null,"active?","active?",459499776),rows);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion.topic-section","motion.topic-section",998234609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion.topic-list","motion.topic-list",-375323255),(function (){var iter__5503__auto__ = (function hitteri$app_ui$core$topic_panel_$_iter__21744(s__21745){
return (new cljs.core.LazySeq(null,(function (){
var s__21745__$1 = s__21745;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21745__$1);
if(temp__5825__auto__){
var s__21745__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21745__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__21745__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__21747 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__21746 = (0);
while(true){
if((i__21746 < size__5502__auto__)){
var map__21749 = cljs.core._nth(c__5501__auto__,i__21746);
var map__21749__$1 = cljs.core.__destructure_map(map__21749);
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var marker_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749__$1,new cljs.core.Keyword(null,"marker-url","marker-url",153262178));
cljs.core.chunk_append(b__21747,hitteri.app_ui.core.topic_row(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"active?","active?",459499776),active_QMARK_,new cljs.core.Keyword(null,"loading?","loading?",1905707049),loading_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"marker-url","marker-url",153262178),marker_url,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295),set_topic_active_BANG_], null)));

var G__21850 = (i__21746 + (1));
i__21746 = G__21850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21747),hitteri$app_ui$core$topic_panel_$_iter__21744(cljs.core.chunk_rest(s__21745__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21747),null);
}
} else {
var map__21753 = cljs.core.first(s__21745__$2);
var map__21753__$1 = cljs.core.__destructure_map(map__21753);
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21753__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21753__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21753__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21753__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var marker_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21753__$1,new cljs.core.Keyword(null,"marker-url","marker-url",153262178));
return cljs.core.cons(hitteri.app_ui.core.topic_row(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"active?","active?",459499776),active_QMARK_,new cljs.core.Keyword(null,"loading?","loading?",1905707049),loading_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"marker-url","marker-url",153262178),marker_url,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295),set_topic_active_BANG_], null)),hitteri$app_ui$core$topic_panel_$_iter__21744(cljs.core.rest(s__21745__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(rows);
})()], null),(cljs.core.truth_(has_topics_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.topic-empty-message","p.topic-empty-message",2126608003),"Select at least one topic"], null)),(cljs.core.truth_(mobile_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topic-actions","div.topic-actions",-688800070),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.topic-show","button.topic-show",-1628462498),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(has_topics_QMARK_),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (show_map_BANG_.cljs$core$IFn$_invoke$arity$0 ? show_map_BANG_.cljs$core$IFn$_invoke$arity$0() : show_map_BANG_.call(null));
})], null)], null),"Show"], null)], null):null)], null);
});
hitteri.app_ui.core.country_panel = (function hitteri$app_ui$core$country_panel(p__21754){
var map__21755 = p__21754;
var map__21755__$1 = cljs.core.__destructure_map(map__21755);
var countries_loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21755__$1,new cljs.core.Keyword(null,"countries-loading?","countries-loading?",-1018911139));
var country_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21755__$1,new cljs.core.Keyword(null,"country-filter","country-filter",-2099038819));
var ensure_countries_loaded_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21755__$1,new cljs.core.Keyword(null,"ensure-countries-loaded!","ensure-countries-loaded!",1392756926));
var country_highlight_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21755__$1,new cljs.core.Keyword(null,"country-highlight-index","country-highlight-index",-1271997150));
var select_country_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21755__$1,new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741));
var navigate_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21755__$1,new cljs.core.Keyword(null,"navigate!","navigate!",79998348));
var countries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21755__$1,new cljs.core.Keyword(null,"countries","countries",863192750));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21755__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var set_country_filter_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21755__$1,new cljs.core.Keyword(null,"set-country-filter!","set-country-filter!",-1983545420));
var country_slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21755__$1,new cljs.core.Keyword(null,"country-slug","country-slug",769681844));
var set_country_highlight_index_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21755__$1,new cljs.core.Keyword(null,"set-country-highlight-index!","set-country-highlight-index!",1161345176));
var countries__$1 = (function (){var or__5025__auto__ = countries;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var filter_q = (function (){var or__5025__auto__ = country_filter;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
var status_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = status;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var load_error_QMARK_ = clojure.string.starts_with_QMARK_(status_str,"Error");
var visible = hitteri.app_ui.core.order_selected_first(hitteri.app_ui.core.filter_countries(countries__$1,filter_q),country_slug);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.country-section","div.country-section",-1423692646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),(function (_){
if(cljs.core.truth_(ensure_countries_loaded_BANG_)){
return (ensure_countries_loaded_BANG_.cljs$core$IFn$_invoke$arity$0 ? ensure_countries_loaded_BANG_.cljs$core$IFn$_invoke$arity$0() : ensure_countries_loaded_BANG_.call(null));
} else {
return null;
}
})], null),hitteri.app_ui.core.country_search(filter_q,country_slug,countries__$1,country_highlight_index,set_country_filter_BANG_,set_country_highlight_index_BANG_,select_country_BANG_,navigate_BANG_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.country-list","div.country-list",-1501273171),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["country-list-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(countries__$1))].join('')], null),((load_error_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.country-list-message.country-list-message--error","p.country-list-message.country-list-message--error",1539474927),status_str], null):((cljs.core.empty_QMARK_(countries__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.country-list-message","p.country-list-message",1266904877),"Loading countries\u2026"], null):((cljs.core.empty_QMARK_(visible))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.country-list-message","p.country-list-message",1266904877),"No matching countries"], null):cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__21762){
var map__21763 = p__21762;
var map__21763__$1 = cljs.core.__destructure_map(map__21763);
var country = map__21763__$1;
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
return hitteri.app_ui.core.country_row(country,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slug,country_slug),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,country_highlight_index),select_country_BANG_);
}),visible)
)))], null)], null);
});
hitteri.app_ui.core.display_cell_value = (function hitteri$app_ui$core$display_cell_value(v){
if((v == null)){
return "";
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(v);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
});
hitteri.app_ui.core.display_status_text = (function hitteri$app_ui$core$display_status_text(v){
if((!((v == null)))){
var s = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
if(cljs.core.seq(s)){
return s;
} else {
return null;
}
} else {
return null;
}
});
hitteri.app_ui.core.source_label = (function hitteri$app_ui$core$source_label(source){
if((source instanceof cljs.core.Keyword)){
return cljs.core.name(source);
} else {
if((source instanceof cljs.core.Symbol)){
return cljs.core.name(source);
} else {
if(typeof source === 'string'){
return source;
} else {
return null;

}
}
}
});
hitteri.app_ui.core.source_icon_src = (function hitteri$app_ui$core$source_icon_src(source){
var temp__5825__auto__ = (function (){var G__21767 = hitteri.app_ui.core.source_label(source);
var G__21767__$1 = (((G__21767 == null))?null:clojure.string.lower_case(G__21767));
if((G__21767__$1 == null)){
return null;
} else {
return cljs.core.not_empty(G__21767__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var source_name = temp__5825__auto__;
return ["/images/source/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_name),".png"].join('');
} else {
return null;
}
});
hitteri.app_ui.core.update_row_marker_icon_src = (function hitteri$app_ui$core$update_row_marker_icon_src(values){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url-pin","url-pin",924738382),new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154).cljs$core$IFn$_invoke$arity$1(values))){
return "/images/edit.png";
} else {
return null;
}
});
hitteri.app_ui.core.source_display_name = (function hitteri$app_ui$core$source_display_name(source){
return hitteri.app_ui.core.source_label(source);
});
hitteri.app_ui.core.sort_indicator = (function hitteri$app_ui$core$sort_indicator(sort_field,sort_dir,column_key){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_field,column_key)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569))){
return " \u2191";
} else {
return " \u2193";
}
} else {
return null;
}
});
hitteri.app_ui.core.update_table_cell = (function hitteri$app_ui$core$update_table_cell(row_id,values,key){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"action-icon","action-icon",-355725910))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.update-action-cell","td.update-action-cell",-1989597990),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(values)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-row-action-icon","img.update-row-action-icon",-921848571),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/added.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"added"], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deleted","deleted",-510100639),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(values)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-row-action-icon","img.update-row-action-icon",-921848571),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/removed.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"deleted"], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"edited","edited",-262616624),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(values)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-row-action-icon","img.update-row-action-icon",-921848571),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/edited.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"edited"], null)], null):null)))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"source-icon","source-icon",-769874141))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.update-source-cell","td.update-source-cell",-441082677),(function (){var temp__5825__auto__ = (function (){var or__5025__auto__ = hitteri.app_ui.core.update_row_marker_icon_src(values);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hitteri.app_ui.core.source_icon_src(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(values));
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var src = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-source-icon","img.update-source-icon",1825880713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"alt","alt",-3214426),hitteri.app_ui.core.display_cell_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(values);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "place";
}
})()),new cljs.core.Keyword(null,"title","title",636505583),hitteri.app_ui.core.display_cell_value((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(values);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "place";
}
})())], null)], null);
} else {
return null;
}
})()], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"meters","meters",-1644078545))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.update-meters-cell","td.update-meters-cell",-712102261),hitteri.app_ui.core.display_cell_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,key))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),hitteri.app_ui.core.display_cell_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,key))], null);

}
}
}
});
hitteri.app_ui.core.update_panel = (function hitteri$app_ui$core$update_panel(p__21772){
var map__21773 = p__21772;
var map__21773__$1 = cljs.core.__destructure_map(map__21773);
var panel_props = map__21773__$1;
var set_update_sort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"set-update-sort!","set-update-sort!",-289121223));
var update_delete_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"update-delete-enabled?","update-delete-enabled?",1560914137));
var save_update_dataset_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"save-update-dataset!","save-update-dataset!",711976314));
var update_clipboard_valid_url_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"update-clipboard-valid-url?","update-clipboard-valid-url?",77384444));
var update_save_dataset_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"update-save-dataset-disabled?","update-save-dataset-disabled?",-419809156));
var update_loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033));
var unmount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601));
var update_sort_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"update-sort-field","update-sort-field",455441377));
var toggle_selected_update_row_delete_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"toggle-selected-update-row-delete!","toggle-selected-update-row-delete!",145719074));
var set_update_locality_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"set-update-locality!","set-update-locality!",1973239972));
var update_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790));
var update_table_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"update-table-rows","update-table-rows",1506557351));
var toggle_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"toggle-update-row!","toggle-update-row!",230709739));
var update_sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"update-sort-dir","update-sort-dir",-62658901));
var set_update_longitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"set-update-longitude!","set-update-longitude!",657256715));
var set_update_latitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"set-update-latitude!","set-update-latitude!",149198125));
var set_update_homepage_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"set-update-homepage!","set-update-homepage!",-558436914));
var create_new_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"create-new-update-row!","create-new-update-row!",-1804891599));
var update_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"update-message","update-message",109684659));
var set_update_name_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"set-update-name!","set-update-name!",1575606643));
var update_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"update-error","update-error",-572386700));
var update_topic_invalid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"update-topic-invalid?","update-topic-invalid?",1313445748));
var update_table_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"update-table-columns","update-table-columns",-828256332));
var mount_update_map_fn = new cljs.core.Keyword(null,"mount-update-map!","mount-update-map!",881879396).cljs$core$IFn$_invoke$arity$1(panel_props);
var map__21774 = update_form;
var map__21774__$1 = cljs.core.__destructure_map(map__21774);
var locality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21774__$1,new cljs.core.Keyword(null,"locality","locality",842809377));
var homepage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21774__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21774__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21774__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var place_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(update_form);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.update-section","section.update-section",1226877624),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-layout","div.update-layout",-1595906759),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.update-editor","aside.update-editor",415227631),(cljs.core.truth_(update_topic_invalid_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.update-error","p.update-error",-646246208),"Select exactly one topic to continue"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-name"], null),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-name.update-input","input#update-name.update-input",-192427667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),hitteri.app_ui.core.coerce_form_field(place_name),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__21775 = e.target.value;
return (set_update_name_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_name_BANG_.cljs$core$IFn$_invoke$arity$1(G__21775) : set_update_name_BANG_.call(null,G__21775));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-locality"], null),"Locality"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-locality.update-input","input#update-locality.update-input",-1242412003),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),hitteri.app_ui.core.coerce_form_field(locality),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__21776 = e.target.value;
return (set_update_locality_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_locality_BANG_.cljs$core$IFn$_invoke$arity$1(G__21776) : set_update_locality_BANG_.call(null,G__21776));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-longitude"], null),"Longitude"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-longitude.update-input","input#update-longitude.update-input",240666201),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"inputmode","inputmode",118925090),"decimal",new cljs.core.Keyword(null,"value","value",305978217),hitteri.app_ui.core.coerce_form_field(longitude),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__21777 = e.target.value;
return (set_update_longitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_longitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__21777) : set_update_longitude_BANG_.call(null,G__21777));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-latitude"], null),"Latitude"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-latitude.update-input","input#update-latitude.update-input",-1959537749),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"inputmode","inputmode",118925090),"decimal",new cljs.core.Keyword(null,"value","value",305978217),hitteri.app_ui.core.coerce_form_field(latitude),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__21778 = e.target.value;
return (set_update_latitude_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_latitude_BANG_.cljs$core$IFn$_invoke$arity$1(G__21778) : set_update_latitude_BANG_.call(null,G__21778));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row","div.update-field-row",1544435964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"update-homepage"], null),"Homepage"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#update-homepage.update-input","input#update-homepage.update-input",996962875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),hitteri.app_ui.core.coerce_form_field(homepage),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__21779 = e.target.value;
return (set_update_homepage_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_homepage_BANG_.cljs$core$IFn$_invoke$arity$1(G__21779) : set_update_homepage_BANG_.call(null,G__21779));
})], null)], null)], null)], null),(function (){var temp__5825__auto__ = hitteri.app_ui.core.display_status_text(update_error);
if(cljs.core.truth_(temp__5825__auto__)){
var err = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.update-error","p.update-error",-646246208),err], null);
} else {
return null;
}
})(),(function (){var temp__5825__auto__ = hitteri.app_ui.core.display_status_text(update_message);
if(cljs.core.truth_(temp__5825__auto__)){
var msg = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.update-message","p.update-message",935414982),msg], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-map-panel","div.update-map-panel",-1655291449),hitteri.app_ui.core.map_container(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element-id","element-id",798606230),"update-map",new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372),mount_update_map_fn,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601),unmount_map_BANG_], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-wrap","div.update-table-wrap",1469984077),(cljs.core.truth_(update_loading_QMARK_)?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-toolbar","div.update-table-toolbar",-1760505710),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-new-btn","button.update-new-btn",2060373904),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(update_clipboard_valid_url_QMARK_)?"Paste Google Maps URL from clipboard":"Paste Google Maps URL from clipboard, or clear"),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (create_new_update_row_BANG_.cljs$core$IFn$_invoke$arity$0 ? create_new_update_row_BANG_.cljs$core$IFn$_invoke$arity$0() : create_new_update_row_BANG_.call(null));
})], null)], null),(cljs.core.truth_(update_clipboard_valid_url_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-new-btn-icon","img.update-new-btn-icon",-104031225),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/link.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null):null),"New"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-delete-btn","button.update-delete-btn",205033335),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(update_delete_enabled_QMARK_),new cljs.core.Keyword(null,"title","title",636505583),"Toggle delete on selected row",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return (toggle_selected_update_row_delete_BANG_.cljs$core$IFn$_invoke$arity$0 ? toggle_selected_update_row_delete_BANG_.cljs$core$IFn$_invoke$arity$0() : toggle_selected_update_row_delete_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/trash.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Delete selected row"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-dataset-save","button.update-dataset-save",414276660),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.boolean$(update_save_dataset_disabled_QMARK_),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.stopPropagation();

return (save_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$0 ? save_update_dataset_BANG_.cljs$core$IFn$_invoke$arity$0() : save_update_dataset_BANG_.call(null));
})], null)], null),"Save"], null)], null)),(cljs.core.truth_(update_loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.update-loading","p.update-loading",-569792983),"Loading dataset..."], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.update-table","table.update-table",-64080666),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.update-table-header-row","tr.update-table-header-row",-1584248135),(function (){var iter__5503__auto__ = (function hitteri$app_ui$core$update_panel_$_iter__21780(s__21781){
return (new cljs.core.LazySeq(null,(function (){
var s__21781__$1 = s__21781;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21781__$1);
if(temp__5825__auto__){
var s__21781__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21781__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__21781__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__21783 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__21782 = (0);
while(true){
if((i__21782 < size__5502__auto__)){
var map__21784 = cljs.core._nth(c__5501__auto__,i__21782);
var map__21784__$1 = cljs.core.__destructure_map(map__21784);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21784__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21784__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var sortable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21784__$1,new cljs.core.Keyword(null,"sortable?","sortable?",291547474));
cljs.core.chunk_append(b__21783,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"action-icon","action-icon",-355725910)))?"update-action-header":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"source-icon","source-icon",-769874141)))?"update-source-header":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"meters","meters",-1644078545)))?"update-meters-header":(cljs.core.truth_(sortable_QMARK_)?"update-th-sortable":null)))),new cljs.core.Keyword(null,"on","on",173873944),(cljs.core.truth_(sortable_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__21782,map__21784,map__21784__$1,key,label,sortable_QMARK_,c__5501__auto__,size__5502__auto__,b__21783,s__21781__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns){
return (function (_){
return (set_update_sort_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_sort_BANG_.cljs$core$IFn$_invoke$arity$1(key) : set_update_sort_BANG_.call(null,key));
});})(i__21782,map__21784,map__21784__$1,key,label,sortable_QMARK_,c__5501__auto__,size__5502__auto__,b__21783,s__21781__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns))
], null):null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"action-icon","action-icon",-355725910)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-action-header-icon","img.update-action-header-icon",691410403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/floppy.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"save status"], null)], null):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),(function (){var or__5025__auto__ = hitteri.app_ui.core.sort_indicator(update_sort_field,update_sort_dir,key);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()].join('')
)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(key)], null)));

var G__21897 = (i__21782 + (1));
i__21782 = G__21897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21783),hitteri$app_ui$core$update_panel_$_iter__21780(cljs.core.chunk_rest(s__21781__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21783),null);
}
} else {
var map__21785 = cljs.core.first(s__21781__$2);
var map__21785__$1 = cljs.core.__destructure_map(map__21785);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21785__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21785__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var sortable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21785__$1,new cljs.core.Keyword(null,"sortable?","sortable?",291547474));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"action-icon","action-icon",-355725910)))?"update-action-header":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"source-icon","source-icon",-769874141)))?"update-source-header":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"meters","meters",-1644078545)))?"update-meters-header":(cljs.core.truth_(sortable_QMARK_)?"update-th-sortable":null)))),new cljs.core.Keyword(null,"on","on",173873944),(cljs.core.truth_(sortable_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__21785,map__21785__$1,key,label,sortable_QMARK_,s__21781__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns){
return (function (_){
return (set_update_sort_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_update_sort_BANG_.cljs$core$IFn$_invoke$arity$1(key) : set_update_sort_BANG_.call(null,key));
});})(map__21785,map__21785__$1,key,label,sortable_QMARK_,s__21781__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns))
], null):null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"action-icon","action-icon",-355725910)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-action-header-icon","img.update-action-header-icon",691410403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/floppy.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"save status"], null)], null):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),(function (){var or__5025__auto__ = hitteri.app_ui.core.sort_indicator(update_sort_field,update_sort_dir,key);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()].join('')
)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(key)], null)),hitteri$app_ui$core$update_panel_$_iter__21780(cljs.core.rest(s__21781__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(update_table_columns);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function hitteri$app_ui$core$update_panel_$_iter__21786(s__21787){
return (new cljs.core.LazySeq(null,(function (){
var s__21787__$1 = s__21787;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21787__$1);
if(temp__5825__auto__){
var s__21787__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21787__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__21787__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__21789 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__21788 = (0);
while(true){
if((i__21788 < size__5502__auto__)){
var map__21790 = cljs.core._nth(c__5501__auto__,i__21788);
var map__21790__$1 = cljs.core.__destructure_map(map__21790);
var row_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21790__$1,new cljs.core.Keyword(null,"row-id","row-id",246619473));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21790__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21790__$1,new cljs.core.Keyword(null,"values","values",372645556));
cljs.core.chunk_append(b__21789,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.update-row","tr.update-row",1410940785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"update-row--selected":null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__21788,map__21790,map__21790__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__21789,s__21787__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns){
return (function (_){
return (toggle_update_row_BANG_.cljs$core$IFn$_invoke$arity$1 ? toggle_update_row_BANG_.cljs$core$IFn$_invoke$arity$1(row_id) : toggle_update_row_BANG_.call(null,row_id));
});})(i__21788,map__21790,map__21790__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__21789,s__21787__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns))
], null)], null),(function (){var iter__5503__auto__ = ((function (i__21788,map__21790,map__21790__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__21789,s__21787__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns){
return (function hitteri$app_ui$core$update_panel_$_iter__21786_$_iter__21791(s__21792){
return (new cljs.core.LazySeq(null,((function (i__21788,map__21790,map__21790__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__21789,s__21787__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns){
return (function (){
var s__21792__$1 = s__21792;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21792__$1);
if(temp__5825__auto____$1){
var s__21792__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21792__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__21792__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__21794 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__21793 = (0);
while(true){
if((i__21793 < size__5502__auto____$1)){
var map__21795 = cljs.core._nth(c__5501__auto____$1,i__21793);
var map__21795__$1 = cljs.core.__destructure_map(map__21795);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21795__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__21794,hitteri.app_ui.core.update_table_cell(row_id,values,key));

var G__21922 = (i__21793 + (1));
i__21793 = G__21922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21794),hitteri$app_ui$core$update_panel_$_iter__21786_$_iter__21791(cljs.core.chunk_rest(s__21792__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21794),null);
}
} else {
var map__21796 = cljs.core.first(s__21792__$2);
var map__21796__$1 = cljs.core.__destructure_map(map__21796);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21796__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(hitteri.app_ui.core.update_table_cell(row_id,values,key),hitteri$app_ui$core$update_panel_$_iter__21786_$_iter__21791(cljs.core.rest(s__21792__$2)));
}
} else {
return null;
}
break;
}
});})(i__21788,map__21790,map__21790__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__21789,s__21787__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns))
,null,null));
});})(i__21788,map__21790,map__21790__$1,row_id,selected_QMARK_,values,c__5501__auto__,size__5502__auto__,b__21789,s__21787__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns))
;
return iter__5503__auto__(update_table_columns);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_id], null)));

var G__21924 = (i__21788 + (1));
i__21788 = G__21924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21789),hitteri$app_ui$core$update_panel_$_iter__21786(cljs.core.chunk_rest(s__21787__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21789),null);
}
} else {
var map__21797 = cljs.core.first(s__21787__$2);
var map__21797__$1 = cljs.core.__destructure_map(map__21797);
var row_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21797__$1,new cljs.core.Keyword(null,"row-id","row-id",246619473));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21797__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21797__$1,new cljs.core.Keyword(null,"values","values",372645556));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.update-row","tr.update-row",1410940785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"update-row--selected":null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__21797,map__21797__$1,row_id,selected_QMARK_,values,s__21787__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns){
return (function (_){
return (toggle_update_row_BANG_.cljs$core$IFn$_invoke$arity$1 ? toggle_update_row_BANG_.cljs$core$IFn$_invoke$arity$1(row_id) : toggle_update_row_BANG_.call(null,row_id));
});})(map__21797,map__21797__$1,row_id,selected_QMARK_,values,s__21787__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns))
], null)], null),(function (){var iter__5503__auto__ = ((function (map__21797,map__21797__$1,row_id,selected_QMARK_,values,s__21787__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns){
return (function hitteri$app_ui$core$update_panel_$_iter__21786_$_iter__21798(s__21799){
return (new cljs.core.LazySeq(null,(function (){
var s__21799__$1 = s__21799;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21799__$1);
if(temp__5825__auto____$1){
var s__21799__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21799__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__21799__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__21801 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__21800 = (0);
while(true){
if((i__21800 < size__5502__auto__)){
var map__21802 = cljs.core._nth(c__5501__auto__,i__21800);
var map__21802__$1 = cljs.core.__destructure_map(map__21802);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21802__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__21801,hitteri.app_ui.core.update_table_cell(row_id,values,key));

var G__21929 = (i__21800 + (1));
i__21800 = G__21929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21801),hitteri$app_ui$core$update_panel_$_iter__21786_$_iter__21798(cljs.core.chunk_rest(s__21799__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21801),null);
}
} else {
var map__21804 = cljs.core.first(s__21799__$2);
var map__21804__$1 = cljs.core.__destructure_map(map__21804);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21804__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(hitteri.app_ui.core.update_table_cell(row_id,values,key),hitteri$app_ui$core$update_panel_$_iter__21786_$_iter__21798(cljs.core.rest(s__21799__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__21797,map__21797__$1,row_id,selected_QMARK_,values,s__21787__$2,temp__5825__auto__,map__21774,map__21774__$1,locality,homepage,longitude,latitude,place_name,mount_update_map_fn,map__21773,map__21773__$1,panel_props,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_clipboard_valid_url_QMARK_,update_save_dataset_disabled_QMARK_,update_loading_QMARK_,unmount_map_BANG_,update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,update_form,update_table_rows,toggle_update_row_BANG_,update_sort_dir,set_update_longitude_BANG_,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,update_message,set_update_name_BANG_,update_error,update_topic_invalid_QMARK_,update_table_columns))
;
return iter__5503__auto__(update_table_columns);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_id], null)),hitteri$app_ui$core$update_panel_$_iter__21786(cljs.core.rest(s__21787__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(update_table_rows);
})()], null)], null))], null)], null)], null);
});
hitteri.app_ui.core.view = (function hitteri$app_ui$core$view(p__21809){
var map__21810 = p__21809;
var map__21810__$1 = cljs.core.__destructure_map(map__21810);
var props = map__21810__$1;
var set_update_sort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"set-update-sort!","set-update-sort!",-289121223));
var update_delete_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"update-delete-enabled?","update-delete-enabled?",1560914137));
var save_update_dataset_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"save-update-dataset!","save-update-dataset!",711976314));
var update_clipboard_valid_url_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"update-clipboard-valid-url?","update-clipboard-valid-url?",77384444));
var update_save_dataset_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"update-save-dataset-disabled?","update-save-dataset-disabled?",-419809156));
var countries_loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"countries-loading?","countries-loading?",-1018911139));
var country_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21810__$1,new cljs.core.Keyword(null,"country-filter","country-filter",-2099038819),"");
var ensure_countries_loaded_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"ensure-countries-loaded!","ensure-countries-loaded!",1392756926));
var update_loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033));
var unmount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601));
var topic_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21810__$1,new cljs.core.Keyword(null,"topic-rows","topic-rows",1351926944),cljs.core.PersistentVector.EMPTY);
var update_sort_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"update-sort-field","update-sort-field",455441377));
var update_country_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"update-country-code","update-country-code",1545858722));
var toggle_selected_update_row_delete_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"toggle-selected-update-row-delete!","toggle-selected-update-row-delete!",145719074));
var country_highlight_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"country-highlight-index","country-highlight-index",-1271997150));
var map_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"map-status","map-status",1191308996));
var set_update_locality_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"set-update-locality!","set-update-locality!",1973239972));
var update_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"update-form","update-form",475718790));
var backend_online_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21810__$1,new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729),false);
var update_table_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"update-table-rows","update-table-rows",1506557351));
var toggle_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"toggle-update-row!","toggle-update-row!",230709739));
var select_country_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741));
var update_sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"update-sort-dir","update-sort-dir",-62658901));
var set_update_longitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"set-update-longitude!","set-update-longitude!",657256715));
var navigate_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"navigate!","navigate!",79998348));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21810__$1,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
var set_update_latitude_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"set-update-latitude!","set-update-latitude!",149198125));
var set_update_homepage_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"set-update-homepage!","set-update-homepage!",-558436914));
var countries = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21810__$1,new cljs.core.Keyword(null,"countries","countries",863192750),cljs.core.PersistentVector.EMPTY);
var active_topics = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21810__$1,new cljs.core.Keyword(null,"active-topics","active-topics",1278012558),cljs.core.PersistentHashSet.EMPTY);
var set_topic_active_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295));
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21810__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),false);
var create_new_update_row_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"create-new-update-row!","create-new-update-row!",-1804891599));
var show_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"show-map!","show-map!",-168806063));
var update_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"update-message","update-message",109684659));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var country_iso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"country-iso","country-iso",-1029731117));
var set_update_name_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"set-update-name!","set-update-name!",1575606643));
var update_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"update-error","update-error",-572386700));
var update_topic_invalid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"update-topic-invalid?","update-topic-invalid?",1313445748));
var set_country_filter_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"set-country-filter!","set-country-filter!",-1983545420));
var update_table_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"update-table-columns","update-table-columns",-828256332));
var mount_map_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372));
var country_slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"country-slug","country-slug",769681844));
var set_country_highlight_index_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810__$1,new cljs.core.Keyword(null,"set-country-highlight-index!","set-country-highlight-index!",1161345176));
var mount_update_map_fn = new cljs.core.Keyword(null,"mount-update-map!","mount-update-map!",881879396).cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.app","main.app",-33260583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-page","data-page",798770447),cljs.core.name(page)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.nav-tabs","nav.nav-tabs",-1234066316),hitteri.app_ui.core.nav_tabs(page,navigate_BANG_,backend_online_QMARK_,(function (){var or__5025__auto__ = country_iso;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "SE";
}
})(),topic_rows)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"about","about",1423892543),page))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.about-page","section.about-page",-1165274803),hitteri.app_ui.core.about_panel()], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.workspace","div.workspace",521801153),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topic","topic",-1960480691),page))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.topic-sidebar-panel","aside.topic-sidebar-panel",1267551012),hitteri.app_ui.core.topic_panel(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),topic_rows,new cljs.core.Keyword(null,"set-topic-active!","set-topic-active!",254957295),set_topic_active_BANG_,new cljs.core.Keyword(null,"show-map!","show-map!",-168806063),show_map_BANG_,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),mobile_QMARK_], null))], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"country","country",312965309),page))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.country-sidebar-panel","aside.country-sidebar-panel",851454251),hitteri.app_ui.core.country_panel(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"country-highlight-index","country-highlight-index",-1271997150),new cljs.core.Keyword(null,"select-country!","select-country!",-1237350741),new cljs.core.Keyword(null,"navigate!","navigate!",79998348),new cljs.core.Keyword(null,"countries","countries",863192750),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"country-slug","country-slug",769681844),new cljs.core.Keyword(null,"set-country-filter!","set-country-filter!",-1983545420),new cljs.core.Keyword(null,"set-country-highlight-index!","set-country-highlight-index!",1161345176),new cljs.core.Keyword(null,"country-filter","country-filter",-2099038819),new cljs.core.Keyword(null,"countries-loading?","countries-loading?",-1018911139),new cljs.core.Keyword(null,"ensure-countries-loaded!","ensure-countries-loaded!",1392756926)],[country_highlight_index,select_country_BANG_,navigate_BANG_,countries,status,country_slug,set_country_filter_BANG_,set_country_highlight_index_BANG_,country_filter,countries_loading_QMARK_,ensure_countries_loaded_BANG_]))], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),page))?(function (){var offline_msg = ((((cljs.core.not(backend_online_QMARK_)) && (cljs.core.not(hitteri.app_ui.core.display_status_text(update_error)))))?"Backend service is not running":null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.update-page","section.update-page",756389344),hitteri.app_ui.core.update_panel(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"update-sort-field","update-sort-field",455441377),new cljs.core.Keyword(null,"toggle-selected-update-row-delete!","toggle-selected-update-row-delete!",145719074),new cljs.core.Keyword(null,"set-update-locality!","set-update-locality!",1973239972),new cljs.core.Keyword(null,"mount-update-map!","mount-update-map!",881879396),new cljs.core.Keyword(null,"update-form","update-form",475718790),new cljs.core.Keyword(null,"update-table-rows","update-table-rows",1506557351),new cljs.core.Keyword(null,"set-update-longitude!","set-update-longitude!",657256715),new cljs.core.Keyword(null,"toggle-update-row!","toggle-update-row!",230709739),new cljs.core.Keyword(null,"update-sort-dir","update-sort-dir",-62658901),new cljs.core.Keyword(null,"set-update-latitude!","set-update-latitude!",149198125),new cljs.core.Keyword(null,"set-update-homepage!","set-update-homepage!",-558436914),new cljs.core.Keyword(null,"create-new-update-row!","create-new-update-row!",-1804891599),new cljs.core.Keyword(null,"set-update-name!","set-update-name!",1575606643),new cljs.core.Keyword(null,"update-message","update-message",109684659),new cljs.core.Keyword(null,"update-error","update-error",-572386700),new cljs.core.Keyword(null,"update-topic-invalid?","update-topic-invalid?",1313445748),new cljs.core.Keyword(null,"update-table-columns","update-table-columns",-828256332),new cljs.core.Keyword(null,"set-update-sort!","set-update-sort!",-289121223),new cljs.core.Keyword(null,"update-delete-enabled?","update-delete-enabled?",1560914137),new cljs.core.Keyword(null,"save-update-dataset!","save-update-dataset!",711976314),new cljs.core.Keyword(null,"update-save-dataset-disabled?","update-save-dataset-disabled?",-419809156),new cljs.core.Keyword(null,"update-clipboard-valid-url?","update-clipboard-valid-url?",77384444),new cljs.core.Keyword(null,"update-loading?","update-loading?",-1670920033),new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601)],[update_sort_field,toggle_selected_update_row_delete_BANG_,set_update_locality_BANG_,mount_update_map_fn,update_form,update_table_rows,set_update_longitude_BANG_,toggle_update_row_BANG_,update_sort_dir,set_update_latitude_BANG_,set_update_homepage_BANG_,create_new_update_row_BANG_,set_update_name_BANG_,update_message,(function (){var or__5025__auto__ = update_error;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return offline_msg;
}
})(),update_topic_invalid_QMARK_,update_table_columns,set_update_sort_BANG_,update_delete_enabled_QMARK_,save_update_dataset_BANG_,update_save_dataset_disabled_QMARK_,update_clipboard_valid_url_QMARK_,update_loading_QMARK_,unmount_map_BANG_]))], null);
})():null),((((hitteri.app_ui.core.map_page_QMARK_(page)) && (cljs.core.not((function (){var and__5023__auto____$1 = mobile_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),null,new cljs.core.Keyword(null,"country","country",312965309),null], null), null),page);
} else {
return and__5023__auto____$1;
}
})()))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-area","div.map-area",1865513234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"map-area"], null),(function (){var temp__5825__auto__ = hitteri.app_ui.core.display_status_text(map_status);
if(cljs.core.truth_(temp__5825__auto__)){
var status__$1 = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-status","div.map-status",511178478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-map-status","data-map-status",153631135),"true"], null),status__$1], null);
} else {
return null;
}
})(),hitteri.app_ui.core.map_container(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element-id","element-id",798606230),"map",new cljs.core.Keyword(null,"mount-map!","mount-map!",1433564372),mount_map_BANG_,new cljs.core.Keyword(null,"unmount-map!","unmount-map!",-416381601),unmount_map_BANG_], null))], null):null)], null))], null);
});

//# sourceMappingURL=hitteri.app_ui.core.js.map
