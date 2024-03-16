(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xc(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const be={},jr=[],kt=()=>{},ky=()=>!1,ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),kc=t=>t.startsWith("onUpdate:"),Xe=Object.assign,Oc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Oy=Object.prototype.hasOwnProperty,ce=(t,e)=>Oy.call(t,e),z=Array.isArray,Br=t=>Ei(t)==="[object Map]",sa=t=>Ei(t)==="[object Set]",_h=t=>Ei(t)==="[object Date]",te=t=>typeof t=="function",Fe=t=>typeof t=="string",jn=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",zf=t=>(Ae(t)||te(t))&&te(t.then)&&te(t.catch),Kf=Object.prototype.toString,Ei=t=>Kf.call(t),Dy=t=>Ei(t).slice(8,-1),Gf=t=>Ei(t)==="[object Object]",Dc=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ns=xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ny=/-(\w)/g,rn=ia(t=>t.replace(Ny,(e,n)=>n?n.toUpperCase():"")),Vy=/\B([A-Z])/g,hs=ia(t=>t.replace(Vy,"-$1").toLowerCase()),oa=ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),sl=ia(t=>t?`on${oa(t)}`:""),Bn=(t,e)=>!Object.is(t,e),co=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ao=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Qs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yh;const Qf=()=>yh||(yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Fe(r)?Fy(r):Nc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Fe(t)||Ae(t))return t}const My=/;(?![^(]*\))/g,Ly=/:([^]+)/,Uy=/\/\*[^]*?\*\//g;function Fy(t){const e={};return t.replace(Uy,"").split(My).forEach(n=>{if(n){const r=n.split(Ly);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function _n(t){let e="";if(Fe(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const r=_n(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jy=xc($y);function Jf(t){return!!t||t===""}function By(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=aa(t[r],e[r]);return n}function aa(t,e){if(t===e)return!0;let n=_h(t),r=_h(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=jn(t),r=jn(e),n||r)return t===e;if(n=z(t),r=z(e),n||r)return n&&r?By(t,e):!1;if(n=Ae(t),r=Ae(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!aa(t[o],e[o]))return!1}}return String(t)===String(e)}function qy(t,e){return t.findIndex(n=>aa(n,e))}const wt=t=>Fe(t)?t:t==null?"":z(t)||Ae(t)&&(t.toString===Kf||!te(t.toString))?JSON.stringify(t,Yf,2):String(t),Yf=(t,e)=>e&&e.__v_isRef?Yf(t,e.value):Br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[il(r,i)+" =>"]=s,n),{})}:sa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>il(n))}:jn(e)?il(e):Ae(e)&&!z(e)&&!Gf(e)?String(e):e,il=(t,e="")=>{var n;return jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class Xf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Zf(t){return new Xf(t)}function Hy(t,e=Et){e&&e.active&&e.effects.push(t)}function ep(){return Et}function Wy(t){Et&&Et.cleanups.push(t)}let pr;class Vc{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Hy(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,br();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(zy(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Rr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Vn,n=pr;try{return Vn=!0,pr=this,this._runnings++,vh(this),this.fn()}finally{Eh(this),this._runnings--,pr=n,Vn=e}}stop(){var e;this.active&&(vh(this),Eh(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function zy(t){return t.value}function vh(t){t._trackId++,t._depsLength=0}function Eh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)tp(t.deps[e],t);t.deps.length=t._depsLength}}function tp(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Vn=!0,Ml=0;const np=[];function br(){np.push(Vn),Vn=!1}function Rr(){const t=np.pop();Vn=t===void 0?!0:t}function Mc(){Ml++}function Lc(){for(Ml--;!Ml&&Ll.length;)Ll.shift()()}function rp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&tp(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ll=[];function sp(t,e,n){Mc();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ll.push(r.scheduler)))}Lc()}const ip=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},bo=new WeakMap,mr=Symbol(""),Ul=Symbol("");function gt(t,e,n){if(Vn&&pr){let r=bo.get(t);r||bo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ip(()=>r.delete(n))),rp(pr,s)}}function mn(t,e,n,r,s,i){const o=bo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!jn(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Dc(n)&&a.push(o.get("length")):(a.push(o.get(mr)),Br(t)&&a.push(o.get(Ul)));break;case"delete":z(t)||(a.push(o.get(mr)),Br(t)&&a.push(o.get(Ul)));break;case"set":Br(t)&&a.push(o.get(mr));break}Mc();for(const l of a)l&&sp(l,4);Lc()}function Ky(t,e){var n;return(n=bo.get(t))==null?void 0:n.get(e)}const Gy=xc("__proto__,__v_isRef,__isVue"),op=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn)),wh=Qy();function Qy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ue(this);for(let i=0,o=this.length;i<o;i++)gt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ue)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){br(),Mc();const r=ue(this)[e].apply(this,n);return Lc(),Rr(),r}}),t}function Jy(t){const e=ue(this);return gt(e,"has",t),e.hasOwnProperty(t)}class ap{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?cv:hp:i?up:cp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=z(e);if(!s){if(o&&ce(wh,n))return Reflect.get(wh,n,r);if(n==="hasOwnProperty")return Jy}const a=Reflect.get(e,n,r);return(jn(n)?op.has(n):Gy(n))||(s||gt(e,"get",n),i)?a:$e(a)?o&&Dc(n)?a:a.value:Ae(a)?s?fp(a):ds(a):a}}class lp extends ap{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Yr(i);if(!Ro(r)&&!Yr(r)&&(i=ue(i),r=ue(r)),!z(e)&&$e(i)&&!$e(r))return l?!1:(i.value=r,!0)}const o=z(e)&&Dc(n)?Number(n)<e.length:ce(e,n),a=Reflect.set(e,n,r,s);return e===ue(s)&&(o?Bn(r,i)&&mn(e,"set",n,r):mn(e,"add",n,r)),a}deleteProperty(e,n){const r=ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&mn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!jn(n)||!op.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",z(e)?"length":mr),Reflect.ownKeys(e)}}class Yy extends ap{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xy=new lp,Zy=new Yy,ev=new lp(!0),Uc=t=>t,la=t=>Reflect.getPrototypeOf(t);function zi(t,e,n=!1,r=!1){t=t.__v_raw;const s=ue(t),i=ue(e);n||(Bn(e,i)&&gt(s,"get",e),gt(s,"get",i));const{has:o}=la(s),a=r?Uc:n?jc:Js;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ki(t,e=!1){const n=this.__v_raw,r=ue(n),s=ue(t);return e||(Bn(t,s)&&gt(r,"has",t),gt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Gi(t,e=!1){return t=t.__v_raw,!e&&gt(ue(t),"iterate",mr),Reflect.get(t,"size",t)}function Ih(t){t=ue(t);const e=ue(this);return la(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function Th(t,e){e=ue(e);const n=ue(this),{has:r,get:s}=la(n);let i=r.call(n,t);i||(t=ue(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Bn(e,o)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function Ah(t){const e=ue(this),{has:n,get:r}=la(e);let s=n.call(e,t);s||(t=ue(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&mn(e,"delete",t,void 0),i}function bh(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function Qi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ue(o),l=e?Uc:t?jc:Js;return!t&&gt(a,"iterate",mr),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Ji(t,e,n){return function(...r){const s=this.__v_raw,i=ue(s),o=Br(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Uc:e?jc:Js;return!e&&gt(i,"iterate",l?Ul:mr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Tn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function tv(){const t={get(i){return zi(this,i)},get size(){return Gi(this)},has:Ki,add:Ih,set:Th,delete:Ah,clear:bh,forEach:Qi(!1,!1)},e={get(i){return zi(this,i,!1,!0)},get size(){return Gi(this)},has:Ki,add:Ih,set:Th,delete:Ah,clear:bh,forEach:Qi(!1,!0)},n={get(i){return zi(this,i,!0)},get size(){return Gi(this,!0)},has(i){return Ki.call(this,i,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:Qi(!0,!1)},r={get(i){return zi(this,i,!0,!0)},get size(){return Gi(this,!0)},has(i){return Ki.call(this,i,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:Qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ji(i,!1,!1),n[i]=Ji(i,!0,!1),e[i]=Ji(i,!1,!0),r[i]=Ji(i,!0,!0)}),[t,n,e,r]}const[nv,rv,sv,iv]=tv();function Fc(t,e){const n=e?t?iv:sv:t?rv:nv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const ov={get:Fc(!1,!1)},av={get:Fc(!1,!0)},lv={get:Fc(!0,!1)},cp=new WeakMap,up=new WeakMap,hp=new WeakMap,cv=new WeakMap;function uv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hv(t){return t.__v_skip||!Object.isExtensible(t)?0:uv(Dy(t))}function ds(t){return Yr(t)?t:$c(t,!1,Xy,ov,cp)}function dp(t){return $c(t,!1,ev,av,up)}function fp(t){return $c(t,!0,Zy,lv,hp)}function $c(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=hv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Mn(t){return Yr(t)?Mn(t.__v_raw):!!(t&&t.__v_isReactive)}function Yr(t){return!!(t&&t.__v_isReadonly)}function Ro(t){return!!(t&&t.__v_isShallow)}function pp(t){return Mn(t)||Yr(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function ca(t){return Object.isExtensible(t)&&Ao(t,"__v_skip",!0),t}const Js=t=>Ae(t)?ds(t):t,jc=t=>Ae(t)?fp(t):t;class mp{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Vc(()=>e(this._value),()=>uo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ue(this);return(!e._cacheable||e.effect.dirty)&&Bn(e._value,e._value=e.effect.run())&&uo(e,4),gp(e),e.effect._dirtyLevel>=2&&uo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function dv(t,e,n=!1){let r,s;const i=te(t);return i?(r=t,s=kt):(r=t.get,s=t.set),new mp(r,s,i||!s,n)}function gp(t){var e;Vn&&pr&&(t=ue(t),rp(pr,(e=t.dep)!=null?e:t.dep=ip(()=>t.dep=void 0,t instanceof mp?t:void 0)))}function uo(t,e=4,n){t=ue(t);const r=t.dep;r&&sp(r,e)}function $e(t){return!!(t&&t.__v_isRef===!0)}function pe(t){return _p(t,!1)}function fv(t){return _p(t,!0)}function _p(t,e){return $e(t)?t:new pv(t,e)}class pv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Js(e)}get value(){return gp(this),this._value}set value(e){const n=this.__v_isShallow||Ro(e)||Yr(e);e=n?e:ue(e),Bn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Js(e),uo(this,4))}}function K(t){return $e(t)?t.value:t}const mv={get:(t,e,n)=>K(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function yp(t){return Mn(t)?t:new Proxy(t,mv)}function gv(t){const e=z(t)?new Array(t.length):{};for(const n in t)e[n]=yv(t,n);return e}class _v{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ky(ue(this._object),this._key)}}function yv(t,e,n){const r=t[e];return $e(r)?r:new _v(t,e,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ln(t,e,n,r){try{return r?t(...r):t()}catch(s){ua(s,e,n)}}function Mt(t,e,n,r){if(te(t)){const i=Ln(t,e,n,r);return i&&zf(i)&&i.catch(o=>{ua(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Mt(t[i],e,n,r));return s}function ua(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Ln(l,null,10,[t,o,a]);return}}vv(t,n,s,r)}function vv(t,e,n,r=!0){console.error(t)}let Ys=!1,Fl=!1;const st=[];let zt=0;const qr=[];let Sn=null,sr=0;const vp=Promise.resolve();let Bc=null;function ha(t){const e=Bc||vp;return t?e.then(this?t.bind(this):t):e}function Ev(t){let e=zt+1,n=st.length;for(;e<n;){const r=e+n>>>1,s=st[r],i=Xs(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function qc(t){(!st.length||!st.includes(t,Ys&&t.allowRecurse?zt+1:zt))&&(t.id==null?st.push(t):st.splice(Ev(t.id),0,t),Ep())}function Ep(){!Ys&&!Fl&&(Fl=!0,Bc=vp.then(Ip))}function wv(t){const e=st.indexOf(t);e>zt&&st.splice(e,1)}function Iv(t){z(t)?qr.push(...t):(!Sn||!Sn.includes(t,t.allowRecurse?sr+1:sr))&&qr.push(t),Ep()}function Rh(t,e,n=Ys?zt+1:0){for(;n<st.length;n++){const r=st[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;st.splice(n,1),n--,r()}}}function wp(t){if(qr.length){const e=[...new Set(qr)].sort((n,r)=>Xs(n)-Xs(r));if(qr.length=0,Sn){Sn.push(...e);return}for(Sn=e,sr=0;sr<Sn.length;sr++)Sn[sr]();Sn=null,sr=0}}const Xs=t=>t.id==null?1/0:t.id,Tv=(t,e)=>{const n=Xs(t)-Xs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ip(t){Fl=!1,Ys=!0,st.sort(Tv);try{for(zt=0;zt<st.length;zt++){const e=st[zt];e&&e.active!==!1&&Ln(e,null,14)}}finally{zt=0,st.length=0,wp(),Ys=!1,Bc=null,(st.length||qr.length)&&Ip()}}function Av(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||be;d&&(s=n.map(p=>Fe(p)?p.trim():p)),h&&(s=n.map(Qs))}let a,l=r[a=sl(e)]||r[a=sl(rn(e))];!l&&i&&(l=r[a=sl(hs(e))]),l&&Mt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Mt(c,t,6,s)}}function Tp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!te(t)){const l=c=>{const u=Tp(c,e,!0);u&&(a=!0,Xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ae(t)&&r.set(t,null),null):(z(i)?i.forEach(l=>o[l]=null):Xe(o,i),Ae(t)&&r.set(t,o),o)}function da(t,e){return!t||!ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,hs(e))||ce(t,e))}let Le=null,Ap=null;function So(t){const e=Le;return Le=t,Ap=t&&t.type.__scopeId||null,e}function Lt(t,e=Le,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Lh(-1);const i=So(e);let o;try{o=t(...s)}finally{So(i),r._d&&Lh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ol(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:y,inheritAttrs:b}=t;let E,S;const D=So(t);try{if(n.shapeFlag&4){const j=s||r,Y=j;E=Wt(u.call(Y,j,h,i,p,d,y)),S=l}else{const j=e;E=Wt(j.length>1?j(i,{attrs:l,slots:a,emit:c}):j(i,null)),S=e.props?l:bv(l)}}catch(j){Us.length=0,ua(j,t,1),E=ke(qn)}let M=E;if(S&&b!==!1){const j=Object.keys(S),{shapeFlag:Y}=M;j.length&&Y&7&&(o&&j.some(kc)&&(S=Rv(S,o)),M=Xr(M,S))}return n.dirs&&(M=Xr(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),E=M,So(D),E}const bv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ra(n))&&((e||(e={}))[n]=t[n]);return e},Rv=(t,e)=>{const n={};for(const r in t)(!kc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Sv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Sh(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!da(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Sh(r,o,c):!0:!!o;return!1}function Sh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!da(n,i))return!0}return!1}function Pv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const bp="components";function Rp(t,e){return xv(bp,t,!0,e)||t}const Cv=Symbol.for("v-ndc");function xv(t,e,n=!0,r=!1){const s=Le||Ge;if(s){const i=s.type;if(t===bp){const a=TE(i,!1);if(a&&(a===e||a===rn(e)||a===oa(rn(e))))return i}const o=Ph(s[t]||i[t],e)||Ph(s.appContext[t],e);return!o&&r?i:o}}function Ph(t,e){return t&&(t[e]||t[rn(e)]||t[oa(rn(e))])}const kv=t=>t.__isSuspense;function Ov(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Iv(t)}const Dv=Symbol.for("v-scx"),Nv=()=>Ut(Dv),Yi={};function Vs(t,e,n){return Sp(t,e,n)}function Sp(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=be){if(e&&i){const B=e;e=(...he)=>{B(...he),Y()}}const l=Ge,c=B=>r===!0?B:ar(B,r===!1?1:void 0);let u,h=!1,d=!1;if($e(t)?(u=()=>t.value,h=Ro(t)):Mn(t)?(u=()=>c(t),h=!0):z(t)?(d=!0,h=t.some(B=>Mn(B)||Ro(B)),u=()=>t.map(B=>{if($e(B))return B.value;if(Mn(B))return c(B);if(te(B))return Ln(B,l,2)})):te(t)?e?u=()=>Ln(t,l,2):u=()=>(p&&p(),Mt(t,l,3,[y])):u=kt,e&&r){const B=u;u=()=>ar(B())}let p,y=B=>{p=M.onStop=()=>{Ln(B,l,4),p=M.onStop=void 0}},b;if(ga)if(y=kt,e?n&&Mt(e,l,3,[u(),d?[]:void 0,y]):u(),s==="sync"){const B=Nv();b=B.__watcherHandles||(B.__watcherHandles=[])}else return kt;let E=d?new Array(t.length).fill(Yi):Yi;const S=()=>{if(!(!M.active||!M.dirty))if(e){const B=M.run();(r||h||(d?B.some((he,ee)=>Bn(he,E[ee])):Bn(B,E)))&&(p&&p(),Mt(e,l,3,[B,E===Yi?void 0:d&&E[0]===Yi?[]:E,y]),E=B)}else M.run()};S.allowRecurse=!!e;let D;s==="sync"?D=S:s==="post"?D=()=>ft(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),D=()=>qc(S));const M=new Vc(u,kt,D),j=ep(),Y=()=>{M.stop(),j&&Oc(j.effects,M)};return e?n?S():E=M.run():s==="post"?ft(M.run.bind(M),l&&l.suspense):M.run(),b&&b.push(Y),Y}function Vv(t,e,n){const r=this.proxy,s=Fe(t)?t.includes(".")?Pp(r,t):()=>r[t]:t.bind(r,r);let i;te(e)?i=e:(i=e.handler,n=e);const o=wi(this),a=Sp(s,i.bind(r),n);return o(),a}function Pp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ar(t,e,n=0,r){if(!Ae(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),$e(t))ar(t.value,e,n,r);else if(z(t))for(let s=0;s<t.length;s++)ar(t[s],e,n,r);else if(sa(t)||Br(t))t.forEach(s=>{ar(s,e,n,r)});else if(Gf(t))for(const s in t)ar(t[s],e,n,r);return t}function ct(t,e){if(Le===null)return t;const n=_a(Le)||Le.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=be]=e[s];i&&(te(i)&&(i={mounted:i,updated:i}),i.deep&&ar(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function tr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(br(),Mt(l,n,8,[t.el,a,t,e]),Rr())}}/*! #__NO_SIDE_EFFECTS__ */function Rt(t,e){return te(t)?Xe({name:t.name},e,{setup:t}):t}const Ms=t=>!!t.type.__asyncLoader,Cp=t=>t.type.__isKeepAlive;function Mv(t,e){xp(t,"a",e)}function Lv(t,e){xp(t,"da",e)}function xp(t,e,n=Ge){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Cp(s.parent.vnode)&&Uv(r,e,n,s),s=s.parent}}function Uv(t,e,n,r){const s=fa(e,t,r,!0);kp(()=>{Oc(r[e],s)},n)}function fa(t,e,n=Ge,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;br();const a=wi(n),l=Mt(e,n,t,o);return a(),Rr(),l});return r?s.unshift(i):s.push(i),i}}const wn=t=>(e,n=Ge)=>(!ga||t==="sp")&&fa(t,(...r)=>e(...r),n),Fv=wn("bm"),Hc=wn("m"),$v=wn("bu"),jv=wn("u"),Bv=wn("bum"),kp=wn("um"),qv=wn("sp"),Hv=wn("rtg"),Wv=wn("rtc");function zv(t,e=Ge){fa("ec",t,e)}function Wc(t,e,n,r){let s;const i=n&&n[r];if(z(t)||Fe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Op(t,e,n={},r,s){if(Le.isCE||Le.parent&&Ms(Le.parent)&&Le.parent.isCE)return e!=="default"&&(n.name=e),ke("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),re();const o=i&&Dp(i(n)),a=_t(ut,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Dp(t){return t.some(e=>Co(e)?!(e.type===qn||e.type===ut&&!Dp(e.children)):!0)?t:null}const $l=t=>t?Wp(t)?_a(t)||t.proxy:$l(t.parent):null,Ls=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$l(t.parent),$root:t=>$l(t.root),$emit:t=>t.emit,$options:t=>zc(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,qc(t.update)}),$nextTick:t=>t.n||(t.n=ha.bind(t.proxy)),$watch:t=>Vv.bind(t)}),al=(t,e)=>t!==be&&!t.__isScriptSetup&&ce(t,e),Kv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(al(r,e))return o[e]=1,r[e];if(s!==be&&ce(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,i[e];if(n!==be&&ce(n,e))return o[e]=4,n[e];jl&&(o[e]=0)}}const u=Ls[e];let h,d;if(u)return e==="$attrs"&&gt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&ce(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return al(s,e)?(s[e]=n,!0):r!==be&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==be&&ce(t,o)||al(e,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(Ls,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ch(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let jl=!0;function Gv(t){const e=zc(t),n=t.proxy,r=t.ctx;jl=!1,e.beforeCreate&&xh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:y,activated:b,deactivated:E,beforeDestroy:S,beforeUnmount:D,destroyed:M,unmounted:j,render:Y,renderTracked:B,renderTriggered:he,errorCaptured:ee,serverPrefetch:se,expose:Ie,inheritAttrs:Ze,components:yt,directives:St,filters:er}=e;if(c&&Qv(c,r,null),o)for(const ve in o){const me=o[ve];te(me)&&(r[ve]=me.bind(n))}if(s){const ve=s.call(n,n);Ae(ve)&&(t.data=ds(ve))}if(jl=!0,i)for(const ve in i){const me=i[ve],un=te(me)?me.bind(n,n):te(me.get)?me.get.bind(n,n):kt,In=!te(me)&&te(me.set)?me.set.bind(n):kt,Bt=Ct({get:un,set:In});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:dt=>Bt.value=dt})}if(a)for(const ve in a)Np(a[ve],r,n,ve);if(l){const ve=te(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(me=>{ho(me,ve[me])})}u&&xh(u,t,"c");function de(ve,me){z(me)?me.forEach(un=>ve(un.bind(n))):me&&ve(me.bind(n))}if(de(Fv,h),de(Hc,d),de($v,p),de(jv,y),de(Mv,b),de(Lv,E),de(zv,ee),de(Wv,B),de(Hv,he),de(Bv,D),de(kp,j),de(qv,se),z(Ie))if(Ie.length){const ve=t.exposed||(t.exposed={});Ie.forEach(me=>{Object.defineProperty(ve,me,{get:()=>n[me],set:un=>n[me]=un})})}else t.exposed||(t.exposed={});Y&&t.render===kt&&(t.render=Y),Ze!=null&&(t.inheritAttrs=Ze),yt&&(t.components=yt),St&&(t.directives=St)}function Qv(t,e,n=kt){z(t)&&(t=Bl(t));for(const r in t){const s=t[r];let i;Ae(s)?"default"in s?i=Ut(s.from||r,s.default,!0):i=Ut(s.from||r):i=Ut(s),$e(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function xh(t,e,n){Mt(z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Np(t,e,n,r){const s=r.includes(".")?Pp(n,r):()=>n[r];if(Fe(t)){const i=e[t];te(i)&&Vs(s,i)}else if(te(t))Vs(s,t.bind(n));else if(Ae(t))if(z(t))t.forEach(i=>Np(i,e,n,r));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&Vs(s,i,t)}}function zc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Po(l,c,o,!0)),Po(l,e,o)),Ae(e)&&i.set(e,l),l}function Po(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Po(t,i,n,!0),s&&s.forEach(o=>Po(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Jv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jv={data:kh,props:Oh,emits:Oh,methods:Ss,computed:Ss,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:Ss,directives:Ss,watch:Xv,provide:kh,inject:Yv};function kh(t,e){return e?t?function(){return Xe(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function Yv(t,e){return Ss(Bl(t),Bl(e))}function Bl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ss(t,e){return t?Xe(Object.create(null),t,e):e}function Oh(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:Xe(Object.create(null),Ch(t),Ch(e??{})):e}function Xv(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function Vp(){return{app:null,config:{isNativeTag:ky,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zv=0;function eE(t,e){return function(r,s=null){te(r)||(r=Xe({},r)),s!=null&&!Ae(s)&&(s=null);const i=Vp(),o=new WeakSet;let a=!1;const l=i.app={_uid:Zv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bE,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&te(c.install)?(o.add(c),c.install(l,...u)):te(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=ke(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,_a(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=Hr;Hr=l;try{return c()}finally{Hr=u}}};return l}}let Hr=null;function ho(t,e){if(Ge){let n=Ge.provides;const r=Ge.parent&&Ge.parent.provides;r===n&&(n=Ge.provides=Object.create(r)),n[t]=e}}function Ut(t,e,n=!1){const r=Ge||Le;if(r||Hr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Hr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&te(e)?e.call(r&&r.proxy):e}}function tE(){return!!(Ge||Le||Hr)}function nE(t,e,n,r=!1){const s={},i={};Ao(i,ma,1),t.propsDefaults=Object.create(null),Mp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:dp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function rE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ue(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(da(t.emitsOptions,d))continue;const p=e[d];if(l)if(ce(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const y=rn(d);s[y]=ql(l,a,y,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{Mp(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=hs(h))===h||!ce(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ql(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],c=!0)}c&&mn(t,"set","$attrs")}function Mp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ns(l))continue;const c=e[l];let u;s&&ce(s,u=rn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:da(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ue(n),c=a||be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ql(s,l,h,c[h],t,!ce(c,h))}}return o}function ql(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&te(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=wi(s);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===hs(n))&&(r=!0))}return r}function Lp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!te(t)){const u=h=>{l=!0;const[d,p]=Lp(h,e,!0);Xe(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ae(t)&&r.set(t,jr),jr;if(z(i))for(let u=0;u<i.length;u++){const h=rn(i[u]);Dh(h)&&(o[h]=be)}else if(i)for(const u in i){const h=rn(u);if(Dh(h)){const d=i[u],p=o[h]=z(d)||te(d)?{type:d}:Xe({},d);if(p){const y=Mh(Boolean,p.type),b=Mh(String,p.type);p[0]=y>-1,p[1]=b<0||y<b,(y>-1||ce(p,"default"))&&a.push(h)}}}const c=[o,a];return Ae(t)&&r.set(t,c),c}function Dh(t){return t[0]!=="$"&&!Ns(t)}function Nh(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Vh(t,e){return Nh(t)===Nh(e)}function Mh(t,e){return z(e)?e.findIndex(n=>Vh(n,t)):te(e)&&Vh(e,t)?0:-1}const Up=t=>t[0]==="_"||t==="$stable",Kc=t=>z(t)?t.map(Wt):[Wt(t)],sE=(t,e,n)=>{if(e._n)return e;const r=Lt((...s)=>Kc(e(...s)),n);return r._c=!1,r},Fp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Up(s))continue;const i=t[s];if(te(i))e[s]=sE(s,i,r);else if(i!=null){const o=Kc(i);e[s]=()=>o}}},$p=(t,e)=>{const n=Kc(e);t.slots.default=()=>n},iE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Ao(e,"_",n)):Fp(e,t.slots={})}else t.slots={},e&&$p(t,e);Ao(t.slots,ma,1)},oE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=be;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Xe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Fp(e,s)),o=e}else e&&($p(t,e),o={default:1});if(i)for(const a in s)!Up(a)&&o[a]==null&&delete s[a]};function Hl(t,e,n,r,s=!1){if(z(t)){t.forEach((d,p)=>Hl(d,e&&(z(e)?e[p]:e),n,r,s));return}if(Ms(r)&&!s)return;const i=r.shapeFlag&4?_a(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,ce(h,c)&&(h[c]=null)):$e(c)&&(c.value=null)),te(l))Ln(l,a,12,[o,u]);else{const d=Fe(l),p=$e(l);if(d||p){const y=()=>{if(t.f){const b=d?ce(h,l)?h[l]:u[l]:l.value;s?z(b)&&Oc(b,i):z(b)?b.includes(i)||b.push(i):d?(u[l]=[i],ce(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ce(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ft(y,n)):y()}}}const ft=Ov;function aE(t){return lE(t)}function lE(t,e){const n=Qf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=kt,insertStaticContent:y}=t,b=(f,m,_,T=null,v=null,C=null,V=void 0,P=null,x=!!m.dynamicChildren)=>{if(f===m)return;f&&!Is(f,m)&&(T=w(f),dt(f,v,C,!0),f=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:R,ref:F,shapeFlag:W}=m;switch(R){case pa:E(f,m,_,T);break;case qn:S(f,m,_,T);break;case cl:f==null&&D(m,_,T,V);break;case ut:yt(f,m,_,T,v,C,V,P,x);break;default:W&1?Y(f,m,_,T,v,C,V,P,x):W&6?St(f,m,_,T,v,C,V,P,x):(W&64||W&128)&&R.process(f,m,_,T,v,C,V,P,x,$)}F!=null&&v&&Hl(F,f&&f.ref,C,m||f,!m)},E=(f,m,_,T)=>{if(f==null)r(m.el=a(m.children),_,T);else{const v=m.el=f.el;m.children!==f.children&&c(v,m.children)}},S=(f,m,_,T)=>{f==null?r(m.el=l(m.children||""),_,T):m.el=f.el},D=(f,m,_,T)=>{[f.el,f.anchor]=y(f.children,m,_,T,f.el,f.anchor)},M=({el:f,anchor:m},_,T)=>{let v;for(;f&&f!==m;)v=d(f),r(f,_,T),f=v;r(m,_,T)},j=({el:f,anchor:m})=>{let _;for(;f&&f!==m;)_=d(f),s(f),f=_;s(m)},Y=(f,m,_,T,v,C,V,P,x)=>{m.type==="svg"?V="svg":m.type==="math"&&(V="mathml"),f==null?B(m,_,T,v,C,V,P,x):se(f,m,v,C,V,P,x)},B=(f,m,_,T,v,C,V,P)=>{let x,R;const{props:F,shapeFlag:W,transition:q,dirs:X}=f;if(x=f.el=o(f.type,C,F&&F.is,F),W&8?u(x,f.children):W&16&&ee(f.children,x,null,T,v,ll(f,C),V,P),X&&tr(f,null,T,"created"),he(x,f,f.scopeId,V,T),F){for(const Ee in F)Ee!=="value"&&!Ns(Ee)&&i(x,Ee,null,F[Ee],C,f.children,T,v,et);"value"in F&&i(x,"value",null,F.value,C),(R=F.onVnodeBeforeMount)&&Ht(R,T,f)}X&&tr(f,null,T,"beforeMount");const ie=cE(v,q);ie&&q.beforeEnter(x),r(x,m,_),((R=F&&F.onVnodeMounted)||ie||X)&&ft(()=>{R&&Ht(R,T,f),ie&&q.enter(x),X&&tr(f,null,T,"mounted")},v)},he=(f,m,_,T,v)=>{if(_&&p(f,_),T)for(let C=0;C<T.length;C++)p(f,T[C]);if(v){let C=v.subTree;if(m===C){const V=v.vnode;he(f,V,V.scopeId,V.slotScopeIds,v.parent)}}},ee=(f,m,_,T,v,C,V,P,x=0)=>{for(let R=x;R<f.length;R++){const F=f[R]=P?Pn(f[R]):Wt(f[R]);b(null,F,m,_,T,v,C,V,P)}},se=(f,m,_,T,v,C,V)=>{const P=m.el=f.el;let{patchFlag:x,dynamicChildren:R,dirs:F}=m;x|=f.patchFlag&16;const W=f.props||be,q=m.props||be;let X;if(_&&nr(_,!1),(X=q.onVnodeBeforeUpdate)&&Ht(X,_,m,f),F&&tr(m,f,_,"beforeUpdate"),_&&nr(_,!0),R?Ie(f.dynamicChildren,R,P,_,T,ll(m,v),C):V||me(f,m,P,null,_,T,ll(m,v),C,!1),x>0){if(x&16)Ze(P,m,W,q,_,T,v);else if(x&2&&W.class!==q.class&&i(P,"class",null,q.class,v),x&4&&i(P,"style",W.style,q.style,v),x&8){const ie=m.dynamicProps;for(let Ee=0;Ee<ie.length;Ee++){const Ce=ie[Ee],je=W[Ce],Nt=q[Ce];(Nt!==je||Ce==="value")&&i(P,Ce,je,Nt,v,f.children,_,T,et)}}x&1&&f.children!==m.children&&u(P,m.children)}else!V&&R==null&&Ze(P,m,W,q,_,T,v);((X=q.onVnodeUpdated)||F)&&ft(()=>{X&&Ht(X,_,m,f),F&&tr(m,f,_,"updated")},T)},Ie=(f,m,_,T,v,C,V)=>{for(let P=0;P<m.length;P++){const x=f[P],R=m[P],F=x.el&&(x.type===ut||!Is(x,R)||x.shapeFlag&70)?h(x.el):_;b(x,R,F,null,T,v,C,V,!0)}},Ze=(f,m,_,T,v,C,V)=>{if(_!==T){if(_!==be)for(const P in _)!Ns(P)&&!(P in T)&&i(f,P,_[P],null,V,m.children,v,C,et);for(const P in T){if(Ns(P))continue;const x=T[P],R=_[P];x!==R&&P!=="value"&&i(f,P,R,x,V,m.children,v,C,et)}"value"in T&&i(f,"value",_.value,T.value,V)}},yt=(f,m,_,T,v,C,V,P,x)=>{const R=m.el=f?f.el:a(""),F=m.anchor=f?f.anchor:a("");let{patchFlag:W,dynamicChildren:q,slotScopeIds:X}=m;X&&(P=P?P.concat(X):X),f==null?(r(R,_,T),r(F,_,T),ee(m.children||[],_,F,v,C,V,P,x)):W>0&&W&64&&q&&f.dynamicChildren?(Ie(f.dynamicChildren,q,_,v,C,V,P),(m.key!=null||v&&m===v.subTree)&&jp(f,m,!0)):me(f,m,_,F,v,C,V,P,x)},St=(f,m,_,T,v,C,V,P,x)=>{m.slotScopeIds=P,f==null?m.shapeFlag&512?v.ctx.activate(m,_,T,V,x):er(m,_,T,v,C,V,x):Pt(f,m,x)},er=(f,m,_,T,v,C,V)=>{const P=f.component=yE(f,T,v);if(Cp(f)&&(P.ctx.renderer=$),vE(P),P.asyncDep){if(v&&v.registerDep(P,de),!f.el){const x=P.subTree=ke(qn);S(null,x,m,_)}}else de(P,f,m,_,v,C,V)},Pt=(f,m,_)=>{const T=m.component=f.component;if(Sv(f,m,_))if(T.asyncDep&&!T.asyncResolved){ve(T,m,_);return}else T.next=m,wv(T.update),T.effect.dirty=!0,T.update();else m.el=f.el,T.vnode=m},de=(f,m,_,T,v,C,V)=>{const P=()=>{if(f.isMounted){let{next:F,bu:W,u:q,parent:X,vnode:ie}=f;{const Dr=Bp(f);if(Dr){F&&(F.el=ie.el,ve(f,F,V)),Dr.asyncDep.then(()=>{f.isUnmounted||P()});return}}let Ee=F,Ce;nr(f,!1),F?(F.el=ie.el,ve(f,F,V)):F=ie,W&&co(W),(Ce=F.props&&F.props.onVnodeBeforeUpdate)&&Ht(Ce,X,F,ie),nr(f,!0);const je=ol(f),Nt=f.subTree;f.subTree=je,b(Nt,je,h(Nt.el),w(Nt),f,v,C),F.el=je.el,Ee===null&&Pv(f,je.el),q&&ft(q,v),(Ce=F.props&&F.props.onVnodeUpdated)&&ft(()=>Ht(Ce,X,F,ie),v)}else{let F;const{el:W,props:q}=m,{bm:X,m:ie,parent:Ee}=f,Ce=Ms(m);if(nr(f,!1),X&&co(X),!Ce&&(F=q&&q.onVnodeBeforeMount)&&Ht(F,Ee,m),nr(f,!0),W&&Pe){const je=()=>{f.subTree=ol(f),Pe(W,f.subTree,f,v,null)};Ce?m.type.__asyncLoader().then(()=>!f.isUnmounted&&je()):je()}else{const je=f.subTree=ol(f);b(null,je,_,T,f,v,C),m.el=je.el}if(ie&&ft(ie,v),!Ce&&(F=q&&q.onVnodeMounted)){const je=m;ft(()=>Ht(F,Ee,je),v)}(m.shapeFlag&256||Ee&&Ms(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&f.a&&ft(f.a,v),f.isMounted=!0,m=_=T=null}},x=f.effect=new Vc(P,kt,()=>qc(R),f.scope),R=f.update=()=>{x.dirty&&x.run()};R.id=f.uid,nr(f,!0),R()},ve=(f,m,_)=>{m.component=f;const T=f.vnode.props;f.vnode=m,f.next=null,rE(f,m.props,T,_),oE(f,m.children,_),br(),Rh(f),Rr()},me=(f,m,_,T,v,C,V,P,x=!1)=>{const R=f&&f.children,F=f?f.shapeFlag:0,W=m.children,{patchFlag:q,shapeFlag:X}=m;if(q>0){if(q&128){In(R,W,_,T,v,C,V,P,x);return}else if(q&256){un(R,W,_,T,v,C,V,P,x);return}}X&8?(F&16&&et(R,v,C),W!==R&&u(_,W)):F&16?X&16?In(R,W,_,T,v,C,V,P,x):et(R,v,C,!0):(F&8&&u(_,""),X&16&&ee(W,_,T,v,C,V,P,x))},un=(f,m,_,T,v,C,V,P,x)=>{f=f||jr,m=m||jr;const R=f.length,F=m.length,W=Math.min(R,F);let q;for(q=0;q<W;q++){const X=m[q]=x?Pn(m[q]):Wt(m[q]);b(f[q],X,_,null,v,C,V,P,x)}R>F?et(f,v,C,!0,!1,W):ee(m,_,T,v,C,V,P,x,W)},In=(f,m,_,T,v,C,V,P,x)=>{let R=0;const F=m.length;let W=f.length-1,q=F-1;for(;R<=W&&R<=q;){const X=f[R],ie=m[R]=x?Pn(m[R]):Wt(m[R]);if(Is(X,ie))b(X,ie,_,null,v,C,V,P,x);else break;R++}for(;R<=W&&R<=q;){const X=f[W],ie=m[q]=x?Pn(m[q]):Wt(m[q]);if(Is(X,ie))b(X,ie,_,null,v,C,V,P,x);else break;W--,q--}if(R>W){if(R<=q){const X=q+1,ie=X<F?m[X].el:T;for(;R<=q;)b(null,m[R]=x?Pn(m[R]):Wt(m[R]),_,ie,v,C,V,P,x),R++}}else if(R>q)for(;R<=W;)dt(f[R],v,C,!0),R++;else{const X=R,ie=R,Ee=new Map;for(R=ie;R<=q;R++){const vt=m[R]=x?Pn(m[R]):Wt(m[R]);vt.key!=null&&Ee.set(vt.key,R)}let Ce,je=0;const Nt=q-ie+1;let Dr=!1,ph=0;const ws=new Array(Nt);for(R=0;R<Nt;R++)ws[R]=0;for(R=X;R<=W;R++){const vt=f[R];if(je>=Nt){dt(vt,v,C,!0);continue}let qt;if(vt.key!=null)qt=Ee.get(vt.key);else for(Ce=ie;Ce<=q;Ce++)if(ws[Ce-ie]===0&&Is(vt,m[Ce])){qt=Ce;break}qt===void 0?dt(vt,v,C,!0):(ws[qt-ie]=R+1,qt>=ph?ph=qt:Dr=!0,b(vt,m[qt],_,null,v,C,V,P,x),je++)}const mh=Dr?uE(ws):jr;for(Ce=mh.length-1,R=Nt-1;R>=0;R--){const vt=ie+R,qt=m[vt],gh=vt+1<F?m[vt+1].el:T;ws[R]===0?b(null,qt,_,gh,v,C,V,P,x):Dr&&(Ce<0||R!==mh[Ce]?Bt(qt,_,gh,2):Ce--)}}},Bt=(f,m,_,T,v=null)=>{const{el:C,type:V,transition:P,children:x,shapeFlag:R}=f;if(R&6){Bt(f.component.subTree,m,_,T);return}if(R&128){f.suspense.move(m,_,T);return}if(R&64){V.move(f,m,_,$);return}if(V===ut){r(C,m,_);for(let W=0;W<x.length;W++)Bt(x[W],m,_,T);r(f.anchor,m,_);return}if(V===cl){M(f,m,_);return}if(T!==2&&R&1&&P)if(T===0)P.beforeEnter(C),r(C,m,_),ft(()=>P.enter(C),v);else{const{leave:W,delayLeave:q,afterLeave:X}=P,ie=()=>r(C,m,_),Ee=()=>{W(C,()=>{ie(),X&&X()})};q?q(C,ie,Ee):Ee()}else r(C,m,_)},dt=(f,m,_,T=!1,v=!1)=>{const{type:C,props:V,ref:P,children:x,dynamicChildren:R,shapeFlag:F,patchFlag:W,dirs:q}=f;if(P!=null&&Hl(P,null,_,f,!0),F&256){m.ctx.deactivate(f);return}const X=F&1&&q,ie=!Ms(f);let Ee;if(ie&&(Ee=V&&V.onVnodeBeforeUnmount)&&Ht(Ee,m,f),F&6)Wi(f.component,_,T);else{if(F&128){f.suspense.unmount(_,T);return}X&&tr(f,null,m,"beforeUnmount"),F&64?f.type.remove(f,m,_,v,$,T):R&&(C!==ut||W>0&&W&64)?et(R,m,_,!1,!0):(C===ut&&W&384||!v&&F&16)&&et(x,m,_),T&&kr(f)}(ie&&(Ee=V&&V.onVnodeUnmounted)||X)&&ft(()=>{Ee&&Ht(Ee,m,f),X&&tr(f,null,m,"unmounted")},_)},kr=f=>{const{type:m,el:_,anchor:T,transition:v}=f;if(m===ut){Or(_,T);return}if(m===cl){j(f);return}const C=()=>{s(_),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:V,delayLeave:P}=v,x=()=>V(_,C);P?P(f.el,C,x):x()}else C()},Or=(f,m)=>{let _;for(;f!==m;)_=d(f),s(f),f=_;s(m)},Wi=(f,m,_)=>{const{bum:T,scope:v,update:C,subTree:V,um:P}=f;T&&co(T),v.stop(),C&&(C.active=!1,dt(V,f,m,_)),P&&ft(P,m),ft(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},et=(f,m,_,T=!1,v=!1,C=0)=>{for(let V=C;V<f.length;V++)dt(f[V],m,_,T,v)},w=f=>f.shapeFlag&6?w(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let U=!1;const N=(f,m,_)=>{f==null?m._vnode&&dt(m._vnode,null,null,!0):b(m._vnode||null,f,m,null,null,null,_),U||(U=!0,Rh(),wp(),U=!1),m._vnode=f},$={p:b,um:dt,m:Bt,r:kr,mt:er,mc:ee,pc:me,pbc:Ie,n:w,o:t};let ge,Pe;return e&&([ge,Pe]=e($)),{render:N,hydrate:ge,createApp:eE(N,ge)}}function ll({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function nr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function cE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function jp(t,e,n=!1){const r=t.children,s=e.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Pn(s[i]),a.el=o.el),n||jp(o,a)),a.type===pa&&(a.el=o.el)}}function uE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Bp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bp(e)}const hE=t=>t.__isTeleport,ut=Symbol.for("v-fgt"),pa=Symbol.for("v-txt"),qn=Symbol.for("v-cmt"),cl=Symbol.for("v-stc"),Us=[];let Vt=null;function re(t=!1){Us.push(Vt=t?null:[])}function dE(){Us.pop(),Vt=Us[Us.length-1]||null}let Zs=1;function Lh(t){Zs+=t}function qp(t){return t.dynamicChildren=Zs>0?Vt||jr:null,dE(),Zs>0&&Vt&&Vt.push(t),t}function we(t,e,n,r,s,i){return qp(g(t,e,n,r,s,i,!0))}function _t(t,e,n,r,s){return qp(ke(t,e,n,r,s,!0))}function Co(t){return t?t.__v_isVNode===!0:!1}function Is(t,e){return t.type===e.type&&t.key===e.key}const ma="__vInternal",Hp=({key:t})=>t??null,fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||$e(t)||te(t)?{i:Le,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,s=null,i=t===ut?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hp(e),ref:e&&fo(e),scopeId:Ap,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Le};return a?(Gc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),Zs>0&&!o&&Vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Vt.push(l),l}const ke=fE;function fE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Cv)&&(t=qn),Co(t)){const a=Xr(t,e,!0);return n&&Gc(a,n),Zs>0&&!i&&Vt&&(a.shapeFlag&6?Vt[Vt.indexOf(t)]=a:Vt.push(a)),a.patchFlag|=-2,a}if(AE(t)&&(t=t.__vccOpts),e){e=pE(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=_n(a)),Ae(l)&&(pp(l)&&!z(l)&&(l=Xe({},l)),e.style=Nc(l))}const o=Fe(t)?1:kv(t)?128:hE(t)?64:Ae(t)?4:te(t)?2:0;return g(t,e,n,r,s,o,i,!0)}function pE(t){return t?pp(t)||ma in t?Xe({},t):t:null}function Xr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?mE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Hp(a),ref:e&&e.ref?n&&s?z(s)?s.concat(fo(e)):[s,fo(e)]:fo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ut?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xr(t.ssContent),ssFallback:t.ssFallback&&Xr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ot(t=" ",e=0){return ke(pa,null,t,e)}function It(t="",e=!1){return e?(re(),_t(qn,null,t)):ke(qn,null,t)}function Wt(t){return t==null||typeof t=="boolean"?ke(qn):z(t)?ke(ut,null,t.slice()):typeof t=="object"?Pn(t):ke(pa,null,String(t))}function Pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xr(t)}function Gc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ma in e)?e._ctx=Le:s===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),r&64?(n=16,e=[Ot(e)]):n=8);t.children=e,t.shapeFlag|=n}function mE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=_n([e.class,r.class]));else if(s==="style")e.style=Nc([e.style,r.style]);else if(ra(s)){const i=e[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ht(t,e,n,r=null){Mt(t,e,7,[n,r])}const gE=Vp();let _E=0;function yE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gE,i={uid:_E++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lp(r,s),emitsOptions:Tp(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Av.bind(null,i),t.ce&&t.ce(i),i}let Ge=null,xo,Wl;{const t=Qf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};xo=e("__VUE_INSTANCE_SETTERS__",n=>Ge=n),Wl=e("__VUE_SSR_SETTERS__",n=>ga=n)}const wi=t=>{const e=Ge;return xo(t),t.scope.on(),()=>{t.scope.off(),xo(e)}},Uh=()=>{Ge&&Ge.scope.off(),xo(null)};function Wp(t){return t.vnode.shapeFlag&4}let ga=!1;function vE(t,e=!1){e&&Wl(e);const{props:n,children:r}=t.vnode,s=Wp(t);nE(t,n,s,e),iE(t,r);const i=s?EE(t,e):void 0;return e&&Wl(!1),i}function EE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ca(new Proxy(t.ctx,Kv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?IE(t):null,i=wi(t);br();const o=Ln(r,t,0,[t.props,s]);if(Rr(),i(),zf(o)){if(o.then(Uh,Uh),e)return o.then(a=>{Fh(t,a,e)}).catch(a=>{ua(a,t,0)});t.asyncDep=o}else Fh(t,o,e)}else zp(t,e)}function Fh(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=yp(e)),zp(t,n)}let $h;function zp(t,e,n){const r=t.type;if(!t.render){if(!e&&$h&&!r.render){const s=r.template||zc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Xe(Xe({isCustomElement:i,delimiters:a},o),l);r.render=$h(s,c)}}t.render=r.render||kt}{const s=wi(t);br();try{Gv(t)}finally{Rr(),s()}}}function wE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}}))}function IE(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return wE(t)},slots:t.slots,emit:t.emit,expose:e}}function _a(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yp(ca(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}}))}function TE(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function AE(t){return te(t)&&"__vccOpts"in t}const Ct=(t,e)=>dv(t,e,ga);function Kp(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!z(e)?Co(e)?ke(t,null,[e]):ke(t,e):ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Co(n)&&(n=[n]),ke(t,e,n))}const bE="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const RE="http://www.w3.org/2000/svg",SE="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,jh=Cn&&Cn.createElement("template"),PE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Cn.createElementNS(RE,t):e==="mathml"?Cn.createElementNS(SE,t):Cn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{jh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=jh.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},CE=Symbol("_vtc");function xE(t,e,n){const r=t[CE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bh=Symbol("_vod"),kE=Symbol("_vsh"),OE=Symbol(""),DE=/(^|;)\s*display\s*:/;function NE(t,e,n){const r=t.style,s=Fe(n);let i=!1;if(n&&!s){if(e)if(Fe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&po(r,a,"")}else for(const o in e)n[o]==null&&po(r,o,"");for(const o in n)o==="display"&&(i=!0),po(r,o,n[o])}else if(s){if(e!==n){const o=r[OE];o&&(n+=";"+o),r.cssText=n,i=DE.test(n)}}else e&&t.removeAttribute("style");Bh in t&&(t[Bh]=i?r.display:"",t[kE]&&(r.display="none"))}const qh=/\s*!important$/;function po(t,e,n){if(z(n))n.forEach(r=>po(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=VE(t,e);qh.test(n)?t.setProperty(hs(r),n.replace(qh,""),"important"):t[r]=n}}const Hh=["Webkit","Moz","ms"],ul={};function VE(t,e){const n=ul[e];if(n)return n;let r=rn(e);if(r!=="filter"&&r in t)return ul[e]=r;r=oa(r);for(let s=0;s<Hh.length;s++){const i=Hh[s]+r;if(i in t)return ul[e]=i}return e}const Wh="http://www.w3.org/1999/xlink";function ME(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wh,e.slice(6,e.length)):t.setAttributeNS(Wh,e,n);else{const i=jy(e);n==null||i&&!Jf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function LE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Jf(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function ir(t,e,n,r){t.addEventListener(e,n,r)}function UE(t,e,n,r){t.removeEventListener(e,n,r)}const zh=Symbol("_vei");function FE(t,e,n,r,s=null){const i=t[zh]||(t[zh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=$E(e);if(r){const c=i[e]=qE(r,s);ir(t,a,c,l)}else o&&(UE(t,a,o,l),i[e]=void 0)}}const Kh=/(?:Once|Passive|Capture)$/;function $E(t){let e;if(Kh.test(t)){e={};let r;for(;r=t.match(Kh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hs(t.slice(2)),e]}let hl=0;const jE=Promise.resolve(),BE=()=>hl||(jE.then(()=>hl=0),hl=Date.now());function qE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Mt(HE(r,n.value),e,5,[r])};return n.value=t,n.attached=BE(),n}function HE(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Gh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,WE=(t,e,n,r,s,i,o,a,l)=>{const c=s==="svg";e==="class"?xE(t,r,c):e==="style"?NE(t,n,r):ra(e)?kc(e)||FE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zE(t,e,r,c))?LE(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ME(t,e,r,c))};function zE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gh(e)&&te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gh(e)&&Fe(n)?!1:e in t}const ko=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>co(e,n):e};function KE(t){t.target.composing=!0}function Qh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wr=Symbol("_assign"),pt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Wr]=ko(s);const i=r||s.props&&s.props.type==="number";ir(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Qs(a)),t[Wr](a)}),n&&ir(t,"change",()=>{t.value=t.value.trim()}),e||(ir(t,"compositionstart",KE),ir(t,"compositionend",Qh),ir(t,"change",Qh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Wr]=ko(i),t.composing)return;const o=s||t.type==="number"?Qs(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},GE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=sa(e);ir(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Qs(Oo(o)):Oo(o));t[Wr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ha(()=>{t._assigning=!1})}),t[Wr]=ko(r)},mounted(t,{value:e,modifiers:{number:n}}){Jh(t,e,n)},beforeUpdate(t,e,n){t[Wr]=ko(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Jh(t,e,n)}};function Jh(t,e,n){const r=t.multiple,s=z(e);if(!(r&&!s&&!sa(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],l=Oo(a);if(r)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=e.includes(n?Qs(l):l):a.selected=qy(e,l)>-1}else a.selected=e.has(l);else if(aa(Oo(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Oo(t){return"_value"in t?t._value:t.value}const QE=["ctrl","shift","alt","meta"],JE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>QE.some(n=>t[`${n}Key`]&&!e.includes(n))},Gp=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=JE[e[o]];if(a&&a(s,e))return}return t(s,...i)})},YE=Xe({patchProp:WE},PE);let Yh;function XE(){return Yh||(Yh=aE(YE))}const ZE=(...t)=>{const e=XE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=tw(r);if(!s)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,ew(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ew(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tw(t){return Fe(t)?document.querySelector(t):t}var nw=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Qp;const ya=t=>Qp=t,Jp=Symbol();function zl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Fs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Fs||(Fs={}));function rw(){const t=Zf(!0),e=t.run(()=>pe({}));let n=[],r=[];const s=ca({install(i){ya(s),s._a=i,i.provide(Jp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!nw?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Yp=()=>{};function Xh(t,e,n,r=Yp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ep()&&Wy(s),s}function Nr(t,...e){t.slice().forEach(n=>{n(...e)})}const sw=t=>t();function Kl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];zl(s)&&zl(r)&&t.hasOwnProperty(n)&&!$e(r)&&!Mn(r)?t[n]=Kl(s,r):t[n]=r}return t}const iw=Symbol();function ow(t){return!zl(t)||!t.hasOwnProperty(iw)}const{assign:Rn}=Object;function aw(t){return!!($e(t)&&t.effect)}function lw(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=gv(n.state.value[t]);return Rn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=ca(Ct(()=>{ya(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return l=Xp(t,c,e,n,r,!0),l}function Xp(t,e,n={},r,s,i){let o;const a=Rn({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],p;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),pe({});let b;function E(ee){let se;c=u=!1,typeof ee=="function"?(ee(r.state.value[t]),se={type:Fs.patchFunction,storeId:t,events:p}):(Kl(r.state.value[t],ee),se={type:Fs.patchObject,payload:ee,storeId:t,events:p});const Ie=b=Symbol();ha().then(()=>{b===Ie&&(c=!0)}),u=!0,Nr(h,se,r.state.value[t])}const S=i?function(){const{state:se}=n,Ie=se?se():{};this.$patch(Ze=>{Rn(Ze,Ie)})}:Yp;function D(){o.stop(),h=[],d=[],r._s.delete(t)}function M(ee,se){return function(){ya(r);const Ie=Array.from(arguments),Ze=[],yt=[];function St(de){Ze.push(de)}function er(de){yt.push(de)}Nr(d,{args:Ie,name:ee,store:Y,after:St,onError:er});let Pt;try{Pt=se.apply(this&&this.$id===t?this:Y,Ie)}catch(de){throw Nr(yt,de),de}return Pt instanceof Promise?Pt.then(de=>(Nr(Ze,de),de)).catch(de=>(Nr(yt,de),Promise.reject(de))):(Nr(Ze,Pt),Pt)}}const j={_p:r,$id:t,$onAction:Xh.bind(null,d),$patch:E,$reset:S,$subscribe(ee,se={}){const Ie=Xh(h,ee,se.detached,()=>Ze()),Ze=o.run(()=>Vs(()=>r.state.value[t],yt=>{(se.flush==="sync"?u:c)&&ee({storeId:t,type:Fs.direct,events:p},yt)},Rn({},l,se)));return Ie},$dispose:D},Y=ds(j);r._s.set(t,Y);const he=(r._a&&r._a.runWithContext||sw)(()=>r._e.run(()=>(o=Zf()).run(e)));for(const ee in he){const se=he[ee];if($e(se)&&!aw(se)||Mn(se))i||(y&&ow(se)&&($e(se)?se.value=y[ee]:Kl(se,y[ee])),r.state.value[t][ee]=se);else if(typeof se=="function"){const Ie=M(ee,se);he[ee]=Ie,a.actions[ee]=se}}return Rn(Y,he),Rn(ue(Y),he),Object.defineProperty(Y,"$state",{get:()=>r.state.value[t],set:ee=>{E(se=>{Rn(se,ee)})}}),r._p.forEach(ee=>{Rn(Y,o.run(()=>ee({store:Y,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(Y.$state,y),c=!0,u=!0,Y}function Ii(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=tE();return a=a||(c?Ut(Jp,null):null),a&&ya(a),a=Qp,a._s.has(r)||(i?Xp(r,e,s,a):lw(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Mr=typeof document<"u";function cw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function dl(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ft(s)?s.map(t):t(s)}return n}const $s=()=>{},Ft=Array.isArray,Zp=/#/g,uw=/&/g,hw=/\//g,dw=/=/g,fw=/\?/g,em=/\+/g,pw=/%5B/g,mw=/%5D/g,tm=/%5E/g,gw=/%60/g,nm=/%7B/g,_w=/%7C/g,rm=/%7D/g,yw=/%20/g;function Qc(t){return encodeURI(""+t).replace(_w,"|").replace(pw,"[").replace(mw,"]")}function vw(t){return Qc(t).replace(nm,"{").replace(rm,"}").replace(tm,"^")}function Gl(t){return Qc(t).replace(em,"%2B").replace(yw,"+").replace(Zp,"%23").replace(uw,"%26").replace(gw,"`").replace(nm,"{").replace(rm,"}").replace(tm,"^")}function Ew(t){return Gl(t).replace(dw,"%3D")}function ww(t){return Qc(t).replace(Zp,"%23").replace(fw,"%3F")}function Iw(t){return t==null?"":ww(t).replace(hw,"%2F")}function ei(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Tw=/\/$/,Aw=t=>t.replace(Tw,"");function fl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Pw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ei(o)}}function bw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Zh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Rw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zr(e.matched[r],n.matched[s])&&sm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Sw(t[n],e[n]))return!1;return!0}function Sw(t,e){return Ft(t)?ed(t,e):Ft(e)?ed(e,t):t===e}function ed(t,e){return Ft(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Pw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var ti;(function(t){t.pop="pop",t.push="push"})(ti||(ti={}));var js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(js||(js={}));function Cw(t){if(!t)if(Mr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Aw(t)}const xw=/^[^#]+#/;function kw(t,e){return t.replace(xw,"#")+e}function Ow(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const va=()=>({left:window.scrollX,top:window.scrollY});function Dw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ow(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function td(t,e){return(history.state?history.state.position-e:-1)+t}const Ql=new Map;function Nw(t,e){Ql.set(t,e)}function Vw(t){const e=Ql.get(t);return Ql.delete(t),e}let Mw=()=>location.protocol+"//"+location.host;function im(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Zh(l,"")}return Zh(n,t)+r+s}function Lw(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=im(t,location),y=n.value,b=e.value;let E=0;if(d){if(n.value=p,e.value=d,o&&o===y){o=null;return}E=b?d.position-b.position:0}else r(p);s.forEach(S=>{S(n.value,y,{delta:E,type:ti.pop,direction:E?E>0?js.forward:js.back:js.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(_e({},d.state,{scroll:va()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function nd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?va():null}}function Uw(t){const{history:e,location:n}=window,r={value:im(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Mw()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=_e({},e.state,nd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=_e({},s.value,e.state,{forward:l,scroll:va()});i(u.current,u,!0);const h=_e({},nd(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Fw(t){t=Cw(t);const e=Uw(t),n=Lw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=_e({location:"",base:t,go:r,createHref:kw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function $w(t){return typeof t=="string"||t&&typeof t=="object"}function om(t){return typeof t=="string"||typeof t=="symbol"}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},am=Symbol("");var rd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rd||(rd={}));function es(t,e){return _e(new Error,{type:t,[am]:!0},e)}function hn(t,e){return t instanceof Error&&am in t&&(e==null||!!(t.type&e))}const sd="[^/]+?",jw={sensitive:!1,strict:!1,start:!0,end:!0},Bw=/[.+*?^${}()[\]/\\]/g;function qw(t,e){const n=_e({},jw,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Bw,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:b,optional:E,regexp:S}=d;i.push({name:y,repeatable:b,optional:E});const D=S||sd;if(D!==sd){p+=10;try{new RegExp(`(${D})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${y}" (${D}): `+j.message)}}let M=b?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(M=E&&c.length<2?`(?:/${M})`:"/"+M),E&&(M+="?"),s+=M,p+=20,E&&(p+=-8),b&&(p+=-20),D===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",y=i[d-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:b,optional:E}=p,S=y in c?c[y]:"";if(Ft(S)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const D=Ft(S)?S.join("/"):S;if(!D)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function Hw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ww(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Hw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(id(r))return 1;if(id(s))return-1}return s.length-r.length}function id(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const zw={type:0,value:""},Kw=/[a-zA-Z0-9_]/;function Gw(t){if(!t)return[[]];if(t==="/")return[[zw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:Kw.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Qw(t,e,n){const r=qw(Gw(t.path),n),s=_e(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Jw(t,e){const n=[],r=new Map;e=ld({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,y=Yw(u);y.aliasOf=d&&d.record;const b=ld(e,u),E=[y];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const j of M)E.push(_e({},y,{components:d?d.record.components:y.components,path:j,aliasOf:d?d.record:y}))}let S,D;for(const M of E){const{path:j}=M;if(h&&j[0]!=="/"){const Y=h.record.path,B=Y[Y.length-1]==="/"?"":"/";M.path=h.record.path+(j&&B+j)}if(S=Qw(M,h,b),d?d.alias.push(S):(D=D||S,D!==S&&D.alias.push(S),p&&u.name&&!ad(S)&&o(u.name)),y.children){const Y=y.children;for(let B=0;B<Y.length;B++)i(Y[B],S,d&&d.children[B])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&l(S)}return D?()=>{o(D)}:$s}function o(u){if(om(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&Ww(u,n[h])>=0&&(u.record.path!==n[h].record.path||!lm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ad(u)&&r.set(u.record.name,u)}function c(u,h){let d,p={},y,b;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw es(1,{location:u});b=d.record.name,p=_e(od(h.params,d.keys.filter(D=>!D.optional).concat(d.parent?d.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),u.params&&od(u.params,d.keys.map(D=>D.name))),y=d.stringify(p)}else if(u.path!=null)y=u.path,d=n.find(D=>D.re.test(y)),d&&(p=d.parse(y),b=d.record.name);else{if(d=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw es(1,{location:u,currentLocation:h});b=d.record.name,p=_e({},h.params,u.params),y=d.stringify(p)}const E=[];let S=d;for(;S;)E.unshift(S.record),S=S.parent;return{name:b,path:y,params:p,matched:E,meta:Zw(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function od(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Yw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Xw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Xw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ad(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zw(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function ld(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function lm(t,e){return e.children.some(n=>n===t||lm(t,n))}function eI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(em," "),o=i.indexOf("="),a=ei(o<0?i:i.slice(0,o)),l=o<0?null:ei(i.slice(o+1));if(a in e){let c=e[a];Ft(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function cd(t){let e="";for(let n in t){const r=t[n];if(n=Ew(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ft(r)?r.map(i=>i&&Gl(i)):[r&&Gl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function tI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ft(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const nI=Symbol(""),ud=Symbol(""),Ea=Symbol(""),cm=Symbol(""),Jl=Symbol("");function Ts(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(es(4,{from:n,to:e})):d instanceof Error?l(d):$w(d)?l(es(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function pl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(rI(l)){const u=(l.__vccOpts||l)[e];u&&i.push(xn(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=cw(u)?u.default:u;o.components[a]=h;const p=(h.__vccOpts||h)[e];return p&&xn(p,n,r,o,a,s)()}))}}return i}function rI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hd(t){const e=Ut(Ea),n=Ut(cm),r=Ct(()=>e.resolve(K(t.to))),s=Ct(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Zr.bind(null,u));if(d>-1)return d;const p=dd(l[c-2]);return c>1&&dd(u)===p&&h[h.length-1].path!==p?h.findIndex(Zr.bind(null,l[c-2])):d}),i=Ct(()=>s.value>-1&&aI(n.params,r.value.params)),o=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&sm(n.params,r.value.params));function a(l={}){return oI(l)?e[K(t.replace)?"replace":"push"](K(t.to)).catch($s):Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const sI=Rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hd,setup(t,{slots:e}){const n=ds(hd(t)),{options:r}=Ut(Ea),s=Ct(()=>({[fd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[fd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Kp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),iI=sI;function oI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function aI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ft(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function dd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fd=(t,e,n)=>t??e??n,lI=Rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ut(Jl),s=Ct(()=>t.route||r.value),i=Ut(ud,0),o=Ct(()=>{let c=K(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ct(()=>s.value.matched[o.value]);ho(ud,Ct(()=>o.value+1)),ho(nI,a),ho(Jl,s);const l=pe();return Vs(()=>[l.value,a.value,t.name],([c,u,h],[d,p,y])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Zr(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return pd(n.default,{Component:d,route:c});const p=h.props[u],y=p?p===!0?c.params:typeof p=="function"?p(c):p:null,E=Kp(d,_e({},y,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return pd(n.default,{Component:E,route:c})||E}}});function pd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const um=lI;function cI(t){const e=Jw(t.routes,t),n=t.parseQuery||eI,r=t.stringifyQuery||cd,s=t.history,i=Ts(),o=Ts(),a=Ts(),l=fv(An);let c=An;Mr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=dl.bind(null,w=>""+w),h=dl.bind(null,Iw),d=dl.bind(null,ei);function p(w,U){let N,$;return om(w)?(N=e.getRecordMatcher(w),$=U):$=w,e.addRoute($,N)}function y(w){const U=e.getRecordMatcher(w);U&&e.removeRoute(U)}function b(){return e.getRoutes().map(w=>w.record)}function E(w){return!!e.getRecordMatcher(w)}function S(w,U){if(U=_e({},U||l.value),typeof w=="string"){const m=fl(n,w,U.path),_=e.resolve({path:m.path},U),T=s.createHref(m.fullPath);return _e(m,_,{params:d(_.params),hash:ei(m.hash),redirectedFrom:void 0,href:T})}let N;if(w.path!=null)N=_e({},w,{path:fl(n,w.path,U.path).path});else{const m=_e({},w.params);for(const _ in m)m[_]==null&&delete m[_];N=_e({},w,{params:h(m)}),U.params=h(U.params)}const $=e.resolve(N,U),ge=w.hash||"";$.params=u(d($.params));const Pe=bw(r,_e({},w,{hash:vw(ge),path:$.path})),f=s.createHref(Pe);return _e({fullPath:Pe,hash:ge,query:r===cd?tI(w.query):w.query||{}},$,{redirectedFrom:void 0,href:f})}function D(w){return typeof w=="string"?fl(n,w,l.value.path):_e({},w)}function M(w,U){if(c!==w)return es(8,{from:U,to:w})}function j(w){return he(w)}function Y(w){return j(_e(D(w),{replace:!0}))}function B(w){const U=w.matched[w.matched.length-1];if(U&&U.redirect){const{redirect:N}=U;let $=typeof N=="function"?N(w):N;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=D($):{path:$},$.params={}),_e({query:w.query,hash:w.hash,params:$.path!=null?{}:w.params},$)}}function he(w,U){const N=c=S(w),$=l.value,ge=w.state,Pe=w.force,f=w.replace===!0,m=B(N);if(m)return he(_e(D(m),{state:typeof m=="object"?_e({},ge,m.state):ge,force:Pe,replace:f}),U||N);const _=N;_.redirectedFrom=U;let T;return!Pe&&Rw(r,$,N)&&(T=es(16,{to:_,from:$}),Bt($,$,!0,!1)),(T?Promise.resolve(T):Ie(_,$)).catch(v=>hn(v)?hn(v,2)?v:In(v):me(v,_,$)).then(v=>{if(v){if(hn(v,2))return he(_e({replace:f},D(v.to),{state:typeof v.to=="object"?_e({},ge,v.to.state):ge,force:Pe}),U||_)}else v=yt(_,$,!0,f,ge);return Ze(_,$,v),v})}function ee(w,U){const N=M(w,U);return N?Promise.reject(N):Promise.resolve()}function se(w){const U=Or.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(w):w()}function Ie(w,U){let N;const[$,ge,Pe]=uI(w,U);N=pl($.reverse(),"beforeRouteLeave",w,U);for(const m of $)m.leaveGuards.forEach(_=>{N.push(xn(_,w,U))});const f=ee.bind(null,w,U);return N.push(f),et(N).then(()=>{N=[];for(const m of i.list())N.push(xn(m,w,U));return N.push(f),et(N)}).then(()=>{N=pl(ge,"beforeRouteUpdate",w,U);for(const m of ge)m.updateGuards.forEach(_=>{N.push(xn(_,w,U))});return N.push(f),et(N)}).then(()=>{N=[];for(const m of Pe)if(m.beforeEnter)if(Ft(m.beforeEnter))for(const _ of m.beforeEnter)N.push(xn(_,w,U));else N.push(xn(m.beforeEnter,w,U));return N.push(f),et(N)}).then(()=>(w.matched.forEach(m=>m.enterCallbacks={}),N=pl(Pe,"beforeRouteEnter",w,U,se),N.push(f),et(N))).then(()=>{N=[];for(const m of o.list())N.push(xn(m,w,U));return N.push(f),et(N)}).catch(m=>hn(m,8)?m:Promise.reject(m))}function Ze(w,U,N){a.list().forEach($=>se(()=>$(w,U,N)))}function yt(w,U,N,$,ge){const Pe=M(w,U);if(Pe)return Pe;const f=U===An,m=Mr?history.state:{};N&&($||f?s.replace(w.fullPath,_e({scroll:f&&m&&m.scroll},ge)):s.push(w.fullPath,ge)),l.value=w,Bt(w,U,N,f),In()}let St;function er(){St||(St=s.listen((w,U,N)=>{if(!Wi.listening)return;const $=S(w),ge=B($);if(ge){he(_e(ge,{replace:!0}),$).catch($s);return}c=$;const Pe=l.value;Mr&&Nw(td(Pe.fullPath,N.delta),va()),Ie($,Pe).catch(f=>hn(f,12)?f:hn(f,2)?(he(f.to,$).then(m=>{hn(m,20)&&!N.delta&&N.type===ti.pop&&s.go(-1,!1)}).catch($s),Promise.reject()):(N.delta&&s.go(-N.delta,!1),me(f,$,Pe))).then(f=>{f=f||yt($,Pe,!1),f&&(N.delta&&!hn(f,8)?s.go(-N.delta,!1):N.type===ti.pop&&hn(f,20)&&s.go(-1,!1)),Ze($,Pe,f)}).catch($s)}))}let Pt=Ts(),de=Ts(),ve;function me(w,U,N){In(w);const $=de.list();return $.length?$.forEach(ge=>ge(w,U,N)):console.error(w),Promise.reject(w)}function un(){return ve&&l.value!==An?Promise.resolve():new Promise((w,U)=>{Pt.add([w,U])})}function In(w){return ve||(ve=!w,er(),Pt.list().forEach(([U,N])=>w?N(w):U()),Pt.reset()),w}function Bt(w,U,N,$){const{scrollBehavior:ge}=t;if(!Mr||!ge)return Promise.resolve();const Pe=!N&&Vw(td(w.fullPath,0))||($||!N)&&history.state&&history.state.scroll||null;return ha().then(()=>ge(w,U,Pe)).then(f=>f&&Dw(f)).catch(f=>me(f,w,U))}const dt=w=>s.go(w);let kr;const Or=new Set,Wi={currentRoute:l,listening:!0,addRoute:p,removeRoute:y,hasRoute:E,getRoutes:b,resolve:S,options:t,push:j,replace:Y,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:un,install(w){const U=this;w.component("RouterLink",iI),w.component("RouterView",um),w.config.globalProperties.$router=U,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>K(l)}),Mr&&!kr&&l.value===An&&(kr=!0,j(s.location).catch(ge=>{}));const N={};for(const ge in An)Object.defineProperty(N,ge,{get:()=>l.value[ge],enumerable:!0});w.provide(Ea,U),w.provide(cm,dp(N)),w.provide(Jl,l);const $=w.unmount;Or.add(w),w.unmount=function(){Or.delete(w),Or.size<1&&(c=An,St&&St(),St=null,l.value=An,kr=!1,ve=!1),$()}}};function et(w){return w.reduce((U,N)=>U.then(()=>se(N)),Promise.resolve())}return Wi}function uI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Zr(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Zr(c,l))||s.push(l))}return[n,r,s]}function hm(){return Ut(Ea)}var md={};/**
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
 */const dm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},hI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new dI;const d=i<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const y=c<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fI=function(t){const e=dm(t);return fm.encodeByteArray(e,!0)},Do=function(t){return fI(t).replace(/\./g,"")},pm=function(t){try{return fm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mI=()=>pI().__FIREBASE_DEFAULTS__,gI=()=>{if(typeof process>"u"||typeof md>"u")return;const t=md.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_I=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pm(t[1]);return e&&JSON.parse(e)},wa=()=>{try{return mI()||gI()||_I()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mm=t=>{var e,n;return(n=(e=wa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gm=t=>{const e=mm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_m=()=>{var t;return(t=wa())===null||t===void 0?void 0:t.config},ym=t=>{var e;return(e=wa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class yI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function vm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Do(JSON.stringify(n)),Do(JSON.stringify(o)),""].join(".")}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function EI(){var t;const e=(t=wa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function II(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TI(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AI(){return!EI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Em(){try{return typeof indexedDB=="object"}catch{return!1}}function bI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const RI="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RI,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?SI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ln(s,a,r)}}function SI(t,e){return t.replace(PI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const PI=/\{\$([^}]+)}/g;function CI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gd(i)&&gd(o)){if(!No(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gd(t){return t!==null&&typeof t=="object"}/**
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
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Cs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xI(t,e){const n=new kI(t,e);return n.subscribe.bind(n)}class kI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ml),s.error===void 0&&(s.error=ml),s.complete===void 0&&(s.complete=ml);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ml(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class Hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rr="[DEFAULT]";/**
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
 */class DI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VI(e))try{this.getOrInitializeService({instanceIdentifier:rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rr){return this.instances.has(e)}getOptions(e=rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rr){return this.component?this.component.multipleInstances?e:rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NI(t){return t===rr?void 0:t}function VI(t){return t.instantiationMode==="EAGER"}/**
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
 */class MI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const LI={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},UI=ae.INFO,FI={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},$I=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=FI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jc{constructor(e){this.name=e,this._logLevel=UI,this._logHandler=$I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const jI=(t,e)=>e.some(n=>t instanceof n);let _d,yd;function BI(){return _d||(_d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qI(){return yd||(yd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wm=new WeakMap,Yl=new WeakMap,Im=new WeakMap,gl=new WeakMap,Yc=new WeakMap;function HI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Un(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wm.set(n,t)}).catch(()=>{}),Yc.set(e,t),e}function WI(t){if(Yl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Yl.set(t,e)}let Xl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Im.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zI(t){Xl=t(Xl)}function KI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_l(this),e,...n);return Im.set(r,e.sort?e.sort():[e]),Un(r)}:qI().includes(t)?function(...e){return t.apply(_l(this),e),Un(wm.get(this))}:function(...e){return Un(t.apply(_l(this),e))}}function GI(t){return typeof t=="function"?KI(t):(t instanceof IDBTransaction&&WI(t),jI(t,BI())?new Proxy(t,Xl):t)}function Un(t){if(t instanceof IDBRequest)return HI(t);if(gl.has(t))return gl.get(t);const e=GI(t);return e!==t&&(gl.set(t,e),Yc.set(e,t)),e}const _l=t=>Yc.get(t);function QI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Un(o.result),l.oldVersion,l.newVersion,Un(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const JI=["get","getKey","getAll","getAllKeys","count"],YI=["put","add","delete","clear"],yl=new Map;function vd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yl.get(e))return yl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=YI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||JI.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return yl.set(e,i),i}zI(t=>({...t,get:(e,n,r)=>vd(e,n)||t.get(e,n,r),has:(e,n)=>!!vd(e,n)||t.has(e,n)}));/**
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
 */class XI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zl="@firebase/app",Ed="0.9.28";/**
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
 */const yr=new Jc("@firebase/app"),eT="@firebase/app-compat",tT="@firebase/analytics-compat",nT="@firebase/analytics",rT="@firebase/app-check-compat",sT="@firebase/app-check",iT="@firebase/auth",oT="@firebase/auth-compat",aT="@firebase/database",lT="@firebase/database-compat",cT="@firebase/functions",uT="@firebase/functions-compat",hT="@firebase/installations",dT="@firebase/installations-compat",fT="@firebase/messaging",pT="@firebase/messaging-compat",mT="@firebase/performance",gT="@firebase/performance-compat",_T="@firebase/remote-config",yT="@firebase/remote-config-compat",vT="@firebase/storage",ET="@firebase/storage-compat",wT="@firebase/firestore",IT="@firebase/firestore-compat",TT="firebase",AT="10.8.1";/**
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
 */const ec="[DEFAULT]",bT={[Zl]:"fire-core",[eT]:"fire-core-compat",[nT]:"fire-analytics",[tT]:"fire-analytics-compat",[sT]:"fire-app-check",[rT]:"fire-app-check-compat",[iT]:"fire-auth",[oT]:"fire-auth-compat",[aT]:"fire-rtdb",[lT]:"fire-rtdb-compat",[cT]:"fire-fn",[uT]:"fire-fn-compat",[hT]:"fire-iid",[dT]:"fire-iid-compat",[fT]:"fire-fcm",[pT]:"fire-fcm-compat",[mT]:"fire-perf",[gT]:"fire-perf-compat",[_T]:"fire-rc",[yT]:"fire-rc-compat",[vT]:"fire-gcs",[ET]:"fire-gcs-compat",[wT]:"fire-fst",[IT]:"fire-fst-compat","fire-js":"fire-js",[TT]:"fire-js-all"};/**
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
 */const Vo=new Map,tc=new Map;function RT(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vr(t){const e=t.name;if(tc.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;tc.set(e,t);for(const n of Vo.values())RT(n,t);return!0}function Ia(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ST={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fn=new Ti("app","Firebase",ST);/**
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
 */class PT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
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
 */const Sr=AT;function Tm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ec,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Fn.create("bad-app-name",{appName:String(s)});if(n||(n=_m()),!n)throw Fn.create("no-options");const i=Vo.get(s);if(i){if(No(n,i.options)&&No(r,i.config))return i;throw Fn.create("duplicate-app",{appName:s})}const o=new MI(s);for(const l of tc.values())o.addComponent(l);const a=new PT(n,r,o);return Vo.set(s,a),a}function Xc(t=ec){const e=Vo.get(t);if(!e&&t===ec&&_m())return Tm();if(!e)throw Fn.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let s=(r=bT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(a.join(" "));return}vr(new Hn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const CT="firebase-heartbeat-database",xT=1,ni="firebase-heartbeat-store";let vl=null;function Am(){return vl||(vl=QI(CT,xT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ni)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),vl}async function kT(t){try{const n=(await Am()).transaction(ni),r=await n.objectStore(ni).get(bm(t));return await n.done,r}catch(e){if(e instanceof ln)yr.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(n.message)}}}async function wd(t,e){try{const r=(await Am()).transaction(ni,"readwrite");await r.objectStore(ni).put(e,bm(t)),await r.done}catch(n){if(n instanceof ln)yr.warn(n.message);else{const r=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function bm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OT=1024,DT=30*24*60*60*1e3;class NT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Id();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=DT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Id(),{heartbeatsToSend:r,unsentEntries:s}=VT(this._heartbeatsCache.heartbeats),i=Do(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Id(){return new Date().toISOString().substring(0,10)}function VT(t,e=OT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Td(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Td(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Em()?bI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Td(t){return Do(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function LT(t){vr(new Hn("platform-logger",e=>new XI(e),"PRIVATE")),vr(new Hn("heartbeat",e=>new NT(e),"PRIVATE")),Yt(Zl,Ed,t),Yt(Zl,Ed,"esm2017"),Yt("fire-js","")}LT("");var UT="firebase",FT="10.8.1";/**
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
 */Yt(UT,FT,"app");function Zc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Rm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $T=Rm,Sm=new Ti("auth","Firebase",Rm());/**
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
 */const Mo=new Jc("@firebase/auth");function jT(t,...e){Mo.logLevel<=ae.WARN&&Mo.warn(`Auth (${Sr}): ${t}`,...e)}function mo(t,...e){Mo.logLevel<=ae.ERROR&&Mo.error(`Auth (${Sr}): ${t}`,...e)}/**
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
 */function Dt(t,...e){throw eu(t,...e)}function Xt(t,...e){return eu(t,...e)}function Pm(t,e,n){const r=Object.assign(Object.assign({},$T()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function BT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(t,"argument-error"),Pm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sm.create(t,...e)}function G(t,e,...n){if(!t)throw eu(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mo(e),new Error(e)}function yn(t,e){t||dn(e)}/**
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
 */function nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qT(){return Ad()==="http:"||Ad()==="https:"}function Ad(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function HT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qT()||wI()||"connection"in navigator)?navigator.onLine:!0}function WT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bi{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=vI()||II()}get(){return HT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tu(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const KT=new bi(3e4,6e4);function Gn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qn(t,e,n,r,s={}){return xm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ai(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Cm.fetch()(km(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function xm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zT),e);try{const s=new QT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Xi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xi(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Pm(t,u,c);Dt(t,u)}}catch(s){if(s instanceof ln)throw s;Dt(t,"network-request-failed",{message:String(s)})}}async function Ri(t,e,n,r,s={}){const i=await Qn(t,e,n,r,s);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function km(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?tu(t.config,s):`${t.config.apiScheme}://${s}`}function GT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),KT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xt(t,e,r);return s.customData._tokenResponse=n,s}function bd(t){return t!==void 0&&t.enterprise!==void 0}class JT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return GT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function YT(t,e){return Qn(t,"GET","/v2/recaptchaConfig",Gn(t,e))}/**
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
 */async function XT(t,e){return Qn(t,"POST","/v1/accounts:delete",e)}async function ZT(t,e){return Qn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function e0(t,e=!1){const n=qe(t),r=await n.getIdToken(e),s=nu(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bs(El(s.auth_time)),issuedAtTime:Bs(El(s.iat)),expirationTime:Bs(El(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function El(t){return Number(t)*1e3}function nu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=pm(n);return s?JSON.parse(s):(mo("Failed to decode base64 JWT payload"),null)}catch(s){return mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function t0(t){const e=nu(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ri(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&n0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function n0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class r0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Om{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bs(this.lastLoginAt),this.creationTime=Bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ri(t,ZT(n,{idToken:r}));G(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?o0(i.providerUserInfo):[],a=i0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Om(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function s0(t){const e=qe(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function i0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function o0(t){return t.map(e=>{var{providerId:n}=e,r=Zc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function a0(t,e){const n=await xm(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=km(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function l0(t,e){return Qn(t,"POST","/v2/accounts:revokeToken",Gn(t,e))}/**
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
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):t0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await a0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new si;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function bn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new r0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Om(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ri(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return e0(this,e)}reload(){return s0(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ri(this,XT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:j,isAnonymous:Y,providerData:B,stsTokenManager:he}=n;G(M&&he,e,"internal-error");const ee=si.fromJSON(this.name,he);G(typeof M=="string",e,"internal-error"),bn(h,e.name),bn(d,e.name),G(typeof j=="boolean",e,"internal-error"),G(typeof Y=="boolean",e,"internal-error"),bn(p,e.name),bn(y,e.name),bn(b,e.name),bn(E,e.name),bn(S,e.name),bn(D,e.name);const se=new gr({uid:M,auth:e,email:d,emailVerified:j,displayName:h,isAnonymous:Y,photoURL:y,phoneNumber:p,tenantId:b,stsTokenManager:ee,createdAt:S,lastLoginAt:D});return B&&Array.isArray(B)&&(se.providerData=B.map(Ie=>Object.assign({},Ie))),E&&(se._redirectEventId=E),se}static async _fromIdTokenResponse(e,n,r=!1){const s=new si;s.updateFromServerResponse(n);const i=new gr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Lo(i),i}}/**
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
 */const Rd=new Map;function fn(t){yn(t instanceof Function,"Expected a class definition");let e=Rd.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rd.set(t,e),e)}/**
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
 */class Dm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dm.type="NONE";const Sd=Dm;/**
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
 */function go(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=go(this.userKey,s.apiKey,i),this.fullPersistenceKey=go("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(fn(Sd),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||fn(Sd);const o=go(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=gr._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new zr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new zr(i,e,r))}}/**
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
 */function Pd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Um(e))return"Blackberry";if(Fm(e))return"Webos";if(ru(e))return"Safari";if((e.includes("chrome/")||Vm(e))&&!e.includes("edge/"))return"Chrome";if(Lm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nm(t=Me()){return/firefox\//i.test(t)}function ru(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vm(t=Me()){return/crios\//i.test(t)}function Mm(t=Me()){return/iemobile/i.test(t)}function Lm(t=Me()){return/android/i.test(t)}function Um(t=Me()){return/blackberry/i.test(t)}function Fm(t=Me()){return/webos/i.test(t)}function Ta(t=Me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function c0(t=Me()){var e;return Ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u0(){return TI()&&document.documentMode===10}function $m(t=Me()){return Ta(t)||Lm(t)||Fm(t)||Um(t)||/windows phone/i.test(t)||Mm(t)}function h0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function jm(t,e=[]){let n;switch(t){case"Browser":n=Pd(Me());break;case"Worker":n=`${Pd(Me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sr}/${r}`}/**
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
 */class d0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function f0(t,e={}){return Qn(t,"GET","/v2/passwordPolicy",Gn(t,e))}/**
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
 */const p0=6;class m0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:p0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class g0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cd(this),this.idTokenSubscription=new Cd(this),this.beforeStateQueue=new d0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f0(this),n=new m0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await l0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jn(t){return qe(t)}class Cd{constructor(e){this.auth=e,this.observer=null,this.addObserver=xI(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Aa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _0(t){Aa=t}function Bm(t){return Aa.loadJS(t)}function y0(){return Aa.recaptchaEnterpriseScript}function v0(){return Aa.gapiScript}function E0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const w0="recaptcha-enterprise",I0="NO_RECAPTCHA";class T0{constructor(e){this.type=w0,this.auth=Jn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{YT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new JT(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;bd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(I0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&bd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=y0();l.length!==0&&(l+=a),Bm(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function xd(t,e,n,r=!1){const s=new T0(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function rc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await xd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await xd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function A0(t,e){const n=Ia(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(No(i,e??{}))return s;Dt(s,"already-initialized")}return n.initialize({options:e})}function b0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function R0(t,e,n){const r=Jn(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=qm(e),{host:o,port:a}=S0(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||P0()}function qm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function S0(t){const e=qm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:kd(o)}}}function kd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function P0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class su{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function C0(t,e){return Qn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function x0(t,e){return Ri(t,"POST","/v1/accounts:signInWithPassword",Gn(t,e))}/**
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
 */async function k0(t,e){return Ri(t,"POST","/v1/accounts:signInWithEmailLink",Gn(t,e))}async function O0(t,e){return Ri(t,"POST","/v1/accounts:signInWithEmailLink",Gn(t,e))}/**
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
 */class ii extends su{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ii(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ii(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rc(e,n,"signInWithPassword",x0);case"emailLink":return k0(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rc(e,r,"signUpPassword",C0);case"emailLink":return O0(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Kr(t,e){return Ri(t,"POST","/v1/accounts:signInWithIdp",Gn(t,e))}/**
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
 */const D0="http://localhost";class Er extends su{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Er(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:D0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
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
 */function N0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V0(t){const e=Ps(Cs(t)).link,n=e?Ps(Cs(e)).deep_link_id:null,r=Ps(Cs(t)).deep_link_id;return(r?Ps(Cs(r)).link:null)||r||n||e||t}class iu{constructor(e){var n,r,s,i,o,a;const l=Ps(Cs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=N0((s=l.mode)!==null&&s!==void 0?s:null);G(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=V0(e);try{return new iu(n)}catch{return null}}}/**
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
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return ii._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=iu.parseLink(n);return G(r,"argument-error"),ii._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ou{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Si extends ou{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kn extends Si{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
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
 */class Kt extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Er._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
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
 */class On extends Si{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
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
 */class Dn extends Si{constructor(){super("twitter.com")}static credential(e,n){return Er._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
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
 */async function M0(t,e){return Ri(t,"POST","/v1/accounts:signUp",Gn(t,e))}/**
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
 */class wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gr._fromIdTokenResponse(e,r,s),o=Od(r);return new wr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Od(r);return new wr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Od(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Uo extends ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Uo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Uo(e,n,r,s)}}function Hm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Uo._fromErrorAndOperation(t,i,e,r):i})}async function L0(t,e,n=!1){const r=await ri(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wr._forOperation(t,"link",r)}/**
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
 */async function U0(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ri(t,Hm(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=nu(i.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),wr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),i}}/**
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
 */async function Wm(t,e,n=!1){const r="signIn",s=await Hm(t,r,e),i=await wr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function F0(t,e){return Wm(Jn(t),e)}/**
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
 */async function zm(t){const e=Jn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $0(t,e,n){const r=Jn(t),o=await rc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",M0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&zm(t),l}),a=await wr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function j0(t,e,n){return F0(qe(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zm(t),r})}function B0(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function q0(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function H0(t){return qe(t).signOut()}const Fo="__sak";/**
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
 */class Km{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fo,"1"),this.storage.removeItem(Fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function W0(){const t=Me();return ru(t)||Ta(t)}const z0=1e3,K0=10;class Gm extends Km{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=W0()&&h0(),this.fallbackToPolling=$m(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);u0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,K0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},z0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gm.type="LOCAL";const G0=Gm;/**
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
 */class Qm extends Km{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qm.type="SESSION";const Jm=Qm;/**
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
 */function Q0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ba{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ba(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Q0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ba.receivers=[];/**
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
 */function au(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class J0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=au("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Zt(){return window}function Y0(t){Zt().location.href=t}/**
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
 */function Ym(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function X0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eA(){return Ym()?self:null}/**
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
 */const Xm="firebaseLocalStorageDb",tA=1,$o="firebaseLocalStorage",Zm="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ra(t,e){return t.transaction([$o],e?"readwrite":"readonly").objectStore($o)}function nA(){const t=indexedDB.deleteDatabase(Xm);return new Pi(t).toPromise()}function sc(){const t=indexedDB.open(Xm,tA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($o,{keyPath:Zm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($o)?e(r):(r.close(),await nA(),e(await sc()))})})}async function Dd(t,e,n){const r=Ra(t,!0).put({[Zm]:e,value:n});return new Pi(r).toPromise()}async function rA(t,e){const n=Ra(t,!1).get(e),r=await new Pi(n).toPromise();return r===void 0?null:r.value}function Nd(t,e){const n=Ra(t,!0).delete(e);return new Pi(n).toPromise()}const sA=800,iA=3;class eg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ym()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ba._getInstance(eA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await X0(),!this.activeServiceWorker)return;this.sender=new J0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sc();return await Dd(e,Fo,"1"),await Nd(e,Fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ra(s,!1).getAll();return new Pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eg.type="LOCAL";const oA=eg;new bi(3e4,6e4);/**
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
 */function tg(t,e){return e?fn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lu extends su{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aA(t){return Wm(t.auth,new lu(t),t.bypassAuthState)}function lA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),U0(n,new lu(t),t.bypassAuthState)}async function cA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),L0(n,new lu(t),t.bypassAuthState)}/**
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
 */class ng{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aA;case"linkViaPopup":case"linkViaRedirect":return cA;case"reauthViaPopup":case"reauthViaRedirect":return lA;default:Dt(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uA=new bi(2e3,1e4);async function rg(t,e,n){const r=Jn(t);BT(t,e,ou);const s=tg(r,n);return new lr(r,"signInViaPopup",e,s).executeNotNull()}class lr extends ng{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uA.get())};e()}}lr.currentPopupAction=null;/**
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
 */const hA="pendingRedirect",_o=new Map;class dA extends ng{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await fA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fA(t,e){const n=gA(e),r=mA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pA(t,e){_o.set(t._key(),e)}function mA(t){return fn(t._redirectPersistence)}function gA(t){return go(hA,t.config.apiKey,t.name)}async function _A(t,e,n=!1){const r=Jn(t),s=tg(r,e),o=await new dA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const yA=10*60*1e3;class vA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vd(e))}saveEventToCache(e){this.cachedEventUids.add(Vd(e)),this.lastProcessedEventTime=Date.now()}}function Vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sg(t);default:return!1}}/**
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
 */async function wA(t,e={}){return Qn(t,"GET","/v1/projects",e)}/**
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
 */const IA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TA=/^https?/;async function AA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wA(t);for(const n of e)try{if(bA(n))return}catch{}Dt(t,"unauthorized-domain")}function bA(t){const e=nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TA.test(n))return!1;if(IA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const RA=new bi(3e4,6e4);function Md(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SA(t){return new Promise((e,n)=>{var r,s,i;function o(){Md(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Md(),n(Xt(t,"network-request-failed"))},timeout:RA.get()})}if(!((s=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Zt().gapi)===null||i===void 0)&&i.load)o();else{const a=E0("iframefcb");return Zt()[a]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},Bm(`${v0()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw yo=null,e})}let yo=null;function PA(t){return yo=yo||SA(t),yo}/**
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
 */const CA=new bi(5e3,15e3),xA="__/auth/iframe",kA="emulator/auth/iframe",OA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NA(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tu(e,kA):`https://${t.config.authDomain}/${xA}`,r={apiKey:e.apiKey,appName:t.name,v:Sr},s=DA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ai(r).slice(1)}`}async function VA(t){const e=await PA(t),n=Zt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:NA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),a=Zt().setTimeout(()=>{i(o)},CA.get());function l(){Zt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const MA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LA=500,UA=600,FA="_blank",$A="http://localhost";class Ld{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jA(t,e,n,r=LA,s=UA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},MA),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Me().toLowerCase();n&&(a=Vm(c)?FA:n),Nm(c)&&(e=e||$A,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(c0(c)&&a!=="_self")return BA(e||"",a),new Ld(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new Ld(h)}function BA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qA="__/auth/handler",HA="emulator/auth/handler",WA=encodeURIComponent("fac");async function Ud(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Sr,eventId:s};if(e instanceof ou){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Si){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${WA}=${encodeURIComponent(l)}`:"";return`${zA(t)}?${Ai(a).slice(1)}${c}`}function zA({config:t}){return t.emulator?tu(t,HA):`https://${t.authDomain}/${qA}`}/**
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
 */const wl="webStorageSupport";class KA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jm,this._completeRedirectFn=_A,this._overrideRedirectResult=pA}async _openPopup(e,n,r,s){var i;yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ud(e,n,r,nc(),s);return jA(e,o,au())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ud(e,n,r,nc(),s);return Y0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VA(e),r=new vA(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wl,{type:wl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[wl];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $m()||ru()||Ta()}}const GA=KA;var Fd="@firebase/auth",$d="1.6.1";/**
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
 */class QA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YA(t){vr(new Hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jm(t)},c=new g0(r,s,i,l);return b0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vr(new Hn("auth-internal",e=>{const n=Jn(e.getProvider("auth").getImmediate());return(r=>new QA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Fd,$d,JA(t)),Yt(Fd,$d,"esm2017")}/**
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
 */const XA=5*60,ZA=ym("authIdTokenMaxAge")||XA;let jd=null;const eb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZA)return;const s=n==null?void 0:n.token;jd!==s&&(jd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tb(t=Xc()){const e=Ia(t,"auth");if(e.isInitialized())return e.getImmediate();const n=A0(t,{popupRedirectResolver:GA,persistence:[oA,G0,Jm]}),r=ym("authTokenSyncURL");if(r){const i=eb(r);q0(n,i,()=>i(n.currentUser)),B0(n,o=>i(o))}const s=mm("auth");return s&&R0(n,`http://${s}`),n}function nb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Xt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",nb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YA("Browser");var rb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,cu=cu||{},J=rb||self;function Sa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ci(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sb(t){return Object.prototype.hasOwnProperty.call(t,Il)&&t[Il]||(t[Il]=++ib)}var Il="closure_uid_"+(1e9*Math.random()>>>0),ib=0;function ob(t,e,n){return t.call.apply(t.bind,arguments)}function ab(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function it(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?it=ob:it=ab,it.apply(null,arguments)}function Zi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function We(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Yn(){this.s=this.s,this.o=this.o}var lb=0;Yn.prototype.s=!1;Yn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),lb!=0)&&sb(this)};Yn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ig=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function uu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Bd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Sa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var cb=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};J.addEventListener("test",n,e),J.removeEventListener("test",n,e)}catch{}return t}();function oi(t){return/^[\s\xa0]*$/.test(t)}function Pa(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function Gt(t){return Pa().indexOf(t)!=-1}function hu(t){return hu[" "](t),t}hu[" "]=function(){};function ub(t,e){var n=nR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var hb=Gt("Opera"),ts=Gt("Trident")||Gt("MSIE"),og=Gt("Edge"),ic=og||ts,ag=Gt("Gecko")&&!(Pa().toLowerCase().indexOf("webkit")!=-1&&!Gt("Edge"))&&!(Gt("Trident")||Gt("MSIE"))&&!Gt("Edge"),db=Pa().toLowerCase().indexOf("webkit")!=-1&&!Gt("Edge");function lg(){var t=J.document;return t?t.documentMode:void 0}var oc;e:{var Tl="",Al=function(){var t=Pa();if(ag)return/rv:([^\);]+)(\)|;)/.exec(t);if(og)return/Edge\/([\d\.]+)/.exec(t);if(ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(db)return/WebKit\/(\S+)/.exec(t);if(hb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Al&&(Tl=Al?Al[1]:""),ts){var bl=lg();if(bl!=null&&bl>parseFloat(Tl)){oc=String(bl);break e}}oc=Tl}var ac;if(J.document&&ts){var qd=lg();ac=qd||parseInt(oc,10)||void 0}else ac=void 0;var fb=ac;function ai(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ag){e:{try{hu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ai.$.h.call(this)}}We(ai,ot);var pb={2:"touch",3:"pen",4:"mouse"};ai.prototype.h=function(){ai.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xi="closure_listenable_"+(1e6*Math.random()|0),mb=0;function gb(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++mb,this.fa=this.ia=!1}function Ca(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function du(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function _b(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function cg(t){const e={};for(const n in t)e[n]=t[n];return e}const Hd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ug(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Hd.length;i++)n=Hd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function xa(t){this.src=t,this.g={},this.h=0}xa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=cc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new gb(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function lc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=ig(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ca(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var fu="closure_lm_"+(1e6*Math.random()|0),Rl={};function hg(t,e,n,r,s){if(r&&r.once)return fg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)hg(t,e[i],n,r,s);return null}return n=gu(n),t&&t[xi]?t.O(e,n,Ci(r)?!!r.capture:!!r,s):dg(t,e,n,!1,r,s)}function dg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ci(s)?!!s.capture:!!s,a=mu(t);if(a||(t[fu]=a=new xa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=yb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)cb||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(mg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yb(){function t(n){return e.call(t.src,t.listener,n)}const e=vb;return t}function fg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)fg(t,e[i],n,r,s);return null}return n=gu(n),t&&t[xi]?t.P(e,n,Ci(r)?!!r.capture:!!r,s):dg(t,e,n,!0,r,s)}function pg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)pg(t,e[i],n,r,s);else r=Ci(r)?!!r.capture:!!r,n=gu(n),t&&t[xi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=cc(i,n,r,s),-1<n&&(Ca(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=mu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cc(e,n,r,s)),(n=-1<t?e[t]:null)&&pu(n))}function pu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[xi])lc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=mu(e))?(lc(n,t),n.h==0&&(n.src=null,e[fu]=null)):Ca(t)}}}function mg(t){return t in Rl?Rl[t]:Rl[t]="on"+t}function vb(t,e){if(t.fa)t=!0;else{e=new ai(e,this);var n=t.listener,r=t.la||t.src;t.ia&&pu(t),t=n.call(r,e)}return t}function mu(t){return t=t[fu],t instanceof xa?t:null}var Sl="__closure_events_fn_"+(1e9*Math.random()>>>0);function gu(t){return typeof t=="function"?t:(t[Sl]||(t[Sl]=function(e){return t.handleEvent(e)}),t[Sl])}function He(){Yn.call(this),this.i=new xa(this),this.S=this,this.J=null}We(He,Yn);He.prototype[xi]=!0;He.prototype.removeEventListener=function(t,e,n,r){pg(this,t,e,n,r)};function Je(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var s=e;e=new ot(r,t),ug(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=eo(o,r,!0,e)&&s}if(o=e.g=t,s=eo(o,r,!0,e)&&s,s=eo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=eo(o,r,!1,e)&&s}He.prototype.N=function(){if(He.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ca(n[r]);delete t.g[e],t.h--}}this.J=null};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function eo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&lc(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var _u=J.JSON.stringify;class Eb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function wb(){var t=yu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ib{constructor(){this.h=this.g=null}add(e,n){const r=gg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var gg=new Eb(()=>new Tb,t=>t.reset());class Tb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ab(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function bb(t){J.setTimeout(()=>{throw t},0)}let li,ci=!1,yu=new Ib,_g=()=>{const t=J.Promise.resolve(void 0);li=()=>{t.then(Rb)}};var Rb=()=>{for(var t;t=wb();){try{t.h.call(t.g)}catch(n){bb(n)}var e=gg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ci=!1};function ka(t,e){He.call(this),this.h=t||1,this.g=e||J,this.j=it(this.qb,this),this.l=Date.now()}We(ka,He);O=ka.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Je(this,"tick"),this.ga&&(vu(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){ka.$.N.call(this),vu(this),delete this.g};function Eu(t,e,n){if(typeof t=="function")n&&(t=it(t,n));else if(t&&typeof t.handleEvent=="function")t=it(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function yg(t){t.g=Eu(()=>{t.g=null,t.i&&(t.i=!1,yg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Sb extends Yn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:yg(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(t){Yn.call(this),this.h=t,this.g={}}We(ui,Yn);var Wd=[];function vg(t,e,n,r){Array.isArray(n)||(n&&(Wd[0]=n.toString()),n=Wd);for(var s=0;s<n.length;s++){var i=hg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Eg(t){du(t.g,function(e,n){this.g.hasOwnProperty(n)&&pu(e)},t),t.g={}}ui.prototype.N=function(){ui.$.N.call(this),Eg(this)};ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Oa(){this.g=!0}Oa.prototype.Ea=function(){this.g=!1};function Pb(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Cb(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function $r(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+kb(t,n)+(r?" "+r:"")})}function xb(t,e){t.info(function(){return"TIMEOUT: "+e})}Oa.prototype.info=function(){};function kb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return _u(n)}catch{return e}}var Pr={},zd=null;function Da(){return zd=zd||new He}Pr.Ta="serverreachability";function wg(t){ot.call(this,Pr.Ta,t)}We(wg,ot);function hi(t){const e=Da();Je(e,new wg(e))}Pr.STAT_EVENT="statevent";function Ig(t,e){ot.call(this,Pr.STAT_EVENT,t),this.stat=e}We(Ig,ot);function ht(t){const e=Da();Je(e,new Ig(e,t))}Pr.Ua="timingevent";function Tg(t,e){ot.call(this,Pr.Ua,t),this.size=e}We(Tg,ot);function ki(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Na={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ag={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wu(){}wu.prototype.h=null;function Kd(t){return t.h||(t.h=t.i())}function bg(){}var Oi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Iu(){ot.call(this,"d")}We(Iu,ot);function Tu(){ot.call(this,"c")}We(Tu,ot);var uc;function Va(){}We(Va,wu);Va.prototype.g=function(){return new XMLHttpRequest};Va.prototype.i=function(){return{}};uc=new Va;function Di(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ui(this),this.P=Ob,t=ic?125:void 0,this.V=new ka(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Rg}function Rg(){this.i=null,this.g="",this.h=!1}var Ob=45e3,Sg={},hc={};O=Di.prototype;O.setTimeout=function(t){this.P=t};function dc(t,e,n){t.L=1,t.A=La(vn(e)),t.u=n,t.S=!0,Pg(t,null)}function Pg(t,e){t.G=Date.now(),Ni(t),t.B=vn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Mg(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Rg,t.g=r_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Sb(it(t.Pa,t,t.g),t.O)),vg(t.U,t.g,"readystatechange",t.nb),e=t.I?cg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),hi(),Pb(t.j,t.v,t.B,t.m,t.W,t.u)}O.nb=function(t){t=t.target;const e=this.M;e&&Qt(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const u=Qt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ic||this.g&&(this.h.h||this.g.ja()||Yd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?hi(3):hi(2)),Ma(this);var n=this.g.da();this.ca=n;t:if(Cg(this)){var r=Yd(this.g);t="";var s=r.length,i=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cr(this),qs(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Cb(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oi(a)){var c=a;break t}}c=null}if(n=c)$r(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fc(this,n);else{this.i=!1,this.s=3,ht(12),cr(this),qs(this);break e}}this.S?(xg(this,u,o),ic&&this.i&&u==3&&(vg(this.U,this.V,"tick",this.mb),this.V.start())):($r(this.j,this.m,o,null),fc(this,o)),u==4&&cr(this),this.i&&!this.J&&(u==4?Zg(this.l,this):(this.i=!1,Ni(this)))}else Zb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),cr(this),qs(this)}}}catch{}finally{}};function Cg(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function xg(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=Db(t,n),s==hc){e==4&&(t.s=4,ht(14),r=!1),$r(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Sg){t.s=4,ht(15),$r(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else $r(t.j,t.m,s,null),fc(t,s);Cg(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ht(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cu(e),e.M=!0,ht(11))):($r(t.j,t.m,n,"[Invalid Chunked Response]"),cr(t),qs(t))}O.mb=function(){if(this.g){var t=Qt(this.g),e=this.g.ja();this.o<e.length&&(Ma(this),xg(this,t,e),this.i&&t!=4&&Ni(this))}};function Db(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?hc:(n=Number(e.substring(n,r)),isNaN(n)?Sg:(r+=1,r+n>e.length?hc:(e=e.slice(r,r+n),t.o=r+n,e)))}O.cancel=function(){this.J=!0,cr(this)};function Ni(t){t.Y=Date.now()+t.P,kg(t,t.P)}function kg(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=ki(it(t.lb,t),e)}function Ma(t){t.C&&(J.clearTimeout(t.C),t.C=null)}O.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(xb(this.j,this.B),this.L!=2&&(hi(),ht(17)),cr(this),this.s=2,qs(this)):kg(this,this.Y-t)};function qs(t){t.l.H==0||t.J||Zg(t.l,t)}function cr(t){Ma(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,vu(t.V),Eg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function fc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||pc(n.i,t))){if(!t.K&&pc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)qo(n),ja(n);else break e;Pu(n),ht(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ki(it(n.ib,n),6e3));if(1>=Fg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ur(n,11)}else if((t.K||n.g==t)&&qo(n),!oi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Au(i,i.h),i.h=null))}if(r.F){const b=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.Da=b,Re(r.I,r.F,b))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=n_(r,r.J?r.pa:null,r.Y),o.K){$g(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Ma(a),Ni(a)),r.g=o}else Yg(r);0<n.j.length&&Ba(n)}else c[0]!="stop"&&c[0]!="close"||ur(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ur(n,7):Su(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}hi(4)}catch{}}function Nb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Sa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Vb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Sa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Og(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Sa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Vb(t),r=Nb(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Dg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function _r(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _r){this.h=t.h,jo(this,t.j),this.s=t.s,this.g=t.g,Bo(this,t.m),this.l=t.l;var e=t.i,n=new di;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Gd(this,n),this.o=t.o}else t&&(e=String(t).match(Dg))?(this.h=!1,jo(this,e[1]||"",!0),this.s=xs(e[2]||""),this.g=xs(e[3]||"",!0),Bo(this,e[4]),this.l=xs(e[5]||"",!0),Gd(this,e[6]||"",!0),this.o=xs(e[7]||"")):(this.h=!1,this.i=new di(null,this.h))}_r.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ks(e,Qd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ks(e,Qd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ks(n,n.charAt(0)=="/"?Fb:Ub,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ks(n,jb)),t.join("")};function vn(t){return new _r(t)}function jo(t,e,n){t.j=n?xs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Gd(t,e,n){e instanceof di?(t.i=e,Bb(t.i,t.h)):(n||(e=ks(e,$b)),t.i=new di(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function La(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Lb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Lb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qd=/[#\/\?@]/g,Ub=/[#\?:]/g,Fb=/[#\?]/g,$b=/[#\?@]/g,jb=/#/g;function di(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xn(t){t.g||(t.g=new Map,t.h=0,t.i&&Mb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=di.prototype;O.add=function(t,e){Xn(this),this.i=null,t=ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ng(t,e){Xn(t),e=ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Vg(t,e){return Xn(t),e=ps(t,e),t.g.has(e)}O.forEach=function(t,e){Xn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};O.ta=function(){Xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};O.Z=function(t){Xn(this);let e=[];if(typeof t=="string")Vg(this,t)&&(e=e.concat(this.g.get(ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Xn(this),this.i=null,t=ps(this,t),Vg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Mg(t,e,n){Ng(t,e),0<n.length&&(t.i=null,t.g.set(ps(t,e),uu(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Bb(t,e){e&&!t.j&&(Xn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ng(this,r),Mg(this,s,n))},t)),t.j=e}var qb=class{constructor(t,e){this.g=t,this.map=e}};function Lg(t){this.l=t||Hb,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hb=10;function Ug(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Fg(t){return t.h?1:t.g?t.g.size:0}function pc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Au(t,e){t.g?t.g.add(e):t.h=e}function $g(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Lg.prototype.cancel=function(){if(this.i=jg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function jg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return uu(t.i)}var Wb=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function zb(){this.g=new Wb}function Kb(t,e,n){const r=n||"";try{Og(t,function(s,i){let o=s;Ci(s)&&(o=_u(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Gb(t,e){const n=new Oa;if(J.Image){const r=new Image;r.onload=Zi(to,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Zi(to,n,r,"TestLoadImage: error",!1,e),r.onabort=Zi(to,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Zi(to,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function to(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ua(t){this.l=t.ec||null,this.j=t.ob||!1}We(Ua,wu);Ua.prototype.g=function(){return new Fa(this.l,this.j)};Ua.prototype.i=function(t){return function(){return t}}({});function Fa(t,e){He.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=bu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(Fa,He);var bu=0;O=Fa.prototype;O.open=function(t,e){if(this.readyState!=bu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,fi(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vi(this)),this.readyState=bu};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Bg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vi(this):fi(this),this.readyState==3&&Bg(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Vi(this))};O.Ya=function(t){this.g&&(this.response=t,Vi(this))};O.ka=function(){this.g&&Vi(this)};function Vi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,fi(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function fi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Qb=J.JSON.parse;function Oe(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=qg,this.L=this.M=!1}We(Oe,He);var qg="",Jb=/^https?$/i,Yb=["POST","PUT"];O=Oe.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():uc.g(),this.C=this.u?Kd(this.u):Kd(uc),this.g.onreadystatechange=it(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Jd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=J.FormData&&t instanceof J.FormData,!(0<=ig(Yb,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{zg(this),0<this.B&&((this.L=Xb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.ua,this)):this.A=Eu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Jd(this,i)}};function Xb(t){return ts&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof cu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function Jd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hg(t),$a(t)}function Hg(t){t.F||(t.F=!0,Je(t,"complete"),Je(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),$a(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$a(this,!0)),Oe.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?Wg(this):this.kb())};O.kb=function(){Wg(this)};function Wg(t){if(t.h&&typeof cu<"u"&&(!t.C[1]||Qt(t)!=4||t.da()!=2)){if(t.v&&Qt(t)==4)Eu(t.La,0,t);else if(Je(t,"readystatechange"),Qt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Dg)[1]||null;!s&&J.self&&J.self.location&&(s=J.self.location.protocol.slice(0,-1)),r=!Jb.test(s?s.toLowerCase():"")}n=r}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var i=2<Qt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Hg(t)}}finally{$a(t)}}}}function $a(t,e){if(t.g){zg(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=r}catch{}}}function zg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function Qt(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Qb(e)}};function Yd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case qg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Zb(t){const e={};t=(t.g&&2<=Qt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(oi(t[r]))continue;var n=Ab(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}_b(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Kg(t){let e="";return du(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ru(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Kg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function As(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gg(t){this.Ga=0,this.j=[],this.l=new Oa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=As("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=As("baseRetryDelayMs",5e3,t),this.hb=As("retryDelaySeedMs",1e4,t),this.eb=As("forwardChannelMaxRetries",2,t),this.xa=As("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Lg(t&&t.concurrentRequestLimit),this.Ja=new zb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=Gg.prototype;O.ra=8;O.H=1;function Su(t){if(Qg(t),t.H==3){var e=t.W++,n=vn(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),Mi(t,n),e=new Di(t,t.l,e),e.L=2,e.A=La(vn(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.A,n=!0),n||(e.g=r_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ni(e)}t_(t)}function ja(t){t.g&&(Cu(t),t.g.cancel(),t.g=null)}function Qg(t){ja(t),t.u&&(J.clearTimeout(t.u),t.u=null),qo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Ba(t){if(!Ug(t.i)&&!t.m){t.m=!0;var e=t.Na;li||_g(),ci||(li(),ci=!0),yu.add(e,t),t.C=0}}function eR(t,e){return Fg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ki(it(t.Na,t,e),e_(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Di(this,this.l,t);let i=this.s;if(this.U&&(i?(i=cg(i),ug(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Jg(this,s,e),n=vn(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),Mi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Kg(i)))+"&"+e:this.o&&Ru(n,this.o,i)),Au(this.i,s),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),s.aa=!0,dc(s,n,null)):dc(s,n,e),this.H=2}}else this.H==3&&(t?Xd(this,t):this.j.length==0||Ug(this.i)||Xd(this))};function Xd(t,e){var n;e?n=e.m:n=t.W++;const r=vn(t.I);Re(r,"SID",t.K),Re(r,"RID",n),Re(r,"AID",t.V),Mi(t,r),t.o&&t.s&&Ru(r,t.o,t.s),n=new Di(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Jg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Au(t.i,n),dc(n,r,e)}function Mi(t,e){t.na&&du(t.na,function(n,r){Re(e,r,n)}),t.h&&Og({},function(n,r){Re(e,r,n)})}function Jg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?it(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{Kb(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Yg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;li||_g(),ci||(li(),ci=!0),yu.add(e,t),t.A=0}}function Pu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ki(it(t.Ma,t),e_(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,Xg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ki(it(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ht(10),ja(this),Xg(this))};function Cu(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function Xg(t){t.g=new Di(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vn(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),Mi(t,e),t.o&&t.s&&Ru(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=La(vn(e)),n.u=null,n.S=!0,Pg(n,t)}O.ib=function(){this.v!=null&&(this.v=null,ja(this),Pu(this),ht(19))};function qo(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function Zg(t,e){var n=null;if(t.g==e){qo(t),Cu(t),t.g=null;var r=2}else if(pc(t.i,e))n=e.F,$g(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Da(),Je(r,new Tg(r,n)),Ba(t)}else Yg(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&eR(t,e)||r==2&&Pu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ur(t,5);break;case 4:ur(t,10);break;case 3:ur(t,6);break;default:ur(t,2)}}}function e_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ur(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=it(t.pb,t);n||(n=new _r("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||jo(n,"https"),La(n)),Gb(n.toString(),r)}else ht(2);t.H=0,t.h&&t.h.za(e),t_(t),Qg(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ht(2)):(this.l.info("Failed to ping google.com"),ht(1))};function t_(t){if(t.H=0,t.ma=[],t.h){const e=jg(t.i);(e.length!=0||t.j.length!=0)&&(Bd(t.ma,e),Bd(t.ma,t.j),t.i.i.length=0,uu(t.j),t.j.length=0),t.h.ya()}}function n_(t,e,n){var r=n instanceof _r?vn(n):new _r(n);if(r.g!="")e&&(r.g=e+"."+r.g),Bo(r,r.m);else{var s=J.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new _r(null);r&&jo(i,r),e&&(i.g=e),s&&Bo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Re(r,n,e),Re(r,"VER",t.ra),Mi(t,r),r}function r_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Oe(new Ua({ob:n})):new Oe(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function s_(){}O=s_.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function Ho(){if(ts&&!(10<=Number(fb)))throw Error("Environmental error: no available transport.")}Ho.prototype.g=function(t,e){return new bt(t,e)};function bt(t,e){He.call(this),this.g=new Gg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!oi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!oi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ms(this)}We(bt,He);bt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ht(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=n_(t,null,t.Y),Ba(t)};bt.prototype.close=function(){Su(this.g)};bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_u(t),t=n);e.j.push(new qb(e.fb++,t)),e.H==3&&Ba(e)};bt.prototype.N=function(){this.g.h=null,delete this.j,Su(this.g),delete this.g,bt.$.N.call(this)};function i_(t){Iu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(i_,Iu);function o_(){Tu.call(this),this.status=1}We(o_,Tu);function ms(t){this.g=t}We(ms,s_);ms.prototype.Ba=function(){Je(this.g,"a")};ms.prototype.Aa=function(t){Je(this.g,new i_(t))};ms.prototype.za=function(t){Je(this.g,new o_)};ms.prototype.ya=function(){Je(this.g,"b")};function tR(){this.blockSize=-1}function $t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}We($t,tR);$t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Pl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}$t.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Pl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Pl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Pl(this,r),s=0;break}}this.h=s,this.i+=e};$t.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ye(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var nR={};function xu(t){return-128<=t&&128>t?ub(t,function(e){return new ye([e|0],0>e?-1:0)}):new ye([t|0],0>t?-1:0)}function Jt(t){if(isNaN(t)||!isFinite(t))return Gr;if(0>t)return Ke(Jt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=mc;return new ye(e,0)}function a_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(a_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jt(Math.pow(e,8)),r=Gr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Jt(Math.pow(e,i)),r=r.R(i).add(Jt(o))):(r=r.R(n),r=r.add(Jt(o)))}return r}var mc=4294967296,Gr=xu(0),gc=xu(1),Zd=xu(16777216);O=ye.prototype;O.ea=function(){if(xt(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:mc+r)*e,e*=mc}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(pn(this))return"0";if(xt(this))return"-"+Ke(this).toString(t);for(var e=Jt(Math.pow(t,6)),n=this,r="";;){var s=zo(n,e).g;n=Wo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,pn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function pn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function xt(t){return t.h==-1}O.X=function(t){return t=Wo(this,t),xt(t)?-1:pn(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ye(n,~t.h).add(gc)}O.abs=function(){return xt(this)?Ke(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ye(n,n[n.length-1]&-2147483648?-1:0)};function Wo(t,e){return t.add(Ke(e))}O.R=function(t){if(pn(this)||pn(t))return Gr;if(xt(this))return xt(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(xt(t))return Ke(this.R(Ke(t)));if(0>this.X(Zd)&&0>t.X(Zd))return Jt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,no(n,2*r+2*s),n[2*r+2*s+1]+=i*l,no(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,no(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,no(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ye(n,0)};function no(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function bs(t,e){this.g=t,this.h=e}function zo(t,e){if(pn(e))throw Error("division by zero");if(pn(t))return new bs(Gr,Gr);if(xt(t))return e=zo(Ke(t),e),new bs(Ke(e.g),Ke(e.h));if(xt(e))return e=zo(t,Ke(e)),new bs(Ke(e.g),e.h);if(30<t.g.length){if(xt(t)||xt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=gc,r=e;0>=r.X(t);)n=ef(n),r=ef(r);var s=Vr(n,1),i=Vr(r,1);for(r=Vr(r,2),n=Vr(n,2);!pn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Vr(r,1),n=Vr(n,1)}return e=Wo(t,s.R(e)),new bs(s,e)}for(s=Gr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Jt(n),o=i.R(e);xt(o)||0<o.X(t);)n-=r,i=Jt(n),o=i.R(e);pn(i)&&(i=gc),s=s.add(i),t=Wo(t,o)}return new bs(s,t)}O.gb=function(t){return zo(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ye(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ye(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ye(n,this.h^t.h)};function ef(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ye(n,t.h)}function Vr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ye(s,t.h)}Ho.prototype.createWebChannel=Ho.prototype.g;bt.prototype.send=bt.prototype.u;bt.prototype.open=bt.prototype.m;bt.prototype.close=bt.prototype.close;Na.NO_ERROR=0;Na.TIMEOUT=8;Na.HTTP_ERROR=6;Ag.COMPLETE="complete";bg.EventType=Oi;Oi.OPEN="a";Oi.CLOSE="b";Oi.ERROR="c";Oi.MESSAGE="d";He.prototype.listen=He.prototype.O;Oe.prototype.listenOnce=Oe.prototype.P;Oe.prototype.getLastError=Oe.prototype.Sa;Oe.prototype.getLastErrorCode=Oe.prototype.Ia;Oe.prototype.getStatus=Oe.prototype.da;Oe.prototype.getResponseJson=Oe.prototype.Wa;Oe.prototype.getResponseText=Oe.prototype.ja;Oe.prototype.send=Oe.prototype.ha;Oe.prototype.setWithCredentials=Oe.prototype.Oa;$t.prototype.digest=$t.prototype.l;$t.prototype.reset=$t.prototype.reset;$t.prototype.update=$t.prototype.j;ye.prototype.add=ye.prototype.add;ye.prototype.multiply=ye.prototype.R;ye.prototype.modulo=ye.prototype.gb;ye.prototype.compare=ye.prototype.X;ye.prototype.toNumber=ye.prototype.ea;ye.prototype.toString=ye.prototype.toString;ye.prototype.getBits=ye.prototype.D;ye.fromNumber=Jt;ye.fromString=a_;var rR=function(){return new Ho},sR=function(){return Da()},Cl=Na,iR=Ag,oR=Pr,tf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ro=bg,aR=Oe,lR=$t,Qr=ye;const nf="@firebase/firestore";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let gs="10.8.1";/**
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
 */const Ir=new Jc("@firebase/firestore");function Rs(){return Ir.logLevel}function k(t,...e){if(Ir.logLevel<=ae.DEBUG){const n=e.map(ku);Ir.debug(`Firestore (${gs}): ${t}`,...n)}}function sn(t,...e){if(Ir.logLevel<=ae.ERROR){const n=e.map(ku);Ir.error(`Firestore (${gs}): ${t}`,...n)}}function ns(t,...e){if(Ir.logLevel<=ae.WARN){const n=e.map(ku);Ir.warn(`Firestore (${gs}): ${t}`,...n)}}function ku(t){if(typeof t=="string")return t;try{/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw sn(e),new Error(e)}function Te(t,e){t||Q()}function ne(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class l_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class uR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hR{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new l_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new nt(e)}}class dR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new dR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new pR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function gR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class c_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=gR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function rs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ue(0,0))}static max(){return new Z(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class pi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends pi{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const _R=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends pi{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return _R.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new L(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Se.fromString(e))}static fromName(e){return new H(Se.fromString(e).popFirst(5))}static empty(){return new H(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Se(e.slice()))}}function yR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Wn(s,H.empty(),e)}function vR(t){return new Wn(t.readTime,t.key,-1)}class Wn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wn(Z.min(),H.empty(),-1)}static max(){return new Wn(Z.max(),H.empty(),-1)}}function ER(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const wR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Li(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==wR)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new A((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new A((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class Ou{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new gn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Hs(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Du(r.target.error);this.V.reject(new Hs(e,s))}}static open(e,n,r,s){try{return new Ou(n,e.transaction(s,r))}catch(i){throw new Hs(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(k("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new AR(n)}}class hr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,hr.S(Me())===12.2&&sn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return k("SimpleDb","Removing database:",e),or(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Em())return!1;if(hr.C())return!0;const e=Me(),n=hr.S(e),r=0<n&&n<10,s=hr.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(k("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Hs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new L(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new L(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Hs(e,o))},s.onupgradeneeded=i=>{k("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{k("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Ou.open(this.db,e,i?"readonly":"readwrite",r),l=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),A.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(k("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class TR{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return or(this.k.delete())}}class Hs extends L{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ui(t){return t.name==="IndexedDbTransactionError"}class AR{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(k("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(k("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),or(r)}add(e){return k("SimpleDb","ADD",this.store.name,e,e),or(this.store.add(e))}get(e){return or(this.store.get(e)).next(n=>(n===void 0&&(n=null),k("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return k("SimpleDb","DELETE",this.store.name,e),or(this.store.delete(e))}count(){return k("SimpleDb","COUNT",this.store.name),or(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new A((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new A((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){k("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new A((r,s)=>{n.onerror=i=>{const o=Du(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new A((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new TR(a),c=n(a.primaryKey,a.value,l);if(c instanceof A){const u=c.catch(h=>(l.done(),A.reject(h)));r.push(u)}l.isDone?s():l.$===null?a.continue():a.continue(l.$)}}).next(()=>A.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function or(t){return new A((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Du(r.target.error);n(s)}})}let rf=!1;function Du(t){const e=hr.S(Me());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return rf||(rf=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class Nu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Nu._e=-1;function qa(t){return t==null}function Ko(t){return t===0&&1/t==-1/0}function bR(t){return typeof t=="number"&&Number.isInteger(t)&&!Ko(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function sf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function u_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new so(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new so(this.root,e,this.comparator,!1)}getReverseIterator(){return new so(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new so(this.root,e,this.comparator,!0)}}class so{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ye{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new of(this.data.getIterator())}getIteratorFrom(e){return new of(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class of{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new Ye(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class h_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new h_("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const RR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=RR.exec(t);if(Te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function Vu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mu(t){const e=t.mapValue.fields.__previous_value__;return Vu(e)?Mu(e):e}function mi(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class SR{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class gi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const io={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vu(t)?4:PR(t)?9007199254740991:10:Q()}function on(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mi(t).isEqual(mi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=zn(s.timestampValue),a=zn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ne(s.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ne(s.integerValue)===Ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ne(s.doubleValue),a=Ne(i.doubleValue);return o===a?Ko(o)===Ko(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(sf(o)!==sf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!on(o[l],a[l])))return!1;return!0}(t,e);default:return Q()}}function _i(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ne(i.integerValue||i.doubleValue),l=Ne(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return af(t.timestampValue,e.timestampValue);case 4:return af(mi(t),mi(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Tr(i),l=Tr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=fe(a[c],l[c]);if(u!==0)return u}return fe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=fe(Ne(i.latitude),Ne(o.latitude));return a!==0?a:fe(Ne(i.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=ss(a[c],l[c]);if(u)return u}return fe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===io.mapValue&&o===io.mapValue)return 0;if(i===io.mapValue)return 1;if(o===io.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=fe(l[h],u[h]);if(d!==0)return d;const p=ss(a[l[h]],c[u[h]]);if(p!==0)return p}return fe(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function af(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=zn(t),r=zn(e),s=fe(n.seconds,r.seconds);return s!==0?s:fe(n.nanos,r.nanos)}function is(t){return _c(t)}function _c(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=_c(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${_c(n.fields[o])}`;return s+"}"}(t.mapValue):Q()}function lf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yc(t){return!!t&&"integerValue"in t}function Lu(t){return!!t&&"arrayValue"in t}function cf(t){return!!t&&"nullValue"in t}function uf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vo(t){return!!t&&"mapValue"in t}function Ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ws(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ws(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(n)}setAll(e){let n=Qe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ws(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());vo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];vo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new mt(Ws(this.value))}}function d_(t){const e=[];return Cr(t.fields,(n,r)=>{const s=new Qe([n]);if(vo(r)){const i=d_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Tt(e)}/**
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
 */class rt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new rt(e,0,Z.min(),Z.min(),Z.min(),mt.empty(),0)}static newFoundDocument(e,n,r,s){return new rt(e,1,n,Z.min(),r,s,0)}static newNoDocument(e,n){return new rt(e,2,n,Z.min(),Z.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,Z.min(),Z.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Go{constructor(e,n){this.position=e,this.inclusive=n}}function hf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function df(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function CR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class f_{}class Ve extends f_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kR(e,n,r):n==="array-contains"?new NR(e,r):n==="in"?new VR(e,r):n==="not-in"?new MR(e,r):n==="array-contains-any"?new LR(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OR(e,r):new DR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends f_{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new jt(e,n)}matches(e){return p_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function p_(t){return t.op==="and"}function m_(t){return xR(t)&&p_(t)}function xR(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function vc(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+is(t.value);if(m_(t))return t.filters.map(e=>vc(e)).join(",");{const e=t.filters.map(n=>vc(n)).join(",");return`${t.op}(${e})`}}function g_(t,e){return t instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&on(r.value,s.value)}(t,e):t instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&g_(o,s.filters[a]),!0):!1}(t,e):void Q()}function __(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${is(n.value)}`}(t):t instanceof jt?function(n){return n.op.toString()+" {"+n.getFilters().map(__).join(" ,")+"}"}(t):"Filter"}class kR extends Ve{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class OR extends Ve{constructor(e,n){super(e,"in",n),this.keys=y_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DR extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=y_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function y_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class NR extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lu(n)&&_i(n.arrayValue,this.value)}}class VR extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_i(this.value.arrayValue,n)}}class MR extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_i(this.value.arrayValue,n)}}class LR extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_i(this.value.arrayValue,r))}}/**
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
 */class UR{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function ff(t,e=null,n=[],r=[],s=null,i=null,o=null){return new UR(t,e,n,r,s,i,o)}function Uu(t){const e=ne(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),qa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>is(r)).join(",")),e.ce=n}return e.ce}function Fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!g_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!df(t.startAt,e.startAt)&&df(t.endAt,e.endAt)}function Ec(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Fi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function FR(t,e,n,r,s,i,o,a){return new Fi(t,e,n,r,s,i,o,a)}function v_(t){return new Fi(t)}function pf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function E_(t){return t.collectionGroup!==null}function zs(t){const e=ne(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ye(Qe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Qo(i,r))}),n.has(Qe.keyField().canonicalString())||e.le.push(new Qo(Qe.keyField(),r))}return e.le}function en(t){const e=ne(t);return e.he||(e.he=$R(e,zs(t))),e.he}function $R(t,e){if(t.limitType==="F")return ff(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qo(s.field,i)});const n=t.endAt?new Go(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Go(t.startAt.position,t.startAt.inclusive):null;return ff(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wc(t,e){const n=t.filters.concat([e]);return new Fi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ic(t,e,n){return new Fi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ha(t,e){return Fu(en(t),en(e))&&t.limitType===e.limitType}function w_(t){return`${Uu(en(t))}|lt:${t.limitType}`}function Lr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>__(s)).join(", ")}]`),qa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>is(s)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function Wa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=hf(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,zs(r),s)||r.endAt&&!function(o,a,l){const c=hf(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,zs(r),s))}(t,e)}function jR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function I_(t){return(e,n)=>{let r=!1;for(const s of zs(t)){const i=BR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function BR(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?ss(l,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return u_(this.inner)}size(){return this.innerSize}}/**
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
 */const qR=new xe(H.comparator);function En(){return qR}const T_=new xe(H.comparator);function Os(...t){let e=T_;for(const n of t)e=e.insert(n.key,n);return e}function A_(t){let e=T_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function dr(){return Ks()}function b_(){return Ks()}function Ks(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const HR=new xe(H.comparator),WR=new Ye(H.comparator);function oe(...t){let e=WR;for(const n of t)e=e.add(n);return e}const zR=new Ye(fe);function KR(){return zR}/**
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
 */function R_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ko(e)?"-0":e}}function S_(t){return{integerValue:""+t}}function GR(t,e){return bR(e)?S_(e):R_(t,e)}/**
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
 */class za{constructor(){this._=void 0}}function QR(t,e,n){return t instanceof Jo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vu(i)&&(i=Mu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof yi?C_(t,e):t instanceof vi?x_(t,e):function(s,i){const o=P_(s,i),a=mf(o)+mf(s.Ie);return yc(o)&&yc(s.Ie)?S_(a):R_(s.serializer,a)}(t,e)}function JR(t,e,n){return t instanceof yi?C_(t,e):t instanceof vi?x_(t,e):n}function P_(t,e){return t instanceof Yo?function(r){return yc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Jo extends za{}class yi extends za{constructor(e){super(),this.elements=e}}function C_(t,e){const n=k_(e);for(const r of t.elements)n.some(s=>on(s,r))||n.push(r);return{arrayValue:{values:n}}}class vi extends za{constructor(e){super(),this.elements=e}}function x_(t,e){let n=k_(e);for(const r of t.elements)n=n.filter(s=>!on(s,r));return{arrayValue:{values:n}}}class Yo extends za{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function mf(t){return Ne(t.integerValue||t.doubleValue)}function k_(t){return Lu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function YR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof yi&&s instanceof yi||r instanceof vi&&s instanceof vi?rs(r.elements,s.elements,on):r instanceof Yo&&s instanceof Yo?on(r.Ie,s.Ie):r instanceof Jo&&s instanceof Jo}(t.transform,e.transform)}class XR{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ka{}function O_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new N_(t.key,tn.none()):new $i(t.key,t.data,tn.none());{const n=t.data,r=mt.empty();let s=new Ye(Qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Zn(t.key,r,new Tt(s.toArray()),tn.none())}}function ZR(t,e,n){t instanceof $i?function(s,i,o){const a=s.value.clone(),l=_f(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Zn?function(s,i,o){if(!Eo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=_f(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(D_(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Gs(t,e,n,r){return t instanceof $i?function(i,o,a,l){if(!Eo(i.precondition,o))return a;const c=i.value.clone(),u=yf(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zn?function(i,o,a,l){if(!Eo(i.precondition,o))return a;const c=yf(i.fieldTransforms,l,o),u=o.data;return u.setAll(D_(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Eo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function eS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=P_(r.transform,s||null);i!=null&&(n===null&&(n=mt.empty()),n.set(r.field,i))}return n||null}function gf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,(i,o)=>YR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $i extends Ka{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zn extends Ka{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function D_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _f(t,e,n){const r=new Map;Te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,JR(o,a,n[s]))}return r}function yf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,QR(i,o,e))}return r}class N_ extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tS extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ZR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=b_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=O_(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(n,r)=>gf(n,r))&&rs(this.baseMutations,e.baseMutations,(n,r)=>gf(n,r))}}class $u{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length);let s=function(){return HR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new $u(e,n,r,s)}}/**
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
 */class rS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,le;function iS(t){switch(t){default:return Q();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function V_(t){if(t===void 0)return sn("GRPC error has no .code"),I.UNKNOWN;switch(t){case De.OK:return I.OK;case De.CANCELLED:return I.CANCELLED;case De.UNKNOWN:return I.UNKNOWN;case De.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case De.INTERNAL:return I.INTERNAL;case De.UNAVAILABLE:return I.UNAVAILABLE;case De.UNAUTHENTICATED:return I.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case De.NOT_FOUND:return I.NOT_FOUND;case De.ALREADY_EXISTS:return I.ALREADY_EXISTS;case De.PERMISSION_DENIED:return I.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case De.ABORTED:return I.ABORTED;case De.OUT_OF_RANGE:return I.OUT_OF_RANGE;case De.UNIMPLEMENTED:return I.UNIMPLEMENTED;case De.DATA_LOSS:return I.DATA_LOSS;default:return Q()}}(le=De||(De={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function oS(){return new TextEncoder}/**
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
 */const aS=new Qr([4294967295,4294967295],0);function vf(t){const e=oS().encode(t),n=new lR;return n.update(e),new Uint8Array(n.digest())}function Ef(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qr([n,r],0),new Qr([s,i],0)]}class ju{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ds(`Invalid padding: ${n}`);if(r<0)throw new Ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Qr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Qr.fromNumber(r)));return s.compare(aS)===1&&(s=new Qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=vf(e),[r,s]=Ef(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ju(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=vf(e),[r,s]=Ef(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ga{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ji.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ga(Z.min(),s,new xe(fe),En(),oe())}}class ji{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ji(r,n,oe(),oe(),oe())}}/**
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
 */class wo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class M_{constructor(e,n){this.targetId=e,this.fe=n}}class L_{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wf{constructor(){this.ge=0,this.pe=Tf(),this.ye=at.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=oe(),n=oe(),r=oe();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new ji(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Tf()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Te(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class lS{constructor(e){this.Le=e,this.ke=new Map,this.qe=En(),this.Qe=If(),this.Ke=new xe(fe)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Ec(i))if(r===0){const o=new H(i.path);this.We(n,o,rt.newNoDocument(o,Z.min()))}else Te(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Tr(r).toUint8Array()}catch(l){if(l instanceof h_)return ns("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ju(o,s,i)}catch(l){return ns(l instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ec(a.target)){const l=new H(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,rt.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=oe();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Ga(e,n,this.Ke,this.qe,r);return this.qe=En(),this.Qe=If(),this.Ke=new xe(fe),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new wf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ye(fe),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new wf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function If(){return new xe(H.comparator)}function Tf(){return new xe(H.comparator)}const cS={asc:"ASCENDING",desc:"DESCENDING"},uS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hS={and:"AND",or:"OR"};class dS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tc(t,e){return t.useProto3Json||qa(e)?e:{value:e}}function Xo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function U_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fS(t,e){return Xo(t,e.toTimestamp())}function nn(t){return Te(!!t),Z.fromTimestamp(function(n){const r=zn(n);return new Ue(r.seconds,r.nanos)}(t))}function Bu(t,e){return Ac(t,e).canonicalString()}function Ac(t,e){const n=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function F_(t){const e=Se.fromString(t);return Te(H_(e)),e}function bc(t,e){return Bu(t.databaseId,e.path)}function xl(t,e){const n=F_(e);if(n.get(1)!==t.databaseId.projectId)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(j_(n))}function $_(t,e){return Bu(t.databaseId,e)}function pS(t){const e=F_(t);return e.length===4?Se.emptyPath():j_(e)}function Rc(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function j_(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Af(t,e,n){return{name:bc(t,e),fields:n.value.mapValue.fields}}function mS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Te(u===void 0||typeof u=="string"),at.fromBase64String(u||"")):(Te(u===void 0||u instanceof Uint8Array),at.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:V_(c.code);return new L(u,c.message||"")}(o);n=new L_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xl(t,r.document.name),i=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):Z.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=rt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new wo(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xl(t,r.document),i=r.readTime?nn(r.readTime):Z.min(),o=rt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new wo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xl(t,r.document),i=r.removedTargetIds||[];n=new wo([],i,s,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new sS(s,i),a=r.targetId;n=new M_(a,o)}}return n}function gS(t,e){let n;if(e instanceof $i)n={update:Af(t,e.key,e.value)};else if(e instanceof N_)n={delete:bc(t,e.key)};else if(e instanceof Zn)n={update:Af(t,e.key,e.data),updateMask:bS(e.fieldMask)};else{if(!(e instanceof tS))return Q();n={verify:bc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof yi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Yo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:fS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function _S(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?nn(s.updateTime):nn(i);return o.isEqual(Z.min())&&(o=nn(i)),new XR(o,s.transformResults||[])}(n,e))):[]}function yS(t,e){return{documents:[$_(t,e.path)]}}function vS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$_(t,s);const i=function(c){if(c.length!==0)return q_(jt.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:Ur(d.field),direction:IS(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Tc(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ut:n,parent:s}}function ES(t){let e=pS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=B_(h);return d instanceof jt&&m_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Qo(Fr(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,qa(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new Go(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new Go(p,d)}(n.endAt)),FR(e,s,o,i,a,"F",l,c)}function wS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function B_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(n.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fr(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Fr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jt.create(n.compositeFilter.filters.map(r=>B_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function IS(t){return cS[t]}function TS(t){return uS[t]}function AS(t){return hS[t]}function Ur(t){return{fieldPath:t.canonicalString()}}function Fr(t){return Qe.fromServerFormat(t.fieldPath)}function q_(t){return t instanceof Ve?function(n){if(n.op==="=="){if(uf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NAN"}};if(cf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(uf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NAN"}};if(cf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(n.field),op:TS(n.op),value:n.value}}}(t):t instanceof jt?function(n){const r=n.getFilters().map(s=>q_(s));return r.length===1?r[0]:{compositeFilter:{op:AS(n.op),filters:r}}}(t):Q()}function bS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function H_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Nn{constructor(e,n,r,s,i=Z.min(),o=Z.min(),a=at.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Nn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class RS{constructor(e){this.ct=e}}function SS(t){const e=ES({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ic(e,e.limit,"L"):e}/**
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
 */class PS{constructor(){this._n=new CS}addToCollectionParentIndex(e,n){return this._n.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Wn.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class CS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(Se.comparator)).toArray()}}/**
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
 */class os{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new os(0)}static Bn(){return new os(-1)}}/**
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
 */class xS{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class kS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class OS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Gs(r.mutation,s,Tt.empty(),Ue.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Os();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=En();const o=Ks(),a=function(){return Ks()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Zn)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Gs(u.mutation,c,u.mutation.getFieldMask(),Ue.now())):o.set(c.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new kS(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ks();let s=new xe((o,a)=>o-a),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Tt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||oe()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=b_();u.forEach(d=>{if(!i.has(d)){const p=O_(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):E_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):A.resolve(dr());let a=-1,l=i;return o.next(c=>A.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,oe())).next(u=>({batchId:a,changes:A_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Os();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Os();return this.indexManager.getCollectionParents(e,i).next(a=>A.forEach(a,l=>{const c=function(h,d){return new Fi(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,rt.newInvalidDocument(u)))});let a=Os();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Gs(u.mutation,c,Tt.empty(),Ue.now()),Wa(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class DS{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return A.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:nn(s.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:SS(s.bundledQuery),readTime:nn(s.readTime)}}(n)),A.resolve()}}/**
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
 */class NS{constructor(){this.overlays=new xe(H.comparator),this.hr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=dr();return A.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=dr(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=dr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=dr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return A.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rS(n,r));let i=this.hr.get(n);i===void 0&&(i=oe(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class qu{constructor(){this.Pr=new Ye(Be.Ir),this.Tr=new Ye(Be.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Be(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new H(new Se([])),r=new Be(n,e),s=new Be(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new H(new Se([])),r=new Be(n,e),s=new Be(n,e+1);let i=oe();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return H.comparator(e.key,n.key)||fe(e.pr,n.pr)}static Er(e,n){return fe(e.pr,n.pr)||H.comparator(e.key,n.key)}}/**
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
 */class VS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ye(Be.Ir)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nS(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(fe);return n.forEach(s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),A.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Be(new H(i),0);let a=new Ye(fe);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),A.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return A.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Be(n,0),s=this.wr.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class MS{constructor(e){this.vr=e,this.docs=function(){return new xe(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=En();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=En();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ER(vR(u),r)<=0||(s.has(u.key)||Wa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q()}Fr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LS(this)}getSize(e){return A.resolve(this.size)}}class LS extends xS{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class US{constructor(e){this.persistence=e,this.Mr=new _s(n=>Uu(n),Fu),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Or=0,this.Nr=new qu,this.targetCount=0,this.Br=os.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),A.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new os(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.qn(n),A.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Nr.containsKey(n))}}/**
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
 */class FS{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Nu(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new US(this),this.indexManager=new PS,this.remoteDocumentCache=function(s){return new MS(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new RS(n),this.$r=new DS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new VS(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){k("MemoryPersistence","Starting transaction:",e);const s=new $S(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return A.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class $S extends IR{constructor(e){super(),this.currentSequenceNumber=e}}class Hu{constructor(e){this.persistence=e,this.zr=new qu,this.jr=null}static Hr(e){return new Hu(e)}get Jr(){if(this.jr)return this.jr;throw Q()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),A.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Jr,r=>{const s=H.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return A.or([()=>A.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Wu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Wu(e,n.fromCache,r,s)}}/**
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
 */class jS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BS{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return AI()?8:hr.v(Me())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new jS;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Rs()<=ae.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Lr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),A.resolve()):(Rs()<=ae.DEBUG&&k("QueryEngine","Query:",Lr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Rs()<=ae.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Lr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):A.resolve())}ji(e,n){if(pf(n))return A.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ic(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,Ic(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,s){return pf(n)||s.isEqual(Z.min())?A.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?A.resolve(null):(Rs()<=ae.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lr(n)),this.es(e,o,n,yR(s,-1)).next(a=>a))})}Zi(e,n){let r=new Ye(I_(e));return n.forEach((s,i)=>{Wa(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Rs()<=ae.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Lr(n)),this.zi.getDocumentsMatchingQuery(e,n,Wn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class qS{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new xe(fe),this.rs=new _s(i=>Uu(i),Fu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OS(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function HS(t,e,n,r){return new qS(t,e,n,r)}async function W_(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=oe();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function WS(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let p=A.resolve();return d.forEach(y=>{p=p.next(()=>u.getEntry(l,y)).next(b=>{const E=c.docVersions.get(y);Te(E!==null),b.version.compareTo(E)<0&&(h.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),u.addEntry(b)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function z_(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function zS(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(at.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(b,E,S){return b.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,p,u)&&a.push(n.Qr.updateTargetData(i,p))});let l=En(),c=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(KS(i,o,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(Z.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ns=s,i))}function KS(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=En();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function GS(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QS(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Nn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Sc(t,e,n){const r=ne(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ui(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function bf(t,e,n){const r=ne(t);let s=Z.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=ne(l),d=h.rs.get(u);return d!==void 0?A.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,o,en(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:Z.min(),n?i:oe())).next(a=>(JS(r,jR(e),a),{documents:a,hs:i})))}function JS(t,e,n){let r=t.ss.get(e)||Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Rf{constructor(){this.activeTargetIds=KR()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YS{constructor(){this.no=new Rf,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Rf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XS{io(e){}shutdown(){}}/**
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
 */class Sf{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oo=null;function kl(){return oo===null?oo=function(){return 268435456+Math.round(2147483648*Math.random())}():oo++,"0x"+oo.toString(16)}/**
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
 */const ZS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class eP{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const tt="WebChannelConnection";class tP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=kl(),l=this.bo(n,r.toUriEncodedString());k("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,l,c,s).then(u=>(k("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ns("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=ZS[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=kl();return new Promise((o,a)=>{const l=new aR;l.setWithCredentials(!0),l.listenOnce(iR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Cl.NO_ERROR:const u=l.getResponseJson();k(tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Cl.TIMEOUT:k(tt,`RPC '${e}' ${i} timed out`),a(new L(I.DEADLINE_EXCEEDED,"Request time out"));break;case Cl.HTTP_ERROR:const h=l.getStatus();if(k(tt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(E){const S=E.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(S)>=0?S:I.UNKNOWN}(p.status);a(new L(y,p.message))}else a(new L(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(I.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{k(tt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);k(tt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Fo(e,n,r){const s=kl(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rR(),a=sR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");k(tt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,p=!1;const y=new eP({lo:E=>{p?k(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||(k(tt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),k(tt,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},ho:()=>h.close()}),b=(E,S,D)=>{E.listen(S,M=>{try{D(M)}catch(j){setTimeout(()=>{throw j},0)}})};return b(h,ro.EventType.OPEN,()=>{p||k(tt,`RPC '${e}' stream ${s} transport opened.`)}),b(h,ro.EventType.CLOSE,()=>{p||(p=!0,k(tt,`RPC '${e}' stream ${s} transport closed`),y.Vo())}),b(h,ro.EventType.ERROR,E=>{p||(p=!0,ns(tt,`RPC '${e}' stream ${s} transport errored:`,E),y.Vo(new L(I.UNAVAILABLE,"The operation could not be completed")))}),b(h,ro.EventType.MESSAGE,E=>{var S;if(!p){const D=E.data[0];Te(!!D);const M=D,j=M.error||((S=M[0])===null||S===void 0?void 0:S.error);if(j){k(tt,`RPC '${e}' stream ${s} received error:`,j);const Y=j.status;let B=function(se){const Ie=De[se];if(Ie!==void 0)return V_(Ie)}(Y),he=j.message;B===void 0&&(B=I.INTERNAL,he="Unknown error status: "+Y+" with message "+j.message),p=!0,y.Vo(new L(B,he)),h.close()}else k(tt,`RPC '${e}' stream ${s} received:`,D),y.mo(D)}}),b(a,oR.STAT_EVENT,E=>{E.stat===tf.PROXY?k(tt,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===tf.NOPROXY&&k(tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}function Ol(){return typeof document<"u"?document:null}/**
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
 */function Qa(t){return new dS(t,!0)}/**
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
 */class K_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class G_{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new K_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(sn(n.toString()),sn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new L(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nP extends G_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=mS(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?nn(o.readTime):Z.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Rc(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Ec(l)?{documents:yS(i,l)}:{query:vS(i,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=U_(i,o.resumeToken);const c=Tc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Xo(i,o.snapshotVersion.toTimestamp());const c=Tc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=wS(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Rc(this.serializer),n.removeTarget=e,this.t_(n)}}class rP extends G_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=_S(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.T_(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Rc(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gS(this.serializer,r))};this.t_(n)}}/**
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
 */class sP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Ac(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(I.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Ac(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(I.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class iP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(sn(n),this.g_=!1):k("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class oP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{xr(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ne(l);c.v_.add(4),await Bi(c),c.x_.set("Unknown"),c.v_.delete(4),await Ja(c)}(this))})}),this.x_=new iP(r,s)}}async function Ja(t){if(xr(t))for(const e of t.F_)await e(!0)}async function Bi(t){for(const e of t.F_)await e(!1)}function Q_(t,e){const n=ne(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Gu(n)?Ku(n):ys(n).Jo()&&zu(n,e))}function J_(t,e){const n=ne(t),r=ys(n);n.C_.delete(e),r.Jo()&&Y_(n,e),n.C_.size===0&&(r.Jo()?r.Xo():xr(n)&&n.x_.set("Unknown"))}function zu(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ys(t).c_(e)}function Y_(t,e){t.O_.Oe(e),ys(t).l_(e)}function Ku(t){t.O_=new lS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ys(t).start(),t.x_.p_()}function Gu(t){return xr(t)&&!ys(t).Ho()&&t.C_.size>0}function xr(t){return ne(t).v_.size===0}function X_(t){t.O_=void 0}async function aP(t){t.C_.forEach((e,n)=>{zu(t,e)})}async function lP(t,e){X_(t),Gu(t)?(t.x_.S_(e),Ku(t)):t.x_.set("Unknown")}async function cP(t,e,n){if(t.x_.set("Online"),e instanceof L_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zo(t,r)}else if(e instanceof wo?t.O_.$e(e):e instanceof M_?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(Z.min()))try{const r=await z_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.C_.get(l);if(!u)return;i.C_.set(l,u.withResumeToken(at.EMPTY_BYTE_STRING,u.snapshotVersion)),Y_(i,l);const h=new Nn(u.target,l,c,u.sequenceNumber);zu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await Zo(t,r)}}async function Zo(t,e,n){if(!Ui(e))throw e;t.v_.add(1),await Bi(t),t.x_.set("Offline"),n||(n=()=>z_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Ja(t)})}function Z_(t,e){return e().catch(n=>Zo(t,n,e))}async function Ya(t){const e=ne(t),n=Kn(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;uP(e);)try{const s=await GS(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,hP(e,s)}catch(s){await Zo(e,s)}ey(e)&&ty(e)}function uP(t){return xr(t)&&t.D_.length<10}function hP(t,e){t.D_.push(e);const n=Kn(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function ey(t){return xr(t)&&!Kn(t).Ho()&&t.D_.length>0}function ty(t){Kn(t).start()}async function dP(t){Kn(t).d_()}async function fP(t){const e=Kn(t);for(const n of t.D_)e.I_(n.mutations)}async function pP(t,e,n){const r=t.D_.shift(),s=$u.from(r,e,n);await Z_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ya(t)}async function mP(t,e){e&&Kn(t).P_&&await async function(r,s){if(function(o){return iS(o)&&o!==I.ABORTED}(s.code)){const i=r.D_.shift();Kn(r).Zo(),await Z_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ya(r)}}(t,e),ey(t)&&ty(t)}async function Pf(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=xr(n);n.v_.add(3),await Bi(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Ja(n)}async function gP(t,e){const n=ne(t);e?(n.v_.delete(2),await Ja(n)):e||(n.v_.add(2),await Bi(n),n.x_.set("Unknown"))}function ys(t){return t.N_||(t.N_=function(n,r,s){const i=ne(n);return i.R_(),new nP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:aP.bind(null,t),To:lP.bind(null,t),u_:cP.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Gu(t)?Ku(t):t.x_.set("Unknown")):(await t.N_.stop(),X_(t))})),t.N_}function Kn(t){return t.B_||(t.B_=function(n,r,s){const i=ne(n);return i.R_(),new rP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:dP.bind(null,t),To:mP.bind(null,t),E_:fP.bind(null,t),T_:pP.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await Ya(t)):(await t.B_.stop(),t.D_.length>0&&(k("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
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
 */class Qu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Qu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ju(t,e){if(sn("AsyncQueue",`${e}: ${t}`),Ui(t))return new L(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Jr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Os(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new Jr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Cf{constructor(){this.L_=new xe(H.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):Q():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class as{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new as(e,n,Jr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class _P{constructor(){this.q_=void 0,this.Q_=[]}}class yP{constructor(){this.queries=new _s(e=>w_(e),Ha),this.onlineState="Unknown",this.K_=new Set}}async function vP(t,e){const n=ne(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new _P),s)try{i.q_=await n.onListen(r)}catch(o){const a=Ju(o,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.Q_.push(e),e.U_(n.onlineState),i.q_&&e.W_(i.q_)&&Yu(n)}async function EP(t,e){const n=ne(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function wP(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&Yu(n)}function IP(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function Yu(t){t.K_.forEach(e=>{e.next()})}class TP{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class ny{constructor(e){this.key=e}}class ry{constructor(e){this.key=e}}class AP{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=oe(),this.mutatedKeys=oe(),this.ua=I_(e),this.ca=new Jr(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Cf,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Wa(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),b=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?y!==b&&(r.track({type:3,doc:p}),E=!0):this.Ia(d,p)||(r.track({type:2,doc:p}),E=!0,(l&&this.ua(p,l)>0||c&&this.ua(p,c)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(l||c)&&(a=!0)),E&&(p?(o=o.add(p),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((u,h)=>function(p,y){const b=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return b(p)-b(y)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=n&&!s?this.Ea():[],l=this.aa.size===0&&this.current&&!s?1:0,c=l!==this._a;return this._a=l,o.length!==0||c?{snapshot:new as(this.query,e.ca,i,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Cf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=oe(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new ry(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new ny(r))}),n}Ra(e){this.oa=e.hs,this.aa=oe();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return as.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class bP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class RP{constructor(e){this.key=e,this.ma=!1}}class SP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new _s(a=>w_(a),Ha),this.pa=new Map,this.ya=new Set,this.wa=new xe(H.comparator),this.Sa=new Map,this.ba=new qu,this.Da={},this.Ca=new Map,this.va=os.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function PP(t,e){const n=UP(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await QS(n.localStore,en(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await CP(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Q_(n.remoteStore,o)}return s}async function CP(t,e,n,r,s){t.Ma=(h,d,p)=>async function(b,E,S,D){let M=E.view.ha(S);M.Xi&&(M=await bf(b.localStore,E.query,!1).then(({documents:he})=>E.view.ha(he,M)));const j=D&&D.targetChanges.get(E.targetId),Y=D&&D.targetMismatches.get(E.targetId)!=null,B=E.view.applyChanges(M,b.isPrimaryClient,j,Y);return kf(b,E.targetId,B.da),B.snapshot}(t,h,d,p);const i=await bf(t.localStore,e,!0),o=new AP(e,i.hs),a=o.ha(i.documents),l=ji.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);kf(t,n,c.da);const u=new bP(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function xP(t,e){const n=ne(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Ha(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Sc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),J_(n.remoteStore,r.targetId),Pc(n,r.targetId)}).catch(Li)):(Pc(n,r.targetId),await Sc(n.localStore,r.targetId,!0))}async function kP(t,e,n){const r=FP(t);try{const s=await function(o,a){const l=ne(o),c=Ue.now(),u=a.reduce((p,y)=>p.add(y.key),oe());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=En(),b=oe();return l.os.getEntries(p,u).next(E=>{y=E,y.forEach((S,D)=>{D.isValidDocument()||(b=b.add(S))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(E=>{h=E;const S=[];for(const D of a){const M=eS(D,h.get(D.key).overlayedDocument);M!=null&&S.push(new Zn(D.key,M,d_(M.value.mapValue),tn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,S,a)}).next(E=>{d=E;const S=E.applyToLocalDocumentSet(h,b);return l.documentOverlayCache.saveOverlays(p,E.batchId,S)})}).then(()=>({batchId:d.batchId,changes:A_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new xe(fe)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(r,s.batchId,n),await qi(r,s.changes),await Ya(r.remoteStore)}catch(s){const i=Ju(s,"Failed to persist write");n.reject(i)}}async function sy(t,e){const n=ne(t);try{const r=await zS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Te(o.ma):s.removedDocuments.size>0&&(Te(o.ma),o.ma=!1))}),await qi(n,r,e)}catch(r){await Li(r)}}function xf(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ne(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.U_(a)&&(c=!0)}),c&&Yu(l)}(r.eventManager,e),s.length&&r.fa.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OP(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new xe(H.comparator);o=o.insert(i,rt.newNoDocument(i,Z.min()));const a=oe().add(i),l=new Ga(Z.min(),new Map,new xe(fe),o,a);await sy(r,l),r.wa=r.wa.remove(i),r.Sa.delete(e),Xu(r)}else await Sc(r.localStore,e,!1).then(()=>Pc(r,e,n)).catch(Li)}async function DP(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await WS(n.localStore,e);oy(n,r,null),iy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qi(n,s)}catch(s){await Li(s)}}async function NP(t,e,n){const r=ne(t);try{const s=await function(o,a){const l=ne(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Te(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);oy(r,e,n),iy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qi(r,s)}catch(s){await Li(s)}}function iy(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function oy(t,e,n){const r=ne(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function Pc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||ay(t,r)})}function ay(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(J_(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Xu(t))}function kf(t,e,n){for(const r of n)r instanceof ny?(t.ba.addReference(r.key,e),VP(t,r)):r instanceof ry?(k("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||ay(t,r.key)):Q()}function VP(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(k("SyncEngine","New document in limbo: "+n),t.ya.add(r),Xu(t))}function Xu(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new H(Se.fromString(e)),r=t.va.next();t.Sa.set(r,new RP(n)),t.wa=t.wa.insert(n,r),Q_(t.remoteStore,new Nn(en(v_(n.path)),r,"TargetPurposeLimboResolution",Nu._e))}}async function qi(t,e,n){const r=ne(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Wu.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fa.u_(s),await async function(l,c){const u=ne(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(c,d=>A.forEach(d.qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>A.forEach(d.Qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Ui(h))throw h;k("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.ns.get(d),y=p.snapshotVersion,b=p.withLastLimboFreeSnapshotVersion(y);u.ns=u.ns.insert(d,b)}}}(r.localStore,i))}async function MP(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const r=await W_(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(l=>{l.reject(new L(I.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qi(n,r.us)}}function LP(t,e){const n=ne(t),r=n.Sa.get(e);if(r&&r.ma)return oe().add(r.key);{let s=oe();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function UP(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OP.bind(null,e),e.fa.u_=wP.bind(null,e.eventManager),e.fa.xa=IP.bind(null,e.eventManager),e}function FP(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NP.bind(null,e),e}class Of{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return HS(this.persistence,new BS,e.initialUser,this.serializer)}createPersistence(e){return new FS(Hu.Hr,this.serializer)}createSharedClientState(e){return new YS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $P{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MP.bind(null,this.syncEngine),await gP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yP}()}createDatastore(e){const n=Qa(e.databaseInfo.databaseId),r=function(i){return new tP(i)}(e.databaseInfo);return function(i,o,a,l){return new sP(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new oP(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>xf(this.syncEngine,n,0),function(){return Sf.D()?new Sf:new XS}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new SP(s,i,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=ne(r);k("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Bi(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class jP{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):sn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class BP{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=c_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{k("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(k("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ju(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dl(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await W_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Df(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HP(t);k("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Pf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Pf(e.remoteStore,s)),t._onlineComponents=e}function qP(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function HP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!qP(n))throw n;ns("Error using user provided cache. Falling back to memory cache: "+n),await Dl(t,new Of)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await Dl(t,new Of);return t._offlineComponents}async function ly(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await Df(t,t._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await Df(t,new $P))),t._onlineComponents}function WP(t){return ly(t).then(e=>e.syncEngine)}async function zP(t){const e=await ly(t),n=e.eventManager;return n.onListen=PP.bind(null,e.syncEngine),n.onUnlisten=xP.bind(null,e.syncEngine),n}function KP(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new jP({next:d=>{o.enqueueAndForget(()=>EP(i,h)),d.fromCache&&l.source==="server"?c.reject(new L(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new TP(a,u,{includeMetadataChanges:!0,Z_:!0});return vP(i,h)}(await zP(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function cy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Nf=new Map;/**
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
 */function uy(t,e,n){if(!n)throw new L(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GP(t,e,n,r){if(e===!0&&r===!0)throw new L(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vf(t){if(!H.isDocumentKey(t))throw new L(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mf(t){if(H.isDocumentKey(t))throw new L(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function ls(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xa(t);throw new L(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Lf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Za{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cR;switch(r.type){case"firstParty":return new fR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Nf.get(n);r&&(k("ComponentProvider","Removing Datastore"),Nf.delete(n),r.terminate())}(this),Promise.resolve()}}function QP(t,e,n,r={}){var s;const i=(t=ls(t,Za))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=nt.MOCK_USER;else{a=vm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new L(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new nt(c)}t._authCredentials=new uR(new l_(a,l))}}/**
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
 */class vs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vs(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class $n extends vs{constructor(e,n,r){super(e,n,v_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new H(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function Uf(t,e,...n){if(t=qe(t),uy("collection","path",e),t instanceof Za){const r=Se.fromString(e,...n);return Mf(r),new $n(t,null,r)}{if(!(t instanceof At||t instanceof $n))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Mf(r),new $n(t.firestore,null,r)}}function hy(t,e,...n){if(t=qe(t),arguments.length===1&&(e=c_.newId()),uy("doc","path",e),t instanceof Za){const r=Se.fromString(e,...n);return Vf(r),new At(t,null,new H(r))}{if(!(t instanceof At||t instanceof $n))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Vf(r),new At(t.firestore,t instanceof $n?t.converter:null,new H(r))}}/**
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
 */class JP{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new K_(this,"async_queue_retry"),this._u=()=>{const n=Ol();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Ol();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=Ol();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new gn;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!Ui(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw sn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const s=Qu.createAndSchedule(this,e,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&Q()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class el extends Za{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new JP}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fy(this),this._firestoreClient.terminate()}}function YP(t,e){const n=typeof t=="object"?t:Xc(),r=typeof t=="string"?t:e||"(default)",s=Ia(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gm("firestore");i&&QP(s,...i)}return s}function dy(t){return t._firestoreClient||fy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fy(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new SR(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,cy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new BP(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(at.fromBase64String(e))}catch(n){throw new L(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class tl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zu{constructor(e){this._methodName=e}}/**
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
 */class eh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
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
 */const XP=/^__.*__$/;class ZP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Zn(e,this.data,this.fieldMask,n,this.fieldTransforms):new $i(e,this.data,n,this.fieldTransforms)}}class py{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Zn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function my(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class th{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new th(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.mu(e),s}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return ea(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(my(this.du)&&XP.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class eC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qa(e)}Su(e,n,r,s=!1){return new th({du:e,methodName:n,wu:r,path:Qe.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nh(t){const e=t._freezeSettings(),n=Qa(t._databaseId);return new eC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tC(t,e,n,r,s,i={}){const o=t.Su(i.merge||i.mergeFields?2:0,e,n,s);rh("Data must be an object, but it was:",o,r);const a=gy(r,o);let l,c;if(i.merge)l=new Tt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Cc(e,h,n);if(!o.contains(d))throw new L(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);yy(u,d)||u.push(d)}l=new Tt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new ZP(new mt(a),l,c)}class nl extends Zu{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nl}}function nC(t,e,n,r){const s=t.Su(1,e,n);rh("Data must be an object, but it was:",s,r);const i=[],o=mt.empty();Cr(r,(l,c)=>{const u=sh(e,l,n);c=qe(c);const h=s.fu(u);if(c instanceof nl)i.push(u);else{const d=Hi(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Tt(i);return new py(o,a,s.fieldTransforms)}function rC(t,e,n,r,s,i){const o=t.Su(1,e,n),a=[Cc(e,r,n)],l=[s];if(i.length%2!=0)throw new L(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Cc(e,i[d])),l.push(i[d+1]);const c=[],u=mt.empty();for(let d=a.length-1;d>=0;--d)if(!yy(c,a[d])){const p=a[d];let y=l[d];y=qe(y);const b=o.fu(p);if(y instanceof nl)c.push(p);else{const E=Hi(y,b);E!=null&&(c.push(p),u.set(p,E))}}const h=new Tt(c);return new py(u,h,o.fieldTransforms)}function sC(t,e,n,r=!1){return Hi(n,t.Su(r?4:3,e))}function Hi(t,e){if(_y(t=qe(t)))return rh("Unsupported field value:",e,t),gy(t,e);if(t instanceof Zu)return function(r,s){if(!my(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Hi(a,s.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ue.fromDate(r);return{timestampValue:Xo(s.serializer,i)}}if(r instanceof Ue){const i=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xo(s.serializer,i)}}if(r instanceof eh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:U_(s.serializer,r._byteString)};if(r instanceof At){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${Xa(r)}`)}(t,e)}function gy(t,e){const n={};return u_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,(r,s)=>{const i=Hi(s,e.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _y(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof eh||t instanceof cs||t instanceof At||t instanceof Zu)}function rh(t,e,n){if(!_y(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Xa(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function Cc(t,e,n){if((e=qe(e))instanceof tl)return e._internalPath;if(typeof e=="string")return sh(t,e);throw ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const iC=new RegExp("[~\\*/\\[\\]]");function sh(t,e,n){if(e.search(iC)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tl(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new L(I.INVALID_ARGUMENT,a+t+l)}function yy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class vy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ih("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class oC extends vy{data(){return super.data()}}function ih(t,e){return typeof e=="string"?sh(t,e):e instanceof tl?e._internalPath:e._delegate._internalPath}/**
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
 */function aC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oh{}class lC extends oh{}function cC(t,e,...n){let r=[];e instanceof oh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof ah).length,a=i.filter(l=>l instanceof rl).length;if(o>1||o>0&&a>0)throw new L(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class rl extends lC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new rl(e,n,r)}_apply(e){const n=this._parse(e);return Ey(e._query,n),new vs(e.firestore,e.converter,wc(e._query,n))}_parse(e){const n=nh(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new L(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){$f(h,u);const p=[];for(const y of h)p.push(Ff(l,i,y));d={arrayValue:{values:p}}}else d=Ff(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||$f(h,u),d=sC(a,o,h,u==="in"||u==="not-in");return Ve.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function uC(t,e,n){const r=e,s=ih("where",t);return rl._create(s,r,n)}class ah extends oh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ah(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)Ey(o,l),o=wc(o,l)}(e._query,n),new vs(e.firestore,e.converter,wc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ff(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new L(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!E_(e)&&n.indexOf("/")!==-1)throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!H.isDocumentKey(r))throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lf(t,new H(r))}if(n instanceof At)return lf(t,n._key);throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xa(n)}.`)}function $f(t,e){if(!Array.isArray(t)||t.length===0)throw new L(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ey(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class hC{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new eh(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(mi(e));default:return null}}convertTimestamp(e){const n=zn(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Te(H_(r));const s=new gi(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||sn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function dC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ao{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fC extends vy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Io(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ih("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Io extends fC{data(e={}){return super.data(e)}}class pC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ao(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Io(this._firestore,this._userDataWriter,r.key,r,new ao(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Io(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ao(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Io(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ao(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:mC(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class gC extends hC{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function _C(t){t=ls(t,vs);const e=ls(t.firestore,el),n=dy(e),r=new gC(e);return aC(t._query),KP(n,t._query).then(s=>new pC(e,r,t,s))}function yC(t,e,n,...r){t=ls(t,At);const s=ls(t.firestore,el),i=nh(s);let o;return o=typeof(e=qe(e))=="string"||e instanceof tl?rC(i,"updateDoc",t._key,e,n,r):nC(i,"updateDoc",t._key,e),wy(s,[o.toMutation(t._key,tn.exists(!0))])}function vC(t,e){const n=ls(t.firestore,el),r=hy(t),s=dC(t.converter,e);return wy(n,[tC(nh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function wy(t,e){return function(r,s){const i=new gn;return r.asyncQueue.enqueueAndForget(async()=>kP(await WP(r),s,i)),i.promise}(dy(t),e)}(function(e,n=!0){(function(s){gs=s})(Sr),vr(new Hn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new el(new hR(r.getProvider("auth-internal")),new mR(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new L(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gi(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Yt(nf,"4.4.3",e),Yt(nf,"4.4.3","esm2017")})();/**
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
 */const Iy="firebasestorage.googleapis.com",EC="storageBucket",wC=2*60*1e3,IC=10*60*1e3;/**
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
 */class cn extends ln{constructor(e,n,r=0){super(Nl(e),`Firebase Storage: ${n} (${Nl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,cn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var an;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(an||(an={}));function Nl(t){return"storage/"+t}function TC(){const t="An unknown error occurred, please check the error payload for server response.";return new cn(an.UNKNOWN,t)}function AC(){return new cn(an.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bC(){return new cn(an.CANCELED,"User canceled the upload/download.")}function RC(t){return new cn(an.INVALID_URL,"Invalid URL '"+t+"'.")}function SC(t){return new cn(an.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function jf(t){return new cn(an.INVALID_ARGUMENT,t)}function Ty(){return new cn(an.APP_DELETED,"The Firebase app was deleted.")}function PC(t){return new cn(an.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */let fr=class To{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=To.makeFromUrl(e,n)}catch{return new To(e,"")}if(r.path==="")return r;throw SC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(j){j.path_=decodeURIComponent(j.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),y={bucket:1,path:3},b=n===Iy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",S=new RegExp(`^https?://${b}/${s}/${E}`,"i"),M=[{regex:a,indices:l,postModify:i},{regex:p,indices:y,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let j=0;j<M.length;j++){const Y=M[j],B=Y.regex.exec(e);if(B){const he=B[Y.indices.bucket];let ee=B[Y.indices.path];ee||(ee=""),r=new To(he,ee),Y.postModify(r);break}}if(r==null)throw RC(e);return r}};class CC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function xC(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...E){c||(c=!0,e.apply(null,E))}function h(E){s=setTimeout(()=>{s=null,t(p,l())},E)}function d(){i&&clearTimeout(i)}function p(E,...S){if(c){d();return}if(E){d(),u.call(null,E,...S);return}if(l()||o){d(),u.call(null,E,...S);return}r<64&&(r*=2);let M;a===1?(a=2,M=0):M=(r+Math.random())*1e3,h(M)}let y=!1;function b(E){y||(y=!0,d(),!c&&(s!==null?(E||(a=2),clearTimeout(s),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function kC(t){t(!1)}/**
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
 */function OC(t){return t!==void 0}function Bf(t,e,n,r){if(r<e)throw jf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw jf(`Invalid value for '${t}'. Expected ${n} or less.`)}function DC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var ta;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ta||(ta={}));/**
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
 */function NC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class VC{constructor(e,n,r,s,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new lo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ta.NO_ERROR,l=i.getStatus();if(!a||NC(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ta.ABORT;r(!1,new lo(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new lo(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());OC(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=TC();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Ty():bC();o(l)}else{const l=AC();o(l)}};this.canceled_?n(!1,new lo(!1,null,!0)):this.backoffId_=xC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function MC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function LC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function FC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $C(t,e,n,r,s,i,o=!0){const a=DC(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return UC(c,e),MC(c,n),LC(c,i),FC(c,r),new VC(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function jC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class na{constructor(e,n){this._service=e,n instanceof fr?this._location=n:this._location=fr.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new na(e,n)}get root(){const e=new fr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BC(this._location.path)}get storage(){return this._service}get parent(){const e=jC(this._location.path);if(e===null)return null;const n=new fr(this._location.bucket,e);return new na(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw PC(e)}}function qf(t,e){const n=e==null?void 0:e[EC];return n==null?null:fr.makeFromBucketSpec(n,t)}function qC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:vm(s,t.app.options.projectId))}class HC{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Iy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wC,this._maxUploadRetryTime=IC,this._requests=new Set,s!=null?this._bucket=fr.makeFromBucketSpec(s,this._host):this._bucket=qf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=fr.makeFromBucketSpec(this._url,e):this._bucket=qf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Bf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Bf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new na(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new CC(Ty());{const o=$C(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Hf="@firebase/storage",Wf="0.12.2";/**
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
 */const Ay="storage";function WC(t=Xc(),e){t=qe(t);const r=Ia(t,Ay).getImmediate({identifier:e}),s=gm("storage");return s&&zC(r,...s),r}function zC(t,e,n,r={}){qC(t,e,n,r)}function KC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new HC(n,r,s,e,Sr)}function GC(){vr(new Hn(Ay,KC,"PUBLIC").setMultipleInstances(!0)),Yt(Hf,Wf,""),Yt(Hf,Wf,"esm2017")}GC();const QC={apiKey:"AIzaSyDyp1H4_IoRX2Z6AbXFtqUmKJlpkCu91HY",authDomain:"motormate-cd4a6.firebaseapp.com",projectId:"motormate-cd4a6",storageBucket:"motormate-cd4a6.appspot.com",messagingSenderId:"34392934813",appId:"1:34392934813:web:29660022bf0a9ffec14774"},lh=Tm(QC),us=tb(lh),Vl=YP(lh);WC(lh);const Es=Ii("userStore",()=>{const t=pe(""),e=pe(""),n=pe(""),r=pe(""),s=pe(""),i=ds([{brand:"",model:"",year:"",mileage:"",fuelType:"gasolina",soatExpiry:null,annualInspection:null,technicalInspection:null}]);function o(){i.push({brand:"",model:"",year:"",mileage:"",fuelType:"gasolina",soatExpiry:null,annualInspection:null,technicalInspection:null})}function a(p){i.splice(p,1)}function l(p){e.value=p.uid||"",n.value=p.firstName||"",r.value=p.lastName||"",s.value=p.phone||"",Object.assign(i,p.cars||[{brand:"",model:"",year:"",mileage:"",fuelType:"",soatExpiry:"",annualInspection:"",technicalInspection:""}])}function c(){e.value="",n.value="",r.value="",s.value="",Object.assign(i,[{brand:"",model:"",year:"",mileage:"",fuelType:"",soatExpiry:"",annualInspection:"",technicalInspection:""}])}async function u(p){if(p){const y=Uf(Vl,"users"),b=cC(y,uC("uid","==",p));(await _C(b)).docs.map(S=>{const D=S.data();t.value=S.id,l(D)})}else return[]}async function h(p){try{const y=Uf(Vl,"users"),b={id:"",uid:p,firstName:"",lastName:"",phone:"",cars:[{brand:"",model:"",year:"",mileage:"",fuelType:"gasolina",soatExpiry:"",annualInspection:"",technicalInspection:""}]};return l(b),await vC(y,b)}catch(y){throw y}}async function d(p){try{const y=hy(Vl,"users",t.value);await yC(y,p)}catch(y){throw y}}return{id:t,uid:e,firstName:n,lastName:r,phone:s,cars:i,setUser:l,getUserByUid:u,createUser:h,updateUser:d,resetUser:c,addCar:o,removeCar:a}}),ch=Ii("auth",()=>{const t=pe(""),e=pe("");async function n(){return new Promise((r,s)=>{try{us.onAuthStateChanged(i=>{i&&(t.value=i.email,e.value=i.uid),r()})}catch(i){s(i)}})}return{email:t,uid:e,getFirebaseUser:n}}),JC=Rt({__name:"App",setup(t){const e=Es(),n=ch();return Hc(async()=>{await n.getFirebaseUser().then(async()=>{await e.getUserByUid(n==null?void 0:n.uid)})}),(r,s)=>(re(),_t(K(um)))}}),by="/assets/location-DpZDhNKF.svg",YC="/assets/profile-DfsRXmBN.png",Ry=Ii("googleMapsModal",()=>{const t=pe(""),e=pe(""),n=pe(!1),r=pe(!1);function s(c){t.value=c}function i(c){e.value=c}function o(c){n.value=c}function a(c){r.value=c}function l(c){o(!0),a(!0),s(c.placeId),i(c.address)}return{isLoading:n,showModal:r,placeId:t,address:e,setPlaceId:s,setAddress:i,setIsLoading:o,setShowModal:a,handleShowGoogleMapsModal:l}}),Sy=Ii("loginModalStore",()=>{const t=pe(!1),e=pe(!1),n=pe(""),r=pe("");function s(a){t.value=a}function i(a){e.value=a}function o(){i(!0)}return{email:n,password:r,isLoading:t,showModal:e,setIsLoading:s,setShowModal:i,handleShowLoginModal:o}}),Py=Ii("registerModalStore",()=>{const t=pe(!1),e=pe(!1),n=pe(""),r=pe("");function s(a){t.value=a}function i(a){e.value=a}function o(){i(!0)}return{email:n,password:r,isLoading:t,showModal:e,setIsLoading:s,setShowModal:i,handleShowRegisterModal:o}}),XC={class:"flex sm:flex-row flex-col justify-between items-center bg-blue-900 w-full px-4 py-4 drop-shadow-xl sticky"},ZC={class:"flex flex-row justify-start items-center sm:mb-0 mb-5"},e1=g("p",{class:"cursor-default text-sky-100 border-sky-100 text-4xl font-bold border-4 px-1 hidden sm:block"},"MOTORMATE",-1),t1={class:"flex flex-col justify-center items-center sm:mx-7"},n1={class:"cursor-default flex flex-row px-2 rounded-sm"},r1=g("p",{class:"text-sky-300 font-bold"},"Ubicación",-1),s1=["src"],i1=g("p",{class:"cursor-default w-52 text-center text-sky-100 font-black px-6 py-1"},"Trujillo, La Libertad",-1),o1={class:"flex flex-row justify-between items-center"},a1={class:"flex flex-row justify-between items-center"},l1={class:"flex flex-row justify-between items-center"},c1=["src"],u1={class:"text-blue-900 font-medium"},h1=g("div",{class:"absolute w-0 h-0",style:{top:"-10px",left:"75px","border-left":"10px solid transparent","border-right":"10px solid transparent","border-bottom":"10px solid #1e3a8a"}},null,-1),d1=Rt({__name:"TopBar",setup(t){const{handleShowLoginModal:e}=Sy(),{handleShowRegisterModal:n}=Py(),r=Es(),s=ch(),i=pe(!1);async function o(){try{await H0(us),r.resetUser()}catch(a){console.error("Error al cerrar sesión:",a)}}return(a,l)=>(re(),we("div",XC,[g("div",ZC,[e1,g("div",t1,[g("span",n1,[r1,g("img",{src:K(by),alt:"LOCATION",class:"h-6"},null,8,s1)]),i1])]),g("div",o1,[g("div",a1,[K(r).uid?(re(),we("div",{key:0,class:"cursor-default bg-white rounded-md h-12 min-w-fit px-2 flex flex-col justify-center items-center",onMouseenter:l[0]||(l[0]=c=>i.value=!0),onMouseleave:l[1]||(l[1]=c=>i.value=!1)},[g("div",l1,[g("img",{src:K(YC),alt:"AVATAR",class:"w-8 mr-2"},null,8,c1),g("p",u1,wt(K(s).email||"-"),1)]),i.value?(re(),we("button",{key:0,onClick:o,class:"cursor-pointer py-1 font-normal rounded-md border-blue-100 border-2 bg-blue-900 text-blue-100 hover:border-blue-900 hover:bg-blue-100 hover:text-blue-900 w-44 top-[4.3em] absolute flex flex-col justify-between items-center"},[h1,Ot(" Cerrar sesión ")])):It("",!0)],32)):(re(),we(ut,{key:1},[g("button",{onClick:l[2]||(l[2]=(...c)=>K(e)&&K(e)(...c)),class:"font-semibold w-40 px-5 py-2 rounded-lg border-blue-100 border-2 bg-blue-900 text-blue-100 hover:border-0 hover:bg-blue-100 hover:text-blue-900 mr-3"},"INGRESAR"),g("button",{onClick:l[3]||(l[3]=(...c)=>K(n)&&K(n)(...c)),class:"font-semibold w-40 px-5 py-2 rounded-lg border-blue-100 border-2 bg-blue-900 text-blue-100 hover:border-0 hover:bg-blue-100 hover:text-blue-900"},"REGISTRARSE")],64))])])]))}}),f1={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 bg-blue-100"},p1=g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1),m1=[p1],g1={key:1,xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 bg-blue-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},_1=g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1),y1=[_1],v1=Rt({__name:"SideBar",setup(t){const e=pe(!1),n=Es();function r(){e.value=!e.value}return(s,i)=>{const o=Rp("router-link");return re(),we("div",null,[g("div",{onClick:r,class:_n([{"w-44":e.value,"w-6.5":!e.value},"bg-blue-900 cursor-pointer sm:hidden flex fixed top-0"])},[e.value?(re(),we("svg",f1,m1)):(re(),we("svg",g1,y1))],2),g("div",{class:_n([{"flex top-[1.5rem]":e.value,"hidden sm:flex top-[5.5rem]":!e.value},"flex-col justify-start items-center h-full w-44 bg-blue-900 drop-shadow-xl fixed bottom-0"])},[ke(o,{to:{name:"AllServices"},class:"font-medium text-sky-100 hover:text-sky-900 bg-blue-900 hover:bg-blue-100 drop-shadow-xl py-1 mb-1 w-full text-left pl-3"},{default:Lt(()=>[Ot("Todos los servicios")]),_:1}),ke(o,{to:{name:"CarWashServices"},class:"font-medium text-sky-100 hover:text-sky-900 bg-blue-900 hover:bg-blue-100 drop-shadow-xl py-1 mb-1 w-full text-left pl-3"},{default:Lt(()=>[Ot("Todo Lavado")]),_:1}),K(n).uid?(re(),_t(o,{key:0,to:{name:"Profile"},class:"font-medium text-sky-100 hover:text-sky-900 bg-blue-900 hover:bg-blue-100 drop-shadow-xl py-1 mb-1 w-full text-left pl-3"},{default:Lt(()=>[Ot("Mi perfil")]),_:1})):It("",!0)],2)])}}}),Cy=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},E1={},w1={class:"loader"};function I1(t,e){return re(),we("div",w1)}const uh=Cy(E1,[["render",I1]]),T1={class:"fixed w-screen h-screen top-0 left-0 flex flex-row justify-center items-center bg-black bg-opacity-80 z-20"},A1={class:"w-full flex flex-row justify-end items-center mb-1"},b1={class:"w-full h-full flex flex-col justify-center items-center mt-0 mb-5"},hh=Rt({__name:"Modal",props:{width:{default:"w-1/2"},height:{default:"h-3/4"}},emits:["closeModal"],setup(t,{emit:e}){const n=t;return(r,s)=>(re(),we("div",T1,[g("div",{class:_n(["flex flex-col justify-start items-center bg-white rounded-lg pt-2 px-4",n.width+" "+n.height])},[g("div",A1,[g("p",{class:"text-lg font-bold cursor-pointer",onClick:s[0]||(s[0]=i=>r.$emit("closeModal"))},"X")]),g("div",b1,[Op(r.$slots,"default",{},()=>[Ot("MODAL")])])],2)]))}}),R1={key:1,class:"text-sm font-semibold text-center mb-3"},S1=g("strong",null,"UBICACIÓN",-1),P1=[S1],C1=["src"],x1={key:3,class:"text-sm font-semibold text-center mt-5 max-w-80"},k1=Rt({__name:"GoogleMapsModal",setup(t){const e=pe("AIzaSyDyp1H4_IoRX2Z6AbXFtqUmKJlpkCu91HY"),n=Ry();return(r,s)=>K(n).showModal?(re(),_t(hh,{key:0,onCloseModal:s[1]||(s[1]=i=>K(n).setShowModal(!1)),width:"w-3/4",height:"h-3/4"},{default:Lt(()=>[K(n).isLoading?(re(),_t(uh,{key:0})):It("",!0),K(n).isLoading?It("",!0):(re(),we("p",R1,P1)),K(n).placeId?(re(),we("iframe",{key:2,class:"w-full h-full",style:{border:"0"},Loading:"lazy",allowfullscreen:"",onLoad:s[0]||(s[0]=i=>K(n).setIsLoading(!1)),src:`https://www.google.com/maps/embed/v1/place?q=place_id:${K(n).placeId}&key=${e.value}`},null,40,C1)):It("",!0),K(n).isLoading?It("",!0):(re(),we("p",x1,wt(K(n).address),1))]),_:1})):It("",!0)}}),O1={key:1,class:"w-full flex flex-col justify-center items-center"},D1={class:"flex flex-col rounded-md w-full"},N1=g("label",{for:"email",class:"text-blue-900 font-semibold text-xs mb-1"},"Correo electrónico",-1),V1={class:"flex flex-col w-full"},M1=g("label",{for:"password",class:"text-blue-900 font-semibold text-xs"},"Contraseña",-1),L1=g("button",{type:"submit",class:"w-full flex flex-row justify-center items-center mt-3 py-1 rounded-md bg-blue-600 hover:opacity-80 text-blue-100 font-bold"},"Iniciar sesión",-1),U1=g("div",{class:"flex flex-row justify-between items-baseline"},[g("hr",{class:"h-[2px] w-24 bg-[#ededed]"}),g("p",{class:"my-4 mx-2 text-gray-500"},"o"),g("hr",{class:"h-[2px] w-24 bg-[#ededed]"})],-1),F1=g("svg",{class:"h-6",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},[g("g",null,[g("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),g("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),g("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),g("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),g("path",{fill:"none",d:"M0 0h48v48H0z"})])],-1),$1=g("p",{class:"ml-3"},"Iniciar sesión con Google",-1),j1=[F1,$1],B1=Rt({__name:"LoginModal",setup(t){const e=Sy(),n=Es(),r=ch(),s=pe(""),i=pe(""),o=async()=>{try{const l=new Kt;await rg(us,l)}catch(l){console.error("Error al iniciar sesión con Google:",l)}},a=async()=>{try{e.setIsLoading(!0),await j0(us,s.value,i.value).then(async()=>{await n.getUserByUid(r==null?void 0:r.uid),e.setIsLoading(!1),e.setShowModal(!1)})}catch(l){console.error("Error al iniciar sesión con correo y contraseña:",l)}};return(l,c)=>K(e).showModal?(re(),_t(hh,{key:0,onCloseModal:c[2]||(c[2]=u=>K(e).setShowModal(!1)),width:"w-3/4",height:"h-3/4"},{default:Lt(()=>[K(e).isLoading?(re(),_t(uh,{key:0})):(re(),we("div",O1,[g("form",{onSubmit:Gp(a,["prevent"]),class:"rounded-md w-full sm:w-2/5 flex flex-col justify-center items-center"},[g("div",D1,[N1,ct(g("input",{class:"h-8 mb-2 pl-2 bg-blue-100 rounded-md",style:{outline:"none"},type:"email",id:"email","onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),required:""},null,512),[[pt,s.value]])]),g("div",V1,[M1,ct(g("input",{class:"h-8 mb-2 pl-2 bg-blue-100 rounded-md",style:{outline:"none"},type:"password",id:"password","onUpdate:modelValue":c[1]||(c[1]=u=>i.value=u),required:""},null,512),[[pt,i.value]])]),L1,U1],32),g("button",{type:"button",class:"mt-2 flex flex-row justify-evenly items-center bg-white border-blue-100 border-2 w-fit rounded-md px-3 py-1 hover:opacity-60",onClick:o},j1)]))]),_:1})):It("",!0)}}),q1={key:1,class:"w-full flex flex-col justify-center items-center"},H1={class:"flex flex-col rounded-md w-full"},W1=g("label",{for:"email",class:"text-blue-900 font-semibold text-xs mb-1"},"Correo electrónico",-1),z1={class:"flex flex-col w-full"},K1=g("label",{for:"password",class:"text-blue-900 font-semibold text-xs"},"Contraseña",-1),G1=g("button",{type:"submit",class:"w-full flex flex-row justify-center items-center mt-3 py-1 rounded-md bg-blue-600 hover:opacity-80 text-blue-100 font-bold"},"Registrarse",-1),Q1=g("div",{class:"flex flex-row justify-between items-baseline"},[g("hr",{class:"h-[2px] w-24 bg-[#ededed]"}),g("p",{class:"my-4 mx-2 text-gray-500"},"o"),g("hr",{class:"h-[2px] w-24 bg-[#ededed]"})],-1),J1=g("svg",{class:"h-6",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},[g("g",null,[g("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),g("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),g("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),g("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),g("path",{fill:"none",d:"M0 0h48v48H0z"})])],-1),Y1=g("p",{class:"ml-3"},"Registrarse con Google",-1),X1=[J1,Y1],Z1=Rt({__name:"RegisterModal",setup(t){const e=hm(),n=Py(),r=Es(),s=pe(""),i=pe(""),o=async()=>{try{n.setShowModal(!0),await $0(us,s.value,i.value).then(async({user:{uid:l}})=>{await r.createUser(l).then(()=>{n.setShowModal(!1),e.push({name:"Profile"})})})}catch(l){console.error("Error al registrar el usuario:",l)}},a=async()=>{try{const l=new Kt;await rg(us,l)}catch(l){console.error("Error al iniciar sesión con Google:",l)}};return(l,c)=>K(n).showModal?(re(),_t(hh,{key:0,onCloseModal:c[2]||(c[2]=u=>K(n).setShowModal(!1)),width:"w-3/4",height:"h-3/4"},{default:Lt(()=>[K(n).isLoading?(re(),_t(uh,{key:0})):(re(),we("div",q1,[g("form",{onSubmit:Gp(o,["prevent"]),class:"rounded-md w-full sm:w-2/5 flex flex-col justify-center items-center"},[g("div",H1,[W1,ct(g("input",{class:"h-8 mb-2 pl-2 bg-blue-100 rounded-md",style:{outline:"none"},type:"email",id:"email","onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),required:""},null,512),[[pt,s.value]])]),g("div",z1,[K1,ct(g("input",{class:"h-8 mb-2 pl-2 bg-blue-100 rounded-md",style:{outline:"none"},type:"password",id:"password","onUpdate:modelValue":c[1]||(c[1]=u=>i.value=u),required:""},null,512),[[pt,i.value]])]),G1,Q1],32),g("button",{type:"button",class:"mt-2 flex flex-row justify-evenly items-center bg-white border-blue-100 border-2 w-fit rounded-md px-3 py-1 hover:opacity-60",onClick:a},X1)]))]),_:1})):It("",!0)}}),ex={},tx={class:"footer"},nx={class:"pt-10 pb-7 px-10 text-center text-blue-900 font-bold"};function rx(t,e){return re(),we("footer",tx,[g("div",nx,[g("p",null,"© "+wt(new Date().getFullYear())+" Motormate. Todos los derechos reservados.",1)])])}const sx=Cy(ex,[["render",rx]]),ix={class:"flex flex-col w-full h-screen overflow-hidden"},ox={class:"flex flex-row w-full h-full overflow-y-auto"},ax={class:"md:container md:mx-auto w-full sm:pl-44"},lx={class:"w-full h-full"},dh=Rt({__name:"Layout",setup(t){return(e,n)=>(re(),we("div",ix,[ke(k1),ke(B1),ke(Z1),ke(d1),g("div",ox,[ke(v1),g("span",ax,[g("div",lx,[Op(e.$slots,"default",{},()=>[Ot("Add view")]),ke(sx)])])])]))}}),cx="/assets/adjustable-wrench-R0lMtTwB.png",ux="/assets/fan-CsgU8Uvx.png",hx="/assets/brakes-dzGoctIr.png",dx="/assets/oil-CO9vyqw0.png",fx="/assets/spray-vO-oeRxu.png",xy="/assets/whatsapp-Bv3ceAgd.png",px={class:"md:container md:mx-auto bg-white pt-5"},mx=g("h1",{class:"text-2xl text-left pl-5 text-blue-900 font-black mb-4"},"SERVICIOS PARA AUTOMÓVILES A DOMICILIO",-1),gx=g("p",{class:"text-left pl-5 text-blue-900 font-normal mb-6"},[Ot("Lista de servicios de mantenimiento y reparación de automóviles "),g("strong",null,"disponibles a domicilio"),Ot(".")],-1),_x={class:"flex flex-row flex-wrap justify-evenly items-center"},yx={key:0,class:"text-center text-base text-orange-600 py-0 font-black w-ful"},vx=["src"],Ex=["innerHTML"],wx={key:2,class:"flex flex-row justify-center items-center mb-3 p-1 w-[15rem] rounded-md bg-blue-600 hover:opacity-80"},Ix={class:"text-center text-white text-xl font-bold"},Tx=["src"],Ax=Rt({__name:"AllServices",setup(t){const e=pe([{name:"Lavado",imageSrc:fx,description:'<span>Servicio de lavado <span class="text-orange-600 font-black text-lg not-italic">A DOMICILIO</span> y talleres cerca de ti.</span>',CTAtext:"VER TALLERES",isCarWash:!0},{name:"Afinamiento",organization:"Nombre del taller",imageSrc:cx,description:"<span>Servicio regular para mantener el rendimiento óptimo del vehículo.</span>",price:"Desde S/50",rating:4.5,endedServices:37,mobile:"+51 987654321",CTAtext:"CONTACTAR",isCarWash:!1},{name:"Cambio de Aceite",imageSrc:dx,description:"<span>Cambio de aceite y filtro para garantizar un motor saludable.</span>",price:"S/30 (Incluye filtro)",CTAtext:"CONTACTAR",isCarWash:!1},{name:"Reparación de Frenos",imageSrc:hx,description:"<span>Inspección y reparación de sistemas de frenos para una conducción segura.</span>",price:"Desde S/100",CTAtext:"CONTACTAR",isCarWash:!1},{name:"Revisión de Aire Acondicionado",imageSrc:ux,description:"<span>Recarga y mantenimiento del sistema de aire acondicionado para un clima interior cómodo.</span>",price:"Desde S/60",CTAtext:"CONTACTAR",isCarWash:!1}]);return(n,r)=>{const s=Rp("router-link");return re(),_t(dh,null,{default:Lt(()=>[g("div",px,[mx,gx,g("div",_x,[(re(!0),we(ut,null,Wc(e.value,i=>(re(),we("div",{key:i.name,class:"w-[21rem] h-[25rem] mb-6 p-2 mr-1 bg-green-100 flex flex-col justify-center items-center rounded-lg shadow-xl"},[g("p",{class:_n(["text-center text-2xl font-black",{"text-orange-600":i.isCarWash,"text-blue-600":!i.isCarWash}])},wt(i.name),3),i.price?(re(),we("p",yx,wt(i.price),1)):It("",!0),g("img",{src:i.imageSrc,alt:"Car service",class:"my-6 h-20 rounded"},null,8,vx),g("p",{class:"px-1 rounded mb-6 w-[19rem] text-center text-blue-600 text-base font-mono bg-white italic font-black",innerHTML:i.description},null,8,Ex),i.isCarWash?(re(),_t(s,{key:1,to:{name:"CarWashServices"},class:"hover:opacity-80 mb-3 p-1 w-[15rem] rounded-md text-center text-white text-xl font-bold bg-orange-600"},{default:Lt(()=>[Ot(wt(i.CTAtext),1)]),_:2},1024)):(re(),we("button",wx,[g("p",Ix,wt(i.CTAtext),1),g("img",{src:K(xy),alt:"whatsapp",class:"ml-4 h-6"},null,8,Tx)]))]))),128))])])]),_:1})}}}),bx={class:"md:container md:mx-auto pt-5"},Rx=g("h1",{class:"text-2xl text-left pl-5 text-blue-900 font-black mb-4"},"LAVADO DE AUTOMÓVILES",-1),Sx=g("p",{class:"text-left pl-5 text-blue-900 font-normal mb-6"},[Ot("Lista de talleres de lavado de automóviles disponibles "),g("strong",null,"a domicilio y de forma presencial"),Ot(".")],-1),Px={class:"flex flex-row flex-wrap justify-evenly items-center"},Cx=["innerHTML"],xx={key:1,class:"flex flex-col justify-center items-center rounded-sm text-center mb-4 p-2 max-w-64"},kx=g("p",{class:"text-xs font-normal mb-2"},"Ubicación:",-1),Ox={class:"flex flex-row justify-center items-start mb-4"},Dx=["src"],Nx={class:"text-xs font-semibold"},Vx=["onClick"],Mx={class:"flex flex-col justify-center items-center mb-4"},Lx={class:"mb-1 text-center text-base text-orange-600 font-black w-ful"},Ux={class:"mb-1 text-center text-base text-orange-600 font-black w-ful"},Fx={class:"mb-1 text-center text-base text-orange-600 font-black w-ful"},$x=["onClick"],jx=g("p",{class:"text-center text-white text-xl font-bold"},"Contactar",-1),Bx=["src"],qx=Rt({__name:"CarWashServices",setup(t){const{handleShowGoogleMapsModal:e}=Ry(),n=pe([{key:1,organization:"BRUCCE SAC",description:"<span>Lavado de autos a DOMICILIO</span>",price:{exteriorWash:"s/20",exteriorAndInteriorWash:"s/35",completeWash:"s/50"},email:"irvin.jair.pg@gmail.com",phone:"+51 943800214",whatsapp:"+51 943800214",schedules:{fromMondayToFriday:"8am - 6pm",saturday:"9am - 4pm",sundayOrHolidays:"-"},location:{country:"PER",region:"La Libertad",city:"Trujillo",address:"online",placeId:"ChIJW3gamX89rZERq1EIvzdk53E"},isOnline:!0},{key:2,organization:"AutoTaller QQQ",description:"<span>¡Haz que tu auto luzca como nuevo! En AutoTaller XYZ, ofrecemos un servicio completo de lavado de autos para mantener tu vehículo limpio y reluciente.</span>",price:{exteriorWash:"s/20",exteriorAndInteriorWash:"s/35",completeWash:"s/50"},email:"irvin.jair.pg@gmail.com",phone:"+51 943800214",whatsapp:"-",schedules:{fromMondayToFriday:"8am - 6pm",saturday:"9am - 4pm",sundayOrHolidays:"-"},location:{country:"PER",region:"La Libertad",city:"Trujillo",address:"Jirón Cahuide 439, Urb. Santa María 3era etapa",placeId:"ChIJW3gamX89rZERq1EIvzdk53E"},isOnline:!1},{key:3,organization:"AutoTaller WWW",description:"<span>¡Haz que tu auto luzca como nuevo! En AutoTaller XYZ, ofrecemos un servicio completo de lavado de autos para mantener tu vehículo limpio y reluciente.</span>",price:{exteriorWash:"s/20",exteriorAndInteriorWash:"s/35",completeWash:"s/50"},email:"-",phone:"+51 943800214",whatsapp:"+51 943800214",schedules:{fromMondayToFriday:"8am - 6pm",saturday:"9am - 4pm",sundayOrHolidays:"-"},location:{country:"PER",region:"La Libertad",city:"Trujillo",address:"Jirón Cahuide 439, Urb. Santa María 3era etapa",placeId:"ChIJW3gamX89rZERq1EIvzdk53E"},isOnline:!1},{key:4,organization:"AutoTaller EEE",description:"<span>¡Haz que tu auto luzca como nuevo! En AutoTaller XYZ, ofrecemos un servicio completo de lavado de autos para mantener tu vehículo limpio y reluciente.</span>",price:{exteriorWash:"s/20",exteriorAndInteriorWash:"s/35",completeWash:"s/50"},email:"irvin.jair.pg@gmail.com",phone:"",whatsapp:"+51 943800214",schedules:{fromMondayToFriday:"8am - 6pm",saturday:"9am - 4pm",sundayOrHolidays:"-"},location:{country:"PER",region:"La Libertad",city:"Trujillo",address:"Jirón Cahuide 439, Urb. Santa María 3era etapa",placeId:"ChIJW3gamX89rZERq1EIvzdk53E"},isOnline:!1},{key:5,organization:"AutoTaller RRR",description:"<span>¡Haz que tu auto luzca como nuevo! En AutoTaller XYZ, ofrecemos un servicio completo de lavado de autos para mantener tu vehículo limpio y reluciente.</span>",price:{exteriorWash:"s/20",exteriorAndInteriorWash:"s/35",completeWash:"s/50"},email:"irvin.jair.pg@gmail.com",phone:"+51 943800214",whatsapp:"+51 943800214",schedules:{fromMondayToFriday:"8am - 6pm",saturday:"9am - 4pm",sundayOrHolidays:"-"},location:{country:"PER",region:"La Libertad",city:"Trujillo",address:"Jirón Cahuide 439, Urb. Santa María 3era etapa",placeId:"ChIJW3gamX89rZERq1EIvzdk53E"},isOnline:!1},{key:6,organization:"AutoTaller TTT",description:"<span>¡Haz que tu auto luzca como nuevo! En AutoTaller XYZ, ofrecemos un servicio completo de lavado de autos para mantener tu vehículo limpio y reluciente.</span>",price:{exteriorWash:"s/20",exteriorAndInteriorWash:"s/35",completeWash:"s/50"},email:"irvin.jair.pg@gmail.com",phone:"+51 943800214",whatsapp:"+51 943800214",schedules:{fromMondayToFriday:"8am - 6pm",saturday:"9am - 4pm",sundayOrHolidays:"-"},location:{country:"PER",region:"La Libertad",city:"Trujillo",address:"Jirón Cahuide 439, Urb. Santa María 3era etapa",placeId:"ChIJW3gamX89rZERq1EIvzdk53E"},isOnline:!1},{key:7,organization:"AutoTaller YYY",description:"<span>¡Haz que tu auto luzca como nuevo! En AutoTaller XYZ, ofrecemos un servicio completo de lavado de autos para mantener tu vehículo limpio y reluciente.</span>",price:{exteriorWash:"s/20",exteriorAndInteriorWash:"s/35",completeWash:"s/50"},email:"irvin.jair.pg@gmail.com",phone:"+51 943800214",whatsapp:"+51 943800214",schedules:{fromMondayToFriday:"8am - 6pm",saturday:"9am - 4pm",sundayOrHolidays:"-"},location:{country:"PER",region:"La Libertad",city:"Trujillo",address:"Jirón Cahuide 439, Urb. Santa María 3era etapa",placeId:"ChIJW3gamX89rZERq1EIvzdk53E"},isOnline:!1}]);function r(s){return s.whatsapp}return(s,i)=>(re(),_t(dh,null,{default:Lt(()=>[g("div",bx,[Rx,Sx,g("div",Px,[(re(!0),we(ut,null,Wc(n.value,o=>(re(),we("div",{key:o.key,class:"cursor-default w-[21rem] h-[26rem] mb-6 p-2 mr-1 bg-green-100 flex flex-col justify-center items-center rounded-lg shadow-xl"},[g("p",{class:_n(["mb-3 text-center text-2xl font-black",{"text-orange-600":o.isOnline,"text-blue-600":!o.isOnline}])},wt(o.organization),3),o.isOnline?(re(),we("p",{key:0,class:"px-1 rounded mb-6 w-[19rem] text-center text-blue-600 font-black font-mono bg-white italic",innerHTML:o.description},null,8,Cx)):It("",!0),o.isOnline?It("",!0):(re(),we("span",xx,[kx,g("span",Ox,[g("img",{src:K(by),alt:"Location icon",class:"w-4"},null,8,Dx),g("p",Nx,wt(o.location.address),1)]),g("button",{onClick:a=>K(e)(o.location),class:"text-xs font-bold text-white bg-gray-500 hover:text-gray-500 hover:bg-white border-2 border-gray-500 hover:gray-green-500 rounded-lg py-1 px-10"},"Ver mapa",8,Vx)])),g("div",Mx,[g("p",Lx,"Lavado exterior: "+wt(o.price.exteriorWash),1),g("p",Ux,"Lavado interior: "+wt(o.price.exteriorAndInteriorWash),1),g("p",Fx,"Lavado completo: "+wt(o.price.completeWash),1)]),g("button",{onClick:a=>r(o.whatsapp),class:_n(["hover:opacity-80 flex flex-row justify-center items-center mb-3 p-1 w-[15rem] rounded-md",{"bg-orange-600":o.isOnline,"bg-blue-600":!o.isOnline}])},[jx,g("img",{src:K(xy),alt:"whatsapp",class:"ml-4 h-6"},null,8,Bx)],10,$x)]))),128))])])]),_:1}))}}),Hx={class:"md:container md:mx-auto pt-5 mb-11"},Wx=g("h1",{class:"text-left pl-5 text-2xl text-blue-900 font-black mb-4"},"CONFIGURACIÓN",-1),zx=g("p",{class:"text-left pl-5 text-blue-900 font-normal mb-6"},"Llena tus datos y activa notificaciones.",-1),Kx={class:"mb-4 rounded-md w-11/12 mx-5 p-5 flex flex-col justify-center items-start bg-blue-100"},Gx=g("h2",{class:"text-lg text-left text-blue-900 font-bold mb-6"},"Información de contacto",-1),Qx={class:"field flex flex-col mb-2 w-full"},Jx=g("label",{for:"first-name",class:"text-blue-900 font-bold text-xs mb-1"},"Nombres",-1),Yx={class:"field flex flex-col w-full"},Xx=g("label",{for:"last-name",class:"text-blue-900 font-bold text-xs mb-1"},"Apellidos",-1),Zx={class:"field flex flex-col w-full"},ek=g("label",{for:"phone",class:"text-blue-900 font-bold text-xs mb-1"},"Teléfono",-1),tk={class:"mb-4 rounded-md w-11/12 mx-5 p-5 flex flex-col justify-center items-start bg-blue-100"},nk={class:"flex flex-row justify-between items-center w-full mb-6"},rk=g("h2",{class:"text-lg text-left text-blue-900 font-bold mb-4"},"Información de tus automóviles",-1),sk={class:"w-full flex flex-row justify-between items-center mb-4"},ik={class:"text-xl text-left text-blue-600 font-black"},ok=["onClick"],ak={class:"w-full flex flex-row justify-between items-center"},lk={class:"field flex flex-col mb-2 w-full mr-1"},ck=g("label",{for:"brand",class:"text-blue-900 font-bold text-xs mb-1"},"Marca",-1),uk=["onUpdate:modelValue"],hk={class:"field flex flex-col mb-2 w-full ml-1"},dk=g("label",{for:"model",class:"text-blue-900 font-bold text-xs mb-1"},"Modelo",-1),fk=["onUpdate:modelValue"],pk={class:"w-full flex flex-row justify-between items-center"},mk={class:"field flex flex-col mb-2 w-full mr-1"},gk=g("label",{for:"year",class:"text-blue-900 font-bold text-xs mb-1"},"Año",-1),_k=["onUpdate:modelValue"],yk={class:"field flex flex-col mb-2 w-full mr-1 ml-1"},vk=g("label",{for:"mileage",class:"text-blue-900 font-bold text-xs mb-1"},"Kilometraje Actual",-1),Ek=["onUpdate:modelValue"],wk={class:"field flex flex-col mb-2 w-full ml-1"},Ik=g("label",{for:"fuel-type",class:"text-blue-900 font-bold text-xs mb-1"},"Tipo de Combustible",-1),Tk=["onUpdate:modelValue"],Ak=g("option",{value:"gasolina"},"Gasolina",-1),bk=g("option",{value:"gnv"},"GNV",-1),Rk=g("option",{value:"glp"},"GLP",-1),Sk=g("option",{value:"diesel"},"Diésel",-1),Pk=g("option",{value:"hibrido"},"Híbrido",-1),Ck=[Ak,bk,Rk,Sk,Pk],xk={class:"w-full flex flex-row justify-between items-center"},kk={class:"field flex flex-col mb-2 w-full mr-1"},Ok=g("label",{for:"soat-expiry",class:"text-blue-900 font-bold text-xs mb-1"},"Fecha vencimiento SOAT",-1),Dk=["onUpdate:modelValue"],Nk={class:"field flex flex-col mb-2 w-full mr-1 ml-1"},Vk=g("label",{for:"annual-inspection",class:"text-blue-900 font-bold text-xs mb-1"},"Fecha revisión técnica anual",-1),Mk=["onUpdate:modelValue"],Lk={class:"field flex flex-col mb-2 w-full ml-1"},Uk=g("label",{for:"technical-inspection",class:"text-blue-900 font-bold text-xs mb-1"},"Fecha inspección técnica anual",-1),Fk=["onUpdate:modelValue"],$k={key:0,class:"h-0.5 w-full mb-8 bg-white"},jk=Rt({__name:"Profile",setup(t){const e=Es(),n=hm();function r(){e.updateUser({uid:e.uid,firstName:e.firstName,lastName:e.lastName,phone:e.phone,cars:e.cars}).then(()=>{alert("Tus datos se actualizaron con éxito")})}return Hc(()=>{e.uid||n.push({name:"Home"})}),(s,i)=>(re(),_t(dh,null,{default:Lt(()=>[g("div",Hx,[Wx,zx,g("form",Kx,[Gx,g("div",Qx,[Jx,ct(g("input",{id:"first-name","onUpdate:modelValue":i[0]||(i[0]=o=>K(e).firstName=o),type:"text",placeholder:"Ingresa tu nombre",class:"mb-4 pl-2",style:{outline:"none"}},null,512),[[pt,K(e).firstName]])]),g("div",Yx,[Xx,ct(g("input",{id:"last-name","onUpdate:modelValue":i[1]||(i[1]=o=>K(e).lastName=o),type:"text",placeholder:"Ingresa tus apellidos",class:"mb-4 pl-2",style:{outline:"none"}},null,512),[[pt,K(e).lastName]])]),g("div",Zx,[ek,ct(g("input",{id:"phone","onUpdate:modelValue":i[2]||(i[2]=o=>K(e).phone=o),type:"tel",placeholder:"Ingresa tu número de teléfono",class:"mb-4 pl-2",style:{outline:"none"}},null,512),[[pt,K(e).phone]])])]),g("form",tk,[g("span",nk,[rk,g("button",{type:"button",onClick:i[3]||(i[3]=(...o)=>K(e).addCar&&K(e).addCar(...o)),class:"pointer-default bg-blue-600 hover:opacity-80 text-blue-100 font-bold rounded-md px-4 py-1"},"Agregar automóvil +")]),(re(!0),we(ut,null,Wc(K(e).cars,(o,a)=>(re(),we("span",{key:a,class:"flex flex-col justify-between items-center w-full"},[g("span",sk,[g("p",ik,"AUTO N° "+wt(a+1),1),g("button",{type:"button",onClick:l=>K(e).removeCar(a),class:"ml-4 px-2 rounded-md hover:bg-blue-600 hover:text-white font-bold text-blue-600 bg-white"},"Descartar auto",8,ok)]),g("span",ak,[g("div",lk,[ck,ct(g("input",{id:"brand","onUpdate:modelValue":l=>o.brand=l,type:"text",placeholder:"Ejemplo: Toyota, Honda, etc.",class:"mb-4 pl-2",style:{outline:"none"}},null,8,uk),[[pt,o.brand]])]),g("div",hk,[dk,ct(g("input",{id:"model","onUpdate:modelValue":l=>o.model=l,type:"text",placeholder:"Ejemplo: Corolla, Civic, etc.",class:"mb-4 pl-2",style:{outline:"none"}},null,8,fk),[[pt,o.model]])])]),g("span",pk,[g("div",mk,[gk,ct(g("input",{id:"year","onUpdate:modelValue":l=>o.year=l,type:"number",placeholder:"Ejemplo: 2022",class:"mb-4 pl-2",style:{outline:"none"}},null,8,_k),[[pt,o.year]])]),g("div",yk,[vk,ct(g("input",{id:"mileage","onUpdate:modelValue":l=>o.mileage=l,type:"number",placeholder:"Ejemplo: 50000",class:"mb-4 pl-2",style:{outline:"none"}},null,8,Ek),[[pt,o.mileage]])]),g("div",wk,[Ik,ct(g("select",{id:"fuel-type","onUpdate:modelValue":l=>o.fuelType=l,class:"mb-4 pl-2",style:{outline:"none"}},Ck,8,Tk),[[GE,o.fuelType]])])]),g("span",xk,[g("div",kk,[Ok,ct(g("input",{id:"soat-expiry","onUpdate:modelValue":l=>o.soatExpiry=l,type:"date",class:"mb-4 pl-2",style:{outline:"none"}},null,8,Dk),[[pt,o.soatExpiry]])]),g("div",Nk,[Vk,ct(g("input",{id:"annual-inspection","onUpdate:modelValue":l=>o.annualInspection=l,type:"date",class:"mb-4 pl-2",style:{outline:"none"}},null,8,Mk),[[pt,o.annualInspection]])]),g("div",Lk,[Uk,ct(g("input",{id:"technical-inspection","onUpdate:modelValue":l=>o.technicalInspection=l,type:"date",class:"mb-4 pl-2",style:{outline:"none"}},null,8,Fk),[[pt,o.technicalInspection]])])]),a!=K(e).cars.length-1&&K(e).cars.length>0?(re(),we("div",$k)):It("",!0)]))),128))]),g("button",{type:"submit",onClick:r,class:"w-11/12 flex flex-row justify-center items-center mx-5 mb-3 p-1 rounded-md bg-blue-600 hover:opacity-80 text-blue-100 font-bold"},"GUARDAR")])]),_:1}))}}),Bk=cI({history:Fw("/"),routes:[{path:"/",name:"Home",redirect:"/all-services"},{path:"/all-services",name:"AllServices",component:Ax},{path:"/car-wash-services",name:"CarWashServices",component:qx},{path:"/profile",name:"Profile",component:jk}]}),fh=ZE(JC);fh.use(rw());fh.use(Bk);fh.mount("#app");
