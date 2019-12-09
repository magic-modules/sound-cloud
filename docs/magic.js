"use strict";function b(a){return o(a)||c(a)||m()}function c(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function d(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function f(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?d(Object(b),!0).forEach(function(c){g(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):d(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function g(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(a,b){if(null==a)return{};var c,d,e=j(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function j(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function l(a,b){return o(a)||n(a,b)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function o(a){if(Array.isArray(a))return a}function q(a){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},q(a)}var r=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,q=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,q))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==q[A]&&o(c,A,n[A],q[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===q(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),s=r.h,e=r.app,h=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===q(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),s(a,b,d)}},k=h("a"),a=h("button"),t=h("code"),u=h("div"),v=h("footer"),w=h("h1"),x=h("h2"),y=h("h3"),z=h("h4"),A=h("header"),B=h("iframe"),C=h("img"),D=h("input"),E=h("label"),F=h("li"),G=h("link"),H=h("main"),I=h("meta"),J=h("nav"),K=h("p"),p=h("pre"),L=h("script"),M=h("span"),N=h("title"),O=h("ul"),P={description:"embeds soundcloud tracks, playlist and user widgets.",gdpr:{allowed:[],show:!0},logotext:"SoundCloud",menu:[{text:"installation",to:"/#installation"},{items:[{text:"single track",to:"/#usage-tracks"},{text:"playlists",to:"/#usage-playlists"},{text:"user profile",to:"/#usage-users"},{text:"default arguments",to:"/#usage-default-arguments"}],text:"usage",to:"/#usage"},{text:"source",to:"/#source"}],pageClass:{},root:"/sound-cloud/",theme:"dark",title:"@magic-modules/sound-cloud",url:"/sound-cloud/"},Q={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}},mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a}},R=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return v({class:"Footer"},[u({class:"Container"},[b,u({class:"Credits"},["made with a few bits of ",X({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])]),"function"==typeof S&&S(a)])},S=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=!(void 0!==f)||f,h=c.small,i=c.left,j=c.right,k=c.title,l=void 0===k?"Magic Privacy Information":k,m=c.noCookieText,n=void 0===m?"This page does neither save, collect, nor share any personal data about you.":m,o=c.noCookieButtonText,p=void 0===o?"Awesome.":o,q=c.allowAllCookiesButtonText,r=void 0===q?"Allow all":q,s=c.allowCookieButtonText,t=void 0===s?"Allow selected":s,v=c.denyCookieButtonText,w=void 0===v?"Deny all":v,x=c.cookieText,A=void 0===x?"We are using the following data on this page.":x;if(g){var B=!!e.length,C=B?A:n;return u({class:{Gdpr:!0,show:g,small:void 0!==h&&h,left:void 0!==i&&i,right:void 0!==j&&j}},[D({type:"checkbox",name:"show-hide",id:"show-hide",checked:!g}),u({class:"Container"},[l&&y(l),C&&K(C),B&&[O(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return F({class:"Cookie"},[D({type:"checkbox",title:"allow",id:b,checked:c.allowed.includes(b),onchange:[da.gdpr.toggleAllow,{name:b}]}),(d||e)&&E({for:b},[d&&z(d),e&&K(e)])])}))],B?[E({class:"button",for:"show-hide",onclick:da.gdpr.allow},r),E({class:"button",for:"show-hide",onclick:da.gdpr.close},t),E({class:"button",for:"show-hide",onclick:da.gdpr.deny},w)]:E({class:"button",for:"show-hide",onclick:da.gdpr.close},p)])])}},T=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,i=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=l(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=l(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return i.length?O({class:"GitBadges"},i.map(function(a){var b=a.to,c=a.src;return F([X({to:b},V({src:c}))])})):void 0},U=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,e=a.logotext,f=i(a,["logo","menu","logotext"]);return c||d||e?A({class:"Header"},[(c||e)&&X({to:f.root,class:"Logo"},[c&&V(c),e&&M(e)]),d&&Y({state:f,items:d}),b]):void 0},V=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),C(a)},W=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:da.changeTheme})},X=function(a,b){var c=a.to,d=i(a,["to"]),e=d.href,f=d.text,g=d.nofollow,h=d.noreferrer,j=i(d,["href","text","nofollow","noreferrer"]);c=c||e||"",j.href=c;var l=c.startsWith("/");return l?j.onclick=[da.go,Q.mapClickToGo]:(j.target="_blank",j.rel="noopener",g&&(j.rel+=" nofollow"),h&&(j.rel+=" noreferrer")),k(j,[f,b])},Y=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.items,c=a["class"],d=void 0===c?"Menu":c,e=a.collapse,g=a.state;if(b.length){var h=g.url||"";return g.hash&&!h.endsWith(g.hash)&&(h+="#".concat(g.hash)),J({className:d},O(b.map(function(a){return Z(f({},a,{url:h,state:g,collapse:void 0===e||e}))})))}},Z=function(a){var b=a.text,c=a.items,d=void 0===c?[]:c,e=a.url,g=a.state,h=a.parentTo,j=void 0===h?void 0:h,k=a.collapse,l=i(a,["text","items","url","state","parentTo","collapse"]),m=g.root;if(l.to||b){var n={class:{}},o=l.to;o.startsWith("/#")&&(o=o.substr(1));var p=l.to[0],q="/"===p||"-"===p||"#"===p;if(j&&q)if("-"===p||"#"===p)o=j+o;else{var u=o.split("/")[1];if(u){var v=j.endsWith("/".concat(u,"/"));!v&&q&&(o=j+o)}}("/"!==l.to&&e.endsWith(l.to)||l.to===e)&&(n["class"].active=!0);var r=o.startsWith(m);m&&q&&!r&&(o=m+o),l.to=o.replace(/\/\//g,"/");var s=[],t=e&&e.includes(l.to);return(d.length&&t||!k)&&(s=O(d.map(function(a){return Z(f({parentTo:l.to,url:e,state:g,collapse:k},a))}))),F(n,[l.to?X(l,b):M(l,b),s])}},$=function(a){var b=a.page,c=a.state;b=b?b(c):"404 - not found";var d={id:"Magic",class:c.pageClass};return H(d,u({class:{Wrapper:!0}},aa({state:c,page:b})))},_=function(b,c){"string"==typeof b?b={content:b}:c&&(b=f({content:c},b));var d=b,g=d.content,h=d.lines;return u({class:{Pre:!0,lines:!(void 0!==h)||h}},[u({class:"menu"},[a({onclick:[da.pre.clip,function(a){return{e:a,content:g}}]},"copy")]),p(ca.pre.format(g))])},aa=function(a){var b=a.page,c=a.state;return[U(c),u({class:"Page"},b),R(c)]},ba=function(a){var b=a.src,c=void 0!==b&&b,d=a.height,e=void 0!==d&&d,f=a.type,g=void 0===f?"tracks":f,h=a.id,i=void 0!==h&&h,j=a.visual,k=void 0===j?!g.startsWith("track"):j,l=a.show_teaser,m=a.show_reposts,n=a.show_user,o=a.show_comments,q=a.auto_play,r=void 0!==q&&q,s=a.hide_related,t=a.width,u=void 0===t?"100%":t,v=a.scrolling,w=void 0===v?"no":v,x=a.frameborder,y=void 0===x?"no":x;if(i||c){if(e||(k?"tracks"===g?e=200:e=450:e=166),!c){"track"===g?g="tracks":"playlist"===g?g="playlists":"user"==g&&(g="users");var z="https://api.soundcloud.com/".concat(g,"/").concat(i);c=ca.uri.encode({host:"https://w.soundcloud.com/player",params:{url:z,show_teaser:void 0!==l&&l,show_reposts:void 0!==m&&m,show_user:void 0===n||n,show_comments:void 0!==o&&o,auto_play:r,hide_related:void 0===s||s,visual:k}})}var A={width:u,height:e,scrolling:w,frameborder:y,src:c};return r&&(A.allow="autoplay"),B(A)}},ca={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=ca.db.init(),g=ca.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d," ").concat(val))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=ca.db.init(),f=void 0;return e[d]&&(f=ca.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=ca.db.init();e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(b){if("string"!=typeof b)return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(""!==b){var g="";return"state"===b?g="state":"actions"===b?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(b=M({class:g},b)),b}}),b},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return X({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[m(a.substring(0,b)),m(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){if(!a.includes("://"))return m(a);var b=a.split("://"),c=l(b,2),d=c[0],e=c[1];return d.match(/[a-z]/g)?a:X({to:a},a)})},j=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},k=function(a){var c=a.replace(/"/g,"'"),d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2),k=i;1===k.length?k=m(k[0]):1<k.length&&(k=m(k.join("'")));var l=[];return l="undefined"==typeof h?e(a):[e(g),M({class:"string"},["'",j(h),"'"]),k],l},m=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),M({class:"comment"},[e,"// ",m(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)},n=function(a){return t({class:"line"},m(a))};return{format:function format(a){return a.trim().split("\n").map(n)}}}(),uri:function(){return{encode:function encode(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.host,c=void 0===b?"":b,d=a.params,e=void 0===d?{}:d,f=Object.entries(e).map(function(a){var b=l(a,2),c=b[0],d=b[1];return"".concat(encodeURIComponent(c),"=").concat(encodeURIComponent(d))}).join("&");return f?[c,f].join("?"):c},decode:function decode(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";if(!a)return{};var b=a.split("?"),c=l(b,2),d=c[0],e=c[1],f={host:d};return e&&e.split("&").map(function(a){f.params=f.params||{};var b=a.split("="),c=l(b,2),d=c[0],e=c[1];f.params[d]=e}),f}}}()},da={changeTheme:function changeTheme(a){return f({},a,{pageClass:f({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[f({},a,{gdpr:f({},a.gdpr,{show:!1})}),[ca.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:da.gdpr.show}]]},close:function close(a){return[f({},a,{gdpr:f({},a.gdpr,{show:!1})}),[ca.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:da.gdpr.show}]]},deny:function deny(a){return[a,[ca.db.del,{key:"magic-gdpr",action:da.gdpr.show}]]},load:function load(a){return[a,[ca.db.get,{key:"magic-gdpr",action:da.gdpr.show}]]},show:function show(a,b){return b.value&&(a.gdpr=f({},a.gdpr,{},b.value)),a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,g=e.allowed.includes(d);return g?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),f({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=l(d,2),g=e[0],h=e[1],i=void 0===h?"":h;return g===a.url&&i===a.hash?a:(window.history.pushState({url:g,hash:i},"",c),i?window.location.hash=i:window.scroll(0,0),f({},a,{url:g,hash:i,prev:a.url}))},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scroll(0,0),f({},a,{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},ea={"/sound-cloud/":function soundCloud(a){return[w(a.title),K(["this is the ",X({to:"https://github.com/magic-modules"},"@magic-modules")," SoundCloud component.",a.description]),T("magic-modules/sound-cloud"),x({id:"installation"},"installation:"),_("npm install @magic-modules/sound-cloud"),x({id:"usage"},"usage:"),K("in a page or module View"),_("export const View = () => SoundCloud(props)"),y({id:"usage-tracks"},"tracks"),K("the track type shows a single track"),_("SoundCloud({ type: 'track', id: '599883213' })"),K("renders"),ba({type:"track",id:599883213,visual:!1}),y({id:"usage-playlists"},"playlists"),K("the playlists type shows a playlist"),_("SoundCloud({ type: 'playlist', id: '613360614' })"),K("renders"),ba({type:"playlist",id:293975290}),y({id:"usage-users"},"users"),K("the users type shows a user profile"),_("SoundCloud({ type: 'user', id: '151832569' })"),K("renders"),ba({type:"user",id:151832569}),x({id:"usage-default-arguments"},"default arguments"),K("@magic tries to keep the default arguments for soundcloud sane."),_("{\n    visual = true,         // set to false to get a smaller view with 166px height\n    show_teaser = false,   // show an overlay with soundcloud ads\n    show_reposts = false,  // show reposts for this track/user/playlist\n    show_user = true,      // show the user that uploaded the track or playlist\n    show_comments = false, // show comments people left\n    auto_play = false,     // auto play video (will not work in many browsers anyways)\n    hide_related = true,   // hide artists that might match or not\n    height = 300 || 166,   // default height for visual true || false\n    width = '100%',\n    scrolling = 'no',\n    frameborder = 'no',\n  }"),x({id:"source"},"source"),K(["the source for this page is in the ",X({to:"https://github.com/magic-modules/sound-cloud/tree/master/example"},"example directory")," and gets built and published to github using ",X({to:"https://github.com/magic/core"},"@magic/core")]),W(a)]},"/sound-cloud/404/":function soundCloud404(){return u("404 - not found")}};e({init:function init(){return da.gdpr.load(f({},P,{url:window.location.pathname}))},subscriptions:function subscriptions(){return[[Q.listenPopState,da.pop]]},view:function view(a){var b=ea[a.url]?a.url:"/404/",c=ea[b];return a.pages&&a.pages[b]&&Object.keys(a.pages[b]).forEach(function(c){a[c]=a.pages[b][c]}),$({page:c,state:a})},node:document.getElementById("Magic")});