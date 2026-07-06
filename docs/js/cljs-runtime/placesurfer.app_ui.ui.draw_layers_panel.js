goog.provide('placesurfer.app_ui.ui.draw_layers_panel');
placesurfer.app_ui.ui.draw_layers_panel.enter_key_QMARK_ = (function placesurfer$app_ui$ui$draw_layers_panel$enter_key_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key);
});
placesurfer.app_ui.ui.draw_layers_panel.submit_BANG_ = (function placesurfer$app_ui$ui$draw_layers_panel$submit_BANG_(label,add_BANG_){
if(cljs.core.truth_((function (){var and__5023__auto__ = add_BANG_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(clojure.string.trim((function (){var or__5025__auto__ = label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()));
} else {
return and__5023__auto__;
}
})())){
return (add_BANG_.cljs$core$IFn$_invoke$arity$0 ? add_BANG_.cljs$core$IFn$_invoke$arity$0() : add_BANG_.call(null));
} else {
return null;
}
});
placesurfer.app_ui.ui.draw_layers_panel.clamp = (function placesurfer$app_ui$ui$draw_layers_panel$clamp(n,lo,hi){
var x__5110__auto__ = lo;
var y__5111__auto__ = (function (){var x__5113__auto__ = hi;
var y__5114__auto__ = (function (){var or__5025__auto__ = n;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
});
placesurfer.app_ui.ui.draw_layers_panel.to_hex = (function placesurfer$app_ui$ui$draw_layers_panel$to_hex(n){
var s = Math.round(placesurfer.app_ui.ui.draw_layers_panel.clamp(n,(0),(255))).toString((16));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(s))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;
}
});
placesurfer.app_ui.ui.draw_layers_panel.rgb__GT_hex = (function placesurfer$app_ui$ui$draw_layers_panel$rgb__GT_hex(p__66745){
var map__66746 = p__66745;
var map__66746__$1 = cljs.core.__destructure_map(map__66746);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66746__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66746__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66746__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(placesurfer.app_ui.ui.draw_layers_panel.to_hex(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(placesurfer.app_ui.ui.draw_layers_panel.to_hex(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(placesurfer.app_ui.ui.draw_layers_panel.to_hex(b))].join('');
});
placesurfer.app_ui.ui.draw_layers_panel.rgb__GT_hsv = (function placesurfer$app_ui$ui$draw_layers_panel$rgb__GT_hsv(p__66747){
var map__66748 = p__66747;
var map__66748__$1 = cljs.core.__destructure_map(map__66748);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66748__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66748__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66748__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var r_SINGLEQUOTE_ = (r / 255.0);
var g_SINGLEQUOTE_ = (g / 255.0);
var b_SINGLEQUOTE_ = (b / 255.0);
var cmax = (function (){var x__5110__auto__ = (function (){var x__5110__auto__ = r_SINGLEQUOTE_;
var y__5111__auto__ = g_SINGLEQUOTE_;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5111__auto__ = b_SINGLEQUOTE_;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var cmin = (function (){var x__5113__auto__ = (function (){var x__5113__auto__ = r_SINGLEQUOTE_;
var y__5114__auto__ = g_SINGLEQUOTE_;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var y__5114__auto__ = b_SINGLEQUOTE_;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var delta = (cmax - cmin);
var h = (((delta === (0)))?(0):cljs.core.mod(((360) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cmax,r_SINGLEQUOTE_))?((60) * ((g_SINGLEQUOTE_ - b_SINGLEQUOTE_) / delta)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cmax,g_SINGLEQUOTE_))?((60) * ((2) + ((b_SINGLEQUOTE_ - r_SINGLEQUOTE_) / delta))):((60) * ((4) + ((r_SINGLEQUOTE_ - g_SINGLEQUOTE_) / delta)))
))),(360)));
var s = (((cmax === (0)))?(0):(delta / cmax));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"s","s",1705939918),s], null);
});
placesurfer.app_ui.ui.draw_layers_panel.hsv__GT_rgb = (function placesurfer$app_ui$ui$draw_layers_panel$hsv__GT_rgb(h,s){
var c = s;
var x = (c * ((1) - Math.abs((cljs.core.mod((h / (60)),(2)) - (1)))));
var m = ((1) - c);
var vec__66749 = (((h < (60)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,x,(0)], null):(((h < (120)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,c,(0)], null):(((h < (180)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),c,x], null):(((h < (240)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x,c], null):(((h < (300)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),c], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(0),x], null)
)))));
var r_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66749,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66749,(1),null);
var b_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66749,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),Math.round(((r_SINGLEQUOTE_ + m) * (255))),new cljs.core.Keyword(null,"g","g",1738089905),Math.round(((g_SINGLEQUOTE_ + m) * (255))),new cljs.core.Keyword(null,"b","b",1482224470),Math.round(((b_SINGLEQUOTE_ + m) * (255)))], null);
});
placesurfer.app_ui.ui.draw_layers_panel.color__GT_preview_css = (function placesurfer$app_ui$ui$draw_layers_panel$color__GT_preview_css(p__66752){
var map__66753 = p__66752;
var map__66753__$1 = cljs.core.__destructure_map(map__66753);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66753__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66753__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66753__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66753__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66753__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var l = ((function (){var or__5025__auto__ = lightness;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() / (100));
var rf = Math.round((r + (((255) - r) * l)));
var gf = Math.round((g + (((255) - g) * l)));
var bf = Math.round((b + (((255) - b) * l)));
var a = ((function (){var or__5025__auto__ = opacity;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (35);
}
})() / (100));
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rf),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gf),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bf),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),")"].join('');
});
placesurfer.app_ui.ui.draw_layers_panel.draw_wheel_BANG_ = (function placesurfer$app_ui$ui$draw_layers_panel$draw_wheel_BANG_(canvas){
var ctx = canvas.getContext("2d");
var size = canvas.width;
var cx = (size / 2.0);
var cy = (size / 2.0);
var r = (cx - (1));
var seq__66754 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((360)));
var chunk__66755 = null;
var count__66756 = (0);
var i__66757 = (0);
while(true){
if((i__66757 < count__66756)){
var deg = chunk__66755.cljs$core$IIndexed$_nth$arity$2(null,i__66757);
var start_66782 = ((deg - (1)) * (Math.PI / (180)));
var end_66783 = ((deg + (1)) * (Math.PI / (180)));
var grad_66784 = ctx.createRadialGradient(cx,cy,(0),cx,cy,r);
grad_66784.addColorStop((0),"#ffffff");

grad_66784.addColorStop((1),["hsl(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deg),",100%,50%)"].join(''));

ctx.beginPath();

ctx.moveTo(cx,cy);

ctx.arc(cx,cy,r,start_66782,end_66783);

ctx.closePath();

(ctx.fillStyle = grad_66784);

ctx.fill();


var G__66785 = seq__66754;
var G__66786 = chunk__66755;
var G__66787 = count__66756;
var G__66788 = (i__66757 + (1));
seq__66754 = G__66785;
chunk__66755 = G__66786;
count__66756 = G__66787;
i__66757 = G__66788;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66754);
if(temp__5825__auto__){
var seq__66754__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66754__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__66754__$1);
var G__66789 = cljs.core.chunk_rest(seq__66754__$1);
var G__66790 = c__5548__auto__;
var G__66791 = cljs.core.count(c__5548__auto__);
var G__66792 = (0);
seq__66754 = G__66789;
chunk__66755 = G__66790;
count__66756 = G__66791;
i__66757 = G__66792;
continue;
} else {
var deg = cljs.core.first(seq__66754__$1);
var start_66793 = ((deg - (1)) * (Math.PI / (180)));
var end_66794 = ((deg + (1)) * (Math.PI / (180)));
var grad_66795 = ctx.createRadialGradient(cx,cy,(0),cx,cy,r);
grad_66795.addColorStop((0),"#ffffff");

grad_66795.addColorStop((1),["hsl(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deg),",100%,50%)"].join(''));

ctx.beginPath();

ctx.moveTo(cx,cy);

ctx.arc(cx,cy,r,start_66793,end_66794);

ctx.closePath();

(ctx.fillStyle = grad_66795);

ctx.fill();


var G__66796 = cljs.core.next(seq__66754__$1);
var G__66797 = null;
var G__66798 = (0);
var G__66799 = (0);
seq__66754 = G__66796;
chunk__66755 = G__66797;
count__66756 = G__66798;
i__66757 = G__66799;
continue;
}
} else {
return null;
}
}
break;
}
});
placesurfer.app_ui.ui.draw_layers_panel.canvas_pos__GT_color = (function placesurfer$app_ui$ui$draw_layers_panel$canvas_pos__GT_color(canvas,client_x,client_y){
var rect = canvas.getBoundingClientRect();
var x = (client_x - rect.left);
var y = (client_y - rect.top);
var size = canvas.width;
var cx = (size / 2.0);
var cy = (size / 2.0);
var r = (cx - (1));
var dx = (x - cx);
var dy = (y - cy);
var dist = Math.sqrt(((dx * dx) + (dy * dy)));
if((dist <= r)){
var h = cljs.core.mod(((360) + ((180) * (Math.atan2(dy,dx) / Math.PI))),(360));
var s = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (dist / r);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return placesurfer.app_ui.ui.draw_layers_panel.hsv__GT_rgb(h,s);
} else {
return null;
}
});
placesurfer.app_ui.ui.draw_layers_panel.current_color = (function placesurfer$app_ui$ui$draw_layers_panel$current_color(canvas){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(canvas.placesurferWheelColor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
placesurfer.app_ui.ui.draw_layers_panel.setup_drag_BANG_ = (function placesurfer$app_ui$ui$draw_layers_panel$setup_drag_BANG_(canvas,set_color_BANG_,save_BANG_){
var _BANG_down = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var on_move = (function (e){
if(cljs.core.truth_(cljs.core.deref(_BANG_down))){
var temp__5825__auto__ = placesurfer.app_ui.ui.draw_layers_panel.canvas_pos__GT_color(canvas,e.clientX,e.clientY);
if(cljs.core.truth_(temp__5825__auto__)){
var rgb = temp__5825__auto__;
var G__66758 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.app_ui.ui.draw_layers_panel.current_color(canvas),rgb], 0));
return (set_color_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_color_BANG_.cljs$core$IFn$_invoke$arity$1(G__66758) : set_color_BANG_.call(null,G__66758));
} else {
return null;
}
} else {
return null;
}
});
var on_up = (function (_){
if(cljs.core.truth_(cljs.core.deref(_BANG_down))){
cljs.core.reset_BANG_(_BANG_down,false);

if(cljs.core.truth_(save_BANG_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$0 ? save_BANG_.cljs$core$IFn$_invoke$arity$0() : save_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
});
canvas.addEventListener("mousedown",(function (e){
cljs.core.reset_BANG_(_BANG_down,true);

var temp__5825__auto__ = placesurfer.app_ui.ui.draw_layers_panel.canvas_pos__GT_color(canvas,e.clientX,e.clientY);
if(cljs.core.truth_(temp__5825__auto__)){
var rgb = temp__5825__auto__;
var G__66759 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([placesurfer.app_ui.ui.draw_layers_panel.current_color(canvas),rgb], 0));
return (set_color_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_color_BANG_.cljs$core$IFn$_invoke$arity$1(G__66759) : set_color_BANG_.call(null,G__66759));
} else {
return null;
}
}));

canvas.addEventListener("mousemove",on_move);

window.addEventListener("mouseup",on_up);

return (function (){
return window.removeEventListener("mouseup",on_up);
});
});
placesurfer.app_ui.ui.draw_layers_panel.indicator_style = (function placesurfer$app_ui$ui$draw_layers_panel$indicator_style(color,wheel_size){
var map__66760 = placesurfer.app_ui.ui.draw_layers_panel.rgb__GT_hsv(color);
var map__66760__$1 = cljs.core.__destructure_map(map__66760);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66760__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66760__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var cx = (wheel_size / 2.0);
var cy = (wheel_size / 2.0);
var dist = (s * (cx - (8)));
var angle = (h * (Math.PI / (180)));
var x = (cx + (dist * Math.cos(angle)));
var y = (cy + (dist * Math.sin(angle)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["0 0 0 1.5px rgba(0,0,0,0.4)",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((y - (6)))),"px"].join(''),"12px",placesurfer.app_ui.ui.draw_layers_panel.rgb__GT_hex(color),"absolute","2px solid white","50%","none","12px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((x - (6)))),"px"].join('')]);
});
placesurfer.app_ui.ui.draw_layers_panel.color_slider = (function placesurfer$app_ui$ui$draw_layers_panel$color_slider(p__66761){
var map__66762 = p__66761;
var map__66762__$1 = cljs.core.__destructure_map(map__66762);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66762__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66762__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var min_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66762__$1,new cljs.core.Keyword(null,"min-val","min-val",-243137826));
var max_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66762__$1,new cljs.core.Keyword(null,"max-val","max-val",-1492247884));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66762__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var set_draw_layer_color_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66762__$1,new cljs.core.Keyword(null,"set-draw-layer-color!","set-draw-layer-color!",838384664));
var save_draw_layers_config_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66762__$1,new cljs.core.Keyword(null,"save-draw-layers-config!","save-draw-layers-config!",-277919771));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$3(color,key,(0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-color-row","div.draw-color-row",1464769592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.draw-color-label","span.draw-color-label",207289136),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.draw-color-slider","input.draw-color-slider",-1051997711),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),min_val,new cljs.core.Keyword(null,"max","max",61366548),max_val,new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
if(cljs.core.truth_(set_draw_layer_color_BANG_)){
var G__66763 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color,key,parseInt(e.target.value,(10)));
return (set_draw_layer_color_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_draw_layer_color_BANG_.cljs$core$IFn$_invoke$arity$1(G__66763) : set_draw_layer_color_BANG_.call(null,G__66763));
} else {
return null;
}
}),new cljs.core.Keyword(null,"change","change",-1163046502),(function (_){
if(cljs.core.truth_(save_draw_layers_config_BANG_)){
return (save_draw_layers_config_BANG_.cljs$core$IFn$_invoke$arity$0 ? save_draw_layers_config_BANG_.cljs$core$IFn$_invoke$arity$0() : save_draw_layers_config_BANG_.call(null));
} else {
return null;
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.draw-color-value","span.draw-color-value",822029110),val], null)], null);
});
placesurfer.app_ui.ui.draw_layers_panel.panel = (function placesurfer$app_ui$ui$draw_layers_panel$panel(p__66766){
var map__66767 = p__66766;
var map__66767__$1 = cljs.core.__destructure_map(map__66767);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66767__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var draw_layer_draft_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66767__$1,new cljs.core.Keyword(null,"draw-layer-draft-label","draw-layer-draft-label",1594615451));
var update_topic_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66767__$1,new cljs.core.Keyword(null,"update-topic-options","update-topic-options",702207581));
var delete_draw_layer_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66767__$1,new cljs.core.Keyword(null,"delete-draw-layer!","delete-draw-layer!",1478497155));
var save_draw_layers_config_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66767__$1,new cljs.core.Keyword(null,"save-draw-layers-config!","save-draw-layers-config!",-277919771));
var backend_online_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66767__$1,new cljs.core.Keyword(null,"backend-online?","backend-online?",-200708729));
var add_draw_layer_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66767__$1,new cljs.core.Keyword(null,"add-draw-layer!","add-draw-layer!",834233035));
var draw_layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66767__$1,new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771));
var select_draw_layer_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66767__$1,new cljs.core.Keyword(null,"select-draw-layer!","select-draw-layer!",1434495314));
var navigate_to_update_tab_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66767__$1,new cljs.core.Keyword(null,"navigate-to-update-tab!","navigate-to-update-tab!",643684179));
var draw_selected_layer_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66767__$1,new cljs.core.Keyword(null,"draw-selected-layer-id","draw-selected-layer-id",-1205706411));
var set_draw_layer_draft_label_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66767__$1,new cljs.core.Keyword(null,"set-draw-layer-draft-label!","set-draw-layer-draft-label!",-1660996489));
var set_draw_layer_color_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66767__$1,new cljs.core.Keyword(null,"set-draw-layer-color!","set-draw-layer-color!",838384664));
var topic_opt = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66764_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("pins",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__66764_SHARP_));
}),(function (){var or__5025__auto__ = update_topic_options;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
var selected_layer = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66765_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__66765_SHARP_),draw_selected_layer_id);
}),draw_layers));
var color = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(selected_layer);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"r","r",-471384190),(255),new cljs.core.Keyword(null,"g","g",1738089905),(69),new cljs.core.Keyword(null,"b","b",1482224470),(0),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(0),new cljs.core.Keyword(null,"opacity","opacity",397153780),(35)], null);
}
})();
var slider_props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"set-draw-layer-color!","set-draw-layer-color!",838384664),set_draw_layer_color_BANG_,new cljs.core.Keyword(null,"save-draw-layers-config!","save-draw-layers-config!",-277919771),save_draw_layers_config_BANG_], null);
var wheel_size = (160);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.draw-layers-panel","aside.draw-layers-panel",793677151),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-panel-tab-bar","div.update-panel-tab-bar",1107520136),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-panel-tab.update-panel-tab--active","button.update-panel-tab.update-panel-tab--active",2076728555),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Lager"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-panel-tab-icon.update-panel-tab-icon--small","img.update-panel-tab-icon.update-panel-tab-icon--small",23601503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/layers.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Lager"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-panel-tab","button.update-panel-tab",-1255725585),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("topic","pins","topic/pins",1613571862)) : t.call(null,new cljs.core.Keyword("topic","pins","topic/pins",1613571862))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(navigate_to_update_tab_BANG_)){
return (navigate_to_update_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_to_update_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pins","pins",1725193285)) : navigate_to_update_tab_BANG_.call(null,new cljs.core.Keyword(null,"pins","pins",1725193285)));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-panel-tab-icon","img.update-panel-tab-icon",55759235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/pin.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-panel-tab","button.update-panel-tab",-1255725585),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","groups-alt","nav/groups-alt",645359531)) : t.call(null,new cljs.core.Keyword("nav","groups-alt","nav/groups-alt",645359531))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(navigate_to_update_tab_BANG_)){
return (navigate_to_update_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_to_update_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"groups","groups",-136896102)) : navigate_to_update_tab_BANG_.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102)));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-panel-tab-icon.update-panel-tab-icon--small","img.update-panel-tab-icon.update-panel-tab-icon--small",23601503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/groups.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),(cljs.core.truth_((function (){var and__5023__auto__ = backend_online_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return topic_opt;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-panel-tab","button.update-panel-tab",-1255725585),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$2(topic_opt,""),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
if(cljs.core.truth_(navigate_to_update_tab_BANG_)){
return (navigate_to_update_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? navigate_to_update_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"topic","topic",-1960480691)) : navigate_to_update_tab_BANG_.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691)));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.update-panel-tab-icon.update-panel-tab-icon--small","img.update-panel-tab-icon.update-panel-tab-icon--small",23601503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"marker-url","marker-url",153262178).cljs$core$IFn$_invoke$arity$1(topic_opt),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$2(topic_opt,"")], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-table-wrap","div.update-table-wrap",1469984077),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-layer-list","div.draw-layer-list",1018325577),((cljs.core.seq(draw_layers))?(function (){var iter__5503__auto__ = (function placesurfer$app_ui$ui$draw_layers_panel$panel_$_iter__66768(s__66769){
return (new cljs.core.LazySeq(null,(function (){
var s__66769__$1 = s__66769;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__66769__$1);
if(temp__5825__auto__){
var s__66769__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66769__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__66769__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__66771 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__66770 = (0);
while(true){
if((i__66770 < size__5502__auto__)){
var map__66772 = cljs.core._nth(c__5501__auto__,i__66770);
var map__66772__$1 = cljs.core.__destructure_map(map__66772);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66772__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66772__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__66771,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-layer-row.update-row","div.draw-layer-row.update-row",147832531),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,draw_selected_layer_id))?"update-row--selected":null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__66770,map__66772,map__66772__$1,id,label,c__5501__auto__,size__5502__auto__,b__66771,s__66769__$2,temp__5825__auto__,topic_opt,selected_layer,color,slider_props,wheel_size,map__66767,map__66767__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,save_draw_layers_config_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_,set_draw_layer_color_BANG_){
return (function (_){
if(cljs.core.truth_(select_draw_layer_BANG_)){
return (select_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1(id) : select_draw_layer_BANG_.call(null,id));
} else {
return null;
}
});})(i__66770,map__66772,map__66772__$1,id,label,c__5501__auto__,size__5502__auto__,b__66771,s__66769__$2,temp__5825__auto__,topic_opt,selected_layer,color,slider_props,wheel_size,map__66767,map__66767__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,save_draw_layers_config_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_,set_draw_layer_color_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.draw-layer-label","span.draw-layer-label",1299617197),label], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,draw_selected_layer_id))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.draw-layer-delete-btn","button.draw-layer-delete-btn",-1150905939),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Ta bort",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (i__66770,map__66772,map__66772__$1,id,label,c__5501__auto__,size__5502__auto__,b__66771,s__66769__$2,temp__5825__auto__,topic_opt,selected_layer,color,slider_props,wheel_size,map__66767,map__66767__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,save_draw_layers_config_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_,set_draw_layer_color_BANG_){
return (function (e){
e.stopPropagation();

if(cljs.core.truth_(delete_draw_layer_BANG_)){
return (delete_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1 ? delete_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1(id) : delete_draw_layer_BANG_.call(null,id));
} else {
return null;
}
});})(i__66770,map__66772,map__66772__$1,id,label,c__5501__auto__,size__5502__auto__,b__66771,s__66769__$2,temp__5825__auto__,topic_opt,selected_layer,color,slider_props,wheel_size,map__66767,map__66767__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,save_draw_layers_config_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_,set_draw_layer_color_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/trash.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Ta bort"], null)], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__66803 = (i__66770 + (1));
i__66770 = G__66803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66771),placesurfer$app_ui$ui$draw_layers_panel$panel_$_iter__66768(cljs.core.chunk_rest(s__66769__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66771),null);
}
} else {
var map__66773 = cljs.core.first(s__66769__$2);
var map__66773__$1 = cljs.core.__destructure_map(map__66773);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66773__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66773__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-layer-row.update-row","div.draw-layer-row.update-row",147832531),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,draw_selected_layer_id))?"update-row--selected":null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__66773,map__66773__$1,id,label,s__66769__$2,temp__5825__auto__,topic_opt,selected_layer,color,slider_props,wheel_size,map__66767,map__66767__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,save_draw_layers_config_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_,set_draw_layer_color_BANG_){
return (function (_){
if(cljs.core.truth_(select_draw_layer_BANG_)){
return (select_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1(id) : select_draw_layer_BANG_.call(null,id));
} else {
return null;
}
});})(map__66773,map__66773__$1,id,label,s__66769__$2,temp__5825__auto__,topic_opt,selected_layer,color,slider_props,wheel_size,map__66767,map__66767__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,save_draw_layers_config_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_,set_draw_layer_color_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.draw-layer-label","span.draw-layer-label",1299617197),label], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,draw_selected_layer_id))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.draw-layer-delete-btn","button.draw-layer-delete-btn",-1150905939),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Ta bort",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__66773,map__66773__$1,id,label,s__66769__$2,temp__5825__auto__,topic_opt,selected_layer,color,slider_props,wheel_size,map__66767,map__66767__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,save_draw_layers_config_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_,set_draw_layer_color_BANG_){
return (function (e){
e.stopPropagation();

if(cljs.core.truth_(delete_draw_layer_BANG_)){
return (delete_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1 ? delete_draw_layer_BANG_.cljs$core$IFn$_invoke$arity$1(id) : delete_draw_layer_BANG_.call(null,id));
} else {
return null;
}
});})(map__66773,map__66773__$1,id,label,s__66769__$2,temp__5825__auto__,topic_opt,selected_layer,color,slider_props,wheel_size,map__66767,map__66767__$1,t,draw_layer_draft_label,update_topic_options,delete_draw_layer_BANG_,save_draw_layers_config_BANG_,backend_online_QMARK_,add_draw_layer_BANG_,draw_layers,select_draw_layer_BANG_,navigate_to_update_tab_BANG_,draw_selected_layer_id,set_draw_layer_draft_label_BANG_,set_draw_layer_color_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/trash.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Ta bort"], null)], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),placesurfer$app_ui$ui$draw_layers_panel$panel_$_iter__66768(cljs.core.rest(s__66769__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(draw_layers);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.draw-layer-empty","p.draw-layer-empty",393303893),"Inga lager"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-layer-draft-row","div.draw-layer-draft-row",644996259),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.group-draft-input","input.group-draft-input",-1945888121),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5025__auto__ = draw_layer_draft_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
if(cljs.core.truth_(set_draw_layer_draft_label_BANG_)){
var G__66774 = e.target.value;
return (set_draw_layer_draft_label_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_draw_layer_draft_label_BANG_.cljs$core$IFn$_invoke$arity$1(G__66774) : set_draw_layer_draft_label_BANG_.call(null,G__66774));
} else {
return null;
}
}),new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (e){
if(placesurfer.app_ui.ui.draw_layers_panel.enter_key_QMARK_(e)){
e.preventDefault();

return placesurfer.app_ui.ui.draw_layers_panel.submit_BANG_(draw_layer_draft_label,add_draw_layer_BANG_);
} else {
return null;
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.group-draft-submit-btn","button.group-draft-submit-btn",1172080393),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(cljs.core.seq(clojure.string.trim((function (){var or__5025__auto__ = draw_layer_draft_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (_){
return placesurfer.app_ui.ui.draw_layers_panel.submit_BANG_(draw_layer_draft_label,add_draw_layer_BANG_);
})], null)], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pin","new","pin/new",-2085523213)) : t.call(null,new cljs.core.Keyword("pin","new","pin/new",-2085523213)))], null)], null),(cljs.core.truth_(selected_layer)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-color-picker","div.draw-color-picker",686278876),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-wheel-outer","div.draw-wheel-outer",-1721157799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel_size),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel_size),"px"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas.draw-color-wheel-canvas","canvas.draw-color-wheel-canvas",-688923778),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),wheel_size,new cljs.core.Keyword(null,"height","height",1025178622),wheel_size,new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),(function (p__66775){
var map__66776 = p__66775;
var map__66776__$1 = cljs.core.__destructure_map(map__66776);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66776__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
var node__$1 = node;
placesurfer.app_ui.ui.draw_layers_panel.draw_wheel_BANG_(node__$1);

(node__$1.placesurferWheelColor = cljs.core.clj__GT_js(color));

var cleanup = placesurfer.app_ui.ui.draw_layers_panel.setup_drag_BANG_(node__$1,set_draw_layer_color_BANG_,save_draw_layers_config_BANG_);
return (node__$1.placesurferWheelCleanup = cleanup);
}),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),(function (p__66777){
var map__66778 = p__66777;
var map__66778__$1 = cljs.core.__destructure_map(map__66778);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66778__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
var node__$1 = node;
return (node__$1.placesurferWheelColor = cljs.core.clj__GT_js(color));
}),new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753),(function (p__66779){
var map__66780 = p__66779;
var map__66780__$1 = cljs.core.__destructure_map(map__66780);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66780__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
var node__$1 = node;
var temp__5825__auto__ = node__$1.placesurferWheelCleanup;
if(cljs.core.truth_(temp__5825__auto__)){
var cleanup = temp__5825__auto__;
return (cleanup.cljs$core$IFn$_invoke$arity$0 ? cleanup.cljs$core$IFn$_invoke$arity$0() : cleanup.call(null));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-wheel-indicator","div.draw-wheel-indicator",-1034309554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),placesurfer.app_ui.ui.draw_layers_panel.indicator_style(color,wheel_size)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-color-preview-circle","div.draw-color-preview-circle",487021965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),placesurfer.app_ui.ui.draw_layers_panel.color__GT_preview_css(color)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw-color-sliders","div.draw-color-sliders",-1534124851),placesurfer.app_ui.ui.draw_layers_panel.color_slider(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([slider_props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Ljushet",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"min-val","min-val",-243137826),(0),new cljs.core.Keyword(null,"max-val","max-val",-1492247884),(100)], null)], 0))),placesurfer.app_ui.ui.draw_layers_panel.color_slider(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([slider_props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Genomskinlighet",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"min-val","min-val",-243137826),(0),new cljs.core.Keyword(null,"max-val","max-val",-1492247884),(100)], null)], 0)))], null)], null):null)], null)], null);
});

//# sourceMappingURL=placesurfer.app_ui.ui.draw_layers_panel.js.map
