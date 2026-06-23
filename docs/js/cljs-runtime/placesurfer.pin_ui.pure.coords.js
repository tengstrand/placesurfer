goog.provide('placesurfer.pin_ui.pure.coords');
placesurfer.pin_ui.pure.coords.decimal_input_pattern = /^-?(?:\d+(?:\.\d*)?|\.\d+)$/;
placesurfer.pin_ui.pure.coords.form_field_value_str = (function placesurfer$pin_ui$pure$coords$form_field_value_str(v){
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
placesurfer.pin_ui.pure.coords.normalize_decimal_input = (function placesurfer$pin_ui$pure$coords$normalize_decimal_input(v){
return clojure.string.replace(clojure.string.replace(clojure.string.trim(placesurfer.pin_ui.pure.coords.form_field_value_str(v)),/\u2212/,"-"),/,/,".");
});
placesurfer.pin_ui.pure.coords.decimal_input_matches_QMARK_ = (function placesurfer$pin_ui$pure$coords$decimal_input_matches_QMARK_(s){
return cljs.core.boolean$((function (){var and__5023__auto__ = cljs.core.seq(s);
if(and__5023__auto__){
return cljs.core.re_matches(placesurfer.pin_ui.pure.coords.decimal_input_pattern,s);
} else {
return and__5023__auto__;
}
})());
});
placesurfer.pin_ui.pure.coords.parse_decimal = (function placesurfer$pin_ui$pure$coords$parse_decimal(v){
var s = placesurfer.pin_ui.pure.coords.normalize_decimal_input(v);
if(placesurfer.pin_ui.pure.coords.decimal_input_matches_QMARK_(s)){
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
placesurfer.pin_ui.pure.coords.valid_longitude_QMARK_ = (function placesurfer$pin_ui$pure$coords$valid_longitude_QMARK_(v){
var n = placesurfer.pin_ui.pure.coords.parse_decimal(v);
return ((typeof n === 'number') && (((((-180) <= n)) && ((n <= (180))))));
});
placesurfer.pin_ui.pure.coords.valid_latitude_QMARK_ = (function placesurfer$pin_ui$pure$coords$valid_latitude_QMARK_(v){
var n = placesurfer.pin_ui.pure.coords.parse_decimal(v);
return ((typeof n === 'number') && (((((-90) <= n)) && ((n <= (90))))));
});

//# sourceMappingURL=placesurfer.pin_ui.pure.coords.js.map
