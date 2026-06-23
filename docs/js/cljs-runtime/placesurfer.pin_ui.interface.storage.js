goog.provide('placesurfer.pin_ui.interface$.storage');
placesurfer.pin_ui.interface$.storage.read_pins_BANG_ = (function placesurfer$pin_ui$interface$storage$read_pins_BANG_(){
return placesurfer.pin_ui.pure.storage.read_pins_BANG_();
});
placesurfer.pin_ui.interface$.storage.save_pins_BANG_ = (function placesurfer$pin_ui$interface$storage$save_pins_BANG_(items){
return placesurfer.pin_ui.pure.storage.save_pins_BANG_(items);
});
placesurfer.pin_ui.interface$.storage.new_pin_id = (function placesurfer$pin_ui$interface$storage$new_pin_id(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40621 = arguments.length;
var i__5750__auto___40622 = (0);
while(true){
if((i__5750__auto___40622 < len__5749__auto___40621)){
args__5755__auto__.push((arguments[i__5750__auto___40622]));

var G__40624 = (i__5750__auto___40622 + (1));
i__5750__auto___40622 = G__40624;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return placesurfer.pin_ui.interface$.storage.new_pin_id.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(placesurfer.pin_ui.interface$.storage.new_pin_id.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(placesurfer.pin_ui.pure.storage.new_pin_id,args);
}));

(placesurfer.pin_ui.interface$.storage.new_pin_id.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(placesurfer.pin_ui.interface$.storage.new_pin_id.cljs$lang$applyTo = (function (seq40618){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40618));
}));


//# sourceMappingURL=placesurfer.pin_ui.interface.storage.js.map
