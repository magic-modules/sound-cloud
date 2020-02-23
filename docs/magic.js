"use strict";function b(a){return o(a)||c(a)||m()}function c(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function d(a,b){if(null==a)return{};var c,d,f=e(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(f[c]=a[c])}return f}function e(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function f(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function j(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?f(Object(b),!0).forEach(function(c){k(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):f(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a,b){return o(a)||n(a,b)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function o(a){if(Array.isArray(a))return a}function q(a){"@babel/helpers - typeof";return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},q(a)}var r=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,q=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,q))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==q[A]&&o(c,A,n[A],q[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===q(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),s=r.h,h=r.app,i=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===q(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return s(a,{},b);return s(a,b,d)}},t=i("a"),a=i("button"),u=i("circle"),v=i("code"),w=i("div"),x=i("footer"),y=i("g"),g=i("h1"),z=i("h2"),A=i("h3"),B=i("h4"),C=i("h5"),D=i("header"),E=i("iframe"),F=i("img"),G=i("input"),H=i("label"),I=i("li"),J=i("link"),K=i("main"),L=i("meta"),M=i("nav"),N=i("p"),p=i("path"),O=i("pre"),P=i("script"),Q=i("span"),R=i("svg"),S=i("title"),T=i("ul"),U=i("view"),V={description:"embeds soundcloud tracks, playlist and user widgets.",gdpr:{allowed:[],show:!1},logotext:"SoundCloud",menu:[{text:"installation",to:"/#installation"},{items:[{text:"single track",to:"/#usage-tracks"},{text:"playlists",to:"/#usage-playlists"},{text:"user profile",to:"/#usage-users"},{text:"default arguments",to:"/#usage-default-arguments"}],text:"usage",to:"/#usage"},{text:"source",to:"/#source"}],pageClass:{},root:"/sound-cloud/",theme:"dark",title:"@magic-modules/sound-cloud",url:"/sound-cloud/"},W={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},X=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[A(b?ea({to:b},i):i),h.map(function(c){var d=l(c,2),e=d[0],f=d[1];return f.map(function(c){return Y(j({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},Y=function(a){return w([B([a.day,"-",a.month,"-",a.year," - ",ea({to:a.name},a.title)]),N(a.description)])},Z=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),w([z(c?ea({to:b},d):d),Object.entries(e[d]).map(function(c){var d=l(c,2),e=d[0],f=d[1];return X(j({},a,{month:e,days:f,link:b}))})])},$=function(){var a=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return x({class:"Footer"},[w({class:"Container"},[a,w({class:"Credits"},["made with a few bits of ",ea({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])])},_=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noDataText,l=void 0===k?"Awesome.":k,m=c.allowTitle,n=void 0===m?"Allow:":m,o=c.allowAllText,q=void 0===o?"All":o,r=c.allowText,s=void 0===r?"Selected":r,t=c.denyText,v=void 0===t?"None":t;if(!f)return w({class:"Gdpr"},R({class:"ShowHide",onclick:[oa.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[y([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),u({cx:"192",cy:"128",r:"32"}),u({cx:"128",cy:"256",r:"32"}),u({cx:"288",cy:"384",r:"32"}),u({cx:"272",cy:"272",r:"16"}),u({cx:"400",cy:"336",r:"16"}),u({cx:"176",cy:"368",r:"16"})])]));var x=!!e.length;return w({class:"Gdpr"},[w({class:"Container"},[h&&A(h),j&&N(j),x&&[T(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return I({class:"Cookie"},[G({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[oa.gdpr.toggleAllow,{name:b}]}),(d||e)&&H({for:b},[d&&B(d),e&&N(e)])])}))],x?[C(n),G({class:"allow all",onclick:oa.gdpr.allow,type:"button",value:q}),G({class:"allow",onclick:oa.gdpr.close,type:"button",value:s}),G({class:"allow none",onclick:oa.gdpr.deny,type:"button",value:v})]:G({onclick:oa.gdpr.close,value:l,type:"button"})])])},aa=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,i=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["node",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{src:"https://img.shields.io/node/v/@magic/core"}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=l(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=l(b,2),d=c[0],e=c[1];return e(a[d])});return i.length?T({class:"GitBadges"},i.map(function(a){var b=a.to,c=a.src;return b?I(ea({to:b},ca({src:c}))):I(ca({src:c}))})):void 0},ba=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,e=a.menu,f=a.logotext,g=d(a,["logo","menu","logotext"]);return c||e||f?D({class:"Header"},[(c||f)&&fa({img:c,text:f}),e&&ga({state:g,items:e}),b]):void 0},ca=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),F(a)},da=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:oa.changeTheme},R({viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},ea=function(a,b){var c=a.to,e=a.action,f=void 0===e?oa.go:e,g=d(a,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=d(g,["href","text","nofollow","noreferrer"]);c=c||h||"",l.href=c;var m="/"===c[0]||"#"===c[0];return m?l.onclick=[f,na.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),t(l,[i,b])},fa=function(a){var b=a.img,c=a.text,e=d(a,["img","text"]);return ea({to:e.root,class:"Logo"},[b&&ca(b),c&&Q(c)])},ga=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),M({className:c},T(e.map(function(a){return ha(j({},a,{url:g,root:i,collapse:void 0===d||d}))})))},ha=function(a){var b=a.text,c=a.items,e=void 0===c?[]:c,f=a.url,g=a.root,h=a.parentTo,i=void 0===h?void 0:h,k=a.collapse,l=d(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;g&&n.startsWith("/")&&(n=n.substr(1));var o=l.to[0];i&&("-"===o||"#"===o)&&(n=i+n);var p=n.startsWith(g);g&&("/"===o||"-"===o||"#"===o)&&!p&&(n=g+n),l.to=n.replace(/\/\//g,"/"),l.to===f&&(m["class"].active=!0);var q=[],r=f.startsWith(l.to)||!k;return r&&e.length&&(q=T(e.map(function(a){return ha(j({parentTo:l.to,url:f,root:g,collapse:k},a))}))),I(m,[l.to?ia(l,b):Q(l,b),q])},ia=function(a,b){return ea(a,b)},ja=function(a,b){var c=a.page,d=a.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return K(e,w({class:{Wrapper:!0}},[la({state:d,page:c}),b]))},ka=function(b,c){"string"==typeof b?b={content:b}:c&&(b=j({content:c},b));var d=b,f=d.content,g=d.lines;return w({class:{Pre:!0,lines:!(void 0!==g)||g}},[w({class:"menu"},[a({onclick:[oa.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),O(na.pre.format(f))])},la=function(a){var b=a.page,c=a.state;return[ba(c),w({class:"Page",id:"page"},b),$(c)]},ma=function(a){var b=a.src,c=void 0!==b&&b,d=a.height,e=void 0!==d&&d,f=a.type,g=void 0===f?"tracks":f,h=a.id,i=void 0!==h&&h,j=a.visual,k=void 0===j?!g.startsWith("track"):j,l=a.show_teaser,m=a.show_reposts,n=a.show_user,o=a.show_comments,q=a.auto_play,r=void 0!==q&&q,s=a.hide_related,t=a.width,u=void 0===t?"100%":t,v=a.scrolling,w=void 0===v?"no":v,x=a.frameborder,y=void 0===x?"no":x;if(i||c){if(e||(k?"tracks"===g?e=200:e=450:e=166),!c){"track"===g?g="tracks":"playlist"===g?g="playlists":"user"==g&&(g="users");var z="https://api.soundcloud.com/".concat(g,"/").concat(i);c=na.uri.encode({host:"https://w.soundcloud.com/player",params:{url:z,show_teaser:void 0!==l&&l,show_reposts:void 0!==m&&m,show_user:void 0===n||n,show_comments:void 0!==o&&o,auto_play:r,hide_related:void 0===s||s,visual:k}})}var A={width:u,height:e,scrolling:w,frameborder:y,src:c};return r&&(A.allow="autoplay"),E(A)}},na={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=na.db.init(),g=na.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=na.db.init(),f=void 0;return d&&e[d]&&(f=na.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=na.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(b){if("string"!=typeof b)return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(""!==b){var g="";return"state"===b?g="state":"actions"===b?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(b=Q({class:g},b)),b}}),b},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return ea({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[m(a.substring(0,b)),m(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){if(!a.includes("://"))return m(a);var b=a.split("://"),c=l(b,2),d=c[0],e=c[1];return d.match(/[a-z]/g)?a:ea({to:a},a)})},j=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},k=function(a){var c=a.replace(/"/g,"'"),d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2),k=i;1===k.length?k=m(k[0]):1<k.length&&(k=m(k.join("'")));var l=[];return l="undefined"==typeof h?e(a):[e(g),Q({class:"string"},["'",j(h),"'"]),k],l},m=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),Q({class:"comment"},[e,"// ",m(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)},n=function(a){return v({class:"line"},m(a))};return{format:function format(a){return a.trim().split("\n").map(n)}}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}(),uri:function(){return{encode:function encode(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.host,c=void 0===b?"":b,d=a.params,e=void 0===d?{}:d,f=Object.entries(e).map(function(a){var b=l(a,2),c=b[0],d=b[1];return"".concat(encodeURIComponent(c),"=").concat(encodeURIComponent(d))}).join("&");return f?[c,f].join("?"):c},decode:function decode(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";if(!a)return{};var b=a.split("?"),c=l(b,2),d=c[0],e=c[1],f={host:d};return e&&e.split("&").map(function(a){f.params=f.params||{};var b=a.split("="),c=l(b,2),d=c[0],e=c[1];f.params[d]=e}),f}}}()},oa={changeTheme:function changeTheme(a){return j({},a,{pageClass:j({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[j({},a,{gdpr:j({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[na.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[oa.gdpr.show,{show:!1}]}]]},close:function close(a){return[j({},a,{gdpr:j({},a.gdpr,{show:!1})}),[na.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[oa.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[j({},a,{gdpr:j({},a.gdpr,{allowed:[]})}),[na.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[oa.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?j({},a,{gdpr:j({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),j({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=l(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return a;var i=window,k=i.scrollY,m=a.titles[f];if(m&&(document.title=a.title=m),f===a.url)window.location.hash=h;else if(!h){var n=document.getElementsByTagName("html"),o=l(n,1),p=o[0],q=p.style.scrollBehavior;p.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),p.style.scrollBehavior=q}return window.history.pushState({url:f,hash:h,scrollY:k},a.title,c),j({},a,{url:f,hash:h,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),j({},a,{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},pa={"/sound-cloud/":function soundCloud(a){return[g(a.title),N(["this is the ",ea({to:"https://github.com/magic-modules"},"@magic-modules")," SoundCloud component.",a.description]),aa("magic-modules/sound-cloud"),z({id:"installation"},"installation:"),ka("npm install @magic-modules/sound-cloud"),z({id:"usage"},"usage:"),N("in a page or module View"),ka("export const View = () => SoundCloud(props)"),A({id:"usage-tracks"},"tracks"),N("the track type shows a single track"),ka("SoundCloud({ type: 'track', id: '599883213' })"),N("renders"),ma({type:"track",id:599883213,visual:!1}),A({id:"usage-playlists"},"playlists"),N("the playlists type shows a playlist"),ka("SoundCloud({ type: 'playlist', id: '613360614' })"),N("renders"),ma({type:"playlist",id:293975290}),A({id:"usage-users"},"users"),N("the users type shows a user profile"),ka("SoundCloud({ type: 'user', id: '151832569' })"),N("renders"),ma({type:"user",id:151832569}),z({id:"usage-default-arguments"},"default arguments"),N("@magic tries to keep the default arguments for soundcloud sane."),ka("{\n    visual = true,         // set to false to get a smaller view with 166px height\n    show_teaser = false,   // show an overlay with soundcloud ads\n    show_reposts = false,  // show reposts for this track/user/playlist\n    show_user = true,      // show the user that uploaded the track or playlist\n    show_comments = false, // show comments people left\n    auto_play = false,     // auto play video (will not work in many browsers anyways)\n    hide_related = true,   // hide artists that might match or not\n    height = 300 || 166,   // default height for visual true || false\n    width = '100%',\n    scrolling = 'no',\n    frameborder = 'no',\n  }"),z({id:"source"},"source"),N(["the source for this page is in the ",ea({to:"https://github.com/magic-modules/sound-cloud/tree/master/example"},"example directory")," and gets built and published to github using ",ea({to:"https://github.com/magic/core"},"@magic/core")]),da(a)]},"/sound-cloud/404/":function soundCloud404(){return w("404 - not found")}};h({init:[j({},V,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[na.db.get,{key:"magic-gdpr",action:oa.gdpr.show}]]],subscriptions:function subscriptions(){return[[W.listenPopState,oa.pop]]},view:function(a){var b=pa[a.url]?a.url:"/404/",c=pa[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.titles={},ja({page:c,state:a},_(a))},node:document.getElementById("Magic")});