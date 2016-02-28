if(!lt.util.load.provided_QMARK_('lt.plugins.terminal')) {
goog.provide('lt.plugins.terminal');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.proc');
goog.require('lt.object');
goog.require('lt.objs.browser');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.browser');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.object');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.terminal","terminal-browser","lt.plugins.terminal/terminal-browser",785406405),new cljs.core.Keyword(null,"name","name",1017277949),"Terminal",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"terminal-browser","terminal-browser",2467190857),null], null), null),new cljs.core.Keyword(null,"url","url",1014020321),"about:blank",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){var temp__4124__auto___6427 = new cljs.core.Keyword(null,"addr","addr",1016893283).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.terminal.butterfly_server));if(cljs.core.truth_(temp__4124__auto___6427))
{var url_6428 = temp__4124__auto___6427;cljs.core.println.call(null,"Navigating to",url_6428);
setTimeout(((function (url_6428,temp__4124__auto___6427){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),url_6428);
});})(url_6428,temp__4124__auto___6427))
,0);
} else
{lt.object.raise.call(null,lt.plugins.terminal.butterfly_server,new cljs.core.Keyword(null,"start","start",1123661780));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#browser","div#browser",741844136),(function (){var elem = lt.objs.browser.webview.call(null,this$);var style = elem.style;style.bottom = 0;
return elem;
})()], null);
}));
lt.plugins.terminal.__BEH__stop_server_on_close = (function __BEH__stop_server_on_close(this$){cljs.core.println.call(null,"Terminal closed",new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
lt.object.destroy_BANG_.call(null,this$);
var browsers = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"terminal-browser","terminal-browser",2467190857));if((cljs.core.seq.call(null,browsers) == null))
{return lt.object.raise.call(null,lt.plugins.terminal.butterfly_server,new cljs.core.Keyword(null,"close","close",1108660586));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.terminal","stop-server-on-close","lt.plugins.terminal/stop-server-on-close",790058263),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.terminal.__BEH__stop_server_on_close);
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.terminal","butterfly-server","lt.plugins.terminal/butterfly-server",2272948523),new cljs.core.Keyword(null,"name","name",1017277949),"butterfly server",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"butterfly-server","butterfly-server",2086948687),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return null;
}));
lt.plugins.terminal.__BEH__start_server = (function __BEH__start_server(this$){cljs.core.println.call(null,"Starting new butterfly server instance");
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",1014014057),this$,new cljs.core.Keyword(null,"command","command",1964298941),"butterfly.server.py --unsecure --port=0 --login=False"], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.terminal","start-server","lt.plugins.terminal/start-server",3828434940),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",1123661780),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.terminal.__BEH__start_server);
lt.plugins.terminal.__BEH__stop_server = (function __BEH__stop_server(this$){lt.object.assoc_in_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addr","addr",1016893283)], null),null);
return lt.objs.proc.kill_all.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.terminal","stop-server","lt.plugins.terminal/stop-server",515957148),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.terminal.__BEH__stop_server);
lt.plugins.terminal.__BEH__restart_server = (function __BEH__restart_server(this$){if((new cljs.core.Keyword(null,"addr","addr",1016893283).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)) == null))
{return null;
} else
{cljs.core.println.call(null,"Restaring butterfly server");
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"start","start",1123661780));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.terminal","restart-server","lt.plugins.terminal/restart-server",901439951),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.terminal.__BEH__restart_server);
lt.plugins.terminal.__BEH__capture_butterfly_address = (function __BEH__capture_butterfly_address(this$,out){if(!(cljs.core._EQ_.call(null,cljs.core.type.call(null,out),String)))
{var out__$1 = (new TextDecoder("utf-8")).decode(out);var addr = cljs.core.re_find.call(null,/http:\/\/localhost:\d+\//,out__$1);lt.object.assoc_in_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addr","addr",1016893283)], null),addr);
cljs.core.println.call(null,"Butterfly has started on",addr);
var seq__6419 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"terminal-browser","terminal-browser",2467190857)));var chunk__6420 = null;var count__6421 = 0;var i__6422 = 0;while(true){
if((i__6422 < count__6421))
{var obj = cljs.core._nth.call(null,chunk__6420,i__6422);cljs.core.println.call(null,"Navigating to",addr);
lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),addr);
{
var G__6429 = seq__6419;
var G__6430 = chunk__6420;
var G__6431 = count__6421;
var G__6432 = (i__6422 + 1);
seq__6419 = G__6429;
chunk__6420 = G__6430;
count__6421 = G__6431;
i__6422 = G__6432;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6419);if(temp__4126__auto__)
{var seq__6419__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6419__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6419__$1);{
var G__6433 = cljs.core.chunk_rest.call(null,seq__6419__$1);
var G__6434 = c__5632__auto__;
var G__6435 = cljs.core.count.call(null,c__5632__auto__);
var G__6436 = 0;
seq__6419 = G__6433;
chunk__6420 = G__6434;
count__6421 = G__6435;
i__6422 = G__6436;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__6419__$1);cljs.core.println.call(null,"Navigating to",addr);
lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),addr);
{
var G__6437 = cljs.core.next.call(null,seq__6419__$1);
var G__6438 = null;
var G__6439 = 0;
var G__6440 = 0;
seq__6419 = G__6437;
chunk__6420 = G__6438;
count__6421 = G__6439;
i__6422 = G__6440;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{var seq__6423 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"terminal-browser","terminal-browser",2467190857)));var chunk__6424 = null;var count__6425 = 0;var i__6426 = 0;while(true){
if((i__6426 < count__6425))
{var t = cljs.core._nth.call(null,chunk__6424,i__6426);lt.object.raise.call(null,t,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__6441 = seq__6423;
var G__6442 = chunk__6424;
var G__6443 = count__6425;
var G__6444 = (i__6426 + 1);
seq__6423 = G__6441;
chunk__6424 = G__6442;
count__6425 = G__6443;
i__6426 = G__6444;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6423);if(temp__4126__auto__)
{var seq__6423__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6423__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6423__$1);{
var G__6445 = cljs.core.chunk_rest.call(null,seq__6423__$1);
var G__6446 = c__5632__auto__;
var G__6447 = cljs.core.count.call(null,c__5632__auto__);
var G__6448 = 0;
seq__6423 = G__6445;
chunk__6424 = G__6446;
count__6425 = G__6447;
i__6426 = G__6448;
continue;
}
} else
{var t = cljs.core.first.call(null,seq__6423__$1);lt.object.raise.call(null,t,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__6449 = cljs.core.next.call(null,seq__6423__$1);
var G__6450 = null;
var G__6451 = 0;
var G__6452 = 0;
seq__6423 = G__6449;
chunk__6424 = G__6450;
count__6425 = G__6451;
i__6426 = G__6452;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.terminal","capture-butterfly-address","lt.plugins.terminal/capture-butterfly-address",3959834817),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.terminal.__BEH__capture_butterfly_address);
if(typeof lt.plugins.terminal.butterfly_server !== 'undefined')
{} else
{lt.plugins.terminal.butterfly_server = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.terminal","butterfly-server","lt.plugins.terminal/butterfly-server",2272948523));
}
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"terminal.new","terminal.new",1658288800),new cljs.core.Keyword(null,"desc","desc",1016984067),"Terminal: new",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var terminal_browser = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.terminal","terminal-browser","lt.plugins.terminal/terminal-browser",785406405));return lt.objs.tabs.add_or_focus_BANG_.call(null,terminal_browser);
})], null));
}

//# sourceMappingURL=terminal_compiled.js.map