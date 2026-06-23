goog.provide('hitteri.pin_ui.interface$.storage');
hitteri.pin_ui.interface$.storage.read_pins_BANG_ = (function hitteri$pin_ui$interface$storage$read_pins_BANG_(){
return hitteri.pin_ui.pure.storage.read_pins_BANG_();
});
hitteri.pin_ui.interface$.storage.save_pins_BANG_ = (function hitteri$pin_ui$interface$storage$save_pins_BANG_(items){
return hitteri.pin_ui.pure.storage.save_pins_BANG_(items);
});
hitteri.pin_ui.interface$.storage.new_pin_id = (function hitteri$pin_ui$interface$storage$new_pin_id(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47622 = arguments.length;
var i__5750__auto___47623 = (0);
while(true){
if((i__5750__auto___47623 < len__5749__auto___47622)){
args__5755__auto__.push((arguments[i__5750__auto___47623]));

var G__47624 = (i__5750__auto___47623 + (1));
i__5750__auto___47623 = G__47624;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return hitteri.pin_ui.interface$.storage.new_pin_id.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(hitteri.pin_ui.interface$.storage.new_pin_id.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hitteri.pin_ui.pure.storage.new_pin_id,args);
}));

(hitteri.pin_ui.interface$.storage.new_pin_id.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hitteri.pin_ui.interface$.storage.new_pin_id.cljs$lang$applyTo = (function (seq47618){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47618));
}));


//# sourceMappingURL=hitteri.pin_ui.interface.storage.js.map
