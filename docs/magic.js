(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function c(a){return l(a)||e(a)||j()}function e(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function f(a,b){return l(a)||k(a,b)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function l(a){if(Array.isArray(a))return a}function m(a,b){if(a==null)return{};var c=n(a,b);var d,e;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(e=0;e<f.length;e++)d=f[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function n(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function o(a){for(var b=1;b<arguments.length;b++){var c=arguments[b]==null?{}:arguments[b];var d=Object.keys(c);typeof Object.getOwnPropertySymbols==="function"&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){r(a,b,c[b])})}return a}function r(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function t(a){return t=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function t(a){return typeof a}:function t(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t(a)}var v=require("hyperapp"),w=v.app,x=v.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===t(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),x(a,b,d)}};var y={View:function View(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"menu";return function(b){typeof a==="string"&&(a={name:a});var c=a,d=c.name,e=d===void 0?"menu":d,f=c["class"],g=f===void 0?"Menu":f,h=c.items,i=h===void 0?[]:h,j=c.collapse;var l=b.url,m=b[e],n=m===void 0?[]:m;if(i=i.length?i:n,!!i.length)return b.hash&&(l+="#".concat(b.hash)),Ha({"class":g.includes("Menu")?g:"Menu ".concat(g)},u(i.map(function(a){return y.Item(o({},a,{url:l,collapse:j===void 0||j}))})))}},Item:function Item(a){var b=a.url,c=a.text,d=a.items,e=d===void 0?[]:d,f=a.parent,g=f===void 0?undefined:f,h=a.collapse,j=m(a,["url","text","items","parent","collapse"]);if(j.to||c){var k={"class":"MenuItem"};j.to===b&&(k["class"]+=" active");var i=j.to.includes("://");var l=j.to.startsWith("/");var n=!g||j.to.startsWith(g);var p=[];return e.length&&(b.startsWith(j.to)||!h)&&(p=u(e.map(function(a){return y.Item(o({parent:j,url:b,collapse:h},a))}))),Aa(k,[j.to?z(j,c):$a(j,c),p])}}};var z=function Link(a,b){var c=a.to,d=m(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,k=d.onclick,l=m(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",l.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?l.onclick=function(a){k&&k({e:a,to:c}),f.go({e:a,to:c})}:(l.target="_blank",l.rel="noopener",i&&(l.rel+=" nofollow"),j&&(l.rel+=" noreferrer")),F(l,[h,b])}};var A={View:function View(){return ja({"class":"main"},[ba({"class":"wrapper"},["made with a few bits of ",z({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])}};var B={View:function View(a){return function(b,c){return ba({id:"magic"},ba({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&c.go&&window.addEventListener("popstate",c.go)}},[C,a?ba({"class":"page"},a(b,c)):ba({"class":"page"},"404 - not found"),A.View]))}}};var C=function PageHead(a){return(a.logo||a.menu||a.tagline)&&ra({"class":"main"},[(a.logo||a.logotext)&&z({to:"/sound-cloud/","class":"logo-wrapper"},[a.logo&&D({"class":"logo",src:a.logo}),a.logotext&&$a({"class":"logo-text"},a.logotext)]),y.View])};var D=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),ua(a)}};var E=h("component");var F=h("a");var a=h("abbr");var G=h("address");var H=h("area");var I=h("article");var J=h("aside");var K=h("audio");var L=h("b");var b=h("bdi");var M=h("bdo");var N=h("blockquote");var O=h("br");var P=h("button");var Q=h("canvas");var R=h("caption");var S=h("cite");var T=h("code");var U=h("col");var V=h("colgroup");var W=h("data");var X=h("datalist");var Y=h("dd");var Z=h("del");var $=h("details");var _=h("dfn");var aa=h("dialog");var ba=h("div");var ca=h("dl");var da=h("dt");var ea=h("em");var fa=h("embed");var ga=h("fieldset");var ha=h("figcaption");var ia=h("figure");var ja=h("footer");var ka=h("form");var la=h("h1");var ma=h("h2");var na=h("h3");var oa=h("h4");var pa=h("h5");var qa=h("h6");var ra=h("header");var sa=h("hr");var ta=h("i");var i=h("iframe");var ua=h("img");var va=h("input");var wa=h("ins");var xa=h("kbd");var ya=h("label");var za=h("legend");var Aa=h("li");var Ba=h("main");var Ca=h("map");var Da=h("mark");var Ea=h("menu");var Fa=h("menuitem");var Ga=h("meter");var Ha=h("nav");var Ia=h("object");var Ja=h("ol");var Ka=h("optgroup");var La=h("option");var Ma=h("output");var Na=h("p");var p=h("param");var Oa=h("picture");var Pa=h("pre");var Qa=h("progress");var Ra=h("q");var q=h("rp");var Sa=h("rt");var Ta=h("rtc");var Ua=h("ruby");var Va=h("s");var s=h("samp");var Wa=h("section");var Xa=h("select");var Ya=h("small");var Za=h("source");var $a=h("span");var _a=h("strong");var ab=h("sub");var bb=h("summary");var cb=h("sup");var db=h("table");var eb=h("tbody");var fb=h("td");var gb=h("textarea");var hb=h("tfoot");var ib=h("th");var jb=h("thead");var kb=h("time");var lb=h("tr");var mb=h("track");var nb=h("u");var u=h("ul");var ob=h("video");var pb=h("wbr");var qb=h("svg");var rb=h("g");var g=h("circle");var sb=h("ellipse");var tb=h("rect");var ub=h("polygon");var vb=h("path");var wb=h("defs");var xb=h("linearGradient");var yb=h("stop");var zb=h("text");var Ab=h("html");var Bb=h("head");var Cb=h("title");var Db=h("meta");var Eb=h("link");var Fb=h("body");var Gb=h("script");var Hb=h("description");var Ib=function SoundCloud(a){var b=a.src,c=b!==void 0&&b,d=a.height,e=d!==void 0&&d,f=a.type,g=f===void 0?"tracks":f;var h=a.id,j=h!==void 0&&h,k=a.visual,l=k===void 0?!g.startsWith("track"):k,m=a.show_teaser,o=a.show_reposts,r=a.show_user,t=a.show_comments,v=a.auto_play,w=v!==void 0&&v,x=a.hide_related,z=a.width,A=z===void 0?"100%":z,B=a.scrolling,C=B===void 0?"no":B,D=a.frameborder,E=D===void 0?"no":D;if(j||c){if(!e&&(l?g==="tracks"?e=200:e=450:e=166),!c){g==="track"?g="tracks":g==="playlist"?g="playlists":g==="user"&&(g="users");var G="https://api.soundcloud.com/".concat(g,"/").concat(j);c=LIB.URI.encode({host:"https://w.soundcloud.com/player",params:{url:G,show_teaser:m!==void 0&&m,show_reposts:o!==void 0&&o,show_user:r===void 0||r,show_comments:t!==void 0&&t,auto_play:w,hide_related:x===void 0||x,visual:l}})}var F={width:A,height:e,scrolling:C,frameborder:E,src:c};return w&&(F.allow="autoplay"),i(F)}};var Jb=function GitBadges(a){if(typeof a==="string")a={project:a};else if(!a.project)return;var b=a,c=b.project,d=c!==void 0&&c,e=b.branch,g=e===void 0?"master":e;var h=[["npm",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(g)}}],["appveyor",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;if(a){var b=a.split("/"),c=f(b,2),e=c[0],h=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(h,"/branch/").concat(g),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(h,"/").concat(g,".svg")}}}],["coveralls",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://coveralls.io/github/".concat(a),src:"https://coveralls.io/repos/github/".concat(a,"/badge.svg")}}],["greenkeeper",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://snyk.io/test/github/".concat(a),src:"https://snyk.io/test/github/".concat(a,"/badge.svg")}}]].map(function(b){var c=f(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return h.length?u({"class":"GitBadges"},h.map(function(a){var b=a.to,c=a.src;return Aa([z({to:b},D({src:c}))])})):void 0};var Kb=function Pre(a){var b=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(c,d){return ba({"class":"Pre ".concat(b||c.pre.theme)},[ba({"class":"menu"},[!b&&P({onclick:d.pre.changeTheme},c.pre.theme==="dark"?"light":"dark"),P({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),Pa(LIB.PRE.format(a))])}};var Lb={};(function(){Lb.URI={encode:function encode(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var b=a.host,c=b===void 0?"":b,d=a.params,e=d===void 0?{}:d;var g=Object.entries(e).map(function(a){var b=f(a,2),c=b[0],d=b[1];return"".concat(encodeURIComponent(c),"=").concat(encodeURIComponent(d))}).join("&");return g?[c,g].join("?"):c},decode:function decode(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";if(!a)return{};var b=a.split("?"),c=f(b,2),d=c[0],e=c[1];var g={host:d};return e&&e.split("&").map(function(a){g.params=g.params||{};var b=a.split("="),c=f(b,2),d=c[0],e=c[1];g.params[d]=e}),g}}})(),function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()});var b="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()});var d=["true","false"];var e=function wrapWords(c){if(typeof c!=="string")return c;var e=c.split(/\b/);return c=e.map(function(c,f){if(c!==""){var g="";return c==="state"?g="state":c==="actions"?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(c)?g="keyword":b.includes(c)?g="builtin":d.includes(c)?g="boolean":e[f-1]==="."?g="property":e[f+1]==="."&&(g="object"),g&&(c=$a({"class":g},c)),c}}),c};var f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g;var g=function wrapEmails(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a);var c=a.replace("mailto:","");return z({"class":"email",to:b},c)}return e(a)})};var h=function wrapComments(a,b){return[l(a.substring(0,b)),l(a.substring(b))]};var i=function wrapLinks(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?z({to:a},a):l(a)})};var j=function wrapUrls(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)};var k=function wrapStrings(a){var b=a.replace(/"/g,"'");var d=b.split("'"),f=c(d),g=f[0],h=f[1],i=f.slice(2);var k=i;k.length===1?k=l(k[0]):k.length>1&&(k=l(k.join("'")));var m=[];return m=typeof h==="undefined"?e(a):[e(g),$a({"class":"string"},["'",j(h),"'"]),k],m};var l=function wordsByLine(a){var b=a.indexOf("//");var c=a.trim();if(c.startsWith("//")){var d=a.search(/\S|$/);var e="";for(var f=0;f<d;f++)e+=" ";return!c.startsWith("// ")&&(a="".concat(e,"// ").concat(c.substr(2))),$a({"class":"comment"},[e,"// ",l(c.substring(3))])}return b>-1&&a[b-1]!==":"?h(a,b):a.indexOf("://")>2?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)};var m=function wrapLine(a){return T({"class":"line"},l(a))};Lb.PRE={keywords:a,builtins:b,format:function format(a){return a.trim().split("\n").map(m)},wordsByLine:l,wrapWords:e}}(),window.LIB=Lb;var Mb={"/sound-cloud/":function soundCloud(a){return[la(a.title),Na(["this is the ",z({to:"https://github.com/magic-modules"},"@magic-modules")," SoundCloud component.",a.description]),Jb({project:"magic-modules/sound-cloud",appveyor:"jaeh/sound-cloud"}),ma({id:"installation"},"installation:"),Kb("npm install magic-modules/sound-cloud"),ma({id:"usage"},"usage:"),Na("in a page or component"),Kb("module.exports = {\n  View: () => SoundCloud(props),\n}"),na({id:"usage-tracks"},"tracks"),Na("the track type shows a single track"),Kb("SoundCloud({ type: 'track', id: '599883213' })"),Na("renders"),Ib({type:"track",id:599883213,visual:!1}),na({id:"usage-playlists"},"playlists"),Na("the playlists type shows a playlist"),Kb("SoundCloud({ type: 'playlist', id: '613360614' })"),Na("renders"),Ib({type:"playlist",id:293975290}),na({id:"usage-users"},"users"),Na("the users type shows a user profile"),Kb("SoundCloud({ type: 'user', id: '151832569' })"),Na("renders"),Ib({type:"user",id:151832569}),ma({id:"usage-default-arguments"},"default arguments"),Na("@magic tries to keep the default arguments for soundcloud sane."),Kb("{\n  visual = true,         // set to false to get a smaller view with 166px height\n  show_teaser = false,   // show an overlay with soundcloud ads\n  show_reposts = false,  // show reposts for this track/user/playlist\n  show_user = true,      // show the user that uploaded the track or playlist\n  show_comments = false, // show comments people left\n  auto_play = false,     // auto play video (will not work in many browsers anyways)\n  hide_related = true,   // hide artists that might match or not\n  height = 300 || 166,   // default height for visual true || false\n  width = '100%',\n  scrolling = 'no',\n  frameborder = 'no',\n}"),ma({id:"source"},"source"),Na(["the source for this page is in the ",z({to:"https://github.com/magic-modules/sound-cloud/tree/master/example"},"example directory")," and gets built and published to github using ",z({to:"https://github.com/magic/core"},"@magic/core")])]},"/404/":function(){return ba("404 - not found")}};var Nb={"url":"/sound-cloud/","root":"/sound-cloud/","title":"@magic-modules/sound-cloud","description":"embeds soundcloud tracks, playlist and user widgets.","logotext":"sound-cloud","menu":[{to:"/sound-cloud/#installation","text":"installation"},{to:"/sound-cloud/#usage","text":"usage","items":[{to:"/sound-cloud/#usage-tracks","text":"single track"},{to:"/sound-cloud/#usage-playlists","text":"playlists"},{to:"/sound-cloud/#usage-users","text":"user profile"},{to:"/sound-cloud/#usage-default-arguments","text":"default arguments"}]},{to:"/sound-cloud/#source","text":"source"}],"pre":{"theme":"light"}};Nb.url=window.location.pathname,Nb.root="/sound-cloud/";var Ob={"go":function go(a){return function(b){if(typeof window==="undefined"||!window.history)return!0;var c=a.to;var d=a.e?a.e:a;d.preventDefault();var e=b.url;var g=e.split("#"),h=f(g,2),i=h[0],j=h[1],k=j===void 0?"":j;if(c){e=c.replace(window.location.origin,"");var l=e.split("#"),m=f(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p&&p!=="/"?p:"";var q=b.hash?"#".concat(b.hash):window.location.hash;var r=b.url+q;(e!==r||k!==q)&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=d.state?d.state.uri:"/";if(window.location&&k){var s=document.getElementById(k);if(s){var t=s.offsetTop;window.scrollTo(0,t),window.location.hash=k}}return{url:i,hash:k,prev:b.url}}},"pre":{"changeTheme":function changeTheme(){return function(a){return{theme:a.theme==="dark"?"light":"dark"}}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}}};var Pb=function view(a,b){var c=Mb[a.url]?a.url:"/404/";var d=Mb[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return ba({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&b.go&&window.addEventListener("popstate",b.go)}},[C,d?ba({"class":"page"},d(a,b)):ba({"class":"page"},"404 - not found"),A.View])};var Qb=document;var d=Qb.getElementById("magic");!d&&(d=Qb.createElement("div"),d.id="magic",Qb.body.appendChild(d)),w(Nb,Ob,Pb,d);
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
