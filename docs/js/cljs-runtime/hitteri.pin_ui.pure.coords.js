goog.provide('hitteri.pin_ui.pure.coords');
hitteri.pin_ui.pure.coords.decimal_input_pattern = /^-?(?:\d+(?:\.\d*)?|\.\d+)$/;
hitteri.pin_ui.pure.coords.form_field_value_str = (function hitteri$pin_ui$pure$coords$form_field_value_str(v){
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
hitteri.pin_ui.pure.coords.normalize_decimal_input = (function hitteri$pin_ui$pure$coords$normalize_decimal_input(v){
return clojure.string.replace(clojure.string.replace(clojure.string.trim(hitteri.pin_ui.pure.coords.form_field_value_str(v)),/\u2212/,"-"),/,/,".");
});
hitteri.pin_ui.pure.coords.decimal_input_matches_QMARK_ = (function hitteri$pin_ui$pure$coords$decimal_input_matches_QMARK_(s){
return cljs.core.boolean$((function (){var and__5023__auto__ = cljs.core.seq(s);
if(and__5023__auto__){
return cljs.core.re_matches(hitteri.pin_ui.pure.coords.decimal_input_pattern,s);
} else {
return and__5023__auto__;
}
})());
});
hitteri.pin_ui.pure.coords.parse_decimal = (function hitteri$pin_ui$pure$coords$parse_decimal(v){
var s = hitteri.pin_ui.pure.coords.normalize_decimal_input(v);
if(hitteri.pin_ui.pure.coords.decimal_input_matches_QMARK_(s)){
var n = parseFloat(s);
if(cljs.core.truth_(isNaN(n))){
return null;
} else {
return n;
}
} else {
return null;
}
});
hitteri.pin_ui.pure.coords.valid_longitude_QMARK_ = (function hitteri$pin_ui$pure$coords$valid_longitude_QMARK_(v){
var n = hitteri.pin_ui.pure.coords.parse_decimal(v);
return ((typeof n === 'number') && (((((-180) <= n)) && ((n <= (180))))));
});
hitteri.pin_ui.pure.coords.valid_latitude_QMARK_ = (function hitteri$pin_ui$pure$coords$valid_latitude_QMARK_(v){
var n = hitteri.pin_ui.pure.coords.parse_decimal(v);
return ((typeof n === 'number') && (((((-90) <= n)) && ((n <= (90))))));
});

//# sourceMappingURL=hitteri.pin_ui.pure.coords.js.map
