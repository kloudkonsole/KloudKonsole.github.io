!function(){"use strict";window.__&&console.error("Another instance of lean detected")}();var __={env:{},load:function(e){var t=__.onReady(e);if(__.env.supportNative)document.addEventListener("deviceready",t,!1),__.env.loaded||__.dom.link("cordova.js","js");else{if("complete"===document.readyState)return t();window.addEventListener("load",t,!1)}__.env.loaded=1},onReady:function(n){return function(e){return 2===__.env.loaded?e():(n.push(e),function(){for(var e,t=0;e=n[t];t++)e();__.env.loaded=2,n.length=0})}}([]),dummyCB:function(){},dotchain:function e(t,n){if(!n||!n.length)return t;var o=t[n.shift()];return o?e(o,n):0},querystring:function(n){return Object.keys(n).reduce(function(e,t){return e.push(encodeURIComponent(t)+"="+encodeURIComponent(n[t])),e},[]).join("&")},ajax:function(n,e,o,r,a,i){if(a=a||function(e){e&&console.error(e)},!e)return a("url not defined");n=n.toUpperCase(),o=o||{},r=r||{};var c=new XMLHttpRequest,t=null==r.useBody?"GET"!==n:r.useBody,u=null==r.useURL?!t:r.useURL,s=o.charAt?1:o instanceof FormData?3:2;if(e=encodeURI(e),t&&2===s&&(o=JSON.stringify(o)),u&&(e+=(-1===e.indexOf("?")?"?":"&")+"appVer="+__.env.appVer||0,o)){switch(e+="&",s){case 1:e+=encodeURIComponent(o);break;case 2:e+=__.querystring(o);break;case 3:return a("FormData with GET method is not supported yet")}o=null}c.open(n,e,!r.sync,r.un,r.passwd),c.timeout=r.timeout||0,c.responseType=r.responseType||"",c.onreadystatechange=function(){if(1<c.readyState){var e,t=c.status;return 300<=t&&t<400&&(e=c.getResponseHeader("location"))?__.ajax(n,e,o,r,a,i):(c.onerror=void 0,a(t<300||!t&&c.response?null:{error:c.statusText,code:t},c.readyState,c.response,i))}},c.ontimeout=c.onerror=function(e){a({error:c.statusText,code:c.status,src:e,params:arguments},c.readyState,null,i)};var d="Content-Type",l=r.headers;if(t&&(!l||!l[d])&&o)switch(s){case 1:case 2:c.setRequestHeader(d,"text/plain");break;case 3:c.setRequestHeader(d,"multipart/form-data")}for(var f in l)c.setRequestHeader(f,l[f]);return c.send(o),c},escapeXML:function(e){var t=document.createElement("p");return t.appendChild(document.createTextNode(e)),t.innerHTML},createEvent:function(e,t,n,o){var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n||!1,o||!1,t),r},detectEvent:function(e,t){var n=document.createElement(t||"div"),o=(e="on"+e)in n||e in window;return o||(n.setAttribute(e,""),o="function"==typeof n[e],n[e]=void 0,n.removeAttribute(e)),n=void 0,o}};!function(){"use strict";var e=__.env,t=document.querySelector("meta[name=app-version]"),n="transitionend",o="webkitTransitionEnd";e.transitionEnd=__.detectEvent(n)?n:__.detectEvent(o.toLowerCase())?o:void 0,e.supportPassive=!1;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){return e.supportPassive=!0}}))}catch(e){}if(e.appVer=t?t.getAttribute("content"):"0",e.loaded=0,e.supportNative=!1,-1===document.URL.indexOf("http://")&&-1===document.URL.indexOf("https://")){var r=document.querySelector("meta[name=app-support-native]");e.supportNative=!!r&&"1"===r.getAttribute("content")}}(),function(){"use strict";__.onReady(function(){__.device=__.dotchain(window,["device"])||function(e,t){for(var n,o,r=e.userAgent,a="",i=0;n=t[i];i++)if(~(o=r.indexOf(n))){a=r.substr(o+n.length+1).split(/[ ;]+/,1)[0];break}return{model:n||"",version:a,platform:"web",manufacturer:e.vendor||"",cordova:0,uuid:Math.random().toString(36).substr(2)+Date.now().toString(36),isVirtual:!1,serial:""}}(navigator,["Trident","Edge","Chromium","Chrome","Safari","Firefox","OPR","Opera"])})}(),function(){"use strict";__.onReady(function(){var a=__.dotchain(window,["navigator","notification"]);__.dialogs=a?{alert:function(e,t,n,o){a.alert(e,o||__.dummyCB,t,n)},confirm:function(e,t,n,o){a.confirm(e,o,t,n)},prompt:function(e,t,n,o,r){a.prompt(e,r,t,n,o)},beep:function(e){a.beep(e)}}:{alert:function(e,t,n,o){setTimeout(function(){alert(e),(o||__.dummyCB)()},0)},confirm:function(e,t,n,o){setTimeout(function(){o(confirm(e)?1:2)},0)},prompt:function(t,e,n,o,r){setTimeout(function(){var e=prompt(t,o);r({buttonIndex:e?1:2,input1:e})},0)},beep:function(){console.log("beep")}}})}(),function(){"use strict";var i=document.head||document.getElementsByTagName("head")[0],c=["el","tagName","tag","id","className","class","dataset","data","style","content"],n=function(e,t){if(e){for(;e.hasChildNodes();)n(e.lastChild);!t&&e.parentElement&&e.parentElement.removeChild(e)}},o=function(e){if(e){if(e instanceof HTMLElement)return e;var t=e.el;return t?t.charAt&&(t=document.querySelector(t)):t=document.createElement(e.tag||e.tagName||"div"),a(t,e.id),u(t.classList,e.class||e.className),s(t.dataset,e.data||e.dataset),d(t,e),f(e.style),l(t,e.content)}},r=function(e,t,n){return n>=t.length?e:(e.appendChild(o(t[n++])),r(e,t,n))},a=function(e,t){t&&(e.id=t)},u=function(e,t){t&&t.length&&e.add.apply(e,Array.isArray(t)?t:t.split(" "))},s=function(e,t){if(t)for(var n,o=0,r=Object.keys(t);n=r[o];o++)e[n]=t[n]},d=function(e,t){if(t)for(var n,o,r=0,a=Object.keys(t);n=a[r];r++)~c.indexOf(n)||(null==(o=t[n])?e.removeAttribute(n):e.setAttribute(n,o))},l=function(e,t){return null==t?e:t.charAt?(e.innerHTML=t,e):r(e,t,0)},f=function(e){if(e)for(var t,n,o=Object.keys(e),r=0;t=o[r];r++)(n=i.querySelector('style[src="'+t+'"]'))?n.dataset.rc=1+parseInt(n.dataset.rc):((n=document.createElement("style")).setAttribute("src",t),n.dataset.rc=1,n.appendChild(document.createTextNode(e[t])),i.appendChild(n))},v=function(e){if(e)for(var t,n,o,r=Object.keys(e),a=0;t=r[a];a++)(n=i.querySelector('style[src="'+t+'"]'))&&((o=n.dataset).rc=parseInt(o.rc)-1,o.rc<=0&&n.parentNode.removeChild(n))};__.dom={link:function(e,t,n){var o;switch(t){case"js":return(o=document.createElement("script")).setAttribute("src",e),o.onload=n,o.onerror=n,void i.insertBefore(o,i.lastChild);case"css":return(o=document.createElement("link")).setAttribute("rel","stylesheet"),o.setAttribute("href",e),i.insertBefore(o,i.lastChild),setTimeout(n,0);default:return n()}},unlink:function(e,t){var n,o;switch(t){case"js":o=document.getElementsByTagName("script"),n="src";break;case"css":o=document.getElementsByTagName("link"),n="href";break;default:return}for(var r,a,i=o.length-1;r=o[i];i--)(a=r.getAttribute(n))&&~a.indexOf(e)&&r.parentNode.removeChild(r)},setId:a,setClasses:u,setAttributes:d,setContent:l,get:o,forget:function(e,t){n(e,!!t.el),v(t.style)},style:f,unstyle:v}}(),function(){"use strict";if(!__.detectEvent("touchstart")){var t=!__.env.supportPassive||{capture:!0,passive:!0},a="mousedown",i="mouseup",c="mousemove",n=function(e){var t;switch(e.type){case a:t="touchstart";break;case i:t="touchend";break;case c:t="touchmove";break;default:return console.error("wrong event: "+e.type)}var n=e.target,o=[{pageX:e.pageX,pageY:e.pageY,target:n}],r=__.createEvent(t,null,e.bubbles,e.cancelable);r.pageX=e.pageX,r.pageY=e.pageY,r.touches=r.changedTouches=r.targetTouches=o,r.mouseToTouch=!0,n.dispatchEvent(r)},o=function(){document.removeEventListener(a,r,t),document.removeEventListener(c,u,t),document.removeEventListener(i,s,t)},r=function(e){o(),document.addEventListener(c,u,t),document.addEventListener(i,s,t),n(e)},u=function(e){n(e)},s=function(e){o(),document.addEventListener(a,r,t),n(e)};document.addEventListener(a,r,t)}}(),function(){"use strict";__.onReady(function(){var t,n=__.dotchain(window,["sqlitePlugin"]),e=__.dotchain(window,["openDatabase"]),r=function(e){if(e)return console.error(e)},o={};n||e?(t=function(e){var t;(t=n?n.openDatabase({name:e,location:"default"}):openDatabase(e,"1.0","lean local storage emulator",52428800)).transaction(function(e){e.executeSql("CREATE TABLE IF NOT EXISTS kv (key TEXT UNIQUE NOT NULL, val TEXT);",null,null,function(e,t){console.error(t)})}),this.db=t}).prototype={key:function(o,r){this.db.readTransaction(function(e){e.executeSql("SELECT key FROM KV order by oid ASC;",null,function(e,t){var n=t.rows;if(n.length<=o)return r();r(null,n[o].key)},function(e,t){r(t)})})},getItem:function(t,n){this.db.readTransaction(function(e){e.executeSql("SELECT val FROM kv WHERE key=?;",[t],function(e,t){if(!t.rows.length)return n();n(null,t.rows[0].val)},function(e,t){n(t)})})},setItem:function(t,n,o){o=o||r,this.db.transaction(function(e){e.executeSql("INSERT OR REPLACE INTO kv (oid,key,val) VALUES ((SELECT oid FROM kv WHERE key=?), ?, ?);",[t,t,n],function(e,t){o(null,t.insertId)},function(e,t){o(t)})})},removeItem:function(t,n){n=n||r,this.db.transaction(function(e){e.executeSql("DELETE FROM kv WHERE key=?;",[t],function(e,t){n()},function(e,t){n(t)})})},clear:function(n){n=n||r,this.db.transaction(function(e){e.executeSql("DELETE FROM kv;",null,function(e,t){n()},function(e,t){n(t)})})},length:function(n){this.db.readTransaction(function(e){e.executeSql("SELECT count(*) AS len FROM KV;",null,function(e,t){n(null,t.rows[0].len)},function(e,t){n(t)})})}}:(t=function(e){this.prefix=e+"_",this.db=window.localStorage}).prototype={key:function(e,t){t(null,this.db.key(e))},getItem:function(e,t){t(null,this.db.getItem(this.prefix+e))},setItem:function(e,t,n){n=n||r;try{n(null,this.db.setItem(this.prefix+e,t))}catch(e){n(e)}},removeItem:function(e,t){(t=t||r)(null,this.db.removeItem(this.prefix+e))},clear:function(e){(e=e||r)(null,this.db.clear())},length:function(e){e(null,this.db.length)}},__.store=function(e){return o[e=e||"localstorage"]=o[e]||new t(e)}})}(),function(){"use strict";var n,o,e=!__.env.supportPassive||{capture:!0,passive:!0},r=0,a=1,i=0,c=0,u=function(e){return[e.pageX,e.pageY]},t=function(e){r||(r=1,e.target.dispatchEvent(__.createEvent("longTap",o,!0)))};document.addEventListener("touchstart",function(e){r=0,a=1,o=n=u(e.touches[0]),i=window.setTimeout(t,2e3,e)},e),document.addEventListener("touchend",function(e){if(window.clearTimeout(i),a=0,!r){var t=Date.now();t-c<300?(e.target.dispatchEvent(__.createEvent("taps",o,!0)),c=0):(e.target.dispatchEvent(__.createEvent("tap",o,!0)),c=t)}},e),document.addEventListener("touchmove",function(e){var t=u(e.touches[0]);a&&e.target.dispatchEvent(__.createEvent("rub",[o[0],o[1],t[0],t[1]],!0)),!r&&(t[0]>n[0]+9||t[0]<n[0]-9)&&(r=1),o=t},e),document.addEventListener("touchcancel",function(e){r=1,a=0,window.clearTimeout(i)},e)}();
//# sourceMappingURL=bin/lean.min.js.map;
(function(e,r,t){var i,n=Date.now(),c={},f={},a={},o={},l={},h=".js",u=function(e){return o[e]},s=function(){},p=function(r,e,t){if(c[r]&&!k(c[r]))return c[r];var n=v(r)||h,i=l[n];switch(i&&(e=i(r,e)),n){case h:var a,u={exports:{}},o={},s=e.call(t?{}:o,u.exports,j,u,p,function(e){return a=j(e)},N)||u.exports;return a&&(s=w(s,a)),"function"==typeof s&&(s.extend=O),o.load&&o.load(s),o.update&&(f[r]=[o.update,s]),r?c[r]=A(c[r],s):s;case".json":try{return c[r]=JSON.parse(e)}catch(e){return console.error(r,e.message)}default:return c[r]=e}},d={run:s,inherit:s,reload:s,parse:s,define:p,import:s,export:s,env:u,ajax:s},g="undefined"==typeof requestAnimationFrame?function(e){return setTimeout(e,100)}:requestAnimationFrame,v=function(e){if(!e)return null;var r=e.lastIndexOf(".");return-1!==r&&-1===e.indexOf("/",r)?e.substr(r):null},y=function(r,t){if(!r.length)return t();m(r.shift(),function(e){if(e)return t(e);y(r,t)})},m=function(n,i){if(c[n]=c[n]||N.import(n),c[n])return i(null,c[n]);var e=n.indexOf("/"),r=~e?a[n.slice(0,e)]:0,t=r?n.slice(e+1):n;(r=r||a["~"]||"")instanceof Function?r(t,function(e,r){if(e)return i(e);S(n,r,i)}):N.ajax("get",r+t+(v(n)?"":h),null,null,function(e,r,t){if(4===r)return e?i(e):void S(n,t,i)})},b=function(e){return Object.defineProperties(Function("return arguments.callee.__proto__.apply(this,arguments)"),{name:{value:e},i:{value:n}})},k=function(e){return"function"==typeof e&&n===e.i},A=function(e,r){return e&&e!==r?(k(e)&&(e.prototype=r.prototype),e.__proto__=r,e):r},x=function(e){return k(e)?e.__proto__:e},O=function(e,r){return e?w(e,this,r):this},w=function(e,r,t){var n,i,a=x(e),u=x(r),o=typeof a,s=typeof u;switch(o){case"function":i=(n=a).prototype;break;case"object":if(o==s)return a.__proto__=u,a;n=function(){return u.apply(this,arguments)},i=a;break;default:return a}switch(Object.assign(n,u,x(t)),s){case"function":return n.prototype=Object.assign(Object.create(u.prototype),i,{constructor:u}),n;case"object":return n.prototype=Object.assign(Object.create(u),i),n;default:return a}},j=function(e,r){var t=c[e];return void 0===t?r?m(e,r):c[e]=b(e):(r&&setTimeout(r,0,null,t),t)},S=function(r,e,t){if(t=t||s,c[r])return t(null,c[r]);if(h!==(v(r)||h))return t(null,p(r,e));var n=[],i=function(r,e,t,n){n=n||d;var i=r?'"use strict";\n'+e+(o.live?"":"//# sourceURL="+r):e,a=function(e){return c[e]||t.push(e),c[e]};try{var u=Function("exports","require","module","define","inherit","pico",i)}catch(e){return console.error(r,e.message)}return u.call({},{},a,{},p,a,n),u}(r,e,n);r&&(c[r]=b(r)),y(n,function(e){if(e)return t(e);t(null,p(r,i))})},T=function(e){var r;for(var t in f)(r=f[t])&&r[0](r[1],e);g(T)},N=e[r]={run:function(e,r){var t;for(var n in N.ajax=e.ajax||N.ajax,a=e.paths||a,o=e.env||o,l=e.preprocessors||l,i=e.importRule,c)(t=l[v(n)||h])&&(c[n]=t(n,c[n]));(e.onLoad||function(){arguments[arguments.length-1]()})(function(){S(e.name||null,function(e){return e.substring(e.indexOf("{")+1,e.lastIndexOf("}"))}(r.toString()),function(e,r){if(e)return console.error(e);r&&r(),g(T)})})},reload:function(t,e,n){"function"==typeof e&&(n=e),n=n||s;var r=function(e,r){if(e)return n(e);n(null,c[t]=A(c[t],r))};delete c[t],n===e?m(t,r):S(t,e,r)},parse:S,define:p,import:function(r){if(Array.isArray(i)&&i.some(function(e){return e.match(r)}))return t(r)},export:j,env:u};p("pico/func",function(e,r,t,n,i,a){function o(e,r){for(var t,n=r[0],i=[],a=0;t=r[a];a++)i.push(t.toString());return{typeName:n.getTypeName(),functionName:n.getFunctionName(),methodName:n.getMethodName(),fileName:n.getFileName(),line:n.getLineNumber(),column:n.getColumnNumber(),evalOrigin:n.getEvalOrigin(),isTopLevel:n.isToplevel(),isEval:n.isEval(),isNative:n.isNative(),isConstructor:n.isConstructor(),trace:i}}return{reflect:function e(r,t){var n=Error.prepareStackTrace,i=Error.stackTraceLimit;Error.prepareStackTrace=o,Error.stackTraceLimit=t||1;var a=new Error;Error.captureStackTrace(a,r||e);var u=a.stack;return Error.stackTraceLimit=i,Error.prepareStackTrace=n,u}}}),p("pico/json",function(e,r,t,n,i,a){return{parse:function(t,n){return JSON.parse(t[0],function(e,r){switch(e[0]){case"$":if(n)return JSON.parse(t[r]);case"_":return t[r];default:return r}})},stringify:function(e,t){var n=[];return n.unshift(JSON.stringify(e,function(e,r){switch(e[0]){case"$":if(t)return n.push(JSON.stringify(r));case"_":return n.push(r);default:return r}})),n},path:function(e){var l=e;function h(e,r){return r<0?(e.length||0)+r:r}return function e(){if(!arguments.length)return l;var r=Array.isArray(l);switch(typeof arguments[0]){case"string":var t=arguments[0];switch(t){default:if(r){if(!l[0][t])break;l=l.map(function(e){return e[t]})}else{if(!l[t])break;l=l[t]}break;case"..":l=function e(r,t){if(r&&t&&"object"==typeof t){if(t[r])return t[r];for(var n,i,a=[],u=Object.keys(t),o=0;i=u[o];o++)(n=e(r,t[i]))&&(Array.isArray(n)?a.push.apply(a,n):a.push(n));return a.length?a:void 0}}(arguments[1],l)||l;break;case"*":if(r)break;l=Object.keys(l).map(function(e){return l[e]})}break;case"object":var n=arguments[0];if(!Array.isArray(n))break;l=n.map(function(e){return l[h(l,e)]});break;case"number":for(var i=h(l,arguments[0]),a=h(l,arguments[1])||l.length-1||0,u=arguments[2]||1,o=[],s=[],c=i;c<=a;c+=u)o.push(l[c]),s.push(c);l=o;break;case"function":var f=arguments[0];l=r?l.map(f):f(l)}return Array.isArray(l)&&(l=l.filter(function(e){return null!=e})),1===l.length&&(l=l.pop()),e}}}}),p("pico/obj",function(){var h=["object","function"],p=["constructor"],c=[!0,!1,1,0,null];function f(e,r,t){if(!Array.isArray(r))return l(e,r,t);if(e){for(var n,i,a=0;i=r[a];a++)if(t&&t.push({}),n=l(e,i,t&&t[a]))return[a,n].join(".")}else t&&Array.prototype.push.apply(t,r)}function l(e,r,t){if(Array.isArray(r))return f(e,r,t);for(var n,i,a,u,o=Object.keys(e),s=0;u=o[s];s++){if(n=e[u],null==(i=r[u])&&n.required)return u;switch(n.type||n){case"string":if(!i.charAt)return u;t&&(t[u]=i);break;case"number":if(i=parseFloat(i),!isFinite(i))return u;t&&(t[u]=i);break;case"boolean":if(!c.includes(i))return u;t&&(t[u]=!!i);break;case"object":if(!(i instanceof Object)||Array.isArray(i))return u;if(t&&(t[u]={}),n.spec){if(a=l(n.spec,i,t&&t[u]))return[u,a].join(".")}else t&&Object.assign(t[u],i);break;case"array":if(!(i instanceof Object&&Array.isArray(i)))return u;if(t&&(t[u]=[]),a=f(n.spec,i,t[u]))return[u,a].join(".");break;case"null":if(null!==i)return u;t&&(t[u]=null);break;default:return u}}}return{extend:function e(r,t,n){var i=h.indexOf(typeof r),a=h.indexOf(typeof t);if(1===i&&(i=h.indexOf(typeof r.__proto__)),1===a&&(a=h.indexOf(typeof t.__proto__)),!r||null===t||-1===a&&a===i)return void 0===t?r:t;if(1===a)return a===i&&(t.prototype=r),t;var u,o,s=(n=n||{}).tidy;if(Array.isArray(t))if(n.mergeArr){var c,f,l={};for(c=0,f=(r=r||[]).length;c<f;c++)void 0===(o=r[c])&&s||(l[o]=o);for(c=0,f=t.length;c<f;c++)void 0===(o=t[c])&&s||(l[o]=o);for(u in r=[],l)r.push(l[u])}else r=t;else for(u in r=r||{},t)o=t[u],~p.indexOf(u)||void 0===o&&s||(r[u]=e(r[u],o,n));return r},extends:function(e,r,t){for(var n,i=this.extend,a=0;n=r[a];a++)e=i(e,n,t);return e},parseInts:function(e,r){for(var t=0,n=e.length;t<n;t++)e[t]=parseInt(e[t],r);return e},pluck:function(e,r){var t=[];if(e.length){var n,i,a,u,o,s={};for(a=0,u=e.length;a<u;a++)(n=e[a])&&void 0!==(i=n[r])&&(s[i]=i);for(o in s)t.push(s[o])}return t},dot:function e(r,t,n){if(!t||!t.length)return r;var i,a=t.shift();if(Array.isArray(a))for(var u,o=0;(u=a[o])&&!(i=r[u]);o++);else i=r[a];return i?e(i,t,n):n},validate:l}}),p("pico/str",function(){var e=Math.random;function u(e){var r=e.search(/[#:%][a-zA-Z]/);switch(r){case-1:case 0:return e}return[e.substring(0,r),e.substr(r)]}function a(t,n,i){if(!t.length)return i(null,n);!function e(r,t,n,i){var a=r.indexOf("/",t);if(-1===a)return n.push(u(r.substring(t))),i(null,n);n.push(u(r.substring(t,a))),e(r,a+1,n,i)}(t.shift(),0,[],function(e,r){if(e)return i(e);n.push(r),a(t,n,i)})}function o(e,r,t,n,i){switch(e[0]){default:return e===r;case"%":i[e.substr(1)]=parseFloat(r);break;case":":i[e.substr(1)]=r;break;case"#":i[e.substr(1)]=t.slice(n).join("/")}return!0}function s(e,r,t){if(e.length<r.length)return!1;for(var n,i,a=0,u=r.length;a<u;a++)if(i=r[a],n=e[a],Array.isArray(i)){if(0!==n.indexOf(i[0]))return!1;if(!o(i[1],n.substr(i[0].length),e,a,t))return!1}else if(!o(i,n,e,a,t))return!1;return e.splice(0,u),!0}function c(e,r,t,n,i,a){if(r.length<=t)return e;var u=r[t++];if(!u.charAt)return c(c(e+i,u,0,n,"",a),r,t,n,i,a);if(1<u.length)switch(u.charAt(0)){case"%":case":":case"#":if(!(u=n[u.slice(1)]))return a?"":e}return c(e+=i+u,r,t,n,i,a)}return{codec:function(e,r){for(var t,n=0,i="";t=r.charCodeAt(n);n++)i+=String.fromCharCode(t^e);return i},hash:function(e){for(var r,t=0,n=0;r=e.charCodeAt(t);t++)n=(n<<3)-n+r|0;return n},rand:function(){return e().toString(36).substr(2)},pad:function(e,r,t){return this.tab(e,r,t)+e},tab:function(e,r,t){var n=r-String(e).length+1;return Array(0<n?n:0).join(t||"0")},template:function(e){for(var r,t=/<%(.+?)%>/g,n=/(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,i="var r=[];\n",a=0,u=function(e,r){return i+=r?e.match(n)?e+"\n":"r.push("+e+");\n":""!==e?'r.push("'+e.replace(/"/g,'\\"')+'");\n':"",u};r=t.exec(e);)u(e.slice(a,r.index))(r[1],!0),a=r.index+r[0].length;return u(e.substr(a,e.length-a)),function(r){return function(e){return r(N,e)}}(new Function("pico","d",(i+'return r.join("");').replace(/[\r\t\n]/g," ")))},compileRest:function(e,t){return t=t||[],-1===e.search(/[|#:%][a-zA-Z]/)||a(e.split("|"),[e],function(e,r){if(e)throw e;t.push(r)}),t},execRest:function(e,r,t){for(var n,i,a,u=e.split("/"),o=0;n=r[o];o++)if(s(u,n[1],t)){for(i=2;(a=n[i])&&s(u,a,t);i++);return n[0]}return null},buildRest:function(e,r,t,n){for(var i,a,u=0;a=r[u];u++)if(e===a[0]){i=a;break}if(!i)return e;var o,s=c("",i[1],0,t,"/",!0);if(!s)return!1;for(u=2;o=i[u];u++)s=c(s,o,0,t,"/");return(n||1===s.indexOf("http"))&&(s=s.slice(1)),!~s.search(/[#%][a-zA-Z]/)&&s}}}),p("pico/time",function(){var a=Math.max,u=Math.min,y=Math.floor,o=Math.ceil,s=function(e,r){return(e-r)/864e5},c=function(e,r,t){var n=r?1:0,i=new Date(e.getFullYear()+(t||0),0,1),a=(7-i.getDay())%7+n,u=s(e,i);return a<u?o((u-a)/7):c(e,r,-1)},p=function(e,r,t){var n=e.split("/"),i=n[0];return"*"===i?n[0]=r:(i=parseInt(i),i=a(r,i),i=u(t,i),n[0]=i),1===n.length?n.push(0):n[1]=parseInt(n[1]),n},f=function(e,r,t){if("*"===e)return 0;for(var n,i,a,u,o,s,c,f=[],l=e.split(","),h=0;n=l[h];h++)if(a=n.split("-"),u=p(a[0],r,t),1!==a.length)if(o=p(a[1],r,t),i=u[0],s=o[0],c=o[1]||1,s<i)for(;s<=i;i-=c)f.push(i);else for(;i<=s;i+=c)f.push(i);else if(c=u[1])for(i=u[0];i<=t;i+=c)f.push(i);else f.push(u[0]);return f.sort(function(e,r){return e-r}),f},m=function(e,r,t){if(!r)return e;if(a.apply(Math,r.concat(e))===e)return e+(t-e)+u.apply(Math,r);for(var n=0,i=r.length;n<i;n++)if(r[n]>=e)return r[n];console.error("not suppose to be here",e,r,t)},b=function(e,r,t,n,i,a,u,o,s){if(3<r++)return s(0);var c=m(e.getMinutes(),t,60),f=m(e.getHours()+y(c/60),n,24),l=e.getDate(),h=e.getMonth(),p=e.getFullYear(),d=new Date(p,h,0).getDate();if(u){var g=e.getDay()+y(f/24);l+=m(g,u,7)-g}else l=m(l+y(f/24),i,d);if(h=m(h+1+y(l/d),a,12),e.getMonth()+1!==h)return b(new Date(p,h-1),r,t,n,i,a,u,o,s);if(p=m(p+y((h-1)/12),o,0),e.getFullYear()!==p)return b(new Date(p,h-1),r,t,n,i,a,u,o,s);var v=new Date(p,(h-1)%12).getTime();return v+=864e5*(l%d-1),v+=f%24*36e5,s(v+=c%60*6e4)};return{parse:function(e){var r=e.split(" ");if(r.length<6)return 0;var t=f(r[0],0,59);if(null==t)return 0;var n=f(r[1],0,23);if(null==n)return 0;var i=f(r[2],1,31);if(null==i)return 0;var a=f(r[3],1,12);if(null==a)return 0;var u=f(r[4],0,6);if(null==u)return 0;var o=f(r[5],1975,2075);return null==o?0:[t,n,i,a,u,o]},nearest:function(e,r,t,n,i,a,u){return u=u||Date.now(),b(new Date(u+9e4),0,e,r,t,n,i,a,function(e){return e})},daynum:s,weeknum:c,day:function(e,r){var t=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate(),12,0,0)-e;return 0<=n&&n<=1296e5||n<=0&&-1296e5<n?t.getDate()===e.getDate()?"Today":e<t?"Yesterday":"Tomorrow":(r=r||"en-US",t.getFullYear()===e.getFullYear()&&c(t)===c(e)?e.toLocaleDateString(r,{weekday:"long"}):e.toLocaleDateString(r,{weekday:"short",month:"short",day:"numeric"}))}}}),p("pico/web",function(e,r,t,n,i,c){var p=r("pico/json"),d=Math.abs,a=Math.floor,u=Math.random,f=!0,o=function(e){e&&console.error(e)},g=function(e,r,t){e.append(r,t)},v=function(e,r,t){e[r]=t},y=function(i,a){a=a||o,c.ajax("get",i.url,null,null,function(e,r,t){if(4===r){if(e)return a(e);var n=parseInt(t);if(isNaN(n))return a("invalid timesync response");i.serverTime=n,i.serverTimeAtClient=Date.now(),a()}})},l=function(e,r,t,n){switch(e&&4===r&&y(n),r){case 2:n.head=null,n.currPT=1,n.resEndPos=0}if(t){var i,a=n.resEndPos,u=-1,o=n.delimiter,s=o.length,c=n.body;try{for(;-1!==(u=t.indexOf(o,a));){switch(n.currPT){case 1:n.head=JSON.parse(t.substring(a,u)),c.length=0,n.currPT=2;break;case 2:c.push(t.substring(a,u))}if((i=n.head)&&i.len===c.length){if(n.currPT=1,i.resId&&n.request("ack",{resId:i.resId}),!i.reqId)return void console.error("incomplete response header: "+JSON.stringify(i));if(n.cullAge&&n.cullAge<d(n.getServerTime()-i.date))return void console.error("invalid server time: "+JSON.stringify(i)+" "+d(n.getServerTime()-i.date));if(n.secretKey&&c.length){for(var f=CryptoJS.algo.HMAC.create(CryptoJS.algo.MD5,n.secretKey+i.date),l=0,h=c.length;l<h;l++)f.update(c[l]);if(i.key!==f.finalize().toString(CryptoJS.enc.Base64))return void console.error("invalid server key: "+JSON.stringify(i))}i.len&&(i.data=p.parse(c,!0)),n.inbox.push(i),n.head=null}a=u+s}}catch(e){console.error(e)}n.resEndPos=4===r?0:a}},m=function(e,r,t,n,i){n=n||"",i=i||"";for(var a,u,o,s,c=e instanceof FormData?g:v,f=r.baseURI,l=0,h=r.elements;s=h[l];l++)if(s.hasAttribute("name"))if("FILE"===(a=s.hasAttribute("type")?s.getAttribute("type").toUpperCase():"TEXT"))for(u=0,o=s.files.length;u<o;c(e,n+s.name,s.files[u++]));else("RADIO"!==a&&"CHECKBOX"!==a||s.checked)&&c(e,n+s.name,s.value);if(t)for(var p in t)c(e,i+p,t[p]);return f=f.substring(0,f.lastIndexOf("/")+1),r.action.substr(f.length)},s=function(e,r){e.url=r.url||e.url,e.secretKey=r.secretKey||e.secretKey,e.cullAge=r.cullAge||e.cullAge,e.delimiter=r.delimiter?JSON.stringify(r.delimiter):e.delimiter};function h(e){if(!e.url)return console.error("url is not set");s(this,Object.assign({cullAge:0,delimiter:["&"]},e)),this.reqId=1+a(1e3*u()),this.inbox=[],this.outbox=[],this.uploads=[],this.callbacks={},this.acks=[],this.reqs=[],this.resEndPos=0,this.head=null,this.body=[],this.currPT=1,this.serverTime=0,this.serverTimeAtClient=0}return h.prototype={beat:function(){if(this.inbox.length)for(var e,r,t,n=this.inbox,i=this.callbacks;t=n.pop();)(r=i[e=t.reqId])&&(delete i[e],r(t.error,t.data));if(f&&(this.uploads.length||this.outbox.length||this.acks.length)){var a=this.uploads,u=this.outbox,o=this.acks;if(a.length)c.ajax("post",this.url,a.shift(),null,l,this);else{var s=this.reqs=o.concat(u);o.length=u.length=0,c.ajax("post",this.url,s.join(this.delimiter)+this.delimiter,null,l,this)}}},reconnect:function(e,r){s(this,e),function(e){e.resEndPos=e.outbox.length=e.acks.length=0,e.currPT=1}(this),y(this,function(e){r(e,this)})},submit:function(e,r,t){if(!("undefined"!=typeof window&&e&&e instanceof HTMLFormElement))return console.error("No HTMLFormElement submitted");var n=0;t&&(n=this.reqId++,this.callbacks[n]=t);var i=new FormData;i.append("api",m(i,e,r,"data/","cred/")),i.append("reqId",n),this.uploads.push(i)},request:function(e,r,t,n){switch(arguments.length){case 2:r instanceof Function&&(n=r,r=t=void 0);break;case 3:t instanceof Function&&(n=t,t=void 0);break;case 4:break;default:return console.error("wrong request params!")}if("undefined"!=typeof window&&r instanceof HTMLFormElement){var i={};e=m(i,r),r=i}if(!e)return console.error("Missing api,  data["+JSON.stringify(r)+"]");var a=this.acks;if("ack"!==e&&(a=this.outbox).length){var u=a.shift();-1===u.indexOf(e)&&a.unshift(u)}var o=0;n&&(o=this.reqId++,this.callbacks[o]=n);var s=r?p.stringify(r,!0):[];if(s.unshift(JSON.stringify(t)),s.length&&this.secretKey){for(var c=this.getServerTime(),f=CryptoJS.algo.HMAC.create(CryptoJS.algo.MD5,this.secretKey+c),l=0,h=s.length;l<h;l++)f.update(s[l]);s.unshift(JSON.stringify({api:e,reqId:o,len:s.length,date:c,key:f.finalize().toString(CryptoJS.enc.Base64)}))}else s.unshift(JSON.stringify({api:e,reqId:o,len:s.length}));a.push(s.join(this.delimiter))},getServerTime:function(){return this.serverTime+(Date.now()-this.serverTimeAtClient)},test:function(e){y(this,e)}},{create:function(e,r){var t=new h(e);return y(t,function(e){r&&r(e,t)}),t},online:function(){f=!0},offline:function(){f=!1}}})}).apply(null,"object"==typeof module?[module,"exports",require]:[window,"pico"]);
//# sourceMappingURL=bin/pico.min.js.map;
pico.define('p/make',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
var specMgr=require('p/specMgr')
var Min = Math.min
var map = {}

return {
	define: function(type, path, args, cb){
		require(path, (err, C) => {
			if (err) return cb(err)
			map[type] = [C, args]
			cb()
		})
	},
	run: function(ctx, name, type, params, rawSpec, klass, cb){
		var _arguments = arguments
		specMgr.load(ctx, params, rawSpec, function(err, spec){
			if (err) return cb(err)

			var cargs = map[type]
			if (!cargs) return cb(null, spec)

			var C = klass ? cargs[0].extend(klass) : cargs[0]
			var args = cargs[1].map(a => {
				return a.charAt ? specMgr.find(a, spec)	: _arguments[Min(a, 2)]
			})

			var inst = Object.create(C.prototype)
			C.apply(inst, args)
			cb(null, inst)
		})
	}
}
//# sourceURL=p/make
})
pico.define('p/specMgr',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
var
	ID=0,TYPE=1,VALUE=2,EXTRA=3,
	ERR1='ref of REF not found',ERR2='record RECORD of ref of REF not found',
	extOpt={mergeArr:1},
	pObj=require('pico/obj'),
	make=require('p/make'),
	create = function(id, type, value, extra){
		return Array.prototype.slice.call(arguments)
	},
	getId = function(spec){
		return spec[ID]
	},
	getType = function(spec){
		return spec[TYPE]
	},
	getValue = function(spec){
		return spec[VALUE]
	},
	getExtra = function(spec,idx){
		return spec[EXTRA+(idx||0)]
	},
	find = function(id, list, all){
		for(var i=0,o; (o=list[i]); i++){
			if (id === o[ID]) return all?o:o[VALUE]
		}
	},
	findAll = function(cond, list, by, all){
		var arr = []
		for(var i=0,o; (o=list[i]); i++){
			if (cond === o[by]) arr.push(all?o:o[VALUE])
		}
		return arr
	},
	spec2Obj=function(spec){
		var obj={}
		for(var i=0,s; (s=spec[i]); i++){
			obj[s[ID]]=s[VALUE]
		}
		return obj
	},
	loadDeps = function(links, idx, cb, klass){
		if (!links || links.length <= idx) return cb(null, klass)
		if (links.charAt) return require(links, cb)
		require(links[idx++], function(err, mod){
			if (err) return cb(err)
			loadDeps(links, idx, cb, pObj.extend(klass || {}, mod, extOpt))
		})
	},
	load = function(ctx, params, spec, idx, deps, cb, userData){
		if (spec.length <= idx) return cb(null, deps, params, userData)
		var s = spec[idx++]
		var t = s[TYPE]
		var f

		switch(t){
		case 'ref': //ID[id] TYPE[ref] VALUE[orgId]
			f = find(s[VALUE], ctx, true)
			if (!f) return cb(ERR1.replace('REF', s[VALUE]), deps, params, userData)
			deps.push(create(s[ID], f[TYPE], f[VALUE]))
			break
		case 'refs': // ID[id] TYPE[refs] VALUE[orgType]
			Array.prototype.push.apply(deps, findAll(s[VALUE], ctx, TYPE, 1))
			break
		case 'type':
			return make.define(s[ID], s[VALUE], s[EXTRA], function(){
				load(ctx, params, spec, idx, deps, cb, userData)
			})
		case 'model':
			f = find(s[VALUE], ctx, true)
			if (!f) return cb(ERR1.replace('REF', s[VALUE]), deps, params, userData)
			var e = s[EXTRA]
			e = 'string' === typeof e ? e : params[e]
			var m = 'string' === typeof e ? f[VALUE].get(e) : f[VALUE].at(e)
			if (!m) return cb(ERR2.replace('REF', s[VALUE]).replace('RECORD',e), deps, params, userData)
			deps.push(create(s[ID], t, m))
			break
		case 'ctrl':
		case 'view': // ID[id/path] TYPE[ctrl/view] VALUE[spec] EXTRA[path/path+mixins]
			f=s[ID]
			return loadDeps(s[EXTRA]||f, 0, function(err, klass){
				if (err) return cb(err, deps, params, userData)
				deps.push(create(f, t, s[VALUE], klass))
				load(ctx, params, spec, idx, deps, cb, userData)
			})
		case 'file': // ID[id] TYPE[file] VALUE[path]
			return require(s[VALUE], function(err, mod){
				if (err) return cb(err, deps, params, userData)
				deps.push(create(s[ID], t, mod, s[VALUE]))
				load(ctx, params, spec, idx, deps, cb, userData)
			})
		case 'param': // ID[id] TYPE[param] VALUE[index]
			deps.push(create(s[ID], t, params[s[VALUE]]))
			break
		case 'time':
		case 'date':
		case 'datetime': // ID[id] TYPE[date/datetime] VALUE[unixtime/time in string]
			deps.push(create(s[ID], t, new Date(s[VALUE])))
			break
		case 'int': // ID[id] TYPE[int] VALUE[number or number in string]
			deps.push(create(s[ID], t, parseInt(s[VALUE])))
			break
		case 'list': // ID[id] TYPE[list] VALUE[array]
		case 'text': // ID[id] TYPE[text] VALUE[string]
			deps.push(create(s[ID], t, s[VALUE]))
			break
			// ID[id] TYPE[models|phttp|sse] VALUE[options] EXTRA[mixin]
		default: // s[ID], t, s[VALUE]
			return loadDeps(s[EXTRA],0,function(err,klass){
				f=s[ID]
				make.run(deps, f, t, params, s[VALUE], klass, function(err, instance){
					deps.push(create(f, t, instance))
					load(ctx, params, spec, idx, deps, cb, userData)
				})
			})
		}
		load(ctx, params, spec, idx, deps, cb, userData)
	},
	// need to get original spec, the one before spec.load, no way to diff ref and models
	unload = function(rawSpec, spec){
		if (!spec || !spec.length) return
		var j,s
		for(var i=0,r; (r=rawSpec[i]); i++){
			switch(r[TYPE]){
			case 'models':
			case 'stream':
				for(j=0; (s=spec[j]); j++){
					if (r[ID] === s[ID]) {
						switch(s[TYPE]){
						case 'models': s[VALUE].reset(); break
						case 'stream': s[VALUE].close(); break
						}
					}
				}
				break
			}
		}
		for(j=0; (s=spec[j]); j++){
			switch(s[TYPE]){
			case 'worker': s[VALUE].close(); break
			}
			delete s[VALUE]
		}
		spec.length = 0
	}

return {
	load:function(host, params, spec, cb, userData){
		if (!spec || !spec.length) return cb(null, spec, params, userData)
		load(host?host.spec||host:[], params, spec, 0, [], cb, userData)
	},
	unload:unload,
	find:find,
	findAllById: function(cond, list, all){
		return findAll(cond, list, ID, all)
	},
	findAllByType:function(cond, list, all){
		return findAll(cond, list, TYPE, all)
	},
	spec2Obj:spec2Obj,
	create:create,
	getId:getId,
	getType:getType,
	getValue:getValue,
	getExtra:getExtra,
	getViewOptions:function(spec){
		var opt=find('options',spec)
		if (!opt || !opt.els) return opt
		var paneId=find('paneId',spec)||0
		opt.el=opt.els[paneId]
		return opt
	}
}
//# sourceURL=p/specMgr
})
pico.define('po/Callback',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
var ALL='*'

function off(slot, cb, ctx){
	if (!slot) return
	for(var i=0,s; (s=slot[i]); ){
		if ((!cb || cb===s[0]) && (!ctx || ctx===s[1])) slot.splice(i,1)
		else i++
	}
}

function Callback(){
	this.slots={}
	this.states={}
}

Callback.prototype = {
	on:function(key, cb, ctx){
		if (!cb) return
		var slot=this.slots[key] || []
		slot.push([cb,ctx])
		this.slots[key]=slot

		var args = this.states[key]
		if (args) this.trigger.apply(this, args)
	},
	off:function(key, cb, ctx){
		var slots=this.slots
		if (key){
			this.toggle(key, false)
			off(slots[key], cb, ctx)
		}else{
			this.states = {}
			for (key in slots){
				off(slots[key], cb, ctx)
			}
		}
	},
	trigger:function(key){
		var i,s
		var slot=this.slots[key]
		if (slot) for(i=0; (s=slot[i]); i++) s[0].apply(s[1], arguments)
		slot=this.slots[ALL]
		if (slot) for(i=0; (s=slot[i]); i++) s[0].apply(s[1], arguments)
	},
	toggle:function(key, state){
		if (state){
			var args = Array.prototype.slice.call(arguments, 2)
			var oldState = this.states[key]
			this.states[key] = [key].concat(args)
			if (!oldState) this.trigger(key)
		}else{
			this.states[key] = void 0
		}
	}
}

return Callback
//# sourceURL=po/Callback
})
pico.define('po/Module',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
var pStr=require('pico/str')
var Callback=require('po/Callback')
var INVALID_NAME=/[^a-zA-Z0-9 -]/g
function createListener(des){
	return function (e){
		var devts=des[e.type]
		if (!devts || !devts.length) return
		for(var i=0,d,target,query; (d=devts[i]); i++){
			(target=e.target) && target.closest && (query=d[2]) && (target=target.closest(query))
			target && d[1].call(d[0],e,target)
			target = void 0
			if (e.cancelBubble) break
		}
	}
}
var globalEvents={}
var onGlobalEvent=createListener(globalEvents)
function listen(self,el,des,onEvent,action,query,cb){
	var devts=des[action]=des[action]||[]
	devts.push([self,cb,query])
	el.addEventListener(action,onEvent)
}
function unlisten(self,el,des,onEvent){
	var keys=Object.keys(des)
	var list,i,l
	for(var j=0,k; (k=keys[j]); j++){
		list=des[k]
		for(i=0; (l=list[i]);){
			if (self===l[0]) list.splice(i,1)
			else i++
		}
		if (!list.length){
			el.removeEventListener(k,onEvent)
			delete des[k]
		}
	}
}
function delegate(evts){
	var el=this.el
	evts=evts||this.events
	if (!el || !evts) return
	var des=this.domEvents
	var sidx,action
	for(var evt in evts){
		sidx=evt.indexOf(' ')
		if (-1===sidx) sidx=evt.length
		action=evt.substr(0,sidx)
		if (!action) continue
		if (97	<= action.charCodeAt())
			listen(this,el,des,this.onEvent,action,evt.substr(sidx+1),evts[evt])
		else
			listen(this,window,globalEvents,onGlobalEvent,action.toLowerCase(),evt.substr(sidx+1),evts[evt])
	}
}
function undelegate(){
	unlisten(this,this.el,this.domEvents,this.onEvent)
	unlisten(this,window,globalEvents,onGlobalEvent)
}

function start(opt){
	this.domEvents={}
	this.onEvent=createListener(this.domEvents)
	this.el=this._el=__.dom.get(opt)
	delegate.call(this)
	this._opt=opt
}
function stop(){
	this._removed = 1
	this.callback.off()
	if (this._el) {
		undelegate.call(this)
		__.dom.forget(this._el, this._opt)
		this.domEvents = this.onEvent = this._el = this.el = this._opt=void 0
	}
}
function Module(name){
	this.id='M'+pStr.rand()
	this.name=(name && name.toString().replace(INVALID_NAME,'-'))||this.id
	this.callback=new Callback
}

// options: el,id,className,tagName,attributes
Module.prototype={
	// to be overriden
	start:start,
	stop:stop,

	setElement:function(el){
		undelegate.call(this)
		this.el=el
		delegate.call(this)
	},


	delegateEvents:function(evt){
		!evt && undelegate.call(this)
		delegate.call(this, evt)
	},
	undelegateEvents:undelegate
}

return Module
//# sourceURL=po/Module
})
pico.define('p/sigslot',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
var specMgr=require('p/specMgr')
var evts=[]
var middlewares=[]

function addMW(arr){
	for(var i=0,a; (a=arr[i]); i++){
		middlewares.push(specMgr.getValue(a))
	}
}
function applyMW(mws,evt,args,cb){
	if (!mws.length) return cb(evt,args)
	var mw=mws.shift()
	var next=function(evt,args){
		if (!evt) return cb(evt,args)
		applyMW(mws,evt,args,cb)
	}
	if (mw instanceof Function) mw(evt,args,next)
	else if (mw.run) mw.run(evt,args,next)
	else applyMW(mws,evt,args,cb)
}
function sigslot(self, def){
	var signals = {}

    ;(self.signals||[]).concat(def||[]).forEach(function(evt){
		var sender = this
		signals[evt] = function(){
			return {
				args: Array.prototype.slice.call(arguments),
				sender: sender,
				evt: evt,
				mws:[],
				queue: false,
				run:run,
				send: proc,
				sendNow: procNow
			}
		}
	}, self)

	self.callback.on('*', recv, self)

	return signals
}
function remove(signals){
	var keys = Object.keys(signals)
	var signal
	keys.forEach(function(key){
		signal = signals[key]()
		signal.args.length = 0
		signal.mws.length = 0
		delete signals[key]
	})
}
function run(mw){
	if (mw instanceof Function)this.mws.push(mw)
	else if (mw.length) Array.prototype.push.apply(this.mws,mw)
	return this
}
function proc(a, next){
	var self=this
	applyMW(this.mws.concat(middlewares),this.evt,this.args,function(evt,args){
		if (!evt) return console.warn(self.evt,'signal aborted',args)
		self.evt=evt
		self.args=args
		;(next || send).call(self,a)
	})
}
function procNow(a){
	proc.call(this, a, dispatch)
}
function send(a, from){
	if (this.sender._removed) return
	this.queue=true
	evts.push([this, a, from||this.sender])
}
function recv(evt, from, params){
	var func = this.slots[evt]
	var forward = true

	if (func) forward = func.apply(this, [from, params.sender].concat(params.args))
	if (from===this) return // prevent trigger twice from extra 'from'
	if (forward) (params.queue?send:dispatch).call(params, [from,this], this)
}
function dispatch(a, from){
	if (this.sender._removed) return
	from=from||this.sender

	var isArr=Array.isArray(a)
	if (!isArr && a) return a.callback.trigger(this.evt, from, this)

	var host = from.host
	var modules = from.modules.concat(host ? [host,from] : [from]) //extra 'from' for mixin

	var i, m
	if (isArr){
		for(i=0; (m=modules[i]); i++) if (-1 === a.indexOf(m)) m.callback.trigger(this.evt, from, this)
	}else{
		for(i=0; (m=modules[i]); i++) m.callback.trigger(this.evt, from, this)
	}
}

this.update= function(){
	for(var i=0,l=evts.length,e; i<l; i++){
		e=evts.shift()
		dispatch.call(e[0], e[1], e[2])
	}
}

return {
	create:sigslot,
	remove:remove,
	addMiddleware:addMW
}
//# sourceURL=p/sigslot
})
pico.define('p/Ctrl',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
var STD_SIGNALS=['moduleAdded']
var REFS='refs'
var Module=inherit('po/Module')
var specMgr = require('p/specMgr')
var sigslot= require('p/sigslot')

function refs(id,spec,rawSpec){
	var ret={}
	var i,s,t,l
	for(i=0, l=rawSpec.length; i < l; i++){
		if (!(s = rawSpec[i])) continue
		if(REFS===specMgr.getType(s) && id===specMgr.getId(s)){
			t=specMgr.getValue(s)
			break
		}
	}
	if (!t) return ret
	for(i=0, l=spec.length; i < l; i++){
		if (!(s = spec[i])) continue
		if(t===specMgr.getType(s)){
			ret[specMgr.getExtra(s)||specMgr.getId(s)]=specMgr.getValue(s)
		}
	}
	return ret
}

function specLoaded(err, spec, params, userData){
	if (err) return console.error(err)

	var self = userData[0]
	var host = self.host

	host.modules && host.modules.push(self)

	self.initialize(spec, params)

	var _el = self._el
	if (_el){
		host.el && !_el.parentElement && host.el.appendChild(_el)
		self.el = self.render()
	}

	var chains = userData[1]

	if (!chains) return
	if (2 === chains.length) {
		var cb = chains[0]
		return cb && cb()
	}
	host.spawn(chains.shift(), params, chains[chains.length-1], chains)
}

function Ctrl(name, specRaw, params, host, chains){
	Module.call(this, name)

	this._specRaw = specRaw
	this.host = host
	this.modules = []
	this.super = Ctrl.prototype
	this.signals = sigslot.create(this, STD_SIGNALS)

	host && specMgr.load(host, params||null, specRaw, specLoaded, [this, chains])
}

Ctrl.prototype = {
	initialize: function(spec, params, cb){
		this.spec = spec

		var deps = {}
		var d = this.deps || {}

		for(var i=0,keys=Object.keys(d),s,k,v; (k=keys[i]); i++){
			v=d[k]
			v=Array.isArray(v) ? v : [v]
			switch(v[0]){
			case REFS:
				deps[k]=refs(k,spec,this._specRaw)
				break
			case 'ctrl':
			case 'view':
				deps[k]=specMgr.find(k, spec, true)
				break
			default:
				s=specMgr.findAllById(k, spec)
				if (1 === s.length){
					deps[k]=s[0]
				} else if (!s.length){
					deps[k]=v[1]
				} else{
					deps[k] = s
				}
				break
			}
		}
		this.deps = deps

		this.create(deps, params, cb)
	},
	create: function(deps, params, cb){
		this.spawnBySpec(this.spec, params, [], cb)
	},
	remove: function(){
		sigslot.remove(this.signals)
		this.clear()
		this.signals = this.deps = this.spec = this._specRaw = void 0
	},
	clear: function(){
		var ms = this.modules
		for (var i=0,m; (m=ms[i]); i++){
			m.remove()
		}
		ms.length = 0
	},
	spawn: function(Mod, params, extraSpec, chains){
		if (!Mod || !Mod.length) return

		return new (Ctrl.extend(specMgr.getExtra(Mod)))(
			specMgr.getId(Mod),
			(extraSpec||[]).concat(specMgr.getValue(Mod)||[]),
			params,
			this,
			chains instanceof Function ? [chains, extraSpec] : chains
		)
	},
	spawnBySpec: function(spec, params, extraSpec, cb, list){
		list = (list || []).concat(specMgr.findAllByType('ctrl', spec, true))
		if (!list.length) return  cb && cb()
		list.push(cb, extraSpec)
		return this.spawn(list.shift(), params, extraSpec, list)
	},
	slots: {
	}
}

return Ctrl
//# sourceURL=p/Ctrl
})
pico.define('p/View',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
var Ctrl = inherit('p/Ctrl')
var specMgr = require('p/specMgr')

function style(csss){
	if (!csss) return csss
	var obj = {}
	for (var i = 0, css; (css = csss[i]); i++){
		obj[specMgr.getExtra(css)] = specMgr.getValue(css)
	}
	return obj
}

function setContentToFirstChild(opt, content){
	if (!content) return
	if (Array.isArray(opt.content)) return setContentToFirstChild(opt.content[0], content)
	opt.content = content
}

function View(name, specRaw, params, host, chains){
	Ctrl.apply(this, arguments)

	this.super = View.prototype
}

View.prototype = {
	initialize: function(spec, params, cb){
		var opt = specMgr.getViewOptions(spec)
		// view must contain an options
		if (!opt){
			opt = {}
			spec.push(['options','map',opt])
		}
		// override content with html spec if any
		setContentToFirstChild(opt, specMgr.find('html',spec))

		var css = specMgr.findAllById('css',spec,true)
		opt.style = style(css)

		this.start(opt)

		Ctrl.prototype.initialize.apply(this, arguments)
	},
	remove: function(){
		Ctrl.prototype.remove.call(this)
		this.stop()
	},
	render: function(){
		return this.el
	},
	spawn: function(Mod, params, extraSpec, chains){
		if (!Mod || !Mod.length) return

		if ('ctrl' === specMgr.getType(Mod)) return Ctrl.prototype.spawn.apply(this, arguments)

		return new (View.extend(specMgr.getExtra(Mod)))(
			specMgr.getId(Mod),
			(extraSpec||[]).concat(specMgr.getValue(Mod)),
			params,
			this,
			chains instanceof Function ? [chains, extraSpec] : chains
		)
	},
	spawnBySpec: function(spec, params, extraSpec, cb){
		Ctrl.prototype.spawnBySpec.call(
			this,
			spec,
			params,
			extraSpec,
			cb,
			specMgr.findAllByType('view', spec, true)
		)
	}
}

return View
//# sourceURL=p/View
})
pico.define('cfg/xin.json','[["shared","type","shared",["data","routes","name","options","env"]],["models","type","models",["data","routes","name","options","ums","env"]],["cognito","type","aws/cognito",["company","user","config"]],["s3bucket","type","aws/s3bucket",["ums"]],["body","view",[["options","map",{"el":"body"}],["configRO","shared",[["routes","map",{"read":":DOMAIN/config/mailbox/name/:name"}],["name","text","config"],["options","map",{"idAttr":"name"}],["env","ref","env"]]],["ums","cognito",[["company","text","xin.com"],["env","ref","env"],["user","shared",[["routes","map",{"create":":DOMAIN/user/create"}],["options","map",{"idAttr":"username"}],["env","ref","env"]]],["config","ref","configRO"]]],["bucket","s3bucket",[["ums","ref","ums"]]],["config","models",[["routes","map",{"list":":DOMAIN/config/mailbox","create":":DOMAIN/config/mailbox","read":":DOMAIN/config/mailbox/name/:name","update":":DOMAIN/config/mailbox/:id","delete":":DOMAIN/config/mailbox/name/:name"}],["options","map",{"idAttr":"name"}],["ums","ref","ums"],["env","ref","env"]]],["inbox","models",[["name","text","inbox"],["ums","ref","ums"]]],["mails","models",[["ums","ref","ums"]]],["setting","models",[["name","text","setting"],["ums","ref","ums"],["options","map",{"idAttr":"name"}],["data","list",[{"name":"mailbox","sort":"time","size":25,"index":1,"select":null,"search":null}]]]],["pages","map",{"land":["land/layout","view",[["options","map",{"el":"body","class":"no-skin pos-rel","data":{"spy":"scroll","target":"#menu"}}],["css","file","land/layout.css"],["ums","ref","ums"],["land/navbar","view",[["options","map",{"id":"navbar","class":"navbar navbar-default navbar-fixed-top","content":[{"id":"navbar-container","class":"navbar-container container"}]}],["tpl","file","land/navbar.asp"],["shortcuts","bool",true],["ums","ref","ums"]]],["p/View","view",[["options","map",{"id":"top","class":"main-container"}],["p/View","view",[["options","map",{"tag":"header","class":"jumbotron has-background main-background"}],["html","file","land/hero.html"]]],["p/View","view",[["options","map",{"tag":"section","id":"why","class":"section section-grey","content":[{"class":"container"}]}],["html","file","land/why.html"]]],["p/View","view",[["options","map",{"tag":"section","id":"info","class":"section","content":[{"class":"container"}]}],["html","file","land/info.html"]]],["p/View","view",[["options","map",{"tag":"section","id":"info2","class":"section section-grey","content":[{"class":"container"}]}],["html","file","land/info2.html"]]],["p/View","view",[["options","map",{"tag":"section","id":"info3","class":"section","content":[{"class":"container"}]}],["html","file","land/info3.html"]]],["p/View","view",[["options","map",{"tag":"section","id":"info4","class":"section section-grey","content":[{"class":"container"}]}],["html","file","land/info4.html"]]],["land/footer","view",[["options","map",{"tag":"footer","id":"footer","class":"section","content":[{"class":"container"}]}],["html","file","land/footer.html"]]]]]]],"privacy":["land/layout","view",[["options","map",{"el":"body","class":"no-skin pos-rel","data":{"spy":"scroll","target":"#menu"}}],["css","file","land/layout.css"],["ums","ref","ums"],["land/navbar","view",[["options","map",{"id":"navbar","class":"navbar navbar-default navbar-fixed-top","content":[{"id":"navbar-container","class":"navbar-container container"}]}],["tpl","file","land/navbar.asp"],["ums","ref","ums"]]],["p/View","view",[["options","map",{"id":"top","class":"main-container"}],["p/View","view",[["options","map",{"tag":"section","id":"privacy","class":"section","content":[{"class":"container"}]}],["html","file","land/privacy.html"]]],["land/footer","view",[["options","map",{"tag":"footer","id":"footer","class":"section","content":[{"class":"container"}]}],["html","file","land/footer.html"]]]]]]],"terms":["land/layout","view",[["options","map",{"el":"body","class":"no-skin pos-rel","data":{"spy":"scroll","target":"#menu"}}],["css","file","land/layout.css"],["ums","ref","ums"],["land/navbar","view",[["options","map",{"id":"navbar","class":"navbar navbar-default navbar-fixed-top","content":[{"id":"navbar-container","class":"navbar-container container"}]}],["tpl","file","land/navbar.asp"],["ums","ref","ums"]]],["p/View","view",[["options","map",{"id":"top","class":"main-container"}],["p/View","view",[["options","map",{"tag":"section","id":"privacy","class":"section","content":[{"class":"container"}]}],["html","file","land/terms.html"]]],["land/footer","view",[["options","map",{"tag":"footer","id":"footer","class":"section","content":[{"class":"container"}]}],["html","file","land/footer.html"]]]]]]],"auth":["auth/layout","view",[["options","map",{"el":"body","class":"login-layout"}],["html","file","auth/layout.html"],["css","file","home/layout.css"],["shared","refs","shared"],["models","refs","models"],["ums","ref","ums"],["auth/navbar","view",[["options","map",{"class":"navbar-fixed-top align-right"}],["html","file","auth/navbar.html"]]],["auth/title","view",[["options","map",{"class":"center"}],["tpl","file","auth/title.asp"],["appIcon","text","fa-inbox"],["appName","list",["Kloud","Konsole"]],["companyName","text","Jasa Web Services"]]],["p/View","view",[["options","map",{"class":"space-6"}]]],["auth/modal","view",[["options","map",{"class":"position-relative"}],["tpl","file","auth/modal.asp"],["ums","ref","ums"],["config","ref","configRO"],["enableRegister","bool",true]]]]],"home":["p/View","view",[["options","map",{"el":"body","class":"no-skin"}],["css","file","home/layout.css"],["ums","ref","ums"],["bucket","ref","bucket"],["shared","refs","shared"],["models","refs","models"],["p/View","view",[["options","map",{"id":"navbar","class":"navbar navbar-default ace-save-state","content":[{"id":"navbar-container","class":"navbar-container ace-save-state"}]}],["ums","ref","ums"],["models","refs","models"],["p/View","view",[["options","map",{"tag":"button","id":"menu-toggler","class":"navbar-toggle menu-toggler pull-left","data":{"target":"#sidebar"},"content":[{"tag":"span","class":"icon-bar"},{"tag":"span","class":"icon-bar"},{"tag":"span","class":"icon-bar"}]}]]],["home/navbar-header","view",[["options","map",{"class":"navbar-header pull-left"}],["tpl","file","home/navbar-header.asp"],["icon","text","fa-inbox"],["name","text","Kloud Konsole"]]],["home/navbar-menu","view",[["options","map",{"class":"navbar-header navbar-buttons pull-right","role":"navigation","content":[{"tag":"ul","class":"nav ace-nav"}]}],["ums","ref","ums"],["inbox","ref","inbox"],["home/navbar-menu-content","view",[["options","map",{"tag":"li","class":"light-blue dropdown-modal"}],["tpl","file","home/navbar-menu-content.asp"],["greet","text","Welcome,"],["photo","text","dat/gopal.png"],["icon_right","text","fa-caret-down"],["ums","ref","ums"],["inbox","ref","inbox"],["home/navbar-menu-user","view",[["options","map",{"tag":"ul","class":"user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close"}],["ums","ref","ums"],["inbox","ref","inbox"],["html","file","home/navbar-menu-user.html"]]]]]]]]],["home/main-container","view",[["options","map",{"id":"main-container","class":"main-container ace-save-state"}],["bucket","ref","bucket"],["shared","refs","shared"],["models","refs","models"],["ums","ref","ums"],["menu","models",[["data","list",[{"id":1,"perm":[],"name":"Dashboard","icon":"fa-tachometer","href":"#/dash","shortcut":123},{"id":10,"perm":[0,1],"name":"Mailbox","icon":"fa-inbox","href":"#/dash/mail","shortcut":124},{"id":20,"perm":[1,0],"name":"Settings","icon":"fa-cogs"},{"id":21,"perm":[1,0],"name":"New Email Account","icon":"far fa-plus-square","parent":20,"href":"#/dash/config/mailbox","shortcut":1548192889},{"id":22,"perm":[1,0],"name":"Email Accounts","icon":"far fa-plus-square","parent":20,"href":"#/dash/config/mailboxes","shortcut":15481929889}]]]],["home/sidebar","view",[["options","map",{"id":"sidebar","class":"sidebar responsive ace-save-state"}],["tpl","file","home/sidebar.asp"],["menu","ref","menu"],["config","ref","configRO"]]],["home/main-content","view",[["options","map",{"class":"main-content","content":[{"class":"main-content-inner"}]}],["bucket","ref","bucket"],["shared","refs","shared"],["models","refs","models"],["ums","ref","ums"],["home/breadcrumbs","view",[["options","map",{"id":"breadcrumbs","class":"breadcrumbs ace-save-state"}],["html","file","home/breadcrumbs.html"],["tpl","file","home/breadcrumb.asp"],["ums","ref","ums"],["breadcrumbs","models",[["name","text","breadcrumb"],["ums","ref","ums"]]],["menu","ref","menu"]]],["p/View","view",[["options","map",{"class":"page-content"}],["bucket","ref","bucket"],["shared","refs","shared"],["models","refs","models"],["p/View","view",[["options","map",{"id":"ace-settings-container","class":"ace-settings-container"}],["html","file","home/settings-container.html"]]],["home/page-header","view",[["options","map",{"class":"page-header"}],["tpl","file","home/page-header.asp"]]],["home/page-content","view",[["options","map",{"class":"row","content":[{"class":"col-ex-12"}]}],["bucket","ref","bucket"],["shared","refs","shared"],["models","refs","models"]]]]]]],["p/View","view",[["options","map",{"class":"footer","content":[{"class":"footer-inner","content":[{"class":"footer-content"}]}]}],["html","file","home/footer.html"]]],["home/scrollup","view",[["options","map",{"tag":"a","id":"btn-scroll-up","class":"btn-scroll-up btn btn-sm btn-inverse","href":"#","content":[{"tag":"i","class":"ace-icon fa fa-angle-double-up icon-only bigger-110"}]}]]]]]]],"mailbox":["email/frame","view",[["title","text","Mailbox"],["desc","text","mails from your s3 bucket"],["tpl","file","email/frame.asp"],["bucket","ref","bucket"],["inbox","ref","inbox"],["mails","ref","mails"],["setting","ref","setting"],["email/mailbox","view",[["options","map",{"el":".message-list-container"}],["tpl","file","email/mailbox.asp"],["inbox","ref","inbox"],["setting","ref","setting"]]]]],"mail":["email/mail","view",[["title","text","Mail"],["desc","text","mail"],["tpl","file","email/mail.asp"],["bucket","ref","bucket"],["inbox","ref","inbox"],["mails","ref","mails"],["setting","ref","setting"]]],"config/mailbox":["config/mailbox","view",[["title","text","Config"],["desc","text","create a new mailbox"],["html","file","config/mailbox.html"],["config","ref","config"]]],"config/mailboxes":["config/mailboxes","view",[["title","text","Config"],["desc","text","list of your mailboxes"],["html","file","config/mailboxes.html"],["config","ref","config"]]]}],["routes","map",{"/":["land"],"/privacy":["privacy"],"/terms":["terms"],"/auth":["auth"],"/dash":["home"],"/dash/mail":["home","mailbox"],"/dash/mail/view/:id":["home","mail"],"/dash/config/mailbox":["home","config/mailbox"],"/dash/config/mailbox/:name":["home","config/mailbox"],"/dash/config/mailboxes":["home","config/mailboxes"]}]]]]')
pico.define('cfg/env.json','[["env","map",{"DOMAIN":"https://xin.jasaws.com"}]]')
pico.define('xin',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";

	var specMgr= require('p/specMgr')
	var View= require('p/View')
	var project = require('cfg/xin.json')
	var env = require('cfg/env.json')
	var main

	return function(){
		specMgr.load(null, null, project, function(err, spec){
			if (err) return console.error(err)
			main = new View
			main.spawnBySpec(spec, null, env)
		})
	}
//# sourceURL=xin
})
pico.define('po/Model',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
var Callback=require('po/Callback')
var changes={
	has:function(obj, key){
		return key in obj
	},
	get:function(obj, key){
		return obj[key]
	},
	set:function(obj, key, value){
		var ov=obj[key]
		value = __.escapeXML(value)
		if (value === ov) return false
		obj[key]=value
		if (null == ov){
			obj.callback.trigger('field.add',key,value)
		}else{
			obj.callback.trigger('field.update',key,value,ov)
		}
		return true
	},
	deleteProperty:function(obj, key){
		if (key in obj){
			obj[key] = void 0
			obj.callback.trigger('field.delete',key)
		}
	},
	ownKeys:function(obj){
		return Object.keys(obj)
	},
	defineProperty:function(obj, key, desc){
		if (desc && desc.value){
			return changes.set(obj,key,desc.value)
		}
		return false
	},
	getOwnPropertyDescriptor:function(obj,key){
		var v=obj[key]
		return v ? {
			value: v,
			writable:true,
			enumerable:true,
			configurable:true
		} : void 0
	}
}

return function(obj){
	obj = JSON.parse(__.escapeXML(JSON.stringify(obj))) // let it throw
	Object.defineProperty(obj, 'callback', {
		value: new Callback,
		writable:false,
		enumerable:false,
		configurable:true
	})
	return new Proxy(obj, changes)
}
//# sourceURL=po/Model
})
pico.define('po/Collection',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
var pStr=require('pico/str')
var Model=require('po/Model')
var Callback=require('po/Callback')
var storage=window.localStorage
var dcb=__.dummyCB

var cache = {
	length: function(){
		return storage.length
	},
	key: function(index){
		return storage.key(index)
	},
	get: function(key){
		if (!key) return
		return storage.getItem(key)
	},
	set: function(key, value){
		if (!key) return
		return storage.setItem(key, value)
	},
	remove: function(key){
		if (!key) return
		return storage.removeItem(key)
	},
	clear: function(name){
		if (!name) return storage.clear()
		for(var i=0,k; (k=storage.key(i)); i++){
			if (0 !== k.indexOf(name)) continue
			storage.removeItem(k)
		}
	}
}

function encodeCacheKey(id){
	if (!this.name) return
	return this.name + ':' + (id || '')
}

function decodeCacheKey(key){
	var arr = key.split(':')
	if (arr[0] !== this.name) return
	return arr
}

function parse(res, cb){
	try{
		var obj=JSON.parse(res)
	} catch(ex){
		return cb(ex)
	}
	cb(null,obj)
}

function ajax(method, route, params, cb, coll){
	if (!route) return cb(null,params)
	pico.ajax(method,route,params,null,function(err,state,res){
		if (4!==state) return
		if (err) return cb(err)
		coll.parse(res, cb)
	})
}

function compileRest(routes){
	var rest = []
	for (var i = 0, ks = Object.keys(routes), k; (k = ks[i]); i++){
		pStr.compileRest(routes[k], rest)
	}
	return rest
}
function buildRest(coll, route, params){
	return pStr.buildRest(route, coll.rest, Object.assign({}, params, coll.restParams), coll.relativePath)
}

function populate(coll, id, obj){
	var index = coll.modelIndex
	if (-1 === index.indexOf(id)){
		index.push(id)
		index.sort()
	}
	var model = coll.models[id] = Model(obj)
	model.callback.on('field.add', update, [coll, id])
	model.callback.on('field.update', update, [coll, id])
	model.callback.on('field.delete', update, [coll, id])
	return model
}
function reload(coll){
	var name = coll.name
	var cache = coll.cache
	if (!name || !cache) return
	for(var i=0,key,json,obj; (key=cache.key(i)); i++){
		if (!coll.decodeCacheKey(key)) continue
		try{
			json=cache.get(key)
			obj=JSON.parse(json)
		} catch(ex){
			cache.remove(key)
			continue
		}
		populate(coll, obj[coll.idAttr], obj)
	}
}
function load(coll,models,idx,cb){
	if (models.length <= idx) return cb()
	coll.create(models[idx++],function(err){
		if (err) return cb(err)
		load(coll,models,idx,cb)
	})
}
function set(coll,obj){
	if (!obj) return
	var id=obj[coll.idAttr]
	var evt = 'add'
	var model=coll.models[id]
	if (model){
		evt = 'update'
	}
	model = populate(coll, id, obj)
	coll.callback.trigger(evt,coll,id)
	coll.cache.set(coll.encodeCacheKey(id), JSON.stringify(obj))
	return model
}
function get(coll,id){
	var model=coll.models[id]
	if (model) return model
	var json=coll.cache.get(coll.encodeCacheKey(id))
	if (!json) return
	try {
		return populate(coll, id, JSON.parse(json))
	} catch (ex) {
		return
	}
}
function update(){
	var coll = this[0]
	var id = this[1]
	var model = get(coll, id)
	coll.ajax('put', buildRest(coll, coll.routes.update, model), model, function(err,res){
		if (err) throw err
		coll.callback.trigger('update',coll,id)
		coll.cache.set(coll.encodeCacheKey(id), JSON.stringify(model))
	}, coll)
}
function remove(coll,id){
	if (coll.models[id]){
		var idx=coll.modelIndex.indexOf(id)
		if (~idx){
			var model=coll.models[id]
			model.callback.trigger('delete',model,id)
			coll.callback.trigger('delete',coll,id)
			coll.modelIndex.splice(idx,1)
		}
		coll.models[id] = void 0
	}

	coll.cache.remove(coll.encodeCacheKey(id))
}
function clear(){
	this.modelIndex=[]
	this.models={}
	this.callback.trigger('clear')
	this.cache.clear(this.encodeCacheKey())
}

function Collection(seed, routes){
	this.routes = routes || {}
	this.rest = compileRest(this.routes)
	this.idAttr = 'id'
	this.modelIndex = []
	this.models = {}
	this.callback = new Callback

	this.init.apply(this, Array.prototype.splice.call(arguments, 2))

	reload(this)
	this.load(seed)
}

Collection.prototype={
	// to be overriden
	init:function(name, opt){
		this.name = name || this.name
		opt = opt || {}
		this.idAttr = opt.idAttr || this.idAttr
		this.relativePath = opt.relativePath || false
		this.restParams = opt.restParams || {}
	},
	fini:function(){},

	ajax,
	parse,
	cache,
	encodeCacheKey,
	decodeCacheKey,

	load:function(models,cb){
		cb=cb||dcb
		if (!models) return cb()
		load(this,models,0,cb)
	},
	create:function(model,cb){
		cb=cb||dcb
		var coll=this
		this.ajax('post', buildRest(this, this.routes.create, model), model, function(err,res){
			if (err) return cb(err)
			cb(null,set(coll,res))
		}, coll)
	},
	replace:function(obj, cb){
		cb=cb||dcb

		var coll = this
		coll.ajax('put', buildRest(coll, coll.routes.update, obj), obj, function(err,res){
			if (err) return cb(err)
			cb(null,set(coll,obj))
		}, coll)
	},
	get:function(id){
		return get(this,id)
	},
	read:function(id, cb, force){
		var coll=this
		if (!force){
			var model=get(this,id)
			if (model) return cb(null, model)
		}
		var params={}
		params[this.idAttr]=id
		this.ajax('get', buildRest(this, this.routes.read, params), params, function(err,res){
			if (err) return cb(err)
			cb(null,set(coll,res))
		}, coll)
	},
	// list(cb) // get all cache
	// list([1,4,89],cb) // get specific items, params are id
	// list(1,100,cb) // pagination, params are index instead of id
	list:function(list,cb){
		var coll=this
		var remained=[]
		var models=[]
		var model
		var i, l, id
		switch(arguments.length){
		case 3:
			for(i=arguments[0],l=arguments[1]; i<=l; i++){
				model=get(this,this.modelIndex[i])
				if (model) models.push(model)
				else remained.push(i)
			}
			cb = arguments[2]
			break
		case 2:
			for(i=0; (id=list[i]); i++){
				model=get(this,id)
				if (model) models.push(model)
				else remained.push(id)
			}
			break
		case 1:
			cb = arguments[0]
			list = this.modelIndex

			for(i=0; (id=list[i]); i++){
				models.push(get(this,id))
			}
			break
		default:
			return
		}
		if (!remained.length) return cb(null,models)
		var params={}
		params[this.idAttr]=remained
		this.ajax('get', buildRest(this, this.routes.list, {}), params, function(err,res){
			if (err) return cb(err)
			if (!res || !res.length) return cb()
			for(var i=0,m; (m=res[i]); i++){
				if (~remained.indexOf(m[coll.idAttr])) models.push(set(coll,m))
				else set(coll, m) // in case list return more than needed
			}
			cb(null,models)
		}, coll)
	},
	remove:function(id,cb){
		cb=cb||dcb
		var coll=this
		var params={}
		params[this.idAttr]=id
		this.ajax('delete', buildRest(this, this.routes.delete, params), params, function(err,res){
			if (err) return cb(err)
			cb(null,remove(coll,id))
		}, coll)
	},
	clear:clear,
	filter: function(cb){
		var list = this.modelIndex
		var models = []
		for (var i = 0, model, id; (id = list[i]); i++){
			model = get(this, id)
			if (cb(model, i, id, this)) models.push(model)
		}
		return models
	},
	find: function(cb){
		var list = this.modelIndex
		var model
		for (var i = 0, id; (id = list[i]); i++){
			model = get(this, id)
			if (cb(model, i, id, this)) return model
		}
	},
	forEach: function(cb){
		var list = this.modelIndex
		for (var i = 0, id; (id = list[i]); i++){
			if (cb(get(this, id), i, id, this)) break
		}
	},
	sort: function(cb){
		if (!cb) return
		var coll = this
		this.modelIndex.sort(function(id1, id2){
			return cb(get(coll, id1), get(coll, id2))
		})
	},
	at: function(index){
		if (index < 0) index = this.modelIndex.length + index
		if (index >= this.modelIndex.length) index = index % this.modelIndex.length
		return get(this, this.modelIndex[index])
	},
	indexOf: function(key){
		return this.modelIndex.indexOf(key)
	},
	length: function(){
		return this.modelIndex.length
	}
}

return Collection
//# sourceURL=po/Collection
})
pico.define('shared',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const Collection = inherit('po/Collection')

function ajax(method, route, params, cb){
	if (!route) return cb(null, params)

	const headers = {
		'Content-Type': 'application/json'
	}

	pico.ajax(method, route, params, {headers}, function(err, state, res){
		if (4 !== state) return
		if (err) return cb(err)
		try {
			var obj = JSON.parse(res)
		} catch(ex) {
			return cb(ex)
		}
		cb(null, obj.Contents ? obj.Contents : obj)
	})
}

return {
	init(name, opt, restParams){
		opt = Object.assign({}, opt, {restParams})
		Collection.prototype.init.call(this, name, opt)
	},
	setSelected(key){
		if (!this.name || !this.get(key)) return

		return window.localStorage.setItem('sel:config', key)
	},
	getSelected(){
		const key = window.localStorage.getItem('sel:config')
		return this.get(key)
	},
	ajax,
}
//# sourceURL=shared
})
pico.define('models',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const shared = inherit('shared')

function getAccessToken(ctx, cb){
	if (!ctx.ums) return cb()
	ctx.ums.getAccessToken(cb)
}

function ajax(method, route, params, cb){
	if (!route) return cb(null, params)

	let headers = {
		'Content-Type': 'application/json'
	}

	getAccessToken(this, (err, token) => {
		if (err) return cb(err)
		headers = Object.assign(headers, {
			Authorization: 'Bearer ' + token
		})

		pico.ajax(method, route, params, {headers}, function(err, state, res){
			if (4 !== state) return
			if (err) return cb(err)
			try {
				var obj = JSON.parse(res)
			} catch(ex) {
				return cb(ex)
			}
			cb(null, obj.Contents ? obj.Contents : obj)
		})
	})
}

function encodeCacheKey(id){
	if (!this.name) return
	const uid = this.ums.getId()
	if (!uid) return
	return this.name + ':' + uid + ':' + id
}

function decodeCacheKey(key){
	var arr = key.split(':')
	if (arr[0] !== this.name) return
	if (arr[1] !== this.ums.getId()) return
	return arr
}

return {
	init(name, opt, ums, restParams){
		this.ums = ums
		shared.prototype.init.call(this, name, opt, restParams)
	},
	ajax,
	encodeCacheKey,
	decodeCacheKey,
}
//# sourceURL=models
})
pico.define('aws/cognito',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
// https://github.com/aws-amplify/amplify-js/tree/master/packages/amazon-cognito-identity-js # Use case 32
// https://github.com/aws-amplify/amplify-js/issues/405 # missing credentials in config
const pObj = pico.export('pico/obj')
const Callback = require('po/Callback')

function setAWSConfig(aws, token, cb){
	const region = aws.IdentityPoolId.split(':')[0]
	AWS.config.update({
		region: aws.region,
		credentials: new AWS.CognitoIdentityCredentials({
			IdentityPoolId: aws.IdentityPoolId,
			Logins: {
				[`cognito-idp.${region}.amazonaws.com/${aws.UserPoolId}`]: token
			}
		})
	})
	AWS.config.credentials.get(cb)
}

function refreshToken(user, aws, session, cb){
	const cred = pObj.dot(AWS, ['config', 'credentials'])
	if (cred && !cred.needsRefresh()) return cb(null, session, false)

	user.refreshSession(session.getRefreshToken(), (err, session) => {
		if (err) return cb(err)
		const region = aws.IdentityPoolId.split(':')[0]
		cred.params.Logins[`cognito-idp.${region}.amazonaws.com/${aws.UserPoolId}`] = session.getIdToken().getJwtToken()
		cred.refresh(err => cb(err, session, true))
	})
}

function createUser(ctx, company, accessToken, idToken){
	if (company !== ctx.company0) return
	ctx.user.create({
		company,
		accessToken,
		idToken
	})
}

function readied(ctx, err){
	if (err) console.error(err)
	ctx.callback.toggle('ready', true)
}

function Cognito(company0, user, config){
	this.company0 = company0
	this.user = user
	this.config = config

	this.callback = new Callback

	this.setGroup(config.getSelected() || {})
}

Cognito.prototype = {
	setGroup({name: company, env: aws}){
		if (!company || !aws) return readied(this)
		this.awsConfig = aws
		this.userPool = new AmazonCognitoIdentity.CognitoUserPool({
			UserPoolId: aws.UserPoolId,
			ClientId: aws.ClientId
		})

		const user = this.userPool.getCurrentUser()
		if (!user) return readied(this)

		user.getSession((err, session) => {
			if (err) return readied(this, err)
			if (!session.isValid()) return readied(this)

			setAWSConfig(aws, session.idToken.jwtToken, err => {
				if (err) return readied(this, err)
				refreshToken(user, aws, session, (err, session) => {
					if (err) return readied(this, err)
					createUser(
						this,
						company,
						session.accessToken.jwtToken,
						session.idToken.jwtToken)
					this.callback.trigger('load', this.config)
					readied(this)
				})
			})
		})
	},
	isValid(){
		return !!AWS.config.credentials
	},
	signin(company, Username, Password, cb){
		const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
			Username,
			Pool: this.userPool
		})
		const authDetails = new AmazonCognitoIdentity.AuthenticationDetails({
			Username,
			Password
		})
		cognitoUser.authenticateUser(authDetails, {
			onSuccess: result => {
				const idToken = result.idToken.jwtToken
				setAWSConfig(this.awsConfig, idToken, err => {
					if (err) return cb(err)
					createUser(
						this,
						company,
						result.accessToken.jwtToken,
						idToken)
					this.callback.trigger('load', this.config)
					cb(err)
				})
			},

			onFailure: cb
		})
	},
	signup(company, Username, Password, email, phone, cb){
		const attributes = [
			new AmazonCognitoIdentity.CognitoUserAttribute({
				Name : 'email',
				Value : email,
			}),
			new AmazonCognitoIdentity.CognitoUserAttribute({
				Name : 'phone_number',
				Value : phone
			})
		]

		this.userPool.signUp(Username, Password, attributes, null, (err, result) => {
			if (err) return cb(err)
			if (!result.user || !result.userUnconfirmed) return cb(err, result)
			result.user.getSession((err, session) => {
				if (err) return cb(err)
				if (!session.isValid()) return cb('invalid session')

				setAWSConfig(this.awsConfig, session.getIDToken().getJwtToken(), err => {
					if (err) return cb(err)
					createUser(
						this,
						company,
						session.getAccessToken().getJwtToken(),
						session.getIdToken().getJwtToken()),
					this.callback.trigger('load', this.config)
					cb(null, result)
				})
			})
		})
	},
	signout(){
		AWS.config.credentials = void 0
		const user = this.userPool.getCurrentUser()
		if (!user) return
		user.signOut()
		this.callback.trigger('unload')
	},
	getId(){
		if (!this.userPool) return 0
		const user = this.userPool.getCurrentUser()
		if (!user) return 0
		return user.username || 0
	},
	getAccessToken(cb){
		const user = this.userPool.getCurrentUser()
		if (!user) return cb('invalid userpool')

		user.getSession((err, session) => {
			if (err) return cb(err)
			if (!session.isValid()) return cb('invalid session')

			refreshToken(user, this.awsConfig, session, (err, session, refreshed) => {
				if (err) return cb(err)
				const accessToken = session.getAccessToken().getJwtToken()
				cb(null, accessToken)
				if (!refreshed) return
				const {name:company} = this.config.getSelected()
				createUser(
					this,
					company,
					accessToken,
					session.getIdToken().getJwtToken())
			})
		})
	},
	getProfile(cb){
		const user = this.userPool.getCurrentUser()
		if (!user) return cb('no current user')
		user.getSession((err, session) => {
			if (err) return cb(err)
			user.getUserAttributes((err, result) => {
				if (err) return cb(err)
				const attr = {username: user.username}
				for (let i = 0; i < result.length; i++) {
					attr[result[i].getName()] = result[i].getValue()
				}
				return cb(null, attr)
			})
		})
	}
}

return Cognito
//# sourceURL=aws/cognito
})
pico.define('aws/s3bucket',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
// get html content if possible
function getContent(node, contents, attachments){
	switch(node.contentType.value){
	case 'multipart/mixed':
	case 'multipart/related':
	case 'multipart/alternative':
		node.childNodes.forEach(n => getContent(n, contents, attachments))
		break
	case 'text/plain':
	case 'text/html':
		contents[node.contentType.value] = Array.prototype.slice.call(node.content)
		break
	default:
		attachments.push({
			headers: node.headers,
			content: Array.prototype.slice.call(node.content)
		})
		break
	}
}

function readMails(ctx, list, inbox, mails, cb){
	if (!list || !list.length) return cb()

	const item = list.shift()
	if (inbox.get(item.Key)) return readMails(ctx, list, inbox, mails, cb)
	console.log('reading', item.Key, item.Size)

	ctx.read(item.Key, inbox, mails, err => {
		if (err) return cb(err)
		return readMails(ctx, list, inbox, mails, cb)
	})
}

function list(ctx, params, inbox, mails, cb){
	ctx.ums.getAccessToken(err => {
		if (err) return cb(err)
		ctx.s3.listObjectsV2(params, (err, bucket) => {
			if (err) return cb(err)
			readMails(ctx, bucket.Contents, inbox, mails, err => {
				if (err) return cb(err)
				if (bucket.IsTruncated){
					params.ContinuationToken = bucket.NextContinuationToken
					return list(ctx, params, inbox, mails, cb)
				}
				cb()
			})
		})
	})
}

function S3Bucket(ums){
	this.ums = ums
	ums.callback.on('load', this.init, this)
}

S3Bucket.prototype = {
	init(evt, config){
		if (!config) return
		const selected = config.getSelected()
		if (!selected) return
		const aws = selected.env
		if (!aws) return
		this.s3 = new AWS.S3({apiVersion: '2006-03-01'})
		this.awsConfig = aws
		this.Bucket = aws.Bucket
	},
	list(inbox, mails, cb){
		list(this, {Bucket: this.Bucket}, inbox, mails, cb)
	},
	read(Key, inbox, mails, cb){
		let mail = mails.get(Key)
		if (mail) return cb(null, inbox.get(Key), mail)

		const params = {
			Bucket: this.Bucket,
			Key
		}
		this.ums.getAccessToken(err => {
			if (err) return cb(err)
			this.s3.getObject(params, (err, detail) => {
				if (err) return cb(err)
				try{
					const mimeNode = emailjs.parse(detail.Body)
					const headers = mimeNode.headers
					const attachments = []
					const contents = {}
					getContent(mimeNode, contents, attachments)
					inbox.create({
						id: Key,
						sender: headers.from[0].value[0].name,
						time: new Date(headers.date[0].value),
						subject: headers.subject[0].value,
						attachments: attachments.length
					})
					mails.create({
						id: Key,
						headers,
						body: contents['text/html'] || contents['text/plain'],
						attachments
					})
				}catch(exp){
					// supress parse exception
					return cb(exp)
				}
				cb(null, inbox.get(Key), mails.get(Key))
			})
		})
	}
}

return S3Bucket
//# sourceURL=aws/s3bucket
})
pico.define('po/router',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
var pStr=require('pico/str')
var Callback=require('po/Callback')
var callback
var h=window.history
var _path=null
var _started=false
var routeMap={}
var compiledRoutes=[]
var trigger=function(path){
	if (_path===path) return
	var params={}
	var state=routeMap[path]
	if (!state){
		state=routeMap[pStr.execRest(path,compiledRoutes,params)]
		Object.keys(params).reduce((acc, k) => acc[k] = decodeURIComponent(params[k]), params)
	}
	if (state) _path = path
	callback.trigger('change',state,params)
}
var hashchanged=function(){
	trigger(location.hash.slice(1))
}
var popstate=function(){
	trigger(location.search.slice(3))
}
var goHash=function(hash){
	location.hash=hash
}
var router={
	start:function(routes){
		this.routes(routes)
		_started=true
		popstate()
		return this
	},
	routes:function(routes){
		if (!routes) return this
		Object.assign(routeMap,routes)
		var keys=Object.keys(routes)
		for (var i=0,k; (k=keys[i]); i++){
			pStr.compileRest(k,compiledRoutes)
		}
		return this
	},
	reset:function(routes){
		routeMap={}
		_started=false
		return this.routes(routes)
	},
	on:function(key,cb,ctx){
		callback.on(key,cb,ctx)
		return this
	},
	off:function(key,cb,ctx){
		callback.off(key,cb,ctx)
		return this
	},
	back:function(steps){
		if (steps) return h.go(-steps)
		h.back()
		return this
	},
	forward:function(steps){
		if (steps) return h.go(steps)
		h.forward()
		return this
	},
	go:function(path, replace){
		path=path||''
		if (path===_path) return this
		;(replace?h.replaceState:h.pushState).call(h, null, null, '?_='+path)
		popstate()
		return this
	},
	depth:function(){
		return h.length
	},
	path: function(){
		return _path
	},
	started: function(){
		return _started
	}
}

this.load=function(){
	callback=new Callback
	if (h.pushState){
		window.addEventListener('popstate',popstate,false)
	}else{
		router.go=goHash
		popstate=hashchanged
		window.addEventListener('hashchange',popstate,false)
	}
}

return router
//# sourceURL=po/router
})
pico.define('body',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const router = require('po/router')
const specMgr = require('p/specMgr')

function changeContent(state, params){
	if (!state) return
	this.signals.changeContent(state, this.specMap[state], params).send([this.host])
}

function pageChanged(evt, states, params){
	if (!states){
		if (this.deps.ums.isValid()) return router.go('/dash')
		else return router.go('/')
	}
	if (states.includes('home') || states.includes('auth')){
		if (this.deps.ums.isValid()){
			if (states.includes('auth')) return router.go('/dash')
		} else {
			if (!states.includes('auth')) return router.go('/auth')
		}
	}

	this._params = params
	this._pageState = states[1]

	if (states[0] !== this._currState){
		this.clear()
		this.spawnBySpec([this.specMap[states[0]]], params)
	} else {
		changeContent.call(this, states[1], params)
	}

	this._currState = states[0]
}

return {
	signals: ['changeContent'],
	deps: {
		ums: 'cognito',
		pages: 'map',
		routes: 'map'
	},
	create: function(deps, params){
		this.super.create.call(this, deps, params)

		this._currState = ''
		this._pageState = ''
		this._params = null

		const rawSpec = []
		const keys = Object.keys(deps.pages)
		for (var i=0,k; (k=keys[i]); i++){
			rawSpec.push(deps.pages[k])
		}

		const specMap = this.specMap = {}
		specMgr.load(this, params, rawSpec, (err, spec)=>{
			for (var i=0, k; (k=keys[i]); i++){
				specMap[k]=spec.shift()
			}

			deps.ums.callback.on('ready', () => {
				router.off('change',pageChanged,this)
				router.on('change',pageChanged,this).start(deps.routes)
			})
		})
	},
	remove: function(){
		router.off('change',pageChanged,this)
		this.super.remove.call(this)
	},
	slots: {
		moduleAdded: function(from, sender){
			changeContent.call(this, this._pageState, this._params)
		}
	}
}
//# sourceURL=body
})
pico.define('land/layout',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
return {
	remove(){
		this.el.classList.remove('no-skin', 'pos-rel')
		const ds = this.el.dataset
		delete ds.spy
		delete ds.target
		this.super.remove.call(this)
	}
}
//# sourceURL=land/layout
})
pico.define('land/layout.css','html {\n  height: 100%;\n}\nbody {\n  background-color: #FFF;\n  height: 100%;\n}\n.main-container:before {\n  display: none;\n}\n.jumbotron {\n  border-radius: 0;\n  height: 100%;\n  min-height: 600px;\n  padding-top: 150px;\n  margin-bottom: 0;\n}\n.jumbotron.has-background {\n	background: transparent url("dat/hero-bg.jpg") top center no-repeat;\n	/* background source: https://unsplash.com/@joannakosinska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText */\n}\n.jumbotron div.text-center {\n	background-color: rgba(255, 255, 255, 0.6);\n	padding: 20px;\n}\n.navbar {\n  background-color: rgba(105, 185, 255);\n  padding: 20px;\n  -webkit-transition: padding 0.2s, background-color 0.2s;\n  -o-transition: padding 0.2s, background-color 0.2s;\n  transition: padding 0.2s, background-color 0.2s;\n}\n.navbar .navbar-brand {\n  font-size: 36px;\n  -webkit-transition: font-size 0.2s;\n  -o-transition: font-size 0.2s;\n  transition: font-size 0.2s;\n}\n.navbar .navbar-nav > li > a {\n  margin-top: 6px;\n  padding: 6px 8px;\n  height: 36px;\n  border-bottom: 2px solid transparent;\n}\n.navbar .navbar-nav > li > a:hover,\n.navbar .navbar-nav > li.active > a {\n  border-bottom-color: #FFF;\n  background-color: transparent;\n  color: #FFF;\n}\n@media (max-width: 991px) {\n  .navbar .navbar-nav > li > a {\n    border-bottom-width: 0;\n    border-left: 2px solid transparent;\n  }\n  .navbar .navbar-nav > li > a:hover,\n  .navbar .navbar .navbar-nav > li.active > a {\n    border-left-color: #FFF;\n  }\n}\n@media (max-height: 540px) {\n  .navbar .jumbotron {\n    padding-top: 120px;\n  }\n}\n.navbar .navbar-nav > li {\n  border-width: 0 !important;\n}\n.navbar .navbar-nav > li.sep {\n  height: 48px;\n  line-height: 48px;\n  margin: 0 8px;\n  font-size: 4px;\n}\n.navbar-fixed-top + .main-container {\n  height: 90%;\n  height: calc(100% - 100px);\n  min-height: 400px;\n  padding-top: 0;\n}\n.navbar-compact + .main-container {\n  padding-top: 0;\n}\n.navbar-compact.navbar {\n  padding: 5px;\n  background-color: rgba(105, 185, 255, 0.92);\n}\n.navbar-compact.navbar .navbar-brand {\n  font-size: 24px;\n}\n@media (max-width: 991px) {\n  .navbar + .main-container {\n    padding-top: 0;\n  }\n  .navbar.navbar {\n    padding: 5px;\n    background-color: rgba(105, 185, 255, 0.92);\n  }\n  .navbar.navbar .navbar-brand {\n    font-size: 24px;\n  }\n}\n.section {\n  padding-top: 36px;\n  padding-bottom: 36px;\n  background-color: #FFF;\n}\n.section-grey {\n  background-color: #EDF2F6;\n}\n.item .carousel-caption {\n  background-color: transparent;\n  transition: background-color 0.2s;\n}\n.item.active .carousel-caption {\n  background-color: rgba(0, 0, 0, 0.25);\n}\n.coming-soon {\n  background-color: #1A375F;\n}\n.coming-soon .main-container {\n  height: 100%;\n}\n.coming-soon .navbar {\n  padding: 10px;\n  background-color: rgba(67, 142, 185, 0.5);\n}\n.coming-soon .jumbotron {\n  padding-top: 120px;\n  background-color: #254169;\n}\n@media (max-width: 767px) {\n  .coming-soon .jumbotron {\n    padding-top: 80px;\n  }\n}\n.coming-soon .timer {\n  border-radius: 18px;\n  padding-bottom: 12px;\n  background-color: rgba(0, 0, 0, 0.15);\n}\n.coming-soon .timer-value {\n  font-size: 56px;\n  margin-bottom: 8px;\n  color: #FFF;\n}\n.coming-soon .timer-text {\n  font-size: 16px;\n  color: #FFF;\n  text-transform: uppercase;\n}\n.coming-soon .timer-text .label {\n  min-width: 60%;\n}\n.section-contact {\n	background: #222 url("dat/map-contact.jpg") center no-repeat;\n}\n#contact textarea{\n	min-height: 150px;\n}\n')
pico.define('land/navbar',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const router = require('po/router')

return {
	deps: {
		ums: 'cognito',
		tpl: 'file',
		shortcuts: ['boolean', false]
	},
	create(deps, params){
		const el = this.el.querySelector('#navbar-container')
		this.setElement(el)
		el.innerHTML = deps.tpl(deps)
		///make navbar compact when scrolling down
		var isCompact = false
		$(window).on('scroll.scroll_nav', function() {
			var scroll = $(window).scrollTop()
			var h = $(window).height()
			var body_sH = document.body.scrollHeight
			if(scroll > parseInt(h / 4) || (scroll > 0 && body_sH >= h && h + scroll >= body_sH - 1)) {//|| for smaller pages, when reached end of page
				if(!isCompact) $('.navbar').addClass('navbar-compact')
				isCompact = true
			} else {
				$('.navbar').removeClass('navbar-compact')
				isCompact = false
			}
		}).triggerHandler('scroll.scroll_nav')

		const a = el.querySelector('li#auth a')
		const span = a.querySelector('span')
		if (deps.ums.isValid()){
			a.href= '#dash'
			span.innerText = 'Dashboard'
		}else{
			a.href= '#auth'
			span.innerText = 'Login'
		}
	},
	events: {
		'click a': function(e, target){
			const href = $(target).attr('href')
			switch(href){
			case '#':
			case '#auth':
			case '#dash':
				e.preventDefault()
				router.go(href.replace('#','/'))
				break
			default:
			{
				const $href = $(href)
				if($href.length === 1) {
					const offset = $href.offset()
					const top = parseInt(Math.max(offset.top - 30, 0))
					$('html, body').animate({scrollTop: top}, 250)
				}
				break
			}
			}
		}
	}
}
//# sourceURL=land/navbar
})
pico.define('land/navbar.asp','<button data-target="#menu" data-toggle="collapse" type="button" class="pull-right navbar-toggle collapsed">\n	<span class="sr-only">Toggle menu</span>\n	<span class="icon-bar"></span>\n	<span class="icon-bar"></span>\n	<span class="icon-bar"></span>\n</button>\n\n<div class="navbar-header navbar-left">\n	<a href="#" class="navbar-brand">\n		<small>\n			<i class="fa fa-cloud"></i>\n			<span class="light-green">Kloud</span> Konsole\n		</small>\n	</a>\n</div>\n\n<div class=" navbar-header navbar-right" role="navigation">\n	<div id="menu" class="collapse navbar-collapse">\n		<ul class="nav navbar-nav navbar-right" role="tablist">\n			<%if (d.shortcuts) {%>\n			<li>\n				<a href="#why">Why</a>\n			</li>\n			\n			<li class="sep visible-md visible-lg">\n				<i class="ace-icon fa fa-circle white"></i>\n			</li>\n			\n			<li>\n				<a href="#info">Info</a>\n			</li>\n			\n			<li class="sep visible-md visible-lg">\n				<i class="ace-icon fa fa-circle white"></i>\n			</li>\n			\n			<%}%>\n			\n			<li id=auth>\n				<a href="#auth">\n					<span class=dark>Login</span> &nbsp;<i class="fa fa-user bigger-110"></i>\n				</a>\n			</li>\n		</ul>\n	</div>				\n</div>\n')
pico.define('land/hero.html','<div class="container pos-rel">\n	<div class=text-center>\n		<h2 class=dark>Create free custom domain email with</h2>\n		<h1 class=dark>Kloud Konsole</h1>\n		<h3 class=dark>and it is <span class="green bigger-110">simple to setup</span> and secure</h3>\n		<br>\n		<br>\n		<br>\n		<br>\n		<br>\n		<a class="btn btn-purple btn-lg no-border bigger-150" href=https://docs.kloudkonsole.com target=_blank role=button>&nbsp; Learn more &nbsp;</a>\n	</div>\n</div>\n')
pico.define('land/why.html','<div class="row">\n	<div class="text-center">\n		<h2 class="text-primary">Why use Kloud Konsole webmail client?</h2>\n		<h3 class="text-muted">It is the only free AWS SES webmail client.</h3>\n	</div>\n</div>\n<div class="space-4"></div>\n<div class="row text-center">\n	<div class=col-md-4>\n		<span class="fa-stack fa-4x">\n			<i class="fa fa-circle fa-stack-2x text-primary"></i>\n			<i class="fa fa-lock fa-stack-1x fa-inverse"></i>\n		</span>\n		<h4 class=text-info>Secure and private</h4>\n		<p class="text-muted align-justify">Kloud Konsole&#039;s open source web client connects to your AWS account directly, We do no send or store any data on our backend. Kloud Konsole uses AWS cognito (of your AWS account) to secure the connections to AWS</p>\n	</div>\n\n	<div class=col-md-4>\n		<span class="fa-stack fa-4x">\n			<i class="fa fa-circle fa-stack-2x text-primary"></i>\n			<i class="fa fa-magic fa-stack-1x fa-inverse"></i>\n		</span>\n		<h4 class=text-info>Easy to setup</h4>\n		<p class="text-muted align-justify">No coding or cloud computing knowledge required, all you need is setup an accout with Kloud Konsole and tell Kloud Konsole how to connect to your AWS account.</p>\n	</div>\n\n	<div class=col-md-4>\n		<span class="fa-stack fa-4x">\n			<i class="fa fa-circle fa-stack-2x text-primary"></i>\n			<i class="fa fa-hand-stop-o fa-stack-1x fa-inverse"></i>\n		</span>\n		<h4 class=text-info>Stop forwarding nightmare</h4>\n		<p class="text-muted align-justify">mail forwarding is a common approach to read AWS SES mail on mail client such as Gmail. This approach comes with compromises such as mail content modification, messy mail handling (forward to multiple mailboxes), silence failure due to attachment oversize issue... </p>\n	</div>\n</div>\n')
pico.define('land/info.html','<div class=row>\n	<div class="col-lg-5 col-sm-6 col-lg-offset-1 text-center">\n		<img alt="Section Image" src=dat/business.jpg width="250" class="img-responsive" />\n	</div>\n\n	<div class="col-lg-5 col-sm-6">\n		<h2 class=text-primary><i class="ace-icon fa fa-sticky-note orange"></i>&nbsp; Free? What is your business model?</h2>	\n		<div class=hr></div>\n		<p>The webmail client feature will be free forever, and we see it as a promotion feature.</p>\n		<p>In the future we will roll out more useful functionality and we may charge those services to recoup our cost</p>\n		</p>\n	</div>						\n</div>\n')
pico.define('land/info2.html','<div class="row">\n	<div class="col-lg-5 col-sm-6 col-lg-offset-1">\n		<h2 class="text-primary"><i class="ace-icon fa fa-sticky-note green"></i>&nbsp; Demo</h2>	\n		<div class="hr"></div>\n		<p>Interested to see how the webmail works? You’re welcome to try it out with the test account. Please feel free to play around, but keep in mind the mails in test account only has one hour life time</p>\n		<p>login with test account:</p>\n		<pre>\n		company: kloudkonsole.com\n		username: test\n		password: test\n		</pre>\n	</div>\n	<div class="col-lg-5 col-lg-offset-1 col-sm-6 text-center">\n		<img alt="Section Image" width="250" src="dat/ace.png" class="img-responsive inline" />\n	</div>\n</div>\n')
pico.define('land/info3.html','<div class=row>\n	<div class="col-lg-5 col-sm-6 col-lg-offset-1 text-center">\n		<img alt="Section Image" src=dat/GDPR.png width=250 class=img-responsive />\n	</div>\n\n	<div class="col-lg-5 col-sm-6">\n		<h2 class=text-primary><i class="ace-icon fa fa-sticky-note orange"></i>&nbsp; Not asking GDPR consent?</h2>	\n		<div class=hr></div>\n		<p>We are not asking GDPR consent and yet we are GDPR compliant. because:</p>\n		<ul>\n		<li>We are not collecting data and creating profiles of individuals for analytics or others purposes</li>\n		<li>We are not using web-tracker, and are not collecting data via cookies or social plug-ins from individuals</li>\n		</ul>\n		</p>\n	</div>						\n</div>\n')
pico.define('land/info4.html','<div class="row">\n	<div class="col-lg-5 col-sm-6 col-lg-offset-1">\n		<h2 class="text-primary"><i class="ace-icon fa fa-sticky-note green"></i>&nbsp; AWS Pricing</h2>	\n		<div class="hr"></div>\n		<p>While KloudKonsole webmail client is absolutely free to use, Your emails are actually delivered by AWS and AWS services are not free, check the pricing here:</p>\n		<ul>\n		<li>SES charges by message and chunk size, see <a href=https://aws.amazon.com/ses/pricing/ target=_blank >SES pricing page</a></li>\n		<li>S3 charges by storage size and request count, see <a href=https://aws.amazon.com/s3/pricing/ target=_blank >S3 pricing page</a></li>\n		<li>Cognito charges by monthly active user (MAU), see <a href=https://aws.amazon.com/cognito/pricing/ target=_blank >Cognito pricing page</a></li>\n		</ul>\n		<p>With monthly free 50,000 MAU and 1000 incoming message, the cost will be low compare with other options </p>\n	</div>\n	<div class="col-lg-5 col-lg-offset-1 col-sm-6 text-center">\n		<img alt="Section Image" width=250 src=dat/pricetag.jpg class="img-responsive inline" />\n		<!-- img src https://unsplash.com/@martenbjork?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText -->\n	</div>\n</div>\n')
pico.define('land/footer',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const router = require('po/router')

return {
	events: {
		'click ul.legal a': function(e, target){
			e.preventDefault()
			router.go($(target).attr('href').replace('#','/'))
		}
	}
}
//# sourceURL=land/footer
})
pico.define('land/footer.html','<div class=row>\n	<div class="col-md-4 text-left">\n		<span class="bigger-150 text-muted"><span class="blue bolder">Kloud</span> Konsole&copy; 2019</span>\n	</div>\n	<div class="col-md-4 text-center">\n		<span class="action-buttons">\n			<a href="#">\n				<i class="ace-icon fa fa-twitter-square light-blue bigger-200"></i>\n			</a>\n			\n			<a href="#">\n				<i class="ace-icon fa fa-facebook-square text-primary bigger-200"></i>\n			</a>\n			\n			<a href="#">\n				<i class="ace-icon fa fa-reddit orange bigger-200"></i>\n			</a>\n		</span>\n	</div>\n	\n	<div class="col-md-4 text-right">\n	<ul class="legal nav navbar-nav navbar-right" role="tab">\n		<li><a href="#privacy" class="bigger-110">Privacy</a></li>\n		<li><a href="#terms" class="bigger-110">Terms & Conditions</a></li>\n	</ul>\n	</div>\n</div>\n')
pico.define('land/privacy.html','<br>\n<br>\n<br>\n<h1>Privacy Policy</h1>\n<p>Your privacy is important to us. It is KloudKonsole&#039;s policy to respect your privacy regarding any information we may collect from you across our website, https://kloudkonsole.com, and other sites we own and operate.</p>\n\n<p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>\n\n<p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>\n\n<p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>\n\n<p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>\n\n<p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>\n\n<p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>\n\n<p>This policy is effective as of 31 July 2019.</p>\n')
pico.define('land/terms.html','<br>\n<br>\n<br>\n<h1>KloudKonsole Terms And Conditions.</h1>\n<ol>\n<li><h3>Terms</h3>\n<p>By accessing the website at https://kloudkonsole.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p></li>\n\n<li><h3>Use License</h3>\n<p>Permission is granted to temporarily download one copy of the materials (information or software) on KloudKonsole&#039;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>\n<ol type=i>\n<li>modify or copy the materials;</li>\n<li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>\n<li>attempt to decompile or reverse engineer any software contained on KloudKonsole&#039;s website;</li>\n<li>remove any copyright or other proprietary notations from the materials; or</li>\n<li>transfer the materials to another person or "mirror" the materials on any other server.</li>\n<li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by KloudKonsole at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>\n</ol></li>\n\n<li><h3>Disclaimer</h3>\n<ol type=i>\n<li>The materials on KloudKonsole&#039;s website are provided on an &#039;as is&#039; basis. KloudKonsole makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>\n<li>Further, KloudKonsole does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>\n</ol></li>\n\n<li><h3>Limitations</h3>\n<p>In no event shall KloudKonsole or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on KloudKonsole&#039;s website, even if KloudKonsole or a KloudKonsole authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p></li>\n\n<li><h3>Accuracy of materials</h3>\n<p>The materials appearing on KloudKonsole&#039;s website could include technical, typographical, or photographic errors. KloudKonsole does not warrant that any of the materials on its website are accurate, complete or current. KloudKonsole may make changes to the materials contained on its website at any time without notice. However KloudKonsole does not make any commitment to update the materials.</p></li>\n\n<li><h3>Links</h3>\n<p>KloudKonsole has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by KloudKonsole of the site. Use of any such linked website is at the user&#039;s own risk.</p></li>\n\n<li><h3>Modifications</h3>\n<p>KloudKonsole may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p></li>\n\n<li><h3>Governing Law</h3>\n<p>These Terms and Conditions and all its subsequent variations shall be subject to, governed by and interpreted in accordance with the laws of the Republic of Singapore and you hereby agree to submit to the exclusive jurisdiction of the courts of Singapore in connection with any dispute arising from your Application and/or these Terms and Conditions.</p></li>\n</ol>\n')
pico.define('auth/layout',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
return {
	remove(){
		this._el.classList.remove('login-layout')
		this.super.remove.call(this)
	},
	render(){
		this.setElement(this.el.querySelector('div.login-container'))
		return this.el
	}
}
//# sourceURL=auth/layout
})
pico.define('auth/layout.html','<div class=main-container>\n<div class=main-content>\n<div class=row>\n<div class="col-sm-10 col-sm-offset-1">\n<div class=login-container>\n\n</div>\n</div>\n</div>\n</div>\n</div>\n')
pico.define('home/layout.css','select.form-control{\n	-webkit-appearance: none;\n}\ntextarea.form-control{\n	overflow: hidden;\n	word-wrap: break-word;\n	resize: horizontal;\n	height: 150px;\n}\n')
pico.define('auth/navbar',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
return {
	events: {
		'click #btn-login-dark': function(evt, target){
			evt.preventDefault()

			$('body').attr('class', 'login-layout')
			$('#id-text2').attr('class', 'white')
			$('#id-company-text').attr('class', 'blue')
		},
		'click #btn-login-light': function(evt, target){
			evt.preventDefault()

			$('body').attr('class', 'login-layout light-login')
			$('#id-text2').attr('class', 'grey')
			$('#id-company-text').attr('class', 'blue')
		},
		'click #btn-login-blur': function(evt, target){
			evt.preventDefault()

			$('body').attr('class', 'login-layout blur-login')
			$('#id-text2').attr('class', 'white')
			$('#id-company-text').attr('class', 'light-blue')
		}
	}
}
//# sourceURL=auth/navbar
})
pico.define('auth/navbar.html','<br />\n&nbsp;\n<a id=btn-login-dark href="#">Dark</a>\n&nbsp;\n<span class="blue">/</span>\n&nbsp;\n<a id=btn-login-blur href="#">Blur</a>\n&nbsp;\n<span class="blue">/</span>\n&nbsp;\n<a id=btn-login-light href="#">Light</a>\n&nbsp; &nbsp; &nbsp;\n')
pico.define('auth/title',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const router = require('po/router')

return {
	deps: {
		tpl: 'file',
		appIcon: ['text', 'fa-cogs'],
		appName: ['list', ['App', 'Name']],
		companyName: ['text', 'Company Name']
	},
	create(deps, params){
		this.el.innerHTML = deps.tpl(deps)
	},
	events: {
		'click a': function(e, target){
			const href = $(target).attr('href')
			switch(href){
			case '#':
				e.preventDefault()
				router.go(href.replace('#','/'))
				break
			}
		}
	}
}
//# sourceURL=auth/title
})
pico.define('auth/title.asp','<h1>\n	<a href="#">\n	<i class="ace-icon fa <%d.appIcon%> green"></i>\n	<span class=red><%d.appName[0]%></span>\n	<span class=white id=id-text2><%d.appName[1]%></span>\n	</a>\n</h1>\n<h4 class=blue id=id-company-text><a href=https://jasaws.com target=_blank>&copy; <%d.companyName%></a></h4>\n')
pico.define('auth/modal',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const router = require('po/router')

return {
	deps: {
		tpl: 'file',
		ums: 'cognito',
		config: 'models',
		socialBtn: 'list',
		enableReset: 'bool',
		enableRegister: 'bool',
	},
	create(deps, params){
		this.super.create.call(this, deps, params)
		const group = deps.config.getSelected() || {name: 'xin.com'}
		this.el.innerHTML = deps.tpl(Object.assign({company: group.name}, deps))
	},
	events: {
		'click .toolbar a[data-target]': function(evt, target){
			evt.preventDefault()
			var targetData = target.dataset.target
			var visible = document.querySelectorAll('.widget-box.visible')
			visible.forEach(v => v.classList.remove('visible'))
			this.el.querySelector(targetData).classList.add('visible')//show target
		},
		'click button': function(evt, target){
			const form = target.closest('form')
			if (!form.reportValidity()) return
			const els = form.elements
			const company = els.company.value
			const deps = this.deps
			const ums = deps.ums

			deps.config.read(company, (err, group) => {
				if (err) return alert(`company name [${company}] not found`)
				ums.setGroup(group)
				deps.config.setSelected(group.name)
				const username = els.username.value
				const password = els.password.value

				switch(target.id){
				case 'btn-login':
					ums.signin(company, username, password, err => {
						if (err) return alert(JSON.stringify(err, null, '\t'))
						router.go('/dash')
					})
					break
				case 'btn-register':
					if (password !== els.repeat.value) return alert('password not match')

					ums.signup(company, username, password, els.email.value, els.phone.value, (err, result) => {
						if (err) return alert(JSON.stringify(err, null, '\t'))
						if (result.userUnconfirmed){
							router.go('/dash')
						}else{
							alert('Please confirm your account before login', 'Signup Successfully')
						}
					})
					break
				case 'btn-forget':
					break
				default:
					return console.error('unexpected auth form button pressed')
				}
			}, true)
		}
	}
}
//# sourceURL=auth/modal
})
pico.define('auth/modal.asp','<div id="login-box" class="login-box visible widget-box no-border">\n	<div class="widget-body">\n		<div class="widget-main">\n			<h4 class="header blue lighter bigger">\n				<i class="ace-icon fa fa-pencil-square-o green"></i>\n				Please Enter Your Information\n			</h4>\n\n			<div class="space-6"></div>\n\n			<form>\n			<fieldset>\n				<label class="block clearfix">\n				<span class="block input-icon input-icon-right">\n				<input name=company type=text class=form-control placeholder=Company value=<%d.company%>\n					autocapitalize=off\n					autocomplete=off\n					spellcheck=false\n					autocorrect=off\n					required/>\n				<i class="ace-icon fa fa-bank"></i>\n				</span>\n				</label>\n\n				<label class="block clearfix">\n				<span class="block input-icon input-icon-right">\n				<input name=username type=text class=form-control placeholder=Username\n					autocapitalize=off\n					autocomplete=off\n					spellcheck=false\n					autocorrect=off\n					required/>\n				<i class="ace-icon fa fa-user"></i>\n				</span>\n				</label>\n\n				<label class="block clearfix">\n				<span class="block input-icon input-icon-right">\n				<input name=password type=password class=form-control placeholder=Password required/>\n				<i class="ace-icon fa fa-lock"></i>\n				</span>\n				</label>\n\n				<div class="space"></div>\n\n				<div class=clearfix>\n				<label class="inline">\n				<input type=checkbox class=ace checked/>\n				<span class=lbl> Remember Me</span>\n				</label>\n\n				<button id=btn-login type="button" class="width-35 pull-right btn btn-sm btn-primary">\n				<i class="ace-icon fa fa-key"></i>\n				<span class="bigger-110">Login</span>\n				</button>\n				</div>\n\n				<div class=space-4></div>\n			</fieldset>\n			</form>\n\n			<% if (d.socialBtn && d.socialBtn.length) { %>\n			<div class="social-or-login center">\n				<span class="bigger-110">Or Login Using</span>\n			</div>\n\n			<div class=space-6></div>\n\n			<div class="social-login center">\n				<% for (var i = 0, btn, btns = d.socialBtn; btn = btns[i]; i++) { %>\n				<a id="<%btn.id%>" class="btn <%btn.color%>"> <i class="ace-icon fa <%btn.icon%>"></i> </a>\n				<% } %>\n			</div>\n			<% } %>\n		</div><!-- /.widget-main -->\n\n		<% if (d.enableReset || d.enableRegister) { %>\n		<div class="toolbar clearfix">\n			<% if (d.enableReset) { %>\n			<div> <a href="#" data-target="#forgot-box" class="forgot-password-link"><i class="ace-icon fa fa-arrow-left"></i>I forgot my password</a> </div>\n			<% } %>\n\n			<% if (d.enableRegister) { %>\n			<div> <a href="#" data-target="#signup-box" class="user-signup-link">\n				<% if (d.enableReset) { %>\n				I want to register\n				<i class="ace-icon fa fa-arrow-right"></i>\n				<% } else { %>\n				<i class="ace-icon fa fa-arrow-left"></i>\n				I want to register\n				<% } %>\n			</a> </div>\n			<% } %>\n		</div>\n		<% } %>\n	</div><!-- /.widget-body -->\n</div><!-- /.login-box -->\n\n<div id="forgot-box" class="forgot-box widget-box no-border">\n	<div class="widget-body">\n		<div class="widget-main">\n			<h4 class="header red lighter bigger">\n				<i class="ace-icon fa fa-key"></i>\n				Retrieve Password\n			</h4>\n\n			<div class="space-6"></div>\n			<p> Enter your email and to receive instructions </p>\n\n			<form>\n			<fieldset>\n				<label class="block clearfix">\n				<span class="block input-icon input-icon-right">\n				<input name=email type="email" class="form-control" placeholder="Email" required/>\n				<i class="ace-icon fa fa-envelope"></i>\n				</span>\n				</label>\n\n				<div class="clearfix">\n				<button id=btn-forget type=button class="width-35 pull-right btn btn-sm btn-danger">\n				<i class="ace-icon fa fa-lightbulb-o"></i>\n				<span class="bigger-110">Send Me!</span>\n				</button>\n				</div>\n			</fieldset>\n			</form>\n		</div><!-- /.widget-main -->\n\n		<div class="toolbar center">\n		<a href="#" data-target="#login-box" class="back-to-login-link">\n		Back to login\n		<i class="ace-icon fa fa-arrow-right"></i>\n		</a>\n		</div>\n	</div><!-- /.widget-body -->\n</div><!-- /.forgot-box -->\n\n<div id="signup-box" class="signup-box widget-box no-border">\n	<div class="widget-body">\n		<div class="widget-main">\n			<h4 class="header green lighter bigger">\n				<i class="ace-icon fa fa-users blue"></i>\n				New User Registration\n			</h4>\n\n			<div class="space-6"></div>\n			<p> Enter your details to begin: </p>\n\n			<form>\n			<fieldset>\n				<label class="block clearfix">\n				<span class="block input-icon input-icon-right">\n				<input name=company type=text class=form-control placeholder=Company value=<%d.company%>\n					autocapitalize=off\n					autocomplete=off\n					spellcheck=false\n					autocorrect=off\n					required/>\n				<i class="ace-icon fa fa-bank"></i>\n				</span>\n				</label>\n\n				<label class="block clearfix">\n				<span class="block input-icon input-icon-right">\n				<input name="email" type=email class="form-control" placeholder="name@pmail.com" required/>\n				<i class="ace-icon fa fa-envelope"></i>\n				</span>\n				</label>\n\n				<label class="block clearfix">\n				<span class="block input-icon input-icon-right">\n				<input name="phone" type=tel class="form-control" placeholder="+6598765432" required/>\n				<i class="ace-icon fa fa-mobile"></i>\n				</span>\n				</label>\n\n				<label class="block clearfix">\n				<span class="block input-icon input-icon-right">\n				<input name="username" type=text class="form-control" placeholder=Username\n					autocapitalize=off\n					autocomplete=off\n					spellcheck=false\n					autocorrect=off\n					required/>\n				<i class="ace-icon fa fa-user"></i>\n				</span>\n				</label>\n\n				<label class="block clearfix">\n				<span class="block input-icon input-icon-right">\n				<input name="password" type="password" class="form-control" placeholder="Password" required/>\n				<i class="ace-icon fa fa-lock"></i>\n				</span>\n				</label>\n\n				<label class="block clearfix">\n				<span class="block input-icon input-icon-right">\n				<input name="repeat" type="password" class="form-control" placeholder="Repeat password" required/>\n				<i class="ace-icon fa fa-retweet"></i>\n				</span>\n				</label>\n\n				<label class="block">\n				<input type="checkbox" class="ace" required/>\n				<span class="lbl">\n				I accept the\n				<a href="#">User Agreement</a>\n				</span>\n				</label>\n\n				<div class="space-24"></div>\n\n				<div class="clearfix">\n				<button type=reset class="width-30 pull-left btn btn-sm">\n				<i class="ace-icon fa fa-refresh"></i>\n				<span class="bigger-110">Reset</span>\n				</button>\n\n				<button id=btn-register type=button class="width-65 pull-right btn btn-sm btn-success">\n				<span class="bigger-110">Register</span>\n\n				<i class="ace-icon fa fa-arrow-right icon-on-right"></i>\n				</button>\n				</div>\n			</fieldset>\n			</form>\n		</div>\n\n		<div class="toolbar center">\n		<a href="#" data-target="#login-box" class="back-to-login-link">\n		<i class="ace-icon fa fa-arrow-left"></i>\n		Back to login\n		</a>\n		</div>\n	</div><!-- /.widget-body -->\n</div><!-- /.signup-box -->\n')
pico.define('home/navbar-header',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const router = require('po/router')

return {
	deps: {
		name: ['text', 'Home'],
		icon: ['text', 'fa-home'],
		tpl: 'file'
	},
	create(deps, params){
		setTimeout(() => {
			this.el.innerHTML = deps.tpl(deps)
		}, 0)
	},
	events: {
		'click a': function(e, target){
			const href = $(target).attr('href')
			switch(href){
			case '#':
				e.preventDefault()
				router.go(href.replace('#','/'))
				break
			}
		}
	}
}
//# sourceURL=home/navbar-header
})
pico.define('home/navbar-header.asp','<a href="#" class="navbar-brand">\n	<small> <i class="fa <%d.icon%>"></i> <%d.name%> </small>\n</a>\n')
pico.define('home/navbar-menu',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
return {
	render(){
		this.setElement(this.el.querySelector('ul'))
		return this.el
	}
}
//# sourceURL=home/navbar-menu
})
pico.define('home/navbar-menu-content',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
return {
	deps: {
		ums: 'cognito',
		greet: ['text', ''],
		photo: 'text',
		icon_right: 'text',
		icon_left: 'text',
		tpl: 'file'
	},
	create(deps, params){
		deps.ums.getProfile((err, attr) => {
			if (err) return console.error(err)
			const d = {
				text: attr.name || attr.preferred_username || attr.username,
				greet: deps.greet,
				photo: attr.picture || deps.photo,
				icon_right: deps.icon_right,
				icon_left: deps.icon_left
			}
			this.el.innerHTML = deps.tpl(d)
			this.super.create.call(this, deps, params)
		})
	},
	events: {
		'click a': function(evt, target){
			evt.preventDefault()
		}
	}
}
//# sourceURL=home/navbar-menu-content
})
pico.define('home/navbar-menu-content.asp','<a data-toggle="dropdown" href="#" class="dropdown-toggle">\n	<% if (d.icon_left) {%><i class="ace-icon fa <%d.icon_left%>"></i><% } %>\n	<%if (d.text && d.photo) {%>\n	<img class="nav-user-photo" src="<%d.photo%>" alt="<%d.text%>&#39;s Photo" />\n	<span class="user-info"> <small><%d.greet%></small> <%d.text%> </span>\n	<% } else { d.text } %>\n	<% if (d.icon_right) {%><i class="ace-icon fa <%d.icon_right%>"></i><% } %>\n</a>\n')
pico.define('home/navbar-menu-user',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
// https://docs.aws.amazon.com/cognito/latest/developerguide/using-amazon-cognito-user-identity-pools-javascript-examples.html
const router = require('po/router')

return {
	deps: {
		ums: 'cognito',
		inbox: 'models',
	},
	events: {
		'click a': function(evt, target){
			switch(target.hash){
			case '#settings':
			case '#profile':
				break
			case '#logout':
				this.deps.ums.signout()
				this.deps.inbox.clear()
				router.go('/auth')
				break
			default:
				return
			}
		}
	}
}
//# sourceURL=home/navbar-menu-user
})
pico.define('home/navbar-menu-user.html','<li> <a href=#settings> <i class="ace-icon fa fa-cog"></i> Settings </a> </li>\n\n<li> <a href=#profile> <i class="ace-icon fa fa-user"></i> Profile </a> </li>\n\n<li class="divider"></li>\n\n<li> <a href=#logout> <i class="ace-icon fa fa-power-off"></i> Logout </a> </li>\n')
pico.define('home/main-container',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
return {
	render(){
		try{
			ace.settings.loadState('main-container')
		} catch(e_){}
		return this.el
	}
}
//# sourceURL=home/main-container
})
pico.define('home/sidebar',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const router = require('po/router')

function renderMenu(items, idx) {
	if (items.length <= idx) return ''
	const item = items[idx++]
	let menu = `
	<li id=m${item.id}>
		<a href="${item.href || ''}" class=${item.childs ? 'dropdown-toggle' : ''}>
			<i class="menu-icon fa ${item.parent ? 'fa-caret-right' : item.icon}"></i>
			${item.parent ? item.name : '<span class="menu-text"> ' + item.name + ' </span>'}
			<b class="${item.childs ? 'arrow fa fa-angle-down' : ''}"></b>
		</a>

		<b class=arrow></b>
	`
	if (item.childs) {
		menu += '<ul class=submenu>'
		menu += renderMenu(item.childs, 0)
		menu += '</ul>'
	}
	menu += '</li>'
	return menu + renderMenu(items, idx)
}

function getParent(menu, item){
	if (!item.parent) return
	return menu.get(item.parent)
}

function activateMenu(el, menu, item){
	if (!item) return
	const active = el.querySelector('#m'+item.id)
	if (!active) return
	if (active.querySelector('.dropdown-toggle')) active.classList.add('open')
	active.classList.add('active')

	item = getParent(menu, item)
	if (!item) return
	return activateMenu(el, menu, item)
}

function auth(userPerm, menuPerm){
	return !menuPerm.find((p, i) => {
		if (!p) return false
		if (p & userPerm[i]) return false
		return true
	})
}

return {
	deps: {
		menu: 'models',
		config: 'models',
		tpl: 'file'
	},
	create(deps, params){
		let { perm } = deps.config.getSelected()
		perm = perm || []
		const shortcuts = []
		const menu = []
		const menuMap = {}

		deps.menu.sort((r1, r2) => r1.id > r2.id)

		// TODO check env.perm
		deps.menu.forEach((row, i, id, coll) => {
			if (!auth(perm, row.perm)) return
			const r = Object.assign(menuMap[row.id] || {}, row)
			if (r.shortcut) shortcuts.push(r)
			menuMap[r.id] = r
			if (r.parent){
				const parent = menuMap[r.parent] = menuMap[r.parent] || {}
				parent.childs = parent.childs || []
				parent.childs.push(r)
			}else{
				menu.push(r)
			}
		})

		this.el.innerHTML = deps.tpl({shortcuts, menu, renderMenu})
	},
	render(){
		try{
			ace.settings.loadState('sidebar')
		}catch(e){}
		ace.demo.functions.enableSidebar()
		return this.el
	},
	events: {
		[ace.click_event + ' a']: function(evt, target){
			evt.preventDefault()
			if (!target.hash) return
			router.go(target.hash.substring(1))
		}
	},
	slots: {
		changeContent: function(from, sender, route, spec, params){
			const href = '#/' + route
			let item = this.deps.menu.find(i => href === i.href)
			if (!item) return
			this.el.querySelectorAll('.active').forEach(el => el.classList.remove('open', 'active'))

			activateMenu(this.el, this.deps.menu, item)
		}
	}
}
//# sourceURL=home/sidebar
})
pico.define('home/sidebar.asp','<div class="sidebar-shortcuts" id="sidebar-shortcuts">\n	<% var sc_colors = ["btn-success", "btn-info", "btn-warning", "btn-danger"]; %>\n	<div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">\n		<% for (var i=0, scs=d.shortcuts, sc; sc=scs[i]; i++){ %>\n			<a class="btn <%sc_colors[i]%>" href=<%sc.href%>> <i class="ace-icon fa <%sc.icon%>"></i> </a>\n		<% } %>\n	</div>\n\n	<div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">\n		<% for (var i=0, scs=d.shortcuts, sc; sc=scs[i]; i++){ %>\n			<span class="btn <%sc_colors[i]%>"></span>\n		<% } %>\n	</div>\n</div>\n\n<ul class="nav nav-list">\n	<% d.renderMenu(d.menu, 0) %>\n</ul>\n\n<!-- #section:basics/sidebar.layout.minimize -->\n<div class="sidebar-toggle sidebar-collapse" id=sidebar-collapse>\n	<i id=sidebar-toggle-icon class="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>\n</div>\n')
pico.define('home/main-content',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
return {
	create(deps, params){
		this.setElement(this.el.querySelector('.main-content-inner'))
		this.super.create.call(this, deps, params)
	}
}
//# sourceURL=home/main-content
})
pico.define('home/breadcrumbs',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const router = require('po/router')

return {
	deps: {
		tpl: 'file',
		menu: 'models',
		breadcrumbs: 'models',
	},
	create(deps, params){
		this.super.create.call(this, deps, params)
		this._ul = this.el.querySelector('ul')
	},
	events: {
		'click a': function(evt, target){
			evt.preventDefault()
			router.go(target.hash.substring(1))
		}
	},
	slots: {
		changeContent(from, sender, route, spec, params){
			const urlParams = new URLSearchParams(window.location.search)
			const href = '#' + urlParams.get('_')
			const menuItem = this.deps.menu.find(item => item.href === href)
			if (!menuItem) return // page without menu item
			const bc = this.deps.breadcrumbs
			const ul = this._ul
			const last = bc.at(bc.length()-1)
			if (last && last.href === menuItem.href) bc.remove(last.id)
			if (bc.length() > 4) bc.remove(bc.at(0).id)
			ul.innerHTML = ''
			bc.forEach(b => {
				const li = document.createElement('li')
				li.innerHTML = this.deps.tpl(b)
				ul.appendChild(li)
			})

			bc.create({
				id: Date.now(),
				name: menuItem.name,
				icon: menuItem.icon,
				href: menuItem.href
			})
			const li = document.createElement('li')
			li.classList.add('active')
			li.innerText = menuItem.name
			ul.appendChild(li)
		}
	}
}
//# sourceURL=home/breadcrumbs
})
pico.define('home/breadcrumbs.html','<ul class=breadcrumb>\n</ul><!-- /.breadcrumb -->\n\n<!-- #section:basics/content.searchbox -->\n<div class=nav-search id=nav-search>\n	<form class=form-search>\n		<span class=input-icon>\n			<input type=text placeholder="Search ..." class=nav-search-input id=nav-search-input autocomplete=off />\n			<i class="ace-icon fa fa-search nav-search-icon"></i>\n		</span>\n	</form>\n</div><!-- /.nav-search -->\n')
pico.define('home/breadcrumb.asp','<i class="ace-icon fa <%d.icon%> home-icon"></i>\n<a href="<%d.href%>"><%d.name%></a>\n')
pico.define('home/settings-container.html','<div class="btn btn-app btn-xs btn-warning ace-settings-btn" id="ace-settings-btn">\n	<i class="ace-icon fa fa-cog bigger-130"></i>\n</div>\n\n<div class="ace-settings-box clearfix" id="ace-settings-box">\n	<div class="pull-left width-50">\n		<!-- #section:settings.skins -->\n		<div class="ace-settings-item">\n			<div class="pull-left">\n				<select id="skin-colorpicker" class="hide">\n				<option data-skin="no-skin" value="#438EB9">#438EB9</option>\n				<option data-skin="skin-1" value="#222A2D">#222A2D</option>\n				<option data-skin="skin-2" value="#C6487E">#C6487E</option>\n				<option data-skin="skin-3" value="#D0D0D0">#D0D0D0</option>\n				</select>\n			</div>\n			<span>&nbsp; Choose Skin</span>\n		</div>\n\n		<!-- /section:settings.skins -->\n\n		<!-- #section:settings.navbar -->\n		<div class="ace-settings-item">\n			<input type="checkbox" class="ace ace-checkbox-2 ace-save-state" id="ace-settings-navbar" autocomplete="off" />\n			<label class="lbl" for="ace-settings-navbar"> Fixed Navbar</label>\n		</div>\n\n		<!-- /section:settings.navbar -->\n\n		<!-- #section:settings.sidebar -->\n		<div class="ace-settings-item">\n			<input type="checkbox" class="ace ace-checkbox-2 ace-save-state" id="ace-settings-sidebar" autocomplete="off" />\n			<label class="lbl" for="ace-settings-sidebar"> Fixed Sidebar</label>\n		</div>\n\n		<!-- /section:settings.sidebar -->\n\n		<!-- #section:settings.breadcrumbs -->\n		<div class="ace-settings-item">\n			<input type="checkbox" class="ace ace-checkbox-2 ace-save-state" id="ace-settings-breadcrumbs" autocomplete="off" />\n			<label class="lbl" for="ace-settings-breadcrumbs"> Fixed Breadcrumbs</label>\n		</div>\n\n		<!-- /section:settings.breadcrumbs -->\n\n		<!-- #section:settings.rtl -->\n		<div class="ace-settings-item">\n			<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-rtl" autocomplete="off" />\n			<label class="lbl" for="ace-settings-rtl"> Right To Left (rtl)</label>\n		</div>\n\n		<!-- /section:settings.rtl -->\n\n		<!-- #section:settings.container -->\n		<div class="ace-settings-item">\n			<input type="checkbox" class="ace ace-checkbox-2 ace-save-state" id="ace-settings-add-container" autocomplete="off" />\n			<label class="lbl" for="ace-settings-add-container">\n			Inside\n			<b>.container</b>\n			</label>\n		</div>\n\n	<!-- /section:settings.container -->\n	</div><!-- /.pull-left -->\n\n	<div class="pull-left width-50">\n		<!-- #section:basics/sidebar.options -->\n		<div class="ace-settings-item">\n			<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-hover" autocomplete="off" />\n			<label class="lbl" for="ace-settings-hover"> Submenu on Hover</label>\n		</div>\n\n		<div class="ace-settings-item">\n			<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-compact" autocomplete="off" />\n			<label class="lbl" for="ace-settings-compact"> Compact Sidebar</label>\n		</div>\n\n		<div class="ace-settings-item">\n			<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-highlight" autocomplete="off" />\n			<label class="lbl" for="ace-settings-highlight"> Alt. Active Item</label>\n		</div>\n\n		<!-- /section:basics/sidebar.options -->\n	</div><!-- /.pull-left -->\n</div><!-- /.ace-settings-box -->\n')
pico.define('home/page-header',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const specMgr = require('p/specMgr')

return {
	deps: {
		tpl: 'file'
	},
	slots: {
		changeContent(from, sender, route, spec, params){
			this.el.innerHTML = this.deps.tpl({
				title: specMgr.find('title', specMgr.getValue(spec)),
				desc: specMgr.find('desc', specMgr.getValue(spec))
			})
		}
	}
}
//# sourceURL=home/page-header
})
pico.define('home/page-header.asp','<h1>\n	<%d.title%>\n	<small>\n		<i class="ace-icon fa fa-angle-double-right"></i>\n		<%d.desc%>\n	</small>\n</h1>\n')
pico.define('home/page-content',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
return {
	create(deps, params){
		this.setElement(this.el.querySelector('.col-ex-12'))
		this.super.create.call(this, deps, params)
	},
	render(){
		this.signals.moduleAdded().send(this.host)
		return this.el
	},
	slots: {
		'changeContent': function(from, sender, route, spec, params){
			this.clear()
			this.spawnBySpec([spec], params)
		}
	}
}
//# sourceURL=home/page-content
})
pico.define('home/footer.html','<span class=bigger-120>\n	<span class="blue bolder">Jasa</span> WS &copy; 2019\n</span>\n\n&nbsp; &nbsp;\n\n<span class=action-buttons>\n	<a href=#> <i class="ace-icon fa fa-twitter-square light-blue bigger-150"></i> </a>\n\n	<a href=#> <i class="ace-icon fa fa-facebook-square text-primary bigger-150"></i> </a>\n\n	<a href=#> <i class="ace-icon fa fa-rss-square orange bigger-150"></i> </a>\n</span>\n')
pico.define('home/scrollup',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
function scroll(evt_, target){
	var scroll = ace.helper.scrollTop()
	var h = ace.helper.winHeight()
	var body_sH = document.body.scrollHeight
	if(scroll > parseInt(h / 4) || (scroll > 0 && body_sH >= h && h + scroll >= body_sH - 1)) {//|| for smaller pages, when reached end of page
		if(!this._is_visible) {
			target.classList.add('display')
			this._is_visible = true
		}
	} else {
		if(this._is_visible) {
			target.classList.remove('display')
			this._is_visible = false
		}
	}
}

return {
	create(deps, params){
		this.super.create.call(this, deps, params)
		this._is_visible = false
		$(window).on('scroll.scroll_btn', () => {
			scroll.call(this, null, this.el)
		})
		scroll.call(this, null, this.el)
	},
	remove(){
		$(window).off('scroll.scroll_btn')
	},
	events: {
		[ace.click_event]: function(evt, target){
			var duration = Math.min(500, Math.max(100, parseInt(ace.helper.scrollTop() / 3)))
			$('html,body').animate({scrollTop: 0}, duration)
			return false
		}
	}
}
//# sourceURL=home/scrollup
})
pico.define('email/frame',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
function countUnread(inbox){
	let count = 0
	inbox.forEach(m => {
		count += m.read ? 0 : 1
	})
	return count
}

function update(){
	const {
		tpl,
		inbox,
		setting,
	} = this.deps
	const config = setting.get('mailbox')
	const pageSize = parseInt(config.size)

	this.el.innerHTML = tpl({
		inbox,
		pageIndex: parseInt(config.index),
		pageMax: Math.ceil(inbox.length() / pageSize),
		pageSize,
		pageSort: config.sort,
		unread: countUnread(inbox),
		search: config.search,
	})
	this.spawn(this.deps['email/mailbox'])
}

return {
	signals: ['mailboxRefresh'],
	deps: {
		tpl: 'file',
		mails: 'models',
		inbox: 'models',
		setting: 'models',
		bucket: 's3bucket',
		'email/mailbox': 'view',
	},
	create(deps, params){
		update.call(this)
		const inbox = deps.inbox
		const len = inbox.length()
		deps.bucket.list(inbox, deps.mails, err => {
			if (err) return alert(err)
			if (len !== inbox.length()){
				update.call(this)
			}
			inbox.callback.off('*', update, this)
			inbox.callback.on('*', update, this)
		})
	},
	remove(){
		this.deps.inbox.callback.off('*', update, this)
		this.super.remove.call(this)
	},
	events: {
		'click a.orderby': function(evt, target){
			evt.preventDefault()
			const sort = target.href.split('#')[1]
			const config = this.deps.setting.get('mailbox')
			if (config.sort === sort) return
			config.sort = sort
			this.signals.mailboxRefresh().send([this.host])
		},
		'click ul.pagination li': function(evt, target){
			evt.preventDefault()
			if (target.classList.contains('disabled')) return
			const a = target.querySelector('a')
			const config = this.deps.setting.get('mailbox')
			let index = parseInt(config.index)
			switch(a.href.split('#')[1]){
			case 'first':
				index = 1
				break
			case 'prev':
				index -= 1
				break
			case 'next':
				index += 1
				break
			case 'last':
				index = Math.ceil(this.deps.inbox.length() / config.size)
				break
			default:
				return
			}
			config.index = index
			update.call(this)
			this.signals.mailboxRefresh().send([this.host])
		},
		'input .nav-search-input': function(evt, target){
			const config = this.deps.setting.get('mailbox')
			config.search = target.value.toLowerCase()
			this.signals.mailboxRefresh(target.value.toLowerCase()).send([this.host])
		},
		'click .select-message': function(evt, target){
			const config = this.deps.setting.get('mailbox')
			config.select = target.id.slice('id-select-message-'.length)
			this.signals.mailboxRefresh().send([this.host])
		},
		'change #id-toggle-all': function(evt, target){
			const config = this.deps.setting.get('mailbox')
			config.select = target.checked ? 'all' : 'none'
			this.signals.mailboxRefresh().send([this.host])
		}
	}
}
//# sourceURL=email/frame
})
pico.define('email/frame.asp','<!-- #section:pages/inbox -->\n<div class="tabbable">\n	<ul id="inbox-tabs" class="inbox-tabs nav nav-tabs padding-16 tab-size-bigger tab-space-1">\n		<!-- #section:pages/inbox.compose-btn -->\n		<li class="li-new-mail pull-right">\n			<a data-toggle="tab" href="#write" data-target="write" class="btn-new-mail">\n				<span class="btn btn-purple no-border">\n					<i class="ace-icon fa fa-envelope bigger-130"></i>\n					<span class="bigger-110">Write Mail</span>\n				</span>\n			</a>\n		</li><!-- /.li-new-mail -->\n\n		<!-- /section:pages/inbox.compose-btn -->\n		<li class="active">\n			<a data-toggle="tab" href="#inbox" data-target="inbox">\n				<i class="blue ace-icon fa fa-inbox bigger-130"></i>\n				<span class="bigger-110">Inbox</span>\n			</a>\n		</li>\n\n		<li>\n			<a data-toggle="tab" href="#sent" data-target="sent">\n				<i class="orange ace-icon fa fa-location-arrow bigger-130"></i>\n				<span class="bigger-110">Sent</span>\n			</a>\n		</li>\n\n		<li>\n			<a data-toggle="tab" href="#draft" data-target="draft">\n				<i class="green ace-icon fa fa-pencil bigger-130"></i>\n				<span class="bigger-110">Draft</span>\n			</a>\n		</li>\n\n		<li class="dropdown">\n			<a data-toggle="dropdown" class="dropdown-toggle" href="#">\n				<i class="pink ace-icon fa fa-tags bigger-130"></i>\n\n				<span class="bigger-110">\n					Tags\n					<i class="ace-icon fa fa-caret-down"></i>\n				</span>\n			</a>\n\n			<ul class="dropdown-menu dropdown-light-blue dropdown-125">\n				<li>\n					<a data-toggle="tab" href="#tag-1">\n						<span class="mail-tag badge badge-pink"></span>\n						<span class="pink">Tag#1</span>\n					</a>\n				</li>\n\n				<li>\n					<a data-toggle="tab" href="#tag-family">\n						<span class="mail-tag badge badge-success"></span>\n						<span class="green">Family</span>\n					</a>\n				</li>\n\n				<li>\n					<a data-toggle="tab" href="#tag-friends">\n						<span class="mail-tag badge badge-info"></span>\n						<span class="blue">Friends</span>\n					</a>\n				</li>\n\n				<li>\n					<a data-toggle="tab" href="#tag-work">\n						<span class="mail-tag badge badge-grey"></span>\n						<span class="grey">Work</span>\n					</a>\n				</li>\n			</ul>\n		</li><!-- /.dropdown -->\n	</ul>\n\n	<div class="tab-content no-border no-padding">\n		<div id="inbox" class="tab-pane in active">\n			<div class="message-container">\n				<!-- #section:pages/inbox.navbar -->\n				<div id="id-message-list-navbar" class="message-navbar clearfix">\n					<div class="message-bar">\n						<div class="message-infobar" id="id-message-infobar">\n							<span class="blue bigger-150">Inbox</span>\n							<span class="grey bigger-110">(<%d.unread%> unread messages)</span>\n						</div>\n\n						<div class="message-toolbar hide">\n							<div class="inline position-relative align-left">\n								<button type="button" class="btn-white btn-primary btn btn-xs dropdown-toggle" data-toggle="dropdown">\n									<span class="bigger-110">Action</span>\n\n									<i class="ace-icon fa fa-caret-down icon-on-right"></i>\n								</button>\n\n								<ul class="dropdown-menu dropdown-lighter dropdown-caret dropdown-125">\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-mail-reply blue"></i>&nbsp; Reply\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-mail-forward green"></i>&nbsp; Forward\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-folder-open orange"></i>&nbsp; Archive\n										</a>\n									</li>\n\n									<li class="divider"></li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-eye blue"></i>&nbsp; Mark as read\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-eye-slash green"></i>&nbsp; Mark unread\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-flag-o red"></i>&nbsp; Flag\n										</a>\n									</li>\n\n									<li class="divider"></li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-trash-o red bigger-110"></i>&nbsp; Delete\n										</a>\n									</li>\n								</ul>\n							</div>\n\n							<div class="inline position-relative align-left">\n								<button type="button" class="btn-white btn-primary btn btn-xs dropdown-toggle" data-toggle="dropdown">\n									<i class="ace-icon fa fa-folder-o bigger-110 blue"></i>\n									<span class="bigger-110">Move to</span>\n\n									<i class="ace-icon fa fa-caret-down icon-on-right"></i>\n								</button>\n\n								<ul class="dropdown-menu dropdown-lighter dropdown-caret dropdown-125">\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop pink2"></i>&nbsp; Tag#1\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop blue"></i>&nbsp; Family\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop green"></i>&nbsp; Friends\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop grey"></i>&nbsp; Work\n										</a>\n									</li>\n								</ul>\n							</div>\n\n							<button type="button" class="btn btn-xs btn-white btn-primary">\n								<i class="ace-icon fa fa-trash-o bigger-125 orange"></i>\n								<span class="bigger-110">Delete</span>\n							</button>\n						</div>\n					</div>\n\n					<div>\n						<div class="messagebar-item-left">\n							<label class="inline middle">\n								<input type="checkbox" id="id-toggle-all" class="ace" />\n								<span class="lbl"></span>\n							</label>\n\n							&nbsp;\n							<div class="inline position-relative">\n								<a href="#" data-toggle="dropdown" class="dropdown-toggle">\n									<i class="ace-icon fa fa-caret-down bigger-125 middle"></i>\n								</a>\n\n								<ul class="dropdown-menu dropdown-lighter dropdown-100">\n									<li>\n										<a id="id-select-message-all" class=select-message href="#">All</a>\n									</li>\n\n									<li>\n										<a id="id-select-message-none" class=select-message href="#">None</a>\n									</li>\n\n									<li class="divider"></li>\n\n									<li>\n										<a id="id-select-message-unread" class=select-message href="#">Unread</a>\n									</li>\n\n									<li>\n										<a id="id-select-message-read" class=select-message href="#">Read</a>\n									</li>\n								</ul>\n							</div>\n						</div>\n\n						<div class="messagebar-item-right">\n							<div class="inline position-relative">\n								<a href="#" data-toggle="dropdown" class="dropdown-toggle">\n									Sort &nbsp;\n									<i class="ace-icon fa fa-caret-down bigger-125"></i>\n								</a>\n\n								<ul class="dropdown-menu dropdown-lighter dropdown-menu-right dropdown-100">\n									<li>\n										<a class=orderby href="#date">\n											<i class="ace-icon fa fa-check <%"time" === d.pageSort ? "green" : "invisible"%>"></i>\n											Date\n										</a>\n									</li>\n\n									<li>\n										<a class=orderby href="#from">\n											<i class="ace-icon fa fa-check <%"from" === d.pageSort ? "green" : "invisible"%>"></i>\n											From\n										</a>\n									</li>\n\n									<li>\n										<a class=orderby href="#subject">\n											<i class="ace-icon fa fa-check <%"subject" === d.pageSort ? "green" : "invisible"%>"></i>\n											Subject\n										</a>\n									</li>\n								</ul>\n							</div>\n						</div>\n\n						<!-- #section:pages/inbox.navbar-search -->\n						<!-- <div class="nav-search minimized"> -->\n						<div class=nav-search>\n							<form class="form-search">\n								<span class="input-icon">\n									<input type="text" autocomplete="off" class="input-small nav-search-input" placeholder="Search inbox ..." value=<%d.search%> >\n									<i class="ace-icon fa fa-search nav-search-icon"></i>\n								</span>\n							</form>\n						</div>\n\n						<!-- /section:pages/inbox.navbar-search -->\n					</div>\n				</div>\n\n				<div id="id-message-item-navbar" class="hide message-navbar clearfix">\n					<div class="message-bar">\n						<div class="message-toolbar">\n							<div class="inline position-relative align-left">\n								<button type="button" class="btn-white btn-primary btn btn-xs dropdown-toggle" data-toggle="dropdown">\n									<span class="bigger-110">Action</span>\n\n									<i class="ace-icon fa fa-caret-down icon-on-right"></i>\n								</button>\n\n								<ul class="dropdown-menu dropdown-lighter dropdown-caret dropdown-125">\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-mail-reply blue"></i>&nbsp; Reply\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-mail-forward green"></i>&nbsp; Forward\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-folder-open orange"></i>&nbsp; Archive\n										</a>\n									</li>\n\n									<li class="divider"></li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-eye blue"></i>&nbsp; Mark as read\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-eye-slash green"></i>&nbsp; Mark unread\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-flag-o red"></i>&nbsp; Flag\n										</a>\n									</li>\n\n									<li class="divider"></li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-trash-o red bigger-110"></i>&nbsp; Delete\n										</a>\n									</li>\n								</ul>\n							</div>\n\n							<div class="inline position-relative align-left">\n								<button type="button" class="btn-white btn-primary btn btn-xs dropdown-toggle" data-toggle="dropdown">\n									<i class="ace-icon fa fa-folder-o bigger-110 blue"></i>\n									<span class="bigger-110">Move to</span>\n\n									<i class="ace-icon fa fa-caret-down icon-on-right"></i>\n								</button>\n\n								<ul class="dropdown-menu dropdown-lighter dropdown-caret dropdown-125">\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop pink2"></i>&nbsp; Tag#1\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop blue"></i>&nbsp; Family\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop green"></i>&nbsp; Friends\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop grey"></i>&nbsp; Work\n										</a>\n									</li>\n								</ul>\n							</div>\n\n							<button type="button" class="btn btn-xs btn-white btn-primary">\n								<i class="ace-icon fa fa-trash-o bigger-125 orange"></i>\n								<span class="bigger-110">Delete</span>\n							</button>\n						</div>\n					</div>\n\n					<div>\n						<div class="messagebar-item-left">\n							<a href="#" class="btn-back-message-list">\n								<i class="ace-icon fa fa-arrow-left blue bigger-110 middle"></i>\n								<b class="bigger-110 middle">Back</b>\n							</a>\n						</div>\n\n						<div class="messagebar-item-right">\n							<i class="ace-icon fa fa-clock-o bigger-110 orange"></i>\n							<span class="grey">Today, 7:15 pm</span>\n						</div>\n					</div>\n				</div>\n\n				<div id="id-message-new-navbar" class="hide message-navbar clearfix">\n					<div class="message-bar">\n						<div class="message-toolbar">\n							<button type="button" class="btn btn-xs btn-white btn-primary">\n								<i class="ace-icon fa fa-floppy-o bigger-125"></i>\n								<span class="bigger-110">Save Draft</span>\n							</button>\n\n							<button type="button" class="btn btn-xs btn-white btn-primary">\n								<i class="ace-icon fa fa-times bigger-125 orange2"></i>\n								<span class="bigger-110">Discard</span>\n							</button>\n						</div>\n					</div>\n\n					<div>\n						<div class="messagebar-item-left">\n							<a href="#" class="btn-back-message-list">\n								<i class="ace-icon fa fa-arrow-left bigger-110 middle blue"></i>\n								<b class="middle bigger-110">Back</b>\n							</a>\n						</div>\n\n						<div class="messagebar-item-right">\n							<span class="inline btn-send-message">\n								<button type="button" class="btn btn-sm btn-primary no-border btn-white btn-round">\n									<span class="bigger-110">Send</span>\n\n									<i class="ace-icon fa fa-arrow-right icon-on-right"></i>\n								</button>\n							</span>\n						</div>\n					</div>\n				</div>\n\n				<!-- /section:pages/inbox.navbar -->\n				<div class="message-list-container">\n				</div>\n\n				<!-- #section:pages/inbox.message-footer -->\n				<div class="message-footer clearfix">\n					<div class="pull-left"> <%d.inbox.length()%> messages total </div>\n\n					<div class="pull-right">\n						<div class="inline middle"> page <%d.pageIndex%> of <%d.pageMax%> </div>\n\n						&nbsp; &nbsp;\n						<ul class="pagination middle">\n							<li class="<%1 === d.pageIndex ? "disabled" : ""%>">\n								<a href="#first">\n									<i class="ace-icon fa fa-step-backward middle"></i>\n								</a>\n							</li>\n\n							<li class="<%1 === d.pageIndex ? "disabled" : ""%>">\n								<a href="#prev">\n									<i class="ace-icon fa fa-caret-left bigger-140 middle"></i>\n								</a>\n							</li>\n\n							<li>\n								<span>\n									<input value=<%d.pageIndex%> maxlength=<%d.pageMax%> type=text />\n								</span>\n							</li>\n\n							<li class="<%d.pageMax === d.pageIndex ? "disabled" : ""%>">\n								<a href="#next">\n									<i class="ace-icon fa fa-caret-right bigger-140 middle"></i>\n								</a>\n							</li>\n\n							<li class="<%d.pageMax === d.pageIndex ? "disabled" : ""%>">\n								<a href="#last">\n									<i class="ace-icon fa fa-step-forward middle"></i>\n								</a>\n							</li>\n						</ul>\n					</div>\n				</div>\n\n				<div class="hide message-footer message-footer-style2 clearfix">\n					<div class="pull-left"> simpler footer </div>\n\n					<div class="pull-right">\n						<div class="inline middle"> message 1 of 151 </div>\n\n						&nbsp; &nbsp;\n						<ul class="pagination middle">\n							<li class="disabled">\n								<span>\n									<i class="ace-icon fa fa-angle-left bigger-150"></i>\n								</span>\n							</li>\n\n							<li>\n								<a href="#">\n									<i class="ace-icon fa fa-angle-right bigger-150"></i>\n								</a>\n							</li>\n						</ul>\n					</div>\n				</div>\n\n				<!-- /section:pages/inbox.message-footer -->\n			</div>\n		</div>\n	</div><!-- /.tab-content -->\n</div><!-- /.tabbable -->\n\n<!-- /section:pages/inbox -->\n\n<form id="id-message-form" class="hide form-horizontal message-form col-xs-12">\n	<!-- #section:pages/inbox.compose -->\n	<div>\n		<div class="form-group">\n			<label class="col-sm-3 control-label no-padding-right" for="form-field-recipient">Recipient:</label>\n\n			<div class="col-sm-9">\n				<span class="input-icon">\n					<input type="email" name="recipient" id="form-field-recipient" data-value="alex@doe.com" value="alex@doe.com" placeholder="Recipient(s)" />\n					<i class="ace-icon fa fa-user"></i>\n				</span>\n			</div>\n		</div>\n\n		<div class="hr hr-18 dotted"></div>\n\n		<div class="form-group">\n			<label class="col-sm-3 control-label no-padding-right" for="form-field-subject">Subject:</label>\n\n			<div class="col-sm-6 col-xs-12">\n				<div class="input-icon block col-xs-12 no-padding">\n					<input maxlength="100" type="text" class="col-xs-12" name="subject" id="form-field-subject" placeholder="Subject" />\n					<i class="ace-icon fa fa-comment-o"></i>\n				</div>\n			</div>\n		</div>\n\n		<div class="hr hr-18 dotted"></div>\n\n		<div class="form-group">\n			<label class="col-sm-3 control-label no-padding-right">\n				<span class="inline space-24 hidden-480"></span>\n				Message:\n			</label>\n\n			<!-- #section:plugins/editor.wysiwyg -->\n			<div class="col-sm-9">\n				<div class="wysiwyg-editor"></div>\n			</div>\n\n			<!-- /section:plugins/editor.wysiwyg -->\n		</div>\n\n		<div class="hr hr-18 dotted"></div>\n\n		<div class="form-group no-margin-bottom">\n			<label class="col-sm-3 control-label no-padding-right">Attachments:</label>\n\n			<div class="col-sm-9">\n				<div id="form-attachments">\n					<!-- #section:custom/file-input -->\n					<input type="file" name="attachment[]" />\n\n					<!-- /section:custom/file-input -->\n				</div>\n			</div>\n		</div>\n\n		<div class="align-right">\n			<button id="id-add-attachment" type="button" class="btn btn-sm btn-danger">\n				<i class="ace-icon fa fa-paperclip bigger-140"></i>\n				Add Attachment\n			</button>\n		</div>\n\n		<div class="space"></div>\n	</div>\n\n	<!-- /section:pages/inbox.compose -->\n</form>\n\n<div class="hide message-content" id="id-message-content">\n	<!-- #section:pages/inbox.message-header -->\n	<div class="message-header clearfix">\n		<div class="pull-left">\n			<span class="blue bigger-125"> Clik to open this message </span>\n\n			<div class="space-4"></div>\n\n			<i class="ace-icon fa fa-star orange2"></i>\n\n			&nbsp;\n			<img class="middle" alt="John&#39;s Avatar" src="dat/gopal.png" width="32" />\n			&nbsp;\n			<a href="#" class="sender">John Doe</a>\n\n			&nbsp;\n			<i class="ace-icon fa fa-clock-o bigger-110 orange middle"></i>\n			<span class="time grey">Today, 7:15 pm</span>\n		</div>\n\n		<div class="pull-right action-buttons">\n			<a href="#">\n				<i class="ace-icon fa fa-reply green icon-only bigger-130"></i>\n			</a>\n\n			<a href="#">\n				<i class="ace-icon fa fa-mail-forward blue icon-only bigger-130"></i>\n			</a>\n\n			<a href="#">\n				<i class="ace-icon fa fa-trash-o red icon-only bigger-130"></i>\n			</a>\n		</div>\n	</div>\n\n	<!-- /section:pages/inbox.message-header -->\n	<div class="hr hr-double"></div>\n\n	<!-- #section:pages/inbox.message-body -->\n	<div class="message-body">\n		<p>\n			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n		</p>\n\n		<p>\n			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n		</p>\n\n		<p>\n			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n		</p>\n\n		<p>\n			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n		</p>\n\n		<p>\n			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n		</p>\n\n		<p>\n			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n		</p>\n	</div>\n\n	<!-- /section:pages/inbox.message-body -->\n	<div class="hr hr-double"></div>\n\n	<!-- #section:pages/inbox.message-attachment -->\n	<div class="message-attachment clearfix">\n		<div class="attachment-title">\n			<span class="blue bolder bigger-110">Attachments</span>\n			&nbsp;\n			<span class="grey">(2 files, 4.5 MB)</span>\n\n			<div class="inline position-relative">\n				<a href="#" data-toggle="dropdown" class="dropdown-toggle">\n					&nbsp;\n					<i class="ace-icon fa fa-caret-down bigger-125 middle"></i>\n				</a>\n\n				<ul class="dropdown-menu dropdown-lighter">\n					<li>\n						<a href="#">Download all as zip</a>\n					</li>\n\n					<li>\n						<a href="#">Display in slideshow</a>\n					</li>\n				</ul>\n			</div>\n		</div>\n\n		&nbsp;\n		<ul class="attachment-list pull-left list-unstyled">\n			<li>\n				<a href="#" class="attached-file">\n					<i class="ace-icon fa fa-file-o bigger-110"></i>\n					<span class="attached-name">Document1.pdf</span>\n				</a>\n\n				<span class="action-buttons">\n					<a href="#">\n						<i class="ace-icon fa fa-download bigger-125 blue"></i>\n					</a>\n\n					<a href="#">\n						<i class="ace-icon fa fa-trash-o bigger-125 red"></i>\n					</a>\n				</span>\n			</li>\n\n			<li>\n				<a href="#" class="attached-file">\n					<i class="ace-icon fa fa-film bigger-110"></i>\n					<span class="attached-name">Sample.mp4</span>\n				</a>\n\n				<span class="action-buttons">\n					<a href="#">\n						<i class="ace-icon fa fa-download bigger-125 blue"></i>\n					</a>\n\n					<a href="#">\n						<i class="ace-icon fa fa-trash-o bigger-125 red"></i>\n					</a>\n				</span>\n			</li>\n		</ul>\n\n		<div class="attachment-images pull-right">\n			<div class="vspace-4-sm"></div>\n\n			<div>\n				<img width="36" alt="image 4" src="dat/thumb-4.jpg" />\n				<img width="36" alt="image 3" src="dat/thumb-3.jpg" />\n				<img width="36" alt="image 2" src="dat/thumb-2.jpg" />\n				<img width="36" alt="image 1" src="dat/thumb-1.jpg" />\n			</div>\n		</div>\n	</div>\n\n	<!-- /section:pages/inbox.message-attachment -->\n</div><!-- /.message-content -->\n')
pico.define('email/util',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const LOCALE = 'en-US'
const TIME_OPTIONS = { hour12: true, hour: '2-digit', minute: '2-digit' }
const DATE_OPTIONS = { day: 'numeric', month: 'short' }
const DATETIME_OPTIONS = { weekday: 'short', day: 'numeric', month: 'short', year: '2-digit', hour12: true, hour: '2-digit', minute: '2-digit' }

return {
	mailTime(time, now){
		if (!now) return time.toLocaleTimeString(LOCALE, DATETIME_OPTIONS)
		if (time.getFullYear() !== now.getFullYear())
			return time.toLocaleDateString()
		if (time.getMonth() === now.getMonth() && time.getDate() === now.getDate())
			return time.toLocaleTimeString(LOCALE, TIME_OPTIONS)
		return time.toLocaleDateString(LOCALE, DATE_OPTIONS)
	}
}
//# sourceURL=email/util
})
pico.define('email/mailbox',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const router = require('po/router')
const util = require('email/util')

/*
 * variables
 * sender: name of sender
 * time: mail created at, has a few display levels: show time(today), yesterday, day month, year
 * subject: mail subject
 * star: true or false
 * read: true or false
 * attachments: array of attachment, for paperclip icon
 * status: array: fa-reply, fa-mail-forward
 * tag: colour: badge-pink, badge-grey, badge-success
 */
function renderMail(item, select, now = new Date) {
	let selected = false
	switch(select){
	case 'all': selected = true; break
	case 'read': selected = !!item.read; break
	case 'unread': selected = !item.read; break
	}
	let mail = `
	<div class="message-item ${item.read ? '' : 'message-unread'}">
		<label class=inline><input type=checkbox class=ace ${selected ? 'checked' : ''}><span class=lbl></span></label>

		<i class="message-star ace-icon fa ${item.star ? 'fa-star orange2' : 'fa-star-o light-grey'}"></i>
		<span class=sender title="${item.sender}">${item.sender} </span>
		<span class=time>${util.mailTime(new Date(item.time), now)}</span>
	`
	if (item.attachments) {
		mail += '<span class=attachment><i class="ace-icon fa fa-paperclip"></i></span>'
	}
	mail += '<span class=summary>'
	if (item.status && item.status.length) {
		mail += '<span class=message-flags>'
		mail += item.status.reduce((acc, flag) => `<i class="ace-icon fa ${flag} light-grey"></i>`, '')
		mail += '</span>'
	}
	if (item.tag){
		mail += `<span class="badge ${item.tag} mail-tag"></span>`
	}
	mail += `<span class=text id="${item.id}">${item.subject}</span></span></div>`
	return mail
}

function sortCB(orderby){
	switch(orderby){
	case 'subject':
		return (a, b) => ((a.subject > b.subject) ? 1 : (a.subject < b.subject) ? -1 : 0)
	case 'from':
		return (a, b) => ((a.sender > b.sender) ? 1 : (a.sender < b.sender) ? -1 : 0)
	default:
		return (a, b) => ((a.time < b.time) ? 1 : (a.time > b.time) ? -1 : 0)
	}
}

function countUnread(inbox){
	let count = 0
	inbox.forEach(m => {
		count += m.read ? 0 : 1
	})
	return count
}

function refresh(ctx){
	const {
		tpl,
		inbox,
		setting,
	} = ctx.deps
	const config = setting.get('mailbox')
	const search = config.search
	const select = config.select

	let all = []
	if (search){
		all = inbox.filter(m => {
			return -1 !== m.sender.toLowerCase().indexOf(search) || -1 !== m.subject.toLowerCase().indexOf(search)
		})
	} else {
		inbox.forEach(m => {
			all.push(m)
		})
	}

	const pageSort = config.sort
	all.sort(sortCB(pageSort))

	let items = []
	const pageSize = parseInt(config.size)
	const pageIndex = parseInt(config.index)
	for(let i = pageSize * (pageIndex - 1), l = Math.min(pageSize * pageIndex, all.length); i < l; i++){
		items.push(all[i])
	}

	ctx.el.innerHTML = tpl({
		inbox,
		items,
		renderMail,
		pageIndex,
		pageMax: Math.ceil(inbox.length() / pageSize),
		pageSize,
		pageSort,
		unread: countUnread(inbox),
		search,
		select
	})
}

return {
	deps: {
		tpl: 'file',
		inbox: 'models',
		setting: 'models',
	},
	create(deps, params){
		refresh(this)
		this.super.create.call(this, deps, params)
	},
	events: {
		'click .text': function(evt, target){
			router.go('/dash/mail/view/'+target.id)
		},
	},
	slots: {
		mailboxRefresh(sender, from){
			refresh(this)
		}
	}
}
//# sourceURL=email/mailbox
})
pico.define('email/mailbox.asp','<div id=message-list class=message-list>\n<% for(let i = 0, m; m = d.items[i]; i++) { %>\n	<% d.renderMail(m, d.select) %>\n<% } %>\n</div>\n')
pico.define('email/mail',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const router = require('po/router')
const pObj = pico.export('pico/obj')
const util = require('email/util')
const KB = 1024
const MB = KB * KB

/* attachment
 * - content
 * - headers
 * -- content-id[0]
 * --- initial
 * --- value
 * -- content-disposition
 * --- initial
 * --- params
 * ---- size
 * -- content-type[0]
 * --- initial
 * --- params: {name: xxx.jpg}
 * --- type: image
 * --- value: image/jpeg
 */

function attachmentSize(attachments){
	if (!attachments.length) return 0
	const bytes = attachments.reduce((acc, a) => {
		acc += parseInt(pObj.dot(a, ['headers', 'content-disposition', 0, 'params', 'size'], 0))
		return acc
	}, 0)
	if (bytes < KB) return `${bytes} B`
	if (bytes < MB) return `${(bytes/KB).toFixed(2)} KB`
	return `${(bytes/MB).toFixed(2)} MB`
}

function decodeAttachment(input, output){
	if (input.length === output.length) return output
	const a = input[output.length]
	const bytes = new Uint8Array(a.content)
	const content = btoa(bytes.reduce((data, byte) => data + String.fromCharCode(byte), ''))
	output.push({
		content,
		cid: pObj.dot(a, ['headers', 'content-id', 0, 'value'], '').slice(4, -4),
		contentType: pObj.dot(a, ['headers', 'content-type', 0], {})
	})
	return decodeAttachment(input, output)
}

function replaceCID(el, attachments){
	attachments.forEach(a => {
		const imgs = el.querySelectorAll(`img[src="cid:${a.cid}"]`)
		imgs.forEach(img => {
			img.src = `data:${a.contentType.value};base64, ${a.content}`
		})
	})
}

return {
	deps: {
		tpl: 'file',
		inbox: 'models',
		mails: 'models',
		bucket: 's3bucket',
	},
	create(deps, params){
		deps.bucket.read(params.id, deps.inbox, deps.mails, (err, item, mail) => {
			if (err) return console.error(err)
			item.read = Date.now()
			const content = new TextDecoder('utf-8').decode(new Uint8Array(mail.body))
			const attachments = decodeAttachment(mail.attachments, [])
			this.el.innerHTML = deps.tpl({
				inbox: deps.inbox,
				index: deps.inbox.indexOf(item.id),
				sender: item.sender,
				time: util.mailTime(new Date(item.time)),
				subject: item.subject,
				content,
				attachments,
				attachmentSize: attachmentSize(mail.attachments)
			})
			replaceCID(this.el, attachments)
		})
	},
	events: {
		'click .messagebar-item-left': function(evt, target){
			router.go('/dash/mail')
		},
		'click ul.pagination.middle li': function(evt, target){
			evt.preventDefault()
			if (target.classList.contains('disabled')) return
			const a = target.querySelector('a')
			const id = a.href.split('#')[1]
			router.go('/dash/mail/view/'+id)
		},
		'click a': function(evt, target){
			const route = target.href.split('#')[1]
			switch(route){
			case 'preview':
			case 'reply':
			case 'forward':
			case 'delete':
				evt.preventDefault()
				alert('Work in progress')
				break
			}
		}
	}
}
//# sourceURL=email/mail
})
pico.define('email/mail.asp','<!-- #section:pages/inbox -->\n<div class="tabbable">\n	<ul id="inbox-tabs" class="inbox-tabs nav nav-tabs padding-16 tab-size-bigger tab-space-1">\n		<!-- #section:pages/inbox.compose-btn -->\n		<li class="li-new-mail pull-right">\n			<a data-toggle="tab" href="#write" data-target="write" class="btn-new-mail">\n				<span class="btn btn-purple no-border">\n					<i class="ace-icon fa fa-envelope bigger-130"></i>\n					<span class="bigger-110">Write Mail</span>\n				</span>\n			</a>\n		</li><!-- /.li-new-mail -->\n\n		<!-- /section:pages/inbox.compose-btn -->\n		<li class="active">\n			<a data-toggle="tab" href="#inbox" data-target="inbox">\n				<i class="blue ace-icon fa fa-inbox bigger-130"></i>\n				<span class="bigger-110">Inbox</span>\n			</a>\n		</li>\n\n		<li>\n			<a data-toggle="tab" href="#sent" data-target="sent">\n				<i class="orange ace-icon fa fa-location-arrow bigger-130"></i>\n				<span class="bigger-110">Sent</span>\n			</a>\n		</li>\n\n		<li>\n			<a data-toggle="tab" href="#draft" data-target="draft">\n				<i class="green ace-icon fa fa-pencil bigger-130"></i>\n				<span class="bigger-110">Draft</span>\n			</a>\n		</li>\n\n		<li class="dropdown">\n			<a data-toggle="dropdown" class="dropdown-toggle" href="#">\n				<i class="pink ace-icon fa fa-tags bigger-130"></i>\n\n				<span class="bigger-110">\n					Tags\n					<i class="ace-icon fa fa-caret-down"></i>\n				</span>\n			</a>\n\n			<ul class="dropdown-menu dropdown-light-blue dropdown-125">\n				<li>\n					<a data-toggle="tab" href="#tag-1">\n						<span class="mail-tag badge badge-pink"></span>\n						<span class="pink">Tag#1</span>\n					</a>\n				</li>\n\n				<li>\n					<a data-toggle="tab" href="#tag-family">\n						<span class="mail-tag badge badge-success"></span>\n						<span class="green">Family</span>\n					</a>\n				</li>\n\n				<li>\n					<a data-toggle="tab" href="#tag-friends">\n						<span class="mail-tag badge badge-info"></span>\n						<span class="blue">Friends</span>\n					</a>\n				</li>\n\n				<li>\n					<a data-toggle="tab" href="#tag-work">\n						<span class="mail-tag badge badge-grey"></span>\n						<span class="grey">Work</span>\n					</a>\n				</li>\n			</ul>\n		</li><!-- /.dropdown -->\n	</ul>\n\n	<div class="tab-content no-border no-padding">\n		<div id="inbox" class="tab-pane in active">\n			<div class="message-container">\n				<!-- #section:pages/inbox.navbar -->\n				<div id="id-message-list-navbar" class="hide message-navbar clearfix">\n					<div class="message-bar">\n						<div class="message-infobar" id="id-message-infobar">\n							<span class="blue bigger-150">Inbox</span>\n							<span class="grey bigger-110">(2 unread messages)</span>\n						</div>\n\n						<div class="message-toolbar hide">\n							<div class="inline position-relative align-left">\n								<button type="button" class="btn-white btn-primary btn btn-xs dropdown-toggle" data-toggle="dropdown">\n									<span class="bigger-110">Action</span>\n\n									<i class="ace-icon fa fa-caret-down icon-on-right"></i>\n								</button>\n\n								<ul class="dropdown-menu dropdown-lighter dropdown-caret dropdown-125">\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-mail-reply blue"></i>&nbsp; Reply\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-mail-forward green"></i>&nbsp; Forward\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-folder-open orange"></i>&nbsp; Archive\n										</a>\n									</li>\n\n									<li class="divider"></li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-eye blue"></i>&nbsp; Mark as read\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-eye-slash green"></i>&nbsp; Mark unread\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-flag-o red"></i>&nbsp; Flag\n										</a>\n									</li>\n\n									<li class="divider"></li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-trash-o red bigger-110"></i>&nbsp; Delete\n										</a>\n									</li>\n								</ul>\n							</div>\n\n							<div class="inline position-relative align-left">\n								<button type="button" class="btn-white btn-primary btn btn-xs dropdown-toggle" data-toggle="dropdown">\n									<i class="ace-icon fa fa-folder-o bigger-110 blue"></i>\n									<span class="bigger-110">Move to</span>\n\n									<i class="ace-icon fa fa-caret-down icon-on-right"></i>\n								</button>\n\n								<ul class="dropdown-menu dropdown-lighter dropdown-caret dropdown-125">\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop pink2"></i>&nbsp; Tag#1\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop blue"></i>&nbsp; Family\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop green"></i>&nbsp; Friends\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop grey"></i>&nbsp; Work\n										</a>\n									</li>\n								</ul>\n							</div>\n\n							<button type="button" class="btn btn-xs btn-white btn-primary">\n								<i class="ace-icon fa fa-trash-o bigger-125 orange"></i>\n								<span class="bigger-110">Delete</span>\n							</button>\n						</div>\n					</div>\n\n					<div>\n						<div class="messagebar-item-left">\n							<label class="inline middle">\n								<input type="checkbox" id="id-toggle-all" class="ace" />\n								<span class="lbl"></span>\n							</label>\n\n							&nbsp;\n							<div class="inline position-relative">\n								<a href="#" data-toggle="dropdown" class="dropdown-toggle">\n									<i class="ace-icon fa fa-caret-down bigger-125 middle"></i>\n								</a>\n\n								<ul class="dropdown-menu dropdown-lighter dropdown-100">\n									<li>\n										<a id="id-select-message-all" href="#">All</a>\n									</li>\n\n									<li>\n										<a id="id-select-message-none" href="#">None</a>\n									</li>\n\n									<li class="divider"></li>\n\n									<li>\n										<a id="id-select-message-unread" href="#">Unread</a>\n									</li>\n\n									<li>\n										<a id="id-select-message-read" href="#">Read</a>\n									</li>\n								</ul>\n							</div>\n						</div>\n\n						<div class="messagebar-item-right">\n							<div class="inline position-relative">\n								<a href="#" data-toggle="dropdown" class="dropdown-toggle">\n									Sort &nbsp;\n									<i class="ace-icon fa fa-caret-down bigger-125"></i>\n								</a>\n\n								<ul class="dropdown-menu dropdown-lighter dropdown-menu-right dropdown-100">\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-check green"></i>\n											Date\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-check invisible"></i>\n											From\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-check invisible"></i>\n											Subject\n										</a>\n									</li>\n								</ul>\n							</div>\n						</div>\n\n						<!-- #section:pages/inbox.navbar-search -->\n						<div class="nav-search minimized">\n							<form class="form-search">\n								<span class="input-icon">\n									<input type="text" autocomplete="off" class="input-small nav-search-input" placeholder="Search inbox ..." />\n									<i class="ace-icon fa fa-search nav-search-icon"></i>\n								</span>\n							</form>\n						</div>\n\n						<!-- /section:pages/inbox.navbar-search -->\n					</div>\n				</div>\n\n				<div id="id-message-item-navbar" class="message-navbar clearfix">\n					<div class="message-bar">\n						<div class="message-toolbar">\n							<div class="inline position-relative align-left">\n								<button type="button" class="btn-white btn-primary btn btn-xs dropdown-toggle" data-toggle="dropdown">\n									<span class="bigger-110">Action</span>\n\n									<i class="ace-icon fa fa-caret-down icon-on-right"></i>\n								</button>\n\n								<ul class="dropdown-menu dropdown-lighter dropdown-caret dropdown-125">\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-mail-reply blue"></i>&nbsp; Reply\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-mail-forward green"></i>&nbsp; Forward\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-folder-open orange"></i>&nbsp; Archive\n										</a>\n									</li>\n\n									<li class="divider"></li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-eye blue"></i>&nbsp; Mark as read\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-eye-slash green"></i>&nbsp; Mark unread\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-flag-o red"></i>&nbsp; Flag\n										</a>\n									</li>\n\n									<li class="divider"></li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-trash-o red bigger-110"></i>&nbsp; Delete\n										</a>\n									</li>\n								</ul>\n							</div>\n\n							<div class="inline position-relative align-left">\n								<button type="button" class="btn-white btn-primary btn btn-xs dropdown-toggle" data-toggle="dropdown">\n									<i class="ace-icon fa fa-folder-o bigger-110 blue"></i>\n									<span class="bigger-110">Move to</span>\n\n									<i class="ace-icon fa fa-caret-down icon-on-right"></i>\n								</button>\n\n								<ul class="dropdown-menu dropdown-lighter dropdown-caret dropdown-125">\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop pink2"></i>&nbsp; Tag#1\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop blue"></i>&nbsp; Family\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop green"></i>&nbsp; Friends\n										</a>\n									</li>\n\n									<li>\n										<a href="#">\n											<i class="ace-icon fa fa-stop grey"></i>&nbsp; Work\n										</a>\n									</li>\n								</ul>\n							</div>\n\n							<button type="button" class="btn btn-xs btn-white btn-primary">\n								<i class="ace-icon fa fa-trash-o bigger-125 orange"></i>\n								<span class="bigger-110">Delete</span>\n							</button>\n						</div>\n					</div>\n\n					<div>\n						<div class="messagebar-item-left">\n							<a href="#" class="btn-back-message-list">\n								<i class="ace-icon fa fa-arrow-left blue bigger-110 middle"></i>\n								<b class="bigger-110 middle">Back</b>\n							</a>\n						</div>\n\n						<div class="messagebar-item-right">\n							<i class="ace-icon fa fa-clock-o bigger-110 orange"></i>\n							<span class="grey"><%d.time%></span>\n						</div>\n					</div>\n				</div>\n\n				<div id="id-message-new-navbar" class="hide message-navbar clearfix">\n					<div class="message-bar">\n						<div class="message-toolbar">\n							<button type="button" class="btn btn-xs btn-white btn-primary">\n								<i class="ace-icon fa fa-floppy-o bigger-125"></i>\n								<span class="bigger-110">Save Draft</span>\n							</button>\n\n							<button type="button" class="btn btn-xs btn-white btn-primary">\n								<i class="ace-icon fa fa-times bigger-125 orange2"></i>\n								<span class="bigger-110">Discard</span>\n							</button>\n						</div>\n					</div>\n\n					<div>\n						<div class="messagebar-item-left">\n							<a href="#" class="btn-back-message-list">\n								<i class="ace-icon fa fa-arrow-left bigger-110 middle blue"></i>\n								<b class="middle bigger-110">Back</b>\n							</a>\n						</div>\n\n						<div class="messagebar-item-right">\n							<span class="inline btn-send-message">\n								<button type="button" class="btn btn-sm btn-primary no-border btn-white btn-round">\n									<span class="bigger-110">Send</span>\n\n									<i class="ace-icon fa fa-arrow-right icon-on-right"></i>\n								</button>\n							</span>\n						</div>\n					</div>\n				</div>\n\n				<!-- /section:pages/inbox.navbar -->\n				<div class="message-list-container">\n					<!-- #section:pages/inbox.message-list -->\n					<div class="message-content" id="id-message-content">\n						<!-- #section:pages/inbox.message-header -->\n						<div class="message-header clearfix">\n							<div class="pull-left">\n								<span class="blue bigger-125"> <%d.subject%> </span>\n\n								<div class="space-4"></div>\n\n								<i class="ace-icon fa fa-star orange2"></i>\n\n								&nbsp;\n								<img class="middle" alt="<%d.sender%>&#39;s Avatar" src="dat/avatar2.png" width="32">\n								&nbsp;\n								<a href="#" class="sender"><%d.sender%></a>\n\n								&nbsp;\n								<i class="ace-icon fa fa-clock-o bigger-110 orange middle"></i>\n								<span class="time grey"><%d.time%></span>\n							</div>\n\n							<div class="pull-right action-buttons">\n								<a href="#reply">\n									<i class="ace-icon fa fa-reply green icon-only bigger-130"></i>\n								</a>\n\n								<a href="#forward">\n									<i class="ace-icon fa fa-mail-forward blue icon-only bigger-130"></i>\n								</a>\n\n								<a href="#delete">\n									<i class="ace-icon fa fa-trash-o red icon-only bigger-130"></i>\n								</a>\n							</div>\n						</div>\n\n						<!-- /section:pages/inbox.message-header -->\n						<div class="hr hr-double"></div>\n\n						<!-- #section:pages/inbox.message-body -->\n						<%d.content%>\n						<!-- /section:pages/inbox.message-body -->\n						<div class="hr hr-double"></div>\n\n						<!-- #section:pages/inbox.message-attachment -->\n						<div class="message-attachment clearfix">\n							<div class="attachment-title">\n								<span class="blue bolder bigger-110">Attachments</span>\n								&nbsp;\n								<span class="grey">(<%d.attachments.length%> files, <%d.attachmentSize%>)</span>\n\n								<div class="inline position-relative">\n									<a href="#" data-toggle="dropdown" class="dropdown-toggle">\n										&nbsp;\n										<i class="ace-icon fa fa-caret-down bigger-125 middle"></i>\n									</a>\n\n									<ul class="dropdown-menu dropdown-lighter">\n										<li>\n											<a href="#">Download all as zip</a>\n										</li>\n\n										<li>\n											<a href="#">Display in slideshow</a>\n										</li>\n									</ul>\n								</div>\n							</div>\n\n							&nbsp;\n							<ul class="attachment-list pull-left list-unstyled">\n								<%for(var i = 0, a, icon, name, t; (a = d.attachments[i]); i++){%>\n									<%if ("image" === a.contentType.type) continue;%>\n									<% console.log(JSON.stringify(a.contentType)) %>\n									<li>\n										<a href="#preview" class="attached-file">\n											<i class="ace-icon fa <%"video" === a.contentType.type ? "fa-film" : "fa-file-o"%> bigger-110"></i>\n											<span class="attached-name"><%a.contentType.params.name%></span>\n										</a>\n\n										<span class="action-buttons">\n											<a href="<%`data:${a.contentType.value};base64, ${a.content}`%>" download="<%a.contentType.params.name%>">\n												<i class="ace-icon fa fa-download bigger-125 blue"></i>\n											</a>\n\n											<a href="#delete">\n												<i class="ace-icon fa fa-trash-o bigger-125 red"></i>\n											</a>\n										</span>\n									</li>\n								<%}%>\n							</ul>\n\n							<div class="attachment-images pull-right">\n								<div class="vspace-4-sm"></div>\n								<%for(var i = 0, a; (a = d.attachments[i]); i++){%>\n									<%if ("image" !== a.contentType.type) continue;%>\n									<a href="<%`data:${a.contentType.value};base64, ${a.content}`%>" download="<%a.contentType.params.name%>">\n										<img width="36" alt="<%a.contentType.params.name%>" src="<%`data:${a.contentType.value};base64, ${a.content}`%>">\n									</a>\n								<%}%>\n								<div>\n								</div>\n							</div>\n						</div>\n\n						<!-- /section:pages/inbox.message-attachment -->\n					</div>\n					<!-- /section:pages/inbox.message-list -->\n				</div>\n\n				<!-- #section:pages/inbox.message-footer -->\n				<div class="hide message-footer clearfix">\n					<div class="pull-left"> 151 messages total </div>\n\n					<div class="pull-right">\n						<div class="inline middle"> page 1 of 16 </div>\n\n						&nbsp; &nbsp;\n						<ul class="pagination middle">\n							<li class="disabled">\n								<span>\n									<i class="ace-icon fa fa-step-backward middle"></i>\n								</span>\n							</li>\n\n							<li class="disabled">\n								<span>\n									<i class="ace-icon fa fa-caret-left bigger-140 middle"></i>\n								</span>\n							</li>\n\n							<li>\n								<span>\n									<input value="1" maxlength="3" type="text" />\n								</span>\n							</li>\n\n							<li>\n								<a href="#">\n									<i class="ace-icon fa fa-caret-right bigger-140 middle"></i>\n								</a>\n							</li>\n\n							<li>\n								<a href="#">\n									<i class="ace-icon fa fa-step-forward middle"></i>\n								</a>\n							</li>\n						</ul>\n					</div>\n				</div>\n\n				<div class="message-footer message-footer-style2 clearfix">\n					<div class="pull-left"> last read on <%d.read ? new Date(d.read) : new Date()%> </div>\n\n					<div class="pull-right">\n						<div class="inline middle"> message <%d.index + 1%> of <%d.inbox.length()%> </div>\n\n						&nbsp; &nbsp;\n						<ul class="pagination middle">\n							<li class="<%d.index ? "" : "disabled"%>">\n								<a href="#<%d.inbox.at(d.index - 1).id%>">\n									<i class="ace-icon fa fa-angle-left bigger-150"></i>\n								</a>\n							</li>\n\n							<li class="<%(d.index + 1) >= d.inbox.length() ? "disabled" : ""%>">\n								<a href="#<%d.inbox.at(d.index + 1).id%>">\n									<i class="ace-icon fa fa-angle-right bigger-150"></i>\n								</a>\n							</li>\n						</ul>\n					</div>\n				</div>\n\n				<!-- /section:pages/inbox.message-footer -->\n			</div>\n		</div>\n	</div><!-- /.tab-content -->\n</div><!-- /.tabbable -->\n\n<!-- /section:pages/inbox -->\n')
pico.define('config/mailbox',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const router = require('po/router')

function saved(err, model){
	if (err) return alert(JSON.stringify(err))
	alert('saved')
	router.go('/dash/config/mailboxes')
}

return {
	deps: {
		config: 'models',
	},
	create(deps, params){
		this.form = this.el.querySelector('form')
		const data = deps.config.get(params.name)
		if (!data) return
		this.configId = data.id
		if (data.name){
			const f = this.form
			const env = data.env
			f['name'].value = env.name,
			f['region'].value = env.region,
			f['Bucket'].value = env.Bucket,
			f['IdentityPoolId'].value = env.IdentityPoolId,
			f['UserPoolId'].value = env.UserPoolId,
			f['ClientId'].value = env.ClientId
		}
	},
	events: {
		'click button#mailbox-submit': function(evt, target){
			const f = this.form
			if (!f.reportValidity()) return

			const data = {
				id: this.configId,
				name: f['name'].value,
				region: f['region'].value,
				Bucket: f['Bucket'].value,
				IdentityPoolId: f['IdentityPoolId'].value,
				UserPoolId: f['UserPoolId'].value,
				ClientId: f['ClientId'].value
			}

			if (data.id){
				this.deps.config.replace(data, saved)
			}else{
				this.deps.config.create(data, saved)
			}

		},
		'click button#mailbox-reset': function(evt, target){
		}
	}
}
//# sourceURL=config/mailbox
})
pico.define('config/mailbox.html','<form class=form-horizontal role=form>\n	<!-- #section:elements.form -->\n	<div class=form-group>\n		<label class="col-sm-3 control-label no-padding-right" for=name> Domain Name </label>\n\n		<div class=col-sm-9>\n			<input type=text id=name placeholder=jasaws.com class="col-xs-10 col-sm-6"\n				autocapitalize=off\n				autocomplete=off\n				spellcheck=false\n				autocorrect=off\n				required>\n		</div>\n	</div>\n\n	<div class=form-group>\n		<label class="col-sm-3 control-label no-padding-right" for=region> AWS Region </label>\n\n		<div class=col-sm-9>\n			<input type=text id=region placeholder=ap-southeast-1 class="col-xs-10 col-sm-6"\n				autocapitalize=off\n				autocomplete=off\n				spellcheck=false\n				autocorrect=off\n				required>\n		</div>\n	</div>\n\n	<div class=form-group>\n		<label class="col-sm-3 control-label no-padding-right" for=Bucket> S3 Bucket Name </label>\n\n		<div class=col-sm-9>\n			<input type=text id=Bucket placeholder="my-mailbox-bucket-name" class="col-xs-10 col-sm-6"\n				autocapitalize=off\n				autocomplete=off\n				spellcheck=false\n				autocorrect=off\n				required>\n		</div>\n	</div>\n\n	<div class=form-group>\n		<label class="col-sm-3 control-label no-padding-right" for=IdentityPoolId> Cognito Identity Pool Id</label>\n\n		<div class=col-sm-9>\n			<input type=text id=IdentityPoolId placeholder=ap-southeast-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx class="col-xs-10 col-sm-6"\n				autocapitalize=off\n				autocomplete=off\n				spellcheck=false\n				autocorrect=off\n				required>\n			<span class="help-inline col-xs-12 col-sm-3">\n				<span class=middle><a href="https://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-with-identity-pools.html#create-identity-pool">?</a></span>\n			</span>\n		</div>\n	</div>\n\n	<div class=space-4></div>\n\n	<div class=form-group>\n		<label class="col-sm-3 control-label no-padding-right" for=UserPoolId> Cognito User Pool Id </label>\n\n		<div class=col-sm-9>\n			<input type=text class="col-xs-10 col-sm-6" id=UserPoolId placeholder=ap-southeast-1_xxxxxxxxx\n				autocapitalize=off\n				autocomplete=off\n				spellcheck=false\n				autocorrect=off\n				required>\n			<span class="help-inline col-xs-12 col-sm-3">\n				<span class=middle><a href="https://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-with-identity-pools.html#create-identity-pool">?</a></span>\n			</span>\n		</div>\n	</div>\n\n	<div class=space-4></div>\n\n	<div class=form-group>\n		<label class="col-sm-3 control-label no-padding-right" for=ClientId> Client Id </label>\n\n		<div class=col-sm-9>\n			<input class="col-xs-10 col-sm-6" type=text id=ClientId placeholder=xxxxxxxxxxxxxxxxxxxxxxxxxx\n				autocapitalize=off\n				autocomplete=off\n				spellcheck=false\n				autocorrect=off\n				required>\n			<div class=space-2></div>\n\n			<div class=help-block id=input-size-slider></div>\n		</div>\n	</div>\n\n	<div class="clearfix form-actions">\n		<div class="col-md-offset-3 col-md-9">\n			<button id=mailbox-submit class="btn btn-info" type=button>\n				<i class="ace-icon fa fa-check bigger-110"></i>\n				Submit\n			</button>\n\n			&nbsp; &nbsp; &nbsp;\n			<button id=mailbox-reset class=btn type=reset>\n				<i class="ace-icon fa fa-undo bigger-110"></i>\n				Reset\n			</button>\n		</div>\n	</div>\n</form>\n')
pico.define('config/mailboxes',function anonymous(exports,require,module,define,inherit,pico
) {
"use strict";
const router = require('po/router')

return {
	deps: {
		config: 'models',
	},
	render(){
		this.table = $('#dynamic-table').DataTable({
			columns: [
				{ title: 'name', data: 'name' },
				{ title: 'region', data: 'region' },
				{ title: 'Bucket', data: 'Bucket' },
				{ title: 'IdentityPoolId', data: 'IdentityPoolId' },
				{ title: 'UserPoolId', data: 'UserPoolId' },
				{ title: 'ClientId', data: 'ClientId' },
				{
					title: 'Actions',
					data: null,
					className: 'center',
					defaultContent: '<a href="" class="editor_edit">Edit</a> / <a href="" class="editor_remove">Delete</a>',
				}
			]
		})
		const config = this.deps.config
		config.list(1, 10, (err, models) => {
			if (err) alert(JSON.stringify(err))

			config.forEach(model => {
				this.table.row.add(model.env).draw()
			})
		})
		return this.el
	},
	events: {
		'click a.editor_edit': function(evt, target){
			evt.preventDefault()
			const tr = target.closest('tr')
			const name = tr.getElementsByTagName('td')[0].innerHTML
			router.go('/dash/config/mailbox/' + name)
		},
		'click a.editor_remove': function(evt, target){
			evt.preventDefault()
			const tr = target.closest('tr')
			const name = tr.getElementsByTagName('td')[0].innerHTML
			if (!name) return
			__.dialogs.confirm(`Are you sure you wish to remove [${name}] record?`, 'Remove Mailbox Config', 'ok,cancel', btn => {
				if (2 === btn) return
				this.deps.config.remove(name, (err, model) => {
					if (err) return alert(JSON.stringify(err))
					this.table.row(tr).remove().draw()
				})
			})
		}
	}
}
//# sourceURL=config/mailboxes
})
pico.define('config/mailboxes.html','<div class="row">\n	<div class="col-xs-12">\n\n		<div class="clearfix">\n			<div class="pull-right tableTools-container"></div>\n		</div>\n		<div class="table-header">\n			Your Registered Email Domains\n		</div>\n\n		<!-- div.table-responsive -->\n\n		<!-- div.dataTables_borderWrap -->\n		<div>\n			<table id="dynamic-table" class="table table-striped table-bordered table-hover">\n			</table>\n		</div>\n	</div>\n</div>\n')

pico.run({
	name: 'xin',
	ajax: __.ajax,
	onLoad: __.load,
	env:{
		live:false,
		dataset:(function(el){
			if (el) return el.dataset
			return {}
		})(document.getElementById('picoEnv'))
	},
	preprocessors:{
		'.asp':function(url,asp){
			return pico.export('pico/str').template(asp)
		}
	},
	paths:{
		'~': './mod/',
		root: './',
		main: './main/',
		cfg: './cfg/',
		p: './lib/pico/',
		po: './lib/pojs/',
		emailjs: './lib/emailjs/'
	}
},function(){
	var specMgr= require('p/specMgr')
	var View= require('p/View')
	var project = require('cfg/xin.json')
	var env = require('cfg/env.json')
	var main

	return function(){
		specMgr.load(null, null, project, function(err, spec){
			if (err) return console.error(err)
			main = new View
			main.spawnBySpec(spec, null, env)
		})
	}
})

