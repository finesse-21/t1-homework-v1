(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const g of d.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function u(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(s){if(s.ep)return;s.ep=!0;const d=u(s);fetch(s.href,d)}})();function S0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var _s={exports:{}},hi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function Iy(){if(hp)return hi;hp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(c,s,d){var g=null;if(d!==void 0&&(g=""+d),s.key!==void 0&&(g=""+s.key),"key"in s){d={};for(var b in s)b!=="key"&&(d[b]=s[b])}else d=s;return s=d.ref,{$$typeof:a,type:c,key:g,ref:s!==void 0?s:null,props:d}}return hi.Fragment=i,hi.jsx=u,hi.jsxs=u,hi}var mp;function e1(){return mp||(mp=1,_s.exports=Iy()),_s.exports}var _=e1(),ws={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function t1(){if(pp)return be;pp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),g=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),$=Symbol.iterator;function x(E){return E===null||typeof E!="object"?null:(E=$&&E[$]||E["@@iterator"],typeof E=="function"?E:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,H={};function B(E,R,Q){this.props=E,this.context=R,this.refs=H,this.updater=Q||T}B.prototype.isReactComponent={},B.prototype.setState=function(E,R){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,R,"setState")},B.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function C(){}C.prototype=B.prototype;function D(E,R,Q){this.props=E,this.context=R,this.refs=H,this.updater=Q||T}var U=D.prototype=new C;U.constructor=D,S(U,B.prototype),U.isPureReactComponent=!0;var ee=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function I(E,R,Q,X,te,ue){return Q=ue.ref,{$$typeof:a,type:E,key:R,ref:Q!==void 0?Q:null,props:ue}}function fe(E,R){return I(E.type,R,void 0,void 0,void 0,E.props)}function ne(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function me(E){var R={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Q){return R[Q]})}var Pe=/\/+/g;function He(E,R){return typeof E=="object"&&E!==null&&E.key!=null?me(""+E.key):R.toString(36)}function We(){}function vt(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(We,We):(E.status="pending",E.then(function(R){E.status==="pending"&&(E.status="fulfilled",E.value=R)},function(R){E.status==="pending"&&(E.status="rejected",E.reason=R)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function Ae(E,R,Q,X,te){var ue=typeof E;(ue==="undefined"||ue==="boolean")&&(E=null);var re=!1;if(E===null)re=!0;else switch(ue){case"bigint":case"string":case"number":re=!0;break;case"object":switch(E.$$typeof){case a:case i:re=!0;break;case y:return re=E._init,Ae(re(E._payload),R,Q,X,te)}}if(re)return te=te(E),re=X===""?"."+He(E,0):X,ee(te)?(Q="",re!=null&&(Q=re.replace(Pe,"$&/")+"/"),Ae(te,R,Q,"",function(Je){return Je})):te!=null&&(ne(te)&&(te=fe(te,Q+(te.key==null||E&&E.key===te.key?"":(""+te.key).replace(Pe,"$&/")+"/")+re)),R.push(te)),1;re=0;var Ye=X===""?".":X+":";if(ee(E))for(var ve=0;ve<E.length;ve++)X=E[ve],ue=Ye+He(X,ve),re+=Ae(X,R,Q,ue,te);else if(ve=x(E),typeof ve=="function")for(E=ve.call(E),ve=0;!(X=E.next()).done;)X=X.value,ue=Ye+He(X,ve++),re+=Ae(X,R,Q,ue,te);else if(ue==="object"){if(typeof E.then=="function")return Ae(vt(E),R,Q,X,te);throw R=String(E),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return re}function L(E,R,Q){if(E==null)return E;var X=[],te=0;return Ae(E,X,"","",function(ue){return R.call(Q,ue,te++)}),X}function F(E){if(E._status===-1){var R=E._result;R=R(),R.then(function(Q){(E._status===0||E._status===-1)&&(E._status=1,E._result=Q)},function(Q){(E._status===0||E._status===-1)&&(E._status=2,E._result=Q)}),E._status===-1&&(E._status=0,E._result=R)}if(E._status===1)return E._result.default;throw E._result}var ae=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function J(){}return be.Children={map:L,forEach:function(E,R,Q){L(E,function(){R.apply(this,arguments)},Q)},count:function(E){var R=0;return L(E,function(){R++}),R},toArray:function(E){return L(E,function(R){return R})||[]},only:function(E){if(!ne(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},be.Component=B,be.Fragment=u,be.Profiler=s,be.PureComponent=D,be.StrictMode=c,be.Suspense=v,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,be.__COMPILER_RUNTIME={__proto__:null,c:function(E){return Z.H.useMemoCache(E)}},be.cache=function(E){return function(){return E.apply(null,arguments)}},be.cloneElement=function(E,R,Q){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var X=S({},E.props),te=E.key,ue=void 0;if(R!=null)for(re in R.ref!==void 0&&(ue=void 0),R.key!==void 0&&(te=""+R.key),R)!W.call(R,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&R.ref===void 0||(X[re]=R[re]);var re=arguments.length-2;if(re===1)X.children=Q;else if(1<re){for(var Ye=Array(re),ve=0;ve<re;ve++)Ye[ve]=arguments[ve+2];X.children=Ye}return I(E.type,te,void 0,void 0,ue,X)},be.createContext=function(E){return E={$$typeof:g,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},be.createElement=function(E,R,Q){var X,te={},ue=null;if(R!=null)for(X in R.key!==void 0&&(ue=""+R.key),R)W.call(R,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(te[X]=R[X]);var re=arguments.length-2;if(re===1)te.children=Q;else if(1<re){for(var Ye=Array(re),ve=0;ve<re;ve++)Ye[ve]=arguments[ve+2];te.children=Ye}if(E&&E.defaultProps)for(X in re=E.defaultProps,re)te[X]===void 0&&(te[X]=re[X]);return I(E,ue,void 0,void 0,null,te)},be.createRef=function(){return{current:null}},be.forwardRef=function(E){return{$$typeof:b,render:E}},be.isValidElement=ne,be.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:F}},be.memo=function(E,R){return{$$typeof:m,type:E,compare:R===void 0?null:R}},be.startTransition=function(E){var R=Z.T,Q={};Z.T=Q;try{var X=E(),te=Z.S;te!==null&&te(Q,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(J,ae)}catch(ue){ae(ue)}finally{Z.T=R}},be.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},be.use=function(E){return Z.H.use(E)},be.useActionState=function(E,R,Q){return Z.H.useActionState(E,R,Q)},be.useCallback=function(E,R){return Z.H.useCallback(E,R)},be.useContext=function(E){return Z.H.useContext(E)},be.useDebugValue=function(){},be.useDeferredValue=function(E,R){return Z.H.useDeferredValue(E,R)},be.useEffect=function(E,R,Q){var X=Z.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(E,R)},be.useId=function(){return Z.H.useId()},be.useImperativeHandle=function(E,R,Q){return Z.H.useImperativeHandle(E,R,Q)},be.useInsertionEffect=function(E,R){return Z.H.useInsertionEffect(E,R)},be.useLayoutEffect=function(E,R){return Z.H.useLayoutEffect(E,R)},be.useMemo=function(E,R){return Z.H.useMemo(E,R)},be.useOptimistic=function(E,R){return Z.H.useOptimistic(E,R)},be.useReducer=function(E,R,Q){return Z.H.useReducer(E,R,Q)},be.useRef=function(E){return Z.H.useRef(E)},be.useState=function(E){return Z.H.useState(E)},be.useSyncExternalStore=function(E,R,Q){return Z.H.useSyncExternalStore(E,R,Q)},be.useTransition=function(){return Z.H.useTransition()},be.version="19.1.0",be}var gp;function sf(){return gp||(gp=1,ws.exports=t1()),ws.exports}var h=sf();const jl=S0(h);var Ts={exports:{}},mi={},Ms={exports:{}},Cs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function a1(){return vp||(vp=1,function(a){function i(L,F){var ae=L.length;L.push(F);e:for(;0<ae;){var J=ae-1>>>1,E=L[J];if(0<s(E,F))L[J]=F,L[ae]=E,ae=J;else break e}}function u(L){return L.length===0?null:L[0]}function c(L){if(L.length===0)return null;var F=L[0],ae=L.pop();if(ae!==F){L[0]=ae;e:for(var J=0,E=L.length,R=E>>>1;J<R;){var Q=2*(J+1)-1,X=L[Q],te=Q+1,ue=L[te];if(0>s(X,ae))te<E&&0>s(ue,X)?(L[J]=ue,L[te]=ae,J=te):(L[J]=X,L[Q]=ae,J=Q);else if(te<E&&0>s(ue,ae))L[J]=ue,L[te]=ae,J=te;else break e}}return F}function s(L,F){var ae=L.sortIndex-F.sortIndex;return ae!==0?ae:L.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var g=Date,b=g.now();a.unstable_now=function(){return g.now()-b}}var v=[],m=[],y=1,$=null,x=3,T=!1,S=!1,H=!1,B=!1,C=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function ee(L){for(var F=u(m);F!==null;){if(F.callback===null)c(m);else if(F.startTime<=L)c(m),F.sortIndex=F.expirationTime,i(v,F);else break;F=u(m)}}function Z(L){if(H=!1,ee(L),!S)if(u(v)!==null)S=!0,W||(W=!0,He());else{var F=u(m);F!==null&&Ae(Z,F.startTime-L)}}var W=!1,I=-1,fe=5,ne=-1;function me(){return B?!0:!(a.unstable_now()-ne<fe)}function Pe(){if(B=!1,W){var L=a.unstable_now();ne=L;var F=!0;try{e:{S=!1,H&&(H=!1,D(I),I=-1),T=!0;var ae=x;try{t:{for(ee(L),$=u(v);$!==null&&!($.expirationTime>L&&me());){var J=$.callback;if(typeof J=="function"){$.callback=null,x=$.priorityLevel;var E=J($.expirationTime<=L);if(L=a.unstable_now(),typeof E=="function"){$.callback=E,ee(L),F=!0;break t}$===u(v)&&c(v),ee(L)}else c(v);$=u(v)}if($!==null)F=!0;else{var R=u(m);R!==null&&Ae(Z,R.startTime-L),F=!1}}break e}finally{$=null,x=ae,T=!1}F=void 0}}finally{F?He():W=!1}}}var He;if(typeof U=="function")He=function(){U(Pe)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,vt=We.port2;We.port1.onmessage=Pe,He=function(){vt.postMessage(null)}}else He=function(){C(Pe,0)};function Ae(L,F){I=C(function(){L(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(L){L.callback=null},a.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<L?Math.floor(1e3/L):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(L){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var ae=x;x=F;try{return L()}finally{x=ae}},a.unstable_requestPaint=function(){B=!0},a.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ae=x;x=L;try{return F()}finally{x=ae}},a.unstable_scheduleCallback=function(L,F,ae){var J=a.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?J+ae:J):ae=J,L){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=ae+E,L={id:y++,callback:F,priorityLevel:L,startTime:ae,expirationTime:E,sortIndex:-1},ae>J?(L.sortIndex=ae,i(m,L),u(v)===null&&L===u(m)&&(H?(D(I),I=-1):H=!0,Ae(Z,ae-J))):(L.sortIndex=E,i(v,L),S||T||(S=!0,W||(W=!0,He()))),L},a.unstable_shouldYield=me,a.unstable_wrapCallback=function(L){var F=x;return function(){var ae=x;x=F;try{return L.apply(this,arguments)}finally{x=ae}}}}(Cs)),Cs}var yp;function l1(){return yp||(yp=1,Ms.exports=a1()),Ms.exports}var As={exports:{}},Dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function n1(){if(bp)return Dt;bp=1;var a=sf();function i(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},s=Symbol.for("react.portal");function d(v,m,y){var $=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:$==null?null:""+$,children:v,containerInfo:m,implementation:y}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Dt.createPortal=function(v,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return d(v,m,null,y)},Dt.flushSync=function(v){var m=g.T,y=c.p;try{if(g.T=null,c.p=2,v)return v()}finally{g.T=m,c.p=y,c.d.f()}},Dt.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,c.d.C(v,m))},Dt.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},Dt.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var y=m.as,$=b(y,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,T=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?c.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:$,integrity:x,fetchPriority:T}):y==="script"&&c.d.X(v,{crossOrigin:$,integrity:x,fetchPriority:T,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Dt.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=b(m.as,m.crossOrigin);c.d.M(v,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&c.d.M(v)},Dt.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,$=b(y,m.crossOrigin);c.d.L(v,y,{crossOrigin:$,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Dt.preloadModule=function(v,m){if(typeof v=="string")if(m){var y=b(m.as,m.crossOrigin);c.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else c.d.m(v)},Dt.requestFormReset=function(v){c.d.r(v)},Dt.unstable_batchedUpdates=function(v,m){return v(m)},Dt.useFormState=function(v,m,y){return g.H.useFormState(v,m,y)},Dt.useFormStatus=function(){return g.H.useHostTransitionStatus()},Dt.version="19.1.0",Dt}var xp;function E0(){if(xp)return As.exports;xp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),As.exports=n1(),As.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function r1(){if(Sp)return mi;Sp=1;var a=l1(),i=sf(),u=E0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(d(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(c(188));return t!==e?null:e}for(var l=e,n=t;;){var r=l.return;if(r===null)break;var o=r.alternate;if(o===null){if(n=r.return,n!==null){l=n;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===l)return b(r),e;if(o===n)return b(r),t;o=o.sibling}throw Error(c(188))}if(l.return!==n.return)l=r,n=o;else{for(var f=!1,p=r.child;p;){if(p===l){f=!0,l=r,n=o;break}if(p===n){f=!0,n=r,l=o;break}p=p.sibling}if(!f){for(p=o.child;p;){if(p===l){f=!0,l=o,n=r;break}if(p===n){f=!0,n=o,l=r;break}p=p.sibling}if(!f)throw Error(c(189))}}if(l.alternate!==n)throw Error(c(190))}if(l.tag!==3)throw Error(c(188));return l.stateNode.current===l?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,$=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),me=Symbol.for("react.memo_cache_sentinel"),Pe=Symbol.iterator;function He(e){return e===null||typeof e!="object"?null:(e=Pe&&e[Pe]||e["@@iterator"],typeof e=="function"?e:null)}var We=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===We?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case B:return"Profiler";case H:return"StrictMode";case Z:return"Suspense";case W:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case U:return(e.displayName||"Context")+".Provider";case D:return(e._context.displayName||"Context")+".Consumer";case ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:vt(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return vt(e(t))}catch{}}return null}var Ae=Array.isArray,L=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},J=[],E=-1;function R(e){return{current:e}}function Q(e){0>E||(e.current=J[E],J[E]=null,E--)}function X(e,t){E++,J[E]=e.current,e.current=t}var te=R(null),ue=R(null),re=R(null),Ye=R(null);function ve(e,t){switch(X(re,t),X(ue,e),X(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qm(t),e=Ym(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(te),X(te,e)}function Je(){Q(te),Q(ue),Q(re)}function Mt(e){e.memoizedState!==null&&X(Ye,e);var t=te.current,l=Ym(t,e.type);t!==l&&(X(ue,e),X(te,l))}function Ge(e){ue.current===e&&(Q(te),Q(ue)),Ye.current===e&&(Q(Ye),ui._currentValue=ae)}var De=Object.prototype.hasOwnProperty,Rt=a.unstable_scheduleCallback,Ta=a.unstable_cancelCallback,qa=a.unstable_shouldYield,$t=a.unstable_requestPaint,Xe=a.unstable_now,Lt=a.unstable_getCurrentPriorityLevel,zt=a.unstable_ImmediatePriority,ht=a.unstable_UserBlockingPriority,ta=a.unstable_NormalPriority,Ul=a.unstable_LowPriority,hn=a.unstable_IdlePriority,Ze=a.log,kl=a.unstable_setDisableYieldValue,Ma=null,yt=null;function Fe(e){if(typeof Ze=="function"&&kl(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Ma,e)}catch{}}var ot=Math.clz32?Math.clz32:pe,ie=Math.log,ge=Math.LN2;function pe(e){return e>>>=0,e===0?32:31-(ie(e)/ge|0)|0}var je=256,Ie=4194304;function Be(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gt(e,t,l){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var p=n&134217727;return p!==0?(n=p&~o,n!==0?r=Be(n):(f&=p,f!==0?r=Be(f):l||(l=p&~e,l!==0&&(r=Be(l))))):(p=n&~o,p!==0?r=Be(p):f!==0?r=Be(f):l||(l=n&~e,l!==0&&(r=Be(l)))),r===0?0:t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===32&&(l&4194048)!==0)?t:r}function we(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Vt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var e=je;return je<<=1,(je&4194048)===0&&(je=256),e}function aa(){var e=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),e}function la(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ca(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pr(e,t,l,n,r,o){var f=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var p=e.entanglements,N=e.expirationTimes,O=e.hiddenUpdates;for(l=f&~l;0<l;){var k=31-ot(l),G=1<<k;p[k]=0,N[k]=-1;var z=O[k];if(z!==null)for(O[k]=null,k=0;k<z.length;k++){var j=z[k];j!==null&&(j.lane&=-536870913)}l&=~G}n!==0&&na(e,n,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(f&~t))}function na(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ot(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|l&4194090}function Ai(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var n=31-ot(l),r=1<<n;r&t|e[n]&t&&(e[n]|=t),l&=~r}}function mn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Aa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ql(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:op(e.type))}function va(e,t){var l=F.p;try{return F.p=e,t()}finally{F.p=l}}var Oa=Math.random().toString(36).slice(2),et="__reactFiber$"+Oa,Ct="__reactProps$"+Oa,ya="__reactContainer$"+Oa,pn="__reactEvents$"+Oa,gr="__reactListeners$"+Oa,ra="__reactHandles$"+Oa,Ya="__reactResources$"+Oa,At="__reactMarker$"+Oa;function vr(e){delete e[et],delete e[Ct],delete e[pn],delete e[gr],delete e[ra]}function Ga(e){var t=e[et];if(t)return t;for(var l=e.parentNode;l;){if(t=l[ya]||l[et]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Xm(e);e!==null;){if(l=e[et])return l;e=Xm(e)}return t}e=l,l=e.parentNode}return null}function ia(e){if(e=e[et]||e[ya]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Va(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function sl(e){var t=e[Ya];return t||(t=e[Ya]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ut(e){e[At]=!0}var Oi=new Set,Di={};function ba(e,t){oa(e,t),oa(e+"Capture",t)}function oa(e,t){for(Di[e]=t,e=0;e<t.length;e++)Oi.add(t[e])}var xu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bi={},yr={};function Su(e){return De.call(yr,e)?!0:De.call(Bi,e)?!1:xu.test(e)?yr[e]=!0:(Bi[e]=!0,!1)}function fl(e,t,l){if(Su(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function gn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function xa(e,t,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+n)}}var br,dl;function Sa(e){if(br===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);br=t&&t[1]||"",dl=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+br+e+dl}var xr=!1;function vn(e,t){if(!e||xr)return"";xr=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(j){var z=j}Reflect.construct(e,[],G)}else{try{G.call()}catch(j){z=j}e.call(G.prototype)}}else{try{throw Error()}catch(j){z=j}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),f=o[0],p=o[1];if(f&&p){var N=f.split(`
`),O=p.split(`
`);for(r=n=0;n<N.length&&!N[n].includes("DetermineComponentFrameRoot");)n++;for(;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;if(n===N.length||r===O.length)for(n=N.length-1,r=O.length-1;1<=n&&0<=r&&N[n]!==O[r];)r--;for(;1<=n&&0<=r;n--,r--)if(N[n]!==O[r]){if(n!==1||r!==1)do if(n--,r--,0>r||N[n]!==O[r]){var k=`
`+N[n].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=n&&0<=r);break}}}finally{xr=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Sa(l):""}function Eu(e){switch(e.tag){case 26:case 27:case 5:return Sa(e.type);case 16:return Sa("Lazy");case 13:return Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 15:return vn(e.type,!1);case 11:return vn(e.type.render,!1);case 1:return vn(e.type,!0);case 31:return Sa("Activity");default:return""}}function Ri(e){try{var t="";do t+=Eu(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zi(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $u(e){var t=zi(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,o=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(f){n=""+f,o.call(this,f)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yn(e){e._valueTracker||(e._valueTracker=$u(e))}function Hi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),n="";return e&&(n=zi(e)?e.checked?"true":"false":e.value),e=n,e!==l?(t.setValue(e),!0):!1}function Yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ji=/[\n"\\]/g;function K(e){return e.replace(ji,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ce(e,t,l,n,r,o,f,p){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?ct(e,f,Nt(t)):l!=null?ct(e,f,Nt(l)):n!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Nt(p):e.removeAttribute("name")}function ye(e,t,l,n,r,o,f,p){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||l!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;l=l!=null?""+Nt(l):"",t=t!=null?""+Nt(t):l,p||t===e.value||(e.value=t),e.defaultValue=t}n=n??r,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=p?e.checked:!!n,e.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function ct(e,t,l){t==="number"&&Yl(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function mt(e,t,l,n){if(e=e.options,t){t={};for(var r=0;r<l.length;r++)t["$"+l[r]]=!0;for(l=0;l<e.length;l++)r=t.hasOwnProperty("$"+e[l].value),e[l].selected!==r&&(e[l].selected=r),r&&n&&(e[l].defaultSelected=!0)}else{for(l=""+Nt(l),t=null,r=0;r<e.length;r++){if(e[r].value===l){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ua(e,t,l){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Nt(l):""}function Ea(e,t,l,n){if(t==null){if(n!=null){if(l!=null)throw Error(c(92));if(Ae(n)){if(1<n.length)throw Error(c(93));n=n[0]}l=n}l==null&&(l=""),t=l}l=Nt(t),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n)}function Pa(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Li=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bn(e,t,l){var n=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,l):typeof l!="number"||l===0||Li.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Yf(e,t,l){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var r in t)n=t[r],t.hasOwnProperty(r)&&l[r]!==n&&bn(e,r,n)}else for(var o in t)t.hasOwnProperty(o)&&bn(e,o,t[o])}function Nu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ui(e){return Jg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var _u=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xn=null,Sn=null;function Gf(e){var t=ia(e);if(t&&(e=t.stateNode)){var l=e[Ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(ce(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+K(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var n=l[t];if(n!==e&&n.form===e.form){var r=n[Ct]||null;if(!r)throw Error(c(90));ce(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<l.length;t++)n=l[t],n.form===e.form&&Hi(n)}break e;case"textarea":ua(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&mt(e,!!l.multiple,t,!1)}}}var Tu=!1;function Vf(e,t,l){if(Tu)return e(t,l);Tu=!0;try{var n=e(t);return n}finally{if(Tu=!1,(xn!==null||Sn!==null)&&(_o(),xn&&(t=xn,e=Sn,Sn=xn=null,Gf(t),e)))for(t=0;t<e.length;t++)Gf(e[t])}}function Sr(e,t){var l=e.stateNode;if(l===null)return null;var n=l[Ct]||null;if(n===null)return null;l=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(c(231,t,typeof l));return l}var Xa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(Xa)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{Mu=!1}var hl=null,Cu=null,ki=null;function Pf(){if(ki)return ki;var e,t=Cu,l=t.length,n,r="value"in hl?hl.value:hl.textContent,o=r.length;for(e=0;e<l&&t[e]===r[e];e++);var f=l-e;for(n=1;n<=f&&t[l-n]===r[o-n];n++);return ki=r.slice(e,1<n?1-n:void 0)}function qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yi(){return!0}function Xf(){return!1}function Ut(e){function t(l,n,r,o,f){this._reactName=l,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(l=e[p],this[p]=l?l(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yi:Xf,this.isPropagationStopped=Xf,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Yi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Yi)},persist:function(){},isPersistent:Yi}),t}var Gl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=Ut(Gl),$r=y({},Gl,{view:0,detail:0}),Ig=Ut($r),Au,Ou,Nr,Vi=y({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(Au=e.screenX-Nr.screenX,Ou=e.screenY-Nr.screenY):Ou=Au=0,Nr=e),Au)},movementY:function(e){return"movementY"in e?e.movementY:Ou}}),Qf=Ut(Vi),ev=y({},Vi,{dataTransfer:0}),tv=Ut(ev),av=y({},$r,{relatedTarget:0}),Du=Ut(av),lv=y({},Gl,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=Ut(lv),rv=y({},Gl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iv=Ut(rv),ov=y({},Gl,{data:0}),Zf=Ut(ov),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sv[e])?!!t[e]:!1}function Bu(){return fv}var dv=y({},$r,{key:function(e){if(e.key){var t=uv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hv=Ut(dv),mv=y({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ff=Ut(mv),pv=y({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),gv=Ut(pv),vv=y({},Gl,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=Ut(vv),bv=y({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xv=Ut(bv),Sv=y({},Gl,{newState:0,oldState:0}),Ev=Ut(Sv),$v=[9,13,27,32],Ru=Xa&&"CompositionEvent"in window,_r=null;Xa&&"documentMode"in document&&(_r=document.documentMode);var Nv=Xa&&"TextEvent"in window&&!_r,Kf=Xa&&(!Ru||_r&&8<_r&&11>=_r),Wf=" ",Jf=!1;function If(e,t){switch(e){case"keyup":return $v.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function _v(e,t){switch(e){case"compositionend":return ed(t);case"keypress":return t.which!==32?null:(Jf=!0,Wf);case"textInput":return e=t.data,e===Wf&&Jf?null:e;default:return null}}function wv(e,t){if(En)return e==="compositionend"||!Ru&&If(e,t)?(e=Pf(),ki=Cu=hl=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kf&&t.locale!=="ko"?null:t.data;default:return null}}var Tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tv[e.type]:t==="textarea"}function ad(e,t,l,n){xn?Sn?Sn.push(n):Sn=[n]:xn=n,t=Oo(t,"onChange"),0<t.length&&(l=new Gi("onChange","change",null,l,n),e.push({event:l,listeners:t}))}var wr=null,Tr=null;function Mv(e){Hm(e,0)}function Pi(e){var t=Va(e);if(Hi(t))return e}function ld(e,t){if(e==="change")return t}var nd=!1;if(Xa){var zu;if(Xa){var Hu="oninput"in document;if(!Hu){var rd=document.createElement("div");rd.setAttribute("oninput","return;"),Hu=typeof rd.oninput=="function"}zu=Hu}else zu=!1;nd=zu&&(!document.documentMode||9<document.documentMode)}function id(){wr&&(wr.detachEvent("onpropertychange",od),Tr=wr=null)}function od(e){if(e.propertyName==="value"&&Pi(Tr)){var t=[];ad(t,Tr,e,wu(e)),Vf(Mv,t)}}function Cv(e,t,l){e==="focusin"?(id(),wr=t,Tr=l,wr.attachEvent("onpropertychange",od)):e==="focusout"&&id()}function Av(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pi(Tr)}function Ov(e,t){if(e==="click")return Pi(t)}function Dv(e,t){if(e==="input"||e==="change")return Pi(t)}function Bv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xt=typeof Object.is=="function"?Object.is:Bv;function Mr(e,t){if(Xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),n=Object.keys(t);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var r=l[n];if(!De.call(t,r)||!Xt(e[r],t[r]))return!1}return!0}function ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cd(e,t){var l=ud(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=t&&n>=t)return{node:l,offset:t-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ud(l)}}function sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Yl(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Yl(e.document)}return t}function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Rv=Xa&&"documentMode"in document&&11>=document.documentMode,$n=null,Lu=null,Cr=null,Uu=!1;function dd(e,t,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Uu||$n==null||$n!==Yl(n)||(n=$n,"selectionStart"in n&&ju(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Cr&&Mr(Cr,n)||(Cr=n,n=Oo(Lu,"onSelect"),0<n.length&&(t=new Gi("onSelect","select",null,t,l),e.push({event:t,listeners:n}),t.target=$n)))}function Vl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Nn={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionrun:Vl("Transition","TransitionRun"),transitionstart:Vl("Transition","TransitionStart"),transitioncancel:Vl("Transition","TransitionCancel"),transitionend:Vl("Transition","TransitionEnd")},ku={},hd={};Xa&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function Pl(e){if(ku[e])return ku[e];if(!Nn[e])return e;var t=Nn[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in hd)return ku[e]=t[l];return e}var md=Pl("animationend"),pd=Pl("animationiteration"),gd=Pl("animationstart"),zv=Pl("transitionrun"),Hv=Pl("transitionstart"),jv=Pl("transitioncancel"),vd=Pl("transitionend"),yd=new Map,qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qu.push("scrollEnd");function $a(e,t){yd.set(e,t),ba(t,[e])}var bd=new WeakMap;function ca(e,t){if(typeof e=="object"&&e!==null){var l=bd.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Ri(t)},bd.set(e,t),t)}return{value:e,source:t,stack:Ri(t)}}var sa=[],_n=0,Yu=0;function Xi(){for(var e=_n,t=Yu=_n=0;t<e;){var l=sa[t];sa[t++]=null;var n=sa[t];sa[t++]=null;var r=sa[t];sa[t++]=null;var o=sa[t];if(sa[t++]=null,n!==null&&r!==null){var f=n.pending;f===null?r.next=r:(r.next=f.next,f.next=r),n.pending=r}o!==0&&xd(l,r,o)}}function Qi(e,t,l,n){sa[_n++]=e,sa[_n++]=t,sa[_n++]=l,sa[_n++]=n,Yu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Gu(e,t,l,n){return Qi(e,t,l,n),Zi(e)}function wn(e,t){return Qi(e,null,null,t),Zi(e)}function xd(e,t,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var r=!1,o=e.return;o!==null;)o.childLanes|=l,n=o.alternate,n!==null&&(n.childLanes|=l),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&t!==null&&(r=31-ot(l),e=o.hiddenUpdates,n=e[r],n===null?e[r]=[t]:n.push(t),t.lane=l|536870912),o):null}function Zi(e){if(50<ei)throw ei=0,Fc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Tn={};function Lv(e,t,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(e,t,l,n){return new Lv(e,t,l,n)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qa(e,t){var l=e.alternate;return l===null?(l=Qt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Sd(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Fi(e,t,l,n,r,o){var f=0;if(n=e,typeof e=="function")Vu(e)&&(f=1);else if(typeof e=="string")f=ky(e,l,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Qt(31,l,t,r),e.elementType=ne,e.lanes=o,e;case S:return Xl(l.children,r,o,t);case H:f=8,r|=24;break;case B:return e=Qt(12,l,t,r|2),e.elementType=B,e.lanes=o,e;case Z:return e=Qt(13,l,t,r),e.elementType=Z,e.lanes=o,e;case W:return e=Qt(19,l,t,r),e.elementType=W,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:case U:f=10;break e;case D:f=9;break e;case ee:f=11;break e;case I:f=14;break e;case fe:f=16,n=null;break e}f=29,l=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=Qt(f,l,t,r),t.elementType=e,t.type=n,t.lanes=o,t}function Xl(e,t,l,n){return e=Qt(7,e,n,t),e.lanes=l,e}function Pu(e,t,l){return e=Qt(6,e,null,t),e.lanes=l,e}function Xu(e,t,l){return t=Qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Mn=[],Cn=0,Ki=null,Wi=0,fa=[],da=0,Ql=null,Za=1,Fa="";function Zl(e,t){Mn[Cn++]=Wi,Mn[Cn++]=Ki,Ki=e,Wi=t}function Ed(e,t,l){fa[da++]=Za,fa[da++]=Fa,fa[da++]=Ql,Ql=e;var n=Za;e=Fa;var r=32-ot(n)-1;n&=~(1<<r),l+=1;var o=32-ot(t)+r;if(30<o){var f=r-r%5;o=(n&(1<<f)-1).toString(32),n>>=f,r-=f,Za=1<<32-ot(t)+r|l<<r|n,Fa=o+e}else Za=1<<o|l<<r|n,Fa=e}function Qu(e){e.return!==null&&(Zl(e,1),Ed(e,1,0))}function Zu(e){for(;e===Ki;)Ki=Mn[--Cn],Mn[Cn]=null,Wi=Mn[--Cn],Mn[Cn]=null;for(;e===Ql;)Ql=fa[--da],fa[da]=null,Fa=fa[--da],fa[da]=null,Za=fa[--da],fa[da]=null}var Ht=null,lt=null,Ce=!1,Fl=null,Da=!1,Fu=Error(c(519));function Kl(e){var t=Error(c(418,""));throw Dr(ca(t,e)),Fu}function $d(e){var t=e.stateNode,l=e.type,n=e.memoizedProps;switch(t[et]=e,t[Ct]=n,l){case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":case"embed":Ne("load",t);break;case"video":case"audio":for(l=0;l<ai.length;l++)Ne(ai[l],t);break;case"source":Ne("error",t);break;case"img":case"image":case"link":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"input":Ne("invalid",t),ye(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),yn(t);break;case"select":Ne("invalid",t);break;case"textarea":Ne("invalid",t),Ea(t,n.value,n.defaultValue,n.children),yn(t)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||n.suppressHydrationWarning===!0||km(t.textContent,l)?(n.popover!=null&&(Ne("beforetoggle",t),Ne("toggle",t)),n.onScroll!=null&&Ne("scroll",t),n.onScrollEnd!=null&&Ne("scrollend",t),n.onClick!=null&&(t.onclick=Do),t=!0):t=!1,t||Kl(e)}function Nd(e){for(Ht=e.return;Ht;)switch(Ht.tag){case 5:case 13:Da=!1;return;case 27:case 3:Da=!0;return;default:Ht=Ht.return}}function Ar(e){if(e!==Ht)return!1;if(!Ce)return Nd(e),Ce=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||fs(e.type,e.memoizedProps)),l=!l),l&&lt&&Kl(e),Nd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){lt=_a(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}lt=null}}else t===27?(t=lt,Cl(e.type)?(e=ps,ps=null,lt=e):lt=t):lt=Ht?_a(e.stateNode.nextSibling):null;return!0}function Or(){lt=Ht=null,Ce=!1}function _d(){var e=Fl;return e!==null&&(Yt===null?Yt=e:Yt.push.apply(Yt,e),Fl=null),e}function Dr(e){Fl===null?Fl=[e]:Fl.push(e)}var Ku=R(null),Wl=null,Ka=null;function ml(e,t,l){X(Ku,t._currentValue),t._currentValue=l}function Wa(e){e._currentValue=Ku.current,Q(Ku)}function Wu(e,t,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===l)break;e=e.return}}function Ju(e,t,l,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var f=r.child;o=o.firstContext;e:for(;o!==null;){var p=o;o=r;for(var N=0;N<t.length;N++)if(p.context===t[N]){o.lanes|=l,p=o.alternate,p!==null&&(p.lanes|=l),Wu(o.return,l,e),n||(f=null);break e}o=p.next}}else if(r.tag===18){if(f=r.return,f===null)throw Error(c(341));f.lanes|=l,o=f.alternate,o!==null&&(o.lanes|=l),Wu(f,l,e),f=null}else f=r.child;if(f!==null)f.return=r;else for(f=r;f!==null;){if(f===e){f=null;break}if(r=f.sibling,r!==null){r.return=f.return,f=r;break}f=f.return}r=f}}function Br(e,t,l,n){e=null;for(var r=t,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var f=r.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var p=r.type;Xt(r.pendingProps.value,f.value)||(e!==null?e.push(p):e=[p])}}else if(r===Ye.current){if(f=r.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ui):e=[ui])}r=r.return}e!==null&&Ju(t,e,l,n),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!Xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Jl(e){Wl=e,Ka=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ot(e){return wd(Wl,e)}function Ii(e,t){return Wl===null&&Jl(e),wd(e,t)}function wd(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Ka===null){if(e===null)throw Error(c(308));Ka=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ka=Ka.next=t;return l}var Uv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},kv=a.unstable_scheduleCallback,qv=a.unstable_NormalPriority,pt={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new Uv,data:new Map,refCount:0}}function Rr(e){e.refCount--,e.refCount===0&&kv(qv,function(){e.controller.abort()})}var zr=null,ec=0,An=0,On=null;function Yv(e,t){if(zr===null){var l=zr=[];ec=0,An=as(),On={status:"pending",value:void 0,then:function(n){l.push(n)}}}return ec++,t.then(Td,Td),t}function Td(){if(--ec===0&&zr!==null){On!==null&&(On.status="fulfilled");var e=zr;zr=null,An=0,On=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Gv(e,t){var l=[],n={status:"pending",value:null,reason:null,then:function(r){l.push(r)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var r=0;r<l.length;r++)(0,l[r])(t)},function(r){for(n.status="rejected",n.reason=r,r=0;r<l.length;r++)(0,l[r])(void 0)}),n}var Md=L.S;L.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Yv(e,t),Md!==null&&Md(e,t)};var Il=R(null);function tc(){var e=Il.current;return e!==null?e:Ve.pooledCache}function eo(e,t){t===null?X(Il,Il.current):X(Il,t.pool)}function Cd(){var e=tc();return e===null?null:{parent:pt._currentValue,pool:e}}var Hr=Error(c(460)),Ad=Error(c(474)),to=Error(c(542)),ac={then:function(){}};function Od(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ao(){}function Dd(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(ao,ao),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rd(e),e;default:if(typeof t.status=="string")t.then(ao,ao);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=n}},function(n){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rd(e),e}throw jr=t,Hr}}var jr=null;function Bd(){if(jr===null)throw Error(c(459));var e=jr;return jr=null,e}function Rd(e){if(e===Hr||e===to)throw Error(c(483))}var pl=!1;function lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function gl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function vl(e,t,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Re&2)!==0){var r=n.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t,t=Zi(e),xd(e,null,l),t}return Qi(e,n,t,l),Zi(e)}function Lr(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Ai(e,l)}}function rc(e,t){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var r=null,o=null;if(l=l.firstBaseUpdate,l!==null){do{var f={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};o===null?r=o=f:o=o.next=f,l=l.next}while(l!==null);o===null?r=o=t:o=o.next=t}else r=o=t;l={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var ic=!1;function Ur(){if(ic){var e=On;if(e!==null)throw e}}function kr(e,t,l,n){ic=!1;var r=e.updateQueue;pl=!1;var o=r.firstBaseUpdate,f=r.lastBaseUpdate,p=r.shared.pending;if(p!==null){r.shared.pending=null;var N=p,O=N.next;N.next=null,f===null?o=O:f.next=O,f=N;var k=e.alternate;k!==null&&(k=k.updateQueue,p=k.lastBaseUpdate,p!==f&&(p===null?k.firstBaseUpdate=O:p.next=O,k.lastBaseUpdate=N))}if(o!==null){var G=r.baseState;f=0,k=O=N=null,p=o;do{var z=p.lane&-536870913,j=z!==p.lane;if(j?(Te&z)===z:(n&z)===z){z!==0&&z===An&&(ic=!0),k!==null&&(k=k.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var he=e,se=p;z=t;var ke=l;switch(se.tag){case 1:if(he=se.payload,typeof he=="function"){G=he.call(ke,G,z);break e}G=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=se.payload,z=typeof he=="function"?he.call(ke,G,z):he,z==null)break e;G=y({},G,z);break e;case 2:pl=!0}}z=p.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=r.callbacks,j===null?r.callbacks=[z]:j.push(z))}else j={lane:z,tag:p.tag,payload:p.payload,callback:p.callback,next:null},k===null?(O=k=j,N=G):k=k.next=j,f|=z;if(p=p.next,p===null){if(p=r.shared.pending,p===null)break;j=p,p=j.next,j.next=null,r.lastBaseUpdate=j,r.shared.pending=null}}while(!0);k===null&&(N=G),r.baseState=N,r.firstBaseUpdate=O,r.lastBaseUpdate=k,o===null&&(r.shared.lanes=0),_l|=f,e.lanes=f,e.memoizedState=G}}function zd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Hd(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)zd(l[e],t)}var Dn=R(null),lo=R(0);function jd(e,t){e=nl,X(lo,e),X(Dn,t),nl=e|t.baseLanes}function oc(){X(lo,nl),X(Dn,Dn.current)}function uc(){nl=lo.current,Q(Dn),Q(lo)}var yl=0,Se=null,Le=null,st=null,no=!1,Bn=!1,en=!1,ro=0,qr=0,Rn=null,Vv=0;function rt(){throw Error(c(321))}function cc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Xt(e[l],t[l]))return!1;return!0}function sc(e,t,l,n,r,o){return yl=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?xh:Sh,en=!1,o=l(n,r),en=!1,Bn&&(o=Ud(t,l,n,r)),Ld(e),o}function Ld(e){L.H=fo;var t=Le!==null&&Le.next!==null;if(yl=0,st=Le=Se=null,no=!1,qr=0,Rn=null,t)throw Error(c(300));e===null||bt||(e=e.dependencies,e!==null&&Ji(e)&&(bt=!0))}function Ud(e,t,l,n){Se=e;var r=0;do{if(Bn&&(Rn=null),qr=0,Bn=!1,25<=r)throw Error(c(301));if(r+=1,st=Le=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}L.H=Wv,o=t(l,n)}while(Bn);return o}function Pv(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?Yr(t):t,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(Se.flags|=1024),t}function fc(){var e=ro!==0;return ro=0,e}function dc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function hc(e){if(no){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}no=!1}yl=0,st=Le=Se=null,Bn=!1,qr=ro=0,Rn=null}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Se.memoizedState=st=e:st=st.next=e,st}function ft(){if(Le===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=st===null?Se.memoizedState:st.next;if(t!==null)st=t,Le=e;else{if(e===null)throw Se.alternate===null?Error(c(467)):Error(c(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},st===null?Se.memoizedState=st=e:st=st.next=e}return st}function mc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yr(e){var t=qr;return qr+=1,Rn===null&&(Rn=[]),e=Dd(Rn,e,t),t=Se,(st===null?t.memoizedState:st.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?xh:Sh),e}function io(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yr(e);if(e.$$typeof===U)return Ot(e)}throw Error(c(438,String(e)))}function pc(e){var t=null,l=Se.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var n=Se.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=mc(),Se.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),n=0;n<e;n++)l[n]=me;return t.index++,l}function Ja(e,t){return typeof t=="function"?t(e):t}function oo(e){var t=ft();return gc(t,Le,e)}function gc(e,t,l){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=l;var r=e.baseQueue,o=n.pending;if(o!==null){if(r!==null){var f=r.next;r.next=o.next,o.next=f}t.baseQueue=r=o,n.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{t=r.next;var p=f=null,N=null,O=t,k=!1;do{var G=O.lane&-536870913;if(G!==O.lane?(Te&G)===G:(yl&G)===G){var z=O.revertLane;if(z===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),G===An&&(k=!0);else if((yl&z)===z){O=O.next,z===An&&(k=!0);continue}else G={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},N===null?(p=N=G,f=o):N=N.next=G,Se.lanes|=z,_l|=z;G=O.action,en&&l(o,G),o=O.hasEagerState?O.eagerState:l(o,G)}else z={lane:G,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},N===null?(p=N=z,f=o):N=N.next=z,Se.lanes|=G,_l|=G;O=O.next}while(O!==null&&O!==t);if(N===null?f=o:N.next=p,!Xt(o,e.memoizedState)&&(bt=!0,k&&(l=On,l!==null)))throw l;e.memoizedState=o,e.baseState=f,e.baseQueue=N,n.lastRenderedState=o}return r===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function vc(e){var t=ft(),l=t.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=e;var n=l.dispatch,r=l.pending,o=t.memoizedState;if(r!==null){l.pending=null;var f=r=r.next;do o=e(o,f.action),f=f.next;while(f!==r);Xt(o,t.memoizedState)||(bt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),l.lastRenderedState=o}return[o,n]}function kd(e,t,l){var n=Se,r=ft(),o=Ce;if(o){if(l===void 0)throw Error(c(407));l=l()}else l=t();var f=!Xt((Le||r).memoizedState,l);f&&(r.memoizedState=l,bt=!0),r=r.queue;var p=Gd.bind(null,n,r,e);if(Gr(2048,8,p,[e]),r.getSnapshot!==t||f||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,zn(9,uo(),Yd.bind(null,n,r,l,t),null),Ve===null)throw Error(c(349));o||(yl&124)!==0||qd(n,t,l)}return l}function qd(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=Se.updateQueue,t===null?(t=mc(),Se.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Yd(e,t,l,n){t.value=l,t.getSnapshot=n,Vd(t)&&Pd(e)}function Gd(e,t,l){return l(function(){Vd(t)&&Pd(e)})}function Vd(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Xt(e,l)}catch{return!0}}function Pd(e){var t=wn(e,2);t!==null&&Jt(t,e,2)}function yc(e){var t=kt();if(typeof e=="function"){var l=e;if(e=l(),en){Fe(!0);try{l()}finally{Fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:e},t}function Xd(e,t,l,n){return e.baseState=l,gc(e,Le,typeof n=="function"?n:Ja)}function Xv(e,t,l,n,r){if(so(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){o.listeners.push(f)}};L.T!==null?l(!0):o.isTransition=!1,n(o),l=t.pending,l===null?(o.next=t.pending=o,Qd(t,o)):(o.next=l.next,t.pending=l.next=o)}}function Qd(e,t){var l=t.action,n=t.payload,r=e.state;if(t.isTransition){var o=L.T,f={};L.T=f;try{var p=l(r,n),N=L.S;N!==null&&N(f,p),Zd(e,t,p)}catch(O){bc(e,t,O)}finally{L.T=o}}else try{o=l(r,n),Zd(e,t,o)}catch(O){bc(e,t,O)}}function Zd(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){Fd(e,t,n)},function(n){return bc(e,t,n)}):Fd(e,t,l)}function Fd(e,t,l){t.status="fulfilled",t.value=l,Kd(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Qd(e,l)))}function bc(e,t,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=l,Kd(t),t=t.next;while(t!==n)}e.action=null}function Kd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Wd(e,t){return t}function Jd(e,t){if(Ce){var l=Ve.formState;if(l!==null){e:{var n=Se;if(Ce){if(lt){t:{for(var r=lt,o=Da;r.nodeType!==8;){if(!o){r=null;break t}if(r=_a(r.nextSibling),r===null){r=null;break t}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){lt=_a(r.nextSibling),n=r.data==="F!";break e}}Kl(n)}n=!1}n&&(t=l[0])}}return l=kt(),l.memoizedState=l.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wd,lastRenderedState:t},l.queue=n,l=vh.bind(null,Se,n),n.dispatch=l,n=yc(!1),o=Nc.bind(null,Se,!1,n.queue),n=kt(),r={state:t,dispatch:null,action:e,pending:null},n.queue=r,l=Xv.bind(null,Se,r,o,l),r.dispatch=l,n.memoizedState=e,[t,l,!1]}function Id(e){var t=ft();return eh(t,Le,e)}function eh(e,t,l){if(t=gc(e,t,Wd)[0],e=oo(Ja)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Yr(t)}catch(f){throw f===Hr?to:f}else n=t;t=ft();var r=t.queue,o=r.dispatch;return l!==t.memoizedState&&(Se.flags|=2048,zn(9,uo(),Qv.bind(null,r,l),null)),[n,o,e]}function Qv(e,t){e.action=t}function th(e){var t=ft(),l=Le;if(l!==null)return eh(t,l,e);ft(),t=t.memoizedState,l=ft();var n=l.queue.dispatch;return l.memoizedState=e,[t,n,!1]}function zn(e,t,l,n){return e={tag:e,create:l,deps:n,inst:t,next:null},t=Se.updateQueue,t===null&&(t=mc(),Se.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,t.lastEffect=e),e}function uo(){return{destroy:void 0,resource:void 0}}function ah(){return ft().memoizedState}function co(e,t,l,n){var r=kt();n=n===void 0?null:n,Se.flags|=e,r.memoizedState=zn(1|t,uo(),l,n)}function Gr(e,t,l,n){var r=ft();n=n===void 0?null:n;var o=r.memoizedState.inst;Le!==null&&n!==null&&cc(n,Le.memoizedState.deps)?r.memoizedState=zn(t,o,l,n):(Se.flags|=e,r.memoizedState=zn(1|t,o,l,n))}function lh(e,t){co(8390656,8,e,t)}function nh(e,t){Gr(2048,8,e,t)}function rh(e,t){return Gr(4,2,e,t)}function ih(e,t){return Gr(4,4,e,t)}function oh(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uh(e,t,l){l=l!=null?l.concat([e]):null,Gr(4,4,oh.bind(null,t,e),l)}function xc(){}function ch(e,t){var l=ft();t=t===void 0?null:t;var n=l.memoizedState;return t!==null&&cc(t,n[1])?n[0]:(l.memoizedState=[e,t],e)}function sh(e,t){var l=ft();t=t===void 0?null:t;var n=l.memoizedState;if(t!==null&&cc(t,n[1]))return n[0];if(n=e(),en){Fe(!0);try{e()}finally{Fe(!1)}}return l.memoizedState=[n,t],n}function Sc(e,t,l){return l===void 0||(yl&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=hm(),Se.lanes|=e,_l|=e,l)}function fh(e,t,l,n){return Xt(l,t)?l:Dn.current!==null?(e=Sc(e,l,n),Xt(e,t)||(bt=!0),e):(yl&42)===0?(bt=!0,e.memoizedState=l):(e=hm(),Se.lanes|=e,_l|=e,t)}function dh(e,t,l,n,r){var o=F.p;F.p=o!==0&&8>o?o:8;var f=L.T,p={};L.T=p,Nc(e,!1,t,l);try{var N=r(),O=L.S;if(O!==null&&O(p,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var k=Gv(N,n);Vr(e,t,k,Wt(e))}else Vr(e,t,n,Wt(e))}catch(G){Vr(e,t,{then:function(){},status:"rejected",reason:G},Wt())}finally{F.p=o,L.T=f}}function Zv(){}function Ec(e,t,l,n){if(e.tag!==5)throw Error(c(476));var r=hh(e).queue;dh(e,r,t,ae,l===null?Zv:function(){return mh(e),l(n)})}function hh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:ae},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mh(e){var t=hh(e).next.queue;Vr(e,t,{},Wt())}function $c(){return Ot(ui)}function ph(){return ft().memoizedState}function gh(){return ft().memoizedState}function Fv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Wt();e=gl(l);var n=vl(t,e,l);n!==null&&(Jt(n,t,l),Lr(n,t,l)),t={cache:Iu()},e.payload=t;return}t=t.return}}function Kv(e,t,l){var n=Wt();l={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},so(e)?yh(t,l):(l=Gu(e,t,l,n),l!==null&&(Jt(l,e,n),bh(l,t,n)))}function vh(e,t,l){var n=Wt();Vr(e,t,l,n)}function Vr(e,t,l,n){var r={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(so(e))yh(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var f=t.lastRenderedState,p=o(f,l);if(r.hasEagerState=!0,r.eagerState=p,Xt(p,f))return Qi(e,t,r,0),Ve===null&&Xi(),!1}catch{}finally{}if(l=Gu(e,t,r,n),l!==null)return Jt(l,e,n),bh(l,t,n),!0}return!1}function Nc(e,t,l,n){if(n={lane:2,revertLane:as(),action:n,hasEagerState:!1,eagerState:null,next:null},so(e)){if(t)throw Error(c(479))}else t=Gu(e,l,n,2),t!==null&&Jt(t,e,2)}function so(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function yh(e,t){Bn=no=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function bh(e,t,l){if((l&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Ai(e,l)}}var fo={readContext:Ot,use:io,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt},xh={readContext:Ot,use:io,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:lh,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,co(4194308,4,oh.bind(null,t,e),l)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){co(4,2,e,t)},useMemo:function(e,t){var l=kt();t=t===void 0?null:t;var n=e();if(en){Fe(!0);try{e()}finally{Fe(!1)}}return l.memoizedState=[n,t],n},useReducer:function(e,t,l){var n=kt();if(l!==void 0){var r=l(t);if(en){Fe(!0);try{l(t)}finally{Fe(!1)}}}else r=t;return n.memoizedState=n.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=Kv.bind(null,Se,e),[n.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:function(e){e=yc(e);var t=e.queue,l=vh.bind(null,Se,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:xc,useDeferredValue:function(e,t){var l=kt();return Sc(l,e,t)},useTransition:function(){var e=yc(!1);return e=dh.bind(null,Se,e.queue,!0,!1),kt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var n=Se,r=kt();if(Ce){if(l===void 0)throw Error(c(407));l=l()}else{if(l=t(),Ve===null)throw Error(c(349));(Te&124)!==0||qd(n,t,l)}r.memoizedState=l;var o={value:l,getSnapshot:t};return r.queue=o,lh(Gd.bind(null,n,o,e),[e]),n.flags|=2048,zn(9,uo(),Yd.bind(null,n,o,l,t),null),l},useId:function(){var e=kt(),t=Ve.identifierPrefix;if(Ce){var l=Fa,n=Za;l=(n&~(1<<32-ot(n)-1)).toString(32)+l,t="«"+t+"R"+l,l=ro++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=Vv++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:$c,useFormState:Jd,useActionState:Jd,useOptimistic:function(e){var t=kt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Nc.bind(null,Se,!0,l),l.dispatch=t,[e,t]},useMemoCache:pc,useCacheRefresh:function(){return kt().memoizedState=Fv.bind(null,Se)}},Sh={readContext:Ot,use:io,useCallback:ch,useContext:Ot,useEffect:nh,useImperativeHandle:uh,useInsertionEffect:rh,useLayoutEffect:ih,useMemo:sh,useReducer:oo,useRef:ah,useState:function(){return oo(Ja)},useDebugValue:xc,useDeferredValue:function(e,t){var l=ft();return fh(l,Le.memoizedState,e,t)},useTransition:function(){var e=oo(Ja)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:Yr(e),t]},useSyncExternalStore:kd,useId:ph,useHostTransitionStatus:$c,useFormState:Id,useActionState:Id,useOptimistic:function(e,t){var l=ft();return Xd(l,Le,e,t)},useMemoCache:pc,useCacheRefresh:gh},Wv={readContext:Ot,use:io,useCallback:ch,useContext:Ot,useEffect:nh,useImperativeHandle:uh,useInsertionEffect:rh,useLayoutEffect:ih,useMemo:sh,useReducer:vc,useRef:ah,useState:function(){return vc(Ja)},useDebugValue:xc,useDeferredValue:function(e,t){var l=ft();return Le===null?Sc(l,e,t):fh(l,Le.memoizedState,e,t)},useTransition:function(){var e=vc(Ja)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:Yr(e),t]},useSyncExternalStore:kd,useId:ph,useHostTransitionStatus:$c,useFormState:th,useActionState:th,useOptimistic:function(e,t){var l=ft();return Le!==null?Xd(l,Le,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:pc,useCacheRefresh:gh},Hn=null,Pr=0;function ho(e){var t=Pr;return Pr+=1,Hn===null&&(Hn=[]),Dd(Hn,e,t)}function Xr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function mo(e,t){throw t.$$typeof===$?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Eh(e){var t=e._init;return t(e._payload)}function $h(e){function t(M,w){if(e){var A=M.deletions;A===null?(M.deletions=[w],M.flags|=16):A.push(w)}}function l(M,w){if(!e)return null;for(;w!==null;)t(M,w),w=w.sibling;return null}function n(M){for(var w=new Map;M!==null;)M.key!==null?w.set(M.key,M):w.set(M.index,M),M=M.sibling;return w}function r(M,w){return M=Qa(M,w),M.index=0,M.sibling=null,M}function o(M,w,A){return M.index=A,e?(A=M.alternate,A!==null?(A=A.index,A<w?(M.flags|=67108866,w):A):(M.flags|=67108866,w)):(M.flags|=1048576,w)}function f(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function p(M,w,A,q){return w===null||w.tag!==6?(w=Pu(A,M.mode,q),w.return=M,w):(w=r(w,A),w.return=M,w)}function N(M,w,A,q){var le=A.type;return le===S?k(M,w,A.props.children,q,A.key):w!==null&&(w.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===fe&&Eh(le)===w.type)?(w=r(w,A.props),Xr(w,A),w.return=M,w):(w=Fi(A.type,A.key,A.props,null,M.mode,q),Xr(w,A),w.return=M,w)}function O(M,w,A,q){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=Xu(A,M.mode,q),w.return=M,w):(w=r(w,A.children||[]),w.return=M,w)}function k(M,w,A,q,le){return w===null||w.tag!==7?(w=Xl(A,M.mode,q,le),w.return=M,w):(w=r(w,A),w.return=M,w)}function G(M,w,A){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=Pu(""+w,M.mode,A),w.return=M,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case x:return A=Fi(w.type,w.key,w.props,null,M.mode,A),Xr(A,w),A.return=M,A;case T:return w=Xu(w,M.mode,A),w.return=M,w;case fe:var q=w._init;return w=q(w._payload),G(M,w,A)}if(Ae(w)||He(w))return w=Xl(w,M.mode,A,null),w.return=M,w;if(typeof w.then=="function")return G(M,ho(w),A);if(w.$$typeof===U)return G(M,Ii(M,w),A);mo(M,w)}return null}function z(M,w,A,q){var le=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return le!==null?null:p(M,w,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case x:return A.key===le?N(M,w,A,q):null;case T:return A.key===le?O(M,w,A,q):null;case fe:return le=A._init,A=le(A._payload),z(M,w,A,q)}if(Ae(A)||He(A))return le!==null?null:k(M,w,A,q,null);if(typeof A.then=="function")return z(M,w,ho(A),q);if(A.$$typeof===U)return z(M,w,Ii(M,A),q);mo(M,A)}return null}function j(M,w,A,q,le){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return M=M.get(A)||null,p(w,M,""+q,le);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case x:return M=M.get(q.key===null?A:q.key)||null,N(w,M,q,le);case T:return M=M.get(q.key===null?A:q.key)||null,O(w,M,q,le);case fe:var Ee=q._init;return q=Ee(q._payload),j(M,w,A,q,le)}if(Ae(q)||He(q))return M=M.get(A)||null,k(w,M,q,le,null);if(typeof q.then=="function")return j(M,w,A,ho(q),le);if(q.$$typeof===U)return j(M,w,A,Ii(w,q),le);mo(w,q)}return null}function he(M,w,A,q){for(var le=null,Ee=null,oe=w,de=w=0,St=null;oe!==null&&de<A.length;de++){oe.index>de?(St=oe,oe=null):St=oe.sibling;var Me=z(M,oe,A[de],q);if(Me===null){oe===null&&(oe=St);break}e&&oe&&Me.alternate===null&&t(M,oe),w=o(Me,w,de),Ee===null?le=Me:Ee.sibling=Me,Ee=Me,oe=St}if(de===A.length)return l(M,oe),Ce&&Zl(M,de),le;if(oe===null){for(;de<A.length;de++)oe=G(M,A[de],q),oe!==null&&(w=o(oe,w,de),Ee===null?le=oe:Ee.sibling=oe,Ee=oe);return Ce&&Zl(M,de),le}for(oe=n(oe);de<A.length;de++)St=j(oe,M,de,A[de],q),St!==null&&(e&&St.alternate!==null&&oe.delete(St.key===null?de:St.key),w=o(St,w,de),Ee===null?le=St:Ee.sibling=St,Ee=St);return e&&oe.forEach(function(Rl){return t(M,Rl)}),Ce&&Zl(M,de),le}function se(M,w,A,q){if(A==null)throw Error(c(151));for(var le=null,Ee=null,oe=w,de=w=0,St=null,Me=A.next();oe!==null&&!Me.done;de++,Me=A.next()){oe.index>de?(St=oe,oe=null):St=oe.sibling;var Rl=z(M,oe,Me.value,q);if(Rl===null){oe===null&&(oe=St);break}e&&oe&&Rl.alternate===null&&t(M,oe),w=o(Rl,w,de),Ee===null?le=Rl:Ee.sibling=Rl,Ee=Rl,oe=St}if(Me.done)return l(M,oe),Ce&&Zl(M,de),le;if(oe===null){for(;!Me.done;de++,Me=A.next())Me=G(M,Me.value,q),Me!==null&&(w=o(Me,w,de),Ee===null?le=Me:Ee.sibling=Me,Ee=Me);return Ce&&Zl(M,de),le}for(oe=n(oe);!Me.done;de++,Me=A.next())Me=j(oe,M,de,Me.value,q),Me!==null&&(e&&Me.alternate!==null&&oe.delete(Me.key===null?de:Me.key),w=o(Me,w,de),Ee===null?le=Me:Ee.sibling=Me,Ee=Me);return e&&oe.forEach(function(Jy){return t(M,Jy)}),Ce&&Zl(M,de),le}function ke(M,w,A,q){if(typeof A=="object"&&A!==null&&A.type===S&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case x:e:{for(var le=A.key;w!==null;){if(w.key===le){if(le=A.type,le===S){if(w.tag===7){l(M,w.sibling),q=r(w,A.props.children),q.return=M,M=q;break e}}else if(w.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===fe&&Eh(le)===w.type){l(M,w.sibling),q=r(w,A.props),Xr(q,A),q.return=M,M=q;break e}l(M,w);break}else t(M,w);w=w.sibling}A.type===S?(q=Xl(A.props.children,M.mode,q,A.key),q.return=M,M=q):(q=Fi(A.type,A.key,A.props,null,M.mode,q),Xr(q,A),q.return=M,M=q)}return f(M);case T:e:{for(le=A.key;w!==null;){if(w.key===le)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){l(M,w.sibling),q=r(w,A.children||[]),q.return=M,M=q;break e}else{l(M,w);break}else t(M,w);w=w.sibling}q=Xu(A,M.mode,q),q.return=M,M=q}return f(M);case fe:return le=A._init,A=le(A._payload),ke(M,w,A,q)}if(Ae(A))return he(M,w,A,q);if(He(A)){if(le=He(A),typeof le!="function")throw Error(c(150));return A=le.call(A),se(M,w,A,q)}if(typeof A.then=="function")return ke(M,w,ho(A),q);if(A.$$typeof===U)return ke(M,w,Ii(M,A),q);mo(M,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,w!==null&&w.tag===6?(l(M,w.sibling),q=r(w,A),q.return=M,M=q):(l(M,w),q=Pu(A,M.mode,q),q.return=M,M=q),f(M)):l(M,w)}return function(M,w,A,q){try{Pr=0;var le=ke(M,w,A,q);return Hn=null,le}catch(oe){if(oe===Hr||oe===to)throw oe;var Ee=Qt(29,oe,null,M.mode);return Ee.lanes=q,Ee.return=M,Ee}finally{}}}var jn=$h(!0),Nh=$h(!1),ha=R(null),Ba=null;function bl(e){var t=e.alternate;X(gt,gt.current&1),X(ha,e),Ba===null&&(t===null||Dn.current!==null||t.memoizedState!==null)&&(Ba=e)}function _h(e){if(e.tag===22){if(X(gt,gt.current),X(ha,e),Ba===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ba=e)}}else xl()}function xl(){X(gt,gt.current),X(ha,ha.current)}function Ia(e){Q(ha),Ba===e&&(Ba=null),Q(gt)}var gt=R(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||ms(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function _c(e,t,l,n){t=e.memoizedState,l=l(n,t),l=l==null?t:y({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var wc={enqueueSetState:function(e,t,l){e=e._reactInternals;var n=Wt(),r=gl(n);r.payload=t,l!=null&&(r.callback=l),t=vl(e,r,n),t!==null&&(Jt(t,e,n),Lr(t,e,n))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var n=Wt(),r=gl(n);r.tag=1,r.payload=t,l!=null&&(r.callback=l),t=vl(e,r,n),t!==null&&(Jt(t,e,n),Lr(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Wt(),n=gl(l);n.tag=2,t!=null&&(n.callback=t),t=vl(e,n,l),t!==null&&(Jt(t,e,l),Lr(t,e,l))}};function wh(e,t,l,n,r,o,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,f):t.prototype&&t.prototype.isPureReactComponent?!Mr(l,n)||!Mr(r,o):!0}function Th(e,t,l,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,n),t.state!==e&&wc.enqueueReplaceState(t,t.state,null)}function tn(e,t){var l=t;if("ref"in t){l={};for(var n in t)n!=="ref"&&(l[n]=t[n])}if(e=e.defaultProps){l===t&&(l=y({},l));for(var r in e)l[r]===void 0&&(l[r]=e[r])}return l}var go=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Mh(e){go(e)}function Ch(e){console.error(e)}function Ah(e){go(e)}function vo(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Oh(e,t,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Tc(e,t,l){return l=gl(l),l.tag=3,l.payload={element:null},l.callback=function(){vo(e,t)},l}function Dh(e){return e=gl(e),e.tag=3,e}function Bh(e,t,l,n){var r=l.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;e.payload=function(){return r(o)},e.callback=function(){Oh(t,l,n)}}var f=l.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Oh(t,l,n),typeof r!="function"&&(wl===null?wl=new Set([this]):wl.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})})}function Jv(e,t,l,n,r){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=l.alternate,t!==null&&Br(t,l,r,!0),l=ha.current,l!==null){switch(l.tag){case 13:return Ba===null?Wc():l.alternate===null&&nt===0&&(nt=3),l.flags&=-257,l.flags|=65536,l.lanes=r,n===ac?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([n]):t.add(n),Ic(e,n,r)),!1;case 22:return l.flags|=65536,n===ac?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([n]):l.add(n)),Ic(e,n,r)),!1}throw Error(c(435,l.tag))}return Ic(e,n,r),Wc(),!1}if(Ce)return t=ha.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,n!==Fu&&(e=Error(c(422),{cause:n}),Dr(ca(e,l)))):(n!==Fu&&(t=Error(c(423),{cause:n}),Dr(ca(t,l))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,n=ca(n,l),r=Tc(e.stateNode,n,r),rc(e,r),nt!==4&&(nt=2)),!1;var o=Error(c(520),{cause:n});if(o=ca(o,l),Ir===null?Ir=[o]:Ir.push(o),nt!==4&&(nt=2),t===null)return!0;n=ca(n,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=r&-r,l.lanes|=e,e=Tc(l.stateNode,n,e),rc(l,e),!1;case 1:if(t=l.type,o=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(wl===null||!wl.has(o))))return l.flags|=65536,r&=-r,l.lanes|=r,r=Dh(r),Bh(r,e,l,n),rc(l,r),!1}l=l.return}while(l!==null);return!1}var Rh=Error(c(461)),bt=!1;function _t(e,t,l,n){t.child=e===null?Nh(t,null,l,n):jn(t,e.child,l,n)}function zh(e,t,l,n,r){l=l.render;var o=t.ref;if("ref"in n){var f={};for(var p in n)p!=="ref"&&(f[p]=n[p])}else f=n;return Jl(t),n=sc(e,t,l,f,o,r),p=fc(),e!==null&&!bt?(dc(e,t,r),el(e,t,r)):(Ce&&p&&Qu(t),t.flags|=1,_t(e,t,n,r),t.child)}function Hh(e,t,l,n,r){if(e===null){var o=l.type;return typeof o=="function"&&!Vu(o)&&o.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=o,jh(e,t,o,n,r)):(e=Fi(l.type,null,n,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!zc(e,r)){var f=o.memoizedProps;if(l=l.compare,l=l!==null?l:Mr,l(f,n)&&e.ref===t.ref)return el(e,t,r)}return t.flags|=1,e=Qa(o,n),e.ref=t.ref,e.return=t,t.child=e}function jh(e,t,l,n,r){if(e!==null){var o=e.memoizedProps;if(Mr(o,n)&&e.ref===t.ref)if(bt=!1,t.pendingProps=n=o,zc(e,r))(e.flags&131072)!==0&&(bt=!0);else return t.lanes=e.lanes,el(e,t,r)}return Mc(e,t,l,n,r)}function Lh(e,t,l){var n=t.pendingProps,r=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=o!==null?o.baseLanes|l:l,e!==null){for(r=t.child=e.child,o=0;r!==null;)o=o|r.lanes|r.childLanes,r=r.sibling;t.childLanes=o&~n}else t.childLanes=0,t.child=null;return Uh(e,t,n,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&eo(t,o!==null?o.cachePool:null),o!==null?jd(t,o):oc(),_h(t);else return t.lanes=t.childLanes=536870912,Uh(e,t,o!==null?o.baseLanes|l:l,l)}else o!==null?(eo(t,o.cachePool),jd(t,o),xl(),t.memoizedState=null):(e!==null&&eo(t,null),oc(),xl());return _t(e,t,r,l),t.child}function Uh(e,t,l,n){var r=tc();return r=r===null?null:{parent:pt._currentValue,pool:r},t.memoizedState={baseLanes:l,cachePool:r},e!==null&&eo(t,null),oc(),_h(t),e!==null&&Br(e,t,n,!0),null}function yo(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(c(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Mc(e,t,l,n,r){return Jl(t),l=sc(e,t,l,n,void 0,r),n=fc(),e!==null&&!bt?(dc(e,t,r),el(e,t,r)):(Ce&&n&&Qu(t),t.flags|=1,_t(e,t,l,r),t.child)}function kh(e,t,l,n,r,o){return Jl(t),t.updateQueue=null,l=Ud(t,n,l,r),Ld(e),n=fc(),e!==null&&!bt?(dc(e,t,o),el(e,t,o)):(Ce&&n&&Qu(t),t.flags|=1,_t(e,t,l,o),t.child)}function qh(e,t,l,n,r){if(Jl(t),t.stateNode===null){var o=Tn,f=l.contextType;typeof f=="object"&&f!==null&&(o=Ot(f)),o=new l(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=wc,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},lc(t),f=l.contextType,o.context=typeof f=="object"&&f!==null?Ot(f):Tn,o.state=t.memoizedState,f=l.getDerivedStateFromProps,typeof f=="function"&&(_c(t,l,f,n),o.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(f=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),f!==o.state&&wc.enqueueReplaceState(o,o.state,null),kr(t,n,o,r),Ur(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var p=t.memoizedProps,N=tn(l,p);o.props=N;var O=o.context,k=l.contextType;f=Tn,typeof k=="object"&&k!==null&&(f=Ot(k));var G=l.getDerivedStateFromProps;k=typeof G=="function"||typeof o.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,k||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p||O!==f)&&Th(t,o,n,f),pl=!1;var z=t.memoizedState;o.state=z,kr(t,n,o,r),Ur(),O=t.memoizedState,p||z!==O||pl?(typeof G=="function"&&(_c(t,l,G,n),O=t.memoizedState),(N=pl||wh(t,l,N,n,z,O,f))?(k||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=O),o.props=n,o.state=O,o.context=f,n=N):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,nc(e,t),f=t.memoizedProps,k=tn(l,f),o.props=k,G=t.pendingProps,z=o.context,O=l.contextType,N=Tn,typeof O=="object"&&O!==null&&(N=Ot(O)),p=l.getDerivedStateFromProps,(O=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f!==G||z!==N)&&Th(t,o,n,N),pl=!1,z=t.memoizedState,o.state=z,kr(t,n,o,r),Ur();var j=t.memoizedState;f!==G||z!==j||pl||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof p=="function"&&(_c(t,l,p,n),j=t.memoizedState),(k=pl||wh(t,l,k,n,z,j,N)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(O||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,j,N),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,j,N)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=j),o.props=n,o.state=j,o.context=N,n=k):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,yo(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=jn(t,e.child,null,r),t.child=jn(t,null,l,r)):_t(e,t,l,r),t.memoizedState=o.state,e=t.child):e=el(e,t,r),e}function Yh(e,t,l,n){return Or(),t.flags|=256,_t(e,t,l,n),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ac(e){return{baseLanes:e,cachePool:Cd()}}function Oc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=ma),e}function Gh(e,t,l){var n=t.pendingProps,r=!1,o=(t.flags&128)!==0,f;if((f=o)||(f=e!==null&&e.memoizedState===null?!1:(gt.current&2)!==0),f&&(r=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(r?bl(t):xl(),Ce){var p=lt,N;if(N=p){e:{for(N=p,p=Da;N.nodeType!==8;){if(!p){p=null;break e}if(N=_a(N.nextSibling),N===null){p=null;break e}}p=N}p!==null?(t.memoizedState={dehydrated:p,treeContext:Ql!==null?{id:Za,overflow:Fa}:null,retryLane:536870912,hydrationErrors:null},N=Qt(18,null,null,0),N.stateNode=p,N.return=t,t.child=N,Ht=t,lt=null,N=!0):N=!1}N||Kl(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return ms(p)?t.lanes=32:t.lanes=536870912,null;Ia(t)}return p=n.children,n=n.fallback,r?(xl(),r=t.mode,p=bo({mode:"hidden",children:p},r),n=Xl(n,r,l,null),p.return=t,n.return=t,p.sibling=n,t.child=p,r=t.child,r.memoizedState=Ac(l),r.childLanes=Oc(e,f,l),t.memoizedState=Cc,n):(bl(t),Dc(t,p))}if(N=e.memoizedState,N!==null&&(p=N.dehydrated,p!==null)){if(o)t.flags&256?(bl(t),t.flags&=-257,t=Bc(e,t,l)):t.memoizedState!==null?(xl(),t.child=e.child,t.flags|=128,t=null):(xl(),r=n.fallback,p=t.mode,n=bo({mode:"visible",children:n.children},p),r=Xl(r,p,l,null),r.flags|=2,n.return=t,r.return=t,n.sibling=r,t.child=n,jn(t,e.child,null,l),n=t.child,n.memoizedState=Ac(l),n.childLanes=Oc(e,f,l),t.memoizedState=Cc,t=r);else if(bl(t),ms(p)){if(f=p.nextSibling&&p.nextSibling.dataset,f)var O=f.dgst;f=O,n=Error(c(419)),n.stack="",n.digest=f,Dr({value:n,source:null,stack:null}),t=Bc(e,t,l)}else if(bt||Br(e,t,l,!1),f=(l&e.childLanes)!==0,bt||f){if(f=Ve,f!==null&&(n=l&-l,n=(n&42)!==0?1:mn(n),n=(n&(f.suspendedLanes|l))!==0?0:n,n!==0&&n!==N.retryLane))throw N.retryLane=n,wn(e,n),Jt(f,e,n),Rh;p.data==="$?"||Wc(),t=Bc(e,t,l)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=N.treeContext,lt=_a(p.nextSibling),Ht=t,Ce=!0,Fl=null,Da=!1,e!==null&&(fa[da++]=Za,fa[da++]=Fa,fa[da++]=Ql,Za=e.id,Fa=e.overflow,Ql=t),t=Dc(t,n.children),t.flags|=4096);return t}return r?(xl(),r=n.fallback,p=t.mode,N=e.child,O=N.sibling,n=Qa(N,{mode:"hidden",children:n.children}),n.subtreeFlags=N.subtreeFlags&65011712,O!==null?r=Qa(O,r):(r=Xl(r,p,l,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,n=r,r=t.child,p=e.child.memoizedState,p===null?p=Ac(l):(N=p.cachePool,N!==null?(O=pt._currentValue,N=N.parent!==O?{parent:O,pool:O}:N):N=Cd(),p={baseLanes:p.baseLanes|l,cachePool:N}),r.memoizedState=p,r.childLanes=Oc(e,f,l),t.memoizedState=Cc,n):(bl(t),l=e.child,e=l.sibling,l=Qa(l,{mode:"visible",children:n.children}),l.return=t,l.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=l,t.memoizedState=null,l)}function Dc(e,t){return t=bo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function bo(e,t){return e=Qt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Bc(e,t,l){return jn(t,e.child,null,l),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vh(e,t,l){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Wu(e.return,t,l)}function Rc(e,t,l,n,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=l,o.tailMode=r)}function Ph(e,t,l){var n=t.pendingProps,r=n.revealOrder,o=n.tail;if(_t(e,t,n.children,l),n=gt.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vh(e,l,t);else if(e.tag===19)Vh(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(X(gt,n),r){case"forwards":for(l=t.child,r=null;l!==null;)e=l.alternate,e!==null&&po(e)===null&&(r=l),l=l.sibling;l=r,l===null?(r=t.child,t.child=null):(r=l.sibling,l.sibling=null),Rc(t,!1,r,l,o);break;case"backwards":for(l=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&po(e)===null){t.child=r;break}e=r.sibling,r.sibling=l,l=r,r=e}Rc(t,!0,l,null,o);break;case"together":Rc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function el(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),_l|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Br(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,l=Qa(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Qa(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function zc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ji(e)))}function Iv(e,t,l){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ml(t,pt,e.memoizedState.cache),Or();break;case 27:case 5:Mt(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ml(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(bl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Gh(e,t,l):(bl(t),e=el(e,t,l),e!==null?e.sibling:null);bl(t);break;case 19:var r=(e.flags&128)!==0;if(n=(l&t.childLanes)!==0,n||(Br(e,t,l,!1),n=(l&t.childLanes)!==0),r){if(n)return Ph(e,t,l);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),X(gt,gt.current),n)break;return null;case 22:case 23:return t.lanes=0,Lh(e,t,l);case 24:ml(t,pt,e.memoizedState.cache)}return el(e,t,l)}function Xh(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)bt=!0;else{if(!zc(e,l)&&(t.flags&128)===0)return bt=!1,Iv(e,t,l);bt=(e.flags&131072)!==0}else bt=!1,Ce&&(t.flags&1048576)!==0&&Ed(t,Wi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,r=n._init;if(n=r(n._payload),t.type=n,typeof n=="function")Vu(n)?(e=tn(n,e),t.tag=1,t=qh(null,t,n,e,l)):(t.tag=0,t=Mc(null,t,n,e,l));else{if(n!=null){if(r=n.$$typeof,r===ee){t.tag=11,t=zh(null,t,n,e,l);break e}else if(r===I){t.tag=14,t=Hh(null,t,n,e,l);break e}}throw t=vt(n)||n,Error(c(306,t,""))}}return t;case 0:return Mc(e,t,t.type,t.pendingProps,l);case 1:return n=t.type,r=tn(n,t.pendingProps),qh(e,t,n,r,l);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var o=t.memoizedState;r=o.element,nc(e,t),kr(t,n,null,l);var f=t.memoizedState;if(n=f.cache,ml(t,pt,n),n!==o.cache&&Ju(t,[pt],l,!0),Ur(),n=f.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Yh(e,t,n,l);break e}else if(n!==r){r=ca(Error(c(424)),t),Dr(r),t=Yh(e,t,n,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(lt=_a(e.firstChild),Ht=t,Ce=!0,Fl=null,Da=!0,l=Nh(t,null,n,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Or(),n===r){t=el(e,t,l);break e}_t(e,t,n,l)}t=t.child}return t;case 26:return yo(e,t),e===null?(l=Km(t.type,null,t.pendingProps,null))?t.memoizedState=l:Ce||(l=t.type,e=t.pendingProps,n=Bo(re.current).createElement(l),n[et]=t,n[Ct]=e,Tt(n,l,e),ut(n),t.stateNode=n):t.memoizedState=Km(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Mt(t),e===null&&Ce&&(n=t.stateNode=Qm(t.type,t.pendingProps,re.current),Ht=t,Da=!0,r=lt,Cl(t.type)?(ps=r,lt=_a(n.firstChild)):lt=r),_t(e,t,t.pendingProps.children,l),yo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((r=n=lt)&&(n=Ty(n,t.type,t.pendingProps,Da),n!==null?(t.stateNode=n,Ht=t,lt=_a(n.firstChild),Da=!1,r=!0):r=!1),r||Kl(t)),Mt(t),r=t.type,o=t.pendingProps,f=e!==null?e.memoizedProps:null,n=o.children,fs(r,o)?n=null:f!==null&&fs(r,f)&&(t.flags|=32),t.memoizedState!==null&&(r=sc(e,t,Pv,null,null,l),ui._currentValue=r),yo(e,t),_t(e,t,n,l),t.child;case 6:return e===null&&Ce&&((e=l=lt)&&(l=My(l,t.pendingProps,Da),l!==null?(t.stateNode=l,Ht=t,lt=null,e=!0):e=!1),e||Kl(t)),null;case 13:return Gh(e,t,l);case 4:return ve(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=jn(t,null,n,l):_t(e,t,n,l),t.child;case 11:return zh(e,t,t.type,t.pendingProps,l);case 7:return _t(e,t,t.pendingProps,l),t.child;case 8:return _t(e,t,t.pendingProps.children,l),t.child;case 12:return _t(e,t,t.pendingProps.children,l),t.child;case 10:return n=t.pendingProps,ml(t,t.type,n.value),_t(e,t,n.children,l),t.child;case 9:return r=t.type._context,n=t.pendingProps.children,Jl(t),r=Ot(r),n=n(r),t.flags|=1,_t(e,t,n,l),t.child;case 14:return Hh(e,t,t.type,t.pendingProps,l);case 15:return jh(e,t,t.type,t.pendingProps,l);case 19:return Ph(e,t,l);case 31:return n=t.pendingProps,l=t.mode,n={mode:n.mode,children:n.children},e===null?(l=bo(n,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=Qa(e.child,n),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return Lh(e,t,l);case 24:return Jl(t),n=Ot(pt),e===null?(r=tc(),r===null&&(r=Ve,o=Iu(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=l),r=o),t.memoizedState={parent:n,cache:r},lc(t),ml(t,pt,r)):((e.lanes&l)!==0&&(nc(e,t),kr(t,null,null,l),Ur()),r=e.memoizedState,o=t.memoizedState,r.parent!==n?(r={parent:n,cache:n},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),ml(t,pt,n)):(n=o.cache,ml(t,pt,n),n!==r.cache&&Ju(t,[pt],l,!0))),_t(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function tl(e){e.flags|=4}function Qh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tp(t)){if(t=ha.current,t!==null&&((Te&4194048)===Te?Ba!==null:(Te&62914560)!==Te&&(Te&536870912)===0||t!==Ba))throw jr=ac,Ad;e.flags|=8192}}function xo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?aa():536870912,e.lanes|=t,qn|=t)}function Qr(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(t)for(var r=e.child;r!==null;)l|=r.lanes|r.childLanes,n|=r.subtreeFlags&65011712,n|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)l|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=l,t}function ey(e,t,l){var n=t.pendingProps;switch(Zu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return tt(t),null;case 3:return l=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wa(pt),Je(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?tl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_d())),tt(t),null;case 26:return l=t.memoizedState,e===null?(tl(t),l!==null?(tt(t),Qh(t,l)):(tt(t),t.flags&=-16777217)):l?l!==e.memoizedState?(tl(t),tt(t),Qh(t,l)):(tt(t),t.flags&=-16777217):(e.memoizedProps!==n&&tl(t),tt(t),t.flags&=-16777217),null;case 27:Ge(t),l=re.current;var r=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&tl(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return tt(t),null}e=te.current,Ar(t)?$d(t):(e=Qm(r,n,l),t.stateNode=e,tl(t))}return tt(t),null;case 5:if(Ge(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&tl(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return tt(t),null}if(e=te.current,Ar(t))$d(t);else{switch(r=Bo(re.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?r.createElement(l,{is:n.is}):r.createElement(l)}}e[et]=t,e[Ct]=n;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(Tt(e,l,n),l){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&tl(t)}}return tt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&tl(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=re.current,Ar(t)){if(e=t.stateNode,l=t.memoizedProps,n=null,r=Ht,r!==null)switch(r.tag){case 27:case 5:n=r.memoizedProps}e[et]=t,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||km(e.nodeValue,l)),e||Kl(t)}else e=Bo(e).createTextNode(n),e[et]=t,t.stateNode=e}return tt(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ar(t),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[et]=t}else Or(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),r=!1}else r=_d(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Ia(t),t):(Ia(t),null)}if(Ia(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=n!==null,e=e!==null&&e.memoizedState!==null,l){n=t.child,r=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(r=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),xo(t,t.updateQueue),tt(t),null;case 4:return Je(),e===null&&is(t.stateNode.containerInfo),tt(t),null;case 10:return Wa(t.type),tt(t),null;case 19:if(Q(gt),r=t.memoizedState,r===null)return tt(t),null;if(n=(t.flags&128)!==0,o=r.rendering,o===null)if(n)Qr(r,!1);else{if(nt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Qr(r,!1),e=o.updateQueue,t.updateQueue=e,xo(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Sd(l,e),l=l.sibling;return X(gt,gt.current&1|2),t.child}e=e.sibling}r.tail!==null&&Xe()>$o&&(t.flags|=128,n=!0,Qr(r,!1),t.lanes=4194304)}else{if(!n)if(e=po(o),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,xo(t,e),Qr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Ce)return tt(t),null}else 2*Xe()-r.renderingStartTime>$o&&l!==536870912&&(t.flags|=128,n=!0,Qr(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e!==null?e.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Xe(),t.sibling=null,e=gt.current,X(gt,n?e&1|2:e&1),t):(tt(t),null);case 22:case 23:return Ia(t),uc(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(l&536870912)!==0&&(t.flags&128)===0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),l=t.updateQueue,l!==null&&xo(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==l&&(t.flags|=2048),e!==null&&Q(Il),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Wa(pt),tt(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function ty(e,t){switch(Zu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wa(pt),Je(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ge(t),null;case 13:if(Ia(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(gt),null;case 4:return Je(),null;case 10:return Wa(t.type),null;case 22:case 23:return Ia(t),uc(),e!==null&&Q(Il),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wa(pt),null;case 25:return null;default:return null}}function Zh(e,t){switch(Zu(t),t.tag){case 3:Wa(pt),Je();break;case 26:case 27:case 5:Ge(t);break;case 4:Je();break;case 13:Ia(t);break;case 19:Q(gt);break;case 10:Wa(t.type);break;case 22:case 23:Ia(t),uc(),e!==null&&Q(Il);break;case 24:Wa(pt)}}function Zr(e,t){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var r=n.next;l=r;do{if((l.tag&e)===e){n=void 0;var o=l.create,f=l.inst;n=o(),f.destroy=n}l=l.next}while(l!==r)}}catch(p){qe(t,t.return,p)}}function Sl(e,t,l){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var o=r.next;n=o;do{if((n.tag&e)===e){var f=n.inst,p=f.destroy;if(p!==void 0){f.destroy=void 0,r=t;var N=l,O=p;try{O()}catch(k){qe(r,N,k)}}}n=n.next}while(n!==o)}}catch(k){qe(t,t.return,k)}}function Fh(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Hd(t,l)}catch(n){qe(e,e.return,n)}}}function Kh(e,t,l){l.props=tn(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){qe(e,t,n)}}function Fr(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(r){qe(e,t,r)}}function Ra(e,t){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(r){qe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(r){qe(e,t,r)}else l.current=null}function Wh(e){var t=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(r){qe(e,e.return,r)}}function Hc(e,t,l){try{var n=e.stateNode;Ey(n,e.type,l,t),n[Ct]=t}catch(r){qe(e,e.return,r)}}function Jh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cl(e.type)||e.tag===4}function jc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lc(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Do));else if(n!==4&&(n===27&&Cl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Lc(e,t,l),e=e.sibling;e!==null;)Lc(e,t,l),e=e.sibling}function So(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(n!==4&&(n===27&&Cl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(So(e,t,l),e=e.sibling;e!==null;)So(e,t,l),e=e.sibling}function Ih(e){var t=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Tt(t,n,l),t[et]=e,t[Ct]=l}catch(o){qe(e,e.return,o)}}var al=!1,it=!1,Uc=!1,em=typeof WeakSet=="function"?WeakSet:Set,xt=null;function ay(e,t){if(e=e.containerInfo,cs=Uo,e=fd(e),ju(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var r=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{l.nodeType,o.nodeType}catch{l=null;break e}var f=0,p=-1,N=-1,O=0,k=0,G=e,z=null;t:for(;;){for(var j;G!==l||r!==0&&G.nodeType!==3||(p=f+r),G!==o||n!==0&&G.nodeType!==3||(N=f+n),G.nodeType===3&&(f+=G.nodeValue.length),(j=G.firstChild)!==null;)z=G,G=j;for(;;){if(G===e)break t;if(z===l&&++O===r&&(p=f),z===o&&++k===n&&(N=f),(j=G.nextSibling)!==null)break;G=z,z=G.parentNode}G=j}l=p===-1||N===-1?null:{start:p,end:N}}else l=null}l=l||{start:0,end:0}}else l=null;for(ss={focusedElem:e,selectionRange:l},Uo=!1,xt=t;xt!==null;)if(t=xt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,xt=e;else for(;xt!==null;){switch(t=xt,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,l=t,r=o.memoizedProps,o=o.memoizedState,n=l.stateNode;try{var he=tn(l.type,r,l.elementType===l.type);e=n.getSnapshotBeforeUpdate(he,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(se){qe(l,l.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)hs(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,xt=e;break}xt=t.return}}function tm(e,t,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:El(e,l),n&4&&Zr(5,l);break;case 1:if(El(e,l),n&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(f){qe(l,l.return,f)}else{var r=tn(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){qe(l,l.return,f)}}n&64&&Fh(l),n&512&&Fr(l,l.return);break;case 3:if(El(e,l),n&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Hd(e,t)}catch(f){qe(l,l.return,f)}}break;case 27:t===null&&n&4&&Ih(l);case 26:case 5:El(e,l),t===null&&n&4&&Wh(l),n&512&&Fr(l,l.return);break;case 12:El(e,l);break;case 13:El(e,l),n&4&&nm(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=fy.bind(null,l),Cy(e,l))));break;case 22:if(n=l.memoizedState!==null||al,!n){t=t!==null&&t.memoizedState!==null||it,r=al;var o=it;al=n,(it=t)&&!o?$l(e,l,(l.subtreeFlags&8772)!==0):El(e,l),al=r,it=o}break;case 30:break;default:El(e,l)}}function am(e){var t=e.alternate;t!==null&&(e.alternate=null,am(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,qt=!1;function ll(e,t,l){for(l=l.child;l!==null;)lm(e,t,l),l=l.sibling}function lm(e,t,l){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Ma,l)}catch{}switch(l.tag){case 26:it||Ra(l,t),ll(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:it||Ra(l,t);var n=Ke,r=qt;Cl(l.type)&&(Ke=l.stateNode,qt=!1),ll(e,t,l),ni(l.stateNode),Ke=n,qt=r;break;case 5:it||Ra(l,t);case 6:if(n=Ke,r=qt,Ke=null,ll(e,t,l),Ke=n,qt=r,Ke!==null)if(qt)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(l.stateNode)}catch(o){qe(l,t,o)}else try{Ke.removeChild(l.stateNode)}catch(o){qe(l,t,o)}break;case 18:Ke!==null&&(qt?(e=Ke,Pm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),di(e)):Pm(Ke,l.stateNode));break;case 4:n=Ke,r=qt,Ke=l.stateNode.containerInfo,qt=!0,ll(e,t,l),Ke=n,qt=r;break;case 0:case 11:case 14:case 15:it||Sl(2,l,t),it||Sl(4,l,t),ll(e,t,l);break;case 1:it||(Ra(l,t),n=l.stateNode,typeof n.componentWillUnmount=="function"&&Kh(l,t,n)),ll(e,t,l);break;case 21:ll(e,t,l);break;case 22:it=(n=it)||l.memoizedState!==null,ll(e,t,l),it=n;break;default:ll(e,t,l)}}function nm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{di(e)}catch(l){qe(t,t.return,l)}}function ly(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new em),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new em),t;default:throw Error(c(435,e.tag))}}function kc(e,t){var l=ly(e);t.forEach(function(n){var r=dy.bind(null,e,n);l.has(n)||(l.add(n),n.then(r,r))})}function Zt(e,t){var l=t.deletions;if(l!==null)for(var n=0;n<l.length;n++){var r=l[n],o=e,f=t,p=f;e:for(;p!==null;){switch(p.tag){case 27:if(Cl(p.type)){Ke=p.stateNode,qt=!1;break e}break;case 5:Ke=p.stateNode,qt=!1;break e;case 3:case 4:Ke=p.stateNode.containerInfo,qt=!0;break e}p=p.return}if(Ke===null)throw Error(c(160));lm(o,f,r),Ke=null,qt=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)rm(t,e),t=t.sibling}var Na=null;function rm(e,t){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zt(t,e),Ft(e),n&4&&(Sl(3,e,e.return),Zr(3,e),Sl(5,e,e.return));break;case 1:Zt(t,e),Ft(e),n&512&&(it||l===null||Ra(l,l.return)),n&64&&al&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var r=Na;if(Zt(t,e),Ft(e),n&512&&(it||l===null||Ra(l,l.return)),n&4){var o=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,r=r.ownerDocument||r;t:switch(n){case"title":o=r.getElementsByTagName("title")[0],(!o||o[At]||o[et]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(n),r.head.insertBefore(o,r.querySelector("head > title"))),Tt(o,n,l),o[et]=e,ut(o),n=o;break e;case"link":var f=Im("link","href",r).get(n+(l.href||""));if(f){for(var p=0;p<f.length;p++)if(o=f[p],o.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&o.getAttribute("rel")===(l.rel==null?null:l.rel)&&o.getAttribute("title")===(l.title==null?null:l.title)&&o.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){f.splice(p,1);break t}}o=r.createElement(n),Tt(o,n,l),r.head.appendChild(o);break;case"meta":if(f=Im("meta","content",r).get(n+(l.content||""))){for(p=0;p<f.length;p++)if(o=f[p],o.getAttribute("content")===(l.content==null?null:""+l.content)&&o.getAttribute("name")===(l.name==null?null:l.name)&&o.getAttribute("property")===(l.property==null?null:l.property)&&o.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&o.getAttribute("charset")===(l.charSet==null?null:l.charSet)){f.splice(p,1);break t}}o=r.createElement(n),Tt(o,n,l),r.head.appendChild(o);break;default:throw Error(c(468,n))}o[et]=e,ut(o),n=o}e.stateNode=n}else ep(r,e.type,e.stateNode);else e.stateNode=Jm(r,n,e.memoizedProps);else o!==n?(o===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):o.count--,n===null?ep(r,e.type,e.stateNode):Jm(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Hc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Zt(t,e),Ft(e),n&512&&(it||l===null||Ra(l,l.return)),l!==null&&n&4&&Hc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Zt(t,e),Ft(e),n&512&&(it||l===null||Ra(l,l.return)),e.flags&32){r=e.stateNode;try{Pa(r,"")}catch(j){qe(e,e.return,j)}}n&4&&e.stateNode!=null&&(r=e.memoizedProps,Hc(e,r,l!==null?l.memoizedProps:r)),n&1024&&(Uc=!0);break;case 6:if(Zt(t,e),Ft(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(j){qe(e,e.return,j)}}break;case 3:if(Ho=null,r=Na,Na=Ro(t.containerInfo),Zt(t,e),Na=r,Ft(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(j){qe(e,e.return,j)}Uc&&(Uc=!1,im(e));break;case 4:n=Na,Na=Ro(e.stateNode.containerInfo),Zt(t,e),Ft(e),Na=n;break;case 12:Zt(t,e),Ft(e);break;case 13:Zt(t,e),Ft(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Xc=Xe()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,kc(e,n)));break;case 22:r=e.memoizedState!==null;var N=l!==null&&l.memoizedState!==null,O=al,k=it;if(al=O||r,it=k||N,Zt(t,e),it=k,al=O,Ft(e),n&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(l===null||N||al||it||an(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){N=l=t;try{if(o=N.stateNode,r)f=o.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{p=N.stateNode;var G=N.memoizedProps.style,z=G!=null&&G.hasOwnProperty("display")?G.display:null;p.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(j){qe(N,N.return,j)}}}else if(t.tag===6){if(l===null){N=t;try{N.stateNode.nodeValue=r?"":N.memoizedProps}catch(j){qe(N,N.return,j)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,kc(e,l))));break;case 19:Zt(t,e),Ft(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,kc(e,n)));break;case 30:break;case 21:break;default:Zt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{for(var l,n=e.return;n!==null;){if(Jh(n)){l=n;break}n=n.return}if(l==null)throw Error(c(160));switch(l.tag){case 27:var r=l.stateNode,o=jc(e);So(e,o,r);break;case 5:var f=l.stateNode;l.flags&32&&(Pa(f,""),l.flags&=-33);var p=jc(e);So(e,p,f);break;case 3:case 4:var N=l.stateNode.containerInfo,O=jc(e);Lc(e,O,N);break;default:throw Error(c(161))}}catch(k){qe(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function im(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;im(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function El(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tm(e,t.alternate,t),t=t.sibling}function an(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Sl(4,t,t.return),an(t);break;case 1:Ra(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Kh(t,t.return,l),an(t);break;case 27:ni(t.stateNode);case 26:case 5:Ra(t,t.return),an(t);break;case 22:t.memoizedState===null&&an(t);break;case 30:an(t);break;default:an(t)}e=e.sibling}}function $l(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,r=e,o=t,f=o.flags;switch(o.tag){case 0:case 11:case 15:$l(r,o,l),Zr(4,o);break;case 1:if($l(r,o,l),n=o,r=n.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(O){qe(n,n.return,O)}if(n=o,r=n.updateQueue,r!==null){var p=n.stateNode;try{var N=r.shared.hiddenCallbacks;if(N!==null)for(r.shared.hiddenCallbacks=null,r=0;r<N.length;r++)zd(N[r],p)}catch(O){qe(n,n.return,O)}}l&&f&64&&Fh(o),Fr(o,o.return);break;case 27:Ih(o);case 26:case 5:$l(r,o,l),l&&n===null&&f&4&&Wh(o),Fr(o,o.return);break;case 12:$l(r,o,l);break;case 13:$l(r,o,l),l&&f&4&&nm(r,o);break;case 22:o.memoizedState===null&&$l(r,o,l),Fr(o,o.return);break;case 30:break;default:$l(r,o,l)}t=t.sibling}}function qc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Rr(l))}function Yc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rr(e))}function za(e,t,l,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)om(e,t,l,n),t=t.sibling}function om(e,t,l,n){var r=t.flags;switch(t.tag){case 0:case 11:case 15:za(e,t,l,n),r&2048&&Zr(9,t);break;case 1:za(e,t,l,n);break;case 3:za(e,t,l,n),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rr(e)));break;case 12:if(r&2048){za(e,t,l,n),e=t.stateNode;try{var o=t.memoizedProps,f=o.id,p=o.onPostCommit;typeof p=="function"&&p(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){qe(t,t.return,N)}}else za(e,t,l,n);break;case 13:za(e,t,l,n);break;case 23:break;case 22:o=t.stateNode,f=t.alternate,t.memoizedState!==null?o._visibility&2?za(e,t,l,n):Kr(e,t):o._visibility&2?za(e,t,l,n):(o._visibility|=2,Ln(e,t,l,n,(t.subtreeFlags&10256)!==0)),r&2048&&qc(f,t);break;case 24:za(e,t,l,n),r&2048&&Yc(t.alternate,t);break;default:za(e,t,l,n)}}function Ln(e,t,l,n,r){for(r=r&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,f=t,p=l,N=n,O=f.flags;switch(f.tag){case 0:case 11:case 15:Ln(o,f,p,N,r),Zr(8,f);break;case 23:break;case 22:var k=f.stateNode;f.memoizedState!==null?k._visibility&2?Ln(o,f,p,N,r):Kr(o,f):(k._visibility|=2,Ln(o,f,p,N,r)),r&&O&2048&&qc(f.alternate,f);break;case 24:Ln(o,f,p,N,r),r&&O&2048&&Yc(f.alternate,f);break;default:Ln(o,f,p,N,r)}t=t.sibling}}function Kr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,n=t,r=n.flags;switch(n.tag){case 22:Kr(l,n),r&2048&&qc(n.alternate,n);break;case 24:Kr(l,n),r&2048&&Yc(n.alternate,n);break;default:Kr(l,n)}t=t.sibling}}var Wr=8192;function Un(e){if(e.subtreeFlags&Wr)for(e=e.child;e!==null;)um(e),e=e.sibling}function um(e){switch(e.tag){case 26:Un(e),e.flags&Wr&&e.memoizedState!==null&&Yy(Na,e.memoizedState,e.memoizedProps);break;case 5:Un(e);break;case 3:case 4:var t=Na;Na=Ro(e.stateNode.containerInfo),Un(e),Na=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Wr,Wr=16777216,Un(e),Wr=t):Un(e));break;default:Un(e)}}function cm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Jr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];xt=n,fm(n,e)}cm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sm(e),e=e.sibling}function sm(e){switch(e.tag){case 0:case 11:case 15:Jr(e),e.flags&2048&&Sl(9,e,e.return);break;case 3:Jr(e);break;case 12:Jr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Eo(e)):Jr(e);break;default:Jr(e)}}function Eo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];xt=n,fm(n,e)}cm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sl(8,t,t.return),Eo(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Eo(t));break;default:Eo(t)}e=e.sibling}}function fm(e,t){for(;xt!==null;){var l=xt;switch(l.tag){case 0:case 11:case 15:Sl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Rr(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,xt=n;else e:for(l=e;xt!==null;){n=xt;var r=n.sibling,o=n.return;if(am(n),n===l){xt=null;break e}if(r!==null){r.return=o,xt=r;break e}xt=o}}}var ny={getCacheForType:function(e){var t=Ot(pt),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},ry=typeof WeakMap=="function"?WeakMap:Map,Re=0,Ve=null,$e=null,Te=0,ze=0,Kt=null,Nl=!1,kn=!1,Gc=!1,nl=0,nt=0,_l=0,ln=0,Vc=0,ma=0,qn=0,Ir=null,Yt=null,Pc=!1,Xc=0,$o=1/0,No=null,wl=null,wt=0,Tl=null,Yn=null,Gn=0,Qc=0,Zc=null,dm=null,ei=0,Fc=null;function Wt(){if((Re&2)!==0&&Te!==0)return Te&-Te;if(L.T!==null){var e=An;return e!==0?e:as()}return ql()}function hm(){ma===0&&(ma=(Te&536870912)===0||Ce?Pt():536870912);var e=ha.current;return e!==null&&(e.flags|=32),ma}function Jt(e,t,l){(e===Ve&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Vn(e,0),Ml(e,Te,ma,!1)),Ca(e,l),((Re&2)===0||e!==Ve)&&(e===Ve&&((Re&2)===0&&(ln|=l),nt===4&&Ml(e,Te,ma,!1)),Ha(e))}function mm(e,t,l){if((Re&6)!==0)throw Error(c(327));var n=!l&&(t&124)===0&&(t&e.expiredLanes)===0||we(e,t),r=n?uy(e,t):Jc(e,t,!0),o=n;do{if(r===0){kn&&!n&&Ml(e,t,0,!1);break}else{if(l=e.current.alternate,o&&!iy(l)){r=Jc(e,t,!1),o=!1;continue}if(r===2){if(o=t,e.errorRecoveryDisabledLanes&o)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var p=e;r=Ir;var N=p.current.memoizedState.isDehydrated;if(N&&(Vn(p,f).flags|=256),f=Jc(p,f,!1),f!==2){if(Gc&&!N){p.errorRecoveryDisabledLanes|=o,ln|=o,r=4;break e}o=Yt,Yt=r,o!==null&&(Yt===null?Yt=o:Yt.push.apply(Yt,o))}r=f}if(o=!1,r!==2)continue}}if(r===1){Vn(e,0),Ml(e,t,0,!0);break}e:{switch(n=e,o=r,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ml(n,t,ma,!Nl);break e;case 2:Yt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=Xc+300-Xe(),10<r)){if(Ml(n,t,ma,!Nl),Gt(n,0,!0)!==0)break e;n.timeoutHandle=Gm(pm.bind(null,n,l,Yt,No,Pc,t,ma,ln,qn,Nl,o,2,-0,0),r);break e}pm(n,l,Yt,No,Pc,t,ma,ln,qn,Nl,o,0,-0,0)}}break}while(!0);Ha(e)}function pm(e,t,l,n,r,o,f,p,N,O,k,G,z,j){if(e.timeoutHandle=-1,G=t.subtreeFlags,(G&8192||(G&16785408)===16785408)&&(oi={stylesheets:null,count:0,unsuspend:qy},um(t),G=Gy(),G!==null)){e.cancelPendingCommit=G(Em.bind(null,e,t,o,l,n,r,f,p,N,k,1,z,j)),Ml(e,o,f,!O);return}Em(e,t,o,l,n,r,f,p,N)}function iy(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var r=l[n],o=r.getSnapshot;r=r.value;try{if(!Xt(o(),r))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ml(e,t,l,n){t&=~Vc,t&=~ln,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var r=t;0<r;){var o=31-ot(r),f=1<<o;n[o]=-1,r&=~f}l!==0&&na(e,l,t)}function _o(){return(Re&6)===0?(ti(0),!1):!0}function Kc(){if($e!==null){if(ze===0)var e=$e.return;else e=$e,Ka=Wl=null,hc(e),Hn=null,Pr=0,e=$e;for(;e!==null;)Zh(e.alternate,e),e=e.return;$e=null}}function Vn(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Ny(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Kc(),Ve=e,$e=l=Qa(e.current,null),Te=t,ze=0,Kt=null,Nl=!1,kn=we(e,t),Gc=!1,qn=ma=Vc=ln=_l=nt=0,Yt=Ir=null,Pc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-ot(n),o=1<<r;t|=e[r],n&=~o}return nl=t,Xi(),l}function gm(e,t){Se=null,L.H=fo,t===Hr||t===to?(t=Bd(),ze=3):t===Ad?(t=Bd(),ze=4):ze=t===Rh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Kt=t,$e===null&&(nt=1,vo(e,ca(t,e.current)))}function vm(){var e=L.H;return L.H=fo,e===null?fo:e}function ym(){var e=L.A;return L.A=ny,e}function Wc(){nt=4,Nl||(Te&4194048)!==Te&&ha.current!==null||(kn=!0),(_l&134217727)===0&&(ln&134217727)===0||Ve===null||Ml(Ve,Te,ma,!1)}function Jc(e,t,l){var n=Re;Re|=2;var r=vm(),o=ym();(Ve!==e||Te!==t)&&(No=null,Vn(e,t)),t=!1;var f=nt;e:do try{if(ze!==0&&$e!==null){var p=$e,N=Kt;switch(ze){case 8:Kc(),f=6;break e;case 3:case 2:case 9:case 6:ha.current===null&&(t=!0);var O=ze;if(ze=0,Kt=null,Pn(e,p,N,O),l&&kn){f=0;break e}break;default:O=ze,ze=0,Kt=null,Pn(e,p,N,O)}}oy(),f=nt;break}catch(k){gm(e,k)}while(!0);return t&&e.shellSuspendCounter++,Ka=Wl=null,Re=n,L.H=r,L.A=o,$e===null&&(Ve=null,Te=0,Xi()),f}function oy(){for(;$e!==null;)bm($e)}function uy(e,t){var l=Re;Re|=2;var n=vm(),r=ym();Ve!==e||Te!==t?(No=null,$o=Xe()+500,Vn(e,t)):kn=we(e,t);e:do try{if(ze!==0&&$e!==null){t=$e;var o=Kt;t:switch(ze){case 1:ze=0,Kt=null,Pn(e,t,o,1);break;case 2:case 9:if(Od(o)){ze=0,Kt=null,xm(t);break}t=function(){ze!==2&&ze!==9||Ve!==e||(ze=7),Ha(e)},o.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:Od(o)?(ze=0,Kt=null,xm(t)):(ze=0,Kt=null,Pn(e,t,o,7));break;case 5:var f=null;switch($e.tag){case 26:f=$e.memoizedState;case 5:case 27:var p=$e;if(!f||tp(f)){ze=0,Kt=null;var N=p.sibling;if(N!==null)$e=N;else{var O=p.return;O!==null?($e=O,wo(O)):$e=null}break t}}ze=0,Kt=null,Pn(e,t,o,5);break;case 6:ze=0,Kt=null,Pn(e,t,o,6);break;case 8:Kc(),nt=6;break e;default:throw Error(c(462))}}cy();break}catch(k){gm(e,k)}while(!0);return Ka=Wl=null,L.H=n,L.A=r,Re=l,$e!==null?0:(Ve=null,Te=0,Xi(),nt)}function cy(){for(;$e!==null&&!qa();)bm($e)}function bm(e){var t=Xh(e.alternate,e,nl);e.memoizedProps=e.pendingProps,t===null?wo(e):$e=t}function xm(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=kh(l,t,t.pendingProps,t.type,void 0,Te);break;case 11:t=kh(l,t,t.pendingProps,t.type.render,t.ref,Te);break;case 5:hc(t);default:Zh(l,t),t=$e=Sd(t,nl),t=Xh(l,t,nl)}e.memoizedProps=e.pendingProps,t===null?wo(e):$e=t}function Pn(e,t,l,n){Ka=Wl=null,hc(t),Hn=null,Pr=0;var r=t.return;try{if(Jv(e,r,t,l,Te)){nt=1,vo(e,ca(l,e.current)),$e=null;return}}catch(o){if(r!==null)throw $e=r,o;nt=1,vo(e,ca(l,e.current)),$e=null;return}t.flags&32768?(Ce||n===1?e=!0:kn||(Te&536870912)!==0?e=!1:(Nl=e=!0,(n===2||n===9||n===3||n===6)&&(n=ha.current,n!==null&&n.tag===13&&(n.flags|=16384))),Sm(t,e)):wo(t)}function wo(e){var t=e;do{if((t.flags&32768)!==0){Sm(t,Nl);return}e=t.return;var l=ey(t.alternate,t,nl);if(l!==null){$e=l;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);nt===0&&(nt=5)}function Sm(e,t){do{var l=ty(e.alternate,e);if(l!==null){l.flags&=32767,$e=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){$e=e;return}$e=e=l}while(e!==null);nt=6,$e=null}function Em(e,t,l,n,r,o,f,p,N){e.cancelPendingCommit=null;do To();while(wt!==0);if((Re&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Yu,pr(e,l,o,f,p,N),e===Ve&&($e=Ve=null,Te=0),Yn=t,Tl=e,Gn=l,Qc=o,Zc=r,dm=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hy(ta,function(){return Tm(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null,r=F.p,F.p=2,f=Re,Re|=4;try{ay(e,t,l)}finally{Re=f,F.p=r,L.T=n}}wt=1,$m(),Nm(),_m()}}function $m(){if(wt===1){wt=0;var e=Tl,t=Yn,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=L.T,L.T=null;var n=F.p;F.p=2;var r=Re;Re|=4;try{rm(t,e);var o=ss,f=fd(e.containerInfo),p=o.focusedElem,N=o.selectionRange;if(f!==p&&p&&p.ownerDocument&&sd(p.ownerDocument.documentElement,p)){if(N!==null&&ju(p)){var O=N.start,k=N.end;if(k===void 0&&(k=O),"selectionStart"in p)p.selectionStart=O,p.selectionEnd=Math.min(k,p.value.length);else{var G=p.ownerDocument||document,z=G&&G.defaultView||window;if(z.getSelection){var j=z.getSelection(),he=p.textContent.length,se=Math.min(N.start,he),ke=N.end===void 0?se:Math.min(N.end,he);!j.extend&&se>ke&&(f=ke,ke=se,se=f);var M=cd(p,se),w=cd(p,ke);if(M&&w&&(j.rangeCount!==1||j.anchorNode!==M.node||j.anchorOffset!==M.offset||j.focusNode!==w.node||j.focusOffset!==w.offset)){var A=G.createRange();A.setStart(M.node,M.offset),j.removeAllRanges(),se>ke?(j.addRange(A),j.extend(w.node,w.offset)):(A.setEnd(w.node,w.offset),j.addRange(A))}}}}for(G=[],j=p;j=j.parentNode;)j.nodeType===1&&G.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<G.length;p++){var q=G[p];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Uo=!!cs,ss=cs=null}finally{Re=r,F.p=n,L.T=l}}e.current=t,wt=2}}function Nm(){if(wt===2){wt=0;var e=Tl,t=Yn,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=L.T,L.T=null;var n=F.p;F.p=2;var r=Re;Re|=4;try{tm(e,t.alternate,t)}finally{Re=r,F.p=n,L.T=l}}wt=3}}function _m(){if(wt===4||wt===3){wt=0,$t();var e=Tl,t=Yn,l=Gn,n=dm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?wt=5:(wt=0,Yn=Tl=null,wm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(wl=null),Aa(l),t=t.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Ma,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=L.T,r=F.p,F.p=2,L.T=null;try{for(var o=e.onRecoverableError,f=0;f<n.length;f++){var p=n[f];o(p.value,{componentStack:p.stack})}}finally{L.T=t,F.p=r}}(Gn&3)!==0&&To(),Ha(e),r=e.pendingLanes,(l&4194090)!==0&&(r&42)!==0?e===Fc?ei++:(ei=0,Fc=e):ei=0,ti(0)}}function wm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Rr(t)))}function To(e){return $m(),Nm(),_m(),Tm()}function Tm(){if(wt!==5)return!1;var e=Tl,t=Qc;Qc=0;var l=Aa(Gn),n=L.T,r=F.p;try{F.p=32>l?32:l,L.T=null,l=Zc,Zc=null;var o=Tl,f=Gn;if(wt=0,Yn=Tl=null,Gn=0,(Re&6)!==0)throw Error(c(331));var p=Re;if(Re|=4,sm(o.current),om(o,o.current,f,l),Re=p,ti(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Ma,o)}catch{}return!0}finally{F.p=r,L.T=n,wm(e,t)}}function Mm(e,t,l){t=ca(l,t),t=Tc(e.stateNode,t,2),e=vl(e,t,2),e!==null&&(Ca(e,2),Ha(e))}function qe(e,t,l){if(e.tag===3)Mm(e,e,l);else for(;t!==null;){if(t.tag===3){Mm(t,e,l);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(wl===null||!wl.has(n))){e=ca(l,e),l=Dh(2),n=vl(t,l,2),n!==null&&(Bh(l,n,t,e),Ca(n,2),Ha(n));break}}t=t.return}}function Ic(e,t,l){var n=e.pingCache;if(n===null){n=e.pingCache=new ry;var r=new Set;n.set(t,r)}else r=n.get(t),r===void 0&&(r=new Set,n.set(t,r));r.has(l)||(Gc=!0,r.add(l),e=sy.bind(null,e,t,l),t.then(e,e))}function sy(e,t,l){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ve===e&&(Te&l)===l&&(nt===4||nt===3&&(Te&62914560)===Te&&300>Xe()-Xc?(Re&2)===0&&Vn(e,0):Vc|=l,qn===Te&&(qn=0)),Ha(e)}function Cm(e,t){t===0&&(t=aa()),e=wn(e,t),e!==null&&(Ca(e,t),Ha(e))}function fy(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Cm(e,l)}function dy(e,t){var l=0;switch(e.tag){case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(l=r.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Cm(e,l)}function hy(e,t){return Rt(e,t)}var Mo=null,Xn=null,es=!1,Co=!1,ts=!1,nn=0;function Ha(e){e!==Xn&&e.next===null&&(Xn===null?Mo=Xn=e:Xn=Xn.next=e),Co=!0,es||(es=!0,py())}function ti(e,t){if(!ts&&Co){ts=!0;do for(var l=!1,n=Mo;n!==null;){if(e!==0){var r=n.pendingLanes;if(r===0)var o=0;else{var f=n.suspendedLanes,p=n.pingedLanes;o=(1<<31-ot(42|e)+1)-1,o&=r&~(f&~p),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(l=!0,Bm(n,o))}else o=Te,o=Gt(n,n===Ve?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||we(n,o)||(l=!0,Bm(n,o));n=n.next}while(l);ts=!1}}function my(){Am()}function Am(){Co=es=!1;var e=0;nn!==0&&($y()&&(e=nn),nn=0);for(var t=Xe(),l=null,n=Mo;n!==null;){var r=n.next,o=Om(n,t);o===0?(n.next=null,l===null?Mo=r:l.next=r,r===null&&(Xn=l)):(l=n,(e!==0||(o&3)!==0)&&(Co=!0)),n=r}ti(e)}function Om(e,t){for(var l=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var f=31-ot(o),p=1<<f,N=r[f];N===-1?((p&l)===0||(p&n)!==0)&&(r[f]=Vt(p,t)):N<=t&&(e.expiredLanes|=p),o&=~p}if(t=Ve,l=Te,l=Gt(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ta(n),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||we(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(n!==null&&Ta(n),Aa(l)){case 2:case 8:l=ht;break;case 32:l=ta;break;case 268435456:l=hn;break;default:l=ta}return n=Dm.bind(null,e),l=Rt(l,n),e.callbackPriority=t,e.callbackNode=l,t}return n!==null&&n!==null&&Ta(n),e.callbackPriority=2,e.callbackNode=null,2}function Dm(e,t){if(wt!==0&&wt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(To()&&e.callbackNode!==l)return null;var n=Te;return n=Gt(e,e===Ve?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(mm(e,n,t),Om(e,Xe()),e.callbackNode!=null&&e.callbackNode===l?Dm.bind(null,e):null)}function Bm(e,t){if(To())return null;mm(e,t,!0)}function py(){_y(function(){(Re&6)!==0?Rt(zt,my):Am()})}function as(){return nn===0&&(nn=Pt()),nn}function Rm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ui(""+e)}function zm(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function gy(e,t,l,n,r){if(t==="submit"&&l&&l.stateNode===r){var o=Rm((r[Ct]||null).action),f=n.submitter;f&&(t=(t=f[Ct]||null)?Rm(t.formAction):f.getAttribute("formAction"),t!==null&&(o=t,f=null));var p=new Gi("action","action",null,n,r);e.push({event:p,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(nn!==0){var N=f?zm(r,f):new FormData(r);Ec(l,{pending:!0,data:N,method:r.method,action:o},null,N)}}else typeof o=="function"&&(p.preventDefault(),N=f?zm(r,f):new FormData(r),Ec(l,{pending:!0,data:N,method:r.method,action:o},o,N))},currentTarget:r}]})}}for(var ls=0;ls<qu.length;ls++){var ns=qu[ls],vy=ns.toLowerCase(),yy=ns[0].toUpperCase()+ns.slice(1);$a(vy,"on"+yy)}$a(md,"onAnimationEnd"),$a(pd,"onAnimationIteration"),$a(gd,"onAnimationStart"),$a("dblclick","onDoubleClick"),$a("focusin","onFocus"),$a("focusout","onBlur"),$a(zv,"onTransitionRun"),$a(Hv,"onTransitionStart"),$a(jv,"onTransitionCancel"),$a(vd,"onTransitionEnd"),oa("onMouseEnter",["mouseout","mouseover"]),oa("onMouseLeave",["mouseout","mouseover"]),oa("onPointerEnter",["pointerout","pointerover"]),oa("onPointerLeave",["pointerout","pointerover"]),ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),by=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ai));function Hm(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],r=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var f=n.length-1;0<=f;f--){var p=n[f],N=p.instance,O=p.currentTarget;if(p=p.listener,N!==o&&r.isPropagationStopped())break e;o=p,r.currentTarget=O;try{o(r)}catch(k){go(k)}r.currentTarget=null,o=N}else for(f=0;f<n.length;f++){if(p=n[f],N=p.instance,O=p.currentTarget,p=p.listener,N!==o&&r.isPropagationStopped())break e;o=p,r.currentTarget=O;try{o(r)}catch(k){go(k)}r.currentTarget=null,o=N}}}}function Ne(e,t){var l=t[pn];l===void 0&&(l=t[pn]=new Set);var n=e+"__bubble";l.has(n)||(jm(t,e,2,!1),l.add(n))}function rs(e,t,l){var n=0;t&&(n|=4),jm(l,e,n,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function is(e){if(!e[Ao]){e[Ao]=!0,Oi.forEach(function(l){l!=="selectionchange"&&(by.has(l)||rs(l,!1,e),rs(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,rs("selectionchange",!1,t))}}function jm(e,t,l,n){switch(op(t)){case 2:var r=Xy;break;case 8:r=Qy;break;default:r=xs}l=r.bind(null,t,l,e),r=void 0,!Mu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(t,l,{capture:!0,passive:r}):e.addEventListener(t,l,!0):r!==void 0?e.addEventListener(t,l,{passive:r}):e.addEventListener(t,l,!1)}function os(e,t,l,n,r){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var p=n.stateNode.containerInfo;if(p===r)break;if(f===4)for(f=n.return;f!==null;){var N=f.tag;if((N===3||N===4)&&f.stateNode.containerInfo===r)return;f=f.return}for(;p!==null;){if(f=Ga(p),f===null)return;if(N=f.tag,N===5||N===6||N===26||N===27){n=o=f;continue e}p=p.parentNode}}n=n.return}Vf(function(){var O=o,k=wu(l),G=[];e:{var z=yd.get(e);if(z!==void 0){var j=Gi,he=e;switch(e){case"keypress":if(qi(l)===0)break e;case"keydown":case"keyup":j=hv;break;case"focusin":he="focus",j=Du;break;case"focusout":he="blur",j=Du;break;case"beforeblur":case"afterblur":j=Du;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=gv;break;case md:case pd:case gd:j=nv;break;case vd:j=yv;break;case"scroll":case"scrollend":j=Ig;break;case"wheel":j=xv;break;case"copy":case"cut":case"paste":j=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Ff;break;case"toggle":case"beforetoggle":j=Ev}var se=(t&4)!==0,ke=!se&&(e==="scroll"||e==="scrollend"),M=se?z!==null?z+"Capture":null:z;se=[];for(var w=O,A;w!==null;){var q=w;if(A=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||A===null||M===null||(q=Sr(w,M),q!=null&&se.push(li(w,q,A))),ke)break;w=w.return}0<se.length&&(z=new j(z,he,null,l,k),G.push({event:z,listeners:se}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&l!==_u&&(he=l.relatedTarget||l.fromElement)&&(Ga(he)||he[ya]))break e;if((j||z)&&(z=k.window===k?k:(z=k.ownerDocument)?z.defaultView||z.parentWindow:window,j?(he=l.relatedTarget||l.toElement,j=O,he=he?Ga(he):null,he!==null&&(ke=d(he),se=he.tag,he!==ke||se!==5&&se!==27&&se!==6)&&(he=null)):(j=null,he=O),j!==he)){if(se=Qf,q="onMouseLeave",M="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(se=Ff,q="onPointerLeave",M="onPointerEnter",w="pointer"),ke=j==null?z:Va(j),A=he==null?z:Va(he),z=new se(q,w+"leave",j,l,k),z.target=ke,z.relatedTarget=A,q=null,Ga(k)===O&&(se=new se(M,w+"enter",he,l,k),se.target=A,se.relatedTarget=ke,q=se),ke=q,j&&he)t:{for(se=j,M=he,w=0,A=se;A;A=Qn(A))w++;for(A=0,q=M;q;q=Qn(q))A++;for(;0<w-A;)se=Qn(se),w--;for(;0<A-w;)M=Qn(M),A--;for(;w--;){if(se===M||M!==null&&se===M.alternate)break t;se=Qn(se),M=Qn(M)}se=null}else se=null;j!==null&&Lm(G,z,j,se,!1),he!==null&&ke!==null&&Lm(G,ke,he,se,!0)}}e:{if(z=O?Va(O):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var le=ld;else if(td(z))if(nd)le=Dv;else{le=Av;var Ee=Cv}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?O&&Nu(O.elementType)&&(le=ld):le=Ov;if(le&&(le=le(e,O))){ad(G,le,l,k);break e}Ee&&Ee(e,z,O),e==="focusout"&&O&&z.type==="number"&&O.memoizedProps.value!=null&&ct(z,"number",z.value)}switch(Ee=O?Va(O):window,e){case"focusin":(td(Ee)||Ee.contentEditable==="true")&&($n=Ee,Lu=O,Cr=null);break;case"focusout":Cr=Lu=$n=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,dd(G,l,k);break;case"selectionchange":if(Rv)break;case"keydown":case"keyup":dd(G,l,k)}var oe;if(Ru)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else En?If(e,l)&&(de="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(de="onCompositionStart");de&&(Kf&&l.locale!=="ko"&&(En||de!=="onCompositionStart"?de==="onCompositionEnd"&&En&&(oe=Pf()):(hl=k,Cu="value"in hl?hl.value:hl.textContent,En=!0)),Ee=Oo(O,de),0<Ee.length&&(de=new Zf(de,e,null,l,k),G.push({event:de,listeners:Ee}),oe?de.data=oe:(oe=ed(l),oe!==null&&(de.data=oe)))),(oe=Nv?_v(e,l):wv(e,l))&&(de=Oo(O,"onBeforeInput"),0<de.length&&(Ee=new Zf("onBeforeInput","beforeinput",null,l,k),G.push({event:Ee,listeners:de}),Ee.data=oe)),gy(G,e,O,l,k)}Hm(G,t)})}function li(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Oo(e,t){for(var l=t+"Capture",n=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=Sr(e,l),r!=null&&n.unshift(li(e,r,o)),r=Sr(e,t),r!=null&&n.push(li(e,r,o))),e.tag===3)return n;e=e.return}return[]}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Lm(e,t,l,n,r){for(var o=t._reactName,f=[];l!==null&&l!==n;){var p=l,N=p.alternate,O=p.stateNode;if(p=p.tag,N!==null&&N===n)break;p!==5&&p!==26&&p!==27||O===null||(N=O,r?(O=Sr(l,o),O!=null&&f.unshift(li(l,O,N))):r||(O=Sr(l,o),O!=null&&f.push(li(l,O,N)))),l=l.return}f.length!==0&&e.push({event:t,listeners:f})}var xy=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function Um(e){return(typeof e=="string"?e:""+e).replace(xy,`
`).replace(Sy,"")}function km(e,t){return t=Um(t),Um(e)===t}function Do(){}function Ue(e,t,l,n,r,o){switch(l){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Pa(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Pa(e,""+n);break;case"className":gn(e,"class",n);break;case"tabIndex":gn(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":gn(e,l,n);break;case"style":Yf(e,n,o);break;case"data":if(t!=="object"){gn(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Ui(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(l==="formAction"?(t!=="input"&&Ue(e,t,"name",r.name,r,null),Ue(e,t,"formEncType",r.formEncType,r,null),Ue(e,t,"formMethod",r.formMethod,r,null),Ue(e,t,"formTarget",r.formTarget,r,null)):(Ue(e,t,"encType",r.encType,r,null),Ue(e,t,"method",r.method,r,null),Ue(e,t,"target",r.target,r,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Ui(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=Do);break;case"onScroll":n!=null&&Ne("scroll",e);break;case"onScrollEnd":n!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(l=n.__html,l!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=Ui(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),fl(e,"popover",n);break;case"xlinkActuate":xa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":xa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":xa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":xa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":xa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":xa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":xa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":xa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":xa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":fl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Wg.get(l)||l,fl(e,l,n))}}function us(e,t,l,n,r,o){switch(l){case"style":Yf(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(l=n.__html,l!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"children":typeof n=="string"?Pa(e,n):(typeof n=="number"||typeof n=="bigint")&&Pa(e,""+n);break;case"onScroll":n!=null&&Ne("scroll",e);break;case"onScrollEnd":n!=null&&Ne("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Do);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Di.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(r=l.endsWith("Capture"),t=l.slice(2,r?l.length-7:void 0),o=e[Ct]||null,o=o!=null?o[l]:null,typeof o=="function"&&e.removeEventListener(t,o,r),typeof n=="function")){typeof o!="function"&&o!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,n,r);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):fl(e,l,n)}}}function Tt(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var n=!1,r=!1,o;for(o in l)if(l.hasOwnProperty(o)){var f=l[o];if(f!=null)switch(o){case"src":n=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ue(e,t,o,f,l,null)}}r&&Ue(e,t,"srcSet",l.srcSet,l,null),n&&Ue(e,t,"src",l.src,l,null);return;case"input":Ne("invalid",e);var p=o=f=r=null,N=null,O=null;for(n in l)if(l.hasOwnProperty(n)){var k=l[n];if(k!=null)switch(n){case"name":r=k;break;case"type":f=k;break;case"checked":N=k;break;case"defaultChecked":O=k;break;case"value":o=k;break;case"defaultValue":p=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,t));break;default:Ue(e,t,n,k,l,null)}}ye(e,o,p,N,O,f,r,!1),yn(e);return;case"select":Ne("invalid",e),n=f=o=null;for(r in l)if(l.hasOwnProperty(r)&&(p=l[r],p!=null))switch(r){case"value":o=p;break;case"defaultValue":f=p;break;case"multiple":n=p;default:Ue(e,t,r,p,l,null)}t=o,l=f,e.multiple=!!n,t!=null?mt(e,!!n,t,!1):l!=null&&mt(e,!!n,l,!0);return;case"textarea":Ne("invalid",e),o=r=n=null;for(f in l)if(l.hasOwnProperty(f)&&(p=l[f],p!=null))switch(f){case"value":n=p;break;case"defaultValue":r=p;break;case"children":o=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:Ue(e,t,f,p,l,null)}Ea(e,n,r,o),yn(e);return;case"option":for(N in l)if(l.hasOwnProperty(N)&&(n=l[N],n!=null))switch(N){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ue(e,t,N,n,l,null)}return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(n=0;n<ai.length;n++)Ne(ai[n],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in l)if(l.hasOwnProperty(O)&&(n=l[O],n!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ue(e,t,O,n,l,null)}return;default:if(Nu(t)){for(k in l)l.hasOwnProperty(k)&&(n=l[k],n!==void 0&&us(e,t,k,n,l,void 0));return}}for(p in l)l.hasOwnProperty(p)&&(n=l[p],n!=null&&Ue(e,t,p,n,l,null))}function Ey(e,t,l,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,f=null,p=null,N=null,O=null,k=null;for(j in l){var G=l[j];if(l.hasOwnProperty(j)&&G!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":N=G;default:n.hasOwnProperty(j)||Ue(e,t,j,null,n,G)}}for(var z in n){var j=n[z];if(G=l[z],n.hasOwnProperty(z)&&(j!=null||G!=null))switch(z){case"type":o=j;break;case"name":r=j;break;case"checked":O=j;break;case"defaultChecked":k=j;break;case"value":f=j;break;case"defaultValue":p=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(c(137,t));break;default:j!==G&&Ue(e,t,z,j,n,G)}}ce(e,f,p,N,O,k,o,r);return;case"select":j=f=p=z=null;for(o in l)if(N=l[o],l.hasOwnProperty(o)&&N!=null)switch(o){case"value":break;case"multiple":j=N;default:n.hasOwnProperty(o)||Ue(e,t,o,null,n,N)}for(r in n)if(o=n[r],N=l[r],n.hasOwnProperty(r)&&(o!=null||N!=null))switch(r){case"value":z=o;break;case"defaultValue":p=o;break;case"multiple":f=o;default:o!==N&&Ue(e,t,r,o,n,N)}t=p,l=f,n=j,z!=null?mt(e,!!l,z,!1):!!n!=!!l&&(t!=null?mt(e,!!l,t,!0):mt(e,!!l,l?[]:"",!1));return;case"textarea":j=z=null;for(p in l)if(r=l[p],l.hasOwnProperty(p)&&r!=null&&!n.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Ue(e,t,p,null,n,r)}for(f in n)if(r=n[f],o=l[f],n.hasOwnProperty(f)&&(r!=null||o!=null))switch(f){case"value":z=r;break;case"defaultValue":j=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==o&&Ue(e,t,f,r,n,o)}ua(e,z,j);return;case"option":for(var he in l)if(z=l[he],l.hasOwnProperty(he)&&z!=null&&!n.hasOwnProperty(he))switch(he){case"selected":e.selected=!1;break;default:Ue(e,t,he,null,n,z)}for(N in n)if(z=n[N],j=l[N],n.hasOwnProperty(N)&&z!==j&&(z!=null||j!=null))switch(N){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Ue(e,t,N,z,n,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in l)z=l[se],l.hasOwnProperty(se)&&z!=null&&!n.hasOwnProperty(se)&&Ue(e,t,se,null,n,z);for(O in n)if(z=n[O],j=l[O],n.hasOwnProperty(O)&&z!==j&&(z!=null||j!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:Ue(e,t,O,z,n,j)}return;default:if(Nu(t)){for(var ke in l)z=l[ke],l.hasOwnProperty(ke)&&z!==void 0&&!n.hasOwnProperty(ke)&&us(e,t,ke,void 0,n,z);for(k in n)z=n[k],j=l[k],!n.hasOwnProperty(k)||z===j||z===void 0&&j===void 0||us(e,t,k,z,n,j);return}}for(var M in l)z=l[M],l.hasOwnProperty(M)&&z!=null&&!n.hasOwnProperty(M)&&Ue(e,t,M,null,n,z);for(G in n)z=n[G],j=l[G],!n.hasOwnProperty(G)||z===j||z==null&&j==null||Ue(e,t,G,z,n,j)}var cs=null,ss=null;function Bo(e){return e.nodeType===9?e:e.ownerDocument}function qm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ym(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ds=null;function $y(){var e=window.event;return e&&e.type==="popstate"?e===ds?!1:(ds=e,!0):(ds=null,!1)}var Gm=typeof setTimeout=="function"?setTimeout:void 0,Ny=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(e){return Vm.resolve(null).then(e).catch(wy)}:Gm;function wy(e){setTimeout(function(){throw e})}function Cl(e){return e==="head"}function Pm(e,t){var l=t,n=0,r=0;do{var o=l.nextSibling;if(e.removeChild(l),o&&o.nodeType===8)if(l=o.data,l==="/$"){if(0<n&&8>n){l=n;var f=e.ownerDocument;if(l&1&&ni(f.documentElement),l&2&&ni(f.body),l&4)for(l=f.head,ni(l),f=l.firstChild;f;){var p=f.nextSibling,N=f.nodeName;f[At]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&f.rel.toLowerCase()==="stylesheet"||l.removeChild(f),f=p}}if(r===0){e.removeChild(o),di(t);return}r--}else l==="$"||l==="$?"||l==="$!"?r++:n=l.charCodeAt(0)-48;else n=0;l=o}while(l);di(t)}function hs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":hs(l),vr(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Ty(e,t,l,n){for(;e.nodeType===1;){var r=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[At])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=_a(e.nextSibling),e===null)break}return null}function My(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=_a(e.nextSibling),e===null))return null;return e}function ms(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Cy(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var n=function(){t(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function _a(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ps=null;function Xm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function Qm(e,t,l){switch(t=Bo(l),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ni(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vr(e)}var pa=new Map,Zm=new Set;function Ro(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rl=F.d;F.d={f:Ay,r:Oy,D:Dy,C:By,L:Ry,m:zy,X:jy,S:Hy,M:Ly};function Ay(){var e=rl.f(),t=_o();return e||t}function Oy(e){var t=ia(e);t!==null&&t.tag===5&&t.type==="form"?mh(t):rl.r(e)}var Zn=typeof document>"u"?null:document;function Fm(e,t,l){var n=Zn;if(n&&typeof t=="string"&&t){var r=K(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof l=="string"&&(r+='[crossorigin="'+l+'"]'),Zm.has(r)||(Zm.add(r),e={rel:e,crossOrigin:l,href:t},n.querySelector(r)===null&&(t=n.createElement("link"),Tt(t,"link",e),ut(t),n.head.appendChild(t)))}}function Dy(e){rl.D(e),Fm("dns-prefetch",e,null)}function By(e,t){rl.C(e,t),Fm("preconnect",e,t)}function Ry(e,t,l){rl.L(e,t,l);var n=Zn;if(n&&e&&t){var r='link[rel="preload"][as="'+K(t)+'"]';t==="image"&&l&&l.imageSrcSet?(r+='[imagesrcset="'+K(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(r+='[imagesizes="'+K(l.imageSizes)+'"]')):r+='[href="'+K(e)+'"]';var o=r;switch(t){case"style":o=Fn(e);break;case"script":o=Kn(e)}pa.has(o)||(e=y({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),pa.set(o,e),n.querySelector(r)!==null||t==="style"&&n.querySelector(ri(o))||t==="script"&&n.querySelector(ii(o))||(t=n.createElement("link"),Tt(t,"link",e),ut(t),n.head.appendChild(t)))}}function zy(e,t){rl.m(e,t);var l=Zn;if(l&&e){var n=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+K(n)+'"][href="'+K(e)+'"]',o=r;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Kn(e)}if(!pa.has(o)&&(e=y({rel:"modulepreload",href:e},t),pa.set(o,e),l.querySelector(r)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ii(o)))return}n=l.createElement("link"),Tt(n,"link",e),ut(n),l.head.appendChild(n)}}}function Hy(e,t,l){rl.S(e,t,l);var n=Zn;if(n&&e){var r=sl(n).hoistableStyles,o=Fn(e);t=t||"default";var f=r.get(o);if(!f){var p={loading:0,preload:null};if(f=n.querySelector(ri(o)))p.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},l),(l=pa.get(o))&&gs(e,l);var N=f=n.createElement("link");ut(N),Tt(N,"link",e),N._p=new Promise(function(O,k){N.onload=O,N.onerror=k}),N.addEventListener("load",function(){p.loading|=1}),N.addEventListener("error",function(){p.loading|=2}),p.loading|=4,zo(f,t,n)}f={type:"stylesheet",instance:f,count:1,state:p},r.set(o,f)}}}function jy(e,t){rl.X(e,t);var l=Zn;if(l&&e){var n=sl(l).hoistableScripts,r=Kn(e),o=n.get(r);o||(o=l.querySelector(ii(r)),o||(e=y({src:e,async:!0},t),(t=pa.get(r))&&vs(e,t),o=l.createElement("script"),ut(o),Tt(o,"link",e),l.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(r,o))}}function Ly(e,t){rl.M(e,t);var l=Zn;if(l&&e){var n=sl(l).hoistableScripts,r=Kn(e),o=n.get(r);o||(o=l.querySelector(ii(r)),o||(e=y({src:e,async:!0,type:"module"},t),(t=pa.get(r))&&vs(e,t),o=l.createElement("script"),ut(o),Tt(o,"link",e),l.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(r,o))}}function Km(e,t,l,n){var r=(r=re.current)?Ro(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Fn(l.href),l=sl(r).hoistableStyles,n=l.get(t),n||(n={type:"style",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Fn(l.href);var o=sl(r).hoistableStyles,f=o.get(e);if(f||(r=r.ownerDocument||r,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,f),(o=r.querySelector(ri(e)))&&!o._p&&(f.instance=o,f.state.loading=5),pa.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},pa.set(e,l),o||Uy(r,e,l,f.state))),t&&n===null)throw Error(c(528,""));return f}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Kn(l),l=sl(r).hoistableScripts,n=l.get(t),n||(n={type:"script",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Fn(e){return'href="'+K(e)+'"'}function ri(e){return'link[rel="stylesheet"]['+e+"]"}function Wm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Uy(e,t,l,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Tt(t,"link",l),ut(t),e.head.appendChild(t))}function Kn(e){return'[src="'+K(e)+'"]'}function ii(e){return"script[async]"+e}function Jm(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+K(l.href)+'"]');if(n)return t.instance=n,ut(n),n;var r=y({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),ut(n),Tt(n,"style",r),zo(n,l.precedence,e),t.instance=n;case"stylesheet":r=Fn(l.href);var o=e.querySelector(ri(r));if(o)return t.state.loading|=4,t.instance=o,ut(o),o;n=Wm(l),(r=pa.get(r))&&gs(n,r),o=(e.ownerDocument||e).createElement("link"),ut(o);var f=o;return f._p=new Promise(function(p,N){f.onload=p,f.onerror=N}),Tt(o,"link",n),t.state.loading|=4,zo(o,l.precedence,e),t.instance=o;case"script":return o=Kn(l.src),(r=e.querySelector(ii(o)))?(t.instance=r,ut(r),r):(n=l,(r=pa.get(o))&&(n=y({},l),vs(n,r)),e=e.ownerDocument||e,r=e.createElement("script"),ut(r),Tt(r,"link",n),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,zo(n,l.precedence,e));return t.instance}function zo(e,t,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=n.length?n[n.length-1]:null,o=r,f=0;f<n.length;f++){var p=n[f];if(p.dataset.precedence===t)o=p;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function gs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ho=null;function Im(e,t,l){if(Ho===null){var n=new Map,r=Ho=new Map;r.set(l,n)}else r=Ho,n=r.get(l),n||(n=new Map,r.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),r=0;r<l.length;r++){var o=l[r];if(!(o[At]||o[et]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var f=o.getAttribute(t)||"";f=e+f;var p=n.get(f);p?p.push(o):n.set(f,[o])}}return n}function ep(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function ky(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function tp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var oi=null;function qy(){}function Yy(e,t,l){if(oi===null)throw Error(c(475));var n=oi;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Fn(l.href),o=e.querySelector(ri(r));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=jo.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=o,ut(o);return}o=e.ownerDocument||e,l=Wm(l),(r=pa.get(r))&&gs(l,r),o=o.createElement("link"),ut(o);var f=o;f._p=new Promise(function(p,N){f.onload=p,f.onerror=N}),Tt(o,"link",l),t.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=jo.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Gy(){if(oi===null)throw Error(c(475));var e=oi;return e.stylesheets&&e.count===0&&ys(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&ys(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function jo(){if(this.count--,this.count===0){if(this.stylesheets)ys(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Lo=null;function ys(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Lo=new Map,t.forEach(Vy,e),Lo=null,jo.call(e))}function Vy(e,t){if(!(t.state.loading&4)){var l=Lo.get(e);if(l)var n=l.get(null);else{l=new Map,Lo.set(e,l);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var f=r[o];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(l.set(f.dataset.precedence,f),n=f)}n&&l.set(null,n)}r=t.instance,f=r.getAttribute("data-precedence"),o=l.get(f)||n,o===n&&l.set(null,r),l.set(f,r),this.count++,n=jo.bind(this),r.addEventListener("load",n),r.addEventListener("error",n),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ui={$$typeof:U,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Py(e,t,l,n,r,o,f,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=la(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.hiddenUpdates=la(null),this.identifierPrefix=n,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function ap(e,t,l,n,r,o,f,p,N,O,k,G){return e=new Py(e,t,l,f,p,N,O,G),t=1,o===!0&&(t|=24),o=Qt(3,null,null,t),e.current=o,o.stateNode=e,t=Iu(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:l,cache:t},lc(o),e}function lp(e){return e?(e=Tn,e):Tn}function np(e,t,l,n,r,o){r=lp(r),n.context===null?n.context=r:n.pendingContext=r,n=gl(t),n.payload={element:l},o=o===void 0?null:o,o!==null&&(n.callback=o),l=vl(e,n,t),l!==null&&(Jt(l,e,t),Lr(l,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function bs(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ip(e){if(e.tag===13){var t=wn(e,67108864);t!==null&&Jt(t,e,67108864),bs(e,67108864)}}var Uo=!0;function Xy(e,t,l,n){var r=L.T;L.T=null;var o=F.p;try{F.p=2,xs(e,t,l,n)}finally{F.p=o,L.T=r}}function Qy(e,t,l,n){var r=L.T;L.T=null;var o=F.p;try{F.p=8,xs(e,t,l,n)}finally{F.p=o,L.T=r}}function xs(e,t,l,n){if(Uo){var r=Ss(n);if(r===null)os(e,t,n,ko,l),up(e,n);else if(Fy(r,e,t,l,n))n.stopPropagation();else if(up(e,n),t&4&&-1<Zy.indexOf(e)){for(;r!==null;){var o=ia(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var f=Be(o.pendingLanes);if(f!==0){var p=o;for(p.pendingLanes|=2,p.entangledLanes|=2;f;){var N=1<<31-ot(f);p.entanglements[1]|=N,f&=~N}Ha(o),(Re&6)===0&&($o=Xe()+500,ti(0))}}break;case 13:p=wn(o,2),p!==null&&Jt(p,o,2),_o(),bs(o,2)}if(o=Ss(n),o===null&&os(e,t,n,ko,l),o===r)break;r=o}r!==null&&n.stopPropagation()}else os(e,t,n,null,l)}}function Ss(e){return e=wu(e),Es(e)}var ko=null;function Es(e){if(ko=null,e=Ga(e),e!==null){var t=d(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=g(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ko=e,null}function op(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lt()){case zt:return 2;case ht:return 8;case ta:case Ul:return 32;case hn:return 268435456;default:return 32}default:return 32}}var $s=!1,Al=null,Ol=null,Dl=null,ci=new Map,si=new Map,Bl=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function up(e,t){switch(e){case"focusin":case"focusout":Al=null;break;case"dragenter":case"dragleave":Ol=null;break;case"mouseover":case"mouseout":Dl=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function fi(e,t,l,n,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:l,eventSystemFlags:n,nativeEvent:o,targetContainers:[r]},t!==null&&(t=ia(t),t!==null&&ip(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Fy(e,t,l,n,r){switch(t){case"focusin":return Al=fi(Al,e,t,l,n,r),!0;case"dragenter":return Ol=fi(Ol,e,t,l,n,r),!0;case"mouseover":return Dl=fi(Dl,e,t,l,n,r),!0;case"pointerover":var o=r.pointerId;return ci.set(o,fi(ci.get(o)||null,e,t,l,n,r)),!0;case"gotpointercapture":return o=r.pointerId,si.set(o,fi(si.get(o)||null,e,t,l,n,r)),!0}return!1}function cp(e){var t=Ga(e.target);if(t!==null){var l=d(t);if(l!==null){if(t=l.tag,t===13){if(t=g(l),t!==null){e.blockedOn=t,va(e.priority,function(){if(l.tag===13){var n=Wt();n=mn(n);var r=wn(l,n);r!==null&&Jt(r,l,n),bs(l,n)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Ss(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);_u=n,l.target.dispatchEvent(n),_u=null}else return t=ia(l),t!==null&&ip(t),e.blockedOn=l,!1;t.shift()}return!0}function sp(e,t,l){qo(e)&&l.delete(t)}function Ky(){$s=!1,Al!==null&&qo(Al)&&(Al=null),Ol!==null&&qo(Ol)&&(Ol=null),Dl!==null&&qo(Dl)&&(Dl=null),ci.forEach(sp),si.forEach(sp)}function Yo(e,t){e.blockedOn===t&&(e.blockedOn=null,$s||($s=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ky)))}var Go=null;function fp(e){Go!==e&&(Go=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Go===e&&(Go=null);for(var t=0;t<e.length;t+=3){var l=e[t],n=e[t+1],r=e[t+2];if(typeof n!="function"){if(Es(n||l)===null)continue;break}var o=ia(l);o!==null&&(e.splice(t,3),t-=3,Ec(o,{pending:!0,data:r,method:l.method,action:n},n,r))}}))}function di(e){function t(N){return Yo(N,e)}Al!==null&&Yo(Al,e),Ol!==null&&Yo(Ol,e),Dl!==null&&Yo(Dl,e),ci.forEach(t),si.forEach(t);for(var l=0;l<Bl.length;l++){var n=Bl[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Bl.length&&(l=Bl[0],l.blockedOn===null);)cp(l),l.blockedOn===null&&Bl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var r=l[n],o=l[n+1],f=r[Ct]||null;if(typeof o=="function")f||fp(l);else if(f){var p=null;if(o&&o.hasAttribute("formAction")){if(r=o,f=o[Ct]||null)p=f.formAction;else if(Es(r)!==null)continue}else p=f.action;typeof p=="function"?l[n+1]=p:(l.splice(n,3),n-=3),fp(l)}}}function Ns(e){this._internalRoot=e}Vo.prototype.render=Ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var l=t.current,n=Wt();np(l,n,e,t,null,null)},Vo.prototype.unmount=Ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),_o(),t[ya]=null}};function Vo(e){this._internalRoot=e}Vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ql();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Bl.length&&t!==0&&t<Bl[l].priority;l++);Bl.splice(l,0,e),l===0&&cp(e)}};var dp=i.version;if(dp!=="19.1.0")throw Error(c(527,dp,"19.1.0"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Wy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{Ma=Po.inject(Wy),yt=Po}catch{}}return mi.createRoot=function(e,t){if(!s(e))throw Error(c(299));var l=!1,n="",r=Mh,o=Ch,f=Ah,p=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=ap(e,1,!1,null,null,l,n,r,o,f,p,null),e[ya]=t.current,is(e),new Ns(t)},mi.hydrateRoot=function(e,t,l){if(!s(e))throw Error(c(299));var n=!1,r="",o=Mh,f=Ch,p=Ah,N=null,O=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(r=l.identifierPrefix),l.onUncaughtError!==void 0&&(o=l.onUncaughtError),l.onCaughtError!==void 0&&(f=l.onCaughtError),l.onRecoverableError!==void 0&&(p=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(N=l.unstable_transitionCallbacks),l.formState!==void 0&&(O=l.formState)),t=ap(e,1,!0,t,l??null,n,r,o,f,p,N,O),t.context=lp(null),l=t.current,n=Wt(),n=mn(n),r=gl(n),r.callback=null,vl(l,r,n),l=n,t.current.lanes=l,Ca(t,l),Ha(t),e[ya]=t.current,is(e),new Vo(t)},mi.version="19.1.0",mi}var Ep;function i1(){if(Ep)return Ts.exports;Ep=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Ts.exports=r1(),Ts.exports}var o1=i1();const u1=S0(o1);var pi={},$p;function c1(){if($p)return pi;$p=1,Object.defineProperty(pi,"__esModule",{value:!0}),pi.parse=g,pi.serialize=m;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,d=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function g(x,T){const S=new d,H=x.length;if(H<2)return S;const B=T?.decode||y;let C=0;do{const D=x.indexOf("=",C);if(D===-1)break;const U=x.indexOf(";",C),ee=U===-1?H:U;if(D>ee){C=x.lastIndexOf(";",D-1)+1;continue}const Z=b(x,C,D),W=v(x,D,Z),I=x.slice(Z,W);if(S[I]===void 0){let fe=b(x,D+1,ee),ne=v(x,ee,fe);const me=B(x.slice(fe,ne));S[I]=me}C=ee+1}while(C<H);return S}function b(x,T,S){do{const H=x.charCodeAt(T);if(H!==32&&H!==9)return T}while(++T<S);return S}function v(x,T,S){for(;T>S;){const H=x.charCodeAt(--T);if(H!==32&&H!==9)return T+1}return S}function m(x,T,S){const H=S?.encode||encodeURIComponent;if(!a.test(x))throw new TypeError(`argument name is invalid: ${x}`);const B=H(T);if(!i.test(B))throw new TypeError(`argument val is invalid: ${T}`);let C=x+"="+B;if(!S)return C;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);C+="; Max-Age="+S.maxAge}if(S.domain){if(!u.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);C+="; Domain="+S.domain}if(S.path){if(!c.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);C+="; Path="+S.path}if(S.expires){if(!$(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);C+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(C+="; HttpOnly"),S.secure&&(C+="; Secure"),S.partitioned&&(C+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":C+="; Priority=Low";break;case"medium":C+="; Priority=Medium";break;case"high":C+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":C+="; SameSite=Strict";break;case"lax":C+="; SameSite=Lax";break;case"none":C+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return C}function y(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function $(x){return s.call(x)==="[object Date]"}return pi}c1();var Np="popstate";function s1(a={}){function i(c,s){let{pathname:d,search:g,hash:b}=c.location;return Ls("",{pathname:d,search:g,hash:b},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function u(c,s){return typeof s=="string"?s:xi(s)}return d1(i,u,null,a)}function at(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function La(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function f1(){return Math.random().toString(36).substring(2,10)}function _p(a,i){return{usr:a.state,key:a.key,idx:i}}function Ls(a,i,u=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?sr(i):i,state:u,key:i&&i.key||c||f1()}}function xi({pathname:a="/",search:i="",hash:u=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function sr(a){let i={};if(a){let u=a.indexOf("#");u>=0&&(i.hash=a.substring(u),a=a.substring(0,u));let c=a.indexOf("?");c>=0&&(i.search=a.substring(c),a=a.substring(0,c)),a&&(i.pathname=a)}return i}function d1(a,i,u,c={}){let{window:s=document.defaultView,v5Compat:d=!1}=c,g=s.history,b="POP",v=null,m=y();m==null&&(m=0,g.replaceState({...g.state,idx:m},""));function y(){return(g.state||{idx:null}).idx}function $(){b="POP";let B=y(),C=B==null?null:B-m;m=B,v&&v({action:b,location:H.location,delta:C})}function x(B,C){b="PUSH";let D=Ls(H.location,B,C);m=y()+1;let U=_p(D,m),ee=H.createHref(D);try{g.pushState(U,"",ee)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;s.location.assign(ee)}d&&v&&v({action:b,location:H.location,delta:1})}function T(B,C){b="REPLACE";let D=Ls(H.location,B,C);m=y();let U=_p(D,m),ee=H.createHref(D);g.replaceState(U,"",ee),d&&v&&v({action:b,location:H.location,delta:0})}function S(B){return h1(B)}let H={get action(){return b},get location(){return a(s,g)},listen(B){if(v)throw new Error("A history only accepts one active listener");return s.addEventListener(Np,$),v=B,()=>{s.removeEventListener(Np,$),v=null}},createHref(B){return i(s,B)},createURL:S,encodeLocation(B){let C=S(B);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:x,replace:T,go(B){return g.go(B)}};return H}function h1(a,i=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),at(u,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:xi(a);return c=c.replace(/ $/,"%20"),!i&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function $0(a,i,u="/"){return m1(a,i,u,!1)}function m1(a,i,u,c){let s=typeof i=="string"?sr(i):i,d=cl(s.pathname||"/",u);if(d==null)return null;let g=N0(a);p1(g);let b=null;for(let v=0;b==null&&v<g.length;++v){let m=w1(d);b=N1(g[v],m,c)}return b}function N0(a,i=[],u=[],c=""){let s=(d,g,b)=>{let v={relativePath:b===void 0?d.path||"":b,caseSensitive:d.caseSensitive===!0,childrenIndex:g,route:d};v.relativePath.startsWith("/")&&(at(v.relativePath.startsWith(c),`Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(c.length));let m=ul([c,v.relativePath]),y=u.concat(v);d.children&&d.children.length>0&&(at(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),N0(d.children,i,y,m)),!(d.path==null&&!d.index)&&i.push({path:m,score:E1(m,d.index),routesMeta:y})};return a.forEach((d,g)=>{if(d.path===""||!d.path?.includes("?"))s(d,g);else for(let b of _0(d.path))s(d,g,b)}),i}function _0(a){let i=a.split("/");if(i.length===0)return[];let[u,...c]=i,s=u.endsWith("?"),d=u.replace(/\?$/,"");if(c.length===0)return s?[d,""]:[d];let g=_0(c.join("/")),b=[];return b.push(...g.map(v=>v===""?d:[d,v].join("/"))),s&&b.push(...g),b.map(v=>a.startsWith("/")&&v===""?"/":v)}function p1(a){a.sort((i,u)=>i.score!==u.score?u.score-i.score:$1(i.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var g1=/^:[\w-]+$/,v1=3,y1=2,b1=1,x1=10,S1=-2,wp=a=>a==="*";function E1(a,i){let u=a.split("/"),c=u.length;return u.some(wp)&&(c+=S1),i&&(c+=y1),u.filter(s=>!wp(s)).reduce((s,d)=>s+(g1.test(d)?v1:d===""?b1:x1),c)}function $1(a,i){return a.length===i.length&&a.slice(0,-1).every((c,s)=>c===i[s])?a[a.length-1]-i[i.length-1]:0}function N1(a,i,u=!1){let{routesMeta:c}=a,s={},d="/",g=[];for(let b=0;b<c.length;++b){let v=c[b],m=b===c.length-1,y=d==="/"?i:i.slice(d.length)||"/",$=nu({path:v.relativePath,caseSensitive:v.caseSensitive,end:m},y),x=v.route;if(!$&&m&&u&&!c[c.length-1].route.index&&($=nu({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},y)),!$)return null;Object.assign(s,$.params),g.push({params:s,pathname:ul([d,$.pathname]),pathnameBase:A1(ul([d,$.pathnameBase])),route:x}),$.pathnameBase!=="/"&&(d=ul([d,$.pathnameBase]))}return g}function nu(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,c]=_1(a.path,a.caseSensitive,a.end),s=i.match(u);if(!s)return null;let d=s[0],g=d.replace(/(.)\/+$/,"$1"),b=s.slice(1);return{params:c.reduce((m,{paramName:y,isOptional:$},x)=>{if(y==="*"){let S=b[x]||"";g=d.slice(0,d.length-S.length).replace(/(.)\/+$/,"$1")}const T=b[x];return $&&!T?m[y]=void 0:m[y]=(T||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:g,pattern:a}}function _1(a,i=!1,u=!0){La(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],s="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,b,v)=>(c.push({paramName:b,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(c.push({paramName:"*"}),s+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?s+="\\/*$":a!==""&&a!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),c]}function w1(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return La(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function cl(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let u=i.endsWith("/")?i.length-1:i.length,c=a.charAt(u);return c&&c!=="/"?null:a.slice(u)||"/"}function T1(a,i="/"){let{pathname:u,search:c="",hash:s=""}=typeof a=="string"?sr(a):a;return{pathname:u?u.startsWith("/")?u:M1(u,i):i,search:O1(c),hash:D1(s)}}function M1(a,i){let u=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(s=>{s===".."?u.length>1&&u.pop():s!=="."&&u.push(s)}),u.length>1?u.join("/"):"/"}function Os(a,i,u,c){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function C1(a){return a.filter((i,u)=>u===0||i.route.path&&i.route.path.length>0)}function w0(a){let i=C1(a);return i.map((u,c)=>c===i.length-1?u.pathname:u.pathnameBase)}function T0(a,i,u,c=!1){let s;typeof a=="string"?s=sr(a):(s={...a},at(!s.pathname||!s.pathname.includes("?"),Os("?","pathname","search",s)),at(!s.pathname||!s.pathname.includes("#"),Os("#","pathname","hash",s)),at(!s.search||!s.search.includes("#"),Os("#","search","hash",s)));let d=a===""||s.pathname==="",g=d?"/":s.pathname,b;if(g==null)b=u;else{let $=i.length-1;if(!c&&g.startsWith("..")){let x=g.split("/");for(;x[0]==="..";)x.shift(),$-=1;s.pathname=x.join("/")}b=$>=0?i[$]:"/"}let v=T1(s,b),m=g&&g!=="/"&&g.endsWith("/"),y=(d||g===".")&&u.endsWith("/");return!v.pathname.endsWith("/")&&(m||y)&&(v.pathname+="/"),v}var ul=a=>a.join("/").replace(/\/\/+/g,"/"),A1=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),O1=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,D1=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function B1(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var M0=["POST","PUT","PATCH","DELETE"];new Set(M0);var R1=["GET",...M0];new Set(R1);var fr=h.createContext(null);fr.displayName="DataRouter";var cu=h.createContext(null);cu.displayName="DataRouterState";var C0=h.createContext({isTransitioning:!1});C0.displayName="ViewTransition";var z1=h.createContext(new Map);z1.displayName="Fetchers";var H1=h.createContext(null);H1.displayName="Await";var Ua=h.createContext(null);Ua.displayName="Navigation";var _i=h.createContext(null);_i.displayName="Location";var ka=h.createContext({outlet:null,matches:[],isDataRoute:!1});ka.displayName="Route";var ff=h.createContext(null);ff.displayName="RouteError";function j1(a,{relative:i}={}){at(wi(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=h.useContext(Ua),{hash:s,pathname:d,search:g}=Ti(a,{relative:i}),b=d;return u!=="/"&&(b=d==="/"?u:ul([u,d])),c.createHref({pathname:b,search:g,hash:s})}function wi(){return h.useContext(_i)!=null}function dn(){return at(wi(),"useLocation() may be used only in the context of a <Router> component."),h.useContext(_i).location}var A0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function O0(a){h.useContext(Ua).static||h.useLayoutEffect(a)}function df(){let{isDataRoute:a}=h.useContext(ka);return a?W1():L1()}function L1(){at(wi(),"useNavigate() may be used only in the context of a <Router> component.");let a=h.useContext(fr),{basename:i,navigator:u}=h.useContext(Ua),{matches:c}=h.useContext(ka),{pathname:s}=dn(),d=JSON.stringify(w0(c)),g=h.useRef(!1);return O0(()=>{g.current=!0}),h.useCallback((v,m={})=>{if(La(g.current,A0),!g.current)return;if(typeof v=="number"){u.go(v);return}let y=T0(v,JSON.parse(d),s,m.relative==="path");a==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:ul([i,y.pathname])),(m.replace?u.replace:u.push)(y,m.state,m)},[i,u,d,s,a])}h.createContext(null);function U1(){let{matches:a}=h.useContext(ka),i=a[a.length-1];return i?i.params:{}}function Ti(a,{relative:i}={}){let{matches:u}=h.useContext(ka),{pathname:c}=dn(),s=JSON.stringify(w0(u));return h.useMemo(()=>T0(a,JSON.parse(s),c,i==="path"),[a,s,c,i])}function k1(a,i){return D0(a,i)}function D0(a,i,u,c){at(wi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=h.useContext(Ua),{matches:d}=h.useContext(ka),g=d[d.length-1],b=g?g.params:{},v=g?g.pathname:"/",m=g?g.pathnameBase:"/",y=g&&g.route;{let C=y&&y.path||"";B0(v,!y||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let $=dn(),x;if(i){let C=typeof i=="string"?sr(i):i;at(m==="/"||C.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${C.pathname}" was given in the \`location\` prop.`),x=C}else x=$;let T=x.pathname||"/",S=T;if(m!=="/"){let C=m.replace(/^\//,"").split("/");S="/"+T.replace(/^\//,"").split("/").slice(C.length).join("/")}let H=$0(a,{pathname:S});La(y||H!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),La(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=P1(H&&H.map(C=>Object.assign({},C,{params:Object.assign({},b,C.params),pathname:ul([m,s.encodeLocation?s.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?m:ul([m,s.encodeLocation?s.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),d,u,c);return i&&B?h.createElement(_i.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},B):B}function q1(){let a=K1(),i=B1(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",a),g=h.createElement(h.Fragment,null,h.createElement("p",null,"💿 Hey developer 👋"),h.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",h.createElement("code",{style:d},"ErrorBoundary")," or"," ",h.createElement("code",{style:d},"errorElement")," prop on your route.")),h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},i),u?h.createElement("pre",{style:s},u):null,g)}var Y1=h.createElement(q1,null),G1=class extends h.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){console.error("React Router caught the following error during render",a,i)}render(){return this.state.error!==void 0?h.createElement(ka.Provider,{value:this.props.routeContext},h.createElement(ff.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function V1({routeContext:a,match:i,children:u}){let c=h.useContext(fr);return c&&c.static&&c.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=i.route.id),h.createElement(ka.Provider,{value:a},u)}function P1(a,i=[],u=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(i.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let s=a,d=u?.errors;if(d!=null){let v=s.findIndex(m=>m.route.id&&d?.[m.route.id]!==void 0);at(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),s=s.slice(0,Math.min(s.length,v+1))}let g=!1,b=-1;if(u)for(let v=0;v<s.length;v++){let m=s[v];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(b=v),m.route.id){let{loaderData:y,errors:$}=u,x=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!$||$[m.route.id]===void 0);if(m.route.lazy||x){g=!0,b>=0?s=s.slice(0,b+1):s=[s[0]];break}}}return s.reduceRight((v,m,y)=>{let $,x=!1,T=null,S=null;u&&($=d&&m.route.id?d[m.route.id]:void 0,T=m.route.errorElement||Y1,g&&(b<0&&y===0?(B0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,S=null):b===y&&(x=!0,S=m.route.hydrateFallbackElement||null)));let H=i.concat(s.slice(0,y+1)),B=()=>{let C;return $?C=T:x?C=S:m.route.Component?C=h.createElement(m.route.Component,null):m.route.element?C=m.route.element:C=v,h.createElement(V1,{match:m,routeContext:{outlet:v,matches:H,isDataRoute:u!=null},children:C})};return u&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?h.createElement(G1,{location:u.location,revalidation:u.revalidation,component:T,error:$,children:B(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):B()},null)}function hf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function X1(a){let i=h.useContext(fr);return at(i,hf(a)),i}function Q1(a){let i=h.useContext(cu);return at(i,hf(a)),i}function Z1(a){let i=h.useContext(ka);return at(i,hf(a)),i}function mf(a){let i=Z1(a),u=i.matches[i.matches.length-1];return at(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function F1(){return mf("useRouteId")}function K1(){let a=h.useContext(ff),i=Q1("useRouteError"),u=mf("useRouteError");return a!==void 0?a:i.errors?.[u]}function W1(){let{router:a}=X1("useNavigate"),i=mf("useNavigate"),u=h.useRef(!1);return O0(()=>{u.current=!0}),h.useCallback(async(s,d={})=>{La(u.current,A0),u.current&&(typeof s=="number"?a.navigate(s):await a.navigate(s,{fromRouteId:i,...d}))},[a,i])}var Tp={};function B0(a,i,u){!i&&!Tp[a]&&(Tp[a]=!0,La(!1,u))}h.memo(J1);function J1({routes:a,future:i,state:u}){return D0(a,void 0,u,i)}function Us(a){at(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function I1({basename:a="/",children:i=null,location:u,navigationType:c="POP",navigator:s,static:d=!1}){at(!wi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=a.replace(/^\/*/,"/"),b=h.useMemo(()=>({basename:g,navigator:s,static:d,future:{}}),[g,s,d]);typeof u=="string"&&(u=sr(u));let{pathname:v="/",search:m="",hash:y="",state:$=null,key:x="default"}=u,T=h.useMemo(()=>{let S=cl(v,g);return S==null?null:{location:{pathname:S,search:m,hash:y,state:$,key:x},navigationType:c}},[g,v,m,y,$,x,c]);return La(T!=null,`<Router basename="${g}"> is not able to match the URL "${v}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:h.createElement(Ua.Provider,{value:b},h.createElement(_i.Provider,{children:i,value:T}))}function eb({children:a,location:i}){return k1(ks(a),i)}function ks(a,i=[]){let u=[];return h.Children.forEach(a,(c,s)=>{if(!h.isValidElement(c))return;let d=[...i,s];if(c.type===h.Fragment){u.push.apply(u,ks(c.props.children,d));return}at(c.type===Us,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),at(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||d.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=ks(c.props.children,d)),u.push(g)}),u}var Ko="get",Wo="application/x-www-form-urlencoded";function su(a){return a!=null&&typeof a.tagName=="string"}function tb(a){return su(a)&&a.tagName.toLowerCase()==="button"}function ab(a){return su(a)&&a.tagName.toLowerCase()==="form"}function lb(a){return su(a)&&a.tagName.toLowerCase()==="input"}function nb(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function rb(a,i){return a.button===0&&(!i||i==="_self")&&!nb(a)}var Xo=null;function ib(){if(Xo===null)try{new FormData(document.createElement("form"),0),Xo=!1}catch{Xo=!0}return Xo}var ob=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ds(a){return a!=null&&!ob.has(a)?(La(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wo}"`),null):a}function ub(a,i){let u,c,s,d,g;if(ab(a)){let b=a.getAttribute("action");c=b?cl(b,i):null,u=a.getAttribute("method")||Ko,s=Ds(a.getAttribute("enctype"))||Wo,d=new FormData(a)}else if(tb(a)||lb(a)&&(a.type==="submit"||a.type==="image")){let b=a.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=a.getAttribute("formaction")||b.getAttribute("action");if(c=v?cl(v,i):null,u=a.getAttribute("formmethod")||b.getAttribute("method")||Ko,s=Ds(a.getAttribute("formenctype"))||Ds(b.getAttribute("enctype"))||Wo,d=new FormData(b,a),!ib()){let{name:m,type:y,value:$}=a;if(y==="image"){let x=m?`${m}.`:"";d.append(`${x}x`,"0"),d.append(`${x}y`,"0")}else m&&d.append(m,$)}}else{if(su(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Ko,c=null,s=Wo,g=a}return d&&s==="text/plain"&&(g=d,d=void 0),{action:c,method:u.toLowerCase(),encType:s,formData:d,body:g}}function pf(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}async function cb(a,i){if(a.id in i)return i[a.id];try{let u=await import(a.module);return i[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function fb(a,i,u){let c=await Promise.all(a.map(async s=>{let d=i.routes[s.route.id];if(d){let g=await cb(d,u);return g.links?g.links():[]}return[]}));return pb(c.flat(1).filter(sb).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Mp(a,i,u,c,s,d){let g=(v,m)=>u[m]?v.route.id!==u[m].route.id:!0,b=(v,m)=>u[m].pathname!==v.pathname||u[m].route.path?.endsWith("*")&&u[m].params["*"]!==v.params["*"];return d==="assets"?i.filter((v,m)=>g(v,m)||b(v,m)):d==="data"?i.filter((v,m)=>{let y=c.routes[v.route.id];if(!y||!y.hasLoader)return!1;if(g(v,m)||b(v,m))return!0;if(v.route.shouldRevalidate){let $=v.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof $=="boolean")return $}return!0}):[]}function db(a,i,{includeHydrateFallback:u}={}){return hb(a.map(c=>{let s=i.routes[c.route.id];if(!s)return[];let d=[s.module];return s.clientActionModule&&(d=d.concat(s.clientActionModule)),s.clientLoaderModule&&(d=d.concat(s.clientLoaderModule)),u&&s.hydrateFallbackModule&&(d=d.concat(s.hydrateFallbackModule)),s.imports&&(d=d.concat(s.imports)),d}).flat(1))}function hb(a){return[...new Set(a)]}function mb(a){let i={},u=Object.keys(a).sort();for(let c of u)i[c]=a[c];return i}function pb(a,i){let u=new Set;return new Set(i),a.reduce((c,s)=>{let d=JSON.stringify(mb(s));return u.has(d)||(u.add(d),c.push({key:d,link:s})),c},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var gb=new Set([100,101,204,205]);function vb(a,i){let u=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return u.pathname==="/"?u.pathname="_root.data":i&&cl(u.pathname,i)==="/"?u.pathname=`${i.replace(/\/$/,"")}/_root.data`:u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function R0(){let a=h.useContext(fr);return pf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function yb(){let a=h.useContext(cu);return pf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var gf=h.createContext(void 0);gf.displayName="FrameworkContext";function z0(){let a=h.useContext(gf);return pf(a,"You must render this element inside a <HydratedRouter> element"),a}function bb(a,i){let u=h.useContext(gf),[c,s]=h.useState(!1),[d,g]=h.useState(!1),{onFocus:b,onBlur:v,onMouseEnter:m,onMouseLeave:y,onTouchStart:$}=i,x=h.useRef(null);h.useEffect(()=>{if(a==="render"&&g(!0),a==="viewport"){let H=C=>{C.forEach(D=>{g(D.isIntersecting)})},B=new IntersectionObserver(H,{threshold:.5});return x.current&&B.observe(x.current),()=>{B.disconnect()}}},[a]),h.useEffect(()=>{if(c){let H=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(H)}}},[c]);let T=()=>{s(!0)},S=()=>{s(!1),g(!1)};return u?a!=="intent"?[d,x,{}]:[d,x,{onFocus:gi(b,T),onBlur:gi(v,S),onMouseEnter:gi(m,T),onMouseLeave:gi(y,S),onTouchStart:gi($,T)}]:[!1,x,{}]}function gi(a,i){return u=>{a&&a(u),u.defaultPrevented||i(u)}}function xb({page:a,...i}){let{router:u}=R0(),c=h.useMemo(()=>$0(u.routes,a,u.basename),[u.routes,a,u.basename]);return c?h.createElement(Eb,{page:a,matches:c,...i}):null}function Sb(a){let{manifest:i,routeModules:u}=z0(),[c,s]=h.useState([]);return h.useEffect(()=>{let d=!1;return fb(a,i,u).then(g=>{d||s(g)}),()=>{d=!0}},[a,i,u]),c}function Eb({page:a,matches:i,...u}){let c=dn(),{manifest:s,routeModules:d}=z0(),{basename:g}=R0(),{loaderData:b,matches:v}=yb(),m=h.useMemo(()=>Mp(a,i,v,s,c,"data"),[a,i,v,s,c]),y=h.useMemo(()=>Mp(a,i,v,s,c,"assets"),[a,i,v,s,c]),$=h.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let S=new Set,H=!1;if(i.forEach(C=>{let D=s.routes[C.route.id];!D||!D.hasLoader||(!m.some(U=>U.route.id===C.route.id)&&C.route.id in b&&d[C.route.id]?.shouldRevalidate||D.hasClientLoader?H=!0:S.add(C.route.id))}),S.size===0)return[];let B=vb(a,g);return H&&S.size>0&&B.searchParams.set("_routes",i.filter(C=>S.has(C.route.id)).map(C=>C.route.id).join(",")),[B.pathname+B.search]},[g,b,c,s,m,i,a,d]),x=h.useMemo(()=>db(y,s),[y,s]),T=Sb(y);return h.createElement(h.Fragment,null,$.map(S=>h.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...u})),x.map(S=>h.createElement("link",{key:S,rel:"modulepreload",href:S,...u})),T.map(({key:S,link:H})=>h.createElement("link",{key:S,...H})))}function $b(...a){return i=>{a.forEach(u=>{typeof u=="function"?u(i):u!=null&&(u.current=i)})}}var H0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{H0&&(window.__reactRouterVersion="7.6.3")}catch{}function Nb({basename:a,children:i,window:u}){let c=h.useRef();c.current==null&&(c.current=s1({window:u,v5Compat:!0}));let s=c.current,[d,g]=h.useState({action:s.action,location:s.location}),b=h.useCallback(v=>{h.startTransition(()=>g(v))},[g]);return h.useLayoutEffect(()=>s.listen(b),[s,b]),h.createElement(I1,{basename:a,children:i,location:d.location,navigationType:d.action,navigator:s})}var j0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,L0=h.forwardRef(function({onClick:i,discover:u="render",prefetch:c="none",relative:s,reloadDocument:d,replace:g,state:b,target:v,to:m,preventScrollReset:y,viewTransition:$,...x},T){let{basename:S}=h.useContext(Ua),H=typeof m=="string"&&j0.test(m),B,C=!1;if(typeof m=="string"&&H&&(B=m,H0))try{let ne=new URL(window.location.href),me=m.startsWith("//")?new URL(ne.protocol+m):new URL(m),Pe=cl(me.pathname,S);me.origin===ne.origin&&Pe!=null?m=Pe+me.search+me.hash:C=!0}catch{La(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=j1(m,{relative:s}),[U,ee,Z]=bb(c,x),W=Mb(m,{replace:g,state:b,target:v,preventScrollReset:y,relative:s,viewTransition:$});function I(ne){i&&i(ne),ne.defaultPrevented||W(ne)}let fe=h.createElement("a",{...x,...Z,href:B||D,onClick:C||d?i:I,ref:$b(T,ee),target:v,"data-discover":!H&&u==="render"?"true":void 0});return U&&!H?h.createElement(h.Fragment,null,fe,h.createElement(xb,{page:D})):fe});L0.displayName="Link";var _b=h.forwardRef(function({"aria-current":i="page",caseSensitive:u=!1,className:c="",end:s=!1,style:d,to:g,viewTransition:b,children:v,...m},y){let $=Ti(g,{relative:m.relative}),x=dn(),T=h.useContext(cu),{navigator:S,basename:H}=h.useContext(Ua),B=T!=null&&Bb($)&&b===!0,C=S.encodeLocation?S.encodeLocation($).pathname:$.pathname,D=x.pathname,U=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;u||(D=D.toLowerCase(),U=U?U.toLowerCase():null,C=C.toLowerCase()),U&&H&&(U=cl(U,H)||U);const ee=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let Z=D===C||!s&&D.startsWith(C)&&D.charAt(ee)==="/",W=U!=null&&(U===C||!s&&U.startsWith(C)&&U.charAt(C.length)==="/"),I={isActive:Z,isPending:W,isTransitioning:B},fe=Z?i:void 0,ne;typeof c=="function"?ne=c(I):ne=[c,Z?"active":null,W?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let me=typeof d=="function"?d(I):d;return h.createElement(L0,{...m,"aria-current":fe,className:ne,ref:y,style:me,to:g,viewTransition:b},typeof v=="function"?v(I):v)});_b.displayName="NavLink";var wb=h.forwardRef(({discover:a="render",fetcherKey:i,navigate:u,reloadDocument:c,replace:s,state:d,method:g=Ko,action:b,onSubmit:v,relative:m,preventScrollReset:y,viewTransition:$,...x},T)=>{let S=Ob(),H=Db(b,{relative:m}),B=g.toLowerCase()==="get"?"get":"post",C=typeof b=="string"&&j0.test(b),D=U=>{if(v&&v(U),U.defaultPrevented)return;U.preventDefault();let ee=U.nativeEvent.submitter,Z=ee?.getAttribute("formmethod")||g;S(ee||U.currentTarget,{fetcherKey:i,method:Z,navigate:u,replace:s,state:d,relative:m,preventScrollReset:y,viewTransition:$})};return h.createElement("form",{ref:T,method:B,action:H,onSubmit:c?v:D,...x,"data-discover":!C&&a==="render"?"true":void 0})});wb.displayName="Form";function Tb(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U0(a){let i=h.useContext(fr);return at(i,Tb(a)),i}function Mb(a,{target:i,replace:u,state:c,preventScrollReset:s,relative:d,viewTransition:g}={}){let b=df(),v=dn(),m=Ti(a,{relative:d});return h.useCallback(y=>{if(rb(y,i)){y.preventDefault();let $=u!==void 0?u:xi(v)===xi(m);b(a,{replace:$,state:c,preventScrollReset:s,relative:d,viewTransition:g})}},[v,b,m,u,c,i,a,s,d,g])}var Cb=0,Ab=()=>`__${String(++Cb)}__`;function Ob(){let{router:a}=U0("useSubmit"),{basename:i}=h.useContext(Ua),u=F1();return h.useCallback(async(c,s={})=>{let{action:d,method:g,encType:b,formData:v,body:m}=ub(c,i);if(s.navigate===!1){let y=s.fetcherKey||Ab();await a.fetch(y,u,s.action||d,{preventScrollReset:s.preventScrollReset,formData:v,body:m,formMethod:s.method||g,formEncType:s.encType||b,flushSync:s.flushSync})}else await a.navigate(s.action||d,{preventScrollReset:s.preventScrollReset,formData:v,body:m,formMethod:s.method||g,formEncType:s.encType||b,replace:s.replace,state:s.state,fromRouteId:u,flushSync:s.flushSync,viewTransition:s.viewTransition})},[a,i,u])}function Db(a,{relative:i}={}){let{basename:u}=h.useContext(Ua),c=h.useContext(ka);at(c,"useFormAction must be used inside a RouteContext");let[s]=c.matches.slice(-1),d={...Ti(a||".",{relative:i})},g=dn();if(a==null){d.search=g.search;let b=new URLSearchParams(d.search),v=b.getAll("index");if(v.some(y=>y==="")){b.delete("index"),v.filter($=>$).forEach($=>b.append("index",$));let y=b.toString();d.search=y?`?${y}`:""}}return(!a||a===".")&&s.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:ul([u,d.pathname])),xi(d)}function Bb(a,i={}){let u=h.useContext(C0);at(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=U0("useViewTransitionState"),s=Ti(a,{relative:i.relative});if(!u.isTransitioning)return!1;let d=cl(u.currentLocation.pathname,c)||u.currentLocation.pathname,g=cl(u.nextLocation.pathname,c)||u.nextLocation.pathname;return nu(s.pathname,g)!=null||nu(s.pathname,d)!=null}[...gb];var Rb=E0(),Bt=function(){return Bt=Object.assign||function(i){for(var u,c=1,s=arguments.length;c<s;c++){u=arguments[c];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(i[d]=u[d])}return i},Bt.apply(this,arguments)};function Si(a,i,u){if(u||arguments.length===2)for(var c=0,s=i.length,d;c<s;c++)(d||!(c in i))&&(d||(d=Array.prototype.slice.call(i,0,c)),d[c]=i[c]);return a.concat(d||Array.prototype.slice.call(i))}var Qe="-ms-",bi="-moz-",Oe="-webkit-",k0="comm",fu="rule",vf="decl",zb="@import",q0="@keyframes",Hb="@layer",Y0=Math.abs,yf=String.fromCharCode,qs=Object.assign;function jb(a,i){return Et(a,0)^45?(((i<<2^Et(a,0))<<2^Et(a,1))<<2^Et(a,2))<<2^Et(a,3):0}function G0(a){return a.trim()}function il(a,i){return(a=i.exec(a))?a[0]:a}function xe(a,i,u){return a.replace(i,u)}function Jo(a,i,u){return a.indexOf(i,u)}function Et(a,i){return a.charCodeAt(i)|0}function er(a,i,u){return a.slice(i,u)}function ja(a){return a.length}function V0(a){return a.length}function vi(a,i){return i.push(a),a}function Lb(a,i){return a.map(i).join("")}function Cp(a,i){return a.filter(function(u){return!il(u,i)})}var du=1,tr=1,P0=0,ga=0,dt=0,dr="";function hu(a,i,u,c,s,d,g,b){return{value:a,root:i,parent:u,type:c,props:s,children:d,line:du,column:tr,length:g,return:"",siblings:b}}function zl(a,i){return qs(hu("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},i)}function Wn(a){for(;a.root;)a=zl(a.root,{children:[a]});vi(a,a.siblings)}function Ub(){return dt}function kb(){return dt=ga>0?Et(dr,--ga):0,tr--,dt===10&&(tr=1,du--),dt}function wa(){return dt=ga<P0?Et(dr,ga++):0,tr++,dt===10&&(tr=1,du++),dt}function un(){return Et(dr,ga)}function Io(){return ga}function mu(a,i){return er(dr,a,i)}function Ys(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qb(a){return du=tr=1,P0=ja(dr=a),ga=0,[]}function Yb(a){return dr="",a}function Bs(a){return G0(mu(ga-1,Gs(a===91?a+2:a===40?a+1:a)))}function Gb(a){for(;(dt=un())&&dt<33;)wa();return Ys(a)>2||Ys(dt)>3?"":" "}function Vb(a,i){for(;--i&&wa()&&!(dt<48||dt>102||dt>57&&dt<65||dt>70&&dt<97););return mu(a,Io()+(i<6&&un()==32&&wa()==32))}function Gs(a){for(;wa();)switch(dt){case a:return ga;case 34:case 39:a!==34&&a!==39&&Gs(dt);break;case 40:a===41&&Gs(a);break;case 92:wa();break}return ga}function Pb(a,i){for(;wa()&&a+dt!==57;)if(a+dt===84&&un()===47)break;return"/*"+mu(i,ga-1)+"*"+yf(a===47?a:wa())}function Xb(a){for(;!Ys(un());)wa();return mu(a,ga)}function Qb(a){return Yb(eu("",null,null,null,[""],a=qb(a),0,[0],a))}function eu(a,i,u,c,s,d,g,b,v){for(var m=0,y=0,$=g,x=0,T=0,S=0,H=1,B=1,C=1,D=0,U="",ee=s,Z=d,W=c,I=U;B;)switch(S=D,D=wa()){case 40:if(S!=108&&Et(I,$-1)==58){Jo(I+=xe(Bs(D),"&","&\f"),"&\f",Y0(m?b[m-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:I+=Bs(D);break;case 9:case 10:case 13:case 32:I+=Gb(S);break;case 92:I+=Vb(Io()-1,7);continue;case 47:switch(un()){case 42:case 47:vi(Zb(Pb(wa(),Io()),i,u,v),v);break;default:I+="/"}break;case 123*H:b[m++]=ja(I)*C;case 125*H:case 59:case 0:switch(D){case 0:case 125:B=0;case 59+y:C==-1&&(I=xe(I,/\f/g,"")),T>0&&ja(I)-$&&vi(T>32?Op(I+";",c,u,$-1,v):Op(xe(I," ","")+";",c,u,$-2,v),v);break;case 59:I+=";";default:if(vi(W=Ap(I,i,u,m,y,s,b,U,ee=[],Z=[],$,d),d),D===123)if(y===0)eu(I,i,W,W,ee,d,$,b,Z);else switch(x===99&&Et(I,3)===110?100:x){case 100:case 108:case 109:case 115:eu(a,W,W,c&&vi(Ap(a,W,W,0,0,s,b,U,s,ee=[],$,Z),Z),s,Z,$,b,c?ee:Z);break;default:eu(I,W,W,W,[""],Z,0,b,Z)}}m=y=T=0,H=C=1,U=I="",$=g;break;case 58:$=1+ja(I),T=S;default:if(H<1){if(D==123)--H;else if(D==125&&H++==0&&kb()==125)continue}switch(I+=yf(D),D*H){case 38:C=y>0?1:(I+="\f",-1);break;case 44:b[m++]=(ja(I)-1)*C,C=1;break;case 64:un()===45&&(I+=Bs(wa())),x=un(),y=$=ja(U=I+=Xb(Io())),D++;break;case 45:S===45&&ja(I)==2&&(H=0)}}return d}function Ap(a,i,u,c,s,d,g,b,v,m,y,$){for(var x=s-1,T=s===0?d:[""],S=V0(T),H=0,B=0,C=0;H<c;++H)for(var D=0,U=er(a,x+1,x=Y0(B=g[H])),ee=a;D<S;++D)(ee=G0(B>0?T[D]+" "+U:xe(U,/&\f/g,T[D])))&&(v[C++]=ee);return hu(a,i,u,s===0?fu:b,v,m,y,$)}function Zb(a,i,u,c){return hu(a,i,u,k0,yf(Ub()),er(a,2,-2),0,c)}function Op(a,i,u,c,s){return hu(a,i,u,vf,er(a,0,c),er(a,c+1,-1),c,s)}function X0(a,i,u){switch(jb(a,i)){case 5103:return Oe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+a+a;case 4789:return bi+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+a+bi+a+Qe+a+a;case 5936:switch(Et(a,i+11)){case 114:return Oe+a+Qe+xe(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Oe+a+Qe+xe(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Oe+a+Qe+xe(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Oe+a+Qe+a+a;case 6165:return Oe+a+Qe+"flex-"+a+a;case 5187:return Oe+a+xe(a,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+Qe+"flex-$1$2")+a;case 5443:return Oe+a+Qe+"flex-item-"+xe(a,/flex-|-self/g,"")+(il(a,/flex-|baseline/)?"":Qe+"grid-row-"+xe(a,/flex-|-self/g,""))+a;case 4675:return Oe+a+Qe+"flex-line-pack"+xe(a,/align-content|flex-|-self/g,"")+a;case 5548:return Oe+a+Qe+xe(a,"shrink","negative")+a;case 5292:return Oe+a+Qe+xe(a,"basis","preferred-size")+a;case 6060:return Oe+"box-"+xe(a,"-grow","")+Oe+a+Qe+xe(a,"grow","positive")+a;case 4554:return Oe+xe(a,/([^-])(transform)/g,"$1"+Oe+"$2")+a;case 6187:return xe(xe(xe(a,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),a,"")+a;case 5495:case 3959:return xe(a,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return xe(xe(a,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+Qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+a+a;case 4200:if(!il(a,/flex-|baseline/))return Qe+"grid-column-align"+er(a,i)+a;break;case 2592:case 3360:return Qe+xe(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(c,s){return i=s,il(c.props,/grid-\w+-end/)})?~Jo(a+(u=u[i].value),"span",0)?a:Qe+xe(a,"-start","")+a+Qe+"grid-row-span:"+(~Jo(u,"span",0)?il(u,/\d+/):+il(u,/\d+/)-+il(a,/\d+/))+";":Qe+xe(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(c){return il(c.props,/grid-\w+-start/)})?a:Qe+xe(xe(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return xe(a,/(.+)-inline(.+)/,Oe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ja(a)-1-i>6)switch(Et(a,i+1)){case 109:if(Et(a,i+4)!==45)break;case 102:return xe(a,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+bi+(Et(a,i+3)==108?"$3":"$2-$3"))+a;case 115:return~Jo(a,"stretch",0)?X0(xe(a,"stretch","fill-available"),i,u)+a:a}break;case 5152:case 5920:return xe(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,s,d,g,b,v,m){return Qe+s+":"+d+m+(g?Qe+s+"-span:"+(b?v:+v-+d)+m:"")+a});case 4949:if(Et(a,i+6)===121)return xe(a,":",":"+Oe)+a;break;case 6444:switch(Et(a,Et(a,14)===45?18:11)){case 120:return xe(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Oe+(Et(a,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+Qe+"$2box$3")+a;case 100:return xe(a,":",":"+Qe)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return xe(a,"scroll-","scroll-snap-")+a}return a}function ru(a,i){for(var u="",c=0;c<a.length;c++)u+=i(a[c],c,a,i)||"";return u}function Fb(a,i,u,c){switch(a.type){case Hb:if(a.children.length)break;case zb:case vf:return a.return=a.return||a.value;case k0:return"";case q0:return a.return=a.value+"{"+ru(a.children,c)+"}";case fu:if(!ja(a.value=a.props.join(",")))return""}return ja(u=ru(a.children,c))?a.return=a.value+"{"+u+"}":""}function Kb(a){var i=V0(a);return function(u,c,s,d){for(var g="",b=0;b<i;b++)g+=a[b](u,c,s,d)||"";return g}}function Wb(a){return function(i){i.root||(i=i.return)&&a(i)}}function Jb(a,i,u,c){if(a.length>-1&&!a.return)switch(a.type){case vf:a.return=X0(a.value,a.length,u);return;case q0:return ru([zl(a,{value:xe(a.value,"@","@"+Oe)})],c);case fu:if(a.length)return Lb(u=a.props,function(s){switch(il(s,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wn(zl(a,{props:[xe(s,/:(read-\w+)/,":"+bi+"$1")]})),Wn(zl(a,{props:[s]})),qs(a,{props:Cp(u,c)});break;case"::placeholder":Wn(zl(a,{props:[xe(s,/:(plac\w+)/,":"+Oe+"input-$1")]})),Wn(zl(a,{props:[xe(s,/:(plac\w+)/,":"+bi+"$1")]})),Wn(zl(a,{props:[xe(s,/:(plac\w+)/,Qe+"input-$1")]})),Wn(zl(a,{props:[s]})),qs(a,{props:Cp(u,c)});break}return""})}}var Ib={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},It={},ar=typeof process<"u"&&It!==void 0&&(It.REACT_APP_SC_ATTR||It.SC_ATTR)||"data-styled",Q0="active",Z0="data-styled-version",pu="6.1.19",bf=`/*!sc*/
`,iu=typeof window<"u"&&typeof document<"u",ex=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&It!==void 0&&It.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&It.REACT_APP_SC_DISABLE_SPEEDY!==""?It.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&It.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&It!==void 0&&It.SC_DISABLE_SPEEDY!==void 0&&It.SC_DISABLE_SPEEDY!==""&&It.SC_DISABLE_SPEEDY!=="false"&&It.SC_DISABLE_SPEEDY),gu=Object.freeze([]),lr=Object.freeze({});function tx(a,i,u){return u===void 0&&(u=lr),a.theme!==u.theme&&a.theme||i||u.theme}var F0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ax=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lx=/(^-|-$)/g;function Dp(a){return a.replace(ax,"-").replace(lx,"")}var nx=/(a)(d)/gi,Qo=52,Bp=function(a){return String.fromCharCode(a+(a>25?39:97))};function Vs(a){var i,u="";for(i=Math.abs(a);i>Qo;i=i/Qo|0)u=Bp(i%Qo)+u;return(Bp(i%Qo)+u).replace(nx,"$1-$2")}var Rs,K0=5381,Jn=function(a,i){for(var u=i.length;u;)a=33*a^i.charCodeAt(--u);return a},W0=function(a){return Jn(K0,a)};function J0(a){return Vs(W0(a)>>>0)}function rx(a){return a.displayName||a.name||"Component"}function zs(a){return typeof a=="string"&&!0}var I0=typeof Symbol=="function"&&Symbol.for,eg=I0?Symbol.for("react.memo"):60115,ix=I0?Symbol.for("react.forward_ref"):60112,ox={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ux={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cx=((Rs={})[ix]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rs[eg]=tg,Rs);function Rp(a){return("type"in(i=a)&&i.type.$$typeof)===eg?tg:"$$typeof"in a?cx[a.$$typeof]:ox;var i}var sx=Object.defineProperty,fx=Object.getOwnPropertyNames,zp=Object.getOwnPropertySymbols,dx=Object.getOwnPropertyDescriptor,hx=Object.getPrototypeOf,Hp=Object.prototype;function ag(a,i,u){if(typeof i!="string"){if(Hp){var c=hx(i);c&&c!==Hp&&ag(a,c,u)}var s=fx(i);zp&&(s=s.concat(zp(i)));for(var d=Rp(a),g=Rp(i),b=0;b<s.length;++b){var v=s[b];if(!(v in ux||u&&u[v]||g&&v in g||d&&v in d)){var m=dx(i,v);try{sx(a,v,m)}catch{}}}}return a}function fn(a){return typeof a=="function"}function xf(a){return typeof a=="object"&&"styledComponentId"in a}function rn(a,i){return a&&i?"".concat(a," ").concat(i):a||i||""}function Ps(a,i){if(a.length===0)return"";for(var u=a[0],c=1;c<a.length;c++)u+=a[c];return u}function Ei(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Xs(a,i,u){if(u===void 0&&(u=!1),!u&&!Ei(a)&&!Array.isArray(a))return i;if(Array.isArray(i))for(var c=0;c<i.length;c++)a[c]=Xs(a[c],i[c]);else if(Ei(i))for(var c in i)a[c]=Xs(a[c],i[c]);return a}function Sf(a,i){Object.defineProperty(a,"toString",{value:i})}function Ll(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var mx=function(){function a(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return a.prototype.indexOfGroup=function(i){for(var u=0,c=0;c<i;c++)u+=this.groupSizes[c];return u},a.prototype.insertRules=function(i,u){if(i>=this.groupSizes.length){for(var c=this.groupSizes,s=c.length,d=s;i>=d;)if((d<<=1)<0)throw Ll(16,"".concat(i));this.groupSizes=new Uint32Array(d),this.groupSizes.set(c),this.length=d;for(var g=s;g<d;g++)this.groupSizes[g]=0}for(var b=this.indexOfGroup(i+1),v=(g=0,u.length);g<v;g++)this.tag.insertRule(b,u[g])&&(this.groupSizes[i]++,b++)},a.prototype.clearGroup=function(i){if(i<this.length){var u=this.groupSizes[i],c=this.indexOfGroup(i),s=c+u;this.groupSizes[i]=0;for(var d=c;d<s;d++)this.tag.deleteRule(c)}},a.prototype.getGroup=function(i){var u="";if(i>=this.length||this.groupSizes[i]===0)return u;for(var c=this.groupSizes[i],s=this.indexOfGroup(i),d=s+c,g=s;g<d;g++)u+="".concat(this.tag.getRule(g)).concat(bf);return u},a}(),tu=new Map,ou=new Map,au=1,Zo=function(a){if(tu.has(a))return tu.get(a);for(;ou.has(au);)au++;var i=au++;return tu.set(a,i),ou.set(i,a),i},px=function(a,i){au=i+1,tu.set(a,i),ou.set(i,a)},gx="style[".concat(ar,"][").concat(Z0,'="').concat(pu,'"]'),vx=new RegExp("^".concat(ar,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yx=function(a,i,u){for(var c,s=u.split(","),d=0,g=s.length;d<g;d++)(c=s[d])&&a.registerName(i,c)},bx=function(a,i){for(var u,c=((u=i.textContent)!==null&&u!==void 0?u:"").split(bf),s=[],d=0,g=c.length;d<g;d++){var b=c[d].trim();if(b){var v=b.match(vx);if(v){var m=0|parseInt(v[1],10),y=v[2];m!==0&&(px(y,m),yx(a,y,v[3]),a.getTag().insertRules(m,s)),s.length=0}else s.push(b)}}},jp=function(a){for(var i=document.querySelectorAll(gx),u=0,c=i.length;u<c;u++){var s=i[u];s&&s.getAttribute(ar)!==Q0&&(bx(a,s),s.parentNode&&s.parentNode.removeChild(s))}};function xx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var lg=function(a){var i=document.head,u=a||i,c=document.createElement("style"),s=function(b){var v=Array.from(b.querySelectorAll("style[".concat(ar,"]")));return v[v.length-1]}(u),d=s!==void 0?s.nextSibling:null;c.setAttribute(ar,Q0),c.setAttribute(Z0,pu);var g=xx();return g&&c.setAttribute("nonce",g),u.insertBefore(c,d),c},Sx=function(){function a(i){this.element=lg(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,s=0,d=c.length;s<d;s++){var g=c[s];if(g.ownerNode===u)return g}throw Ll(17)}(this.element),this.length=0}return a.prototype.insertRule=function(i,u){try{return this.sheet.insertRule(u,i),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},a.prototype.getRule=function(i){var u=this.sheet.cssRules[i];return u&&u.cssText?u.cssText:""},a}(),Ex=function(){function a(i){this.element=lg(i),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(i,u){if(i<=this.length&&i>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[i]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},a.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},a}(),$x=function(){function a(i){this.rules=[],this.length=0}return a.prototype.insertRule=function(i,u){return i<=this.length&&(this.rules.splice(i,0,u),this.length++,!0)},a.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},a.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},a}(),Lp=iu,Nx={isServer:!iu,useCSSOMInjection:!ex},ng=function(){function a(i,u,c){i===void 0&&(i=lr),u===void 0&&(u={});var s=this;this.options=Bt(Bt({},Nx),i),this.gs=u,this.names=new Map(c),this.server=!!i.isServer,!this.server&&iu&&Lp&&(Lp=!1,jp(this)),Sf(this,function(){return function(d){for(var g=d.getTag(),b=g.length,v="",m=function($){var x=function(C){return ou.get(C)}($);if(x===void 0)return"continue";var T=d.names.get(x),S=g.getGroup($);if(T===void 0||!T.size||S.length===0)return"continue";var H="".concat(ar,".g").concat($,'[id="').concat(x,'"]'),B="";T!==void 0&&T.forEach(function(C){C.length>0&&(B+="".concat(C,","))}),v+="".concat(S).concat(H,'{content:"').concat(B,'"}').concat(bf)},y=0;y<b;y++)m(y);return v}(s)})}return a.registerId=function(i){return Zo(i)},a.prototype.rehydrate=function(){!this.server&&iu&&jp(this)},a.prototype.reconstructWithOptions=function(i,u){return u===void 0&&(u=!0),new a(Bt(Bt({},this.options),i),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(i=function(u){var c=u.useCSSOMInjection,s=u.target;return u.isServer?new $x(s):c?new Sx(s):new Ex(s)}(this.options),new mx(i)));var i},a.prototype.hasNameForId=function(i,u){return this.names.has(i)&&this.names.get(i).has(u)},a.prototype.registerName=function(i,u){if(Zo(i),this.names.has(i))this.names.get(i).add(u);else{var c=new Set;c.add(u),this.names.set(i,c)}},a.prototype.insertRules=function(i,u,c){this.registerName(i,u),this.getTag().insertRules(Zo(i),c)},a.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},a.prototype.clearRules=function(i){this.getTag().clearGroup(Zo(i)),this.clearNames(i)},a.prototype.clearTag=function(){this.tag=void 0},a}(),_x=/&/g,wx=/^\s*\/\/.*$/gm;function rg(a,i){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(i," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(i," ")),u.props=u.props.map(function(c){return"".concat(i," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=rg(u.children,i)),u})}function Tx(a){var i,u,c,s=lr,d=s.options,g=d===void 0?lr:d,b=s.plugins,v=b===void 0?gu:b,m=function(x,T,S){return S.startsWith(u)&&S.endsWith(u)&&S.replaceAll(u,"").length>0?".".concat(i):x},y=v.slice();y.push(function(x){x.type===fu&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(_x,u).replace(c,m))}),g.prefix&&y.push(Jb),y.push(Fb);var $=function(x,T,S,H){T===void 0&&(T=""),S===void 0&&(S=""),H===void 0&&(H="&"),i=H,u=T,c=new RegExp("\\".concat(u,"\\b"),"g");var B=x.replace(wx,""),C=Qb(S||T?"".concat(S," ").concat(T," { ").concat(B," }"):B);g.namespace&&(C=rg(C,g.namespace));var D=[];return ru(C,Kb(y.concat(Wb(function(U){return D.push(U)})))),D};return $.hash=v.length?v.reduce(function(x,T){return T.name||Ll(15),Jn(x,T.name)},K0).toString():"",$}var Mx=new ng,Qs=Tx(),ig=jl.createContext({shouldForwardProp:void 0,styleSheet:Mx,stylis:Qs});ig.Consumer;jl.createContext(void 0);function Up(){return h.useContext(ig)}var og=function(){function a(i,u){var c=this;this.inject=function(s,d){d===void 0&&(d=Qs);var g=c.name+d.hash;s.hasNameForId(c.id,g)||s.insertRules(c.id,g,d(c.rules,g,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=u,Sf(this,function(){throw Ll(12,String(c.name))})}return a.prototype.getName=function(i){return i===void 0&&(i=Qs),this.name+i.hash},a}(),Cx=function(a){return a>="A"&&a<="Z"};function kp(a){for(var i="",u=0;u<a.length;u++){var c=a[u];if(u===1&&c==="-"&&a[0]==="-")return a;Cx(c)?i+="-"+c.toLowerCase():i+=c}return i.startsWith("ms-")?"-"+i:i}var ug=function(a){return a==null||a===!1||a===""},cg=function(a){var i,u,c=[];for(var s in a){var d=a[s];a.hasOwnProperty(s)&&!ug(d)&&(Array.isArray(d)&&d.isCss||fn(d)?c.push("".concat(kp(s),":"),d,";"):Ei(d)?c.push.apply(c,Si(Si(["".concat(s," {")],cg(d),!1),["}"],!1)):c.push("".concat(kp(s),": ").concat((i=s,(u=d)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||i in Ib||i.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function cn(a,i,u,c){if(ug(a))return[];if(xf(a))return[".".concat(a.styledComponentId)];if(fn(a)){if(!fn(d=a)||d.prototype&&d.prototype.isReactComponent||!i)return[a];var s=a(i);return cn(s,i,u,c)}var d;return a instanceof og?u?(a.inject(u,c),[a.getName(c)]):[a]:Ei(a)?cg(a):Array.isArray(a)?Array.prototype.concat.apply(gu,a.map(function(g){return cn(g,i,u,c)})):[a.toString()]}function Ax(a){for(var i=0;i<a.length;i+=1){var u=a[i];if(fn(u)&&!xf(u))return!1}return!0}var Ox=W0(pu),Dx=function(){function a(i,u,c){this.rules=i,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&Ax(i),this.componentId=u,this.baseHash=Jn(Ox,u),this.baseStyle=c,ng.registerId(u)}return a.prototype.generateAndInjectStyles=function(i,u,c){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))s=rn(s,this.staticRulesId);else{var d=Ps(cn(this.rules,i,u,c)),g=Vs(Jn(this.baseHash,d)>>>0);if(!u.hasNameForId(this.componentId,g)){var b=c(d,".".concat(g),void 0,this.componentId);u.insertRules(this.componentId,g,b)}s=rn(s,g),this.staticRulesId=g}else{for(var v=Jn(this.baseHash,c.hash),m="",y=0;y<this.rules.length;y++){var $=this.rules[y];if(typeof $=="string")m+=$;else if($){var x=Ps(cn($,i,u,c));v=Jn(v,x+y),m+=x}}if(m){var T=Vs(v>>>0);u.hasNameForId(this.componentId,T)||u.insertRules(this.componentId,T,c(m,".".concat(T),void 0,this.componentId)),s=rn(s,T)}}return s},a}(),$i=jl.createContext(void 0);$i.Consumer;function Ef(){var a=h.useContext($i);if(!a)throw Ll(18);return a}function Bx(a){var i=jl.useContext($i),u=h.useMemo(function(){return function(c,s){if(!c)throw Ll(14);if(fn(c)){var d=c(s);return d}if(Array.isArray(c)||typeof c!="object")throw Ll(8);return s?Bt(Bt({},s),c):c}(a.theme,i)},[a.theme,i]);return a.children?jl.createElement($i.Provider,{value:u},a.children):null}var Hs={};function Rx(a,i,u){var c=xf(a),s=a,d=!zs(a),g=i.attrs,b=g===void 0?gu:g,v=i.componentId,m=v===void 0?function(ee,Z){var W=typeof ee!="string"?"sc":Dp(ee);Hs[W]=(Hs[W]||0)+1;var I="".concat(W,"-").concat(J0(pu+W+Hs[W]));return Z?"".concat(Z,"-").concat(I):I}(i.displayName,i.parentComponentId):v,y=i.displayName,$=y===void 0?function(ee){return zs(ee)?"styled.".concat(ee):"Styled(".concat(rx(ee),")")}(a):y,x=i.displayName&&i.componentId?"".concat(Dp(i.displayName),"-").concat(i.componentId):i.componentId||m,T=c&&s.attrs?s.attrs.concat(b).filter(Boolean):b,S=i.shouldForwardProp;if(c&&s.shouldForwardProp){var H=s.shouldForwardProp;if(i.shouldForwardProp){var B=i.shouldForwardProp;S=function(ee,Z){return H(ee,Z)&&B(ee,Z)}}else S=H}var C=new Dx(u,x,c?s.componentStyle:void 0);function D(ee,Z){return function(W,I,fe){var ne=W.attrs,me=W.componentStyle,Pe=W.defaultProps,He=W.foldedComponentIds,We=W.styledComponentId,vt=W.target,Ae=jl.useContext($i),L=Up(),F=W.shouldForwardProp||L.shouldForwardProp,ae=tx(I,Ae,Pe)||lr,J=function(ue,re,Ye){for(var ve,Je=Bt(Bt({},re),{className:void 0,theme:Ye}),Mt=0;Mt<ue.length;Mt+=1){var Ge=fn(ve=ue[Mt])?ve(Je):ve;for(var De in Ge)Je[De]=De==="className"?rn(Je[De],Ge[De]):De==="style"?Bt(Bt({},Je[De]),Ge[De]):Ge[De]}return re.className&&(Je.className=rn(Je.className,re.className)),Je}(ne,I,ae),E=J.as||vt,R={};for(var Q in J)J[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&J.theme===ae||(Q==="forwardedAs"?R.as=J.forwardedAs:F&&!F(Q,E)||(R[Q]=J[Q]));var X=function(ue,re){var Ye=Up(),ve=ue.generateAndInjectStyles(re,Ye.styleSheet,Ye.stylis);return ve}(me,J),te=rn(He,We);return X&&(te+=" "+X),J.className&&(te+=" "+J.className),R[zs(E)&&!F0.has(E)?"class":"className"]=te,fe&&(R.ref=fe),h.createElement(E,R)}(U,ee,Z)}D.displayName=$;var U=jl.forwardRef(D);return U.attrs=T,U.componentStyle=C,U.displayName=$,U.shouldForwardProp=S,U.foldedComponentIds=c?rn(s.foldedComponentIds,s.styledComponentId):"",U.styledComponentId=x,U.target=c?s.target:a,Object.defineProperty(U,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ee){this._foldedDefaultProps=c?function(Z){for(var W=[],I=1;I<arguments.length;I++)W[I-1]=arguments[I];for(var fe=0,ne=W;fe<ne.length;fe++)Xs(Z,ne[fe],!0);return Z}({},s.defaultProps,ee):ee}}),Sf(U,function(){return".".concat(U.styledComponentId)}),d&&ag(U,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),U}function qp(a,i){for(var u=[a[0]],c=0,s=i.length;c<s;c+=1)u.push(i[c],a[c+1]);return u}var Yp=function(a){return Object.assign(a,{isCss:!0})};function V(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];if(fn(a)||Ei(a))return Yp(cn(qp(gu,Si([a],i,!0))));var c=a;return i.length===0&&c.length===1&&typeof c[0]=="string"?cn(c):Yp(cn(qp(c,i)))}function Zs(a,i,u){if(u===void 0&&(u=lr),!i)throw Ll(1,i);var c=function(s){for(var d=[],g=1;g<arguments.length;g++)d[g-1]=arguments[g];return a(i,u,V.apply(void 0,Si([s],d,!1)))};return c.attrs=function(s){return Zs(a,i,Bt(Bt({},u),{attrs:Array.prototype.concat(u.attrs,s).filter(Boolean)}))},c.withConfig=function(s){return Zs(a,i,Bt(Bt({},u),s))},c}var sg=function(a){return Zs(Rx,a)},Y=sg;F0.forEach(function(a){Y[a]=sg(a)});function fg(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];var c=Ps(V.apply(void 0,Si([a],i,!1))),s=J0(c);return new og(s,c)}const zx={"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F5F5F6","Neutral/Neutral 10":"#EAEBEC","Neutral/Neutral 20":"#D7D8DA","Neutral/Neutral 30":"#B2B5B8","Neutral/Neutral 40":"#9EA0A4","Neutral/Neutral 50":"#74767B","Neutral/Neutral 60":"#67696D","Neutral/Neutral 70":"#515256","Neutral/Neutral 80":"#37383B","Neutral/Neutral 90":"#252629","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#131314","Special/Dark Static Neutral 05":"#1B1C1D","Special/Dark Static Neutral 10":"#252627","Special/Dark Static Neutral 20":"#3B3C3E","Special/Dark Static Neutral 30":"#515357","Special/Dark Static Neutral 50":"#82868B","Special/Dark Static Neutral 70":"#A8ABAF","Special/Dark Static Neutral 80":"#C9CACD","Special/Dark Static Neutral 90":"#E3E5E7","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#0000009A","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Opacity/Neutral 4":"#0000000A","Opacity/Neutral 8":"#00000014","Opacity/Neutral 12":"#0000001F","Opacity/Neutral 16":"#00000029","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},Hx={"Shadow 02":`
  box-shadow: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.28);
`,"Shadow 04":`
  box-shadow: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.14), 0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12);
`,"Shadow 08":`
  box-shadow: 0px 3.2px 9px 0px rgba(0, 0, 0, 0.16), 0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.10), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);
`,"Shadow 12":`
  box-shadow: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.04), 0px 4px 18px 0px rgba(0, 0, 0, 0.08), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.10);
`,"Shadow 16":`
  box-shadow: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.12), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.08);
`,"Shadow Stroke":`
  box-shadow: 0px -1px 0px 0px #D6D8DD inset;
`},jx={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96},Gp={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},imageViewer:{flipHorizontallyText:"Flip horizontally",flipVerticallyText:"Flip vertically",rotateLeftText:"Rotate left",rotateRightText:"Rotate right",zoomInText:"Zoom in",zoomOutText:"Zoom out",backwardText:"Back",forwardText:"Forward"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:(a,i)=>`Page ${a} of ${i}`,pageSizeSelectLabel:(a,i)=>`Entries ${a} out of ${i}`,itemRangeText:(a,i,u)=>`${a}–${i}  entries out of ${u}`,pageRangeText:a=>`from ${a} ${a===1?"page":"pages"}`,backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:(a,i,u)=>`${a}–${i} entries out of ${u}`},progressStepper:{renderNextStepName:a=>`Next - ${a}`,stepName:["step","steps"],progressText:(a,i,u)=>`${a} from ${i} ${u}`},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"},textArea:{copyTextMessage:"Copy text",copiedMessage:"Copied"}},Lx={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},imageViewer:{flipHorizontallyText:"Отразить по горизонтали",flipVerticallyText:"Отразить по вертикали",rotateLeftText:"Повернуть влево",rotateRightText:"Повернуть вправо",zoomOutText:"Уменьшить",zoomInText:"Увеличить",backwardText:"Назад",forwardText:"Вперед"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:(a,i)=>`Страница ${a} из ${i}`,pageSizeSelectLabel:(a,i)=>`Записей ${a} из ${i}`,itemRangeText:(a,i,u)=>`${a}–${i} записей из ${u}`,pageRangeText:a=>`из ${a} ${a===1?"страницы":"страниц"}`,backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:(a,i,u)=>`${a}–${i} записей из ${u}`},progressStepper:{renderNextStepName:a=>`Далее - ${a}`,stepName:["шаг","шагов"],progressText:(a,i,u)=>`${a} из ${i} ${u}`},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"},textArea:{copyTextMessage:"Копировать текст",copiedMessage:"Скопировано"}},en:Gp,"en-US":{...Gp,firstDayOfWeek:0}},_e=Ux();function Ux(){return{"Main/XXL":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 42px);
      line-height: var(--admiral-line-height-Header_HL3, 52px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XL":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 36px);
      line-height: var(--admiral-line-height-Header_H1, 44px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/L":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 500);
      font-size: var(--admiral-font-size-Header_H2, 32px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/M":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/S":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS-bold":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L-bold":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/M":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S-bold":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 500);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/XS":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/M":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/S":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/XS":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL1":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL1, 550);
      font-size: var(--admiral-font-size-Header_HL1, 72px);
      line-height: var(--admiral-line-height-Header_HL1, 80px);
      /* or 111% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL2":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL2, 550);
      font-size: var(--admiral-font-size-Header_HL2, 56px);
      line-height: var(--admiral-line-height-Header_HL2, 64px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL3":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 48px);
      line-height: var(--admiral-line-height-Header_HL3, 56px);
      /* or 117% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H1":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 40px);
      line-height: var(--admiral-line-height-Header_H1, 48px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H2":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 550);
      font-size: var(--admiral-font-size-Header_H2, 34px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      /* or 118% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H3":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      /* or 129% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H4":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H4, 550);
      font-size: var(--admiral-font-size-Header_H4, 24px);
      line-height: var(--admiral-line-height-Header_H4, 32px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H5":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      /* or 140% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H6":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 1":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 2":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 3":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Long":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Short":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      /* or 125% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Long":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Short":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 1":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 2":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 1":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 2":V`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption2, 400);
      font-size: var(--admiral-font-size-Caption_Caption2, 10px);
      line-height: var(--admiral-line-height-Caption_Caption2, 12px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `}}const vu={color:zx,shadow:Hx,zIndex:jx,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:Lx,typography:_e,fontFamily:"'VTB Group UI', sans-serif"},kx="Neutral/Neutral 90";function nr(a){switch(a.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function hr(a){switch(a.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function Vp(a){return a!==null&&!Array.isArray(a)&&typeof a=="object"}const uu={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let a=0;a<24;a+=1)uu[112+a]="F"+(a+1);for(let a=0;a<26;a+=1){let i=a+65;uu[i]=[String.fromCharCode(i+32),String.fromCharCode(i)]}const P={codes:uu,getCode(a){return Vp(a)?a.keyCode||a.which||this[a.key]:this[a]},getKey(a){const i=Vp(a);if(i&&a.key)return a.key;let u=uu[i?a.keyCode||a.which:a];return Array.isArray(u)&&(u=i?u[a.shiftKey?1:0]:u[0]),u},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};P.Spacebar=P[" "],P.Digit0=P[0],P.Digit1=P[1],P.Digit2=P[2],P.Digit3=P[3],P.Digit4=P[4],P.Digit5=P[5],P.Digit6=P[6],P.Digit7=P[7],P.Digit8=P[8],P.Digit9=P[9],P.Tilde=P["~"],P.GraveAccent=P["`"],P.ExclamationPoint=P["!"],P.AtSign=P["@"],P.PoundSign=P["#"],P.PercentSign=P["%"],P.Caret=P["^"],P.Ampersand=P["&"],P.PlusSign=P["+"],P.MinusSign=P["-"],P.EqualsSign=P["="],P.DivisionSign=P["/"],P.MultiplicationSign=P["*"],P.Comma=P[","],P.Decimal=P["."],P.Colon=P[":"],P.Semicolon=P[";"],P.Pipe=P["|"],P.BackSlash=P["\\"],P.QuestionMark=P["?"],P.SingleQuote=P["'"],P.DoubleQuote=P['"'],P.LeftCurlyBrace=P["{"],P.RightCurlyBrace=P["}"],P.LeftParenthesis=P["("],P.RightParenthesis=P[")"],P.LeftAngleBracket=P["<"],P.RightAngleBracket=P[">"],P.LeftSquareBracket=P["["],P.RightSquareBracket=P["]"];var Pp;function Fs(){return Fs=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},Fs.apply(null,arguments)}var qx=function(a){return h.createElement("svg",Fs({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),Pp||(Pp=h.createElement("path",{fill:"#74767B",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};function $f(a,i){mr(a,i,"data-container",!0)}function dg(a,i){mr(a,i,"data-field",!1)}function Yx(a){const i={};return mr(a,i,"data-dropdown-container",!0),i}function hg(a){const i={};return mr(a,i,"data-menu",!0),i}function mr(a,i,u,c){Object.keys(a).forEach(s=>{typeof s=="string"&&s.startsWith(u)&&(i[s]=a[s],c&&delete a[s])})}const Gx=Y(qx)`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${a=>a.$isOpen?180:0}deg);
  & *[fill^='#'] {
    fill: ${({appearance:a,theme:i})=>a==="white"?`var(--admiral-color-Special_StaticWhite, ${i.color["Special/Static White"]})`:`var(--admiral-color-Neutral_Neutral50, ${i.color["Neutral/Neutral 50"]})`};
  }

  &:hover *[fill^='#'] {
    fill: ${a=>a.appearance==="white"?"":`var(--admiral-color-Primary_Primary70, ${a.theme.color["Primary/Primary 70"]})`};
  }

  &[data-loading] {
    pointer-events: none;
  }

  &[data-disabled] {
    pointer-events: none;

    *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,yu=a=>{let i=a;return i=i.replace("box-shadow: ",""),i=i.replace(";",""),i},Vx=(a,i)=>{return(u=a,Object.keys(u)).some(c=>a[c]!==i[c]);var u};function mg(a,i){const u={};return{observe(){u.rafId&&cancelAnimationFrame(u.rafId);const c=()=>{if(u.isObserving){const{scrollHeight:s,scrollLeft:d,scrollTop:g,scrollWidth:b}=a,{bottom:v,height:m,left:y,right:$,top:x,width:T,x:S,y:H}=a.getBoundingClientRect(),B={bottom:v,height:m,left:y,right:$,top:x,width:T,x:S||y,y:H||x,scrollHeight:s,scrollLeft:d,scrollTop:g,scrollWidth:b};Vx(B,u.rect||{})&&(u.rect=B,i(B)),u.rafId=requestAnimationFrame(c)}};u.rafId=requestAnimationFrame(c),u.isObserving=!0},unobserve(){u.rafId&&cancelAnimationFrame(u.rafId),u.isObserving&&(u.isObserving=!1)}}}const Px=Y.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:a})=>a.zIndex.dropdown});
`,Nf=({targetElement:a,rootRef:i,fullContainerWidth:u,...c})=>{const s=h.useRef(null);return h.useEffect(()=>{const d=s.current;if(d&&a){const g=mg(a,b=>{if(b){const{x:v,y:m,height:y,width:$}=b,{style:x}=d;x.top=`${m}px`,x.left=u?"0px":`${v}px`,x.height=`${y}px`,x.width=u?"100%":`${$}px`}});return g.observe(),()=>{g.unobserve()}}},[a,u]),Rb.createPortal(_.jsx(Px,{ref:s,...c}),i?.current||document.body)};function Xx(a,i){const u=h.useRef(null),c=h.useRef(a);return h.useEffect(()=>{c.current=a},[a]),h.useEffect(()=>(u.current=setInterval(()=>c.current(),i),()=>clearInterval(u.current||0)),[i]),u}function ea(...a){return i=>{a.forEach(u=>{u&&(typeof u=="function"?u(i):u.current=i)})}}const bu=h.createContext({});function pg(a){const{dropdowns:i=[],addDropdown:u,removeDropdown:c,activateMenu:s,deactivateMenu:d,currentActiveMenu:g}=h.useContext(bu),b=i.indexOf(a);return{addDropdown:u,removeDropdown:c,dropdowns:b>-1?i.slice(b+1,i.length):[],activateMenu:s,deactivateMenu:d,currentActiveMenu:g}}const Qx=(a,i)=>!i.some(u=>u.current&&u.current.contains(a.target)),Zx=(a,i,u)=>{const c=a.bottom-a.top+8,s=i.top>=c,d=u-i.bottom>=c,g=i.top>=0&&i.bottom<=u,b=i.bottom<=0,v=i.top>=u,m=i.top<0&&0<i.bottom&&i.bottom<u,y=0<i.top&&i.top<u&&i.bottom>u;if(g){if(!s&&!d)return{upward:!1,translateY:u-i.bottom-c-16+"px"};if(s&&d)return{upward:!1,translateY:"0"};if(!s&&d)return{upward:!1,translateY:"0"};if(s&&!d)return{upward:!0,translateY:"0"}}else{if(b)return{upward:!1,translateY:0-i.bottom+8+"px"};if(v)return{upward:!0,translateY:u-i.top-8+"px"};if(m)return d?{upward:!1,translateY:"0"}:{upward:!1,translateY:0-i.bottom+8+"px"};if(y)return s?{upward:!0,translateY:"0"}:{upward:!0,translateY:""+(u-i.top-8)}}return{upward:!1,translateY:"0"}},Fx=(a,i,u)=>{const c=a.right-a.left,s=i.left>=0&&i.right<=u,d=i.right<=0,g=i.left>=u,b=i.left<0&&0<i.right&&i.right<u,v=i.right>u&&0<i.left&&i.left<u;if(s){const m=u-i.left>=c,y=i.right>=c,$=c>i.width;if(!y&&!m)return{align:"flex-end",translateX:u-i.right-16+"px"};if(y&&m)return{align:"flex-end",translateX:"0"};if($&&!y&&m)return{align:"flex-start",translateX:"0"};if($&&!m&&y)return{align:"flex-end",translateX:"0"}}else{if(d||b)return{align:"flex-start",translateX:0-i.left+16+"px"};if(g||v)return{align:"flex-end",translateX:u-i.right-16+"px"}}return{align:"",translateX:"0"}},Kx=Y.div`
  pointer-events: initial;
  margin: 8px 0;
  flex: 0 0 auto;
  ${a=>a.$alignSelf?`align-self: ${a.$alignSelf};`:""};
  max-width: calc(100vw - 32px);
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;

  &:focus-visible {
    border: 2px solid blue;
  }

  ${a=>a.$dropContainerCssMixin}
`,Wx=Y.div`
  pointer-events: none;
  height: 100%;
  flex: 0 0 auto;
`,Jx=Y(Nf)`
  display: flex;
  flex-direction: ${a=>a.$reverse?"column-reverse":"column"};
  flex-wrap: nowrap;
`,Ix=()=>null,_f=h.forwardRef(({targetElement:a,onClickOutside:i=Ix,className:u="",alignSelf:c,dropContainerCssMixin:s,...d},g)=>{const b=h.useRef(null),[v,m]=h.useState(!1),{rootRef:y}=h.useContext(bu);h.useLayoutEffect(()=>{b.current!==document.activeElement&&b?.current?.focus()},[]);const $=h.useCallback(()=>{const S=b.current;if(S&&a){const H=S.getBoundingClientRect(),B=a.getBoundingClientRect(),C=globalThis.innerHeight,D=globalThis.innerWidth,{upward:U,translateY:ee}=Zx(H,B,C);if(v!==U&&m(U),c&&c!=="auto")S.style.transform=`translateY(${ee})`;else{const{align:Z,translateX:W}=Fx(H,B,D);S.style.transform=`translate(${W}, ${ee})`,S.style.alignSelf=Z}}},[v,a]);Xx($,100),h.useEffect(()=>{b.current&&(b.current.style.opacity="1")},[]);const[x,T]=h.useState(!1);return h.useEffect(()=>{function S(){T(!0)}return document.addEventListener("mousedown",S,!0),document.addEventListener("touchstart",S,!0),()=>{document.removeEventListener("mousedown",S,!0),document.removeEventListener("touchstart",S,!0)}},[]),h.useEffect(()=>{function S(H){i(H)}if(x)return document.addEventListener("mouseup",S),document.addEventListener("touchend",S),()=>{document.removeEventListener("mouseup",S),document.removeEventListener("touchend",S)}},[x]),_.jsx(_.Fragment,{children:_.jsxs(Jx,{targetElement:a,$reverse:v,rootRef:y,onMouseDown:()=>T(!1),children:[_.jsx(Wx,{}),_.jsx(Kx,{ref:ea(g,b),...d,className:u+" dropdown-container",$alignSelf:c,$dropContainerCssMixin:s})]})})});_f.displayName="DropdownContainer";const eS=Y(_f)`
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>yu(a.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${a=>hr(a.theme.shape)});
  overflow: hidden;
  width: max-content;
  background: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
`;eS.displayName="StyledDropdownContainer";function tS(...a){return i=>a.forEach(u=>function(c,s){typeof c=="function"?c(s):c!=null&&(c.current=s)}(u,i))}function Ks(...a){return h.useCallback(tS(...a),a)}function wf(a){return h.forwardRef(a)}const Tf=V`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,aS=Y.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,lS=Y.div`
  ${Tf}
`,nS=Y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 10px;
`,rS=Y.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 10px;
`,iS=Y.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  border-block: 4px solid transparent;
`,oS=Y.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-inline: 4px solid transparent;
`,uS=Y.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${a=>a.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,cS=Y.div`
  pointer-events: all;
  position: relative;
  height: 6px;
  border-radius: 6px;
  background-color: ${a=>a.theme.color["Opacity/Neutral 16"]};
  width: var(${"--horizontal-thumb-width"}, 20px);
`,sS=Y.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${a=>a.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,fS=Y.div`
  pointer-events: all;
  position: relative;
  width: 6px;
  border-radius: 6px;
  background-color: ${a=>a.theme.color["Opacity/Neutral 16"]};
  height: var(${"--vertical-thumb-height"}, 20px);
`,dS=wf(({children:a,verticalScrollProps:i,horizontalScrollProps:u,minThumbSize:c=20,contentBlockProps:s={},...d},g)=>{const b=h.useMemo(()=>s.id?s.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[s.id]),[v,m]=h.useState(null),y=Ks(s.ref,$=>m($));return _.jsxs(aS,{ref:g,...d,children:[_.jsx(lS,{...s,id:b,ref:y,children:a}),_.jsx(gg,{contentNode:v,verticalScrollProps:i,horizontalScrollProps:u,minThumbSize:c})]})}),gg=({verticalScrollProps:a={},horizontalScrollProps:i={},contentNode:u,minThumbSize:c=20})=>{const s=h.useMemo(()=>u?.id?u?.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[u?.id]),[d,g]=h.useState(null),[b,v]=h.useState(null),[m,y]=h.useState(null),[$,x]=h.useState(null),[T,S]=h.useState(null),[H,B]=h.useState(null),[C,D]=h.useState(!1),[U,ee]=h.useState(!1),[Z,W]=h.useState(0),[I,fe]=h.useState(0),[ne,me]=h.useState(0),[Pe,He]=h.useState(0),[We,vt]=h.useState(0),[Ae,L]=h.useState(0),F=Ks(a.ref,J=>g(J)),ae=Ks(i.ref,J=>y(J));return h.useLayoutEffect(()=>{if(u&&T&&H&&d&&m&&b&&$){const{observe:J,unobserve:E}=mg(u,R=>{if(R){const Q=function($t){const{clientHeight:Xe,scrollHeight:Lt}=$t;return Lt-Xe>=1}(u),X=function($t){const{clientWidth:Xe,scrollWidth:Lt}=$t;return Lt-Xe>=1}(u),te=Math.min(Math.max(0,R.scrollTop),R.scrollHeight-R.height),ue=Math.min(Math.max(0,R.scrollLeft),R.scrollWidth-R.width);u.style.setProperty("--vertical-content-scroll",`${te}px`),u.style.setProperty("--horizontal-content-scroll",`${ue}px`),d.style.setProperty("display",Q?null:"none"),d.style.setProperty("bottom",X?"10px":null),m.style.setProperty("display",X?null:"none"),m.style.setProperty("right",Q?"10px":null);const re=function($t,Xe){const{clientHeight:Lt,scrollHeight:zt}=$t,{clientHeight:ht}=Xe;return Math.max(Math.round(Lt*ht/zt),c)}(u,b),Ye=function($t,Xe){const{clientWidth:Lt,scrollWidth:zt}=$t,{clientWidth:ht}=Xe;return Math.max(Math.round(Lt*ht/zt),c)}(u,$);T.style.setProperty("--vertical-thumb-height",`${re}px`),H.style.setProperty("--horizontal-thumb-width",`${Ye}px`);const{scrollTop:ve,scrollLeft:Je,scrollHeight:Mt,scrollWidth:Ge}=u,{clientHeight:De}=b,{clientWidth:Rt}=$,Ta=Math.round(Math.min(ve/Mt*De,De-re)),qa=Math.round(Math.min(Je/Ge*Rt,Rt-Ye));T.style.top=`${Ta}px`,H.style.left=`${qa}px`}});return J(),E}},[u,T,H,d,m,b,$]),h.useEffect(()=>{function J(R){R.preventDefault(),R.stopPropagation(),C&&D(!1),U&&ee(!1)}function E(R){if(u){if(R.preventDefault(),R.stopPropagation(),C){const{scrollHeight:Q,clientHeight:X}=u,te=(R.clientY-Z)*(Q/X),ue=Math.round(Math.min(ne+te,Q-X));u.scrollTop=ue}if(U){const{scrollWidth:Q,clientWidth:X}=u,te=(R.clientX-I)*(Q/X),ue=Math.round(Math.min(Pe+te,Q-X));u.scrollLeft=ue}}}if(C||U)return document.addEventListener("mousemove",E),document.addEventListener("mouseup",J),()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)}},[u,C,U,ne,Pe,Z,I]),h.useEffect(()=>{if(u){const{scrollHeight:J,clientHeight:E}=u,R=Math.round(We*J-E/2);u.scrollTo({top:R,behavior:"smooth"})}},[We]),h.useEffect(()=>{if(u){const{scrollWidth:J,clientWidth:E}=u,R=Math.round(Ae*J-E/2);u.scrollTo({left:R,behavior:"smooth"})}},[Ae]),h.useEffect(()=>{document.body.style.setProperty("cursor",C||U?"grabbing":null)},[C,U]),_.jsxs(_.Fragment,{children:[_.jsxs(nS,{...a,ref:F,role:"scrollbar","aria-controls":s,children:[_.jsx(sS,{onClick:function(J){if(J.preventDefault(),J.stopPropagation(),u){const{clientHeight:E}=u,{top:R}=u.getBoundingClientRect();vt((J.clientY-R)/E)}}}),_.jsx(iS,{ref:J=>v(J),children:_.jsx(fS,{ref:S,onMouseDown:function(J){J.preventDefault(),J.stopPropagation(),W(J.clientY),u&&me(u.scrollTop),D(!0)},style:{cursor:C?"grabbing":"grab"}})})]}),_.jsxs(rS,{...i,ref:ae,role:"scrollbar","aria-controls":s,children:[_.jsx(uS,{onClick:function(J){if(J.preventDefault(),J.stopPropagation(),u){const{clientWidth:E}=u,{left:R}=u.getBoundingClientRect();L((J.clientX-R)/E)}}}),_.jsx(oS,{ref:J=>x(J),children:_.jsx(cS,{ref:B,onMouseDown:function(J){J.preventDefault(),J.stopPropagation(),fe(J.clientX),u&&He(u.scrollLeft),ee(!0)},style:{cursor:U?"grabbing":"grab"}})})]})]})},hS=V`
  ${({$dimension:a})=>a==="s"?_e["Body/Body 2 Long"]:_e["Body/Body 1 Long"]}
  ul[data-dimension='s'] & {
    ${_e["Body/Body 2 Long"]}
  }
`,mS=V`
  color: ${({theme:a,$disabled:i})=>i?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`};
`,pS=V`
  background: ${({theme:a,$selected:i,$preselected:u,$hovered:c})=>c?`var(--admiral-color-Opacity_Hover, ${a.color["Opacity/Hover"]})`:u?`var(--admiral-color-Opacity_Press, ${a.color["Opacity/Press"]})`:i?`var(--admiral-color-Opacity_Focus, ${a.color["Opacity/Focus"]})`:`var(--admiral-color-Special_ElevatedBG, ${a.color["Special/Elevated BG"]})`};
`,gS=V`
  padding: ${({$dimension:a})=>{switch(a){case"l":default:return"12px 16px";case"m":return"8px 16px";case"s":return"6px 12px"}}};
  ul[data-dimension='m'] && {
    padding: 8px 16px;
  }
  ul[data-dimension='s'] && {
    padding: 6px 12px;
  }
`;var Xp;function Ws(){return Ws=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},Ws.apply(null,arguments)}var vS=function(a){return h.createElement("svg",Ws({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),Xp||(Xp=h.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};const yS=Y(vS)`
  transition: all 0.3s;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 0 0 0 8px;
  [data-icon='left'] & {
    margin: 0 8px 0 0;
  }
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }
  [data-disabled='true'] & {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
  [data-dimension='s'] & {
    width: 20px;
    height: 20px;
  }
`,bS=a=>{a.preventDefault(),a.stopPropagation()},Mf=h.forwardRef(({children:a,expandIcon:i=_.jsx(yS,{}),hasSubmenu:u,onHover:c,disabled:s,readOnly:d,hovered:g,dimension:b="l",selected:v=!1,preselected:m=!1,selfRef:y,onMouseDown:$,onLeave:x,containerRef:T,...S},H)=>{const B=s?bS:$,C=y?ea(H,y):H;return _.jsxs(xS,{ref:C,$dimension:b,$preselected:m,$selected:v,$hovered:g,"data-preselected":m,"data-hovered":g,"data-disabled":s,"data-readonly":d,"data-dimension":b,onMouseEnter:D=>{c?.(D),S.onMouseEnter?.(D)},onMouseLeave:D=>{x?.(D),S.onMouseLeave?.(D)},onMouseMove:D=>{c?.(D),S.onMouseMove?.(D)},onMouseDown:B,...S,children:[h.Children.toArray(a).map((D,U)=>typeof D=="string"?_.jsx(SS,{children:D},D+U):D),u&&i]})});Mf.displayName="MenuItem";const xS=Y.div`
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  justify-content: space-between;
  outline: none;
  white-space: pre;
  margin: 0;
  cursor: pointer;
  box-sizing: border-box;
  ${gS}
  ${hS}
  ${mS}
  ${pS}

  &&[data-disabled='true'] {
    cursor: not-allowed;
    background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    && *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
    && input[type='checkbox'] + * [fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
    }
  }

  &&[data-readonly='true'] {
    cursor: default;
  }
`,SS=Y.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;function Cf(a){const i=h.useRef();return h.useEffect(()=>{i.current=a}),i.current}const Qp=Y.div`
  display: flex;
  flex: 0 0 auto;
`,ES=({scrollContainerRef:a,itemHeight:i,rowCount:u=6,aheadItemsCount:c=3,model:s,activeId:d,selected:g,onRenderItem:b})=>{const[v,m]=h.useState(0),[y,$]=h.useState({startIndex:0,endIndex:u,topPadding:"",bottomPadding:"",needAddListener:!1}),x=Cf({activeId:d}),T=h.useCallback(B=>{requestAnimationFrame(()=>{B.target&&m(B.target.scrollTop)})},[a]);h.useEffect(()=>{const B=a.current;return m(B?.scrollTop||0),B?.addEventListener("scroll",T),()=>B?.removeEventListener("scroll",T)},[T]),h.useEffect(()=>{y.needAddListener&&(setTimeout(()=>a?.current?.addEventListener("scroll",T)),$({...y,needAddListener:!1}))},[y,a]);const S=h.useCallback(B=>{const C=s.length,D=Math.max(0,B);let U=u+2*c;return U=Math.min(C-D,U),{startIndex:D,endIndex:D+U,topPadding:D*i+"px",bottomPadding:(C-D-U)*i+"px"}},[i,c,s,u]);h.useEffect(()=>{const B=Math.floor(v/i-c),C={...S(B),needAddListener:!1};$(C)},[v,S]),h.useEffect(()=>{if(!d||!x||x.activeId===d)return;const B=s.findIndex(C=>C.id===d);B!==-1&&(B<y.startIndex||B>y.endIndex)&&(a?.current?.removeEventListener("scroll",T),$({...S(B),needAddListener:!0}))},[d,y,S,a]);const H=h.useMemo(()=>[...s].slice(y.startIndex,y.endIndex).map((B,C)=>b?.(B,C)),[s,d,g,y]);return _.jsxs(_.Fragment,{children:[_.jsx(Qp,{style:{minHeight:y.topPadding}}),H,_.jsx(Qp,{style:{minHeight:y.bottomPadding}})]})},vg=(a,i)=>{const u=h.useCallback(c=>{a.every(s=>s.current&&!s.current.contains(c.target))&&i(c)},[i,a]);h.useEffect(()=>(document.addEventListener("mousedown",u,!0),document.addEventListener("touchstart",u),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("touchstart",u)}),[u])},$S=(a,i)=>{let u,c=!1,s=!1;return[(...d)=>{if(s||c)return;const g=a(...d);return c=!0,u=setTimeout(()=>{c=!1},i),g},()=>{s=!0,clearTimeout(u)}]};function NS(a,i,u){const c=a.getBoundingClientRect(),s=i.getBoundingClientRect(),d=document.documentElement.clientWidth-c.right>s.width,g=c.left>s.width,b=u==="right"?!d&&g?"left":"right":!g&&d?"right":"left";return document.documentElement.clientHeight-c.top>s.height-1?{position:`${b}Bottom`}:{position:b,bottomOffset:8-(document.documentElement.clientHeight-c.top-s.height)}}const yg=(a,i)=>{for(let u=0;u<a.length;u++){const c=a[u];if(c.id===i)return c;if(c.subItems&&c.subItems.length>0){const s=yg(c.subItems,i);if(s)return s}}},bg=(a,i)=>!!a.subItems&&a.subItems.some(u=>i.includes(u.id)||bg(u,i)),Zp=a=>Array.isArray(a)?[...a]:[a],_S=Y.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`,wS=Y(Nf)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:a})=>a?`flex-direction: ${a};`:"flex-direction: column;"}
`,TS=Y.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,MS=Y.div`
  position: relative;
  align-self: flex-start;
`,CS=Y.div`
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>yu(a.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${a=>hr(a.theme.shape)});
  overflow: hidden;
  box-sizing: border-box;
`,xg=({targetElement:a,children:i,onClickOutside:u,defaultRenderDirection:c="right",...s})=>{const{rootRef:d}=h.useContext(bu),g=h.useRef(null),[b,v]=h.useState(null),[m,y]=h.useState("row");h.useLayoutEffect(()=>{const[S,H]=$S(()=>{v({})},100);return addEventListener("resize",S),addEventListener("scroll",S),()=>{removeEventListener("resize",S),removeEventListener("scroll",S),H()}});const{addDropdown:$,removeDropdown:x,dropdowns:T}=pg(g);return h.useLayoutEffect(()=>($?.(g),()=>{x?.(g)}),[]),vg([g],S=>{a&&!a.contains(S.target)&&Qx(S,T)&&u?.(S)}),h.useLayoutEffect(()=>{const S=g.current;if(a&&S){const{position:H,bottomOffset:B=0}=NS(a,S,c);switch(H){case"right":y("row"),S.style.bottom=`${B}px`;break;case"left":y("row-reverse"),S.style.bottom=`${B}px`;break;case"rightBottom":default:y("row"),S.style.bottom="8px";break;case"leftBottom":y("row-reverse"),S.style.bottom="8px"}}},[a,b]),a&&_.jsx(_S,{children:_.jsxs(wS,{targetElement:a,rootRef:d,$flexDirection:m,fullContainerWidth:!1,children:[_.jsx(TS,{}),_.jsx(MS,{ref:g,...s,children:_.jsx(CS,{children:i})})]})})};xg.displayName="SubMenu";const Sg=a=>{switch(a){case"l":default:return 48;case"m":return 40;case"s":return 32}},AS=V`
  max-height: ${({$dimension:a,$rowCount:i})=>{return`min(calc(100vh - 16px), ${u=i,c=a,Sg(c)*u+16}px)`;var u,c}};
`,OS=Y.div`
  overflow: hidden;
  position: relative;

  padding: 0;
  ${a=>a.$hasTopPanel?"padding-top: 8px":""};
  ${a=>a.$hasBottomPanel?"padding-bottom: 8px":""};
  box-sizing: border-box;
  display: flex;

  flex-direction: column;
  align-items: stretch;
  pointer-events: initial;
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  max-width: calc(100vw - 32px);
  border-color: transparent;
  &:focus-visible {
    border: 0;
    outline: none;
  }
`,DS=Y(dS)`
  position: relative;
  ${a=>a.$hasTopPanel?"":"padding-top: 8px"};
  ${a=>a.$hasBottomPanel?"":"padding-bottom: 8px"};
  margin: 0;
  appearance: none;
  flex: 1 1 auto;
  border: none;
  box-sizing: border-box;
  ${AS};
  ${a=>a.$maxHeight?`max-height: ${a.$maxHeight}`:""};
`,Af=h.forwardRef(({model:a,defaultSelected:i,selected:u,preselected:c,active:s,onPreselectItem:d,onSelectItem:g,onDeselectItem:b,onActivateItem:v,renderTopPanel:m,renderBottomPanel:y,dimension:$="l",multiSelection:x=!1,disableSelectedOptionHighlight:T=!1,onForwardCycleApprove:S,onBackwardCycleApprove:H,containerRef:B,virtualScroll:C,rowCount:D=6,parentMenuRef:U,onCloseQuery:ee,defaultIsActive:Z=!0,subMenuRenderDirection:W,preventFocusSteal:I,maxHeight:fe,preselectedModeActive:ne=!1,onMenuKeyDown:me,disableSelectionOnSpace:Pe,disableSelectionOnEnter:He,...We},vt)=>{const Ae=ie=>{const ge=ie?a.findIndex(Ie=>Ie.id===ie):-1;let pe=ge<a.length-1?ge+1:0,je=!1;for(;(a[pe].disabled||a[pe].readOnly)&&!je;)pe=pe<a.length-1?pe+1:0,je=ge===-1?pe===0:pe===ge;return pe=!(ge>-1&&pe<ge)||!S||S()?pe:ge,a[pe].disabled||a[pe].readOnly?void 0:a[pe].id},L=a.length>0?Ae():void 0,[F,ae]=h.useState(i?Zp(i):[]),[J,E]=h.useState(L),[R,Q]=h.useState(L),X=h.useRef(null),te=h.useRef(null),[ue,re]=h.useState(null),[Ye,ve]=h.useState(!1),Je=h.useRef();h.useEffect(()=>{E(L)},[a]);const Mt=T?[]:u===void 0?F:Zp(u),Ge=s===void 0?J:s,De=ne?c===void 0?R:c:void 0,Rt=h.useRef(null),Ta=h.useRef(null),qa=!!m,$t=!!y,Xe=ie=>{Ge!==ie&&E(ie),v?.(ie)},Lt=ie=>{De!==ie&&Q(ie),d?.(ie)},zt=ie=>{const ge=yg(a,ie);if(ge&&!ge.disabled&&!ge.readOnly){const pe=F.findIndex(je=>je===ie);x?pe>-1?(ae(F.splice(pe,1)),b?.(ie)):(ae([...F,ie]),g?.(ie)):(pe===-1&&ae([ie]),g?.(ie))}},{currentActiveMenu:ht,activateMenu:ta,deactivateMenu:Ul}=pg(X);h.useEffect(()=>{function ie(ge){if(ht?.current===X.current)switch(P.getCode(ge)){case P[" "]:if(Pe)break;ne&&De?zt(De):Ge&&zt(Ge),ge.preventDefault();break;case P.Enter:if(He)break;ne&&De?zt(De):Ge&&zt(Ge),ge.preventDefault();break;case P.ArrowDown:{const pe=Ae(ne&&De||Ge);ne?Lt(pe):Xe(pe),ge.preventDefault();break}case P.ArrowUp:{const pe=(je=>{const Ie=je?a.findIndex(we=>we.id===je):-1;let Be=Ie>0?Ie-1:a.length-1,Gt=!1;for(;(a[Be].disabled||a[Be].readOnly)&&!Gt;)Be=Be>0?Be-1:a.length-1,Gt=Ie===-1?Be===0:Be===Ie;return Be=Ie>-1&&Be>Ie&&H&&!H()?Ie:Be,a[Be].disabled||a[Be].readOnly?void 0:a[Be].id})(ne&&De||Ge);ne?Lt(pe):Xe(pe),ge.preventDefault();break}case P.ArrowRight:{const pe=ne&&De||Ge,je=a.find(Ie=>Ie.id===pe);!je||je.disabled||je.readOnly||!je.subItems||Ye||ve(!0),te&&te.current&&ta?.(te);break}case P.ArrowLeft:U&&U.current&&ee?.();break;default:me?.(ge)}}return document.addEventListener("keydown",ie),()=>{document.removeEventListener("keydown",ie)}},[s,Ge,J,ht,De,Pe,He]),h.useEffect(()=>(Z&&ta?.(X),()=>{Z&&ht===X&&Ul?.(X)}),[Z]);const hn=()=>{ve(!1),ta?.(X)},Ze=(ie,ge)=>{const{id:pe,subItems:je,render:Ie,...Be}=ie,Gt=!!je&&je.length>0,we=Ge===pe,Vt=Mt.includes(pe)||bg(ie,Mt),Pt={hovered:we,preselected:De!==void 0?De===pe:void 0,selected:Vt,onLeave:aa=>{const la=aa.relatedTarget;la&&Object.hasOwn(la,"nodeName")&&!te.current?.contains(la)&&!Ta.current?.contains(la)&&ve(!1)},onHover:aa=>{Xe(pe),ve(Gt),re(aa.currentTarget)},onMouseDown:I?aa=>aa.preventDefault():void 0,onClick:()=>zt(pe),hasSubmenu:Gt,disabled:Be.disabled,...Be};return typeof Ie=="function"?Ie({containerRef:B,...Pt}):_.jsx(Mf,{...Pt,children:Ie},`${ie.id}-${ge}`)},kl=h.useRef(),Ma=h.useRef(),yt=h.useRef(),Fe=h.useRef();h.useLayoutEffect(()=>{setTimeout(()=>{let ie;if(s&&kl.current!==s||Ma.current!==J?ie=Rt.current?.querySelector('[data-hovered="true"]'):(c&&yt.current!==c||Fe.current!==R)&&(ie=Rt.current?.querySelector('[data-preselected="true"]')),ie){const ge=Date.now(),pe=Je.current;ie?.scrollIntoView({behavior:!pe||ge-pe<150?"auto":"smooth",inline:"center",block:"nearest"}),Je.current=ge,kl.current=s,Ma.current=J,yt.current=c,Fe.current=R}},0)},[s,J,c,R,a]);const ot=hg(We);return h.useEffect(()=>{if(!ue||!Rt.current)return;const ie={root:Rt.current,rootMargin:"0px",threshold:.5},ge=new IntersectionObserver(pe=>{pe.forEach(je=>{ve(!(je.intersectionRatio<ie.threshold))})},ie);return ge.observe(ue),()=>ge.disconnect()},[ue]),_.jsxs(OS,{ref:ea(X,vt),$dimension:$,$hasTopPanel:qa,$hasBottomPanel:$t,onMouseEnter:ie=>{ht!==X&&ta?.(X),We.onMouseEnter?.(ie)},onMouseLeave:ie=>{Xe(void 0),We.onMouseLeave?.(ie)},onFocus:ie=>{ht!==X&&ta?.(X),We.onFocus?.(ie)},onBlur:ie=>{ht===X&&Ul?.(X),We.onBlur?.(ie)},...We,children:[qa&&m({dimension:$}),_.jsx(DS,{$dimension:$,$rowCount:D,$hasTopPanel:qa,$hasBottomPanel:$t,$maxHeight:fe,...ot,verticalScrollProps:{ref:Ta},contentBlockProps:{ref:Rt},children:C?(()=>{if(!C)return null;const ie=C.itemHeight==="auto"?Sg($):C.itemHeight;return _.jsx(ES,{scrollContainerRef:Rt,itemHeight:ie,model:a,rowCount:D,activeId:Ge,selected:Mt,onRenderItem:Ze})})():a.map((ie,ge)=>Ze({dimension:$,...ie},ge))}),Ye&&ue&&_.jsx(xg,{targetElement:ue,defaultRenderDirection:W,onClickOutside:U?void 0:()=>{ve(!1)},children:(()=>{const ie=a.find(ge=>ge.id===Ge);return ie&&ie.subItems&&ie.subItems.length>0&&_.jsx(Af,{ref:te,dimension:$,parentMenuRef:X,model:ie.subItems,subMenuRenderDirection:W,onCloseQuery:hn,selected:Mt,onSelectItem:ge=>zt(ge),virtualScroll:C,preventFocusSteal:!0})})()}),$t&&y({dimension:$})]})});Af.displayName="Menu";var Fp;function Js(){return Js=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},Js.apply(null,arguments)}var Of=function(a){return h.createElement("svg",Js({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),Fp||(Fp=h.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};function Ni(a){switch(a){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function Eg(a){switch(a){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function Kp(a){return Ni(a)+2*Eg(a)}const BS=V`
  & *[fill^='#'] {
    fill: ${a=>{switch(a.$iconColor){case"primary":return`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`;case"secondary":return`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`;default:return a.$iconColor}}};
  }
`,RS=Y.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${BS}

  & > svg {
    height: ${a=>Ni(a.$dimension)}px;
    width: ${a=>Ni(a.$dimension)}px;
  }
`,yi=Y.div`
  width: ${a=>Kp(a.$dimension)}px;
  height: ${a=>Kp(a.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,zS=V`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }

  &:focus {
    > ${yi} {
      background-color: ${a=>a.$highlightFocus?`var(--admiral-color-Opacity_Focus, ${a.theme.color["Opacity/Focus"]})`:"transparent"};
    }
  }
  &:hover {
    > ${yi} {
      background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    }
  }
  &:active {
    > ${yi} {
      background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    }
  }
  &:focus-visible {
    > ${yi} {
      background-color: transparent;
    }
  }
`,HS=Y.button`
  position: relative;
  padding: 0;
  margin: ${a=>Eg(a.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${a=>Ni(a.$dimension)}px;
  width: ${a=>Ni(a.$dimension)}px;
  border-radius: var(--admiral-border-radius-Small, ${a=>nr(a.theme.shape)});
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
  &:not(:disabled) {
    ${zS}
  }
`,jS=h.forwardRef(({type:a="button",dimension:i="lBig",disabled:u=!1,highlightFocus:c=!0,appearance:s,children:d,...g},b)=>{const v=typeof s=="object"?s.iconColor?s.iconColor:"secondary":s;return _.jsxs(HS,{ref:b,type:a,$dimension:i,disabled:u,$highlightFocus:c,...g,children:[_.jsx(yi,{$dimension:i,"aria-hidden":!0}),_.jsx(RS,{$dimension:i,$iconColor:v,"aria-hidden":!0,children:d})]})}),LS=h.forwardRef(({className:a,...i},u)=>_.jsx(jS,{ref:u,className:`close-button ${a||""}`,...i,children:_.jsx(Of,{"aria-hidden":!0})}));var Wp,Jp,Ip,e0,t0,a0;function Is(){return Is=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},Is.apply(null,arguments)}var US=function(a){return h.createElement("svg",Is({xmlns:"http://www.w3.org/2000/svg",fill:"none"},a),Wp||(Wp=h.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),Jp||(Jp=h.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),Ip||(Ip=h.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),e0||(e0=h.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),t0||(t0=h.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),a0||(a0=h.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))};const kS=fg`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,$g=Y(US)`
  animation: ${kS} 1s linear infinite;
  path {
    fill: ${({$inverse:a,theme:i})=>a?`var(--admiral-color-Special_StaticWhite, ${i.color["Special/Static White"]})`:`var(--admiral-color-Primary_Primary60Main, ${i.color["Primary/Primary 60 Main"]})`};
  }
  width: 100%;
  height: 100%;
`,qS=a=>fg`
  0% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
  }
  50% {
    background-color: var(--admiral-color-Neutral_Neutral20, ${a.theme.color["Neutral/Neutral 20"]});
    border-color: var(--admiral-color-Neutral_Neutral20, ${a.theme.color["Neutral/Neutral 20"]});
  }
  100% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
  }
`,Df=V`
  animation: ${a=>qS(a)} 2s ease infinite;
`,YS=()=>{let a=0;const i=document.createElement("div");return i.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,i.style.overflow="scroll",i.style.fontSize="14px",i.style.height="50px",i.style.maxHeight="50px",i.style.width="100px",i.style.position="absolute",i.style.top="-100000px",i.style.left="-100000px",document.body.appendChild(i),a=i.offsetWidth-i.clientWidth,document.body.removeChild(i),a||16},GS=Y.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,VS=Y.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${a=>a.theme.color["Neutral/Neutral 80"]});
  ${a=>a.$dimension==="m"?_e["Body/Body 2 Short"]:_e["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${a=>nr(a.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${a=>yu(a.theme.shadow["Shadow 04"])});
  padding: ${a=>a.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,PS=Y.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,XS=Y(Nf)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:a})=>a?`flex-direction: ${a};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:a})=>a.zIndex.tooltip});
`;function QS(a,i,u,c){const s=a.getBoundingClientRect(),d=i.getBoundingClientRect(),g=Object.entries(function(m){return{bottom:{check:(y,$)=>{const x=globalThis.innerHeight-y.bottom-m>8+$.height,T=y.left+y.width/2>$.width/2,S=globalThis.innerWidth-y.right-m+y.width/2>$.width/2;return x&&T&&S}},top:{check:(y,$)=>{const x=y.top>8+$.height,T=y.left+y.width/2>$.width/2,S=globalThis.innerWidth-y.right-m+y.width/2>$.width/2;return x&&T&&S}},left:{check:(y,$)=>{const x=y.left>8+$.width,T=y.top>($.height-y.height)/2,S=globalThis.innerHeight-y.bottom-m>($.height-y.height)/2;return x&&S&&T}},right:{check:(y,$)=>{const x=globalThis.innerWidth-y.right-m>8+$.width,T=y.top>($.height-y.height)/2,S=globalThis.innerHeight-y.bottom-m>($.height-y.height)/2;return x&&S&&T}},bottomRight:{check:(y,$)=>{const x=globalThis.innerHeight-y.bottom-m>8+$.height,T=globalThis.innerWidth-y.left-m>$.width;return x&&T}},bottomLeft:{check:(y,$)=>{const x=globalThis.innerHeight-y.bottom-m>8+$.height,T=y.right>$.width;return x&&T}},topRight:{check:(y,$)=>{const x=y.top>8+$.height,T=globalThis.innerWidth-y.left-m>$.width;return x&&T}},topLeft:{check:(y,$)=>{const x=y.top>8+$.height,T=y.right>$.width;return x&&T}},leftBottom:{check:(y,$)=>{const x=y.left>8+$.width,T=globalThis.innerHeight-y.top-m>$.height;return x&&T}},leftTop:{check:(y,$)=>{const x=y.left>8+$.width,T=y.bottom>$.height;return x&&T}},rightBottom:{check:(y,$)=>{const x=globalThis.innerWidth-y.right-m>8+$.width,T=globalThis.innerHeight-y.top-m>$.height;return x&&T}},rightTop:{check:(y,$)=>{const x=globalThis.innerWidth-y.right-m>8+$.width,T=y.bottom>$.height;return x&&T}},bottomPageCenter:{check:(y,$)=>{const x=globalThis.innerHeight-y.bottom-m>8+$.height,T=globalThis.innerWidth-m>=$.width;return x&&T}},topPageCenter:{check:(y,$)=>{const x=y.top>8+$.height,T=globalThis.innerWidth-m>=$.width;return x&&T}}}}(u)),b=c?g.filter(m=>m[0].includes(c)&&m[1].check(s,d)):g.filter(m=>m[1].check(s,d)),v=c||"bottom";return b.length?b[0][0]:v}const ZS=1500,Mi=h.forwardRef(({dimension:a="m",renderContent:i,targetElement:u,tooltipPosition:c,...s},d)=>{const g=h.useRef(null),b=h.useRef(0),{rootRef:v}=h.useContext(bu),m=h.useMemo(()=>!i()&&i()!==0,[i]),[y,$]=h.useState(),[x,T]=h.useState(!1),[S,H]=h.useState({});return h.useEffect(()=>{(B=>{const C=u;if(C&&g.current){const D=QS(C,g.current,B,c),U=g.current;switch(D){case"leftBottom":case"leftTop":case"left":$("row-reverse"),T(!1),U.style.margin="0 8px 0 0",U.style.alignSelf=D==="leftBottom"?"flex-start":D==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":$("row"),T(!1),U.style.margin="0 0 0 8px",U.style.alignSelf=D==="rightBottom"?"flex-start":D==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":$("column-reverse"),T(D==="topPageCenter"),U.style.margin="0 0 8px 0",U.style.alignSelf=D==="topLeft"?"flex-end":D==="topRight"?"flex-start":"center";break;default:$("column"),T(D==="bottomPageCenter"),U.style.margin="8px 0 0 0",U.style.alignSelf=D==="bottomLeft"?"flex-end":D==="bottomRight"?"flex-start":"center"}}})(YS())},[i(),u,c,S]),h.useLayoutEffect(()=>{if(g.current&&!m){const B=new ResizeObserver(C=>{C.forEach(D=>{b.current===0?b.current=D.contentRect.height:H({})})});return B.observe(g.current),()=>{B.disconnect()}}},[m]),h.useEffect(()=>{g.current&&!m&&(g.current.style.opacity="1")},[m]),m?null:_.jsxs(XS,{targetElement:u,rootRef:v,$flexDirection:y,fullContainerWidth:x,children:[_.jsx(PS,{}),_.jsx(GS,{ref:ea(d,g),children:_.jsx(VS,{role:"tooltip",$dimension:a,...s,children:i()})})]})});Mi.displayName="Tooltip";function FS(a){return wf((i,u)=>{const{renderContent:c,container:s,withDelay:d,tooltipRef:g,tooltipPosition:b,tooltipDimension:v,...m}=i,y=!c()&&c()!==0,$=h.useRef(null),[x,T]=h.useState(!1),[S,H]=h.useState(null),[B,C]=h.useState();return h.useEffect(()=>{function D(){C(setTimeout(()=>T(!0),d?ZS:0))}function U(){clearTimeout(B),T(!1)}if(S)return S.addEventListener("mouseenter",D),S.addEventListener("focus",D),S.addEventListener("mouseleave",U),S.addEventListener("blur",U),()=>{B&&clearTimeout(B),S.removeEventListener("mouseenter",D),S.removeEventListener("focus",D),S.removeEventListener("mouseleave",U),S.removeEventListener("blur",U)}},[S,C,T,B]),_.jsxs(_.Fragment,{children:[_.jsx(a,{...m,ref:ea(u,$,H)}),x&&!y&&_.jsx(Mi,{targetElement:$.current,renderContent:c,container:s,tooltipPosition:b,dimension:v,ref:g})]})})}const KS=V`
  background: ${({$appearance:a,theme:i})=>{switch(a){case"info":return`var(--admiral-color-Primary_Primary60Main, ${i.color["Primary/Primary 60 Main"]})`;case"warning":return`var(--admiral-color-Warning_Warning50Main, ${i.color["Warning/Warning 50 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${i.color["Success/Success 50 Main"]})`;case"error":return`var(--admiral-color-Error_Error60Main, ${i.color["Error/Error 60 Main"]})`;case"grey":return`var(--admiral-color-Neutral_Neutral50, ${i.color["Neutral/Neutral 50"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral80, ${i.color["Neutral/Neutral 80"]})`;case"whiteBlue":return`var(--admiral-color-Special_StaticWhite, ${i.color["Special/Static White"]})`;case"white":case"whiteInactive":case"whiteDisable":return`var(--admiral-color-Neutral_Neutral00, ${i.color["Neutral/Neutral 00"]})`;default:return`var(--admiral-color-Opacity_Neutral8, ${i.color["Opacity/Neutral 8"]})`}}};
`,WS=V`
  color: ${({$appearance:a,theme:i})=>{switch(a){case"info":case"warning":case"success":case"error":case"grey":return`var(--admiral-color-Special_StaticWhite, ${i.color["Special/Static White"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral00, ${i.color["Neutral/Neutral 00"]})`;case"whiteBlue":return`var(--admiral-color-Primary_Primary60Main, ${i.color["Primary/Primary 60 Main"]})`;case"lightInactive":case"whiteInactive":return`var(--admiral-color-Neutral_Neutral50, ${i.color["Neutral/Neutral 50"]})`;case"whiteDisable":case"lightDisable":return`var(--admiral-color-Neutral_Neutral30, ${i.color["Neutral/Neutral 30"]})`;default:return`var(--admiral-color-Neutral_Neutral90, ${i.color["Neutral/Neutral 90"]})`}}};
`,JS=Y.div`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({$dimension:a})=>a==="s"?"0 5px":"0 6px"};
  height: ${({$dimension:a})=>a==="s"?"16px":"20px"};
  border-radius: ${({$dimension:a})=>a==="s"?"8px":"10px"};
  ${({$dimension:a})=>a==="s"?_e["Caption/Caption 1"]:_e["Body/Body 2 Long"]}
  ${KS}
  ${WS}
  user-select: none;
`,Bf=h.forwardRef(({children:a,dimension:i="m",appearance:u="light",locale:c,...s},d)=>{const g=Ef()||vu,b=c?.amountAriaLabel||g.locales[g.currentLocale].badge.amountAriaLabel;return _.jsx(JS,{ref:d,$dimension:i,$appearance:u,"aria-label":`${b} ${a}`,...s,children:a})});Bf.displayName="Badge";Y(Bf)`
  &:is(input:checked + div *) {
    background: ${a=>a.$disabled?`var(--admiral-color-Neutral_Neutral00, ${a.theme.color["Neutral/Neutral 00"]})`:`var(--admiral-color-Special_StaticWhite, ${a.theme.color["Special/Static White"]})`};
    color: ${a=>a.$disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`};
  }
`;const l0=V`
  background-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Primary_Primary70, ${a=>a.theme.color["Primary/Primary 70"]});
    border-color: var(--admiral-color-Primary_Primary70, ${a=>a.theme.color["Primary/Primary 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Primary_Primary80, ${a=>a.theme.color["Primary/Primary 80"]});
    border-color: var(--admiral-color-Primary_Primary80, ${a=>a.theme.color["Primary/Primary 80"]});
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,n0=V`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    &:not(.button-group > button) {
      border-color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,r0=V`
  background-color: var(--admiral-color-Opacity_Neutral8, ${a=>a.theme.color["Opacity/Neutral 8"]});
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Neutral12, ${a=>a.theme.color["Opacity/Neutral 12"]});
    color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Neutral16, ${a=>a.theme.color["Opacity/Neutral 16"]});
    color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Opacity_Neutral8, ${a=>a.theme.color["Opacity/Neutral 8"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,IS=V`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,e2=V`
  background-color: transparent;
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(
      --admiral-color-Opacity_DarkStaticHover,
      ${a=>a.theme.color["Opacity/Dark Static Hover"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    }
  }

  &&&:active {
    background-color: var(
      --admiral-color-Opacity_DarkStaticPress,
      ${a=>a.theme.color["Opacity/Dark Static Press"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    border-color: var(
      --admiral-color-Special_DarkStaticNeutral30,
      ${a=>a.theme.color["Special/Dark Static Neutral 30"]}
    );
    color: var(--admiral-color-Special_DarkStaticNeutral30, ${a=>a.theme.color["Special/Dark Static Neutral 30"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_DarkStaticNeutral30, ${a=>a.theme.color["Special/Dark Static Neutral 30"]});
    }
  }
`,t2=V`
  background-color: var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
    border-color: var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Error_Error80, ${a=>a.theme.color["Error/Error 80"]});
    border-color: var(--admiral-color-Error_Error80, ${a=>a.theme.color["Error/Error 80"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,a2=V`
  background-color: var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Success_Success60, ${a=>a.theme.color["Success/Success 60"]});
    border-color: var(--admiral-color-Success_Success60, ${a=>a.theme.color["Success/Success 60"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Success_Success70, ${a=>a.theme.color["Success/Success 70"]});
    border-color: var(--admiral-color-Success_Success70, ${a=>a.theme.color["Success/Success 70"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,l2=V`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,n2=V`
  &[data-appearance~='primary']:not(.button-group > button) {
    ${l0}
  }
  &[data-appearance~='secondary']:not(.button-group > button) {
    ${n0}
  }
  &[data-appearance~='tertiary']:not(.button-group > button) {
    ${r0}
  }
  &[data-appearance~='ghost']:not(.button-group > button) {
    ${IS}
  }
  &[data-appearance~='white']:not(.button-group > button) {
    ${e2}
  }
  &[data-appearance~='danger']:not(.button-group > button) {
    ${t2}
  }
  &[data-appearance~='success']:not(.button-group > button) {
    ${a2}
  }
  &:is(.button-group[data-appearance='primary'] > button) {
    ${l0}
  }
  &:is(.button-group[data-appearance='secondary'] > button) {
    ${n0}
  }
  &:is(.button-group[data-appearance='tertiary'] > button) {
    ${r0}
  }

  ${l2}
`,rr=Y.div``;function Hl(a){switch(a){case"s":return 13;case"m":return 17;case"l":return 21;default:return 29}}V`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Hl("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Hl("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Hl("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Hl("s")}px;`}
  }
`;V`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Hl("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Hl("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Hl("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Hl("s")}px;`}
  }
`;const i0=V`
  padding: 0;
  height: 56px;
  ${a=>a.$displayAsSquare?"width: 56px;":"padding: 0 29px;"}
  ${rr} {
    width: 24px;
    height: 24px;
  }

  ${_e["Button/Button 1"]}
`,r2=V`
  ${i0}

  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${i0}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    height: 48px;
    ${a=>a.$displayAsSquare?"width: 48px;":"padding: 0 21px;"}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    height: 40px;
    ${a=>a.$displayAsSquare?"width: 40px;":"padding: 0 17px;"}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    height: 32px;
    ${a=>a.$displayAsSquare?"width: 32px;":"padding: 0 13px;"}
    ${rr} {
      width: 20px;
      height: 20px;
    }
    ${_e["Button/Button 2"]}
  }
`,Ng=Y.div`
  vertical-align: top;

  display: inline-flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: calc(100% - ${a=>a.$addPadding}px);

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  > ${rr} {
    flex: 0 0 auto;
  }

  height: 24px;
  & > svg {
    width: 24px;
    height: 24px;
  }

  .button-group[data-dimension='m'] &&,
  .button-group[data-dimension='l'] &&,
  .button-group[data-dimension='xl'] && {
    height: 24px;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }
  .button-group[data-dimension='s'] &&,
  [data-dimension='s'] & {
    height: 20px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`,i2=Y(rr)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  container-type: inline-size;
  .button-group[data-appearance='primary'] & {
    & path {
      fill: ${a=>`var(--admiral-color-Special_StaticWhite, ${a.theme.color["Special/Static White"]})`};
    }
  }
  .button-group[data-appearance='secondary'] &,
  .button-group[data-appearance='tertiary'] & {
    & path {
      fill: ${a=>`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`};
    }
  }
`,o0=Y.div`
  display: inline-block;
  width: 2px;
`,ir=h.forwardRef(({appearance:a="primary",dimension:i="xl",type:u="button",loading:c=!1,skeleton:s=!1,iconStart:d,iconEnd:g,icon:b,iconPlace:v="left",children:m,buttonCssMixin:y,displayAsDisabled:$,displayAsSquare:x,...T},S)=>{const H=!!d||!!b&&v==="left",B=!!g||!!b&&v==="right",C=(x||H?0:2)+(x||B?0:2);return _.jsxs(o2,{ref:S,$appearance:a,$dimension:i,type:u,$loading:c,$skeleton:s,$buttonCssMixin:y,$displayAsSquare:x,$displayAsDisabled:$,...T,children:[c&&_.jsx(i2,{children:_.jsx($g,{$inverse:a!=="secondary"&&a!=="tertiary"&&a!=="ghost"})}),!x&&!H&&_.jsx(o0,{}),_.jsxs(Ng,{$addPadding:C,children:[H?_.jsx(rr,{children:d||b}):null,h.Children.toArray(m).map((D,U)=>typeof D=="string"?_.jsx("div",{children:D},D+U):D),B?_.jsx(rr,{children:g||b}):null]}),!x&&!B&&_.jsx(o0,{})]})}),o2=Y.button.attrs(a=>({"data-dimension":a.$dimension,"data-appearance":[a.$appearance,a.$displayAsDisabled?"disabled":void 0].filter(i=>i!==void 0).join(" ")}))`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  border: none;
  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${hr(a.theme.shape)})`};
  appearance: none;
  vertical-align: middle;
  cursor: ${a=>a.disabled?"not-allowed":"pointer"};
  ${a=>(a.$loading||a.$skeleton)&&"pointer-events: none"};

  ${n2};
  ${r2};
  ${a=>a.$buttonCssMixin};
  ${({$skeleton:a})=>a&&Df};

  ${Ng} {
    ${a=>a.$loading||a.$skeleton?"visibility: hidden;":""}
  }
`;ir.displayName="Button";var u0;function ef(){return ef=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},ef.apply(null,arguments)}var u2=function(a){return h.createElement("svg",ef({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},a),u0||(u0=h.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))},c0;function tf(){return tf=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},tf.apply(null,arguments)}var c2=function(a){return h.createElement("svg",tf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},a),c0||(c0=h.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))};const s2=V`
  width: ${({$dimension:a})=>{switch(a){case"m":default:return"20px";case"s":return"16px"}}};

  fieldset[data-dimension='s'] & {
    width: 16px;
  }
`,f2=V`
  height: ${({$dimension:a})=>{switch(a){case"m":default:return"20px";case"s":return"16px"}}};
  fieldset[data-dimension='s'] & {
    height: 16px;
  }
`,d2=Y(u2)`
  pointer-events: none;
`,h2=Y(c2)`
  pointer-events: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }
`,m2=Y.div`
  position: relative;
  box-sizing: border-box;
  cursor: ${a=>a.$disabled?"not-allowed":a.$readOnly?"default":"pointer"};

  overflow: visible;
  ${s2};
  ${f2};
  flex: 0 0 auto; // при вставке во flex контейнер не должны изменяться размеры
`,sn=Y.div`
  pointer-events: none;
  display: inline-block;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: var(--admiral-border-radius-Small, ${a=>nr(a.theme.shape)});
  outline: 0;
  transition: background-color 0.1s ease-in;

  /* disable inheritance from parent elements */
  line-height: initial;
  background-color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  border: 1px solid
    ${({$error:a,theme:i})=>a?`var(--admiral-color-Error_Error60Main, ${i.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${i.color["Neutral/Neutral 50"]})`};
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }
`,_g=V`
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
`,s0=V`
  &:not(:disabled) {
    &::after {
      ${_g};
      background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    }
  }
`,p2=V`
  &:not(:disabled) {
    &::after {
      ${_g};
      background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    }
  }
`,f0=V`
  pointer-events: none;
  & + ${sn} {
    border: 1px solid var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
  }
`,af=V`
  background-color: var(--admiral-color-Primary_Primary30, ${a=>a.theme.color["Primary/Primary 30"]});
  border: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  }
`,wg=V`
  background-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  border: none;
`,g2=V`
  & + ${sn} {
    ${wg}
  }
`,Tg=V`
  & + ${sn} {
    ${af}
  }
`,v2=V`
  ${a=>a.readOnly?Tg:g2}
`,y2=Y.input`
  appearance: none;
  ::-ms-check {
    display: none;
  }
  width: 100%;
  height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  cursor: pointer;
  border-radius: var(--admiral-border-radius-Small, ${a=>nr(a.theme.shape)});
  margin: 0;
  padding: 0;

  ${a=>a.readOnly&&f0}

  &:checked + ${sn} {
    ${a=>a.readOnly?af:wg}
  }
  &:checked:disabled + ${sn} {
    ${af}
  }

  ${a=>a.$indeterminate&&v2}

  &:not(:checked) + ${sn} {
    > * {
      display: ${a=>a.$indeterminate?"block":"none"};
    }
  }

  &:disabled {
    cursor: not-allowed;
    ${f0}
    ${a=>a.$indeterminate&&Tg}
  }

  ${a=>!a.readOnly&&a.$hovered&&s0}

  &:hover:not(:disabled),
  &:focus:not(:disabled) + ${s0}

  &:active:not(:disabled) {
    ${p2}
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,Mg=h.forwardRef(({className:a,dimension:i="m",disabled:u,readOnly:c,hovered:s,indeterminate:d,error:g,...b},v)=>_.jsxs(m2,{$dimension:i,$disabled:u,$readOnly:c,className:a,children:[_.jsx(y2,{ref:v,disabled:u,readOnly:c,...b,type:"checkbox",$indeterminate:d,onKeyDown:m=>{c&&P.getCode(m)===P[" "]&&m.preventDefault(),b.onKeyDown?.(m)},"data-hovered":s,$hovered:s}),_.jsx(sn,{$error:g,children:_.jsx(d?h2:d2,{"aria-hidden":"true",focusable:"false"})})]}));Mg.displayName="Checkbox";function Ci(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}const b2=V`
  height: ${({$dimension:a})=>{switch(a){case"xl":return"56px";case"s":return"32px";default:return"40px"}}};
`,Rf=V`
  ${Df}
  & > * {
    visibility: hidden;
  }
`,Cg=Y.div`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${hr(a.theme.shape)})`};

  pointer-events: ${a=>a.$skeleton?"none":"all"};
  ${({$skeleton:a})=>a&&Rf};
`;Y(Cg)`
  ${b2};
`;const x2=Y.div`
  white-space: nowrap;
  ${_e["Body/Body 2 Long"]}
  color: ${a=>a.$error?`var(--admiral-color-Error_Error60Main, ${a.theme.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`};
  transition:
    all 0.5s,
    color 0.5s;
  opacity: ${a=>a.$transparent&&!a.$error?0:1};
  max-width: ${a=>a.$transparent&&!a.$error?0:"none"};
  overflow: hidden;
`,S2=({maxLength:a,visibilityThreshold:i=.8,inputRef:u,...c})=>{const[s,d]=h.useState(0);return h.useEffect(()=>{const g=setInterval(()=>{const b=u.current;b&&d(b.value.length)},250);return()=>clearInterval(g)},[u]),s>=a*i?_.jsxs(x2,{...c,$error:s>=a,$transparent:s<a*i,children:[s," / ",a]}):null},zf=Y.label`
  display: block;
  text-align: left;
  ${_e["Body/Body 2 Short"]}
  color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});

  [data-disabled] & {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-focus-within] & {
    color: ${a=>a.disabled?"":`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`};
  }
  [data-required-within] &:is(label)[required]::after {
    content: ' *';
    color: var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }
  margin-bottom: 8px;
`;zf.displayName="Label";const Ag=Y.div``,E2=V`
  flex-direction: row;
  align-items: center;

  ${zf} {
    margin: 0 8px 0 0;
  }

  ${Ag} {
    flex: 1 1 auto;
  }
`,$2=Y.div`
  display: flex;
  overflow: hidden;
  ${a=>a.$displayInline?E2:"flex-direction: column;"}
`,N2=Y.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 50%;
  margin-bottom: 8px;
  ${Rf}
`,_2=Y.div`
  position: relative;
  text-align: left;
`,w2=V`
  color: transparent;
`,T2=Y(zf)`
  ${a=>a.$skeleton&&w2};
`,M2=V`
  visibility: hidden;
`,C2=Y.div`
  display: flex;
  justify-content: space-between;
  ${a=>a.$skeleton&&M2};
`,A2=Y.div`
  flex: 1 1 auto;

  padding-top: 8px;

  text-align: left;

  ${_e["Body/Body 2 Short"]}

  color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});

  [data-disabled] & {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-status='error'] & {
    color: var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] & {
    color: var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});
  }
`,O2=Y(S2)`
  flex: 0 0 auto;
  padding: 8px 0 0 8px;
`,Hf=h.forwardRef(({children:a,maxLength:i,inputRef:u,displayCharacterCounter:c=!0,characterCounterVisibilityThreshold:s=.8,...d},g)=>{const b=h.useRef(null),[v,m]=h.useState(!1),{className:y,style:$,displayInline:x,status:T,extraText:S,label:H,required:B,disabled:C,id:D,skeleton:U=!1,...ee}=d,[Z]=h.useState(Ci()),W={className:y,style:$,...ee},I={htmlFor:D??Z,children:H,required:B,disabled:C};return h.useEffect(()=>{const fe=()=>{m(!0)},ne=()=>{m(!1)},me=b.current;return me&&(me.addEventListener("focusin",fe),me.addEventListener("focusout",ne)),()=>{me&&(me.removeEventListener("focusin",fe),me.removeEventListener("focusout",ne))}},[]),_.jsxs($2,{...W,$displayInline:x,"data-status":T,"data-focus-within":v?"":void 0,"data-required-within":B?"":void 0,"data-disabled":C?"":void 0,"data-read-only":!!d.readOnly||void 0,ref:ea(b,g),children:[I.children&&_.jsxs(_2,{children:[U&&_.jsx(N2,{}),_.jsx(T2,{$skeleton:U,...I})]}),_.jsxs(Ag,{children:[a,_.jsxs(C2,{$skeleton:U,children:[S&&_.jsx(A2,{children:S}),c&&u&&i!==void 0&&_.jsxs(_.Fragment,{children:[_.jsx("div",{}),_.jsx(O2,{maxLength:i,visibilityThreshold:s,inputRef:u})]})]})]})]})});Hf.displayName="Field";function D2(a,i){return a.value!==i.value||a.selectionStart!==i.selectionStart||a.selectionEnd!==i.selectionEnd}function on(a,i){const{value:u=a.value,selectionStart:c,selectionEnd:s}=i;if(D2(a,{value:u,selectionStart:c,selectionEnd:s})){const d=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(a),"value")?.set;let g;d?.call(a,u),typeof c=="number"&&typeof s=="number"&&a.setSelectionRange(c,s),typeof Event=="function"?g=new Event("input",{bubbles:!0}):(g=document.createEvent("Event"),g.initEvent("input",!0,!0)),a.dispatchEvent(g)}}function B2({icon:a,...i}){return _.jsx(a,{...i})}const jf=Y(B2)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }
  cursor: pointer;

  [data-loading] &&& {
    pointer-events: none;
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }

  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, ${a=>a.theme.color["Primary/Primary 70"]});
  }
`,R2=V`
  width: ${({$dimension:a})=>{switch(a){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
  height: ${({$dimension:a})=>{switch(a){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
`,z2=Y.div`
  position: relative;
  container-type: inline-size;
  ${R2};

  & svg {
    ${a=>a.$svgMixin||""}
  }
`,Og=({dimension:a="m",inverse:i=!1,svgMixin:u,...c})=>_.jsx(z2,{$dimension:a,$svgMixin:u,role:"alert","aria-live":"assertive",...c,children:_.jsx($g,{$inverse:i})});Og.displayName="Spinner";const or=a=>!!a&&(a.offsetHeight<a.scrollHeight||a.offsetWidth<a.scrollWidth),Dg=h.createContext(null),Bg=()=>h.useContext(Dg),H2=({children:a,...i})=>_.jsx(Dg.Provider,{value:i,children:a}),j2=h.createContext(null),Rg=()=>h.useContext(j2),ur=35,d0=4,Lf=V`
  height: ${({$dimension:a})=>a==="m"?"32px":"24px"};
`,L2=V`
  width: ${({$dimension:a})=>a==="m"?"32px":"24px"};
`,lf=V`
  height: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,U2=V`
  height: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,nf=V`
  width: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,k2=V`
  padding: ${({$dimension:a})=>a==="m"?"6px 12px":"4px 8px"};
`,q2=V`
  padding: ${({$dimension:a})=>a==="m"?"5px 11px":"3px 7px"};
`,Y2=V`
  ${({$appearance:a})=>a==="filled"?k2:q2}
`,G2=V`
  &:hover {
    color: ${({theme:a,$appearance:i,$selected:u})=>u?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:i!=="filled"||u?`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`};
  }
`,V2=V`
  ${({$dimension:a})=>a==="s"?_e["Caption/Caption 1"]:_e["Body/Body 2 Long"]}
  color: ${({theme:a,$appearance:i,$disabled:u,$selected:c})=>u&&!c?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:c||c&&u?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:i==="filled"?`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};

  ${a=>!a&&G2}
`,P2=V`
  &:hover {
    ${({theme:a,$appearance:i,$selected:u,$withCloseIcon:c})=>u?`background-color: var(--admiral-color-Primary_Primary70, ${a.color["Primary/Primary 70"]});`:i==="filled"?`background-color: var(--admiral-color-Opacity_Neutral12, ${a.color["Opacity/Neutral 12"]});`:c?void 0:`background-color: var(--admiral-color-Opacity_Hover, ${a.color["Opacity/Hover"]});`};
    ${a=>a.$selected&&`
      border-color: var(--admiral-color-Primary_Primary70, ${a.theme.color["Primary/Primary 70"]});
    `}
  }
  &:active {
    ${({theme:a,$appearance:i,$selected:u,$withCloseIcon:c})=>u?`background-color: var(--admiral-color-Primary_Primary80, ${a.color["Primary/Primary 80"]});`:i==="filled"?`background-color: var(--admiral-color-Opacity_Neutral16, ${a.color["Opacity/Neutral 16"]});`:c?void 0:`background-color: var(--admiral-color-Opacity_Press, ${a.color["Opacity/Press"]});`};
    ${a=>a.$selected&&`
      border-color: var(--admiral-color-Primary_Primary80, ${a.theme.color["Primary/Primary 80"]});
    `}
  }
`,X2=V`
  background-color: ${({theme:a,$appearance:i,$selected:u,$disabled:c})=>u&&!c?`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`:u&&c?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:i==="filled"?`var(--admiral-color-Opacity_Neutral8, ${a.color["Opacity/Neutral 8"]})`:"transparent"};

  border: ${({theme:a,$appearance:i,$disabled:u})=>i==="filled"?"none":u?`1px solid var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:`1px solid var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};

  border-radius: 16px;

  ${a=>a.$clickable&&!a.$disabled&&P2}

  &:focus-visible {
    outline: 0;

    &:before {
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
      border-radius: 20px;
      content: '';
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      pointer-events: none;
    }
  }
`,Q2=Y.div`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  max-width: 190px;
  user-select: none;
  & > * {
    pointer-events: ${({$disabled:a})=>a?"none":"auto"};
  }
  cursor: ${({$defaultChip:a,$disabled:i,$withTooltip:u})=>!a&&!u||i?i?"not-allowed":"default":"pointer"};
  ${X2}
  ${Lf}
  ${a=>a.$withCloseIcon?`padding-inline-start: ${(a.$dimension==="s"?8:12)-(a.$appearance==="outlined"?1:0)}px;`:Y2}
  ${a=>a.$withBadge&&!a.$withCloseIcon?`padding-inline-end: ${(a.$dimension==="s"?4:6)-(a.$appearance==="outlined"?1:0)}px;
         padding-inline-start: ${(a.$dimension==="s"?8:12)-(a.$appearance==="outlined"?1:0)}px;`:""}
  ${V2}
`,zg=V`
  display: flex;
  align-items: center;
  justify-content: center;
`,Z2=Y.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;

  ${a=>a.$withCloseIcon&&zg}
  ${a=>a.$withCloseIcon?Lf:U2}
  & svg {
    ${lf}
    ${nf}
    & *[fill^='#'] {
      fill: ${({theme:a,$appearance:i,$disabled:u,$selected:c})=>c?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:u?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:i==="filled"?`var(--admiral-color-Neutral_Neutral50, ${a.color["Neutral/Neutral 50"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};
    }
  }
`,F2=Y.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`,K2=Y.div`
  display: inline-block;
  margin-inline-end: 8px;
`,W2=Y.div`
  display: inline-block;
  margin-inline-start: ${a=>a.$withCloseIcon?"2px":"8px"};
`,h0=Y.div`
  ${a=>a.$withCloseIcon&&zg}
  ${a=>a.$withCloseIcon?Lf:lf}
  ${a=>a.$withCloseIcon?L2:nf}
  & > svg {
    ${lf}
    ${nf}
  }
`,J2=Y(Bf)`
  margin-inline-start: ${({dimension:a})=>a==="s"?"6px":"8px"};
`,I2=Y(LS)`
  //дополнительный отступ в 2px, чтобы кружок ховера не стоял вплотную к элементу слева
  margin-inline-start: ${a=>a.dimension==="s"?"6px":"8px"};
  ${a=>a.appearance==="primary"?a.dimension==="s"?"margin-inline-end: 3px":"margin-inline-end: 5px":""};
`,e6=()=>"",Uf=h.forwardRef(({dimension:a="m",disabled:i,appearance:u="outlined",selected:c,onClose:s,children:d,renderContentTooltip:g=e6,iconBefore:b,iconAfter:v,iconStart:m,iconEnd:y,badge:$,...x},T)=>{const S=c!==void 0,[H,B]=h.useState(!1),[C,D]=h.useState(!1),U=!!s,ee=!!$,Z=h.useMemo(()=>c&&!i?"whiteBlue":i?c||u==="filled"?"whiteDisable":"lightDisable":u==="filled"?"white":"info",[u,c,i]),W=h.useRef(null),I=h.useRef(null);return h.useEffect(()=>{I.current&&or(I.current)!==H&&B(or(I.current))},[C,B]),h.useLayoutEffect(()=>{function fe(){D(!0)}function ne(){D(!1)}const me=W.current;if(me)return me.addEventListener("mouseenter",fe),me.addEventListener("mouseleave",ne),me.addEventListener("focus",fe),me.addEventListener("blur",ne),()=>{me.removeEventListener("mouseenter",fe),me.removeEventListener("mouseleave",ne),me.removeEventListener("focus",fe),me.removeEventListener("blur",ne)}},[D]),_.jsxs(_.Fragment,{children:[_.jsx(Q2,{...x,ref:ea(T,W),$dimension:a,$disabled:i,$appearance:u,$selected:c,$defaultChip:S,$withCloseIcon:U,$withTooltip:H,$withBadge:ee,onKeyDown:fe=>{if(!i){const ne=P.getCode(fe);ne!==P.Enter&&ne!==P[" "]||(U?s?.():x.onClick?.(fe)),x.onKeyDown?.(fe)}},tabIndex:x.tabIndex??(i?-1:0),$clickable:!!x.onClick,children:_.jsxs(Z2,{$dimension:a,$disabled:i,$appearance:u,$selected:c,$withCloseIcon:U,children:[(m||b)&&_.jsx(K2,{children:_.jsx(h0,{$dimension:a,$withCloseIcon:U,children:m||b})}),_.jsx(F2,{ref:I,children:d}),$!==void 0&&_.jsx(J2,{"data-badge":!0,dimension:a,appearance:Z,children:$}),!s&&(y||v)&&_.jsx(W2,{$dimension:a,children:_.jsx(h0,{$dimension:a,$withCloseIcon:U,children:y||v})}),s&&_.jsx(I2,{dimension:a==="m"?"mBig":"s",highlightFocus:!1,onMouseDown:fe=>{fe.preventDefault(),s?.(x.id)},disabled:i,tabIndex:-1,appearance:u==="outlined"?"primary":"secondary"})]})}),C&&H&&_.jsx(Mi,{targetElement:W.current,renderContent:g})]})});Uf.displayName="Chips";const Hg=Y.div`
  width: ${ur}px;
  height: 24px;
`,t6=Y.div`
  display: flex;
  width: ${ur}px;
  visibility: hidden;
  [data-show-count] & {
    visibility: visible;
  }
  > * {
    width: ${ur}px;
    border-radius: 16px;
    // Убирает действие inline-block
    display: flex;
  }
`,a6=Y(Uf)`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  padding: 4px 0;
  cursor: pointer;
`,l6=Y.div`
  max-width: 488px;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`,n6=V`
  // оставлено, чтоб обрабатывался onClick
  pointer-events: auto;
  &:hover {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
`,r6=Y(Uf)`
  margin-right: 4px;
  // Убирает пробел от inline-flex
  display: flex;
  ${({disabled:a})=>a&&n6};

  min-width: ${ur}px;
  @media (max-width: 768px) {
    max-width: 140px;
  }

  // По дизайну при наведении цвет самого чипса меняться не должен, но т.к. есть обработчик onClick для stopPropagation,
  // то крестик чипса получается clickable и при ховере меняет цвет
  // disabled и readOnly чипсы не меняют цвет при ховере (в readOnly в целом отсутствует кнопка крестика)
  &:hover {
    ${({theme:a,disabled:i})=>{if(!i)return`background-color: var(--admiral-color-Opacity_Neutral8, ${a.color["Opacity/Neutral 8"]})`}}
  }
`,Fo=({value:a,disabled:i,renderChip:u,...c},s)=>{const d=u(),g={};return mr(c,g,"data",!1),(b=>typeof b=="object"&&b!==null&&!h.isValidElement(b))(d)?{...d,onClose:()=>d.onClose?.({value:a,disabled:i,...g})}:{disabled:i,onClose:()=>s(a),children:d}},m0=({className:a,option:i,disabled:u,readOnly:c,onClick:s,onChipRemove:d})=>{const g=h.useCallback(b=>()=>_.jsx(l6,{children:b}),[]);return _.jsx(r6,{className:a,tabIndex:-1,dimension:"s",appearance:"filled",onClick:s,onClose:c?void 0:Fo(i,d).onClose,disabled:Fo(i,d).disabled||u,renderContentTooltip:g(Fo(i,d).children),children:Fo(i,d).children})},i6=({count:a,disabled:i,onClick:u})=>{const c=h.useRef(null),s=h.useRef(null);return a?_.jsx(t6,{onClick:u,ref:c,className:"counter",children:_.jsxs(a6,{ref:s,"data-visible":!0,tabIndex:-1,dimension:"s",appearance:"filled",disabled:i,children:["+",a]})}):_.jsx(Hg,{})},o6=Y.div`
  display: flex;
`,u6=h.forwardRef(({option:a,childrenOptions:i,containerRef:u,shouldShowCount:c,disabled:s,readOnly:d,onChipClick:g,onChipRemove:b},v)=>{const m=h.useRef(null),[y,$]=h.useState(!1);return h.useLayoutEffect(()=>{const x=new IntersectionObserver(function(T){if(T[0].isIntersecting&&!y){$(!0),T[0].target.setAttribute("data-visible","true");const S=T[0].target.previousElementSibling,H=T[0].target.nextElementSibling;return S&&S.removeAttribute("data-show-count"),void(H&&!H.getAttribute("data-visible")&&T[0].target.setAttribute("data-show-count",""))}if(y&&!T[0].isIntersecting){$(!1),T[0].target.removeAttribute("data-visible"),T[0].target.removeAttribute("data-show-count");const S=T[0].target.previousElementSibling;S&&S.getAttribute("data-visible")&&S.setAttribute("data-show-count","true")}},{root:u.current,threshold:[0,1]});return u.current&&m.current&&x.observe(m.current),()=>x.disconnect()},[y]),_.jsxs(o6,{ref:ea(v,m),onMouseDown:x=>x.preventDefault(),children:[_.jsx(m0,{className:"chip",option:a,disabled:s,readOnly:d,onClick:g,onChipRemove:b}),c&&i.length>0&&_.jsx(i6,{count:i.length,disabled:s,children:i.map(x=>_.jsx(m0,{option:x,disabled:s,readOnly:d,onClick:g,onChipRemove:b},x.value))}),!c&&_.jsx(Hg,{})]},a.value)}),c6=({options:a,isOptionsListOpen:i,containerRef:u,hasMaxHeight:c,...s})=>{const d=Cf(i);return h.useEffect(()=>{c&&a.length!==0&&(d&&!i&&u.current?.scrollTo({top:0,left:0,behavior:"smooth"}),!d&&i&&setTimeout(()=>{u.current?.scrollTo({top:0,left:0,behavior:"instant"}),u.current?.scrollTo({top:u.current?.scrollHeight,left:0,behavior:"smooth"})}),i&&d&&u.current?.scrollTo({top:u.current?.scrollHeight,left:0,behavior:"smooth"}))},[i,a,c]),_.jsx(_.Fragment,{children:a.map((g,b)=>_.jsx(u6,{option:g,childrenOptions:b<a.length-1?a.slice(b+1):[],containerRef:u,...s},g.value))})},ol=Y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-width: 1px;
  border-style: solid;
  border-radius: inherit;
`,s6=V`
  min-height: ${({$multiple:a,$minRowCount:i,$dimension:u})=>a?i?24*i+4*(i-1)+"px":"24px":(u==="s"?20:24)+"px"};

  max-height: ${({$multiple:a,$maxRowCount:i,$opened:u,$idleHeight:c})=>a?i?24*i+4*(i-1)+"px":u||c!=="fixed"?"none":"24px":"none"};
`,f6=V`
  > * {
    margin-left: ${`-${ur+d0}px`};
  }

  padding-left: ${`${ur+d0}px`};
`,jg=Y.div`
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;

  ${({$multiple:a,$isEmpty:i})=>a&&!i&&f6}

  gap: 4px;
  flex-wrap: ${({$multiple:a})=>a?"wrap":"unset"};
  align-items: center;
  align-content: flex-start;

  ${a=>a.$dimension==="s"?_e["Body/Body 2 Long"]:_e["Body/Body 1 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  ${s6}
  [data-disabled='true'] &&& {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
`,d6=Y.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,h6=V`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,m6=Y.input`
  outline: none;
  appearance: none;

  box-sizing: border-box;
  flex: 1 1 auto;
  width: 1px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  ${({$dimension:a})=>a==="s"?_e["Body/Body 2 Long"]:_e["Body/Body 1 Long"]}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:read-only {
    cursor: inherit;
  }

  &:disabled,
  &:disabled::placeholder {
    cursor: inherit;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  height: ${({$dimension:a,$isMultiple:i})=>{return u=i,(a!=="s"||u?24:20)+"px";var u}};

  ${h6};
`,p6=V`
  pointer-events: none;
  cursor: default;
`,g6=V`
  && > *:not(${jg}) {
    pointer-events: none;
  }

  & ${ol} {
    border-color: transparent;
  }
`,v6=V`
  ${ol} {
    border-width: 2px;
  }
`,y6=Y.div`
  flex: 0 0 auto;

  display: flex;
  align-items: center;

  padding: ${({$dimension:a,$multiple:i})=>a==="s"&&i?"2px 0":"0"};

  & > * {
    margin-left: 8px;
    display: block;
    width: ${({$dimension:a})=>a==="s"?20:24}px;
    height: ${({$dimension:a})=>a==="s"?20:24}px;
  }

  [data-disabled='true'] &&& {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,b6=Y.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: ${a=>a.$multiple?"flex-start":"center"};
  cursor: ${({disabled:a,$readonly:i,$isLoading:u})=>a?"not-allowed":i||u?"default":"pointer"};

  padding: ${({$dimension:a,$multiple:i})=>{switch(a){case"xl":return"16px 16px";case"s":return i?"4px 12px":"6px 12px";default:return"8px 16px"}}};

  background: ${({theme:a,disabled:i,$readonly:u})=>i||u?`var(--admiral-color-Neutral_Neutral10, ${a.color["Neutral/Neutral 10"]})`:`var(--admiral-color-Neutral_Neutral00, ${a.color["Neutral/Neutral 00"]})`};

  ${({disabled:a,$readonly:i})=>i||a?g6:""};
  ${({$focused:a,$readonly:i,$isLoading:u})=>!a||i||u?"":v6};

  & ${ol} {
    border-color: ${a=>a.disabled||a.$readonly?"transparent":a.$focused&&!a.$isLoading?`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral40, ${a.theme.color["Neutral/Neutral 40"]})`};
  }

  &:hover ${ol} {
    ${a=>!a.disabled&&!a.$readonly&&!a.$focused&&!a.$isLoading&&`
      border-color: var(--admiral-color-Neutral_Neutral60, ${a.theme.color["Neutral/Neutral 60"]});
    `};
  }

  &[data-status='success'] {
    ${a=>!a.disabled&&!a.$readonly&&!a.$isLoading&&`
      ${ol} {
      border-color: var(--admiral-color-Success_Success50Main, ${a.theme.color["Success/Success 50 Main"]});
      }
      &:hover ${ol} {
        border-color: var(--admiral-color-Success_Success60, ${a.theme.color["Success/Success 60"]});
      }
    `}
  }

  &[data-status='error'],
  &:user-invalid {
    ${a=>!a.disabled&&!a.$readonly&&!a.$isLoading&&`
      ${ol} {
        border-color: var(--admiral-color-Error_Error60Main, ${a.theme.color["Error/Error 60 Main"]});
      }
  
      &:hover ${ol} {
        border-color: var(--admiral-color-Error_Error70, ${a.theme.color["Error/Error 70"]});
      }
    `}
  }

  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${hr(a.theme.shape)})`};

  ${({$skeleton:a})=>a&&Rf};
  ${({$skeleton:a})=>a&&p6};
`,Lg=Y.div`
  flex: 0 0 auto;

  word-break: break-word;
  display: flex;
  align-items: center;
  padding: ${({$dimension:a})=>{switch(a){case"xl":return"12px 16px";case"s":return"6px 12px";default:return"8px 16px"}}};

  background-color: transparent;

  ${({$dimension:a})=>{switch(a){case"xl":return _e["Body/Body 1 Long"];case"s":return _e["Body/Body 2 Long"];default:return _e["Body/Body 1 Short"]}}}
`,x6=V`
  ${_e["Body/Body 1 Short"]}
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  border-radius: var(--admiral-border-radius-Medium, ${a=>hr(a.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>yu(a.theme.shadow["Shadow 08"])});
  overflow: auto;
`,S6=Y(Af)`
  ${x6}
`,E6=Y.div`
  user-select: none;
`,$6=Y(Mf)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
  ${a=>a.$selected&&!a.$hovered&&!a.$preselected&&a.$multiple&&"background-color: transparent;"}
`,N6=({visibleValue:a,isSearchPanelOpen:i,targetRef:u,forceHideOverflowTooltip:c})=>{const s=h.useRef(null),[d,g]=h.useState(!1),[b,v]=h.useState(!1);h.useEffect(()=>{s.current&&or(s.current)!==d&&g(or(s.current))},[b,g]),h.useEffect(()=>{function y(){v(!0)}function $(){v(!1)}const x=s.current;if(x)return x.addEventListener("mouseenter",y),x.addEventListener("mouseleave",$),()=>{x.removeEventListener("mouseenter",y),x.removeEventListener("mouseleave",$)}},[v]);const m=!c&&!i&&b&&d;return _.jsxs(_.Fragment,{children:[_.jsx(d6,{ref:s,children:a}),m&&_.jsx(Mi,{renderContent:()=>a,targetElement:u.current})]})},_6=a=>a.stopPropagation(),w6=Y.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  pointer-events: none;
`,T6=h.forwardRef(({options:a,...i},u)=>{const c=h.useRef(null);return h.useEffect(()=>{function s(d){const g=P.getCode(d);g&&[P[" "],P.Enter,P.ArrowDown,P.ArrowUp].includes(g)&&d.preventDefault()}return c.current?.addEventListener("keydown",s),()=>c.current?.removeEventListener("keydown",s)},[]),_.jsxs(w6,{ref:ea(u,c),...i,onClick:_6,children:[_.jsx("option",{value:""}),a.map(s=>_.jsx("option",{value:s.value,disabled:s.disabled,children:s.value},s.value))]})}),Ug=h.createContext(null),M6=()=>h.useContext(Ug),C6=({children:a,...i})=>_.jsx(Ug.Provider,{value:i,children:a}),A6=(a="",i="",u="wholly")=>{const c=(u==="word"?i.split(" "):[i]).filter(Boolean).map(b=>b.toLowerCase()),s=["[","]","\\","^","$",".","|","?","*","+","(",")"],d=c.map(b=>`(${b.split("").map(v=>s.includes(v)?`\\${v}`:v).join("")})?`).join(""),g=a.split(new RegExp(d,"gi")).filter(Boolean);return!i||g.some(b=>c.includes(b.toLowerCase()))},O6=Y.label`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  box-sizing: content-box;
  padding: 0;
  user-select: none;

  cursor: ${a=>a.disabled?"not-allowed":a.readOnly?"default":"pointer"};

  ${a=>a.$dimension==="s"?_e["Body/Body 2 Short"]:_e["Body/Body 1 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.theme.color["Neutral/Neutral 90"]})`};

  fieldset[data-dimension='s'] && {
    ${_e["Body/Body 2 Short"]};
  }
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    cursor: not-allowed;
  }

  ${a=>a.readOnly?"pointer-events: none":""};
`,D6=Y.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: ${"8px"};
  ${a=>a.$dimension==="s"?_e["Body/Body 2 Short"]:_e["Body/Body 1 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.theme.color["Neutral/Neutral 90"]})`};
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
  fieldset[data-dimension='s'] && {
    ${_e["Body/Body 2 Short"]}
  }
`,B6=Y.div`
  margin-top: 4px;
  ${a=>a.$dimension==="s"?_e["Caption/Caption 1"]:_e["Body/Body 2 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`};

  fieldset[data-dimension='s'] && {
    ${_e["Caption/Caption 1"]}
  }
`,R6=Y(Mg)`
  margin-top: 2px;
`,kg=h.forwardRef(({children:a,disabled:i=!1,readOnly:u=!1,hovered:c,dimension:s="m",error:d,indeterminate:g=!1,extraText:b,className:v,id:m,name:y,style:$,...x},T)=>{const S=h.useMemo(()=>m||Ci(),[m]),H={"data-field-id":S,"data-field-name":y};return $f(x,H),_.jsxs(O6,{className:v,$dimension:s,disabled:i,readOnly:u,style:$,...H,onClick:B=>{B.target.tagName!=="INPUT"&&B.stopPropagation()},children:[_.jsx(R6,{...x,ref:T,disabled:i,readOnly:u,type:"checkbox",indeterminate:g,onKeyDown:B=>{u&&P.getCode(B)===P[" "]&&B.preventDefault(),x.onKeyDown?.(B)},"data-hovered":c,hovered:c,dimension:s,id:S,name:y,error:d}),a&&_.jsxs(D6,{$dimension:s,disabled:i,children:[a,b&&_.jsx(B6,{disabled:i,$dimension:s,children:b})]})]})});kg.displayName="CheckboxField";Y(Lg)`
  background-color: ${({active:a,selected:i,theme:u})=>i?`var(--admiral-color-Opacity_Focus, ${u.color["Opacity/Focus"]})`:a?`var(--admiral-color-Opacity_Hover, ${u.color["Opacity/Hover"]})`:"transparent"};

  color: ${({disabled:a,theme:i})=>a?`var(--admiral-color-Neutral_Neutral30, ${i.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${i.color["Neutral/Neutral 90"]})`};
  cursor: ${({disabled:a})=>a?"not-allowed":"pointer"};
  & > * {
    pointer-events: ${({disabled:a})=>a?"none":"all"};
  }
`;const z6=Y(kg)`
  margin-right: 8px;
  flex-shrink: 0;
`,H6=a=>Bg()?_.jsx(j6,{...a}):null,j6=({disabled:a=!1,id:i,value:u,children:c,renderOption:s,renderChip:d,...g})=>{const b=Bg(),v=Rg(),m=v?.disabled||a,y=h.useCallback(()=>c,[c]),$=d||y,x=h.useMemo(()=>s?s({disabled:a}):c,[s,a,u,c]),T={};mr(g,T,"data",!1);const S=h.useMemo(()=>({id:i,value:u,disabled:m,children:x,renderChip:$,...T}),[i,u,m,x,$]);return h.useEffect(()=>(b?.onConstantOptionMount?.(S),()=>b?.onConstantOptionUnMount?.(S)),[b?.onConstantOptionMount,b?.onConstantOptionUnMount,S]),null},L6=({id:a,disabled:i=!1,readOnly:u=!1,value:c,children:s,renderOption:d,renderChip:g,...b})=>{const v=M6(),m=Rg(),y=m?.disabled||i,$=x=>v?.multiple?(({selected:T=!1,hovered:S=!1})=>_.jsxs(_.Fragment,{children:[v?.showCheckbox&&_.jsx(z6,{checked:T,hovered:S,dimension:v?.dimension==="s"?"s":"m",disabled:i,onChange:()=>!1}),s]}))(x):s;return h.useEffect(()=>{const x=a||c,T={id:c,value:c,render:S=>{return d?d(S):h.createElement($6,{...S,dimension:(H=v?.dimension,H==="xl"?"l":H),key:x,...b,$selected:S.selected,$hovered:S.hovered,$preselected:S.preselected,$multiple:v?.multiple},$({selected:S.selected,hovered:S.hovered}));var H},disabled:y,readOnly:u};return v?.onDropDownOptionMount?.(T),()=>v?.onDropDownOptionUnMount?.(T)},[v?.onDropDownOptionMount,v?.onDropDownOptionUnMount,v?.dimension,v?.multiple]),null},p0=a=>_.jsxs(_.Fragment,{children:[_.jsx(H6,{...a}),_.jsx(L6,{...a})]}),U6=()=>h.useMemo(Ci,[]),k6=Y(Lg)`
  color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
`,g0=a=>a.stopPropagation(),v0=()=>{},qg=h.forwardRef(({value:a,isLoading:i,className:u,style:c,status:s,icons:d,portalTargetRef:g,targetElement:b,inputTargetRef:v,disabled:m,readOnly:y,placeholder:$,defaultValue:x,dimension:T="m",idleHeight:S="fixed",minRowCount:H="none",maxRowCount:B="none",mode:C="select",multiple:D=!1,showCheckbox:U=!0,displayClearIcon:ee=!1,onClearIconClick:Z,onInputChange:W,inputValue:I,defaultInputValue:fe,renderSelectValue:ne,onFocus:me,onBlur:Pe,children:He,alignDropdown:We="stretch",alignSelf:vt="stretch",skeleton:Ae=!1,locale:L,dropContainerCssMixin:F,dropContainerClassName:ae,dropContainerStyle:J,renderDropDownTopPanel:E,renderDropDownBottomPanel:R,renderTopPanel:Q,renderBottomPanel:X,forcedOpen:te=!1,onChangeDropDownState:ue,onInputKeyDown:re,onInputKeyUp:Ye,onInputKeyUpCapture:ve,onInputKeyDownCapture:Je,searchFormat:Mt="wholly",onFilterItem:Ge=A6,virtualScroll:De,title:Rt,forceHideOverflowTooltip:Ta=!1,onSelectedChange:qa,moveSelectedOnTop:$t,clearInputValueAfterSelect:Xe=!0,openButtonPropsConfig:Lt=v0,clearButtonPropsConfig:zt=v0,...ht},ta)=>{const Ul=Ef()||vu,hn=L?.emptyMessage||_.jsx(k6,{$dimension:T,children:Ul.locales[Ul.currentLocale].select.emptyMessage}),[Ze,kl]=h.useState(a??x),[Ma,yt]=h.useState(""),Fe=I===void 0?Ma:I,[ot,ie]=h.useState(!1),[ge,pe]=h.useState(),[je,Ie]=h.useState([]),[Be,Gt]=h.useState([]),[we,Vt]=h.useState(te),[Pt,aa]=h.useState(!1),[la,Ca]=h.useState(void 0),pr=a===void 0,na=C==="select",Ai=h.useMemo(()=>B!=="none"&&B>0?B:S==="fixed"?1:"none",[B,S])!=="none",mn=a??x,Aa=h.useRef(Array.isArray(mn)?mn:[]),ql=h.useRef(!1),va=h.useRef([]);h.useEffect(()=>{Array.isArray(a)&&(Aa.current=a)},[a]);const Oa=h.useMemo(()=>D?null:je.find(K=>K.value===Ze),[D,je,Ze]),et=h.useMemo(()=>D&&Array.isArray(Ze)?Ze.reduce((K,ce)=>{const ye=je.find(ct=>ct.value===ce);return ye&&K.push(ye),K},[]):[],[je,Ze,D]),Ct=Cf(we),[ya,pn]=h.useState([]);h.useEffect(()=>{if(D&&$t||!(ya.length>0)||pn([]),D&&$t&&Ct!==we&&we){const K=et.map(ye=>ye.value),ce=K.length>0?K.reduce((ye,ct)=>{const mt=Be.find(ua=>ua.value===ct);return mt&&ye.push(mt),ye},[]):[];pn(ce)}},[Be,we,et,D,$t]);const gr=h.useMemo(()=>{const K=ya.map(ye=>ye.value),ce=Be.filter(ye=>Ge(ye.value,Fe,Mt)).reduce((ye,ct)=>(K.includes(ct.value)||ye.push(ct),ye),[...ya]);return ce.length?ce:[{id:"emptyMessage",render:()=>_.jsx(E6,{children:hn},"empty"),disabled:!0}]},[i,Be,T,Fe,ya]);h.useEffect(()=>{ge&&(gr.find(K=>K.id===ge)||pe(void 0))},[gr,ge]);const ra=v??h.useRef(null),Ya=h.useRef(null),At=h.useRef(null),vr=b||g?.current||At.current,Ga=h.useRef(null),ia=h.useRef(null),Va=h.useRef({shouldExtendInputValue:!1}),sl=K=>{Ie(ce=>[...ce,K]),va.current.includes(K.value)&&(va.current=va.current.filter(ce=>ce!==K.value))},ut=K=>{Aa.current.includes(K.value)&&(va.current=[...va.current,K.value]),Ie(ce=>ce.filter(ye=>ye.value!==K.value))},Oi=h.useCallback(K=>{Gt(ce=>[...ce,K])},[]),Di=h.useCallback(K=>{Gt(ce=>ce.filter(ye=>ye.id!==K.id))},[]),ba=h.useCallback(()=>{Vt(!1),ra.current&&on(ra.current,{value:""}),ie(!0)},[Ze]),oa=h.useCallback(K=>{const ce=Ya.current;if(!ce)return;const ye=Array.from(ce.options),ct=ye.find(mt=>mt.value===K);if(ct&&(D||ye.forEach(mt=>mt.selected=!1),ct.selected=!D||!ct.selected,ce.dispatchEvent(new Event("change",{bubbles:!0})),D||ba(),Fe&&ra.current&&Xe)){on(ra.current,{value:"",selectionEnd:0,selectionStart:0});const mt=ge;pe(""),setTimeout(()=>pe(mt))}},[ba,D,Fe,ge]),xu=h.useCallback(()=>{const K=Ya.current;K&&(K.selectedIndex=-1,K.dispatchEvent(new Event("change",{bubbles:!0})))},[]);h.useEffect(()=>{te!==we&&Vt(te)},[te]),h.useEffect(()=>{ue?.(we),!we&&Pt&&document.activeElement!==At.current&&Ya.current?.focus()},[we,Pt]);const Bi=Z||xu,yr=Ai&&!we,Su=h.useCallback(()=>_.jsx(c6,{containerRef:Ga,options:et,shouldShowCount:yr,disabled:m,readOnly:y,onChipRemove:oa,onChipClick:g0,isOptionsListOpen:we,hasMaxHeight:!!B&&B!=="none"}),[et,yr,m,y,oa,we,B]),fl=(D?!Ze?.length:!Ze)&&!!$&&!Fe,gn=ne?.(Ze,Fe),xa=Oa?.children,br=D?Su():xa,dl=gn||br||Ze||null,Sa=typeof dl=="string",xr=Sa?_.jsx(N6,{visibleValue:dl,isSearchPanelOpen:we,targetRef:At,forceHideOverflowTooltip:Ta}):dl,vn=()=>{Vt(K=>!K)},Eu=()=>{if(!Fe&&Ze)return D?void(()=>{const K=(ce=[...et].reverse(),ce.find(({disabled:ye})=>!ye)?.value);var ce;K&&oa(K)})():ie(!1)};h.useEffect(()=>{if(!y&&!m)return At.current?.addEventListener("keydown",K),()=>{At.current?.removeEventListener("keydown",K)};function K(ce){const ye=P.getCode(ce);ye===P[" "]&&(!na&&Fe?ce.stopPropagation():we||(ce.preventDefault(),Vt(!0),ce.stopPropagation())),ye!==P.Enter||we||(ce.preventDefault(),Vt(!0),ce.stopPropagation()),ye!==P.ArrowDown&&ye!==P.ArrowUp||we||(Vt(!0),ce.stopPropagation());const ct=ce.ctrlKey||ce.metaKey||ce.altKey;ce.key.length!==1||ct||Sa&&!Fe&&ot&&(Va.current.shouldExtendInputValue=!0),ye!==P.Backspace||ce.repeat||Eu(),ye===P.Backspace&&((mt=>{if(!Sa||!ra.current||Fe||!ot||!Ze)return;mt.preventDefault();const ua=dl.slice(0,-1);on(ra.current,{value:ua,selectionEnd:ua.length,selectionStart:ua.length})})(ce),Vt(!0)),ye===P.Escape&&we&&(Vt(!1),ce.preventDefault(),ce.stopPropagation())}},[y,m,na,Fe,we,et]),h.useEffect(()=>{function K(){ql.current=!1}return At.current?.addEventListener("keyup",K),()=>{At.current?.removeEventListener("keyup",K)}},[]),h.useEffect(()=>{(!Pt&&!D||D)&&(ra.current&&on(ra.current,{value:""}),ie(!0))},[D,Pt]),h.useEffect(()=>{we&&(na?Ya.current?.focus():ra.current?.focus(),Ca(""))},[we,na]),h.useEffect(()=>{la&&pe("")},[la]),h.useEffect(()=>{ge&&Ca("")},[ge]),h.useEffect(()=>{if(we){const K=Ze&&!Array.isArray(Ze)?Ze:void 0;pe(K)}},[we]),h.useEffect(()=>{pr||kl(a)},[a,pr]),vg([At,ia],K=>{K.target&&At.current?.contains(K.target)||(aa(!1),ba())});const Ri=ot&&(D?!!Ze?.length:!!Ze),Nt=h.useMemo(()=>h.Children.map(He,K=>h.isValidElement(K)?h.cloneElement(K,{key:Ci(),...K.props}):null),[He]),zi=h.useMemo(()=>_.jsx(C6,{onDropDownOptionMount:Oi,onDropDownOptionUnMount:Di,dimension:T,multiple:D,showCheckbox:U,children:Nt}),[Nt,T,U,D]),$u=h.useMemo(()=>_.jsx(H2,{onConstantOptionMount:sl,onConstantOptionUnMount:ut,children:Nt}),[Nt]),yn=Yx(ht),Hi=hg(ht),Yl={icon:Of,id:"searchSelectClearIcon",onClick:Bi,"aria-hidden":!0},ji={$isOpen:we,onClick:vn,"aria-hidden":!0};return _.jsxs(b6,{className:u,style:c,$focused:Pt,$multiple:D,disabled:m,"data-disabled":m,$readonly:y,$isLoading:i,$dimension:T,ref:At,"data-status":s,onClick:m||y||i?void 0:K=>{K.target&&ia.current?.contains(K.target)||!na&&we||vn()},onFocus:K=>{Pt||(aa(!0),me?.(K))},onMouseDown:K=>{Pt&&K.preventDefault()},$skeleton:Ae,onBlur:K=>{K.currentTarget.contains(K.relatedTarget)||ia.current?.contains(K.relatedTarget)||(aa(!1),Vt(!1),Ya.current?.blur(),Pe?.(K),ql.current=!1)},title:Rt,children:[$u,zi,_.jsx(T6,{ref:ea(ta,Ya),value:Ze,multiple:D,disabled:m,options:je,...ht,onChange:K=>{if(ql.current&&na)return void Ca(K.target.value);const ce=D?Array.from(K.target.selectedOptions).map(ct=>ct.value):K.target.value;let ye=[];if(D&&Array.isArray(ce)){const ct=ce.filter(Ea=>!Aa.current.includes(Ea)&&!va.current.includes(Ea)),mt=Aa.current.filter(Ea=>!ce.includes(Ea)&&!va.current.includes(Ea));ye=[...Aa.current,...ct];const ua=[...va.current];mt.forEach(Ea=>{const Pa=ye.findIndex(bn=>Ea===bn);Pa>-1&&ye.splice(Pa,1);const Li=ua.findIndex(bn=>Ea===bn);Li>-1&&ua.splice(Li,1)}),Aa.current=ye,va.current=ua}pr&&kl(D?ye:ce),ht.onChange?.(K),qa?.(D?ye:ce)}}),_.jsx(ol,{}),_.jsxs(jg,{tabIndex:-1,ref:Ga,className:"selectValueWrapper",$dimension:T,$multiple:D,$minRowCount:H!=="none"?H:void 0,$maxRowCount:B!=="none"?B:void 0,$idleHeight:S,$opened:we,$isEmpty:fl,children:[ot&&xr,($&&fl||!na)&&_.jsx(m6,{"data-id":ht.id,placeholder:fl?$:"",tabIndex:-1,ref:ra,disabled:m,readOnly:y||na,value:Fe,defaultValue:fe,$isMultiple:D,$dimension:T,onChange:K=>{D||ie(!1),(ce=>{Va.current.shouldExtendInputValue&&Sa&&(ce.target.value=`${dl}${ce.target.value}`,Va.current.shouldExtendInputValue=!1)})(K),I===void 0&&yt(K.target.value),W?.(K)},onKeyDown:re,onKeyUp:Ye,onKeyUpCapture:ve,onKeyDownCapture:Je})]}),we&&!Ae&&_.jsx(_f,{ref:ia,tabIndex:-1,targetElement:vr,"data-dimension":T,alignSelf:We||vt,dropContainerCssMixin:F,className:ae,style:J,...yn,children:_.jsx(S6,{dimension:T==="xl"?"l":T,active:ge,selected:Ze,onActivateItem:K=>pe(K),onSelectItem:oa,onDeselectItem:oa,multiSelection:D,model:gr,renderTopPanel:E||Q,renderBottomPanel:R||X,containerRef:ia,virtualScroll:De,preventFocusSteal:!0,preselectedModeActive:na,preselected:la,onPreselectItem:Ca,onMenuKeyDown:()=>{ql.current=!0},...Hi})}),_.jsxs(y6,{$multiple:D,$dimension:T,onClick:g0,onMouseDown:K=>K.preventDefault(),children:[i&&_.jsx(Og,{dimension:T==="s"?"ms":"m"}),ee&&!y&&Ri&&_.jsx(jf,{...Yl,...zt(Yl)}),d,!y&&_.jsx(Gx,{"data-disabled":!!m||void 0,"data-loading":!!i||void 0,...ji,...Lt(ji)})]})]})});qg.displayName="Select";var y0;function rf(){return rf=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},rf.apply(null,arguments)}var q6=function(a){return h.createElement("svg",rf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),y0||(y0=h.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M20.65 18c0 1.66-1.35 3-3 3h-8c-1.31 0-2.43-.84-2.84-2.01q-.36-.015-.69-.12a.65.65 0 0 1-.43-.81c.1-.35.46-.54.81-.44.05.02.1.03.15.04V8c0-1.66 1.34-3 3-3h7.16a1 1 0 0 0-.04-.15.64.64 0 0 1 .43-.81c.35-.11.71.09.81.43q.09.27.12.57A3 3 0 0 1 20.65 8zm-11 1.7h8c.93 0 1.7-.76 1.7-1.7V8c0-.94-.77-1.7-1.7-1.7h-8c-.94 0-1.71.76-1.71 1.7v10c0 .94.77 1.7 1.71 1.7m-4.28-3.2c.02.06.03.12.03.19a.647.647 0 0 1-1.27.18C4.04 16.6 4 16.3 4 16v-.95c0-.35.29-.65.65-.65.35 0 .65.3.65.65V16c0 .17.02.34.07.5m-.07-4.56c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65v-1.89c0-.36.29-.65.65-.65.35 0 .65.29.65.65zm0-5c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65v-.95c0-.36.05-.72.15-1.06.11-.34.47-.54.82-.43a.64.64 0 0 1 .43.81c-.07.21-.1.45-.1.68zm1.66-3.19c-.34.1-.71-.09-.81-.44a.6.6 0 0 1-.03-.19c0-.27.18-.53.46-.62.34-.1.7-.16 1.07-.16h.64c.36 0 .65.3.65.65 0 .36-.29.65-.65.65h-.64c-.24 0-.47.04-.69.11m9.06-1.27a.64.64 0 0 1 .43.81c-.1.34-.47.53-.81.43-.16-.05-.32-.08-.5-.08h-.77c-.36 0-.65-.29-.65-.65 0-.35.29-.65.65-.65h.77c.31 0 .6.05.88.14m-5.6 1.16c-.35 0-.65-.29-.65-.65 0-.35.3-.65.65-.65h1.42c.36 0 .65.3.65.65 0 .36-.29.65-.65.65z"})))};const of=a=>{switch(a.$dimension){case"xl":default:return 24;case"s":return 20}},kf=a=>{switch(a.$dimension){case"xl":return 16;case"m":default:return 8;case"s":return 6}},qf=a=>{switch(a.$dimension){case"xl":case"m":default:return 16;case"s":return 12}},Y6=V`
  padding-right: ${a=>qf(a)+(a.$iconsAfterCount?of(a)+8:0)}px;
`,G6=V`
  background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
  border-color: transparent;
`,jt=Y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border: 1px solid var(--admiral-color-Neutral_Neutral40, ${a=>a.theme.color["Neutral/Neutral 40"]});
  border-radius: inherit;

  [data-status='error'] &&& {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] &&& {
    border: 1px solid var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});
  }

  [data-read-only] &&& {
    border-color: transparent;
  }
`,V6=V`
  background-color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});

  &:focus + ${jt} {
    border: 2px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:disabled + ${jt}, [data-read-only] &&& + ${jt} {
    border-color: transparent;
  }

  &:hover:not(:focus) + ${jt} {
    border-color: ${a=>a.disabled?"transparent":`var(--admiral-color-Neutral_Neutral60, ${a.theme.color["Neutral/Neutral 60"]})`};
  }

  &:user-invalid + ${jt}, &:user-invalid:hover + ${jt} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-status='error']
    &&&:hover:not(:disabled)
    + ${jt},
    &:user-invalid:hover:not(:disabled)
    + ${jt} {
    border: 1px solid var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
  }

  [data-status='success'] &&&:hover:not(:disabled) + ${jt} {
    border: 1px solid var(--admiral-color-Success_Success60, ${a=>a.theme.color["Success/Success 60"]});
  }

  [data-status='error']
    &&&:focus:not(:disabled)
    + ${jt},
    &:user-invalid:focus:not(:disabled)
    + ${jt} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] &&&:focus:not(:disabled) + ${jt} {
    border: 2px solid var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${G6}
  }

  [data-read-only] &&&:hover + ${jt}, [data-read-only] &&&:focus + ${jt} {
    border-color: transparent;
  }
`,P6=V`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,Yg=V`
  outline: none;
  appearance: none;
  border-radius: inherit;
  border: none;
  box-sizing: border-box;
  margin: 0;
  padding: ${kf}px ${qf}px;
  overflow-wrap: break-word;

  ${a=>a.$dimension==="s"?_e["Body/Body 2 Long"]:_e["Body/Body 1 Long"]}
  ${V6}
  ${Y6}
`,X6=Y.div`
  ${Tf}
  ${Yg}

  [data-disable-copying] & {
    cursor: default;
  }
`,Q6=Y.textarea`
  ${Tf}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  resize: none;

  flex: 1 1 auto;
  min-width: 10px;
  background: transparent;

  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  ${a=>a.$dimension==="s"?_e["Body/Body 2 Long"]:_e["Body/Body 1 Long"]}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:disabled::placeholder,
  &:disabled {
    cursor: not-allowed;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  ${Yg}
  ${P6}
`,Z6=Y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: ${qf}px;
  padding-top: ${kf}px;

  & > * {
    display: block;
    width: ${of}px;
    height: ${of}px;
  }
`;function F6(a){return a}const K6=a=>a.preventDefault(),js=(a,i)=>a*(i==="s"?20:24)+2*kf({$dimension:i}),W6=Y(Cg)`
  min-height: ${a=>js(a.$rows,a.$dimension)}px;
  ${a=>a.$maxRows?`max-height: ${js(a.$maxRows,a.$dimension)}px;`:""}
  ${a=>a.$autoHeight?"":`height: ${js(a.$rows,a.$dimension)}px;`}
  ${a=>a.disabled?"cursor: not-allowed;":""}
`,J6=FS(h.forwardRef((a,i)=>_.jsx("div",{ref:i,children:_.jsx(jf,{...a})})));function b0(a){return String(a||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/(\r?\n)$/g,"<br /><br />").replace(/\r?\n/g,"<br /> ")}const x0=()=>{},Gg=h.forwardRef(({rows:a=3,maxRows:i,value:u,displayClearIcon:c,displayCopyIcon:s,status:d,handleInput:g=F6,containerRef:b,icons:v,iconsAfter:m,children:y,className:$,autoHeight:x,skeleton:T=!1,dimension:S="m",disableCopying:H,locale:B,clearIconPropsConfig:C=x0,copyIconPropsConfig:D=x0,...U},ee)=>{const Z=Ef()||vu,W=h.useRef(null),[I,fe]=h.useState(null),ne=h.useRef(null),me=h.Children.toArray(m||v),Pe=B?.copyTextMessage||Z.locales[Z.currentLocale]?.textArea?.copyTextMessage,He=B?.copiedMessage||Z.locales[Z.currentLocale]?.textArea?.copiedMessage,[We,vt]=h.useState(Pe),Ae=E=>{E.preventDefault()},L={icon:Of,onMouseDown:Ae,onClick:()=>{W.current&&on(W.current,{value:""})},"aria-hidden":!0},F={tooltipDimension:"s",renderContent:()=>We,icon:q6,onMouseDown:Ae,onClick:()=>{document.hasFocus()||window.focus(),W.current&&(navigator.clipboard.writeText(W.current.value),vt(He),setTimeout(()=>vt(Pe),2e3))},"aria-hidden":!0};!U.readOnly&&W?.current?.value&&(c?me.unshift(h.createElement(jf,{...L,...C(L),key:"clear-icon"})):s&&me.unshift(h.createElement(J6,{...F,...D(F),key:"copy-icon"})));const ae=me.length,J=u!=null?g({value:String(u)}):{};return h.useLayoutEffect(()=>{function E(){const{value:R,selectionStart:Q,selectionEnd:X}=this,te=g({value:R,selectionStart:Q,selectionEnd:X});on(this,te)}if(W.current){const R=W.current;R.addEventListener("input",E);const{value:Q,selectionStart:X,selectionEnd:te}=R,ue=g({value:Q,selectionStart:X,selectionEnd:te});return on(R,ue),()=>{R.removeEventListener("input",E)}}},[g]),h.useEffect(()=>{function E(){const{value:R}=this,Q=ne.current;Q&&(Q.innerHTML=b0(R),this.style.overflowY=Q.clientHeight<Q.scrollHeight?"":"hidden")}if(x&&W.current&&ne.current){const R=W.current;return ne.current.innerHTML=b0(R.value),R.addEventListener("input",E),R.style.overflowY=ne.current.clientHeight<ne.current.scrollHeight?"":"hidden",()=>{R.removeEventListener("input",E),R.style.overflowY=""}}},[x,J.value,U.defaultValue]),_.jsxs(W6,{className:$,ref:b,"data-read-only":!!U.readOnly||void 0,"data-status":d,$skeleton:T,disabled:U.disabled,"data-disable-copying":!!H||void 0,$autoHeight:!!x,$rows:a,$maxRows:i,$dimension:S,...H&&{onMouseDown:K6},children:[_.jsx(X6,{ref:ne,$dimension:S,disabled:U.disabled,$iconsAfterCount:ae}),_.jsx(Q6,{ref:ea(ee,W,E=>fe(E)),...U,$dimension:S,$iconsAfterCount:ae,$autoHeight:x,value:J.value}),_.jsx(jt,{}),_.jsx(gg,{contentNode:I}),ae>0&&_.jsx(Z6,{disabled:U.disabled,$dimension:S,children:me}),y]})});Gg.displayName="TextArea";const I6=Y(qg)`
  [data-status='error'] & {
    border-color: var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }
`,Vg=h.forwardRef((a,i)=>{const{className:u,displayInline:c,status:s,required:d,extraText:g,label:b,id:v=U6(),disabled:m,skeleton:y,...$}=a,x={className:u,extraText:g,status:s,required:d,label:b,id:v,displayInline:c,disabled:m,skeleton:y,"data-field-id":v,"data-field-name":$.name};dg($,x),$f($,x);const T={ref:i,id:v,"aria-required":d,status:s,disabled:m,skeleton:y,...$};return _.jsx(Hf,{...x,children:_.jsx(I6,{...T})})});Vg.displayName="SelectField";const uf=h.forwardRef((a,i)=>{const u=h.useRef(null),{className:c,maxLength:s,displayInline:d,status:g,required:b,extraText:v,label:m,id:y=Ci(),disabled:$,displayCharacterCounter:x,characterCounterVisibilityThreshold:T,skeleton:S,...H}=a,B={className:c,extraText:v,status:g,required:b,label:m,id:y,displayInline:d,disabled:$,maxLength:s,inputRef:u,displayCharacterCounter:x,characterCounterVisibilityThreshold:T,skeleton:S,"data-field-id":y,"data-field-name":H.name};dg(H,B),$f(H,B);const C={ref:ea(i,u),id:y,"aria-required":b,status:g,disabled:$,maxLength:s,skeleton:S,...H};return _.jsx(Hf,{...B,children:_.jsx(Gg,{...C})})});uf.displayName="TextField";const eE=V`
  background: ${({$background:a,theme:i})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success50Main, ${i.color["Success/Success 50 Main"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary60Main, ${i.color["Primary/Primary 60 Main"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error60Main, ${i.color["Error/Error 60 Main"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning50Main, ${i.color["Warning/Warning 50 Main"]})`;default:return a}}};
`,tE=V`
  background: ${({$background:a,theme:i})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success10, ${i.color["Success/Success 10"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary10, ${i.color["Primary/Primary 10"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error10, ${i.color["Error/Error 10"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning10, ${i.color["Warning/Warning 10"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral8, ${i.color["Opacity/Neutral 8"]})`;default:return a||`var(--admiral-color-Opacity_Neutral8, ${i.color["Opacity/Neutral 8"]})`}}};
`,aE=V`
  border: 1px solid
    ${({$border:a,theme:i})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success40, ${i.color["Success/Success 40"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary50, ${i.color["Primary/Primary 50"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error50, ${i.color["Error/Error 50"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning40, ${i.color["Warning/Warning 40"]})`;case"neutral":return`var(--admiral-color-Neutral_Neutral40, ${i.color["Neutral/Neutral 40"]})`;default:return a||`var(--admiral-color-Neutral_Neutral40, ${i.color["Neutral/Neutral 40"]})`}}};
`,lE=V`
  background: ${({$backgroundHover:a,theme:i})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success20, ${i.color["Success/Success 20"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary20, ${i.color["Primary/Primary 20"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error20, ${i.color["Error/Error 20"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning20, ${i.color["Warning/Warning 20"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral12, ${i.color["Opacity/Neutral 12"]})`;default:return a||`var(--admiral-color-Opacity_Neutral12, ${i.color["Opacity/Neutral 12"]})`}}};
`,nE=Y.button`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;

  ${({$dimension:a})=>`
    height: ${a==="s"?20:24}px;
    padding: ${a==="s"?1:3}px ${a==="s"?5:7}px;
  `}

  ${({$width:a})=>a&&`width: ${typeof a=="number"?`${a}px`:a};`}
  border-radius: var(--admiral-border-radius-Small, ${a=>nr(a.theme.shape)});
  ${({$statusViaBackground:a,theme:i})=>a?tE:`background: var(--admiral-color-Opacity_Neutral8, ${i.color["Opacity/Neutral 8"]});`}
  ${({$statusViaBackground:a})=>a?aE:"border: 1px solid transparent;"}

  display: inline-flex;
  align-items: center;
  cursor: ${({$clickable:a})=>a?"pointer":"default"};

  &:hover,
  &:active {
    ${({$statusViaBackground:a,$clickable:i})=>i&&!a?"border: 1px solid transparent;":""}
    ${({$statusViaBackground:a,theme:i,$clickable:u})=>u?a?lE:`background: var(--admiral-color-Opacity_Neutral12, ${i.color["Opacity/Neutral 12"]});`:""}
  }

  &:focus-visible {
    outline: none;

    &:before {
      content: '';
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: var(--admiral-border-radius-Small, ${a=>nr(a.theme.shape)});
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }
`,rE=Y.span`
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${_e["Caption/Caption 1"]}
`,iE=Y.div`
  display: flex;
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  ${eE}
`,oE=Y.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-right: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }
`,uE=Y.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-left: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:hover {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
    }
  }
`,lu=h.forwardRef(({children:a,kind:i="neutral",dimension:u="m",width:c,statusViaBackground:s=!1,isBorderHidden:d=!1,icon:g,statusIcon:b,onClick:v,...m},y)=>{const $=h.useRef(null),x=h.useRef(null),[T,S]=h.useState(!1),[H,B]=h.useState(!1),C=typeof i=="object"?i.background?i.background:"neutral":i,D=d?"transparent":typeof i=="object"?i.background&&i.border?i.border:"neutral":i,U=typeof i=="object"?i.backgroundHover?i.backgroundHover:i.background?i.background:"neutral":i;return h.useLayoutEffect(()=>{const ee=x.current;ee&&or(ee)!==T&&S(or(ee))},[H,S]),h.useLayoutEffect(()=>{function ee(){B(!0)}function Z(){B(!1)}const W=$.current;if(W)return W.addEventListener("mouseenter",ee),W.addEventListener("mouseleave",Z),W.addEventListener("focus",ee),W.addEventListener("blur",Z),()=>{W.removeEventListener("mouseenter",ee),W.removeEventListener("mouseleave",Z),W.removeEventListener("focus",ee),W.removeEventListener("blur",Z)}},[B]),_.jsxs(_.Fragment,{children:[_.jsxs(nE,{ref:ea(y,$),$width:c,onClick:v,$clickable:!!v,$statusViaBackground:s,$border:D,$background:C,$backgroundHover:U,$dimension:u,type:"button",...m,children:[C!=="neutral"&&!s&&_.jsx(iE,{$background:C}),s&&g&&_.jsx(oE,{children:g}),a&&_.jsx(rE,{ref:x,children:a}),b&&_.jsx(uE,{children:b})]}),H&&T&&_.jsx(Mi,{targetElement:$.current,renderContent:()=>a})]})});lu.displayName="Tag";const cE=V`
  ${Df};
  pointer-events: none;
`,sE=Y.span`
  color: ${({$color:a,theme:i,$skeleton:u})=>{const c=`--admiral-color-${a?.replace("/","_").replaceAll(" ","")}`;return u?"transparent":a?i.color[a]?`var(${c}, ${i.color[a]})`:a:`var(--admiral-color-Neutral_Neutral90, ${i.color[kx]})`}};
  ${a=>a.theme.typography[a.$font]};
  ${a=>a.$cssMixin?a.$cssMixin:""}
  ${a=>a.$skeleton&&cE}
`,cr=wf(({font:a,color:i,cssMixin:u,skeleton:c,...s},d)=>_.jsx(sE,{ref:d,...s,$font:a,$color:i,$cssMixin:u,$skeleton:c}));cr.displayName="T";const fE="/assets/VTBGroupUI-SemiBold-Wupg3RVc.ttf",dE="/assets/VTBGroupUI-Medium-CJW7SkqK.otf",hE="/assets/VTBGroupUI-Regular-JWIonCWQ.otf",mE=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${fE}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${dE}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${hE}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
`;function pE(a){return _.jsx("style",{type:"text/css",children:mE,...a})}const gE=[{id:"1",title:"Сделать 1 домашнее задание в ИТ-Лагере",description:"Создать данный менеджер задач",category:"Bug",status:"To Do",priority:"High"},{id:"2",title:"Поучавствовать в 1 воркшопе",description:"Перед этим сделать 1 дз",category:"Feature",status:"In Progress",priority:"Medium"},{id:"3",title:"Пройти весь курс в лагере",description:"",category:"Documentation",status:"Done",priority:"Low"},{id:"4",title:"Написать 1 тест по frontend",category:"Test",status:"To Do",priority:"Medium"},{id:"5",title:"Пройти на стажировку в Т1",category:"Refactor",status:"In Progress",priority:"High"}],Pg=h.createContext(void 0),vE=({children:a})=>{const[i,u]=h.useState(gE),c=d=>{u(i.map(g=>g.id===d.id?d:g))},s=d=>i.find(g=>g.id===d);return _.jsx(Pg.Provider,{value:{tasks:i,updateTask:c,getTaskById:s},children:a})},Xg=()=>{const a=h.useContext(Pg);if(!a)throw new Error("useTasks must be used within a TaskProvider");return a},Qg=Y.div`
  background-color: #fcfcfd;
  border: 1px solid #d1d4d6;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  width: 100%;
  padding: ${({padding:a})=>a||"24px"};
  max-width: ${({maxWidth:a})=>a||"unset"};
  display: flex;
  flex-direction: column;
  gap: 16px;
`,yE=a=>({Low:"neutral",Medium:"warning",High:"danger"})[a],bE=Y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,xE=({task:a})=>{const i=df();return _.jsxs(Qg,{maxWidth:"350px",children:[_.jsx(cr,{font:"Subtitle/Subtitle 1",children:a.title}),a.description&&_.jsx(cr,{font:"Body/Body 2 Long",children:a.description}),_.jsxs(bE,{children:[_.jsx(lu,{kind:"success",children:a.status}),_.jsx(lu,{kind:"primary",children:a.category}),_.jsx(lu,{kind:yE(a.priority),children:a.priority})]}),_.jsx(ir,{dimension:"s",appearance:"secondary",onClick:()=>i(`/task/${a.id}`),style:{marginTop:"auto"},children:"Редактировать"})]})},SE=Y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
`,EE=({tasks:a})=>_.jsx(SE,{children:a.map(i=>_.jsx(xE,{task:i},i.id))}),cf=Y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
  padding: 32px 24px;
  box-sizing: border-box;
  margin: 0 auto;
`,In=({label:a,value:i,options:u,onChange:c,allowAll:s})=>_.jsxs(Vg,{label:a,value:i,onChange:d=>c(d.target.value),children:[s&&_.jsx(p0,{value:"All",children:"Все"}),u.map(d=>_.jsx(p0,{value:d,children:d},d))]}),Zg=["Bug","Feature","Documentation","Refactor","Test"],Fg=["To Do","In Progress","Done"],Kg=["Low","Medium","High"],$E=(a,i)=>a.filter(u=>{const c=i.status==="All"||u.status===i.status,s=i.category==="All"||u.category===i.category,d=i.priority==="All"||u.priority===i.priority;return c&&s&&d}),NE=Y.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1100px;
  margin-bottom: 32px;

  @media (max-width: 600px) {
    flex-direction: column; 
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }
`,_E=Y(cr)`
  color: #fcfcfd;
`,wE=Y.div`
  background-color: #fcfcfd;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  box-sizing: border-box;
  border: 1px solid #d1d4d6;
`,TE=()=>{const{tasks:a}=Xg(),[i,u]=h.useState(!1),[c,s]=h.useState({status:"All",category:"All",priority:"All"}),d=(v,m)=>{s(y=>({...y,[v]:m}))},g=()=>{s({status:"All",category:"All",priority:"All"})},b=h.useMemo(()=>$E(a,c),[a,c]);return _.jsxs(cf,{children:[_.jsxs(NE,{children:[_.jsx(_E,{font:"Header/H1",children:"Менеджер задач"}),_.jsx(ir,{appearance:"primary",dimension:"s",onClick:()=>u(v=>!v),children:i?"Скрыть фильтры":"Фильтры"})]}),i&&_.jsxs(wE,{children:[_.jsx(In,{label:"Статус",value:c.status,options:Fg,onChange:v=>d("status",v),allowAll:!0}),_.jsx(In,{label:"Категория",value:c.category,options:Zg,onChange:v=>d("category",v),allowAll:!0}),_.jsx(In,{label:"Приоритет",value:c.priority,options:Kg,onChange:v=>d("priority",v),allowAll:!0}),_.jsx(ir,{appearance:"secondary",onClick:g,children:"Сбросить"})]}),_.jsx(EE,{tasks:b})]})},ME=Y.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`,CE=Y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`,AE=({taskId:a})=>{const{getTaskById:i,updateTask:u}=Xg(),c=df(),[s,d]=h.useState(null);if(h.useEffect(()=>{const v=i(a);v?d(v):c("/")},[a,i,c]),!s)return _.jsx(cr,{font:"Main/L",children:"Загрузка..."});const g=(v,m)=>{d(y=>y?{...y,[v]:m}:null)},b=v=>{v.preventDefault(),s&&(u(s),c("/"))};return _.jsxs(Qg,{as:"form",onSubmit:b,padding:"40px",maxWidth:"1000px",children:[_.jsx(uf,{label:"Заголовок",value:s.title,onChange:v=>g("title",v.target.value),required:!0}),_.jsx(uf,{label:"Описание",placeholder:"Опишите задачу подробнее...",value:s.description,onChange:v=>g("description",v.target.value),style:{minHeight:"120px"}}),_.jsxs(CE,{children:[_.jsx(In,{label:"Статус",value:s.status,options:Fg,onChange:v=>g("status",v)}),_.jsx(In,{label:"Категория",value:s.category,options:Zg,onChange:v=>g("category",v)}),_.jsx(In,{label:"Приоритет",value:s.priority,options:Kg,onChange:v=>g("priority",v)})]}),_.jsxs(ME,{children:[_.jsx(ir,{type:"submit",appearance:"primary",disabled:!s.title.trim(),children:"Сохранить"}),_.jsx(ir,{type:"button",appearance:"secondary",onClick:()=>c("/"),children:"Отмена"})]})]})},OE=()=>{const{id:a}=U1();return a?_.jsx(cf,{children:_.jsx(AE,{taskId:a})}):_.jsx(cf,{children:_.jsx(cr,{font:"Header/H1",children:"Задача не найдена"})})};function DE(){return _.jsx(vE,{children:_.jsxs(eb,{children:[_.jsx(Us,{path:"/",element:_.jsx(TE,{})}),_.jsx(Us,{path:"/task/:id",element:_.jsx(OE,{})})]})})}u1.createRoot(document.getElementById("root")).render(_.jsx(jl.StrictMode,{children:_.jsx(Nb,{children:_.jsxs(Bx,{theme:vu,children:[_.jsx(pE,{}),_.jsx(DE,{})]})})}));
