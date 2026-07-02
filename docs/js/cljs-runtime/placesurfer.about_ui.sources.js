goog.provide('placesurfer.about_ui.sources');
placesurfer.about_ui.sources.source_ids = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"openstreetmap","openstreetmap",1034616742),new cljs.core.Keyword(null,"discgolfmetrix","discgolfmetrix",737510857),new cljs.core.Keyword(null,"discgolfapi","discgolfapi",-1090738680),new cljs.core.Keyword(null,"biodlarkartan","biodlarkartan",1362771017)], null);
placesurfer.about_ui.sources.source_id_set = cljs.core.set(placesurfer.about_ui.sources.source_ids);
placesurfer.about_ui.sources.normalize_source_id = (function placesurfer$about_ui$sources$normalize_source_id(source){
if(cljs.core.truth_(source)){
var k = (((source instanceof cljs.core.Keyword))?source:(((source instanceof cljs.core.Symbol))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(source)):((typeof source === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(clojure.string.trim(source))):null
)));
if(cljs.core.contains_QMARK_(placesurfer.about_ui.sources.source_id_set,k)){
return k;
} else {
return null;
}
} else {
return null;
}
});
placesurfer.about_ui.sources.anchor_id = (function placesurfer$about_ui$sources$anchor_id(source_id){
return ["source-",cljs.core.name(source_id)].join('');
});
placesurfer.about_ui.sources.icon_src = (function placesurfer$about_ui$sources$icon_src(source_id){
return ["/images/source/",cljs.core.name(source_id),".png"].join('');
});
placesurfer.about_ui.sources.about_href = (function placesurfer$about_ui$sources$about_href(source_id){
return ["/?page=about#",placesurfer.about_ui.sources.anchor_id(source_id)].join('');
});
placesurfer.about_ui.sources.name_key = (function placesurfer$about_ui$sources$name_key(source_id){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["source-",cljs.core.name(source_id),"-name"].join(''));
});
placesurfer.about_ui.sources.description_key = (function placesurfer$about_ui$sources$description_key(source_id){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["source-",cljs.core.name(source_id),"-description"].join(''));
});
placesurfer.about_ui.sources.metrix_api_url = "https://discgolfmetrix.com/api.php";
placesurfer.about_ui.sources.scroll_to_location_hash_BANG_ = (function placesurfer$about_ui$sources$scroll_to_location_hash_BANG_(){
try{var hash = location.hash;
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.seq(hash);
if(and__5023__auto__){
return hash.startsWith("#source-");
} else {
return and__5023__auto__;
}
})())){
return setTimeout((function (){
var temp__5825__auto__ = document.querySelector(hash);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return el.scrollIntoView(({"behavior": "auto", "block": "start"}));
} else {
return null;
}
}),(0));
} else {
return null;
}
}catch (e97666){var _ = e97666;
return null;
}});
placesurfer.about_ui.sources.attribution_link = (function placesurfer$about_ui$sources$attribution_link(href,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.about-link","a.about-link",790916619),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),text], null);
});
placesurfer.about_ui.sources.description_content = (function placesurfer$about_ui$sources$description_content(t,source_id){
var G__97667 = source_id;
var G__97667__$1 = (((G__97667 instanceof cljs.core.Keyword))?G__97667.fqn:null);
switch (G__97667__$1) {
case "manual":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.about-source-description","p.about-source-description",2129742191),(function (){var G__97668 = placesurfer.about_ui.sources.description_key(source_id);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__97668) : t.call(null,G__97668));
})()], null);

break;
case "openstreetmap":
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.about-source-description","p.about-source-description",2129742191),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source-openstreetmap-description","source-openstreetmap-description",-411426137)) : t.call(null,new cljs.core.Keyword(null,"source-openstreetmap-description","source-openstreetmap-description",-411426137)))," ",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source-openstreetmap-attribution-prefix","source-openstreetmap-attribution-prefix",-1221325060)) : t.call(null,new cljs.core.Keyword(null,"source-openstreetmap-attribution-prefix","source-openstreetmap-attribution-prefix",-1221325060))),placesurfer.about_ui.sources.attribution_link("https://www.openstreetmap.org/copyright",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source-openstreetmap-attribution-link","source-openstreetmap-attribution-link",1874781385)) : t.call(null,new cljs.core.Keyword(null,"source-openstreetmap-attribution-link","source-openstreetmap-attribution-link",1874781385)))),"."], null);

break;
case "discgolfmetrix":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.about-source-description","p.about-source-description",2129742191),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source-discgolfmetrix-description-prefix","source-discgolfmetrix-description-prefix",1010622796)) : t.call(null,new cljs.core.Keyword(null,"source-discgolfmetrix-description-prefix","source-discgolfmetrix-description-prefix",1010622796))),placesurfer.about_ui.sources.attribution_link(placesurfer.about_ui.sources.metrix_api_url,(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source-discgolfmetrix-description-link","source-discgolfmetrix-description-link",1075105108)) : t.call(null,new cljs.core.Keyword(null,"source-discgolfmetrix-description-link","source-discgolfmetrix-description-link",1075105108)))),"."], null);

break;
case "discgolfapi":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.about-source-description","p.about-source-description",2129742191),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source-discgolfapi-description-prefix","source-discgolfapi-description-prefix",2066182593)) : t.call(null,new cljs.core.Keyword(null,"source-discgolfapi-description-prefix","source-discgolfapi-description-prefix",2066182593))),placesurfer.about_ui.sources.attribution_link("https://discgolfapi.com/",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source-discgolfapi-description-link","source-discgolfapi-description-link",436055364)) : t.call(null,new cljs.core.Keyword(null,"source-discgolfapi-description-link","source-discgolfapi-description-link",436055364)))),"."], null);

break;
case "biodlarkartan":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.about-source-description","p.about-source-description",2129742191),placesurfer.about_ui.sources.attribution_link((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source-biodlarkartan-url","source-biodlarkartan-url",-979753038)) : t.call(null,new cljs.core.Keyword(null,"source-biodlarkartan-url","source-biodlarkartan-url",-979753038))),"Biodlarkartan")," ",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source-biodlarkartan-description","source-biodlarkartan-description",-1979298006)) : t.call(null,new cljs.core.Keyword(null,"source-biodlarkartan-description","source-biodlarkartan-description",-1979298006)))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.about-source-description","p.about-source-description",2129742191),(function (){var G__97669 = placesurfer.about_ui.sources.description_key(source_id);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__97669) : t.call(null,G__97669));
})()], null);

}
});
placesurfer.about_ui.sources.section = (function placesurfer$about_ui$sources$section(t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion.about-section#about-sources","motion.about-section#about-sources",-1314255486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (_){
return placesurfer.about_ui.sources.scroll_to_location_hash_BANG_();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.about-heading","h2.about-heading",349183154),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("about","sources-heading","about/sources-heading",-657448527)) : t.call(null,new cljs.core.Keyword("about","sources-heading","about/sources-heading",-657448527)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.about-sources-table","table.about-sources-table",1767722909),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.about-sources-icon-col","th.about-sources-icon-col",2074312589),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.about-sources-name-col","th.about-sources-name-col",-1405107523),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("about","sources-column-source","about/sources-column-source",1869286869)) : t.call(null,new cljs.core.Keyword("about","sources-column-source","about/sources-column-source",1869286869)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.about-sources-desc-col","th.about-sources-desc-col",-1700280012),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("about","sources-column-description","about/sources-column-description",155263730)) : t.call(null,new cljs.core.Keyword("about","sources-column-description","about/sources-column-description",155263730)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function placesurfer$about_ui$sources$section_$_iter__97670(s__97671){
return (new cljs.core.LazySeq(null,(function (){
var s__97671__$1 = s__97671;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__97671__$1);
if(temp__5825__auto__){
var s__97671__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__97671__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__97671__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__97673 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__97672 = (0);
while(true){
if((i__97672 < size__5502__auto__)){
var source_id = cljs.core._nth(c__5501__auto__,i__97672);
cljs.core.chunk_append(b__97673,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.about-sources-row","tr.about-sources-row",-299469007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.about_ui.sources.anchor_id(source_id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.about-sources-icon-cell","td.about-sources-icon-cell",-295087593),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.about-source-icon","img.about-source-icon",344345395),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),placesurfer.about_ui.sources.icon_src(source_id),new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.about-source-name","td.about-source-name",-1954395605),(function (){var G__97674 = placesurfer.about_ui.sources.name_key(source_id);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__97674) : t.call(null,G__97674));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.about-sources-desc-cell","td.about-sources-desc-cell",-2052394090),placesurfer.about_ui.sources.description_content(t,source_id)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(source_id)], null)));

var G__97678 = (i__97672 + (1));
i__97672 = G__97678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__97673),placesurfer$about_ui$sources$section_$_iter__97670(cljs.core.chunk_rest(s__97671__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__97673),null);
}
} else {
var source_id = cljs.core.first(s__97671__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.about-sources-row","tr.about-sources-row",-299469007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),placesurfer.about_ui.sources.anchor_id(source_id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.about-sources-icon-cell","td.about-sources-icon-cell",-295087593),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.about-source-icon","img.about-source-icon",344345395),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),placesurfer.about_ui.sources.icon_src(source_id),new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.about-source-name","td.about-source-name",-1954395605),(function (){var G__97675 = placesurfer.about_ui.sources.name_key(source_id);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__97675) : t.call(null,G__97675));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.about-sources-desc-cell","td.about-sources-desc-cell",-2052394090),placesurfer.about_ui.sources.description_content(t,source_id)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(source_id)], null)),placesurfer$about_ui$sources$section_$_iter__97670(cljs.core.rest(s__97671__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(placesurfer.about_ui.sources.source_ids);
})()], null)], null)], null);
});

//# sourceMappingURL=placesurfer.about_ui.sources.js.map
