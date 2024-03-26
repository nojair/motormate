(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nu(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Ue={},ys=[],Qt=()=>{},v0=()=>!1,Ha=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vu=t=>t.startsWith("onUpdate:"),ft=Object.assign,Mu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},E0=Object.prototype.hasOwnProperty,be=(t,e)=>E0.call(t,e),te=Array.isArray,vs=t=>to(t)==="[object Map]",Wa=t=>to(t)==="[object Set]",Sd=t=>to(t)==="[object Date]",he=t=>typeof t=="function",et=t=>typeof t=="string",pr=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",Em=t=>(Le(t)||he(t))&&he(t.then)&&he(t.catch),wm=Object.prototype.toString,to=t=>wm.call(t),w0=t=>to(t).slice(8,-1),Tm=t=>to(t)==="[object Object]",Lu=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=Nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ka=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},T0=/-(\w)/g,Sn=Ka(t=>t.replace(T0,(e,n)=>n?n.toUpperCase():"")),I0=/\B([A-Z])/g,qs=Ka(t=>t.replace(I0,"-$1").toLowerCase()),Ga=Ka(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xl=Ka(t=>t?`on${Ga(t)}`:""),mr=(t,e)=>!Object.is(t,e),Yo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ua=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ci=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Rd;const Im=()=>Rd||(Rd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fu(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=et(r)?R0(r):Fu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(et(t)||Le(t))return t}const b0=/;(?![^(]*\))/g,A0=/:([^]+)/,S0=/\/\*[^]*?\*\//g;function R0(t){const e={};return t.replace(S0,"").split(b0).forEach(n=>{if(n){const r=n.split(A0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function qt(t){let e="";if(et(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const r=qt(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const P0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",C0=Nu(P0);function bm(t){return!!t||t===""}function x0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Qa(t[r],e[r]);return n}function Qa(t,e){if(t===e)return!0;let n=Sd(t),r=Sd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=pr(t),r=pr(e),n||r)return t===e;if(n=te(t),r=te(e),n||r)return n&&r?x0(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Qa(t[o],e[o]))return!1}}return String(t)===String(e)}function O0(t,e){return t.findIndex(n=>Qa(n,e))}const Dr=t=>et(t)?t:t==null?"":te(t)||Le(t)&&(t.toString===wm||!he(t.toString))?JSON.stringify(t,Am,2):String(t),Am=(t,e)=>e&&e.__v_isRef?Am(t,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Zl(r,i)+" =>"]=s,n),{})}:Wa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Zl(n))}:pr(e)?Zl(e):Le(e)&&!te(e)&&!Tm(e)?String(e):e,Zl=(t,e="")=>{var n;return pr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class Sm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Rm(t){return new Sm(t)}function k0(t,e=Bt){e&&e.active&&e.effects.push(t)}function Pm(){return Bt}function D0(t){Bt&&Bt.cleanups.push(t)}let jr;class Uu{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,k0(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,es();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(N0(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ts()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ar,n=jr;try{return ar=!0,jr=this,this._runnings++,Pd(this),this.fn()}finally{Cd(this),this._runnings--,jr=n,ar=e}}stop(){var e;this.active&&(Pd(this),Cd(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function N0(t){return t.value}function Pd(t){t._trackId++,t._depsLength=0}function Cd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Cm(t.deps[e],t);t.deps.length=t._depsLength}}function Cm(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ar=!0,Nc=0;const xm=[];function es(){xm.push(ar),ar=!1}function ts(){const t=xm.pop();ar=t===void 0?!0:t}function $u(){Nc++}function ju(){for(Nc--;!Nc&&Vc.length;)Vc.shift()()}function Om(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Cm(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Vc=[];function km(t,e,n){$u();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Vc.push(r.scheduler)))}ju()}const Dm=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ha=new WeakMap,Br=Symbol(""),Mc=Symbol("");function Ut(t,e,n){if(ar&&jr){let r=ha.get(t);r||ha.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Dm(()=>r.delete(n))),Om(jr,s)}}function $n(t,e,n,r,s,i){const o=ha.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!pr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?Lu(n)&&a.push(o.get("length")):(a.push(o.get(Br)),vs(t)&&a.push(o.get(Mc)));break;case"delete":te(t)||(a.push(o.get(Br)),vs(t)&&a.push(o.get(Mc)));break;case"set":vs(t)&&a.push(o.get(Br));break}$u();for(const l of a)l&&km(l,4);ju()}function V0(t,e){var n;return(n=ha.get(t))==null?void 0:n.get(e)}const M0=Nu("__proto__,__v_isRef,__isVue"),Nm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pr)),xd=L0();function L0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ae(this);for(let i=0,o=this.length;i<o;i++)Ut(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){es(),$u();const r=Ae(this)[e].apply(this,n);return ju(),ts(),r}}),t}function F0(t){const e=Ae(this);return Ut(e,"has",t),e.hasOwnProperty(t)}class Vm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?J0:Um:i?Fm:Lm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=te(e);if(!s){if(o&&be(xd,n))return Reflect.get(xd,n,r);if(n==="hasOwnProperty")return F0}const a=Reflect.get(e,n,r);return(pr(n)?Nm.has(n):M0(n))||(s||Ut(e,"get",n),i)?a:Ke(a)?o&&Lu(n)?a:a.value:Le(a)?s?zu(a):Rn(a):a}}class Mm extends Vm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Ps(i);if(!da(r)&&!Ps(r)&&(i=Ae(i),r=Ae(r)),!te(e)&&Ke(i)&&!Ke(r))return l?!1:(i.value=r,!0)}const o=te(e)&&Lu(n)?Number(n)<e.length:be(e,n),a=Reflect.set(e,n,r,s);return e===Ae(s)&&(o?mr(r,i)&&$n(e,"set",n,r):$n(e,"add",n,r)),a}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&$n(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!pr(n)||!Nm.has(n))&&Ut(e,"has",n),r}ownKeys(e){return Ut(e,"iterate",te(e)?"length":Br),Reflect.ownKeys(e)}}class U0 extends Vm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $0=new Mm,j0=new U0,B0=new Mm(!0),Bu=t=>t,Ya=t=>Reflect.getPrototypeOf(t);function Co(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ae(t),i=Ae(e);n||(mr(e,i)&&Ut(s,"get",e),Ut(s,"get",i));const{has:o}=Ya(s),a=r?Bu:n?Wu:xi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function xo(t,e=!1){const n=this.__v_raw,r=Ae(n),s=Ae(t);return e||(mr(t,s)&&Ut(r,"has",t),Ut(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Oo(t,e=!1){return t=t.__v_raw,!e&&Ut(Ae(t),"iterate",Br),Reflect.get(t,"size",t)}function Od(t){t=Ae(t);const e=Ae(this);return Ya(e).has.call(e,t)||(e.add(t),$n(e,"add",t,t)),this}function kd(t,e){e=Ae(e);const n=Ae(this),{has:r,get:s}=Ya(n);let i=r.call(n,t);i||(t=Ae(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?mr(e,o)&&$n(n,"set",t,e):$n(n,"add",t,e),this}function Dd(t){const e=Ae(this),{has:n,get:r}=Ya(e);let s=n.call(e,t);s||(t=Ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&$n(e,"delete",t,void 0),i}function Nd(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&$n(t,"clear",void 0,void 0),n}function ko(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ae(o),l=e?Bu:t?Wu:xi;return!t&&Ut(a,"iterate",Br),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Do(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=vs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Bu:e?Wu:xi;return!e&&Ut(i,"iterate",l?Mc:Br),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Kn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function q0(){const t={get(i){return Co(this,i)},get size(){return Oo(this)},has:xo,add:Od,set:kd,delete:Dd,clear:Nd,forEach:ko(!1,!1)},e={get(i){return Co(this,i,!1,!0)},get size(){return Oo(this)},has:xo,add:Od,set:kd,delete:Dd,clear:Nd,forEach:ko(!1,!0)},n={get(i){return Co(this,i,!0)},get size(){return Oo(this,!0)},has(i){return xo.call(this,i,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:ko(!0,!1)},r={get(i){return Co(this,i,!0,!0)},get size(){return Oo(this,!0)},has(i){return xo.call(this,i,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:ko(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Do(i,!1,!1),n[i]=Do(i,!0,!1),e[i]=Do(i,!1,!0),r[i]=Do(i,!0,!0)}),[t,n,e,r]}const[z0,H0,W0,K0]=q0();function qu(t,e){const n=e?t?K0:W0:t?H0:z0;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const G0={get:qu(!1,!1)},Q0={get:qu(!1,!0)},Y0={get:qu(!0,!1)},Lm=new WeakMap,Fm=new WeakMap,Um=new WeakMap,J0=new WeakMap;function X0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Z0(t){return t.__v_skip||!Object.isExtensible(t)?0:X0(w0(t))}function Rn(t){return Ps(t)?t:Hu(t,!1,$0,G0,Lm)}function $m(t){return Hu(t,!1,B0,Q0,Fm)}function zu(t){return Hu(t,!0,j0,Y0,Um)}function Hu(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Z0(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function lr(t){return Ps(t)?lr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ps(t){return!!(t&&t.__v_isReadonly)}function da(t){return!!(t&&t.__v_isShallow)}function jm(t){return lr(t)||Ps(t)}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Ja(t){return Object.isExtensible(t)&&ua(t,"__v_skip",!0),t}const xi=t=>Le(t)?Rn(t):t,Wu=t=>Le(t)?zu(t):t;class Bm{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Uu(()=>e(this._value),()=>Jo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ae(this);return(!e._cacheable||e.effect.dirty)&&mr(e._value,e._value=e.effect.run())&&Jo(e,4),qm(e),e.effect._dirtyLevel>=2&&Jo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function eE(t,e,n=!1){let r,s;const i=he(t);return i?(r=t,s=Qt):(r=t.get,s=t.set),new Bm(r,s,i||!s,n)}function qm(t){var e;ar&&jr&&(t=Ae(t),Om(jr,(e=t.dep)!=null?e:t.dep=Dm(()=>t.dep=void 0,t instanceof Bm?t:void 0)))}function Jo(t,e=4,n){t=Ae(t);const r=t.dep;r&&km(r,e)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function ge(t){return Hm(t,!1)}function zm(t){return Hm(t,!0)}function Hm(t,e){return Ke(t)?t:new tE(t,e)}class tE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ae(e),this._value=n?e:xi(e)}get value(){return qm(this),this._value}set value(e){const n=this.__v_isShallow||da(e)||Ps(e);e=n?e:Ae(e),mr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:xi(e),Jo(this,4))}}function G(t){return Ke(t)?t.value:t}function At(t){return he(t)?t():G(t)}const nE={get:(t,e,n)=>G(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Wm(t){return lr(t)?t:new Proxy(t,nE)}function rE(t){const e=te(t)?new Array(t.length):{};for(const n in t)e[n]=iE(t,n);return e}class sE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return V0(Ae(this._object),this._key)}}function iE(t,e,n){const r=t[e];return Ke(r)?r:new sE(t,e,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cr(t,e,n,r){try{return r?t(...r):t()}catch(s){Xa(s,e,n)}}function rn(t,e,n,r){if(he(t)){const i=cr(t,e,n,r);return i&&Em(i)&&i.catch(o=>{Xa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(rn(t[i],e,n,r));return s}function Xa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){cr(l,null,10,[t,o,a]);return}}oE(t,n,s,r)}function oE(t,e,n,r=!0){console.error(t)}let Oi=!1,Lc=!1;const vt=[];let pn=0;const Es=[];let Xn=null,xr=0;const Km=Promise.resolve();let Ku=null;function Vt(t){const e=Ku||Km;return t?e.then(this?t.bind(this):t):e}function aE(t){let e=pn+1,n=vt.length;for(;e<n;){const r=e+n>>>1,s=vt[r],i=ki(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Gu(t){(!vt.length||!vt.includes(t,Oi&&t.allowRecurse?pn+1:pn))&&(t.id==null?vt.push(t):vt.splice(aE(t.id),0,t),Gm())}function Gm(){!Oi&&!Lc&&(Lc=!0,Ku=Km.then(Ym))}function lE(t){const e=vt.indexOf(t);e>pn&&vt.splice(e,1)}function cE(t){te(t)?Es.push(...t):(!Xn||!Xn.includes(t,t.allowRecurse?xr+1:xr))&&Es.push(t),Gm()}function Vd(t,e,n=Oi?pn+1:0){for(;n<vt.length;n++){const r=vt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;vt.splice(n,1),n--,r()}}}function Qm(t){if(Es.length){const e=[...new Set(Es)].sort((n,r)=>ki(n)-ki(r));if(Es.length=0,Xn){Xn.push(...e);return}for(Xn=e,xr=0;xr<Xn.length;xr++)Xn[xr]();Xn=null,xr=0}}const ki=t=>t.id==null?1/0:t.id,uE=(t,e)=>{const n=ki(t)-ki(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ym(t){Lc=!1,Oi=!0,vt.sort(uE);try{for(pn=0;pn<vt.length;pn++){const e=vt[pn];e&&e.active!==!1&&cr(e,null,14)}}finally{pn=0,vt.length=0,Qm(),Oi=!1,Ku=null,(vt.length||Es.length)&&Ym()}}function hE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ue;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ue;d&&(s=n.map(p=>et(p)?p.trim():p)),h&&(s=n.map(Ci))}let a,l=r[a=Xl(e)]||r[a=Xl(Sn(e))];!l&&i&&(l=r[a=Xl(qs(e))]),l&&rn(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rn(c,t,6,s)}}function Jm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!he(t)){const l=c=>{const u=Jm(c,e,!0);u&&(a=!0,ft(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Le(t)&&r.set(t,null),null):(te(i)?i.forEach(l=>o[l]=null):ft(o,i),Le(t)&&r.set(t,o),o)}function Za(t,e){return!t||!Ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,qs(e))||be(t,e))}let Xe=null,Xm=null;function fa(t){const e=Xe;return Xe=t,Xm=t&&t.type.__scopeId||null,e}function Yt(t,e=Xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Wd(-1);const i=fa(e);let o;try{o=t(...s)}finally{fa(i),r._d&&Wd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ec(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:E,inheritAttrs:I}=t;let w,x;const D=fa(t);try{if(n.shapeFlag&4){const W=s||r,B=W;w=fn(u.call(B,W,h,i,p,d,E)),x=l}else{const W=e;w=fn(W.length>1?W(i,{attrs:l,slots:a,emit:c}):W(i,null)),x=e.props?l:dE(l)}}catch(W){_i.length=0,Xa(W,t,1),w=$e(gr)}let L=w;if(x&&I!==!1){const W=Object.keys(x),{shapeFlag:B}=L;W.length&&B&7&&(o&&W.some(Vu)&&(x=fE(x,o)),L=Cs(L,x))}return n.dirs&&(L=Cs(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),w=L,fa(D),w}const dE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ha(n))&&((e||(e={}))[n]=t[n]);return e},fE=(t,e)=>{const n={};for(const r in t)(!Vu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function pE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Md(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Za(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Md(r,o,c):!0:!!o;return!1}function Md(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Za(n,i))return!0}return!1}function mE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Zm="components";function eg(t,e){return _E(Zm,t,!0,e)||t}const gE=Symbol.for("v-ndc");function _E(t,e,n=!0,r=!1){const s=Xe||ct;if(s){const i=s.type;if(t===Zm){const a=hw(i,!1);if(a&&(a===e||a===Sn(e)||a===Ga(Sn(e))))return i}const o=Ld(s[t]||i[t],e)||Ld(s.appContext[t],e);return!o&&r?i:o}}function Ld(t,e){return t&&(t[e]||t[Sn(e)]||t[Ga(Sn(e))])}const yE=t=>t.__isSuspense;function vE(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):cE(t)}const EE=Symbol.for("v-scx"),wE=()=>sn(EE);function TE(t,e){return Qu(t,null,e)}const No={};function qr(t,e,n){return Qu(t,e,n)}function Qu(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Ue){if(e&&i){const N=e;e=(...ce)=>{N(...ce),B()}}const l=ct,c=N=>r===!0?N:Nr(N,r===!1?1:void 0);let u,h=!1,d=!1;if(Ke(t)?(u=()=>t.value,h=da(t)):lr(t)?(u=()=>c(t),h=!0):te(t)?(d=!0,h=t.some(N=>lr(N)||da(N)),u=()=>t.map(N=>{if(Ke(N))return N.value;if(lr(N))return c(N);if(he(N))return cr(N,l,2)})):he(t)?e?u=()=>cr(t,l,2):u=()=>(p&&p(),rn(t,l,3,[E])):u=Qt,e&&r){const N=u;u=()=>Nr(N())}let p,E=N=>{p=L.onStop=()=>{cr(N,l,4),p=L.onStop=void 0}},I;if(rl)if(E=Qt,e?n&&rn(e,l,3,[u(),d?[]:void 0,E]):u(),s==="sync"){const N=wE();I=N.__watcherHandles||(N.__watcherHandles=[])}else return Qt;let w=d?new Array(t.length).fill(No):No;const x=()=>{if(!(!L.active||!L.dirty))if(e){const N=L.run();(r||h||(d?N.some((ce,ne)=>mr(ce,w[ne])):mr(N,w)))&&(p&&p(),rn(e,l,3,[N,w===No?void 0:d&&w[0]===No?[]:w,E]),w=N)}else L.run()};x.allowRecurse=!!e;let D;s==="sync"?D=x:s==="post"?D=()=>Dt(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),D=()=>Gu(x));const L=new Uu(u,Qt,D),W=Pm(),B=()=>{L.stop(),W&&Mu(W.effects,L)};return e?n?x():w=L.run():s==="post"?Dt(L.run.bind(L),l&&l.suspense):L.run(),I&&I.push(B),B}function IE(t,e,n){const r=this.proxy,s=et(t)?t.includes(".")?tg(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=ro(this),a=Qu(s,i.bind(r),n);return o(),a}function tg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Nr(t,e,n=0,r){if(!Le(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ke(t))Nr(t.value,e,n,r);else if(te(t))for(let s=0;s<t.length;s++)Nr(t[s],e,n,r);else if(Wa(t)||vs(t))t.forEach(s=>{Nr(s,e,n,r)});else if(Tm(t))for(const s in t)Nr(t[s],e,n,r);return t}function Rt(t,e){if(Xe===null)return t;const n=sl(Xe)||Xe.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Ue]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&Nr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Rr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(es(),rn(l,n,8,[t.el,a,t,e]),ts())}}/*! #__NO_SIDE_EFFECTS__ */function It(t,e){return he(t)?ft({name:t.name},e,{setup:t}):t}const pi=t=>!!t.type.__asyncLoader,ng=t=>t.type.__isKeepAlive;function bE(t,e){rg(t,"a",e)}function AE(t,e){rg(t,"da",e)}function rg(t,e,n=ct){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(el(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ng(s.parent.vnode)&&SE(r,e,n,s),s=s.parent}}function SE(t,e,n,r){const s=el(e,t,r,!0);sg(()=>{Mu(r[e],s)},n)}function el(t,e,n=ct,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;es();const a=ro(n),l=rn(e,n,t,o);return a(),ts(),l});return r?s.unshift(i):s.push(i),i}}const Hn=t=>(e,n=ct)=>(!rl||t==="sp")&&el(t,(...r)=>e(...r),n),RE=Hn("bm"),no=Hn("m"),PE=Hn("bu"),CE=Hn("u"),xE=Hn("bum"),sg=Hn("um"),OE=Hn("sp"),kE=Hn("rtg"),DE=Hn("rtc");function NE(t,e=ct){el("ec",t,e)}function ig(t,e,n,r){let s;const i=n&&n[r];if(te(t)||et(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function og(t,e,n={},r,s){if(Xe.isCE||Xe.parent&&pi(Xe.parent)&&Xe.parent.isCE)return e!=="default"&&(n.name=e),$e("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),fe();const o=i&&ag(i(n)),a=Ct(Mt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ag(t){return t.some(e=>ma(e)?!(e.type===gr||e.type===Mt&&!ag(e.children)):!0)?t:null}const Fc=t=>t?vg(t)?sl(t)||t.proxy:Fc(t.parent):null,mi=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fc(t.parent),$root:t=>Fc(t.root),$emit:t=>t.emit,$options:t=>Yu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Gu(t.update)}),$nextTick:t=>t.n||(t.n=Vt.bind(t.proxy)),$watch:t=>IE.bind(t)}),tc=(t,e)=>t!==Ue&&!t.__isScriptSetup&&be(t,e),VE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(tc(r,e))return o[e]=1,r[e];if(s!==Ue&&be(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&be(c,e))return o[e]=3,i[e];if(n!==Ue&&be(n,e))return o[e]=4,n[e];Uc&&(o[e]=0)}}const u=mi[e];let h,d;if(u)return e==="$attrs"&&Ut(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ue&&be(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,be(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return tc(s,e)?(s[e]=n,!0):r!==Ue&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ue&&be(t,o)||tc(e,o)||(a=i[0])&&be(a,o)||be(r,o)||be(mi,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fd(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Uc=!0;function ME(t){const e=Yu(t),n=t.proxy,r=t.ctx;Uc=!1,e.beforeCreate&&Ud(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:E,activated:I,deactivated:w,beforeDestroy:x,beforeUnmount:D,destroyed:L,unmounted:W,render:B,renderTracked:N,renderTriggered:ce,errorCaptured:ne,serverPrefetch:Z,expose:ue,inheritAttrs:pe,components:qe,directives:ot,filters:$t}=e;if(c&&LE(c,r,null),o)for(const Pe in o){const _e=o[Pe];he(_e)&&(r[Pe]=_e.bind(n))}if(s){const Pe=s.call(n,n);Le(Pe)&&(t.data=Rn(Pe))}if(Uc=!0,i)for(const Pe in i){const _e=i[Pe],xt=he(_e)?_e.bind(n,n):he(_e.get)?_e.get.bind(n,n):Qt,cn=!he(_e)&&he(_e.set)?_e.set.bind(n):Qt,jt=ke({get:xt,set:cn});Object.defineProperty(r,Pe,{enumerable:!0,configurable:!0,get:()=>jt.value,set:bt=>jt.value=bt})}if(a)for(const Pe in a)lg(a[Pe],r,n,Pe);if(l){const Pe=he(l)?l.call(n):l;Reflect.ownKeys(Pe).forEach(_e=>{gi(_e,Pe[_e])})}u&&Ud(u,t,"c");function re(Pe,_e){te(_e)?_e.forEach(xt=>Pe(xt.bind(n))):_e&&Pe(_e.bind(n))}if(re(RE,h),re(no,d),re(PE,p),re(CE,E),re(bE,I),re(AE,w),re(NE,ne),re(DE,N),re(kE,ce),re(xE,D),re(sg,W),re(OE,Z),te(ue))if(ue.length){const Pe=t.exposed||(t.exposed={});ue.forEach(_e=>{Object.defineProperty(Pe,_e,{get:()=>n[_e],set:xt=>n[_e]=xt})})}else t.exposed||(t.exposed={});B&&t.render===Qt&&(t.render=B),pe!=null&&(t.inheritAttrs=pe),qe&&(t.components=qe),ot&&(t.directives=ot)}function LE(t,e,n=Qt){te(t)&&(t=$c(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=sn(s.from||r,s.default,!0):i=sn(s.from||r):i=sn(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ud(t,e,n){rn(te(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function lg(t,e,n,r){const s=r.includes(".")?tg(n,r):()=>n[r];if(et(t)){const i=e[t];he(i)&&qr(s,i)}else if(he(t))qr(s,t.bind(n));else if(Le(t))if(te(t))t.forEach(i=>lg(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&qr(s,i,t)}}function Yu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>pa(l,c,o,!0)),pa(l,e,o)),Le(e)&&i.set(e,l),l}function pa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&pa(t,i,n,!0),s&&s.forEach(o=>pa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=FE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const FE={data:$d,props:jd,emits:jd,methods:ii,computed:ii,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:ii,directives:ii,watch:$E,provide:$d,inject:UE};function $d(t,e){return e?t?function(){return ft(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function UE(t,e){return ii($c(t),$c(e))}function $c(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function ii(t,e){return t?ft(Object.create(null),t,e):e}function jd(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:ft(Object.create(null),Fd(t),Fd(e??{})):e}function $E(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function cg(){return{app:null,config:{isNativeTag:v0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jE=0;function BE(t,e){return function(r,s=null){he(r)||(r=ft({},r)),s!=null&&!Le(s)&&(s=null);const i=cg(),o=new WeakSet;let a=!1;const l=i.app={_uid:jE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:fw,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&he(c.install)?(o.add(c),c.install(l,...u)):he(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=$e(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,sl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=ws;ws=l;try{return c()}finally{ws=u}}};return l}}let ws=null;function gi(t,e){if(ct){let n=ct.provides;const r=ct.parent&&ct.parent.provides;r===n&&(n=ct.provides=Object.create(r)),n[t]=e}}function sn(t,e,n=!1){const r=ct||Xe;if(r||ws){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ws._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}function qE(){return!!(ct||Xe||ws)}function zE(t,e,n,r=!1){const s={},i={};ua(i,nl,1),t.propsDefaults=Object.create(null),ug(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:$m(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function HE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ae(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Za(t.emitsOptions,d))continue;const p=e[d];if(l)if(be(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const E=Sn(d);s[E]=jc(l,a,E,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{ug(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!be(e,h)&&((u=qs(h))===h||!be(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=jc(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!be(e,h))&&(delete i[h],c=!0)}c&&$n(t,"set","$attrs")}function ug(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(fi(l))continue;const c=e[l];let u;s&&be(s,u=Sn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Za(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Ae(n),c=a||Ue;for(let u=0;u<i.length;u++){const h=i[u];n[h]=jc(s,l,h,c[h],t,!be(c,h))}}return o}function jc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=be(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=ro(s);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===qs(n))&&(r=!0))}return r}function hg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!he(t)){const u=h=>{l=!0;const[d,p]=hg(h,e,!0);ft(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Le(t)&&r.set(t,ys),ys;if(te(i))for(let u=0;u<i.length;u++){const h=Sn(i[u]);Bd(h)&&(o[h]=Ue)}else if(i)for(const u in i){const h=Sn(u);if(Bd(h)){const d=i[u],p=o[h]=te(d)||he(d)?{type:d}:ft({},d);if(p){const E=Hd(Boolean,p.type),I=Hd(String,p.type);p[0]=E>-1,p[1]=I<0||E<I,(E>-1||be(p,"default"))&&a.push(h)}}}const c=[o,a];return Le(t)&&r.set(t,c),c}function Bd(t){return t[0]!=="$"&&!fi(t)}function qd(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function zd(t,e){return qd(t)===qd(e)}function Hd(t,e){return te(e)?e.findIndex(n=>zd(n,t)):he(e)&&zd(e,t)?0:-1}const dg=t=>t[0]==="_"||t==="$stable",Ju=t=>te(t)?t.map(fn):[fn(t)],WE=(t,e,n)=>{if(e._n)return e;const r=Yt((...s)=>Ju(e(...s)),n);return r._c=!1,r},fg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(dg(s))continue;const i=t[s];if(he(i))e[s]=WE(s,i,r);else if(i!=null){const o=Ju(i);e[s]=()=>o}}},pg=(t,e)=>{const n=Ju(e);t.slots.default=()=>n},KE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ae(e),ua(e,"_",n)):fg(e,t.slots={})}else t.slots={},e&&pg(t,e);ua(t.slots,nl,1)},GE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ue;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ft(s,e),!n&&a===1&&delete s._):(i=!e.$stable,fg(e,s)),o=e}else e&&(pg(t,e),o={default:1});if(i)for(const a in s)!dg(a)&&o[a]==null&&delete s[a]};function Bc(t,e,n,r,s=!1){if(te(t)){t.forEach((d,p)=>Bc(d,e&&(te(e)?e[p]:e),n,r,s));return}if(pi(r)&&!s)return;const i=r.shapeFlag&4?sl(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ue?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(et(c)?(u[c]=null,be(h,c)&&(h[c]=null)):Ke(c)&&(c.value=null)),he(l))cr(l,a,12,[o,u]);else{const d=et(l),p=Ke(l);if(d||p){const E=()=>{if(t.f){const I=d?be(h,l)?h[l]:u[l]:l.value;s?te(I)&&Mu(I,i):te(I)?I.includes(i)||I.push(i):d?(u[l]=[i],be(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,be(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Dt(E,n)):E()}}}const Dt=vE;function QE(t){return YE(t)}function YE(t,e){const n=Im();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Qt,insertStaticContent:E}=t,I=(f,m,v,S=null,b=null,O=null,V=void 0,k=null,M=!!m.dynamicChildren)=>{if(f===m)return;f&&!ei(f,m)&&(S=T(f),bt(f,b,O,!0),f=null),m.patchFlag===-2&&(M=!1,m.dynamicChildren=null);const{type:C,ref:q,shapeFlag:X}=m;switch(C){case tl:w(f,m,v,S);break;case gr:x(f,m,v,S);break;case rc:f==null&&D(m,v,S,V);break;case Mt:qe(f,m,v,S,b,O,V,k,M);break;default:X&1?B(f,m,v,S,b,O,V,k,M):X&6?ot(f,m,v,S,b,O,V,k,M):(X&64||X&128)&&C.process(f,m,v,S,b,O,V,k,M,K)}q!=null&&b&&Bc(q,f&&f.ref,O,m||f,!m)},w=(f,m,v,S)=>{if(f==null)r(m.el=a(m.children),v,S);else{const b=m.el=f.el;m.children!==f.children&&c(b,m.children)}},x=(f,m,v,S)=>{f==null?r(m.el=l(m.children||""),v,S):m.el=f.el},D=(f,m,v,S)=>{[f.el,f.anchor]=E(f.children,m,v,S,f.el,f.anchor)},L=({el:f,anchor:m},v,S)=>{let b;for(;f&&f!==m;)b=d(f),r(f,v,S),f=b;r(m,v,S)},W=({el:f,anchor:m})=>{let v;for(;f&&f!==m;)v=d(f),s(f),f=v;s(m)},B=(f,m,v,S,b,O,V,k,M)=>{m.type==="svg"?V="svg":m.type==="math"&&(V="mathml"),f==null?N(m,v,S,b,O,V,k,M):Z(f,m,b,O,V,k,M)},N=(f,m,v,S,b,O,V,k)=>{let M,C;const{props:q,shapeFlag:X,transition:Y,dirs:se}=f;if(M=f.el=o(f.type,O,q&&q.is,q),X&8?u(M,f.children):X&16&&ne(f.children,M,null,S,b,nc(f,O),V,k),se&&Rr(f,null,S,"created"),ce(M,f,f.scopeId,V,S),q){for(const Ce in q)Ce!=="value"&&!fi(Ce)&&i(M,Ce,null,q[Ce],O,f.children,S,b,Ne);"value"in q&&i(M,"value",null,q.value,O),(C=q.onVnodeBeforeMount)&&hn(C,S,f)}se&&Rr(f,null,S,"beforeMount");const me=JE(b,Y);me&&Y.beforeEnter(M),r(M,m,v),((C=q&&q.onVnodeMounted)||me||se)&&Dt(()=>{C&&hn(C,S,f),me&&Y.enter(M),se&&Rr(f,null,S,"mounted")},b)},ce=(f,m,v,S,b)=>{if(v&&p(f,v),S)for(let O=0;O<S.length;O++)p(f,S[O]);if(b){let O=b.subTree;if(m===O){const V=b.vnode;ce(f,V,V.scopeId,V.slotScopeIds,b.parent)}}},ne=(f,m,v,S,b,O,V,k,M=0)=>{for(let C=M;C<f.length;C++){const q=f[C]=k?Zn(f[C]):fn(f[C]);I(null,q,m,v,S,b,O,V,k)}},Z=(f,m,v,S,b,O,V)=>{const k=m.el=f.el;let{patchFlag:M,dynamicChildren:C,dirs:q}=m;M|=f.patchFlag&16;const X=f.props||Ue,Y=m.props||Ue;let se;if(v&&Pr(v,!1),(se=Y.onVnodeBeforeUpdate)&&hn(se,v,m,f),q&&Rr(m,f,v,"beforeUpdate"),v&&Pr(v,!0),C?ue(f.dynamicChildren,C,k,v,S,nc(m,b),O):V||_e(f,m,k,null,v,S,nc(m,b),O,!1),M>0){if(M&16)pe(k,m,X,Y,v,S,b);else if(M&2&&X.class!==Y.class&&i(k,"class",null,Y.class,b),M&4&&i(k,"style",X.style,Y.style,b),M&8){const me=m.dynamicProps;for(let Ce=0;Ce<me.length;Ce++){const g=me[Ce],_=X[g],A=Y[g];(A!==_||g==="value")&&i(k,g,_,A,b,f.children,v,S,Ne)}}M&1&&f.children!==m.children&&u(k,m.children)}else!V&&C==null&&pe(k,m,X,Y,v,S,b);((se=Y.onVnodeUpdated)||q)&&Dt(()=>{se&&hn(se,v,m,f),q&&Rr(m,f,v,"updated")},S)},ue=(f,m,v,S,b,O,V)=>{for(let k=0;k<m.length;k++){const M=f[k],C=m[k],q=M.el&&(M.type===Mt||!ei(M,C)||M.shapeFlag&70)?h(M.el):v;I(M,C,q,null,S,b,O,V,!0)}},pe=(f,m,v,S,b,O,V)=>{if(v!==S){if(v!==Ue)for(const k in v)!fi(k)&&!(k in S)&&i(f,k,v[k],null,V,m.children,b,O,Ne);for(const k in S){if(fi(k))continue;const M=S[k],C=v[k];M!==C&&k!=="value"&&i(f,k,C,M,V,m.children,b,O,Ne)}"value"in S&&i(f,"value",v.value,S.value,V)}},qe=(f,m,v,S,b,O,V,k,M)=>{const C=m.el=f?f.el:a(""),q=m.anchor=f?f.anchor:a("");let{patchFlag:X,dynamicChildren:Y,slotScopeIds:se}=m;se&&(k=k?k.concat(se):se),f==null?(r(C,v,S),r(q,v,S),ne(m.children||[],v,q,b,O,V,k,M)):X>0&&X&64&&Y&&f.dynamicChildren?(ue(f.dynamicChildren,Y,v,b,O,V,k),(m.key!=null||b&&m===b.subTree)&&mg(f,m,!0)):_e(f,m,v,q,b,O,V,k,M)},ot=(f,m,v,S,b,O,V,k,M)=>{m.slotScopeIds=k,f==null?m.shapeFlag&512?b.ctx.activate(m,v,S,V,M):$t(m,v,S,b,O,V,M):tt(f,m,M)},$t=(f,m,v,S,b,O,V)=>{const k=f.component=ow(f,S,b);if(ng(f)&&(k.ctx.renderer=K),aw(k),k.asyncDep){if(b&&b.registerDep(k,re),!f.el){const M=k.subTree=$e(gr);x(null,M,m,v)}}else re(k,f,m,v,b,O,V)},tt=(f,m,v)=>{const S=m.component=f.component;if(pE(f,m,v))if(S.asyncDep&&!S.asyncResolved){Pe(S,m,v);return}else S.next=m,lE(S.update),S.effect.dirty=!0,S.update();else m.el=f.el,S.vnode=m},re=(f,m,v,S,b,O,V)=>{const k=()=>{if(f.isMounted){let{next:q,bu:X,u:Y,parent:se,vnode:me}=f;{const U=gg(f);if(U){q&&(q.el=me.el,Pe(f,q,V)),U.asyncDep.then(()=>{f.isUnmounted||k()});return}}let Ce=q,g;Pr(f,!1),q?(q.el=me.el,Pe(f,q,V)):q=me,X&&Yo(X),(g=q.props&&q.props.onVnodeBeforeUpdate)&&hn(g,se,q,me),Pr(f,!0);const _=ec(f),A=f.subTree;f.subTree=_,I(A,_,h(A.el),T(A),f,b,O),q.el=_.el,Ce===null&&mE(f,_.el),Y&&Dt(Y,b),(g=q.props&&q.props.onVnodeUpdated)&&Dt(()=>hn(g,se,q,me),b)}else{let q;const{el:X,props:Y}=m,{bm:se,m:me,parent:Ce}=f,g=pi(m);if(Pr(f,!1),se&&Yo(se),!g&&(q=Y&&Y.onVnodeBeforeMount)&&hn(q,Ce,m),Pr(f,!0),X&&Ve){const _=()=>{f.subTree=ec(f),Ve(X,f.subTree,f,b,null)};g?m.type.__asyncLoader().then(()=>!f.isUnmounted&&_()):_()}else{const _=f.subTree=ec(f);I(null,_,v,S,f,b,O),m.el=_.el}if(me&&Dt(me,b),!g&&(q=Y&&Y.onVnodeMounted)){const _=m;Dt(()=>hn(q,Ce,_),b)}(m.shapeFlag&256||Ce&&pi(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&f.a&&Dt(f.a,b),f.isMounted=!0,m=v=S=null}},M=f.effect=new Uu(k,Qt,()=>Gu(C),f.scope),C=f.update=()=>{M.dirty&&M.run()};C.id=f.uid,Pr(f,!0),C()},Pe=(f,m,v)=>{m.component=f;const S=f.vnode.props;f.vnode=m,f.next=null,HE(f,m.props,S,v),GE(f,m.children,v),es(),Vd(f),ts()},_e=(f,m,v,S,b,O,V,k,M=!1)=>{const C=f&&f.children,q=f?f.shapeFlag:0,X=m.children,{patchFlag:Y,shapeFlag:se}=m;if(Y>0){if(Y&128){cn(C,X,v,S,b,O,V,k,M);return}else if(Y&256){xt(C,X,v,S,b,O,V,k,M);return}}se&8?(q&16&&Ne(C,b,O),X!==C&&u(v,X)):q&16?se&16?cn(C,X,v,S,b,O,V,k,M):Ne(C,b,O,!0):(q&8&&u(v,""),se&16&&ne(X,v,S,b,O,V,k,M))},xt=(f,m,v,S,b,O,V,k,M)=>{f=f||ys,m=m||ys;const C=f.length,q=m.length,X=Math.min(C,q);let Y;for(Y=0;Y<X;Y++){const se=m[Y]=M?Zn(m[Y]):fn(m[Y]);I(f[Y],se,v,null,b,O,V,k,M)}C>q?Ne(f,b,O,!0,!1,X):ne(m,v,S,b,O,V,k,M,X)},cn=(f,m,v,S,b,O,V,k,M)=>{let C=0;const q=m.length;let X=f.length-1,Y=q-1;for(;C<=X&&C<=Y;){const se=f[C],me=m[C]=M?Zn(m[C]):fn(m[C]);if(ei(se,me))I(se,me,v,null,b,O,V,k,M);else break;C++}for(;C<=X&&C<=Y;){const se=f[X],me=m[Y]=M?Zn(m[Y]):fn(m[Y]);if(ei(se,me))I(se,me,v,null,b,O,V,k,M);else break;X--,Y--}if(C>X){if(C<=Y){const se=Y+1,me=se<q?m[se].el:S;for(;C<=Y;)I(null,m[C]=M?Zn(m[C]):fn(m[C]),v,me,b,O,V,k,M),C++}}else if(C>Y)for(;C<=X;)bt(f[C],b,O,!0),C++;else{const se=C,me=C,Ce=new Map;for(C=me;C<=Y;C++){const Te=m[C]=M?Zn(m[C]):fn(m[C]);Te.key!=null&&Ce.set(Te.key,C)}let g,_=0;const A=Y-me+1;let U=!1,ee=0;const Q=new Array(A);for(C=0;C<A;C++)Q[C]=0;for(C=se;C<=X;C++){const Te=f[C];if(_>=A){bt(Te,b,O,!0);continue}let Se;if(Te.key!=null)Se=Ce.get(Te.key);else for(g=me;g<=Y;g++)if(Q[g-me]===0&&ei(Te,m[g])){Se=g;break}Se===void 0?bt(Te,b,O,!0):(Q[Se-me]=C+1,Se>=ee?ee=Se:U=!0,I(Te,m[Se],v,null,b,O,V,k,M),_++)}const Ee=U?XE(Q):ys;for(g=Ee.length-1,C=A-1;C>=0;C--){const Te=me+C,Se=m[Te],nt=Te+1<q?m[Te+1].el:S;Q[C]===0?I(null,Se,v,nt,b,O,V,k,M):U&&(g<0||C!==Ee[g]?jt(Se,v,nt,2):g--)}}},jt=(f,m,v,S,b=null)=>{const{el:O,type:V,transition:k,children:M,shapeFlag:C}=f;if(C&6){jt(f.component.subTree,m,v,S);return}if(C&128){f.suspense.move(m,v,S);return}if(C&64){V.move(f,m,v,K);return}if(V===Mt){r(O,m,v);for(let X=0;X<M.length;X++)jt(M[X],m,v,S);r(f.anchor,m,v);return}if(V===rc){L(f,m,v);return}if(S!==2&&C&1&&k)if(S===0)k.beforeEnter(O),r(O,m,v),Dt(()=>k.enter(O),b);else{const{leave:X,delayLeave:Y,afterLeave:se}=k,me=()=>r(O,m,v),Ce=()=>{X(O,()=>{me(),se&&se()})};Y?Y(O,me,Ce):Ce()}else r(O,m,v)},bt=(f,m,v,S=!1,b=!1)=>{const{type:O,props:V,ref:k,children:M,dynamicChildren:C,shapeFlag:q,patchFlag:X,dirs:Y}=f;if(k!=null&&Bc(k,null,v,f,!0),q&256){m.ctx.deactivate(f);return}const se=q&1&&Y,me=!pi(f);let Ce;if(me&&(Ce=V&&V.onVnodeBeforeUnmount)&&hn(Ce,m,f),q&6)ls(f.component,v,S);else{if(q&128){f.suspense.unmount(v,S);return}se&&Rr(f,null,m,"beforeUnmount"),q&64?f.type.remove(f,m,v,b,K,S):C&&(O!==Mt||X>0&&X&64)?Ne(C,m,v,!1,!0):(O===Mt&&X&384||!b&&q&16)&&Ne(M,m,v),S&&un(f)}(me&&(Ce=V&&V.onVnodeUnmounted)||se)&&Dt(()=>{Ce&&hn(Ce,m,f),se&&Rr(f,null,m,"unmounted")},v)},un=f=>{const{type:m,el:v,anchor:S,transition:b}=f;if(m===Mt){Wn(v,S);return}if(m===rc){W(f);return}const O=()=>{s(v),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:V,delayLeave:k}=b,M=()=>V(v,O);k?k(f.el,O,M):M()}else O()},Wn=(f,m)=>{let v;for(;f!==m;)v=d(f),s(f),f=v;s(m)},ls=(f,m,v)=>{const{bum:S,scope:b,update:O,subTree:V,um:k}=f;S&&Yo(S),b.stop(),O&&(O.active=!1,bt(V,f,m,v)),k&&Dt(k,m),Dt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Ne=(f,m,v,S=!1,b=!1,O=0)=>{for(let V=O;V<f.length;V++)bt(f[V],m,v,S,b)},T=f=>f.shapeFlag&6?T(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let z=!1;const F=(f,m,v)=>{f==null?m._vnode&&bt(m._vnode,null,null,!0):I(m._vnode||null,f,m,null,null,null,v),z||(z=!0,Vd(),Qm(),z=!1),m._vnode=f},K={p:I,um:bt,m:jt,r:un,mt:$t,mc:ne,pc:_e,pbc:ue,n:T,o:t};let ve,Ve;return e&&([ve,Ve]=e(K)),{render:F,hydrate:ve,createApp:BE(F,ve)}}function nc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Pr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function JE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function mg(t,e,n=!1){const r=t.children,s=e.children;if(te(r)&&te(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Zn(s[i]),a.el=o.el),n||mg(o,a)),a.type===tl&&(a.el=o.el)}}function XE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function gg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gg(e)}const ZE=t=>t.__isTeleport,Mt=Symbol.for("v-fgt"),tl=Symbol.for("v-txt"),gr=Symbol.for("v-cmt"),rc=Symbol.for("v-stc"),_i=[];let en=null;function fe(t=!1){_i.push(en=t?null:[])}function ew(){_i.pop(),en=_i[_i.length-1]||null}let Di=1;function Wd(t){Di+=t}function _g(t){return t.dynamicChildren=Di>0?en||ys:null,ew(),Di>0&&en&&en.push(t),t}function De(t,e,n,r,s,i){return _g(y(t,e,n,r,s,i,!0))}function Ct(t,e,n,r,s){return _g($e(t,e,n,r,s,!0))}function ma(t){return t?t.__v_isVNode===!0:!1}function ei(t,e){return t.type===e.type&&t.key===e.key}const nl="__vInternal",yg=({key:t})=>t??null,Xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||Ke(t)||he(t)?{i:Xe,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,r=0,s=null,i=t===Mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yg(e),ref:e&&Xo(e),scopeId:Xm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xe};return a?(Xu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=et(n)?8:16),Di>0&&!o&&en&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&en.push(l),l}const $e=tw;function tw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===gE)&&(t=gr),ma(t)){const a=Cs(t,e,!0);return n&&Xu(a,n),Di>0&&!i&&en&&(a.shapeFlag&6?en[en.indexOf(t)]=a:en.push(a)),a.patchFlag|=-2,a}if(dw(t)&&(t=t.__vccOpts),e){e=nw(e);let{class:a,style:l}=e;a&&!et(a)&&(e.class=qt(a)),Le(l)&&(jm(l)&&!te(l)&&(l=ft({},l)),e.style=Fu(l))}const o=et(t)?1:yE(t)?128:ZE(t)?64:Le(t)?4:he(t)?2:0;return y(t,e,n,r,s,o,i,!0)}function nw(t){return t?jm(t)||nl in t?ft({},t):t:null}function Cs(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?rw(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&yg(a),ref:e&&e.ref?n&&s?te(s)?s.concat(Xo(e)):[s,Xo(e)]:Xo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cs(t.ssContent),ssFallback:t.ssFallback&&Cs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function vn(t=" ",e=0){return $e(tl,null,t,e)}function tn(t="",e=!1){return e?(fe(),Ct(gr,null,t)):$e(gr,null,t)}function fn(t){return t==null||typeof t=="boolean"?$e(gr):te(t)?$e(Mt,null,t.slice()):typeof t=="object"?Zn(t):$e(tl,null,String(t))}function Zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cs(t)}function Xu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(nl in e)?e._ctx=Xe:s===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),r&64?(n=16,e=[vn(e)]):n=8);t.children=e,t.shapeFlag|=n}function rw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=qt([e.class,r.class]));else if(s==="style")e.style=Fu([e.style,r.style]);else if(Ha(s)){const i=e[s],o=r[s];o&&i!==o&&!(te(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function hn(t,e,n,r=null){rn(t,e,7,[n,r])}const sw=cg();let iw=0;function ow(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sw,i={uid:iw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hg(r,s),emitsOptions:Jm(r,s),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hE.bind(null,i),t.ce&&t.ce(i),i}let ct=null,ga,qc;{const t=Im(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ga=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),qc=e("__VUE_SSR_SETTERS__",n=>rl=n)}const ro=t=>{const e=ct;return ga(t),t.scope.on(),()=>{t.scope.off(),ga(e)}},Kd=()=>{ct&&ct.scope.off(),ga(null)};function vg(t){return t.vnode.shapeFlag&4}let rl=!1;function aw(t,e=!1){e&&qc(e);const{props:n,children:r}=t.vnode,s=vg(t);zE(t,n,s,e),KE(t,r);const i=s?lw(t,e):void 0;return e&&qc(!1),i}function lw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ja(new Proxy(t.ctx,VE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?uw(t):null,i=ro(t);es();const o=cr(r,t,0,[t.props,s]);if(ts(),i(),Em(o)){if(o.then(Kd,Kd),e)return o.then(a=>{Gd(t,a,e)}).catch(a=>{Xa(a,t,0)});t.asyncDep=o}else Gd(t,o,e)}else Eg(t,e)}function Gd(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=Wm(e)),Eg(t,n)}let Qd;function Eg(t,e,n){const r=t.type;if(!t.render){if(!e&&Qd&&!r.render){const s=r.template||Yu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=ft(ft({isCustomElement:i,delimiters:a},o),l);r.render=Qd(s,c)}}t.render=r.render||Qt}{const s=ro(t);es();try{ME(t)}finally{ts(),s()}}}function cw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ut(t,"get","$attrs"),e[n]}}))}function uw(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return cw(t)},slots:t.slots,emit:t.emit,expose:e}}function sl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Wm(Ja(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mi)return mi[n](t)},has(e,n){return n in e||n in mi}}))}function hw(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function dw(t){return he(t)&&"__vccOpts"in t}const ke=(t,e)=>eE(t,e,rl);function wg(t,e,n){const r=arguments.length;return r===2?Le(e)&&!te(e)?ma(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ma(n)&&(n=[n]),$e(t,e,n))}const fw="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const pw="http://www.w3.org/2000/svg",mw="http://www.w3.org/1998/Math/MathML",er=typeof document<"u"?document:null,Yd=er&&er.createElement("template"),gw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?er.createElementNS(pw,t):e==="mathml"?er.createElementNS(mw,t):er.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>er.createTextNode(t),createComment:t=>er.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>er.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Yd.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Yd.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_w=Symbol("_vtc");function yw(t,e,n){const r=t[_w];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jd=Symbol("_vod"),vw=Symbol("_vsh"),Ew=Symbol(""),ww=/(^|;)\s*display\s*:/;function Tw(t,e,n){const r=t.style,s=et(n);let i=!1;if(n&&!s){if(e)if(et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Zo(r,a,"")}else for(const o in e)n[o]==null&&Zo(r,o,"");for(const o in n)o==="display"&&(i=!0),Zo(r,o,n[o])}else if(s){if(e!==n){const o=r[Ew];o&&(n+=";"+o),r.cssText=n,i=ww.test(n)}}else e&&t.removeAttribute("style");Jd in t&&(t[Jd]=i?r.display:"",t[vw]&&(r.display="none"))}const Xd=/\s*!important$/;function Zo(t,e,n){if(te(n))n.forEach(r=>Zo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Iw(t,e);Xd.test(n)?t.setProperty(qs(r),n.replace(Xd,""),"important"):t[r]=n}}const Zd=["Webkit","Moz","ms"],sc={};function Iw(t,e){const n=sc[e];if(n)return n;let r=Sn(e);if(r!=="filter"&&r in t)return sc[e]=r;r=Ga(r);for(let s=0;s<Zd.length;s++){const i=Zd[s]+r;if(i in t)return sc[e]=i}return e}const ef="http://www.w3.org/1999/xlink";function bw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ef,e.slice(6,e.length)):t.setAttributeNS(ef,e,n);else{const i=C0(e);n==null||i&&!bm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Aw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=bm(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Or(t,e,n,r){t.addEventListener(e,n,r)}function Sw(t,e,n,r){t.removeEventListener(e,n,r)}const tf=Symbol("_vei");function Rw(t,e,n,r,s=null){const i=t[tf]||(t[tf]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Pw(e);if(r){const c=i[e]=Ow(r,s);Or(t,a,c,l)}else o&&(Sw(t,a,o,l),i[e]=void 0)}}const nf=/(?:Once|Passive|Capture)$/;function Pw(t){let e;if(nf.test(t)){e={};let r;for(;r=t.match(nf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qs(t.slice(2)),e]}let ic=0;const Cw=Promise.resolve(),xw=()=>ic||(Cw.then(()=>ic=0),ic=Date.now());function Ow(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;rn(kw(r,n.value),e,5,[r])};return n.value=t,n.attached=xw(),n}function kw(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const rf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Dw=(t,e,n,r,s,i,o,a,l)=>{const c=s==="svg";e==="class"?yw(t,r,c):e==="style"?Tw(t,n,r):Ha(e)?Vu(e)||Rw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nw(t,e,r,c))?Aw(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),bw(t,e,r,c))};function Nw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&rf(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rf(e)&&et(n)?!1:e in t}const _a=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>Yo(e,n):e};function Vw(t){t.target.composing=!0}function sf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ts=Symbol("_assign"),Nt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ts]=_a(s);const i=r||s.props&&s.props.type==="number";Or(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ci(a)),t[Ts](a)}),n&&Or(t,"change",()=>{t.value=t.value.trim()}),e||(Or(t,"compositionstart",Vw),Or(t,"compositionend",sf),Or(t,"change",sf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Ts]=_a(i),t.composing)return;const o=s||t.type==="number"?Ci(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Mw={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Wa(e);Or(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ci(ya(o)):ya(o));t[Ts](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Vt(()=>{t._assigning=!1})}),t[Ts]=_a(r)},mounted(t,{value:e,modifiers:{number:n}}){of(t,e,n)},beforeUpdate(t,e,n){t[Ts]=_a(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||of(t,e,n)}};function of(t,e,n){const r=t.multiple,s=te(e);if(!(r&&!s&&!Wa(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],l=ya(a);if(r)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=e.includes(n?Ci(l):l):a.selected=O0(e,l)>-1}else a.selected=e.has(l);else if(Qa(ya(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ya(t){return"_value"in t?t._value:t.value}const Lw=["ctrl","shift","alt","meta"],Fw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Lw.some(n=>t[`${n}Key`]&&!e.includes(n))},Tg=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Fw[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Uw=ft({patchProp:Dw},gw);let af;function $w(){return af||(af=QE(Uw))}const jw=(...t)=>{const e=$w().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qw(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Bw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Bw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qw(t){return et(t)?document.querySelector(t):t}var zw=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Ig;const il=t=>Ig=t,bg=Symbol();function zc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var yi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(yi||(yi={}));function Hw(){const t=Rm(!0),e=t.run(()=>ge({}));let n=[],r=[];const s=Ja({install(i){il(s),s._a=i,i.provide(bg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!zw?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ag=()=>{};function lf(t,e,n,r=Ag){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Pm()&&D0(s),s}function cs(t,...e){t.slice().forEach(n=>{n(...e)})}const Ww=t=>t();function Hc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];zc(s)&&zc(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!lr(r)?t[n]=Hc(s,r):t[n]=r}return t}const Kw=Symbol();function Gw(t){return!zc(t)||!t.hasOwnProperty(Kw)}const{assign:Yn}=Object;function Qw(t){return!!(Ke(t)&&t.effect)}function Yw(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=rE(n.state.value[t]);return Yn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Ja(ke(()=>{il(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return l=Sg(t,c,e,n,r,!0),l}function Sg(t,e,n={},r,s,i){let o;const a=Yn({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],p;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),ge({});let I;function w(ne){let Z;c=u=!1,typeof ne=="function"?(ne(r.state.value[t]),Z={type:yi.patchFunction,storeId:t,events:p}):(Hc(r.state.value[t],ne),Z={type:yi.patchObject,payload:ne,storeId:t,events:p});const ue=I=Symbol();Vt().then(()=>{I===ue&&(c=!0)}),u=!0,cs(h,Z,r.state.value[t])}const x=i?function(){const{state:Z}=n,ue=Z?Z():{};this.$patch(pe=>{Yn(pe,ue)})}:Ag;function D(){o.stop(),h=[],d=[],r._s.delete(t)}function L(ne,Z){return function(){il(r);const ue=Array.from(arguments),pe=[],qe=[];function ot(re){pe.push(re)}function $t(re){qe.push(re)}cs(d,{args:ue,name:ne,store:B,after:ot,onError:$t});let tt;try{tt=Z.apply(this&&this.$id===t?this:B,ue)}catch(re){throw cs(qe,re),re}return tt instanceof Promise?tt.then(re=>(cs(pe,re),re)).catch(re=>(cs(qe,re),Promise.reject(re))):(cs(pe,tt),tt)}}const W={_p:r,$id:t,$onAction:lf.bind(null,d),$patch:w,$reset:x,$subscribe(ne,Z={}){const ue=lf(h,ne,Z.detached,()=>pe()),pe=o.run(()=>qr(()=>r.state.value[t],qe=>{(Z.flush==="sync"?u:c)&&ne({storeId:t,type:yi.direct,events:p},qe)},Yn({},l,Z)));return ue},$dispose:D},B=Rn(W);r._s.set(t,B);const ce=(r._a&&r._a.runWithContext||Ww)(()=>r._e.run(()=>(o=Rm()).run(e)));for(const ne in ce){const Z=ce[ne];if(Ke(Z)&&!Qw(Z)||lr(Z))i||(E&&Gw(Z)&&(Ke(Z)?Z.value=E[ne]:Hc(Z,E[ne])),r.state.value[t][ne]=Z);else if(typeof Z=="function"){const ue=L(ne,Z);ce[ne]=ue,a.actions[ne]=Z}}return Yn(B,ce),Yn(Ae(B),ce),Object.defineProperty(B,"$state",{get:()=>r.state.value[t],set:ne=>{w(Z=>{Yn(Z,ne)})}}),r._p.forEach(ne=>{Yn(B,o.run(()=>ne({store:B,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(B.$state,E),c=!0,u=!0,B}function zs(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=qE();return a=a||(c?sn(bg,null):null),a&&il(a),a=Ig,a._s.has(r)||(i?Sg(r,e,s,a):Yw(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ds=typeof document<"u";function Jw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const xe=Object.assign;function oc(t,e){const n={};for(const r in e){const s=e[r];n[r]=on(s)?s.map(t):t(s)}return n}const vi=()=>{},on=Array.isArray,Rg=/#/g,Xw=/&/g,Zw=/\//g,eT=/=/g,tT=/\?/g,Pg=/\+/g,nT=/%5B/g,rT=/%5D/g,Cg=/%5E/g,sT=/%60/g,xg=/%7B/g,iT=/%7C/g,Og=/%7D/g,oT=/%20/g;function Zu(t){return encodeURI(""+t).replace(iT,"|").replace(nT,"[").replace(rT,"]")}function aT(t){return Zu(t).replace(xg,"{").replace(Og,"}").replace(Cg,"^")}function Wc(t){return Zu(t).replace(Pg,"%2B").replace(oT,"+").replace(Rg,"%23").replace(Xw,"%26").replace(sT,"`").replace(xg,"{").replace(Og,"}").replace(Cg,"^")}function lT(t){return Wc(t).replace(eT,"%3D")}function cT(t){return Zu(t).replace(Rg,"%23").replace(tT,"%3F")}function uT(t){return t==null?"":cT(t).replace(Zw,"%2F")}function Ni(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const hT=/\/$/,dT=t=>t.replace(hT,"");function ac(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=gT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ni(o)}}function fT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&xs(e.matched[r],n.matched[s])&&kg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function kg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mT(t[n],e[n]))return!1;return!0}function mT(t,e){return on(t)?uf(t,e):on(e)?uf(e,t):t===e}function uf(t,e){return on(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var Vi;(function(t){t.pop="pop",t.push="push"})(Vi||(Vi={}));var Ei;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ei||(Ei={}));function _T(t){if(!t)if(ds){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dT(t)}const yT=/^[^#]+#/;function vT(t,e){return t.replace(yT,"#")+e}function ET(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ol=()=>({left:window.scrollX,top:window.scrollY});function wT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ET(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function hf(t,e){return(history.state?history.state.position-e:-1)+t}const Kc=new Map;function TT(t,e){Kc.set(t,e)}function IT(t){const e=Kc.get(t);return Kc.delete(t),e}let bT=()=>location.protocol+"//"+location.host;function Dg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),cf(l,"")}return cf(n,t)+r+s}function AT(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Dg(t,location),E=n.value,I=e.value;let w=0;if(d){if(n.value=p,e.value=d,o&&o===E){o=null;return}w=I?d.position-I.position:0}else r(p);s.forEach(x=>{x(n.value,E,{delta:w,type:Vi.pop,direction:w?w>0?Ei.forward:Ei.back:Ei.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const E=s.indexOf(d);E>-1&&s.splice(E,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(xe({},d.state,{scroll:ol()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function df(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ol():null}}function ST(t){const{history:e,location:n}=window,r={value:Dg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:bT()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=xe({},e.state,df(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=xe({},s.value,e.state,{forward:l,scroll:ol()});i(u.current,u,!0);const h=xe({},df(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function RT(t){t=_T(t);const e=ST(t),n=AT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:vT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function PT(t){return typeof t=="string"||t&&typeof t=="object"}function Ng(t){return typeof t=="string"||typeof t=="symbol"}const Gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vg=Symbol("");var ff;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ff||(ff={}));function Os(t,e){return xe(new Error,{type:t,[Vg]:!0},e)}function Nn(t,e){return t instanceof Error&&Vg in t&&(e==null||!!(t.type&e))}const pf="[^/]+?",CT={sensitive:!1,strict:!1,start:!0,end:!0},xT=/[.+*?^${}()[\]/\\]/g;function OT(t,e){const n=xe({},CT,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(xT,"\\$&"),p+=40;else if(d.type===1){const{value:E,repeatable:I,optional:w,regexp:x}=d;i.push({name:E,repeatable:I,optional:w});const D=x||pf;if(D!==pf){p+=10;try{new RegExp(`(${D})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${E}" (${D}): `+W.message)}}let L=I?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(L=w&&c.length<2?`(?:/${L})`:"/"+L),w&&(L+="?"),s+=L,p+=20,w&&(p+=-8),I&&(p+=-20),D===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",E=i[d-1];h[E.name]=p&&E.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:E,repeatable:I,optional:w}=p,x=E in c?c[E]:"";if(on(x)&&!I)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const D=on(x)?x.join("/"):x;if(!D)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${E}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function kT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function DT(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=kT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(mf(r))return 1;if(mf(s))return-1}return s.length-r.length}function mf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NT={type:0,value:""},VT=/[a-zA-Z0-9_]/;function MT(t){if(!t)return[[]];if(t==="/")return[[NT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:VT.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function LT(t,e,n){const r=OT(MT(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function FT(t,e){const n=[],r=new Map;e=yf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,E=UT(u);E.aliasOf=d&&d.record;const I=yf(e,u),w=[E];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of L)w.push(xe({},E,{components:d?d.record.components:E.components,path:W,aliasOf:d?d.record:E}))}let x,D;for(const L of w){const{path:W}=L;if(h&&W[0]!=="/"){const B=h.record.path,N=B[B.length-1]==="/"?"":"/";L.path=h.record.path+(W&&N+W)}if(x=LT(L,h,I),d?d.alias.push(x):(D=D||x,D!==x&&D.alias.push(x),p&&u.name&&!_f(x)&&o(u.name)),E.children){const B=E.children;for(let N=0;N<B.length;N++)i(B[N],x,d&&d.children[N])}d=d||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return D?()=>{o(D)}:vi}function o(u){if(Ng(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&DT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Mg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!_f(u)&&r.set(u.record.name,u)}function c(u,h){let d,p={},E,I;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Os(1,{location:u});I=d.record.name,p=xe(gf(h.params,d.keys.filter(D=>!D.optional).concat(d.parent?d.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),u.params&&gf(u.params,d.keys.map(D=>D.name))),E=d.stringify(p)}else if(u.path!=null)E=u.path,d=n.find(D=>D.re.test(E)),d&&(p=d.parse(E),I=d.record.name);else{if(d=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw Os(1,{location:u,currentLocation:h});I=d.record.name,p=xe({},h.params,u.params),E=d.stringify(p)}const w=[];let x=d;for(;x;)w.unshift(x.record),x=x.parent;return{name:I,path:E,params:p,matched:w,meta:jT(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function gf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function UT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$T(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function $T(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function _f(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jT(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function yf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Mg(t,e){return e.children.some(n=>n===t||Mg(t,n))}function BT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Pg," "),o=i.indexOf("="),a=Ni(o<0?i:i.slice(0,o)),l=o<0?null:Ni(i.slice(o+1));if(a in e){let c=e[a];on(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function vf(t){let e="";for(let n in t){const r=t[n];if(n=lT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(r)?r.map(i=>i&&Wc(i)):[r&&Wc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function qT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=on(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zT=Symbol(""),Ef=Symbol(""),al=Symbol(""),Lg=Symbol(""),Gc=Symbol("");function ti(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function tr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Os(4,{from:n,to:e})):d instanceof Error?l(d):PT(d)?l(Os(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function lc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(HT(l)){const u=(l.__vccOpts||l)[e];u&&i.push(tr(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=Jw(u)?u.default:u;o.components[a]=h;const p=(h.__vccOpts||h)[e];return p&&tr(p,n,r,o,a,s)()}))}}return i}function HT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wf(t){const e=sn(al),n=sn(Lg),r=ke(()=>e.resolve(G(t.to))),s=ke(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(xs.bind(null,u));if(d>-1)return d;const p=Tf(l[c-2]);return c>1&&Tf(u)===p&&h[h.length-1].path!==p?h.findIndex(xs.bind(null,l[c-2])):d}),i=ke(()=>s.value>-1&&QT(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&kg(n.params,r.value.params));function a(l={}){return GT(l)?e[G(t.replace)?"replace":"push"](G(t.to)).catch(vi):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const WT=It({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wf,setup(t,{slots:e}){const n=Rn(wf(t)),{options:r}=sn(al),s=ke(()=>({[If(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[If(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:wg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),KT=WT;function GT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!on(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Tf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const If=(t,e,n)=>t??e??n,YT=It({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=sn(Gc),s=ke(()=>t.route||r.value),i=sn(Ef,0),o=ke(()=>{let c=G(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ke(()=>s.value.matched[o.value]);gi(Ef,ke(()=>o.value+1)),gi(zT,a),gi(Gc,s);const l=ge();return qr(()=>[l.value,a.value,t.name],([c,u,h],[d,p,E])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!xs(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return bf(n.default,{Component:d,route:c});const p=h.props[u],E=p?p===!0?c.params:typeof p=="function"?p(c):p:null,w=wg(d,xe({},E,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return bf(n.default,{Component:w,route:c})||w}}});function bf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fg=YT;function JT(t){const e=FT(t.routes,t),n=t.parseQuery||BT,r=t.stringifyQuery||vf,s=t.history,i=ti(),o=ti(),a=ti(),l=zm(Gn);let c=Gn;ds&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oc.bind(null,T=>""+T),h=oc.bind(null,uT),d=oc.bind(null,Ni);function p(T,z){let F,K;return Ng(T)?(F=e.getRecordMatcher(T),K=z):K=T,e.addRoute(K,F)}function E(T){const z=e.getRecordMatcher(T);z&&e.removeRoute(z)}function I(){return e.getRoutes().map(T=>T.record)}function w(T){return!!e.getRecordMatcher(T)}function x(T,z){if(z=xe({},z||l.value),typeof T=="string"){const m=ac(n,T,z.path),v=e.resolve({path:m.path},z),S=s.createHref(m.fullPath);return xe(m,v,{params:d(v.params),hash:Ni(m.hash),redirectedFrom:void 0,href:S})}let F;if(T.path!=null)F=xe({},T,{path:ac(n,T.path,z.path).path});else{const m=xe({},T.params);for(const v in m)m[v]==null&&delete m[v];F=xe({},T,{params:h(m)}),z.params=h(z.params)}const K=e.resolve(F,z),ve=T.hash||"";K.params=u(d(K.params));const Ve=fT(r,xe({},T,{hash:aT(ve),path:K.path})),f=s.createHref(Ve);return xe({fullPath:Ve,hash:ve,query:r===vf?qT(T.query):T.query||{}},K,{redirectedFrom:void 0,href:f})}function D(T){return typeof T=="string"?ac(n,T,l.value.path):xe({},T)}function L(T,z){if(c!==T)return Os(8,{from:z,to:T})}function W(T){return ce(T)}function B(T){return W(xe(D(T),{replace:!0}))}function N(T){const z=T.matched[T.matched.length-1];if(z&&z.redirect){const{redirect:F}=z;let K=typeof F=="function"?F(T):F;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=D(K):{path:K},K.params={}),xe({query:T.query,hash:T.hash,params:K.path!=null?{}:T.params},K)}}function ce(T,z){const F=c=x(T),K=l.value,ve=T.state,Ve=T.force,f=T.replace===!0,m=N(F);if(m)return ce(xe(D(m),{state:typeof m=="object"?xe({},ve,m.state):ve,force:Ve,replace:f}),z||F);const v=F;v.redirectedFrom=z;let S;return!Ve&&pT(r,K,F)&&(S=Os(16,{to:v,from:K}),jt(K,K,!0,!1)),(S?Promise.resolve(S):ue(v,K)).catch(b=>Nn(b)?Nn(b,2)?b:cn(b):_e(b,v,K)).then(b=>{if(b){if(Nn(b,2))return ce(xe({replace:f},D(b.to),{state:typeof b.to=="object"?xe({},ve,b.to.state):ve,force:Ve}),z||v)}else b=qe(v,K,!0,f,ve);return pe(v,K,b),b})}function ne(T,z){const F=L(T,z);return F?Promise.reject(F):Promise.resolve()}function Z(T){const z=Wn.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(T):T()}function ue(T,z){let F;const[K,ve,Ve]=XT(T,z);F=lc(K.reverse(),"beforeRouteLeave",T,z);for(const m of K)m.leaveGuards.forEach(v=>{F.push(tr(v,T,z))});const f=ne.bind(null,T,z);return F.push(f),Ne(F).then(()=>{F=[];for(const m of i.list())F.push(tr(m,T,z));return F.push(f),Ne(F)}).then(()=>{F=lc(ve,"beforeRouteUpdate",T,z);for(const m of ve)m.updateGuards.forEach(v=>{F.push(tr(v,T,z))});return F.push(f),Ne(F)}).then(()=>{F=[];for(const m of Ve)if(m.beforeEnter)if(on(m.beforeEnter))for(const v of m.beforeEnter)F.push(tr(v,T,z));else F.push(tr(m.beforeEnter,T,z));return F.push(f),Ne(F)}).then(()=>(T.matched.forEach(m=>m.enterCallbacks={}),F=lc(Ve,"beforeRouteEnter",T,z,Z),F.push(f),Ne(F))).then(()=>{F=[];for(const m of o.list())F.push(tr(m,T,z));return F.push(f),Ne(F)}).catch(m=>Nn(m,8)?m:Promise.reject(m))}function pe(T,z,F){a.list().forEach(K=>Z(()=>K(T,z,F)))}function qe(T,z,F,K,ve){const Ve=L(T,z);if(Ve)return Ve;const f=z===Gn,m=ds?history.state:{};F&&(K||f?s.replace(T.fullPath,xe({scroll:f&&m&&m.scroll},ve)):s.push(T.fullPath,ve)),l.value=T,jt(T,z,F,f),cn()}let ot;function $t(){ot||(ot=s.listen((T,z,F)=>{if(!ls.listening)return;const K=x(T),ve=N(K);if(ve){ce(xe(ve,{replace:!0}),K).catch(vi);return}c=K;const Ve=l.value;ds&&TT(hf(Ve.fullPath,F.delta),ol()),ue(K,Ve).catch(f=>Nn(f,12)?f:Nn(f,2)?(ce(f.to,K).then(m=>{Nn(m,20)&&!F.delta&&F.type===Vi.pop&&s.go(-1,!1)}).catch(vi),Promise.reject()):(F.delta&&s.go(-F.delta,!1),_e(f,K,Ve))).then(f=>{f=f||qe(K,Ve,!1),f&&(F.delta&&!Nn(f,8)?s.go(-F.delta,!1):F.type===Vi.pop&&Nn(f,20)&&s.go(-1,!1)),pe(K,Ve,f)}).catch(vi)}))}let tt=ti(),re=ti(),Pe;function _e(T,z,F){cn(T);const K=re.list();return K.length?K.forEach(ve=>ve(T,z,F)):console.error(T),Promise.reject(T)}function xt(){return Pe&&l.value!==Gn?Promise.resolve():new Promise((T,z)=>{tt.add([T,z])})}function cn(T){return Pe||(Pe=!T,$t(),tt.list().forEach(([z,F])=>T?F(T):z()),tt.reset()),T}function jt(T,z,F,K){const{scrollBehavior:ve}=t;if(!ds||!ve)return Promise.resolve();const Ve=!F&&IT(hf(T.fullPath,0))||(K||!F)&&history.state&&history.state.scroll||null;return Vt().then(()=>ve(T,z,Ve)).then(f=>f&&wT(f)).catch(f=>_e(f,T,z))}const bt=T=>s.go(T);let un;const Wn=new Set,ls={currentRoute:l,listening:!0,addRoute:p,removeRoute:E,hasRoute:w,getRoutes:I,resolve:x,options:t,push:W,replace:B,go:bt,back:()=>bt(-1),forward:()=>bt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:re.add,isReady:xt,install(T){const z=this;T.component("RouterLink",KT),T.component("RouterView",Fg),T.config.globalProperties.$router=z,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>G(l)}),ds&&!un&&l.value===Gn&&(un=!0,W(s.location).catch(ve=>{}));const F={};for(const ve in Gn)Object.defineProperty(F,ve,{get:()=>l.value[ve],enumerable:!0});T.provide(al,z),T.provide(Lg,$m(F)),T.provide(Gc,l);const K=T.unmount;Wn.add(T),T.unmount=function(){Wn.delete(T),Wn.size<1&&(c=Gn,ot&&ot(),ot=null,l.value=Gn,un=!1,Pe=!1),K()}}};function Ne(T){return T.reduce((z,F)=>z.then(()=>Z(F)),Promise.resolve())}return ls}function XT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>xs(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>xs(c,l))||s.push(l))}return[n,r,s]}function eh(){return sn(al)}var Af={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ZT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$g={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ug(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new eI;const d=i<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const E=c<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tI=function(t){const e=Ug(t);return $g.encodeByteArray(e,!0)},va=function(t){return tI(t).replace(/\./g,"")},jg=function(t){try{return $g.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=()=>nI().__FIREBASE_DEFAULTS__,sI=()=>{if(typeof process>"u"||typeof Af>"u")return;const t=Af.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jg(t[1]);return e&&JSON.parse(e)},ll=()=>{try{return rI()||sI()||iI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bg=t=>{var e,n;return(n=(e=ll())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oI=t=>{const e=Bg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qg=()=>{var t;return(t=ll())===null||t===void 0?void 0:t.config},zg=t=>{var e;return(e=ll())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[va(JSON.stringify(n)),va(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function uI(){var t;const e=(t=ll())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fI(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pI(){return!uI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hg(){try{return typeof indexedDB=="object"}catch{return!1}}function mI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gI,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_I(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new kn(s,a,r)}}function _I(t,e){return t.replace(yI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yI=/\{\$([^}]+)}/g;function vI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ea(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Sf(i)&&Sf(o)){if(!Ea(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Sf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ai(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function EI(t,e){const n=new wI(t,e);return n.subscribe.bind(n)}class wI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=cc),s.error===void 0&&(s.error=cc),s.complete===void 0&&(s.complete=cc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}class _r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AI(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bI(t){return t===Cr?void 0:t}function AI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new II(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const RI={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},PI=we.INFO,CI={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},xI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=CI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class th{constructor(e){this.name=e,this._logLevel=PI,this._logHandler=xI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const OI=(t,e)=>e.some(n=>t instanceof n);let Rf,Pf;function kI(){return Rf||(Rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DI(){return Pf||(Pf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wg=new WeakMap,Qc=new WeakMap,Kg=new WeakMap,uc=new WeakMap,nh=new WeakMap;function NI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wg.set(n,t)}).catch(()=>{}),nh.set(e,t),e}function VI(t){if(Qc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Qc.set(t,e)}let Yc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MI(t){Yc=t(Yc)}function LI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hc(this),e,...n);return Kg.set(r,e.sort?e.sort():[e]),ur(r)}:DI().includes(t)?function(...e){return t.apply(hc(this),e),ur(Wg.get(this))}:function(...e){return ur(t.apply(hc(this),e))}}function FI(t){return typeof t=="function"?LI(t):(t instanceof IDBTransaction&&VI(t),OI(t,kI())?new Proxy(t,Yc):t)}function ur(t){if(t instanceof IDBRequest)return NI(t);if(uc.has(t))return uc.get(t);const e=FI(t);return e!==t&&(uc.set(t,e),nh.set(e,t)),e}const hc=t=>nh.get(t);function UI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ur(o.result),l.oldVersion,l.newVersion,ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const $I=["get","getKey","getAll","getAllKeys","count"],jI=["put","add","delete","clear"],dc=new Map;function Cf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dc.get(e))return dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$I.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return dc.set(e,i),i}MI(t=>({...t,get:(e,n,r)=>Cf(e,n)||t.get(e,n,r),has:(e,n)=>!!Cf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jc="@firebase/app",xf="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new th("@firebase/app"),zI="@firebase/app-compat",HI="@firebase/analytics-compat",WI="@firebase/analytics",KI="@firebase/app-check-compat",GI="@firebase/app-check",QI="@firebase/auth",YI="@firebase/auth-compat",JI="@firebase/database",XI="@firebase/database-compat",ZI="@firebase/functions",eb="@firebase/functions-compat",tb="@firebase/installations",nb="@firebase/installations-compat",rb="@firebase/messaging",sb="@firebase/messaging-compat",ib="@firebase/performance",ob="@firebase/performance-compat",ab="@firebase/remote-config",lb="@firebase/remote-config-compat",cb="@firebase/storage",ub="@firebase/storage-compat",hb="@firebase/firestore",db="@firebase/firestore-compat",fb="firebase",pb="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="[DEFAULT]",mb={[Jc]:"fire-core",[zI]:"fire-core-compat",[WI]:"fire-analytics",[HI]:"fire-analytics-compat",[GI]:"fire-app-check",[KI]:"fire-app-check-compat",[QI]:"fire-auth",[YI]:"fire-auth-compat",[JI]:"fire-rtdb",[XI]:"fire-rtdb-compat",[ZI]:"fire-fn",[eb]:"fire-fn-compat",[tb]:"fire-iid",[nb]:"fire-iid-compat",[rb]:"fire-fcm",[sb]:"fire-fcm-compat",[ib]:"fire-perf",[ob]:"fire-perf-compat",[ab]:"fire-rc",[lb]:"fire-rc-compat",[cb]:"fire-gcs",[ub]:"fire-gcs-compat",[hb]:"fire-fst",[db]:"fire-fst-compat","fire-js":"fire-js",[fb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Map,Zc=new Map;function gb(t,e){try{t.container.addComponent(e)}catch(n){Kr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gr(t){const e=t.name;if(Zc.has(e))return Kr.debug(`There were multiple attempts to register component ${e}.`),!1;Zc.set(e,t);for(const n of wa.values())gb(n,t);return!0}function rh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hr=new so("app","Firebase",_b);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=pb;function Gg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw hr.create("bad-app-name",{appName:String(s)});if(n||(n=qg()),!n)throw hr.create("no-options");const i=wa.get(s);if(i){if(Ea(n,i.options)&&Ea(r,i.config))return i;throw hr.create("duplicate-app",{appName:s})}const o=new SI(s);for(const l of Zc.values())o.addComponent(l);const a=new yb(n,r,o);return wa.set(s,a),a}function Qg(t=Xc){const e=wa.get(t);if(!e&&t===Xc&&qg())return Gg();if(!e)throw hr.create("no-app",{appName:t});return e}function En(t,e,n){var r;let s=(r=mb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kr.warn(a.join(" "));return}Gr(new _r(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="firebase-heartbeat-database",Eb=1,Mi="firebase-heartbeat-store";let fc=null;function Yg(){return fc||(fc=UI(vb,Eb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Mi)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),fc}async function wb(t){try{const n=(await Yg()).transaction(Mi),r=await n.objectStore(Mi).get(Jg(t));return await n.done,r}catch(e){if(e instanceof kn)Kr.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kr.warn(n.message)}}}async function Of(t,e){try{const r=(await Yg()).transaction(Mi,"readwrite");await r.objectStore(Mi).put(e,Jg(t)),await r.done}catch(n){if(n instanceof kn)Kr.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kr.warn(r.message)}}}function Jg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=1024,Ib=30*24*60*60*1e3;class bb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ib}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kf(),{heartbeatsToSend:r,unsentEntries:s}=Ab(this._heartbeatsCache.heartbeats),i=va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function kf(){return new Date().toISOString().substring(0,10)}function Ab(t,e=Tb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Df(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Df(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hg()?mI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Df(t){return va(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t){Gr(new _r("platform-logger",e=>new BI(e),"PRIVATE")),Gr(new _r("heartbeat",e=>new bb(e),"PRIVATE")),En(Jc,xf,t),En(Jc,xf,"esm2017"),En("fire-js","")}Rb("");var Pb="firebase",Cb="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En(Pb,Cb,"app");function sh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Xg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xb=Xg,Zg=new so("auth","Firebase",Xg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new th("@firebase/auth");function Ob(t,...e){Ta.logLevel<=we.WARN&&Ta.warn(`Auth (${ns}): ${t}`,...e)}function ea(t,...e){Ta.logLevel<=we.ERROR&&Ta.error(`Auth (${ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw ih(t,...e)}function wn(t,...e){return ih(t,...e)}function e_(t,e,n){const r=Object.assign(Object.assign({},xb()),{[e]:n});return new so("auth","Firebase",r).create(e,{appName:t.name})}function kb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jt(t,"argument-error"),e_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ih(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zg.create(t,...e)}function ie(t,e,...n){if(!t)throw ih(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function Bn(t,e){t||Ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Db(){return Nf()==="http:"||Nf()==="https:"}function Nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Db()||hI()||"connection"in navigator)?navigator.onLine:!0}function Vb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=cI()||dI()}get(){return Nb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=new oo(3e4,6e4);function wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tr(t,e,n,r,s={}){return n_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=io(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),t_.fetch()(r_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function n_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Mb),e);try{const s=new Ub(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Vo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Vo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Vo(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw e_(t,u,c);Jt(t,u)}}catch(s){if(s instanceof kn)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function ao(t,e,n,r,s={}){const i=await Tr(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function r_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?oh(t.config,s):`${t.config.apiScheme}://${s}`}function Fb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ub{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),Lb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=wn(t,e,r);return s.customData._tokenResponse=n,s}function Vf(t){return t!==void 0&&t.enterprise!==void 0}class $b{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Fb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function jb(t,e){return Tr(t,"GET","/v2/recaptchaConfig",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function qb(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zb(t,e=!1){const n=pt(t),r=await n.getIdToken(e),s=ah(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wi(pc(s.auth_time)),issuedAtTime:wi(pc(s.iat)),expirationTime:wi(pc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pc(t){return Number(t)*1e3}function ah(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const s=jg(n);return s?JSON.parse(s):(ea("Failed to decode base64 JWT payload"),null)}catch(s){return ea("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hb(t){const e=ah(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&Wb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Li(t,qb(n,{idToken:r}));ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yb(i.providerUserInfo):[],a=Qb(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new s_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Gb(t){const e=pt(t);await Ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yb(t){return t.map(e=>{var{providerId:n}=e,r=sh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(t,e){const n=await n_(t,{},async()=>{const r=io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=r_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",t_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Xb(t,e){return Tr(t,"POST","/v2/accounts:revokeToken",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Jb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Fi;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fi,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=sh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new s_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Li(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zb(this,e)}reload(){return Gb(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Li(this,Bb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:W,isAnonymous:B,providerData:N,stsTokenManager:ce}=n;ie(L&&ce,e,"internal-error");const ne=Fi.fromJSON(this.name,ce);ie(typeof L=="string",e,"internal-error"),Qn(h,e.name),Qn(d,e.name),ie(typeof W=="boolean",e,"internal-error"),ie(typeof B=="boolean",e,"internal-error"),Qn(p,e.name),Qn(E,e.name),Qn(I,e.name),Qn(w,e.name),Qn(x,e.name),Qn(D,e.name);const Z=new zr({uid:L,auth:e,email:d,emailVerified:W,displayName:h,isAnonymous:B,photoURL:E,phoneNumber:p,tenantId:I,stsTokenManager:ne,createdAt:x,lastLoginAt:D});return N&&Array.isArray(N)&&(Z.providerData=N.map(ue=>Object.assign({},ue))),w&&(Z._redirectEventId=w),Z}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fi;s.updateFromServerResponse(n);const i=new zr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ia(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new Map;function Fn(t){Bn(t instanceof Function,"Expected a class definition");let e=Mf.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}i_.type="NONE";const Lf=i_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ta(this.userKey,s.apiKey,i),this.fullPersistenceKey=ta("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Is(Fn(Lf),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Fn(Lf);const o=ta(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=zr._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Is(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Is(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(l_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(o_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(u_(e))return"Blackberry";if(h_(e))return"Webos";if(lh(e))return"Safari";if((e.includes("chrome/")||a_(e))&&!e.includes("edge/"))return"Chrome";if(c_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function o_(t=Je()){return/firefox\//i.test(t)}function lh(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function a_(t=Je()){return/crios\//i.test(t)}function l_(t=Je()){return/iemobile/i.test(t)}function c_(t=Je()){return/android/i.test(t)}function u_(t=Je()){return/blackberry/i.test(t)}function h_(t=Je()){return/webos/i.test(t)}function cl(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zb(t=Je()){var e;return cl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eA(){return fI()&&document.documentMode===10}function d_(t=Je()){return cl(t)||c_(t)||h_(t)||u_(t)||/windows phone/i.test(t)||l_(t)}function tA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t,e=[]){let n;switch(t){case"Browser":n=Ff(Je());break;case"Worker":n=`${Ff(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e={}){return Tr(t,"GET","/v2/passwordPolicy",wr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=6;class iA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uf(this),this.idTokenSubscription=new Uf(this),this.beforeStateQueue=new nA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ia(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pt(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rA(this),n=new iA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new so("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Xb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ob(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ir(t){return pt(t)}class Uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=EI(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aA(t){ul=t}function p_(t){return ul.loadJS(t)}function lA(){return ul.recaptchaEnterpriseScript}function cA(){return ul.gapiScript}function uA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hA="recaptcha-enterprise",dA="NO_RECAPTCHA";class fA{constructor(e){this.type=hA,this.auth=Ir(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{jb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new $b(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Vf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(dA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Vf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=lA();l.length!==0&&(l+=a),p_(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function $f(t,e,n,r=!1){const s=new fA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function tu(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await $f(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $f(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t,e){const n=rh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ea(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function mA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gA(t,e,n){const r=Ir(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=m_(e),{host:o,port:a}=_A(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||yA()}function m_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _A(t){const e=m_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jf(o)}}}function jf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}async function vA(t,e){return Tr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e){return ao(t,"POST","/v1/accounts:signInWithPassword",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(t,e){return ao(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}async function TA(t,e){return ao(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends ch{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ui(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ui(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tu(e,n,"signInWithPassword",EA);case"emailLink":return wA(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tu(e,r,"signUpPassword",vA);case"emailLink":return TA(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t,e){return ao(t,"POST","/v1/accounts:signInWithIdp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="http://localhost";class Qr extends ch{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=sh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:IA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AA(t){const e=oi(ai(t)).link,n=e?oi(ai(e)).deep_link_id:null,r=oi(ai(t)).deep_link_id;return(r?oi(ai(r)).link:null)||r||n||e||t}class uh{constructor(e){var n,r,s,i,o,a;const l=oi(ai(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=bA((s=l.mode)!==null&&s!==void 0?s:null);ie(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=AA(e);try{return new uh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.providerId=Hs.PROVIDER_ID}static credential(e,n){return Ui._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=uh.parseLink(n);return ie(r,"argument-error"),Ui._fromEmailAndCode(e,r.code,r.tenantId)}}Hs.PROVIDER_ID="password";Hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends hh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends lo{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends lo{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends lo{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,e){return ao(t,"POST","/v1/accounts:signUp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zr._fromIdTokenResponse(e,r,s),o=Bf(r);return new Yr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bf(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends kn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ba.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ba(e,n,r,s)}}function g_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ba._fromErrorAndOperation(t,i,e,r):i})}async function RA(t,e,n=!1){const r=await Li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Li(t,g_(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=ah(i.idToken);ie(o,r,"internal-error");const{sub:a}=o;return ie(t.uid===a,r,"user-mismatch"),Yr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(t,e,n=!1){const r="signIn",s=await g_(t,r,e),i=await Yr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function CA(t,e){return __(Ir(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(t){const e=Ir(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xA(t,e,n){const r=Ir(t),o=await tu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&y_(t),l}),a=await Yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function OA(t,e,n){return CA(pt(t),Hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&y_(t),r})}function kA(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function DA(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function NA(t){return pt(t).signOut()}const Aa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Aa,"1"),this.storage.removeItem(Aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(){const t=Je();return lh(t)||cl(t)}const MA=1e3,LA=10;class E_ extends v_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VA()&&tA(),this.fallbackToPolling=d_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);eA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,LA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},MA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}E_.type="LOCAL";const FA=E_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_ extends v_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}w_.type="SESSION";const T_=w_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new hl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await UA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=dh("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function jA(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function BA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zA(){return I_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="firebaseLocalStorageDb",HA=1,Sa="firebaseLocalStorage",A_="fbase_key";class co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dl(t,e){return t.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function WA(){const t=indexedDB.deleteDatabase(b_);return new co(t).toPromise()}function nu(){const t=indexedDB.open(b_,HA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sa,{keyPath:A_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sa)?e(r):(r.close(),await WA(),e(await nu()))})})}async function qf(t,e,n){const r=dl(t,!0).put({[A_]:e,value:n});return new co(r).toPromise()}async function KA(t,e){const n=dl(t,!1).get(e),r=await new co(n).toPromise();return r===void 0?null:r.value}function zf(t,e){const n=dl(t,!0).delete(e);return new co(n).toPromise()}const GA=800,QA=3;class S_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hl._getInstance(zA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BA(),!this.activeServiceWorker)return;this.sender=new $A(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nu();return await qf(e,Aa,"1"),await zf(e,Aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=dl(s,!1).getAll();return new co(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}S_.type="LOCAL";const YA=S_;new oo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t,e){return e?Fn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends ch{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JA(t){return __(t.auth,new fh(t),t.bypassAuthState)}function XA(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),PA(n,new fh(t),t.bypassAuthState)}async function ZA(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),RA(n,new fh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JA;case"linkViaPopup":case"linkViaRedirect":return ZA;case"reauthViaPopup":case"reauthViaRedirect":return XA;default:Jt(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=new oo(2e3,1e4);async function C_(t,e,n){const r=Ir(t);kb(t,e,hh);const s=R_(r,n);return new Vr(r,"signInViaPopup",e,s).executeNotNull()}class Vr extends P_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=dh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eS.get())};e()}}Vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="pendingRedirect",na=new Map;class nS extends P_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const r=await rS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rS(t,e){const n=oS(e),r=iS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function sS(t,e){na.set(t._key(),e)}function iS(t){return Fn(t._redirectPersistence)}function oS(t){return ta(tS,t.config.apiKey,t.name)}async function aS(t,e,n=!1){const r=Ir(t),s=R_(r,e),o=await new nS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=10*60*1e3;class cS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!x_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hf(e))}saveEventToCache(e){this.cachedEventUids.add(Hf(e)),this.lastProcessedEventTime=Date.now()}}function Hf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function x_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return x_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fS=/^https?/;async function pS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hS(t);for(const n of e)try{if(mS(n))return}catch{}Jt(t,"unauthorized-domain")}function mS(t){const e=eu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fS.test(n))return!1;if(dS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=new oo(3e4,6e4);function Wf(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _S(t){return new Promise((e,n)=>{var r,s,i;function o(){Wf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wf(),n(wn(t,"network-request-failed"))},timeout:gS.get()})}if(!((s=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Tn().gapi)===null||i===void 0)&&i.load)o();else{const a=uA("iframefcb");return Tn()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},p_(`${cA()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ra=null,e})}let ra=null;function yS(t){return ra=ra||_S(t),ra}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=new oo(5e3,15e3),ES="__/auth/iframe",wS="emulator/auth/iframe",TS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bS(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oh(e,wS):`https://${t.config.authDomain}/${ES}`,r={apiKey:e.apiKey,appName:t.name,v:ns},s=IS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${io(r).slice(1)}`}async function AS(t){const e=await yS(t),n=Tn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:bS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=Tn().setTimeout(()=>{i(o)},vS.get());function l(){Tn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RS=500,PS=600,CS="_blank",xS="http://localhost";class Kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OS(t,e,n,r=RS,s=PS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},SS),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Je().toLowerCase();n&&(a=a_(c)?CS:n),o_(c)&&(e=e||xS,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,E])=>`${d}${p}=${E},`,"");if(Zb(c)&&a!=="_self")return kS(e||"",a),new Kf(null);const h=window.open(e||"",a,u);ie(h,t,"popup-blocked");try{h.focus()}catch{}return new Kf(h)}function kS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="__/auth/handler",NS="emulator/auth/handler",VS=encodeURIComponent("fac");async function Gf(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ns,eventId:s};if(e instanceof hh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof lo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${VS}=${encodeURIComponent(l)}`:"";return`${MS(t)}?${io(a).slice(1)}${c}`}function MS({config:t}){return t.emulator?oh(t,NS):`https://${t.authDomain}/${DS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="webStorageSupport";class LS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T_,this._completeRedirectFn=aS,this._overrideRedirectResult=sS}async _openPopup(e,n,r,s){var i;Bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Gf(e,n,r,eu(),s);return OS(e,o,dh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Gf(e,n,r,eu(),s);return jA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await AS(e),r=new cS(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mc,{type:mc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[mc];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return d_()||lh()||cl()}}const FS=LS;var Qf="@firebase/auth",Yf="1.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jS(t){Gr(new _r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f_(t)},c=new oA(r,s,i,l);return mA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gr(new _r("auth-internal",e=>{const n=Ir(e.getProvider("auth").getImmediate());return(r=>new US(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Qf,Yf,$S(t)),En(Qf,Yf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=5*60,qS=zg("authIdTokenMaxAge")||BS;let Jf=null;const zS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qS)return;const s=n==null?void 0:n.token;Jf!==s&&(Jf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function HS(t=Qg()){const e=rh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pA(t,{popupRedirectResolver:FS,persistence:[YA,FA,T_]}),r=zg("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const i=zS(r);DA(n,i,()=>i(n.currentUser)),kA(n,o=>i(o))}const s=Bg("auth");return s&&gA(n,`http://${s}`),n}function WS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=wn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",WS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jS("Browser");var KS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,ph=ph||{},ae=KS||self;function fl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function uo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function GS(t){return Object.prototype.hasOwnProperty.call(t,gc)&&t[gc]||(t[gc]=++QS)}var gc="closure_uid_"+(1e9*Math.random()>>>0),QS=0;function YS(t,e,n){return t.call.apply(t.bind,arguments)}function JS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=YS:Et=JS,Et.apply(null,arguments)}function Mo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function br(){this.s=this.s,this.o=this.o}var XS=0;br.prototype.s=!1;br.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),XS!=0)&&GS(this)};br.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const O_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function mh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Xf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fl(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function wt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var ZS=function(){if(!ae.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ae.addEventListener("test",n,e),ae.removeEventListener("test",n,e)}catch{}return t}();function $i(t){return/^[\s\xa0]*$/.test(t)}function pl(){var t=ae.navigator;return t&&(t=t.userAgent)?t:""}function gn(t){return pl().indexOf(t)!=-1}function gh(t){return gh[" "](t),t}gh[" "]=function(){};function eR(t,e){var n=WR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var tR=gn("Opera"),ks=gn("Trident")||gn("MSIE"),k_=gn("Edge"),ru=k_||ks,D_=gn("Gecko")&&!(pl().toLowerCase().indexOf("webkit")!=-1&&!gn("Edge"))&&!(gn("Trident")||gn("MSIE"))&&!gn("Edge"),nR=pl().toLowerCase().indexOf("webkit")!=-1&&!gn("Edge");function N_(){var t=ae.document;return t?t.documentMode:void 0}var su;e:{var _c="",yc=function(){var t=pl();if(D_)return/rv:([^\);]+)(\)|;)/.exec(t);if(k_)return/Edge\/([\d\.]+)/.exec(t);if(ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(nR)return/WebKit\/(\S+)/.exec(t);if(tR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(yc&&(_c=yc?yc[1]:""),ks){var vc=N_();if(vc!=null&&vc>parseFloat(_c)){su=String(vc);break e}}su=_c}var iu;if(ae.document&&ks){var Zf=N_();iu=Zf||parseInt(su,10)||void 0}else iu=void 0;var rR=iu;function ji(t,e){if(wt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(D_){e:{try{gh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:sR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ji.$.h.call(this)}}it(ji,wt);var sR={2:"touch",3:"pen",4:"mouse"};ji.prototype.h=function(){ji.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ho="closure_listenable_"+(1e6*Math.random()|0),iR=0;function oR(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++iR,this.fa=this.ia=!1}function ml(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function _h(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function aR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function V_(t){const e={};for(const n in t)e[n]=t[n];return e}const ep="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M_(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<ep.length;i++)n=ep[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function gl(t){this.src=t,this.g={},this.h=0}gl.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=au(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new oR(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function ou(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=O_(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ml(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function au(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var yh="closure_lm_"+(1e6*Math.random()|0),Ec={};function L_(t,e,n,r,s){if(r&&r.once)return U_(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)L_(t,e[i],n,r,s);return null}return n=wh(n),t&&t[ho]?t.O(e,n,uo(r)?!!r.capture:!!r,s):F_(t,e,n,!1,r,s)}function F_(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=uo(s)?!!s.capture:!!s,a=Eh(t);if(a||(t[yh]=a=new gl(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=lR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ZS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(j_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function lR(){function t(n){return e.call(t.src,t.listener,n)}const e=cR;return t}function U_(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)U_(t,e[i],n,r,s);return null}return n=wh(n),t&&t[ho]?t.P(e,n,uo(r)?!!r.capture:!!r,s):F_(t,e,n,!0,r,s)}function $_(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)$_(t,e[i],n,r,s);else r=uo(r)?!!r.capture:!!r,n=wh(n),t&&t[ho]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=au(i,n,r,s),-1<n&&(ml(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Eh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=au(e,n,r,s)),(n=-1<t?e[t]:null)&&vh(n))}function vh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ho])ou(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(j_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Eh(e))?(ou(n,t),n.h==0&&(n.src=null,e[yh]=null)):ml(t)}}}function j_(t){return t in Ec?Ec[t]:Ec[t]="on"+t}function cR(t,e){if(t.fa)t=!0;else{e=new ji(e,this);var n=t.listener,r=t.la||t.src;t.ia&&vh(t),t=n.call(r,e)}return t}function Eh(t){return t=t[yh],t instanceof gl?t:null}var wc="__closure_events_fn_"+(1e9*Math.random()>>>0);function wh(t){return typeof t=="function"?t:(t[wc]||(t[wc]=function(e){return t.handleEvent(e)}),t[wc])}function st(){br.call(this),this.i=new gl(this),this.S=this,this.J=null}it(st,br);st.prototype[ho]=!0;st.prototype.removeEventListener=function(t,e,n,r){$_(this,t,e,n,r)};function ht(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new wt(e,t);else if(e instanceof wt)e.target=e.target||t;else{var s=e;e=new wt(r,t),M_(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Lo(o,r,!0,e)&&s}if(o=e.g=t,s=Lo(o,r,!0,e)&&s,s=Lo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Lo(o,r,!1,e)&&s}st.prototype.N=function(){if(st.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ml(n[r]);delete t.g[e],t.h--}}this.J=null};st.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};st.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Lo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ou(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Th=ae.JSON.stringify;class uR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function hR(){var t=Ih;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class dR{constructor(){this.h=this.g=null}add(e,n){const r=B_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var B_=new uR(()=>new fR,t=>t.reset());class fR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function mR(t){ae.setTimeout(()=>{throw t},0)}let Bi,qi=!1,Ih=new dR,q_=()=>{const t=ae.Promise.resolve(void 0);Bi=()=>{t.then(gR)}};var gR=()=>{for(var t;t=hR();){try{t.h.call(t.g)}catch(n){mR(n)}var e=B_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qi=!1};function _l(t,e){st.call(this),this.h=t||1,this.g=e||ae,this.j=Et(this.qb,this),this.l=Date.now()}it(_l,st);j=_l.prototype;j.ga=!1;j.T=null;j.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&(bh(this),this.start()))}};j.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}j.N=function(){_l.$.N.call(this),bh(this),delete this.g};function Ah(t,e,n){if(typeof t=="function")n&&(t=Et(t,n));else if(t&&typeof t.handleEvent=="function")t=Et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ae.setTimeout(t,e||0)}function z_(t){t.g=Ah(()=>{t.g=null,t.i&&(t.i=!1,z_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _R extends br{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:z_(this)}N(){super.N(),this.g&&(ae.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zi(t){br.call(this),this.h=t,this.g={}}it(zi,br);var tp=[];function H_(t,e,n,r){Array.isArray(n)||(n&&(tp[0]=n.toString()),n=tp);for(var s=0;s<n.length;s++){var i=L_(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function W_(t){_h(t.g,function(e,n){this.g.hasOwnProperty(n)&&vh(e)},t),t.g={}}zi.prototype.N=function(){zi.$.N.call(this),W_(this)};zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yl(){this.g=!0}yl.prototype.Ea=function(){this.g=!1};function yR(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function vR(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function gs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+wR(t,n)+(r?" "+r:"")})}function ER(t,e){t.info(function(){return"TIMEOUT: "+e})}yl.prototype.info=function(){};function wR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Th(n)}catch{return e}}var rs={},np=null;function vl(){return np=np||new st}rs.Ta="serverreachability";function K_(t){wt.call(this,rs.Ta,t)}it(K_,wt);function Hi(t){const e=vl();ht(e,new K_(e))}rs.STAT_EVENT="statevent";function G_(t,e){wt.call(this,rs.STAT_EVENT,t),this.stat=e}it(G_,wt);function Pt(t){const e=vl();ht(e,new G_(e,t))}rs.Ua="timingevent";function Q_(t,e){wt.call(this,rs.Ua,t),this.size=e}it(Q_,wt);function fo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ae.setTimeout(function(){t()},e)}var El={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Y_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Sh(){}Sh.prototype.h=null;function rp(t){return t.h||(t.h=t.i())}function J_(){}var po={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Rh(){wt.call(this,"d")}it(Rh,wt);function Ph(){wt.call(this,"c")}it(Ph,wt);var lu;function wl(){}it(wl,Sh);wl.prototype.g=function(){return new XMLHttpRequest};wl.prototype.i=function(){return{}};lu=new wl;function mo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new zi(this),this.P=TR,t=ru?125:void 0,this.V=new _l(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new X_}function X_(){this.i=null,this.g="",this.h=!1}var TR=45e3,Z_={},cu={};j=mo.prototype;j.setTimeout=function(t){this.P=t};function uu(t,e,n){t.L=1,t.A=Il(qn(e)),t.u=n,t.S=!0,ey(t,null)}function ey(t,e){t.G=Date.now(),go(t),t.B=qn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),ly(n.i,"t",r),t.o=0,n=t.l.J,t.h=new X_,t.g=Cy(t.l,n?e:null,!t.u),0<t.O&&(t.M=new _R(Et(t.Pa,t,t.g),t.O)),H_(t.U,t.g,"readystatechange",t.nb),e=t.I?V_(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Hi(),yR(t.j,t.v,t.B,t.m,t.W,t.u)}j.nb=function(t){t=t.target;const e=this.M;e&&_n(t)==3?e.l():this.Pa(t)};j.Pa=function(t){try{if(t==this.g)e:{const u=_n(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ru||this.g&&(this.h.h||this.g.ja()||ap(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Hi(3):Hi(2)),Tl(this);var n=this.g.da();this.ca=n;t:if(ty(this)){var r=ap(this.g);t="";var s=r.length,i=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mr(this),Ti(this);var o="";break t}this.h.i=new ae.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,vR(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$i(a)){var c=a;break t}}c=null}if(n=c)gs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hu(this,n);else{this.i=!1,this.s=3,Pt(12),Mr(this),Ti(this);break e}}this.S?(ny(this,u,o),ru&&this.i&&u==3&&(H_(this.U,this.V,"tick",this.mb),this.V.start())):(gs(this.j,this.m,o,null),hu(this,o)),u==4&&Mr(this),this.i&&!this.J&&(u==4?Ay(this.l,this):(this.i=!1,go(this)))}else qR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Mr(this),Ti(this)}}}catch{}finally{}};function ty(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function ny(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=IR(t,n),s==cu){e==4&&(t.s=4,Pt(14),r=!1),gs(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Z_){t.s=4,Pt(15),gs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else gs(t.j,t.m,s,null),hu(t,s);ty(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nh(e),e.M=!0,Pt(11))):(gs(t.j,t.m,n,"[Invalid Chunked Response]"),Mr(t),Ti(t))}j.mb=function(){if(this.g){var t=_n(this.g),e=this.g.ja();this.o<e.length&&(Tl(this),ny(this,t,e),this.i&&t!=4&&go(this))}};function IR(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?cu:(n=Number(e.substring(n,r)),isNaN(n)?Z_:(r+=1,r+n>e.length?cu:(e=e.slice(r,r+n),t.o=r+n,e)))}j.cancel=function(){this.J=!0,Mr(this)};function go(t){t.Y=Date.now()+t.P,ry(t,t.P)}function ry(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=fo(Et(t.lb,t),e)}function Tl(t){t.C&&(ae.clearTimeout(t.C),t.C=null)}j.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(ER(this.j,this.B),this.L!=2&&(Hi(),Pt(17)),Mr(this),this.s=2,Ti(this)):ry(this,this.Y-t)};function Ti(t){t.l.H==0||t.J||Ay(t.l,t)}function Mr(t){Tl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,bh(t.V),W_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function hu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||du(n.i,t))){if(!t.K&&du(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ca(n),Rl(n);else break e;Dh(n),Pt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=fo(Et(n.ib,n),6e3));if(1>=hy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Lr(n,11)}else if((t.K||n.g==t)&&Ca(n),!$i(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const E=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ch(i,i.h),i.h=null))}if(r.F){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,je(r.I,r.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Py(r,r.J?r.pa:null,r.Y),o.K){dy(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Tl(a),go(a)),r.g=o}else Iy(r);0<n.j.length&&Pl(n)}else c[0]!="stop"&&c[0]!="close"||Lr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Lr(n,7):kh(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Hi(4)}catch{}}function bR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function AR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function sy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=AR(t),r=bR(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var iy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Hr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hr){this.h=t.h,Ra(this,t.j),this.s=t.s,this.g=t.g,Pa(this,t.m),this.l=t.l;var e=t.i,n=new Wi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),sp(this,n),this.o=t.o}else t&&(e=String(t).match(iy))?(this.h=!1,Ra(this,e[1]||"",!0),this.s=li(e[2]||""),this.g=li(e[3]||"",!0),Pa(this,e[4]),this.l=li(e[5]||"",!0),sp(this,e[6]||"",!0),this.o=li(e[7]||"")):(this.h=!1,this.i=new Wi(null,this.h))}Hr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ci(e,ip,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ci(e,ip,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ci(n,n.charAt(0)=="/"?CR:PR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ci(n,OR)),t.join("")};function qn(t){return new Hr(t)}function Ra(t,e,n){t.j=n?li(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sp(t,e,n){e instanceof Wi?(t.i=e,kR(t.i,t.h)):(n||(e=ci(e,xR)),t.i=new Wi(e,t.h))}function je(t,e,n){t.i.set(e,n)}function Il(t){return je(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function li(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ci(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,RR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function RR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ip=/[#\/\?@]/g,PR=/[#\?:]/g,CR=/[#\?]/g,xR=/[#\?@]/g,OR=/#/g;function Wi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ar(t){t.g||(t.g=new Map,t.h=0,t.i&&SR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=Wi.prototype;j.add=function(t,e){Ar(this),this.i=null,t=Ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function oy(t,e){Ar(t),e=Ws(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ay(t,e){return Ar(t),e=Ws(t,e),t.g.has(e)}j.forEach=function(t,e){Ar(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};j.ta=function(){Ar(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};j.Z=function(t){Ar(this);let e=[];if(typeof t=="string")ay(this,t)&&(e=e.concat(this.g.get(Ws(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return Ar(this),this.i=null,t=Ws(this,t),ay(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function ly(t,e,n){oy(t,e),0<n.length&&(t.i=null,t.g.set(Ws(t,e),mh(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kR(t,e){e&&!t.j&&(Ar(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(oy(this,r),ly(this,s,n))},t)),t.j=e}var DR=class{constructor(t,e){this.g=t,this.map=e}};function cy(t){this.l=t||NR,ae.PerformanceNavigationTiming?(t=ae.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ae.g&&ae.g.Ka&&ae.g.Ka()&&ae.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var NR=10;function uy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hy(t){return t.h?1:t.g?t.g.size:0}function du(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ch(t,e){t.g?t.g.add(e):t.h=e}function dy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cy.prototype.cancel=function(){if(this.i=fy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return mh(t.i)}var VR=class{stringify(t){return ae.JSON.stringify(t,void 0)}parse(t){return ae.JSON.parse(t,void 0)}};function MR(){this.g=new VR}function LR(t,e,n){const r=n||"";try{sy(t,function(s,i){let o=s;uo(s)&&(o=Th(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function FR(t,e){const n=new yl;if(ae.Image){const r=new Image;r.onload=Mo(Fo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Mo(Fo,n,r,"TestLoadImage: error",!1,e),r.onabort=Mo(Fo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Mo(Fo,n,r,"TestLoadImage: timeout",!1,e),ae.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Fo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function bl(t){this.l=t.ec||null,this.j=t.ob||!1}it(bl,Sh);bl.prototype.g=function(){return new Al(this.l,this.j)};bl.prototype.i=function(t){return function(){return t}}({});function Al(t,e){st.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=xh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Al,st);var xh=0;j=Al.prototype;j.open=function(t,e){if(this.readyState!=xh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ki(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ae).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_o(this)),this.readyState=xh};j.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ki(this)),this.g&&(this.readyState=3,Ki(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ae.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;py(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function py(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}j.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_o(this):Ki(this),this.readyState==3&&py(this)}};j.Za=function(t){this.g&&(this.response=this.responseText=t,_o(this))};j.Ya=function(t){this.g&&(this.response=t,_o(this))};j.ka=function(){this.g&&_o(this)};function _o(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ki(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ki(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Al.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var UR=ae.JSON.parse;function We(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=my,this.L=this.M=!1}it(We,st);var my="",$R=/^https?$/i,jR=["POST","PUT"];j=We.prototype;j.Oa=function(t){this.M=t};j.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():lu.g(),this.C=this.u?rp(this.u):rp(lu),this.g.onreadystatechange=Et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){op(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ae.FormData&&t instanceof ae.FormData,!(0<=O_(jR,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{yy(this),0<this.B&&((this.L=BR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.ua,this)):this.A=Ah(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){op(this,i)}};function BR(t){return ks&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.ua=function(){typeof ph<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function op(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gy(t),Sl(t)}function gy(t){t.F||(t.F=!0,ht(t,"complete"),ht(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),Sl(this))};j.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sl(this,!0)),We.$.N.call(this)};j.La=function(){this.s||(this.G||this.v||this.l?_y(this):this.kb())};j.kb=function(){_y(this)};function _y(t){if(t.h&&typeof ph<"u"&&(!t.C[1]||_n(t)!=4||t.da()!=2)){if(t.v&&_n(t)==4)Ah(t.La,0,t);else if(ht(t,"readystatechange"),_n(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(iy)[1]||null;!s&&ae.self&&ae.self.location&&(s=ae.self.location.protocol.slice(0,-1)),r=!$R.test(s?s.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var i=2<_n(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",gy(t)}}finally{Sl(t)}}}}function Sl(t,e){if(t.g){yy(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function yy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ae.clearTimeout(t.A),t.A=null)}j.isActive=function(){return!!this.g};function _n(t){return t.g?t.g.readyState:0}j.da=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};j.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),UR(e)}};function ap(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case my:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function qR(t){const e={};t=(t.g&&2<=_n(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if($i(t[r]))continue;var n=pR(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}aR(e,function(r){return r.join(", ")})}j.Ia=function(){return this.m};j.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vy(t){let e="";return _h(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Oh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):je(t,e,n))}function ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ey(t){this.Ga=0,this.j=[],this.l=new yl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ni("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ni("baseRetryDelayMs",5e3,t),this.hb=ni("retryDelaySeedMs",1e4,t),this.eb=ni("forwardChannelMaxRetries",2,t),this.xa=ni("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cy(t&&t.concurrentRequestLimit),this.Ja=new MR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}j=Ey.prototype;j.ra=8;j.H=1;function kh(t){if(wy(t),t.H==3){var e=t.W++,n=qn(t.I);if(je(n,"SID",t.K),je(n,"RID",e),je(n,"TYPE","terminate"),yo(t,n),e=new mo(t,t.l,e),e.L=2,e.A=Il(qn(n)),n=!1,ae.navigator&&ae.navigator.sendBeacon)try{n=ae.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ae.Image&&(new Image().src=e.A,n=!0),n||(e.g=Cy(e.l,null),e.g.ha(e.A)),e.G=Date.now(),go(e)}Ry(t)}function Rl(t){t.g&&(Nh(t),t.g.cancel(),t.g=null)}function wy(t){Rl(t),t.u&&(ae.clearTimeout(t.u),t.u=null),Ca(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ae.clearTimeout(t.m),t.m=null)}function Pl(t){if(!uy(t.i)&&!t.m){t.m=!0;var e=t.Na;Bi||q_(),qi||(Bi(),qi=!0),Ih.add(e,t),t.C=0}}function zR(t,e){return hy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=fo(Et(t.Na,t,e),Sy(t,t.C)),t.C++,!0)}j.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new mo(this,this.l,t);let i=this.s;if(this.U&&(i?(i=V_(i),M_(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ty(this,s,e),n=qn(this.I),je(n,"RID",t),je(n,"CVER",22),this.F&&je(n,"X-HTTP-Session-Id",this.F),yo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(vy(i)))+"&"+e:this.o&&Oh(n,this.o,i)),Ch(this.i,s),this.bb&&je(n,"TYPE","init"),this.P?(je(n,"$req",e),je(n,"SID","null"),s.aa=!0,uu(s,n,null)):uu(s,n,e),this.H=2}}else this.H==3&&(t?lp(this,t):this.j.length==0||uy(this.i)||lp(this))};function lp(t,e){var n;e?n=e.m:n=t.W++;const r=qn(t.I);je(r,"SID",t.K),je(r,"RID",n),je(r,"AID",t.V),yo(t,r),t.o&&t.s&&Oh(r,t.o,t.s),n=new mo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ty(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ch(t.i,n),uu(n,r,e)}function yo(t,e){t.na&&_h(t.na,function(n,r){je(e,r,n)}),t.h&&sy({},function(n,r){je(e,r,n)})}function Ty(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Et(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{LR(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Iy(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Bi||q_(),qi||(Bi(),qi=!0),Ih.add(e,t),t.A=0}}function Dh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=fo(Et(t.Ma,t),Sy(t,t.A)),t.A++,!0)}j.Ma=function(){if(this.u=null,by(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=fo(Et(this.jb,this),t)}};j.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pt(10),Rl(this),by(this))};function Nh(t){t.B!=null&&(ae.clearTimeout(t.B),t.B=null)}function by(t){t.g=new mo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=qn(t.wa);je(e,"RID","rpc"),je(e,"SID",t.K),je(e,"AID",t.V),je(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&je(e,"TO",t.qa),je(e,"TYPE","xmlhttp"),yo(t,e),t.o&&t.s&&Oh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Il(qn(e)),n.u=null,n.S=!0,ey(n,t)}j.ib=function(){this.v!=null&&(this.v=null,Rl(this),Dh(this),Pt(19))};function Ca(t){t.v!=null&&(ae.clearTimeout(t.v),t.v=null)}function Ay(t,e){var n=null;if(t.g==e){Ca(t),Nh(t),t.g=null;var r=2}else if(du(t.i,e))n=e.F,dy(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=vl(),ht(r,new Q_(r,n)),Pl(t)}else Iy(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&zR(t,e)||r==2&&Dh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Lr(t,5);break;case 4:Lr(t,10);break;case 3:Lr(t,6);break;default:Lr(t,2)}}}function Sy(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Lr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Et(t.pb,t);n||(n=new Hr("//www.google.com/images/cleardot.gif"),ae.location&&ae.location.protocol=="http"||Ra(n,"https"),Il(n)),FR(n.toString(),r)}else Pt(2);t.H=0,t.h&&t.h.za(e),Ry(t),wy(t)}j.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Pt(2)):(this.l.info("Failed to ping google.com"),Pt(1))};function Ry(t){if(t.H=0,t.ma=[],t.h){const e=fy(t.i);(e.length!=0||t.j.length!=0)&&(Xf(t.ma,e),Xf(t.ma,t.j),t.i.i.length=0,mh(t.j),t.j.length=0),t.h.ya()}}function Py(t,e,n){var r=n instanceof Hr?qn(n):new Hr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Pa(r,r.m);else{var s=ae.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Hr(null);r&&Ra(i,r),e&&(i.g=e),s&&Pa(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&je(r,n,e),je(r,"VER",t.ra),yo(t,r),r}function Cy(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new We(new bl({ob:n})):new We(t.va),e.Oa(t.J),e}j.isActive=function(){return!!this.h&&this.h.isActive(this)};function xy(){}j=xy.prototype;j.Ba=function(){};j.Aa=function(){};j.za=function(){};j.ya=function(){};j.isActive=function(){return!0};j.Va=function(){};function xa(){if(ks&&!(10<=Number(rR)))throw Error("Environmental error: no available transport.")}xa.prototype.g=function(t,e){return new Wt(t,e)};function Wt(t,e){st.call(this),this.g=new Ey(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!$i(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$i(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ks(this)}it(Wt,st);Wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Py(t,null,t.Y),Pl(t)};Wt.prototype.close=function(){kh(this.g)};Wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Th(t),t=n);e.j.push(new DR(e.fb++,t)),e.H==3&&Pl(e)};Wt.prototype.N=function(){this.g.h=null,delete this.j,kh(this.g),delete this.g,Wt.$.N.call(this)};function Oy(t){Rh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(Oy,Rh);function ky(){Ph.call(this),this.status=1}it(ky,Ph);function Ks(t){this.g=t}it(Ks,xy);Ks.prototype.Ba=function(){ht(this.g,"a")};Ks.prototype.Aa=function(t){ht(this.g,new Oy(t))};Ks.prototype.za=function(t){ht(this.g,new ky)};Ks.prototype.ya=function(){ht(this.g,"b")};function HR(){this.blockSize=-1}function an(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(an,HR);an.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Tc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}an.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Tc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Tc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Tc(this,r),s=0;break}}this.h=s,this.i+=e};an.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Oe(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var WR={};function Vh(t){return-128<=t&&128>t?eR(t,function(e){return new Oe([e|0],0>e?-1:0)}):new Oe([t|0],0>t?-1:0)}function yn(t){if(isNaN(t)||!isFinite(t))return As;if(0>t)return lt(yn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=fu;return new Oe(e,0)}function Dy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(Dy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=yn(Math.pow(e,8)),r=As,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=yn(Math.pow(e,i)),r=r.R(i).add(yn(o))):(r=r.R(n),r=r.add(yn(o)))}return r}var fu=4294967296,As=Vh(0),pu=Vh(1),cp=Vh(16777216);j=Oe.prototype;j.ea=function(){if(Gt(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:fu+r)*e,e*=fu}return t};j.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Un(this))return"0";if(Gt(this))return"-"+lt(this).toString(t);for(var e=yn(Math.pow(t,6)),n=this,r="";;){var s=ka(n,e).g;n=Oa(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Un(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};j.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Un(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Gt(t){return t.h==-1}j.X=function(t){return t=Oa(this,t),Gt(t)?-1:Un(t)?0:1};function lt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Oe(n,~t.h).add(pu)}j.abs=function(){return Gt(this)?lt(this):this};j.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Oe(n,n[n.length-1]&-2147483648?-1:0)};function Oa(t,e){return t.add(lt(e))}j.R=function(t){if(Un(this)||Un(t))return As;if(Gt(this))return Gt(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(Gt(t))return lt(this.R(lt(t)));if(0>this.X(cp)&&0>t.X(cp))return yn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Uo(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Uo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Uo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Uo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Oe(n,0)};function Uo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ri(t,e){this.g=t,this.h=e}function ka(t,e){if(Un(e))throw Error("division by zero");if(Un(t))return new ri(As,As);if(Gt(t))return e=ka(lt(t),e),new ri(lt(e.g),lt(e.h));if(Gt(e))return e=ka(t,lt(e)),new ri(lt(e.g),e.h);if(30<t.g.length){if(Gt(t)||Gt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=pu,r=e;0>=r.X(t);)n=up(n),r=up(r);var s=us(n,1),i=us(r,1);for(r=us(r,2),n=us(n,2);!Un(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=us(r,1),n=us(n,1)}return e=Oa(t,s.R(e)),new ri(s,e)}for(s=As;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=yn(n),o=i.R(e);Gt(o)||0<o.X(t);)n-=r,i=yn(n),o=i.R(e);Un(i)&&(i=pu),s=s.add(i),t=Oa(t,o)}return new ri(s,t)}j.gb=function(t){return ka(this,t).h};j.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Oe(n,this.h&t.h)};j.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Oe(n,this.h|t.h)};j.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Oe(n,this.h^t.h)};function up(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Oe(n,t.h)}function us(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Oe(s,t.h)}xa.prototype.createWebChannel=xa.prototype.g;Wt.prototype.send=Wt.prototype.u;Wt.prototype.open=Wt.prototype.m;Wt.prototype.close=Wt.prototype.close;El.NO_ERROR=0;El.TIMEOUT=8;El.HTTP_ERROR=6;Y_.COMPLETE="complete";J_.EventType=po;po.OPEN="a";po.CLOSE="b";po.ERROR="c";po.MESSAGE="d";st.prototype.listen=st.prototype.O;We.prototype.listenOnce=We.prototype.P;We.prototype.getLastError=We.prototype.Sa;We.prototype.getLastErrorCode=We.prototype.Ia;We.prototype.getStatus=We.prototype.da;We.prototype.getResponseJson=We.prototype.Wa;We.prototype.getResponseText=We.prototype.ja;We.prototype.send=We.prototype.ha;We.prototype.setWithCredentials=We.prototype.Oa;an.prototype.digest=an.prototype.l;an.prototype.reset=an.prototype.reset;an.prototype.update=an.prototype.j;Oe.prototype.add=Oe.prototype.add;Oe.prototype.multiply=Oe.prototype.R;Oe.prototype.modulo=Oe.prototype.gb;Oe.prototype.compare=Oe.prototype.X;Oe.prototype.toNumber=Oe.prototype.ea;Oe.prototype.toString=Oe.prototype.toString;Oe.prototype.getBits=Oe.prototype.D;Oe.fromNumber=yn;Oe.fromString=Dy;var KR=function(){return new xa},GR=function(){return vl()},Ic=El,QR=Y_,YR=rs,hp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$o=J_,JR=We,XR=an,Ss=Oe;const dp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new th("@firebase/firestore");function si(){return Jr.logLevel}function $(t,...e){if(Jr.logLevel<=we.DEBUG){const n=e.map(Mh);Jr.debug(`Firestore (${Gs}): ${t}`,...n)}}function Pn(t,...e){if(Jr.logLevel<=we.ERROR){const n=e.map(Mh);Jr.error(`Firestore (${Gs}): ${t}`,...n)}}function Ds(t,...e){if(Jr.logLevel<=we.WARN){const n=e.map(Mh);Jr.warn(`Firestore (${Gs}): ${t}`,...n)}}function Mh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Gs}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function Me(t,e){t||oe()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class eP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tP{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new Ny(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new _t(e)}}class nP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new nP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new sP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=oP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function Ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new Ze(0,0))}static max(){return new le(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends Gi{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const aP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Gi{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return aP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new H(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Be.fromString(e))}static fromName(e){return new J(Be.fromString(e).popFirst(5))}static empty(){return new J(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Be(e.slice()))}}function lP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new yr(s,J.empty(),e)}function cP(t){return new yr(t.readTime,t.key,-1)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(le.min(),J.empty(),-1)}static max(){return new yr(le.max(),J.empty(),-1)}}function uP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==hP)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(s=>s?P.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new P((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new P((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new jn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Ii(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Fh(r.target.error);this.V.reject(new Ii(e,s))}}static open(e,n,r,s){try{return new Lh(n,e.transaction(s,r))}catch(i){throw new Ii(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||($("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new pP(n)}}class Fr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Fr.S(Je())===12.2&&Pn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return $("SimpleDb","Removing database:",e),kr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Hg())return!1;if(Fr.C())return!0;const e=Je(),n=Fr.S(e),r=0<n&&n<10,s=Fr.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||($("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Ii(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new H(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new H(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ii(e,o))},s.onupgradeneeded=i=>{$("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{$("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Lh.open(this.db,e,i?"readonly":"readwrite",r),l=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),P.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if($("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class fP{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return kr(this.k.delete())}}class Ii extends H{constructor(e,n){super(R.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Eo(t){return t.name==="IndexedDbTransactionError"}class pP{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?($("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):($("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),kr(r)}add(e){return $("SimpleDb","ADD",this.store.name,e,e),kr(this.store.add(e))}get(e){return kr(this.store.get(e)).next(n=>(n===void 0&&(n=null),$("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return $("SimpleDb","DELETE",this.store.name,e),kr(this.store.delete(e))}count(){return $("SimpleDb","COUNT",this.store.name),kr(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new P((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new P((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){$("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new P((r,s)=>{n.onerror=i=>{const o=Fh(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new P((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new fP(a),c=n(a.primaryKey,a.value,l);if(c instanceof P){const u=c.catch(h=>(l.done(),P.reject(h)));r.push(u)}l.isDone?s():l.$===null?a.continue():a.continue(l.$)}}).next(()=>P.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function kr(t){return new P((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Fh(r.target.error);n(s)}})}let fp=!1;function Fh(t){const e=Fr.S(Je());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new H("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fp||(fp=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Uh._e=-1;function Cl(t){return t==null}function Da(t){return t===0&&1/t==-1/0}function mP(t){return typeof t=="number"&&Number.isInteger(t)&&!Da(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function My(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jo(this.root,e,this.comparator,!0)}}class jo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mp(this.data.getIterator())}getIteratorFrom(e){return new mp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class mp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new zt([])}unionWith(e){let n=new dt(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ly("Invalid base64 string: "+i):i}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const gP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(Me(!!t),typeof t=="string"){let e=0;const n=gP.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xr(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jh(t){const e=t.mapValue.fields.__previous_value__;return $h(e)?jh(e):e}function Qi(t){const e=vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Yi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$h(t)?4:yP(t)?9007199254740991:10:oe()}function Cn(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qi(t).isEqual(Qi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=vr(s.timestampValue),a=vr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Xr(s.bytesValue).isEqual(Xr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),a=Qe(i.doubleValue);return o===a?Da(o)===Da(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(pp(o)!==pp(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Cn(o[l],a[l])))return!1;return!0}(t,e);default:return oe()}}function Ji(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Vs(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Qe(i.integerValue||i.doubleValue),l=Qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return gp(t.timestampValue,e.timestampValue);case 4:return gp(Qi(t),Qi(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Xr(i),l=Xr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Re(a[c],l[c]);if(u!==0)return u}return Re(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Re(Qe(i.latitude),Qe(o.latitude));return a!==0?a:Re(Qe(i.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Vs(a[c],l[c]);if(u)return u}return Re(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Bo.mapValue&&o===Bo.mapValue)return 0;if(i===Bo.mapValue)return 1;if(o===Bo.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Re(l[h],u[h]);if(d!==0)return d;const p=Vs(a[l[h]],c[u[h]]);if(p!==0)return p}return Re(l.length,u.length)}(t.mapValue,e.mapValue);default:throw oe()}}function gp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=vr(t),r=vr(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function Ms(t){return mu(t)}function mu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=mu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${mu(n.fields[o])}`;return s+"}"}(t.mapValue):oe()}function _p(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gu(t){return!!t&&"integerValue"in t}function Bh(t){return!!t&&"arrayValue"in t}function yp(t){return!!t&&"nullValue"in t}function vp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sa(t){return!!t&&"mapValue"in t}function bi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ss(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bi(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=bi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());sa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];sa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ss(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(bi(this.value))}}function Fy(t){const e=[];return ss(t.fields,(n,r)=>{const s=new ut([n]);if(sa(r)){const i=Fy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,le.min(),le.min(),le.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,le.min(),le.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,le.min(),le.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){this.position=e,this.inclusive=n}}function Ep(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Vs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n="asc"){this.field=e,this.dir=n}}function vP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{}class Ye extends Uy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new wP(e,n,r):n==="array-contains"?new bP(e,r):n==="in"?new AP(e,r):n==="not-in"?new SP(e,r):n==="array-contains-any"?new RP(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new TP(e,r):new IP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vs(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(Vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends Uy{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new ln(e,n)}matches(e){return $y(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function $y(t){return t.op==="and"}function jy(t){return EP(t)&&$y(t)}function EP(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function _u(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(jy(t))return t.filters.map(e=>_u(e)).join(",");{const e=t.filters.map(n=>_u(n)).join(",");return`${t.op}(${e})`}}function By(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&Cn(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&By(o,s.filters[a]),!0):!1}(t,e):void oe()}function qy(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(qy).join(" ,")+"}"}(t):"Filter"}class wP extends Ye{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class TP extends Ye{constructor(e,n){super(e,"in",n),this.keys=zy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IP extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=zy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class bP extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bh(n)&&Ji(n.arrayValue,this.value)}}class AP extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ji(this.value.arrayValue,n)}}class SP extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ji(this.value.arrayValue,n)}}class RP extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ji(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Tp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new PP(t,e,n,r,s,i,o)}function qh(t){const e=de(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_u(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Cl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.ce=n}return e.ce}function zh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!By(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wp(t.startAt,e.startAt)&&wp(t.endAt,e.endAt)}function yu(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function CP(t,e,n,r,s,i,o,a){return new wo(t,e,n,r,s,i,o,a)}function Hy(t){return new wo(t)}function Ip(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Wy(t){return t.collectionGroup!==null}function Ai(t){const e=de(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new dt(ut.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Va(i,r))}),n.has(ut.keyField().canonicalString())||e.le.push(new Va(ut.keyField(),r))}return e.le}function In(t){const e=de(t);return e.he||(e.he=xP(e,Ai(t))),e.he}function xP(t,e){if(t.limitType==="F")return Tp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Va(s.field,i)});const n=t.endAt?new Na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Na(t.startAt.position,t.startAt.inclusive):null;return Tp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vu(t,e){const n=t.filters.concat([e]);return new wo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Eu(t,e,n){return new wo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xl(t,e){return zh(In(t),In(e))&&t.limitType===e.limitType}function Ky(t){return`${qh(In(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>qy(s)).join(", ")}]`),Cl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ms(s)).join(",")),`Target(${r})`}(In(t))}; limitType=${t.limitType})`}function Ol(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=Ep(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Ai(r),s)||r.endAt&&!function(o,a,l){const c=Ep(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Ai(r),s))}(t,e)}function OP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gy(t){return(e,n)=>{let r=!1;for(const s of Ai(t)){const i=kP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kP(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Vs(l,c):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return My(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=new He(J.comparator);function zn(){return DP}const Qy=new He(J.comparator);function ui(...t){let e=Qy;for(const n of t)e=e.insert(n.key,n);return e}function Yy(t){let e=Qy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return Si()}function Jy(){return Si()}function Si(){return new Qs(t=>t.toString(),(t,e)=>t.isEqual(e))}const NP=new He(J.comparator),VP=new dt(J.comparator);function ye(...t){let e=VP;for(const n of t)e=e.add(n);return e}const MP=new dt(Re);function LP(){return MP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Da(e)?"-0":e}}function Zy(t){return{integerValue:""+t}}function FP(t,e){return mP(e)?Zy(e):Xy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this._=void 0}}function UP(t,e,n){return t instanceof Ma?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$h(i)&&(i=jh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Xi?tv(t,e):t instanceof Zi?nv(t,e):function(s,i){const o=ev(s,i),a=bp(o)+bp(s.Ie);return gu(o)&&gu(s.Ie)?Zy(a):Xy(s.serializer,a)}(t,e)}function $P(t,e,n){return t instanceof Xi?tv(t,e):t instanceof Zi?nv(t,e):n}function ev(t,e){return t instanceof La?function(r){return gu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ma extends kl{}class Xi extends kl{constructor(e){super(),this.elements=e}}function tv(t,e){const n=rv(e);for(const r of t.elements)n.some(s=>Cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Zi extends kl{constructor(e){super(),this.elements=e}}function nv(t,e){let n=rv(e);for(const r of t.elements)n=n.filter(s=>!Cn(s,r));return{arrayValue:{values:n}}}class La extends kl{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function bp(t){return Qe(t.integerValue||t.doubleValue)}function rv(t){return Bh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function jP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Xi&&s instanceof Xi||r instanceof Zi&&s instanceof Zi?Ns(r.elements,s.elements,Cn):r instanceof La&&s instanceof La?Cn(r.Ie,s.Ie):r instanceof Ma&&s instanceof Ma}(t.transform,e.transform)}class BP{constructor(e,n){this.version=e,this.transformResults=n}}class bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Dl{}function sv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ov(t.key,bn.none()):new To(t.key,t.data,bn.none());{const n=t.data,r=Ft.empty();let s=new dt(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sr(t.key,r,new zt(s.toArray()),bn.none())}}function qP(t,e,n){t instanceof To?function(s,i,o){const a=s.value.clone(),l=Sp(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,o){if(!ia(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Sp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(iv(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ri(t,e,n,r){return t instanceof To?function(i,o,a,l){if(!ia(i.precondition,o))return a;const c=i.value.clone(),u=Rp(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,o,a,l){if(!ia(i.precondition,o))return a;const c=Rp(i.fieldTransforms,l,o),u=o.data;return u.setAll(iv(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return ia(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ev(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function Ap(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ns(r,s,(i,o)=>jP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class To extends Dl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends Dl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function iv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sp(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,$P(o,a,n[s]))}return r}function Rp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,UP(i,o,e))}return r}class ov extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HP extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&qP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ri(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ri(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=sv(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,(n,r)=>Ap(n,r))&&Ns(this.baseMutations,e.baseMutations,(n,r)=>Ap(n,r))}}class Hh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Me(e.mutations.length===r.length);let s=function(){return NP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,Ie;function QP(t){switch(t){default:return oe();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function av(t){if(t===void 0)return Pn("GRPC error has no .code"),R.UNKNOWN;switch(t){case Ge.OK:return R.OK;case Ge.CANCELLED:return R.CANCELLED;case Ge.UNKNOWN:return R.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return R.INTERNAL;case Ge.UNAVAILABLE:return R.UNAVAILABLE;case Ge.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Ge.NOT_FOUND:return R.NOT_FOUND;case Ge.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Ge.ABORTED:return R.ABORTED;case Ge.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Ge.DATA_LOSS:return R.DATA_LOSS;default:return oe()}}(Ie=Ge||(Ge={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=new Ss([4294967295,4294967295],0);function Pp(t){const e=YP().encode(t),n=new XR;return n.update(e),new Uint8Array(n.digest())}function Cp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ss([n,r],0),new Ss([s,i],0)]}class Wh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hi(`Invalid padding: ${n}`);if(r<0)throw new hi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new hi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ss.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Ss.fromNumber(r)));return s.compare(JP)===1&&(s=new Ss([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Pp(e),[r,s]=Cp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Wh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Pp(e),[r,s]=Cp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Nl(le.min(),s,new He(Re),zn(),ye())}}class Io{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Io(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class lv{constructor(e,n){this.targetId=e,this.fe=n}}class cv{constructor(e,n,r=Tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class xp{constructor(){this.ge=0,this.pe=kp(),this.ye=Tt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ye(),n=ye(),r=ye();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe()}}),new Io(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=kp()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Me(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class XP{constructor(e){this.Be=e,this.ke=new Map,this.qe=zn(),this.Qe=Op(),this.Ke=new He(Re)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(yu(i))if(r===0){const o=new J(i.path);this.We(n,o,yt.newNoDocument(o,le.min()))}else Me(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Xr(r).toUint8Array()}catch(l){if(l instanceof Ly)return Ds("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Wh(o,s,i)}catch(l){return Ds(l instanceof hi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&yu(a.target)){const l=new J(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,yt.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=ye();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Nl(e,n,this.Ke,this.qe,r);return this.qe=zn(),this.Qe=Op(),this.Ke=new He(Re),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new xp,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new dt(Re),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new xp),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Op(){return new He(J.comparator)}function kp(){return new He(J.comparator)}const ZP={asc:"ASCENDING",desc:"DESCENDING"},eC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tC={and:"AND",or:"OR"};class nC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wu(t,e){return t.useProto3Json||Cl(e)?e:{value:e}}function Fa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rC(t,e){return Fa(t,e.toTimestamp())}function An(t){return Me(!!t),le.fromTimestamp(function(n){const r=vr(n);return new Ze(r.seconds,r.nanos)}(t))}function Kh(t,e){return Tu(t,e).canonicalString()}function Tu(t,e){const n=function(s){return new Be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hv(t){const e=Be.fromString(t);return Me(gv(e)),e}function Iu(t,e){return Kh(t.databaseId,e.path)}function bc(t,e){const n=hv(e);if(n.get(1)!==t.databaseId.projectId)throw new H(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(fv(n))}function dv(t,e){return Kh(t.databaseId,e)}function sC(t){const e=hv(t);return e.length===4?Be.emptyPath():fv(e)}function bu(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fv(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dp(t,e,n){return{name:Iu(t,e),fields:n.value.mapValue.fields}}function iC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Me(u===void 0||typeof u=="string"),Tt.fromBase64String(u||"")):(Me(u===void 0||u instanceof Uint8Array),Tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?R.UNKNOWN:av(c.code);return new H(u,c.message||"")}(o);n=new cv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=bc(t,r.document.name),i=An(r.document.updateTime),o=r.document.createTime?An(r.document.createTime):le.min(),a=new Ft({mapValue:{fields:r.document.fields}}),l=yt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new oa(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=bc(t,r.document),i=r.readTime?An(r.readTime):le.min(),o=yt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new oa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=bc(t,r.document),i=r.removedTargetIds||[];n=new oa([],i,s,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new GP(s,i),a=r.targetId;n=new lv(a,o)}}return n}function oC(t,e){let n;if(e instanceof To)n={update:Dp(t,e.key,e.value)};else if(e instanceof ov)n={delete:Iu(t,e.key)};else if(e instanceof Sr)n={update:Dp(t,e.key,e.data),updateMask:mC(e.fieldMask)};else{if(!(e instanceof HP))return oe();n={verify:Iu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Xi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Zi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof La)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:rC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe()}(t,e.precondition)),n}function aC(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?An(s.updateTime):An(i);return o.isEqual(le.min())&&(o=An(i)),new BP(o,s.transformResults||[])}(n,e))):[]}function lC(t,e){return{documents:[dv(t,e.path)]}}function cC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=dv(t,s);const i=function(c){if(c.length!==0)return mv(ln.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:ps(d.field),direction:dC(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=wu(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ut:n,parent:s}}function uC(t){let e=sC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=pv(h);return d instanceof ln&&jy(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(E){return new Va(ms(E.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Cl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new Na(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new Na(p,d)}(n.endAt)),CP(e,s,o,i,a,"F",l,c)}function hC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ms(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ms(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ms(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ms(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(ms(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>pv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function dC(t){return ZP[t]}function fC(t){return eC[t]}function pC(t){return tC[t]}function ps(t){return{fieldPath:t.canonicalString()}}function ms(t){return ut.fromServerFormat(t.fieldPath)}function mv(t){return t instanceof Ye?function(n){if(n.op==="=="){if(vp(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NAN"}};if(yp(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vp(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NAN"}};if(yp(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(n.field),op:fC(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>mv(s));return r.length===1?r[0]:{compositeFilter:{op:pC(n.op),filters:r}}}(t):oe()}function mC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,r,s,i=le.min(),o=le.min(),a=Tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.ct=e}}function _C(t){const e=uC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Eu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this._n=new vC}addToCollectionParentIndex(e,n){return this._n.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(yr.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class vC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ls(0)}static Ln(){return new Ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(){this.changes=new Qs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ri(r.mutation,s,zt.empty(),Ze.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ui();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=zn();const o=Si(),a=function(){return Si()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Sr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ri(u.mutation,c,u.mutation.getFieldMask(),Ze.now())):o.set(c.key,zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new wC(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Si();let s=new He((o,a)=>o-a),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||zt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||ye()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Jy();u.forEach(d=>{if(!i.has(d)){const p=sv(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Wy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):P.resolve(Ur());let a=-1,l=i;return o.next(c=>P.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,ye())).next(u=>({batchId:a,changes:Yy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let s=ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ui();return this.indexManager.getCollectionParents(e,i).next(a=>P.forEach(a,l=>{const c=function(h,d){return new wo(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,yt.newInvalidDocument(u)))});let a=ui();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Ri(u.mutation,c,zt.empty(),Ze.now()),Ol(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return P.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:An(s.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:_C(s.bundledQuery),readTime:An(s.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(){this.overlays=new He(J.comparator),this.hr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return P.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const s=Ur(),i=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Ur(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ur(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return P.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new KP(n,r));let i=this.hr.get(n);i===void 0&&(i=ye(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.Pr=new dt(rt.Ir),this.Tr=new dt(rt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new rt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new J(new Be([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new J(new Be([])),r=new rt(n,e),s=new rt(n,e+1);let i=ye();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new rt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return J.comparator(e.key,n.key)||Re(e.pr,n.pr)}static Er(e,n){return Re(e.pr,n.pr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new dt(rt.Ir)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WP(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new rt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(Re);return n.forEach(s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),P.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const o=new rt(new J(i),0);let a=new dt(Re);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),P.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return P.forEach(n.mutations,s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new rt(n,0),s=this.wr.firstAfterOrEqual(r);return P.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.vr=e,this.docs=function(){return new He(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=zn();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||uP(cP(u),r)<=0||(s.has(u.key)||Ol(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe()}Fr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new RC(this)}getSize(e){return P.resolve(this.size)}}class RC extends EC{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.persistence=e,this.Mr=new Qs(n=>qh(n),zh),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Gh,this.targetCount=0,this.Lr=Ls.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),P.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.qn(n),P.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.Br={},this.overlays={},this.kr=new Uh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new PC(this),this.indexManager=new yC,this.remoteDocumentCache=function(s){return new SC(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new gC(n),this.$r=new IC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new AC(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new xC(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class xC extends dP{constructor(e){super(),this.currentSequenceNumber=e}}class Qh{constructor(e){this.persistence=e,this.zr=new Gh,this.jr=null}static Hr(e){return new Qh(e)}get Jr(){if(this.jr)return this.jr;throw oe()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),P.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Jr,r=>{const s=J.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return P.or([()=>P.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Yh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return pI()?8:Fr.v(Je())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new OC;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(si()<=we.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),P.resolve()):(si()<=we.DEBUG&&$("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(si()<=we.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):P.resolve())}ji(e,n){if(Ip(n))return P.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Eu(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,Eu(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,s){return Ip(n)||s.isEqual(le.min())?P.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?P.resolve(null):(si()<=we.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fs(n)),this.es(e,o,n,lP(s,-1)).next(a=>a))})}Zi(e,n){let r=new dt(Gy(e));return n.forEach((s,i)=>{Ol(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return si()<=we.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",fs(n)),this.zi.getDocumentsMatchingQuery(e,n,yr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new He(Re),this.rs=new Qs(i=>qh(i),zh),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TC(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function NC(t,e,n,r){return new DC(t,e,n,r)}async function _v(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ye();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function VC(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let p=P.resolve();return d.forEach(E=>{p=p.next(()=>u.getEntry(l,E)).next(I=>{const w=c.docVersions.get(E);Me(w!==null),I.version.compareTo(w)<0&&(h.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),u.addEntry(I)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ye();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function yv(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function MC(t,e){const n=de(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Tt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(I,w,x){return I.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(d,p,u)&&a.push(n.Qr.updateTargetData(i,p))});let l=zn(),c=ye();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(LC(i,o,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(le.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ns=s,i))}function LC(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=zn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function FC(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function UC(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Au(t,e,n){const r=de(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Eo(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Np(t,e,n){const r=de(t);let s=le.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=de(l),d=h.rs.get(u);return d!==void 0?P.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,o,In(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:ye())).next(a=>($C(r,OP(e),a),{documents:a,hs:i})))}function $C(t,e,n){let r=t.ss.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Vp{constructor(){this.activeTargetIds=LP()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jC{constructor(){this.no=new Vp,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Vp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo=null;function Ac(){return qo===null?qo=function(){return 268435456+Math.round(2147483648*Math.random())}():qo++,"0x"+qo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class HC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Ac(),l=this.bo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,l,c,s).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ds("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=qC[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=Ac();return new Promise((o,a)=>{const l=new JR;l.setWithCredentials(!0),l.listenOnce(QR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ic.NO_ERROR:const u=l.getResponseJson();$(gt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ic.TIMEOUT:$(gt,`RPC '${e}' ${i} timed out`),a(new H(R.DEADLINE_EXCEEDED,"Request time out"));break;case Ic.HTTP_ERROR:const h=l.getStatus();if($(gt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const E=function(w){const x=w.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(x)>=0?x:R.UNKNOWN}(p.status);a(new H(E,p.message))}else a(new H(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(R.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{$(gt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);$(gt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Fo(e,n,r){const s=Ac(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=KR(),a=GR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");$(gt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,p=!1;const E=new zC({lo:w=>{p?$(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(d||($(gt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),$(gt,`RPC '${e}' stream ${s} sending:`,w),h.send(w))},ho:()=>h.close()}),I=(w,x,D)=>{w.listen(x,L=>{try{D(L)}catch(W){setTimeout(()=>{throw W},0)}})};return I(h,$o.EventType.OPEN,()=>{p||$(gt,`RPC '${e}' stream ${s} transport opened.`)}),I(h,$o.EventType.CLOSE,()=>{p||(p=!0,$(gt,`RPC '${e}' stream ${s} transport closed`),E.Vo())}),I(h,$o.EventType.ERROR,w=>{p||(p=!0,Ds(gt,`RPC '${e}' stream ${s} transport errored:`,w),E.Vo(new H(R.UNAVAILABLE,"The operation could not be completed")))}),I(h,$o.EventType.MESSAGE,w=>{var x;if(!p){const D=w.data[0];Me(!!D);const L=D,W=L.error||((x=L[0])===null||x===void 0?void 0:x.error);if(W){$(gt,`RPC '${e}' stream ${s} received error:`,W);const B=W.status;let N=function(Z){const ue=Ge[Z];if(ue!==void 0)return av(ue)}(B),ce=W.message;N===void 0&&(N=R.INTERNAL,ce="Unknown error status: "+B+" with message "+W.message),p=!0,E.Vo(new H(N,ce)),h.close()}else $(gt,`RPC '${e}' stream ${s} received:`,D),E.mo(D)}}),I(a,YR.STAT_EVENT,w=>{w.stat===hp.PROXY?$(gt,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===hp.NOPROXY&&$(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.Ro()},0),E}}function Sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t){return new nC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new vv(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new H(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WC extends Ev{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=iC(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?An(o.readTime):le.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=bu(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=yu(l)?{documents:lC(i,l)}:{query:cC(i,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=uv(i,o.resumeToken);const c=wu(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(le.min())>0){a.readTime=Fa(i,o.snapshotVersion.toTimestamp());const c=wu(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=hC(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=bu(this.serializer),n.removeTarget=e,this.t_(n)}}class KC extends Ev{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=aC(e.writeResults,e.commitTime),r=An(e.commitTime);return this.listener.T_(r,n)}return Me(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=bu(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>oC(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new H(R.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Tu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(R.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Tu(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(R.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class QC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Pn(n),this.g_=!1):$("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{is(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=de(l);c.v_.add(4),await bo(c),c.x_.set("Unknown"),c.v_.delete(4),await Ml(c)}(this))})}),this.x_=new QC(r,s)}}async function Ml(t){if(is(t))for(const e of t.F_)await e(!0)}async function bo(t){for(const e of t.F_)await e(!1)}function wv(t,e){const n=de(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),ed(n)?Zh(n):Ys(n).Jo()&&Xh(n,e))}function Jh(t,e){const n=de(t),r=Ys(n);n.C_.delete(e),r.Jo()&&Tv(n,e),n.C_.size===0&&(r.Jo()?r.Xo():is(n)&&n.x_.set("Unknown"))}function Xh(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ys(t).c_(e)}function Tv(t,e){t.O_.Oe(e),Ys(t).l_(e)}function Zh(t){t.O_=new XP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ys(t).start(),t.x_.p_()}function ed(t){return is(t)&&!Ys(t).Ho()&&t.C_.size>0}function is(t){return de(t).v_.size===0}function Iv(t){t.O_=void 0}async function JC(t){t.C_.forEach((e,n)=>{Xh(t,e)})}async function XC(t,e){Iv(t),ed(t)?(t.x_.S_(e),Zh(t)):t.x_.set("Unknown")}async function ZC(t,e,n){if(t.x_.set("Online"),e instanceof cv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ua(t,r)}else if(e instanceof oa?t.O_.$e(e):e instanceof lv?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(le.min()))try{const r=await yv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.C_.get(l);if(!u)return;i.C_.set(l,u.withResumeToken(Tt.EMPTY_BYTE_STRING,u.snapshotVersion)),Tv(i,l);const h=new ir(u.target,l,c,u.sequenceNumber);Xh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Ua(t,r)}}async function Ua(t,e,n){if(!Eo(e))throw e;t.v_.add(1),await bo(t),t.x_.set("Offline"),n||(n=()=>yv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Ml(t)})}function bv(t,e){return e().catch(n=>Ua(t,n,e))}async function Ll(t){const e=de(t),n=Er(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;e1(e);)try{const s=await FC(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,t1(e,s)}catch(s){await Ua(e,s)}Av(e)&&Sv(e)}function e1(t){return is(t)&&t.D_.length<10}function t1(t,e){t.D_.push(e);const n=Er(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function Av(t){return is(t)&&!Er(t).Ho()&&t.D_.length>0}function Sv(t){Er(t).start()}async function n1(t){Er(t).d_()}async function r1(t){const e=Er(t);for(const n of t.D_)e.I_(n.mutations)}async function s1(t,e,n){const r=t.D_.shift(),s=Hh.from(r,e,n);await bv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ll(t)}async function i1(t,e){e&&Er(t).P_&&await async function(r,s){if(function(o){return QP(o)&&o!==R.ABORTED}(s.code)){const i=r.D_.shift();Er(r).Zo(),await bv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ll(r)}}(t,e),Av(t)&&Sv(t)}async function Lp(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=is(n);n.v_.add(3),await bo(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Ml(n)}async function o1(t,e){const n=de(t);e?(n.v_.delete(2),await Ml(n)):e||(n.v_.add(2),await bo(n),n.x_.set("Unknown"))}function Ys(t){return t.N_||(t.N_=function(n,r,s){const i=de(n);return i.R_(),new WC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:JC.bind(null,t),To:XC.bind(null,t),u_:ZC.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),ed(t)?Zh(t):t.x_.set("Unknown")):(await t.N_.stop(),Iv(t))})),t.N_}function Er(t){return t.L_||(t.L_=function(n,r,s){const i=de(n);return i.R_(),new KC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:n1.bind(null,t),To:i1.bind(null,t),E_:r1.bind(null,t),T_:s1.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Ll(t)):(await t.L_.stop(),t.D_.length>0&&($("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new td(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nd(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),Eo(t))return new H(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=ui(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.B_=new He(J.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):oe():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fs{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Fs(e,n,Rs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class l1{constructor(){this.queries=new Qs(e=>Ky(e),xl),this.onlineState="Unknown",this.W_=new Set}}async function c1(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.K_()&&e.U_()&&(r=2):(i=new a1,r=e.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=nd(o,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Q_.push(e),e.G_(n.onlineState),i.q_&&e.z_(i.q_)&&rd(n)}async function u1(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=e.U_()?0:1:!i.K_()&&e.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function h1(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&rd(n)}function d1(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function rd(t){t.W_.forEach(e=>{e.next()})}var Su,Up;(Up=Su||(Su={})).j_="default",Up.Cache="cache";class f1{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==Su.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.key=e}}class Pv{constructor(e){this.key=e}}class p1{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ye(),this.mutatedKeys=ye(),this.ha=Gy(e),this.Pa=new Rs(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new Fp,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Ol(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?E!==I&&(r.track({type:3,doc:p}),w=!0):this.da(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.ha(p,l)>0||c&&this.ha(p,c)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||c)&&(a=!0)),w&&(p?(o=o.add(p),i=I?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(p,E){const I=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return I(p)-I(E)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],l=this.la.size===0&&this.current&&!s?1:0,c=l!==this.ca;return this.ca=l,o.length!==0||c?{snapshot:new Fs(this.query,e.Pa,i,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Fp,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=ye(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new Pv(r))}),this.la.forEach(r=>{e.has(r)||n.push(new Rv(r))}),n}fa(e){this.ua=e.hs,this.la=ye();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return Fs.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class m1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class g1{constructor(e){this.key=e,this.pa=!1}}class _1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Qs(a=>Ky(a),xl),this.Sa=new Map,this.ba=new Set,this.Da=new He(J.comparator),this.Ca=new Map,this.va=new Gh,this.Fa={},this.Ma=new Map,this.xa=Ls.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function y1(t,e,n=!0){const r=Nv(t);let s;const i=r.wa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await Cv(r,e,n,!0),s}async function v1(t,e){const n=Nv(t);await Cv(n,e,!0,!1)}async function Cv(t,e,n,r){const s=await UC(t.localStore,In(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await E1(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&wv(t.remoteStore,s),a}async function E1(t,e,n,r,s){t.Na=(h,d,p)=>async function(I,w,x,D){let L=w.view.Ta(x);L.Xi&&(L=await Np(I.localStore,w.query,!1).then(({documents:ce})=>w.view.Ta(ce,L)));const W=D&&D.targetChanges.get(w.targetId),B=D&&D.targetMismatches.get(w.targetId)!=null,N=w.view.applyChanges(L,I.isPrimaryClient,W,B);return jp(I,w.targetId,N.Va),N.snapshot}(t,h,d,p);const i=await Np(t.localStore,e,!0),o=new p1(e,i.hs),a=o.Ta(i.documents),l=Io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);jp(t,n,c.Va);const u=new m1(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),c.snapshot}async function w1(t,e,n){const r=de(t),s=r.wa.get(e),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!xl(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Au(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Jh(r.remoteStore,s.targetId),Ru(r,s.targetId)}).catch(vo)):(Ru(r,s.targetId),await Au(r.localStore,s.targetId,!0))}async function T1(t,e){const n=de(t),r=n.wa.get(e),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jh(n.remoteStore,r.targetId))}async function I1(t,e,n){const r=x1(t);try{const s=await function(o,a){const l=de(o),c=Ze.now(),u=a.reduce((p,E)=>p.add(E.key),ye());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let E=zn(),I=ye();return l.os.getEntries(p,u).next(w=>{E=w,E.forEach((x,D)=>{D.isValidDocument()||(I=I.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,E)).next(w=>{h=w;const x=[];for(const D of a){const L=zP(D,h.get(D.key).overlayedDocument);L!=null&&x.push(new Sr(D.key,L,Fy(L.value.mapValue),bn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,x,a)}).next(w=>{d=w;const x=w.applyToLocalDocumentSet(h,I);return l.documentOverlayCache.saveOverlays(p,w.batchId,x)})}).then(()=>({batchId:d.batchId,changes:Yy(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Fa[o.currentUser.toKey()];c||(c=new He(Re)),c=c.insert(a,l),o.Fa[o.currentUser.toKey()]=c}(r,s.batchId,n),await Ao(r,s.changes),await Ll(r.remoteStore)}catch(s){const i=nd(s,"Failed to persist write");n.reject(i)}}async function xv(t,e){const n=de(t);try{const r=await MC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?Me(o.pa):s.removedDocuments.size>0&&(Me(o.pa),o.pa=!1))}),await Ao(n,r,e)}catch(r){await vo(r)}}function $p(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=de(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(c=!0)}),c&&rd(l)}(r.eventManager,e),s.length&&r.ya.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function b1(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ca.get(e),i=s&&s.key;if(i){let o=new He(J.comparator);o=o.insert(i,yt.newNoDocument(i,le.min()));const a=ye().add(i),l=new Nl(le.min(),new Map,new He(Re),o,a);await xv(r,l),r.Da=r.Da.remove(i),r.Ca.delete(e),sd(r)}else await Au(r.localStore,e,!1).then(()=>Ru(r,e,n)).catch(vo)}async function A1(t,e){const n=de(t),r=e.batch.batchId;try{const s=await VC(n.localStore,e);kv(n,r,null),Ov(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ao(n,s)}catch(s){await vo(s)}}async function S1(t,e,n){const r=de(t);try{const s=await function(o,a){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Me(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);kv(r,e,n),Ov(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ao(r,s)}catch(s){await vo(s)}}function Ov(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function kv(t,e,n){const r=de(t);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Fa[r.currentUser.toKey()]=s}}function Ru(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||Dv(t,r)})}function Dv(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(Jh(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),sd(t))}function jp(t,e,n){for(const r of n)r instanceof Rv?(t.va.addReference(r.key,e),R1(t,r)):r instanceof Pv?($("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||Dv(t,r.key)):oe()}function R1(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||($("SyncEngine","New document in limbo: "+n),t.ba.add(r),sd(t))}function sd(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new J(Be.fromString(e)),r=t.xa.next();t.Ca.set(r,new g1(n)),t.Da=t.Da.insert(n,r),wv(t.remoteStore,new ir(In(Hy(n.path)),r,"TargetPurposeLimboResolution",Uh._e))}}async function Ao(t,e,n){const r=de(t),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Yh.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(l,c){const u=de(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(c,d=>P.forEach(d.qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>P.forEach(d.Qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Eo(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.ns.get(d),E=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(E);u.ns=u.ns.insert(d,I)}}}(r.localStore,i))}async function P1(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await _v(n.localStore,e);n.currentUser=e,function(i,o){i.Ma.forEach(a=>{a.forEach(l=>{l.reject(new H(R.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ao(n,r.us)}}function C1(t,e){const n=de(t),r=n.Ca.get(e);if(r&&r.pa)return ye().add(r.key);{let s=ye();const i=n.Sa.get(e);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Nv(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=C1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=b1.bind(null,e),e.ya.u_=h1.bind(null,e.eventManager),e.ya.La=d1.bind(null,e.eventManager),e}function x1(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=A1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S1.bind(null,e),e}class Bp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Vl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return NC(this.persistence,new kC,e.initialUser,this.serializer)}createPersistence(e){return new CC(Qh.Hr,this.serializer)}createSharedClientState(e){return new jC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class O1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$p(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=P1.bind(null,this.syncEngine),await o1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new l1}()}createDatastore(e){const n=Vl(e.databaseInfo.databaseId),r=function(i){return new HC(i)}(e.databaseInfo);return function(i,o,a,l){return new GC(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new YC(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>$p(this.syncEngine,n,0),function(){return Mp.D()?new Mp:new BC}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new _1(s,i,o,a,l,c);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=de(r);$("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await bo(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=Vy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=nd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await _v(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await V1(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Lp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Lp(e.remoteStore,s)),t._onlineComponents=e}function N1(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function V1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!N1(n))throw n;Ds("Error using user provided cache. Falling back to memory cache: "+n),await Rc(t,new Bp)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Rc(t,new Bp);return t._offlineComponents}async function Vv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await qp(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await qp(t,new O1))),t._onlineComponents}function M1(t){return Vv(t).then(e=>e.syncEngine)}async function L1(t){const e=await Vv(t),n=e.eventManager;return n.onListen=y1.bind(null,e.syncEngine),n.onUnlisten=w1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=v1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=T1.bind(null,e.syncEngine),n}function F1(t,e,n={}){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new k1({next:d=>{o.enqueueAndForget(()=>u1(i,h)),d.fromCache&&l.source==="server"?c.reject(new H(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new f1(a,u,{includeMetadataChanges:!0,ta:!0});return c1(i,h)}(await L1(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e,n){if(!n)throw new H(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function U1(t,e,n,r){if(e===!0&&r===!0)throw new H(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hp(t){if(!J.isDocumentKey(t))throw new H(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wp(t){if(J.isDocumentKey(t))throw new H(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function Us(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fl(t);throw new H(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}U1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ul{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ZR;switch(r.type){case"firstParty":return new rP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=zp.get(n);r&&($("ComponentProvider","Removing Datastore"),zp.delete(n),r.terminate())}(this),Promise.resolve()}}function $1(t,e,n,r={}){var s;const i=(t=Us(t,Ul))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=_t.MOCK_USER;else{a=lI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _t(c)}t._authCredentials=new eP(new Ny(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Js(this.firestore,e,this._query)}}class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}}class dr extends Js{constructor(e,n,r){super(e,n,Hy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new J(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function Gp(t,e,...n){if(t=pt(t),Lv("collection","path",e),t instanceof Ul){const r=Be.fromString(e,...n);return Wp(r),new dr(t,null,r)}{if(!(t instanceof Ht||t instanceof dr))throw new H(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return Wp(r),new dr(t.firestore,null,r)}}function Fv(t,e,...n){if(t=pt(t),arguments.length===1&&(e=Vy.newId()),Lv("doc","path",e),t instanceof Ul){const r=Be.fromString(e,...n);return Hp(r),new Ht(t,null,new J(r))}{if(!(t instanceof Ht||t instanceof dr))throw new H(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return Hp(r),new Ht(t.firestore,t instanceof dr?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new vv(this,"async_queue_retry"),this.cu=()=>{const n=Sc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Sc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=Sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new jn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Eo(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const s=td.createAndSchedule(this,e,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&oe()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class $l extends Ul{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new j1}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$v(this),this._firestoreClient.terminate()}}function B1(t,e){const n=typeof t=="object"?t:Qg(),r=typeof t=="string"?t:e||"(default)",s=rh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=oI("firestore");i&&$1(s,...i)}return s}function Uv(t){return t._firestoreClient||$v(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $v(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new _P(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Mv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new D1(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $s(Tt.fromBase64String(e))}catch(n){throw new H(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $s(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=/^__.*__$/;class z1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new To(e,this.data,n,this.fieldTransforms)}}class jv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Bv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class ad{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new ad(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.pu(e),s}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return $a(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(Bv(this.Vu)&&q1.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class H1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vl(e)}Cu(e,n,r,s=!1){return new ad({Vu:e,methodName:n,Du:r,path:ut.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ld(t){const e=t._freezeSettings(),n=Vl(t._databaseId);return new H1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function W1(t,e,n,r,s,i={}){const o=t.Cu(i.merge||i.mergeFields?2:0,e,n,s);cd("Data must be an object, but it was:",o,r);const a=qv(r,o);let l,c;if(i.merge)l=new zt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Pu(e,h,n);if(!o.contains(d))throw new H(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Hv(u,d)||u.push(d)}l=new zt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new z1(new Ft(a),l,c)}class Bl extends id{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bl}}function K1(t,e,n,r){const s=t.Cu(1,e,n);cd("Data must be an object, but it was:",s,r);const i=[],o=Ft.empty();ss(r,(l,c)=>{const u=ud(e,l,n);c=pt(c);const h=s.yu(u);if(c instanceof Bl)i.push(u);else{const d=So(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new zt(i);return new jv(o,a,s.fieldTransforms)}function G1(t,e,n,r,s,i){const o=t.Cu(1,e,n),a=[Pu(e,r,n)],l=[s];if(i.length%2!=0)throw new H(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Pu(e,i[d])),l.push(i[d+1]);const c=[],u=Ft.empty();for(let d=a.length-1;d>=0;--d)if(!Hv(c,a[d])){const p=a[d];let E=l[d];E=pt(E);const I=o.yu(p);if(E instanceof Bl)c.push(p);else{const w=So(E,I);w!=null&&(c.push(p),u.set(p,w))}}const h=new zt(c);return new jv(u,h,o.fieldTransforms)}function Q1(t,e,n,r=!1){return So(n,t.Cu(r?4:3,e))}function So(t,e){if(zv(t=pt(t)))return cd("Unsupported field value:",e,t),qv(t,e);if(t instanceof id)return function(r,s){if(!Bv(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=So(a,s.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return FP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ze.fromDate(r);return{timestampValue:Fa(s.serializer,i)}}if(r instanceof Ze){const i=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fa(s.serializer,i)}}if(r instanceof od)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $s)return{bytesValue:uv(s.serializer,r._byteString)};if(r instanceof Ht){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${Fl(r)}`)}(t,e)}function qv(t,e){const n={};return My(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(t,(r,s)=>{const i=So(s,e.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function zv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof od||t instanceof $s||t instanceof Ht||t instanceof id)}function cd(t,e,n){if(!zv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Fl(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function Pu(t,e,n){if((e=pt(e))instanceof jl)return e._internalPath;if(typeof e=="string")return ud(t,e);throw $a("Field path arguments must be of type string or ",t,!1,void 0,n)}const Y1=new RegExp("[~\\*/\\[\\]]");function ud(t,e,n){if(e.search(Y1)>=0)throw $a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jl(...e.split("."))._internalPath}catch{throw $a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $a(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new H(R.INVALID_ARGUMENT,a+t+l)}function Hv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new J1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class J1 extends Wv{data(){return super.data()}}function hd(t,e){return typeof e=="string"?ud(t,e):e instanceof jl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dd{}class Z1 extends dd{}function ex(t,e,...n){let r=[];e instanceof dd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof fd).length,a=i.filter(l=>l instanceof ql).length;if(o>1||o>0&&a>0)throw new H(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ql extends Z1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ql(e,n,r)}_apply(e){const n=this._parse(e);return Kv(e._query,n),new Js(e.firestore,e.converter,vu(e._query,n))}_parse(e){const n=ld(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new H(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Yp(h,u);const p=[];for(const E of h)p.push(Qp(l,i,E));d={arrayValue:{values:p}}}else d=Qp(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Yp(h,u),d=Q1(a,o,h,u==="in"||u==="not-in");return Ye.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tx(t,e,n){const r=e,s=hd("where",t);return ql._create(s,r,n)}class fd extends dd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new fd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)Kv(o,l),o=vu(o,l)}(e._query,n),new Js(e.firestore,e.converter,vu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Qp(t,e,n){if(typeof(n=pt(n))=="string"){if(n==="")throw new H(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wy(e)&&n.indexOf("/")!==-1)throw new H(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Be.fromString(n));if(!J.isDocumentKey(r))throw new H(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _p(t,new J(r))}if(n instanceof Ht)return _p(t,n._key);throw new H(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fl(n)}.`)}function Yp(t,e){if(!Array.isArray(t)||t.length===0)throw new H(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Kv(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class nx{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ss(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new od(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=jh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qi(e));default:return null}}convertTimestamp(e){const n=vr(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Me(gv(r));const s=new Yi(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||Pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sx extends Wv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class aa extends sx{data(e={}){return super.data(e)}}class ix{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new aa(this._firestore,this._userDataWriter,r.key,r,new zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new aa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new zo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new aa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new zo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:ox(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ox(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}class ax extends nx{constructor(e){super(),this.firestore=e}convertBytes(e){return new $s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}function lx(t){t=Us(t,Js);const e=Us(t.firestore,$l),n=Uv(e),r=new ax(e);return X1(t._query),F1(n,t._query).then(s=>new ix(e,r,t,s))}function cx(t,e,n,...r){t=Us(t,Ht);const s=Us(t.firestore,$l),i=ld(s);let o;return o=typeof(e=pt(e))=="string"||e instanceof jl?G1(i,"updateDoc",t._key,e,n,r):K1(i,"updateDoc",t._key,e),Gv(s,[o.toMutation(t._key,bn.exists(!0))])}function ux(t,e){const n=Us(t.firestore,$l),r=Fv(t),s=rx(t.converter,e);return Gv(n,[W1(ld(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,bn.exists(!1))]).then(()=>r)}function Gv(t,e){return function(r,s){const i=new jn;return r.asyncQueue.enqueueAndForget(async()=>I1(await M1(r),s,i)),i.promise}(Uv(t),e)}(function(e,n=!0){(function(s){Gs=s})(ns),Gr(new _r("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new $l(new tP(r.getProvider("auth-internal")),new iP(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yi(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),En(dp,"4.5.0",e),En(dp,"4.5.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="firebasestorage.googleapis.com",hx="storageBucket",dx=2*60*1e3,fx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends kn{constructor(e,n,r=0){super(Pc(e),`Firebase Storage: ${n} (${Pc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xn||(xn={}));function Pc(t){return"storage/"+t}function px(){const t="An unknown error occurred, please check the error payload for server response.";return new Dn(xn.UNKNOWN,t)}function mx(){return new Dn(xn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gx(){return new Dn(xn.CANCELED,"User canceled the upload/download.")}function _x(t){return new Dn(xn.INVALID_URL,"Invalid URL '"+t+"'.")}function yx(t){return new Dn(xn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Jp(t){return new Dn(xn.INVALID_ARGUMENT,t)}function Yv(){return new Dn(xn.APP_DELETED,"The Firebase app was deleted.")}function vx(t){return new Dn(xn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=nn.makeFromUrl(e,n)}catch{return new nn(e,"")}if(r.path==="")return r;throw yx(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(W){W.path_=decodeURIComponent(W.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),E={bucket:1,path:3},I=n===Qv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",x=new RegExp(`^https?://${I}/${s}/${w}`,"i"),L=[{regex:a,indices:l,postModify:i},{regex:p,indices:E,postModify:c},{regex:x,indices:{bucket:1,path:2},postModify:c}];for(let W=0;W<L.length;W++){const B=L[W],N=B.regex.exec(e);if(N){const ce=N[B.indices.bucket];let ne=N[B.indices.path];ne||(ne=""),r=new nn(ce,ne),B.postModify(r);break}}if(r==null)throw _x(e);return r}}class Ex{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...w){c||(c=!0,e.apply(null,w))}function h(w){s=setTimeout(()=>{s=null,t(p,l())},w)}function d(){i&&clearTimeout(i)}function p(w,...x){if(c){d();return}if(w){d(),u.call(null,w,...x);return}if(l()||o){d(),u.call(null,w,...x);return}r<64&&(r*=2);let L;a===1?(a=2,L=0):L=(r+Math.random())*1e3,h(L)}let E=!1;function I(w){E||(E=!0,d(),!c&&(s!==null?(w||(a=2),clearTimeout(s),h(0)):w||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function Tx(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t){return t!==void 0}function Xp(t,e,n,r){if(r<e)throw Jp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Jp(`Invalid value for '${t}'. Expected ${n} or less.`)}function bx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ja;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ja||(ja={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e,n,r,s,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,E)=>{this.resolve_=p,this.reject_=E,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ho(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ja.NO_ERROR,l=i.getStatus();if(!a||Ax(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ja.ABORT;r(!1,new Ho(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Ho(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Ix(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=px();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Yv():gx();o(l)}else{const l=mx();o(l)}};this.canceled_?n(!1,new Ho(!1,null,!0)):this.backoffId_=wx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Tx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ho{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Rx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Px(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Cx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ox(t,e,n,r,s,i,o=!0){const a=bx(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return Cx(c,e),Rx(c,n),Px(c,i),xx(c,r),new Sx(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Dx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nx=class Cu{constructor(e,n){this._service=e,n instanceof nn?this._location=n:this._location=nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Cu(e,n)}get root(){const e=new nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Dx(this._location.path)}get storage(){return this._service}get parent(){const e=kx(this._location.path);if(e===null)return null;const n=new nn(this._location.bucket,e);return new Cu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vx(e)}};function Zp(t,e){const n=e==null?void 0:e[hx];return n==null?null:nn.makeFromBucketSpec(n,t)}class Vx{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Qv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dx,this._maxUploadRetryTime=fx,this._requests=new Set,s!=null?this._bucket=nn.makeFromBucketSpec(s,this._host):this._bucket=Zp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nn.makeFromBucketSpec(this._url,e):this._bucket=Zp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nx(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Ex(Yv());{const o=Ox(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const em="@firebase/storage",tm="0.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx="storage";function Lx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Vx(n,r,s,e,ns)}function Fx(){Gr(new _r(Mx,Lx,"PUBLIC").setMultipleInstances(!0)),En(em,tm,""),En(em,tm,"esm2017")}Fx();const Ux={apiKey:"AIzaSyD7n8E7b0wtFEwSBS8oa5wVwshLXkOyvNY",authDomain:"todoautos.firebaseapp.com",projectId:"todoautos",storageBucket:"todoautos.appspot.com",messagingSenderId:"627443339943",appId:"1:627443339943:web:113de9723a94056e54c182",measurementId:"G-TXE1ZH392N"},Jv=Gg(Ux),js=HS(Jv),Cc=B1(Jv);/**
  * vee-validate v4.12.6
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */function Zt(t){return typeof t=="function"}function Xv(t){return t==null}const Bs=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function pd(t){return Number(t)>=0}function $x(t){return typeof t=="object"&&t!==null}function jx(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function nm(t){if(!$x(t)||jx(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function eo(t,e){return Object.keys(e).forEach(n=>{if(nm(e[n])&&nm(t[n])){t[n]||(t[n]={}),eo(t[n],e[n]);return}t[n]=e[n]}),t}function Wo(t){const e=t.split(".");if(!e.length)return"";let n=String(e[0]);for(let r=1;r<e.length;r++){if(pd(e[r])){n+=`[${e[r]}]`;continue}n+=`.${e[r]}`}return n}const Bx={};function qx(t){return Bx[t]}function rm(t,e,n){typeof n.value=="object"&&(n.value=ze(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function ze(t){if(typeof t!="object")return t;var e=0,n,r,s,i=Object.prototype.toString.call(t);if(i==="[object Object]"?s=Object.create(t.__proto__||null):i==="[object Array]"?s=Array(t.length):i==="[object Set]"?(s=new Set,t.forEach(function(o){s.add(ze(o))})):i==="[object Map]"?(s=new Map,t.forEach(function(o,a){s.set(ze(a),ze(o))})):i==="[object Date]"?s=new Date(+t):i==="[object RegExp]"?s=new RegExp(t.source,t.flags):i==="[object DataView]"?s=new t.constructor(ze(t.buffer)):i==="[object ArrayBuffer]"?s=t.slice(0):i.slice(-6)==="Array]"&&(s=new t.constructor(t)),s){for(r=Object.getOwnPropertySymbols(t);e<r.length;e++)rm(s,r[e],Object.getOwnPropertyDescriptor(t,r[e]));for(e=0,r=Object.getOwnPropertyNames(t);e<r.length;e++)Object.hasOwnProperty.call(s,n=r[e])&&s[n]===t[n]||rm(s,n,Object.getOwnPropertyDescriptor(t,n))}return s||t}const zx=Symbol("vee-validate-form"),Hx=typeof window<"u";function Wx(t){return Zt(t)&&!!t.__locatorRef}function or(t){return!!t&&Zt(t.parse)&&t.__type==="VVTypedSchema"}function Zv(t){return!!t&&Zt(t.validate)}function Kx(t){return t==="checkbox"||t==="radio"}function Gx(t){return Bs(t)||Array.isArray(t)}function Qx(t){return Array.isArray(t)?t.length===0:Bs(t)&&Object.keys(t).length===0}function Ro(t){return/^\[.+\]$/i.test(t)}function Yx(t){return e0(t)&&t.multiple}function e0(t){return t.tagName==="SELECT"}function Jx(t){return t0(t)&&t.target&&"submit"in t.target}function t0(t){return t?!!(typeof Event<"u"&&Zt(Event)&&t instanceof Event||t&&t.srcElement):!1}function Pi(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,s;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Pi(t[r],e[r]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;for(r of t.entries())if(!Pi(r[1],e.get(r[0])))return!1;return!0}if(sm(t)&&sm(e))return!(t.size!==e.size||t.name!==e.name||t.lastModified!==e.lastModified||t.type!==e.type);if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();for(s=Object.keys(t),n=s.length,r=n;r--!==0;){var i=s[r];if(!Pi(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function sm(t){return Hx?t instanceof File:!1}function zl(t){return Ro(t)?t.replace(/\[|\]/gi,""):t}function Mn(t,e,n){return t?Ro(e)?t[zl(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((s,i)=>Gx(s)&&i in s?s[i]:n,t):n}function Jn(t,e,n){if(Ro(e)){t[zl(e)]=n;return}const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let s=t;for(let i=0;i<r.length;i++){if(i===r.length-1){s[r[i]]=n;return}(!(r[i]in s)||Xv(s[r[i]]))&&(s[r[i]]=pd(r[i+1])?[]:{}),s=s[r[i]]}}function xc(t,e){if(Array.isArray(t)&&pd(e)){t.splice(Number(e),1);return}Bs(t)&&delete t[e]}function im(t,e){if(Ro(e)){delete t[zl(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let i=0;i<n.length;i++){if(i===n.length-1){xc(r,n[i]);break}if(!(n[i]in r)||Xv(r[n[i]]))break;r=r[n[i]]}const s=n.map((i,o)=>Mn(t,n.slice(0,o).join(".")));for(let i=s.length-1;i>=0;i--)if(Qx(s[i])){if(i===0){xc(t,n[0]);continue}xc(s[i-1],n[i-1])}}function Kt(t){return Object.keys(t)}function om(t,e=0){let n=null,r=[];return function(...s){return n&&clearTimeout(n),n=setTimeout(()=>{const i=t(...s);r.forEach(o=>o(i)),r=[]},e),new Promise(i=>r.push(i))}}function Xx(t,e){let n;return async function(...s){const i=t(...s);n=i;const o=await i;return i!==n?o:(n=void 0,e(o,s))}}function am(t){return Array.isArray(t)?t:t?[t]:[]}function Ko(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function Zx(t){let e=null,n=[];return function(...r){const s=Vt(()=>{if(e!==s)return;const i=t(...r);n.forEach(o=>o(i)),n=[],e=null});return e=s,new Promise(i=>n.push(i))}}function Oc(t){if(n0(t))return t._value}function n0(t){return"_value"in t}function eO(t){return t.type==="number"||t.type==="range"?Number.isNaN(t.valueAsNumber)?t.value:t.valueAsNumber:t.value}function lm(t){if(!t0(t))return t;const e=t.target;if(Kx(e.type)&&n0(e))return Oc(e);if(e.type==="file"&&e.files){const n=Array.from(e.files);return e.multiple?n:n[0]}if(Yx(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(Oc);if(e0(e)){const n=Array.from(e.options).find(r=>r.selected);return n?Oc(n):e.value}return eO(e)}function tO(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?Bs(t)&&t._$$isNormalized?t:Bs(t)?Object.keys(t).reduce((n,r)=>{const s=nO(t[r]);return t[r]!==!1&&(n[r]=cm(s)),n},e):typeof t!="string"?e:t.split("|").reduce((n,r)=>{const s=rO(r);return s.name&&(n[s.name]=cm(s.params)),n},e):e}function nO(t){return t===!0?[]:Array.isArray(t)||Bs(t)?t:[t]}function cm(t){const e=n=>typeof n=="string"&&n[0]==="@"?sO(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const rO=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function sO(t){const e=n=>Mn(n,t)||n[t];return e.__locatorRef=t,e}const iO={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let oO=Object.assign({},iO);const di=()=>oO;async function aO(t,e,n={}){const r=n==null?void 0:n.bails,s={name:(n==null?void 0:n.name)||"{field}",rules:e,label:n==null?void 0:n.label,bails:r??!0,formData:(n==null?void 0:n.values)||{}},o=(await lO(s,t)).errors;return{errors:o,valid:!o.length}}async function lO(t,e){if(or(t.rules)||Zv(t.rules))return uO(e,t.rules);if(Zt(t.rules)||Array.isArray(t.rules)){const o={field:t.label||t.name,name:t.name,label:t.label,form:t.formData,value:e},a=Array.isArray(t.rules)?t.rules:[t.rules],l=a.length,c=[];for(let u=0;u<l;u++){const h=a[u],d=await h(e,o);if(!(typeof d!="string"&&!Array.isArray(d)&&d)){if(Array.isArray(d))c.push(...d);else{const E=typeof d=="string"?d:s0(o);c.push(E)}if(t.bails)return{errors:c}}}return{errors:c}}const n=Object.assign(Object.assign({},t),{rules:tO(t.rules)}),r=[],s=Object.keys(n.rules),i=s.length;for(let o=0;o<i;o++){const a=s[o],l=await hO(n,e,{name:a,params:n.rules[a]});if(l.error&&(r.push(l.error),t.bails))return{errors:r}}return{errors:r}}function cO(t){return!!t&&t.name==="ValidationError"}function r0(t){return{__type:"VVTypedSchema",async parse(n){var r;try{return{output:await t.validate(n,{abortEarly:!1}),errors:[]}}catch(s){if(!cO(s))throw s;if(!(!((r=s.inner)===null||r===void 0)&&r.length)&&s.errors.length)return{errors:[{path:s.path,errors:s.errors}]};const i=s.inner.reduce((o,a)=>{const l=a.path||"";return o[l]||(o[l]={errors:[],path:l}),o[l].errors.push(...a.errors),o},{});return{errors:Object.values(i)}}}}}async function uO(t,e){const r=await(or(e)?e:r0(e)).parse(t),s=[];for(const i of r.errors)i.errors.length&&s.push(...i.errors);return{errors:s}}async function hO(t,e,n){const r=qx(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const s=dO(n.params,t.formData),i={field:t.label||t.name,name:t.name,label:t.label,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:s})},o=await r(e,s,i);return typeof o=="string"?{error:o}:{error:o?void 0:s0(i)}}function s0(t){const e=di().generateMessage;return e?e(t):"Field is invalid"}function dO(t,e){const n=r=>Wx(r)?r(e):r;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((r,s)=>(r[s]=n(t[s]),r),{})}async function fO(t,e){const r=await(or(t)?t:r0(t)).parse(ze(e)),s={},i={};for(const o of r.errors){const a=o.errors,l=(o.path||"").replace(/\["(\d+)"\]/g,(c,u)=>`[${u}]`);s[l]={valid:!a.length,errors:a},a.length&&(i[l]=a[0])}return{valid:!r.errors.length,results:s,errors:i,values:r.value}}async function pO(t,e,n){const s=Kt(t).map(async c=>{var u,h,d;const p=(u=n==null?void 0:n.names)===null||u===void 0?void 0:u[c],E=await aO(Mn(e,c),t[c],{name:(p==null?void 0:p.name)||c,label:p==null?void 0:p.label,values:e,bails:(d=(h=n==null?void 0:n.bailsMap)===null||h===void 0?void 0:h[c])!==null&&d!==void 0?d:!0});return Object.assign(Object.assign({},E),{path:c})});let i=!0;const o=await Promise.all(s),a={},l={};for(const c of o)a[c.path]={valid:c.valid,errors:c.errors},c.valid||(i=!1,l[c.path]=c.errors[0]);return{valid:i,results:a,errors:l}}let mO=0;const Go=["bails","fieldsCount","id","multiple","type","validate"];function i0(t){const e=Object.assign({},At((t==null?void 0:t.initialValues)||{})),n=G(t==null?void 0:t.validationSchema);return n&&or(n)&&Zt(n.cast)?ze(n.cast(e)||{}):ze(e)}function gO(t){var e;const n=mO++;let r=0;const s=ge(!1),i=ge(!1),o=ge(0),a=[],l=Rn(i0(t)),c=ge([]),u=ge({}),h=ge({}),d=Zx(()=>{h.value=c.value.reduce((g,_)=>(g[Wo(At(_.path))]=_,g),{})});function p(g,_){const A=re(g);if(!A){typeof g=="string"&&(u.value[Wo(g)]=am(_));return}if(typeof g=="string"){const U=Wo(g);u.value[U]&&delete u.value[U]}A.errors=am(_),A.valid=!A.errors.length}function E(g){Kt(g).forEach(_=>{p(_,g[_])})}t!=null&&t.initialErrors&&E(t.initialErrors);const I=ke(()=>{const g=c.value.reduce((_,A)=>(A.errors.length&&(_[A.path]=A.errors),_),{});return Object.assign(Object.assign({},u.value),g)}),w=ke(()=>Kt(I.value).reduce((g,_)=>{const A=I.value[_];return A!=null&&A.length&&(g[_]=A[0]),g},{})),x=ke(()=>c.value.reduce((g,_)=>(g[_.path]={name:_.path||"",label:_.label||""},g),{})),D=ke(()=>c.value.reduce((g,_)=>{var A;return g[_.path]=(A=_.bails)!==null&&A!==void 0?A:!0,g},{})),L=Object.assign({},(t==null?void 0:t.initialErrors)||{}),W=(e=t==null?void 0:t.keepValuesOnUnmount)!==null&&e!==void 0?e:!1,{initialValues:B,originalInitialValues:N,setInitialValues:ce}=yO(c,l,t),ne=_O(c,l,N,w),Z=ke(()=>c.value.reduce((g,_)=>{const A=Mn(l,_.path);return Jn(g,_.path,A),g},{})),ue=t==null?void 0:t.validationSchema;function pe(g,_){var A,U;const ee=ke(()=>Mn(B.value,At(g))),Q=h.value[At(g)],Ee=(_==null?void 0:_.type)==="checkbox"||(_==null?void 0:_.type)==="radio";if(Q&&Ee){Q.multiple=!0;const Xt=r++;return Array.isArray(Q.id)?Q.id.push(Xt):Q.id=[Q.id,Xt],Q.fieldsCount++,Q.__flags.pendingUnmount[Xt]=!1,Q}const Te=ke(()=>Mn(l,At(g))),Se=At(g),nt=_e.findIndex(Xt=>Xt===Se);nt!==-1&&_e.splice(nt,1);const Fe=ke(()=>{var Xt,Zs,Ql,Ad,Yl,Jl;return or(ue)?(Ql=(Zs=(Xt=ue).describe)===null||Zs===void 0?void 0:Zs.call(Xt,At(g)).required)!==null&&Ql!==void 0?Ql:!1:or(_==null?void 0:_.schema)&&(Jl=(Yl=(Ad=_==null?void 0:_.schema).describe)===null||Yl===void 0?void 0:Yl.call(Ad).required)!==null&&Jl!==void 0?Jl:!1}),mt=r++,Ot=Rn({id:mt,path:g,touched:!1,pending:!1,valid:!0,validated:!!(!((A=L[Se])===null||A===void 0)&&A.length),required:Fe,initialValue:ee,errors:zm([]),bails:(U=_==null?void 0:_.bails)!==null&&U!==void 0?U:!1,label:_==null?void 0:_.label,type:(_==null?void 0:_.type)||"default",value:Te,multiple:!1,__flags:{pendingUnmount:{[mt]:!1},pendingReset:!1},fieldsCount:1,validate:_==null?void 0:_.validate,dirty:ke(()=>!Pi(G(Te),G(ee)))});return c.value.push(Ot),h.value[Se]=Ot,d(),w.value[Se]&&!L[Se]&&Vt(()=>{V(Se,{mode:"silent"})}),Ke(g)&&qr(g,Xt=>{d();const Zs=ze(Te.value);h.value[Xt]=Ot,Vt(()=>{Jn(l,Xt,Zs)})}),Ot}const qe=om(q,5),ot=om(q,5),$t=Xx(async g=>await(g==="silent"?qe():ot()),(g,[_])=>{const A=Kt(Ne.errorBag.value),ee=[...new Set([...Kt(g.results),...c.value.map(Q=>Q.path),...A])].sort().reduce((Q,Ee)=>{var Te;const Se=Ee,nt=re(Se)||Pe(Se),Fe=((Te=g.results[Se])===null||Te===void 0?void 0:Te.errors)||[],mt=At(nt==null?void 0:nt.path)||Se,Ot=vO({errors:Fe,valid:!Fe.length},Q.results[mt]);return Q.results[mt]=Ot,Ot.valid||(Q.errors[mt]=Ot.errors[0]),nt&&u.value[mt]&&delete u.value[mt],nt?(nt.valid=Ot.valid,_==="silent"||_==="validated-only"&&!nt.validated||p(nt,Ot.errors),Q):(p(mt,Fe),Q)},{valid:g.valid,results:{},errors:{}});return g.values&&(ee.values=g.values),Kt(ee.results).forEach(Q=>{var Ee;const Te=re(Q);Te&&_!=="silent"&&(_==="validated-only"&&!Te.validated||p(Te,(Ee=ee.results[Q])===null||Ee===void 0?void 0:Ee.errors))}),ee});function tt(g){c.value.forEach(g)}function re(g){const _=typeof g=="string"?Wo(g):g;return typeof _=="string"?h.value[_]:_}function Pe(g){return c.value.filter(A=>g.startsWith(A.path)).reduce((A,U)=>A?U.path.length>A.path.length?U:A:U,void 0)}let _e=[],xt;function cn(g){return _e.push(g),xt||(xt=Vt(()=>{[..._e].sort().reverse().forEach(A=>{im(l,A)}),_e=[],xt=null})),xt}function jt(g){return function(A,U){return function(Q){return Q instanceof Event&&(Q.preventDefault(),Q.stopPropagation()),tt(Ee=>Ee.touched=!0),s.value=!0,o.value++,O().then(Ee=>{const Te=ze(l);if(Ee.valid&&typeof A=="function"){const Se=ze(Z.value);let nt=g?Se:Te;return Ee.values&&(nt=Ee.values),A(nt,{evt:Q,controlledValues:Se,setErrors:E,setFieldError:p,setTouched:v,setFieldTouched:ve,setValues:F,setFieldValue:T,resetForm:b,resetField:S})}!Ee.valid&&typeof U=="function"&&U({values:Te,evt:Q,errors:Ee.errors,results:Ee.results})}).then(Ee=>(s.value=!1,Ee),Ee=>{throw s.value=!1,Ee})}}}const un=jt(!1);un.withControlled=jt(!0);function Wn(g,_){const A=c.value.findIndex(ee=>ee.path===g&&(Array.isArray(ee.id)?ee.id.includes(_):ee.id===_)),U=c.value[A];if(!(A===-1||!U)){if(Vt(()=>{V(g,{mode:"silent",warn:!1})}),U.multiple&&U.fieldsCount&&U.fieldsCount--,Array.isArray(U.id)){const ee=U.id.indexOf(_);ee>=0&&U.id.splice(ee,1),delete U.__flags.pendingUnmount[_]}(!U.multiple||U.fieldsCount<=0)&&(c.value.splice(A,1),k(g),d(),delete h.value[g])}}function ls(g){Kt(h.value).forEach(_=>{_.startsWith(g)&&delete h.value[_]}),c.value=c.value.filter(_=>!_.path.startsWith(g)),Vt(()=>{d()})}const Ne={formId:n,values:l,controlledValues:Z,errorBag:I,errors:w,schema:ue,submitCount:o,meta:ne,isSubmitting:s,isValidating:i,fieldArrays:a,keepValuesOnUnmount:W,validateSchema:G(ue)?$t:void 0,validate:O,setFieldError:p,validateField:V,setFieldValue:T,setValues:F,setErrors:E,setFieldTouched:ve,setTouched:v,resetForm:b,resetField:S,handleSubmit:un,useFieldModel:se,defineInputBinds:me,defineComponentBinds:Ce,defineField:Y,stageInitialValue:M,unsetInitialValue:k,setFieldInitialValue:C,createPathState:pe,getPathState:re,unsetPathValue:cn,removePathState:Wn,initialValues:B,getAllPathStates:()=>c.value,destroyPath:ls,isFieldTouched:Ve,isFieldDirty:f,isFieldValid:m};function T(g,_,A=!0){const U=ze(_),ee=typeof g=="string"?g:g.path;re(ee)||pe(ee),Jn(l,ee,U),A&&V(ee)}function z(g,_=!0){Kt(l).forEach(A=>{delete l[A]}),Kt(g).forEach(A=>{T(A,g[A],!1)}),_&&O()}function F(g,_=!0){eo(l,g),a.forEach(A=>A&&A.reset()),_&&O()}function K(g,_){const A=re(At(g))||pe(g);return ke({get(){return A.value},set(U){var ee;const Q=At(g);T(Q,U,(ee=At(_))!==null&&ee!==void 0?ee:!1)}})}function ve(g,_){const A=re(g);A&&(A.touched=_)}function Ve(g){const _=re(g);return _?_.touched:c.value.filter(A=>A.path.startsWith(g)).some(A=>A.touched)}function f(g){const _=re(g);return _?_.dirty:c.value.filter(A=>A.path.startsWith(g)).some(A=>A.dirty)}function m(g){const _=re(g);return _?_.valid:c.value.filter(A=>A.path.startsWith(g)).every(A=>A.valid)}function v(g){if(typeof g=="boolean"){tt(_=>{_.touched=g});return}Kt(g).forEach(_=>{ve(_,!!g[_])})}function S(g,_){var A;const U=_&&"value"in _?_.value:Mn(B.value,g),ee=re(g);ee&&(ee.__flags.pendingReset=!0),C(g,ze(U),!0),T(g,U,!1),ve(g,(A=_==null?void 0:_.touched)!==null&&A!==void 0?A:!1),p(g,(_==null?void 0:_.errors)||[]),Vt(()=>{ee&&(ee.__flags.pendingReset=!1)})}function b(g,_){let A=ze(g!=null&&g.values?g.values:N.value);A=_!=null&&_.force?A:eo(N.value,A),A=or(ue)&&Zt(ue.cast)?ue.cast(A):A,ce(A),tt(U=>{var ee;U.__flags.pendingReset=!0,U.validated=!1,U.touched=((ee=g==null?void 0:g.touched)===null||ee===void 0?void 0:ee[U.path])||!1,T(U.path,Mn(A,U.path),!1),p(U.path,void 0)}),_!=null&&_.force?z(A,!1):F(A,!1),E((g==null?void 0:g.errors)||{}),o.value=(g==null?void 0:g.submitCount)||0,Vt(()=>{O({mode:"silent"}),tt(U=>{U.__flags.pendingReset=!1})})}async function O(g){const _=(g==null?void 0:g.mode)||"force";if(_==="force"&&tt(Q=>Q.validated=!0),Ne.validateSchema)return Ne.validateSchema(_);i.value=!0;const A=await Promise.all(c.value.map(Q=>Q.validate?Q.validate(g).then(Ee=>({key:Q.path,valid:Ee.valid,errors:Ee.errors})):Promise.resolve({key:Q.path,valid:!0,errors:[]})));i.value=!1;const U={},ee={};for(const Q of A)U[Q.key]={valid:Q.valid,errors:Q.errors},Q.errors.length&&(ee[Q.key]=Q.errors[0]);return{valid:A.every(Q=>Q.valid),results:U,errors:ee}}async function V(g,_){var A;const U=re(g);if(U&&(_==null?void 0:_.mode)!=="silent"&&(U.validated=!0),ue){const{results:ee}=await $t((_==null?void 0:_.mode)||"validated-only");return ee[g]||{errors:[],valid:!0}}return U!=null&&U.validate?U.validate(_):(!U&&(A=_==null?void 0:_.warn),Promise.resolve({errors:[],valid:!0}))}function k(g){im(B.value,g)}function M(g,_,A=!1){C(g,_),Jn(l,g,_),A&&!(t!=null&&t.initialValues)&&Jn(N.value,g,ze(_))}function C(g,_,A=!1){Jn(B.value,g,ze(_)),A&&Jn(N.value,g,ze(_))}async function q(){const g=G(ue);if(!g)return{valid:!0,results:{},errors:{}};i.value=!0;const _=Zv(g)||or(g)?await fO(g,l):await pO(g,l,{names:x.value,bailsMap:D.value});return i.value=!1,_}const X=un((g,{evt:_})=>{Jx(_)&&_.target.submit()});no(()=>{if(t!=null&&t.initialErrors&&E(t.initialErrors),t!=null&&t.initialTouched&&v(t.initialTouched),t!=null&&t.validateOnMount){O();return}Ne.validateSchema&&Ne.validateSchema("silent")}),Ke(ue)&&qr(ue,()=>{var g;(g=Ne.validateSchema)===null||g===void 0||g.call(Ne,"validated-only")}),gi(zx,Ne);function Y(g,_){const A=Zt(_)||_==null?void 0:_.label,U=re(At(g))||pe(g,{label:A}),ee=()=>Zt(_)?_(Ko(U,Go)):_||{};function Q(){var Fe;U.touched=!0,((Fe=ee().validateOnBlur)!==null&&Fe!==void 0?Fe:di().validateOnBlur)&&V(U.path)}function Ee(){var Fe;((Fe=ee().validateOnInput)!==null&&Fe!==void 0?Fe:di().validateOnInput)&&Vt(()=>{V(U.path)})}function Te(){var Fe;((Fe=ee().validateOnChange)!==null&&Fe!==void 0?Fe:di().validateOnChange)&&Vt(()=>{V(U.path)})}const Se=ke(()=>{const Fe={onChange:Te,onInput:Ee,onBlur:Q};return Zt(_)?Object.assign(Object.assign({},Fe),_(Ko(U,Go)).props||{}):_!=null&&_.props?Object.assign(Object.assign({},Fe),_.props(Ko(U,Go))):Fe});return[K(g,()=>{var Fe,mt,Ot;return(Ot=(Fe=ee().validateOnModelUpdate)!==null&&Fe!==void 0?Fe:(mt=di())===null||mt===void 0?void 0:mt.validateOnModelUpdate)!==null&&Ot!==void 0?Ot:!0}),Se]}function se(g){return Array.isArray(g)?g.map(_=>K(_,!0)):K(g)}function me(g,_){const[A,U]=Y(g,_);function ee(){U.value.onBlur()}function Q(Te){const Se=lm(Te);T(At(g),Se,!1),U.value.onInput()}function Ee(Te){const Se=lm(Te);T(At(g),Se,!1),U.value.onChange()}return ke(()=>Object.assign(Object.assign({},U.value),{onBlur:ee,onInput:Q,onChange:Ee,value:A.value}))}function Ce(g,_){const[A,U]=Y(g,_),ee=re(At(g));function Q(Ee){A.value=Ee}return ke(()=>{const Ee=Zt(_)?_(Ko(ee,Go)):_||{};return Object.assign({[Ee.model||"modelValue"]:A.value,[`onUpdate:${Ee.model||"modelValue"}`]:Q},U.value)})}return Object.assign(Object.assign({},Ne),{values:zu(l),handleReset:()=>b(),submitForm:X})}function _O(t,e,n,r){const s={touched:"some",pending:"some",valid:"every"},i=ke(()=>!Pi(e,G(n)));function o(){const l=t.value;return Kt(s).reduce((c,u)=>{const h=s[u];return c[u]=l[h](d=>d[u]),c},{})}const a=Rn(o());return TE(()=>{const l=o();a.touched=l.touched,a.valid=l.valid,a.pending=l.pending}),ke(()=>Object.assign(Object.assign({initialValues:G(n)},a),{valid:a.valid&&!Kt(r.value).length,dirty:i.value}))}function yO(t,e,n){const r=i0(n),s=ge(r),i=ge(ze(r));function o(a,l=!1){s.value=eo(ze(s.value)||{},ze(a)),i.value=eo(ze(i.value)||{},ze(a)),l&&t.value.forEach(c=>{if(c.touched)return;const h=Mn(s.value,c.path);Jn(e,c.path,ze(h))})}return{initialValues:s,originalInitialValues:i,setInitialValues:o}}function vO(t,e){return e?{valid:t.valid&&e.valid,errors:[...t.errors,...e.errors]}:t}/**
  * vee-validate v4.12.6
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */const Ba=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function EO(t){return Number(t)>=0}function wO(t){return typeof t=="object"&&t!==null}function TO(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function um(t){if(!wO(t)||TO(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function o0(t,e){return Object.keys(e).forEach(n=>{if(um(e[n])&&um(t[n])){t[n]||(t[n]={}),o0(t[n],e[n]);return}t[n]=e[n]}),t}function IO(t,e={abortEarly:!1}){return{__type:"VVTypedSchema",async parse(r){var s;try{return{value:await t.validate(r,Object.assign({},e)),errors:[]}}catch(i){const o=i;if(o.name!=="ValidationError")throw i;if(!(!((s=o.inner)===null||s===void 0)&&s.length)&&o.errors.length)return{errors:[{path:o.path,errors:o.errors}]};const a=o.inner.reduce((l,c)=>{const u=c.path||"";return l[u]||(l[u]={errors:[],path:u}),l[u].errors.push(...c.errors),l},{});return{errors:Object.values(a)}}},cast(r){try{return t.cast(r)}catch{const i=t.getDefault();return Ba(i)&&Ba(r)?o0(i,r):r}},describe(r){if(!r)return hm(t.spec);const s=bO(r,t);return s?hm(s):{required:!1,exists:!1}}}}function hm(t){return{required:!t.optional,exists:!0}}function bO(t,e){if(!dm(e))return null;if(Ro(t)){const s=e.fields[zl(t)];return(s==null?void 0:s.spec)||null}const n=(t||"").split(/\.|\[(\d+)\]/).filter(Boolean);let r=e;for(let s=0;s<n.length;s++){const i=n[s];if(dm(r)&&i in r.fields?r=r.fields[i]:EO(i)&&AO(r)&&(r=r.innerType),s===n.length-1)return r.spec}return null}function dm(t){return Ba(t)&&t.type==="object"}function AO(t){return Ba(t)&&t.type==="array"}function SO(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function os(t){this._maxSize=t,this.clear()}os.prototype.clear=function(){this._size=0,this._values=Object.create(null)};os.prototype.get=function(t){return this._values[t]};os.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var RO=/[^.^\]^[]+|(?=\[\]|\.\.)/g,a0=/^\d+$/,PO=/^\d/,CO=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,xO=/^\s*(['"]?)(.*?)(\1)\s*$/,md=512,fm=new os(md),pm=new os(md),mm=new os(md),Wr={Cache:os,split:xu,normalizePath:kc,setter:function(t){var e=kc(t);return pm.get(t)||pm.set(t,function(r,s){for(var i=0,o=e.length,a=r;i<o-1;){var l=e[i];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[i++]]}a[e[i]]=s})},getter:function(t,e){var n=kc(t);return mm.get(t)||mm.set(t,function(s){for(var i=0,o=n.length;i<o;)if(s!=null||!e)s=s[n[i++]];else return;return s})},join:function(t){return t.reduce(function(e,n){return e+(gd(n)||a0.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){OO(Array.isArray(t)?t:xu(t),e,n)}};function kc(t){return fm.get(t)||fm.set(t,xu(t).map(function(e){return e.replace(xO,"$2")}))}function xu(t){return t.match(RO)||[""]}function OO(t,e,n){var r=t.length,s,i,o,a;for(i=0;i<r;i++)s=t[i],s&&(NO(s)&&(s='"'+s+'"'),a=gd(s),o=!a&&/^\d+$/.test(s),e.call(n,s,a,o,i,t))}function gd(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function kO(t){return t.match(PO)&&!t.match(a0)}function DO(t){return CO.test(t)}function NO(t){return!gd(t)&&(kO(t)||DO(t))}const VO=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Hl=t=>t.match(VO)||[],Wl=t=>t[0].toUpperCase()+t.slice(1),_d=(t,e)=>Hl(t).join(e).toLowerCase(),l0=t=>Hl(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),MO=t=>Wl(l0(t)),LO=t=>_d(t,"_"),FO=t=>_d(t,"-"),UO=t=>Wl(_d(t," ")),$O=t=>Hl(t).map(Wl).join(" ");var Dc={words:Hl,upperFirst:Wl,camelCase:l0,pascalCase:MO,snakeCase:LO,kebabCase:FO,sentenceCase:UO,titleCase:$O},yd={exports:{}};yd.exports=function(t){return c0(jO(t),t)};yd.exports.array=c0;function c0(t,e){var n=t.length,r=new Array(n),s={},i=n,o=BO(e),a=qO(t);for(e.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)s[i]||l(t[i],i,new Set);return r;function l(c,u,h){if(h.has(c)){var d;try{d=", node was:"+JSON.stringify(c)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!s[u]){s[u]=!0;var p=o.get(c)||new Set;if(p=Array.from(p),u=p.length){h.add(c);do{var E=p[--u];l(E,a.get(E),h)}while(u);h.delete(c)}r[--n]=c}}}function jO(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var s=t[n];e.add(s[0]),e.add(s[1])}return Array.from(e)}function BO(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var s=t[n];e.has(s[0])||e.set(s[0],new Set),e.has(s[1])||e.set(s[1],new Set),e.get(s[0]).add(s[1])}return e}function qO(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var zO=yd.exports;const HO=SO(zO),WO=Object.prototype.toString,KO=Error.prototype.toString,GO=RegExp.prototype.toString,QO=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",YO=/^Symbol\((.*)\)(.*)$/;function JO(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function gm(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return JO(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return QO.call(t).replace(YO,"Symbol($1)");const r=WO.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+KO.call(t)+"]":r==="RegExp"?GO.call(t):null}function fr(t,e){let n=gm(t,e);return n!==null?n:JSON.stringify(t,function(r,s){let i=gm(this[r],e);return i!==null?i:s},2)}function u0(t){return t==null?[]:[].concat(t)}let h0,d0,f0,XO=/\$\{\s*(\w+)\s*\}/g;h0=Symbol.toStringTag;class _m{constructor(e,n,r,s){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[h0]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=s,this.errors=[],this.inner=[],u0(e).forEach(i=>{if(Lt.isError(i)){this.errors.push(...i.errors);const o=i.inner.length?i.inner:[i];this.inner.push(...o)}else this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}d0=Symbol.hasInstance;f0=Symbol.toStringTag;class Lt extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(XO,(s,i)=>fr(n[i])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,s,i){const o=new _m(e,n,r,s);if(i)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[f0]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,Lt)}static[d0](e){return _m[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let dn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const s=r!=null&&r!==n?` (cast from the value \`${fr(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${fr(n,!0)}\``+s:`${t} must match the configured type. The validated value was: \`${fr(n,!0)}\``+s}},kt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},ZO={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Ou={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},ek={isValue:"${path} field must be ${value}"},ku={noUnknown:"${path} field has unspecified keys: ${unknown}"},tk={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},nk={notType:t=>{const{path:e,value:n,spec:r}=t,s=r.types.length;if(Array.isArray(n)){if(n.length<s)return`${e} tuple value has too few items, expected a length of ${s} but got ${n.length} for value: \`${fr(n,!0)}\``;if(n.length>s)return`${e} tuple value has too many items, expected a length of ${s} but got ${n.length} for value: \`${fr(n,!0)}\``}return Lt.formatError(dn.notType,t)}};Object.assign(Object.create(null),{mixed:dn,string:kt,number:ZO,date:Ou,object:ku,array:tk,boolean:ek,tuple:nk});const vd=t=>t&&t.__isYupSchema__;class qa{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:s,otherwise:i}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new qa(e,(a,l)=>{var c;let u=o(...a)?s:i;return(c=u==null?void 0:u(l))!=null?c:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),s=this.fn(r,e,n);if(s===void 0||s===e)return e;if(!vd(s))throw new TypeError("conditions must return a schema object");return s.resolve(n)}}const Qo={context:"$",value:"."};class as{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Qo.context,this.isValue=this.key[0]===Qo.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Qo.context:this.isValue?Qo.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Wr.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let s=this.isContext?r:this.isValue?e:n;return this.getter&&(s=this.getter(s||{})),this.map&&(s=this.map(s)),s}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}as.prototype.__isYupRef=!0;const $r=t=>t==null;function hs(t){function e({value:n,path:r="",options:s,originalValue:i,schema:o},a,l){const{name:c,test:u,params:h,message:d,skipAbsent:p}=t;let{parent:E,context:I,abortEarly:w=o.spec.abortEarly,disableStackTrace:x=o.spec.disableStackTrace}=s;function D(pe){return as.isRef(pe)?pe.getValue(n,E,I):pe}function L(pe={}){const qe=Object.assign({value:n,originalValue:i,label:o.spec.label,path:pe.path||r,spec:o.spec,disableStackTrace:pe.disableStackTrace||x},h,pe.params);for(const $t of Object.keys(qe))qe[$t]=D(qe[$t]);const ot=new Lt(Lt.formatError(pe.message||d,qe),n,qe.path,pe.type||c,qe.disableStackTrace);return ot.params=qe,ot}const W=w?a:l;let B={path:r,parent:E,type:c,from:s.from,createError:L,resolve:D,options:s,originalValue:i,schema:o};const N=pe=>{Lt.isError(pe)?W(pe):pe?l(null):W(L())},ce=pe=>{Lt.isError(pe)?W(pe):a(pe)};if(p&&$r(n))return N(!0);let Z;try{var ue;if(Z=u.call(B,n,B),typeof((ue=Z)==null?void 0:ue.then)=="function"){if(s.sync)throw new Error(`Validation test of type: "${B.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(Z).then(N,ce)}}catch(pe){ce(pe);return}N(Z)}return e.OPTIONS=t,e}function rk(t,e,n,r=n){let s,i,o;return e?(Wr.forEach(e,(a,l,c)=>{let u=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:s,value:n});let h=t.type==="tuple",d=c?parseInt(u,10):0;if(t.innerType||h){if(h&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&d>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);s=n,n=n&&n[d],t=h?t.spec.types[d]:t.innerType}if(!c){if(!t.fields||!t.fields[u])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);s=n,n=n&&n[u],t=t.fields[u]}i=u,o=l?"["+a+"]":"."+a}),{schema:t,parent:s,parentPath:i}):{parent:s,parentPath:e,schema:t}}class za extends Set{describe(){const e=[];for(const n of this.values())e.push(as.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new za(this.values())}merge(e,n){const r=this.clone();return e.forEach(s=>r.add(s)),n.forEach(s=>r.delete(s)),r}}function _s(t,e=new Map){if(vd(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=_s(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,s]of t.entries())n.set(r,_s(s,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(_s(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,s]of Object.entries(t))n[r]=_s(s,e)}else throw Error(`Unable to clone ${t}`);return n}class On{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new za,this._blacklist=new za,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(dn.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=_s(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const s=Object.assign({},n.spec,r.spec);return r.spec=s,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{e.tests.forEach(o=>{i.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((s,i)=>i.resolve(s,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,s,i;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(s=e.recursive)!=null?s:this.spec.recursive,disableStackTrace:(i=e.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),s=n.assert==="ignore-optionality",i=r._cast(e,n);if(n.assert!==!1&&!r.isType(i)){if(s&&$r(i))return i;let o=fr(e),a=fr(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return i}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((s,i)=>i.call(this,s,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,s){let{path:i,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let c=[];for(let u of Object.values(this.internalTests))u&&c.push(u);this.runTests({path:i,value:l,originalValue:o,options:n,tests:c},r,u=>{if(u.length)return s(u,l);this.runTests({path:i,value:l,originalValue:o,options:n,tests:this.tests},r,s)})}runTests(e,n,r){let s=!1,{tests:i,value:o,originalValue:a,path:l,options:c}=e,u=I=>{s||(s=!0,n(I,o))},h=I=>{s||(s=!0,r(I,o))},d=i.length,p=[];if(!d)return h([]);let E={value:o,originalValue:a,path:l,options:c,schema:this};for(let I=0;I<i.length;I++){const w=i[I];w(E,u,function(D){D&&(Array.isArray(D)?p.push(...D):p.push(D)),--d<=0&&h(p)})}}asNestedTest({key:e,index:n,parent:r,parentPath:s,originalParent:i,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let c=r[a];const u=Object.assign({},o,{strict:!0,parent:r,value:c,originalValue:i[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${s||""}[${l?a:`"${a}"`}]`:(s?`${s}.`:"")+e});return(h,d,p)=>this.resolve(u)._validate(c,u,d,p)}validate(e,n){var r;let s=this.resolve(Object.assign({},n,{value:e})),i=(r=n==null?void 0:n.disableStackTrace)!=null?r:s.spec.disableStackTrace;return new Promise((o,a)=>s._validate(e,n,(l,c)=>{Lt.isError(l)&&(l.value=c),a(l)},(l,c)=>{l.length?a(new Lt(l,c,void 0,void 0,i)):o(c)}))}validateSync(e,n){var r;let s=this.resolve(Object.assign({},n,{value:e})),i,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:s.spec.disableStackTrace;return s._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw Lt.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new Lt(a,e,void 0,void 0,o);i=l}),i}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(Lt.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(Lt.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):_s(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=hs({message:n,name:"nullable",test(s){return s===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=hs({message:n,name:"optionality",test(s){return s===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=dn.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=dn.notNull){return this.nullability(!1,e)}required(e=dn.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=dn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),s=hs(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(i||o.OPTIONS.test===s.OPTIONS.test))),r.tests.push(s),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),s=u0(e).map(i=>new as(i));return s.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new qa(s,n):qa.fromOptions(s,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=hs({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=dn.oneOf){let r=this.clone();return e.forEach(s=>{r._whitelist.add(s),r._blacklist.delete(s)}),r.internalTests.whiteList=hs({message:n,name:"oneOf",skipAbsent:!0,test(s){let i=this.schema._whitelist,o=i.resolveAll(this.resolve);return o.includes(s)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:o}})}}),r}notOneOf(e,n=dn.notOneOf){let r=this.clone();return e.forEach(s=>{r._blacklist.add(s),r._whitelist.delete(s)}),r.internalTests.blacklist=hs({message:n,name:"notOneOf",test(s){let i=this.schema._blacklist,o=i.resolveAll(this.resolve);return o.includes(s)?this.createError({params:{values:Array.from(i).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:s,optional:i,nullable:o}=n.spec;return{meta:s,label:r,optional:i,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,u)=>u.findIndex(h=>h.name===l.name)===c)}}}On.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])On.prototype[`${t}At`]=function(e,n,r={}){const{parent:s,parentPath:i,schema:o}=rk(this,e,n,r.context);return o[t](s&&s[i],Object.assign({},r,{parent:s,path:e}))};for(const t of["equals","is"])On.prototype[t]=On.prototype.oneOf;for(const t of["not","nope"])On.prototype[t]=On.prototype.notOneOf;const sk=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function ik(t){const e=Du(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let n=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(n=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(n=0-n)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+n,e.second,e.millisecond)}function Du(t){var e,n;const r=sk.exec(t);return r?{year:Vn(r[1]),month:Vn(r[2],1)-1,day:Vn(r[3],1),hour:Vn(r[4]),minute:Vn(r[5]),second:Vn(r[6]),millisecond:r[7]?Vn(r[7].substring(0,3)):0,precision:(e=(n=r[7])==null?void 0:n.length)!=null?e:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:Vn(r[10]),minuteOffset:Vn(r[11])}:null}function Vn(t,e=0){return Number(t)||e}let ok=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ak=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,lk=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,ck="^\\d{4}-\\d{2}-\\d{2}",uk="\\d{2}:\\d{2}:\\d{2}",hk="(([+-]\\d{2}(:?\\d{2})?)|Z)",dk=new RegExp(`${ck}T${uk}(\\.\\d+)?${hk}$`),fk=t=>$r(t)||t===t.trim(),pk={}.toString();function la(){return new p0}class p0 extends On{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const s=e!=null&&e.toString?e.toString():e;return s===pk?e:s})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||dn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=kt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=kt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=kt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,s,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:s,name:i}=n:s=n),this.test({name:i||"matches",message:s||kt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=kt.email){return this.matches(ok,{name:"email",message:e,excludeEmptyString:!0})}url(e=kt.url){return this.matches(ak,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=kt.uuid){return this.matches(lk,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let n="",r,s;return e&&(typeof e=="object"?{message:n="",allowOffset:r=!1,precision:s=void 0}=e:n=e),this.matches(dk,{name:"datetime",message:n||kt.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||kt.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:i=>{if(!i||r)return!0;const o=Du(i);return o?!!o.z:!1}}).test({name:"datetime_precision",message:n||kt.datetime_precision,params:{precision:s},skipAbsent:!0,test:i=>{if(!i||s==null)return!0;const o=Du(i);return o?o.precision===s:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=kt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:fk})}lowercase(e=kt.lowercase){return this.transform(n=>$r(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>$r(n)||n===n.toLowerCase()})}uppercase(e=kt.uppercase){return this.transform(n=>$r(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>$r(n)||n===n.toUpperCase()})}}la.prototype=p0.prototype;let mk=new Date(""),gk=t=>Object.prototype.toString.call(t)==="[object Date]";class Kl extends On{constructor(){super({type:"date",check(e){return gk(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=ik(e),isNaN(e)?Kl.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(as.isRef(e))r=e;else{let s=this.cast(e);if(!this._typeCheck(s))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=s}return r}min(e,n=Ou.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(s){return s>=this.resolve(r)}})}max(e,n=Ou.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(s){return s<=this.resolve(r)}})}}Kl.INVALID_DATE=mk;Kl.prototype;function _k(t,e=[]){let n=[],r=new Set,s=new Set(e.map(([o,a])=>`${o}-${a}`));function i(o,a){let l=Wr.split(o)[0];r.add(l),s.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),as.isRef(a)&&a.isSibling?i(a.path,o):vd(a)&&"deps"in a&&a.deps.forEach(l=>i(l,o))}return HO.array(Array.from(r),n).reverse()}function ym(t,e){let n=1/0;return t.some((r,s)=>{var i;if((i=e.path)!=null&&i.includes(r))return n=s,!0}),n}function m0(t){return(e,n)=>ym(t,e)-ym(t,n)}const yk=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function ca(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=ca(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=ca(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(ca)}):"optional"in t?t.optional():t}const vk=(t,e)=>{const n=[...Wr.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),s=Wr.getter(Wr.join(n),!0)(t);return!!(s&&r in s)};let vm=t=>Object.prototype.toString.call(t)==="[object Object]";function Ek(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const wk=m0([]);function g0(t){return new _0(t)}class _0 extends On{constructor(e){super({type:"object",check(n){return vm(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=wk,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let s=super._cast(e,n);if(s===void 0)return this.getDefault(n);if(!this._typeCheck(s))return s;let i=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(s).filter(h=>!this._nodes.includes(h))),l={},c=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),u=!1;for(const h of a){let d=i[h],p=h in s;if(d){let E,I=s[h];c.path=(n.path?`${n.path}.`:"")+h,d=d.resolve({value:I,context:n.context,parent:l});let w=d instanceof On?d.spec:void 0,x=w==null?void 0:w.strict;if(w!=null&&w.strip){u=u||h in s;continue}E=!n.__validating||!x?d.cast(s[h],c):s[h],E!==void 0&&(l[h]=E)}else p&&!o&&(l[h]=s[h]);(p!==h in l||l[h]!==s[h])&&(u=!0)}return u?l:s}_validate(e,n={},r,s){let{from:i=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...i],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,c)=>{if(!a||!vm(c)){s(l,c);return}o=o||c;let u=[];for(let h of this._nodes){let d=this.fields[h];!d||as.isRef(d)||u.push(d.asNestedTest({options:n,key:h,parent:c,parentPath:n.path,originalParent:o}))}this.runTests({tests:u,value:c,originalValue:o,options:n},r,h=>{s(h.sort(this._sortErrors).concat(l),c)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[s,i]of Object.entries(this.fields)){const o=r[s];r[s]=o===void 0?i:o}return n.withMutation(s=>s.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var s;const i=this.fields[r];let o=e;(s=o)!=null&&s.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=i&&"getDefault"in i?i.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=_k(e,n),r._sortErrors=m0(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let s=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),s=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),s)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return ca(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,s])=>e.includes(r)&&e.includes(s)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let s=Wr.getter(e,!0);return this.transform(i=>{if(!i)return i;let o=i;return vk(i,e)&&(o=Object.assign({},i),r||delete o[e],o[n]=s(i)),o})}json(){return this.transform(yk)}noUnknown(e=!0,n=ku.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(s){if(s==null)return!0;const i=Ek(this.schema,s);return!e||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=ku.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const s of Object.keys(n))r[e(s)]=n[s];return r})}camelCase(){return this.transformKeys(Dc.camelCase)}snakeCase(){return this.transformKeys(Dc.snakeCase)}constantCase(){return this.transformKeys(e=>Dc.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[i,o]of Object.entries(n.fields)){var s;let a=e;(s=a)!=null&&s.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),r.fields[i]=o.describe(a)}return r}}g0.prototype=_0.prototype;const Tk=IO(g0({firstName:la().required(),lastName:la().required(),phone:la().required()})),Po=zs("user",()=>{const{errors:t,defineField:e,handleSubmit:n}=gO({validationSchema:Tk}),[r,s]=e("firstName"),[i,o]=e("lastName"),[a,l]=e("phone"),c=ge(""),u=ge(""),h=Rn({latitude:"",longitude:"",country:"",department:"",city:"",address:""}),d=Rn([{brand:"",model:"",year:"",mileage:"",fuelType:"gasolina",soatExpiry:null,annualInspection:null,technicalInspection:null}]),p=async B=>{await n(async N=>{try{return await B.updateUser({uid:B.uid,firstName:N.firstName,lastName:N.lastName,phone:N.phone,cars:B.cars})}catch(ce){console.error("Error al enviar el formulario",ce)}})()};function E(){d.push({brand:"",model:"",year:"",mileage:"",fuelType:"gasolina",soatExpiry:null,annualInspection:null,technicalInspection:null})}function I(B){d.splice(B,1)}function w(B){u.value=B.uid||"",r.value=B.firstName||"",i.value=B.lastName||"",a.value=B.phone||"",Object.assign(d,B.cars||[{brand:"",model:"",year:"",mileage:"",fuelType:"",soatExpiry:"",annualInspection:"",technicalInspection:""}])}function x(){u.value="",r.value="",i.value="",a.value="",Object.assign(d,[{brand:"",model:"",year:"",mileage:"",fuelType:"",soatExpiry:"",annualInspection:"",technicalInspection:""}])}async function D(B){if(B){const N=Gp(Cc,"users"),ce=ex(N,tx("uid","==",B));(await lx(ce)).docs.map(Z=>{const ue=Z.data();c.value=Z.id,w(ue)})}else return[]}async function L(B){try{const N=Gp(Cc,"users"),ce={id:"",uid:B,firstName:"",lastName:"",phone:"",cars:[{brand:"",model:"",year:"",mileage:"",fuelType:"gasolina",soatExpiry:"",annualInspection:"",technicalInspection:""}]};return w(ce),await ux(N,ce)}catch(N){throw N}}async function W(B){try{const N=Fv(Cc,"users",c.value);await cx(N,B)}catch(N){throw N}}return{id:c,uid:u,errors:t,location:h,firstName:r,firstNameProps:s,lastName:i,lastNameProps:o,phone:a,phoneProps:l,submitUserForm:p,cars:d,setUser:w,getUserByUid:D,createUser:L,updateUser:W,resetUser:x,addCar:E,removeCar:I}}),Xs=zs("auth",()=>{const t=ge(""),e=ge(""),n=ge(""),r=ge(!1),s=ge(!1);function i(a){r.value=a}async function o(){return new Promise((a,l)=>{try{js.onAuthStateChanged(c=>{s.value=!!c,c&&(e.value=c.email,n.value=c.uid,t.value=c.displayName),a()})}catch(c){l(c)}})}return{isLoading:r,setIsLoading:i,email:e,uid:n,displayName:t,getFirebaseUser:o,isAuthenticated:s}}),y0=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Ik={},bk={class:"loader"};function Ak(t,e){return fe(),De("div",bk)}const Ed=y0(Ik,[["render",Ak]]),Sk={class:"w-screen h-screen z-30 fixed top-0 left-0 flex flex-row justify-center items-center"},Rk=It({__name:"LoadingView",setup(t){return(e,n)=>(fe(),De("div",Sk,[$e(Ed)]))}}),Pk=It({__name:"App",setup(t){const e=Po(),n=Xs();return no(async()=>{n.setIsLoading(!0),await n.getFirebaseUser().then(async()=>{await e.getUserByUid(n==null?void 0:n.uid).then(()=>{n.setIsLoading(!1)})})}),(r,s)=>G(n).isLoading?(fe(),Ct(Rk,{key:0})):(fe(),Ct(G(Fg),{key:1}))}}),Ck="/assets/location-DpZDhNKF.svg",xk="/assets/profile-DfsRXmBN.png",wd=zs("loginModal",()=>{const t=ge(!1),e=ge(!1),n=ge(""),r=ge("");function s(a){t.value=a}function i(a){e.value=a}function o(){i(!0)}return{email:n,password:r,isLoading:t,showModal:e,setIsLoading:s,setShowModal:i,handleShowLoginModal:o}}),Td=zs("registerModal",()=>{const t=ge(!1),e=ge(!1),n=ge(""),r=ge("");function s(a){t.value=a}function i(a){e.value=a}function o(){i(!0)}return{email:n,password:r,isLoading:t,showModal:e,setIsLoading:s,setShowModal:i,handleShowRegisterModal:o}}),Ok=zs("locationModal",()=>{const t=ge(!1),e=ge(!1);function n(i){t.value=i}function r(i){e.value=i}function s(){r(!0)}return{isLoading:t,showModal:e,setIsLoading:n,setShowModal:r,handleShowRegisterModal:s}}),kk={class:"flex sm:flex-row flex-col justify-between items-center bg-blue-900 w-full px-4 py-4 drop-shadow-xl sticky"},Dk={class:"flex flex-row justify-start items-center sm:mb-0 mb-5"},Nk=y("p",{class:"cursor-default text-sky-100 border-sky-100 text-4xl font-bold border-4 px-1 hidden sm:block"},"TODOAUTOS",-1),Vk={class:"flex flex-col justify-center items-center sm:mx-7"},Mk={class:"cursor-default flex flex-row px-2 rounded-sm"},Lk=y("p",{class:"text-sky-300 font-bold"},"Ubicación",-1),Fk=["src"],Uk=y("p",{class:"cursor-default w-52 text-center text-sky-100 font-black px-6 py-1"},"Trujillo, La Libertad",-1),$k={class:"flex flex-row justify-between items-center"},jk={class:"flex flex-row justify-between items-center"},Bk={class:"flex flex-row justify-between items-center"},qk=["src"],zk={class:"text-blue-900 font-medium"},Hk=y("div",{class:"absolute w-0 h-0",style:{top:"-10px",left:"75px","border-left":"10px solid transparent","border-right":"10px solid transparent","border-bottom":"10px solid #1e3a8a"}},null,-1),Wk=It({__name:"TopBar",setup(t){const{handleShowLoginModal:e}=wd(),{handleShowRegisterModal:n}=Td(),r=Po(),s=Xs(),i=ge(!1);async function o(){try{await NA(js),r.resetUser()}catch(a){console.error("Error al cerrar sesión:",a)}}return(a,l)=>(fe(),De("div",kk,[y("div",Dk,[Nk,y("div",Vk,[y("span",Mk,[Lk,y("img",{src:G(Ck),alt:"LOCATION",class:"h-6"},null,8,Fk)]),Uk])]),y("div",$k,[y("div",jk,[G(s).isAuthenticated?(fe(),De("div",{key:0,class:"cursor-default bg-white rounded-md h-12 min-w-fit px-2 flex flex-col justify-center items-center",onMouseenter:l[0]||(l[0]=c=>i.value=!0),onMouseleave:l[1]||(l[1]=c=>i.value=!1)},[y("div",Bk,[y("img",{src:G(xk),alt:"AVATAR",class:"w-8 mr-2"},null,8,qk),y("p",zk,Dr(G(s).displayName||G(s).email||"-"),1)]),i.value?(fe(),De("button",{key:0,onClick:o,class:"cursor-pointer py-1 font-normal rounded-md border-blue-100 border-2 bg-blue-900 text-blue-100 hover:border-blue-900 hover:bg-blue-100 hover:text-blue-900 w-44 top-[4.3em] absolute flex flex-col justify-between items-center"},[Hk,vn(" Cerrar sesión ")])):tn("",!0)],32)):(fe(),De(Mt,{key:1},[y("button",{onClick:l[2]||(l[2]=(...c)=>G(e)&&G(e)(...c)),class:"font-semibold w-40 px-5 py-2 rounded-lg border-blue-100 border-2 bg-blue-900 text-blue-100 hover:border-0 hover:bg-blue-100 hover:text-blue-900 mr-3"},"INGRESAR"),y("button",{onClick:l[3]||(l[3]=(...c)=>G(n)&&G(n)(...c)),class:"font-semibold w-40 px-5 py-2 rounded-lg border-blue-100 border-2 bg-blue-900 text-blue-100 hover:border-0 hover:bg-blue-100 hover:text-blue-900"},"REGISTRARSE")],64))])])]))}}),Kk={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 bg-blue-100"},Gk=y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1),Qk=[Gk],Yk={key:1,xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 bg-blue-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Jk=y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1),Xk=[Jk],Zk=It({__name:"SideBar",setup(t){const e=ge(!1),n=Xs(),r=eh();function s(){e.value=!e.value}function i(o){return Object.is(r.currentRoute.value.name,o)}return(o,a)=>{const l=eg("router-link");return fe(),De("div",null,[y("div",{onClick:s,class:qt([{"w-44":e.value,"w-6.5":!e.value},"bg-blue-900 cursor-pointer sm:hidden flex fixed top-0"])},[e.value?(fe(),De("svg",Kk,Qk)):(fe(),De("svg",Yk,Xk))],2),y("div",{class:qt([{"flex top-[1.5rem]":e.value,"hidden sm:flex top-[5.5rem]":!e.value},"flex-col justify-start items-center h-full w-44 bg-blue-900 drop-shadow-xl fixed bottom-0"])},[$e(l,{class:qt([{"text-sky-900 bg-blue-100":i("AllServices"),"text-sky-100 bg-blue-900":!i("AllServices")},"font-medium text-sky-100 hover:text-sky-900 hover:bg-blue-100 drop-shadow-xl py-1 mb-1 w-full text-left pl-3"]),to:{name:"AllServices"}},{default:Yt(()=>[vn("Todos los servicios")]),_:1},8,["class"]),$e(l,{class:qt([{"text-sky-900 bg-blue-100":i("CarWashServices"),"text-sky-100 bg-blue-900":!i("CarWashServices")},"font-medium text-sky-100 hover:text-sky-900 hover:bg-blue-100 drop-shadow-xl py-1 mb-1 w-full text-left pl-3"]),to:{name:"CarWashServices"}},{default:Yt(()=>[vn("Todo Lavado")]),_:1},8,["class"]),G(n).isAuthenticated?(fe(),Ct(l,{key:0,class:qt([{"text-sky-900 bg-blue-100":i("Profile"),"text-sky-100 bg-blue-900":!i("Profile")},"font-medium hover:text-sky-900 hover:bg-blue-100 drop-shadow-xl py-1 mb-1 w-full text-left pl-3"]),to:{name:"Profile"}},{default:Yt(()=>[vn("Mi perfil")]),_:1},8,["class"])):tn("",!0)],2)])}}}),eD={class:"fixed w-screen h-screen top-0 left-0 flex flex-row justify-center items-center bg-black bg-opacity-80 z-20"},tD={class:"w-full flex flex-row justify-end items-center mb-1"},nD={class:"w-full h-full flex flex-col justify-center items-center mt-0 mb-5"},Gl=It({__name:"Modal",props:{width:{default:"w-1/2"},height:{default:"h-3/4"}},emits:["closeModal"],setup(t,{emit:e}){const n=t;return(r,s)=>(fe(),De("div",eD,[y("div",{class:qt(["flex flex-col justify-start items-center bg-white rounded-lg pt-2 px-4",n.width+" "+n.height])},[y("div",tD,[y("p",{class:"text-lg font-bold cursor-pointer",onClick:s[0]||(s[0]=i=>r.$emit("closeModal"))},"X")]),y("div",nD,[og(r.$slots,"default",{},()=>[vn("MODAL")])])],2)]))}}),rD={key:1,class:"w-full flex flex-col justify-center items-center"},sD={key:0,class:"text-sm flex flex-row justify-center items-center mb-10"},iD=y("p",{class:"rounded-xs font-semibold px-4 py-1 bg-red-100 text-red-800 cursor-default mr-1"},"El correo o la contraseña son incorrectos",-1),oD=[iD],aD={key:1,class:"text-sm flex flex-row justify-center items-center mb-10"},lD=y("p",{class:"cursor-default mr-1"},"¿No tienes una cuenta?",-1),cD={class:"flex flex-col rounded-md w-full"},uD=y("label",{for:"email",class:"text-blue-900 font-semibold text-xs mb-1"},"Correo electrónico",-1),hD={class:"flex flex-col w-full"},dD=y("label",{for:"password",class:"text-blue-900 font-semibold text-xs"},"Contraseña",-1),fD=y("button",{type:"submit",class:"w-full flex flex-row justify-center items-center mt-3 py-1 rounded-md bg-blue-600 hover:opacity-80 text-blue-100 font-bold"},"Iniciar sesión",-1),pD=y("div",{class:"flex flex-row justify-between items-baseline"},[y("hr",{class:"h-[2px] w-24 bg-[#ededed]"}),y("p",{class:"my-4 mx-2 text-gray-500"},"o"),y("hr",{class:"h-[2px] w-24 bg-[#ededed]"})],-1),mD=y("svg",{class:"h-6",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},[y("g",null,[y("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),y("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),y("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),y("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),y("path",{fill:"none",d:"M0 0h48v48H0z"})])],-1),gD=y("p",{class:"ml-3"},"Iniciar sesión con Google",-1),_D=[mD,gD],yD=It({__name:"LoginModal",setup(t){const e=wd(),n=Td(),r=Po(),s=Xs(),i=ge(""),o=ge(""),a=ge(!1);function l(){e.setShowModal(!1),n.setShowModal(!0)}const c=async()=>{try{a.value=!1;const h=new mn;await C_(js,h).then(async()=>{await r.getUserByUid(s==null?void 0:s.uid),e.setIsLoading(!1),e.setShowModal(!1)})}catch(h){a.value=!0,console.error("Error al iniciar sesión con Google:",h)}},u=async()=>{try{a.value=!1,e.setIsLoading(!0),await OA(js,i.value,o.value).then(async()=>{await r.getUserByUid(s==null?void 0:s.uid),e.setIsLoading(!1),e.setShowModal(!1)})}catch(h){a.value=!0,e.setIsLoading(!1),console.error("Error al iniciar sesión con correo y contraseña:",h)}};return(h,d)=>G(e).showModal?(fe(),Ct(Gl,{key:0,onCloseModal:d[2]||(d[2]=p=>G(e).setShowModal(!1)),width:"w-3/4",height:"h-3/4"},{default:Yt(()=>[G(e).isLoading?(fe(),Ct(Ed,{key:0})):(fe(),De("div",rD,[a.value?(fe(),De("span",sD,oD)):(fe(),De("span",aD,[lD,y("p",{class:"cursor-pointer text-blue-900 font-semibold",onClick:l},"Registrate gratis")])),y("form",{onSubmit:Tg(u,["prevent"]),class:"rounded-md w-full sm:w-2/5 flex flex-col justify-center items-center"},[y("div",cD,[uD,Rt(y("input",{class:"h-8 mb-2 pl-2 bg-blue-100 rounded-md",style:{outline:"none"},type:"email",id:"email","onUpdate:modelValue":d[0]||(d[0]=p=>i.value=p),required:""},null,512),[[Nt,i.value]])]),y("div",hD,[dD,Rt(y("input",{class:"h-8 mb-2 pl-2 bg-blue-100 rounded-md",style:{outline:"none"},type:"password",id:"password","onUpdate:modelValue":d[1]||(d[1]=p=>o.value=p),required:""},null,512),[[Nt,o.value]])]),fD,pD],32),y("button",{type:"button",class:"mt-2 flex flex-row justify-evenly items-center bg-white border-blue-100 border-2 w-fit rounded-md px-3 py-1 hover:opacity-60",onClick:c},_D)]))]),_:1})):tn("",!0)}}),vD={key:1,class:"w-full flex flex-col justify-center items-center"},ED=y("p",{class:"cursor-default mr-1"},"¿Ya tienes una cuenta?",-1),wD={class:"flex flex-col rounded-md w-full"},TD=y("label",{for:"email",class:"text-blue-900 font-semibold text-xs mb-1"},"Correo electrónico",-1),ID={class:"flex flex-col w-full"},bD=y("label",{for:"password",class:"text-blue-900 font-semibold text-xs"},"Contraseña",-1),AD=y("button",{type:"submit",class:"w-full flex flex-row justify-center items-center mt-3 py-1 rounded-md bg-blue-600 hover:opacity-80 text-blue-100 font-bold"},"Registrarse",-1),SD=y("div",{class:"flex flex-row justify-between items-baseline"},[y("hr",{class:"h-[2px] w-24 bg-[#ededed]"}),y("p",{class:"my-4 mx-2 text-gray-500"},"o"),y("hr",{class:"h-[2px] w-24 bg-[#ededed]"})],-1),RD=y("svg",{class:"h-6",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},[y("g",null,[y("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),y("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),y("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),y("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),y("path",{fill:"none",d:"M0 0h48v48H0z"})])],-1),PD=y("p",{class:"ml-3"},"Registrarse con Google",-1),CD=[RD,PD],xD=It({__name:"RegisterModal",setup(t){const e=eh(),n=Td(),r=wd(),s=Po(),i=Xs(),o=ge(""),a=ge("");function l(){n.setShowModal(!1),r.setShowModal(!0)}const c=async()=>{try{n.setShowModal(!0),await xA(js,o.value,a.value).then(async({user:{uid:h}})=>{await s.createUser(h).then(()=>{n.setShowModal(!1),e.push({name:"Profile"})})})}catch(h){console.error("Error al registrar el usuario:",h)}},u=async()=>{try{const h=new mn;await C_(js,h).then(async()=>{await s.getUserByUid(i==null?void 0:i.uid),r.setIsLoading(!1),r.setShowModal(!1)})}catch(h){console.error("Error al iniciar sesión con Google:",h)}};return(h,d)=>G(n).showModal?(fe(),Ct(Gl,{key:0,onCloseModal:d[2]||(d[2]=p=>G(n).setShowModal(!1)),width:"w-3/4",height:"h-3/4"},{default:Yt(()=>[G(n).isLoading?(fe(),Ct(Ed,{key:0})):(fe(),De("div",vD,[y("span",{class:"text-sm flex flex-row justify-center items-center mb-10"},[ED,y("p",{class:"cursor-pointer text-blue-900 font-semibold",onClick:l},"Inicia sesión")]),y("form",{onSubmit:Tg(c,["prevent"]),class:"rounded-md w-full sm:w-2/5 flex flex-col justify-center items-center"},[y("div",wD,[TD,Rt(y("input",{class:"h-8 mb-2 pl-2 bg-blue-100 rounded-md",style:{outline:"none"},type:"email",id:"email","onUpdate:modelValue":d[0]||(d[0]=p=>o.value=p),required:""},null,512),[[Nt,o.value]])]),y("div",ID,[bD,Rt(y("input",{class:"h-8 mb-2 pl-2 bg-blue-100 rounded-md",style:{outline:"none"},type:"password",id:"password","onUpdate:modelValue":d[1]||(d[1]=p=>a.value=p),required:""},null,512),[[Nt,a.value]])]),AD,SD],32),y("button",{type:"button",class:"mt-2 flex flex-row justify-evenly items-center bg-white border-blue-100 border-2 w-fit rounded-md px-3 py-1 hover:opacity-60",onClick:u},CD)]))]),_:1})):tn("",!0)}}),OD=y("form",{id:"address-form",class:"w-full px-10 flex flex-col justify-center items-center"},[y("label",{for:"autocomplete-input",class:"mb-3"},"Ingresa una dirección"),y("input",{class:"w-full mb-3 bg-blue-100 rounded-xs",style:{outline:"none"},type:"text",id:"autocomplete-input",name:"autocomplete-input"}),y("button",{class:"w-1/3 py-1 rounded-md bg-blue-600 hover:opacity-90 text-blue-100",type:"submit"},"Buscar")],-1),kD=It({__name:"LocationModal",setup(t){const e=Ok();return(n,r)=>G(e).showModal?(fe(),Ct(Gl,{key:0,onCloseModal:r[0]||(r[0]=s=>G(e).setShowModal(!1))},{default:Yt(()=>[OD]),_:1})):tn("",!0)}}),DD=zs("alert",()=>{const t=ge(!1);function e(n){t.value=n,setTimeout(()=>{t.value=!1},1500)}return{showAlert:t,setShowAlert:e}}),ND=y("p",{class:"text-blue-600 font-medium"},"¡Los datos se actualizaron con éxito!",-1),VD=It({__name:"Alert",setup(t){const e=DD();return(n,r)=>G(e).showAlert?(fe(),Ct(Gl,{key:0,onCloseModal:r[0]||(r[0]=s=>G(e).setShowAlert(!1)),width:"w-1/4",height:"h-40"},{default:Yt(()=>[ND]),_:1})):tn("",!0)}}),MD={},LD={class:"footer"},FD={class:"pt-10 pb-7 px-10 text-center text-blue-900 font-bold"};function UD(t,e){return fe(),De("footer",LD,[y("div",FD,[y("p",null,"© "+Dr(new Date().getFullYear())+" TODOAUTOS. Todos los derechos reservados.",1)])])}const $D=y0(MD,[["render",UD]]),jD={class:"flex flex-col w-full h-screen overflow-hidden"},BD={class:"flex flex-row w-full h-full overflow-y-auto"},qD={class:"md:container md:mx-auto w-full sm:pl-44"},zD={class:"w-full h-full"},Id=It({__name:"Layout",setup(t){return(e,n)=>(fe(),De("div",jD,[$e(yD),$e(xD),$e(kD),$e(VD),$e(Wk),y("div",BD,[$e(Zk),y("span",qD,[y("div",zD,[og(e.$slots,"default",{},()=>[vn("Add view")]),$e($D)])])])]))}}),HD="/assets/adjustable-wrench-R0lMtTwB.png",WD="/assets/fan-CsgU8Uvx.png",KD="/assets/brakes-dzGoctIr.png",GD="/assets/oil-CO9vyqw0.png",QD="/assets/spray-vO-oeRxu.png",YD="/assets/whatsapp-Bv3ceAgd.png",JD={class:"md:container md:mx-auto bg-white pt-5"},XD=y("h1",{class:"text-2xl text-left px-5 text-blue-900 font-black mb-4"},"SERVICIOS PARA AUTOMÓVILES A DOMICILIO",-1),ZD=y("p",{class:"text-left px-5 text-blue-900 font-normal mb-6"},[vn("Lista de servicios de mantenimiento y reparación de automóviles "),y("strong",null,"disponibles a domicilio"),vn(".")],-1),eN={class:"flex flex-row flex-wrap justify-evenly items-center"},tN={key:0,class:"text-center text-base text-orange-600 py-0 font-black w-ful"},nN=["src"],rN=["innerHTML"],sN={key:2,class:"flex flex-row justify-center items-center mb-3 p-1 w-[15rem] rounded-md bg-blue-600 hover:opacity-80"},iN={target:"_blank",class:"text-center text-white text-xl font-bold",href:"https://api.whatsapp.com/send?phone=906841366"},oN=["src"],aN=It({__name:"AllServices",setup(t){const e=ge([{name:"Lavado",imageSrc:QD,description:"<span>Encuentra talleres cerca de ti.</span>",CTAtext:"VER TALLERES",isCarWash:!0},{name:"Afinamiento",organization:"Nombre del taller",imageSrc:HD,description:"<span>Servicio regular para mantener el rendimiento óptimo del vehículo.</span>",price:"Desde S/50",rating:4.5,endedServices:37,mobile:"+51 987654321",CTAtext:"CONTACTAR",isCarWash:!1},{name:"Cambio de Aceite",imageSrc:GD,description:"<span>Cambio de aceite y filtro para garantizar un motor saludable.</span>",price:"Desde S/30 (Incluye filtro)",CTAtext:"CONTACTAR",isCarWash:!1},{name:"Reparación de Frenos",imageSrc:KD,description:"<span>Inspección y reparación de sistemas de frenos para una conducción segura.</span>",price:"Desde S/100",CTAtext:"CONTACTAR",isCarWash:!1},{name:"Revisión de Aire Acondicionado",imageSrc:WD,description:"<span>Recarga y mantenimiento del sistema de aire acondicionado para un clima interior cómodo.</span>",price:"Desde S/60",CTAtext:"CONTACTAR",isCarWash:!1}]);return(n,r)=>{const s=eg("router-link");return fe(),Ct(Id,null,{default:Yt(()=>[y("div",JD,[XD,ZD,y("div",eN,[(fe(!0),De(Mt,null,ig(e.value,i=>(fe(),De("div",{key:i.name,class:"w-[21rem] h-[25rem] mb-6 p-2 mr-1 bg-green-100 flex flex-col justify-center items-center rounded-lg shadow-xl"},[y("p",{class:qt(["text-center text-2xl font-black",{"text-orange-600":i.isCarWash,"text-blue-600":!i.isCarWash}])},Dr(i.name),3),i.price?(fe(),De("p",tN,Dr(i.price),1)):tn("",!0),y("img",{src:i.imageSrc,alt:"Car service",class:"my-6 h-20 rounded"},null,8,nN),y("p",{class:"px-1 rounded mb-6 w-[19rem] text-center text-blue-600 text-base font-mono bg-white italic font-black",innerHTML:i.description},null,8,rN),i.isCarWash?(fe(),Ct(s,{key:1,to:{name:"CarWashServices"},class:"hover:opacity-80 mb-3 p-1 w-[15rem] rounded-md text-center text-white text-xl font-bold bg-orange-600"},{default:Yt(()=>[vn(Dr(i.CTAtext),1)]),_:2},1024)):(fe(),De("button",sN,[y("a",iN,Dr(i.CTAtext),1),y("img",{src:G(YD),alt:"whatsapp",class:"ml-4 h-6"},null,8,oN)]))]))),128))])])]),_:1})}}}),lN=y("div",{id:"map",style:{height:"400px"}},null,-1),cN=[lN],uN=It({__name:"CarWashMap",setup(t){let e=null;async function n(){navigator.geolocation?await new Promise((o,a)=>{navigator.geolocation.getCurrentPosition(l=>{e={lat:l.coords.latitude,lng:l.coords.longitude},o()},l=>{console.error("Error al obtener la ubicación del usuario:",l),a()})}):console.error("Geolocalización no es compatible con este navegador.")}function r(o,a){if(a===google.maps.places.PlacesServiceStatus.OK)for(var l=0;l<o.length;l++){var c=o[l];console.log("DIRECCIÓN",c.vicinity,"NAME",c.name)}}let s=null;async function i(){await n(),console.log("userLocation",e);const o=e||{lat:-8.1169477,lng:-79.021662},{Map:a}=await google.maps.importLibrary("maps"),{PlacesService:l}=await google.maps.importLibrary("places"),{AdvancedMarkerView:c}=await google.maps.importLibrary("marker");s=new a(document.getElementById("map"),{zoom:5,center:o,mapId:"DEMO_MAP_ID"});var u=new google.maps.LatLng(-8.1169477,-79.021662),h={type:"car_wash",location:u,radius:5e3},d=new l(s);d.nearbySearch(h,r),new c({map:s,position:o,title:"Uluru"})}return no(async()=>{await i()}),(o,a)=>(fe(),De("div",null,cN))}}),hN={class:"md:container md:mx-auto pt-5"},dN=y("h1",{class:"text-2xl text-left px-5 text-blue-900 font-black mb-4"},"LAVADO DE AUTOMÓVILES",-1),fN=y("p",{class:"text-left px-5 text-blue-900 font-normal mb-6"},"Encuentra talleres de lavado cerca de ti.",-1),pN=It({__name:"CarWashServices",setup(t){return(e,n)=>(fe(),Ct(Id,null,{default:Yt(()=>[y("div",hN,[dN,fN,$e(uN)])]),_:1}))}}),mN={class:"md:container md:mx-auto pt-5 mb-11"},gN=y("h1",{class:"text-left pl-5 text-2xl text-blue-900 font-black mb-4"},"CONFIGURACIÓN",-1),_N=y("p",{class:"text-left pl-5 text-blue-900 font-normal mb-6"},"Administra tus datos personales y de tus autos.",-1),yN={class:"mb-4 rounded-md w-11/12 mx-5 p-5 flex flex-col justify-center items-start bg-blue-100"},vN=y("h2",{class:"text-lg text-left text-blue-900 font-bold mb-6"},"Información de contacto",-1),EN={class:"mb-4 field flex flex-col w-full"},wN=y("label",{for:"first-name",class:"text-blue-900 font-bold text-xs mb-1"},"Nombres*",-1),TN={key:0,class:"text-xs text-red-700 font-medium pl-2"},IN={class:"mb-4 field flex flex-col w-full"},bN=y("label",{for:"last-name",class:"text-blue-900 font-bold text-xs mb-1"},"Apellidos*",-1),AN={key:0,class:"text-xs text-red-700 font-medium pl-2"},SN={class:"field flex flex-col w-full"},RN=y("label",{for:"phone",class:"text-blue-900 font-bold text-xs mb-1"},"Teléfono*",-1),PN={key:0,class:"text-xs text-red-700 font-medium pl-2"},CN={class:"mb-4 rounded-md w-11/12 mx-5 p-5 flex flex-col justify-center items-start bg-blue-100"},xN={class:"flex flex-row justify-between items-center w-full mb-6"},ON=y("h2",{class:"text-lg text-left text-blue-900 font-bold mb-4"},"Información de tus automóviles",-1),kN={class:"w-full flex flex-row justify-between items-center mb-4"},DN={class:"text-xl text-left text-blue-600 font-black"},NN=["onClick"],VN={class:"w-full flex flex-row justify-between items-center"},MN={class:"field flex flex-col mb-2 w-full mr-1"},LN=y("label",{for:"brand",class:"text-blue-900 font-bold text-xs mb-1"},"Marca",-1),FN=["onUpdate:modelValue"],UN={class:"field flex flex-col mb-2 w-full ml-1"},$N=y("label",{for:"model",class:"text-blue-900 font-bold text-xs mb-1"},"Modelo",-1),jN=["onUpdate:modelValue"],BN={class:"w-full flex flex-row justify-between items-center"},qN={class:"field flex flex-col mb-2 w-full mr-1"},zN=y("label",{for:"year",class:"text-blue-900 font-bold text-xs mb-1"},"Año",-1),HN=["onUpdate:modelValue"],WN={class:"field flex flex-col mb-2 w-full mr-1 ml-1"},KN=y("label",{for:"mileage",class:"text-blue-900 font-bold text-xs mb-1"},"Kilometraje Actual",-1),GN=["onUpdate:modelValue"],QN={class:"field flex flex-col mb-2 w-full ml-1"},YN=y("label",{for:"fuel-type",class:"text-blue-900 font-bold text-xs mb-1"},"Tipo de Combustible",-1),JN=["onUpdate:modelValue"],XN=y("option",{value:"gasolina"},"Gasolina",-1),ZN=y("option",{value:"gnv"},"GNV",-1),eV=y("option",{value:"glp"},"GLP",-1),tV=y("option",{value:"diesel"},"Diésel",-1),nV=y("option",{value:"hibrido"},"Híbrido",-1),rV=[XN,ZN,eV,tV,nV],sV={class:"w-full flex flex-row justify-between items-center"},iV={class:"field flex flex-col mb-2 w-full mr-1"},oV=y("label",{for:"soat-expiry",class:"text-blue-900 font-bold text-xs mb-1"},"Fecha vencimiento SOAT",-1),aV=["onUpdate:modelValue"],lV={class:"field flex flex-col mb-2 w-full mr-1 ml-1"},cV=y("label",{for:"annual-inspection",class:"text-blue-900 font-bold text-xs mb-1"},"Fecha revisión técnica anual",-1),uV=["onUpdate:modelValue"],hV={class:"field flex flex-col mb-2 w-full ml-1"},dV=y("label",{for:"technical-inspection",class:"text-blue-900 font-bold text-xs mb-1"},"Fecha inspección técnica anual",-1),fV=["onUpdate:modelValue"],pV={key:0,class:"h-0.5 w-full mb-8 bg-white"},mV=It({__name:"Profile",setup(t){const e=Xs(),n=ge(!1),r=Po(),s=eh();no(()=>{e.isAuthenticated||s.push({name:"Home"})});function i(){n.value||(n.value=!0)}return(o,a)=>(fe(),Ct(Id,null,{default:Yt(()=>[y("div",mN,[gN,_N,y("form",yN,[vN,y("div",EN,[wN,Rt(y("input",{id:"first-name","onUpdate:modelValue":a[0]||(a[0]=l=>G(r).firstName=l),type:"text",placeholder:"Ingresa tu nombre",class:qt(["pl-2",{"border-red-400 border-2 rounded-xs":n.value&&G(r).errors&&G(r).errors.firstName}]),style:{outline:"none"}},null,2),[[Nt,G(r).firstName]]),n.value&&G(r).errors&&G(r).errors.firstName?(fe(),De("p",TN,"Los nombres son requeridos")):tn("",!0)]),y("div",IN,[bN,Rt(y("input",{id:"last-name","onUpdate:modelValue":a[1]||(a[1]=l=>G(r).lastName=l),type:"text",placeholder:"Ingresa tus apellidos",class:qt(["pl-2",{"border-red-400 border-2 rounded-xs":n.value&&G(r).errors&&G(r).errors.lastName}]),style:{outline:"none"}},null,2),[[Nt,G(r).lastName]]),n.value&&G(r).errors&&G(r).errors.lastName?(fe(),De("p",AN,"Los apellidos son requerido")):tn("",!0)]),y("div",SN,[RN,Rt(y("input",{id:"phone","onUpdate:modelValue":a[2]||(a[2]=l=>G(r).phone=l),type:"tel",placeholder:"Ingresa tu número de teléfono",class:qt(["mb-1 pl-2",{"border-red-400 border-2 rounded-xs":n.value&&G(r).errors&&G(r).errors.phone}]),style:{outline:"none"}},null,2),[[Nt,G(r).phone]]),n.value&&G(r).errors&&G(r).errors.phone?(fe(),De("p",PN,"El teléfono es requerido")):tn("",!0)])]),y("form",CN,[y("span",xN,[ON,y("button",{type:"button",onClick:a[3]||(a[3]=(...l)=>G(r).addCar&&G(r).addCar(...l)),class:"pointer-default bg-blue-600 hover:opacity-80 text-blue-100 font-bold rounded-md px-4 py-1"},"Agregar automóvil +")]),(fe(!0),De(Mt,null,ig(G(r).cars,(l,c)=>(fe(),De("span",{key:c,class:"flex flex-col justify-between items-center w-full"},[y("span",kN,[y("p",DN,"AUTO N° "+Dr(c+1),1),y("button",{type:"button",onClick:u=>G(r).removeCar(c),class:"ml-4 px-2 rounded-md hover:bg-blue-600 hover:text-white font-bold text-blue-600 bg-white"},"Quitar auto",8,NN)]),y("span",VN,[y("div",MN,[LN,Rt(y("input",{id:"brand","onUpdate:modelValue":u=>l.brand=u,type:"text",placeholder:"Ejemplo: Toyota, Honda, etc.",class:"mb-4 pl-2",style:{outline:"none"}},null,8,FN),[[Nt,l.brand]])]),y("div",UN,[$N,Rt(y("input",{id:"model","onUpdate:modelValue":u=>l.model=u,type:"text",placeholder:"Ejemplo: Corolla, Civic, etc.",class:"mb-4 pl-2",style:{outline:"none"}},null,8,jN),[[Nt,l.model]])])]),y("span",BN,[y("div",qN,[zN,Rt(y("input",{id:"year","onUpdate:modelValue":u=>l.year=u,type:"number",placeholder:"Ejemplo: 2022",class:"mb-4 pl-2",style:{outline:"none"}},null,8,HN),[[Nt,l.year]])]),y("div",WN,[KN,Rt(y("input",{id:"mileage","onUpdate:modelValue":u=>l.mileage=u,type:"number",placeholder:"Ejemplo: 50000",class:"mb-4 pl-2",style:{outline:"none"}},null,8,GN),[[Nt,l.mileage]])]),y("div",QN,[YN,Rt(y("select",{id:"fuel-type","onUpdate:modelValue":u=>l.fuelType=u,class:"mb-4 pl-2",style:{outline:"none"}},rV,8,JN),[[Mw,l.fuelType]])])]),y("span",sV,[y("div",iV,[oV,Rt(y("input",{id:"soat-expiry","onUpdate:modelValue":u=>l.soatExpiry=u,type:"date",class:"mb-4 pl-2",style:{outline:"none"}},null,8,aV),[[Nt,l.soatExpiry]])]),y("div",lV,[cV,Rt(y("input",{id:"annual-inspection","onUpdate:modelValue":u=>l.annualInspection=u,type:"date",class:"mb-4 pl-2",style:{outline:"none"}},null,8,uV),[[Nt,l.annualInspection]])]),y("div",hV,[dV,Rt(y("input",{id:"technical-inspection","onUpdate:modelValue":u=>l.technicalInspection=u,type:"date",class:"mb-4 pl-2",style:{outline:"none"}},null,8,fV),[[Nt,l.technicalInspection]])])]),c!=G(r).cars.length-1&&G(r).cars.length>0?(fe(),De("div",pV)):tn("",!0)]))),128))]),y("button",{type:"button",onClick:i,class:"w-11/12 flex flex-row justify-center items-center mx-5 mb-3 p-1 rounded-md bg-blue-600 hover:opacity-80 text-blue-100 font-bold"},"GUARDAR")])]),_:1}))}}),gV=JT({history:RT("/"),routes:[{path:"/",name:"Home",redirect:"/all-services"},{path:"/all-services",name:"AllServices",component:aN},{path:"/car-wash-services",name:"CarWashServices",component:pN},{path:"/profile",name:"Profile",component:mV}]}),bd=jw(Pk);bd.use(Hw());bd.use(gV);bd.mount("#app");
