(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pagination.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "current") == 1) {
output += "\n   <li class=\"disabled\">\n      <span aria-label=\"First\">\n         <i class=\"fa fa-angle-double-left\"></i>\n      </span>\n   </li>\n   <li class=\"disabled\">\n      <span aria-label=\"Previous\">\n         <i class=\"fa fa-angle-left\"></i>\n      </span>\n   </li>\n";
;
}
else {
output += "\n   <li>\n      <a class=\"goto\" href=\"#\" aria-label=\"First\" data-page=\"1\">\n         <i class=\"fa fa-angle-double-left\"></i>\n      </a>\n   </li>\n   <li>\n      <a class=\"goto\" href=\"#\" aria-label=\"Previous\" data-page=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "current") - 1, env.opts.autoescape);
output += "\">\n         <i class=\"fa fa-angle-left\"></i>\n      </a>\n   </li>\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "max") <= 2 * runtime.contextOrFrameLookup(context, frame, "padding") + 1) {
output += "\n   ";
output += "\n   ";
var t_1;
t_1 = 1;
frame.set("lo", t_1, true);
if(!frame.parent) {
context.setVariable("lo", t_1);
context.addExport("lo");
}
output += "\n   ";
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "max");
frame.set("hi", t_2, true);
if(!frame.parent) {
context.setVariable("hi", t_2);
context.addExport("hi");
}
output += "\n";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "current") <= runtime.contextOrFrameLookup(context, frame, "padding") + 1) {
output += "\n   ";
output += "\n   ";
var t_3;
t_3 = 1;
frame.set("lo", t_3, true);
if(!frame.parent) {
context.setVariable("lo", t_3);
context.addExport("lo");
}
output += "\n   ";
var t_4;
t_4 = 2 * runtime.contextOrFrameLookup(context, frame, "padding") + 1;
frame.set("hi", t_4, true);
if(!frame.parent) {
context.setVariable("hi", t_4);
context.addExport("hi");
}
output += "\n";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "current") + runtime.contextOrFrameLookup(context, frame, "padding") >= runtime.contextOrFrameLookup(context, frame, "max")) {
output += "\n   ";
output += "\n   ";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "max") - 2 * runtime.contextOrFrameLookup(context, frame, "padding");
frame.set("lo", t_5, true);
if(!frame.parent) {
context.setVariable("lo", t_5);
context.addExport("lo");
}
output += "\n   ";
var t_6;
t_6 = runtime.contextOrFrameLookup(context, frame, "max");
frame.set("hi", t_6, true);
if(!frame.parent) {
context.setVariable("hi", t_6);
context.addExport("hi");
}
output += "\n";
;
}
else {
output += "\n   ";
output += "\n   ";
var t_7;
t_7 = runtime.contextOrFrameLookup(context, frame, "current") - runtime.contextOrFrameLookup(context, frame, "padding");
frame.set("lo", t_7, true);
if(!frame.parent) {
context.setVariable("lo", t_7);
context.addExport("lo");
}
output += "\n   ";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "current") + runtime.contextOrFrameLookup(context, frame, "padding");
frame.set("hi", t_8, true);
if(!frame.parent) {
context.setVariable("hi", t_8);
context.addExport("hi");
}
output += "\n";
;
}
;
}
;
}
output += "\n\n\n";
frame = frame.push();
var t_11 = (lineno = 50, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [runtime.contextOrFrameLookup(context, frame, "lo"),runtime.contextOrFrameLookup(context, frame, "hi") + 1]));
if(t_11) {var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("i", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "\n   ";
if(t_12 == runtime.contextOrFrameLookup(context, frame, "current")) {
output += "\n      <li class=\"active\">\n         <span>";
output += runtime.suppressValue(t_12, env.opts.autoescape);
output += " <span class=\"sr-only\">(current)</span></span>\n      </li>\n   ";
;
}
else {
output += "\n      <li>\n         <a class=\"goto\" href=\"#\" data-page=\"";
output += runtime.suppressValue(t_12, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_12, env.opts.autoescape);
output += "</a>\n      </li>\n   ";
;
}
output += "\n";
;
}
}
frame = frame.pop();
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "current") == runtime.contextOrFrameLookup(context, frame, "max")) {
output += "\n   <li class=\"disabled\">\n      <span aria-label=\"Next\">\n         <i class=\"fa fa-angle-right\"></i>\n      </span>\n   </li>\n   <li class=\"disabled\">\n      <span aria-label=\"Last\">\n         <i class=\"fa fa-angle-double-right\"></i>\n      </span>\n   </li>\n";
;
}
else {
output += "\n   <li>\n      <a class=\"goto\" href=\"#\" aria-label=\"Next\" data-page=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "current") + 1, env.opts.autoescape);
output += "\">\n         <i class=\"fa fa-angle-right\"></i>\n      </a>\n   </li>\n   <li>\n      <a class=\"goto\" href=\"#\" aria-label=\"Last\" data-page=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "max"), env.opts.autoescape);
output += "\">\n         <i class=\"fa fa-angle-double-right\"></i>\n      </a>\n   </li>\n";
;
}
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["bibliography/bibliography.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
if(runtime.contextOrFrameLookup(context, frame, "plays") && env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "plays")) > 0) {
output += "\n   <ol class=\"plays\">\n      ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "plays");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("play", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n         <li class=\"play\">\n            <span class=\"cite\">\n               <span class=\"authors\">\n                  ";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),"playwrights", env.opts.autoescape);
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("playwright", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n                     <span class=\"playwright\">";
output += runtime.suppressValue(t_8, env.opts.autoescape);
output += "</span>.\n                  ";
;
}
}
frame = frame.pop();
output += "\n               </span>\n               <span class=\"title\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title", env.opts.autoescape), env.opts.autoescape);
output += "</span>.\n            </span>\n            ";
if(runtime.memberLookup((t_4),"editions", env.opts.autoescape) && env.getFilter("length").call(context, runtime.memberLookup((t_4),"editions", env.opts.autoescape)) > 0) {
output += "\n               <ol class=\"editions\">\n                  ";
frame = frame.push();
var t_11 = runtime.memberLookup((t_4),"editions", env.opts.autoescape);
if(t_11) {var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("edition", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "\n                     <li class=\"edition\">\n                        Edition.\n                        <span class=\"cite\">\n                           <span class=\"authors\">\n                              ";
frame = frame.push();
var t_15 = runtime.memberLookup((t_12),"editors", env.opts.autoescape);
if(t_15) {var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("editor", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
output += "\n                                 <span class=\"author\">";
output += runtime.suppressValue(t_16, env.opts.autoescape);
output += "</span>.\n                              ";
;
}
}
frame = frame.pop();
output += "\n                           </span>\n                           <span class=\"title\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"title", env.opts.autoescape), env.opts.autoescape);
output += "</span>.\n                           ";
if(runtime.memberLookup((t_12),"date", env.opts.autoescape)) {
output += "\n                              <time class=\"date\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"date", env.opts.autoescape), env.opts.autoescape);
output += "</time>.\n                           ";
;
}
output += "\n                           ";
if(runtime.memberLookup((t_12),"link", env.opts.autoescape)) {
output += "\n                              Web.\n                              &lt;<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"link", env.opts.autoescape), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"link", env.opts.autoescape), env.opts.autoescape);
output += "</a>&gt;\n                           ";
;
}
else {
output += "\n                              Print.\n                           ";
;
}
output += "\n                        </span>\n                  ";
;
}
}
frame = frame.pop();
output += "\n               </ol>\n            ";
;
}
output += "\n      ";
;
}
}
frame = frame.pop();
output += "\n   </ol>\n";
;
}
else {
output += "\n   <div class=\"alert alert-info\">No bibliographic info to display.</div>\n";
;
}
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["characters/character.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"page-header\">\n   <h2>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</h2>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["characters/list_item.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<a href=\"#";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += " <small class=\"text-muted\">(";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += ")</small></a>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["manuscripts/list_item.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<a href=\"#";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += " <small class=\"text-muted\">(";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += ")</small></a>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["manuscripts/manuscript.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"page-header\">\n   ";
if(runtime.contextOrFrameLookup(context, frame, "downloadUrl")) {
output += "\n      <a class=\"pull-right btn btn-primary download-tei\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "downloadUrl"), env.opts.autoescape);
output += "\" download=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += ".xml\">\n         <i class=\"glyphicon glyphicon-download\"></i>\n         <span>Download TEI</span>\n      </a>\n   ";
;
}
output += "\n   <h2>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "</h2>\n</div>\n\n<dl class=\"dl-horizontal\">\n   ";
if(runtime.contextOrFrameLookup(context, frame, "author")) {
output += "\n      <dt>MS Compiler(s)</dt>\n      <dd>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "author"), env.opts.autoescape);
output += "</dd>\n   ";
;
}
output += "\n   ";
if(runtime.contextOrFrameLookup(context, frame, "links")) {
output += "\n      <dt>Online at</dt>\n      <dd>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "links"), env.opts.autoescape);
output += "</dd>\n   ";
;
}
output += "\n</dl>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["search/advanced_form.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"form-group\">\n   <label class=\"control-label sr-only\" for=\"shelfmark\">Shelfmark</label>\n   <input type=\"search\" id=\"shelfmark\" placeholder=\"Shelfmark\" name=\"shelfmark\" class=\"form-control\">\n</div>\n<div class=\"form-group\">\n   <label class=\"control-label sr-only\" for=\"playwright\">Playwright</label>\n   <input type=\"search\" id=\"playwright\" placeholder=\"Playwright\" name=\"playwright\" class=\"form-control\">\n</div>\n<div class=\"form-group\">\n   <label class=\"control-label sr-only\" for=\"play\">Play</label>\n   <input type=\"search\" id=\"play\" placeholder=\"Play\" name=\"play\" class=\"form-control\">\n</div>\n<div class=\"form-group\">\n   <label class=\"control-label sr-only\" for=\"character\">Character</label>\n   <input type=\"search\" id=\"character\" placeholder=\"Character\" name=\"character\" class=\"form-control\">\n</div>\n<div class=\"form-group\">\n   <label class=\"control-label sr-only\" for=\"keyword\">Keyword</label>\n   <input type=\"search\" id=\"keyword\" placeholder=\"Keyword\" name=\"keyword\" class=\"form-control\">\n</div>\n<div class=\"btn-row\">\n   <button class=\"btn btn-default\" type=\"reset\">\n      <i class=\"glyphicon glyphicon-remove\"></i>\n      <span>Clear</span>\n   </button>\n   <button class=\"btn btn-primary\" type=\"submit\">\n      <i class=\"glyphicon glyphicon-search\"></i>\n      <span>Search</span>\n   </button>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["search/basic_form.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"form-group\">\n   <label class=\"control-label sr-only\" for=\"search\">Search</label>\n   <div class=\"input-group\">\n      <input type=\"search\" id=\"search\" placeholder=\"Search\" name=\"search\" class=\"form-control\">\n      <span class=\"input-group-btn\">\n         <button type=\"reset\" class=\"btn btn-default\">\n            <i class=\"glyphicon glyphicon-remove\"></i>\n            <span class=\"sr-only\">Clear search</span>\n         </button>\n         <button type=\"submit\" class=\"btn btn-primary\">\n            <i class=\"glyphicon glyphicon-search\"></i>\n            <span class=\"sr-only\">Search</span>\n         </button>\n      </span>\n   </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["search/extract_result.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"original\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "original"), env.opts.autoescape);
output += "</div>\n<div class=\"normalized\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "normalized"), env.opts.autoescape);
output += "</div>\n\n<div class=\"extract-citation\">\n   <div>from <a href=\"browse-manuscript.html#mss/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "manuscript")),"id", env.opts.autoescape), env.opts.autoescape);
output += "\"><span>";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "manuscript")),"display", env.opts.autoescape),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "manuscript")),"id", env.opts.autoescape)), env.opts.autoescape);
output += "</span> (<span>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "author"), env.opts.autoescape);
output += "</span>)</a></div>\n   <div>by\n     <span class=\"speakers\">\n       ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "speakers");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("speaker", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "<a class=\"speaker\" href=\"browse-character.html#chars/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id", env.opts.autoescape), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((t_4),"display", env.opts.autoescape),runtime.memberLookup((t_4),"id", env.opts.autoescape)), env.opts.autoescape);
output += "</a>";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last", env.opts.autoescape)) {
output += ", ";
;
}
;
}
}
frame = frame.pop();
output += "\n     </span>\n     in <a href=\"browse-play.html#plays/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "source")),"id", env.opts.autoescape), env.opts.autoescape);
output += "\" class=\"source\"><em>";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "source")),"display", env.opts.autoescape),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "source")),"id", env.opts.autoescape)), env.opts.autoescape);
output += "</em></a>\n     ";
if(runtime.contextOrFrameLookup(context, frame, "playwrights")) {
output += "\n       (<span class=\"playwrights\">";
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "playwrights");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("playwright", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "<a class=\"playwright\" href=\"browse-playwright.html#pws/";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id", env.opts.autoescape), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((t_8),"display", env.opts.autoescape),runtime.memberLookup((t_8),"id", env.opts.autoescape)), env.opts.autoescape);
output += "</a>";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last", env.opts.autoescape)) {
output += ", ";
;
}
;
}
}
frame = frame.pop();
output += "</span>)\n     ";
;
}
output += "\n       <span class=\"source-line-ref\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "sourceLineRef"), env.opts.autoescape);
output += "</span>";
if(runtime.contextOrFrameLookup(context, frame, "folio")) {
output += ";\n       <span class=\"source-line-ref\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "folio"), env.opts.autoescape);
output += "</span>\n     ";
;
}
output += "\n   </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["search/facet_group.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n<h1 data-toggle=\"collapse\" data-target=\"#collapse-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "field"), env.opts.autoescape);
output += "\" aria-expanded=\"true\" aria-controls=\"collapse-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "field"), env.opts.autoescape);
output += "\">\n   <div class=\"pull-left\">\n      <i class=\"glyphicon glyphicon-chevron-right\"></i>\n      <i class=\"glyphicon glyphicon-chevron-down\"></i>\n   </div>\n   ";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "title"),runtime.contextOrFrameLookup(context, frame, "field")), env.opts.autoescape);
output += "\n   <div class=\"see-all pull-right\">\n     <a href=\"browse-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "field"), env.opts.autoescape);
output += ".html\">see all</a>\n   </div>\n</h1>\n<div class=\"facet-items facet-group-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "field"), env.opts.autoescape);
output += " collapse in\" id=\"collapse-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "field"), env.opts.autoescape);
output += "\">\n\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["search/facet_item.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<label>\n   <input type=\"checkbox\" name=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "field"), env.opts.autoescape);
output += "\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "label"), env.opts.autoescape);
output += "\"";
if(runtime.contextOrFrameLookup(context, frame, "selected")) {
output += " checked";
;
}
output += " />\n   <span class=\"item-label\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "label"), env.opts.autoescape);
output += "</span>\n\n   <small class=\"badge\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "count"), env.opts.autoescape);
output += "</small>\n</label>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["search/layout.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row\">\n   <div class=\"col-md-4\">\n      <div class=\"form\"></div>\n      <div class=\"facets\"></div>\n   </div>\n   <div class=\"col-md-8\">\n      <div class=\"meta-content\"></div>\n      <div class=\"text-right toolbar\">\n         <nav class=\"pagination pagination-top\"></nav>\n         <div class=\"btn-group\" role=\"group\" aria-label=\"manuscript display text\">\n            <button type=\"button\" class=\"btn btn-default show-normalized active\">Normalized</button>\n            <button type=\"button\" class=\"btn btn-default show-original\">Original</button>\n         </div>\n         <span class=\"select-num-results\">\n           <div class=\"btn-group num-results-selector\" role=\"group\">\n             <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n               # / page\n               <span class=\"caret\"></span>\n             </button>\n             <ul class=\"dropdown-menu\">\n               <li><a data-value=\"10\" href=\"#\">10</a></li>\n               <li><a data-value=\"25\" href=\"#\">25</a></li>\n               <li><a data-value=\"50\" href=\"#\">50</a></li>\n               <li><a data-value=\"100\" href=\"#\">100</a></li>\n               <li><a data-value=\"250\" href=\"#\">250</a></li>\n               <li><a data-value=\"500\" href=\"#\">500</a></li>\n             </ul>\n           </div>\n         </span>\n      </div>\n      <div class=\"result-list show-normalized\"></div>\n      <nav class=\"pagination pagination-bottom\"> </nav>\n   </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["plays/list_item.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<a href=\"#";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += " <small class=\"text-muted\">(";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += ")</small></a>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["plays/play.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"page-header\">\n   <h2>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "</h2>\n</div>\n\n<dl class=\"dl-horizontal\">\n   <dt>Playwright(s)</dt>\n   ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "playwrights");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("pw", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n      <dd><a href=\"browse-playwright.html#pws/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id", env.opts.autoescape), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name", env.opts.autoescape), env.opts.autoescape);
output += "</a></dd>\n   ";
;
}
}
frame = frame.pop();
output += "\n</dl>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["playwrights/list_item.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<a href=\"#";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += " <small class=\"text-muted\">(";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += ")</small></a>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["playwrights/playwright.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"page-header\">\n   <h2>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "names")),0, env.opts.autoescape), env.opts.autoescape);
output += "</h2>\n</div>\n\n";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "names")) > 1) {
output += "\n   <dl class=\"horizontal\">\n      <dt>Also known as</dt>\n      ";
frame = frame.push();
var t_3 = (lineno = 7, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [1,env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "names"))]));
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("i", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n         <dd>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "names")),t_4, env.opts.autoescape), env.opts.autoescape);
output += "</dd>\n      ";
;
}
}
frame = frame.pop();
output += "\n   </dl>\n";
;
}
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["upload/chooser.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row\">\n   <div class=\"col-xs-6\">\n      <a href=\"#\" class=\"btn btn-success btn-block btn-lg manuscript\">\n         <i class=\"fa fa-file-text-o\"></i>\n         <span>Upload Manuscripts</span>\n      </a>\n   </div>\n   <div class=\"col-xs-6\">\n      <a href=\"#\" class=\"btn btn-success btn-block btn-lg peopleandplays\">\n         <i class=\"fa fa-users\"></i>\n         <span>Upload People and Plays</span>\n      </a>\n   </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["upload/form.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
if(runtime.contextOrFrameLookup(context, frame, "title")) {
output += "\n   <div class=\"page-header\">\n      <h1>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "</h1>\n   </div>\n";
;
}
output += "\n\n<div class=\"drop-target\">Drop files here...</div>\n\n<div class=\"upload-form\" style=\"display: none;\">\n   <div class=\"form-group\">\n      <label for=\"upload\">Your browser does not support drag and drop file uploads.</label>\n      <input type=\"file\" name=\"upload\" id=\"upload\">\n   </div>\n\n   <div class=\"btn-row\">\n      <button class=\"btn btn-primary\" type=\"submit\">\n         <i class=\"glyphicon glyphicon-upload\"></i>\n         <span>Upload</span>\n      </button>\n   </div>\n</div>\n\n<!-- <progress class=\"uploadprogress\" min=\"0\" max=\"100\" value=\"0\">0</progress> -->\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
