goog.provide('placesurfer.edit.pure.save');
placesurfer.edit.pure.save.save_row_ui_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"pending-id","pending-id",1999041996),null,new cljs.core.Keyword(null,"url-pin","url-pin",924738382),null,new cljs.core.Keyword(null,"meters","meters",-1644078545),null,new cljs.core.Keyword(null,"row-id","row-id",246619473),null,new cljs.core.Keyword(null,"url-form","url-form",426694546),null,new cljs.core.Keyword(null,"pending?","pending?",-2133618792),null,new cljs.core.Keyword(null,"marker-topic","marker-topic",652240154),null], null), null);
placesurfer.edit.pure.save.tombstone_dissoc_keys = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(placesurfer.edit.pure.save.save_row_ui_keys,new cljs.core.Keyword(null,"row-id","row-id",246619473),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"pending-id","pending-id",1999041996)], 0));
placesurfer.edit.pure.save.empty_save_value_QMARK_ = (function placesurfer$edit$pure$save$empty_save_value_QMARK_(v){
return (((v == null)) || (((typeof v === 'string') && (clojure.string.blank_QMARK_(v)))));
});
placesurfer.edit.pure.save.compact_save_position = (function placesurfer$edit$pure$save$compact_save_position(position){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39155){
var vec__39156 = p__39155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39156,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39156,(1),null);
return placesurfer.edit.pure.save.empty_save_value_QMARK_(v);
}),position));
});
placesurfer.edit.pure.save.delete_row__GT_tombstone = (function placesurfer$edit$pure$save$delete_row__GT_tombstone(country_code,row){
var lon = ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row) === 'number')?new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row):placesurfer.edit.pure.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row)));
var lat = ((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row) === 'number')?new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row):placesurfer.edit.pure.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row)));
var country_code_STAR_ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"country-code","country-code",-927451124).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return country_code;
}
})();
var base = (function (){var base = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (p1__39159_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}),p1__39159_SHARP_,placesurfer.edit.pure.save.tombstone_dissoc_keys);
})(row),new cljs.core.Keyword(null,"country-code","country-code",-927451124),country_code_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"deleted","deleted",-510100639)], 0));
var name = (function (){var G__39162 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(base);
var G__39162__$1 = (((G__39162 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39162));
if((G__39162__$1 == null)){
return null;
} else {
return clojure.string.trim(G__39162__$1);
}
})();
if(cljs.core.seq(name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,new cljs.core.Keyword(null,"name","name",1843675177),name);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(base,new cljs.core.Keyword(null,"name","name",1843675177));
}
})();
return placesurfer.edit.pure.save.compact_save_position(((cljs.core.contains_QMARK_(base,new cljs.core.Keyword(null,"source","source",-433931539)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.edit.pure.sources.source_name_for_save(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(base))):base));
});
placesurfer.edit.pure.save.row__GT_save_position = (function placesurfer$edit$pure$save$row__GT_save_position(country_code,row){
if(placesurfer.edit.pure.rows.row_save_as_tombstone_QMARK_(row)){
return placesurfer.edit.pure.save.delete_row__GT_tombstone(country_code,row);
} else {
var lon = ((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row) === 'number')?new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row):placesurfer.edit.pure.coords.parse_decimal(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(row)));
var lat = ((typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row) === 'number')?new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row):placesurfer.edit.pure.coords.parse_decimal(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(row)));
var base = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(row,placesurfer.edit.pure.save.save_row_ui_keys),new cljs.core.Keyword(null,"country-code","country-code",-927451124),country_code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lon,new cljs.core.Keyword(null,"latitude","latitude",394867543),lat], 0));
var base__$1 = ((placesurfer.edit.pure.rows.saved_update_row_id_QMARK_(new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(row)))?base:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(base,new cljs.core.Keyword(null,"action","action",-811238024)));
var base__$2 = ((cljs.core.contains_QMARK_(base__$1,new cljs.core.Keyword(null,"source","source",-433931539)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base__$1,new cljs.core.Keyword(null,"source","source",-433931539),placesurfer.edit.pure.sources.source_name_for_save(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(base__$1))):base__$1);
return placesurfer.edit.pure.save.compact_save_position(((placesurfer.edit.pure.rows.row_marked_edited_QMARK_(base__$2))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base__$2,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"edited","edited",-262616624)):(cljs.core.truth_((function (){var or__5025__auto__ = placesurfer.edit.pure.rows.row_marked_added_QMARK_(base__$2);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return placesurfer.edit.pure.rows.pending_row_QMARK_(row);
}
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(base__$2,new cljs.core.Keyword(null,"action","action",-811238024)):(cljs.core.truth_((function (){var G__39165 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(base__$2);
var fexpr__39164 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null], null), null);
return (fexpr__39164.cljs$core$IFn$_invoke$arity$1 ? fexpr__39164.cljs$core$IFn$_invoke$arity$1(G__39165) : fexpr__39164.call(null,G__39165));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(base__$2,new cljs.core.Keyword(null,"action","action",-811238024)):base__$2
))));
}
});
placesurfer.edit.pure.save.action_name_for_compare = (function placesurfer$edit$pure$save$action_name_for_compare(action){
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)))){
if((action instanceof cljs.core.Keyword)){
return cljs.core.name(action);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(action);
}
} else {
return null;
}
});
placesurfer.edit.pure.save.normalize_save_position_for_compare = (function placesurfer$edit$pure$save$normalize_save_position_for_compare(position){
var map__39167 = position;
var map__39167__$1 = cljs.core.__destructure_map(map__39167);
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39167__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39167__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var homepage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39167__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249));
var layout_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39167__$1,new cljs.core.Keyword(null,"layout-name","layout-name",-861676759));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39167__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39167__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var country_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39167__$1,new cljs.core.Keyword(null,"country-code","country-code",-927451124));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39167__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var holes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39167__$1,new cljs.core.Keyword(null,"holes","holes",188002959));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39167__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39167__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var description_STAR_ = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = description;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()));
var trimmed_name = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()));
var src = ((cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(source))))?(((source instanceof cljs.core.Keyword))?source:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(source)))):null);
var action_kw = ((cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(action))))?(function (){var kw = (((action instanceof cljs.core.Keyword))?action:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(action))));
if(cljs.core.truth_((function (){var fexpr__39173 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null], null), null);
return (fexpr__39173.cljs$core$IFn$_invoke$arity$1 ? fexpr__39173.cljs$core$IFn$_invoke$arity$1(kw) : fexpr__39173.call(null,kw));
})())){
return new cljs.core.Keyword(null,"deleted","deleted",-510100639);
} else {
return kw;
}
})():null);
if(((typeof longitude === 'number') && (typeof latitude === 'number'))){
var G__39174 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),trimmed_name,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),longitude,new cljs.core.Keyword(null,"latitude","latitude",394867543),latitude,new cljs.core.Keyword(null,"country-code","country-code",-927451124),(function (){var G__39175 = country_code;
var G__39175__$1 = (((G__39175 == null))?null:clojure.string.trim(G__39175));
if((G__39175__$1 == null)){
return null;
} else {
return clojure.string.upper_case(G__39175__$1);
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),description_STAR_], null);
var G__39174__$1 = ((cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(location__$1))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39174,new cljs.core.Keyword(null,"location","location",1815599388),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(location__$1))):G__39174);
var G__39174__$2 = ((cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39174__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage))):G__39174__$1);
var G__39174__$3 = (cljs.core.truth_(src)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39174__$2,new cljs.core.Keyword(null,"source","source",-433931539),src):G__39174__$2);
var G__39174__$4 = (cljs.core.truth_(action_kw)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39174__$3,new cljs.core.Keyword(null,"action","action",-811238024),action_kw):G__39174__$3);
var G__39174__$5 = (((!((holes == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39174__$4,new cljs.core.Keyword(null,"holes","holes",188002959),holes):G__39174__$4);
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout_name)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39174__$5,new cljs.core.Keyword(null,"layout-name","layout-name",-861676759),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout_name)));
} else {
return G__39174__$5;
}
} else {
if(cljs.core.seq(trimmed_name)){
var G__39176 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),trimmed_name,new cljs.core.Keyword(null,"country-code","country-code",-927451124),(function (){var G__39177 = country_code;
var G__39177__$1 = (((G__39177 == null))?null:clojure.string.trim(G__39177));
if((G__39177__$1 == null)){
return null;
} else {
return clojure.string.upper_case(G__39177__$1);
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),description_STAR_], null);
var G__39176__$1 = ((cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(location__$1))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39176,new cljs.core.Keyword(null,"location","location",1815599388),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(location__$1))):G__39176);
var G__39176__$2 = ((cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39176__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage))):G__39176__$1);
var G__39176__$3 = (cljs.core.truth_(src)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39176__$2,new cljs.core.Keyword(null,"source","source",-433931539),src):G__39176__$2);
var G__39176__$4 = (cljs.core.truth_(action_kw)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39176__$3,new cljs.core.Keyword(null,"action","action",-811238024),action_kw):G__39176__$3);
var G__39176__$5 = (((!((holes == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39176__$4,new cljs.core.Keyword(null,"holes","holes",188002959),holes):G__39176__$4);
if(cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout_name)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39176__$5,new cljs.core.Keyword(null,"layout-name","layout-name",-861676759),clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout_name)));
} else {
return G__39176__$5;
}
} else {
return null;
}
}
});
placesurfer.edit.pure.save.save_positions_identity_key = (function placesurfer$edit$pure$save$save_positions_identity_key(position){
if(((typeof new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position) === 'number') && (typeof new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position) === 'number'))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position),placesurfer.edit.pure.save.action_name_for_compare(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(position))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(position),placesurfer.edit.pure.save.action_name_for_compare(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(position))], null);
}
});
placesurfer.edit.pure.save.canonical_save_positions = (function placesurfer$edit$pure$save$canonical_save_positions(positions){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.pure.save.save_positions_identity_key,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(placesurfer.edit.pure.save.normalize_save_position_for_compare,positions)));
});

//# sourceMappingURL=placesurfer.edit.pure.save.js.map
