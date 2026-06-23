goog.provide('hitteri.nav_ui.flags');
hitteri.nav_ui.flags.iso__GT_flag = (function hitteri$nav_ui$flags$iso__GT_flag(iso){
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

//# sourceMappingURL=hitteri.nav_ui.flags.js.map
