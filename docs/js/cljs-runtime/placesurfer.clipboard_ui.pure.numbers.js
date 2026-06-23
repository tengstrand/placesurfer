goog.provide('placesurfer.clipboard_ui.pure.numbers');
/**
 * Parse coordinate-like numbers from strings or numbers.
 */
placesurfer.clipboard_ui.pure.numbers.parse_number = (function placesurfer$clipboard_ui$pure$numbers$parse_number(v){
if(typeof v === 'number'){
return v;
} else {
if(typeof v === 'string'){
var n = parseFloat(clojure.string.trim(v));
if(cljs.core.truth_(isNaN(n))){
return null;
} else {
return n;
}
} else {
return null;

}
}
});

//# sourceMappingURL=placesurfer.clipboard_ui.pure.numbers.js.map
