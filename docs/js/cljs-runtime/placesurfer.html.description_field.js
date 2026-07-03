goog.provide('placesurfer.html.description_field');
if((typeof placesurfer !== 'undefined') && (typeof placesurfer.html !== 'undefined') && (typeof placesurfer.html.description_field !== 'undefined') && (typeof placesurfer.html.description_field._BANG_synced_tokens !== 'undefined')){
} else {
placesurfer.html.description_field._BANG_synced_tokens = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
placesurfer.html.description_field.listener_data_prop = "__placesurferDescriptionListeners";
placesurfer.html.description_field.set_description_prop = "__placesurferSetDescription";
placesurfer.html.description_field.refresh_set_description_BANG_ = (function placesurfer$html$description_field$refresh_set_description_BANG_(node,set_description_BANG_){
if(cljs.core.truth_(node)){
return (node[placesurfer.html.description_field.set_description_prop] = set_description_BANG_);
} else {
return null;
}
});
placesurfer.html.description_field.current_set_description_BANG_ = (function placesurfer$html$description_field$current_set_description_BANG_(node){
if(cljs.core.truth_(node)){
return (node[placesurfer.html.description_field.set_description_prop]);
} else {
return null;
}
});
placesurfer.html.description_field.editor_root_node = (function placesurfer$html$description_field$editor_root_node(field_id){
return document.getElementById(field_id);
});
placesurfer.html.description_field.coerce_text = (function placesurfer$html$description_field$coerce_text(v){
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
placesurfer.html.description_field.html_mode_QMARK_ = (function placesurfer$html$description_field$html_mode_QMARK_(mode){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"html","html",-998796897));
});
placesurfer.html.description_field.display_html = (function placesurfer$html$description_field$display_html(canonical){
return placesurfer.html.description.description_for_text_display(placesurfer.html.description_field.coerce_text(canonical));
});
/**
 * True when browser focus is on the contenteditable root or a descendant.
 */
placesurfer.html.description_field.editor_contains_focus_QMARK_ = (function placesurfer$html$description_field$editor_contains_focus_QMARK_(node){
if(cljs.core.truth_(node)){
var active = document.activeElement;
var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active,node);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = active;
if(cljs.core.truth_(and__5023__auto__)){
return node.contains(active);
} else {
return and__5023__auto__;
}
}
} else {
return null;
}
});
placesurfer.html.description_field.sync_rich_editor_BANG_ = (function placesurfer$html$description_field$sync_rich_editor_BANG_(node,field_id,description,sync_token,trace_description_BANG_){
if(cljs.core.truth_((function (){var and__5023__auto__ = node;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(placesurfer.html.description_field.editor_contains_focus_QMARK_(node));
} else {
return and__5023__auto__;
}
})())){
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(placesurfer.html.description_field._BANG_synced_tokens),field_id);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,sync_token)){
if(cljs.core.truth_(trace_description_BANG_)){
(trace_description_BANG_.cljs$core$IFn$_invoke$arity$2 ? trace_description_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sync-rich-reset","sync-rich-reset",606619236),null) : trace_description_BANG_.call(null,new cljs.core.Keyword(null,"sync-rich-reset","sync-rich-reset",606619236),null));
} else {
}

(node.innerHTML = placesurfer.html.description_field.display_html(description));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(placesurfer.html.description_field._BANG_synced_tokens,cljs.core.assoc,field_id,sync_token);
} else {
return null;
}
} else {
return null;
}
});
placesurfer.html.description_field.apply_display_to_node_BANG_ = (function placesurfer$html$description_field$apply_display_to_node_BANG_(node,canonical){
if(cljs.core.truth_(node)){
return (node.innerHTML = placesurfer.html.description_field.display_html(canonical));
} else {
return null;
}
});
placesurfer.html.description_field.sync_from_node_BANG_ = (function placesurfer$html$description_field$sync_from_node_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39018 = arguments.length;
var i__5750__auto___39019 = (0);
while(true){
if((i__5750__auto___39019 < len__5749__auto___39018)){
args__5755__auto__.push((arguments[i__5750__auto___39019]));

var G__39020 = (i__5750__auto___39019 + (1));
i__5750__auto___39019 = G__39020;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return placesurfer.html.description_field.sync_from_node_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(placesurfer.html.description_field.sync_from_node_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (node,set_description_BANG_,p__38905){
var map__38906 = p__38905;
var map__38906__$1 = cljs.core.__destructure_map(map__38906);
var refresh_display_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38906__$1,new cljs.core.Keyword(null,"refresh-display?","refresh-display?",-529396002),false);
if(cljs.core.truth_(node)){
var canonical = placesurfer.html.description.description_from_text_editor(node.innerHTML);
(set_description_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_description_BANG_.cljs$core$IFn$_invoke$arity$1(canonical) : set_description_BANG_.call(null,canonical));

if(cljs.core.truth_(refresh_display_QMARK_)){
return placesurfer.html.description_field.apply_display_to_node_BANG_(node,canonical);
} else {
return null;
}
} else {
return null;
}
}));

(placesurfer.html.description_field.sync_from_node_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(placesurfer.html.description_field.sync_from_node_BANG_.cljs$lang$applyTo = (function (seq38902){
var G__38903 = cljs.core.first(seq38902);
var seq38902__$1 = cljs.core.next(seq38902);
var G__38904 = cljs.core.first(seq38902__$1);
var seq38902__$2 = cljs.core.next(seq38902__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38903,G__38904,seq38902__$2);
}));

placesurfer.html.description_field.insert_plain_text_BANG_ = (function placesurfer$html$description_field$insert_plain_text_BANG_(node,text){
if(cljs.core.truth_((function (){var and__5023__auto__ = node;
if(cljs.core.truth_(and__5023__auto__)){
return (!(clojure.string.blank_QMARK_(text)));
} else {
return and__5023__auto__;
}
})())){
if(cljs.core.truth_((function (){var and__5023__auto__ = document;
if(cljs.core.truth_(and__5023__auto__)){
return document.queryCommandSupported("insertText");
} else {
return and__5023__auto__;
}
})())){
return document.execCommand("insertText",false,text);
} else {
return (node.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node.textContent),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''));
}
} else {
return null;
}
});
placesurfer.html.description_field.paste_input_BANG_ = (function placesurfer$html$description_field$paste_input_BANG_(root,set_description_BANG_,e){
e.preventDefault();

var target = e.target;
var text = e.clipboardData.getData("text/plain");
placesurfer.html.description_field.insert_plain_text_BANG_(target,text);

return placesurfer.html.description_field.sync_from_node_BANG_.cljs$core$IFn$_invoke$arity$variadic(root,set_description_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"refresh-display?","refresh-display?",-529396002),true], 0));
});
placesurfer.html.description_field.blur_sync_BANG_ = (function placesurfer$html$description_field$blur_sync_BANG_(node,set_description_BANG_){
if(cljs.core.truth_(node)){
return placesurfer.html.description_field.sync_from_node_BANG_.cljs$core$IFn$_invoke$arity$variadic(node,set_description_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"refresh-display?","refresh-display?",-529396002),true], 0));
} else {
return null;
}
});
placesurfer.html.description_field.focusout_sync_BANG_ = (function placesurfer$html$description_field$focusout_sync_BANG_(root,set_description_BANG_,e){
if(cljs.core.truth_(root)){
var related = e.relatedTarget;
if(cljs.core.truth_((function (){var and__5023__auto__ = related;
if(cljs.core.truth_(and__5023__auto__)){
return root.contains(related);
} else {
return and__5023__auto__;
}
})())){
return null;
} else {
return placesurfer.html.description_field.blur_sync_BANG_(root,set_description_BANG_);
}
} else {
return null;
}
});
placesurfer.html.description_field.sync_root_BANG_ = (function placesurfer$html$description_field$sync_root_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39021 = arguments.length;
var i__5750__auto___39022 = (0);
while(true){
if((i__5750__auto___39022 < len__5749__auto___39021)){
args__5755__auto__.push((arguments[i__5750__auto___39022]));

var G__39023 = (i__5750__auto___39022 + (1));
i__5750__auto___39022 = G__39023;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return placesurfer.html.description_field.sync_root_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(placesurfer.html.description_field.sync_root_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (field_id,set_description_BANG_,p__38919){
var map__38920 = p__38919;
var map__38920__$1 = cljs.core.__destructure_map(map__38920);
var refresh_display_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38920__$1,new cljs.core.Keyword(null,"refresh-display?","refresh-display?",-529396002),false);
var temp__5825__auto__ = placesurfer.html.description_field.editor_root_node(field_id);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return placesurfer.html.description_field.sync_from_node_BANG_.cljs$core$IFn$_invoke$arity$variadic(node,set_description_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"refresh-display?","refresh-display?",-529396002),refresh_display_QMARK_], 0));
} else {
return null;
}
}));

(placesurfer.html.description_field.sync_root_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(placesurfer.html.description_field.sync_root_BANG_.cljs$lang$applyTo = (function (seq38914){
var G__38915 = cljs.core.first(seq38914);
var seq38914__$1 = cljs.core.next(seq38914);
var G__38916 = cljs.core.first(seq38914__$1);
var seq38914__$2 = cljs.core.next(seq38914__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38915,G__38916,seq38914__$2);
}));

/**
 * Read canonical description from a textarea or contenteditable editor node.
 */
placesurfer.html.description_field.read_editor_canonical = (function placesurfer$html$description_field$read_editor_canonical(node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.tagName,"TEXTAREA")){
return placesurfer.html.description.plain_text__GT_description(placesurfer.html.description.strip_place_external_links_suffix(node.value));
} else {
return placesurfer.html.description.description_from_text_editor(node.innerHTML);
}
});
/**
 * Sync description from a DOM editor node into app state via set-description!.
 */
placesurfer.html.description_field.flush_editor_BANG_ = (function placesurfer$html$description_field$flush_editor_BANG_(field_id,set_description_BANG_){
var temp__5825__auto__ = document.getElementById(field_id);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
var G__38933 = placesurfer.html.description_field.read_editor_canonical(node);
return (set_description_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_description_BANG_.cljs$core$IFn$_invoke$arity$1(G__38933) : set_description_BANG_.call(null,G__38933));
} else {
return null;
}
});
placesurfer.html.description_field.unmount_rich_editor_listeners_BANG_ = (function placesurfer$html$description_field$unmount_rich_editor_listeners_BANG_(node){
var temp__5825__auto__ = (node[placesurfer.html.description_field.listener_data_prop]);
if(cljs.core.truth_(temp__5825__auto__)){
var handlers = temp__5825__auto__;
node.removeEventListener("input",(handlers["input"]),true);

node.removeEventListener("focusout",(handlers["focusout"]));

node.removeEventListener("compositionend",(handlers["compositionend"]));

node.removeEventListener("paste",(handlers["paste"]));

return delete node[placesurfer.html.description_field.listener_data_prop];
} else {
return null;
}
});
placesurfer.html.description_field.mount_rich_editor_listeners_BANG_ = (function placesurfer$html$description_field$mount_rich_editor_listeners_BANG_(node,field_id,set_description_BANG_,flush_description_BANG_,trace_description_BANG_){
placesurfer.html.description_field.refresh_set_description_BANG_(node,set_description_BANG_);

if(cljs.core.truth_((node[placesurfer.html.description_field.listener_data_prop]))){
return null;
} else {
var dom_sync_BANG_ = (function() { 
var G__39025__delegate = function (event,p__38947){
var map__38948 = p__38947;
var map__38948__$1 = cljs.core.__destructure_map(map__38948);
var refresh_display_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38948__$1,new cljs.core.Keyword(null,"refresh-display?","refresh-display?",-529396002),false);
if(cljs.core.truth_(trace_description_BANG_)){
(trace_description_BANG_.cljs$core$IFn$_invoke$arity$2 ? trace_description_BANG_.cljs$core$IFn$_invoke$arity$2(event,null) : trace_description_BANG_.call(null,event,null));
} else {
}

if(cljs.core.truth_(flush_description_BANG_)){
return (flush_description_BANG_.cljs$core$IFn$_invoke$arity$0 ? flush_description_BANG_.cljs$core$IFn$_invoke$arity$0() : flush_description_BANG_.call(null));
} else {
var temp__5825__auto__ = placesurfer.html.description_field.editor_root_node(field_id);
if(cljs.core.truth_(temp__5825__auto__)){
var root = temp__5825__auto__;
return placesurfer.html.description_field.sync_from_node_BANG_.cljs$core$IFn$_invoke$arity$variadic(root,set_description_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"refresh-display?","refresh-display?",-529396002),refresh_display_QMARK_], 0));
} else {
return null;
}
}
};
var G__39025 = function (event,var_args){
var p__38947 = null;
if (arguments.length > 1) {
var G__39027__i = 0, G__39027__a = new Array(arguments.length -  1);
while (G__39027__i < G__39027__a.length) {G__39027__a[G__39027__i] = arguments[G__39027__i + 1]; ++G__39027__i;}
  p__38947 = new cljs.core.IndexedSeq(G__39027__a,0,null);
} 
return G__39025__delegate.call(this,event,p__38947);};
G__39025.cljs$lang$maxFixedArity = 1;
G__39025.cljs$lang$applyTo = (function (arglist__39028){
var event = cljs.core.first(arglist__39028);
var p__38947 = cljs.core.rest(arglist__39028);
return G__39025__delegate(event,p__38947);
});
G__39025.cljs$core$IFn$_invoke$arity$variadic = G__39025__delegate;
return G__39025;
})()
;
var input_handler = (function (_){
return dom_sync_BANG_(new cljs.core.Keyword(null,"native-input","native-input",-1120919580));
});
var focusout_handler = (function (e){
var temp__5825__auto__ = placesurfer.html.description_field.editor_root_node(field_id);
if(cljs.core.truth_(temp__5825__auto__)){
var root = temp__5825__auto__;
var temp__5825__auto____$1 = placesurfer.html.description_field.current_set_description_BANG_(root);
if(cljs.core.truth_(temp__5825__auto____$1)){
var set_description_BANG__STAR_ = temp__5825__auto____$1;
if(cljs.core.truth_(trace_description_BANG_)){
(trace_description_BANG_.cljs$core$IFn$_invoke$arity$2 ? trace_description_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"focusout","focusout",-1980488769),null) : trace_description_BANG_.call(null,new cljs.core.Keyword(null,"focusout","focusout",-1980488769),null));
} else {
}

if(cljs.core.truth_(flush_description_BANG_)){
return (flush_description_BANG_.cljs$core$IFn$_invoke$arity$0 ? flush_description_BANG_.cljs$core$IFn$_invoke$arity$0() : flush_description_BANG_.call(null));
} else {
return placesurfer.html.description_field.focusout_sync_BANG_(root,set_description_BANG__STAR_,e);
}
} else {
return null;
}
} else {
return null;
}
});
var composition_handler = (function (_){
return dom_sync_BANG_(new cljs.core.Keyword(null,"compositionend","compositionend",14117791));
});
var paste_handler = (function (e){
var temp__5825__auto__ = placesurfer.html.description_field.editor_root_node(field_id);
if(cljs.core.truth_(temp__5825__auto__)){
var root = temp__5825__auto__;
var temp__5825__auto____$1 = placesurfer.html.description_field.current_set_description_BANG_(root);
if(cljs.core.truth_(temp__5825__auto____$1)){
var set_description_BANG__STAR_ = temp__5825__auto____$1;
if(cljs.core.truth_(trace_description_BANG_)){
(trace_description_BANG_.cljs$core$IFn$_invoke$arity$2 ? trace_description_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paste","paste",1975741548),null) : trace_description_BANG_.call(null,new cljs.core.Keyword(null,"paste","paste",1975741548),null));
} else {
}

placesurfer.html.description_field.paste_input_BANG_(root,set_description_BANG__STAR_,e);

if(cljs.core.truth_(flush_description_BANG_)){
return (flush_description_BANG_.cljs$core$IFn$_invoke$arity$0 ? flush_description_BANG_.cljs$core$IFn$_invoke$arity$0() : flush_description_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
node.addEventListener("input",input_handler,true);

node.addEventListener("focusout",focusout_handler);

node.addEventListener("compositionend",composition_handler);

node.addEventListener("paste",paste_handler);

return (node[placesurfer.html.description_field.listener_data_prop] = ({"input": input_handler, "focusout": focusout_handler, "compositionend": composition_handler, "paste": paste_handler}));
}
});
placesurfer.html.description_field.rich_editor_dom_handlers = (function placesurfer$html$description_field$rich_editor_dom_handlers(field_id,set_description_BANG_,flush_description_BANG_,trace_description_BANG_){
if(cljs.core.truth_(flush_description_BANG_)){
return null;
} else {
var dom_sync_BANG_ = (function (event){
if(cljs.core.truth_(trace_description_BANG_)){
(trace_description_BANG_.cljs$core$IFn$_invoke$arity$2 ? trace_description_BANG_.cljs$core$IFn$_invoke$arity$2(event,null) : trace_description_BANG_.call(null,event,null));
} else {
}

return placesurfer.html.description_field.sync_root_BANG_(field_id,set_description_BANG_);
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (_){
return dom_sync_BANG_(new cljs.core.Keyword(null,"replicant-input","replicant-input",850820067));
}),new cljs.core.Keyword(null,"focusout","focusout",-1980488769),(function (e){
if(cljs.core.truth_(trace_description_BANG_)){
(trace_description_BANG_.cljs$core$IFn$_invoke$arity$2 ? trace_description_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"replicant-focusout","replicant-focusout",-1160699305),null) : trace_description_BANG_.call(null,new cljs.core.Keyword(null,"replicant-focusout","replicant-focusout",-1160699305),null));
} else {
}

var temp__5825__auto__ = placesurfer.html.description_field.editor_root_node(field_id);
if(cljs.core.truth_(temp__5825__auto__)){
var root = temp__5825__auto__;
return placesurfer.html.description_field.focusout_sync_BANG_(root,set_description_BANG_,e);
} else {
return null;
}
})], null);
}
});
placesurfer.html.description_field.handle_toggle_BANG_ = (function placesurfer$html$description_field$handle_toggle_BANG_(field_id,mode,set_description_BANG_,toggle_mode_BANG_){
if(placesurfer.html.description_field.html_mode_QMARK_(mode)){
} else {
var temp__5825__auto___39030 = document.getElementById(field_id);
if(cljs.core.truth_(temp__5825__auto___39030)){
var el_39032 = temp__5825__auto___39030;
placesurfer.html.description_field.sync_from_node_BANG_(el_39032,set_description_BANG_);
} else {
}
}

return (toggle_mode_BANG_.cljs$core$IFn$_invoke$arity$0 ? toggle_mode_BANG_.cljs$core$IFn$_invoke$arity$0() : toggle_mode_BANG_.call(null));
});
placesurfer.html.description_field.mode_toggle_btn = (function placesurfer$html$description_field$mode_toggle_btn(html_mode_QMARK_,t,handle_toggle_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.update-description-mode-btn","button.update-description-mode-btn",1285945784),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(html_mode_QMARK_)?"update-description-mode-btn--active":null),new cljs.core.Keyword(null,"aria-pressed","aria-pressed",-1749058631),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html_mode_QMARK_),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("description","toggle-aria","description/toggle-aria",-1902275875)) : t.call(null,new cljs.core.Keyword("description","toggle-aria","description/toggle-aria",-1902275875))),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(html_mode_QMARK_)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("description","to-text","description/to-text",-1605379641)) : t.call(null,new cljs.core.Keyword("description","to-text","description/to-text",-1605379641))):(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("description","to-html","description/to-html",2022386211)) : t.call(null,new cljs.core.Keyword("description","to-html","description/to-html",2022386211)))),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),(function (e){
e.preventDefault();

return (handle_toggle_BANG_.cljs$core$IFn$_invoke$arity$0 ? handle_toggle_BANG_.cljs$core$IFn$_invoke$arity$0() : handle_toggle_BANG_.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/html.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"draggable","draggable",1676206163),false], null)], null)], null);
});
placesurfer.html.description_field.grammarly_disabled_attrs = (function placesurfer$html$description_field$grammarly_disabled_attrs(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),false,new cljs.core.Keyword(null,"data-gramm","data-gramm",790857493),"false",new cljs.core.Keyword(null,"data-gramm_editor","data-gramm_editor",446307250),"false",new cljs.core.Keyword(null,"data-enable-grammarly","data-enable-grammarly",-868937923),"false"], null);
});
placesurfer.html.description_field.description_field = (function placesurfer$html$description_field$description_field(p__38997){
var map__38998 = p__38997;
var map__38998__$1 = cljs.core.__destructure_map(map__38998);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38998__$1,new cljs.core.Keyword(null,"t","t",-1397832519),(function (k){
return cljs.core.name(k);
}));
var label_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"label-for","label-for",2108155322));
var sync_token = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38998__$1,new cljs.core.Keyword(null,"sync-token","sync-token",-2023041987),(0));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var toggle_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"toggle-mode!","toggle-mode!",953048551));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var trace_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"trace-description!","trace-description!",-965598387));
var aria_label_for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"aria-label-for","aria-label-for",2083488240));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var flush_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"flush-description!","flush-description!",893680917));
var set_description_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"set-description!","set-description!",-1732307848));
var description_STAR_ = placesurfer.html.description_field.coerce_text(description);
var html_mode_QMARK_ = placesurfer.html.description_field.html_mode_QMARK_(mode);
var label_for_STAR_ = (function (){var or__5025__auto__ = label_for;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("common","description","common/description",-1682657429)) : t.call(null,new cljs.core.Keyword("common","description","common/description",-1682657429)));
}
})();
var toggle_BANG_ = (function (){
return placesurfer.html.description_field.handle_toggle_BANG_(id,mode,set_description_BANG_,toggle_mode_BANG_);
});
var sync_rich_BANG_ = (function (p__39001){
var map__39002 = p__39001;
var map__39002__$1 = cljs.core.__destructure_map(map__39002);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39002__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
if(cljs.core.truth_((function (){var and__5023__auto__ = node;
if(cljs.core.truth_(and__5023__auto__)){
return (!(html_mode_QMARK_));
} else {
return and__5023__auto__;
}
})())){
return placesurfer.html.description_field.sync_rich_editor_BANG_(node,id,description_STAR_,sync_token,trace_description_BANG_);
} else {
return null;
}
});
var mount_rich_BANG_ = (function (p__39003){
var map__39005 = p__39003;
var map__39005__$1 = cljs.core.__destructure_map(map__39005);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39005__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
if(cljs.core.truth_(node)){
return placesurfer.html.description_field.mount_rich_editor_listeners_BANG_(node,id,set_description_BANG_,flush_description_BANG_,trace_description_BANG_);
} else {
return null;
}
});
var unmount_rich_BANG_ = (function (p__39007){
var map__39008 = p__39007;
var map__39008__$1 = cljs.core.__destructure_map(map__39008);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39008__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
if(cljs.core.truth_(node)){
return placesurfer.html.description_field.unmount_rich_editor_listeners_BANG_(node);
} else {
return null;
}
});
var update_rich_BANG_ = (function (p__39009){
var map__39010 = p__39009;
var map__39010__$1 = cljs.core.__destructure_map(map__39010);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39010__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
if(cljs.core.truth_((function (){var and__5023__auto__ = node;
if(cljs.core.truth_(and__5023__auto__)){
return (!(html_mode_QMARK_));
} else {
return and__5023__auto__;
}
})())){
placesurfer.html.description_field.refresh_set_description_BANG_(node,set_description_BANG_);

return placesurfer.html.description_field.sync_rich_editor_BANG_(node,id,description_STAR_,sync_token,trace_description_BANG_);
} else {
return null;
}
});
var rich_dom_handlers = placesurfer.html.description_field.rich_editor_dom_handlers(id,set_description_BANG_,flush_description_BANG_,trace_description_BANG_);
var rich_on = (function (){var or__5025__auto__ = rich_dom_handlers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-row.update-description-row","div.update-field-row.update-description-row",-1454236332),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.update-label","label.update-label",1775033508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),label_for_STAR_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-field-control.update-description-control","div.update-field-control.update-description-control",-424725147),((html_mode_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.update-input","textarea.update-input",-1388592552),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"rows","rows",850049680),(3),new cljs.core.Keyword(null,"value","value",305978217),description_STAR_,new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),"off",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),(function (e){
var G__39014 = e.target.value;
return (set_description_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_description_BANG_.cljs$core$IFn$_invoke$arity$1(G__39014) : set_description_BANG_.call(null,G__39014));
})], null)], null),placesurfer.html.description_field.grammarly_disabled_attrs()], 0))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-input.update-description-rich","div.update-input.update-description-rich",541261078),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"aria-multiline","aria-multiline",1664335275),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753),new cljs.core.Keyword(null,"contentEditable","contentEditable",-823191689),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162)],["textbox",(0),"off",true,sync_rich_BANG_,update_rich_BANG_,id,unmount_rich_BANG_,true,rich_on,mount_rich_BANG_]),placesurfer.html.description_field.grammarly_disabled_attrs()], 0))], null)),placesurfer.html.description_field.mode_toggle_btn(html_mode_QMARK_,t,toggle_BANG_)], null)], null);
});

//# sourceMappingURL=placesurfer.html.description_field.js.map
