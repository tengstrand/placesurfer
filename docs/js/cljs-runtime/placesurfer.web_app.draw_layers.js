goog.provide('placesurfer.web_app.draw_layers');
placesurfer.web_app.draw_layers.image_layer_QMARK_ = (function placesurfer$web_app$draw_layers$image_layer_QMARK_(layer){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("image",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(layer));
});
placesurfer.web_app.draw_layers.save_config_BANG_ = (function placesurfer$web_app$draw_layers$save_config_BANG_(){
var layers = new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state));
return fetch("/api/backend/save-layers-config",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layers","layers",1944875032),layers], null)))], null))).catch((function (err){
return console.error("Kunde inte spara lager-config",err);
}));
});
/**
 * Push image layers from state to the map and unlock the selected one.
 */
placesurfer.web_app.draw_layers.sync_reference_images_BANG_ = (function placesurfer$web_app$draw_layers$sync_reference_images_BANG_(){
var s = cljs.core.deref(placesurfer.web_app.state._BANG_state);
var images = cljs.core.filterv(placesurfer.web_app.draw_layers.image_layer_QMARK_,new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771).cljs$core$IFn$_invoke$arity$1(s));
var sel = new cljs.core.Keyword(null,"draw-selected-layer-id","draw-selected-layer-id",-1205706411).cljs$core$IFn$_invoke$arity$1(s);
placesurfer.map_ui.interface$.set_reference_images_BANG_(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__26295){
var map__26296 = p__26295;
var map__26296__$1 = cljs.core.__destructure_map(map__26296);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26296__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var image_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26296__$1,new cljs.core.Keyword(null,"image-url","image-url",-1064784064));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26296__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26296__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"image-url","image-url",-1064784064),image_url,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity], null);
}),images));

return placesurfer.map_ui.interface$.set_reference_image_adjust_BANG_((cljs.core.truth_(cljs.core.some((function (p1__26294_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26294_SHARP_),sel);
}),images))?sel:null));
});
/**
 * Load the selected layer when navigating to the layers page. For an image
 * layer the draw canvas is just cleared/activated; the image itself is shown
 * via sync-reference-images!.
 */
placesurfer.web_app.draw_layers.enter_draw_page_BANG_ = (function placesurfer$web_app$draw_layers$enter_draw_page_BANG_(){
var map__26298 = cljs.core.deref(placesurfer.web_app.state._BANG_state);
var map__26298__$1 = cljs.core.__destructure_map(map__26298);
var draw_layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26298__$1,new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771));
var draw_selected_layer_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26298__$1,new cljs.core.Keyword(null,"draw-selected-layer-id","draw-selected-layer-id",-1205706411));
var selected = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26297_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26297_SHARP_),draw_selected_layer_id);
}),draw_layers));
if(cljs.core.truth_((function (){var and__5023__auto__ = selected;
if(cljs.core.truth_(and__5023__auto__)){
return (!(placesurfer.web_app.draw_layers.image_layer_QMARK_(selected)));
} else {
return and__5023__auto__;
}
})())){
placesurfer.map_ui.interface$.set_draw_canvas_color_BANG_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(selected);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.app_ui.interface$.default_layer_color;
}
})());

placesurfer.map_ui.interface$.load_draw_layer_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected));
} else {
placesurfer.map_ui.interface$.load_draw_layer_BANG_("");
}

return placesurfer.web_app.draw_layers.sync_reference_images_BANG_();
});
placesurfer.web_app.draw_layers.select_layer_BANG_ = (function placesurfer$web_app$draw_layers$select_layer_BANG_(layer_id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"draw-selected-layer-id","draw-selected-layer-id",-1205706411),layer_id);

var layer = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26299_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26299_SHARP_),layer_id);
}),new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state))));
if(placesurfer.web_app.draw_layers.image_layer_QMARK_(layer)){
} else {
placesurfer.map_ui.interface$.set_draw_canvas_color_BANG_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(layer);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return placesurfer.app_ui.interface$.default_layer_color;
}
})());

placesurfer.map_ui.interface$.load_draw_layer_BANG_(layer_id);
}

placesurfer.web_app.draw_layers.sync_reference_images_BANG_();

return placesurfer.app_ui.interface$.effects.render_BANG_();
});
/**
 * Add a pasted reference image as a layer, select it and persist the config.
 */
placesurfer.web_app.draw_layers.add_image_layer_BANG_ = (function placesurfer$web_app$draw_layers$add_image_layer_BANG_(p__26300){
var map__26301 = p__26300;
var map__26301__$1 = cljs.core.__destructure_map(map__26301);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26301__$1,new cljs.core.Keyword(null,"url","url",276297046));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26301__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var layers = new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state));
var n = (cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.draw_layers.image_layer_QMARK_,layers)) + (1));
var id = ["bild-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now())].join('');
var layer = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),"image",new cljs.core.Keyword(null,"label","label",1718410804),["Bild ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"image-url","image-url",-1064784064),url,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"opacity","opacity",397153780),(50)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.state._BANG_state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),layer),new cljs.core.Keyword(null,"draw-selected-layer-id","draw-selected-layer-id",-1205706411),id);
}));

placesurfer.web_app.draw_layers.sync_reference_images_BANG_();

placesurfer.web_app.draw_layers.save_config_BANG_();

return placesurfer.app_ui.interface$.effects.render_BANG_();
});
/**
 * Persist new bounds after the user moved or scaled a reference image.
 */
placesurfer.web_app.draw_layers.image_bounds_changed_BANG_ = (function placesurfer$web_app$draw_layers$image_bounds_changed_BANG_(id,bounds){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.update,new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771),(function (layers){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26302_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26302_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26302_SHARP_,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds);
} else {
return p1__26302_SHARP_;
}
}),layers);
}));

return placesurfer.web_app.draw_layers.save_config_BANG_();
});
/**
 * Live-update opacity for the selected image layer (persist via save-config!).
 */
placesurfer.web_app.draw_layers.set_image_opacity_BANG_ = (function placesurfer$web_app$draw_layers$set_image_opacity_BANG_(opacity){
var id = new cljs.core.Keyword(null,"draw-selected-layer-id","draw-selected-layer-id",-1205706411).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(placesurfer.web_app.state._BANG_state));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.web_app.state._BANG_state,cljs.core.update,new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771),(function (layers){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26303_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26303_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26303_SHARP_,new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity);
} else {
return p1__26303_SHARP_;
}
}),layers);
}));

placesurfer.map_ui.interface$.set_reference_image_opacity_BANG_(id,opacity);

return placesurfer.app_ui.interface$.effects.render_BANG_();
});
placesurfer.web_app.draw_layers.delete_layer_BANG_ = (function placesurfer$web_app$draw_layers$delete_layer_BANG_(layer_id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(placesurfer.web_app.state._BANG_state,(function (s){
var remaining = cljs.core.filterv((function (p1__26306_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26306_SHARP_),layer_id);
}),new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771).cljs$core$IFn$_invoke$arity$1(s));
var new_sel = ((cljs.core.seq(remaining))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(remaining)):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771),remaining),new cljs.core.Keyword(null,"draw-selected-layer-id","draw-selected-layer-id",-1205706411),new_sel);
}));

var map__26308 = cljs.core.deref(placesurfer.web_app.state._BANG_state);
var map__26308__$1 = cljs.core.__destructure_map(map__26308);
var draw_layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26308__$1,new cljs.core.Keyword(null,"draw-layers","draw-layers",-897746771));
var draw_selected_layer_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26308__$1,new cljs.core.Keyword(null,"draw-selected-layer-id","draw-selected-layer-id",-1205706411));
var selected = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26307_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26307_SHARP_),draw_selected_layer_id);
}),draw_layers));
if(cljs.core.truth_((function (){var and__5023__auto__ = selected;
if(cljs.core.truth_(and__5023__auto__)){
return (!(placesurfer.web_app.draw_layers.image_layer_QMARK_(selected)));
} else {
return and__5023__auto__;
}
})())){
placesurfer.map_ui.interface$.load_draw_layer_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected));
} else {
placesurfer.map_ui.interface$.load_draw_layer_BANG_("");
}

placesurfer.web_app.draw_layers.sync_reference_images_BANG_();

placesurfer.web_app.draw_layers.save_config_BANG_();

return placesurfer.app_ui.interface$.effects.render_BANG_();
});

//# sourceMappingURL=placesurfer.web_app.draw_layers.js.map
