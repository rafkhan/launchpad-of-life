/*! ramda 2014-11-19 */
!function(n){"object"==typeof exports?module.exports=n(this):"function"==typeof define&&define.amd?define(n):this.R=n(this)}(function(){"use strict";function n(){return new TypeError("Function called with no arguments")}function r(t,e,u){switch(arguments.length){case 0:throw n();case 1:return r(t,0,t.length);case 2:return r(t,e,t.length);default:for(var i=Math.max(0,u-e),o=new Array(i),a=-1;++a<i;)o[a]=t[e+a];return o}}function t(n,r){n=n||[],r=r||[];var t,e=n.length,u=r.length,i=new Array(e+u);for(t=-1;++t<e;)i[t]=n[t];for(t=-1;++t<u;)i[e+t]=r[t];return i}function e(r){return function(t,e){switch(arguments.length){case 0:throw n();case 1:return function(n){return r(t,n)};default:return r(t,e)}}}function u(r){return function(t,u,i){switch(arguments.length){case 0:throw n();case 1:return e(function(n,e){return r(t,n,e)});case 2:return function(n){return r(t,u,n)};default:return r(t,u,i)}}}function i(n,r){return null!=r&&!$(r)&&"function"==typeof r[n]}function o(n,r){return function(t,e,u){var i=arguments.length,o=arguments[i-1],a=o&&!$(o)&&"function"==typeof o[n];switch(arguments.length){case 0:return r();case 1:return a?o[n]():r(t);case 2:return a?o[n](t):r(t,e);case 3:return a?o[n](t,e):r(t,e,u)}}}function a(n,r){for(var t=-1,e=r.length;++t<e;)n(r[t]);return r}function c(n,r,t){switch(n&&Z.call(n)){case"[object Object]":return f(n,{},r,t);case"[object Array]":return f(n,[],r,t);case"[object Function]":return n;case"[object Date]":return new Date(n);default:return n}}function f(n,r,t,e){for(var u=t.length,i=-1;++i<u;)if(n===t[i])return e[i];t.push(n),e.push(r);for(var o in n)r[o]=c(n[o],t,e);return r}function s(n,r){return t([n],r)}function l(n,r){return t(r,[n])}function h(n,r){return function(){return n.call(this,r.apply(this,arguments))}}function p(n,r){return function(){var t=this,e=r.apply(this,arguments);return g(e)?e.then(function(r){return n.call(t,r)}):n.call(this,e)}}function g(n){return null!=n&&n===Object(n)&&n.then&&"function"==typeof n.then}function v(r){return function(){switch(arguments.length){case 0:throw n();case 1:return arguments[0];default:for(var t=arguments.length-1,e=arguments[t],u=e.length;t--;)e=r(arguments[t],e);return rr(u,e)}}}function m(n){return function(t){var e=r(arguments,1);return rr(Math.max(0,t.length-e.length),function(){return t.apply(this,n(e,arguments))})}}function y(n,r){for(var t=-1,e=r.length,u=new Array(e);++t<e;)u[t]=n(r[t]);return u}function d(n,r){for(var t=-1,e=r.length,u=[];++t<e;)n(r[t])&&u.push(r[t]);return u}function w(n,r){for(var t=-1,e=r.length,u=[];++t<e;)n(r[t],t,r)&&u.push(r[t]);return u}function b(n,r){for(var t=-1;++t<r.length;)if(!n(r[t]))return!1;return!0}function x(n,r){for(var t=-1;++t<r.length;)if(n(r[t]))return!0;return!1}function j(n,r,t){var e=0,u=n.length;for("number"==typeof t&&(e=0>t?Math.max(0,u+t):t);u>e;){if(n[e]===r)return e;++e}return-1}function O(n,r,t){var e=n.length;for("number"==typeof t&&(e=0>t?e+t+1:Math.min(e,t+1));--e>=0;)if(n[e]===r)return e;return-1}function k(n,r){return j(r,n)>=0}function A(n,r,t){for(var e=-1,u=t.length;++e<u;)if(n(r,t[e]))return!0;return!1}function I(n){return function r(t){for(var e,u,i,o=[],a=-1,c=t.length;++a<c;)if(G(t[a]))for(e=n?r(t[a]):t[a],u=-1,i=e.length;++u<i;)o.push(e[u]);else o.push(t[a]);return o}}function P(n){return function(r){return y(function(n){return[n,r[n]]},n(r))}}function E(n,r){for(var t,e={},u=Ur(r),i=u.length,o=-1;++o<i;)t=u[o],n(r[t],t,r)&&(e[t]=r[t]);return e}function M(n,r){var t={};return a(function(n){t[n]=r[n]},n),t}function W(n,r){for(var t=Fr(r),e=-1,u=t.length;++e<u;)n[t[e]]=r[t[e]];return n}function N(n,r,t){if(n===t)return!0;if(null==t)return!1;r.fn=r.fn||[],r.obj=r.obj||[];for(var e,u,i=-1,o=r.fn.length,a=-1,c=r.obj.length;++i<o;){if(e=r.fn[i],u=n[e],!(e in t))return!1;if(!u(t[e],t))return!1}for(;++a<c;)if(e=r.obj[a],n[e]!==t[e])return!1;return!0}function S(n){return function(t){var e=function(){var r=arguments;return n(function(n){return n.apply(null,r)},t)};return arguments.length>1?e.apply(null,r(arguments,1)):rr(Jr(Wr("length",t)),e)}}function T(n,r){return n+r}function C(n,r){return n*r}function L(n,r){return r>n}function q(n,r){return n>r}function B(r,t){return function(e){if(0===arguments.length)throw n();for(var u,i=-1,o=t;++i<e.length;)u=+e[i],r(u,o)&&(o=u);return o}}function R(n){return function(r,t){if(t&&t.length>0){for(var e,u=0,i=t[u],o=r(i);++u<t.length;)e=r(t[u]),n(e,o)&&(o=e,i=t[u]);return i}}}function z(n,r){var t,e=-1,u=n.length;if(null!=r){for(t=r;null!=t&&++e<u;)t=t[n[e]];return t}}function F(n,r){return y(function(r){return{key:n(r),val:r}},r)}function U(n){return function(r){return d(function(n){return"function"==typeof r[n]},n(r))}}var _,D={version:"0.8.0"},Z=Object.prototype.toString,$=Array.isArray||function(n){return null!=n&&n.length>=0&&"[object Array]"===Z.call(n)},G=D.isArrayLike=function(n){return $(n)?!0:n?"object"!=typeof n?!1:n instanceof String?!1:1===n.nodeType?!!n.length:0===n.length?!0:n.length>0?n.hasOwnProperty(0)&&n.hasOwnProperty(n.length-1):!1:!1};try{Object.defineProperty(D,"__",{writable:!1,value:_})}catch(H){D.__=_}var J=D.op=function(r){var t=r.length;if(2!==t)throw new Error("Expected binary function.");return function e(t,u){switch(arguments.length){case 0:throw n();case 1:return t===_?nr(V(e)):Y(vr(r,t));default:return t===_?Y(mr(r,u)):r(t,u)}}},K=D.curryN=function(r,e){return function u(i){return rr(Math.max(r-(i&&i.length||0),0),function(){if(0===arguments.length)throw n();var o=t(i,arguments);return o.length>=r?e.apply(this,o):u(o)})}([])},Q=D.curry=function(n){return K(n.length,n)},V=D.flip=function(e){return function(u,i){switch(arguments.length){case 0:throw n();case 1:return function(n){return e.apply(this,[n,u].concat(r(arguments,1)))};default:return e.apply(this,t([i,u],r(arguments,2)))}}},X=D.nAry=function(n,r){switch(n){case 0:return function(){return r.call(this)};case 1:return function(n){return r.call(this,n)};case 2:return function(n,t){return r.call(this,n,t)};case 3:return function(n,t,e){return r.call(this,n,t,e)};case 4:return function(n,t,e,u){return r.call(this,n,t,e,u)};case 5:return function(n,t,e,u,i){return r.call(this,n,t,e,u,i)};case 6:return function(n,t,e,u,i,o){return r.call(this,n,t,e,u,i,o)};case 7:return function(n,t,e,u,i,o,a){return r.call(this,n,t,e,u,i,o,a)};case 8:return function(n,t,e,u,i,o,a,c){return r.call(this,n,t,e,u,i,o,a,c)};case 9:return function(n,t,e,u,i,o,a,c,f){return r.call(this,n,t,e,u,i,o,a,c,f)};case 10:return function(n,t,e,u,i,o,a,c,f,s){return r.call(this,n,t,e,u,i,o,a,c,f,s)};default:return r}},Y=D.unary=function(n){return X(1,n)},nr=D.binary=function(n){return X(2,n)},rr=D.arity=function(n,r){switch(n){case 0:return function(){return r.apply(this,arguments)};case 1:return function(n){return r.apply(this,arguments)};case 2:return function(n,t){return r.apply(this,arguments)};case 3:return function(n,t,e){return r.apply(this,arguments)};case 4:return function(n,t,e,u){return r.apply(this,arguments)};case 5:return function(n,t,e,u,i){return r.apply(this,arguments)};case 6:return function(n,t,e,u,i,o){return r.apply(this,arguments)};case 7:return function(n,t,e,u,i,o,a){return r.apply(this,arguments)};case 8:return function(n,t,e,u,i,o,a,c){return r.apply(this,arguments)};case 9:return function(n,t,e,u,i,o,a,c,f){return r.apply(this,arguments)};case 10:return function(n,t,e,u,i,o,a,c,f,s){return r.apply(this,arguments)};default:return r}},tr=D.invokerN=function(n,t){var e=r(arguments,2),u=n-e.length;return K(u+1,function(){var n=arguments[u],i=e.concat(r(arguments,0,u));return n[t].apply(n,i)})},er=D.useWith=function(n){var t=r(arguments,1),e=t.length;return Q(rr(e,function(){for(var u=[],i=-1;++i<e;)u.push(t[i](arguments[i]));return n.apply(this,u.concat(r(arguments,e)))}))};D.forEach=e(a),D.forEach.idx=e(function(n,r){for(var t=-1,e=r.length;++t<e;)n(r[t],t,r);return r});var ur=D.clone=function(n){return r(n)};D.cloneDeep=function(n){return c(n,[],[])};var ir=D.isEmpty=function(n){return null==n||0===n.length},or=D.prepend=e(s);D.cons=or,D.prependTo=V(s);var ar=D.nth=e(function(n,r){return 0>n?r[r.length+n]:r[n]}),cr=D.head=ar(0);D.car=cr,D.last=ar(-1);var fr=D.tail=o("tail",function(n){return r(n,1)});D.cdr=fr;var sr=D.append=e(l);D.push=sr,D.appendTo=V(l),D.concat=e(function(n,r){if($(r))return t(n,r);if(i("concat",n))return n.concat(r);throw new TypeError("can't concat "+typeof n)});var lr=D.identity=function(n){return n};D.I=lr,D.argN=function(n){return function(){return arguments[n]}};var hr=D.times=e(function(n,r){for(var t=new Array(r),e=-1;++e<r;)t[e]=n(e);return t});D.repeatN=e(function(n,r){return hr(zr(n),r)}),D.apply=e(function(n,r){return n.apply(this,r)}),D.unapply=function(t){if(0===arguments.length)throw n();return function(){return t(r(arguments))}};var pr=D.compose=v(h),gr=D.pCompose=v(p);D.pipe=function(){return pr.apply(this,Cr(arguments))},D.pPipe=function(){return gr.apply(this,Cr(arguments))};var vr=D.lPartial=m(t),mr=D.rPartial=m(V(t));D.memoize=function(n){if(!n.length)return yr(n);var t={};return function(){if(arguments.length){var e=wr(function(n,r){return n[r]||(n[r]={})},t,r(arguments,0,arguments.length-1)),u=arguments[arguments.length-1];return e[u]||(e[u]=n.apply(this,arguments))}}};var yr=D.once=function(n){var r,t=!1;return function(){return t?r:(t=!0,r=n.apply(this,arguments))}};D.wrap=function(n,r){return rr(n.length,function(){return r.apply(this,t([n],arguments))})};var dr=D.constructN=e(function(n,r){var t=function(){var n,t,e=function(){};return e.prototype=r.prototype,n=new e,t=r.apply(n,arguments),Object(t)===t?t:n};return n>1?Q(X(n,t)):t});D.construct=function(n){return dr(n.length,n)},D.converge=function(n){var t=r(arguments,1);return function(){var r=arguments;return n.apply(this,y(function(n){return n.apply(this,r)},t))}};var wr=D.reduce=u(function(n,r,t){for(var e=-1,u=t.length;++e<u;)r=n(r,t[e]);return r});D.foldl=wr,D.reduce.idx=u(function(n,r,t){for(var e=-1,u=t.length;++e<u;)r=n(r,t[e],e,t);return r}),D.foldl.idx=wr.idx;var br=D.reduceRight=u(o("reduceRight",function(n,r,t){for(var e=t.length;e--;)r=n(r,t[e]);return r}));D.foldr=br,D.reduceRight.idx=u(function(n,r,t){for(var e=t.length;e--;)r=n(r,t[e],e,t);return r}),D.foldr.idx=br.idx,D.unfoldr=e(function(n,r){for(var t=n(r),e=[];t&&t.length;)e.push(t[0]),t=n(t[1]);return e});var xr=D.map=e(o("map",y));D.map.idx=e(function(n,r){for(var t=-1,e=r.length,u=new Array(e);++t<e;)u[t]=n(r[t],t,r);return u}),D.mapObj=e(function(n,r){return wr(function(t,e){return t[e]=n(r[e]),t},{},Fr(r))}),D.mapObj.idx=e(function(n,r){return wr(function(t,e){return t[e]=n(r[e],e,r),t},{},Fr(r))}),D.scanl=u(function(n,r,t){var e=0,u=t.length+1,i=new Array(u);for(i[e]=r;++e<u;)r=n(r,t[e-1]),i[e]=r;return i});var jr=D.liftN=e(function(t,e){var u=K(t,e);if(0===arguments.length)throw n();return K(t,function(){return wr(Or,y(u,arguments[0]),r(arguments,1))})});D.lift=function(r){if(0===arguments.length)throw n();return jr(r.length,r)};var Or=D.ap=e(function(n,r){return i("ap",n)?n.ap(r):wr(function(n,e){return t(n,y(e,r))},[],n)});D.of=function(n,r){return i("of",r)?r.of(n):[n]},D.empty=function(n){return i("empty",n)?n.empty():[]},D.chain=e(o("chain",function(n,r){return Nr(y(n,r))}));var kr=D.commuteMap=u(function(n,r,t){function e(r,t){return Or(xr(sr,n(t)),r)}return wr(e,r([]),t)});D.commute=kr(xr(lr));var Ar=D.size=function(n){return n.length};D.length=Ar,D.filter=e(o("filter",d)),D.filter.idx=e(w);var Ir=function(n,r){return d($r(n),r)};D.reject=e(Ir),D.reject.idx=e(function(n,r){return w($r(n),r)}),D.takeWhile=e(o("takeWhile",function(n,t){for(var e=-1,u=t.length;++e<u&&n(t[e]););return r(t,0,e)})),D.take=e(o("take",function(n,t){return r(t,0,Math.min(n,t.length))})),D.skipUntil=e(function(n,t){for(var e=-1,u=t.length;++e<u&&!n(t[e]););return r(t,e)}),D.skip=e(o("skip",function(n,t){return n<t.length?r(t,n):[]})),D.find=e(function(n,r){for(var t=-1,e=r.length;++t<e;)if(n(r[t]))return r[t]}),D.findIndex=e(function(n,r){for(var t=-1,e=r.length;++t<e;)if(n(r[t]))return t;return-1}),D.findLast=e(function(n,r){for(var t=r.length;t--;)if(n(r[t]))return r[t]}),D.findLastIndex=e(function(n,r){for(var t=r.length;t--;)if(n(r[t]))return t;return-1}),D.every=e(b),D.some=e(x),D.indexOf=e(function(n,r){return j(r,n)}),D.indexOf.from=u(function(n,r,t){return j(t,n,r)}),D.lastIndexOf=e(function(n,r){return O(r,n)}),D.lastIndexOf.from=u(function(n,r,t){return O(t,n,r)}),D.contains=e(k);var Pr=D.containsWith=u(A),Er=D.uniq=function(n){for(var r,t=-1,e=n.length,u=[];++t<e;)r=n[t],k(r,u)||u.push(r);return u};D.isSet=function(n){for(var r=n.length,t=-1;++t<r;)if(j(n,n[t],t+1)>=0)return!1;return!0};var Mr=D.uniqWith=e(function(n,r){for(var t,e=-1,u=r.length,i=[];++e<u;)t=r[e],A(n,t,i)||i.push(t);return i}),Wr=D.pluck=e(function(n,r){return y(Br(n),r)});D.flatten=I(!0);var Nr=D.unnest=I(!1);D.zipWith=u(function(n,r,t){for(var e=[],u=-1,i=Math.min(r.length,t.length);++u<i;)e[u]=n(r[u],t[u]);return e}),D.zip=e(function(n,r){for(var t=[],e=-1,u=Math.min(n.length,r.length);++e<u;)t[e]=[n[e],r[e]];return t}),D.zipObj=e(function(n,r){for(var t=-1,e=n.length,u={};++t<e;)u[n[t]]=r[t];return u});var Sr=D.fromPairs=function(n){for(var r=-1,t=n.length,e={};++r<t;)$(n[r])&&n[r].length&&(e[n[r][0]]=n[r][1]);return e},Tr=D.createMapEntry=e(function(n,r){var t={};return t[n]=r,t});D.lens=e(function(n,r){var t=function(r){return n(r)};return t.set=r,t.map=function(t,e){return r(t(n(e)),e)},t}),D.xprod=e(function(n,r){if(ir(n)||ir(r))return[];for(var t,e=-1,u=n.length,i=r.length,o=[];++e<u;)for(t=-1;++t<i;)o.push([n[e],r[t]]);return o});var Cr=D.reverse=function(n){for(var r=-1,t=n.length,e=t,u=new Array(t);++r<t;)u[--e]=n[r];return u};D.range=e(function(n,r){if(n>=r)return[];for(var t=0,e=new Array(Math.floor(r)-Math.ceil(n));r>n;)e[t++]=n++;return e}),D.join=tr(1,"join"),D.slice=tr(2,"slice"),D.slice.from=e(function(n,r){return r.slice(n,r.length)}),D.remove=u(function(n,e,u){return t(r(u,0,Math.min(n,u.length)),r(u,Math.min(u.length,n+e)))}),D.insert=u(function(n,e,u){return n=n<u.length&&n>=0?n:u.length,t(l(e,r(u,0,n)),r(u,n))}),D.insert.all=u(function(n,e,u){return n=n<u.length&&n>=0?n:u.length,t(t(r(u,0,n),e),r(u,n))});var Lr=D.comparator=function(n){return function(r,t){return n(r,t)?-1:n(t,r)?1:0}};D.sort=e(function(n,r){return ur(r).sort(n)});var qr=D.groupBy=e(function(n,r){return wr(function(r,t){var e=n(t);return r[e]=l(t,r[e]||(r[e]=[])),r},{},r)});D.partition=e(function(n,r){return wr(function(r,t){return r[n(t)?0:1].push(t),r},[[],[]],r)}),D.tap=e(function(n,r){return n(r),r}),D.eq=e(function(n,r){return n===r});var Br=D.prop=function(r,t){switch(arguments.length){case 0:throw n();case 1:return function(n){return n[r]}}return t[r]};D.get=Br,D.propOf=V(Br),D.props=e(function(n,r){for(var t=n.length,e=new Array(t),u=-1;++u<t;)e[u]=r[n[u]];return e});var Rr=Object.prototype.hasOwnProperty;D.propOr=u(function(n,r,t){return Rr.call(t,n)?t[n]:r}),D.has=e(function(n,r){return Rr.call(r,n)}),D.hasIn=e(function(n,r){return n in r}),D.func=function(t,e){switch(arguments.length){case 0:throw n();case 1:return function(n){return n[t].apply(n,r(arguments,1))};default:return e[t].apply(e,r(arguments,2))}};var zr=D.always=function(n){return function(){return n}};D.bind=e(function(n,r){return function(){return n.apply(r,arguments)}});var Fr=D.keys=function(){var n=!{toString:null}.propertyIsEnumerable("toString"),r=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];return function(t){if(Object(t)!==t)return[];if(Object.keys)return Object.keys(t);var e,u,i=[];for(e in t)Rr.call(t,e)&&i.push(e);if(n)for(u=r.length;u--;)e=r[u],Rr.call(t,e)&&!k(e,i)&&i.push(e);return i}}(),Ur=D.keysIn=function(n){var r,t=[];for(r in n)t.push(r);return t};D.toPairs=P(Fr),D.toPairsIn=P(Ur),D.values=function(n){for(var r=Fr(n),t=r.length,e=new Array(t),u=-1;++u<t;)e[u]=n[r[u]];return e},D.valuesIn=function(n){var r,t=[];for(r in n)t.push(n[r]);return t},D.pick=e(function(n,r){return E(function(r,t){return k(t,n)},r)}),D.omit=e(function(n,r){return E(function(r,t){return!k(t,n)},r)}),D.pickBy=e(E);var _r=D.pickAll=e(M);D.mixin=e(function(n,r){return W(W({},n),r)}),D.cloneObj=function(n){return W({},n)},D.eqProps=u(function(n,r,t){return r[n]===t[n]}),D.where=function(r,t){var e=qr(function(n){return"function"==typeof r[n]?"fn":"obj"},Fr(r));switch(arguments.length){case 0:throw n();case 1:return function(n){return N(r,e,n)}}return N(r,e,t)};var Dr=D.assoc=u(function(n,r,t){return W(Sr(y(function(n){return[n,t[n]]},Ur(t))),Tr(n,r))});D.assocPath=function(){var t=function(n,e,u){if(1===n.length)return Dr(n[0],e,u);var i=u[n[0]];return Dr(n[0],t(r(n,1),e,Zr(Object,i)?i:{}),u)};return function(r,u,i){var o=arguments.length;if(0===o)throw n();var a=Qr(".",r),c=e(function(n,r){return t(a,n,r)});switch(o){case 1:return c;case 2:return c(u);default:return c(u,i)}}}(),D.installTo=function(n){return W(n,D)};var Zr=D.is=e(function(n,r){return null!=r&&r.constructor===n||r instanceof n});D.type=function(n){return null===n?"Null":void 0===n?"Undefined":Z.call(n).slice(8,-1)},D.alwaysZero=zr(0),D.alwaysFalse=zr(!1),D.alwaysTrue=zr(!0),D.and=e(function(n,r){return function(){return n.apply(this,arguments)&&r.apply(this,arguments)}}),D.or=e(function(n,r){return function(){return n.apply(this,arguments)||r.apply(this,arguments)}});var $r=D.not=function(n){return function(){return!n.apply(this,arguments)}};D.allPredicates=S(b),D.anyPredicates=S(x);var Gr=D.ifElse=u(function(n,r,t){return function(){return n.apply(this,arguments)?r.apply(this,arguments):t.apply(this,arguments)}});D["if"]=Gr,D.cond=function(){var n=arguments;return function(){for(var r=-1;++r<n.length;)if(n[r][0].apply(this,arguments))return n[r][1].apply(this,arguments)}},D.add=e(T),D.multiply=e(C),D.subtract=J(function(n,r){return n-r}),D.divide=J(function(n,r){return n/r}),D.modulo=J(function(n,r){return n%r});var Hr=Number.isInteger||function(n){return n<<0===n};D.mathMod=J(function(n,r){return Hr(n)?!Hr(r)||1>r?0/0:(n%r+r)%r:0/0}),D.sum=wr(T,0),D.product=wr(C,1),D.lt=J(L),D.lte=J(function(n,r){return r>=n}),D.gt=J(q),D.gte=J(function(n,r){return n>=r});var Jr=D.max=B(q,-1/0);D.maxBy=e(R(q)),D.min=B(L,1/0),D.minBy=e(R(L));var Kr=D.substring=tr(2,"substring");D.substringFrom=V(Kr)(void 0),D.substringTo=Kr(0),D.charAt=tr(1,"charAt"),D.charCodeAt=tr(1,"charCodeAt"),D.match=tr(1,"match"),D.replace=u(function(n,r,t){return t.replace(n,r)}),D.strIndexOf=e(function(n,r){return r.indexOf(n)}),D.strLastIndexOf=e(function(n,r){return r.lastIndexOf(n)}),D.toUpperCase=tr(0,"toUpperCase"),D.toLowerCase=tr(0,"toLowerCase"),D.trim=function(){var n="	\n\f\r   ᠎             　\u2028\u2029﻿",r="​",t="function"==typeof String.prototype.trim;return t&&!n.trim()&&r.trim()?function(n){return n.trim()}:function(r){var t=new RegExp("^["+n+"]["+n+"]*"),e=new RegExp("["+n+"]["+n+"]*$");return r.replace(t,"").replace(e,"")}}();var Qr=D.split=tr(1,"split"),Vr=D.pathOn=u(function(n,r,t){return z(r.split(n),t)});D.path=Vr("."),D.pathEq=u(function(n,r,t){return z(n.split("."),t)===r}),D.project=er(y,_r,lr),D.propEq=u(function(n,r,t){return t[n]===r}),D.union=pr(Er,t),D.unionWith=u(function(n,r,e){return Mr(n,t(r,e))}),D.difference=e(function(n,r){for(var t=[],e=-1,u=n.length;++e<u;)k(n[e],r)||k(n[e],t)||t.push(n[e]);return t}),D.differenceWith=u(function(n,r,t){for(var e=[],u=-1,i=r.length,o=Pr(n);++u<i;)o(r[u],t)||o(r[u],e)||e.push(r[u]);return e}),D.intersection=e(function(n,r){return Er(d(V(k)(n),r))}),D.intersectionWith=u(function(n,r,t){for(var e=[],u=-1;++u<r.length;)A(n,r[u],t)&&(e[e.length]=r[u]);return Mr(n,e)});var Xr=Lr(function(n,r){return n.key<r.key});return D.sortBy=e(function(n,r){return Wr("val",F(n,r).sort(Xr))}),D.countBy=e(function(n,r){return wr(function(n,r){return n[r.key]=(n[r.key]||0)+1,n},{},F(n,r))}),D.functions=U(Fr),D.functionsIn=U(Ur),D});